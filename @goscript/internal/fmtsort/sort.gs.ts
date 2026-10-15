// Generated file based on sort.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as cmp from "@goscript/cmp/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as slices from "@goscript/slices/index.js"
import "@goscript/cmp/index.js"
import "@goscript/reflect/index.js"
import "@goscript/slices/index.js"

$.registerTypePackagePath("internal/fmtsort", ["fmtsort.SortedMap", "fmtsort.KeyValue"])

export type SortedMap = $.Slice<KeyValue>

$.registerNamedType("fmtsort.SortedMap", /* @__PURE__ */ $.sliceType("fmtsort.KeyValue"));

export class KeyValue {
	public get Key(): reflect.Value {
		return this._fields.Key
	}

	public set Key(value: reflect.Value) {
		this._fields.Key = value
	}

	public get Value(): reflect.Value {
		return this._fields.Value
	}

	public set Value(value: reflect.Value) {
		this._fields.Value = value
	}

	public _fields: {
		Key: reflect.Value
		Value: reflect.Value
	}

	constructor(init?: Partial<{Key?: reflect.Value, Value?: reflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			Key: init?.Key ? $.markAsStructValue($.cloneStructValue(init.Key)) : $.markAsStructValue(new reflect.Value()),
			Value: init?.Value ? $.markAsStructValue($.cloneStructValue(init.Value)) : $.markAsStructValue(new reflect.Value())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): KeyValue {
		return new KeyValue(this, true)
	}

	public __goscriptAssign(source: KeyValue): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Key, values.Key)
		$.assignStruct(target.Value, values.Value)
	}

	static __typeInfo = $.registerStructType(
		"fmtsort.KeyValue",
		() => new KeyValue(),
		() => [],
		KeyValue,
		() => [/* @__PURE__ */ $.structField("Key", "reflect.Value", [0], 0, true), /* @__PURE__ */ $.structField("Value", "reflect.Value", [1], 24, true)]
	)
}

export async function Sort(mapValue: reflect.Value): globalThis.Promise<SortedMap> {
	if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(mapValue)).Type()).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 21) {
		return (null as SortedMap)
	}
	// Note: this code is arranged to not panic even in the presence
	// of a concurrent map update. The runtime is responsible for
	// yelling loudly if that happens. See issue 33275.
	let n = $.markAsStructValue($.cloneStructValue(mapValue)).Len()
	let sorted: SortedMap = ($.makeSlice<KeyValue>(0, n, undefined, () => new KeyValue(undefined, true)) as SortedMap)
	let iter: reflect.MapIter | $.VarRef<reflect.MapIter> | null = $.markAsStructValue($.cloneStructValue(mapValue)).MapRange()
	while (reflect.MapIter.prototype.Next.call($.pointerValue<reflect.MapIter>(iter))) {
		sorted = ($.appendOne((sorted as SortedMap), (() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(reflect.MapIter.prototype.Key.call($.pointerValue<reflect.MapIter>(iter)))); const __goscriptLiteralField1 = $.markAsStructValue($.cloneStructValue(reflect.MapIter.prototype.Value.call($.pointerValue<reflect.MapIter>(iter)))); return new KeyValue({Key: __goscriptLiteralField0, Value: __goscriptLiteralField1}, true) })()) as SortedMap)
	}
	await slices.SortStableFunc((sorted as SortedMap), $.functionValue(async (a: KeyValue, b: KeyValue): globalThis.Promise<number> => {
		return await compare(a.Key, b.Key)
	}, ({ kind: $.TypeKind.Function, params: ["fmtsort.KeyValue", "fmtsort.KeyValue"], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)))
	return (sorted as SortedMap)
}

