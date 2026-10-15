// Generated file based on errors.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as io from "@goscript/io/index.js"

import type * as iter from "@goscript/iter/index.js"

import * as __goscript_header from "./header.gs.ts"

import * as __goscript_request from "./request.gs.ts"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/io/index.js"
import "./header.gs.ts"
import "./request.gs.ts"

export async function InboundBadRequestError(err: $.GoError): globalThis.Promise<$.GoError> {
	return $.interfaceValue<$.GoError>(yarpcerrors.Newf(3, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export async function IsBadRequestError(err: $.GoError): globalThis.Promise<boolean> {
	return yarpcerrors.Status.prototype.Code.call(await yarpcerrors.FromError(err)) == 3
}

export async function IsUnexpectedError(err: $.GoError): globalThis.Promise<boolean> {
	return yarpcerrors.Status.prototype.Code.call(await yarpcerrors.FromError(err)) == 13
}

export async function IsTimeoutError(err: $.GoError): globalThis.Promise<boolean> {
	return yarpcerrors.Status.prototype.Code.call(await yarpcerrors.FromError(err)) == 4
}

export function UnrecognizedProcedureError(req: __goscript_request.Request | $.VarRef<__goscript_request.Request> | null): $.GoError {
	const req$: __goscript_request.Request = req == null ? $.pointerTarget<__goscript_request.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<__goscript_request.Request>(req)
	return $.interfaceValue<$.GoError>(yarpcerrors.Newf(12, "unrecognized procedure %q for service %q", $.arrayToSlice<any>([(req$ as __goscript_request.Request).Procedure, (req$ as __goscript_request.Request).Service])), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export async function IsUnrecognizedProcedureError(err: $.GoError): globalThis.Promise<boolean> {
	return yarpcerrors.Status.prototype.Code.call(await yarpcerrors.FromError(err)) == 12
}

var __goscriptAwait: any
