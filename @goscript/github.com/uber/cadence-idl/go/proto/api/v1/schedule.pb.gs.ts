// Generated file based on schedule.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as types from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"

import * as __goscript_common_pb from "./common.pb.gs.ts"

import * as __goscript_tasklist_pb from "./tasklist.pb.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "./common.pb.gs.ts"
import "./tasklist.pb.gs.ts"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.ScheduleOverlapPolicy", "apiv1.ScheduleCatchUpPolicy", "apiv1.ScheduleSpec", "apiv1.ScheduleAction", "apiv1.ScheduleAction_StartWorkflowAction", "apiv1.SchedulePolicies", "apiv1.SchedulePauseInfo", "apiv1.ScheduleState", "apiv1.BackfillInfo", "apiv1.ScheduleInfo", "apiv1.ScheduleListEntry"])

export type ScheduleOverlapPolicy = number

$.registerNamedValueType(
	"apiv1.ScheduleOverlapPolicy",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (ScheduleOverlapPolicy_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ScheduleOverlapPolicy_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.ScheduleOverlapPolicy",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (ScheduleOverlapPolicy_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ScheduleOverlapPolicy_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type ScheduleCatchUpPolicy = number

$.registerNamedValueType(
	"apiv1.ScheduleCatchUpPolicy",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (ScheduleCatchUpPolicy_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ScheduleCatchUpPolicy_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.ScheduleCatchUpPolicy",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (ScheduleCatchUpPolicy_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ScheduleCatchUpPolicy_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class ScheduleSpec {
	// Standard cron expression (e.g., "0 6 * * *").
	// Timezone can be embedded using CRON_TZ prefix (e.g., "CRON_TZ=America/Los_Angeles 0 6 * * *").
	// Defaults to UTC if no timezone specified.
	public get CronExpression(): string {
		return this._fields.CronExpression
	}

	public set CronExpression(value: string) {
		this._fields.CronExpression = value
	}

	// Earliest time the schedule should trigger. If not set, starts immediately.
	public get StartTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.StartTime
	}

	public set StartTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.StartTime = value
	}

	// Latest time the schedule should trigger. If not set, runs indefinitely.
	public get EndTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.EndTime
	}

	public set EndTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.EndTime = value
	}

	// Random jitter applied to each trigger time to spread load.
	// The actual trigger time will be offset by a random duration in [0, jitter).
	public get Jitter(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.Jitter
	}

	public set Jitter(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.Jitter = value
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
		CronExpression: string
		StartTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		EndTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		Jitter: types.Duration | $.VarRef<types.Duration> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{CronExpression?: string, StartTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, EndTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, Jitter?: types.Duration | $.VarRef<types.Duration> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			CronExpression: init?.CronExpression ?? ("" as string),
			StartTime: init?.StartTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			EndTime: init?.EndTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			Jitter: init?.Jitter ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScheduleSpec {
		return new ScheduleSpec(this, true)
	}

	public __goscriptAssign(source: ScheduleSpec): void {
		const target = this._fields
		const values = source._fields
		target.CronExpression = values.CronExpression
		target.StartTime = values.StartTime
		target.EndTime = values.EndTime
		target.Jitter = values.Jitter
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_7fe71309dc9555dc, $.arrayToSlice<number>([0])]
	}

	public GetCronExpression(): string {
		const m: ScheduleSpec | $.VarRef<ScheduleSpec> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleSpec>(m).CronExpression
		}
		return ""
	}

	public GetEndTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: ScheduleSpec | $.VarRef<ScheduleSpec> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleSpec>(m).EndTime
		}
		return null
	}

	public GetJitter(): types.Duration | $.VarRef<types.Duration> | null {
		const m: ScheduleSpec | $.VarRef<ScheduleSpec> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleSpec>(m).Jitter
		}
		return null
	}

	public GetStartTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: ScheduleSpec | $.VarRef<ScheduleSpec> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleSpec>(m).StartTime
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ScheduleSpec | $.VarRef<ScheduleSpec> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleSpec).Size() : ScheduleSpec.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple0: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleSpec).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScheduleSpec.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScheduleSpec | $.VarRef<ScheduleSpec> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleSpec).Size() : ScheduleSpec.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleSpec).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScheduleSpec.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScheduleSpec | $.VarRef<ScheduleSpec> | null = this;
		const m$: ScheduleSpec = m == null ? $.pointerTarget<ScheduleSpec>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleSpec>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ScheduleSpec).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ScheduleSpec).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScheduleSpec).XXX_unrecognized)
		}
		if ((m$ as ScheduleSpec).Jitter != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as ScheduleSpec).Jitter, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as ScheduleSpec).EndTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as ScheduleSpec).EndTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as ScheduleSpec).StartTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as ScheduleSpec).StartTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as ScheduleSpec).CronExpression) > 0) {
			i = i - ($.stringLen((m$ as ScheduleSpec).CronExpression))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScheduleSpec).CronExpression)
			i = encodeVarintSchedule(dAtA, i, $.uint64($.stringLen((m$ as ScheduleSpec).CronExpression)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ScheduleSpec | $.VarRef<ScheduleSpec> | null = this;
		$.assignStruct($.pointerValue<ScheduleSpec>(m), $.markAsStructValue(new ScheduleSpec()))
	}

	public Size(): number {
		const m: ScheduleSpec | $.VarRef<ScheduleSpec> | null = this;
		let n: number = 0
		const m$: ScheduleSpec = m == null ? $.pointerTarget<ScheduleSpec>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleSpec>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ScheduleSpec).CronExpression)
		if (l > 0) {
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleSpec).StartTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as ScheduleSpec).StartTime)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleSpec).EndTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as ScheduleSpec).EndTime)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleSpec).Jitter != null) {
			l = types.Duration.prototype.Size.call((m$ as ScheduleSpec).Jitter)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleSpec).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ScheduleSpec).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ScheduleSpec | $.VarRef<ScheduleSpec> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleSpec", /* @__PURE__ */ $.pointerType("apiv1.ScheduleSpec")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ScheduleSpec | $.VarRef<ScheduleSpec> | null = this;
		const m$: ScheduleSpec = m == null ? $.pointerTarget<ScheduleSpec>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleSpec>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowSchedule
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
				return fmt.Errorf("proto: ScheduleSpec: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ScheduleSpec: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field CronExpression", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScheduleSpec).CronExpression = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleSpec).StartTime == null) {
						;(m$ as ScheduleSpec).StartTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as ScheduleSpec).StartTime, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field EndTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleSpec).EndTime == null) {
						;(m$ as ScheduleSpec).EndTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as ScheduleSpec).EndTime, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Jitter", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleSpec).Jitter == null) {
						;(m$ as ScheduleSpec).Jitter = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as ScheduleSpec).Jitter, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScheduleSpec).XXX_unrecognized = $.appendSlice((m$ as ScheduleSpec).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ScheduleSpec | $.VarRef<ScheduleSpec> | null = this;
		await xxx_messageInfo_ScheduleSpec.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleSpec", /* @__PURE__ */ $.pointerType("apiv1.ScheduleSpec")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ScheduleSpec | $.VarRef<ScheduleSpec> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ScheduleSpec.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleSpec", /* @__PURE__ */ $.pointerType("apiv1.ScheduleSpec")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleSpec).MarshalToSizedBuffer(b) : ScheduleSpec.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ScheduleSpec | $.VarRef<ScheduleSpec> | null = this;
		await xxx_messageInfo_ScheduleSpec.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleSpec", /* @__PURE__ */ $.pointerType("apiv1.ScheduleSpec")), src)
	}

	public XXX_Size(): number {
		const m: ScheduleSpec | $.VarRef<ScheduleSpec> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleSpec).Size() : ScheduleSpec.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ScheduleSpec | $.VarRef<ScheduleSpec> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleSpec).Unmarshal(b) : ScheduleSpec.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ScheduleSpec",
		() => new ScheduleSpec(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetCronExpression", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetEndTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetJitter", [], [/* @__PURE__ */ $.pointerType("types.Duration")], true), $.methodSignature("GetStartTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ScheduleSpec,
		() => [/* @__PURE__ */ $.structField("CronExpression", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=cron_expression,json=cronExpression,proto3\" json:\"cron_expression,omitempty\"" }), /* @__PURE__ */ $.structField("StartTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=start_time,json=startTime,proto3\" json:\"start_time,omitempty\"" }), /* @__PURE__ */ $.structField("EndTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=end_time,json=endTime,proto3\" json:\"end_time,omitempty\"" }), /* @__PURE__ */ $.structField("Jitter", /* @__PURE__ */ $.pointerType("types.Duration"), [3], 32, true, { tag: "protobuf:\"bytes,4,opt,name=jitter,proto3\" json:\"jitter,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [4], 40, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 40, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [6], 64, true, { tag: "json:\"-\"" })]
	)
}

export class ScheduleAction {
	// Start a new workflow execution on each trigger.
	public get StartWorkflow(): ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null {
		return this._fields.StartWorkflow
	}

	public set StartWorkflow(value: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null) {
		this._fields.StartWorkflow = value
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
		StartWorkflow: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{StartWorkflow?: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			StartWorkflow: init?.StartWorkflow ?? (null! as ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScheduleAction {
		return new ScheduleAction(this, true)
	}

	public __goscriptAssign(source: ScheduleAction): void {
		const target = this._fields
		const values = source._fields
		target.StartWorkflow = values.StartWorkflow
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_7fe71309dc9555dc, $.arrayToSlice<number>([1])]
	}

	public GetStartWorkflow(): ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null {
		const m: ScheduleAction | $.VarRef<ScheduleAction> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleAction>(m).StartWorkflow
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ScheduleAction | $.VarRef<ScheduleAction> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleAction).Size() : ScheduleAction.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple1: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleAction).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScheduleAction.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScheduleAction | $.VarRef<ScheduleAction> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleAction).Size() : ScheduleAction.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleAction).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScheduleAction.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScheduleAction | $.VarRef<ScheduleAction> | null = this;
		const m$: ScheduleAction = m == null ? $.pointerTarget<ScheduleAction>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleAction>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ScheduleAction).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ScheduleAction).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScheduleAction).XXX_unrecognized)
		}
		if ((m$ as ScheduleAction).StartWorkflow != null) {
			{
				let [size, err] = ScheduleAction_StartWorkflowAction.prototype.MarshalToSizedBuffer.call((m$ as ScheduleAction).StartWorkflow, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ScheduleAction | $.VarRef<ScheduleAction> | null = this;
		$.assignStruct($.pointerValue<ScheduleAction>(m), $.markAsStructValue(new ScheduleAction()))
	}

	public Size(): number {
		const m: ScheduleAction | $.VarRef<ScheduleAction> | null = this;
		let n: number = 0
		const m$: ScheduleAction = m == null ? $.pointerTarget<ScheduleAction>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleAction>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as ScheduleAction).StartWorkflow != null) {
			l = ScheduleAction_StartWorkflowAction.prototype.Size.call((m$ as ScheduleAction).StartWorkflow)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleAction).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ScheduleAction).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ScheduleAction | $.VarRef<ScheduleAction> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleAction", /* @__PURE__ */ $.pointerType("apiv1.ScheduleAction")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ScheduleAction | $.VarRef<ScheduleAction> | null = this;
		const m$: ScheduleAction = m == null ? $.pointerTarget<ScheduleAction>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleAction>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowSchedule
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
				return fmt.Errorf("proto: ScheduleAction: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ScheduleAction: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartWorkflow", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleAction).StartWorkflow == null) {
						;(m$ as ScheduleAction).StartWorkflow = new ScheduleAction_StartWorkflowAction()
					}
					{
						let err = ScheduleAction_StartWorkflowAction.prototype.Unmarshal.call((m$ as ScheduleAction).StartWorkflow, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScheduleAction).XXX_unrecognized = $.appendSlice((m$ as ScheduleAction).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ScheduleAction | $.VarRef<ScheduleAction> | null = this;
		await xxx_messageInfo_ScheduleAction.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleAction", /* @__PURE__ */ $.pointerType("apiv1.ScheduleAction")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ScheduleAction | $.VarRef<ScheduleAction> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ScheduleAction.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleAction", /* @__PURE__ */ $.pointerType("apiv1.ScheduleAction")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleAction).MarshalToSizedBuffer(b) : ScheduleAction.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ScheduleAction | $.VarRef<ScheduleAction> | null = this;
		await xxx_messageInfo_ScheduleAction.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleAction", /* @__PURE__ */ $.pointerType("apiv1.ScheduleAction")), src)
	}

	public XXX_Size(): number {
		const m: ScheduleAction | $.VarRef<ScheduleAction> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleAction).Size() : ScheduleAction.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ScheduleAction | $.VarRef<ScheduleAction> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleAction).Unmarshal(b) : ScheduleAction.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ScheduleAction",
		() => new ScheduleAction(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetStartWorkflow", [], [/* @__PURE__ */ $.pointerType("apiv1.ScheduleAction_StartWorkflowAction")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ScheduleAction,
		() => [/* @__PURE__ */ $.structField("StartWorkflow", /* @__PURE__ */ $.pointerType("apiv1.ScheduleAction_StartWorkflowAction"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=start_workflow,json=startWorkflow,proto3\" json:\"start_workflow,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [1], 8, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 8, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [3], 32, true, { tag: "json:\"-\"" })]
	)
}

