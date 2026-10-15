// Generated file based on yarpcerrors.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

export function NewWithNamef(code: yarpcerrors.Code, name: string, format: string, args: $.Slice<any>): yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null {
	//lint:ignore SA1019 We still want to handle name behavior for backwards compatibility in existing transports.
	return yarpcerrors.Status.prototype.WithName.call(yarpcerrors.Newf(code, format, args), name)
}

export async function AnnotateWithInfo(status: yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null, format: string, args: $.Slice<any>): globalThis.Promise<yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null> {
	return yarpcerrors.Newf((status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Code() : yarpcerrors.Status.prototype.Code.call(status)), "%s: %s", $.arrayToSlice<any>([await fmt.Sprintf(format, ...(args ?? [])), (status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(status))]))
}
