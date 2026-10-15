// Generated file based on fd_fake.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as poll from "@goscript/internal/poll/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as time from "@goscript/time/index.js"

import * as os from "@goscript/os/index.js"

import * as syscall from "@goscript/syscall/index.js"

import type * as netip from "@goscript/net/netip/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_error_posix from "./error_posix.gs.ts"

import * as __goscript_fd_js from "./fd_js.gs.ts"

import * as __goscript_ip from "./ip.gs.ts"

import * as __goscript_iprawsock_posix from "./iprawsock_posix.gs.ts"

import * as __goscript_net from "./net.gs.ts"

import * as __goscript_net_fake from "./net_fake.gs.ts"

import * as __goscript_sockaddr_posix from "./sockaddr_posix.gs.ts"

import * as __goscript_tcpsock from "./tcpsock.gs.ts"

import * as __goscript_tcpsock_posix from "./tcpsock_posix.gs.ts"

import * as __goscript_udpsock from "./udpsock.gs.ts"

import * as __goscript_udpsock_posix from "./udpsock_posix.gs.ts"

import * as __goscript_unixsock_posix from "./unixsock_posix.gs.ts"
import "@goscript/internal/poll/index.js"
import "@goscript/runtime/index.js"
import "@goscript/time/index.js"
import "@goscript/os/index.js"
import "@goscript/syscall/index.js"
import "@goscript/sync/atomic/index.js"
import "./error_posix.gs.ts"
import "./fd_js.gs.ts"
import "./ip.gs.ts"
import "./iprawsock_posix.gs.ts"
import "./net.gs.ts"
import "./net_fake.gs.ts"
import "./sockaddr_posix.gs.ts"
import "./tcpsock.gs.ts"
import "./tcpsock_posix.gs.ts"
import "./udpsock.gs.ts"
import "./udpsock_posix.gs.ts"
import "./unixsock_posix.gs.ts"

export class netFD {
	public get pfd(): poll.FD {
		return this._fields.pfd
	}

	public set pfd(value: poll.FD) {
		this._fields.pfd = value
	}

	// immutable until Close
	public get family(): number {
		return this._fields.family
	}

	public set family(value: number) {
		this._fields.family = value
	}

	public get sotype(): number {
		return this._fields.sotype
	}

	public set sotype(value: number) {
		this._fields.sotype = value
	}

	public get isConnected(): boolean {
		return this._fields.isConnected
	}

	public set isConnected(value: boolean) {
		this._fields.isConnected = value
	}

	public get net(): string {
		return this._fields.net
	}

	public set net(value: string) {
		this._fields.net = value
	}

	public get laddr(): __goscript_net.Addr | null {
		return this._fields.laddr
	}

	public set laddr(value: __goscript_net.Addr | null) {
		this._fields.laddr = value
	}

	public get raddr(): __goscript_net.Addr | null {
		return this._fields.raddr
	}

	public set raddr(value: __goscript_net.Addr | null) {
		this._fields.raddr = value
	}

	public get fakeNetFD(): __goscript_net_fake.fakeNetFD | $.VarRef<__goscript_net_fake.fakeNetFD> | null {
		return this._fields.fakeNetFD
	}

	public set fakeNetFD(value: __goscript_net_fake.fakeNetFD | $.VarRef<__goscript_net_fake.fakeNetFD> | null) {
		this._fields.fakeNetFD = value
	}

	public _fields: {
		pfd: poll.FD
		family: number
		sotype: number
		isConnected: boolean
		net: string
		laddr: __goscript_net.Addr | null
		raddr: __goscript_net.Addr | null
		fakeNetFD: __goscript_net_fake.fakeNetFD | $.VarRef<__goscript_net_fake.fakeNetFD> | null
	}

