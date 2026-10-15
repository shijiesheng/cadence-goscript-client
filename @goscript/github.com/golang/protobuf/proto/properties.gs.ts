// Generated file based on properties.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoimpl from "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"

import * as impl from "@goscript/google.golang.org/protobuf/internal/impl/index.js"

import * as __goscript_buffer from "./buffer.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"
import "@goscript/google.golang.org/protobuf/internal/impl/index.js"
import "./buffer.gs.ts"

$.registerTypePackagePath("github.com/golang/protobuf/proto", ["proto.StructProperties", "proto.Properties", "proto.OneofProperties"])

export class StructProperties {
	// Prop are the properties for each field.
	//
	// Fields belonging to a oneof are stored in OneofTypes instead, with a
	// single Properties representing the parent oneof held here.
	//
	// The order of Prop matches the order of fields in the Go struct.
	// Struct fields that are not related to protobufs have a "XXX_" prefix
	// in the Properties.Name and must be ignored by the user.
	public get Prop(): $.Slice<Properties | $.VarRef<Properties> | null> {
		return this._fields.Prop
	}

	public set Prop(value: $.Slice<Properties | $.VarRef<Properties> | null>) {
		this._fields.Prop = value
	}

	// OneofTypes contains information about the oneof fields in this message.
	// It is keyed by the protobuf field name.
	public get OneofTypes(): globalThis.Map<string, OneofProperties | $.VarRef<OneofProperties> | null> | null {
		return this._fields.OneofTypes
	}

	public set OneofTypes(value: globalThis.Map<string, OneofProperties | $.VarRef<OneofProperties> | null> | null) {
		this._fields.OneofTypes = value
	}

	public _fields: {
		Prop: $.Slice<Properties | $.VarRef<Properties> | null>
		OneofTypes: globalThis.Map<string, OneofProperties | $.VarRef<OneofProperties> | null> | null
	}

