// Generated file based on memory_encoder.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript_encoder from "./encoder.gs.ts"

import * as __goscript_marshaler from "./marshaler.gs.ts"
import "@goscript/time/index.js"
import "./marshaler.gs.ts"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.MapObjectEncoder", "zapcore.sliceArrayEncoder"])

export class MapObjectEncoder {
	// Fields contains the entire encoded log context.
	public get Fields(): globalThis.Map<string, any> | null {
		return this._fields.Fields
	}

	public set Fields(value: globalThis.Map<string, any> | null) {
		this._fields.Fields = value
	}

	// cur is a pointer to the namespace we're currently writing to.
	public get cur(): globalThis.Map<string, any> | null {
		return this._fields.cur
	}

	public set cur(value: globalThis.Map<string, any> | null) {
		this._fields.cur = value
	}

	public _fields: {
		Fields: globalThis.Map<string, any> | null
		cur: globalThis.Map<string, any> | null
	}

	constructor(init?: Partial<{Fields?: globalThis.Map<string, any> | null, cur?: globalThis.Map<string, any> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Fields: init?.Fields ?? (null! as globalThis.Map<string, any> | null),
			cur: init?.cur ?? (null! as globalThis.Map<string, any> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MapObjectEncoder {
		return new MapObjectEncoder(this, true)
	}

	public __goscriptAssign(source: MapObjectEncoder): void {
		const target = this._fields
		const values = source._fields
		target.Fields = values.Fields
		target.cur = values.cur
	}

	public async AddArray(key: string, v: __goscript_marshaler.ArrayMarshaler | null): globalThis.Promise<$.GoError> {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		let arr: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = new sliceArrayEncoder({elems: $.makeSlice<any>(0)})
		let err = (__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<__goscript_marshaler.ArrayMarshaler, null>) : $.pointerValue<Exclude<__goscript_marshaler.ArrayMarshaler, null>>(v)).MarshalLogArray($.interfaceValue<__goscript_encoder.ArrayEncoder | null>(arr, "*zapcore.sliceArrayEncoder", /* @__PURE__ */ $.pointerType("zapcore.sliceArrayEncoder"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, key, $.interfaceValue($.pointerValue<sliceArrayEncoder>(arr).elems, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })))
		return err
	}

	public AddBinary(k: string, v: $.Slice<number>): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.interfaceValue(v, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	}

	public AddBool(k: string, v: boolean): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, v)
	}

