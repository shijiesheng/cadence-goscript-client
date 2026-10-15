// Generated file based on buffered_write_syncer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_clock from "./clock.gs.ts"

import * as __goscript_write_syncer from "./write_syncer.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/multierr/index.js"
import "./clock.gs.ts"
import "./write_syncer.gs.ts"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.BufferedWriteSyncer"])

export class BufferedWriteSyncer {
	// WS is the WriteSyncer around which BufferedWriteSyncer will buffer
	// writes.
	//
	// This field is required.
	public get WS(): __goscript_write_syncer.WriteSyncer | null {
		return this._fields.WS
	}

	public set WS(value: __goscript_write_syncer.WriteSyncer | null) {
		this._fields.WS = value
	}

	// Size specifies the maximum amount of data the writer will buffered
	// before flushing.
	//
	// Defaults to 256 kB if unspecified.
	public get Size(): number {
		return this._fields.Size
	}

	public set Size(value: number) {
		this._fields.Size = value
	}

	// FlushInterval specifies how often the writer should flush data if
	// there have been no writes.
	//
	// Defaults to 30 seconds if unspecified.
	public get FlushInterval(): time.Duration {
		return this._fields.FlushInterval
	}

	public set FlushInterval(value: time.Duration) {
		this._fields.FlushInterval = value
	}

	// Clock, if specified, provides control of the source of time for the
	// writer.
	//
	// Defaults to the system clock.
	public get Clock(): __goscript_clock.Clock | null {
		return this._fields.Clock
	}

	public set Clock(value: __goscript_clock.Clock | null) {
		this._fields.Clock = value
	}

	// unexported fields for state
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get initialized(): boolean {
		return this._fields.initialized
	}

	public set initialized(value: boolean) {
		this._fields.initialized = value
	}

	public get stopped(): boolean {
		return this._fields.stopped
	}

	public set stopped(value: boolean) {
		this._fields.stopped = value
	}

	public get writer(): bufio.Writer | $.VarRef<bufio.Writer> | null {
		return this._fields.writer
	}

	public set writer(value: bufio.Writer | $.VarRef<bufio.Writer> | null) {
		this._fields.writer = value
	}

	public get ticker(): time.Ticker | $.VarRef<time.Ticker> | null {
		return this._fields.ticker
	}

	public set ticker(value: time.Ticker | $.VarRef<time.Ticker> | null) {
		this._fields.ticker = value
	}

	public get stop(): $.Channel<{}> | null {
		return this._fields.stop
	}

	public set stop(value: $.Channel<{}> | null) {
		this._fields.stop = value
	}

	public get done(): $.Channel<{}> | null {
		return this._fields.done
	}

	public set done(value: $.Channel<{}> | null) {
		this._fields.done = value
	}

	public _fields: {
		WS: __goscript_write_syncer.WriteSyncer | null
		Size: number
		FlushInterval: time.Duration
		Clock: __goscript_clock.Clock | null
		mu: sync.Mutex
		initialized: boolean
		stopped: boolean
		writer: bufio.Writer | $.VarRef<bufio.Writer> | null
		ticker: time.Ticker | $.VarRef<time.Ticker> | null
		stop: $.Channel<{}> | null
		done: $.Channel<{}> | null
	}

