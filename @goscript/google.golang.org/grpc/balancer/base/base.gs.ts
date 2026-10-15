// Generated file based on base.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as balancer from "@goscript/google.golang.org/grpc/balancer/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as __goscript_balancer from "./balancer.gs.ts"
import "@goscript/google.golang.org/grpc/balancer/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "./balancer.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/balancer/base", ["base.PickerBuilder", "base.PickerBuildInfo", "base.SubConnInfo", "base.Config"])

export type PickerBuilder = {
	Build(info: PickerBuildInfo): balancer.Picker | null | globalThis.Promise<balancer.Picker | null>
}

$.registerInterfaceType(
	"base.PickerBuilder",
	null,
	[$.methodSignature("Build", [["info", "base.PickerBuildInfo"]], ["balancer.Picker"])]
);

export class PickerBuildInfo {
	// ReadySCs is a map from all ready SubConns to the Addresses used to
	// create them.
	public get ReadySCs(): globalThis.Map<balancer.SubConn | null, SubConnInfo> | null {
		return this._fields.ReadySCs
	}

	public set ReadySCs(value: globalThis.Map<balancer.SubConn | null, SubConnInfo> | null) {
		this._fields.ReadySCs = value
	}

	public _fields: {
		ReadySCs: globalThis.Map<balancer.SubConn | null, SubConnInfo> | null
	}

	constructor(init?: Partial<{ReadySCs?: globalThis.Map<balancer.SubConn | null, SubConnInfo> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ReadySCs: init?.ReadySCs ?? (null! as globalThis.Map<balancer.SubConn | null, SubConnInfo> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PickerBuildInfo {
		return new PickerBuildInfo(this, true)
	}

	public __goscriptAssign(source: PickerBuildInfo): void {
		const target = this._fields
		const values = source._fields
		target.ReadySCs = values.ReadySCs
	}

	static __typeInfo = $.registerStructType(
		"base.PickerBuildInfo",
		() => new PickerBuildInfo(),
		() => [],
		PickerBuildInfo,
		() => [/* @__PURE__ */ $.structField("ReadySCs", /* @__PURE__ */ $.mapType("balancer.SubConn", "base.SubConnInfo"), [0], 0, true)]
	)
}

export class SubConnInfo {
	public get Address(): resolver.Address {
		return this._fields.Address
	}

	public set Address(value: resolver.Address) {
		this._fields.Address = value
	}

	public _fields: {
		Address: resolver.Address
	}

	constructor(init?: Partial<{Address?: resolver.Address}>, __goscriptValue?: boolean) {
		this._fields = {
			Address: init?.Address ? init.Address.clone() : new resolver.Address(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SubConnInfo {
		return new SubConnInfo(this, true)
	}

	public __goscriptAssign(source: SubConnInfo): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Address, values.Address)
	}

	static __typeInfo = $.registerStructType(
		"base.SubConnInfo",
		() => new SubConnInfo(),
		() => [],
		SubConnInfo,
		() => [/* @__PURE__ */ $.structField("Address", "resolver.Address", [0], 0, true)]
	)
}

export class Config {
	// HealthCheck indicates whether health checking should be enabled for this specific balancer.
	public get HealthCheck(): boolean {
		return this._fields.HealthCheck
	}

	public set HealthCheck(value: boolean) {
		this._fields.HealthCheck = value
	}

	public _fields: {
		HealthCheck: boolean
	}

	constructor(init?: Partial<{HealthCheck?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			HealthCheck: init?.HealthCheck ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Config {
		return new Config(this, true)
	}

	public __goscriptAssign(source: Config): void {
		const target = this._fields
		const values = source._fields
		target.HealthCheck = values.HealthCheck
	}

	static __typeInfo = $.registerStructType(
		"base.Config",
		() => new Config(),
		() => [],
		Config,
		() => [/* @__PURE__ */ $.structField("HealthCheck", /* @__PURE__ */ $.basicType("bool"), [0], 0, true)]
	)
}

export function NewBalancerBuilder(name: string, pb: PickerBuilder | null, config: Config): balancer.Builder | null {
	return $.interfaceValue<balancer.Builder | null>(new __goscript_balancer.baseBuilder({name: name, pickerBuilder: pb, config: config}), "*base.baseBuilder", /* @__PURE__ */ $.pointerType("base.baseBuilder"))
}
