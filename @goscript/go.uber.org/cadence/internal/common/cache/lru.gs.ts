// Generated file based on lru.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as list from "@goscript/container/list/index.js"

import * as errors from "@goscript/errors/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_cache from "./cache.gs.ts"
import "@goscript/container/list/index.js"
import "@goscript/errors/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./cache.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal/common/cache", ["cache.lru", "cache.cacheEntry"])

export class lru {
	public get mut(): sync.Mutex {
		return this._fields.mut
	}

	public set mut(value: sync.Mutex) {
		this._fields.mut = value
	}

	public get byAccess(): list.List | $.VarRef<list.List> | null {
		return this._fields.byAccess
	}

	public set byAccess(value: list.List | $.VarRef<list.List> | null) {
		this._fields.byAccess = value
	}

	public get byKey(): globalThis.Map<string, list.Element | $.VarRef<list.Element> | null> | null {
		return this._fields.byKey
	}

	public set byKey(value: globalThis.Map<string, list.Element | $.VarRef<list.Element> | null> | null) {
		this._fields.byKey = value
	}

	public get maxSize(): number {
		return this._fields.maxSize
	}

	public set maxSize(value: number) {
		this._fields.maxSize = value
	}

	public get ttl(): time.Duration {
		return this._fields.ttl
	}

	public set ttl(value: time.Duration) {
		this._fields.ttl = value
	}

	public get pin(): boolean {
		return this._fields.pin
	}

	public set pin(value: boolean) {
		this._fields.pin = value
	}

	public get rmFunc(): ((_p0: any) => void) | null {
		return this._fields.rmFunc
	}

	public set rmFunc(value: ((_p0: any) => void) | null) {
		this._fields.rmFunc = value
	}

	// We use this instead of time.Now() in order to make testing easier
	public get now(): (() => time.Time | globalThis.Promise<time.Time>) | null {
		return this._fields.now
	}

	public set now(value: (() => time.Time | globalThis.Promise<time.Time>) | null) {
		this._fields.now = value
	}

	public _fields: {
		mut: sync.Mutex
		byAccess: list.List | $.VarRef<list.List> | null
		byKey: globalThis.Map<string, list.Element | $.VarRef<list.Element> | null> | null
		maxSize: number
		ttl: time.Duration
		pin: boolean
		rmFunc: ((_p0: any) => void) | null
		now: (() => time.Time | globalThis.Promise<time.Time>) | null
	}

