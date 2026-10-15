// Generated file based on persist.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as http from "@goscript/net/http/index.js"

import * as textproto from "@goscript/net/textproto/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/bufio/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/textproto/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("net/http/httputil", ["httputil.ServerConn", "httputil.ClientConn"])

export class ServerConn {
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get c(): net.Conn | null {
		return this._fields.c
	}

	public set c(value: net.Conn | null) {
		this._fields.c = value
	}

	public get r(): bufio.Reader | $.VarRef<bufio.Reader> | null {
		return this._fields.r
	}

	public set r(value: bufio.Reader | $.VarRef<bufio.Reader> | null) {
		this._fields.r = value
	}

	public get re(): $.GoError {
		return this._fields.re
	}

	public set re(value: $.GoError) {
		this._fields.re = value
	}

	public get we(): $.GoError {
		return this._fields.we
	}

	public set we(value: $.GoError) {
		this._fields.we = value
	}

	public get lastbody(): io.ReadCloser | null {
		return this._fields.lastbody
	}

	public set lastbody(value: io.ReadCloser | null) {
		this._fields.lastbody = value
	}

	public get nread(): number {
		return this._fields.nread
	}

	public set nread(value: number) {
		this._fields.nread = value
	}

	public get nwritten(): number {
		return this._fields.nwritten
	}

	public set nwritten(value: number) {
		this._fields.nwritten = value
	}

	public get pipereq(): globalThis.Map<http.Request | $.VarRef<http.Request> | null, number> | null {
		return this._fields.pipereq
	}

	public set pipereq(value: globalThis.Map<http.Request | $.VarRef<http.Request> | null, number> | null) {
		this._fields.pipereq = value
	}

	public get pipe(): textproto.Pipeline {
		return this._fields.pipe
	}

	public set pipe(value: textproto.Pipeline) {
		this._fields.pipe = value
	}

	public _fields: {
		mu: sync.Mutex
		c: net.Conn | null
		r: bufio.Reader | $.VarRef<bufio.Reader> | null
		re: $.GoError
		we: $.GoError
		lastbody: io.ReadCloser | null
		nread: number
		nwritten: number
		pipereq: globalThis.Map<http.Request | $.VarRef<http.Request> | null, number> | null
		pipe: textproto.Pipeline
	}

