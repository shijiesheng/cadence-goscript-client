// Generated file based on server.go
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

export async function RequestBodyDecodeError(req: transport.Request | $.VarRef<transport.Request> | null, err: $.GoError): globalThis.Promise<$.GoError> {
	return newServerEncodingError(req, null, false, false, err)
}

export async function ResponseBodyEncodeError(req: transport.Request | $.VarRef<transport.Request> | null, err: $.GoError): globalThis.Promise<$.GoError> {
	return newServerEncodingError(req, null, true, false, err)
}

export async function RequestHeadersDecodeError(req: transport.Request | $.VarRef<transport.Request> | null, err: $.GoError): globalThis.Promise<$.GoError> {
	return newServerEncodingError(req, null, false, true, err)
}

export async function ResponseHeadersEncodeError(req: transport.Request | $.VarRef<transport.Request> | null, err: $.GoError): globalThis.Promise<$.GoError> {
	return newServerEncodingError(req, null, true, true, err)
}

export async function ExpectEncodings(req: transport.Request | $.VarRef<transport.Request> | null, want: $.Slice<transport.Encoding>): globalThis.Promise<$.GoError> {
	let got = $.pointerValue<transport.Request>(req).Encoding
	for (let __goscriptRangeTarget0 = want, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let w = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as transport.Encoding)
		if ($.stringEqual(w, got)) {
			return null
		}
	}

	return newServerEncodingError(req, want, false, false, newEncodingMismatchError(want, got))
}

export async function newServerEncodingError(req: transport.Request | $.VarRef<transport.Request> | null, encodings: $.Slice<transport.Encoding>, isResponse: boolean, isHeader: boolean, err: $.GoError): globalThis.Promise<$.GoError> {
	const req$: transport.Request = req == null ? $.pointerTarget<transport.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<transport.Request>(req)
	if ($.sliceLen(encodings) == 0) {
		encodings = $.arrayToSlice<transport.Encoding>([(req$ as transport.Request).Encoding])
	}
	let parts: $.Slice<string> = $.arrayToSlice<string>(["failed to"])
	if (isResponse) {
		switch ($.sliceLen(encodings)) {
			case 1:
			{
				parts = $.appendOne(parts, await fmt.Sprintf("encode %q response", $.arrayIndex(encodings!, 0)))
				break
			}
			default:
			{
				parts = $.appendOne(parts, await fmt.Sprintf("encode %v response", $.interfaceValue(encodings, "[]transport.Encoding", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string", "transport.Encoding")))))
				break
			}
		}
	} else {
		switch ($.sliceLen(encodings)) {
			case 1:
			{
				parts = $.appendOne(parts, await fmt.Sprintf("decode %q request", $.arrayIndex(encodings!, 0)))
				break
			}
			default:
			{
				parts = $.appendOne(parts, await fmt.Sprintf("decode %v request", $.interfaceValue(encodings, "[]transport.Encoding", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string", "transport.Encoding")))))
				break
			}
		}
	}
	if (isHeader) {
		parts = $.appendOne(parts, "headers")
	} else {
		parts = $.appendOne(parts, "body")
	}
	parts = $.appendOne(parts, await fmt.Sprintf("for procedure %q of service %q from caller %q: %v", (req$ as transport.Request).Procedure, (req$ as transport.Request).Service, (req$ as transport.Request).Caller, (err as any)))
	return $.interfaceValue<$.GoError>(yarpcerrors.Newf(3, strings.Join(parts, " "), null), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function newEncodingMismatchError(want: $.Slice<transport.Encoding>, got: transport.Encoding): $.GoError {
	switch ($.sliceLen(want)) {
		case 1:
		{
			return fmt.Errorf("expected encoding %q but got %q", $.namedValueInterfaceValue<any>($.arrayIndex(want!, 0), "transport.Encoding", {}, /* @__PURE__ */ $.basicType("string", "transport.Encoding")), $.namedValueInterfaceValue<any>(got, "transport.Encoding", {}, /* @__PURE__ */ $.basicType("string", "transport.Encoding")))
			break
		}
		default:
		{
			return fmt.Errorf("expected one of encodings %v but got %q", $.interfaceValue(want, "[]transport.Encoding", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string", "transport.Encoding"))), $.namedValueInterfaceValue<any>(got, "transport.Encoding", {}, /* @__PURE__ */ $.basicType("string", "transport.Encoding")))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}
