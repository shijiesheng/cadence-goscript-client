// Generated file based on editions.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as editiondefaults from "@goscript/google.golang.org/protobuf/internal/editiondefaults/index.js"

import * as genid from "@goscript/google.golang.org/protobuf/internal/genid/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import type * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import type * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import type * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_build from "./build.gs.ts"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_desc_init from "./desc_init.gs.ts"

import * as __goscript_desc_lazy from "./desc_lazy.gs.ts"

import * as __goscript_desc_list from "./desc_list.gs.ts"

import * as __goscript_desc_list_gen from "./desc_list_gen.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/editiondefaults/index.js"
import "@goscript/google.golang.org/protobuf/internal/genid/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/sync/index.js"
import "./build.gs.ts"
import "./desc.gs.ts"
import "./desc_init.gs.ts"
import "./desc_lazy.gs.ts"
import "./desc_list.gs.ts"
import "./desc_list_gen.gs.ts"

export var defaultsCache: globalThis.Map<__goscript_desc.Edition, __goscript_desc.EditionFeatures> | null

export function __goscript_init_defaultsCache(): void {
	if (((defaultsCache) as any) === undefined) {
		defaultsCache = $.makeMap<__goscript_desc.Edition, __goscript_desc.EditionFeatures>()
	}
}

export function __goscript_get_defaultsCache(): globalThis.Map<__goscript_desc.Edition, __goscript_desc.EditionFeatures> | null {
	if (((defaultsCache) as any) === undefined) {
		__goscript_init_defaultsCache()
	}
	return defaultsCache
}

export function __goscript_set_defaultsCache(__goscriptValue: globalThis.Map<__goscript_desc.Edition, __goscript_desc.EditionFeatures> | null): void {
	defaultsCache = __goscriptValue
}

export var defaultsKeys: $.Slice<__goscript_desc.Edition>

export function __goscript_init_defaultsKeys(): void {
	if (((defaultsKeys) as any) === undefined) {
		defaultsKeys = $.arrayToSlice<__goscript_desc.Edition>([])
	}
}

export function __goscript_get_defaultsKeys(): $.Slice<__goscript_desc.Edition> {
	if (((defaultsKeys) as any) === undefined) {
		__goscript_init_defaultsKeys()
	}
	return defaultsKeys
}

export function __goscript_set_defaultsKeys(__goscriptValue: $.Slice<__goscript_desc.Edition>): void {
	defaultsKeys = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await unmarshalEditionDefaults(editiondefaults.Defaults)
	$.assignStruct($.pointerValue<__goscript_desc.File>(__goscript_desc.__goscript_get_SurrogateProto2()).L1.EditionFeatures, await getFeaturesFor(998))
	$.assignStruct($.pointerValue<__goscript_desc.File>(__goscript_desc.__goscript_get_SurrogateProto3()).L1.EditionFeatures, await getFeaturesFor(999))
	$.assignStruct($.pointerValue<__goscript_desc.File>(__goscript_desc.__goscript_get_SurrogateEdition2023()).L1.EditionFeatures, await getFeaturesFor(1000))
}

