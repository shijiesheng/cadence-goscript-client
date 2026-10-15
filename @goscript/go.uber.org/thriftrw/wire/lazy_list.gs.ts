// Generated file based on lazy_list.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript__type from "./type.gs.ts"

import * as __goscript_type_string from "./type_string.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "./type.gs.ts"
import "./type_string.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("go.uber.org/thriftrw/wire", ["wire.ValueList", "wire.MapItemList", "wire.sliceValueList", "wire.sliceMapItemList"])

export type ValueList = {
	Close(): void
	ForEach(f: ((_p0: __goscript_value.Value) => $.GoError | globalThis.Promise<$.GoError>) | null): $.GoError | globalThis.Promise<$.GoError>
	Size(): number
	ValueType(): __goscript__type.Type
}

$.registerInterfaceType(
	"wire.ValueList",
	null,
	[$.methodSignature("Close"), $.methodSignature("ForEach", [["f", ({ kind: $.TypeKind.Function, params: ["wire.Value"], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ValueType", [], [/* @__PURE__ */ $.basicType("uint8", "wire.Type")])]
);

export type MapItemList = {
	Close(): void
	ForEach(f: ((_p0: __goscript_value.MapItem) => $.GoError | globalThis.Promise<$.GoError>) | null): $.GoError | globalThis.Promise<$.GoError>
	KeyType(): __goscript__type.Type
	Size(): number
	ValueType(): __goscript__type.Type
}

$.registerInterfaceType(
	"wire.MapItemList",
	null,
	[$.methodSignature("Close"), $.methodSignature("ForEach", [["f", ({ kind: $.TypeKind.Function, params: ["wire.MapItem"], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("KeyType", [], [/* @__PURE__ */ $.basicType("uint8", "wire.Type")]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ValueType", [], [/* @__PURE__ */ $.basicType("uint8", "wire.Type")])]
);

export class sliceValueList {
	public get t(): __goscript__type.Type {
		return this._fields.t
	}

	public set t(value: __goscript__type.Type) {
		this._fields.t = value
	}

	public get values(): $.Slice<__goscript_value.Value> {
		return this._fields.values
	}

	public set values(value: $.Slice<__goscript_value.Value>) {
		this._fields.values = value
	}

	public _fields: {
		t: __goscript__type.Type
		values: $.Slice<__goscript_value.Value>
	}

	constructor(init?: Partial<{t?: __goscript__type.Type, values?: $.Slice<__goscript_value.Value>}>, __goscriptValue?: boolean) {
		this._fields = {
			t: init?.t ?? (0 as __goscript__type.Type),
			values: init?.values ?? (null! as $.Slice<__goscript_value.Value>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sliceValueList {
		return new sliceValueList(this, true)
	}

	public __goscriptAssign(source: sliceValueList): void {
		const target = this._fields
		const values = source._fields
		target.t = values.t
		target.values = values.values
	}

	public Close(): void {
	}

	public async ForEach(f: ((_p0: __goscript_value.Value) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
		const vs = this;
		for (let __goscriptRangeTarget0 = vs.values, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let v = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_value.Value)).clone()
			{
				let err = (__goscriptAwait = f!((v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	public Size(): number {
		const vs = this;
		return $.sliceLen(vs.values)
	}

	public ValueType(): __goscript__type.Type {
		const vs = this;
		return vs.t
	}

	static __typeInfo = $.registerStructType(
		"wire.sliceValueList",
		() => new sliceValueList(),
		() => [$.methodSignature("Close"), $.methodSignature("ForEach", [["f", ({ kind: $.TypeKind.Function, params: ["wire.Value"], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ValueType", [], [/* @__PURE__ */ $.basicType("uint8", "wire.Type")])],
		sliceValueList,
		() => [/* @__PURE__ */ $.structField("t", /* @__PURE__ */ $.basicType("uint8", "wire.Type"), [0], 0, false, { pkgPath: "go.uber.org/thriftrw/wire" }), /* @__PURE__ */ $.structField("values", /* @__PURE__ */ $.sliceType("wire.Value"), [1], 8, false, { pkgPath: "go.uber.org/thriftrw/wire" })]
	)
}

export class sliceMapItemList {
	public get ktype(): __goscript__type.Type {
		return this._fields.ktype
	}

	public set ktype(value: __goscript__type.Type) {
		this._fields.ktype = value
	}

	public get vtype(): __goscript__type.Type {
		return this._fields.vtype
	}

	public set vtype(value: __goscript__type.Type) {
		this._fields.vtype = value
	}

	public get items(): $.Slice<__goscript_value.MapItem> {
		return this._fields.items
	}

	public set items(value: $.Slice<__goscript_value.MapItem>) {
		this._fields.items = value
	}

	public _fields: {
		ktype: __goscript__type.Type
		vtype: __goscript__type.Type
		items: $.Slice<__goscript_value.MapItem>
	}

	constructor(init?: Partial<{ktype?: __goscript__type.Type, vtype?: __goscript__type.Type, items?: $.Slice<__goscript_value.MapItem>}>, __goscriptValue?: boolean) {
		this._fields = {
			ktype: init?.ktype ?? (0 as __goscript__type.Type),
			vtype: init?.vtype ?? (0 as __goscript__type.Type),
			items: init?.items ?? (null! as $.Slice<__goscript_value.MapItem>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sliceMapItemList {
		return new sliceMapItemList(this, true)
	}

	public __goscriptAssign(source: sliceMapItemList): void {
		const target = this._fields
		const values = source._fields
		target.ktype = values.ktype
		target.vtype = values.vtype
		target.items = values.items
	}

	public Close(): void {
	}

	public async ForEach(f: ((_p0: __goscript_value.MapItem) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
		const vs = this;
		for (let __goscriptRangeTarget1 = vs.items, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let v = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_value.MapItem)).clone()
			{
				let err = (__goscriptAwait = f!((v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	public KeyType(): __goscript__type.Type {
		const vs = this;
		return vs.ktype
	}

	public Size(): number {
		const vs = this;
		return $.sliceLen(vs.items)
	}

	public ValueType(): __goscript__type.Type {
		const vs = this;
		return vs.vtype
	}

	static __typeInfo = $.registerStructType(
		"wire.sliceMapItemList",
		() => new sliceMapItemList(),
		() => [$.methodSignature("Close"), $.methodSignature("ForEach", [["f", ({ kind: $.TypeKind.Function, params: ["wire.MapItem"], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("KeyType", [], [/* @__PURE__ */ $.basicType("uint8", "wire.Type")]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ValueType", [], [/* @__PURE__ */ $.basicType("uint8", "wire.Type")])],
		sliceMapItemList,
		() => [/* @__PURE__ */ $.structField("ktype", /* @__PURE__ */ $.basicType("uint8", "wire.Type"), [0], 0, false, { pkgPath: "go.uber.org/thriftrw/wire" }), /* @__PURE__ */ $.structField("vtype", /* @__PURE__ */ $.basicType("uint8", "wire.Type"), [1], 1, false, { pkgPath: "go.uber.org/thriftrw/wire" }), /* @__PURE__ */ $.structField("items", /* @__PURE__ */ $.sliceType("wire.MapItem"), [2], 8, false, { pkgPath: "go.uber.org/thriftrw/wire" })]
	)
}

export function ValueListFromSlice(t: __goscript__type.Type, values: $.Slice<__goscript_value.Value>): ValueList | null {
	return $.interfaceValue<ValueList | null>(new sliceValueList({t: t, values: values}, true), "wire.sliceValueList", "wire.sliceValueList")
}

export function MapItemListFromSlice(k: __goscript__type.Type, v: __goscript__type.Type, items: $.Slice<__goscript_value.MapItem>): MapItemList | null {
	return $.interfaceValue<MapItemList | null>(new sliceMapItemList({ktype: k, vtype: v, items: items}, true), "wire.sliceMapItemList", "wire.sliceMapItemList")
}

export async function ValueListToSlice(l: ValueList | null): globalThis.Promise<$.Slice<__goscript_value.Value>> {
	let items: $.Slice<__goscript_value.Value> = $.makeSlice<__goscript_value.Value>(0, (__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<ValueList, null>) : $.pointerValue<Exclude<ValueList, null>>(l)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined, () => new __goscript_value.Value(undefined, true));
	// explicitly ignoring since we know there will not be an error
	;(__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<ValueList, null>) : $.pointerValue<Exclude<ValueList, null>>(l)).ForEach($.functionValue((v: __goscript_value.Value): $.GoError => {
		items = $.appendOne(items, (v).clone())
		return null
	}, ({ kind: $.TypeKind.Function, params: ["wire.Value"], results: ["error"] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return items
}

export async function MapItemListToSlice(l: MapItemList | null): globalThis.Promise<$.Slice<__goscript_value.MapItem>> {
	let items: $.Slice<__goscript_value.MapItem> = $.makeSlice<__goscript_value.MapItem>(0, (__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<MapItemList, null>) : $.pointerValue<Exclude<MapItemList, null>>(l)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined, () => new __goscript_value.MapItem(undefined, true));
	// explicitly ignoring since we know there will not be an error
	;(__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<MapItemList, null>) : $.pointerValue<Exclude<MapItemList, null>>(l)).ForEach($.functionValue((v: __goscript_value.MapItem): $.GoError => {
		items = $.appendOne(items, (v).clone())
		return null
	}, ({ kind: $.TypeKind.Function, params: ["wire.MapItem"], results: ["error"] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return items
}

var __goscriptAwait: any
