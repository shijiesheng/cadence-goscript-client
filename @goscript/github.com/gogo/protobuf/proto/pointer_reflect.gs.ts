// Generated file based on pointer_reflect.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_discard from "./discard.gs.ts"

import * as __goscript_extensions from "./extensions.gs.ts"

import type * as __goscript_extensions_gogo from "./extensions_gogo.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_pointer_reflect_gogo from "./pointer_reflect_gogo.gs.ts"

import * as __goscript_table_marshal from "./table_marshal.gs.ts"

import * as __goscript_table_merge from "./table_merge.gs.ts"

import * as __goscript_table_unmarshal from "./table_unmarshal.gs.ts"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "./discard.gs.ts"
import "./extensions.gs.ts"
import "./lib.gs.ts"
import "./pointer_reflect_gogo.gs.ts"
import "./table_marshal.gs.ts"
import "./table_merge.gs.ts"
import "./table_unmarshal.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.field", "proto.pointer"])

export type field = $.Slice<number>

$.registerNamedType("proto.field", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")));

$.registerNamedValueType(
	"proto.field",
	{IsValid: (receiver: any, ...args: any[]) => (field_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*proto.field",
	{IsValid: (receiver: any, ...args: any[]) => (field_IsValid as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export class pointer {
	public get v(): reflect.Value {
		return this._fields.v
	}

	public set v(value: reflect.Value) {
		this._fields.v = value
	}

	public _fields: {
		v: reflect.Value
	}

	constructor(init?: Partial<{v?: reflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			v: init?.v ? $.markAsStructValue($.cloneStructValue(init.v)) : $.markAsStructValue(new reflect.Value())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pointer {
		return new pointer(this, true)
	}

	public __goscriptAssign(source: pointer): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.v, values.v)
	}

	public async appendInt32Slice(v: number): globalThis.Promise<void> {
		const p = this;
		$.markAsStructValue($.cloneStructValue((await grow($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())))))).SetInt($.int64(v))
	}

	public async appendPointer(q: pointer): globalThis.Promise<void> {
		const p = this;
		$.markAsStructValue($.cloneStructValue((await grow($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())))))).Set($.markAsStructValue($.cloneStructValue(q.v)))
	}

	public appendRef(v: pointer, typ: reflect.Type | null): void {
		const p = this;
		let slice = $.markAsStructValue($.cloneStructValue(p)).getSlice(typ)
		let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v.asPointerTo(typ))).Elem()))
		let newSlice = $.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(slice)), $.markAsStructValue($.cloneStructValue(elem)))))
		$.markAsStructValue($.cloneStructValue(slice)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
	}

	public asPointerTo(t: reflect.Type | null): reflect.Value {
		const p = this;
		// TODO: check that p.v.Type().Elem() == t?
		return $.markAsStructValue($.cloneStructValue(p.v))
	}

	public async getInt32Ptr(): globalThis.Promise<$.VarRef<number> | null> {
		const p = this;
		if ($.comparableEqual((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(p.v)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), reflect.TypeOf($.basicInterfaceValue($.int(0, 32), "int32")))) {
			// raw int32 type
			return $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
		}
		// an enum
		return $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Convert($.pointerValueOrNil(__goscript_lib.int32PtrType)!))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
	}

	public async getInt32Slice(): globalThis.Promise<$.Slice<number>> {
		const p = this;
		if ($.comparableEqual((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(p.v)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), reflect.TypeOf($.basicInterfaceValue($.int(0, 32), "int32")))) {
			// raw int32 type
			return $.mustTypeAssert<$.Slice<number>>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Interface(), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")))
		}
		// an enum
		// Allocate a []int32, then assign []enum's values into it.
		// Note: we can't convert []enum to []int32.
		let slice = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem()))
		let s: $.Slice<number> = $.makeSlice<number>($.markAsStructValue($.cloneStructValue(slice)).Len(), undefined, "number")
		for (let __goscriptSliceWindow0 = $.sliceRange(s), i = 0; i < $.markAsStructValue($.cloneStructValue(slice)).Len(); i++) {
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = $.int($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(slice)).Index(i))).Int(), 32)
		}
		return s
	}

	public getInterfacePointer(): pointer {
		const p = this;
		if ($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).IsNil()) {
			return (() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())); return new pointer({v: __goscriptLiteralField0}, true) })()
		}
		return (() => { const __goscriptLiteralField1 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Elem())).Elem())).Field(0))).Addr())); return new pointer({v: __goscriptLiteralField1}, true) })()
	}

	public getPointer(): pointer {
		const p = this;
		return (() => { const __goscriptLiteralField2 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())); return new pointer({v: __goscriptLiteralField2}, true) })()
	}

	public getPointerSlice(): $.Slice<pointer> {
		const p = this;
		if ($.markAsStructValue($.cloneStructValue(p.v)).IsNil()) {
			return null
		}
		let n = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Len()
		let s: $.Slice<pointer> = $.makeSlice<pointer>(n, undefined, undefined, () => new pointer(undefined, true))
		for (let __goscriptSliceWindow1 = $.sliceRange(s), i = 0; i < n; i++) {
			$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], (() => { const __goscriptLiteralField3 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Index(i))); return new pointer({v: __goscriptLiteralField3}, true) })())
		}
		return s
	}

	public getRef(): pointer {
		const p = this;
		return (() => { const __goscriptLiteralField4 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Addr())); return new pointer({v: __goscriptLiteralField4}, true) })()
	}

	public getSlice(typ: reflect.Type | null): reflect.Value {
		const p = this;
		let sliceTyp = reflect.SliceOf($.pointerValueOrNil(typ)!)
		let slice = p.asPointerTo(sliceTyp)
		slice = $.assignStruct(slice, $.markAsStructValue($.cloneStructValue(slice)).Elem())
		return $.markAsStructValue($.cloneStructValue(slice))
	}

	public isNil(): boolean {
		const p = this;
		return $.markAsStructValue($.cloneStructValue(p.v)).IsNil()
	}

	public offset(f: field): pointer {
		const p = this;
		return (() => { const __goscriptLiteralField5 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).FieldByIndex(f))).Addr())); return new pointer({v: __goscriptLiteralField5}, true) })()
	}

	public async setInt32Ptr(__goscriptParam0: number): globalThis.Promise<void> {
		const p = this;
		let v: $.VarRef<number> = $.varRef(__goscriptParam0)
		// Allocate value in a *int32. Possibly convert that to a *enum.
		// Then assign it to a **int32 or **enum.
		// Note: we can convert *int32 to *enum, but we can't convert
		// **int32 to **enum!
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(v, "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))))).Convert($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(p.v)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
	}

	public async setInt32Slice(v: $.Slice<number>): globalThis.Promise<void> {
		const p = this;
		if ($.comparableEqual((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(p.v)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), reflect.TypeOf($.basicInterfaceValue($.int(0, 32), "int32")))) {
			// raw int32 type
			$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(v, "[]int32", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")))))))
			return
		}
		// an enum
		// Allocate a []enum, then assign []int32's values into it.
		// Note: we can't convert []enum to []int32.
		let slice = $.markAsStructValue($.cloneStructValue(reflect.MakeSlice($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(p.v)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!, $.sliceLen(v), $.cap(v))))
		for (let __goscriptRangeTarget0 = v, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let x = $.int((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as number), 32)
			$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(slice)).Index(i))).SetInt($.int64(x))
		}
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Set($.markAsStructValue($.cloneStructValue(slice)))
	}

	public setPointer(q: pointer): void {
		const p = this;
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Set($.markAsStructValue($.cloneStructValue(q.v)))
	}

	public setPointerSlice(v: $.Slice<pointer>): void {
		const p = this;
		if (v == null) {
			$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Type())!))).Elem())))
			return
		}
		let s = $.markAsStructValue($.cloneStructValue(reflect.MakeSlice($.pointerValueOrNil($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Type())!, 0, $.sliceLen(v))))
		for (let __goscriptRangeTarget1 = v, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let p = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as pointer)).clone()
			s = $.assignStruct(s, reflect.Append($.markAsStructValue($.cloneStructValue(s)), $.markAsStructValue($.cloneStructValue(p.v))))
		}
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Set($.markAsStructValue($.cloneStructValue(s)))
	}

	public toBool(): $.VarRef<boolean> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<boolean> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")))
	}

	public toBoolPtr(): $.VarRef<$.VarRef<boolean> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.VarRef<boolean> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool"))))
	}

	public toBoolSlice(): $.VarRef<$.Slice<boolean>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<boolean>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool"))))
	}

	public toBytes(): $.VarRef<$.Slice<number>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	}

	public toBytesSlice(): $.VarRef<$.Slice<$.Slice<number>>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<$.Slice<number>>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
	}

	public toExtensions(): __goscript_extensions.XXX_InternalExtensions | $.VarRef<__goscript_extensions.XXX_InternalExtensions> | null {
		const p = this;
		return $.mustTypeAssert<__goscript_extensions.XXX_InternalExtensions | $.VarRef<__goscript_extensions.XXX_InternalExtensions> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType("proto.XXX_InternalExtensions"))
	}

	public toFloat32(): $.VarRef<number> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32")))
	}

	public toFloat32Ptr(): $.VarRef<$.VarRef<number> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.VarRef<number> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32"))))
	}

	public toFloat32Slice(): $.VarRef<$.Slice<number>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32"))))
	}

	public toFloat64(): $.VarRef<number> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")))
	}

	public toFloat64Ptr(): $.VarRef<$.VarRef<number> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.VarRef<number> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))))
	}

	public toFloat64Slice(): $.VarRef<$.Slice<number>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))))
	}

	public toInt32(): $.VarRef<number> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Convert($.pointerValueOrNil(int32ptr)!))).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
	}

	public toInt64(): $.VarRef<bigint> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<bigint> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")))
	}

	public toInt64Ptr(): $.VarRef<$.VarRef<bigint> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.VarRef<bigint> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))))
	}

	public toInt64Slice(): $.VarRef<$.Slice<bigint>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<bigint>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64"))))
	}

	public toOldExtensions(): $.VarRef<globalThis.Map<number, __goscript_extensions.Extension> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<globalThis.Map<number, __goscript_extensions.Extension> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension")))
	}

	public toString(): $.VarRef<string> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<string> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))
	}

	public toStringPtr(): $.VarRef<$.VarRef<string> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.VarRef<string> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))))
	}

	public toStringSlice(): $.VarRef<$.Slice<string>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<string>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
	}

	public toUint32(): $.VarRef<number> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")))
	}

	public toUint32Ptr(): $.VarRef<$.VarRef<number> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.VarRef<number> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))))
	}

	public toUint32Slice(): $.VarRef<$.Slice<number>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32"))))
	}

	public toUint64(): $.VarRef<bigint> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<bigint> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")))
	}

	public toUint64Ptr(): $.VarRef<$.VarRef<bigint> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.VarRef<bigint> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))))
	}

	public toUint64Slice(): $.VarRef<$.Slice<bigint>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<bigint>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64"))))
	}

	static __typeInfo = $.registerStructType(
		"proto.pointer",
		() => new pointer(),
		() => [$.methodSignature("appendInt32Slice", [["v", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("appendPointer", [["q", "proto.pointer"]]), $.methodSignature("appendRef", [["v", "proto.pointer"], ["typ", "reflect.Type"]]), $.methodSignature("asPointerTo", [["t", "reflect.Type"]], ["reflect.Value"]), $.methodSignature("getInt32Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32"))]), $.methodSignature("getInt32Slice", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))]), $.methodSignature("getInterfacePointer", [], ["proto.pointer"]), $.methodSignature("getPointer", [], ["proto.pointer"]), $.methodSignature("getPointerSlice", [], [/* @__PURE__ */ $.sliceType("proto.pointer")]), $.methodSignature("getRef", [], ["proto.pointer"]), $.methodSignature("getSlice", [["typ", "reflect.Type"]], ["reflect.Value"]), $.methodSignature("isNil", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("offset", [["f", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field")]], ["proto.pointer"]), $.methodSignature("setInt32Ptr", [["v", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("setInt32Slice", [["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))]]), $.methodSignature("setPointer", [["q", "proto.pointer"]]), $.methodSignature("setPointerSlice", [["v", /* @__PURE__ */ $.sliceType("proto.pointer")]]), $.methodSignature("toBool", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool"))]), $.methodSignature("toBoolPtr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")))]), $.methodSignature("toBoolSlice", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool")))]), $.methodSignature("toBytes", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]), $.methodSignature("toBytesSlice", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))]), $.methodSignature("toExtensions", [], [/* @__PURE__ */ $.pointerType("proto.XXX_InternalExtensions")]), $.methodSignature("toFloat32", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32"))]), $.methodSignature("toFloat32Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32")))]), $.methodSignature("toFloat32Slice", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32")))]), $.methodSignature("toFloat64", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))]), $.methodSignature("toFloat64Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")))]), $.methodSignature("toFloat64Slice", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")))]), $.methodSignature("toInt32", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32"))]), $.methodSignature("toInt64", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))]), $.methodSignature("toInt64Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")))]), $.methodSignature("toInt64Slice", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")))]), $.methodSignature("toOldExtensions", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension"))]), $.methodSignature("toString", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))]), $.methodSignature("toStringPtr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))]), $.methodSignature("toStringSlice", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))]), $.methodSignature("toUint32", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))]), $.methodSignature("toUint32Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")))]), $.methodSignature("toUint32Slice", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")))]), $.methodSignature("toUint64", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))]), $.methodSignature("toUint64Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")))]), $.methodSignature("toUint64Slice", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64")))])],
		pointer,
		() => [/* @__PURE__ */ $.structField("v", "reflect.Value", [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export const unsafeAllowed: boolean = false

export function toField(f: reflect.StructField | $.VarRef<reflect.StructField> | null): field {
	return ($.pointerValue<reflect.StructField>(f).Index as field)
}

export let invalidField: field = ((null as field) as field)

export function __goscript_set_invalidField(__goscriptValue: field): void {
	invalidField = __goscriptValue
}

export let zeroField: field = (($.arrayToSlice<number>([]) as field) as field)

export function __goscript_set_zeroField(__goscriptValue: field): void {
	zeroField = __goscriptValue
}

export function field_IsValid(f: field): boolean {
	return f != null
}

export function toPointer(i: $.VarRef<__goscript_lib.Message | null> | null): pointer {
	return (() => { const __goscriptLiteralField6 = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(($.pointerValue<__goscript_lib.Message | null>(i) as any)))); return new pointer({v: __goscriptLiteralField6}, true) })()
}

export function toAddrPointer(i: $.VarRef<any> | null, isptr: boolean): pointer {
	let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.pointerValue<any>(i))))
	let u = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(v)).Type())!)))
	$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(u)).Elem())).Set($.markAsStructValue($.cloneStructValue(v)))
	return new pointer({v: $.markAsStructValue($.cloneStructValue(u))}, true)
}