	constructor(init?: Partial<{Prop?: $.Slice<Properties | $.VarRef<Properties> | null>, OneofTypes?: globalThis.Map<string, OneofProperties | $.VarRef<OneofProperties> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Prop: init?.Prop ?? (null! as $.Slice<Properties | $.VarRef<Properties> | null>),
			OneofTypes: init?.OneofTypes ?? (null! as globalThis.Map<string, OneofProperties | $.VarRef<OneofProperties> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StructProperties {
		return new StructProperties(this, true)
	}

	public __goscriptAssign(source: StructProperties): void {
		const target = this._fields
		const values = source._fields
		target.Prop = values.Prop
		target.OneofTypes = values.OneofTypes
	}

	public Len(): number {
		const sp: StructProperties | $.VarRef<StructProperties> | null = this;
		return $.sliceLen($.pointerValue<StructProperties>(sp).Prop)
	}

	public Less(i: number, j: number): boolean {
		const sp: StructProperties | $.VarRef<StructProperties> | null = this;
		return false
	}

	public Swap(i: number, j: number): void {
		const sp: StructProperties | $.VarRef<StructProperties> | null = this;
		return
	}

	static __typeInfo = $.registerStructType(
		"proto.StructProperties",
		() => new StructProperties(),
		() => [$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [], true)],
		StructProperties,
		() => [/* @__PURE__ */ $.structField("Prop", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("proto.Properties")), [0], 0, true), /* @__PURE__ */ $.structField("OneofTypes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("proto.OneofProperties")), [1], 24, true)]
	)
}

export class Properties {
	// Name is a placeholder name with little meaningful semantic value.
	// If the name has an "XXX_" prefix, the entire Properties must be ignored.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// OrigName is the protobuf field name or oneof name.
	public get OrigName(): string {
		return this._fields.OrigName
	}

	public set OrigName(value: string) {
		this._fields.OrigName = value
	}

	// JSONName is the JSON name for the protobuf field.
	public get JSONName(): string {
		return this._fields.JSONName
	}

	public set JSONName(value: string) {
		this._fields.JSONName = value
	}

	// Enum is a placeholder name for enums.
	// For historical reasons, this is neither the Go name for the enum,
	// nor the protobuf name for the enum.
	public get Enum(): string {
		return this._fields.Enum
	}

	public set Enum(value: string) {
		this._fields.Enum = value
	}

	// Weak contains the full name of the weakly referenced message.
	public get Weak(): string {
		return this._fields.Weak
	}

	public set Weak(value: string) {
		this._fields.Weak = value
	}

	// Wire is a string representation of the wire type.
	public get Wire(): string {
		return this._fields.Wire
	}

	public set Wire(value: string) {
		this._fields.Wire = value
	}

	// WireType is the protobuf wire type for the field.
	public get WireType(): number {
		return this._fields.WireType
	}

	public set WireType(value: number) {
		this._fields.WireType = value
	}

	// Tag is the protobuf field number.
	public get Tag(): number {
		return this._fields.Tag
	}

	public set Tag(value: number) {
		this._fields.Tag = value
	}

	// Required reports whether this is a required field.
	public get Required(): boolean {
		return this._fields.Required
	}

	public set Required(value: boolean) {
		this._fields.Required = value
	}

	// Optional reports whether this is a optional field.
	public get Optional(): boolean {
		return this._fields.Optional
	}

	public set Optional(value: boolean) {
		this._fields.Optional = value
	}

	// Repeated reports whether this is a repeated field.
	public get Repeated(): boolean {
		return this._fields.Repeated
	}

	public set Repeated(value: boolean) {
		this._fields.Repeated = value
	}

	// Packed reports whether this is a packed repeated field of scalars.
	public get Packed(): boolean {
		return this._fields.Packed
	}

	public set Packed(value: boolean) {
		this._fields.Packed = value
	}

	// Proto3 reports whether this field operates under the proto3 syntax.
	public get Proto3(): boolean {
		return this._fields.Proto3
	}

	public set Proto3(value: boolean) {
		this._fields.Proto3 = value
	}

	// Oneof reports whether this field belongs within a oneof.
	public get Oneof(): boolean {
		return this._fields.Oneof
	}

	public set Oneof(value: boolean) {
		this._fields.Oneof = value
	}

	// Default is the default value in string form.
	public get Default(): string {
		return this._fields.Default
	}

	public set Default(value: string) {
		this._fields.Default = value
	}

	// HasDefault reports whether the field has a default value.
	public get HasDefault(): boolean {
		return this._fields.HasDefault
	}

	public set HasDefault(value: boolean) {
		this._fields.HasDefault = value
	}

	// MapKeyProp is the properties for the key field for a map field.
	public get MapKeyProp(): Properties | $.VarRef<Properties> | null {
		return this._fields.MapKeyProp
	}

	public set MapKeyProp(value: Properties | $.VarRef<Properties> | null) {
		this._fields.MapKeyProp = value
	}

	// MapValProp is the properties for the value field for a map field.
	public get MapValProp(): Properties | $.VarRef<Properties> | null {
		return this._fields.MapValProp
	}

	public set MapValProp(value: Properties | $.VarRef<Properties> | null) {
		this._fields.MapValProp = value
	}

	public _fields: {
		Name: string
		OrigName: string
		JSONName: string
		Enum: string
		Weak: string
		Wire: string
		WireType: number
		Tag: number
		Required: boolean
		Optional: boolean
		Repeated: boolean
		Packed: boolean
		Proto3: boolean
		Oneof: boolean
		Default: string
		HasDefault: boolean
		MapKeyProp: Properties | $.VarRef<Properties> | null
		MapValProp: Properties | $.VarRef<Properties> | null
	}

	constructor(init?: Partial<{Name?: string, OrigName?: string, JSONName?: string, Enum?: string, Weak?: string, Wire?: string, WireType?: number, Tag?: number, Required?: boolean, Optional?: boolean, Repeated?: boolean, Packed?: boolean, Proto3?: boolean, Oneof?: boolean, Default?: string, HasDefault?: boolean, MapKeyProp?: Properties | $.VarRef<Properties> | null, MapValProp?: Properties | $.VarRef<Properties> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			OrigName: init?.OrigName ?? ("" as string),
			JSONName: init?.JSONName ?? ("" as string),
			Enum: init?.Enum ?? ("" as string),
			Weak: init?.Weak ?? ("" as string),
			Wire: init?.Wire ?? ("" as string),
			WireType: init?.WireType ?? (0 as number),
			Tag: init?.Tag ?? (0 as number),
			Required: init?.Required ?? (false as boolean),
			Optional: init?.Optional ?? (false as boolean),
			Repeated: init?.Repeated ?? (false as boolean),
			Packed: init?.Packed ?? (false as boolean),
			Proto3: init?.Proto3 ?? (false as boolean),
			Oneof: init?.Oneof ?? (false as boolean),
			Default: init?.Default ?? ("" as string),
			HasDefault: init?.HasDefault ?? (false as boolean),
			MapKeyProp: init?.MapKeyProp ?? (null! as Properties | $.VarRef<Properties> | null),
			MapValProp: init?.MapValProp ?? (null! as Properties | $.VarRef<Properties> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Properties {
		return new Properties(this, true)
	}

	public __goscriptAssign(source: Properties): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.OrigName = values.OrigName
		target.JSONName = values.JSONName
		target.Enum = values.Enum
		target.Weak = values.Weak
		target.Wire = values.Wire
		target.WireType = values.WireType
		target.Tag = values.Tag
		target.Required = values.Required
		target.Optional = values.Optional
		target.Repeated = values.Repeated
		target.Packed = values.Packed
		target.Proto3 = values.Proto3
		target.Oneof = values.Oneof
		target.Default = values.Default
		target.HasDefault = values.HasDefault
		target.MapKeyProp = values.MapKeyProp
		target.MapValProp = values.MapValProp
	}

	public async Init(typ: reflect.Type | null, name: string, tag: string, f: reflect.StructField | $.VarRef<reflect.StructField> | null): globalThis.Promise<void> {
		let p: Properties | $.VarRef<Properties> | null = this;
		const p$: Properties = p == null ? $.pointerTarget<Properties>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Properties>(p)
		const f$: reflect.StructField = f == null ? $.pointerTarget<reflect.StructField>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<reflect.StructField>(f);
		;(p$ as Properties).Name = name;
		;(p$ as Properties).OrigName = name
		if ($.stringEqual(tag, "")) {
			return
		}
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Properties).Parse(tag) : Properties.prototype.Parse.call(p, tag))

		if ((typ != null) && ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 21)) {
			;(p$ as Properties).MapKeyProp = new Properties()
			await Properties.prototype.Init.call((p$ as Properties).MapKeyProp, null, "Key", reflect.StructTag_Get((f$ as reflect.StructField).Tag, "protobuf_key"), null);
			;(p$ as Properties).MapValProp = new Properties()
			await Properties.prototype.Init.call((p$ as Properties).MapValProp, null, "Value", reflect.StructTag_Get((f$ as reflect.StructField).Tag, "protobuf_val"), null)
		}
	}

	public Parse(tag: string): void {
		let p: Properties | $.VarRef<Properties> | null = this;
		const p$: Properties = p == null ? $.pointerTarget<Properties>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Properties>(p)
		// For example: "bytes,49,opt,name=foo,def=hello!"
		while ($.stringLen(tag) > 0) {
			let i: number = strings.IndexByte(tag, 44)
			if (i < 0) {
				i = $.stringLen(tag)
			}
			{
				let s = $.sliceStringOrBytes(tag, undefined, i)
				switch ((true as boolean)) {
					case strings.HasPrefix(s, "name="):
					{
						;(p$ as Properties).OrigName = $.sliceStringOrBytes(s, 5, undefined)
						break
					}
					case strings.HasPrefix(s, "json="):
					{
						;(p$ as Properties).JSONName = $.sliceStringOrBytes(s, 5, undefined)
						break
					}
					case strings.HasPrefix(s, "enum="):
					{
						;(p$ as Properties).Enum = $.sliceStringOrBytes(s, 5, undefined)
						break
					}
					case strings.HasPrefix(s, "weak="):
					{
						;(p$ as Properties).Weak = $.sliceStringOrBytes(s, 5, undefined)
						break
					}
					case $.stringEqual(strings.Trim(s, "0123456789"), ""):
					{
						let [n, ] = strconv.ParseUint(s, 10, 32);
						;(p$ as Properties).Tag = $.int(n)
						break
					}
					case $.stringEqual(s, "opt"):
					{
						;(p$ as Properties).Optional = true
						break
					}
					case $.stringEqual(s, "req"):
					{
						;(p$ as Properties).Required = true
						break
					}
					case $.stringEqual(s, "rep"):
					{
						;(p$ as Properties).Repeated = true
						break
					}
					case (($.stringEqual(s, "varint")) || ($.stringEqual(s, "zigzag32"))) || ($.stringEqual(s, "zigzag64")):
					{
						;(p$ as Properties).Wire = s;
						;(p$ as Properties).WireType = 0
						break
					}
					case $.stringEqual(s, "fixed32"):
					{
						;(p$ as Properties).Wire = s;
						;(p$ as Properties).WireType = 5
						break
					}
					case $.stringEqual(s, "fixed64"):
					{
						;(p$ as Properties).Wire = s;
						;(p$ as Properties).WireType = 1
						break
					}
					case $.stringEqual(s, "bytes"):
					{
						;(p$ as Properties).Wire = s;
						;(p$ as Properties).WireType = 2
						break
					}
					case $.stringEqual(s, "group"):
					{
						;(p$ as Properties).Wire = s;
						;(p$ as Properties).WireType = 3
						break
					}
					case $.stringEqual(s, "packed"):
					{
						;(p$ as Properties).Packed = true
						break
					}
					case $.stringEqual(s, "proto3"):
					{
						;(p$ as Properties).Proto3 = true
						break
					}
					case $.stringEqual(s, "oneof"):
					{
						;(p$ as Properties).Oneof = true
						break
					}
					case strings.HasPrefix(s, "def="):
					{
						;(p$ as Properties).HasDefault = true
						let __goscriptAssign0_0: string = $.sliceStringOrBytes(tag, 4, undefined)
						let __goscriptAssign0_1: number = $.stringLen(tag);
						;(p$ as Properties).Default = __goscriptAssign0_0
						i = __goscriptAssign0_1
						break
					}
				}
			}
			tag = strings.TrimPrefix($.sliceStringOrBytes(tag, i, undefined), ",")
		}
	}

	public String(): string {
		const p: Properties | $.VarRef<Properties> | null = this;
		const p$: Properties = p == null ? $.pointerTarget<Properties>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Properties>(p)
		let s = (p$ as Properties).Wire
		s = $.concatString(s, $.concatString(",", strconv.Itoa((p$ as Properties).Tag)))
		if ((p$ as Properties).Required) {
			s = $.concatString(s, ",req")
		}
		if ((p$ as Properties).Optional) {
			s = $.concatString(s, ",opt")
		}
		if ((p$ as Properties).Repeated) {
			s = $.concatString(s, ",rep")
		}
		if ((p$ as Properties).Packed) {
			s = $.concatString(s, ",packed")
		}
		s = $.concatString(s, $.concatString(",name=", (p$ as Properties).OrigName))
		if (!$.stringEqual((p$ as Properties).JSONName, "")) {
			s = $.concatString(s, $.concatString(",json=", (p$ as Properties).JSONName))
		}
		if ($.stringLen((p$ as Properties).Enum) > 0) {
			s = $.concatString(s, $.concatString(",enum=", (p$ as Properties).Enum))
		}
		if ($.stringLen((p$ as Properties).Weak) > 0) {
			s = $.concatString(s, $.concatString(",weak=", (p$ as Properties).Weak))
		}
		if ((p$ as Properties).Proto3) {
			s = $.concatString(s, ",proto3")
		}
		if ((p$ as Properties).Oneof) {
			s = $.concatString(s, ",oneof")
		}
		if ((p$ as Properties).HasDefault) {
			s = $.concatString(s, $.concatString(",def=", (p$ as Properties).Default))
		}
		return s
	}

	static __typeInfo = $.registerStructType(
		"proto.Properties",
		() => new Properties(),
		() => [$.methodSignature("Init", [["typ", "reflect.Type"], ["name", /* @__PURE__ */ $.basicType("string")], ["tag", /* @__PURE__ */ $.basicType("string")], ["f", /* @__PURE__ */ $.pointerType("reflect.StructField")]], [], true), $.methodSignature("Parse", [["tag", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Properties,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("OrigName", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("JSONName", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Enum", /* @__PURE__ */ $.basicType("string"), [3], 48, true), /* @__PURE__ */ $.structField("Weak", /* @__PURE__ */ $.basicType("string"), [4], 64, true), /* @__PURE__ */ $.structField("Wire", /* @__PURE__ */ $.basicType("string"), [5], 80, true), /* @__PURE__ */ $.structField("WireType", /* @__PURE__ */ $.basicType("int"), [6], 96, true), /* @__PURE__ */ $.structField("Tag", /* @__PURE__ */ $.basicType("int"), [7], 104, true), /* @__PURE__ */ $.structField("Required", /* @__PURE__ */ $.basicType("bool"), [8], 112, true), /* @__PURE__ */ $.structField("Optional", /* @__PURE__ */ $.basicType("bool"), [9], 113, true), /* @__PURE__ */ $.structField("Repeated", /* @__PURE__ */ $.basicType("bool"), [10], 114, true), /* @__PURE__ */ $.structField("Packed", /* @__PURE__ */ $.basicType("bool"), [11], 115, true), /* @__PURE__ */ $.structField("Proto3", /* @__PURE__ */ $.basicType("bool"), [12], 116, true), /* @__PURE__ */ $.structField("Oneof", /* @__PURE__ */ $.basicType("bool"), [13], 117, true), /* @__PURE__ */ $.structField("Default", /* @__PURE__ */ $.basicType("string"), [14], 120, true), /* @__PURE__ */ $.structField("HasDefault", /* @__PURE__ */ $.basicType("bool"), [15], 136, true), /* @__PURE__ */ $.structField("MapKeyProp", /* @__PURE__ */ $.pointerType("proto.Properties"), [16], 144, true), /* @__PURE__ */ $.structField("MapValProp", /* @__PURE__ */ $.pointerType("proto.Properties"), [17], 152, true)]
	)
}

export class OneofProperties {
	// Type is a pointer to the generated wrapper type for the field value.
	// This is nil for messages that are not in the open-struct API.
	public get Type(): reflect.Type | null {
		return this._fields.Type
	}

	public set Type(value: reflect.Type | null) {
		this._fields.Type = value
	}

	// Field is the index into StructProperties.Prop for the containing oneof.
	public get Field(): number {
		return this._fields.Field
	}

	public set Field(value: number) {
		this._fields.Field = value
	}

	// Prop is the properties for the field.
	public get Prop(): Properties | $.VarRef<Properties> | null {
		return this._fields.Prop
	}

	public set Prop(value: Properties | $.VarRef<Properties> | null) {
		this._fields.Prop = value
	}

	public _fields: {
		Type: reflect.Type | null
		Field: number
		Prop: Properties | $.VarRef<Properties> | null
	}

	constructor(init?: Partial<{Type?: reflect.Type | null, Field?: number, Prop?: Properties | $.VarRef<Properties> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? (null! as reflect.Type | null),
			Field: init?.Field ?? (0 as number),
			Prop: init?.Prop ?? (null! as Properties | $.VarRef<Properties> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OneofProperties {
		return new OneofProperties(this, true)
	}

	public __goscriptAssign(source: OneofProperties): void {
		const target = this._fields
		const values = source._fields
		target.Type = $.assignFieldValue(target.Type, values.Type, "reflect.Type")
		target.Field = values.Field
		target.Prop = values.Prop
	}

	static __typeInfo = $.registerStructType(
		"proto.OneofProperties",
		() => new OneofProperties(),
		() => [],
		OneofProperties,
		() => [/* @__PURE__ */ $.structField("Type", "reflect.Type", [0], 0, true), /* @__PURE__ */ $.structField("Field", /* @__PURE__ */ $.basicType("int"), [1], 16, true), /* @__PURE__ */ $.structField("Prop", /* @__PURE__ */ $.pointerType("proto.Properties"), [2], 24, true)]
	)
}

export let propertiesCache: $.VarRef<sync.Map> = $.varRef($.markAsStructValue(new sync.Map()))

export function __goscript_set_propertiesCache(__goscriptValue: sync.Map): void {
	$.assignStruct(propertiesCache.value, __goscriptValue)
}

export async function GetProperties(t: reflect.Type | null): globalThis.Promise<StructProperties | $.VarRef<StructProperties> | null> {
	{
		let [p, ok] = await propertiesCache.value.Load((t as any))
		if (ok) {
			return ((p as any)?.__goType === "*proto.StructProperties" && (p as any).__goValue === undefined && (p as any).__isTypedNil !== true ? ((p as any) as StructProperties | $.VarRef<StructProperties> | null) : $.mustTypeAssert<StructProperties | $.VarRef<StructProperties> | null>(p, /* @__PURE__ */ $.pointerType("proto.StructProperties")))
		}
	}
	let [p, ] = await propertiesCache.value.LoadOrStore((t as any), $.interfaceValue(await newProperties(t), "*proto.StructProperties", /* @__PURE__ */ $.pointerType("proto.StructProperties")))
	return ((p as any)?.__goType === "*proto.StructProperties" && (p as any).__goValue === undefined && (p as any).__isTypedNil !== true ? ((p as any) as StructProperties | $.VarRef<StructProperties> | null) : $.mustTypeAssert<StructProperties | $.VarRef<StructProperties> | null>(p, /* @__PURE__ */ $.pointerType("proto.StructProperties")))
}

export async function newProperties(t: reflect.Type | null): globalThis.Promise<StructProperties | $.VarRef<StructProperties> | null> {
	if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25) {
		$.panic(await fmt.Sprintf("%v is not a generated message in the open-struct API", (t as any)))
	}

	let hasOneof: boolean = false
	let prop: StructProperties | $.VarRef<StructProperties> | null = new StructProperties()
	let prop$: StructProperties = prop == null ? $.pointerTarget<StructProperties>(prop) : (prop as any).__isVarRef === true ? (prop as any).value : (prop as any).__goValue === undefined ? (prop as any) : $.pointerTarget<StructProperties>(prop)

	// Construct a list of properties for each field in the struct.
	for (let i = 0; i < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
		let p: Properties | $.VarRef<Properties> | null = new Properties()
		let p$: Properties = p == null ? $.pointerTarget<Properties>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Properties>(p)
		let f = $.varRef($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))))
		let tagField = reflect.StructTag_Get(f.value.Tag, "protobuf")
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Properties).Init(f.value.Type, f.value.Name, tagField, f) : Properties.prototype.Init.call(p, f.value.Type, f.value.Name, tagField, f))

		let tagOneof = reflect.StructTag_Get(f.value.Tag, "protobuf_oneof")
		if (!$.stringEqual(tagOneof, "")) {
			hasOneof = true;
			;(p$ as Properties).OrigName = tagOneof
		}

		// Rename unrelated struct fields with the "XXX_" prefix since so much
		// user code simply checks for this to exclude special fields.
		if ((($.stringEqual(tagField, "")) && ($.stringEqual(tagOneof, ""))) && !strings.HasPrefix((p$ as Properties).Name, "XXX_")) {
			;(p$ as Properties).Name = $.concatString("XXX_", (p$ as Properties).Name);
			;(p$ as Properties).OrigName = $.concatString("XXX_", (p$ as Properties).OrigName)
		} else {
			if (!$.stringEqual((p$ as Properties).Weak, "")) {
				;(p$ as Properties).Name = (p$ as Properties).OrigName
			}
		}

		;(prop$ as StructProperties).Prop = $.appendOne((prop$ as StructProperties).Prop, p, $.appendZeros.nil)
	}

	// Construct a mapping of oneof field names to properties.
	if (hasOneof) {
		let oneofWrappers: $.Slice<any> = null! as $.Slice<any>
		{
			let [fn, ok] = await $.pointerValue<Exclude<reflect.Type, null>>(reflect.PtrTo($.pointerValueOrNil(t)!)).MethodByName("XXX_OneofFuncs")
			if (ok) {
				oneofWrappers = $.mustTypeAssert<$.Slice<any>>($.markAsStructValue($.cloneStructValue($.arrayIndex((await $.markAsStructValue($.cloneStructValue(fn.Func)).Call($.arrayToSlice<reflect.Value>([$.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(fn.Type).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))])))!, 3))).Interface(), /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))
			}
		}
		{
			let [fn, ok] = await $.pointerValue<Exclude<reflect.Type, null>>(reflect.PtrTo($.pointerValueOrNil(t)!)).MethodByName("XXX_OneofWrappers")
			if (ok) {
				oneofWrappers = $.mustTypeAssert<$.Slice<any>>($.markAsStructValue($.cloneStructValue($.arrayIndex((await $.markAsStructValue($.cloneStructValue(fn.Func)).Call($.arrayToSlice<reflect.Value>([$.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(fn.Type).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))])))!, 0))).Interface(), /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))
			}
		}
		{
			let [m, ok] = $.typeAssertTuple<protoreflect.ProtoMessage | null>($.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(reflect.PtrTo($.pointerValueOrNil(t)!))!))).Interface(), "protoreflect.ProtoMessage")
			if (ok) {
				let __goscriptShadow0 = m
				{
					let __goscriptTuple0: any = $.typeAssertTuple<any>((__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(__goscriptShadow0)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), { kind: $.TypeKind.Interface, methods: [{ name: "ProtoMessageInfo", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.pointerType("impl.MessageInfo") }] }] })
					let __goscriptShadow1 = __goscriptTuple0[0]
					let __goscriptShadow2 = __goscriptTuple0[1]
					if (__goscriptShadow2) {
						oneofWrappers = $.pointerValue<protoimpl.MessageInfo>(((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as any) : $.pointerValue<any>(__goscriptShadow1)).ProtoMessageInfo(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as impl.MessageInfo | $.VarRef<impl.MessageInfo> | null)).OneofWrappers
					}
				}
			}
		}

		;(prop$ as StructProperties).OneofTypes = $.makeMap<string, OneofProperties | $.VarRef<OneofProperties> | null>()
		for (let __goscriptRangeTarget0 = oneofWrappers, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let wrapper = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as any)
			let p: OneofProperties | $.VarRef<OneofProperties> | null = (() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(wrapper))).Type(); return new OneofProperties({Type: __goscriptLiteralField0, Prop: new Properties()}) })()
			let p$: OneofProperties = p == null ? $.pointerTarget<OneofProperties>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<OneofProperties>(p)
			let f = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((p$ as OneofProperties).Type).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
			$.pointerValue<Properties>((p$ as OneofProperties).Prop).Name = f.Name
			Properties.prototype.Parse.call((p$ as OneofProperties).Prop, reflect.StructTag_Get(f.Tag, "protobuf"))

			// Determine the struct field that contains this oneof.
			// Each wrapper is assignable to exactly one parent field.
			let foundOneof: boolean = false
			for (let i = 0; (i < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) && !foundOneof; i++) {
				if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((p$ as OneofProperties).Type).AssignableTo($.pointerValueOrNil(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Type)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					;(p$ as OneofProperties).Field = i
					foundOneof = true
				}
			}
			if (!foundOneof) {
				$.panic(await fmt.Sprintf("%v is not a generated message in the open-struct API", (t as any)))
			}
			$.mapSet((prop$ as StructProperties).OneofTypes, $.pointerValue<Properties>((p$ as OneofProperties).Prop).OrigName, p)
		}
	}

	return prop
}

var __goscriptAwait: any
