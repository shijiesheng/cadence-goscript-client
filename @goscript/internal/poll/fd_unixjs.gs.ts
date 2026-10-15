// Generated file based on fd_unixjs.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as time from "@goscript/time/index.js"

import * as __goscript_fd_fsync_posix from "./fd_fsync_posix.gs.ts"

import * as __goscript_fd_mutex from "./fd_mutex.gs.ts"

import * as __goscript_fd_poll_js from "./fd_poll_js.gs.ts"

import * as __goscript_fd_posix from "./fd_posix.gs.ts"

import * as __goscript_fd_unix from "./fd_unix.gs.ts"

import * as __goscript_hook_unix from "./hook_unix.gs.ts"
import "@goscript/syscall/index.js"
import "@goscript/sync/index.js"
import "./fd_fsync_posix.gs.ts"
import "./fd_mutex.gs.ts"
import "./fd_poll_js.gs.ts"
import "./fd_posix.gs.ts"
import "./fd_unix.gs.ts"
import "./hook_unix.gs.ts"

$.registerTypePackagePath("internal/poll", ["poll.SysFile"])

export class SysFile {
	// Writev cache.
	public get iovecs(): $.VarRef<$.Slice<syscall.Iovec>> | null {
		return this._fields.iovecs
	}

	public set iovecs(value: $.VarRef<$.Slice<syscall.Iovec>> | null) {
		this._fields.iovecs = value
	}

	public _fields: {
		iovecs: $.VarRef<$.Slice<syscall.Iovec>> | null
	}

	constructor(init?: Partial<{iovecs?: $.VarRef<$.Slice<syscall.Iovec>> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			iovecs: init?.iovecs ?? (null! as $.VarRef<$.Slice<syscall.Iovec>> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SysFile {
		return new SysFile(this, true)
	}

	public __goscriptAssign(source: SysFile): void {
		const target = this._fields
		const values = source._fields
		target.iovecs = values.iovecs
	}

	public async destroy(fd: number): globalThis.Promise<$.GoError> {
		const s: SysFile | $.VarRef<SysFile> | null = this;
		// We don't use ignoringEINTR here because POSIX does not define
		// whether the descriptor is closed if close returns EINTR.
		// If the descriptor is indeed closed, using a loop would race
		// with some other goroutine opening a new descriptor.
		// (The Linux kernel guarantees that it is closed on an EINTR error.)
		return __goscript_hook_unix.CloseFunc!(fd)
	}

	public init(): void {
		const s: SysFile | $.VarRef<SysFile> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"poll.SysFile",
		() => new SysFile(),
		() => [$.methodSignature("destroy", [["fd", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("init", [], [], true)],
		SysFile,
		() => [/* @__PURE__ */ $.structField("iovecs", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType("syscall.Iovec")), [0], 0, false, { pkgPath: "internal/poll" })]
	)
}

export async function dupCloseOnExecOld(fd: number): globalThis.Promise<[number, string, $.GoError]> {
	using __defer = new $.DisposableStack()
	await $.pointerValue<sync.RWMutex>(syscall.ForkLock).RLock()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<sync.RWMutex>(syscall.ForkLock)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })
	let [newfd, err] = syscall.Dup(fd)
	if (err != null) {
		return [-1, "dup", err]
	}
	syscall.CloseOnExec(newfd)
	return [newfd, "", null]
}

var __goscriptAwait: any