export function valToPointer(v: reflect.Value): pointer {
	return new pointer({v: $.markAsStructValue($.cloneStructValue(v))}, true)
}

export async function grow(s: reflect.Value): globalThis.Promise<reflect.Value> {
	let n = $.markAsStructValue($.cloneStructValue(s)).Len()
	let m = $.markAsStructValue($.cloneStructValue(s)).Cap()
	if (n < m) {
		$.markAsStructValue($.cloneStructValue(s)).SetLen(n + 1)
	} else {
		$.markAsStructValue($.cloneStructValue(s)).Set($.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(s)), $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(s)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))))))
	}
	return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Index(n)))
}

export let int32ptr: reflect.Type | null = reflect.TypeOf($.interfaceValue(null, "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32"))))

export function __goscript_set_int32ptr(__goscriptValue: reflect.Type | null): void {
	int32ptr = __goscriptValue
}

export async function atomicLoadUnmarshalInfo(p: $.VarRef<__goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null> | null): globalThis.Promise<__goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null> {
	using __defer = new $.DisposableStack()
	await atomicLock.value.Lock()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())(atomicLock.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })
	return $.pointerValue<__goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null>(p)
}

export async function atomicStoreUnmarshalInfo(p: $.VarRef<__goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null> | null, v: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	await atomicLock.value.Lock()
	const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())(atomicLock.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee1() })
	p!.value = v
}

