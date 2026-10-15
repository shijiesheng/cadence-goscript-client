// Generated file based on internal_decision_state_machine.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as list from "@goscript/container/list/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as s from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as util from "@goscript/go.uber.org/cadence/internal/common/util/index.js"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_internal_task_handlers from "./internal_task_handlers.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"
import "@goscript/container/list/index.js"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/cadence/internal/common/util/index.js"
import "./encoded.gs.ts"
import "./internal_task_handlers.gs.ts"
import "./internal_worker.gs.ts"
import "./workflow.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.decisionState", "internal.decisionType", "internal.decisionID", "internal.decisionStateMachine", "internal.decisionStateMachineBase", "internal.activityDecisionStateMachine", "internal.timerDecisionStateMachine", "internal.childWorkflowDecisionStateMachine", "internal.naiveDecisionStateMachine", "internal.cancelExternalWorkflowDecisionStateMachine", "internal.signalExternalWorkflowDecisionStateMachine", "internal.markerDecisionStateMachine", "internal.upsertSearchAttributesDecisionStateMachine", "internal.decisionsHelper", "internal.stateMachineIllegalStatePanic"])

export type decisionState = number

$.registerNamedValueType(
	"internal.decisionState",
	{String: (receiver: any, ...args: any[]) => (decisionState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*internal.decisionState",
	{String: (receiver: any, ...args: any[]) => (decisionState_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type decisionType = number

$.registerNamedValueType(
	"internal.decisionType",
	{String: (receiver: any, ...args: any[]) => (decisionType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*internal.decisionType",
	{String: (receiver: any, ...args: any[]) => (decisionType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type decisionStateMachine = {
	cancel(): void
	getData(): any
	getDecision(): s.Decision | $.VarRef<s.Decision> | null
	getID(): decisionID
	getState(): decisionState
	handleCancelFailedEvent(): void
	handleCancelInitiatedEvent(): void
	handleCanceledEvent(): void
	handleCompletionEvent(): void
	handleDecisionSent(): void
	handleInitiatedEvent(): void
	handleInitiationFailedEvent(): void
	handleStartedEvent(): void
	isDone(): boolean
	setData(data: any): void
}

$.registerInterfaceType(
	"internal.decisionStateMachine",
	null,
	[$.methodSignature("cancel"), $.methodSignature("getData", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("getDecision", [], [/* @__PURE__ */ $.pointerType("shared.Decision")]), $.methodSignature("getID", [], ["internal.decisionID"]), $.methodSignature("getState", [], [/* @__PURE__ */ $.basicType("int32", "internal.decisionState")]), $.methodSignature("handleCancelFailedEvent"), $.methodSignature("handleCancelInitiatedEvent"), $.methodSignature("handleCanceledEvent"), $.methodSignature("handleCompletionEvent"), $.methodSignature("handleDecisionSent"), $.methodSignature("handleInitiatedEvent"), $.methodSignature("handleInitiationFailedEvent"), $.methodSignature("handleStartedEvent"), $.methodSignature("isDone", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("setData", [["data", { kind: $.TypeKind.Interface, methods: [] }]])]
);

export class decisionID {
	public get decisionType(): decisionType {
		return this._fields.decisionType
	}

	public set decisionType(value: decisionType) {
		this._fields.decisionType = value
	}

	public get id(): string {
		return this._fields.id
	}

	public set id(value: string) {
		this._fields.id = value
	}

	public _fields: {
		decisionType: decisionType
		id: string
	}

	constructor(init?: Partial<{decisionType?: decisionType, id?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			decisionType: init?.decisionType ?? (0 as decisionType),
			id: init?.id ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decisionID {
		return new decisionID(this, true)
	}

	public __goscriptAssign(source: decisionID): void {
		const target = this._fields
		const values = source._fields
		target.decisionType = values.decisionType
		target.id = values.id
	}

	public async String(): globalThis.Promise<string> {
		const d = this;
		return fmt.Sprintf("DecisionType: %v, ID: %v", $.namedValueInterfaceValue<any>(d.decisionType, "internal.decisionType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), d.id)
	}

	static __typeInfo = $.registerStructType(
		"internal.decisionID",
		() => new decisionID(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		decisionID,
		() => [/* @__PURE__ */ $.structField("decisionType", /* @__PURE__ */ $.basicType("int32", "internal.decisionType"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class decisionStateMachineBase {
	public get id(): decisionID {
		return this._fields.id
	}

	public set id(value: decisionID) {
		this._fields.id = value
	}

	public get state(): decisionState {
		return this._fields.state
	}

	public set state(value: decisionState) {
		this._fields.state = value
	}

	public get history(): $.Slice<string> {
		return this._fields.history
	}

	public set history(value: $.Slice<string>) {
		this._fields.history = value
	}

	public get data(): any {
		return this._fields.data
	}

	public set data(value: any) {
		this._fields.data = value
	}

	public get helper(): decisionsHelper | $.VarRef<decisionsHelper> | null {
		return this._fields.helper
	}

	public set helper(value: decisionsHelper | $.VarRef<decisionsHelper> | null) {
		this._fields.helper = value
	}

	public _fields: {
		id: decisionID
		state: decisionState
		history: $.Slice<string>
		data: any
		helper: decisionsHelper | $.VarRef<decisionsHelper> | null
	}

	constructor(init?: Partial<{id?: decisionID, state?: decisionState, history?: $.Slice<string>, data?: any, helper?: decisionsHelper | $.VarRef<decisionsHelper> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ? init.id.clone() : new decisionID(undefined, true),
			state: init?.state ?? (0 as decisionState),
			history: init?.history ?? (null! as $.Slice<string>),
			data: init?.data ?? (null! as any),
			helper: init?.helper ?? (null! as decisionsHelper | $.VarRef<decisionsHelper> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decisionStateMachineBase {
		return new decisionStateMachineBase(this, true)
	}

	public __goscriptAssign(source: decisionStateMachineBase): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.id, values.id)
		target.state = values.state
		target.history = values.history
		target.data = $.assignFieldValue(target.data, values.data, { kind: $.TypeKind.Interface, methods: [] })
		target.helper = values.helper
	}

	public async String(): globalThis.Promise<string> {
		const d: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = this;
		const d$: decisionStateMachineBase = d == null ? $.pointerTarget<decisionStateMachineBase>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decisionStateMachineBase>(d)
		return fmt.Sprintf("%v, state=%v, isDone()=%v, history=%v", $.interfaceValue(((d$ as decisionStateMachineBase).id).clone(), "internal.decisionID", "internal.decisionID"), $.namedValueInterfaceValue<any>((d$ as decisionStateMachineBase).state, "internal.decisionState", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).isDone() : decisionStateMachineBase.prototype.isDone.call(d)), $.interfaceValue((d$ as decisionStateMachineBase).history, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
	}

	public async cancel(): globalThis.Promise<void> {
		const d: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = this;
		switch ($.pointerValue<decisionStateMachineBase>(d).state) {
			case 9:
			case 8:
			{
				break
			}
			case 0:
			{
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).moveState(9, "cancel") : decisionStateMachineBase.prototype.moveState.call(d, 9, "cancel"))
				break
			}
			case 1:
			{
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).moveState(2, "cancel") : decisionStateMachineBase.prototype.moveState.call(d, 2, "cancel"))
				break
			}
			case 3:
			{
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).moveState(5, "cancel") : decisionStateMachineBase.prototype.moveState.call(d, 5, "cancel"))
				break
			}
			default:
			{
				await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).failStateTransition("cancel") : decisionStateMachineBase.prototype.failStateTransition.call(d, "cancel"))
				break
			}
		}
	}

	public async failStateTransition(event: string): globalThis.Promise<void> {
		const d: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = this;
		// this is when we detect illegal state transition, likely due to ill history sequence or nondeterministic decider code
		panicIllegalState(await fmt.Sprintf("invalid state transition: attempt to %v, %v", event, $.interfaceValue(d, "*internal.decisionStateMachineBase", /* @__PURE__ */ $.pointerType("internal.decisionStateMachineBase"))))
	}

	public getData(): any {
		const d: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = this;
		return $.pointerValue<decisionStateMachineBase>(d).data
	}

	public getID(): decisionID {
		const d: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = this;
		return ($.pointerValue<decisionStateMachineBase>(d).id).clone()
	}

	public getState(): decisionState {
		const d: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = this;
		return $.pointerValue<decisionStateMachineBase>(d).state
	}

	public async handleCancelFailedEvent(): globalThis.Promise<void> {
		const d: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = this;
		switch ($.pointerValue<decisionStateMachineBase>(d).state) {
			case 8:
			{
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).moveState(9, "handleCancelFailedEvent") : decisionStateMachineBase.prototype.moveState.call(d, 9, "handleCancelFailedEvent"))
				break
			}
			default:
			{
				await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).failStateTransition("handleCancelFailedEvent") : decisionStateMachineBase.prototype.failStateTransition.call(d, "handleCancelFailedEvent"))
				break
			}
		}
	}

	public async handleCancelInitiatedEvent(): globalThis.Promise<void> {
		let d: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = this;
		const d$: decisionStateMachineBase = d == null ? $.pointerTarget<decisionStateMachineBase>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decisionStateMachineBase>(d);
		;(d$ as decisionStateMachineBase).history = $.appendOne((d$ as decisionStateMachineBase).history, "handleCancelInitiatedEvent")
		switch ((d$ as decisionStateMachineBase).state) {
			case 7:
			{
				break
			}
			default:
			{
				await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).failStateTransition("handleCancelInitiatedEvent") : decisionStateMachineBase.prototype.failStateTransition.call(d, "handleCancelInitiatedEvent"))
				break
			}
		}
	}

	public async handleCanceledEvent(): globalThis.Promise<void> {
		const d: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = this;
		switch ($.pointerValue<decisionStateMachineBase>(d).state) {
			case 7:
			{
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).moveState(9, "handleCanceledEvent") : decisionStateMachineBase.prototype.moveState.call(d, 9, "handleCanceledEvent"))
				break
			}
			default:
			{
				await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).failStateTransition("handleCanceledEvent") : decisionStateMachineBase.prototype.failStateTransition.call(d, "handleCanceledEvent"))
				break
			}
		}
	}

	public async handleCompletionEvent(): globalThis.Promise<void> {
		const d: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = this;
		switch ($.pointerValue<decisionStateMachineBase>(d).state) {
			case 5:
			case 3:
			{
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).moveState(9, "handleCompletionEvent") : decisionStateMachineBase.prototype.moveState.call(d, 9, "handleCompletionEvent"))
				break
			}
			case 7:
			{
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).moveState(8, "handleCompletionEvent") : decisionStateMachineBase.prototype.moveState.call(d, 8, "handleCompletionEvent"))
				break
			}
			default:
			{
				await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).failStateTransition("handleCompletionEvent") : decisionStateMachineBase.prototype.failStateTransition.call(d, "handleCompletionEvent"))
				break
			}
		}
	}

	public handleDecisionSent(): void {
		const d: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = this;
		switch ($.pointerValue<decisionStateMachineBase>(d).state) {
			case 0:
			{
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).moveState(1, "handleDecisionSent") : decisionStateMachineBase.prototype.moveState.call(d, 1, "handleDecisionSent"))
				break
			}
		}
	}

	public async handleInitiatedEvent(): globalThis.Promise<void> {
		const d: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = this;
		switch ($.pointerValue<decisionStateMachineBase>(d).state) {
			case 1:
			{
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).moveState(3, "handleInitiatedEvent") : decisionStateMachineBase.prototype.moveState.call(d, 3, "handleInitiatedEvent"))
				break
			}
			case 2:
			{
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).moveState(5, "handleInitiatedEvent") : decisionStateMachineBase.prototype.moveState.call(d, 5, "handleInitiatedEvent"))
				break
			}
			default:
			{
				await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).failStateTransition("handleInitiatedEvent") : decisionStateMachineBase.prototype.failStateTransition.call(d, "handleInitiatedEvent"))
				break
			}
		}
	}

	public async handleInitiationFailedEvent(): globalThis.Promise<void> {
		const d: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = this;
		switch ($.pointerValue<decisionStateMachineBase>(d).state) {
			case 3:
			case 1:
			case 2:
			{
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).moveState(9, "handleInitiationFailedEvent") : decisionStateMachineBase.prototype.moveState.call(d, 9, "handleInitiationFailedEvent"))
				break
			}
			default:
			{
				await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).failStateTransition("handleInitiationFailedEvent") : decisionStateMachineBase.prototype.failStateTransition.call(d, "handleInitiationFailedEvent"))
				break
			}
		}
	}

	public handleStartedEvent(): void {
		let d: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = this;
		const d$: decisionStateMachineBase = d == null ? $.pointerTarget<decisionStateMachineBase>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decisionStateMachineBase>(d);
		;(d$ as decisionStateMachineBase).history = $.appendOne((d$ as decisionStateMachineBase).history, "handleStartedEvent")
	}

	public isDone(): boolean {
		const d: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = this;
		const d$: decisionStateMachineBase = d == null ? $.pointerTarget<decisionStateMachineBase>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decisionStateMachineBase>(d)
		return ((d$ as decisionStateMachineBase).state == 9) || ((d$ as decisionStateMachineBase).state == 8)
	}

	public moveState(newState: decisionState, event: string): void {
		let d: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = this;
		const d$: decisionStateMachineBase = d == null ? $.pointerTarget<decisionStateMachineBase>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decisionStateMachineBase>(d);
		;(d$ as decisionStateMachineBase).history = $.appendOne((d$ as decisionStateMachineBase).history, event);
		;(d$ as decisionStateMachineBase).state = newState;
		;(d$ as decisionStateMachineBase).history = $.appendOne((d$ as decisionStateMachineBase).history, decisionState_String(newState))

		if (newState == 9) {
			{
				let __goscriptTuple0: any = $.mapGet<decisionID, list.Element | $.VarRef<list.Element> | null, list.Element | $.VarRef<list.Element> | null>($.pointerValue<decisionsHelper>((d$ as decisionStateMachineBase).helper).decisions, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).getID() : decisionStateMachineBase.prototype.getID.call(d)), null)
				let elem: list.Element | $.VarRef<list.Element> | null = __goscriptTuple0[0]
				let ok = __goscriptTuple0[1]
				if (ok) {
					list.List.prototype.Remove.call($.pointerValue<decisionsHelper>((d$ as decisionStateMachineBase).helper).orderedDecisions, elem)
					$.deleteMapEntry($.pointerValue<decisionsHelper>((d$ as decisionStateMachineBase).helper).decisions, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decisionStateMachineBase).getID() : decisionStateMachineBase.prototype.getID.call(d)))
				}
			}
		}
	}

	public setData(data: any): void {
		let d: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = this;
		$.pointerValue<decisionStateMachineBase>(d).data = data
	}

	static __typeInfo = $.registerStructType(
		"internal.decisionStateMachineBase",
		() => new decisionStateMachineBase(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("cancel", [], [], true), $.methodSignature("failStateTransition", [["event", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("getData", [], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("getID", [], ["internal.decisionID"], true), $.methodSignature("getState", [], [/* @__PURE__ */ $.basicType("int32", "internal.decisionState")], true), $.methodSignature("handleCancelFailedEvent", [], [], true), $.methodSignature("handleCancelInitiatedEvent", [], [], true), $.methodSignature("handleCanceledEvent", [], [], true), $.methodSignature("handleCompletionEvent", [], [], true), $.methodSignature("handleDecisionSent", [], [], true), $.methodSignature("handleInitiatedEvent", [], [], true), $.methodSignature("handleInitiationFailedEvent", [], [], true), $.methodSignature("handleStartedEvent", [], [], true), $.methodSignature("isDone", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("moveState", [["newState", /* @__PURE__ */ $.basicType("int32", "internal.decisionState")], ["event", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("setData", [["data", { kind: $.TypeKind.Interface, methods: [] }]], [], true)],
		decisionStateMachineBase,
		() => [/* @__PURE__ */ $.structField("id", "internal.decisionID", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int32", "internal.decisionState"), [1], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("history", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("data", { kind: $.TypeKind.Interface, methods: [] }, [3], 56, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("helper", /* @__PURE__ */ $.pointerType("internal.decisionsHelper"), [4], 72, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class activityDecisionStateMachine {
	public get decisionStateMachineBase(): decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null {
		return this._fields.decisionStateMachineBase
	}

	public set decisionStateMachineBase(value: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null) {
		this._fields.decisionStateMachineBase = value
	}

	public get attributes(): s.ScheduleActivityTaskDecisionAttributes | $.VarRef<s.ScheduleActivityTaskDecisionAttributes> | null {
		return this._fields.attributes
	}

	public set attributes(value: s.ScheduleActivityTaskDecisionAttributes | $.VarRef<s.ScheduleActivityTaskDecisionAttributes> | null) {
		this._fields.attributes = value
	}

	public _fields: {
		decisionStateMachineBase: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null
		attributes: s.ScheduleActivityTaskDecisionAttributes | $.VarRef<s.ScheduleActivityTaskDecisionAttributes> | null
	}

	constructor(init?: Partial<{decisionStateMachineBase?: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null, attributes?: s.ScheduleActivityTaskDecisionAttributes | $.VarRef<s.ScheduleActivityTaskDecisionAttributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			decisionStateMachineBase: init?.decisionStateMachineBase ?? (null! as decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null),
			attributes: init?.attributes ?? (null! as s.ScheduleActivityTaskDecisionAttributes | $.VarRef<s.ScheduleActivityTaskDecisionAttributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): activityDecisionStateMachine {
		return new activityDecisionStateMachine(this, true)
	}

	public __goscriptAssign(source: activityDecisionStateMachine): void {
		const target = this._fields
		const values = source._fields
		target.decisionStateMachineBase = values.decisionStateMachineBase
		target.attributes = values.attributes
	}

	public getDecision(): s.Decision | $.VarRef<s.Decision> | null {
		const d: activityDecisionStateMachine | $.VarRef<activityDecisionStateMachine> | null = this;
		const d$: activityDecisionStateMachine = d == null ? $.pointerTarget<activityDecisionStateMachine>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<activityDecisionStateMachine>(d)
		switch ($.pointerValue<decisionStateMachineBase>((d$ as activityDecisionStateMachine).decisionStateMachineBase).state) {
			case 0:
			{
				let decision: s.Decision | $.VarRef<s.Decision> | null = __goscript_internal_task_handlers.createNewDecision(0)
				$.pointerValue<s.Decision>(decision).ScheduleActivityTaskDecisionAttributes = (d$ as activityDecisionStateMachine).attributes
				return decision
				break
			}
			case 5:
			{
				let decision: s.Decision | $.VarRef<s.Decision> | null = __goscript_internal_task_handlers.createNewDecision(1)
				$.pointerValue<s.Decision>(decision).RequestCancelActivityTaskDecisionAttributes = new s.RequestCancelActivityTaskDecisionAttributes({ActivityId: $.pointerValue<s.ScheduleActivityTaskDecisionAttributes>((d$ as activityDecisionStateMachine).attributes).ActivityId})
				return decision
				break
			}
			default:
			{
				return null
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async handleCancelFailedEvent(): globalThis.Promise<void> {
		const d: activityDecisionStateMachine | $.VarRef<activityDecisionStateMachine> | null = this;
		const d$: activityDecisionStateMachine = d == null ? $.pointerTarget<activityDecisionStateMachine>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<activityDecisionStateMachine>(d)
		switch ($.pointerValue<decisionStateMachineBase>((d$ as activityDecisionStateMachine).decisionStateMachineBase).state) {
			case 7:
			{
				$.pointerValue<decisionStateMachineBase>((d$ as activityDecisionStateMachine).decisionStateMachineBase).moveState(3, "handleCancelFailedEvent")
				break
			}
			default:
			{
				await decisionStateMachineBase.prototype.handleCancelFailedEvent.call((d$ as activityDecisionStateMachine).decisionStateMachineBase)
				break
			}
		}
	}

	public handleDecisionSent(): void {
		const d: activityDecisionStateMachine | $.VarRef<activityDecisionStateMachine> | null = this;
		const d$: activityDecisionStateMachine = d == null ? $.pointerTarget<activityDecisionStateMachine>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<activityDecisionStateMachine>(d)
		switch ($.pointerValue<decisionStateMachineBase>((d$ as activityDecisionStateMachine).decisionStateMachineBase).state) {
			case 5:
			{
				$.pointerValue<decisionStateMachineBase>((d$ as activityDecisionStateMachine).decisionStateMachineBase).moveState(7, "handleDecisionSent")
				break
			}
			default:
			{
				decisionStateMachineBase.prototype.handleDecisionSent.call((d$ as activityDecisionStateMachine).decisionStateMachineBase)
				break
			}
		}
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).String()
	}

	public async cancel(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).cancel()
	}

	public async failStateTransition(event: any): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).failStateTransition(event)
	}

	public getData(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).getData()
	}

	public getID(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).getID()
	}

	public getState(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).getState()
	}

	public async handleCancelInitiatedEvent(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).handleCancelInitiatedEvent()
	}

	public async handleCanceledEvent(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).handleCanceledEvent()
	}

	public async handleCompletionEvent(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).handleCompletionEvent()
	}

	public async handleInitiatedEvent(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).handleInitiatedEvent()
	}

	public async handleInitiationFailedEvent(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).handleInitiationFailedEvent()
	}

	public handleStartedEvent(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).handleStartedEvent()
	}

	public isDone(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).isDone()
	}

	public moveState(newState: any, event: any): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).moveState(newState, event)
	}

	public setData(data: any): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).setData(data)
	}

	static __typeInfo = $.registerStructType(
		"internal.activityDecisionStateMachine",
		() => new activityDecisionStateMachine(),
		() => [$.methodSignature("getDecision", [], [/* @__PURE__ */ $.pointerType("shared.Decision")], true), $.methodSignature("handleCancelFailedEvent", [], [], true), $.methodSignature("handleDecisionSent", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("cancel"), $.methodSignature("failStateTransition", [["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("getData", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("getID", [], ["internal.decisionID"]), $.methodSignature("getState", [], [/* @__PURE__ */ $.basicType("int32", "internal.decisionState")]), $.methodSignature("handleCancelInitiatedEvent"), $.methodSignature("handleCanceledEvent"), $.methodSignature("handleCompletionEvent"), $.methodSignature("handleInitiatedEvent"), $.methodSignature("handleInitiationFailedEvent"), $.methodSignature("handleStartedEvent"), $.methodSignature("isDone", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("moveState", [["newState", /* @__PURE__ */ $.basicType("int32", "internal.decisionState")], ["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("setData", [["data", { kind: $.TypeKind.Interface, methods: [] }]])],
		activityDecisionStateMachine,
		() => [/* @__PURE__ */ $.structField("decisionStateMachineBase", /* @__PURE__ */ $.pointerType("internal.decisionStateMachineBase"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("attributes", /* @__PURE__ */ $.pointerType("shared.ScheduleActivityTaskDecisionAttributes"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class timerDecisionStateMachine {
	public get decisionStateMachineBase(): decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null {
		return this._fields.decisionStateMachineBase
	}

	public set decisionStateMachineBase(value: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null) {
		this._fields.decisionStateMachineBase = value
	}

	public get attributes(): s.StartTimerDecisionAttributes | $.VarRef<s.StartTimerDecisionAttributes> | null {
		return this._fields.attributes
	}

	public set attributes(value: s.StartTimerDecisionAttributes | $.VarRef<s.StartTimerDecisionAttributes> | null) {
		this._fields.attributes = value
	}

	public get canceled(): boolean {
		return this._fields.canceled
	}

	public set canceled(value: boolean) {
		this._fields.canceled = value
	}

	public _fields: {
		decisionStateMachineBase: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null
		attributes: s.StartTimerDecisionAttributes | $.VarRef<s.StartTimerDecisionAttributes> | null
		canceled: boolean
	}

	constructor(init?: Partial<{decisionStateMachineBase?: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null, attributes?: s.StartTimerDecisionAttributes | $.VarRef<s.StartTimerDecisionAttributes> | null, canceled?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			decisionStateMachineBase: init?.decisionStateMachineBase ?? (null! as decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null),
			attributes: init?.attributes ?? (null! as s.StartTimerDecisionAttributes | $.VarRef<s.StartTimerDecisionAttributes> | null),
			canceled: init?.canceled ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): timerDecisionStateMachine {
		return new timerDecisionStateMachine(this, true)
	}

	public __goscriptAssign(source: timerDecisionStateMachine): void {
		const target = this._fields
		const values = source._fields
		target.decisionStateMachineBase = values.decisionStateMachineBase
		target.attributes = values.attributes
		target.canceled = values.canceled
	}

	public async cancel(): globalThis.Promise<void> {
		let d: timerDecisionStateMachine | $.VarRef<timerDecisionStateMachine> | null = this;
		const d$: timerDecisionStateMachine = d == null ? $.pointerTarget<timerDecisionStateMachine>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<timerDecisionStateMachine>(d);
		;(d$ as timerDecisionStateMachine).canceled = true
		await decisionStateMachineBase.prototype.cancel.call((d$ as timerDecisionStateMachine).decisionStateMachineBase)
	}

	public getDecision(): s.Decision | $.VarRef<s.Decision> | null {
		const d: timerDecisionStateMachine | $.VarRef<timerDecisionStateMachine> | null = this;
		const d$: timerDecisionStateMachine = d == null ? $.pointerTarget<timerDecisionStateMachine>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<timerDecisionStateMachine>(d)
		switch ($.pointerValue<decisionStateMachineBase>((d$ as timerDecisionStateMachine).decisionStateMachineBase).state) {
			case 0:
			{
				let decision: s.Decision | $.VarRef<s.Decision> | null = __goscript_internal_task_handlers.createNewDecision(2)
				$.pointerValue<s.Decision>(decision).StartTimerDecisionAttributes = (d$ as timerDecisionStateMachine).attributes
				return decision
				break
			}
			case 5:
			{
				let decision: s.Decision | $.VarRef<s.Decision> | null = __goscript_internal_task_handlers.createNewDecision(5)
				$.pointerValue<s.Decision>(decision).CancelTimerDecisionAttributes = new s.CancelTimerDecisionAttributes({TimerId: $.pointerValue<s.StartTimerDecisionAttributes>((d$ as timerDecisionStateMachine).attributes).TimerId})
				return decision
				break
			}
			default:
			{
				return null
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async handleCancelFailedEvent(): globalThis.Promise<void> {
		const d: timerDecisionStateMachine | $.VarRef<timerDecisionStateMachine> | null = this;
		const d$: timerDecisionStateMachine = d == null ? $.pointerTarget<timerDecisionStateMachine>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<timerDecisionStateMachine>(d)
		switch ($.pointerValue<decisionStateMachineBase>((d$ as timerDecisionStateMachine).decisionStateMachineBase).state) {
			case 7:
			{
				$.pointerValue<decisionStateMachineBase>((d$ as timerDecisionStateMachine).decisionStateMachineBase).moveState(3, "handleCancelFailedEvent")
				break
			}
			default:
			{
				await decisionStateMachineBase.prototype.handleCancelFailedEvent.call((d$ as timerDecisionStateMachine).decisionStateMachineBase)
				break
			}
		}
	}

	public handleDecisionSent(): void {
		const d: timerDecisionStateMachine | $.VarRef<timerDecisionStateMachine> | null = this;
		const d$: timerDecisionStateMachine = d == null ? $.pointerTarget<timerDecisionStateMachine>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<timerDecisionStateMachine>(d)
		switch ($.pointerValue<decisionStateMachineBase>((d$ as timerDecisionStateMachine).decisionStateMachineBase).state) {
			case 5:
			{
				$.pointerValue<decisionStateMachineBase>((d$ as timerDecisionStateMachine).decisionStateMachineBase).moveState(7, "handleDecisionSent")
				break
			}
			default:
			{
				decisionStateMachineBase.prototype.handleDecisionSent.call((d$ as timerDecisionStateMachine).decisionStateMachineBase)
				break
			}
		}
	}

	public isDone(): boolean {
		const d: timerDecisionStateMachine | $.VarRef<timerDecisionStateMachine> | null = this;
		const d$: timerDecisionStateMachine = d == null ? $.pointerTarget<timerDecisionStateMachine>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<timerDecisionStateMachine>(d)
		return ($.pointerValue<decisionStateMachineBase>((d$ as timerDecisionStateMachine).decisionStateMachineBase).state == 9) || (d$ as timerDecisionStateMachine).canceled
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).String()
	}

	public async failStateTransition(event: any): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).failStateTransition(event)
	}

	public getData(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).getData()
	}

	public getID(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).getID()
	}

	public getState(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).getState()
	}

	public async handleCancelInitiatedEvent(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).handleCancelInitiatedEvent()
	}

	public async handleCanceledEvent(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).handleCanceledEvent()
	}

	public async handleCompletionEvent(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).handleCompletionEvent()
	}

	public async handleInitiatedEvent(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).handleInitiatedEvent()
	}

	public async handleInitiationFailedEvent(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).handleInitiationFailedEvent()
	}

	public handleStartedEvent(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).handleStartedEvent()
	}

	public moveState(newState: any, event: any): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).moveState(newState, event)
	}

	public setData(data: any): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).setData(data)
	}

	static __typeInfo = $.registerStructType(
		"internal.timerDecisionStateMachine",
		() => new timerDecisionStateMachine(),
		() => [$.methodSignature("cancel", [], [], true), $.methodSignature("getDecision", [], [/* @__PURE__ */ $.pointerType("shared.Decision")], true), $.methodSignature("handleCancelFailedEvent", [], [], true), $.methodSignature("handleDecisionSent", [], [], true), $.methodSignature("isDone", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("failStateTransition", [["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("getData", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("getID", [], ["internal.decisionID"]), $.methodSignature("getState", [], [/* @__PURE__ */ $.basicType("int32", "internal.decisionState")]), $.methodSignature("handleCancelInitiatedEvent"), $.methodSignature("handleCanceledEvent"), $.methodSignature("handleCompletionEvent"), $.methodSignature("handleInitiatedEvent"), $.methodSignature("handleInitiationFailedEvent"), $.methodSignature("handleStartedEvent"), $.methodSignature("moveState", [["newState", /* @__PURE__ */ $.basicType("int32", "internal.decisionState")], ["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("setData", [["data", { kind: $.TypeKind.Interface, methods: [] }]])],
		timerDecisionStateMachine,
		() => [/* @__PURE__ */ $.structField("decisionStateMachineBase", /* @__PURE__ */ $.pointerType("internal.decisionStateMachineBase"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("attributes", /* @__PURE__ */ $.pointerType("shared.StartTimerDecisionAttributes"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("canceled", /* @__PURE__ */ $.basicType("bool"), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class childWorkflowDecisionStateMachine {
	public get decisionStateMachineBase(): decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null {
		return this._fields.decisionStateMachineBase
	}

	public set decisionStateMachineBase(value: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null) {
		this._fields.decisionStateMachineBase = value
	}

	public get attributes(): s.StartChildWorkflowExecutionDecisionAttributes | $.VarRef<s.StartChildWorkflowExecutionDecisionAttributes> | null {
		return this._fields.attributes
	}

	public set attributes(value: s.StartChildWorkflowExecutionDecisionAttributes | $.VarRef<s.StartChildWorkflowExecutionDecisionAttributes> | null) {
		this._fields.attributes = value
	}

	public _fields: {
		decisionStateMachineBase: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null
		attributes: s.StartChildWorkflowExecutionDecisionAttributes | $.VarRef<s.StartChildWorkflowExecutionDecisionAttributes> | null
	}

	constructor(init?: Partial<{decisionStateMachineBase?: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null, attributes?: s.StartChildWorkflowExecutionDecisionAttributes | $.VarRef<s.StartChildWorkflowExecutionDecisionAttributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			decisionStateMachineBase: init?.decisionStateMachineBase ?? (null! as decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null),
			attributes: init?.attributes ?? (null! as s.StartChildWorkflowExecutionDecisionAttributes | $.VarRef<s.StartChildWorkflowExecutionDecisionAttributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): childWorkflowDecisionStateMachine {
		return new childWorkflowDecisionStateMachine(this, true)
	}

	public __goscriptAssign(source: childWorkflowDecisionStateMachine): void {
		const target = this._fields
		const values = source._fields
		target.decisionStateMachineBase = values.decisionStateMachineBase
		target.attributes = values.attributes
	}

	public async cancel(): globalThis.Promise<void> {
		const d: childWorkflowDecisionStateMachine | $.VarRef<childWorkflowDecisionStateMachine> | null = this;
		const d$: childWorkflowDecisionStateMachine = d == null ? $.pointerTarget<childWorkflowDecisionStateMachine>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<childWorkflowDecisionStateMachine>(d)
		switch ($.pointerValue<decisionStateMachineBase>((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase).state) {
			case 4:
			{
				$.pointerValue<decisionStateMachineBase>((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase).moveState(6, "cancel")
				break
			}
			default:
			{
				await decisionStateMachineBase.prototype.cancel.call((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase)
				break
			}
		}
	}

	public getDecision(): s.Decision | $.VarRef<s.Decision> | null {
		const d: childWorkflowDecisionStateMachine | $.VarRef<childWorkflowDecisionStateMachine> | null = this;
		const d$: childWorkflowDecisionStateMachine = d == null ? $.pointerTarget<childWorkflowDecisionStateMachine>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<childWorkflowDecisionStateMachine>(d)
		switch ($.pointerValue<decisionStateMachineBase>((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase).state) {
			case 0:
			{
				let decision: s.Decision | $.VarRef<s.Decision> | null = __goscript_internal_task_handlers.createNewDecision(10)
				$.pointerValue<s.Decision>(decision).StartChildWorkflowExecutionDecisionAttributes = (d$ as childWorkflowDecisionStateMachine).attributes
				return decision
				break
			}
			case 6:
			{
				let decision: s.Decision | $.VarRef<s.Decision> | null = __goscript_internal_task_handlers.createNewDecision(7)
				$.pointerValue<s.Decision>(decision).RequestCancelExternalWorkflowExecutionDecisionAttributes = (() => { const __goscriptLiteralField0 = common.BoolPtr(true); return new s.RequestCancelExternalWorkflowExecutionDecisionAttributes({Domain: $.pointerValue<s.StartChildWorkflowExecutionDecisionAttributes>((d$ as childWorkflowDecisionStateMachine).attributes).Domain, WorkflowId: $.pointerValue<s.StartChildWorkflowExecutionDecisionAttributes>((d$ as childWorkflowDecisionStateMachine).attributes).WorkflowId, ChildWorkflowOnly: __goscriptLiteralField0}) })()
				return decision
				break
			}
			default:
			{
				return null
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async handleCancelFailedEvent(): globalThis.Promise<void> {
		const d: childWorkflowDecisionStateMachine | $.VarRef<childWorkflowDecisionStateMachine> | null = this;
		const d$: childWorkflowDecisionStateMachine = d == null ? $.pointerTarget<childWorkflowDecisionStateMachine>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<childWorkflowDecisionStateMachine>(d)
		switch ($.pointerValue<decisionStateMachineBase>((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase).state) {
			case 7:
			{
				$.pointerValue<decisionStateMachineBase>((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase).moveState(4, "handleCancelFailedEvent")
				break
			}
			default:
			{
				await decisionStateMachineBase.prototype.handleCancelFailedEvent.call((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase)
				break
			}
		}
	}

	public async handleCanceledEvent(): globalThis.Promise<void> {
		const d: childWorkflowDecisionStateMachine | $.VarRef<childWorkflowDecisionStateMachine> | null = this;
		const d$: childWorkflowDecisionStateMachine = d == null ? $.pointerTarget<childWorkflowDecisionStateMachine>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<childWorkflowDecisionStateMachine>(d)
		switch ($.pointerValue<decisionStateMachineBase>((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase).state) {
			case 4:
			{
				$.pointerValue<decisionStateMachineBase>((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase).moveState(9, "handleCanceledEvent")
				break
			}
			default:
			{
				await decisionStateMachineBase.prototype.handleCanceledEvent.call((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase)
				break
			}
		}
	}

	public async handleCompletionEvent(): globalThis.Promise<void> {
		const d: childWorkflowDecisionStateMachine | $.VarRef<childWorkflowDecisionStateMachine> | null = this;
		const d$: childWorkflowDecisionStateMachine = d == null ? $.pointerTarget<childWorkflowDecisionStateMachine>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<childWorkflowDecisionStateMachine>(d)
		switch ($.pointerValue<decisionStateMachineBase>((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase).state) {
			case 4:
			case 6:
			{
				$.pointerValue<decisionStateMachineBase>((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase).moveState(9, "handleCompletionEvent")
				break
			}
			default:
			{
				await decisionStateMachineBase.prototype.handleCompletionEvent.call((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase)
				break
			}
		}
	}

	public handleDecisionSent(): void {
		const d: childWorkflowDecisionStateMachine | $.VarRef<childWorkflowDecisionStateMachine> | null = this;
		const d$: childWorkflowDecisionStateMachine = d == null ? $.pointerTarget<childWorkflowDecisionStateMachine>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<childWorkflowDecisionStateMachine>(d)
		switch ($.pointerValue<decisionStateMachineBase>((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase).state) {
			case 6:
			{
				$.pointerValue<decisionStateMachineBase>((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase).moveState(7, "handleDecisionSent")
				break
			}
			default:
			{
				decisionStateMachineBase.prototype.handleDecisionSent.call((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase)
				break
			}
		}
	}

	public handleStartedEvent(): void {
		const d: childWorkflowDecisionStateMachine | $.VarRef<childWorkflowDecisionStateMachine> | null = this;
		const d$: childWorkflowDecisionStateMachine = d == null ? $.pointerTarget<childWorkflowDecisionStateMachine>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<childWorkflowDecisionStateMachine>(d)
		switch ($.pointerValue<decisionStateMachineBase>((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase).state) {
			case 3:
			{
				$.pointerValue<decisionStateMachineBase>((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase).moveState(4, "handleStartedEvent")
				break
			}
			case 5:
			{
				$.pointerValue<decisionStateMachineBase>((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase).moveState(6, "handleStartedEvent")
				break
			}
			default:
			{
				decisionStateMachineBase.prototype.handleStartedEvent.call((d$ as childWorkflowDecisionStateMachine).decisionStateMachineBase)
				break
			}
		}
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).String()
	}

	public async failStateTransition(event: any): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).failStateTransition(event)
	}

	public getData(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).getData()
	}

	public getID(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).getID()
	}

	public getState(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).getState()
	}

	public async handleCancelInitiatedEvent(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).handleCancelInitiatedEvent()
	}

	public async handleInitiatedEvent(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).handleInitiatedEvent()
	}

	public async handleInitiationFailedEvent(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).handleInitiationFailedEvent()
	}

	public isDone(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).isDone()
	}

	public moveState(newState: any, event: any): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).moveState(newState, event)
	}

	public setData(data: any): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).setData(data)
	}

	static __typeInfo = $.registerStructType(
		"internal.childWorkflowDecisionStateMachine",
		() => new childWorkflowDecisionStateMachine(),
		() => [$.methodSignature("cancel", [], [], true), $.methodSignature("getDecision", [], [/* @__PURE__ */ $.pointerType("shared.Decision")], true), $.methodSignature("handleCancelFailedEvent", [], [], true), $.methodSignature("handleCanceledEvent", [], [], true), $.methodSignature("handleCompletionEvent", [], [], true), $.methodSignature("handleDecisionSent", [], [], true), $.methodSignature("handleStartedEvent", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("failStateTransition", [["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("getData", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("getID", [], ["internal.decisionID"]), $.methodSignature("getState", [], [/* @__PURE__ */ $.basicType("int32", "internal.decisionState")]), $.methodSignature("handleCancelInitiatedEvent"), $.methodSignature("handleInitiatedEvent"), $.methodSignature("handleInitiationFailedEvent"), $.methodSignature("isDone", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("moveState", [["newState", /* @__PURE__ */ $.basicType("int32", "internal.decisionState")], ["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("setData", [["data", { kind: $.TypeKind.Interface, methods: [] }]])],
		childWorkflowDecisionStateMachine,
		() => [/* @__PURE__ */ $.structField("decisionStateMachineBase", /* @__PURE__ */ $.pointerType("internal.decisionStateMachineBase"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("attributes", /* @__PURE__ */ $.pointerType("shared.StartChildWorkflowExecutionDecisionAttributes"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class naiveDecisionStateMachine {
	public get decisionStateMachineBase(): decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null {
		return this._fields.decisionStateMachineBase
	}

	public set decisionStateMachineBase(value: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null) {
		this._fields.decisionStateMachineBase = value
	}

	public get decision(): s.Decision | $.VarRef<s.Decision> | null {
		return this._fields.decision
	}

	public set decision(value: s.Decision | $.VarRef<s.Decision> | null) {
		this._fields.decision = value
	}

	public _fields: {
		decisionStateMachineBase: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null
		decision: s.Decision | $.VarRef<s.Decision> | null
	}

	constructor(init?: Partial<{decisionStateMachineBase?: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null, decision?: s.Decision | $.VarRef<s.Decision> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			decisionStateMachineBase: init?.decisionStateMachineBase ?? (null! as decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null),
			decision: init?.decision ?? (null! as s.Decision | $.VarRef<s.Decision> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): naiveDecisionStateMachine {
		return new naiveDecisionStateMachine(this, true)
	}

	public __goscriptAssign(source: naiveDecisionStateMachine): void {
		const target = this._fields
		const values = source._fields
		target.decisionStateMachineBase = values.decisionStateMachineBase
		target.decision = values.decision
	}

	public cancel(): void {
		const d: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null = this;
		$.panic("unsupported operation")
	}

	public getDecision(): s.Decision | $.VarRef<s.Decision> | null {
		const d: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null = this;
		const d$: naiveDecisionStateMachine = d == null ? $.pointerTarget<naiveDecisionStateMachine>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<naiveDecisionStateMachine>(d)
		switch ($.pointerValue<decisionStateMachineBase>((d$ as naiveDecisionStateMachine).decisionStateMachineBase).state) {
			case 0:
			{
				return (d$ as naiveDecisionStateMachine).decision
				break
			}
			default:
			{
				return null
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public handleCancelFailedEvent(): void {
		const d: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null = this;
		$.panic("unsupported operation")
	}

	public handleCancelInitiatedEvent(): void {
		const d: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null = this;
		$.panic("unsupported operation")
	}

	public handleCanceledEvent(): void {
		const d: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null = this;
		$.panic("unsupported operation")
	}

	public handleCompletionEvent(): void {
		const d: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null = this;
		$.panic("unsupported operation")
	}

	public handleInitiatedEvent(): void {
		const d: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null = this;
		$.panic("unsupported operation")
	}

	public handleInitiationFailedEvent(): void {
		const d: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null = this;
		$.panic("unsupported operation")
	}

	public handleStartedEvent(): void {
		const d: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null = this;
		$.panic("unsupported operation")
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).String()
	}

	public async failStateTransition(event: any): globalThis.Promise<any> {
		return await $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).failStateTransition(event)
	}

	public getData(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).getData()
	}

	public getID(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).getID()
	}

	public getState(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).getState()
	}

	public handleDecisionSent(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).handleDecisionSent()
	}

	public isDone(): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).isDone()
	}

	public moveState(newState: any, event: any): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).moveState(newState, event)
	}

	public setData(data: any): any {
		return $.pointerValue<decisionStateMachineBase>(this.decisionStateMachineBase).setData(data)
	}

	static __typeInfo = $.registerStructType(
		"internal.naiveDecisionStateMachine",
		() => new naiveDecisionStateMachine(),
		() => [$.methodSignature("cancel", [], [], true), $.methodSignature("getDecision", [], [/* @__PURE__ */ $.pointerType("shared.Decision")], true), $.methodSignature("handleCancelFailedEvent", [], [], true), $.methodSignature("handleCancelInitiatedEvent", [], [], true), $.methodSignature("handleCanceledEvent", [], [], true), $.methodSignature("handleCompletionEvent", [], [], true), $.methodSignature("handleInitiatedEvent", [], [], true), $.methodSignature("handleInitiationFailedEvent", [], [], true), $.methodSignature("handleStartedEvent", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("failStateTransition", [["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("getData", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("getID", [], ["internal.decisionID"]), $.methodSignature("getState", [], [/* @__PURE__ */ $.basicType("int32", "internal.decisionState")]), $.methodSignature("handleDecisionSent"), $.methodSignature("isDone", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("moveState", [["newState", /* @__PURE__ */ $.basicType("int32", "internal.decisionState")], ["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("setData", [["data", { kind: $.TypeKind.Interface, methods: [] }]])],
		naiveDecisionStateMachine,
		() => [/* @__PURE__ */ $.structField("decisionStateMachineBase", /* @__PURE__ */ $.pointerType("internal.decisionStateMachineBase"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("decision", /* @__PURE__ */ $.pointerType("shared.Decision"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class cancelExternalWorkflowDecisionStateMachine {
	public get naiveDecisionStateMachine(): naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null {
		return this._fields.naiveDecisionStateMachine
	}

	public set naiveDecisionStateMachine(value: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null) {
		this._fields.naiveDecisionStateMachine = value
	}

	public _fields: {
		naiveDecisionStateMachine: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null
	}

	constructor(init?: Partial<{naiveDecisionStateMachine?: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			naiveDecisionStateMachine: init?.naiveDecisionStateMachine ?? (null! as naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): cancelExternalWorkflowDecisionStateMachine {
		return new cancelExternalWorkflowDecisionStateMachine(this, true)
	}

	public __goscriptAssign(source: cancelExternalWorkflowDecisionStateMachine): void {
		const target = this._fields
		const values = source._fields
		target.naiveDecisionStateMachine = values.naiveDecisionStateMachine
	}

	public async handleCompletionEvent(): globalThis.Promise<void> {
		const d: cancelExternalWorkflowDecisionStateMachine | $.VarRef<cancelExternalWorkflowDecisionStateMachine> | null = this;
		switch ($.pointerValue<decisionStateMachineBase>($.pointerValue<naiveDecisionStateMachine>($.pointerValue<cancelExternalWorkflowDecisionStateMachine>(d).naiveDecisionStateMachine).decisionStateMachineBase).state) {
			case 3:
			{
				$.pointerValue<decisionStateMachineBase>($.pointerValue<naiveDecisionStateMachine>($.pointerValue<cancelExternalWorkflowDecisionStateMachine>(d).naiveDecisionStateMachine).decisionStateMachineBase).moveState(9, "handleCompletionEvent")
				break
			}
			default:
			{
				await $.pointerValue<decisionStateMachineBase>($.pointerValue<naiveDecisionStateMachine>($.pointerValue<cancelExternalWorkflowDecisionStateMachine>(d).naiveDecisionStateMachine).decisionStateMachineBase).failStateTransition("handleCompletionEvent")
				break
			}
		}
	}

	public async handleInitiatedEvent(): globalThis.Promise<void> {
		const d: cancelExternalWorkflowDecisionStateMachine | $.VarRef<cancelExternalWorkflowDecisionStateMachine> | null = this;
		switch ($.pointerValue<decisionStateMachineBase>($.pointerValue<naiveDecisionStateMachine>($.pointerValue<cancelExternalWorkflowDecisionStateMachine>(d).naiveDecisionStateMachine).decisionStateMachineBase).state) {
			case 1:
			{
				$.pointerValue<decisionStateMachineBase>($.pointerValue<naiveDecisionStateMachine>($.pointerValue<cancelExternalWorkflowDecisionStateMachine>(d).naiveDecisionStateMachine).decisionStateMachineBase).moveState(3, "handleInitiatedEvent")
				break
			}
			default:
			{
				await $.pointerValue<decisionStateMachineBase>($.pointerValue<naiveDecisionStateMachine>($.pointerValue<cancelExternalWorkflowDecisionStateMachine>(d).naiveDecisionStateMachine).decisionStateMachineBase).failStateTransition("handleInitiatedEvent")
				break
			}
		}
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).String()
	}

	public cancel(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).cancel()
	}

	public async failStateTransition(event: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).failStateTransition(event)
	}

	public getData(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).getData()
	}

	public getDecision(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).getDecision()
	}

	public getID(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).getID()
	}

	public getState(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).getState()
	}

	public handleCancelFailedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleCancelFailedEvent()
	}

	public handleCancelInitiatedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleCancelInitiatedEvent()
	}

	public handleCanceledEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleCanceledEvent()
	}

	public handleDecisionSent(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).handleDecisionSent()
	}

	public handleInitiationFailedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleInitiationFailedEvent()
	}

	public handleStartedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleStartedEvent()
	}

	public isDone(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).isDone()
	}

	public moveState(newState: any, event: any): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).moveState(newState, event)
	}

	public setData(data: any): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).setData(data)
	}

	static __typeInfo = $.registerStructType(
		"internal.cancelExternalWorkflowDecisionStateMachine",
		() => new cancelExternalWorkflowDecisionStateMachine(),
		() => [$.methodSignature("handleCompletionEvent", [], [], true), $.methodSignature("handleInitiatedEvent", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("cancel"), $.methodSignature("failStateTransition", [["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("getData", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("getDecision", [], [/* @__PURE__ */ $.pointerType("shared.Decision")]), $.methodSignature("getID", [], ["internal.decisionID"]), $.methodSignature("getState", [], [/* @__PURE__ */ $.basicType("int32", "internal.decisionState")]), $.methodSignature("handleCancelFailedEvent"), $.methodSignature("handleCancelInitiatedEvent"), $.methodSignature("handleCanceledEvent"), $.methodSignature("handleDecisionSent"), $.methodSignature("handleInitiationFailedEvent"), $.methodSignature("handleStartedEvent"), $.methodSignature("isDone", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("moveState", [["newState", /* @__PURE__ */ $.basicType("int32", "internal.decisionState")], ["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("setData", [["data", { kind: $.TypeKind.Interface, methods: [] }]])],
		cancelExternalWorkflowDecisionStateMachine,
		() => [/* @__PURE__ */ $.structField("naiveDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.naiveDecisionStateMachine"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true })]
	)
}

export class signalExternalWorkflowDecisionStateMachine {
	public get naiveDecisionStateMachine(): naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null {
		return this._fields.naiveDecisionStateMachine
	}

	public set naiveDecisionStateMachine(value: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null) {
		this._fields.naiveDecisionStateMachine = value
	}

	public _fields: {
		naiveDecisionStateMachine: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null
	}

	constructor(init?: Partial<{naiveDecisionStateMachine?: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			naiveDecisionStateMachine: init?.naiveDecisionStateMachine ?? (null! as naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): signalExternalWorkflowDecisionStateMachine {
		return new signalExternalWorkflowDecisionStateMachine(this, true)
	}

	public __goscriptAssign(source: signalExternalWorkflowDecisionStateMachine): void {
		const target = this._fields
		const values = source._fields
		target.naiveDecisionStateMachine = values.naiveDecisionStateMachine
	}

	public async handleCompletionEvent(): globalThis.Promise<void> {
		const d: signalExternalWorkflowDecisionStateMachine | $.VarRef<signalExternalWorkflowDecisionStateMachine> | null = this;
		switch ($.pointerValue<decisionStateMachineBase>($.pointerValue<naiveDecisionStateMachine>($.pointerValue<signalExternalWorkflowDecisionStateMachine>(d).naiveDecisionStateMachine).decisionStateMachineBase).state) {
			case 3:
			{
				$.pointerValue<decisionStateMachineBase>($.pointerValue<naiveDecisionStateMachine>($.pointerValue<signalExternalWorkflowDecisionStateMachine>(d).naiveDecisionStateMachine).decisionStateMachineBase).moveState(9, "handleCompletionEvent")
				break
			}
			default:
			{
				await $.pointerValue<decisionStateMachineBase>($.pointerValue<naiveDecisionStateMachine>($.pointerValue<signalExternalWorkflowDecisionStateMachine>(d).naiveDecisionStateMachine).decisionStateMachineBase).failStateTransition("handleCompletionEvent")
				break
			}
		}
	}

	public async handleInitiatedEvent(): globalThis.Promise<void> {
		const d: signalExternalWorkflowDecisionStateMachine | $.VarRef<signalExternalWorkflowDecisionStateMachine> | null = this;
		switch ($.pointerValue<decisionStateMachineBase>($.pointerValue<naiveDecisionStateMachine>($.pointerValue<signalExternalWorkflowDecisionStateMachine>(d).naiveDecisionStateMachine).decisionStateMachineBase).state) {
			case 1:
			{
				$.pointerValue<decisionStateMachineBase>($.pointerValue<naiveDecisionStateMachine>($.pointerValue<signalExternalWorkflowDecisionStateMachine>(d).naiveDecisionStateMachine).decisionStateMachineBase).moveState(3, "handleInitiatedEvent")
				break
			}
			default:
			{
				await $.pointerValue<decisionStateMachineBase>($.pointerValue<naiveDecisionStateMachine>($.pointerValue<signalExternalWorkflowDecisionStateMachine>(d).naiveDecisionStateMachine).decisionStateMachineBase).failStateTransition("handleInitiatedEvent")
				break
			}
		}
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).String()
	}

	public cancel(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).cancel()
	}

	public async failStateTransition(event: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).failStateTransition(event)
	}

	public getData(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).getData()
	}

	public getDecision(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).getDecision()
	}

	public getID(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).getID()
	}

	public getState(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).getState()
	}

	public handleCancelFailedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleCancelFailedEvent()
	}

	public handleCancelInitiatedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleCancelInitiatedEvent()
	}

	public handleCanceledEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleCanceledEvent()
	}

	public handleDecisionSent(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).handleDecisionSent()
	}

	public handleInitiationFailedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleInitiationFailedEvent()
	}

	public handleStartedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleStartedEvent()
	}

	public isDone(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).isDone()
	}

	public moveState(newState: any, event: any): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).moveState(newState, event)
	}

	public setData(data: any): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).setData(data)
	}

	static __typeInfo = $.registerStructType(
		"internal.signalExternalWorkflowDecisionStateMachine",
		() => new signalExternalWorkflowDecisionStateMachine(),
		() => [$.methodSignature("handleCompletionEvent", [], [], true), $.methodSignature("handleInitiatedEvent", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("cancel"), $.methodSignature("failStateTransition", [["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("getData", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("getDecision", [], [/* @__PURE__ */ $.pointerType("shared.Decision")]), $.methodSignature("getID", [], ["internal.decisionID"]), $.methodSignature("getState", [], [/* @__PURE__ */ $.basicType("int32", "internal.decisionState")]), $.methodSignature("handleCancelFailedEvent"), $.methodSignature("handleCancelInitiatedEvent"), $.methodSignature("handleCanceledEvent"), $.methodSignature("handleDecisionSent"), $.methodSignature("handleInitiationFailedEvent"), $.methodSignature("handleStartedEvent"), $.methodSignature("isDone", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("moveState", [["newState", /* @__PURE__ */ $.basicType("int32", "internal.decisionState")], ["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("setData", [["data", { kind: $.TypeKind.Interface, methods: [] }]])],
		signalExternalWorkflowDecisionStateMachine,
		() => [/* @__PURE__ */ $.structField("naiveDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.naiveDecisionStateMachine"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true })]
	)
}

export class markerDecisionStateMachine {
	public get naiveDecisionStateMachine(): naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null {
		return this._fields.naiveDecisionStateMachine
	}

	public set naiveDecisionStateMachine(value: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null) {
		this._fields.naiveDecisionStateMachine = value
	}

	public _fields: {
		naiveDecisionStateMachine: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null
	}

	constructor(init?: Partial<{naiveDecisionStateMachine?: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			naiveDecisionStateMachine: init?.naiveDecisionStateMachine ?? (null! as naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): markerDecisionStateMachine {
		return new markerDecisionStateMachine(this, true)
	}

	public __goscriptAssign(source: markerDecisionStateMachine): void {
		const target = this._fields
		const values = source._fields
		target.naiveDecisionStateMachine = values.naiveDecisionStateMachine
	}

	public handleDecisionSent(): void {
		const d: markerDecisionStateMachine | $.VarRef<markerDecisionStateMachine> | null = this;
		// Marker decision state machine is considered as completed once decision is sent.
		// For SideEffect/Version markers, when the history event is applied, there is no marker decision state machine yet
		// because we preload those marker events.
		// For local activity, when we apply the history event, we use it to create the marker state machine, there is no
		// other event to drive it to completed state.
		switch ($.pointerValue<decisionStateMachineBase>($.pointerValue<naiveDecisionStateMachine>($.pointerValue<markerDecisionStateMachine>(d).naiveDecisionStateMachine).decisionStateMachineBase).state) {
			case 0:
			{
				$.pointerValue<decisionStateMachineBase>($.pointerValue<naiveDecisionStateMachine>($.pointerValue<markerDecisionStateMachine>(d).naiveDecisionStateMachine).decisionStateMachineBase).moveState(9, "handleDecisionSent")
				break
			}
		}
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).String()
	}

	public cancel(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).cancel()
	}

	public async failStateTransition(event: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).failStateTransition(event)
	}

	public getData(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).getData()
	}

	public getDecision(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).getDecision()
	}

	public getID(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).getID()
	}

	public getState(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).getState()
	}

	public handleCancelFailedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleCancelFailedEvent()
	}

	public handleCancelInitiatedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleCancelInitiatedEvent()
	}

	public handleCanceledEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleCanceledEvent()
	}

	public handleCompletionEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleCompletionEvent()
	}

	public handleInitiatedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleInitiatedEvent()
	}

	public handleInitiationFailedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleInitiationFailedEvent()
	}

	public handleStartedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleStartedEvent()
	}

	public isDone(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).isDone()
	}

	public moveState(newState: any, event: any): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).moveState(newState, event)
	}

	public setData(data: any): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).setData(data)
	}

	static __typeInfo = $.registerStructType(
		"internal.markerDecisionStateMachine",
		() => new markerDecisionStateMachine(),
		() => [$.methodSignature("handleDecisionSent", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("cancel"), $.methodSignature("failStateTransition", [["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("getData", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("getDecision", [], [/* @__PURE__ */ $.pointerType("shared.Decision")]), $.methodSignature("getID", [], ["internal.decisionID"]), $.methodSignature("getState", [], [/* @__PURE__ */ $.basicType("int32", "internal.decisionState")]), $.methodSignature("handleCancelFailedEvent"), $.methodSignature("handleCancelInitiatedEvent"), $.methodSignature("handleCanceledEvent"), $.methodSignature("handleCompletionEvent"), $.methodSignature("handleInitiatedEvent"), $.methodSignature("handleInitiationFailedEvent"), $.methodSignature("handleStartedEvent"), $.methodSignature("isDone", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("moveState", [["newState", /* @__PURE__ */ $.basicType("int32", "internal.decisionState")], ["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("setData", [["data", { kind: $.TypeKind.Interface, methods: [] }]])],
		markerDecisionStateMachine,
		() => [/* @__PURE__ */ $.structField("naiveDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.naiveDecisionStateMachine"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true })]
	)
}

export class upsertSearchAttributesDecisionStateMachine {
	public get naiveDecisionStateMachine(): naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null {
		return this._fields.naiveDecisionStateMachine
	}

	public set naiveDecisionStateMachine(value: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null) {
		this._fields.naiveDecisionStateMachine = value
	}

	public _fields: {
		naiveDecisionStateMachine: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null
	}

	constructor(init?: Partial<{naiveDecisionStateMachine?: naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			naiveDecisionStateMachine: init?.naiveDecisionStateMachine ?? (null! as naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): upsertSearchAttributesDecisionStateMachine {
		return new upsertSearchAttributesDecisionStateMachine(this, true)
	}

	public __goscriptAssign(source: upsertSearchAttributesDecisionStateMachine): void {
		const target = this._fields
		const values = source._fields
		target.naiveDecisionStateMachine = values.naiveDecisionStateMachine
	}

	public handleDecisionSent(): void {
		const d: upsertSearchAttributesDecisionStateMachine | $.VarRef<upsertSearchAttributesDecisionStateMachine> | null = this;
		// This decision is considered as completed once decision is sent.
		switch ($.pointerValue<decisionStateMachineBase>($.pointerValue<naiveDecisionStateMachine>($.pointerValue<upsertSearchAttributesDecisionStateMachine>(d).naiveDecisionStateMachine).decisionStateMachineBase).state) {
			case 0:
			{
				$.pointerValue<decisionStateMachineBase>($.pointerValue<naiveDecisionStateMachine>($.pointerValue<upsertSearchAttributesDecisionStateMachine>(d).naiveDecisionStateMachine).decisionStateMachineBase).moveState(9, "handleDecisionSent")
				break
			}
		}
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).String()
	}

	public cancel(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).cancel()
	}

	public async failStateTransition(event: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).failStateTransition(event)
	}

	public getData(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).getData()
	}

	public getDecision(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).getDecision()
	}

	public getID(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).getID()
	}

	public getState(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).getState()
	}

	public handleCancelFailedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleCancelFailedEvent()
	}

	public handleCancelInitiatedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleCancelInitiatedEvent()
	}

	public handleCanceledEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleCanceledEvent()
	}

	public handleCompletionEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleCompletionEvent()
	}

	public handleInitiatedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleInitiatedEvent()
	}

	public handleInitiationFailedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleInitiationFailedEvent()
	}

	public handleStartedEvent(): any {
		return $.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).handleStartedEvent()
	}

	public isDone(): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).isDone()
	}

	public moveState(newState: any, event: any): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).moveState(newState, event)
	}

	public setData(data: any): any {
		return $.pointerValue<any>($.pointerValue<naiveDecisionStateMachine>(this.naiveDecisionStateMachine).decisionStateMachineBase).setData(data)
	}

	static __typeInfo = $.registerStructType(
		"internal.upsertSearchAttributesDecisionStateMachine",
		() => new upsertSearchAttributesDecisionStateMachine(),
		() => [$.methodSignature("handleDecisionSent", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("cancel"), $.methodSignature("failStateTransition", [["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("getData", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("getDecision", [], [/* @__PURE__ */ $.pointerType("shared.Decision")]), $.methodSignature("getID", [], ["internal.decisionID"]), $.methodSignature("getState", [], [/* @__PURE__ */ $.basicType("int32", "internal.decisionState")]), $.methodSignature("handleCancelFailedEvent"), $.methodSignature("handleCancelInitiatedEvent"), $.methodSignature("handleCanceledEvent"), $.methodSignature("handleCompletionEvent"), $.methodSignature("handleInitiatedEvent"), $.methodSignature("handleInitiationFailedEvent"), $.methodSignature("handleStartedEvent"), $.methodSignature("isDone", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("moveState", [["newState", /* @__PURE__ */ $.basicType("int32", "internal.decisionState")], ["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("setData", [["data", { kind: $.TypeKind.Interface, methods: [] }]])],
		upsertSearchAttributesDecisionStateMachine,
		() => [/* @__PURE__ */ $.structField("naiveDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.naiveDecisionStateMachine"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true })]
	)
}

export class decisionsHelper {
	public get orderedDecisions(): list.List | $.VarRef<list.List> | null {
		return this._fields.orderedDecisions
	}

	public set orderedDecisions(value: list.List | $.VarRef<list.List> | null) {
		this._fields.orderedDecisions = value
	}

	public get decisions(): globalThis.Map<decisionID, list.Element | $.VarRef<list.Element> | null> | null {
		return this._fields.decisions
	}

	public set decisions(value: globalThis.Map<decisionID, list.Element | $.VarRef<list.Element> | null> | null) {
		this._fields.decisions = value
	}

	public get scheduledEventIDToActivityID(): globalThis.Map<bigint, string> | null {
		return this._fields.scheduledEventIDToActivityID
	}

	public set scheduledEventIDToActivityID(value: globalThis.Map<bigint, string> | null) {
		this._fields.scheduledEventIDToActivityID = value
	}

	public get scheduledEventIDToCancellationID(): globalThis.Map<bigint, string> | null {
		return this._fields.scheduledEventIDToCancellationID
	}

	public set scheduledEventIDToCancellationID(value: globalThis.Map<bigint, string> | null) {
		this._fields.scheduledEventIDToCancellationID = value
	}

	public get scheduledEventIDToSignalID(): globalThis.Map<bigint, string> | null {
		return this._fields.scheduledEventIDToSignalID
	}

	public set scheduledEventIDToSignalID(value: globalThis.Map<bigint, string> | null) {
		this._fields.scheduledEventIDToSignalID = value
	}

	public _fields: {
		orderedDecisions: list.List | $.VarRef<list.List> | null
		decisions: globalThis.Map<decisionID, list.Element | $.VarRef<list.Element> | null> | null
		scheduledEventIDToActivityID: globalThis.Map<bigint, string> | null
		scheduledEventIDToCancellationID: globalThis.Map<bigint, string> | null
		scheduledEventIDToSignalID: globalThis.Map<bigint, string> | null
	}

	constructor(init?: Partial<{orderedDecisions?: list.List | $.VarRef<list.List> | null, decisions?: globalThis.Map<decisionID, list.Element | $.VarRef<list.Element> | null> | null, scheduledEventIDToActivityID?: globalThis.Map<bigint, string> | null, scheduledEventIDToCancellationID?: globalThis.Map<bigint, string> | null, scheduledEventIDToSignalID?: globalThis.Map<bigint, string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			orderedDecisions: init?.orderedDecisions ?? (null! as list.List | $.VarRef<list.List> | null),
			decisions: init?.decisions ?? (null! as globalThis.Map<decisionID, list.Element | $.VarRef<list.Element> | null> | null),
			scheduledEventIDToActivityID: init?.scheduledEventIDToActivityID ?? (null! as globalThis.Map<bigint, string> | null),
			scheduledEventIDToCancellationID: init?.scheduledEventIDToCancellationID ?? (null! as globalThis.Map<bigint, string> | null),
			scheduledEventIDToSignalID: init?.scheduledEventIDToSignalID ?? (null! as globalThis.Map<bigint, string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decisionsHelper {
		return new decisionsHelper(this, true)
	}

	public __goscriptAssign(source: decisionsHelper): void {
		const target = this._fields
		const values = source._fields
		target.orderedDecisions = values.orderedDecisions
		target.decisions = values.decisions
		target.scheduledEventIDToActivityID = values.scheduledEventIDToActivityID
		target.scheduledEventIDToCancellationID = values.scheduledEventIDToCancellationID
		target.scheduledEventIDToSignalID = values.scheduledEventIDToSignalID
	}

	public async addDecision(decision: decisionStateMachine | null): globalThis.Promise<void> {
		let h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		const h$: decisionsHelper = h == null ? $.pointerTarget<decisionsHelper>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<decisionsHelper>(h)
		{
			let [, ok] = $.mapGet<decisionID, list.Element | $.VarRef<list.Element> | null, list.Element | $.VarRef<list.Element> | null>((h$ as decisionsHelper).decisions, ((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).getID(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as decisionID), null)
			if (ok) {
				let panicMsg = await fmt.Sprintf("adding duplicate decision %v", (decision as any))
				panicIllegalState(panicMsg)
			}
		}
		let element: list.Element | $.VarRef<list.Element> | null = list.List.prototype.PushBack.call((h$ as decisionsHelper).orderedDecisions, (decision as any))
		$.mapSet((h$ as decisionsHelper).decisions, (((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).getID(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as decisionID)).clone(), element)
	}

	public async cancelTimer(timerID: string): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(4, timerID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(4, timerID)))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).cancel(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return decision
	}

	public async getActivityID(event: s.HistoryEvent | $.VarRef<s.HistoryEvent> | null): globalThis.Promise<string> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		const event$: s.HistoryEvent = event == null ? $.pointerTarget<s.HistoryEvent>(event) : (event as any).__isVarRef === true ? (event as any).value : (event as any).__goValue === undefined ? (event as any) : $.pointerTarget<s.HistoryEvent>(event)
		let scheduledEventID: bigint = -1n
		switch ((event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(event))) {
			case s.EventTypeActivityTaskCanceled:
			{
				scheduledEventID = s.ActivityTaskCanceledEventAttributes.prototype.GetScheduledEventId.call((event$ as s.HistoryEvent).ActivityTaskCanceledEventAttributes)
				break
			}
			case s.EventTypeActivityTaskCompleted:
			{
				scheduledEventID = s.ActivityTaskCompletedEventAttributes.prototype.GetScheduledEventId.call((event$ as s.HistoryEvent).ActivityTaskCompletedEventAttributes)
				break
			}
			case s.EventTypeActivityTaskFailed:
			{
				scheduledEventID = s.ActivityTaskFailedEventAttributes.prototype.GetScheduledEventId.call((event$ as s.HistoryEvent).ActivityTaskFailedEventAttributes)
				break
			}
			case s.EventTypeActivityTaskTimedOut:
			{
				scheduledEventID = s.ActivityTaskTimedOutEventAttributes.prototype.GetScheduledEventId.call((event$ as s.HistoryEvent).ActivityTaskTimedOutEventAttributes)
				break
			}
			default:
			{
				panicIllegalState(await fmt.Sprintf("unexpected event type %v", $.namedValueInterfaceValue<any>((event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(event)), "shared.EventType", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic7())))
				break
			}
		}

		let [activityID, ok] = $.mapGet<bigint, string, string>($.pointerValue<decisionsHelper>(h).scheduledEventIDToActivityID, scheduledEventID, "")
		if (!ok) {
			panicIllegalState(await fmt.Sprintf("unable to find activity ID for the event %v", await util.HistoryEventToString(event)))
		}
		return activityID
	}

	public async getDecision(id: decisionID): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		const h$: decisionsHelper = h == null ? $.pointerTarget<decisionsHelper>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<decisionsHelper>(h)
		let __goscriptTuple1: any = $.mapGet<decisionID, list.Element | $.VarRef<list.Element> | null, list.Element | $.VarRef<list.Element> | null>((h$ as decisionsHelper).decisions, id, null)
		let decision: list.Element | $.VarRef<list.Element> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (!ok) {
			let panicMsg = await fmt.Sprintf($.concatString("unknown decision %v, possible causes are nondeterministic workflow definition code", " or incompatible change in the workflow definition"), $.interfaceValue((id).clone(), "internal.decisionID", "internal.decisionID"))
			panicIllegalState(panicMsg)
		}
		// Move the last update decision state machine to the back of the list.
		// Otherwise decisions (like timer cancellations) can end up out of order.
		list.List.prototype.MoveToBack.call((h$ as decisionsHelper).orderedDecisions, decision)
		return $.mustTypeAssert<decisionStateMachine | null>($.pointerValue<list.Element>(decision).Value, "internal.decisionStateMachine")
	}

	public getDecisions(markAsSent: boolean): $.Slice<s.Decision | $.VarRef<s.Decision> | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		const h$: decisionsHelper = h == null ? $.pointerTarget<decisionsHelper>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<decisionsHelper>(h)
		let result: $.Slice<s.Decision | $.VarRef<s.Decision> | null> = null! as $.Slice<s.Decision | $.VarRef<s.Decision> | null>
		for (let curr: list.Element | $.VarRef<list.Element> | null = list.List.prototype.Front.call((h$ as decisionsHelper).orderedDecisions); curr != null; ) {
			let next: list.Element | $.VarRef<list.Element> | null = (curr !== null && (curr as any).__isVarRef !== true && (curr as any).__goValue === undefined ? ((curr as any) as list.Element).Next() : list.Element.prototype.Next.call(curr))
			let d = $.mustTypeAssert<decisionStateMachine | null>($.pointerValue<list.Element>(curr).Value, "internal.decisionStateMachine")
			let decision: s.Decision | $.VarRef<s.Decision> | null = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(d)).getDecision()
			if (decision != null) {
				result = $.appendOne(result, decision, $.appendZeros.nil)
			}

			if (markAsSent) {
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(d)).handleDecisionSent()
			}

			// remove completed decision state machines
			if ((d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(d)).getState() == 9) {
				list.List.prototype.Remove.call((h$ as decisionsHelper).orderedDecisions, curr)
				$.deleteMapEntry((h$ as decisionsHelper).decisions, ((d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(d)).getID()).clone())
			}

			curr = next
		}

		return result
	}

	public async getSignalID(initiatedEventID: bigint): globalThis.Promise<string> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let [signalID, ok] = $.mapGet<bigint, string, string>($.pointerValue<decisionsHelper>(h).scheduledEventIDToSignalID, initiatedEventID, "")
		if (!ok) {
			$.panic(await fmt.Sprintf("unable to find signal ID: %v", $.basicInterfaceValue(initiatedEventID, "int64")))
		}
		return signalID
	}

	public async handleActivityTaskCancelRequested(activityID: string): globalThis.Promise<void> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(0, activityID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(0, activityID)))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleCancelInitiatedEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async handleActivityTaskCanceled(activityID: string): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(0, activityID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(0, activityID)))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleCanceledEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return decision
	}

	public async handleActivityTaskClosed(activityID: string): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(0, activityID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(0, activityID)))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleCompletionEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return decision
	}

	public async handleActivityTaskScheduled(scheduledEventID: bigint, activityID: string): globalThis.Promise<void> {
		let h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		$.mapSet($.pointerValue<decisionsHelper>(h).scheduledEventIDToActivityID, scheduledEventID, activityID)
		let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(0, activityID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(0, activityID)))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleInitiatedEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async handleCancelTimerFailed(timerID: string): globalThis.Promise<void> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(4, timerID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(4, timerID)))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleCancelFailedEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async handleChildWorkflowExecutionCanceled(workflowID: string): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(1, workflowID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(1, workflowID)))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleCanceledEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return decision
	}

	public async handleChildWorkflowExecutionClosed(workflowID: string): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(1, workflowID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(1, workflowID)))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleCompletionEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return decision
	}

	public async handleChildWorkflowExecutionStarted(workflowID: string): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(1, workflowID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(1, workflowID)))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleStartedEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return decision
	}

	public async handleExternalWorkflowExecutionCancelRequested(initiatedeventID: bigint, workflowID: string): globalThis.Promise<[boolean, decisionStateMachine | null]> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision: decisionStateMachine | null = null! as decisionStateMachine | null
		let [cancellationID, isExternal] = $.mapGet<bigint, string, string>($.pointerValue<decisionsHelper>(h).scheduledEventIDToCancellationID, initiatedeventID, "")
		if (!isExternal) {
			decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(1, workflowID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(1, workflowID)))
		} else {
			// this is cancellation for external workflow
			decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(2, cancellationID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(2, cancellationID)))
			void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleCompletionEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [isExternal, decision]
	}

	public async handleRequestCancelActivityTaskFailed(activityID: string): globalThis.Promise<void> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(0, activityID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(0, activityID)))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleCancelFailedEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async handleRequestCancelExternalWorkflowExecutionFailed(initiatedeventID: bigint, workflowID: string): globalThis.Promise<[boolean, decisionStateMachine | null]> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision: decisionStateMachine | null = null! as decisionStateMachine | null
		let [cancellationID, isExternal] = $.mapGet<bigint, string, string>($.pointerValue<decisionsHelper>(h).scheduledEventIDToCancellationID, initiatedeventID, "")
		if (!isExternal) {
			// this is cancellation for child workflow only
			decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(1, workflowID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(1, workflowID)))
			void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleCancelFailedEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			// this is cancellation for external workflow
			decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(2, cancellationID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(2, cancellationID)))
			void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleCompletionEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [isExternal, decision]
	}

	public async handleRequestCancelExternalWorkflowExecutionInitiated(initiatedeventID: bigint, workflowID: string, cancellationID: string): globalThis.Promise<void> {
		let h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		if ((h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).isCancelExternalWorkflowEventForChildWorkflow(cancellationID) : decisionsHelper.prototype.isCancelExternalWorkflowEventForChildWorkflow.call(h, cancellationID))) {
			// this is cancellation for child workflow only
			let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(1, workflowID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(1, workflowID)))
			void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleCancelInitiatedEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			// this is cancellation for external workflow
			$.mapSet($.pointerValue<decisionsHelper>(h).scheduledEventIDToCancellationID, initiatedeventID, cancellationID)
			let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(2, cancellationID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(2, cancellationID)))
			void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleInitiatedEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async handleSignalExternalWorkflowExecutionCompleted(initiatedEventID: bigint): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision = await decisionsHelper.prototype.getDecision.call(h, makeDecisionID(5, await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getSignalID(initiatedEventID) : decisionsHelper.prototype.getSignalID.call(h, initiatedEventID))))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleCompletionEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return decision
	}

	public async handleSignalExternalWorkflowExecutionFailed(initiatedEventID: bigint): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision = await decisionsHelper.prototype.getDecision.call(h, makeDecisionID(5, await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getSignalID(initiatedEventID) : decisionsHelper.prototype.getSignalID.call(h, initiatedEventID))))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleCompletionEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return decision
	}

	public async handleSignalExternalWorkflowExecutionInitiated(initiatedEventID: bigint, signalID: string): globalThis.Promise<void> {
		let h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		$.mapSet($.pointerValue<decisionsHelper>(h).scheduledEventIDToSignalID, initiatedEventID, signalID)
		let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(5, signalID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(5, signalID)))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleInitiatedEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async handleStartChildWorkflowExecutionFailed(workflowID: string): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(1, workflowID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(1, workflowID)))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleInitiationFailedEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return decision
	}

	public async handleStartChildWorkflowExecutionInitiated(workflowID: string): globalThis.Promise<void> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(1, workflowID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(1, workflowID)))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleInitiatedEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async handleTimerCanceled(timerID: string): globalThis.Promise<void> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(4, timerID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(4, timerID)))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleCanceledEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async handleTimerClosed(timerID: string): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(4, timerID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(4, timerID)))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleCompletionEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return decision
	}

	public async handleTimerStarted(timerID: string): globalThis.Promise<void> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(4, timerID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(4, timerID)))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).handleInitiatedEvent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public isCancelExternalWorkflowEventForChildWorkflow(cancellationID: string): boolean {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		// the cancellationID, i.e. Control in RequestCancelExternalWorkflowExecutionInitiatedEventAttributes
		// will be empty if the event is for child workflow.
		// for cancellation external workflow, Control in RequestCancelExternalWorkflowExecutionInitiatedEventAttributes
		// will have a client generated sequence ID
		return $.stringLen(cancellationID) == 0
	}

	public newActivityDecisionStateMachine(attributes: s.ScheduleActivityTaskDecisionAttributes | $.VarRef<s.ScheduleActivityTaskDecisionAttributes> | null): activityDecisionStateMachine | $.VarRef<activityDecisionStateMachine> | null {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let base: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = decisionsHelper.prototype.newDecisionStateMachineBase.call(h, 0, (attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as s.ScheduleActivityTaskDecisionAttributes).GetActivityId() : s.ScheduleActivityTaskDecisionAttributes.prototype.GetActivityId.call(attributes)))
		return new activityDecisionStateMachine({decisionStateMachineBase: base, attributes: attributes})
	}

	public newCancelExternalWorkflowStateMachine(attributes: s.RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<s.RequestCancelExternalWorkflowExecutionDecisionAttributes> | null, cancellationID: string): cancelExternalWorkflowDecisionStateMachine | $.VarRef<cancelExternalWorkflowDecisionStateMachine> | null {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let d: s.Decision | $.VarRef<s.Decision> | null = __goscript_internal_task_handlers.createNewDecision(7)
		$.pointerValue<s.Decision>(d).RequestCancelExternalWorkflowExecutionDecisionAttributes = attributes
		return (() => { const __goscriptLiteralField1 = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).newNaiveDecisionStateMachine(2, cancellationID, d) : decisionsHelper.prototype.newNaiveDecisionStateMachine.call(h, 2, cancellationID, d)); return new cancelExternalWorkflowDecisionStateMachine({naiveDecisionStateMachine: __goscriptLiteralField1}) })()
	}

	public newChildWorkflowDecisionStateMachine(attributes: s.StartChildWorkflowExecutionDecisionAttributes | $.VarRef<s.StartChildWorkflowExecutionDecisionAttributes> | null): childWorkflowDecisionStateMachine | $.VarRef<childWorkflowDecisionStateMachine> | null {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let base: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = decisionsHelper.prototype.newDecisionStateMachineBase.call(h, 1, (attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as s.StartChildWorkflowExecutionDecisionAttributes).GetWorkflowId() : s.StartChildWorkflowExecutionDecisionAttributes.prototype.GetWorkflowId.call(attributes)))
		return new childWorkflowDecisionStateMachine({decisionStateMachineBase: base, attributes: attributes})
	}

	public newDecisionStateMachineBase(decisionType: decisionType, id: string): decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		return (() => { const __goscriptLiteralField2 = makeDecisionID(decisionType, id); return new decisionStateMachineBase({id: __goscriptLiteralField2, state: 0, history: $.arrayToSlice<string>([decisionState_String(0)]), helper: h}) })()
	}

	public newMarkerDecisionStateMachine(id: string, attributes: s.RecordMarkerDecisionAttributes | $.VarRef<s.RecordMarkerDecisionAttributes> | null): markerDecisionStateMachine | $.VarRef<markerDecisionStateMachine> | null {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let d: s.Decision | $.VarRef<s.Decision> | null = __goscript_internal_task_handlers.createNewDecision(8)
		$.pointerValue<s.Decision>(d).RecordMarkerDecisionAttributes = attributes
		return (() => { const __goscriptLiteralField3 = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).newNaiveDecisionStateMachine(3, id, d) : decisionsHelper.prototype.newNaiveDecisionStateMachine.call(h, 3, id, d)); return new markerDecisionStateMachine({naiveDecisionStateMachine: __goscriptLiteralField3}) })()
	}

	public newNaiveDecisionStateMachine(decisionType: decisionType, id: string, decision: s.Decision | $.VarRef<s.Decision> | null): naiveDecisionStateMachine | $.VarRef<naiveDecisionStateMachine> | null {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let base: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).newDecisionStateMachineBase(decisionType, id) : decisionsHelper.prototype.newDecisionStateMachineBase.call(h, decisionType, id))
		return new naiveDecisionStateMachine({decisionStateMachineBase: base, decision: decision})
	}

	public newSignalExternalWorkflowStateMachine(attributes: s.SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<s.SignalExternalWorkflowExecutionDecisionAttributes> | null, signalID: string): signalExternalWorkflowDecisionStateMachine | $.VarRef<signalExternalWorkflowDecisionStateMachine> | null {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let d: s.Decision | $.VarRef<s.Decision> | null = __goscript_internal_task_handlers.createNewDecision(11)
		$.pointerValue<s.Decision>(d).SignalExternalWorkflowExecutionDecisionAttributes = attributes
		return (() => { const __goscriptLiteralField4 = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).newNaiveDecisionStateMachine(5, signalID, d) : decisionsHelper.prototype.newNaiveDecisionStateMachine.call(h, 5, signalID, d)); return new signalExternalWorkflowDecisionStateMachine({naiveDecisionStateMachine: __goscriptLiteralField4}) })()
	}

	public newTimerDecisionStateMachine(attributes: s.StartTimerDecisionAttributes | $.VarRef<s.StartTimerDecisionAttributes> | null): timerDecisionStateMachine | $.VarRef<timerDecisionStateMachine> | null {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let base: decisionStateMachineBase | $.VarRef<decisionStateMachineBase> | null = decisionsHelper.prototype.newDecisionStateMachineBase.call(h, 4, (attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as s.StartTimerDecisionAttributes).GetTimerId() : s.StartTimerDecisionAttributes.prototype.GetTimerId.call(attributes)))
		return new timerDecisionStateMachine({decisionStateMachineBase: base, attributes: attributes})
	}

	public newUpsertSearchAttributesStateMachine(attributes: s.UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<s.UpsertWorkflowSearchAttributesDecisionAttributes> | null, upsertID: string): upsertSearchAttributesDecisionStateMachine | $.VarRef<upsertSearchAttributesDecisionStateMachine> | null {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let d: s.Decision | $.VarRef<s.Decision> | null = __goscript_internal_task_handlers.createNewDecision(12)
		$.pointerValue<s.Decision>(d).UpsertWorkflowSearchAttributesDecisionAttributes = attributes
		return (() => { const __goscriptLiteralField5 = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).newNaiveDecisionStateMachine(6, upsertID, d) : decisionsHelper.prototype.newNaiveDecisionStateMachine.call(h, 6, upsertID, d)); return new upsertSearchAttributesDecisionStateMachine({naiveDecisionStateMachine: __goscriptLiteralField5}) })()
	}

	public async recordLocalActivityMarker(activityID: string, result: $.Slice<number>): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let markerID = await fmt.Sprintf("%v_%v", "LocalActivity", activityID)
		let attributes: s.RecordMarkerDecisionAttributes | $.VarRef<s.RecordMarkerDecisionAttributes> | null = (() => { const __goscriptLiteralField6 = common.StringPtr("LocalActivity"); return new s.RecordMarkerDecisionAttributes({MarkerName: __goscriptLiteralField6, Details: result}) })()
		let decision: markerDecisionStateMachine | $.VarRef<markerDecisionStateMachine> | null = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).newMarkerDecisionStateMachine(markerID, attributes) : decisionsHelper.prototype.newMarkerDecisionStateMachine.call(h, markerID, attributes))
		await decisionsHelper.prototype.addDecision.call(h, $.interfaceValue<decisionStateMachine | null>(decision, "*internal.markerDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.markerDecisionStateMachine")))
		return $.interfaceValue<decisionStateMachine | null>(decision, "*internal.markerDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.markerDecisionStateMachine"))
	}

	public async recordMutableSideEffectMarker(mutableSideEffectID: string, data: $.Slice<number>): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let markerID = await fmt.Sprintf("%v_%v", "MutableSideEffect", mutableSideEffectID)
		let attributes: s.RecordMarkerDecisionAttributes | $.VarRef<s.RecordMarkerDecisionAttributes> | null = (() => { const __goscriptLiteralField7 = common.StringPtr("MutableSideEffect"); return new s.RecordMarkerDecisionAttributes({MarkerName: __goscriptLiteralField7, Details: data}) })()
		let decision: markerDecisionStateMachine | $.VarRef<markerDecisionStateMachine> | null = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).newMarkerDecisionStateMachine(markerID, attributes) : decisionsHelper.prototype.newMarkerDecisionStateMachine.call(h, markerID, attributes))
		await decisionsHelper.prototype.addDecision.call(h, $.interfaceValue<decisionStateMachine | null>(decision, "*internal.markerDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.markerDecisionStateMachine")))
		return $.interfaceValue<decisionStateMachine | null>(decision, "*internal.markerDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.markerDecisionStateMachine"))
	}

	public async recordSideEffectMarker(sideEffectID: number, data: $.Slice<number>): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let markerID = await fmt.Sprintf("%v_%v", "SideEffect", $.basicInterfaceValue(sideEffectID, "int32"))
		let attributes: s.RecordMarkerDecisionAttributes | $.VarRef<s.RecordMarkerDecisionAttributes> | null = (() => { const __goscriptLiteralField8 = common.StringPtr("SideEffect"); return new s.RecordMarkerDecisionAttributes({MarkerName: __goscriptLiteralField8, Details: data}) })()
		let decision: markerDecisionStateMachine | $.VarRef<markerDecisionStateMachine> | null = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).newMarkerDecisionStateMachine(markerID, attributes) : decisionsHelper.prototype.newMarkerDecisionStateMachine.call(h, markerID, attributes))
		await decisionsHelper.prototype.addDecision.call(h, $.interfaceValue<decisionStateMachine | null>(decision, "*internal.markerDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.markerDecisionStateMachine")))
		return $.interfaceValue<decisionStateMachine | null>(decision, "*internal.markerDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.markerDecisionStateMachine"))
	}

	public async recordVersionMarker(changeID: string, version: __goscript_workflow.Version, dataConverter: __goscript_encoded.DataConverter | null): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let markerID = await fmt.Sprintf("%v_%v", "Version", changeID)
		let __goscriptTuple2: any = await __goscript_internal_worker.encodeArgs(dataConverter, $.arrayToSlice<any>([changeID, $.namedValueInterfaceValue<any>(version, "internal.Version", {}, /* @__PURE__ */ $.basicType("int", "internal.Version"))]))
		let details: $.Slice<number> = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			$.panic((err as any))
		}

		let recordMarker: s.RecordMarkerDecisionAttributes | $.VarRef<s.RecordMarkerDecisionAttributes> | null = (() => { const __goscriptLiteralField9 = common.StringPtr("Version"); return new s.RecordMarkerDecisionAttributes({MarkerName: __goscriptLiteralField9, Details: details}) })()

		let decision: markerDecisionStateMachine | $.VarRef<markerDecisionStateMachine> | null = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).newMarkerDecisionStateMachine(markerID, recordMarker) : decisionsHelper.prototype.newMarkerDecisionStateMachine.call(h, markerID, recordMarker))
		await decisionsHelper.prototype.addDecision.call(h, $.interfaceValue<decisionStateMachine | null>(decision, "*internal.markerDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.markerDecisionStateMachine")))
		return $.interfaceValue<decisionStateMachine | null>(decision, "*internal.markerDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.markerDecisionStateMachine"))
	}

	public async requestCancelActivityTask(activityID: string): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let id = makeDecisionID(0, activityID)
		let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(id) : decisionsHelper.prototype.getDecision.call(h, id))
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).cancel(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return decision
	}

	public async requestCancelExternalWorkflowExecution(domain: string, workflowID: string, runID: string, cancellationID: string, childWorkflowOnly: boolean): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		if (childWorkflowOnly) {
			// For cancellation of child workflow only, we do not use cancellation ID
			// since the child workflow cancellation go through the existing child workflow
			// state machine, and we use workflow ID as identifier
			// we also do not use run ID, since child workflow can do continue-as-new
			// which will have different run ID
			// there will be server side validation that target workflow is child workflow

			// sanity check that cancellation ID is not set
			if ($.stringLen(cancellationID) != 0) {
				$.panic("cancellation on child workflow should not use cancellation ID")
			}
			// sanity check that run ID is not set
			if ($.stringLen(runID) != 0) {
				$.panic("cancellation on child workflow should not use run ID")
			}
			// targeting child workflow
			let decision = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).getDecision(makeDecisionID(1, workflowID)) : decisionsHelper.prototype.getDecision.call(h, makeDecisionID(1, workflowID)))
			void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<decisionStateMachine, null>) : $.pointerValue<Exclude<decisionStateMachine, null>>(decision)).cancel(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return decision
		}

		// For cancellation of external workflow, we have to use cancellation ID
		// to identify different cancellation request (decision) / response (history event)
		// client can also use this code path to cancel its own child workflow, however, there will
		// be no server side validation that target workflow is the child

		// sanity check that cancellation ID is set
		if ($.stringLen(cancellationID) == 0) {
			$.panic("cancellation on external workflow should use cancellation ID")
		}
		let attributes: s.RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<s.RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = (() => { const __goscriptLiteralField10 = common.StringPtr(domain); const __goscriptLiteralField11 = common.StringPtr(workflowID); const __goscriptLiteralField12 = common.StringPtr(runID); const __goscriptLiteralField13 = common.BoolPtr(false); return new s.RequestCancelExternalWorkflowExecutionDecisionAttributes({Domain: __goscriptLiteralField10, WorkflowId: __goscriptLiteralField11, RunId: __goscriptLiteralField12, Control: $.stringToBytes(cancellationID), ChildWorkflowOnly: __goscriptLiteralField13}) })()
		let decision: cancelExternalWorkflowDecisionStateMachine | $.VarRef<cancelExternalWorkflowDecisionStateMachine> | null = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).newCancelExternalWorkflowStateMachine(attributes, cancellationID) : decisionsHelper.prototype.newCancelExternalWorkflowStateMachine.call(h, attributes, cancellationID))
		await decisionsHelper.prototype.addDecision.call(h, $.interfaceValue<decisionStateMachine | null>(decision, "*internal.cancelExternalWorkflowDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.cancelExternalWorkflowDecisionStateMachine")))

		return $.interfaceValue<decisionStateMachine | null>(decision, "*internal.cancelExternalWorkflowDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.cancelExternalWorkflowDecisionStateMachine"))
	}

	public async scheduleActivityTask(attributes: s.ScheduleActivityTaskDecisionAttributes | $.VarRef<s.ScheduleActivityTaskDecisionAttributes> | null): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision: activityDecisionStateMachine | $.VarRef<activityDecisionStateMachine> | null = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).newActivityDecisionStateMachine(attributes) : decisionsHelper.prototype.newActivityDecisionStateMachine.call(h, attributes))
		await decisionsHelper.prototype.addDecision.call(h, $.interfaceValue<decisionStateMachine | null>(decision, "*internal.activityDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.activityDecisionStateMachine")))
		return $.interfaceValue<decisionStateMachine | null>(decision, "*internal.activityDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.activityDecisionStateMachine"))
	}

	public async signalExternalWorkflowExecution(domain: string, workflowID: string, runID: string, signalName: string, input: $.Slice<number>, signalID: string, childWorkflowOnly: boolean): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let attributes: s.SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<s.SignalExternalWorkflowExecutionDecisionAttributes> | null = (() => { const __goscriptLiteralField14 = common.StringPtr(domain); const __goscriptLiteralField17 = common.StringPtr(signalName); const __goscriptLiteralField18 = common.BoolPtr(childWorkflowOnly); return new s.SignalExternalWorkflowExecutionDecisionAttributes({Domain: __goscriptLiteralField14, Execution: (() => { const __goscriptLiteralField15 = common.StringPtr(workflowID); const __goscriptLiteralField16 = common.StringPtr(runID); return new s.WorkflowExecution({WorkflowId: __goscriptLiteralField15, RunId: __goscriptLiteralField16}) })(), SignalName: __goscriptLiteralField17, Input: input, Control: $.stringToBytes(signalID), ChildWorkflowOnly: __goscriptLiteralField18}) })()
		let decision: signalExternalWorkflowDecisionStateMachine | $.VarRef<signalExternalWorkflowDecisionStateMachine> | null = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).newSignalExternalWorkflowStateMachine(attributes, signalID) : decisionsHelper.prototype.newSignalExternalWorkflowStateMachine.call(h, attributes, signalID))
		await decisionsHelper.prototype.addDecision.call(h, $.interfaceValue<decisionStateMachine | null>(decision, "*internal.signalExternalWorkflowDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.signalExternalWorkflowDecisionStateMachine")))
		return $.interfaceValue<decisionStateMachine | null>(decision, "*internal.signalExternalWorkflowDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.signalExternalWorkflowDecisionStateMachine"))
	}

	public async startChildWorkflowExecution(attributes: s.StartChildWorkflowExecutionDecisionAttributes | $.VarRef<s.StartChildWorkflowExecutionDecisionAttributes> | null): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision: childWorkflowDecisionStateMachine | $.VarRef<childWorkflowDecisionStateMachine> | null = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).newChildWorkflowDecisionStateMachine(attributes) : decisionsHelper.prototype.newChildWorkflowDecisionStateMachine.call(h, attributes))
		await decisionsHelper.prototype.addDecision.call(h, $.interfaceValue<decisionStateMachine | null>(decision, "*internal.childWorkflowDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.childWorkflowDecisionStateMachine")))
		return $.interfaceValue<decisionStateMachine | null>(decision, "*internal.childWorkflowDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.childWorkflowDecisionStateMachine"))
	}

	public async startTimer(attributes: s.StartTimerDecisionAttributes | $.VarRef<s.StartTimerDecisionAttributes> | null): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let decision: timerDecisionStateMachine | $.VarRef<timerDecisionStateMachine> | null = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).newTimerDecisionStateMachine(attributes) : decisionsHelper.prototype.newTimerDecisionStateMachine.call(h, attributes))
		await decisionsHelper.prototype.addDecision.call(h, $.interfaceValue<decisionStateMachine | null>(decision, "*internal.timerDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.timerDecisionStateMachine")))
		return $.interfaceValue<decisionStateMachine | null>(decision, "*internal.timerDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.timerDecisionStateMachine"))
	}

	public async upsertSearchAttributes(upsertID: string, searchAttr: s.SearchAttributes | $.VarRef<s.SearchAttributes> | null): globalThis.Promise<decisionStateMachine | null> {
		const h: decisionsHelper | $.VarRef<decisionsHelper> | null = this;
		let attributes: s.UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<s.UpsertWorkflowSearchAttributesDecisionAttributes> | null = new s.UpsertWorkflowSearchAttributesDecisionAttributes({SearchAttributes: searchAttr})
		let decision: upsertSearchAttributesDecisionStateMachine | $.VarRef<upsertSearchAttributesDecisionStateMachine> | null = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as decisionsHelper).newUpsertSearchAttributesStateMachine(attributes, upsertID) : decisionsHelper.prototype.newUpsertSearchAttributesStateMachine.call(h, attributes, upsertID))
		await decisionsHelper.prototype.addDecision.call(h, $.interfaceValue<decisionStateMachine | null>(decision, "*internal.upsertSearchAttributesDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.upsertSearchAttributesDecisionStateMachine")))
		return $.interfaceValue<decisionStateMachine | null>(decision, "*internal.upsertSearchAttributesDecisionStateMachine", /* @__PURE__ */ $.pointerType("internal.upsertSearchAttributesDecisionStateMachine"))
	}

	static __typeInfo = $.registerStructType(
		"internal.decisionsHelper",
		() => new decisionsHelper(),
		() => [$.methodSignature("addDecision", [["decision", "internal.decisionStateMachine"]], [], true), $.methodSignature("cancelTimer", [["timerID", /* @__PURE__ */ $.basicType("string")]], ["internal.decisionStateMachine"], true), $.methodSignature("getActivityID", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("getDecision", [["id", "internal.decisionID"]], ["internal.decisionStateMachine"], true), $.methodSignature("getDecisions", [["markAsSent", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.Decision"))], true), $.methodSignature("getSignalID", [["initiatedEventID", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("handleActivityTaskCancelRequested", [["activityID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("handleActivityTaskCanceled", [["activityID", /* @__PURE__ */ $.basicType("string")]], ["internal.decisionStateMachine"], true), $.methodSignature("handleActivityTaskClosed", [["activityID", /* @__PURE__ */ $.basicType("string")]], ["internal.decisionStateMachine"], true), $.methodSignature("handleActivityTaskScheduled", [["scheduledEventID", /* @__PURE__ */ $.basicType("int64")], ["activityID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("handleCancelTimerFailed", [["timerID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("handleChildWorkflowExecutionCanceled", [["workflowID", /* @__PURE__ */ $.basicType("string")]], ["internal.decisionStateMachine"], true), $.methodSignature("handleChildWorkflowExecutionClosed", [["workflowID", /* @__PURE__ */ $.basicType("string")]], ["internal.decisionStateMachine"], true), $.methodSignature("handleChildWorkflowExecutionStarted", [["workflowID", /* @__PURE__ */ $.basicType("string")]], ["internal.decisionStateMachine"], true), $.methodSignature("handleExternalWorkflowExecutionCancelRequested", [["initiatedeventID", /* @__PURE__ */ $.basicType("int64")], ["workflowID", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool"), "internal.decisionStateMachine"], true), $.methodSignature("handleRequestCancelActivityTaskFailed", [["activityID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("handleRequestCancelExternalWorkflowExecutionFailed", [["initiatedeventID", /* @__PURE__ */ $.basicType("int64")], ["workflowID", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool"), "internal.decisionStateMachine"], true), $.methodSignature("handleRequestCancelExternalWorkflowExecutionInitiated", [["initiatedeventID", /* @__PURE__ */ $.basicType("int64")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["cancellationID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("handleSignalExternalWorkflowExecutionCompleted", [["initiatedEventID", /* @__PURE__ */ $.basicType("int64")]], ["internal.decisionStateMachine"], true), $.methodSignature("handleSignalExternalWorkflowExecutionFailed", [["initiatedEventID", /* @__PURE__ */ $.basicType("int64")]], ["internal.decisionStateMachine"], true), $.methodSignature("handleSignalExternalWorkflowExecutionInitiated", [["initiatedEventID", /* @__PURE__ */ $.basicType("int64")], ["signalID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("handleStartChildWorkflowExecutionFailed", [["workflowID", /* @__PURE__ */ $.basicType("string")]], ["internal.decisionStateMachine"], true), $.methodSignature("handleStartChildWorkflowExecutionInitiated", [["workflowID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("handleTimerCanceled", [["timerID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("handleTimerClosed", [["timerID", /* @__PURE__ */ $.basicType("string")]], ["internal.decisionStateMachine"], true), $.methodSignature("handleTimerStarted", [["timerID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("isCancelExternalWorkflowEventForChildWorkflow", [["cancellationID", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("newActivityDecisionStateMachine", [["attributes", /* @__PURE__ */ $.pointerType("shared.ScheduleActivityTaskDecisionAttributes")]], [/* @__PURE__ */ $.pointerType("internal.activityDecisionStateMachine")], true), $.methodSignature("newCancelExternalWorkflowStateMachine", [["attributes", /* @__PURE__ */ $.pointerType("shared.RequestCancelExternalWorkflowExecutionDecisionAttributes")], ["cancellationID", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("internal.cancelExternalWorkflowDecisionStateMachine")], true), $.methodSignature("newChildWorkflowDecisionStateMachine", [["attributes", /* @__PURE__ */ $.pointerType("shared.StartChildWorkflowExecutionDecisionAttributes")]], [/* @__PURE__ */ $.pointerType("internal.childWorkflowDecisionStateMachine")], true), $.methodSignature("newDecisionStateMachineBase", [["decisionType", /* @__PURE__ */ $.basicType("int32", "internal.decisionType")], ["id", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("internal.decisionStateMachineBase")], true), $.methodSignature("newMarkerDecisionStateMachine", [["id", /* @__PURE__ */ $.basicType("string")], ["attributes", /* @__PURE__ */ $.pointerType("shared.RecordMarkerDecisionAttributes")]], [/* @__PURE__ */ $.pointerType("internal.markerDecisionStateMachine")], true), $.methodSignature("newNaiveDecisionStateMachine", [["decisionType", /* @__PURE__ */ $.basicType("int32", "internal.decisionType")], ["id", /* @__PURE__ */ $.basicType("string")], ["decision", /* @__PURE__ */ $.pointerType("shared.Decision")]], [/* @__PURE__ */ $.pointerType("internal.naiveDecisionStateMachine")], true), $.methodSignature("newSignalExternalWorkflowStateMachine", [["attributes", /* @__PURE__ */ $.pointerType("shared.SignalExternalWorkflowExecutionDecisionAttributes")], ["signalID", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("internal.signalExternalWorkflowDecisionStateMachine")], true), $.methodSignature("newTimerDecisionStateMachine", [["attributes", /* @__PURE__ */ $.pointerType("shared.StartTimerDecisionAttributes")]], [/* @__PURE__ */ $.pointerType("internal.timerDecisionStateMachine")], true), $.methodSignature("newUpsertSearchAttributesStateMachine", [["attributes", /* @__PURE__ */ $.pointerType("shared.UpsertWorkflowSearchAttributesDecisionAttributes")], ["upsertID", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("internal.upsertSearchAttributesDecisionStateMachine")], true), $.methodSignature("recordLocalActivityMarker", [["activityID", /* @__PURE__ */ $.basicType("string")], ["result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["internal.decisionStateMachine"], true), $.methodSignature("recordMutableSideEffectMarker", [["mutableSideEffectID", /* @__PURE__ */ $.basicType("string")], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["internal.decisionStateMachine"], true), $.methodSignature("recordSideEffectMarker", [["sideEffectID", /* @__PURE__ */ $.basicType("int32")], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["internal.decisionStateMachine"], true), $.methodSignature("recordVersionMarker", [["changeID", /* @__PURE__ */ $.basicType("string")], ["version", /* @__PURE__ */ $.basicType("int", "internal.Version")], ["dataConverter", "internal.DataConverter"]], ["internal.decisionStateMachine"], true), $.methodSignature("requestCancelActivityTask", [["activityID", /* @__PURE__ */ $.basicType("string")]], ["internal.decisionStateMachine"], true), $.methodSignature("requestCancelExternalWorkflowExecution", [["domain", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["cancellationID", /* @__PURE__ */ $.basicType("string")], ["childWorkflowOnly", /* @__PURE__ */ $.basicType("bool")]], ["internal.decisionStateMachine"], true), $.methodSignature("scheduleActivityTask", [["attributes", /* @__PURE__ */ $.pointerType("shared.ScheduleActivityTaskDecisionAttributes")]], ["internal.decisionStateMachine"], true), $.methodSignature("signalExternalWorkflowExecution", [["domain", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["signalID", /* @__PURE__ */ $.basicType("string")], ["childWorkflowOnly", /* @__PURE__ */ $.basicType("bool")]], ["internal.decisionStateMachine"], true), $.methodSignature("startChildWorkflowExecution", [["attributes", /* @__PURE__ */ $.pointerType("shared.StartChildWorkflowExecutionDecisionAttributes")]], ["internal.decisionStateMachine"], true), $.methodSignature("startTimer", [["attributes", /* @__PURE__ */ $.pointerType("shared.StartTimerDecisionAttributes")]], ["internal.decisionStateMachine"], true), $.methodSignature("upsertSearchAttributes", [["upsertID", /* @__PURE__ */ $.basicType("string")], ["searchAttr", /* @__PURE__ */ $.pointerType("shared.SearchAttributes")]], ["internal.decisionStateMachine"], true)],
		decisionsHelper,
		() => [/* @__PURE__ */ $.structField("orderedDecisions", /* @__PURE__ */ $.pointerType("list.List"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("decisions", /* @__PURE__ */ $.mapType("internal.decisionID", /* @__PURE__ */ $.pointerType("list.Element")), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("scheduledEventIDToActivityID", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("string")), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("scheduledEventIDToCancellationID", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("string")), [3], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("scheduledEventIDToSignalID", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("string")), [4], 32, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class stateMachineIllegalStatePanic {
	public get message(): string {
		return this._fields.message
	}

	public set message(value: string) {
		this._fields.message = value
	}

	public _fields: {
		message: string
	}

	constructor(init?: Partial<{message?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			message: init?.message ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): stateMachineIllegalStatePanic {
		return new stateMachineIllegalStatePanic(this, true)
	}

	public __goscriptAssign(source: stateMachineIllegalStatePanic): void {
		const target = this._fields
		const values = source._fields
		target.message = values.message
	}

	public String(): string {
		const d = this;
		return d.message
	}

	static __typeInfo = $.registerStructType(
		"internal.stateMachineIllegalStatePanic",
		() => new stateMachineIllegalStatePanic(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		stateMachineIllegalStatePanic,
		() => [/* @__PURE__ */ $.structField("message", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export const decisionStateCreated: decisionState = 0

export const decisionStateDecisionSent: decisionState = 1

export const decisionStateCanceledBeforeInitiated: decisionState = 2

export const decisionStateInitiated: decisionState = 3

export const decisionStateStarted: decisionState = 4

export const decisionStateCanceledAfterInitiated: decisionState = 5

export const decisionStateCanceledAfterStarted: decisionState = 6

export const decisionStateCancellationDecisionSent: decisionState = 7

export const decisionStateCompletedAfterCancellationDecisionSent: decisionState = 8

export const decisionStateCompleted: decisionState = 9

export const decisionTypeActivity: decisionType = 0

export const decisionTypeChildWorkflow: decisionType = 1

export const decisionTypeCancellation: decisionType = 2

export const decisionTypeMarker: decisionType = 3

export const decisionTypeTimer: decisionType = 4

export const decisionTypeSignal: decisionType = 5

export const decisionTypeUpsertSearchAttributes: decisionType = 6

export const eventCancel: string = "cancel"

export const eventDecisionSent: string = "handleDecisionSent"

export const eventInitiated: string = "handleInitiatedEvent"

export const eventInitiationFailed: string = "handleInitiationFailedEvent"

export const eventStarted: string = "handleStartedEvent"

export const eventCompletion: string = "handleCompletionEvent"

export const eventCancelInitiated: string = "handleCancelInitiatedEvent"

export const eventCancelFailed: string = "handleCancelFailedEvent"

export const eventCanceled: string = "handleCanceledEvent"

export const sideEffectMarkerName: string = "SideEffect"

export const versionMarkerName: string = "Version"

export const localActivityMarkerName: string = "LocalActivity"

export const mutableSideEffectMarkerName: string = "MutableSideEffect"

export function decisionState_String(d: decisionState): string {
	switch (d) {
		case 0:
		{
			return "Created"
			break
		}
		case 1:
		{
			return "DecisionSent"
			break
		}
		case 2:
		{
			return "CanceledBeforeInitiated"
			break
		}
		case 3:
		{
			return "Initiated"
			break
		}
		case 4:
		{
			return "Started"
			break
		}
		case 5:
		{
			return "CanceledAfterInitiated"
			break
		}
		case 6:
		{
			return "CanceledAfterStarted"
			break
		}
		case 7:
		{
			return "CancellationDecisionSent"
			break
		}
		case 8:
		{
			return "CompletedAfterCancellationDecisionSent"
			break
		}
		case 9:
		{
			return "Completed"
			break
		}
		default:
		{
			return "Unknown"
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function decisionType_String(d: decisionType): string {
	switch (d) {
		case 0:
		{
			return "Activity"
			break
		}
		case 1:
		{
			return "ChildWorkflow"
			break
		}
		case 2:
		{
			return "Cancellation"
			break
		}
		case 3:
		{
			return "Marker"
			break
		}
		case 4:
		{
			return "Timer"
			break
		}
		case 5:
		{
			return "Signal"
			break
		}
		default:
		{
			return "Unknown"
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function makeDecisionID(decisionType: decisionType, id: string): decisionID {
	return new decisionID({decisionType: decisionType, id: id}, true)
}

export function panicIllegalState(message: string): void {
	$.panic($.interfaceValue(new stateMachineIllegalStatePanic({message: message}, true), "internal.stateMachineIllegalStatePanic", "internal.stateMachineIllegalStatePanic"))
}

export function newDecisionsHelper(): decisionsHelper | $.VarRef<decisionsHelper> | null {
	return (() => { const __goscriptLiteralField19 = list.New(); return new decisionsHelper({orderedDecisions: __goscriptLiteralField19, decisions: $.makeMap<decisionID, list.Element | $.VarRef<list.Element> | null>(), scheduledEventIDToActivityID: $.makeMap<bigint, string>(), scheduledEventIDToCancellationID: $.makeMap<bigint, string>(), scheduledEventIDToSignalID: $.makeMap<bigint, string>()}) })()
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (decisionType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "internal.decisionType"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (decisionState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int32", "internal.decisionState"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({Encode: (receiver: any, ...args: any[]) => (s.EventType_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (s.EventType_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (s.EventType_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (s.EventType_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (s.EventType_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (s.EventType_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (s.EventType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (s.EventType_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= (/* @__PURE__ */ $.basicType("int32", "shared.EventType"))
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ([$.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shared.EventType")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.EventType"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])])
}

var __goscriptAwait: any
