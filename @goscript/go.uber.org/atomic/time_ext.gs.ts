// Generated file based on time_ext.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/time/index.js"

export function packTime(t: time.Time): any {
	return $.interfaceValue($.markAsStructValue($.cloneStructValue(t)), "time.Time", "time.Time")
}

export function unpackTime(v: any): time.Time {
	{
		let [t, ok] = $.typeAssertTuple<time.Time>(v, "time.Time")
		if (ok) {
			return $.markAsStructValue($.cloneStructValue(t))
		}
	}
	return $.markAsStructValue(new time.Time())
}