	public AddByteString(k: string, v: $.Slice<number>): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.bytesToString(v))
	}

	public AddComplex128(k: string, v: $.Complex): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.basicInterfaceValue(v, "complex128"))
	}

	public AddComplex64(k: string, v: $.Complex): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.basicInterfaceValue(v, "complex64"))
	}

	public AddDuration(k: string, v: time.Duration): void {
		let m: MapObjectEncoder = this;
		$.mapSet(m.cur, k, $.namedValueInterfaceValue<any>(v, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}

	public AddFloat32(k: string, v: number): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.basicInterfaceValue(v, "float32"))
	}

	public AddFloat64(k: string, v: number): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.basicInterfaceValue(v, "float64"))
	}

	public AddInt(k: string, v: number): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.basicInterfaceValue(v, "int"))
	}

	public AddInt16(k: string, v: number): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.basicInterfaceValue(v, "int16"))
	}

	public AddInt32(k: string, v: number): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.basicInterfaceValue(v, "int32"))
	}

	public AddInt64(k: string, v: bigint): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.basicInterfaceValue(v, "int64"))
	}

	public AddInt8(k: string, v: number): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.basicInterfaceValue(v, "int8"))
	}

	public async AddObject(k: string, v: __goscript_marshaler.ObjectMarshaler | null): globalThis.Promise<$.GoError> {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		let newMap: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = NewMapObjectEncoder()
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.interfaceValue($.pointerValue<MapObjectEncoder>(newMap).Fields, "map[string]interface{}", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })))
		return (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<__goscript_marshaler.ObjectMarshaler, null>) : $.pointerValue<Exclude<__goscript_marshaler.ObjectMarshaler, null>>(v)).MarshalLogObject($.interfaceValue<__goscript_encoder.ObjectEncoder | null>(newMap, "*zapcore.MapObjectEncoder", /* @__PURE__ */ $.pointerType("zapcore.MapObjectEncoder")))
	}

	public AddReflected(k: string, v: any): $.GoError {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, v)
		return null
	}

	public AddString(k: string, v: string): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, v)
	}

	public AddTime(k: string, v: time.Time): void {
		let m: MapObjectEncoder = this;
		$.mapSet(m.cur, k, $.interfaceValue($.markAsStructValue($.cloneStructValue(v)), "time.Time", "time.Time"))
	}

	public AddUint(k: string, v: number): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.basicInterfaceValue(v, "uint"))
	}

	public AddUint16(k: string, v: number): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.basicInterfaceValue(v, "uint16"))
	}

	public AddUint32(k: string, v: number): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.basicInterfaceValue(v, "uint32"))
	}

	public AddUint64(k: string, v: bigint): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.basicInterfaceValue(v, "uint64"))
	}

	public AddUint8(k: string, v: number): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.basicInterfaceValue(v, "uint8"))
	}

	public AddUintptr(k: string, v: number): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		$.mapSet($.pointerValue<MapObjectEncoder>(m).cur, k, $.basicInterfaceValue(v, "uintptr"))
	}

	public OpenNamespace(k: string): void {
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = this;
		const m$: MapObjectEncoder = m == null ? $.pointerTarget<MapObjectEncoder>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<MapObjectEncoder>(m)
		let ns: globalThis.Map<string, any> | null = $.makeMap<string, any>()
		$.mapSet((m$ as MapObjectEncoder).cur, k, $.interfaceValue(ns, "map[string]interface{}", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })));
		;(m$ as MapObjectEncoder).cur = ns
	}

	static __typeInfo = $.registerStructType(
		"zapcore.MapObjectEncoder",
		() => new MapObjectEncoder(),
		() => [$.methodSignature("AddArray", [["key", /* @__PURE__ */ $.basicType("string")], ["v", "zapcore.ArrayMarshaler"]], ["error"], true), $.methodSignature("AddBinary", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("AddBool", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("AddByteString", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("AddComplex128", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("complex128")]], [], true), $.methodSignature("AddComplex64", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("complex64")]], [], true), $.methodSignature("AddDuration", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("int64", "time.Duration")]]), $.methodSignature("AddFloat32", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("float32")]], [], true), $.methodSignature("AddFloat64", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("AddInt", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("AddInt16", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("int16")]], [], true), $.methodSignature("AddInt32", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("AddInt64", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("AddInt8", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("int8")]], [], true), $.methodSignature("AddObject", [["k", /* @__PURE__ */ $.basicType("string")], ["v", "zapcore.ObjectMarshaler"]], ["error"], true), $.methodSignature("AddReflected", [["k", /* @__PURE__ */ $.basicType("string")], ["v", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("AddString", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("AddTime", [["k", /* @__PURE__ */ $.basicType("string")], ["v", "time.Time"]]), $.methodSignature("AddUint", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("uint")]], [], true), $.methodSignature("AddUint16", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("uint16")]], [], true), $.methodSignature("AddUint32", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("AddUint64", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("AddUint8", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("uint8")]], [], true), $.methodSignature("AddUintptr", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("uintptr")]], [], true), $.methodSignature("OpenNamespace", [["k", /* @__PURE__ */ $.basicType("string")]], [], true)],
		MapObjectEncoder,
		() => [/* @__PURE__ */ $.structField("Fields", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }), [0], 0, true), /* @__PURE__ */ $.structField("cur", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }), [1], 8, false, { pkgPath: "go.uber.org/zap/zapcore" })]
	)
}

export class sliceArrayEncoder {
	public get elems(): $.Slice<any> {
		return this._fields.elems
	}

	public set elems(value: $.Slice<any>) {
		this._fields.elems = value
	}

	public _fields: {
		elems: $.Slice<any>
	}