export async function unmarshalGoFeature(b: $.Slice<number>, parent: __goscript_desc.EditionFeatures): globalThis.Promise<__goscript_desc.EditionFeatures> {
	while ($.sliceLen(b) > 0) {
		let [num, , n] = protowire.ConsumeTag(b)
		b = $.goSlice(b, n, undefined)
		switch (num) {
			case genid.GoFeatures_LegacyUnmarshalJsonEnum_field_number:
			{
				let [v, m] = protowire.ConsumeVarint(b)
				b = $.goSlice(b, m, undefined)
				parent.GenerateLegacyUnmarshalJSON = protowire.DecodeBool(v)
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("unkown field number %d while unmarshalling GoFeatures", $.namedValueInterfaceValue<any>(num, "protowire.Number", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
				break
			}
		}
	}
	return (parent).clone()
}

export async function unmarshalFeatureSet(b: $.Slice<number>, parent: __goscript_desc.EditionFeatures): globalThis.Promise<__goscript_desc.EditionFeatures> {
	while ($.sliceLen(b) > 0) {
		let [num, typ, n] = protowire.ConsumeTag(b)
		b = $.goSlice(b, n, undefined)
		switch (typ) {
			case protowire.VarintType:
			{
				let [v, m] = protowire.ConsumeVarint(b)
				b = $.goSlice(b, m, undefined)
				switch (num) {
					case genid.FeatureSet_FieldPresence_field_number:
					{
						parent.IsFieldPresence = (v == 1n) || (v == 3n)
						parent.IsLegacyRequired = v == 3n
						break
					}
					case genid.FeatureSet_EnumType_field_number:
					{
						parent.IsOpenEnum = v == 1n
						break
					}
					case genid.FeatureSet_RepeatedFieldEncoding_field_number:
					{
						parent.IsPacked = v == 1n
						break
					}
					case genid.FeatureSet_Utf8Validation_field_number:
					{
						parent.IsUTF8Validated = v == 2n
						break
					}
					case genid.FeatureSet_MessageEncoding_field_number:
					{
						parent.IsDelimitedEncoded = v == 2n
						break
					}
					case genid.FeatureSet_JsonFormat_field_number:
					{
						parent.IsJSONCompliant = v == 1n
						break
					}
					default:
					{
						$.panic(await fmt.Sprintf("unkown field number %d while unmarshalling FeatureSet", $.namedValueInterfaceValue<any>(num, "protowire.Number", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
						break
					}
				}
				break
			}
			case protowire.BytesType:
			{
				let __goscriptTuple0: any = protowire.ConsumeBytes(b)
				let v: $.Slice<number> = __goscriptTuple0[0]
				let m = __goscriptTuple0[1]
				b = $.goSlice(b, m, undefined)
				switch (num) {
					case genid.GoFeatures_LegacyUnmarshalJsonEnum_field_number:
					{
						parent = $.assignStruct(parent, await unmarshalGoFeature(v, (parent).clone()))
						break
					}
				}
				break
			}
		}
	}

	return (parent).clone()
}

export async function featuresFromParentDesc(parentDesc: protoreflect.Descriptor | null): globalThis.Promise<__goscript_desc.EditionFeatures> {
	let parentFS: __goscript_desc.EditionFeatures = new __goscript_desc.EditionFeatures(undefined, true)
	{
		const __goscriptTypeSwitchValue = parentDesc
		switch (true) {
			case $.typeAssert<__goscript_desc.File | $.VarRef<__goscript_desc.File> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("filedesc.File")).ok:
				{
					let p: __goscript_desc.File | $.VarRef<__goscript_desc.File> | null = $.typeAssert<__goscript_desc.File | $.VarRef<__goscript_desc.File> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("filedesc.File")).value
					parentFS = $.assignStruct(parentFS, $.pointerValue<__goscript_desc.File>(p).L1.EditionFeatures)
				}
				break
			case $.typeAssert<__goscript_desc.Message | $.VarRef<__goscript_desc.Message> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("filedesc.Message")).ok:
				{
					let p: __goscript_desc.Message | $.VarRef<__goscript_desc.Message> | null = $.typeAssert<__goscript_desc.Message | $.VarRef<__goscript_desc.Message> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("filedesc.Message")).value
					parentFS = $.assignStruct(parentFS, $.pointerValue<__goscript_desc.Message>(p).L1.EditionFeatures)
				}
				break
			default:
				{
					let p: any = __goscriptTypeSwitchValue
					$.panic(await fmt.Sprintf("unknown parent type %T", (parentDesc as any)))
				}
				break
		}
	}
	return (parentFS).clone()
}

export async function unmarshalEditionDefault(b: $.Slice<number>): globalThis.Promise<void> {
	let ed: __goscript_desc.Edition = 0
	let fs: __goscript_desc.EditionFeatures = new __goscript_desc.EditionFeatures(undefined, true)
	while ($.sliceLen(b) > 0) {
		let [num, typ, n] = protowire.ConsumeTag(b)
		b = $.goSlice(b, n, undefined)
		switch (typ) {
			case protowire.VarintType:
			{
				let [v, m] = protowire.ConsumeVarint(b)
				b = $.goSlice(b, m, undefined)
				switch (num) {
					case genid.FeatureSetDefaults_FeatureSetEditionDefault_Edition_field_number:
					{
						ed = $.int(v, 32)
						break
					}
				}
				break
			}
			case protowire.BytesType:
			{
				let __goscriptTuple1: any = protowire.ConsumeBytes(b)
				let v: $.Slice<number> = __goscriptTuple1[0]
				let m = __goscriptTuple1[1]
				b = $.goSlice(b, m, undefined)
				switch (num) {
					case genid.FeatureSetDefaults_FeatureSetEditionDefault_FixedFeatures_field_number:
					{
						fs = $.assignStruct(fs, await unmarshalFeatureSet(v, (fs).clone()))
						break
					}
					case genid.FeatureSetDefaults_FeatureSetEditionDefault_OverridableFeatures_field_number:
					{
						fs = $.assignStruct(fs, await unmarshalFeatureSet(v, (fs).clone()))
						break
					}
				}
				break
			}
		}
	}
	$.mapSet(__goscript_get_defaultsCache(), ed, (fs).clone())
	__goscript_set_defaultsKeys($.appendOne(__goscript_get_defaultsKeys(), $.int(ed, 32)))
}

export async function unmarshalEditionDefaults(b: $.Slice<number>): globalThis.Promise<void> {
	while ($.sliceLen(b) > 0) {
		let [num, , n] = protowire.ConsumeTag(b)
		b = $.goSlice(b, n, undefined)
		switch (num) {
			case genid.FeatureSetDefaults_Defaults_field_number:
			{
				let __goscriptTuple2: any = protowire.ConsumeBytes(b)
				let def: $.Slice<number> = __goscriptTuple2[0]
				let m = __goscriptTuple2[1]
				b = $.goSlice(b, m, undefined)
				await unmarshalEditionDefault(def)
				break
			}
			case genid.FeatureSetDefaults_MinimumEdition_field_number:
			case genid.FeatureSetDefaults_MaximumEdition_field_number:
			{
				let [, m] = protowire.ConsumeVarint(b)
				b = $.goSlice(b, m, undefined)
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("unkown field number %d while unmarshalling EditionDefault", $.namedValueInterfaceValue<any>(num, "protowire.Number", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
				break
			}
		}
	}
}

export async function getFeaturesFor(ed: __goscript_desc.Edition): globalThis.Promise<__goscript_desc.EditionFeatures> {
	let match = 0
	for (let __goscriptRangeTarget0 = __goscript_get_defaultsKeys(), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let key = $.int((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_desc.Edition), 32)
		if (key > ed) {
			break
		}
		match = key
	}
	if (match == 0) {
		$.panic(await fmt.Sprintf("unsupported edition: %v", $.namedValueInterfaceValue<any>(ed, "filedesc.Edition", {}, /* @__PURE__ */ $.basicType("int32", "filedesc.Edition"))))
	}
	return ($.mapGet<__goscript_desc.Edition, __goscript_desc.EditionFeatures, __goscript_desc.EditionFeatures>(__goscript_get_defaultsCache(), match, new __goscript_desc.EditionFeatures(undefined, true))[0]).clone()
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({IsValid: (receiver: any, ...args: any[]) => (protowire.Number_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "protowire.Number"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])])
}

export { __goscriptInit0 }
