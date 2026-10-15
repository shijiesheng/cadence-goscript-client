// Generated file based on bool_ext.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_bool from "./bool.gs.ts"

import * as __goscript_nocmp from "./nocmp.gs.ts"

import * as __goscript_uint32 from "./uint32.gs.ts"
import "@goscript/strconv/index.js"
import "./bool.gs.ts"
import "./nocmp.gs.ts"
import "./uint32.gs.ts"

export function truthy(n: number): boolean {
	return n == 1
}

export function boolToInt(b: boolean): number {
	if (b) {
		return 1
	}
	return 0
}
