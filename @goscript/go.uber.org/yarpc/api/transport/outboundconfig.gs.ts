// Generated file based on outboundconfig.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import type * as context from "@goscript/context/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as io from "@goscript/io/index.js"

import type * as iter from "@goscript/iter/index.js"

import type * as __goscript_ack from "./ack.gs.ts"

import type * as __goscript_clientconfig from "./clientconfig.gs.ts"

import * as __goscript_header from "./header.gs.ts"

import type * as __goscript_lifecycle from "./lifecycle.gs.ts"

import * as __goscript_outbound from "./outbound.gs.ts"

import * as __goscript_request from "./request.gs.ts"

import * as __goscript_response from "./response.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"

import type * as __goscript_transport from "./transport.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/io/index.js"
import "./header.gs.ts"
import "./outbound.gs.ts"
import "./request.gs.ts"
import "./response.gs.ts"
import "./stream.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/transport", ["transport.OutboundConfig"])

export class OutboundConfig {
	public get CallerName(): string {
		return this._fields.CallerName
	}

	public set CallerName(value: string) {
		this._fields.CallerName = value
	}

	public get Outbounds(): __goscript_outbound.Outbounds {
		return this._fields.Outbounds
	}

	public set Outbounds(value: __goscript_outbound.Outbounds) {
		this._fields.Outbounds = value
	}

	public _fields: {
		CallerName: string
		Outbounds: __goscript_outbound.Outbounds
	}

	constructor(init?: Partial<{CallerName?: string, Outbounds?: __goscript_outbound.Outbounds}>, __goscriptValue?: boolean) {
		this._fields = {
			CallerName: init?.CallerName ?? ("" as string),
			Outbounds: init?.Outbounds ? init.Outbounds.clone() : new __goscript_outbound.Outbounds(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OutboundConfig {
		return new OutboundConfig(this, true)
	}

	public __goscriptAssign(source: OutboundConfig): void {
		const target = this._fields
		const values = source._fields
		target.CallerName = values.CallerName
		$.assignStruct(target.Outbounds, values.Outbounds)
	}

	public Caller(): string {
		const o: OutboundConfig | $.VarRef<OutboundConfig> | null = this;
		// TODO: This function should be deprecated, it's for legacy support.
		// Use CallerName instead.
		return $.pointerValue<OutboundConfig>(o).CallerName
	}

	public async GetOnewayOutbound(): globalThis.Promise<__goscript_outbound.OnewayOutbound | null> {
		const o: OutboundConfig | $.VarRef<OutboundConfig> | null = this;
		const o$: OutboundConfig = o == null ? $.pointerTarget<OutboundConfig>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<OutboundConfig>(o)
		// TODO: This function should be deprecated, it's for legacy support.
		// Use o.Outbounds.Oneway instead (and panic if you want).
		if ((o$ as OutboundConfig).Outbounds.Oneway == null) {
			$.panic(await fmt.Sprintf("service %q does not have a oneway outbound", (o$ as OutboundConfig).Outbounds.ServiceName))
		}
		return (o$ as OutboundConfig).Outbounds.Oneway
	}

	public async GetUnaryOutbound(): globalThis.Promise<__goscript_outbound.UnaryOutbound | null> {
		const o: OutboundConfig | $.VarRef<OutboundConfig> | null = this;
		const o$: OutboundConfig = o == null ? $.pointerTarget<OutboundConfig>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<OutboundConfig>(o)
		// TODO: This function should be deprecated, it's for legacy support.
		// Use Outbounds.Unary instead (and panic if you want).
		if ((o$ as OutboundConfig).Outbounds.Unary == null) {
			$.panic(await fmt.Sprintf("service %q does not have a unary outbound", (o$ as OutboundConfig).Outbounds.ServiceName))
		}
		return (o$ as OutboundConfig).Outbounds.Unary
	}

	public Service(): string {
		const o: OutboundConfig | $.VarRef<OutboundConfig> | null = this;
		// TODO: This function should be deprecated, it's for legacy support.
		// Use Outbounds.ServiceName instead.
		return $.pointerValue<OutboundConfig>(o).Outbounds.ServiceName
	}

	static __typeInfo = $.registerStructType(
		"transport.OutboundConfig",
		() => new OutboundConfig(),
		() => [$.methodSignature("Caller", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetOnewayOutbound", [], ["transport.OnewayOutbound"], true), $.methodSignature("GetUnaryOutbound", [], ["transport.UnaryOutbound"], true), $.methodSignature("Service", [], [/* @__PURE__ */ $.basicType("string")], true)],
		OutboundConfig,
		() => [/* @__PURE__ */ $.structField("CallerName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Outbounds", "transport.Outbounds", [1], 16, true)]
	)
}