export async function compare(aVal: reflect.Value, bVal: reflect.Value): globalThis.Promise<number> {
	let aType = $.markAsStructValue($.cloneStructValue(aVal)).Type()
	let bType = $.markAsStructValue($.cloneStructValue(bVal)).Type()
	if (!$.comparableEqual(aType, bType)) {
		return -1
	}
	switch ($.markAsStructValue($.cloneStructValue(aVal)).Kind()) {
		case reflect.Int:
		case reflect.Int8:
		case reflect.Int16:
		case reflect.Int32:
		case reflect.Int64:
		{
			return cmp.Compare($.markAsStructValue($.cloneStructValue(aVal)).Int(), $.markAsStructValue($.cloneStructValue(bVal)).Int())
			break
		}
		case reflect.Uint:
		case reflect.Uint8:
		case reflect.Uint16:
		case reflect.Uint32:
		case reflect.Uint64:
		case reflect.Uintptr:
		{
			return cmp.Compare($.markAsStructValue($.cloneStructValue(aVal)).Uint(), $.markAsStructValue($.cloneStructValue(bVal)).Uint())
			break
		}
		case reflect.String:
		{
			return cmp.Compare($.markAsStructValue($.cloneStructValue(aVal)).String(), $.markAsStructValue($.cloneStructValue(bVal)).String())
			break
		}
		case reflect.Float32:
		case reflect.Float64:
		{
			return cmp.Compare($.markAsStructValue($.cloneStructValue(aVal)).Float(), $.markAsStructValue($.cloneStructValue(bVal)).Float())
			break
		}
		case reflect.Complex64:
		case reflect.Complex128:
		{
			let a = $.markAsStructValue($.cloneStructValue(aVal)).Complex()
			let b = $.markAsStructValue($.cloneStructValue(bVal)).Complex()
			{
				let c = cmp.Compare($.real(a), $.real(b))
				if (c != 0) {
					return c
				}
			}
			return cmp.Compare($.imag(a), $.imag(b))
			break
		}
		case reflect.Bool:
		{
			let a = $.markAsStructValue($.cloneStructValue(aVal)).Bool()
			let b = $.markAsStructValue($.cloneStructValue(bVal)).Bool()
			switch ((true as boolean)) {
				case a == b:
				{
					return 0
					break
				}
				case a:
				{
					return 1
					break
				}
				default:
				{
					return -1
					break
				}
			}
			break
		}
		case reflect.Pointer:
		case reflect.UnsafePointer:
		{
			return cmp.Compare($.markAsStructValue($.cloneStructValue(aVal)).Pointer(), $.markAsStructValue($.cloneStructValue(bVal)).Pointer())
			break
		}
		case reflect.Chan:
		{
			{
				let [c, ok] = nilCompare(aVal, bVal)
				if (ok) {
					return c
				}
			}
			return cmp.Compare($.markAsStructValue($.cloneStructValue(aVal)).Pointer(), $.markAsStructValue($.cloneStructValue(bVal)).Pointer())
			break
		}
		case reflect.Struct:
		{
			for (let i = 0; i < $.markAsStructValue($.cloneStructValue(aVal)).NumField(); i++) {
				{
					let c = await compare($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(aVal)).Field(i))), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(bVal)).Field(i))))
					if (c != 0) {
						return c
					}
				}
			}
			return 0
			break
		}
		case reflect.Array:
		{
			for (let i = 0; i < $.markAsStructValue($.cloneStructValue(aVal)).Len(); i++) {
				{
					let c = await compare($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(aVal)).Index(i))), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(bVal)).Index(i))))
					if (c != 0) {
						return c
					}
				}
			}
			return 0
			break
		}
		case reflect.Interface:
		{
			{
				let [c, ok] = nilCompare(aVal, bVal)
				if (ok) {
					return c
				}
			}
			let c = await compare($.markAsStructValue($.cloneStructValue(reflect.ValueOf(($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(aVal)).Elem())).Type() as any)))), $.markAsStructValue($.cloneStructValue(reflect.ValueOf(($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(bVal)).Elem())).Type() as any)))))
			if (c != 0) {
				return c
			}
			return compare($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(aVal)).Elem())), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(bVal)).Elem())))
			break
		}
		default:
		{
			$.panic($.concatString("bad type in compare: ", (__goscriptAwait = (aType !== null && (aType as any).__isVarRef !== true && (aType as any).__goValue === undefined ? (aType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(aType)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function nilCompare(aVal: reflect.Value, bVal: reflect.Value): [number, boolean] {
	if ($.markAsStructValue($.cloneStructValue(aVal)).IsNil()) {
		if ($.markAsStructValue($.cloneStructValue(bVal)).IsNil()) {
			return [0, true]
		}
		return [-1, true]
	}
	if ($.markAsStructValue($.cloneStructValue(bVal)).IsNil()) {
		return [1, true]
	}
	return [0, false]
}

var __goscriptAwait: any
