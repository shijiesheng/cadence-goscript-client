// Generated file based on type.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as encoding from "@goscript/encoding/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as maps from "@goscript/maps/index.js"

import * as os from "@goscript/os/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_encoder from "./encoder.gs.ts"

import * as __goscript_error from "./error.gs.ts"
import "@goscript/encoding/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/maps/index.js"
import "@goscript/os/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/unicode/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/io/index.js"
import "./encode.gs.ts"
import "./encoder.gs.ts"
import "./error.gs.ts"

$.registerTypePackagePath("encoding/gob", ["gob.userTypeInfo", "gob.typeId", "gob.gobType", "gob.CommonType", "gob.arrayType", "gob.gobEncoderType", "gob.mapType", "gob.sliceType", "gob.fieldType", "gob.structType", "gob.wireType", "gob.typeInfo", "gob.GobEncoder", "gob.GobDecoder"])

export type typeId = number

$.registerNamedValueType(
	"gob.typeId",
	{gobType: (receiver: any, ...args: any[]) => (typeId_gobType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), name: (receiver: any, ...args: any[]) => (typeId_name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), string: (receiver: any, ...args: any[]) => (typeId__string as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("gobType", [], ["gob.gobType"]), $.methodSignature("name", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("string", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*gob.typeId",
	{gobType: (receiver: any, ...args: any[]) => (typeId_gobType as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), name: (receiver: any, ...args: any[]) => (typeId_name as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), string: (receiver: any, ...args: any[]) => (typeId__string as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("gobType", [], ["gob.gobType"]), $.methodSignature("name", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("string", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type gobType = {
	id(): typeId
	name(): string
	safeString(seen: globalThis.Map<typeId, boolean> | null): string | globalThis.Promise<string>
	setId(id: typeId): void
	string(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"gob.gobType",
	null,
	[$.methodSignature("id", [], [/* @__PURE__ */ $.basicType("int32", "gob.typeId")]), $.methodSignature("name", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("safeString", [["seen", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "gob.typeId"), /* @__PURE__ */ $.basicType("bool"))]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("setId", [["id", /* @__PURE__ */ $.basicType("int32", "gob.typeId")]]), $.methodSignature("string", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type GobEncoder = {
	GobEncode(): [$.Slice<number>, $.GoError]
}

$.registerInterfaceType(
	"gob.GobEncoder",
	null,
	[$.methodSignature("GobEncode", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"])]
);

export type GobDecoder = {
	GobDecode(_p0: $.Slice<number>): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"gob.GobDecoder",
	null,
	[$.methodSignature("GobDecode", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["error"])]
);

export class userTypeInfo {
	public get user(): reflect.Type | null {
		return this._fields.user
	}

	public set user(value: reflect.Type | null) {
		this._fields.user = value
	}

	public get base(): reflect.Type | null {
		return this._fields.base
	}

	public set base(value: reflect.Type | null) {
		this._fields.base = value
	}

	public get indir(): number {
		return this._fields.indir
	}

	public set indir(value: number) {
		this._fields.indir = value
	}

	public get externalEnc(): number {
		return this._fields.externalEnc
	}

	public set externalEnc(value: number) {
		this._fields.externalEnc = value
	}

	public get externalDec(): number {
		return this._fields.externalDec
	}

	public set externalDec(value: number) {
		this._fields.externalDec = value
	}

	public get encIndir(): number {
		return this._fields.encIndir
	}

	public set encIndir(value: number) {
		this._fields.encIndir = value
	}

	public get decIndir(): number {
		return this._fields.decIndir
	}

	public set decIndir(value: number) {
		this._fields.decIndir = value
	}

	public _fields: {
		user: reflect.Type | null
		base: reflect.Type | null
		indir: number
		externalEnc: number
		externalDec: number
		encIndir: number
		decIndir: number
	}

	constructor(init?: Partial<{user?: reflect.Type | null, base?: reflect.Type | null, indir?: number, externalEnc?: number, externalDec?: number, encIndir?: number, decIndir?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			user: init?.user ?? (null! as reflect.Type | null),
			base: init?.base ?? (null! as reflect.Type | null),
			indir: init?.indir ?? (0 as number),
			externalEnc: init?.externalEnc ?? (0 as number),
			externalDec: init?.externalDec ?? (0 as number),
			encIndir: init?.encIndir ?? (0 as number),
			decIndir: init?.decIndir ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): userTypeInfo {
		return new userTypeInfo(this, true)
	}

	public __goscriptAssign(source: userTypeInfo): void {
		const target = this._fields
		const values = source._fields
		target.user = $.assignFieldValue(target.user, values.user, "reflect.Type")
		target.base = $.assignFieldValue(target.base, values.base, "reflect.Type")
		target.indir = values.indir
		target.externalEnc = values.externalEnc
		target.externalDec = values.externalDec
		target.encIndir = values.encIndir
		target.decIndir = values.decIndir
	}

	static __typeInfo = $.registerStructType(
		"gob.userTypeInfo",
		() => new userTypeInfo(),
		() => [],
		userTypeInfo,
		() => [/* @__PURE__ */ $.structField("user", "reflect.Type", [0], 0, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("base", "reflect.Type", [1], 16, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("indir", /* @__PURE__ */ $.basicType("int"), [2], 32, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("externalEnc", /* @__PURE__ */ $.basicType("int"), [3], 40, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("externalDec", /* @__PURE__ */ $.basicType("int"), [4], 48, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("encIndir", /* @__PURE__ */ $.basicType("int8"), [5], 56, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("decIndir", /* @__PURE__ */ $.basicType("int8"), [6], 57, false, { pkgPath: "encoding/gob" })]
	)
}

export class CommonType {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Id(): typeId {
		return this._fields.Id
	}

	public set Id(value: typeId) {
		this._fields.Id = value
	}

	public _fields: {
		Name: string
		Id: typeId
	}

	constructor(init?: Partial<{Name?: string, Id?: typeId}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Id: init?.Id ?? (0 as typeId)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CommonType {
		return new CommonType(this, true)
	}

	public __goscriptAssign(source: CommonType): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Id = values.Id
	}

	public id(): typeId {
		const t: CommonType | $.VarRef<CommonType> | null = this;
		return $.pointerValue<CommonType>(t).Id
	}

	public name(): string {
		const t: CommonType | $.VarRef<CommonType> | null = this;
		return $.pointerValue<CommonType>(t).Name
	}

	public safeString(seen: globalThis.Map<typeId, boolean> | null): string {
		const t: CommonType | $.VarRef<CommonType> | null = this;
		return $.pointerValue<CommonType>(t).Name
	}

	public setId(id: typeId): void {
		let t: CommonType | $.VarRef<CommonType> | null = this;
		$.pointerValue<CommonType>(t).Id = id
	}

	public ["string"](): string {
		const t: CommonType | $.VarRef<CommonType> | null = this;
		return $.pointerValue<CommonType>(t).Name
	}

	static __typeInfo = $.registerStructType(
		"gob.CommonType",
		() => new CommonType(),
		() => [$.methodSignature("id", [], [/* @__PURE__ */ $.basicType("int32", "gob.typeId")], true), $.methodSignature("name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("safeString", [["seen", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "gob.typeId"), /* @__PURE__ */ $.basicType("bool"))]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("setId", [["id", /* @__PURE__ */ $.basicType("int32", "gob.typeId")]], [], true), $.methodSignature("string", [], [/* @__PURE__ */ $.basicType("string")], true)],
		CommonType,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Id", /* @__PURE__ */ $.basicType("int32", "gob.typeId"), [1], 16, true)]
	)
}

export class arrayType {
	public get CommonType(): CommonType {
		return this._fields.CommonType
	}

	public set CommonType(value: CommonType) {
		this._fields.CommonType = value
	}

	public get Elem(): typeId {
		return this._fields.Elem
	}

	public set Elem(value: typeId) {
		this._fields.Elem = value
	}

	public get Len(): number {
		return this._fields.Len
	}

	public set Len(value: number) {
		this._fields.Len = value
	}

	public _fields: {
		CommonType: CommonType
		Elem: typeId
		Len: number
	}

	constructor(init?: Partial<{CommonType?: CommonType, Elem?: typeId, Len?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			CommonType: init?.CommonType ? init.CommonType.clone() : new CommonType(undefined, true),
			Elem: init?.Elem ?? (0 as typeId),
			Len: init?.Len ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): arrayType {
		return new arrayType(this, true)
	}

	public __goscriptAssign(source: arrayType): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.CommonType, values.CommonType)
		target.Elem = values.Elem
		target.Len = values.Len
	}

	public init(elem: gobType | null, len: number): void {
		let a: arrayType | $.VarRef<arrayType> | null = this;
		const a$: arrayType = a == null ? $.pointerTarget<arrayType>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<arrayType>(a)
		// Set our type id before evaluating the element's, in case it's our own.
		setTypeId($.interfaceValue<gobType | null>(a, "*gob.arrayType", /* @__PURE__ */ $.pointerType("gob.arrayType")));
		;(a$ as arrayType).Elem = (elem !== null && (elem as any).__isVarRef !== true && (elem as any).__goValue === undefined ? (elem as Exclude<gobType, null>) : $.pointerValue<Exclude<gobType, null>>(elem)).id();
		;(a$ as arrayType).Len = len
	}

	public async safeString(seen: globalThis.Map<typeId, boolean> | null): globalThis.Promise<string> {
		let a: arrayType | $.VarRef<arrayType> | null = this;
		const a$: arrayType = a == null ? $.pointerTarget<arrayType>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<arrayType>(a)
		if ($.mapGet<typeId, boolean, boolean>(seen, (a$ as arrayType).CommonType.Id, false)[0]) {
			return (a$ as arrayType).CommonType.Name
		}
		$.mapSet(seen, (a$ as arrayType).CommonType.Id, true)
		return fmt.Sprintf("[%d]%s", $.basicInterfaceValue((a$ as arrayType).Len, "int"), (__goscriptAwait = $.pointerValue<Exclude<gobType, null>>(typeId_gobType((a$ as arrayType).Elem)).safeString(seen), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	public async ["string"](): globalThis.Promise<string> {
		const a: arrayType | $.VarRef<arrayType> | null = this;
		return (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as arrayType).safeString($.makeMap<typeId, boolean>()) : arrayType.prototype.safeString.call(a, $.makeMap<typeId, boolean>()))
	}

	public id(): any {
		return $.pointerValue<CommonType>(this.CommonType).id()
	}

	public name(): any {
		return $.pointerValue<CommonType>(this.CommonType).name()
	}

	public setId(id: any): any {
		return $.pointerValue<CommonType>(this.CommonType).setId(id)
	}

	static __typeInfo = $.registerStructType(
		"gob.arrayType",
		() => new arrayType(),
		() => [$.methodSignature("init", [["elem", "gob.gobType"], ["len", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("safeString", [["seen", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "gob.typeId"), /* @__PURE__ */ $.basicType("bool"))]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("string", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("id", [], [/* @__PURE__ */ $.basicType("int32", "gob.typeId")], true), $.methodSignature("name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("setId", [["id", /* @__PURE__ */ $.basicType("int32", "gob.typeId")]], [], true)],
		arrayType,
		() => [/* @__PURE__ */ $.structField("CommonType", "gob.CommonType", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Elem", /* @__PURE__ */ $.basicType("int32", "gob.typeId"), [1], 24, true), /* @__PURE__ */ $.structField("Len", /* @__PURE__ */ $.basicType("int"), [2], 32, true)]
	)
}

export class gobEncoderType {
	public get CommonType(): CommonType {
		return this._fields.CommonType
	}

	public set CommonType(value: CommonType) {
		this._fields.CommonType = value
	}

	public _fields: {
		CommonType: CommonType
	}

	constructor(init?: Partial<{CommonType?: CommonType}>, __goscriptValue?: boolean) {
		this._fields = {
			CommonType: init?.CommonType ? init.CommonType.clone() : new CommonType(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): gobEncoderType {
		return new gobEncoderType(this, true)
	}

	public __goscriptAssign(source: gobEncoderType): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.CommonType, values.CommonType)
	}

	public safeString(seen: globalThis.Map<typeId, boolean> | null): string {
		const g: gobEncoderType | $.VarRef<gobEncoderType> | null = this;
		return $.pointerValue<gobEncoderType>(g).CommonType.Name
	}

	public ["string"](): string {
		const g: gobEncoderType | $.VarRef<gobEncoderType> | null = this;
		return $.pointerValue<gobEncoderType>(g).CommonType.Name
	}

	public id(): any {
		return $.pointerValue<CommonType>(this.CommonType).id()
	}

	public name(): any {
		return $.pointerValue<CommonType>(this.CommonType).name()
	}

	public setId(id: any): any {
		return $.pointerValue<CommonType>(this.CommonType).setId(id)
	}

	static __typeInfo = $.registerStructType(
		"gob.gobEncoderType",
		() => new gobEncoderType(),
		() => [$.methodSignature("safeString", [["seen", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "gob.typeId"), /* @__PURE__ */ $.basicType("bool"))]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("string", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("id", [], [/* @__PURE__ */ $.basicType("int32", "gob.typeId")], true), $.methodSignature("name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("setId", [["id", /* @__PURE__ */ $.basicType("int32", "gob.typeId")]], [], true)],
		gobEncoderType,
		() => [/* @__PURE__ */ $.structField("CommonType", "gob.CommonType", [0], 0, true, { anonymous: true })]
	)
}

export class mapType {
	public get CommonType(): CommonType {
		return this._fields.CommonType
	}

	public set CommonType(value: CommonType) {
		this._fields.CommonType = value
	}

	public get Key(): typeId {
		return this._fields.Key
	}

	public set Key(value: typeId) {
		this._fields.Key = value
	}

	public get Elem(): typeId {
		return this._fields.Elem
	}

	public set Elem(value: typeId) {
		this._fields.Elem = value
	}

	public _fields: {
		CommonType: CommonType
		Key: typeId
		Elem: typeId
	}

	constructor(init?: Partial<{CommonType?: CommonType, Key?: typeId, Elem?: typeId}>, __goscriptValue?: boolean) {
		this._fields = {
			CommonType: init?.CommonType ? init.CommonType.clone() : new CommonType(undefined, true),
			Key: init?.Key ?? (0 as typeId),
			Elem: init?.Elem ?? (0 as typeId)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mapType {
		return new mapType(this, true)
	}

	public __goscriptAssign(source: mapType): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.CommonType, values.CommonType)
		target.Key = values.Key
		target.Elem = values.Elem
	}

	public init(key: gobType | null, elem: gobType | null): void {
		let m: mapType | $.VarRef<mapType> | null = this;
		const m$: mapType = m == null ? $.pointerTarget<mapType>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<mapType>(m)
		// Set our type id before evaluating the element's, in case it's our own.
		setTypeId($.interfaceValue<gobType | null>(m, "*gob.mapType", /* @__PURE__ */ $.pointerType("gob.mapType")));
		;(m$ as mapType).Key = (key !== null && (key as any).__isVarRef !== true && (key as any).__goValue === undefined ? (key as Exclude<gobType, null>) : $.pointerValue<Exclude<gobType, null>>(key)).id();
		;(m$ as mapType).Elem = (elem !== null && (elem as any).__isVarRef !== true && (elem as any).__goValue === undefined ? (elem as Exclude<gobType, null>) : $.pointerValue<Exclude<gobType, null>>(elem)).id()
	}

	public async safeString(seen: globalThis.Map<typeId, boolean> | null): globalThis.Promise<string> {
		let m: mapType | $.VarRef<mapType> | null = this;
		const m$: mapType = m == null ? $.pointerTarget<mapType>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<mapType>(m)
		if ($.mapGet<typeId, boolean, boolean>(seen, (m$ as mapType).CommonType.Id, false)[0]) {
			return (m$ as mapType).CommonType.Name
		}
		$.mapSet(seen, (m$ as mapType).CommonType.Id, true)
		let key = (__goscriptAwait = $.pointerValue<Exclude<gobType, null>>(typeId_gobType((m$ as mapType).Key)).safeString(seen), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let elem = (__goscriptAwait = $.pointerValue<Exclude<gobType, null>>(typeId_gobType((m$ as mapType).Elem)).safeString(seen), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return fmt.Sprintf("map[%s]%s", key, elem)
	}

	public async ["string"](): globalThis.Promise<string> {
		const m: mapType | $.VarRef<mapType> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mapType).safeString($.makeMap<typeId, boolean>()) : mapType.prototype.safeString.call(m, $.makeMap<typeId, boolean>()))
	}

	public id(): any {
		return $.pointerValue<CommonType>(this.CommonType).id()
	}

	public name(): any {
		return $.pointerValue<CommonType>(this.CommonType).name()
	}

	public setId(id: any): any {
		return $.pointerValue<CommonType>(this.CommonType).setId(id)
	}

	static __typeInfo = $.registerStructType(
		"gob.mapType",
		() => new mapType(),
		() => [$.methodSignature("init", [["key", "gob.gobType"], ["elem", "gob.gobType"]], [], true), $.methodSignature("safeString", [["seen", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "gob.typeId"), /* @__PURE__ */ $.basicType("bool"))]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("string", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("id", [], [/* @__PURE__ */ $.basicType("int32", "gob.typeId")], true), $.methodSignature("name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("setId", [["id", /* @__PURE__ */ $.basicType("int32", "gob.typeId")]], [], true)],
		mapType,
		() => [/* @__PURE__ */ $.structField("CommonType", "gob.CommonType", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Key", /* @__PURE__ */ $.basicType("int32", "gob.typeId"), [1], 24, true), /* @__PURE__ */ $.structField("Elem", /* @__PURE__ */ $.basicType("int32", "gob.typeId"), [2], 28, true)]
	)
}

export class sliceType {
	public get CommonType(): CommonType {
		return this._fields.CommonType
	}

	public set CommonType(value: CommonType) {
		this._fields.CommonType = value
	}

	public get Elem(): typeId {
		return this._fields.Elem
	}

	public set Elem(value: typeId) {
		this._fields.Elem = value
	}

	public _fields: {
		CommonType: CommonType
		Elem: typeId
	}

	constructor(init?: Partial<{CommonType?: CommonType, Elem?: typeId}>, __goscriptValue?: boolean) {
		this._fields = {
			CommonType: init?.CommonType ? init.CommonType.clone() : new CommonType(undefined, true),
			Elem: init?.Elem ?? (0 as typeId)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sliceType {
		return new sliceType(this, true)
	}

	public __goscriptAssign(source: sliceType): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.CommonType, values.CommonType)
		target.Elem = values.Elem
	}

	public init(elem: gobType | null): void {
		let s: sliceType | $.VarRef<sliceType> | null = this;
		// Set our type id before evaluating the element's, in case it's our own.
		setTypeId($.interfaceValue<gobType | null>(s, "*gob.sliceType", /* @__PURE__ */ $.pointerType("gob.sliceType")))
		// See the comments about ids in newTypeObject. Only slices and
		// structs have mutual recursion.
		if ((elem !== null && (elem as any).__isVarRef !== true && (elem as any).__goValue === undefined ? (elem as Exclude<gobType, null>) : $.pointerValue<Exclude<gobType, null>>(elem)).id() == 0) {
			setTypeId(elem)
		}
		$.pointerValue<sliceType>(s).Elem = (elem !== null && (elem as any).__isVarRef !== true && (elem as any).__goValue === undefined ? (elem as Exclude<gobType, null>) : $.pointerValue<Exclude<gobType, null>>(elem)).id()
	}

	public async safeString(seen: globalThis.Map<typeId, boolean> | null): globalThis.Promise<string> {
		let s: sliceType | $.VarRef<sliceType> | null = this;
		const s$: sliceType = s == null ? $.pointerTarget<sliceType>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sliceType>(s)
		if ($.mapGet<typeId, boolean, boolean>(seen, (s$ as sliceType).CommonType.Id, false)[0]) {
			return (s$ as sliceType).CommonType.Name
		}
		$.mapSet(seen, (s$ as sliceType).CommonType.Id, true)
		return fmt.Sprintf("[]%s", (__goscriptAwait = $.pointerValue<Exclude<gobType, null>>(typeId_gobType((s$ as sliceType).Elem)).safeString(seen), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	public async ["string"](): globalThis.Promise<string> {
		const s: sliceType | $.VarRef<sliceType> | null = this;
		return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as sliceType).safeString($.makeMap<typeId, boolean>()) : sliceType.prototype.safeString.call(s, $.makeMap<typeId, boolean>()))
	}

	public id(): any {
		return $.pointerValue<CommonType>(this.CommonType).id()
	}

	public name(): any {
		return $.pointerValue<CommonType>(this.CommonType).name()
	}

	public setId(id: any): any {
		return $.pointerValue<CommonType>(this.CommonType).setId(id)
	}

	static __typeInfo = $.registerStructType(
		"gob.sliceType",
		() => new sliceType(),
		() => [$.methodSignature("init", [["elem", "gob.gobType"]], [], true), $.methodSignature("safeString", [["seen", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "gob.typeId"), /* @__PURE__ */ $.basicType("bool"))]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("string", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("id", [], [/* @__PURE__ */ $.basicType("int32", "gob.typeId")], true), $.methodSignature("name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("setId", [["id", /* @__PURE__ */ $.basicType("int32", "gob.typeId")]], [], true)],
		sliceType,
		() => [/* @__PURE__ */ $.structField("CommonType", "gob.CommonType", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Elem", /* @__PURE__ */ $.basicType("int32", "gob.typeId"), [1], 24, true)]
	)
}

export class fieldType {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Id(): typeId {
		return this._fields.Id
	}

	public set Id(value: typeId) {
		this._fields.Id = value
	}

	public _fields: {
		Name: string
		Id: typeId
	}

	constructor(init?: Partial<{Name?: string, Id?: typeId}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Id: init?.Id ?? (0 as typeId)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fieldType {
		return new fieldType(this, true)
	}

	public __goscriptAssign(source: fieldType): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Id = values.Id
	}

	static __typeInfo = $.registerStructType(
		"gob.fieldType",
		() => new fieldType(),
		() => [],
		fieldType,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Id", /* @__PURE__ */ $.basicType("int32", "gob.typeId"), [1], 16, true)]
	)
}

export class structType {
	public get CommonType(): CommonType {
		return this._fields.CommonType
	}

	public set CommonType(value: CommonType) {
		this._fields.CommonType = value
	}

	public get Field(): $.Slice<fieldType> {
		return this._fields.Field
	}

	public set Field(value: $.Slice<fieldType>) {
		this._fields.Field = value
	}

	public _fields: {
		CommonType: CommonType
		Field: $.Slice<fieldType>
	}

	constructor(init?: Partial<{CommonType?: CommonType, Field?: $.Slice<fieldType>}>, __goscriptValue?: boolean) {
		this._fields = {
			CommonType: init?.CommonType ? init.CommonType.clone() : new CommonType(undefined, true),
			Field: init?.Field ?? (null! as $.Slice<fieldType>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): structType {
		return new structType(this, true)
	}

	public __goscriptAssign(source: structType): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.CommonType, values.CommonType)
		target.Field = values.Field
	}

	public async safeString(seen: globalThis.Map<typeId, boolean> | null): globalThis.Promise<string> {
		let s: structType | $.VarRef<structType> | null = this;
		const s$: structType = s == null ? $.pointerTarget<structType>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<structType>(s)
		if (s == null) {
			return "<nil>"
		}
		{
			let [, ok] = $.mapGet<typeId, boolean, boolean>(seen, (s$ as structType).CommonType.Id, false)
			if (ok) {
				return (s$ as structType).CommonType.Name
			}
		}
		$.mapSet(seen, (s$ as structType).CommonType.Id, true)
		let str = $.concatString((s$ as structType).CommonType.Name, " = struct { ")
		for (let __goscriptRangeTarget0 = (s$ as structType).Field, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let f = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as fieldType)).clone()
			str = $.concatString(str, await fmt.Sprintf("%s %s; ", f.Name, (__goscriptAwait = $.pointerValue<Exclude<gobType, null>>(typeId_gobType(f.Id)).safeString(seen), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		}
		str = $.concatString(str, "}")
		return str
	}

	public async ["string"](): globalThis.Promise<string> {
		const s: structType | $.VarRef<structType> | null = this;
		return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as structType).safeString($.makeMap<typeId, boolean>()) : structType.prototype.safeString.call(s, $.makeMap<typeId, boolean>()))
	}

	public id(): any {
		return $.pointerValue<CommonType>(this.CommonType).id()
	}

	public name(): any {
		return $.pointerValue<CommonType>(this.CommonType).name()
	}

	public setId(id: any): any {
		return $.pointerValue<CommonType>(this.CommonType).setId(id)
	}

	static __typeInfo = $.registerStructType(
		"gob.structType",
		() => new structType(),
		() => [$.methodSignature("safeString", [["seen", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "gob.typeId"), /* @__PURE__ */ $.basicType("bool"))]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("string", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("id", [], [/* @__PURE__ */ $.basicType("int32", "gob.typeId")], true), $.methodSignature("name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("setId", [["id", /* @__PURE__ */ $.basicType("int32", "gob.typeId")]], [], true)],
		structType,
		() => [/* @__PURE__ */ $.structField("CommonType", "gob.CommonType", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Field", /* @__PURE__ */ $.sliceType("gob.fieldType"), [1], 24, true)]
	)
}

export class wireType {
	public get ArrayT(): arrayType | $.VarRef<arrayType> | null {
		return this._fields.ArrayT
	}

	public set ArrayT(value: arrayType | $.VarRef<arrayType> | null) {
		this._fields.ArrayT = value
	}

	public get SliceT(): sliceType | $.VarRef<sliceType> | null {
		return this._fields.SliceT
	}

	public set SliceT(value: sliceType | $.VarRef<sliceType> | null) {
		this._fields.SliceT = value
	}

	public get StructT(): structType | $.VarRef<structType> | null {
		return this._fields.StructT
	}

	public set StructT(value: structType | $.VarRef<structType> | null) {
		this._fields.StructT = value
	}

	public get MapT(): mapType | $.VarRef<mapType> | null {
		return this._fields.MapT
	}

	public set MapT(value: mapType | $.VarRef<mapType> | null) {
		this._fields.MapT = value
	}

	public get GobEncoderT(): gobEncoderType | $.VarRef<gobEncoderType> | null {
		return this._fields.GobEncoderT
	}

	public set GobEncoderT(value: gobEncoderType | $.VarRef<gobEncoderType> | null) {
		this._fields.GobEncoderT = value
	}

	public get BinaryMarshalerT(): gobEncoderType | $.VarRef<gobEncoderType> | null {
		return this._fields.BinaryMarshalerT
	}

	public set BinaryMarshalerT(value: gobEncoderType | $.VarRef<gobEncoderType> | null) {
		this._fields.BinaryMarshalerT = value
	}

	public get TextMarshalerT(): gobEncoderType | $.VarRef<gobEncoderType> | null {
		return this._fields.TextMarshalerT
	}

	public set TextMarshalerT(value: gobEncoderType | $.VarRef<gobEncoderType> | null) {
		this._fields.TextMarshalerT = value
	}

	public _fields: {
		ArrayT: arrayType | $.VarRef<arrayType> | null
		SliceT: sliceType | $.VarRef<sliceType> | null
		StructT: structType | $.VarRef<structType> | null
		MapT: mapType | $.VarRef<mapType> | null
		GobEncoderT: gobEncoderType | $.VarRef<gobEncoderType> | null
		BinaryMarshalerT: gobEncoderType | $.VarRef<gobEncoderType> | null
		TextMarshalerT: gobEncoderType | $.VarRef<gobEncoderType> | null
	}

	constructor(init?: Partial<{ArrayT?: arrayType | $.VarRef<arrayType> | null, SliceT?: sliceType | $.VarRef<sliceType> | null, StructT?: structType | $.VarRef<structType> | null, MapT?: mapType | $.VarRef<mapType> | null, GobEncoderT?: gobEncoderType | $.VarRef<gobEncoderType> | null, BinaryMarshalerT?: gobEncoderType | $.VarRef<gobEncoderType> | null, TextMarshalerT?: gobEncoderType | $.VarRef<gobEncoderType> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ArrayT: init?.ArrayT ?? (null! as arrayType | $.VarRef<arrayType> | null),
			SliceT: init?.SliceT ?? (null! as sliceType | $.VarRef<sliceType> | null),
			StructT: init?.StructT ?? (null! as structType | $.VarRef<structType> | null),
			MapT: init?.MapT ?? (null! as mapType | $.VarRef<mapType> | null),
			GobEncoderT: init?.GobEncoderT ?? (null! as gobEncoderType | $.VarRef<gobEncoderType> | null),
			BinaryMarshalerT: init?.BinaryMarshalerT ?? (null! as gobEncoderType | $.VarRef<gobEncoderType> | null),
			TextMarshalerT: init?.TextMarshalerT ?? (null! as gobEncoderType | $.VarRef<gobEncoderType> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): wireType {
		return new wireType(this, true)
	}

	public __goscriptAssign(source: wireType): void {
		const target = this._fields
		const values = source._fields
		target.ArrayT = values.ArrayT
		target.SliceT = values.SliceT
		target.StructT = values.StructT
		target.MapT = values.MapT
		target.GobEncoderT = values.GobEncoderT
		target.BinaryMarshalerT = values.BinaryMarshalerT
		target.TextMarshalerT = values.TextMarshalerT
	}

	public ["string"](): string {
		const w: wireType | $.VarRef<wireType> | null = this;
		const w$: wireType = w == null ? $.pointerTarget<wireType>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<wireType>(w)
		const _unknown: string = "unknown type"
		if (w == null) {
			return "unknown type"
		}
		switch ((true as boolean)) {
			case (w$ as wireType).ArrayT != null:
			{
				return $.pointerValue<arrayType>((w$ as wireType).ArrayT).CommonType.Name
				break
			}
			case (w$ as wireType).SliceT != null:
			{
				return $.pointerValue<sliceType>((w$ as wireType).SliceT).CommonType.Name
				break
			}
			case (w$ as wireType).StructT != null:
			{
				return $.pointerValue<structType>((w$ as wireType).StructT).CommonType.Name
				break
			}
			case (w$ as wireType).MapT != null:
			{
				return $.pointerValue<mapType>((w$ as wireType).MapT).CommonType.Name
				break
			}
			case (w$ as wireType).GobEncoderT != null:
			{
				return $.pointerValue<gobEncoderType>((w$ as wireType).GobEncoderT).CommonType.Name
				break
			}
			case (w$ as wireType).BinaryMarshalerT != null:
			{
				return $.pointerValue<gobEncoderType>((w$ as wireType).BinaryMarshalerT).CommonType.Name
				break
			}
			case (w$ as wireType).TextMarshalerT != null:
			{
				return $.pointerValue<gobEncoderType>((w$ as wireType).TextMarshalerT).CommonType.Name
				break
			}
		}
		return "unknown type"
	}

	static __typeInfo = $.registerStructType(
		"gob.wireType",
		() => new wireType(),
		() => [$.methodSignature("string", [], [/* @__PURE__ */ $.basicType("string")], true)],
		wireType,
		() => [/* @__PURE__ */ $.structField("ArrayT", /* @__PURE__ */ $.pointerType("gob.arrayType"), [0], 0, true), /* @__PURE__ */ $.structField("SliceT", /* @__PURE__ */ $.pointerType("gob.sliceType"), [1], 8, true), /* @__PURE__ */ $.structField("StructT", /* @__PURE__ */ $.pointerType("gob.structType"), [2], 16, true), /* @__PURE__ */ $.structField("MapT", /* @__PURE__ */ $.pointerType("gob.mapType"), [3], 24, true), /* @__PURE__ */ $.structField("GobEncoderT", /* @__PURE__ */ $.pointerType("gob.gobEncoderType"), [4], 32, true), /* @__PURE__ */ $.structField("BinaryMarshalerT", /* @__PURE__ */ $.pointerType("gob.gobEncoderType"), [5], 40, true), /* @__PURE__ */ $.structField("TextMarshalerT", /* @__PURE__ */ $.pointerType("gob.gobEncoderType"), [6], 48, true)]
	)
}

export class typeInfo {
	public get id(): typeId {
		return this._fields.id
	}

	public set id(value: typeId) {
		this._fields.id = value
	}

	public get encInit(): sync.Mutex {
		return this._fields.encInit
	}

	public set encInit(value: sync.Mutex) {
		this._fields.encInit = value
	}

	public get encoder(): atomic.Pointer<__goscript_encode.encEngine> {
		return this._fields.encoder
	}

	public set encoder(value: atomic.Pointer<__goscript_encode.encEngine>) {
		this._fields.encoder = value
	}

	public get wire(): wireType {
		return this._fields.wire
	}

	public set wire(value: wireType) {
		this._fields.wire = value
	}

	public _fields: {
		id: typeId
		encInit: sync.Mutex
		encoder: atomic.Pointer<__goscript_encode.encEngine>
		wire: wireType
	}

	constructor(init?: Partial<{id?: typeId, encInit?: sync.Mutex, encoder?: atomic.Pointer<__goscript_encode.encEngine>, wire?: wireType}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0 as typeId),
			encInit: init?.encInit ? $.markAsStructValue($.cloneStructValue(init.encInit)) : $.markAsStructValue(new sync.Mutex()),
			encoder: init?.encoder ? $.markAsStructValue($.cloneStructValue(init.encoder)) : $.markAsStructValue(new atomic.Pointer<__goscript_encode.encEngine>()),
			wire: init?.wire ? init.wire.clone() : new wireType(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): typeInfo {
		return new typeInfo(this, true)
	}

	public __goscriptAssign(source: typeInfo): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
		$.assignStruct(target.encInit, values.encInit)
		$.assignStruct(target.encoder, values.encoder)
		$.assignStruct(target.wire, values.wire)
	}

	static __typeInfo = $.registerStructType(
		"gob.typeInfo",
		() => new typeInfo(),
		() => [],
		typeInfo,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("int32", "gob.typeId"), [0], 0, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("encInit", "sync.Mutex", [1], 4, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("encoder", "atomic.Pointer", [2], 16, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("wire", "gob.wireType", [3], 24, false, { pkgPath: "encoding/gob" })]
	)
}

export const xGob: number = 1

export const xBinary: number = 2

export const xText: number = 3

export const firstUserId: number = 64

export let userTypeCache: $.VarRef<sync.Map> = $.varRef($.markAsStructValue(new sync.Map()))

export function __goscript_set_userTypeCache(__goscriptValue: sync.Map): void {
	$.assignStruct(userTypeCache.value, __goscriptValue)
}

export async function validUserType(rt: reflect.Type | null): globalThis.Promise<[userTypeInfo | $.VarRef<userTypeInfo> | null, $.GoError]> {
	{
		let [ui, ok] = await userTypeCache.value.Load((rt as any))
		if (ok) {
			return [((ui as any)?.__goType === "*gob.userTypeInfo" && (ui as any).__goValue === undefined && (ui as any).__isTypedNil !== true ? ((ui as any) as userTypeInfo | $.VarRef<userTypeInfo> | null) : $.mustTypeAssert<userTypeInfo | $.VarRef<userTypeInfo> | null>(ui, /* @__PURE__ */ $.pointerType("gob.userTypeInfo"))), null]
		}
	}

	// Construct a new userTypeInfo and atomically add it to the userTypeCache.
	// If we lose the race, we'll waste a little CPU and create a little garbage
	// but return the existing value anyway.

	let ut: userTypeInfo | $.VarRef<userTypeInfo> | null = new userTypeInfo()
	let ut$: userTypeInfo = ut == null ? $.pointerTarget<userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<userTypeInfo>(ut);
	;(ut$ as userTypeInfo).base = rt;
	;(ut$ as userTypeInfo).user = rt
	// A type that is just a cycle of pointers (such as type T *T) cannot
	// be represented in gobs, which need some concrete data. We use a
	// cycle detection algorithm from Knuth, Vol 2, Section 3.1, Ex 6,
	// pp 539-540.  As we step through indirections, run another type at
	// half speed. If they meet up, there's a cycle.
	let slowpoke = (ut$ as userTypeInfo).base
	while (true) {
		let pt = (ut$ as userTypeInfo).base
		if ((__goscriptAwait = (pt !== null && (pt as any).__isVarRef !== true && (pt as any).__goValue === undefined ? (pt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(pt)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) {
			break
		}
		;(ut$ as userTypeInfo).base = (__goscriptAwait = (pt !== null && (pt as any).__isVarRef !== true && (pt as any).__goValue === undefined ? (pt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(pt)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ($.comparableEqual((ut$ as userTypeInfo).base, slowpoke)) {
			// recursive pointer type.
			return [null, errors.New($.concatString("can't represent recursive pointer type ", (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((ut$ as userTypeInfo).base).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
		}
		if (((ut$ as userTypeInfo).indir % 2) == 0) {
			slowpoke = (__goscriptAwait = (slowpoke !== null && (slowpoke as any).__isVarRef !== true && (slowpoke as any).__goValue === undefined ? (slowpoke as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(slowpoke)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		;(ut$ as userTypeInfo).indir++
	}

	{
		let [ok, indir] = await implementsInterface((ut$ as userTypeInfo).user, gobEncoderInterfaceType)
		if (ok) {
			let __goscriptAssign0_0: number = 1
			let __goscriptAssign0_1: number = indir;
			;(ut$ as userTypeInfo).externalEnc = __goscriptAssign0_0;
			;(ut$ as userTypeInfo).encIndir = __goscriptAssign0_1
		} else {
			{
				let [__goscriptShadow0, __goscriptShadow1] = await implementsInterface((ut$ as userTypeInfo).user, binaryMarshalerInterfaceType)
				if (__goscriptShadow0) {
					let __goscriptAssign1_0: number = 2
					let __goscriptAssign1_1: number = __goscriptShadow1;
					;(ut$ as userTypeInfo).externalEnc = __goscriptAssign1_0;
					;(ut$ as userTypeInfo).encIndir = __goscriptAssign1_1
				}
			}
		}
	}

	// NOTE(rsc): Would like to allow MarshalText here, but results in incompatibility
	// with older encodings for net.IP. See golang.org/issue/6760.
	// } else if ok, indir := implementsInterface(ut.user, textMarshalerInterfaceType); ok {
	// 	ut.externalEnc, ut.encIndir = xText, indir
	// }

	{
		let [ok, indir] = await implementsInterface((ut$ as userTypeInfo).user, gobDecoderInterfaceType)
		if (ok) {
			let __goscriptAssign2_0: number = 1
			let __goscriptAssign2_1: number = indir;
			;(ut$ as userTypeInfo).externalDec = __goscriptAssign2_0;
			;(ut$ as userTypeInfo).decIndir = __goscriptAssign2_1
		} else {
			{
				let [__goscriptShadow2, __goscriptShadow3] = await implementsInterface((ut$ as userTypeInfo).user, binaryUnmarshalerInterfaceType)
				if (__goscriptShadow2) {
					let __goscriptAssign3_0: number = 2
					let __goscriptAssign3_1: number = __goscriptShadow3;
					;(ut$ as userTypeInfo).externalDec = __goscriptAssign3_0;
					;(ut$ as userTypeInfo).decIndir = __goscriptAssign3_1
				}
			}
		}
	}

	// See note above.
	// } else if ok, indir := implementsInterface(ut.user, textUnmarshalerInterfaceType); ok {
	// 	ut.externalDec, ut.decIndir = xText, indir
	// }

	let [ui, ] = await userTypeCache.value.LoadOrStore((rt as any), $.interfaceValue(ut, "*gob.userTypeInfo", /* @__PURE__ */ $.pointerType("gob.userTypeInfo")))
	return [((ui as any)?.__goType === "*gob.userTypeInfo" && (ui as any).__goValue === undefined && (ui as any).__isTypedNil !== true ? ((ui as any) as userTypeInfo | $.VarRef<userTypeInfo> | null) : $.mustTypeAssert<userTypeInfo | $.VarRef<userTypeInfo> | null>(ui, /* @__PURE__ */ $.pointerType("gob.userTypeInfo"))), null]
}

export let gobEncoderInterfaceType: reflect.Type | null = reflect.TypeFor(__goscriptStatic0())

export function __goscript_set_gobEncoderInterfaceType(__goscriptValue: reflect.Type | null): void {
	gobEncoderInterfaceType = __goscriptValue
}

export let gobDecoderInterfaceType: reflect.Type | null = reflect.TypeFor(__goscriptStatic1())

export function __goscript_set_gobDecoderInterfaceType(__goscriptValue: reflect.Type | null): void {
	gobDecoderInterfaceType = __goscriptValue
}

export let binaryMarshalerInterfaceType: reflect.Type | null = reflect.TypeFor(__goscriptStatic2())

export function __goscript_set_binaryMarshalerInterfaceType(__goscriptValue: reflect.Type | null): void {
	binaryMarshalerInterfaceType = __goscriptValue
}

export let binaryUnmarshalerInterfaceType: reflect.Type | null = reflect.TypeFor(__goscriptStatic3())

export function __goscript_set_binaryUnmarshalerInterfaceType(__goscriptValue: reflect.Type | null): void {
	binaryUnmarshalerInterfaceType = __goscriptValue
}

export let textMarshalerInterfaceType: reflect.Type | null = reflect.TypeFor(__goscriptStatic4())

export function __goscript_set_textMarshalerInterfaceType(__goscriptValue: reflect.Type | null): void {
	textMarshalerInterfaceType = __goscriptValue
}

export let textUnmarshalerInterfaceType: reflect.Type | null = reflect.TypeFor(__goscriptStatic5())

export function __goscript_set_textUnmarshalerInterfaceType(__goscriptValue: reflect.Type | null): void {
	textUnmarshalerInterfaceType = __goscriptValue
}

export let wireTypeType: reflect.Type | null = reflect.TypeFor(__goscriptStatic6())

export function __goscript_set_wireTypeType(__goscriptValue: reflect.Type | null): void {
	wireTypeType = __goscriptValue
}

export async function implementsInterface(typ: reflect.Type | null, gobEncDecType: reflect.Type | null): globalThis.Promise<[boolean, number]> {
	let success: boolean = false
	let indir: number = 0
	if (typ == null) {
		return [success, indir]
	}
	let rt: reflect.Type | null = typ
	// The type might be a pointer and we need to keep
	// dereferencing to the base type until we find an implementation.
	while (true) {
		if ((__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).Implements($.pointerValueOrNil(gobEncDecType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return [true, indir]
		}
		{
			let p: reflect.Type | null = rt
			if ((__goscriptAwait = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? (p as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(p)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
				indir = ((indir + 1) << 24 >> 24)
				if (indir > 100) {
					return [false, 0]
				}
				rt = (__goscriptAwait = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? (p as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(p)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				continue
			}
		}
		break
	}
	// No luck yet, but if this is a base type (non-pointer), the pointer might satisfy.
	if ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) {
		// Not a pointer, but does the pointer work?
		if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.PointerTo($.pointerValueOrNil(typ)!)).Implements($.pointerValueOrNil(gobEncDecType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return [true, -1]
		}
	}
	return [false, 0]
}

export async function userType(rt: reflect.Type | null): globalThis.Promise<userTypeInfo | $.VarRef<userTypeInfo> | null> {
	let __goscriptTuple0: any = await validUserType(rt)
	let ut: userTypeInfo | $.VarRef<userTypeInfo> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		__goscript_error.error_(err)
	}
	return ut
}

export let typeLock: $.VarRef<sync.Mutex> = $.varRef($.markAsStructValue(new sync.Mutex()))

export function __goscript_set_typeLock(__goscriptValue: sync.Mutex): void {
	$.assignStruct(typeLock.value, __goscriptValue)
}

export let types: globalThis.Map<reflect.Type | null, gobType | null> | null = $.makeMap<reflect.Type | null, gobType | null>()

export function __goscript_set_types(__goscriptValue: globalThis.Map<reflect.Type | null, gobType | null> | null): void {
	types = __goscriptValue
}

export let idToTypeSlice: $.Slice<gobType | null> = $.makeSlice<gobType | null>(1, 64)

export function __goscript_set_idToTypeSlice(__goscriptValue: $.Slice<gobType | null>): void {
	idToTypeSlice = __goscriptValue
}

export let builtinIdToTypeSlice: (gobType | null)[] = $.arrayValue(globalThis.Array.from({ length: 64 }, () => null))

export function __goscript_set_builtinIdToTypeSlice(__goscriptValue: (gobType | null)[]): void {
	builtinIdToTypeSlice = __goscriptValue
}

export function idToType(id: typeId): gobType | null {
	if ((id < 0) || ($.int(id) >= $.sliceLen(idToTypeSlice))) {
		return null
	}
	return $.arrayIndex(idToTypeSlice!, id)
}

export function builtinIdToType(id: typeId): gobType | null {
	if ((id < 0) || ($.int(id) >= 64)) {
		return null
	}
	return $.arrayIndex(builtinIdToTypeSlice, id)
}

export function setTypeId(typ: gobType | null): void {
	// When building recursive types, someone may get there before us.
	if ((typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<gobType, null>) : $.pointerValue<Exclude<gobType, null>>(typ)).id() != 0) {
		return
	}
	let nextId = $.int($.sliceLen(idToTypeSlice), 32)
	void (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<gobType, null>) : $.pointerValue<Exclude<gobType, null>>(typ)).setId(nextId)
	idToTypeSlice = $.appendOne(idToTypeSlice, typ, $.appendZeros.nil)
}

export function typeId_gobType(t: typeId): gobType | null {
	if (t == 0) {
		return null
	}
	return idToType(t)
}

export async function typeId__string(t: typeId): globalThis.Promise<string> {
	if (typeId_gobType(t) == null) {
		return "<nil>"
	}
	return $.pointerValue<Exclude<gobType, null>>(typeId_gobType(t)).string()
}

export function typeId_name(t: typeId): string {
	if (typeId_gobType(t) == null) {
		return "<nil>"
	}
	return $.pointerValue<Exclude<gobType, null>>(typeId_gobType(t)).name()
}

export let tBool: typeId = await bootstrapType("bool", $.interfaceValue(null, "*bool", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool"))))

export function __goscript_set_tBool(__goscriptValue: typeId): void {
	tBool = __goscriptValue
}

export let tInt: typeId = await bootstrapType("int", $.interfaceValue(null, "*int", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))))

export function __goscript_set_tInt(__goscriptValue: typeId): void {
	tInt = __goscriptValue
}

export let tUint: typeId = await bootstrapType("uint", $.interfaceValue(null, "*uint", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))))

export function __goscript_set_tUint(__goscriptValue: typeId): void {
	tUint = __goscriptValue
}

export let tFloat: typeId = await bootstrapType("float", $.interfaceValue(null, "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))))

export function __goscript_set_tFloat(__goscriptValue: typeId): void {
	tFloat = __goscriptValue
}

export let tBytes: typeId = await bootstrapType("bytes", $.interfaceValue(null, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))

export function __goscript_set_tBytes(__goscriptValue: typeId): void {
	tBytes = __goscriptValue
}

export let tString: typeId = await bootstrapType("string", $.interfaceValue(null, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))))

export function __goscript_set_tString(__goscriptValue: typeId): void {
	tString = __goscriptValue
}

export let tComplex: typeId = await bootstrapType("complex", $.interfaceValue(null, "*complex128", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("complex128"))))

export function __goscript_set_tComplex(__goscriptValue: typeId): void {
	tComplex = __goscriptValue
}

export let tInterface: typeId = await bootstrapType("interface", $.interfaceValue(null, "*interface{}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })))

export function __goscript_set_tInterface(__goscriptValue: typeId): void {
	tInterface = __goscriptValue
}

export let tReserved7: typeId = await bootstrapType("_reserved7", $.interfaceValue(null, "*struct{r7 int}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("r7", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "encoding/gob" })] })))

export function __goscript_set_tReserved7(__goscriptValue: typeId): void {
	tReserved7 = __goscriptValue
}

export let tReserved6: typeId = await bootstrapType("_reserved6", $.interfaceValue(null, "*struct{r6 int}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("r6", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "encoding/gob" })] })))

export function __goscript_set_tReserved6(__goscriptValue: typeId): void {
	tReserved6 = __goscriptValue
}

export let tReserved5: typeId = await bootstrapType("_reserved5", $.interfaceValue(null, "*struct{r5 int}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("r5", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "encoding/gob" })] })))

export function __goscript_set_tReserved5(__goscriptValue: typeId): void {
	tReserved5 = __goscriptValue
}

export let tReserved4: typeId = await bootstrapType("_reserved4", $.interfaceValue(null, "*struct{r4 int}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("r4", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "encoding/gob" })] })))

export function __goscript_set_tReserved4(__goscriptValue: typeId): void {
	tReserved4 = __goscriptValue
}

export let tReserved3: typeId = await bootstrapType("_reserved3", $.interfaceValue(null, "*struct{r3 int}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("r3", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "encoding/gob" })] })))

export function __goscript_set_tReserved3(__goscriptValue: typeId): void {
	tReserved3 = __goscriptValue
}

export let tReserved2: typeId = await bootstrapType("_reserved2", $.interfaceValue(null, "*struct{r2 int}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("r2", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "encoding/gob" })] })))

export function __goscript_set_tReserved2(__goscriptValue: typeId): void {
	tReserved2 = __goscriptValue
}

export let tReserved1: typeId = await bootstrapType("_reserved1", $.interfaceValue(null, "*struct{r1 int}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("r1", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "encoding/gob" })] })))

export function __goscript_set_tReserved1(__goscriptValue: typeId): void {
	tReserved1 = __goscriptValue
}

export var tWireType: typeId

export async function __goscript_init_tWireType(): globalThis.Promise<void> {
	if (((tWireType) as any) === undefined) {
		tWireType = await $.pointerValue<typeInfo>(await mustGetTypeInfo(wireTypeType)).id
	}
}

export function __goscript_get_tWireType(): typeId {
	if (((tWireType) as any) === undefined) {
		throw new globalThis.Error("goscript package variable tWireType read before initialization")
	}
	return tWireType
}

export function __goscript_set_tWireType(__goscriptValue: typeId): void {
	tWireType = __goscriptValue
}

export let wireTypeUserInfo: userTypeInfo | $.VarRef<userTypeInfo> | null = null! as userTypeInfo | $.VarRef<userTypeInfo> | null

export function __goscript_set_wireTypeUserInfo(__goscriptValue: userTypeInfo | $.VarRef<userTypeInfo> | null): void {
	wireTypeUserInfo = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	// Some magic numbers to make sure there are no surprises.
	await checkId(16, (await __goscript_init_tWireType(), __goscript_get_tWireType()))
	await checkId(17, $.pointerValue<typeInfo>(await mustGetTypeInfo(reflect.TypeFor(__goscriptStatic7()))).id)
	await checkId(18, $.pointerValue<typeInfo>(await mustGetTypeInfo(reflect.TypeFor(__goscriptStatic8()))).id)
	await checkId(19, $.pointerValue<typeInfo>(await mustGetTypeInfo(reflect.TypeFor(__goscriptStatic9()))).id)
	await checkId(20, $.pointerValue<typeInfo>(await mustGetTypeInfo(reflect.TypeFor(__goscriptStatic10()))).id)
	await checkId(21, $.pointerValue<typeInfo>(await mustGetTypeInfo(reflect.TypeFor(__goscriptStatic11()))).id)
	await checkId(23, $.pointerValue<typeInfo>(await mustGetTypeInfo(reflect.TypeFor(__goscriptStatic12()))).id)

	$.copy($.goSlice(builtinIdToTypeSlice, undefined, undefined), idToTypeSlice)

	// Move the id space upwards to allow for growth in the predefined world
	// without breaking existing files.
	{
		let nextId = $.sliceLen(idToTypeSlice)
		if (nextId > 64) {
			$.panic(await fmt.Sprintln("nextId too large:", $.basicInterfaceValue(nextId, "int")))
		}
	}
	idToTypeSlice = $.goSlice(idToTypeSlice, undefined, 64)
	await registerBasics()
	wireTypeUserInfo = await userType(wireTypeType)
}

export function newArrayType(name: string): arrayType | $.VarRef<arrayType> | null {
	let a: arrayType | $.VarRef<arrayType> | null = new arrayType({CommonType: new CommonType({Name: name}, true), Elem: 0, Len: 0})
	return a
}

export function newGobEncoderType(name: string): gobEncoderType | $.VarRef<gobEncoderType> | null {
	let g: gobEncoderType | $.VarRef<gobEncoderType> | null = new gobEncoderType({CommonType: new CommonType({Name: name}, true)})
	setTypeId($.interfaceValue<gobType | null>(g, "*gob.gobEncoderType", /* @__PURE__ */ $.pointerType("gob.gobEncoderType")))
	return g
}

export function newMapType(name: string): mapType | $.VarRef<mapType> | null {
	let m: mapType | $.VarRef<mapType> | null = new mapType({CommonType: new CommonType({Name: name}, true), Key: 0, Elem: 0})
	return m
}

export function newSliceType(name: string): sliceType | $.VarRef<sliceType> | null {
	let s: sliceType | $.VarRef<sliceType> | null = new sliceType({CommonType: new CommonType({Name: name}, true), Elem: 0})
	return s
}

export function newStructType(name: string): structType | $.VarRef<structType> | null {
	let s: structType | $.VarRef<structType> | null = new structType({CommonType: new CommonType({Name: name}, true), Field: null})
	// For historical reasons we set the id here rather than init.
	// See the comment in newTypeObject for details.
	setTypeId($.interfaceValue<gobType | null>(s, "*gob.structType", /* @__PURE__ */ $.pointerType("gob.structType")))
	return s
}

export async function newTypeObject(name: string, ut: userTypeInfo | $.VarRef<userTypeInfo> | null, rt: reflect.Type | null): globalThis.Promise<[gobType | null, $.GoError]> {
	using __defer = new $.DisposableStack()
	// Does this type implement GobEncoder?
	if ($.pointerValue<userTypeInfo>(ut).externalEnc != 0) {
		return [$.interfaceValue<gobType | null>(newGobEncoderType(name), "*gob.gobEncoderType", /* @__PURE__ */ $.pointerType("gob.gobEncoderType")), null]
	}
	let err: $.GoError = null! as $.GoError
	let type0: gobType | null = null! as gobType | null
	let type1: gobType | null = null! as gobType | null
	__defer.defer(() => { ((): void => {
		if (err != null) {
			$.deleteMapEntry(types, rt)
		}
	})() })
	// Install the top-level type before the subtypes (e.g. struct before
	// fields) so recursive types can be constructed safely.
	{
		let t: reflect.Type | null = rt
		switch ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case reflect.Bool:
			{
				return [typeId_gobType(tBool), null]
				break
			}
			case reflect.Int:
			case reflect.Int8:
			case reflect.Int16:
			case reflect.Int32:
			case reflect.Int64:
			{
				return [typeId_gobType(tInt), null]
				break
			}
			case reflect.Uint:
			case reflect.Uint8:
			case reflect.Uint16:
			case reflect.Uint32:
			case reflect.Uint64:
			case reflect.Uintptr:
			{
				return [typeId_gobType(tUint), null]
				break
			}
			case reflect.Float32:
			case reflect.Float64:
			{
				return [typeId_gobType(tFloat), null]
				break
			}
			case reflect.Complex64:
			case reflect.Complex128:
			{
				return [typeId_gobType(tComplex), null]
				break
			}
			case reflect.String:
			{
				return [typeId_gobType(tString), null]
				break
			}
			case reflect.Interface:
			{
				return [typeId_gobType(tInterface), null]
				break
			}
			case reflect.Array:
			{
				let at: arrayType | $.VarRef<arrayType> | null = newArrayType(name)
				$.mapSet(types, rt, $.interfaceValue<gobType | null>(at, "*gob.arrayType", /* @__PURE__ */ $.pointerType("gob.arrayType")))
				let __goscriptTuple1: any = await getBaseType("", (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				type0 = __goscriptTuple1[0]
				err = __goscriptTuple1[1]
				if (err != null) {
					return [null, err]
				}
				// Historical aside:
				// For arrays, maps, and slices, we set the type id after the elements
				// are constructed. This is to retain the order of type id allocation after
				// a fix made to handle recursive types, which changed the order in
				// which types are built. Delaying the setting in this way preserves
				// type ids while allowing recursive types to be described. Structs,
				// done below, were already handling recursion correctly so they
				// assign the top-level id before those of the field.
				arrayType.prototype.init.call(at, type0, (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				return [$.interfaceValue<gobType | null>(at, "*gob.arrayType", /* @__PURE__ */ $.pointerType("gob.arrayType")), null]
				break
			}
			case reflect.Map:
			{
				let mt: mapType | $.VarRef<mapType> | null = newMapType(name)
				$.mapSet(types, rt, $.interfaceValue<gobType | null>(mt, "*gob.mapType", /* @__PURE__ */ $.pointerType("gob.mapType")))
				let __goscriptTuple2: any = await getBaseType("", (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				type0 = __goscriptTuple2[0]
				err = __goscriptTuple2[1]
				if (err != null) {
					return [null, err]
				}
				let __goscriptTuple3: any = await getBaseType("", (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				type1 = __goscriptTuple3[0]
				err = __goscriptTuple3[1]
				if (err != null) {
					return [null, err]
				}
				void (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? ((mt as any) as mapType).init(type0, type1) : mapType.prototype.init.call(mt, type0, type1))
				return [$.interfaceValue<gobType | null>(mt, "*gob.mapType", /* @__PURE__ */ $.pointerType("gob.mapType")), null]
				break
			}
			case reflect.Slice:
			{
				if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8) {
					return [typeId_gobType(tBytes), null]
				}
				let st: sliceType | $.VarRef<sliceType> | null = newSliceType(name)
				$.mapSet(types, rt, $.interfaceValue<gobType | null>(st, "*gob.sliceType", /* @__PURE__ */ $.pointerType("gob.sliceType")))
				let __goscriptTuple4: any = await getBaseType((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				type0 = __goscriptTuple4[0]
				err = __goscriptTuple4[1]
				if (err != null) {
					return [null, err]
				}
				void (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as sliceType).init(type0) : sliceType.prototype.init.call(st, type0))
				return [$.interfaceValue<gobType | null>(st, "*gob.sliceType", /* @__PURE__ */ $.pointerType("gob.sliceType")), null]
				break
			}
			case reflect.Struct:
			{
				let st: structType | $.VarRef<structType> | null = newStructType(name)
				let st$: structType = st == null ? $.pointerTarget<structType>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<structType>(st)
				$.mapSet(types, rt, $.interfaceValue<gobType | null>(st, "*gob.structType", /* @__PURE__ */ $.pointerType("gob.structType")))
				$.sliceElems(idToTypeSlice!)[$.sliceSlot(idToTypeSlice!, (st$ as structType).CommonType.id())] = $.interfaceValue<gobType | null>(st, "*gob.structType", /* @__PURE__ */ $.pointerType("gob.structType"))
				for (let i = 0; i < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
					let f = $.varRef($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))))
					if (!await isSent(f)) {
						continue
					}
					let typ = $.pointerValue<userTypeInfo>(await userType(f.value.Type)).base
					let tname = (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if ($.stringEqual(tname, "")) {
						let __goscriptShadow4 = $.pointerValue<userTypeInfo>(await userType(f.value.Type)).base
						tname = (__goscriptAwait = (__goscriptShadow4 !== null && (__goscriptShadow4 as any).__isVarRef !== true && (__goscriptShadow4 as any).__goValue === undefined ? (__goscriptShadow4 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow4)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					let [gt, __goscriptShadow5] = await getBaseType(tname, f.value.Type)
					if (__goscriptShadow5 != null) {
						return [null, __goscriptShadow5]
					}
					// Some mutually recursive types can cause us to be here while
					// still defining the element. Fix the element type id here.
					// We could do this more neatly by setting the id at the start of
					// building every type, but that would break binary compatibility.
					if ((__goscriptAwait = (gt !== null && (gt as any).__isVarRef !== true && (gt as any).__goValue === undefined ? (gt as Exclude<gobType, null>) : $.pointerValue<Exclude<gobType, null>>(gt)).id(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
						setTypeId(gt)
					}
					;(st$ as structType).Field = $.appendOne((st$ as structType).Field, (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = (gt !== null && (gt as any).__isVarRef !== true && (gt as any).__goValue === undefined ? (gt as Exclude<gobType, null>) : $.pointerValue<Exclude<gobType, null>>(gt)).id(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new fieldType({Name: f.value.Name, Id: __goscriptLiteralField0}, true) })()))
				}
				return [$.interfaceValue<gobType | null>(st, "*gob.structType", /* @__PURE__ */ $.pointerType("gob.structType")), null]
				break
			}
			default:
			{
				return [null, errors.New($.concatString("gob NewTypeObject can't handle type: ", (__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
				break
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function isExported(name: string): boolean {
	let [rune, ] = utf8.DecodeRuneInString(name)
	return unicode.IsUpper(rune)
}

export async function isSent(field: reflect.StructField | $.VarRef<reflect.StructField> | null): globalThis.Promise<boolean> {
	const field$: reflect.StructField = field == null ? $.pointerTarget<reflect.StructField>(field) : (field as any).__isVarRef === true ? (field as any).value : (field as any).__goValue === undefined ? (field as any) : $.pointerTarget<reflect.StructField>(field)
	if (!isExported((field$ as reflect.StructField).Name)) {
		return false
	}
	// If the field is a chan or func or pointer thereto, don't send it.
	// That is, treat it like an unexported field.
	let typ = (field$ as reflect.StructField).Type
	while ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
		typ = (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	if (((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 18) || ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 19)) {
		return false
	}

	return true
}

export async function getBaseType(name: string, rt: reflect.Type | null): globalThis.Promise<[gobType | null, $.GoError]> {
	let ut: userTypeInfo | $.VarRef<userTypeInfo> | null = await userType(rt)
	return getType(name, ut, $.pointerValue<userTypeInfo>(ut).base)
}

export async function getType(name: string, ut: userTypeInfo | $.VarRef<userTypeInfo> | null, rt: reflect.Type | null): globalThis.Promise<[gobType | null, $.GoError]> {
	let [typ, present] = $.mapGet<reflect.Type | null, gobType | null, gobType | null>(types, rt, null)
	if (present) {
		return [typ, null]
	}
	let __goscriptTuple5: any = await newTypeObject(name, ut, rt)
	typ = __goscriptTuple5[0]
	let err = __goscriptTuple5[1]
	if (err == null) {
		$.mapSet(types, rt, typ)
	}
	return [typ, err]
}

export async function checkId(want: typeId, got: typeId): globalThis.Promise<void> {
	if (want != got) {
		await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(os.Stderr, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))!, "checkId: %d should be %d\n", $.basicInterfaceValue($.int(got), "int"), $.basicInterfaceValue($.int(want), "int"))
		$.panic($.concatString(($.concatString(($.concatString(($.concatString(($.concatString("bootstrap type wrong id: ", typeId_name(got))), " ")), await typeId__string(got))), " not ")), await typeId__string(want)))
	}
}

export async function bootstrapType(name: string, e: any): globalThis.Promise<typeId> {
	let rt = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(e)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let [, present] = $.mapGet<reflect.Type | null, gobType | null, gobType | null>(types, rt, null)
	if (present) {
		$.panic($.concatString(($.concatString(($.concatString("bootstrap type already present: ", name)), ", ")), (__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}
	let typ: CommonType | $.VarRef<CommonType> | null = new CommonType({Name: name})
	$.mapSet(types, rt, $.interfaceValue<gobType | null>(typ, "*gob.CommonType", /* @__PURE__ */ $.pointerType("gob.CommonType")))
	setTypeId($.interfaceValue<gobType | null>(typ, "*gob.CommonType", /* @__PURE__ */ $.pointerType("gob.CommonType")))
	return (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? ((typ as any) as CommonType).id() : CommonType.prototype.id.call(typ))
}

export let typeInfoMap: $.VarRef<atomic.Value> = $.varRef($.markAsStructValue(new atomic.Value()))

export function __goscript_set_typeInfoMap(__goscriptValue: atomic.Value): void {
	$.assignStruct(typeInfoMap.value, __goscriptValue)
}

export let typeInfoMapInit: globalThis.Map<reflect.Type | null, typeInfo | $.VarRef<typeInfo> | null> | null = $.makeMap<reflect.Type | null, typeInfo | $.VarRef<typeInfo> | null>()

export function __goscript_set_typeInfoMapInit(__goscriptValue: globalThis.Map<reflect.Type | null, typeInfo | $.VarRef<typeInfo> | null> | null): void {
	typeInfoMapInit = __goscriptValue
}

export function lookupTypeInfo(rt: reflect.Type | null): typeInfo | $.VarRef<typeInfo> | null {
	{
		let m: globalThis.Map<reflect.Type | null, typeInfo | $.VarRef<typeInfo> | null> | null = typeInfoMapInit
		if (m != null) {
			return $.mapGet<reflect.Type | null, typeInfo | $.VarRef<typeInfo> | null, typeInfo | $.VarRef<typeInfo> | null>(m, rt, null)[0]
		}
	}
	let __goscriptTuple6: any = $.typeAssertTuple<globalThis.Map<reflect.Type | null, typeInfo | $.VarRef<typeInfo> | null> | null>(typeInfoMap.value.Load(), /* @__PURE__ */ $.mapType("reflect.Type", /* @__PURE__ */ $.pointerType("gob.typeInfo")))
	let m: globalThis.Map<reflect.Type | null, typeInfo | $.VarRef<typeInfo> | null> | null = __goscriptTuple6[0]
	return $.mapGet<reflect.Type | null, typeInfo | $.VarRef<typeInfo> | null, typeInfo | $.VarRef<typeInfo> | null>(m, rt, null)[0]
}

export async function getTypeInfo(ut: userTypeInfo | $.VarRef<userTypeInfo> | null): globalThis.Promise<[typeInfo | $.VarRef<typeInfo> | null, $.GoError]> {
	const ut$: userTypeInfo = ut == null ? $.pointerTarget<userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<userTypeInfo>(ut)
	let rt = (ut$ as userTypeInfo).base
	if ((ut$ as userTypeInfo).externalEnc != 0) {
		// We want the user type, not the base type.
		rt = (ut$ as userTypeInfo).user
	}
	{
		let info: typeInfo | $.VarRef<typeInfo> | null = lookupTypeInfo(rt)
		if (info != null) {
			return [info, null]
		}
	}
	return buildTypeInfo(ut, rt)
}

export async function buildTypeInfo(ut: userTypeInfo | $.VarRef<userTypeInfo> | null, rt: reflect.Type | null): globalThis.Promise<[typeInfo | $.VarRef<typeInfo> | null, $.GoError]> {
	using __defer = new $.DisposableStack()
	const ut$: userTypeInfo = ut == null ? $.pointerTarget<userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<userTypeInfo>(ut)
	await typeLock.value.Lock()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())(typeLock.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })

	{
		let info: typeInfo | $.VarRef<typeInfo> | null = lookupTypeInfo(rt)
		if (info != null) {
			return [info, null]
		}
	}

	let [gt, err] = await getBaseType((__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), rt)
	if (err != null) {
		return [null, err]
	}
	let info: typeInfo | $.VarRef<typeInfo> | null = (await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = (gt !== null && (gt as any).__isVarRef !== true && (gt as any).__goValue === undefined ? (gt as Exclude<gobType, null>) : $.pointerValue<Exclude<gobType, null>>(gt)).id(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new typeInfo({id: __goscriptLiteralField1}) })())
	let info$: typeInfo = info == null ? $.pointerTarget<typeInfo>(info) : (info as any).__isVarRef === true ? (info as any).value : (info as any).__goValue === undefined ? (info as any) : $.pointerTarget<typeInfo>(info)

	if ((ut$ as userTypeInfo).externalEnc != 0) {
		let [__goscriptShadow6, __goscriptShadow7] = await getType((__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), ut, rt)
		if (__goscriptShadow7 != null) {
			return [null, __goscriptShadow7]
		}
		let __goscriptShadow8: gobEncoderType | $.VarRef<gobEncoderType> | null = $.mustTypeAssert<gobEncoderType | $.VarRef<gobEncoderType> | null>(typeId_gobType((__goscriptAwait = (__goscriptShadow6 !== null && (__goscriptShadow6 as any).__isVarRef !== true && (__goscriptShadow6 as any).__goValue === undefined ? (__goscriptShadow6 as Exclude<gobType, null>) : $.pointerValue<Exclude<gobType, null>>(__goscriptShadow6)).id(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), /* @__PURE__ */ $.pointerType("gob.gobEncoderType"))
		switch ((ut$ as userTypeInfo).externalEnc) {
			case 1:
			{
				;(info$ as typeInfo).wire.GobEncoderT = __goscriptShadow8
				break
			}
			case 2:
			{
				;(info$ as typeInfo).wire.BinaryMarshalerT = __goscriptShadow8
				break
			}
			case 3:
			{
				;(info$ as typeInfo).wire.TextMarshalerT = __goscriptShadow8
				break
			}
		}
		rt = (ut$ as userTypeInfo).user
	} else {
		let t = typeId_gobType((info$ as typeInfo).id)
		{
			let typ: reflect.Type | null = rt
			switch ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case reflect.Array:
				{
					;(info$ as typeInfo).wire.ArrayT = ((t as any)?.__goType === "*gob.arrayType" && (t as any).__goValue === undefined && (t as any).__isTypedNil !== true ? ((t as any) as arrayType | $.VarRef<arrayType> | null) : $.mustTypeAssert<arrayType | $.VarRef<arrayType> | null>(t, /* @__PURE__ */ $.pointerType("gob.arrayType")))
					break
				}
				case reflect.Map:
				{
					;(info$ as typeInfo).wire.MapT = ((t as any)?.__goType === "*gob.mapType" && (t as any).__goValue === undefined && (t as any).__isTypedNil !== true ? ((t as any) as mapType | $.VarRef<mapType> | null) : $.mustTypeAssert<mapType | $.VarRef<mapType> | null>(t, /* @__PURE__ */ $.pointerType("gob.mapType")))
					break
				}
				case reflect.Slice:
				{
					if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 8) {
						;(info$ as typeInfo).wire.SliceT = ((t as any)?.__goType === "*gob.sliceType" && (t as any).__goValue === undefined && (t as any).__isTypedNil !== true ? ((t as any) as sliceType | $.VarRef<sliceType> | null) : $.mustTypeAssert<sliceType | $.VarRef<sliceType> | null>(t, /* @__PURE__ */ $.pointerType("gob.sliceType")))
					}
					break
				}
				case reflect.Struct:
				{
					;(info$ as typeInfo).wire.StructT = ((t as any)?.__goType === "*gob.structType" && (t as any).__goValue === undefined && (t as any).__isTypedNil !== true ? ((t as any) as structType | $.VarRef<structType> | null) : $.mustTypeAssert<structType | $.VarRef<structType> | null>(t, /* @__PURE__ */ $.pointerType("gob.structType")))
					break
				}
			}
		}
	}

	{
		let m: globalThis.Map<reflect.Type | null, typeInfo | $.VarRef<typeInfo> | null> | null = typeInfoMapInit
		if (m != null) {
			$.mapSet(m, rt, info)
			return [info, null]
		}
	}

	// Create new map with old contents plus new entry.
	let __goscriptTuple7: any = $.typeAssertTuple<globalThis.Map<reflect.Type | null, typeInfo | $.VarRef<typeInfo> | null> | null>(typeInfoMap.value.Load(), /* @__PURE__ */ $.mapType("reflect.Type", /* @__PURE__ */ $.pointerType("gob.typeInfo")))
	let m: globalThis.Map<reflect.Type | null, typeInfo | $.VarRef<typeInfo> | null> | null = __goscriptTuple7[0]
	let newm: globalThis.Map<reflect.Type | null, typeInfo | $.VarRef<typeInfo> | null> | null = (maps.Clone(m) as globalThis.Map<reflect.Type | null, typeInfo | $.VarRef<typeInfo> | null> | null)
	$.mapSet(newm, rt, info)
	typeInfoMap.value.Store($.interfaceValue(newm, "map[reflect.Type]*gob.typeInfo", /* @__PURE__ */ $.mapType("reflect.Type", /* @__PURE__ */ $.pointerType("gob.typeInfo"))))
	return [info, null]
}

export async function mustGetTypeInfo(rt: reflect.Type | null): globalThis.Promise<typeInfo | $.VarRef<typeInfo> | null> {
	let __goscriptTuple8: any = await getTypeInfo(await userType(rt))
	let t: typeInfo | $.VarRef<typeInfo> | null = __goscriptTuple8[0]
	let err = __goscriptTuple8[1]
	if (err != null) {
		$.panic($.concatString("getTypeInfo: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}
	return t
}

export let nameToConcreteType: $.VarRef<sync.Map> = $.varRef($.markAsStructValue(new sync.Map()))

export function __goscript_set_nameToConcreteType(__goscriptValue: sync.Map): void {
	$.assignStruct(nameToConcreteType.value, __goscriptValue)
}

export let concreteTypeToName: $.VarRef<sync.Map> = $.varRef($.markAsStructValue(new sync.Map()))

export function __goscript_set_concreteTypeToName(__goscriptValue: sync.Map): void {
	$.assignStruct(concreteTypeToName.value, __goscriptValue)
}

export async function RegisterName(name: string, value: any): globalThis.Promise<void> {
	if ($.stringEqual(name, "")) {
		// reserved for nil
		$.panic("attempt to register empty name")
	}

	let ut: userTypeInfo | $.VarRef<userTypeInfo> | null = await userType(reflect.TypeOf(value))
	let ut$: userTypeInfo = ut == null ? $.pointerTarget<userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<userTypeInfo>(ut)

	// Check for incompatible duplicates. The name must refer to the
	// same user type, and vice versa.

	// Store the name and type provided by the user....
	{
		let [t, dup] = await nameToConcreteType.value.LoadOrStore(name, (reflect.TypeOf(value) as any))
		if (dup && (!$.comparableEqual(t, (ut$ as userTypeInfo).user))) {
			$.panic(await fmt.Sprintf("gob: registering duplicate types for %q: %s != %s", name, t, ((ut$ as userTypeInfo).user as any)))
		}
	}

	// but the flattened type in the type table, since that's what decode needs.
	{
		let [n, dup] = await concreteTypeToName.value.LoadOrStore(((ut$ as userTypeInfo).base as any), name)
		if (dup && (!$.comparableEqual(n, name))) {
			await nameToConcreteType.value.Delete(name)
			$.panic(await fmt.Sprintf("gob: registering duplicate names for %s: %q != %q", ((ut$ as userTypeInfo).user as any), n, name))
		}
	}
}

export async function Register(value: any): globalThis.Promise<void> {
	// Default to printed representation for unnamed types
	let rt: reflect.Type | null = reflect.TypeOf(value)
	let name = (__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	// But for named types (or pointers to them), qualify with import path (but see inner comment).
	// Dereference one pointer looking for a named type.
	let star = ""
	if ($.stringEqual((__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "")) {
		{
			let pt: reflect.Type | null = rt
			if ((__goscriptAwait = (pt !== null && (pt as any).__isVarRef !== true && (pt as any).__goValue === undefined ? (pt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(pt)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
				star = "*"
				// NOTE: The following line should be rt = pt.Elem() to implement
				// what the comment above claims, but fixing it would break compatibility
				// with existing gobs.
				//
				// Given package p imported as "full/p" with these definitions:
				//     package p
				//     type T1 struct { ... }
				// this table shows the intended and actual strings used by gob to
				// name the types:
				//
				// Type      Correct string     Actual string
				//
				// T1        full/p.T1          full/p.T1
				// *T1       *full/p.T1         *p.T1
				//
				// The missing full path cannot be fixed without breaking existing gob decoders.
				rt = pt
			}
		}
	}
	if (!$.stringEqual((__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "")) {
		if ($.stringEqual((__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).PkgPath(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "")) {
			name = $.concatString(star, (__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		} else {
			name = $.concatString(($.concatString(($.concatString(star, (__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).PkgPath(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), ".")), (__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
	}

	await RegisterName(name, value)
}

export async function registerBasics(): globalThis.Promise<void> {
	await Register($.basicInterfaceValue($.int(0), "int"))
	await Register($.basicInterfaceValue($.int(0, 8), "int8"))
	await Register($.basicInterfaceValue($.int(0, 16), "int16"))
	await Register($.basicInterfaceValue($.int(0, 32), "int32"))
	await Register($.basicInterfaceValue(0n, "int64"))
	await Register($.basicInterfaceValue($.uint(0, 64), "uint"))
	await Register($.basicInterfaceValue($.uint(0, 8), "uint8"))
	await Register($.basicInterfaceValue($.uint(0, 16), "uint16"))
	await Register($.basicInterfaceValue($.uint(0, 32), "uint32"))
	await Register($.basicInterfaceValue(0n, "uint64"))
	await Register($.basicInterfaceValue(0, "float32"))
	await Register($.basicInterfaceValue(0, "float64"))
	await Register($.basicInterfaceValue($.complex(0, 0), "complex64"))
	await Register($.basicInterfaceValue($.complex(0, 0), "complex128"))
	await Register($.basicInterfaceValue(0, "uintptr"))
	await Register(false)
	await Register("")
	await Register($.interfaceValue(null, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	await Register($.interfaceValue(null, "[]int", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))))
	await Register($.interfaceValue(null, "[]int8", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8"))))
	await Register($.interfaceValue(null, "[]int16", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16"))))
	await Register($.interfaceValue(null, "[]int32", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))))
	await Register($.interfaceValue(null, "[]int64", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64"))))
	await Register($.interfaceValue(null, "[]uint", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint"))))
	await Register($.interfaceValue(null, "[]uint8", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	await Register($.interfaceValue(null, "[]uint16", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16"))))
	await Register($.interfaceValue(null, "[]uint32", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32"))))
	await Register($.interfaceValue(null, "[]uint64", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64"))))
	await Register($.interfaceValue(null, "[]float32", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32"))))
	await Register($.interfaceValue(null, "[]float64", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))))
	await Register($.interfaceValue(null, "[]complex64", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64"))))
	await Register($.interfaceValue(null, "[]complex128", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128"))))
	await Register($.interfaceValue(null, "[]uintptr", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr"))))
	await Register($.interfaceValue(null, "[]bool", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool"))))
	await Register($.interfaceValue(null, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
}

async function __goscriptInit1(): globalThis.Promise<void> {
	typeInfoMap.value.Store($.interfaceValue(typeInfoMapInit, "map[reflect.Type]*gob.typeInfo", /* @__PURE__ */ $.mapType("reflect.Type", /* @__PURE__ */ $.pointerType("gob.typeInfo"))))
	typeInfoMapInit = null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "gob.GobEncoder", zero: () => null, methods: {GobEncode: (receiver: any, ...args: any[]) => receiver.GobEncode(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "gob.GobDecoder", zero: () => null, methods: {GobDecode: (receiver: any, ...args: any[]) => receiver.GobDecode(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "encoding.BinaryMarshaler", zero: () => null, methods: {MarshalBinary: (receiver: any, ...args: any[]) => receiver.MarshalBinary(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "encoding.BinaryUnmarshaler", zero: () => null, methods: {UnmarshalBinary: (receiver: any, ...args: any[]) => receiver.UnmarshalBinary(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "encoding.TextMarshaler", zero: () => null, methods: {MarshalText: (receiver: any, ...args: any[]) => receiver.MarshalText(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "encoding.TextUnmarshaler", zero: () => null, methods: {UnmarshalText: (receiver: any, ...args: any[]) => receiver.UnmarshalText(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "gob.wireType", zero: () => new wireType(undefined, true) }})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "gob.arrayType", zero: () => new arrayType(undefined, true) }})
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "gob.CommonType", zero: () => new CommonType(undefined, true) }})
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "gob.sliceType", zero: () => new sliceType(undefined, true) }})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "gob.structType", zero: () => new structType(undefined, true) }})
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "gob.fieldType", zero: () => new fieldType(undefined, true) }})
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "gob.mapType", zero: () => new mapType(undefined, true) }})
}

var __goscriptAwait: any

export { __goscriptInit0 }

export { __goscriptInit1 }
