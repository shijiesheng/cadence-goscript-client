// Generated file based on legacy_enum.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import type * as __goscript_convert from "./convert.gs.ts"

import * as __goscript_legacy_file from "./legacy_file.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "./legacy_file.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.legacyEnumType", "impl.legacyEnumWrapper"])

export class legacyEnumType {
	public get desc(): protoreflect.EnumDescriptor | null {
		return this._fields.desc
	}

	public set desc(value: protoreflect.EnumDescriptor | null) {
		this._fields.desc = value
	}

	public get goType(): reflect.Type | null {
		return this._fields.goType
	}

	public set goType(value: reflect.Type | null) {
		this._fields.goType = value
	}

	public get m(): sync.Map {
		return this._fields.m
	}

	public set m(value: sync.Map) {
		this._fields.m = value
	}

	public _fields: {
		desc: protoreflect.EnumDescriptor | null
		goType: reflect.Type | null
		m: sync.Map
	}

	constructor(init?: Partial<{desc?: protoreflect.EnumDescriptor | null, goType?: reflect.Type | null, m?: sync.Map}>, __goscriptValue?: boolean) {
		this._fields = {
			desc: init?.desc ?? (null! as protoreflect.EnumDescriptor | null),
			goType: init?.goType ?? (null! as reflect.Type | null),
			m: init?.m ? $.markAsStructValue($.cloneStructValue(init.m)) : $.markAsStructValue(new sync.Map())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): legacyEnumType {
		return new legacyEnumType(this, true)
	}

	public __goscriptAssign(source: legacyEnumType): void {
		const target = this._fields
		const values = source._fields
		target.desc = $.assignFieldValue(target.desc, values.desc, "protoreflect.EnumDescriptor")
		target.goType = $.assignFieldValue(target.goType, values.goType, "reflect.Type")
		$.assignStruct(target.m, values.m)
	}

	public Descriptor(): protoreflect.EnumDescriptor | null {
		const t: legacyEnumType | $.VarRef<legacyEnumType> | null = this;
		return $.pointerValue<legacyEnumType>(t).desc
	}

	public async New(n: protoreflect.EnumNumber): globalThis.Promise<protoreflect.Enum | null> {
		const t: legacyEnumType | $.VarRef<legacyEnumType> | null = this;
		const t$: legacyEnumType = t == null ? $.pointerTarget<legacyEnumType>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<legacyEnumType>(t)
		{
			let [e, ok] = await (t$ as legacyEnumType).m.Load($.namedValueInterfaceValue<any>(n, "protoreflect.EnumNumber", {}, /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")))
			if (ok) {
				return $.mustTypeAssert<protoreflect.Enum | null>(e, "protoreflect.Enum")
			}
		}
		let e: legacyEnumWrapper | $.VarRef<legacyEnumWrapper> | null = new legacyEnumWrapper({num: n, pbTyp: $.interfaceValue<protoreflect.EnumType | null>(t, "*impl.legacyEnumType", /* @__PURE__ */ $.pointerType("impl.legacyEnumType")), goTyp: (t$ as legacyEnumType).goType})
		await (t$ as legacyEnumType).m.Store($.namedValueInterfaceValue<any>(n, "protoreflect.EnumNumber", {}, /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")), $.interfaceValue(e, "*impl.legacyEnumWrapper", /* @__PURE__ */ $.pointerType("impl.legacyEnumWrapper")))
		return $.interfaceValue<protoreflect.Enum | null>(e, "*impl.legacyEnumWrapper", /* @__PURE__ */ $.pointerType("impl.legacyEnumWrapper"))
	}

	static __typeInfo = $.registerStructType(
		"impl.legacyEnumType",
		() => new legacyEnumType(),
		() => [$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"], true), $.methodSignature("New", [["n", /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]], ["protoreflect.Enum"], true)],
		legacyEnumType,
		() => [/* @__PURE__ */ $.structField("desc", "protoreflect.EnumDescriptor", [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("goType", "reflect.Type", [1], 16, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("m", "sync.Map", [2], 32, false, { pkgPath: "google.golang.org/protobuf/internal/impl" })]
	)
}

export class legacyEnumWrapper {
	public get num(): protoreflect.EnumNumber {
		return this._fields.num
	}

	public set num(value: protoreflect.EnumNumber) {
		this._fields.num = value
	}

	public get pbTyp(): protoreflect.EnumType | null {
		return this._fields.pbTyp
	}

	public set pbTyp(value: protoreflect.EnumType | null) {
		this._fields.pbTyp = value
	}

	public get goTyp(): reflect.Type | null {
		return this._fields.goTyp
	}

	public set goTyp(value: reflect.Type | null) {
		this._fields.goTyp = value
	}

	public _fields: {
		num: protoreflect.EnumNumber
		pbTyp: protoreflect.EnumType | null
		goTyp: reflect.Type | null
	}

	constructor(init?: Partial<{num?: protoreflect.EnumNumber, pbTyp?: protoreflect.EnumType | null, goTyp?: reflect.Type | null}>, __goscriptValue?: boolean) {
		this._fields = {
			num: init?.num ?? (0 as protoreflect.EnumNumber),
			pbTyp: init?.pbTyp ?? (null! as protoreflect.EnumType | null),
			goTyp: init?.goTyp ?? (null! as reflect.Type | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): legacyEnumWrapper {
		return new legacyEnumWrapper(this, true)
	}

	public __goscriptAssign(source: legacyEnumWrapper): void {
		const target = this._fields
		const values = source._fields
		target.num = values.num
		target.pbTyp = $.assignFieldValue(target.pbTyp, values.pbTyp, "protoreflect.EnumType")
		target.goTyp = $.assignFieldValue(target.goTyp, values.goTyp, "reflect.Type")
	}

	public async Descriptor(): globalThis.Promise<protoreflect.EnumDescriptor | null> {
		const e: legacyEnumWrapper | $.VarRef<legacyEnumWrapper> | null = this;
		return $.pointerValue<Exclude<protoreflect.EnumType, null>>($.pointerValue<legacyEnumWrapper>(e).pbTyp).Descriptor()
	}

	public Number(): protoreflect.EnumNumber {
		const e: legacyEnumWrapper | $.VarRef<legacyEnumWrapper> | null = this;
		return $.pointerValue<legacyEnumWrapper>(e).num
	}

	public ProtoReflect(): protoreflect.Enum | null {
		const e: legacyEnumWrapper | $.VarRef<legacyEnumWrapper> | null = this;
		return $.interfaceValue<protoreflect.Enum | null>(e, "*impl.legacyEnumWrapper", /* @__PURE__ */ $.pointerType("impl.legacyEnumWrapper"))
	}

	public Type(): protoreflect.EnumType | null {
		const e: legacyEnumWrapper | $.VarRef<legacyEnumWrapper> | null = this;
		return $.pointerValue<legacyEnumWrapper>(e).pbTyp
	}

	public protoUnwrap(): any {
		const e: legacyEnumWrapper | $.VarRef<legacyEnumWrapper> | null = this;
		const e$: legacyEnumWrapper = e == null ? $.pointerTarget<legacyEnumWrapper>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<legacyEnumWrapper>(e)
		let v = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((e$ as legacyEnumWrapper).goTyp)!))).Elem()))
		$.markAsStructValue($.cloneStructValue(v)).SetInt($.int64((e$ as legacyEnumWrapper).num))
		return $.markAsStructValue($.cloneStructValue(v)).Interface()
	}

	static __typeInfo = $.registerStructType(
		"impl.legacyEnumWrapper",
		() => new legacyEnumWrapper(),
		() => [$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"], true), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Enum"], true), $.methodSignature("Type", [], ["protoreflect.EnumType"], true), $.methodSignature("protoUnwrap", [], [{ kind: $.TypeKind.Interface, methods: [] }], true)],
		legacyEnumWrapper,
		() => [/* @__PURE__ */ $.structField("num", /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("pbTyp", "protoreflect.EnumType", [1], 8, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("goTyp", "reflect.Type", [2], 24, false, { pkgPath: "google.golang.org/protobuf/internal/impl" })]
	)
}

export async function legacyEnumName(ed: protoreflect.EnumDescriptor | null): globalThis.Promise<string> {
	let protoPkg: string = ""
	let enumName = (__goscriptAwait = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? (ed as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(ed)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	{
		let fd = (__goscriptAwait = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? (ed as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(ed)).ParentFile(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (fd != null) {
			protoPkg = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FileDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>(fd)).Package(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			enumName = strings.TrimPrefix(enumName, $.concatString(protoPkg, "."))
		}
	}
	if ($.stringEqual(protoPkg, "")) {
		return strs.GoCamelCase(enumName)
	}
	return $.concatString(($.concatString(protoPkg, ".")), strs.GoCamelCase(enumName))
}

export async function legacyWrapEnum(v: reflect.Value): globalThis.Promise<protoreflect.Enum | null> {
	let et = await legacyLoadEnumType($.markAsStructValue($.cloneStructValue(v)).Type())
	return (et !== null && (et as any).__isVarRef !== true && (et as any).__goValue === undefined ? (et as Exclude<protoreflect.EnumType, null>) : $.pointerValue<Exclude<protoreflect.EnumType, null>>(et)).New($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32))
}

export let legacyEnumTypeCache: $.VarRef<sync.Map> = $.varRef($.markAsStructValue(new sync.Map()))

export function __goscript_set_legacyEnumTypeCache(__goscriptValue: sync.Map): void {
	$.assignStruct(legacyEnumTypeCache.value, __goscriptValue)
}

export async function legacyLoadEnumType(t: reflect.Type | null): globalThis.Promise<protoreflect.EnumType | null> {
	// Fast-path: check if a EnumType is cached for this concrete type.
	{
		let [et, ok] = await legacyEnumTypeCache.value.Load((t as any))
		if (ok) {
			return $.mustTypeAssert<protoreflect.EnumType | null>(et, "protoreflect.EnumType")
		}
	}

	// Slow-path: derive enum descriptor and initialize EnumType.
	let et: protoreflect.EnumType | null = null! as protoreflect.EnumType | null
	let ed = await LegacyLoadEnumDesc(t)
	et = $.interfaceValue<protoreflect.EnumType | null>(new legacyEnumType({desc: ed, goType: t}), "*impl.legacyEnumType", /* @__PURE__ */ $.pointerType("impl.legacyEnumType"))
	let __goscriptShadow0 = et
	{
		let __goscriptTuple0: any = await legacyEnumTypeCache.value.LoadOrStore((t as any), (__goscriptShadow0 as any))
		let __goscriptShadow1 = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			return $.mustTypeAssert<protoreflect.EnumType | null>(__goscriptShadow1, "protoreflect.EnumType")
		}
	}
	return et
}

export var legacyEnumDescCache: $.VarRef<sync.Map>

export function __goscript_init_legacyEnumDescCache(): void {
	if (((legacyEnumDescCache) as any) === undefined) {
		legacyEnumDescCache = $.varRef($.markAsStructValue(new sync.Map()))
	}
}

export function __goscript_get_legacyEnumDescCache(): $.VarRef<sync.Map> {
	if (((legacyEnumDescCache) as any) === undefined) {
		__goscript_init_legacyEnumDescCache()
	}
	return legacyEnumDescCache
}

export function __goscript_set_legacyEnumDescCache(__goscriptValue: sync.Map): void {
	$.assignStruct(__goscript_get_legacyEnumDescCache().value, __goscriptValue)
}

export async function LegacyLoadEnumDesc(t: reflect.Type | null): globalThis.Promise<protoreflect.EnumDescriptor | null> {
	// Fast-path: check if an EnumDescriptor is cached for this concrete type.
	{
		let [ed, ok] = await $.pointerValue<sync.Map>(__goscript_get_legacyEnumDescCache()).Load((t as any))
		if (ok) {
			return $.mustTypeAssert<protoreflect.EnumDescriptor | null>(ed, "protoreflect.EnumDescriptor")
		}
	}

	// Slow-path: initialize EnumDescriptor from the raw descriptor.
	let ev = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(t)!))).Interface()
	{
		let [, ok] = $.typeAssertTuple<protoreflect.Enum | null>(ev, "protoreflect.Enum")
		if (ok) {
			$.panic(await fmt.Sprintf("%v already implements proto.Enum", (t as any)))
		}
	}
	let [edV1, ok] = $.typeAssertTuple<__goscript_legacy_file.enumV1 | null>(ev, "impl.enumV1")
	if (!ok) {
		return aberrantLoadEnumDesc(t)
	}
	let __goscriptTuple1: any = await (edV1 !== null && (edV1 as any).__isVarRef !== true && (edV1 as any).__goValue === undefined ? (edV1 as Exclude<__goscript_legacy_file.enumV1, null>) : $.pointerValue<Exclude<__goscript_legacy_file.enumV1, null>>(edV1)).EnumDescriptor()
	let b: $.Slice<number> = __goscriptTuple1[0]
	let idxs: $.Slice<number> = __goscriptTuple1[1]

	let ed: protoreflect.EnumDescriptor | null = null! as protoreflect.EnumDescriptor | null
	if ($.sliceLen(idxs) == 1) {
		ed = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>((await __goscript_legacy_file.legacyLoadFileDesc(b))).Enums(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get($.arrayIndex(idxs!, 0)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	} else {
		let md = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>((await __goscript_legacy_file.legacyLoadFileDesc(b))).Messages(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get($.arrayIndex(idxs!, 0)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		for (let __goscriptRangeTarget0 = $.goSlice(idxs, 1, $.sliceLen(idxs) - 1), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let i = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number)
			md = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Messages(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		ed = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Enums(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get($.arrayIndex(idxs!, $.sliceLen(idxs) - 1)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	let __goscriptShadow2 = ed
	{
		let __goscriptTuple2: any = await $.pointerValue<sync.Map>(__goscript_get_legacyEnumDescCache()).LoadOrStore((t as any), (__goscriptShadow2 as any))
		let __goscriptShadow3 = __goscriptTuple2[0]
		let __goscriptShadow4 = __goscriptTuple2[1]
		if (__goscriptShadow4) {
			return $.mustTypeAssert<protoreflect.EnumDescriptor | null>(__goscriptShadow3, "protoreflect.EnumDescriptor")
		}
	}
	return ed
}

export var aberrantEnumDescCache: $.VarRef<sync.Map>

export function __goscript_init_aberrantEnumDescCache(): void {
	if (((aberrantEnumDescCache) as any) === undefined) {
		aberrantEnumDescCache = $.varRef($.markAsStructValue(new sync.Map()))
	}
}

export function __goscript_get_aberrantEnumDescCache(): $.VarRef<sync.Map> {
	if (((aberrantEnumDescCache) as any) === undefined) {
		__goscript_init_aberrantEnumDescCache()
	}
	return aberrantEnumDescCache
}

export function __goscript_set_aberrantEnumDescCache(__goscriptValue: sync.Map): void {
	$.assignStruct(__goscript_get_aberrantEnumDescCache().value, __goscriptValue)
}

export async function aberrantLoadEnumDesc(t: reflect.Type | null): globalThis.Promise<protoreflect.EnumDescriptor | null> {
	// Fast-path: check if an EnumDescriptor is cached for this concrete type.
	{
		let [ed, ok] = await $.pointerValue<sync.Map>(__goscript_get_aberrantEnumDescCache()).Load((t as any))
		if (ok) {
			return $.mustTypeAssert<protoreflect.EnumDescriptor | null>(ed, "protoreflect.EnumDescriptor")
		}
	}

	// Slow-path: construct a bogus, but unique EnumDescriptor.
	let ed: filedesc.Enum | $.VarRef<filedesc.Enum> | null = new filedesc.Enum({L2: new filedesc.EnumL2()})
	let ed$: filedesc.Enum = ed == null ? $.pointerTarget<filedesc.Enum>(ed) : (ed as any).__isVarRef === true ? (ed as any).value : (ed as any).__goValue === undefined ? (ed as any) : $.pointerTarget<filedesc.Enum>(ed);
	;(ed$ as filedesc.Enum).Base.L0.FullName = await AberrantDeriveFullName(t);
	;(ed$ as filedesc.Enum).Base.L0.ParentFile = filedesc.__goscript_get_SurrogateProto3()
	$.assignStruct((ed$ as filedesc.Enum).L1.EditionFeatures, $.pointerValue<filedesc.File>((ed$ as filedesc.Enum).Base.L0.ParentFile).L1.EditionFeatures)
	$.pointerValue<filedesc.EnumL2>((ed$ as filedesc.Enum).L2).Values.List = $.appendOne($.pointerValue<filedesc.EnumL2>((ed$ as filedesc.Enum).L2).Values.List, new filedesc.EnumValue(undefined, true))

	// TODO: Use the presence of a UnmarshalJSON method to determine proto2?

	let vd: filedesc.EnumValue | $.VarRef<filedesc.EnumValue> | null = $.indexRef($.pointerValue<filedesc.EnumL2>((ed$ as filedesc.Enum).L2).Values.List!, 0)
	let vd$: filedesc.EnumValue = vd == null ? $.pointerTarget<filedesc.EnumValue>(vd) : (vd as any).__isVarRef === true ? (vd as any).value : (vd as any).__goValue === undefined ? (vd as any) : $.pointerTarget<filedesc.EnumValue>(vd);
	;(vd$ as filedesc.EnumValue).Base.L0.FullName = $.concatString((ed$ as filedesc.Enum).Base.L0.FullName, "_UNKNOWN");
	;(vd$ as filedesc.EnumValue).Base.L0.ParentFile = (ed$ as filedesc.Enum).Base.L0.ParentFile;
	;(vd$ as filedesc.EnumValue).Base.L0.Parent = $.interfaceValue<protoreflect.Descriptor | null>(ed, "*filedesc.Enum", /* @__PURE__ */ $.pointerType("filedesc.Enum"))

	// TODO: We could use the String method to obtain some enum value names by
	// starting at 0 and print the enum until it produces invalid identifiers.
	// An exhaustive query is clearly impractical, but can be best-effort.

	let __goscriptShadow5 = ed
	{
		let __goscriptTuple3: any = await $.pointerValue<sync.Map>(__goscript_get_aberrantEnumDescCache()).LoadOrStore((t as any), $.interfaceValue(__goscriptShadow5, "*filedesc.Enum", /* @__PURE__ */ $.pointerType("filedesc.Enum")))
		let __goscriptShadow6 = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		if (ok) {
			return $.mustTypeAssert<protoreflect.EnumDescriptor | null>(__goscriptShadow6, "protoreflect.EnumDescriptor")
		}
	}
	return $.interfaceValue<protoreflect.EnumDescriptor | null>(ed, "*filedesc.Enum", /* @__PURE__ */ $.pointerType("filedesc.Enum"))
}

export async function AberrantDeriveFullName(t: reflect.Type | null): globalThis.Promise<protoreflect.FullName> {
	let sanitize: ((r: number) => number | globalThis.Promise<number>) | null = $.functionValue((r: number): number => {
		switch ((true as boolean)) {
			case r == 47:
			{
				return 46
				break
			}
			case (97 <= r) && (r <= 122):
			case (65 <= r) && (r <= 90):
			case (48 <= r) && (r <= 57):
			{
				return r
				break
			}
			default:
			{
				return 95
				break
			}
		}
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int32")], results: [/* @__PURE__ */ $.basicType("int32")] } as $.FunctionTypeInfo))
	let prefix = strings.Map($.syncFunction(sanitize), (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).PkgPath(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	let suffix = strings.Map($.syncFunction(sanitize), (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	if ($.stringEqual(suffix, "")) {
		suffix = await fmt.Sprintf("UnknownX%X", $.basicInterfaceValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf((t as any)))).Pointer(), "uintptr"))
	}

	let ss: $.Slice<string> = $.appendOne(strings.Split(prefix, "."), suffix)
	for (let __goscriptRangeTarget1 = ss, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let s = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as string)
		if (($.stringEqual(s, "")) || ((48 <= $.indexString(s, 0)) && ($.indexString(s, 0) <= 57))) {
			;(__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] = $.concatString("x", s)
		}
	}
	return strings.Join(ss, ".")
}

var __goscriptAwait: any
