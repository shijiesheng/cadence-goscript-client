// Generated file based on decision.pb.go
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

import * as __goscript_workflow_pb from "./workflow.pb.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "./common.pb.gs.ts"
import "./tasklist.pb.gs.ts"
import "./workflow.pb.gs.ts"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.Decision", "apiv1.isDecision_Attributes", "apiv1.Decision_ScheduleActivityTaskDecisionAttributes", "apiv1.Decision_StartTimerDecisionAttributes", "apiv1.Decision_CompleteWorkflowExecutionDecisionAttributes", "apiv1.Decision_FailWorkflowExecutionDecisionAttributes", "apiv1.Decision_RequestCancelActivityTaskDecisionAttributes", "apiv1.Decision_CancelTimerDecisionAttributes", "apiv1.Decision_CancelWorkflowExecutionDecisionAttributes", "apiv1.Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes", "apiv1.Decision_RecordMarkerDecisionAttributes", "apiv1.Decision_ContinueAsNewWorkflowExecutionDecisionAttributes", "apiv1.Decision_StartChildWorkflowExecutionDecisionAttributes", "apiv1.Decision_SignalExternalWorkflowExecutionDecisionAttributes", "apiv1.Decision_UpsertWorkflowSearchAttributesDecisionAttributes", "apiv1.ScheduleActivityTaskDecisionAttributes", "apiv1.StartTimerDecisionAttributes", "apiv1.CompleteWorkflowExecutionDecisionAttributes", "apiv1.FailWorkflowExecutionDecisionAttributes", "apiv1.RequestCancelActivityTaskDecisionAttributes", "apiv1.CancelTimerDecisionAttributes", "apiv1.CancelWorkflowExecutionDecisionAttributes", "apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes", "apiv1.RecordMarkerDecisionAttributes", "apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes", "apiv1.StartChildWorkflowExecutionDecisionAttributes", "apiv1.SignalExternalWorkflowExecutionDecisionAttributes", "apiv1.UpsertWorkflowSearchAttributesDecisionAttributes"])

export type isDecision_Attributes = {
	MarshalTo(_p0: $.Slice<number>): [number, $.GoError]
	Size(): number
	isDecision_Attributes(): void
}

$.registerInterfaceType(
	"apiv1.isDecision_Attributes",
	null,
	[{ name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }] }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }] }, { name: "isDecision_Attributes", args: [], returns: [] }]
);

export class Decision {
	// Types that are valid to be assigned to Attributes:
	// 	*Decision_ScheduleActivityTaskDecisionAttributes
	// 	*Decision_StartTimerDecisionAttributes
	// 	*Decision_CompleteWorkflowExecutionDecisionAttributes
	// 	*Decision_FailWorkflowExecutionDecisionAttributes
	// 	*Decision_RequestCancelActivityTaskDecisionAttributes
	// 	*Decision_CancelTimerDecisionAttributes
	// 	*Decision_CancelWorkflowExecutionDecisionAttributes
	// 	*Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes
	// 	*Decision_RecordMarkerDecisionAttributes
	// 	*Decision_ContinueAsNewWorkflowExecutionDecisionAttributes
	// 	*Decision_StartChildWorkflowExecutionDecisionAttributes
	// 	*Decision_SignalExternalWorkflowExecutionDecisionAttributes
	// 	*Decision_UpsertWorkflowSearchAttributesDecisionAttributes
	public get Attributes(): isDecision_Attributes | null {
		return this._fields.Attributes
	}

