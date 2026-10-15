// Generated file based on query.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"

import * as __goscript_common_pb from "./common.pb.gs.ts"

import * as __goscript_workflow_pb from "./workflow.pb.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "./common.pb.gs.ts"
import "./workflow.pb.gs.ts"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.QueryResultType", "apiv1.QueryRejectCondition", "apiv1.QueryConsistencyLevel", "apiv1.WorkflowQuery", "apiv1.WorkflowQueryResult", "apiv1.QueryRejected"])

export type QueryResultType = number

$.registerNamedValueType(
	"apiv1.QueryResultType",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (QueryResultType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (QueryResultType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.QueryResultType",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (QueryResultType_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (QueryResultType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type QueryRejectCondition = number

$.registerNamedValueType(
	"apiv1.QueryRejectCondition",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (QueryRejectCondition_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (QueryRejectCondition_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.QueryRejectCondition",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (QueryRejectCondition_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (QueryRejectCondition_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type QueryConsistencyLevel = number

$.registerNamedValueType(
	"apiv1.QueryConsistencyLevel",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (QueryConsistencyLevel_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (QueryConsistencyLevel_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.QueryConsistencyLevel",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (QueryConsistencyLevel_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (QueryConsistencyLevel_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class WorkflowQuery {
	public get QueryType(): string {
		return this._fields.QueryType
	}

	public set QueryType(value: string) {
		this._fields.QueryType = value
	}

	public get QueryArgs(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.QueryArgs
	}

	public set QueryArgs(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.QueryArgs = value
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
		QueryType: string
		QueryArgs: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{QueryType?: string, QueryArgs?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			QueryType: init?.QueryType ?? ("" as string),
			QueryArgs: init?.QueryArgs ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkflowQuery {
		return new WorkflowQuery(this, true)
	}

	public __goscriptAssign(source: WorkflowQuery): void {
		const target = this._fields
		const values = source._fields
		target.QueryType = values.QueryType
		target.QueryArgs = values.QueryArgs
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_91769cfce21084c6, $.arrayToSlice<number>([0])]
	}

	public GetQueryArgs(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: WorkflowQuery | $.VarRef<WorkflowQuery> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowQuery>(m).QueryArgs
		}
		return null
	}

	public GetQueryType(): string {
		const m: WorkflowQuery | $.VarRef<WorkflowQuery> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowQuery>(m).QueryType
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: WorkflowQuery | $.VarRef<WorkflowQuery> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowQuery).Size() : WorkflowQuery.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple0: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowQuery).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowQuery.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowQuery | $.VarRef<WorkflowQuery> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowQuery).Size() : WorkflowQuery.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowQuery).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowQuery.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowQuery | $.VarRef<WorkflowQuery> | null = this;
		const m$: WorkflowQuery = m == null ? $.pointerTarget<WorkflowQuery>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowQuery>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as WorkflowQuery).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as WorkflowQuery).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowQuery).XXX_unrecognized)
		}
		if ((m$ as WorkflowQuery).QueryArgs != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as WorkflowQuery).QueryArgs, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintQuery(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as WorkflowQuery).QueryType) > 0) {
			i = i - ($.stringLen((m$ as WorkflowQuery).QueryType))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowQuery).QueryType)
			i = encodeVarintQuery(dAtA, i, $.uint64($.stringLen((m$ as WorkflowQuery).QueryType)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: WorkflowQuery | $.VarRef<WorkflowQuery> | null = this;
		$.assignStruct($.pointerValue<WorkflowQuery>(m), $.markAsStructValue(new WorkflowQuery()))
	}

	public Size(): number {
		const m: WorkflowQuery | $.VarRef<WorkflowQuery> | null = this;
		let n: number = 0
		const m$: WorkflowQuery = m == null ? $.pointerTarget<WorkflowQuery>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowQuery>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as WorkflowQuery).QueryType)
		if (l > 0) {
			n = n + ((1 + l) + sovQuery($.uint64(l)))
		}
		if ((m$ as WorkflowQuery).QueryArgs != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as WorkflowQuery).QueryArgs)
			n = n + ((1 + l) + sovQuery($.uint64(l)))
		}
		if ((m$ as WorkflowQuery).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as WorkflowQuery).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: WorkflowQuery | $.VarRef<WorkflowQuery> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowQuery", /* @__PURE__ */ $.pointerType("apiv1.WorkflowQuery")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: WorkflowQuery | $.VarRef<WorkflowQuery> | null = this;
		const m$: WorkflowQuery = m == null ? $.pointerTarget<WorkflowQuery>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowQuery>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowQuery
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
				return fmt.Errorf("proto: WorkflowQuery: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: WorkflowQuery: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field QueryType", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowQuery
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
						return ErrInvalidLengthQuery
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthQuery
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowQuery).QueryType = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field QueryArgs", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowQuery
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
						return ErrInvalidLengthQuery
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthQuery
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowQuery).QueryArgs == null) {
						;(m$ as WorkflowQuery).QueryArgs = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as WorkflowQuery).QueryArgs, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipQuery($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthQuery
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowQuery).XXX_unrecognized = $.appendSlice((m$ as WorkflowQuery).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: WorkflowQuery | $.VarRef<WorkflowQuery> | null = this;
		xxx_messageInfo_WorkflowQuery.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowQuery", /* @__PURE__ */ $.pointerType("apiv1.WorkflowQuery")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: WorkflowQuery | $.VarRef<WorkflowQuery> | null = this;
		if (deterministic) {
			return xxx_messageInfo_WorkflowQuery.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowQuery", /* @__PURE__ */ $.pointerType("apiv1.WorkflowQuery")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowQuery).MarshalToSizedBuffer(b) : WorkflowQuery.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: WorkflowQuery | $.VarRef<WorkflowQuery> | null = this;
		xxx_messageInfo_WorkflowQuery.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowQuery", /* @__PURE__ */ $.pointerType("apiv1.WorkflowQuery")), src)
	}

	public XXX_Size(): number {
		const m: WorkflowQuery | $.VarRef<WorkflowQuery> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowQuery).Size() : WorkflowQuery.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: WorkflowQuery | $.VarRef<WorkflowQuery> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowQuery).Unmarshal(b) : WorkflowQuery.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.WorkflowQuery",
		() => new WorkflowQuery(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetQueryArgs", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetQueryType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		WorkflowQuery,
		() => [{ name: "QueryType", key: "QueryType", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=query_type,json=queryType,proto3\" json:\"query_type,omitempty\"" }, { name: "QueryArgs", key: "QueryArgs", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,2,opt,name=query_args,json=queryArgs,proto3\" json:\"query_args,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class WorkflowQueryResult {
	public get ResultType(): QueryResultType {
		return this._fields.ResultType
	}

	public set ResultType(value: QueryResultType) {
		this._fields.ResultType = value
	}

	public get Answer(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.Answer
	}

	public set Answer(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.Answer = value
	}

	public get ErrorMessage(): string {
		return this._fields.ErrorMessage
	}

	public set ErrorMessage(value: string) {
		this._fields.ErrorMessage = value
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
		ResultType: QueryResultType
		Answer: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		ErrorMessage: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{ResultType?: QueryResultType, Answer?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, ErrorMessage?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ResultType: init?.ResultType ?? (0 as QueryResultType),
			Answer: init?.Answer ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			ErrorMessage: init?.ErrorMessage ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkflowQueryResult {
		return new WorkflowQueryResult(this, true)
	}

	public __goscriptAssign(source: WorkflowQueryResult): void {
		const target = this._fields
		const values = source._fields
		target.ResultType = values.ResultType
		target.Answer = values.Answer
		target.ErrorMessage = values.ErrorMessage
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_91769cfce21084c6, $.arrayToSlice<number>([1])]
	}

	public GetAnswer(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: WorkflowQueryResult | $.VarRef<WorkflowQueryResult> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowQueryResult>(m).Answer
		}
		return null
	}

	public GetErrorMessage(): string {
		const m: WorkflowQueryResult | $.VarRef<WorkflowQueryResult> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowQueryResult>(m).ErrorMessage
		}
		return ""
	}

	public GetResultType(): QueryResultType {
		const m: WorkflowQueryResult | $.VarRef<WorkflowQueryResult> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowQueryResult>(m).ResultType
		}
		return 0
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: WorkflowQueryResult | $.VarRef<WorkflowQueryResult> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowQueryResult).Size() : WorkflowQueryResult.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple1: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowQueryResult).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowQueryResult.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowQueryResult | $.VarRef<WorkflowQueryResult> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowQueryResult).Size() : WorkflowQueryResult.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowQueryResult).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowQueryResult.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowQueryResult | $.VarRef<WorkflowQueryResult> | null = this;
		const m$: WorkflowQueryResult = m == null ? $.pointerTarget<WorkflowQueryResult>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowQueryResult>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as WorkflowQueryResult).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as WorkflowQueryResult).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowQueryResult).XXX_unrecognized)
		}
		if ($.stringLen((m$ as WorkflowQueryResult).ErrorMessage) > 0) {
			i = i - ($.stringLen((m$ as WorkflowQueryResult).ErrorMessage))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowQueryResult).ErrorMessage)
			i = encodeVarintQuery(dAtA, i, $.uint64($.stringLen((m$ as WorkflowQueryResult).ErrorMessage)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as WorkflowQueryResult).Answer != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as WorkflowQueryResult).Answer, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintQuery(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as WorkflowQueryResult).ResultType != 0) {
			i = encodeVarintQuery(dAtA, i, $.uint64((m$ as WorkflowQueryResult).ResultType))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: WorkflowQueryResult | $.VarRef<WorkflowQueryResult> | null = this;
		$.assignStruct($.pointerValue<WorkflowQueryResult>(m), $.markAsStructValue(new WorkflowQueryResult()))
	}

	public Size(): number {
		const m: WorkflowQueryResult | $.VarRef<WorkflowQueryResult> | null = this;
		let n: number = 0
		const m$: WorkflowQueryResult = m == null ? $.pointerTarget<WorkflowQueryResult>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowQueryResult>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as WorkflowQueryResult).ResultType != 0) {
			n = n + (1 + sovQuery($.uint64((m$ as WorkflowQueryResult).ResultType)))
		}
		if ((m$ as WorkflowQueryResult).Answer != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as WorkflowQueryResult).Answer)
			n = n + ((1 + l) + sovQuery($.uint64(l)))
		}
		l = $.stringLen((m$ as WorkflowQueryResult).ErrorMessage)
		if (l > 0) {
			n = n + ((1 + l) + sovQuery($.uint64(l)))
		}
		if ((m$ as WorkflowQueryResult).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as WorkflowQueryResult).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: WorkflowQueryResult | $.VarRef<WorkflowQueryResult> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowQueryResult", /* @__PURE__ */ $.pointerType("apiv1.WorkflowQueryResult")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: WorkflowQueryResult | $.VarRef<WorkflowQueryResult> | null = this;
		const m$: WorkflowQueryResult = m == null ? $.pointerTarget<WorkflowQueryResult>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowQueryResult>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowQuery
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
				return fmt.Errorf("proto: WorkflowQueryResult: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: WorkflowQueryResult: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field ResultType", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as WorkflowQueryResult).ResultType = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowQuery
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++;
						;(m$ as WorkflowQueryResult).ResultType = (m$ as WorkflowQueryResult).ResultType | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Answer", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowQuery
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
						return ErrInvalidLengthQuery
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthQuery
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowQueryResult).Answer == null) {
						;(m$ as WorkflowQueryResult).Answer = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as WorkflowQueryResult).Answer, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field ErrorMessage", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowQuery
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
						return ErrInvalidLengthQuery
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthQuery
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowQueryResult).ErrorMessage = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipQuery($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthQuery
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowQueryResult).XXX_unrecognized = $.appendSlice((m$ as WorkflowQueryResult).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: WorkflowQueryResult | $.VarRef<WorkflowQueryResult> | null = this;
		xxx_messageInfo_WorkflowQueryResult.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowQueryResult", /* @__PURE__ */ $.pointerType("apiv1.WorkflowQueryResult")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: WorkflowQueryResult | $.VarRef<WorkflowQueryResult> | null = this;
		if (deterministic) {
			return xxx_messageInfo_WorkflowQueryResult.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowQueryResult", /* @__PURE__ */ $.pointerType("apiv1.WorkflowQueryResult")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowQueryResult).MarshalToSizedBuffer(b) : WorkflowQueryResult.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: WorkflowQueryResult | $.VarRef<WorkflowQueryResult> | null = this;
		xxx_messageInfo_WorkflowQueryResult.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowQueryResult", /* @__PURE__ */ $.pointerType("apiv1.WorkflowQueryResult")), src)
	}

	public XXX_Size(): number {
		const m: WorkflowQueryResult | $.VarRef<WorkflowQueryResult> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowQueryResult).Size() : WorkflowQueryResult.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: WorkflowQueryResult | $.VarRef<WorkflowQueryResult> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowQueryResult).Unmarshal(b) : WorkflowQueryResult.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.WorkflowQueryResult",
		() => new WorkflowQueryResult(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetAnswer", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetErrorMessage", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetResultType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.QueryResultType") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		WorkflowQueryResult,
		() => [{ name: "ResultType", key: "ResultType", type: /* @__PURE__ */ $.basicType("int32", "apiv1.QueryResultType"), tag: "protobuf:\"varint,1,opt,name=result_type,json=resultType,proto3,enum=uber.cadence.api.v1.QueryResultType\" json:\"result_type,omitempty\"" }, { name: "Answer", key: "Answer", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,2,opt,name=answer,proto3\" json:\"answer,omitempty\"" }, { name: "ErrorMessage", key: "ErrorMessage", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=error_message,json=errorMessage,proto3\" json:\"error_message,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class QueryRejected {
	public get CloseStatus(): __goscript_workflow_pb.WorkflowExecutionCloseStatus {
		return this._fields.CloseStatus
	}

	public set CloseStatus(value: __goscript_workflow_pb.WorkflowExecutionCloseStatus) {
		this._fields.CloseStatus = value
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
		CloseStatus: __goscript_workflow_pb.WorkflowExecutionCloseStatus
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{CloseStatus?: __goscript_workflow_pb.WorkflowExecutionCloseStatus, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			CloseStatus: init?.CloseStatus ?? (0 as __goscript_workflow_pb.WorkflowExecutionCloseStatus),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): QueryRejected {
		return new QueryRejected(this, true)
	}

	public __goscriptAssign(source: QueryRejected): void {
		const target = this._fields
		const values = source._fields
		target.CloseStatus = values.CloseStatus
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_91769cfce21084c6, $.arrayToSlice<number>([2])]
	}

	public GetCloseStatus(): __goscript_workflow_pb.WorkflowExecutionCloseStatus {
		const m: QueryRejected | $.VarRef<QueryRejected> | null = this;
		if (m != null) {
			return $.pointerValue<QueryRejected>(m).CloseStatus
		}
		return 0
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: QueryRejected | $.VarRef<QueryRejected> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryRejected).Size() : QueryRejected.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple2: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryRejected).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : QueryRejected.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: QueryRejected | $.VarRef<QueryRejected> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryRejected).Size() : QueryRejected.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryRejected).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : QueryRejected.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: QueryRejected | $.VarRef<QueryRejected> | null = this;
		const m$: QueryRejected = m == null ? $.pointerTarget<QueryRejected>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QueryRejected>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as QueryRejected).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as QueryRejected).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as QueryRejected).XXX_unrecognized)
		}
		if ((m$ as QueryRejected).CloseStatus != 0) {
			i = encodeVarintQuery(dAtA, i, $.uint64((m$ as QueryRejected).CloseStatus))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: QueryRejected | $.VarRef<QueryRejected> | null = this;
		$.assignStruct($.pointerValue<QueryRejected>(m), $.markAsStructValue(new QueryRejected()))
	}

	public Size(): number {
		const m: QueryRejected | $.VarRef<QueryRejected> | null = this;
		let n: number = 0
		const m$: QueryRejected = m == null ? $.pointerTarget<QueryRejected>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QueryRejected>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as QueryRejected).CloseStatus != 0) {
			n = n + (1 + sovQuery($.uint64((m$ as QueryRejected).CloseStatus)))
		}
		if ((m$ as QueryRejected).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as QueryRejected).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: QueryRejected | $.VarRef<QueryRejected> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.QueryRejected", /* @__PURE__ */ $.pointerType("apiv1.QueryRejected")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: QueryRejected | $.VarRef<QueryRejected> | null = this;
		const m$: QueryRejected = m == null ? $.pointerTarget<QueryRejected>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QueryRejected>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowQuery
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
				return fmt.Errorf("proto: QueryRejected: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: QueryRejected: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field CloseStatus", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as QueryRejected).CloseStatus = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowQuery
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iNdEx)] as number)
						iNdEx++;
						;(m$ as QueryRejected).CloseStatus = (m$ as QueryRejected).CloseStatus | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipQuery($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthQuery
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as QueryRejected).XXX_unrecognized = $.appendSlice((m$ as QueryRejected).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: QueryRejected | $.VarRef<QueryRejected> | null = this;
		xxx_messageInfo_QueryRejected.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.QueryRejected", /* @__PURE__ */ $.pointerType("apiv1.QueryRejected")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: QueryRejected | $.VarRef<QueryRejected> | null = this;
		if (deterministic) {
			return xxx_messageInfo_QueryRejected.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.QueryRejected", /* @__PURE__ */ $.pointerType("apiv1.QueryRejected")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryRejected).MarshalToSizedBuffer(b) : QueryRejected.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: QueryRejected | $.VarRef<QueryRejected> | null = this;
		xxx_messageInfo_QueryRejected.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.QueryRejected", /* @__PURE__ */ $.pointerType("apiv1.QueryRejected")), src)
	}

	public XXX_Size(): number {
		const m: QueryRejected | $.VarRef<QueryRejected> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryRejected).Size() : QueryRejected.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: QueryRejected | $.VarRef<QueryRejected> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryRejected).Unmarshal(b) : QueryRejected.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.QueryRejected",
		() => new QueryRejected(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetCloseStatus", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.WorkflowExecutionCloseStatus") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		QueryRejected,
		() => [{ name: "CloseStatus", key: "CloseStatus", type: /* @__PURE__ */ $.basicType("int32", "apiv1.WorkflowExecutionCloseStatus"), tag: "protobuf:\"varint,1,opt,name=close_status,json=closeStatus,proto3,enum=uber.cadence.api.v1.WorkflowExecutionCloseStatus\" json:\"close_status,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export const QueryResultType_QUERY_RESULT_TYPE_INVALID: QueryResultType = 0

export const QueryResultType_QUERY_RESULT_TYPE_ANSWERED: QueryResultType = 1

export const QueryResultType_QUERY_RESULT_TYPE_FAILED: QueryResultType = 2

export const QueryRejectCondition_QUERY_REJECT_CONDITION_INVALID: QueryRejectCondition = 0

export const QueryRejectCondition_QUERY_REJECT_CONDITION_NOT_OPEN: QueryRejectCondition = 1

export const QueryRejectCondition_QUERY_REJECT_CONDITION_NOT_COMPLETED_CLEANLY: QueryRejectCondition = 2

export const QueryConsistencyLevel_QUERY_CONSISTENCY_LEVEL_INVALID: QueryConsistencyLevel = 0

export const QueryConsistencyLevel_QUERY_CONSISTENCY_LEVEL_EVENTUAL: QueryConsistencyLevel = 1

export const QueryConsistencyLevel_QUERY_CONSISTENCY_LEVEL_STRONG: QueryConsistencyLevel = 2

export let QueryResultType_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "QUERY_RESULT_TYPE_INVALID"], [1, "QUERY_RESULT_TYPE_ANSWERED"], [2, "QUERY_RESULT_TYPE_FAILED"]])

