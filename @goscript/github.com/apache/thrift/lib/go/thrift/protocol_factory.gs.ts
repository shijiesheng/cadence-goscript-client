// Generated file based on protocol_factory.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as context from "@goscript/context/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript__type from "./type.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import type * as __goscript_protocol from "./protocol.gs.ts"

import type * as __goscript_transport from "./transport.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TProtocolFactory"])

export type TProtocolFactory = {
	GetProtocol(trans: __goscript_transport.TTransport | null): __goscript_protocol.TProtocol | null | globalThis.Promise<__goscript_protocol.TProtocol | null>
}

$.registerInterfaceType(
	"thrift.TProtocolFactory",
	null,
	[$.methodSignature("GetProtocol", [["trans", "thrift.TTransport"]], ["thrift.TProtocol"])]
);
