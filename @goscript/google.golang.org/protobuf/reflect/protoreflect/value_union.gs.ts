// Generated file based on value_union.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as __goscript__type from "./type.gs.ts"

import type * as __goscript_methods from "./methods.gs.ts"

import * as __goscript_proto from "./proto.gs.ts"

import * as __goscript_source from "./source.gs.ts"

import * as __goscript_source_gen from "./source_gen.gs.ts"

import * as __goscript_value from "./value.gs.ts"

import * as __goscript_value_equal from "./value_equal.gs.ts"

import * as __goscript_value_pure from "./value_pure.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/reflect/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "./type.gs.ts"
import "./proto.gs.ts"
import "./source.gs.ts"
import "./source_gen.gs.ts"
import "./value.gs.ts"
import "./value_equal.gs.ts"
import "./value_pure.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/reflect/protoreflect", ["protoreflect.Value", "protoreflect.MapKey"])

export class Value {
	public get DoNotCompare(): pragma.DoNotCompare {
		return this._fields.DoNotCompare
	}

	public set DoNotCompare(value: pragma.DoNotCompare) {
		this._fields.DoNotCompare = value
	}

	public get typ(): __goscript_value_pure.valueType {
		return this._fields.typ
	}

	public set typ(value: __goscript_value_pure.valueType) {
		this._fields.typ = value
	}

	public get num(): bigint {
		return this._fields.num
	}

	public set num(value: bigint) {
		this._fields.num = value
	}

	public get str(): string {
		return this._fields.str
	}

	public set str(value: string) {
		this._fields.str = value
	}

	public get bin(): $.Slice<number> {
		return this._fields.bin
	}

	public set bin(value: $.Slice<number>) {
		this._fields.bin = value
	}

	public get iface(): any {
		return this._fields.iface
	}

	public set iface(value: any) {
		this._fields.iface = value
	}

	public _fields: {
		DoNotCompare: pragma.DoNotCompare
		typ: __goscript_value_pure.valueType
		num: bigint
		str: string
		bin: $.Slice<number>
		iface: any
	}

