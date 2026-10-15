// Generated file based on responder.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"

$.registerTypePackagePath("go.uber.org/thriftrw/protocol/envelope", ["envelope.Responder"])

export type Responder = {
	EncodeResponse(v: wire.Value, t: wire.EnvelopeType, w: io.Writer | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"envelope.Responder",
	null,
	[$.methodSignature("EncodeResponse", [["v", "wire.Value"], ["t", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType")], ["w", "io.Writer"]], ["error"])]
);
