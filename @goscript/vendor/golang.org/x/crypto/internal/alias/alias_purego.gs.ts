// Generated file based on alias_purego.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"
import "@goscript/reflect/index.js"

export function AnyOverlap(x: $.Slice<number>, y: $.Slice<number>): boolean {
	return ((($.sliceLen(x) > 0) && ($.sliceLen(y) > 0)) && ($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.indexRef(x!, 0), "*byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint8")))))).Pointer() <= $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.indexRef(y!, $.sliceLen(y) - 1), "*byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint8")))))).Pointer())) && ($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.indexRef(y!, 0), "*byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint8")))))).Pointer() <= $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.indexRef(x!, $.sliceLen(x) - 1), "*byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint8")))))).Pointer())
}

export function InexactOverlap(x: $.Slice<number>, y: $.Slice<number>): boolean {
	if ((($.sliceLen(x) == 0) || ($.sliceLen(y) == 0)) || ($.indexAddress(x!, 0) == $.indexAddress(y!, 0))) {
		return false
	}
	return AnyOverlap(x, y)
}
