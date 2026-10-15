// Generated file based on value.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strconv from "@goscript/strconv/index.js"

import type * as url from "@goscript/net/url/index.js"

import * as __goscript_accessors from "./accessors.gs.ts"

import * as __goscript_conversions from "./conversions.gs.ts"

import * as __goscript_map from "./map.gs.ts"

import * as __goscript_mutations from "./mutations.gs.ts"

import * as __goscript_tests from "./tests.gs.ts"

import * as __goscript_type_specific from "./type_specific.gs.ts"

import * as __goscript_type_specific_codegen from "./type_specific_codegen.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/strconv/index.js"
import "./accessors.gs.ts"
import "./conversions.gs.ts"
import "./map.gs.ts"
import "./mutations.gs.ts"
import "./tests.gs.ts"
import "./type_specific.gs.ts"
import "./type_specific_codegen.gs.ts"

$.registerTypePackagePath("github.com/stretchr/objx", ["objx.Value"])

export class Value {
	// data contains the raw data being managed by this Value
	public get data(): any {
		return this._fields.data
	}

	public set data(value: any) {
		this._fields.data = value
	}

	public _fields: {
		data: any
	}

	constructor(init?: Partial<{data?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			data: init?.data ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Value {
		return new Value(this, true)
	}

	public __goscriptAssign(source: Value): void {
		const target = this._fields
		const values = source._fields
		target.data = $.assignFieldValue(target.data, values.data, { kind: $.TypeKind.Interface, methods: [] })
	}

	public Bool(optionalDefault: $.Slice<boolean>): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let [s, ok] = $.typeAssertTuple<boolean>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("bool"))
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return false
	}

