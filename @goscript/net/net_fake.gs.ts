// Generated file based on net_fake.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import { createConnection, type Socket } from "node:net"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as os from "@goscript/os/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as time from "@goscript/time/index.js"

import * as poll from "@goscript/internal/poll/index.js"

import type * as fs from "@goscript/io/fs/index.js"

import type * as netip from "@goscript/net/netip/index.js"

import * as __goscript_fd_fake from "./fd_fake.gs.ts"

import * as __goscript_fd_js from "./fd_js.gs.ts"

import * as __goscript_ip from "./ip.gs.ts"

import * as __goscript_net from "./net.gs.ts"

import * as __goscript_sockaddr_posix from "./sockaddr_posix.gs.ts"

import * as __goscript_tcpsock from "./tcpsock.gs.ts"

import * as __goscript_tcpsock_posix from "./tcpsock_posix.gs.ts"

import * as __goscript_udpsock from "./udpsock.gs.ts"

import * as __goscript_udpsock_posix from "./udpsock_posix.gs.ts"

import * as __goscript_unixsock from "./unixsock.gs.ts"

import * as __goscript_unixsock_posix from "./unixsock_posix.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/os/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/syscall/index.js"
import "@goscript/time/index.js"
import "@goscript/internal/poll/index.js"
import "./fd_fake.gs.ts"
import "./fd_js.gs.ts"
import "./ip.gs.ts"
import "./net.gs.ts"
import "./sockaddr_posix.gs.ts"
import "./tcpsock.gs.ts"
import "./tcpsock_posix.gs.ts"
import "./udpsock.gs.ts"
import "./udpsock_posix.gs.ts"
import "./unixsock.gs.ts"
import "./unixsock_posix.gs.ts"

type nativeSocketState = {
	socket: Socket
	chunks: Uint8Array[]
	chunkOffset: number
	ended: boolean
	error: globalThis.Error | null
	readWaiters: Array<() => void>
}

const nativeSockets = new WeakMap<fakeNetFD, nativeSocketState>()

function wakeNativeReaders(state: nativeSocketState): void {
	const waiters = state.readWaiters.splice(0)
	for (const wake of waiters) {
		wake()
	}
}

function nativeSocketError(err: unknown): $.GoError {
	return errors.New(err instanceof globalThis.Error ? err.message : globalThis.String(err))
}

async function connectNativeSocket(ffd: fakeNetFD, address: string): globalThis.Promise<$.GoError> {
	const bracketed = /^\[([^\]]+)\]:(\d+)$/.exec(address)
	const plain = /^(.+):(\d+)$/.exec(address)
	const match = bracketed ?? plain
	if (match == null) {
		return errors.New(`invalid TCP address ${address}`)
	}

	const socket = createConnection({host: match[1], port: globalThis.Number(match[2])})
	const state: nativeSocketState = {
		socket,
		chunks: [],
		chunkOffset: 0,
		ended: false,
		error: null,
		readWaiters: [],
	}
	nativeSockets.set(ffd, state)

	socket.on("data", (chunk: Uint8Array) => {
		state.chunks.push(Uint8Array.from(chunk))
		wakeNativeReaders(state)
	})
	socket.on("end", () => {
		state.ended = true
		wakeNativeReaders(state)
	})
	socket.on("close", () => {
		state.ended = true
		wakeNativeReaders(state)
	})
	socket.on("error", (err: globalThis.Error) => {
		state.error = err
		wakeNativeReaders(state)
	})

	try {
		await new globalThis.Promise<void>((resolve, reject) => {
			socket.once("connect", resolve)
			socket.once("error", reject)
		})
		return null
	} catch (err) {
		nativeSockets.delete(ffd)
		socket.destroy()
		return nativeSocketError(err)
	}
}

async function readNativeSocket(state: nativeSocketState, p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
	if ($.sliceLen(p) == 0) {
		return [0, null]
	}
	if (state.chunks.length > 0) {
		const chunk = state.chunks[0]
		const remaining = chunk.subarray(state.chunkOffset)
		const n = $.copy(p, remaining)
		state.chunkOffset += n
		if (state.chunkOffset == chunk.length) {
			state.chunks.shift()
			state.chunkOffset = 0
		}
		return [n, null]
	}
	if (state.error != null) {
		return [0, nativeSocketError(state.error)]
	}
	if (state.ended) {
		return [0, io.EOF]
	}

	await new globalThis.Promise<void>((resolve) => state.readWaiters.push(resolve))
	return readNativeSocket(state, p)
}

async function writeNativeSocket(state: nativeSocketState, p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
	const bytes = Uint8Array.from($.asArray(p))
	try {
		await new globalThis.Promise<void>((resolve, reject) => {
			state.socket.write(bytes, (err?: globalThis.Error | null) => {
				if (err != null) {
					reject(err)
				} else {
					resolve()
				}
			})
		})
		return [bytes.length, null]
	} catch (err) {
		return [0, nativeSocketError(err)]
	}
}

export class fakeSockAddr {
	public get family(): number {
		return this._fields.family
	}

	public set family(value: number) {
		this._fields.family = value
	}

	public get address(): string {
		return this._fields.address
	}

	public set address(value: string) {
		this._fields.address = value
	}

	public _fields: {
		family: number
		address: string
	}

