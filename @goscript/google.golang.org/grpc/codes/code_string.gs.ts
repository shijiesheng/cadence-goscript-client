// Generated file based on code_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import * as __goscript_codes from "./codes.gs.ts"
import "@goscript/strconv/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "./codes.gs.ts"

function __goscriptInit0(): void {
	internal.__goscript_set_CanonicalString($.interfaceValue($.goFunc(canonicalString, "google.golang.org/grpc/codes.canonicalString"), "func(c codes.Code) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint32", "codes.Code")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)))
}

export function Code_String(c: __goscript_codes.Code): string {
	switch (c) {
		case 0:
		{
			return "OK"
			break
		}
		case 1:
		{
			return "Canceled"
			break
		}
		case 2:
		{
			return "Unknown"
			break
		}
		case 3:
		{
			return "InvalidArgument"
			break
		}
		case 4:
		{
			return "DeadlineExceeded"
			break
		}
		case 5:
		{
			return "NotFound"
			break
		}
		case 6:
		{
			return "AlreadyExists"
			break
		}
		case 7:
		{
			return "PermissionDenied"
			break
		}
		case 8:
		{
			return "ResourceExhausted"
			break
		}
		case 9:
		{
			return "FailedPrecondition"
			break
		}
		case 10:
		{
			return "Aborted"
			break
		}
		case 11:
		{
			return "OutOfRange"
			break
		}
		case 12:
		{
			return "Unimplemented"
			break
		}
		case 13:
		{
			return "Internal"
			break
		}
		case 14:
		{
			return "Unavailable"
			break
		}
		case 15:
		{
			return "DataLoss"
			break
		}
		case 16:
		{
			return "Unauthenticated"
			break
		}
		default:
		{
			return $.concatString(($.concatString("Code(", strconv.FormatInt($.int64(c), 10))), ")")
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function canonicalString(c: __goscript_codes.Code): string {
	switch (c) {
		case 0:
		{
			return "OK"
			break
		}
		case 1:
		{
			return "CANCELLED"
			break
		}
		case 2:
		{
			return "UNKNOWN"
			break
		}
		case 3:
		{
			return "INVALID_ARGUMENT"
			break
		}
		case 4:
		{
			return "DEADLINE_EXCEEDED"
			break
		}
		case 5:
		{
			return "NOT_FOUND"
			break
		}
		case 6:
		{
			return "ALREADY_EXISTS"
			break
		}
		case 7:
		{
			return "PERMISSION_DENIED"
			break
		}
		case 8:
		{
			return "RESOURCE_EXHAUSTED"
			break
		}
		case 9:
		{
			return "FAILED_PRECONDITION"
			break
		}
		case 10:
		{
			return "ABORTED"
			break
		}
		case 11:
		{
			return "OUT_OF_RANGE"
			break
		}
		case 12:
		{
			return "UNIMPLEMENTED"
			break
		}
		case 13:
		{
			return "INTERNAL"
			break
		}
		case 14:
		{
			return "UNAVAILABLE"
			break
		}
		case 15:
		{
			return "DATA_LOSS"
			break
		}
		case 16:
		{
			return "UNAUTHENTICATED"
			break
		}
		default:
		{
			return $.concatString(($.concatString("CODE(", strconv.FormatInt($.int64(c), 10))), ")")
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export { __goscriptInit0 }
