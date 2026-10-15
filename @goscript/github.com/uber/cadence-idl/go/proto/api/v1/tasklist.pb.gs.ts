// Generated file based on tasklist.pb.go
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

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.TaskListKind", "apiv1.TaskListType", "apiv1.TaskList", "apiv1.TaskListMetadata", "apiv1.TaskListPartitionMetadata", "apiv1.IsolationGroupMetrics", "apiv1.TaskListStatus", "apiv1.TaskIDBlock", "apiv1.PollerInfo", "apiv1.StickyExecutionAttributes", "apiv1.TaskListPartition", "apiv1.TaskListPartitionConfig"])

export type TaskListKind = number

$.registerNamedValueType(
	"apiv1.TaskListKind",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (TaskListKind_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (TaskListKind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.TaskListKind",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (TaskListKind_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (TaskListKind_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type TaskListType = number

$.registerNamedValueType(
	"apiv1.TaskListType",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (TaskListType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (TaskListType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.TaskListType",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (TaskListType_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (TaskListType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class TaskList {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Kind(): TaskListKind {
		return this._fields.Kind
	}

	public set Kind(value: TaskListKind) {
		this._fields.Kind = value
	}

	// base_name refers to the corresponding normal task list that this task list maps to.
	//
	// - For STICKY task lists, this is the associated normal task list.
	// - For EPHEMERAL task lists, this is the associated normal task list.
	// Ephemeral task lists are typically used for test isolation.
	// - For NORMAL task lists, this field is usually empty, but may be set
	// in certain cases (e.g., Go session worker activity task lists).
	//
	// This field is used as an identifier for rate limiting and task prioritization
	// in the history scheduler.
	public get BaseName(): string {
		return this._fields.BaseName
	}

	public set BaseName(value: string) {
		this._fields.BaseName = value
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
		Kind: TaskListKind
		BaseName: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Name?: string, Kind?: TaskListKind, BaseName?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Kind: init?.Kind ?? (0 as TaskListKind),
			BaseName: init?.BaseName ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TaskList {
		return new TaskList(this, true)
	}

	public __goscriptAssign(source: TaskList): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Kind = values.Kind
		target.BaseName = values.BaseName
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_216fa006947e00a0, $.arrayToSlice<number>([0])]
	}

	public GetBaseName(): string {
		const m: TaskList | $.VarRef<TaskList> | null = this;
		if (m != null) {
			return $.pointerValue<TaskList>(m).BaseName
		}
		return ""
	}

	public GetKind(): TaskListKind {
		const m: TaskList | $.VarRef<TaskList> | null = this;
		if (m != null) {
			return $.pointerValue<TaskList>(m).Kind
		}
		return 0
	}

	public GetName(): string {
		const m: TaskList | $.VarRef<TaskList> | null = this;
		if (m != null) {
			return $.pointerValue<TaskList>(m).Name
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: TaskList | $.VarRef<TaskList> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskList).Size() : TaskList.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple0: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskList).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TaskList.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TaskList | $.VarRef<TaskList> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskList).Size() : TaskList.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskList).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TaskList.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TaskList | $.VarRef<TaskList> | null = this;
		const m$: TaskList = m == null ? $.pointerTarget<TaskList>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskList>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as TaskList).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as TaskList).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as TaskList).XXX_unrecognized)
		}
		if ($.stringLen((m$ as TaskList).BaseName) > 0) {
			i = i - ($.stringLen((m$ as TaskList).BaseName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as TaskList).BaseName)
			i = encodeVarintTasklist(dAtA, i, $.uint64($.stringLen((m$ as TaskList).BaseName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as TaskList).Kind != 0) {
			i = encodeVarintTasklist(dAtA, i, $.uint64((m$ as TaskList).Kind))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ($.stringLen((m$ as TaskList).Name) > 0) {
			i = i - ($.stringLen((m$ as TaskList).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as TaskList).Name)
			i = encodeVarintTasklist(dAtA, i, $.uint64($.stringLen((m$ as TaskList).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: TaskList | $.VarRef<TaskList> | null = this;
		$.assignStruct($.pointerValue<TaskList>(m), $.markAsStructValue(new TaskList()))
	}

	public Size(): number {
		const m: TaskList | $.VarRef<TaskList> | null = this;
		let n: number = 0
		const m$: TaskList = m == null ? $.pointerTarget<TaskList>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskList>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as TaskList).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovTasklist($.uint64(l)))
		}
		if ((m$ as TaskList).Kind != 0) {
			n = n + (1 + sovTasklist($.uint64((m$ as TaskList).Kind)))
		}
		l = $.stringLen((m$ as TaskList).BaseName)
		if (l > 0) {
			n = n + ((1 + l) + sovTasklist($.uint64(l)))
		}
		if ((m$ as TaskList).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as TaskList).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: TaskList | $.VarRef<TaskList> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskList", /* @__PURE__ */ $.pointerType("apiv1.TaskList")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: TaskList | $.VarRef<TaskList> | null = this;
		const m$: TaskList = m == null ? $.pointerTarget<TaskList>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskList>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowTasklist
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
				return fmt.Errorf("proto: TaskList: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: TaskList: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowTasklist
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
						return ErrInvalidLengthTasklist
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthTasklist
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TaskList).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Kind", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as TaskList).Kind = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++;
						;(m$ as TaskList).Kind = (m$ as TaskList).Kind | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field BaseName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
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
						return ErrInvalidLengthTasklist
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthTasklist
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TaskList).BaseName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipTasklist($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthTasklist
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TaskList).XXX_unrecognized = $.appendSlice((m$ as TaskList).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: TaskList | $.VarRef<TaskList> | null = this;
		await xxx_messageInfo_TaskList.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskList", /* @__PURE__ */ $.pointerType("apiv1.TaskList")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: TaskList | $.VarRef<TaskList> | null = this;
		if (deterministic) {
			return xxx_messageInfo_TaskList.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.TaskList", /* @__PURE__ */ $.pointerType("apiv1.TaskList")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskList).MarshalToSizedBuffer(b) : TaskList.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: TaskList | $.VarRef<TaskList> | null = this;
		await xxx_messageInfo_TaskList.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskList", /* @__PURE__ */ $.pointerType("apiv1.TaskList")), src)
	}

	public XXX_Size(): number {
		const m: TaskList | $.VarRef<TaskList> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskList).Size() : TaskList.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: TaskList | $.VarRef<TaskList> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskList).Unmarshal(b) : TaskList.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.TaskList",
		() => new TaskList(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetBaseName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetKind", [], [/* @__PURE__ */ $.basicType("int32", "apiv1.TaskListKind")], true), $.methodSignature("GetName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		TaskList,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=name,proto3\" json:\"name,omitempty\"" }), /* @__PURE__ */ $.structField("Kind", /* @__PURE__ */ $.basicType("int32", "apiv1.TaskListKind"), [1], 16, true, { tag: "protobuf:\"varint,2,opt,name=kind,proto3,enum=uber.cadence.api.v1.TaskListKind\" json:\"kind,omitempty\"" }), /* @__PURE__ */ $.structField("BaseName", /* @__PURE__ */ $.basicType("string"), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=base_name,json=baseName,proto3\" json:\"base_name,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [3], 40, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 40, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [5], 64, true, { tag: "json:\"-\"" })]
	)
}

export class TaskListMetadata {
	public get MaxTasksPerSecond(): types.DoubleValue | $.VarRef<types.DoubleValue> | null {
		return this._fields.MaxTasksPerSecond
	}