	constructor(init?: Partial<{DoNotCompare?: pragma.DoNotCompare, typ?: __goscript_value_pure.valueType, num?: bigint, str?: string, bin?: $.Slice<number>, iface?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			DoNotCompare: init?.DoNotCompare !== undefined ? $.cloneArrayValue(init.DoNotCompare, "pragma.DoNotCompare") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			typ: init?.typ ?? (0 as __goscript_value_pure.valueType),
			num: init?.num ?? (0n as bigint),
			str: init?.str ?? ("" as string),
			bin: init?.bin ?? (null! as $.Slice<number>),
			iface: init?.iface ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Value {
		return new Value(this, true)
	}

	public __goscriptAssign(source: Value): void {
		const target = this._fields
		const values = source._fields
		target.DoNotCompare = $.assignFieldValue(target.DoNotCompare, values.DoNotCompare, "pragma.DoNotCompare")
		target.typ = values.typ
		target.num = values.num
		target.str = values.str
		target.bin = values.bin
		target.iface = $.assignFieldValue(target.iface, values.iface, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async Bool(): globalThis.Promise<boolean> {
		const v = this;
		switch (v.typ) {
			case 1:
			{
				return v.num > 0n
				break
			}
			default:
			{
				$.panic(await v.panicMessage("bool"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Bytes(): globalThis.Promise<$.Slice<number>> {
		const v = this;
		switch (v.typ) {
			case 9:
			{
				return v.getBytes()
				break
			}
			default:
			{
				$.panic(await v.panicMessage("bytes"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Enum(): globalThis.Promise<__goscript_proto.EnumNumber> {
		const v = this;
		switch (v.typ) {
			case 10:
			{
				return $.int(v.num, 32)
				break
			}
			default:
			{
				$.panic(await v.panicMessage("enum"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Equal(v2: Value): globalThis.Promise<boolean> {
		const v1 = this;
		return __goscript_value_equal.equalValue((v1).clone(), (v2).clone())
	}

	public async Float(): globalThis.Promise<number> {
		const v = this;
		switch (v.typ) {
			case 6:
			case 7:
			{
				return math.Float64frombits($.uint64(v.num))
				break
			}
			default:
			{
				$.panic(await v.panicMessage("float"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Int(): globalThis.Promise<bigint> {
		const v = this;
		switch (v.typ) {
			case 2:
			case 3:
			{
				return $.int64(v.num)
				break
			}
			default:
			{
				$.panic(await v.panicMessage("int"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Interface(): globalThis.Promise<any> {
		const v = this;
		switch (v.typ) {
			case 0:
			{
				return null
				break
			}
			case 1:
			{
				return v.Bool()
				break
			}
			case 2:
			{
				return $.basicInterfaceValue($.int(await v.Int(), 32), "int32")
				break
			}
			case 3:
			{
				return $.basicInterfaceValue($.int64(await v.Int()), "int64")
				break
			}
			case 4:
			{
				return $.basicInterfaceValue($.uint(await v.Uint(), 32), "uint32")
				break
			}
			case 5:
			{
				return $.basicInterfaceValue($.uint64(await v.Uint()), "uint64")
				break
			}
			case 6:
			{
				return $.basicInterfaceValue(globalThis.Math.fround(await v.Float()), "float32")
				break
			}
			case 7:
			{
				return $.basicInterfaceValue(await v.Float(), "float64")
				break
			}
			case 8:
			{
				return v.String()
				break
			}
			case 9:
			{
				return $.interfaceValue(await v.Bytes(), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
				break
			}
			case 10:
			{
				return $.namedValueInterfaceValue<any>(await v.Enum(), "protoreflect.EnumNumber", {}, /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"))
				break
			}
			default:
			{
				return v.getIface()
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public IsValid(): boolean {
		const v = this;
		return v.typ != 0
	}

	public async List(): globalThis.Promise<__goscript_value.List | null> {
		const v = this;
		{
			const __goscriptTypeSwitchValue = v.getIface()
			switch (true) {
				case $.typeAssert<__goscript_value.List | null>(__goscriptTypeSwitchValue, "protoreflect.List").ok:
					{
						let vi: __goscript_value.List | null = $.typeAssert<__goscript_value.List | null>(__goscriptTypeSwitchValue, "protoreflect.List").value
						return vi
					}
					break
				default:
					{
						let vi: any = __goscriptTypeSwitchValue
						$.panic(await v.panicMessage("list"))
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Map(): globalThis.Promise<__goscript_value.Map | null> {
		const v = this;
		{
			const __goscriptTypeSwitchValue = v.getIface()
			switch (true) {
				case $.typeAssert<__goscript_value.Map | null>(__goscriptTypeSwitchValue, "protoreflect.Map").ok:
					{
						let vi: __goscript_value.Map | null = $.typeAssert<__goscript_value.Map | null>(__goscriptTypeSwitchValue, "protoreflect.Map").value
						return vi
					}
					break
				default:
					{
						let vi: any = __goscriptTypeSwitchValue
						$.panic(await v.panicMessage("map"))
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async MapKey(): globalThis.Promise<MapKey> {
		const v = this;
		switch (v.typ) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 8:
			{
				return ((() => { const __goscriptConvert0 = v; return $.markAsStructValue(new MapKey({DoNotCompare: __goscriptConvert0.DoNotCompare, typ: __goscriptConvert0.typ, num: __goscriptConvert0.num, str: __goscriptConvert0.str, bin: __goscriptConvert0.bin, iface: __goscriptConvert0.iface})) })()).clone()
				break
			}
			default:
			{
				$.panic(await v.panicMessage("map key"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Message(): globalThis.Promise<__goscript_value.Message | null> {
		const v = this;
		{
			const __goscriptTypeSwitchValue = v.getIface()
			switch (true) {
				case $.typeAssert<__goscript_value.Message | null>(__goscriptTypeSwitchValue, "protoreflect.Message").ok:
					{
						let vi: __goscript_value.Message | null = $.typeAssert<__goscript_value.Message | null>(__goscriptTypeSwitchValue, "protoreflect.Message").value
						return vi
					}
					break
				default:
					{
						let vi: any = __goscriptTypeSwitchValue
						$.panic(await v.panicMessage("message"))
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async String(): globalThis.Promise<string> {
		const v = this;
		switch (v.typ) {
			case 8:
			{
				return v.getString()
				break
			}
			default:
			{
				return fmt.Sprint(await v.Interface())
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Uint(): globalThis.Promise<bigint> {
		const v = this;
		switch (v.typ) {
			case 4:
			case 5:
			{
				return $.uint64(v.num)
				break
			}
			default:
			{
				$.panic(await v.panicMessage("uint"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public getBytes(): $.Slice<number> {
		const v = this;
		return v.bin
	}

	public getIface(): any {
		const v = this;
		return v.iface
	}

	public getString(): string {
		const v = this;
		return v.str
	}

	public async panicMessage(what: string): globalThis.Promise<string> {
		const v = this;
		return fmt.Sprintf("type mismatch: cannot convert %v to %s", await v.typeName(), what)
	}

	public async typeName(): globalThis.Promise<string> {
		const v = this;
		switch (v.typ) {
			case 0:
			{
				return "nil"
				break
			}
			case 1:
			{
				return "bool"
				break
			}
			case 2:
			{
				return "int32"
				break
			}
			case 3:
			{
				return "int64"
				break
			}
			case 4:
			{
				return "uint32"
				break
			}
			case 5:
			{
				return "uint64"
				break
			}
			case 6:
			{
				return "float32"
				break
			}
			case 7:
			{
				return "float64"
				break
			}
			case 8:
			{
				return "string"
				break
			}
			case 9:
			{
				return "bytes"
				break
			}
			case 10:
			{
				return "enum"
				break
			}
			default:
			{
				{
					const __goscriptTypeSwitchValue = v.getIface()
					switch (true) {
						case $.typeAssert<__goscript_value.Message | null>(__goscriptTypeSwitchValue, "protoreflect.Message").ok:
							{
								let v: __goscript_value.Message | null = $.typeAssert<__goscript_value.Message | null>(__goscriptTypeSwitchValue, "protoreflect.Message").value
								return "message"
							}
							break
						case $.typeAssert<__goscript_value.List | null>(__goscriptTypeSwitchValue, "protoreflect.List").ok:
							{
								let v: __goscript_value.List | null = $.typeAssert<__goscript_value.List | null>(__goscriptTypeSwitchValue, "protoreflect.List").value
								return "list"
							}
							break
						case $.typeAssert<__goscript_value.Map | null>(__goscriptTypeSwitchValue, "protoreflect.Map").ok:
							{
								let v: __goscript_value.Map | null = $.typeAssert<__goscript_value.Map | null>(__goscriptTypeSwitchValue, "protoreflect.Map").value
								return "map"
							}
							break
						default:
							{
								let v: any = __goscriptTypeSwitchValue
								return fmt.Sprintf("<unknown: %T>", v)
							}
							break
					}
				}
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"protoreflect.Value",
		() => new Value(),
		() => [$.methodSignature("Bool", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("Equal", [["v2", "protoreflect.Value"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Float", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Int", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Interface", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("List", [], ["protoreflect.List"]), $.methodSignature("Map", [], ["protoreflect.Map"]), $.methodSignature("MapKey", [], ["protoreflect.MapKey"]), $.methodSignature("Message", [], ["protoreflect.Message"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Uint", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("getBytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("getIface", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("getString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("panicMessage", [["what", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("typeName", [], [/* @__PURE__ */ $.basicType("string")])],
		Value,
		() => [/* @__PURE__ */ $.structField("DoNotCompare", "pragma.DoNotCompare", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("typ", /* @__PURE__ */ $.basicType("int", "protoreflect.valueType"), [1], 0, false, { pkgPath: "google.golang.org/protobuf/reflect/protoreflect" }), /* @__PURE__ */ $.structField("num", /* @__PURE__ */ $.basicType("uint64"), [2], 8, false, { pkgPath: "google.golang.org/protobuf/reflect/protoreflect" }), /* @__PURE__ */ $.structField("str", /* @__PURE__ */ $.basicType("string"), [3], 16, false, { pkgPath: "google.golang.org/protobuf/reflect/protoreflect" }), /* @__PURE__ */ $.structField("bin", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 32, false, { pkgPath: "google.golang.org/protobuf/reflect/protoreflect" }), /* @__PURE__ */ $.structField("iface", { kind: $.TypeKind.Interface, methods: [] }, [5], 56, false, { pkgPath: "google.golang.org/protobuf/reflect/protoreflect" })]
	)
}

export class MapKey {
	public get DoNotCompare(): pragma.DoNotCompare {
		return this._fields.DoNotCompare
	}

	public set DoNotCompare(value: pragma.DoNotCompare) {
		this._fields.DoNotCompare = value
	}

	public get typ(): __goscript_value_pure.valueType {
		return this._fields.typ
	}

	public set typ(value: __goscript_value_pure.valueType) {
		this._fields.typ = value
	}

	public get num(): bigint {
		return this._fields.num
	}

	public set num(value: bigint) {
		this._fields.num = value
	}

	public get str(): string {
		return this._fields.str
	}

	public set str(value: string) {
		this._fields.str = value
	}

	public get bin(): $.Slice<number> {
		return this._fields.bin
	}

	public set bin(value: $.Slice<number>) {
		this._fields.bin = value
	}

	public get iface(): any {
		return this._fields.iface
	}

	public set iface(value: any) {
		this._fields.iface = value
	}

	public _fields: {
		DoNotCompare: pragma.DoNotCompare
		typ: __goscript_value_pure.valueType
		num: bigint
		str: string
		bin: $.Slice<number>
		iface: any
	}

	constructor(init?: Partial<{DoNotCompare?: pragma.DoNotCompare, typ?: __goscript_value_pure.valueType, num?: bigint, str?: string, bin?: $.Slice<number>, iface?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			DoNotCompare: init?.DoNotCompare !== undefined ? $.cloneArrayValue(init.DoNotCompare, "pragma.DoNotCompare") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			typ: init?.typ ?? (0 as __goscript_value_pure.valueType),
			num: init?.num ?? (0n as bigint),
			str: init?.str ?? ("" as string),
			bin: init?.bin ?? (null! as $.Slice<number>),
			iface: init?.iface ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MapKey {
		return new MapKey(this, true)
	}

	public __goscriptAssign(source: MapKey): void {
		const target = this._fields
		const values = source._fields
		target.DoNotCompare = $.assignFieldValue(target.DoNotCompare, values.DoNotCompare, "pragma.DoNotCompare")
		target.typ = values.typ
		target.num = values.num
		target.str = values.str
		target.bin = values.bin
		target.iface = $.assignFieldValue(target.iface, values.iface, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async Bool(): globalThis.Promise<boolean> {
		const k = this;
		return $.markAsStructValue($.cloneStructValue((() => { const __goscriptConvert1 = k; return $.markAsStructValue(new Value({DoNotCompare: __goscriptConvert1.DoNotCompare, typ: __goscriptConvert1.typ, num: __goscriptConvert1.num, str: __goscriptConvert1.str, bin: __goscriptConvert1.bin, iface: __goscriptConvert1.iface})) })())).Bool()
	}

	public async Int(): globalThis.Promise<bigint> {
		const k = this;
		return $.markAsStructValue($.cloneStructValue((() => { const __goscriptConvert2 = k; return $.markAsStructValue(new Value({DoNotCompare: __goscriptConvert2.DoNotCompare, typ: __goscriptConvert2.typ, num: __goscriptConvert2.num, str: __goscriptConvert2.str, bin: __goscriptConvert2.bin, iface: __goscriptConvert2.iface})) })())).Int()
	}

	public async Interface(): globalThis.Promise<any> {
		const k = this;
		return $.markAsStructValue($.cloneStructValue((() => { const __goscriptConvert3 = k; return $.markAsStructValue(new Value({DoNotCompare: __goscriptConvert3.DoNotCompare, typ: __goscriptConvert3.typ, num: __goscriptConvert3.num, str: __goscriptConvert3.str, bin: __goscriptConvert3.bin, iface: __goscriptConvert3.iface})) })())).Interface()
	}

	public IsValid(): boolean {
		const k = this;
		return (() => { const __goscriptConvert4 = k; return $.markAsStructValue(new Value({DoNotCompare: __goscriptConvert4.DoNotCompare, typ: __goscriptConvert4.typ, num: __goscriptConvert4.num, str: __goscriptConvert4.str, bin: __goscriptConvert4.bin, iface: __goscriptConvert4.iface})) })().IsValid()
	}

	public async String(): globalThis.Promise<string> {
		const k = this;
		return $.markAsStructValue($.cloneStructValue((() => { const __goscriptConvert5 = k; return $.markAsStructValue(new Value({DoNotCompare: __goscriptConvert5.DoNotCompare, typ: __goscriptConvert5.typ, num: __goscriptConvert5.num, str: __goscriptConvert5.str, bin: __goscriptConvert5.bin, iface: __goscriptConvert5.iface})) })())).String()
	}

	public async Uint(): globalThis.Promise<bigint> {
		const k = this;
		return $.markAsStructValue($.cloneStructValue((() => { const __goscriptConvert6 = k; return $.markAsStructValue(new Value({DoNotCompare: __goscriptConvert6.DoNotCompare, typ: __goscriptConvert6.typ, num: __goscriptConvert6.num, str: __goscriptConvert6.str, bin: __goscriptConvert6.bin, iface: __goscriptConvert6.iface})) })())).Uint()
	}

	public Value(): Value {
		const k = this;
		return ((() => { const __goscriptConvert7 = k; return $.markAsStructValue(new Value({DoNotCompare: __goscriptConvert7.DoNotCompare, typ: __goscriptConvert7.typ, num: __goscriptConvert7.num, str: __goscriptConvert7.str, bin: __goscriptConvert7.bin, iface: __goscriptConvert7.iface})) })()).clone()
	}

	static __typeInfo = $.registerStructType(
		"protoreflect.MapKey",
		() => new MapKey(),
		() => [$.methodSignature("Bool", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Int", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Interface", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Uint", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("Value", [], ["protoreflect.Value"])],
		MapKey,
		() => [/* @__PURE__ */ $.structField("DoNotCompare", "pragma.DoNotCompare", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("typ", /* @__PURE__ */ $.basicType("int", "protoreflect.valueType"), [1], 0, false, { pkgPath: "google.golang.org/protobuf/reflect/protoreflect" }), /* @__PURE__ */ $.structField("num", /* @__PURE__ */ $.basicType("uint64"), [2], 8, false, { pkgPath: "google.golang.org/protobuf/reflect/protoreflect" }), /* @__PURE__ */ $.structField("str", /* @__PURE__ */ $.basicType("string"), [3], 16, false, { pkgPath: "google.golang.org/protobuf/reflect/protoreflect" }), /* @__PURE__ */ $.structField("bin", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 32, false, { pkgPath: "google.golang.org/protobuf/reflect/protoreflect" }), /* @__PURE__ */ $.structField("iface", { kind: $.TypeKind.Interface, methods: [] }, [5], 56, false, { pkgPath: "google.golang.org/protobuf/reflect/protoreflect" })]
	)
}

export async function ValueOf(v: any): globalThis.Promise<Value> {
	{
		const __goscriptTypeSwitchValue = v
		switch (true) {
			case __goscriptTypeSwitchValue == null:
				{
					let v: any = __goscriptTypeSwitchValue
					return new Value(undefined, true)
				}
				break
			case $.typeAssert<boolean>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("bool")).ok:
				{
					let v: boolean = $.typeAssert<boolean>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("bool")).value
					return ValueOfBool(v)
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int32")).ok:
				{
					let v: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int32")).value
					return ValueOfInt32(v)
				}
				break
			case $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")).ok:
				{
					let v: bigint = $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")).value
					return ValueOfInt64(v)
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint32")).ok:
				{
					let v: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint32")).value
					return ValueOfUint32(v)
				}
				break
			case $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint64")).ok:
				{
					let v: bigint = $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint64")).value
					return ValueOfUint64(v)
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float32")).ok:
				{
					let v: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float32")).value
					return ValueOfFloat32(v)
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).ok:
				{
					let v: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).value
					return ValueOfFloat64(v)
				}
				break
			case $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).ok:
				{
					let v: string = $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).value
					return ValueOfString(v)
				}
				break
			case $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))).ok:
				{
					let v: $.Slice<number> = $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))).value
					return ValueOfBytes(v)
				}
				break
			case $.typeAssert<__goscript_proto.EnumNumber>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")).ok:
				{
					let v: __goscript_proto.EnumNumber = $.typeAssert<__goscript_proto.EnumNumber>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")).value
					return ValueOfEnum(v)
				}
				break
			case $.is(__goscriptTypeSwitchValue, "protoreflect.Message") || $.is(__goscriptTypeSwitchValue, "protoreflect.List") || $.is(__goscriptTypeSwitchValue, "protoreflect.Map"):
				{
					let v = __goscriptTypeSwitchValue
					return __goscript_value_pure.valueOfIface(v)
				}
				break
			case $.typeAssert<__goscript_proto.ProtoMessage | null>(__goscriptTypeSwitchValue, "protoreflect.ProtoMessage").ok:
				{
					let v: __goscript_proto.ProtoMessage | null = $.typeAssert<__goscript_proto.ProtoMessage | null>(__goscriptTypeSwitchValue, "protoreflect.ProtoMessage").value
					$.panic(await fmt.Sprintf("invalid proto.Message(%T) type, expected a protoreflect.Message type", (v as any)))
				}
				break
			default:
				{
					let v: any = __goscriptTypeSwitchValue
					$.panic(await fmt.Sprintf("invalid type: %T", v))
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function ValueOfBool(v: boolean): Value {
	if (v) {
		return new Value({typ: 1, num: 1n}, true)
	} else {
		return new Value({typ: 1, num: 0n}, true)
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function ValueOfInt32(v: number): Value {
	return new Value({typ: 2, num: $.uint64(v)}, true)
}

export function ValueOfInt64(v: bigint): Value {
	return new Value({typ: 3, num: $.uint64(v)}, true)
}

export function ValueOfUint32(v: number): Value {
	return new Value({typ: 4, num: $.uint64(v)}, true)
}

export function ValueOfUint64(v: bigint): Value {
	return new Value({typ: 5, num: v}, true)
}

export function ValueOfFloat32(v: number): Value {
	return (() => { const __goscriptLiteralField0 = $.uint64(math.Float64bits(v)); return new Value({typ: 6, num: __goscriptLiteralField0}, true) })()
}

export function ValueOfFloat64(v: number): Value {
	return (() => { const __goscriptLiteralField1 = $.uint64(math.Float64bits(v)); return new Value({typ: 7, num: __goscriptLiteralField1}, true) })()
}

export function ValueOfString(v: string): Value {
	return __goscript_value_pure.valueOfString(v)
}

export function ValueOfBytes(v: $.Slice<number>): Value {
	return __goscript_value_pure.valueOfBytes($.goSlice(v, undefined, $.sliceLen(v), $.sliceLen(v)))
}

export function ValueOfEnum(v: __goscript_proto.EnumNumber): Value {
	return new Value({typ: 10, num: $.uint64(v)}, true)
}

export function ValueOfMessage(v: __goscript_value.Message | null): Value {
	return __goscript_value_pure.valueOfIface((v as any))
}

export function ValueOfList(v: __goscript_value.List | null): Value {
	return __goscript_value_pure.valueOfIface((v as any))
}

export function ValueOfMap(v: __goscript_value.Map | null): Value {
	return __goscript_value_pure.valueOfIface((v as any))
}
