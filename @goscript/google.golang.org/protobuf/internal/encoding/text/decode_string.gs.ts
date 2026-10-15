// Generated file based on decode_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as utf16 from "@goscript/unicode/utf16/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as __goscript_decode from "./decode.gs.ts"

import type * as __goscript_decode_number from "./decode_number.gs.ts"

import * as __goscript_decode_token from "./decode_token.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/index.js"
import "@goscript/unicode/utf16/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "./decode.gs.ts"
import "./decode_token.gs.ts"
import "./encode.gs.ts"

export function indexNeedEscapeInBytes(b: $.Slice<number>): number {
	return __goscript_encode.indexNeedEscapeInString(strs.UnsafeString(b))
}

export async function UnmarshalString(s: string): globalThis.Promise<[string, $.GoError]> {
	let d: __goscript_decode.Decoder | $.VarRef<__goscript_decode.Decoder> | null = __goscript_decode.NewDecoder($.stringToBytes(s))
	return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_decode.Decoder).parseString() : __goscript_decode.Decoder.prototype.parseString.call(d))
}