	public set MaxTasksPerSecond(value: types.DoubleValue | $.VarRef<types.DoubleValue> | null) {
		this._fields.MaxTasksPerSecond = value
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
		MaxTasksPerSecond: types.DoubleValue | $.VarRef<types.DoubleValue> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{MaxTasksPerSecond?: types.DoubleValue | $.VarRef<types.DoubleValue> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			MaxTasksPerSecond: init?.MaxTasksPerSecond ?? (null! as types.DoubleValue | $.VarRef<types.DoubleValue> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TaskListMetadata {
		return new TaskListMetadata(this, true)
	}

	public __goscriptAssign(source: TaskListMetadata): void {
		const target = this._fields
		const values = source._fields
		target.MaxTasksPerSecond = values.MaxTasksPerSecond
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_216fa006947e00a0, $.arrayToSlice<number>([1])]
	}

	public GetMaxTasksPerSecond(): types.DoubleValue | $.VarRef<types.DoubleValue> | null {
		const m: TaskListMetadata | $.VarRef<TaskListMetadata> | null = this;
		if (m != null) {
			return $.pointerValue<TaskListMetadata>(m).MaxTasksPerSecond
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: TaskListMetadata | $.VarRef<TaskListMetadata> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListMetadata).Size() : TaskListMetadata.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple1: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListMetadata).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TaskListMetadata.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TaskListMetadata | $.VarRef<TaskListMetadata> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListMetadata).Size() : TaskListMetadata.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListMetadata).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TaskListMetadata.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TaskListMetadata | $.VarRef<TaskListMetadata> | null = this;
		const m$: TaskListMetadata = m == null ? $.pointerTarget<TaskListMetadata>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskListMetadata>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as TaskListMetadata).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as TaskListMetadata).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as TaskListMetadata).XXX_unrecognized)
		}
		if ((m$ as TaskListMetadata).MaxTasksPerSecond != null) {
			{
				let [size, err] = types.DoubleValue.prototype.MarshalToSizedBuffer.call((m$ as TaskListMetadata).MaxTasksPerSecond, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintTasklist(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: TaskListMetadata | $.VarRef<TaskListMetadata> | null = this;
		$.assignStruct($.pointerValue<TaskListMetadata>(m), $.markAsStructValue(new TaskListMetadata()))
	}

	public Size(): number {
		const m: TaskListMetadata | $.VarRef<TaskListMetadata> | null = this;
		let n: number = 0
		const m$: TaskListMetadata = m == null ? $.pointerTarget<TaskListMetadata>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskListMetadata>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as TaskListMetadata).MaxTasksPerSecond != null) {
			l = types.DoubleValue.prototype.Size.call((m$ as TaskListMetadata).MaxTasksPerSecond)
			n = n + ((1 + l) + sovTasklist($.uint64(l)))
		}
		if ((m$ as TaskListMetadata).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as TaskListMetadata).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: TaskListMetadata | $.VarRef<TaskListMetadata> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListMetadata", /* @__PURE__ */ $.pointerType("apiv1.TaskListMetadata")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: TaskListMetadata | $.VarRef<TaskListMetadata> | null = this;
		const m$: TaskListMetadata = m == null ? $.pointerTarget<TaskListMetadata>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskListMetadata>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowTasklist
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
				return fmt.Errorf("proto: TaskListMetadata: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: TaskListMetadata: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field MaxTasksPerSecond", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
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
						return ErrInvalidLengthTasklist
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthTasklist
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as TaskListMetadata).MaxTasksPerSecond == null) {
						;(m$ as TaskListMetadata).MaxTasksPerSecond = new types.DoubleValue()
					}
					{
						let err = types.DoubleValue.prototype.Unmarshal.call((m$ as TaskListMetadata).MaxTasksPerSecond, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipTasklist($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthTasklist
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TaskListMetadata).XXX_unrecognized = $.appendSlice((m$ as TaskListMetadata).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: TaskListMetadata | $.VarRef<TaskListMetadata> | null = this;
		await xxx_messageInfo_TaskListMetadata.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListMetadata", /* @__PURE__ */ $.pointerType("apiv1.TaskListMetadata")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: TaskListMetadata | $.VarRef<TaskListMetadata> | null = this;
		if (deterministic) {
			return xxx_messageInfo_TaskListMetadata.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListMetadata", /* @__PURE__ */ $.pointerType("apiv1.TaskListMetadata")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListMetadata).MarshalToSizedBuffer(b) : TaskListMetadata.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: TaskListMetadata | $.VarRef<TaskListMetadata> | null = this;
		await xxx_messageInfo_TaskListMetadata.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListMetadata", /* @__PURE__ */ $.pointerType("apiv1.TaskListMetadata")), src)
	}

	public XXX_Size(): number {
		const m: TaskListMetadata | $.VarRef<TaskListMetadata> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListMetadata).Size() : TaskListMetadata.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: TaskListMetadata | $.VarRef<TaskListMetadata> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListMetadata).Unmarshal(b) : TaskListMetadata.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.TaskListMetadata",
		() => new TaskListMetadata(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetMaxTasksPerSecond", [], [/* @__PURE__ */ $.pointerType("types.DoubleValue")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		TaskListMetadata,
		() => [/* @__PURE__ */ $.structField("MaxTasksPerSecond", /* @__PURE__ */ $.pointerType("types.DoubleValue"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=max_tasks_per_second,json=maxTasksPerSecond,proto3\" json:\"max_tasks_per_second,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [1], 8, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 8, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [3], 32, true, { tag: "json:\"-\"" })]
	)
}

export class TaskListPartitionMetadata {
	public get Key(): string {
		return this._fields.Key
	}

	public set Key(value: string) {
		this._fields.Key = value
	}

	public get OwnerHostName(): string {
		return this._fields.OwnerHostName
	}

	public set OwnerHostName(value: string) {
		this._fields.OwnerHostName = value
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
		Key: string
		OwnerHostName: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Key?: string, OwnerHostName?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Key: init?.Key ?? ("" as string),
			OwnerHostName: init?.OwnerHostName ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TaskListPartitionMetadata {
		return new TaskListPartitionMetadata(this, true)
	}

	public __goscriptAssign(source: TaskListPartitionMetadata): void {
		const target = this._fields
		const values = source._fields
		target.Key = values.Key
		target.OwnerHostName = values.OwnerHostName
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_216fa006947e00a0, $.arrayToSlice<number>([2])]
	}

	public GetKey(): string {
		const m: TaskListPartitionMetadata | $.VarRef<TaskListPartitionMetadata> | null = this;
		if (m != null) {
			return $.pointerValue<TaskListPartitionMetadata>(m).Key
		}
		return ""
	}

	public GetOwnerHostName(): string {
		const m: TaskListPartitionMetadata | $.VarRef<TaskListPartitionMetadata> | null = this;
		if (m != null) {
			return $.pointerValue<TaskListPartitionMetadata>(m).OwnerHostName
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: TaskListPartitionMetadata | $.VarRef<TaskListPartitionMetadata> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartitionMetadata).Size() : TaskListPartitionMetadata.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple2: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartitionMetadata).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TaskListPartitionMetadata.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TaskListPartitionMetadata | $.VarRef<TaskListPartitionMetadata> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartitionMetadata).Size() : TaskListPartitionMetadata.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartitionMetadata).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TaskListPartitionMetadata.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TaskListPartitionMetadata | $.VarRef<TaskListPartitionMetadata> | null = this;
		const m$: TaskListPartitionMetadata = m == null ? $.pointerTarget<TaskListPartitionMetadata>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskListPartitionMetadata>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as TaskListPartitionMetadata).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as TaskListPartitionMetadata).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as TaskListPartitionMetadata).XXX_unrecognized)
		}
		if ($.stringLen((m$ as TaskListPartitionMetadata).OwnerHostName) > 0) {
			i = i - ($.stringLen((m$ as TaskListPartitionMetadata).OwnerHostName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as TaskListPartitionMetadata).OwnerHostName)
			i = encodeVarintTasklist(dAtA, i, $.uint64($.stringLen((m$ as TaskListPartitionMetadata).OwnerHostName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as TaskListPartitionMetadata).Key) > 0) {
			i = i - ($.stringLen((m$ as TaskListPartitionMetadata).Key))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as TaskListPartitionMetadata).Key)
			i = encodeVarintTasklist(dAtA, i, $.uint64($.stringLen((m$ as TaskListPartitionMetadata).Key)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: TaskListPartitionMetadata | $.VarRef<TaskListPartitionMetadata> | null = this;
		$.assignStruct($.pointerValue<TaskListPartitionMetadata>(m), $.markAsStructValue(new TaskListPartitionMetadata()))
	}

	public Size(): number {
		const m: TaskListPartitionMetadata | $.VarRef<TaskListPartitionMetadata> | null = this;
		let n: number = 0
		const m$: TaskListPartitionMetadata = m == null ? $.pointerTarget<TaskListPartitionMetadata>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskListPartitionMetadata>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as TaskListPartitionMetadata).Key)
		if (l > 0) {
			n = n + ((1 + l) + sovTasklist($.uint64(l)))
		}
		l = $.stringLen((m$ as TaskListPartitionMetadata).OwnerHostName)
		if (l > 0) {
			n = n + ((1 + l) + sovTasklist($.uint64(l)))
		}
		if ((m$ as TaskListPartitionMetadata).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as TaskListPartitionMetadata).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: TaskListPartitionMetadata | $.VarRef<TaskListPartitionMetadata> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListPartitionMetadata", /* @__PURE__ */ $.pointerType("apiv1.TaskListPartitionMetadata")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: TaskListPartitionMetadata | $.VarRef<TaskListPartitionMetadata> | null = this;
		const m$: TaskListPartitionMetadata = m == null ? $.pointerTarget<TaskListPartitionMetadata>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskListPartitionMetadata>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowTasklist
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
				return fmt.Errorf("proto: TaskListPartitionMetadata: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: TaskListPartitionMetadata: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Key", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
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
						return ErrInvalidLengthTasklist
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthTasklist
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TaskListPartitionMetadata).Key = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field OwnerHostName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
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
						return ErrInvalidLengthTasklist
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthTasklist
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TaskListPartitionMetadata).OwnerHostName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipTasklist($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthTasklist
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TaskListPartitionMetadata).XXX_unrecognized = $.appendSlice((m$ as TaskListPartitionMetadata).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: TaskListPartitionMetadata | $.VarRef<TaskListPartitionMetadata> | null = this;
		await xxx_messageInfo_TaskListPartitionMetadata.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListPartitionMetadata", /* @__PURE__ */ $.pointerType("apiv1.TaskListPartitionMetadata")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: TaskListPartitionMetadata | $.VarRef<TaskListPartitionMetadata> | null = this;
		if (deterministic) {
			return xxx_messageInfo_TaskListPartitionMetadata.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListPartitionMetadata", /* @__PURE__ */ $.pointerType("apiv1.TaskListPartitionMetadata")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartitionMetadata).MarshalToSizedBuffer(b) : TaskListPartitionMetadata.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: TaskListPartitionMetadata | $.VarRef<TaskListPartitionMetadata> | null = this;
		await xxx_messageInfo_TaskListPartitionMetadata.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListPartitionMetadata", /* @__PURE__ */ $.pointerType("apiv1.TaskListPartitionMetadata")), src)
	}

	public XXX_Size(): number {
		const m: TaskListPartitionMetadata | $.VarRef<TaskListPartitionMetadata> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartitionMetadata).Size() : TaskListPartitionMetadata.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: TaskListPartitionMetadata | $.VarRef<TaskListPartitionMetadata> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartitionMetadata).Unmarshal(b) : TaskListPartitionMetadata.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.TaskListPartitionMetadata",
		() => new TaskListPartitionMetadata(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetKey", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetOwnerHostName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		TaskListPartitionMetadata,
		() => [/* @__PURE__ */ $.structField("Key", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=key,proto3\" json:\"key,omitempty\"" }), /* @__PURE__ */ $.structField("OwnerHostName", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=owner_host_name,json=ownerHostName,proto3\" json:\"owner_host_name,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 32, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 32, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 56, true, { tag: "json:\"-\"" })]
	)
}

export class IsolationGroupMetrics {
	// The rate at which tasks with the given isolation group are being added to this partition
	public get NewTasksPerSecond(): number {
		return this._fields.NewTasksPerSecond
	}

	public set NewTasksPerSecond(value: number) {
		this._fields.NewTasksPerSecond = value
	}

	// The number of "active" pollers with the given isolation group that the partition is aware of.
	// Pollers typically will reach many partitions
	public get PollerCount(): bigint {
		return this._fields.PollerCount
	}

	public set PollerCount(value: bigint) {
		this._fields.PollerCount = value
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
		NewTasksPerSecond: number
		PollerCount: bigint
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{NewTasksPerSecond?: number, PollerCount?: bigint, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			NewTasksPerSecond: init?.NewTasksPerSecond ?? (0 as number),
			PollerCount: init?.PollerCount ?? (0n as bigint),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): IsolationGroupMetrics {
		return new IsolationGroupMetrics(this, true)
	}

	public __goscriptAssign(source: IsolationGroupMetrics): void {
		const target = this._fields
		const values = source._fields
		target.NewTasksPerSecond = values.NewTasksPerSecond
		target.PollerCount = values.PollerCount
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_216fa006947e00a0, $.arrayToSlice<number>([3])]
	}

	public GetNewTasksPerSecond(): number {
		const m: IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null = this;
		if (m != null) {
			return $.pointerValue<IsolationGroupMetrics>(m).NewTasksPerSecond
		}
		return 0
	}

	public GetPollerCount(): bigint {
		const m: IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null = this;
		if (m != null) {
			return $.pointerValue<IsolationGroupMetrics>(m).PollerCount
		}
		return 0n
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupMetrics).Size() : IsolationGroupMetrics.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple3: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupMetrics).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : IsolationGroupMetrics.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupMetrics).Size() : IsolationGroupMetrics.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupMetrics).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : IsolationGroupMetrics.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null = this;
		const m$: IsolationGroupMetrics = m == null ? $.pointerTarget<IsolationGroupMetrics>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<IsolationGroupMetrics>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as IsolationGroupMetrics).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as IsolationGroupMetrics).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as IsolationGroupMetrics).XXX_unrecognized)
		}
		if ((m$ as IsolationGroupMetrics).PollerCount != 0n) {
			i = encodeVarintTasklist(dAtA, i, $.uint64((m$ as IsolationGroupMetrics).PollerCount))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ((m$ as IsolationGroupMetrics).NewTasksPerSecond != 0) {
			i = i - (8)
			$.markAsStructValue($.cloneStructValue($.pointerValue<any>(encoding_binary.LittleEndian))).PutUint64($.goSlice(dAtA, i, undefined), $.uint64(math.Float64bits((m$ as IsolationGroupMetrics).NewTasksPerSecond)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x9
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null = this;
		$.assignStruct($.pointerValue<IsolationGroupMetrics>(m), $.markAsStructValue(new IsolationGroupMetrics()))
	}

	public Size(): number {
		const m: IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null = this;
		let n: number = 0
		const m$: IsolationGroupMetrics = m == null ? $.pointerTarget<IsolationGroupMetrics>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<IsolationGroupMetrics>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as IsolationGroupMetrics).NewTasksPerSecond != 0) {
			n = n + (9)
		}
		if ((m$ as IsolationGroupMetrics).PollerCount != 0n) {
			n = n + (1 + sovTasklist($.uint64((m$ as IsolationGroupMetrics).PollerCount)))
		}
		if ((m$ as IsolationGroupMetrics).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as IsolationGroupMetrics).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.IsolationGroupMetrics", /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupMetrics")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null = this;
		const m$: IsolationGroupMetrics = m == null ? $.pointerTarget<IsolationGroupMetrics>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<IsolationGroupMetrics>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowTasklist
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
				return fmt.Errorf("proto: IsolationGroupMetrics: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: IsolationGroupMetrics: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 1) {
						return fmt.Errorf("proto: wrong wireType = %d for field NewTasksPerSecond", $.basicInterfaceValue(wireType, "int"))
					}
					let v: bigint = 0n
					if ((iNdEx + 8) > l) {
						return io.ErrUnexpectedEOF
					}
					v = $.uint64($.markAsStructValue($.cloneStructValue($.pointerValue<any>(encoding_binary.LittleEndian))).Uint64($.goSlice(dAtA, iNdEx, undefined)))
					iNdEx = iNdEx + (8);
					;(m$ as IsolationGroupMetrics).NewTasksPerSecond = math.Float64frombits(v)
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field PollerCount", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as IsolationGroupMetrics).PollerCount = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++;
						;(m$ as IsolationGroupMetrics).PollerCount = $.int64Or((m$ as IsolationGroupMetrics).PollerCount, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipTasklist($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthTasklist
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as IsolationGroupMetrics).XXX_unrecognized = $.appendSlice((m$ as IsolationGroupMetrics).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null = this;
		await xxx_messageInfo_IsolationGroupMetrics.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.IsolationGroupMetrics", /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupMetrics")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null = this;
		if (deterministic) {
			return xxx_messageInfo_IsolationGroupMetrics.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.IsolationGroupMetrics", /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupMetrics")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupMetrics).MarshalToSizedBuffer(b) : IsolationGroupMetrics.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null = this;
		await xxx_messageInfo_IsolationGroupMetrics.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.IsolationGroupMetrics", /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupMetrics")), src)
	}

	public XXX_Size(): number {
		const m: IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupMetrics).Size() : IsolationGroupMetrics.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupMetrics).Unmarshal(b) : IsolationGroupMetrics.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.IsolationGroupMetrics",
		() => new IsolationGroupMetrics(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetNewTasksPerSecond", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("GetPollerCount", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		IsolationGroupMetrics,
		() => [/* @__PURE__ */ $.structField("NewTasksPerSecond", /* @__PURE__ */ $.basicType("float64"), [0], 0, true, { tag: "protobuf:\"fixed64,1,opt,name=new_tasks_per_second,json=newTasksPerSecond,proto3\" json:\"new_tasks_per_second,omitempty\"" }), /* @__PURE__ */ $.structField("PollerCount", /* @__PURE__ */ $.basicType("int64"), [1], 8, true, { tag: "protobuf:\"varint,2,opt,name=poller_count,json=pollerCount,proto3\" json:\"poller_count,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 40, true, { tag: "json:\"-\"" })]
	)
}

export class TaskListStatus {
	public get BacklogCountHint(): bigint {
		return this._fields.BacklogCountHint
	}

	public set BacklogCountHint(value: bigint) {
		this._fields.BacklogCountHint = value
	}

	public get ReadLevel(): bigint {
		return this._fields.ReadLevel
	}