export class ScheduleAction_StartWorkflowAction {
	// Workflow type to start.
	public get WorkflowType(): __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null {
		return this._fields.WorkflowType
	}

	public set WorkflowType(value: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null) {
		this._fields.WorkflowType = value
	}

	// Task list for the target workflow.
	public get TaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		return this._fields.TaskList
	}

	public set TaskList(value: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null) {
		this._fields.TaskList = value
	}

	// Input payload for the target workflow.
	public get Input(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.Input
	}

	public set Input(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.Input = value
	}

	// Prefix for generating the target workflow ID.
	public get WorkflowIdPrefix(): string {
		return this._fields.WorkflowIdPrefix
	}

	public set WorkflowIdPrefix(value: string) {
		this._fields.WorkflowIdPrefix = value
	}

	// Execution timeout for the target workflow.
	public get ExecutionStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.ExecutionStartToCloseTimeout
	}

	public set ExecutionStartToCloseTimeout(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.ExecutionStartToCloseTimeout = value
	}

	// Decision task timeout for the target workflow.
	public get TaskStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.TaskStartToCloseTimeout
	}

	public set TaskStartToCloseTimeout(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.TaskStartToCloseTimeout = value
	}

	// Retry policy for the target workflow.
	public get RetryPolicy(): __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null {
		return this._fields.RetryPolicy
	}

	public set RetryPolicy(value: __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null) {
		this._fields.RetryPolicy = value
	}

	// Additional memo data to attach to the target workflow.
	public get Memo(): __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null {
		return this._fields.Memo
	}

	public set Memo(value: __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null) {
		this._fields.Memo = value
	}

	// Search attributes to attach to the target workflow.
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
		WorkflowType: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null
		TaskList: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null
		Input: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		WorkflowIdPrefix: string
		ExecutionStartToCloseTimeout: types.Duration | $.VarRef<types.Duration> | null
		TaskStartToCloseTimeout: types.Duration | $.VarRef<types.Duration> | null
		RetryPolicy: __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null
		Memo: __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null
		SearchAttributes: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{WorkflowType?: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null, TaskList?: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null, Input?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, WorkflowIdPrefix?: string, ExecutionStartToCloseTimeout?: types.Duration | $.VarRef<types.Duration> | null, TaskStartToCloseTimeout?: types.Duration | $.VarRef<types.Duration> | null, RetryPolicy?: __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null, Memo?: __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null, SearchAttributes?: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			WorkflowType: init?.WorkflowType ?? (null! as __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null),
			TaskList: init?.TaskList ?? (null! as __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null),
			Input: init?.Input ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			WorkflowIdPrefix: init?.WorkflowIdPrefix ?? ("" as string),
			ExecutionStartToCloseTimeout: init?.ExecutionStartToCloseTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			TaskStartToCloseTimeout: init?.TaskStartToCloseTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			RetryPolicy: init?.RetryPolicy ?? (null! as __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null),
			Memo: init?.Memo ?? (null! as __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null),
			SearchAttributes: init?.SearchAttributes ?? (null! as __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScheduleAction_StartWorkflowAction {
		return new ScheduleAction_StartWorkflowAction(this, true)
	}

	public __goscriptAssign(source: ScheduleAction_StartWorkflowAction): void {
		const target = this._fields
		const values = source._fields
		target.WorkflowType = values.WorkflowType
		target.TaskList = values.TaskList
		target.Input = values.Input
		target.WorkflowIdPrefix = values.WorkflowIdPrefix
		target.ExecutionStartToCloseTimeout = values.ExecutionStartToCloseTimeout
		target.TaskStartToCloseTimeout = values.TaskStartToCloseTimeout
		target.RetryPolicy = values.RetryPolicy
		target.Memo = values.Memo
		target.SearchAttributes = values.SearchAttributes
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_7fe71309dc9555dc, $.arrayToSlice<number>([1, 0])]
	}

	public GetExecutionStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleAction_StartWorkflowAction>(m).ExecutionStartToCloseTimeout
		}
		return null
	}

	public GetInput(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleAction_StartWorkflowAction>(m).Input
		}
		return null
	}

	public GetMemo(): __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleAction_StartWorkflowAction>(m).Memo
		}
		return null
	}

	public GetRetryPolicy(): __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleAction_StartWorkflowAction>(m).RetryPolicy
		}
		return null
	}

	public GetSearchAttributes(): __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleAction_StartWorkflowAction>(m).SearchAttributes
		}
		return null
	}

	public GetTaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleAction_StartWorkflowAction>(m).TaskList
		}
		return null
	}

	public GetTaskStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleAction_StartWorkflowAction>(m).TaskStartToCloseTimeout
		}
		return null
	}

	public GetWorkflowIdPrefix(): string {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleAction_StartWorkflowAction>(m).WorkflowIdPrefix
		}
		return ""
	}

	public GetWorkflowType(): __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleAction_StartWorkflowAction>(m).WorkflowType
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleAction_StartWorkflowAction).Size() : ScheduleAction_StartWorkflowAction.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple2: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleAction_StartWorkflowAction).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScheduleAction_StartWorkflowAction.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleAction_StartWorkflowAction).Size() : ScheduleAction_StartWorkflowAction.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleAction_StartWorkflowAction).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScheduleAction_StartWorkflowAction.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		const m$: ScheduleAction_StartWorkflowAction = m == null ? $.pointerTarget<ScheduleAction_StartWorkflowAction>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleAction_StartWorkflowAction>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ScheduleAction_StartWorkflowAction).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ScheduleAction_StartWorkflowAction).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScheduleAction_StartWorkflowAction).XXX_unrecognized)
		}
		if ((m$ as ScheduleAction_StartWorkflowAction).SearchAttributes != null) {
			{
				let [size, err] = __goscript_common_pb.SearchAttributes.prototype.MarshalToSizedBuffer.call((m$ as ScheduleAction_StartWorkflowAction).SearchAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x4a
		}
		if ((m$ as ScheduleAction_StartWorkflowAction).Memo != null) {
			{
				let [size, err] = __goscript_common_pb.Memo.prototype.MarshalToSizedBuffer.call((m$ as ScheduleAction_StartWorkflowAction).Memo, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x42
		}
		if ((m$ as ScheduleAction_StartWorkflowAction).RetryPolicy != null) {
			{
				let [size, err] = __goscript_common_pb.RetryPolicy.prototype.MarshalToSizedBuffer.call((m$ as ScheduleAction_StartWorkflowAction).RetryPolicy, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x3a
		}
		if ((m$ as ScheduleAction_StartWorkflowAction).TaskStartToCloseTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as ScheduleAction_StartWorkflowAction).TaskStartToCloseTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		if ((m$ as ScheduleAction_StartWorkflowAction).ExecutionStartToCloseTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as ScheduleAction_StartWorkflowAction).ExecutionStartToCloseTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ($.stringLen((m$ as ScheduleAction_StartWorkflowAction).WorkflowIdPrefix) > 0) {
			i = i - ($.stringLen((m$ as ScheduleAction_StartWorkflowAction).WorkflowIdPrefix))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScheduleAction_StartWorkflowAction).WorkflowIdPrefix)
			i = encodeVarintSchedule(dAtA, i, $.uint64($.stringLen((m$ as ScheduleAction_StartWorkflowAction).WorkflowIdPrefix)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as ScheduleAction_StartWorkflowAction).Input != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as ScheduleAction_StartWorkflowAction).Input, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as ScheduleAction_StartWorkflowAction).TaskList != null) {
			{
				let [size, err] = __goscript_tasklist_pb.TaskList.prototype.MarshalToSizedBuffer.call((m$ as ScheduleAction_StartWorkflowAction).TaskList, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as ScheduleAction_StartWorkflowAction).WorkflowType != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowType.prototype.MarshalToSizedBuffer.call((m$ as ScheduleAction_StartWorkflowAction).WorkflowType, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		$.assignStruct($.pointerValue<ScheduleAction_StartWorkflowAction>(m), $.markAsStructValue(new ScheduleAction_StartWorkflowAction()))
	}

	public Size(): number {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		let n: number = 0
		const m$: ScheduleAction_StartWorkflowAction = m == null ? $.pointerTarget<ScheduleAction_StartWorkflowAction>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleAction_StartWorkflowAction>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as ScheduleAction_StartWorkflowAction).WorkflowType != null) {
			l = __goscript_common_pb.WorkflowType.prototype.Size.call((m$ as ScheduleAction_StartWorkflowAction).WorkflowType)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleAction_StartWorkflowAction).TaskList != null) {
			l = __goscript_tasklist_pb.TaskList.prototype.Size.call((m$ as ScheduleAction_StartWorkflowAction).TaskList)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleAction_StartWorkflowAction).Input != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as ScheduleAction_StartWorkflowAction).Input)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		l = $.stringLen((m$ as ScheduleAction_StartWorkflowAction).WorkflowIdPrefix)
		if (l > 0) {
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleAction_StartWorkflowAction).ExecutionStartToCloseTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as ScheduleAction_StartWorkflowAction).ExecutionStartToCloseTimeout)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleAction_StartWorkflowAction).TaskStartToCloseTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as ScheduleAction_StartWorkflowAction).TaskStartToCloseTimeout)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleAction_StartWorkflowAction).RetryPolicy != null) {
			l = __goscript_common_pb.RetryPolicy.prototype.Size.call((m$ as ScheduleAction_StartWorkflowAction).RetryPolicy)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleAction_StartWorkflowAction).Memo != null) {
			l = __goscript_common_pb.Memo.prototype.Size.call((m$ as ScheduleAction_StartWorkflowAction).Memo)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleAction_StartWorkflowAction).SearchAttributes != null) {
			l = __goscript_common_pb.SearchAttributes.prototype.Size.call((m$ as ScheduleAction_StartWorkflowAction).SearchAttributes)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleAction_StartWorkflowAction).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ScheduleAction_StartWorkflowAction).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleAction_StartWorkflowAction", /* @__PURE__ */ $.pointerType("apiv1.ScheduleAction_StartWorkflowAction")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		const m$: ScheduleAction_StartWorkflowAction = m == null ? $.pointerTarget<ScheduleAction_StartWorkflowAction>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleAction_StartWorkflowAction>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowSchedule
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
				return fmt.Errorf("proto: StartWorkflowAction: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: StartWorkflowAction: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowType", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleAction_StartWorkflowAction).WorkflowType == null) {
						;(m$ as ScheduleAction_StartWorkflowAction).WorkflowType = new __goscript_common_pb.WorkflowType()
					}
					{
						let err = __goscript_common_pb.WorkflowType.prototype.Unmarshal.call((m$ as ScheduleAction_StartWorkflowAction).WorkflowType, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field TaskList", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleAction_StartWorkflowAction).TaskList == null) {
						;(m$ as ScheduleAction_StartWorkflowAction).TaskList = new __goscript_tasklist_pb.TaskList()
					}
					{
						let err = __goscript_tasklist_pb.TaskList.prototype.Unmarshal.call((m$ as ScheduleAction_StartWorkflowAction).TaskList, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Input", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleAction_StartWorkflowAction).Input == null) {
						;(m$ as ScheduleAction_StartWorkflowAction).Input = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as ScheduleAction_StartWorkflowAction).Input, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowIdPrefix", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScheduleAction_StartWorkflowAction).WorkflowIdPrefix = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ExecutionStartToCloseTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleAction_StartWorkflowAction).ExecutionStartToCloseTimeout == null) {
						;(m$ as ScheduleAction_StartWorkflowAction).ExecutionStartToCloseTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as ScheduleAction_StartWorkflowAction).ExecutionStartToCloseTimeout, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field TaskStartToCloseTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleAction_StartWorkflowAction).TaskStartToCloseTimeout == null) {
						;(m$ as ScheduleAction_StartWorkflowAction).TaskStartToCloseTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as ScheduleAction_StartWorkflowAction).TaskStartToCloseTimeout, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field RetryPolicy", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleAction_StartWorkflowAction).RetryPolicy == null) {
						;(m$ as ScheduleAction_StartWorkflowAction).RetryPolicy = new __goscript_common_pb.RetryPolicy()
					}
					{
						let err = __goscript_common_pb.RetryPolicy.prototype.Unmarshal.call((m$ as ScheduleAction_StartWorkflowAction).RetryPolicy, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Memo", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleAction_StartWorkflowAction).Memo == null) {
						;(m$ as ScheduleAction_StartWorkflowAction).Memo = new __goscript_common_pb.Memo()
					}
					{
						let err = __goscript_common_pb.Memo.prototype.Unmarshal.call((m$ as ScheduleAction_StartWorkflowAction).Memo, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field SearchAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleAction_StartWorkflowAction).SearchAttributes == null) {
						;(m$ as ScheduleAction_StartWorkflowAction).SearchAttributes = new __goscript_common_pb.SearchAttributes()
					}
					{
						let err = __goscript_common_pb.SearchAttributes.prototype.Unmarshal.call((m$ as ScheduleAction_StartWorkflowAction).SearchAttributes, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScheduleAction_StartWorkflowAction).XXX_unrecognized = $.appendSlice((m$ as ScheduleAction_StartWorkflowAction).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		await xxx_messageInfo_ScheduleAction_StartWorkflowAction.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleAction_StartWorkflowAction", /* @__PURE__ */ $.pointerType("apiv1.ScheduleAction_StartWorkflowAction")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ScheduleAction_StartWorkflowAction.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleAction_StartWorkflowAction", /* @__PURE__ */ $.pointerType("apiv1.ScheduleAction_StartWorkflowAction")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleAction_StartWorkflowAction).MarshalToSizedBuffer(b) : ScheduleAction_StartWorkflowAction.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		await xxx_messageInfo_ScheduleAction_StartWorkflowAction.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleAction_StartWorkflowAction", /* @__PURE__ */ $.pointerType("apiv1.ScheduleAction_StartWorkflowAction")), src)
	}

	public XXX_Size(): number {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleAction_StartWorkflowAction).Size() : ScheduleAction_StartWorkflowAction.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ScheduleAction_StartWorkflowAction | $.VarRef<ScheduleAction_StartWorkflowAction> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleAction_StartWorkflowAction).Unmarshal(b) : ScheduleAction_StartWorkflowAction.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ScheduleAction_StartWorkflowAction",
		() => new ScheduleAction_StartWorkflowAction(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetExecutionStartToCloseTimeout", [], [/* @__PURE__ */ $.pointerType("types.Duration")], true), $.methodSignature("GetInput", [], [/* @__PURE__ */ $.pointerType("apiv1.Payload")], true), $.methodSignature("GetMemo", [], [/* @__PURE__ */ $.pointerType("apiv1.Memo")], true), $.methodSignature("GetRetryPolicy", [], [/* @__PURE__ */ $.pointerType("apiv1.RetryPolicy")], true), $.methodSignature("GetSearchAttributes", [], [/* @__PURE__ */ $.pointerType("apiv1.SearchAttributes")], true), $.methodSignature("GetTaskList", [], [/* @__PURE__ */ $.pointerType("apiv1.TaskList")], true), $.methodSignature("GetTaskStartToCloseTimeout", [], [/* @__PURE__ */ $.pointerType("types.Duration")], true), $.methodSignature("GetWorkflowIdPrefix", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetWorkflowType", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowType")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ScheduleAction_StartWorkflowAction,
		() => [/* @__PURE__ */ $.structField("WorkflowType", /* @__PURE__ */ $.pointerType("apiv1.WorkflowType"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=workflow_type,json=workflowType,proto3\" json:\"workflow_type,omitempty\"" }), /* @__PURE__ */ $.structField("TaskList", /* @__PURE__ */ $.pointerType("apiv1.TaskList"), [1], 8, true, { tag: "protobuf:\"bytes,2,opt,name=task_list,json=taskList,proto3\" json:\"task_list,omitempty\"" }), /* @__PURE__ */ $.structField("Input", /* @__PURE__ */ $.pointerType("apiv1.Payload"), [2], 16, true, { tag: "protobuf:\"bytes,3,opt,name=input,proto3\" json:\"input,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowIdPrefix", /* @__PURE__ */ $.basicType("string"), [3], 24, true, { tag: "protobuf:\"bytes,4,opt,name=workflow_id_prefix,json=workflowIdPrefix,proto3\" json:\"workflow_id_prefix,omitempty\"" }), /* @__PURE__ */ $.structField("ExecutionStartToCloseTimeout", /* @__PURE__ */ $.pointerType("types.Duration"), [4], 40, true, { tag: "protobuf:\"bytes,5,opt,name=execution_start_to_close_timeout,json=executionStartToCloseTimeout,proto3\" json:\"execution_start_to_close_timeout,omitempty\"" }), /* @__PURE__ */ $.structField("TaskStartToCloseTimeout", /* @__PURE__ */ $.pointerType("types.Duration"), [5], 48, true, { tag: "protobuf:\"bytes,6,opt,name=task_start_to_close_timeout,json=taskStartToCloseTimeout,proto3\" json:\"task_start_to_close_timeout,omitempty\"" }), /* @__PURE__ */ $.structField("RetryPolicy", /* @__PURE__ */ $.pointerType("apiv1.RetryPolicy"), [6], 56, true, { tag: "protobuf:\"bytes,7,opt,name=retry_policy,json=retryPolicy,proto3\" json:\"retry_policy,omitempty\"" }), /* @__PURE__ */ $.structField("Memo", /* @__PURE__ */ $.pointerType("apiv1.Memo"), [7], 64, true, { tag: "protobuf:\"bytes,8,opt,name=memo,proto3\" json:\"memo,omitempty\"" }), /* @__PURE__ */ $.structField("SearchAttributes", /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes"), [8], 72, true, { tag: "protobuf:\"bytes,9,opt,name=search_attributes,json=searchAttributes,proto3\" json:\"search_attributes,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [9], 80, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [10], 80, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [11], 104, true, { tag: "json:\"-\"" })]
	)
}

