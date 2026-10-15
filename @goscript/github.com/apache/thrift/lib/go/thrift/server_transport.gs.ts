// Generated file based on server_transport.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as context from "@goscript/context/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript_transport from "./transport.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TServerTransport"])

export type TServerTransport = {
	Accept(): [__goscript_transport.TTransport | null, $.GoError] | globalThis.Promise<[__goscript_transport.TTransport | null, $.GoError]>
	Close(): $.GoError | globalThis.Promise<$.GoError>
	Interrupt(): $.GoError | globalThis.Promise<$.GoError>
	Listen(): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"thrift.TServerTransport",
	null,
	[$.methodSignature("Accept", [], ["thrift.TTransport", "error"]), $.methodSignature("Close", [], ["error"]), $.methodSignature("Interrupt", [], ["error"]), $.methodSignature("Listen", [], ["error"])]
);
