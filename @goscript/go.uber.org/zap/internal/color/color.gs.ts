// Generated file based on color.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"
import "@goscript/fmt/index.js"

$.registerTypePackagePath("go.uber.org/zap/internal/color", ["color.Color"])

export type Color = number

$.registerNamedValueType(
	"color.Color",
	{Add: (receiver: any, ...args: any[]) => (Color_Add as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Add", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*color.Color",
	{Add: (receiver: any, ...args: any[]) => (Color_Add as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Add", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")])]
);

export const Black: Color = 30

export const Red: Color = 31

export const Green: Color = 32

export const Yellow: Color = 33

export const Blue: Color = 34

export const Magenta: Color = 35

export const Cyan: Color = 36

export const White: Color = 37

export async function Color_Add(c: Color, s: string): globalThis.Promise<string> {
	return fmt.Sprintf("\x1b[%dm%s\x1b[0m", $.basicInterfaceValue($.uint(c, 8), "uint8"), s)
}
