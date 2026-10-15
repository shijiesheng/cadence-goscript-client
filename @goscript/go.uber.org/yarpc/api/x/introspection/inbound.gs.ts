// Generated file based on inbound.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/api/x/introspection", ["introspection.IntrospectableInbound", "introspection.InboundStatus"])

export type IntrospectableInbound = {
	Introspect(): InboundStatus
}

$.registerInterfaceType(
	"introspection.IntrospectableInbound",
	null,
	[$.methodSignature("Introspect", [], ["introspection.InboundStatus"])]
);

export class InboundStatus {
	public get Transport(): string {
		return this._fields.Transport
	}

	public set Transport(value: string) {
		this._fields.Transport = value
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

	public _fields: {
		Transport: string
		Endpoint: string
		State: string
	}

	constructor(init?: Partial<{Transport?: string, Endpoint?: string, State?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Transport: init?.Transport ?? ("" as string),
			Endpoint: init?.Endpoint ?? ("" as string),
			State: init?.State ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): InboundStatus {
		return new InboundStatus(this, true)
	}

	public __goscriptAssign(source: InboundStatus): void {
		const target = this._fields
		const values = source._fields
		target.Transport = values.Transport
		target.Endpoint = values.Endpoint
		target.State = values.State
	}

	static __typeInfo = $.registerStructType(
		"introspection.InboundStatus",
		() => new InboundStatus(),
		() => [],
		InboundStatus,
		() => [/* @__PURE__ */ $.structField("Transport", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"transport\"" }), /* @__PURE__ */ $.structField("Endpoint", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"endpoint\"" }), /* @__PURE__ */ $.structField("State", /* @__PURE__ */ $.basicType("string"), [2], 32, true, { tag: "json:\"state\"" })]
	)
}