export function __goscript_set_QueryResultType_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	QueryResultType_name = __goscriptValue
}

export let QueryResultType_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["QUERY_RESULT_TYPE_INVALID", 0], ["QUERY_RESULT_TYPE_ANSWERED", 1], ["QUERY_RESULT_TYPE_FAILED", 2]])

export function __goscript_set_QueryResultType_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	QueryResultType_value = __goscriptValue
}

export function QueryResultType_String(x: QueryResultType): string {
	return proto.EnumName(QueryResultType_name, $.int(x, 32))
}

export function QueryResultType_EnumDescriptor(recv: QueryResultType): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_91769cfce21084c6, $.arrayToSlice<number>([0])]
}

export let QueryRejectCondition_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "QUERY_REJECT_CONDITION_INVALID"], [1, "QUERY_REJECT_CONDITION_NOT_OPEN"], [2, "QUERY_REJECT_CONDITION_NOT_COMPLETED_CLEANLY"]])

export function __goscript_set_QueryRejectCondition_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	QueryRejectCondition_name = __goscriptValue
}

export let QueryRejectCondition_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["QUERY_REJECT_CONDITION_INVALID", 0], ["QUERY_REJECT_CONDITION_NOT_OPEN", 1], ["QUERY_REJECT_CONDITION_NOT_COMPLETED_CLEANLY", 2]])

