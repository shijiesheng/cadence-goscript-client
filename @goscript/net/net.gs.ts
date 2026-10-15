// Generated file based on net.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as poll from "@goscript/internal/poll/index.js"

import * as io from "@goscript/io/index.js"

import * as os from "@goscript/os/index.js"

import * as sync from "@goscript/sync/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as time from "@goscript/time/index.js"

import "@goscript/unsafe/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_error_unix from "./error_unix.gs.ts"

import * as __goscript_fd_fake from "./fd_fake.gs.ts"

import * as __goscript_fd_js from "./fd_js.gs.ts"

import * as __goscript_net_fake from "./net_fake.gs.ts"

import * as __goscript_rlimit_js from "./rlimit_js.gs.ts"

import * as __goscript_sock_stub from "./sock_stub.gs.ts"

import * as __goscript_sockaddr_posix from "./sockaddr_posix.gs.ts"

import * as __goscript_sockopt_fake from "./sockopt_fake.gs.ts"

import * as __goscript_tcpsock from "./tcpsock.gs.ts"

import * as __goscript_tcpsock_posix from "./tcpsock_posix.gs.ts"

import * as __goscript_tcpsock_unix from "./tcpsock_unix.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/internal/poll/index.js"
import "@goscript/io/index.js"
import "@goscript/os/index.js"
import "@goscript/sync/index.js"
import "@goscript/syscall/index.js"
import "@goscript/time/index.js"
import "@goscript/sync/atomic/index.js"
import "./error_unix.gs.ts"
import "./fd_fake.gs.ts"
import "./fd_js.gs.ts"
import "./net_fake.gs.ts"
import "./rlimit_js.gs.ts"
import "./sock_stub.gs.ts"
import "./sockaddr_posix.gs.ts"
import "./sockopt_fake.gs.ts"
import "./tcpsock.gs.ts"
import "./tcpsock_posix.gs.ts"
import "./tcpsock_unix.gs.ts"

export type Addr = {
	Network(): string
	String(): string
}

