// Generated file based on outbound.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_chooser from "./chooser.gs.ts"
import "./chooser.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/x/introspection", ["introspection.IntrospectableOutbound", "introspection.OutboundStatus"])

export type IntrospectableOutbound = {
	Introspect(): OutboundStatus | globalThis.Promise<OutboundStatus>
}

$.registerInterfaceType(
	"introspection.IntrospectableOutbound",
	null,
	[$.methodSignature("Introspect", [], ["introspection.OutboundStatus"])]
);

export class OutboundStatus {
	public get Transport(): string {
		return this._fields.Transport
	}

	public set Transport(value: string) {
		this._fields.Transport = value
	}

	public get RPCType(): string {
		return this._fields.RPCType
	}

	public set RPCType(value: string) {
		this._fields.RPCType = value
	}

	public get Endpoint(): string {
		return this._fields.Endpoint
	}

	public set Endpoint(value: string) {
		this._fields.Endpoint = value
	}

	public get State(): string {
		return this._fields.State
	}

	public set State(value: string) {
		this._fields.State = value
	}

	public get Chooser(): __goscript_chooser.ChooserStatus {
		return this._fields.Chooser
	}

	public set Chooser(value: __goscript_chooser.ChooserStatus) {
		this._fields.Chooser = value
	}

	public get Service(): string {
		return this._fields.Service
	}

	public set Service(value: string) {
		this._fields.Service = value
	}

	public get OutboundKey(): string {
		return this._fields.OutboundKey
	}

	public set OutboundKey(value: string) {
		this._fields.OutboundKey = value
	}

	public _fields: {
		Transport: string
		RPCType: string
		Endpoint: string
		State: string
		Chooser: __goscript_chooser.ChooserStatus
		Service: string
		OutboundKey: string
	}

	constructor(init?: Partial<{Transport?: string, RPCType?: string, Endpoint?: string, State?: string, Chooser?: __goscript_chooser.ChooserStatus, Service?: string, OutboundKey?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Transport: init?.Transport ?? ("" as string),
			RPCType: init?.RPCType ?? ("" as string),
			Endpoint: init?.Endpoint ?? ("" as string),
			State: init?.State ?? ("" as string),
			Chooser: init?.Chooser ? init.Chooser.clone() : new __goscript_chooser.ChooserStatus(undefined, true),
			Service: init?.Service ?? ("" as string),
			OutboundKey: init?.OutboundKey ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OutboundStatus {
		return new OutboundStatus(this, true)
	}

	public __goscriptAssign(source: OutboundStatus): void {
		const target = this._fields
		const values = source._fields
		target.Transport = values.Transport
		target.RPCType = values.RPCType
		target.Endpoint = values.Endpoint
		target.State = values.State
		$.assignStruct(target.Chooser, values.Chooser)
		target.Service = values.Service
		target.OutboundKey = values.OutboundKey
	}

	static __typeInfo = $.registerStructType(
		"introspection.OutboundStatus",
		() => new OutboundStatus(),
		() => [],
		OutboundStatus,
		() => [/* @__PURE__ */ $.structField("Transport", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"transport\"" }), /* @__PURE__ */ $.structField("RPCType", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"rpctype\"" }), /* @__PURE__ */ $.structField("Endpoint", /* @__PURE__ */ $.basicType("string"), [2], 32, true, { tag: "json:\"endpoint\"" }), /* @__PURE__ */ $.structField("State", /* @__PURE__ */ $.basicType("string"), [3], 48, true, { tag: "json:\"state\"" }), /* @__PURE__ */ $.structField("Chooser", "introspection.ChooserStatus", [4], 64, true, { tag: "json:\"chooser\"" }), /* @__PURE__ */ $.structField("Service", /* @__PURE__ */ $.basicType("string"), [5], 120, true, { tag: "json:\"service\"" }), /* @__PURE__ */ $.structField("OutboundKey", /* @__PURE__ */ $.basicType("string"), [6], 136, true, { tag: "json:\"outboundkey\"" })]
	)
}

export var OutboundStatusNotSupported: OutboundStatus

export function __goscript_init_OutboundStatusNotSupported(): void {
	if (((OutboundStatusNotSupported) as any) === undefined) {
		OutboundStatusNotSupported = new OutboundStatus(undefined, true)
	}
}

export function __goscript_get_OutboundStatusNotSupported(): OutboundStatus {
	if (((OutboundStatusNotSupported) as any) === undefined) {
		__goscript_init_OutboundStatusNotSupported()
	}
	return OutboundStatusNotSupported
}

export function __goscript_set_OutboundStatusNotSupported(__goscriptValue: OutboundStatus): void {
	$.assignStruct(OutboundStatusNotSupported, __goscriptValue)
}