export function __goscript_set_QueryRejectCondition_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	QueryRejectCondition_value = __goscriptValue
}

export function QueryRejectCondition_String(x: QueryRejectCondition): string {
	return proto.EnumName(QueryRejectCondition_name, $.int(x, 32))
}

export function QueryRejectCondition_EnumDescriptor(recv: QueryRejectCondition): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_91769cfce21084c6, $.arrayToSlice<number>([1])]
}

export let QueryConsistencyLevel_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "QUERY_CONSISTENCY_LEVEL_INVALID"], [1, "QUERY_CONSISTENCY_LEVEL_EVENTUAL"], [2, "QUERY_CONSISTENCY_LEVEL_STRONG"]])

export function __goscript_set_QueryConsistencyLevel_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	QueryConsistencyLevel_name = __goscriptValue
}

export let QueryConsistencyLevel_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["QUERY_CONSISTENCY_LEVEL_INVALID", 0], ["QUERY_CONSISTENCY_LEVEL_EVENTUAL", 1], ["QUERY_CONSISTENCY_LEVEL_STRONG", 2]])

export function __goscript_set_QueryConsistencyLevel_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	QueryConsistencyLevel_value = __goscriptValue
}

export function QueryConsistencyLevel_String(x: QueryConsistencyLevel): string {
	return proto.EnumName(QueryConsistencyLevel_name, $.int(x, 32))
}

