// Generated file based on transport.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as __goscript_lifecycle from "./lifecycle.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/transport", ["transport.Transport"])

export type Transport = {
	IsRunning(): boolean | globalThis.Promise<boolean>
	Start(): $.GoError | globalThis.Promise<$.GoError>
	Stop(): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"transport.Transport",
	null,
	[$.methodSignature("IsRunning", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Start", [], ["error"]), $.methodSignature("Stop", [], ["error"])]
);
