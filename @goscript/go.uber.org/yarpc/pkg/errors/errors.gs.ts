// Generated file based on errors.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

export async function WrapHandlerError(err: $.GoError, service: string, procedure: string): globalThis.Promise<$.GoError> {
	if (err == null) {
		return null
	}
	if (await yarpcerrors.IsStatus(err)) {
		return err
	}
	return $.interfaceValue<$.GoError>(yarpcerrors.Newf(2, "error for service %q and procedure %q: %s", $.arrayToSlice<any>([service, procedure, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)])), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

var __goscriptAwait: any
