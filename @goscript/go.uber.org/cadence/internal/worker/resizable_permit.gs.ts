// Generated file based on resizable_permit.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sync from "@goscript/sync/index.js"

import * as semaphore from "@goscript/github.com/marusama/semaphore/v2/index.js"

import * as __goscript_concurrency from "./concurrency.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/sync/index.js"
import "@goscript/github.com/marusama/semaphore/v2/index.js"
import "./concurrency.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal/worker", ["worker.resizablePermit", "worker.permitChannel"])

export class resizablePermit {
	public get sem(): semaphore.Semaphore | null {
		return this._fields.sem
	}

	public set sem(value: semaphore.Semaphore | null) {
		this._fields.sem = value
	}

	public _fields: {
		sem: semaphore.Semaphore | null
	}

	constructor(init?: Partial<{sem?: semaphore.Semaphore | null}>, __goscriptValue?: boolean) {
		this._fields = {
			sem: init?.sem ?? (null! as semaphore.Semaphore | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): resizablePermit {
		return new resizablePermit(this, true)
	}

	public __goscriptAssign(source: resizablePermit): void {
		const target = this._fields
		const values = source._fields
		target.sem = $.assignFieldValue(target.sem, values.sem, "semaphore.Semaphore")
	}

	public async Acquire(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: resizablePermit | $.VarRef<resizablePermit> | null = this;
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<semaphore.Semaphore, null>>($.pointerValue<resizablePermit>(p).sem).Acquire(ctx, 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return fmt.Errorf("failed to acquire permit before context is done: %w", (err as any))
			}
		}
		return null
	}

	public async AcquireChan(ctx: context.Context | null): globalThis.Promise<[$.Channel<{}> | null, (() => void) | null]> {
		const p: resizablePermit | $.VarRef<resizablePermit> | null = this;
		let __goscriptTuple0: any = context.WithCancel($.pointerValueOrNil(ctx)!)
		ctx = __goscriptTuple0[0]
		let cancel = __goscriptTuple0[1]
		let pc: permitChannel | $.VarRef<permitChannel> | null = new permitChannel({p: $.interfaceValue<__goscript_concurrency.Permit | null>(p, "*worker.resizablePermit", /* @__PURE__ */ $.pointerType("worker.resizablePermit")), c: $.makeChannel<{}>(0, {}, "both"), ctx: ctx, cancel: cancel, wg: new sync.WaitGroup()})
		await (pc !== null && (pc as any).__isVarRef !== true && (pc as any).__goValue === undefined ? ((pc as any) as permitChannel).Start() : permitChannel.prototype.Start.call(pc))
		return [(pc !== null && (pc as any).__isVarRef !== true && (pc as any).__goValue === undefined ? ((pc as any) as permitChannel).C() : permitChannel.prototype.C.call(pc)), $.functionValue(async (): globalThis.Promise<void> => {
			await (pc !== null && (pc as any).__isVarRef !== true && (pc as any).__goValue === undefined ? ((pc as any) as permitChannel).Close() : permitChannel.prototype.Close.call(pc))
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))]
	}

	public async Count(): globalThis.Promise<number> {
		const p: resizablePermit | $.VarRef<resizablePermit> | null = this;
		return $.pointerValue<Exclude<semaphore.Semaphore, null>>($.pointerValue<resizablePermit>(p).sem).GetCount()
	}

	public async Quota(): globalThis.Promise<number> {
		const p: resizablePermit | $.VarRef<resizablePermit> | null = this;
		return $.pointerValue<Exclude<semaphore.Semaphore, null>>($.pointerValue<resizablePermit>(p).sem).GetLimit()
	}

	public async Release(): globalThis.Promise<void> {
		const p: resizablePermit | $.VarRef<resizablePermit> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<semaphore.Semaphore, null>>($.pointerValue<resizablePermit>(p).sem).Release(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async SetQuota(c: number): globalThis.Promise<void> {
		const p: resizablePermit | $.VarRef<resizablePermit> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<semaphore.Semaphore, null>>($.pointerValue<resizablePermit>(p).sem).SetLimit(c), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"worker.resizablePermit",
		() => new resizablePermit(),
		() => [$.methodSignature("Acquire", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("AcquireChan", [["ctx", "context.Context"]], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("Count", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Quota", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Release", [], [], true), $.methodSignature("SetQuota", [["c", /* @__PURE__ */ $.basicType("int")]], [], true)],
		resizablePermit,
		() => [/* @__PURE__ */ $.structField("sem", "semaphore.Semaphore", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/worker" })]
	)
}

export class permitChannel {
	public get p(): __goscript_concurrency.Permit | null {
		return this._fields.p
	}

	public set p(value: __goscript_concurrency.Permit | null) {
		this._fields.p = value
	}

	public get c(): $.Channel<{}> | null {
		return this._fields.c
	}

	public set c(value: $.Channel<{}> | null) {
		this._fields.c = value
	}

	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get cancel(): (() => void) | null {
		return this._fields.cancel
	}

	public set cancel(value: (() => void) | null) {
		this._fields.cancel = value
	}

	public get wg(): sync.WaitGroup | $.VarRef<sync.WaitGroup> | null {
		return this._fields.wg
	}

	public set wg(value: sync.WaitGroup | $.VarRef<sync.WaitGroup> | null) {
		this._fields.wg = value
	}

	public _fields: {
		p: __goscript_concurrency.Permit | null
		c: $.Channel<{}> | null
		ctx: context.Context | null
		cancel: (() => void) | null
		wg: sync.WaitGroup | $.VarRef<sync.WaitGroup> | null
	}

	constructor(init?: Partial<{p?: __goscript_concurrency.Permit | null, c?: $.Channel<{}> | null, ctx?: context.Context | null, cancel?: (() => void) | null, wg?: sync.WaitGroup | $.VarRef<sync.WaitGroup> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			p: init?.p ?? (null! as __goscript_concurrency.Permit | null),
			c: init?.c ?? (null! as $.Channel<{}> | null),
			ctx: init?.ctx ?? (null! as context.Context | null),
			cancel: init?.cancel ?? (null! as (() => void) | null),
			wg: init?.wg ?? (null! as sync.WaitGroup | $.VarRef<sync.WaitGroup> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): permitChannel {
		return new permitChannel(this, true)
	}

	public __goscriptAssign(source: permitChannel): void {
		const target = this._fields
		const values = source._fields
		target.p = $.assignFieldValue(target.p, values.p, "worker.Permit")
		target.c = values.c
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.cancel = values.cancel
		target.wg = values.wg
	}

	public C(): $.Channel<{}> | null {
		const ch: permitChannel | $.VarRef<permitChannel> | null = this;
		return $.pointerValue<permitChannel>(ch).c
	}

	public async Close(): globalThis.Promise<void> {
		const ch: permitChannel | $.VarRef<permitChannel> | null = this;
		const ch$: permitChannel = ch == null ? $.pointerTarget<permitChannel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<permitChannel>(ch)
		void (__goscriptAwait = (ch$ as permitChannel).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await sync.WaitGroup.prototype.Wait.call($.pointerValue<sync.WaitGroup>((ch$ as permitChannel).wg))
	}

	public async Start(): globalThis.Promise<void> {
		const ch: permitChannel | $.VarRef<permitChannel> | null = this;
		const ch$: permitChannel = ch == null ? $.pointerTarget<permitChannel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<permitChannel>(ch)
		sync.WaitGroup.prototype.Add.call($.pointerValue<sync.WaitGroup>((ch$ as permitChannel).wg), 1)
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			using __defer = new $.DisposableStack()
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Done())($.pointerValue<sync.WaitGroup>((ch$ as permitChannel).wg)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*WaitGroup).Done-fm")
			__defer.defer(() => { __goscriptDeferCallee0() })
			{
				let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_concurrency.Permit, null>>((ch$ as permitChannel).p).Acquire((ch$ as permitChannel).ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return
				}
			}
			// avoid blocking on sending to the channel
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: true,
					channel: (ch$ as permitChannel).c,
					value: {},
				},
				{
					id: 1,
					isSend: false,
					channel: ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((ch$ as permitChannel).ctx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect0Result) => {
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_concurrency.Permit, null>>((ch$ as permitChannel).p).Release(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
			], false)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}
		})() })
	}

	static __typeInfo = $.registerStructType(
		"worker.permitChannel",
		() => new permitChannel(),
		() => [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")], true), $.methodSignature("Close", [], [], true), $.methodSignature("Start", [], [], true)],
		permitChannel,
		() => [/* @__PURE__ */ $.structField("p", "worker.Permit", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("c", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [2], 24, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("cancel", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [3], 40, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("wg", /* @__PURE__ */ $.pointerType("sync.WaitGroup"), [4], 48, false, { pkgPath: "go.uber.org/cadence/internal/worker" })]
	)
}

export function NewResizablePermit(initCount: number): __goscript_concurrency.Permit | null {
	return $.interfaceValue<__goscript_concurrency.Permit | null>((() => { const __goscriptLiteralField0 = semaphore.New(initCount); return new resizablePermit({sem: __goscriptLiteralField0}) })(), "*worker.resizablePermit", /* @__PURE__ */ $.pointerType("worker.resizablePermit"))
}

var __goscriptAwait: any
