// Generated file based on service_schedule.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as types from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"

import * as __goscript_common_pb from "./common.pb.gs.ts"

import * as __goscript_schedule_pb from "./schedule.pb.gs.ts"

import * as __goscript_tasklist_pb from "./tasklist.pb.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "./common.pb.gs.ts"
import "./schedule.pb.gs.ts"
import "./tasklist.pb.gs.ts"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.CreateScheduleRequest", "apiv1.CreateScheduleResponse", "apiv1.DescribeScheduleRequest", "apiv1.DescribeScheduleResponse", "apiv1.ListSchedulesRequest", "apiv1.ListSchedulesResponse", "apiv1.DeleteScheduleRequest", "apiv1.DeleteScheduleResponse", "apiv1.PauseScheduleRequest", "apiv1.PauseScheduleResponse", "apiv1.UnpauseScheduleRequest", "apiv1.UnpauseScheduleResponse", "apiv1.BackfillScheduleRequest", "apiv1.BackfillScheduleResponse", "apiv1.UpdateScheduleRequest", "apiv1.UpdateScheduleResponse"])

export class CreateScheduleRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get ScheduleId(): string {
		return this._fields.ScheduleId
	}

	public set ScheduleId(value: string) {
		this._fields.ScheduleId = value
	}

	public get Spec(): __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null {
		return this._fields.Spec
	}

	public set Spec(value: __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null) {
		this._fields.Spec = value
	}

	public get Action(): __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null {
		return this._fields.Action
	}

	public set Action(value: __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null) {
		this._fields.Action = value
	}

	public get Policies(): __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null {
		return this._fields.Policies
	}

	public set Policies(value: __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null) {
		this._fields.Policies = value
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

	// Optional state for the schedule. If set and paused is true, the schedule
	// starts in a paused state instead of requiring a subsequent PauseSchedule call.
	public get State(): __goscript_schedule_pb.ScheduleState | $.VarRef<__goscript_schedule_pb.ScheduleState> | null {
		return this._fields.State
	}

	public set State(value: __goscript_schedule_pb.ScheduleState | $.VarRef<__goscript_schedule_pb.ScheduleState> | null) {
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
		Domain: string
		ScheduleId: string
		Spec: __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null
		Action: __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null
		Policies: __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null
		Memo: __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null
		SearchAttributes: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null
		State: __goscript_schedule_pb.ScheduleState | $.VarRef<__goscript_schedule_pb.ScheduleState> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, ScheduleId?: string, Spec?: __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null, Action?: __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null, Policies?: __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null, Memo?: __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null, SearchAttributes?: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null, State?: __goscript_schedule_pb.ScheduleState | $.VarRef<__goscript_schedule_pb.ScheduleState> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			ScheduleId: init?.ScheduleId ?? ("" as string),
			Spec: init?.Spec ?? (null! as __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null),
			Action: init?.Action ?? (null! as __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null),
			Policies: init?.Policies ?? (null! as __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null),
			Memo: init?.Memo ?? (null! as __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null),
			SearchAttributes: init?.SearchAttributes ?? (null! as __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null),
			State: init?.State ?? (null! as __goscript_schedule_pb.ScheduleState | $.VarRef<__goscript_schedule_pb.ScheduleState> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CreateScheduleRequest {
		return new CreateScheduleRequest(this, true)
	}

	public __goscriptAssign(source: CreateScheduleRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.ScheduleId = values.ScheduleId
		target.Spec = values.Spec
		target.Action = values.Action
		target.Policies = values.Policies
		target.Memo = values.Memo
		target.SearchAttributes = values.SearchAttributes
		target.State = values.State
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_e1236bf37818157b, $.arrayToSlice<number>([0])]
	}

	public GetAction(): __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null {
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<CreateScheduleRequest>(m).Action
		}
		return null
	}

	public GetDomain(): string {
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<CreateScheduleRequest>(m).Domain
		}
		return ""
	}

	public GetMemo(): __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null {
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<CreateScheduleRequest>(m).Memo
		}
		return null
	}

	public GetPolicies(): __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null {
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<CreateScheduleRequest>(m).Policies
		}
		return null
	}

	public GetScheduleId(): string {
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<CreateScheduleRequest>(m).ScheduleId
		}
		return ""
	}

	public GetSearchAttributes(): __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null {
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<CreateScheduleRequest>(m).SearchAttributes
		}
		return null
	}

	public GetSpec(): __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null {
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<CreateScheduleRequest>(m).Spec
		}
		return null
	}

	public GetState(): __goscript_schedule_pb.ScheduleState | $.VarRef<__goscript_schedule_pb.ScheduleState> | null {
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<CreateScheduleRequest>(m).State
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CreateScheduleRequest).Size() : CreateScheduleRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple0: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CreateScheduleRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : CreateScheduleRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CreateScheduleRequest).Size() : CreateScheduleRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CreateScheduleRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : CreateScheduleRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		const m$: CreateScheduleRequest = m == null ? $.pointerTarget<CreateScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CreateScheduleRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as CreateScheduleRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as CreateScheduleRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as CreateScheduleRequest).XXX_unrecognized)
		}
		if ((m$ as CreateScheduleRequest).State != null) {
			{
				let [size, err] = __goscript_schedule_pb.ScheduleState.prototype.MarshalToSizedBuffer.call((m$ as CreateScheduleRequest).State, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x42
		}
		if ((m$ as CreateScheduleRequest).SearchAttributes != null) {
			{
				let [size, err] = __goscript_common_pb.SearchAttributes.prototype.MarshalToSizedBuffer.call((m$ as CreateScheduleRequest).SearchAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x3a
		}
		if ((m$ as CreateScheduleRequest).Memo != null) {
			{
				let [size, err] = __goscript_common_pb.Memo.prototype.MarshalToSizedBuffer.call((m$ as CreateScheduleRequest).Memo, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		if ((m$ as CreateScheduleRequest).Policies != null) {
			{
				let [size, err] = __goscript_schedule_pb.SchedulePolicies.prototype.MarshalToSizedBuffer.call((m$ as CreateScheduleRequest).Policies, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as CreateScheduleRequest).Action != null) {
			{
				let [size, err] = __goscript_schedule_pb.ScheduleAction.prototype.MarshalToSizedBuffer.call((m$ as CreateScheduleRequest).Action, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as CreateScheduleRequest).Spec != null) {
			{
				let [size, err] = __goscript_schedule_pb.ScheduleSpec.prototype.MarshalToSizedBuffer.call((m$ as CreateScheduleRequest).Spec, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.stringLen((m$ as CreateScheduleRequest).ScheduleId) > 0) {
			i = i - ($.stringLen((m$ as CreateScheduleRequest).ScheduleId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as CreateScheduleRequest).ScheduleId)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as CreateScheduleRequest).ScheduleId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as CreateScheduleRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as CreateScheduleRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as CreateScheduleRequest).Domain)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as CreateScheduleRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		$.assignStruct($.pointerValue<CreateScheduleRequest>(m), $.markAsStructValue(new CreateScheduleRequest()))
	}

	public Size(): number {
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		let n: number = 0
		const m$: CreateScheduleRequest = m == null ? $.pointerTarget<CreateScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CreateScheduleRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as CreateScheduleRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		l = $.stringLen((m$ as CreateScheduleRequest).ScheduleId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as CreateScheduleRequest).Spec != null) {
			l = __goscript_schedule_pb.ScheduleSpec.prototype.Size.call((m$ as CreateScheduleRequest).Spec)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as CreateScheduleRequest).Action != null) {
			l = __goscript_schedule_pb.ScheduleAction.prototype.Size.call((m$ as CreateScheduleRequest).Action)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as CreateScheduleRequest).Policies != null) {
			l = __goscript_schedule_pb.SchedulePolicies.prototype.Size.call((m$ as CreateScheduleRequest).Policies)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as CreateScheduleRequest).Memo != null) {
			l = __goscript_common_pb.Memo.prototype.Size.call((m$ as CreateScheduleRequest).Memo)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as CreateScheduleRequest).SearchAttributes != null) {
			l = __goscript_common_pb.SearchAttributes.prototype.Size.call((m$ as CreateScheduleRequest).SearchAttributes)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as CreateScheduleRequest).State != null) {
			l = __goscript_schedule_pb.ScheduleState.prototype.Size.call((m$ as CreateScheduleRequest).State)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as CreateScheduleRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as CreateScheduleRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.CreateScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		const m$: CreateScheduleRequest = m == null ? $.pointerTarget<CreateScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CreateScheduleRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceSchedule
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
				return fmt.Errorf("proto: CreateScheduleRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: CreateScheduleRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as CreateScheduleRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduleId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as CreateScheduleRequest).ScheduleId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Spec", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as CreateScheduleRequest).Spec == null) {
						;(m$ as CreateScheduleRequest).Spec = new __goscript_schedule_pb.ScheduleSpec()
					}
					{
						let err = __goscript_schedule_pb.ScheduleSpec.prototype.Unmarshal.call((m$ as CreateScheduleRequest).Spec, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Action", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as CreateScheduleRequest).Action == null) {
						;(m$ as CreateScheduleRequest).Action = new __goscript_schedule_pb.ScheduleAction()
					}
					{
						let err = __goscript_schedule_pb.ScheduleAction.prototype.Unmarshal.call((m$ as CreateScheduleRequest).Action, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Policies", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as CreateScheduleRequest).Policies == null) {
						;(m$ as CreateScheduleRequest).Policies = new __goscript_schedule_pb.SchedulePolicies()
					}
					{
						let err = __goscript_schedule_pb.SchedulePolicies.prototype.Unmarshal.call((m$ as CreateScheduleRequest).Policies, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Memo", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as CreateScheduleRequest).Memo == null) {
						;(m$ as CreateScheduleRequest).Memo = new __goscript_common_pb.Memo()
					}
					{
						let err = __goscript_common_pb.Memo.prototype.Unmarshal.call((m$ as CreateScheduleRequest).Memo, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field SearchAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as CreateScheduleRequest).SearchAttributes == null) {
						;(m$ as CreateScheduleRequest).SearchAttributes = new __goscript_common_pb.SearchAttributes()
					}
					{
						let err = __goscript_common_pb.SearchAttributes.prototype.Unmarshal.call((m$ as CreateScheduleRequest).SearchAttributes, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field State", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as CreateScheduleRequest).State == null) {
						;(m$ as CreateScheduleRequest).State = new __goscript_schedule_pb.ScheduleState()
					}
					{
						let err = __goscript_schedule_pb.ScheduleState.prototype.Unmarshal.call((m$ as CreateScheduleRequest).State, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as CreateScheduleRequest).XXX_unrecognized = $.appendSlice((m$ as CreateScheduleRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		xxx_messageInfo_CreateScheduleRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.CreateScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_CreateScheduleRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.CreateScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CreateScheduleRequest).MarshalToSizedBuffer(b) : CreateScheduleRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		xxx_messageInfo_CreateScheduleRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.CreateScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleRequest")), src)
	}

	public XXX_Size(): number {
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CreateScheduleRequest).Size() : CreateScheduleRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: CreateScheduleRequest | $.VarRef<CreateScheduleRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CreateScheduleRequest).Unmarshal(b) : CreateScheduleRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.CreateScheduleRequest",
		() => new CreateScheduleRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetAction", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleAction") }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetMemo", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Memo") }], pointerReceiver: true }, { name: "GetPolicies", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.SchedulePolicies") }], pointerReceiver: true }, { name: "GetScheduleId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetSearchAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes") }], pointerReceiver: true }, { name: "GetSpec", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleSpec") }], pointerReceiver: true }, { name: "GetState", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleState") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		CreateScheduleRequest,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "ScheduleId", key: "ScheduleId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=schedule_id,json=scheduleId,proto3\" json:\"schedule_id,omitempty\"" }, { name: "Spec", key: "Spec", type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleSpec"), tag: "protobuf:\"bytes,3,opt,name=spec,proto3\" json:\"spec,omitempty\"" }, { name: "Action", key: "Action", type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleAction"), tag: "protobuf:\"bytes,4,opt,name=action,proto3\" json:\"action,omitempty\"" }, { name: "Policies", key: "Policies", type: /* @__PURE__ */ $.pointerType("apiv1.SchedulePolicies"), tag: "protobuf:\"bytes,5,opt,name=policies,proto3\" json:\"policies,omitempty\"" }, { name: "Memo", key: "Memo", type: /* @__PURE__ */ $.pointerType("apiv1.Memo"), tag: "protobuf:\"bytes,6,opt,name=memo,proto3\" json:\"memo,omitempty\"" }, { name: "SearchAttributes", key: "SearchAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes"), tag: "protobuf:\"bytes,7,opt,name=search_attributes,json=searchAttributes,proto3\" json:\"search_attributes,omitempty\"" }, { name: "State", key: "State", type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleState"), tag: "protobuf:\"bytes,8,opt,name=state,proto3\" json:\"state,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class CreateScheduleResponse {
	public get ScheduleId(): string {
		return this._fields.ScheduleId
	}

	public set ScheduleId(value: string) {
		this._fields.ScheduleId = value
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
		ScheduleId: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{ScheduleId?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ScheduleId: init?.ScheduleId ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CreateScheduleResponse {
		return new CreateScheduleResponse(this, true)
	}

	public __goscriptAssign(source: CreateScheduleResponse): void {
		const target = this._fields
		const values = source._fields
		target.ScheduleId = values.ScheduleId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_e1236bf37818157b, $.arrayToSlice<number>([1])]
	}

	public GetScheduleId(): string {
		const m: CreateScheduleResponse | $.VarRef<CreateScheduleResponse> | null = this;
		if (m != null) {
			return $.pointerValue<CreateScheduleResponse>(m).ScheduleId
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: CreateScheduleResponse | $.VarRef<CreateScheduleResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CreateScheduleResponse).Size() : CreateScheduleResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple1: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CreateScheduleResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : CreateScheduleResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: CreateScheduleResponse | $.VarRef<CreateScheduleResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CreateScheduleResponse).Size() : CreateScheduleResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CreateScheduleResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : CreateScheduleResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: CreateScheduleResponse | $.VarRef<CreateScheduleResponse> | null = this;
		const m$: CreateScheduleResponse = m == null ? $.pointerTarget<CreateScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CreateScheduleResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as CreateScheduleResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as CreateScheduleResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as CreateScheduleResponse).XXX_unrecognized)
		}
		if ($.stringLen((m$ as CreateScheduleResponse).ScheduleId) > 0) {
			i = i - ($.stringLen((m$ as CreateScheduleResponse).ScheduleId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as CreateScheduleResponse).ScheduleId)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as CreateScheduleResponse).ScheduleId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: CreateScheduleResponse | $.VarRef<CreateScheduleResponse> | null = this;
		$.assignStruct($.pointerValue<CreateScheduleResponse>(m), $.markAsStructValue(new CreateScheduleResponse()))
	}

	public Size(): number {
		const m: CreateScheduleResponse | $.VarRef<CreateScheduleResponse> | null = this;
		let n: number = 0
		const m$: CreateScheduleResponse = m == null ? $.pointerTarget<CreateScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CreateScheduleResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as CreateScheduleResponse).ScheduleId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as CreateScheduleResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as CreateScheduleResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: CreateScheduleResponse | $.VarRef<CreateScheduleResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.CreateScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: CreateScheduleResponse | $.VarRef<CreateScheduleResponse> | null = this;
		const m$: CreateScheduleResponse = m == null ? $.pointerTarget<CreateScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CreateScheduleResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceSchedule
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
				return fmt.Errorf("proto: CreateScheduleResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: CreateScheduleResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduleId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as CreateScheduleResponse).ScheduleId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as CreateScheduleResponse).XXX_unrecognized = $.appendSlice((m$ as CreateScheduleResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: CreateScheduleResponse | $.VarRef<CreateScheduleResponse> | null = this;
		xxx_messageInfo_CreateScheduleResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.CreateScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: CreateScheduleResponse | $.VarRef<CreateScheduleResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_CreateScheduleResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.CreateScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CreateScheduleResponse).MarshalToSizedBuffer(b) : CreateScheduleResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: CreateScheduleResponse | $.VarRef<CreateScheduleResponse> | null = this;
		xxx_messageInfo_CreateScheduleResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.CreateScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleResponse")), src)
	}

	public XXX_Size(): number {
		const m: CreateScheduleResponse | $.VarRef<CreateScheduleResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CreateScheduleResponse).Size() : CreateScheduleResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: CreateScheduleResponse | $.VarRef<CreateScheduleResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CreateScheduleResponse).Unmarshal(b) : CreateScheduleResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.CreateScheduleResponse",
		() => new CreateScheduleResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetScheduleId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		CreateScheduleResponse,
		() => [{ name: "ScheduleId", key: "ScheduleId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=schedule_id,json=scheduleId,proto3\" json:\"schedule_id,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class DescribeScheduleRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get ScheduleId(): string {
		return this._fields.ScheduleId
	}

	public set ScheduleId(value: string) {
		this._fields.ScheduleId = value
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
		ScheduleId: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, ScheduleId?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			ScheduleId: init?.ScheduleId ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DescribeScheduleRequest {
		return new DescribeScheduleRequest(this, true)
	}

	public __goscriptAssign(source: DescribeScheduleRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.ScheduleId = values.ScheduleId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_e1236bf37818157b, $.arrayToSlice<number>([2])]
	}

	public GetDomain(): string {
		const m: DescribeScheduleRequest | $.VarRef<DescribeScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeScheduleRequest>(m).Domain
		}
		return ""
	}

	public GetScheduleId(): string {
		const m: DescribeScheduleRequest | $.VarRef<DescribeScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeScheduleRequest>(m).ScheduleId
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DescribeScheduleRequest | $.VarRef<DescribeScheduleRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeScheduleRequest).Size() : DescribeScheduleRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple2: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeScheduleRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeScheduleRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeScheduleRequest | $.VarRef<DescribeScheduleRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeScheduleRequest).Size() : DescribeScheduleRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeScheduleRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeScheduleRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeScheduleRequest | $.VarRef<DescribeScheduleRequest> | null = this;
		const m$: DescribeScheduleRequest = m == null ? $.pointerTarget<DescribeScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeScheduleRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DescribeScheduleRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DescribeScheduleRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DescribeScheduleRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as DescribeScheduleRequest).ScheduleId) > 0) {
			i = i - ($.stringLen((m$ as DescribeScheduleRequest).ScheduleId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DescribeScheduleRequest).ScheduleId)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as DescribeScheduleRequest).ScheduleId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as DescribeScheduleRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as DescribeScheduleRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DescribeScheduleRequest).Domain)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as DescribeScheduleRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DescribeScheduleRequest | $.VarRef<DescribeScheduleRequest> | null = this;
		$.assignStruct($.pointerValue<DescribeScheduleRequest>(m), $.markAsStructValue(new DescribeScheduleRequest()))
	}

	public Size(): number {
		const m: DescribeScheduleRequest | $.VarRef<DescribeScheduleRequest> | null = this;
		let n: number = 0
		const m$: DescribeScheduleRequest = m == null ? $.pointerTarget<DescribeScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeScheduleRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as DescribeScheduleRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		l = $.stringLen((m$ as DescribeScheduleRequest).ScheduleId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as DescribeScheduleRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DescribeScheduleRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DescribeScheduleRequest | $.VarRef<DescribeScheduleRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DescribeScheduleRequest | $.VarRef<DescribeScheduleRequest> | null = this;
		const m$: DescribeScheduleRequest = m == null ? $.pointerTarget<DescribeScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeScheduleRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceSchedule
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
				return fmt.Errorf("proto: DescribeScheduleRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DescribeScheduleRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DescribeScheduleRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduleId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DescribeScheduleRequest).ScheduleId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DescribeScheduleRequest).XXX_unrecognized = $.appendSlice((m$ as DescribeScheduleRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: DescribeScheduleRequest | $.VarRef<DescribeScheduleRequest> | null = this;
		xxx_messageInfo_DescribeScheduleRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: DescribeScheduleRequest | $.VarRef<DescribeScheduleRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DescribeScheduleRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeScheduleRequest).MarshalToSizedBuffer(b) : DescribeScheduleRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: DescribeScheduleRequest | $.VarRef<DescribeScheduleRequest> | null = this;
		xxx_messageInfo_DescribeScheduleRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleRequest")), src)
	}

	public XXX_Size(): number {
		const m: DescribeScheduleRequest | $.VarRef<DescribeScheduleRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeScheduleRequest).Size() : DescribeScheduleRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DescribeScheduleRequest | $.VarRef<DescribeScheduleRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeScheduleRequest).Unmarshal(b) : DescribeScheduleRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DescribeScheduleRequest",
		() => new DescribeScheduleRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetScheduleId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		DescribeScheduleRequest,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "ScheduleId", key: "ScheduleId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=schedule_id,json=scheduleId,proto3\" json:\"schedule_id,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class DescribeScheduleResponse {
	public get Spec(): __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null {
		return this._fields.Spec
	}

	public set Spec(value: __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null) {
		this._fields.Spec = value
	}

	public get Action(): __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null {
		return this._fields.Action
	}

	public set Action(value: __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null) {
		this._fields.Action = value
	}

	public get Policies(): __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null {
		return this._fields.Policies
	}

	public set Policies(value: __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null) {
		this._fields.Policies = value
	}

	public get State(): __goscript_schedule_pb.ScheduleState | $.VarRef<__goscript_schedule_pb.ScheduleState> | null {
		return this._fields.State
	}

	public set State(value: __goscript_schedule_pb.ScheduleState | $.VarRef<__goscript_schedule_pb.ScheduleState> | null) {
		this._fields.State = value
	}

	public get Info(): __goscript_schedule_pb.ScheduleInfo | $.VarRef<__goscript_schedule_pb.ScheduleInfo> | null {
		return this._fields.Info
	}

	public set Info(value: __goscript_schedule_pb.ScheduleInfo | $.VarRef<__goscript_schedule_pb.ScheduleInfo> | null) {
		this._fields.Info = value
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
		Spec: __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null
		Action: __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null
		Policies: __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null
		State: __goscript_schedule_pb.ScheduleState | $.VarRef<__goscript_schedule_pb.ScheduleState> | null
		Info: __goscript_schedule_pb.ScheduleInfo | $.VarRef<__goscript_schedule_pb.ScheduleInfo> | null
		Memo: __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null
		SearchAttributes: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Spec?: __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null, Action?: __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null, Policies?: __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null, State?: __goscript_schedule_pb.ScheduleState | $.VarRef<__goscript_schedule_pb.ScheduleState> | null, Info?: __goscript_schedule_pb.ScheduleInfo | $.VarRef<__goscript_schedule_pb.ScheduleInfo> | null, Memo?: __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null, SearchAttributes?: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Spec: init?.Spec ?? (null! as __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null),
			Action: init?.Action ?? (null! as __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null),
			Policies: init?.Policies ?? (null! as __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null),
			State: init?.State ?? (null! as __goscript_schedule_pb.ScheduleState | $.VarRef<__goscript_schedule_pb.ScheduleState> | null),
			Info: init?.Info ?? (null! as __goscript_schedule_pb.ScheduleInfo | $.VarRef<__goscript_schedule_pb.ScheduleInfo> | null),
			Memo: init?.Memo ?? (null! as __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null),
			SearchAttributes: init?.SearchAttributes ?? (null! as __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DescribeScheduleResponse {
		return new DescribeScheduleResponse(this, true)
	}

	public __goscriptAssign(source: DescribeScheduleResponse): void {
		const target = this._fields
		const values = source._fields
		target.Spec = values.Spec
		target.Action = values.Action
		target.Policies = values.Policies
		target.State = values.State
		target.Info = values.Info
		target.Memo = values.Memo
		target.SearchAttributes = values.SearchAttributes
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_e1236bf37818157b, $.arrayToSlice<number>([3])]
	}

	public GetAction(): __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null {
		const m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeScheduleResponse>(m).Action
		}
		return null
	}

	public GetInfo(): __goscript_schedule_pb.ScheduleInfo | $.VarRef<__goscript_schedule_pb.ScheduleInfo> | null {
		const m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeScheduleResponse>(m).Info
		}
		return null
	}

	public GetMemo(): __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null {
		const m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeScheduleResponse>(m).Memo
		}
		return null
	}

	public GetPolicies(): __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null {
		const m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeScheduleResponse>(m).Policies
		}
		return null
	}

	public GetSearchAttributes(): __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null {
		const m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeScheduleResponse>(m).SearchAttributes
		}
		return null
	}

	public GetSpec(): __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null {
		const m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeScheduleResponse>(m).Spec
		}
		return null
	}

	public GetState(): __goscript_schedule_pb.ScheduleState | $.VarRef<__goscript_schedule_pb.ScheduleState> | null {
		const m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeScheduleResponse>(m).State
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeScheduleResponse).Size() : DescribeScheduleResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple3: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeScheduleResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeScheduleResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeScheduleResponse).Size() : DescribeScheduleResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeScheduleResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeScheduleResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		const m$: DescribeScheduleResponse = m == null ? $.pointerTarget<DescribeScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeScheduleResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DescribeScheduleResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DescribeScheduleResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DescribeScheduleResponse).XXX_unrecognized)
		}
		if ((m$ as DescribeScheduleResponse).SearchAttributes != null) {
			{
				let [size, err] = __goscript_common_pb.SearchAttributes.prototype.MarshalToSizedBuffer.call((m$ as DescribeScheduleResponse).SearchAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x3a
		}
		if ((m$ as DescribeScheduleResponse).Memo != null) {
			{
				let [size, err] = __goscript_common_pb.Memo.prototype.MarshalToSizedBuffer.call((m$ as DescribeScheduleResponse).Memo, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		if ((m$ as DescribeScheduleResponse).Info != null) {
			{
				let [size, err] = __goscript_schedule_pb.ScheduleInfo.prototype.MarshalToSizedBuffer.call((m$ as DescribeScheduleResponse).Info, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as DescribeScheduleResponse).State != null) {
			{
				let [size, err] = __goscript_schedule_pb.ScheduleState.prototype.MarshalToSizedBuffer.call((m$ as DescribeScheduleResponse).State, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as DescribeScheduleResponse).Policies != null) {
			{
				let [size, err] = __goscript_schedule_pb.SchedulePolicies.prototype.MarshalToSizedBuffer.call((m$ as DescribeScheduleResponse).Policies, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as DescribeScheduleResponse).Action != null) {
			{
				let [size, err] = __goscript_schedule_pb.ScheduleAction.prototype.MarshalToSizedBuffer.call((m$ as DescribeScheduleResponse).Action, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as DescribeScheduleResponse).Spec != null) {
			{
				let [size, err] = __goscript_schedule_pb.ScheduleSpec.prototype.MarshalToSizedBuffer.call((m$ as DescribeScheduleResponse).Spec, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		$.assignStruct($.pointerValue<DescribeScheduleResponse>(m), $.markAsStructValue(new DescribeScheduleResponse()))
	}

	public Size(): number {
		const m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		let n: number = 0
		const m$: DescribeScheduleResponse = m == null ? $.pointerTarget<DescribeScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeScheduleResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as DescribeScheduleResponse).Spec != null) {
			l = __goscript_schedule_pb.ScheduleSpec.prototype.Size.call((m$ as DescribeScheduleResponse).Spec)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as DescribeScheduleResponse).Action != null) {
			l = __goscript_schedule_pb.ScheduleAction.prototype.Size.call((m$ as DescribeScheduleResponse).Action)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as DescribeScheduleResponse).Policies != null) {
			l = __goscript_schedule_pb.SchedulePolicies.prototype.Size.call((m$ as DescribeScheduleResponse).Policies)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as DescribeScheduleResponse).State != null) {
			l = __goscript_schedule_pb.ScheduleState.prototype.Size.call((m$ as DescribeScheduleResponse).State)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as DescribeScheduleResponse).Info != null) {
			l = __goscript_schedule_pb.ScheduleInfo.prototype.Size.call((m$ as DescribeScheduleResponse).Info)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as DescribeScheduleResponse).Memo != null) {
			l = __goscript_common_pb.Memo.prototype.Size.call((m$ as DescribeScheduleResponse).Memo)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as DescribeScheduleResponse).SearchAttributes != null) {
			l = __goscript_common_pb.SearchAttributes.prototype.Size.call((m$ as DescribeScheduleResponse).SearchAttributes)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as DescribeScheduleResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DescribeScheduleResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		const m$: DescribeScheduleResponse = m == null ? $.pointerTarget<DescribeScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeScheduleResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceSchedule
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
				return fmt.Errorf("proto: DescribeScheduleResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DescribeScheduleResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Spec", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DescribeScheduleResponse).Spec == null) {
						;(m$ as DescribeScheduleResponse).Spec = new __goscript_schedule_pb.ScheduleSpec()
					}
					{
						let err = __goscript_schedule_pb.ScheduleSpec.prototype.Unmarshal.call((m$ as DescribeScheduleResponse).Spec, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Action", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DescribeScheduleResponse).Action == null) {
						;(m$ as DescribeScheduleResponse).Action = new __goscript_schedule_pb.ScheduleAction()
					}
					{
						let err = __goscript_schedule_pb.ScheduleAction.prototype.Unmarshal.call((m$ as DescribeScheduleResponse).Action, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Policies", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DescribeScheduleResponse).Policies == null) {
						;(m$ as DescribeScheduleResponse).Policies = new __goscript_schedule_pb.SchedulePolicies()
					}
					{
						let err = __goscript_schedule_pb.SchedulePolicies.prototype.Unmarshal.call((m$ as DescribeScheduleResponse).Policies, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field State", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DescribeScheduleResponse).State == null) {
						;(m$ as DescribeScheduleResponse).State = new __goscript_schedule_pb.ScheduleState()
					}
					{
						let err = __goscript_schedule_pb.ScheduleState.prototype.Unmarshal.call((m$ as DescribeScheduleResponse).State, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Info", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DescribeScheduleResponse).Info == null) {
						;(m$ as DescribeScheduleResponse).Info = new __goscript_schedule_pb.ScheduleInfo()
					}
					{
						let err = __goscript_schedule_pb.ScheduleInfo.prototype.Unmarshal.call((m$ as DescribeScheduleResponse).Info, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Memo", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DescribeScheduleResponse).Memo == null) {
						;(m$ as DescribeScheduleResponse).Memo = new __goscript_common_pb.Memo()
					}
					{
						let err = __goscript_common_pb.Memo.prototype.Unmarshal.call((m$ as DescribeScheduleResponse).Memo, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field SearchAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DescribeScheduleResponse).SearchAttributes == null) {
						;(m$ as DescribeScheduleResponse).SearchAttributes = new __goscript_common_pb.SearchAttributes()
					}
					{
						let err = __goscript_common_pb.SearchAttributes.prototype.Unmarshal.call((m$ as DescribeScheduleResponse).SearchAttributes, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DescribeScheduleResponse).XXX_unrecognized = $.appendSlice((m$ as DescribeScheduleResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		xxx_messageInfo_DescribeScheduleResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DescribeScheduleResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeScheduleResponse).MarshalToSizedBuffer(b) : DescribeScheduleResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		xxx_messageInfo_DescribeScheduleResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleResponse")), src)
	}

	public XXX_Size(): number {
		const m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeScheduleResponse).Size() : DescribeScheduleResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DescribeScheduleResponse | $.VarRef<DescribeScheduleResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeScheduleResponse).Unmarshal(b) : DescribeScheduleResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DescribeScheduleResponse",
		() => new DescribeScheduleResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetAction", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleAction") }], pointerReceiver: true }, { name: "GetInfo", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleInfo") }], pointerReceiver: true }, { name: "GetMemo", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Memo") }], pointerReceiver: true }, { name: "GetPolicies", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.SchedulePolicies") }], pointerReceiver: true }, { name: "GetSearchAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes") }], pointerReceiver: true }, { name: "GetSpec", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleSpec") }], pointerReceiver: true }, { name: "GetState", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleState") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		DescribeScheduleResponse,
		() => [{ name: "Spec", key: "Spec", type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleSpec"), tag: "protobuf:\"bytes,1,opt,name=spec,proto3\" json:\"spec,omitempty\"" }, { name: "Action", key: "Action", type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleAction"), tag: "protobuf:\"bytes,2,opt,name=action,proto3\" json:\"action,omitempty\"" }, { name: "Policies", key: "Policies", type: /* @__PURE__ */ $.pointerType("apiv1.SchedulePolicies"), tag: "protobuf:\"bytes,3,opt,name=policies,proto3\" json:\"policies,omitempty\"" }, { name: "State", key: "State", type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleState"), tag: "protobuf:\"bytes,4,opt,name=state,proto3\" json:\"state,omitempty\"" }, { name: "Info", key: "Info", type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleInfo"), tag: "protobuf:\"bytes,5,opt,name=info,proto3\" json:\"info,omitempty\"" }, { name: "Memo", key: "Memo", type: /* @__PURE__ */ $.pointerType("apiv1.Memo"), tag: "protobuf:\"bytes,6,opt,name=memo,proto3\" json:\"memo,omitempty\"" }, { name: "SearchAttributes", key: "SearchAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes"), tag: "protobuf:\"bytes,7,opt,name=search_attributes,json=searchAttributes,proto3\" json:\"search_attributes,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ListSchedulesRequest {
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
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, PageSize?: number, NextPageToken?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			PageSize: init?.PageSize ?? (0 as number),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListSchedulesRequest {
		return new ListSchedulesRequest(this, true)
	}

	public __goscriptAssign(source: ListSchedulesRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.PageSize = values.PageSize
		target.NextPageToken = values.NextPageToken
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_e1236bf37818157b, $.arrayToSlice<number>([4])]
	}

	public GetDomain(): string {
		const m: ListSchedulesRequest | $.VarRef<ListSchedulesRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListSchedulesRequest>(m).Domain
		}
		return ""
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: ListSchedulesRequest | $.VarRef<ListSchedulesRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListSchedulesRequest>(m).NextPageToken
		}
		return null
	}

	public GetPageSize(): number {
		const m: ListSchedulesRequest | $.VarRef<ListSchedulesRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListSchedulesRequest>(m).PageSize
		}
		return 0
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListSchedulesRequest | $.VarRef<ListSchedulesRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListSchedulesRequest).Size() : ListSchedulesRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListSchedulesRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListSchedulesRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListSchedulesRequest | $.VarRef<ListSchedulesRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListSchedulesRequest).Size() : ListSchedulesRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListSchedulesRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListSchedulesRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListSchedulesRequest | $.VarRef<ListSchedulesRequest> | null = this;
		const m$: ListSchedulesRequest = m == null ? $.pointerTarget<ListSchedulesRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListSchedulesRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListSchedulesRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListSchedulesRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListSchedulesRequest).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as ListSchedulesRequest).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as ListSchedulesRequest).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListSchedulesRequest).NextPageToken)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.sliceLen((m$ as ListSchedulesRequest).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as ListSchedulesRequest).PageSize != 0) {
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64((m$ as ListSchedulesRequest).PageSize))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ($.stringLen((m$ as ListSchedulesRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as ListSchedulesRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListSchedulesRequest).Domain)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as ListSchedulesRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ListSchedulesRequest | $.VarRef<ListSchedulesRequest> | null = this;
		$.assignStruct($.pointerValue<ListSchedulesRequest>(m), $.markAsStructValue(new ListSchedulesRequest()))
	}

	public Size(): number {
		const m: ListSchedulesRequest | $.VarRef<ListSchedulesRequest> | null = this;
		let n: number = 0
		const m$: ListSchedulesRequest = m == null ? $.pointerTarget<ListSchedulesRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListSchedulesRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ListSchedulesRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as ListSchedulesRequest).PageSize != 0) {
			n = n + (1 + sovServiceSchedule($.uint64((m$ as ListSchedulesRequest).PageSize)))
		}
		l = $.sliceLen((m$ as ListSchedulesRequest).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as ListSchedulesRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListSchedulesRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ListSchedulesRequest | $.VarRef<ListSchedulesRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ListSchedulesRequest", /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListSchedulesRequest | $.VarRef<ListSchedulesRequest> | null = this;
		const m$: ListSchedulesRequest = m == null ? $.pointerTarget<ListSchedulesRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListSchedulesRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow4 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceSchedule
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
				return fmt.Errorf("proto: ListSchedulesRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListSchedulesRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListSchedulesRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field PageSize", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ListSchedulesRequest).PageSize = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++;
						;(m$ as ListSchedulesRequest).PageSize = (m$ as ListSchedulesRequest).PageSize | ($.int($.int(b & 0x7F, 32) << shift, 32))
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
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListSchedulesRequest).NextPageToken = $.appendSlice($.goSlice((m$ as ListSchedulesRequest).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as ListSchedulesRequest).NextPageToken == null) {
						;(m$ as ListSchedulesRequest).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListSchedulesRequest).XXX_unrecognized = $.appendSlice((m$ as ListSchedulesRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ListSchedulesRequest | $.VarRef<ListSchedulesRequest> | null = this;
		xxx_messageInfo_ListSchedulesRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ListSchedulesRequest", /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ListSchedulesRequest | $.VarRef<ListSchedulesRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListSchedulesRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ListSchedulesRequest", /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListSchedulesRequest).MarshalToSizedBuffer(b) : ListSchedulesRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ListSchedulesRequest | $.VarRef<ListSchedulesRequest> | null = this;
		xxx_messageInfo_ListSchedulesRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ListSchedulesRequest", /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesRequest")), src)
	}

	public XXX_Size(): number {
		const m: ListSchedulesRequest | $.VarRef<ListSchedulesRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListSchedulesRequest).Size() : ListSchedulesRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListSchedulesRequest | $.VarRef<ListSchedulesRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListSchedulesRequest).Unmarshal(b) : ListSchedulesRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListSchedulesRequest",
		() => new ListSchedulesRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetNextPageToken", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "GetPageSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ListSchedulesRequest,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "PageSize", key: "PageSize", type: /* @__PURE__ */ $.basicType("int32"), tag: "protobuf:\"varint,2,opt,name=page_size,json=pageSize,proto3\" json:\"page_size,omitempty\"" }, { name: "NextPageToken", key: "NextPageToken", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,3,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ListSchedulesResponse {
	public get Schedules(): $.Slice<__goscript_schedule_pb.ScheduleListEntry | $.VarRef<__goscript_schedule_pb.ScheduleListEntry> | null> {
		return this._fields.Schedules
	}

	public set Schedules(value: $.Slice<__goscript_schedule_pb.ScheduleListEntry | $.VarRef<__goscript_schedule_pb.ScheduleListEntry> | null>) {
		this._fields.Schedules = value
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
		Schedules: $.Slice<__goscript_schedule_pb.ScheduleListEntry | $.VarRef<__goscript_schedule_pb.ScheduleListEntry> | null>
		NextPageToken: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Schedules?: $.Slice<__goscript_schedule_pb.ScheduleListEntry | $.VarRef<__goscript_schedule_pb.ScheduleListEntry> | null>, NextPageToken?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Schedules: init?.Schedules ?? (null! as $.Slice<__goscript_schedule_pb.ScheduleListEntry | $.VarRef<__goscript_schedule_pb.ScheduleListEntry> | null>),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListSchedulesResponse {
		return new ListSchedulesResponse(this, true)
	}

	public __goscriptAssign(source: ListSchedulesResponse): void {
		const target = this._fields
		const values = source._fields
		target.Schedules = values.Schedules
		target.NextPageToken = values.NextPageToken
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_e1236bf37818157b, $.arrayToSlice<number>([5])]
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: ListSchedulesResponse | $.VarRef<ListSchedulesResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ListSchedulesResponse>(m).NextPageToken
		}
		return null
	}

	public GetSchedules(): $.Slice<__goscript_schedule_pb.ScheduleListEntry | $.VarRef<__goscript_schedule_pb.ScheduleListEntry> | null> {
		const m: ListSchedulesResponse | $.VarRef<ListSchedulesResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ListSchedulesResponse>(m).Schedules
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListSchedulesResponse | $.VarRef<ListSchedulesResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListSchedulesResponse).Size() : ListSchedulesResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple5: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListSchedulesResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListSchedulesResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListSchedulesResponse | $.VarRef<ListSchedulesResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListSchedulesResponse).Size() : ListSchedulesResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListSchedulesResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListSchedulesResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListSchedulesResponse | $.VarRef<ListSchedulesResponse> | null = this;
		const m$: ListSchedulesResponse = m == null ? $.pointerTarget<ListSchedulesResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListSchedulesResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListSchedulesResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListSchedulesResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListSchedulesResponse).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as ListSchedulesResponse).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as ListSchedulesResponse).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListSchedulesResponse).NextPageToken)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.sliceLen((m$ as ListSchedulesResponse).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.sliceLen((m$ as ListSchedulesResponse).Schedules) > 0) {
			for (let __goscriptSliceWindow5 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as ListSchedulesResponse).Schedules) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_schedule_pb.ScheduleListEntry.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as ListSchedulesResponse).Schedules!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ListSchedulesResponse | $.VarRef<ListSchedulesResponse> | null = this;
		$.assignStruct($.pointerValue<ListSchedulesResponse>(m), $.markAsStructValue(new ListSchedulesResponse()))
	}

	public Size(): number {
		const m: ListSchedulesResponse | $.VarRef<ListSchedulesResponse> | null = this;
		let n: number = 0
		const m$: ListSchedulesResponse = m == null ? $.pointerTarget<ListSchedulesResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListSchedulesResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as ListSchedulesResponse).Schedules) > 0) {
			for (let __goscriptRangeTarget0 = (m$ as ListSchedulesResponse).Schedules, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_schedule_pb.ScheduleListEntry | $.VarRef<__goscript_schedule_pb.ScheduleListEntry> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_schedule_pb.ScheduleListEntry).Size() : __goscript_schedule_pb.ScheduleListEntry.prototype.Size.call(e))
				n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
			}
		}
		l = $.sliceLen((m$ as ListSchedulesResponse).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as ListSchedulesResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListSchedulesResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ListSchedulesResponse | $.VarRef<ListSchedulesResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ListSchedulesResponse", /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListSchedulesResponse | $.VarRef<ListSchedulesResponse> | null = this;
		const m$: ListSchedulesResponse = m == null ? $.pointerTarget<ListSchedulesResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListSchedulesResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow6 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceSchedule
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
				return fmt.Errorf("proto: ListSchedulesResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListSchedulesResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Schedules", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListSchedulesResponse).Schedules = $.appendOne((m$ as ListSchedulesResponse).Schedules, new __goscript_schedule_pb.ScheduleListEntry(), $.appendZeros.nil)
					{
						let err = __goscript_schedule_pb.ScheduleListEntry.prototype.Unmarshal.call($.arrayIndex((m$ as ListSchedulesResponse).Schedules!, $.sliceLen((m$ as ListSchedulesResponse).Schedules) - 1), $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListSchedulesResponse).NextPageToken = $.appendSlice($.goSlice((m$ as ListSchedulesResponse).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as ListSchedulesResponse).NextPageToken == null) {
						;(m$ as ListSchedulesResponse).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListSchedulesResponse).XXX_unrecognized = $.appendSlice((m$ as ListSchedulesResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ListSchedulesResponse | $.VarRef<ListSchedulesResponse> | null = this;
		xxx_messageInfo_ListSchedulesResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ListSchedulesResponse", /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ListSchedulesResponse | $.VarRef<ListSchedulesResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListSchedulesResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ListSchedulesResponse", /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListSchedulesResponse).MarshalToSizedBuffer(b) : ListSchedulesResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ListSchedulesResponse | $.VarRef<ListSchedulesResponse> | null = this;
		xxx_messageInfo_ListSchedulesResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ListSchedulesResponse", /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesResponse")), src)
	}

	public XXX_Size(): number {
		const m: ListSchedulesResponse | $.VarRef<ListSchedulesResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListSchedulesResponse).Size() : ListSchedulesResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListSchedulesResponse | $.VarRef<ListSchedulesResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListSchedulesResponse).Unmarshal(b) : ListSchedulesResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListSchedulesResponse",
		() => new ListSchedulesResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetNextPageToken", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "GetSchedules", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.ScheduleListEntry")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ListSchedulesResponse,
		() => [{ name: "Schedules", key: "Schedules", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.ScheduleListEntry")), tag: "protobuf:\"bytes,1,rep,name=schedules,proto3\" json:\"schedules,omitempty\"" }, { name: "NextPageToken", key: "NextPageToken", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class DeleteScheduleRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get ScheduleId(): string {
		return this._fields.ScheduleId
	}

	public set ScheduleId(value: string) {
		this._fields.ScheduleId = value
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
		ScheduleId: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, ScheduleId?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			ScheduleId: init?.ScheduleId ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DeleteScheduleRequest {
		return new DeleteScheduleRequest(this, true)
	}

	public __goscriptAssign(source: DeleteScheduleRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.ScheduleId = values.ScheduleId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_e1236bf37818157b, $.arrayToSlice<number>([6])]
	}

	public GetDomain(): string {
		const m: DeleteScheduleRequest | $.VarRef<DeleteScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DeleteScheduleRequest>(m).Domain
		}
		return ""
	}

	public GetScheduleId(): string {
		const m: DeleteScheduleRequest | $.VarRef<DeleteScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DeleteScheduleRequest>(m).ScheduleId
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DeleteScheduleRequest | $.VarRef<DeleteScheduleRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteScheduleRequest).Size() : DeleteScheduleRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple6: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteScheduleRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DeleteScheduleRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DeleteScheduleRequest | $.VarRef<DeleteScheduleRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteScheduleRequest).Size() : DeleteScheduleRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteScheduleRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DeleteScheduleRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DeleteScheduleRequest | $.VarRef<DeleteScheduleRequest> | null = this;
		const m$: DeleteScheduleRequest = m == null ? $.pointerTarget<DeleteScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeleteScheduleRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DeleteScheduleRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DeleteScheduleRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DeleteScheduleRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as DeleteScheduleRequest).ScheduleId) > 0) {
			i = i - ($.stringLen((m$ as DeleteScheduleRequest).ScheduleId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DeleteScheduleRequest).ScheduleId)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as DeleteScheduleRequest).ScheduleId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as DeleteScheduleRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as DeleteScheduleRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DeleteScheduleRequest).Domain)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as DeleteScheduleRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DeleteScheduleRequest | $.VarRef<DeleteScheduleRequest> | null = this;
		$.assignStruct($.pointerValue<DeleteScheduleRequest>(m), $.markAsStructValue(new DeleteScheduleRequest()))
	}

	public Size(): number {
		const m: DeleteScheduleRequest | $.VarRef<DeleteScheduleRequest> | null = this;
		let n: number = 0
		const m$: DeleteScheduleRequest = m == null ? $.pointerTarget<DeleteScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeleteScheduleRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as DeleteScheduleRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		l = $.stringLen((m$ as DeleteScheduleRequest).ScheduleId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as DeleteScheduleRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DeleteScheduleRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DeleteScheduleRequest | $.VarRef<DeleteScheduleRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DeleteScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DeleteScheduleRequest | $.VarRef<DeleteScheduleRequest> | null = this;
		const m$: DeleteScheduleRequest = m == null ? $.pointerTarget<DeleteScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeleteScheduleRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow7 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceSchedule
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
				return fmt.Errorf("proto: DeleteScheduleRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DeleteScheduleRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DeleteScheduleRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduleId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DeleteScheduleRequest).ScheduleId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DeleteScheduleRequest).XXX_unrecognized = $.appendSlice((m$ as DeleteScheduleRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: DeleteScheduleRequest | $.VarRef<DeleteScheduleRequest> | null = this;
		xxx_messageInfo_DeleteScheduleRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DeleteScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: DeleteScheduleRequest | $.VarRef<DeleteScheduleRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DeleteScheduleRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DeleteScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteScheduleRequest).MarshalToSizedBuffer(b) : DeleteScheduleRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: DeleteScheduleRequest | $.VarRef<DeleteScheduleRequest> | null = this;
		xxx_messageInfo_DeleteScheduleRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DeleteScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleRequest")), src)
	}

	public XXX_Size(): number {
		const m: DeleteScheduleRequest | $.VarRef<DeleteScheduleRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteScheduleRequest).Size() : DeleteScheduleRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DeleteScheduleRequest | $.VarRef<DeleteScheduleRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteScheduleRequest).Unmarshal(b) : DeleteScheduleRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DeleteScheduleRequest",
		() => new DeleteScheduleRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetScheduleId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		DeleteScheduleRequest,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "ScheduleId", key: "ScheduleId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=schedule_id,json=scheduleId,proto3\" json:\"schedule_id,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class DeleteScheduleResponse {
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

	public clone(): DeleteScheduleResponse {
		return new DeleteScheduleResponse(this, true)
	}

	public __goscriptAssign(source: DeleteScheduleResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_e1236bf37818157b, $.arrayToSlice<number>([7])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DeleteScheduleResponse | $.VarRef<DeleteScheduleResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteScheduleResponse).Size() : DeleteScheduleResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple7: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteScheduleResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DeleteScheduleResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DeleteScheduleResponse | $.VarRef<DeleteScheduleResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteScheduleResponse).Size() : DeleteScheduleResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteScheduleResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DeleteScheduleResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DeleteScheduleResponse | $.VarRef<DeleteScheduleResponse> | null = this;
		const m$: DeleteScheduleResponse = m == null ? $.pointerTarget<DeleteScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeleteScheduleResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DeleteScheduleResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DeleteScheduleResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DeleteScheduleResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DeleteScheduleResponse | $.VarRef<DeleteScheduleResponse> | null = this;
		$.assignStruct($.pointerValue<DeleteScheduleResponse>(m), new DeleteScheduleResponse(undefined, true))
	}

	public Size(): number {
		const m: DeleteScheduleResponse | $.VarRef<DeleteScheduleResponse> | null = this;
		let n: number = 0
		const m$: DeleteScheduleResponse = m == null ? $.pointerTarget<DeleteScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeleteScheduleResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as DeleteScheduleResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DeleteScheduleResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DeleteScheduleResponse | $.VarRef<DeleteScheduleResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DeleteScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DeleteScheduleResponse | $.VarRef<DeleteScheduleResponse> | null = this;
		const m$: DeleteScheduleResponse = m == null ? $.pointerTarget<DeleteScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeleteScheduleResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow8 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceSchedule
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
				return fmt.Errorf("proto: DeleteScheduleResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DeleteScheduleResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DeleteScheduleResponse).XXX_unrecognized = $.appendSlice((m$ as DeleteScheduleResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: DeleteScheduleResponse | $.VarRef<DeleteScheduleResponse> | null = this;
		xxx_messageInfo_DeleteScheduleResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DeleteScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: DeleteScheduleResponse | $.VarRef<DeleteScheduleResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DeleteScheduleResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DeleteScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteScheduleResponse).MarshalToSizedBuffer(b) : DeleteScheduleResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: DeleteScheduleResponse | $.VarRef<DeleteScheduleResponse> | null = this;
		xxx_messageInfo_DeleteScheduleResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DeleteScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleResponse")), src)
	}

	public XXX_Size(): number {
		const m: DeleteScheduleResponse | $.VarRef<DeleteScheduleResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteScheduleResponse).Size() : DeleteScheduleResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DeleteScheduleResponse | $.VarRef<DeleteScheduleResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteScheduleResponse).Unmarshal(b) : DeleteScheduleResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DeleteScheduleResponse",
		() => new DeleteScheduleResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		DeleteScheduleResponse,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class PauseScheduleRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get ScheduleId(): string {
		return this._fields.ScheduleId
	}

	public set ScheduleId(value: string) {
		this._fields.ScheduleId = value
	}

	public get Reason(): string {
		return this._fields.Reason
	}

	public set Reason(value: string) {
		this._fields.Reason = value
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
		ScheduleId: string
		Reason: string
		Identity: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, ScheduleId?: string, Reason?: string, Identity?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			ScheduleId: init?.ScheduleId ?? ("" as string),
			Reason: init?.Reason ?? ("" as string),
			Identity: init?.Identity ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PauseScheduleRequest {
		return new PauseScheduleRequest(this, true)
	}

	public __goscriptAssign(source: PauseScheduleRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.ScheduleId = values.ScheduleId
		target.Reason = values.Reason
		target.Identity = values.Identity
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_e1236bf37818157b, $.arrayToSlice<number>([8])]
	}

	public GetDomain(): string {
		const m: PauseScheduleRequest | $.VarRef<PauseScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<PauseScheduleRequest>(m).Domain
		}
		return ""
	}

	public GetIdentity(): string {
		const m: PauseScheduleRequest | $.VarRef<PauseScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<PauseScheduleRequest>(m).Identity
		}
		return ""
	}

	public GetReason(): string {
		const m: PauseScheduleRequest | $.VarRef<PauseScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<PauseScheduleRequest>(m).Reason
		}
		return ""
	}

	public GetScheduleId(): string {
		const m: PauseScheduleRequest | $.VarRef<PauseScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<PauseScheduleRequest>(m).ScheduleId
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: PauseScheduleRequest | $.VarRef<PauseScheduleRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PauseScheduleRequest).Size() : PauseScheduleRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple8: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PauseScheduleRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PauseScheduleRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PauseScheduleRequest | $.VarRef<PauseScheduleRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PauseScheduleRequest).Size() : PauseScheduleRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PauseScheduleRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PauseScheduleRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PauseScheduleRequest | $.VarRef<PauseScheduleRequest> | null = this;
		const m$: PauseScheduleRequest = m == null ? $.pointerTarget<PauseScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PauseScheduleRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as PauseScheduleRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as PauseScheduleRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PauseScheduleRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as PauseScheduleRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as PauseScheduleRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PauseScheduleRequest).Identity)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as PauseScheduleRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as PauseScheduleRequest).Reason) > 0) {
			i = i - ($.stringLen((m$ as PauseScheduleRequest).Reason))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PauseScheduleRequest).Reason)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as PauseScheduleRequest).Reason)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.stringLen((m$ as PauseScheduleRequest).ScheduleId) > 0) {
			i = i - ($.stringLen((m$ as PauseScheduleRequest).ScheduleId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PauseScheduleRequest).ScheduleId)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as PauseScheduleRequest).ScheduleId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as PauseScheduleRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as PauseScheduleRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PauseScheduleRequest).Domain)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as PauseScheduleRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: PauseScheduleRequest | $.VarRef<PauseScheduleRequest> | null = this;
		$.assignStruct($.pointerValue<PauseScheduleRequest>(m), $.markAsStructValue(new PauseScheduleRequest()))
	}

	public Size(): number {
		const m: PauseScheduleRequest | $.VarRef<PauseScheduleRequest> | null = this;
		let n: number = 0
		const m$: PauseScheduleRequest = m == null ? $.pointerTarget<PauseScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PauseScheduleRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as PauseScheduleRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		l = $.stringLen((m$ as PauseScheduleRequest).ScheduleId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		l = $.stringLen((m$ as PauseScheduleRequest).Reason)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		l = $.stringLen((m$ as PauseScheduleRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as PauseScheduleRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as PauseScheduleRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: PauseScheduleRequest | $.VarRef<PauseScheduleRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.PauseScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: PauseScheduleRequest | $.VarRef<PauseScheduleRequest> | null = this;
		const m$: PauseScheduleRequest = m == null ? $.pointerTarget<PauseScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PauseScheduleRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow9 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceSchedule
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
				return fmt.Errorf("proto: PauseScheduleRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: PauseScheduleRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PauseScheduleRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduleId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PauseScheduleRequest).ScheduleId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PauseScheduleRequest).Reason = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PauseScheduleRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PauseScheduleRequest).XXX_unrecognized = $.appendSlice((m$ as PauseScheduleRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: PauseScheduleRequest | $.VarRef<PauseScheduleRequest> | null = this;
		xxx_messageInfo_PauseScheduleRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.PauseScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: PauseScheduleRequest | $.VarRef<PauseScheduleRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_PauseScheduleRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.PauseScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PauseScheduleRequest).MarshalToSizedBuffer(b) : PauseScheduleRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: PauseScheduleRequest | $.VarRef<PauseScheduleRequest> | null = this;
		xxx_messageInfo_PauseScheduleRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.PauseScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleRequest")), src)
	}

	public XXX_Size(): number {
		const m: PauseScheduleRequest | $.VarRef<PauseScheduleRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PauseScheduleRequest).Size() : PauseScheduleRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: PauseScheduleRequest | $.VarRef<PauseScheduleRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PauseScheduleRequest).Unmarshal(b) : PauseScheduleRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.PauseScheduleRequest",
		() => new PauseScheduleRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetIdentity", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetReason", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetScheduleId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		PauseScheduleRequest,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "ScheduleId", key: "ScheduleId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=schedule_id,json=scheduleId,proto3\" json:\"schedule_id,omitempty\"" }, { name: "Reason", key: "Reason", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=reason,proto3\" json:\"reason,omitempty\"" }, { name: "Identity", key: "Identity", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,4,opt,name=identity,proto3\" json:\"identity,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class PauseScheduleResponse {
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

	public clone(): PauseScheduleResponse {
		return new PauseScheduleResponse(this, true)
	}

	public __goscriptAssign(source: PauseScheduleResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_e1236bf37818157b, $.arrayToSlice<number>([9])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: PauseScheduleResponse | $.VarRef<PauseScheduleResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PauseScheduleResponse).Size() : PauseScheduleResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple9: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PauseScheduleResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PauseScheduleResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PauseScheduleResponse | $.VarRef<PauseScheduleResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PauseScheduleResponse).Size() : PauseScheduleResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PauseScheduleResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PauseScheduleResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PauseScheduleResponse | $.VarRef<PauseScheduleResponse> | null = this;
		const m$: PauseScheduleResponse = m == null ? $.pointerTarget<PauseScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PauseScheduleResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as PauseScheduleResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as PauseScheduleResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PauseScheduleResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: PauseScheduleResponse | $.VarRef<PauseScheduleResponse> | null = this;
		$.assignStruct($.pointerValue<PauseScheduleResponse>(m), new PauseScheduleResponse(undefined, true))
	}

	public Size(): number {
		const m: PauseScheduleResponse | $.VarRef<PauseScheduleResponse> | null = this;
		let n: number = 0
		const m$: PauseScheduleResponse = m == null ? $.pointerTarget<PauseScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PauseScheduleResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as PauseScheduleResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as PauseScheduleResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: PauseScheduleResponse | $.VarRef<PauseScheduleResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.PauseScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: PauseScheduleResponse | $.VarRef<PauseScheduleResponse> | null = this;
		const m$: PauseScheduleResponse = m == null ? $.pointerTarget<PauseScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PauseScheduleResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow10 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceSchedule
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
				return fmt.Errorf("proto: PauseScheduleResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: PauseScheduleResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PauseScheduleResponse).XXX_unrecognized = $.appendSlice((m$ as PauseScheduleResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: PauseScheduleResponse | $.VarRef<PauseScheduleResponse> | null = this;
		xxx_messageInfo_PauseScheduleResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.PauseScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: PauseScheduleResponse | $.VarRef<PauseScheduleResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_PauseScheduleResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.PauseScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PauseScheduleResponse).MarshalToSizedBuffer(b) : PauseScheduleResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: PauseScheduleResponse | $.VarRef<PauseScheduleResponse> | null = this;
		xxx_messageInfo_PauseScheduleResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.PauseScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleResponse")), src)
	}

	public XXX_Size(): number {
		const m: PauseScheduleResponse | $.VarRef<PauseScheduleResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PauseScheduleResponse).Size() : PauseScheduleResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: PauseScheduleResponse | $.VarRef<PauseScheduleResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PauseScheduleResponse).Unmarshal(b) : PauseScheduleResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.PauseScheduleResponse",
		() => new PauseScheduleResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		PauseScheduleResponse,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class UnpauseScheduleRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get ScheduleId(): string {
		return this._fields.ScheduleId
	}

	public set ScheduleId(value: string) {
		this._fields.ScheduleId = value
	}

	public get Reason(): string {
		return this._fields.Reason
	}

	public set Reason(value: string) {
		this._fields.Reason = value
	}

	// Optional: override the schedule's catch-up policy for this unpause only.
	// If not set, uses the catch_up_policy from SchedulePolicies.
	public get CatchUpPolicy(): __goscript_schedule_pb.ScheduleCatchUpPolicy {
		return this._fields.CatchUpPolicy
	}

	public set CatchUpPolicy(value: __goscript_schedule_pb.ScheduleCatchUpPolicy) {
		this._fields.CatchUpPolicy = value
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
		ScheduleId: string
		Reason: string
		CatchUpPolicy: __goscript_schedule_pb.ScheduleCatchUpPolicy
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, ScheduleId?: string, Reason?: string, CatchUpPolicy?: __goscript_schedule_pb.ScheduleCatchUpPolicy, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			ScheduleId: init?.ScheduleId ?? ("" as string),
			Reason: init?.Reason ?? ("" as string),
			CatchUpPolicy: init?.CatchUpPolicy ?? (0 as __goscript_schedule_pb.ScheduleCatchUpPolicy),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UnpauseScheduleRequest {
		return new UnpauseScheduleRequest(this, true)
	}

	public __goscriptAssign(source: UnpauseScheduleRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.ScheduleId = values.ScheduleId
		target.Reason = values.Reason
		target.CatchUpPolicy = values.CatchUpPolicy
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_e1236bf37818157b, $.arrayToSlice<number>([10])]
	}

	public GetCatchUpPolicy(): __goscript_schedule_pb.ScheduleCatchUpPolicy {
		const m: UnpauseScheduleRequest | $.VarRef<UnpauseScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UnpauseScheduleRequest>(m).CatchUpPolicy
		}
		return 0
	}

	public GetDomain(): string {
		const m: UnpauseScheduleRequest | $.VarRef<UnpauseScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UnpauseScheduleRequest>(m).Domain
		}
		return ""
	}

	public GetReason(): string {
		const m: UnpauseScheduleRequest | $.VarRef<UnpauseScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UnpauseScheduleRequest>(m).Reason
		}
		return ""
	}

	public GetScheduleId(): string {
		const m: UnpauseScheduleRequest | $.VarRef<UnpauseScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UnpauseScheduleRequest>(m).ScheduleId
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: UnpauseScheduleRequest | $.VarRef<UnpauseScheduleRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UnpauseScheduleRequest).Size() : UnpauseScheduleRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple10: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UnpauseScheduleRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UnpauseScheduleRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple10[0]
		err = __goscriptTuple10[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UnpauseScheduleRequest | $.VarRef<UnpauseScheduleRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UnpauseScheduleRequest).Size() : UnpauseScheduleRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UnpauseScheduleRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UnpauseScheduleRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UnpauseScheduleRequest | $.VarRef<UnpauseScheduleRequest> | null = this;
		const m$: UnpauseScheduleRequest = m == null ? $.pointerTarget<UnpauseScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UnpauseScheduleRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as UnpauseScheduleRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as UnpauseScheduleRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UnpauseScheduleRequest).XXX_unrecognized)
		}
		if ((m$ as UnpauseScheduleRequest).CatchUpPolicy != 0) {
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64((m$ as UnpauseScheduleRequest).CatchUpPolicy))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x20
		}
		if ($.stringLen((m$ as UnpauseScheduleRequest).Reason) > 0) {
			i = i - ($.stringLen((m$ as UnpauseScheduleRequest).Reason))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UnpauseScheduleRequest).Reason)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as UnpauseScheduleRequest).Reason)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.stringLen((m$ as UnpauseScheduleRequest).ScheduleId) > 0) {
			i = i - ($.stringLen((m$ as UnpauseScheduleRequest).ScheduleId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UnpauseScheduleRequest).ScheduleId)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as UnpauseScheduleRequest).ScheduleId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as UnpauseScheduleRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as UnpauseScheduleRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UnpauseScheduleRequest).Domain)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as UnpauseScheduleRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: UnpauseScheduleRequest | $.VarRef<UnpauseScheduleRequest> | null = this;
		$.assignStruct($.pointerValue<UnpauseScheduleRequest>(m), $.markAsStructValue(new UnpauseScheduleRequest()))
	}

	public Size(): number {
		const m: UnpauseScheduleRequest | $.VarRef<UnpauseScheduleRequest> | null = this;
		let n: number = 0
		const m$: UnpauseScheduleRequest = m == null ? $.pointerTarget<UnpauseScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UnpauseScheduleRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as UnpauseScheduleRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		l = $.stringLen((m$ as UnpauseScheduleRequest).ScheduleId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		l = $.stringLen((m$ as UnpauseScheduleRequest).Reason)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as UnpauseScheduleRequest).CatchUpPolicy != 0) {
			n = n + (1 + sovServiceSchedule($.uint64((m$ as UnpauseScheduleRequest).CatchUpPolicy)))
		}
		if ((m$ as UnpauseScheduleRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as UnpauseScheduleRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: UnpauseScheduleRequest | $.VarRef<UnpauseScheduleRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.UnpauseScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: UnpauseScheduleRequest | $.VarRef<UnpauseScheduleRequest> | null = this;
		const m$: UnpauseScheduleRequest = m == null ? $.pointerTarget<UnpauseScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UnpauseScheduleRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow11 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceSchedule
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
				return fmt.Errorf("proto: UnpauseScheduleRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: UnpauseScheduleRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UnpauseScheduleRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduleId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UnpauseScheduleRequest).ScheduleId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UnpauseScheduleRequest).Reason = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field CatchUpPolicy", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as UnpauseScheduleRequest).CatchUpPolicy = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
						iNdEx++;
						;(m$ as UnpauseScheduleRequest).CatchUpPolicy = (m$ as UnpauseScheduleRequest).CatchUpPolicy | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UnpauseScheduleRequest).XXX_unrecognized = $.appendSlice((m$ as UnpauseScheduleRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: UnpauseScheduleRequest | $.VarRef<UnpauseScheduleRequest> | null = this;
		xxx_messageInfo_UnpauseScheduleRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.UnpauseScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: UnpauseScheduleRequest | $.VarRef<UnpauseScheduleRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_UnpauseScheduleRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.UnpauseScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UnpauseScheduleRequest).MarshalToSizedBuffer(b) : UnpauseScheduleRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: UnpauseScheduleRequest | $.VarRef<UnpauseScheduleRequest> | null = this;
		xxx_messageInfo_UnpauseScheduleRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.UnpauseScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleRequest")), src)
	}

	public XXX_Size(): number {
		const m: UnpauseScheduleRequest | $.VarRef<UnpauseScheduleRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UnpauseScheduleRequest).Size() : UnpauseScheduleRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: UnpauseScheduleRequest | $.VarRef<UnpauseScheduleRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UnpauseScheduleRequest).Unmarshal(b) : UnpauseScheduleRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.UnpauseScheduleRequest",
		() => new UnpauseScheduleRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetCatchUpPolicy", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.ScheduleCatchUpPolicy") }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetReason", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetScheduleId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		UnpauseScheduleRequest,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "ScheduleId", key: "ScheduleId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=schedule_id,json=scheduleId,proto3\" json:\"schedule_id,omitempty\"" }, { name: "Reason", key: "Reason", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=reason,proto3\" json:\"reason,omitempty\"" }, { name: "CatchUpPolicy", key: "CatchUpPolicy", type: /* @__PURE__ */ $.basicType("int32", "apiv1.ScheduleCatchUpPolicy"), tag: "protobuf:\"varint,4,opt,name=catch_up_policy,json=catchUpPolicy,proto3,enum=uber.cadence.api.v1.ScheduleCatchUpPolicy\" json:\"catch_up_policy,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class UnpauseScheduleResponse {
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

	public clone(): UnpauseScheduleResponse {
		return new UnpauseScheduleResponse(this, true)
	}

	public __goscriptAssign(source: UnpauseScheduleResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_e1236bf37818157b, $.arrayToSlice<number>([11])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: UnpauseScheduleResponse | $.VarRef<UnpauseScheduleResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UnpauseScheduleResponse).Size() : UnpauseScheduleResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple11: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UnpauseScheduleResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UnpauseScheduleResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple11[0]
		err = __goscriptTuple11[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UnpauseScheduleResponse | $.VarRef<UnpauseScheduleResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UnpauseScheduleResponse).Size() : UnpauseScheduleResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UnpauseScheduleResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UnpauseScheduleResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UnpauseScheduleResponse | $.VarRef<UnpauseScheduleResponse> | null = this;
		const m$: UnpauseScheduleResponse = m == null ? $.pointerTarget<UnpauseScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UnpauseScheduleResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as UnpauseScheduleResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as UnpauseScheduleResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UnpauseScheduleResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: UnpauseScheduleResponse | $.VarRef<UnpauseScheduleResponse> | null = this;
		$.assignStruct($.pointerValue<UnpauseScheduleResponse>(m), new UnpauseScheduleResponse(undefined, true))
	}

	public Size(): number {
		const m: UnpauseScheduleResponse | $.VarRef<UnpauseScheduleResponse> | null = this;
		let n: number = 0
		const m$: UnpauseScheduleResponse = m == null ? $.pointerTarget<UnpauseScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UnpauseScheduleResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as UnpauseScheduleResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as UnpauseScheduleResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: UnpauseScheduleResponse | $.VarRef<UnpauseScheduleResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.UnpauseScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: UnpauseScheduleResponse | $.VarRef<UnpauseScheduleResponse> | null = this;
		const m$: UnpauseScheduleResponse = m == null ? $.pointerTarget<UnpauseScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UnpauseScheduleResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow12 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceSchedule
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
				return fmt.Errorf("proto: UnpauseScheduleResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: UnpauseScheduleResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UnpauseScheduleResponse).XXX_unrecognized = $.appendSlice((m$ as UnpauseScheduleResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: UnpauseScheduleResponse | $.VarRef<UnpauseScheduleResponse> | null = this;
		xxx_messageInfo_UnpauseScheduleResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.UnpauseScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: UnpauseScheduleResponse | $.VarRef<UnpauseScheduleResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_UnpauseScheduleResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.UnpauseScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UnpauseScheduleResponse).MarshalToSizedBuffer(b) : UnpauseScheduleResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: UnpauseScheduleResponse | $.VarRef<UnpauseScheduleResponse> | null = this;
		xxx_messageInfo_UnpauseScheduleResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.UnpauseScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleResponse")), src)
	}

	public XXX_Size(): number {
		const m: UnpauseScheduleResponse | $.VarRef<UnpauseScheduleResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UnpauseScheduleResponse).Size() : UnpauseScheduleResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: UnpauseScheduleResponse | $.VarRef<UnpauseScheduleResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UnpauseScheduleResponse).Unmarshal(b) : UnpauseScheduleResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.UnpauseScheduleResponse",
		() => new UnpauseScheduleResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		UnpauseScheduleResponse,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class BackfillScheduleRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get ScheduleId(): string {
		return this._fields.ScheduleId
	}

	public set ScheduleId(value: string) {
		this._fields.ScheduleId = value
	}

	public get StartTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.StartTime
	}

	public set StartTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.StartTime = value
	}

	public get EndTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.EndTime
	}

	public set EndTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.EndTime = value
	}

	public get OverlapPolicy(): __goscript_schedule_pb.ScheduleOverlapPolicy {
		return this._fields.OverlapPolicy
	}

	public set OverlapPolicy(value: __goscript_schedule_pb.ScheduleOverlapPolicy) {
		this._fields.OverlapPolicy = value
	}

	// Client-provided backfill identifier. Used for idempotency and to track progress.
	// If not set, the server generates a UUID. Retries with the same backfill_id are deduplicated.
	public get BackfillId(): string {
		return this._fields.BackfillId
	}

	public set BackfillId(value: string) {
		this._fields.BackfillId = value
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
		ScheduleId: string
		StartTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		EndTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		OverlapPolicy: __goscript_schedule_pb.ScheduleOverlapPolicy
		BackfillId: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, ScheduleId?: string, StartTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, EndTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, OverlapPolicy?: __goscript_schedule_pb.ScheduleOverlapPolicy, BackfillId?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			ScheduleId: init?.ScheduleId ?? ("" as string),
			StartTime: init?.StartTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			EndTime: init?.EndTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			OverlapPolicy: init?.OverlapPolicy ?? (0 as __goscript_schedule_pb.ScheduleOverlapPolicy),
			BackfillId: init?.BackfillId ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BackfillScheduleRequest {
		return new BackfillScheduleRequest(this, true)
	}

	public __goscriptAssign(source: BackfillScheduleRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.ScheduleId = values.ScheduleId
		target.StartTime = values.StartTime
		target.EndTime = values.EndTime
		target.OverlapPolicy = values.OverlapPolicy
		target.BackfillId = values.BackfillId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_e1236bf37818157b, $.arrayToSlice<number>([12])]
	}

	public GetBackfillId(): string {
		const m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<BackfillScheduleRequest>(m).BackfillId
		}
		return ""
	}

	public GetDomain(): string {
		const m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<BackfillScheduleRequest>(m).Domain
		}
		return ""
	}

	public GetEndTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<BackfillScheduleRequest>(m).EndTime
		}
		return null
	}

	public GetOverlapPolicy(): __goscript_schedule_pb.ScheduleOverlapPolicy {
		const m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<BackfillScheduleRequest>(m).OverlapPolicy
		}
		return 0
	}

	public GetScheduleId(): string {
		const m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<BackfillScheduleRequest>(m).ScheduleId
		}
		return ""
	}

	public GetStartTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<BackfillScheduleRequest>(m).StartTime
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillScheduleRequest).Size() : BackfillScheduleRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple12: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillScheduleRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BackfillScheduleRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillScheduleRequest).Size() : BackfillScheduleRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillScheduleRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BackfillScheduleRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		const m$: BackfillScheduleRequest = m == null ? $.pointerTarget<BackfillScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BackfillScheduleRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as BackfillScheduleRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as BackfillScheduleRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BackfillScheduleRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as BackfillScheduleRequest).BackfillId) > 0) {
			i = i - ($.stringLen((m$ as BackfillScheduleRequest).BackfillId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BackfillScheduleRequest).BackfillId)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as BackfillScheduleRequest).BackfillId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		if ((m$ as BackfillScheduleRequest).OverlapPolicy != 0) {
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64((m$ as BackfillScheduleRequest).OverlapPolicy))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x28
		}
		if ((m$ as BackfillScheduleRequest).EndTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as BackfillScheduleRequest).EndTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as BackfillScheduleRequest).StartTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as BackfillScheduleRequest).StartTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.stringLen((m$ as BackfillScheduleRequest).ScheduleId) > 0) {
			i = i - ($.stringLen((m$ as BackfillScheduleRequest).ScheduleId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BackfillScheduleRequest).ScheduleId)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as BackfillScheduleRequest).ScheduleId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as BackfillScheduleRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as BackfillScheduleRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BackfillScheduleRequest).Domain)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as BackfillScheduleRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		$.assignStruct($.pointerValue<BackfillScheduleRequest>(m), $.markAsStructValue(new BackfillScheduleRequest()))
	}

	public Size(): number {
		const m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		let n: number = 0
		const m$: BackfillScheduleRequest = m == null ? $.pointerTarget<BackfillScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BackfillScheduleRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as BackfillScheduleRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		l = $.stringLen((m$ as BackfillScheduleRequest).ScheduleId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as BackfillScheduleRequest).StartTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as BackfillScheduleRequest).StartTime)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as BackfillScheduleRequest).EndTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as BackfillScheduleRequest).EndTime)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as BackfillScheduleRequest).OverlapPolicy != 0) {
			n = n + (1 + sovServiceSchedule($.uint64((m$ as BackfillScheduleRequest).OverlapPolicy)))
		}
		l = $.stringLen((m$ as BackfillScheduleRequest).BackfillId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as BackfillScheduleRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as BackfillScheduleRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.BackfillScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		const m$: BackfillScheduleRequest = m == null ? $.pointerTarget<BackfillScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BackfillScheduleRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow13 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceSchedule
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
				return fmt.Errorf("proto: BackfillScheduleRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: BackfillScheduleRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BackfillScheduleRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduleId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BackfillScheduleRequest).ScheduleId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as BackfillScheduleRequest).StartTime == null) {
						;(m$ as BackfillScheduleRequest).StartTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as BackfillScheduleRequest).StartTime, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field EndTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as BackfillScheduleRequest).EndTime == null) {
						;(m$ as BackfillScheduleRequest).EndTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as BackfillScheduleRequest).EndTime, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field OverlapPolicy", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as BackfillScheduleRequest).OverlapPolicy = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow13.backing as any[])[$.windowSlot(__goscriptSliceWindow13, iNdEx)] as number)
						iNdEx++;
						;(m$ as BackfillScheduleRequest).OverlapPolicy = (m$ as BackfillScheduleRequest).OverlapPolicy | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 6:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field BackfillId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BackfillScheduleRequest).BackfillId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BackfillScheduleRequest).XXX_unrecognized = $.appendSlice((m$ as BackfillScheduleRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		xxx_messageInfo_BackfillScheduleRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.BackfillScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_BackfillScheduleRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.BackfillScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillScheduleRequest).MarshalToSizedBuffer(b) : BackfillScheduleRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		xxx_messageInfo_BackfillScheduleRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.BackfillScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleRequest")), src)
	}

	public XXX_Size(): number {
		const m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillScheduleRequest).Size() : BackfillScheduleRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: BackfillScheduleRequest | $.VarRef<BackfillScheduleRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillScheduleRequest).Unmarshal(b) : BackfillScheduleRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.BackfillScheduleRequest",
		() => new BackfillScheduleRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetBackfillId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetEndTime", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Timestamp") }], pointerReceiver: true }, { name: "GetOverlapPolicy", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.ScheduleOverlapPolicy") }], pointerReceiver: true }, { name: "GetScheduleId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetStartTime", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Timestamp") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		BackfillScheduleRequest,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "ScheduleId", key: "ScheduleId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=schedule_id,json=scheduleId,proto3\" json:\"schedule_id,omitempty\"" }, { name: "StartTime", key: "StartTime", type: /* @__PURE__ */ $.pointerType("types.Timestamp"), tag: "protobuf:\"bytes,3,opt,name=start_time,json=startTime,proto3\" json:\"start_time,omitempty\"" }, { name: "EndTime", key: "EndTime", type: /* @__PURE__ */ $.pointerType("types.Timestamp"), tag: "protobuf:\"bytes,4,opt,name=end_time,json=endTime,proto3\" json:\"end_time,omitempty\"" }, { name: "OverlapPolicy", key: "OverlapPolicy", type: /* @__PURE__ */ $.basicType("int32", "apiv1.ScheduleOverlapPolicy"), tag: "protobuf:\"varint,5,opt,name=overlap_policy,json=overlapPolicy,proto3,enum=uber.cadence.api.v1.ScheduleOverlapPolicy\" json:\"overlap_policy,omitempty\"" }, { name: "BackfillId", key: "BackfillId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,6,opt,name=backfill_id,json=backfillId,proto3\" json:\"backfill_id,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class BackfillScheduleResponse {
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

	public clone(): BackfillScheduleResponse {
		return new BackfillScheduleResponse(this, true)
	}

	public __goscriptAssign(source: BackfillScheduleResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_e1236bf37818157b, $.arrayToSlice<number>([13])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: BackfillScheduleResponse | $.VarRef<BackfillScheduleResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillScheduleResponse).Size() : BackfillScheduleResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple13: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillScheduleResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BackfillScheduleResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple13[0]
		err = __goscriptTuple13[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BackfillScheduleResponse | $.VarRef<BackfillScheduleResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillScheduleResponse).Size() : BackfillScheduleResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillScheduleResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BackfillScheduleResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BackfillScheduleResponse | $.VarRef<BackfillScheduleResponse> | null = this;
		const m$: BackfillScheduleResponse = m == null ? $.pointerTarget<BackfillScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BackfillScheduleResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as BackfillScheduleResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as BackfillScheduleResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BackfillScheduleResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: BackfillScheduleResponse | $.VarRef<BackfillScheduleResponse> | null = this;
		$.assignStruct($.pointerValue<BackfillScheduleResponse>(m), new BackfillScheduleResponse(undefined, true))
	}

	public Size(): number {
		const m: BackfillScheduleResponse | $.VarRef<BackfillScheduleResponse> | null = this;
		let n: number = 0
		const m$: BackfillScheduleResponse = m == null ? $.pointerTarget<BackfillScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BackfillScheduleResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as BackfillScheduleResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as BackfillScheduleResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: BackfillScheduleResponse | $.VarRef<BackfillScheduleResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.BackfillScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: BackfillScheduleResponse | $.VarRef<BackfillScheduleResponse> | null = this;
		const m$: BackfillScheduleResponse = m == null ? $.pointerTarget<BackfillScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BackfillScheduleResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow14 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceSchedule
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
				return fmt.Errorf("proto: BackfillScheduleResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: BackfillScheduleResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BackfillScheduleResponse).XXX_unrecognized = $.appendSlice((m$ as BackfillScheduleResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: BackfillScheduleResponse | $.VarRef<BackfillScheduleResponse> | null = this;
		xxx_messageInfo_BackfillScheduleResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.BackfillScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: BackfillScheduleResponse | $.VarRef<BackfillScheduleResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_BackfillScheduleResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.BackfillScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillScheduleResponse).MarshalToSizedBuffer(b) : BackfillScheduleResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: BackfillScheduleResponse | $.VarRef<BackfillScheduleResponse> | null = this;
		xxx_messageInfo_BackfillScheduleResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.BackfillScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleResponse")), src)
	}

	public XXX_Size(): number {
		const m: BackfillScheduleResponse | $.VarRef<BackfillScheduleResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillScheduleResponse).Size() : BackfillScheduleResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: BackfillScheduleResponse | $.VarRef<BackfillScheduleResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillScheduleResponse).Unmarshal(b) : BackfillScheduleResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.BackfillScheduleResponse",
		() => new BackfillScheduleResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		BackfillScheduleResponse,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class UpdateScheduleRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get ScheduleId(): string {
		return this._fields.ScheduleId
	}

	public set ScheduleId(value: string) {
		this._fields.ScheduleId = value
	}

	public get Spec(): __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null {
		return this._fields.Spec
	}

	public set Spec(value: __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null) {
		this._fields.Spec = value
	}

	public get Action(): __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null {
		return this._fields.Action
	}

	public set Action(value: __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null) {
		this._fields.Action = value
	}

	public get Policies(): __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null {
		return this._fields.Policies
	}

	public set Policies(value: __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null) {
		this._fields.Policies = value
	}

	public get SearchAttributes(): __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null {
		return this._fields.SearchAttributes
	}

	public set SearchAttributes(value: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null) {
		this._fields.SearchAttributes = value
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
		ScheduleId: string
		Spec: __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null
		Action: __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null
		Policies: __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null
		SearchAttributes: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, ScheduleId?: string, Spec?: __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null, Action?: __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null, Policies?: __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null, SearchAttributes?: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			ScheduleId: init?.ScheduleId ?? ("" as string),
			Spec: init?.Spec ?? (null! as __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null),
			Action: init?.Action ?? (null! as __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null),
			Policies: init?.Policies ?? (null! as __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null),
			SearchAttributes: init?.SearchAttributes ?? (null! as __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UpdateScheduleRequest {
		return new UpdateScheduleRequest(this, true)
	}

	public __goscriptAssign(source: UpdateScheduleRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.ScheduleId = values.ScheduleId
		target.Spec = values.Spec
		target.Action = values.Action
		target.Policies = values.Policies
		target.SearchAttributes = values.SearchAttributes
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_e1236bf37818157b, $.arrayToSlice<number>([14])]
	}

	public GetAction(): __goscript_schedule_pb.ScheduleAction | $.VarRef<__goscript_schedule_pb.ScheduleAction> | null {
		const m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateScheduleRequest>(m).Action
		}
		return null
	}

	public GetDomain(): string {
		const m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateScheduleRequest>(m).Domain
		}
		return ""
	}

	public GetPolicies(): __goscript_schedule_pb.SchedulePolicies | $.VarRef<__goscript_schedule_pb.SchedulePolicies> | null {
		const m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateScheduleRequest>(m).Policies
		}
		return null
	}

	public GetScheduleId(): string {
		const m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateScheduleRequest>(m).ScheduleId
		}
		return ""
	}

	public GetSearchAttributes(): __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null {
		const m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateScheduleRequest>(m).SearchAttributes
		}
		return null
	}

	public GetSpec(): __goscript_schedule_pb.ScheduleSpec | $.VarRef<__goscript_schedule_pb.ScheduleSpec> | null {
		const m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateScheduleRequest>(m).Spec
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateScheduleRequest).Size() : UpdateScheduleRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple14: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateScheduleRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UpdateScheduleRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateScheduleRequest).Size() : UpdateScheduleRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateScheduleRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UpdateScheduleRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		const m$: UpdateScheduleRequest = m == null ? $.pointerTarget<UpdateScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UpdateScheduleRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as UpdateScheduleRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as UpdateScheduleRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UpdateScheduleRequest).XXX_unrecognized)
		}
		if ((m$ as UpdateScheduleRequest).SearchAttributes != null) {
			{
				let [size, err] = __goscript_common_pb.SearchAttributes.prototype.MarshalToSizedBuffer.call((m$ as UpdateScheduleRequest).SearchAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		if ((m$ as UpdateScheduleRequest).Policies != null) {
			{
				let [size, err] = __goscript_schedule_pb.SchedulePolicies.prototype.MarshalToSizedBuffer.call((m$ as UpdateScheduleRequest).Policies, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as UpdateScheduleRequest).Action != null) {
			{
				let [size, err] = __goscript_schedule_pb.ScheduleAction.prototype.MarshalToSizedBuffer.call((m$ as UpdateScheduleRequest).Action, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as UpdateScheduleRequest).Spec != null) {
			{
				let [size, err] = __goscript_schedule_pb.ScheduleSpec.prototype.MarshalToSizedBuffer.call((m$ as UpdateScheduleRequest).Spec, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.stringLen((m$ as UpdateScheduleRequest).ScheduleId) > 0) {
			i = i - ($.stringLen((m$ as UpdateScheduleRequest).ScheduleId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UpdateScheduleRequest).ScheduleId)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as UpdateScheduleRequest).ScheduleId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as UpdateScheduleRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as UpdateScheduleRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UpdateScheduleRequest).Domain)
			i = encodeVarintServiceSchedule(dAtA, i, $.uint64($.stringLen((m$ as UpdateScheduleRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		$.assignStruct($.pointerValue<UpdateScheduleRequest>(m), $.markAsStructValue(new UpdateScheduleRequest()))
	}

	public Size(): number {
		const m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		let n: number = 0
		const m$: UpdateScheduleRequest = m == null ? $.pointerTarget<UpdateScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UpdateScheduleRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as UpdateScheduleRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		l = $.stringLen((m$ as UpdateScheduleRequest).ScheduleId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as UpdateScheduleRequest).Spec != null) {
			l = __goscript_schedule_pb.ScheduleSpec.prototype.Size.call((m$ as UpdateScheduleRequest).Spec)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as UpdateScheduleRequest).Action != null) {
			l = __goscript_schedule_pb.ScheduleAction.prototype.Size.call((m$ as UpdateScheduleRequest).Action)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as UpdateScheduleRequest).Policies != null) {
			l = __goscript_schedule_pb.SchedulePolicies.prototype.Size.call((m$ as UpdateScheduleRequest).Policies)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as UpdateScheduleRequest).SearchAttributes != null) {
			l = __goscript_common_pb.SearchAttributes.prototype.Size.call((m$ as UpdateScheduleRequest).SearchAttributes)
			n = n + ((1 + l) + sovServiceSchedule($.uint64(l)))
		}
		if ((m$ as UpdateScheduleRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as UpdateScheduleRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.UpdateScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		const m$: UpdateScheduleRequest = m == null ? $.pointerTarget<UpdateScheduleRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UpdateScheduleRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow15 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceSchedule
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
				return fmt.Errorf("proto: UpdateScheduleRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: UpdateScheduleRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UpdateScheduleRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduleId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UpdateScheduleRequest).ScheduleId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Spec", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as UpdateScheduleRequest).Spec == null) {
						;(m$ as UpdateScheduleRequest).Spec = new __goscript_schedule_pb.ScheduleSpec()
					}
					{
						let err = __goscript_schedule_pb.ScheduleSpec.prototype.Unmarshal.call((m$ as UpdateScheduleRequest).Spec, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Action", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as UpdateScheduleRequest).Action == null) {
						;(m$ as UpdateScheduleRequest).Action = new __goscript_schedule_pb.ScheduleAction()
					}
					{
						let err = __goscript_schedule_pb.ScheduleAction.prototype.Unmarshal.call((m$ as UpdateScheduleRequest).Action, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Policies", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as UpdateScheduleRequest).Policies == null) {
						;(m$ as UpdateScheduleRequest).Policies = new __goscript_schedule_pb.SchedulePolicies()
					}
					{
						let err = __goscript_schedule_pb.SchedulePolicies.prototype.Unmarshal.call((m$ as UpdateScheduleRequest).Policies, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field SearchAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceSchedule
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
						return ErrInvalidLengthServiceSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as UpdateScheduleRequest).SearchAttributes == null) {
						;(m$ as UpdateScheduleRequest).SearchAttributes = new __goscript_common_pb.SearchAttributes()
					}
					{
						let err = __goscript_common_pb.SearchAttributes.prototype.Unmarshal.call((m$ as UpdateScheduleRequest).SearchAttributes, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UpdateScheduleRequest).XXX_unrecognized = $.appendSlice((m$ as UpdateScheduleRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		xxx_messageInfo_UpdateScheduleRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.UpdateScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_UpdateScheduleRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.UpdateScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateScheduleRequest).MarshalToSizedBuffer(b) : UpdateScheduleRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		xxx_messageInfo_UpdateScheduleRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.UpdateScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleRequest")), src)
	}

	public XXX_Size(): number {
		const m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateScheduleRequest).Size() : UpdateScheduleRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: UpdateScheduleRequest | $.VarRef<UpdateScheduleRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateScheduleRequest).Unmarshal(b) : UpdateScheduleRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.UpdateScheduleRequest",
		() => new UpdateScheduleRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetAction", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleAction") }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetPolicies", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.SchedulePolicies") }], pointerReceiver: true }, { name: "GetScheduleId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetSearchAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes") }], pointerReceiver: true }, { name: "GetSpec", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleSpec") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		UpdateScheduleRequest,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "ScheduleId", key: "ScheduleId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=schedule_id,json=scheduleId,proto3\" json:\"schedule_id,omitempty\"" }, { name: "Spec", key: "Spec", type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleSpec"), tag: "protobuf:\"bytes,3,opt,name=spec,proto3\" json:\"spec,omitempty\"" }, { name: "Action", key: "Action", type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleAction"), tag: "protobuf:\"bytes,4,opt,name=action,proto3\" json:\"action,omitempty\"" }, { name: "Policies", key: "Policies", type: /* @__PURE__ */ $.pointerType("apiv1.SchedulePolicies"), tag: "protobuf:\"bytes,5,opt,name=policies,proto3\" json:\"policies,omitempty\"" }, { name: "SearchAttributes", key: "SearchAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes"), tag: "protobuf:\"bytes,6,opt,name=search_attributes,json=searchAttributes,proto3\" json:\"search_attributes,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class UpdateScheduleResponse {
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

	public clone(): UpdateScheduleResponse {
		return new UpdateScheduleResponse(this, true)
	}

	public __goscriptAssign(source: UpdateScheduleResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_e1236bf37818157b, $.arrayToSlice<number>([15])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: UpdateScheduleResponse | $.VarRef<UpdateScheduleResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateScheduleResponse).Size() : UpdateScheduleResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple15: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateScheduleResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UpdateScheduleResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple15[0]
		err = __goscriptTuple15[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UpdateScheduleResponse | $.VarRef<UpdateScheduleResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateScheduleResponse).Size() : UpdateScheduleResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateScheduleResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UpdateScheduleResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UpdateScheduleResponse | $.VarRef<UpdateScheduleResponse> | null = this;
		const m$: UpdateScheduleResponse = m == null ? $.pointerTarget<UpdateScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UpdateScheduleResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as UpdateScheduleResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as UpdateScheduleResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UpdateScheduleResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: UpdateScheduleResponse | $.VarRef<UpdateScheduleResponse> | null = this;
		$.assignStruct($.pointerValue<UpdateScheduleResponse>(m), new UpdateScheduleResponse(undefined, true))
	}

	public Size(): number {
		const m: UpdateScheduleResponse | $.VarRef<UpdateScheduleResponse> | null = this;
		let n: number = 0
		const m$: UpdateScheduleResponse = m == null ? $.pointerTarget<UpdateScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UpdateScheduleResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as UpdateScheduleResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as UpdateScheduleResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: UpdateScheduleResponse | $.VarRef<UpdateScheduleResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.UpdateScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: UpdateScheduleResponse | $.VarRef<UpdateScheduleResponse> | null = this;
		const m$: UpdateScheduleResponse = m == null ? $.pointerTarget<UpdateScheduleResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UpdateScheduleResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow16 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceSchedule
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
				return fmt.Errorf("proto: UpdateScheduleResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: UpdateScheduleResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UpdateScheduleResponse).XXX_unrecognized = $.appendSlice((m$ as UpdateScheduleResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: UpdateScheduleResponse | $.VarRef<UpdateScheduleResponse> | null = this;
		xxx_messageInfo_UpdateScheduleResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.UpdateScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: UpdateScheduleResponse | $.VarRef<UpdateScheduleResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_UpdateScheduleResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.UpdateScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateScheduleResponse).MarshalToSizedBuffer(b) : UpdateScheduleResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: UpdateScheduleResponse | $.VarRef<UpdateScheduleResponse> | null = this;
		xxx_messageInfo_UpdateScheduleResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.UpdateScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleResponse")), src)
	}

	public XXX_Size(): number {
		const m: UpdateScheduleResponse | $.VarRef<UpdateScheduleResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateScheduleResponse).Size() : UpdateScheduleResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: UpdateScheduleResponse | $.VarRef<UpdateScheduleResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateScheduleResponse).Unmarshal(b) : UpdateScheduleResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.UpdateScheduleResponse",
		() => new UpdateScheduleResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		UpdateScheduleResponse,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export let xxx_messageInfo_CreateScheduleRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_CreateScheduleRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_CreateScheduleRequest.value, __goscriptValue)
}

