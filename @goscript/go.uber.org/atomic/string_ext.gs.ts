// Generated file based on string_ext.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript__string from "./string.gs.ts"

import * as __goscript_nocmp from "./nocmp.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/sync/atomic/index.js"
import "./string.gs.ts"
import "./nocmp.gs.ts"
import "./value.gs.ts"

export function packString(s: string): any {
	return s
}

export function unpackString(v: any): string {
	{
		let [s, ok] = $.typeAssertTuple<string>(v, /* @__PURE__ */ $.basicType("string"))
		if (ok) {
			return s
		}
	}
	return ""
}
