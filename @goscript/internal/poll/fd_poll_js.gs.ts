// Generated file based on fd_poll_js.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_fd from "./fd.gs.ts"

import * as __goscript_fd_fsync_posix from "./fd_fsync_posix.gs.ts"

import * as __goscript_fd_mutex from "./fd_mutex.gs.ts"

import * as __goscript_fd_posix from "./fd_posix.gs.ts"

import * as __goscript_fd_unix from "./fd_unix.gs.ts"

import * as __goscript_fd_unixjs from "./fd_unixjs.gs.ts"
import "@goscript/syscall/index.js"
import "@goscript/time/index.js"
import "./fd.gs.ts"
import "./fd_fsync_posix.gs.ts"
import "./fd_mutex.gs.ts"
import "./fd_posix.gs.ts"
import "./fd_unix.gs.ts"
import "./fd_unixjs.gs.ts"

$.registerTypePackagePath("internal/poll", ["poll.pollDesc"])

export class pollDesc {
	public get fd(): __goscript_fd_unix.FD | $.VarRef<__goscript_fd_unix.FD> | null {
		return this._fields.fd
	}

	public set fd(value: __goscript_fd_unix.FD | $.VarRef<__goscript_fd_unix.FD> | null) {
		this._fields.fd = value
	}

	public get closing(): boolean {
		return this._fields.closing
	}

	public set closing(value: boolean) {
		this._fields.closing = value
	}

	public _fields: {
		fd: __goscript_fd_unix.FD | $.VarRef<__goscript_fd_unix.FD> | null
		closing: boolean
	}

