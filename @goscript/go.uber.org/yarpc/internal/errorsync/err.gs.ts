// Generated file based on err.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/internal/errorsync", ["errorsync.ErrorWaiter"])

export class ErrorWaiter {
	public get wait(): sync.WaitGroup {
		return this._fields.wait
	}

	public set wait(value: sync.WaitGroup) {
		this._fields.wait = value
	}

	public get lock(): sync.Mutex {
		return this._fields.lock
	}

	public set lock(value: sync.Mutex) {
		this._fields.lock = value
	}

	public get errors(): $.Slice<$.GoError> {
		return this._fields.errors
	}

	public set errors(value: $.Slice<$.GoError>) {
		this._fields.errors = value
	}

	public _fields: {
		wait: sync.WaitGroup
		lock: sync.Mutex
		errors: $.Slice<$.GoError>
	}

	constructor(init?: Partial<{wait?: sync.WaitGroup, lock?: sync.Mutex, errors?: $.Slice<$.GoError>}>, __goscriptValue?: boolean) {
		this._fields = {
			wait: init?.wait ? $.markAsStructValue($.cloneStructValue(init.wait)) : $.markAsStructValue(new sync.WaitGroup()),
			lock: init?.lock ? $.markAsStructValue($.cloneStructValue(init.lock)) : $.markAsStructValue(new sync.Mutex()),
			errors: init?.errors ?? (null! as $.Slice<$.GoError>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ErrorWaiter {
		return new ErrorWaiter(this, true)
	}

	public __goscriptAssign(source: ErrorWaiter): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.wait, values.wait)
		$.assignStruct(target.lock, values.lock)
		target.errors = values.errors
	}

	public async Submit(f: (() => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<void> {
		const ew: ErrorWaiter | $.VarRef<ErrorWaiter> | null = this;
		const ew$: ErrorWaiter = ew == null ? $.pointerTarget<ErrorWaiter>(ew) : (ew as any).__isVarRef === true ? (ew as any).value : (ew as any).__goValue === undefined ? (ew as any) : $.pointerTarget<ErrorWaiter>(ew)
		void (ew$ as ErrorWaiter).wait.Add(1)
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			using __defer = new $.DisposableStack()
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Done())((ew$ as ErrorWaiter).wait), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*WaitGroup).Done-fm")
			__defer.defer(() => { __goscriptDeferCallee0() })
			{
				let err = (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					await (ew$ as ErrorWaiter).lock.Lock();
					;(ew$ as ErrorWaiter).errors = $.appendOne((ew$ as ErrorWaiter).errors, err, $.appendZeros.nil)
					void (ew$ as ErrorWaiter).lock.Unlock()
				}
			}
		})() })
	}

	public async Wait(): globalThis.Promise<$.Slice<$.GoError>> {
		const ew: ErrorWaiter | $.VarRef<ErrorWaiter> | null = this;
		const ew$: ErrorWaiter = ew == null ? $.pointerTarget<ErrorWaiter>(ew) : (ew as any).__isVarRef === true ? (ew as any).value : (ew as any).__goValue === undefined ? (ew as any) : $.pointerTarget<ErrorWaiter>(ew)
		await (ew$ as ErrorWaiter).wait.Wait()
		return (ew$ as ErrorWaiter).errors
	}

	static __typeInfo = $.registerStructType(
		"errorsync.ErrorWaiter",
		() => new ErrorWaiter(),
		() => [$.methodSignature("Submit", [["f", ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("Wait", [], [/* @__PURE__ */ $.sliceType("error")], true)],
		ErrorWaiter,
		() => [/* @__PURE__ */ $.structField("wait", "sync.WaitGroup", [0], 0, false, { pkgPath: "go.uber.org/yarpc/internal/errorsync" }), /* @__PURE__ */ $.structField("lock", "sync.Mutex", [1], 16, false, { pkgPath: "go.uber.org/yarpc/internal/errorsync" }), /* @__PURE__ */ $.structField("errors", /* @__PURE__ */ $.sliceType("error"), [2], 24, false, { pkgPath: "go.uber.org/yarpc/internal/errorsync" })]
	)
}

var __goscriptAwait: any