	public set Attributes(value: isDecision_Attributes | null) {
		this._fields.Attributes = value
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
		Attributes: isDecision_Attributes | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Attributes?: isDecision_Attributes | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Attributes: init?.Attributes ?? (null! as isDecision_Attributes | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decision {
		return new Decision(this, true)
	}

	public __goscriptAssign(source: Decision): void {
		const target = this._fields
		const values = source._fields
		target.Attributes = $.assignFieldValue(target.Attributes, values.Attributes, "apiv1.isDecision_Attributes")
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_fb529b236ea74dc2, $.arrayToSlice<number>([0])]
	}

	public GetAttributes(): isDecision_Attributes | null {
		const m: Decision | $.VarRef<Decision> | null = this;
		if (m != null) {
			return $.pointerValue<Decision>(m).Attributes
		}
		return null
	}

	public GetCancelTimerDecisionAttributes(): CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null {
		const m: Decision | $.VarRef<Decision> | null = this;
		{
			let __goscriptTuple0: any = $.typeAssertTuple<Decision_CancelTimerDecisionAttributes | $.VarRef<Decision_CancelTimerDecisionAttributes> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).GetAttributes() : Decision.prototype.GetAttributes.call(m)), /* @__PURE__ */ $.pointerType("apiv1.Decision_CancelTimerDecisionAttributes"))
			let x: Decision_CancelTimerDecisionAttributes | $.VarRef<Decision_CancelTimerDecisionAttributes> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				return $.pointerValue<Decision_CancelTimerDecisionAttributes>(x).CancelTimerDecisionAttributes
			}
		}
		return null
	}

	public GetCancelWorkflowExecutionDecisionAttributes(): CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null {
		const m: Decision | $.VarRef<Decision> | null = this;
		{
			let __goscriptTuple1: any = $.typeAssertTuple<Decision_CancelWorkflowExecutionDecisionAttributes | $.VarRef<Decision_CancelWorkflowExecutionDecisionAttributes> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).GetAttributes() : Decision.prototype.GetAttributes.call(m)), /* @__PURE__ */ $.pointerType("apiv1.Decision_CancelWorkflowExecutionDecisionAttributes"))
			let x: Decision_CancelWorkflowExecutionDecisionAttributes | $.VarRef<Decision_CancelWorkflowExecutionDecisionAttributes> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				return $.pointerValue<Decision_CancelWorkflowExecutionDecisionAttributes>(x).CancelWorkflowExecutionDecisionAttributes
			}
		}
		return null
	}

	public GetCompleteWorkflowExecutionDecisionAttributes(): CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null {
		const m: Decision | $.VarRef<Decision> | null = this;
		{
			let __goscriptTuple2: any = $.typeAssertTuple<Decision_CompleteWorkflowExecutionDecisionAttributes | $.VarRef<Decision_CompleteWorkflowExecutionDecisionAttributes> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).GetAttributes() : Decision.prototype.GetAttributes.call(m)), /* @__PURE__ */ $.pointerType("apiv1.Decision_CompleteWorkflowExecutionDecisionAttributes"))
			let x: Decision_CompleteWorkflowExecutionDecisionAttributes | $.VarRef<Decision_CompleteWorkflowExecutionDecisionAttributes> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (ok) {
				return $.pointerValue<Decision_CompleteWorkflowExecutionDecisionAttributes>(x).CompleteWorkflowExecutionDecisionAttributes
			}
		}
		return null
	}

	public GetContinueAsNewWorkflowExecutionDecisionAttributes(): ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null {
		const m: Decision | $.VarRef<Decision> | null = this;
		{
			let __goscriptTuple3: any = $.typeAssertTuple<Decision_ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<Decision_ContinueAsNewWorkflowExecutionDecisionAttributes> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).GetAttributes() : Decision.prototype.GetAttributes.call(m)), /* @__PURE__ */ $.pointerType("apiv1.Decision_ContinueAsNewWorkflowExecutionDecisionAttributes"))
			let x: Decision_ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<Decision_ContinueAsNewWorkflowExecutionDecisionAttributes> | null = __goscriptTuple3[0]
			let ok = __goscriptTuple3[1]
			if (ok) {
				return $.pointerValue<Decision_ContinueAsNewWorkflowExecutionDecisionAttributes>(x).ContinueAsNewWorkflowExecutionDecisionAttributes
			}
		}
		return null
	}

	public GetFailWorkflowExecutionDecisionAttributes(): FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null {
		const m: Decision | $.VarRef<Decision> | null = this;
		{
			let __goscriptTuple4: any = $.typeAssertTuple<Decision_FailWorkflowExecutionDecisionAttributes | $.VarRef<Decision_FailWorkflowExecutionDecisionAttributes> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).GetAttributes() : Decision.prototype.GetAttributes.call(m)), /* @__PURE__ */ $.pointerType("apiv1.Decision_FailWorkflowExecutionDecisionAttributes"))
			let x: Decision_FailWorkflowExecutionDecisionAttributes | $.VarRef<Decision_FailWorkflowExecutionDecisionAttributes> | null = __goscriptTuple4[0]
			let ok = __goscriptTuple4[1]
			if (ok) {
				return $.pointerValue<Decision_FailWorkflowExecutionDecisionAttributes>(x).FailWorkflowExecutionDecisionAttributes
			}
		}
		return null
	}

	public GetRecordMarkerDecisionAttributes(): RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null {
		const m: Decision | $.VarRef<Decision> | null = this;
		{
			let __goscriptTuple5: any = $.typeAssertTuple<Decision_RecordMarkerDecisionAttributes | $.VarRef<Decision_RecordMarkerDecisionAttributes> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).GetAttributes() : Decision.prototype.GetAttributes.call(m)), /* @__PURE__ */ $.pointerType("apiv1.Decision_RecordMarkerDecisionAttributes"))
			let x: Decision_RecordMarkerDecisionAttributes | $.VarRef<Decision_RecordMarkerDecisionAttributes> | null = __goscriptTuple5[0]
			let ok = __goscriptTuple5[1]
			if (ok) {
				return $.pointerValue<Decision_RecordMarkerDecisionAttributes>(x).RecordMarkerDecisionAttributes
			}
		}
		return null
	}

	public GetRequestCancelActivityTaskDecisionAttributes(): RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null {
		const m: Decision | $.VarRef<Decision> | null = this;
		{
			let __goscriptTuple6: any = $.typeAssertTuple<Decision_RequestCancelActivityTaskDecisionAttributes | $.VarRef<Decision_RequestCancelActivityTaskDecisionAttributes> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).GetAttributes() : Decision.prototype.GetAttributes.call(m)), /* @__PURE__ */ $.pointerType("apiv1.Decision_RequestCancelActivityTaskDecisionAttributes"))
			let x: Decision_RequestCancelActivityTaskDecisionAttributes | $.VarRef<Decision_RequestCancelActivityTaskDecisionAttributes> | null = __goscriptTuple6[0]
			let ok = __goscriptTuple6[1]
			if (ok) {
				return $.pointerValue<Decision_RequestCancelActivityTaskDecisionAttributes>(x).RequestCancelActivityTaskDecisionAttributes
			}
		}
		return null
	}

	public GetRequestCancelExternalWorkflowExecutionDecisionAttributes(): RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null {
		const m: Decision | $.VarRef<Decision> | null = this;
		{
			let __goscriptTuple7: any = $.typeAssertTuple<Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).GetAttributes() : Decision.prototype.GetAttributes.call(m)), /* @__PURE__ */ $.pointerType("apiv1.Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes"))
			let x: Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = __goscriptTuple7[0]
			let ok = __goscriptTuple7[1]
			if (ok) {
				return $.pointerValue<Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes>(x).RequestCancelExternalWorkflowExecutionDecisionAttributes
			}
		}
		return null
	}

	public GetScheduleActivityTaskDecisionAttributes(): ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null {
		const m: Decision | $.VarRef<Decision> | null = this;
		{
			let __goscriptTuple8: any = $.typeAssertTuple<Decision_ScheduleActivityTaskDecisionAttributes | $.VarRef<Decision_ScheduleActivityTaskDecisionAttributes> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).GetAttributes() : Decision.prototype.GetAttributes.call(m)), /* @__PURE__ */ $.pointerType("apiv1.Decision_ScheduleActivityTaskDecisionAttributes"))
			let x: Decision_ScheduleActivityTaskDecisionAttributes | $.VarRef<Decision_ScheduleActivityTaskDecisionAttributes> | null = __goscriptTuple8[0]
			let ok = __goscriptTuple8[1]
			if (ok) {
				return $.pointerValue<Decision_ScheduleActivityTaskDecisionAttributes>(x).ScheduleActivityTaskDecisionAttributes
			}
		}
		return null
	}

	public GetSignalExternalWorkflowExecutionDecisionAttributes(): SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null {
		const m: Decision | $.VarRef<Decision> | null = this;
		{
			let __goscriptTuple9: any = $.typeAssertTuple<Decision_SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<Decision_SignalExternalWorkflowExecutionDecisionAttributes> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).GetAttributes() : Decision.prototype.GetAttributes.call(m)), /* @__PURE__ */ $.pointerType("apiv1.Decision_SignalExternalWorkflowExecutionDecisionAttributes"))
			let x: Decision_SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<Decision_SignalExternalWorkflowExecutionDecisionAttributes> | null = __goscriptTuple9[0]
			let ok = __goscriptTuple9[1]
			if (ok) {
				return $.pointerValue<Decision_SignalExternalWorkflowExecutionDecisionAttributes>(x).SignalExternalWorkflowExecutionDecisionAttributes
			}
		}
		return null
	}

	public GetStartChildWorkflowExecutionDecisionAttributes(): StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null {
		const m: Decision | $.VarRef<Decision> | null = this;
		{
			let __goscriptTuple10: any = $.typeAssertTuple<Decision_StartChildWorkflowExecutionDecisionAttributes | $.VarRef<Decision_StartChildWorkflowExecutionDecisionAttributes> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).GetAttributes() : Decision.prototype.GetAttributes.call(m)), /* @__PURE__ */ $.pointerType("apiv1.Decision_StartChildWorkflowExecutionDecisionAttributes"))
			let x: Decision_StartChildWorkflowExecutionDecisionAttributes | $.VarRef<Decision_StartChildWorkflowExecutionDecisionAttributes> | null = __goscriptTuple10[0]
			let ok = __goscriptTuple10[1]
			if (ok) {
				return $.pointerValue<Decision_StartChildWorkflowExecutionDecisionAttributes>(x).StartChildWorkflowExecutionDecisionAttributes
			}
		}
		return null
	}

	public GetStartTimerDecisionAttributes(): StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null {
		const m: Decision | $.VarRef<Decision> | null = this;
		{
			let __goscriptTuple11: any = $.typeAssertTuple<Decision_StartTimerDecisionAttributes | $.VarRef<Decision_StartTimerDecisionAttributes> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).GetAttributes() : Decision.prototype.GetAttributes.call(m)), /* @__PURE__ */ $.pointerType("apiv1.Decision_StartTimerDecisionAttributes"))
			let x: Decision_StartTimerDecisionAttributes | $.VarRef<Decision_StartTimerDecisionAttributes> | null = __goscriptTuple11[0]
			let ok = __goscriptTuple11[1]
			if (ok) {
				return $.pointerValue<Decision_StartTimerDecisionAttributes>(x).StartTimerDecisionAttributes
			}
		}
		return null
	}

	public GetUpsertWorkflowSearchAttributesDecisionAttributes(): UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null {
		const m: Decision | $.VarRef<Decision> | null = this;
		{
			let __goscriptTuple12: any = $.typeAssertTuple<Decision_UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<Decision_UpsertWorkflowSearchAttributesDecisionAttributes> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).GetAttributes() : Decision.prototype.GetAttributes.call(m)), /* @__PURE__ */ $.pointerType("apiv1.Decision_UpsertWorkflowSearchAttributesDecisionAttributes"))
			let x: Decision_UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<Decision_UpsertWorkflowSearchAttributesDecisionAttributes> | null = __goscriptTuple12[0]
			let ok = __goscriptTuple12[1]
			if (ok) {
				return $.pointerValue<Decision_UpsertWorkflowSearchAttributesDecisionAttributes>(x).UpsertWorkflowSearchAttributesDecisionAttributes
			}
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Decision | $.VarRef<Decision> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).Size() : Decision.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple13: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Decision.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple13[0]
		err = __goscriptTuple13[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision | $.VarRef<Decision> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).Size() : Decision.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Decision.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision | $.VarRef<Decision> | null = this;
		const m$: Decision = m == null ? $.pointerTarget<Decision>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Decision).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Decision).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Decision).XXX_unrecognized)
		}
		if ((m$ as Decision).Attributes != null) {
			{
				let size = $.pointerValue<Exclude<isDecision_Attributes, null>>((m$ as Decision).Attributes).Size()
				i = i - (size)
				{
					let [, err] = $.pointerValue<Exclude<isDecision_Attributes, null>>((m$ as Decision).Attributes).MarshalTo($.goSlice(dAtA, i, undefined))
					if (err != null) {
						return [0, err]
					}
				}
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: Decision | $.VarRef<Decision> | null = this;
		$.assignStruct($.pointerValue<Decision>(m), $.markAsStructValue(new Decision()))
	}

	public Size(): number {
		const m: Decision | $.VarRef<Decision> | null = this;
		let n: number = 0
		const m$: Decision = m == null ? $.pointerTarget<Decision>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Decision).Attributes != null) {
			n = n + ($.pointerValue<Exclude<isDecision_Attributes, null>>((m$ as Decision).Attributes).Size())
		}
		if ((m$ as Decision).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Decision).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: Decision | $.VarRef<Decision> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.Decision", /* @__PURE__ */ $.pointerType("apiv1.Decision")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Decision | $.VarRef<Decision> | null = this;
		const m$: Decision = m == null ? $.pointerTarget<Decision>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDecision
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
				return fmt.Errorf("proto: Decision: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Decision: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduleActivityTaskDecisionAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = new ScheduleActivityTaskDecisionAttributes()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as ScheduleActivityTaskDecisionAttributes).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : ScheduleActivityTaskDecisionAttributes.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as Decision).Attributes = $.interfaceValue<isDecision_Attributes | null>(new Decision_ScheduleActivityTaskDecisionAttributes({ScheduleActivityTaskDecisionAttributes: v}), "*apiv1.Decision_ScheduleActivityTaskDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_ScheduleActivityTaskDecisionAttributes"))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartTimerDecisionAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null = new StartTimerDecisionAttributes()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as StartTimerDecisionAttributes).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : StartTimerDecisionAttributes.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as Decision).Attributes = $.interfaceValue<isDecision_Attributes | null>(new Decision_StartTimerDecisionAttributes({StartTimerDecisionAttributes: v}), "*apiv1.Decision_StartTimerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_StartTimerDecisionAttributes"))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field CompleteWorkflowExecutionDecisionAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null = new CompleteWorkflowExecutionDecisionAttributes()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as CompleteWorkflowExecutionDecisionAttributes).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : CompleteWorkflowExecutionDecisionAttributes.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as Decision).Attributes = $.interfaceValue<isDecision_Attributes | null>(new Decision_CompleteWorkflowExecutionDecisionAttributes({CompleteWorkflowExecutionDecisionAttributes: v}), "*apiv1.Decision_CompleteWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_CompleteWorkflowExecutionDecisionAttributes"))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field FailWorkflowExecutionDecisionAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null = new FailWorkflowExecutionDecisionAttributes()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as FailWorkflowExecutionDecisionAttributes).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : FailWorkflowExecutionDecisionAttributes.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as Decision).Attributes = $.interfaceValue<isDecision_Attributes | null>(new Decision_FailWorkflowExecutionDecisionAttributes({FailWorkflowExecutionDecisionAttributes: v}), "*apiv1.Decision_FailWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_FailWorkflowExecutionDecisionAttributes"))
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RequestCancelActivityTaskDecisionAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null = new RequestCancelActivityTaskDecisionAttributes()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as RequestCancelActivityTaskDecisionAttributes).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : RequestCancelActivityTaskDecisionAttributes.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as Decision).Attributes = $.interfaceValue<isDecision_Attributes | null>(new Decision_RequestCancelActivityTaskDecisionAttributes({RequestCancelActivityTaskDecisionAttributes: v}), "*apiv1.Decision_RequestCancelActivityTaskDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_RequestCancelActivityTaskDecisionAttributes"))
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field CancelTimerDecisionAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null = new CancelTimerDecisionAttributes()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as CancelTimerDecisionAttributes).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : CancelTimerDecisionAttributes.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as Decision).Attributes = $.interfaceValue<isDecision_Attributes | null>(new Decision_CancelTimerDecisionAttributes({CancelTimerDecisionAttributes: v}), "*apiv1.Decision_CancelTimerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_CancelTimerDecisionAttributes"))
					iNdEx = postIndex
					break
				}
				case 7:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field CancelWorkflowExecutionDecisionAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null = new CancelWorkflowExecutionDecisionAttributes()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as CancelWorkflowExecutionDecisionAttributes).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : CancelWorkflowExecutionDecisionAttributes.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as Decision).Attributes = $.interfaceValue<isDecision_Attributes | null>(new Decision_CancelWorkflowExecutionDecisionAttributes({CancelWorkflowExecutionDecisionAttributes: v}), "*apiv1.Decision_CancelWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_CancelWorkflowExecutionDecisionAttributes"))
					iNdEx = postIndex
					break
				}
				case 8:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RequestCancelExternalWorkflowExecutionDecisionAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = new RequestCancelExternalWorkflowExecutionDecisionAttributes()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as RequestCancelExternalWorkflowExecutionDecisionAttributes).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : RequestCancelExternalWorkflowExecutionDecisionAttributes.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as Decision).Attributes = $.interfaceValue<isDecision_Attributes | null>(new Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes({RequestCancelExternalWorkflowExecutionDecisionAttributes: v}), "*apiv1.Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes"))
					iNdEx = postIndex
					break
				}
				case 9:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RecordMarkerDecisionAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null = new RecordMarkerDecisionAttributes()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as RecordMarkerDecisionAttributes).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : RecordMarkerDecisionAttributes.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as Decision).Attributes = $.interfaceValue<isDecision_Attributes | null>(new Decision_RecordMarkerDecisionAttributes({RecordMarkerDecisionAttributes: v}), "*apiv1.Decision_RecordMarkerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_RecordMarkerDecisionAttributes"))
					iNdEx = postIndex
					break
				}
				case 10:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ContinueAsNewWorkflowExecutionDecisionAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = new ContinueAsNewWorkflowExecutionDecisionAttributes()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as ContinueAsNewWorkflowExecutionDecisionAttributes).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : ContinueAsNewWorkflowExecutionDecisionAttributes.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as Decision).Attributes = $.interfaceValue<isDecision_Attributes | null>(new Decision_ContinueAsNewWorkflowExecutionDecisionAttributes({ContinueAsNewWorkflowExecutionDecisionAttributes: v}), "*apiv1.Decision_ContinueAsNewWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_ContinueAsNewWorkflowExecutionDecisionAttributes"))
					iNdEx = postIndex
					break
				}
				case 11:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartChildWorkflowExecutionDecisionAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = new StartChildWorkflowExecutionDecisionAttributes()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as StartChildWorkflowExecutionDecisionAttributes).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : StartChildWorkflowExecutionDecisionAttributes.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as Decision).Attributes = $.interfaceValue<isDecision_Attributes | null>(new Decision_StartChildWorkflowExecutionDecisionAttributes({StartChildWorkflowExecutionDecisionAttributes: v}), "*apiv1.Decision_StartChildWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_StartChildWorkflowExecutionDecisionAttributes"))
					iNdEx = postIndex
					break
				}
				case 12:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field SignalExternalWorkflowExecutionDecisionAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = new SignalExternalWorkflowExecutionDecisionAttributes()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as SignalExternalWorkflowExecutionDecisionAttributes).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : SignalExternalWorkflowExecutionDecisionAttributes.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as Decision).Attributes = $.interfaceValue<isDecision_Attributes | null>(new Decision_SignalExternalWorkflowExecutionDecisionAttributes({SignalExternalWorkflowExecutionDecisionAttributes: v}), "*apiv1.Decision_SignalExternalWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_SignalExternalWorkflowExecutionDecisionAttributes"))
					iNdEx = postIndex
					break
				}
				case 13:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field UpsertWorkflowSearchAttributesDecisionAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null = new UpsertWorkflowSearchAttributesDecisionAttributes()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as UpsertWorkflowSearchAttributesDecisionAttributes).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : UpsertWorkflowSearchAttributesDecisionAttributes.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as Decision).Attributes = $.interfaceValue<isDecision_Attributes | null>(new Decision_UpsertWorkflowSearchAttributesDecisionAttributes({UpsertWorkflowSearchAttributesDecisionAttributes: v}), "*apiv1.Decision_UpsertWorkflowSearchAttributesDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_UpsertWorkflowSearchAttributesDecisionAttributes"))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipDecision($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDecision
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Decision).XXX_unrecognized = $.appendSlice((m$ as Decision).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Decision | $.VarRef<Decision> | null = this;
		xxx_messageInfo_Decision.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.Decision", /* @__PURE__ */ $.pointerType("apiv1.Decision")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Decision | $.VarRef<Decision> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Decision.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.Decision", /* @__PURE__ */ $.pointerType("apiv1.Decision")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).MarshalToSizedBuffer(b) : Decision.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Decision | $.VarRef<Decision> | null = this;
		xxx_messageInfo_Decision.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.Decision", /* @__PURE__ */ $.pointerType("apiv1.Decision")), src)
	}

	public XXX_OneofWrappers(): $.Slice<any> {
		return $.arrayToSlice<any>([$.interfaceValue(null, "*apiv1.Decision_ScheduleActivityTaskDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_ScheduleActivityTaskDecisionAttributes")), $.interfaceValue(null, "*apiv1.Decision_StartTimerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_StartTimerDecisionAttributes")), $.interfaceValue(null, "*apiv1.Decision_CompleteWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_CompleteWorkflowExecutionDecisionAttributes")), $.interfaceValue(null, "*apiv1.Decision_FailWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_FailWorkflowExecutionDecisionAttributes")), $.interfaceValue(null, "*apiv1.Decision_RequestCancelActivityTaskDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_RequestCancelActivityTaskDecisionAttributes")), $.interfaceValue(null, "*apiv1.Decision_CancelTimerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_CancelTimerDecisionAttributes")), $.interfaceValue(null, "*apiv1.Decision_CancelWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_CancelWorkflowExecutionDecisionAttributes")), $.interfaceValue(null, "*apiv1.Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes")), $.interfaceValue(null, "*apiv1.Decision_RecordMarkerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_RecordMarkerDecisionAttributes")), $.interfaceValue(null, "*apiv1.Decision_ContinueAsNewWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_ContinueAsNewWorkflowExecutionDecisionAttributes")), $.interfaceValue(null, "*apiv1.Decision_StartChildWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_StartChildWorkflowExecutionDecisionAttributes")), $.interfaceValue(null, "*apiv1.Decision_SignalExternalWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_SignalExternalWorkflowExecutionDecisionAttributes")), $.interfaceValue(null, "*apiv1.Decision_UpsertWorkflowSearchAttributesDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.Decision_UpsertWorkflowSearchAttributesDecisionAttributes"))])
	}

	public XXX_Size(): number {
		const m: Decision | $.VarRef<Decision> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).Size() : Decision.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Decision | $.VarRef<Decision> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision).Unmarshal(b) : Decision.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Decision",
		() => new Decision(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetAttributes", args: [], returns: [{ type: "apiv1.isDecision_Attributes" }], pointerReceiver: true }, { name: "GetCancelTimerDecisionAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.CancelTimerDecisionAttributes") }], pointerReceiver: true }, { name: "GetCancelWorkflowExecutionDecisionAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.CancelWorkflowExecutionDecisionAttributes") }], pointerReceiver: true }, { name: "GetCompleteWorkflowExecutionDecisionAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.CompleteWorkflowExecutionDecisionAttributes") }], pointerReceiver: true }, { name: "GetContinueAsNewWorkflowExecutionDecisionAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes") }], pointerReceiver: true }, { name: "GetFailWorkflowExecutionDecisionAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.FailWorkflowExecutionDecisionAttributes") }], pointerReceiver: true }, { name: "GetRecordMarkerDecisionAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RecordMarkerDecisionAttributes") }], pointerReceiver: true }, { name: "GetRequestCancelActivityTaskDecisionAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RequestCancelActivityTaskDecisionAttributes") }], pointerReceiver: true }, { name: "GetRequestCancelExternalWorkflowExecutionDecisionAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes") }], pointerReceiver: true }, { name: "GetScheduleActivityTaskDecisionAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleActivityTaskDecisionAttributes") }], pointerReceiver: true }, { name: "GetSignalExternalWorkflowExecutionDecisionAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.SignalExternalWorkflowExecutionDecisionAttributes") }], pointerReceiver: true }, { name: "GetStartChildWorkflowExecutionDecisionAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.StartChildWorkflowExecutionDecisionAttributes") }], pointerReceiver: true }, { name: "GetStartTimerDecisionAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.StartTimerDecisionAttributes") }], pointerReceiver: true }, { name: "GetUpsertWorkflowSearchAttributesDecisionAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.UpsertWorkflowSearchAttributesDecisionAttributes") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_OneofWrappers", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }) }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		Decision,
		() => [{ name: "Attributes", key: "Attributes", type: "apiv1.isDecision_Attributes", tag: "protobuf_oneof:\"attributes\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class Decision_ScheduleActivityTaskDecisionAttributes {
	public get ScheduleActivityTaskDecisionAttributes(): ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null {
		return this._fields.ScheduleActivityTaskDecisionAttributes
	}

	public set ScheduleActivityTaskDecisionAttributes(value: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null) {
		this._fields.ScheduleActivityTaskDecisionAttributes = value
	}

	public _fields: {
		ScheduleActivityTaskDecisionAttributes: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null
	}

	constructor(init?: Partial<{ScheduleActivityTaskDecisionAttributes?: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ScheduleActivityTaskDecisionAttributes: init?.ScheduleActivityTaskDecisionAttributes ?? (null! as ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decision_ScheduleActivityTaskDecisionAttributes {
		return new Decision_ScheduleActivityTaskDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: Decision_ScheduleActivityTaskDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.ScheduleActivityTaskDecisionAttributes = values.ScheduleActivityTaskDecisionAttributes
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_ScheduleActivityTaskDecisionAttributes | $.VarRef<Decision_ScheduleActivityTaskDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_ScheduleActivityTaskDecisionAttributes).Size() : Decision_ScheduleActivityTaskDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_ScheduleActivityTaskDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Decision_ScheduleActivityTaskDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_ScheduleActivityTaskDecisionAttributes | $.VarRef<Decision_ScheduleActivityTaskDecisionAttributes> | null = this;
		const m$: Decision_ScheduleActivityTaskDecisionAttributes = m == null ? $.pointerTarget<Decision_ScheduleActivityTaskDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_ScheduleActivityTaskDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as Decision_ScheduleActivityTaskDecisionAttributes).ScheduleActivityTaskDecisionAttributes != null) {
			{
				let [size, err] = ScheduleActivityTaskDecisionAttributes.prototype.MarshalToSizedBuffer.call((m$ as Decision_ScheduleActivityTaskDecisionAttributes).ScheduleActivityTaskDecisionAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: Decision_ScheduleActivityTaskDecisionAttributes | $.VarRef<Decision_ScheduleActivityTaskDecisionAttributes> | null = this;
		let n: number = 0
		const m$: Decision_ScheduleActivityTaskDecisionAttributes = m == null ? $.pointerTarget<Decision_ScheduleActivityTaskDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_ScheduleActivityTaskDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Decision_ScheduleActivityTaskDecisionAttributes).ScheduleActivityTaskDecisionAttributes != null) {
			l = ScheduleActivityTaskDecisionAttributes.prototype.Size.call((m$ as Decision_ScheduleActivityTaskDecisionAttributes).ScheduleActivityTaskDecisionAttributes)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		return n
	}

	public isDecision_Attributes(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Decision_ScheduleActivityTaskDecisionAttributes",
		() => new Decision_ScheduleActivityTaskDecisionAttributes(),
		() => [{ name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "isDecision_Attributes", args: [], returns: [], pointerReceiver: true }],
		Decision_ScheduleActivityTaskDecisionAttributes,
		() => [{ name: "ScheduleActivityTaskDecisionAttributes", key: "ScheduleActivityTaskDecisionAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.ScheduleActivityTaskDecisionAttributes"), tag: "protobuf:\"bytes,1,opt,name=schedule_activity_task_decision_attributes,json=scheduleActivityTaskDecisionAttributes,proto3,oneof\" json:\"schedule_activity_task_decision_attributes,omitempty\"" }]
	)
}

export class Decision_StartTimerDecisionAttributes {
	public get StartTimerDecisionAttributes(): StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null {
		return this._fields.StartTimerDecisionAttributes
	}

	public set StartTimerDecisionAttributes(value: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null) {
		this._fields.StartTimerDecisionAttributes = value
	}

	public _fields: {
		StartTimerDecisionAttributes: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null
	}

	constructor(init?: Partial<{StartTimerDecisionAttributes?: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			StartTimerDecisionAttributes: init?.StartTimerDecisionAttributes ?? (null! as StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decision_StartTimerDecisionAttributes {
		return new Decision_StartTimerDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: Decision_StartTimerDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.StartTimerDecisionAttributes = values.StartTimerDecisionAttributes
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_StartTimerDecisionAttributes | $.VarRef<Decision_StartTimerDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_StartTimerDecisionAttributes).Size() : Decision_StartTimerDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_StartTimerDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Decision_StartTimerDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_StartTimerDecisionAttributes | $.VarRef<Decision_StartTimerDecisionAttributes> | null = this;
		const m$: Decision_StartTimerDecisionAttributes = m == null ? $.pointerTarget<Decision_StartTimerDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_StartTimerDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as Decision_StartTimerDecisionAttributes).StartTimerDecisionAttributes != null) {
			{
				let [size, err] = StartTimerDecisionAttributes.prototype.MarshalToSizedBuffer.call((m$ as Decision_StartTimerDecisionAttributes).StartTimerDecisionAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: Decision_StartTimerDecisionAttributes | $.VarRef<Decision_StartTimerDecisionAttributes> | null = this;
		let n: number = 0
		const m$: Decision_StartTimerDecisionAttributes = m == null ? $.pointerTarget<Decision_StartTimerDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_StartTimerDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Decision_StartTimerDecisionAttributes).StartTimerDecisionAttributes != null) {
			l = StartTimerDecisionAttributes.prototype.Size.call((m$ as Decision_StartTimerDecisionAttributes).StartTimerDecisionAttributes)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		return n
	}

	public isDecision_Attributes(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Decision_StartTimerDecisionAttributes",
		() => new Decision_StartTimerDecisionAttributes(),
		() => [{ name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "isDecision_Attributes", args: [], returns: [], pointerReceiver: true }],
		Decision_StartTimerDecisionAttributes,
		() => [{ name: "StartTimerDecisionAttributes", key: "StartTimerDecisionAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.StartTimerDecisionAttributes"), tag: "protobuf:\"bytes,2,opt,name=start_timer_decision_attributes,json=startTimerDecisionAttributes,proto3,oneof\" json:\"start_timer_decision_attributes,omitempty\"" }]
	)
}

export class Decision_CompleteWorkflowExecutionDecisionAttributes {
	public get CompleteWorkflowExecutionDecisionAttributes(): CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null {
		return this._fields.CompleteWorkflowExecutionDecisionAttributes
	}

	public set CompleteWorkflowExecutionDecisionAttributes(value: CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null) {
		this._fields.CompleteWorkflowExecutionDecisionAttributes = value
	}

	public _fields: {
		CompleteWorkflowExecutionDecisionAttributes: CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null
	}

	constructor(init?: Partial<{CompleteWorkflowExecutionDecisionAttributes?: CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			CompleteWorkflowExecutionDecisionAttributes: init?.CompleteWorkflowExecutionDecisionAttributes ?? (null! as CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decision_CompleteWorkflowExecutionDecisionAttributes {
		return new Decision_CompleteWorkflowExecutionDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: Decision_CompleteWorkflowExecutionDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.CompleteWorkflowExecutionDecisionAttributes = values.CompleteWorkflowExecutionDecisionAttributes
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_CompleteWorkflowExecutionDecisionAttributes | $.VarRef<Decision_CompleteWorkflowExecutionDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_CompleteWorkflowExecutionDecisionAttributes).Size() : Decision_CompleteWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_CompleteWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Decision_CompleteWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_CompleteWorkflowExecutionDecisionAttributes | $.VarRef<Decision_CompleteWorkflowExecutionDecisionAttributes> | null = this;
		const m$: Decision_CompleteWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<Decision_CompleteWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_CompleteWorkflowExecutionDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as Decision_CompleteWorkflowExecutionDecisionAttributes).CompleteWorkflowExecutionDecisionAttributes != null) {
			{
				let [size, err] = CompleteWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call((m$ as Decision_CompleteWorkflowExecutionDecisionAttributes).CompleteWorkflowExecutionDecisionAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: Decision_CompleteWorkflowExecutionDecisionAttributes | $.VarRef<Decision_CompleteWorkflowExecutionDecisionAttributes> | null = this;
		let n: number = 0
		const m$: Decision_CompleteWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<Decision_CompleteWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_CompleteWorkflowExecutionDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Decision_CompleteWorkflowExecutionDecisionAttributes).CompleteWorkflowExecutionDecisionAttributes != null) {
			l = CompleteWorkflowExecutionDecisionAttributes.prototype.Size.call((m$ as Decision_CompleteWorkflowExecutionDecisionAttributes).CompleteWorkflowExecutionDecisionAttributes)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		return n
	}

	public isDecision_Attributes(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Decision_CompleteWorkflowExecutionDecisionAttributes",
		() => new Decision_CompleteWorkflowExecutionDecisionAttributes(),
		() => [{ name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "isDecision_Attributes", args: [], returns: [], pointerReceiver: true }],
		Decision_CompleteWorkflowExecutionDecisionAttributes,
		() => [{ name: "CompleteWorkflowExecutionDecisionAttributes", key: "CompleteWorkflowExecutionDecisionAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.CompleteWorkflowExecutionDecisionAttributes"), tag: "protobuf:\"bytes,3,opt,name=complete_workflow_execution_decision_attributes,json=completeWorkflowExecutionDecisionAttributes,proto3,oneof\" json:\"complete_workflow_execution_decision_attributes,omitempty\"" }]
	)
}

export class Decision_FailWorkflowExecutionDecisionAttributes {
	public get FailWorkflowExecutionDecisionAttributes(): FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null {
		return this._fields.FailWorkflowExecutionDecisionAttributes
	}

	public set FailWorkflowExecutionDecisionAttributes(value: FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null) {
		this._fields.FailWorkflowExecutionDecisionAttributes = value
	}

	public _fields: {
		FailWorkflowExecutionDecisionAttributes: FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null
	}

	constructor(init?: Partial<{FailWorkflowExecutionDecisionAttributes?: FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			FailWorkflowExecutionDecisionAttributes: init?.FailWorkflowExecutionDecisionAttributes ?? (null! as FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decision_FailWorkflowExecutionDecisionAttributes {
		return new Decision_FailWorkflowExecutionDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: Decision_FailWorkflowExecutionDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.FailWorkflowExecutionDecisionAttributes = values.FailWorkflowExecutionDecisionAttributes
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_FailWorkflowExecutionDecisionAttributes | $.VarRef<Decision_FailWorkflowExecutionDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_FailWorkflowExecutionDecisionAttributes).Size() : Decision_FailWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_FailWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Decision_FailWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_FailWorkflowExecutionDecisionAttributes | $.VarRef<Decision_FailWorkflowExecutionDecisionAttributes> | null = this;
		const m$: Decision_FailWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<Decision_FailWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_FailWorkflowExecutionDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as Decision_FailWorkflowExecutionDecisionAttributes).FailWorkflowExecutionDecisionAttributes != null) {
			{
				let [size, err] = FailWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call((m$ as Decision_FailWorkflowExecutionDecisionAttributes).FailWorkflowExecutionDecisionAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: Decision_FailWorkflowExecutionDecisionAttributes | $.VarRef<Decision_FailWorkflowExecutionDecisionAttributes> | null = this;
		let n: number = 0
		const m$: Decision_FailWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<Decision_FailWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_FailWorkflowExecutionDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Decision_FailWorkflowExecutionDecisionAttributes).FailWorkflowExecutionDecisionAttributes != null) {
			l = FailWorkflowExecutionDecisionAttributes.prototype.Size.call((m$ as Decision_FailWorkflowExecutionDecisionAttributes).FailWorkflowExecutionDecisionAttributes)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		return n
	}

	public isDecision_Attributes(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Decision_FailWorkflowExecutionDecisionAttributes",
		() => new Decision_FailWorkflowExecutionDecisionAttributes(),
		() => [{ name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "isDecision_Attributes", args: [], returns: [], pointerReceiver: true }],
		Decision_FailWorkflowExecutionDecisionAttributes,
		() => [{ name: "FailWorkflowExecutionDecisionAttributes", key: "FailWorkflowExecutionDecisionAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.FailWorkflowExecutionDecisionAttributes"), tag: "protobuf:\"bytes,4,opt,name=fail_workflow_execution_decision_attributes,json=failWorkflowExecutionDecisionAttributes,proto3,oneof\" json:\"fail_workflow_execution_decision_attributes,omitempty\"" }]
	)
}

export class Decision_RequestCancelActivityTaskDecisionAttributes {
	public get RequestCancelActivityTaskDecisionAttributes(): RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null {
		return this._fields.RequestCancelActivityTaskDecisionAttributes
	}

	public set RequestCancelActivityTaskDecisionAttributes(value: RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null) {
		this._fields.RequestCancelActivityTaskDecisionAttributes = value
	}

	public _fields: {
		RequestCancelActivityTaskDecisionAttributes: RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null
	}

	constructor(init?: Partial<{RequestCancelActivityTaskDecisionAttributes?: RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			RequestCancelActivityTaskDecisionAttributes: init?.RequestCancelActivityTaskDecisionAttributes ?? (null! as RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decision_RequestCancelActivityTaskDecisionAttributes {
		return new Decision_RequestCancelActivityTaskDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: Decision_RequestCancelActivityTaskDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.RequestCancelActivityTaskDecisionAttributes = values.RequestCancelActivityTaskDecisionAttributes
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_RequestCancelActivityTaskDecisionAttributes | $.VarRef<Decision_RequestCancelActivityTaskDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_RequestCancelActivityTaskDecisionAttributes).Size() : Decision_RequestCancelActivityTaskDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_RequestCancelActivityTaskDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Decision_RequestCancelActivityTaskDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_RequestCancelActivityTaskDecisionAttributes | $.VarRef<Decision_RequestCancelActivityTaskDecisionAttributes> | null = this;
		const m$: Decision_RequestCancelActivityTaskDecisionAttributes = m == null ? $.pointerTarget<Decision_RequestCancelActivityTaskDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_RequestCancelActivityTaskDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as Decision_RequestCancelActivityTaskDecisionAttributes).RequestCancelActivityTaskDecisionAttributes != null) {
			{
				let [size, err] = RequestCancelActivityTaskDecisionAttributes.prototype.MarshalToSizedBuffer.call((m$ as Decision_RequestCancelActivityTaskDecisionAttributes).RequestCancelActivityTaskDecisionAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: Decision_RequestCancelActivityTaskDecisionAttributes | $.VarRef<Decision_RequestCancelActivityTaskDecisionAttributes> | null = this;
		let n: number = 0
		const m$: Decision_RequestCancelActivityTaskDecisionAttributes = m == null ? $.pointerTarget<Decision_RequestCancelActivityTaskDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_RequestCancelActivityTaskDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Decision_RequestCancelActivityTaskDecisionAttributes).RequestCancelActivityTaskDecisionAttributes != null) {
			l = RequestCancelActivityTaskDecisionAttributes.prototype.Size.call((m$ as Decision_RequestCancelActivityTaskDecisionAttributes).RequestCancelActivityTaskDecisionAttributes)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		return n
	}

	public isDecision_Attributes(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Decision_RequestCancelActivityTaskDecisionAttributes",
		() => new Decision_RequestCancelActivityTaskDecisionAttributes(),
		() => [{ name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "isDecision_Attributes", args: [], returns: [], pointerReceiver: true }],
		Decision_RequestCancelActivityTaskDecisionAttributes,
		() => [{ name: "RequestCancelActivityTaskDecisionAttributes", key: "RequestCancelActivityTaskDecisionAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.RequestCancelActivityTaskDecisionAttributes"), tag: "protobuf:\"bytes,5,opt,name=request_cancel_activity_task_decision_attributes,json=requestCancelActivityTaskDecisionAttributes,proto3,oneof\" json:\"request_cancel_activity_task_decision_attributes,omitempty\"" }]
	)
}

export class Decision_CancelTimerDecisionAttributes {
	public get CancelTimerDecisionAttributes(): CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null {
		return this._fields.CancelTimerDecisionAttributes
	}

	public set CancelTimerDecisionAttributes(value: CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null) {
		this._fields.CancelTimerDecisionAttributes = value
	}

	public _fields: {
		CancelTimerDecisionAttributes: CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null
	}

	constructor(init?: Partial<{CancelTimerDecisionAttributes?: CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			CancelTimerDecisionAttributes: init?.CancelTimerDecisionAttributes ?? (null! as CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decision_CancelTimerDecisionAttributes {
		return new Decision_CancelTimerDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: Decision_CancelTimerDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.CancelTimerDecisionAttributes = values.CancelTimerDecisionAttributes
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_CancelTimerDecisionAttributes | $.VarRef<Decision_CancelTimerDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_CancelTimerDecisionAttributes).Size() : Decision_CancelTimerDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_CancelTimerDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Decision_CancelTimerDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_CancelTimerDecisionAttributes | $.VarRef<Decision_CancelTimerDecisionAttributes> | null = this;
		const m$: Decision_CancelTimerDecisionAttributes = m == null ? $.pointerTarget<Decision_CancelTimerDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_CancelTimerDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as Decision_CancelTimerDecisionAttributes).CancelTimerDecisionAttributes != null) {
			{
				let [size, err] = CancelTimerDecisionAttributes.prototype.MarshalToSizedBuffer.call((m$ as Decision_CancelTimerDecisionAttributes).CancelTimerDecisionAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: Decision_CancelTimerDecisionAttributes | $.VarRef<Decision_CancelTimerDecisionAttributes> | null = this;
		let n: number = 0
		const m$: Decision_CancelTimerDecisionAttributes = m == null ? $.pointerTarget<Decision_CancelTimerDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_CancelTimerDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Decision_CancelTimerDecisionAttributes).CancelTimerDecisionAttributes != null) {
			l = CancelTimerDecisionAttributes.prototype.Size.call((m$ as Decision_CancelTimerDecisionAttributes).CancelTimerDecisionAttributes)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		return n
	}

	public isDecision_Attributes(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Decision_CancelTimerDecisionAttributes",
		() => new Decision_CancelTimerDecisionAttributes(),
		() => [{ name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "isDecision_Attributes", args: [], returns: [], pointerReceiver: true }],
		Decision_CancelTimerDecisionAttributes,
		() => [{ name: "CancelTimerDecisionAttributes", key: "CancelTimerDecisionAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.CancelTimerDecisionAttributes"), tag: "protobuf:\"bytes,6,opt,name=cancel_timer_decision_attributes,json=cancelTimerDecisionAttributes,proto3,oneof\" json:\"cancel_timer_decision_attributes,omitempty\"" }]
	)
}

export class Decision_CancelWorkflowExecutionDecisionAttributes {
	public get CancelWorkflowExecutionDecisionAttributes(): CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null {
		return this._fields.CancelWorkflowExecutionDecisionAttributes
	}

	public set CancelWorkflowExecutionDecisionAttributes(value: CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null) {
		this._fields.CancelWorkflowExecutionDecisionAttributes = value
	}

	public _fields: {
		CancelWorkflowExecutionDecisionAttributes: CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null
	}

	constructor(init?: Partial<{CancelWorkflowExecutionDecisionAttributes?: CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			CancelWorkflowExecutionDecisionAttributes: init?.CancelWorkflowExecutionDecisionAttributes ?? (null! as CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decision_CancelWorkflowExecutionDecisionAttributes {
		return new Decision_CancelWorkflowExecutionDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: Decision_CancelWorkflowExecutionDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.CancelWorkflowExecutionDecisionAttributes = values.CancelWorkflowExecutionDecisionAttributes
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_CancelWorkflowExecutionDecisionAttributes | $.VarRef<Decision_CancelWorkflowExecutionDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_CancelWorkflowExecutionDecisionAttributes).Size() : Decision_CancelWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_CancelWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Decision_CancelWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_CancelWorkflowExecutionDecisionAttributes | $.VarRef<Decision_CancelWorkflowExecutionDecisionAttributes> | null = this;
		const m$: Decision_CancelWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<Decision_CancelWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_CancelWorkflowExecutionDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as Decision_CancelWorkflowExecutionDecisionAttributes).CancelWorkflowExecutionDecisionAttributes != null) {
			{
				let [size, err] = CancelWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call((m$ as Decision_CancelWorkflowExecutionDecisionAttributes).CancelWorkflowExecutionDecisionAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x3a
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: Decision_CancelWorkflowExecutionDecisionAttributes | $.VarRef<Decision_CancelWorkflowExecutionDecisionAttributes> | null = this;
		let n: number = 0
		const m$: Decision_CancelWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<Decision_CancelWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_CancelWorkflowExecutionDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Decision_CancelWorkflowExecutionDecisionAttributes).CancelWorkflowExecutionDecisionAttributes != null) {
			l = CancelWorkflowExecutionDecisionAttributes.prototype.Size.call((m$ as Decision_CancelWorkflowExecutionDecisionAttributes).CancelWorkflowExecutionDecisionAttributes)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		return n
	}

	public isDecision_Attributes(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Decision_CancelWorkflowExecutionDecisionAttributes",
		() => new Decision_CancelWorkflowExecutionDecisionAttributes(),
		() => [{ name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "isDecision_Attributes", args: [], returns: [], pointerReceiver: true }],
		Decision_CancelWorkflowExecutionDecisionAttributes,
		() => [{ name: "CancelWorkflowExecutionDecisionAttributes", key: "CancelWorkflowExecutionDecisionAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.CancelWorkflowExecutionDecisionAttributes"), tag: "protobuf:\"bytes,7,opt,name=cancel_workflow_execution_decision_attributes,json=cancelWorkflowExecutionDecisionAttributes,proto3,oneof\" json:\"cancel_workflow_execution_decision_attributes,omitempty\"" }]
	)
}

export class Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes {
	public get RequestCancelExternalWorkflowExecutionDecisionAttributes(): RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null {
		return this._fields.RequestCancelExternalWorkflowExecutionDecisionAttributes
	}

	public set RequestCancelExternalWorkflowExecutionDecisionAttributes(value: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null) {
		this._fields.RequestCancelExternalWorkflowExecutionDecisionAttributes = value
	}

	public _fields: {
		RequestCancelExternalWorkflowExecutionDecisionAttributes: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null
	}

	constructor(init?: Partial<{RequestCancelExternalWorkflowExecutionDecisionAttributes?: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			RequestCancelExternalWorkflowExecutionDecisionAttributes: init?.RequestCancelExternalWorkflowExecutionDecisionAttributes ?? (null! as RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes {
		return new Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.RequestCancelExternalWorkflowExecutionDecisionAttributes = values.RequestCancelExternalWorkflowExecutionDecisionAttributes
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes).Size() : Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		const m$: Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes).RequestCancelExternalWorkflowExecutionDecisionAttributes != null) {
			{
				let [size, err] = RequestCancelExternalWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call((m$ as Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes).RequestCancelExternalWorkflowExecutionDecisionAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x42
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		let n: number = 0
		const m$: Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes).RequestCancelExternalWorkflowExecutionDecisionAttributes != null) {
			l = RequestCancelExternalWorkflowExecutionDecisionAttributes.prototype.Size.call((m$ as Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes).RequestCancelExternalWorkflowExecutionDecisionAttributes)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		return n
	}

	public isDecision_Attributes(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes",
		() => new Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes(),
		() => [{ name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "isDecision_Attributes", args: [], returns: [], pointerReceiver: true }],
		Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes,
		() => [{ name: "RequestCancelExternalWorkflowExecutionDecisionAttributes", key: "RequestCancelExternalWorkflowExecutionDecisionAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes"), tag: "protobuf:\"bytes,8,opt,name=request_cancel_external_workflow_execution_decision_attributes,json=requestCancelExternalWorkflowExecutionDecisionAttributes,proto3,oneof\" json:\"request_cancel_external_workflow_execution_decision_attributes,omitempty\"" }]
	)
}

export class Decision_RecordMarkerDecisionAttributes {
	public get RecordMarkerDecisionAttributes(): RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null {
		return this._fields.RecordMarkerDecisionAttributes
	}

	public set RecordMarkerDecisionAttributes(value: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null) {
		this._fields.RecordMarkerDecisionAttributes = value
	}

	public _fields: {
		RecordMarkerDecisionAttributes: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null
	}

	constructor(init?: Partial<{RecordMarkerDecisionAttributes?: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			RecordMarkerDecisionAttributes: init?.RecordMarkerDecisionAttributes ?? (null! as RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decision_RecordMarkerDecisionAttributes {
		return new Decision_RecordMarkerDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: Decision_RecordMarkerDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.RecordMarkerDecisionAttributes = values.RecordMarkerDecisionAttributes
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_RecordMarkerDecisionAttributes | $.VarRef<Decision_RecordMarkerDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_RecordMarkerDecisionAttributes).Size() : Decision_RecordMarkerDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_RecordMarkerDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Decision_RecordMarkerDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_RecordMarkerDecisionAttributes | $.VarRef<Decision_RecordMarkerDecisionAttributes> | null = this;
		const m$: Decision_RecordMarkerDecisionAttributes = m == null ? $.pointerTarget<Decision_RecordMarkerDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_RecordMarkerDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as Decision_RecordMarkerDecisionAttributes).RecordMarkerDecisionAttributes != null) {
			{
				let [size, err] = RecordMarkerDecisionAttributes.prototype.MarshalToSizedBuffer.call((m$ as Decision_RecordMarkerDecisionAttributes).RecordMarkerDecisionAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x4a
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: Decision_RecordMarkerDecisionAttributes | $.VarRef<Decision_RecordMarkerDecisionAttributes> | null = this;
		let n: number = 0
		const m$: Decision_RecordMarkerDecisionAttributes = m == null ? $.pointerTarget<Decision_RecordMarkerDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_RecordMarkerDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Decision_RecordMarkerDecisionAttributes).RecordMarkerDecisionAttributes != null) {
			l = RecordMarkerDecisionAttributes.prototype.Size.call((m$ as Decision_RecordMarkerDecisionAttributes).RecordMarkerDecisionAttributes)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		return n
	}

	public isDecision_Attributes(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Decision_RecordMarkerDecisionAttributes",
		() => new Decision_RecordMarkerDecisionAttributes(),
		() => [{ name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "isDecision_Attributes", args: [], returns: [], pointerReceiver: true }],
		Decision_RecordMarkerDecisionAttributes,
		() => [{ name: "RecordMarkerDecisionAttributes", key: "RecordMarkerDecisionAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.RecordMarkerDecisionAttributes"), tag: "protobuf:\"bytes,9,opt,name=record_marker_decision_attributes,json=recordMarkerDecisionAttributes,proto3,oneof\" json:\"record_marker_decision_attributes,omitempty\"" }]
	)
}

export class Decision_ContinueAsNewWorkflowExecutionDecisionAttributes {
	public get ContinueAsNewWorkflowExecutionDecisionAttributes(): ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null {
		return this._fields.ContinueAsNewWorkflowExecutionDecisionAttributes
	}

	public set ContinueAsNewWorkflowExecutionDecisionAttributes(value: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null) {
		this._fields.ContinueAsNewWorkflowExecutionDecisionAttributes = value
	}

	public _fields: {
		ContinueAsNewWorkflowExecutionDecisionAttributes: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null
	}

	constructor(init?: Partial<{ContinueAsNewWorkflowExecutionDecisionAttributes?: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ContinueAsNewWorkflowExecutionDecisionAttributes: init?.ContinueAsNewWorkflowExecutionDecisionAttributes ?? (null! as ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decision_ContinueAsNewWorkflowExecutionDecisionAttributes {
		return new Decision_ContinueAsNewWorkflowExecutionDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: Decision_ContinueAsNewWorkflowExecutionDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.ContinueAsNewWorkflowExecutionDecisionAttributes = values.ContinueAsNewWorkflowExecutionDecisionAttributes
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<Decision_ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_ContinueAsNewWorkflowExecutionDecisionAttributes).Size() : Decision_ContinueAsNewWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_ContinueAsNewWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Decision_ContinueAsNewWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<Decision_ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		const m$: Decision_ContinueAsNewWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<Decision_ContinueAsNewWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_ContinueAsNewWorkflowExecutionDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as Decision_ContinueAsNewWorkflowExecutionDecisionAttributes).ContinueAsNewWorkflowExecutionDecisionAttributes != null) {
			{
				let [size, err] = ContinueAsNewWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call((m$ as Decision_ContinueAsNewWorkflowExecutionDecisionAttributes).ContinueAsNewWorkflowExecutionDecisionAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x52
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: Decision_ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<Decision_ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		let n: number = 0
		const m$: Decision_ContinueAsNewWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<Decision_ContinueAsNewWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_ContinueAsNewWorkflowExecutionDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Decision_ContinueAsNewWorkflowExecutionDecisionAttributes).ContinueAsNewWorkflowExecutionDecisionAttributes != null) {
			l = ContinueAsNewWorkflowExecutionDecisionAttributes.prototype.Size.call((m$ as Decision_ContinueAsNewWorkflowExecutionDecisionAttributes).ContinueAsNewWorkflowExecutionDecisionAttributes)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		return n
	}

	public isDecision_Attributes(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Decision_ContinueAsNewWorkflowExecutionDecisionAttributes",
		() => new Decision_ContinueAsNewWorkflowExecutionDecisionAttributes(),
		() => [{ name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "isDecision_Attributes", args: [], returns: [], pointerReceiver: true }],
		Decision_ContinueAsNewWorkflowExecutionDecisionAttributes,
		() => [{ name: "ContinueAsNewWorkflowExecutionDecisionAttributes", key: "ContinueAsNewWorkflowExecutionDecisionAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes"), tag: "protobuf:\"bytes,10,opt,name=continue_as_new_workflow_execution_decision_attributes,json=continueAsNewWorkflowExecutionDecisionAttributes,proto3,oneof\" json:\"continue_as_new_workflow_execution_decision_attributes,omitempty\"" }]
	)
}

export class Decision_StartChildWorkflowExecutionDecisionAttributes {
	public get StartChildWorkflowExecutionDecisionAttributes(): StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null {
		return this._fields.StartChildWorkflowExecutionDecisionAttributes
	}

	public set StartChildWorkflowExecutionDecisionAttributes(value: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null) {
		this._fields.StartChildWorkflowExecutionDecisionAttributes = value
	}

	public _fields: {
		StartChildWorkflowExecutionDecisionAttributes: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null
	}

	constructor(init?: Partial<{StartChildWorkflowExecutionDecisionAttributes?: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			StartChildWorkflowExecutionDecisionAttributes: init?.StartChildWorkflowExecutionDecisionAttributes ?? (null! as StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decision_StartChildWorkflowExecutionDecisionAttributes {
		return new Decision_StartChildWorkflowExecutionDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: Decision_StartChildWorkflowExecutionDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.StartChildWorkflowExecutionDecisionAttributes = values.StartChildWorkflowExecutionDecisionAttributes
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_StartChildWorkflowExecutionDecisionAttributes | $.VarRef<Decision_StartChildWorkflowExecutionDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_StartChildWorkflowExecutionDecisionAttributes).Size() : Decision_StartChildWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_StartChildWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Decision_StartChildWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_StartChildWorkflowExecutionDecisionAttributes | $.VarRef<Decision_StartChildWorkflowExecutionDecisionAttributes> | null = this;
		const m$: Decision_StartChildWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<Decision_StartChildWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_StartChildWorkflowExecutionDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as Decision_StartChildWorkflowExecutionDecisionAttributes).StartChildWorkflowExecutionDecisionAttributes != null) {
			{
				let [size, err] = StartChildWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call((m$ as Decision_StartChildWorkflowExecutionDecisionAttributes).StartChildWorkflowExecutionDecisionAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x5a
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: Decision_StartChildWorkflowExecutionDecisionAttributes | $.VarRef<Decision_StartChildWorkflowExecutionDecisionAttributes> | null = this;
		let n: number = 0
		const m$: Decision_StartChildWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<Decision_StartChildWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_StartChildWorkflowExecutionDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Decision_StartChildWorkflowExecutionDecisionAttributes).StartChildWorkflowExecutionDecisionAttributes != null) {
			l = StartChildWorkflowExecutionDecisionAttributes.prototype.Size.call((m$ as Decision_StartChildWorkflowExecutionDecisionAttributes).StartChildWorkflowExecutionDecisionAttributes)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		return n
	}

	public isDecision_Attributes(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Decision_StartChildWorkflowExecutionDecisionAttributes",
		() => new Decision_StartChildWorkflowExecutionDecisionAttributes(),
		() => [{ name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "isDecision_Attributes", args: [], returns: [], pointerReceiver: true }],
		Decision_StartChildWorkflowExecutionDecisionAttributes,
		() => [{ name: "StartChildWorkflowExecutionDecisionAttributes", key: "StartChildWorkflowExecutionDecisionAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.StartChildWorkflowExecutionDecisionAttributes"), tag: "protobuf:\"bytes,11,opt,name=start_child_workflow_execution_decision_attributes,json=startChildWorkflowExecutionDecisionAttributes,proto3,oneof\" json:\"start_child_workflow_execution_decision_attributes,omitempty\"" }]
	)
}

export class Decision_SignalExternalWorkflowExecutionDecisionAttributes {
	public get SignalExternalWorkflowExecutionDecisionAttributes(): SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null {
		return this._fields.SignalExternalWorkflowExecutionDecisionAttributes
	}

	public set SignalExternalWorkflowExecutionDecisionAttributes(value: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null) {
		this._fields.SignalExternalWorkflowExecutionDecisionAttributes = value
	}

	public _fields: {
		SignalExternalWorkflowExecutionDecisionAttributes: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null
	}

	constructor(init?: Partial<{SignalExternalWorkflowExecutionDecisionAttributes?: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			SignalExternalWorkflowExecutionDecisionAttributes: init?.SignalExternalWorkflowExecutionDecisionAttributes ?? (null! as SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decision_SignalExternalWorkflowExecutionDecisionAttributes {
		return new Decision_SignalExternalWorkflowExecutionDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: Decision_SignalExternalWorkflowExecutionDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.SignalExternalWorkflowExecutionDecisionAttributes = values.SignalExternalWorkflowExecutionDecisionAttributes
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<Decision_SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_SignalExternalWorkflowExecutionDecisionAttributes).Size() : Decision_SignalExternalWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_SignalExternalWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Decision_SignalExternalWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<Decision_SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		const m$: Decision_SignalExternalWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<Decision_SignalExternalWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_SignalExternalWorkflowExecutionDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as Decision_SignalExternalWorkflowExecutionDecisionAttributes).SignalExternalWorkflowExecutionDecisionAttributes != null) {
			{
				let [size, err] = SignalExternalWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call((m$ as Decision_SignalExternalWorkflowExecutionDecisionAttributes).SignalExternalWorkflowExecutionDecisionAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x62
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: Decision_SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<Decision_SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		let n: number = 0
		const m$: Decision_SignalExternalWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<Decision_SignalExternalWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_SignalExternalWorkflowExecutionDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Decision_SignalExternalWorkflowExecutionDecisionAttributes).SignalExternalWorkflowExecutionDecisionAttributes != null) {
			l = SignalExternalWorkflowExecutionDecisionAttributes.prototype.Size.call((m$ as Decision_SignalExternalWorkflowExecutionDecisionAttributes).SignalExternalWorkflowExecutionDecisionAttributes)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		return n
	}

	public isDecision_Attributes(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Decision_SignalExternalWorkflowExecutionDecisionAttributes",
		() => new Decision_SignalExternalWorkflowExecutionDecisionAttributes(),
		() => [{ name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "isDecision_Attributes", args: [], returns: [], pointerReceiver: true }],
		Decision_SignalExternalWorkflowExecutionDecisionAttributes,
		() => [{ name: "SignalExternalWorkflowExecutionDecisionAttributes", key: "SignalExternalWorkflowExecutionDecisionAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.SignalExternalWorkflowExecutionDecisionAttributes"), tag: "protobuf:\"bytes,12,opt,name=signal_external_workflow_execution_decision_attributes,json=signalExternalWorkflowExecutionDecisionAttributes,proto3,oneof\" json:\"signal_external_workflow_execution_decision_attributes,omitempty\"" }]
	)
}

export class Decision_UpsertWorkflowSearchAttributesDecisionAttributes {
	public get UpsertWorkflowSearchAttributesDecisionAttributes(): UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null {
		return this._fields.UpsertWorkflowSearchAttributesDecisionAttributes
	}

	public set UpsertWorkflowSearchAttributesDecisionAttributes(value: UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null) {
		this._fields.UpsertWorkflowSearchAttributesDecisionAttributes = value
	}

	public _fields: {
		UpsertWorkflowSearchAttributesDecisionAttributes: UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null
	}

	constructor(init?: Partial<{UpsertWorkflowSearchAttributesDecisionAttributes?: UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			UpsertWorkflowSearchAttributesDecisionAttributes: init?.UpsertWorkflowSearchAttributesDecisionAttributes ?? (null! as UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decision_UpsertWorkflowSearchAttributesDecisionAttributes {
		return new Decision_UpsertWorkflowSearchAttributesDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: Decision_UpsertWorkflowSearchAttributesDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.UpsertWorkflowSearchAttributesDecisionAttributes = values.UpsertWorkflowSearchAttributesDecisionAttributes
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<Decision_UpsertWorkflowSearchAttributesDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_UpsertWorkflowSearchAttributesDecisionAttributes).Size() : Decision_UpsertWorkflowSearchAttributesDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Decision_UpsertWorkflowSearchAttributesDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Decision_UpsertWorkflowSearchAttributesDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Decision_UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<Decision_UpsertWorkflowSearchAttributesDecisionAttributes> | null = this;
		const m$: Decision_UpsertWorkflowSearchAttributesDecisionAttributes = m == null ? $.pointerTarget<Decision_UpsertWorkflowSearchAttributesDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_UpsertWorkflowSearchAttributesDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as Decision_UpsertWorkflowSearchAttributesDecisionAttributes).UpsertWorkflowSearchAttributesDecisionAttributes != null) {
			{
				let [size, err] = UpsertWorkflowSearchAttributesDecisionAttributes.prototype.MarshalToSizedBuffer.call((m$ as Decision_UpsertWorkflowSearchAttributesDecisionAttributes).UpsertWorkflowSearchAttributesDecisionAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x6a
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: Decision_UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<Decision_UpsertWorkflowSearchAttributesDecisionAttributes> | null = this;
		let n: number = 0
		const m$: Decision_UpsertWorkflowSearchAttributesDecisionAttributes = m == null ? $.pointerTarget<Decision_UpsertWorkflowSearchAttributesDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Decision_UpsertWorkflowSearchAttributesDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Decision_UpsertWorkflowSearchAttributesDecisionAttributes).UpsertWorkflowSearchAttributesDecisionAttributes != null) {
			l = UpsertWorkflowSearchAttributesDecisionAttributes.prototype.Size.call((m$ as Decision_UpsertWorkflowSearchAttributesDecisionAttributes).UpsertWorkflowSearchAttributesDecisionAttributes)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		return n
	}

	public isDecision_Attributes(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Decision_UpsertWorkflowSearchAttributesDecisionAttributes",
		() => new Decision_UpsertWorkflowSearchAttributesDecisionAttributes(),
		() => [{ name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "isDecision_Attributes", args: [], returns: [], pointerReceiver: true }],
		Decision_UpsertWorkflowSearchAttributesDecisionAttributes,
		() => [{ name: "UpsertWorkflowSearchAttributesDecisionAttributes", key: "UpsertWorkflowSearchAttributesDecisionAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.UpsertWorkflowSearchAttributesDecisionAttributes"), tag: "protobuf:\"bytes,13,opt,name=upsert_workflow_search_attributes_decision_attributes,json=upsertWorkflowSearchAttributesDecisionAttributes,proto3,oneof\" json:\"upsert_workflow_search_attributes_decision_attributes,omitempty\"" }]
	)
}

export class ScheduleActivityTaskDecisionAttributes {
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

	public get Input(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.Input
	}

	public set Input(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.Input = value
	}

	public get ScheduleToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.ScheduleToCloseTimeout
	}

	public set ScheduleToCloseTimeout(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.ScheduleToCloseTimeout = value
	}

	public get ScheduleToStartTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.ScheduleToStartTimeout
	}

	public set ScheduleToStartTimeout(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.ScheduleToStartTimeout = value
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

	public get RetryPolicy(): __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null {
		return this._fields.RetryPolicy
	}

	public set RetryPolicy(value: __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null) {
		this._fields.RetryPolicy = value
	}

	public get Header(): __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null {
		return this._fields.Header
	}

	public set Header(value: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null) {
		this._fields.Header = value
	}

	public get RequestLocalDispatch(): boolean {
		return this._fields.RequestLocalDispatch
	}

	public set RequestLocalDispatch(value: boolean) {
		this._fields.RequestLocalDispatch = value
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
		ActivityId: string
		ActivityType: __goscript_common_pb.ActivityType | $.VarRef<__goscript_common_pb.ActivityType> | null
		Domain: string
		TaskList: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null
		Input: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		ScheduleToCloseTimeout: types.Duration | $.VarRef<types.Duration> | null
		ScheduleToStartTimeout: types.Duration | $.VarRef<types.Duration> | null
		StartToCloseTimeout: types.Duration | $.VarRef<types.Duration> | null
		HeartbeatTimeout: types.Duration | $.VarRef<types.Duration> | null
		RetryPolicy: __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null
		Header: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null
		RequestLocalDispatch: boolean
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{ActivityId?: string, ActivityType?: __goscript_common_pb.ActivityType | $.VarRef<__goscript_common_pb.ActivityType> | null, Domain?: string, TaskList?: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null, Input?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, ScheduleToCloseTimeout?: types.Duration | $.VarRef<types.Duration> | null, ScheduleToStartTimeout?: types.Duration | $.VarRef<types.Duration> | null, StartToCloseTimeout?: types.Duration | $.VarRef<types.Duration> | null, HeartbeatTimeout?: types.Duration | $.VarRef<types.Duration> | null, RetryPolicy?: __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null, Header?: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null, RequestLocalDispatch?: boolean, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ActivityId: init?.ActivityId ?? ("" as string),
			ActivityType: init?.ActivityType ?? (null! as __goscript_common_pb.ActivityType | $.VarRef<__goscript_common_pb.ActivityType> | null),
			Domain: init?.Domain ?? ("" as string),
			TaskList: init?.TaskList ?? (null! as __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null),
			Input: init?.Input ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			ScheduleToCloseTimeout: init?.ScheduleToCloseTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			ScheduleToStartTimeout: init?.ScheduleToStartTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			StartToCloseTimeout: init?.StartToCloseTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			HeartbeatTimeout: init?.HeartbeatTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			RetryPolicy: init?.RetryPolicy ?? (null! as __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null),
			Header: init?.Header ?? (null! as __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null),
			RequestLocalDispatch: init?.RequestLocalDispatch ?? (false as boolean),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScheduleActivityTaskDecisionAttributes {
		return new ScheduleActivityTaskDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: ScheduleActivityTaskDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.ActivityId = values.ActivityId
		target.ActivityType = values.ActivityType
		target.Domain = values.Domain
		target.TaskList = values.TaskList
		target.Input = values.Input
		target.ScheduleToCloseTimeout = values.ScheduleToCloseTimeout
		target.ScheduleToStartTimeout = values.ScheduleToStartTimeout
		target.StartToCloseTimeout = values.StartToCloseTimeout
		target.HeartbeatTimeout = values.HeartbeatTimeout
		target.RetryPolicy = values.RetryPolicy
		target.Header = values.Header
		target.RequestLocalDispatch = values.RequestLocalDispatch
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_fb529b236ea74dc2, $.arrayToSlice<number>([1])]
	}

	public GetActivityId(): string {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleActivityTaskDecisionAttributes>(m).ActivityId
		}
		return ""
	}

	public GetActivityType(): __goscript_common_pb.ActivityType | $.VarRef<__goscript_common_pb.ActivityType> | null {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleActivityTaskDecisionAttributes>(m).ActivityType
		}
		return null
	}

	public GetDomain(): string {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleActivityTaskDecisionAttributes>(m).Domain
		}
		return ""
	}

	public GetHeader(): __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleActivityTaskDecisionAttributes>(m).Header
		}
		return null
	}

	public GetHeartbeatTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleActivityTaskDecisionAttributes>(m).HeartbeatTimeout
		}
		return null
	}

	public GetInput(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleActivityTaskDecisionAttributes>(m).Input
		}
		return null
	}

	public GetRequestLocalDispatch(): boolean {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleActivityTaskDecisionAttributes>(m).RequestLocalDispatch
		}
		return false
	}

	public GetRetryPolicy(): __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleActivityTaskDecisionAttributes>(m).RetryPolicy
		}
		return null
	}

	public GetScheduleToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleActivityTaskDecisionAttributes>(m).ScheduleToCloseTimeout
		}
		return null
	}

	public GetScheduleToStartTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleActivityTaskDecisionAttributes>(m).ScheduleToStartTimeout
		}
		return null
	}

	public GetStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleActivityTaskDecisionAttributes>(m).StartToCloseTimeout
		}
		return null
	}

	public GetTaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ScheduleActivityTaskDecisionAttributes>(m).TaskList
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleActivityTaskDecisionAttributes).Size() : ScheduleActivityTaskDecisionAttributes.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple14: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleActivityTaskDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScheduleActivityTaskDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleActivityTaskDecisionAttributes).Size() : ScheduleActivityTaskDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleActivityTaskDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScheduleActivityTaskDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		const m$: ScheduleActivityTaskDecisionAttributes = m == null ? $.pointerTarget<ScheduleActivityTaskDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleActivityTaskDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ScheduleActivityTaskDecisionAttributes).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ScheduleActivityTaskDecisionAttributes).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScheduleActivityTaskDecisionAttributes).XXX_unrecognized)
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).RequestLocalDispatch) {
			i--
			if ((m$ as ScheduleActivityTaskDecisionAttributes).RequestLocalDispatch) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x68
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).Header != null) {
			{
				let [size, err] = __goscript_common_pb.Header.prototype.MarshalToSizedBuffer.call((m$ as ScheduleActivityTaskDecisionAttributes).Header, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x62
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).RetryPolicy != null) {
			{
				let [size, err] = __goscript_common_pb.RetryPolicy.prototype.MarshalToSizedBuffer.call((m$ as ScheduleActivityTaskDecisionAttributes).RetryPolicy, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x5a
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).HeartbeatTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as ScheduleActivityTaskDecisionAttributes).HeartbeatTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x4a
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).StartToCloseTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as ScheduleActivityTaskDecisionAttributes).StartToCloseTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x42
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).ScheduleToStartTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as ScheduleActivityTaskDecisionAttributes).ScheduleToStartTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x3a
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).ScheduleToCloseTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as ScheduleActivityTaskDecisionAttributes).ScheduleToCloseTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).Input != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as ScheduleActivityTaskDecisionAttributes).Input, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).TaskList != null) {
			{
				let [size, err] = __goscript_tasklist_pb.TaskList.prototype.MarshalToSizedBuffer.call((m$ as ScheduleActivityTaskDecisionAttributes).TaskList, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as ScheduleActivityTaskDecisionAttributes).Domain) > 0) {
			i = i - ($.stringLen((m$ as ScheduleActivityTaskDecisionAttributes).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScheduleActivityTaskDecisionAttributes).Domain)
			i = encodeVarintDecision(dAtA, i, $.uint64($.stringLen((m$ as ScheduleActivityTaskDecisionAttributes).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).ActivityType != null) {
			{
				let [size, err] = __goscript_common_pb.ActivityType.prototype.MarshalToSizedBuffer.call((m$ as ScheduleActivityTaskDecisionAttributes).ActivityType, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as ScheduleActivityTaskDecisionAttributes).ActivityId) > 0) {
			i = i - ($.stringLen((m$ as ScheduleActivityTaskDecisionAttributes).ActivityId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScheduleActivityTaskDecisionAttributes).ActivityId)
			i = encodeVarintDecision(dAtA, i, $.uint64($.stringLen((m$ as ScheduleActivityTaskDecisionAttributes).ActivityId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		$.assignStruct($.pointerValue<ScheduleActivityTaskDecisionAttributes>(m), $.markAsStructValue(new ScheduleActivityTaskDecisionAttributes()))
	}

	public Size(): number {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		let n: number = 0
		const m$: ScheduleActivityTaskDecisionAttributes = m == null ? $.pointerTarget<ScheduleActivityTaskDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleActivityTaskDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ScheduleActivityTaskDecisionAttributes).ActivityId)
		if (l > 0) {
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).ActivityType != null) {
			l = __goscript_common_pb.ActivityType.prototype.Size.call((m$ as ScheduleActivityTaskDecisionAttributes).ActivityType)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		l = $.stringLen((m$ as ScheduleActivityTaskDecisionAttributes).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).TaskList != null) {
			l = __goscript_tasklist_pb.TaskList.prototype.Size.call((m$ as ScheduleActivityTaskDecisionAttributes).TaskList)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).Input != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as ScheduleActivityTaskDecisionAttributes).Input)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).ScheduleToCloseTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as ScheduleActivityTaskDecisionAttributes).ScheduleToCloseTimeout)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).ScheduleToStartTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as ScheduleActivityTaskDecisionAttributes).ScheduleToStartTimeout)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).StartToCloseTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as ScheduleActivityTaskDecisionAttributes).StartToCloseTimeout)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).HeartbeatTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as ScheduleActivityTaskDecisionAttributes).HeartbeatTimeout)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).RetryPolicy != null) {
			l = __goscript_common_pb.RetryPolicy.prototype.Size.call((m$ as ScheduleActivityTaskDecisionAttributes).RetryPolicy)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).Header != null) {
			l = __goscript_common_pb.Header.prototype.Size.call((m$ as ScheduleActivityTaskDecisionAttributes).Header)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).RequestLocalDispatch) {
			n = n + (2)
		}
		if ((m$ as ScheduleActivityTaskDecisionAttributes).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ScheduleActivityTaskDecisionAttributes).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleActivityTaskDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.ScheduleActivityTaskDecisionAttributes")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		const m$: ScheduleActivityTaskDecisionAttributes = m == null ? $.pointerTarget<ScheduleActivityTaskDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScheduleActivityTaskDecisionAttributes>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDecision
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
				return fmt.Errorf("proto: ScheduleActivityTaskDecisionAttributes: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ScheduleActivityTaskDecisionAttributes: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActivityId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScheduleActivityTaskDecisionAttributes).ActivityId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActivityType", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleActivityTaskDecisionAttributes).ActivityType == null) {
						;(m$ as ScheduleActivityTaskDecisionAttributes).ActivityType = new __goscript_common_pb.ActivityType()
					}
					{
						let err = __goscript_common_pb.ActivityType.prototype.Unmarshal.call((m$ as ScheduleActivityTaskDecisionAttributes).ActivityType, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Domain", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScheduleActivityTaskDecisionAttributes).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleActivityTaskDecisionAttributes).TaskList == null) {
						;(m$ as ScheduleActivityTaskDecisionAttributes).TaskList = new __goscript_tasklist_pb.TaskList()
					}
					{
						let err = __goscript_tasklist_pb.TaskList.prototype.Unmarshal.call((m$ as ScheduleActivityTaskDecisionAttributes).TaskList, $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleActivityTaskDecisionAttributes).Input == null) {
						;(m$ as ScheduleActivityTaskDecisionAttributes).Input = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as ScheduleActivityTaskDecisionAttributes).Input, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduleToCloseTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleActivityTaskDecisionAttributes).ScheduleToCloseTimeout == null) {
						;(m$ as ScheduleActivityTaskDecisionAttributes).ScheduleToCloseTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as ScheduleActivityTaskDecisionAttributes).ScheduleToCloseTimeout, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduleToStartTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleActivityTaskDecisionAttributes).ScheduleToStartTimeout == null) {
						;(m$ as ScheduleActivityTaskDecisionAttributes).ScheduleToStartTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as ScheduleActivityTaskDecisionAttributes).ScheduleToStartTimeout, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field StartToCloseTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleActivityTaskDecisionAttributes).StartToCloseTimeout == null) {
						;(m$ as ScheduleActivityTaskDecisionAttributes).StartToCloseTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as ScheduleActivityTaskDecisionAttributes).StartToCloseTimeout, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field HeartbeatTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleActivityTaskDecisionAttributes).HeartbeatTimeout == null) {
						;(m$ as ScheduleActivityTaskDecisionAttributes).HeartbeatTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as ScheduleActivityTaskDecisionAttributes).HeartbeatTimeout, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field RetryPolicy", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleActivityTaskDecisionAttributes).RetryPolicy == null) {
						;(m$ as ScheduleActivityTaskDecisionAttributes).RetryPolicy = new __goscript_common_pb.RetryPolicy()
					}
					{
						let err = __goscript_common_pb.RetryPolicy.prototype.Unmarshal.call((m$ as ScheduleActivityTaskDecisionAttributes).RetryPolicy, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Header", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ScheduleActivityTaskDecisionAttributes).Header == null) {
						;(m$ as ScheduleActivityTaskDecisionAttributes).Header = new __goscript_common_pb.Header()
					}
					{
						let err = __goscript_common_pb.Header.prototype.Unmarshal.call((m$ as ScheduleActivityTaskDecisionAttributes).Header, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 13:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field RequestLocalDispatch", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as ScheduleActivityTaskDecisionAttributes).RequestLocalDispatch = (v != 0)
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipDecision($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDecision
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScheduleActivityTaskDecisionAttributes).XXX_unrecognized = $.appendSlice((m$ as ScheduleActivityTaskDecisionAttributes).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		xxx_messageInfo_ScheduleActivityTaskDecisionAttributes.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleActivityTaskDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.ScheduleActivityTaskDecisionAttributes")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ScheduleActivityTaskDecisionAttributes.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleActivityTaskDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.ScheduleActivityTaskDecisionAttributes")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleActivityTaskDecisionAttributes).MarshalToSizedBuffer(b) : ScheduleActivityTaskDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		xxx_messageInfo_ScheduleActivityTaskDecisionAttributes.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ScheduleActivityTaskDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.ScheduleActivityTaskDecisionAttributes")), src)
	}

	public XXX_Size(): number {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleActivityTaskDecisionAttributes).Size() : ScheduleActivityTaskDecisionAttributes.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ScheduleActivityTaskDecisionAttributes | $.VarRef<ScheduleActivityTaskDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScheduleActivityTaskDecisionAttributes).Unmarshal(b) : ScheduleActivityTaskDecisionAttributes.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ScheduleActivityTaskDecisionAttributes",
		() => new ScheduleActivityTaskDecisionAttributes(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActivityId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetActivityType", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ActivityType") }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetHeader", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Header") }], pointerReceiver: true }, { name: "GetHeartbeatTimeout", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetInput", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetRequestLocalDispatch", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetRetryPolicy", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RetryPolicy") }], pointerReceiver: true }, { name: "GetScheduleToCloseTimeout", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetScheduleToStartTimeout", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetStartToCloseTimeout", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetTaskList", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.TaskList") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ScheduleActivityTaskDecisionAttributes,
		() => [{ name: "ActivityId", key: "ActivityId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=activity_id,json=activityId,proto3\" json:\"activity_id,omitempty\"" }, { name: "ActivityType", key: "ActivityType", type: /* @__PURE__ */ $.pointerType("apiv1.ActivityType"), tag: "protobuf:\"bytes,2,opt,name=activity_type,json=activityType,proto3\" json:\"activity_type,omitempty\"" }, { name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "TaskList", key: "TaskList", type: /* @__PURE__ */ $.pointerType("apiv1.TaskList"), tag: "protobuf:\"bytes,4,opt,name=task_list,json=taskList,proto3\" json:\"task_list,omitempty\"" }, { name: "Input", key: "Input", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,5,opt,name=input,proto3\" json:\"input,omitempty\"" }, { name: "ScheduleToCloseTimeout", key: "ScheduleToCloseTimeout", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,6,opt,name=schedule_to_close_timeout,json=scheduleToCloseTimeout,proto3\" json:\"schedule_to_close_timeout,omitempty\"" }, { name: "ScheduleToStartTimeout", key: "ScheduleToStartTimeout", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,7,opt,name=schedule_to_start_timeout,json=scheduleToStartTimeout,proto3\" json:\"schedule_to_start_timeout,omitempty\"" }, { name: "StartToCloseTimeout", key: "StartToCloseTimeout", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,8,opt,name=start_to_close_timeout,json=startToCloseTimeout,proto3\" json:\"start_to_close_timeout,omitempty\"" }, { name: "HeartbeatTimeout", key: "HeartbeatTimeout", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,9,opt,name=heartbeat_timeout,json=heartbeatTimeout,proto3\" json:\"heartbeat_timeout,omitempty\"" }, { name: "RetryPolicy", key: "RetryPolicy", type: /* @__PURE__ */ $.pointerType("apiv1.RetryPolicy"), tag: "protobuf:\"bytes,11,opt,name=retry_policy,json=retryPolicy,proto3\" json:\"retry_policy,omitempty\"" }, { name: "Header", key: "Header", type: /* @__PURE__ */ $.pointerType("apiv1.Header"), tag: "protobuf:\"bytes,12,opt,name=header,proto3\" json:\"header,omitempty\"" }, { name: "RequestLocalDispatch", key: "RequestLocalDispatch", type: /* @__PURE__ */ $.basicType("bool"), tag: "protobuf:\"varint,13,opt,name=request_local_dispatch,json=requestLocalDispatch,proto3\" json:\"request_local_dispatch,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class StartTimerDecisionAttributes {
	public get TimerId(): string {
		return this._fields.TimerId
	}

	public set TimerId(value: string) {
		this._fields.TimerId = value
	}

	public get StartToFireTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.StartToFireTimeout
	}

	public set StartToFireTimeout(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.StartToFireTimeout = value
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
		TimerId: string
		StartToFireTimeout: types.Duration | $.VarRef<types.Duration> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{TimerId?: string, StartToFireTimeout?: types.Duration | $.VarRef<types.Duration> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			TimerId: init?.TimerId ?? ("" as string),
			StartToFireTimeout: init?.StartToFireTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StartTimerDecisionAttributes {
		return new StartTimerDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: StartTimerDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.TimerId = values.TimerId
		target.StartToFireTimeout = values.StartToFireTimeout
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_fb529b236ea74dc2, $.arrayToSlice<number>([2])]
	}

	public GetStartToFireTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartTimerDecisionAttributes>(m).StartToFireTimeout
		}
		return null
	}

	public GetTimerId(): string {
		const m: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartTimerDecisionAttributes>(m).TimerId
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartTimerDecisionAttributes).Size() : StartTimerDecisionAttributes.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple15: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartTimerDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StartTimerDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple15[0]
		err = __goscriptTuple15[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartTimerDecisionAttributes).Size() : StartTimerDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartTimerDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StartTimerDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null = this;
		const m$: StartTimerDecisionAttributes = m == null ? $.pointerTarget<StartTimerDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartTimerDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as StartTimerDecisionAttributes).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as StartTimerDecisionAttributes).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartTimerDecisionAttributes).XXX_unrecognized)
		}
		if ((m$ as StartTimerDecisionAttributes).StartToFireTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as StartTimerDecisionAttributes).StartToFireTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as StartTimerDecisionAttributes).TimerId) > 0) {
			i = i - ($.stringLen((m$ as StartTimerDecisionAttributes).TimerId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartTimerDecisionAttributes).TimerId)
			i = encodeVarintDecision(dAtA, i, $.uint64($.stringLen((m$ as StartTimerDecisionAttributes).TimerId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null = this;
		$.assignStruct($.pointerValue<StartTimerDecisionAttributes>(m), $.markAsStructValue(new StartTimerDecisionAttributes()))
	}

	public Size(): number {
		const m: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null = this;
		let n: number = 0
		const m$: StartTimerDecisionAttributes = m == null ? $.pointerTarget<StartTimerDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartTimerDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as StartTimerDecisionAttributes).TimerId)
		if (l > 0) {
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as StartTimerDecisionAttributes).StartToFireTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as StartTimerDecisionAttributes).StartToFireTimeout)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as StartTimerDecisionAttributes).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as StartTimerDecisionAttributes).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.StartTimerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.StartTimerDecisionAttributes")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null = this;
		const m$: StartTimerDecisionAttributes = m == null ? $.pointerTarget<StartTimerDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartTimerDecisionAttributes>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDecision
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
				return fmt.Errorf("proto: StartTimerDecisionAttributes: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: StartTimerDecisionAttributes: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TimerId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartTimerDecisionAttributes).TimerId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartToFireTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartTimerDecisionAttributes).StartToFireTimeout == null) {
						;(m$ as StartTimerDecisionAttributes).StartToFireTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as StartTimerDecisionAttributes).StartToFireTimeout, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipDecision($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDecision
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartTimerDecisionAttributes).XXX_unrecognized = $.appendSlice((m$ as StartTimerDecisionAttributes).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null = this;
		xxx_messageInfo_StartTimerDecisionAttributes.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.StartTimerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.StartTimerDecisionAttributes")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null = this;
		if (deterministic) {
			return xxx_messageInfo_StartTimerDecisionAttributes.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.StartTimerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.StartTimerDecisionAttributes")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartTimerDecisionAttributes).MarshalToSizedBuffer(b) : StartTimerDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null = this;
		xxx_messageInfo_StartTimerDecisionAttributes.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.StartTimerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.StartTimerDecisionAttributes")), src)
	}

	public XXX_Size(): number {
		const m: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartTimerDecisionAttributes).Size() : StartTimerDecisionAttributes.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: StartTimerDecisionAttributes | $.VarRef<StartTimerDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartTimerDecisionAttributes).Unmarshal(b) : StartTimerDecisionAttributes.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.StartTimerDecisionAttributes",
		() => new StartTimerDecisionAttributes(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetStartToFireTimeout", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetTimerId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		StartTimerDecisionAttributes,
		() => [{ name: "TimerId", key: "TimerId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=timer_id,json=timerId,proto3\" json:\"timer_id,omitempty\"" }, { name: "StartToFireTimeout", key: "StartToFireTimeout", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,2,opt,name=start_to_fire_timeout,json=startToFireTimeout,proto3\" json:\"start_to_fire_timeout,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class CompleteWorkflowExecutionDecisionAttributes {
	public get Result(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.Result
	}

	public set Result(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.Result = value
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
		Result: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Result?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Result: init?.Result ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CompleteWorkflowExecutionDecisionAttributes {
		return new CompleteWorkflowExecutionDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: CompleteWorkflowExecutionDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.Result = values.Result
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_fb529b236ea74dc2, $.arrayToSlice<number>([3])]
	}

	public GetResult(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<CompleteWorkflowExecutionDecisionAttributes>(m).Result
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CompleteWorkflowExecutionDecisionAttributes).Size() : CompleteWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple16: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CompleteWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : CompleteWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple16[0]
		err = __goscriptTuple16[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CompleteWorkflowExecutionDecisionAttributes).Size() : CompleteWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CompleteWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : CompleteWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null = this;
		const m$: CompleteWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<CompleteWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CompleteWorkflowExecutionDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as CompleteWorkflowExecutionDecisionAttributes).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as CompleteWorkflowExecutionDecisionAttributes).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as CompleteWorkflowExecutionDecisionAttributes).XXX_unrecognized)
		}
		if ((m$ as CompleteWorkflowExecutionDecisionAttributes).Result != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as CompleteWorkflowExecutionDecisionAttributes).Result, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null = this;
		$.assignStruct($.pointerValue<CompleteWorkflowExecutionDecisionAttributes>(m), $.markAsStructValue(new CompleteWorkflowExecutionDecisionAttributes()))
	}

	public Size(): number {
		const m: CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null = this;
		let n: number = 0
		const m$: CompleteWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<CompleteWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CompleteWorkflowExecutionDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as CompleteWorkflowExecutionDecisionAttributes).Result != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as CompleteWorkflowExecutionDecisionAttributes).Result)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as CompleteWorkflowExecutionDecisionAttributes).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as CompleteWorkflowExecutionDecisionAttributes).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.CompleteWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.CompleteWorkflowExecutionDecisionAttributes")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null = this;
		const m$: CompleteWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<CompleteWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CompleteWorkflowExecutionDecisionAttributes>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDecision
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
				return fmt.Errorf("proto: CompleteWorkflowExecutionDecisionAttributes: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: CompleteWorkflowExecutionDecisionAttributes: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Result", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as CompleteWorkflowExecutionDecisionAttributes).Result == null) {
						;(m$ as CompleteWorkflowExecutionDecisionAttributes).Result = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as CompleteWorkflowExecutionDecisionAttributes).Result, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipDecision($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDecision
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as CompleteWorkflowExecutionDecisionAttributes).XXX_unrecognized = $.appendSlice((m$ as CompleteWorkflowExecutionDecisionAttributes).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null = this;
		xxx_messageInfo_CompleteWorkflowExecutionDecisionAttributes.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.CompleteWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.CompleteWorkflowExecutionDecisionAttributes")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null = this;
		if (deterministic) {
			return xxx_messageInfo_CompleteWorkflowExecutionDecisionAttributes.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.CompleteWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.CompleteWorkflowExecutionDecisionAttributes")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CompleteWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer(b) : CompleteWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null = this;
		xxx_messageInfo_CompleteWorkflowExecutionDecisionAttributes.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.CompleteWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.CompleteWorkflowExecutionDecisionAttributes")), src)
	}

	public XXX_Size(): number {
		const m: CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CompleteWorkflowExecutionDecisionAttributes).Size() : CompleteWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: CompleteWorkflowExecutionDecisionAttributes | $.VarRef<CompleteWorkflowExecutionDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CompleteWorkflowExecutionDecisionAttributes).Unmarshal(b) : CompleteWorkflowExecutionDecisionAttributes.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.CompleteWorkflowExecutionDecisionAttributes",
		() => new CompleteWorkflowExecutionDecisionAttributes(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetResult", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		CompleteWorkflowExecutionDecisionAttributes,
		() => [{ name: "Result", key: "Result", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,1,opt,name=result,proto3\" json:\"result,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class FailWorkflowExecutionDecisionAttributes {
	public get Failure(): __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null {
		return this._fields.Failure
	}

	public set Failure(value: __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null) {
		this._fields.Failure = value
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
		Failure: __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Failure?: __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Failure: init?.Failure ?? (null! as __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FailWorkflowExecutionDecisionAttributes {
		return new FailWorkflowExecutionDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: FailWorkflowExecutionDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.Failure = values.Failure
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_fb529b236ea74dc2, $.arrayToSlice<number>([4])]
	}

	public GetFailure(): __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null {
		const m: FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<FailWorkflowExecutionDecisionAttributes>(m).Failure
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailWorkflowExecutionDecisionAttributes).Size() : FailWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple17: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FailWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple17[0]
		err = __goscriptTuple17[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailWorkflowExecutionDecisionAttributes).Size() : FailWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FailWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null = this;
		const m$: FailWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<FailWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailWorkflowExecutionDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as FailWorkflowExecutionDecisionAttributes).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as FailWorkflowExecutionDecisionAttributes).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as FailWorkflowExecutionDecisionAttributes).XXX_unrecognized)
		}
		if ((m$ as FailWorkflowExecutionDecisionAttributes).Failure != null) {
			{
				let [size, err] = __goscript_common_pb.Failure.prototype.MarshalToSizedBuffer.call((m$ as FailWorkflowExecutionDecisionAttributes).Failure, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null = this;
		$.assignStruct($.pointerValue<FailWorkflowExecutionDecisionAttributes>(m), $.markAsStructValue(new FailWorkflowExecutionDecisionAttributes()))
	}

	public Size(): number {
		const m: FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null = this;
		let n: number = 0
		const m$: FailWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<FailWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailWorkflowExecutionDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as FailWorkflowExecutionDecisionAttributes).Failure != null) {
			l = __goscript_common_pb.Failure.prototype.Size.call((m$ as FailWorkflowExecutionDecisionAttributes).Failure)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as FailWorkflowExecutionDecisionAttributes).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as FailWorkflowExecutionDecisionAttributes).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.FailWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.FailWorkflowExecutionDecisionAttributes")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null = this;
		const m$: FailWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<FailWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailWorkflowExecutionDecisionAttributes>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow4 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDecision
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
				return fmt.Errorf("proto: FailWorkflowExecutionDecisionAttributes: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: FailWorkflowExecutionDecisionAttributes: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Failure", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as FailWorkflowExecutionDecisionAttributes).Failure == null) {
						;(m$ as FailWorkflowExecutionDecisionAttributes).Failure = new __goscript_common_pb.Failure()
					}
					{
						let err = __goscript_common_pb.Failure.prototype.Unmarshal.call((m$ as FailWorkflowExecutionDecisionAttributes).Failure, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipDecision($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDecision
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as FailWorkflowExecutionDecisionAttributes).XXX_unrecognized = $.appendSlice((m$ as FailWorkflowExecutionDecisionAttributes).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null = this;
		xxx_messageInfo_FailWorkflowExecutionDecisionAttributes.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.FailWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.FailWorkflowExecutionDecisionAttributes")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null = this;
		if (deterministic) {
			return xxx_messageInfo_FailWorkflowExecutionDecisionAttributes.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.FailWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.FailWorkflowExecutionDecisionAttributes")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer(b) : FailWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null = this;
		xxx_messageInfo_FailWorkflowExecutionDecisionAttributes.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.FailWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.FailWorkflowExecutionDecisionAttributes")), src)
	}

	public XXX_Size(): number {
		const m: FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailWorkflowExecutionDecisionAttributes).Size() : FailWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: FailWorkflowExecutionDecisionAttributes | $.VarRef<FailWorkflowExecutionDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailWorkflowExecutionDecisionAttributes).Unmarshal(b) : FailWorkflowExecutionDecisionAttributes.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FailWorkflowExecutionDecisionAttributes",
		() => new FailWorkflowExecutionDecisionAttributes(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetFailure", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Failure") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		FailWorkflowExecutionDecisionAttributes,
		() => [{ name: "Failure", key: "Failure", type: /* @__PURE__ */ $.pointerType("apiv1.Failure"), tag: "protobuf:\"bytes,1,opt,name=failure,proto3\" json:\"failure,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RequestCancelActivityTaskDecisionAttributes {
	public get ActivityId(): string {
		return this._fields.ActivityId
	}

	public set ActivityId(value: string) {
		this._fields.ActivityId = value
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
		ActivityId: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{ActivityId?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ActivityId: init?.ActivityId ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RequestCancelActivityTaskDecisionAttributes {
		return new RequestCancelActivityTaskDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: RequestCancelActivityTaskDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.ActivityId = values.ActivityId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_fb529b236ea74dc2, $.arrayToSlice<number>([5])]
	}

	public GetActivityId(): string {
		const m: RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<RequestCancelActivityTaskDecisionAttributes>(m).ActivityId
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelActivityTaskDecisionAttributes).Size() : RequestCancelActivityTaskDecisionAttributes.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple18: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelActivityTaskDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RequestCancelActivityTaskDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple18[0]
		err = __goscriptTuple18[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelActivityTaskDecisionAttributes).Size() : RequestCancelActivityTaskDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelActivityTaskDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RequestCancelActivityTaskDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null = this;
		const m$: RequestCancelActivityTaskDecisionAttributes = m == null ? $.pointerTarget<RequestCancelActivityTaskDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RequestCancelActivityTaskDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RequestCancelActivityTaskDecisionAttributes).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RequestCancelActivityTaskDecisionAttributes).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RequestCancelActivityTaskDecisionAttributes).XXX_unrecognized)
		}
		if ($.stringLen((m$ as RequestCancelActivityTaskDecisionAttributes).ActivityId) > 0) {
			i = i - ($.stringLen((m$ as RequestCancelActivityTaskDecisionAttributes).ActivityId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RequestCancelActivityTaskDecisionAttributes).ActivityId)
			i = encodeVarintDecision(dAtA, i, $.uint64($.stringLen((m$ as RequestCancelActivityTaskDecisionAttributes).ActivityId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null = this;
		$.assignStruct($.pointerValue<RequestCancelActivityTaskDecisionAttributes>(m), $.markAsStructValue(new RequestCancelActivityTaskDecisionAttributes()))
	}

	public Size(): number {
		const m: RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null = this;
		let n: number = 0
		const m$: RequestCancelActivityTaskDecisionAttributes = m == null ? $.pointerTarget<RequestCancelActivityTaskDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RequestCancelActivityTaskDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as RequestCancelActivityTaskDecisionAttributes).ActivityId)
		if (l > 0) {
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as RequestCancelActivityTaskDecisionAttributes).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RequestCancelActivityTaskDecisionAttributes).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RequestCancelActivityTaskDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelActivityTaskDecisionAttributes")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null = this;
		const m$: RequestCancelActivityTaskDecisionAttributes = m == null ? $.pointerTarget<RequestCancelActivityTaskDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RequestCancelActivityTaskDecisionAttributes>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow5 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDecision
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
				return fmt.Errorf("proto: RequestCancelActivityTaskDecisionAttributes: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RequestCancelActivityTaskDecisionAttributes: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActivityId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RequestCancelActivityTaskDecisionAttributes).ActivityId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipDecision($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDecision
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RequestCancelActivityTaskDecisionAttributes).XXX_unrecognized = $.appendSlice((m$ as RequestCancelActivityTaskDecisionAttributes).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null = this;
		xxx_messageInfo_RequestCancelActivityTaskDecisionAttributes.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RequestCancelActivityTaskDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelActivityTaskDecisionAttributes")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RequestCancelActivityTaskDecisionAttributes.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RequestCancelActivityTaskDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelActivityTaskDecisionAttributes")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelActivityTaskDecisionAttributes).MarshalToSizedBuffer(b) : RequestCancelActivityTaskDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null = this;
		xxx_messageInfo_RequestCancelActivityTaskDecisionAttributes.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RequestCancelActivityTaskDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelActivityTaskDecisionAttributes")), src)
	}

	public XXX_Size(): number {
		const m: RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelActivityTaskDecisionAttributes).Size() : RequestCancelActivityTaskDecisionAttributes.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RequestCancelActivityTaskDecisionAttributes | $.VarRef<RequestCancelActivityTaskDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelActivityTaskDecisionAttributes).Unmarshal(b) : RequestCancelActivityTaskDecisionAttributes.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RequestCancelActivityTaskDecisionAttributes",
		() => new RequestCancelActivityTaskDecisionAttributes(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActivityId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RequestCancelActivityTaskDecisionAttributes,
		() => [{ name: "ActivityId", key: "ActivityId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=activity_id,json=activityId,proto3\" json:\"activity_id,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class CancelTimerDecisionAttributes {
	public get TimerId(): string {
		return this._fields.TimerId
	}

	public set TimerId(value: string) {
		this._fields.TimerId = value
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
		TimerId: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{TimerId?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			TimerId: init?.TimerId ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CancelTimerDecisionAttributes {
		return new CancelTimerDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: CancelTimerDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.TimerId = values.TimerId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_fb529b236ea74dc2, $.arrayToSlice<number>([6])]
	}

	public GetTimerId(): string {
		const m: CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<CancelTimerDecisionAttributes>(m).TimerId
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancelTimerDecisionAttributes).Size() : CancelTimerDecisionAttributes.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple19: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancelTimerDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : CancelTimerDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple19[0]
		err = __goscriptTuple19[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancelTimerDecisionAttributes).Size() : CancelTimerDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancelTimerDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : CancelTimerDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null = this;
		const m$: CancelTimerDecisionAttributes = m == null ? $.pointerTarget<CancelTimerDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CancelTimerDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as CancelTimerDecisionAttributes).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as CancelTimerDecisionAttributes).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as CancelTimerDecisionAttributes).XXX_unrecognized)
		}
		if ($.stringLen((m$ as CancelTimerDecisionAttributes).TimerId) > 0) {
			i = i - ($.stringLen((m$ as CancelTimerDecisionAttributes).TimerId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as CancelTimerDecisionAttributes).TimerId)
			i = encodeVarintDecision(dAtA, i, $.uint64($.stringLen((m$ as CancelTimerDecisionAttributes).TimerId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null = this;
		$.assignStruct($.pointerValue<CancelTimerDecisionAttributes>(m), $.markAsStructValue(new CancelTimerDecisionAttributes()))
	}

	public Size(): number {
		const m: CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null = this;
		let n: number = 0
		const m$: CancelTimerDecisionAttributes = m == null ? $.pointerTarget<CancelTimerDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CancelTimerDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as CancelTimerDecisionAttributes).TimerId)
		if (l > 0) {
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as CancelTimerDecisionAttributes).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as CancelTimerDecisionAttributes).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.CancelTimerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.CancelTimerDecisionAttributes")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null = this;
		const m$: CancelTimerDecisionAttributes = m == null ? $.pointerTarget<CancelTimerDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CancelTimerDecisionAttributes>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow6 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDecision
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
				return fmt.Errorf("proto: CancelTimerDecisionAttributes: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: CancelTimerDecisionAttributes: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TimerId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as CancelTimerDecisionAttributes).TimerId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipDecision($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDecision
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as CancelTimerDecisionAttributes).XXX_unrecognized = $.appendSlice((m$ as CancelTimerDecisionAttributes).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null = this;
		xxx_messageInfo_CancelTimerDecisionAttributes.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.CancelTimerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.CancelTimerDecisionAttributes")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null = this;
		if (deterministic) {
			return xxx_messageInfo_CancelTimerDecisionAttributes.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.CancelTimerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.CancelTimerDecisionAttributes")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancelTimerDecisionAttributes).MarshalToSizedBuffer(b) : CancelTimerDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null = this;
		xxx_messageInfo_CancelTimerDecisionAttributes.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.CancelTimerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.CancelTimerDecisionAttributes")), src)
	}

	public XXX_Size(): number {
		const m: CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancelTimerDecisionAttributes).Size() : CancelTimerDecisionAttributes.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: CancelTimerDecisionAttributes | $.VarRef<CancelTimerDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancelTimerDecisionAttributes).Unmarshal(b) : CancelTimerDecisionAttributes.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.CancelTimerDecisionAttributes",
		() => new CancelTimerDecisionAttributes(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetTimerId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		CancelTimerDecisionAttributes,
		() => [{ name: "TimerId", key: "TimerId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=timer_id,json=timerId,proto3\" json:\"timer_id,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class CancelWorkflowExecutionDecisionAttributes {
	public get Details(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.Details
	}

	public set Details(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.Details = value
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
		Details: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Details?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Details: init?.Details ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CancelWorkflowExecutionDecisionAttributes {
		return new CancelWorkflowExecutionDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: CancelWorkflowExecutionDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.Details = values.Details
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_fb529b236ea74dc2, $.arrayToSlice<number>([7])]
	}

	public GetDetails(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<CancelWorkflowExecutionDecisionAttributes>(m).Details
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancelWorkflowExecutionDecisionAttributes).Size() : CancelWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple20: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancelWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : CancelWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple20[0]
		err = __goscriptTuple20[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancelWorkflowExecutionDecisionAttributes).Size() : CancelWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancelWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : CancelWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null = this;
		const m$: CancelWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<CancelWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CancelWorkflowExecutionDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as CancelWorkflowExecutionDecisionAttributes).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as CancelWorkflowExecutionDecisionAttributes).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as CancelWorkflowExecutionDecisionAttributes).XXX_unrecognized)
		}
		if ((m$ as CancelWorkflowExecutionDecisionAttributes).Details != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as CancelWorkflowExecutionDecisionAttributes).Details, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null = this;
		$.assignStruct($.pointerValue<CancelWorkflowExecutionDecisionAttributes>(m), $.markAsStructValue(new CancelWorkflowExecutionDecisionAttributes()))
	}

	public Size(): number {
		const m: CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null = this;
		let n: number = 0
		const m$: CancelWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<CancelWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CancelWorkflowExecutionDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as CancelWorkflowExecutionDecisionAttributes).Details != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as CancelWorkflowExecutionDecisionAttributes).Details)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as CancelWorkflowExecutionDecisionAttributes).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as CancelWorkflowExecutionDecisionAttributes).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.CancelWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.CancelWorkflowExecutionDecisionAttributes")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null = this;
		const m$: CancelWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<CancelWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CancelWorkflowExecutionDecisionAttributes>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow7 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDecision
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
				return fmt.Errorf("proto: CancelWorkflowExecutionDecisionAttributes: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: CancelWorkflowExecutionDecisionAttributes: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Details", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as CancelWorkflowExecutionDecisionAttributes).Details == null) {
						;(m$ as CancelWorkflowExecutionDecisionAttributes).Details = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as CancelWorkflowExecutionDecisionAttributes).Details, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipDecision($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDecision
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as CancelWorkflowExecutionDecisionAttributes).XXX_unrecognized = $.appendSlice((m$ as CancelWorkflowExecutionDecisionAttributes).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null = this;
		xxx_messageInfo_CancelWorkflowExecutionDecisionAttributes.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.CancelWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.CancelWorkflowExecutionDecisionAttributes")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null = this;
		if (deterministic) {
			return xxx_messageInfo_CancelWorkflowExecutionDecisionAttributes.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.CancelWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.CancelWorkflowExecutionDecisionAttributes")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancelWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer(b) : CancelWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null = this;
		xxx_messageInfo_CancelWorkflowExecutionDecisionAttributes.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.CancelWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.CancelWorkflowExecutionDecisionAttributes")), src)
	}

	public XXX_Size(): number {
		const m: CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancelWorkflowExecutionDecisionAttributes).Size() : CancelWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: CancelWorkflowExecutionDecisionAttributes | $.VarRef<CancelWorkflowExecutionDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancelWorkflowExecutionDecisionAttributes).Unmarshal(b) : CancelWorkflowExecutionDecisionAttributes.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.CancelWorkflowExecutionDecisionAttributes",
		() => new CancelWorkflowExecutionDecisionAttributes(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDetails", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		CancelWorkflowExecutionDecisionAttributes,
		() => [{ name: "Details", key: "Details", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,1,opt,name=details,proto3\" json:\"details,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RequestCancelExternalWorkflowExecutionDecisionAttributes {
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

	public get Control(): $.Slice<number> {
		return this._fields.Control
	}

	public set Control(value: $.Slice<number>) {
		this._fields.Control = value
	}

	public get ChildWorkflowOnly(): boolean {
		return this._fields.ChildWorkflowOnly
	}

	public set ChildWorkflowOnly(value: boolean) {
		this._fields.ChildWorkflowOnly = value
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
		Control: $.Slice<number>
		ChildWorkflowOnly: boolean
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, Control?: $.Slice<number>, ChildWorkflowOnly?: boolean, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			Control: init?.Control ?? (null! as $.Slice<number>),
			ChildWorkflowOnly: init?.ChildWorkflowOnly ?? (false as boolean),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RequestCancelExternalWorkflowExecutionDecisionAttributes {
		return new RequestCancelExternalWorkflowExecutionDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: RequestCancelExternalWorkflowExecutionDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowExecution = values.WorkflowExecution
		target.Control = values.Control
		target.ChildWorkflowOnly = values.ChildWorkflowOnly
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_fb529b236ea74dc2, $.arrayToSlice<number>([8])]
	}

	public GetChildWorkflowOnly(): boolean {
		const m: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<RequestCancelExternalWorkflowExecutionDecisionAttributes>(m).ChildWorkflowOnly
		}
		return false
	}

	public GetControl(): $.Slice<number> {
		const m: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<RequestCancelExternalWorkflowExecutionDecisionAttributes>(m).Control
		}
		return null
	}

	public GetDomain(): string {
		const m: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<RequestCancelExternalWorkflowExecutionDecisionAttributes>(m).Domain
		}
		return ""
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<RequestCancelExternalWorkflowExecutionDecisionAttributes>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelExternalWorkflowExecutionDecisionAttributes).Size() : RequestCancelExternalWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple21: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelExternalWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RequestCancelExternalWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple21[0]
		err = __goscriptTuple21[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelExternalWorkflowExecutionDecisionAttributes).Size() : RequestCancelExternalWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelExternalWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RequestCancelExternalWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		const m$: RequestCancelExternalWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<RequestCancelExternalWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RequestCancelExternalWorkflowExecutionDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).XXX_unrecognized)
		}
		if ((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).ChildWorkflowOnly) {
			i--
			if ((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).ChildWorkflowOnly) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x20
		}
		if ($.sliceLen((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).Control) > 0) {
			i = i - ($.sliceLen((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).Control))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).Control)
			i = encodeVarintDecision(dAtA, i, $.uint64($.sliceLen((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).Control)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).Domain) > 0) {
			i = i - ($.stringLen((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).Domain)
			i = encodeVarintDecision(dAtA, i, $.uint64($.stringLen((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		$.assignStruct($.pointerValue<RequestCancelExternalWorkflowExecutionDecisionAttributes>(m), $.markAsStructValue(new RequestCancelExternalWorkflowExecutionDecisionAttributes()))
	}

	public Size(): number {
		const m: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		let n: number = 0
		const m$: RequestCancelExternalWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<RequestCancelExternalWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RequestCancelExternalWorkflowExecutionDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).WorkflowExecution)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		l = $.sliceLen((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).Control)
		if (l > 0) {
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).ChildWorkflowOnly) {
			n = n + (2)
		}
		if ((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		const m$: RequestCancelExternalWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<RequestCancelExternalWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RequestCancelExternalWorkflowExecutionDecisionAttributes>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow8 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDecision
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
				return fmt.Errorf("proto: RequestCancelExternalWorkflowExecutionDecisionAttributes: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RequestCancelExternalWorkflowExecutionDecisionAttributes: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).WorkflowExecution == null) {
						;(m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Control", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).Control = $.appendSlice($.goSlice((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).Control, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).Control == null) {
						;(m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).Control = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field ChildWorkflowOnly", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).ChildWorkflowOnly = (v != 0)
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipDecision($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDecision
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).XXX_unrecognized = $.appendSlice((m$ as RequestCancelExternalWorkflowExecutionDecisionAttributes).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		xxx_messageInfo_RequestCancelExternalWorkflowExecutionDecisionAttributes.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RequestCancelExternalWorkflowExecutionDecisionAttributes.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelExternalWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer(b) : RequestCancelExternalWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		xxx_messageInfo_RequestCancelExternalWorkflowExecutionDecisionAttributes.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes")), src)
	}

	public XXX_Size(): number {
		const m: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelExternalWorkflowExecutionDecisionAttributes).Size() : RequestCancelExternalWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelExternalWorkflowExecutionDecisionAttributes).Unmarshal(b) : RequestCancelExternalWorkflowExecutionDecisionAttributes.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes",
		() => new RequestCancelExternalWorkflowExecutionDecisionAttributes(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetChildWorkflowOnly", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetControl", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetWorkflowExecution", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RequestCancelExternalWorkflowExecutionDecisionAttributes,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "WorkflowExecution", key: "WorkflowExecution", type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }, { name: "Control", key: "Control", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,3,opt,name=control,proto3\" json:\"control,omitempty\"" }, { name: "ChildWorkflowOnly", key: "ChildWorkflowOnly", type: /* @__PURE__ */ $.basicType("bool"), tag: "protobuf:\"varint,4,opt,name=child_workflow_only,json=childWorkflowOnly,proto3\" json:\"child_workflow_only,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RecordMarkerDecisionAttributes {
	public get MarkerName(): string {
		return this._fields.MarkerName
	}

	public set MarkerName(value: string) {
		this._fields.MarkerName = value
	}

	public get Details(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.Details
	}

	public set Details(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.Details = value
	}

	public get Header(): __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null {
		return this._fields.Header
	}

	public set Header(value: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null) {
		this._fields.Header = value
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
		MarkerName: string
		Details: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		Header: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{MarkerName?: string, Details?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, Header?: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			MarkerName: init?.MarkerName ?? ("" as string),
			Details: init?.Details ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			Header: init?.Header ?? (null! as __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RecordMarkerDecisionAttributes {
		return new RecordMarkerDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: RecordMarkerDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.MarkerName = values.MarkerName
		target.Details = values.Details
		target.Header = values.Header
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_fb529b236ea74dc2, $.arrayToSlice<number>([9])]
	}

	public GetDetails(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<RecordMarkerDecisionAttributes>(m).Details
		}
		return null
	}

	public GetHeader(): __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null {
		const m: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<RecordMarkerDecisionAttributes>(m).Header
		}
		return null
	}

	public GetMarkerName(): string {
		const m: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<RecordMarkerDecisionAttributes>(m).MarkerName
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordMarkerDecisionAttributes).Size() : RecordMarkerDecisionAttributes.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple22: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordMarkerDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RecordMarkerDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple22[0]
		err = __goscriptTuple22[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordMarkerDecisionAttributes).Size() : RecordMarkerDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordMarkerDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RecordMarkerDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null = this;
		const m$: RecordMarkerDecisionAttributes = m == null ? $.pointerTarget<RecordMarkerDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RecordMarkerDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RecordMarkerDecisionAttributes).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RecordMarkerDecisionAttributes).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RecordMarkerDecisionAttributes).XXX_unrecognized)
		}
		if ((m$ as RecordMarkerDecisionAttributes).Header != null) {
			{
				let [size, err] = __goscript_common_pb.Header.prototype.MarshalToSizedBuffer.call((m$ as RecordMarkerDecisionAttributes).Header, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as RecordMarkerDecisionAttributes).Details != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as RecordMarkerDecisionAttributes).Details, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as RecordMarkerDecisionAttributes).MarkerName) > 0) {
			i = i - ($.stringLen((m$ as RecordMarkerDecisionAttributes).MarkerName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RecordMarkerDecisionAttributes).MarkerName)
			i = encodeVarintDecision(dAtA, i, $.uint64($.stringLen((m$ as RecordMarkerDecisionAttributes).MarkerName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null = this;
		$.assignStruct($.pointerValue<RecordMarkerDecisionAttributes>(m), $.markAsStructValue(new RecordMarkerDecisionAttributes()))
	}

	public Size(): number {
		const m: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null = this;
		let n: number = 0
		const m$: RecordMarkerDecisionAttributes = m == null ? $.pointerTarget<RecordMarkerDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RecordMarkerDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as RecordMarkerDecisionAttributes).MarkerName)
		if (l > 0) {
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as RecordMarkerDecisionAttributes).Details != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as RecordMarkerDecisionAttributes).Details)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as RecordMarkerDecisionAttributes).Header != null) {
			l = __goscript_common_pb.Header.prototype.Size.call((m$ as RecordMarkerDecisionAttributes).Header)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as RecordMarkerDecisionAttributes).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RecordMarkerDecisionAttributes).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RecordMarkerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.RecordMarkerDecisionAttributes")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null = this;
		const m$: RecordMarkerDecisionAttributes = m == null ? $.pointerTarget<RecordMarkerDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RecordMarkerDecisionAttributes>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow9 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDecision
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
				return fmt.Errorf("proto: RecordMarkerDecisionAttributes: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RecordMarkerDecisionAttributes: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field MarkerName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RecordMarkerDecisionAttributes).MarkerName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RecordMarkerDecisionAttributes).Details == null) {
						;(m$ as RecordMarkerDecisionAttributes).Details = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as RecordMarkerDecisionAttributes).Details, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Header", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RecordMarkerDecisionAttributes).Header == null) {
						;(m$ as RecordMarkerDecisionAttributes).Header = new __goscript_common_pb.Header()
					}
					{
						let err = __goscript_common_pb.Header.prototype.Unmarshal.call((m$ as RecordMarkerDecisionAttributes).Header, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipDecision($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDecision
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RecordMarkerDecisionAttributes).XXX_unrecognized = $.appendSlice((m$ as RecordMarkerDecisionAttributes).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null = this;
		xxx_messageInfo_RecordMarkerDecisionAttributes.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RecordMarkerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.RecordMarkerDecisionAttributes")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RecordMarkerDecisionAttributes.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RecordMarkerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.RecordMarkerDecisionAttributes")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordMarkerDecisionAttributes).MarshalToSizedBuffer(b) : RecordMarkerDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null = this;
		xxx_messageInfo_RecordMarkerDecisionAttributes.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RecordMarkerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.RecordMarkerDecisionAttributes")), src)
	}

	public XXX_Size(): number {
		const m: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordMarkerDecisionAttributes).Size() : RecordMarkerDecisionAttributes.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RecordMarkerDecisionAttributes | $.VarRef<RecordMarkerDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordMarkerDecisionAttributes).Unmarshal(b) : RecordMarkerDecisionAttributes.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RecordMarkerDecisionAttributes",
		() => new RecordMarkerDecisionAttributes(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDetails", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetHeader", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Header") }], pointerReceiver: true }, { name: "GetMarkerName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RecordMarkerDecisionAttributes,
		() => [{ name: "MarkerName", key: "MarkerName", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=marker_name,json=markerName,proto3\" json:\"marker_name,omitempty\"" }, { name: "Details", key: "Details", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,2,opt,name=details,proto3\" json:\"details,omitempty\"" }, { name: "Header", key: "Header", type: /* @__PURE__ */ $.pointerType("apiv1.Header"), tag: "protobuf:\"bytes,3,opt,name=header,proto3\" json:\"header,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ContinueAsNewWorkflowExecutionDecisionAttributes {
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

	public get BackoffStartInterval(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.BackoffStartInterval
	}

	public set BackoffStartInterval(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.BackoffStartInterval = value
	}

	public get RetryPolicy(): __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null {
		return this._fields.RetryPolicy
	}

	public set RetryPolicy(value: __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null) {
		this._fields.RetryPolicy = value
	}

	public get Initiator(): __goscript_workflow_pb.ContinueAsNewInitiator {
		return this._fields.Initiator
	}

	public set Initiator(value: __goscript_workflow_pb.ContinueAsNewInitiator) {
		this._fields.Initiator = value
	}

	public get Failure(): __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null {
		return this._fields.Failure
	}

	public set Failure(value: __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null) {
		this._fields.Failure = value
	}

	public get LastCompletionResult(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.LastCompletionResult
	}

	public set LastCompletionResult(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.LastCompletionResult = value
	}

	public get CronSchedule(): string {
		return this._fields.CronSchedule
	}

	public set CronSchedule(value: string) {
		this._fields.CronSchedule = value
	}

	public get Header(): __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null {
		return this._fields.Header
	}

	public set Header(value: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null) {
		this._fields.Header = value
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

	public get JitterStart(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.JitterStart
	}

	public set JitterStart(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.JitterStart = value
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
		WorkflowType: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null
		TaskList: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null
		Input: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		ExecutionStartToCloseTimeout: types.Duration | $.VarRef<types.Duration> | null
		TaskStartToCloseTimeout: types.Duration | $.VarRef<types.Duration> | null
		BackoffStartInterval: types.Duration | $.VarRef<types.Duration> | null
		RetryPolicy: __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null
		Initiator: __goscript_workflow_pb.ContinueAsNewInitiator
		Failure: __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null
		LastCompletionResult: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		CronSchedule: string
		Header: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null
		Memo: __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null
		SearchAttributes: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null
		JitterStart: types.Duration | $.VarRef<types.Duration> | null
		CronOverlapPolicy: __goscript_workflow_pb.CronOverlapPolicy
		ActiveClusterSelectionPolicy: __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{WorkflowType?: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null, TaskList?: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null, Input?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, ExecutionStartToCloseTimeout?: types.Duration | $.VarRef<types.Duration> | null, TaskStartToCloseTimeout?: types.Duration | $.VarRef<types.Duration> | null, BackoffStartInterval?: types.Duration | $.VarRef<types.Duration> | null, RetryPolicy?: __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null, Initiator?: __goscript_workflow_pb.ContinueAsNewInitiator, Failure?: __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null, LastCompletionResult?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, CronSchedule?: string, Header?: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null, Memo?: __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null, SearchAttributes?: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null, JitterStart?: types.Duration | $.VarRef<types.Duration> | null, CronOverlapPolicy?: __goscript_workflow_pb.CronOverlapPolicy, ActiveClusterSelectionPolicy?: __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			WorkflowType: init?.WorkflowType ?? (null! as __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null),
			TaskList: init?.TaskList ?? (null! as __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null),
			Input: init?.Input ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			ExecutionStartToCloseTimeout: init?.ExecutionStartToCloseTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			TaskStartToCloseTimeout: init?.TaskStartToCloseTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			BackoffStartInterval: init?.BackoffStartInterval ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			RetryPolicy: init?.RetryPolicy ?? (null! as __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null),
			Initiator: init?.Initiator ?? (0 as __goscript_workflow_pb.ContinueAsNewInitiator),
			Failure: init?.Failure ?? (null! as __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null),
			LastCompletionResult: init?.LastCompletionResult ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			CronSchedule: init?.CronSchedule ?? ("" as string),
			Header: init?.Header ?? (null! as __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null),
			Memo: init?.Memo ?? (null! as __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null),
			SearchAttributes: init?.SearchAttributes ?? (null! as __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null),
			JitterStart: init?.JitterStart ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			CronOverlapPolicy: init?.CronOverlapPolicy ?? (0 as __goscript_workflow_pb.CronOverlapPolicy),
			ActiveClusterSelectionPolicy: init?.ActiveClusterSelectionPolicy ?? (null! as __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ContinueAsNewWorkflowExecutionDecisionAttributes {
		return new ContinueAsNewWorkflowExecutionDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: ContinueAsNewWorkflowExecutionDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.WorkflowType = values.WorkflowType
		target.TaskList = values.TaskList
		target.Input = values.Input
		target.ExecutionStartToCloseTimeout = values.ExecutionStartToCloseTimeout
		target.TaskStartToCloseTimeout = values.TaskStartToCloseTimeout
		target.BackoffStartInterval = values.BackoffStartInterval
		target.RetryPolicy = values.RetryPolicy
		target.Initiator = values.Initiator
		target.Failure = values.Failure
		target.LastCompletionResult = values.LastCompletionResult
		target.CronSchedule = values.CronSchedule
		target.Header = values.Header
		target.Memo = values.Memo
		target.SearchAttributes = values.SearchAttributes
		target.JitterStart = values.JitterStart
		target.CronOverlapPolicy = values.CronOverlapPolicy
		target.ActiveClusterSelectionPolicy = values.ActiveClusterSelectionPolicy
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_fb529b236ea74dc2, $.arrayToSlice<number>([10])]
	}

	public GetActiveClusterSelectionPolicy(): __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m).ActiveClusterSelectionPolicy
		}
		return null
	}

	public GetBackoffStartInterval(): types.Duration | $.VarRef<types.Duration> | null {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m).BackoffStartInterval
		}
		return null
	}

	public GetCronOverlapPolicy(): __goscript_workflow_pb.CronOverlapPolicy {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m).CronOverlapPolicy
		}
		return 0
	}

	public GetCronSchedule(): string {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m).CronSchedule
		}
		return ""
	}

	public GetExecutionStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m).ExecutionStartToCloseTimeout
		}
		return null
	}

	public GetFailure(): __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m).Failure
		}
		return null
	}

	public GetHeader(): __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m).Header
		}
		return null
	}

	public GetInitiator(): __goscript_workflow_pb.ContinueAsNewInitiator {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m).Initiator
		}
		return 0
	}

	public GetInput(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m).Input
		}
		return null
	}

	public GetJitterStart(): types.Duration | $.VarRef<types.Duration> | null {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m).JitterStart
		}
		return null
	}

	public GetLastCompletionResult(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m).LastCompletionResult
		}
		return null
	}

	public GetMemo(): __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m).Memo
		}
		return null
	}

	public GetRetryPolicy(): __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m).RetryPolicy
		}
		return null
	}

	public GetSearchAttributes(): __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m).SearchAttributes
		}
		return null
	}

	public GetTaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m).TaskList
		}
		return null
	}

	public GetTaskStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m).TaskStartToCloseTimeout
		}
		return null
	}

	public GetWorkflowType(): __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m).WorkflowType
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ContinueAsNewWorkflowExecutionDecisionAttributes).Size() : ContinueAsNewWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple23: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ContinueAsNewWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ContinueAsNewWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple23[0]
		err = __goscriptTuple23[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ContinueAsNewWorkflowExecutionDecisionAttributes).Size() : ContinueAsNewWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ContinueAsNewWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ContinueAsNewWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		const m$: ContinueAsNewWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<ContinueAsNewWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ContinueAsNewWorkflowExecutionDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).XXX_unrecognized)
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).ActiveClusterSelectionPolicy != null) {
			{
				let [size, err] = __goscript_common_pb.ActiveClusterSelectionPolicy.prototype.MarshalToSizedBuffer.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).ActiveClusterSelectionPolicy, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8a
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).CronOverlapPolicy != 0) {
			i = encodeVarintDecision(dAtA, i, $.uint64((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).CronOverlapPolicy))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x80
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).JitterStart != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).JitterStart, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x7a
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).SearchAttributes != null) {
			{
				let [size, err] = __goscript_common_pb.SearchAttributes.prototype.MarshalToSizedBuffer.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).SearchAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x72
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Memo != null) {
			{
				let [size, err] = __goscript_common_pb.Memo.prototype.MarshalToSizedBuffer.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Memo, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x6a
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Header != null) {
			{
				let [size, err] = __goscript_common_pb.Header.prototype.MarshalToSizedBuffer.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Header, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x62
		}
		if ($.stringLen((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).CronSchedule) > 0) {
			i = i - ($.stringLen((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).CronSchedule))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).CronSchedule)
			i = encodeVarintDecision(dAtA, i, $.uint64($.stringLen((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).CronSchedule)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x5a
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).LastCompletionResult != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).LastCompletionResult, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x52
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Failure != null) {
			{
				let [size, err] = __goscript_common_pb.Failure.prototype.MarshalToSizedBuffer.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Failure, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x4a
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Initiator != 0) {
			i = encodeVarintDecision(dAtA, i, $.uint64((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Initiator))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x40
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).RetryPolicy != null) {
			{
				let [size, err] = __goscript_common_pb.RetryPolicy.prototype.MarshalToSizedBuffer.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).RetryPolicy, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x3a
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).BackoffStartInterval != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).BackoffStartInterval, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).TaskStartToCloseTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).TaskStartToCloseTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).ExecutionStartToCloseTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).ExecutionStartToCloseTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Input != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Input, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).TaskList != null) {
			{
				let [size, err] = __goscript_tasklist_pb.TaskList.prototype.MarshalToSizedBuffer.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).TaskList, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).WorkflowType != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowType.prototype.MarshalToSizedBuffer.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).WorkflowType, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		$.assignStruct($.pointerValue<ContinueAsNewWorkflowExecutionDecisionAttributes>(m), $.markAsStructValue(new ContinueAsNewWorkflowExecutionDecisionAttributes()))
	}

	public Size(): number {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		let n: number = 0
		const m$: ContinueAsNewWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<ContinueAsNewWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ContinueAsNewWorkflowExecutionDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).WorkflowType != null) {
			l = __goscript_common_pb.WorkflowType.prototype.Size.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).WorkflowType)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).TaskList != null) {
			l = __goscript_tasklist_pb.TaskList.prototype.Size.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).TaskList)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Input != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Input)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).ExecutionStartToCloseTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).ExecutionStartToCloseTimeout)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).TaskStartToCloseTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).TaskStartToCloseTimeout)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).BackoffStartInterval != null) {
			l = types.Duration.prototype.Size.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).BackoffStartInterval)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).RetryPolicy != null) {
			l = __goscript_common_pb.RetryPolicy.prototype.Size.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).RetryPolicy)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Initiator != 0) {
			n = n + (1 + sovDecision($.uint64((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Initiator)))
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Failure != null) {
			l = __goscript_common_pb.Failure.prototype.Size.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Failure)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).LastCompletionResult != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).LastCompletionResult)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		l = $.stringLen((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).CronSchedule)
		if (l > 0) {
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Header != null) {
			l = __goscript_common_pb.Header.prototype.Size.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Header)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Memo != null) {
			l = __goscript_common_pb.Memo.prototype.Size.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Memo)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).SearchAttributes != null) {
			l = __goscript_common_pb.SearchAttributes.prototype.Size.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).SearchAttributes)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).JitterStart != null) {
			l = types.Duration.prototype.Size.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).JitterStart)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).CronOverlapPolicy != 0) {
			n = n + (2 + sovDecision($.uint64((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).CronOverlapPolicy)))
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).ActiveClusterSelectionPolicy != null) {
			l = __goscript_common_pb.ActiveClusterSelectionPolicy.prototype.Size.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).ActiveClusterSelectionPolicy)
			n = n + ((2 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		const m$: ContinueAsNewWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<ContinueAsNewWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ContinueAsNewWorkflowExecutionDecisionAttributes>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow10 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDecision
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
				return fmt.Errorf("proto: ContinueAsNewWorkflowExecutionDecisionAttributes: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ContinueAsNewWorkflowExecutionDecisionAttributes: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).WorkflowType == null) {
						;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).WorkflowType = new __goscript_common_pb.WorkflowType()
					}
					{
						let err = __goscript_common_pb.WorkflowType.prototype.Unmarshal.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).WorkflowType, $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).TaskList == null) {
						;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).TaskList = new __goscript_tasklist_pb.TaskList()
					}
					{
						let err = __goscript_tasklist_pb.TaskList.prototype.Unmarshal.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).TaskList, $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Input == null) {
						;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Input = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Input, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field ExecutionStartToCloseTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).ExecutionStartToCloseTimeout == null) {
						;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).ExecutionStartToCloseTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).ExecutionStartToCloseTimeout, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field TaskStartToCloseTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).TaskStartToCloseTimeout == null) {
						;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).TaskStartToCloseTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).TaskStartToCloseTimeout, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field BackoffStartInterval", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).BackoffStartInterval == null) {
						;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).BackoffStartInterval = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).BackoffStartInterval, $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).RetryPolicy == null) {
						;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).RetryPolicy = new __goscript_common_pb.RetryPolicy()
					}
					{
						let err = __goscript_common_pb.RetryPolicy.prototype.Unmarshal.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).RetryPolicy, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 8:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Initiator", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Initiator = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++;
						;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Initiator = (m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Initiator | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 9:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Failure", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Failure == null) {
						;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Failure = new __goscript_common_pb.Failure()
					}
					{
						let err = __goscript_common_pb.Failure.prototype.Unmarshal.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Failure, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field LastCompletionResult", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).LastCompletionResult == null) {
						;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).LastCompletionResult = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).LastCompletionResult, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field CronSchedule", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).CronSchedule = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 12:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Header", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Header == null) {
						;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Header = new __goscript_common_pb.Header()
					}
					{
						let err = __goscript_common_pb.Header.prototype.Unmarshal.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Header, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Memo", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Memo == null) {
						;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Memo = new __goscript_common_pb.Memo()
					}
					{
						let err = __goscript_common_pb.Memo.prototype.Unmarshal.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).Memo, $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).SearchAttributes == null) {
						;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).SearchAttributes = new __goscript_common_pb.SearchAttributes()
					}
					{
						let err = __goscript_common_pb.SearchAttributes.prototype.Unmarshal.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).SearchAttributes, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field JitterStart", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).JitterStart == null) {
						;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).JitterStart = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).JitterStart, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 16:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field CronOverlapPolicy", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).CronOverlapPolicy = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++;
						;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).CronOverlapPolicy = (m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).CronOverlapPolicy | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 17:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveClusterSelectionPolicy", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).ActiveClusterSelectionPolicy == null) {
						;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).ActiveClusterSelectionPolicy = new __goscript_common_pb.ActiveClusterSelectionPolicy()
					}
					{
						let err = __goscript_common_pb.ActiveClusterSelectionPolicy.prototype.Unmarshal.call((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).ActiveClusterSelectionPolicy, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipDecision($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDecision
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).XXX_unrecognized = $.appendSlice((m$ as ContinueAsNewWorkflowExecutionDecisionAttributes).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		xxx_messageInfo_ContinueAsNewWorkflowExecutionDecisionAttributes.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ContinueAsNewWorkflowExecutionDecisionAttributes.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ContinueAsNewWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer(b) : ContinueAsNewWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		xxx_messageInfo_ContinueAsNewWorkflowExecutionDecisionAttributes.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes")), src)
	}

	public XXX_Size(): number {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ContinueAsNewWorkflowExecutionDecisionAttributes).Size() : ContinueAsNewWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<ContinueAsNewWorkflowExecutionDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ContinueAsNewWorkflowExecutionDecisionAttributes).Unmarshal(b) : ContinueAsNewWorkflowExecutionDecisionAttributes.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes",
		() => new ContinueAsNewWorkflowExecutionDecisionAttributes(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActiveClusterSelectionPolicy", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterSelectionPolicy") }], pointerReceiver: true }, { name: "GetBackoffStartInterval", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetCronOverlapPolicy", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.CronOverlapPolicy") }], pointerReceiver: true }, { name: "GetCronSchedule", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetExecutionStartToCloseTimeout", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetFailure", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Failure") }], pointerReceiver: true }, { name: "GetHeader", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Header") }], pointerReceiver: true }, { name: "GetInitiator", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.ContinueAsNewInitiator") }], pointerReceiver: true }, { name: "GetInput", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetJitterStart", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetLastCompletionResult", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetMemo", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Memo") }], pointerReceiver: true }, { name: "GetRetryPolicy", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RetryPolicy") }], pointerReceiver: true }, { name: "GetSearchAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes") }], pointerReceiver: true }, { name: "GetTaskList", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.TaskList") }], pointerReceiver: true }, { name: "GetTaskStartToCloseTimeout", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetWorkflowType", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowType") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ContinueAsNewWorkflowExecutionDecisionAttributes,
		() => [{ name: "WorkflowType", key: "WorkflowType", type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowType"), tag: "protobuf:\"bytes,1,opt,name=workflow_type,json=workflowType,proto3\" json:\"workflow_type,omitempty\"" }, { name: "TaskList", key: "TaskList", type: /* @__PURE__ */ $.pointerType("apiv1.TaskList"), tag: "protobuf:\"bytes,2,opt,name=task_list,json=taskList,proto3\" json:\"task_list,omitempty\"" }, { name: "Input", key: "Input", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,3,opt,name=input,proto3\" json:\"input,omitempty\"" }, { name: "ExecutionStartToCloseTimeout", key: "ExecutionStartToCloseTimeout", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,4,opt,name=execution_start_to_close_timeout,json=executionStartToCloseTimeout,proto3\" json:\"execution_start_to_close_timeout,omitempty\"" }, { name: "TaskStartToCloseTimeout", key: "TaskStartToCloseTimeout", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,5,opt,name=task_start_to_close_timeout,json=taskStartToCloseTimeout,proto3\" json:\"task_start_to_close_timeout,omitempty\"" }, { name: "BackoffStartInterval", key: "BackoffStartInterval", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,6,opt,name=backoff_start_interval,json=backoffStartInterval,proto3\" json:\"backoff_start_interval,omitempty\"" }, { name: "RetryPolicy", key: "RetryPolicy", type: /* @__PURE__ */ $.pointerType("apiv1.RetryPolicy"), tag: "protobuf:\"bytes,7,opt,name=retry_policy,json=retryPolicy,proto3\" json:\"retry_policy,omitempty\"" }, { name: "Initiator", key: "Initiator", type: /* @__PURE__ */ $.basicType("int32", "apiv1.ContinueAsNewInitiator"), tag: "protobuf:\"varint,8,opt,name=initiator,proto3,enum=uber.cadence.api.v1.ContinueAsNewInitiator\" json:\"initiator,omitempty\"" }, { name: "Failure", key: "Failure", type: /* @__PURE__ */ $.pointerType("apiv1.Failure"), tag: "protobuf:\"bytes,9,opt,name=failure,proto3\" json:\"failure,omitempty\"" }, { name: "LastCompletionResult", key: "LastCompletionResult", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,10,opt,name=last_completion_result,json=lastCompletionResult,proto3\" json:\"last_completion_result,omitempty\"" }, { name: "CronSchedule", key: "CronSchedule", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,11,opt,name=cron_schedule,json=cronSchedule,proto3\" json:\"cron_schedule,omitempty\"" }, { name: "Header", key: "Header", type: /* @__PURE__ */ $.pointerType("apiv1.Header"), tag: "protobuf:\"bytes,12,opt,name=header,proto3\" json:\"header,omitempty\"" }, { name: "Memo", key: "Memo", type: /* @__PURE__ */ $.pointerType("apiv1.Memo"), tag: "protobuf:\"bytes,13,opt,name=memo,proto3\" json:\"memo,omitempty\"" }, { name: "SearchAttributes", key: "SearchAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes"), tag: "protobuf:\"bytes,14,opt,name=search_attributes,json=searchAttributes,proto3\" json:\"search_attributes,omitempty\"" }, { name: "JitterStart", key: "JitterStart", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,15,opt,name=jitter_start,json=jitterStart,proto3\" json:\"jitter_start,omitempty\"" }, { name: "CronOverlapPolicy", key: "CronOverlapPolicy", type: /* @__PURE__ */ $.basicType("int32", "apiv1.CronOverlapPolicy"), tag: "protobuf:\"varint,16,opt,name=cron_overlap_policy,json=cronOverlapPolicy,proto3,enum=uber.cadence.api.v1.CronOverlapPolicy\" json:\"cron_overlap_policy,omitempty\"" }, { name: "ActiveClusterSelectionPolicy", key: "ActiveClusterSelectionPolicy", type: /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterSelectionPolicy"), tag: "protobuf:\"bytes,17,opt,name=active_cluster_selection_policy,json=activeClusterSelectionPolicy,proto3\" json:\"active_cluster_selection_policy,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class StartChildWorkflowExecutionDecisionAttributes {
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

	public get ParentClosePolicy(): __goscript_workflow_pb.ParentClosePolicy {
		return this._fields.ParentClosePolicy
	}

	public set ParentClosePolicy(value: __goscript_workflow_pb.ParentClosePolicy) {
		this._fields.ParentClosePolicy = value
	}

	public get Control(): $.Slice<number> {
		return this._fields.Control
	}

	public set Control(value: $.Slice<number>) {
		this._fields.Control = value
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

	public get Header(): __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null {
		return this._fields.Header
	}

	public set Header(value: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null) {
		this._fields.Header = value
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
		ParentClosePolicy: __goscript_workflow_pb.ParentClosePolicy
		Control: $.Slice<number>
		WorkflowIdReusePolicy: __goscript_workflow_pb.WorkflowIdReusePolicy
		RetryPolicy: __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null
		CronSchedule: string
		Header: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null
		Memo: __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null
		SearchAttributes: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null
		CronOverlapPolicy: __goscript_workflow_pb.CronOverlapPolicy
		ActiveClusterSelectionPolicy: __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowId?: string, WorkflowType?: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null, TaskList?: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null, Input?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, ExecutionStartToCloseTimeout?: types.Duration | $.VarRef<types.Duration> | null, TaskStartToCloseTimeout?: types.Duration | $.VarRef<types.Duration> | null, ParentClosePolicy?: __goscript_workflow_pb.ParentClosePolicy, Control?: $.Slice<number>, WorkflowIdReusePolicy?: __goscript_workflow_pb.WorkflowIdReusePolicy, RetryPolicy?: __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null, CronSchedule?: string, Header?: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null, Memo?: __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null, SearchAttributes?: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null, CronOverlapPolicy?: __goscript_workflow_pb.CronOverlapPolicy, ActiveClusterSelectionPolicy?: __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowId: init?.WorkflowId ?? ("" as string),
			WorkflowType: init?.WorkflowType ?? (null! as __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null),
			TaskList: init?.TaskList ?? (null! as __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null),
			Input: init?.Input ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			ExecutionStartToCloseTimeout: init?.ExecutionStartToCloseTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			TaskStartToCloseTimeout: init?.TaskStartToCloseTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			ParentClosePolicy: init?.ParentClosePolicy ?? (0 as __goscript_workflow_pb.ParentClosePolicy),
			Control: init?.Control ?? (null! as $.Slice<number>),
			WorkflowIdReusePolicy: init?.WorkflowIdReusePolicy ?? (0 as __goscript_workflow_pb.WorkflowIdReusePolicy),
			RetryPolicy: init?.RetryPolicy ?? (null! as __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null),
			CronSchedule: init?.CronSchedule ?? ("" as string),
			Header: init?.Header ?? (null! as __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null),
			Memo: init?.Memo ?? (null! as __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null),
			SearchAttributes: init?.SearchAttributes ?? (null! as __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null),
			CronOverlapPolicy: init?.CronOverlapPolicy ?? (0 as __goscript_workflow_pb.CronOverlapPolicy),
			ActiveClusterSelectionPolicy: init?.ActiveClusterSelectionPolicy ?? (null! as __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StartChildWorkflowExecutionDecisionAttributes {
		return new StartChildWorkflowExecutionDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: StartChildWorkflowExecutionDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowId = values.WorkflowId
		target.WorkflowType = values.WorkflowType
		target.TaskList = values.TaskList
		target.Input = values.Input
		target.ExecutionStartToCloseTimeout = values.ExecutionStartToCloseTimeout
		target.TaskStartToCloseTimeout = values.TaskStartToCloseTimeout
		target.ParentClosePolicy = values.ParentClosePolicy
		target.Control = values.Control
		target.WorkflowIdReusePolicy = values.WorkflowIdReusePolicy
		target.RetryPolicy = values.RetryPolicy
		target.CronSchedule = values.CronSchedule
		target.Header = values.Header
		target.Memo = values.Memo
		target.SearchAttributes = values.SearchAttributes
		target.CronOverlapPolicy = values.CronOverlapPolicy
		target.ActiveClusterSelectionPolicy = values.ActiveClusterSelectionPolicy
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_fb529b236ea74dc2, $.arrayToSlice<number>([11])]
	}

	public GetActiveClusterSelectionPolicy(): __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m).ActiveClusterSelectionPolicy
		}
		return null
	}

	public GetControl(): $.Slice<number> {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m).Control
		}
		return null
	}

	public GetCronOverlapPolicy(): __goscript_workflow_pb.CronOverlapPolicy {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m).CronOverlapPolicy
		}
		return 0
	}

	public GetCronSchedule(): string {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m).CronSchedule
		}
		return ""
	}

	public GetDomain(): string {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m).Domain
		}
		return ""
	}

	public GetExecutionStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m).ExecutionStartToCloseTimeout
		}
		return null
	}

	public GetHeader(): __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m).Header
		}
		return null
	}

	public GetInput(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m).Input
		}
		return null
	}

	public GetMemo(): __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m).Memo
		}
		return null
	}

	public GetParentClosePolicy(): __goscript_workflow_pb.ParentClosePolicy {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m).ParentClosePolicy
		}
		return 0
	}

	public GetRetryPolicy(): __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m).RetryPolicy
		}
		return null
	}

	public GetSearchAttributes(): __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m).SearchAttributes
		}
		return null
	}

	public GetTaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m).TaskList
		}
		return null
	}

	public GetTaskStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m).TaskStartToCloseTimeout
		}
		return null
	}

	public GetWorkflowId(): string {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m).WorkflowId
		}
		return ""
	}

	public GetWorkflowIdReusePolicy(): __goscript_workflow_pb.WorkflowIdReusePolicy {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m).WorkflowIdReusePolicy
		}
		return 0
	}

	public GetWorkflowType(): __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m).WorkflowType
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartChildWorkflowExecutionDecisionAttributes).Size() : StartChildWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple24: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartChildWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StartChildWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple24[0]
		err = __goscriptTuple24[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartChildWorkflowExecutionDecisionAttributes).Size() : StartChildWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartChildWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StartChildWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		const m$: StartChildWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<StartChildWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartChildWorkflowExecutionDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as StartChildWorkflowExecutionDecisionAttributes).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartChildWorkflowExecutionDecisionAttributes).XXX_unrecognized)
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).ActiveClusterSelectionPolicy != null) {
			{
				let [size, err] = __goscript_common_pb.ActiveClusterSelectionPolicy.prototype.MarshalToSizedBuffer.call((m$ as StartChildWorkflowExecutionDecisionAttributes).ActiveClusterSelectionPolicy, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8a
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).CronOverlapPolicy != 0) {
			i = encodeVarintDecision(dAtA, i, $.uint64((m$ as StartChildWorkflowExecutionDecisionAttributes).CronOverlapPolicy))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x80
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).SearchAttributes != null) {
			{
				let [size, err] = __goscript_common_pb.SearchAttributes.prototype.MarshalToSizedBuffer.call((m$ as StartChildWorkflowExecutionDecisionAttributes).SearchAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x7a
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).Memo != null) {
			{
				let [size, err] = __goscript_common_pb.Memo.prototype.MarshalToSizedBuffer.call((m$ as StartChildWorkflowExecutionDecisionAttributes).Memo, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x72
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).Header != null) {
			{
				let [size, err] = __goscript_common_pb.Header.prototype.MarshalToSizedBuffer.call((m$ as StartChildWorkflowExecutionDecisionAttributes).Header, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x6a
		}
		if ($.stringLen((m$ as StartChildWorkflowExecutionDecisionAttributes).CronSchedule) > 0) {
			i = i - ($.stringLen((m$ as StartChildWorkflowExecutionDecisionAttributes).CronSchedule))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartChildWorkflowExecutionDecisionAttributes).CronSchedule)
			i = encodeVarintDecision(dAtA, i, $.uint64($.stringLen((m$ as StartChildWorkflowExecutionDecisionAttributes).CronSchedule)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x62
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).RetryPolicy != null) {
			{
				let [size, err] = __goscript_common_pb.RetryPolicy.prototype.MarshalToSizedBuffer.call((m$ as StartChildWorkflowExecutionDecisionAttributes).RetryPolicy, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x5a
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowIdReusePolicy != 0) {
			i = encodeVarintDecision(dAtA, i, $.uint64((m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowIdReusePolicy))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x50
		}
		if ($.sliceLen((m$ as StartChildWorkflowExecutionDecisionAttributes).Control) > 0) {
			i = i - ($.sliceLen((m$ as StartChildWorkflowExecutionDecisionAttributes).Control))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartChildWorkflowExecutionDecisionAttributes).Control)
			i = encodeVarintDecision(dAtA, i, $.uint64($.sliceLen((m$ as StartChildWorkflowExecutionDecisionAttributes).Control)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x4a
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).ParentClosePolicy != 0) {
			i = encodeVarintDecision(dAtA, i, $.uint64((m$ as StartChildWorkflowExecutionDecisionAttributes).ParentClosePolicy))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x40
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).TaskStartToCloseTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as StartChildWorkflowExecutionDecisionAttributes).TaskStartToCloseTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x3a
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).ExecutionStartToCloseTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as StartChildWorkflowExecutionDecisionAttributes).ExecutionStartToCloseTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).Input != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as StartChildWorkflowExecutionDecisionAttributes).Input, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).TaskList != null) {
			{
				let [size, err] = __goscript_tasklist_pb.TaskList.prototype.MarshalToSizedBuffer.call((m$ as StartChildWorkflowExecutionDecisionAttributes).TaskList, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowType != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowType.prototype.MarshalToSizedBuffer.call((m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowType, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.stringLen((m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowId) > 0) {
			i = i - ($.stringLen((m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowId)
			i = encodeVarintDecision(dAtA, i, $.uint64($.stringLen((m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as StartChildWorkflowExecutionDecisionAttributes).Domain) > 0) {
			i = i - ($.stringLen((m$ as StartChildWorkflowExecutionDecisionAttributes).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartChildWorkflowExecutionDecisionAttributes).Domain)
			i = encodeVarintDecision(dAtA, i, $.uint64($.stringLen((m$ as StartChildWorkflowExecutionDecisionAttributes).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		$.assignStruct($.pointerValue<StartChildWorkflowExecutionDecisionAttributes>(m), $.markAsStructValue(new StartChildWorkflowExecutionDecisionAttributes()))
	}

	public Size(): number {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		let n: number = 0
		const m$: StartChildWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<StartChildWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartChildWorkflowExecutionDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as StartChildWorkflowExecutionDecisionAttributes).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		l = $.stringLen((m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowId)
		if (l > 0) {
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowType != null) {
			l = __goscript_common_pb.WorkflowType.prototype.Size.call((m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowType)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).TaskList != null) {
			l = __goscript_tasklist_pb.TaskList.prototype.Size.call((m$ as StartChildWorkflowExecutionDecisionAttributes).TaskList)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).Input != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as StartChildWorkflowExecutionDecisionAttributes).Input)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).ExecutionStartToCloseTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as StartChildWorkflowExecutionDecisionAttributes).ExecutionStartToCloseTimeout)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).TaskStartToCloseTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as StartChildWorkflowExecutionDecisionAttributes).TaskStartToCloseTimeout)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).ParentClosePolicy != 0) {
			n = n + (1 + sovDecision($.uint64((m$ as StartChildWorkflowExecutionDecisionAttributes).ParentClosePolicy)))
		}
		l = $.sliceLen((m$ as StartChildWorkflowExecutionDecisionAttributes).Control)
		if (l > 0) {
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowIdReusePolicy != 0) {
			n = n + (1 + sovDecision($.uint64((m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowIdReusePolicy)))
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).RetryPolicy != null) {
			l = __goscript_common_pb.RetryPolicy.prototype.Size.call((m$ as StartChildWorkflowExecutionDecisionAttributes).RetryPolicy)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		l = $.stringLen((m$ as StartChildWorkflowExecutionDecisionAttributes).CronSchedule)
		if (l > 0) {
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).Header != null) {
			l = __goscript_common_pb.Header.prototype.Size.call((m$ as StartChildWorkflowExecutionDecisionAttributes).Header)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).Memo != null) {
			l = __goscript_common_pb.Memo.prototype.Size.call((m$ as StartChildWorkflowExecutionDecisionAttributes).Memo)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).SearchAttributes != null) {
			l = __goscript_common_pb.SearchAttributes.prototype.Size.call((m$ as StartChildWorkflowExecutionDecisionAttributes).SearchAttributes)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).CronOverlapPolicy != 0) {
			n = n + (2 + sovDecision($.uint64((m$ as StartChildWorkflowExecutionDecisionAttributes).CronOverlapPolicy)))
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).ActiveClusterSelectionPolicy != null) {
			l = __goscript_common_pb.ActiveClusterSelectionPolicy.prototype.Size.call((m$ as StartChildWorkflowExecutionDecisionAttributes).ActiveClusterSelectionPolicy)
			n = n + ((2 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as StartChildWorkflowExecutionDecisionAttributes).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as StartChildWorkflowExecutionDecisionAttributes).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.StartChildWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.StartChildWorkflowExecutionDecisionAttributes")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		const m$: StartChildWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<StartChildWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartChildWorkflowExecutionDecisionAttributes>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow11 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDecision
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
				return fmt.Errorf("proto: StartChildWorkflowExecutionDecisionAttributes: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: StartChildWorkflowExecutionDecisionAttributes: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartChildWorkflowExecutionDecisionAttributes).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowType == null) {
						;(m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowType = new __goscript_common_pb.WorkflowType()
					}
					{
						let err = __goscript_common_pb.WorkflowType.prototype.Unmarshal.call((m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowType, $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartChildWorkflowExecutionDecisionAttributes).TaskList == null) {
						;(m$ as StartChildWorkflowExecutionDecisionAttributes).TaskList = new __goscript_tasklist_pb.TaskList()
					}
					{
						let err = __goscript_tasklist_pb.TaskList.prototype.Unmarshal.call((m$ as StartChildWorkflowExecutionDecisionAttributes).TaskList, $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartChildWorkflowExecutionDecisionAttributes).Input == null) {
						;(m$ as StartChildWorkflowExecutionDecisionAttributes).Input = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as StartChildWorkflowExecutionDecisionAttributes).Input, $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartChildWorkflowExecutionDecisionAttributes).ExecutionStartToCloseTimeout == null) {
						;(m$ as StartChildWorkflowExecutionDecisionAttributes).ExecutionStartToCloseTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as StartChildWorkflowExecutionDecisionAttributes).ExecutionStartToCloseTimeout, $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartChildWorkflowExecutionDecisionAttributes).TaskStartToCloseTimeout == null) {
						;(m$ as StartChildWorkflowExecutionDecisionAttributes).TaskStartToCloseTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as StartChildWorkflowExecutionDecisionAttributes).TaskStartToCloseTimeout, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 8:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field ParentClosePolicy", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as StartChildWorkflowExecutionDecisionAttributes).ParentClosePolicy = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
						iNdEx++;
						;(m$ as StartChildWorkflowExecutionDecisionAttributes).ParentClosePolicy = (m$ as StartChildWorkflowExecutionDecisionAttributes).ParentClosePolicy | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 9:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Control", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartChildWorkflowExecutionDecisionAttributes).Control = $.appendSlice($.goSlice((m$ as StartChildWorkflowExecutionDecisionAttributes).Control, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as StartChildWorkflowExecutionDecisionAttributes).Control == null) {
						;(m$ as StartChildWorkflowExecutionDecisionAttributes).Control = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 10:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowIdReusePolicy", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowIdReusePolicy = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
						iNdEx++;
						;(m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowIdReusePolicy = (m$ as StartChildWorkflowExecutionDecisionAttributes).WorkflowIdReusePolicy | ($.int($.int(b & 0x7F, 32) << shift, 32))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartChildWorkflowExecutionDecisionAttributes).RetryPolicy == null) {
						;(m$ as StartChildWorkflowExecutionDecisionAttributes).RetryPolicy = new __goscript_common_pb.RetryPolicy()
					}
					{
						let err = __goscript_common_pb.RetryPolicy.prototype.Unmarshal.call((m$ as StartChildWorkflowExecutionDecisionAttributes).RetryPolicy, $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartChildWorkflowExecutionDecisionAttributes).CronSchedule = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 13:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Header", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartChildWorkflowExecutionDecisionAttributes).Header == null) {
						;(m$ as StartChildWorkflowExecutionDecisionAttributes).Header = new __goscript_common_pb.Header()
					}
					{
						let err = __goscript_common_pb.Header.prototype.Unmarshal.call((m$ as StartChildWorkflowExecutionDecisionAttributes).Header, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Memo", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartChildWorkflowExecutionDecisionAttributes).Memo == null) {
						;(m$ as StartChildWorkflowExecutionDecisionAttributes).Memo = new __goscript_common_pb.Memo()
					}
					{
						let err = __goscript_common_pb.Memo.prototype.Unmarshal.call((m$ as StartChildWorkflowExecutionDecisionAttributes).Memo, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field SearchAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartChildWorkflowExecutionDecisionAttributes).SearchAttributes == null) {
						;(m$ as StartChildWorkflowExecutionDecisionAttributes).SearchAttributes = new __goscript_common_pb.SearchAttributes()
					}
					{
						let err = __goscript_common_pb.SearchAttributes.prototype.Unmarshal.call((m$ as StartChildWorkflowExecutionDecisionAttributes).SearchAttributes, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 16:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field CronOverlapPolicy", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as StartChildWorkflowExecutionDecisionAttributes).CronOverlapPolicy = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
						iNdEx++;
						;(m$ as StartChildWorkflowExecutionDecisionAttributes).CronOverlapPolicy = (m$ as StartChildWorkflowExecutionDecisionAttributes).CronOverlapPolicy | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 17:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveClusterSelectionPolicy", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartChildWorkflowExecutionDecisionAttributes).ActiveClusterSelectionPolicy == null) {
						;(m$ as StartChildWorkflowExecutionDecisionAttributes).ActiveClusterSelectionPolicy = new __goscript_common_pb.ActiveClusterSelectionPolicy()
					}
					{
						let err = __goscript_common_pb.ActiveClusterSelectionPolicy.prototype.Unmarshal.call((m$ as StartChildWorkflowExecutionDecisionAttributes).ActiveClusterSelectionPolicy, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipDecision($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDecision
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartChildWorkflowExecutionDecisionAttributes).XXX_unrecognized = $.appendSlice((m$ as StartChildWorkflowExecutionDecisionAttributes).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		xxx_messageInfo_StartChildWorkflowExecutionDecisionAttributes.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.StartChildWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.StartChildWorkflowExecutionDecisionAttributes")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		if (deterministic) {
			return xxx_messageInfo_StartChildWorkflowExecutionDecisionAttributes.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.StartChildWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.StartChildWorkflowExecutionDecisionAttributes")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartChildWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer(b) : StartChildWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		xxx_messageInfo_StartChildWorkflowExecutionDecisionAttributes.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.StartChildWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.StartChildWorkflowExecutionDecisionAttributes")), src)
	}

	public XXX_Size(): number {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartChildWorkflowExecutionDecisionAttributes).Size() : StartChildWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: StartChildWorkflowExecutionDecisionAttributes | $.VarRef<StartChildWorkflowExecutionDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartChildWorkflowExecutionDecisionAttributes).Unmarshal(b) : StartChildWorkflowExecutionDecisionAttributes.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.StartChildWorkflowExecutionDecisionAttributes",
		() => new StartChildWorkflowExecutionDecisionAttributes(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActiveClusterSelectionPolicy", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterSelectionPolicy") }], pointerReceiver: true }, { name: "GetControl", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "GetCronOverlapPolicy", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.CronOverlapPolicy") }], pointerReceiver: true }, { name: "GetCronSchedule", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetExecutionStartToCloseTimeout", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetHeader", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Header") }], pointerReceiver: true }, { name: "GetInput", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetMemo", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Memo") }], pointerReceiver: true }, { name: "GetParentClosePolicy", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.ParentClosePolicy") }], pointerReceiver: true }, { name: "GetRetryPolicy", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RetryPolicy") }], pointerReceiver: true }, { name: "GetSearchAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes") }], pointerReceiver: true }, { name: "GetTaskList", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.TaskList") }], pointerReceiver: true }, { name: "GetTaskStartToCloseTimeout", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetWorkflowId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetWorkflowIdReusePolicy", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.WorkflowIdReusePolicy") }], pointerReceiver: true }, { name: "GetWorkflowType", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowType") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		StartChildWorkflowExecutionDecisionAttributes,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "WorkflowId", key: "WorkflowId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=workflow_id,json=workflowId,proto3\" json:\"workflow_id,omitempty\"" }, { name: "WorkflowType", key: "WorkflowType", type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowType"), tag: "protobuf:\"bytes,3,opt,name=workflow_type,json=workflowType,proto3\" json:\"workflow_type,omitempty\"" }, { name: "TaskList", key: "TaskList", type: /* @__PURE__ */ $.pointerType("apiv1.TaskList"), tag: "protobuf:\"bytes,4,opt,name=task_list,json=taskList,proto3\" json:\"task_list,omitempty\"" }, { name: "Input", key: "Input", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,5,opt,name=input,proto3\" json:\"input,omitempty\"" }, { name: "ExecutionStartToCloseTimeout", key: "ExecutionStartToCloseTimeout", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,6,opt,name=execution_start_to_close_timeout,json=executionStartToCloseTimeout,proto3\" json:\"execution_start_to_close_timeout,omitempty\"" }, { name: "TaskStartToCloseTimeout", key: "TaskStartToCloseTimeout", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,7,opt,name=task_start_to_close_timeout,json=taskStartToCloseTimeout,proto3\" json:\"task_start_to_close_timeout,omitempty\"" }, { name: "ParentClosePolicy", key: "ParentClosePolicy", type: /* @__PURE__ */ $.basicType("int32", "apiv1.ParentClosePolicy"), tag: "protobuf:\"varint,8,opt,name=parent_close_policy,json=parentClosePolicy,proto3,enum=uber.cadence.api.v1.ParentClosePolicy\" json:\"parent_close_policy,omitempty\"" }, { name: "Control", key: "Control", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,9,opt,name=control,proto3\" json:\"control,omitempty\"" }, { name: "WorkflowIdReusePolicy", key: "WorkflowIdReusePolicy", type: /* @__PURE__ */ $.basicType("int32", "apiv1.WorkflowIdReusePolicy"), tag: "protobuf:\"varint,10,opt,name=workflow_id_reuse_policy,json=workflowIdReusePolicy,proto3,enum=uber.cadence.api.v1.WorkflowIdReusePolicy\" json:\"workflow_id_reuse_policy,omitempty\"" }, { name: "RetryPolicy", key: "RetryPolicy", type: /* @__PURE__ */ $.pointerType("apiv1.RetryPolicy"), tag: "protobuf:\"bytes,11,opt,name=retry_policy,json=retryPolicy,proto3\" json:\"retry_policy,omitempty\"" }, { name: "CronSchedule", key: "CronSchedule", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,12,opt,name=cron_schedule,json=cronSchedule,proto3\" json:\"cron_schedule,omitempty\"" }, { name: "Header", key: "Header", type: /* @__PURE__ */ $.pointerType("apiv1.Header"), tag: "protobuf:\"bytes,13,opt,name=header,proto3\" json:\"header,omitempty\"" }, { name: "Memo", key: "Memo", type: /* @__PURE__ */ $.pointerType("apiv1.Memo"), tag: "protobuf:\"bytes,14,opt,name=memo,proto3\" json:\"memo,omitempty\"" }, { name: "SearchAttributes", key: "SearchAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes"), tag: "protobuf:\"bytes,15,opt,name=search_attributes,json=searchAttributes,proto3\" json:\"search_attributes,omitempty\"" }, { name: "CronOverlapPolicy", key: "CronOverlapPolicy", type: /* @__PURE__ */ $.basicType("int32", "apiv1.CronOverlapPolicy"), tag: "protobuf:\"varint,16,opt,name=cron_overlap_policy,json=cronOverlapPolicy,proto3,enum=uber.cadence.api.v1.CronOverlapPolicy\" json:\"cron_overlap_policy,omitempty\"" }, { name: "ActiveClusterSelectionPolicy", key: "ActiveClusterSelectionPolicy", type: /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterSelectionPolicy"), tag: "protobuf:\"bytes,17,opt,name=active_cluster_selection_policy,json=activeClusterSelectionPolicy,proto3\" json:\"active_cluster_selection_policy,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class SignalExternalWorkflowExecutionDecisionAttributes {
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

	public get SignalName(): string {
		return this._fields.SignalName
	}

	public set SignalName(value: string) {
		this._fields.SignalName = value
	}

	public get Input(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.Input
	}

	public set Input(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.Input = value
	}

	public get Control(): $.Slice<number> {
		return this._fields.Control
	}

	public set Control(value: $.Slice<number>) {
		this._fields.Control = value
	}

	public get ChildWorkflowOnly(): boolean {
		return this._fields.ChildWorkflowOnly
	}

	public set ChildWorkflowOnly(value: boolean) {
		this._fields.ChildWorkflowOnly = value
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
		SignalName: string
		Input: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		Control: $.Slice<number>
		ChildWorkflowOnly: boolean
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, SignalName?: string, Input?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, Control?: $.Slice<number>, ChildWorkflowOnly?: boolean, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			SignalName: init?.SignalName ?? ("" as string),
			Input: init?.Input ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			Control: init?.Control ?? (null! as $.Slice<number>),
			ChildWorkflowOnly: init?.ChildWorkflowOnly ?? (false as boolean),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SignalExternalWorkflowExecutionDecisionAttributes {
		return new SignalExternalWorkflowExecutionDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: SignalExternalWorkflowExecutionDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowExecution = values.WorkflowExecution
		target.SignalName = values.SignalName
		target.Input = values.Input
		target.Control = values.Control
		target.ChildWorkflowOnly = values.ChildWorkflowOnly
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_fb529b236ea74dc2, $.arrayToSlice<number>([12])]
	}

	public GetChildWorkflowOnly(): boolean {
		const m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<SignalExternalWorkflowExecutionDecisionAttributes>(m).ChildWorkflowOnly
		}
		return false
	}

	public GetControl(): $.Slice<number> {
		const m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<SignalExternalWorkflowExecutionDecisionAttributes>(m).Control
		}
		return null
	}

	public GetDomain(): string {
		const m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<SignalExternalWorkflowExecutionDecisionAttributes>(m).Domain
		}
		return ""
	}

	public GetInput(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<SignalExternalWorkflowExecutionDecisionAttributes>(m).Input
		}
		return null
	}

	public GetSignalName(): string {
		const m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<SignalExternalWorkflowExecutionDecisionAttributes>(m).SignalName
		}
		return ""
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<SignalExternalWorkflowExecutionDecisionAttributes>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalExternalWorkflowExecutionDecisionAttributes).Size() : SignalExternalWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple25: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalExternalWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SignalExternalWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple25[0]
		err = __goscriptTuple25[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalExternalWorkflowExecutionDecisionAttributes).Size() : SignalExternalWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalExternalWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SignalExternalWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		const m$: SignalExternalWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<SignalExternalWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalExternalWorkflowExecutionDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as SignalExternalWorkflowExecutionDecisionAttributes).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as SignalExternalWorkflowExecutionDecisionAttributes).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalExternalWorkflowExecutionDecisionAttributes).XXX_unrecognized)
		}
		if ((m$ as SignalExternalWorkflowExecutionDecisionAttributes).ChildWorkflowOnly) {
			i--
			if ((m$ as SignalExternalWorkflowExecutionDecisionAttributes).ChildWorkflowOnly) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x30
		}
		if ($.sliceLen((m$ as SignalExternalWorkflowExecutionDecisionAttributes).Control) > 0) {
			i = i - ($.sliceLen((m$ as SignalExternalWorkflowExecutionDecisionAttributes).Control))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalExternalWorkflowExecutionDecisionAttributes).Control)
			i = encodeVarintDecision(dAtA, i, $.uint64($.sliceLen((m$ as SignalExternalWorkflowExecutionDecisionAttributes).Control)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as SignalExternalWorkflowExecutionDecisionAttributes).Input != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as SignalExternalWorkflowExecutionDecisionAttributes).Input, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as SignalExternalWorkflowExecutionDecisionAttributes).SignalName) > 0) {
			i = i - ($.stringLen((m$ as SignalExternalWorkflowExecutionDecisionAttributes).SignalName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalExternalWorkflowExecutionDecisionAttributes).SignalName)
			i = encodeVarintDecision(dAtA, i, $.uint64($.stringLen((m$ as SignalExternalWorkflowExecutionDecisionAttributes).SignalName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as SignalExternalWorkflowExecutionDecisionAttributes).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as SignalExternalWorkflowExecutionDecisionAttributes).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as SignalExternalWorkflowExecutionDecisionAttributes).Domain) > 0) {
			i = i - ($.stringLen((m$ as SignalExternalWorkflowExecutionDecisionAttributes).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalExternalWorkflowExecutionDecisionAttributes).Domain)
			i = encodeVarintDecision(dAtA, i, $.uint64($.stringLen((m$ as SignalExternalWorkflowExecutionDecisionAttributes).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		$.assignStruct($.pointerValue<SignalExternalWorkflowExecutionDecisionAttributes>(m), $.markAsStructValue(new SignalExternalWorkflowExecutionDecisionAttributes()))
	}

	public Size(): number {
		const m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		let n: number = 0
		const m$: SignalExternalWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<SignalExternalWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalExternalWorkflowExecutionDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as SignalExternalWorkflowExecutionDecisionAttributes).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as SignalExternalWorkflowExecutionDecisionAttributes).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as SignalExternalWorkflowExecutionDecisionAttributes).WorkflowExecution)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		l = $.stringLen((m$ as SignalExternalWorkflowExecutionDecisionAttributes).SignalName)
		if (l > 0) {
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as SignalExternalWorkflowExecutionDecisionAttributes).Input != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as SignalExternalWorkflowExecutionDecisionAttributes).Input)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		l = $.sliceLen((m$ as SignalExternalWorkflowExecutionDecisionAttributes).Control)
		if (l > 0) {
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as SignalExternalWorkflowExecutionDecisionAttributes).ChildWorkflowOnly) {
			n = n + (2)
		}
		if ((m$ as SignalExternalWorkflowExecutionDecisionAttributes).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as SignalExternalWorkflowExecutionDecisionAttributes).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalExternalWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.SignalExternalWorkflowExecutionDecisionAttributes")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		const m$: SignalExternalWorkflowExecutionDecisionAttributes = m == null ? $.pointerTarget<SignalExternalWorkflowExecutionDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalExternalWorkflowExecutionDecisionAttributes>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow12 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDecision
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
				return fmt.Errorf("proto: SignalExternalWorkflowExecutionDecisionAttributes: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: SignalExternalWorkflowExecutionDecisionAttributes: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalExternalWorkflowExecutionDecisionAttributes).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as SignalExternalWorkflowExecutionDecisionAttributes).WorkflowExecution == null) {
						;(m$ as SignalExternalWorkflowExecutionDecisionAttributes).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as SignalExternalWorkflowExecutionDecisionAttributes).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field SignalName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalExternalWorkflowExecutionDecisionAttributes).SignalName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Input", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as SignalExternalWorkflowExecutionDecisionAttributes).Input == null) {
						;(m$ as SignalExternalWorkflowExecutionDecisionAttributes).Input = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as SignalExternalWorkflowExecutionDecisionAttributes).Input, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Control", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalExternalWorkflowExecutionDecisionAttributes).Control = $.appendSlice($.goSlice((m$ as SignalExternalWorkflowExecutionDecisionAttributes).Control, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as SignalExternalWorkflowExecutionDecisionAttributes).Control == null) {
						;(m$ as SignalExternalWorkflowExecutionDecisionAttributes).Control = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field ChildWorkflowOnly", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as SignalExternalWorkflowExecutionDecisionAttributes).ChildWorkflowOnly = (v != 0)
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipDecision($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDecision
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalExternalWorkflowExecutionDecisionAttributes).XXX_unrecognized = $.appendSlice((m$ as SignalExternalWorkflowExecutionDecisionAttributes).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		xxx_messageInfo_SignalExternalWorkflowExecutionDecisionAttributes.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalExternalWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.SignalExternalWorkflowExecutionDecisionAttributes")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		if (deterministic) {
			return xxx_messageInfo_SignalExternalWorkflowExecutionDecisionAttributes.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.SignalExternalWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.SignalExternalWorkflowExecutionDecisionAttributes")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalExternalWorkflowExecutionDecisionAttributes).MarshalToSizedBuffer(b) : SignalExternalWorkflowExecutionDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		xxx_messageInfo_SignalExternalWorkflowExecutionDecisionAttributes.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalExternalWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.SignalExternalWorkflowExecutionDecisionAttributes")), src)
	}

	public XXX_Size(): number {
		const m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalExternalWorkflowExecutionDecisionAttributes).Size() : SignalExternalWorkflowExecutionDecisionAttributes.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<SignalExternalWorkflowExecutionDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalExternalWorkflowExecutionDecisionAttributes).Unmarshal(b) : SignalExternalWorkflowExecutionDecisionAttributes.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.SignalExternalWorkflowExecutionDecisionAttributes",
		() => new SignalExternalWorkflowExecutionDecisionAttributes(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetChildWorkflowOnly", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetControl", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetInput", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetSignalName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetWorkflowExecution", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		SignalExternalWorkflowExecutionDecisionAttributes,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "WorkflowExecution", key: "WorkflowExecution", type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }, { name: "SignalName", key: "SignalName", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=signal_name,json=signalName,proto3\" json:\"signal_name,omitempty\"" }, { name: "Input", key: "Input", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,4,opt,name=input,proto3\" json:\"input,omitempty\"" }, { name: "Control", key: "Control", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,5,opt,name=control,proto3\" json:\"control,omitempty\"" }, { name: "ChildWorkflowOnly", key: "ChildWorkflowOnly", type: /* @__PURE__ */ $.basicType("bool"), tag: "protobuf:\"varint,6,opt,name=child_workflow_only,json=childWorkflowOnly,proto3\" json:\"child_workflow_only,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class UpsertWorkflowSearchAttributesDecisionAttributes {
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
		SearchAttributes: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{SearchAttributes?: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			SearchAttributes: init?.SearchAttributes ?? (null! as __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UpsertWorkflowSearchAttributesDecisionAttributes {
		return new UpsertWorkflowSearchAttributesDecisionAttributes(this, true)
	}

	public __goscriptAssign(source: UpsertWorkflowSearchAttributesDecisionAttributes): void {
		const target = this._fields
		const values = source._fields
		target.SearchAttributes = values.SearchAttributes
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_fb529b236ea74dc2, $.arrayToSlice<number>([13])]
	}

	public GetSearchAttributes(): __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null {
		const m: UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<UpsertWorkflowSearchAttributesDecisionAttributes>(m).SearchAttributes
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpsertWorkflowSearchAttributesDecisionAttributes).Size() : UpsertWorkflowSearchAttributesDecisionAttributes.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple26: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpsertWorkflowSearchAttributesDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UpsertWorkflowSearchAttributesDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple26[0]
		err = __goscriptTuple26[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpsertWorkflowSearchAttributesDecisionAttributes).Size() : UpsertWorkflowSearchAttributesDecisionAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpsertWorkflowSearchAttributesDecisionAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UpsertWorkflowSearchAttributesDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null = this;
		const m$: UpsertWorkflowSearchAttributesDecisionAttributes = m == null ? $.pointerTarget<UpsertWorkflowSearchAttributesDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UpsertWorkflowSearchAttributesDecisionAttributes>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as UpsertWorkflowSearchAttributesDecisionAttributes).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as UpsertWorkflowSearchAttributesDecisionAttributes).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UpsertWorkflowSearchAttributesDecisionAttributes).XXX_unrecognized)
		}
		if ((m$ as UpsertWorkflowSearchAttributesDecisionAttributes).SearchAttributes != null) {
			{
				let [size, err] = __goscript_common_pb.SearchAttributes.prototype.MarshalToSizedBuffer.call((m$ as UpsertWorkflowSearchAttributesDecisionAttributes).SearchAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDecision(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null = this;
		$.assignStruct($.pointerValue<UpsertWorkflowSearchAttributesDecisionAttributes>(m), $.markAsStructValue(new UpsertWorkflowSearchAttributesDecisionAttributes()))
	}

	public Size(): number {
		const m: UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null = this;
		let n: number = 0
		const m$: UpsertWorkflowSearchAttributesDecisionAttributes = m == null ? $.pointerTarget<UpsertWorkflowSearchAttributesDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UpsertWorkflowSearchAttributesDecisionAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as UpsertWorkflowSearchAttributesDecisionAttributes).SearchAttributes != null) {
			l = __goscript_common_pb.SearchAttributes.prototype.Size.call((m$ as UpsertWorkflowSearchAttributesDecisionAttributes).SearchAttributes)
			n = n + ((1 + l) + sovDecision($.uint64(l)))
		}
		if ((m$ as UpsertWorkflowSearchAttributesDecisionAttributes).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as UpsertWorkflowSearchAttributesDecisionAttributes).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.UpsertWorkflowSearchAttributesDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.UpsertWorkflowSearchAttributesDecisionAttributes")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null = this;
		const m$: UpsertWorkflowSearchAttributesDecisionAttributes = m == null ? $.pointerTarget<UpsertWorkflowSearchAttributesDecisionAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UpsertWorkflowSearchAttributesDecisionAttributes>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow13 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDecision
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
				return fmt.Errorf("proto: UpsertWorkflowSearchAttributesDecisionAttributes: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: UpsertWorkflowSearchAttributesDecisionAttributes: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field SearchAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDecision
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
						return ErrInvalidLengthDecision
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDecision
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as UpsertWorkflowSearchAttributesDecisionAttributes).SearchAttributes == null) {
						;(m$ as UpsertWorkflowSearchAttributesDecisionAttributes).SearchAttributes = new __goscript_common_pb.SearchAttributes()
					}
					{
						let err = __goscript_common_pb.SearchAttributes.prototype.Unmarshal.call((m$ as UpsertWorkflowSearchAttributesDecisionAttributes).SearchAttributes, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipDecision($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDecision
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UpsertWorkflowSearchAttributesDecisionAttributes).XXX_unrecognized = $.appendSlice((m$ as UpsertWorkflowSearchAttributesDecisionAttributes).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null = this;
		xxx_messageInfo_UpsertWorkflowSearchAttributesDecisionAttributes.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.UpsertWorkflowSearchAttributesDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.UpsertWorkflowSearchAttributesDecisionAttributes")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null = this;
		if (deterministic) {
			return xxx_messageInfo_UpsertWorkflowSearchAttributesDecisionAttributes.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.UpsertWorkflowSearchAttributesDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.UpsertWorkflowSearchAttributesDecisionAttributes")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpsertWorkflowSearchAttributesDecisionAttributes).MarshalToSizedBuffer(b) : UpsertWorkflowSearchAttributesDecisionAttributes.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null = this;
		xxx_messageInfo_UpsertWorkflowSearchAttributesDecisionAttributes.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.UpsertWorkflowSearchAttributesDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.UpsertWorkflowSearchAttributesDecisionAttributes")), src)
	}

	public XXX_Size(): number {
		const m: UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpsertWorkflowSearchAttributesDecisionAttributes).Size() : UpsertWorkflowSearchAttributesDecisionAttributes.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<UpsertWorkflowSearchAttributesDecisionAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpsertWorkflowSearchAttributesDecisionAttributes).Unmarshal(b) : UpsertWorkflowSearchAttributesDecisionAttributes.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.UpsertWorkflowSearchAttributesDecisionAttributes",
		() => new UpsertWorkflowSearchAttributesDecisionAttributes(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetSearchAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		UpsertWorkflowSearchAttributesDecisionAttributes,
		() => [{ name: "SearchAttributes", key: "SearchAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes"), tag: "protobuf:\"bytes,1,opt,name=search_attributes,json=searchAttributes,proto3\" json:\"search_attributes,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export let xxx_messageInfo_Decision: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Decision(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Decision.value, __goscriptValue)
}

export let xxx_messageInfo_ScheduleActivityTaskDecisionAttributes: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ScheduleActivityTaskDecisionAttributes(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ScheduleActivityTaskDecisionAttributes.value, __goscriptValue)
}

export let xxx_messageInfo_StartTimerDecisionAttributes: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_StartTimerDecisionAttributes(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_StartTimerDecisionAttributes.value, __goscriptValue)
}

export let xxx_messageInfo_CompleteWorkflowExecutionDecisionAttributes: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_CompleteWorkflowExecutionDecisionAttributes(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_CompleteWorkflowExecutionDecisionAttributes.value, __goscriptValue)
}

export let xxx_messageInfo_FailWorkflowExecutionDecisionAttributes: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_FailWorkflowExecutionDecisionAttributes(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_FailWorkflowExecutionDecisionAttributes.value, __goscriptValue)
}

