// Generated file based on editions.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as os from "@goscript/os/index.js"

import * as sync from "@goscript/sync/index.js"

import * as editiondefaults from "@goscript/google.golang.org/protobuf/internal/editiondefaults/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as descriptorpb from "@goscript/google.golang.org/protobuf/types/descriptorpb/index.js"

import * as gofeaturespb from "@goscript/google.golang.org/protobuf/types/gofeaturespb/index.js"

import * as impl from "@goscript/google.golang.org/protobuf/internal/impl/index.js"

import * as protoimpl from "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"

import type * as io from "@goscript/io/index.js"
import "@goscript/fmt/index.js"
import "@goscript/os/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/internal/editiondefaults/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/types/descriptorpb/index.js"
import "@goscript/google.golang.org/protobuf/types/gofeaturespb/index.js"
import "@goscript/google.golang.org/protobuf/internal/impl/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"

export let defaults: descriptorpb.FeatureSetDefaults | $.VarRef<descriptorpb.FeatureSetDefaults> | null = new descriptorpb.FeatureSetDefaults()

export function __goscript_set_defaults(__goscriptValue: descriptorpb.FeatureSetDefaults | $.VarRef<descriptorpb.FeatureSetDefaults> | null): void {
	defaults = __goscriptValue
}

export let defaultsCacheMu: $.VarRef<sync.Mutex> = $.varRef($.markAsStructValue(new sync.Mutex()))

export function __goscript_set_defaultsCacheMu(__goscriptValue: sync.Mutex): void {
	$.assignStruct(defaultsCacheMu.value, __goscriptValue)
}

export let defaultsCache: globalThis.Map<filedesc.Edition, descriptorpb.FeatureSet | $.VarRef<descriptorpb.FeatureSet> | null> | null = $.makeMap<filedesc.Edition, descriptorpb.FeatureSet | $.VarRef<descriptorpb.FeatureSet> | null>()

export function __goscript_set_defaultsCache(__goscriptValue: globalThis.Map<filedesc.Edition, descriptorpb.FeatureSet | $.VarRef<descriptorpb.FeatureSet> | null> | null): void {
	defaultsCache = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	let err = await proto.Unmarshal(editiondefaults.Defaults, $.interfaceValue<proto.Message | null>(defaults, "*descriptorpb.FeatureSetDefaults", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSetDefaults")))
	if (err != null) {
		await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(os.Stderr, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))!, "unmarshal editions defaults: %v\n", (err as any))
		os.Exit(1)
	}
}

export function fromEditionProto(epb: descriptorpb.Edition): filedesc.Edition {
	return $.int(epb, 32)
}

