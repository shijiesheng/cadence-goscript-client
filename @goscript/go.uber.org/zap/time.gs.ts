// Generated file based on time.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/time/index.js"

export function timeToMillis(t: time.Time): bigint {
	return $.int64Div($.markAsStructValue($.cloneStructValue(t)).UnixNano(), 1000000n)
}