export let xxx_messageInfo_CreateScheduleResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_CreateScheduleResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_CreateScheduleResponse.value, __goscriptValue)
}

export let xxx_messageInfo_DescribeScheduleRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DescribeScheduleRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DescribeScheduleRequest.value, __goscriptValue)
}

export let xxx_messageInfo_DescribeScheduleResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DescribeScheduleResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DescribeScheduleResponse.value, __goscriptValue)
}

export let xxx_messageInfo_ListSchedulesRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListSchedulesRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListSchedulesRequest.value, __goscriptValue)
}

export let xxx_messageInfo_ListSchedulesResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListSchedulesResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListSchedulesResponse.value, __goscriptValue)
}

export let xxx_messageInfo_DeleteScheduleRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DeleteScheduleRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DeleteScheduleRequest.value, __goscriptValue)
}

export let xxx_messageInfo_DeleteScheduleResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DeleteScheduleResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DeleteScheduleResponse.value, __goscriptValue)
}

export let xxx_messageInfo_PauseScheduleRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_PauseScheduleRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_PauseScheduleRequest.value, __goscriptValue)
}

export let xxx_messageInfo_PauseScheduleResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_PauseScheduleResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_PauseScheduleResponse.value, __goscriptValue)
}

