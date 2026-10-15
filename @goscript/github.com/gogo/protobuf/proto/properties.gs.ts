// Generated file based on properties.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as log from "@goscript/log/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import type * as __goscript_table_marshal from "./table_marshal.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/log/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "./encode.gs.ts"
import "./lib.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.tagMap", "proto.StructProperties", "proto.OneofProperties", "proto.Properties", "proto.oneofFuncsIface", "proto.oneofWrappersIface", "proto.xname"])

export type oneofFuncsIface = {
	XXX_OneofFuncs(): [((_p0: __goscript_lib.Message | null, _p1: __goscript_lib.Buffer | $.VarRef<__goscript_lib.Buffer> | null) => $.GoError | globalThis.Promise<$.GoError>) | null, ((_p0: __goscript_lib.Message | null, _p1: number, _p2: number, _p3: __goscript_lib.Buffer | $.VarRef<__goscript_lib.Buffer> | null) => [boolean, $.GoError] | globalThis.Promise<[boolean, $.GoError]>) | null, ((_p0: __goscript_lib.Message | null) => number | globalThis.Promise<number>) | null, $.Slice<any>]
}

$.registerInterfaceType(
	"proto.oneofFuncsIface",
	null,
	[$.methodSignature("XXX_OneofFuncs", [], [({ kind: $.TypeKind.Function, params: ["proto.Message", /* @__PURE__ */ $.pointerType("proto.Buffer")], results: ["error"] } as $.FunctionTypeInfo), ({ kind: $.TypeKind.Function, params: ["proto.Message", /* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.pointerType("proto.Buffer")], results: [/* @__PURE__ */ $.basicType("bool"), "error"] } as $.FunctionTypeInfo), ({ kind: $.TypeKind.Function, params: ["proto.Message"], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo), /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })])]
);

export type oneofWrappersIface = {
	XXX_OneofWrappers(): $.Slice<any>
}

$.registerInterfaceType(
	"proto.oneofWrappersIface",
	null,
	[$.methodSignature("XXX_OneofWrappers", [], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })])]
);

export class tagMap {
	public get fastTags(): $.Slice<number> {
		return this._fields.fastTags
	}

	public set fastTags(value: $.Slice<number>) {
		this._fields.fastTags = value
	}

	public get slowTags(): globalThis.Map<number, number> | null {
		return this._fields.slowTags
	}

	public set slowTags(value: globalThis.Map<number, number> | null) {
		this._fields.slowTags = value
	}

	public _fields: {
		fastTags: $.Slice<number>
		slowTags: globalThis.Map<number, number> | null
	}

