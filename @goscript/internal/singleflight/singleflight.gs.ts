// Generated file based on singleflight.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("internal/singleflight", ["singleflight.call", "singleflight.Group", "singleflight.Result"])

export class call {
	public get wg(): sync.WaitGroup {
		return this._fields.wg
	}

	public set wg(value: sync.WaitGroup) {
		this._fields.wg = value
	}

	// These fields are written once before the WaitGroup is done
	// and are only read after the WaitGroup is done.
	public get val(): any {
		return this._fields.val
	}

	public set val(value: any) {
		this._fields.val = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	// These fields are read and written with the singleflight
	// mutex held before the WaitGroup is done, and are read but
	// not written after the WaitGroup is done.
	public get dups(): number {
		return this._fields.dups
	}

	public set dups(value: number) {
		this._fields.dups = value
	}

	public get chans(): $.Slice<$.Channel<Result> | null> {
		return this._fields.chans
	}

	public set chans(value: $.Slice<$.Channel<Result> | null>) {
		this._fields.chans = value
	}

	public _fields: {
		wg: sync.WaitGroup
		val: any
		err: $.GoError
		dups: number
		chans: $.Slice<$.Channel<Result> | null>
	}

	constructor(init?: Partial<{wg?: sync.WaitGroup, val?: any, err?: $.GoError, dups?: number, chans?: $.Slice<$.Channel<Result> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			wg: init?.wg ? $.markAsStructValue($.cloneStructValue(init.wg)) : $.markAsStructValue(new sync.WaitGroup()),
			val: init?.val ?? (null! as any),
			err: init?.err ?? (null! as $.GoError),
			dups: init?.dups ?? (0 as number),
			chans: init?.chans ?? (null! as $.Slice<$.Channel<Result> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): call {
		return new call(this, true)
	}

	public __goscriptAssign(source: call): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.wg, values.wg)
		target.val = $.assignFieldValue(target.val, values.val, { kind: $.TypeKind.Interface, methods: [] })
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.dups = values.dups
		target.chans = values.chans
	}

	static __typeInfo = $.registerStructType(
		"singleflight.call",
		() => new call(),
		() => [],
		call,
		() => [/* @__PURE__ */ $.structField("wg", "sync.WaitGroup", [0], 0, false, { pkgPath: "internal/singleflight" }), /* @__PURE__ */ $.structField("val", { kind: $.TypeKind.Interface, methods: [] }, [1], 16, false, { pkgPath: "internal/singleflight" }), /* @__PURE__ */ $.structField("err", "error", [2], 32, false, { pkgPath: "internal/singleflight" }), /* @__PURE__ */ $.structField("dups", /* @__PURE__ */ $.basicType("int"), [3], 48, false, { pkgPath: "internal/singleflight" }), /* @__PURE__ */ $.structField("chans", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.channelType("singleflight.Result", "send")), [4], 56, false, { pkgPath: "internal/singleflight" })]
	)
}

export class Group {
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get m(): globalThis.Map<string, call | $.VarRef<call> | null> | null {
		return this._fields.m
	}

	public set m(value: globalThis.Map<string, call | $.VarRef<call> | null> | null) {
		this._fields.m = value
	}

	public _fields: {
		mu: sync.Mutex
		m: globalThis.Map<string, call | $.VarRef<call> | null> | null
	}

	constructor(init?: Partial<{mu?: sync.Mutex, m?: globalThis.Map<string, call | $.VarRef<call> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			m: init?.m ?? (null! as globalThis.Map<string, call | $.VarRef<call> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Group {
		return new Group(this, true)
	}

	public __goscriptAssign(source: Group): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.m = values.m
	}

	public async Do(key: string, fn: (() => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null): globalThis.Promise<[any, $.GoError, boolean]> {
		let g: Group | $.VarRef<Group> | null = this;
		let v: any = null! as any
		let err: $.GoError = null! as $.GoError
		let shared: boolean = false
		const g$: Group = g == null ? $.pointerTarget<Group>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<Group>(g)
		await (g$ as Group).mu.Lock()
		if ((g$ as Group).m == null) {
			;(g$ as Group).m = $.makeMap<string, call | $.VarRef<call> | null>()
		}
		{
			let __goscriptTuple0: any = $.mapGet<string, call | $.VarRef<call> | null, call | $.VarRef<call> | null>((g$ as Group).m, key, null)
			let c: call | $.VarRef<call> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				$.pointerValue<call>(c).dups++
				void (g$ as Group).mu.Unlock()
				await $.pointerValue<call>(c).wg.Wait()
				return [$.pointerValue<call>(c).val, $.pointerValue<call>(c).err, true]
			}
		}
		let c: call | $.VarRef<call> | null = new call()
		let c$: call = c == null ? $.pointerTarget<call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<call>(c)
		void (c$ as call).wg.Add(1)
		$.mapSet((g$ as Group).m, key, c)
		void (g$ as Group).mu.Unlock()

		await (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as Group).doCall(c, key, fn) : Group.prototype.doCall.call(g, c, key, fn))
		return [(c$ as call).val, (c$ as call).err, (c$ as call).dups > 0]
	}

	public async DoChan(key: string, fn: (() => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null): globalThis.Promise<$.Channel<Result> | null> {
		let g: Group | $.VarRef<Group> | null = this;
		const g$: Group = g == null ? $.pointerTarget<Group>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<Group>(g)
		let ch: $.Channel<Result> | null = $.makeChannel<Result>(1, new Result(undefined, true), "both")
		await (g$ as Group).mu.Lock()
		if ((g$ as Group).m == null) {
			;(g$ as Group).m = $.makeMap<string, call | $.VarRef<call> | null>()
		}
		{
			let __goscriptTuple1: any = $.mapGet<string, call | $.VarRef<call> | null, call | $.VarRef<call> | null>((g$ as Group).m, key, null)
			let c: call | $.VarRef<call> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				$.pointerValue<call>(c).dups++
				$.pointerValue<call>(c).chans = $.appendOne($.pointerValue<call>(c).chans, ch, $.appendZeros.nil)
				void (g$ as Group).mu.Unlock()
				return ch
			}
		}
		let c: call | $.VarRef<call> | null = new call({chans: $.arrayToSlice<$.Channel<Result> | null>([ch])})
		$.pointerValue<call>(c).wg.Add(1)
		$.mapSet((g$ as Group).m, key, c)
		void (g$ as Group).mu.Unlock()

		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (c: call | $.VarRef<call> | null, key: string, fn: (() => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null) => __receiver.doCall(c, key, fn))((g$ as Group)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("singleflight.call"), /* @__PURE__ */ $.basicType("string"), ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo), "internal/singleflight.(*Group).doCall-fm")
		const __goscriptDeferArg0 = c
		const __goscriptDeferArg1 = key
		const __goscriptDeferArg2 = fn
		queueMicrotask(async () => { await __goscriptDeferCallee0(__goscriptDeferArg0, __goscriptDeferArg1, __goscriptDeferArg2) })

		return ch
	}