export async function toEditionProto(ed: filedesc.Edition): globalThis.Promise<descriptorpb.Edition> {
	switch (ed) {
		case filedesc.EditionUnknown:
		{
			return 0
			break
		}
		case filedesc.EditionProto2:
		{
			return 998
			break
		}
		case filedesc.EditionProto3:
		{
			return 999
			break
		}
		case filedesc.Edition2023:
		{
			return 1000
			break
		}
		default:
		{
			$.panic(await fmt.Sprintf("unknown value for edition: %v", $.namedValueInterfaceValue<any>(ed, "filedesc.Edition", {}, /* @__PURE__ */ $.basicType("int32", "filedesc.Edition"))))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function getFeatureSetFor(ed: filedesc.Edition): globalThis.Promise<descriptorpb.FeatureSet | $.VarRef<descriptorpb.FeatureSet> | null> {
	using __defer = new $.DisposableStack()
	await defaultsCacheMu.value.Lock()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())(defaultsCacheMu.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })
	{
		let __goscriptTuple0: any = $.mapGet<filedesc.Edition, descriptorpb.FeatureSet | $.VarRef<descriptorpb.FeatureSet> | null, descriptorpb.FeatureSet | $.VarRef<descriptorpb.FeatureSet> | null>(defaultsCache, ed, null)
		let def: descriptorpb.FeatureSet | $.VarRef<descriptorpb.FeatureSet> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			return def
		}
	}
	let edpb = await toEditionProto(ed)
	if (((defaults !== null && (defaults as any).__isVarRef !== true && (defaults as any).__goValue === undefined ? ((defaults as any) as descriptorpb.FeatureSetDefaults).GetMinimumEdition() : descriptorpb.FeatureSetDefaults.prototype.GetMinimumEdition.call(defaults)) > edpb) || ((defaults !== null && (defaults as any).__isVarRef !== true && (defaults as any).__goValue === undefined ? ((defaults as any) as descriptorpb.FeatureSetDefaults).GetMaximumEdition() : descriptorpb.FeatureSetDefaults.prototype.GetMaximumEdition.call(defaults)) < edpb)) {
		// This should never happen protodesc.(FileOptions).New would fail when
		// initializing the file descriptor.
		// This most likely means the embedded defaults were not updated.
		await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(os.Stderr, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))!, "internal error: unsupported edition %v (did you forget to update the embedded defaults (i.e. the bootstrap descriptor proto)?)\n", $.namedValueInterfaceValue<any>(edpb, "descriptorpb.Edition", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
		os.Exit(1)
	}
	let fsed: descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault | $.VarRef<descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault> | null = $.arrayIndex((defaults !== null && (defaults as any).__isVarRef !== true && (defaults as any).__goValue === undefined ? ((defaults as any) as descriptorpb.FeatureSetDefaults).GetDefaults() : descriptorpb.FeatureSetDefaults.prototype.GetDefaults.call(defaults))!, 0)
	// Using a linear search for now.
	// Editions are guaranteed to be sorted and thus we could use a binary search.
	// Given that there are only a handful of editions (with one more per year)
	// there is not much reason to use a binary search.
	for (let __goscriptRangeTarget0 = (defaults !== null && (defaults as any).__isVarRef !== true && (defaults as any).__goValue === undefined ? ((defaults as any) as descriptorpb.FeatureSetDefaults).GetDefaults() : descriptorpb.FeatureSetDefaults.prototype.GetDefaults.call(defaults)), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let def = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault | $.VarRef<descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault> | null)
		if ((def !== null && (def as any).__isVarRef !== true && (def as any).__goValue === undefined ? ((def as any) as descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault).GetEdition() : descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault.prototype.GetEdition.call(def)) <= edpb) {
			fsed = def
		} else {
			break
		}
	}
	let fs: descriptorpb.FeatureSet | $.VarRef<descriptorpb.FeatureSet> | null = $.mustTypeAssert<descriptorpb.FeatureSet | $.VarRef<descriptorpb.FeatureSet> | null>(await proto.Clone($.interfaceValue<proto.Message | null>((fsed !== null && (fsed as any).__isVarRef !== true && (fsed as any).__goValue === undefined ? ((fsed as any) as descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault).GetFixedFeatures() : descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault.prototype.GetFixedFeatures.call(fsed)), "*descriptorpb.FeatureSet", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet"))), /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet"))
	await proto.Merge($.interfaceValue<proto.Message | null>(fs, "*descriptorpb.FeatureSet", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet")), $.interfaceValue<proto.Message | null>((fsed !== null && (fsed as any).__isVarRef !== true && (fsed as any).__goValue === undefined ? ((fsed as any) as descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault).GetOverridableFeatures() : descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault.prototype.GetOverridableFeatures.call(fsed)), "*descriptorpb.FeatureSet", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet")))
	$.mapSet(defaultsCache, ed, fs)
	return fs
}

