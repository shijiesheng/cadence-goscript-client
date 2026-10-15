// Generated file based on handlers.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as net from "@goscript/net/index.js"

import type * as __goscript_stats from "./stats.gs.ts"
import "@goscript/context/index.js"
import "@goscript/net/index.js"

$.registerTypePackagePath("google.golang.org/grpc/stats", ["stats.ConnTagInfo", "stats.RPCTagInfo", "stats.Handler"])

export type Handler = {
	HandleConn(_p0: context.Context | null, _p1: __goscript_stats.ConnStats | null): void
	HandleRPC(_p0: context.Context | null, _p1: __goscript_stats.RPCStats | null): void
	TagConn(_p0: context.Context | null, _p1: ConnTagInfo | $.VarRef<ConnTagInfo> | null): context.Context | null
	TagRPC(_p0: context.Context | null, _p1: RPCTagInfo | $.VarRef<RPCTagInfo> | null): context.Context | null
}

$.registerInterfaceType(
	"stats.Handler",
	null,
	[$.methodSignature("HandleConn", ["context.Context", "stats.ConnStats"]), $.methodSignature("HandleRPC", ["context.Context", "stats.RPCStats"]), $.methodSignature("TagConn", ["context.Context", /* @__PURE__ */ $.pointerType("stats.ConnTagInfo")], ["context.Context"]), $.methodSignature("TagRPC", ["context.Context", /* @__PURE__ */ $.pointerType("stats.RPCTagInfo")], ["context.Context"])]
);

export class ConnTagInfo {
	// RemoteAddr is the remote address of the corresponding connection.
	public get RemoteAddr(): net.Addr | null {
		return this._fields.RemoteAddr
	}

	public set RemoteAddr(value: net.Addr | null) {
		this._fields.RemoteAddr = value
	}

	// LocalAddr is the local address of the corresponding connection.
	public get LocalAddr(): net.Addr | null {
		return this._fields.LocalAddr
	}

	public set LocalAddr(value: net.Addr | null) {
		this._fields.LocalAddr = value
	}

	public _fields: {
		RemoteAddr: net.Addr | null
		LocalAddr: net.Addr | null
	}

	constructor(init?: Partial<{RemoteAddr?: net.Addr | null, LocalAddr?: net.Addr | null}>, __goscriptValue?: boolean) {
		this._fields = {
			RemoteAddr: init?.RemoteAddr ?? (null! as net.Addr | null),
			LocalAddr: init?.LocalAddr ?? (null! as net.Addr | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConnTagInfo {
		return new ConnTagInfo(this, true)
	}

	public __goscriptAssign(source: ConnTagInfo): void {
		const target = this._fields
		const values = source._fields
		target.RemoteAddr = $.assignFieldValue(target.RemoteAddr, values.RemoteAddr, "net.Addr")
		target.LocalAddr = $.assignFieldValue(target.LocalAddr, values.LocalAddr, "net.Addr")
	}

	static __typeInfo = $.registerStructType(
		"stats.ConnTagInfo",
		() => new ConnTagInfo(),
		() => [],
		ConnTagInfo,
		() => [/* @__PURE__ */ $.structField("RemoteAddr", "net.Addr", [0], 0, true), /* @__PURE__ */ $.structField("LocalAddr", "net.Addr", [1], 16, true)]
	)
}

export class RPCTagInfo {
	// FullMethodName is the RPC method in the format of /package.service/method.
	public get FullMethodName(): string {
		return this._fields.FullMethodName
	}

	public set FullMethodName(value: string) {
		this._fields.FullMethodName = value
	}

	// FailFast indicates if this RPC is failfast.
	// This field is only valid on client side, it's always false on server side.
	public get FailFast(): boolean {
		return this._fields.FailFast
	}

	public set FailFast(value: boolean) {
		this._fields.FailFast = value
	}

	public _fields: {
		FullMethodName: string
		FailFast: boolean
	}

	constructor(init?: Partial<{FullMethodName?: string, FailFast?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			FullMethodName: init?.FullMethodName ?? ("" as string),
			FailFast: init?.FailFast ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RPCTagInfo {
		return new RPCTagInfo(this, true)
	}

	public __goscriptAssign(source: RPCTagInfo): void {
		const target = this._fields
		const values = source._fields
		target.FullMethodName = values.FullMethodName
		target.FailFast = values.FailFast
	}

	static __typeInfo = $.registerStructType(
		"stats.RPCTagInfo",
		() => new RPCTagInfo(),
		() => [],
		RPCTagInfo,
		() => [/* @__PURE__ */ $.structField("FullMethodName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("FailFast", /* @__PURE__ */ $.basicType("bool"), [1], 16, true)]
	)
}
