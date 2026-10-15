// Generated file based on untyped.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io_prometheus_client from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as __goscript_collector from "./collector.gs.ts"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_labels from "./labels.gs.ts"

import * as __goscript_metric from "./metric.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "./collector.gs.ts"
import "./desc.gs.ts"
import "./labels.gs.ts"
import "./metric.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.UntypedOpts", "prometheus.UntypedFunc"])

export type UntypedFunc = {
	Collect(_p0: $.Channel<__goscript_metric.Metric | null> | null): void
	Desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null | globalThis.Promise<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null>
	Describe(_p0: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): void
	Write(_p0: io_prometheus_client.Metric | $.VarRef<io_prometheus_client.Metric> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"prometheus.UntypedFunc",
	null,
	[$.methodSignature("Collect", [/* @__PURE__ */ $.channelType("prometheus.Metric", "send")]), $.methodSignature("Desc", [], [/* @__PURE__ */ $.pointerType("prometheus.Desc")]), $.methodSignature("Describe", [/* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]), $.methodSignature("Write", [/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")], ["error"])]
);

export class UntypedOpts {
	public get Namespace(): string {
		return this._fields.Namespace
	}

	public set Namespace(value: string) {
		this._fields.Namespace = value
	}

	public get Subsystem(): string {
		return this._fields.Subsystem
	}

	public set Subsystem(value: string) {
		this._fields.Subsystem = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Help(): string {
		return this._fields.Help
	}

	public set Help(value: string) {
		this._fields.Help = value
	}

	public get ConstLabels(): __goscript_labels.Labels {
		return this._fields.ConstLabels
	}

	public set ConstLabels(value: __goscript_labels.Labels) {
		this._fields.ConstLabels = value
	}

	public _fields: {
		Namespace: string
		Subsystem: string
		Name: string
		Help: string
		ConstLabels: __goscript_labels.Labels
	}

	constructor(init?: Partial<{Namespace?: string, Subsystem?: string, Name?: string, Help?: string, ConstLabels?: __goscript_labels.Labels}>, __goscriptValue?: boolean) {
		this._fields = {
			Namespace: init?.Namespace ?? ("" as string),
			Subsystem: init?.Subsystem ?? ("" as string),
			Name: init?.Name ?? ("" as string),
			Help: init?.Help ?? ("" as string),
			ConstLabels: init?.ConstLabels ?? (null! as __goscript_labels.Labels)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UntypedOpts {
		return new UntypedOpts(this, true)
	}

	public __goscriptAssign(source: UntypedOpts): void {
		const target = this._fields
		const values = source._fields
		target.Namespace = values.Namespace
		target.Subsystem = values.Subsystem
		target.Name = values.Name
		target.Help = values.Help
		target.ConstLabels = values.ConstLabels
	}

	static __typeInfo = $.registerStructType(
		"prometheus.UntypedOpts",
		() => new UntypedOpts(),
		() => [],
		UntypedOpts,
		() => [/* @__PURE__ */ $.structField("Namespace", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Subsystem", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Help", /* @__PURE__ */ $.basicType("string"), [3], 48, true), /* @__PURE__ */ $.structField("ConstLabels", "prometheus.Labels", [4], 64, true)]
	)
}

export async function NewUntypedFunc(opts: UntypedOpts, _function: (() => number | globalThis.Promise<number>) | null): globalThis.Promise<UntypedFunc | null> {
	return $.interfaceValue<UntypedFunc | null>(await __goscript_value.newValueFunc(await __goscript_desc.NewDesc(__goscript_metric.BuildFQName(opts.Namespace, opts.Subsystem, opts.Name), opts.Help, null, opts.ConstLabels), 3, _function), "*prometheus.valueFunc", /* @__PURE__ */ $.pointerType("prometheus.valueFunc"))
}