	public set ReadLevel(value: bigint) {
		this._fields.ReadLevel = value
	}

	public get AckLevel(): bigint {
		return this._fields.AckLevel
	}

	public set AckLevel(value: bigint) {
		this._fields.AckLevel = value
	}

	// The rate at which tasks may be dispatched according to poller configuration
	public get RatePerSecond(): number {
		return this._fields.RatePerSecond
	}

	public set RatePerSecond(value: number) {
		this._fields.RatePerSecond = value
	}

	public get TaskIdBlock(): TaskIDBlock | $.VarRef<TaskIDBlock> | null {
		return this._fields.TaskIdBlock
	}

	public set TaskIdBlock(value: TaskIDBlock | $.VarRef<TaskIDBlock> | null) {
		this._fields.TaskIdBlock = value
	}

	// Mapping of isolation groups to metrics about that group within this partition
	public get IsolationGroupMetrics(): globalThis.Map<string, IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null> | null {
		return this._fields.IsolationGroupMetrics
	}

	public set IsolationGroupMetrics(value: globalThis.Map<string, IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null> | null) {
		this._fields.IsolationGroupMetrics = value
	}

	// The rate at which tasks are being added to this partition
	public get NewTasksPerSecond(): number {
		return this._fields.NewTasksPerSecond
	}

	public set NewTasksPerSecond(value: number) {
		this._fields.NewTasksPerSecond = value
	}

	// Whether the TaskList has any remaining Tasks
	public get Empty(): boolean {
		return this._fields.Empty
	}

