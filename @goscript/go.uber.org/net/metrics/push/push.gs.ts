// Generated file based on push.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("go.uber.org/net/metrics/push", ["push.Target", "push.Spec", "push.HistogramSpec", "push.Counter", "push.Gauge", "push.Histogram"])

export type Target = {
	NewCounter(_p0: Spec): Counter | null | globalThis.Promise<Counter | null>
	NewGauge(_p0: Spec): Gauge | null | globalThis.Promise<Gauge | null>
	NewHistogram(_p0: HistogramSpec): Histogram | null | globalThis.Promise<Histogram | null>
}

$.registerInterfaceType(
	"push.Target",
	null,
	[$.methodSignature("NewCounter", ["push.Spec"], ["push.Counter"]), $.methodSignature("NewGauge", ["push.Spec"], ["push.Gauge"]), $.methodSignature("NewHistogram", ["push.HistogramSpec"], ["push.Histogram"])]
);

export type Counter = {
	Set(total: bigint): void
}

$.registerInterfaceType(
	"push.Counter",
	null,
	[$.methodSignature("Set", [["total", /* @__PURE__ */ $.basicType("int64")]])]
);

export type Gauge = {
	Set(total: bigint): void
}

$.registerInterfaceType(
	"push.Gauge",
	null,
	[$.methodSignature("Set", [["total", /* @__PURE__ */ $.basicType("int64")]])]
);

export type Histogram = {
	Set(bucket: bigint, total: bigint): void
	SetIndex(bucketIndex: number, bucket: bigint, total: bigint): void
}

$.registerInterfaceType(
	"push.Histogram",
	null,
	[$.methodSignature("Set", [["bucket", /* @__PURE__ */ $.basicType("int64")], ["total", /* @__PURE__ */ $.basicType("int64")]]), $.methodSignature("SetIndex", [["bucketIndex", /* @__PURE__ */ $.basicType("int")], ["bucket", /* @__PURE__ */ $.basicType("int64")], ["total", /* @__PURE__ */ $.basicType("int64")]])]
);

export class Spec {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Tags(): globalThis.Map<string, string> | null {
		return this._fields.Tags
	}

	public set Tags(value: globalThis.Map<string, string> | null) {
		this._fields.Tags = value
	}

	public _fields: {
		Name: string
		Tags: globalThis.Map<string, string> | null
	}

	constructor(init?: Partial<{Name?: string, Tags?: globalThis.Map<string, string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Tags: init?.Tags ?? (null! as globalThis.Map<string, string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Spec {
		return new Spec(this, true)
	}

	public __goscriptAssign(source: Spec): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Tags = values.Tags
	}

	static __typeInfo = $.registerStructType(
		"push.Spec",
		() => new Spec(),
		() => [],
		Spec,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [1], 16, true)]
	)
}

export class HistogramSpec {
	public get Spec(): Spec {
		return this._fields.Spec
	}

	public set Spec(value: Spec) {
		this._fields.Spec = value
	}

	public get Buckets(): $.Slice<bigint> {
		return this._fields.Buckets
	}

	public set Buckets(value: $.Slice<bigint>) {
		this._fields.Buckets = value
	}

	public _fields: {
		Spec: Spec
		Buckets: $.Slice<bigint>
	}

	constructor(init?: Partial<{Spec?: Spec, Buckets?: $.Slice<bigint>}>, __goscriptValue?: boolean) {
		this._fields = {
			Spec: init?.Spec ? init.Spec.clone() : new Spec(undefined, true),
			Buckets: init?.Buckets ?? (null! as $.Slice<bigint>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HistogramSpec {
		return new HistogramSpec(this, true)
	}

	public __goscriptAssign(source: HistogramSpec): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Spec, values.Spec)
		target.Buckets = values.Buckets
	}

	static __typeInfo = $.registerStructType(
		"push.HistogramSpec",
		() => new HistogramSpec(),
		() => [],
		HistogramSpec,
		() => [/* @__PURE__ */ $.structField("Spec", "push.Spec", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buckets", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")), [1], 24, true)]
	)
}
