// Generated file based on bypasssafe.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"
import "@goscript/reflect/index.js"

export const UnsafeDisabled: boolean = true

export function unsafeReflectValue(v: reflect.Value): reflect.Value {
	return $.markAsStructValue($.cloneStructValue(v))
}
