// Generated file based on syscallconn.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as net from "@goscript/net/index.js"

import * as syscall from "@goscript/syscall/index.js"
import "@goscript/net/index.js"
import "@goscript/syscall/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/credentials", ["credentials.syscallConn"])

export type sysConn = syscall.Conn | null

export class syscallConn {
	public get Conn(): net.Conn | null {
		return this._fields.Conn
	}

	public set Conn(value: net.Conn | null) {
		this._fields.Conn = value
	}

	public get sysConn(): sysConn | null {
		return this._fields.sysConn
	}

	public set sysConn(value: sysConn | null) {
		this._fields.sysConn = value
	}

	public _fields: {
		Conn: net.Conn | null
		sysConn: sysConn | null
	}

	constructor(init?: Partial<{Conn?: net.Conn | null, sysConn?: sysConn | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Conn: init?.Conn ?? (null! as net.Conn | null),
			sysConn: init?.sysConn ?? (null! as sysConn | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): syscallConn {
		return new syscallConn(this, true)
	}

	public __goscriptAssign(source: syscallConn): void {
		const target = this._fields
		const values = source._fields
		target.Conn = $.assignFieldValue(target.Conn, values.Conn, "net.Conn")
		target.sysConn = $.assignFieldValue(target.sysConn, values.sysConn, "syscall.Conn")
	}

	public async Close(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).Close()
	}

	public async LocalAddr(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).LocalAddr()
	}

	public async Read(b: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).Read(b)
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

	public SyscallConn(): any {
		return $.pointerValue<Exclude<sysConn | null, null>>(this.sysConn).SyscallConn()
	}

	static __typeInfo = $.registerStructType(
		"credentials.syscallConn",
		() => new syscallConn(),
		() => [$.methodSignature("Close", [], ["error"]), $.methodSignature("LocalAddr", [], ["net.Addr"]), $.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("RemoteAddr", [], ["net.Addr"]), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("SyscallConn", [], ["syscall.RawConn", "error"])],
		syscallConn,
		() => [/* @__PURE__ */ $.structField("Conn", "net.Conn", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("sysConn", "syscall.Conn", [1], 16, false, { pkgPath: "google.golang.org/grpc/internal/credentials", anonymous: true })]
	)
}

export function WrapSyscallConn(rawConn: net.Conn | null, newConn: net.Conn | null): net.Conn | null {
	let [__goscriptShadow0, ok] = $.typeAssertTuple<syscall.Conn | null>(rawConn, "syscall.Conn")
	if (!ok) {
		return newConn
	}
	return $.interfaceValue<net.Conn | null>(new syscallConn({Conn: newConn, sysConn: __goscriptShadow0}), "*credentials.syscallConn", /* @__PURE__ */ $.pointerType("credentials.syscallConn"))
}