	constructor(init?: Partial<{pfd?: poll.FD, family?: number, sotype?: number, isConnected?: boolean, net?: string, laddr?: __goscript_net.Addr | null, raddr?: __goscript_net.Addr | null, fakeNetFD?: __goscript_net_fake.fakeNetFD | $.VarRef<__goscript_net_fake.fakeNetFD> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			pfd: init?.pfd ? init.pfd.clone() : new poll.FD(undefined, true),
			family: init?.family ?? (0 as number),
			sotype: init?.sotype ?? (0 as number),
			isConnected: init?.isConnected ?? (false as boolean),
			net: init?.net ?? ("" as string),
			laddr: init?.laddr ?? (null! as __goscript_net.Addr | null),
			raddr: init?.raddr ?? (null! as __goscript_net.Addr | null),
			fakeNetFD: init?.fakeNetFD ?? (null! as __goscript_net_fake.fakeNetFD | $.VarRef<__goscript_net_fake.fakeNetFD> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): netFD {
		return new netFD(this, true)
	}

	public __goscriptAssign(source: netFD): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.pfd, values.pfd)
		target.family = values.family
		target.sotype = values.sotype
		target.isConnected = values.isConnected
		target.net = values.net
		target.laddr = $.assignFieldValue(target.laddr, values.laddr, "net.Addr")
		target.raddr = $.assignFieldValue(target.raddr, values.raddr, "net.Addr")
		target.fakeNetFD = values.fakeNetFD
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const fd: netFD | $.VarRef<netFD> | null = this;
		const fd$: netFD = fd == null ? $.pointerTarget<netFD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<netFD>(fd)
		if ((fd$ as netFD).fakeNetFD != null) {
			return __goscript_net_fake.fakeNetFD.prototype.Close.call((fd$ as netFD).fakeNetFD)
		}
		// TODO Replace with runtime.AddCleanup.
		runtime.SetFinalizer($.interfaceValue(fd, "*net.netFD", /* @__PURE__ */ $.pointerType("net.netFD")), null)
		return (fd$ as netFD).pfd.Close()
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const fd: netFD | $.VarRef<netFD> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const fd$: netFD = fd == null ? $.pointerTarget<netFD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<netFD>(fd)
		if ((fd$ as netFD).fakeNetFD != null) {
			return __goscript_net_fake.fakeNetFD.prototype.Read.call((fd$ as netFD).fakeNetFD, p)
		}
		let __goscriptTuple0: any = await (fd$ as netFD).pfd.Read(p)
		n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		runtime.KeepAlive($.interfaceValue(fd, "*net.netFD", /* @__PURE__ */ $.pointerType("net.netFD")))
		return [n, __goscript_error_posix.wrapSyscallError("fd_read", err)]
	}