export function QueryConsistencyLevel_EnumDescriptor(recv: QueryConsistencyLevel): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_91769cfce21084c6, $.arrayToSlice<number>([2])]
}

export let xxx_messageInfo_WorkflowQuery: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_WorkflowQuery(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_WorkflowQuery.value, __goscriptValue)
}

export let xxx_messageInfo_WorkflowQueryResult: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_WorkflowQueryResult(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_WorkflowQueryResult.value, __goscriptValue)
}

export let xxx_messageInfo_QueryRejected: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_QueryRejected(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_QueryRejected.value, __goscriptValue)
}

function __goscriptInit0(): void {
	proto.RegisterEnum("uber.cadence.api.v1.QueryResultType", QueryResultType_name, QueryResultType_value)
	proto.RegisterEnum("uber.cadence.api.v1.QueryRejectCondition", QueryRejectCondition_name, QueryRejectCondition_value)
	proto.RegisterEnum("uber.cadence.api.v1.QueryConsistencyLevel", QueryConsistencyLevel_name, QueryConsistencyLevel_value)
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.WorkflowQuery", /* @__PURE__ */ $.pointerType("apiv1.WorkflowQuery")), "uber.cadence.api.v1.WorkflowQuery")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.WorkflowQueryResult", /* @__PURE__ */ $.pointerType("apiv1.WorkflowQueryResult")), "uber.cadence.api.v1.WorkflowQueryResult")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.QueryRejected", /* @__PURE__ */ $.pointerType("apiv1.QueryRejected")), "uber.cadence.api.v1.QueryRejected")
}

