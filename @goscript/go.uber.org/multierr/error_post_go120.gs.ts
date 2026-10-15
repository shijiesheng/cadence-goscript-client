// Generated file based on error_post_go120.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import type * as io from "@goscript/io/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_error from "./error.gs.ts"
import "@goscript/sync/atomic/index.js"
import "./error.gs.ts"

$.registerTypePackagePath("go.uber.org/multierr", ["multierr.multipleErrors"])

export type multipleErrors = {
	Unwrap(): $.Slice<$.GoError>
}

$.registerInterfaceType(
	"multierr.multipleErrors",
	null,
	[$.methodSignature("Unwrap", [], [/* @__PURE__ */ $.sliceType("error")])]
);

export async function extractErrors(err: $.GoError): globalThis.Promise<$.Slice<$.GoError>> {
	if (err == null) {
		return null
	}

	// check if the given err is an Unwrapable error that
	// implements multipleErrors interface.
	let [eg, ok] = $.typeAssertTuple<multipleErrors | null>(err, "multierr.multipleErrors")
	if (!ok) {
		return $.arrayToSlice<$.GoError>([err])
	}

	return $.appendSlice<$.GoError>(null, ((__goscriptAwait = (eg !== null && (eg as any).__isVarRef !== true && (eg as any).__goValue === undefined ? (eg as Exclude<multipleErrors, null>) : $.pointerValue<Exclude<multipleErrors, null>>(eg)).Unwrap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<$.GoError>), $.appendZeros.nil)
}

var __goscriptAwait: any
