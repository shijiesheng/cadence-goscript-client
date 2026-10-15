// Generated file based on custom_gogo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"
import "@goscript/reflect/index.js"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.custom"])

export type custom = {
	Marshal(): [$.Slice<number>, $.GoError]
	Size(): number
	Unmarshal(data: $.Slice<number>): $.GoError
}

$.registerInterfaceType(
	"proto.custom",
	null,
	[$.methodSignature("Marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export let customType: reflect.Type | null = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*proto.custom", /* @__PURE__ */ $.pointerType("proto.custom")))).Elem()

export function __goscript_set_customType(__goscriptValue: reflect.Type | null): void {
	customType = __goscriptValue
}