	public set Empty(value: boolean) {
		this._fields.Empty = value
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
		BacklogCountHint: bigint
		ReadLevel: bigint
		AckLevel: bigint
		RatePerSecond: number
		TaskIdBlock: TaskIDBlock | $.VarRef<TaskIDBlock> | null
		IsolationGroupMetrics: globalThis.Map<string, IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null> | null
		NewTasksPerSecond: number
		Empty: boolean
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{BacklogCountHint?: bigint, ReadLevel?: bigint, AckLevel?: bigint, RatePerSecond?: number, TaskIdBlock?: TaskIDBlock | $.VarRef<TaskIDBlock> | null, IsolationGroupMetrics?: globalThis.Map<string, IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null> | null, NewTasksPerSecond?: number, Empty?: boolean, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			BacklogCountHint: init?.BacklogCountHint ?? (0n as bigint),
			ReadLevel: init?.ReadLevel ?? (0n as bigint),
			AckLevel: init?.AckLevel ?? (0n as bigint),
			RatePerSecond: init?.RatePerSecond ?? (0 as number),
			TaskIdBlock: init?.TaskIdBlock ?? (null! as TaskIDBlock | $.VarRef<TaskIDBlock> | null),
			IsolationGroupMetrics: init?.IsolationGroupMetrics ?? (null! as globalThis.Map<string, IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null> | null),
			NewTasksPerSecond: init?.NewTasksPerSecond ?? (0 as number),
			Empty: init?.Empty ?? (false as boolean),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TaskListStatus {
		return new TaskListStatus(this, true)
	}

	public __goscriptAssign(source: TaskListStatus): void {
		const target = this._fields
		const values = source._fields
		target.BacklogCountHint = values.BacklogCountHint
		target.ReadLevel = values.ReadLevel
		target.AckLevel = values.AckLevel
		target.RatePerSecond = values.RatePerSecond
		target.TaskIdBlock = values.TaskIdBlock
		target.IsolationGroupMetrics = values.IsolationGroupMetrics
		target.NewTasksPerSecond = values.NewTasksPerSecond
		target.Empty = values.Empty
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_216fa006947e00a0, $.arrayToSlice<number>([4])]
	}

	public GetAckLevel(): bigint {
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		if (m != null) {
			return $.pointerValue<TaskListStatus>(m).AckLevel
		}
		return 0n
	}

	public GetBacklogCountHint(): bigint {
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		if (m != null) {
			return $.pointerValue<TaskListStatus>(m).BacklogCountHint
		}
		return 0n
	}

	public GetEmpty(): boolean {
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		if (m != null) {
			return $.pointerValue<TaskListStatus>(m).Empty
		}
		return false
	}

	public GetIsolationGroupMetrics(): globalThis.Map<string, IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null> | null {
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		if (m != null) {
			return $.pointerValue<TaskListStatus>(m).IsolationGroupMetrics
		}
		return null
	}

	public GetNewTasksPerSecond(): number {
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		if (m != null) {
			return $.pointerValue<TaskListStatus>(m).NewTasksPerSecond
		}
		return 0
	}

	public GetRatePerSecond(): number {
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		if (m != null) {
			return $.pointerValue<TaskListStatus>(m).RatePerSecond
		}
		return 0
	}

	public GetReadLevel(): bigint {
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		if (m != null) {
			return $.pointerValue<TaskListStatus>(m).ReadLevel
		}
		return 0n
	}

	public GetTaskIdBlock(): TaskIDBlock | $.VarRef<TaskIDBlock> | null {
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		if (m != null) {
			return $.pointerValue<TaskListStatus>(m).TaskIdBlock
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListStatus).Size() : TaskListStatus.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListStatus).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TaskListStatus.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListStatus).Size() : TaskListStatus.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListStatus).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TaskListStatus.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		const m$: TaskListStatus = m == null ? $.pointerTarget<TaskListStatus>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskListStatus>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as TaskListStatus).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as TaskListStatus).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as TaskListStatus).XXX_unrecognized)
		}
		if ((m$ as TaskListStatus).Empty) {
			i--
			if ((m$ as TaskListStatus).Empty) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x40
		}
		if ((m$ as TaskListStatus).NewTasksPerSecond != 0) {
			i = i - (8)
			$.markAsStructValue($.cloneStructValue($.pointerValue<any>(encoding_binary.LittleEndian))).PutUint64($.goSlice(dAtA, i, undefined), $.uint64(math.Float64bits((m$ as TaskListStatus).NewTasksPerSecond)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x39
		}
		if ($.len((m$ as TaskListStatus).IsolationGroupMetrics) > 0) {
			for (const [k, __rangeValue] of (m$ as TaskListStatus).IsolationGroupMetrics?.entries() ?? []) {
				let v: IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null = $.mapGet<string, IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null, IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null>((m$ as TaskListStatus).IsolationGroupMetrics, k, null)[0]
				let baseI: number = i
				if (v != null) {
					{
						let [size, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as IsolationGroupMetrics).MarshalToSizedBuffer($.goSlice(dAtA, undefined, i)) : IsolationGroupMetrics.prototype.MarshalToSizedBuffer.call(v, $.goSlice(dAtA, undefined, i)))
						if (err != null) {
							return [0, err]
						}
						i = i - (size)
						i = encodeVarintTasklist(dAtA, i, $.uint64(size))
					}
					i--
					$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				}
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintTasklist(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintTasklist(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
			}
		}
		if ((m$ as TaskListStatus).TaskIdBlock != null) {
			{
				let [size, err] = TaskIDBlock.prototype.MarshalToSizedBuffer.call((m$ as TaskListStatus).TaskIdBlock, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintTasklist(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as TaskListStatus).RatePerSecond != 0) {
			i = i - (8)
			$.markAsStructValue($.cloneStructValue($.pointerValue<any>(encoding_binary.LittleEndian))).PutUint64($.goSlice(dAtA, i, undefined), $.uint64(math.Float64bits((m$ as TaskListStatus).RatePerSecond)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x21
		}
		if ((m$ as TaskListStatus).AckLevel != 0n) {
			i = encodeVarintTasklist(dAtA, i, $.uint64((m$ as TaskListStatus).AckLevel))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x18
		}
		if ((m$ as TaskListStatus).ReadLevel != 0n) {
			i = encodeVarintTasklist(dAtA, i, $.uint64((m$ as TaskListStatus).ReadLevel))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ((m$ as TaskListStatus).BacklogCountHint != 0n) {
			i = encodeVarintTasklist(dAtA, i, $.uint64((m$ as TaskListStatus).BacklogCountHint))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		$.assignStruct($.pointerValue<TaskListStatus>(m), $.markAsStructValue(new TaskListStatus()))
	}

	public Size(): number {
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		let n: number = 0
		const m$: TaskListStatus = m == null ? $.pointerTarget<TaskListStatus>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskListStatus>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as TaskListStatus).BacklogCountHint != 0n) {
			n = n + (1 + sovTasklist($.uint64((m$ as TaskListStatus).BacklogCountHint)))
		}
		if ((m$ as TaskListStatus).ReadLevel != 0n) {
			n = n + (1 + sovTasklist($.uint64((m$ as TaskListStatus).ReadLevel)))
		}
		if ((m$ as TaskListStatus).AckLevel != 0n) {
			n = n + (1 + sovTasklist($.uint64((m$ as TaskListStatus).AckLevel)))
		}
		if ((m$ as TaskListStatus).RatePerSecond != 0) {
			n = n + (9)
		}
		if ((m$ as TaskListStatus).TaskIdBlock != null) {
			l = TaskIDBlock.prototype.Size.call((m$ as TaskListStatus).TaskIdBlock)
			n = n + ((1 + l) + sovTasklist($.uint64(l)))
		}
		if ($.len((m$ as TaskListStatus).IsolationGroupMetrics) > 0) {
			for (const [k, v] of (m$ as TaskListStatus).IsolationGroupMetrics?.entries() ?? []) {
				k
				v
				l = 0
				if (v != null) {
					l = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as IsolationGroupMetrics).Size() : IsolationGroupMetrics.prototype.Size.call(v))
					l = l + (1 + sovTasklist($.uint64(l)))
				}
				let mapEntrySize = ((1 + $.stringLen(k)) + sovTasklist($.uint64($.stringLen(k)))) + l
				n = n + ((mapEntrySize + 1) + sovTasklist($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as TaskListStatus).NewTasksPerSecond != 0) {
			n = n + (9)
		}
		if ((m$ as TaskListStatus).Empty) {
			n = n + (2)
		}
		if ((m$ as TaskListStatus).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as TaskListStatus).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListStatus", /* @__PURE__ */ $.pointerType("apiv1.TaskListStatus")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		const m$: TaskListStatus = m == null ? $.pointerTarget<TaskListStatus>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskListStatus>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow4 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowTasklist
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
				return fmt.Errorf("proto: TaskListStatus: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: TaskListStatus: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field BacklogCountHint", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as TaskListStatus).BacklogCountHint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++;
						;(m$ as TaskListStatus).BacklogCountHint = $.int64Or((m$ as TaskListStatus).BacklogCountHint, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field ReadLevel", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as TaskListStatus).ReadLevel = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++;
						;(m$ as TaskListStatus).ReadLevel = $.int64Or((m$ as TaskListStatus).ReadLevel, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 3:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field AckLevel", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as TaskListStatus).AckLevel = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++;
						;(m$ as TaskListStatus).AckLevel = $.int64Or((m$ as TaskListStatus).AckLevel, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 4:
				{
					if (wireType != 1) {
						return fmt.Errorf("proto: wrong wireType = %d for field RatePerSecond", $.basicInterfaceValue(wireType, "int"))
					}
					let v: bigint = 0n
					if ((iNdEx + 8) > l) {
						return io.ErrUnexpectedEOF
					}
					v = $.uint64($.markAsStructValue($.cloneStructValue($.pointerValue<any>(encoding_binary.LittleEndian))).Uint64($.goSlice(dAtA, iNdEx, undefined)))
					iNdEx = iNdEx + (8);
					;(m$ as TaskListStatus).RatePerSecond = math.Float64frombits(v)
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskIdBlock", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
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
						return ErrInvalidLengthTasklist
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthTasklist
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as TaskListStatus).TaskIdBlock == null) {
						;(m$ as TaskListStatus).TaskIdBlock = new TaskIDBlock()
					}
					{
						let err = TaskIDBlock.prototype.Unmarshal.call((m$ as TaskListStatus).TaskIdBlock, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field IsolationGroupMetrics", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
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
						return ErrInvalidLengthTasklist
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthTasklist
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as TaskListStatus).IsolationGroupMetrics == null) {
						;(m$ as TaskListStatus).IsolationGroupMetrics = $.makeMap<string, IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null>()
					}
					let mapkey: string = ""
					let mapvalue: IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null = null! as IsolationGroupMetrics | $.VarRef<IsolationGroupMetrics> | null
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow0: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowTasklist
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
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
									return ErrIntOverflowTasklist
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
								return ErrInvalidLengthTasklist
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthTasklist
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
										return ErrIntOverflowTasklist
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
									return ErrInvalidLengthTasklist
								}
								let postmsgIndex: number = iNdEx + mapmsglen
								if (postmsgIndex < 0) {
									return ErrInvalidLengthTasklist
								}
								if (postmsgIndex > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = new IsolationGroupMetrics()
								{
									let err = (mapvalue !== null && (mapvalue as any).__isVarRef !== true && (mapvalue as any).__goValue === undefined ? ((mapvalue as any) as IsolationGroupMetrics).Unmarshal($.goSlice(dAtA, iNdEx, postmsgIndex)) : IsolationGroupMetrics.prototype.Unmarshal.call(mapvalue, $.goSlice(dAtA, iNdEx, postmsgIndex)))
									if (err != null) {
										return err
									}
								}
								iNdEx = postmsgIndex
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipTasklist($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthTasklist
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as TaskListStatus).IsolationGroupMetrics, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				case 7:
				{
					if (wireType != 1) {
						return fmt.Errorf("proto: wrong wireType = %d for field NewTasksPerSecond", $.basicInterfaceValue(wireType, "int"))
					}
					let v: bigint = 0n
					if ((iNdEx + 8) > l) {
						return io.ErrUnexpectedEOF
					}
					v = $.uint64($.markAsStructValue($.cloneStructValue($.pointerValue<any>(encoding_binary.LittleEndian))).Uint64($.goSlice(dAtA, iNdEx, undefined)))
					iNdEx = iNdEx + (8);
					;(m$ as TaskListStatus).NewTasksPerSecond = math.Float64frombits(v)
					break
				}
				case 8:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Empty", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as TaskListStatus).Empty = (v != 0)
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipTasklist($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthTasklist
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TaskListStatus).XXX_unrecognized = $.appendSlice((m$ as TaskListStatus).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		await xxx_messageInfo_TaskListStatus.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListStatus", /* @__PURE__ */ $.pointerType("apiv1.TaskListStatus")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		if (deterministic) {
			return xxx_messageInfo_TaskListStatus.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListStatus", /* @__PURE__ */ $.pointerType("apiv1.TaskListStatus")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListStatus).MarshalToSizedBuffer(b) : TaskListStatus.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		await xxx_messageInfo_TaskListStatus.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListStatus", /* @__PURE__ */ $.pointerType("apiv1.TaskListStatus")), src)
	}

	public XXX_Size(): number {
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListStatus).Size() : TaskListStatus.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: TaskListStatus | $.VarRef<TaskListStatus> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListStatus).Unmarshal(b) : TaskListStatus.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.TaskListStatus",
		() => new TaskListStatus(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetAckLevel", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetBacklogCountHint", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetEmpty", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetIsolationGroupMetrics", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupMetrics"))], true), $.methodSignature("GetNewTasksPerSecond", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("GetRatePerSecond", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("GetReadLevel", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetTaskIdBlock", [], [/* @__PURE__ */ $.pointerType("apiv1.TaskIDBlock")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		TaskListStatus,
		() => [/* @__PURE__ */ $.structField("BacklogCountHint", /* @__PURE__ */ $.basicType("int64"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=backlog_count_hint,json=backlogCountHint,proto3\" json:\"backlog_count_hint,omitempty\"" }), /* @__PURE__ */ $.structField("ReadLevel", /* @__PURE__ */ $.basicType("int64"), [1], 8, true, { tag: "protobuf:\"varint,2,opt,name=read_level,json=readLevel,proto3\" json:\"read_level,omitempty\"" }), /* @__PURE__ */ $.structField("AckLevel", /* @__PURE__ */ $.basicType("int64"), [2], 16, true, { tag: "protobuf:\"varint,3,opt,name=ack_level,json=ackLevel,proto3\" json:\"ack_level,omitempty\"" }), /* @__PURE__ */ $.structField("RatePerSecond", /* @__PURE__ */ $.basicType("float64"), [3], 24, true, { tag: "protobuf:\"fixed64,4,opt,name=rate_per_second,json=ratePerSecond,proto3\" json:\"rate_per_second,omitempty\"" }), /* @__PURE__ */ $.structField("TaskIdBlock", /* @__PURE__ */ $.pointerType("apiv1.TaskIDBlock"), [4], 32, true, { tag: "protobuf:\"bytes,5,opt,name=task_id_block,json=taskIdBlock,proto3\" json:\"task_id_block,omitempty\"" }), /* @__PURE__ */ $.structField("IsolationGroupMetrics", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupMetrics")), [5], 40, true, { tag: "protobuf:\"bytes,6,rep,name=isolation_group_metrics,json=isolationGroupMetrics,proto3\" json:\"isolation_group_metrics,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }), /* @__PURE__ */ $.structField("NewTasksPerSecond", /* @__PURE__ */ $.basicType("float64"), [6], 48, true, { tag: "protobuf:\"fixed64,7,opt,name=new_tasks_per_second,json=newTasksPerSecond,proto3\" json:\"new_tasks_per_second,omitempty\"" }), /* @__PURE__ */ $.structField("Empty", /* @__PURE__ */ $.basicType("bool"), [7], 56, true, { tag: "protobuf:\"varint,8,opt,name=empty,proto3\" json:\"empty,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [8], 57, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [9], 64, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [10], 88, true, { tag: "json:\"-\"" })]
	)
}

export class TaskIDBlock {
	public get StartId(): bigint {
		return this._fields.StartId
	}

	public set StartId(value: bigint) {
		this._fields.StartId = value
	}

	public get EndId(): bigint {
		return this._fields.EndId
	}

	public set EndId(value: bigint) {
		this._fields.EndId = value
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
		StartId: bigint
		EndId: bigint
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{StartId?: bigint, EndId?: bigint, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			StartId: init?.StartId ?? (0n as bigint),
			EndId: init?.EndId ?? (0n as bigint),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TaskIDBlock {
		return new TaskIDBlock(this, true)
	}

	public __goscriptAssign(source: TaskIDBlock): void {
		const target = this._fields
		const values = source._fields
		target.StartId = values.StartId
		target.EndId = values.EndId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_216fa006947e00a0, $.arrayToSlice<number>([5])]
	}

	public GetEndId(): bigint {
		const m: TaskIDBlock | $.VarRef<TaskIDBlock> | null = this;
		if (m != null) {
			return $.pointerValue<TaskIDBlock>(m).EndId
		}
		return 0n
	}

	public GetStartId(): bigint {
		const m: TaskIDBlock | $.VarRef<TaskIDBlock> | null = this;
		if (m != null) {
			return $.pointerValue<TaskIDBlock>(m).StartId
		}
		return 0n
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: TaskIDBlock | $.VarRef<TaskIDBlock> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskIDBlock).Size() : TaskIDBlock.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple5: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskIDBlock).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TaskIDBlock.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TaskIDBlock | $.VarRef<TaskIDBlock> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskIDBlock).Size() : TaskIDBlock.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskIDBlock).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TaskIDBlock.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TaskIDBlock | $.VarRef<TaskIDBlock> | null = this;
		const m$: TaskIDBlock = m == null ? $.pointerTarget<TaskIDBlock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskIDBlock>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as TaskIDBlock).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as TaskIDBlock).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as TaskIDBlock).XXX_unrecognized)
		}
		if ((m$ as TaskIDBlock).EndId != 0n) {
			i = encodeVarintTasklist(dAtA, i, $.uint64((m$ as TaskIDBlock).EndId))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ((m$ as TaskIDBlock).StartId != 0n) {
			i = encodeVarintTasklist(dAtA, i, $.uint64((m$ as TaskIDBlock).StartId))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: TaskIDBlock | $.VarRef<TaskIDBlock> | null = this;
		$.assignStruct($.pointerValue<TaskIDBlock>(m), $.markAsStructValue(new TaskIDBlock()))
	}

	public Size(): number {
		const m: TaskIDBlock | $.VarRef<TaskIDBlock> | null = this;
		let n: number = 0
		const m$: TaskIDBlock = m == null ? $.pointerTarget<TaskIDBlock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskIDBlock>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as TaskIDBlock).StartId != 0n) {
			n = n + (1 + sovTasklist($.uint64((m$ as TaskIDBlock).StartId)))
		}
		if ((m$ as TaskIDBlock).EndId != 0n) {
			n = n + (1 + sovTasklist($.uint64((m$ as TaskIDBlock).EndId)))
		}
		if ((m$ as TaskIDBlock).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as TaskIDBlock).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: TaskIDBlock | $.VarRef<TaskIDBlock> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskIDBlock", /* @__PURE__ */ $.pointerType("apiv1.TaskIDBlock")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: TaskIDBlock | $.VarRef<TaskIDBlock> | null = this;
		const m$: TaskIDBlock = m == null ? $.pointerTarget<TaskIDBlock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskIDBlock>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow5 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowTasklist
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
				return fmt.Errorf("proto: TaskIDBlock: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: TaskIDBlock: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartId", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as TaskIDBlock).StartId = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++;
						;(m$ as TaskIDBlock).StartId = $.int64Or((m$ as TaskIDBlock).StartId, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field EndId", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as TaskIDBlock).EndId = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++;
						;(m$ as TaskIDBlock).EndId = $.int64Or((m$ as TaskIDBlock).EndId, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipTasklist($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthTasklist
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TaskIDBlock).XXX_unrecognized = $.appendSlice((m$ as TaskIDBlock).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: TaskIDBlock | $.VarRef<TaskIDBlock> | null = this;
		await xxx_messageInfo_TaskIDBlock.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskIDBlock", /* @__PURE__ */ $.pointerType("apiv1.TaskIDBlock")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: TaskIDBlock | $.VarRef<TaskIDBlock> | null = this;
		if (deterministic) {
			return xxx_messageInfo_TaskIDBlock.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.TaskIDBlock", /* @__PURE__ */ $.pointerType("apiv1.TaskIDBlock")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskIDBlock).MarshalToSizedBuffer(b) : TaskIDBlock.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: TaskIDBlock | $.VarRef<TaskIDBlock> | null = this;
		await xxx_messageInfo_TaskIDBlock.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskIDBlock", /* @__PURE__ */ $.pointerType("apiv1.TaskIDBlock")), src)
	}

	public XXX_Size(): number {
		const m: TaskIDBlock | $.VarRef<TaskIDBlock> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskIDBlock).Size() : TaskIDBlock.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: TaskIDBlock | $.VarRef<TaskIDBlock> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskIDBlock).Unmarshal(b) : TaskIDBlock.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.TaskIDBlock",
		() => new TaskIDBlock(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetEndId", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetStartId", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		TaskIDBlock,
		() => [/* @__PURE__ */ $.structField("StartId", /* @__PURE__ */ $.basicType("int64"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=start_id,json=startId,proto3\" json:\"start_id,omitempty\"" }), /* @__PURE__ */ $.structField("EndId", /* @__PURE__ */ $.basicType("int64"), [1], 8, true, { tag: "protobuf:\"varint,2,opt,name=end_id,json=endId,proto3\" json:\"end_id,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 40, true, { tag: "json:\"-\"" })]
	)
}

export class PollerInfo {
	public get LastAccessTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.LastAccessTime
	}

	public set LastAccessTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.LastAccessTime = value
	}

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
	}

	public get RatePerSecond(): number {
		return this._fields.RatePerSecond
	}

	public set RatePerSecond(value: number) {
		this._fields.RatePerSecond = value
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
		LastAccessTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		Identity: string
		RatePerSecond: number
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{LastAccessTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, Identity?: string, RatePerSecond?: number, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			LastAccessTime: init?.LastAccessTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			Identity: init?.Identity ?? ("" as string),
			RatePerSecond: init?.RatePerSecond ?? (0 as number),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PollerInfo {
		return new PollerInfo(this, true)
	}

	public __goscriptAssign(source: PollerInfo): void {
		const target = this._fields
		const values = source._fields
		target.LastAccessTime = values.LastAccessTime
		target.Identity = values.Identity
		target.RatePerSecond = values.RatePerSecond
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_216fa006947e00a0, $.arrayToSlice<number>([6])]
	}

	public GetIdentity(): string {
		const m: PollerInfo | $.VarRef<PollerInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PollerInfo>(m).Identity
		}
		return ""
	}

	public GetLastAccessTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: PollerInfo | $.VarRef<PollerInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PollerInfo>(m).LastAccessTime
		}
		return null
	}

	public GetRatePerSecond(): number {
		const m: PollerInfo | $.VarRef<PollerInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PollerInfo>(m).RatePerSecond
		}
		return 0
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: PollerInfo | $.VarRef<PollerInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollerInfo).Size() : PollerInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple6: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollerInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PollerInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PollerInfo | $.VarRef<PollerInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollerInfo).Size() : PollerInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollerInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PollerInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PollerInfo | $.VarRef<PollerInfo> | null = this;
		const m$: PollerInfo = m == null ? $.pointerTarget<PollerInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PollerInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as PollerInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as PollerInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PollerInfo).XXX_unrecognized)
		}
		if ((m$ as PollerInfo).RatePerSecond != 0) {
			i = i - (8)
			$.markAsStructValue($.cloneStructValue($.pointerValue<any>(encoding_binary.LittleEndian))).PutUint64($.goSlice(dAtA, i, undefined), $.uint64(math.Float64bits((m$ as PollerInfo).RatePerSecond)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x19
		}
		if ($.stringLen((m$ as PollerInfo).Identity) > 0) {
			i = i - ($.stringLen((m$ as PollerInfo).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PollerInfo).Identity)
			i = encodeVarintTasklist(dAtA, i, $.uint64($.stringLen((m$ as PollerInfo).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as PollerInfo).LastAccessTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as PollerInfo).LastAccessTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintTasklist(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: PollerInfo | $.VarRef<PollerInfo> | null = this;
		$.assignStruct($.pointerValue<PollerInfo>(m), $.markAsStructValue(new PollerInfo()))
	}

	public Size(): number {
		const m: PollerInfo | $.VarRef<PollerInfo> | null = this;
		let n: number = 0
		const m$: PollerInfo = m == null ? $.pointerTarget<PollerInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PollerInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as PollerInfo).LastAccessTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as PollerInfo).LastAccessTime)
			n = n + ((1 + l) + sovTasklist($.uint64(l)))
		}
		l = $.stringLen((m$ as PollerInfo).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovTasklist($.uint64(l)))
		}
		if ((m$ as PollerInfo).RatePerSecond != 0) {
			n = n + (9)
		}
		if ((m$ as PollerInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as PollerInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: PollerInfo | $.VarRef<PollerInfo> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.PollerInfo", /* @__PURE__ */ $.pointerType("apiv1.PollerInfo")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: PollerInfo | $.VarRef<PollerInfo> | null = this;
		const m$: PollerInfo = m == null ? $.pointerTarget<PollerInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PollerInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow6 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowTasklist
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
				return fmt.Errorf("proto: PollerInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: PollerInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field LastAccessTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
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
						return ErrInvalidLengthTasklist
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthTasklist
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollerInfo).LastAccessTime == null) {
						;(m$ as PollerInfo).LastAccessTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as PollerInfo).LastAccessTime, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Identity", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
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
						return ErrInvalidLengthTasklist
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthTasklist
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PollerInfo).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 1) {
						return fmt.Errorf("proto: wrong wireType = %d for field RatePerSecond", $.basicInterfaceValue(wireType, "int"))
					}
					let v: bigint = 0n
					if ((iNdEx + 8) > l) {
						return io.ErrUnexpectedEOF
					}
					v = $.uint64($.markAsStructValue($.cloneStructValue($.pointerValue<any>(encoding_binary.LittleEndian))).Uint64($.goSlice(dAtA, iNdEx, undefined)))
					iNdEx = iNdEx + (8);
					;(m$ as PollerInfo).RatePerSecond = math.Float64frombits(v)
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipTasklist($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthTasklist
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PollerInfo).XXX_unrecognized = $.appendSlice((m$ as PollerInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: PollerInfo | $.VarRef<PollerInfo> | null = this;
		await xxx_messageInfo_PollerInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.PollerInfo", /* @__PURE__ */ $.pointerType("apiv1.PollerInfo")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: PollerInfo | $.VarRef<PollerInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_PollerInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.PollerInfo", /* @__PURE__ */ $.pointerType("apiv1.PollerInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollerInfo).MarshalToSizedBuffer(b) : PollerInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: PollerInfo | $.VarRef<PollerInfo> | null = this;
		await xxx_messageInfo_PollerInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.PollerInfo", /* @__PURE__ */ $.pointerType("apiv1.PollerInfo")), src)
	}

	public XXX_Size(): number {
		const m: PollerInfo | $.VarRef<PollerInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollerInfo).Size() : PollerInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: PollerInfo | $.VarRef<PollerInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollerInfo).Unmarshal(b) : PollerInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.PollerInfo",
		() => new PollerInfo(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetIdentity", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetLastAccessTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetRatePerSecond", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		PollerInfo,
		() => [/* @__PURE__ */ $.structField("LastAccessTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=last_access_time,json=lastAccessTime,proto3\" json:\"last_access_time,omitempty\"" }), /* @__PURE__ */ $.structField("Identity", /* @__PURE__ */ $.basicType("string"), [1], 8, true, { tag: "protobuf:\"bytes,2,opt,name=identity,proto3\" json:\"identity,omitempty\"" }), /* @__PURE__ */ $.structField("RatePerSecond", /* @__PURE__ */ $.basicType("float64"), [2], 24, true, { tag: "protobuf:\"fixed64,3,opt,name=rate_per_second,json=ratePerSecond,proto3\" json:\"rate_per_second,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [3], 32, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 32, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [5], 56, true, { tag: "json:\"-\"" })]
	)
}

