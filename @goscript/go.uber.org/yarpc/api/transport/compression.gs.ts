// Generated file based on compression.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"
import "@goscript/io/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/api/transport", ["transport.Compressor"])

export type Compressor = {
	Compress(w: io.Writer | null): [io.WriteCloser | null, $.GoError]
	Decompress(r: io.Reader | null): [io.ReadCloser | null, $.GoError]
	Name(): string
}

$.registerInterfaceType(
	"transport.Compressor",
	null,
	[$.methodSignature("Compress", [["w", "io.Writer"]], ["io.WriteCloser", "error"]), $.methodSignature("Decompress", [["r", "io.Reader"]], ["io.ReadCloser", "error"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")])]
);