export let xxx_messageInfo_UnpauseScheduleRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_UnpauseScheduleRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_UnpauseScheduleRequest.value, __goscriptValue)
}

export let xxx_messageInfo_UnpauseScheduleResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_UnpauseScheduleResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_UnpauseScheduleResponse.value, __goscriptValue)
}

export let xxx_messageInfo_BackfillScheduleRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_BackfillScheduleRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_BackfillScheduleRequest.value, __goscriptValue)
}

export let xxx_messageInfo_BackfillScheduleResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_BackfillScheduleResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_BackfillScheduleResponse.value, __goscriptValue)
}

export let xxx_messageInfo_UpdateScheduleRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_UpdateScheduleRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_UpdateScheduleRequest.value, __goscriptValue)
}

export let xxx_messageInfo_UpdateScheduleResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_UpdateScheduleResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_UpdateScheduleResponse.value, __goscriptValue)
}

function __goscriptInit0(): void {
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.CreateScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleRequest")), "uber.cadence.api.v1.CreateScheduleRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.CreateScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleResponse")), "uber.cadence.api.v1.CreateScheduleResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DescribeScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleRequest")), "uber.cadence.api.v1.DescribeScheduleRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DescribeScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleResponse")), "uber.cadence.api.v1.DescribeScheduleResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ListSchedulesRequest", /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesRequest")), "uber.cadence.api.v1.ListSchedulesRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ListSchedulesResponse", /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesResponse")), "uber.cadence.api.v1.ListSchedulesResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DeleteScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleRequest")), "uber.cadence.api.v1.DeleteScheduleRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DeleteScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleResponse")), "uber.cadence.api.v1.DeleteScheduleResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.PauseScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleRequest")), "uber.cadence.api.v1.PauseScheduleRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.PauseScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleResponse")), "uber.cadence.api.v1.PauseScheduleResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.UnpauseScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleRequest")), "uber.cadence.api.v1.UnpauseScheduleRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.UnpauseScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleResponse")), "uber.cadence.api.v1.UnpauseScheduleResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.BackfillScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleRequest")), "uber.cadence.api.v1.BackfillScheduleRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.BackfillScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleResponse")), "uber.cadence.api.v1.BackfillScheduleResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.UpdateScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleRequest")), "uber.cadence.api.v1.UpdateScheduleRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.UpdateScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleResponse")), "uber.cadence.api.v1.UpdateScheduleResponse")
}

