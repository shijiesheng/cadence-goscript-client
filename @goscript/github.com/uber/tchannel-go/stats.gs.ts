// Generated file based on stats.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as log from "@goscript/log/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/log/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.StatsReporter", "tchannel.nullStatsReporter", "tchannel.simpleStatsReporter"])

export type StatsReporter = {
	IncCounter(name: string, tags: globalThis.Map<string, string> | null, value: bigint): void
	RecordTimer(name: string, tags: globalThis.Map<string, string> | null, d: time.Duration): void
	UpdateGauge(name: string, tags: globalThis.Map<string, string> | null, value: bigint): void
}

$.registerInterfaceType(
	"tchannel.StatsReporter",
	null,
	[$.methodSignature("IncCounter", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["value", /* @__PURE__ */ $.basicType("int64")]]), $.methodSignature("RecordTimer", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]]), $.methodSignature("UpdateGauge", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["value", /* @__PURE__ */ $.basicType("int64")]])]
);

export class nullStatsReporter {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nullStatsReporter {
		return new nullStatsReporter(this, true)
	}

	public __goscriptAssign(source: nullStatsReporter): void {
	}

	public IncCounter(name: string, tags: globalThis.Map<string, string> | null, value: bigint): void {
	}

	public RecordTimer(name: string, tags: globalThis.Map<string, string> | null, d: time.Duration): void {
	}

	public UpdateGauge(name: string, tags: globalThis.Map<string, string> | null, value: bigint): void {
	}

	static __typeInfo = $.registerStructType(
		"tchannel.nullStatsReporter",
		() => new nullStatsReporter(),
		() => [$.methodSignature("IncCounter", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["value", /* @__PURE__ */ $.basicType("int64")]]), $.methodSignature("RecordTimer", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]]), $.methodSignature("UpdateGauge", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["value", /* @__PURE__ */ $.basicType("int64")]])],
		nullStatsReporter,
		() => []
	)
}

export class simpleStatsReporter {
	public get commonTags(): globalThis.Map<string, string> | null {
		return this._fields.commonTags
	}

	public set commonTags(value: globalThis.Map<string, string> | null) {
		this._fields.commonTags = value
	}

	public _fields: {
		commonTags: globalThis.Map<string, string> | null
	}

	constructor(init?: Partial<{commonTags?: globalThis.Map<string, string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			commonTags: init?.commonTags ?? (null! as globalThis.Map<string, string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): simpleStatsReporter {
		return new simpleStatsReporter(this, true)
	}

	public __goscriptAssign(source: simpleStatsReporter): void {
		const target = this._fields
		const values = source._fields
		target.commonTags = values.commonTags
	}

	public async IncCounter(name: string, tags: globalThis.Map<string, string> | null, value: bigint): globalThis.Promise<void> {
		await log.Printf("Stats: IncCounter(%v, %v) +%v", $.arrayToSlice<any>([name, $.interfaceValue(tags, "map[string]string", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))), $.basicInterfaceValue(value, "int64")]))
	}

	public async RecordTimer(name: string, tags: globalThis.Map<string, string> | null, d: time.Duration): globalThis.Promise<void> {
		await log.Printf("Stats: RecordTimer(%v, %v) = %v", $.arrayToSlice<any>([name, $.interfaceValue(tags, "map[string]string", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))), $.namedValueInterfaceValue<any>(d, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
	}

	public async UpdateGauge(name: string, tags: globalThis.Map<string, string> | null, value: bigint): globalThis.Promise<void> {
		await log.Printf("Stats: UpdateGauge(%v, %v) = %v", $.arrayToSlice<any>([name, $.interfaceValue(tags, "map[string]string", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))), $.basicInterfaceValue(value, "int64")]))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.simpleStatsReporter",
		() => new simpleStatsReporter(),
		() => [$.methodSignature("IncCounter", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["value", /* @__PURE__ */ $.basicType("int64")]]), $.methodSignature("RecordTimer", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]]), $.methodSignature("UpdateGauge", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["value", /* @__PURE__ */ $.basicType("int64")]])],
		simpleStatsReporter,
		() => [/* @__PURE__ */ $.structField("commonTags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export let NullStatsReporter: StatsReporter | null = $.interfaceValue<StatsReporter | null>(new nullStatsReporter(undefined, true), "tchannel.nullStatsReporter", "tchannel.nullStatsReporter")

export function __goscript_set_NullStatsReporter(__goscriptValue: StatsReporter | null): void {
	NullStatsReporter = __goscriptValue
}

export let SimpleStatsReporter: StatsReporter | null = $.interfaceValue<StatsReporter | null>(new simpleStatsReporter(undefined, true), "tchannel.simpleStatsReporter", "tchannel.simpleStatsReporter")

export function __goscript_set_SimpleStatsReporter(__goscriptValue: StatsReporter | null): void {
	SimpleStatsReporter = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}
