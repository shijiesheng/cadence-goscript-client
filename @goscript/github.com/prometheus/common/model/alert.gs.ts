// Generated file based on alert.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_fingerprinting from "./fingerprinting.gs.ts"

import * as __goscript_labels from "./labels.gs.ts"

import * as __goscript_labelset from "./labelset.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "./fingerprinting.gs.ts"
import "./labels.gs.ts"
import "./labelset.gs.ts"

$.registerTypePackagePath("github.com/prometheus/common/model", ["model.AlertStatus", "model.Alert", "model.Alerts"])

export type AlertStatus = string

export type Alerts = $.Slice<Alert | $.VarRef<Alert> | null>

$.registerNamedType("model.Alerts", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.Alert")));

$.registerNamedValueType(
	"model.Alerts",
	{HasFiring: (receiver: any, ...args: any[]) => (Alerts_HasFiring as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (Alerts_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Alerts_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Status: (receiver: any, ...args: any[]) => (Alerts_Status as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Alerts_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("HasFiring", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Status", [], [/* @__PURE__ */ $.basicType("string", "model.AlertStatus")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*model.Alerts",
	{HasFiring: (receiver: any, ...args: any[]) => (Alerts_HasFiring as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (Alerts_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Alerts_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Status: (receiver: any, ...args: any[]) => (Alerts_Status as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Alerts_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("HasFiring", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Status", [], [/* @__PURE__ */ $.basicType("string", "model.AlertStatus")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class Alert {
	// Label value pairs for purpose of aggregation, matching, and disposition
	// dispatching. This must minimally include an "alertname" label.
	public get Labels(): __goscript_labelset.LabelSet {
		return this._fields.Labels
	}

	public set Labels(value: __goscript_labelset.LabelSet) {
		this._fields.Labels = value
	}

	// Extra key/value information which does not define alert identity.
	public get Annotations(): __goscript_labelset.LabelSet {
		return this._fields.Annotations
	}

	public set Annotations(value: __goscript_labelset.LabelSet) {
		this._fields.Annotations = value
	}

	// The known time range for this alert. Both ends are optional.
	public get StartsAt(): time.Time {
		return this._fields.StartsAt
	}

	public set StartsAt(value: time.Time) {
		this._fields.StartsAt = value
	}

	public get EndsAt(): time.Time {
		return this._fields.EndsAt
	}

	public set EndsAt(value: time.Time) {
		this._fields.EndsAt = value
	}

	public get GeneratorURL(): string {
		return this._fields.GeneratorURL
	}

	public set GeneratorURL(value: string) {
		this._fields.GeneratorURL = value
	}

	public _fields: {
		Labels: __goscript_labelset.LabelSet
		Annotations: __goscript_labelset.LabelSet
		StartsAt: time.Time
		EndsAt: time.Time
		GeneratorURL: string
	}

	constructor(init?: Partial<{Labels?: __goscript_labelset.LabelSet, Annotations?: __goscript_labelset.LabelSet, StartsAt?: time.Time, EndsAt?: time.Time, GeneratorURL?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Labels: init?.Labels ?? (null! as __goscript_labelset.LabelSet),
			Annotations: init?.Annotations ?? (null! as __goscript_labelset.LabelSet),
			StartsAt: init?.StartsAt ? $.markAsStructValue($.cloneStructValue(init.StartsAt)) : $.markAsStructValue(new time.Time()),
			EndsAt: init?.EndsAt ? $.markAsStructValue($.cloneStructValue(init.EndsAt)) : $.markAsStructValue(new time.Time()),
			GeneratorURL: init?.GeneratorURL ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Alert {
		return new Alert(this, true)
	}

	public __goscriptAssign(source: Alert): void {
		const target = this._fields
		const values = source._fields
		target.Labels = values.Labels
		target.Annotations = values.Annotations
		$.assignStruct(target.StartsAt, values.StartsAt)
		$.assignStruct(target.EndsAt, values.EndsAt)
		target.GeneratorURL = values.GeneratorURL
	}

	public async Fingerprint(): globalThis.Promise<__goscript_fingerprinting.Fingerprint> {
		const a: Alert | $.VarRef<Alert> | null = this;
		return __goscript_labelset.LabelSet_Fingerprint($.pointerValue<Alert>(a).Labels)
	}

	public Name(): string {
		const a: Alert | $.VarRef<Alert> | null = this;
		return $.mapGet<__goscript_labels.LabelName, __goscript_labels.LabelValue, __goscript_labels.LabelValue>($.pointerValue<Alert>(a).Labels, "alertname", "")[0]
	}

	public Resolved(): boolean {
		const a: Alert | $.VarRef<Alert> | null = this;
		return (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as Alert).ResolvedAt($.markAsStructValue($.cloneStructValue(time.Now()))) : Alert.prototype.ResolvedAt.call(a, $.markAsStructValue($.cloneStructValue(time.Now()))))
	}

	public ResolvedAt(ts: time.Time): boolean {
		const a: Alert | $.VarRef<Alert> | null = this;
		const a$: Alert = a == null ? $.pointerTarget<Alert>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Alert>(a)
		if ($.markAsStructValue($.cloneStructValue((a$ as Alert).EndsAt)).IsZero()) {
			return false
		}
		return !$.markAsStructValue($.cloneStructValue((a$ as Alert).EndsAt)).After($.markAsStructValue($.cloneStructValue(ts)))
	}

	public Status(): AlertStatus {
		const a: Alert | $.VarRef<Alert> | null = this;
		if ((a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as Alert).Resolved() : Alert.prototype.Resolved.call(a))) {
			return "resolved"
		}
		return "firing"
	}

	public async String(): globalThis.Promise<string> {
		const a: Alert | $.VarRef<Alert> | null = this;
		let s = await fmt.Sprintf("%s[%s]", (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as Alert).Name() : Alert.prototype.Name.call(a)), $.sliceStringOrBytes(await __goscript_fingerprinting.Fingerprint_String((await (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as Alert).Fingerprint() : Alert.prototype.Fingerprint.call(a)))), undefined, 7))
		if ((a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as Alert).Resolved() : Alert.prototype.Resolved.call(a))) {
			return $.concatString(s, "[resolved]")
		}
		return $.concatString(s, "[active]")
	}

	public Validate(): $.GoError {
		const a: Alert | $.VarRef<Alert> | null = this;
		const a$: Alert = a == null ? $.pointerTarget<Alert>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Alert>(a)
		if ($.markAsStructValue($.cloneStructValue((a$ as Alert).StartsAt)).IsZero()) {
			return fmt.Errorf("start time missing")
		}
		if (!$.markAsStructValue($.cloneStructValue((a$ as Alert).EndsAt)).IsZero() && $.markAsStructValue($.cloneStructValue((a$ as Alert).EndsAt)).Before($.markAsStructValue($.cloneStructValue((a$ as Alert).StartsAt)))) {
			return fmt.Errorf("start time must be before end time")
		}
		{
			let err = __goscript_labelset.LabelSet_Validate((a$ as Alert).Labels)
			if (err != null) {
				return fmt.Errorf("invalid label set: %s", (err as any))
			}
		}
		if ($.len((a$ as Alert).Labels) == 0) {
			return fmt.Errorf("at least one label pair required")
		}
		{
			let err = __goscript_labelset.LabelSet_Validate((a$ as Alert).Annotations)
			if (err != null) {
				return fmt.Errorf("invalid annotations: %s", (err as any))
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"model.Alert",
		() => new Alert(),
		() => [$.methodSignature("Fingerprint", [], [/* @__PURE__ */ $.basicType("uint64", "model.Fingerprint")], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Resolved", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ResolvedAt", [["ts", "time.Time"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Status", [], [/* @__PURE__ */ $.basicType("string", "model.AlertStatus")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Validate", [], ["error"], true)],
		Alert,
		() => [/* @__PURE__ */ $.structField("Labels", "model.LabelSet", [0], 0, true, { tag: "json:\"labels\"" }), /* @__PURE__ */ $.structField("Annotations", "model.LabelSet", [1], 8, true, { tag: "json:\"annotations\"" }), /* @__PURE__ */ $.structField("StartsAt", "time.Time", [2], 16, true, { tag: "json:\"startsAt,omitempty\"" }), /* @__PURE__ */ $.structField("EndsAt", "time.Time", [3], 40, true, { tag: "json:\"endsAt,omitempty\"" }), /* @__PURE__ */ $.structField("GeneratorURL", /* @__PURE__ */ $.basicType("string"), [4], 64, true, { tag: "json:\"generatorURL\"" })]
	)
}

export const AlertFiring: AlertStatus = "firing"

export const AlertResolved: AlertStatus = "resolved"

export function Alerts_Len(_as: Alerts): number {
	return $.sliceLen((_as as Alerts))
}

export function Alerts_Swap(_as: Alerts, i: number, j: number): void {
	let __goscriptAssign0_0: Alert | $.VarRef<Alert> | null = $.arrayIndex(_as!, j)
	let __goscriptAssign0_1: Alert | $.VarRef<Alert> | null = $.arrayIndex(_as!, i)
	$.sliceElems(_as!)[$.sliceSlot(_as!, i)] = __goscriptAssign0_0
	$.sliceElems(_as!)[$.sliceSlot(_as!, j)] = __goscriptAssign0_1
}

export async function Alerts_Less(_as: Alerts, i: number, j: number): globalThis.Promise<boolean> {
	if ($.markAsStructValue($.cloneStructValue($.pointerValue<Alert>($.arrayIndex(_as!, i)).StartsAt)).Before($.markAsStructValue($.cloneStructValue($.pointerValue<Alert>($.arrayIndex(_as!, j)).StartsAt)))) {
		return true
	}
	if ($.markAsStructValue($.cloneStructValue($.pointerValue<Alert>($.arrayIndex(_as!, i)).EndsAt)).Before($.markAsStructValue($.cloneStructValue($.pointerValue<Alert>($.arrayIndex(_as!, j)).EndsAt)))) {
		return true
	}
	return await Alert.prototype.Fingerprint.call($.arrayIndex(_as!, i)) < await Alert.prototype.Fingerprint.call($.arrayIndex(_as!, j))
}

export function Alerts_HasFiring(_as: Alerts): boolean {
	for (let __goscriptRangeTarget0 = _as, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let a = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Alert | $.VarRef<Alert> | null)
		if (!(a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as Alert).Resolved() : Alert.prototype.Resolved.call(a))) {
			return true
		}
	}
	return false
}

export function Alerts_Status(_as: Alerts): AlertStatus {
	if (Alerts_HasFiring(_as)) {
		return "firing"
	}
	return "resolved"
}
