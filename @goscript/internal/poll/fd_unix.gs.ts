// Generated file based on fd_unix.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as io from "@goscript/io/index.js"

import * as strconv from "@goscript/internal/strconv/index.js"

import * as unix from "@goscript/internal/syscall/unix/index.js"

import * as __goscript_fd from "./fd.gs.ts"

import * as __goscript_fd_fsync_posix from "./fd_fsync_posix.gs.ts"

import * as __goscript_fd_mutex from "./fd_mutex.gs.ts"

import * as __goscript_fd_poll_js from "./fd_poll_js.gs.ts"

import * as __goscript_fd_posix from "./fd_posix.gs.ts"

import * as __goscript_fd_unixjs from "./fd_unixjs.gs.ts"

import * as __goscript_sys_cloexec from "./sys_cloexec.gs.ts"
import "@goscript/syscall/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/io/index.js"
import "@goscript/internal/strconv/index.js"
import "@goscript/internal/syscall/unix/index.js"
import "./fd.gs.ts"
import "./fd_fsync_posix.gs.ts"
import "./fd_mutex.gs.ts"
import "./fd_poll_js.gs.ts"
import "./fd_posix.gs.ts"
import "./fd_unixjs.gs.ts"
import "./sys_cloexec.gs.ts"

$.registerTypePackagePath("internal/poll", ["poll.FD"])

export class FD {
	// Lock sysfd and serialize access to Read and Write methods.
	public get fdmu(): __goscript_fd_mutex.fdMutex {
		return this._fields.fdmu
	}

	public set fdmu(value: __goscript_fd_mutex.fdMutex) {
		this._fields.fdmu = value
	}

	// System file descriptor. Immutable until Close.
	public get Sysfd(): number {
		return this._fields.Sysfd
	}

	public set Sysfd(value: number) {
		this._fields.Sysfd = value
	}

	public get SysFile(): __goscript_fd_unixjs.SysFile {
		return this._fields.SysFile
	}

	public set SysFile(value: __goscript_fd_unixjs.SysFile) {
		this._fields.SysFile = value
	}

	// I/O poller.
	public get pd(): __goscript_fd_poll_js.pollDesc {
		return this._fields.pd
	}

	public set pd(value: __goscript_fd_poll_js.pollDesc) {
		this._fields.pd = value
	}

	// Semaphore signaled when file is closed.
	public get csema(): number {
		return this._fields.csema
	}

	public set csema(value: number) {
		this._fields.csema = value
	}

	// Non-zero if this file has been set to blocking mode.
	public get isBlocking(): number {
		return this._fields.isBlocking
	}

	public set isBlocking(value: number) {
		this._fields.isBlocking = value
	}

	// Whether this is a streaming descriptor, as opposed to a
	// packet-based descriptor like a UDP socket. Immutable.
	public get IsStream(): boolean {
		return this._fields.IsStream
	}

	public set IsStream(value: boolean) {
		this._fields.IsStream = value
	}

	// Whether a zero byte read indicates EOF. This is false for a
	// message based socket connection.
	public get ZeroReadIsEOF(): boolean {
		return this._fields.ZeroReadIsEOF
	}

	public set ZeroReadIsEOF(value: boolean) {
		this._fields.ZeroReadIsEOF = value
	}

	// Whether this is a file rather than a network socket.
	public get isFile(): boolean {
		return this._fields.isFile
	}

	public set isFile(value: boolean) {
		this._fields.isFile = value
	}

	public _fields: {
		fdmu: __goscript_fd_mutex.fdMutex
		Sysfd: number
		SysFile: __goscript_fd_unixjs.SysFile
		pd: __goscript_fd_poll_js.pollDesc
		csema: number
		isBlocking: number
		IsStream: boolean
		ZeroReadIsEOF: boolean
		isFile: boolean
	}

	constructor(init?: Partial<{fdmu?: __goscript_fd_mutex.fdMutex, Sysfd?: number, SysFile?: __goscript_fd_unixjs.SysFile, pd?: __goscript_fd_poll_js.pollDesc, csema?: number, isBlocking?: number, IsStream?: boolean, ZeroReadIsEOF?: boolean, isFile?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			fdmu: init?.fdmu ? init.fdmu.clone() : new __goscript_fd_mutex.fdMutex(undefined, true),
			Sysfd: init?.Sysfd ?? (0 as number),
			SysFile: init?.SysFile ? init.SysFile.clone() : new __goscript_fd_unixjs.SysFile(undefined, true),
			pd: init?.pd ? init.pd.clone() : new __goscript_fd_poll_js.pollDesc(undefined, true),
			csema: init?.csema ?? (0 as number),
			isBlocking: init?.isBlocking ?? (0 as number),
			IsStream: init?.IsStream ?? (false as boolean),
			ZeroReadIsEOF: init?.ZeroReadIsEOF ?? (false as boolean),
			isFile: init?.isFile ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FD {
		return new FD(this, true)
	}

	public __goscriptAssign(source: FD): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.fdmu, values.fdmu)
		target.Sysfd = values.Sysfd
		$.assignStruct(target.SysFile, values.SysFile)
		$.assignStruct(target.pd, values.pd)
		target.csema = values.csema
		target.isBlocking = values.isBlocking
		target.IsStream = values.IsStream
		target.ZeroReadIsEOF = values.ZeroReadIsEOF
		target.isFile = values.isFile
	}

