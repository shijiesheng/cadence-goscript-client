// Generated file based on process_collector.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as os from "@goscript/os/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as procfs from "@goscript/github.com/prometheus/procfs/index.js"

import * as io_prometheus_client from "@goscript/github.com/prometheus/client_model/go/index.js"

import type * as __goscript_collector from "./collector.gs.ts"

import * as __goscript_desc from "./desc.gs.ts"

import type * as __goscript_labels from "./labels.gs.ts"

import * as __goscript_metric from "./metric.gs.ts"

import * as __goscript_process_collector_other from "./process_collector_other.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/os/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/prometheus/procfs/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "./desc.gs.ts"
import "./metric.gs.ts"
import "./process_collector_other.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.processCollector", "prometheus.ProcessCollectorOpts"])

export class processCollector {
	public get collectFn(): ((_p0: $.Channel<__goscript_metric.Metric | null> | null) => void) | null {
		return this._fields.collectFn
	}

	public set collectFn(value: ((_p0: $.Channel<__goscript_metric.Metric | null> | null) => void) | null) {
		this._fields.collectFn = value
	}

	public get pidFn(): (() => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null {
		return this._fields.pidFn
	}

	public set pidFn(value: (() => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null) {
		this._fields.pidFn = value
	}

	public get reportErrors(): boolean {
		return this._fields.reportErrors
	}

	public set reportErrors(value: boolean) {
		this._fields.reportErrors = value
	}

	public get cpuTotal(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		return this._fields.cpuTotal
	}

	public set cpuTotal(value: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null) {
		this._fields.cpuTotal = value
	}

	public get openFDs(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		return this._fields.openFDs
	}

	public set openFDs(value: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null) {
		this._fields.openFDs = value
	}

	public get maxFDs(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		return this._fields.maxFDs
	}

	public set maxFDs(value: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null) {
		this._fields.maxFDs = value
	}

	public get vsize(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		return this._fields.vsize
	}

	public set vsize(value: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null) {
		this._fields.vsize = value
	}

	public get maxVsize(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		return this._fields.maxVsize
	}

	public set maxVsize(value: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null) {
		this._fields.maxVsize = value
	}

	public get rss(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		return this._fields.rss
	}

	public set rss(value: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null) {
		this._fields.rss = value
	}

	public get startTime(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		return this._fields.startTime
	}

	public set startTime(value: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null) {
		this._fields.startTime = value
	}

	public _fields: {
		collectFn: ((_p0: $.Channel<__goscript_metric.Metric | null> | null) => void) | null
		pidFn: (() => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null
		reportErrors: boolean
		cpuTotal: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		openFDs: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		maxFDs: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		vsize: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		maxVsize: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		rss: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		startTime: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
	}

	constructor(init?: Partial<{collectFn?: ((_p0: $.Channel<__goscript_metric.Metric | null> | null) => void) | null, pidFn?: (() => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null, reportErrors?: boolean, cpuTotal?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, openFDs?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, maxFDs?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, vsize?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, maxVsize?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, rss?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, startTime?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			collectFn: init?.collectFn ?? (null! as ((_p0: $.Channel<__goscript_metric.Metric | null> | null) => void) | null),
			pidFn: init?.pidFn ?? (null! as (() => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null),
			reportErrors: init?.reportErrors ?? (false as boolean),
			cpuTotal: init?.cpuTotal ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			openFDs: init?.openFDs ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			maxFDs: init?.maxFDs ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			vsize: init?.vsize ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			maxVsize: init?.maxVsize ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			rss: init?.rss ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			startTime: init?.startTime ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): processCollector {
		return new processCollector(this, true)
	}

	public __goscriptAssign(source: processCollector): void {
		const target = this._fields
		const values = source._fields
		target.collectFn = values.collectFn
		target.pidFn = values.pidFn
		target.reportErrors = values.reportErrors
		target.cpuTotal = values.cpuTotal
		target.openFDs = values.openFDs
		target.maxFDs = values.maxFDs
		target.vsize = values.vsize
		target.maxVsize = values.maxVsize
		target.rss = values.rss
		target.startTime = values.startTime
	}

	public async Collect(ch: $.Channel<__goscript_metric.Metric | null> | null): globalThis.Promise<void> {
		const c: processCollector | $.VarRef<processCollector> | null = this;
		void (__goscriptAwait = $.pointerValue<processCollector>(c).collectFn!(ch), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Describe(ch: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): globalThis.Promise<void> {
		const c: processCollector | $.VarRef<processCollector> | null = this;
		const c$: processCollector = c == null ? $.pointerTarget<processCollector>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<processCollector>(c)
		await $.chanSend(ch, (c$ as processCollector).cpuTotal)
		await $.chanSend(ch, (c$ as processCollector).openFDs)
		await $.chanSend(ch, (c$ as processCollector).maxFDs)
		await $.chanSend(ch, (c$ as processCollector).vsize)
		await $.chanSend(ch, (c$ as processCollector).maxVsize)
		await $.chanSend(ch, (c$ as processCollector).rss)
		await $.chanSend(ch, (c$ as processCollector).startTime)
	}

	public async processCollect(ch: $.Channel<__goscript_metric.Metric | null> | null): globalThis.Promise<void> {
		const c: processCollector | $.VarRef<processCollector> | null = this;
		const c$: processCollector = c == null ? $.pointerTarget<processCollector>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<processCollector>(c)
		let [pid, err] = await (c$ as processCollector).pidFn!()
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as processCollector).reportError(ch, null, err) : processCollector.prototype.reportError.call(c, ch, null, err))
			return
		}

		let __goscriptTuple0: any = await procfs.NewProc(pid)
		let p = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as processCollector).reportError(ch, null, err) : processCollector.prototype.reportError.call(c, ch, null, err))
			return
		}

		{
			let [stat, __goscriptShadow0] = await $.markAsStructValue($.cloneStructValue(p)).Stat()
			if (__goscriptShadow0 == null) {
				await $.chanSend(ch, await __goscript_value.MustNewConstMetric((c$ as processCollector).cpuTotal, 1, stat.CPUTime(), null))
				await $.chanSend(ch, await __goscript_value.MustNewConstMetric((c$ as processCollector).vsize, 2, stat.VirtualMemory(), null))
				await $.chanSend(ch, await __goscript_value.MustNewConstMetric((c$ as processCollector).rss, 2, stat.ResidentMemory(), null))
				{
					let [startTime, __goscriptShadow1] = await $.markAsStructValue($.cloneStructValue(stat)).StartTime()
					if (__goscriptShadow1 == null) {
						await $.chanSend(ch, await __goscript_value.MustNewConstMetric((c$ as processCollector).startTime, 2, startTime, null))
					} else {
						await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as processCollector).reportError(ch, (c$ as processCollector).startTime, __goscriptShadow1) : processCollector.prototype.reportError.call(c, ch, (c$ as processCollector).startTime, __goscriptShadow1))
					}
				}
			} else {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as processCollector).reportError(ch, null, __goscriptShadow0) : processCollector.prototype.reportError.call(c, ch, null, __goscriptShadow0))
			}
		}

		{
			let [fds, __goscriptShadow2] = await $.markAsStructValue($.cloneStructValue(p)).FileDescriptorsLen()
			if (__goscriptShadow2 == null) {
				await $.chanSend(ch, await __goscript_value.MustNewConstMetric((c$ as processCollector).openFDs, 2, fds, null))
			} else {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as processCollector).reportError(ch, (c$ as processCollector).openFDs, __goscriptShadow2) : processCollector.prototype.reportError.call(c, ch, (c$ as processCollector).openFDs, __goscriptShadow2))
			}
		}

		{
			let [limits, __goscriptShadow3] = await $.markAsStructValue($.cloneStructValue(p)).Limits()
			if (__goscriptShadow3 == null) {
				await $.chanSend(ch, await __goscript_value.MustNewConstMetric((c$ as processCollector).maxFDs, 2, globalThis.Number(limits.OpenFiles), null))
				await $.chanSend(ch, await __goscript_value.MustNewConstMetric((c$ as processCollector).maxVsize, 2, globalThis.Number(limits.AddressSpace), null))
			} else {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as processCollector).reportError(ch, null, __goscriptShadow3) : processCollector.prototype.reportError.call(c, ch, null, __goscriptShadow3))
			}
		}
	}

	public async reportError(ch: $.Channel<__goscript_metric.Metric | null> | null, desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, err: $.GoError): globalThis.Promise<void> {
		const c: processCollector | $.VarRef<processCollector> | null = this;
		if (!$.pointerValue<processCollector>(c).reportErrors) {
			return
		}
		if (desc == null) {
			desc = __goscript_desc.NewInvalidDesc(err)
		}
		await $.chanSend(ch, __goscript_metric.NewInvalidMetric(desc, err))
	}

	static __typeInfo = $.registerStructType(
		"prometheus.processCollector",
		() => new processCollector(),
		() => [$.methodSignature("Collect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]], [], true), $.methodSignature("Describe", [["ch", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]], [], true), $.methodSignature("processCollect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]], [], true), $.methodSignature("reportError", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")], ["desc", /* @__PURE__ */ $.pointerType("prometheus.Desc")], ["err", "error"]], [], true)],
		processCollector,
		() => [/* @__PURE__ */ $.structField("collectFn", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.channelType("prometheus.Metric", "send")], results: [] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("pidFn", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("int"), "error"] } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("reportErrors", /* @__PURE__ */ $.basicType("bool"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("cpuTotal", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [3], 24, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("openFDs", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [4], 32, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("maxFDs", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [5], 40, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("vsize", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [6], 48, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("maxVsize", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [7], 56, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("rss", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [8], 64, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("startTime", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [9], 72, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export class ProcessCollectorOpts {
	// PidFn returns the PID of the process the collector collects metrics
	// for. It is called upon each collection. By default, the PID of the
	// current process is used, as determined on construction time by
	// calling os.Getpid().
	public get PidFn(): (() => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null {
		return this._fields.PidFn
	}

	public set PidFn(value: (() => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null) {
		this._fields.PidFn = value
	}

	// If non-empty, each of the collected metrics is prefixed by the
	// provided string and an underscore ("_").
	public get Namespace(): string {
		return this._fields.Namespace
	}

	public set Namespace(value: string) {
		this._fields.Namespace = value
	}

	// If true, any error encountered during collection is reported as an
	// invalid metric (see NewInvalidMetric). Otherwise, errors are ignored
	// and the collected metrics will be incomplete. (Possibly, no metrics
	// will be collected at all.) While that's usually not desired, it is
	// appropriate for the common "mix-in" of process metrics, where process
	// metrics are nice to have, but failing to collect them should not
	// disrupt the collection of the remaining metrics.
	public get ReportErrors(): boolean {
		return this._fields.ReportErrors
	}

	public set ReportErrors(value: boolean) {
		this._fields.ReportErrors = value
	}

	public _fields: {
		PidFn: (() => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null
		Namespace: string
		ReportErrors: boolean
	}

	constructor(init?: Partial<{PidFn?: (() => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null, Namespace?: string, ReportErrors?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			PidFn: init?.PidFn ?? (null! as (() => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null),
			Namespace: init?.Namespace ?? ("" as string),
			ReportErrors: init?.ReportErrors ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ProcessCollectorOpts {
		return new ProcessCollectorOpts(this, true)
	}

	public __goscriptAssign(source: ProcessCollectorOpts): void {
		const target = this._fields
		const values = source._fields
		target.PidFn = values.PidFn
		target.Namespace = values.Namespace
		target.ReportErrors = values.ReportErrors
	}

	static __typeInfo = $.registerStructType(
		"prometheus.ProcessCollectorOpts",
		() => new ProcessCollectorOpts(),
		() => [],
		ProcessCollectorOpts,
		() => [/* @__PURE__ */ $.structField("PidFn", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("int"), "error"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("Namespace", /* @__PURE__ */ $.basicType("string"), [1], 8, true), /* @__PURE__ */ $.structField("ReportErrors", /* @__PURE__ */ $.basicType("bool"), [2], 24, true)]
	)
}

export async function NewProcessCollector(opts: ProcessCollectorOpts): globalThis.Promise<__goscript_collector.Collector | null> {
	let ns = ""
	if ($.stringLen(opts.Namespace) > 0) {
		ns = $.concatString(opts.Namespace, "_")
	}

	let c: processCollector | $.VarRef<processCollector> | null = (await (async () => { const __goscriptLiteralField0 = await __goscript_desc.NewDesc($.concatString(ns, "process_cpu_seconds_total"), "Total user and system CPU time spent in seconds.", null, null); const __goscriptLiteralField1 = await __goscript_desc.NewDesc($.concatString(ns, "process_open_fds"), "Number of open file descriptors.", null, null); const __goscriptLiteralField2 = await __goscript_desc.NewDesc($.concatString(ns, "process_max_fds"), "Maximum number of open file descriptors.", null, null); const __goscriptLiteralField3 = await __goscript_desc.NewDesc($.concatString(ns, "process_virtual_memory_bytes"), "Virtual memory size in bytes.", null, null); const __goscriptLiteralField4 = await __goscript_desc.NewDesc($.concatString(ns, "process_virtual_memory_max_bytes"), "Maximum amount of virtual memory available in bytes.", null, null); const __goscriptLiteralField5 = await __goscript_desc.NewDesc($.concatString(ns, "process_resident_memory_bytes"), "Resident memory size in bytes.", null, null); const __goscriptLiteralField6 = await __goscript_desc.NewDesc($.concatString(ns, "process_start_time_seconds"), "Start time of the process since unix epoch in seconds.", null, null); return new processCollector({reportErrors: opts.ReportErrors, cpuTotal: __goscriptLiteralField0, openFDs: __goscriptLiteralField1, maxFDs: __goscriptLiteralField2, vsize: __goscriptLiteralField3, maxVsize: __goscriptLiteralField4, rss: __goscriptLiteralField5, startTime: __goscriptLiteralField6}) })())
	let c$: processCollector = c == null ? $.pointerTarget<processCollector>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<processCollector>(c)

	if (opts.PidFn == null) {
		let pid = os.Getpid();
		;(c$ as processCollector).pidFn = $.functionValue((): [number, $.GoError] => {
			return [pid, null]
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("int"), "error"] } as $.FunctionTypeInfo))
	} else {
		;(c$ as processCollector).pidFn = opts.PidFn
	}

	// Set up process metric collection if supported by the runtime.
	if (await __goscript_process_collector_other.canCollectProcess()) {
		;(c$ as processCollector).collectFn = $.functionValue(((__receiver) => (ch: $.Channel<__goscript_metric.Metric | null> | null) => __receiver.processCollect(ch))((c$ as processCollector)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.channelType("prometheus.Metric", "send")], results: [] } as $.FunctionTypeInfo), "github.com/prometheus/client_golang/prometheus.(*processCollector).processCollect-fm")
	} else {
		;(c$ as processCollector).collectFn = $.functionValue(async (ch: $.Channel<__goscript_metric.Metric | null> | null): globalThis.Promise<void> => {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as processCollector).reportError(ch, null, errors.New("process metrics not supported on this platform")) : processCollector.prototype.reportError.call(c, ch, null, errors.New("process metrics not supported on this platform")))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.channelType("prometheus.Metric", "send")], results: [] } as $.FunctionTypeInfo))
	}

	return $.interfaceValue<__goscript_collector.Collector | null>(c, "*prometheus.processCollector", /* @__PURE__ */ $.pointerType("prometheus.processCollector"))
}

export function NewPidFileFn(pidFilePath: string): (() => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null {
	return $.functionValue(async (): globalThis.Promise<[number, $.GoError]> => {
		let __goscriptTuple1: any = await ioutil.ReadFile(pidFilePath)
		let content: $.Slice<number> = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [0, fmt.Errorf("can't read pid file %q: %+v", pidFilePath, (err as any))]
		}
		let __goscriptTuple2: any = strconv.Atoi(strings.TrimSpace($.bytesToString(content)))
		let pid = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [0, fmt.Errorf("can't parse pid file %q: %+v", pidFilePath, (err as any))]
		}

		return [pid, null]
	}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("int"), "error"] } as $.FunctionTypeInfo))
}

var __goscriptAwait: any
