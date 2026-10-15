// Generated file based on transport_factory.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as context from "@goscript/context/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_transport from "./transport.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TTransportFactory", "thrift.tTransportFactory"])

export type TTransportFactory = {
	GetTransport(trans: __goscript_transport.TTransport | null): [__goscript_transport.TTransport | null, $.GoError] | globalThis.Promise<[__goscript_transport.TTransport | null, $.GoError]>
}

$.registerInterfaceType(
	"thrift.TTransportFactory",
	null,
	[$.methodSignature("GetTransport", [["trans", "thrift.TTransport"]], ["thrift.TTransport", "error"])]
);

export class tTransportFactory {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tTransportFactory {
		return new tTransportFactory(this, true)
	}

	public __goscriptAssign(source: tTransportFactory): void {
	}

	public GetTransport(trans: __goscript_transport.TTransport | null): [__goscript_transport.TTransport | null, $.GoError] {
		const p: tTransportFactory | $.VarRef<tTransportFactory> | null = this;
		return [trans, null]
	}

	static __typeInfo = $.registerStructType(
		"thrift.tTransportFactory",
		() => new tTransportFactory(),
		() => [$.methodSignature("GetTransport", [["trans", "thrift.TTransport"]], ["thrift.TTransport", "error"], true)],
		tTransportFactory,
		() => []
	)
}

export function NewTTransportFactory(): TTransportFactory | null {
	return $.interfaceValue<TTransportFactory | null>(new tTransportFactory(), "*thrift.tTransportFactory", /* @__PURE__ */ $.pointerType("thrift.tTransportFactory"))
}