	public async Accept(): globalThis.Promise<[number, syscall.Sockaddr | null, string, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).readLock() : FD.prototype.readLock.call(fd))
			if (err != null) {
				return [-1, null, "", err]
			}
		}
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.readUnlock())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).readUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee0() })

		{
			let err = (fd$ as FD).pd.prepareRead((fd$ as FD).isFile)
			if (err != null) {
				return [-1, null, "", err]
			}
		}
		while (true) {
			let [s, rsa, errcall, err] = await __goscript_sys_cloexec.accept((fd$ as FD).Sysfd)
			if (err == null) {
				return [s, rsa, "", err]
			}
			{
				let __goscriptSwitch0 = err
				switch ((true as boolean)) {
					case $.comparableEqual(__goscriptSwitch0, $.namedValueInterfaceValue<$.GoError>(syscall.EINTR, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))):
					{
						continue
						break
					}
					case $.comparableEqual(__goscriptSwitch0, $.namedValueInterfaceValue<$.GoError>(syscall.EAGAIN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))):
					{
						if ((fd$ as FD).pd.pollable()) {
							{
								err = (fd$ as FD).pd.waitRead((fd$ as FD).isFile)
								if (err == null) {
									continue
								}
							}
						}
						break
					}
					case $.comparableEqual(__goscriptSwitch0, $.namedValueInterfaceValue<$.GoError>(syscall.ECONNABORTED, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))):
					{
						continue
						break
					}
				}
			}
			return [-1, null, errcall, err]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const fd: FD | $.VarRef<FD> | null = this;
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		if (!(fd$ as FD).fdmu.increfAndClose()) {
			return __goscript_fd.errClosing((fd$ as FD).isFile)
		}

		// Unblock any I/O.  Once it all unblocks and returns,
		// so that it cannot be referring to fd.sysfd anymore,
		// the final decref will close fd.sysfd. This should happen
		// fairly quickly, since all the I/O is non-blocking, and any
		// attempts to block in the pollDesc will return errClosing(fd.isFile).
		void (fd$ as FD).pd.evict()

		// The call to decref will call destroy if there are no other
		// references.
		let err = await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).decref() : FD.prototype.decref.call(fd))

		// Wait until the descriptor is closed. If this was the only
		// reference, it is already closed. Only wait if the file has
		// not been set to blocking mode, as otherwise any current I/O
		// may be blocking, and that would block the Close.
		// No need for an atomic read of isBlocking, increfAndClose means
		// we have exclusive access to fd.
		if ((fd$ as FD).isBlocking == 0) {
			__goscript_fd_mutex.runtime_Semacquire($.fieldRef((fd$ as FD)._fields, "csema"))
		}

		return err
	}

	public async Dup(): globalThis.Promise<[number, string, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).incref() : FD.prototype.incref.call(fd))
			if (err != null) {
				return [-1, "", err]
			}
		}
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.decref())($.pointerValue<FD>(fd)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "internal/poll.(*FD).decref-fm")
		__defer.defer(async () => { await __goscriptDeferCallee1() })
		return await DupCloseOnExec($.pointerValue<FD>(fd).Sysfd)
	}

	public async Fchdir(): globalThis.Promise<$.GoError> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).incref() : FD.prototype.incref.call(fd))
			if (err != null) {
				return err
			}
		}
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.decref())($.pointerValue<FD>(fd)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "internal/poll.(*FD).decref-fm")
		__defer.defer(async () => { await __goscriptDeferCallee2() })
		return syscall.Fchdir($.pointerValue<FD>(fd).Sysfd)
	}

	public async Fchmod(mode: number): globalThis.Promise<$.GoError> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).incref() : FD.prototype.incref.call(fd))
			if (err != null) {
				return err
			}
		}
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.decref())($.pointerValue<FD>(fd)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "internal/poll.(*FD).decref-fm")
		__defer.defer(async () => { await __goscriptDeferCallee3() })
		return await __goscript_fd_posix.ignoringEINTR($.functionValue((): $.GoError => {
			return syscall.Fchmod($.pointerValue<FD>(fd).Sysfd, mode)
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async Fchown(uid: number, gid: number): globalThis.Promise<$.GoError> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).incref() : FD.prototype.incref.call(fd))
			if (err != null) {
				return err
			}
		}
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.decref())($.pointerValue<FD>(fd)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "internal/poll.(*FD).decref-fm")
		__defer.defer(async () => { await __goscriptDeferCallee4() })
		return await __goscript_fd_posix.ignoringEINTR($.functionValue((): $.GoError => {
			return syscall.Fchown($.pointerValue<FD>(fd).Sysfd, uid, gid)
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async Fstat(s: syscall.Stat_t | $.VarRef<syscall.Stat_t> | null): globalThis.Promise<$.GoError> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).incref() : FD.prototype.incref.call(fd))
			if (err != null) {
				return err
			}
		}
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.decref())($.pointerValue<FD>(fd)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "internal/poll.(*FD).decref-fm")
		__defer.defer(async () => { await __goscriptDeferCallee5() })
		return await __goscript_fd_posix.ignoringEINTR($.functionValue((): $.GoError => {
			return syscall.Fstat($.pointerValue<FD>(fd).Sysfd, s)
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async Fsync(): globalThis.Promise<$.GoError> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).incref() : FD.prototype.incref.call(fd))
			if (err != null) {
				return err
			}
		}
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.decref())($.pointerValue<FD>(fd)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "internal/poll.(*FD).decref-fm")
		__defer.defer(async () => { await __goscriptDeferCallee6() })
		return await __goscript_fd_posix.ignoringEINTR($.functionValue((): $.GoError => {
			return syscall.Fsync($.pointerValue<FD>(fd).Sysfd)
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async Ftruncate(size: bigint): globalThis.Promise<$.GoError> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).incref() : FD.prototype.incref.call(fd))
			if (err != null) {
				return err
			}
		}
		const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.decref())($.pointerValue<FD>(fd)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "internal/poll.(*FD).decref-fm")
		__defer.defer(async () => { await __goscriptDeferCallee7() })
		return await __goscript_fd_posix.ignoringEINTR($.functionValue((): $.GoError => {
			return syscall.Ftruncate($.pointerValue<FD>(fd).Sysfd, size)
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public Init(net: string, pollable: boolean): $.GoError {
		let fd: FD | $.VarRef<FD> | null = this;
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		void (fd$ as FD).SysFile.init()

		// We don't actually care about the various network types.
		if ($.stringEqual(net, "file")) {
			;(fd$ as FD).isFile = true
		}
		if (!pollable) {
			;(fd$ as FD).isBlocking = 1
			return null
		}
		let err = (fd$ as FD).pd.init(fd)
		if (err != null) {
			// If we could not initialize the runtime poller,
			// assume we are using blocking mode.
			;(fd$ as FD).isBlocking = 1
		}
		return err
	}

	public async Pread(p: $.Slice<number>, off: bigint): globalThis.Promise<[number, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		// Call incref, not readLock, because since pread specifies the
		// offset it is independent from other reads.
		// Similarly, using the poller doesn't make sense for pread.
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).incref() : FD.prototype.incref.call(fd))
			if (err != null) {
				return [0, err]
			}
		}
		if ((fd$ as FD).IsStream && ($.sliceLen(p) > 1073741824)) {
			p = $.goSlice(p, undefined, 1073741824)
		}
		let __goscriptTuple0: any = await __goscript_fd_posix.ignoringEINTR2(__goscriptStatic0(), $.functionValue((): [number, $.GoError] => {
			return syscall.Pread((fd$ as FD).Sysfd, p, off)
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("int"), "error"] } as $.FunctionTypeInfo)))
		let n = (__goscriptTuple0[0] as number)
		let err = __goscriptTuple0[1]
		if (err != null) {
			n = 0
		}
		await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).decref() : FD.prototype.decref.call(fd))
		err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).eofError(n, err) : FD.prototype.eofError.call(fd, n, err))
		return [n, err]
	}

	public async Pwrite(p: $.Slice<number>, off: bigint): globalThis.Promise<[number, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		// Call incref, not writeLock, because since pwrite specifies the
		// offset it is independent from other writes.
		// Similarly, using the poller doesn't make sense for pwrite.
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).incref() : FD.prototype.incref.call(fd))
			if (err != null) {
				return [0, err]
			}
		}
		const __goscriptDeferCallee8 = $.functionValue(((__receiver) => () => __receiver.decref())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "internal/poll.(*FD).decref-fm")
		__defer.defer(async () => { await __goscriptDeferCallee8() })
		let nn: number = 0
		while (true) {
			let max = $.sliceLen(p)
			if ((fd$ as FD).IsStream && ((max - nn) > 1073741824)) {
				max = nn + 1073741824
			}
			let [n, err] = syscall.Pwrite((fd$ as FD).Sysfd, $.goSlice(p, nn, max), $.int64Add(off, $.int64(nn)))
			if ($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EINTR, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) {
				continue
			}
			if (n > 0) {
				nn = nn + (n)
			}
			if (nn == $.sliceLen(p)) {
				return [nn, err]
			}
			if (err != null) {
				return [nn, err]
			}
			if (n == 0) {
				return [nn, io.ErrUnexpectedEOF]
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async RawControl(f: ((_p0: number) => void) | null): globalThis.Promise<$.GoError> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).incref() : FD.prototype.incref.call(fd))
			if (err != null) {
				return err
			}
		}
		const __goscriptDeferCallee9 = $.functionValue(((__receiver) => () => __receiver.decref())($.pointerValue<FD>(fd)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "internal/poll.(*FD).decref-fm")
		__defer.defer(async () => { await __goscriptDeferCallee9() })
		void (__goscriptAwait = f!($.uint($.pointerValue<FD>(fd).Sysfd, 64)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	public async RawRead(f: ((_p0: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<$.GoError> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).readLock() : FD.prototype.readLock.call(fd))
			if (err != null) {
				return err
			}
		}
		const __goscriptDeferCallee10 = $.functionValue(((__receiver) => () => __receiver.readUnlock())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).readUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee10() })
		{
			let err = (fd$ as FD).pd.prepareRead((fd$ as FD).isFile)
			if (err != null) {
				return err
			}
		}
		while (true) {
			if ((__goscriptAwait = f!($.uint((fd$ as FD).Sysfd, 64)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return null
			}
			{
				let err = (fd$ as FD).pd.waitRead((fd$ as FD).isFile)
				if (err != null) {
					return err
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async RawWrite(f: ((_p0: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<$.GoError> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).writeLock() : FD.prototype.writeLock.call(fd))
			if (err != null) {
				return err
			}
		}
		const __goscriptDeferCallee11 = $.functionValue(((__receiver) => () => __receiver.writeUnlock())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).writeUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee11() })
		{
			let err = (fd$ as FD).pd.prepareWrite((fd$ as FD).isFile)
			if (err != null) {
				return err
			}
		}
		while (true) {
			if ((__goscriptAwait = f!($.uint((fd$ as FD).Sysfd, 64)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return null
			}
			{
				let err = (fd$ as FD).pd.waitWrite((fd$ as FD).isFile)
				if (err != null) {
					return err
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).readLock() : FD.prototype.readLock.call(fd))
			if (err != null) {
				return [0, err]
			}
		}
		const __goscriptDeferCallee12 = $.functionValue(((__receiver) => () => __receiver.readUnlock())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).readUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee12() })
		if ($.sliceLen(p) == 0) {
			// If the caller wanted a zero byte read, return immediately
			// without trying (but after acquiring the readLock).
			// Otherwise syscall.Read returns 0, nil which looks like
			// io.EOF.
			//
			// Waiting for readability instead was proposed in
			// go.dev/cl/22031 and abandoned. Blocking would change
			// the behavior of existing callers, and the netpoller's
			// edge-triggered notifications alone cannot detect data
			// that is already buffered. See go.dev/issue/15735.
			return [0, null]
		}
		{
			let err = (fd$ as FD).pd.prepareRead((fd$ as FD).isFile)
			if (err != null) {
				return [0, err]
			}
		}
		if ((fd$ as FD).IsStream && ($.sliceLen(p) > 1073741824)) {
			p = $.goSlice(p, undefined, 1073741824)
		}
		while (true) {
			let [n, err] = await ignoringEINTRIO(syscall.Read, (fd$ as FD).Sysfd, p)
			if (err != null) {
				n = 0
				if (($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EAGAIN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) && (fd$ as FD).pd.pollable()) {
					{
						err = (fd$ as FD).pd.waitRead((fd$ as FD).isFile)
						if (err == null) {
							continue
						}
					}
				}
			}
			err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).eofError(n, err) : FD.prototype.eofError.call(fd, n, err))
			return [n, err]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ReadDirent(buf: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).incref() : FD.prototype.incref.call(fd))
			if (err != null) {
				return [0, err]
			}
		}
		const __goscriptDeferCallee13 = $.functionValue(((__receiver) => () => __receiver.decref())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "internal/poll.(*FD).decref-fm")
		__defer.defer(async () => { await __goscriptDeferCallee13() })
		while (true) {
			let [n, err] = await ignoringEINTRIO(syscall.ReadDirent, (fd$ as FD).Sysfd, buf)
			if (err != null) {
				n = 0
				if (($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EAGAIN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) && (fd$ as FD).pd.pollable()) {
					{
						err = (fd$ as FD).pd.waitRead((fd$ as FD).isFile)
						if (err == null) {
							continue
						}
					}
				}
			}

			return [n, err]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ReadFrom(p: $.Slice<number>): globalThis.Promise<[number, syscall.Sockaddr | null, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).readLock() : FD.prototype.readLock.call(fd))
			if (err != null) {
				return [0, null, err]
			}
		}
		const __goscriptDeferCallee14 = $.functionValue(((__receiver) => () => __receiver.readUnlock())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).readUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee14() })
		{
			let err = (fd$ as FD).pd.prepareRead((fd$ as FD).isFile)
			if (err != null) {
				return [0, null, err]
			}
		}
		while (true) {
			let [n, sa, err] = syscall.Recvfrom((fd$ as FD).Sysfd, p, 0)
			if (err != null) {
				if ($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EINTR, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) {
					continue
				}
				n = 0
				if (($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EAGAIN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) && (fd$ as FD).pd.pollable()) {
					{
						err = (fd$ as FD).pd.waitRead((fd$ as FD).isFile)
						if (err == null) {
							continue
						}
					}
				}
			}
			err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).eofError(n, err) : FD.prototype.eofError.call(fd, n, err))
			return [n, sa, err]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ReadFromInet4(p: $.Slice<number>, _from: syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null): globalThis.Promise<[number, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).readLock() : FD.prototype.readLock.call(fd))
			if (err != null) {
				return [0, err]
			}
		}
		const __goscriptDeferCallee15 = $.functionValue(((__receiver) => () => __receiver.readUnlock())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).readUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee15() })
		{
			let err = (fd$ as FD).pd.prepareRead((fd$ as FD).isFile)
			if (err != null) {
				return [0, err]
			}
		}
		while (true) {
			let [n, err] = unix.RecvfromInet4((fd$ as FD).Sysfd, p, 0, _from)
			if (err != null) {
				if ($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EINTR, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) {
					continue
				}
				n = 0
				if (($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EAGAIN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) && (fd$ as FD).pd.pollable()) {
					{
						err = (fd$ as FD).pd.waitRead((fd$ as FD).isFile)
						if (err == null) {
							continue
						}
					}
				}
			}
			err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).eofError(n, err) : FD.prototype.eofError.call(fd, n, err))
			return [n, err]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ReadFromInet6(p: $.Slice<number>, _from: syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null): globalThis.Promise<[number, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).readLock() : FD.prototype.readLock.call(fd))
			if (err != null) {
				return [0, err]
			}
		}
		const __goscriptDeferCallee16 = $.functionValue(((__receiver) => () => __receiver.readUnlock())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).readUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee16() })
		{
			let err = (fd$ as FD).pd.prepareRead((fd$ as FD).isFile)
			if (err != null) {
				return [0, err]
			}
		}
		while (true) {
			let [n, err] = unix.RecvfromInet6((fd$ as FD).Sysfd, p, 0, _from)
			if (err != null) {
				if ($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EINTR, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) {
					continue
				}
				n = 0
				if (($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EAGAIN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) && (fd$ as FD).pd.pollable()) {
					{
						err = (fd$ as FD).pd.waitRead((fd$ as FD).isFile)
						if (err == null) {
							continue
						}
					}
				}
			}
			err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).eofError(n, err) : FD.prototype.eofError.call(fd, n, err))
			return [n, err]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ReadMsg(p: $.Slice<number>, oob: $.Slice<number>, flags: number): globalThis.Promise<[number, number, number, syscall.Sockaddr | null, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).readLock() : FD.prototype.readLock.call(fd))
			if (err != null) {
				return [0, 0, 0, null, err]
			}
		}
		const __goscriptDeferCallee17 = $.functionValue(((__receiver) => () => __receiver.readUnlock())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).readUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee17() })
		{
			let err = (fd$ as FD).pd.prepareRead((fd$ as FD).isFile)
			if (err != null) {
				return [0, 0, 0, null, err]
			}
		}
		while (true) {
			let [n, oobn, sysflags, sa, err] = syscall.Recvmsg((fd$ as FD).Sysfd, p, oob, flags)
			if (err != null) {
				if ($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EINTR, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) {
					continue
				}
				// TODO(dfc) should n and oobn be set to 0
				if (($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EAGAIN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) && (fd$ as FD).pd.pollable()) {
					{
						err = (fd$ as FD).pd.waitRead((fd$ as FD).isFile)
						if (err == null) {
							continue
						}
					}
				}
			}
			err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).eofError(n, err) : FD.prototype.eofError.call(fd, n, err))
			return [n, oobn, sysflags, sa, err]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ReadMsgInet4(p: $.Slice<number>, oob: $.Slice<number>, flags: number, sa4: syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null): globalThis.Promise<[number, number, number, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).readLock() : FD.prototype.readLock.call(fd))
			if (err != null) {
				return [0, 0, 0, err]
			}
		}
		const __goscriptDeferCallee18 = $.functionValue(((__receiver) => () => __receiver.readUnlock())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).readUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee18() })
		{
			let err = (fd$ as FD).pd.prepareRead((fd$ as FD).isFile)
			if (err != null) {
				return [0, 0, 0, err]
			}
		}
		while (true) {
			let [n, oobn, sysflags, err] = unix.RecvmsgInet4((fd$ as FD).Sysfd, p, oob, flags, sa4)
			if (err != null) {
				if ($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EINTR, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) {
					continue
				}
				// TODO(dfc) should n and oobn be set to 0
				if (($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EAGAIN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) && (fd$ as FD).pd.pollable()) {
					{
						err = (fd$ as FD).pd.waitRead((fd$ as FD).isFile)
						if (err == null) {
							continue
						}
					}
				}
			}
			err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).eofError(n, err) : FD.prototype.eofError.call(fd, n, err))
			return [n, oobn, sysflags, err]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ReadMsgInet6(p: $.Slice<number>, oob: $.Slice<number>, flags: number, sa6: syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null): globalThis.Promise<[number, number, number, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).readLock() : FD.prototype.readLock.call(fd))
			if (err != null) {
				return [0, 0, 0, err]
			}
		}
		const __goscriptDeferCallee19 = $.functionValue(((__receiver) => () => __receiver.readUnlock())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).readUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee19() })
		{
			let err = (fd$ as FD).pd.prepareRead((fd$ as FD).isFile)
			if (err != null) {
				return [0, 0, 0, err]
			}
		}
		while (true) {
			let [n, oobn, sysflags, err] = unix.RecvmsgInet6((fd$ as FD).Sysfd, p, oob, flags, sa6)
			if (err != null) {
				if ($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EINTR, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) {
					continue
				}
				// TODO(dfc) should n and oobn be set to 0
				if (($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EAGAIN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) && (fd$ as FD).pd.pollable()) {
					{
						err = (fd$ as FD).pd.waitRead((fd$ as FD).isFile)
						if (err == null) {
							continue
						}
					}
				}
			}
			err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).eofError(n, err) : FD.prototype.eofError.call(fd, n, err))
			return [n, oobn, sysflags, err]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Seek(offset: bigint, whence: number): globalThis.Promise<[bigint, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).incref() : FD.prototype.incref.call(fd))
			if (err != null) {
				return [0n, err]
			}
		}
		const __goscriptDeferCallee20 = $.functionValue(((__receiver) => () => __receiver.decref())($.pointerValue<FD>(fd)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "internal/poll.(*FD).decref-fm")
		__defer.defer(async () => { await __goscriptDeferCallee20() })
		return syscall.Seek($.pointerValue<FD>(fd).Sysfd, offset, whence)
	}

	public async SetBlocking(): globalThis.Promise<$.GoError> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).incref() : FD.prototype.incref.call(fd))
			if (err != null) {
				return err
			}
		}
		const __goscriptDeferCallee21 = $.functionValue(((__receiver) => () => __receiver.decref())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "internal/poll.(*FD).decref-fm")
		__defer.defer(async () => { await __goscriptDeferCallee21() })
		// Atomic store so that concurrent calls to SetBlocking
		// do not cause a race condition. isBlocking only ever goes
		// from 0 to 1 so there is no real race here.
		atomic.StoreUint32($.fieldRef((fd$ as FD)._fields, "isBlocking"), 1)
		return syscall.SetNonblock((fd$ as FD).Sysfd, false)
	}

	public async SetDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const fd: FD | $.VarRef<FD> | null = this;
		return __goscript_fd_poll_js.setDeadlineImpl(fd, $.markAsStructValue($.cloneStructValue(t)), 233)
	}

	public async SetReadDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const fd: FD | $.VarRef<FD> | null = this;
		return __goscript_fd_poll_js.setDeadlineImpl(fd, $.markAsStructValue($.cloneStructValue(t)), 114)
	}

	public async SetWriteDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const fd: FD | $.VarRef<FD> | null = this;
		return __goscript_fd_poll_js.setDeadlineImpl(fd, $.markAsStructValue($.cloneStructValue(t)), 119)
	}

	public async Shutdown(how: number): globalThis.Promise<$.GoError> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).incref() : FD.prototype.incref.call(fd))
			if (err != null) {
				return err
			}
		}
		const __goscriptDeferCallee22 = $.functionValue(((__receiver) => () => __receiver.decref())($.pointerValue<FD>(fd)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "internal/poll.(*FD).decref-fm")
		__defer.defer(async () => { await __goscriptDeferCallee22() })
		return syscall.Shutdown($.pointerValue<FD>(fd).Sysfd, how)
	}

	public WaitWrite(): $.GoError {
		const fd: FD | $.VarRef<FD> | null = this;
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		return (fd$ as FD).pd.waitWrite((fd$ as FD).isFile)
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).writeLock() : FD.prototype.writeLock.call(fd))
			if (err != null) {
				return [0, err]
			}
		}
		const __goscriptDeferCallee23 = $.functionValue(((__receiver) => () => __receiver.writeUnlock())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).writeUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee23() })
		{
			let err = (fd$ as FD).pd.prepareWrite((fd$ as FD).isFile)
			if (err != null) {
				return [0, err]
			}
		}
		let nn: number = 0
		while (true) {
			let max = $.sliceLen(p)
			if ((fd$ as FD).IsStream && ((max - nn) > 1073741824)) {
				max = nn + 1073741824
			}
			let [n, err] = await ignoringEINTRIO(syscall.Write, (fd$ as FD).Sysfd, $.goSlice(p, nn, max))
			if (n > 0) {
				if (n > (max - nn)) {
					// This can reportedly happen when using
					// some VPN software. Issue #61060.
					// If we don't check this we will panic
					// with slice bounds out of range.
					// Use a more informative panic.
					$.panic($.concatString(($.concatString(($.concatString("invalid return from write: got ", strconv.Itoa(n))), " from a write of ")), strconv.Itoa(max - nn)))
				}
				nn = nn + (n)
			}
			if (nn == $.sliceLen(p)) {
				return [nn, err]
			}
			if (($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EAGAIN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) && (fd$ as FD).pd.pollable()) {
				{
					err = (fd$ as FD).pd.waitWrite((fd$ as FD).isFile)
					if (err == null) {
						continue
					}
				}
			}
			if (err != null) {
				return [nn, err]
			}
			if (n == 0) {
				return [nn, io.ErrUnexpectedEOF]
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async WriteMsg(p: $.Slice<number>, oob: $.Slice<number>, sa: syscall.Sockaddr | null): globalThis.Promise<[number, number, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).writeLock() : FD.prototype.writeLock.call(fd))
			if (err != null) {
				return [0, 0, err]
			}
		}
		const __goscriptDeferCallee24 = $.functionValue(((__receiver) => () => __receiver.writeUnlock())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).writeUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee24() })
		{
			let err = (fd$ as FD).pd.prepareWrite((fd$ as FD).isFile)
			if (err != null) {
				return [0, 0, err]
			}
		}
		while (true) {
			let [n, err] = syscall.SendmsgN((fd$ as FD).Sysfd, p, oob, sa, 0)
			if ($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EINTR, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) {
				continue
			}
			if (($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EAGAIN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) && (fd$ as FD).pd.pollable()) {
				{
					err = (fd$ as FD).pd.waitWrite((fd$ as FD).isFile)
					if (err == null) {
						continue
					}
				}
			}
			if (err != null) {
				return [n, 0, err]
			}
			return [n, $.sliceLen(oob), err]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async WriteMsgInet4(p: $.Slice<number>, oob: $.Slice<number>, sa: syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null): globalThis.Promise<[number, number, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).writeLock() : FD.prototype.writeLock.call(fd))
			if (err != null) {
				return [0, 0, err]
			}
		}
		const __goscriptDeferCallee25 = $.functionValue(((__receiver) => () => __receiver.writeUnlock())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).writeUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee25() })
		{
			let err = (fd$ as FD).pd.prepareWrite((fd$ as FD).isFile)
			if (err != null) {
				return [0, 0, err]
			}
		}
		while (true) {
			let [n, err] = unix.SendmsgNInet4((fd$ as FD).Sysfd, p, oob, sa, 0)
			if ($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EINTR, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) {
				continue
			}
			if (($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EAGAIN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) && (fd$ as FD).pd.pollable()) {
				{
					err = (fd$ as FD).pd.waitWrite((fd$ as FD).isFile)
					if (err == null) {
						continue
					}
				}
			}
			if (err != null) {
				return [n, 0, err]
			}
			return [n, $.sliceLen(oob), err]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async WriteMsgInet6(p: $.Slice<number>, oob: $.Slice<number>, sa: syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null): globalThis.Promise<[number, number, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).writeLock() : FD.prototype.writeLock.call(fd))
			if (err != null) {
				return [0, 0, err]
			}
		}
		const __goscriptDeferCallee26 = $.functionValue(((__receiver) => () => __receiver.writeUnlock())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).writeUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee26() })
		{
			let err = (fd$ as FD).pd.prepareWrite((fd$ as FD).isFile)
			if (err != null) {
				return [0, 0, err]
			}
		}
		while (true) {
			let [n, err] = unix.SendmsgNInet6((fd$ as FD).Sysfd, p, oob, sa, 0)
			if ($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EINTR, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) {
				continue
			}
			if (($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EAGAIN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) && (fd$ as FD).pd.pollable()) {
				{
					err = (fd$ as FD).pd.waitWrite((fd$ as FD).isFile)
					if (err == null) {
						continue
					}
				}
			}
			if (err != null) {
				return [n, 0, err]
			}
			return [n, $.sliceLen(oob), err]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async WriteOnce(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).writeLock() : FD.prototype.writeLock.call(fd))
			if (err != null) {
				return [0, err]
			}
		}
		const __goscriptDeferCallee27 = $.functionValue(((__receiver) => () => __receiver.writeUnlock())($.pointerValue<FD>(fd)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).writeUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee27() })
		return await ignoringEINTRIO(syscall.Write, $.pointerValue<FD>(fd).Sysfd, p)
	}

	public async WriteTo(p: $.Slice<number>, sa: syscall.Sockaddr | null): globalThis.Promise<[number, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).writeLock() : FD.prototype.writeLock.call(fd))
			if (err != null) {
				return [0, err]
			}
		}
		const __goscriptDeferCallee28 = $.functionValue(((__receiver) => () => __receiver.writeUnlock())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).writeUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee28() })
		{
			let err = (fd$ as FD).pd.prepareWrite((fd$ as FD).isFile)
			if (err != null) {
				return [0, err]
			}
		}
		while (true) {
			let err: $.GoError = syscall.Sendto((fd$ as FD).Sysfd, p, 0, sa)
			if ($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EINTR, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) {
				continue
			}
			if (($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EAGAIN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) && (fd$ as FD).pd.pollable()) {
				{
					err = (fd$ as FD).pd.waitWrite((fd$ as FD).isFile)
					if (err == null) {
						continue
					}
				}
			}
			if (err != null) {
				return [0, err]
			}
			return [$.sliceLen(p), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async WriteToInet4(p: $.Slice<number>, sa: syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null): globalThis.Promise<[number, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).writeLock() : FD.prototype.writeLock.call(fd))
			if (err != null) {
				return [0, err]
			}
		}
		const __goscriptDeferCallee29 = $.functionValue(((__receiver) => () => __receiver.writeUnlock())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).writeUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee29() })
		{
			let err = (fd$ as FD).pd.prepareWrite((fd$ as FD).isFile)
			if (err != null) {
				return [0, err]
			}
		}
		while (true) {
			let err = unix.SendtoInet4((fd$ as FD).Sysfd, p, 0, sa)
			if ($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EINTR, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) {
				continue
			}
			if (($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EAGAIN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) && (fd$ as FD).pd.pollable()) {
				{
					err = (fd$ as FD).pd.waitWrite((fd$ as FD).isFile)
					if (err == null) {
						continue
					}
				}
			}
			if (err != null) {
				return [0, err]
			}
			return [$.sliceLen(p), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async WriteToInet6(p: $.Slice<number>, sa: syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null): globalThis.Promise<[number, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		{
			let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).writeLock() : FD.prototype.writeLock.call(fd))
			if (err != null) {
				return [0, err]
			}
		}
		const __goscriptDeferCallee30 = $.functionValue(((__receiver) => () => __receiver.writeUnlock())((fd$ as FD)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "internal/poll.(*FD).writeUnlock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee30() })
		{
			let err = (fd$ as FD).pd.prepareWrite((fd$ as FD).isFile)
			if (err != null) {
				return [0, err]
			}
		}
		while (true) {
			let err = unix.SendtoInet6((fd$ as FD).Sysfd, p, 0, sa)
			if ($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EINTR, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) {
				continue
			}
			if (($.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EAGAIN, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) && (fd$ as FD).pd.pollable()) {
				{
					err = (fd$ as FD).pd.waitWrite((fd$ as FD).isFile)
					if (err == null) {
						continue
					}
				}
			}
			if (err != null) {
				return [0, err]
			}
			return [$.sliceLen(p), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public closing(): boolean {
		const fd: FD | $.VarRef<FD> | null = this;
		return ($.uint64And(atomic.LoadUint64($.fieldRef($.pointerValue<FD>(fd).fdmu._fields, "state")), 1n)) != 0n
	}

	public async decref(): globalThis.Promise<$.GoError> {
		const fd: FD | $.VarRef<FD> | null = this;
		if ($.pointerValue<FD>(fd).fdmu.decref()) {
			return (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).destroy() : FD.prototype.destroy.call(fd))
		}
		return null
	}

	public async destroy(): globalThis.Promise<$.GoError> {
		let fd: FD | $.VarRef<FD> | null = this;
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		// Poller may want to unregister fd in readiness notification mechanism,
		// so this must be executed before CloseFunc.
		void (fd$ as FD).pd.close()

		let err = await (fd$ as FD).SysFile.destroy((fd$ as FD).Sysfd);

		;(fd$ as FD).Sysfd = -1
		__goscript_fd_mutex.runtime_Semrelease($.fieldRef((fd$ as FD)._fields, "csema"))
		return err
	}

	public eofError(n: number, err: $.GoError): $.GoError {
		const fd: FD | $.VarRef<FD> | null = this;
		if (((n == 0) && (err == null)) && $.pointerValue<FD>(fd).ZeroReadIsEOF) {
			return io.EOF
		}
		return err
	}

	public incref(): $.GoError {
		const fd: FD | $.VarRef<FD> | null = this;
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		if (!(fd$ as FD).fdmu.incref()) {
			return __goscript_fd.errClosing((fd$ as FD).isFile)
		}
		return null
	}

	public readLock(): $.GoError {
		const fd: FD | $.VarRef<FD> | null = this;
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		if (!(fd$ as FD).fdmu.rwlock(true, true)) {
			return __goscript_fd.errClosing((fd$ as FD).isFile)
		}
		return null
	}

	public async readUnlock(): globalThis.Promise<void> {
		const fd: FD | $.VarRef<FD> | null = this;
		if ($.pointerValue<FD>(fd).fdmu.rwunlock(true)) {
			await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).destroy() : FD.prototype.destroy.call(fd))
		}
	}

	public async readWriteLock(): globalThis.Promise<$.GoError> {
		const fd: FD | $.VarRef<FD> | null = this;
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		if (!(fd$ as FD).fdmu.rwlock(true, true)) {
			return __goscript_fd.errClosing((fd$ as FD).isFile)
		}
		if (!(fd$ as FD).fdmu.rwlock(false, true)) {
			if ((fd$ as FD).fdmu.rwunlock(true)) {
				await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).destroy() : FD.prototype.destroy.call(fd))
			}
			return __goscript_fd.errClosing((fd$ as FD).isFile)
		}
		return null
	}

	public async readWriteUnlock(): globalThis.Promise<void> {
		const fd: FD | $.VarRef<FD> | null = this;
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		void (fd$ as FD).fdmu.rwunlock(true)
		if ((fd$ as FD).fdmu.rwunlock(false)) {
			await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).destroy() : FD.prototype.destroy.call(fd))
		}
	}

	public async tryReadWriteLock(): globalThis.Promise<[boolean, $.GoError]> {
		const fd: FD | $.VarRef<FD> | null = this;
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		if (!(fd$ as FD).fdmu.rwlock(true, false)) {
			if ((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).closing() : FD.prototype.closing.call(fd))) {
				return [false, __goscript_fd.errClosing((fd$ as FD).isFile)]
			}
			return [false, null]
		}
		if (!(fd$ as FD).fdmu.rwlock(false, false)) {
			if ((fd$ as FD).fdmu.rwunlock(true)) {
				await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).destroy() : FD.prototype.destroy.call(fd))
			}
			if ((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).closing() : FD.prototype.closing.call(fd))) {
				return [false, __goscript_fd.errClosing((fd$ as FD).isFile)]
			}
			return [false, null]
		}
		return [true, null]
	}

	public writeLock(): $.GoError {
		const fd: FD | $.VarRef<FD> | null = this;
		const fd$: FD = fd == null ? $.pointerTarget<FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<FD>(fd)
		if (!(fd$ as FD).fdmu.rwlock(false, true)) {
			return __goscript_fd.errClosing((fd$ as FD).isFile)
		}
		return null
	}

	public async writeUnlock(): globalThis.Promise<void> {
		const fd: FD | $.VarRef<FD> | null = this;
		if ($.pointerValue<FD>(fd).fdmu.rwunlock(false)) {
			await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as FD).destroy() : FD.prototype.destroy.call(fd))
		}
	}

	public init(): any {
		return $.pointerValue<__goscript_fd_unixjs.SysFile>(this.SysFile).init()
	}

	static __typeInfo = $.registerStructType(
		"poll.FD",
		() => new FD(),
		() => [$.methodSignature("Accept", [], [/* @__PURE__ */ $.basicType("int"), "syscall.Sockaddr", /* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("Dup", [], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("Fchdir", [], ["error"], true), $.methodSignature("Fchmod", [["mode", /* @__PURE__ */ $.basicType("uint32")]], ["error"], true), $.methodSignature("Fchown", [["uid", /* @__PURE__ */ $.basicType("int")], ["gid", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("Fstat", [["s", /* @__PURE__ */ $.pointerType("syscall.Stat_t")]], ["error"], true), $.methodSignature("Fsync", [], ["error"], true), $.methodSignature("Ftruncate", [["size", /* @__PURE__ */ $.basicType("int64")]], ["error"], true), $.methodSignature("Init", [["net", /* @__PURE__ */ $.basicType("string")], ["pollable", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("Pread", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["off", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Pwrite", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["off", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("RawControl", [["f", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uintptr")], results: [] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("RawRead", [["f", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uintptr")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("RawWrite", [["f", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uintptr")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ReadDirent", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ReadFrom", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "syscall.Sockaddr", "error"], true), $.methodSignature("ReadFromInet4", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["from", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ReadFromInet6", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["from", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ReadMsg", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int"), "syscall.Sockaddr", "error"], true), $.methodSignature("ReadMsgInet4", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["flags", /* @__PURE__ */ $.basicType("int")], ["sa4", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4")]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ReadMsgInet6", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["flags", /* @__PURE__ */ $.basicType("int")], ["sa6", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6")]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Seek", [["offset", /* @__PURE__ */ $.basicType("int64")], ["whence", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int64"), "error"], true), $.methodSignature("SetBlocking", [], ["error"], true), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("Shutdown", [["how", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WaitWrite", [], ["error"], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteMsg", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", "syscall.Sockaddr"]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteMsgInet4", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4")]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteMsgInet6", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6")]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteOnce", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteTo", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", "syscall.Sockaddr"]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteToInet4", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteToInet6", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("closing", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("decref", [], ["error"], true), $.methodSignature("destroy", [], ["error"], true), $.methodSignature("eofError", [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], ["error"], true), $.methodSignature("incref", [], ["error"], true), $.methodSignature("readLock", [], ["error"], true), $.methodSignature("readUnlock", [], [], true), $.methodSignature("readWriteLock", [], ["error"], true), $.methodSignature("readWriteUnlock", [], [], true), $.methodSignature("tryReadWriteLock", [], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("writeLock", [], ["error"], true), $.methodSignature("writeUnlock", [], [], true), $.methodSignature("init", [], [], true)],
		FD,
		() => [/* @__PURE__ */ $.structField("fdmu", "poll.fdMutex", [0], 0, false, { pkgPath: "internal/poll" }), /* @__PURE__ */ $.structField("Sysfd", /* @__PURE__ */ $.basicType("int"), [1], 16, true), /* @__PURE__ */ $.structField("SysFile", "poll.SysFile", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("pd", "poll.pollDesc", [3], 32, false, { pkgPath: "internal/poll" }), /* @__PURE__ */ $.structField("csema", /* @__PURE__ */ $.basicType("uint32"), [4], 48, false, { pkgPath: "internal/poll" }), /* @__PURE__ */ $.structField("isBlocking", /* @__PURE__ */ $.basicType("uint32"), [5], 52, false, { pkgPath: "internal/poll" }), /* @__PURE__ */ $.structField("IsStream", /* @__PURE__ */ $.basicType("bool"), [6], 56, true), /* @__PURE__ */ $.structField("ZeroReadIsEOF", /* @__PURE__ */ $.basicType("bool"), [7], 57, true), /* @__PURE__ */ $.structField("isFile", /* @__PURE__ */ $.basicType("bool"), [8], 58, false, { pkgPath: "internal/poll" })]
	)
}

export const maxRW: number = 1073741824

export let dupCloexecUnsupported: $.VarRef<atomic.Bool> = $.varRef($.markAsStructValue(new atomic.Bool()))

export function __goscript_set_dupCloexecUnsupported(__goscriptValue: atomic.Bool): void {
	$.assignStruct(dupCloexecUnsupported.value, __goscriptValue)
}

export async function DupCloseOnExec(fd: number): globalThis.Promise<[number, string, $.GoError]> {
	if (((1 as number) != 0) && !dupCloexecUnsupported.value.Load()) {
		let [r0, err] = unix.Fcntl(fd, 1, 0)
		if (err == null) {
			return [r0, "", null]
		}
		{
			let __goscriptSwitch1 = err
			switch ((true as boolean)) {
				case $.comparableEqual(__goscriptSwitch1, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))):
				case $.comparableEqual(__goscriptSwitch1, $.namedValueInterfaceValue<$.GoError>(syscall.ENOSYS, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))):
				{
					dupCloexecUnsupported.value.Store(true)
					break
				}
				default:
				{
					return [-1, "fcntl", err]
					break
				}
			}
		}
	}
	return __goscript_fd_unixjs.dupCloseOnExecOld(fd)
}

export async function ignoringEINTRIO(fn: ((fd: number, p: $.Slice<number>) => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null, fd: number, p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
	while (true) {
		let [n, err] = await fn!(fd, p)
		if (!$.comparableEqual(err, $.namedValueInterfaceValue<$.GoError>(syscall.EINTR, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) {
			return [n, err]
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int"), zero: () => 0 }})
}

var __goscriptAwait: any
