// Generated file based on semaphore.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"
import "@goscript/context/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"

$.registerTypePackagePath("github.com/marusama/semaphore/v2", ["semaphore.Semaphore", "semaphore.semaphore"])

export type Semaphore = {
	Acquire(ctx: context.Context | null, n: number): $.GoError | globalThis.Promise<$.GoError>
	GetCount(): number
	GetLimit(): number
	Release(n: number): number | globalThis.Promise<number>
	SetLimit(limit: number): void
	TryAcquire(n: number): boolean
}

$.registerInterfaceType(
	"semaphore.Semaphore",
	null,
	[$.methodSignature("Acquire", [["ctx", "context.Context"], ["n", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("GetCount", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("GetLimit", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Release", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("SetLimit", [["limit", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("TryAcquire", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")])]
);

export class semaphore {
	// state holds limit and count in one 64 bits unsigned integer
	//
	//                            state (64 bits)
	// +-----------------------------------------------------------------+
	//      limit (high 32 bits)                 count (low 32 bits)
	// +--------------------------------|--------------------------------+
	public get state(): bigint {
		return this._fields.state
	}

	public set state(value: bigint) {
		this._fields.state = value
	}

	// broadcast fields
	public get lock(): sync.RWMutex {
		return this._fields.lock
	}

	public set lock(value: sync.RWMutex) {
		this._fields.lock = value
	}

	public get broadcastCh(): $.Channel<{}> | null {
		return this._fields.broadcastCh
	}

	public set broadcastCh(value: $.Channel<{}> | null) {
		this._fields.broadcastCh = value
	}

	public _fields: {
		state: bigint
		lock: sync.RWMutex
		broadcastCh: $.Channel<{}> | null
	}

	constructor(init?: Partial<{state?: bigint, lock?: sync.RWMutex, broadcastCh?: $.Channel<{}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (0n as bigint),
			lock: init?.lock ? $.markAsStructValue($.cloneStructValue(init.lock)) : $.markAsStructValue(new sync.RWMutex()),
			broadcastCh: init?.broadcastCh ?? (null! as $.Channel<{}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): semaphore {
		return new semaphore(this, true)
	}

	public __goscriptAssign(source: semaphore): void {
		const target = this._fields
		const values = source._fields
		target.state = values.state
		$.assignStruct(target.lock, values.lock)
		target.broadcastCh = values.broadcastCh
	}

	public async Acquire(ctx: context.Context | null, n: number): globalThis.Promise<$.GoError> {
		const s: semaphore | $.VarRef<semaphore> | null = this;
		const s$: semaphore = s == null ? $.pointerTarget<semaphore>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<semaphore>(s)
		if (n <= 0) {
			$.panic("n must be positive number")
		}
		let ctxDoneCh: $.Channel<{}> | null = null! as $.Channel<{}> | null
		if (ctx != null) {
			ctxDoneCh = ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null)
		}
		while (true) {
			// check if context is done
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, $.GoError>([
				{
					id: 0,
					isSend: false,
					channel: ctxDoneCh,
					onSelected: async (__goscriptSelect0Result) => {
						return (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err()
					}
				},
				{
					id: -1,
					isSend: false,
					channel: null,
				}
			], true)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}

			// get current semaphore count and limit
			let state = atomic.LoadUint64($.fieldRef((s$ as semaphore)._fields, "state"))
			let count = $.uint64And(state, 4294967295n)
			let limit = $.uint64Shr(state, 32n)

			// new count
			let newCount = $.uint64Add(count, $.uint64(n))

			if (newCount <= limit) {
				if (atomic.CompareAndSwapUint64($.fieldRef((s$ as semaphore)._fields, "state"), state, $.uint64Add(($.uint64Mul(limit, (2 ** 32))), newCount))) {
					// acquired
					return null
				}

				// CAS failed, try again
				continue
			} else {
				// semaphore is full, let's wait
				await (s$ as semaphore).lock.RLock()
				let broadcastCh: $.Channel<{}> | null = (s$ as semaphore).broadcastCh
				void (s$ as semaphore).lock.RUnlock()

				// ensure that the state is the same as when we first checked; this
				// ensures that the broadcastCh will eventually be closed by a Release.
				if (atomic.LoadUint64($.fieldRef((s$ as semaphore)._fields, "state")) != state) {
					continue
				}

				const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, $.GoError>([
					{
						id: 0,
						isSend: false,
						channel: ctxDoneCh,
						onSelected: async (__goscriptSelect1Result) => {
							return (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err()
						}
					},
					{
						id: 1,
						isSend: false,
						channel: broadcastCh,
					}
				], false)
				if (__goscriptSelect1HasReturn) {
					return __goscriptSelect1Value
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public GetCount(): number {
		const s: semaphore | $.VarRef<semaphore> | null = this;
		let state = atomic.LoadUint64($.fieldRef($.pointerValue<semaphore>(s)._fields, "state"))
		return $.int($.uint64And(state, 4294967295n))
	}

	public GetLimit(): number {
		const s: semaphore | $.VarRef<semaphore> | null = this;
		let state = atomic.LoadUint64($.fieldRef($.pointerValue<semaphore>(s)._fields, "state"))
		return $.int($.uint64Shr(state, 32n))
	}

	public async Release(n: number): globalThis.Promise<number> {
		let s: semaphore | $.VarRef<semaphore> | null = this;
		const s$: semaphore = s == null ? $.pointerTarget<semaphore>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<semaphore>(s)
		if (n <= 0) {
			$.panic("n must be positive number")
		}
		while (true) {
			// get current semaphore count and limit
			let state = atomic.LoadUint64($.fieldRef((s$ as semaphore)._fields, "state"))
			let count = $.uint64And(state, 4294967295n)

			if (count < $.uint64(n)) {
				$.panic("semaphore release without acquire")
			}

			// new count
			let newCount = $.uint64Sub(count, $.uint64(n))

			if (atomic.CompareAndSwapUint64($.fieldRef((s$ as semaphore)._fields, "state"), state, $.uint64Add(($.uint64And(state, 18446744069414584320n)), newCount))) {

				let newBroadcastCh: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
				await (s$ as semaphore).lock.Lock()
				let oldBroadcastCh: $.Channel<{}> | null = (s$ as semaphore).broadcastCh;
				;(s$ as semaphore).broadcastCh = newBroadcastCh
				void (s$ as semaphore).lock.Unlock()
				// send broadcast signal
				oldBroadcastCh!.close()

				return $.int(count)
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async SetLimit(limit: number): globalThis.Promise<void> {
		let s: semaphore | $.VarRef<semaphore> | null = this;
		const s$: semaphore = s == null ? $.pointerTarget<semaphore>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<semaphore>(s)
		if (limit < 0) {
			$.panic("semaphore limit must not be negative")
		}
		while (true) {
			let state = atomic.LoadUint64($.fieldRef((s$ as semaphore)._fields, "state"))
			if (atomic.CompareAndSwapUint64($.fieldRef((s$ as semaphore)._fields, "state"), state, $.uint64Add(($.uint64Mul(limit, (2 ** 32))), ($.uint64And(state, 4294967295n))))) {
				let newBroadcastCh: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
				await (s$ as semaphore).lock.Lock()
				let oldBroadcastCh: $.Channel<{}> | null = (s$ as semaphore).broadcastCh;
				;(s$ as semaphore).broadcastCh = newBroadcastCh
				void (s$ as semaphore).lock.Unlock()

				// send broadcast signal
				oldBroadcastCh!.close()
				return
			}
		}
	}

	public TryAcquire(n: number): boolean {
		const s: semaphore | $.VarRef<semaphore> | null = this;
		const s$: semaphore = s == null ? $.pointerTarget<semaphore>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<semaphore>(s)
		if (n <= 0) {
			$.panic("n must be positive number")
		}

		while (true) {
			// get current semaphore count and limit
			let state = atomic.LoadUint64($.fieldRef((s$ as semaphore)._fields, "state"))
			let count = $.uint64And(state, 4294967295n)
			let limit = $.uint64Shr(state, 32n)

			// new count
			let newCount = $.uint64Add(count, $.uint64(n))

			if (newCount <= limit) {
				if (atomic.CompareAndSwapUint64($.fieldRef((s$ as semaphore)._fields, "state"), state, $.uint64Add(($.uint64Mul(limit, (2 ** 32))), newCount))) {
					// acquired
					return true
				}

				// CAS failed, try again
				continue
			}

			// semaphore is full
			return false
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"semaphore.semaphore",
		() => new semaphore(),
		() => [$.methodSignature("Acquire", [["ctx", "context.Context"], ["n", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("GetCount", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("GetLimit", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Release", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("SetLimit", [["limit", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("TryAcquire", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true)],
		semaphore,
		() => [/* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "github.com/marusama/semaphore/v2" }), /* @__PURE__ */ $.structField("lock", "sync.RWMutex", [1], 8, false, { pkgPath: "github.com/marusama/semaphore/v2" }), /* @__PURE__ */ $.structField("broadcastCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [2], 32, false, { pkgPath: "github.com/marusama/semaphore/v2" })]
	)
}

export function New(limit: number): Semaphore | null {
	if (limit < 0) {
		$.panic("semaphore limit must not be negative")
	}
	let broadcastCh: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
	return $.interfaceValue<Semaphore | null>(new semaphore({state: $.uint64Mul(limit, (2 ** 32)), broadcastCh: broadcastCh}), "*semaphore.semaphore", /* @__PURE__ */ $.pointerType("semaphore.semaphore"))
}

var __goscriptAwait: any