	constructor(init?: Partial<{fastTags?: $.Slice<number>, slowTags?: globalThis.Map<number, number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			fastTags: init?.fastTags ?? (null! as $.Slice<number>),
			slowTags: init?.slowTags ?? (null! as globalThis.Map<number, number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tagMap {
		return new tagMap(this, true)
	}

	public __goscriptAssign(source: tagMap): void {
		const target = this._fields
		const values = source._fields
		target.fastTags = values.fastTags
		target.slowTags = values.slowTags
	}

	public ["get"](t: number): [number, boolean] {
		const p: tagMap | $.VarRef<tagMap> | null = this;
		const p$: tagMap = p == null ? $.pointerTarget<tagMap>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<tagMap>(p)
		if ((t > 0) && (t < 1024)) {
			if (t >= $.sliceLen((p$ as tagMap).fastTags)) {
				return [0, false]
			}
			let fi = $.arrayIndex((p$ as tagMap).fastTags!, t)
			return [fi, fi >= 0]
		}
		let [fi, ok] = $.mapGet<number, number, number>((p$ as tagMap).slowTags, t, 0)
		return [fi, ok]
	}

	public put(t: number, fi: number): void {
		let p: tagMap | $.VarRef<tagMap> | null = this;
		const p$: tagMap = p == null ? $.pointerTarget<tagMap>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<tagMap>(p)
		if ((t > 0) && (t < 1024)) {
			while ($.sliceLen((p$ as tagMap).fastTags) < (t + 1)) {
				;(p$ as tagMap).fastTags = $.appendOne((p$ as tagMap).fastTags, -1)
			}
			$.sliceElems((p$ as tagMap).fastTags!)[$.sliceSlot((p$ as tagMap).fastTags!, t)] = fi
			return
		}
		if ((p$ as tagMap).slowTags == null) {
			;(p$ as tagMap).slowTags = $.makeMap<number, number>()
		}
		$.mapSet((p$ as tagMap).slowTags, t, fi)
	}

	static __typeInfo = $.registerStructType(
		"proto.tagMap",
		() => new tagMap(),
		() => [$.methodSignature("get", [["t", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("put", [["t", /* @__PURE__ */ $.basicType("int")], ["fi", /* @__PURE__ */ $.basicType("int")]], [], true)],
		tagMap,
		() => [/* @__PURE__ */ $.structField("fastTags", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("slowTags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")), [1], 24, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export class StructProperties {
	public get Prop(): $.Slice<Properties | $.VarRef<Properties> | null> {
		return this._fields.Prop
	}

	public set Prop(value: $.Slice<Properties | $.VarRef<Properties> | null>) {
		this._fields.Prop = value
	}

	public get reqCount(): number {
		return this._fields.reqCount
	}

	public set reqCount(value: number) {
		this._fields.reqCount = value
	}

	public get decoderTags(): tagMap {
		return this._fields.decoderTags
	}

	public set decoderTags(value: tagMap) {
		this._fields.decoderTags = value
	}

	public get decoderOrigNames(): globalThis.Map<string, number> | null {
		return this._fields.decoderOrigNames
	}

	public set decoderOrigNames(value: globalThis.Map<string, number> | null) {
		this._fields.decoderOrigNames = value
	}

	public get order(): $.Slice<number> {
		return this._fields.order
	}

	public set order(value: $.Slice<number>) {
		this._fields.order = value
	}

	// OneofTypes contains information about the oneof fields in this message.
	// It is keyed by the original name of a field.
	public get OneofTypes(): globalThis.Map<string, OneofProperties | $.VarRef<OneofProperties> | null> | null {
		return this._fields.OneofTypes
	}

	public set OneofTypes(value: globalThis.Map<string, OneofProperties | $.VarRef<OneofProperties> | null> | null) {
		this._fields.OneofTypes = value
	}

	public _fields: {
		Prop: $.Slice<Properties | $.VarRef<Properties> | null>
		reqCount: number
		decoderTags: tagMap
		decoderOrigNames: globalThis.Map<string, number> | null
		order: $.Slice<number>
		OneofTypes: globalThis.Map<string, OneofProperties | $.VarRef<OneofProperties> | null> | null
	}

	constructor(init?: Partial<{Prop?: $.Slice<Properties | $.VarRef<Properties> | null>, reqCount?: number, decoderTags?: tagMap, decoderOrigNames?: globalThis.Map<string, number> | null, order?: $.Slice<number>, OneofTypes?: globalThis.Map<string, OneofProperties | $.VarRef<OneofProperties> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Prop: init?.Prop ?? (null! as $.Slice<Properties | $.VarRef<Properties> | null>),
			reqCount: init?.reqCount ?? (0 as number),
			decoderTags: init?.decoderTags ? init.decoderTags.clone() : new tagMap(undefined, true),
			decoderOrigNames: init?.decoderOrigNames ?? (null! as globalThis.Map<string, number> | null),
			order: init?.order ?? (null! as $.Slice<number>),
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
		target.reqCount = values.reqCount
		$.assignStruct(target.decoderTags, values.decoderTags)
		target.decoderOrigNames = values.decoderOrigNames
		target.order = values.order
		target.OneofTypes = values.OneofTypes
	}

	public Len(): number {
		const sp: StructProperties | $.VarRef<StructProperties> | null = this;
		return $.sliceLen($.pointerValue<StructProperties>(sp).order)
	}

	public Less(i: number, j: number): boolean {
		const sp: StructProperties | $.VarRef<StructProperties> | null = this;
		const sp$: StructProperties = sp == null ? $.pointerTarget<StructProperties>(sp) : (sp as any).__isVarRef === true ? (sp as any).value : (sp as any).__goValue === undefined ? (sp as any) : $.pointerTarget<StructProperties>(sp)
		return $.pointerValue<Properties>($.arrayIndex((sp$ as StructProperties).Prop!, $.arrayIndex((sp$ as StructProperties).order!, i))).Tag < $.pointerValue<Properties>($.arrayIndex((sp$ as StructProperties).Prop!, $.arrayIndex((sp$ as StructProperties).order!, j))).Tag
	}

	public Swap(i: number, j: number): void {
		let sp: StructProperties | $.VarRef<StructProperties> | null = this;
		const sp$: StructProperties = sp == null ? $.pointerTarget<StructProperties>(sp) : (sp as any).__isVarRef === true ? (sp as any).value : (sp as any).__goValue === undefined ? (sp as any) : $.pointerTarget<StructProperties>(sp)
		let __goscriptAssign0_0: number = $.arrayIndex((sp$ as StructProperties).order!, j)
		let __goscriptAssign0_1: number = $.arrayIndex((sp$ as StructProperties).order!, i)
		$.sliceElems((sp$ as StructProperties).order!)[$.sliceSlot((sp$ as StructProperties).order!, i)] = __goscriptAssign0_0
		$.sliceElems((sp$ as StructProperties).order!)[$.sliceSlot((sp$ as StructProperties).order!, j)] = __goscriptAssign0_1
	}

	static __typeInfo = $.registerStructType(
		"proto.StructProperties",
		() => new StructProperties(),
		() => [$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [], true)],
		StructProperties,
		() => [/* @__PURE__ */ $.structField("Prop", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("proto.Properties")), [0], 0, true), /* @__PURE__ */ $.structField("reqCount", /* @__PURE__ */ $.basicType("int"), [1], 24, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("decoderTags", "proto.tagMap", [2], 32, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("decoderOrigNames", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int")), [3], 64, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("order", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [4], 72, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("OneofTypes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("proto.OneofProperties")), [5], 96, true)]
	)
}

export class OneofProperties {
	public get Type(): reflect.Type | null {
		return this._fields.Type
	}

	public set Type(value: reflect.Type | null) {
		this._fields.Type = value
	}

	public get Field(): number {
		return this._fields.Field
	}

	public set Field(value: number) {
		this._fields.Field = value
	}

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

export class Properties {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get OrigName(): string {
		return this._fields.OrigName
	}

	public set OrigName(value: string) {
		this._fields.OrigName = value
	}

	public get JSONName(): string {
		return this._fields.JSONName
	}

	public set JSONName(value: string) {
		this._fields.JSONName = value
	}

	public get Wire(): string {
		return this._fields.Wire
	}

	public set Wire(value: string) {
		this._fields.Wire = value
	}

	public get WireType(): number {
		return this._fields.WireType
	}

	public set WireType(value: number) {
		this._fields.WireType = value
	}

	public get Tag(): number {
		return this._fields.Tag
	}

	public set Tag(value: number) {
		this._fields.Tag = value
	}

	public get Required(): boolean {
		return this._fields.Required
	}

	public set Required(value: boolean) {
		this._fields.Required = value
	}

	public get Optional(): boolean {
		return this._fields.Optional
	}

	public set Optional(value: boolean) {
		this._fields.Optional = value
	}

	public get Repeated(): boolean {
		return this._fields.Repeated
	}

	public set Repeated(value: boolean) {
		this._fields.Repeated = value
	}

	public get Packed(): boolean {
		return this._fields.Packed
	}

	public set Packed(value: boolean) {
		this._fields.Packed = value
	}

	public get Enum(): string {
		return this._fields.Enum
	}

	public set Enum(value: string) {
		this._fields.Enum = value
	}

	public get proto3(): boolean {
		return this._fields.proto3
	}

	public set proto3(value: boolean) {
		this._fields.proto3 = value
	}

	public get oneof(): boolean {
		return this._fields.oneof
	}

	public set oneof(value: boolean) {
		this._fields.oneof = value
	}

	public get Default(): string {
		return this._fields.Default
	}

	public set Default(value: string) {
		this._fields.Default = value
	}

	public get HasDefault(): boolean {
		return this._fields.HasDefault
	}

	public set HasDefault(value: boolean) {
		this._fields.HasDefault = value
	}

	public get CustomType(): string {
		return this._fields.CustomType
	}

	public set CustomType(value: string) {
		this._fields.CustomType = value
	}

	public get CastType(): string {
		return this._fields.CastType
	}

	public set CastType(value: string) {
		this._fields.CastType = value
	}

	public get StdTime(): boolean {
		return this._fields.StdTime
	}

	public set StdTime(value: boolean) {
		this._fields.StdTime = value
	}

	public get StdDuration(): boolean {
		return this._fields.StdDuration
	}

	public set StdDuration(value: boolean) {
		this._fields.StdDuration = value
	}

	public get WktPointer(): boolean {
		return this._fields.WktPointer
	}

	public set WktPointer(value: boolean) {
		this._fields.WktPointer = value
	}

	public get stype(): reflect.Type | null {
		return this._fields.stype
	}

	public set stype(value: reflect.Type | null) {
		this._fields.stype = value
	}

	public get ctype(): reflect.Type | null {
		return this._fields.ctype
	}

	public set ctype(value: reflect.Type | null) {
		this._fields.ctype = value
	}

	public get sprop(): StructProperties | $.VarRef<StructProperties> | null {
		return this._fields.sprop
	}

	public set sprop(value: StructProperties | $.VarRef<StructProperties> | null) {
		this._fields.sprop = value
	}

	public get mtype(): reflect.Type | null {
		return this._fields.mtype
	}

	public set mtype(value: reflect.Type | null) {
		this._fields.mtype = value
	}

	public get MapKeyProp(): Properties | $.VarRef<Properties> | null {
		return this._fields.MapKeyProp
	}

	public set MapKeyProp(value: Properties | $.VarRef<Properties> | null) {
		this._fields.MapKeyProp = value
	}

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
		Wire: string
		WireType: number
		Tag: number
		Required: boolean
		Optional: boolean
		Repeated: boolean
		Packed: boolean
		Enum: string
		proto3: boolean
		oneof: boolean
		Default: string
		HasDefault: boolean
		CustomType: string
		CastType: string
		StdTime: boolean
		StdDuration: boolean
		WktPointer: boolean
		stype: reflect.Type | null
		ctype: reflect.Type | null
		sprop: StructProperties | $.VarRef<StructProperties> | null
		mtype: reflect.Type | null
		MapKeyProp: Properties | $.VarRef<Properties> | null
		MapValProp: Properties | $.VarRef<Properties> | null
	}

	constructor(init?: Partial<{Name?: string, OrigName?: string, JSONName?: string, Wire?: string, WireType?: number, Tag?: number, Required?: boolean, Optional?: boolean, Repeated?: boolean, Packed?: boolean, Enum?: string, proto3?: boolean, oneof?: boolean, Default?: string, HasDefault?: boolean, CustomType?: string, CastType?: string, StdTime?: boolean, StdDuration?: boolean, WktPointer?: boolean, stype?: reflect.Type | null, ctype?: reflect.Type | null, sprop?: StructProperties | $.VarRef<StructProperties> | null, mtype?: reflect.Type | null, MapKeyProp?: Properties | $.VarRef<Properties> | null, MapValProp?: Properties | $.VarRef<Properties> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			OrigName: init?.OrigName ?? ("" as string),
			JSONName: init?.JSONName ?? ("" as string),
			Wire: init?.Wire ?? ("" as string),
			WireType: init?.WireType ?? (0 as number),
			Tag: init?.Tag ?? (0 as number),
			Required: init?.Required ?? (false as boolean),
			Optional: init?.Optional ?? (false as boolean),
			Repeated: init?.Repeated ?? (false as boolean),
			Packed: init?.Packed ?? (false as boolean),
			Enum: init?.Enum ?? ("" as string),
			proto3: init?.proto3 ?? (false as boolean),
			oneof: init?.oneof ?? (false as boolean),
			Default: init?.Default ?? ("" as string),
			HasDefault: init?.HasDefault ?? (false as boolean),
			CustomType: init?.CustomType ?? ("" as string),
			CastType: init?.CastType ?? ("" as string),
			StdTime: init?.StdTime ?? (false as boolean),
			StdDuration: init?.StdDuration ?? (false as boolean),
			WktPointer: init?.WktPointer ?? (false as boolean),
			stype: init?.stype ?? (null! as reflect.Type | null),
			ctype: init?.ctype ?? (null! as reflect.Type | null),
			sprop: init?.sprop ?? (null! as StructProperties | $.VarRef<StructProperties> | null),
			mtype: init?.mtype ?? (null! as reflect.Type | null),
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
		target.Wire = values.Wire
		target.WireType = values.WireType
		target.Tag = values.Tag
		target.Required = values.Required
		target.Optional = values.Optional
		target.Repeated = values.Repeated
		target.Packed = values.Packed
		target.Enum = values.Enum
		target.proto3 = values.proto3
		target.oneof = values.oneof
		target.Default = values.Default
		target.HasDefault = values.HasDefault
		target.CustomType = values.CustomType
		target.CastType = values.CastType
		target.StdTime = values.StdTime
		target.StdDuration = values.StdDuration
		target.WktPointer = values.WktPointer
		target.stype = $.assignFieldValue(target.stype, values.stype, "reflect.Type")
		target.ctype = $.assignFieldValue(target.ctype, values.ctype, "reflect.Type")
		target.sprop = values.sprop
		target.mtype = $.assignFieldValue(target.mtype, values.mtype, "reflect.Type")
		target.MapKeyProp = values.MapKeyProp
		target.MapValProp = values.MapValProp
	}

	public async Init(typ: reflect.Type | null, name: string, tag: string, f: reflect.StructField | $.VarRef<reflect.StructField> | null): globalThis.Promise<void> {
		const p: Properties | $.VarRef<Properties> | null = this;
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Properties).init(typ, name, tag, f, true) : Properties.prototype.init.call(p, typ, name, tag, f, true))
	}

	public async Parse(s: string): globalThis.Promise<void> {
		let p: Properties | $.VarRef<Properties> | null = this;
		const p$: Properties = p == null ? $.pointerTarget<Properties>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Properties>(p)
		// "bytes,49,opt,name=foo,def=hello!"
		let fields: $.Slice<string> = strings.Split(s, ",")
		if ($.sliceLen(fields) < 2) {
			await log.Printf("proto: tag has too few fields: %q", $.arrayToSlice<any>([s]))
			return
		}

		;(p$ as Properties).Wire = $.arrayIndex(fields!, 0)
		switch ((p$ as Properties).Wire) {
			case "varint":
			{
				;(p$ as Properties).WireType = 0
				break
			}
			case "fixed32":
			{
				;(p$ as Properties).WireType = 5
				break
			}
			case "fixed64":
			{
				;(p$ as Properties).WireType = 1
				break
			}
			case "zigzag32":
			{
				;(p$ as Properties).WireType = 0
				break
			}
			case "zigzag64":
			{
				;(p$ as Properties).WireType = 0
				break
			}
			case "bytes":
			case "group":
			{
				;(p$ as Properties).WireType = 2
				break
			}
			default:
			{
				await log.Printf("proto: tag has unknown wire type: %q", $.arrayToSlice<any>([s]))
				return
				break
			}
		}

		let err: $.GoError = null! as $.GoError
		let __goscriptTuple0: any = strconv.Atoi($.arrayIndex(fields!, 1));
		;(p$ as Properties).Tag = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return
		}

		outer: for (let __goscriptSliceWindow0 = $.sliceRange(fields), i = 2; i < __goscriptSliceWindow0.length; i++) {
			let f = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string)
			switch ((true as boolean)) {
				case $.stringEqual(f, "req"):
				{
					;(p$ as Properties).Required = true
					break
				}
				case $.stringEqual(f, "opt"):
				{
					;(p$ as Properties).Optional = true
					break
				}
				case $.stringEqual(f, "rep"):
				{
					;(p$ as Properties).Repeated = true
					break
				}
				case $.stringEqual(f, "packed"):
				{
					;(p$ as Properties).Packed = true
					break
				}
				case strings.HasPrefix(f, "name="):
				{
					;(p$ as Properties).OrigName = $.sliceStringOrBytes(f, 5, undefined)
					break
				}
				case strings.HasPrefix(f, "json="):
				{
					;(p$ as Properties).JSONName = $.sliceStringOrBytes(f, 5, undefined)
					break
				}
				case strings.HasPrefix(f, "enum="):
				{
					;(p$ as Properties).Enum = $.sliceStringOrBytes(f, 5, undefined)
					break
				}
				case $.stringEqual(f, "proto3"):
				{
					;(p$ as Properties).proto3 = true
					break
				}
				case $.stringEqual(f, "oneof"):
				{
					;(p$ as Properties).oneof = true
					break
				}
				case strings.HasPrefix(f, "def="):
				{
					;(p$ as Properties).HasDefault = true;
					;(p$ as Properties).Default = $.sliceStringOrBytes(f, 4, undefined)
					if ((i + 1) < __goscriptSliceWindow0.length) {
						// Commas aren't escaped, and def is always last.
						;(p$ as Properties).Default = $.concatString((p$ as Properties).Default, $.concatString(",", strings.Join($.goSlice(fields, i + 1, undefined), ",")))
						break outer
					}
					break
				}
				case strings.HasPrefix(f, "embedded="):
				{
					;(p$ as Properties).OrigName = $.arrayIndex(strings.Split(f, "=")!, 1)
					break
				}
				case strings.HasPrefix(f, "customtype="):
				{
					;(p$ as Properties).CustomType = $.arrayIndex(strings.Split(f, "=")!, 1)
					break
				}
				case strings.HasPrefix(f, "casttype="):
				{
					;(p$ as Properties).CastType = $.arrayIndex(strings.Split(f, "=")!, 1)
					break
				}
				case $.stringEqual(f, "stdtime"):
				{
					;(p$ as Properties).StdTime = true
					break
				}
				case $.stringEqual(f, "stdduration"):
				{
					;(p$ as Properties).StdDuration = true
					break
				}
				case $.stringEqual(f, "wktptr"):
				{
					;(p$ as Properties).WktPointer = true
					break
				}
			}
		}
	}

	public String(): string {
		const p: Properties | $.VarRef<Properties> | null = this;
		const p$: Properties = p == null ? $.pointerTarget<Properties>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Properties>(p)
		let s = (p$ as Properties).Wire
		s = $.concatString(s, ",")
		s = $.concatString(s, strconv.Itoa((p$ as Properties).Tag))
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
		if (!$.stringEqual((p$ as Properties).JSONName, (p$ as Properties).OrigName)) {
			s = $.concatString(s, $.concatString(",json=", (p$ as Properties).JSONName))
		}
		if ((p$ as Properties).proto3) {
			s = $.concatString(s, ",proto3")
		}
		if ((p$ as Properties).oneof) {
			s = $.concatString(s, ",oneof")
		}
		if ($.stringLen((p$ as Properties).Enum) > 0) {
			s = $.concatString(s, $.concatString(",enum=", (p$ as Properties).Enum))
		}
		if ((p$ as Properties).HasDefault) {
			s = $.concatString(s, $.concatString(",def=", (p$ as Properties).Default))
		}
		return s
	}

	public async init(typ: reflect.Type | null, name: string, tag: string, f: reflect.StructField | $.VarRef<reflect.StructField> | null, lockGetProp: boolean): globalThis.Promise<void> {
		let p: Properties | $.VarRef<Properties> | null = this;
		const p$: Properties = p == null ? $.pointerTarget<Properties>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Properties>(p);
		// "bytes,49,opt,def=hello!"
		;(p$ as Properties).Name = name;
		;(p$ as Properties).OrigName = name
		if ($.stringEqual(tag, "")) {
			return
		}
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Properties).Parse(tag) : Properties.prototype.Parse.call(p, tag))
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Properties).setFieldProps(typ, f, lockGetProp) : Properties.prototype.setFieldProps.call(p, typ, f, lockGetProp))
	}

	public async setFieldProps(typ: reflect.Type | null, f: reflect.StructField | $.VarRef<reflect.StructField> | null, lockGetProp: boolean): globalThis.Promise<void> {
		let p: Properties | $.VarRef<Properties> | null = this;
		const p$: Properties = p == null ? $.pointerTarget<Properties>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Properties>(p)
		const f$: reflect.StructField = f == null ? $.pointerTarget<reflect.StructField>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<reflect.StructField>(f)
		let isMap = (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 21
		if (($.stringLen((p$ as Properties).CustomType) > 0) && !isMap) {
			;(p$ as Properties).ctype = typ
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Properties).setTag(lockGetProp) : Properties.prototype.setTag.call(p, lockGetProp))
			return
		}
		if ((p$ as Properties).StdTime && !isMap) {
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Properties).setTag(lockGetProp) : Properties.prototype.setTag.call(p, lockGetProp))
			return
		}
		if ((p$ as Properties).StdDuration && !isMap) {
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Properties).setTag(lockGetProp) : Properties.prototype.setTag.call(p, lockGetProp))
			return
		}
		if ((p$ as Properties).WktPointer && !isMap) {
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Properties).setTag(lockGetProp) : Properties.prototype.setTag.call(p, lockGetProp))
			return
		}
		{
			let t1: reflect.Type | null = typ
			switch ((__goscriptAwait = (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? (t1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t1)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case reflect.Struct:
				{
					;(p$ as Properties).stype = typ
					break
				}
				case reflect.Ptr:
				{
					if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? (t1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t1)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 25) {
						;(p$ as Properties).stype = (__goscriptAwait = (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? (t1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t1)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
				}
				case reflect.Slice:
				{
					{
						let t2 = (__goscriptAwait = (t1 !== null && (t1 as any).__isVarRef !== true && (t1 as any).__goValue === undefined ? (t1 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t1)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						switch ((__goscriptAwait = (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? (t2 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t2)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
							case reflect.Ptr:
							{
								{
									let t3 = (__goscriptAwait = (t2 !== null && (t2 as any).__isVarRef !== true && (t2 as any).__goValue === undefined ? (t2 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t2)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
									switch ((__goscriptAwait = (t3 !== null && (t3 as any).__isVarRef !== true && (t3 as any).__goValue === undefined ? (t3 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t3)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
										case reflect.Struct:
										{
											;(p$ as Properties).stype = t3
											break
										}
									}
								}
								break
							}
							case reflect.Struct:
							{
								;(p$ as Properties).stype = t2
								break
							}
						}
					}
					break
				}
				case reflect.Map:
				{
					;(p$ as Properties).mtype = t1;
					;(p$ as Properties).MapKeyProp = new Properties()
					await Properties.prototype.init.call((p$ as Properties).MapKeyProp, reflect.PtrTo($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((p$ as Properties).mtype).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!), "Key", reflect.StructTag_Get((f$ as reflect.StructField).Tag, "protobuf_key"), null, lockGetProp);
					;(p$ as Properties).MapValProp = new Properties()
					let vtype: reflect.Type | null = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((p$ as Properties).mtype).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (((__goscriptAwait = (vtype !== null && (vtype as any).__isVarRef !== true && (vtype as any).__goValue === undefined ? (vtype as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(vtype)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) && ((__goscriptAwait = (vtype !== null && (vtype as any).__isVarRef !== true && (vtype as any).__goValue === undefined ? (vtype as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(vtype)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 23)) {
						// The value type is not a message (*T) or bytes ([]byte),
						// so we need encoders for the pointer to this type.
						vtype = reflect.PtrTo($.pointerValueOrNil(vtype)!)
					}

					$.pointerValue<Properties>((p$ as Properties).MapValProp).CustomType = (p$ as Properties).CustomType
					$.pointerValue<Properties>((p$ as Properties).MapValProp).StdDuration = (p$ as Properties).StdDuration
					$.pointerValue<Properties>((p$ as Properties).MapValProp).StdTime = (p$ as Properties).StdTime
					$.pointerValue<Properties>((p$ as Properties).MapValProp).WktPointer = (p$ as Properties).WktPointer
					await Properties.prototype.init.call((p$ as Properties).MapValProp, vtype, "Value", reflect.StructTag_Get((f$ as reflect.StructField).Tag, "protobuf_val"), null, lockGetProp)
					break
				}
			}
		}
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Properties).setTag(lockGetProp) : Properties.prototype.setTag.call(p, lockGetProp))
	}

	public async setTag(lockGetProp: boolean): globalThis.Promise<void> {
		let p: Properties | $.VarRef<Properties> | null = this;
		const p$: Properties = p == null ? $.pointerTarget<Properties>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Properties>(p)
		if ((p$ as Properties).stype != null) {
			if (lockGetProp) {
				;(p$ as Properties).sprop = await GetProperties((p$ as Properties).stype)
			} else {
				;(p$ as Properties).sprop = await getPropertiesLocked((p$ as Properties).stype)
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"proto.Properties",
		() => new Properties(),
		() => [$.methodSignature("Init", [["typ", "reflect.Type"], ["name", /* @__PURE__ */ $.basicType("string")], ["tag", /* @__PURE__ */ $.basicType("string")], ["f", /* @__PURE__ */ $.pointerType("reflect.StructField")]], [], true), $.methodSignature("Parse", [["s", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("init", [["typ", "reflect.Type"], ["name", /* @__PURE__ */ $.basicType("string")], ["tag", /* @__PURE__ */ $.basicType("string")], ["f", /* @__PURE__ */ $.pointerType("reflect.StructField")], ["lockGetProp", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("setFieldProps", [["typ", "reflect.Type"], ["f", /* @__PURE__ */ $.pointerType("reflect.StructField")], ["lockGetProp", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("setTag", [["lockGetProp", /* @__PURE__ */ $.basicType("bool")]], [], true)],
		Properties,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("OrigName", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("JSONName", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Wire", /* @__PURE__ */ $.basicType("string"), [3], 48, true), /* @__PURE__ */ $.structField("WireType", /* @__PURE__ */ $.basicType("int"), [4], 64, true), /* @__PURE__ */ $.structField("Tag", /* @__PURE__ */ $.basicType("int"), [5], 72, true), /* @__PURE__ */ $.structField("Required", /* @__PURE__ */ $.basicType("bool"), [6], 80, true), /* @__PURE__ */ $.structField("Optional", /* @__PURE__ */ $.basicType("bool"), [7], 81, true), /* @__PURE__ */ $.structField("Repeated", /* @__PURE__ */ $.basicType("bool"), [8], 82, true), /* @__PURE__ */ $.structField("Packed", /* @__PURE__ */ $.basicType("bool"), [9], 83, true), /* @__PURE__ */ $.structField("Enum", /* @__PURE__ */ $.basicType("string"), [10], 88, true), /* @__PURE__ */ $.structField("proto3", /* @__PURE__ */ $.basicType("bool"), [11], 104, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("oneof", /* @__PURE__ */ $.basicType("bool"), [12], 105, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("Default", /* @__PURE__ */ $.basicType("string"), [13], 112, true), /* @__PURE__ */ $.structField("HasDefault", /* @__PURE__ */ $.basicType("bool"), [14], 128, true), /* @__PURE__ */ $.structField("CustomType", /* @__PURE__ */ $.basicType("string"), [15], 136, true), /* @__PURE__ */ $.structField("CastType", /* @__PURE__ */ $.basicType("string"), [16], 152, true), /* @__PURE__ */ $.structField("StdTime", /* @__PURE__ */ $.basicType("bool"), [17], 168, true), /* @__PURE__ */ $.structField("StdDuration", /* @__PURE__ */ $.basicType("bool"), [18], 169, true), /* @__PURE__ */ $.structField("WktPointer", /* @__PURE__ */ $.basicType("bool"), [19], 170, true), /* @__PURE__ */ $.structField("stype", "reflect.Type", [20], 176, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("ctype", "reflect.Type", [21], 192, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("sprop", /* @__PURE__ */ $.pointerType("proto.StructProperties"), [22], 208, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("mtype", "reflect.Type", [23], 216, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("MapKeyProp", /* @__PURE__ */ $.pointerType("proto.Properties"), [24], 232, true), /* @__PURE__ */ $.structField("MapValProp", /* @__PURE__ */ $.pointerType("proto.Properties"), [25], 240, true)]
	)
}

export const debug: boolean = false

export const WireVarint: number = 0

export const WireFixed64: number = 1

export const WireBytes: number = 2

export const WireStartGroup: number = 3

export const WireEndGroup: number = 4

export const WireFixed32: number = 5

export const tagMapFastLimit: number = 1024

export var protoMessageType: reflect.Type | null

export function __goscript_init_protoMessageType(): void {
	if (((protoMessageType) as any) === undefined) {
		protoMessageType = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*proto.Message", /* @__PURE__ */ $.pointerType("proto.Message")))).Elem()
	}
}

export function __goscript_get_protoMessageType(): reflect.Type | null {
	if (((protoMessageType) as any) === undefined) {
		__goscript_init_protoMessageType()
	}
	return protoMessageType
}

export function __goscript_set_protoMessageType(__goscriptValue: reflect.Type | null): void {
	protoMessageType = __goscriptValue
}

export var marshalerType: reflect.Type | null

export function __goscript_init_marshalerType(): void {
	if (((marshalerType) as any) === undefined) {
		marshalerType = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*proto.Marshaler", /* @__PURE__ */ $.pointerType("proto.Marshaler")))).Elem()
	}
}

export function __goscript_get_marshalerType(): reflect.Type | null {
	if (((marshalerType) as any) === undefined) {
		__goscript_init_marshalerType()
	}
	return marshalerType
}

export function __goscript_set_marshalerType(__goscriptValue: reflect.Type | null): void {
	marshalerType = __goscriptValue
}

export let propertiesMu: $.VarRef<sync.RWMutex> = $.varRef($.markAsStructValue(new sync.RWMutex()))

export function __goscript_set_propertiesMu(__goscriptValue: sync.RWMutex): void {
	$.assignStruct(propertiesMu.value, __goscriptValue)
}

export let propertiesMap: globalThis.Map<reflect.Type | null, StructProperties | $.VarRef<StructProperties> | null> | null = $.makeMap<reflect.Type | null, StructProperties | $.VarRef<StructProperties> | null>()

export function __goscript_set_propertiesMap(__goscriptValue: globalThis.Map<reflect.Type | null, StructProperties | $.VarRef<StructProperties> | null> | null): void {
	propertiesMap = __goscriptValue
}

export async function GetProperties(t: reflect.Type | null): globalThis.Promise<StructProperties | $.VarRef<StructProperties> | null> {
	if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25) {
		$.panic("proto: type must have kind struct")
	}

	// Most calls to GetProperties in a long-running program will be
	// retrieving details for types we have seen before.
	await propertiesMu.value.RLock()
	let __goscriptTuple1: any = $.mapGet<reflect.Type | null, StructProperties | $.VarRef<StructProperties> | null, StructProperties | $.VarRef<StructProperties> | null>(propertiesMap, t, null)
	let sprop: StructProperties | $.VarRef<StructProperties> | null = __goscriptTuple1[0]
	let ok = __goscriptTuple1[1]
	propertiesMu.value.RUnlock()
	if (ok) {
		return sprop
	}

	await propertiesMu.value.Lock()
	sprop = await getPropertiesLocked(t)
	propertiesMu.value.Unlock()
	return sprop
}

export async function getPropertiesLocked(t: reflect.Type | null): globalThis.Promise<StructProperties | $.VarRef<StructProperties> | null> {
	{
		let __goscriptTuple2: any = $.mapGet<reflect.Type | null, StructProperties | $.VarRef<StructProperties> | null, StructProperties | $.VarRef<StructProperties> | null>(propertiesMap, t, null)
		let prop: StructProperties | $.VarRef<StructProperties> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (ok) {
			return prop
		}
	}

	let prop: StructProperties | $.VarRef<StructProperties> | null = new StructProperties()
	let prop$: StructProperties = prop == null ? $.pointerTarget<StructProperties>(prop) : (prop as any).__isVarRef === true ? (prop as any).value : (prop as any).__goValue === undefined ? (prop as any) : $.pointerTarget<StructProperties>(prop)
	// in case of recursive protos, fill this in now.
	$.mapSet(propertiesMap, t, prop);

	// build properties
	;(prop$ as StructProperties).Prop = $.makeSlice<Properties | $.VarRef<Properties> | null>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait));
	;(prop$ as StructProperties).order = $.makeSlice<number>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined, "number")

	let isOneofMessage = false
	for (let i = 0; i < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
		let f = $.varRef($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))))
		let p: Properties | $.VarRef<Properties> | null = new Properties()
		let p$: Properties = p == null ? $.pointerTarget<Properties>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Properties>(p)
		let name = f.value.Name
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Properties).init(f.value.Type, name, reflect.StructTag_Get(f.value.Tag, "protobuf"), f, false) : Properties.prototype.init.call(p, f.value.Type, name, reflect.StructTag_Get(f.value.Tag, "protobuf"), f, false))

		let oneof = reflect.StructTag_Get(f.value.Tag, "protobuf_oneof")
		if (!$.stringEqual(oneof, "")) {
			isOneofMessage = true;
			// Oneof fields don't use the traditional protobuf tag.
			;(p$ as Properties).OrigName = oneof
		}
		$.sliceElems((prop$ as StructProperties).Prop!)[$.sliceSlot((prop$ as StructProperties).Prop!, i)] = p
		$.sliceElems((prop$ as StructProperties).order!)[$.sliceSlot((prop$ as StructProperties).order!, i)] = i
		if (false) {
			await $.print(i, " ", f.value.Name, " ", (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), " ")
			if ((p$ as Properties).Tag > 0) {
				await $.print((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Properties).String() : Properties.prototype.String.call(p)))
			}
			await $.print("\n")
		}
	}

	// Re-order prop.order.
	await sort.Sort($.pointerValueOrNil($.interfaceValue<sort.Interface | null>(prop, "*proto.StructProperties", /* @__PURE__ */ $.pointerType("proto.StructProperties")))!)

	if (isOneofMessage) {
		let oots: $.Slice<any> = null! as $.Slice<any>
		{
			const __goscriptTypeSwitchValue = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(reflect.PtrTo($.pointerValueOrNil(t)!))!))).Interface()
			switch (true) {
				case $.typeAssert<oneofFuncsIface | null>(__goscriptTypeSwitchValue, "proto.oneofFuncsIface").ok:
					{
						let m: oneofFuncsIface | null = $.typeAssert<oneofFuncsIface | null>(__goscriptTypeSwitchValue, "proto.oneofFuncsIface").value
						let __goscriptTuple3: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<oneofFuncsIface, null>) : $.pointerValue<Exclude<oneofFuncsIface, null>>(m)).XXX_OneofFuncs()
						oots = __goscriptTuple3[3]
					}
					break
				case $.typeAssert<oneofWrappersIface | null>(__goscriptTypeSwitchValue, "proto.oneofWrappersIface").ok:
					{
						let m: oneofWrappersIface | null = $.typeAssert<oneofWrappersIface | null>(__goscriptTypeSwitchValue, "proto.oneofWrappersIface").value
						oots = ((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<oneofWrappersIface, null>) : $.pointerValue<Exclude<oneofWrappersIface, null>>(m)).XXX_OneofWrappers(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<any>)
					}
					break
			}
		}
		if ($.sliceLen(oots) > 0) {
			// Interpret oneof metadata.
			;(prop$ as StructProperties).OneofTypes = $.makeMap<string, OneofProperties | $.VarRef<OneofProperties> | null>()
			for (let __goscriptRangeTarget0 = oots, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let oot = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as any)
				let oop: OneofProperties | $.VarRef<OneofProperties> | null = (() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(oot))).Type(); return new OneofProperties({Type: __goscriptLiteralField0, Prop: new Properties()}) })()
				let oop$: OneofProperties = oop == null ? $.pointerTarget<OneofProperties>(oop) : (oop as any).__isVarRef === true ? (oop as any).value : (oop as any).__goValue === undefined ? (oop as any) : $.pointerTarget<OneofProperties>(oop)
				let sft = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((oop$ as OneofProperties).Type).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
				$.pointerValue<Properties>((oop$ as OneofProperties).Prop).Name = sft.Name
				await Properties.prototype.Parse.call((oop$ as OneofProperties).Prop, reflect.StructTag_Get(sft.Tag, "protobuf"))
				// There will be exactly one interface field that
				// this new value is assignable to.
				for (let i = 0; i < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
					let f = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
					if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(f.Type).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 20) {
						continue
					}
					if (!(__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((oop$ as OneofProperties).Type).AssignableTo($.pointerValueOrNil(f.Type)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						continue
					}
					;(oop$ as OneofProperties).Field = i
					break
				}
				$.mapSet((prop$ as StructProperties).OneofTypes, $.pointerValue<Properties>((oop$ as OneofProperties).Prop).OrigName, oop)
			}
		}
	}

	// build required counts
	// build tags
	let reqCount = 0;
	;(prop$ as StructProperties).decoderOrigNames = $.makeMap<string, number>()
	for (let __goscriptRangeTarget1 = (prop$ as StructProperties).Prop, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let p = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as Properties | $.VarRef<Properties> | null)
		if (strings.HasPrefix($.pointerValue<Properties>(p).Name, "XXX_")) {
			// Internal fields should not appear in tags/origNames maps.
			// They are handled specially when encoding and decoding.
			continue
		}
		if ($.pointerValue<Properties>(p).Required) {
			reqCount++
		}
		void (prop$ as StructProperties).decoderTags.put($.pointerValue<Properties>(p).Tag, i)
		$.mapSet((prop$ as StructProperties).decoderOrigNames, $.pointerValue<Properties>(p).OrigName, i)
	}
	;(prop$ as StructProperties).reqCount = reqCount

	return prop
}

export let enumValueMaps: globalThis.Map<string, globalThis.Map<string, number> | null> | null = $.makeMap<string, globalThis.Map<string, number> | null>()

export function __goscript_set_enumValueMaps(__goscriptValue: globalThis.Map<string, globalThis.Map<string, number> | null> | null): void {
	enumValueMaps = __goscriptValue
}

export let enumStringMaps: globalThis.Map<string, globalThis.Map<number, string> | null> | null = $.makeMap<string, globalThis.Map<number, string> | null>()

export function __goscript_set_enumStringMaps(__goscriptValue: globalThis.Map<string, globalThis.Map<number, string> | null> | null): void {
	enumStringMaps = __goscriptValue
}

export function RegisterEnum(typeName: string, unusedNameMap: globalThis.Map<number, string> | null, valueMap: globalThis.Map<string, number> | null): void {
	{
		let [, ok] = $.mapGet<string, globalThis.Map<string, number> | null, globalThis.Map<string, number> | null>(enumValueMaps, typeName, null)
		if (ok) {
			$.panic($.concatString("proto: duplicate enum registered: ", typeName))
		}
	}
	$.mapSet(enumValueMaps, typeName, valueMap)
	{
		let [, ok] = $.mapGet<string, globalThis.Map<number, string> | null, globalThis.Map<number, string> | null>(enumStringMaps, typeName, null)
		if (ok) {
			$.panic($.concatString("proto: duplicate enum registered: ", typeName))
		}
	}
	$.mapSet(enumStringMaps, typeName, unusedNameMap)
}

export function EnumValueMap(enumType: string): globalThis.Map<string, number> | null {
	return $.mapGet<string, globalThis.Map<string, number> | null, globalThis.Map<string, number> | null>(enumValueMaps, enumType, null)[0]
}

export var protoTypedNils: globalThis.Map<string, __goscript_lib.Message | null> | null

export function __goscript_init_protoTypedNils(): void {
	if (((protoTypedNils) as any) === undefined) {
		protoTypedNils = $.makeMap<string, __goscript_lib.Message | null>()
	}
}

export function __goscript_get_protoTypedNils(): globalThis.Map<string, __goscript_lib.Message | null> | null {
	if (((protoTypedNils) as any) === undefined) {
		__goscript_init_protoTypedNils()
	}
	return protoTypedNils
}

export function __goscript_set_protoTypedNils(__goscriptValue: globalThis.Map<string, __goscript_lib.Message | null> | null): void {
	protoTypedNils = __goscriptValue
}

export let protoMapTypes: globalThis.Map<string, reflect.Type | null> | null = $.makeMap<string, reflect.Type | null>()

export function __goscript_set_protoMapTypes(__goscriptValue: globalThis.Map<string, reflect.Type | null> | null): void {
	protoMapTypes = __goscriptValue
}

export var revProtoTypes: globalThis.Map<reflect.Type | null, string> | null

export function __goscript_init_revProtoTypes(): void {
	if (((revProtoTypes) as any) === undefined) {
		revProtoTypes = $.makeMap<reflect.Type | null, string>()
	}
}

export function __goscript_get_revProtoTypes(): globalThis.Map<reflect.Type | null, string> | null {
	if (((revProtoTypes) as any) === undefined) {
		__goscript_init_revProtoTypes()
	}
	return revProtoTypes
}

export function __goscript_set_revProtoTypes(__goscriptValue: globalThis.Map<reflect.Type | null, string> | null): void {
	revProtoTypes = __goscriptValue
}

export async function RegisterType(x: __goscript_lib.Message | null, name: string): globalThis.Promise<void> {
	{
		let [, ok] = $.mapGet<string, __goscript_lib.Message | null, __goscript_lib.Message | null>(__goscript_get_protoTypedNils(), name, null)
		if (ok) {
			// TODO: Some day, make this a panic.
			await log.Printf("proto: duplicate proto type registered: %s", $.arrayToSlice<any>([name]))
			return
		}
	}
	let t = reflect.TypeOf((x as any))
	{
		let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((x as any))))
		if (($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) && ($.markAsStructValue($.cloneStructValue(v)).Pointer() == 0)) {
			// Generated code always calls RegisterType with nil x.
			// This check is just for extra safety.
			$.mapSet(__goscript_get_protoTypedNils(), name, x)
		} else {
			$.mapSet(__goscript_get_protoTypedNils(), name, $.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(t)!))).Interface(), "proto.Message"))
		}
	}
	$.mapSet(__goscript_get_revProtoTypes(), t, name)
}

export async function RegisterMapType(x: any, name: string): globalThis.Promise<void> {
	if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(x)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 21) {
		$.panic(await fmt.Sprintf("RegisterMapType(%T, %q); want map", x, name))
	}
	{
		let [, ok] = $.mapGet<string, reflect.Type | null, reflect.Type | null>(protoMapTypes, name, null)
		if (ok) {
			await log.Printf("proto: duplicate proto type registered: %s", $.arrayToSlice<any>([name]))
			return
		}
	}
	let t = reflect.TypeOf(x)
	$.mapSet(protoMapTypes, name, t)
	$.mapSet(__goscript_get_revProtoTypes(), t, name)
}

export async function MessageName(x: __goscript_lib.Message | null): globalThis.Promise<string> {
	type xname = {
		XXX_MessageName(): string
	}

	$.registerInterfaceType(
		"proto.xname",
		null,
		[$.methodSignature("XXX_MessageName", [], [/* @__PURE__ */ $.basicType("string")])]
	);
	{
		let [m, ok] = $.typeAssertTuple<xname | null>(x, "proto.xname")
		if (ok) {
			return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<xname, null>) : $.pointerValue<Exclude<xname, null>>(m)).XXX_MessageName()
		}
	}
	return $.mapGet<reflect.Type | null, string, string>(__goscript_get_revProtoTypes(), reflect.TypeOf((x as any)), "")[0]
}

export function MessageType(name: string): reflect.Type | null {
	{
		let [t, ok] = $.mapGet<string, __goscript_lib.Message | null, __goscript_lib.Message | null>(__goscript_get_protoTypedNils(), name, null)
		if (ok) {
			return reflect.TypeOf((t as any))
		}
	}
	return $.mapGet<string, reflect.Type | null, reflect.Type | null>(protoMapTypes, name, null)[0]
}

export let protoFiles: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()

export function __goscript_set_protoFiles(__goscriptValue: globalThis.Map<string, $.Slice<number>> | null): void {
	protoFiles = __goscriptValue
}

export function RegisterFile(filename: string, fileDescriptor: $.Slice<number>): void {
	$.mapSet(protoFiles, filename, fileDescriptor)
}

export function FileDescriptor(filename: string): $.Slice<number> {
	return $.mapGet<string, $.Slice<number>, $.Slice<number>>(protoFiles, filename, null)[0]
}

var __goscriptAwait: any
