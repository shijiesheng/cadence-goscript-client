// Generated file based on value.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as strings from "@goscript/strings/index.js"

import * as __goscript__type from "./type.gs.ts"

import * as __goscript_lazy_list from "./lazy_list.gs.ts"

import * as __goscript_type_string from "./type_string.gs.ts"

import * as __goscript_unsafe from "./unsafe.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/strings/index.js"
import "./type.gs.ts"
import "./lazy_list.gs.ts"
import "./type_string.gs.ts"
import "./unsafe.gs.ts"

$.registerTypePackagePath("go.uber.org/thriftrw/wire", ["wire.Value", "wire.Struct", "wire.Field", "wire.MapItem"])

export class Struct {
	public get Fields(): $.Slice<Field> {
		return this._fields.Fields
	}

	public set Fields(value: $.Slice<Field>) {
		this._fields.Fields = value
	}

	public _fields: {
		Fields: $.Slice<Field>
	}

	constructor(init?: Partial<{Fields?: $.Slice<Field>}>, __goscriptValue?: boolean) {
		this._fields = {
			Fields: init?.Fields ?? (null! as $.Slice<Field>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Struct {
		return new Struct(this, true)
	}

	public __goscriptAssign(source: Struct): void {
		const target = this._fields
		const values = source._fields
		target.Fields = values.Fields
	}

	public async String(): globalThis.Promise<string> {
		const s = this;
		let fields: $.Slice<string> = $.makeSlice<string>($.sliceLen(s.Fields), undefined, "string")
		for (let __goscriptRangeTarget0 = s.Fields, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(fields), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let field = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as Field)).clone();
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = await $.markAsStructValue($.cloneStructValue(field)).String()
		}
		return fmt.Sprintf("{%s}", strings.Join(fields, ", "))
	}

	public fieldMap(): globalThis.Map<number, Value> | null {
		const s = this;
		let m: globalThis.Map<number, Value> | null = $.makeMap<number, Value>()
		for (let __goscriptRangeTarget1 = s.Fields, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let f = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as Field)).clone()
			$.mapSet(m, f.ID, (f.Value).clone())
		}
		return m
	}

	static __typeInfo = $.registerStructType(
		"wire.Struct",
		() => new Struct(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("fieldMap", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int16"), "wire.Value")])],
		Struct,
		() => [/* @__PURE__ */ $.structField("Fields", /* @__PURE__ */ $.sliceType("wire.Field"), [0], 0, true)]
	)
}

export class Value {
	public get typ(): __goscript__type.Type {
		return this._fields.typ
	}

	public set typ(value: __goscript__type.Type) {
		this._fields.typ = value
	}

	public get tnumber(): bigint {
		return this._fields.tnumber
	}

	public set tnumber(value: bigint) {
		this._fields.tnumber = value
	}

	public get tbinary(): $.Slice<number> {
		return this._fields.tbinary
	}

	public set tbinary(value: $.Slice<number>) {
		this._fields.tbinary = value
	}

	public get tstruct(): Struct {
		return this._fields.tstruct
	}

	public set tstruct(value: Struct) {
		this._fields.tstruct = value
	}

	public get tcoll(): any {
		return this._fields.tcoll
	}

	public set tcoll(value: any) {
		this._fields.tcoll = value
	}

	public _fields: {
		typ: __goscript__type.Type
		tnumber: bigint
		tbinary: $.Slice<number>
		tstruct: Struct
		tcoll: any
	}

	constructor(init?: Partial<{typ?: __goscript__type.Type, tnumber?: bigint, tbinary?: $.Slice<number>, tstruct?: Struct, tcoll?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			typ: init?.typ ?? (0 as __goscript__type.Type),
			tnumber: init?.tnumber ?? (0n as bigint),
			tbinary: init?.tbinary ?? (null! as $.Slice<number>),
			tstruct: init?.tstruct ? init.tstruct.clone() : new Struct(undefined, true),
			tcoll: init?.tcoll ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Value {
		return new Value(this, true)
	}

	public __goscriptAssign(source: Value): void {
		const target = this._fields
		const values = source._fields
		target.typ = values.typ
		target.tnumber = values.tnumber
		target.tbinary = values.tbinary
		$.assignStruct(target.tstruct, values.tstruct)
		target.tcoll = $.assignFieldValue(target.tcoll, values.tcoll, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async Get(): globalThis.Promise<any> {
		const v: Value | $.VarRef<Value> | null = this;
		const v$: Value = v == null ? $.pointerTarget<Value>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Value>(v)
		switch ((v$ as Value).typ) {
			case 2:
			{
				return (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).GetBool() : Value.prototype.GetBool.call(v))
				break
			}
			case 3:
			{
				return $.basicInterfaceValue((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).GetI8() : Value.prototype.GetI8.call(v)), "int8")
				break
			}
			case 4:
			{
				return $.basicInterfaceValue((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).GetDouble() : Value.prototype.GetDouble.call(v)), "float64")
				break
			}
			case 6:
			{
				return $.basicInterfaceValue((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).GetI16() : Value.prototype.GetI16.call(v)), "int16")
				break
			}
			case 8:
			{
				return $.basicInterfaceValue((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).GetI32() : Value.prototype.GetI32.call(v)), "int32")
				break
			}
			case 10:
			{
				return $.basicInterfaceValue((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).GetI64() : Value.prototype.GetI64.call(v)), "int64")
				break
			}
			case 11:
			{
				return $.interfaceValue((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).GetBinary() : Value.prototype.GetBinary.call(v)), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
				break
			}
			case 12:
			{
				return $.interfaceValue((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).GetStruct() : Value.prototype.GetStruct.call(v)), "wire.Struct", "wire.Struct")
				break
			}
			case 13:
			{
				return ((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).GetMap() : Value.prototype.GetMap.call(v)) as any)
				break
			}
			case 14:
			case 15:
			{
				return ((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).GetList() : Value.prototype.GetList.call(v)) as any)
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("Unknown value type %v", $.namedValueInterfaceValue<any>((v$ as Value).typ, "wire.Type", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public GetBinary(): $.Slice<number> {
		const v: Value | $.VarRef<Value> | null = this;
		return $.pointerValue<Value>(v).tbinary
	}

	public GetBool(): boolean {
		const v: Value | $.VarRef<Value> | null = this;
		return $.pointerValue<Value>(v).tnumber != 0n
	}

	public GetDouble(): number {
		const v: Value | $.VarRef<Value> | null = this;
		return math.Float64frombits($.pointerValue<Value>(v).tnumber)
	}

	public GetI16(): number {
		const v: Value | $.VarRef<Value> | null = this;
		return $.int($.pointerValue<Value>(v).tnumber, 16)
	}

	public GetI32(): number {
		const v: Value | $.VarRef<Value> | null = this;
		return $.int($.pointerValue<Value>(v).tnumber, 32)
	}

	public GetI64(): bigint {
		const v: Value | $.VarRef<Value> | null = this;
		return $.int64($.pointerValue<Value>(v).tnumber)
	}

	public GetI8(): number {
		const v: Value | $.VarRef<Value> | null = this;
		return $.int($.pointerValue<Value>(v).tnumber, 8)
	}

	public GetList(): __goscript_lazy_list.ValueList | null {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<__goscript_lazy_list.ValueList | null>($.pointerValue<Value>(v).tcoll, "wire.ValueList")
	}

	public GetMap(): __goscript_lazy_list.MapItemList | null {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<__goscript_lazy_list.MapItemList | null>($.pointerValue<Value>(v).tcoll, "wire.MapItemList")
	}

	public GetSet(): __goscript_lazy_list.ValueList | null {
		const v: Value | $.VarRef<Value> | null = this;
		return $.mustTypeAssert<__goscript_lazy_list.ValueList | null>($.pointerValue<Value>(v).tcoll, "wire.ValueList")
	}

	public GetString(): string {
		const v: Value | $.VarRef<Value> | null = this;
		return __goscript_unsafe.unsafeBytesToString($.pointerValue<Value>(v).tbinary)
	}

	public GetStruct(): Struct {
		const v: Value | $.VarRef<Value> | null = this;
		return ($.pointerValue<Value>(v).tstruct).clone()
	}

	public async String(): globalThis.Promise<string> {
		const v = $.varRef(this);
		switch (v.value.typ) {
			case 2:
			{
				return fmt.Sprintf("TBool(%v)", v.value.GetBool())
				break
			}
			case 3:
			{
				return fmt.Sprintf("TI8(%v)", $.basicInterfaceValue(v.value.GetI8(), "int8"))
				break
			}
			case 4:
			{
				return fmt.Sprintf("TDouble(%v)", $.basicInterfaceValue(v.value.GetDouble(), "float64"))
				break
			}
			case 6:
			{
				return fmt.Sprintf("TI16(%v)", $.basicInterfaceValue(v.value.GetI16(), "int16"))
				break
			}
			case 8:
			{
				return fmt.Sprintf("TI32(%v)", $.basicInterfaceValue(v.value.GetI32(), "int32"))
				break
			}
			case 10:
			{
				return fmt.Sprintf("TI64(%v)", $.basicInterfaceValue(v.value.GetI64(), "int64"))
				break
			}
			case 11:
			{
				return fmt.Sprintf("TBinary(%v)", $.interfaceValue(v.value.tbinary, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
				break
			}
			case 12:
			{
				return fmt.Sprintf("TStruct(%v)", $.interfaceValue((v.value.tstruct).clone(), "wire.Struct", "wire.Struct"))
				break
			}
			case 13:
			{
				return fmt.Sprintf("TMap(%v)", v.value.tcoll)
				break
			}
			case 14:
			{
				return fmt.Sprintf("TSet(%v)", v.value.tcoll)
				break
			}
			case 15:
			{
				return fmt.Sprintf("TList(%v)", v.value.tcoll)
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("Unknown value type %v", $.namedValueInterfaceValue<any>(v.value.typ, "wire.Type", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public Type(): __goscript__type.Type {
		const v: Value | $.VarRef<Value> | null = this;
		return $.pointerValue<Value>(v).typ
	}

	static __typeInfo = $.registerStructType(
		"wire.Value",
		() => new Value(),
		() => [$.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("GetBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("GetBool", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetDouble", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("GetI16", [], [/* @__PURE__ */ $.basicType("int16")], true), $.methodSignature("GetI32", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetI64", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetI8", [], [/* @__PURE__ */ $.basicType("int8")], true), $.methodSignature("GetList", [], ["wire.ValueList"], true), $.methodSignature("GetMap", [], ["wire.MapItemList"], true), $.methodSignature("GetSet", [], ["wire.ValueList"], true), $.methodSignature("GetString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetStruct", [], ["wire.Struct"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("uint8", "wire.Type")], true)],
		Value,
		() => [/* @__PURE__ */ $.structField("typ", /* @__PURE__ */ $.basicType("uint8", "wire.Type"), [0], 0, false, { pkgPath: "go.uber.org/thriftrw/wire" }), /* @__PURE__ */ $.structField("tnumber", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "go.uber.org/thriftrw/wire" }), /* @__PURE__ */ $.structField("tbinary", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "go.uber.org/thriftrw/wire" }), /* @__PURE__ */ $.structField("tstruct", "wire.Struct", [3], 40, false, { pkgPath: "go.uber.org/thriftrw/wire" }), /* @__PURE__ */ $.structField("tcoll", { kind: $.TypeKind.Interface, methods: [] }, [4], 64, false, { pkgPath: "go.uber.org/thriftrw/wire" })]
	)
}

export class Field {
	public get ID(): number {
		return this._fields.ID
	}

	public set ID(value: number) {
		this._fields.ID = value
	}

	public get Value(): Value {
		return this._fields.Value
	}

	public set Value(value: Value) {
		this._fields.Value = value
	}

	public _fields: {
		ID: number
		Value: Value
	}

	constructor(init?: Partial<{ID?: number, Value?: Value}>, __goscriptValue?: boolean) {
		this._fields = {
			ID: init?.ID ?? (0 as number),
			Value: init?.Value ? init.Value.clone() : new Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Field {
		return new Field(this, true)
	}

	public __goscriptAssign(source: Field): void {
		const target = this._fields
		const values = source._fields
		target.ID = values.ID
		$.assignStruct(target.Value, values.Value)
	}

	public async String(): globalThis.Promise<string> {
		const f = this;
		return fmt.Sprintf("%v: %v", $.basicInterfaceValue(f.ID, "int16"), $.interfaceValue((f.Value).clone(), "wire.Value", "wire.Value"))
	}

	static __typeInfo = $.registerStructType(
		"wire.Field",
		() => new Field(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		Field,
		() => [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("int16"), [0], 0, true), /* @__PURE__ */ $.structField("Value", "wire.Value", [1], 8, true)]
	)
}

export class MapItem {
	public get Key(): Value {
		return this._fields.Key
	}

	public set Key(value: Value) {
		this._fields.Key = value
	}

	public get Value(): Value {
		return this._fields.Value
	}

	public set Value(value: Value) {
		this._fields.Value = value
	}

	public _fields: {
		Key: Value
		Value: Value
	}

	constructor(init?: Partial<{Key?: Value, Value?: Value}>, __goscriptValue?: boolean) {
		this._fields = {
			Key: init?.Key ? init.Key.clone() : new Value(undefined, true),
			Value: init?.Value ? init.Value.clone() : new Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MapItem {
		return new MapItem(this, true)
	}

	public __goscriptAssign(source: MapItem): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Key, values.Key)
		$.assignStruct(target.Value, values.Value)
	}

	public async String(): globalThis.Promise<string> {
		const mi = this;
		return fmt.Sprintf("%v: %v", $.interfaceValue((mi.Key).clone(), "wire.Value", "wire.Value"), $.interfaceValue((mi.Value).clone(), "wire.Value", "wire.Value"))
	}

	static __typeInfo = $.registerStructType(
		"wire.MapItem",
		() => new MapItem(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		MapItem,
		() => [/* @__PURE__ */ $.structField("Key", "wire.Value", [0], 0, true), /* @__PURE__ */ $.structField("Value", "wire.Value", [1], 80, true)]
	)
}

export let _emptyByteSlice: $.Slice<number> = $.makeSlice<number>(0, undefined, "byte")

export function __goscript_set__emptyByteSlice(__goscriptValue: $.Slice<number>): void {
	_emptyByteSlice = __goscriptValue
}

export function NewValueBool(v: boolean): Value {
	let n = 0n
	if (v) {
		n = 1n
	}
	return new Value({typ: 2, tnumber: n}, true)
}

export function NewValueI8(v: number): Value {
	return new Value({typ: 3, tnumber: $.uint64(v)}, true)
}

export function NewValueDouble(v: number): Value {
	return (() => { const __goscriptLiteralField0 = math.Float64bits(v); return new Value({typ: 4, tnumber: __goscriptLiteralField0}, true) })()
}

export function NewValueI16(v: number): Value {
	return new Value({typ: 6, tnumber: $.uint64(v)}, true)
}

export function NewValueI32(v: number): Value {
	return new Value({typ: 8, tnumber: $.uint64(v)}, true)
}

export function NewValueI64(v: bigint): Value {
	return new Value({typ: 10, tnumber: $.uint64(v)}, true)
}

export function NewValueBinary(v: $.Slice<number>): Value {
	if (v == null) {
		v = _emptyByteSlice
	}
	return new Value({typ: 11, tbinary: v}, true)
}

export function NewValueString(v: string): Value {
	return (() => { const __goscriptLiteralField1 = __goscript_unsafe.unsafeStringToBytes(v); return new Value({typ: 11, tbinary: __goscriptLiteralField1}, true) })()
}

export function NewValueStruct(v: Struct): Value {
	return new Value({typ: 12, tstruct: v}, true)
}

export function NewValueMap(v: __goscript_lazy_list.MapItemList | null): Value {
	return new Value({typ: 13, tcoll: (v as any)}, true)
}

export function NewValueSet(v: __goscript_lazy_list.ValueList | null): Value {
	return new Value({typ: 14, tcoll: (v as any)}, true)
}

export function NewValueList(v: __goscript_lazy_list.ValueList | null): Value {
	return new Value({typ: 15, tcoll: (v as any)}, true)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_type_string.Type_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "wire.Type"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}
