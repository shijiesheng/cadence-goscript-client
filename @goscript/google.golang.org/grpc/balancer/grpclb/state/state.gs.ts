// Generated file based on state.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as attributes from "@goscript/google.golang.org/grpc/attributes/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/attributes/index.js"

$.registerTypePackagePath("google.golang.org/grpc/balancer/grpclb/state", ["state.keyType", "state.State"])

export type keyType = string

export class State {
	// BalancerAddresses contains the remote load balancer address(es).  If
	// set, overrides any resolver-provided addresses with Type of GRPCLB.
	public get BalancerAddresses(): $.Slice<resolver.Address> {
		return this._fields.BalancerAddresses
	}

	public set BalancerAddresses(value: $.Slice<resolver.Address>) {
		this._fields.BalancerAddresses = value
	}

	public _fields: {
		BalancerAddresses: $.Slice<resolver.Address>
	}

	constructor(init?: Partial<{BalancerAddresses?: $.Slice<resolver.Address>}>, __goscriptValue?: boolean) {
		this._fields = {
			BalancerAddresses: init?.BalancerAddresses ?? (null! as $.Slice<resolver.Address>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): State {
		return new State(this, true)
	}

	public __goscriptAssign(source: State): void {
		const target = this._fields
		const values = source._fields
		target.BalancerAddresses = values.BalancerAddresses
	}

	static __typeInfo = $.registerStructType(
		"state.State",
		() => new State(),
		() => [],
		State,
		() => [/* @__PURE__ */ $.structField("BalancerAddresses", /* @__PURE__ */ $.sliceType("resolver.Address"), [0], 0, true)]
	)
}

export const key: keyType = "grpc.grpclb.state"

export function Set(state: resolver.State, s: State | $.VarRef<State> | null): resolver.State {
	state.Attributes = attributes.Attributes.prototype.WithValue.call(state.Attributes, $.namedValueInterfaceValue<any>("grpc.grpclb.state", "state.keyType", {}, /* @__PURE__ */ $.basicType("string", "state.keyType")), $.interfaceValue(s, "*state.State", /* @__PURE__ */ $.pointerType("state.State")))
	return (state).clone()
}

export function Get(state: resolver.State): State | $.VarRef<State> | null {
	let __goscriptTuple0: any = $.typeAssertTuple<State | $.VarRef<State> | null>(attributes.Attributes.prototype.Value.call(state.Attributes, $.namedValueInterfaceValue<any>("grpc.grpclb.state", "state.keyType", {}, /* @__PURE__ */ $.basicType("string", "state.keyType"))), /* @__PURE__ */ $.pointerType("state.State"))
	let s: State | $.VarRef<State> | null = __goscriptTuple0[0]
	return s
}
