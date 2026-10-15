// Generated file based on lifecycle.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/api/transport", ["transport.Lifecycle"])

export type Lifecycle = {
	IsRunning(): boolean | globalThis.Promise<boolean>
	Start(): $.GoError | globalThis.Promise<$.GoError>
	Stop(): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"transport.Lifecycle",
	null,
	[$.methodSignature("IsRunning", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Start", [], ["error"]), $.methodSignature("Stop", [], ["error"])]
);
