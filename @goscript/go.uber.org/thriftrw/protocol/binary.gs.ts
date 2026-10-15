// Generated file based on binary.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/go.uber.org/thriftrw/protocol/binary/index.js"

import * as stream from "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"

import type * as envelope from "@goscript/go.uber.org/thriftrw/protocol/envelope/index.js"

import type * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_protocol from "./protocol.gs.ts"
import "@goscript/go.uber.org/thriftrw/protocol/binary/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"
import "./protocol.gs.ts"

export type EnvelopeV0Responder = binary.EnvelopeV0Responder

export type EnvelopeV1Responder = binary.EnvelopeV1Responder

export let Binary: __goscript_protocol.Protocol | null = null! as __goscript_protocol.Protocol | null

export function __goscript_set_Binary(__goscriptValue: __goscript_protocol.Protocol | null): void {
	Binary = __goscriptValue
}

export let BinaryStreamer: stream.Protocol | null = null! as stream.Protocol | null

export function __goscript_set_BinaryStreamer(__goscriptValue: stream.Protocol | null): void {
	BinaryStreamer = __goscriptValue
}

export let EnvelopeAgnosticBinary: __goscript_protocol.EnvelopeAgnosticProtocol | null = null! as __goscript_protocol.EnvelopeAgnosticProtocol | null

export function __goscript_set_EnvelopeAgnosticBinary(__goscriptValue: __goscript_protocol.EnvelopeAgnosticProtocol | null): void {
	EnvelopeAgnosticBinary = __goscriptValue
}

function __goscriptInit0(): void {
	Binary = $.interfaceValue<__goscript_protocol.Protocol | null>(binary.Default, "*binary.Protocol", /* @__PURE__ */ $.pointerType("binary.Protocol"))
	BinaryStreamer = $.interfaceValue<stream.Protocol | null>(binary.Default, "*binary.Protocol", /* @__PURE__ */ $.pointerType("binary.Protocol"))
	EnvelopeAgnosticBinary = $.interfaceValue<__goscript_protocol.EnvelopeAgnosticProtocol | null>(binary.Default, "*binary.Protocol", /* @__PURE__ */ $.pointerType("binary.Protocol"))
}

export let NoEnvelopeResponder: __goscript_protocol.Responder | null = $.interfaceValue<__goscript_protocol.Responder | null>(binary.NoEnvelopeResponder, "*binary.noEnvelopeResponder", /* @__PURE__ */ $.pointerType("binary.noEnvelopeResponder"))

export function __goscript_set_NoEnvelopeResponder(__goscriptValue: __goscript_protocol.Responder | null): void {
	NoEnvelopeResponder = __goscriptValue
}

export { __goscriptInit0 }
