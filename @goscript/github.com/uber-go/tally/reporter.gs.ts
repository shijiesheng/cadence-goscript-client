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
	[{ name: "Capabilities", args: [], returns: [{ type: "tally.Capabilities" }] }, { name: "Flush", args: [], returns: [] }]
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
	[{ name: "Capabilities", args: [], returns: [{ type: "tally.Capabilities" }] }, { name: "Flush", args: [], returns: [] }, { name: "ReportCounter", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "ReportGauge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "ReportHistogramDurationSamples", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "ReportHistogramValueSamples", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "ReportTimer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }]
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
	[{ name: "AllocateCounter", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.CachedCount" }] }, { name: "AllocateGauge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.CachedGauge" }] }, { name: "AllocateHistogram", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.CachedHistogram" }] }, { name: "AllocateTimer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.CachedTimer" }] }, { name: "Capabilities", args: [], returns: [{ type: "tally.Capabilities" }] }, { name: "Flush", args: [], returns: [] }]
);

export type CachedCount = {
	ReportCount(value: bigint): void
}

$.registerInterfaceType(
	"tally.CachedCount",
	null,
	[{ name: "ReportCount", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }]
);

export type CachedGauge = {
	ReportGauge(value: number): void
}

$.registerInterfaceType(
	"tally.CachedGauge",
	null,
	[{ name: "ReportGauge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }]
);

export type CachedTimer = {
	ReportTimer(interval: time.Duration): void
}

$.registerInterfaceType(
	"tally.CachedTimer",
	null,
	[{ name: "ReportTimer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }]
);

export type CachedHistogram = {
	DurationBucket(bucketLowerBound: time.Duration, bucketUpperBound: time.Duration): CachedHistogramBucket | null
	ValueBucket(bucketLowerBound: number, bucketUpperBound: number): CachedHistogramBucket | null
}

$.registerInterfaceType(
	"tally.CachedHistogram",
	null,
	[{ name: "DurationBucket", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.CachedHistogramBucket" }] }, { name: "ValueBucket", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.CachedHistogramBucket" }] }]
);

export type CachedHistogramBucket = {
	ReportSamples(value: bigint): void
}

$.registerInterfaceType(
	"tally.CachedHistogramBucket",
	null,
	[{ name: "ReportSamples", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }]
);
