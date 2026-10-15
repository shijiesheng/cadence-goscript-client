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
	[{ name: "Capabilities", args: [], returns: [{ type: "tally.Capabilities" }] }, { name: "Counter", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Counter" }] }, { name: "Gauge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Gauge" }] }, { name: "Histogram", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Histogram" }] }, { name: "SubScope", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Scope" }] }, { name: "Tagged", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Scope" }] }, { name: "Timer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Timer" }] }]
);

export type Counter = {
	Inc(delta: bigint): void
}

$.registerInterfaceType(
	"tally.Counter",
	null,
	[{ name: "Inc", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }]
);

export type Gauge = {
	Update(value: number): void
}

$.registerInterfaceType(
	"tally.Gauge",
	null,
	[{ name: "Update", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }]
);

export type Timer = {
	Record(value: time.Duration): void
	Start(): Stopwatch | globalThis.Promise<Stopwatch>
}

$.registerInterfaceType(
	"tally.Timer",
	null,
	[{ name: "Record", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "Start", args: [], returns: [{ type: "tally.Stopwatch" }] }]
);

export type Histogram = {
	RecordDuration(value: time.Duration): void
	RecordValue(value: number): void
	Start(): Stopwatch | globalThis.Promise<Stopwatch>
}

$.registerInterfaceType(
	"tally.Histogram",
	null,
	[{ name: "RecordDuration", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "RecordValue", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "Start", args: [], returns: [{ type: "tally.Stopwatch" }] }]
);

export type StopwatchRecorder = {
	RecordStopwatch(stopwatchStart: time.Time): void
}

$.registerInterfaceType(
	"tally.StopwatchRecorder",
	null,
	[{ name: "RecordStopwatch", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }]
);

export type Buckets = {
	AsDurations(): $.Slice<time.Duration>
	AsValues(): $.Slice<number>
	Len(): number
	Less(i: number, j: number): boolean
	String(): string | globalThis.Promise<string>
	Swap(i: number, j: number): void
}

$.registerInterfaceType(
	"tally.Buckets",
	null,
	[{ name: "AsDurations", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration")) }] }, { name: "AsValues", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")) }] }, { name: "Len", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }] }, { name: "Less", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }, { name: "Swap", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }]
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
	[{ name: "LowerBoundDuration", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64", "time.Duration") }] }, { name: "LowerBoundValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }] }, { name: "UpperBoundDuration", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64", "time.Duration") }] }, { name: "UpperBoundValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }] }]
);

export type Capabilities = {
	Reporting(): boolean
	Tagging(): boolean
}

$.registerInterfaceType(
	"tally.Capabilities",
	null,
	[{ name: "Reporting", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "Tagging", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }]
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
		() => [{ name: "Stop", args: [], returns: [] }],
		Stopwatch,
		() => [{ name: "start", key: "start", type: "time.Time" }, { name: "recorder", key: "recorder", type: "tally.StopwatchRecorder" }]
	)
}

export function NewStopwatch(start: time.Time, r: StopwatchRecorder | null): Stopwatch {
	return new Stopwatch({start: $.markAsStructValue($.cloneStructValue(start)), recorder: r}, true)
}

var __goscriptAwait: any
