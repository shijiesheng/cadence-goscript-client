// Generated file based on version.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"

export const Major: number = 1

export const Minor: number = 34

export const Patch: number = 2

export const PreRelease: string = ""

export async function String(): globalThis.Promise<string> {
	let v = await fmt.Sprintf("v%d.%d.%d", $.basicInterfaceValue(1, "int"), $.basicInterfaceValue(34, "int"), $.basicInterfaceValue(2, "int"))
	if (!$.stringEqual("", "")) {
		v = $.concatString(v, $.concatString("-", ""))

		// TODO: Add metadata about the commit or build hash.
		// See https://golang.org/issue/29814
		// See https://golang.org/issue/33533
		let metadata: string = ""
		if (strings.Contains("", "devel") && (!$.stringEqual(metadata, ""))) {
			v = $.concatString(v, $.concatString("+", metadata))
		}
	}
	return v
}
