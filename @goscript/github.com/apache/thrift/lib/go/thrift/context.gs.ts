// Generated file based on context.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"
import "@goscript/context/index.js"

export let defaultCtx: context.Context | null = context.Background()

export function __goscript_set_defaultCtx(__goscriptValue: context.Context | null): void {
	defaultCtx = __goscriptValue
}