	constructor(init?: Partial<{mut?: sync.Mutex, byAccess?: list.List | $.VarRef<list.List> | null, byKey?: globalThis.Map<string, list.Element | $.VarRef<list.Element> | null> | null, maxSize?: number, ttl?: time.Duration, pin?: boolean, rmFunc?: ((_p0: any) => void) | null, now?: (() => time.Time | globalThis.Promise<time.Time>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mut: init?.mut ? $.markAsStructValue($.cloneStructValue(init.mut)) : $.markAsStructValue(new sync.Mutex()),
			byAccess: init?.byAccess ?? (null! as list.List | $.VarRef<list.List> | null),
			byKey: init?.byKey ?? (null! as globalThis.Map<string, list.Element | $.VarRef<list.Element> | null> | null),
			maxSize: init?.maxSize ?? (0 as number),
			ttl: init?.ttl ?? (0n as time.Duration),
			pin: init?.pin ?? (false as boolean),
			rmFunc: init?.rmFunc ?? (null! as ((_p0: any) => void) | null),
			now: init?.now ?? (null! as (() => time.Time | globalThis.Promise<time.Time>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lru {
		return new lru(this, true)
	}

	public __goscriptAssign(source: lru): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mut, values.mut)
		target.byAccess = values.byAccess
		target.byKey = values.byKey
		target.maxSize = values.maxSize
		target.ttl = values.ttl
		target.pin = values.pin
		target.rmFunc = values.rmFunc
		target.now = values.now
	}

	public async Delete(key: string): globalThis.Promise<void> {
		const c: lru | $.VarRef<lru> | null = this;
		using __defer = new $.DisposableStack()
		const c$: lru = c == null ? $.pointerTarget<lru>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<lru>(c)
		await (c$ as lru).mut.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as lru).mut), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		let elt: list.Element | $.VarRef<list.Element> | null = $.mapGet<string, list.Element | $.VarRef<list.Element> | null, list.Element | $.VarRef<list.Element> | null>((c$ as lru).byKey, key, null)[0]
		if (elt != null) {
			let entry: cacheEntry | $.VarRef<cacheEntry> | null = $.mustTypeAssert<cacheEntry | $.VarRef<cacheEntry> | null>(list.List.prototype.Remove.call((c$ as lru).byAccess, elt), /* @__PURE__ */ $.pointerType("cache.cacheEntry"))
			if ((c$ as lru).rmFunc != null) {
				const __goscriptDeferCallee1 = (c$ as lru).rmFunc
				const __goscriptDeferArg0 = $.pointerValue<cacheEntry>(entry).value
				queueMicrotask(async () => { (__goscriptAwait = __goscriptDeferCallee1!(__goscriptDeferArg0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			}
			$.deleteMapEntry((c$ as lru).byKey, key)
		}
	}

	public async Exist(key: string): globalThis.Promise<boolean> {
		const c: lru | $.VarRef<lru> | null = this;
		using __defer = new $.DisposableStack()
		const c$: lru = c == null ? $.pointerTarget<lru>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<lru>(c)
		await (c$ as lru).mut.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as lru).mut), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		let [, ok] = $.mapGet<string, list.Element | $.VarRef<list.Element> | null, list.Element | $.VarRef<list.Element> | null>((c$ as lru).byKey, key, null)
		return ok
	}

	public async Get(key: string): globalThis.Promise<any> {
		const c: lru | $.VarRef<lru> | null = this;
		using __defer = new $.DisposableStack()
		const c$: lru = c == null ? $.pointerTarget<lru>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<lru>(c)
		await (c$ as lru).mut.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as lru).mut), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })

		let elt: list.Element | $.VarRef<list.Element> | null = $.mapGet<string, list.Element | $.VarRef<list.Element> | null, list.Element | $.VarRef<list.Element> | null>((c$ as lru).byKey, key, null)[0]
		if (elt == null) {
			return null
		}

		let __goscriptShadow0: cacheEntry | $.VarRef<cacheEntry> | null = $.mustTypeAssert<cacheEntry | $.VarRef<cacheEntry> | null>($.pointerValue<list.Element>(elt).Value, /* @__PURE__ */ $.pointerType("cache.cacheEntry"))

		if ((c$ as lru).pin) {
			$.pointerValue<cacheEntry>(__goscriptShadow0).refCount++
		}