	constructor(init?: Partial<{elems?: $.Slice<any>}>, __goscriptValue?: boolean) {
		this._fields = {
			elems: init?.elems ?? (null! as $.Slice<any>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sliceArrayEncoder {
		return new sliceArrayEncoder(this, true)
	}

	public __goscriptAssign(source: sliceArrayEncoder): void {
		const target = this._fields
		const values = source._fields
		target.elems = values.elems
	}

	public async AppendArray(v: __goscript_marshaler.ArrayMarshaler | null): globalThis.Promise<$.GoError> {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s)
		let enc: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = new sliceArrayEncoder()
		let err = (__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<__goscript_marshaler.ArrayMarshaler, null>) : $.pointerValue<Exclude<__goscript_marshaler.ArrayMarshaler, null>>(v)).MarshalLogArray($.interfaceValue<__goscript_encoder.ArrayEncoder | null>(enc, "*zapcore.sliceArrayEncoder", /* @__PURE__ */ $.pointerType("zapcore.sliceArrayEncoder"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.interfaceValue($.pointerValue<sliceArrayEncoder>(enc).elems, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })), $.appendZeros.nil)
		return err
	}

	public AppendBool(v: boolean): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, v, $.appendZeros.nil)
	}

	public AppendByteString(v: $.Slice<number>): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.bytesToString(v), $.appendZeros.nil)
	}

	public AppendComplex128(v: $.Complex): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.basicInterfaceValue(v, "complex128"), $.appendZeros.nil)
	}

	public AppendComplex64(v: $.Complex): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.basicInterfaceValue(v, "complex64"), $.appendZeros.nil)
	}

	public AppendDuration(v: time.Duration): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.namedValueInterfaceValue<any>(v, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.appendZeros.nil)
	}

	public AppendFloat32(v: number): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.basicInterfaceValue(v, "float32"), $.appendZeros.nil)
	}

	public AppendFloat64(v: number): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.basicInterfaceValue(v, "float64"), $.appendZeros.nil)
	}

	public AppendInt(v: number): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.basicInterfaceValue(v, "int"), $.appendZeros.nil)
	}

	public AppendInt16(v: number): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.basicInterfaceValue(v, "int16"), $.appendZeros.nil)
	}

	public AppendInt32(v: number): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.basicInterfaceValue(v, "int32"), $.appendZeros.nil)
	}

	public AppendInt64(v: bigint): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.basicInterfaceValue(v, "int64"), $.appendZeros.nil)
	}

	public AppendInt8(v: number): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.basicInterfaceValue(v, "int8"), $.appendZeros.nil)
	}

	public async AppendObject(v: __goscript_marshaler.ObjectMarshaler | null): globalThis.Promise<$.GoError> {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s)
		let m: MapObjectEncoder | $.VarRef<MapObjectEncoder> | null = NewMapObjectEncoder()
		let err = (__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<__goscript_marshaler.ObjectMarshaler, null>) : $.pointerValue<Exclude<__goscript_marshaler.ObjectMarshaler, null>>(v)).MarshalLogObject($.interfaceValue<__goscript_encoder.ObjectEncoder | null>(m, "*zapcore.MapObjectEncoder", /* @__PURE__ */ $.pointerType("zapcore.MapObjectEncoder"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.interfaceValue($.pointerValue<MapObjectEncoder>(m).Fields, "map[string]interface{}", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })), $.appendZeros.nil)
		return err
	}

	public AppendReflected(v: any): $.GoError {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, v, $.appendZeros.nil)
		return null
	}

	public AppendString(v: string): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, v, $.appendZeros.nil)
	}

	public AppendTime(v: time.Time): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.interfaceValue($.markAsStructValue($.cloneStructValue(v)), "time.Time", "time.Time"), $.appendZeros.nil)
	}

	public AppendUint(v: number): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.basicInterfaceValue(v, "uint"), $.appendZeros.nil)
	}

	public AppendUint16(v: number): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.basicInterfaceValue(v, "uint16"), $.appendZeros.nil)
	}

	public AppendUint32(v: number): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.basicInterfaceValue(v, "uint32"), $.appendZeros.nil)
	}

	public AppendUint64(v: bigint): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.basicInterfaceValue(v, "uint64"), $.appendZeros.nil)
	}

	public AppendUint8(v: number): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.basicInterfaceValue(v, "uint8"), $.appendZeros.nil)
	}

	public AppendUintptr(v: number): void {
		let s: sliceArrayEncoder | $.VarRef<sliceArrayEncoder> | null = this;
		const s$: sliceArrayEncoder = s == null ? $.pointerTarget<sliceArrayEncoder>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceArrayEncoder>(s);
		;(s$ as sliceArrayEncoder).elems = $.appendOne((s$ as sliceArrayEncoder).elems, $.basicInterfaceValue(v, "uintptr"), $.appendZeros.nil)
	}

	static __typeInfo = $.registerStructType(
		"zapcore.sliceArrayEncoder",
		() => new sliceArrayEncoder(),
		() => [$.methodSignature("AppendArray", [["v", "zapcore.ArrayMarshaler"]], ["error"], true), $.methodSignature("AppendBool", [["v", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("AppendByteString", [["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("AppendComplex128", [["v", /* @__PURE__ */ $.basicType("complex128")]], [], true), $.methodSignature("AppendComplex64", [["v", /* @__PURE__ */ $.basicType("complex64")]], [], true), $.methodSignature("AppendDuration", [["v", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("AppendFloat32", [["v", /* @__PURE__ */ $.basicType("float32")]], [], true), $.methodSignature("AppendFloat64", [["v", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("AppendInt", [["v", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("AppendInt16", [["v", /* @__PURE__ */ $.basicType("int16")]], [], true), $.methodSignature("AppendInt32", [["v", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("AppendInt64", [["v", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("AppendInt8", [["v", /* @__PURE__ */ $.basicType("int8")]], [], true), $.methodSignature("AppendObject", [["v", "zapcore.ObjectMarshaler"]], ["error"], true), $.methodSignature("AppendReflected", [["v", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("AppendString", [["v", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("AppendTime", [["v", "time.Time"]], [], true), $.methodSignature("AppendUint", [["v", /* @__PURE__ */ $.basicType("uint")]], [], true), $.methodSignature("AppendUint16", [["v", /* @__PURE__ */ $.basicType("uint16")]], [], true), $.methodSignature("AppendUint32", [["v", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("AppendUint64", [["v", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("AppendUint8", [["v", /* @__PURE__ */ $.basicType("uint8")]], [], true), $.methodSignature("AppendUintptr", [["v", /* @__PURE__ */ $.basicType("uintptr")]], [], true)],
		sliceArrayEncoder,
		() => [/* @__PURE__ */ $.structField("elems", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [0], 0, false, { pkgPath: "go.uber.org/zap/zapcore" })]
	)
}

export function NewMapObjectEncoder(): MapObjectEncoder | $.VarRef<MapObjectEncoder> | null {
	let m: globalThis.Map<string, any> | null = $.makeMap<string, any>()
	return new MapObjectEncoder({Fields: m, cur: m})
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptAwait: any
