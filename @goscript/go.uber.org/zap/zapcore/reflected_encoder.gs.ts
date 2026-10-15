// Generated file based on reflected_encoder.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as io from "@goscript/io/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/io/index.js"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.ReflectedEncoder"])

export type ReflectedEncoder = {
	Encode(_p0: any): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"zapcore.ReflectedEncoder",
	null,
	[$.methodSignature("Encode", [{ kind: $.TypeKind.Interface, methods: [] }], ["error"])]
);

export function defaultReflectedEncoder(w: io.Writer | null): ReflectedEncoder | null {
	let enc: json.Encoder | $.VarRef<json.Encoder> | null = json.NewEncoder($.pointerValueOrNil(w)!)
	// For consistency with our custom JSON encoder.
	json.Encoder.prototype.SetEscapeHTML.call($.pointerValue<json.Encoder>(enc), false)
	return $.interfaceValue<ReflectedEncoder | null>(enc, "*json.Encoder", /* @__PURE__ */ $.pointerType("json.Encoder"))
}
