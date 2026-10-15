// Generated file based on metadata.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/context/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/grpcutil", ["grpcutil.mdExtraKey"])

export class mdExtraKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mdExtraKey {
		return new mdExtraKey(this, true)
	}

	public __goscriptAssign(source: mdExtraKey): void {
	}

	static __typeInfo = $.registerStructType(
		"grpcutil.mdExtraKey",
		() => new mdExtraKey(),
		() => [],
		mdExtraKey,
		() => []
	)
}

export function WithExtraMetadata(ctx: context.Context | null, md: metadata.MD): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new mdExtraKey(undefined, true), "grpcutil.mdExtraKey", "grpcutil.mdExtraKey"), $.namedValueInterfaceValue<any>(md, "metadata.MD", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
}

export async function ExtraMetadata(ctx: context.Context | null): globalThis.Promise<[metadata.MD, boolean]> {
	let md: metadata.MD = null! as metadata.MD
	let ok: boolean = false
	let __goscriptTuple0: any = $.typeAssertTuple<metadata.MD>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new mdExtraKey(undefined, true), "grpcutil.mdExtraKey", "grpcutil.mdExtraKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "metadata.MD")
	md = __goscriptTuple0[0]
	ok = __goscriptTuple0[1]
	return [md, ok]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Append: (receiver: any, ...args: any[]) => (metadata.MD_Append as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Copy: (receiver: any, ...args: any[]) => (metadata.MD_Copy as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Delete: (receiver: any, ...args: any[]) => (metadata.MD_Delete as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (metadata.MD_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (metadata.MD_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (metadata.MD_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ("metadata.MD")
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Append", [["k", /* @__PURE__ */ $.basicType("string")], ["vals", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]]), $.methodSignature("Copy", [], ["metadata.MD"]), $.methodSignature("Delete", [["k", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Get", [["k", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Set", [["k", /* @__PURE__ */ $.basicType("string")], ["vals", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]])])
}

var __goscriptAwait: any
