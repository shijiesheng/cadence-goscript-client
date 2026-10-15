// Generated file based on rawconn.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as poll from "@goscript/internal/poll/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as syscall from "@goscript/syscall/index.js"

import type * as os from "@goscript/os/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_fd_fake from "./fd_fake.gs.ts"

import * as __goscript_fd_js from "./fd_js.gs.ts"

import * as __goscript_net from "./net.gs.ts"

import * as __goscript_net_fake from "./net_fake.gs.ts"

import * as __goscript_sockaddr_posix from "./sockaddr_posix.gs.ts"
import "@goscript/internal/poll/index.js"
import "@goscript/runtime/index.js"
import "@goscript/syscall/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "./fd_fake.gs.ts"
import "./fd_js.gs.ts"
import "./net.gs.ts"
import "./net_fake.gs.ts"
import "./sockaddr_posix.gs.ts"

export class rawConn {
	public get fd(): __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null {
		return this._fields.fd
	}

	public set fd(value: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null) {
		this._fields.fd = value
	}

	public _fields: {
		fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null
	}

	constructor(init?: Partial<{fd?: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			fd: init?.fd ?? (null! as __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): rawConn {
		return new rawConn(this, true)
	}

	public __goscriptAssign(source: rawConn): void {
		const target = this._fields
		const values = source._fields
		target.fd = values.fd
	}

	public async Control(f: ((_p0: number) => void) | null): globalThis.Promise<$.GoError> {
		const c: rawConn | $.VarRef<rawConn> | null = this;
		const c$: rawConn = c == null ? $.pointerTarget<rawConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<rawConn>(c)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as rawConn).ok() : rawConn.prototype.ok.call(c))) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		let err = await $.pointerValue<__goscript_fd_fake.netFD>((c$ as rawConn).fd).pfd.RawControl(f)
		runtime.KeepAlive($.interfaceValue((c$ as rawConn).fd, "*net.netFD", /* @__PURE__ */ $.pointerType("net.netFD")))
		if (err != null) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "raw-control", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as rawConn).fd).net, Source: null, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as rawConn).fd).laddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return err
	}

	public Network(): poll.String {
		const c: rawConn | $.VarRef<rawConn> | null = this;
		return $.pointerValue<__goscript_fd_fake.netFD>($.pointerValue<rawConn>(c).fd).net
	}

	public PollFD(): poll.FD | $.VarRef<poll.FD> | null {
		const c: rawConn | $.VarRef<rawConn> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as rawConn).ok() : rawConn.prototype.ok.call(c))) {
			return null
		}
		return $.fieldRef($.pointerValue<__goscript_fd_fake.netFD>($.pointerValue<rawConn>(c).fd)._fields, "pfd")
	}

	public async Read(f: ((_p0: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<$.GoError> {
		const c: rawConn | $.VarRef<rawConn> | null = this;
		const c$: rawConn = c == null ? $.pointerTarget<rawConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<rawConn>(c)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as rawConn).ok() : rawConn.prototype.ok.call(c))) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		let err = await $.pointerValue<__goscript_fd_fake.netFD>((c$ as rawConn).fd).pfd.RawRead(f)
		runtime.KeepAlive($.interfaceValue((c$ as rawConn).fd, "*net.netFD", /* @__PURE__ */ $.pointerType("net.netFD")))
		if (err != null) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "raw-read", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as rawConn).fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as rawConn).fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as rawConn).fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return err
	}

	public async Write(f: ((_p0: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<$.GoError> {
		const c: rawConn | $.VarRef<rawConn> | null = this;
		const c$: rawConn = c == null ? $.pointerTarget<rawConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<rawConn>(c)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as rawConn).ok() : rawConn.prototype.ok.call(c))) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		let err = await $.pointerValue<__goscript_fd_fake.netFD>((c$ as rawConn).fd).pfd.RawWrite(f)
		runtime.KeepAlive($.interfaceValue((c$ as rawConn).fd, "*net.netFD", /* @__PURE__ */ $.pointerType("net.netFD")))
		if (err != null) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "raw-write", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as rawConn).fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as rawConn).fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as rawConn).fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return err
	}

	public ok(): boolean {
		const c: rawConn | $.VarRef<rawConn> | null = this;
		return (c != null) && ($.pointerValue<rawConn>(c).fd != null)
	}

	static __typeInfo = $.registerStructType(
		"net.rawConn",
		() => new rawConn(),
		() => [$.methodSignature("Control", [["f", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uintptr")], results: [] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string", "poll.String")], true), $.methodSignature("PollFD", [], [/* @__PURE__ */ $.pointerType("poll.FD")], true), $.methodSignature("Read", [["f", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uintptr")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("Write", [["f", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uintptr")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		rawConn,
		() => [/* @__PURE__ */ $.structField("fd", /* @__PURE__ */ $.pointerType("net.netFD"), [0], 0, false, { pkgPath: "net" })]
	)
}

export class rawListener {
	public get rawConn(): rawConn {
		return this._fields.rawConn
	}

	public set rawConn(value: rawConn) {
		this._fields.rawConn = value
	}

	public _fields: {
		rawConn: rawConn
	}

	constructor(init?: Partial<{rawConn?: rawConn}>, __goscriptValue?: boolean) {
		this._fields = {
			rawConn: init?.rawConn ? init.rawConn.clone() : new rawConn(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): rawListener {
		return new rawListener(this, true)
	}

	public __goscriptAssign(source: rawListener): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.rawConn, values.rawConn)
	}

	public Read(_p0: ((_p0: number) => boolean | globalThis.Promise<boolean>) | null): $.GoError {
		const l: rawListener | $.VarRef<rawListener> | null = this;
		return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
	}

	public Write(_p0: ((_p0: number) => boolean | globalThis.Promise<boolean>) | null): $.GoError {
		const l: rawListener | $.VarRef<rawListener> | null = this;
		return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
	}

	public async Control(f: any): globalThis.Promise<any> {
		return await $.pointerValue<rawConn>(this.rawConn).Control(f)
	}

	public Network(): any {
		return $.pointerValue<rawConn>(this.rawConn).Network()
	}

	public PollFD(): any {
		return $.pointerValue<rawConn>(this.rawConn).PollFD()
	}

	public ok(): any {
		return $.pointerValue<rawConn>(this.rawConn).ok()
	}

	static __typeInfo = $.registerStructType(
		"net.rawListener",
		() => new rawListener(),
		() => [$.methodSignature("Read", [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uintptr")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], ["error"], true), $.methodSignature("Write", [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uintptr")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], ["error"], true), $.methodSignature("Control", [["f", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uintptr")], results: [] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string", "poll.String")], true), $.methodSignature("PollFD", [], [/* @__PURE__ */ $.pointerType("poll.FD")], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		rawListener,
		() => [/* @__PURE__ */ $.structField("rawConn", "net.rawConn", [0], 0, false, { pkgPath: "net", anonymous: true })]
	)
}

export function newRawConn(fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null): rawConn | $.VarRef<rawConn> | null {
	return new rawConn({fd: fd})
}

export function newRawListener(fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null): rawListener | $.VarRef<rawListener> | null {
	return new rawListener({rawConn: new rawConn({fd: fd}, true)})
}