		if ((($.pointerValue<cacheEntry>(__goscriptShadow0).refCount == 0) && !$.markAsStructValue($.cloneStructValue($.pointerValue<cacheEntry>(__goscriptShadow0).expiration)).IsZero()) && $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (c$ as lru).now!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).After($.markAsStructValue($.cloneStructValue($.pointerValue<cacheEntry>(__goscriptShadow0).expiration)))) {
			// Entry has expired
			if ((c$ as lru).rmFunc != null) {
				const __goscriptDeferCallee4 = (c$ as lru).rmFunc
				const __goscriptDeferArg1 = $.pointerValue<cacheEntry>(__goscriptShadow0).value
				queueMicrotask(async () => { (__goscriptAwait = __goscriptDeferCallee4!(__goscriptDeferArg1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			}
			list.List.prototype.Remove.call((c$ as lru).byAccess, elt)
			$.deleteMapEntry((c$ as lru).byKey, $.pointerValue<cacheEntry>(__goscriptShadow0).key)
			return null
		}

		list.List.prototype.MoveToFront.call((c$ as lru).byAccess, elt)
		return $.pointerValue<cacheEntry>(__goscriptShadow0).value
	}

	public async Put(key: string, value: any): globalThis.Promise<any> {
		const c: lru | $.VarRef<lru> | null = this;
		if ($.pointerValue<lru>(c).pin) {
			$.panic("Cannot use Put API in Pin mode. Use Delete and PutIfNotExist if necessary")
		}
		let [val, ] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as lru).putInternal(key, value, true) : lru.prototype.putInternal.call(c, key, value, true))
		return val
	}

	public async PutIfNotExist(key: string, value: any): globalThis.Promise<[any, $.GoError]> {
		const c: lru | $.VarRef<lru> | null = this;
		let [existing, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as lru).putInternal(key, value, false) : lru.prototype.putInternal.call(c, key, value, false))
		if (err != null) {
			return [null, err]
		}

		if (existing == null) {
			// This is a new value
			return [value, err]
		}

		return [existing, err]
	}

	public async Release(key: string): globalThis.Promise<void> {
		const c: lru | $.VarRef<lru> | null = this;
		using __defer = new $.DisposableStack()
		const c$: lru = c == null ? $.pointerTarget<lru>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<lru>(c)
		await (c$ as lru).mut.Lock()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as lru).mut), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })

		let elt: list.Element | $.VarRef<list.Element> | null = $.mapGet<string, list.Element | $.VarRef<list.Element> | null, list.Element | $.VarRef<list.Element> | null>((c$ as lru).byKey, key, null)[0]
		let __goscriptShadow1: cacheEntry | $.VarRef<cacheEntry> | null = $.mustTypeAssert<cacheEntry | $.VarRef<cacheEntry> | null>($.pointerValue<list.Element>(elt).Value, /* @__PURE__ */ $.pointerType("cache.cacheEntry"))
		$.pointerValue<cacheEntry>(__goscriptShadow1).refCount--
	}

	public async Size(): globalThis.Promise<number> {
		const c: lru | $.VarRef<lru> | null = this;
		using __defer = new $.DisposableStack()
		const c$: lru = c == null ? $.pointerTarget<lru>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<lru>(c)
		await (c$ as lru).mut.Lock()
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as lru).mut), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee6() })

		return $.len((c$ as lru).byKey)
	}

	public async putInternal(key: string, value: any, allowUpdate: boolean): globalThis.Promise<[any, $.GoError]> {
		let c: lru | $.VarRef<lru> | null = this;
		using __defer = new $.DisposableStack()
		const c$: lru = c == null ? $.pointerTarget<lru>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<lru>(c)
		await (c$ as lru).mut.Lock()
		const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as lru).mut), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee7() })

		let elt: list.Element | $.VarRef<list.Element> | null = $.mapGet<string, list.Element | $.VarRef<list.Element> | null, list.Element | $.VarRef<list.Element> | null>((c$ as lru).byKey, key, null)[0]
		if (elt != null) {
			let entry: cacheEntry | $.VarRef<cacheEntry> | null = $.mustTypeAssert<cacheEntry | $.VarRef<cacheEntry> | null>($.pointerValue<list.Element>(elt).Value, /* @__PURE__ */ $.pointerType("cache.cacheEntry"))
			let entry$: cacheEntry = entry == null ? $.pointerTarget<cacheEntry>(entry) : (entry as any).__isVarRef === true ? (entry as any).value : (entry as any).__goValue === undefined ? (entry as any) : $.pointerTarget<cacheEntry>(entry)
			let existing = (entry$ as cacheEntry).value
			if (allowUpdate) {
				;(entry$ as cacheEntry).value = value
			}
			if ((c$ as lru).ttl != 0n) {
				$.assignStruct((entry$ as cacheEntry).expiration, $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (c$ as lru).now!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Add((c$ as lru).ttl))
			}
			list.List.prototype.MoveToFront.call((c$ as lru).byAccess, elt)
			if ((c$ as lru).pin) {
				;(entry$ as cacheEntry).refCount++
			}
			return [existing, null]
		}

		let entry: cacheEntry | $.VarRef<cacheEntry> | null = new cacheEntry({key: key, value: value})
		let entry$: cacheEntry = entry == null ? $.pointerTarget<cacheEntry>(entry) : (entry as any).__isVarRef === true ? (entry as any).value : (entry as any).__goValue === undefined ? (entry as any) : $.pointerTarget<cacheEntry>(entry)

		if ((c$ as lru).pin) {
			;(entry$ as cacheEntry).refCount++
		}

		if ((c$ as lru).ttl != 0n) {
			$.assignStruct((entry$ as cacheEntry).expiration, $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (c$ as lru).now!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Add((c$ as lru).ttl))
		}

		$.mapSet((c$ as lru).byKey, key, list.List.prototype.PushFront.call((c$ as lru).byAccess, $.interfaceValue(entry, "*cache.cacheEntry", /* @__PURE__ */ $.pointerType("cache.cacheEntry"))))
		if ($.len((c$ as lru).byKey) == (c$ as lru).maxSize) {
			let oldest: cacheEntry | $.VarRef<cacheEntry> | null = $.mustTypeAssert<cacheEntry | $.VarRef<cacheEntry> | null>($.pointerValue<list.Element>(list.List.prototype.Back.call((c$ as lru).byAccess)).Value, /* @__PURE__ */ $.pointerType("cache.cacheEntry"))
			let oldest$: cacheEntry = oldest == null ? $.pointerTarget<cacheEntry>(oldest) : (oldest as any).__isVarRef === true ? (oldest as any).value : (oldest as any).__goValue === undefined ? (oldest as any) : $.pointerTarget<cacheEntry>(oldest)

			if ((oldest$ as cacheEntry).refCount > 0) {
				// Cache is full with pinned elements
				// revert the insert and return
				list.List.prototype.Remove.call((c$ as lru).byAccess, list.List.prototype.Front.call((c$ as lru).byAccess))
				$.deleteMapEntry((c$ as lru).byKey, key)
				return [null, ErrCacheFull]
			}

			list.List.prototype.Remove.call((c$ as lru).byAccess, list.List.prototype.Back.call((c$ as lru).byAccess))
			if ((c$ as lru).rmFunc != null) {
				const __goscriptDeferCallee8 = (c$ as lru).rmFunc
				const __goscriptDeferArg2 = (oldest$ as cacheEntry).value
				queueMicrotask(async () => { (__goscriptAwait = __goscriptDeferCallee8!(__goscriptDeferArg2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			}
			$.deleteMapEntry((c$ as lru).byKey, (oldest$ as cacheEntry).key)
		}

		return [null, null]
	}

	static __typeInfo = $.registerStructType(
		"cache.lru",
		() => new lru(),
		() => [$.methodSignature("Delete", [["key", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Exist", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Get", [["key", /* @__PURE__ */ $.basicType("string")]], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("Put", [["key", /* @__PURE__ */ $.basicType("string")], ["value", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("PutIfNotExist", [["key", /* @__PURE__ */ $.basicType("string")], ["value", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("Release", [["key", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("putInternal", [["key", /* @__PURE__ */ $.basicType("string")], ["value", { kind: $.TypeKind.Interface, methods: [] }], ["allowUpdate", /* @__PURE__ */ $.basicType("bool")]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true)],
		lru,
		() => [/* @__PURE__ */ $.structField("mut", "sync.Mutex", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/cache" }), /* @__PURE__ */ $.structField("byAccess", /* @__PURE__ */ $.pointerType("list.List"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal/common/cache" }), /* @__PURE__ */ $.structField("byKey", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("list.Element")), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal/common/cache" }), /* @__PURE__ */ $.structField("maxSize", /* @__PURE__ */ $.basicType("int"), [3], 24, false, { pkgPath: "go.uber.org/cadence/internal/common/cache" }), /* @__PURE__ */ $.structField("ttl", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [4], 32, false, { pkgPath: "go.uber.org/cadence/internal/common/cache" }), /* @__PURE__ */ $.structField("pin", /* @__PURE__ */ $.basicType("bool"), [5], 40, false, { pkgPath: "go.uber.org/cadence/internal/common/cache" }), /* @__PURE__ */ $.structField("rmFunc", ({ kind: $.TypeKind.Function, name: "cache.RemovedFunc", params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), [6], 48, false, { pkgPath: "go.uber.org/cadence/internal/common/cache" }), /* @__PURE__ */ $.structField("now", ({ kind: $.TypeKind.Function, params: [], results: ["time.Time"] } as $.FunctionTypeInfo), [7], 56, false, { pkgPath: "go.uber.org/cadence/internal/common/cache" })]
	)
}

export class cacheEntry {
	public get key(): string {
		return this._fields.key
	}

	public set key(value: string) {
		this._fields.key = value
	}

	public get expiration(): time.Time {
		return this._fields.expiration
	}

	public set expiration(value: time.Time) {
		this._fields.expiration = value
	}

	public get value(): any {
		return this._fields.value
	}

	public set value(value: any) {
		this._fields.value = value
	}

	public get refCount(): number {
		return this._fields.refCount
	}

	public set refCount(value: number) {
		this._fields.refCount = value
	}

	public _fields: {
		key: string
		expiration: time.Time
		value: any
		refCount: number
	}

	constructor(init?: Partial<{key?: string, expiration?: time.Time, value?: any, refCount?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			key: init?.key ?? ("" as string),
			expiration: init?.expiration ? $.markAsStructValue($.cloneStructValue(init.expiration)) : $.markAsStructValue(new time.Time()),
			value: init?.value ?? (null! as any),
			refCount: init?.refCount ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): cacheEntry {
		return new cacheEntry(this, true)
	}

	public __goscriptAssign(source: cacheEntry): void {
		const target = this._fields
		const values = source._fields
		target.key = values.key
		$.assignStruct(target.expiration, values.expiration)
		target.value = $.assignFieldValue(target.value, values.value, { kind: $.TypeKind.Interface, methods: [] })
		target.refCount = values.refCount
	}

	static __typeInfo = $.registerStructType(
		"cache.cacheEntry",
		() => new cacheEntry(),
		() => [],
		cacheEntry,
		() => [/* @__PURE__ */ $.structField("key", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/cache" }), /* @__PURE__ */ $.structField("expiration", "time.Time", [1], 16, false, { pkgPath: "go.uber.org/cadence/internal/common/cache" }), /* @__PURE__ */ $.structField("value", { kind: $.TypeKind.Interface, methods: [] }, [2], 40, false, { pkgPath: "go.uber.org/cadence/internal/common/cache" }), /* @__PURE__ */ $.structField("refCount", /* @__PURE__ */ $.basicType("int"), [3], 56, false, { pkgPath: "go.uber.org/cadence/internal/common/cache" })]
	)
}

export let ErrCacheFull: $.GoError = errors.New("Cache capacity is fully occupied with pinned elements")

export function __goscript_set_ErrCacheFull(__goscriptValue: $.GoError): void {
	ErrCacheFull = __goscriptValue
}

export function New(maxSize: number, opts: __goscript_cache.Options | $.VarRef<__goscript_cache.Options> | null): __goscript_cache.Cache | null {
	if (opts == null) {
		opts = new __goscript_cache.Options()
	}

	return $.interfaceValue<__goscript_cache.Cache | null>((() => { const __goscriptLiteralField0 = list.New(); return new lru({byAccess: __goscriptLiteralField0, byKey: $.makeMap<string, list.Element | $.VarRef<list.Element> | null>(), ttl: $.pointerValue<__goscript_cache.Options>(opts).TTL, maxSize: maxSize, pin: $.pointerValue<__goscript_cache.Options>(opts).Pin, rmFunc: $.pointerValue<__goscript_cache.Options>(opts).RemovedFunc, now: time.Now}) })(), "*cache.lru", /* @__PURE__ */ $.pointerType("cache.lru"))
}

export function NewLRU(maxSize: number): __goscript_cache.Cache | null {
	return New(maxSize, null)
}

export function NewLRUWithInitialCapacity(initialCapacity: number, maxSize: number): __goscript_cache.Cache | null {
	return New(maxSize, new __goscript_cache.Options({InitialCapacity: initialCapacity}))
}

var __goscriptAwait: any
