// Generated file based on method.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/errors/index.js"
import "@goscript/strings/index.js"

export const baseContentType: string = "application/grpc"

export function ParseMethod(methodName: string): [string, string, $.GoError] {
	let service: string = ""
	let method: string = ""
	if (!strings.HasPrefix(methodName, "/")) {
		return ["", "", errors.New("invalid method name: should start with /")]
	}
	methodName = $.sliceStringOrBytes(methodName, 1, undefined)

	let pos = strings.LastIndex(methodName, "/")
	if (pos < 0) {
		return ["", "", errors.New("invalid method name: suffix /method is missing")]
	}
	return [$.sliceStringOrBytes(methodName, undefined, pos), $.sliceStringOrBytes(methodName, pos + 1, undefined), null]
}

export function ContentSubtype(contentType: string): [string, boolean] {
	if ($.stringEqual(contentType, "application/grpc")) {
		return ["", true]
	}
	if (!strings.HasPrefix(contentType, "application/grpc")) {
		return ["", false]
	}
	// guaranteed since != baseContentType and has baseContentType prefix
	switch ($.indexString(contentType, 16)) {
		case 43:
		case 59:
		{
			return [$.sliceStringOrBytes(contentType, 16 + 1, undefined), true]
			break
		}
		default:
		{
			return ["", false]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function ContentType(contentSubtype: string): string {
	if ($.stringEqual(contentSubtype, "")) {
		return "application/grpc"
	}
	return $.concatString(($.concatString("application/grpc", "+")), contentSubtype)
}