export let xxx_messageInfo_RequestCancelActivityTaskDecisionAttributes: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RequestCancelActivityTaskDecisionAttributes(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RequestCancelActivityTaskDecisionAttributes.value, __goscriptValue)
}

export let xxx_messageInfo_CancelTimerDecisionAttributes: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_CancelTimerDecisionAttributes(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_CancelTimerDecisionAttributes.value, __goscriptValue)
}

export let xxx_messageInfo_CancelWorkflowExecutionDecisionAttributes: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_CancelWorkflowExecutionDecisionAttributes(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_CancelWorkflowExecutionDecisionAttributes.value, __goscriptValue)
}

export let xxx_messageInfo_RequestCancelExternalWorkflowExecutionDecisionAttributes: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RequestCancelExternalWorkflowExecutionDecisionAttributes(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RequestCancelExternalWorkflowExecutionDecisionAttributes.value, __goscriptValue)
}

export let xxx_messageInfo_RecordMarkerDecisionAttributes: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RecordMarkerDecisionAttributes(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RecordMarkerDecisionAttributes.value, __goscriptValue)
}

export let xxx_messageInfo_ContinueAsNewWorkflowExecutionDecisionAttributes: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ContinueAsNewWorkflowExecutionDecisionAttributes(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ContinueAsNewWorkflowExecutionDecisionAttributes.value, __goscriptValue)
}

