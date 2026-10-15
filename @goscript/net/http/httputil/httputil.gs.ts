// Generated file based on httputil.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as internal from "@goscript/net/http/internal/index.js"
import "@goscript/io/index.js"
import "@goscript/net/http/internal/index.js"

export function NewChunkedReader(r: io.Reader | null): io.Reader | null {
	return internal.NewChunkedReader(r)
}

export function NewChunkedWriter(w: io.Writer | null): io.WriteCloser | null {
	return internal.NewChunkedWriter(w)
}

export let ErrLineTooLong: $.GoError = internal.ErrLineTooLong

export function __goscript_set_ErrLineTooLong(__goscriptValue: $.GoError): void {
	ErrLineTooLong = __goscriptValue
}
