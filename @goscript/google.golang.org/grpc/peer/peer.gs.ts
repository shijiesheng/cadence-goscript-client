// Generated file based on peer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as net from "@goscript/net/index.js"

import * as strings from "@goscript/strings/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import type * as io from "@goscript/io/index.js"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/index.js"
import "@goscript/strings/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"

$.registerTypePackagePath("google.golang.org/grpc/peer", ["peer.Peer", "peer.peerKey"])

export class Peer {
	// Addr is the peer address.
	public get Addr(): net.Addr | null {
		return this._fields.Addr
	}

	public set Addr(value: net.Addr | null) {
		this._fields.Addr = value
	}

	// LocalAddr is the local address.
	public get LocalAddr(): net.Addr | null {
		return this._fields.LocalAddr
	}

	public set LocalAddr(value: net.Addr | null) {
		this._fields.LocalAddr = value
	}

	// AuthInfo is the authentication information of the transport.
	// It is nil if there is no transport security being used.
	public get AuthInfo(): credentials.AuthInfo | null {
		return this._fields.AuthInfo
	}

	public set AuthInfo(value: credentials.AuthInfo | null) {
		this._fields.AuthInfo = value
	}

	public _fields: {
		Addr: net.Addr | null
		LocalAddr: net.Addr | null
		AuthInfo: credentials.AuthInfo | null
	}

	constructor(init?: Partial<{Addr?: net.Addr | null, LocalAddr?: net.Addr | null, AuthInfo?: credentials.AuthInfo | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Addr: init?.Addr ?? (null! as net.Addr | null),
			LocalAddr: init?.LocalAddr ?? (null! as net.Addr | null),
			AuthInfo: init?.AuthInfo ?? (null! as credentials.AuthInfo | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Peer {
		return new Peer(this, true)
	}

	public __goscriptAssign(source: Peer): void {
		const target = this._fields
		const values = source._fields
		target.Addr = $.assignFieldValue(target.Addr, values.Addr, "net.Addr")
		target.LocalAddr = $.assignFieldValue(target.LocalAddr, values.LocalAddr, "net.Addr")
		target.AuthInfo = $.assignFieldValue(target.AuthInfo, values.AuthInfo, "credentials.AuthInfo")
	}

	public async String(): globalThis.Promise<string> {
		const p: Peer | $.VarRef<Peer> | null = this;
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		if (p == null) {
			return "Peer<nil>"
		}
		let sb: strings.Builder | $.VarRef<strings.Builder> | null = new strings.Builder()
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), "Peer{")
		if ((p$ as Peer).Addr != null) {
			await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(sb, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, "Addr: '%s', ", (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as Peer).Addr).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		} else {
			await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(sb, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, "Addr: <nil>, ")
		}
		if ((p$ as Peer).LocalAddr != null) {
			await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(sb, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, "LocalAddr: '%s', ", (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as Peer).LocalAddr).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		} else {
			await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(sb, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, "LocalAddr: <nil>, ")
		}
		if ((p$ as Peer).AuthInfo != null) {
			await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(sb, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, "AuthInfo: '%s'", (__goscriptAwait = $.pointerValue<Exclude<credentials.AuthInfo, null>>((p$ as Peer).AuthInfo).AuthType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		} else {
			await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(sb, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, "AuthInfo: <nil>")
		}
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), "}")

		return strings.Builder.prototype.String.call($.pointerValue<strings.Builder>(sb))
	}

	static __typeInfo = $.registerStructType(
		"peer.Peer",
		() => new Peer(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Peer,
		() => [/* @__PURE__ */ $.structField("Addr", "net.Addr", [0], 0, true), /* @__PURE__ */ $.structField("LocalAddr", "net.Addr", [1], 16, true), /* @__PURE__ */ $.structField("AuthInfo", "credentials.AuthInfo", [2], 32, true)]
	)
}

export class peerKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): peerKey {
		return new peerKey(this, true)
	}

	public __goscriptAssign(source: peerKey): void {
	}

	static __typeInfo = $.registerStructType(
		"peer.peerKey",
		() => new peerKey(),
		() => [],
		peerKey,
		() => []
	)
}

export function NewContext(ctx: context.Context | null, p: Peer | $.VarRef<Peer> | null): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new peerKey(undefined, true), "peer.peerKey", "peer.peerKey"), $.interfaceValue(p, "*peer.Peer", /* @__PURE__ */ $.pointerType("peer.Peer")))
}

export async function FromContext(ctx: context.Context | null): globalThis.Promise<[Peer | $.VarRef<Peer> | null, boolean]> {
	let p: Peer | $.VarRef<Peer> | null = null! as Peer | $.VarRef<Peer> | null
	let ok: boolean = false
	let __goscriptTuple0: any = $.typeAssertTuple<Peer | $.VarRef<Peer> | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new peerKey(undefined, true), "peer.peerKey", "peer.peerKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("peer.Peer"))
	p = __goscriptTuple0[0]
	ok = __goscriptTuple0[1]
	return [p, ok]
}

var __goscriptAwait: any
