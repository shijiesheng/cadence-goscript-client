// Generated file based on config.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as balancer from "@goscript/google.golang.org/grpc/balancer/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/serviceconfig/index.js"

import * as jsontext from "@goscript/encoding/json/jsontext/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/grpc/balancer/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"
import "@goscript/encoding/json/jsontext/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/balancer/gracefulswitch", ["gracefulswitch.lbConfig"])

export class lbConfig {
	public get LoadBalancingConfig(): serviceconfig.LoadBalancingConfig | null {
		return this._fields.LoadBalancingConfig
	}

	public set LoadBalancingConfig(value: serviceconfig.LoadBalancingConfig | null) {
		this._fields.LoadBalancingConfig = value
	}

	public get childBuilder(): balancer.Builder | null {
		return this._fields.childBuilder
	}

	public set childBuilder(value: balancer.Builder | null) {
		this._fields.childBuilder = value
	}

	public get childConfig(): serviceconfig.LoadBalancingConfig | null {
		return this._fields.childConfig
	}

	public set childConfig(value: serviceconfig.LoadBalancingConfig | null) {
		this._fields.childConfig = value
	}

	public _fields: {
		LoadBalancingConfig: serviceconfig.LoadBalancingConfig | null
		childBuilder: balancer.Builder | null
		childConfig: serviceconfig.LoadBalancingConfig | null
	}

	constructor(init?: Partial<{LoadBalancingConfig?: serviceconfig.LoadBalancingConfig | null, childBuilder?: balancer.Builder | null, childConfig?: serviceconfig.LoadBalancingConfig | null}>, __goscriptValue?: boolean) {
		this._fields = {
			LoadBalancingConfig: init?.LoadBalancingConfig ?? (null! as serviceconfig.LoadBalancingConfig | null),
			childBuilder: init?.childBuilder ?? (null! as balancer.Builder | null),
			childConfig: init?.childConfig ?? (null! as serviceconfig.LoadBalancingConfig | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lbConfig {
		return new lbConfig(this, true)
	}

	public __goscriptAssign(source: lbConfig): void {
		const target = this._fields
		const values = source._fields
		target.LoadBalancingConfig = $.assignFieldValue(target.LoadBalancingConfig, values.LoadBalancingConfig, "serviceconfig.LoadBalancingConfig")
		target.childBuilder = $.assignFieldValue(target.childBuilder, values.childBuilder, "balancer.Builder")
		target.childConfig = $.assignFieldValue(target.childConfig, values.childConfig, "serviceconfig.LoadBalancingConfig")
	}

	static __typeInfo = $.registerStructType(
		"gracefulswitch.lbConfig",
		() => new lbConfig(),
		() => [],
		lbConfig,
		() => [/* @__PURE__ */ $.structField("LoadBalancingConfig", "serviceconfig.LoadBalancingConfig", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("childBuilder", "balancer.Builder", [1], 16, false, { pkgPath: "google.golang.org/grpc/internal/balancer/gracefulswitch" }), /* @__PURE__ */ $.structField("childConfig", "serviceconfig.LoadBalancingConfig", [2], 32, false, { pkgPath: "google.golang.org/grpc/internal/balancer/gracefulswitch" })]
	)
}

export async function ChildName(l: serviceconfig.LoadBalancingConfig | null): globalThis.Promise<string> {
	return $.pointerValue<Exclude<balancer.Builder, null>>($.pointerValue<lbConfig>(((l as any)?.__goType === "*gracefulswitch.lbConfig" && (l as any).__goValue === undefined && (l as any).__isTypedNil !== true ? ((l as any) as lbConfig | $.VarRef<lbConfig> | null) : $.mustTypeAssert<lbConfig | $.VarRef<lbConfig> | null>(l, /* @__PURE__ */ $.pointerType("gracefulswitch.lbConfig")))).childBuilder).Name()
}

export async function ParseConfig(cfg: json.RawMessage): globalThis.Promise<[serviceconfig.LoadBalancingConfig | null, $.GoError]> {
	let lbCfg: $.VarRef<$.Slice<globalThis.Map<string, json.RawMessage> | null>> = $.varRef(null! as $.Slice<globalThis.Map<string, json.RawMessage> | null>)
	{
		let err = await json.Unmarshal(cfg, $.interfaceValue(lbCfg, "*[]map[string]jsontext.Value", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value"))))))
		if (err != null) {
			return [null, err]
		}
	}
	for (let __goscriptRangeTarget0 = lbCfg.value, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let e = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as globalThis.Map<string, json.RawMessage> | null)
		if ($.len(e) != 1) {
			return [null, fmt.Errorf("expected a JSON struct with one entry; received entry %v at index %d", $.interfaceValue(e, "map[string]jsontext.Value", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value"))), $.basicInterfaceValue(i, "int"))]
		}

		let name: string = ""
		let jsonCfg: json.RawMessage = null! as json.RawMessage
		for (const [__goscriptRangeKey0, __goscriptRangeValue0] of e?.entries() ?? []) {
			name = __goscriptRangeKey0
			jsonCfg = __goscriptRangeValue0
		}

		let builder = await balancer.Get(name)
		if (builder == null) {
			// Skip unregistered balancer names.
			continue
		}

		let [parser, ok] = $.typeAssertTuple<balancer.ConfigParser | null>(builder, "balancer.ConfigParser")
		if (!ok) {
			// This is a valid child with no config.
			return [$.interfaceValue<serviceconfig.LoadBalancingConfig | null>(new lbConfig({childBuilder: builder}), "*gracefulswitch.lbConfig", /* @__PURE__ */ $.pointerType("gracefulswitch.lbConfig")), null]
		}

		let [__goscriptShadow0, err] = await (parser !== null && (parser as any).__isVarRef !== true && (parser as any).__goValue === undefined ? (parser as Exclude<balancer.ConfigParser, null>) : $.pointerValue<Exclude<balancer.ConfigParser, null>>(parser)).ParseConfig((jsonCfg as json.RawMessage))
		if (err != null) {
			return [null, fmt.Errorf("error parsing config for policy %q: %v", name, (err as any))]
		}
		return [$.interfaceValue<serviceconfig.LoadBalancingConfig | null>(new lbConfig({childBuilder: builder, childConfig: __goscriptShadow0}), "*gracefulswitch.lbConfig", /* @__PURE__ */ $.pointerType("gracefulswitch.lbConfig")), null]
	}

	return [null, fmt.Errorf("no supported policies found in config: %v", $.bytesToString(cfg))]
}

var __goscriptAwait: any
