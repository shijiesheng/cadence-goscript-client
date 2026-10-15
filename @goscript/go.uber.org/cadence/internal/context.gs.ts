// Generated file based on context.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "./encoded.gs.ts"
import "./error.gs.ts"
import "./internal_activity.gs.ts"
import "./workflow.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.Context", "internal.emptyCtx", "internal.CancelFunc", "internal.canceler", "internal.cancelCtx", "internal.valueCtx"])

export type Context = {
	Deadline(): [time.Time, boolean]
	Done(): __goscript_workflow.Channel | null
	Err(): $.GoError
	Value(key: any): any | globalThis.Promise<any>
}

$.registerInterfaceType(
	"internal.Context",
	null,
	[$.methodSignature("Deadline", [], [["deadline", "time.Time"], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Done", [], ["internal.Channel"]), $.methodSignature("Err", [], ["error"]), $.methodSignature("Value", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }])]
);

export type emptyCtx = number

$.registerNamedValueType(
	"*internal.emptyCtx",
	{Deadline: (receiver: any, ...args: any[]) => (emptyCtx_Deadline as any)(receiver, ...$.stripGenericTypeArgs(args)), Done: (receiver: any, ...args: any[]) => (emptyCtx_Done as any)(receiver, ...$.stripGenericTypeArgs(args)), Err: (receiver: any, ...args: any[]) => (emptyCtx_Err as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (emptyCtx_String as any)(receiver, ...$.stripGenericTypeArgs(args)), Value: (receiver: any, ...args: any[]) => (emptyCtx_Value as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Deadline", [], [["deadline", "time.Time"], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Done", [], ["internal.Channel"]), $.methodSignature("Err", [], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Value", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }])]
);

export type CancelFunc = (() => void) | null

export type canceler = {
	Done(): __goscript_workflow.Channel | null
	cancel(removeFromParent: boolean, err: $.GoError): void
}

$.registerInterfaceType(
	"internal.canceler",
	null,
	[$.methodSignature("Done", [], ["internal.Channel"]), $.methodSignature("cancel", [["removeFromParent", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]])]
);

export class cancelCtx {
	public get Context(): Context | null {
		return this._fields.Context
	}

	public set Context(value: Context | null) {
		this._fields.Context = value
	}

	public get done(): __goscript_workflow.Channel | null {
		return this._fields.done
	}

	public set done(value: __goscript_workflow.Channel | null) {
		this._fields.done = value
	}

	public get cancelLock(): sync.Mutex {
		return this._fields.cancelLock
	}

	public set cancelLock(value: sync.Mutex) {
		this._fields.cancelLock = value
	}

	public get canceled(): boolean {
		return this._fields.canceled
	}

	public set canceled(value: boolean) {
		this._fields.canceled = value
	}

	public get childrenLock(): sync.Mutex {
		return this._fields.childrenLock
	}

	public set childrenLock(value: sync.Mutex) {
		this._fields.childrenLock = value
	}

	public get children(): $.Slice<canceler | null> {
		return this._fields.children
	}

	public set children(value: $.Slice<canceler | null>) {
		this._fields.children = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		Context: Context | null
		done: __goscript_workflow.Channel | null
		cancelLock: sync.Mutex
		canceled: boolean
		childrenLock: sync.Mutex
		children: $.Slice<canceler | null>
		err: $.GoError
	}

	constructor(init?: Partial<{Context?: Context | null, done?: __goscript_workflow.Channel | null, cancelLock?: sync.Mutex, canceled?: boolean, childrenLock?: sync.Mutex, children?: $.Slice<canceler | null>, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Context: init?.Context ?? (null! as Context | null),
			done: init?.done ?? (null! as __goscript_workflow.Channel | null),
			cancelLock: init?.cancelLock ? $.markAsStructValue($.cloneStructValue(init.cancelLock)) : $.markAsStructValue(new sync.Mutex()),
			canceled: init?.canceled ?? (false as boolean),
			childrenLock: init?.childrenLock ? $.markAsStructValue($.cloneStructValue(init.childrenLock)) : $.markAsStructValue(new sync.Mutex()),
			children: init?.children ?? (null! as $.Slice<canceler | null>),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): cancelCtx {
		return new cancelCtx(this, true)
	}

	public __goscriptAssign(source: cancelCtx): void {
		const target = this._fields
		const values = source._fields
		target.Context = $.assignFieldValue(target.Context, values.Context, "internal.Context")
		target.done = $.assignFieldValue(target.done, values.done, "internal.Channel")
		$.assignStruct(target.cancelLock, values.cancelLock)
		target.canceled = values.canceled
		$.assignStruct(target.childrenLock, values.childrenLock)
		target.children = values.children
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public Done(): __goscript_workflow.Channel | null {
		const c: cancelCtx | $.VarRef<cancelCtx> | null = this;
		return $.pointerValue<cancelCtx>(c).done
	}

	public Err(): $.GoError {
		const c: cancelCtx | $.VarRef<cancelCtx> | null = this;
		return $.pointerValue<cancelCtx>(c).err
	}

	public async String(): globalThis.Promise<string> {
		const c: cancelCtx | $.VarRef<cancelCtx> | null = this;
		return fmt.Sprintf("%v.WithCancel", ($.pointerValue<cancelCtx>(c).Context as any))
	}

	public async cancel(removeFromParent: boolean, err: $.GoError): globalThis.Promise<void> {
		let c: cancelCtx | $.VarRef<cancelCtx> | null = this;
		const c$: cancelCtx = c == null ? $.pointerTarget<cancelCtx>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<cancelCtx>(c)
		await (c$ as cancelCtx).cancelLock.Lock()
		if ((c$ as cancelCtx).canceled) {
			void (c$ as cancelCtx).cancelLock.Unlock()
			// calling cancel from multiple go routines isn't safe
			// avoid a data race by only allowing the first call
			return
		}
		;(c$ as cancelCtx).canceled = true

		if (err == null) {
			$.panic("context: internal error: missing cancel error")
		}
		if ((c$ as cancelCtx).err != null) {
			void (c$ as cancelCtx).cancelLock.Unlock()
			return
		}
		;(c$ as cancelCtx).err = err
		void (c$ as cancelCtx).cancelLock.Unlock()
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_workflow.Channel, null>>((c$ as cancelCtx).done).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let children: $.Slice<canceler | null> = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as cancelCtx).getChildren() : cancelCtx.prototype.getChildren.call(c))
		for (let __goscriptRangeTarget1 = children, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let child = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as canceler | null)
			// NOTE: acquiring the child's lock while holding parent's lock.
			void (__goscriptAwait = (child !== null && (child as any).__isVarRef !== true && (child as any).__goValue === undefined ? (child as Exclude<canceler, null>) : $.pointerValue<Exclude<canceler, null>>(child)).cancel(false, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		await (c$ as cancelCtx).childrenLock.Lock();
		;(c$ as cancelCtx).children = null
		void (c$ as cancelCtx).childrenLock.Unlock()

		if (removeFromParent) {
			await removeChild((c$ as cancelCtx).Context, $.interfaceValue<canceler | null>(c, "*internal.cancelCtx", /* @__PURE__ */ $.pointerType("internal.cancelCtx")))
		}
	}

	public async getChildren(): globalThis.Promise<$.Slice<canceler | null>> {
		const c: cancelCtx | $.VarRef<cancelCtx> | null = this;
		using __defer = new $.DisposableStack()
		const c$: cancelCtx = c == null ? $.pointerTarget<cancelCtx>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<cancelCtx>(c)
		await (c$ as cancelCtx).childrenLock.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as cancelCtx).childrenLock), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		let dup: $.Slice<canceler | null> = $.makeSlice<canceler | null>($.sliceLen((c$ as cancelCtx).children))
		$.copy(dup, (c$ as cancelCtx).children)
		return dup
	}

	public Deadline(): any {
		return $.pointerValue<Exclude<Context | null, null>>(this.Context).Deadline()
	}

	public async Value(key: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<Context | null, null>>(this.Context).Value(key)
	}

	static __typeInfo = $.registerStructType(
		"internal.cancelCtx",
		() => new cancelCtx(),
		() => [$.methodSignature("Done", [], ["internal.Channel"], true), $.methodSignature("Err", [], ["error"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("cancel", [["removeFromParent", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]], [], true), $.methodSignature("getChildren", [], [/* @__PURE__ */ $.sliceType("internal.canceler")], true), $.methodSignature("Deadline", [], [["deadline", "time.Time"], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Value", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }])],
		cancelCtx,
		() => [/* @__PURE__ */ $.structField("Context", "internal.Context", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("done", "internal.Channel", [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("cancelLock", "sync.Mutex", [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("canceled", /* @__PURE__ */ $.basicType("bool"), [3], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("childrenLock", "sync.Mutex", [4], 44, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("children", /* @__PURE__ */ $.sliceType("internal.canceler"), [5], 56, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("err", "error", [6], 80, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class valueCtx {
	public get Context(): Context | null {
		return this._fields.Context
	}

	public set Context(value: Context | null) {
		this._fields.Context = value
	}

	public get key(): any {
		return this._fields.key
	}

	public set key(value: any) {
		this._fields.key = value
	}

	public get val(): any {
		return this._fields.val
	}

	public set val(value: any) {
		this._fields.val = value
	}

	public _fields: {
		Context: Context | null
		key: any
		val: any
	}

	constructor(init?: Partial<{Context?: Context | null, key?: any, val?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			Context: init?.Context ?? (null! as Context | null),
			key: init?.key ?? (null! as any),
			val: init?.val ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): valueCtx {
		return new valueCtx(this, true)
	}

	public __goscriptAssign(source: valueCtx): void {
		const target = this._fields
		const values = source._fields
		target.Context = $.assignFieldValue(target.Context, values.Context, "internal.Context")
		target.key = $.assignFieldValue(target.key, values.key, { kind: $.TypeKind.Interface, methods: [] })
		target.val = $.assignFieldValue(target.val, values.val, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async String(): globalThis.Promise<string> {
		const c: valueCtx | $.VarRef<valueCtx> | null = this;
		const c$: valueCtx = c == null ? $.pointerTarget<valueCtx>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<valueCtx>(c)
		return fmt.Sprintf("%v.WithValue(%#v, %#v)", ((c$ as valueCtx).Context as any), (c$ as valueCtx).key, (c$ as valueCtx).val)
	}

	public async Value(key: any): globalThis.Promise<any> {
		const c: valueCtx | $.VarRef<valueCtx> | null = this;
		const c$: valueCtx = c == null ? $.pointerTarget<valueCtx>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<valueCtx>(c)
		if ($.comparableEqual((c$ as valueCtx).key, key)) {
			return (c$ as valueCtx).val
		}
		return $.pointerValue<Exclude<Context, null>>((c$ as valueCtx).Context).Value(key)
	}

	public Deadline(): any {
		return $.pointerValue<Exclude<Context | null, null>>(this.Context).Deadline()
	}

	public Done(): any {
		return $.pointerValue<Exclude<Context | null, null>>(this.Context).Done()
	}

	public Err(): any {
		return $.pointerValue<Exclude<Context | null, null>>(this.Context).Err()
	}

	static __typeInfo = $.registerStructType(
		"internal.valueCtx",
		() => new valueCtx(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Value", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("Deadline", [], [["deadline", "time.Time"], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Done", [], ["internal.Channel"]), $.methodSignature("Err", [], ["error"])],
		valueCtx,
		() => [/* @__PURE__ */ $.structField("Context", "internal.Context", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("key", { kind: $.TypeKind.Interface, methods: [] }, [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("val", { kind: $.TypeKind.Interface, methods: [] }, [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export const activeSpanContextKey: __goscript_internal_activity.contextKey = "activeSpanContextKey"

export function emptyCtx_Deadline(recv: $.VarRef<emptyCtx> | null): [time.Time, boolean] {
	let deadline: time.Time = $.markAsStructValue(new time.Time())
	let ok: boolean = false
	return [deadline, ok]
}

export function emptyCtx_Done(recv: $.VarRef<emptyCtx> | null): __goscript_workflow.Channel | null {
	return null
}

export function emptyCtx_Err(recv: $.VarRef<emptyCtx> | null): $.GoError {
	return null
}

export function emptyCtx_Value(recv: $.VarRef<emptyCtx> | null, key: any): any {
	return null
}

export function emptyCtx_String(e: $.VarRef<emptyCtx> | null): string {
	switch (e) {
		case background:
		{
			return "context.Background"
			break
		}
		case todo:
		{
			return "context.TODO"
			break
		}
	}
	return "unknown empty Context"
}

export let background: $.VarRef<emptyCtx> | null = $.varRef<emptyCtx>(0)

export function __goscript_set_background(__goscriptValue: $.VarRef<emptyCtx> | null): void {
	background = __goscriptValue
}

export let todo: $.VarRef<emptyCtx> | null = $.varRef<emptyCtx>(0)

export function __goscript_set_todo(__goscriptValue: $.VarRef<emptyCtx> | null): void {
	todo = __goscriptValue
}

export function Background(): Context | null {
	return $.namedValueInterfaceValue<Context | null>(background, "*internal.emptyCtx", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export var ErrCanceled: __goscript_error.CanceledError | $.VarRef<__goscript_error.CanceledError> | null

export function __goscript_init_ErrCanceled(): void {
	if (((ErrCanceled) as any) === undefined) {
		ErrCanceled = __goscript_error.NewCanceledError(null)
	}
}

export function __goscript_get_ErrCanceled(): __goscript_error.CanceledError | $.VarRef<__goscript_error.CanceledError> | null {
	if (((ErrCanceled) as any) === undefined) {
		__goscript_init_ErrCanceled()
	}
	return ErrCanceled
}

export function __goscript_set_ErrCanceled(__goscriptValue: __goscript_error.CanceledError | $.VarRef<__goscript_error.CanceledError> | null): void {
	ErrCanceled = __goscriptValue
}

export var ErrDeadlineExceeded: __goscript_error.TimeoutError | $.VarRef<__goscript_error.TimeoutError> | null

export function __goscript_init_ErrDeadlineExceeded(): void {
	if (((ErrDeadlineExceeded) as any) === undefined) {
		ErrDeadlineExceeded = __goscript_error.NewTimeoutError(2, null)
	}
}

export function __goscript_get_ErrDeadlineExceeded(): __goscript_error.TimeoutError | $.VarRef<__goscript_error.TimeoutError> | null {
	if (((ErrDeadlineExceeded) as any) === undefined) {
		__goscript_init_ErrDeadlineExceeded()
	}
	return ErrDeadlineExceeded
}

export function __goscript_set_ErrDeadlineExceeded(__goscriptValue: __goscript_error.TimeoutError | $.VarRef<__goscript_error.TimeoutError> | null): void {
	ErrDeadlineExceeded = __goscriptValue
}

export async function WithCancel(parent: Context | null): globalThis.Promise<[Context | null, CancelFunc | null]> {
	let ctx: Context | null = null! as Context | null
	let cancel: CancelFunc | null = null! as CancelFunc | null
	let c: cancelCtx | $.VarRef<cancelCtx> | null = await newCancelCtx(parent)
	await propagateCancel(parent, $.interfaceValue<canceler | null>(c, "*internal.cancelCtx", /* @__PURE__ */ $.pointerType("internal.cancelCtx")))
	return [$.interfaceValue<Context | null>(c, "*internal.cancelCtx", /* @__PURE__ */ $.pointerType("internal.cancelCtx")), $.functionValue(async (): globalThis.Promise<void> => {
		await cancelCtx.prototype.cancel.call(c, true, $.interfaceValue<$.GoError>(__goscript_get_ErrCanceled(), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError")))
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))]
}

export async function NewDisconnectedContext(parent: Context | null): globalThis.Promise<[Context | null, CancelFunc | null]> {
	let ctx: Context | null = null! as Context | null
	let cancel: CancelFunc | null = null! as CancelFunc | null
	let c: cancelCtx | $.VarRef<cancelCtx> | null = await newCancelCtx(parent)
	return [$.interfaceValue<Context | null>(c, "*internal.cancelCtx", /* @__PURE__ */ $.pointerType("internal.cancelCtx")), $.functionValue(async (): globalThis.Promise<void> => {
		await cancelCtx.prototype.cancel.call(c, true, $.interfaceValue<$.GoError>(__goscript_get_ErrCanceled(), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError")))
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))]
}

export async function newCancelCtx(parent: Context | null): globalThis.Promise<cancelCtx | $.VarRef<cancelCtx> | null> {
	return (await (async () => { const __goscriptLiteralField0 = await __goscript_workflow.NewNamedChannel(parent, "cancelCtx-done-channel"); return new cancelCtx({Context: parent, done: __goscriptLiteralField0}) })())
}

export async function propagateCancel(parent: Context | null, child: canceler | null): globalThis.Promise<void> {
	if ((__goscriptAwait = (parent !== null && (parent as any).__isVarRef !== true && (parent as any).__goValue === undefined ? (parent as Exclude<Context, null>) : $.pointerValue<Exclude<Context, null>>(parent)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null) {
		return
	}
	{
		let __goscriptTuple0: any = parentCancelCtx(parent)
		let p: cancelCtx | $.VarRef<cancelCtx> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			await $.pointerValue<cancelCtx>(p).cancelLock.Lock()
			if ($.pointerValue<cancelCtx>(p).err != null) {
				$.pointerValue<cancelCtx>(p).cancelLock.Unlock()
				// parent has already been canceled
				void (__goscriptAwait = (child !== null && (child as any).__isVarRef !== true && (child as any).__goValue === undefined ? (child as Exclude<canceler, null>) : $.pointerValue<Exclude<canceler, null>>(child)).cancel(false, $.pointerValue<cancelCtx>(p).err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				await $.pointerValue<cancelCtx>(p).childrenLock.Lock()
				$.pointerValue<cancelCtx>(p).children = $.appendOne($.pointerValue<cancelCtx>(p).children, child, $.appendZeros.nil)
				$.pointerValue<cancelCtx>(p).childrenLock.Unlock()
				$.pointerValue<cancelCtx>(p).cancelLock.Unlock()
			}
		} else {
			queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
				let s = await __goscript_workflow.NewSelector(parent)
				void (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<__goscript_workflow.Selector, null>) : $.pointerValue<Exclude<__goscript_workflow.Selector, null>>(s)).AddReceive((__goscriptAwait = (parent !== null && (parent as any).__isVarRef !== true && (parent as any).__goValue === undefined ? (parent as Exclude<Context, null>) : $.pointerValue<Exclude<Context, null>>(parent)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.functionValue(async (c: __goscript_workflow.Channel | null, more: boolean): globalThis.Promise<void> => {
					void (__goscriptAwait = (child !== null && (child as any).__isVarRef !== true && (child as any).__goValue === undefined ? (child as Exclude<canceler, null>) : $.pointerValue<Exclude<canceler, null>>(child)).cancel(false, (__goscriptAwait = (parent !== null && (parent as any).__isVarRef !== true && (parent as any).__goValue === undefined ? (parent as Exclude<Context, null>) : $.pointerValue<Exclude<Context, null>>(parent)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}, ({ kind: $.TypeKind.Function, params: ["internal.Channel", /* @__PURE__ */ $.basicType("bool")], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<__goscript_workflow.Selector, null>) : $.pointerValue<Exclude<__goscript_workflow.Selector, null>>(s)).AddReceive((__goscriptAwait = (child !== null && (child as any).__isVarRef !== true && (child as any).__goValue === undefined ? (child as Exclude<canceler, null>) : $.pointerValue<Exclude<canceler, null>>(child)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.functionValue((c: __goscript_workflow.Channel | null, more: boolean): void => {
				}, ({ kind: $.TypeKind.Function, params: ["internal.Channel", /* @__PURE__ */ $.basicType("bool")], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<__goscript_workflow.Selector, null>) : $.pointerValue<Exclude<__goscript_workflow.Selector, null>>(s)).Select(parent), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			})() })
		}
	}
}

export function parentCancelCtx(parent: Context | null): [cancelCtx | $.VarRef<cancelCtx> | null, boolean] {
	while (true) {
		{
			const __goscriptTypeSwitchValue = parent
			switch (true) {
				case $.typeAssert<cancelCtx | $.VarRef<cancelCtx> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.cancelCtx")).ok:
					{
						let c: cancelCtx | $.VarRef<cancelCtx> | null = $.typeAssert<cancelCtx | $.VarRef<cancelCtx> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.cancelCtx")).value
						return [c, true]
					}
					break
				case $.typeAssert<valueCtx | $.VarRef<valueCtx> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.valueCtx")).ok:
					{
						let c: valueCtx | $.VarRef<valueCtx> | null = $.typeAssert<valueCtx | $.VarRef<valueCtx> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.valueCtx")).value
						parent = $.pointerValue<valueCtx>(c).Context
					}
					break
				default:
					{
						let c: any = __goscriptTypeSwitchValue
						return [null, false]
					}
					break
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function removeChild(parent: Context | null, child: canceler | null): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	let __goscriptTuple1: any = parentCancelCtx(parent)
	let p: cancelCtx | $.VarRef<cancelCtx> | null = __goscriptTuple1[0]
	let ok = __goscriptTuple1[1]
	let p$: cancelCtx = p == null ? $.pointerTarget<cancelCtx>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<cancelCtx>(p)
	if (!ok) {
		return
	}

	await (p$ as cancelCtx).childrenLock.Lock()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as cancelCtx).childrenLock), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })
	if ((p$ as cancelCtx).children != null) {
		removeChildFromSlice((p$ as cancelCtx).children, child)
	}
}

export function removeChildFromSlice(children: $.Slice<canceler | null>, child: canceler | null): $.Slice<canceler | null> {
	// This maintains the original order, mostly because it makes behavior easier to reason about
	// in case that becomes necessary (e.g. bug hunting).
	// Out-of-order (move last item into the gap) is equally correct and slightly more efficient,
	// but this likely cannot be changed without changing the order of code execution.
	let found = -1
	for (let __goscriptRangeTarget0 = children, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), idx = 0; idx < __goscriptRangeWindow0.length; idx++) {
		let c = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + idx] as canceler | null)
		if ($.comparableEqual(c, child)) {
			found = idx
			break
		}
	}
	if (found >= 0) {
		children = $.appendSlice($.goSlice(children, undefined, found), $.goSlice(children, found + 1, undefined), $.appendZeros.nil)
	}
	return children
}

export function WithValue(parent: Context | null, key: any, val: any): Context | null {
	return $.interfaceValue<Context | null>(new valueCtx({Context: parent, key: key, val: val}), "*internal.valueCtx", /* @__PURE__ */ $.pointerType("internal.valueCtx"))
}

export async function GetSpanContext(ctx: Context | null): globalThis.Promise<opentracing.SpanContext | null> {
	let val = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<Context, null>) : $.pointerValue<Exclude<Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("activeSpanContextKey", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	{
		let [sp, ok] = $.typeAssertTuple<opentracing.SpanContext | null>(val, "opentracing.SpanContext")
		if (ok) {
			return sp
		}
	}
	return null
}

export function WithSpanContext(ctx: Context | null, spanContext: opentracing.SpanContext | null): Context | null {
	return WithValue(ctx, $.namedValueInterfaceValue<any>("activeSpanContextKey", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey")), (spanContext as any))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Deadline: (receiver: any, ...args: any[]) => (emptyCtx_Deadline as any)(receiver, ...$.stripGenericTypeArgs(args)), Done: (receiver: any, ...args: any[]) => (emptyCtx_Done as any)(receiver, ...$.stripGenericTypeArgs(args)), Err: (receiver: any, ...args: any[]) => (emptyCtx_Err as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (emptyCtx_String as any)(receiver, ...$.stripGenericTypeArgs(args)), Value: (receiver: any, ...args: any[]) => (emptyCtx_Value as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "internal.emptyCtx")))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Deadline", [], [["deadline", "time.Time"], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Done", [], ["internal.Channel"]), $.methodSignature("Err", [], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Value", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }])])
}

var __goscriptAwait: any