export class StickyExecutionAttributes {
	public get WorkerTaskList(): TaskList | $.VarRef<TaskList> | null {
		return this._fields.WorkerTaskList
	}

	public set WorkerTaskList(value: TaskList | $.VarRef<TaskList> | null) {
		this._fields.WorkerTaskList = value
	}

	public get ScheduleToStartTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.ScheduleToStartTimeout
	}

	public set ScheduleToStartTimeout(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.ScheduleToStartTimeout = value
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
		WorkerTaskList: TaskList | $.VarRef<TaskList> | null
		ScheduleToStartTimeout: types.Duration | $.VarRef<types.Duration> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{WorkerTaskList?: TaskList | $.VarRef<TaskList> | null, ScheduleToStartTimeout?: types.Duration | $.VarRef<types.Duration> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			WorkerTaskList: init?.WorkerTaskList ?? (null! as TaskList | $.VarRef<TaskList> | null),
			ScheduleToStartTimeout: init?.ScheduleToStartTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StickyExecutionAttributes {
		return new StickyExecutionAttributes(this, true)
	}

	public __goscriptAssign(source: StickyExecutionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.WorkerTaskList = values.WorkerTaskList
		target.ScheduleToStartTimeout = values.ScheduleToStartTimeout
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_216fa006947e00a0, $.arrayToSlice<number>([7])]
	}

	public GetScheduleToStartTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: StickyExecutionAttributes | $.VarRef<StickyExecutionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StickyExecutionAttributes>(m).ScheduleToStartTimeout
		}
		return null
	}

	public GetWorkerTaskList(): TaskList | $.VarRef<TaskList> | null {
		const m: StickyExecutionAttributes | $.VarRef<StickyExecutionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StickyExecutionAttributes>(m).WorkerTaskList
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: StickyExecutionAttributes | $.VarRef<StickyExecutionAttributes> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StickyExecutionAttributes).Size() : StickyExecutionAttributes.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple7: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StickyExecutionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StickyExecutionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StickyExecutionAttributes | $.VarRef<StickyExecutionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StickyExecutionAttributes).Size() : StickyExecutionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StickyExecutionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StickyExecutionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StickyExecutionAttributes | $.VarRef<StickyExecutionAttributes> | null = this;
		const m$: StickyExecutionAttributes = m == null ? $.pointerTarget<StickyExecutionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StickyExecutionAttributes>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as StickyExecutionAttributes).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as StickyExecutionAttributes).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StickyExecutionAttributes).XXX_unrecognized)
		}
		if ((m$ as StickyExecutionAttributes).ScheduleToStartTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as StickyExecutionAttributes).ScheduleToStartTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintTasklist(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as StickyExecutionAttributes).WorkerTaskList != null) {
			{
				let [size, err] = TaskList.prototype.MarshalToSizedBuffer.call((m$ as StickyExecutionAttributes).WorkerTaskList, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintTasklist(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: StickyExecutionAttributes | $.VarRef<StickyExecutionAttributes> | null = this;
		$.assignStruct($.pointerValue<StickyExecutionAttributes>(m), $.markAsStructValue(new StickyExecutionAttributes()))
	}

	public Size(): number {
		const m: StickyExecutionAttributes | $.VarRef<StickyExecutionAttributes> | null = this;
		let n: number = 0
		const m$: StickyExecutionAttributes = m == null ? $.pointerTarget<StickyExecutionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StickyExecutionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as StickyExecutionAttributes).WorkerTaskList != null) {
			l = TaskList.prototype.Size.call((m$ as StickyExecutionAttributes).WorkerTaskList)
			n = n + ((1 + l) + sovTasklist($.uint64(l)))
		}
		if ((m$ as StickyExecutionAttributes).ScheduleToStartTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as StickyExecutionAttributes).ScheduleToStartTimeout)
			n = n + ((1 + l) + sovTasklist($.uint64(l)))
		}
		if ((m$ as StickyExecutionAttributes).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as StickyExecutionAttributes).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: StickyExecutionAttributes | $.VarRef<StickyExecutionAttributes> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.StickyExecutionAttributes", /* @__PURE__ */ $.pointerType("apiv1.StickyExecutionAttributes")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: StickyExecutionAttributes | $.VarRef<StickyExecutionAttributes> | null = this;
		const m$: StickyExecutionAttributes = m == null ? $.pointerTarget<StickyExecutionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StickyExecutionAttributes>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow7 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowTasklist
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
				return fmt.Errorf("proto: StickyExecutionAttributes: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: StickyExecutionAttributes: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkerTaskList", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
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
						return ErrInvalidLengthTasklist
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthTasklist
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StickyExecutionAttributes).WorkerTaskList == null) {
						;(m$ as StickyExecutionAttributes).WorkerTaskList = new TaskList()
					}
					{
						let err = TaskList.prototype.Unmarshal.call((m$ as StickyExecutionAttributes).WorkerTaskList, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduleToStartTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
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
						return ErrInvalidLengthTasklist
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthTasklist
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StickyExecutionAttributes).ScheduleToStartTimeout == null) {
						;(m$ as StickyExecutionAttributes).ScheduleToStartTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as StickyExecutionAttributes).ScheduleToStartTimeout, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipTasklist($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthTasklist
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StickyExecutionAttributes).XXX_unrecognized = $.appendSlice((m$ as StickyExecutionAttributes).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: StickyExecutionAttributes | $.VarRef<StickyExecutionAttributes> | null = this;
		await xxx_messageInfo_StickyExecutionAttributes.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.StickyExecutionAttributes", /* @__PURE__ */ $.pointerType("apiv1.StickyExecutionAttributes")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: StickyExecutionAttributes | $.VarRef<StickyExecutionAttributes> | null = this;
		if (deterministic) {
			return xxx_messageInfo_StickyExecutionAttributes.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.StickyExecutionAttributes", /* @__PURE__ */ $.pointerType("apiv1.StickyExecutionAttributes")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StickyExecutionAttributes).MarshalToSizedBuffer(b) : StickyExecutionAttributes.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: StickyExecutionAttributes | $.VarRef<StickyExecutionAttributes> | null = this;
		await xxx_messageInfo_StickyExecutionAttributes.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.StickyExecutionAttributes", /* @__PURE__ */ $.pointerType("apiv1.StickyExecutionAttributes")), src)
	}

	public XXX_Size(): number {
		const m: StickyExecutionAttributes | $.VarRef<StickyExecutionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StickyExecutionAttributes).Size() : StickyExecutionAttributes.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: StickyExecutionAttributes | $.VarRef<StickyExecutionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StickyExecutionAttributes).Unmarshal(b) : StickyExecutionAttributes.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.StickyExecutionAttributes",
		() => new StickyExecutionAttributes(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetScheduleToStartTimeout", [], [/* @__PURE__ */ $.pointerType("types.Duration")], true), $.methodSignature("GetWorkerTaskList", [], [/* @__PURE__ */ $.pointerType("apiv1.TaskList")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		StickyExecutionAttributes,
		() => [/* @__PURE__ */ $.structField("WorkerTaskList", /* @__PURE__ */ $.pointerType("apiv1.TaskList"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=worker_task_list,json=workerTaskList,proto3\" json:\"worker_task_list,omitempty\"" }), /* @__PURE__ */ $.structField("ScheduleToStartTimeout", /* @__PURE__ */ $.pointerType("types.Duration"), [1], 8, true, { tag: "protobuf:\"bytes,2,opt,name=schedule_to_start_timeout,json=scheduleToStartTimeout,proto3\" json:\"schedule_to_start_timeout,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 40, true, { tag: "json:\"-\"" })]
	)
}

export class TaskListPartition {
	// The isolation groups that this partition is assigned.
	// Null/empty indicates that the partition should accept all isolation groups.
	public get IsolationGroups(): $.Slice<string> {
		return this._fields.IsolationGroups
	}