export let xxx_messageInfo_StartChildWorkflowExecutionDecisionAttributes: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_StartChildWorkflowExecutionDecisionAttributes(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_StartChildWorkflowExecutionDecisionAttributes.value, __goscriptValue)
}

export let xxx_messageInfo_SignalExternalWorkflowExecutionDecisionAttributes: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_SignalExternalWorkflowExecutionDecisionAttributes(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_SignalExternalWorkflowExecutionDecisionAttributes.value, __goscriptValue)
}

export let xxx_messageInfo_UpsertWorkflowSearchAttributesDecisionAttributes: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_UpsertWorkflowSearchAttributesDecisionAttributes(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_UpsertWorkflowSearchAttributesDecisionAttributes.value, __goscriptValue)
}

function __goscriptInit0(): void {
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.Decision", /* @__PURE__ */ $.pointerType("apiv1.Decision")), "uber.cadence.api.v1.Decision")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ScheduleActivityTaskDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.ScheduleActivityTaskDecisionAttributes")), "uber.cadence.api.v1.ScheduleActivityTaskDecisionAttributes")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.StartTimerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.StartTimerDecisionAttributes")), "uber.cadence.api.v1.StartTimerDecisionAttributes")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.CompleteWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.CompleteWorkflowExecutionDecisionAttributes")), "uber.cadence.api.v1.CompleteWorkflowExecutionDecisionAttributes")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.FailWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.FailWorkflowExecutionDecisionAttributes")), "uber.cadence.api.v1.FailWorkflowExecutionDecisionAttributes")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RequestCancelActivityTaskDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelActivityTaskDecisionAttributes")), "uber.cadence.api.v1.RequestCancelActivityTaskDecisionAttributes")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.CancelTimerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.CancelTimerDecisionAttributes")), "uber.cadence.api.v1.CancelTimerDecisionAttributes")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.CancelWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.CancelWorkflowExecutionDecisionAttributes")), "uber.cadence.api.v1.CancelWorkflowExecutionDecisionAttributes")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes")), "uber.cadence.api.v1.RequestCancelExternalWorkflowExecutionDecisionAttributes")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RecordMarkerDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.RecordMarkerDecisionAttributes")), "uber.cadence.api.v1.RecordMarkerDecisionAttributes")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes")), "uber.cadence.api.v1.ContinueAsNewWorkflowExecutionDecisionAttributes")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.StartChildWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.StartChildWorkflowExecutionDecisionAttributes")), "uber.cadence.api.v1.StartChildWorkflowExecutionDecisionAttributes")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.SignalExternalWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.SignalExternalWorkflowExecutionDecisionAttributes")), "uber.cadence.api.v1.SignalExternalWorkflowExecutionDecisionAttributes")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.UpsertWorkflowSearchAttributesDecisionAttributes", /* @__PURE__ */ $.pointerType("apiv1.UpsertWorkflowSearchAttributesDecisionAttributes")), "uber.cadence.api.v1.UpsertWorkflowSearchAttributesDecisionAttributes")
}

