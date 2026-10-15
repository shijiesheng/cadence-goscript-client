// Generated file based on pipe.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as os from "@goscript/os/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_net from "./net.gs.ts"
import "@goscript/io/index.js"
import "@goscript/os/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./net.gs.ts"

export class pipeDeadline {
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get timer(): time.Timer | $.VarRef<time.Timer> | null {
		return this._fields.timer
	}

	public set timer(value: time.Timer | $.VarRef<time.Timer> | null) {
		this._fields.timer = value
	}

	public get cancel(): $.Channel<{}> | null {
		return this._fields.cancel
	}

	public set cancel(value: $.Channel<{}> | null) {
		this._fields.cancel = value
	}

	public _fields: {
		mu: sync.Mutex
		timer: time.Timer | $.VarRef<time.Timer> | null
		cancel: $.Channel<{}> | null
	}

	constructor(init?: Partial<{mu?: sync.Mutex, timer?: time.Timer | $.VarRef<time.Timer> | null, cancel?: $.Channel<{}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			timer: init?.timer ?? (null! as time.Timer | $.VarRef<time.Timer> | null),
			cancel: init?.cancel ?? (null! as $.Channel<{}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pipeDeadline {
		return new pipeDeadline(this, true)
	}

	public __goscriptAssign(source: pipeDeadline): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.timer = values.timer
		target.cancel = values.cancel
	}

	public async ["set"](t: time.Time): globalThis.Promise<void> {
		let d: pipeDeadline | $.VarRef<pipeDeadline> | null = this;
		using __defer = new $.DisposableStack()
		const d$: pipeDeadline = d == null ? $.pointerTarget<pipeDeadline>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<pipeDeadline>(d)
		await (d$ as pipeDeadline).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((d$ as pipeDeadline).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		if (((d$ as pipeDeadline).timer != null) && !time.Timer.prototype.Stop.call($.pointerValue<time.Timer>((d$ as pipeDeadline).timer))) {
			await $.chanRecv((d$ as pipeDeadline).cancel)
		}
		;(d$ as pipeDeadline).timer = null

		// Time is zero, then there is no deadline.
		let closed = await isClosedChan((d$ as pipeDeadline).cancel)
		if ($.markAsStructValue($.cloneStructValue(t)).IsZero()) {
			if (closed) {
				;(d$ as pipeDeadline).cancel = $.makeChannel<{}>(0, {}, "both")
			}
			return
		}

		// Time in the future, setup a timer to cancel in the future.
		{
			let dur = time.Until($.markAsStructValue($.cloneStructValue(t)))
			if (dur > 0n) {
				if (closed) {
					;(d$ as pipeDeadline).cancel = $.makeChannel<{}>(0, {}, "both")
				}
				;(d$ as pipeDeadline).timer = time.AfterFunc(dur, $.functionValue((): void => {
					void (d$ as pipeDeadline).cancel!.close()
				}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
				return
			}
		}

		// Time in the past, so close immediately.
		if (!closed) {
			void (d$ as pipeDeadline).cancel!.close()
		}
	}

	public async wait(): globalThis.Promise<$.Channel<{}> | null> {
		const d: pipeDeadline | $.VarRef<pipeDeadline> | null = this;
		using __defer = new $.DisposableStack()
		const d$: pipeDeadline = d == null ? $.pointerTarget<pipeDeadline>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<pipeDeadline>(d)
		await (d$ as pipeDeadline).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((d$ as pipeDeadline).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		return (d$ as pipeDeadline).cancel
	}

	static __typeInfo = $.registerStructType(
		"net.pipeDeadline",
		() => new pipeDeadline(),
		() => [$.methodSignature("set", [["t", "time.Time"]], [], true), $.methodSignature("wait", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both")], true)],
		pipeDeadline,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("timer", /* @__PURE__ */ $.pointerType("time.Timer"), [1], 8, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("cancel", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [2], 16, false, { pkgPath: "net" })]
	)
}

export class pipeAddr {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pipeAddr {
		return new pipeAddr(this, true)
	}

	public __goscriptAssign(source: pipeAddr): void {
	}

	public Network(): string {
		return "pipe"
	}

	public String(): string {
		return "pipe"
	}

	static __typeInfo = $.registerStructType(
		"net.pipeAddr",
		() => new pipeAddr(),
		() => [$.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		pipeAddr,
		() => []
	)
}

export class pipe {
	public get wrMu(): sync.Mutex {
		return this._fields.wrMu
	}

	public set wrMu(value: sync.Mutex) {
		this._fields.wrMu = value
	}

	// Used by local Read to interact with remote Write.
	// Successful receive on rdRx is always followed by send on rdTx.
	public get rdRx(): $.Channel<$.Slice<number>> | null {
		return this._fields.rdRx
	}

	public set rdRx(value: $.Channel<$.Slice<number>> | null) {
		this._fields.rdRx = value
	}

	public get rdTx(): $.Channel<number> | null {
		return this._fields.rdTx
	}

	public set rdTx(value: $.Channel<number> | null) {
		this._fields.rdTx = value
	}

	// Used by local Write to interact with remote Read.
	// Successful send on wrTx is always followed by receive on wrRx.
	public get wrTx(): $.Channel<$.Slice<number>> | null {
		return this._fields.wrTx
	}

	public set wrTx(value: $.Channel<$.Slice<number>> | null) {
		this._fields.wrTx = value
	}

	public get wrRx(): $.Channel<number> | null {
		return this._fields.wrRx
	}

	public set wrRx(value: $.Channel<number> | null) {
		this._fields.wrRx = value
	}

	public get once(): sync.Once {
		return this._fields.once
	}

	public set once(value: sync.Once) {
		this._fields.once = value
	}

	public get localDone(): $.Channel<{}> | null {
		return this._fields.localDone
	}

	public set localDone(value: $.Channel<{}> | null) {
		this._fields.localDone = value
	}

	public get remoteDone(): $.Channel<{}> | null {
		return this._fields.remoteDone
	}

	public set remoteDone(value: $.Channel<{}> | null) {
		this._fields.remoteDone = value
	}

	public get readDeadline(): pipeDeadline {
		return this._fields.readDeadline
	}

	public set readDeadline(value: pipeDeadline) {
		this._fields.readDeadline = value
	}

	public get writeDeadline(): pipeDeadline {
		return this._fields.writeDeadline
	}

	public set writeDeadline(value: pipeDeadline) {
		this._fields.writeDeadline = value
	}

	public _fields: {
		wrMu: sync.Mutex
		rdRx: $.Channel<$.Slice<number>> | null
		rdTx: $.Channel<number> | null
		wrTx: $.Channel<$.Slice<number>> | null
		wrRx: $.Channel<number> | null
		once: sync.Once
		localDone: $.Channel<{}> | null
		remoteDone: $.Channel<{}> | null
		readDeadline: pipeDeadline
		writeDeadline: pipeDeadline
	}

	constructor(init?: Partial<{wrMu?: sync.Mutex, rdRx?: $.Channel<$.Slice<number>> | null, rdTx?: $.Channel<number> | null, wrTx?: $.Channel<$.Slice<number>> | null, wrRx?: $.Channel<number> | null, once?: sync.Once, localDone?: $.Channel<{}> | null, remoteDone?: $.Channel<{}> | null, readDeadline?: pipeDeadline, writeDeadline?: pipeDeadline}>, __goscriptValue?: boolean) {
		this._fields = {
			wrMu: init?.wrMu ? $.markAsStructValue($.cloneStructValue(init.wrMu)) : $.markAsStructValue(new sync.Mutex()),
			rdRx: init?.rdRx ?? (null! as $.Channel<$.Slice<number>> | null),
			rdTx: init?.rdTx ?? (null! as $.Channel<number> | null),
			wrTx: init?.wrTx ?? (null! as $.Channel<$.Slice<number>> | null),
			wrRx: init?.wrRx ?? (null! as $.Channel<number> | null),
			once: init?.once ? $.markAsStructValue($.cloneStructValue(init.once)) : $.markAsStructValue(new sync.Once()),
			localDone: init?.localDone ?? (null! as $.Channel<{}> | null),
			remoteDone: init?.remoteDone ?? (null! as $.Channel<{}> | null),
			readDeadline: init?.readDeadline ? init.readDeadline.clone() : new pipeDeadline(undefined, true),
			writeDeadline: init?.writeDeadline ? init.writeDeadline.clone() : new pipeDeadline(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pipe {
		return new pipe(this, true)
	}

	public __goscriptAssign(source: pipe): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.wrMu, values.wrMu)
		target.rdRx = values.rdRx
		target.rdTx = values.rdTx
		target.wrTx = values.wrTx
		target.wrRx = values.wrRx
		$.assignStruct(target.once, values.once)
		target.localDone = values.localDone
		target.remoteDone = values.remoteDone
		$.assignStruct(target.readDeadline, values.readDeadline)
		$.assignStruct(target.writeDeadline, values.writeDeadline)
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const p: pipe | $.VarRef<pipe> | null = this;
		const p$: pipe = p == null ? $.pointerTarget<pipe>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<pipe>(p)
		await (p$ as pipe).once.Do($.functionValue((): void => {
			void (p$ as pipe).localDone!.close()
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return null
	}

	public LocalAddr(): __goscript_net.Addr | null {
		return $.interfaceValue<__goscript_net.Addr | null>(new pipeAddr(undefined, true), "net.pipeAddr", "net.pipeAddr")
	}

	public async Read(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const p: pipe | $.VarRef<pipe> | null = this;
		let [n, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as pipe).read(b) : pipe.prototype.read.call(p, b))
		if (((err != null) && (!$.comparableEqual(err, io.EOF))) && (!$.comparableEqual(err, io.ErrClosedPipe))) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "read", Net: "pipe", Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, err]
	}

	public RemoteAddr(): __goscript_net.Addr | null {
		return $.interfaceValue<__goscript_net.Addr | null>(new pipeAddr(undefined, true), "net.pipeAddr", "net.pipeAddr")
	}

	public async SetDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const p: pipe | $.VarRef<pipe> | null = this;
		const p$: pipe = p == null ? $.pointerTarget<pipe>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<pipe>(p)
		if (await isClosedChan((p$ as pipe).localDone) || await isClosedChan((p$ as pipe).remoteDone)) {
			return io.ErrClosedPipe
		}
		await (p$ as pipe).readDeadline.set(t)
		await (p$ as pipe).writeDeadline.set(t)
		return null
	}

	public async SetReadDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const p: pipe | $.VarRef<pipe> | null = this;
		const p$: pipe = p == null ? $.pointerTarget<pipe>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<pipe>(p)
		if (await isClosedChan((p$ as pipe).localDone) || await isClosedChan((p$ as pipe).remoteDone)) {
			return io.ErrClosedPipe
		}
		await (p$ as pipe).readDeadline.set(t)
		return null
	}

	public async SetWriteDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const p: pipe | $.VarRef<pipe> | null = this;
		const p$: pipe = p == null ? $.pointerTarget<pipe>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<pipe>(p)
		if (await isClosedChan((p$ as pipe).localDone) || await isClosedChan((p$ as pipe).remoteDone)) {
			return io.ErrClosedPipe
		}
		await (p$ as pipe).writeDeadline.set(t)
		return null
	}

	public async Write(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const p: pipe | $.VarRef<pipe> | null = this;
		let [n, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as pipe).write(b) : pipe.prototype.write.call(p, b))
		if ((err != null) && (!$.comparableEqual(err, io.ErrClosedPipe))) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "write", Net: "pipe", Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, err]
	}

	public async read(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const p: pipe | $.VarRef<pipe> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const p$: pipe = p == null ? $.pointerTarget<pipe>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<pipe>(p)
		switch ((true as boolean)) {
			case await isClosedChan((p$ as pipe).localDone):
			{
				return [0, io.ErrClosedPipe]
				break
			}
			case await isClosedChan((p$ as pipe).remoteDone):
			{
				return [0, io.EOF]
				break
			}
			case await isClosedChan(await (p$ as pipe).readDeadline.wait()):
			{
				return [0, os.ErrDeadlineExceeded]
				break
			}
		}

		const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, [number, $.GoError]>([
			{
				id: 0,
				isSend: false,
				channel: (p$ as pipe).rdRx,
				onSelected: async (__goscriptSelect1Result) => {
					let bw = __goscriptSelect1Result.value
					let nr = $.copy(b, bw)
					await $.chanSend((p$ as pipe).rdTx, nr)
					return [nr, null]
				}
			},
			{
				id: 1,
				isSend: false,
				channel: (p$ as pipe).localDone,
				onSelected: async (__goscriptSelect1Result) => {
					return [0, io.ErrClosedPipe]
				}
			},
			{
				id: 2,
				isSend: false,
				channel: (p$ as pipe).remoteDone,
				onSelected: async (__goscriptSelect1Result) => {
					return [0, io.EOF]
				}
			},
			{
				id: 3,
				isSend: false,
				channel: await (p$ as pipe).readDeadline.wait(),
				onSelected: async (__goscriptSelect1Result) => {
					return [0, os.ErrDeadlineExceeded]
				}
			}
		], false)
		if (__goscriptSelect1HasReturn) {
			return __goscriptSelect1Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async write(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const p: pipe | $.VarRef<pipe> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		using __defer = new $.DisposableStack()
		const p$: pipe = p == null ? $.pointerTarget<pipe>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<pipe>(p)
		switch ((true as boolean)) {
			case await isClosedChan((p$ as pipe).localDone):
			{
				return [0, io.ErrClosedPipe]
				break
			}
			case await isClosedChan((p$ as pipe).remoteDone):
			{
				return [0, io.ErrClosedPipe]
				break
			}
			case await isClosedChan(await (p$ as pipe).writeDeadline.wait()):
			{
				return [0, os.ErrDeadlineExceeded]
				break
			}
		}

		await (p$ as pipe).wrMu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as pipe).wrMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		for (let once = true; once || ($.sliceLen(b) > 0); once = false) {
			const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, [number, $.GoError]>([
				{
					id: 0,
					isSend: true,
					channel: (p$ as pipe).wrTx,
					value: b,
					onSelected: async (__goscriptSelect2Result) => {
						let nw = await $.chanRecv((p$ as pipe).wrRx)
						b = $.goSlice(b, nw, undefined)
						n = n + (nw)
					}
				},
				{
					id: 1,
					isSend: false,
					channel: (p$ as pipe).localDone,
					onSelected: async (__goscriptSelect2Result) => {
						const __goscriptReturn0: [number, $.GoError] = [n, io.ErrClosedPipe]
						n = __goscriptReturn0[0]
						err = __goscriptReturn0[1]
						__defer.dispose()
						return [n, err]
					}
				},
				{
					id: 2,
					isSend: false,
					channel: (p$ as pipe).remoteDone,
					onSelected: async (__goscriptSelect2Result) => {
						const __goscriptReturn1: [number, $.GoError] = [n, io.ErrClosedPipe]
						n = __goscriptReturn1[0]
						err = __goscriptReturn1[1]
						__defer.dispose()
						return [n, err]
					}
				},
				{
					id: 3,
					isSend: false,
					channel: await (p$ as pipe).writeDeadline.wait(),
					onSelected: async (__goscriptSelect2Result) => {
						const __goscriptReturn2: [number, $.GoError] = [n, os.ErrDeadlineExceeded]
						n = __goscriptReturn2[0]
						err = __goscriptReturn2[1]
						__defer.dispose()
						return [n, err]
					}
				}
			], false)
			if (__goscriptSelect2HasReturn) {
				return __goscriptSelect2Value
			}
		}
		const __goscriptReturn3: [number, $.GoError] = [n, null]
		n = __goscriptReturn3[0]
		err = __goscriptReturn3[1]
		__defer.dispose()
		return [n, err]
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"net.pipe",
		() => new pipe(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("LocalAddr", [], ["net.Addr"], true), $.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("RemoteAddr", [], ["net.Addr"], true), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		pipe,
		() => [/* @__PURE__ */ $.structField("wrMu", "sync.Mutex", [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("rdRx", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "receive"), [1], 8, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("rdTx", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.basicType("int"), "send"), [2], 16, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("wrTx", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "send"), [3], 24, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("wrRx", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.basicType("int"), "receive"), [4], 32, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("once", "sync.Once", [5], 40, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("localDone", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [6], 56, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("remoteDone", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), [7], 64, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("readDeadline", "net.pipeDeadline", [8], 72, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("writeDeadline", "net.pipeDeadline", [9], 96, false, { pkgPath: "net" })]
	)
}

export function makePipeDeadline(): pipeDeadline {
	return new pipeDeadline({cancel: $.makeChannel<{}>(0, {}, "both")}, true)
}

export async function isClosedChan(c: $.Channel<{}> | null): globalThis.Promise<boolean> {
	const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, boolean>([
		{
			id: 0,
			isSend: false,
			channel: c,
			onSelected: async (__goscriptSelect0Result) => {
				return true
			}
		},
		{
			id: -1,
			isSend: false,
			channel: null,
			onSelected: async (__goscriptSelect0Result) => {
				return false
			}
		}
	], true)
	if (__goscriptSelect0HasReturn) {
		return __goscriptSelect0Value
	}
	throw new globalThis.Error("unreachable select")
	throw new globalThis.Error("goscript: unreachable return")
}

export function Pipe(): [__goscript_net.Conn | null, __goscript_net.Conn | null] {
	let cb1: $.Channel<$.Slice<number>> | null = $.makeChannel<$.Slice<number>>(0, null! as $.Slice<number>, "both")
	let cb2: $.Channel<$.Slice<number>> | null = $.makeChannel<$.Slice<number>>(0, null! as $.Slice<number>, "both")
	let cn1: $.Channel<number> | null = $.makeChannel<number>(0, 0, "both")
	let cn2: $.Channel<number> | null = $.makeChannel<number>(0, 0, "both")
	let done1: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
	let done2: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")

	let p1: pipe | $.VarRef<pipe> | null = (() => { const __goscriptLiteralField0 = makePipeDeadline(); const __goscriptLiteralField1 = makePipeDeadline(); return new pipe({rdRx: cb1, rdTx: cn1, wrTx: cb2, wrRx: cn2, localDone: done1, remoteDone: done2, readDeadline: __goscriptLiteralField0, writeDeadline: __goscriptLiteralField1}) })()
	let p2: pipe | $.VarRef<pipe> | null = (() => { const __goscriptLiteralField2 = makePipeDeadline(); const __goscriptLiteralField3 = makePipeDeadline(); return new pipe({rdRx: cb2, rdTx: cn2, wrTx: cb1, wrRx: cn1, localDone: done2, remoteDone: done1, readDeadline: __goscriptLiteralField2, writeDeadline: __goscriptLiteralField3}) })()
	return [$.interfaceValue<__goscript_net.Conn | null>(p1, "*net.pipe", /* @__PURE__ */ $.pointerType("net.pipe")), $.interfaceValue<__goscript_net.Conn | null>(p2, "*net.pipe", /* @__PURE__ */ $.pointerType("net.pipe"))]
}