	public set IsolationGroups(value: $.Slice<string>) {
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
		IsolationGroups: $.Slice<string>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{IsolationGroups?: $.Slice<string>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			IsolationGroups: init?.IsolationGroups ?? (null! as $.Slice<string>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TaskListPartition {
		return new TaskListPartition(this, true)
	}

	public __goscriptAssign(source: TaskListPartition): void {
		const target = this._fields
		const values = source._fields
		target.IsolationGroups = values.IsolationGroups
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_216fa006947e00a0, $.arrayToSlice<number>([8])]
	}

	public GetIsolationGroups(): $.Slice<string> {
		const m: TaskListPartition | $.VarRef<TaskListPartition> | null = this;
		if (m != null) {
			return $.pointerValue<TaskListPartition>(m).IsolationGroups
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: TaskListPartition | $.VarRef<TaskListPartition> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartition).Size() : TaskListPartition.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple8: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartition).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TaskListPartition.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TaskListPartition | $.VarRef<TaskListPartition> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartition).Size() : TaskListPartition.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartition).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TaskListPartition.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TaskListPartition | $.VarRef<TaskListPartition> | null = this;
		const m$: TaskListPartition = m == null ? $.pointerTarget<TaskListPartition>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskListPartition>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as TaskListPartition).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as TaskListPartition).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as TaskListPartition).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as TaskListPartition).IsolationGroups) > 0) {
			for (let __goscriptSliceWindow8 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as TaskListPartition).IsolationGroups) - 1; iNdEx >= 0; iNdEx--) {
				i = i - ($.stringLen($.arrayIndex((m$ as TaskListPartition).IsolationGroups!, iNdEx)))
				$.copy($.goSlice(dAtA, i, undefined), $.arrayIndex((m$ as TaskListPartition).IsolationGroups!, iNdEx))
				i = encodeVarintTasklist(dAtA, i, $.uint64($.stringLen($.arrayIndex((m$ as TaskListPartition).IsolationGroups!, iNdEx))))
				i--;
				;(__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: TaskListPartition | $.VarRef<TaskListPartition> | null = this;
		$.assignStruct($.pointerValue<TaskListPartition>(m), $.markAsStructValue(new TaskListPartition()))
	}

	public Size(): number {
		const m: TaskListPartition | $.VarRef<TaskListPartition> | null = this;
		let n: number = 0
		const m$: TaskListPartition = m == null ? $.pointerTarget<TaskListPartition>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskListPartition>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as TaskListPartition).IsolationGroups) > 0) {
			for (let __goscriptRangeTarget0 = (m$ as TaskListPartition).IsolationGroups, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let s = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
				l = $.stringLen(s)
				n = n + ((1 + l) + sovTasklist($.uint64(l)))
			}
		}
		if ((m$ as TaskListPartition).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as TaskListPartition).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: TaskListPartition | $.VarRef<TaskListPartition> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListPartition", /* @__PURE__ */ $.pointerType("apiv1.TaskListPartition")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: TaskListPartition | $.VarRef<TaskListPartition> | null = this;
		const m$: TaskListPartition = m == null ? $.pointerTarget<TaskListPartition>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskListPartition>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow9 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowTasklist
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
				return fmt.Errorf("proto: TaskListPartition: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: TaskListPartition: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field IsolationGroups", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
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
						return ErrInvalidLengthTasklist
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthTasklist
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TaskListPartition).IsolationGroups = $.appendOne((m$ as TaskListPartition).IsolationGroups, $.bytesToString($.goSlice(dAtA, iNdEx, postIndex)))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipTasklist($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthTasklist
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TaskListPartition).XXX_unrecognized = $.appendSlice((m$ as TaskListPartition).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: TaskListPartition | $.VarRef<TaskListPartition> | null = this;
		await xxx_messageInfo_TaskListPartition.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListPartition", /* @__PURE__ */ $.pointerType("apiv1.TaskListPartition")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: TaskListPartition | $.VarRef<TaskListPartition> | null = this;
		if (deterministic) {
			return xxx_messageInfo_TaskListPartition.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListPartition", /* @__PURE__ */ $.pointerType("apiv1.TaskListPartition")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartition).MarshalToSizedBuffer(b) : TaskListPartition.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: TaskListPartition | $.VarRef<TaskListPartition> | null = this;
		await xxx_messageInfo_TaskListPartition.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListPartition", /* @__PURE__ */ $.pointerType("apiv1.TaskListPartition")), src)
	}

	public XXX_Size(): number {
		const m: TaskListPartition | $.VarRef<TaskListPartition> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartition).Size() : TaskListPartition.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: TaskListPartition | $.VarRef<TaskListPartition> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartition).Unmarshal(b) : TaskListPartition.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.TaskListPartition",
		() => new TaskListPartition(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetIsolationGroups", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		TaskListPartition,
		() => [/* @__PURE__ */ $.structField("IsolationGroups", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, true, { tag: "protobuf:\"bytes,1,rep,name=isolation_groups,json=isolationGroups,proto3\" json:\"isolation_groups,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [1], 24, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 24, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [3], 48, true, { tag: "json:\"-\"" })]
	)
}

export class TaskListPartitionConfig {
	public get Version(): bigint {
		return this._fields.Version
	}

	public set Version(value: bigint) {
		this._fields.Version = value
	}

	public get NumReadPartitions(): number {
		return this._fields.NumReadPartitions
	}

	public set NumReadPartitions(value: number) {
		this._fields.NumReadPartitions = value
	}

	public get NumWritePartitions(): number {
		return this._fields.NumWritePartitions
	}

	public set NumWritePartitions(value: number) {
		this._fields.NumWritePartitions = value
	}

	// Mapping of TaskList PartitionIDs to metadata for reading tasks
	public get ReadPartitions(): globalThis.Map<number, TaskListPartition | $.VarRef<TaskListPartition> | null> | null {
		return this._fields.ReadPartitions
	}

	public set ReadPartitions(value: globalThis.Map<number, TaskListPartition | $.VarRef<TaskListPartition> | null> | null) {
		this._fields.ReadPartitions = value
	}

	// Mapping of TaskList PartitionIDs to metadata for writing tasks
	public get WritePartitions(): globalThis.Map<number, TaskListPartition | $.VarRef<TaskListPartition> | null> | null {
		return this._fields.WritePartitions
	}

