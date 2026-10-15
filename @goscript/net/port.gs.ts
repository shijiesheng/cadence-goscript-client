// Generated file based on port.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

export function parsePort(service: string): [number, boolean] {
	let port: number = 0
	let needsLookup: boolean = false
	if ($.stringEqual(service, "")) {
		// Lock in the legacy behavior that an empty string
		// means port 0. See golang.org/issue/13610.
		return [0, false]
	}
	const max: number = 4294967295
	const cutoff: number = 1073741824
	let neg = false
	if ($.indexString(service, 0) == 43) {
		service = $.sliceStringOrBytes(service, 1, undefined)
	} else {
		if ($.indexString(service, 0) == 45) {
			neg = true
			service = $.sliceStringOrBytes(service, 1, undefined)
		}
	}
	let n: number = 0
	for (let __goscriptRunes0 = $.stringRunes(service); __goscriptRunes0.next(); ) {
		let d = __goscriptRunes0.rune
		if ((48 <= d) && (d <= 57)) {
			d = $.int(d - (48), 32)
		} else {
			return [0, true]
		}
		if (n >= 1073741824) {
			n = 4294967295
			break
		}
		n = globalThis.Math.imul(n, 10) >>> 0
		let nn: number = $.uint(((n + $.uint(d, 32)) >>> 0), 32)
		if ((nn < n) || (nn > 4294967295)) {
			n = 4294967295
			break
		}
		n = nn
	}
	if (!neg && (n >= 1073741824)) {
		port = 1073741823
	} else {
		if (neg && (n > 1073741824)) {
			port = 1073741824
		} else {
			port = $.int(n)
		}
	}
	if (neg) {
		port = -port
	}
	return [port, false]
}
