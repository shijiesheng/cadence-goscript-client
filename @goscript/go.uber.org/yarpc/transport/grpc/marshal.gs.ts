// Generated file based on marshal.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as rpc from "@goscript/github.com/gogo/googleapis/google/rpc/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as status from "@goscript/github.com/gogo/status/index.js"
import "@goscript/github.com/gogo/googleapis/google/rpc/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/github.com/gogo/status/index.js"

export function unmarshalError(body: $.Slice<number>): $.GoError {
	let protobufStatus: rpc.Status | $.VarRef<rpc.Status> | null = new rpc.Status()
	{
		let err = proto.Unmarshal(body, $.interfaceValue<proto.Message | null>(protobufStatus, "*rpc.Status", /* @__PURE__ */ $.pointerType("rpc.Status")))
		if (err != null) {
			return err
		}
	}
	return status.ErrorProto(protobufStatus)
}

export async function marshalError(st: status.Status | $.VarRef<status.Status> | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if ($.sliceLen(await (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as status.Status).Details() : status.Status.prototype.Details.call(st))) == 0) {
		return [null, null]
	}
	return proto.Marshal($.interfaceValue<proto.Message | null>(await (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as status.Status).Proto() : status.Status.prototype.Proto.call(st)), "*rpc.Status", /* @__PURE__ */ $.pointerType("rpc.Status")))
}
