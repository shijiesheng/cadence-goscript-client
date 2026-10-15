// Generated file based on is_go113.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"
import "@goscript/errors/index.js"

export function Is(err: $.GoError, target: $.GoError): boolean {
	return errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(target)!)
}
