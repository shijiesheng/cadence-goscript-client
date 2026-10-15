// Generated file based on server.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as context from "@goscript/context/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript__type from "./type.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import type * as __goscript_processor_factory from "./processor_factory.gs.ts"

import type * as __goscript_protocol from "./protocol.gs.ts"

import type * as __goscript_protocol_factory from "./protocol_factory.gs.ts"

import type * as __goscript_server_transport from "./server_transport.gs.ts"

import type * as __goscript_transport from "./transport.gs.ts"

import type * as __goscript_transport_factory from "./transport_factory.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TServer"])

export type TServer = {
	InputProtocolFactory(): __goscript_protocol_factory.TProtocolFactory | null
	InputTransportFactory(): __goscript_transport_factory.TTransportFactory | null
	OutputProtocolFactory(): __goscript_protocol_factory.TProtocolFactory | null
	OutputTransportFactory(): __goscript_transport_factory.TTransportFactory | null
	ProcessorFactory(): __goscript_processor_factory.TProcessorFactory | null
	Serve(): $.GoError | globalThis.Promise<$.GoError>
	ServerTransport(): __goscript_server_transport.TServerTransport | null
	Stop(): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"thrift.TServer",
	null,
	[$.methodSignature("InputProtocolFactory", [], ["thrift.TProtocolFactory"]), $.methodSignature("InputTransportFactory", [], ["thrift.TTransportFactory"]), $.methodSignature("OutputProtocolFactory", [], ["thrift.TProtocolFactory"]), $.methodSignature("OutputTransportFactory", [], ["thrift.TTransportFactory"]), $.methodSignature("ProcessorFactory", [], ["thrift.TProcessorFactory"]), $.methodSignature("Serve", [], ["error"]), $.methodSignature("ServerTransport", [], ["thrift.TServerTransport"]), $.methodSignature("Stop", [], ["error"])]
);