export async function mergeEditionFeatures(parentDesc: protoreflect.Descriptor | null, child: descriptorpb.FeatureSet | $.VarRef<descriptorpb.FeatureSet> | null): globalThis.Promise<filedesc.EditionFeatures> {
	const child$: descriptorpb.FeatureSet = child == null ? $.pointerTarget<descriptorpb.FeatureSet>(child) : (child as any).__isVarRef === true ? (child as any).value : (child as any).__goValue === undefined ? (child as any) : $.pointerTarget<descriptorpb.FeatureSet>(child)
	let parentFS: filedesc.EditionFeatures = new filedesc.EditionFeatures(undefined, true)
	{
		const __goscriptTypeSwitchValue = parentDesc
		switch (true) {
			case $.typeAssert<filedesc.File | $.VarRef<filedesc.File> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("filedesc.File")).ok:
				{
					let p: filedesc.File | $.VarRef<filedesc.File> | null = $.typeAssert<filedesc.File | $.VarRef<filedesc.File> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("filedesc.File")).value
					parentFS = $.assignStruct(parentFS, $.pointerValue<filedesc.File>(p).L1.EditionFeatures)
				}
				break
			case $.typeAssert<filedesc.Message | $.VarRef<filedesc.Message> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("filedesc.Message")).ok:
				{
					let p: filedesc.Message | $.VarRef<filedesc.Message> | null = $.typeAssert<filedesc.Message | $.VarRef<filedesc.Message> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("filedesc.Message")).value
					parentFS = $.assignStruct(parentFS, $.pointerValue<filedesc.Message>(p).L1.EditionFeatures)
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
	if (child == null) {
		return (parentFS).clone()
	}
	{
		let fp: $.VarRef<descriptorpb.FeatureSet_FieldPresence> | null = (child$ as descriptorpb.FeatureSet).FieldPresence
		if (fp != null) {
			parentFS.IsFieldPresence = ($.pointerValue<descriptorpb.FeatureSet_FieldPresence>(fp) == 3) || ($.pointerValue<descriptorpb.FeatureSet_FieldPresence>(fp) == 1)
			parentFS.IsLegacyRequired = $.pointerValue<descriptorpb.FeatureSet_FieldPresence>(fp) == 3
		}
	}
	{
		let et: $.VarRef<descriptorpb.FeatureSet_EnumType> | null = (child$ as descriptorpb.FeatureSet).EnumType
		if (et != null) {
			parentFS.IsOpenEnum = $.pointerValue<descriptorpb.FeatureSet_EnumType>(et) == 1
		}
	}

	{
		let rfe: $.VarRef<descriptorpb.FeatureSet_RepeatedFieldEncoding> | null = (child$ as descriptorpb.FeatureSet).RepeatedFieldEncoding
		if (rfe != null) {
			parentFS.IsPacked = $.pointerValue<descriptorpb.FeatureSet_RepeatedFieldEncoding>(rfe) == 1
		}
	}

	{
		let utf8val: $.VarRef<descriptorpb.FeatureSet_Utf8Validation> | null = (child$ as descriptorpb.FeatureSet).Utf8Validation
		if (utf8val != null) {
			parentFS.IsUTF8Validated = $.pointerValue<descriptorpb.FeatureSet_Utf8Validation>(utf8val) == 2
		}
	}

	{
		let me: $.VarRef<descriptorpb.FeatureSet_MessageEncoding> | null = (child$ as descriptorpb.FeatureSet).MessageEncoding
		if (me != null) {
			parentFS.IsDelimitedEncoded = $.pointerValue<descriptorpb.FeatureSet_MessageEncoding>(me) == 2
		}
	}

	{
		let jf: $.VarRef<descriptorpb.FeatureSet_JsonFormat> | null = (child$ as descriptorpb.FeatureSet).JsonFormat
		if (jf != null) {
			parentFS.IsJSONCompliant = $.pointerValue<descriptorpb.FeatureSet_JsonFormat>(jf) == 1
		}
	}

	{
		let __goscriptTuple1: any = $.typeAssertTuple<gofeaturespb.GoFeatures | $.VarRef<gofeaturespb.GoFeatures> | null>(await proto.GetExtension($.interfaceValue<proto.Message | null>(child, "*descriptorpb.FeatureSet", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet")), $.interfaceValue<protoreflect.ExtensionType | null>(gofeaturespb.E_Go, "*impl.ExtensionInfo", /* @__PURE__ */ $.pointerType("impl.ExtensionInfo"))), /* @__PURE__ */ $.pointerType("gofeaturespb.GoFeatures"))
		let goFeatures: gofeaturespb.GoFeatures | $.VarRef<gofeaturespb.GoFeatures> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (ok && (goFeatures != null)) {
			{
				let luje = $.pointerValue<gofeaturespb.GoFeatures>(goFeatures).LegacyUnmarshalJsonEnum
				if (luje != null) {
					parentFS.GenerateLegacyUnmarshalJSON = $.pointerValue<boolean>(luje)
				}
			}
		}
	}

	return (parentFS).clone()
}

export async function initFileDescFromFeatureSet(fd: filedesc.File | $.VarRef<filedesc.File> | null, fs: descriptorpb.FeatureSet | $.VarRef<descriptorpb.FeatureSet> | null): globalThis.Promise<void> {
	const fd$: filedesc.File = fd == null ? $.pointerTarget<filedesc.File>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<filedesc.File>(fd)
	let dfs: descriptorpb.FeatureSet | $.VarRef<descriptorpb.FeatureSet> | null = await getFeatureSetFor((fd$ as filedesc.File).L1.Edition)
	// initialize the featureset with the defaults
	$.assignStruct((fd$ as filedesc.File).L1.EditionFeatures, await mergeEditionFeatures($.interfaceValue<protoreflect.Descriptor | null>(fd, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File")), dfs))
	// overwrite any options explicitly specified
	$.assignStruct((fd$ as filedesc.File).L1.EditionFeatures, await mergeEditionFeatures($.interfaceValue<protoreflect.Descriptor | null>(fd, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File")), fs))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (descriptorpb.Edition_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (descriptorpb.Edition_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (descriptorpb.Edition_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (descriptorpb.Edition_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (descriptorpb.Edition_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (descriptorpb.Edition_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

export { __goscriptInit0 }