export class SchedulePolicies {
	// Defines what happens when a new run is scheduled while the previous is still running.
	public get OverlapPolicy(): ScheduleOverlapPolicy {
		return this._fields.OverlapPolicy
	}

	public set OverlapPolicy(value: ScheduleOverlapPolicy) {
		this._fields.OverlapPolicy = value
	}

	// Defines how missed runs are handled on unpause or system recovery.
	public get CatchUpPolicy(): ScheduleCatchUpPolicy {
		return this._fields.CatchUpPolicy
	}

	public set CatchUpPolicy(value: ScheduleCatchUpPolicy) {
		this._fields.CatchUpPolicy = value
	}

	// Maximum time to look back for missed runs. Runs older than this window are skipped.
	// If not set, the server uses a default (configurable via dynamic config).
	public get CatchUpWindow(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.CatchUpWindow
	}

	public set CatchUpWindow(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.CatchUpWindow = value
	}

	// If true, pause the schedule when a triggered workflow fails.
	public get PauseOnFailure(): boolean {
		return this._fields.PauseOnFailure
	}

	public set PauseOnFailure(value: boolean) {
		this._fields.PauseOnFailure = value
	}

	// Maximum number of runs to buffer when overlap_policy is BUFFER.
	// 0 means unlimited. Only used with SCHEDULE_OVERLAP_POLICY_BUFFER.
	public get BufferLimit(): number {
		return this._fields.BufferLimit
	}

	public set BufferLimit(value: number) {
		this._fields.BufferLimit = value
	}

	// Maximum number of runs executing concurrently when overlap_policy is CONCURRENT.
	// 0 means unlimited. Only used with SCHEDULE_OVERLAP_POLICY_CONCURRENT.
	public get ConcurrencyLimit(): number {
		return this._fields.ConcurrencyLimit
	}

	public set ConcurrencyLimit(value: number) {
		this._fields.ConcurrencyLimit = value
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
		OverlapPolicy: ScheduleOverlapPolicy
		CatchUpPolicy: ScheduleCatchUpPolicy
		CatchUpWindow: types.Duration | $.VarRef<types.Duration> | null
		PauseOnFailure: boolean
		BufferLimit: number
		ConcurrencyLimit: number
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{OverlapPolicy?: ScheduleOverlapPolicy, CatchUpPolicy?: ScheduleCatchUpPolicy, CatchUpWindow?: types.Duration | $.VarRef<types.Duration> | null, PauseOnFailure?: boolean, BufferLimit?: number, ConcurrencyLimit?: number, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			OverlapPolicy: init?.OverlapPolicy ?? (0 as ScheduleOverlapPolicy),
			CatchUpPolicy: init?.CatchUpPolicy ?? (0 as ScheduleCatchUpPolicy),
			CatchUpWindow: init?.CatchUpWindow ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			PauseOnFailure: init?.PauseOnFailure ?? (false as boolean),
			BufferLimit: init?.BufferLimit ?? (0 as number),
			ConcurrencyLimit: init?.ConcurrencyLimit ?? (0 as number),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SchedulePolicies {
		return new SchedulePolicies(this, true)
	}

	public __goscriptAssign(source: SchedulePolicies): void {
		const target = this._fields
		const values = source._fields
		target.OverlapPolicy = values.OverlapPolicy
		target.CatchUpPolicy = values.CatchUpPolicy
		target.CatchUpWindow = values.CatchUpWindow
		target.PauseOnFailure = values.PauseOnFailure
		target.BufferLimit = values.BufferLimit
		target.ConcurrencyLimit = values.ConcurrencyLimit
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_7fe71309dc9555dc, $.arrayToSlice<number>([2])]
	}

	public GetBufferLimit(): number {
		const m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		if (m != null) {
			return $.pointerValue<SchedulePolicies>(m).BufferLimit
		}
		return 0
	}

	public GetCatchUpPolicy(): ScheduleCatchUpPolicy {
		const m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		if (m != null) {
			return $.pointerValue<SchedulePolicies>(m).CatchUpPolicy
		}
		return 0
	}

	public GetCatchUpWindow(): types.Duration | $.VarRef<types.Duration> | null {
		const m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		if (m != null) {
			return $.pointerValue<SchedulePolicies>(m).CatchUpWindow
		}
		return null
	}

	public GetConcurrencyLimit(): number {
		const m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		if (m != null) {
			return $.pointerValue<SchedulePolicies>(m).ConcurrencyLimit
		}
		return 0
	}

	public GetOverlapPolicy(): ScheduleOverlapPolicy {
		const m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		if (m != null) {
			return $.pointerValue<SchedulePolicies>(m).OverlapPolicy
		}
		return 0
	}

	public GetPauseOnFailure(): boolean {
		const m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		if (m != null) {
			return $.pointerValue<SchedulePolicies>(m).PauseOnFailure
		}
		return false
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SchedulePolicies).Size() : SchedulePolicies.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple3: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SchedulePolicies).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SchedulePolicies.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SchedulePolicies).Size() : SchedulePolicies.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SchedulePolicies).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SchedulePolicies.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		const m$: SchedulePolicies = m == null ? $.pointerTarget<SchedulePolicies>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SchedulePolicies>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as SchedulePolicies).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as SchedulePolicies).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SchedulePolicies).XXX_unrecognized)
		}
		if ((m$ as SchedulePolicies).ConcurrencyLimit != 0) {
			i = encodeVarintSchedule(dAtA, i, $.uint64((m$ as SchedulePolicies).ConcurrencyLimit))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x30
		}
		if ((m$ as SchedulePolicies).BufferLimit != 0) {
			i = encodeVarintSchedule(dAtA, i, $.uint64((m$ as SchedulePolicies).BufferLimit))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x28
		}
		if ((m$ as SchedulePolicies).PauseOnFailure) {
			i--
			if ((m$ as SchedulePolicies).PauseOnFailure) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x20
		}
		if ((m$ as SchedulePolicies).CatchUpWindow != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as SchedulePolicies).CatchUpWindow, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as SchedulePolicies).CatchUpPolicy != 0) {
			i = encodeVarintSchedule(dAtA, i, $.uint64((m$ as SchedulePolicies).CatchUpPolicy))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ((m$ as SchedulePolicies).OverlapPolicy != 0) {
			i = encodeVarintSchedule(dAtA, i, $.uint64((m$ as SchedulePolicies).OverlapPolicy))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		$.assignStruct($.pointerValue<SchedulePolicies>(m), $.markAsStructValue(new SchedulePolicies()))
	}

	public Size(): number {
		const m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		let n: number = 0
		const m$: SchedulePolicies = m == null ? $.pointerTarget<SchedulePolicies>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SchedulePolicies>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as SchedulePolicies).OverlapPolicy != 0) {
			n = n + (1 + sovSchedule($.uint64((m$ as SchedulePolicies).OverlapPolicy)))
		}
		if ((m$ as SchedulePolicies).CatchUpPolicy != 0) {
			n = n + (1 + sovSchedule($.uint64((m$ as SchedulePolicies).CatchUpPolicy)))
		}
		if ((m$ as SchedulePolicies).CatchUpWindow != null) {
			l = types.Duration.prototype.Size.call((m$ as SchedulePolicies).CatchUpWindow)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as SchedulePolicies).PauseOnFailure) {
			n = n + (2)
		}
		if ((m$ as SchedulePolicies).BufferLimit != 0) {
			n = n + (1 + sovSchedule($.uint64((m$ as SchedulePolicies).BufferLimit)))
		}
		if ((m$ as SchedulePolicies).ConcurrencyLimit != 0) {
			n = n + (1 + sovSchedule($.uint64((m$ as SchedulePolicies).ConcurrencyLimit)))
		}
		if ((m$ as SchedulePolicies).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as SchedulePolicies).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.SchedulePolicies", /* @__PURE__ */ $.pointerType("apiv1.SchedulePolicies")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		const m$: SchedulePolicies = m == null ? $.pointerTarget<SchedulePolicies>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SchedulePolicies>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowSchedule
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
				return fmt.Errorf("proto: SchedulePolicies: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: SchedulePolicies: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field OverlapPolicy", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as SchedulePolicies).OverlapPolicy = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++;
						;(m$ as SchedulePolicies).OverlapPolicy = (m$ as SchedulePolicies).OverlapPolicy | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field CatchUpPolicy", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as SchedulePolicies).CatchUpPolicy = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++;
						;(m$ as SchedulePolicies).CatchUpPolicy = (m$ as SchedulePolicies).CatchUpPolicy | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field CatchUpWindow", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as SchedulePolicies).CatchUpWindow == null) {
						;(m$ as SchedulePolicies).CatchUpWindow = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as SchedulePolicies).CatchUpWindow, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field PauseOnFailure", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
					;(m$ as SchedulePolicies).PauseOnFailure = (v != 0)
					break
				}
				case 5:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field BufferLimit", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as SchedulePolicies).BufferLimit = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++;
						;(m$ as SchedulePolicies).BufferLimit = (m$ as SchedulePolicies).BufferLimit | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 6:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field ConcurrencyLimit", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as SchedulePolicies).ConcurrencyLimit = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++;
						;(m$ as SchedulePolicies).ConcurrencyLimit = (m$ as SchedulePolicies).ConcurrencyLimit | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SchedulePolicies).XXX_unrecognized = $.appendSlice((m$ as SchedulePolicies).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		await xxx_messageInfo_SchedulePolicies.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.SchedulePolicies", /* @__PURE__ */ $.pointerType("apiv1.SchedulePolicies")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		if (deterministic) {
			return xxx_messageInfo_SchedulePolicies.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.SchedulePolicies", /* @__PURE__ */ $.pointerType("apiv1.SchedulePolicies")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SchedulePolicies).MarshalToSizedBuffer(b) : SchedulePolicies.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		await xxx_messageInfo_SchedulePolicies.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.SchedulePolicies", /* @__PURE__ */ $.pointerType("apiv1.SchedulePolicies")), src)
	}

	public XXX_Size(): number {
		const m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SchedulePolicies).Size() : SchedulePolicies.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: SchedulePolicies | $.VarRef<SchedulePolicies> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SchedulePolicies).Unmarshal(b) : SchedulePolicies.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.SchedulePolicies",
		() => new SchedulePolicies(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetBufferLimit", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetCatchUpPolicy", [], [/* @__PURE__ */ $.basicType("int32", "apiv1.ScheduleCatchUpPolicy")], true), $.methodSignature("GetCatchUpWindow", [], [/* @__PURE__ */ $.pointerType("types.Duration")], true), $.methodSignature("GetConcurrencyLimit", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetOverlapPolicy", [], [/* @__PURE__ */ $.basicType("int32", "apiv1.ScheduleOverlapPolicy")], true), $.methodSignature("GetPauseOnFailure", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		SchedulePolicies,
		() => [/* @__PURE__ */ $.structField("OverlapPolicy", /* @__PURE__ */ $.basicType("int32", "apiv1.ScheduleOverlapPolicy"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=overlap_policy,json=overlapPolicy,proto3,enum=uber.cadence.api.v1.ScheduleOverlapPolicy\" json:\"overlap_policy,omitempty\"" }), /* @__PURE__ */ $.structField("CatchUpPolicy", /* @__PURE__ */ $.basicType("int32", "apiv1.ScheduleCatchUpPolicy"), [1], 4, true, { tag: "protobuf:\"varint,2,opt,name=catch_up_policy,json=catchUpPolicy,proto3,enum=uber.cadence.api.v1.ScheduleCatchUpPolicy\" json:\"catch_up_policy,omitempty\"" }), /* @__PURE__ */ $.structField("CatchUpWindow", /* @__PURE__ */ $.pointerType("types.Duration"), [2], 8, true, { tag: "protobuf:\"bytes,3,opt,name=catch_up_window,json=catchUpWindow,proto3\" json:\"catch_up_window,omitempty\"" }), /* @__PURE__ */ $.structField("PauseOnFailure", /* @__PURE__ */ $.basicType("bool"), [3], 16, true, { tag: "protobuf:\"varint,4,opt,name=pause_on_failure,json=pauseOnFailure,proto3\" json:\"pause_on_failure,omitempty\"" }), /* @__PURE__ */ $.structField("BufferLimit", /* @__PURE__ */ $.basicType("int32"), [4], 20, true, { tag: "protobuf:\"varint,5,opt,name=buffer_limit,json=bufferLimit,proto3\" json:\"buffer_limit,omitempty\"" }), /* @__PURE__ */ $.structField("ConcurrencyLimit", /* @__PURE__ */ $.basicType("int32"), [5], 24, true, { tag: "protobuf:\"varint,6,opt,name=concurrency_limit,json=concurrencyLimit,proto3\" json:\"concurrency_limit,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [6], 28, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [7], 32, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [8], 56, true, { tag: "json:\"-\"" })]
	)
}

