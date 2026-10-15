// Generated file based on common.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"
import "@goscript/errors/index.js"

export let ErrAbortHandler: $.GoError = errors.New("net/http: abort Handler")

export function __goscript_set_ErrAbortHandler(__goscriptValue: $.GoError): void {
	ErrAbortHandler = __goscriptValue
}

export let ErrBodyNotAllowed: $.GoError = errors.New("http: request method or response status code does not allow body")

export function __goscript_set_ErrBodyNotAllowed(__goscriptValue: $.GoError): void {
	ErrBodyNotAllowed = __goscriptValue
}

export let ErrRequestCanceled: $.GoError = errors.New("net/http: request canceled")

export function __goscript_set_ErrRequestCanceled(__goscriptValue: $.GoError): void {
	ErrRequestCanceled = __goscriptValue
}

export let ErrSkipAltProtocol: $.GoError = errors.New("net/http: skip alternate protocol")

export function __goscript_set_ErrSkipAltProtocol(__goscriptValue: $.GoError): void {
	ErrSkipAltProtocol = __goscriptValue
}