function __goscriptInit1(): void {
	proto.RegisterFile("uber/cadence/api/v1/query.proto", fileDescriptor_91769cfce21084c6)
}

export let fileDescriptor_91769cfce21084c6: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 140, 83, 193, 110, 211, 76, 24, 252, 55, 191, 84, 169, 95, 91, 176, 182, 32, 66, 213, 166, 81, 218, 67, 85, 129, 77, 10, 183, 158, 92, 103, 65, 70, 174, 237, 218, 110, 170, 112, 177, 28, 103, 27, 76, 29, 175, 89, 219, 9, 121, 1, 238, 60, 13, 175, 192, 145, 71, 64, 121, 18, 100, 199, 33, 129, 184, 136, 219, 231, 249, 102, 60, 51, 90, 125, 112, 152, 245, 41, 151, 124, 111, 64, 35, 159, 74, 94, 28, 72, 227, 182, 244, 49, 163, 124, 42, 198, 156, 165, 12, 239, 230, 4, 177, 36, 136, 94, 28, 136, 227, 246, 94, 179, 74, 229, 179, 209, 136, 69, 115, 217, 94, 171, 138, 49, 97, 252, 238, 54, 100, 147, 57, 167, 117, 7, 59, 55, 37, 114, 149, 59, 226, 3, 128, 194, 218, 77, 167, 49, 173, 163, 38, 58, 217, 180, 54, 11, 196, 153, 198, 20, 159, 47, 214, 30, 31, 38, 245, 90, 19, 157, 108, 157, 237, 139, 21, 249, 68, 211, 155, 134, 204, 27, 148, 98, 153, 15, 147, 214, 87, 4, 187, 191, 185, 89, 52, 201, 194, 20, 19, 216, 226, 197, 180, 52, 125, 112, 118, 92, 249, 215, 21, 89, 158, 199, 2, 254, 107, 198, 175, 96, 195, 139, 146, 9, 229, 255, 148, 171, 228, 226, 35, 216, 161, 156, 51, 238, 142, 104, 146, 120, 67, 90, 255, 191, 232, 188, 93, 128, 151, 115, 172, 69, 97, 167, 116, 254, 64, 253, 148, 14, 176, 3, 219, 126, 200, 18, 234, 38, 169, 151, 102, 73, 153, 185, 93, 233, 184, 168, 76, 62, 81, 63, 75, 3, 22, 41, 185, 210, 46, 132, 214, 150, 191, 252, 56, 141, 224, 225, 31, 5, 241, 1, 60, 189, 186, 38, 86, 207, 181, 136, 125, 173, 57, 174, 211, 51, 137, 171, 234, 93, 89, 83, 59, 194, 127, 184, 1, 123, 235, 107, 89, 183, 111, 136, 69, 58, 2, 194, 251, 80, 95, 223, 191, 150, 85, 141, 116, 132, 218, 233, 23, 4, 143, 86, 122, 41, 44, 26, 4, 121, 64, 220, 130, 198, 66, 246, 150, 40, 142, 171, 24, 122, 71, 117, 84, 67, 95, 177, 62, 130, 195, 123, 56, 186, 225, 184, 134, 73, 116, 1, 225, 23, 240, 236, 47, 36, 197, 184, 52, 53, 226, 144, 142, 171, 104, 68, 214, 181, 158, 80, 59, 253, 140, 224, 113, 145, 73, 97, 81, 18, 36, 41, 141, 252, 169, 70, 199, 52, 92, 26, 42, 134, 110, 171, 182, 67, 116, 165, 231, 106, 164, 75, 180, 149, 84, 199, 208, 188, 143, 68, 186, 68, 119, 174, 101, 77, 64, 203, 126, 235, 44, 219, 177, 12, 253, 141, 80, 187, 184, 253, 54, 107, 160, 239, 179, 6, 250, 49, 107, 32, 120, 226, 179, 81, 213, 235, 94, 64, 17, 214, 204, 175, 201, 68, 239, 218, 195, 32, 125, 159, 245, 69, 159, 141, 164, 213, 243, 123, 30, 12, 66, 105, 200, 164, 226, 234, 202, 91, 60, 247, 226, 96, 220, 238, 111, 20, 216, 203, 159, 1, 0, 0, 255, 255, 199, 223, 224, 44, 7, 4, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_91769cfce21084c6(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_91769cfce21084c6 = __goscriptValue
}

export function encodeVarintQuery(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovQuery(v))
	let base = offset
	for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export function sovQuery(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozQuery(x: bigint): number {
	let n: number = 0
	return sovQuery($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export function skipQuery(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow4 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowQuery]
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
						return [0, ErrIntOverflowQuery]
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
						return [0, ErrIntOverflowQuery]
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
					return [0, ErrInvalidLengthQuery]
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
					return [0, ErrUnexpectedEndOfGroupQuery]
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
			return [0, ErrInvalidLengthQuery]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthQuery: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthQuery(__goscriptValue: $.GoError): void {
	ErrInvalidLengthQuery = __goscriptValue
}

export let ErrIntOverflowQuery: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowQuery(__goscriptValue: $.GoError): void {
	ErrIntOverflowQuery = __goscriptValue
}

export let ErrUnexpectedEndOfGroupQuery: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupQuery(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupQuery = __goscriptValue
}

export { __goscriptInit0 }

export { __goscriptInit1 }