function __goscriptInit1(): void {
	proto.RegisterFile("uber/cadence/api/v1/service_schedule.proto", fileDescriptor_e1236bf37818157b)
}

export let fileDescriptor_e1236bf37818157b: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 236, 87, 79, 111, 227, 196, 27, 150, 147, 52, 155, 188, 253, 181, 221, 159, 105, 18, 175, 145, 186, 197, 136, 85, 41, 91, 71, 45, 90, 137, 213, 158, 218, 45, 135, 74, 32, 194, 116, 123, 225, 18, 77, 236, 55, 233, 104, 109, 143, 241, 76, 34, 186, 87, 196, 119, 226, 194, 13, 36, 142, 220, 185, 160, 126, 0, 62, 3, 242, 216, 206, 54, 238, 56, 27, 118, 43, 196, 129, 227, 140, 159, 103, 230, 253, 243, 248, 121, 109, 216, 159, 142, 48, 233, 123, 212, 199, 200, 195, 62, 141, 89, 127, 118, 216, 23, 152, 204, 152, 135, 67, 225, 93, 162, 63, 13, 208, 141, 19, 46, 185, 249, 94, 138, 117, 115, 172, 75, 99, 230, 206, 14, 237, 135, 19, 206, 39, 1, 246, 21, 100, 52, 29, 247, 37, 11, 81, 72, 26, 198, 25, 203, 118, 180, 55, 44, 156, 108, 239, 234, 48, 30, 15, 67, 30, 101, 8, 231, 231, 58, 116, 158, 39, 72, 37, 158, 231, 84, 130, 223, 78, 81, 72, 179, 11, 77, 159, 135, 148, 69, 150, 177, 107, 236, 181, 73, 190, 50, 31, 194, 122, 113, 203, 144, 249, 86, 77, 61, 132, 98, 235, 204, 55, 159, 64, 67, 196, 232, 89, 245, 93, 99, 111, 253, 232, 3, 87, 147, 157, 91, 92, 118, 30, 163, 71, 20, 220, 124, 6, 77, 234, 73, 198, 35, 171, 161, 136, 31, 46, 37, 30, 43, 40, 201, 41, 230, 49, 180, 98, 30, 48, 143, 161, 176, 214, 20, 253, 163, 165, 244, 65, 14, 38, 115, 154, 121, 0, 141, 16, 67, 110, 53, 21, 253, 129, 150, 254, 37, 134, 156, 40, 152, 73, 224, 255, 2, 105, 226, 93, 14, 169, 148, 9, 27, 77, 37, 10, 235, 222, 178, 171, 21, 250, 120, 14, 38, 247, 69, 105, 199, 252, 12, 214, 132, 164, 18, 173, 150, 58, 199, 89, 94, 186, 20, 73, 50, 130, 243, 20, 186, 229, 46, 138, 152, 71, 2, 203, 237, 50, 202, 237, 114, 8, 244, 78, 81, 120, 9, 27, 221, 153, 4, 156, 95, 234, 96, 221, 62, 52, 143, 168, 208, 135, 241, 182, 250, 168, 189, 155, 62, 234, 111, 167, 143, 121, 115, 26, 127, 179, 57, 105, 194, 44, 26, 243, 92, 152, 203, 19, 62, 139, 198, 156, 40, 248, 191, 64, 144, 142, 128, 237, 47, 152, 144, 69, 112, 226, 77, 194, 120, 31, 218, 49, 157, 224, 80, 176, 87, 168, 218, 180, 70, 90, 233, 198, 57, 123, 133, 230, 35, 216, 138, 240, 59, 57, 84, 8, 201, 95, 98, 164, 90, 241, 63, 178, 145, 110, 15, 232, 4, 95, 164, 155, 206, 15, 6, 116, 74, 183, 230, 202, 57, 133, 118, 33, 50, 97, 25, 187, 245, 189, 245, 163, 71, 75, 171, 153, 30, 243, 121, 36, 147, 43, 242, 154, 168, 139, 163, 166, 139, 99, 0, 157, 83, 12, 240, 238, 156, 209, 177, 160, 91, 62, 49, 203, 204, 249, 222, 128, 237, 1, 157, 138, 187, 115, 225, 46, 52, 19, 164, 130, 103, 69, 110, 147, 124, 101, 218, 208, 98, 62, 70, 146, 201, 43, 165, 228, 54, 153, 175, 157, 30, 116, 74, 65, 228, 225, 253, 100, 64, 247, 34, 138, 255, 145, 0, 9, 108, 121, 84, 122, 151, 195, 105, 60, 84, 47, 95, 22, 231, 230, 209, 254, 210, 86, 63, 79, 57, 23, 177, 122, 113, 175, 200, 134, 119, 115, 233, 60, 128, 222, 173, 240, 243, 212, 126, 172, 65, 239, 132, 122, 47, 199, 44, 8, 238, 44, 183, 167, 0, 66, 210, 68, 14, 211, 161, 157, 27, 142, 237, 102, 19, 221, 45, 38, 186, 251, 162, 152, 232, 164, 173, 208, 233, 218, 124, 2, 45, 140, 252, 140, 216, 120, 35, 241, 30, 70, 190, 162, 125, 13, 155, 124, 134, 73, 64, 231, 69, 91, 91, 161, 104, 95, 101, 148, 162, 104, 252, 230, 50, 205, 114, 148, 23, 38, 205, 178, 153, 101, 89, 108, 157, 249, 142, 13, 214, 237, 202, 229, 101, 253, 189, 6, 157, 139, 216, 255, 239, 187, 66, 239, 203, 205, 119, 243, 101, 11, 186, 229, 226, 102, 117, 63, 250, 179, 9, 235, 243, 92, 6, 103, 38, 131, 205, 197, 15, 3, 83, 175, 8, 237, 55, 160, 253, 201, 74, 216, 220, 157, 57, 220, 47, 207, 124, 243, 177, 246, 128, 138, 239, 13, 251, 96, 69, 116, 126, 225, 24, 54, 22, 230, 132, 249, 177, 150, 175, 155, 96, 246, 254, 42, 208, 252, 30, 6, 155, 139, 182, 93, 81, 67, 237, 180, 168, 168, 161, 126, 14, 164, 41, 45, 56, 112, 69, 74, 186, 81, 81, 145, 146, 214, 208, 205, 0, 182, 74, 134, 104, 234, 227, 212, 187, 190, 253, 120, 53, 240, 107, 101, 148, 141, 162, 66, 25, 21, 78, 92, 161, 140, 42, 247, 73, 59, 182, 248, 126, 84, 116, 76, 235, 80, 21, 29, 211, 191, 112, 39, 241, 175, 215, 59, 198, 111, 215, 59, 198, 31, 215, 59, 6, 244, 60, 30, 234, 216, 39, 219, 115, 103, 202, 254, 1, 7, 169, 151, 15, 140, 111, 14, 39, 76, 94, 78, 71, 174, 199, 195, 254, 205, 159, 181, 3, 230, 7, 253, 9, 207, 126, 255, 242, 63, 183, 103, 52, 102, 179, 195, 81, 83, 237, 125, 250, 87, 0, 0, 0, 255, 255, 51, 161, 82, 61, 99, 14, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_e1236bf37818157b(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_e1236bf37818157b = __goscriptValue
}

