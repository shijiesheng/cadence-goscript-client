// Generated file based on extensions.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as sync from "@goscript/sync/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strings from "@goscript/strings/index.js"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_extensions_gogo from "./extensions_gogo.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import type * as __goscript_pointer_reflect_gogo from "./pointer_reflect_gogo.gs.ts"

import * as __goscript_properties from "./properties.gs.ts"

import * as __goscript_table_unmarshal from "./table_unmarshal.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strconv/index.js"
import "@goscript/sync/index.js"
import "@goscript/bytes/index.js"
import "@goscript/sort/index.js"
import "@goscript/strings/index.js"
import "./decode.gs.ts"
import "./extensions_gogo.gs.ts"
import "./lib.gs.ts"
import "./pointer_reflect.gs.ts"
import "./properties.gs.ts"
import "./table_unmarshal.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.ExtensionRange", "proto.extendableProto", "proto.extendableProtoV1", "proto.extensionAdapter", "proto.notLocker", "proto.XXX_InternalExtensions", "proto.ExtensionDesc", "proto.Extension", "proto.extPropKey"])

export type extendableProto = {
	ExtensionRangeArray(): $.Slice<ExtensionRange>
	ProtoMessage(): void
	Reset(): void
	String(): string | globalThis.Promise<string>
	extensionsRead(): [globalThis.Map<number, Extension> | null, sync.Locker | null] | globalThis.Promise<[globalThis.Map<number, Extension> | null, sync.Locker | null]>
	extensionsWrite(): globalThis.Map<number, Extension> | null | globalThis.Promise<globalThis.Map<number, Extension> | null>
}

$.registerInterfaceType(
	"proto.extendableProto",
	null,
	[$.methodSignature("ExtensionRangeArray", [], [/* @__PURE__ */ $.sliceType("proto.ExtensionRange")]), $.methodSignature("ProtoMessage"), $.methodSignature("Reset"), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("extensionsRead", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension"), "sync.Locker"]), $.methodSignature("extensionsWrite", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension")])]
);

