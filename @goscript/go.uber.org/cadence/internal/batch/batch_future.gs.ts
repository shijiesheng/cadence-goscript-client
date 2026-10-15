// Generated file based on batch_future.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"

import * as internal from "@goscript/go.uber.org/cadence/internal/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/go.uber.org/multierr/index.js"
import "@goscript/go.uber.org/cadence/internal/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal/batch", ["batch.BatchFuture"])

export class BatchFuture {
	public get futures(): $.Slice<internal.Future | null> {
		return this._fields.futures
	}

	public set futures(value: $.Slice<internal.Future | null>) {
		this._fields.futures = value
	}

	public get settables(): $.Slice<internal.Settable | null> {
		return this._fields.settables
	}

	public set settables(value: $.Slice<internal.Settable | null>) {
		this._fields.settables = value
	}

	public get factories(): $.Slice<((ctx: internal.Context | null) => internal.Future | null | globalThis.Promise<internal.Future | null>) | null> {
		return this._fields.factories
	}

	public set factories(value: $.Slice<((ctx: internal.Context | null) => internal.Future | null | globalThis.Promise<internal.Future | null>) | null>) {
		this._fields.factories = value
	}

	public get batchSize(): number {
		return this._fields.batchSize
	}

	public set batchSize(value: number) {
		this._fields.batchSize = value
	}

	// state
	public get wg(): internal.WaitGroup | null {
		return this._fields.wg
	}

	public set wg(value: internal.WaitGroup | null) {
		this._fields.wg = value
	}

	public _fields: {
		futures: $.Slice<internal.Future | null>
		settables: $.Slice<internal.Settable | null>
		factories: $.Slice<((ctx: internal.Context | null) => internal.Future | null | globalThis.Promise<internal.Future | null>) | null>
		batchSize: number
		wg: internal.WaitGroup | null
	}

