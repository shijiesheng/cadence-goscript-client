// Generated file based on expvar_collector.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as expvar from "@goscript/expvar/index.js"

import * as io_prometheus_client from "@goscript/github.com/prometheus/client_model/go/index.js"

import type * as __goscript_collector from "./collector.gs.ts"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_metric from "./metric.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/expvar/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "./desc.gs.ts"
import "./metric.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.expvarCollector"])

export class expvarCollector {
	public get exports(): globalThis.Map<string, __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null {
		return this._fields.exports
	}

	public set exports(value: globalThis.Map<string, __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null) {
		this._fields.exports = value
	}

	public _fields: {
		exports: globalThis.Map<string, __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null
	}

	constructor(init?: Partial<{exports?: globalThis.Map<string, __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			exports: init?.exports ?? (null! as globalThis.Map<string, __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): expvarCollector {
		return new expvarCollector(this, true)
	}

	public __goscriptAssign(source: expvarCollector): void {
		const target = this._fields
		const values = source._fields
		target.exports = values.exports
	}

	public async Collect(ch: $.Channel<__goscript_metric.Metric | null> | null): globalThis.Promise<void> {
		const e: expvarCollector | $.VarRef<expvarCollector> | null = this;
		for (const [name, desc] of $.pointerValue<expvarCollector>(e).exports?.entries() ?? []) {
			let m: __goscript_metric.Metric | null = null! as __goscript_metric.Metric | null
			let expVar = await expvar.Get(name)
			if (expVar == null) {
				continue
			}
			let v: $.VarRef<any> = $.varRef(null! as any)
			let labels: $.Slice<string> = $.makeSlice<string>($.sliceLen($.pointerValue<__goscript_desc.Desc>(desc).variableLabels), undefined, "string")
			{
				let err = await json.Unmarshal($.stringToBytes((__goscriptAwait = (expVar !== null && (expVar as any).__isVarRef !== true && (expVar as any).__goValue === undefined ? (expVar as Exclude<expvar.Var, null>) : $.pointerValue<Exclude<expvar.Var, null>>(expVar)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), $.interfaceValue(v, "*interface{}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })))
				if (err != null) {
					await $.chanSend(ch, __goscript_metric.NewInvalidMetric(desc, err))
					continue
				}
			}
			let processValue: ((v: any, i: number) => void) | null = null! as ((v: any, i: number) => void) | null
			processValue = $.functionValue(async (v: any, i: number): globalThis.Promise<void> => {
				if (i >= $.sliceLen(labels)) {
					let copiedLabels: $.Slice<string> = $.appendSlice($.makeSlice<string>(0, $.sliceLen(labels), "string"), labels)
					{
						const __goscriptTypeSwitchValue = v
						switch (true) {
							case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).ok:
								{
									let v: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).value
									m = await __goscript_value.MustNewConstMetric(desc, 3, v, copiedLabels)
								}
								break
							case $.typeAssert<boolean>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("bool")).ok:
								{
									let v: boolean = $.typeAssert<boolean>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("bool")).value
									if (v) {
										m = await __goscript_value.MustNewConstMetric(desc, 3, 1, copiedLabels)
									} else {
										m = await __goscript_value.MustNewConstMetric(desc, 3, 0, copiedLabels)
									}
								}
								break
							default:
								{
									let v: any = __goscriptTypeSwitchValue
									return
								}
								break
						}
					}
					await $.chanSend(ch, m)
					return
				}
				let __goscriptTuple0: any = $.typeAssertTuple<globalThis.Map<string, any> | null>(v, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))
				let vm: globalThis.Map<string, any> | null = __goscriptTuple0[0]
				let ok = __goscriptTuple0[1]
				if (!ok) {
					return
				}
				for (const [lv, val] of vm?.entries() ?? []) {
					$.sliceElems(labels!)[$.sliceSlot(labels!, i)] = lv
					void (__goscriptAwait = processValue!(val, i + 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo))
			void (__goscriptAwait = processValue!(v.value, 0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async Describe(ch: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): globalThis.Promise<void> {
		const e: expvarCollector | $.VarRef<expvarCollector> | null = this;
		for (const [__rangeKey, desc] of $.pointerValue<expvarCollector>(e).exports?.entries() ?? []) {
			await $.chanSend(ch, desc)
		}
	}

	static __typeInfo = $.registerStructType(
		"prometheus.expvarCollector",
		() => new expvarCollector(),
		() => [$.methodSignature("Collect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]], [], true), $.methodSignature("Describe", [["ch", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]], [], true)],
		expvarCollector,
		() => [/* @__PURE__ */ $.structField("exports", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("prometheus.Desc")), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export function NewExpvarCollector(exports: globalThis.Map<string, __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): __goscript_collector.Collector | null {
	return $.interfaceValue<__goscript_collector.Collector | null>(new expvarCollector({exports: exports}), "*prometheus.expvarCollector", /* @__PURE__ */ $.pointerType("prometheus.expvarCollector"))
}

var __goscriptAwait: any