export class SchedulePauseInfo {
	// User-provided reason for pausing.
	public get Reason(): string {
		return this._fields.Reason
	}

	public set Reason(value: string) {
		this._fields.Reason = value
	}

	// Time when the schedule was paused.
	public get PausedAt(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.PausedAt
	}

	public set PausedAt(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.PausedAt = value
	}

	// Identity of the actor that paused the schedule.
	public get PausedBy(): string {
		return this._fields.PausedBy
	}

	public set PausedBy(value: string) {
		this._fields.PausedBy = value
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
		PausedAt: types.Timestamp | $.VarRef<types.Timestamp> | null
		PausedBy: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Reason?: string, PausedAt?: types.Timestamp | $.VarRef<types.Timestamp> | null, PausedBy?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Reason: init?.Reason ?? ("" as string),
			PausedAt: init?.PausedAt ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			PausedBy: init?.PausedBy ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SchedulePauseInfo {
		return new SchedulePauseInfo(this, true)
	}

	public __goscriptAssign(source: SchedulePauseInfo): void {
		const target = this._fields
		const values = source._fields
		target.Reason = values.Reason
		target.PausedAt = values.PausedAt
		target.PausedBy = values.PausedBy
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_7fe71309dc9555dc, $.arrayToSlice<number>([3])]
	}

	public GetPausedAt(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null = this;
		if (m != null) {
			return $.pointerValue<SchedulePauseInfo>(m).PausedAt
		}
		return null
	}

	public GetPausedBy(): string {
		const m: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null = this;
		if (m != null) {
			return $.pointerValue<SchedulePauseInfo>(m).PausedBy
		}
		return ""
	}

	public GetReason(): string {
		const m: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null = this;
		if (m != null) {
			return $.pointerValue<SchedulePauseInfo>(m).Reason
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SchedulePauseInfo).Size() : SchedulePauseInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SchedulePauseInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SchedulePauseInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SchedulePauseInfo).Size() : SchedulePauseInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SchedulePauseInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SchedulePauseInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null = this;
		const m$: SchedulePauseInfo = m == null ? $.pointerTarget<SchedulePauseInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SchedulePauseInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as SchedulePauseInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as SchedulePauseInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SchedulePauseInfo).XXX_unrecognized)
		}
		if ($.stringLen((m$ as SchedulePauseInfo).PausedBy) > 0) {
			i = i - ($.stringLen((m$ as SchedulePauseInfo).PausedBy))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SchedulePauseInfo).PausedBy)
			i = encodeVarintSchedule(dAtA, i, $.uint64($.stringLen((m$ as SchedulePauseInfo).PausedBy)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as SchedulePauseInfo).PausedAt != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as SchedulePauseInfo).PausedAt, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as SchedulePauseInfo).Reason) > 0) {
			i = i - ($.stringLen((m$ as SchedulePauseInfo).Reason))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SchedulePauseInfo).Reason)
			i = encodeVarintSchedule(dAtA, i, $.uint64($.stringLen((m$ as SchedulePauseInfo).Reason)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null = this;
		$.assignStruct($.pointerValue<SchedulePauseInfo>(m), $.markAsStructValue(new SchedulePauseInfo()))
	}

	public Size(): number {
		const m: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null = this;
		let n: number = 0
		const m$: SchedulePauseInfo = m == null ? $.pointerTarget<SchedulePauseInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SchedulePauseInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as SchedulePauseInfo).Reason)
		if (l > 0) {
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as SchedulePauseInfo).PausedAt != null) {
			l = types.Timestamp.prototype.Size.call((m$ as SchedulePauseInfo).PausedAt)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		l = $.stringLen((m$ as SchedulePauseInfo).PausedBy)
		if (l > 0) {
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as SchedulePauseInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as SchedulePauseInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.SchedulePauseInfo", /* @__PURE__ */ $.pointerType("apiv1.SchedulePauseInfo")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null = this;
		const m$: SchedulePauseInfo = m == null ? $.pointerTarget<SchedulePauseInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SchedulePauseInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow4 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowSchedule
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
				return fmt.Errorf("proto: SchedulePauseInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: SchedulePauseInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SchedulePauseInfo).Reason = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field PausedAt", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as SchedulePauseInfo).PausedAt == null) {
						;(m$ as SchedulePauseInfo).PausedAt = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as SchedulePauseInfo).PausedAt, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field PausedBy", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SchedulePauseInfo).PausedBy = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SchedulePauseInfo).XXX_unrecognized = $.appendSlice((m$ as SchedulePauseInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null = this;
		await xxx_messageInfo_SchedulePauseInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.SchedulePauseInfo", /* @__PURE__ */ $.pointerType("apiv1.SchedulePauseInfo")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_SchedulePauseInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.SchedulePauseInfo", /* @__PURE__ */ $.pointerType("apiv1.SchedulePauseInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SchedulePauseInfo).MarshalToSizedBuffer(b) : SchedulePauseInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null = this;
		await xxx_messageInfo_SchedulePauseInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.SchedulePauseInfo", /* @__PURE__ */ $.pointerType("apiv1.SchedulePauseInfo")), src)
	}

	public XXX_Size(): number {
		const m: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SchedulePauseInfo).Size() : SchedulePauseInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SchedulePauseInfo).Unmarshal(b) : SchedulePauseInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.SchedulePauseInfo",
		() => new SchedulePauseInfo(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetPausedAt", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetPausedBy", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetReason", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		SchedulePauseInfo,
		() => [/* @__PURE__ */ $.structField("Reason", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=reason,proto3\" json:\"reason,omitempty\"" }), /* @__PURE__ */ $.structField("PausedAt", /* @__PURE__ */ $.pointerType("types.Timestamp"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=paused_at,json=pausedAt,proto3\" json:\"paused_at,omitempty\"" }), /* @__PURE__ */ $.structField("PausedBy", /* @__PURE__ */ $.basicType("string"), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=paused_by,json=pausedBy,proto3\" json:\"paused_by,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [3], 40, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 40, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [5], 64, true, { tag: "json:\"-\"" })]
	)
}

export class ScheduleState {
	// Whether the schedule is currently paused.
	public get Paused(): boolean {
		return this._fields.Paused
	}

	public set Paused(value: boolean) {
		this._fields.Paused = value
	}

	// Details about the pause, present only when paused is true.
	public get PauseInfo(): SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null {
		return this._fields.PauseInfo
	}

	public set PauseInfo(value: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null) {
		this._fields.PauseInfo = value
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
		Paused: boolean
		PauseInfo: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Paused?: boolean, PauseInfo?: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Paused: init?.Paused ?? (false as boolean),
			PauseInfo: init?.PauseInfo ?? (null! as SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScheduleState {
		return new ScheduleState(this, true)
	}

	public __goscriptAssign(source: ScheduleState): void {
		const target = this._fields
		const values = source._fields
		target.Paused = values.Paused
		target.PauseInfo = values.PauseInfo
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_7fe71309dc9555dc, $.arrayToSlice<number>([4])]
	}

	public GetPauseInfo(): SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null {
		const m: ScheduleState | $.VarRef<ScheduleState> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleState>(m).PauseInfo
		}
		return null
	}

	public GetPaused(): boolean {
		const m: ScheduleState | $.VarRef<ScheduleState> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleState>(m).Paused
		}
		return false
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ScheduleState | $.VarRef<ScheduleState> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleState).Size() : ScheduleState.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple5: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleState).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScheduleState.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScheduleState | $.VarRef<ScheduleState> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleState).Size() : ScheduleState.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleState).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScheduleState.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScheduleState | $.VarRef<ScheduleState> | null = this;
		const m$: ScheduleState = m == null ? $.pointerTarget<ScheduleState>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleState>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ScheduleState).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ScheduleState).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScheduleState).XXX_unrecognized)
		}
		if ((m$ as ScheduleState).PauseInfo != null) {
			{
				let [size, err] = SchedulePauseInfo.prototype.MarshalToSizedBuffer.call((m$ as ScheduleState).PauseInfo, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as ScheduleState).Paused) {
			i--
			if ((m$ as ScheduleState).Paused) {
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
		let m: ScheduleState | $.VarRef<ScheduleState> | null = this;
		$.assignStruct($.pointerValue<ScheduleState>(m), $.markAsStructValue(new ScheduleState()))
	}

	public Size(): number {
		const m: ScheduleState | $.VarRef<ScheduleState> | null = this;
		let n: number = 0
		const m$: ScheduleState = m == null ? $.pointerTarget<ScheduleState>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleState>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as ScheduleState).Paused) {
			n = n + (2)
		}
		if ((m$ as ScheduleState).PauseInfo != null) {
			l = SchedulePauseInfo.prototype.Size.call((m$ as ScheduleState).PauseInfo)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleState).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ScheduleState).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ScheduleState | $.VarRef<ScheduleState> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleState", /* @__PURE__ */ $.pointerType("apiv1.ScheduleState")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ScheduleState | $.VarRef<ScheduleState> | null = this;
		const m$: ScheduleState = m == null ? $.pointerTarget<ScheduleState>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleState>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow5 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowSchedule
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
				return fmt.Errorf("proto: ScheduleState: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ScheduleState: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Paused", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as ScheduleState).Paused = (v != 0)
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field PauseInfo", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleState).PauseInfo == null) {
						;(m$ as ScheduleState).PauseInfo = new SchedulePauseInfo()
					}
					{
						let err = SchedulePauseInfo.prototype.Unmarshal.call((m$ as ScheduleState).PauseInfo, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScheduleState).XXX_unrecognized = $.appendSlice((m$ as ScheduleState).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ScheduleState | $.VarRef<ScheduleState> | null = this;
		await xxx_messageInfo_ScheduleState.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleState", /* @__PURE__ */ $.pointerType("apiv1.ScheduleState")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ScheduleState | $.VarRef<ScheduleState> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ScheduleState.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleState", /* @__PURE__ */ $.pointerType("apiv1.ScheduleState")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleState).MarshalToSizedBuffer(b) : ScheduleState.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ScheduleState | $.VarRef<ScheduleState> | null = this;
		await xxx_messageInfo_ScheduleState.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleState", /* @__PURE__ */ $.pointerType("apiv1.ScheduleState")), src)
	}

	public XXX_Size(): number {
		const m: ScheduleState | $.VarRef<ScheduleState> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleState).Size() : ScheduleState.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ScheduleState | $.VarRef<ScheduleState> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleState).Unmarshal(b) : ScheduleState.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ScheduleState",
		() => new ScheduleState(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetPauseInfo", [], [/* @__PURE__ */ $.pointerType("apiv1.SchedulePauseInfo")], true), $.methodSignature("GetPaused", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ScheduleState,
		() => [/* @__PURE__ */ $.structField("Paused", /* @__PURE__ */ $.basicType("bool"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=paused,proto3\" json:\"paused,omitempty\"" }), /* @__PURE__ */ $.structField("PauseInfo", /* @__PURE__ */ $.pointerType("apiv1.SchedulePauseInfo"), [1], 8, true, { tag: "protobuf:\"bytes,2,opt,name=pause_info,json=pauseInfo,proto3\" json:\"pause_info,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 40, true, { tag: "json:\"-\"" })]
	)
}