$.registerInterfaceType(
	"net.Addr",
	null,
	[$.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Conn = {
	Close(): $.GoError | globalThis.Promise<$.GoError>
	LocalAddr(): Addr | null | globalThis.Promise<Addr | null>
	Read(b: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	RemoteAddr(): Addr | null | globalThis.Promise<Addr | null>
	SetDeadline(t: time.Time): $.GoError | globalThis.Promise<$.GoError>
	SetReadDeadline(t: time.Time): $.GoError | globalThis.Promise<$.GoError>
	SetWriteDeadline(t: time.Time): $.GoError | globalThis.Promise<$.GoError>
	Write(b: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"net.Conn",
	null,
	[$.methodSignature("Close", [], ["error"]), $.methodSignature("LocalAddr", [], ["net.Addr"]), $.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("RemoteAddr", [], ["net.Addr"]), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export type PacketConn = {
	Close(): $.GoError | globalThis.Promise<$.GoError>
	LocalAddr(): Addr | null
	ReadFrom(p: $.Slice<number>): [number, Addr | null, $.GoError] | globalThis.Promise<[number, Addr | null, $.GoError]>
	SetDeadline(t: time.Time): $.GoError | globalThis.Promise<$.GoError>
	SetReadDeadline(t: time.Time): $.GoError | globalThis.Promise<$.GoError>
	SetWriteDeadline(t: time.Time): $.GoError | globalThis.Promise<$.GoError>
	WriteTo(p: $.Slice<number>, addr: Addr | null): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"net.PacketConn",
	null,
	[$.methodSignature("Close", [], ["error"]), $.methodSignature("LocalAddr", [], ["net.Addr"]), $.methodSignature("ReadFrom", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["addr", "net.Addr"], ["err", "error"]]), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("WriteTo", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", "net.Addr"]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export type Listener = {
	Accept(): [Conn | null, $.GoError] | globalThis.Promise<[Conn | null, $.GoError]>
	Addr(): Addr | null
	Close(): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"net.Listener",
	null,
	[$.methodSignature("Accept", [], ["net.Conn", "error"]), $.methodSignature("Addr", [], ["net.Addr"]), $.methodSignature("Close", [], ["error"])]
);

export type Error = {
	Error(): string | globalThis.Promise<string>
	Temporary(): boolean | globalThis.Promise<boolean>
	Timeout(): boolean | globalThis.Promise<boolean>
}

$.registerInterfaceType(
	"net.Error",
	null,
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type timeout = {
	Timeout(): boolean | globalThis.Promise<boolean>
}

$.registerInterfaceType(
	"net.timeout",
	null,
	[$.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type temporary = {
	Temporary(): boolean | globalThis.Promise<boolean>
}

$.registerInterfaceType(
	"net.temporary",
	null,
	[$.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type UnknownNetworkError = string

$.registerNamedValueType(
	"net.UnknownNetworkError",
	{Error: (receiver: any, ...args: any[]) => (UnknownNetworkError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Temporary: (receiver: any, ...args: any[]) => (UnknownNetworkError_Temporary as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Timeout: (receiver: any, ...args: any[]) => (UnknownNetworkError_Timeout as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*net.UnknownNetworkError",
	{Error: (receiver: any, ...args: any[]) => (UnknownNetworkError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Temporary: (receiver: any, ...args: any[]) => (UnknownNetworkError_Temporary as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Timeout: (receiver: any, ...args: any[]) => (UnknownNetworkError_Timeout as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type InvalidAddrError = string

$.registerNamedValueType(
	"net.InvalidAddrError",
	{Error: (receiver: any, ...args: any[]) => (InvalidAddrError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Temporary: (receiver: any, ...args: any[]) => (InvalidAddrError_Temporary as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Timeout: (receiver: any, ...args: any[]) => (InvalidAddrError_Timeout as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*net.InvalidAddrError",
	{Error: (receiver: any, ...args: any[]) => (InvalidAddrError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Temporary: (receiver: any, ...args: any[]) => (InvalidAddrError_Temporary as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Timeout: (receiver: any, ...args: any[]) => (InvalidAddrError_Timeout as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type buffersWriter = {
	writeBuffers(_p0: $.VarRef<Buffers> | null): [bigint, $.GoError]
}

$.registerInterfaceType(
	"net.buffersWriter",
	null,
	[$.methodSignature("writeBuffers", [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "net.Buffers"))], [/* @__PURE__ */ $.basicType("int64"), "error"])]
);

export type Buffers = $.Slice<$.Slice<number>>

$.registerNamedType("net.Buffers", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))));

$.registerNamedValueType(
	"*net.Buffers",
	{Read: (receiver: any, ...args: any[]) => (Buffers_Read as any)(receiver, ...$.stripGenericTypeArgs(args)), WriteTo: (receiver: any, ...args: any[]) => (Buffers_WriteTo as any)(receiver, ...$.stripGenericTypeArgs(args)), consume: (receiver: any, ...args: any[]) => (Buffers_consume as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("WriteTo", [["w", "io.Writer"]], [["n", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]]), $.methodSignature("consume", [["n", /* @__PURE__ */ $.basicType("int64")]])]
);

export class conn {
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

	public clone(): conn {
		return new conn(this, true)
	}

	public __goscriptAssign(source: conn): void {
		const target = this._fields
		const values = source._fields
		target.fd = values.fd
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const c: conn | $.VarRef<conn> | null = this;
		const c$: conn = c == null ? $.pointerTarget<conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<conn>(c)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as conn).ok() : conn.prototype.ok.call(c))) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		let err = await __goscript_fd_fake.netFD.prototype.Close.call((c$ as conn).fd)
		if (err != null) {
			err = $.interfaceValue<$.GoError>(new OpError({Op: "close", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return err
	}

	public File(): [os.File | $.VarRef<os.File> | null, $.GoError] {
		const c: conn | $.VarRef<conn> | null = this;
		let f: os.File | $.VarRef<os.File> | null = null! as os.File | $.VarRef<os.File> | null
		let err: $.GoError = null! as $.GoError
		const c$: conn = c == null ? $.pointerTarget<conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<conn>(c)
		let __goscriptTuple0: any = $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).fakeNetFD).dup()
		f = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			err = $.interfaceValue<$.GoError>(new OpError({Op: "file", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [f, err]
	}

	public LocalAddr(): Addr | null {
		const c: conn | $.VarRef<conn> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as conn).ok() : conn.prototype.ok.call(c))) {
			return null
		}
		return $.pointerValue<__goscript_fd_fake.netFD>($.pointerValue<conn>(c).fd).laddr
	}

	public async Read(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const c: conn | $.VarRef<conn> | null = this;
		const c$: conn = c == null ? $.pointerTarget<conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<conn>(c)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as conn).ok() : conn.prototype.ok.call(c))) {
			return [0, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let [n, err] = await __goscript_fd_fake.netFD.prototype.Read.call((c$ as conn).fd, b)
		if ((err != null) && (!$.comparableEqual(err, io.EOF))) {
			err = $.interfaceValue<$.GoError>(new OpError({Op: "read", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, err]
	}

	public RemoteAddr(): Addr | null {
		const c: conn | $.VarRef<conn> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as conn).ok() : conn.prototype.ok.call(c))) {
			return null
		}
		return $.pointerValue<__goscript_fd_fake.netFD>($.pointerValue<conn>(c).fd).raddr
	}

	public async SetDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const c: conn | $.VarRef<conn> | null = this;
		const c$: conn = c == null ? $.pointerTarget<conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<conn>(c)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as conn).ok() : conn.prototype.ok.call(c))) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		{
			let err = await __goscript_fd_fake.netFD.prototype.SetDeadline.call((c$ as conn).fd, t)
			if (err != null) {
				return $.interfaceValue<$.GoError>(new OpError({Op: "set", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).net, Source: null, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).laddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		return null
	}

	public async SetReadBuffer(bytes: number): globalThis.Promise<$.GoError> {
		const c: conn | $.VarRef<conn> | null = this;
		const c$: conn = c == null ? $.pointerTarget<conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<conn>(c)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as conn).ok() : conn.prototype.ok.call(c))) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		{
			let err = await __goscript_sockopt_fake.setReadBuffer((c$ as conn).fd, bytes)
			if (err != null) {
				return $.interfaceValue<$.GoError>(new OpError({Op: "set", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).net, Source: null, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).laddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		return null
	}

	public async SetReadDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const c: conn | $.VarRef<conn> | null = this;
		const c$: conn = c == null ? $.pointerTarget<conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<conn>(c)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as conn).ok() : conn.prototype.ok.call(c))) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		{
			let err = await __goscript_fd_fake.netFD.prototype.SetReadDeadline.call((c$ as conn).fd, t)
			if (err != null) {
				return $.interfaceValue<$.GoError>(new OpError({Op: "set", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).net, Source: null, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).laddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		return null
	}

	public SetWriteBuffer(bytes: number): $.GoError {
		const c: conn | $.VarRef<conn> | null = this;
		const c$: conn = c == null ? $.pointerTarget<conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<conn>(c)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as conn).ok() : conn.prototype.ok.call(c))) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		{
			let err = __goscript_sockopt_fake.setWriteBuffer((c$ as conn).fd, bytes)
			if (err != null) {
				return $.interfaceValue<$.GoError>(new OpError({Op: "set", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).net, Source: null, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).laddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		return null
	}

	public async SetWriteDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const c: conn | $.VarRef<conn> | null = this;
		const c$: conn = c == null ? $.pointerTarget<conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<conn>(c)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as conn).ok() : conn.prototype.ok.call(c))) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		{
			let err = await __goscript_fd_fake.netFD.prototype.SetWriteDeadline.call((c$ as conn).fd, t)
			if (err != null) {
				return $.interfaceValue<$.GoError>(new OpError({Op: "set", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).net, Source: null, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).laddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		return null
	}

	public async Write(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const c: conn | $.VarRef<conn> | null = this;
		const c$: conn = c == null ? $.pointerTarget<conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<conn>(c)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as conn).ok() : conn.prototype.ok.call(c))) {
			return [0, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let [n, err] = await __goscript_fd_fake.netFD.prototype.Write.call((c$ as conn).fd, b)
		if (err != null) {
			err = $.interfaceValue<$.GoError>(new OpError({Op: "write", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as conn).fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, err]
	}

	public ok(): boolean {
		const c: conn | $.VarRef<conn> | null = this;
		return (c != null) && ($.pointerValue<conn>(c).fd != null)
	}

	static __typeInfo = $.registerStructType(
		"net.conn",
		() => new conn(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("File", [], [["f", /* @__PURE__ */ $.pointerType("os.File")], ["err", "error"]], true), $.methodSignature("LocalAddr", [], ["net.Addr"], true), $.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("RemoteAddr", [], ["net.Addr"], true), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetReadBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetWriteBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		conn,
		() => [/* @__PURE__ */ $.structField("fd", /* @__PURE__ */ $.pointerType("net.netFD"), [0], 0, false, { pkgPath: "net" })]
	)
}

export class canceledError {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): canceledError {
		return new canceledError(this, true)
	}

	public __goscriptAssign(source: canceledError): void {
	}

	public Error(): string {
		return "operation was canceled"
	}

	public Is(err: $.GoError): boolean {
		return $.comparableEqual(err, context.Canceled)
	}

	static __typeInfo = $.registerStructType(
		"net.canceledError",
		() => new canceledError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Is", [["err", "error"]], [/* @__PURE__ */ $.basicType("bool")])],
		canceledError,
		() => []
	)
}

export class OpError {
	// Op is the operation which caused the error, such as
	// "read" or "write".
	public get Op(): string {
		return this._fields.Op
	}

	public set Op(value: string) {
		this._fields.Op = value
	}

	// Net is the network type on which this error occurred,
	// such as "tcp" or "udp6".
	public get Net(): string {
		return this._fields.Net
	}

	public set Net(value: string) {
		this._fields.Net = value
	}

	// For operations involving a remote network connection, like
	// Dial, Read, or Write, Source is the corresponding local
	// network address.
	public get Source(): Addr | null {
		return this._fields.Source
	}

	public set Source(value: Addr | null) {
		this._fields.Source = value
	}

	// Addr is the network address for which this error occurred.
	// For local operations, like Listen or SetDeadline, Addr is
	// the address of the local endpoint being manipulated.
	// For operations involving a remote network connection, like
	// Dial, Read, or Write, Addr is the remote address of that
	// connection.
	public get Addr(): Addr | null {
		return this._fields.Addr
	}

	public set Addr(value: Addr | null) {
		this._fields.Addr = value
	}

	// Err is the error that occurred during the operation.
	// The Error method panics if the error is nil.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		Op: string
		Net: string
		Source: Addr | null
		Addr: Addr | null
		Err: $.GoError
	}

	constructor(init?: Partial<{Op?: string, Net?: string, Source?: Addr | null, Addr?: Addr | null, Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Op: init?.Op ?? ("" as string),
			Net: init?.Net ?? ("" as string),
			Source: init?.Source ?? (null! as Addr | null),
			Addr: init?.Addr ?? (null! as Addr | null),
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OpError {
		return new OpError(this, true)
	}

	public __goscriptAssign(source: OpError): void {
		const target = this._fields
		const values = source._fields
		target.Op = values.Op
		target.Net = values.Net
		target.Source = $.assignFieldValue(target.Source, values.Source, "net.Addr")
		target.Addr = $.assignFieldValue(target.Addr, values.Addr, "net.Addr")
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const e: OpError | $.VarRef<OpError> | null = this;
		const e$: OpError = e == null ? $.pointerTarget<OpError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<OpError>(e)
		if (e == null) {
			return "<nil>"
		}
		let s = (e$ as OpError).Op
		if (!$.stringEqual((e$ as OpError).Net, "")) {
			s = $.concatString(s, $.concatString(" ", (e$ as OpError).Net))
		}
		if ((e$ as OpError).Source != null) {
			s = $.concatString(s, $.concatString(" ", (__goscriptAwait = $.pointerValue<Exclude<Addr, null>>((e$ as OpError).Source).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		}
		if ((e$ as OpError).Addr != null) {
			if ((e$ as OpError).Source != null) {
				s = $.concatString(s, "->")
			} else {
				s = $.concatString(s, " ")
			}
			s = $.concatString(s, (__goscriptAwait = $.pointerValue<Exclude<Addr, null>>((e$ as OpError).Addr).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		s = $.concatString(s, $.concatString(": ", (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>((e$ as OpError).Err).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		return s
	}

	public async Temporary(): globalThis.Promise<boolean> {
		const e: OpError | $.VarRef<OpError> | null = this;
		const e$: OpError = e == null ? $.pointerTarget<OpError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<OpError>(e)
		// Treat ECONNRESET and ECONNABORTED as temporary errors when
		// they come from calling accept. See issue 6163.
		if (($.stringEqual((e$ as OpError).Op, "accept")) && __goscript_error_unix.isConnError((e$ as OpError).Err)) {
			return true
		}

		{
			let __goscriptTuple1: any = $.typeAssertTuple<os.SyscallError | $.VarRef<os.SyscallError> | null>((e$ as OpError).Err, /* @__PURE__ */ $.pointerType("os.SyscallError"))
			let ne: os.SyscallError | $.VarRef<os.SyscallError> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				let [t, __goscriptShadow0] = $.typeAssertTuple<temporary | null>($.pointerValue<os.SyscallError>(ne).Err, "net.temporary")
				return __goscriptShadow0 && (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<temporary, null>) : $.pointerValue<Exclude<temporary, null>>(t)).Temporary(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		let [t, ok] = $.typeAssertTuple<temporary | null>((e$ as OpError).Err, "net.temporary")
		return ok && (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<temporary, null>) : $.pointerValue<Exclude<temporary, null>>(t)).Temporary(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Timeout(): globalThis.Promise<boolean> {
		const e: OpError | $.VarRef<OpError> | null = this;
		const e$: OpError = e == null ? $.pointerTarget<OpError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<OpError>(e)
		{
			let __goscriptTuple2: any = $.typeAssertTuple<os.SyscallError | $.VarRef<os.SyscallError> | null>((e$ as OpError).Err, /* @__PURE__ */ $.pointerType("os.SyscallError"))
			let ne: os.SyscallError | $.VarRef<os.SyscallError> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (ok) {
				let [t, __goscriptShadow1] = $.typeAssertTuple<timeout | null>($.pointerValue<os.SyscallError>(ne).Err, "net.timeout")
				return __goscriptShadow1 && (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<timeout, null>) : $.pointerValue<Exclude<timeout, null>>(t)).Timeout(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		let [t, ok] = $.typeAssertTuple<timeout | null>((e$ as OpError).Err, "net.timeout")
		return ok && (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<timeout, null>) : $.pointerValue<Exclude<timeout, null>>(t)).Timeout(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public Unwrap(): $.GoError {
		const e: OpError | $.VarRef<OpError> | null = this;
		return $.pointerValue<OpError>(e).Err
	}

	static __typeInfo = $.registerStructType(
		"net.OpError",
		() => new OpError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unwrap", [], ["error"], true)],
		OpError,
		() => [/* @__PURE__ */ $.structField("Op", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Net", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Source", "net.Addr", [2], 32, true), /* @__PURE__ */ $.structField("Addr", "net.Addr", [3], 48, true), /* @__PURE__ */ $.structField("Err", "error", [4], 64, true)]
	)
}

export class ParseError {
	// Type is the type of string that was expected, such as
	// "IP address", "CIDR address".
	public get Type(): string {
		return this._fields.Type
	}

	public set Type(value: string) {
		this._fields.Type = value
	}

	// Text is the malformed text string.
	public get Text(): string {
		return this._fields.Text
	}

	public set Text(value: string) {
		this._fields.Text = value
	}

	public _fields: {
		Type: string
		Text: string
	}

	constructor(init?: Partial<{Type?: string, Text?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? ("" as string),
			Text: init?.Text ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ParseError {
		return new ParseError(this, true)
	}

	public __goscriptAssign(source: ParseError): void {
		const target = this._fields
		const values = source._fields
		target.Type = values.Type
		target.Text = values.Text
	}

	public Error(): string {
		const e: ParseError | $.VarRef<ParseError> | null = this;
		const e$: ParseError = e == null ? $.pointerTarget<ParseError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<ParseError>(e)
		return $.concatString(($.concatString(($.concatString("invalid ", (e$ as ParseError).Type)), ": ")), (e$ as ParseError).Text)
	}

	public Temporary(): boolean {
		const e: ParseError | $.VarRef<ParseError> | null = this;
		return false
	}

	public Timeout(): boolean {
		const e: ParseError | $.VarRef<ParseError> | null = this;
		return false
	}

	static __typeInfo = $.registerStructType(
		"net.ParseError",
		() => new ParseError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		ParseError,
		() => [/* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Text", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

export class AddrError {
	public get Err(): string {
		return this._fields.Err
	}

	public set Err(value: string) {
		this._fields.Err = value
	}

	public get Addr(): string {
		return this._fields.Addr
	}

	public set Addr(value: string) {
		this._fields.Addr = value
	}

	public _fields: {
		Err: string
		Addr: string
	}

	constructor(init?: Partial<{Err?: string, Addr?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Err: init?.Err ?? ("" as string),
			Addr: init?.Addr ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): AddrError {
		return new AddrError(this, true)
	}

	public __goscriptAssign(source: AddrError): void {
		const target = this._fields
		const values = source._fields
		target.Err = values.Err
		target.Addr = values.Addr
	}

	public Error(): string {
		const e: AddrError | $.VarRef<AddrError> | null = this;
		const e$: AddrError = e == null ? $.pointerTarget<AddrError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<AddrError>(e)
		if (e == null) {
			return "<nil>"
		}
		let s = (e$ as AddrError).Err
		if (!$.stringEqual((e$ as AddrError).Addr, "")) {
			s = $.concatString(($.concatString(($.concatString("address ", (e$ as AddrError).Addr)), ": ")), s)
		}
		return s
	}

	public Temporary(): boolean {
		const e: AddrError | $.VarRef<AddrError> | null = this;
		return false
	}

	public Timeout(): boolean {
		const e: AddrError | $.VarRef<AddrError> | null = this;
		return false
	}

	static __typeInfo = $.registerStructType(
		"net.AddrError",
		() => new AddrError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		AddrError,
		() => [/* @__PURE__ */ $.structField("Err", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Addr", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

export class timeoutError {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): timeoutError {
		return new timeoutError(this, true)
	}

	public __goscriptAssign(source: timeoutError): void {
	}

	public Error(): string {
		const e: timeoutError | $.VarRef<timeoutError> | null = this;
		return "i/o timeout"
	}

	public Is(err: $.GoError): boolean {
		const e: timeoutError | $.VarRef<timeoutError> | null = this;
		return $.comparableEqual(err, context.DeadlineExceeded)
	}

	public Temporary(): boolean {
		const e: timeoutError | $.VarRef<timeoutError> | null = this;
		return true
	}

	public Timeout(): boolean {
		const e: timeoutError | $.VarRef<timeoutError> | null = this;
		return true
	}

	static __typeInfo = $.registerStructType(
		"net.timeoutError",
		() => new timeoutError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Is", [["err", "error"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		timeoutError,
		() => []
	)
}

export class DNSConfigError {
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		Err: $.GoError
	}

	constructor(init?: Partial<{Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DNSConfigError {
		return new DNSConfigError(this, true)
	}

	public __goscriptAssign(source: DNSConfigError): void {
		const target = this._fields
		const values = source._fields
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const e: DNSConfigError | $.VarRef<DNSConfigError> | null = this;
		return $.concatString("error reading DNS config: ", (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>($.pointerValue<DNSConfigError>(e).Err).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	public Temporary(): boolean {
		const e: DNSConfigError | $.VarRef<DNSConfigError> | null = this;
		return false
	}

	public Timeout(): boolean {
		const e: DNSConfigError | $.VarRef<DNSConfigError> | null = this;
		return false
	}

	public Unwrap(): $.GoError {
		const e: DNSConfigError | $.VarRef<DNSConfigError> | null = this;
		return $.pointerValue<DNSConfigError>(e).Err
	}

	static __typeInfo = $.registerStructType(
		"net.DNSConfigError",
		() => new DNSConfigError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unwrap", [], ["error"], true)],
		DNSConfigError,
		() => [/* @__PURE__ */ $.structField("Err", "error", [0], 0, true)]
	)
}

export class notFoundError {
	public get s(): string {
		return this._fields.s
	}

	public set s(value: string) {
		this._fields.s = value
	}

	public _fields: {
		s: string
	}

	constructor(init?: Partial<{s?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): notFoundError {
		return new notFoundError(this, true)
	}

	public __goscriptAssign(source: notFoundError): void {
		const target = this._fields
		const values = source._fields
		target.s = values.s
	}

	public Error(): string {
		const e: notFoundError | $.VarRef<notFoundError> | null = this;
		return $.pointerValue<notFoundError>(e).s
	}

	static __typeInfo = $.registerStructType(
		"net.notFoundError",
		() => new notFoundError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		notFoundError,
		() => [/* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "net" })]
	)
}

export class temporaryError {
	public get s(): string {
		return this._fields.s
	}

	public set s(value: string) {
		this._fields.s = value
	}

	public _fields: {
		s: string
	}

	constructor(init?: Partial<{s?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): temporaryError {
		return new temporaryError(this, true)
	}

	public __goscriptAssign(source: temporaryError): void {
		const target = this._fields
		const values = source._fields
		target.s = values.s
	}

	public Error(): string {
		const e: temporaryError | $.VarRef<temporaryError> | null = this;
		return $.pointerValue<temporaryError>(e).s
	}

	public Temporary(): boolean {
		const e: temporaryError | $.VarRef<temporaryError> | null = this;
		return true
	}

	public Timeout(): boolean {
		const e: temporaryError | $.VarRef<temporaryError> | null = this;
		return false
	}

	static __typeInfo = $.registerStructType(
		"net.temporaryError",
		() => new temporaryError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		temporaryError,
		() => [/* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "net" })]
	)
}

export class DNSError {
	public get UnwrapErr(): $.GoError {
		return this._fields.UnwrapErr
	}

	public set UnwrapErr(value: $.GoError) {
		this._fields.UnwrapErr = value
	}

	public get Err(): string {
		return this._fields.Err
	}

	public set Err(value: string) {
		this._fields.Err = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Server(): string {
		return this._fields.Server
	}

	public set Server(value: string) {
		this._fields.Server = value
	}

	public get IsTimeout(): boolean {
		return this._fields.IsTimeout
	}

	public set IsTimeout(value: boolean) {
		this._fields.IsTimeout = value
	}

	public get IsTemporary(): boolean {
		return this._fields.IsTemporary
	}

	public set IsTemporary(value: boolean) {
		this._fields.IsTemporary = value
	}

	// IsNotFound is set to true when the requested name does not
	// contain any records of the requested type (data not found),
	// or the name itself was not found (NXDOMAIN).
	public get IsNotFound(): boolean {
		return this._fields.IsNotFound
	}

	public set IsNotFound(value: boolean) {
		this._fields.IsNotFound = value
	}

	public _fields: {
		UnwrapErr: $.GoError
		Err: string
		Name: string
		Server: string
		IsTimeout: boolean
		IsTemporary: boolean
		IsNotFound: boolean
	}

	constructor(init?: Partial<{UnwrapErr?: $.GoError, Err?: string, Name?: string, Server?: string, IsTimeout?: boolean, IsTemporary?: boolean, IsNotFound?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			UnwrapErr: init?.UnwrapErr ?? (null! as $.GoError),
			Err: init?.Err ?? ("" as string),
			Name: init?.Name ?? ("" as string),
			Server: init?.Server ?? ("" as string),
			IsTimeout: init?.IsTimeout ?? (false as boolean),
			IsTemporary: init?.IsTemporary ?? (false as boolean),
			IsNotFound: init?.IsNotFound ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DNSError {
		return new DNSError(this, true)
	}

	public __goscriptAssign(source: DNSError): void {
		const target = this._fields
		const values = source._fields
		target.UnwrapErr = $.assignFieldValue(target.UnwrapErr, values.UnwrapErr, "error")
		target.Err = values.Err
		target.Name = values.Name
		target.Server = values.Server
		target.IsTimeout = values.IsTimeout
		target.IsTemporary = values.IsTemporary
		target.IsNotFound = values.IsNotFound
	}

	public Error(): string {
		const e: DNSError | $.VarRef<DNSError> | null = this;
		const e$: DNSError = e == null ? $.pointerTarget<DNSError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<DNSError>(e)
		if (e == null) {
			return "<nil>"
		}
		let s = $.concatString("lookup ", (e$ as DNSError).Name)
		if (!$.stringEqual((e$ as DNSError).Server, "")) {
			s = $.concatString(s, $.concatString(" on ", (e$ as DNSError).Server))
		}
		s = $.concatString(s, $.concatString(": ", (e$ as DNSError).Err))
		return s
	}

	public Temporary(): boolean {
		const e: DNSError | $.VarRef<DNSError> | null = this;
		const e$: DNSError = e == null ? $.pointerTarget<DNSError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<DNSError>(e)
		return (e$ as DNSError).IsTimeout || (e$ as DNSError).IsTemporary
	}

	public Timeout(): boolean {
		const e: DNSError | $.VarRef<DNSError> | null = this;
		return $.pointerValue<DNSError>(e).IsTimeout
	}

	public Unwrap(): $.GoError {
		const e: DNSError | $.VarRef<DNSError> | null = this;
		return $.pointerValue<DNSError>(e).UnwrapErr
	}

	static __typeInfo = $.registerStructType(
		"net.DNSError",
		() => new DNSError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unwrap", [], ["error"], true)],
		DNSError,
		() => [/* @__PURE__ */ $.structField("UnwrapErr", "error", [0], 0, true), /* @__PURE__ */ $.structField("Err", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Server", /* @__PURE__ */ $.basicType("string"), [3], 48, true), /* @__PURE__ */ $.structField("IsTimeout", /* @__PURE__ */ $.basicType("bool"), [4], 64, true), /* @__PURE__ */ $.structField("IsTemporary", /* @__PURE__ */ $.basicType("bool"), [5], 65, true), /* @__PURE__ */ $.structField("IsNotFound", /* @__PURE__ */ $.basicType("bool"), [6], 66, true)]
	)
}

export class noReadFrom {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): noReadFrom {
		return new noReadFrom(this, true)
	}

	public __goscriptAssign(source: noReadFrom): void {
	}

	public ReadFrom(_p0: io.Reader | null): [bigint, $.GoError] {
		$.panic("can't happen")
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"net.noReadFrom",
		() => new noReadFrom(),
		() => [$.methodSignature("ReadFrom", ["io.Reader"], [/* @__PURE__ */ $.basicType("int64"), "error"])],
		noReadFrom,
		() => []
	)
}

export class tcpConnWithoutReadFrom {
	public get noReadFrom(): noReadFrom {
		return this._fields.noReadFrom
	}

	public set noReadFrom(value: noReadFrom) {
		this._fields.noReadFrom = value
	}

	public get TCPConn(): __goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null {
		return this._fields.TCPConn
	}

	public set TCPConn(value: __goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null) {
		this._fields.TCPConn = value
	}

	public _fields: {
		noReadFrom: noReadFrom
		TCPConn: __goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null
	}

	constructor(init?: Partial<{noReadFrom?: noReadFrom, TCPConn?: __goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			noReadFrom: init?.noReadFrom ? init.noReadFrom.clone() : new noReadFrom(undefined, true),
			TCPConn: init?.TCPConn ?? (null! as __goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tcpConnWithoutReadFrom {
		return new tcpConnWithoutReadFrom(this, true)
	}

	public __goscriptAssign(source: tcpConnWithoutReadFrom): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.noReadFrom, values.noReadFrom)
		target.TCPConn = values.TCPConn
	}

	public ReadFrom(_p0: any): any {
		return $.pointerValue<noReadFrom>(this.noReadFrom).ReadFrom(_p0)
	}

	public async Close(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.Close()
	}

	public async CloseRead(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).CloseRead()
	}

	public async CloseWrite(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).CloseWrite()
	}

	public File(): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.File()
	}

	public LocalAddr(): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.LocalAddr()
	}

	public MultipathTCP(): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).MultipathTCP()
	}

	public async Read(b: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.Read(b)
	}

	public RemoteAddr(): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.RemoteAddr()
	}

	public async SetDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.SetDeadline(t)
	}

	public SetKeepAlive(keepalive: any): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).SetKeepAlive(keepalive)
	}

	public SetKeepAliveConfig(config: any): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).SetKeepAliveConfig(config)
	}

	public SetKeepAlivePeriod(d: any): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).SetKeepAlivePeriod(d)
	}

	public async SetLinger(sec: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).SetLinger(sec)
	}

	public SetNoDelay(noDelay: any): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).SetNoDelay(noDelay)
	}

	public async SetReadBuffer(bytes: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.SetReadBuffer(bytes)
	}

	public async SetReadDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.SetReadDeadline(t)
	}

	public SetWriteBuffer(bytes: any): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.SetWriteBuffer(bytes)
	}

	public async SetWriteDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.SetWriteDeadline(t)
	}

	public SyscallConn(): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).SyscallConn()
	}

	public async Write(b: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.Write(b)
	}

	public async WriteTo(w: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).WriteTo(w)
	}

	public ok(): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.ok()
	}

	public async readFrom(r: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).readFrom(r)
	}

	public async writeTo(w: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).writeTo(w)
	}

	static __typeInfo = $.registerStructType(
		"net.tcpConnWithoutReadFrom",
		() => new tcpConnWithoutReadFrom(),
		() => [$.methodSignature("ReadFrom", ["io.Reader"], [/* @__PURE__ */ $.basicType("int64"), "error"]), $.methodSignature("Close", [], ["error"]), $.methodSignature("CloseRead", [], ["error"]), $.methodSignature("CloseWrite", [], ["error"]), $.methodSignature("File", [], [["f", /* @__PURE__ */ $.pointerType("os.File")], ["err", "error"]]), $.methodSignature("LocalAddr", [], ["net.Addr"]), $.methodSignature("MultipathTCP", [], [/* @__PURE__ */ $.basicType("bool"), "error"]), $.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("RemoteAddr", [], ["net.Addr"]), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetKeepAlive", [["keepalive", /* @__PURE__ */ $.basicType("bool")]], ["error"]), $.methodSignature("SetKeepAliveConfig", [["config", "net.KeepAliveConfig"]], ["error"]), $.methodSignature("SetKeepAlivePeriod", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["error"]), $.methodSignature("SetLinger", [["sec", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SetNoDelay", [["noDelay", /* @__PURE__ */ $.basicType("bool")]], ["error"]), $.methodSignature("SetReadBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetWriteBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SyscallConn", [], ["syscall.RawConn", "error"]), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("WriteTo", [["w", "io.Writer"]], [/* @__PURE__ */ $.basicType("int64"), "error"]), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("readFrom", [["r", "io.Reader"]], [/* @__PURE__ */ $.basicType("int64"), "error"]), $.methodSignature("writeTo", [["w", "io.Writer"]], [/* @__PURE__ */ $.basicType("int64"), "error"])],
		tcpConnWithoutReadFrom,
		() => [/* @__PURE__ */ $.structField("noReadFrom", "net.noReadFrom", [0], 0, false, { pkgPath: "net", anonymous: true }), /* @__PURE__ */ $.structField("TCPConn", /* @__PURE__ */ $.pointerType("net.TCPConn"), [1], 0, true, { anonymous: true })]
	)
}

export class noWriteTo {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): noWriteTo {
		return new noWriteTo(this, true)
	}

	public __goscriptAssign(source: noWriteTo): void {
	}

	public WriteTo(_p0: io.Writer | null): [bigint, $.GoError] {
		$.panic("can't happen")
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"net.noWriteTo",
		() => new noWriteTo(),
		() => [$.methodSignature("WriteTo", ["io.Writer"], [/* @__PURE__ */ $.basicType("int64"), "error"])],
		noWriteTo,
		() => []
	)
}

export class tcpConnWithoutWriteTo {
	public get noWriteTo(): noWriteTo {
		return this._fields.noWriteTo
	}

	public set noWriteTo(value: noWriteTo) {
		this._fields.noWriteTo = value
	}

	public get TCPConn(): __goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null {
		return this._fields.TCPConn
	}

	public set TCPConn(value: __goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null) {
		this._fields.TCPConn = value
	}

	public _fields: {
		noWriteTo: noWriteTo
		TCPConn: __goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null
	}

	constructor(init?: Partial<{noWriteTo?: noWriteTo, TCPConn?: __goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			noWriteTo: init?.noWriteTo ? init.noWriteTo.clone() : new noWriteTo(undefined, true),
			TCPConn: init?.TCPConn ?? (null! as __goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tcpConnWithoutWriteTo {
		return new tcpConnWithoutWriteTo(this, true)
	}

	public __goscriptAssign(source: tcpConnWithoutWriteTo): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.noWriteTo, values.noWriteTo)
		target.TCPConn = values.TCPConn
	}

	public WriteTo(_p0: any): any {
		return $.pointerValue<noWriteTo>(this.noWriteTo).WriteTo(_p0)
	}

	public async Close(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.Close()
	}

	public async CloseRead(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).CloseRead()
	}

	public async CloseWrite(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).CloseWrite()
	}

	public File(): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.File()
	}

	public LocalAddr(): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.LocalAddr()
	}

	public MultipathTCP(): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).MultipathTCP()
	}

	public async Read(b: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.Read(b)
	}

	public async ReadFrom(r: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).ReadFrom(r)
	}

	public RemoteAddr(): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.RemoteAddr()
	}

	public async SetDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.SetDeadline(t)
	}

	public SetKeepAlive(keepalive: any): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).SetKeepAlive(keepalive)
	}

	public SetKeepAliveConfig(config: any): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).SetKeepAliveConfig(config)
	}

	public SetKeepAlivePeriod(d: any): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).SetKeepAlivePeriod(d)
	}

	public async SetLinger(sec: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).SetLinger(sec)
	}

	public SetNoDelay(noDelay: any): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).SetNoDelay(noDelay)
	}

	public async SetReadBuffer(bytes: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.SetReadBuffer(bytes)
	}

	public async SetReadDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.SetReadDeadline(t)
	}

	public SetWriteBuffer(bytes: any): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.SetWriteBuffer(bytes)
	}

	public async SetWriteDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.SetWriteDeadline(t)
	}

	public SyscallConn(): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).SyscallConn()
	}

	public async Write(b: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.Write(b)
	}

	public ok(): any {
		return $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).conn.ok()
	}

	public async readFrom(r: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).readFrom(r)
	}

	public async writeTo(w: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_tcpsock.TCPConn>(this.TCPConn).writeTo(w)
	}

	static __typeInfo = $.registerStructType(
		"net.tcpConnWithoutWriteTo",
		() => new tcpConnWithoutWriteTo(),
		() => [$.methodSignature("WriteTo", ["io.Writer"], [/* @__PURE__ */ $.basicType("int64"), "error"]), $.methodSignature("Close", [], ["error"]), $.methodSignature("CloseRead", [], ["error"]), $.methodSignature("CloseWrite", [], ["error"]), $.methodSignature("File", [], [["f", /* @__PURE__ */ $.pointerType("os.File")], ["err", "error"]]), $.methodSignature("LocalAddr", [], ["net.Addr"]), $.methodSignature("MultipathTCP", [], [/* @__PURE__ */ $.basicType("bool"), "error"]), $.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("ReadFrom", [["r", "io.Reader"]], [/* @__PURE__ */ $.basicType("int64"), "error"]), $.methodSignature("RemoteAddr", [], ["net.Addr"]), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetKeepAlive", [["keepalive", /* @__PURE__ */ $.basicType("bool")]], ["error"]), $.methodSignature("SetKeepAliveConfig", [["config", "net.KeepAliveConfig"]], ["error"]), $.methodSignature("SetKeepAlivePeriod", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["error"]), $.methodSignature("SetLinger", [["sec", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SetNoDelay", [["noDelay", /* @__PURE__ */ $.basicType("bool")]], ["error"]), $.methodSignature("SetReadBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetWriteBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SyscallConn", [], ["syscall.RawConn", "error"]), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("readFrom", [["r", "io.Reader"]], [/* @__PURE__ */ $.basicType("int64"), "error"]), $.methodSignature("writeTo", [["w", "io.Writer"]], [/* @__PURE__ */ $.basicType("int64"), "error"])],
		tcpConnWithoutWriteTo,
		() => [/* @__PURE__ */ $.structField("noWriteTo", "net.noWriteTo", [0], 0, false, { pkgPath: "net", anonymous: true }), /* @__PURE__ */ $.structField("TCPConn", /* @__PURE__ */ $.pointerType("net.TCPConn"), [1], 0, true, { anonymous: true })]
	)
}