	constructor(init?: Partial<{futures?: $.Slice<internal.Future | null>, settables?: $.Slice<internal.Settable | null>, factories?: $.Slice<((ctx: internal.Context | null) => internal.Future | null | globalThis.Promise<internal.Future | null>) | null>, batchSize?: number, wg?: internal.WaitGroup | null}>, __goscriptValue?: boolean) {
		this._fields = {
			futures: init?.futures ?? (null! as $.Slice<internal.Future | null>),
			settables: init?.settables ?? (null! as $.Slice<internal.Settable | null>),
			factories: init?.factories ?? (null! as $.Slice<((ctx: internal.Context | null) => internal.Future | null | globalThis.Promise<internal.Future | null>) | null>),
			batchSize: init?.batchSize ?? (0 as number),
			wg: init?.wg ?? (null! as internal.WaitGroup | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BatchFuture {
		return new BatchFuture(this, true)
	}

	public __goscriptAssign(source: BatchFuture): void {
		const target = this._fields
		const values = source._fields
		target.futures = values.futures
		target.settables = values.settables
		target.factories = values.factories
		target.batchSize = values.batchSize
		target.wg = $.assignFieldValue(target.wg, values.wg, "internal.WaitGroup")
	}

	public async Get(ctx: internal.Context | null, valuePtr: any): globalThis.Promise<$.GoError> {
		const b: BatchFuture | $.VarRef<BatchFuture> | null = this;
		const b$: BatchFuture = b == null ? $.pointerTarget<BatchFuture>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<BatchFuture>(b)
		// No assignment if valuePtr is nil
		if (valuePtr == null) {
			void (__goscriptAwait = $.pointerValue<Exclude<internal.WaitGroup, null>>((b$ as BatchFuture).wg).Wait(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let errs: $.GoError = null! as $.GoError
			for (let __goscriptRangeTarget0 = (b$ as BatchFuture).futures, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
				errs = multierr.Append(errs, (__goscriptAwait = $.pointerValue<Exclude<internal.Future, null>>($.arrayIndex((b$ as BatchFuture).futures!, i)).Get(ctx, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			}
			return errs
		}

		let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(valuePtr)))
		if (($.markAsStructValue($.cloneStructValue(v)).Kind() != 22) || ($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Elem())).Kind() != 23)) {
			return fmt.Errorf("valuePtr must be a pointer to a slice, got %v", $.namedValueInterfaceValue<any>($.markAsStructValue($.cloneStructValue(v)).Kind(), "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
		}

		// resize the slice to the length of the futures
		let slice = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Elem()))
		if ($.markAsStructValue($.cloneStructValue(slice)).Cap() < $.sliceLen((b$ as BatchFuture).futures)) {
			$.markAsStructValue($.cloneStructValue(slice)).Grow($.sliceLen((b$ as BatchFuture).futures) - $.markAsStructValue($.cloneStructValue(slice)).Cap())
		}
		$.markAsStructValue($.cloneStructValue(slice)).SetLen($.sliceLen((b$ as BatchFuture).futures))

		// wait for all futures to be ready
		void (__goscriptAwait = $.pointerValue<Exclude<internal.WaitGroup, null>>((b$ as BatchFuture).wg).Wait(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// loop through all elements of valuePtr
		let errs: $.GoError = null! as $.GoError
		for (let __goscriptRangeTarget1 = (b$ as BatchFuture).futures, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let e = (__goscriptAwait = $.pointerValue<Exclude<internal.Future, null>>($.arrayIndex((b$ as BatchFuture).futures!, i)).Get(ctx, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(slice)).Index(i))).Addr())).Interface()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			errs = multierr.Append(errs, e)
		}

		return errs
	}

	public GetFutures(): $.Slice<internal.Future | null> {
		const b: BatchFuture | $.VarRef<BatchFuture> | null = this;
		return $.pointerValue<BatchFuture>(b).futures
	}

	public async IsReady(): globalThis.Promise<boolean> {
		const b: BatchFuture | $.VarRef<BatchFuture> | null = this;
		for (let __goscriptRangeTarget2 = $.pointerValue<BatchFuture>(b).futures, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let future = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as internal.Future | null)
			if (!(__goscriptAwait = (future !== null && (future as any).__isVarRef !== true && (future as any).__goValue === undefined ? (future as Exclude<internal.Future, null>) : $.pointerValue<Exclude<internal.Future, null>>(future)).IsReady(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return false
			}
		}
		return true
	}

	public async start(ctx: internal.Context | null): globalThis.Promise<void> {
		const b: BatchFuture | $.VarRef<BatchFuture> | null = this;
		const b$: BatchFuture = b == null ? $.pointerTarget<BatchFuture>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<BatchFuture>(b)

		let semaphore = await internal.NewBufferedChannel(ctx, (b$ as BatchFuture).batchSize)
		let workChan = await internal.NewNamedChannel(ctx, "batch-future-channel")
		void (__goscriptAwait = $.pointerValue<Exclude<internal.WaitGroup, null>>((b$ as BatchFuture).wg).Add(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await internal.GoNamed(ctx, "batch-future-submitter", $.functionValue(async (ctx: internal.Context | null): globalThis.Promise<void> => {
			await using __defer = new $.AsyncDisposableStack()
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Done())($.pointerValue<Exclude<internal.WaitGroup, null>>((b$ as BatchFuture).wg)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal.WaitGroup.Done-fm")
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

			for (let __goscriptRangeTarget3 = (b$ as BatchFuture).factories, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
				void (__goscriptAwait = (semaphore !== null && (semaphore as any).__isVarRef !== true && (semaphore as any).__goValue === undefined ? (semaphore as Exclude<internal.Channel, null>) : $.pointerValue<Exclude<internal.Channel, null>>(semaphore)).Send(ctx, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = (workChan !== null && (workChan as any).__isVarRef !== true && (workChan as any).__goValue === undefined ? (workChan as Exclude<internal.Channel, null>) : $.pointerValue<Exclude<internal.Channel, null>>(workChan)).Send(ctx, $.basicInterfaceValue(i, "int")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			void (__goscriptAwait = (workChan !== null && (workChan as any).__isVarRef !== true && (workChan as any).__goValue === undefined ? (workChan as Exclude<internal.Channel, null>) : $.pointerValue<Exclude<internal.Channel, null>>(workChan)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: ["internal.Context"], results: [] } as $.FunctionTypeInfo)))

		void (__goscriptAwait = $.pointerValue<Exclude<internal.WaitGroup, null>>((b$ as BatchFuture).wg).Add(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await internal.GoNamed(ctx, "batch-future-processor", $.functionValue(async (ctx: internal.Context | null): globalThis.Promise<void> => {
			await using __defer = new $.AsyncDisposableStack()
			const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Done())($.pointerValue<Exclude<internal.WaitGroup, null>>((b$ as BatchFuture).wg)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal.WaitGroup.Done-fm")
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

			let wgForFutures = await internal.NewWaitGroup(ctx)

			let idx: $.VarRef<number> = $.varRef(0)
			while ((__goscriptAwait = (workChan !== null && (workChan as any).__isVarRef !== true && (workChan as any).__goValue === undefined ? (workChan as Exclude<internal.Channel, null>) : $.pointerValue<Exclude<internal.Channel, null>>(workChan)).Receive(ctx, $.interfaceValue(idx, "*int", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int")))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				let __goscriptShadow0 = idx.value
				let __goscriptShadow1 = __goscriptShadow0

				void (__goscriptAwait = (wgForFutures !== null && (wgForFutures as any).__isVarRef !== true && (wgForFutures as any).__goValue === undefined ? (wgForFutures as Exclude<internal.WaitGroup, null>) : $.pointerValue<Exclude<internal.WaitGroup, null>>(wgForFutures)).Add(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				await internal.GoNamed(ctx, await fmt.Sprintf("batch-future-processor-one-future-%d", $.basicInterfaceValue(__goscriptShadow1, "int")), $.functionValue(async (ctx: internal.Context | null): globalThis.Promise<void> => {
					await using __defer = new $.AsyncDisposableStack()
					const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Done())((wgForFutures !== null && (wgForFutures as any).__isVarRef !== true && (wgForFutures as any).__goValue === undefined ? (wgForFutures as Exclude<internal.WaitGroup, null>) : $.pointerValue<Exclude<internal.WaitGroup, null>>(wgForFutures))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal.WaitGroup.Done-fm")
					__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee2(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

					// fork a future and chain it to the processed future for user to get the result
					let f = (__goscriptAwait = $.arrayIndex((b$ as BatchFuture).factories!, __goscriptShadow1)!(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					void (__goscriptAwait = $.pointerValue<Exclude<internal.Settable, null>>($.arrayIndex((b$ as BatchFuture).settables!, __goscriptShadow1)).Chain(f), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

					// error handling is not needed here because the result is chained to the settable
					void (__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<internal.Future, null>) : $.pointerValue<Exclude<internal.Future, null>>(f)).Get(ctx, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					void (__goscriptAwait = (semaphore !== null && (semaphore as any).__isVarRef !== true && (semaphore as any).__goValue === undefined ? (semaphore as Exclude<internal.Channel, null>) : $.pointerValue<Exclude<internal.Channel, null>>(semaphore)).Receive(ctx, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}, ({ kind: $.TypeKind.Function, params: ["internal.Context"], results: [] } as $.FunctionTypeInfo)))
			}
			void (__goscriptAwait = (wgForFutures !== null && (wgForFutures as any).__isVarRef !== true && (wgForFutures as any).__goValue === undefined ? (wgForFutures as Exclude<internal.WaitGroup, null>) : $.pointerValue<Exclude<internal.WaitGroup, null>>(wgForFutures)).Wait(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: ["internal.Context"], results: [] } as $.FunctionTypeInfo)))
	}

	static __typeInfo = $.registerStructType(
		"batch.BatchFuture",
		() => new BatchFuture(),
		() => [$.methodSignature("Get", [["ctx", "internal.Context"], ["valuePtr", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("GetFutures", [], [/* @__PURE__ */ $.sliceType("internal.Future")], true), $.methodSignature("IsReady", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("start", [["ctx", "internal.Context"]], [], true)],
		BatchFuture,
		() => [/* @__PURE__ */ $.structField("futures", /* @__PURE__ */ $.sliceType("internal.Future"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/batch" }), /* @__PURE__ */ $.structField("settables", /* @__PURE__ */ $.sliceType("internal.Settable"), [1], 24, false, { pkgPath: "go.uber.org/cadence/internal/batch" }), /* @__PURE__ */ $.structField("factories", /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, params: ["internal.Context"], results: ["internal.Future"] } as $.FunctionTypeInfo)), [2], 48, false, { pkgPath: "go.uber.org/cadence/internal/batch" }), /* @__PURE__ */ $.structField("batchSize", /* @__PURE__ */ $.basicType("int"), [3], 72, false, { pkgPath: "go.uber.org/cadence/internal/batch" }), /* @__PURE__ */ $.structField("wg", "internal.WaitGroup", [4], 80, false, { pkgPath: "go.uber.org/cadence/internal/batch" })]
	)
}

export async function NewBatchFuture(ctx: internal.Context | null, batchSize: number, factories: $.Slice<((ctx: internal.Context | null) => internal.Future | null | globalThis.Promise<internal.Future | null>) | null>): globalThis.Promise<[BatchFuture | $.VarRef<BatchFuture> | null, $.GoError]> {
	let futures: $.Slice<internal.Future | null> = null! as $.Slice<internal.Future | null>
	let settables: $.Slice<internal.Settable | null> = null! as $.Slice<internal.Settable | null>
	for (let __goscriptRangeTarget4 = factories, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let [future, settable] = await internal.NewFuture(ctx)
		futures = $.appendOne(futures, future, $.appendZeros.nil)
		settables = $.appendOne(settables, settable, $.appendZeros.nil)
	}

	let batchFuture: BatchFuture | $.VarRef<BatchFuture> | null = (await (async () => { const __goscriptLiteralField0 = await internal.NewWaitGroup(ctx); return new BatchFuture({futures: futures, settables: settables, factories: factories, batchSize: batchSize, wg: __goscriptLiteralField0}) })())
	await (batchFuture !== null && (batchFuture as any).__isVarRef !== true && (batchFuture as any).__goValue === undefined ? ((batchFuture as any) as BatchFuture).start(ctx) : BatchFuture.prototype.start.call(batchFuture, ctx))
	return [batchFuture, null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (reflect.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint", "reflect.Kind"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