export type extendableProtoV1 = {
	ExtensionMap(): globalThis.Map<number, Extension> | null
	ExtensionRangeArray(): $.Slice<ExtensionRange>
	ProtoMessage(): void
	Reset(): void
	String(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"proto.extendableProtoV1",
	null,
	[$.methodSignature("ExtensionMap", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension")]), $.methodSignature("ExtensionRangeArray", [], [/* @__PURE__ */ $.sliceType("proto.ExtensionRange")]), $.methodSignature("ProtoMessage"), $.methodSignature("Reset"), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class ExtensionRange {
	public get Start(): number {
		return this._fields.Start
	}

	public set Start(value: number) {
		this._fields.Start = value
	}

	public get End(): number {
		return this._fields.End
	}

	public set End(value: number) {
		this._fields.End = value
	}

	public _fields: {
		Start: number
		End: number
	}

	constructor(init?: Partial<{Start?: number, End?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Start: init?.Start ?? (0 as number),
			End: init?.End ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExtensionRange {
		return new ExtensionRange(this, true)
	}

	public __goscriptAssign(source: ExtensionRange): void {
		const target = this._fields
		const values = source._fields
		target.Start = values.Start
		target.End = values.End
	}

	static __typeInfo = $.registerStructType(
		"proto.ExtensionRange",
		() => new ExtensionRange(),
		() => [],
		ExtensionRange,
		() => [/* @__PURE__ */ $.structField("Start", /* @__PURE__ */ $.basicType("int32"), [0], 0, true), /* @__PURE__ */ $.structField("End", /* @__PURE__ */ $.basicType("int32"), [1], 4, true)]
	)
}

export class extensionAdapter {
	public get extendableProtoV1(): extendableProtoV1 | null {
		return this._fields.extendableProtoV1
	}

	public set extendableProtoV1(value: extendableProtoV1 | null) {
		this._fields.extendableProtoV1 = value
	}

	public _fields: {
		extendableProtoV1: extendableProtoV1 | null
	}

	constructor(init?: Partial<{extendableProtoV1?: extendableProtoV1 | null}>, __goscriptValue?: boolean) {
		this._fields = {
			extendableProtoV1: init?.extendableProtoV1 ?? (null! as extendableProtoV1 | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): extensionAdapter {
		return new extensionAdapter(this, true)
	}

	public __goscriptAssign(source: extensionAdapter): void {
		const target = this._fields
		const values = source._fields
		target.extendableProtoV1 = $.assignFieldValue(target.extendableProtoV1, values.extendableProtoV1, "proto.extendableProtoV1")
	}

	public async extensionsRead(): globalThis.Promise<[globalThis.Map<number, Extension> | null, sync.Locker | null]> {
		const e = this;
		return [$.pointerValue<Exclude<extendableProtoV1, null>>(e.extendableProtoV1).ExtensionMap(), $.interfaceValue<sync.Locker | null>(new notLocker(undefined, true), "proto.notLocker", "proto.notLocker")]
	}

	public async extensionsWrite(): globalThis.Promise<globalThis.Map<number, Extension> | null> {
		const e = this;
		return $.pointerValue<Exclude<extendableProtoV1, null>>(e.extendableProtoV1).ExtensionMap()
	}

	public ExtensionMap(): any {
		return $.pointerValue<Exclude<extendableProtoV1 | null, null>>(this.extendableProtoV1).ExtensionMap()
	}

	public ExtensionRangeArray(): any {
		return $.pointerValue<Exclude<extendableProtoV1 | null, null>>(this.extendableProtoV1).ExtensionRangeArray()
	}

	public ProtoMessage(): any {
		return $.pointerValue<Exclude<extendableProtoV1 | null, null>>(this.extendableProtoV1).ProtoMessage()
	}

	public async Reset(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<extendableProtoV1 | null, null>>(this.extendableProtoV1).Reset()
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<extendableProtoV1 | null, null>>(this.extendableProtoV1).String()
	}

	static __typeInfo = $.registerStructType(
		"proto.extensionAdapter",
		() => new extensionAdapter(),
		() => [$.methodSignature("extensionsRead", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension"), "sync.Locker"]), $.methodSignature("extensionsWrite", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension")]), $.methodSignature("ExtensionMap", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension")]), $.methodSignature("ExtensionRangeArray", [], [/* @__PURE__ */ $.sliceType("proto.ExtensionRange")]), $.methodSignature("ProtoMessage"), $.methodSignature("Reset"), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		extensionAdapter,
		() => [/* @__PURE__ */ $.structField("extendableProtoV1", "proto.extendableProtoV1", [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto", anonymous: true })]
	)
}

export class notLocker {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): notLocker {
		return new notLocker(this, true)
	}

	public __goscriptAssign(source: notLocker): void {
	}

	public Lock(): void {
		const n = this;
	}

	public Unlock(): void {
		const n = this;
	}

	static __typeInfo = $.registerStructType(
		"proto.notLocker",
		() => new notLocker(),
		() => [$.methodSignature("Lock"), $.methodSignature("Unlock")],
		notLocker,
		() => []
	)
}

export class XXX_InternalExtensions {
	// The struct must be indirect so that if a user inadvertently copies a
	// generated message and its embedded XXX_InternalExtensions, they
	// avoid the mayhem of a copied mutex.
	//
	// The mutex serializes all logically read-only operations to p.extensionMap.
	// It is up to the client to ensure that write operations to p.extensionMap are
	// mutually exclusive with other accesses.
	public get p(): $.VarRef<{"mu": sync.Mutex, "extensionMap": globalThis.Map<number, Extension> | null}> | null {
		return this._fields.p
	}

	public set p(value: $.VarRef<{"mu": sync.Mutex, "extensionMap": globalThis.Map<number, Extension> | null}> | null) {
		this._fields.p = value
	}

	public _fields: {
		p: $.VarRef<{"mu": sync.Mutex, "extensionMap": globalThis.Map<number, Extension> | null}> | null
	}

	constructor(init?: Partial<{p?: $.VarRef<{"mu": sync.Mutex, "extensionMap": globalThis.Map<number, Extension> | null}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			p: init?.p ?? (null! as $.VarRef<{"mu": sync.Mutex, "extensionMap": globalThis.Map<number, Extension> | null}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): XXX_InternalExtensions {
		return new XXX_InternalExtensions(this, true)
	}

	public __goscriptAssign(source: XXX_InternalExtensions): void {
		const target = this._fields
		const values = source._fields
		target.p = values.p
	}

	public extensionsRead(): [globalThis.Map<number, Extension> | null, sync.Locker | null] {
		const e: XXX_InternalExtensions | $.VarRef<XXX_InternalExtensions> | null = this;
		const e$: XXX_InternalExtensions = e == null ? $.pointerTarget<XXX_InternalExtensions>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<XXX_InternalExtensions>(e)
		if ((e$ as XXX_InternalExtensions).p == null) {
			return [null, null]
		}
		return [$.pointerValue<{"mu": sync.Mutex, "extensionMap": globalThis.Map<number, Extension> | null}>((e$ as XXX_InternalExtensions).p).extensionMap, $.interfaceValue<sync.Locker | null>($.fieldRef($.pointerValue<{"mu": sync.Mutex, "extensionMap": globalThis.Map<number, Extension> | null}>((e$ as XXX_InternalExtensions).p), "mu"), "*sync.Mutex", /* @__PURE__ */ $.pointerType("sync.Mutex"))]
	}

	public extensionsWrite(): globalThis.Map<number, Extension> | null {
		let e: XXX_InternalExtensions | $.VarRef<XXX_InternalExtensions> | null = this;
		const e$: XXX_InternalExtensions = e == null ? $.pointerTarget<XXX_InternalExtensions>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<XXX_InternalExtensions>(e)
		if ((e$ as XXX_InternalExtensions).p == null) {
			;(e$ as XXX_InternalExtensions).p = $.varRef<{"mu": sync.Mutex, "extensionMap": globalThis.Map<number, Extension> | null}>($.anonymousStructValue({"mu": $.markAsStructValue(new sync.Mutex()), "extensionMap": null}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("extensionMap", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension"), [1], 8, false, { pkgPath: "github.com/gogo/protobuf/proto" })] }))
			$.pointerValue<{"mu": sync.Mutex, "extensionMap": globalThis.Map<number, Extension> | null}>((e$ as XXX_InternalExtensions).p).extensionMap = $.makeMap<number, Extension>()
		}
		return $.pointerValue<{"mu": sync.Mutex, "extensionMap": globalThis.Map<number, Extension> | null}>((e$ as XXX_InternalExtensions).p).extensionMap
	}

	static __typeInfo = $.registerStructType(
		"proto.XXX_InternalExtensions",
		() => new XXX_InternalExtensions(),
		() => [$.methodSignature("extensionsRead", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension"), "sync.Locker"], true), $.methodSignature("extensionsWrite", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension")], true)],
		XXX_InternalExtensions,
		() => [/* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("extensionMap", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension"), [1], 8, false, { pkgPath: "github.com/gogo/protobuf/proto" })] }), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export class ExtensionDesc {
	public get ExtendedType(): __goscript_lib.Message | null {
		return this._fields.ExtendedType
	}

	public set ExtendedType(value: __goscript_lib.Message | null) {
		this._fields.ExtendedType = value
	}

	public get ExtensionType(): any {
		return this._fields.ExtensionType
	}

	public set ExtensionType(value: any) {
		this._fields.ExtensionType = value
	}

	public get Field(): number {
		return this._fields.Field
	}

	public set Field(value: number) {
		this._fields.Field = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Tag(): string {
		return this._fields.Tag
	}

	public set Tag(value: string) {
		this._fields.Tag = value
	}

	public get Filename(): string {
		return this._fields.Filename
	}

	public set Filename(value: string) {
		this._fields.Filename = value
	}

	public _fields: {
		ExtendedType: __goscript_lib.Message | null
		ExtensionType: any
		Field: number
		Name: string
		Tag: string
		Filename: string
	}

	constructor(init?: Partial<{ExtendedType?: __goscript_lib.Message | null, ExtensionType?: any, Field?: number, Name?: string, Tag?: string, Filename?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			ExtendedType: init?.ExtendedType ?? (null! as __goscript_lib.Message | null),
			ExtensionType: init?.ExtensionType ?? (null! as any),
			Field: init?.Field ?? (0 as number),
			Name: init?.Name ?? ("" as string),
			Tag: init?.Tag ?? ("" as string),
			Filename: init?.Filename ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExtensionDesc {
		return new ExtensionDesc(this, true)
	}

	public __goscriptAssign(source: ExtensionDesc): void {
		const target = this._fields
		const values = source._fields
		target.ExtendedType = $.assignFieldValue(target.ExtendedType, values.ExtendedType, "proto.Message")
		target.ExtensionType = $.assignFieldValue(target.ExtensionType, values.ExtensionType, { kind: $.TypeKind.Interface, methods: [] })
		target.Field = values.Field
		target.Name = values.Name
		target.Tag = values.Tag
		target.Filename = values.Filename
	}

	public async repeated(): globalThis.Promise<boolean> {
		const ed: ExtensionDesc | $.VarRef<ExtensionDesc> | null = this;
		let t = reflect.TypeOf($.pointerValue<ExtensionDesc>(ed).ExtensionType)
		return ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 8)
	}

	static __typeInfo = $.registerStructType(
		"proto.ExtensionDesc",
		() => new ExtensionDesc(),
		() => [$.methodSignature("repeated", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		ExtensionDesc,
		() => [/* @__PURE__ */ $.structField("ExtendedType", "proto.Message", [0], 0, true), /* @__PURE__ */ $.structField("ExtensionType", { kind: $.TypeKind.Interface, methods: [] }, [1], 16, true), /* @__PURE__ */ $.structField("Field", /* @__PURE__ */ $.basicType("int32"), [2], 32, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [3], 40, true), /* @__PURE__ */ $.structField("Tag", /* @__PURE__ */ $.basicType("string"), [4], 56, true), /* @__PURE__ */ $.structField("Filename", /* @__PURE__ */ $.basicType("string"), [5], 72, true)]
	)
}

export class Extension {
	// When an extension is stored in a message using SetExtension
	// only desc and value are set. When the message is marshaled
	// enc will be set to the encoded form of the message.
	//
	// When a message is unmarshaled and contains extensions, each
	// extension will have only enc set. When such an extension is
	// accessed using GetExtension (or GetExtensions) desc and value
	// will be set.
	public get desc(): ExtensionDesc | $.VarRef<ExtensionDesc> | null {
		return this._fields.desc
	}

	public set desc(value: ExtensionDesc | $.VarRef<ExtensionDesc> | null) {
		this._fields.desc = value
	}

	public get value(): any {
		return this._fields.value
	}

	public set value(value: any) {
		this._fields.value = value
	}

	public get enc(): $.Slice<number> {
		return this._fields.enc
	}

	public set enc(value: $.Slice<number>) {
		this._fields.enc = value
	}

	public _fields: {
		desc: ExtensionDesc | $.VarRef<ExtensionDesc> | null
		value: any
		enc: $.Slice<number>
	}

	constructor(init?: Partial<{desc?: ExtensionDesc | $.VarRef<ExtensionDesc> | null, value?: any, enc?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			desc: init?.desc ?? (null! as ExtensionDesc | $.VarRef<ExtensionDesc> | null),
			value: init?.value ?? (null! as any),
			enc: init?.enc ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Extension {
		return new Extension(this, true)
	}

	public __goscriptAssign(source: Extension): void {
		const target = this._fields
		const values = source._fields
		target.desc = values.desc
		target.value = $.assignFieldValue(target.value, values.value, { kind: $.TypeKind.Interface, methods: [] })
		target.enc = values.enc
	}

	public async Compare(that: Extension | $.VarRef<Extension> | null): globalThis.Promise<number> {
		const _this: Extension | $.VarRef<Extension> | null = this;
		{
			let err = await (_this !== null && (_this as any).__isVarRef !== true && (_this as any).__goValue === undefined ? ((_this as any) as Extension).Encode() : Extension.prototype.Encode.call(_this))
			if (err != null) {
				return 1
			}
		}
		{
			let err = await (that !== null && (that as any).__isVarRef !== true && (that as any).__goValue === undefined ? ((that as any) as Extension).Encode() : Extension.prototype.Encode.call(that))
			if (err != null) {
				return -1
			}
		}
		return bytes.Compare($.pointerValue<Extension>(_this).enc, $.pointerValue<Extension>(that).enc)
	}

	public async Encode(): globalThis.Promise<$.GoError> {
		let _this: Extension | $.VarRef<Extension> | null = this;
		const _this$: Extension = _this == null ? $.pointerTarget<Extension>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Extension>(_this)
		if ((_this$ as Extension).enc == null) {
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple0: any = await __goscript_extensions_gogo.encodeExtension((_this$ as Extension).desc, (_this$ as Extension).value);
			;(_this$ as Extension).enc = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			if (err != null) {
				return err
			}
		}
		return null
	}

	public async Equal(that: Extension | $.VarRef<Extension> | null): globalThis.Promise<boolean> {
		const _this: Extension | $.VarRef<Extension> | null = this;
		{
			let err = await (_this !== null && (_this as any).__isVarRef !== true && (_this as any).__goValue === undefined ? ((_this as any) as Extension).Encode() : Extension.prototype.Encode.call(_this))
			if (err != null) {
				return false
			}
		}
		{
			let err = await (that !== null && (that as any).__isVarRef !== true && (that as any).__goValue === undefined ? ((that as any) as Extension).Encode() : Extension.prototype.Encode.call(that))
			if (err != null) {
				return false
			}
		}
		return bytes.Equal($.pointerValue<Extension>(_this).enc, $.pointerValue<Extension>(that).enc)
	}

	public async GoString(): globalThis.Promise<string> {
		const _this = $.varRef(this);
		{
			let err = await _this.value.Encode()
			if (err != null) {
				return fmt.Sprintf("error encoding extension: %v", (err as any))
			}
		}
		return fmt.Sprintf("proto.NewExtension(%#v)", $.interfaceValue(_this.value.enc, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	}

	static __typeInfo = $.registerStructType(
		"proto.Extension",
		() => new Extension(),
		() => [$.methodSignature("Compare", [["that", /* @__PURE__ */ $.pointerType("proto.Extension")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Encode", [], ["error"], true), $.methodSignature("Equal", [["that", /* @__PURE__ */ $.pointerType("proto.Extension")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")])],
		Extension,
		() => [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("proto.ExtensionDesc"), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("value", { kind: $.TypeKind.Interface, methods: [] }, [1], 8, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("enc", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 24, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export class extPropKey {
	public get base(): reflect.Type | null {
		return this._fields.base
	}

	public set base(value: reflect.Type | null) {
		this._fields.base = value
	}

	public get field(): number {
		return this._fields.field
	}

	public set field(value: number) {
		this._fields.field = value
	}

	public _fields: {
		base: reflect.Type | null
		field: number
	}

	constructor(init?: Partial<{base?: reflect.Type | null, field?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			base: init?.base ?? (null! as reflect.Type | null),
			field: init?.field ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): extPropKey {
		return new extPropKey(this, true)
	}

	public __goscriptAssign(source: extPropKey): void {
		const target = this._fields
		const values = source._fields
		target.base = $.assignFieldValue(target.base, values.base, "reflect.Type")
		target.field = values.field
	}

	static __typeInfo = $.registerStructType(
		"proto.extPropKey",
		() => new extPropKey(),
		() => [],
		extPropKey,
		() => [/* @__PURE__ */ $.structField("base", "reflect.Type", [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("field", /* @__PURE__ */ $.basicType("int32"), [1], 16, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export let ErrMissingExtension: $.GoError = errors.New("proto: missing extension")

export function __goscript_set_ErrMissingExtension(__goscriptValue: $.GoError): void {
	ErrMissingExtension = __goscriptValue
}

export function extendable(p: any): [extendableProto | null, $.GoError] {
	{
		const __goscriptTypeSwitchValue = p
		switch (true) {
			case $.typeAssert<extendableProto | null>(__goscriptTypeSwitchValue, "proto.extendableProto").ok:
				{
					let p: extendableProto | null = $.typeAssert<extendableProto | null>(__goscriptTypeSwitchValue, "proto.extendableProto").value
					if (isNilPtr((p as any))) {
						return [null, fmt.Errorf("proto: nil %T is not extendable", (p as any))]
					}
					return [p, null]
				}
				break
			case $.typeAssert<extendableProtoV1 | null>(__goscriptTypeSwitchValue, "proto.extendableProtoV1").ok:
				{
					let p: extendableProtoV1 | null = $.typeAssert<extendableProtoV1 | null>(__goscriptTypeSwitchValue, "proto.extendableProtoV1").value
					if (isNilPtr((p as any))) {
						return [null, fmt.Errorf("proto: nil %T is not extendable", (p as any))]
					}
					return [$.interfaceValue<extendableProto | null>(new extensionAdapter({extendableProtoV1: p}, true), "proto.extensionAdapter", "proto.extensionAdapter"), null]
				}
				break
			case $.typeAssert<__goscript_extensions_gogo.extensionsBytes | null>(__goscriptTypeSwitchValue, "proto.extensionsBytes").ok:
				{
					let p: __goscript_extensions_gogo.extensionsBytes | null = $.typeAssert<__goscript_extensions_gogo.extensionsBytes | null>(__goscriptTypeSwitchValue, "proto.extensionsBytes").value
					return [$.interfaceValue<extendableProto | null>(new __goscript_extensions_gogo.slowExtensionAdapter({extensionsBytes: p}, true), "proto.slowExtensionAdapter", "proto.slowExtensionAdapter"), null]
				}
				break
		}
	}
	// Don't allocate a specific error containing %T:
	// this is the hot path for Clone and MarshalText.
	return [null, errNotExtendable]
}

export let errNotExtendable: $.GoError = errors.New("proto: not an extendable proto.Message")

export function __goscript_set_errNotExtendable(__goscriptValue: $.GoError): void {
	errNotExtendable = __goscriptValue
}

export function isNilPtr(x: any): boolean {
	let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(x)))
	return ($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) && $.markAsStructValue($.cloneStructValue(v)).IsNil()
}

export async function SetRawExtension(base: __goscript_lib.Message | null, id: number, b: $.Slice<number>): globalThis.Promise<void> {
	{
		let [ebase, ok] = $.typeAssertTuple<__goscript_extensions_gogo.extensionsBytes | null>(base, "proto.extensionsBytes")
		if (ok) {
			await clearExtension(base, id)
			let ext = ((__goscriptAwait = (ebase !== null && (ebase as any).__isVarRef !== true && (ebase as any).__goValue === undefined ? (ebase as Exclude<__goscript_extensions_gogo.extensionsBytes, null>) : $.pointerValue<Exclude<__goscript_extensions_gogo.extensionsBytes, null>>(ebase)).GetExtensions(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<$.Slice<number>> | null)
			ext!.value = $.appendSlice($.pointerValue<$.Slice<number>>(ext), b, $.byteSliceHint)
			return
		}
	}
	let [epb, err] = extendable((base as any))
	if (err != null) {
		return
	}
	let extmap: globalThis.Map<number, Extension> | null = ((__goscriptAwait = (epb !== null && (epb as any).__isVarRef !== true && (epb as any).__goValue === undefined ? (epb as Exclude<extendableProto, null>) : $.pointerValue<Exclude<extendableProto, null>>(epb)).extensionsWrite(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<number, Extension> | null)
	$.mapSet(extmap, id, new Extension({enc: b}, true))
}

export function isExtensionField(pb: extendableProto | null, field: number): boolean {
	for (let __goscriptRangeTarget0 = (pb !== null && (pb as any).__isVarRef !== true && (pb as any).__goValue === undefined ? (pb as Exclude<extendableProto, null>) : $.pointerValue<Exclude<extendableProto, null>>(pb)).ExtensionRangeArray(), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let er = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as ExtensionRange)).clone()
		if ((er.Start <= field) && (field <= er.End)) {
			return true
		}
	}
	return false
}

export function checkExtensionTypes(pb: extendableProto | null, extension: ExtensionDesc | $.VarRef<ExtensionDesc> | null): $.GoError {
	const extension$: ExtensionDesc = extension == null ? $.pointerTarget<ExtensionDesc>(extension) : (extension as any).__isVarRef === true ? (extension as any).value : (extension as any).__goValue === undefined ? (extension as any) : $.pointerTarget<ExtensionDesc>(extension)
	let pbi: any = (pb as any)
	// Check the extended type.
	{
		let [ea, ok] = $.typeAssertTuple<extensionAdapter>(pbi, "proto.extensionAdapter")
		if (ok) {
			pbi = (ea.extendableProtoV1 as any)
		}
	}
	{
		let [ea, ok] = $.typeAssertTuple<__goscript_extensions_gogo.slowExtensionAdapter>(pbi, "proto.slowExtensionAdapter")
		if (ok) {
			pbi = (ea.extensionsBytes as any)
		}
	}
	{
		let a = reflect.TypeOf(pbi)
		let b = reflect.TypeOf(((extension$ as ExtensionDesc).ExtendedType as any))
		if (!$.comparableEqual(a, b)) {
			return fmt.Errorf("proto: bad extended type; %v does not extend %v", (b as any), (a as any))
		}
	}
	// Check the range.
	if (!isExtensionField(pb, (extension$ as ExtensionDesc).Field)) {
		return errors.New("proto: bad extension number; not in declared ranges")
	}
	return null
}

export var extProp: $.VarRef<{"RWMutex": sync.RWMutex, "m": globalThis.Map<extPropKey, __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null> | null}>

export function __goscript_init_extProp(): void {
	if (((extProp) as any) === undefined) {
		extProp = $.varRef($.anonymousStructValue({RWMutex: ($.markAsStructValue(new sync.RWMutex()) as sync.RWMutex), m: $.makeMap<extPropKey, __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null>()}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("RWMutex", "sync.RWMutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("m", /* @__PURE__ */ $.mapType("proto.extPropKey", /* @__PURE__ */ $.pointerType("proto.Properties")), [1], 24, false, { pkgPath: "github.com/gogo/protobuf/proto" })] }))
	}
}

export function __goscript_get_extProp(): $.VarRef<{"RWMutex": sync.RWMutex, "m": globalThis.Map<extPropKey, __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null> | null}> {
	if (((extProp) as any) === undefined) {
		__goscript_init_extProp()
	}
	return extProp
}

export function __goscript_set_extProp(__goscriptValue: {"RWMutex": sync.RWMutex, "m": globalThis.Map<extPropKey, __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null> | null}): void {
	$.assignStruct(__goscript_get_extProp().value, __goscriptValue)
}

export async function extensionProperties(ed: ExtensionDesc | $.VarRef<ExtensionDesc> | null): globalThis.Promise<__goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null> {
	using __defer = new $.DisposableStack()
	const ed$: ExtensionDesc = ed == null ? $.pointerTarget<ExtensionDesc>(ed) : (ed as any).__isVarRef === true ? (ed as any).value : (ed as any).__goValue === undefined ? (ed as any) : $.pointerTarget<ExtensionDesc>(ed)
	let key = (() => { const __goscriptLiteralField0 = reflect.TypeOf(((ed$ as ExtensionDesc).ExtendedType as any)); return new extPropKey({base: __goscriptLiteralField0, field: (ed$ as ExtensionDesc).Field}, true) })()

	await $.pointerValue<{"RWMutex": sync.RWMutex, "m": globalThis.Map<extPropKey, __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null> | null}>(__goscript_get_extProp()).RWMutex.RLock()
	{
		let __goscriptTuple1: any = $.mapGet<extPropKey, __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null, __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null>($.pointerValue<{"RWMutex": sync.RWMutex, "m": globalThis.Map<extPropKey, __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null> | null}>(__goscript_get_extProp()).m, key, null)
		let prop: __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (ok) {
			$.pointerValue<{"RWMutex": sync.RWMutex, "m": globalThis.Map<extPropKey, __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null> | null}>(__goscript_get_extProp()).RWMutex.RUnlock()
			return prop
		}
	}
	$.pointerValue<{"RWMutex": sync.RWMutex, "m": globalThis.Map<extPropKey, __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null> | null}>(__goscript_get_extProp()).RWMutex.RUnlock()

	await $.pointerValue<{"RWMutex": sync.RWMutex, "m": globalThis.Map<extPropKey, __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null> | null}>(__goscript_get_extProp()).RWMutex.Lock()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<{"RWMutex": sync.RWMutex, "m": globalThis.Map<extPropKey, __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null> | null}>(__goscript_get_extProp()).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })
	// Check again.
	{
		let __goscriptTuple2: any = $.mapGet<extPropKey, __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null, __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null>($.pointerValue<{"RWMutex": sync.RWMutex, "m": globalThis.Map<extPropKey, __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null> | null}>(__goscript_get_extProp()).m, key, null)
		let prop: __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (ok) {
			return prop
		}
	}

	let prop: __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null = new __goscript_properties.Properties()
	await (prop !== null && (prop as any).__isVarRef !== true && (prop as any).__goValue === undefined ? ((prop as any) as __goscript_properties.Properties).Init(reflect.TypeOf((ed$ as ExtensionDesc).ExtensionType), "unknown_name", (ed$ as ExtensionDesc).Tag, null) : __goscript_properties.Properties.prototype.Init.call(prop, reflect.TypeOf((ed$ as ExtensionDesc).ExtensionType), "unknown_name", (ed$ as ExtensionDesc).Tag, null))
	$.mapSet($.pointerValue<{"RWMutex": sync.RWMutex, "m": globalThis.Map<extPropKey, __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null> | null}>(__goscript_get_extProp()).m, (key).clone(), prop)
	return prop
}

export async function HasExtension(pb: __goscript_lib.Message | null, extension: ExtensionDesc | $.VarRef<ExtensionDesc> | null): globalThis.Promise<boolean> {
	const extension$: ExtensionDesc = extension == null ? $.pointerTarget<ExtensionDesc>(extension) : (extension as any).__isVarRef === true ? (extension as any).value : (extension as any).__goValue === undefined ? (extension as any) : $.pointerTarget<ExtensionDesc>(extension)
	{
		let [epb, doki] = $.typeAssertTuple<__goscript_extensions_gogo.extensionsBytes | null>(pb, "proto.extensionsBytes")
		if (doki) {
			let ext = ((__goscriptAwait = (epb !== null && (epb as any).__isVarRef !== true && (epb as any).__goValue === undefined ? (epb as Exclude<__goscript_extensions_gogo.extensionsBytes, null>) : $.pointerValue<Exclude<__goscript_extensions_gogo.extensionsBytes, null>>(epb)).GetExtensions(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<$.Slice<number>> | null)
			let buf: $.Slice<number> = $.pointerValue<$.Slice<number>>(ext)
			let o = 0
			while (o < $.sliceLen(buf)) {
				let [tag, n] = __goscript_decode.DecodeVarint($.goSlice(buf, o, undefined))
				let fieldNum = $.int($.uint64Shr(tag, 3n), 32)
				if ($.int(fieldNum, 32) == (extension$ as ExtensionDesc).Field) {
					return true
				}
				let wireType = $.int($.uint64And(tag, 7n))
				o = o + (n)
				let [l, err] = __goscript_extensions_gogo.size($.goSlice(buf, o, undefined), wireType)
				if (err != null) {
					return false
				}
				o = o + (l)
			}
			return false
		}
	}
	// TODO: Check types, field numbers, etc.?
	let [epb, err] = extendable((pb as any))
	if (err != null) {
		return false
	}
	let __goscriptTuple3: any = await (epb !== null && (epb as any).__isVarRef !== true && (epb as any).__goValue === undefined ? (epb as Exclude<extendableProto, null>) : $.pointerValue<Exclude<extendableProto, null>>(epb)).extensionsRead()
	let extmap: globalThis.Map<number, Extension> | null = __goscriptTuple3[0]
	let mu = __goscriptTuple3[1]
	if (extmap == null) {
		return false
	}
	await (mu !== null && (mu as any).__isVarRef !== true && (mu as any).__goValue === undefined ? (mu as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(mu)).Lock()
	let [, ok] = $.mapGet<number, Extension, Extension>(extmap, (extension$ as ExtensionDesc).Field, new Extension(undefined, true))
	void (__goscriptAwait = (mu !== null && (mu as any).__isVarRef !== true && (mu as any).__goValue === undefined ? (mu as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(mu)).Unlock(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return ok
}

export async function ClearExtension(pb: __goscript_lib.Message | null, extension: ExtensionDesc | $.VarRef<ExtensionDesc> | null): globalThis.Promise<void> {
	await clearExtension(pb, $.pointerValue<ExtensionDesc>(extension).Field)
}

export async function clearExtension(pb: __goscript_lib.Message | null, fieldNum: number): globalThis.Promise<void> {
	{
		let [epb, ok] = $.typeAssertTuple<__goscript_extensions_gogo.extensionsBytes | null>(pb, "proto.extensionsBytes")
		if (ok) {
			let offset = 0
			while (offset != -1) {
				offset = await __goscript_extensions_gogo.deleteExtension(epb, fieldNum, offset)
			}
			return
		}
	}
	let [epb, err] = extendable((pb as any))
	if (err != null) {
		return
	}
	// TODO: Check types, field numbers, etc.?
	let extmap: globalThis.Map<number, Extension> | null = ((__goscriptAwait = (epb !== null && (epb as any).__isVarRef !== true && (epb as any).__goValue === undefined ? (epb as Exclude<extendableProto, null>) : $.pointerValue<Exclude<extendableProto, null>>(epb)).extensionsWrite(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<number, Extension> | null)
	$.deleteMapEntry(extmap, fieldNum)
}

export async function GetExtension(pb: __goscript_lib.Message | null, extension: ExtensionDesc | $.VarRef<ExtensionDesc> | null): globalThis.Promise<[any, $.GoError]> {
	await using __defer = new $.AsyncDisposableStack()
	const extension$: ExtensionDesc = extension == null ? $.pointerTarget<ExtensionDesc>(extension) : (extension as any).__isVarRef === true ? (extension as any).value : (extension as any).__goValue === undefined ? (extension as any) : $.pointerTarget<ExtensionDesc>(extension)
	{
		let [epb, doki] = $.typeAssertTuple<__goscript_extensions_gogo.extensionsBytes | null>(pb, "proto.extensionsBytes")
		if (doki) {
			let ext = ((__goscriptAwait = (epb !== null && (epb as any).__isVarRef !== true && (epb as any).__goValue === undefined ? (epb as Exclude<__goscript_extensions_gogo.extensionsBytes, null>) : $.pointerValue<Exclude<__goscript_extensions_gogo.extensionsBytes, null>>(epb)).GetExtensions(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<$.Slice<number>> | null)
			return __goscript_extensions_gogo.decodeExtensionFromBytes(extension, $.pointerValue<$.Slice<number>>(ext))
		}
	}

	let [epb, err] = extendable((pb as any))
	if (err != null) {
		return [null, err]
	}

	if ((extension$ as ExtensionDesc).ExtendedType != null) {
		// can only check type if this is a complete descriptor
		{
			let cerr = checkExtensionTypes(epb, extension)
			if (cerr != null) {
				return [null, cerr]
			}
		}
	}

	let __goscriptTuple4: any = await (epb !== null && (epb as any).__isVarRef !== true && (epb as any).__goValue === undefined ? (epb as Exclude<extendableProto, null>) : $.pointerValue<Exclude<extendableProto, null>>(epb)).extensionsRead()
	let emap: globalThis.Map<number, Extension> | null = __goscriptTuple4[0]
	let mu = __goscriptTuple4[1]
	if (emap == null) {
		return defaultExtensionValue(extension)
	}
	await (mu !== null && (mu as any).__isVarRef !== true && (mu as any).__goValue === undefined ? (mu as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(mu)).Lock()
	const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((mu !== null && (mu as any).__isVarRef !== true && (mu as any).__goValue === undefined ? (mu as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(mu))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.Locker.Unlock-fm")
	__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
	let [e, ok] = $.mapGet<number, Extension, Extension>(emap, (extension$ as ExtensionDesc).Field, new Extension(undefined, true))
	if (!ok) {
		// defaultExtensionValue returns the default value or
		// ErrMissingExtension if there is no default.
		return await defaultExtensionValue(extension)
	}

	if (e.value != null) {
		// Already decoded. Check the descriptor, though.
		if (!$.pointerEqual(e.desc, extension)) {
			// This shouldn't happen. If it does, it means that
			// GetExtension was called twice with two different
			// descriptors with the same field number.
			return [null, errors.New("proto: descriptor conflict")]
		}
		return [e.value, null]
	}

	if ((extension$ as ExtensionDesc).ExtensionType == null) {
		// incomplete descriptor
		return [$.interfaceValue(e.enc, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), null]
	}

	let __goscriptTuple5: any = await decodeExtension(e.enc, extension)
	let v = __goscriptTuple5[0]
	err = __goscriptTuple5[1]
	if (err != null) {
		return [null, err]
	}

	// Remember the decoded version and drop the encoded version.
	// That way it is safe to mutate what we return.
	e.value = v
	e.desc = extension
	e.enc = null
	$.mapSet(emap, (extension$ as ExtensionDesc).Field, (e).clone())
	return [e.value, null]
}

export async function defaultExtensionValue(extension: ExtensionDesc | $.VarRef<ExtensionDesc> | null): globalThis.Promise<[any, $.GoError]> {
	const extension$: ExtensionDesc = extension == null ? $.pointerTarget<ExtensionDesc>(extension) : (extension as any).__isVarRef === true ? (extension as any).value : (extension as any).__goValue === undefined ? (extension as any) : $.pointerTarget<ExtensionDesc>(extension)
	if ((extension$ as ExtensionDesc).ExtensionType == null) {
		// incomplete descriptor, so no default
		return [null, ErrMissingExtension]
	}

	let t = reflect.TypeOf((extension$ as ExtensionDesc).ExtensionType)
	let props: __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null = await extensionProperties(extension)

	let __goscriptTuple6: any = await __goscript_lib.fieldDefault(t, props)
	let sf: __goscript_lib.scalarField | $.VarRef<__goscript_lib.scalarField> | null = __goscriptTuple6[0]
	let err = __goscriptTuple6[2]
	let sf$: __goscript_lib.scalarField = sf == null ? $.pointerTarget<__goscript_lib.scalarField>(sf) : (sf as any).__isVarRef === true ? (sf as any).value : (sf as any).__goValue === undefined ? (sf as any) : $.pointerTarget<__goscript_lib.scalarField>(sf)
	if (err != null) {
		return [null, err]
	}

	if ((sf == null) || ((sf$ as __goscript_lib.scalarField).value == null)) {
		// There is no default value.
		return [null, ErrMissingExtension]
	}

	if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) {
		// We do not need to return a Ptr, we can directly return sf.value.
		return [(sf$ as __goscript_lib.scalarField).value, null]
	}

	// We need to return an interface{} that is a pointer to sf.value.
	let value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(t)!))).Elem()))
	$.markAsStructValue($.cloneStructValue(value)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(value)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
	if ((sf$ as __goscript_lib.scalarField).kind == 5) {
		// We may have an int32 or an enum, but the underlying data is int32.
		// Since we can't set an int32 into a non int32 reflect.value directly
		// set it as a int32.
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(value)).Elem())).SetInt($.int64($.mustTypeAssert<number>((sf$ as __goscript_lib.scalarField).value, /* @__PURE__ */ $.basicType("int32"))))
	} else {
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(value)).Elem())).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf((sf$ as __goscript_lib.scalarField).value))))
	}
	return [$.markAsStructValue($.cloneStructValue(value)).Interface(), null]
}

export async function decodeExtension(b: $.Slice<number>, extension: ExtensionDesc | $.VarRef<ExtensionDesc> | null): globalThis.Promise<[any, $.GoError]> {
	const extension$: ExtensionDesc = extension == null ? $.pointerTarget<ExtensionDesc>(extension) : (extension as any).__isVarRef === true ? (extension as any).value : (extension as any).__goValue === undefined ? (extension as any) : $.pointerTarget<ExtensionDesc>(extension)
	let t = reflect.TypeOf((extension$ as ExtensionDesc).ExtensionType)
	let unmarshal = await __goscript_table_unmarshal.typeUnmarshaler(t, (extension$ as ExtensionDesc).Tag)

	// t is a pointer to a struct, pointer to basic type or a slice.
	// Allocate space to store the pointer/slice.
	let value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(t)!))).Elem()))

	let err: $.GoError = null! as $.GoError
	while (true) {
		let [x, n] = __goscript_table_unmarshal.decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		let wire = $.int(x) & 7

		let __goscriptTuple7: any = await unmarshal!(b, __goscript_pointer_reflect.valToPointer($.markAsStructValue($.cloneStructValue(value)).Addr()), wire)
		b = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}

		if ($.sliceLen(b) == 0) {
			break
		}
	}
	return [$.markAsStructValue($.cloneStructValue(value)).Interface(), null]
}

export async function GetExtensions(pb: __goscript_lib.Message | null, es: $.Slice<ExtensionDesc | $.VarRef<ExtensionDesc> | null>): globalThis.Promise<[$.Slice<any>, $.GoError]> {
	let extensions: $.Slice<any> = null! as $.Slice<any>
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple8: any = extendable((pb as any))
	let epb = __goscriptTuple8[0]
	err = __goscriptTuple8[1]
	if (err != null) {
		return [null, err]
	}
	extensions = $.makeSlice<any>($.sliceLen(es))
	for (let __goscriptRangeTarget1 = es, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow0 = $.sliceRange(extensions), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let e = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as ExtensionDesc | $.VarRef<ExtensionDesc> | null)
		let __goscriptTuple9: any = await GetExtension((epb as __goscript_lib.Message | null), e);
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if ($.comparableEqual(err, ErrMissingExtension)) {
			err = null
		}
		if (err != null) {
			return [extensions, err]
		}
	}
	return [extensions, err]
}

export async function ExtensionDescs(pb: __goscript_lib.Message | null): globalThis.Promise<[$.Slice<ExtensionDesc | $.VarRef<ExtensionDesc> | null>, $.GoError]> {
	await using __defer = new $.AsyncDisposableStack()
	let [epb, err] = extendable((pb as any))
	if (err != null) {
		return [null, err]
	}
	let registeredExtensions: globalThis.Map<number, ExtensionDesc | $.VarRef<ExtensionDesc> | null> | null = await RegisteredExtensions(pb)

	let __goscriptTuple10: any = await (epb !== null && (epb as any).__isVarRef !== true && (epb as any).__goValue === undefined ? (epb as Exclude<extendableProto, null>) : $.pointerValue<Exclude<extendableProto, null>>(epb)).extensionsRead()
	let emap: globalThis.Map<number, Extension> | null = __goscriptTuple10[0]
	let mu = __goscriptTuple10[1]
	if (emap == null) {
		return [null, null]
	}
	await (mu !== null && (mu as any).__isVarRef !== true && (mu as any).__goValue === undefined ? (mu as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(mu)).Lock()
	const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((mu !== null && (mu as any).__isVarRef !== true && (mu as any).__goValue === undefined ? (mu as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(mu))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.Locker.Unlock-fm")
	__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee2(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
	let extensions: $.Slice<ExtensionDesc | $.VarRef<ExtensionDesc> | null> = $.makeSlice<ExtensionDesc | $.VarRef<ExtensionDesc> | null>(0, $.len(emap))
	for (const [extid, e] of emap?.entries() ?? []) {
		let desc: ExtensionDesc | $.VarRef<ExtensionDesc> | null = e.desc
		if (desc == null) {
			desc = $.mapGet<number, ExtensionDesc | $.VarRef<ExtensionDesc> | null, ExtensionDesc | $.VarRef<ExtensionDesc> | null>(registeredExtensions, extid, null)[0]
			if (desc == null) {
				desc = new ExtensionDesc({Field: extid})
			}
		}

		extensions = $.appendOne(extensions, desc, $.appendZeros.nil)
	}
	return [extensions, null]
}

export async function SetExtension(pb: __goscript_lib.Message | null, extension: ExtensionDesc | $.VarRef<ExtensionDesc> | null, value: any): globalThis.Promise<$.GoError> {
	const extension$: ExtensionDesc = extension == null ? $.pointerTarget<ExtensionDesc>(extension) : (extension as any).__isVarRef === true ? (extension as any).value : (extension as any).__goValue === undefined ? (extension as any) : $.pointerTarget<ExtensionDesc>(extension)
	{
		let [epb, ok] = $.typeAssertTuple<__goscript_extensions_gogo.extensionsBytes | null>(pb, "proto.extensionsBytes")
		if (ok) {
			await ClearExtension(pb, extension)
			let __goscriptTuple11: any = await __goscript_extensions_gogo.encodeExtension(extension, value)
			let newb: $.Slice<number> = __goscriptTuple11[0]
			let err = __goscriptTuple11[1]
			if (err != null) {
				return err
			}
			let bb = ((__goscriptAwait = (epb !== null && (epb as any).__isVarRef !== true && (epb as any).__goValue === undefined ? (epb as Exclude<__goscript_extensions_gogo.extensionsBytes, null>) : $.pointerValue<Exclude<__goscript_extensions_gogo.extensionsBytes, null>>(epb)).GetExtensions(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<$.Slice<number>> | null)
			bb!.value = $.appendSlice($.pointerValue<$.Slice<number>>(bb), newb, $.byteSliceHint)
			return null
		}
	}
	let [epb, err] = extendable((pb as any))
	if (err != null) {
		return err
	}
	{
		let __goscriptShadow0 = checkExtensionTypes(epb, extension)
		if (__goscriptShadow0 != null) {
			return __goscriptShadow0
		}
	}
	let typ = reflect.TypeOf((extension$ as ExtensionDesc).ExtensionType)
	if (!$.comparableEqual(typ, reflect.TypeOf(value))) {
		return fmt.Errorf("proto: bad extension value type. got: %T, want: %T", value, (extension$ as ExtensionDesc).ExtensionType)
	}
	// nil extension values need to be caught early, because the
	// encoder can't distinguish an ErrNil due to a nil extension
	// from an ErrNil due to a missing field. Extensions are
	// always optional, so the encoder would just swallow the error
	// and drop all the extensions from the encoded message.
	if ($.markAsStructValue($.cloneStructValue(reflect.ValueOf(value))).IsNil()) {
		return fmt.Errorf("proto: SetExtension called with nil value of type %T", value)
	}

	let extmap: globalThis.Map<number, Extension> | null = ((__goscriptAwait = (epb !== null && (epb as any).__isVarRef !== true && (epb as any).__goValue === undefined ? (epb as Exclude<extendableProto, null>) : $.pointerValue<Exclude<extendableProto, null>>(epb)).extensionsWrite(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<number, Extension> | null)
	$.mapSet(extmap, (extension$ as ExtensionDesc).Field, new Extension({desc: extension, value: value}, true))
	return null
}

export async function ClearAllExtensions(pb: __goscript_lib.Message | null): globalThis.Promise<void> {
	{
		let [epb, doki] = $.typeAssertTuple<__goscript_extensions_gogo.extensionsBytes | null>(pb, "proto.extensionsBytes")
		if (doki) {
			let ext = ((__goscriptAwait = (epb !== null && (epb as any).__isVarRef !== true && (epb as any).__goValue === undefined ? (epb as Exclude<__goscript_extensions_gogo.extensionsBytes, null>) : $.pointerValue<Exclude<__goscript_extensions_gogo.extensionsBytes, null>>(epb)).GetExtensions(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<$.Slice<number>> | null)
			ext!.value = new Uint8Array([]) as $.Slice<number>
			return
		}
	}
	let [epb, err] = extendable((pb as any))
	if (err != null) {
		return
	}
	let m: globalThis.Map<number, Extension> | null = ((__goscriptAwait = (epb !== null && (epb as any).__isVarRef !== true && (epb as any).__goValue === undefined ? (epb as Exclude<extendableProto, null>) : $.pointerValue<Exclude<extendableProto, null>>(epb)).extensionsWrite(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<number, Extension> | null)
	for (const [k, __rangeValue] of m?.entries() ?? []) {
		$.deleteMapEntry(m, k)
	}
}

export let extensionMaps: globalThis.Map<reflect.Type | null, globalThis.Map<number, ExtensionDesc | $.VarRef<ExtensionDesc> | null> | null> | null = $.makeMap<reflect.Type | null, globalThis.Map<number, ExtensionDesc | $.VarRef<ExtensionDesc> | null> | null>()

export function __goscript_set_extensionMaps(__goscriptValue: globalThis.Map<reflect.Type | null, globalThis.Map<number, ExtensionDesc | $.VarRef<ExtensionDesc> | null> | null> | null): void {
	extensionMaps = __goscriptValue
}

export async function RegisterExtension(desc: ExtensionDesc | $.VarRef<ExtensionDesc> | null): globalThis.Promise<void> {
	const desc$: ExtensionDesc = desc == null ? $.pointerTarget<ExtensionDesc>(desc) : (desc as any).__isVarRef === true ? (desc as any).value : (desc as any).__goValue === undefined ? (desc as any) : $.pointerTarget<ExtensionDesc>(desc)
	let st = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(((desc$ as ExtensionDesc).ExtendedType as any))).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let m: globalThis.Map<number, ExtensionDesc | $.VarRef<ExtensionDesc> | null> | null = $.mapGet<reflect.Type | null, globalThis.Map<number, ExtensionDesc | $.VarRef<ExtensionDesc> | null> | null, globalThis.Map<number, ExtensionDesc | $.VarRef<ExtensionDesc> | null> | null>(extensionMaps, st, null)[0]
	if (m == null) {
		m = $.makeMap<number, ExtensionDesc | $.VarRef<ExtensionDesc> | null>()
		$.mapSet(extensionMaps, st, m)
	}
	{
		let [, ok] = $.mapGet<number, ExtensionDesc | $.VarRef<ExtensionDesc> | null, ExtensionDesc | $.VarRef<ExtensionDesc> | null>(m, (desc$ as ExtensionDesc).Field, null)
		if (ok) {
			$.panic($.concatString(($.concatString(($.concatString("proto: duplicate extension registered: ", (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), " ")), strconv.Itoa($.int((desc$ as ExtensionDesc).Field))))
		}
	}
	$.mapSet(m, (desc$ as ExtensionDesc).Field, desc)
}

export async function RegisteredExtensions(pb: __goscript_lib.Message | null): globalThis.Promise<globalThis.Map<number, ExtensionDesc | $.VarRef<ExtensionDesc> | null> | null> {
	return $.mapGet<reflect.Type | null, globalThis.Map<number, ExtensionDesc | $.VarRef<ExtensionDesc> | null> | null, globalThis.Map<number, ExtensionDesc | $.VarRef<ExtensionDesc> | null> | null>(extensionMaps, (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf((pb as any))).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0]
}

var __goscriptAwait: any
