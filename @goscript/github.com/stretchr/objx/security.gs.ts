// Generated file based on security.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sha1 from "@goscript/crypto/sha1/index.js"

import * as hex from "@goscript/encoding/hex/index.js"
import "@goscript/crypto/sha1/index.js"
import "@goscript/encoding/hex/index.js"

export async function HashWithKey(data: string, key: string): globalThis.Promise<string> {
	let d = $.cloneArrayValue(await sha1.Sum($.stringToBytes($.concatString(($.concatString(data, ":")), key))), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 20))
	return hex.EncodeToString($.goSlice(d, undefined, undefined))
}
