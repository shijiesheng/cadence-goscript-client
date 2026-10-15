// Generated file based on reporter.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import type * as sort from "@goscript/sort/index.js"

import type * as __goscript_types from "./types.gs.ts"
import "@goscript/time/index.js"

$.registerTypePackagePath("github.com/uber-go/tally", ["tally.BaseStatsReporter", "tally.StatsReporter", "tally.CachedStatsReporter", "tally.CachedCount", "tally.CachedGauge", "tally.CachedTimer", "tally.CachedHistogram", "tally.CachedHistogramBucket"])

export type BaseStatsReporter = {
	Capabilities(): __goscript_types.Capabilities | null
	Flush(): void
}

$.registerInterfaceType(
	"tally.BaseStatsReporter",
	null,
	[$.methodSignature("Capabilities", [], ["tally.Capabilities"]), $.methodSignature("Flush")]
);

export type StatsReporter = {
	Capabilities(): __goscript_types.Capabilities | null
	Flush(): void
	ReportCounter(name: string, tags: globalThis.Map<string, string> | null, value: bigint): void
	ReportGauge(name: string, tags: globalThis.Map<string, string> | null, value: number): void
	ReportHistogramDurationSamples(name: string, tags: globalThis.Map<string, string> | null, buckets: __goscript_types.Buckets | null, bucketLowerBound: time.Duration, bucketUpperBound: time.Duration, samples: bigint): void
	ReportHistogramValueSamples(name: string, tags: globalThis.Map<string, string> | null, buckets: __goscript_types.Buckets | null, bucketLowerBound: number, bucketUpperBound: number, samples: bigint): void
	ReportTimer(name: string, tags: globalThis.Map<string, string> | null, interval: time.Duration): void
}

$.registerInterfaceType(
	"tally.StatsReporter",
	null,
	[$.methodSignature("Capabilities", [], ["tally.Capabilities"]), $.methodSignature("Flush"), $.methodSignature("ReportCounter", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["value", /* @__PURE__ */ $.basicType("int64")]]), $.methodSignature("ReportGauge", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["value", /* @__PURE__ */ $.basicType("float64")]]), $.methodSignature("ReportHistogramDurationSamples", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["buckets", "tally.Buckets"], ["bucketLowerBound", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["bucketUpperBound", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["samples", /* @__PURE__ */ $.basicType("int64")]]), $.methodSignature("ReportHistogramValueSamples", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["buckets", "tally.Buckets"], ["bucketLowerBound", /* @__PURE__ */ $.basicType("float64")], ["bucketUpperBound", /* @__PURE__ */ $.basicType("float64")], ["samples", /* @__PURE__ */ $.basicType("int64")]]), $.methodSignature("ReportTimer", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["interval", /* @__PURE__ */ $.basicType("int64", "time.Duration")]])]
);

export type CachedStatsReporter = {
	AllocateCounter(name: string, tags: globalThis.Map<string, string> | null): CachedCount | null
	AllocateGauge(name: string, tags: globalThis.Map<string, string> | null): CachedGauge | null
	AllocateHistogram(name: string, tags: globalThis.Map<string, string> | null, buckets: __goscript_types.Buckets | null): CachedHistogram | null
	AllocateTimer(name: string, tags: globalThis.Map<string, string> | null): CachedTimer | null
	Capabilities(): __goscript_types.Capabilities | null
	Flush(): void
}

$.registerInterfaceType(
	"tally.CachedStatsReporter",
	null,
	[$.methodSignature("AllocateCounter", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]], ["tally.CachedCount"]), $.methodSignature("AllocateGauge", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]], ["tally.CachedGauge"]), $.methodSignature("AllocateHistogram", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["buckets", "tally.Buckets"]], ["tally.CachedHistogram"]), $.methodSignature("AllocateTimer", [["name", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]], ["tally.CachedTimer"]), $.methodSignature("Capabilities", [], ["tally.Capabilities"]), $.methodSignature("Flush")]
);

export type CachedCount = {
	ReportCount(value: bigint): void
}

$.registerInterfaceType(
	"tally.CachedCount",
	null,
	[$.methodSignature("ReportCount", [["value", /* @__PURE__ */ $.basicType("int64")]])]
);

export type CachedGauge = {
	ReportGauge(value: number): void
}

$.registerInterfaceType(
	"tally.CachedGauge",
	null,
	[$.methodSignature("ReportGauge", [["value", /* @__PURE__ */ $.basicType("float64")]])]
);

export type CachedTimer = {
	ReportTimer(interval: time.Duration): void
}

$.registerInterfaceType(
	"tally.CachedTimer",
	null,
	[$.methodSignature("ReportTimer", [["interval", /* @__PURE__ */ $.basicType("int64", "time.Duration")]])]
);

export type CachedHistogram = {
	DurationBucket(bucketLowerBound: time.Duration, bucketUpperBound: time.Duration): CachedHistogramBucket | null
	ValueBucket(bucketLowerBound: number, bucketUpperBound: number): CachedHistogramBucket | null
}

$.registerInterfaceType(
	"tally.CachedHistogram",
	null,
	[$.methodSignature("DurationBucket", [["bucketLowerBound", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["bucketUpperBound", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["tally.CachedHistogramBucket"]), $.methodSignature("ValueBucket", [["bucketLowerBound", /* @__PURE__ */ $.basicType("float64")], ["bucketUpperBound", /* @__PURE__ */ $.basicType("float64")]], ["tally.CachedHistogramBucket"])]
);

export type CachedHistogramBucket = {
	ReportSamples(value: bigint): void
}

$.registerInterfaceType(
	"tally.CachedHistogramBucket",
	null,
	[$.methodSignature("ReportSamples", [["value", /* @__PURE__ */ $.basicType("int64")]])]
);
