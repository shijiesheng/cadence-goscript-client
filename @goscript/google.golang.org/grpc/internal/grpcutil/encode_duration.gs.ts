// Generated file based on encode_duration.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/strconv/index.js"
import "@goscript/time/index.js"

export const maxTimeoutValue: bigint = 99999999n

export function div(d: time.Duration, r: time.Duration): bigint {
	if (($.int64Mod(d, r)) > 0n) {
		return $.int64($.int64Add(($.int64Div(d, r)), 1n))
	}
	return $.int64($.int64Div(d, r))
}

export function EncodeDuration(t: time.Duration): string {
	// TODO: This is simplistic and not bandwidth efficient. Improve it.
	if (t <= 0n) {
		return "0n"
	}
	{
		let d = div(t, 1n)
		if (d <= 99999999n) {
			return $.concatString(strconv.FormatInt(d, 10), "n")
		}
	}
	{
		let d = div(t, 1000n)
		if (d <= 99999999n) {
			return $.concatString(strconv.FormatInt(d, 10), "u")
		}
	}
	{
		let d = div(t, 1000000n)
		if (d <= 99999999n) {
			return $.concatString(strconv.FormatInt(d, 10), "m")
		}
	}
	{
		let d = div(t, 1000000000n)
		if (d <= 99999999n) {
			return $.concatString(strconv.FormatInt(d, 10), "S")
		}
	}
	{
		let d = div(t, 60000000000n)
		if (d <= 99999999n) {
			return $.concatString(strconv.FormatInt(d, 10), "M")
		}
	}
	// Note that maxTimeoutValue * time.Hour > MaxInt64.
	return $.concatString(strconv.FormatInt(div(t, 3600000000000n), 10), "H")
}
