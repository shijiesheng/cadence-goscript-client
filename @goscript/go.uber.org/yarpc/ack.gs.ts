// Generated file based on ack.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"
import "@goscript/fmt/index.js"

$.registerTypePackagePath("go.uber.org/yarpc", ["yarpc.Ack"])

export type Ack = {
	String(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"yarpc.Ack",
	null,
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);
