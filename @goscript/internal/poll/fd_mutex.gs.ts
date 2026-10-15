// Generated file based on fd_mutex.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as syscall from "@goscript/syscall/index.js"

import type * as time from "@goscript/time/index.js"

import * as __goscript_fd from "./fd.gs.ts"

import * as __goscript_fd_fsync_posix from "./fd_fsync_posix.gs.ts"

import * as __goscript_fd_poll_js from "./fd_poll_js.gs.ts"

import * as __goscript_fd_posix from "./fd_posix.gs.ts"

import * as __goscript_fd_unix from "./fd_unix.gs.ts"

import * as __goscript_fd_unixjs from "./fd_unixjs.gs.ts"
import "@goscript/sync/atomic/index.js"
import "@goscript/syscall/index.js"
import "./fd.gs.ts"
import "./fd_fsync_posix.gs.ts"
import "./fd_poll_js.gs.ts"
import "./fd_posix.gs.ts"
import "./fd_unix.gs.ts"
import "./fd_unixjs.gs.ts"

$.registerTypePackagePath("internal/poll", ["poll.fdMutex"])

export class fdMutex {
	public get state(): bigint {
		return this._fields.state
	}

	public set state(value: bigint) {
		this._fields.state = value
	}

	public get rsema(): number {
		return this._fields.rsema
	}

	public set rsema(value: number) {
		this._fields.rsema = value
	}

	public get wsema(): number {
		return this._fields.wsema
	}

	public set wsema(value: number) {
		this._fields.wsema = value
	}

	public _fields: {
		state: bigint
		rsema: number
		wsema: number
	}

