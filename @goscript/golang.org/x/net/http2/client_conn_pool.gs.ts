// Generated file based on client_conn_pool.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as errors from "@goscript/errors/index.js"

import * as http from "@goscript/net/http/index.js"

import * as sync from "@goscript/sync/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as hpack from "@goscript/golang.org/x/net/http2/hpack/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as httptrace from "@goscript/net/http/httptrace/index.js"

import type * as textproto from "@goscript/net/textproto/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_flow from "./flow.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_http2 from "./http2.gs.ts"

import * as __goscript_pipe from "./pipe.gs.ts"

import * as __goscript_timer from "./timer.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/errors/index.js"
import "@goscript/net/http/index.js"
import "@goscript/sync/index.js"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/golang.org/x/net/http2/hpack/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/net/http/httptrace/index.js"
import "@goscript/time/index.js"
import "./errors.gs.ts"
import "./flow.gs.ts"
import "./frame.gs.ts"
import "./http2.gs.ts"
import "./pipe.gs.ts"
import "./timer.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("golang.org/x/net/http2", ["http2.ClientConnPool", "http2.clientConnPoolIdleCloser", "http2.clientConnPool", "http2.dialCall", "http2.addConnCall", "http2.noDialClientConnPool"])

export type ClientConnPool = {
	GetClientConn(req: http.Request | $.VarRef<http.Request> | null, addr: string): [__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null, $.GoError] | globalThis.Promise<[__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null, $.GoError]>
	MarkDead(_p0: __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null): void
}