export class BackfillInfo {
	// Backfill identifier, as provided in BackfillScheduleRequest.
	public get BackfillId(): string {
		return this._fields.BackfillId
	}

	public set BackfillId(value: string) {
		this._fields.BackfillId = value
	}

	// Start of the backfill time range.
	public get StartTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.StartTime
	}

	public set StartTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.StartTime = value
	}

	// End of the backfill time range.
	public get EndTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.EndTime
	}

	public set EndTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.EndTime = value
	}

	// Number of runs completed so far.
	public get RunsCompleted(): number {
		return this._fields.RunsCompleted
	}

	public set RunsCompleted(value: number) {
		this._fields.RunsCompleted = value
	}

	// Total number of runs in this backfill range.
	public get RunsTotal(): number {
		return this._fields.RunsTotal
	}

	public set RunsTotal(value: number) {
		this._fields.RunsTotal = value
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
		BackfillId: string
		StartTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		EndTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		RunsCompleted: number
		RunsTotal: number
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{BackfillId?: string, StartTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, EndTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, RunsCompleted?: number, RunsTotal?: number, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			BackfillId: init?.BackfillId ?? ("" as string),
			StartTime: init?.StartTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			EndTime: init?.EndTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			RunsCompleted: init?.RunsCompleted ?? (0 as number),
			RunsTotal: init?.RunsTotal ?? (0 as number),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BackfillInfo {
		return new BackfillInfo(this, true)
	}

	public __goscriptAssign(source: BackfillInfo): void {
		const target = this._fields
		const values = source._fields
		target.BackfillId = values.BackfillId
		target.StartTime = values.StartTime
		target.EndTime = values.EndTime
		target.RunsCompleted = values.RunsCompleted
		target.RunsTotal = values.RunsTotal
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_7fe71309dc9555dc, $.arrayToSlice<number>([5])]
	}

	public GetBackfillId(): string {
		const m: BackfillInfo | $.VarRef<BackfillInfo> | null = this;
		if (m != null) {
			return $.pointerValue<BackfillInfo>(m).BackfillId
		}
		return ""
	}

	public GetEndTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: BackfillInfo | $.VarRef<BackfillInfo> | null = this;
		if (m != null) {
			return $.pointerValue<BackfillInfo>(m).EndTime
		}
		return null
	}

	public GetRunsCompleted(): number {
		const m: BackfillInfo | $.VarRef<BackfillInfo> | null = this;
		if (m != null) {
			return $.pointerValue<BackfillInfo>(m).RunsCompleted
		}
		return 0
	}

	public GetRunsTotal(): number {
		const m: BackfillInfo | $.VarRef<BackfillInfo> | null = this;
		if (m != null) {
			return $.pointerValue<BackfillInfo>(m).RunsTotal
		}
		return 0
	}

	public GetStartTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: BackfillInfo | $.VarRef<BackfillInfo> | null = this;
		if (m != null) {
			return $.pointerValue<BackfillInfo>(m).StartTime
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: BackfillInfo | $.VarRef<BackfillInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillInfo).Size() : BackfillInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple6: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BackfillInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BackfillInfo | $.VarRef<BackfillInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillInfo).Size() : BackfillInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BackfillInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BackfillInfo | $.VarRef<BackfillInfo> | null = this;
		const m$: BackfillInfo = m == null ? $.pointerTarget<BackfillInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BackfillInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as BackfillInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as BackfillInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BackfillInfo).XXX_unrecognized)
		}
		if ((m$ as BackfillInfo).RunsTotal != 0) {
			i = encodeVarintSchedule(dAtA, i, $.uint64((m$ as BackfillInfo).RunsTotal))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x28
		}
		if ((m$ as BackfillInfo).RunsCompleted != 0) {
			i = encodeVarintSchedule(dAtA, i, $.uint64((m$ as BackfillInfo).RunsCompleted))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x20
		}
		if ((m$ as BackfillInfo).EndTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as BackfillInfo).EndTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as BackfillInfo).StartTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as BackfillInfo).StartTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as BackfillInfo).BackfillId) > 0) {
			i = i - ($.stringLen((m$ as BackfillInfo).BackfillId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BackfillInfo).BackfillId)
			i = encodeVarintSchedule(dAtA, i, $.uint64($.stringLen((m$ as BackfillInfo).BackfillId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: BackfillInfo | $.VarRef<BackfillInfo> | null = this;
		$.assignStruct($.pointerValue<BackfillInfo>(m), $.markAsStructValue(new BackfillInfo()))
	}

	public Size(): number {
		const m: BackfillInfo | $.VarRef<BackfillInfo> | null = this;
		let n: number = 0
		const m$: BackfillInfo = m == null ? $.pointerTarget<BackfillInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BackfillInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as BackfillInfo).BackfillId)
		if (l > 0) {
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as BackfillInfo).StartTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as BackfillInfo).StartTime)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as BackfillInfo).EndTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as BackfillInfo).EndTime)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as BackfillInfo).RunsCompleted != 0) {
			n = n + (1 + sovSchedule($.uint64((m$ as BackfillInfo).RunsCompleted)))
		}
		if ((m$ as BackfillInfo).RunsTotal != 0) {
			n = n + (1 + sovSchedule($.uint64((m$ as BackfillInfo).RunsTotal)))
		}
		if ((m$ as BackfillInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as BackfillInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: BackfillInfo | $.VarRef<BackfillInfo> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.BackfillInfo", /* @__PURE__ */ $.pointerType("apiv1.BackfillInfo")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: BackfillInfo | $.VarRef<BackfillInfo> | null = this;
		const m$: BackfillInfo = m == null ? $.pointerTarget<BackfillInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BackfillInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow6 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowSchedule
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
				return fmt.Errorf("proto: BackfillInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: BackfillInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field BackfillId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BackfillInfo).BackfillId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as BackfillInfo).StartTime == null) {
						;(m$ as BackfillInfo).StartTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as BackfillInfo).StartTime, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field EndTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as BackfillInfo).EndTime == null) {
						;(m$ as BackfillInfo).EndTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as BackfillInfo).EndTime, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field RunsCompleted", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as BackfillInfo).RunsCompleted = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++;
						;(m$ as BackfillInfo).RunsCompleted = (m$ as BackfillInfo).RunsCompleted | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 5:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field RunsTotal", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as BackfillInfo).RunsTotal = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++;
						;(m$ as BackfillInfo).RunsTotal = (m$ as BackfillInfo).RunsTotal | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BackfillInfo).XXX_unrecognized = $.appendSlice((m$ as BackfillInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: BackfillInfo | $.VarRef<BackfillInfo> | null = this;
		await xxx_messageInfo_BackfillInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.BackfillInfo", /* @__PURE__ */ $.pointerType("apiv1.BackfillInfo")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: BackfillInfo | $.VarRef<BackfillInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_BackfillInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.BackfillInfo", /* @__PURE__ */ $.pointerType("apiv1.BackfillInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillInfo).MarshalToSizedBuffer(b) : BackfillInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: BackfillInfo | $.VarRef<BackfillInfo> | null = this;
		await xxx_messageInfo_BackfillInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.BackfillInfo", /* @__PURE__ */ $.pointerType("apiv1.BackfillInfo")), src)
	}

	public XXX_Size(): number {
		const m: BackfillInfo | $.VarRef<BackfillInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillInfo).Size() : BackfillInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: BackfillInfo | $.VarRef<BackfillInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BackfillInfo).Unmarshal(b) : BackfillInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.BackfillInfo",
		() => new BackfillInfo(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetBackfillId", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetEndTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetRunsCompleted", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetRunsTotal", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetStartTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		BackfillInfo,
		() => [/* @__PURE__ */ $.structField("BackfillId", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=backfill_id,json=backfillId,proto3\" json:\"backfill_id,omitempty\"" }), /* @__PURE__ */ $.structField("StartTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=start_time,json=startTime,proto3\" json:\"start_time,omitempty\"" }), /* @__PURE__ */ $.structField("EndTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=end_time,json=endTime,proto3\" json:\"end_time,omitempty\"" }), /* @__PURE__ */ $.structField("RunsCompleted", /* @__PURE__ */ $.basicType("int32"), [3], 32, true, { tag: "protobuf:\"varint,4,opt,name=runs_completed,json=runsCompleted,proto3\" json:\"runs_completed,omitempty\"" }), /* @__PURE__ */ $.structField("RunsTotal", /* @__PURE__ */ $.basicType("int32"), [4], 36, true, { tag: "protobuf:\"varint,5,opt,name=runs_total,json=runsTotal,proto3\" json:\"runs_total,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [5], 40, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 40, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [7], 64, true, { tag: "json:\"-\"" })]
	)
}

