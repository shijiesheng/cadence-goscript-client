// Generated file based on expvar.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as log from "@goscript/log/index.js"

import * as math from "@goscript/math/index.js"

import * as http from "@goscript/net/http/index.js"

import * as os from "@goscript/os/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/internal/godebug/index.js"
import "@goscript/log/index.js"
import "@goscript/math/index.js"
import "@goscript/net/http/index.js"
import "@goscript/os/index.js"
import "@goscript/runtime/index.js"
import "@goscript/slices/index.js"
import "@goscript/strconv/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/unicode/utf8/index.js"

export type Var = {
	String(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"expvar.Var",
	null,
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type jsonVar = {
	appendJSON(b: $.Slice<number>): $.Slice<number> | globalThis.Promise<$.Slice<number>>
}

$.registerInterfaceType(
	"expvar.jsonVar",
	null,
	[$.methodSignature("appendJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))])]
);

export type Func = (() => any | globalThis.Promise<any>) | null

$.registerNamedValueType(
	"expvar.Func",
	{String: (receiver: any, ...args: any[]) => (Func_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Value: (receiver: any, ...args: any[]) => (Func_Value as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Value", [], [{ kind: $.TypeKind.Interface, methods: [] }])]
);

$.registerNamedValueType(
	"*expvar.Func",
	{String: (receiver: any, ...args: any[]) => (Func_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Value: (receiver: any, ...args: any[]) => (Func_Value as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Value", [], [{ kind: $.TypeKind.Interface, methods: [] }])]
);

export class Int {
	public get i(): atomic.Int64 {
		return this._fields.i
	}

	public set i(value: atomic.Int64) {
		this._fields.i = value
	}

	public _fields: {
		i: atomic.Int64
	}

	constructor(init?: Partial<{i?: atomic.Int64}>, __goscriptValue?: boolean) {
		this._fields = {
			i: init?.i ? $.markAsStructValue($.cloneStructValue(init.i)) : $.markAsStructValue(new atomic.Int64())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Int {
		return new Int(this, true)
	}

	public __goscriptAssign(source: Int): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.i, values.i)
	}

	public Add(delta: bigint): void {
		const v: Int | $.VarRef<Int> | null = this;
		$.pointerValue<Int>(v).i.Add(delta)
	}

	public Set(value: bigint): void {
		const v: Int | $.VarRef<Int> | null = this;
		$.pointerValue<Int>(v).i.Store(value)
	}

	public String(): string {
		const v: Int | $.VarRef<Int> | null = this;
		return $.bytesToString((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Int).appendJSON(null) : Int.prototype.appendJSON.call(v, null)))
	}

	public Value(): bigint {
		const v: Int | $.VarRef<Int> | null = this;
		return $.pointerValue<Int>(v).i.Load()
	}

	public appendJSON(b: $.Slice<number>): $.Slice<number> {
		const v: Int | $.VarRef<Int> | null = this;
		return strconv.AppendInt(b, $.pointerValue<Int>(v).i.Load(), 10)
	}

	static __typeInfo = $.registerStructType(
		"expvar.Int",
		() => new Int(),
		() => [$.methodSignature("Add", [["delta", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("Set", [["value", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Value", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("appendJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		Int,
		() => [/* @__PURE__ */ $.structField("i", "atomic.Int64", [0], 0, false, { pkgPath: "expvar" })]
	)
}

export class Float {
	public get f(): atomic.Uint64 {
		return this._fields.f
	}

	public set f(value: atomic.Uint64) {
		this._fields.f = value
	}

	public _fields: {
		f: atomic.Uint64
	}

	constructor(init?: Partial<{f?: atomic.Uint64}>, __goscriptValue?: boolean) {
		this._fields = {
			f: init?.f ? $.markAsStructValue($.cloneStructValue(init.f)) : $.markAsStructValue(new atomic.Uint64())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Float {
		return new Float(this, true)
	}

	public __goscriptAssign(source: Float): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.f, values.f)
	}

	public Add(delta: number): void {
		const v: Float | $.VarRef<Float> | null = this;
		const v$: Float = v == null ? $.pointerTarget<Float>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Float>(v)
		while (true) {
			let cur = (v$ as Float).f.Load()
			let curVal = math.Float64frombits(cur)
			let nxtVal = curVal + delta
			let nxt = math.Float64bits(nxtVal)
			if ((v$ as Float).f.CompareAndSwap(cur, nxt)) {
				return
			}
		}
	}

	public Set(value: number): void {
		const v: Float | $.VarRef<Float> | null = this;
		$.pointerValue<Float>(v).f.Store(math.Float64bits(value))
	}

	public String(): string {
		const v: Float | $.VarRef<Float> | null = this;
		return $.bytesToString((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Float).appendJSON(null) : Float.prototype.appendJSON.call(v, null)))
	}

	public Value(): number {
		const v: Float | $.VarRef<Float> | null = this;
		return math.Float64frombits($.pointerValue<Float>(v).f.Load())
	}

	public appendJSON(b: $.Slice<number>): $.Slice<number> {
		const v: Float | $.VarRef<Float> | null = this;
		return strconv.AppendFloat(b, math.Float64frombits($.pointerValue<Float>(v).f.Load()), 103, -1, 64)
	}

	static __typeInfo = $.registerStructType(
		"expvar.Float",
		() => new Float(),
		() => [$.methodSignature("Add", [["delta", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("Set", [["value", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Value", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("appendJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		Float,
		() => [/* @__PURE__ */ $.structField("f", "atomic.Uint64", [0], 0, false, { pkgPath: "expvar" })]
	)
}

export class Map {
	public get m(): sync.Map {
		return this._fields.m
	}

	public set m(value: sync.Map) {
		this._fields.m = value
	}

	public get keysMu(): sync.RWMutex {
		return this._fields.keysMu
	}

	public set keysMu(value: sync.RWMutex) {
		this._fields.keysMu = value
	}

	public get keys(): $.Slice<string> {
		return this._fields.keys
	}

	public set keys(value: $.Slice<string>) {
		this._fields.keys = value
	}

	public _fields: {
		m: sync.Map
		keysMu: sync.RWMutex
		keys: $.Slice<string>
	}

	constructor(init?: Partial<{m?: sync.Map, keysMu?: sync.RWMutex, keys?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			m: init?.m ? $.markAsStructValue($.cloneStructValue(init.m)) : $.markAsStructValue(new sync.Map()),
			keysMu: init?.keysMu ? $.markAsStructValue($.cloneStructValue(init.keysMu)) : $.markAsStructValue(new sync.RWMutex()),
			keys: init?.keys ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Map {
		return new Map(this, true)
	}

	public __goscriptAssign(source: Map): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.m, values.m)
		$.assignStruct(target.keysMu, values.keysMu)
		target.keys = values.keys
	}

	public async Add(key: string, delta: bigint): globalThis.Promise<void> {
		const v: Map | $.VarRef<Map> | null = this;
		const v$: Map = v == null ? $.pointerTarget<Map>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Map>(v)
		let [i, ok] = await (v$ as Map).m.Load(key)
		if (!ok) {
			let dup: boolean = false
			let __goscriptTuple0: any = await (v$ as Map).m.LoadOrStore(key, $.interfaceValue(new Int(), "*expvar.Int", /* @__PURE__ */ $.pointerType("expvar.Int")))
			i = __goscriptTuple0[0]
			dup = __goscriptTuple0[1]
			if (!dup) {
				await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Map).addKey(key) : Map.prototype.addKey.call(v, key))
			}
		}

		// Add to Int; ignore otherwise.
		{
			let __goscriptTuple1: any = $.typeAssertTuple<Int | $.VarRef<Int> | null>(i, /* @__PURE__ */ $.pointerType("expvar.Int"))
			let iv: Int | $.VarRef<Int> | null = __goscriptTuple1[0]
			let __goscriptShadow0 = __goscriptTuple1[1]
			if (__goscriptShadow0) {
				void (iv !== null && (iv as any).__isVarRef !== true && (iv as any).__goValue === undefined ? ((iv as any) as Int).Add(delta) : Int.prototype.Add.call(iv, delta))
			}
		}
	}

	public async AddFloat(key: string, delta: number): globalThis.Promise<void> {
		const v: Map | $.VarRef<Map> | null = this;
		const v$: Map = v == null ? $.pointerTarget<Map>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Map>(v)
		let [i, ok] = await (v$ as Map).m.Load(key)
		if (!ok) {
			let dup: boolean = false
			let __goscriptTuple2: any = await (v$ as Map).m.LoadOrStore(key, $.interfaceValue(new Float(), "*expvar.Float", /* @__PURE__ */ $.pointerType("expvar.Float")))
			i = __goscriptTuple2[0]
			dup = __goscriptTuple2[1]
			if (!dup) {
				await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Map).addKey(key) : Map.prototype.addKey.call(v, key))
			}
		}

		// Add to Float; ignore otherwise.
		{
			let __goscriptTuple3: any = $.typeAssertTuple<Float | $.VarRef<Float> | null>(i, /* @__PURE__ */ $.pointerType("expvar.Float"))
			let iv: Float | $.VarRef<Float> | null = __goscriptTuple3[0]
			let __goscriptShadow1 = __goscriptTuple3[1]
			if (__goscriptShadow1) {
				void (iv !== null && (iv as any).__isVarRef !== true && (iv as any).__goValue === undefined ? ((iv as any) as Float).Add(delta) : Float.prototype.Add.call(iv, delta))
			}
		}
	}

	public async Delete(key: string): globalThis.Promise<void> {
		let v: Map | $.VarRef<Map> | null = this;
		using __defer = new $.DisposableStack()
		const v$: Map = v == null ? $.pointerTarget<Map>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Map>(v)
		await (v$ as Map).keysMu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((v$ as Map).keysMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		let [i, found] = slices.BinarySearch((v$ as Map).keys, key)
		if (found) {
			;(v$ as Map).keys = (slices.Delete((v$ as Map).keys, i, i + 1) as $.Slice<string>)
			await (v$ as Map).m.Delete(key)
		}
	}

	public async Do(f: ((_p0: KeyValue) => void) | null): globalThis.Promise<void> {
		const v: Map | $.VarRef<Map> | null = this;
		using __defer = new $.DisposableStack()
		const v$: Map = v == null ? $.pointerTarget<Map>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Map>(v)
		await (v$ as Map).keysMu.RLock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((v$ as Map).keysMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		for (let __goscriptRangeTarget0 = (v$ as Map).keys, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let k = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
			let [i, ] = await (v$ as Map).m.Load(k)
			let [val, ] = $.typeAssertTuple<Var | null>(i, "expvar.Var")
			void (__goscriptAwait = f!(new KeyValue({Key: k, Value: val}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async Get(key: string): globalThis.Promise<Var | null> {
		const v: Map | $.VarRef<Map> | null = this;
		let [i, ] = await $.pointerValue<Map>(v).m.Load(key)
		let [av, ] = $.typeAssertTuple<Var | null>(i, "expvar.Var")
		return av
	}

	public async Init(): globalThis.Promise<Map | $.VarRef<Map> | null> {
		let v: Map | $.VarRef<Map> | null = this;
		using __defer = new $.DisposableStack()
		const v$: Map = v == null ? $.pointerTarget<Map>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Map>(v)
		await (v$ as Map).keysMu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((v$ as Map).keysMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() });
		;(v$ as Map).keys = $.goSlice((v$ as Map).keys, undefined, 0)
		void (v$ as Map).m.Clear()
		return v
	}

	public async Set(key: string, av: Var | null): globalThis.Promise<void> {
		const v: Map | $.VarRef<Map> | null = this;
		const v$: Map = v == null ? $.pointerTarget<Map>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Map>(v)
		// Before we store the value, check to see whether the key is new. Try a Load
		// before LoadOrStore: LoadOrStore causes the key interface to escape even on
		// the Load path.
		{
			let [, ok] = await (v$ as Map).m.Load(key)
			if (!ok) {
				{
					let [, dup] = await (v$ as Map).m.LoadOrStore(key, (av as any))
					if (!dup) {
						await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Map).addKey(key) : Map.prototype.addKey.call(v, key))
						return
					}
				}
			}
		}

		await (v$ as Map).m.Store(key, (av as any))
	}

	public async String(): globalThis.Promise<string> {
		const v: Map | $.VarRef<Map> | null = this;
		return $.bytesToString(await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Map).appendJSON(null) : Map.prototype.appendJSON.call(v, null)))
	}

	public async addKey(key: string): globalThis.Promise<void> {
		let v: Map | $.VarRef<Map> | null = this;
		using __defer = new $.DisposableStack()
		const v$: Map = v == null ? $.pointerTarget<Map>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Map>(v)
		await (v$ as Map).keysMu.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((v$ as Map).keysMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		// Using insertion sort to place key into the already-sorted v.keys.
		let [i, found] = slices.BinarySearch((v$ as Map).keys, key)
		if (found) {
			return
		}
		;(v$ as Map).keys = (slices.Insert((v$ as Map).keys, i, key) as $.Slice<string>)
	}

	public async appendJSON(b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const v: Map | $.VarRef<Map> | null = this;
		return (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Map).appendJSONMayExpand(b, false) : Map.prototype.appendJSONMayExpand.call(v, b, false))
	}

	public async appendJSONMayExpand(b: $.Slice<number>, expand: boolean): globalThis.Promise<$.Slice<number>> {
		const v: Map | $.VarRef<Map> | null = this;
		let afterCommaDelim = 32
		let mayAppendNewline: ((b: $.Slice<number>) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null = $.functionValue((b: $.Slice<number>): $.Slice<number> => {
			return b
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo))
		if (expand) {
			afterCommaDelim = 10
			mayAppendNewline = $.functionValue((b: $.Slice<number>): $.Slice<number> => {
				return $.append(b, $.uint(10, 8), $.byteSliceHint)
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo))
		}

		b = $.append(b, $.uint(123, 8), $.byteSliceHint)
		b = ((__goscriptAwait = mayAppendNewline!(b), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
		let first = true
		await Map.prototype.Do.call(v, $.functionValue(async (kv: KeyValue): globalThis.Promise<void> => {
			if (!first) {
				b = $.append(b, $.uint(44, 8), $.uint(afterCommaDelim, 8), $.byteSliceHint)
			}
			first = false
			b = appendJSONQuote(b, kv.Key)
			b = $.append(b, $.uint(58, 8), $.uint(32, 8), $.byteSliceHint)
			{
				const __goscriptTypeSwitchValue = kv.Value
				switch (true) {
					case __goscriptTypeSwitchValue == null:
						{
							let v: any = __goscriptTypeSwitchValue
							b = $.appendSlice(b, $.stringToBytes("null"), $.byteSliceHint)
						}
						break
					case $.typeAssert<jsonVar | null>(__goscriptTypeSwitchValue, "expvar.jsonVar").ok:
						{
							let v: jsonVar | null = $.typeAssert<jsonVar | null>(__goscriptTypeSwitchValue, "expvar.jsonVar").value
							b = ((__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<jsonVar, null>) : $.pointerValue<Exclude<jsonVar, null>>(v)).appendJSON(b), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
						}
						break
					default:
						{
							let v: any = __goscriptTypeSwitchValue
							b = $.appendSlice(b, $.stringToBytes((__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<Var, null>) : $.pointerValue<Exclude<Var, null>>(v)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), $.byteSliceHint)
						}
						break
				}
			}
		}, ({ kind: $.TypeKind.Function, params: ["expvar.KeyValue"], results: [] } as $.FunctionTypeInfo)))
		b = ((__goscriptAwait = mayAppendNewline!(b), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
		b = $.append(b, $.uint(125, 8), $.byteSliceHint)
		b = ((__goscriptAwait = mayAppendNewline!(b), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
		return b
	}

	static __typeInfo = $.registerStructType(
		"expvar.Map",
		() => new Map(),
		() => [$.methodSignature("Add", [["key", /* @__PURE__ */ $.basicType("string")], ["delta", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("AddFloat", [["key", /* @__PURE__ */ $.basicType("string")], ["delta", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("Delete", [["key", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Do", [["f", ({ kind: $.TypeKind.Function, params: ["expvar.KeyValue"], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("Get", [["key", /* @__PURE__ */ $.basicType("string")]], ["expvar.Var"], true), $.methodSignature("Init", [], [/* @__PURE__ */ $.pointerType("expvar.Map")], true), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["av", "expvar.Var"]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("addKey", [["key", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("appendJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("appendJSONMayExpand", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["expand", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		Map,
		() => [/* @__PURE__ */ $.structField("m", "sync.Map", [0], 0, false, { pkgPath: "expvar" }), /* @__PURE__ */ $.structField("keysMu", "sync.RWMutex", [1], 48, false, { pkgPath: "expvar" }), /* @__PURE__ */ $.structField("keys", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 72, false, { pkgPath: "expvar" })]
	)
}

export class KeyValue {
	public get Key(): string {
		return this._fields.Key
	}

	public set Key(value: string) {
		this._fields.Key = value
	}

	public get Value(): Var | null {
		return this._fields.Value
	}

	public set Value(value: Var | null) {
		this._fields.Value = value
	}

	public _fields: {
		Key: string
		Value: Var | null
	}

	constructor(init?: Partial<{Key?: string, Value?: Var | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Key: init?.Key ?? ("" as string),
			Value: init?.Value ?? (null! as Var | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): KeyValue {
		return new KeyValue(this, true)
	}

	public __goscriptAssign(source: KeyValue): void {
		const target = this._fields
		const values = source._fields
		target.Key = values.Key
		target.Value = $.assignFieldValue(target.Value, values.Value, "expvar.Var")
	}

	static __typeInfo = $.registerStructType(
		"expvar.KeyValue",
		() => new KeyValue(),
		() => [],
		KeyValue,
		() => [/* @__PURE__ */ $.structField("Key", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Value", "expvar.Var", [1], 16, true)]
	)
}

export class String {
	public get s(): atomic.Value {
		return this._fields.s
	}

	public set s(value: atomic.Value) {
		this._fields.s = value
	}

	public _fields: {
		s: atomic.Value
	}

	constructor(init?: Partial<{s?: atomic.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s ? $.markAsStructValue($.cloneStructValue(init.s)) : $.markAsStructValue(new atomic.Value())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): String {
		return new String(this, true)
	}

	public __goscriptAssign(source: String): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.s, values.s)
	}

	public Set(value: string): void {
		const v: String | $.VarRef<String> | null = this;
		$.pointerValue<String>(v).s.Store(value)
	}

	public String(): string {
		const v: String | $.VarRef<String> | null = this;
		return $.bytesToString((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as String).appendJSON(null) : String.prototype.appendJSON.call(v, null)))
	}

	public Value(): string {
		const v: String | $.VarRef<String> | null = this;
		let [p, ] = $.typeAssertTuple<string>($.pointerValue<String>(v).s.Load(), /* @__PURE__ */ $.basicType("string"))
		return p
	}

	public appendJSON(b: $.Slice<number>): $.Slice<number> {
		const v: String | $.VarRef<String> | null = this;
		return appendJSONQuote(b, (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as String).Value() : String.prototype.Value.call(v)))
	}

	static __typeInfo = $.registerStructType(
		"expvar.String",
		() => new String(),
		() => [$.methodSignature("Set", [["value", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Value", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("appendJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		String,
		() => [/* @__PURE__ */ $.structField("s", "atomic.Value", [0], 0, false, { pkgPath: "expvar" })]
	)
}

export async function Func_Value(f: Func | null): globalThis.Promise<any> {
	return f!()
}

export async function Func_String(f: Func | null): globalThis.Promise<string> {
	let __goscriptTuple4: any = await json.Marshal((__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	let v: $.Slice<number> = __goscriptTuple4[0]
	return $.bytesToString(v)
}

export let vars: $.VarRef<Map> = $.varRef(new Map(undefined, true))

export function __goscript_set_vars(__goscriptValue: Map): void {
	$.assignStruct(vars.value, __goscriptValue)
}

export async function Publish(name: string, v: Var | null): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	{
		let [, dup] = await vars.value.m.LoadOrStore(name, (v as any))
		if (dup) {
			await log.Panicln($.arrayToSlice<any>(["Reuse of exported var name:", name]))
		}
	}
	await vars.value.keysMu.Lock()
	const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())(vars.value.keysMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee4() })
	vars.value.keys = $.appendOne(vars.value.keys, name)
	slices.Sort(vars.value.keys)
}

export async function Get(name: string): globalThis.Promise<Var | null> {
	return vars.value.Get(name)
}

export async function NewInt(name: string): globalThis.Promise<Int | $.VarRef<Int> | null> {
	let v: Int | $.VarRef<Int> | null = new Int()
	await Publish(name, $.interfaceValue<Var | null>(v, "*expvar.Int", /* @__PURE__ */ $.pointerType("expvar.Int")))
	return v
}

export async function NewFloat(name: string): globalThis.Promise<Float | $.VarRef<Float> | null> {
	let v: Float | $.VarRef<Float> | null = new Float()
	await Publish(name, $.interfaceValue<Var | null>(v, "*expvar.Float", /* @__PURE__ */ $.pointerType("expvar.Float")))
	return v
}

export async function NewMap(name: string): globalThis.Promise<Map | $.VarRef<Map> | null> {
	let v: Map | $.VarRef<Map> | null = await Map.prototype.Init.call(new Map())
	await Publish(name, $.interfaceValue<Var | null>(v, "*expvar.Map", /* @__PURE__ */ $.pointerType("expvar.Map")))
	return v
}

export async function NewString(name: string): globalThis.Promise<String | $.VarRef<String> | null> {
	let v: String | $.VarRef<String> | null = new String()
	await Publish(name, $.interfaceValue<Var | null>(v, "*expvar.String", /* @__PURE__ */ $.pointerType("expvar.String")))
	return v
}

export async function Do(f: ((_p0: KeyValue) => void) | null): globalThis.Promise<void> {
	await vars.value.Do(f)
}

export async function expvarHandler(w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> {
	http.Header_Set(((__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(w)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header), "Content-Type", "application/json; charset=utf-8")
	await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(w)).Write(await vars.value.appendJSONMayExpand(null, true))
}

export function Handler(): http.Handler | null {
	return $.namedValueInterfaceValue<http.Handler | null>($.namedFunction(expvarHandler, "http.HandlerFunc", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)), "http.HandlerFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function cmdline(): any {
	return $.interfaceValue(os.Args, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))
}

export function memstats(): any {
	let stats: runtime.MemStats | $.VarRef<runtime.MemStats> | null = new runtime.MemStats()
	runtime.ReadMemStats(stats)
	return $.interfaceValue($.markAsStructValue($.cloneStructValue($.pointerValue<runtime.MemStats>(stats))), "runtime.MemStats", "runtime.MemStats")
}

async function __goscriptInit0(): globalThis.Promise<void> {
	if ($.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(godebug.New("httpmuxgo121"))), "1")) {
		http.HandleFunc("/debug/vars", expvarHandler)
	} else {
		http.HandleFunc("GET /debug/vars", expvarHandler)
	}
	await Publish("cmdline", $.namedValueInterfaceValue<Var | null>($.namedFunction(cmdline, "expvar.Func", ({ kind: $.TypeKind.Function, name: "expvar.Func", params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)), "expvar.Func", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))
	await Publish("memstats", $.namedValueInterfaceValue<Var | null>($.namedFunction(memstats, "expvar.Func", ({ kind: $.TypeKind.Function, name: "expvar.Func", params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)), "expvar.Func", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))
}

export function appendJSONQuote(b: $.Slice<number>, s: string): $.Slice<number> {
	const hex: string = "0123456789abcdef"
	b = $.append(b, $.uint(34, 8), $.byteSliceHint)
	for (let __goscriptRunes0 = $.stringRunes(s); __goscriptRunes0.next(); ) {
		const r = __goscriptRunes0.rune
		switch ((true as boolean)) {
			case (((((((r < 32) || (r == 92)) || (r == 34)) || (r == 60)) || (r == 62)) || (r == 38)) || (r == 8232)) || (r == 8233):
			{
				switch (r) {
					case 92:
					case 34:
					{
						b = $.append(b, $.uint(92, 8), $.uint($.uint(r, 8), 8), $.byteSliceHint)
						break
					}
					case 10:
					{
						b = $.append(b, $.uint(92, 8), $.uint(110, 8), $.byteSliceHint)
						break
					}
					case 13:
					{
						b = $.append(b, $.uint(92, 8), $.uint(114, 8), $.byteSliceHint)
						break
					}
					case 9:
					{
						b = $.append(b, $.uint(92, 8), $.uint(116, 8), $.byteSliceHint)
						break
					}
					default:
					{
						b = $.append(b, $.uint(92, 8), $.uint(117, 8), $.uint($.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", (r >> 12) & 0xf), 8), $.uint($.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", (r >> 8) & 0xf), 8), $.uint($.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", (r >> 4) & 0xf), 8), $.uint($.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", (r >> 0) & 0xf), 8), $.byteSliceHint)
						break
					}
				}
				break
			}
			case r < 128:
			{
				b = $.append(b, $.uint($.uint(r, 8), 8), $.byteSliceHint)
				break
			}
			default:
			{
				b = utf8.AppendRune(b, r)
				break
			}
		}
	}
	b = $.append(b, $.uint(34, 8), $.byteSliceHint)
	return b
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({ServeHTTP: (receiver: any, ...args: any[]) => (http.HandlerFunc_ServeHTTP as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("ServeHTTP", [["w", "http.ResponseWriter"], ["r", /* @__PURE__ */ $.pointerType("http.Request")]])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (Func_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Value: (receiver: any, ...args: any[]) => (Func_Value as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (({ kind: $.TypeKind.Function, name: "expvar.Func", params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Value", [], [{ kind: $.TypeKind.Interface, methods: [] }])])
}

var __goscriptAwait: any

await __goscriptInit0()