	public BoolSlice(optionalDefault: $.Slice<$.Slice<boolean>>): $.Slice<boolean> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple0: any = $.typeAssertTuple<$.Slice<boolean>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool")))
			let s: $.Slice<boolean> = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public async CollectBool(collector: ((_p0: number, _p1: boolean) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<boolean> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustBoolSlice() : Value.prototype.MustBoolSlice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachBool.call(v, $.functionValue(async (index: number, val: boolean): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectComplex128(collector: ((_p0: number, _p1: $.Complex) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<$.Complex> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustComplex128Slice() : Value.prototype.MustComplex128Slice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachComplex128.call(v, $.functionValue(async (index: number, val: $.Complex): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex128")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectComplex64(collector: ((_p0: number, _p1: $.Complex) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<$.Complex> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustComplex64Slice() : Value.prototype.MustComplex64Slice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachComplex64.call(v, $.functionValue(async (index: number, val: $.Complex): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, $.complex64(val)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectFloat32(collector: ((_p0: number, _p1: number) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustFloat32Slice() : Value.prototype.MustFloat32Slice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachFloat32.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectFloat64(collector: ((_p0: number, _p1: number) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustFloat64Slice() : Value.prototype.MustFloat64Slice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachFloat64.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectInt(collector: ((_p0: number, _p1: number) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustIntSlice() : Value.prototype.MustIntSlice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachInt.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectInt16(collector: ((_p0: number, _p1: number) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInt16Slice() : Value.prototype.MustInt16Slice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachInt16.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int16")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectInt32(collector: ((_p0: number, _p1: number) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInt32Slice() : Value.prototype.MustInt32Slice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachInt32.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectInt64(collector: ((_p0: number, _p1: bigint) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<bigint> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInt64Slice() : Value.prototype.MustInt64Slice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachInt64.call(v, $.functionValue(async (index: number, val: bigint): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectInt8(collector: ((_p0: number, _p1: number) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInt8Slice() : Value.prototype.MustInt8Slice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachInt8.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int8")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectInter(collector: ((_p0: number, _p1: any) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<any> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInterSlice() : Value.prototype.MustInterSlice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachInter.call(v, $.functionValue(async (index: number, val: any): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectMSI(collector: ((_p0: number, _p1: globalThis.Map<string, any> | null) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<globalThis.Map<string, any> | null> = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustMSISlice() : Value.prototype.MustMSISlice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachMSI.call(v, $.functionValue(async (index: number, val: globalThis.Map<string, any> | null): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectObjxMap(collector: ((_p0: number, _p1: __goscript_map.Map) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<__goscript_map.Map> = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustObjxMapSlice() : Value.prototype.MustObjxMapSlice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachObjxMap.call(v, $.functionValue(async (index: number, val: __goscript_map.Map): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), "objx.Map"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectStr(collector: ((_p0: number, _p1: string) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<string> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustStrSlice() : Value.prototype.MustStrSlice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachStr.call(v, $.functionValue(async (index: number, val: string): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectUint(collector: ((_p0: number, _p1: number) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUintSlice() : Value.prototype.MustUintSlice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachUint.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectUint16(collector: ((_p0: number, _p1: number) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUint16Slice() : Value.prototype.MustUint16Slice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachUint16.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint16")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectUint32(collector: ((_p0: number, _p1: number) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUint32Slice() : Value.prototype.MustUint32Slice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachUint32.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectUint64(collector: ((_p0: number, _p1: bigint) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<bigint> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUint64Slice() : Value.prototype.MustUint64Slice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachUint64.call(v, $.functionValue(async (index: number, val: bigint): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectUint8(collector: ((_p0: number, _p1: number) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUint8Slice() : Value.prototype.MustUint8Slice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachUint8.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint8")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async CollectUintptr(collector: ((_p0: number, _p1: number) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUintptrSlice() : Value.prototype.MustUintptrSlice.call(v))
		let collected: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachUintptr.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(collected!)[$.sliceSlot(collected!, index)] = (__goscriptAwait = collector!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uintptr")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(collected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public Complex128(optionalDefault: $.Slice<$.Complex>): $.Complex {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let [s, ok] = $.typeAssertTuple<$.Complex>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("complex128"))
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return $.complex(0, 0)
	}

	public Complex128Slice(optionalDefault: $.Slice<$.Slice<$.Complex>>): $.Slice<$.Complex> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple1: any = $.typeAssertTuple<$.Slice<$.Complex>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128")))
			let s: $.Slice<$.Complex> = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public Complex64(optionalDefault: $.Slice<$.Complex>): $.Complex {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let [s, ok] = $.typeAssertTuple<$.Complex>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("complex64"))
			if (ok) {
				return $.complex64(s)
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.complex64($.arrayIndex(optionalDefault!, 0))
		}
		return $.complex64($.complex(0, 0))
	}

	public Complex64Slice(optionalDefault: $.Slice<$.Slice<$.Complex>>): $.Slice<$.Complex> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple2: any = $.typeAssertTuple<$.Slice<$.Complex>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64")))
			let s: $.Slice<$.Complex> = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public Data(): any {
		const v: Value | $.VarRef<Value> | null = this;
		return $.pointerValue<Value>(v).data
	}

	public async EachBool(callback: ((_p0: number, _p1: boolean) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget0 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustBoolSlice() : Value.prototype.MustBoolSlice.call(v)), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), index = 0; index < __goscriptRangeWindow0.length; index++) {
			let val = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + index] as boolean)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachComplex128(callback: ((_p0: number, _p1: $.Complex) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget1 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustComplex128Slice() : Value.prototype.MustComplex128Slice.call(v)), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), index = 0; index < __goscriptRangeWindow1.length; index++) {
			let val = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + index] as $.Complex)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachComplex64(callback: ((_p0: number, _p1: $.Complex) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget2 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustComplex64Slice() : Value.prototype.MustComplex64Slice.call(v)), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), index = 0; index < __goscriptRangeWindow2.length; index++) {
			let val = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + index] as $.Complex)
			let carryon = (__goscriptAwait = callback!(index, $.complex64(val)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachFloat32(callback: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget3 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustFloat32Slice() : Value.prototype.MustFloat32Slice.call(v)), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), index = 0; index < __goscriptRangeWindow3.length; index++) {
			let val = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + index] as number)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachFloat64(callback: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget4 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustFloat64Slice() : Value.prototype.MustFloat64Slice.call(v)), __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), index = 0; index < __goscriptRangeWindow4.length; index++) {
			let val = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + index] as number)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachInt(callback: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget5 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustIntSlice() : Value.prototype.MustIntSlice.call(v)), __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), index = 0; index < __goscriptRangeWindow5.length; index++) {
			let val = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + index] as number)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachInt16(callback: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget6 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInt16Slice() : Value.prototype.MustInt16Slice.call(v)), __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), index = 0; index < __goscriptRangeWindow6.length; index++) {
			let val = $.int((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + index] as number), 16)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachInt32(callback: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget7 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInt32Slice() : Value.prototype.MustInt32Slice.call(v)), __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), index = 0; index < __goscriptRangeWindow7.length; index++) {
			let val = $.int((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + index] as number), 32)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachInt64(callback: ((_p0: number, _p1: bigint) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget8 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInt64Slice() : Value.prototype.MustInt64Slice.call(v)), __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), index = 0; index < __goscriptRangeWindow8.length; index++) {
			let val = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + index] as bigint)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachInt8(callback: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget9 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInt8Slice() : Value.prototype.MustInt8Slice.call(v)), __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), index = 0; index < __goscriptRangeWindow9.length; index++) {
			let val = $.int((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + index] as number), 8)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachInter(callback: ((_p0: number, _p1: any) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget10 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInterSlice() : Value.prototype.MustInterSlice.call(v)), __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), index = 0; index < __goscriptRangeWindow10.length; index++) {
			let val = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + index] as any)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachMSI(callback: ((_p0: number, _p1: globalThis.Map<string, any> | null) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget11 = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustMSISlice() : Value.prototype.MustMSISlice.call(v)), __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), index = 0; index < __goscriptRangeWindow11.length; index++) {
			let val = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + index] as globalThis.Map<string, any> | null)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachObjxMap(callback: ((_p0: number, _p1: __goscript_map.Map) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget12 = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustObjxMapSlice() : Value.prototype.MustObjxMapSlice.call(v)), __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), index = 0; index < __goscriptRangeWindow12.length; index++) {
			let val = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + index] as __goscript_map.Map)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachStr(callback: ((_p0: number, _p1: string) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget13 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustStrSlice() : Value.prototype.MustStrSlice.call(v)), __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), index = 0; index < __goscriptRangeWindow13.length; index++) {
			let val = (__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + index] as string)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachUint(callback: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget14 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUintSlice() : Value.prototype.MustUintSlice.call(v)), __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), index = 0; index < __goscriptRangeWindow14.length; index++) {
			let val = (__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + index] as number)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachUint16(callback: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget15 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUint16Slice() : Value.prototype.MustUint16Slice.call(v)), __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), index = 0; index < __goscriptRangeWindow15.length; index++) {
			let val = $.uint((__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + index] as number), 16)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachUint32(callback: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget16 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUint32Slice() : Value.prototype.MustUint32Slice.call(v)), __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), index = 0; index < __goscriptRangeWindow16.length; index++) {
			let val = $.uint((__goscriptRangeWindow16.backing[__goscriptRangeWindow16.offset + index] as number), 32)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachUint64(callback: ((_p0: number, _p1: bigint) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget17 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUint64Slice() : Value.prototype.MustUint64Slice.call(v)), __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), index = 0; index < __goscriptRangeWindow17.length; index++) {
			let val = (__goscriptRangeWindow17.backing[__goscriptRangeWindow17.offset + index] as bigint)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachUint8(callback: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget18 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUint8Slice() : Value.prototype.MustUint8Slice.call(v)), __goscriptRangeWindow18 = $.sliceRange(__goscriptRangeTarget18), index = 0; index < __goscriptRangeWindow18.length; index++) {
			let val = $.uint((__goscriptRangeWindow18.backing[__goscriptRangeWindow18.offset + index] as number), 8)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public async EachUintptr(callback: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		for (let __goscriptRangeTarget19 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUintptrSlice() : Value.prototype.MustUintptrSlice.call(v)), __goscriptRangeWindow19 = $.sliceRange(__goscriptRangeTarget19), index = 0; index < __goscriptRangeWindow19.length; index++) {
			let val = $.uint((__goscriptRangeWindow19.backing[__goscriptRangeWindow19.offset + index] as number), 64)
			let carryon = (__goscriptAwait = callback!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!carryon) {
				break
			}
		}
		return v
	}

	public Float32(optionalDefault: $.Slice<number>): number {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let [s, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("float32"))
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return 0
	}

	public Float32Slice(optionalDefault: $.Slice<$.Slice<number>>): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple3: any = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32")))
			let s: $.Slice<number> = __goscriptTuple3[0]
			let ok = __goscriptTuple3[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public Float64(optionalDefault: $.Slice<number>): number {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let [s, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("float64"))
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return 0
	}

	public Float64Slice(optionalDefault: $.Slice<$.Slice<number>>): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple4: any = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")))
			let s: $.Slice<number> = __goscriptTuple4[0]
			let ok = __goscriptTuple4[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public async GroupBool(grouper: ((_p0: number, _p1: boolean) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<boolean>> | null = $.makeMap<string, $.Slice<boolean>>()
		await Value.prototype.EachBool.call(v, $.functionValue(async (index: number, val: boolean): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<boolean>, $.Slice<boolean>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<boolean>(0, undefined, "boolean"))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<boolean>, $.Slice<boolean>>(groups, group, null)[0], val))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]bool", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool"))))})
	}

	public async GroupComplex128(grouper: ((_p0: number, _p1: $.Complex) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<$.Complex>> | null = $.makeMap<string, $.Slice<$.Complex>>()
		await Value.prototype.EachComplex128.call(v, $.functionValue(async (index: number, val: $.Complex): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<$.Complex>, $.Slice<$.Complex>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<$.Complex>(0, undefined, "number"))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<$.Complex>, $.Slice<$.Complex>>(groups, group, null)[0], val, $.appendZeros.complex))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex128")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]complex128", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128"))))})
	}

	public async GroupComplex64(grouper: ((_p0: number, _p1: $.Complex) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<$.Complex>> | null = $.makeMap<string, $.Slice<$.Complex>>()
		await Value.prototype.EachComplex64.call(v, $.functionValue(async (index: number, val: $.Complex): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, $.complex64(val)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<$.Complex>, $.Slice<$.Complex>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<$.Complex>(0, undefined, "number"))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<$.Complex>, $.Slice<$.Complex>>(groups, group, null)[0], val, $.appendZeros.complex))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]complex64", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64"))))})
	}

	public async GroupFloat32(grouper: ((_p0: number, _p1: number) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()
		await Value.prototype.EachFloat32.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<number>(0, undefined, "number"))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)[0], val))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]float32", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32"))))})
	}

	public async GroupFloat64(grouper: ((_p0: number, _p1: number) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()
		await Value.prototype.EachFloat64.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<number>(0, undefined, "number"))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)[0], val))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]float64", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))))})
	}

	public async GroupInt(grouper: ((_p0: number, _p1: number) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()
		await Value.prototype.EachInt.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<number>(0, undefined, "number"))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)[0], val))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]int", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))))})
	}

	public async GroupInt16(grouper: ((_p0: number, _p1: number) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()
		await Value.prototype.EachInt16.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<number>(0, undefined, "number"))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)[0], $.int(val, 16)))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int16")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]int16", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16"))))})
	}

	public async GroupInt32(grouper: ((_p0: number, _p1: number) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()
		await Value.prototype.EachInt32.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<number>(0, undefined, "number"))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)[0], $.int(val, 32)))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]int32", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))))})
	}

	public async GroupInt64(grouper: ((_p0: number, _p1: bigint) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<bigint>> | null = $.makeMap<string, $.Slice<bigint>>()
		await Value.prototype.EachInt64.call(v, $.functionValue(async (index: number, val: bigint): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<bigint>, $.Slice<bigint>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<bigint>(0, undefined, "number"))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<bigint>, $.Slice<bigint>>(groups, group, null)[0], val))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]int64", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64"))))})
	}

	public async GroupInt8(grouper: ((_p0: number, _p1: number) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()
		await Value.prototype.EachInt8.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<number>(0, undefined, "number"))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)[0], $.int(val, 8)))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int8")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]int8", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8"))))})
	}

	public async GroupInter(grouper: ((_p0: number, _p1: any) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<any>> | null = $.makeMap<string, $.Slice<any>>()
		await Value.prototype.EachInter.call(v, $.functionValue(async (index: number, val: any): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<any>, $.Slice<any>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<any>(0))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<any>, $.Slice<any>>(groups, group, null)[0], val, $.appendZeros.nil))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]interface{}", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })))})
	}

	public async GroupMSI(grouper: ((_p0: number, _p1: globalThis.Map<string, any> | null) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<globalThis.Map<string, any> | null>> | null = $.makeMap<string, $.Slice<globalThis.Map<string, any> | null>>()
		await Value.prototype.EachMSI.call(v, $.functionValue(async (index: number, val: globalThis.Map<string, any> | null): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<globalThis.Map<string, any> | null>, $.Slice<globalThis.Map<string, any> | null>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<globalThis.Map<string, any> | null>(0))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<globalThis.Map<string, any> | null>, $.Slice<globalThis.Map<string, any> | null>>(groups, group, null)[0], val, $.appendZeros.nil))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]map[string]interface{}", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))))})
	}

	public async GroupObjxMap(grouper: ((_p0: number, _p1: __goscript_map.Map) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<__goscript_map.Map>> | null = $.makeMap<string, $.Slice<__goscript_map.Map>>()
		await Value.prototype.EachObjxMap.call(v, $.functionValue(async (index: number, val: __goscript_map.Map): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<__goscript_map.Map>, $.Slice<__goscript_map.Map>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<__goscript_map.Map>(0))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<__goscript_map.Map>, $.Slice<__goscript_map.Map>>(groups, group, null)[0], val, $.appendZeros.nil))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), "objx.Map"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]objx.Map", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("objx.Map")))})
	}

	public async GroupStr(grouper: ((_p0: number, _p1: string) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<string>> | null = $.makeMap<string, $.Slice<string>>()
		await Value.prototype.EachStr.call(v, $.functionValue(async (index: number, val: string): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<string>, $.Slice<string>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<string>(0, undefined, "string"))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<string>, $.Slice<string>>(groups, group, null)[0], val))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]string", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))})
	}

	public async GroupUint(grouper: ((_p0: number, _p1: number) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()
		await Value.prototype.EachUint.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<number>(0, undefined, "number"))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)[0], val))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]uint", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint"))))})
	}

	public async GroupUint16(grouper: ((_p0: number, _p1: number) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()
		await Value.prototype.EachUint16.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<number>(0, undefined, "number"))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)[0], $.uint(val, 16)))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint16")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]uint16", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16"))))})
	}

	public async GroupUint32(grouper: ((_p0: number, _p1: number) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()
		await Value.prototype.EachUint32.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<number>(0, undefined, "number"))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)[0], $.uint(val, 32)))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]uint32", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32"))))})
	}

	public async GroupUint64(grouper: ((_p0: number, _p1: bigint) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<bigint>> | null = $.makeMap<string, $.Slice<bigint>>()
		await Value.prototype.EachUint64.call(v, $.functionValue(async (index: number, val: bigint): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<bigint>, $.Slice<bigint>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<bigint>(0, undefined, "number"))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<bigint>, $.Slice<bigint>>(groups, group, null)[0], val))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]uint64", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64"))))})
	}

	public async GroupUint8(grouper: ((_p0: number, _p1: number) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()
		await Value.prototype.EachUint8.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<number>(0, undefined, "byte"))
				}
			}
			$.mapSet(groups, group, $.append($.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)[0], $.uint(val, 8), $.byteSliceHint))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint8")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]uint8", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))})
	}

	public async GroupUintptr(grouper: ((_p0: number, _p1: number) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let groups: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()
		await Value.prototype.EachUintptr.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let group = (__goscriptAwait = grouper!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [, ok] = $.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)
				if (!ok) {
					$.mapSet(groups, group, $.makeSlice<number>(0, undefined, "number"))
				}
			}
			$.mapSet(groups, group, $.appendOne($.mapGet<string, $.Slice<number>, $.Slice<number>>(groups, group, null)[0], $.uint(val, 64)))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uintptr")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(groups, "map[string][]uintptr", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr"))))})
	}

	public Int(optionalDefault: $.Slice<number>): number {
		const v: Value | $.VarRef<Value> | null = this;
		const v$: Value = v == null ? $.pointerTarget<Value>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Value>(v)
		{
			let [s, ok] = $.typeAssertTuple<number>((v$ as Value).data, /* @__PURE__ */ $.basicType("int"))
			if (ok) {
				return s
			}
		}
		{
			let [s, ok] = $.typeAssertTuple<number>((v$ as Value).data, /* @__PURE__ */ $.basicType("float64"))
			if (ok) {
				if ($.int(s) == s) {
					return $.int(s)
				}
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return 0
	}

	public Int16(optionalDefault: $.Slice<number>): number {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let [s, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("int16"))
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return 0
	}

	public Int16Slice(optionalDefault: $.Slice<$.Slice<number>>): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple5: any = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16")))
			let s: $.Slice<number> = __goscriptTuple5[0]
			let ok = __goscriptTuple5[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public Int32(optionalDefault: $.Slice<number>): number {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let [s, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("int32"))
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return 0
	}

	public Int32Slice(optionalDefault: $.Slice<$.Slice<number>>): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple6: any = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")))
			let s: $.Slice<number> = __goscriptTuple6[0]
			let ok = __goscriptTuple6[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public Int64(optionalDefault: $.Slice<bigint>): bigint {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let [s, ok] = $.typeAssertTuple<bigint>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("int64"))
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return 0n
	}

	public Int64Slice(optionalDefault: $.Slice<$.Slice<bigint>>): $.Slice<bigint> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple7: any = $.typeAssertTuple<$.Slice<bigint>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")))
			let s: $.Slice<bigint> = __goscriptTuple7[0]
			let ok = __goscriptTuple7[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public Int8(optionalDefault: $.Slice<number>): number {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let [s, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("int8"))
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return 0
	}

	public Int8Slice(optionalDefault: $.Slice<$.Slice<number>>): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple8: any = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8")))
			let s: $.Slice<number> = __goscriptTuple8[0]
			let ok = __goscriptTuple8[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public IntSlice(optionalDefault: $.Slice<$.Slice<number>>): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple9: any = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")))
			let s: $.Slice<number> = __goscriptTuple9[0]
			let ok = __goscriptTuple9[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public Inter(optionalDefault: $.Slice<any>): any {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let [s, ok] = $.typeAssertTuple<any>($.pointerValue<Value>(v).data, { kind: $.TypeKind.Interface, methods: [] })
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public InterSlice(optionalDefault: $.Slice<$.Slice<any>>): $.Slice<any> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple10: any = $.typeAssertTuple<$.Slice<any>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))
			let s: $.Slice<any> = __goscriptTuple10[0]
			let ok = __goscriptTuple10[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public IsBool(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<boolean>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("bool"))
		return ok
	}

	public IsBoolSlice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<boolean>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool")))
		return ok
	}

	public IsComplex128(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Complex>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("complex128"))
		return ok
	}

	public IsComplex128Slice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<$.Complex>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128")))
		return ok
	}

	public IsComplex64(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Complex>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("complex64"))
		return ok
	}

	public IsComplex64Slice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<$.Complex>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64")))
		return ok
	}

	public IsFloat32(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("float32"))
		return ok
	}

	public IsFloat32Slice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32")))
		return ok
	}

	public IsFloat64(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("float64"))
		return ok
	}

	public IsFloat64Slice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")))
		return ok
	}

	public IsInt(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("int"))
		return ok
	}

	public IsInt16(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("int16"))
		return ok
	}

	public IsInt16Slice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16")))
		return ok
	}

	public IsInt32(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("int32"))
		return ok
	}

	public IsInt32Slice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")))
		return ok
	}

	public IsInt64(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<bigint>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("int64"))
		return ok
	}

	public IsInt64Slice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<bigint>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")))
		return ok
	}

	public IsInt8(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("int8"))
		return ok
	}

	public IsInt8Slice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8")))
		return ok
	}

	public IsIntSlice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")))
		return ok
	}

	public IsInter(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<any>($.pointerValue<Value>(v).data, { kind: $.TypeKind.Interface, methods: [] })
		return ok
	}

	public IsInterSlice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<any>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))
		return ok
	}

	public IsMSI(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		const v$: Value = v == null ? $.pointerTarget<Value>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Value>(v)
		let [, ok] = $.typeAssertTuple<globalThis.Map<string, any> | null>((v$ as Value).data, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))
		if (!ok) {
			let __goscriptTuple11: any = $.typeAssertTuple<__goscript_map.Map>((v$ as Value).data, "objx.Map")
			ok = __goscriptTuple11[1]
		}
		return ok
	}

	public IsMSISlice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		const v$: Value = v == null ? $.pointerTarget<Value>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Value>(v)
		let [, ok] = $.typeAssertTuple<$.Slice<globalThis.Map<string, any> | null>>((v$ as Value).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })))
		if (!ok) {
			let __goscriptTuple12: any = $.typeAssertTuple<$.Slice<__goscript_map.Map>>((v$ as Value).data, /* @__PURE__ */ $.sliceType("objx.Map"))
			ok = __goscriptTuple12[1]
			if (!ok) {
				let __goscriptTuple13: any = $.typeAssertTuple<$.Slice<any>>((v$ as Value).data, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))
				let s: $.Slice<any> = __goscriptTuple13[0]
				let __goscriptShadow0 = __goscriptTuple13[1]
				if (__goscriptShadow0) {
					for (let __goscriptRangeTarget20 = s, __goscriptRangeWindow20 = $.sliceRange(__goscriptRangeTarget20), i = 0; i < __goscriptRangeWindow20.length; i++) {
						{
							const __goscriptTypeSwitchValue = $.arrayIndex(s!, i)
							switch (true) {
								case $.typeAssert<__goscript_map.Map>(__goscriptTypeSwitchValue, "objx.Map").ok:
									{
									}
									break
								case $.typeAssert<globalThis.Map<string, any> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })).ok:
									{
									}
									break
								default:
									{
										return false
									}
									break
							}
						}
					}
					return true
				}
			}
		}
		return ok
	}

	public IsNil(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		return (v == null) || ($.pointerValue<Value>(v).data == null)
	}

	public IsObjxMap(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		const v$: Value = v == null ? $.pointerTarget<Value>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Value>(v)
		let [, ok] = $.typeAssertTuple<__goscript_map.Map>((v$ as Value).data, "objx.Map")
		if (!ok) {
			let __goscriptTuple14: any = $.typeAssertTuple<globalThis.Map<string, any> | null>((v$ as Value).data, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))
			ok = __goscriptTuple14[1]
		}
		return ok
	}

	public IsObjxMapSlice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		const v$: Value = v == null ? $.pointerTarget<Value>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Value>(v)
		let [, ok] = $.typeAssertTuple<$.Slice<__goscript_map.Map>>((v$ as Value).data, /* @__PURE__ */ $.sliceType("objx.Map"))
		if (!ok) {
			let __goscriptTuple15: any = $.typeAssertTuple<$.Slice<globalThis.Map<string, any> | null>>((v$ as Value).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })))
			ok = __goscriptTuple15[1]
			if (!ok) {
				let __goscriptTuple16: any = $.typeAssertTuple<$.Slice<any>>((v$ as Value).data, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))
				let s: $.Slice<any> = __goscriptTuple16[0]
				let __goscriptShadow1 = __goscriptTuple16[1]
				if (__goscriptShadow1) {
					for (let __goscriptRangeTarget21 = s, __goscriptRangeWindow21 = $.sliceRange(__goscriptRangeTarget21), i = 0; i < __goscriptRangeWindow21.length; i++) {
						{
							const __goscriptTypeSwitchValue = $.arrayIndex(s!, i)
							switch (true) {
								case $.typeAssert<__goscript_map.Map>(__goscriptTypeSwitchValue, "objx.Map").ok:
									{
									}
									break
								case $.typeAssert<globalThis.Map<string, any> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })).ok:
									{
									}
									break
								default:
									{
										return false
									}
									break
							}
						}
					}
					return true
				}
			}
		}

		return ok
	}

	public IsStr(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<string>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("string"))
		return ok
	}

	public IsStrSlice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<string>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))
		return ok
	}

	public IsUint(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uint"))
		return ok
	}

	public IsUint16(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uint16"))
		return ok
	}

	public IsUint16Slice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")))
		return ok
	}

	public IsUint32(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uint32"))
		return ok
	}

	public IsUint32Slice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")))
		return ok
	}

	public IsUint64(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<bigint>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uint64"))
		return ok
	}

	public IsUint64Slice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<bigint>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64")))
		return ok
	}

	public IsUint8(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uint8"))
		return ok
	}

	public IsUint8Slice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
		return ok
	}

	public IsUintSlice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint")))
		return ok
	}

	public IsUintptr(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uintptr"))
		return ok
	}

	public IsUintptrSlice(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr")))
		return ok
	}

	public MSI(optionalDefault: $.Slice<globalThis.Map<string, any> | null>): globalThis.Map<string, any> | null {
		const v: Value | $.VarRef<Value> | null = this;
		const v$: Value = v == null ? $.pointerTarget<Value>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Value>(v)
		{
			let __goscriptTuple17: any = $.typeAssertTuple<globalThis.Map<string, any> | null>((v$ as Value).data, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))
			let s: globalThis.Map<string, any> | null = __goscriptTuple17[0]
			let ok = __goscriptTuple17[1]
			if (ok) {
				return s
			}
		}
		{
			let __goscriptTuple18: any = $.typeAssertTuple<__goscript_map.Map>((v$ as Value).data, "objx.Map")
			let s: __goscript_map.Map = __goscriptTuple18[0]
			let ok = __goscriptTuple18[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public async MSISlice(optionalDefault: $.Slice<$.Slice<globalThis.Map<string, any> | null>>): globalThis.Promise<$.Slice<globalThis.Map<string, any> | null>> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple19: any = $.typeAssertTuple<$.Slice<globalThis.Map<string, any> | null>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })))
			let s: $.Slice<globalThis.Map<string, any> | null> = __goscriptTuple19[0]
			let ok = __goscriptTuple19[1]
			if (ok) {
				return s
			}
		}

		let s: $.Slice<__goscript_map.Map> = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).ObjxMapSlice(null) : Value.prototype.ObjxMapSlice.call(v, null))
		if (s == null) {
			if ($.sliceLen(optionalDefault) == 1) {
				return $.arrayIndex(optionalDefault!, 0)
			}
			return null
		}

		let result: $.Slice<globalThis.Map<string, any> | null> = $.makeSlice<globalThis.Map<string, any> | null>($.sliceLen(s))
		for (let __goscriptRangeTarget22 = s, __goscriptRangeWindow22 = $.sliceRange(__goscriptRangeTarget22), i = 0; i < __goscriptRangeWindow22.length; i++) {
			$.sliceElems(result!)[$.sliceSlot(result!, i)] = Value.prototype.MSI.call(__goscript_map.Map_Value($.arrayIndex(s!, i)), null)
		}
		return result
	}

	public MustBool(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<boolean>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("bool"))
	}

	public MustBoolSlice(): $.Slice<boolean> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<boolean>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool")))
	}

	public MustComplex128(): $.Complex {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Complex>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("complex128"))
	}

	public MustComplex128Slice(): $.Slice<$.Complex> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<$.Complex>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128")))
	}

	public MustComplex64(): $.Complex {
		const v: Value | $.VarRef<Value> | null = this;
		return $.complex64($.mustTypeAssert<$.Complex>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("complex64")))
	}

	public MustComplex64Slice(): $.Slice<$.Complex> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<$.Complex>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64")))
	}

	public MustFloat32(): number {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("float32"))
	}

	public MustFloat32Slice(): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32")))
	}

	public MustFloat64(): number {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("float64"))
	}

	public MustFloat64Slice(): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")))
	}

	public MustInt(): number {
		const v: Value | $.VarRef<Value> | null = this;
		const v$: Value = v == null ? $.pointerTarget<Value>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Value>(v)
		{
			let [s, ok] = $.typeAssertTuple<number>((v$ as Value).data, /* @__PURE__ */ $.basicType("float64"))
			if (ok) {
				if ($.int(s) == s) {
					return $.int(s)
				}
			}
		}
		return $.mustTypeAssert<number>((v$ as Value).data, /* @__PURE__ */ $.basicType("int"))
	}

	public MustInt16(): number {
		const v: Value | $.VarRef<Value> | null = this;
		return $.int($.mustTypeAssert<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("int16")), 16)
	}

	public MustInt16Slice(): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16")))
	}

	public MustInt32(): number {
		const v: Value | $.VarRef<Value> | null = this;
		return $.int($.mustTypeAssert<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("int32")), 32)
	}

	public MustInt32Slice(): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")))
	}

	public MustInt64(): bigint {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<bigint>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("int64"))
	}

	public MustInt64Slice(): $.Slice<bigint> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<bigint>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")))
	}

	public MustInt8(): number {
		const v: Value | $.VarRef<Value> | null = this;
		return $.int($.mustTypeAssert<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("int8")), 8)
	}

	public MustInt8Slice(): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8")))
	}

	public MustIntSlice(): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")))
	}

	public MustInter(): any {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<any>($.pointerValue<Value>(v).data, { kind: $.TypeKind.Interface, methods: [] })
	}

	public MustInterSlice(): $.Slice<any> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<any>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))
	}

	public MustMSI(): globalThis.Map<string, any> | null {
		const v: Value | $.VarRef<Value> | null = this;
		const v$: Value = v == null ? $.pointerTarget<Value>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Value>(v)
		{
			let __goscriptTuple20: any = $.typeAssertTuple<__goscript_map.Map>((v$ as Value).data, "objx.Map")
			let s: __goscript_map.Map = __goscriptTuple20[0]
			let ok = __goscriptTuple20[1]
			if (ok) {
				return s
			}
		}
		return $.mustTypeAssert<globalThis.Map<string, any> | null>((v$ as Value).data, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))
	}

	public async MustMSISlice(): globalThis.Promise<$.Slice<globalThis.Map<string, any> | null>> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let s: $.Slice<globalThis.Map<string, any> | null> = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MSISlice(null) : Value.prototype.MSISlice.call(v, null))
			if (s != null) {
				return s
			}
		}

		return $.mustTypeAssert<$.Slice<globalThis.Map<string, any> | null>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })))
	}

	public MustObjxMap(): __goscript_map.Map {
		const v: Value | $.VarRef<Value> | null = this;
		const v$: Value = v == null ? $.pointerTarget<Value>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Value>(v)
		{
			let __goscriptTuple21: any = $.typeAssertTuple<globalThis.Map<string, any> | null>((v$ as Value).data, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))
			let s: globalThis.Map<string, any> | null = __goscriptTuple21[0]
			let ok = __goscriptTuple21[1]
			if (ok) {
				return s
			}
		}
		return $.mustTypeAssert<__goscript_map.Map>((v$ as Value).data, "objx.Map")
	}

	public async MustObjxMapSlice(): globalThis.Promise<$.Slice<__goscript_map.Map>> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let s: $.Slice<__goscript_map.Map> = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).ObjxMapSlice(null) : Value.prototype.ObjxMapSlice.call(v, null))
			if (s != null) {
				return s
			}
		}
		return $.mustTypeAssert<$.Slice<__goscript_map.Map>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType("objx.Map"))
	}

	public MustStr(): string {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<string>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("string"))
	}

	public MustStrSlice(): $.Slice<string> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<string>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))
	}

	public MustUint(): number {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uint"))
	}

	public MustUint16(): number {
		const v: Value | $.VarRef<Value> | null = this;
		return $.uint($.mustTypeAssert<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uint16")), 16)
	}

	public MustUint16Slice(): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")))
	}

	public MustUint32(): number {
		const v: Value | $.VarRef<Value> | null = this;
		return $.uint($.mustTypeAssert<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uint32")), 32)
	}

	public MustUint32Slice(): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")))
	}

	public MustUint64(): bigint {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<bigint>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uint64"))
	}

	public MustUint64Slice(): $.Slice<bigint> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<bigint>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64")))
	}

	public MustUint8(): number {
		const v: Value | $.VarRef<Value> | null = this;
		return $.uint($.mustTypeAssert<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uint8")), 8)
	}

	public MustUint8Slice(): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
	}

	public MustUintSlice(): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint")))
	}

	public MustUintptr(): number {
		const v: Value | $.VarRef<Value> | null = this;
		return $.uint($.mustTypeAssert<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uintptr")), 64)
	}

	public MustUintptrSlice(): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr")))
	}

	public async ObjxMap(optionalDefault: $.Slice<__goscript_map.Map>): globalThis.Promise<__goscript_map.Map> {
		const v: Value | $.VarRef<Value> | null = this;
		const v$: Value = v == null ? $.pointerTarget<Value>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Value>(v)
		{
			let __goscriptTuple22: any = $.typeAssertTuple<__goscript_map.Map>((v$ as Value).data, "objx.Map")
			let s: __goscript_map.Map = __goscriptTuple22[0]
			let ok = __goscriptTuple22[1]
			if (ok) {
				return s
			}
		}
		{
			let __goscriptTuple23: any = $.typeAssertTuple<globalThis.Map<string, any> | null>((v$ as Value).data, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))
			let s: globalThis.Map<string, any> | null = __goscriptTuple23[0]
			let ok = __goscriptTuple23[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return __goscript_map.New(null)
	}

	public async ObjxMapSlice(optionalDefault: $.Slice<$.Slice<__goscript_map.Map>>): globalThis.Promise<$.Slice<__goscript_map.Map>> {
		const v: Value | $.VarRef<Value> | null = this;
		const v$: Value = v == null ? $.pointerTarget<Value>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Value>(v)
		{
			let __goscriptTuple24: any = $.typeAssertTuple<$.Slice<__goscript_map.Map>>((v$ as Value).data, /* @__PURE__ */ $.sliceType("objx.Map"))
			let s: $.Slice<__goscript_map.Map> = __goscriptTuple24[0]
			let ok = __goscriptTuple24[1]
			if (ok) {
				return s
			}
		}

		{
			let __goscriptTuple25: any = $.typeAssertTuple<$.Slice<globalThis.Map<string, any> | null>>((v$ as Value).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })))
			let s: $.Slice<globalThis.Map<string, any> | null> = __goscriptTuple25[0]
			let ok = __goscriptTuple25[1]
			if (ok) {
				let result: $.Slice<__goscript_map.Map> = $.makeSlice<__goscript_map.Map>($.sliceLen(s))
				for (let __goscriptRangeTarget23 = s, __goscriptRangeWindow23 = $.sliceRange(__goscriptRangeTarget23), i = 0; i < __goscriptRangeWindow23.length; i++) {
					$.sliceElems(result!)[$.sliceSlot(result!, i)] = $.arrayIndex(s!, i)
				}
				return result
			}
		}

		let __goscriptTuple26: any = $.typeAssertTuple<$.Slice<any>>((v$ as Value).data, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))
		let s: $.Slice<any> = __goscriptTuple26[0]
		let ok = __goscriptTuple26[1]
		if (!ok) {
			if ($.sliceLen(optionalDefault) == 1) {
				return $.arrayIndex(optionalDefault!, 0)
			}
			return null
		}

		let result: $.Slice<__goscript_map.Map> = $.makeSlice<__goscript_map.Map>($.sliceLen(s))
		for (let __goscriptRangeTarget24 = s, __goscriptRangeWindow24 = $.sliceRange(__goscriptRangeTarget24), i = 0; i < __goscriptRangeWindow24.length; i++) {
			{
				const __goscriptTypeSwitchValue = $.arrayIndex(s!, i)
				switch (true) {
					case $.typeAssert<__goscript_map.Map>(__goscriptTypeSwitchValue, "objx.Map").ok:
						{
							$.sliceElems(result!)[$.sliceSlot(result!, i)] = $.mustTypeAssert<__goscript_map.Map>($.arrayIndex(s!, i), "objx.Map")
						}
						break
					case $.typeAssert<globalThis.Map<string, any> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })).ok:
						{
							$.sliceElems(result!)[$.sliceSlot(result!, i)] = await __goscript_map.New($.arrayIndex(s!, i))
						}
						break
					default:
						{
							return null
						}
						break
				}
			}
		}
		return result
	}

	public async ReplaceBool(replacer: ((_p0: number, _p1: boolean) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<boolean> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustBoolSlice() : Value.prototype.MustBoolSlice.call(v))
		let replaced: $.Slice<boolean> = $.makeSlice<boolean>($.sliceLen(arr), undefined, "boolean")
		await Value.prototype.EachBool.call(v, $.functionValue(async (index: number, val: boolean): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = (__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]bool", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool")))})
	}

	public async ReplaceComplex128(replacer: ((_p0: number, _p1: $.Complex) => $.Complex | globalThis.Promise<$.Complex>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<$.Complex> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustComplex128Slice() : Value.prototype.MustComplex128Slice.call(v))
		let replaced: $.Slice<$.Complex> = $.makeSlice<$.Complex>($.sliceLen(arr), undefined, "number")
		await Value.prototype.EachComplex128.call(v, $.functionValue(async (index: number, val: $.Complex): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = (__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex128")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]complex128", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128")))})
	}

	public async ReplaceComplex64(replacer: ((_p0: number, _p1: $.Complex) => $.Complex | globalThis.Promise<$.Complex>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<$.Complex> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustComplex64Slice() : Value.prototype.MustComplex64Slice.call(v))
		let replaced: $.Slice<$.Complex> = $.makeSlice<$.Complex>($.sliceLen(arr), undefined, "number")
		await Value.prototype.EachComplex64.call(v, $.functionValue(async (index: number, val: $.Complex): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = $.complex64((__goscriptAwait = replacer!(index, $.complex64(val)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]complex64", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64")))})
	}

	public async ReplaceFloat32(replacer: ((_p0: number, _p1: number) => number | globalThis.Promise<number>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustFloat32Slice() : Value.prototype.MustFloat32Slice.call(v))
		let replaced: $.Slice<number> = $.makeSlice<number>($.sliceLen(arr), undefined, "number")
		await Value.prototype.EachFloat32.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = (__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]float32", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32")))})
	}

	public async ReplaceFloat64(replacer: ((_p0: number, _p1: number) => number | globalThis.Promise<number>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustFloat64Slice() : Value.prototype.MustFloat64Slice.call(v))
		let replaced: $.Slice<number> = $.makeSlice<number>($.sliceLen(arr), undefined, "number")
		await Value.prototype.EachFloat64.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = (__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]float64", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")))})
	}

	public async ReplaceInt(replacer: ((_p0: number, _p1: number) => number | globalThis.Promise<number>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustIntSlice() : Value.prototype.MustIntSlice.call(v))
		let replaced: $.Slice<number> = $.makeSlice<number>($.sliceLen(arr), undefined, "number")
		await Value.prototype.EachInt.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = (__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]int", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")))})
	}

	public async ReplaceInt16(replacer: ((_p0: number, _p1: number) => number | globalThis.Promise<number>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInt16Slice() : Value.prototype.MustInt16Slice.call(v))
		let replaced: $.Slice<number> = $.makeSlice<number>($.sliceLen(arr), undefined, "number")
		await Value.prototype.EachInt16.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = (__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int16")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]int16", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16")))})
	}

	public async ReplaceInt32(replacer: ((_p0: number, _p1: number) => number | globalThis.Promise<number>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInt32Slice() : Value.prototype.MustInt32Slice.call(v))
		let replaced: $.Slice<number> = $.makeSlice<number>($.sliceLen(arr), undefined, "number")
		await Value.prototype.EachInt32.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = (__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]int32", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")))})
	}

	public async ReplaceInt64(replacer: ((_p0: number, _p1: bigint) => bigint | globalThis.Promise<bigint>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<bigint> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInt64Slice() : Value.prototype.MustInt64Slice.call(v))
		let replaced: $.Slice<bigint> = $.makeSlice<bigint>($.sliceLen(arr), undefined, "number")
		await Value.prototype.EachInt64.call(v, $.functionValue(async (index: number, val: bigint): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = (__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]int64", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")))})
	}

	public async ReplaceInt8(replacer: ((_p0: number, _p1: number) => number | globalThis.Promise<number>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInt8Slice() : Value.prototype.MustInt8Slice.call(v))
		let replaced: $.Slice<number> = $.makeSlice<number>($.sliceLen(arr), undefined, "number")
		await Value.prototype.EachInt8.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = (__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int8")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]int8", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8")))})
	}

	public async ReplaceInter(replacer: ((_p0: number, _p1: any) => any | globalThis.Promise<any>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<any> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInterSlice() : Value.prototype.MustInterSlice.call(v))
		let replaced: $.Slice<any> = $.makeSlice<any>($.sliceLen(arr))
		await Value.prototype.EachInter.call(v, $.functionValue(async (index: number, val: any): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = (__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async ReplaceMSI(replacer: ((_p0: number, _p1: globalThis.Map<string, any> | null) => globalThis.Map<string, any> | null | globalThis.Promise<globalThis.Map<string, any> | null>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<globalThis.Map<string, any> | null> = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustMSISlice() : Value.prototype.MustMSISlice.call(v))
		let replaced: $.Slice<globalThis.Map<string, any> | null> = $.makeSlice<globalThis.Map<string, any> | null>($.sliceLen(arr))
		await Value.prototype.EachMSI.call(v, $.functionValue(async (index: number, val: globalThis.Map<string, any> | null): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = ((__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<string, any> | null)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]map[string]interface{}", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })))})
	}

	public async ReplaceObjxMap(replacer: ((_p0: number, _p1: __goscript_map.Map) => __goscript_map.Map | globalThis.Promise<__goscript_map.Map>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<__goscript_map.Map> = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustObjxMapSlice() : Value.prototype.MustObjxMapSlice.call(v))
		let replaced: $.Slice<__goscript_map.Map> = $.makeSlice<__goscript_map.Map>($.sliceLen(arr))
		await Value.prototype.EachObjxMap.call(v, $.functionValue(async (index: number, val: __goscript_map.Map): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = ((__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_map.Map)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), "objx.Map"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]objx.Map", /* @__PURE__ */ $.sliceType("objx.Map"))})
	}

	public async ReplaceStr(replacer: ((_p0: number, _p1: string) => string | globalThis.Promise<string>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<string> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustStrSlice() : Value.prototype.MustStrSlice.call(v))
		let replaced: $.Slice<string> = $.makeSlice<string>($.sliceLen(arr), undefined, "string")
		await Value.prototype.EachStr.call(v, $.functionValue(async (index: number, val: string): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = (__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))})
	}

	public async ReplaceUint(replacer: ((_p0: number, _p1: number) => number | globalThis.Promise<number>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUintSlice() : Value.prototype.MustUintSlice.call(v))
		let replaced: $.Slice<number> = $.makeSlice<number>($.sliceLen(arr), undefined, "number")
		await Value.prototype.EachUint.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = (__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]uint", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint")))})
	}

	public async ReplaceUint16(replacer: ((_p0: number, _p1: number) => number | globalThis.Promise<number>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUint16Slice() : Value.prototype.MustUint16Slice.call(v))
		let replaced: $.Slice<number> = $.makeSlice<number>($.sliceLen(arr), undefined, "number")
		await Value.prototype.EachUint16.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = (__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint16")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]uint16", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")))})
	}

	public async ReplaceUint32(replacer: ((_p0: number, _p1: number) => number | globalThis.Promise<number>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUint32Slice() : Value.prototype.MustUint32Slice.call(v))
		let replaced: $.Slice<number> = $.makeSlice<number>($.sliceLen(arr), undefined, "number")
		await Value.prototype.EachUint32.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = (__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]uint32", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")))})
	}

	public async ReplaceUint64(replacer: ((_p0: number, _p1: bigint) => bigint | globalThis.Promise<bigint>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<bigint> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUint64Slice() : Value.prototype.MustUint64Slice.call(v))
		let replaced: $.Slice<bigint> = $.makeSlice<bigint>($.sliceLen(arr), undefined, "number")
		await Value.prototype.EachUint64.call(v, $.functionValue(async (index: number, val: bigint): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = (__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]uint64", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64")))})
	}

	public async ReplaceUint8(replacer: ((_p0: number, _p1: number) => number | globalThis.Promise<number>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUint8Slice() : Value.prototype.MustUint8Slice.call(v))
		let replaced: $.Slice<number> = $.makeSlice<number>($.sliceLen(arr), undefined, "byte")
		await Value.prototype.EachUint8.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = (__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint8")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]uint8", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))})
	}

	public async ReplaceUintptr(replacer: ((_p0: number, _p1: number) => number | globalThis.Promise<number>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let arr: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUintptrSlice() : Value.prototype.MustUintptrSlice.call(v))
		let replaced: $.Slice<number> = $.makeSlice<number>($.sliceLen(arr), undefined, "number")
		await Value.prototype.EachUintptr.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			$.sliceElems(replaced!)[$.sliceSlot(replaced!, index)] = (__goscriptAwait = replacer!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uintptr")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(replaced, "[]uintptr", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr")))})
	}

	public Str(optionalDefault: $.Slice<string>): string {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let [s, ok] = $.typeAssertTuple<string>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("string"))
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return ""
	}

	public StrSlice(optionalDefault: $.Slice<$.Slice<string>>): $.Slice<string> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple27: any = $.typeAssertTuple<$.Slice<string>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))
			let s: $.Slice<string> = __goscriptTuple27[0]
			let ok = __goscriptTuple27[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public async String(): globalThis.Promise<string> {
		const v: Value | $.VarRef<Value> | null = this;
		switch ((true as boolean)) {
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsNil() : Value.prototype.IsNil.call(v)):
			{
				return ""
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsStr() : Value.prototype.IsStr.call(v)):
			{
				return (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).Str(null) : Value.prototype.Str.call(v, null))
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsBool() : Value.prototype.IsBool.call(v)):
			{
				return strconv.FormatBool((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).Bool(null) : Value.prototype.Bool.call(v, null)))
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsFloat32() : Value.prototype.IsFloat32.call(v)):
			{
				return strconv.FormatFloat((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).Float32(null) : Value.prototype.Float32.call(v, null)), 102, -1, 32)
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsFloat64() : Value.prototype.IsFloat64.call(v)):
			{
				return strconv.FormatFloat((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).Float64(null) : Value.prototype.Float64.call(v, null)), 102, -1, 64)
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsInt() : Value.prototype.IsInt.call(v)):
			{
				return strconv.FormatInt($.int64((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).Int(null) : Value.prototype.Int.call(v, null))), 10)
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsInt8() : Value.prototype.IsInt8.call(v)):
			{
				return strconv.FormatInt($.int64((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).Int8(null) : Value.prototype.Int8.call(v, null))), 10)
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsInt16() : Value.prototype.IsInt16.call(v)):
			{
				return strconv.FormatInt($.int64((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).Int16(null) : Value.prototype.Int16.call(v, null))), 10)
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsInt32() : Value.prototype.IsInt32.call(v)):
			{
				return strconv.FormatInt($.int64((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).Int32(null) : Value.prototype.Int32.call(v, null))), 10)
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsInt64() : Value.prototype.IsInt64.call(v)):
			{
				return strconv.FormatInt((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).Int64(null) : Value.prototype.Int64.call(v, null)), 10)
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsUint() : Value.prototype.IsUint.call(v)):
			{
				return strconv.FormatUint($.uint64((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).Uint(null) : Value.prototype.Uint.call(v, null))), 10)
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsUint8() : Value.prototype.IsUint8.call(v)):
			{
				return strconv.FormatUint($.uint64((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).Uint8(null) : Value.prototype.Uint8.call(v, null))), 10)
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsUint16() : Value.prototype.IsUint16.call(v)):
			{
				return strconv.FormatUint($.uint64((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).Uint16(null) : Value.prototype.Uint16.call(v, null))), 10)
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsUint32() : Value.prototype.IsUint32.call(v)):
			{
				return strconv.FormatUint($.uint64((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).Uint32(null) : Value.prototype.Uint32.call(v, null))), 10)
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsUint64() : Value.prototype.IsUint64.call(v)):
			{
				return strconv.FormatUint((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).Uint64(null) : Value.prototype.Uint64.call(v, null)), 10)
				break
			}
		}
		return fmt.Sprintf("%#v", (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).Data() : Value.prototype.Data.call(v)))
	}

	public StringSlice(optionalDefault: $.Slice<$.Slice<string>>): $.Slice<string> {
		const v: Value | $.VarRef<Value> | null = this;
		switch ((true as boolean)) {
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsStrSlice() : Value.prototype.IsStrSlice.call(v)):
			{
				return (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustStrSlice() : Value.prototype.MustStrSlice.call(v))
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsBoolSlice() : Value.prototype.IsBoolSlice.call(v)):
			{
				let slice: $.Slice<boolean> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustBoolSlice() : Value.prototype.MustBoolSlice.call(v))
				let vals: $.Slice<string> = $.makeSlice<string>($.sliceLen(slice), undefined, "string")
				for (let __goscriptRangeTarget25 = slice, __goscriptRangeWindow25 = $.sliceRange(__goscriptRangeTarget25), __goscriptSliceWindow0 = $.sliceRange(vals), i = 0; i < __goscriptRangeWindow25.length; i++) {
					let iv = (__goscriptRangeWindow25.backing[__goscriptRangeWindow25.offset + i] as boolean);
					;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = strconv.FormatBool(iv)
				}
				return vals
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsFloat32Slice() : Value.prototype.IsFloat32Slice.call(v)):
			{
				let slice: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustFloat32Slice() : Value.prototype.MustFloat32Slice.call(v))
				let vals: $.Slice<string> = $.makeSlice<string>($.sliceLen(slice), undefined, "string")
				for (let __goscriptRangeTarget26 = slice, __goscriptRangeWindow26 = $.sliceRange(__goscriptRangeTarget26), __goscriptSliceWindow1 = $.sliceRange(vals), i = 0; i < __goscriptRangeWindow26.length; i++) {
					let iv = (__goscriptRangeWindow26.backing[__goscriptRangeWindow26.offset + i] as number);
					;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = strconv.FormatFloat(iv, 102, -1, 32)
				}
				return vals
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsFloat64Slice() : Value.prototype.IsFloat64Slice.call(v)):
			{
				let slice: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustFloat64Slice() : Value.prototype.MustFloat64Slice.call(v))
				let vals: $.Slice<string> = $.makeSlice<string>($.sliceLen(slice), undefined, "string")
				for (let __goscriptRangeTarget27 = slice, __goscriptRangeWindow27 = $.sliceRange(__goscriptRangeTarget27), __goscriptSliceWindow2 = $.sliceRange(vals), i = 0; i < __goscriptRangeWindow27.length; i++) {
					let iv = (__goscriptRangeWindow27.backing[__goscriptRangeWindow27.offset + i] as number);
					;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = strconv.FormatFloat(iv, 102, -1, 64)
				}
				return vals
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsIntSlice() : Value.prototype.IsIntSlice.call(v)):
			{
				let slice: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustIntSlice() : Value.prototype.MustIntSlice.call(v))
				let vals: $.Slice<string> = $.makeSlice<string>($.sliceLen(slice), undefined, "string")
				for (let __goscriptRangeTarget28 = slice, __goscriptRangeWindow28 = $.sliceRange(__goscriptRangeTarget28), __goscriptSliceWindow3 = $.sliceRange(vals), i = 0; i < __goscriptRangeWindow28.length; i++) {
					let iv = (__goscriptRangeWindow28.backing[__goscriptRangeWindow28.offset + i] as number);
					;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] = strconv.FormatInt($.int64(iv), 10)
				}
				return vals
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsInt8Slice() : Value.prototype.IsInt8Slice.call(v)):
			{
				let slice: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInt8Slice() : Value.prototype.MustInt8Slice.call(v))
				let vals: $.Slice<string> = $.makeSlice<string>($.sliceLen(slice), undefined, "string")
				for (let __goscriptRangeTarget29 = slice, __goscriptRangeWindow29 = $.sliceRange(__goscriptRangeTarget29), __goscriptSliceWindow4 = $.sliceRange(vals), i = 0; i < __goscriptRangeWindow29.length; i++) {
					let iv = $.int((__goscriptRangeWindow29.backing[__goscriptRangeWindow29.offset + i] as number), 8);
					;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] = strconv.FormatInt($.int64(iv), 10)
				}
				return vals
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsInt16Slice() : Value.prototype.IsInt16Slice.call(v)):
			{
				let slice: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInt16Slice() : Value.prototype.MustInt16Slice.call(v))
				let vals: $.Slice<string> = $.makeSlice<string>($.sliceLen(slice), undefined, "string")
				for (let __goscriptRangeTarget30 = slice, __goscriptRangeWindow30 = $.sliceRange(__goscriptRangeTarget30), __goscriptSliceWindow5 = $.sliceRange(vals), i = 0; i < __goscriptRangeWindow30.length; i++) {
					let iv = $.int((__goscriptRangeWindow30.backing[__goscriptRangeWindow30.offset + i] as number), 16);
					;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] = strconv.FormatInt($.int64(iv), 10)
				}
				return vals
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsInt32Slice() : Value.prototype.IsInt32Slice.call(v)):
			{
				let slice: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInt32Slice() : Value.prototype.MustInt32Slice.call(v))
				let vals: $.Slice<string> = $.makeSlice<string>($.sliceLen(slice), undefined, "string")
				for (let __goscriptRangeTarget31 = slice, __goscriptRangeWindow31 = $.sliceRange(__goscriptRangeTarget31), __goscriptSliceWindow6 = $.sliceRange(vals), i = 0; i < __goscriptRangeWindow31.length; i++) {
					let iv = $.int((__goscriptRangeWindow31.backing[__goscriptRangeWindow31.offset + i] as number), 32);
					;(__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i)] = strconv.FormatInt($.int64(iv), 10)
				}
				return vals
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsInt64Slice() : Value.prototype.IsInt64Slice.call(v)):
			{
				let slice: $.Slice<bigint> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustInt64Slice() : Value.prototype.MustInt64Slice.call(v))
				let vals: $.Slice<string> = $.makeSlice<string>($.sliceLen(slice), undefined, "string")
				for (let __goscriptRangeTarget32 = slice, __goscriptRangeWindow32 = $.sliceRange(__goscriptRangeTarget32), __goscriptSliceWindow7 = $.sliceRange(vals), i = 0; i < __goscriptRangeWindow32.length; i++) {
					let iv = (__goscriptRangeWindow32.backing[__goscriptRangeWindow32.offset + i] as bigint);
					;(__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] = strconv.FormatInt(iv, 10)
				}
				return vals
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsUintSlice() : Value.prototype.IsUintSlice.call(v)):
			{
				let slice: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUintSlice() : Value.prototype.MustUintSlice.call(v))
				let vals: $.Slice<string> = $.makeSlice<string>($.sliceLen(slice), undefined, "string")
				for (let __goscriptRangeTarget33 = slice, __goscriptRangeWindow33 = $.sliceRange(__goscriptRangeTarget33), __goscriptSliceWindow8 = $.sliceRange(vals), i = 0; i < __goscriptRangeWindow33.length; i++) {
					let iv = (__goscriptRangeWindow33.backing[__goscriptRangeWindow33.offset + i] as number);
					;(__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, i)] = strconv.FormatUint($.uint64(iv), 10)
				}
				return vals
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsUint8Slice() : Value.prototype.IsUint8Slice.call(v)):
			{
				let slice: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUint8Slice() : Value.prototype.MustUint8Slice.call(v))
				let vals: $.Slice<string> = $.makeSlice<string>($.sliceLen(slice), undefined, "string")
				for (let __goscriptRangeTarget34 = slice, __goscriptRangeWindow34 = $.sliceRange(__goscriptRangeTarget34), __goscriptSliceWindow9 = $.sliceRange(vals), i = 0; i < __goscriptRangeWindow34.length; i++) {
					let iv = $.uint((__goscriptRangeWindow34.backing[__goscriptRangeWindow34.offset + i] as number), 8);
					;(__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, i)] = strconv.FormatUint($.uint64(iv), 10)
				}
				return vals
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsUint16Slice() : Value.prototype.IsUint16Slice.call(v)):
			{
				let slice: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUint16Slice() : Value.prototype.MustUint16Slice.call(v))
				let vals: $.Slice<string> = $.makeSlice<string>($.sliceLen(slice), undefined, "string")
				for (let __goscriptRangeTarget35 = slice, __goscriptRangeWindow35 = $.sliceRange(__goscriptRangeTarget35), __goscriptSliceWindow10 = $.sliceRange(vals), i = 0; i < __goscriptRangeWindow35.length; i++) {
					let iv = $.uint((__goscriptRangeWindow35.backing[__goscriptRangeWindow35.offset + i] as number), 16);
					;(__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, i)] = strconv.FormatUint($.uint64(iv), 10)
				}
				return vals
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsUint32Slice() : Value.prototype.IsUint32Slice.call(v)):
			{
				let slice: $.Slice<number> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUint32Slice() : Value.prototype.MustUint32Slice.call(v))
				let vals: $.Slice<string> = $.makeSlice<string>($.sliceLen(slice), undefined, "string")
				for (let __goscriptRangeTarget36 = slice, __goscriptRangeWindow36 = $.sliceRange(__goscriptRangeTarget36), __goscriptSliceWindow11 = $.sliceRange(vals), i = 0; i < __goscriptRangeWindow36.length; i++) {
					let iv = $.uint((__goscriptRangeWindow36.backing[__goscriptRangeWindow36.offset + i] as number), 32);
					;(__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, i)] = strconv.FormatUint($.uint64(iv), 10)
				}
				return vals
				break
			}
			case (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).IsUint64Slice() : Value.prototype.IsUint64Slice.call(v)):
			{
				let slice: $.Slice<bigint> = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MustUint64Slice() : Value.prototype.MustUint64Slice.call(v))
				let vals: $.Slice<string> = $.makeSlice<string>($.sliceLen(slice), undefined, "string")
				for (let __goscriptRangeTarget37 = slice, __goscriptRangeWindow37 = $.sliceRange(__goscriptRangeTarget37), __goscriptSliceWindow12 = $.sliceRange(vals), i = 0; i < __goscriptRangeWindow37.length; i++) {
					let iv = (__goscriptRangeWindow37.backing[__goscriptRangeWindow37.offset + i] as bigint);
					;(__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, i)] = strconv.FormatUint(iv, 10)
				}
				return vals
				break
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}

		return $.arrayToSlice<string>([])
	}

	public Uint(optionalDefault: $.Slice<number>): number {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let [s, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uint"))
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return 0
	}

	public Uint16(optionalDefault: $.Slice<number>): number {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let [s, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uint16"))
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return 0
	}

	public Uint16Slice(optionalDefault: $.Slice<$.Slice<number>>): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple28: any = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")))
			let s: $.Slice<number> = __goscriptTuple28[0]
			let ok = __goscriptTuple28[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public Uint32(optionalDefault: $.Slice<number>): number {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let [s, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uint32"))
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return 0
	}

	public Uint32Slice(optionalDefault: $.Slice<$.Slice<number>>): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple29: any = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")))
			let s: $.Slice<number> = __goscriptTuple29[0]
			let ok = __goscriptTuple29[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public Uint64(optionalDefault: $.Slice<bigint>): bigint {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let [s, ok] = $.typeAssertTuple<bigint>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uint64"))
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return 0n
	}

	public Uint64Slice(optionalDefault: $.Slice<$.Slice<bigint>>): $.Slice<bigint> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple30: any = $.typeAssertTuple<$.Slice<bigint>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64")))
			let s: $.Slice<bigint> = __goscriptTuple30[0]
			let ok = __goscriptTuple30[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public Uint8(optionalDefault: $.Slice<number>): number {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let [s, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uint8"))
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return 0
	}

	public Uint8Slice(optionalDefault: $.Slice<$.Slice<number>>): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple31: any = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
			let s: $.Slice<number> = __goscriptTuple31[0]
			let ok = __goscriptTuple31[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public UintSlice(optionalDefault: $.Slice<$.Slice<number>>): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple32: any = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint")))
			let s: $.Slice<number> = __goscriptTuple32[0]
			let ok = __goscriptTuple32[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public Uintptr(optionalDefault: $.Slice<number>): number {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let [s, ok] = $.typeAssertTuple<number>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.basicType("uintptr"))
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return 0
	}

	public UintptrSlice(optionalDefault: $.Slice<$.Slice<number>>): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple33: any = $.typeAssertTuple<$.Slice<number>>($.pointerValue<Value>(v).data, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr")))
			let s: $.Slice<number> = __goscriptTuple33[0]
			let ok = __goscriptTuple33[1]
			if (ok) {
				return s
			}
		}
		if ($.sliceLen(optionalDefault) == 1) {
			return $.arrayIndex(optionalDefault!, 0)
		}
		return null
	}

	public async WhereBool(decider: ((_p0: number, _p1: boolean) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<boolean> = null! as $.Slice<boolean>
		await Value.prototype.EachBool.call(v, $.functionValue(async (index: number, val: boolean): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, val)
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]bool", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool")))})
	}

	public async WhereComplex128(decider: ((_p0: number, _p1: $.Complex) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<$.Complex> = null! as $.Slice<$.Complex>
		await Value.prototype.EachComplex128.call(v, $.functionValue(async (index: number, val: $.Complex): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, val, $.appendZeros.complex)
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex128")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]complex128", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128")))})
	}

	public async WhereComplex64(decider: ((_p0: number, _p1: $.Complex) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<$.Complex> = null! as $.Slice<$.Complex>
		await Value.prototype.EachComplex64.call(v, $.functionValue(async (index: number, val: $.Complex): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, $.complex64(val)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, val, $.appendZeros.complex)
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]complex64", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64")))})
	}

	public async WhereFloat32(decider: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<number> = null! as $.Slice<number>
		await Value.prototype.EachFloat32.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, val)
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]float32", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32")))})
	}

	public async WhereFloat64(decider: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<number> = null! as $.Slice<number>
		await Value.prototype.EachFloat64.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, val)
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]float64", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")))})
	}

	public async WhereInt(decider: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<number> = null! as $.Slice<number>
		await Value.prototype.EachInt.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, val)
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]int", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")))})
	}

	public async WhereInt16(decider: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<number> = null! as $.Slice<number>
		await Value.prototype.EachInt16.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, $.int(val, 16))
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int16")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]int16", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16")))})
	}

	public async WhereInt32(decider: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<number> = null! as $.Slice<number>
		await Value.prototype.EachInt32.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, $.int(val, 32))
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]int32", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")))})
	}

	public async WhereInt64(decider: ((_p0: number, _p1: bigint) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<bigint> = null! as $.Slice<bigint>
		await Value.prototype.EachInt64.call(v, $.functionValue(async (index: number, val: bigint): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, val)
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]int64", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")))})
	}

	public async WhereInt8(decider: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<number> = null! as $.Slice<number>
		await Value.prototype.EachInt8.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, $.int(val, 8))
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int8")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]int8", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8")))})
	}

	public async WhereInter(decider: ((_p0: number, _p1: any) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<any> = null! as $.Slice<any>
		await Value.prototype.EachInter.call(v, $.functionValue(async (index: number, val: any): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, val, $.appendZeros.nil)
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))})
	}

	public async WhereMSI(decider: ((_p0: number, _p1: globalThis.Map<string, any> | null) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<globalThis.Map<string, any> | null> = null! as $.Slice<globalThis.Map<string, any> | null>
		await Value.prototype.EachMSI.call(v, $.functionValue(async (index: number, val: globalThis.Map<string, any> | null): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, val, $.appendZeros.nil)
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]map[string]interface{}", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })))})
	}

	public async WhereObjxMap(decider: ((_p0: number, _p1: __goscript_map.Map) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<__goscript_map.Map> = null! as $.Slice<__goscript_map.Map>
		await Value.prototype.EachObjxMap.call(v, $.functionValue(async (index: number, val: __goscript_map.Map): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, val, $.appendZeros.nil)
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), "objx.Map"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]objx.Map", /* @__PURE__ */ $.sliceType("objx.Map"))})
	}

	public async WhereStr(decider: ((_p0: number, _p1: string) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<string> = null! as $.Slice<string>
		await Value.prototype.EachStr.call(v, $.functionValue(async (index: number, val: string): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, val)
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))})
	}

	public async WhereUint(decider: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<number> = null! as $.Slice<number>
		await Value.prototype.EachUint.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, val)
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]uint", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint")))})
	}

	public async WhereUint16(decider: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<number> = null! as $.Slice<number>
		await Value.prototype.EachUint16.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, $.uint(val, 16))
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint16")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]uint16", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")))})
	}

	public async WhereUint32(decider: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<number> = null! as $.Slice<number>
		await Value.prototype.EachUint32.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, $.uint(val, 32))
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]uint32", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")))})
	}

	public async WhereUint64(decider: ((_p0: number, _p1: bigint) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<bigint> = null! as $.Slice<bigint>
		await Value.prototype.EachUint64.call(v, $.functionValue(async (index: number, val: bigint): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, val)
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]uint64", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64")))})
	}

	public async WhereUint8(decider: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<number> = null! as $.Slice<number>
		await Value.prototype.EachUint8.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.append(selected, $.uint(val, 8), $.byteSliceHint)
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint8")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]uint8", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))})
	}

	public async WhereUintptr(decider: ((_p0: number, _p1: number) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<Value | $.VarRef<Value> | null> {
		const v: Value | $.VarRef<Value> | null = this;
		let selected: $.Slice<number> = null! as $.Slice<number>
		await Value.prototype.EachUintptr.call(v, $.functionValue(async (index: number, val: number): globalThis.Promise<boolean> => {
			let shouldSelect = (__goscriptAwait = decider!(index, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!shouldSelect) {
				selected = $.appendOne(selected, $.uint(val, 64))
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uintptr")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return new Value({data: $.interfaceValue(selected, "[]uintptr", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr")))})
	}

	static __typeInfo = $.registerStructType(
		"objx.Value",
		() => new Value(),
		() => [$.methodSignature("Bool", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool"))]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("BoolSlice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool"))], true), $.methodSignature("CollectBool", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("bool")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectComplex128", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex128")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectComplex64", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex64")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectFloat32", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float32")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectFloat64", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float64")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectInt", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectInt16", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int16")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectInt32", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int32")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectInt64", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int64")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectInt8", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int8")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectInter", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), { kind: $.TypeKind.Interface, methods: [] }], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectMSI", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectObjxMap", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), "objx.Map"], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectStr", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("string")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectUint", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectUint16", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint16")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectUint32", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint32")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectUint64", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint64")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectUint8", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint8")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("CollectUintptr", [["collector", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uintptr")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("Complex128", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128"))]], [/* @__PURE__ */ $.basicType("complex128")], true), $.methodSignature("Complex128Slice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128"))], true), $.methodSignature("Complex64", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64"))]], [/* @__PURE__ */ $.basicType("complex64")], true), $.methodSignature("Complex64Slice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64"))], true), $.methodSignature("Data", [], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("EachBool", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachComplex128", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex128")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachComplex64", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachFloat32", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachFloat64", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachInt", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachInt16", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int16")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachInt32", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachInt64", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachInt8", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int8")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachInter", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachMSI", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachObjxMap", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), "objx.Map"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachStr", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachUint", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachUint16", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint16")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachUint32", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachUint64", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachUint8", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint8")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("EachUintptr", [["callback", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uintptr")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("Float32", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32"))]], [/* @__PURE__ */ $.basicType("float32")], true), $.methodSignature("Float32Slice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32"))], true), $.methodSignature("Float64", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))]], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("Float64Slice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))], true), $.methodSignature("GroupBool", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupComplex128", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex128")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupComplex64", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex64")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupFloat32", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float32")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupFloat64", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float64")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupInt", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupInt16", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int16")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupInt32", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int32")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupInt64", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int64")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupInt8", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int8")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupInter", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupMSI", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupObjxMap", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), "objx.Map"], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupStr", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupUint", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupUint16", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint16")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupUint32", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint32")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupUint64", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint64")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupUint8", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint8")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("GroupUintptr", [["grouper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uintptr")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("Int", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Int16", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16"))]], [/* @__PURE__ */ $.basicType("int16")], true), $.methodSignature("Int16Slice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16"))], true), $.methodSignature("Int32", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))]], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("Int32Slice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))], true), $.methodSignature("Int64", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64"))]], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Int64Slice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64"))], true), $.methodSignature("Int8", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8"))]], [/* @__PURE__ */ $.basicType("int8")], true), $.methodSignature("Int8Slice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8"))], true), $.methodSignature("IntSlice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Inter", [["optionalDefault", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("InterSlice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))]], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], true), $.methodSignature("IsBool", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsBoolSlice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsComplex128", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsComplex128Slice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsComplex64", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsComplex64Slice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsFloat32", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsFloat32Slice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsFloat64", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsFloat64Slice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsInt", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsInt16", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsInt16Slice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsInt32", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsInt32Slice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsInt64", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsInt64Slice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsInt8", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsInt8Slice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsIntSlice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsInter", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsInterSlice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsMSI", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsMSISlice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsNil", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsObjxMap", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsObjxMapSlice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsStr", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsStrSlice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsUint", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsUint16", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsUint16Slice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsUint32", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsUint32Slice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsUint64", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsUint64Slice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsUint8", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsUint8Slice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsUintSlice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsUintptr", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsUintptrSlice", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MSI", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))]], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })], true), $.methodSignature("MSISlice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))], true), $.methodSignature("MustBool", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MustBoolSlice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool"))], true), $.methodSignature("MustComplex128", [], [/* @__PURE__ */ $.basicType("complex128")], true), $.methodSignature("MustComplex128Slice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128"))], true), $.methodSignature("MustComplex64", [], [/* @__PURE__ */ $.basicType("complex64")], true), $.methodSignature("MustComplex64Slice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64"))], true), $.methodSignature("MustFloat32", [], [/* @__PURE__ */ $.basicType("float32")], true), $.methodSignature("MustFloat32Slice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32"))], true), $.methodSignature("MustFloat64", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("MustFloat64Slice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))], true), $.methodSignature("MustInt", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("MustInt16", [], [/* @__PURE__ */ $.basicType("int16")], true), $.methodSignature("MustInt16Slice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16"))], true), $.methodSignature("MustInt32", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("MustInt32Slice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))], true), $.methodSignature("MustInt64", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("MustInt64Slice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64"))], true), $.methodSignature("MustInt8", [], [/* @__PURE__ */ $.basicType("int8")], true), $.methodSignature("MustInt8Slice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8"))], true), $.methodSignature("MustIntSlice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("MustInter", [], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("MustInterSlice", [], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], true), $.methodSignature("MustMSI", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })], true), $.methodSignature("MustMSISlice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))], true), $.methodSignature("MustObjxMap", [], ["objx.Map"], true), $.methodSignature("MustObjxMapSlice", [], [/* @__PURE__ */ $.sliceType("objx.Map")], true), $.methodSignature("MustStr", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("MustStrSlice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("MustUint", [], [/* @__PURE__ */ $.basicType("uint")], true), $.methodSignature("MustUint16", [], [/* @__PURE__ */ $.basicType("uint16")], true), $.methodSignature("MustUint16Slice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16"))], true), $.methodSignature("MustUint32", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("MustUint32Slice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32"))], true), $.methodSignature("MustUint64", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("MustUint64Slice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64"))], true), $.methodSignature("MustUint8", [], [/* @__PURE__ */ $.basicType("uint8")], true), $.methodSignature("MustUint8Slice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("MustUintSlice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint"))], true), $.methodSignature("MustUintptr", [], [/* @__PURE__ */ $.basicType("uintptr")], true), $.methodSignature("MustUintptrSlice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr"))], true), $.methodSignature("ObjxMap", [["optionalDefault", /* @__PURE__ */ $.sliceType("objx.Map")]], ["objx.Map"], true), $.methodSignature("ObjxMapSlice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType("objx.Map"))]], [/* @__PURE__ */ $.sliceType("objx.Map")], true), $.methodSignature("ReplaceBool", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceComplex128", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex128")], results: [/* @__PURE__ */ $.basicType("complex128")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceComplex64", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex64")], results: [/* @__PURE__ */ $.basicType("complex64")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceFloat32", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float32")], results: [/* @__PURE__ */ $.basicType("float32")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceFloat64", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float64")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceInt", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceInt16", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int16")], results: [/* @__PURE__ */ $.basicType("int16")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceInt32", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int32")], results: [/* @__PURE__ */ $.basicType("int32")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceInt64", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int64")], results: [/* @__PURE__ */ $.basicType("int64")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceInt8", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int8")], results: [/* @__PURE__ */ $.basicType("int8")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceInter", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), { kind: $.TypeKind.Interface, methods: [] }], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceMSI", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceObjxMap", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), "objx.Map"], results: ["objx.Map"] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceStr", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceUint", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint")], results: [/* @__PURE__ */ $.basicType("uint")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceUint16", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint16")], results: [/* @__PURE__ */ $.basicType("uint16")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceUint32", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint32")], results: [/* @__PURE__ */ $.basicType("uint32")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceUint64", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint64")], results: [/* @__PURE__ */ $.basicType("uint64")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceUint8", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint8")], results: [/* @__PURE__ */ $.basicType("uint8")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("ReplaceUintptr", [["replacer", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uintptr")], results: [/* @__PURE__ */ $.basicType("uintptr")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("Str", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("StrSlice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("StringSlice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("Uint", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint"))]], [/* @__PURE__ */ $.basicType("uint")], true), $.methodSignature("Uint16", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16"))]], [/* @__PURE__ */ $.basicType("uint16")], true), $.methodSignature("Uint16Slice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16"))], true), $.methodSignature("Uint32", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32"))]], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("Uint32Slice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32"))], true), $.methodSignature("Uint64", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64"))]], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("Uint64Slice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64"))], true), $.methodSignature("Uint8", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("uint8")], true), $.methodSignature("Uint8Slice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("UintSlice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint"))], true), $.methodSignature("Uintptr", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr"))]], [/* @__PURE__ */ $.basicType("uintptr")], true), $.methodSignature("UintptrSlice", [["optionalDefault", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr")))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr"))], true), $.methodSignature("WhereBool", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereComplex128", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex128")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereComplex64", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("complex64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereFloat32", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereFloat64", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("float64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereInt", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereInt16", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int16")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereInt32", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereInt64", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereInt8", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int8")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereInter", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereMSI", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereObjxMap", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), "objx.Map"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereStr", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereUint", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereUint16", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint16")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereUint32", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereUint64", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint64")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereUint8", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint8")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true), $.methodSignature("WhereUintptr", [["decider", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uintptr")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("objx.Value")], true)],
		Value,
		() => [/* @__PURE__ */ $.structField("data", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "github.com/stretchr/objx" })]
	)
}

var __goscriptAwait: any
