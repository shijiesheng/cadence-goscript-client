// Generated file based on encode_gogo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_lib from "./lib.gs.ts"
import "./lib.gs.ts"

export function NewRequiredNotSetError(field: string): __goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null {
	return new __goscript_lib.RequiredNotSetError({field: field})
}
