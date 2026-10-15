// Generated file based on signal.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as os from "@goscript/os/index.js"

import * as slices from "@goscript/slices/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_signal_unix from "./signal_unix.gs.ts"
import "@goscript/context/index.js"
import "@goscript/os/index.js"
import "@goscript/slices/index.js"
import "@goscript/sync/index.js"
import "./signal_unix.gs.ts"

$.registerTypePackagePath("os/signal", ["signal.stopping", "signal.handler", "signal.signalCtx", "signal.stringer", "signal.signalError"])

export type stringer = {
	String(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"signal.stringer",
	null,
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type signalError = string

$.registerNamedValueType(
	"signal.signalError",
	{Error: (receiver: any, ...args: any[]) => (signalError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Is: (receiver: any, ...args: any[]) => (signalError_Is as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Is", [["target", "error"]], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*signal.signalError",
	{Error: (receiver: any, ...args: any[]) => (signalError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Is: (receiver: any, ...args: any[]) => (signalError_Is as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Is", [["target", "error"]], [/* @__PURE__ */ $.basicType("bool")])]
);

export class stopping {
	public get c(): $.Channel<os.Signal | null> | null {
		return this._fields.c
	}

	public set c(value: $.Channel<os.Signal | null> | null) {
		this._fields.c = value
	}

	public get h(): handler | $.VarRef<handler> | null {
		return this._fields.h
	}

	public set h(value: handler | $.VarRef<handler> | null) {
		this._fields.h = value
	}

	public _fields: {
		c: $.Channel<os.Signal | null> | null
		h: handler | $.VarRef<handler> | null
	}

	constructor(init?: Partial<{c?: $.Channel<os.Signal | null> | null, h?: handler | $.VarRef<handler> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			c: init?.c ?? (null! as $.Channel<os.Signal | null> | null),
			h: init?.h ?? (null! as handler | $.VarRef<handler> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): stopping {
		return new stopping(this, true)
	}

	public __goscriptAssign(source: stopping): void {
		const target = this._fields
		const values = source._fields
		target.c = values.c
		target.h = values.h
	}

	static __typeInfo = $.registerStructType(
		"signal.stopping",
		() => new stopping(),
		() => [],
		stopping,
		() => [/* @__PURE__ */ $.structField("c", /* @__PURE__ */ $.channelType("os.Signal", "send"), [0], 0, false, { pkgPath: "os/signal" }), /* @__PURE__ */ $.structField("h", /* @__PURE__ */ $.pointerType("signal.handler"), [1], 8, false, { pkgPath: "os/signal" })]
	)
}

export class handler {
	public get mask(): number[] {
		return this._fields.mask
	}

	public set mask(value: number[]) {
		this._fields.mask = value
	}

	public _fields: {
		mask: number[]
	}

	constructor(init?: Partial<{mask?: number[]}>, __goscriptValue?: boolean) {
		this._fields = {
			mask: init?.mask !== undefined ? $.cloneArrayValue(init.mask, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 3)) : $.arrayValue(globalThis.Array.from({ length: 3 }, () => 0))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): handler {
		return new handler(this, true)
	}

	public __goscriptAssign(source: handler): void {
		const target = this._fields
		const values = source._fields
		target.mask = $.assignFieldValue(target.mask, values.mask, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 3))
	}

	public clear(sig: number): void {
		let h: handler | $.VarRef<handler> | null = this;
		$.pointerValue<handler>(h).mask[globalThis.Math.trunc(sig / 32)] = $.pointerValue<handler>(h).mask[globalThis.Math.trunc(sig / 32)] & ~(($.uint(((1 << $.uint(sig & 31, 64)) >>> 0), 32)))
	}

	public ["set"](sig: number): void {
		let h: handler | $.VarRef<handler> | null = this;
		$.pointerValue<handler>(h).mask[globalThis.Math.trunc(sig / 32)] = $.pointerValue<handler>(h).mask[globalThis.Math.trunc(sig / 32)] | ($.uint(((1 << $.uint(sig & 31, 64)) >>> 0), 32))
	}

	public want(sig: number): boolean {
		const h: handler | $.VarRef<handler> | null = this;
		return $.uint((($.uintShr($.arrayIndex($.pointerValue<handler>(h).mask, globalThis.Math.trunc(sig / 32)), $.uint(sig & 31, 64), 32)) & 1), 32) != 0
	}

	static __typeInfo = $.registerStructType(
		"signal.handler",
		() => new handler(),
		() => [$.methodSignature("clear", [["sig", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("set", [["sig", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("want", [["sig", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true)],
		handler,
		() => [/* @__PURE__ */ $.structField("mask", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 3), [0], 0, false, { pkgPath: "os/signal" })]
	)
}

export class signalCtx {
	public get Context(): context.Context | null {
		return this._fields.Context
	}

	public set Context(value: context.Context | null) {
		this._fields.Context = value
	}

	public get cancel(): ((cause: $.GoError) => void) | null {
		return this._fields.cancel
	}

	public set cancel(value: ((cause: $.GoError) => void) | null) {
		this._fields.cancel = value
	}

	public get signals(): $.Slice<os.Signal | null> {
		return this._fields.signals
	}

	public set signals(value: $.Slice<os.Signal | null>) {
		this._fields.signals = value
	}

	public get ch(): $.Channel<os.Signal | null> | null {
		return this._fields.ch
	}

	public set ch(value: $.Channel<os.Signal | null> | null) {
		this._fields.ch = value
	}

	public _fields: {
		Context: context.Context | null
		cancel: ((cause: $.GoError) => void) | null
		signals: $.Slice<os.Signal | null>
		ch: $.Channel<os.Signal | null> | null
	}

	constructor(init?: Partial<{Context?: context.Context | null, cancel?: ((cause: $.GoError) => void) | null, signals?: $.Slice<os.Signal | null>, ch?: $.Channel<os.Signal | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Context: init?.Context ?? (null! as context.Context | null),
			cancel: init?.cancel ?? (null! as ((cause: $.GoError) => void) | null),
			signals: init?.signals ?? (null! as $.Slice<os.Signal | null>),
			ch: init?.ch ?? (null! as $.Channel<os.Signal | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): signalCtx {
		return new signalCtx(this, true)
	}

	public __goscriptAssign(source: signalCtx): void {
		const target = this._fields
		const values = source._fields
		target.Context = $.assignFieldValue(target.Context, values.Context, "context.Context")
		target.cancel = values.cancel
		target.signals = values.signals
		target.ch = values.ch
	}

	public async String(): globalThis.Promise<string> {
		const c: signalCtx | $.VarRef<signalCtx> | null = this;
		const c$: signalCtx = c == null ? $.pointerTarget<signalCtx>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<signalCtx>(c)
		let buf: $.Slice<number> = null! as $.Slice<number>
		// We know that the type of c.Context is context.cancelCtx, and we know that the
		// String method of cancelCtx returns a string that ends with ".WithCancel".
		let name = (__goscriptAwait = $.pointerValue<Exclude<stringer, null>>($.mustTypeAssert<stringer | null>((c$ as signalCtx).Context, "signal.stringer")).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		name = $.sliceStringOrBytes(name, undefined, $.stringLen(name) - 11)
		buf = $.appendSlice(buf, $.stringToBytes($.concatString("signal.NotifyContext(", name)), $.byteSliceHint)
		if ($.sliceLen((c$ as signalCtx).signals) != 0) {
			buf = $.appendSlice(buf, $.stringToBytes(", ["), $.byteSliceHint)
			for (let __goscriptRangeTarget4 = (c$ as signalCtx).signals, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
				let s = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as os.Signal | null)
				buf = $.appendSlice(buf, $.stringToBytes((__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<os.Signal, null>) : $.pointerValue<Exclude<os.Signal, null>>(s)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), $.byteSliceHint)
				if (i != ($.sliceLen((c$ as signalCtx).signals) - 1)) {
					buf = $.append(buf, $.uint(32, 8), $.byteSliceHint)
				}
			}
			buf = $.append(buf, $.uint(93, 8), $.byteSliceHint)
		}
		buf = $.append(buf, $.uint(41, 8), $.byteSliceHint)
		return $.bytesToString(buf)
	}

	public async stop(): globalThis.Promise<void> {
		const c: signalCtx | $.VarRef<signalCtx> | null = this;
		const c$: signalCtx = c == null ? $.pointerTarget<signalCtx>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<signalCtx>(c)
		void (__goscriptAwait = (c$ as signalCtx).cancel!(null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await Stop((c$ as signalCtx).ch)
	}

	public Deadline(): any {
		return $.pointerValue<Exclude<context.Context | null, null>>(this.Context).Deadline()
	}

	public Done(): any {
		return $.pointerValue<Exclude<context.Context | null, null>>(this.Context).Done()
	}

	public async Err(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<context.Context | null, null>>(this.Context).Err()
	}

	public async Value(key: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<context.Context | null, null>>(this.Context).Value(key)
	}

	static __typeInfo = $.registerStructType(
		"signal.signalCtx",
		() => new signalCtx(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("stop", [], [], true), $.methodSignature("Deadline", [], [["deadline", "time.Time"], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Done", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")]), $.methodSignature("Err", [], ["error"]), $.methodSignature("Value", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }])],
		signalCtx,
		() => [/* @__PURE__ */ $.structField("Context", "context.Context", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("cancel", ({ kind: $.TypeKind.Function, name: "context.CancelCauseFunc", params: ["error"], results: [] } as $.FunctionTypeInfo), [1], 16, false, { pkgPath: "os/signal" }), /* @__PURE__ */ $.structField("signals", /* @__PURE__ */ $.sliceType("os.Signal"), [2], 24, false, { pkgPath: "os/signal" }), /* @__PURE__ */ $.structField("ch", /* @__PURE__ */ $.channelType("os.Signal", "both"), [3], 48, false, { pkgPath: "os/signal" })]
	)
}

export let handlers: $.VarRef<{"Mutex": sync.Mutex, "m": globalThis.Map<$.Channel<os.Signal | null> | null, handler | $.VarRef<handler> | null> | null, "ref": bigint[], "stopping": $.Slice<stopping>}> = $.varRef($.anonymousStructValue({"Mutex": $.markAsStructValue(new sync.Mutex()), "m": null, "ref": $.arrayValue(globalThis.Array.from({ length: 65 }, () => 0n)), "stopping": null}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Mutex", "sync.Mutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("m", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.channelType("os.Signal", "send"), /* @__PURE__ */ $.pointerType("signal.handler")), [1], 8, false, { pkgPath: "os/signal" }), /* @__PURE__ */ $.structField("ref", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int64"), 65), [2], 16, false, { pkgPath: "os/signal" }), /* @__PURE__ */ $.structField("stopping", /* @__PURE__ */ $.sliceType("signal.stopping"), [3], 536, false, { pkgPath: "os/signal" })] }))

export function __goscript_set_handlers(__goscriptValue: {"Mutex": sync.Mutex, "m": globalThis.Map<$.Channel<os.Signal | null> | null, handler | $.VarRef<handler> | null> | null, "ref": bigint[], "stopping": $.Slice<stopping>}): void {
	$.assignStruct(handlers.value, __goscriptValue)
}

export async function cancel(sigs: $.Slice<os.Signal | null>, action: ((_p0: number) => void) | null): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	await handlers.value.Mutex.Lock()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())(handlers.value.Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })

	let remove: ((n: number) => void) | null = $.functionValue(async (n: number): globalThis.Promise<void> => {
		if (n < 0) {
			return
		}

		let zerohandler: handler = new handler(undefined, true)

		for (const [c, h] of handlers.value.m?.entries() ?? []) {
			if ((h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as handler).want(n) : handler.prototype.want.call(h, n))) {
				handlers.value.ref[n]--
				void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as handler).clear(n) : handler.prototype.clear.call(h, n))
				if ($.arrayEqual($.pointerValue<handler>(h).mask, zerohandler.mask)) {
					$.deleteMapEntry(handlers.value.m, c)
				}
			}
		}

		void (__goscriptAwait = action!(n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo))

	if ($.sliceLen(sigs) == 0) {
		for (let n = 0; n < 65; n++) {
			void (__goscriptAwait = remove!(n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	} else {
		for (let __goscriptRangeTarget0 = sigs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let s = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as os.Signal | null)
			void (__goscriptAwait = remove!(__goscript_signal_unix.signum(s)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
}

export async function Ignore(sig: $.Slice<os.Signal | null>): globalThis.Promise<void> {
	await cancel(sig, __goscript_signal_unix.ignoreSignal)
}

export function Ignored(sig: os.Signal | null): boolean {
	let sn = __goscript_signal_unix.signum(sig)
	return (sn >= 0) && __goscript_signal_unix.signalIgnored(sn)
}

export let watchSignalLoopOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_watchSignalLoopOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(watchSignalLoopOnce.value, __goscriptValue)
}

export var watchSignalLoop: (() => void) | null

export function __goscript_init_watchSignalLoop(): void {
	if (((watchSignalLoop) as any) === undefined) {
		watchSignalLoop = null! as (() => void) | null
	}
}

export function __goscript_get_watchSignalLoop(): (() => void) | null {
	if (((watchSignalLoop) as any) === undefined) {
		__goscript_init_watchSignalLoop()
	}
	return watchSignalLoop
}

export function __goscript_set_watchSignalLoop(__goscriptValue: (() => void) | null): void {
	watchSignalLoop = __goscriptValue
}

export async function Notify(c: $.Channel<os.Signal | null> | null, sig: $.Slice<os.Signal | null>): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	if (c == null) {
		$.panic("os/signal: Notify using nil channel")
	}

	await handlers.value.Mutex.Lock()
	const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())(handlers.value.Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee1() })

	// Lazily create the handler. If all of the signals are bogus there is
	// no need to install a handler at all.
	let getHandler: (() => handler | $.VarRef<handler> | null | globalThis.Promise<handler | $.VarRef<handler> | null>) | null = $.functionValue((): handler | $.VarRef<handler> | null => {
		let h: handler | $.VarRef<handler> | null = $.mapGet<$.Channel<os.Signal | null> | null, handler | $.VarRef<handler> | null, handler | $.VarRef<handler> | null>(handlers.value.m, c, null)[0]
		if (h == null) {
			if (handlers.value.m == null) {
				handlers.value.m = $.makeMap<$.Channel<os.Signal | null> | null, handler | $.VarRef<handler> | null>()
			}
			h = new handler()
			$.mapSet(handlers.value.m, c, h)
		}

		return h
	}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("signal.handler")] } as $.FunctionTypeInfo))

	let add: ((n: number) => void) | null = $.functionValue(async (n: number): globalThis.Promise<void> => {
		if (n < 0) {
			return
		}

		let h: handler | $.VarRef<handler> | null = ((__goscriptAwait = getHandler!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as handler | $.VarRef<handler> | null)
		if (!(h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as handler).want(n) : handler.prototype.want.call(h, n))) {
			void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as handler)["set"](n) : handler.prototype.set.call(h, n))
			if ($.arrayIndex(handlers.value.ref, n) == 0n) {
				__goscript_signal_unix.enableSignal(n)

				// The runtime requires that we enable a
				// signal before starting the watcher.
				await watchSignalLoopOnce.value.Do($.functionValue(async (): globalThis.Promise<void> => {
					if (__goscript_get_watchSignalLoop() != null) {
						const __goscriptDeferCallee2 = __goscript_get_watchSignalLoop()
						queueMicrotask(async () => { (__goscriptAwait = __goscriptDeferCallee2!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
					}
				}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
			}
			handlers.value.ref[n]++
		}
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo))

	if ($.sliceLen(sig) == 0) {
		for (let n = 0; n < 65; n++) {
			void (__goscriptAwait = add!(n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	} else {
		for (let __goscriptRangeTarget1 = sig, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let s = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as os.Signal | null)
			void (__goscriptAwait = add!(__goscript_signal_unix.signum(s)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
}

export async function Reset(sig: $.Slice<os.Signal | null>): globalThis.Promise<void> {
	await cancel(sig, __goscript_signal_unix.disableSignal)
}

export async function Stop(c: $.Channel<os.Signal | null> | null): globalThis.Promise<void> {
	await handlers.value.Mutex.Lock()

	let h: handler | $.VarRef<handler> | null = $.mapGet<$.Channel<os.Signal | null> | null, handler | $.VarRef<handler> | null, handler | $.VarRef<handler> | null>(handlers.value.m, c, null)[0]
	if (h == null) {
		handlers.value.Mutex.Unlock()
		return
	}
	$.deleteMapEntry(handlers.value.m, c)

	for (let n = 0; n < 65; n++) {
		if ((h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as handler).want(n) : handler.prototype.want.call(h, n))) {
			handlers.value.ref[n]--
			if ($.arrayIndex(handlers.value.ref, n) == 0n) {
				__goscript_signal_unix.disableSignal(n)
			}
		}
	}

	// Signals will no longer be delivered to the channel.
	// We want to avoid a race for a signal such as SIGINT:
	// it should be either delivered to the channel,
	// or the program should take the default action (that is, exit).
	// To avoid the possibility that the signal is delivered,
	// and the signal handler invoked, and then Stop deregisters
	// the channel before the process function below has a chance
	// to send it on the channel, put the channel on a list of
	// channels being stopped and wait for signal delivery to
	// quiesce before fully removing it.

	handlers.value.stopping = $.appendOne(handlers.value.stopping, new stopping({c: c, h: h}, true))

	handlers.value.Mutex.Unlock()

	signalWaitUntilIdle()

	await handlers.value.Mutex.Lock()

	for (let __goscriptRangeTarget2 = handlers.value.stopping, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
		let s = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as stopping)).clone()
		if (s.c == c) {
			handlers.value.stopping = (slices.Delete(handlers.value.stopping, i, i + 1) as $.Slice<stopping>)
			break
		}
	}

	handlers.value.Mutex.Unlock()
}

export function signalWaitUntilIdle(): void {
}

export async function process(sig: os.Signal | null): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	let n = __goscript_signal_unix.signum(sig)
	if (n < 0) {
		return
	}

	await handlers.value.Mutex.Lock()
	const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())(handlers.value.Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee3() })

	for (const [c, h] of handlers.value.m?.entries() ?? []) {
		if ((h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as handler).want(n) : handler.prototype.want.call(h, n))) {
			// send but do not block for it
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: true,
					channel: c,
					value: sig,
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
		}
	}

	// Avoid the race mentioned in Stop.
	for (let __goscriptRangeTarget3 = handlers.value.stopping, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let d = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as stopping)).clone()
		if (handler.prototype.want.call(d.h, n)) {
			const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: true,
					channel: d.c,
					value: sig,
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
}

export async function NotifyContext(parent: context.Context | null, signals: $.Slice<os.Signal | null>): globalThis.Promise<[context.Context | null, context.CancelFunc | null]> {
	let ctx: context.Context | null = null! as context.Context | null
	let stop: context.CancelFunc | null = null! as context.CancelFunc | null
	let __goscriptTuple0: any = context.WithCancelCause($.pointerValueOrNil(parent)!)
	ctx = __goscriptTuple0[0]
	let __goscriptShadow0 = __goscriptTuple0[1]
	let c: signalCtx | $.VarRef<signalCtx> | null = new signalCtx({Context: ctx, cancel: __goscriptShadow0, signals: signals})
	let c$: signalCtx = c == null ? $.pointerTarget<signalCtx>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<signalCtx>(c);
	;(c$ as signalCtx).ch = $.makeChannel<os.Signal | null>(1, null! as os.Signal | null, "both")
	await Notify((c$ as signalCtx).ch, (c$ as signalCtx).signals)
	if ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null) {
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: (c$ as signalCtx).ch,
					onSelected: async (__goscriptSelect2Result) => {
						let s = __goscriptSelect2Result.value
						void (__goscriptAwait = (c$ as signalCtx).cancel!($.namedValueInterfaceValue<$.GoError>(($.concatString((__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<os.Signal, null>) : $.pointerValue<Exclude<os.Signal, null>>(s)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), " signal received")), "signal.signalError", {"Error": signalError_Error}, /* @__PURE__ */ $.basicType("string", "signal.signalError"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				},
				{
					id: 1,
					isSend: false,
					channel: $.pointerValue<Exclude<context.Context, null>>((c$ as signalCtx).Context).Done(),
				}
			], false)
			if (__goscriptSelect2HasReturn) {
				return __goscriptSelect2Value
			}
		})() })
	}
	return [$.interfaceValue<context.Context | null>(c, "*signal.signalCtx", /* @__PURE__ */ $.pointerType("signal.signalCtx")), $.functionValue(((__receiver) => () => __receiver.stop())((c$ as signalCtx)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "os/signal.(*signalCtx).stop-fm")]
}

export function signalError_Error(s: signalError): string {
	return s
}

export function signalError_Is(s: signalError, target: $.GoError): boolean {
	if ($.comparableEqual(target, context.Canceled)) {
		return true
	}
	return false
}

var __goscriptAwait: any
