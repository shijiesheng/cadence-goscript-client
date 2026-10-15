// Generated file based on errors.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

export async function IsBadRequestError(err: $.GoError): globalThis.Promise<boolean> {
	return yarpcerrors.Status.prototype.Code.call(await yarpcerrors.FromError(err)) == 3
}

export async function IsUnexpectedError(err: $.GoError): globalThis.Promise<boolean> {
	return yarpcerrors.Status.prototype.Code.call(await yarpcerrors.FromError(err)) == 13
}

export async function IsTimeoutError(err: $.GoError): globalThis.Promise<boolean> {
	return yarpcerrors.Status.prototype.Code.call(await yarpcerrors.FromError(err)) == 4
}