	constructor(init?: Partial<{fd?: __goscript_fd_unix.FD | $.VarRef<__goscript_fd_unix.FD> | null, closing?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			fd: init?.fd ?? (null! as __goscript_fd_unix.FD | $.VarRef<__goscript_fd_unix.FD> | null),
			closing: init?.closing ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pollDesc {
		return new pollDesc(this, true)
	}

	public __goscriptAssign(source: pollDesc): void {
		const target = this._fields
		const values = source._fields
		target.fd = values.fd
		target.closing = values.closing
	}

	public close(): void {
		const pd: pollDesc | $.VarRef<pollDesc> | null = this;
	}

	public evict(): void {
		let pd: pollDesc | $.VarRef<pollDesc> | null = this;
		const pd$: pollDesc = pd == null ? $.pointerTarget<pollDesc>(pd) : (pd as any).__isVarRef === true ? (pd as any).value : (pd as any).__goValue === undefined ? (pd as any) : $.pointerTarget<pollDesc>(pd);
		;(pd$ as pollDesc).closing = true
		if ((pd$ as pollDesc).fd != null) {
			syscall.StopIO($.pointerValue<__goscript_fd_unix.FD>((pd$ as pollDesc).fd).Sysfd)
		}
	}

	public init(fd: __goscript_fd_unix.FD | $.VarRef<__goscript_fd_unix.FD> | null): $.GoError {
		let pd: pollDesc | $.VarRef<pollDesc> | null = this;
		$.pointerValue<pollDesc>(pd).fd = fd
		return null
	}

	public pollable(): boolean {
		const pd: pollDesc | $.VarRef<pollDesc> | null = this;
		return true
	}

	public prepare(mode: number, isFile: boolean): $.GoError {
		const pd: pollDesc | $.VarRef<pollDesc> | null = this;
		if ($.pointerValue<pollDesc>(pd).closing) {
			return __goscript_fd.errClosing(isFile)
		}
		return null
	}

	public prepareRead(isFile: boolean): $.GoError {
		const pd: pollDesc | $.VarRef<pollDesc> | null = this;
		return (pd !== null && (pd as any).__isVarRef !== true && (pd as any).__goValue === undefined ? ((pd as any) as pollDesc).prepare(114, isFile) : pollDesc.prototype.prepare.call(pd, 114, isFile))
	}

	public prepareWrite(isFile: boolean): $.GoError {
		const pd: pollDesc | $.VarRef<pollDesc> | null = this;
		return (pd !== null && (pd as any).__isVarRef !== true && (pd as any).__goValue === undefined ? ((pd as any) as pollDesc).prepare(119, isFile) : pollDesc.prototype.prepare.call(pd, 119, isFile))
	}

	public wait(mode: number, isFile: boolean): $.GoError {
		const pd: pollDesc | $.VarRef<pollDesc> | null = this;
		if ($.pointerValue<pollDesc>(pd).closing) {
			return __goscript_fd.errClosing(isFile)
		}
		if (isFile) {
			return null
		}
		return __goscript_fd.ErrDeadlineExceeded
	}

	public waitCanceled(mode: number): void {
		const pd: pollDesc | $.VarRef<pollDesc> | null = this;
	}

	public waitRead(isFile: boolean): $.GoError {
		const pd: pollDesc | $.VarRef<pollDesc> | null = this;
		return (pd !== null && (pd as any).__isVarRef !== true && (pd as any).__goValue === undefined ? ((pd as any) as pollDesc).wait(114, isFile) : pollDesc.prototype.wait.call(pd, 114, isFile))
	}

	public waitWrite(isFile: boolean): $.GoError {
		const pd: pollDesc | $.VarRef<pollDesc> | null = this;
		return (pd !== null && (pd as any).__isVarRef !== true && (pd as any).__goValue === undefined ? ((pd as any) as pollDesc).wait(119, isFile) : pollDesc.prototype.wait.call(pd, 119, isFile))
	}

	static __typeInfo = $.registerStructType(
		"poll.pollDesc",
		() => new pollDesc(),
		() => [$.methodSignature("close", [], [], true), $.methodSignature("evict", [], [], true), $.methodSignature("init", [["fd", /* @__PURE__ */ $.pointerType("poll.FD")]], ["error"], true), $.methodSignature("pollable", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("prepare", [["mode", /* @__PURE__ */ $.basicType("int")], ["isFile", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("prepareRead", [["isFile", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("prepareWrite", [["isFile", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("wait", [["mode", /* @__PURE__ */ $.basicType("int")], ["isFile", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("waitCanceled", [["mode", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("waitRead", [["isFile", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("waitWrite", [["isFile", /* @__PURE__ */ $.basicType("bool")]], ["error"], true)],
		pollDesc,
		() => [/* @__PURE__ */ $.structField("fd", /* @__PURE__ */ $.pointerType("poll.FD"), [0], 0, false, { pkgPath: "internal/poll" }), /* @__PURE__ */ $.structField("closing", /* @__PURE__ */ $.basicType("bool"), [1], 8, false, { pkgPath: "internal/poll" })]
	)
}

export async function setDeadlineImpl(fd: __goscript_fd_unix.FD | $.VarRef<__goscript_fd_unix.FD> | null, t: time.Time, mode: number): globalThis.Promise<$.GoError> {
	const fd$: __goscript_fd_unix.FD = fd == null ? $.pointerTarget<__goscript_fd_unix.FD>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<__goscript_fd_unix.FD>(fd)
	let d = $.markAsStructValue($.cloneStructValue(t)).UnixNano()
	if ($.markAsStructValue($.cloneStructValue(t)).IsZero()) {
		d = 0n
	}
	{
		let err = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as __goscript_fd_unix.FD).incref() : __goscript_fd_unix.FD.prototype.incref.call(fd))
		if (err != null) {
			return err
		}
	}
	switch (mode) {
		case 114:
		{
			syscall.SetReadDeadline((fd$ as __goscript_fd_unix.FD).Sysfd, d)
			break
		}
		case 119:
		{
			syscall.SetWriteDeadline((fd$ as __goscript_fd_unix.FD).Sysfd, d)
			break
		}
		case 114 + 119:
		{
			syscall.SetReadDeadline((fd$ as __goscript_fd_unix.FD).Sysfd, d)
			syscall.SetWriteDeadline((fd$ as __goscript_fd_unix.FD).Sysfd, d)
			break
		}
	}
	await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as __goscript_fd_unix.FD).decref() : __goscript_fd_unix.FD.prototype.decref.call(fd))
	return null
}

export function IsPollDescriptor(fd: number): boolean {
	return false
}
