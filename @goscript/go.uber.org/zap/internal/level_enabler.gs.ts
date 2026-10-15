// Generated file based on level_enabler.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"

$.registerTypePackagePath("go.uber.org/zap/internal", ["internal.LeveledEnabler"])

export type LeveledEnabler = {
	Enabled(_p0: zapcore.Level): boolean | globalThis.Promise<boolean>
	Level(): zapcore.Level | globalThis.Promise<zapcore.Level>
}

$.registerInterfaceType(
	"internal.LeveledEnabler",
	null,
	[$.methodSignature("Enabled", [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")])]
);
