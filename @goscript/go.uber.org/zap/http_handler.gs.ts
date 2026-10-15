// Generated file based on http_handler.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as http from "@goscript/net/http/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_level from "./level.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/http/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/sync/atomic/index.js"
import "./level.gs.ts"

$.registerTypePackagePath("go.uber.org/zap", ["zap.errorResponse", "zap.payload"])

export async function decodePutRequest(contentType: string, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<[zapcore.Level, $.GoError]> {
	if ($.stringEqual(contentType, "application/x-www-form-urlencoded")) {
		return decodePutURL(r)
	}
	return decodePutJSON(($.pointerValue<http.Request>(r).Body as io.Reader | null))
}

export function decodePutURL(r: http.Request | $.VarRef<http.Request> | null): [zapcore.Level, $.GoError] {
	let lvl = http.Request.prototype.FormValue.call($.pointerValue<http.Request>(r), "level")
	if ($.stringEqual(lvl, "")) {
		return [0, errors.New("must specify logging level")]
	}
	let l: $.VarRef<zapcore.Level> = $.varRef(0)
	{
		let err = zapcore.Level_UnmarshalText(l, $.stringToBytes(lvl))
		if (err != null) {
			return [0, err]
		}
	}
	return [l.value, null]
}

export async function decodePutJSON(body: io.Reader | null): globalThis.Promise<[zapcore.Level, $.GoError]> {
	let pld: $.VarRef<{"Level": $.VarRef<zapcore.Level> | null}> = $.varRef($.anonymousStructValue({"Level": null}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Level", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [0], 0, true, { tag: "json:\"level\"" })] }))
	{
		let err = await json.Decoder.prototype.Decode.call($.pointerValue<json.Decoder>(json.NewDecoder($.pointerValueOrNil(body)!)), $.interfaceValue(pld, "*struct{Level *zapcore.Level \"json:\\\"level\\\"\"}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Level", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [0], 0, true, { tag: "json:\"level\"" })] })))
		if (err != null) {
			return [0, fmt.Errorf("malformed request body: %v", (err as any))]
		}
	}
	if (pld.value.Level == null) {
		return [0, errors.New("must specify logging level")]
	}
	return [$.pointerValue<zapcore.Level>(pld.value.Level), null]
}
