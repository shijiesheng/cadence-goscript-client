// Generated file based on error_unix.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as syscall from "@goscript/syscall/index.js"
import "@goscript/syscall/index.js"

export function isConnError(err: $.GoError): boolean {
	{
		let [se, ok] = $.typeAssertTuple<syscall.Errno>(err, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		if (ok) {
			return (se == 104) || (se == 103)
		}
	}
	return false
}
