// Generated file based on flowcontrol.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_defaults from "./defaults.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "./defaults.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/transport", ["transport.writeQuota", "transport.trInFlow", "transport.inFlow"])

export class writeQuota {
	public get quota(): number {
		return this._fields.quota
	}

	public set quota(value: number) {
		this._fields.quota = value
	}

	// get waits on read from when quota goes less than or equal to zero.
	// replenish writes on it when quota goes positive again.
	public get ch(): $.Channel<{}> | null {
		return this._fields.ch
	}

	public set ch(value: $.Channel<{}> | null) {
		this._fields.ch = value
	}

	// done is triggered in error case.
	public get done(): $.Channel<{}> | null {
		return this._fields.done
	}

	public set done(value: $.Channel<{}> | null) {
		this._fields.done = value
	}

	// replenish is called by loopyWriter to give quota back to.
	// It is implemented as a field so that it can be updated
	// by tests.
	public get replenish(): ((n: number) => void) | null {
		return this._fields.replenish
	}

	public set replenish(value: ((n: number) => void) | null) {
		this._fields.replenish = value
	}

	public _fields: {
		quota: number
		ch: $.Channel<{}> | null
		done: $.Channel<{}> | null
		replenish: ((n: number) => void) | null
	}

	constructor(init?: Partial<{quota?: number, ch?: $.Channel<{}> | null, done?: $.Channel<{}> | null, replenish?: ((n: number) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			quota: init?.quota ?? (0 as number),
			ch: init?.ch ?? (null! as $.Channel<{}> | null),
			done: init?.done ?? (null! as $.Channel<{}> | null),
			replenish: init?.replenish ?? (null! as ((n: number) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): writeQuota {
		return new writeQuota(this, true)
	}

	public __goscriptAssign(source: writeQuota): void {
		const target = this._fields
		const values = source._fields
		target.quota = values.quota
		target.ch = values.ch
		target.done = values.done
		target.replenish = values.replenish
	}

	public async ["get"](sz: number): globalThis.Promise<$.GoError> {
		const w: writeQuota | $.VarRef<writeQuota> | null = this;
		const w$: writeQuota = w == null ? $.pointerTarget<writeQuota>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<writeQuota>(w)
		while (true) {
			if (atomic.LoadInt32($.fieldRef((w$ as writeQuota)._fields, "quota")) > 0) {
				atomic.AddInt32($.fieldRef((w$ as writeQuota)._fields, "quota"), $.int(-sz, 32))
				return null
			}
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, any>([
				{
					id: 0,
					isSend: false,
					channel: (w$ as writeQuota).ch,
					onSelected: async (__goscriptSelect0Result) => {
						return __goscriptSelect0Result
					}
				},
				{
					id: 1,
					isSend: false,
					channel: (w$ as writeQuota).done,
					onSelected: async (__goscriptSelect0Result) => {
						return __goscriptSelect0Result
					}
				}
			], false)
			switch (__goscriptSelect0Value?.id) {
				case 0:
					{
						const __goscriptSelect0Result = __goscriptSelect0Value
						continue
						break
					}
				case 1:
					{
						const __goscriptSelect0Result = __goscriptSelect0Value
						return __goscript_transport.errStreamDone
						break
					}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async realReplenish(n: number): globalThis.Promise<void> {
		const w: writeQuota | $.VarRef<writeQuota> | null = this;
		const w$: writeQuota = w == null ? $.pointerTarget<writeQuota>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<writeQuota>(w)
		let sz = $.int(n, 32)
		let a = atomic.AddInt32($.fieldRef((w$ as writeQuota)._fields, "quota"), sz)
		let b = $.int(((a - sz) | 0), 32)
		if ((b <= 0) && (a > 0)) {
			const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: true,
					channel: (w$ as writeQuota).ch,
					value: {},
				},
				{
					id: -1,
					isSend: false,
					channel: null,
				}
			], true)
			if (__goscriptSelect1HasReturn) {
				return __goscriptSelect1Value
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"transport.writeQuota",
		() => new writeQuota(),
		() => [$.methodSignature("get", [["sz", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("realReplenish", [["n", /* @__PURE__ */ $.basicType("int")]], [], true)],
		writeQuota,
		() => [/* @__PURE__ */ $.structField("quota", /* @__PURE__ */ $.basicType("int32"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("ch", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), [2], 16, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("replenish", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo), [3], 24, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class trInFlow {
	public get limit(): number {
		return this._fields.limit
	}

	public set limit(value: number) {
		this._fields.limit = value
	}

	public get unacked(): number {
		return this._fields.unacked
	}

	public set unacked(value: number) {
		this._fields.unacked = value
	}

	public get effectiveWindowSize(): number {
		return this._fields.effectiveWindowSize
	}

	public set effectiveWindowSize(value: number) {
		this._fields.effectiveWindowSize = value
	}

	public _fields: {
		limit: number
		unacked: number
		effectiveWindowSize: number
	}

	constructor(init?: Partial<{limit?: number, unacked?: number, effectiveWindowSize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			limit: init?.limit ?? (0 as number),
			unacked: init?.unacked ?? (0 as number),
			effectiveWindowSize: init?.effectiveWindowSize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): trInFlow {
		return new trInFlow(this, true)
	}

	public __goscriptAssign(source: trInFlow): void {
		const target = this._fields
		const values = source._fields
		target.limit = values.limit
		target.unacked = values.unacked
		target.effectiveWindowSize = values.effectiveWindowSize
	}

	public getSize(): number {
		const f: trInFlow | $.VarRef<trInFlow> | null = this;
		return atomic.LoadUint32($.fieldRef($.pointerValue<trInFlow>(f)._fields, "effectiveWindowSize"))
	}

	public newLimit(n: number): number {
		let f: trInFlow | $.VarRef<trInFlow> | null = this;
		const f$: trInFlow = f == null ? $.pointerTarget<trInFlow>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<trInFlow>(f)
		let d = $.uint(((n - (f$ as trInFlow).limit) >>> 0), 32);
		;(f$ as trInFlow).limit = n
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as trInFlow).updateEffectiveWindowSize() : trInFlow.prototype.updateEffectiveWindowSize.call(f))
		return d
	}

	public onData(n: number): number {
		let f: trInFlow | $.VarRef<trInFlow> | null = this;
		const f$: trInFlow = f == null ? $.pointerTarget<trInFlow>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<trInFlow>(f);
		;(f$ as trInFlow).unacked = $.uint((f$ as trInFlow).unacked + (n), 32)
		if ((f$ as trInFlow).unacked >= $.uint((globalThis.Math.trunc((f$ as trInFlow).limit / 4)), 32)) {
			let w = (f$ as trInFlow).unacked;
			;(f$ as trInFlow).unacked = 0
			void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as trInFlow).updateEffectiveWindowSize() : trInFlow.prototype.updateEffectiveWindowSize.call(f))
			return w
		}
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as trInFlow).updateEffectiveWindowSize() : trInFlow.prototype.updateEffectiveWindowSize.call(f))
		return 0
	}

	public reset(): number {
		let f: trInFlow | $.VarRef<trInFlow> | null = this;
		const f$: trInFlow = f == null ? $.pointerTarget<trInFlow>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<trInFlow>(f)
		let w = (f$ as trInFlow).unacked;
		;(f$ as trInFlow).unacked = 0
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as trInFlow).updateEffectiveWindowSize() : trInFlow.prototype.updateEffectiveWindowSize.call(f))
		return w
	}

	public updateEffectiveWindowSize(): void {
		const f: trInFlow | $.VarRef<trInFlow> | null = this;
		const f$: trInFlow = f == null ? $.pointerTarget<trInFlow>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<trInFlow>(f)
		atomic.StoreUint32($.fieldRef((f$ as trInFlow)._fields, "effectiveWindowSize"), $.uint((((f$ as trInFlow).limit - (f$ as trInFlow).unacked) >>> 0), 32))
	}

	static __typeInfo = $.registerStructType(
		"transport.trInFlow",
		() => new trInFlow(),
		() => [$.methodSignature("getSize", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("newLimit", [["n", /* @__PURE__ */ $.basicType("uint32")]], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("onData", [["n", /* @__PURE__ */ $.basicType("uint32")]], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("reset", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("updateEffectiveWindowSize", [], [], true)],
		trInFlow,
		() => [/* @__PURE__ */ $.structField("limit", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("unacked", /* @__PURE__ */ $.basicType("uint32"), [1], 4, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("effectiveWindowSize", /* @__PURE__ */ $.basicType("uint32"), [2], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class inFlow {
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	// The inbound flow control limit for pending data.
	public get limit(): number {
		return this._fields.limit
	}

	public set limit(value: number) {
		this._fields.limit = value
	}

	// pendingData is the overall data which have been received but not been
	// consumed by applications.
	public get pendingData(): number {
		return this._fields.pendingData
	}

	public set pendingData(value: number) {
		this._fields.pendingData = value
	}

	// The amount of data the application has consumed but grpc has not sent
	// window update for them. Used to reduce window update frequency.
	public get pendingUpdate(): number {
		return this._fields.pendingUpdate
	}

	public set pendingUpdate(value: number) {
		this._fields.pendingUpdate = value
	}

	// delta is the extra window update given by receiver when an application
	// is reading data bigger in size than the inFlow limit.
	public get delta(): number {
		return this._fields.delta
	}

	public set delta(value: number) {
		this._fields.delta = value
	}

	public _fields: {
		mu: sync.Mutex
		limit: number
		pendingData: number
		pendingUpdate: number
		delta: number
	}

	constructor(init?: Partial<{mu?: sync.Mutex, limit?: number, pendingData?: number, pendingUpdate?: number, delta?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			limit: init?.limit ?? (0 as number),
			pendingData: init?.pendingData ?? (0 as number),
			pendingUpdate: init?.pendingUpdate ?? (0 as number),
			delta: init?.delta ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): inFlow {
		return new inFlow(this, true)
	}

	public __goscriptAssign(source: inFlow): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.limit = values.limit
		target.pendingData = values.pendingData
		target.pendingUpdate = values.pendingUpdate
		target.delta = values.delta
	}

	public async maybeAdjust(n: number): globalThis.Promise<number> {
		let f: inFlow | $.VarRef<inFlow> | null = this;
		using __defer = new $.DisposableStack()
		const f$: inFlow = f == null ? $.pointerTarget<inFlow>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<inFlow>(f)
		if (n > 2147483647) {
			n = 2147483647
		}
		await (f$ as inFlow).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((f$ as inFlow).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		// estSenderQuota is the receiver's view of the maximum number of bytes the sender
		// can send without a window update.
		let estSenderQuota = $.int($.uint((((f$ as inFlow).limit - ((((f$ as inFlow).pendingData + (f$ as inFlow).pendingUpdate) >>> 0))) >>> 0), 32), 32)
		// estUntransmittedData is the maximum number of bytes the sends might not have put
		// on the wire yet. A value of 0 or less means that we have already received all or
		// more bytes than the application is requesting to read.
		let estUntransmittedData = $.int($.uint(((n - (f$ as inFlow).pendingData) >>> 0), 32), 32)
		// This implies that unless we send a window update, the sender won't be able to send all the bytes
		// for this message. Therefore we must send an update over the limit since there's an active read
		// request from the application.
		if (estUntransmittedData > estSenderQuota) {
			// Sender's window shouldn't go more than 2^31 - 1 as specified in the HTTP spec.
			if ($.uint(((((f$ as inFlow).limit + n) >>> 0)), 32) > 2147483647) {
				;(f$ as inFlow).delta = $.uint(((2147483647 - (f$ as inFlow).limit) >>> 0), 32)
			} else {
				// Send a window update for the whole message and not just the difference between
				// estUntransmittedData and estSenderQuota. This will be helpful in case the message
				// is padded; We will fallback on the current available window(at least a 1/4th of the limit).
				;(f$ as inFlow).delta = n
			}
			return (f$ as inFlow).delta
		}
		return 0
	}

	public async newLimit(n: number): globalThis.Promise<void> {
		let f: inFlow | $.VarRef<inFlow> | null = this;
		const f$: inFlow = f == null ? $.pointerTarget<inFlow>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<inFlow>(f)
		await (f$ as inFlow).mu.Lock();
		;(f$ as inFlow).limit = n
		void (f$ as inFlow).mu.Unlock()
	}

	public async onData(n: number): globalThis.Promise<$.GoError> {
		let f: inFlow | $.VarRef<inFlow> | null = this;
		const f$: inFlow = f == null ? $.pointerTarget<inFlow>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<inFlow>(f)
		await (f$ as inFlow).mu.Lock();
		;(f$ as inFlow).pendingData = $.uint((f$ as inFlow).pendingData + (n), 32)
		if ($.uint(((((f$ as inFlow).pendingData + (f$ as inFlow).pendingUpdate) >>> 0)), 32) > $.uint(((((f$ as inFlow).limit + (f$ as inFlow).delta) >>> 0)), 32)) {
			let limit = (f$ as inFlow).limit
			let rcvd = $.uint((((f$ as inFlow).pendingData + (f$ as inFlow).pendingUpdate) >>> 0), 32)
			void (f$ as inFlow).mu.Unlock()
			return fmt.Errorf("received %d-bytes data exceeding the limit %d bytes", $.basicInterfaceValue(rcvd, "uint32"), $.basicInterfaceValue(limit, "uint32"))
		}
		void (f$ as inFlow).mu.Unlock()
		return null
	}

	public async onRead(n: number): globalThis.Promise<number> {
		let f: inFlow | $.VarRef<inFlow> | null = this;
		const f$: inFlow = f == null ? $.pointerTarget<inFlow>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<inFlow>(f)
		await (f$ as inFlow).mu.Lock()
		if ((f$ as inFlow).pendingData == 0) {
			void (f$ as inFlow).mu.Unlock()
			return 0
		}
		;(f$ as inFlow).pendingData = $.uint((f$ as inFlow).pendingData - (n), 32)
		if (n > (f$ as inFlow).delta) {
			n = $.uint(n - ((f$ as inFlow).delta), 32);
			;(f$ as inFlow).delta = 0
		} else {
			;(f$ as inFlow).delta = $.uint((f$ as inFlow).delta - (n), 32)
			n = 0
		}
		;(f$ as inFlow).pendingUpdate = $.uint((f$ as inFlow).pendingUpdate + (n), 32)
		if ((f$ as inFlow).pendingUpdate >= $.uint((globalThis.Math.trunc((f$ as inFlow).limit / 4)), 32)) {
			let wu = (f$ as inFlow).pendingUpdate;
			;(f$ as inFlow).pendingUpdate = 0
			void (f$ as inFlow).mu.Unlock()
			return wu
		}
		void (f$ as inFlow).mu.Unlock()
		return 0
	}

	static __typeInfo = $.registerStructType(
		"transport.inFlow",
		() => new inFlow(),
		() => [$.methodSignature("maybeAdjust", [["n", /* @__PURE__ */ $.basicType("uint32")]], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("newLimit", [["n", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("onData", [["n", /* @__PURE__ */ $.basicType("uint32")]], ["error"], true), $.methodSignature("onRead", [["n", /* @__PURE__ */ $.basicType("uint32")]], [/* @__PURE__ */ $.basicType("uint32")], true)],
		inFlow,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("limit", /* @__PURE__ */ $.basicType("uint32"), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("pendingData", /* @__PURE__ */ $.basicType("uint32"), [2], 12, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("pendingUpdate", /* @__PURE__ */ $.basicType("uint32"), [3], 16, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("delta", /* @__PURE__ */ $.basicType("uint32"), [4], 20, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export function newWriteQuota(sz: number, done: $.Channel<{}> | null): writeQuota | $.VarRef<writeQuota> | null {
	let w: writeQuota | $.VarRef<writeQuota> | null = new writeQuota({quota: sz, ch: $.makeChannel<{}>(1, {}, "both"), done: done})
	$.pointerValue<writeQuota>(w).replenish = $.functionValue(((__receiver) => (n: number) => __receiver.realReplenish(n))($.pointerValue<writeQuota>(w)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc/internal/transport.(*writeQuota).realReplenish-fm")
	return w
}
