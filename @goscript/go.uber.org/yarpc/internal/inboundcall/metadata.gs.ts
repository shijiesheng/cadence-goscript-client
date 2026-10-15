// Generated file based on metadata.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/internal/inboundcall", ["inboundcall.Metadata", "inboundcall.metadataKey"])

export type Metadata = {
	Caller(): string
	CallerProcedure(): string
	Encoding(): transport.Encoding
	Headers(): transport.Headers
	Procedure(): string
	RoutingDelegate(): string
	RoutingKey(): string
	Service(): string
	ShardKey(): string
	Transport(): string
	WriteResponseHeader(k: string, v: string): $.GoError
}

$.registerInterfaceType(
	"inboundcall.Metadata",
	null,
	[$.methodSignature("Caller", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("CallerProcedure", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Encoding", [], [/* @__PURE__ */ $.basicType("string", "transport.Encoding")]), $.methodSignature("Headers", [], ["transport.Headers"]), $.methodSignature("Procedure", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("RoutingDelegate", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("RoutingKey", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Service", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ShardKey", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Transport", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("WriteResponseHeader", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("string")]], ["error"])]
);

export class metadataKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): metadataKey {
		return new metadataKey(this, true)
	}

	public __goscriptAssign(source: metadataKey): void {
	}

	static __typeInfo = $.registerStructType(
		"inboundcall.metadataKey",
		() => new metadataKey(),
		() => [],
		metadataKey,
		() => []
	)
}

export function WithMetadata(ctx: context.Context | null, md: Metadata | null): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new metadataKey(undefined, true), "inboundcall.metadataKey", "inboundcall.metadataKey"), (md as any))
}

export async function GetMetadata(ctx: context.Context | null): globalThis.Promise<[Metadata | null, boolean]> {
	let [md, ok] = $.typeAssertTuple<Metadata | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new metadataKey(undefined, true), "inboundcall.metadataKey", "inboundcall.metadataKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "inboundcall.Metadata")
	return [md, ok]
}

var __goscriptAwait: any