	public set WritePartitions(value: globalThis.Map<number, TaskListPartition | $.VarRef<TaskListPartition> | null> | null) {
		this._fields.WritePartitions = value
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
		Version: bigint
		NumReadPartitions: number
		NumWritePartitions: number
		ReadPartitions: globalThis.Map<number, TaskListPartition | $.VarRef<TaskListPartition> | null> | null
		WritePartitions: globalThis.Map<number, TaskListPartition | $.VarRef<TaskListPartition> | null> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Version?: bigint, NumReadPartitions?: number, NumWritePartitions?: number, ReadPartitions?: globalThis.Map<number, TaskListPartition | $.VarRef<TaskListPartition> | null> | null, WritePartitions?: globalThis.Map<number, TaskListPartition | $.VarRef<TaskListPartition> | null> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Version: init?.Version ?? (0n as bigint),
			NumReadPartitions: init?.NumReadPartitions ?? (0 as number),
			NumWritePartitions: init?.NumWritePartitions ?? (0 as number),
			ReadPartitions: init?.ReadPartitions ?? (null! as globalThis.Map<number, TaskListPartition | $.VarRef<TaskListPartition> | null> | null),
			WritePartitions: init?.WritePartitions ?? (null! as globalThis.Map<number, TaskListPartition | $.VarRef<TaskListPartition> | null> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TaskListPartitionConfig {
		return new TaskListPartitionConfig(this, true)
	}

	public __goscriptAssign(source: TaskListPartitionConfig): void {
		const target = this._fields
		const values = source._fields
		target.Version = values.Version
		target.NumReadPartitions = values.NumReadPartitions
		target.NumWritePartitions = values.NumWritePartitions
		target.ReadPartitions = values.ReadPartitions
		target.WritePartitions = values.WritePartitions
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_216fa006947e00a0, $.arrayToSlice<number>([9])]
	}

	public GetNumReadPartitions(): number {
		const m: TaskListPartitionConfig | $.VarRef<TaskListPartitionConfig> | null = this;
		if (m != null) {
			return $.pointerValue<TaskListPartitionConfig>(m).NumReadPartitions
		}
		return 0
	}

	public GetNumWritePartitions(): number {
		const m: TaskListPartitionConfig | $.VarRef<TaskListPartitionConfig> | null = this;
		if (m != null) {
			return $.pointerValue<TaskListPartitionConfig>(m).NumWritePartitions
		}
		return 0
	}

	public GetReadPartitions(): globalThis.Map<number, TaskListPartition | $.VarRef<TaskListPartition> | null> | null {
		const m: TaskListPartitionConfig | $.VarRef<TaskListPartitionConfig> | null = this;
		if (m != null) {
			return $.pointerValue<TaskListPartitionConfig>(m).ReadPartitions
		}
		return null
	}

	public GetVersion(): bigint {
		const m: TaskListPartitionConfig | $.VarRef<TaskListPartitionConfig> | null = this;
		if (m != null) {
			return $.pointerValue<TaskListPartitionConfig>(m).Version
		}
		return 0n
	}

	public GetWritePartitions(): globalThis.Map<number, TaskListPartition | $.VarRef<TaskListPartition> | null> | null {
		const m: TaskListPartitionConfig | $.VarRef<TaskListPartitionConfig> | null = this;
		if (m != null) {
			return $.pointerValue<TaskListPartitionConfig>(m).WritePartitions
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: TaskListPartitionConfig | $.VarRef<TaskListPartitionConfig> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartitionConfig).Size() : TaskListPartitionConfig.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple9: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartitionConfig).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TaskListPartitionConfig.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TaskListPartitionConfig | $.VarRef<TaskListPartitionConfig> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartitionConfig).Size() : TaskListPartitionConfig.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartitionConfig).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TaskListPartitionConfig.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TaskListPartitionConfig | $.VarRef<TaskListPartitionConfig> | null = this;
		const m$: TaskListPartitionConfig = m == null ? $.pointerTarget<TaskListPartitionConfig>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskListPartitionConfig>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as TaskListPartitionConfig).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as TaskListPartitionConfig).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as TaskListPartitionConfig).XXX_unrecognized)
		}
		if ($.len((m$ as TaskListPartitionConfig).WritePartitions) > 0) {
			for (const [k, __rangeValue] of (m$ as TaskListPartitionConfig).WritePartitions?.entries() ?? []) {
				let v: TaskListPartition | $.VarRef<TaskListPartition> | null = $.mapGet<number, TaskListPartition | $.VarRef<TaskListPartition> | null, TaskListPartition | $.VarRef<TaskListPartition> | null>((m$ as TaskListPartitionConfig).WritePartitions, k, null)[0]
				let baseI: number = i
				if (v != null) {
					{
						let [size, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as TaskListPartition).MarshalToSizedBuffer($.goSlice(dAtA, undefined, i)) : TaskListPartition.prototype.MarshalToSizedBuffer.call(v, $.goSlice(dAtA, undefined, i)))
						if (err != null) {
							return [0, err]
						}
						i = i - (size)
						i = encodeVarintTasklist(dAtA, i, $.uint64(size))
					}
					i--
					$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				}
				i = encodeVarintTasklist(dAtA, i, $.uint64(k))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
				i = encodeVarintTasklist(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
			}
		}
		if ($.len((m$ as TaskListPartitionConfig).ReadPartitions) > 0) {
			for (const [k, __rangeValue] of (m$ as TaskListPartitionConfig).ReadPartitions?.entries() ?? []) {
				let v: TaskListPartition | $.VarRef<TaskListPartition> | null = $.mapGet<number, TaskListPartition | $.VarRef<TaskListPartition> | null, TaskListPartition | $.VarRef<TaskListPartition> | null>((m$ as TaskListPartitionConfig).ReadPartitions, k, null)[0]
				let baseI: number = i
				if (v != null) {
					{
						let [size, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as TaskListPartition).MarshalToSizedBuffer($.goSlice(dAtA, undefined, i)) : TaskListPartition.prototype.MarshalToSizedBuffer.call(v, $.goSlice(dAtA, undefined, i)))
						if (err != null) {
							return [0, err]
						}
						i = i - (size)
						i = encodeVarintTasklist(dAtA, i, $.uint64(size))
					}
					i--
					$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				}
				i = encodeVarintTasklist(dAtA, i, $.uint64(k))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
				i = encodeVarintTasklist(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
			}
		}
		if ((m$ as TaskListPartitionConfig).NumWritePartitions != 0) {
			i = encodeVarintTasklist(dAtA, i, $.uint64((m$ as TaskListPartitionConfig).NumWritePartitions))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x18
		}
		if ((m$ as TaskListPartitionConfig).NumReadPartitions != 0) {
			i = encodeVarintTasklist(dAtA, i, $.uint64((m$ as TaskListPartitionConfig).NumReadPartitions))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ((m$ as TaskListPartitionConfig).Version != 0n) {
			i = encodeVarintTasklist(dAtA, i, $.uint64((m$ as TaskListPartitionConfig).Version))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: TaskListPartitionConfig | $.VarRef<TaskListPartitionConfig> | null = this;
		$.assignStruct($.pointerValue<TaskListPartitionConfig>(m), $.markAsStructValue(new TaskListPartitionConfig()))
	}

	public Size(): number {
		const m: TaskListPartitionConfig | $.VarRef<TaskListPartitionConfig> | null = this;
		let n: number = 0
		const m$: TaskListPartitionConfig = m == null ? $.pointerTarget<TaskListPartitionConfig>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskListPartitionConfig>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as TaskListPartitionConfig).Version != 0n) {
			n = n + (1 + sovTasklist($.uint64((m$ as TaskListPartitionConfig).Version)))
		}
		if ((m$ as TaskListPartitionConfig).NumReadPartitions != 0) {
			n = n + (1 + sovTasklist($.uint64((m$ as TaskListPartitionConfig).NumReadPartitions)))
		}
		if ((m$ as TaskListPartitionConfig).NumWritePartitions != 0) {
			n = n + (1 + sovTasklist($.uint64((m$ as TaskListPartitionConfig).NumWritePartitions)))
		}
		if ($.len((m$ as TaskListPartitionConfig).ReadPartitions) > 0) {
			for (const [k, v] of (m$ as TaskListPartitionConfig).ReadPartitions?.entries() ?? []) {
				k
				v
				l = 0
				if (v != null) {
					l = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as TaskListPartition).Size() : TaskListPartition.prototype.Size.call(v))
					l = l + (1 + sovTasklist($.uint64(l)))
				}
				let mapEntrySize = (1 + sovTasklist($.uint64(k))) + l
				n = n + ((mapEntrySize + 1) + sovTasklist($.uint64(mapEntrySize)))
			}
		}
		if ($.len((m$ as TaskListPartitionConfig).WritePartitions) > 0) {
			for (const [k, v] of (m$ as TaskListPartitionConfig).WritePartitions?.entries() ?? []) {
				k
				v
				l = 0
				if (v != null) {
					l = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as TaskListPartition).Size() : TaskListPartition.prototype.Size.call(v))
					l = l + (1 + sovTasklist($.uint64(l)))
				}
				let mapEntrySize = (1 + sovTasklist($.uint64(k))) + l
				n = n + ((mapEntrySize + 1) + sovTasklist($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as TaskListPartitionConfig).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as TaskListPartitionConfig).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: TaskListPartitionConfig | $.VarRef<TaskListPartitionConfig> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListPartitionConfig", /* @__PURE__ */ $.pointerType("apiv1.TaskListPartitionConfig")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: TaskListPartitionConfig | $.VarRef<TaskListPartitionConfig> | null = this;
		const m$: TaskListPartitionConfig = m == null ? $.pointerTarget<TaskListPartitionConfig>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TaskListPartitionConfig>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow10 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowTasklist
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
				return fmt.Errorf("proto: TaskListPartitionConfig: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: TaskListPartitionConfig: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Version", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as TaskListPartitionConfig).Version = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++;
						;(m$ as TaskListPartitionConfig).Version = $.int64Or((m$ as TaskListPartitionConfig).Version, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field NumReadPartitions", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as TaskListPartitionConfig).NumReadPartitions = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++;
						;(m$ as TaskListPartitionConfig).NumReadPartitions = (m$ as TaskListPartitionConfig).NumReadPartitions | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 3:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field NumWritePartitions", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as TaskListPartitionConfig).NumWritePartitions = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++;
						;(m$ as TaskListPartitionConfig).NumWritePartitions = (m$ as TaskListPartitionConfig).NumWritePartitions | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ReadPartitions", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
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
						return ErrInvalidLengthTasklist
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthTasklist
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as TaskListPartitionConfig).ReadPartitions == null) {
						;(m$ as TaskListPartitionConfig).ReadPartitions = $.makeMap<number, TaskListPartition | $.VarRef<TaskListPartition> | null>()
					}
					let mapkey: number = 0
					let mapvalue: TaskListPartition | $.VarRef<TaskListPartition> | null = null! as TaskListPartition | $.VarRef<TaskListPartition> | null
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow2: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowTasklist
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
							iNdEx++
							__goscriptShadow2 = $.uint64Or(__goscriptShadow2, $.uint64Shl($.uint64(b & 0x7F), shift))
							if (b < 0x80) {
								break
							}
						}
						let __goscriptShadow3 = $.int($.uint64Shr(__goscriptShadow2, 3n), 32)
						if (__goscriptShadow3 == 1) {
							for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
								if (shift >= 64) {
									return ErrIntOverflowTasklist
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
								iNdEx++
								mapkey = mapkey | ($.int($.int(b & 0x7F, 32) << shift, 32))
								if (b < 0x80) {
									break
								}
							}
						} else {
							if (__goscriptShadow3 == 2) {
								let mapmsglen: number = 0
								for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
									if (shift >= 64) {
										return ErrIntOverflowTasklist
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
									iNdEx++
									mapmsglen = mapmsglen | ($.int(b & 0x7F) << shift)
									if (b < 0x80) {
										break
									}
								}
								if (mapmsglen < 0) {
									return ErrInvalidLengthTasklist
								}
								let postmsgIndex: number = iNdEx + mapmsglen
								if (postmsgIndex < 0) {
									return ErrInvalidLengthTasklist
								}
								if (postmsgIndex > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = new TaskListPartition()
								{
									let err = (mapvalue !== null && (mapvalue as any).__isVarRef !== true && (mapvalue as any).__goValue === undefined ? ((mapvalue as any) as TaskListPartition).Unmarshal($.goSlice(dAtA, iNdEx, postmsgIndex)) : TaskListPartition.prototype.Unmarshal.call(mapvalue, $.goSlice(dAtA, iNdEx, postmsgIndex)))
									if (err != null) {
										return err
									}
								}
								iNdEx = postmsgIndex
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipTasklist($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthTasklist
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as TaskListPartitionConfig).ReadPartitions, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WritePartitions", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTasklist
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
						return ErrInvalidLengthTasklist
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthTasklist
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as TaskListPartitionConfig).WritePartitions == null) {
						;(m$ as TaskListPartitionConfig).WritePartitions = $.makeMap<number, TaskListPartition | $.VarRef<TaskListPartition> | null>()
					}
					let mapkey: number = 0
					let mapvalue: TaskListPartition | $.VarRef<TaskListPartition> | null = null! as TaskListPartition | $.VarRef<TaskListPartition> | null
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow4: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowTasklist
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
							iNdEx++
							__goscriptShadow4 = $.uint64Or(__goscriptShadow4, $.uint64Shl($.uint64(b & 0x7F), shift))
							if (b < 0x80) {
								break
							}
						}
						let __goscriptShadow5 = $.int($.uint64Shr(__goscriptShadow4, 3n), 32)
						if (__goscriptShadow5 == 1) {
							for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
								if (shift >= 64) {
									return ErrIntOverflowTasklist
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
								iNdEx++
								mapkey = mapkey | ($.int($.int(b & 0x7F, 32) << shift, 32))
								if (b < 0x80) {
									break
								}
							}
						} else {
							if (__goscriptShadow5 == 2) {
								let mapmsglen: number = 0
								for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
									if (shift >= 64) {
										return ErrIntOverflowTasklist
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
									iNdEx++
									mapmsglen = mapmsglen | ($.int(b & 0x7F) << shift)
									if (b < 0x80) {
										break
									}
								}
								if (mapmsglen < 0) {
									return ErrInvalidLengthTasklist
								}
								let postmsgIndex: number = iNdEx + mapmsglen
								if (postmsgIndex < 0) {
									return ErrInvalidLengthTasklist
								}
								if (postmsgIndex > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = new TaskListPartition()
								{
									let err = (mapvalue !== null && (mapvalue as any).__isVarRef !== true && (mapvalue as any).__goValue === undefined ? ((mapvalue as any) as TaskListPartition).Unmarshal($.goSlice(dAtA, iNdEx, postmsgIndex)) : TaskListPartition.prototype.Unmarshal.call(mapvalue, $.goSlice(dAtA, iNdEx, postmsgIndex)))
									if (err != null) {
										return err
									}
								}
								iNdEx = postmsgIndex
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipTasklist($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthTasklist
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as TaskListPartitionConfig).WritePartitions, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipTasklist($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthTasklist
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TaskListPartitionConfig).XXX_unrecognized = $.appendSlice((m$ as TaskListPartitionConfig).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: TaskListPartitionConfig | $.VarRef<TaskListPartitionConfig> | null = this;
		await xxx_messageInfo_TaskListPartitionConfig.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListPartitionConfig", /* @__PURE__ */ $.pointerType("apiv1.TaskListPartitionConfig")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: TaskListPartitionConfig | $.VarRef<TaskListPartitionConfig> | null = this;
		if (deterministic) {
			return xxx_messageInfo_TaskListPartitionConfig.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListPartitionConfig", /* @__PURE__ */ $.pointerType("apiv1.TaskListPartitionConfig")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartitionConfig).MarshalToSizedBuffer(b) : TaskListPartitionConfig.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: TaskListPartitionConfig | $.VarRef<TaskListPartitionConfig> | null = this;
		await xxx_messageInfo_TaskListPartitionConfig.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.TaskListPartitionConfig", /* @__PURE__ */ $.pointerType("apiv1.TaskListPartitionConfig")), src)
	}

	public XXX_Size(): number {
		const m: TaskListPartitionConfig | $.VarRef<TaskListPartitionConfig> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartitionConfig).Size() : TaskListPartitionConfig.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: TaskListPartitionConfig | $.VarRef<TaskListPartitionConfig> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TaskListPartitionConfig).Unmarshal(b) : TaskListPartitionConfig.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.TaskListPartitionConfig",
		() => new TaskListPartitionConfig(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetNumReadPartitions", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetNumWritePartitions", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetReadPartitions", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.pointerType("apiv1.TaskListPartition"))], true), $.methodSignature("GetVersion", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetWritePartitions", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.pointerType("apiv1.TaskListPartition"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		TaskListPartitionConfig,
		() => [/* @__PURE__ */ $.structField("Version", /* @__PURE__ */ $.basicType("int64"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=version,proto3\" json:\"version,omitempty\"" }), /* @__PURE__ */ $.structField("NumReadPartitions", /* @__PURE__ */ $.basicType("int32"), [1], 8, true, { tag: "protobuf:\"varint,2,opt,name=num_read_partitions,json=numReadPartitions,proto3\" json:\"num_read_partitions,omitempty\"" }), /* @__PURE__ */ $.structField("NumWritePartitions", /* @__PURE__ */ $.basicType("int32"), [2], 12, true, { tag: "protobuf:\"varint,3,opt,name=num_write_partitions,json=numWritePartitions,proto3\" json:\"num_write_partitions,omitempty\"" }), /* @__PURE__ */ $.structField("ReadPartitions", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.pointerType("apiv1.TaskListPartition")), [3], 16, true, { tag: "protobuf:\"bytes,4,rep,name=read_partitions,json=readPartitions,proto3\" json:\"read_partitions,omitempty\" protobuf_key:\"varint,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }), /* @__PURE__ */ $.structField("WritePartitions", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.pointerType("apiv1.TaskListPartition")), [4], 24, true, { tag: "protobuf:\"bytes,5,rep,name=write_partitions,json=writePartitions,proto3\" json:\"write_partitions,omitempty\" protobuf_key:\"varint,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [5], 32, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 32, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [7], 56, true, { tag: "json:\"-\"" })]
	)
}

export const TaskListKind_TASK_LIST_KIND_INVALID: TaskListKind = 0

export const TaskListKind_TASK_LIST_KIND_NORMAL: TaskListKind = 1

export const TaskListKind_TASK_LIST_KIND_STICKY: TaskListKind = 2

export const TaskListKind_TASK_LIST_KIND_EPHEMERAL: TaskListKind = 3

export const TaskListType_TASK_LIST_TYPE_INVALID: TaskListType = 0

export const TaskListType_TASK_LIST_TYPE_DECISION: TaskListType = 1

export const TaskListType_TASK_LIST_TYPE_ACTIVITY: TaskListType = 2

export let TaskListKind_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "TASK_LIST_KIND_INVALID"], [1, "TASK_LIST_KIND_NORMAL"], [2, "TASK_LIST_KIND_STICKY"], [3, "TASK_LIST_KIND_EPHEMERAL"]])

export function __goscript_set_TaskListKind_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	TaskListKind_name = __goscriptValue
}

export let TaskListKind_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["TASK_LIST_KIND_INVALID", 0], ["TASK_LIST_KIND_NORMAL", 1], ["TASK_LIST_KIND_STICKY", 2], ["TASK_LIST_KIND_EPHEMERAL", 3]])

export function __goscript_set_TaskListKind_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	TaskListKind_value = __goscriptValue
}

export function TaskListKind_String(x: TaskListKind): string {
	return proto.EnumName(TaskListKind_name, $.int(x, 32))
}

export function TaskListKind_EnumDescriptor(recv: TaskListKind): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_216fa006947e00a0, $.arrayToSlice<number>([0])]
}

export let TaskListType_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "TASK_LIST_TYPE_INVALID"], [1, "TASK_LIST_TYPE_DECISION"], [2, "TASK_LIST_TYPE_ACTIVITY"]])

export function __goscript_set_TaskListType_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	TaskListType_name = __goscriptValue
}

export let TaskListType_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["TASK_LIST_TYPE_INVALID", 0], ["TASK_LIST_TYPE_DECISION", 1], ["TASK_LIST_TYPE_ACTIVITY", 2]])

export function __goscript_set_TaskListType_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	TaskListType_value = __goscriptValue
}

export function TaskListType_String(x: TaskListType): string {
	return proto.EnumName(TaskListType_name, $.int(x, 32))
}

export function TaskListType_EnumDescriptor(recv: TaskListType): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_216fa006947e00a0, $.arrayToSlice<number>([1])]
}

export let xxx_messageInfo_TaskList: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_TaskList(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_TaskList.value, __goscriptValue)
}

export let xxx_messageInfo_TaskListMetadata: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_TaskListMetadata(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_TaskListMetadata.value, __goscriptValue)
}