	constructor(init?: Partial<{mu?: sync.Mutex, c?: net.Conn | null, r?: bufio.Reader | $.VarRef<bufio.Reader> | null, re?: $.GoError, we?: $.GoError, lastbody?: io.ReadCloser | null, nread?: number, nwritten?: number, pipereq?: globalThis.Map<http.Request | $.VarRef<http.Request> | null, number> | null, pipe?: textproto.Pipeline}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			c: init?.c ?? (null! as net.Conn | null),
			r: init?.r ?? (null! as bufio.Reader | $.VarRef<bufio.Reader> | null),
			re: init?.re ?? (null! as $.GoError),
			we: init?.we ?? (null! as $.GoError),
			lastbody: init?.lastbody ?? (null! as io.ReadCloser | null),
			nread: init?.nread ?? (0 as number),
			nwritten: init?.nwritten ?? (0 as number),
			pipereq: init?.pipereq ?? (null! as globalThis.Map<http.Request | $.VarRef<http.Request> | null, number> | null),
			pipe: init?.pipe ? init.pipe.clone() : new textproto.Pipeline(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServerConn {
		return new ServerConn(this, true)
	}

	public __goscriptAssign(source: ServerConn): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.c = $.assignFieldValue(target.c, values.c, "net.Conn")
		target.r = values.r
		target.re = $.assignFieldValue(target.re, values.re, "error")
		target.we = $.assignFieldValue(target.we, values.we, "error")
		target.lastbody = $.assignFieldValue(target.lastbody, values.lastbody, "io.ReadCloser")
		target.nread = values.nread
		target.nwritten = values.nwritten
		target.pipereq = values.pipereq
		$.assignStruct(target.pipe, values.pipe)
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const sc: ServerConn | $.VarRef<ServerConn> | null = this;
		let [c, ] = await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as ServerConn).Hijack() : ServerConn.prototype.Hijack.call(sc))
		if (c != null) {
			return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(c)).Close()
		}
		return null
	}

	public async Hijack(): globalThis.Promise<[net.Conn | null, bufio.Reader | $.VarRef<bufio.Reader> | null]> {
		let sc: ServerConn | $.VarRef<ServerConn> | null = this;
		using __defer = new $.DisposableStack()
		const sc$: ServerConn = sc == null ? $.pointerTarget<ServerConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<ServerConn>(sc)
		await (sc$ as ServerConn).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((sc$ as ServerConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		let c = (sc$ as ServerConn).c
		let r: bufio.Reader | $.VarRef<bufio.Reader> | null = (sc$ as ServerConn).r;
		;(sc$ as ServerConn).c = null;
		;(sc$ as ServerConn).r = null
		return [c, r]
	}

	public async Pending(): globalThis.Promise<number> {
		const sc: ServerConn | $.VarRef<ServerConn> | null = this;
		using __defer = new $.DisposableStack()
		const sc$: ServerConn = sc == null ? $.pointerTarget<ServerConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<ServerConn>(sc)
		await (sc$ as ServerConn).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((sc$ as ServerConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		return (sc$ as ServerConn).nread - (sc$ as ServerConn).nwritten
	}

	public async Read(): globalThis.Promise<[http.Request | $.VarRef<http.Request> | null, $.GoError]> {
		let sc: ServerConn | $.VarRef<ServerConn> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const sc$: ServerConn = sc == null ? $.pointerTarget<ServerConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<ServerConn>(sc)
		let req: http.Request | $.VarRef<http.Request> | null = null! as http.Request | $.VarRef<http.Request> | null
		let err: $.GoError = null! as $.GoError

		// Ensure ordered execution of Reads and Writes
		let id = await (sc$ as ServerConn).pipe.Next()
		await (sc$ as ServerConn).pipe.StartRequest(id)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await (sc$ as ServerConn).pipe.EndRequest(id)
			if (req == null) {
				await (sc$ as ServerConn).pipe.StartResponse(id)
				await (sc$ as ServerConn).pipe.EndResponse(id)
			} else {
				// Remember the pipeline id of this request
				await (sc$ as ServerConn).mu.Lock()
				$.mapSet((sc$ as ServerConn).pipereq, req, id)
				void (sc$ as ServerConn).mu.Unlock()
			}
		})() })

		await (sc$ as ServerConn).mu.Lock()
		if ((sc$ as ServerConn).we != null) {
			const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((sc$ as ServerConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee2() })
			return [null, (sc$ as ServerConn).we]
		}
		if ((sc$ as ServerConn).re != null) {
			const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((sc$ as ServerConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee3() })
			return [null, (sc$ as ServerConn).re]
		}
		if ((sc$ as ServerConn).r == null) {
			const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())((sc$ as ServerConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee4() })
			return [null, errClosed]
		}
		let r: bufio.Reader | $.VarRef<bufio.Reader> | null = (sc$ as ServerConn).r
		let lastbody = (sc$ as ServerConn).lastbody;
		;(sc$ as ServerConn).lastbody = null
		void (sc$ as ServerConn).mu.Unlock()

		// Make sure body is fully consumed, even if user does not call body.Close
		if (lastbody != null) {
			// body.Close is assumed to be idempotent and multiple calls to
			// it should return the error that its first invocation
			// returned.
			err = await (lastbody !== null && (lastbody as any).__isVarRef !== true && (lastbody as any).__goValue === undefined ? (lastbody as Exclude<io.ReadCloser, null>) : $.pointerValue<Exclude<io.ReadCloser, null>>(lastbody)).Close()
			if (err != null) {
				await (sc$ as ServerConn).mu.Lock()
				const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())((sc$ as ServerConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
				__defer.defer(() => { __goscriptDeferCallee5() });
				;(sc$ as ServerConn).re = err
				return [null, err]
			}
		}

		let __goscriptTuple0: any = await http.ReadRequest(r)
		req = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		await (sc$ as ServerConn).mu.Lock()
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.Unlock())((sc$ as ServerConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee6() })
		if (err != null) {
			if ($.comparableEqual(err, io.ErrUnexpectedEOF)) {
				// A close from the opposing client is treated as a
				// graceful close, even if there was some unparse-able
				// data before the close.
				;(sc$ as ServerConn).re = $.interfaceValue<$.GoError>(ErrPersistEOF, "*http.ProtocolError", /* @__PURE__ */ $.pointerType("http.ProtocolError"))
				return [null, (sc$ as ServerConn).re]
			} else {
				;(sc$ as ServerConn).re = err
				return [req, err]
			}
		}
		;(sc$ as ServerConn).lastbody = $.pointerValue<http.Request>(req).Body;
		;(sc$ as ServerConn).nread++
		if ($.pointerValue<http.Request>(req).Close) {
			;(sc$ as ServerConn).re = $.interfaceValue<$.GoError>(ErrPersistEOF, "*http.ProtocolError", /* @__PURE__ */ $.pointerType("http.ProtocolError"))
			return [req, (sc$ as ServerConn).re]
		}
		return [req, err]
	}

	public async Write(req: http.Request | $.VarRef<http.Request> | null, resp: http.Response | $.VarRef<http.Response> | null): globalThis.Promise<$.GoError> {
		let sc: ServerConn | $.VarRef<ServerConn> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const sc$: ServerConn = sc == null ? $.pointerTarget<ServerConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<ServerConn>(sc)

		// Retrieve the pipeline ID of this request/response pair
		await (sc$ as ServerConn).mu.Lock()
		let [id, ok] = $.mapGet<http.Request | $.VarRef<http.Request> | null, number, number>((sc$ as ServerConn).pipereq, req, 0)
		$.deleteMapEntry((sc$ as ServerConn).pipereq, req)
		if (!ok) {
			void (sc$ as ServerConn).mu.Unlock()
			return $.interfaceValue<$.GoError>(ErrPipeline, "*http.ProtocolError", /* @__PURE__ */ $.pointerType("http.ProtocolError"))
		}
		void (sc$ as ServerConn).mu.Unlock()

		// Ensure pipeline order
		await (sc$ as ServerConn).pipe.StartResponse(id)
		const __goscriptDeferCallee7 = $.functionValue(((__receiver) => (id: number) => __receiver.EndResponse(id))((sc$ as ServerConn).pipe), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint")], results: [] } as $.FunctionTypeInfo), "net/textproto.(*Pipeline).EndResponse-fm")
		const __goscriptDeferArg0 = id
		__defer.defer(async () => { await __goscriptDeferCallee7(__goscriptDeferArg0) })

		await (sc$ as ServerConn).mu.Lock()
		if ((sc$ as ServerConn).we != null) {
			const __goscriptDeferCallee8 = $.functionValue(((__receiver) => () => __receiver.Unlock())((sc$ as ServerConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee8() })
			return (sc$ as ServerConn).we
		}
		if ((sc$ as ServerConn).c == null) {
			const __goscriptDeferCallee9 = $.functionValue(((__receiver) => () => __receiver.Unlock())((sc$ as ServerConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee9() })
			return $.interfaceValue<$.GoError>(ErrClosed, "*http.ProtocolError", /* @__PURE__ */ $.pointerType("http.ProtocolError"))
		}
		let c = (sc$ as ServerConn).c
		if ((sc$ as ServerConn).nread <= (sc$ as ServerConn).nwritten) {
			const __goscriptDeferCallee10 = $.functionValue(((__receiver) => () => __receiver.Unlock())((sc$ as ServerConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee10() })
			return errors.New("persist server pipe count")
		}
		if ($.pointerValue<http.Response>(resp).Close) {
			// After signaling a keep-alive close, any pipelined unread
			// requests will be lost. It is up to the user to drain them
			// before signaling.
			;(sc$ as ServerConn).re = $.interfaceValue<$.GoError>(ErrPersistEOF, "*http.ProtocolError", /* @__PURE__ */ $.pointerType("http.ProtocolError"))
		}
		void (sc$ as ServerConn).mu.Unlock()

		let err = await http.Response.prototype.Write.call($.pointerValue<http.Response>(resp), $.pointerValueOrNil((c as io.Writer | null))!)
		await (sc$ as ServerConn).mu.Lock()
		const __goscriptDeferCallee11 = $.functionValue(((__receiver) => () => __receiver.Unlock())((sc$ as ServerConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee11() })
		if (err != null) {
			;(sc$ as ServerConn).we = err
			return err
		}
		;(sc$ as ServerConn).nwritten++

		return null
	}

	static __typeInfo = $.registerStructType(
		"httputil.ServerConn",
		() => new ServerConn(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Hijack", [], ["net.Conn", /* @__PURE__ */ $.pointerType("bufio.Reader")], true), $.methodSignature("Pending", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Read", [], [/* @__PURE__ */ $.pointerType("http.Request"), "error"], true), $.methodSignature("Write", [["req", /* @__PURE__ */ $.pointerType("http.Request")], ["resp", /* @__PURE__ */ $.pointerType("http.Response")]], ["error"], true)],
		ServerConn,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("c", "net.Conn", [1], 8, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("r", /* @__PURE__ */ $.pointerType("bufio.Reader"), [2], 24, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("re", "error", [3], 32, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("we", "error", [4], 48, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("lastbody", "io.ReadCloser", [5], 64, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("nread", /* @__PURE__ */ $.basicType("int"), [6], 80, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("nwritten", /* @__PURE__ */ $.basicType("int"), [7], 88, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("pipereq", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("http.Request"), /* @__PURE__ */ $.basicType("uint")), [8], 96, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("pipe", "textproto.Pipeline", [9], 104, false, { pkgPath: "net/http/httputil" })]
	)
}

export class ClientConn {
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get c(): net.Conn | null {
		return this._fields.c
	}

	public set c(value: net.Conn | null) {
		this._fields.c = value
	}

	public get r(): bufio.Reader | $.VarRef<bufio.Reader> | null {
		return this._fields.r
	}

	public set r(value: bufio.Reader | $.VarRef<bufio.Reader> | null) {
		this._fields.r = value
	}

	public get re(): $.GoError {
		return this._fields.re
	}

	public set re(value: $.GoError) {
		this._fields.re = value
	}

	public get we(): $.GoError {
		return this._fields.we
	}

	public set we(value: $.GoError) {
		this._fields.we = value
	}

	public get lastbody(): io.ReadCloser | null {
		return this._fields.lastbody
	}

	public set lastbody(value: io.ReadCloser | null) {
		this._fields.lastbody = value
	}

	public get nread(): number {
		return this._fields.nread
	}

	public set nread(value: number) {
		this._fields.nread = value
	}

	public get nwritten(): number {
		return this._fields.nwritten
	}

	public set nwritten(value: number) {
		this._fields.nwritten = value
	}

	public get pipereq(): globalThis.Map<http.Request | $.VarRef<http.Request> | null, number> | null {
		return this._fields.pipereq
	}

	public set pipereq(value: globalThis.Map<http.Request | $.VarRef<http.Request> | null, number> | null) {
		this._fields.pipereq = value
	}

	public get pipe(): textproto.Pipeline {
		return this._fields.pipe
	}

	public set pipe(value: textproto.Pipeline) {
		this._fields.pipe = value
	}

	public get writeReq(): ((_p0: http.Request | $.VarRef<http.Request> | null, _p1: io.Writer | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.writeReq
	}

	public set writeReq(value: ((_p0: http.Request | $.VarRef<http.Request> | null, _p1: io.Writer | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.writeReq = value
	}

	public _fields: {
		mu: sync.Mutex
		c: net.Conn | null
		r: bufio.Reader | $.VarRef<bufio.Reader> | null
		re: $.GoError
		we: $.GoError
		lastbody: io.ReadCloser | null
		nread: number
		nwritten: number
		pipereq: globalThis.Map<http.Request | $.VarRef<http.Request> | null, number> | null
		pipe: textproto.Pipeline
		writeReq: ((_p0: http.Request | $.VarRef<http.Request> | null, _p1: io.Writer | null) => $.GoError | globalThis.Promise<$.GoError>) | null
	}

	constructor(init?: Partial<{mu?: sync.Mutex, c?: net.Conn | null, r?: bufio.Reader | $.VarRef<bufio.Reader> | null, re?: $.GoError, we?: $.GoError, lastbody?: io.ReadCloser | null, nread?: number, nwritten?: number, pipereq?: globalThis.Map<http.Request | $.VarRef<http.Request> | null, number> | null, pipe?: textproto.Pipeline, writeReq?: ((_p0: http.Request | $.VarRef<http.Request> | null, _p1: io.Writer | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			c: init?.c ?? (null! as net.Conn | null),
			r: init?.r ?? (null! as bufio.Reader | $.VarRef<bufio.Reader> | null),
			re: init?.re ?? (null! as $.GoError),
			we: init?.we ?? (null! as $.GoError),
			lastbody: init?.lastbody ?? (null! as io.ReadCloser | null),
			nread: init?.nread ?? (0 as number),
			nwritten: init?.nwritten ?? (0 as number),
			pipereq: init?.pipereq ?? (null! as globalThis.Map<http.Request | $.VarRef<http.Request> | null, number> | null),
			pipe: init?.pipe ? init.pipe.clone() : new textproto.Pipeline(undefined, true),
			writeReq: init?.writeReq ?? (null! as ((_p0: http.Request | $.VarRef<http.Request> | null, _p1: io.Writer | null) => $.GoError | globalThis.Promise<$.GoError>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientConn {
		return new ClientConn(this, true)
	}

	public __goscriptAssign(source: ClientConn): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.c = $.assignFieldValue(target.c, values.c, "net.Conn")
		target.r = values.r
		target.re = $.assignFieldValue(target.re, values.re, "error")
		target.we = $.assignFieldValue(target.we, values.we, "error")
		target.lastbody = $.assignFieldValue(target.lastbody, values.lastbody, "io.ReadCloser")
		target.nread = values.nread
		target.nwritten = values.nwritten
		target.pipereq = values.pipereq
		$.assignStruct(target.pipe, values.pipe)
		target.writeReq = values.writeReq
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		let [c, ] = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).Hijack() : ClientConn.prototype.Hijack.call(cc))
		if (c != null) {
			return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(c)).Close()
		}
		return null
	}

	public async Do(req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<[http.Response | $.VarRef<http.Response> | null, $.GoError]> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		let err = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).Write(req) : ClientConn.prototype.Write.call(cc, req))
		if (err != null) {
			return [null, err]
		}
		return (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).Read(req) : ClientConn.prototype.Read.call(cc, req))
	}

	public async Hijack(): globalThis.Promise<[net.Conn | null, bufio.Reader | $.VarRef<bufio.Reader> | null]> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		let c: net.Conn | null = null! as net.Conn | null
		let r: bufio.Reader | $.VarRef<bufio.Reader> | null = null! as bufio.Reader | $.VarRef<bufio.Reader> | null
		using __defer = new $.DisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()
		const __goscriptDeferCallee12 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee12() })
		c = (cc$ as ClientConn).c
		r = (cc$ as ClientConn).r;
		;(cc$ as ClientConn).c = null;
		;(cc$ as ClientConn).r = null
		__defer.dispose()
		return [c, r]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Pending(): globalThis.Promise<number> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		using __defer = new $.DisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()
		const __goscriptDeferCallee13 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee13() })
		return (cc$ as ClientConn).nwritten - (cc$ as ClientConn).nread
	}

	public async Read(req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<[http.Response | $.VarRef<http.Response> | null, $.GoError]> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		let resp: http.Response | $.VarRef<http.Response> | null = null! as http.Response | $.VarRef<http.Response> | null
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		// Retrieve the pipeline ID of this request/response pair
		await (cc$ as ClientConn).mu.Lock()
		let [id, ok] = $.mapGet<http.Request | $.VarRef<http.Request> | null, number, number>((cc$ as ClientConn).pipereq, req, 0)
		$.deleteMapEntry((cc$ as ClientConn).pipereq, req)
		if (!ok) {
			void (cc$ as ClientConn).mu.Unlock()
			return [null, $.interfaceValue<$.GoError>(ErrPipeline, "*http.ProtocolError", /* @__PURE__ */ $.pointerType("http.ProtocolError"))]
		}
		void (cc$ as ClientConn).mu.Unlock()

		// Ensure pipeline order
		await (cc$ as ClientConn).pipe.StartResponse(id)
		const __goscriptDeferCallee14 = $.functionValue(((__receiver) => (id: number) => __receiver.EndResponse(id))((cc$ as ClientConn).pipe), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint")], results: [] } as $.FunctionTypeInfo), "net/textproto.(*Pipeline).EndResponse-fm")
		const __goscriptDeferArg1 = id
		__defer.defer(async () => { await __goscriptDeferCallee14(__goscriptDeferArg1) })

		await (cc$ as ClientConn).mu.Lock()
		if ((cc$ as ClientConn).re != null) {
			const __goscriptDeferCallee15 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee15() })
			const __goscriptReturn1: [http.Response | $.VarRef<http.Response> | null, $.GoError] = [null, (cc$ as ClientConn).re]
			resp = __goscriptReturn1[0]
			err = __goscriptReturn1[1]
			await __defer.dispose()
			return [resp, err]
		}
		if ((cc$ as ClientConn).r == null) {
			const __goscriptDeferCallee16 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee16() })
			const __goscriptReturn2: [http.Response | $.VarRef<http.Response> | null, $.GoError] = [null, errClosed]
			resp = __goscriptReturn2[0]
			err = __goscriptReturn2[1]
			await __defer.dispose()
			return [resp, err]
		}
		let r: bufio.Reader | $.VarRef<bufio.Reader> | null = (cc$ as ClientConn).r
		let lastbody = (cc$ as ClientConn).lastbody;
		;(cc$ as ClientConn).lastbody = null
		void (cc$ as ClientConn).mu.Unlock()

		// Make sure body is fully consumed, even if user does not call body.Close
		if (lastbody != null) {
			// body.Close is assumed to be idempotent and multiple calls to
			// it should return the error that its first invocation
			// returned.
			err = await (lastbody !== null && (lastbody as any).__isVarRef !== true && (lastbody as any).__goValue === undefined ? (lastbody as Exclude<io.ReadCloser, null>) : $.pointerValue<Exclude<io.ReadCloser, null>>(lastbody)).Close()
			if (err != null) {
				await (cc$ as ClientConn).mu.Lock()
				const __goscriptDeferCallee17 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
				__defer.defer(() => { __goscriptDeferCallee17() });
				;(cc$ as ClientConn).re = err
				const __goscriptReturn3: [http.Response | $.VarRef<http.Response> | null, $.GoError] = [null, err]
				resp = __goscriptReturn3[0]
				err = __goscriptReturn3[1]
				await __defer.dispose()
				return [resp, err]
			}
		}

		let __goscriptTuple1: any = await http.ReadResponse(r, req)
		resp = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		await (cc$ as ClientConn).mu.Lock()
		const __goscriptDeferCallee18 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee18() })
		if (err != null) {
			;(cc$ as ClientConn).re = err
			const __goscriptReturn4: [http.Response | $.VarRef<http.Response> | null, $.GoError] = [resp, err]
			resp = __goscriptReturn4[0]
			err = __goscriptReturn4[1]
			await __defer.dispose()
			return [resp, err]
		}
		;(cc$ as ClientConn).lastbody = $.pointerValue<http.Response>(resp).Body;

		;(cc$ as ClientConn).nread++

		if ($.pointerValue<http.Response>(resp).Close) {
			;(cc$ as ClientConn).re = $.interfaceValue<$.GoError>(ErrPersistEOF, "*http.ProtocolError", /* @__PURE__ */ $.pointerType("http.ProtocolError"))
			const __goscriptReturn5: [http.Response | $.VarRef<http.Response> | null, $.GoError] = [resp, (cc$ as ClientConn).re]
			resp = __goscriptReturn5[0]
			err = __goscriptReturn5[1]
			await __defer.dispose()
			return [resp, err]
		}
		const __goscriptReturn6: [http.Response | $.VarRef<http.Response> | null, $.GoError] = [resp, err]
		resp = __goscriptReturn6[0]
		err = __goscriptReturn6[1]
		await __defer.dispose()
		return [resp, err]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Write(req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<$.GoError> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		let err: $.GoError = null! as $.GoError

		// Ensure ordered execution of Writes
		let id = await (cc$ as ClientConn).pipe.Next()
		await (cc$ as ClientConn).pipe.StartRequest(id)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await (cc$ as ClientConn).pipe.EndRequest(id)
			if (err != null) {
				await (cc$ as ClientConn).pipe.StartResponse(id)
				await (cc$ as ClientConn).pipe.EndResponse(id)
			} else {
				// Remember the pipeline id of this request
				await (cc$ as ClientConn).mu.Lock()
				$.mapSet((cc$ as ClientConn).pipereq, req, id)
				void (cc$ as ClientConn).mu.Unlock()
			}
		})() })

		await (cc$ as ClientConn).mu.Lock()
		if ((cc$ as ClientConn).re != null) {
			const __goscriptDeferCallee19 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee19() })
			return (cc$ as ClientConn).re
		}
		if ((cc$ as ClientConn).we != null) {
			const __goscriptDeferCallee20 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee20() })
			return (cc$ as ClientConn).we
		}
		if ((cc$ as ClientConn).c == null) {
			const __goscriptDeferCallee21 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee21() })
			return errClosed
		}
		let c = (cc$ as ClientConn).c
		if ($.pointerValue<http.Request>(req).Close) {
			// We write the EOF to the write-side error, because there
			// still might be some pipelined reads
			;(cc$ as ClientConn).we = $.interfaceValue<$.GoError>(ErrPersistEOF, "*http.ProtocolError", /* @__PURE__ */ $.pointerType("http.ProtocolError"))
		}
		void (cc$ as ClientConn).mu.Unlock()

		err = (__goscriptAwait = (cc$ as ClientConn).writeReq!(req, (c as io.Writer | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (cc$ as ClientConn).mu.Lock()
		const __goscriptDeferCallee22 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee22() })
		if (err != null) {
			;(cc$ as ClientConn).we = err
			return err
		}
		;(cc$ as ClientConn).nwritten++

		return null
	}

	static __typeInfo = $.registerStructType(
		"httputil.ClientConn",
		() => new ClientConn(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Do", [["req", /* @__PURE__ */ $.pointerType("http.Request")]], [/* @__PURE__ */ $.pointerType("http.Response"), "error"], true), $.methodSignature("Hijack", [], [["c", "net.Conn"], ["r", /* @__PURE__ */ $.pointerType("bufio.Reader")]], true), $.methodSignature("Pending", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Read", [["req", /* @__PURE__ */ $.pointerType("http.Request")]], [["resp", /* @__PURE__ */ $.pointerType("http.Response")], ["err", "error"]], true), $.methodSignature("Write", [["req", /* @__PURE__ */ $.pointerType("http.Request")]], ["error"], true)],
		ClientConn,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("c", "net.Conn", [1], 8, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("r", /* @__PURE__ */ $.pointerType("bufio.Reader"), [2], 24, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("re", "error", [3], 32, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("we", "error", [4], 48, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("lastbody", "io.ReadCloser", [5], 64, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("nread", /* @__PURE__ */ $.basicType("int"), [6], 80, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("nwritten", /* @__PURE__ */ $.basicType("int"), [7], 88, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("pipereq", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("http.Request"), /* @__PURE__ */ $.basicType("uint")), [8], 96, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("pipe", "textproto.Pipeline", [9], 104, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("writeReq", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http.Request"), "io.Writer"], results: ["error"] } as $.FunctionTypeInfo), [10], 168, false, { pkgPath: "net/http/httputil" })]
	)
}

export let ErrPersistEOF: http.ProtocolError | $.VarRef<http.ProtocolError> | null = new http.ProtocolError({ErrorString: "persistent connection closed"})

export function __goscript_set_ErrPersistEOF(__goscriptValue: http.ProtocolError | $.VarRef<http.ProtocolError> | null): void {
	ErrPersistEOF = __goscriptValue
}

export let ErrClosed: http.ProtocolError | $.VarRef<http.ProtocolError> | null = new http.ProtocolError({ErrorString: "connection closed by user"})

export function __goscript_set_ErrClosed(__goscriptValue: http.ProtocolError | $.VarRef<http.ProtocolError> | null): void {
	ErrClosed = __goscriptValue
}

export let ErrPipeline: http.ProtocolError | $.VarRef<http.ProtocolError> | null = new http.ProtocolError({ErrorString: "pipeline error"})

export function __goscript_set_ErrPipeline(__goscriptValue: http.ProtocolError | $.VarRef<http.ProtocolError> | null): void {
	ErrPipeline = __goscriptValue
}

export let errClosed: $.GoError = errors.New("i/o operation on closed connection")

export function __goscript_set_errClosed(__goscriptValue: $.GoError): void {
	errClosed = __goscriptValue
}

export function NewServerConn(c: net.Conn | null, r: bufio.Reader | $.VarRef<bufio.Reader> | null): ServerConn | $.VarRef<ServerConn> | null {
	if (r == null) {
		r = bufio.NewReader((c as io.Reader | null))
	}
	return new ServerConn({c: c, r: r, pipereq: $.makeMap<http.Request | $.VarRef<http.Request> | null, number>(undefined, /* @__PURE__ */ $.pointerType("http.Request"))})
}

export function NewClientConn(c: net.Conn | null, r: bufio.Reader | $.VarRef<bufio.Reader> | null): ClientConn | $.VarRef<ClientConn> | null {
	if (r == null) {
		r = bufio.NewReader((c as io.Reader | null))
	}
	return new ClientConn({c: c, r: r, pipereq: $.makeMap<http.Request | $.VarRef<http.Request> | null, number>(undefined, /* @__PURE__ */ $.pointerType("http.Request")), writeReq: ($.functionValue((r: http.Request | $.VarRef<http.Request> | null, w: io.Writer | null): $.GoError => $.pointerValue<http.Request>(r).Write(w), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http.Request"), "io.Writer"], results: ["error"] } as $.FunctionTypeInfo)) as ((_p0: http.Request | $.VarRef<http.Request> | null, _p1: io.Writer | null) => $.GoError | globalThis.Promise<$.GoError>) | null)})
}

export function NewProxyClientConn(c: net.Conn | null, r: bufio.Reader | $.VarRef<bufio.Reader> | null): ClientConn | $.VarRef<ClientConn> | null {
	let cc: ClientConn | $.VarRef<ClientConn> | null = NewClientConn(c, r)
	$.pointerValue<ClientConn>(cc).writeReq = ($.functionValue((r: http.Request | $.VarRef<http.Request> | null, w: io.Writer | null): $.GoError => $.pointerValue<http.Request>(r).WriteProxy(w), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http.Request"), "io.Writer"], results: ["error"] } as $.FunctionTypeInfo)) as ((_p0: http.Request | $.VarRef<http.Request> | null, _p1: io.Writer | null) => $.GoError | globalThis.Promise<$.GoError>) | null)
	return cc
}

var __goscriptAwait: any
