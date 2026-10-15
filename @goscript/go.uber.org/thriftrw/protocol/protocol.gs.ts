// Generated file based on protocol.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as envelope from "@goscript/go.uber.org/thriftrw/protocol/envelope/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/envelope/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"

$.registerTypePackagePath("go.uber.org/thriftrw/protocol", ["protocol.Protocol", "protocol.EnvelopeAgnosticProtocol"])

export type Protocol = {
	Decode(r: io.ReaderAt | null, t: wire.Type): [wire.Value, $.GoError] | globalThis.Promise<[wire.Value, $.GoError]>
	DecodeEnveloped(r: io.ReaderAt | null): [wire.Envelope, $.GoError] | globalThis.Promise<[wire.Envelope, $.GoError]>
	Encode(v: wire.Value, w: io.Writer | null): $.GoError | globalThis.Promise<$.GoError>
	EncodeEnveloped(e: wire.Envelope, w: io.Writer | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"protocol.Protocol",
	null,
	[$.methodSignature("Decode", [["r", "io.ReaderAt"], ["t", /* @__PURE__ */ $.basicType("uint8", "wire.Type")]], ["wire.Value", "error"]), $.methodSignature("DecodeEnveloped", [["r", "io.ReaderAt"]], ["wire.Envelope", "error"]), $.methodSignature("Encode", [["v", "wire.Value"], ["w", "io.Writer"]], ["error"]), $.methodSignature("EncodeEnveloped", [["e", "wire.Envelope"], ["w", "io.Writer"]], ["error"])]
);

export type EnvelopeAgnosticProtocol = {
	Decode(r: io.ReaderAt | null, t: wire.Type): [wire.Value, $.GoError] | globalThis.Promise<[wire.Value, $.GoError]>
	DecodeEnveloped(r: io.ReaderAt | null): [wire.Envelope, $.GoError] | globalThis.Promise<[wire.Envelope, $.GoError]>
	DecodeRequest(et: wire.EnvelopeType, r: io.ReaderAt | null): [wire.Value, Responder | null, $.GoError] | globalThis.Promise<[wire.Value, Responder | null, $.GoError]>
	Encode(v: wire.Value, w: io.Writer | null): $.GoError | globalThis.Promise<$.GoError>
	EncodeEnveloped(e: wire.Envelope, w: io.Writer | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"protocol.EnvelopeAgnosticProtocol",
	null,
	[$.methodSignature("Decode", [["r", "io.ReaderAt"], ["t", /* @__PURE__ */ $.basicType("uint8", "wire.Type")]], ["wire.Value", "error"]), $.methodSignature("DecodeEnveloped", [["r", "io.ReaderAt"]], ["wire.Envelope", "error"]), $.methodSignature("DecodeRequest", [["et", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType")], ["r", "io.ReaderAt"]], ["wire.Value", "envelope.Responder", "error"]), $.methodSignature("Encode", [["v", "wire.Value"], ["w", "io.Writer"]], ["error"]), $.methodSignature("EncodeEnveloped", [["e", "wire.Envelope"], ["w", "io.Writer"]], ["error"])]
);

export type Responder = envelope.Responder | null