export let xxx_messageInfo_TaskListPartitionMetadata: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_TaskListPartitionMetadata(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_TaskListPartitionMetadata.value, __goscriptValue)
}

export let xxx_messageInfo_IsolationGroupMetrics: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_IsolationGroupMetrics(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_IsolationGroupMetrics.value, __goscriptValue)
}

export let xxx_messageInfo_TaskListStatus: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_TaskListStatus(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_TaskListStatus.value, __goscriptValue)
}

export let xxx_messageInfo_TaskIDBlock: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_TaskIDBlock(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_TaskIDBlock.value, __goscriptValue)
}

export let xxx_messageInfo_PollerInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_PollerInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_PollerInfo.value, __goscriptValue)
}

export let xxx_messageInfo_StickyExecutionAttributes: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_StickyExecutionAttributes(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_StickyExecutionAttributes.value, __goscriptValue)
}

export let xxx_messageInfo_TaskListPartition: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_TaskListPartition(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_TaskListPartition.value, __goscriptValue)
}

export let xxx_messageInfo_TaskListPartitionConfig: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_TaskListPartitionConfig(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_TaskListPartitionConfig.value, __goscriptValue)
}

async function __goscriptInit0(): globalThis.Promise<void> {
	proto.RegisterEnum("uber.cadence.api.v1.TaskListKind", TaskListKind_name, TaskListKind_value)
	proto.RegisterEnum("uber.cadence.api.v1.TaskListType", TaskListType_name, TaskListType_value)
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.TaskList", /* @__PURE__ */ $.pointerType("apiv1.TaskList")), "uber.cadence.api.v1.TaskList")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.TaskListMetadata", /* @__PURE__ */ $.pointerType("apiv1.TaskListMetadata")), "uber.cadence.api.v1.TaskListMetadata")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.TaskListPartitionMetadata", /* @__PURE__ */ $.pointerType("apiv1.TaskListPartitionMetadata")), "uber.cadence.api.v1.TaskListPartitionMetadata")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.IsolationGroupMetrics", /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupMetrics")), "uber.cadence.api.v1.IsolationGroupMetrics")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.TaskListStatus", /* @__PURE__ */ $.pointerType("apiv1.TaskListStatus")), "uber.cadence.api.v1.TaskListStatus")
	await proto.RegisterMapType($.interfaceValue(null, "map[string]*apiv1.IsolationGroupMetrics", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupMetrics"))), "uber.cadence.api.v1.TaskListStatus.IsolationGroupMetricsEntry")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.TaskIDBlock", /* @__PURE__ */ $.pointerType("apiv1.TaskIDBlock")), "uber.cadence.api.v1.TaskIDBlock")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.PollerInfo", /* @__PURE__ */ $.pointerType("apiv1.PollerInfo")), "uber.cadence.api.v1.PollerInfo")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.StickyExecutionAttributes", /* @__PURE__ */ $.pointerType("apiv1.StickyExecutionAttributes")), "uber.cadence.api.v1.StickyExecutionAttributes")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.TaskListPartition", /* @__PURE__ */ $.pointerType("apiv1.TaskListPartition")), "uber.cadence.api.v1.TaskListPartition")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.TaskListPartitionConfig", /* @__PURE__ */ $.pointerType("apiv1.TaskListPartitionConfig")), "uber.cadence.api.v1.TaskListPartitionConfig")
	await proto.RegisterMapType($.interfaceValue(null, "map[int32]*apiv1.TaskListPartition", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.pointerType("apiv1.TaskListPartition"))), "uber.cadence.api.v1.TaskListPartitionConfig.ReadPartitionsEntry")
	await proto.RegisterMapType($.interfaceValue(null, "map[int32]*apiv1.TaskListPartition", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.pointerType("apiv1.TaskListPartition"))), "uber.cadence.api.v1.TaskListPartitionConfig.WritePartitionsEntry")
}

async function __goscriptInit1(): globalThis.Promise<void> {
	proto.RegisterFile("uber/cadence/api/v1/tasklist.proto", fileDescriptor_216fa006947e00a0)
}

export let fileDescriptor_216fa006947e00a0: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 180, 86, 221, 110, 219, 54, 20, 158, 98, 187, 117, 142, 155, 68, 101, 147, 198, 118, 219, 204, 245, 69, 145, 21, 155, 140, 100, 27, 48, 108, 67, 87, 39, 54, 90, 33, 78, 106, 200, 90, 135, 238, 70, 160, 37, 214, 225, 44, 137, 130, 72, 217, 245, 205, 30, 99, 119, 123, 145, 61, 193, 110, 6, 236, 17, 134, 62, 201, 64, 74, 118, 253, 163, 22, 235, 197, 238, 204, 243, 241, 59, 223, 249, 165, 5, 205, 100, 72, 226, 150, 139, 61, 18, 186, 164, 133, 35, 218, 154, 156, 180, 4, 230, 99, 159, 114, 97, 68, 49, 19, 12, 221, 145, 119, 140, 236, 142, 129, 35, 106, 76, 78, 234, 71, 35, 198, 70, 62, 105, 169, 43, 195, 228, 117, 203, 75, 98, 44, 40, 11, 83, 82, 253, 211, 117, 92, 208, 128, 112, 129, 131, 40, 187, 176, 225, 96, 26, 227, 40, 34, 49, 79, 241, 102, 12, 101, 27, 243, 113, 143, 114, 129, 16, 20, 67, 28, 144, 170, 214, 208, 142, 183, 45, 245, 27, 125, 13, 197, 49, 13, 189, 234, 86, 67, 59, 222, 61, 125, 104, 228, 4, 105, 204, 29, 92, 208, 208, 179, 212, 117, 116, 15, 182, 135, 152, 19, 71, 249, 43, 40, 127, 101, 105, 184, 194, 1, 105, 98, 208, 231, 148, 75, 34, 176, 135, 5, 70, 151, 176, 31, 224, 55, 142, 172, 9, 119, 34, 18, 59, 156, 184, 44, 244, 84, 44, 149, 211, 251, 70, 154, 134, 49, 79, 195, 232, 176, 100, 232, 147, 151, 216, 79, 136, 117, 59, 192, 111, 164, 67, 222, 39, 241, 64, 209, 154, 63, 66, 109, 46, 209, 199, 177, 160, 178, 100, 11, 45, 29, 10, 99, 50, 203, 210, 148, 63, 209, 35, 216, 99, 211, 144, 196, 206, 53, 227, 34, 13, 122, 75, 161, 59, 202, 252, 156, 113, 161, 34, 31, 195, 129, 201, 153, 175, 58, 240, 44, 102, 73, 116, 73, 68, 76, 93, 142, 90, 176, 31, 146, 105, 126, 248, 154, 117, 59, 36, 211, 213, 0, 209, 67, 184, 21, 49, 223, 39, 177, 227, 178, 36, 20, 74, 174, 96, 85, 82, 219, 185, 52, 53, 127, 47, 194, 238, 60, 137, 129, 192, 34, 225, 232, 115, 64, 67, 236, 142, 125, 54, 74, 105, 206, 53, 13, 133, 18, 41, 88, 122, 134, 40, 242, 115, 26, 10, 244, 0, 32, 38, 216, 115, 124, 50, 33, 126, 166, 176, 45, 45, 61, 105, 144, 61, 194, 238, 56, 67, 11, 10, 45, 99, 119, 156, 130, 143, 96, 47, 198, 130, 44, 231, 82, 84, 185, 236, 72, 243, 187, 60, 58, 176, 35, 147, 118, 168, 231, 12, 125, 230, 142, 171, 37, 213, 176, 198, 123, 7, 197, 236, 156, 201, 123, 86, 69, 210, 76, 79, 29, 208, 4, 14, 233, 188, 174, 206, 72, 22, 214, 9, 210, 202, 86, 111, 52, 10, 199, 149, 211, 39, 31, 28, 188, 180, 58, 70, 110, 107, 186, 161, 136, 103, 214, 1, 253, 168, 182, 221, 124, 95, 219, 246, 161, 68, 130, 72, 204, 170, 229, 134, 118, 92, 182, 210, 67, 93, 64, 253, 253, 218, 57, 227, 246, 20, 74, 19, 57, 185, 170, 39, 149, 211, 199, 185, 201, 229, 122, 180, 82, 226, 183, 91, 223, 104, 205, 31, 160, 178, 84, 80, 84, 131, 50, 23, 56, 22, 14, 245, 178, 137, 184, 169, 206, 166, 135, 14, 224, 6, 9, 61, 9, 164, 67, 80, 34, 161, 103, 122, 205, 223, 52, 128, 190, 26, 56, 51, 124, 205, 80, 7, 116, 31, 115, 225, 96, 215, 37, 156, 59, 242, 37, 201, 214, 175, 190, 177, 126, 246, 252, 153, 177, 118, 37, 167, 173, 40, 210, 136, 234, 80, 166, 30, 9, 5, 21, 179, 108, 135, 22, 231, 188, 161, 42, 228, 12, 85, 243, 15, 13, 106, 3, 65, 221, 241, 172, 251, 134, 184, 137, 44, 66, 91, 136, 152, 14, 19, 65, 56, 122, 6, 250, 148, 197, 99, 18, 171, 190, 57, 242, 9, 205, 226, 124, 240, 193, 41, 177, 118, 83, 218, 226, 189, 179, 161, 198, 221, 107, 226, 37, 62, 113, 4, 115, 210, 234, 201, 180, 89, 34, 178, 214, 212, 54, 31, 158, 236, 1, 182, 238, 206, 185, 54, 27, 72, 166, 157, 18, 155, 79, 224, 246, 198, 211, 131, 62, 3, 125, 109, 192, 121, 85, 107, 20, 142, 183, 173, 189, 213, 201, 228, 205, 191, 138, 112, 184, 225, 224, 156, 133, 175, 233, 8, 85, 225, 230, 132, 196, 156, 178, 112, 222, 226, 236, 136, 78, 225, 78, 152, 4, 142, 218, 247, 104, 206, 226, 42, 139, 210, 217, 86, 85, 14, 115, 18, 88, 4, 123, 11, 151, 28, 125, 5, 251, 146, 51, 141, 169, 236, 201, 59, 82, 97, 65, 66, 97, 18, 252, 36, 225, 37, 22, 133, 189, 117, 149, 162, 218, 209, 167, 31, 172, 254, 90, 42, 198, 106, 44, 233, 150, 238, 198, 171, 1, 250, 160, 111, 4, 87, 82, 90, 237, 143, 210, 90, 75, 33, 21, 219, 155, 174, 90, 235, 20, 238, 228, 4, 181, 188, 190, 165, 116, 125, 191, 95, 93, 223, 71, 255, 45, 150, 165, 213, 173, 255, 2, 251, 121, 49, 253, 31, 90, 143, 127, 133, 91, 203, 127, 208, 168, 14, 119, 237, 246, 224, 194, 233, 153, 3, 219, 185, 48, 175, 58, 142, 121, 245, 178, 221, 51, 59, 250, 39, 168, 6, 7, 107, 216, 213, 11, 235, 178, 221, 211, 181, 28, 104, 96, 155, 231, 23, 175, 244, 45, 116, 31, 170, 107, 80, 183, 255, 188, 123, 217, 181, 218, 61, 189, 240, 216, 123, 167, 111, 207, 34, 178, 170, 111, 191, 234, 119, 151, 244, 239, 193, 225, 26, 214, 233, 158, 155, 3, 243, 197, 149, 174, 229, 128, 237, 115, 219, 124, 105, 218, 175, 244, 173, 51, 250, 231, 219, 35, 237, 239, 183, 71, 218, 63, 111, 143, 52, 56, 116, 89, 144, 87, 169, 179, 157, 69, 169, 228, 62, 247, 181, 159, 79, 70, 84, 92, 39, 67, 195, 101, 65, 107, 249, 35, 237, 11, 234, 249, 173, 17, 75, 191, 155, 178, 47, 182, 239, 112, 68, 39, 39, 195, 27, 202, 246, 229, 191, 1, 0, 0, 255, 255, 194, 200, 225, 54, 213, 9, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_216fa006947e00a0(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_216fa006947e00a0 = __goscriptValue
}

export function encodeVarintTasklist(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovTasklist(v))
	let base = offset
	for (let __goscriptSliceWindow11 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export function sovTasklist(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozTasklist(x: bigint): number {
	let n: number = 0
	return sovTasklist($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export function skipTasklist(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow12 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowTasklist]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, iNdEx)] as number)
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
						return [0, ErrIntOverflowTasklist]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowTasklist]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthTasklist]
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
					return [0, ErrUnexpectedEndOfGroupTasklist]
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
			return [0, ErrInvalidLengthTasklist]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthTasklist: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthTasklist(__goscriptValue: $.GoError): void {
	ErrInvalidLengthTasklist = __goscriptValue
}

export let ErrIntOverflowTasklist: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowTasklist(__goscriptValue: $.GoError): void {
	ErrIntOverflowTasklist = __goscriptValue
}

export let ErrUnexpectedEndOfGroupTasklist: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupTasklist(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupTasklist = __goscriptValue
}

export { __goscriptInit0 }

export { __goscriptInit1 }
