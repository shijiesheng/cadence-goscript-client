// Generated file based on mode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as encoding from "@goscript/encoding/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_mode_string from "./mode_string.gs.ts"
import "@goscript/encoding/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strconv/index.js"
import "./mode_string.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/transport/tls", ["tls.Mode"])

export type Mode = number

$.registerNamedValueType(
	"tls.Mode",
	{String: (receiver: any, ...args: any[]) => (__goscript_mode_string.Mode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tls.Mode",
	{String: (receiver: any, ...args: any[]) => (__goscript_mode_string.Mode_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalText: (receiver: any, ...args: any[]) => (Mode_UnmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export const Disabled: Mode = 0

export const Permissive: Mode = 1

export const Enforced: Mode = 2

export function Mode_UnmarshalText(t: $.VarRef<Mode> | null, text: $.Slice<number>): $.GoError {
	{
		let s = $.bytesToString(text)
		switch (s) {
			case "disabled":
			{
				t!.value = 0
				break
			}
			case "permissive":
			{
				t!.value = 1
				break
			}
			case "enforced":
			{
				t!.value = 2
				break
			}
			default:
			{
				return fmt.Errorf("unknown tls mode string: %s", $.bytesToString(text))
				break
			}
		}
	}

	return null
}
