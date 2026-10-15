// Generated file based on decode_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as utf16 from "@goscript/unicode/utf16/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_decode_token from "./decode_token.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"
import "@goscript/strconv/index.js"
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