export class ScheduleInfo {
	// When the last run was triggered.
	public get LastRunTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.LastRunTime
	}

	public set LastRunTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.LastRunTime = value
	}

	// When the next run will be triggered.
	public get NextRunTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.NextRunTime
	}

	public set NextRunTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.NextRunTime = value
	}

	// Total number of workflows started by this schedule (includes regular, catch-up, and backfill runs).
	public get TotalRuns(): bigint {
		return this._fields.TotalRuns
	}

	public set TotalRuns(value: bigint) {
		this._fields.TotalRuns = value
	}

	// When the schedule was created.
	public get CreateTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.CreateTime
	}

	public set CreateTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.CreateTime = value
	}

	// When the schedule was last updated.
	public get LastUpdateTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.LastUpdateTime
	}

	public set LastUpdateTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.LastUpdateTime = value
	}

	// Currently active backfill operations. Removed when complete.
	public get OngoingBackfills(): $.Slice<BackfillInfo | $.VarRef<BackfillInfo> | null> {
		return this._fields.OngoingBackfills
	}

	public set OngoingBackfills(value: $.Slice<BackfillInfo | $.VarRef<BackfillInfo> | null>) {
		this._fields.OngoingBackfills = value
	}

	// Number of runs that were missed (e.g. due to downtime) and then skipped by catch-up policy.
	public get MissedRuns(): bigint {
		return this._fields.MissedRuns
	}

	public set MissedRuns(value: bigint) {
		this._fields.MissedRuns = value
	}

	// Number of runs that were skipped due to the overlap policy (e.g. SkipNew).
	public get SkippedRuns(): bigint {
		return this._fields.SkippedRuns
	}

	public set SkippedRuns(value: bigint) {
		this._fields.SkippedRuns = value
	}

	// Number of fired actions currently queued in the buffer (BUFFER overlap policy only).
	public get BufferedFireCount(): bigint {
		return this._fields.BufferedFireCount
	}

	public set BufferedFireCount(value: bigint) {
		this._fields.BufferedFireCount = value
	}

	// Number of target workflows currently running (CONCURRENT overlap policy only).
	public get RunningWorkflowCount(): bigint {
		return this._fields.RunningWorkflowCount
	}

	public set RunningWorkflowCount(value: bigint) {
		this._fields.RunningWorkflowCount = value
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
		LastRunTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		NextRunTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		TotalRuns: bigint
		CreateTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		LastUpdateTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		OngoingBackfills: $.Slice<BackfillInfo | $.VarRef<BackfillInfo> | null>
		MissedRuns: bigint
		SkippedRuns: bigint
		BufferedFireCount: bigint
		RunningWorkflowCount: bigint
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{LastRunTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, NextRunTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, TotalRuns?: bigint, CreateTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, LastUpdateTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, OngoingBackfills?: $.Slice<BackfillInfo | $.VarRef<BackfillInfo> | null>, MissedRuns?: bigint, SkippedRuns?: bigint, BufferedFireCount?: bigint, RunningWorkflowCount?: bigint, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			LastRunTime: init?.LastRunTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			NextRunTime: init?.NextRunTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			TotalRuns: init?.TotalRuns ?? (0n as bigint),
			CreateTime: init?.CreateTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			LastUpdateTime: init?.LastUpdateTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			OngoingBackfills: init?.OngoingBackfills ?? (null! as $.Slice<BackfillInfo | $.VarRef<BackfillInfo> | null>),
			MissedRuns: init?.MissedRuns ?? (0n as bigint),
			SkippedRuns: init?.SkippedRuns ?? (0n as bigint),
			BufferedFireCount: init?.BufferedFireCount ?? (0n as bigint),
			RunningWorkflowCount: init?.RunningWorkflowCount ?? (0n as bigint),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScheduleInfo {
		return new ScheduleInfo(this, true)
	}

	public __goscriptAssign(source: ScheduleInfo): void {
		const target = this._fields
		const values = source._fields
		target.LastRunTime = values.LastRunTime
		target.NextRunTime = values.NextRunTime
		target.TotalRuns = values.TotalRuns
		target.CreateTime = values.CreateTime
		target.LastUpdateTime = values.LastUpdateTime
		target.OngoingBackfills = values.OngoingBackfills
		target.MissedRuns = values.MissedRuns
		target.SkippedRuns = values.SkippedRuns
		target.BufferedFireCount = values.BufferedFireCount
		target.RunningWorkflowCount = values.RunningWorkflowCount
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_7fe71309dc9555dc, $.arrayToSlice<number>([6])]
	}

	public GetBufferedFireCount(): bigint {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleInfo>(m).BufferedFireCount
		}
		return 0n
	}

	public GetCreateTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleInfo>(m).CreateTime
		}
		return null
	}

	public GetLastRunTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleInfo>(m).LastRunTime
		}
		return null
	}

	public GetLastUpdateTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleInfo>(m).LastUpdateTime
		}
		return null
	}

	public GetMissedRuns(): bigint {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleInfo>(m).MissedRuns
		}
		return 0n
	}

	public GetNextRunTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleInfo>(m).NextRunTime
		}
		return null
	}

	public GetOngoingBackfills(): $.Slice<BackfillInfo | $.VarRef<BackfillInfo> | null> {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleInfo>(m).OngoingBackfills
		}
		return null
	}

	public GetRunningWorkflowCount(): bigint {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleInfo>(m).RunningWorkflowCount
		}
		return 0n
	}

	public GetSkippedRuns(): bigint {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleInfo>(m).SkippedRuns
		}
		return 0n
	}

	public GetTotalRuns(): bigint {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleInfo>(m).TotalRuns
		}
		return 0n
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleInfo).Size() : ScheduleInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple7: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScheduleInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleInfo).Size() : ScheduleInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScheduleInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		const m$: ScheduleInfo = m == null ? $.pointerTarget<ScheduleInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ScheduleInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ScheduleInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScheduleInfo).XXX_unrecognized)
		}
		if ((m$ as ScheduleInfo).RunningWorkflowCount != 0n) {
			i = encodeVarintSchedule(dAtA, i, $.uint64((m$ as ScheduleInfo).RunningWorkflowCount))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x50
		}
		if ((m$ as ScheduleInfo).BufferedFireCount != 0n) {
			i = encodeVarintSchedule(dAtA, i, $.uint64((m$ as ScheduleInfo).BufferedFireCount))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x48
		}
		if ((m$ as ScheduleInfo).SkippedRuns != 0n) {
			i = encodeVarintSchedule(dAtA, i, $.uint64((m$ as ScheduleInfo).SkippedRuns))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x40
		}
		if ((m$ as ScheduleInfo).MissedRuns != 0n) {
			i = encodeVarintSchedule(dAtA, i, $.uint64((m$ as ScheduleInfo).MissedRuns))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x38
		}
		if ($.sliceLen((m$ as ScheduleInfo).OngoingBackfills) > 0) {
			for (let __goscriptSliceWindow7 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as ScheduleInfo).OngoingBackfills) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = BackfillInfo.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as ScheduleInfo).OngoingBackfills!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintSchedule(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] = 0x32
			}
		}
		if ((m$ as ScheduleInfo).LastUpdateTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as ScheduleInfo).LastUpdateTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as ScheduleInfo).CreateTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as ScheduleInfo).CreateTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as ScheduleInfo).TotalRuns != 0n) {
			i = encodeVarintSchedule(dAtA, i, $.uint64((m$ as ScheduleInfo).TotalRuns))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x18
		}
		if ((m$ as ScheduleInfo).NextRunTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as ScheduleInfo).NextRunTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as ScheduleInfo).LastRunTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as ScheduleInfo).LastRunTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		$.assignStruct($.pointerValue<ScheduleInfo>(m), $.markAsStructValue(new ScheduleInfo()))
	}

	public Size(): number {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		let n: number = 0
		const m$: ScheduleInfo = m == null ? $.pointerTarget<ScheduleInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as ScheduleInfo).LastRunTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as ScheduleInfo).LastRunTime)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleInfo).NextRunTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as ScheduleInfo).NextRunTime)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleInfo).TotalRuns != 0n) {
			n = n + (1 + sovSchedule($.uint64((m$ as ScheduleInfo).TotalRuns)))
		}
		if ((m$ as ScheduleInfo).CreateTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as ScheduleInfo).CreateTime)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleInfo).LastUpdateTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as ScheduleInfo).LastUpdateTime)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ($.sliceLen((m$ as ScheduleInfo).OngoingBackfills) > 0) {
			for (let __goscriptRangeTarget0 = (m$ as ScheduleInfo).OngoingBackfills, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as BackfillInfo | $.VarRef<BackfillInfo> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as BackfillInfo).Size() : BackfillInfo.prototype.Size.call(e))
				n = n + ((1 + l) + sovSchedule($.uint64(l)))
			}
		}
		if ((m$ as ScheduleInfo).MissedRuns != 0n) {
			n = n + (1 + sovSchedule($.uint64((m$ as ScheduleInfo).MissedRuns)))
		}
		if ((m$ as ScheduleInfo).SkippedRuns != 0n) {
			n = n + (1 + sovSchedule($.uint64((m$ as ScheduleInfo).SkippedRuns)))
		}
		if ((m$ as ScheduleInfo).BufferedFireCount != 0n) {
			n = n + (1 + sovSchedule($.uint64((m$ as ScheduleInfo).BufferedFireCount)))
		}
		if ((m$ as ScheduleInfo).RunningWorkflowCount != 0n) {
			n = n + (1 + sovSchedule($.uint64((m$ as ScheduleInfo).RunningWorkflowCount)))
		}
		if ((m$ as ScheduleInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ScheduleInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleInfo", /* @__PURE__ */ $.pointerType("apiv1.ScheduleInfo")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		const m$: ScheduleInfo = m == null ? $.pointerTarget<ScheduleInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow8 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowSchedule
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
				return fmt.Errorf("proto: ScheduleInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ScheduleInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field LastRunTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleInfo).LastRunTime == null) {
						;(m$ as ScheduleInfo).LastRunTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as ScheduleInfo).LastRunTime, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field NextRunTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleInfo).NextRunTime == null) {
						;(m$ as ScheduleInfo).NextRunTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as ScheduleInfo).NextRunTime, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field TotalRuns", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ScheduleInfo).TotalRuns = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++;
						;(m$ as ScheduleInfo).TotalRuns = $.int64Or((m$ as ScheduleInfo).TotalRuns, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field CreateTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleInfo).CreateTime == null) {
						;(m$ as ScheduleInfo).CreateTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as ScheduleInfo).CreateTime, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field LastUpdateTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleInfo).LastUpdateTime == null) {
						;(m$ as ScheduleInfo).LastUpdateTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as ScheduleInfo).LastUpdateTime, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field OngoingBackfills", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScheduleInfo).OngoingBackfills = $.appendOne((m$ as ScheduleInfo).OngoingBackfills, new BackfillInfo(), $.appendZeros.nil)
					{
						let err = BackfillInfo.prototype.Unmarshal.call($.arrayIndex((m$ as ScheduleInfo).OngoingBackfills!, $.sliceLen((m$ as ScheduleInfo).OngoingBackfills) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 7:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field MissedRuns", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ScheduleInfo).MissedRuns = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++;
						;(m$ as ScheduleInfo).MissedRuns = $.int64Or((m$ as ScheduleInfo).MissedRuns, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 8:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field SkippedRuns", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ScheduleInfo).SkippedRuns = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++;
						;(m$ as ScheduleInfo).SkippedRuns = $.int64Or((m$ as ScheduleInfo).SkippedRuns, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 9:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field BufferedFireCount", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ScheduleInfo).BufferedFireCount = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++;
						;(m$ as ScheduleInfo).BufferedFireCount = $.int64Or((m$ as ScheduleInfo).BufferedFireCount, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 10:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field RunningWorkflowCount", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ScheduleInfo).RunningWorkflowCount = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++;
						;(m$ as ScheduleInfo).RunningWorkflowCount = $.int64Or((m$ as ScheduleInfo).RunningWorkflowCount, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScheduleInfo).XXX_unrecognized = $.appendSlice((m$ as ScheduleInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		await xxx_messageInfo_ScheduleInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleInfo", /* @__PURE__ */ $.pointerType("apiv1.ScheduleInfo")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ScheduleInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleInfo", /* @__PURE__ */ $.pointerType("apiv1.ScheduleInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleInfo).MarshalToSizedBuffer(b) : ScheduleInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		await xxx_messageInfo_ScheduleInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleInfo", /* @__PURE__ */ $.pointerType("apiv1.ScheduleInfo")), src)
	}

	public XXX_Size(): number {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleInfo).Size() : ScheduleInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ScheduleInfo | $.VarRef<ScheduleInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleInfo).Unmarshal(b) : ScheduleInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ScheduleInfo",
		() => new ScheduleInfo(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetBufferedFireCount", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetCreateTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetLastRunTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetLastUpdateTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetMissedRuns", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetNextRunTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetOngoingBackfills", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.BackfillInfo"))], true), $.methodSignature("GetRunningWorkflowCount", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetSkippedRuns", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetTotalRuns", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ScheduleInfo,
		() => [/* @__PURE__ */ $.structField("LastRunTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=last_run_time,json=lastRunTime,proto3\" json:\"last_run_time,omitempty\"" }), /* @__PURE__ */ $.structField("NextRunTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [1], 8, true, { tag: "protobuf:\"bytes,2,opt,name=next_run_time,json=nextRunTime,proto3\" json:\"next_run_time,omitempty\"" }), /* @__PURE__ */ $.structField("TotalRuns", /* @__PURE__ */ $.basicType("int64"), [2], 16, true, { tag: "protobuf:\"varint,3,opt,name=total_runs,json=totalRuns,proto3\" json:\"total_runs,omitempty\"" }), /* @__PURE__ */ $.structField("CreateTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [3], 24, true, { tag: "protobuf:\"bytes,4,opt,name=create_time,json=createTime,proto3\" json:\"create_time,omitempty\"" }), /* @__PURE__ */ $.structField("LastUpdateTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [4], 32, true, { tag: "protobuf:\"bytes,5,opt,name=last_update_time,json=lastUpdateTime,proto3\" json:\"last_update_time,omitempty\"" }), /* @__PURE__ */ $.structField("OngoingBackfills", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.BackfillInfo")), [5], 40, true, { tag: "protobuf:\"bytes,6,rep,name=ongoing_backfills,json=ongoingBackfills,proto3\" json:\"ongoing_backfills,omitempty\"" }), /* @__PURE__ */ $.structField("MissedRuns", /* @__PURE__ */ $.basicType("int64"), [6], 64, true, { tag: "protobuf:\"varint,7,opt,name=missed_runs,json=missedRuns,proto3\" json:\"missed_runs,omitempty\"" }), /* @__PURE__ */ $.structField("SkippedRuns", /* @__PURE__ */ $.basicType("int64"), [7], 72, true, { tag: "protobuf:\"varint,8,opt,name=skipped_runs,json=skippedRuns,proto3\" json:\"skipped_runs,omitempty\"" }), /* @__PURE__ */ $.structField("BufferedFireCount", /* @__PURE__ */ $.basicType("int64"), [8], 80, true, { tag: "protobuf:\"varint,9,opt,name=buffered_fire_count,json=bufferedFireCount,proto3\" json:\"buffered_fire_count,omitempty\"" }), /* @__PURE__ */ $.structField("RunningWorkflowCount", /* @__PURE__ */ $.basicType("int64"), [9], 88, true, { tag: "protobuf:\"varint,10,opt,name=running_workflow_count,json=runningWorkflowCount,proto3\" json:\"running_workflow_count,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [10], 96, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [11], 96, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [12], 120, true, { tag: "json:\"-\"" })]
	)
}

export class ScheduleListEntry {
	public get ScheduleId(): string {
		return this._fields.ScheduleId
	}

	public set ScheduleId(value: string) {
		this._fields.ScheduleId = value
	}

	// Workflow type configured in the schedule action.
	public get WorkflowType(): __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null {
		return this._fields.WorkflowType
	}

	public set WorkflowType(value: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null) {
		this._fields.WorkflowType = value
	}

	// Current state of the schedule.
	public get State(): ScheduleState | $.VarRef<ScheduleState> | null {
		return this._fields.State
	}

	public set State(value: ScheduleState | $.VarRef<ScheduleState> | null) {
		this._fields.State = value
	}

