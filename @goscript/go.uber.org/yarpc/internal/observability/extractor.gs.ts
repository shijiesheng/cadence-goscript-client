// Generated file based on extractor.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/internal/observability", ["observability.ContextExtractor"])

export type ContextExtractor = ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null

export function NewNopContextExtractor(): ContextExtractor | null {
	return $.namedFunction($.functionValue((_p0: context.Context | null): zapcore.Field => {
		return zap.Skip()
	}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["zapcore.Field"] } as $.FunctionTypeInfo)), "observability.ContextExtractor", ({ kind: $.TypeKind.Function, name: "observability.ContextExtractor", params: ["context.Context"], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
}