$.registerInterfaceType(
	"http2.ClientConnPool",
	null,
	[$.methodSignature("GetClientConn", [["req", /* @__PURE__ */ $.pointerType("http.Request")], ["addr", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("http2.ClientConn"), "error"]), $.methodSignature("MarkDead", [/* @__PURE__ */ $.pointerType("http2.ClientConn")])]
);

export type clientConnPoolIdleCloser = {
	GetClientConn(req: http.Request | $.VarRef<http.Request> | null, addr: string): [__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null, $.GoError] | globalThis.Promise<[__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null, $.GoError]>
	MarkDead(_p0: __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null): void
	closeIdleConnections(): void
}

$.registerInterfaceType(
	"http2.clientConnPoolIdleCloser",
	null,
	[$.methodSignature("GetClientConn", [["req", /* @__PURE__ */ $.pointerType("http.Request")], ["addr", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("http2.ClientConn"), "error"]), $.methodSignature("MarkDead", [/* @__PURE__ */ $.pointerType("http2.ClientConn")]), $.methodSignature("closeIdleConnections")]
);

export class clientConnPool {
	public get t(): __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null {
		return this._fields.t
	}

	public set t(value: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null) {
		this._fields.t = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	// TODO: add support for sharing conns based on cert names
	// (e.g. share conn for googleapis.com and appspot.com)
	public get conns(): globalThis.Map<string, $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null>> | null {
		return this._fields.conns
	}

	public set conns(value: globalThis.Map<string, $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null>> | null) {
		this._fields.conns = value
	}

	public get dialing(): globalThis.Map<string, dialCall | $.VarRef<dialCall> | null> | null {
		return this._fields.dialing
	}

	public set dialing(value: globalThis.Map<string, dialCall | $.VarRef<dialCall> | null> | null) {
		this._fields.dialing = value
	}

	public get keys(): globalThis.Map<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null, $.Slice<string>> | null {
		return this._fields.keys
	}

	public set keys(value: globalThis.Map<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null, $.Slice<string>> | null) {
		this._fields.keys = value
	}

	public get addConnCalls(): globalThis.Map<string, addConnCall | $.VarRef<addConnCall> | null> | null {
		return this._fields.addConnCalls
	}

	public set addConnCalls(value: globalThis.Map<string, addConnCall | $.VarRef<addConnCall> | null> | null) {
		this._fields.addConnCalls = value
	}

	public _fields: {
		t: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null
		mu: sync.Mutex
		conns: globalThis.Map<string, $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null>> | null
		dialing: globalThis.Map<string, dialCall | $.VarRef<dialCall> | null> | null
		keys: globalThis.Map<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null, $.Slice<string>> | null
		addConnCalls: globalThis.Map<string, addConnCall | $.VarRef<addConnCall> | null> | null
	}

	constructor(init?: Partial<{t?: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null, mu?: sync.Mutex, conns?: globalThis.Map<string, $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null>> | null, dialing?: globalThis.Map<string, dialCall | $.VarRef<dialCall> | null> | null, keys?: globalThis.Map<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null, $.Slice<string>> | null, addConnCalls?: globalThis.Map<string, addConnCall | $.VarRef<addConnCall> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			t: init?.t ?? (null! as __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			conns: init?.conns ?? (null! as globalThis.Map<string, $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null>> | null),
			dialing: init?.dialing ?? (null! as globalThis.Map<string, dialCall | $.VarRef<dialCall> | null> | null),
			keys: init?.keys ?? (null! as globalThis.Map<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null, $.Slice<string>> | null),
			addConnCalls: init?.addConnCalls ?? (null! as globalThis.Map<string, addConnCall | $.VarRef<addConnCall> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): clientConnPool {
		return new clientConnPool(this, true)
	}

	public __goscriptAssign(source: clientConnPool): void {
		const target = this._fields
		const values = source._fields
		target.t = values.t
		$.assignStruct(target.mu, values.mu)
		target.conns = values.conns
		target.dialing = values.dialing
		target.keys = values.keys
		target.addConnCalls = values.addConnCalls
	}

	public async GetClientConn(req: http.Request | $.VarRef<http.Request> | null, addr: string): globalThis.Promise<[__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null, $.GoError]> {
		const p: clientConnPool | $.VarRef<clientConnPool> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as clientConnPool).getClientConn(req, addr, true) : clientConnPool.prototype.getClientConn.call(p, req, addr, true))
	}

	public async MarkDead(cc: __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null): globalThis.Promise<void> {
		let p: clientConnPool | $.VarRef<clientConnPool> | null = this;
		using __defer = new $.DisposableStack()
		const p$: clientConnPool = p == null ? $.pointerTarget<clientConnPool>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<clientConnPool>(p)
		await (p$ as clientConnPool).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as clientConnPool).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		for (let __goscriptRangeTarget0 = $.mapGet<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null, $.Slice<string>, $.Slice<string>>((p$ as clientConnPool).keys, cc, null)[0], __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let key = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
			let __goscriptTuple0: any = $.mapGet<string, $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null>, $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null>>((p$ as clientConnPool).conns, key, null)
			let vv: $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null> = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (!ok) {
				continue
			}
			let newList: $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null> = filterOutClientConn(vv, cc)
			if ($.sliceLen(newList) > 0) {
				$.mapSet((p$ as clientConnPool).conns, key, newList)
			} else {
				$.deleteMapEntry((p$ as clientConnPool).conns, key)
			}
		}
		$.deleteMapEntry((p$ as clientConnPool).keys, cc)
	}

	public async addConnIfNeeded(key: string, t: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null, c: tls.Conn | $.VarRef<tls.Conn> | null): globalThis.Promise<[boolean, $.GoError]> {
		let p: clientConnPool | $.VarRef<clientConnPool> | null = this;
		let used: boolean = false
		let err: $.GoError = null! as $.GoError
		const p$: clientConnPool = p == null ? $.pointerTarget<clientConnPool>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<clientConnPool>(p)
		await (p$ as clientConnPool).mu.Lock()
		for (let __goscriptRangeTarget1 = $.mapGet<string, $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null>, $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null>>((p$ as clientConnPool).conns, key, null)[0], __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let cc = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null)
			if (await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as __goscript_transport.ClientConn).CanTakeNewRequest() : __goscript_transport.ClientConn.prototype.CanTakeNewRequest.call(cc))) {
				void (p$ as clientConnPool).mu.Unlock()
				return [false, null]
			}
		}
		let __goscriptTuple1: any = $.mapGet<string, addConnCall | $.VarRef<addConnCall> | null, addConnCall | $.VarRef<addConnCall> | null>((p$ as clientConnPool).addConnCalls, key, null)
		let call: addConnCall | $.VarRef<addConnCall> | null = __goscriptTuple1[0]
		let dup = __goscriptTuple1[1]
		if (!dup) {
			if ((p$ as clientConnPool).addConnCalls == null) {
				;(p$ as clientConnPool).addConnCalls = $.makeMap<string, addConnCall | $.VarRef<addConnCall> | null>()
			}
			call = new addConnCall({p: p, done: $.makeChannel<{}>(0, {}, "both")})
			$.mapSet((p$ as clientConnPool).addConnCalls, key, call)
			const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (t: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null, key: string, tc: tls.Conn | $.VarRef<tls.Conn> | null) => __receiver.run(t, key, tc))($.pointerValue<addConnCall>(call)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.Transport"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("tls.Conn")], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*addConnCall).run-fm")
			const __goscriptDeferArg0 = t
			const __goscriptDeferArg1 = key
			const __goscriptDeferArg2 = c
			queueMicrotask(async () => { await __goscriptDeferCallee1(__goscriptDeferArg0, __goscriptDeferArg1, __goscriptDeferArg2) })
		}
		void (p$ as clientConnPool).mu.Unlock()

		await $.chanRecv($.pointerValue<addConnCall>(call).done)
		if ($.pointerValue<addConnCall>(call).err != null) {
			return [false, $.pointerValue<addConnCall>(call).err]
		}
		return [!dup, null]
	}

	public addConnLocked(key: string, cc: __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null): void {
		let p: clientConnPool | $.VarRef<clientConnPool> | null = this;
		const p$: clientConnPool = p == null ? $.pointerTarget<clientConnPool>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<clientConnPool>(p)
		for (let __goscriptRangeTarget2 = $.mapGet<string, $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null>, $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null>>((p$ as clientConnPool).conns, key, null)[0], __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let v = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null)
			if ($.pointerEqual(v, cc)) {
				return
			}
		}
		if ((p$ as clientConnPool).conns == null) {
			;(p$ as clientConnPool).conns = $.makeMap<string, $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null>>()
		}
		if ((p$ as clientConnPool).keys == null) {
			;(p$ as clientConnPool).keys = $.makeMap<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null, $.Slice<string>>(undefined, /* @__PURE__ */ $.pointerType("http2.ClientConn"))
		}
		$.mapSet((p$ as clientConnPool).conns, key, $.appendOne($.mapGet<string, $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null>, $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null>>((p$ as clientConnPool).conns, key, null)[0], cc, $.appendZeros.nil))
		$.mapSet((p$ as clientConnPool).keys, cc, $.appendOne($.mapGet<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null, $.Slice<string>, $.Slice<string>>((p$ as clientConnPool).keys, cc, null)[0], key))
	}

	public async closeIdleConnections(): globalThis.Promise<void> {
		const p: clientConnPool | $.VarRef<clientConnPool> | null = this;
		using __defer = new $.DisposableStack()
		const p$: clientConnPool = p == null ? $.pointerTarget<clientConnPool>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<clientConnPool>(p)
		await (p$ as clientConnPool).mu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as clientConnPool).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		// TODO: don't close a cc if it was just added to the pool
		// milliseconds ago and has never been used. There's currently
		// a small race window with the HTTP/1 Transport's integration
		// where it can add an idle conn just before using it, and
		// somebody else can concurrently call CloseIdleConns and
		// break some caller's RoundTrip.
		for (const [__rangeKey, vv] of (p$ as clientConnPool).conns?.entries() ?? []) {
			for (let __goscriptRangeTarget3 = vv, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
				let cc = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null)
				await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as __goscript_transport.ClientConn).closeIfIdle() : __goscript_transport.ClientConn.prototype.closeIfIdle.call(cc))
			}
		}
	}

	public async getClientConn(req: http.Request | $.VarRef<http.Request> | null, addr: string, dialOnMiss: boolean): globalThis.Promise<[__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null, $.GoError]> {
		const p: clientConnPool | $.VarRef<clientConnPool> | null = this;
		const p$: clientConnPool = p == null ? $.pointerTarget<clientConnPool>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<clientConnPool>(p)
		// TODO(dneil): Dial a new connection when t.DisableKeepAlives is set?
		if (__goscript_transport.isConnectionCloseRequest(req) && dialOnMiss) {
			// It gets its own connection.
			await __goscript_transport.traceGetConn(req, addr)
			const singleUse: boolean = true
			let __goscriptTuple2: any = await __goscript_transport.Transport.prototype.dialClientConn.call((p$ as clientConnPool).t, http.Request.prototype.Context.call($.pointerValue<http.Request>(req)), addr, true)
			let cc: __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null = __goscriptTuple2[0]
			let err = __goscriptTuple2[1]
			if (err != null) {
				return [null, err]
			}
			return [cc, null]
		}
		while (true) {
			await (p$ as clientConnPool).mu.Lock()
			for (let __goscriptRangeTarget4 = $.mapGet<string, $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null>, $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null>>((p$ as clientConnPool).conns, addr, null)[0], __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
				let cc = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null)
				if (await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as __goscript_transport.ClientConn).ReserveNewRequest() : __goscript_transport.ClientConn.prototype.ReserveNewRequest.call(cc))) {
					// When a connection is presented to us by the net/http package,
					// the GetConn hook has already been called.
					// Don't call it a second time here.
					if (!$.pointerValue<__goscript_transport.ClientConn>(cc).getConnCalled) {
						await __goscript_transport.traceGetConn(req, addr)
					}
					$.pointerValue<__goscript_transport.ClientConn>(cc).getConnCalled = false
					void (p$ as clientConnPool).mu.Unlock()
					return [cc, null]
				}
			}
			if (!dialOnMiss) {
				void (p$ as clientConnPool).mu.Unlock()
				return [null, __goscript_transport.ErrNoCachedConn]
			}
			await __goscript_transport.traceGetConn(req, addr)
			let call: dialCall | $.VarRef<dialCall> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as clientConnPool).getStartDialLocked(http.Request.prototype.Context.call($.pointerValue<http.Request>(req)), addr) : clientConnPool.prototype.getStartDialLocked.call(p, http.Request.prototype.Context.call($.pointerValue<http.Request>(req)), addr))
			let call$: dialCall = call == null ? $.pointerTarget<dialCall>(call) : (call as any).__isVarRef === true ? (call as any).value : (call as any).__goValue === undefined ? (call as any) : $.pointerTarget<dialCall>(call)
			void (p$ as clientConnPool).mu.Unlock()
			await $.chanRecv((call$ as dialCall).done)
			if (await shouldRetryDial(call, req)) {
				continue
			}
			let cc: __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null = (call$ as dialCall).res
			let err = (call$ as dialCall).err
			if (err != null) {
				return [null, err]
			}
			if (await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as __goscript_transport.ClientConn).ReserveNewRequest() : __goscript_transport.ClientConn.prototype.ReserveNewRequest.call(cc))) {
				return [cc, null]
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async getStartDialLocked(ctx: context.Context | null, addr: string): globalThis.Promise<dialCall | $.VarRef<dialCall> | null> {
		let p: clientConnPool | $.VarRef<clientConnPool> | null = this;
		const p$: clientConnPool = p == null ? $.pointerTarget<clientConnPool>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<clientConnPool>(p)
		{
			let __goscriptTuple3: any = $.mapGet<string, dialCall | $.VarRef<dialCall> | null, dialCall | $.VarRef<dialCall> | null>((p$ as clientConnPool).dialing, addr, null)
			let call: dialCall | $.VarRef<dialCall> | null = __goscriptTuple3[0]
			let ok = __goscriptTuple3[1]
			if (ok) {
				// A dial is already in-flight. Don't start another.
				return call
			}
		}
		let call: dialCall | $.VarRef<dialCall> | null = new dialCall({p: p, done: $.makeChannel<{}>(0, {}, "both"), ctx: ctx})
		if ((p$ as clientConnPool).dialing == null) {
			;(p$ as clientConnPool).dialing = $.makeMap<string, dialCall | $.VarRef<dialCall> | null>()
		}
		$.mapSet((p$ as clientConnPool).dialing, addr, call)
		const __goscriptDeferArg3 = $.pointerValue<dialCall>(call).ctx
		const __goscriptDeferArg4 = addr
		queueMicrotask(async () => { await (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as dialCall).dial(__goscriptDeferArg3, __goscriptDeferArg4) : dialCall.prototype.dial.call(call, __goscriptDeferArg3, __goscriptDeferArg4)) })
		return call
	}

	static __typeInfo = $.registerStructType(
		"http2.clientConnPool",
		() => new clientConnPool(),
		() => [$.methodSignature("GetClientConn", [["req", /* @__PURE__ */ $.pointerType("http.Request")], ["addr", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("http2.ClientConn"), "error"], true), $.methodSignature("MarkDead", [["cc", /* @__PURE__ */ $.pointerType("http2.ClientConn")]], [], true), $.methodSignature("addConnIfNeeded", [["key", /* @__PURE__ */ $.basicType("string")], ["t", /* @__PURE__ */ $.pointerType("http2.Transport")], ["c", /* @__PURE__ */ $.pointerType("tls.Conn")]], [["used", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]], true), $.methodSignature("addConnLocked", [["key", /* @__PURE__ */ $.basicType("string")], ["cc", /* @__PURE__ */ $.pointerType("http2.ClientConn")]], [], true), $.methodSignature("closeIdleConnections", [], [], true), $.methodSignature("getClientConn", [["req", /* @__PURE__ */ $.pointerType("http.Request")], ["addr", /* @__PURE__ */ $.basicType("string")], ["dialOnMiss", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("http2.ClientConn"), "error"], true), $.methodSignature("getStartDialLocked", [["ctx", "context.Context"], ["addr", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("http2.dialCall")], true)],
		clientConnPool,
		() => [/* @__PURE__ */ $.structField("t", /* @__PURE__ */ $.pointerType("http2.Transport"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [1], 8, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("conns", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("http2.ClientConn"))), [2], 16, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("dialing", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("http2.dialCall")), [3], 24, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("keys", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("http2.ClientConn"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))), [4], 32, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("addConnCalls", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("http2.addConnCall")), [5], 40, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class dialCall {
	public get _blank0(): __goscript_http2.incomparable {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_http2.incomparable) {
		this._fields._blank0 = value
	}

	public get p(): clientConnPool | $.VarRef<clientConnPool> | null {
		return this._fields.p
	}

	public set p(value: clientConnPool | $.VarRef<clientConnPool> | null) {
		this._fields.p = value
	}

	// the context associated with the request
	// that created this dialCall
	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get done(): $.Channel<{}> | null {
		return this._fields.done
	}

	public set done(value: $.Channel<{}> | null) {
		this._fields.done = value
	}

	public get res(): __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null {
		return this._fields.res
	}

	public set res(value: __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null) {
		this._fields.res = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		_blank0: __goscript_http2.incomparable
		p: clientConnPool | $.VarRef<clientConnPool> | null
		ctx: context.Context | null
		done: $.Channel<{}> | null
		res: __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null
		err: $.GoError
	}

	constructor(init?: Partial<{_blank0?: __goscript_http2.incomparable, p?: clientConnPool | $.VarRef<clientConnPool> | null, ctx?: context.Context | null, done?: $.Channel<{}> | null, res?: __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "http2.incomparable") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			p: init?.p ?? (null! as clientConnPool | $.VarRef<clientConnPool> | null),
			ctx: init?.ctx ?? (null! as context.Context | null),
			done: init?.done ?? (null! as $.Channel<{}> | null),
			res: init?.res ?? (null! as __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dialCall {
		return new dialCall(this, true)
	}

	public __goscriptAssign(source: dialCall): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "http2.incomparable")
		target.p = values.p
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.done = values.done
		target.res = values.res
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async dial(ctx: context.Context | null, addr: string): globalThis.Promise<void> {
		let c: dialCall | $.VarRef<dialCall> | null = this;
		const c$: dialCall = c == null ? $.pointerTarget<dialCall>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<dialCall>(c)
		const singleUse: boolean = false
		let __goscriptTuple4: any = await __goscript_transport.Transport.prototype.dialClientConn.call($.pointerValue<clientConnPool>((c$ as dialCall).p).t, ctx, addr, false);
		;(c$ as dialCall).res = __goscriptTuple4[0];
		;(c$ as dialCall).err = __goscriptTuple4[1]

		await $.pointerValue<clientConnPool>((c$ as dialCall).p).mu.Lock()
		$.deleteMapEntry($.pointerValue<clientConnPool>((c$ as dialCall).p).dialing, addr)
		if ((c$ as dialCall).err == null) {
			clientConnPool.prototype.addConnLocked.call((c$ as dialCall).p, addr, (c$ as dialCall).res)
		}
		$.pointerValue<clientConnPool>((c$ as dialCall).p).mu.Unlock()

		void (c$ as dialCall).done!.close()
	}

	static __typeInfo = $.registerStructType(
		"http2.dialCall",
		() => new dialCall(),
		() => [$.methodSignature("dial", [["ctx", "context.Context"], ["addr", /* @__PURE__ */ $.basicType("string")]], [], true)],
		dialCall,
		() => [/* @__PURE__ */ $.structField("_", "http2.incomparable", [0], 0, false, { key: "_blank0", pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.pointerType("http2.clientConnPool"), [1], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [2], 8, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [3], 24, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("res", /* @__PURE__ */ $.pointerType("http2.ClientConn"), [4], 32, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("err", "error", [5], 40, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class addConnCall {
	public get _blank0(): __goscript_http2.incomparable {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_http2.incomparable) {
		this._fields._blank0 = value
	}

	public get p(): clientConnPool | $.VarRef<clientConnPool> | null {
		return this._fields.p
	}

	public set p(value: clientConnPool | $.VarRef<clientConnPool> | null) {
		this._fields.p = value
	}

	public get done(): $.Channel<{}> | null {
		return this._fields.done
	}

	public set done(value: $.Channel<{}> | null) {
		this._fields.done = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		_blank0: __goscript_http2.incomparable
		p: clientConnPool | $.VarRef<clientConnPool> | null
		done: $.Channel<{}> | null
		err: $.GoError
	}

	constructor(init?: Partial<{_blank0?: __goscript_http2.incomparable, p?: clientConnPool | $.VarRef<clientConnPool> | null, done?: $.Channel<{}> | null, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "http2.incomparable") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			p: init?.p ?? (null! as clientConnPool | $.VarRef<clientConnPool> | null),
			done: init?.done ?? (null! as $.Channel<{}> | null),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): addConnCall {
		return new addConnCall(this, true)
	}

	public __goscriptAssign(source: addConnCall): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "http2.incomparable")
		target.p = values.p
		target.done = values.done
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async run(t: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null, key: string, tc: tls.Conn | $.VarRef<tls.Conn> | null): globalThis.Promise<void> {
		let c: addConnCall | $.VarRef<addConnCall> | null = this;
		const c$: addConnCall = c == null ? $.pointerTarget<addConnCall>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<addConnCall>(c)
		let __goscriptTuple5: any = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as __goscript_transport.Transport).NewClientConn($.interfaceValue<net.Conn | null>(tc, "*tls.Conn", /* @__PURE__ */ $.pointerType("tls.Conn"))) : __goscript_transport.Transport.prototype.NewClientConn.call(t, $.interfaceValue<net.Conn | null>(tc, "*tls.Conn", /* @__PURE__ */ $.pointerType("tls.Conn"))))
		let cc: __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null = __goscriptTuple5[0]
		let err = __goscriptTuple5[1]

		let p: clientConnPool | $.VarRef<clientConnPool> | null = (c$ as addConnCall).p
		let p$: clientConnPool = p == null ? $.pointerTarget<clientConnPool>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<clientConnPool>(p)
		await (p$ as clientConnPool).mu.Lock()
		if (err != null) {
			;(c$ as addConnCall).err = err
		} else {
			$.pointerValue<__goscript_transport.ClientConn>(cc).getConnCalled = true
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as clientConnPool).addConnLocked(key, cc) : clientConnPool.prototype.addConnLocked.call(p, key, cc))
		}
		$.deleteMapEntry((p$ as clientConnPool).addConnCalls, key)
		void (p$ as clientConnPool).mu.Unlock()
		void (c$ as addConnCall).done!.close()
	}

	static __typeInfo = $.registerStructType(
		"http2.addConnCall",
		() => new addConnCall(),
		() => [$.methodSignature("run", [["t", /* @__PURE__ */ $.pointerType("http2.Transport")], ["key", /* @__PURE__ */ $.basicType("string")], ["tc", /* @__PURE__ */ $.pointerType("tls.Conn")]], [], true)],
		addConnCall,
		() => [/* @__PURE__ */ $.structField("_", "http2.incomparable", [0], 0, false, { key: "_blank0", pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.pointerType("http2.clientConnPool"), [1], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [2], 8, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("err", "error", [3], 16, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class noDialClientConnPool {
	public get clientConnPool(): clientConnPool | $.VarRef<clientConnPool> | null {
		return this._fields.clientConnPool
	}

	public set clientConnPool(value: clientConnPool | $.VarRef<clientConnPool> | null) {
		this._fields.clientConnPool = value
	}

	public _fields: {
		clientConnPool: clientConnPool | $.VarRef<clientConnPool> | null
	}

	constructor(init?: Partial<{clientConnPool?: clientConnPool | $.VarRef<clientConnPool> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			clientConnPool: init?.clientConnPool ?? (null! as clientConnPool | $.VarRef<clientConnPool> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): noDialClientConnPool {
		return new noDialClientConnPool(this, true)
	}

	public __goscriptAssign(source: noDialClientConnPool): void {
		const target = this._fields
		const values = source._fields
		target.clientConnPool = values.clientConnPool
	}

	public async GetClientConn(req: http.Request | $.VarRef<http.Request> | null, addr: string): globalThis.Promise<[__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null, $.GoError]> {
		const p = $.varRef(this);
		return $.pointerValue<clientConnPool>(p.value.clientConnPool).getClientConn(req, addr, false)
	}

	public async MarkDead(cc: any): globalThis.Promise<any> {
		return await $.pointerValue<clientConnPool>(this.clientConnPool).MarkDead(cc)
	}

	public async addConnIfNeeded(key: any, t: any, c: any): globalThis.Promise<any> {
		return await $.pointerValue<clientConnPool>(this.clientConnPool).addConnIfNeeded(key, t, c)
	}

	public addConnLocked(key: any, cc: any): any {
		return $.pointerValue<clientConnPool>(this.clientConnPool).addConnLocked(key, cc)
	}

	public async closeIdleConnections(): globalThis.Promise<any> {
		return await $.pointerValue<clientConnPool>(this.clientConnPool).closeIdleConnections()
	}

	public async getClientConn(req: any, addr: any, dialOnMiss: any): globalThis.Promise<any> {
		return await $.pointerValue<clientConnPool>(this.clientConnPool).getClientConn(req, addr, dialOnMiss)
	}

	public async getStartDialLocked(ctx: any, addr: any): globalThis.Promise<any> {
		return await $.pointerValue<clientConnPool>(this.clientConnPool).getStartDialLocked(ctx, addr)
	}

	static __typeInfo = $.registerStructType(
		"http2.noDialClientConnPool",
		() => new noDialClientConnPool(),
		() => [$.methodSignature("GetClientConn", [["req", /* @__PURE__ */ $.pointerType("http.Request")], ["addr", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("http2.ClientConn"), "error"]), $.methodSignature("MarkDead", [["cc", /* @__PURE__ */ $.pointerType("http2.ClientConn")]]), $.methodSignature("addConnIfNeeded", [["key", /* @__PURE__ */ $.basicType("string")], ["t", /* @__PURE__ */ $.pointerType("http2.Transport")], ["c", /* @__PURE__ */ $.pointerType("tls.Conn")]], [["used", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]]), $.methodSignature("addConnLocked", [["key", /* @__PURE__ */ $.basicType("string")], ["cc", /* @__PURE__ */ $.pointerType("http2.ClientConn")]]), $.methodSignature("closeIdleConnections"), $.methodSignature("getClientConn", [["req", /* @__PURE__ */ $.pointerType("http.Request")], ["addr", /* @__PURE__ */ $.basicType("string")], ["dialOnMiss", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("http2.ClientConn"), "error"]), $.methodSignature("getStartDialLocked", [["ctx", "context.Context"], ["addr", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("http2.dialCall")])],
		noDialClientConnPool,
		() => [/* @__PURE__ */ $.structField("clientConnPool", /* @__PURE__ */ $.pointerType("http2.clientConnPool"), [0], 0, false, { pkgPath: "golang.org/x/net/http2", anonymous: true })]
	)
}

export const dialOnMiss: boolean = true

export const noDialOnMiss: boolean = false

export function filterOutClientConn(_in: $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null>, exclude: __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null): $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null> {
	let out: $.Slice<__goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null> = $.goSlice(_in, undefined, 0)
	for (let __goscriptRangeTarget5 = _in, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as __goscript_transport.ClientConn | $.VarRef<__goscript_transport.ClientConn> | null)
		if (!$.pointerEqual(v, exclude)) {
			out = $.appendOne(out, v, $.appendZeros.nil)
		}
	}
	// If we filtered it out, zero out the last item to prevent
	// the GC from seeing it.
	if ($.sliceLen(_in) != $.sliceLen(out)) {
		$.sliceElems(_in!)[$.sliceSlot(_in!, $.sliceLen(_in) - 1)] = null
	}
	return out
}

export async function shouldRetryDial(call: dialCall | $.VarRef<dialCall> | null, req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<boolean> {
	const call$: dialCall = call == null ? $.pointerTarget<dialCall>(call) : (call as any).__isVarRef === true ? (call as any).value : (call as any).__goValue === undefined ? (call as any) : $.pointerTarget<dialCall>(call)
	if ((call$ as dialCall).err == null) {
		// No error, no need to retry
		return false
	}
	if ($.comparableEqual((call$ as dialCall).ctx, http.Request.prototype.Context.call($.pointerValue<http.Request>(req)))) {
		// If the call has the same context as the request, the dial
		// should not be retried, since any cancellation will have come
		// from this request.
		return false
	}
	if (!errors.Is($.pointerValueOrNil((call$ as dialCall).err)!, $.pointerValueOrNil(context.Canceled)!) && !errors.Is($.pointerValueOrNil((call$ as dialCall).err)!, $.pointerValueOrNil(context.DeadlineExceeded)!)) {
		// If the call error is not because of a context cancellation or a deadline expiry,
		// the dial should not be retried.
		return false
	}
	// Only retry if the error is a context cancellation error or deadline expiry
	// and the context associated with the call was canceled or expired.
	return (__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((call$ as dialCall).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null
}

var __goscriptAwait: any