export function encodeVarintServiceSchedule(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovServiceSchedule(v))
	let base = offset
	for (let __goscriptSliceWindow17 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow17.backing as any[])[$.windowSlot(__goscriptSliceWindow17, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export function sovServiceSchedule(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozServiceSchedule(x: bigint): number {
	let n: number = 0
	return sovServiceSchedule($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export function skipServiceSchedule(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow18 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowServiceSchedule]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow18.backing as any[])[$.windowSlot(__goscriptSliceWindow18, iNdEx)] as number)
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
						return [0, ErrIntOverflowServiceSchedule]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow18.backing as any[])[$.windowSlot(__goscriptSliceWindow18, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowServiceSchedule]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow18.backing as any[])[$.windowSlot(__goscriptSliceWindow18, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthServiceSchedule]
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
					return [0, ErrUnexpectedEndOfGroupServiceSchedule]
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
			return [0, ErrInvalidLengthServiceSchedule]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthServiceSchedule: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthServiceSchedule(__goscriptValue: $.GoError): void {
	ErrInvalidLengthServiceSchedule = __goscriptValue
}

export let ErrIntOverflowServiceSchedule: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowServiceSchedule(__goscriptValue: $.GoError): void {
	ErrIntOverflowServiceSchedule = __goscriptValue
}

export let ErrUnexpectedEndOfGroupServiceSchedule: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupServiceSchedule(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupServiceSchedule = __goscriptValue
}

export { __goscriptInit0 }

export { __goscriptInit1 }