export let listenerBacklogCache: $.VarRef<{"Once": sync.Once, "val": number}> = $.varRef($.anonymousStructValue({"Once": $.markAsStructValue(new sync.Once()), "val": 0}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Once", "sync.Once", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("val", /* @__PURE__ */ $.basicType("int"), [1], 16, false, { pkgPath: "net" })] }))

export function __goscript_set_listenerBacklogCache(__goscriptValue: {"Once": sync.Once, "val": number}): void {
	$.assignStruct(listenerBacklogCache.value, __goscriptValue)
}

export async function listenerBacklog(): globalThis.Promise<number> {
	await listenerBacklogCache.value.Once.Do($.functionValue((): void => {
		listenerBacklogCache.value.val = __goscript_sock_stub.maxListenerBacklog()
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return listenerBacklogCache.value.val
}

export let errNoSuitableAddress: $.GoError = errors.New("no suitable address found")

export function __goscript_set_errNoSuitableAddress(__goscriptValue: $.GoError): void {
	errNoSuitableAddress = __goscriptValue
}

export let errMissingAddress: $.GoError = errors.New("missing address")

export function __goscript_set_errMissingAddress(__goscriptValue: $.GoError): void {
	errMissingAddress = __goscriptValue
}

export let errCanceled: canceledError = new canceledError(undefined, true)

export function __goscript_set_errCanceled(__goscriptValue: canceledError): void {
	$.assignStruct(errCanceled, __goscriptValue)
}

export let ErrWriteToConnected: $.GoError = errors.New("use of WriteTo with pre-connected connection")

export function __goscript_set_ErrWriteToConnected(__goscriptValue: $.GoError): void {
	ErrWriteToConnected = __goscriptValue
}

export function mapErr(err: $.GoError): $.GoError {
	{
		let __goscriptSwitch0 = err
		switch ((true as boolean)) {
			case $.comparableEqual(__goscriptSwitch0, context.Canceled):
			{
				return $.interfaceValue<$.GoError>((errCanceled).clone(), "net.canceledError", "net.canceledError")
				break
			}
			case $.comparableEqual(__goscriptSwitch0, context.DeadlineExceeded):
			{
				return errTimeout
				break
			}
			default:
			{
				return err
				break
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export let aLongTimeAgo: time.Time = $.markAsStructValue($.cloneStructValue(time.Unix(1n, 0n)))

export function __goscript_set_aLongTimeAgo(__goscriptValue: time.Time): void {
	$.assignStruct(aLongTimeAgo, __goscriptValue)
}

export let noDeadline: time.Time = $.markAsStructValue(new time.Time())

export function __goscript_set_noDeadline(__goscriptValue: time.Time): void {
	$.assignStruct(noDeadline, __goscriptValue)
}

export let noCancel: $.Channel<{}> | null = null

export function __goscript_set_noCancel(__goscriptValue: $.Channel<{}> | null): void {
	noCancel = __goscriptValue
}

export function UnknownNetworkError_Error(e: UnknownNetworkError): string {
	return $.concatString("unknown network ", e)
}

export function UnknownNetworkError_Timeout(e: UnknownNetworkError): boolean {
	return false
}

export function UnknownNetworkError_Temporary(e: UnknownNetworkError): boolean {
	return false
}

export function InvalidAddrError_Error(e: InvalidAddrError): string {
	return e
}

export function InvalidAddrError_Timeout(e: InvalidAddrError): boolean {
	return false
}

export function InvalidAddrError_Temporary(e: InvalidAddrError): boolean {
	return false
}

export let errTimeout: $.GoError = $.interfaceValue<$.GoError>(new timeoutError(), "*net.timeoutError", /* @__PURE__ */ $.pointerType("net.timeoutError"))

export function __goscript_set_errTimeout(__goscriptValue: $.GoError): void {
	errTimeout = __goscriptValue
}

export let errNoSuchHost: notFoundError | $.VarRef<notFoundError> | null = new notFoundError({s: "no such host"})

export function __goscript_set_errNoSuchHost(__goscriptValue: notFoundError | $.VarRef<notFoundError> | null): void {
	errNoSuchHost = __goscriptValue
}

export let errUnknownPort: notFoundError | $.VarRef<notFoundError> | null = new notFoundError({s: "unknown port"})

export function __goscript_set_errUnknownPort(__goscriptValue: notFoundError | $.VarRef<notFoundError> | null): void {
	errUnknownPort = __goscriptValue
}

export async function newDNSError(err: $.GoError, name: string, server: string): globalThis.Promise<DNSError | $.VarRef<DNSError> | null> {
	let isTimeout: boolean = false
	let isTemporary: boolean = false
	let unwrapErr: $.GoError = null! as $.GoError

	let __goscriptShadow2 = err
	{
		let __goscriptTuple3: any = $.typeAssertTuple<Error | null>(__goscriptShadow2, "net.Error")
		let __goscriptShadow3 = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		if (ok) {
			isTimeout = (__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<Error, null>) : $.pointerValue<Exclude<Error, null>>(__goscriptShadow3)).Timeout(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			isTemporary = (__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<Error, null>) : $.pointerValue<Exclude<Error, null>>(__goscriptShadow3)).Temporary(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	// At this time, the only errors we wrap are context errors, to allow
	// users to check for canceled/timed out requests.
	if (errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(context.DeadlineExceeded)!) || errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(context.Canceled)!)) {
		unwrapErr = err
	}

	let [, isNotFound] = $.typeAssertTuple<notFoundError | $.VarRef<notFoundError> | null>(err, /* @__PURE__ */ $.pointerType("net.notFoundError"))
	return (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new DNSError({UnwrapErr: unwrapErr, Err: __goscriptLiteralField0, Name: name, Server: server, IsTimeout: isTimeout, IsTemporary: isTemporary, IsNotFound: isNotFound}) })())
}

export let errClosed: poll.errNetClosing = ($.pointerValue<poll.errNetClosing>(poll.ErrNetClosing)).clone()

export function __goscript_set_errClosed(__goscriptValue: poll.errNetClosing): void {
	$.assignStruct(errClosed, __goscriptValue)
}

export let ErrClosed: $.GoError = $.interfaceValue<$.GoError>((errClosed).clone(), "poll.errNetClosing", "poll.errNetClosing")

export function __goscript_set_ErrClosed(__goscriptValue: $.GoError): void {
	ErrClosed = __goscriptValue
}

export async function genericReadFrom(c: __goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, r: io.Reader | null): globalThis.Promise<[bigint, $.GoError]> {
	let n: bigint = 0n
	let err: $.GoError = null! as $.GoError
	// Use wrapper to hide existing r.ReadFrom from io.Copy.
	return io.Copy($.interfaceValue<io.Writer | null>(new tcpConnWithoutReadFrom({TCPConn: c}, true), "net.tcpConnWithoutReadFrom", "net.tcpConnWithoutReadFrom")!, $.pointerValueOrNil(r)!)
}

export async function genericWriteTo(c: __goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, w: io.Writer | null): globalThis.Promise<[bigint, $.GoError]> {
	let n: bigint = 0n
	let err: $.GoError = null! as $.GoError
	// Use wrapper to hide existing w.WriteTo from io.Copy.
	return io.Copy($.pointerValueOrNil(w)!, $.interfaceValue<io.Reader | null>(new tcpConnWithoutWriteTo({TCPConn: c}, true), "net.tcpConnWithoutWriteTo", "net.tcpConnWithoutWriteTo")!)
}

export let threadLimit: $.Channel<{}> | null = null! as $.Channel<{}> | null

export function __goscript_set_threadLimit(__goscriptValue: $.Channel<{}> | null): void {
	threadLimit = __goscriptValue
}

export let threadOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_threadOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(threadOnce.value, __goscriptValue)
}

export async function acquireThread(ctx: context.Context | null): globalThis.Promise<$.GoError> {
	await threadOnce.value.Do($.functionValue((): void => {
		threadLimit = $.makeChannel<{}>(__goscript_rlimit_js.concurrentThreadsLimit(), {}, "both")
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, $.GoError>([
		{
			id: 0,
			isSend: true,
			channel: threadLimit,
			value: {},
			onSelected: async (__goscriptSelect0Result) => {
				return null
			}
		},
		{
			id: 1,
			isSend: false,
			channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
			onSelected: async (__goscriptSelect0Result) => {
				return (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err()
			}
		}
	], false)
	if (__goscriptSelect0HasReturn) {
		return __goscriptSelect0Value
	}
	throw new globalThis.Error("unreachable select")
	throw new globalThis.Error("goscript: unreachable return")
}

export async function releaseThread(): globalThis.Promise<void> {
	await $.chanRecv(threadLimit)
}

export async function Buffers_WriteTo(v: $.VarRef<Buffers> | null, w: io.Writer | null): globalThis.Promise<[bigint, $.GoError]> {
	let n: bigint = 0n
	let err: $.GoError = null! as $.GoError
	{
		let [wv, ok] = $.typeAssertTuple<buffersWriter | null>(w, "net.buffersWriter")
		if (ok) {
			return (wv !== null && (wv as any).__isVarRef !== true && (wv as any).__goValue === undefined ? (wv as Exclude<buffersWriter, null>) : $.pointerValue<Exclude<buffersWriter, null>>(wv)).writeBuffers(v)
		}
	}
	for (let __goscriptRangeTarget0 = $.pointerValue<Buffers>(v), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let b = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as $.Slice<number>)
		let [nb, __goscriptShadow4] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(b)
		n = $.int64Add(n, $.int64(nb))
		if (__goscriptShadow4 != null) {
			Buffers_consume(v, n)
			return [n, __goscriptShadow4]
		}
	}
	Buffers_consume(v, n)
	return [n, null]
}

export function Buffers_Read(v: $.VarRef<Buffers> | null, p: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	while (($.sliceLen(p) > 0) && ($.sliceLen(($.pointerValue<Buffers>(v) as Buffers)) > 0)) {
		let n0: number = $.copy(p, $.arrayIndex(($.pointerValue<Buffers>(v))!, 0))
		Buffers_consume(v, $.int64(n0))
		p = $.goSlice(p, n0, undefined)
		n = n + (n0)
	}
	if ($.sliceLen(($.pointerValue<Buffers>(v) as Buffers)) == 0) {
		err = io.EOF
	}
	return [n, err]
}

export function Buffers_consume(v: $.VarRef<Buffers> | null, n: bigint): void {
	while ($.sliceLen(($.pointerValue<Buffers>(v) as Buffers)) > 0) {
		let ln0 = $.int64($.sliceLen($.arrayIndex(($.pointerValue<Buffers>(v))!, 0)))
		if (ln0 > n) {
			$.sliceElems(($.pointerValue<Buffers>(v))!)[$.sliceSlot(($.pointerValue<Buffers>(v))!, 0)] = $.goSlice($.arrayIndex(($.pointerValue<Buffers>(v))!, 0), globalThis.Number(n), undefined)
			return
		}
		n = $.int64Sub(n, ln0)
		$.sliceElems(($.pointerValue<Buffers>(v))!)[$.sliceSlot(($.pointerValue<Buffers>(v))!, 0)] = null
		v!.value = ($.goSlice(($.pointerValue<Buffers>(v)), 1, undefined) as Buffers)
	}
}

var __goscriptAwait: any