	constructor(init?: Partial<{WS?: __goscript_write_syncer.WriteSyncer | null, Size?: number, FlushInterval?: time.Duration, Clock?: __goscript_clock.Clock | null, mu?: sync.Mutex, initialized?: boolean, stopped?: boolean, writer?: bufio.Writer | $.VarRef<bufio.Writer> | null, ticker?: time.Ticker | $.VarRef<time.Ticker> | null, stop?: $.Channel<{}> | null, done?: $.Channel<{}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			WS: init?.WS ?? (null! as __goscript_write_syncer.WriteSyncer | null),
			Size: init?.Size ?? (0 as number),
			FlushInterval: init?.FlushInterval ?? (0n as time.Duration),
			Clock: init?.Clock ?? (null! as __goscript_clock.Clock | null),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			initialized: init?.initialized ?? (false as boolean),
			stopped: init?.stopped ?? (false as boolean),
			writer: init?.writer ?? (null! as bufio.Writer | $.VarRef<bufio.Writer> | null),
			ticker: init?.ticker ?? (null! as time.Ticker | $.VarRef<time.Ticker> | null),
			stop: init?.stop ?? (null! as $.Channel<{}> | null),
			done: init?.done ?? (null! as $.Channel<{}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BufferedWriteSyncer {
		return new BufferedWriteSyncer(this, true)
	}

	public __goscriptAssign(source: BufferedWriteSyncer): void {
		const target = this._fields
		const values = source._fields
		target.WS = $.assignFieldValue(target.WS, values.WS, "zapcore.WriteSyncer")
		target.Size = values.Size
		target.FlushInterval = values.FlushInterval
		target.Clock = $.assignFieldValue(target.Clock, values.Clock, "zapcore.Clock")
		$.assignStruct(target.mu, values.mu)
		target.initialized = values.initialized
		target.stopped = values.stopped
		target.writer = values.writer
		target.ticker = values.ticker
		target.stop = values.stop
		target.done = values.done
	}

	public async Stop(): globalThis.Promise<$.GoError> {
		const s: BufferedWriteSyncer | $.VarRef<BufferedWriteSyncer> | null = this;
		let err: $.GoError = null! as $.GoError
		const s$: BufferedWriteSyncer = s == null ? $.pointerTarget<BufferedWriteSyncer>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<BufferedWriteSyncer>(s)
		let stopped: boolean = false

		// Critical section.
		await (async (): globalThis.Promise<void> => {
			using __defer = new $.DisposableStack()
			await (s$ as BufferedWriteSyncer).mu.Lock()
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as BufferedWriteSyncer).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee0() })

			if (!(s$ as BufferedWriteSyncer).initialized) {
				return
			}

			stopped = (s$ as BufferedWriteSyncer).stopped
			if (stopped) {
				return
			}
			;(s$ as BufferedWriteSyncer).stopped = true

			time.Ticker.prototype.Stop.call($.pointerValue<time.Ticker>((s$ as BufferedWriteSyncer).ticker))
			void (s$ as BufferedWriteSyncer).stop!.close()
			await $.chanRecv((s$ as BufferedWriteSyncer).done)
		})()

		// Don't call Sync on consecutive Stops.
		if (!stopped) {
			err = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as BufferedWriteSyncer).Sync() : BufferedWriteSyncer.prototype.Sync.call(s))
		}

		return err
	}

	public async Sync(): globalThis.Promise<$.GoError> {
		const s: BufferedWriteSyncer | $.VarRef<BufferedWriteSyncer> | null = this;
		using __defer = new $.DisposableStack()
		const s$: BufferedWriteSyncer = s == null ? $.pointerTarget<BufferedWriteSyncer>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<BufferedWriteSyncer>(s)
		await (s$ as BufferedWriteSyncer).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as BufferedWriteSyncer).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		let err: $.GoError = null! as $.GoError
		if ((s$ as BufferedWriteSyncer).initialized) {
			err = await bufio.Writer.prototype.Flush.call((s$ as BufferedWriteSyncer).writer)
		}

		return multierr.Append(err, (__goscriptAwait = $.pointerValue<Exclude<__goscript_write_syncer.WriteSyncer, null>>((s$ as BufferedWriteSyncer).WS).Sync(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	public async Write(bs: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const s: BufferedWriteSyncer | $.VarRef<BufferedWriteSyncer> | null = this;
		using __defer = new $.DisposableStack()
		const s$: BufferedWriteSyncer = s == null ? $.pointerTarget<BufferedWriteSyncer>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<BufferedWriteSyncer>(s)
		await (s$ as BufferedWriteSyncer).mu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as BufferedWriteSyncer).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		if (!(s$ as BufferedWriteSyncer).initialized) {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as BufferedWriteSyncer).initialize() : BufferedWriteSyncer.prototype.initialize.call(s))
		}

		// To avoid partial writes from being flushed, we manually flush the existing buffer if:
		// * The current write doesn't fit into the buffer fully, and
		// * The buffer is not empty (since bufio will not split large writes when the buffer is empty)
		if (($.sliceLen(bs) > bufio.Writer.prototype.Available.call((s$ as BufferedWriteSyncer).writer)) && (bufio.Writer.prototype.Buffered.call((s$ as BufferedWriteSyncer).writer) > 0)) {
			{
				let err = await bufio.Writer.prototype.Flush.call((s$ as BufferedWriteSyncer).writer)
				if (err != null) {
					return [0, err]
				}
			}
		}

		return await bufio.Writer.prototype.Write.call((s$ as BufferedWriteSyncer).writer, bs)
	}

	public async flushLoop(): globalThis.Promise<void> {
		const s: BufferedWriteSyncer | $.VarRef<BufferedWriteSyncer> | null = this;
		using __defer = new $.DisposableStack()
		const s$: BufferedWriteSyncer = s == null ? $.pointerTarget<BufferedWriteSyncer>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<BufferedWriteSyncer>(s)
		const __goscriptDeferArg0 = (s$ as BufferedWriteSyncer).done
		__defer.defer(() => { __goscriptDeferArg0!.close() })

		while (true) {
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: $.pointerValue<time.Ticker>((s$ as BufferedWriteSyncer).ticker).C,
					onSelected: async (__goscriptSelect0Result) => {
						await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as BufferedWriteSyncer).Sync() : BufferedWriteSyncer.prototype.Sync.call(s))
					}
				},
				{
					id: 1,
					isSend: false,
					channel: (s$ as BufferedWriteSyncer).stop,
					onSelected: async (__goscriptSelect0Result) => {
						return $.selectVoidReturn()
					}
				}
			], false)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}
		}
	}

	public async initialize(): globalThis.Promise<void> {
		let s: BufferedWriteSyncer | $.VarRef<BufferedWriteSyncer> | null = this;
		const s$: BufferedWriteSyncer = s == null ? $.pointerTarget<BufferedWriteSyncer>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<BufferedWriteSyncer>(s)
		let size = (s$ as BufferedWriteSyncer).Size
		if (size == 0) {
			size = 262144
		}

		let flushInterval = (s$ as BufferedWriteSyncer).FlushInterval
		if (flushInterval == 0n) {
			flushInterval = 30000000000n
		}

		if ((s$ as BufferedWriteSyncer).Clock == null) {
			;(s$ as BufferedWriteSyncer).Clock = $.interfaceValue<__goscript_clock.Clock | null>((__goscript_clock.DefaultClock).clone(), "zapcore.systemClock", "zapcore.systemClock")
		}

		;(s$ as BufferedWriteSyncer).ticker = ((__goscriptAwait = $.pointerValue<Exclude<__goscript_clock.Clock, null>>((s$ as BufferedWriteSyncer).Clock).NewTicker(flushInterval), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Ticker | $.VarRef<time.Ticker> | null);
		;(s$ as BufferedWriteSyncer).writer = bufio.NewWriterSize(((s$ as BufferedWriteSyncer).WS as io.Writer | null), size);
		;(s$ as BufferedWriteSyncer).stop = $.makeChannel<{}>(0, {}, "both");
		;(s$ as BufferedWriteSyncer).done = $.makeChannel<{}>(0, {}, "both");
		;(s$ as BufferedWriteSyncer).initialized = true
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.flushLoop())((s$ as BufferedWriteSyncer)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/zap/zapcore.(*BufferedWriteSyncer).flushLoop-fm")
		queueMicrotask(async () => { await __goscriptDeferCallee3() })
	}

	static __typeInfo = $.registerStructType(
		"zapcore.BufferedWriteSyncer",
		() => new BufferedWriteSyncer(),
		() => [$.methodSignature("Stop", [], [["err", "error"]], true), $.methodSignature("Sync", [], ["error"], true), $.methodSignature("Write", [["bs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("flushLoop", [], [], true), $.methodSignature("initialize", [], [], true)],
		BufferedWriteSyncer,
		() => [/* @__PURE__ */ $.structField("WS", "zapcore.WriteSyncer", [0], 0, true), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("int"), [1], 16, true), /* @__PURE__ */ $.structField("FlushInterval", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 24, true), /* @__PURE__ */ $.structField("Clock", "zapcore.Clock", [3], 32, true), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [4], 48, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("initialized", /* @__PURE__ */ $.basicType("bool"), [5], 56, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("stopped", /* @__PURE__ */ $.basicType("bool"), [6], 57, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("writer", /* @__PURE__ */ $.pointerType("bufio.Writer"), [7], 64, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("ticker", /* @__PURE__ */ $.pointerType("time.Ticker"), [8], 72, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("stop", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [9], 80, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [10], 88, false, { pkgPath: "go.uber.org/zap/zapcore" })]
	)
}

export const _defaultBufferSize: number = 262144

export const _defaultFlushInterval: time.Duration = 30000000000n

var __goscriptAwait: any