	constructor(init?: Partial<{family?: number, address?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			family: init?.family ?? (0 as number),
			address: init?.address ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fakeSockAddr {
		return new fakeSockAddr(this, true)
	}

	public __goscriptAssign(source: fakeSockAddr): void {
		const target = this._fields
		const values = source._fields
		target.family = values.family
		target.address = values.address
	}

	static __typeInfo = $.registerStructType(
		"net.fakeSockAddr",
		() => new fakeSockAddr(),
		() => [],
		fakeSockAddr,
		() => [/* @__PURE__ */ $.structField("family", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("address", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "net" })]
	)
}

export class fakeNetFD {
	public get fd(): __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null {
		return this._fields.fd
	}

	public set fd(value: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null) {
		this._fields.fd = value
	}

	public get assignedPort(): number {
		return this._fields.assignedPort
	}

	public set assignedPort(value: number) {
		this._fields.assignedPort = value
	}

	public get queue(): packetQueue | $.VarRef<packetQueue> | null {
		return this._fields.queue
	}

	public set queue(value: packetQueue | $.VarRef<packetQueue> | null) {
		this._fields.queue = value
	}

	public get peer(): __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null {
		return this._fields.peer
	}

	public set peer(value: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null) {
		this._fields.peer = value
	}

	public get readDeadline(): atomic.Pointer<deadlineTimer> {
		return this._fields.readDeadline
	}

	public set readDeadline(value: atomic.Pointer<deadlineTimer>) {
		this._fields.readDeadline = value
	}

	public get writeDeadline(): atomic.Pointer<deadlineTimer> {
		return this._fields.writeDeadline
	}

	public set writeDeadline(value: atomic.Pointer<deadlineTimer>) {
		this._fields.writeDeadline = value
	}

	public get fakeAddr(): fakeSockAddr {
		return this._fields.fakeAddr
	}

	public set fakeAddr(value: fakeSockAddr) {
		this._fields.fakeAddr = value
	}

	// The incoming channels hold incoming connections that have not yet been accepted.
	// All of these channels are 1-buffered.
	public get incoming(): $.Channel<$.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>> | null {
		return this._fields.incoming
	}

	public set incoming(value: $.Channel<$.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>> | null) {
		this._fields.incoming = value
	}

	public get incomingFull(): $.Channel<$.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>> | null {
		return this._fields.incomingFull
	}

	public set incomingFull(value: $.Channel<$.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>> | null) {
		this._fields.incomingFull = value
	}

	public get incomingEmpty(): $.Channel<boolean> | null {
		return this._fields.incomingEmpty
	}

	public set incomingEmpty(value: $.Channel<boolean> | null) {
		this._fields.incomingEmpty = value
	}

	public _fields: {
		fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null
		assignedPort: number
		queue: packetQueue | $.VarRef<packetQueue> | null
		peer: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null
		readDeadline: atomic.Pointer<deadlineTimer>
		writeDeadline: atomic.Pointer<deadlineTimer>
		fakeAddr: fakeSockAddr
		incoming: $.Channel<$.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>> | null
		incomingFull: $.Channel<$.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>> | null
		incomingEmpty: $.Channel<boolean> | null
	}

	constructor(init?: Partial<{fd?: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null, assignedPort?: number, queue?: packetQueue | $.VarRef<packetQueue> | null, peer?: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null, readDeadline?: atomic.Pointer<deadlineTimer>, writeDeadline?: atomic.Pointer<deadlineTimer>, fakeAddr?: fakeSockAddr, incoming?: $.Channel<$.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>> | null, incomingFull?: $.Channel<$.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>> | null, incomingEmpty?: $.Channel<boolean> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			fd: init?.fd ?? (null! as __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null),
			assignedPort: init?.assignedPort ?? (0 as number),
			queue: init?.queue ?? (null! as packetQueue | $.VarRef<packetQueue> | null),
			peer: init?.peer ?? (null! as __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null),
			readDeadline: init?.readDeadline ? $.markAsStructValue($.cloneStructValue(init.readDeadline)) : $.markAsStructValue(new atomic.Pointer<deadlineTimer>()),
			writeDeadline: init?.writeDeadline ? $.markAsStructValue($.cloneStructValue(init.writeDeadline)) : $.markAsStructValue(new atomic.Pointer<deadlineTimer>()),
			fakeAddr: init?.fakeAddr ? init.fakeAddr.clone() : new fakeSockAddr(undefined, true),
			incoming: init?.incoming ?? (null! as $.Channel<$.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>> | null),
			incomingFull: init?.incomingFull ?? (null! as $.Channel<$.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>> | null),
			incomingEmpty: init?.incomingEmpty ?? (null! as $.Channel<boolean> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fakeNetFD {
		return new fakeNetFD(this, true)
	}

	public __goscriptAssign(source: fakeNetFD): void {
		const target = this._fields
		const values = source._fields
		target.fd = values.fd
		target.assignedPort = values.assignedPort
		target.queue = values.queue
		target.peer = values.peer
		$.assignStruct(target.readDeadline, values.readDeadline)
		$.assignStruct(target.writeDeadline, values.writeDeadline)
		$.assignStruct(target.fakeAddr, values.fakeAddr)
		target.incoming = values.incoming
		target.incomingFull = values.incomingFull
		target.incomingEmpty = values.incomingEmpty
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		let err: $.GoError = null! as $.GoError
		const ffd$: fakeNetFD = ffd == null ? $.pointerTarget<fakeNetFD>(ffd) : (ffd as any).__isVarRef === true ? (ffd as any).value : (ffd as any).__goValue === undefined ? (ffd as any) : $.pointerTarget<fakeNetFD>(ffd)
		const nativeState = nativeSockets.get(ffd$)
		if (nativeState != null) {
			nativeSockets.delete(ffd$)
			nativeState.ended = true
			nativeState.socket.destroy()
			wakeNativeReaders(nativeState)
			return null
		}
		if (!$.structEqual((ffd$ as fakeNetFD).fakeAddr, (new fakeSockAddr(undefined, true)))) {
			await sockets.value.CompareAndDelete($.interfaceValue(((ffd$ as fakeNetFD).fakeAddr).clone(), "net.fakeSockAddr", "net.fakeSockAddr"), $.interfaceValue((ffd$ as fakeNetFD).fd, "*net.netFD", /* @__PURE__ */ $.pointerType("net.netFD")))
		}

		if ((ffd$ as fakeNetFD).queue != null) {
			{
				let closeErr = await packetQueue.prototype.closeRead.call((ffd$ as fakeNetFD).queue)
				if (err == null) {
					err = closeErr
				}
			}
		}
		if ((ffd$ as fakeNetFD).peer != null) {
			{
				let closeErr = await packetQueue.prototype.closeWrite.call($.pointerValue<fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).peer).fakeNetFD).queue)
				if (err == null) {
					err = closeErr
				}
			}
		}
		await deadlineTimer.prototype.Reset.call((ffd$ as fakeNetFD).readDeadline.Load(), $.markAsStructValue($.cloneStructValue(__goscript_net.noDeadline)))
		await deadlineTimer.prototype.Reset.call((ffd$ as fakeNetFD).writeDeadline.Load(), $.markAsStructValue($.cloneStructValue(__goscript_net.noDeadline)))

		if ((ffd$ as fakeNetFD).incoming != null) {
			let incoming: $.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null> = null! as $.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>
			let ok: boolean = false
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, $.GoError>([
				{
					id: 0,
					isSend: false,
					channel: (ffd$ as fakeNetFD).incomingEmpty,
					onSelected: async (__goscriptSelect0Result) => {
						ok = __goscriptSelect0Result.ok
					}
				},
				{
					id: 1,
					isSend: false,
					channel: (ffd$ as fakeNetFD).incoming,
					onSelected: async (__goscriptSelect0Result) => {
						incoming = __goscriptSelect0Result.value
						ok = __goscriptSelect0Result.ok
					}
				},
				{
					id: 2,
					isSend: false,
					channel: (ffd$ as fakeNetFD).incomingFull,
					onSelected: async (__goscriptSelect0Result) => {
						incoming = __goscriptSelect0Result.value
						ok = __goscriptSelect0Result.ok
					}
				}
			], false)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}
			if (ok) {
				// Sends on ffd.incoming require a receive first.
				// Since we successfully received, no other goroutine may
				// send on it at this point, and we may safely close it.
				void (ffd$ as fakeNetFD).incoming!.close()

				for (let __goscriptRangeTarget0 = incoming, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
					let c = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null)
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_fd_fake.netFD).Close() : __goscript_fd_fake.netFD.prototype.Close.call(c))
				}
			}
		}

		if ((ffd$ as fakeNetFD).assignedPort != 0) {
			await fakePorts.value.CompareAndDelete($.basicInterfaceValue((ffd$ as fakeNetFD).assignedPort, "int"), $.interfaceValue((ffd$ as fakeNetFD).fd, "*net.netFD", /* @__PURE__ */ $.pointerType("net.netFD")))
		}

		return err
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const ffd$: fakeNetFD = ffd == null ? $.pointerTarget<fakeNetFD>(ffd) : (ffd as any).__isVarRef === true ? (ffd as any).value : (ffd as any).__goValue === undefined ? (ffd as any) : $.pointerTarget<fakeNetFD>(ffd)
		const nativeState = nativeSockets.get(ffd$)
		if (nativeState != null) {
			return readNativeSocket(nativeState, p)
		}
		let __goscriptTuple3: any = await packetQueue.prototype.recvfrom.call((ffd$ as fakeNetFD).queue, (ffd$ as fakeNetFD).readDeadline.Load(), p, false, (null as ((_p0: __goscript_sockaddr_posix.sockaddr | null) => $.GoError | globalThis.Promise<$.GoError>) | null))
		n = __goscriptTuple3[0]
		err = __goscriptTuple3[2]
		return [n, err]
	}

	public async SetDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		let err1 = await (ffd !== null && (ffd as any).__isVarRef !== true && (ffd as any).__goValue === undefined ? ((ffd as any) as fakeNetFD).SetReadDeadline(t) : fakeNetFD.prototype.SetReadDeadline.call(ffd, t))
		let err2 = await (ffd !== null && (ffd as any).__isVarRef !== true && (ffd as any).__goValue === undefined ? ((ffd as any) as fakeNetFD).SetWriteDeadline(t) : fakeNetFD.prototype.SetWriteDeadline.call(ffd, t))
		if (err1 != null) {
			return err1
		}
		return err2
	}

	public async SetReadDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		const ffd$: fakeNetFD = ffd == null ? $.pointerTarget<fakeNetFD>(ffd) : (ffd as any).__isVarRef === true ? (ffd as any).value : (ffd as any).__goValue === undefined ? (ffd as any) : $.pointerTarget<fakeNetFD>(ffd)
		let dt: deadlineTimer | $.VarRef<deadlineTimer> | null = ((ffd$ as fakeNetFD).readDeadline.Load() as deadlineTimer | $.VarRef<deadlineTimer> | null)
		if (!await (dt !== null && (dt as any).__isVarRef !== true && (dt as any).__goValue === undefined ? ((dt as any) as deadlineTimer).Reset($.markAsStructValue($.cloneStructValue(t))) : deadlineTimer.prototype.Reset.call(dt, $.markAsStructValue($.cloneStructValue(t))))) {
			void (ffd$ as fakeNetFD).readDeadline.Store(await newDeadlineTimer($.markAsStructValue($.cloneStructValue(t))))
		}
		return null
	}

	public async SetWriteDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		const ffd$: fakeNetFD = ffd == null ? $.pointerTarget<fakeNetFD>(ffd) : (ffd as any).__isVarRef === true ? (ffd as any).value : (ffd as any).__goValue === undefined ? (ffd as any) : $.pointerTarget<fakeNetFD>(ffd)
		let dt: deadlineTimer | $.VarRef<deadlineTimer> | null = ((ffd$ as fakeNetFD).writeDeadline.Load() as deadlineTimer | $.VarRef<deadlineTimer> | null)
		if (!await (dt !== null && (dt as any).__isVarRef !== true && (dt as any).__goValue === undefined ? ((dt as any) as deadlineTimer).Reset($.markAsStructValue($.cloneStructValue(t))) : deadlineTimer.prototype.Reset.call(dt, $.markAsStructValue($.cloneStructValue(t))))) {
			void (ffd$ as fakeNetFD).writeDeadline.Store(await newDeadlineTimer($.markAsStructValue($.cloneStructValue(t))))
		}
		return null
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		let nn: number = 0
		let err: $.GoError = null! as $.GoError
		const ffd$: fakeNetFD = ffd == null ? $.pointerTarget<fakeNetFD>(ffd) : (ffd as any).__isVarRef === true ? (ffd as any).value : (ffd as any).__goValue === undefined ? (ffd as any) : $.pointerTarget<fakeNetFD>(ffd)
		const nativeState = nativeSockets.get(ffd$)
		if (nativeState != null) {
			return writeNativeSocket(nativeState, p)
		}
		let peer: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = (ffd$ as fakeNetFD).peer
		if (peer == null) {
			if ($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).raddr == null) {
				return [0, os.NewSyscallError("write", $.namedValueInterfaceValue<$.GoError>(syscall.ENOTCONN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
			}
			let [peeri, ] = await sockets.value.Load($.interfaceValue(await fakeAddr($.mustTypeAssert<__goscript_sockaddr_posix.sockaddr | null>($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).raddr, "net.sockaddr")), "net.fakeSockAddr", "net.fakeSockAddr"))
			if (peeri == null) {
				return [0, os.NewSyscallError("write", $.namedValueInterfaceValue<$.GoError>(syscall.ECONNRESET, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
			}
			peer = ((peeri as any)?.__goType === "*net.netFD" && (peeri as any).__goValue === undefined && (peeri as any).__isTypedNil !== true ? ((peeri as any) as __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null) : $.mustTypeAssert<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>(peeri, /* @__PURE__ */ $.pointerType("net.netFD")))
			if ($.pointerValue<fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>(peer).fakeNetFD).queue == null) {
				return [0, os.NewSyscallError("write", $.namedValueInterfaceValue<$.GoError>(syscall.ECONNRESET, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
			}
		}

		if ($.pointerValue<__goscript_fd_fake.netFD>(peer).fakeNetFD == null) {
			return [0, os.NewSyscallError("write", $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
		}
		return packetQueue.prototype.write.call($.pointerValue<fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>(peer).fakeNetFD).queue, (ffd$ as fakeNetFD).writeDeadline.Load(), p, $.mustTypeAssert<__goscript_sockaddr_posix.sockaddr | null>($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).laddr, "net.sockaddr"))
	}

	public async accept(laddr: __goscript_net.Addr | null): globalThis.Promise<[__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null, $.GoError]> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		const ffd$: fakeNetFD = ffd == null ? $.pointerTarget<fakeNetFD>(ffd) : (ffd as any).__isVarRef === true ? (ffd as any).value : (ffd as any).__goValue === undefined ? (ffd as any) : $.pointerTarget<fakeNetFD>(ffd)
		if ((ffd$ as fakeNetFD).incoming == null) {
			return [null, os.NewSyscallError("accept", $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
		}

		let incoming: $.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null> = null! as $.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>
		let ok: boolean = false
		let expired: $.Channel<{}> | null = $.pointerValue<deadlineTimer>((ffd$ as fakeNetFD).readDeadline.Load()).expired
		const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, [__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null, $.GoError]>([
			{
				id: 0,
				isSend: false,
				channel: expired,
				onSelected: async (__goscriptSelect1Result) => {
					return [null, os.ErrDeadlineExceeded]
				}
			},
			{
				id: 1,
				isSend: false,
				channel: (ffd$ as fakeNetFD).incoming,
				onSelected: async (__goscriptSelect1Result) => {
					incoming = __goscriptSelect1Result.value
					ok = __goscriptSelect1Result.ok
					if (!ok) {
						return [null, __goscript_net.ErrClosed]
					}
					const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, [__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null, $.GoError]>([
						{
							id: 0,
							isSend: false,
							channel: expired,
							onSelected: async (__goscriptSelect2Result) => {
								await $.chanSend((ffd$ as fakeNetFD).incoming, incoming)
								return [null, os.ErrDeadlineExceeded]
							}
						},
						{
							id: -1,
							isSend: false,
							channel: null,
						}
					], true)
					if (__goscriptSelect2HasReturn) {
						return __goscriptSelect2Value
					}
				}
			},
			{
				id: 2,
				isSend: false,
				channel: (ffd$ as fakeNetFD).incomingFull,
				onSelected: async (__goscriptSelect1Result) => {
					incoming = __goscriptSelect1Result.value
					ok = __goscriptSelect1Result.ok
					const [__goscriptSelect3HasReturn, __goscriptSelect3Value] = await $.selectStatement<any, [__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null, $.GoError]>([
						{
							id: 0,
							isSend: false,
							channel: expired,
							onSelected: async (__goscriptSelect3Result) => {
								await $.chanSend((ffd$ as fakeNetFD).incomingFull, incoming)
								return [null, os.ErrDeadlineExceeded]
							}
						},
						{
							id: -1,
							isSend: false,
							channel: null,
						}
					], true)
					if (__goscriptSelect3HasReturn) {
						return __goscriptSelect3Value
					}
				}
			}
		], false)
		if (__goscriptSelect1HasReturn) {
			return __goscriptSelect1Value
		}

		let peer: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = $.arrayIndex(incoming!, 0)
		incoming = $.goSlice(incoming, 1, undefined)
		if ($.sliceLen(incoming) == 0) {
			await $.chanSend((ffd$ as fakeNetFD).incomingEmpty, true)
		} else {
			await $.chanSend((ffd$ as fakeNetFD).incoming, incoming)
		}
		return [peer, null]
	}

	public async assignFakeAddr(addr: __goscript_sockaddr_posix.sockaddr | null): globalThis.Promise<$.GoError> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		const ffd$: fakeNetFD = ffd == null ? $.pointerTarget<fakeNetFD>(ffd) : (ffd as any).__isVarRef === true ? (ffd as any).value : (ffd as any).__goValue === undefined ? (ffd as any) : $.pointerTarget<fakeNetFD>(ffd)
		let validate: ((sa: __goscript_sockaddr_posix.sockaddr | null) => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (sa: __goscript_sockaddr_posix.sockaddr | null): globalThis.Promise<$.GoError> => {
			{
				let err = await validateResolvedAddr($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).net, $.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).family, sa)
				if (err != null) {
					return err
				}
			}
			$.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).laddr = (sa as __goscript_net.Addr | null)
			return null
		}, ({ kind: $.TypeKind.Function, params: ["net.sockaddr"], results: ["error"] } as $.FunctionTypeInfo))

		let assignIP: ((addr: __goscript_sockaddr_posix.sockaddr | null) => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (addr: __goscript_sockaddr_posix.sockaddr | null): globalThis.Promise<$.GoError> => {
			let ip: __goscript_ip.IP = null! as __goscript_ip.IP
			let port: number = 0
			let zone: string = ""
			{
				const __goscriptTypeSwitchValue = addr
				switch (true) {
					case $.typeAssert<__goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).ok:
						{
							let addr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null = $.typeAssert<__goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).value
							if (addr != null) {
								ip = ($.pointerValue<__goscript_tcpsock.TCPAddr>(addr).IP as __goscript_ip.IP)
								port = $.pointerValue<__goscript_tcpsock.TCPAddr>(addr).Port
								zone = $.pointerValue<__goscript_tcpsock.TCPAddr>(addr).Zone
							}
						}
						break
					case $.typeAssert<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).ok:
						{
							let addr: __goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null = $.typeAssert<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).value
							if (addr != null) {
								ip = ($.pointerValue<__goscript_udpsock.UDPAddr>(addr).IP as __goscript_ip.IP)
								port = $.pointerValue<__goscript_udpsock.UDPAddr>(addr).Port
								zone = $.pointerValue<__goscript_udpsock.UDPAddr>(addr).Zone
							}
						}
						break
					default:
						{
							let addr: any = __goscriptTypeSwitchValue
							return validate!(addr)
						}
						break
				}
			}

			if (ip == null) {
				ip = (__goscript_ip.IPv4(127, 0, 0, 1) as __goscript_ip.IP)
			}
			switch ($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).family) {
				case syscall.AF_INET:
				{
					{
						let ip4: __goscript_ip.IP = (__goscript_ip.IP_To4(ip) as __goscript_ip.IP)
						if (ip4 != null) {
							ip = (ip4 as __goscript_ip.IP)
						}
					}
					break
				}
				case syscall.AF_INET6:
				{
					{
						let ip16: __goscript_ip.IP = (__goscript_ip.IP_To16(ip) as __goscript_ip.IP)
						if (ip16 != null) {
							ip = (ip16 as __goscript_ip.IP)
						}
					}
					break
				}
			}
			if (ip == null) {
				return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
			}

			if (port == 0) {
				let prevPort: number = 0
				let portWrapped = false
				let nextPort: (() => [number, boolean] | globalThis.Promise<[number, boolean]>) | null = $.functionValue((): [number, boolean] => {
					while (true) {
						let __goscriptShadow6 = nextPortCounter.value.Add(1)
						if ((__goscriptShadow6 <= 0) || (__goscriptShadow6 >= 65536)) {
							// nextPortCounter ran off the end of the port space.
							// Bump it back into range.
							while (true) {
								if (nextPortCounter.value.CompareAndSwap(__goscriptShadow6, 0)) {
									break
								}
								{
									__goscriptShadow6 = nextPortCounter.value.Load()
									if ((__goscriptShadow6 >= 0) && (__goscriptShadow6 < 65536)) {
										break
									}
								}
							}
							if (portWrapped) {
								// This is the second wraparound, so we've scanned the whole port space
								// at least once already and it's time to give up.
								return [0, false]
							}
							portWrapped = true
							prevPort = 0
							continue
						}

						if (__goscriptShadow6 <= prevPort) {
							// nextPortCounter has wrapped around since the last time we read it.
							if (portWrapped) {
								// This is the second wraparound, so we've scanned the whole port space
								// at least once already and it's time to give up.
								return [0, false]
							} else {
								portWrapped = true
							}
						}

						prevPort = __goscriptShadow6
						return [$.int(__goscriptShadow6), true]
					}
				}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))

				while (true) {
					let ok: boolean = false
					let __goscriptTuple4: any = await nextPort!()
					port = __goscriptTuple4[0]
					ok = __goscriptTuple4[1]
					if (!ok) {
						;(ffd$ as fakeNetFD).assignedPort = 0
						return $.namedValueInterfaceValue<$.GoError>(syscall.EADDRINUSE, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
					}

					;(ffd$ as fakeNetFD).assignedPort = $.int(port)
					{
						let [, dup] = await fakePorts.value.LoadOrStore($.basicInterfaceValue((ffd$ as fakeNetFD).assignedPort, "int"), $.interfaceValue((ffd$ as fakeNetFD).fd, "*net.netFD", /* @__PURE__ */ $.pointerType("net.netFD")))
						if (!dup) {
							break
						}
					}
				}
			}

			{
				const __goscriptTypeSwitchValue = addr
				switch (true) {
					case $.typeAssert<__goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).ok:
						{
							return validate!($.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(new __goscript_tcpsock.TCPAddr({IP: (ip as __goscript_ip.IP), Port: port, Zone: zone}), "*net.TCPAddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")))
						}
						break
					case $.typeAssert<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).ok:
						{
							return validate!($.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(new __goscript_udpsock.UDPAddr({IP: (ip as __goscript_ip.IP), Port: port, Zone: zone}), "*net.UDPAddr", /* @__PURE__ */ $.pointerType("net.UDPAddr")))
						}
						break
					default:
						{
							$.panic("unreachable")
						}
						break
				}
			}
		}, ({ kind: $.TypeKind.Function, params: ["net.sockaddr"], results: ["error"] } as $.FunctionTypeInfo))

		switch ($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).net) {
			case "tcp":
			case "tcp4":
			case "tcp6":
			{
				if (addr == null) {
					return assignIP!($.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(new __goscript_tcpsock.TCPAddr(), "*net.TCPAddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")))
				}
				return assignIP!(addr)
				break
			}
			case "udp":
			case "udp4":
			case "udp6":
			{
				if (addr == null) {
					return assignIP!($.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(new __goscript_udpsock.UDPAddr(), "*net.UDPAddr", /* @__PURE__ */ $.pointerType("net.UDPAddr")))
				}
				return assignIP!(addr)
				break
			}
			case "unix":
			case "unixgram":
			case "unixpacket":
			{
				let __goscriptTuple5: any = $.typeAssertTuple<__goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null>(addr, /* @__PURE__ */ $.pointerType("net.UnixAddr"))
				let uaddr: __goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null = __goscriptTuple5[0]
				let ok = __goscriptTuple5[1]
				if (!ok && (addr != null)) {
					return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField12 = (__goscriptAwait = (addr !== null && (addr as any).__isVarRef !== true && (addr as any).__goValue === undefined ? (addr as Exclude<__goscript_sockaddr_posix.sockaddr, null>) : $.pointerValue<Exclude<__goscript_sockaddr_posix.sockaddr, null>>(addr)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.AddrError({Err: $.concatString(($.concatString("non-Unix address for ", $.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).net)), " network"), Addr: __goscriptLiteralField12}) })()), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))
				}
				if (uaddr == null) {
					return validate!($.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(new __goscript_unixsock.UnixAddr({Net: $.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).net}), "*net.UnixAddr", /* @__PURE__ */ $.pointerType("net.UnixAddr")))
				}
				return validate!($.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(new __goscript_unixsock.UnixAddr({Net: $.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).net, Name: $.pointerValue<__goscript_unixsock.UnixAddr>(uaddr).Name}), "*net.UnixAddr", /* @__PURE__ */ $.pointerType("net.UnixAddr")))
				break
			}
			default:
			{
				return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField13 = syscall.Errno_Error(syscall.EAFNOSUPPORT); const __goscriptLiteralField14 = (__goscriptAwait = (addr !== null && (addr as any).__isVarRef !== true && (addr as any).__goValue === undefined ? (addr as Exclude<__goscript_sockaddr_posix.sockaddr, null>) : $.pointerValue<Exclude<__goscript_sockaddr_posix.sockaddr, null>>(addr)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.AddrError({Err: __goscriptLiteralField13, Addr: __goscriptLiteralField14}) })()), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async closeRead(): globalThis.Promise<$.GoError> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		const ffd$: fakeNetFD = ffd == null ? $.pointerTarget<fakeNetFD>(ffd) : (ffd as any).__isVarRef === true ? (ffd as any).value : (ffd as any).__goValue === undefined ? (ffd as any) : $.pointerTarget<fakeNetFD>(ffd)
		const nativeState = nativeSockets.get(ffd$)
		if (nativeState != null) {
			nativeState.socket.pause()
			return null
		}
		return packetQueue.prototype.closeRead.call($.pointerValue<fakeNetFD>(ffd).queue)
	}

	public async closeWrite(): globalThis.Promise<$.GoError> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		const ffd$: fakeNetFD = ffd == null ? $.pointerTarget<fakeNetFD>(ffd) : (ffd as any).__isVarRef === true ? (ffd as any).value : (ffd as any).__goValue === undefined ? (ffd as any) : $.pointerTarget<fakeNetFD>(ffd)
		const nativeState = nativeSockets.get(ffd$)
		if (nativeState != null) {
			nativeState.socket.end()
			return null
		}
		if ((ffd$ as fakeNetFD).peer == null) {
			return os.NewSyscallError("closeWrite", $.namedValueInterfaceValue<$.GoError>(syscall.ENOTCONN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)
		}
		return packetQueue.prototype.closeWrite.call($.pointerValue<fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).peer).fakeNetFD).queue)
	}

	public dup(): [os.File | $.VarRef<os.File> | null, $.GoError] {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		let f: os.File | $.VarRef<os.File> | null = null! as os.File | $.VarRef<os.File> | null
		let err: $.GoError = null! as $.GoError
		return [null, os.NewSyscallError("dup", $.namedValueInterfaceValue<$.GoError>(syscall.ENOSYS, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
	}

	public async readFrom(p: $.Slice<number>): globalThis.Promise<[number, syscall.Sockaddr | null, $.GoError]> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		let n: number = 0
		let sa: syscall.Sockaddr | null = null! as syscall.Sockaddr | null
		let err: $.GoError = null! as $.GoError
		const ffd$: fakeNetFD = ffd == null ? $.pointerTarget<fakeNetFD>(ffd) : (ffd as any).__isVarRef === true ? (ffd as any).value : (ffd as any).__goValue === undefined ? (ffd as any) : $.pointerTarget<fakeNetFD>(ffd)
		if ((ffd$ as fakeNetFD).queue == null) {
			return [0, null, os.NewSyscallError("readFrom", $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
		}

		let __goscriptTuple6: any = await packetQueue.prototype.recvfrom.call((ffd$ as fakeNetFD).queue, (ffd$ as fakeNetFD).readDeadline.Load(), p, true, (null as ((_p0: __goscript_sockaddr_posix.sockaddr | null) => $.GoError | globalThis.Promise<$.GoError>) | null))
		n = __goscriptTuple6[0]
		let _from = __goscriptTuple6[1]
		err = __goscriptTuple6[2]

		if (_from != null) {
			// Convert the net.sockaddr to a syscall.Sockaddr type.
			let saErr: $.GoError = null! as $.GoError
			let __goscriptTuple7: any = await (_from !== null && (_from as any).__isVarRef !== true && (_from as any).__goValue === undefined ? (_from as Exclude<__goscript_sockaddr_posix.sockaddr, null>) : $.pointerValue<Exclude<__goscript_sockaddr_posix.sockaddr, null>>(_from)).sockaddr($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).family)
			sa = __goscriptTuple7[0]
			saErr = __goscriptTuple7[1]
			if (err == null) {
				err = saErr
			}
		}

		return [n, sa, err]
	}

	public async readFromInet4(p: $.Slice<number>, sa: syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null): globalThis.Promise<[number, $.GoError]> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const ffd$: fakeNetFD = ffd == null ? $.pointerTarget<fakeNetFD>(ffd) : (ffd as any).__isVarRef === true ? (ffd as any).value : (ffd as any).__goValue === undefined ? (ffd as any) : $.pointerTarget<fakeNetFD>(ffd)
		let __goscriptTuple8: any = await packetQueue.prototype.recvfrom.call((ffd$ as fakeNetFD).queue, (ffd$ as fakeNetFD).readDeadline.Load(), p, true, $.functionValue(async (_from: __goscript_sockaddr_posix.sockaddr | null): globalThis.Promise<$.GoError> => {
			let [fromSA, __goscriptShadow7] = await (_from !== null && (_from as any).__isVarRef !== true && (_from as any).__goValue === undefined ? (_from as Exclude<__goscript_sockaddr_posix.sockaddr, null>) : $.pointerValue<Exclude<__goscript_sockaddr_posix.sockaddr, null>>(_from)).sockaddr(2)
			if (__goscriptShadow7 != null) {
				return __goscriptShadow7
			}
			if (fromSA == null) {
				return os.NewSyscallError("readFromInet4", $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)
			}
			$.assignStruct($.pointerValue<syscall.SockaddrInet4>(sa), $.pointerValue<syscall.SockaddrInet4>((((fromSA as any)?.__goType === "*syscall.SockaddrInet4" && (fromSA as any).__goValue === undefined && (fromSA as any).__isTypedNil !== true ? ((fromSA as any) as syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null) : $.mustTypeAssert<syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null>(fromSA, /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4"))))))
			return null
		}, ({ kind: $.TypeKind.Function, params: ["net.sockaddr"], results: ["error"] } as $.FunctionTypeInfo)))
		n = __goscriptTuple8[0]
		err = __goscriptTuple8[2]
		return [n, err]
	}

	public async readFromInet6(p: $.Slice<number>, sa: syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null): globalThis.Promise<[number, $.GoError]> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const ffd$: fakeNetFD = ffd == null ? $.pointerTarget<fakeNetFD>(ffd) : (ffd as any).__isVarRef === true ? (ffd as any).value : (ffd as any).__goValue === undefined ? (ffd as any) : $.pointerTarget<fakeNetFD>(ffd)
		let __goscriptTuple9: any = await packetQueue.prototype.recvfrom.call((ffd$ as fakeNetFD).queue, (ffd$ as fakeNetFD).readDeadline.Load(), p, true, $.functionValue(async (_from: __goscript_sockaddr_posix.sockaddr | null): globalThis.Promise<$.GoError> => {
			let [fromSA, __goscriptShadow8] = await (_from !== null && (_from as any).__isVarRef !== true && (_from as any).__goValue === undefined ? (_from as Exclude<__goscript_sockaddr_posix.sockaddr, null>) : $.pointerValue<Exclude<__goscript_sockaddr_posix.sockaddr, null>>(_from)).sockaddr(3)
			if (__goscriptShadow8 != null) {
				return __goscriptShadow8
			}
			if (fromSA == null) {
				return os.NewSyscallError("readFromInet6", $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)
			}
			$.assignStruct($.pointerValue<syscall.SockaddrInet6>(sa), $.pointerValue<syscall.SockaddrInet6>((((fromSA as any)?.__goType === "*syscall.SockaddrInet6" && (fromSA as any).__goValue === undefined && (fromSA as any).__isTypedNil !== true ? ((fromSA as any) as syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null) : $.mustTypeAssert<syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null>(fromSA, /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6"))))))
			return null
		}, ({ kind: $.TypeKind.Function, params: ["net.sockaddr"], results: ["error"] } as $.FunctionTypeInfo)))
		n = __goscriptTuple9[0]
		err = __goscriptTuple9[2]
		return [n, err]
	}

	public async readMsg(p: $.Slice<number>, oob: $.Slice<number>, flags: number): globalThis.Promise<[number, number, number, syscall.Sockaddr | null, $.GoError]> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		let n: number = 0
		let oobn: number = 0
		let retflags: number = 0
		let sa: syscall.Sockaddr | null = null! as syscall.Sockaddr | null
		let err: $.GoError = null! as $.GoError
		if (flags != 0) {
			return [0, 0, 0, null, os.NewSyscallError("readMsg", $.namedValueInterfaceValue<$.GoError>(syscall.ENOTSUP, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
		}
		let __goscriptTuple10: any = await (ffd !== null && (ffd as any).__isVarRef !== true && (ffd as any).__goValue === undefined ? ((ffd as any) as fakeNetFD).readFrom(p) : fakeNetFD.prototype.readFrom.call(ffd, p))
		n = __goscriptTuple10[0]
		sa = __goscriptTuple10[1]
		err = __goscriptTuple10[2]
		return [n, 0, 0, sa, err]
	}

	public async readMsgInet4(p: $.Slice<number>, oob: $.Slice<number>, flags: number, sa: syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null): globalThis.Promise<[number, number, number, $.GoError]> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		let n: number = 0
		let oobn: number = 0
		let retflags: number = 0
		let err: $.GoError = null! as $.GoError
		if (flags != 0) {
			return [0, 0, 0, os.NewSyscallError("readMsgInet4", $.namedValueInterfaceValue<$.GoError>(syscall.ENOTSUP, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
		}
		let __goscriptTuple11: any = await (ffd !== null && (ffd as any).__isVarRef !== true && (ffd as any).__goValue === undefined ? ((ffd as any) as fakeNetFD).readFromInet4(p, sa) : fakeNetFD.prototype.readFromInet4.call(ffd, p, sa))
		n = __goscriptTuple11[0]
		err = __goscriptTuple11[1]
		return [n, 0, 0, err]
	}

	public async readMsgInet6(p: $.Slice<number>, oob: $.Slice<number>, flags: number, sa: syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null): globalThis.Promise<[number, number, number, $.GoError]> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		let n: number = 0
		let oobn: number = 0
		let retflags: number = 0
		let err: $.GoError = null! as $.GoError
		if (flags != 0) {
			return [0, 0, 0, os.NewSyscallError("readMsgInet6", $.namedValueInterfaceValue<$.GoError>(syscall.ENOTSUP, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
		}
		let __goscriptTuple12: any = await (ffd !== null && (ffd as any).__isVarRef !== true && (ffd as any).__goValue === undefined ? ((ffd as any) as fakeNetFD).readFromInet6(p, sa) : fakeNetFD.prototype.readFromInet6.call(ffd, p, sa))
		n = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		return [n, 0, 0, err]
	}

	public async setLinger(sec: number): globalThis.Promise<$.GoError> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		const ffd$: fakeNetFD = ffd == null ? $.pointerTarget<fakeNetFD>(ffd) : (ffd as any).__isVarRef === true ? (ffd as any).value : (ffd as any).__goValue === undefined ? (ffd as any) : $.pointerTarget<fakeNetFD>(ffd)
		if ((sec < 0) || ((ffd$ as fakeNetFD).peer == null)) {
			return os.NewSyscallError("setLinger", $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)
		}
		await packetQueue.prototype.setLinger.call($.pointerValue<fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).peer).fakeNetFD).queue, sec > 0)
		return null
	}

	public async setReadBuffer(bytes: number): globalThis.Promise<$.GoError> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		const ffd$: fakeNetFD = ffd == null ? $.pointerTarget<fakeNetFD>(ffd) : (ffd as any).__isVarRef === true ? (ffd as any).value : (ffd as any).__goValue === undefined ? (ffd as any) : $.pointerTarget<fakeNetFD>(ffd)
		if ((ffd$ as fakeNetFD).queue == null) {
			return os.NewSyscallError("setReadBuffer", $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)
		}
		await packetQueue.prototype.setReadBuffer.call((ffd$ as fakeNetFD).queue, bytes)
		return null
	}

	public setWriteBuffer(bytes: number): $.GoError {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		return os.NewSyscallError("setWriteBuffer", $.namedValueInterfaceValue<$.GoError>(syscall.ENOTSUP, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)
	}

	public async writeMsg(p: $.Slice<number>, oob: $.Slice<number>, sa: syscall.Sockaddr | null): globalThis.Promise<[number, number, $.GoError]> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		let n: number = 0
		let oobn: number = 0
		let err: $.GoError = null! as $.GoError
		if ($.sliceLen(oob) > 0) {
			return [0, 0, os.NewSyscallError("writeMsg", $.namedValueInterfaceValue<$.GoError>(syscall.ENOTSUP, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
		}
		let __goscriptTuple13: any = await (ffd !== null && (ffd as any).__isVarRef !== true && (ffd as any).__goValue === undefined ? ((ffd as any) as fakeNetFD).writeTo(p, sa) : fakeNetFD.prototype.writeTo.call(ffd, p, sa))
		n = __goscriptTuple13[0]
		err = __goscriptTuple13[1]
		return [n, 0, err]
	}

	public async writeMsgInet4(p: $.Slice<number>, oob: $.Slice<number>, sa4: syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null): globalThis.Promise<[number, number, $.GoError]> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		let n: number = 0
		let oobn: number = 0
		let err: $.GoError = null! as $.GoError
		let sa: syscall.Sockaddr | null = null! as syscall.Sockaddr | null
		if (sa4 != null) {
			sa = $.interfaceValue<syscall.Sockaddr | null>(sa4, "*syscall.SockaddrInet4", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4"))
		}
		return (ffd !== null && (ffd as any).__isVarRef !== true && (ffd as any).__goValue === undefined ? ((ffd as any) as fakeNetFD).writeMsg(p, oob, sa) : fakeNetFD.prototype.writeMsg.call(ffd, p, oob, sa))
	}

	public async writeMsgInet6(p: $.Slice<number>, oob: $.Slice<number>, sa6: syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null): globalThis.Promise<[number, number, $.GoError]> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		let n: number = 0
		let oobn: number = 0
		let err: $.GoError = null! as $.GoError
		let sa: syscall.Sockaddr | null = null! as syscall.Sockaddr | null
		if (sa6 != null) {
			sa = $.interfaceValue<syscall.Sockaddr | null>(sa6, "*syscall.SockaddrInet6", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6"))
		}
		return (ffd !== null && (ffd as any).__isVarRef !== true && (ffd as any).__goValue === undefined ? ((ffd as any) as fakeNetFD).writeMsg(p, oob, sa) : fakeNetFD.prototype.writeMsg.call(ffd, p, oob, sa))
	}

	public async writeTo(p: $.Slice<number>, sa: syscall.Sockaddr | null): globalThis.Promise<[number, $.GoError]> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const ffd$: fakeNetFD = ffd == null ? $.pointerTarget<fakeNetFD>(ffd) : (ffd as any).__isVarRef === true ? (ffd as any).value : (ffd as any).__goValue === undefined ? (ffd as any) : $.pointerTarget<fakeNetFD>(ffd)
		let raddr = $.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).raddr
		if (sa != null) {
			if ($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).isConnected) {
				return [0, os.NewSyscallError("writeTo", $.namedValueInterfaceValue<$.GoError>(syscall.EISCONN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
			}
			raddr = (__goscriptAwait = __goscript_fd_fake.netFD.prototype.addrFunc.call((ffd$ as fakeNetFD).fd)!(sa), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if (raddr == null) {
			return [0, os.NewSyscallError("writeTo", $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
		}

		let [peeri, ] = await sockets.value.Load($.interfaceValue(await fakeAddr($.mustTypeAssert<__goscript_sockaddr_posix.sockaddr | null>(raddr, "net.sockaddr")), "net.fakeSockAddr", "net.fakeSockAddr"))
		if (peeri == null) {
			if (($.stringLen($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).net) >= 3) && ($.stringEqual($.sliceStringOrBytes($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).net, undefined, 3), "udp"))) {
				return [$.sliceLen(p), null]
			}
			return [0, os.NewSyscallError("writeTo", $.namedValueInterfaceValue<$.GoError>(syscall.ECONNRESET, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
		}
		let peer: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = ((peeri as any)?.__goType === "*net.netFD" && (peeri as any).__goValue === undefined && (peeri as any).__isTypedNil !== true ? ((peeri as any) as __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null) : $.mustTypeAssert<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>(peeri, /* @__PURE__ */ $.pointerType("net.netFD")))
		let peer$: __goscript_fd_fake.netFD = peer == null ? $.pointerTarget<__goscript_fd_fake.netFD>(peer) : (peer as any).__isVarRef === true ? (peer as any).value : (peer as any).__goValue === undefined ? (peer as any) : $.pointerTarget<__goscript_fd_fake.netFD>(peer)
		if ($.pointerValue<fakeNetFD>((peer$ as __goscript_fd_fake.netFD).fakeNetFD).queue == null) {
			if (($.stringLen($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).net) >= 3) && ($.stringEqual($.sliceStringOrBytes($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).net, undefined, 3), "udp"))) {
				return [$.sliceLen(p), null]
			}
			return [0, os.NewSyscallError("writeTo", $.namedValueInterfaceValue<$.GoError>(syscall.ECONNRESET, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
		}

		let block = true
		if (($.stringLen($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).net) >= 3) && ($.stringEqual($.sliceStringOrBytes($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).net, undefined, 3), "udp"))) {
			block = false
		}
		return packetQueue.prototype.send.call($.pointerValue<fakeNetFD>((peer$ as __goscript_fd_fake.netFD).fakeNetFD).queue, (ffd$ as fakeNetFD).writeDeadline.Load(), p, $.mustTypeAssert<__goscript_sockaddr_posix.sockaddr | null>($.pointerValue<__goscript_fd_fake.netFD>((ffd$ as fakeNetFD).fd).laddr, "net.sockaddr"), block)
	}

	public async writeToInet4(p: $.Slice<number>, sa: syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null): globalThis.Promise<[number, $.GoError]> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		return fakeNetFD.prototype.writeTo.call(ffd, p, $.interfaceValue<syscall.Sockaddr | null>(sa, "*syscall.SockaddrInet4", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4")))
	}

	public async writeToInet6(p: $.Slice<number>, sa: syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null): globalThis.Promise<[number, $.GoError]> {
		const ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		return fakeNetFD.prototype.writeTo.call(ffd, p, $.interfaceValue<syscall.Sockaddr | null>(sa, "*syscall.SockaddrInet6", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6")))
	}

	static __typeInfo = $.registerStructType(
		"net.fakeNetFD",
		() => new fakeNetFD(),
		() => [$.methodSignature("Close", [], [["err", "error"]], true), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["nn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("accept", [["laddr", "net.Addr"]], [/* @__PURE__ */ $.pointerType("net.netFD"), "error"], true), $.methodSignature("assignFakeAddr", [["addr", "net.sockaddr"]], ["error"], true), $.methodSignature("closeRead", [], ["error"], true), $.methodSignature("closeWrite", [], ["error"], true), $.methodSignature("dup", [], [["f", /* @__PURE__ */ $.pointerType("os.File")], ["err", "error"]], true), $.methodSignature("readFrom", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["sa", "syscall.Sockaddr"], ["err", "error"]], true), $.methodSignature("readFromInet4", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("readFromInet6", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("readMsg", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["flags", /* @__PURE__ */ $.basicType("int")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["retflags", /* @__PURE__ */ $.basicType("int")], ["sa", "syscall.Sockaddr"], ["err", "error"]], true), $.methodSignature("readMsgInet4", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["flags", /* @__PURE__ */ $.basicType("int")], ["sa", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["retflags", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("readMsgInet6", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["flags", /* @__PURE__ */ $.basicType("int")], ["sa", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["retflags", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("setLinger", [["sec", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("setReadBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("setWriteBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("writeMsg", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", "syscall.Sockaddr"]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("writeMsgInet4", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa4", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("writeMsgInet6", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa6", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("writeTo", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", "syscall.Sockaddr"]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("writeToInet4", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("writeToInet6", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		fakeNetFD,
		() => [/* @__PURE__ */ $.structField("fd", /* @__PURE__ */ $.pointerType("net.netFD"), [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("assignedPort", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("queue", /* @__PURE__ */ $.pointerType("net.packetQueue"), [2], 16, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("peer", /* @__PURE__ */ $.pointerType("net.netFD"), [3], 24, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("readDeadline", "atomic.Pointer", [4], 32, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("writeDeadline", "atomic.Pointer", [5], 40, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("fakeAddr", "net.fakeSockAddr", [6], 48, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("incoming", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.netFD")), "both"), [7], 72, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("incomingFull", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.netFD")), "both"), [8], 80, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("incomingEmpty", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.basicType("bool"), "both"), [9], 88, false, { pkgPath: "net" })]
	)
}

export class packet {
	public get buf(): $.Slice<number> {
		return this._fields.buf
	}

	public set buf(value: $.Slice<number>) {
		this._fields.buf = value
	}

	public get bufOffset(): number {
		return this._fields.bufOffset
	}

	public set bufOffset(value: number) {
		this._fields.bufOffset = value
	}

	public get next(): packet | $.VarRef<packet> | null {
		return this._fields.next
	}

	public set next(value: packet | $.VarRef<packet> | null) {
		this._fields.next = value
	}

	public get _from(): __goscript_sockaddr_posix.sockaddr | null {
		return this._fields._from
	}

	public set _from(value: __goscript_sockaddr_posix.sockaddr | null) {
		this._fields._from = value
	}

	public _fields: {
		buf: $.Slice<number>
		bufOffset: number
		next: packet | $.VarRef<packet> | null
		_from: __goscript_sockaddr_posix.sockaddr | null
	}

	constructor(init?: Partial<{buf?: $.Slice<number>, bufOffset?: number, next?: packet | $.VarRef<packet> | null, _from?: __goscript_sockaddr_posix.sockaddr | null}>, __goscriptValue?: boolean) {
		this._fields = {
			buf: init?.buf ?? (null! as $.Slice<number>),
			bufOffset: init?.bufOffset ?? (0 as number),
			next: init?.next ?? (null! as packet | $.VarRef<packet> | null),
			_from: init?._from ?? (null! as __goscript_sockaddr_posix.sockaddr | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): packet {
		return new packet(this, true)
	}

	public __goscriptAssign(source: packet): void {
		const target = this._fields
		const values = source._fields
		target.buf = values.buf
		target.bufOffset = values.bufOffset
		target.next = values.next
		target._from = $.assignFieldValue(target._from, values._from, "net.sockaddr")
	}

	public clear(): void {
		let p: packet | $.VarRef<packet> | null = this;
		const p$: packet = p == null ? $.pointerTarget<packet>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<packet>(p);
		;(p$ as packet).buf = $.goSlice((p$ as packet).buf, undefined, 0);
		;(p$ as packet).bufOffset = 0;
		;(p$ as packet).next = null;
		;(p$ as packet)._from = null
	}

	static __typeInfo = $.registerStructType(
		"net.packet",
		() => new packet(),
		() => [$.methodSignature("clear", [], [], true)],
		packet,
		() => [/* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("bufOffset", /* @__PURE__ */ $.basicType("int"), [1], 24, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("next", /* @__PURE__ */ $.pointerType("net.packet"), [2], 32, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("from", "net.sockaddr", [3], 40, false, { key: "_from", pkgPath: "net" })]
	)
}

export class packetQueueState {
	public get head(): packet | $.VarRef<packet> | null {
		return this._fields.head
	}

	public set head(value: packet | $.VarRef<packet> | null) {
		this._fields.head = value
	}

	public get tail(): packet | $.VarRef<packet> | null {
		return this._fields.tail
	}

	public set tail(value: packet | $.VarRef<packet> | null) {
		this._fields.tail = value
	}

	public get nBytes(): number {
		return this._fields.nBytes
	}

	public set nBytes(value: number) {
		this._fields.nBytes = value
	}

	public get readBufferBytes(): number {
		return this._fields.readBufferBytes
	}

	public set readBufferBytes(value: number) {
		this._fields.readBufferBytes = value
	}

	public get readClosed(): boolean {
		return this._fields.readClosed
	}

	public set readClosed(value: boolean) {
		this._fields.readClosed = value
	}

	public get writeClosed(): boolean {
		return this._fields.writeClosed
	}

	public set writeClosed(value: boolean) {
		this._fields.writeClosed = value
	}

	public get noLinger(): boolean {
		return this._fields.noLinger
	}

	public set noLinger(value: boolean) {
		this._fields.noLinger = value
	}

	public _fields: {
		head: packet | $.VarRef<packet> | null
		tail: packet | $.VarRef<packet> | null
		nBytes: number
		readBufferBytes: number
		readClosed: boolean
		writeClosed: boolean
		noLinger: boolean
	}

	constructor(init?: Partial<{head?: packet | $.VarRef<packet> | null, tail?: packet | $.VarRef<packet> | null, nBytes?: number, readBufferBytes?: number, readClosed?: boolean, writeClosed?: boolean, noLinger?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			head: init?.head ?? (null! as packet | $.VarRef<packet> | null),
			tail: init?.tail ?? (null! as packet | $.VarRef<packet> | null),
			nBytes: init?.nBytes ?? (0 as number),
			readBufferBytes: init?.readBufferBytes ?? (0 as number),
			readClosed: init?.readClosed ?? (false as boolean),
			writeClosed: init?.writeClosed ?? (false as boolean),
			noLinger: init?.noLinger ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): packetQueueState {
		return new packetQueueState(this, true)
	}

	public __goscriptAssign(source: packetQueueState): void {
		const target = this._fields
		const values = source._fields
		target.head = values.head
		target.tail = values.tail
		target.nBytes = values.nBytes
		target.readBufferBytes = values.readBufferBytes
		target.readClosed = values.readClosed
		target.writeClosed = values.writeClosed
		target.noLinger = values.noLinger
	}

	static __typeInfo = $.registerStructType(
		"net.packetQueueState",
		() => new packetQueueState(),
		() => [],
		packetQueueState,
		() => [/* @__PURE__ */ $.structField("head", /* @__PURE__ */ $.pointerType("net.packet"), [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("tail", /* @__PURE__ */ $.pointerType("net.packet"), [1], 8, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("nBytes", /* @__PURE__ */ $.basicType("int"), [2], 16, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("readBufferBytes", /* @__PURE__ */ $.basicType("int"), [3], 24, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("readClosed", /* @__PURE__ */ $.basicType("bool"), [4], 32, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("writeClosed", /* @__PURE__ */ $.basicType("bool"), [5], 33, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("noLinger", /* @__PURE__ */ $.basicType("bool"), [6], 34, false, { pkgPath: "net" })]
	)
}

export class packetQueue {
	public get empty(): $.Channel<packetQueueState> | null {
		return this._fields.empty
	}

	public set empty(value: $.Channel<packetQueueState> | null) {
		this._fields.empty = value
	}

	public get ready(): $.Channel<packetQueueState> | null {
		return this._fields.ready
	}

	public set ready(value: $.Channel<packetQueueState> | null) {
		this._fields.ready = value
	}

	public get full(): $.Channel<packetQueueState> | null {
		return this._fields.full
	}

	public set full(value: $.Channel<packetQueueState> | null) {
		this._fields.full = value
	}

	public _fields: {
		empty: $.Channel<packetQueueState> | null
		ready: $.Channel<packetQueueState> | null
		full: $.Channel<packetQueueState> | null
	}

	constructor(init?: Partial<{empty?: $.Channel<packetQueueState> | null, ready?: $.Channel<packetQueueState> | null, full?: $.Channel<packetQueueState> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			empty: init?.empty ?? (null! as $.Channel<packetQueueState> | null),
			ready: init?.ready ?? (null! as $.Channel<packetQueueState> | null),
			full: init?.full ?? (null! as $.Channel<packetQueueState> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): packetQueue {
		return new packetQueue(this, true)
	}

	public __goscriptAssign(source: packetQueue): void {
		const target = this._fields
		const values = source._fields
		target.empty = values.empty
		target.ready = values.ready
		target.full = values.full
	}

	public async closeRead(): globalThis.Promise<$.GoError> {
		const pq: packetQueue | $.VarRef<packetQueue> | null = this;
		let q = await (pq !== null && (pq as any).__isVarRef !== true && (pq as any).__goValue === undefined ? ((pq as any) as packetQueue)["get"]() : packetQueue.prototype.get.call(pq))
		q.readClosed = true
		await (pq !== null && (pq as any).__isVarRef !== true && (pq as any).__goValue === undefined ? ((pq as any) as packetQueue).put((q).clone()) : packetQueue.prototype.put.call(pq, (q).clone()))
		return null
	}

	public async closeWrite(): globalThis.Promise<$.GoError> {
		const pq: packetQueue | $.VarRef<packetQueue> | null = this;
		let q = await (pq !== null && (pq as any).__isVarRef !== true && (pq as any).__goValue === undefined ? ((pq as any) as packetQueue)["get"]() : packetQueue.prototype.get.call(pq))
		q.writeClosed = true
		await (pq !== null && (pq as any).__isVarRef !== true && (pq as any).__goValue === undefined ? ((pq as any) as packetQueue).put((q).clone()) : packetQueue.prototype.put.call(pq, (q).clone()))
		return null
	}

	public async ["get"](): globalThis.Promise<packetQueueState> {
		const pq: packetQueue | $.VarRef<packetQueue> | null = this;
		const pq$: packetQueue = pq == null ? $.pointerTarget<packetQueue>(pq) : (pq as any).__isVarRef === true ? (pq as any).value : (pq as any).__goValue === undefined ? (pq as any) : $.pointerTarget<packetQueue>(pq)
		let q: packetQueueState = new packetQueueState(undefined, true)
		const [__goscriptSelect4HasReturn, __goscriptSelect4Value] = await $.selectStatement<any, packetQueueState>([
			{
				id: 0,
				isSend: false,
				channel: (pq$ as packetQueue).empty,
				onSelected: async (__goscriptSelect4Result) => {
					q = __goscriptSelect4Result.value
				}
			},
			{
				id: 1,
				isSend: false,
				channel: (pq$ as packetQueue).ready,
				onSelected: async (__goscriptSelect4Result) => {
					q = __goscriptSelect4Result.value
				}
			},
			{
				id: 2,
				isSend: false,
				channel: (pq$ as packetQueue).full,
				onSelected: async (__goscriptSelect4Result) => {
					q = __goscriptSelect4Result.value
				}
			}
		], false)
		if (__goscriptSelect4HasReturn) {
			return __goscriptSelect4Value
		}
		return (q).clone()
	}

	public async put(q: packetQueueState): globalThis.Promise<void> {
		const pq: packetQueue | $.VarRef<packetQueue> | null = this;
		using __defer = new $.DisposableStack()
		const pq$: packetQueue = pq == null ? $.pointerTarget<packetQueue>(pq) : (pq as any).__isVarRef === true ? (pq as any).value : (pq as any).__goValue === undefined ? (pq as any) : $.pointerTarget<packetQueue>(pq)
		switch ((true as boolean)) {
			case q.readClosed || q.writeClosed:
			{
				await $.chanSend((pq$ as packetQueue).ready, (q).clone())
				break
			}
			case q.nBytes >= q.readBufferBytes:
			{
				await $.chanSend((pq$ as packetQueue).full, (q).clone())
				break
			}
			case q.head == null:
			{
				if (q.nBytes > 0) {
					__defer.defer(() => { $.panic("net: put with nil packet list and nonzero nBytes") })
				}
				await $.chanSend((pq$ as packetQueue).empty, (q).clone())
				break
			}
			default:
			{
				await $.chanSend((pq$ as packetQueue).ready, (q).clone())
				break
			}
		}
	}

	public async recvfrom(dt: deadlineTimer | $.VarRef<deadlineTimer> | null, b: $.Slice<number>, wholePacket: boolean, checkFrom: ((_p0: __goscript_sockaddr_posix.sockaddr | null) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<[number, __goscript_sockaddr_posix.sockaddr | null, $.GoError]> {
		const pq: packetQueue | $.VarRef<packetQueue> | null = this;
		let n: number = 0
		let _from: __goscript_sockaddr_posix.sockaddr | null = null! as __goscript_sockaddr_posix.sockaddr | null
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const pq$: packetQueue = pq == null ? $.pointerTarget<packetQueue>(pq) : (pq as any).__isVarRef === true ? (pq as any).value : (pq as any).__goValue === undefined ? (pq as any) : $.pointerTarget<packetQueue>(pq)
		const dt$: deadlineTimer = dt == null ? $.pointerTarget<deadlineTimer>(dt) : (dt as any).__isVarRef === true ? (dt as any).value : (dt as any).__goValue === undefined ? (dt as any) : $.pointerTarget<deadlineTimer>(dt)
		let q: packetQueueState = new packetQueueState(undefined, true)
		let empty: $.Channel<packetQueueState> | null = null! as $.Channel<packetQueueState> | null
		if ($.sliceLen(b) == 0) {
			// For consistency with the implementation on Unix platforms,
			// allow a zero-length Read to proceed if the queue is empty.
			// (Without this, TestZeroByteRead deadlocks.)
			empty = (pq$ as packetQueue).empty
		}

		const [__goscriptSelect5HasReturn, __goscriptSelect5Value] = await $.selectStatement<any, [number, __goscript_sockaddr_posix.sockaddr | null, $.GoError]>([
			{
				id: 0,
				isSend: false,
				channel: (dt$ as deadlineTimer).expired,
				onSelected: async (__goscriptSelect5Result) => {
					return [0, null, os.ErrDeadlineExceeded]
				}
			},
			{
				id: 1,
				isSend: false,
				channel: empty,
				onSelected: async (__goscriptSelect5Result) => {
					q = __goscriptSelect5Result.value
				}
			},
			{
				id: 2,
				isSend: false,
				channel: (pq$ as packetQueue).ready,
				onSelected: async (__goscriptSelect5Result) => {
					q = __goscriptSelect5Result.value
				}
			},
			{
				id: 3,
				isSend: false,
				channel: (pq$ as packetQueue).full,
				onSelected: async (__goscriptSelect5Result) => {
					q = __goscriptSelect5Result.value
				}
			}
		], false)
		if (__goscriptSelect5HasReturn) {
			return __goscriptSelect5Value
		}
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await (pq !== null && (pq as any).__isVarRef !== true && (pq as any).__goValue === undefined ? ((pq as any) as packetQueue).put((q).clone()) : packetQueue.prototype.put.call(pq, (q).clone()))
		})() })

		if (q.readClosed) {
			const __goscriptReturn6: [number, __goscript_sockaddr_posix.sockaddr | null, $.GoError] = [0, null, __goscript_net.ErrClosed]
			n = __goscriptReturn6[0]
			_from = __goscriptReturn6[1]
			err = __goscriptReturn6[2]
			await __defer.dispose()
			return [n, _from, err]
		}

		let p: packet | $.VarRef<packet> | null = q.head
		let p$: packet = p == null ? $.pointerTarget<packet>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<packet>(p)
		if (p == null) {
			switch ((true as boolean)) {
				case q.writeClosed:
				{
					if (q.noLinger) {
						const __goscriptReturn7: [number, __goscript_sockaddr_posix.sockaddr | null, $.GoError] = [0, null, os.NewSyscallError("recvfrom", $.namedValueInterfaceValue<$.GoError>(syscall.ECONNRESET, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
						n = __goscriptReturn7[0]
						_from = __goscriptReturn7[1]
						err = __goscriptReturn7[2]
						await __defer.dispose()
						return [n, _from, err]
					}
					const __goscriptReturn8: [number, __goscript_sockaddr_posix.sockaddr | null, $.GoError] = [0, null, io.EOF]
					n = __goscriptReturn8[0]
					_from = __goscriptReturn8[1]
					err = __goscriptReturn8[2]
					await __defer.dispose()
					return [n, _from, err]
					break
				}
				case $.sliceLen(b) == 0:
				{
					const __goscriptReturn9: [number, __goscript_sockaddr_posix.sockaddr | null, $.GoError] = [0, null, null]
					n = __goscriptReturn9[0]
					_from = __goscriptReturn9[1]
					err = __goscriptReturn9[2]
					await __defer.dispose()
					return [n, _from, err]
					break
				}
				default:
				{
					$.panic("net: nil packet list from non-closed packetQueue")
					break
				}
			}
		}

		const [__goscriptSelect6HasReturn, __goscriptSelect6Value] = await $.selectStatement<any, [number, __goscript_sockaddr_posix.sockaddr | null, $.GoError]>([
			{
				id: 0,
				isSend: false,
				channel: (dt$ as deadlineTimer).expired,
				onSelected: async (__goscriptSelect6Result) => {
					const __goscriptReturn10: [number, __goscript_sockaddr_posix.sockaddr | null, $.GoError] = [0, null, os.ErrDeadlineExceeded]
					n = __goscriptReturn10[0]
					_from = __goscriptReturn10[1]
					err = __goscriptReturn10[2]
					await __defer.dispose()
					return [n, _from, err]
				}
			},
			{
				id: -1,
				isSend: false,
				channel: null,
			}
		], true)
		if (__goscriptSelect6HasReturn) {
			return __goscriptSelect6Value
		}

		if (checkFrom != null) {
			{
				let __goscriptShadow9 = (__goscriptAwait = checkFrom!((p$ as packet)._from), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow9 != null) {
					const __goscriptReturn11: [number, __goscript_sockaddr_posix.sockaddr | null, $.GoError] = [0, null, __goscriptShadow9]
					n = __goscriptReturn11[0]
					_from = __goscriptReturn11[1]
					err = __goscriptReturn11[2]
					await __defer.dispose()
					return [n, _from, err]
				}
			}
		}

		n = $.copy(b, $.goSlice((p$ as packet).buf, (p$ as packet).bufOffset, undefined))
		_from = (p$ as packet)._from
		if (wholePacket || (((p$ as packet).bufOffset + n) == $.sliceLen((p$ as packet).buf))) {
			q.head = (p$ as packet).next
			q.nBytes = q.nBytes - ($.sliceLen((p$ as packet).buf))
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as packet).clear() : packet.prototype.clear.call(p))
			packetPool.value.Put($.interfaceValue(p, "*net.packet", /* @__PURE__ */ $.pointerType("net.packet")))
		} else {
			;(p$ as packet).bufOffset = (p$ as packet).bufOffset + (n)
		}

		const __goscriptReturn12: [number, __goscript_sockaddr_posix.sockaddr | null, $.GoError] = [n, _from, null]
		n = __goscriptReturn12[0]
		_from = __goscriptReturn12[1]
		err = __goscriptReturn12[2]
		await __defer.dispose()
		return [n, _from, err]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async send(dt: deadlineTimer | $.VarRef<deadlineTimer> | null, b: $.Slice<number>, _from: __goscript_sockaddr_posix.sockaddr | null, block: boolean): globalThis.Promise<[number, $.GoError]> {
		const pq: packetQueue | $.VarRef<packetQueue> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const pq$: packetQueue = pq == null ? $.pointerTarget<packetQueue>(pq) : (pq as any).__isVarRef === true ? (pq as any).value : (pq as any).__goValue === undefined ? (pq as any) : $.pointerTarget<packetQueue>(pq)
		const dt$: deadlineTimer = dt == null ? $.pointerTarget<deadlineTimer>(dt) : (dt as any).__isVarRef === true ? (dt as any).value : (dt as any).__goValue === undefined ? (dt as any) : $.pointerTarget<deadlineTimer>(dt)
		if (_from == null) {
			return [0, os.NewSyscallError("send", $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
		}
		if ($.sliceLen(b) > 65535) {
			return [0, os.NewSyscallError("send", $.namedValueInterfaceValue<$.GoError>(syscall.EMSGSIZE, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
		}

		let q: packetQueueState = new packetQueueState(undefined, true)
		let full: $.Channel<packetQueueState> | null = null! as $.Channel<packetQueueState> | null
		if (!block) {
			full = (pq$ as packetQueue).full
		}

		const [__goscriptSelect7HasReturn, __goscriptSelect7Value] = await $.selectStatement<any, [number, $.GoError]>([
			{
				id: 0,
				isSend: false,
				channel: (dt$ as deadlineTimer).expired,
				onSelected: async (__goscriptSelect7Result) => {
					return [0, os.ErrDeadlineExceeded]
				}
			},
			{
				id: 1,
				isSend: false,
				channel: full,
				onSelected: async (__goscriptSelect7Result) => {
					q = __goscriptSelect7Result.value
					await (pq !== null && (pq as any).__isVarRef !== true && (pq as any).__goValue === undefined ? ((pq as any) as packetQueue).put((q).clone()) : packetQueue.prototype.put.call(pq, (q).clone()))
					return [0, os.NewSyscallError("send", $.namedValueInterfaceValue<$.GoError>(syscall.ENOBUFS, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
				}
			},
			{
				id: 2,
				isSend: false,
				channel: (pq$ as packetQueue).empty,
				onSelected: async (__goscriptSelect7Result) => {
					q = __goscriptSelect7Result.value
				}
			},
			{
				id: 3,
				isSend: false,
				channel: (pq$ as packetQueue).ready,
				onSelected: async (__goscriptSelect7Result) => {
					q = __goscriptSelect7Result.value
				}
			}
		], false)
		if (__goscriptSelect7HasReturn) {
			return __goscriptSelect7Value
		}
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await (pq !== null && (pq as any).__isVarRef !== true && (pq as any).__goValue === undefined ? ((pq as any) as packetQueue).put((q).clone()) : packetQueue.prototype.put.call(pq, (q).clone()))
		})() })

		// Don't allow a packet to be sent if the deadline has expired,
		// even if the select above chose a different branch.
		const [__goscriptSelect8HasReturn, __goscriptSelect8Value] = await $.selectStatement<any, [number, $.GoError]>([
			{
				id: 0,
				isSend: false,
				channel: (dt$ as deadlineTimer).expired,
				onSelected: async (__goscriptSelect8Result) => {
					const __goscriptReturn13: [number, $.GoError] = [0, os.ErrDeadlineExceeded]
					n = __goscriptReturn13[0]
					err = __goscriptReturn13[1]
					await __defer.dispose()
					return [n, err]
				}
			},
			{
				id: -1,
				isSend: false,
				channel: null,
			}
		], true)
		if (__goscriptSelect8HasReturn) {
			return __goscriptSelect8Value
		}
		if (q.writeClosed) {
			const __goscriptReturn14: [number, $.GoError] = [0, __goscript_net.ErrClosed]
			n = __goscriptReturn14[0]
			err = __goscriptReturn14[1]
			await __defer.dispose()
			return [n, err]
		} else {
			if (q.readClosed && (q.nBytes >= q.readBufferBytes)) {
				const __goscriptReturn15: [number, $.GoError] = [0, os.NewSyscallError("send", $.namedValueInterfaceValue<$.GoError>(syscall.ECONNRESET, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
				n = __goscriptReturn15[0]
				err = __goscriptReturn15[1]
				await __defer.dispose()
				return [n, err]
			}
		}

		let p: packet | $.VarRef<packet> | null = $.mustTypeAssert<packet | $.VarRef<packet> | null>(await packetPool.value.Get(), /* @__PURE__ */ $.pointerType("net.packet"))
		let p$: packet = p == null ? $.pointerTarget<packet>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<packet>(p);
		;(p$ as packet).buf = $.appendSlice($.goSlice((p$ as packet).buf, undefined, 0), b, $.byteSliceHint);
		;(p$ as packet)._from = _from

		if (q.head == null) {
			q.head = p
		} else {
			$.pointerValue<packet>(q.tail).next = p
		}
		q.tail = p
		q.nBytes = q.nBytes + ($.sliceLen((p$ as packet).buf))

		const __goscriptReturn16: [number, $.GoError] = [$.sliceLen(b), null]
		n = __goscriptReturn16[0]
		err = __goscriptReturn16[1]
		await __defer.dispose()
		return [n, err]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async setLinger(linger: boolean): globalThis.Promise<$.GoError> {
		const pq: packetQueue | $.VarRef<packetQueue> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		let q = await (pq !== null && (pq as any).__isVarRef !== true && (pq as any).__goValue === undefined ? ((pq as any) as packetQueue)["get"]() : packetQueue.prototype.get.call(pq))
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await (pq !== null && (pq as any).__isVarRef !== true && (pq as any).__goValue === undefined ? ((pq as any) as packetQueue).put((q).clone()) : packetQueue.prototype.put.call(pq, (q).clone()))
		})() })

		if (q.writeClosed) {
			return __goscript_net.ErrClosed
		}
		q.noLinger = !linger
		return null
	}

	public async setReadBuffer(bytes: number): globalThis.Promise<$.GoError> {
		const pq: packetQueue | $.VarRef<packetQueue> | null = this;
		if (bytes <= 0) {
			return os.NewSyscallError("setReadBuffer", $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)
		}
		let q = await (pq !== null && (pq as any).__isVarRef !== true && (pq as any).__goValue === undefined ? ((pq as any) as packetQueue)["get"]() : packetQueue.prototype.get.call(pq))
		q.readBufferBytes = bytes
		await (pq !== null && (pq as any).__isVarRef !== true && (pq as any).__goValue === undefined ? ((pq as any) as packetQueue).put((q).clone()) : packetQueue.prototype.put.call(pq, (q).clone()))
		return null
	}

	public async write(dt: deadlineTimer | $.VarRef<deadlineTimer> | null, b: $.Slice<number>, _from: __goscript_sockaddr_posix.sockaddr | null): globalThis.Promise<[number, $.GoError]> {
		const pq: packetQueue | $.VarRef<packetQueue> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		while (true) {
			let dn: number = $.sliceLen(b)
			if (dn > 65535) {
				dn = 65535
			}

			let __goscriptTuple14: any = await (pq !== null && (pq as any).__isVarRef !== true && (pq as any).__goValue === undefined ? ((pq as any) as packetQueue).send(dt, $.goSlice(b, undefined, dn), _from, true) : packetQueue.prototype.send.call(pq, dt, $.goSlice(b, undefined, dn), _from, true))
			dn = __goscriptTuple14[0]
			err = __goscriptTuple14[1]
			n = n + (dn)
			if (err != null) {
				return [n, err]
			}

			b = $.goSlice(b, dn, undefined)
			if ($.sliceLen(b) == 0) {
				return [n, null]
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"net.packetQueue",
		() => new packetQueue(),
		() => [$.methodSignature("closeRead", [], ["error"], true), $.methodSignature("closeWrite", [], ["error"], true), $.methodSignature("get", [], ["net.packetQueueState"], true), $.methodSignature("put", [["q", "net.packetQueueState"]], [], true), $.methodSignature("recvfrom", [["dt", /* @__PURE__ */ $.pointerType("net.deadlineTimer")], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["wholePacket", /* @__PURE__ */ $.basicType("bool")], ["checkFrom", ({ kind: $.TypeKind.Function, params: ["net.sockaddr"], results: ["error"] } as $.FunctionTypeInfo)]], [["n", /* @__PURE__ */ $.basicType("int")], ["from", "net.sockaddr"], ["err", "error"]], true), $.methodSignature("send", [["dt", /* @__PURE__ */ $.pointerType("net.deadlineTimer")], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["from", "net.sockaddr"], ["block", /* @__PURE__ */ $.basicType("bool")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("setLinger", [["linger", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("setReadBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("write", [["dt", /* @__PURE__ */ $.pointerType("net.deadlineTimer")], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["from", "net.sockaddr"]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		packetQueue,
		() => [/* @__PURE__ */ $.structField("empty", /* @__PURE__ */ $.channelType("net.packetQueueState", "both"), [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("ready", /* @__PURE__ */ $.channelType("net.packetQueueState", "both"), [1], 8, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("full", /* @__PURE__ */ $.channelType("net.packetQueueState", "both"), [2], 16, false, { pkgPath: "net" })]
	)
}

export class deadlineTimer {
	public get timer(): $.Channel<time.Timer | $.VarRef<time.Timer> | null> | null {
		return this._fields.timer
	}

	public set timer(value: $.Channel<time.Timer | $.VarRef<time.Timer> | null> | null) {
		this._fields.timer = value
	}

	public get expired(): $.Channel<{}> | null {
		return this._fields.expired
	}

	public set expired(value: $.Channel<{}> | null) {
		this._fields.expired = value
	}

	public _fields: {
		timer: $.Channel<time.Timer | $.VarRef<time.Timer> | null> | null
		expired: $.Channel<{}> | null
	}

	constructor(init?: Partial<{timer?: $.Channel<time.Timer | $.VarRef<time.Timer> | null> | null, expired?: $.Channel<{}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			timer: init?.timer ?? (null! as $.Channel<time.Timer | $.VarRef<time.Timer> | null> | null),
			expired: init?.expired ?? (null! as $.Channel<{}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): deadlineTimer {
		return new deadlineTimer(this, true)
	}

	public __goscriptAssign(source: deadlineTimer): void {
		const target = this._fields
		const values = source._fields
		target.timer = values.timer
		target.expired = values.expired
	}

	public async Reset(deadline: time.Time): globalThis.Promise<boolean> {
		const dt: deadlineTimer | $.VarRef<deadlineTimer> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const dt$: deadlineTimer = dt == null ? $.pointerTarget<deadlineTimer>(dt) : (dt as any).__isVarRef === true ? (dt as any).value : (dt as any).__goValue === undefined ? (dt as any) : $.pointerTarget<deadlineTimer>(dt)
		let timer: time.Timer | $.VarRef<time.Timer> | null = await $.chanRecv((dt$ as deadlineTimer).timer)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await $.chanSend((dt$ as deadlineTimer).timer, timer)
		})() })

		if ($.markAsStructValue($.cloneStructValue(deadline)).Equal($.markAsStructValue($.cloneStructValue(__goscript_net.noDeadline)))) {
			if ((timer != null) && time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer))) {
				timer = null
			}
			return timer == null
		}

		let d = time.Until($.markAsStructValue($.cloneStructValue(deadline)))
		if (d < 0n) {
			// Ensure that a deadline in the past takes effect immediately.
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				await $.chanRecv((dt$ as deadlineTimer).expired)
			})() })
		}

		if (timer == null) {
			timer = time.AfterFunc(d, $.functionValue((): void => {
				void (dt$ as deadlineTimer).expired!.close()
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
			return true
		}
		if (!time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer))) {
			return false
		}
		time.Timer.prototype.Reset.call($.pointerValue<time.Timer>(timer), d)
		return true
	}

	static __typeInfo = $.registerStructType(
		"net.deadlineTimer",
		() => new deadlineTimer(),
		() => [$.methodSignature("Reset", [["deadline", "time.Time"]], [/* @__PURE__ */ $.basicType("bool")], true)],
		deadlineTimer,
		() => [/* @__PURE__ */ $.structField("timer", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("time.Timer"), "both"), [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("expired", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [1], 8, false, { pkgPath: "net" })]
	)
}

export const defaultBuffer: number = 65535

export const maxPacketSize: number = 65535

export let sockets: $.VarRef<sync.Map> = $.varRef($.markAsStructValue(new sync.Map()))

export function __goscript_set_sockets(__goscriptValue: sync.Map): void {
	$.assignStruct(sockets.value, __goscriptValue)
}

export let fakePorts: $.VarRef<sync.Map> = $.varRef($.markAsStructValue(new sync.Map()))

export function __goscript_set_fakePorts(__goscriptValue: sync.Map): void {
	$.assignStruct(fakePorts.value, __goscriptValue)
}

export let nextPortCounter: $.VarRef<atomic.Int32> = $.varRef($.markAsStructValue(new atomic.Int32()))

export function __goscript_set_nextPortCounter(__goscriptValue: atomic.Int32): void {
	$.assignStruct(nextPortCounter.value, __goscriptValue)
}

export async function fakeAddr(sa: __goscript_sockaddr_posix.sockaddr | null): globalThis.Promise<fakeSockAddr> {
	return (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = (sa !== null && (sa as any).__isVarRef !== true && (sa as any).__goValue === undefined ? (sa as Exclude<__goscript_sockaddr_posix.sockaddr, null>) : $.pointerValue<Exclude<__goscript_sockaddr_posix.sockaddr, null>>(sa)).family(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField1 = (__goscriptAwait = (sa !== null && (sa as any).__isVarRef !== true && (sa as any).__goValue === undefined ? (sa as Exclude<__goscript_sockaddr_posix.sockaddr, null>) : $.pointerValue<Exclude<__goscript_sockaddr_posix.sockaddr, null>>(sa)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new fakeSockAddr({family: __goscriptLiteralField0, address: __goscriptLiteralField1}, true) })())
}

export async function socket(ctx: context.Context | null, net: string, family: number, sotype: number, proto: number, ipv6only: boolean, laddr: __goscript_sockaddr_posix.sockaddr | null, raddr: __goscript_sockaddr_posix.sockaddr | null, ctrlCtxFn: ((_p0: context.Context | null, _p1: string, _p2: string, _p3: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<[__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null, $.GoError]> {
	if ((raddr != null) && (ctrlCtxFn != null)) {
		return [null, os.NewSyscallError("socket", $.namedValueInterfaceValue<$.GoError>(syscall.ENOTSUP, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
	}
	switch (sotype) {
		case syscall.SOCK_STREAM:
		case syscall.SOCK_SEQPACKET:
		case syscall.SOCK_DGRAM:
		{
			break
		}
		default:
		{
			return [null, os.NewSyscallError("socket", $.namedValueInterfaceValue<$.GoError>(syscall.ENOTSUP, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
			break
		}
	}

	let fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = new __goscript_fd_fake.netFD({family: family, sotype: sotype, net: net})
	$.pointerValue<__goscript_fd_fake.netFD>(fd).fakeNetFD = await newFakeNetFD(fd)

	if (raddr == null) {
		{
			let err = await fakeListen(fd, laddr)
			if (err != null) {
				await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as __goscript_fd_fake.netFD).Close() : __goscript_fd_fake.netFD.prototype.Close.call(fd))
				return [null, err]
			}
		}
		return [fd, null]
	}

	{
		let err = await fakeConnect(ctx, fd, laddr, raddr)
		if (err != null) {
			await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as __goscript_fd_fake.netFD).Close() : __goscript_fd_fake.netFD.prototype.Close.call(fd))
			return [null, err]
		}
	}
	return [fd, null]
}

export async function validateResolvedAddr(net: string, family: number, sa: __goscript_sockaddr_posix.sockaddr | null): globalThis.Promise<$.GoError> {
	let validateIP: ((ip: __goscript_ip.IP) => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue((ip: __goscript_ip.IP): $.GoError => {
		switch (family) {
			case syscall.AF_INET:
			{
				if ($.sliceLen((ip as __goscript_ip.IP)) != 4) {
					return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField2 = __goscript_ip.IP_String(ip); return new __goscript_net.AddrError({Err: "non-IPv4 address", Addr: __goscriptLiteralField2}) })(), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))
				}
				break
			}
			case syscall.AF_INET6:
			{
				if ($.sliceLen((ip as __goscript_ip.IP)) != 16) {
					return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField3 = __goscript_ip.IP_String(ip); return new __goscript_net.AddrError({Err: "non-IPv6 address", Addr: __goscriptLiteralField3}) })(), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))
				}
				break
			}
			default:
			{
				$.panic("net: unexpected address family in validateResolvedAddr")
				break
			}
		}
		return null
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")], results: ["error"] } as $.FunctionTypeInfo))

	switch (net) {
		case "tcp":
		case "tcp4":
		case "tcp6":
		{
			let __goscriptShadow0 = sa
			let __goscriptTuple0: any = $.typeAssertTuple<__goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null>(__goscriptShadow0, /* @__PURE__ */ $.pointerType("net.TCPAddr"))
			let __goscriptShadow1: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (!ok) {
				return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField4 = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as __goscript_tcpsock.TCPAddr).String() : __goscript_tcpsock.TCPAddr.prototype.String.call(__goscriptShadow1)); return new __goscript_net.AddrError({Err: $.concatString(($.concatString("non-TCP address for ", net)), " network"), Addr: __goscriptLiteralField4}) })(), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))
			}
			{
				let err = (__goscriptAwait = validateIP!(($.pointerValue<__goscript_tcpsock.TCPAddr>(__goscriptShadow1).IP as __goscript_ip.IP)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			if (($.pointerValue<__goscript_tcpsock.TCPAddr>(__goscriptShadow1).Port <= 0) || ($.pointerValue<__goscript_tcpsock.TCPAddr>(__goscriptShadow1).Port >= 65536)) {
				return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField5 = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as __goscript_tcpsock.TCPAddr).String() : __goscript_tcpsock.TCPAddr.prototype.String.call(__goscriptShadow1)); return new __goscript_net.AddrError({Err: "port out of range", Addr: __goscriptLiteralField5}) })(), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))
			}
			return null
			break
		}
		case "udp":
		case "udp4":
		case "udp6":
		{
			let __goscriptShadow2 = sa
			let __goscriptTuple1: any = $.typeAssertTuple<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>(__goscriptShadow2, /* @__PURE__ */ $.pointerType("net.UDPAddr"))
			let __goscriptShadow3: __goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (!ok) {
				return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField6 = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? ((__goscriptShadow3 as any) as __goscript_udpsock.UDPAddr).String() : __goscript_udpsock.UDPAddr.prototype.String.call(__goscriptShadow3)); return new __goscript_net.AddrError({Err: $.concatString(($.concatString("non-UDP address for ", net)), " network"), Addr: __goscriptLiteralField6}) })(), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))
			}
			{
				let err = (__goscriptAwait = validateIP!(($.pointerValue<__goscript_udpsock.UDPAddr>(__goscriptShadow3).IP as __goscript_ip.IP)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			if (($.pointerValue<__goscript_udpsock.UDPAddr>(__goscriptShadow3).Port <= 0) || ($.pointerValue<__goscript_udpsock.UDPAddr>(__goscriptShadow3).Port >= 65536)) {
				return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField7 = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? ((__goscriptShadow3 as any) as __goscript_udpsock.UDPAddr).String() : __goscript_udpsock.UDPAddr.prototype.String.call(__goscriptShadow3)); return new __goscript_net.AddrError({Err: "port out of range", Addr: __goscriptLiteralField7}) })(), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))
			}
			return null
			break
		}
		case "unix":
		case "unixgram":
		case "unixpacket":
		{
			let __goscriptShadow4 = sa
			let __goscriptTuple2: any = $.typeAssertTuple<__goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null>(__goscriptShadow4, /* @__PURE__ */ $.pointerType("net.UnixAddr"))
			let __goscriptShadow5: __goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (!ok) {
				return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField8 = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? ((__goscriptShadow5 as any) as __goscript_unixsock.UnixAddr).String() : __goscript_unixsock.UnixAddr.prototype.String.call(__goscriptShadow5)); return new __goscript_net.AddrError({Err: $.concatString(($.concatString("non-Unix address for ", net)), " network"), Addr: __goscriptLiteralField8}) })(), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))
			}
			if (!$.stringEqual($.pointerValue<__goscript_unixsock.UnixAddr>(__goscriptShadow5).Name, "")) {
				let i = $.stringLen($.pointerValue<__goscript_unixsock.UnixAddr>(__goscriptShadow5).Name) - 1
				while ((i > 0) && !os.IsPathSeparator($.indexString($.pointerValue<__goscript_unixsock.UnixAddr>(__goscriptShadow5).Name, i))) {
					i--
				}
				while ((i > 0) && os.IsPathSeparator($.indexString($.pointerValue<__goscript_unixsock.UnixAddr>(__goscriptShadow5).Name, i))) {
					i--
				}
				if (i <= 0) {
					return $.interfaceValue<$.GoError>(new __goscript_net.AddrError({Err: "unix socket name missing path component", Addr: $.pointerValue<__goscript_unixsock.UnixAddr>(__goscriptShadow5).Name}), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))
				}
				{
					let [, err] = await os.Stat($.sliceStringOrBytes($.pointerValue<__goscript_unixsock.UnixAddr>(__goscriptShadow5).Name, undefined, i + 1))
					if (err != null) {
						return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField9 = (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.AddrError({Err: __goscriptLiteralField9, Addr: $.pointerValue<__goscript_unixsock.UnixAddr>(__goscriptShadow5).Name}) })()), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))
					}
				}
			}
			return null
			break
		}
		default:
		{
			return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField10 = syscall.Errno_Error(syscall.EAFNOSUPPORT); const __goscriptLiteralField11 = (__goscriptAwait = (sa !== null && (sa as any).__isVarRef !== true && (sa as any).__goValue === undefined ? (sa as Exclude<__goscript_sockaddr_posix.sockaddr, null>) : $.pointerValue<Exclude<__goscript_sockaddr_posix.sockaddr, null>>(sa)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.AddrError({Err: __goscriptLiteralField10, Addr: __goscriptLiteralField11}) })()), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function matchIPFamily(family: number, addr: __goscript_sockaddr_posix.sockaddr | null): globalThis.Promise<__goscript_sockaddr_posix.sockaddr | null> {
	let convertIP: ((ip: __goscript_ip.IP) => __goscript_ip.IP | globalThis.Promise<__goscript_ip.IP>) | null = $.functionValue((ip: __goscript_ip.IP): __goscript_ip.IP => {
		switch (family) {
			case syscall.AF_INET:
			{
				return (__goscript_ip.IP_To4(ip) as __goscript_ip.IP)
				break
			}
			case syscall.AF_INET6:
			{
				return (__goscript_ip.IP_To16(ip) as __goscript_ip.IP)
				break
			}
			default:
			{
				return (ip as __goscript_ip.IP)
				break
			}
		}
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")] } as $.FunctionTypeInfo))

	{
		const __goscriptTypeSwitchValue = addr
		switch (true) {
			case $.typeAssert<__goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).ok:
				{
					let addr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null = $.typeAssert<__goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).value
					let ip: __goscript_ip.IP = (((__goscriptAwait = convertIP!(($.pointerValue<__goscript_tcpsock.TCPAddr>(addr).IP as __goscript_ip.IP)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_ip.IP) as __goscript_ip.IP)
					if ((ip == null) || ($.sliceLen((ip as __goscript_ip.IP)) == $.sliceLen(($.pointerValue<__goscript_tcpsock.TCPAddr>(addr).IP as __goscript_ip.IP)))) {
						return $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(addr, "*net.TCPAddr", /* @__PURE__ */ $.pointerType("net.TCPAddr"))
					}
					return $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(new __goscript_tcpsock.TCPAddr({IP: (ip as __goscript_ip.IP), Port: $.pointerValue<__goscript_tcpsock.TCPAddr>(addr).Port, Zone: $.pointerValue<__goscript_tcpsock.TCPAddr>(addr).Zone}), "*net.TCPAddr", /* @__PURE__ */ $.pointerType("net.TCPAddr"))
				}
				break
			case $.typeAssert<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).ok:
				{
					let addr: __goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null = $.typeAssert<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).value
					let ip: __goscript_ip.IP = (((__goscriptAwait = convertIP!(($.pointerValue<__goscript_udpsock.UDPAddr>(addr).IP as __goscript_ip.IP)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_ip.IP) as __goscript_ip.IP)
					if ((ip == null) || ($.sliceLen((ip as __goscript_ip.IP)) == $.sliceLen(($.pointerValue<__goscript_udpsock.UDPAddr>(addr).IP as __goscript_ip.IP)))) {
						return $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(addr, "*net.UDPAddr", /* @__PURE__ */ $.pointerType("net.UDPAddr"))
					}
					return $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(new __goscript_udpsock.UDPAddr({IP: (ip as __goscript_ip.IP), Port: $.pointerValue<__goscript_udpsock.UDPAddr>(addr).Port, Zone: $.pointerValue<__goscript_udpsock.UDPAddr>(addr).Zone}), "*net.UDPAddr", /* @__PURE__ */ $.pointerType("net.UDPAddr"))
				}
				break
			default:
				{
					let addr: any = __goscriptTypeSwitchValue
					return addr
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function newFakeNetFD(fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null): globalThis.Promise<fakeNetFD | $.VarRef<fakeNetFD> | null> {
	let ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = new fakeNetFD({fd: fd})
	let ffd$: fakeNetFD = ffd == null ? $.pointerTarget<fakeNetFD>(ffd) : (ffd as any).__isVarRef === true ? (ffd as any).value : (ffd as any).__goValue === undefined ? (ffd as any) : $.pointerTarget<fakeNetFD>(ffd)
	void (ffd$ as fakeNetFD).readDeadline.Store(await newDeadlineTimer($.markAsStructValue($.cloneStructValue(__goscript_net.noDeadline))))
	void (ffd$ as fakeNetFD).writeDeadline.Store(await newDeadlineTimer($.markAsStructValue($.cloneStructValue(__goscript_net.noDeadline))))
	return ffd
}

export let packetPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(new packet(), "*net.packet", /* @__PURE__ */ $.pointerType("net.packet"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_packetPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(packetPool.value, __goscriptValue)
}

export async function newPacketQueue(readBufferBytes: number): globalThis.Promise<packetQueue | $.VarRef<packetQueue> | null> {
	let pq: packetQueue | $.VarRef<packetQueue> | null = new packetQueue({empty: $.makeChannel<packetQueueState>(1, new packetQueueState(undefined, true), "both"), ready: $.makeChannel<packetQueueState>(1, new packetQueueState(undefined, true), "both"), full: $.makeChannel<packetQueueState>(1, new packetQueueState(undefined, true), "both")})
	await (pq !== null && (pq as any).__isVarRef !== true && (pq as any).__goValue === undefined ? ((pq as any) as packetQueue).put(new packetQueueState({readBufferBytes: readBufferBytes}, true)) : packetQueue.prototype.put.call(pq, new packetQueueState({readBufferBytes: readBufferBytes}, true)))
	return pq
}

export async function newDeadlineTimer(deadline: time.Time): globalThis.Promise<deadlineTimer | $.VarRef<deadlineTimer> | null> {
	let dt: deadlineTimer | $.VarRef<deadlineTimer> | null = new deadlineTimer({timer: $.makeChannel<time.Timer | $.VarRef<time.Timer> | null>(1, null! as time.Timer | $.VarRef<time.Timer> | null, "both"), expired: $.makeChannel<{}>(0, {}, "both")})
	await $.chanSend($.pointerValue<deadlineTimer>(dt).timer, null)
	await (dt !== null && (dt as any).__isVarRef !== true && (dt as any).__goValue === undefined ? ((dt as any) as deadlineTimer).Reset($.markAsStructValue($.cloneStructValue(deadline))) : deadlineTimer.prototype.Reset.call(dt, $.markAsStructValue($.cloneStructValue(deadline))))
	return dt
}

export function sysSocket(family: number, sotype: number, proto: number): [number, $.GoError] {
	return [0, os.NewSyscallError("sysSocket", $.namedValueInterfaceValue<$.GoError>(syscall.ENOSYS, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)]
}

export async function fakeListen(fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null, laddr: __goscript_sockaddr_posix.sockaddr | null): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	await using __defer = new $.AsyncDisposableStack()
	const fd$: __goscript_fd_fake.netFD = fd == null ? $.pointerTarget<__goscript_fd_fake.netFD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<__goscript_fd_fake.netFD>(fd)
	let wrapErr: ((err: $.GoError) => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (err: $.GoError): globalThis.Promise<$.GoError> => {
		{
			let [errno, ok] = $.typeAssertTuple<syscall.Errno>(err, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
			if (ok) {
				err = os.NewSyscallError("listen", $.namedValueInterfaceValue<$.GoError>(errno, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)
			}
		}
		if (errors.Is($.pointerValueOrNil(err)!, $.namedValueInterfaceValue<$.GoError>(syscall.EADDRINUSE, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)) {
			return err
		}
		if (laddr != null) {
			{
				let [, ok] = $.typeAssertTuple<__goscript_net.AddrError | $.VarRef<__goscript_net.AddrError> | null>(err, /* @__PURE__ */ $.pointerType("net.AddrError"))
				if (!ok) {
					err = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField15 = (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField16 = (__goscriptAwait = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? (laddr as Exclude<__goscript_sockaddr_posix.sockaddr, null>) : $.pointerValue<Exclude<__goscript_sockaddr_posix.sockaddr, null>>(laddr)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.AddrError({Err: __goscriptLiteralField15, Addr: __goscriptLiteralField16}) })()), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))
				}
			}
		}
		return err
	}, ({ kind: $.TypeKind.Function, params: ["error"], results: ["error"] } as $.FunctionTypeInfo))

	let ffd: fakeNetFD | $.VarRef<fakeNetFD> | null = await newFakeNetFD(fd)
	let ffd$: fakeNetFD = ffd == null ? $.pointerTarget<fakeNetFD>(ffd) : (ffd as any).__isVarRef === true ? (ffd as any).value : (ffd as any).__goValue === undefined ? (ffd as any) : $.pointerTarget<fakeNetFD>(ffd)
	__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
		if (!$.pointerEqual((fd$ as __goscript_fd_fake.netFD).fakeNetFD, ffd)) {
			// Failed to register listener; clean up.
			await (ffd !== null && (ffd as any).__isVarRef !== true && (ffd as any).__goValue === undefined ? ((ffd as any) as fakeNetFD).Close() : fakeNetFD.prototype.Close.call(ffd))
		}
	})() })

	{
		let __goscriptShadow10 = await (ffd !== null && (ffd as any).__isVarRef !== true && (ffd as any).__goValue === undefined ? ((ffd as any) as fakeNetFD).assignFakeAddr(await matchIPFamily((fd$ as __goscript_fd_fake.netFD).family, laddr)) : fakeNetFD.prototype.assignFakeAddr.call(ffd, await matchIPFamily((fd$ as __goscript_fd_fake.netFD).family, laddr)))
		if (__goscriptShadow10 != null) {
			const __goscriptReturn17: $.GoError = (__goscriptAwait = wrapErr!(__goscriptShadow10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			err = __goscriptReturn17
			await __defer.dispose()
			return err
		}
	}

	$.assignStruct((ffd$ as fakeNetFD).fakeAddr, await fakeAddr($.mustTypeAssert<__goscript_sockaddr_posix.sockaddr | null>((fd$ as __goscript_fd_fake.netFD).laddr, "net.sockaddr")))
	switch ((fd$ as __goscript_fd_fake.netFD).sotype) {
		case syscall.SOCK_STREAM:
		case syscall.SOCK_SEQPACKET:
		{
			;(ffd$ as fakeNetFD).incoming = $.makeChannel<$.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>>(1, null! as $.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>, "both");
			;(ffd$ as fakeNetFD).incomingFull = $.makeChannel<$.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>>(1, null! as $.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>, "both");
			;(ffd$ as fakeNetFD).incomingEmpty = $.makeChannel<boolean>(1, false, "both")
			await $.chanSend((ffd$ as fakeNetFD).incomingEmpty, true)
			break
		}
		case syscall.SOCK_DGRAM:
		{
			;(ffd$ as fakeNetFD).queue = await newPacketQueue(65535)
			break
		}
		default:
		{
			const __goscriptReturn18: $.GoError = (__goscriptAwait = wrapErr!($.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			err = __goscriptReturn18
			await __defer.dispose()
			return err
			break
		}
	}

	;(fd$ as __goscript_fd_fake.netFD).fakeNetFD = ffd
	{
		let [, dup] = await sockets.value.LoadOrStore($.interfaceValue(((ffd$ as fakeNetFD).fakeAddr).clone(), "net.fakeSockAddr", "net.fakeSockAddr"), $.interfaceValue(fd, "*net.netFD", /* @__PURE__ */ $.pointerType("net.netFD")))
		if (dup) {
			;(fd$ as __goscript_fd_fake.netFD).fakeNetFD = null
			const __goscriptReturn19: $.GoError = (__goscriptAwait = wrapErr!($.namedValueInterfaceValue<$.GoError>(syscall.EADDRINUSE, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			err = __goscriptReturn19
			await __defer.dispose()
			return err
		}
	}

	const __goscriptReturn20: $.GoError = null
	err = __goscriptReturn20
	await __defer.dispose()
	return err
	throw new globalThis.Error("goscript: unreachable return")
}

export async function fakeConnect(ctx: context.Context | null, fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null, laddr: __goscript_sockaddr_posix.sockaddr | null, raddr: __goscript_sockaddr_posix.sockaddr | null): globalThis.Promise<$.GoError> {
	await using __defer = new $.AsyncDisposableStack()
	const fd$: __goscript_fd_fake.netFD = fd == null ? $.pointerTarget<__goscript_fd_fake.netFD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<__goscript_fd_fake.netFD>(fd)
	let wrapErr: ((err: $.GoError) => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (err: $.GoError): globalThis.Promise<$.GoError> => {
		{
			let [errno, ok] = $.typeAssertTuple<syscall.Errno>(err, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
			if (ok) {
				err = os.NewSyscallError("connect", $.namedValueInterfaceValue<$.GoError>(errno, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)
			}
		}
		if (errors.Is($.pointerValueOrNil(err)!, $.namedValueInterfaceValue<$.GoError>(syscall.EADDRINUSE, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)) {
			return err
		}
		{
			let [terr, ok] = $.typeAssertTuple<any>(err, { kind: $.TypeKind.Interface, methods: [{ name: "Timeout", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("bool") }] }] })
			if (!ok || !(__goscriptAwait = (terr !== null && (terr as any).__isVarRef !== true && (terr as any).__goValue === undefined ? (terr as any) : $.pointerValue<any>(terr)).Timeout(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				// For consistency with the net implementation on other platforms,
				// if we don't need to preserve the Timeout-ness of err we should
				// wrap it in an AddrError. (Unfortunately we can't wrap errors
				// that convey structured information, because AddrError reduces
				// the wrapped Err to a flat string.)
				{
					let [, __goscriptShadow11] = $.typeAssertTuple<__goscript_net.AddrError | $.VarRef<__goscript_net.AddrError> | null>(err, /* @__PURE__ */ $.pointerType("net.AddrError"))
					if (!__goscriptShadow11) {
						err = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField17 = (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField18 = (__goscriptAwait = (raddr !== null && (raddr as any).__isVarRef !== true && (raddr as any).__goValue === undefined ? (raddr as Exclude<__goscript_sockaddr_posix.sockaddr, null>) : $.pointerValue<Exclude<__goscript_sockaddr_posix.sockaddr, null>>(raddr)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.AddrError({Err: __goscriptLiteralField17, Addr: __goscriptLiteralField18}) })()), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))
					}
				}
			}
		}
		return err
	}, ({ kind: $.TypeKind.Function, params: ["error"], results: ["error"] } as $.FunctionTypeInfo))

	if ((fd$ as __goscript_fd_fake.netFD).isConnected) {
		return wrapErr!($.namedValueInterfaceValue<$.GoError>(syscall.EISCONN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))
	}
	if ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
		return wrapErr!($.namedValueInterfaceValue<$.GoError>(syscall.ETIMEDOUT, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))
	}

	;(fd$ as __goscript_fd_fake.netFD).raddr = (await matchIPFamily((fd$ as __goscript_fd_fake.netFD).family, raddr) as __goscript_net.Addr | null)
	{
		let err = await validateResolvedAddr((fd$ as __goscript_fd_fake.netFD).net, (fd$ as __goscript_fd_fake.netFD).family, $.mustTypeAssert<__goscript_sockaddr_posix.sockaddr | null>((fd$ as __goscript_fd_fake.netFD).raddr, "net.sockaddr"))
		if (err != null) {
			return wrapErr!(err)
		}
	}

	{
		let err = await fakeNetFD.prototype.assignFakeAddr.call((fd$ as __goscript_fd_fake.netFD).fakeNetFD, laddr)
		if (err != null) {
			return wrapErr!(err)
		}
	}
	$.pointerValue<fakeNetFD>((fd$ as __goscript_fd_fake.netFD).fakeNetFD).queue = await newPacketQueue(65535)

	switch ((fd$ as __goscript_fd_fake.netFD).sotype) {
		case syscall.SOCK_DGRAM:
		{
			{
				let __goscriptTuple15: any = $.typeAssertTuple<__goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null>((fd$ as __goscript_fd_fake.netFD).laddr, /* @__PURE__ */ $.pointerType("net.UnixAddr"))
				let ua: __goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null = __goscriptTuple15[0]
				let ok = __goscriptTuple15[1]
				if (!ok || (!$.stringEqual($.pointerValue<__goscript_unixsock.UnixAddr>(ua).Name, ""))) {
					$.assignStruct($.pointerValue<fakeNetFD>((fd$ as __goscript_fd_fake.netFD).fakeNetFD).fakeAddr, await fakeAddr($.mustTypeAssert<__goscript_sockaddr_posix.sockaddr | null>((fd$ as __goscript_fd_fake.netFD).laddr, "net.sockaddr")))
					{
						let [, dup] = await sockets.value.LoadOrStore($.interfaceValue(($.pointerValue<fakeNetFD>((fd$ as __goscript_fd_fake.netFD).fakeNetFD).fakeAddr).clone(), "net.fakeSockAddr", "net.fakeSockAddr"), $.interfaceValue(fd, "*net.netFD", /* @__PURE__ */ $.pointerType("net.netFD")))
						if (dup) {
							return wrapErr!($.namedValueInterfaceValue<$.GoError>(syscall.EADDRINUSE, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))
						}
					}
				}
			}
			;(fd$ as __goscript_fd_fake.netFD).isConnected = true
			return null
			break
		}
		case syscall.SOCK_STREAM:
		case syscall.SOCK_SEQPACKET:
		{
			break
		}
		default:
		{
			return wrapErr!($.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))
			break
		}
	}

	let fa = await fakeAddr(raddr)
	let [lni, ok] = await sockets.value.Load($.interfaceValue((fa).clone(), "net.fakeSockAddr", "net.fakeSockAddr"))
	if (!ok) {
		if (((fd$ as __goscript_fd_fake.netFD).sotype == syscall.SOCK_STREAM) && ((fd$ as __goscript_fd_fake.netFD).family == syscall.AF_INET || (fd$ as __goscript_fd_fake.netFD).family == syscall.AF_INET6)) {
			let nativeErr = await connectNativeSocket($.pointerValue<fakeNetFD>((fd$ as __goscript_fd_fake.netFD).fakeNetFD), fa.address)
			if (nativeErr != null) {
				return wrapErr!(nativeErr)
			}
			;(fd$ as __goscript_fd_fake.netFD).isConnected = true
			return null
		}
		return wrapErr!($.namedValueInterfaceValue<$.GoError>(syscall.ECONNREFUSED, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))
	}
	let ln: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = ((lni as any)?.__goType === "*net.netFD" && (lni as any).__goValue === undefined && (lni as any).__isTypedNil !== true ? ((lni as any) as __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null) : $.mustTypeAssert<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>(lni, /* @__PURE__ */ $.pointerType("net.netFD")))
	let ln$: __goscript_fd_fake.netFD = ln == null ? $.pointerTarget<__goscript_fd_fake.netFD>(ln) : (ln as any).__isVarRef === true ? (ln as any).value : (ln as any).__goValue === undefined ? (ln as any) : $.pointerTarget<__goscript_fd_fake.netFD>(ln)
	if ((ln$ as __goscript_fd_fake.netFD).sotype != (fd$ as __goscript_fd_fake.netFD).sotype) {
		return wrapErr!($.namedValueInterfaceValue<$.GoError>(syscall.EPROTOTYPE, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))
	}
	if ($.pointerValue<fakeNetFD>((ln$ as __goscript_fd_fake.netFD).fakeNetFD).incoming == null) {
		return wrapErr!($.namedValueInterfaceValue<$.GoError>(syscall.ECONNREFUSED, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))
	}

	let peer: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = new __goscript_fd_fake.netFD({family: (ln$ as __goscript_fd_fake.netFD).family, sotype: (ln$ as __goscript_fd_fake.netFD).sotype, net: (ln$ as __goscript_fd_fake.netFD).net, laddr: (ln$ as __goscript_fd_fake.netFD).laddr, raddr: (fd$ as __goscript_fd_fake.netFD).laddr, isConnected: true})
	let peer$: __goscript_fd_fake.netFD = peer == null ? $.pointerTarget<__goscript_fd_fake.netFD>(peer) : (peer as any).__isVarRef === true ? (peer as any).value : (peer as any).__goValue === undefined ? (peer as any) : $.pointerTarget<__goscript_fd_fake.netFD>(peer);
	;(peer$ as __goscript_fd_fake.netFD).fakeNetFD = await newFakeNetFD(fd)
	$.pointerValue<fakeNetFD>((peer$ as __goscript_fd_fake.netFD).fakeNetFD).queue = await newPacketQueue(65535)
	__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
		if (!$.pointerEqual($.pointerValue<fakeNetFD>((fd$ as __goscript_fd_fake.netFD).fakeNetFD).peer, peer)) {
			// Failed to connect; clean up.
			await (peer !== null && (peer as any).__isVarRef !== true && (peer as any).__goValue === undefined ? ((peer as any) as __goscript_fd_fake.netFD).Close() : __goscript_fd_fake.netFD.prototype.Close.call(peer))
		}
	})() })

	let incoming: $.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null> = null! as $.Slice<__goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null>
	const [__goscriptSelect9HasReturn, __goscriptSelect9Value] = await $.selectStatement<any, $.GoError>([
		{
			id: 0,
			isSend: false,
			channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
			onSelected: async (__goscriptSelect9Result) => {
				return (__goscriptAwait = wrapErr!($.namedValueInterfaceValue<$.GoError>(syscall.ETIMEDOUT, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		},
		{
			id: 1,
			isSend: false,
			channel: $.pointerValue<fakeNetFD>((ln$ as __goscript_fd_fake.netFD).fakeNetFD).incomingEmpty,
			onSelected: async (__goscriptSelect9Result) => {
				ok = __goscriptSelect9Result.value
			}
		},
		{
			id: 2,
			isSend: false,
			channel: $.pointerValue<fakeNetFD>((ln$ as __goscript_fd_fake.netFD).fakeNetFD).incoming,
			onSelected: async (__goscriptSelect9Result) => {
				incoming = __goscriptSelect9Result.value
				ok = __goscriptSelect9Result.ok
			}
		}
	], false)
	if (__goscriptSelect9HasReturn) {
		return __goscriptSelect9Value
	}
	if (!ok) {
		return (__goscriptAwait = wrapErr!($.namedValueInterfaceValue<$.GoError>(syscall.ECONNREFUSED, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	;(fd$ as __goscript_fd_fake.netFD).isConnected = true
	$.pointerValue<fakeNetFD>((fd$ as __goscript_fd_fake.netFD).fakeNetFD).peer = peer
	$.pointerValue<fakeNetFD>((peer$ as __goscript_fd_fake.netFD).fakeNetFD).peer = fd

	incoming = $.appendOne(incoming, peer, $.appendZeros.nil)
	if ($.sliceLen(incoming) >= await __goscript_net.listenerBacklog()) {
		await $.chanSend($.pointerValue<fakeNetFD>((ln$ as __goscript_fd_fake.netFD).fakeNetFD).incomingFull, incoming)
	} else {
		await $.chanSend($.pointerValue<fakeNetFD>((ln$ as __goscript_fd_fake.netFD).fakeNetFD).incoming, incoming)
	}
	return null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "net.deadlineTimer", zero: () => new deadlineTimer(undefined, true) }})
}

var __goscriptAwait: any
