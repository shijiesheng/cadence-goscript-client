// Generated file based on client.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

export async function RequestBodyEncodeError(req: transport.Request | $.VarRef<transport.Request> | null, err: $.GoError): globalThis.Promise<$.GoError> {
	return newClientEncodingError(req, false, false, err)
}

export async function ResponseBodyDecodeError(req: transport.Request | $.VarRef<transport.Request> | null, err: $.GoError): globalThis.Promise<$.GoError> {
	return newClientEncodingError(req, true, false, err)
}

export async function RequestHeadersEncodeError(req: transport.Request | $.VarRef<transport.Request> | null, err: $.GoError): globalThis.Promise<$.GoError> {
	return newClientEncodingError(req, false, true, err)
}

export async function ResponseHeadersDecodeError(req: transport.Request | $.VarRef<transport.Request> | null, err: $.GoError): globalThis.Promise<$.GoError> {
	return newClientEncodingError(req, true, true, err)
}

export async function newClientEncodingError(req: transport.Request | $.VarRef<transport.Request> | null, isResponse: boolean, isHeader: boolean, err: $.GoError): globalThis.Promise<$.GoError> {
	const req$: transport.Request = req == null ? $.pointerTarget<transport.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<transport.Request>(req)
	let parts: $.Slice<string> = $.arrayToSlice<string>(["failed to"])
	if (isResponse) {
		parts = $.appendOne(parts, await fmt.Sprintf("decode %q response", (req$ as transport.Request).Encoding))
	} else {
		parts = $.appendOne(parts, await fmt.Sprintf("encode %q request", (req$ as transport.Request).Encoding))
	}
	if (isHeader) {
		parts = $.appendOne(parts, "headers")
	} else {
		parts = $.appendOne(parts, "body")
	}
	parts = $.appendOne(parts, await fmt.Sprintf("for procedure %q of service %q: %v", (req$ as transport.Request).Procedure, (req$ as transport.Request).Service, (err as any)))
	return $.interfaceValue<$.GoError>(yarpcerrors.Newf(3, strings.Join(parts, " "), null), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}
