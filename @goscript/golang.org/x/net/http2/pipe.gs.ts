// Generated file based on pipe.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("golang.org/x/net/http2", ["http2.pipe", "http2.pipeBuffer"])

export type pipeBuffer = {
	Len(): number | globalThis.Promise<number>
	Read(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	Write(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"http2.pipeBuffer",
	null,
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export class pipe {
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get c(): sync.Cond {
		return this._fields.c
	}

	public set c(value: sync.Cond) {
		this._fields.c = value
	}

	public get b(): pipeBuffer | null {
		return this._fields.b
	}

	public set b(value: pipeBuffer | null) {
		this._fields.b = value
	}

	public get unread(): number {
		return this._fields.unread
	}

	public set unread(value: number) {
		this._fields.unread = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get breakErr(): $.GoError {
		return this._fields.breakErr
	}

	public set breakErr(value: $.GoError) {
		this._fields.breakErr = value
	}

	public get donec(): $.Channel<{}> | null {
		return this._fields.donec
	}

	public set donec(value: $.Channel<{}> | null) {
		this._fields.donec = value
	}

	public get readFn(): (() => void) | null {
		return this._fields.readFn
	}

	public set readFn(value: (() => void) | null) {
		this._fields.readFn = value
	}

	public _fields: {
		mu: sync.Mutex
		c: sync.Cond
		b: pipeBuffer | null
		unread: number
		err: $.GoError
		breakErr: $.GoError
		donec: $.Channel<{}> | null
		readFn: (() => void) | null
	}

	constructor(init?: Partial<{mu?: sync.Mutex, c?: sync.Cond, b?: pipeBuffer | null, unread?: number, err?: $.GoError, breakErr?: $.GoError, donec?: $.Channel<{}> | null, readFn?: (() => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			c: init?.c ? $.markAsStructValue($.cloneStructValue(init.c)) : $.markAsStructValue(new sync.Cond()),
			b: init?.b ?? (null! as pipeBuffer | null),
			unread: init?.unread ?? (0 as number),
			err: init?.err ?? (null! as $.GoError),
			breakErr: init?.breakErr ?? (null! as $.GoError),
			donec: init?.donec ?? (null! as $.Channel<{}> | null),
			readFn: init?.readFn ?? (null! as (() => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pipe {
		return new pipe(this, true)
	}

	public __goscriptAssign(source: pipe): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		$.assignStruct(target.c, values.c)
		target.b = $.assignFieldValue(target.b, values.b, "http2.pipeBuffer")
		target.unread = values.unread
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.breakErr = $.assignFieldValue(target.breakErr, values.breakErr, "error")
		target.donec = values.donec
		target.readFn = values.readFn
	}

	public async BreakWithError(err: $.GoError): globalThis.Promise<void> {
		const p: pipe | $.VarRef<pipe> | null = this;
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as pipe).closeWithError($.fieldRef($.pointerValue<pipe>(p)._fields, "breakErr"), err, (null as (() => void) | null)) : pipe.prototype.closeWithError.call(p, $.fieldRef($.pointerValue<pipe>(p)._fields, "breakErr"), err, (null as (() => void) | null)))
	}

	public async CloseWithError(err: $.GoError): globalThis.Promise<void> {
		const p: pipe | $.VarRef<pipe> | null = this;
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as pipe).closeWithError($.fieldRef($.pointerValue<pipe>(p)._fields, "err"), err, (null as (() => void) | null)) : pipe.prototype.closeWithError.call(p, $.fieldRef($.pointerValue<pipe>(p)._fields, "err"), err, (null as (() => void) | null)))
	}

	public async Done(): globalThis.Promise<$.Channel<{}> | null> {
		let p: pipe | $.VarRef<pipe> | null = this;
		using __defer = new $.DisposableStack()
		const p$: pipe = p == null ? $.pointerTarget<pipe>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<pipe>(p)
		await (p$ as pipe).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as pipe).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		if ((p$ as pipe).donec == null) {
			;(p$ as pipe).donec = $.makeChannel<{}>(0, {}, "both")
			if (((p$ as pipe).err != null) || ((p$ as pipe).breakErr != null)) {
				// Already hit an error.
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as pipe).closeDoneLocked() : pipe.prototype.closeDoneLocked.call(p))
			}
		}
		return (p$ as pipe).donec
	}

	public async Err(): globalThis.Promise<$.GoError> {
		const p: pipe | $.VarRef<pipe> | null = this;
		using __defer = new $.DisposableStack()
		const p$: pipe = p == null ? $.pointerTarget<pipe>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<pipe>(p)
		await (p$ as pipe).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as pipe).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		if ((p$ as pipe).breakErr != null) {
			return (p$ as pipe).breakErr
		}
		return (p$ as pipe).err
	}

	public async Len(): globalThis.Promise<number> {
		const p: pipe | $.VarRef<pipe> | null = this;
		using __defer = new $.DisposableStack()
		const p$: pipe = p == null ? $.pointerTarget<pipe>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<pipe>(p)
		await (p$ as pipe).mu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as pipe).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		if ((p$ as pipe).b == null) {
			return (p$ as pipe).unread
		}
		return (__goscriptAwait = $.pointerValue<Exclude<pipeBuffer, null>>((p$ as pipe).b).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Read(d: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let p: pipe | $.VarRef<pipe> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		using __defer = new $.DisposableStack()
		const p$: pipe = p == null ? $.pointerTarget<pipe>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<pipe>(p)
		await (p$ as pipe).mu.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as pipe).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		if ((p$ as pipe).c.L == null) {
			;(p$ as pipe).c.L = $.interfaceValue<sync.Locker | null>($.fieldRef((p$ as pipe)._fields, "mu"), "*sync.Mutex", /* @__PURE__ */ $.pointerType("sync.Mutex"))
		}
		while (true) {
			if ((p$ as pipe).breakErr != null) {
				const __goscriptReturn0: [number, $.GoError] = [0, (p$ as pipe).breakErr]
				n = __goscriptReturn0[0]
				err = __goscriptReturn0[1]
				__defer.dispose()
				return [n, err]
			}
			if (((p$ as pipe).b != null) && ((__goscriptAwait = $.pointerValue<Exclude<pipeBuffer, null>>((p$ as pipe).b).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0)) {
				const __goscriptReturn2: [number, $.GoError] = await $.pointerValue<Exclude<pipeBuffer, null>>((p$ as pipe).b).Read(d)
				n = __goscriptReturn2[0]
				err = __goscriptReturn2[1]
				__defer.dispose()
				return [n, err]
			}
			if ((p$ as pipe).err != null) {
				if ((p$ as pipe).readFn != null) {
					void (__goscriptAwait = (p$ as pipe).readFn!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
					;(p$ as pipe).readFn = (null as (() => void) | null)
				}
				;(p$ as pipe).b = null
				const __goscriptReturn3: [number, $.GoError] = [0, (p$ as pipe).err]
				n = __goscriptReturn3[0]
				err = __goscriptReturn3[1]
				__defer.dispose()
				return [n, err]
			}
			await (p$ as pipe).c.Wait()
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Write(d: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let p: pipe | $.VarRef<pipe> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		using __defer = new $.DisposableStack()
		const p$: pipe = p == null ? $.pointerTarget<pipe>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<pipe>(p)
		await (p$ as pipe).mu.Lock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as pipe).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })
		if ((p$ as pipe).c.L == null) {
			;(p$ as pipe).c.L = $.interfaceValue<sync.Locker | null>($.fieldRef((p$ as pipe)._fields, "mu"), "*sync.Mutex", /* @__PURE__ */ $.pointerType("sync.Mutex"))
		}
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Signal())((p$ as pipe).c), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Cond).Signal-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })
		if (((p$ as pipe).err != null) || ((p$ as pipe).breakErr != null)) {
			const __goscriptReturn4: [number, $.GoError] = [0, errClosedPipeWrite]
			n = __goscriptReturn4[0]
			err = __goscriptReturn4[1]
			__defer.dispose()
			return [n, err]
		}
		// pipe.setBuffer is never invoked, leaving the buffer uninitialized.
		// We shouldn't try to write to an uninitialized pipe,
		// but returning an error is better than panicking.
		if ((p$ as pipe).b == null) {
			const __goscriptReturn5: [number, $.GoError] = [0, errUninitializedPipeWrite]
			n = __goscriptReturn5[0]
			err = __goscriptReturn5[1]
			__defer.dispose()
			return [n, err]
		}
		const __goscriptReturn7: [number, $.GoError] = await $.pointerValue<Exclude<pipeBuffer, null>>((p$ as pipe).b).Write(d)
		n = __goscriptReturn7[0]
		err = __goscriptReturn7[1]
		__defer.dispose()
		return [n, err]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async closeDoneLocked(): globalThis.Promise<void> {
		const p: pipe | $.VarRef<pipe> | null = this;
		const p$: pipe = p == null ? $.pointerTarget<pipe>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<pipe>(p)
		if ((p$ as pipe).donec == null) {
			return
		}
		// Close if unclosed. This isn't racy since we always
		// hold p.mu while closing.
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
			{
				id: 0,
				isSend: false,
				channel: (p$ as pipe).donec,
			},
			{
				id: -1,
				isSend: false,
				channel: null,
				onSelected: async (__goscriptSelect0Result) => {
					void (p$ as pipe).donec!.close()
				}
			}
		], true)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
	}

	public async closeWithError(dst: $.VarRef<$.GoError> | null, err: $.GoError, fn: (() => void) | null): globalThis.Promise<void> {
		let p: pipe | $.VarRef<pipe> | null = this;
		using __defer = new $.DisposableStack()
		const p$: pipe = p == null ? $.pointerTarget<pipe>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<pipe>(p)
		if (err == null) {
			$.panic("err must be non-nil")
		}
		await (p$ as pipe).mu.Lock()
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as pipe).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee6() })
		if ((p$ as pipe).c.L == null) {
			;(p$ as pipe).c.L = $.interfaceValue<sync.Locker | null>($.fieldRef((p$ as pipe)._fields, "mu"), "*sync.Mutex", /* @__PURE__ */ $.pointerType("sync.Mutex"))
		}
		const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.Signal())((p$ as pipe).c), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Cond).Signal-fm")
		__defer.defer(() => { __goscriptDeferCallee7() })
		if ($.pointerValue<$.GoError>(dst) != null) {
			// Already been done.
			return
		}
		;(p$ as pipe).readFn = fn
		if ($.pointerEqual(dst, $.fieldRef((p$ as pipe)._fields, "breakErr"))) {
			if ((p$ as pipe).b != null) {
				;(p$ as pipe).unread = (p$ as pipe).unread + ((__goscriptAwait = $.pointerValue<Exclude<pipeBuffer, null>>((p$ as pipe).b).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			}
			;(p$ as pipe).b = null
		}
		dst!.value = err
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as pipe).closeDoneLocked() : pipe.prototype.closeDoneLocked.call(p))
	}

	public async closeWithErrorAndCode(err: $.GoError, fn: (() => void) | null): globalThis.Promise<void> {
		const p: pipe | $.VarRef<pipe> | null = this;
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as pipe).closeWithError($.fieldRef($.pointerValue<pipe>(p)._fields, "err"), err, fn) : pipe.prototype.closeWithError.call(p, $.fieldRef($.pointerValue<pipe>(p)._fields, "err"), err, fn))
	}

	public async setBuffer(b: pipeBuffer | null): globalThis.Promise<void> {
		let p: pipe | $.VarRef<pipe> | null = this;
		using __defer = new $.DisposableStack()
		const p$: pipe = p == null ? $.pointerTarget<pipe>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<pipe>(p)
		await (p$ as pipe).mu.Lock()
		const __goscriptDeferCallee8 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as pipe).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee8() })
		if (((p$ as pipe).err != null) || ((p$ as pipe).breakErr != null)) {
			return
		}
		;(p$ as pipe).b = b
	}

	static __typeInfo = $.registerStructType(
		"http2.pipe",
		() => new pipe(),
		() => [$.methodSignature("BreakWithError", [["err", "error"]], [], true), $.methodSignature("CloseWithError", [["err", "error"]], [], true), $.methodSignature("Done", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")], true), $.methodSignature("Err", [], ["error"], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Read", [["d", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("Write", [["d", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("closeDoneLocked", [], [], true), $.methodSignature("closeWithError", [["dst", /* @__PURE__ */ $.pointerType("error")], ["err", "error"], ["fn", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("closeWithErrorAndCode", [["err", "error"], ["fn", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("setBuffer", [["b", "http2.pipeBuffer"]], [], true)],
		pipe,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("c", "sync.Cond", [1], 8, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("b", "http2.pipeBuffer", [2], 64, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("unread", /* @__PURE__ */ $.basicType("int"), [3], 80, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("err", "error", [4], 88, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("breakErr", "error", [5], 104, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("donec", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [6], 120, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("readFn", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [7], 128, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export let errClosedPipeWrite: $.GoError = errors.New("write on closed buffer")

export function __goscript_set_errClosedPipeWrite(__goscriptValue: $.GoError): void {
	errClosedPipeWrite = __goscriptValue
}

export let errUninitializedPipeWrite: $.GoError = errors.New("write on uninitialized buffer")

export function __goscript_set_errUninitializedPipeWrite(__goscriptValue: $.GoError): void {
	errUninitializedPipeWrite = __goscriptValue
}

var __goscriptAwait: any
