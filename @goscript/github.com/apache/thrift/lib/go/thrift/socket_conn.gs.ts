// Generated file based on socket_conn.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as net from "@goscript/net/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_socket_non_unix_conn from "./socket_non_unix_conn.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/atomic/index.js"
import "./socket_non_unix_conn.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.socketConn"])

export class socketConn {
	public get Conn(): net.Conn | null {
		return this._fields.Conn
	}

	public set Conn(value: net.Conn | null) {
		this._fields.Conn = value
	}

	public get buffer(): Uint8Array {
		return this._fields.buffer
	}

	public set buffer(value: Uint8Array) {
		this._fields.buffer = value
	}

	public get closed(): number {
		return this._fields.closed
	}

	public set closed(value: number) {
		this._fields.closed = value
	}

	public _fields: {
		Conn: net.Conn | null
		buffer: Uint8Array
		closed: number
	}

	constructor(init?: Partial<{Conn?: net.Conn | null, buffer?: Uint8Array, closed?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Conn: init?.Conn ?? (null! as net.Conn | null),
			buffer: init?.buffer !== undefined ? $.cloneArrayValue(init.buffer, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1)) : $.arrayValue(new Uint8Array(1)),
			closed: init?.closed ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): socketConn {
		return new socketConn(this, true)
	}

	public __goscriptAssign(source: socketConn): void {
		const target = this._fields
		const values = source._fields
		target.Conn = $.assignFieldValue(target.Conn, values.Conn, "net.Conn")
		target.buffer = $.assignFieldValue(target.buffer, values.buffer, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1))
		target.closed = values.closed
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const sc: socketConn | $.VarRef<socketConn> | null = this;
		const sc$: socketConn = sc == null ? $.pointerTarget<socketConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<socketConn>(sc)
		if (!(sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as socketConn).isValid() : socketConn.prototype.isValid.call(sc))) {
			// Already closed
			return net.ErrClosed
		}
		atomic.StoreInt32($.fieldRef((sc$ as socketConn)._fields, "closed"), 1)
		return $.pointerValue<Exclude<net.Conn, null>>((sc$ as socketConn).Conn).Close()
	}

	public async IsOpen(): globalThis.Promise<boolean> {
		const sc: socketConn | $.VarRef<socketConn> | null = this;
		if (!(sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as socketConn).isValid() : socketConn.prototype.isValid.call(sc))) {
			return false
		}
		{
			let err = (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as socketConn).checkConn() : socketConn.prototype.checkConn.call(sc))
			if (err != null) {
				if (!errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(net.ErrClosed)!)) {
					// The connectivity check failed and the error is not
					// that the connection is already closed, we need to
					// close the connection explicitly here to avoid
					// connection leaks.
					await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as socketConn).Close() : socketConn.prototype.Close.call(sc))
				}
				return false
			}
		}
		return true
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const sc: socketConn | $.VarRef<socketConn> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		if ($.sliceLen(p) == 0) {
			return [0, await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as socketConn).read0() : socketConn.prototype.read0.call(sc))]
		}

		return $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<socketConn>(sc).Conn).Read(p)
	}

	public checkConn(): $.GoError {
		const sc: socketConn | $.VarRef<socketConn> | null = this;

		return null
	}

	public isValid(): boolean {
		const sc: socketConn | $.VarRef<socketConn> | null = this;
		const sc$: socketConn = sc == null ? $.pointerTarget<socketConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<socketConn>(sc)
		return ((sc != null) && ((sc$ as socketConn).Conn != null)) && (atomic.LoadInt32($.fieldRef((sc$ as socketConn)._fields, "closed")) == 0)
	}

	public async read0(): globalThis.Promise<$.GoError> {
		const sc: socketConn | $.VarRef<socketConn> | null = this;

		let p: $.Slice<number> = null! as $.Slice<number>
		let [, err] = await $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<socketConn>(sc).Conn).Read(p)
		return err
	}

	public async LocalAddr(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).LocalAddr()
	}

	public async RemoteAddr(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).RemoteAddr()
	}

	public async SetDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).SetDeadline(t)
	}

	public async SetReadDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).SetReadDeadline(t)
	}

	public async SetWriteDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).SetWriteDeadline(t)
	}

	public async Write(b: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).Write(b)
	}

	static __typeInfo = $.registerStructType(
		"thrift.socketConn",
		() => new socketConn(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("IsOpen", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("checkConn", [], ["error"], true), $.methodSignature("isValid", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("read0", [], ["error"], true), $.methodSignature("LocalAddr", [], ["net.Addr"]), $.methodSignature("RemoteAddr", [], ["net.Addr"]), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])],
		socketConn,
		() => [/* @__PURE__ */ $.structField("Conn", "net.Conn", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("buffer", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1), [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("closed", /* @__PURE__ */ $.basicType("int32"), [2], 20, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export function createSocketConnFromReturn(conn: net.Conn | null, err: $.GoError): [socketConn | $.VarRef<socketConn> | null, $.GoError] {
	if (err != null) {
		return [null, err]
	}
	return [new socketConn({Conn: conn}), null]
}

export function wrapSocketConn(conn: net.Conn | null): socketConn | $.VarRef<socketConn> | null {
	// In case conn is already wrapped,
	// return it as-is and avoid double wrapping.
	{
		let __goscriptTuple0: any = $.typeAssertTuple<socketConn | $.VarRef<socketConn> | null>(conn, /* @__PURE__ */ $.pointerType("thrift.socketConn"))
		let sc: socketConn | $.VarRef<socketConn> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			return sc
		}
	}

	return new socketConn({Conn: conn})
}

var __goscriptAwait: any
