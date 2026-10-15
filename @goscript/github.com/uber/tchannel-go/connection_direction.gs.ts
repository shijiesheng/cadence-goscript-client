// Generated file based on connection_direction.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"
import "@goscript/fmt/index.js"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.connectionDirection"])

export type connectionDirection = number

$.registerNamedValueType(
	"tchannel.connectionDirection",
	{String: (receiver: any, ...args: any[]) => (connectionDirection_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tchannel.connectionDirection",
	{String: (receiver: any, ...args: any[]) => (connectionDirection_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export const inbound: connectionDirection = 1

export const outbound: connectionDirection = 2

export async function connectionDirection_String(d: connectionDirection): globalThis.Promise<string> {
	switch (d) {
		case 1:
		{
			return "inbound"
			break
		}
		case 2:
		{
			return "outbound"
			break
		}
		default:
		{
			return fmt.Sprintf("connectionDirection(%v)", $.basicInterfaceValue($.int(d), "int"))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}
