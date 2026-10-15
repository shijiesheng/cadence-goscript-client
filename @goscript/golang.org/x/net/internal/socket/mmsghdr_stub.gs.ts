// Generated file based on mmsghdr_stub.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as net from "@goscript/net/index.js"

import type * as __goscript_norace from "./norace.gs.ts"

import type * as __goscript_socket from "./socket.gs.ts"
import "@goscript/net/index.js"

$.registerTypePackagePath("golang.org/x/net/internal/socket", ["socket.mmsghdr", "socket.mmsghdrs"])

export type mmsghdrs = $.Slice<mmsghdr>

$.registerNamedType("socket.mmsghdrs", /* @__PURE__ */ $.sliceType("socket.mmsghdr"));

$.registerNamedValueType(
	"socket.mmsghdrs",
	{pack: (receiver: any, ...args: any[]) => (mmsghdrs_pack as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), unpack: (receiver: any, ...args: any[]) => (mmsghdrs_unpack as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("pack", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["parseFn", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("string")], results: ["net.Addr", "error"] } as $.FunctionTypeInfo)], ["marshalFn", ({ kind: $.TypeKind.Function, params: ["net.Addr"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("unpack", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["parseFn", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("string")], results: ["net.Addr", "error"] } as $.FunctionTypeInfo)], ["hint", /* @__PURE__ */ $.basicType("string")]], ["error"])]
);

$.registerNamedValueType(
	"*socket.mmsghdrs",
	{pack: (receiver: any, ...args: any[]) => (mmsghdrs_pack as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), unpack: (receiver: any, ...args: any[]) => (mmsghdrs_unpack as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("pack", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["parseFn", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("string")], results: ["net.Addr", "error"] } as $.FunctionTypeInfo)], ["marshalFn", ({ kind: $.TypeKind.Function, params: ["net.Addr"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("unpack", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["parseFn", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("string")], results: ["net.Addr", "error"] } as $.FunctionTypeInfo)], ["hint", /* @__PURE__ */ $.basicType("string")]], ["error"])]
);

export class mmsghdr {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mmsghdr {
		return new mmsghdr(this, true)
	}

	public __goscriptAssign(source: mmsghdr): void {
	}

	static __typeInfo = $.registerStructType(
		"socket.mmsghdr",
		() => new mmsghdr(),
		() => [],
		mmsghdr,
		() => []
	)
}

export function mmsghdrs_pack(hs: mmsghdrs, ms: $.Slice<__goscript_socket.Message>, parseFn: ((_p0: $.Slice<number>, _p1: string) => [net.Addr | null, $.GoError] | globalThis.Promise<[net.Addr | null, $.GoError]>) | null, marshalFn: ((_p0: net.Addr | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null): $.GoError {
	return null
}

export function mmsghdrs_unpack(hs: mmsghdrs, ms: $.Slice<__goscript_socket.Message>, parseFn: ((_p0: $.Slice<number>, _p1: string) => [net.Addr | null, $.GoError] | globalThis.Promise<[net.Addr | null, $.GoError]>) | null, hint: string): $.GoError {
	return null
}
