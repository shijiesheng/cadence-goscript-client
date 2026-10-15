// Generated file based on networktype.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as attributes from "@goscript/google.golang.org/grpc/attributes/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/attributes/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/transport/networktype", ["networktype.keyType"])

export type keyType = string

export const key: keyType = "grpc.internal.transport.networktype"

export function Set(address: resolver.Address, networkType: string): resolver.Address {
	address.Attributes = attributes.Attributes.prototype.WithValue.call(address.Attributes, $.namedValueInterfaceValue<any>("grpc.internal.transport.networktype", "networktype.keyType", {}, /* @__PURE__ */ $.basicType("string", "networktype.keyType")), networkType)
	return (address).clone()
}

export function Get(address: resolver.Address): [string, boolean] {
	let v = attributes.Attributes.prototype.Value.call(address.Attributes, $.namedValueInterfaceValue<any>("grpc.internal.transport.networktype", "networktype.keyType", {}, /* @__PURE__ */ $.basicType("string", "networktype.keyType")))
	if (v == null) {
		return ["", false]
	}
	return [$.mustTypeAssert<string>(v, /* @__PURE__ */ $.basicType("string")), true]
}