	// Cron expression for the schedule.
	public get CronExpression(): string {
		return this._fields.CronExpression
	}

	public set CronExpression(value: string) {
		this._fields.CronExpression = value
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
		WorkflowType: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null
		State: ScheduleState | $.VarRef<ScheduleState> | null
		CronExpression: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{ScheduleId?: string, WorkflowType?: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null, State?: ScheduleState | $.VarRef<ScheduleState> | null, CronExpression?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ScheduleId: init?.ScheduleId ?? ("" as string),
			WorkflowType: init?.WorkflowType ?? (null! as __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null),
			State: init?.State ?? (null! as ScheduleState | $.VarRef<ScheduleState> | null),
			CronExpression: init?.CronExpression ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScheduleListEntry {
		return new ScheduleListEntry(this, true)
	}

	public __goscriptAssign(source: ScheduleListEntry): void {
		const target = this._fields
		const values = source._fields
		target.ScheduleId = values.ScheduleId
		target.WorkflowType = values.WorkflowType
		target.State = values.State
		target.CronExpression = values.CronExpression
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_7fe71309dc9555dc, $.arrayToSlice<number>([7])]
	}

	public GetCronExpression(): string {
		const m: ScheduleListEntry | $.VarRef<ScheduleListEntry> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleListEntry>(m).CronExpression
		}
		return ""
	}

	public GetScheduleId(): string {
		const m: ScheduleListEntry | $.VarRef<ScheduleListEntry> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleListEntry>(m).ScheduleId
		}
		return ""
	}

	public GetState(): ScheduleState | $.VarRef<ScheduleState> | null {
		const m: ScheduleListEntry | $.VarRef<ScheduleListEntry> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleListEntry>(m).State
		}
		return null
	}

	public GetWorkflowType(): __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null {
		const m: ScheduleListEntry | $.VarRef<ScheduleListEntry> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleListEntry>(m).WorkflowType
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ScheduleListEntry | $.VarRef<ScheduleListEntry> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleListEntry).Size() : ScheduleListEntry.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple8: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleListEntry).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScheduleListEntry.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScheduleListEntry | $.VarRef<ScheduleListEntry> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleListEntry).Size() : ScheduleListEntry.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleListEntry).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScheduleListEntry.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScheduleListEntry | $.VarRef<ScheduleListEntry> | null = this;
		const m$: ScheduleListEntry = m == null ? $.pointerTarget<ScheduleListEntry>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleListEntry>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ScheduleListEntry).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ScheduleListEntry).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScheduleListEntry).XXX_unrecognized)
		}
		if ($.stringLen((m$ as ScheduleListEntry).CronExpression) > 0) {
			i = i - ($.stringLen((m$ as ScheduleListEntry).CronExpression))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScheduleListEntry).CronExpression)
			i = encodeVarintSchedule(dAtA, i, $.uint64($.stringLen((m$ as ScheduleListEntry).CronExpression)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as ScheduleListEntry).State != null) {
			{
				let [size, err] = ScheduleState.prototype.MarshalToSizedBuffer.call((m$ as ScheduleListEntry).State, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as ScheduleListEntry).WorkflowType != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowType.prototype.MarshalToSizedBuffer.call((m$ as ScheduleListEntry).WorkflowType, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintSchedule(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as ScheduleListEntry).ScheduleId) > 0) {
			i = i - ($.stringLen((m$ as ScheduleListEntry).ScheduleId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScheduleListEntry).ScheduleId)
			i = encodeVarintSchedule(dAtA, i, $.uint64($.stringLen((m$ as ScheduleListEntry).ScheduleId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ScheduleListEntry | $.VarRef<ScheduleListEntry> | null = this;
		$.assignStruct($.pointerValue<ScheduleListEntry>(m), $.markAsStructValue(new ScheduleListEntry()))
	}

	public Size(): number {
		const m: ScheduleListEntry | $.VarRef<ScheduleListEntry> | null = this;
		let n: number = 0
		const m$: ScheduleListEntry = m == null ? $.pointerTarget<ScheduleListEntry>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleListEntry>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ScheduleListEntry).ScheduleId)
		if (l > 0) {
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleListEntry).WorkflowType != null) {
			l = __goscript_common_pb.WorkflowType.prototype.Size.call((m$ as ScheduleListEntry).WorkflowType)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleListEntry).State != null) {
			l = ScheduleState.prototype.Size.call((m$ as ScheduleListEntry).State)
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		l = $.stringLen((m$ as ScheduleListEntry).CronExpression)
		if (l > 0) {
			n = n + ((1 + l) + sovSchedule($.uint64(l)))
		}
		if ((m$ as ScheduleListEntry).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ScheduleListEntry).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ScheduleListEntry | $.VarRef<ScheduleListEntry> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleListEntry", /* @__PURE__ */ $.pointerType("apiv1.ScheduleListEntry")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ScheduleListEntry | $.VarRef<ScheduleListEntry> | null = this;
		const m$: ScheduleListEntry = m == null ? $.pointerTarget<ScheduleListEntry>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleListEntry>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow9 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowSchedule
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
				return fmt.Errorf("proto: ScheduleListEntry: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ScheduleListEntry: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScheduleListEntry).ScheduleId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowType", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleListEntry).WorkflowType == null) {
						;(m$ as ScheduleListEntry).WorkflowType = new __goscript_common_pb.WorkflowType()
					}
					{
						let err = __goscript_common_pb.WorkflowType.prototype.Unmarshal.call((m$ as ScheduleListEntry).WorkflowType, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field State", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleListEntry).State == null) {
						;(m$ as ScheduleListEntry).State = new ScheduleState()
					}
					{
						let err = ScheduleState.prototype.Unmarshal.call((m$ as ScheduleListEntry).State, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field CronExpression", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSchedule
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
						return ErrInvalidLengthSchedule
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthSchedule
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScheduleListEntry).CronExpression = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipSchedule($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthSchedule
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScheduleListEntry).XXX_unrecognized = $.appendSlice((m$ as ScheduleListEntry).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ScheduleListEntry | $.VarRef<ScheduleListEntry> | null = this;
		await xxx_messageInfo_ScheduleListEntry.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleListEntry", /* @__PURE__ */ $.pointerType("apiv1.ScheduleListEntry")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ScheduleListEntry | $.VarRef<ScheduleListEntry> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ScheduleListEntry.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleListEntry", /* @__PURE__ */ $.pointerType("apiv1.ScheduleListEntry")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleListEntry).MarshalToSizedBuffer(b) : ScheduleListEntry.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ScheduleListEntry | $.VarRef<ScheduleListEntry> | null = this;
		await xxx_messageInfo_ScheduleListEntry.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleListEntry", /* @__PURE__ */ $.pointerType("apiv1.ScheduleListEntry")), src)
	}

	public XXX_Size(): number {
		const m: ScheduleListEntry | $.VarRef<ScheduleListEntry> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleListEntry).Size() : ScheduleListEntry.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ScheduleListEntry | $.VarRef<ScheduleListEntry> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleListEntry).Unmarshal(b) : ScheduleListEntry.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ScheduleListEntry",
		() => new ScheduleListEntry(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetCronExpression", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetScheduleId", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetState", [], [/* @__PURE__ */ $.pointerType("apiv1.ScheduleState")], true), $.methodSignature("GetWorkflowType", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowType")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ScheduleListEntry,
		() => [/* @__PURE__ */ $.structField("ScheduleId", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=schedule_id,json=scheduleId,proto3\" json:\"schedule_id,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowType", /* @__PURE__ */ $.pointerType("apiv1.WorkflowType"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=workflow_type,json=workflowType,proto3\" json:\"workflow_type,omitempty\"" }), /* @__PURE__ */ $.structField("State", /* @__PURE__ */ $.pointerType("apiv1.ScheduleState"), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=state,proto3\" json:\"state,omitempty\"" }), /* @__PURE__ */ $.structField("CronExpression", /* @__PURE__ */ $.basicType("string"), [3], 32, true, { tag: "protobuf:\"bytes,4,opt,name=cron_expression,json=cronExpression,proto3\" json:\"cron_expression,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [4], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [6], 72, true, { tag: "json:\"-\"" })]
	)
}

export const ScheduleOverlapPolicy_SCHEDULE_OVERLAP_POLICY_INVALID: ScheduleOverlapPolicy = 0

export const ScheduleOverlapPolicy_SCHEDULE_OVERLAP_POLICY_SKIP_NEW: ScheduleOverlapPolicy = 1

export const ScheduleOverlapPolicy_SCHEDULE_OVERLAP_POLICY_BUFFER: ScheduleOverlapPolicy = 2

export const ScheduleOverlapPolicy_SCHEDULE_OVERLAP_POLICY_CONCURRENT: ScheduleOverlapPolicy = 3

export const ScheduleOverlapPolicy_SCHEDULE_OVERLAP_POLICY_CANCEL_PREVIOUS: ScheduleOverlapPolicy = 4

export const ScheduleOverlapPolicy_SCHEDULE_OVERLAP_POLICY_TERMINATE_PREVIOUS: ScheduleOverlapPolicy = 5

export const ScheduleCatchUpPolicy_SCHEDULE_CATCH_UP_POLICY_INVALID: ScheduleCatchUpPolicy = 0

export const ScheduleCatchUpPolicy_SCHEDULE_CATCH_UP_POLICY_SKIP: ScheduleCatchUpPolicy = 1

export const ScheduleCatchUpPolicy_SCHEDULE_CATCH_UP_POLICY_ONE: ScheduleCatchUpPolicy = 2

export const ScheduleCatchUpPolicy_SCHEDULE_CATCH_UP_POLICY_ALL: ScheduleCatchUpPolicy = 3

export let ScheduleOverlapPolicy_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "SCHEDULE_OVERLAP_POLICY_INVALID"], [1, "SCHEDULE_OVERLAP_POLICY_SKIP_NEW"], [2, "SCHEDULE_OVERLAP_POLICY_BUFFER"], [3, "SCHEDULE_OVERLAP_POLICY_CONCURRENT"], [4, "SCHEDULE_OVERLAP_POLICY_CANCEL_PREVIOUS"], [5, "SCHEDULE_OVERLAP_POLICY_TERMINATE_PREVIOUS"]])

export function __goscript_set_ScheduleOverlapPolicy_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	ScheduleOverlapPolicy_name = __goscriptValue
}

export let ScheduleOverlapPolicy_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["SCHEDULE_OVERLAP_POLICY_INVALID", 0], ["SCHEDULE_OVERLAP_POLICY_SKIP_NEW", 1], ["SCHEDULE_OVERLAP_POLICY_BUFFER", 2], ["SCHEDULE_OVERLAP_POLICY_CONCURRENT", 3], ["SCHEDULE_OVERLAP_POLICY_CANCEL_PREVIOUS", 4], ["SCHEDULE_OVERLAP_POLICY_TERMINATE_PREVIOUS", 5]])

export function __goscript_set_ScheduleOverlapPolicy_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	ScheduleOverlapPolicy_value = __goscriptValue
}

export function ScheduleOverlapPolicy_String(x: ScheduleOverlapPolicy): string {
	return proto.EnumName(ScheduleOverlapPolicy_name, $.int(x, 32))
}

export function ScheduleOverlapPolicy_EnumDescriptor(recv: ScheduleOverlapPolicy): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_7fe71309dc9555dc, $.arrayToSlice<number>([0])]
}

export let ScheduleCatchUpPolicy_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "SCHEDULE_CATCH_UP_POLICY_INVALID"], [1, "SCHEDULE_CATCH_UP_POLICY_SKIP"], [2, "SCHEDULE_CATCH_UP_POLICY_ONE"], [3, "SCHEDULE_CATCH_UP_POLICY_ALL"]])

export function __goscript_set_ScheduleCatchUpPolicy_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	ScheduleCatchUpPolicy_name = __goscriptValue
}

export let ScheduleCatchUpPolicy_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["SCHEDULE_CATCH_UP_POLICY_INVALID", 0], ["SCHEDULE_CATCH_UP_POLICY_SKIP", 1], ["SCHEDULE_CATCH_UP_POLICY_ONE", 2], ["SCHEDULE_CATCH_UP_POLICY_ALL", 3]])

export function __goscript_set_ScheduleCatchUpPolicy_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	ScheduleCatchUpPolicy_value = __goscriptValue
}

export function ScheduleCatchUpPolicy_String(x: ScheduleCatchUpPolicy): string {
	return proto.EnumName(ScheduleCatchUpPolicy_name, $.int(x, 32))
}

export function ScheduleCatchUpPolicy_EnumDescriptor(recv: ScheduleCatchUpPolicy): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_7fe71309dc9555dc, $.arrayToSlice<number>([1])]
}

export let xxx_messageInfo_ScheduleSpec: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ScheduleSpec(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ScheduleSpec.value, __goscriptValue)
}

export let xxx_messageInfo_ScheduleAction: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ScheduleAction(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ScheduleAction.value, __goscriptValue)
}

export let xxx_messageInfo_ScheduleAction_StartWorkflowAction: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ScheduleAction_StartWorkflowAction(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ScheduleAction_StartWorkflowAction.value, __goscriptValue)
}

export let xxx_messageInfo_SchedulePolicies: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_SchedulePolicies(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_SchedulePolicies.value, __goscriptValue)
}

export let xxx_messageInfo_SchedulePauseInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_SchedulePauseInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_SchedulePauseInfo.value, __goscriptValue)
}

