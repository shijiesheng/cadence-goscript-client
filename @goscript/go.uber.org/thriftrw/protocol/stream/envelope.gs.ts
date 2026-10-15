// Generated file based on envelope.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as io from "@goscript/io/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import type * as __goscript_stream from "./stream.gs.ts"
import "@goscript/context/index.js"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"

$.registerTypePackagePath("go.uber.org/thriftrw/protocol/stream", ["stream.BodyReader", "stream.Enveloper", "stream.RequestReader", "stream.ResponseWriter"])

export type BodyReader = {
	Decode(_p0: __goscript_stream.Reader | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"stream.BodyReader",
	null,
	[$.methodSignature("Decode", ["stream.Reader"], ["error"])]
);

export type Enveloper = {
	Encode(_p0: __goscript_stream.Writer | null): $.GoError | globalThis.Promise<$.GoError>
	EnvelopeType(): wire.EnvelopeType
	MethodName(): string
}

$.registerInterfaceType(
	"stream.Enveloper",
	null,
	[$.methodSignature("Encode", ["stream.Writer"], ["error"]), $.methodSignature("EnvelopeType", [], [/* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType")]), $.methodSignature("MethodName", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type RequestReader = {
	ReadRequest(_p0: context.Context | null, _p1: wire.EnvelopeType, _p2: io.Reader | null, _p3: BodyReader | null): [ResponseWriter | null, $.GoError] | globalThis.Promise<[ResponseWriter | null, $.GoError]>
}

$.registerInterfaceType(
	"stream.RequestReader",
	null,
	[$.methodSignature("ReadRequest", ["context.Context", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType"), "io.Reader", "stream.BodyReader"], ["stream.ResponseWriter", "error"])]
);

export type ResponseWriter = {
	WriteResponse(_p0: wire.EnvelopeType, _p1: io.Writer | null, _p2: Enveloper | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"stream.ResponseWriter",
	null,
	[$.methodSignature("WriteResponse", [/* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType"), "io.Writer", "stream.Enveloper"], ["error"])]
);