	public async ForgetUnshared(key: string): globalThis.Promise<boolean> {
		const g: Group | $.VarRef<Group> | null = this;
		using __defer = new $.DisposableStack()
		const g$: Group = g == null ? $.pointerTarget<Group>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<Group>(g)
		await (g$ as Group).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((g$ as Group).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		let __goscriptTuple2: any = $.mapGet<string, call | $.VarRef<call> | null, call | $.VarRef<call> | null>((g$ as Group).m, key, null)
		let c: call | $.VarRef<call> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			return true
		}
		if ($.pointerValue<call>(c).dups == 0) {
			$.deleteMapEntry((g$ as Group).m, key)
			return true
		}
		return false
	}

	public async doCall(c: call | $.VarRef<call> | null, key: string, fn: (() => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null): globalThis.Promise<void> {
		const g: Group | $.VarRef<Group> | null = this;
		const g$: Group = g == null ? $.pointerTarget<Group>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<Group>(g)
		const c$: call = c == null ? $.pointerTarget<call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<call>(c)
		let __goscriptTuple3: any = await fn!();
		;(c$ as call).val = __goscriptTuple3[0];
		;(c$ as call).err = __goscriptTuple3[1]

		await (g$ as Group).mu.Lock()
		void (c$ as call).wg.Done()
		if ($.pointerEqual($.mapGet<string, call | $.VarRef<call> | null, call | $.VarRef<call> | null>((g$ as Group).m, key, null)[0], c)) {
			$.deleteMapEntry((g$ as Group).m, key)
		}
		for (let __goscriptRangeTarget0 = (c$ as call).chans, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let ch = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as $.Channel<Result> | null)
			await $.chanSend(ch, new Result({Val: (c$ as call).val, Err: (c$ as call).err, Shared: (c$ as call).dups > 0}, true))
		}
		void (g$ as Group).mu.Unlock()
	}

	static __typeInfo = $.registerStructType(
		"singleflight.Group",
		() => new Group(),
		() => [$.methodSignature("Do", [["key", /* @__PURE__ */ $.basicType("string")], ["fn", ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)]], [["v", { kind: $.TypeKind.Interface, methods: [] }], ["err", "error"], ["shared", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("DoChan", [["key", /* @__PURE__ */ $.basicType("string")], ["fn", ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.channelType("singleflight.Result", "receive")], true), $.methodSignature("ForgetUnshared", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("doCall", [["c", /* @__PURE__ */ $.pointerType("singleflight.call")], ["key", /* @__PURE__ */ $.basicType("string")], ["fn", ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)]], [], true)],
		Group,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "internal/singleflight" }), /* @__PURE__ */ $.structField("m", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("singleflight.call")), [1], 8, false, { pkgPath: "internal/singleflight" })]
	)
}

export class Result {
	public get Val(): any {
		return this._fields.Val
	}

	public set Val(value: any) {
		this._fields.Val = value
	}

	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public get Shared(): boolean {
		return this._fields.Shared
	}

	public set Shared(value: boolean) {
		this._fields.Shared = value
	}

	public _fields: {
		Val: any
		Err: $.GoError
		Shared: boolean
	}

	constructor(init?: Partial<{Val?: any, Err?: $.GoError, Shared?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Val: init?.Val ?? (null! as any),
			Err: init?.Err ?? (null! as $.GoError),
			Shared: init?.Shared ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Result {
		return new Result(this, true)
	}

	public __goscriptAssign(source: Result): void {
		const target = this._fields
		const values = source._fields
		target.Val = $.assignFieldValue(target.Val, values.Val, { kind: $.TypeKind.Interface, methods: [] })
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
		target.Shared = values.Shared
	}

	static __typeInfo = $.registerStructType(
		"singleflight.Result",
		() => new Result(),
		() => [],
		Result,
		() => [/* @__PURE__ */ $.structField("Val", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, true), /* @__PURE__ */ $.structField("Err", "error", [1], 16, true), /* @__PURE__ */ $.structField("Shared", /* @__PURE__ */ $.basicType("bool"), [2], 32, true)]
	)
}
