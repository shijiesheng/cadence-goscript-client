// Generated file based on errors.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"
import "@goscript/errors/index.js"

export let AnError: $.GoError = errors.New("assert.AnError general error for testing")

export function __goscript_set_AnError(__goscriptValue: $.GoError): void {
	AnError = __goscriptValue
}