export let xxx_messageInfo_ScheduleState: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ScheduleState(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ScheduleState.value, __goscriptValue)
}

export let xxx_messageInfo_BackfillInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_BackfillInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_BackfillInfo.value, __goscriptValue)
}

export let xxx_messageInfo_ScheduleInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ScheduleInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ScheduleInfo.value, __goscriptValue)
}

export let xxx_messageInfo_ScheduleListEntry: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ScheduleListEntry(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ScheduleListEntry.value, __goscriptValue)
}

async function __goscriptInit0(): globalThis.Promise<void> {
	proto.RegisterEnum("uber.cadence.api.v1.ScheduleOverlapPolicy", ScheduleOverlapPolicy_name, ScheduleOverlapPolicy_value)
	proto.RegisterEnum("uber.cadence.api.v1.ScheduleCatchUpPolicy", ScheduleCatchUpPolicy_name, ScheduleCatchUpPolicy_value)
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ScheduleSpec", /* @__PURE__ */ $.pointerType("apiv1.ScheduleSpec")), "uber.cadence.api.v1.ScheduleSpec")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ScheduleAction", /* @__PURE__ */ $.pointerType("apiv1.ScheduleAction")), "uber.cadence.api.v1.ScheduleAction")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ScheduleAction_StartWorkflowAction", /* @__PURE__ */ $.pointerType("apiv1.ScheduleAction_StartWorkflowAction")), "uber.cadence.api.v1.ScheduleAction.StartWorkflowAction")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.SchedulePolicies", /* @__PURE__ */ $.pointerType("apiv1.SchedulePolicies")), "uber.cadence.api.v1.SchedulePolicies")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.SchedulePauseInfo", /* @__PURE__ */ $.pointerType("apiv1.SchedulePauseInfo")), "uber.cadence.api.v1.SchedulePauseInfo")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ScheduleState", /* @__PURE__ */ $.pointerType("apiv1.ScheduleState")), "uber.cadence.api.v1.ScheduleState")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.BackfillInfo", /* @__PURE__ */ $.pointerType("apiv1.BackfillInfo")), "uber.cadence.api.v1.BackfillInfo")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ScheduleInfo", /* @__PURE__ */ $.pointerType("apiv1.ScheduleInfo")), "uber.cadence.api.v1.ScheduleInfo")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ScheduleListEntry", /* @__PURE__ */ $.pointerType("apiv1.ScheduleListEntry")), "uber.cadence.api.v1.ScheduleListEntry")
}

async function __goscriptInit1(): globalThis.Promise<void> {
	proto.RegisterFile("uber/cadence/api/v1/schedule.proto", fileDescriptor_7fe71309dc9555dc)
}

export let fileDescriptor_7fe71309dc9555dc: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 196, 87, 207, 115, 219, 196, 23, 255, 42, 137, 83, 251, 57, 118, 149, 237, 151, 214, 164, 77, 234, 24, 250, 99, 82, 106, 79, 2, 76, 129, 206, 116, 198, 113, 148, 169, 7, 215, 54, 27, 187, 25, 56, 160, 145, 165, 117, 178, 68, 214, 106, 164, 85, 18, 31, 57, 243, 111, 112, 226, 47, 225, 200, 31, 192, 12, 76, 47, 220, 57, 112, 133, 217, 213, 74, 113, 91, 57, 233, 112, 225, 166, 253, 236, 231, 243, 246, 189, 183, 111, 247, 173, 160, 22, 141, 72, 208, 176, 45, 135, 120, 54, 105, 88, 62, 109, 156, 110, 55, 66, 251, 152, 56, 145, 75, 234, 126, 192, 56, 67, 55, 4, 167, 174, 56, 117, 203, 167, 245, 211, 237, 181, 141, 35, 198, 142, 92, 210, 144, 148, 81, 52, 110, 56, 81, 96, 113, 202, 188, 88, 180, 118, 247, 205, 121, 78, 39, 36, 228, 214, 196, 87, 132, 106, 214, 202, 54, 155, 76, 82, 19, 153, 190, 113, 43, 60, 113, 105, 200, 99, 78, 237, 87, 13, 86, 14, 148, 187, 7, 62, 177, 209, 3, 184, 110, 7, 204, 51, 201, 185, 31, 144, 48, 164, 204, 171, 104, 85, 237, 97, 1, 151, 5, 108, 164, 40, 250, 28, 32, 228, 86, 192, 77, 225, 88, 101, 161, 170, 61, 44, 238, 172, 213, 99, 175, 235, 137, 215, 245, 65, 226, 53, 46, 72, 182, 24, 163, 79, 33, 79, 60, 39, 22, 46, 94, 41, 188, 70, 60, 71, 202, 182, 97, 249, 59, 202, 57, 9, 42, 75, 82, 244, 254, 91, 162, 61, 149, 67, 172, 136, 181, 63, 115, 80, 78, 194, 107, 218, 98, 10, 125, 11, 229, 216, 239, 51, 22, 156, 140, 93, 118, 38, 227, 43, 238, 60, 169, 103, 108, 83, 253, 117, 113, 253, 64, 40, 15, 149, 48, 198, 112, 41, 156, 5, 215, 254, 94, 130, 27, 25, 52, 180, 15, 165, 100, 69, 147, 79, 125, 162, 150, 221, 204, 92, 54, 209, 14, 166, 62, 193, 43, 103, 51, 35, 244, 5, 20, 196, 30, 154, 98, 19, 85, 218, 215, 51, 109, 12, 172, 240, 164, 67, 67, 142, 243, 92, 125, 161, 29, 200, 81, 207, 143, 184, 202, 250, 157, 76, 93, 223, 154, 186, 204, 114, 112, 76, 69, 31, 1, 74, 253, 166, 142, 233, 7, 100, 76, 207, 229, 14, 20, 176, 158, 204, 180, 157, 190, 196, 145, 5, 85, 114, 78, 236, 72, 132, 108, 170, 250, 96, 166, 237, 178, 144, 200, 253, 102, 17, 175, 228, 174, 218, 189, 59, 169, 9, 153, 200, 1, 107, 9, 253, 32, 150, 163, 67, 184, 45, 19, 48, 199, 250, 242, 85, 214, 111, 9, 117, 150, 225, 22, 172, 4, 132, 7, 83, 211, 103, 46, 181, 167, 149, 107, 210, 82, 53, 51, 73, 88, 16, 251, 146, 135, 139, 193, 197, 0, 61, 134, 165, 9, 153, 176, 74, 94, 185, 145, 37, 126, 65, 38, 12, 75, 26, 194, 176, 26, 18, 43, 176, 143, 77, 139, 243, 128, 142, 34, 78, 194, 74, 65, 106, 239, 101, 23, 164, 100, 55, 83, 50, 214, 195, 55, 144, 218, 95, 11, 160, 39, 117, 43, 189, 162, 36, 68, 95, 65, 153, 157, 146, 192, 181, 252, 36, 60, 81, 127, 229, 157, 173, 75, 203, 190, 23, 75, 84, 160, 37, 54, 59, 68, 24, 174, 219, 22, 183, 143, 205, 40, 181, 185, 240, 14, 54, 91, 66, 51, 76, 109, 218, 179, 67, 212, 156, 177, 121, 70, 61, 135, 157, 169, 90, 189, 100, 67, 19, 19, 135, 146, 143, 30, 130, 238, 91, 81, 72, 76, 230, 153, 99, 139, 186, 81, 64, 100, 185, 230, 113, 89, 226, 61, 111, 63, 70, 209, 38, 172, 140, 162, 241, 152, 4, 166, 75, 39, 52, 46, 204, 28, 46, 198, 88, 71, 64, 232, 17, 172, 218, 204, 179, 163, 32, 32, 158, 61, 85, 188, 101, 201, 211, 103, 38, 36, 185, 246, 189, 6, 171, 105, 226, 197, 82, 109, 111, 204, 208, 77, 88, 14, 136, 21, 166, 23, 169, 26, 161, 39, 80, 144, 254, 56, 166, 197, 223, 225, 254, 204, 199, 228, 38, 71, 183, 83, 225, 104, 42, 179, 83, 72, 38, 119, 167, 53, 15, 74, 233, 125, 206, 45, 78, 196, 242, 241, 164, 92, 62, 143, 213, 8, 25, 0, 113, 154, 168, 55, 102, 106, 253, 251, 151, 110, 92, 26, 18, 142, 215, 23, 159, 181, 63, 52, 88, 217, 181, 236, 147, 49, 117, 93, 25, 238, 93, 40, 142, 212, 216, 164, 142, 138, 25, 18, 168, 237, 252, 7, 141, 227, 30, 148, 131, 200, 11, 77, 155, 77, 124, 151, 112, 226, 200, 122, 200, 225, 146, 64, 91, 9, 136, 214, 1, 36, 141, 51, 110, 185, 170, 24, 10, 2, 25, 8, 160, 246, 211, 210, 69, 171, 148, 145, 62, 131, 146, 107, 133, 220, 12, 34, 47, 118, 73, 187, 210, 165, 162, 16, 224, 200, 147, 110, 61, 131, 146, 71, 206, 103, 244, 87, 231, 162, 40, 4, 137, 126, 29, 64, 186, 42, 12, 132, 50, 31, 139, 184, 32, 17, 28, 121, 33, 122, 10, 69, 59, 32, 22, 143, 175, 70, 213, 51, 47, 51, 14, 49, 93, 218, 222, 3, 93, 198, 22, 249, 78, 106, 33, 119, 165, 133, 178, 208, 12, 165, 68, 90, 233, 194, 42, 243, 142, 24, 245, 142, 204, 164, 0, 194, 202, 114, 117, 113, 110, 223, 155, 173, 36, 172, 43, 109, 2, 134, 162, 182, 38, 52, 20, 149, 47, 67, 190, 38, 67, 134, 24, 146, 49, 111, 194, 74, 120, 66, 125, 63, 97, 228, 37, 163, 168, 48, 73, 169, 195, 141, 248, 128, 19, 199, 28, 211, 128, 152, 54, 139, 60, 46, 239, 220, 69, 188, 154, 76, 237, 211, 128, 180, 196, 4, 250, 4, 110, 6, 145, 231, 137, 24, 210, 62, 24, 75, 64, 74, 254, 175, 102, 147, 150, 45, 85, 181, 223, 102, 174, 2, 209, 122, 13, 143, 7, 83, 225, 127, 242, 54, 156, 57, 27, 9, 212, 118, 222, 126, 36, 44, 252, 187, 71, 194, 103, 144, 11, 197, 233, 87, 167, 164, 118, 233, 185, 150, 247, 4, 142, 5, 89, 239, 191, 165, 172, 247, 223, 214, 15, 11, 240, 94, 102, 155, 64, 31, 192, 221, 131, 214, 115, 99, 111, 216, 49, 204, 222, 75, 3, 119, 154, 125, 179, 223, 235, 180, 91, 95, 155, 237, 238, 203, 102, 167, 189, 167, 255, 15, 125, 8, 213, 121, 164, 131, 47, 219, 125, 179, 107, 28, 234, 26, 170, 193, 198, 60, 214, 238, 112, 127, 223, 192, 250, 2, 186, 15, 181, 121, 156, 86, 175, 219, 26, 98, 108, 116, 7, 250, 34, 122, 4, 15, 230, 242, 154, 221, 150, 209, 49, 251, 216, 120, 217, 238, 13, 15, 244, 37, 84, 135, 173, 121, 228, 129, 129, 95, 180, 187, 205, 129, 113, 193, 207, 109, 253, 168, 93, 100, 227, 181, 6, 247, 90, 160, 173, 230, 160, 245, 220, 28, 102, 164, 99, 19, 214, 231, 178, 68, 62, 116, 13, 85, 225, 206, 92, 74, 175, 107, 232, 11, 151, 50, 154, 157, 142, 190, 184, 75, 127, 126, 181, 161, 253, 242, 106, 67, 251, 253, 213, 134, 6, 183, 108, 54, 201, 170, 140, 221, 180, 133, 244, 197, 25, 239, 107, 223, 108, 31, 81, 126, 28, 141, 234, 54, 155, 52, 102, 255, 42, 30, 83, 199, 109, 28, 177, 248, 47, 69, 253, 98, 60, 181, 124, 122, 186, 61, 90, 150, 216, 199, 255, 4, 0, 0, 255, 255, 133, 155, 184, 93, 34, 13, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_7fe71309dc9555dc(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_7fe71309dc9555dc = __goscriptValue
}

export function encodeVarintSchedule(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovSchedule(v))
	let base = offset
	for (let __goscriptSliceWindow10 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export function sovSchedule(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozSchedule(x: bigint): number {
	let n: number = 0
	return sovSchedule($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export function skipSchedule(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow11 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowSchedule]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
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
						return [0, ErrIntOverflowSchedule]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowSchedule]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthSchedule]
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
					return [0, ErrUnexpectedEndOfGroupSchedule]
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
			return [0, ErrInvalidLengthSchedule]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthSchedule: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthSchedule(__goscriptValue: $.GoError): void {
	ErrInvalidLengthSchedule = __goscriptValue
}

export let ErrIntOverflowSchedule: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowSchedule(__goscriptValue: $.GoError): void {
	ErrIntOverflowSchedule = __goscriptValue
}

export let ErrUnexpectedEndOfGroupSchedule: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupSchedule(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupSchedule = __goscriptValue
}

export { __goscriptInit0 }

export { __goscriptInit1 }
