// Generated file based on status.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as spb from "@goscript/google.golang.org/genproto/googleapis/rpc/status/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as status from "@goscript/google.golang.org/grpc/internal/status/index.js"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/genproto/googleapis/rpc/status/index.js"
import "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/google.golang.org/grpc/internal/status/index.js"

$.registerTypePackagePath("google.golang.org/grpc/status", ["status.grpcstatus"])

export type Status = status.Status

export function New(c: codes.Code, msg: string): status.Status | $.VarRef<status.Status> | null {
	return status.New(c, msg)
}

export async function Newf(c: codes.Code, format: string, a: $.Slice<any>): globalThis.Promise<status.Status | $.VarRef<status.Status> | null> {
	return New(c, await fmt.Sprintf(format, ...(a ?? [])))
}

export function Error(c: codes.Code, msg: string): $.GoError {
	return status.Status.prototype.Err.call(New(c, msg))
}

export async function Errorf(c: codes.Code, format: string, a: $.Slice<any>): globalThis.Promise<$.GoError> {
	return Error(c, await fmt.Sprintf(format, ...(a ?? [])))
}

export async function ErrorProto(s: spb.Status | $.VarRef<spb.Status> | null): globalThis.Promise<$.GoError> {
	return status.Status.prototype.Err.call(await FromProto(s))
}

export async function FromProto(s: spb.Status | $.VarRef<spb.Status> | null): globalThis.Promise<status.Status | $.VarRef<status.Status> | null> {
	return status.FromProto(s)
}

export async function FromError(err: $.GoError): globalThis.Promise<[status.Status | $.VarRef<status.Status> | null, boolean]> {
	let s: status.Status | $.VarRef<status.Status> | null = null! as status.Status | $.VarRef<status.Status> | null
	let ok: boolean = false
	if (err == null) {
		return [null, true]
	}
	type grpcstatus = {
		GRPCStatus(): status.Status | $.VarRef<status.Status> | null | globalThis.Promise<status.Status | $.VarRef<status.Status> | null>
	}

	$.registerInterfaceType(
		"status.grpcstatus",
		null,
		[$.methodSignature("GRPCStatus", [], [/* @__PURE__ */ $.pointerType("status.Status")])]
	);
	{
		let [gs, __goscriptShadow0] = $.typeAssertTuple<grpcstatus | null>(err, "status.grpcstatus")
		if (__goscriptShadow0) {
			let grpcStatus: status.Status | $.VarRef<status.Status> | null = ((__goscriptAwait = (gs !== null && (gs as any).__isVarRef !== true && (gs as any).__goValue === undefined ? (gs as Exclude<grpcstatus, null>) : $.pointerValue<Exclude<grpcstatus, null>>(gs)).GRPCStatus(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as status.Status | $.VarRef<status.Status> | null)
			if (grpcStatus == null) {
				// Error has status nil, which maps to codes.OK. There
				// is no sensible behavior for this, so we turn it into
				// an error with codes.Unknown and discard the existing
				// status.
				return [New(2, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), false]
			}
			return [grpcStatus, true]
		}
	}
	let gs: $.VarRef<grpcstatus | null> = $.varRef(null! as grpcstatus | null)
	if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(gs, "*status.grpcstatus", /* @__PURE__ */ $.pointerType("status.grpcstatus")))) {
		let grpcStatus: status.Status | $.VarRef<status.Status> | null = ((__goscriptAwait = $.pointerValue<Exclude<grpcstatus, null>>(gs.value).GRPCStatus(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as status.Status | $.VarRef<status.Status> | null)
		if (grpcStatus == null) {
			// Error wraps an error that has status nil, which maps
			// to codes.OK.  There is no sensible behavior for this,
			// so we turn it into an error with codes.Unknown and
			// discard the existing status.
			return [New(2, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), false]
		}
		let p: spb.Status | $.VarRef<spb.Status> | null = await (grpcStatus !== null && (grpcStatus as any).__isVarRef !== true && (grpcStatus as any).__goValue === undefined ? ((grpcStatus as any) as status.Status).Proto() : status.Status.prototype.Proto.call(grpcStatus))
		$.pointerValue<spb.Status>(p).Message = (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [await status.FromProto(p), true]
	}
	return [New(2, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), false]
}

export async function Convert(err: $.GoError): globalThis.Promise<status.Status | $.VarRef<status.Status> | null> {
	let __goscriptTuple0: any = await FromError(err)
	let s: status.Status | $.VarRef<status.Status> | null = __goscriptTuple0[0]
	return s
}

export async function Code(err: $.GoError): globalThis.Promise<codes.Code> {
	// Don't use FromError to avoid allocation of OK status.
	if (err == null) {
		return 0
	}

	return status.Status.prototype.Code.call(await Convert(err))
}

export async function FromContextError(err: $.GoError): globalThis.Promise<status.Status | $.VarRef<status.Status> | null> {
	if (err == null) {
		return null
	}
	if (errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(context.DeadlineExceeded)!)) {
		return New(4, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	if (errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(context.Canceled)!)) {
		return New(1, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	return New(2, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
}

var __goscriptAwait: any