	public async SetDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const fd: netFD | $.VarRef<netFD> | null = this;
		const fd$: netFD = fd == null ? $.pointerTarget<netFD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<netFD>(fd)
		if ((fd$ as netFD).fakeNetFD != null) {
			return __goscript_net_fake.fakeNetFD.prototype.SetDeadline.call((fd$ as netFD).fakeNetFD, t)
		}
		return (fd$ as netFD).pfd.SetDeadline(t)
	}

	public async SetReadDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const fd: netFD | $.VarRef<netFD> | null = this;
		const fd$: netFD = fd == null ? $.pointerTarget<netFD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<netFD>(fd)
		if ((fd$ as netFD).fakeNetFD != null) {
			return __goscript_net_fake.fakeNetFD.prototype.SetReadDeadline.call((fd$ as netFD).fakeNetFD, t)
		}
		return (fd$ as netFD).pfd.SetReadDeadline(t)
	}

	public async SetWriteDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const fd: netFD | $.VarRef<netFD> | null = this;
		const fd$: netFD = fd == null ? $.pointerTarget<netFD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<netFD>(fd)
		if ((fd$ as netFD).fakeNetFD != null) {
			return __goscript_net_fake.fakeNetFD.prototype.SetWriteDeadline.call((fd$ as netFD).fakeNetFD, t)
		}
		return (fd$ as netFD).pfd.SetWriteDeadline(t)
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const fd: netFD | $.VarRef<netFD> | null = this;
		let nn: number = 0
		let err: $.GoError = null! as $.GoError
		const fd$: netFD = fd == null ? $.pointerTarget<netFD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<netFD>(fd)
		if ((fd$ as netFD).fakeNetFD != null) {
			return __goscript_net_fake.fakeNetFD.prototype.Write.call((fd$ as netFD).fakeNetFD, p)
		}
		let __goscriptTuple1: any = await (fd$ as netFD).pfd.Write(p)
		nn = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		runtime.KeepAlive($.interfaceValue(fd, "*net.netFD", /* @__PURE__ */ $.pointerType("net.netFD")))
		return [nn, __goscript_error_posix.wrapSyscallError("fd_write", err)]
	}

	public async accept(): globalThis.Promise<[netFD | $.VarRef<netFD> | null, $.GoError]> {
		const fd: netFD | $.VarRef<netFD> | null = this;
		let netfd: netFD | $.VarRef<netFD> | null = null! as netFD | $.VarRef<netFD> | null
		let err: $.GoError = null! as $.GoError
		const fd$: netFD = fd == null ? $.pointerTarget<netFD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<netFD>(fd)
		if ((fd$ as netFD).fakeNetFD != null) {
			return __goscript_net_fake.fakeNetFD.prototype.accept.call((fd$ as netFD).fakeNetFD, (fd$ as netFD).laddr)
		}
		let __goscriptTuple2: any = await (fd$ as netFD).pfd.Accept()
		let d = __goscriptTuple2[0]
		let errcall = __goscriptTuple2[2]
		err = __goscriptTuple2[3]
		if (err != null) {
			if (!$.stringEqual(errcall, "")) {
				err = __goscript_error_posix.wrapSyscallError(errcall, err)
			}
			return [null, err]
		}
		netfd = newFD("tcp", d)
		{
			err = (netfd !== null && (netfd as any).__isVarRef !== true && (netfd as any).__goValue === undefined ? ((netfd as any) as netFD).init() : netFD.prototype.init.call(netfd))
			if (err != null) {
				await (netfd !== null && (netfd as any).__isVarRef !== true && (netfd as any).__goValue === undefined ? ((netfd as any) as netFD).Close() : netFD.prototype.Close.call(netfd))
				return [null, err]
			}
		}
		return [netfd, null]
	}

	public addrFunc(): ((_p0: syscall.Sockaddr | null) => __goscript_net.Addr | null | globalThis.Promise<__goscript_net.Addr | null>) | null {
		const fd: netFD | $.VarRef<netFD> | null = this;
		const fd$: netFD = fd == null ? $.pointerTarget<netFD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<netFD>(fd)
		switch ((fd$ as netFD).family) {
			case syscall.AF_INET:
			case syscall.AF_INET6:
			{
				switch ((fd$ as netFD).sotype) {
					case syscall.SOCK_STREAM:
					{
						return __goscript_tcpsock_posix.sockaddrToTCP
						break
					}
					case syscall.SOCK_DGRAM:
					{
						return __goscript_udpsock_posix.sockaddrToUDP
						break
					}
					case syscall.SOCK_RAW:
					{
						return __goscript_iprawsock_posix.sockaddrToIP
						break
					}
				}
				break
			}
			case syscall.AF_UNIX:
			{
				switch ((fd$ as netFD).sotype) {
					case syscall.SOCK_STREAM:
					{
						return __goscript_unixsock_posix.sockaddrToUnix
						break
					}
					case syscall.SOCK_DGRAM:
					{
						return __goscript_unixsock_posix.sockaddrToUnixgram
						break
					}
					case syscall.SOCK_SEQPACKET:
					{
						return __goscript_unixsock_posix.sockaddrToUnixpacket
						break
					}
				}
				break
			}
		}
		return $.functionValue((_p0: syscall.Sockaddr | null): __goscript_net.Addr | null => {
			return null
		}, ({ kind: $.TypeKind.Function, params: ["syscall.Sockaddr"], results: ["net.Addr"] } as $.FunctionTypeInfo))
	}

	public async closeRead(): globalThis.Promise<$.GoError> {
		const fd: netFD | $.VarRef<netFD> | null = this;
		const fd$: netFD = fd == null ? $.pointerTarget<netFD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<netFD>(fd)
		if ((fd$ as netFD).fakeNetFD != null) {
			return __goscript_net_fake.fakeNetFD.prototype.closeRead.call((fd$ as netFD).fakeNetFD)
		}
		return os.NewSyscallError("closeRead", $.namedValueInterfaceValue<$.GoError>(syscall.ENOTSUP, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)
	}

	public async closeWrite(): globalThis.Promise<$.GoError> {
		const fd: netFD | $.VarRef<netFD> | null = this;
		const fd$: netFD = fd == null ? $.pointerTarget<netFD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<netFD>(fd)
		if ((fd$ as netFD).fakeNetFD != null) {
			return __goscript_net_fake.fakeNetFD.prototype.closeWrite.call((fd$ as netFD).fakeNetFD)
		}
		return os.NewSyscallError("closeRead", $.namedValueInterfaceValue<$.GoError>(syscall.ENOTSUP, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)
	}

	public init(): $.GoError {
		const fd: netFD | $.VarRef<netFD> | null = this;
		const fd$: netFD = fd == null ? $.pointerTarget<netFD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<netFD>(fd)
		return (fd$ as netFD).pfd.Init((fd$ as netFD).net, true)
	}

	public name(): string {
		const fd: netFD | $.VarRef<netFD> | null = this;
		return "unknown"
	}

	public setAddr(laddr: __goscript_net.Addr | null, raddr: __goscript_net.Addr | null): void {
		let fd: netFD | $.VarRef<netFD> | null = this;
		const fd$: netFD = fd == null ? $.pointerTarget<netFD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<netFD>(fd);
		;(fd$ as netFD).laddr = laddr;
		;(fd$ as netFD).raddr = raddr
		// TODO Replace with runtime.AddCleanup.
		runtime.SetFinalizer($.interfaceValue(fd, "*net.netFD", /* @__PURE__ */ $.pointerType("net.netFD")), $.interfaceValue($.functionValue(async (fd: netFD | $.VarRef<netFD> | null): globalThis.Promise<$.GoError> => await $.pointerValue<netFD>(fd).Close(), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("net.netFD")], results: ["error"] } as $.FunctionTypeInfo)), "func(*net.netFD) error", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("net.netFD")], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async shutdown(how: number): globalThis.Promise<$.GoError> {
		const fd: netFD | $.VarRef<netFD> | null = this;
		const fd$: netFD = fd == null ? $.pointerTarget<netFD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<netFD>(fd)
		if ((fd$ as netFD).fakeNetFD != null) {
			return null
		}
		let err = await (fd$ as netFD).pfd.Shutdown(how)
		runtime.KeepAlive($.interfaceValue(fd, "*net.netFD", /* @__PURE__ */ $.pointerType("net.netFD")))
		return __goscript_error_posix.wrapSyscallError("shutdown", err)
	}

	public async assignFakeAddr(addr: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net_fake.fakeNetFD>(this.fakeNetFD).assignFakeAddr(addr)
	}

	public dup(): any {
		return $.pointerValue<__goscript_net_fake.fakeNetFD>(this.fakeNetFD).dup()
	}

	public async readFrom(p: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net_fake.fakeNetFD>(this.fakeNetFD).readFrom(p)
	}

	public async readFromInet4(p: any, sa: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net_fake.fakeNetFD>(this.fakeNetFD).readFromInet4(p, sa)
	}

	public async readFromInet6(p: any, sa: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net_fake.fakeNetFD>(this.fakeNetFD).readFromInet6(p, sa)
	}

	public async readMsg(p: any, oob: any, flags: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net_fake.fakeNetFD>(this.fakeNetFD).readMsg(p, oob, flags)
	}

	public async readMsgInet4(p: any, oob: any, flags: any, sa: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net_fake.fakeNetFD>(this.fakeNetFD).readMsgInet4(p, oob, flags, sa)
	}

	public async readMsgInet6(p: any, oob: any, flags: any, sa: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net_fake.fakeNetFD>(this.fakeNetFD).readMsgInet6(p, oob, flags, sa)
	}

	public async setLinger(sec: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net_fake.fakeNetFD>(this.fakeNetFD).setLinger(sec)
	}

	public async setReadBuffer(bytes: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net_fake.fakeNetFD>(this.fakeNetFD).setReadBuffer(bytes)
	}

	public setWriteBuffer(bytes: any): any {
		return $.pointerValue<__goscript_net_fake.fakeNetFD>(this.fakeNetFD).setWriteBuffer(bytes)
	}

	public async writeMsg(p: any, oob: any, sa: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net_fake.fakeNetFD>(this.fakeNetFD).writeMsg(p, oob, sa)
	}

	public async writeMsgInet4(p: any, oob: any, sa4: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net_fake.fakeNetFD>(this.fakeNetFD).writeMsgInet4(p, oob, sa4)
	}

	public async writeMsgInet6(p: any, oob: any, sa6: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net_fake.fakeNetFD>(this.fakeNetFD).writeMsgInet6(p, oob, sa6)
	}

	public async writeTo(p: any, sa: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net_fake.fakeNetFD>(this.fakeNetFD).writeTo(p, sa)
	}

	public async writeToInet4(p: any, sa: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net_fake.fakeNetFD>(this.fakeNetFD).writeToInet4(p, sa)
	}

	public async writeToInet6(p: any, sa: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net_fake.fakeNetFD>(this.fakeNetFD).writeToInet6(p, sa)
	}

	static __typeInfo = $.registerStructType(
		"net.netFD",
		() => new netFD(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["nn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("accept", [], [["netfd", /* @__PURE__ */ $.pointerType("net.netFD")], ["err", "error"]], true), $.methodSignature("addrFunc", [], [({ kind: $.TypeKind.Function, params: ["syscall.Sockaddr"], results: ["net.Addr"] } as $.FunctionTypeInfo)], true), $.methodSignature("closeRead", [], ["error"], true), $.methodSignature("closeWrite", [], ["error"], true), $.methodSignature("init", [], ["error"], true), $.methodSignature("name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("setAddr", [["laddr", "net.Addr"], ["raddr", "net.Addr"]], [], true), $.methodSignature("shutdown", [["how", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("assignFakeAddr", [["addr", "net.sockaddr"]], ["error"]), $.methodSignature("dup", [], [["f", /* @__PURE__ */ $.pointerType("os.File")], ["err", "error"]]), $.methodSignature("readFrom", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["sa", "syscall.Sockaddr"], ["err", "error"]]), $.methodSignature("readFromInet4", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("readFromInet6", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("readMsg", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["flags", /* @__PURE__ */ $.basicType("int")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["retflags", /* @__PURE__ */ $.basicType("int")], ["sa", "syscall.Sockaddr"], ["err", "error"]]), $.methodSignature("readMsgInet4", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["flags", /* @__PURE__ */ $.basicType("int")], ["sa", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["retflags", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("readMsgInet6", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["flags", /* @__PURE__ */ $.basicType("int")], ["sa", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["retflags", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("setLinger", [["sec", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("setReadBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("setWriteBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("writeMsg", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", "syscall.Sockaddr"]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("writeMsgInet4", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa4", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("writeMsgInet6", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa6", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("writeTo", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", "syscall.Sockaddr"]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("writeToInet4", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("writeToInet6", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])],
		netFD,
		() => [/* @__PURE__ */ $.structField("pfd", "poll.FD", [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("family", /* @__PURE__ */ $.basicType("int"), [1], 64, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("sotype", /* @__PURE__ */ $.basicType("int"), [2], 72, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("isConnected", /* @__PURE__ */ $.basicType("bool"), [3], 80, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("net", /* @__PURE__ */ $.basicType("string"), [4], 88, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("laddr", "net.Addr", [5], 104, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("raddr", "net.Addr", [6], 120, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("fakeNetFD", /* @__PURE__ */ $.pointerType("net.fakeNetFD"), [7], 136, false, { pkgPath: "net", anonymous: true })]
	)
}

export class unknownAddr {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): unknownAddr {
		return new unknownAddr(this, true)
	}

	public __goscriptAssign(source: unknownAddr): void {
	}

	public Network(): string {
		return "unknown"
	}

	public String(): string {
		return "unknown"
	}

	static __typeInfo = $.registerStructType(
		"net.unknownAddr",
		() => new unknownAddr(),
		() => [$.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		unknownAddr,
		() => []
	)
}

export const readSyscallName: string = "fd_read"

export const writeSyscallName: string = "fd_write"

export function newFD(net: string, sysfd: number): netFD | $.VarRef<netFD> | null {
	return newPollFD(net, new poll.FD({Sysfd: sysfd, IsStream: true, ZeroReadIsEOF: true}, true))
}

export function newPollFD(net: string, pfd: poll.FD): netFD | $.VarRef<netFD> | null {
	let laddr: __goscript_net.Addr | null = null! as __goscript_net.Addr | null
	let raddr: __goscript_net.Addr | null = null! as __goscript_net.Addr | null
	// WASI preview 1 does not have functions like getsockname/getpeername,
	// so we cannot get access to the underlying IP address used by connections.
	//
	// However, listeners created by FileListener are of type *TCPListener,
	// which can be asserted by a Go program. The (*TCPListener).Addr method
	// documents that the returned value will be of type *TCPAddr, we satisfy
	// the documented behavior by creating addresses of the expected type here.
	switch (net) {
		case "tcp":
		{
			laddr = $.interfaceValue<__goscript_net.Addr | null>(new __goscript_tcpsock.TCPAddr(), "*net.TCPAddr", /* @__PURE__ */ $.pointerType("net.TCPAddr"))
			raddr = $.interfaceValue<__goscript_net.Addr | null>(new __goscript_tcpsock.TCPAddr(), "*net.TCPAddr", /* @__PURE__ */ $.pointerType("net.TCPAddr"))
			break
		}
		case "udp":
		{
			laddr = $.interfaceValue<__goscript_net.Addr | null>(new __goscript_udpsock.UDPAddr(), "*net.UDPAddr", /* @__PURE__ */ $.pointerType("net.UDPAddr"))
			raddr = $.interfaceValue<__goscript_net.Addr | null>(new __goscript_udpsock.UDPAddr(), "*net.UDPAddr", /* @__PURE__ */ $.pointerType("net.UDPAddr"))
			break
		}
		default:
		{
			laddr = $.interfaceValue<__goscript_net.Addr | null>(new unknownAddr(undefined, true), "net.unknownAddr", "net.unknownAddr")
			raddr = $.interfaceValue<__goscript_net.Addr | null>(new unknownAddr(undefined, true), "net.unknownAddr", "net.unknownAddr")
			break
		}
	}
	return new netFD({pfd: pfd, net: net, laddr: laddr, raddr: raddr})
}
