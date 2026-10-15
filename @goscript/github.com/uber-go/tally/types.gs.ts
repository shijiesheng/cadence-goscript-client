// Generated file based on types.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sort from "@goscript/sort/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/fmt/index.js"
import "@goscript/sort/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("github.com/uber-go/tally", ["tally.Scope", "tally.Counter", "tally.Gauge", "tally.Timer", "tally.Histogram", "tally.Stopwatch", "tally.StopwatchRecorder", "tally.Buckets", "tally.BucketPair", "tally.Capabilities"])

export type Scope = {
	Capabilities(): Capabilities | null | globalThis.Promise<Capabilities | null>
	Counter(name: string): Counter | null | globalThis.Promise<Counter | null>
	Gauge(name: string): Gauge | null | globalThis.Promise<Gauge | null>
	Histogram(name: string, buckets: Buckets | null): Histogram | null | globalThis.Promise<Histogram | null>
	SubScope(name: string): Scope | null | globalThis.Promise<Scope | null>
	Tagged(tags: globalThis.Map<string, string> | null): Scope | null | globalThis.Promise<Scope | null>
	Timer(name: string): Timer | null | globalThis.Promise<Timer | null>
}

$.registerInterfaceType(
	"tally.Scope",
	null,
	[$.methodSignature("Capabilities", [], ["tally.Capabilities"]), $.methodSignature("Counter", [["name", /* @__PURE__ */ $.basicType("string")]], ["tally.Counter"]), $.methodSignature("Gauge", [["name", /* @__PURE__ */ $.basicType("string")]], ["tally.Gauge"]), $.methodSignature("Histogram", [["name", /* @__PURE__ */ $.basicType("string")], ["buckets", "tally.Buckets"]], ["tally.Histogram"]), $.methodSignature("SubScope", [["name", /* @__PURE__ */ $.basicType("string")]], ["tally.Scope"]), $.methodSignature("Tagged", [["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]], ["tally.Scope"]), $.methodSignature("Timer", [["name", /* @__PURE__ */ $.basicType("string")]], ["tally.Timer"])]
);

export type Counter = {
	Inc(delta: bigint): void
}

$.registerInterfaceType(
	"tally.Counter",
	null,
	[$.methodSignature("Inc", [["delta", /* @__PURE__ */ $.basicType("int64")]])]
);

export type Gauge = {
	Update(value: number): void
}

$.registerInterfaceType(
	"tally.Gauge",
	null,
	[$.methodSignature("Update", [["value", /* @__PURE__ */ $.basicType("float64")]])]
);

export type Timer = {
	Record(value: time.Duration): void
	Start(): Stopwatch | globalThis.Promise<Stopwatch>
}

$.registerInterfaceType(
	"tally.Timer",
	null,
	[$.methodSignature("Record", [["value", /* @__PURE__ */ $.basicType("int64", "time.Duration")]]), $.methodSignature("Start", [], ["tally.Stopwatch"])]
);

export type Histogram = {
	RecordDuration(value: time.Duration): void
	RecordValue(value: number): void
	Start(): Stopwatch | globalThis.Promise<Stopwatch>
}

$.registerInterfaceType(
	"tally.Histogram",
	null,
	[$.methodSignature("RecordDuration", [["value", /* @__PURE__ */ $.basicType("int64", "time.Duration")]]), $.methodSignature("RecordValue", [["value", /* @__PURE__ */ $.basicType("float64")]]), $.methodSignature("Start", [], ["tally.Stopwatch"])]
);

export type StopwatchRecorder = {
	RecordStopwatch(stopwatchStart: time.Time): void
}

$.registerInterfaceType(
	"tally.StopwatchRecorder",
	null,
	[$.methodSignature("RecordStopwatch", [["stopwatchStart", "time.Time"]])]
);

export type Buckets = {
	AsDurations(): $.Slice<time.Duration>
	AsValues(): $.Slice<number>
	Len(): number
	Less(i: number, j: number): boolean | globalThis.Promise<boolean>
	String(): string | globalThis.Promise<string>
	Swap(i: number, j: number): void
}

$.registerInterfaceType(
	"tally.Buckets",
	null,
	[$.methodSignature("AsDurations", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))]), $.methodSignature("AsValues", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export type BucketPair = {
	LowerBoundDuration(): time.Duration
	LowerBoundValue(): number
	UpperBoundDuration(): time.Duration
	UpperBoundValue(): number
}

$.registerInterfaceType(
	"tally.BucketPair",
	null,
	[$.methodSignature("LowerBoundDuration", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("LowerBoundValue", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("UpperBoundDuration", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("UpperBoundValue", [], [/* @__PURE__ */ $.basicType("float64")])]
);

export type Capabilities = {
	Reporting(): boolean
	Tagging(): boolean
}

$.registerInterfaceType(
	"tally.Capabilities",
	null,
	[$.methodSignature("Reporting", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Tagging", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export class Stopwatch {
	public get start(): time.Time {
		return this._fields.start
	}

	public set start(value: time.Time) {
		this._fields.start = value
	}

	public get recorder(): StopwatchRecorder | null {
		return this._fields.recorder
	}

	public set recorder(value: StopwatchRecorder | null) {
		this._fields.recorder = value
	}

	public _fields: {
		start: time.Time
		recorder: StopwatchRecorder | null
	}

	constructor(init?: Partial<{start?: time.Time, recorder?: StopwatchRecorder | null}>, __goscriptValue?: boolean) {
		this._fields = {
			start: init?.start ? $.markAsStructValue($.cloneStructValue(init.start)) : $.markAsStructValue(new time.Time()),
			recorder: init?.recorder ?? (null! as StopwatchRecorder | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Stopwatch {
		return new Stopwatch(this, true)
	}

	public __goscriptAssign(source: Stopwatch): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.start, values.start)
		target.recorder = $.assignFieldValue(target.recorder, values.recorder, "tally.StopwatchRecorder")
	}

	public async Stop(): globalThis.Promise<void> {
		const sw = this;
		void (__goscriptAwait = $.pointerValue<Exclude<StopwatchRecorder, null>>(sw.recorder).RecordStopwatch($.markAsStructValue($.cloneStructValue(sw.start))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"tally.Stopwatch",
		() => new Stopwatch(),
		() => [$.methodSignature("Stop")],
		Stopwatch,
		() => [/* @__PURE__ */ $.structField("start", "time.Time", [0], 0, false, { pkgPath: "github.com/uber-go/tally" }), /* @__PURE__ */ $.structField("recorder", "tally.StopwatchRecorder", [1], 24, false, { pkgPath: "github.com/uber-go/tally" })]
	)
}

export function NewStopwatch(start: time.Time, r: StopwatchRecorder | null): Stopwatch {
	return new Stopwatch({start: $.markAsStructValue($.cloneStructValue(start)), recorder: r}, true)
}

var __goscriptAwait: any
