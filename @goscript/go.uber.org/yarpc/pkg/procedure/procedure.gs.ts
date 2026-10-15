// Generated file based on procedure.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/strings/index.js"

export const _separator: string = "::"

export function ToName(serviceName: string, methodName: string): string {
	return $.concatString(($.concatString(serviceName, "::")), methodName)
}

export function FromName(name: string): [string, string] {
	let serviceName: string = ""
	let methodName: string = ""
	let parts: $.Slice<string> = strings.SplitN(name, "::", 2)
	if ($.sliceLen(parts) == 1) {
		return [$.arrayIndex(parts!, 0), ""]
	}
	return [$.arrayIndex(parts!, 0), $.arrayIndex(parts!, 1)]
}