	constructor(init?: Partial<{state?: bigint, rsema?: number, wsema?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (0n as bigint),
			rsema: init?.rsema ?? (0 as number),
			wsema: init?.wsema ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fdMutex {
		return new fdMutex(this, true)
	}

	public __goscriptAssign(source: fdMutex): void {
		const target = this._fields
		const values = source._fields
		target.state = values.state
		target.rsema = values.rsema
		target.wsema = values.wsema
	}

	public decref(): boolean {
		const mu: fdMutex | $.VarRef<fdMutex> | null = this;
		const mu$: fdMutex = mu == null ? $.pointerTarget<fdMutex>(mu) : (mu as any).__isVarRef === true ? (mu as any).value : (mu as any).__goValue === undefined ? (mu as any) : $.pointerTarget<fdMutex>(mu)
		while (true) {
			let old = atomic.LoadUint64($.fieldRef((mu$ as fdMutex)._fields, "state"))
			if (($.uint64And(old, 8388600n)) == 0n) {
				$.panic("inconsistent poll.fdMutex")
			}
			let _new = $.uint64Sub(old, 8n)
			if (atomic.CompareAndSwapUint64($.fieldRef((mu$ as fdMutex)._fields, "state"), old, _new)) {
				return ($.uint64And(_new, 8388601n)) == 1n
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public incref(): boolean {
		const mu: fdMutex | $.VarRef<fdMutex> | null = this;
		const mu$: fdMutex = mu == null ? $.pointerTarget<fdMutex>(mu) : (mu as any).__isVarRef === true ? (mu as any).value : (mu as any).__goValue === undefined ? (mu as any) : $.pointerTarget<fdMutex>(mu)
		while (true) {
			let old = atomic.LoadUint64($.fieldRef((mu$ as fdMutex)._fields, "state"))
			if (($.uint64And(old, 1n)) != 0n) {
				return false
			}
			let _new = $.uint64Add(old, 8n)
			if (($.uint64And(_new, 8388600n)) == 0n) {
				$.panic("too many concurrent operations on a single file or socket (max 1048575)")
			}
			if (atomic.CompareAndSwapUint64($.fieldRef((mu$ as fdMutex)._fields, "state"), old, _new)) {
				return true
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public increfAndClose(): boolean {
		const mu: fdMutex | $.VarRef<fdMutex> | null = this;
		const mu$: fdMutex = mu == null ? $.pointerTarget<fdMutex>(mu) : (mu as any).__isVarRef === true ? (mu as any).value : (mu as any).__goValue === undefined ? (mu as any) : $.pointerTarget<fdMutex>(mu)
		while (true) {
			let old = atomic.LoadUint64($.fieldRef((mu$ as fdMutex)._fields, "state"))
			if (($.uint64And(old, 1n)) != 0n) {
				return false
			}
			// Mark as closed and acquire a reference.
			let _new = $.uint64Add(($.uint64Or(old, 1n)), 8n)
			if (($.uint64And(_new, 8388600n)) == 0n) {
				$.panic("too many concurrent operations on a single file or socket (max 1048575)")
			}
			// Remove all read and write waiters.
			_new = $.uint64AndNot(_new, 9223372036846387200n)
			if (atomic.CompareAndSwapUint64($.fieldRef((mu$ as fdMutex)._fields, "state"), old, _new)) {
				// Wake all read and write waiters,
				// they will observe closed flag after wakeup.
				while (($.uint64And(old, 8796084633600n)) != 0n) {
					old = $.uint64Sub(old, 8388608n)
					runtime_Semrelease($.fieldRef((mu$ as fdMutex)._fields, "rsema"))
				}
				while (($.uint64And(old, 9223363240761753600n)) != 0n) {
					old = $.uint64Sub(old, 8796093022208n)
					runtime_Semrelease($.fieldRef((mu$ as fdMutex)._fields, "wsema"))
				}
				return true
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public rwlock(read: boolean, wait: boolean): boolean {
		const mu: fdMutex | $.VarRef<fdMutex> | null = this;
		const mu$: fdMutex = mu == null ? $.pointerTarget<fdMutex>(mu) : (mu as any).__isVarRef === true ? (mu as any).value : (mu as any).__goValue === undefined ? (mu as any) : $.pointerTarget<fdMutex>(mu)
		let mutexBit: bigint = 0n
		let mutexWait: bigint = 0n
		let mutexMask: bigint = 0n
		let mutexSema: $.VarRef<number> | null = null! as $.VarRef<number> | null
		if (read) {
			mutexBit = 2n
			mutexWait = 8388608n
			mutexMask = 8796084633600n
			mutexSema = $.fieldRef((mu$ as fdMutex)._fields, "rsema")
		} else {
			mutexBit = 4n
			mutexWait = 8796093022208n
			mutexMask = 9223363240761753600n
			mutexSema = $.fieldRef((mu$ as fdMutex)._fields, "wsema")
		}
		while (true) {
			let old = atomic.LoadUint64($.fieldRef((mu$ as fdMutex)._fields, "state"))
			if (($.uint64And(old, 1n)) != 0n) {
				return false
			}
			let _new: bigint = 0n
			if (($.uint64And(old, mutexBit)) == 0n) {
				// Lock is free, acquire it.
				_new = $.uint64Add(($.uint64Or(old, mutexBit)), 8n)
				if (($.uint64And(_new, 8388600n)) == 0n) {
					$.panic("too many concurrent operations on a single file or socket (max 1048575)")
				}
			} else {
				// Wait for lock.
				if (!wait) {
					return false
				}
				_new = $.uint64Add(old, mutexWait)
				if (($.uint64And(_new, mutexMask)) == 0n) {
					$.panic("too many concurrent operations on a single file or socket (max 1048575)")
				}
			}
			if (atomic.CompareAndSwapUint64($.fieldRef((mu$ as fdMutex)._fields, "state"), old, _new)) {
				if (($.uint64And(old, mutexBit)) == 0n) {
					return true
				}
				runtime_Semacquire(mutexSema)
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public rwunlock(read: boolean): boolean {
		const mu: fdMutex | $.VarRef<fdMutex> | null = this;
		const mu$: fdMutex = mu == null ? $.pointerTarget<fdMutex>(mu) : (mu as any).__isVarRef === true ? (mu as any).value : (mu as any).__goValue === undefined ? (mu as any) : $.pointerTarget<fdMutex>(mu)
		let mutexBit: bigint = 0n
		let mutexWait: bigint = 0n
		let mutexMask: bigint = 0n
		let mutexSema: $.VarRef<number> | null = null! as $.VarRef<number> | null
		if (read) {
			mutexBit = 2n
			mutexWait = 8388608n
			mutexMask = 8796084633600n
			mutexSema = $.fieldRef((mu$ as fdMutex)._fields, "rsema")
		} else {
			mutexBit = 4n
			mutexWait = 8796093022208n
			mutexMask = 9223363240761753600n
			mutexSema = $.fieldRef((mu$ as fdMutex)._fields, "wsema")
		}
		while (true) {
			let old = atomic.LoadUint64($.fieldRef((mu$ as fdMutex)._fields, "state"))
			if ((($.uint64And(old, mutexBit)) == 0n) || (($.uint64And(old, 8388600n)) == 0n)) {
				$.panic("inconsistent poll.fdMutex")
			}
			// Drop lock, drop reference and wake read waiter if present.
			let _new = $.uint64Sub(($.uint64AndNot(old, mutexBit)), 8n)
			if (($.uint64And(old, mutexMask)) != 0n) {
				_new = $.uint64Sub(_new, mutexWait)
			}
			if (atomic.CompareAndSwapUint64($.fieldRef((mu$ as fdMutex)._fields, "state"), old, _new)) {
				if (($.uint64And(old, mutexMask)) != 0n) {
					runtime_Semrelease(mutexSema)
				}
				return ($.uint64And(_new, 8388601n)) == 1n
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"poll.fdMutex",
		() => new fdMutex(),
		() => [$.methodSignature("decref", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("incref", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("increfAndClose", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("rwlock", [["read", /* @__PURE__ */ $.basicType("bool")], ["wait", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("rwunlock", [["read", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("bool")], true)],
		fdMutex,
		() => [/* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "internal/poll" }), /* @__PURE__ */ $.structField("rsema", /* @__PURE__ */ $.basicType("uint32"), [1], 8, false, { pkgPath: "internal/poll" }), /* @__PURE__ */ $.structField("wsema", /* @__PURE__ */ $.basicType("uint32"), [2], 12, false, { pkgPath: "internal/poll" })]
	)
}

export const mutexClosed: number = 1

export const mutexRLock: number = 2

export const mutexWLock: number = 4

export const mutexRef: number = 8

export const mutexRefMask: number = 8388600

export const mutexRWait: number = 8388608

export const mutexRMask: number = 8796084633600

export const mutexWWait: number = 8796093022208

export const mutexWMask: number = 9223363240761753600

export const readlock: boolean = true

export const writeLock: boolean = false

export const waitLock: boolean = true

export const tryLock: boolean = false

export const overflowMsg: string = "too many concurrent operations on a single file or socket (max 1048575)"

export function runtime_Semacquire(sema: $.VarRef<number> | null): void {
}

export function runtime_Semrelease(sema: $.VarRef<number> | null): void {
}