export async function atomicLoadMarshalInfo(p: $.VarRef<__goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null> | null): globalThis.Promise<__goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null> {
	using __defer = new $.DisposableStack()
	await atomicLock.value.Lock()
	const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())(atomicLock.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee2() })
	return $.pointerValue<__goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null>(p)
}

export async function atomicStoreMarshalInfo(p: $.VarRef<__goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null> | null, v: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	await atomicLock.value.Lock()
	const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())(atomicLock.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee3() })
	p!.value = v
}

export async function atomicLoadMergeInfo(p: $.VarRef<__goscript_table_merge.mergeInfo | $.VarRef<__goscript_table_merge.mergeInfo> | null> | null): globalThis.Promise<__goscript_table_merge.mergeInfo | $.VarRef<__goscript_table_merge.mergeInfo> | null> {
	using __defer = new $.DisposableStack()
	await atomicLock.value.Lock()
	const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())(atomicLock.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee4() })
	return $.pointerValue<__goscript_table_merge.mergeInfo | $.VarRef<__goscript_table_merge.mergeInfo> | null>(p)
}

export async function atomicStoreMergeInfo(p: $.VarRef<__goscript_table_merge.mergeInfo | $.VarRef<__goscript_table_merge.mergeInfo> | null> | null, v: __goscript_table_merge.mergeInfo | $.VarRef<__goscript_table_merge.mergeInfo> | null): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	await atomicLock.value.Lock()
	const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())(atomicLock.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee5() })
	p!.value = v
}

export async function atomicLoadDiscardInfo(p: $.VarRef<__goscript_discard.discardInfo | $.VarRef<__goscript_discard.discardInfo> | null> | null): globalThis.Promise<__goscript_discard.discardInfo | $.VarRef<__goscript_discard.discardInfo> | null> {
	using __defer = new $.DisposableStack()
	await atomicLock.value.Lock()
	const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.Unlock())(atomicLock.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee6() })
	return $.pointerValue<__goscript_discard.discardInfo | $.VarRef<__goscript_discard.discardInfo> | null>(p)
}

export async function atomicStoreDiscardInfo(p: $.VarRef<__goscript_discard.discardInfo | $.VarRef<__goscript_discard.discardInfo> | null> | null, v: __goscript_discard.discardInfo | $.VarRef<__goscript_discard.discardInfo> | null): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	await atomicLock.value.Lock()
	const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.Unlock())(atomicLock.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee7() })
	p!.value = v
}

export let atomicLock: $.VarRef<sync.Mutex> = $.varRef($.markAsStructValue(new sync.Mutex()))

export function __goscript_set_atomicLock(__goscriptValue: sync.Mutex): void {
	$.assignStruct(atomicLock.value, __goscriptValue)
}

var __goscriptAwait: any