function __goscriptInit1(): void {
	proto.RegisterFile("uber/cadence/api/v1/decision.proto", fileDescriptor_fb529b236ea74dc2)
}

export let fileDescriptor_fb529b236ea74dc2: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 220, 89, 79, 111, 20, 71, 22, 223, 246, 159, 241, 204, 243, 24, 112, 25, 140, 13, 198, 54, 179, 90, 88, 176, 60, 99, 27, 22, 33, 64, 104, 241, 128, 133, 37, 48, 86, 219, 128, 180, 151, 86, 185, 186, 108, 215, 186, 167, 107, 182, 186, 218, 102, 86, 90, 137, 211, 238, 94, 242, 1, 34, 229, 148, 75, 146, 75, 114, 77, 148, 83, 110, 57, 38, 223, 32, 226, 43, 228, 11, 68, 93, 93, 221, 51, 30, 247, 244, 116, 27, 194, 33, 55, 119, 245, 123, 191, 250, 117, 189, 55, 191, 247, 235, 54, 84, 252, 29, 42, 106, 4, 219, 212, 37, 180, 134, 155, 172, 118, 184, 92, 179, 41, 97, 30, 227, 110, 181, 41, 184, 228, 104, 34, 136, 169, 234, 152, 42, 110, 178, 234, 225, 242, 165, 217, 61, 206, 247, 28, 90, 83, 33, 59, 254, 110, 205, 246, 5, 150, 113, 210, 165, 249, 36, 96, 194, 27, 141, 56, 34, 113, 107, 137, 189, 3, 135, 121, 50, 45, 230, 136, 139, 131, 93, 135, 31, 133, 49, 149, 255, 143, 67, 241, 177, 102, 140, 62, 53, 224, 166, 71, 246, 169, 237, 59, 212, 194, 68, 178, 67, 38, 91, 86, 128, 106, 69, 79, 101, 97, 41, 5, 219, 241, 37, 245, 166, 140, 121, 227, 175, 163, 43, 247, 171, 9, 79, 88, 221, 210, 48, 143, 52, 202, 54, 246, 14, 162, 125, 30, 197, 16, 79, 255, 100, 94, 243, 50, 69, 162, 127, 195, 156, 39, 177, 144, 150, 100, 13, 42, 18, 249, 12, 40, 62, 203, 201, 124, 130, 220, 237, 32, 53, 145, 197, 140, 151, 114, 31, 125, 105, 64, 112, 250, 77, 135, 74, 106, 69, 7, 104, 209, 55, 148, 248, 65, 209, 18, 201, 12, 42, 50, 127, 79, 36, 83, 215, 88, 175, 53, 212, 147, 8, 41, 145, 219, 2, 201, 30, 142, 62, 51, 96, 97, 23, 51, 39, 43, 205, 33, 69, 243, 65, 34, 205, 53, 204, 156, 108, 20, 175, 239, 102, 11, 69, 95, 25, 176, 36, 232, 191, 124, 234, 73, 139, 96, 151, 80, 39, 67, 159, 13, 167, 28, 165, 25, 130, 213, 21, 86, 223, 102, 91, 16, 217, 195, 209, 127, 96, 94, 83, 236, 221, 114, 5, 69, 109, 37, 185, 202, 42, 185, 119, 207, 93, 33, 105, 1, 232, 115, 3, 22, 245, 254, 25, 107, 57, 162, 200, 60, 76, 33, 147, 173, 154, 55, 72, 214, 96, 244, 179, 1, 15, 187, 234, 73, 223, 72, 42, 92, 156, 153, 117, 81, 177, 126, 222, 191, 186, 79, 52, 112, 182, 135, 184, 43, 78, 153, 139, 222, 26, 112, 85, 80, 194, 133, 109, 53, 176, 56, 232, 81, 249, 146, 162, 125, 171, 7, 237, 32, 251, 185, 74, 78, 36, 55, 43, 82, 35, 208, 119, 6, 220, 33, 220, 149, 204, 245, 169, 133, 61, 203, 165, 71, 89, 143, 19, 20, 175, 39, 61, 116, 39, 132, 124, 228, 109, 208, 163, 108, 199, 184, 68, 114, 230, 160, 111, 12, 88, 9, 149, 154, 236, 51, 199, 206, 202, 123, 84, 241, 94, 237, 45, 222, 245, 0, 45, 27, 233, 69, 47, 79, 2, 250, 222, 128, 59, 30, 219, 11, 122, 54, 111, 243, 150, 21, 235, 181, 100, 214, 10, 50, 95, 215, 46, 123, 121, 147, 208, 183, 6, 252, 205, 111, 122, 84, 200, 54, 105, 143, 98, 65, 246, 59, 136, 38, 146, 31, 75, 105, 149, 151, 10, 49, 218, 127, 75, 225, 181, 55, 77, 110, 21, 63, 103, 206, 106, 25, 160, 77, 167, 242, 73, 1, 174, 101, 179, 13, 104, 14, 70, 227, 177, 193, 108, 101, 68, 74, 38, 68, 75, 235, 54, 90, 131, 177, 246, 92, 105, 53, 169, 246, 6, 87, 19, 159, 53, 222, 172, 213, 164, 102, 25, 119, 92, 161, 73, 40, 216, 188, 129, 153, 171, 230, 121, 201, 212, 87, 232, 30, 148, 212, 184, 10, 220, 150, 158, 161, 87, 18, 177, 131, 7, 120, 198, 60, 105, 22, 165, 254, 11, 173, 192, 48, 115, 155, 190, 212, 115, 109, 38, 49, 111, 19, 183, 28, 142, 109, 51, 12, 69, 219, 48, 29, 27, 51, 201, 45, 226, 112, 143, 170, 177, 196, 125, 169, 135, 208, 116, 53, 52, 149, 213, 200, 84, 86, 31, 107, 83, 105, 78, 70, 185, 219, 188, 30, 100, 110, 135, 137, 221, 168, 109, 127, 21, 160, 142, 228, 64, 141, 221, 85, 128, 186, 1, 147, 26, 169, 155, 104, 177, 31, 228, 68, 104, 195, 142, 179, 92, 131, 241, 125, 138, 133, 220, 161, 184, 205, 174, 212, 15, 234, 92, 156, 19, 225, 212, 161, 44, 168, 20, 45, 171, 201, 29, 70, 90, 90, 113, 230, 123, 40, 184, 20, 173, 77, 21, 103, 142, 138, 246, 5, 186, 5, 133, 125, 138, 109, 42, 244, 79, 255, 114, 98, 250, 83, 21, 98, 234, 80, 116, 27, 38, 163, 33, 233, 112, 130, 29, 203, 102, 94, 19, 75, 178, 175, 126, 130, 69, 243, 188, 190, 251, 44, 184, 249, 88, 223, 171, 252, 207, 128, 153, 52, 219, 138, 166, 161, 24, 58, 147, 248, 39, 48, 162, 174, 215, 109, 244, 12, 46, 196, 53, 216, 101, 162, 93, 130, 129, 126, 231, 134, 116, 9, 214, 152, 136, 42, 80, 33, 176, 144, 195, 178, 162, 219, 80, 16, 212, 243, 29, 169, 223, 16, 210, 59, 92, 199, 86, 48, 92, 207, 104, 56, 209, 29, 24, 9, 12, 167, 47, 104, 234, 14, 107, 97, 140, 25, 5, 87, 54, 96, 33, 135, 95, 236, 171, 50, 149, 123, 112, 37, 213, 228, 165, 84, 168, 66, 224, 70, 102, 79, 22, 60, 176, 77, 37, 102, 142, 151, 233, 72, 163, 224, 202, 175, 6, 220, 61, 173, 135, 234, 208, 62, 227, 152, 246, 189, 4, 116, 114, 58, 234, 198, 186, 150, 200, 235, 196, 110, 230, 248, 81, 247, 18, 154, 130, 145, 192, 107, 8, 238, 40, 173, 45, 155, 209, 37, 170, 194, 68, 151, 149, 224, 174, 211, 82, 178, 91, 52, 199, 73, 231, 152, 127, 225, 58, 173, 202, 215, 6, 204, 166, 91, 176, 160, 180, 218, 219, 185, 184, 65, 163, 210, 134, 75, 27, 184, 65, 59, 79, 124, 32, 199, 137, 119, 232, 195, 96, 102, 125, 168, 188, 5, 88, 202, 235, 205, 130, 17, 23, 159, 135, 26, 113, 70, 202, 136, 139, 0, 195, 17, 119, 212, 113, 117, 124, 148, 13, 156, 114, 148, 13, 102, 31, 101, 24, 230, 219, 158, 170, 199, 160, 24, 234, 167, 82, 51, 49, 196, 86, 194, 196, 120, 13, 151, 213, 35, 245, 64, 31, 238, 135, 126, 49, 200, 78, 2, 126, 1, 147, 59, 152, 28, 240, 221, 93, 141, 205, 92, 73, 197, 33, 118, 250, 207, 224, 243, 58, 81, 193, 174, 235, 180, 19, 51, 105, 228, 52, 51, 105, 29, 74, 204, 101, 146, 97, 201, 133, 154, 177, 103, 86, 22, 250, 251, 255, 245, 40, 197, 108, 103, 119, 42, 107, 41, 135, 178, 34, 19, 38, 29, 28, 188, 3, 134, 99, 34, 40, 173, 30, 1, 144, 161, 51, 206, 7, 185, 245, 56, 213, 84, 153, 232, 207, 48, 70, 68, 208, 35, 218, 102, 168, 129, 93, 50, 203, 193, 98, 228, 19, 79, 55, 143, 23, 97, 168, 65, 27, 92, 27, 224, 233, 196, 148, 231, 180, 193, 77, 21, 134, 76, 24, 63, 97, 168, 167, 206, 168, 220, 191, 36, 59, 255, 46, 235, 107, 158, 243, 186, 86, 208, 3, 40, 255, 147, 73, 73, 69, 216, 72, 83, 103, 251, 245, 207, 104, 24, 174, 218, 7, 189, 130, 9, 117, 52, 252, 144, 10, 7, 55, 163, 238, 57, 167, 106, 159, 172, 193, 117, 193, 221, 23, 97, 184, 238, 161, 113, 210, 189, 132, 222, 192, 156, 26, 111, 212, 34, 142, 239, 41, 118, 212, 161, 68, 213, 83, 239, 49, 158, 242, 145, 77, 205, 83, 90, 15, 83, 183, 162, 76, 189, 221, 12, 78, 185, 91, 249, 162, 4, 139, 185, 94, 243, 122, 142, 167, 57, 24, 141, 117, 145, 217, 74, 209, 74, 38, 68, 75, 225, 187, 193, 113, 225, 28, 252, 0, 194, 249, 17, 222, 1, 178, 8, 103, 225, 119, 21, 206, 145, 83, 11, 231, 43, 152, 104, 98, 65, 93, 169, 17, 117, 51, 21, 83, 26, 118, 83, 197, 43, 148, 168, 97, 155, 221, 75, 157, 166, 161, 116, 220, 52, 16, 152, 234, 104, 3, 75, 80, 191, 189, 45, 168, 109, 111, 166, 22, 124, 221, 54, 131, 20, 189, 245, 133, 163, 164, 229, 15, 243, 74, 113, 66, 231, 202, 169, 58, 55, 150, 95, 231, 206, 188, 135, 206, 157, 125, 63, 157, 251, 227, 41, 213, 15, 3, 176, 156, 251, 211, 206, 199, 54, 211, 115, 48, 170, 191, 104, 41, 127, 27, 126, 188, 128, 112, 73, 249, 219, 88, 128, 134, 178, 11, 80, 199, 143, 109, 56, 147, 67, 47, 244, 114, 232, 255, 53, 96, 41, 239, 23, 166, 228, 246, 52, 222, 171, 61, 87, 217, 143, 239, 102, 141, 159, 222, 205, 26, 191, 188, 155, 53, 224, 34, 225, 141, 36, 164, 213, 177, 136, 206, 102, 32, 121, 155, 198, 63, 150, 247, 152, 220, 247, 119, 170, 132, 55, 106, 157, 255, 101, 91, 100, 182, 83, 219, 227, 225, 63, 246, 244, 191, 220, 238, 227, 38, 59, 92, 222, 41, 168, 181, 91, 191, 5, 0, 0, 255, 255, 248, 225, 66, 107, 53, 28, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_fb529b236ea74dc2(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_fb529b236ea74dc2 = __goscriptValue
}

export function encodeVarintDecision(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovDecision(v))
	let base = offset
	for (let __goscriptSliceWindow14 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export function sovDecision(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozDecision(x: bigint): number {
	let n: number = 0
	return sovDecision($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export function skipDecision(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow15 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowDecision]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow15.backing as any[])[$.windowSlot(__goscriptSliceWindow15, iNdEx)] as number)
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
						return [0, ErrIntOverflowDecision]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow15.backing as any[])[$.windowSlot(__goscriptSliceWindow15, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowDecision]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow15.backing as any[])[$.windowSlot(__goscriptSliceWindow15, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthDecision]
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
					return [0, ErrUnexpectedEndOfGroupDecision]
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
			return [0, ErrInvalidLengthDecision]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthDecision: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthDecision(__goscriptValue: $.GoError): void {
	ErrInvalidLengthDecision = __goscriptValue
}

export let ErrIntOverflowDecision: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowDecision(__goscriptValue: $.GoError): void {
	ErrIntOverflowDecision = __goscriptValue
}

export let ErrUnexpectedEndOfGroupDecision: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupDecision(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupDecision = __goscriptValue
}

export { __goscriptInit0 }

export { __goscriptInit1 }
