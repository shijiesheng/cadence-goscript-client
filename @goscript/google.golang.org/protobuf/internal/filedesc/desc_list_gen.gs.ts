// Generated file based on desc_list_gen.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as descfmt from "@goscript/google.golang.org/protobuf/internal/descfmt/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import type * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import type * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as __goscript_build from "./build.gs.ts"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_desc_init from "./desc_init.gs.ts"

import * as __goscript_desc_lazy from "./desc_lazy.gs.ts"

import * as __goscript_desc_list from "./desc_list.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/internal/descfmt/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "./build.gs.ts"
import "./desc.gs.ts"
import "./desc_init.gs.ts"
import "./desc_lazy.gs.ts"
import "./desc_list.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/filedesc", ["filedesc.Enums", "filedesc.EnumValues", "filedesc.Messages", "filedesc.Fields", "filedesc.Oneofs", "filedesc.Extensions", "filedesc.Services", "filedesc.Methods"])

export class Enums {
	public get List(): $.Slice<__goscript_desc.Enum> {
		return this._fields.List
	}

	public set List(value: $.Slice<__goscript_desc.Enum>) {
		this._fields.List = value
	}

	public get once(): sync.Once {
		return this._fields.once
	}

	public set once(value: sync.Once) {
		this._fields.once = value
	}

	public get byName(): globalThis.Map<protoreflect.Name, __goscript_desc.Enum | $.VarRef<__goscript_desc.Enum> | null> | null {
		return this._fields.byName
	}

	public set byName(value: globalThis.Map<protoreflect.Name, __goscript_desc.Enum | $.VarRef<__goscript_desc.Enum> | null> | null) {
		this._fields.byName = value
	}

	public _fields: {
		List: $.Slice<__goscript_desc.Enum>
		once: sync.Once
		byName: globalThis.Map<protoreflect.Name, __goscript_desc.Enum | $.VarRef<__goscript_desc.Enum> | null> | null
	}

	constructor(init?: Partial<{List?: $.Slice<__goscript_desc.Enum>, once?: sync.Once, byName?: globalThis.Map<protoreflect.Name, __goscript_desc.Enum | $.VarRef<__goscript_desc.Enum> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			List: init?.List ?? (null! as $.Slice<__goscript_desc.Enum>),
			once: init?.once ? $.markAsStructValue($.cloneStructValue(init.once)) : $.markAsStructValue(new sync.Once()),
			byName: init?.byName ?? (null! as globalThis.Map<protoreflect.Name, __goscript_desc.Enum | $.VarRef<__goscript_desc.Enum> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Enums {
		return new Enums(this, true)
	}

	public __goscriptAssign(source: Enums): void {
		const target = this._fields
		const values = source._fields
		target.List = values.List
		$.assignStruct(target.once, values.once)
		target.byName = values.byName
	}

	public async ByName(s: protoreflect.Name): globalThis.Promise<protoreflect.EnumDescriptor | null> {
		const p: Enums | $.VarRef<Enums> | null = this;
		{
			let d: __goscript_desc.Enum | $.VarRef<__goscript_desc.Enum> | null = $.mapGet<protoreflect.Name, __goscript_desc.Enum | $.VarRef<__goscript_desc.Enum> | null, __goscript_desc.Enum | $.VarRef<__goscript_desc.Enum> | null>($.pointerValue<Enums>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Enums).lazyInit() : Enums.prototype.lazyInit.call(p))).byName, s, null)[0]
			if (d != null) {
				return $.interfaceValue<protoreflect.EnumDescriptor | null>(d, "*filedesc.Enum", /* @__PURE__ */ $.pointerType("filedesc.Enum"))
			}
		}
		return null
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const p: Enums | $.VarRef<Enums> | null = this;
		await descfmt.FormatList(s, r, $.interfaceValue<descfmt.list | null>(p, "*filedesc.Enums", /* @__PURE__ */ $.pointerType("filedesc.Enums")))
	}

	public Get(i: number): protoreflect.EnumDescriptor | null {
		const p: Enums | $.VarRef<Enums> | null = this;
		return $.interfaceValue<protoreflect.EnumDescriptor | null>($.indexRef($.pointerValue<Enums>(p).List!, i), "*filedesc.Enum", /* @__PURE__ */ $.pointerType("filedesc.Enum"))
	}

	public Len(): number {
		const p: Enums | $.VarRef<Enums> | null = this;
		return $.sliceLen($.pointerValue<Enums>(p).List)
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const p: Enums | $.VarRef<Enums> | null = this;
	}

	public async lazyInit(): globalThis.Promise<Enums | $.VarRef<Enums> | null> {
		const p: Enums | $.VarRef<Enums> | null = this;
		const p$: Enums = p == null ? $.pointerTarget<Enums>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Enums>(p)
		await (p$ as Enums).once.Do($.functionValue((): void => {
			if ($.sliceLen((p$ as Enums).List) > 0) {
				;(p$ as Enums).byName = $.makeMap<protoreflect.Name, __goscript_desc.Enum | $.VarRef<__goscript_desc.Enum> | null>()
				for (let __goscriptRangeTarget0 = (p$ as Enums).List, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
					let d: __goscript_desc.Enum | $.VarRef<__goscript_desc.Enum> | null = $.indexRef((p$ as Enums).List!, i)
					{
						let [, ok] = $.mapGet<protoreflect.Name, __goscript_desc.Enum | $.VarRef<__goscript_desc.Enum> | null, __goscript_desc.Enum | $.VarRef<__goscript_desc.Enum> | null>((p$ as Enums).byName, $.pointerValue<__goscript_desc.Enum>(d).Base.Name(), null)
						if (!ok) {
							$.mapSet((p$ as Enums).byName, $.pointerValue<__goscript_desc.Enum>(d).Base.Name(), d)
						}
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return p
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Enums",
		() => new Enums(),
		() => [$.methodSignature("ByName", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], ["protoreflect.EnumDescriptor"], true), $.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.EnumDescriptor"], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.Enums")], true)],
		Enums,
		() => [/* @__PURE__ */ $.structField("List", /* @__PURE__ */ $.sliceType("filedesc.Enum"), [0], 0, true), /* @__PURE__ */ $.structField("once", "sync.Once", [1], 24, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("byName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "protoreflect.Name"), /* @__PURE__ */ $.pointerType("filedesc.Enum")), [2], 40, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}

export class EnumValues {
	public get List(): $.Slice<__goscript_desc.EnumValue> {
		return this._fields.List
	}

	public set List(value: $.Slice<__goscript_desc.EnumValue>) {
		this._fields.List = value
	}

	public get once(): sync.Once {
		return this._fields.once
	}

	public set once(value: sync.Once) {
		this._fields.once = value
	}

	public get byName(): globalThis.Map<protoreflect.Name, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null> | null {
		return this._fields.byName
	}

	public set byName(value: globalThis.Map<protoreflect.Name, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null> | null) {
		this._fields.byName = value
	}

	public get byNum(): globalThis.Map<protoreflect.EnumNumber, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null> | null {
		return this._fields.byNum
	}

	public set byNum(value: globalThis.Map<protoreflect.EnumNumber, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null> | null) {
		this._fields.byNum = value
	}

	public _fields: {
		List: $.Slice<__goscript_desc.EnumValue>
		once: sync.Once
		byName: globalThis.Map<protoreflect.Name, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null> | null
		byNum: globalThis.Map<protoreflect.EnumNumber, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null> | null
	}

	constructor(init?: Partial<{List?: $.Slice<__goscript_desc.EnumValue>, once?: sync.Once, byName?: globalThis.Map<protoreflect.Name, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null> | null, byNum?: globalThis.Map<protoreflect.EnumNumber, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			List: init?.List ?? (null! as $.Slice<__goscript_desc.EnumValue>),
			once: init?.once ? $.markAsStructValue($.cloneStructValue(init.once)) : $.markAsStructValue(new sync.Once()),
			byName: init?.byName ?? (null! as globalThis.Map<protoreflect.Name, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null> | null),
			byNum: init?.byNum ?? (null! as globalThis.Map<protoreflect.EnumNumber, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EnumValues {
		return new EnumValues(this, true)
	}

	public __goscriptAssign(source: EnumValues): void {
		const target = this._fields
		const values = source._fields
		target.List = values.List
		$.assignStruct(target.once, values.once)
		target.byName = values.byName
		target.byNum = values.byNum
	}

	public async ByName(s: protoreflect.Name): globalThis.Promise<protoreflect.EnumValueDescriptor | null> {
		const p: EnumValues | $.VarRef<EnumValues> | null = this;
		{
			let d: __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null = $.mapGet<protoreflect.Name, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null>($.pointerValue<EnumValues>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as EnumValues).lazyInit() : EnumValues.prototype.lazyInit.call(p))).byName, s, null)[0]
			if (d != null) {
				return $.interfaceValue<protoreflect.EnumValueDescriptor | null>(d, "*filedesc.EnumValue", /* @__PURE__ */ $.pointerType("filedesc.EnumValue"))
			}
		}
		return null
	}

	public async ByNumber(n: protoreflect.EnumNumber): globalThis.Promise<protoreflect.EnumValueDescriptor | null> {
		const p: EnumValues | $.VarRef<EnumValues> | null = this;
		{
			let d: __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null = $.mapGet<protoreflect.EnumNumber, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null>($.pointerValue<EnumValues>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as EnumValues).lazyInit() : EnumValues.prototype.lazyInit.call(p))).byNum, n, null)[0]
			if (d != null) {
				return $.interfaceValue<protoreflect.EnumValueDescriptor | null>(d, "*filedesc.EnumValue", /* @__PURE__ */ $.pointerType("filedesc.EnumValue"))
			}
		}
		return null
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const p: EnumValues | $.VarRef<EnumValues> | null = this;
		await descfmt.FormatList(s, r, $.interfaceValue<descfmt.list | null>(p, "*filedesc.EnumValues", /* @__PURE__ */ $.pointerType("filedesc.EnumValues")))
	}

	public Get(i: number): protoreflect.EnumValueDescriptor | null {
		const p: EnumValues | $.VarRef<EnumValues> | null = this;
		return $.interfaceValue<protoreflect.EnumValueDescriptor | null>($.indexRef($.pointerValue<EnumValues>(p).List!, i), "*filedesc.EnumValue", /* @__PURE__ */ $.pointerType("filedesc.EnumValue"))
	}

	public Len(): number {
		const p: EnumValues | $.VarRef<EnumValues> | null = this;
		return $.sliceLen($.pointerValue<EnumValues>(p).List)
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const p: EnumValues | $.VarRef<EnumValues> | null = this;
	}

	public async lazyInit(): globalThis.Promise<EnumValues | $.VarRef<EnumValues> | null> {
		const p: EnumValues | $.VarRef<EnumValues> | null = this;
		const p$: EnumValues = p == null ? $.pointerTarget<EnumValues>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<EnumValues>(p)
		await (p$ as EnumValues).once.Do($.functionValue((): void => {
			if ($.sliceLen((p$ as EnumValues).List) > 0) {
				;(p$ as EnumValues).byName = $.makeMap<protoreflect.Name, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null>();
				;(p$ as EnumValues).byNum = $.makeMap<protoreflect.EnumNumber, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null>()
				for (let __goscriptRangeTarget1 = (p$ as EnumValues).List, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
					let d: __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null = $.indexRef((p$ as EnumValues).List!, i)
					{
						let [, ok] = $.mapGet<protoreflect.Name, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null>((p$ as EnumValues).byName, $.pointerValue<__goscript_desc.EnumValue>(d).Base.Name(), null)
						if (!ok) {
							$.mapSet((p$ as EnumValues).byName, $.pointerValue<__goscript_desc.EnumValue>(d).Base.Name(), d)
						}
					}
					{
						let [, ok] = $.mapGet<protoreflect.EnumNumber, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null, __goscript_desc.EnumValue | $.VarRef<__goscript_desc.EnumValue> | null>((p$ as EnumValues).byNum, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_desc.EnumValue).Number() : __goscript_desc.EnumValue.prototype.Number.call(d)), null)
						if (!ok) {
							$.mapSet((p$ as EnumValues).byNum, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_desc.EnumValue).Number() : __goscript_desc.EnumValue.prototype.Number.call(d)), d)
						}
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return p
	}

	static __typeInfo = $.registerStructType(
		"filedesc.EnumValues",
		() => new EnumValues(),
		() => [$.methodSignature("ByName", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], ["protoreflect.EnumValueDescriptor"], true), $.methodSignature("ByNumber", [["n", /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]], ["protoreflect.EnumValueDescriptor"], true), $.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.EnumValueDescriptor"], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.EnumValues")], true)],
		EnumValues,
		() => [/* @__PURE__ */ $.structField("List", /* @__PURE__ */ $.sliceType("filedesc.EnumValue"), [0], 0, true), /* @__PURE__ */ $.structField("once", "sync.Once", [1], 24, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("byName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "protoreflect.Name"), /* @__PURE__ */ $.pointerType("filedesc.EnumValue")), [2], 40, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("byNum", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"), /* @__PURE__ */ $.pointerType("filedesc.EnumValue")), [3], 48, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}

export class Messages {
	public get List(): $.Slice<__goscript_desc.Message> {
		return this._fields.List
	}

	public set List(value: $.Slice<__goscript_desc.Message>) {
		this._fields.List = value
	}

	public get once(): sync.Once {
		return this._fields.once
	}

	public set once(value: sync.Once) {
		this._fields.once = value
	}

	public get byName(): globalThis.Map<protoreflect.Name, __goscript_desc.Message | $.VarRef<__goscript_desc.Message> | null> | null {
		return this._fields.byName
	}

	public set byName(value: globalThis.Map<protoreflect.Name, __goscript_desc.Message | $.VarRef<__goscript_desc.Message> | null> | null) {
		this._fields.byName = value
	}

	public _fields: {
		List: $.Slice<__goscript_desc.Message>
		once: sync.Once
		byName: globalThis.Map<protoreflect.Name, __goscript_desc.Message | $.VarRef<__goscript_desc.Message> | null> | null
	}

	constructor(init?: Partial<{List?: $.Slice<__goscript_desc.Message>, once?: sync.Once, byName?: globalThis.Map<protoreflect.Name, __goscript_desc.Message | $.VarRef<__goscript_desc.Message> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			List: init?.List ?? (null! as $.Slice<__goscript_desc.Message>),
			once: init?.once ? $.markAsStructValue($.cloneStructValue(init.once)) : $.markAsStructValue(new sync.Once()),
			byName: init?.byName ?? (null! as globalThis.Map<protoreflect.Name, __goscript_desc.Message | $.VarRef<__goscript_desc.Message> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Messages {
		return new Messages(this, true)
	}

	public __goscriptAssign(source: Messages): void {
		const target = this._fields
		const values = source._fields
		target.List = values.List
		$.assignStruct(target.once, values.once)
		target.byName = values.byName
	}

	public async ByName(s: protoreflect.Name): globalThis.Promise<protoreflect.MessageDescriptor | null> {
		const p: Messages | $.VarRef<Messages> | null = this;
		{
			let d: __goscript_desc.Message | $.VarRef<__goscript_desc.Message> | null = $.mapGet<protoreflect.Name, __goscript_desc.Message | $.VarRef<__goscript_desc.Message> | null, __goscript_desc.Message | $.VarRef<__goscript_desc.Message> | null>($.pointerValue<Messages>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Messages).lazyInit() : Messages.prototype.lazyInit.call(p))).byName, s, null)[0]
			if (d != null) {
				return $.interfaceValue<protoreflect.MessageDescriptor | null>(d, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message"))
			}
		}
		return null
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const p: Messages | $.VarRef<Messages> | null = this;
		await descfmt.FormatList(s, r, $.interfaceValue<descfmt.list | null>(p, "*filedesc.Messages", /* @__PURE__ */ $.pointerType("filedesc.Messages")))
	}

	public Get(i: number): protoreflect.MessageDescriptor | null {
		const p: Messages | $.VarRef<Messages> | null = this;
		return $.interfaceValue<protoreflect.MessageDescriptor | null>($.indexRef($.pointerValue<Messages>(p).List!, i), "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message"))
	}

	public Len(): number {
		const p: Messages | $.VarRef<Messages> | null = this;
		return $.sliceLen($.pointerValue<Messages>(p).List)
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const p: Messages | $.VarRef<Messages> | null = this;
	}

	public async lazyInit(): globalThis.Promise<Messages | $.VarRef<Messages> | null> {
		const p: Messages | $.VarRef<Messages> | null = this;
		const p$: Messages = p == null ? $.pointerTarget<Messages>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Messages>(p)
		await (p$ as Messages).once.Do($.functionValue((): void => {
			if ($.sliceLen((p$ as Messages).List) > 0) {
				;(p$ as Messages).byName = $.makeMap<protoreflect.Name, __goscript_desc.Message | $.VarRef<__goscript_desc.Message> | null>()
				for (let __goscriptRangeTarget2 = (p$ as Messages).List, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
					let d: __goscript_desc.Message | $.VarRef<__goscript_desc.Message> | null = $.indexRef((p$ as Messages).List!, i)
					{
						let [, ok] = $.mapGet<protoreflect.Name, __goscript_desc.Message | $.VarRef<__goscript_desc.Message> | null, __goscript_desc.Message | $.VarRef<__goscript_desc.Message> | null>((p$ as Messages).byName, $.pointerValue<__goscript_desc.Message>(d).Base.Name(), null)
						if (!ok) {
							$.mapSet((p$ as Messages).byName, $.pointerValue<__goscript_desc.Message>(d).Base.Name(), d)
						}
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return p
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Messages",
		() => new Messages(),
		() => [$.methodSignature("ByName", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], ["protoreflect.MessageDescriptor"], true), $.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.MessageDescriptor"], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.Messages")], true)],
		Messages,
		() => [/* @__PURE__ */ $.structField("List", /* @__PURE__ */ $.sliceType("filedesc.Message"), [0], 0, true), /* @__PURE__ */ $.structField("once", "sync.Once", [1], 24, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("byName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "protoreflect.Name"), /* @__PURE__ */ $.pointerType("filedesc.Message")), [2], 40, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}

export class Fields {
	public get List(): $.Slice<__goscript_desc.Field> {
		return this._fields.List
	}

	public set List(value: $.Slice<__goscript_desc.Field>) {
		this._fields.List = value
	}

	public get once(): sync.Once {
		return this._fields.once
	}

	public set once(value: sync.Once) {
		this._fields.once = value
	}

	public get byName(): globalThis.Map<protoreflect.Name, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null {
		return this._fields.byName
	}

	public set byName(value: globalThis.Map<protoreflect.Name, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null) {
		this._fields.byName = value
	}

	public get byJSON(): globalThis.Map<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null {
		return this._fields.byJSON
	}

	public set byJSON(value: globalThis.Map<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null) {
		this._fields.byJSON = value
	}

	public get byText(): globalThis.Map<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null {
		return this._fields.byText
	}

	public set byText(value: globalThis.Map<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null) {
		this._fields.byText = value
	}

	public get byNum(): globalThis.Map<protoreflect.FieldNumber, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null {
		return this._fields.byNum
	}

	public set byNum(value: globalThis.Map<protoreflect.FieldNumber, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null) {
		this._fields.byNum = value
	}

	public _fields: {
		List: $.Slice<__goscript_desc.Field>
		once: sync.Once
		byName: globalThis.Map<protoreflect.Name, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null
		byJSON: globalThis.Map<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null
		byText: globalThis.Map<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null
		byNum: globalThis.Map<protoreflect.FieldNumber, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null
	}

	constructor(init?: Partial<{List?: $.Slice<__goscript_desc.Field>, once?: sync.Once, byName?: globalThis.Map<protoreflect.Name, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null, byJSON?: globalThis.Map<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null, byText?: globalThis.Map<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null, byNum?: globalThis.Map<protoreflect.FieldNumber, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			List: init?.List ?? (null! as $.Slice<__goscript_desc.Field>),
			once: init?.once ? $.markAsStructValue($.cloneStructValue(init.once)) : $.markAsStructValue(new sync.Once()),
			byName: init?.byName ?? (null! as globalThis.Map<protoreflect.Name, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null),
			byJSON: init?.byJSON ?? (null! as globalThis.Map<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null),
			byText: init?.byText ?? (null! as globalThis.Map<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null),
			byNum: init?.byNum ?? (null! as globalThis.Map<protoreflect.FieldNumber, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Fields {
		return new Fields(this, true)
	}

	public __goscriptAssign(source: Fields): void {
		const target = this._fields
		const values = source._fields
		target.List = values.List
		$.assignStruct(target.once, values.once)
		target.byName = values.byName
		target.byJSON = values.byJSON
		target.byText = values.byText
		target.byNum = values.byNum
	}

	public async ByJSONName(s: string): globalThis.Promise<protoreflect.FieldDescriptor | null> {
		const p: Fields | $.VarRef<Fields> | null = this;
		{
			let d: __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null = $.mapGet<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null>($.pointerValue<Fields>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Fields).lazyInit() : Fields.prototype.lazyInit.call(p))).byJSON, s, null)[0]
			if (d != null) {
				return $.interfaceValue<protoreflect.FieldDescriptor | null>(d, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field"))
			}
		}
		return null
	}

	public async ByName(s: protoreflect.Name): globalThis.Promise<protoreflect.FieldDescriptor | null> {
		const p: Fields | $.VarRef<Fields> | null = this;
		{
			let d: __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null = $.mapGet<protoreflect.Name, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null>($.pointerValue<Fields>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Fields).lazyInit() : Fields.prototype.lazyInit.call(p))).byName, s, null)[0]
			if (d != null) {
				return $.interfaceValue<protoreflect.FieldDescriptor | null>(d, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field"))
			}
		}
		return null
	}

	public async ByNumber(n: protoreflect.FieldNumber): globalThis.Promise<protoreflect.FieldDescriptor | null> {
		const p: Fields | $.VarRef<Fields> | null = this;
		{
			let d: __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null = $.mapGet<protoreflect.FieldNumber, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null>($.pointerValue<Fields>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Fields).lazyInit() : Fields.prototype.lazyInit.call(p))).byNum, n, null)[0]
			if (d != null) {
				return $.interfaceValue<protoreflect.FieldDescriptor | null>(d, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field"))
			}
		}
		return null
	}

	public async ByTextName(s: string): globalThis.Promise<protoreflect.FieldDescriptor | null> {
		const p: Fields | $.VarRef<Fields> | null = this;
		{
			let d: __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null = $.mapGet<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null>($.pointerValue<Fields>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Fields).lazyInit() : Fields.prototype.lazyInit.call(p))).byText, s, null)[0]
			if (d != null) {
				return $.interfaceValue<protoreflect.FieldDescriptor | null>(d, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field"))
			}
		}
		return null
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const p: Fields | $.VarRef<Fields> | null = this;
		await descfmt.FormatList(s, r, $.interfaceValue<descfmt.list | null>(p, "*filedesc.Fields", /* @__PURE__ */ $.pointerType("filedesc.Fields")))
	}

	public Get(i: number): protoreflect.FieldDescriptor | null {
		const p: Fields | $.VarRef<Fields> | null = this;
		return $.interfaceValue<protoreflect.FieldDescriptor | null>($.indexRef($.pointerValue<Fields>(p).List!, i), "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field"))
	}

	public Len(): number {
		const p: Fields | $.VarRef<Fields> | null = this;
		return $.sliceLen($.pointerValue<Fields>(p).List)
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const p: Fields | $.VarRef<Fields> | null = this;
	}

	public async lazyInit(): globalThis.Promise<Fields | $.VarRef<Fields> | null> {
		const p: Fields | $.VarRef<Fields> | null = this;
		const p$: Fields = p == null ? $.pointerTarget<Fields>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Fields>(p)
		await (p$ as Fields).once.Do($.functionValue(async (): globalThis.Promise<void> => {
			if ($.sliceLen((p$ as Fields).List) > 0) {
				;(p$ as Fields).byName = $.makeMap<protoreflect.Name, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null>();
				;(p$ as Fields).byJSON = $.makeMap<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null>();
				;(p$ as Fields).byText = $.makeMap<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null>();
				;(p$ as Fields).byNum = $.makeMap<protoreflect.FieldNumber, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null>()
				for (let __goscriptRangeTarget3 = (p$ as Fields).List, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
					let d: __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null = $.indexRef((p$ as Fields).List!, i)
					{
						let [, ok] = $.mapGet<protoreflect.Name, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null>((p$ as Fields).byName, $.pointerValue<__goscript_desc.Field>(d).Base.Name(), null)
						if (!ok) {
							$.mapSet((p$ as Fields).byName, $.pointerValue<__goscript_desc.Field>(d).Base.Name(), d)
						}
					}
					{
						let [, ok] = $.mapGet<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null>((p$ as Fields).byJSON, await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_desc.Field).JSONName() : __goscript_desc.Field.prototype.JSONName.call(d)), null)
						if (!ok) {
							$.mapSet((p$ as Fields).byJSON, await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_desc.Field).JSONName() : __goscript_desc.Field.prototype.JSONName.call(d)), d)
						}
					}
					{
						let [, ok] = $.mapGet<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null>((p$ as Fields).byText, await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_desc.Field).TextName() : __goscript_desc.Field.prototype.TextName.call(d)), null)
						if (!ok) {
							$.mapSet((p$ as Fields).byText, await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_desc.Field).TextName() : __goscript_desc.Field.prototype.TextName.call(d)), d)
						}
					}
					if (await __goscript_desc.isGroupLike($.interfaceValue<protoreflect.FieldDescriptor | null>(d, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field")))) {
						let lowerJSONName = strings.ToLower(await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_desc.Field).JSONName() : __goscript_desc.Field.prototype.JSONName.call(d)))
						{
							let [, ok] = $.mapGet<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null>((p$ as Fields).byJSON, lowerJSONName, null)
							if (!ok) {
								$.mapSet((p$ as Fields).byJSON, lowerJSONName, d)
							}
						}
						let lowerTextName = strings.ToLower(await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_desc.Field).TextName() : __goscript_desc.Field.prototype.TextName.call(d)))
						{
							let [, ok] = $.mapGet<string, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null>((p$ as Fields).byText, lowerTextName, null)
							if (!ok) {
								$.mapSet((p$ as Fields).byText, lowerTextName, d)
							}
						}
					}
					{
						let [, ok] = $.mapGet<protoreflect.FieldNumber, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null, __goscript_desc.Field | $.VarRef<__goscript_desc.Field> | null>((p$ as Fields).byNum, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_desc.Field).Number() : __goscript_desc.Field.prototype.Number.call(d)), null)
						if (!ok) {
							$.mapSet((p$ as Fields).byNum, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_desc.Field).Number() : __goscript_desc.Field.prototype.Number.call(d)), d)
						}
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return p
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Fields",
		() => new Fields(),
		() => [$.methodSignature("ByJSONName", [["s", /* @__PURE__ */ $.basicType("string")]], ["protoreflect.FieldDescriptor"], true), $.methodSignature("ByName", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], ["protoreflect.FieldDescriptor"], true), $.methodSignature("ByNumber", [["n", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.FieldDescriptor"], true), $.methodSignature("ByTextName", [["s", /* @__PURE__ */ $.basicType("string")]], ["protoreflect.FieldDescriptor"], true), $.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.FieldDescriptor"], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.Fields")], true)],
		Fields,
		() => [/* @__PURE__ */ $.structField("List", /* @__PURE__ */ $.sliceType("filedesc.Field"), [0], 0, true), /* @__PURE__ */ $.structField("once", "sync.Once", [1], 24, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("byName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "protoreflect.Name"), /* @__PURE__ */ $.pointerType("filedesc.Field")), [2], 40, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("byJSON", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("filedesc.Field")), [3], 48, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("byText", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("filedesc.Field")), [4], 56, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("byNum", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), /* @__PURE__ */ $.pointerType("filedesc.Field")), [5], 64, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}

export class Oneofs {
	public get List(): $.Slice<__goscript_desc.Oneof> {
		return this._fields.List
	}

	public set List(value: $.Slice<__goscript_desc.Oneof>) {
		this._fields.List = value
	}

	public get once(): sync.Once {
		return this._fields.once
	}

	public set once(value: sync.Once) {
		this._fields.once = value
	}

	public get byName(): globalThis.Map<protoreflect.Name, __goscript_desc.Oneof | $.VarRef<__goscript_desc.Oneof> | null> | null {
		return this._fields.byName
	}

	public set byName(value: globalThis.Map<protoreflect.Name, __goscript_desc.Oneof | $.VarRef<__goscript_desc.Oneof> | null> | null) {
		this._fields.byName = value
	}

	public _fields: {
		List: $.Slice<__goscript_desc.Oneof>
		once: sync.Once
		byName: globalThis.Map<protoreflect.Name, __goscript_desc.Oneof | $.VarRef<__goscript_desc.Oneof> | null> | null
	}

	constructor(init?: Partial<{List?: $.Slice<__goscript_desc.Oneof>, once?: sync.Once, byName?: globalThis.Map<protoreflect.Name, __goscript_desc.Oneof | $.VarRef<__goscript_desc.Oneof> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			List: init?.List ?? (null! as $.Slice<__goscript_desc.Oneof>),
			once: init?.once ? $.markAsStructValue($.cloneStructValue(init.once)) : $.markAsStructValue(new sync.Once()),
			byName: init?.byName ?? (null! as globalThis.Map<protoreflect.Name, __goscript_desc.Oneof | $.VarRef<__goscript_desc.Oneof> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Oneofs {
		return new Oneofs(this, true)
	}

	public __goscriptAssign(source: Oneofs): void {
		const target = this._fields
		const values = source._fields
		target.List = values.List
		$.assignStruct(target.once, values.once)
		target.byName = values.byName
	}

	public async ByName(s: protoreflect.Name): globalThis.Promise<protoreflect.OneofDescriptor | null> {
		const p: Oneofs | $.VarRef<Oneofs> | null = this;
		{
			let d: __goscript_desc.Oneof | $.VarRef<__goscript_desc.Oneof> | null = $.mapGet<protoreflect.Name, __goscript_desc.Oneof | $.VarRef<__goscript_desc.Oneof> | null, __goscript_desc.Oneof | $.VarRef<__goscript_desc.Oneof> | null>($.pointerValue<Oneofs>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Oneofs).lazyInit() : Oneofs.prototype.lazyInit.call(p))).byName, s, null)[0]
			if (d != null) {
				return $.interfaceValue<protoreflect.OneofDescriptor | null>(d, "*filedesc.Oneof", /* @__PURE__ */ $.pointerType("filedesc.Oneof"))
			}
		}
		return null
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const p: Oneofs | $.VarRef<Oneofs> | null = this;
		await descfmt.FormatList(s, r, $.interfaceValue<descfmt.list | null>(p, "*filedesc.Oneofs", /* @__PURE__ */ $.pointerType("filedesc.Oneofs")))
	}

	public Get(i: number): protoreflect.OneofDescriptor | null {
		const p: Oneofs | $.VarRef<Oneofs> | null = this;
		return $.interfaceValue<protoreflect.OneofDescriptor | null>($.indexRef($.pointerValue<Oneofs>(p).List!, i), "*filedesc.Oneof", /* @__PURE__ */ $.pointerType("filedesc.Oneof"))
	}

	public Len(): number {
		const p: Oneofs | $.VarRef<Oneofs> | null = this;
		return $.sliceLen($.pointerValue<Oneofs>(p).List)
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const p: Oneofs | $.VarRef<Oneofs> | null = this;
	}

	public async lazyInit(): globalThis.Promise<Oneofs | $.VarRef<Oneofs> | null> {
		const p: Oneofs | $.VarRef<Oneofs> | null = this;
		const p$: Oneofs = p == null ? $.pointerTarget<Oneofs>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Oneofs>(p)
		await (p$ as Oneofs).once.Do($.functionValue((): void => {
			if ($.sliceLen((p$ as Oneofs).List) > 0) {
				;(p$ as Oneofs).byName = $.makeMap<protoreflect.Name, __goscript_desc.Oneof | $.VarRef<__goscript_desc.Oneof> | null>()
				for (let __goscriptRangeTarget4 = (p$ as Oneofs).List, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
					let d: __goscript_desc.Oneof | $.VarRef<__goscript_desc.Oneof> | null = $.indexRef((p$ as Oneofs).List!, i)
					{
						let [, ok] = $.mapGet<protoreflect.Name, __goscript_desc.Oneof | $.VarRef<__goscript_desc.Oneof> | null, __goscript_desc.Oneof | $.VarRef<__goscript_desc.Oneof> | null>((p$ as Oneofs).byName, $.pointerValue<__goscript_desc.Oneof>(d).Base.Name(), null)
						if (!ok) {
							$.mapSet((p$ as Oneofs).byName, $.pointerValue<__goscript_desc.Oneof>(d).Base.Name(), d)
						}
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return p
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Oneofs",
		() => new Oneofs(),
		() => [$.methodSignature("ByName", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], ["protoreflect.OneofDescriptor"], true), $.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.OneofDescriptor"], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.Oneofs")], true)],
		Oneofs,
		() => [/* @__PURE__ */ $.structField("List", /* @__PURE__ */ $.sliceType("filedesc.Oneof"), [0], 0, true), /* @__PURE__ */ $.structField("once", "sync.Once", [1], 24, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("byName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "protoreflect.Name"), /* @__PURE__ */ $.pointerType("filedesc.Oneof")), [2], 40, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}

export class Extensions {
	public get List(): $.Slice<__goscript_desc.Extension> {
		return this._fields.List
	}

	public set List(value: $.Slice<__goscript_desc.Extension>) {
		this._fields.List = value
	}

	public get once(): sync.Once {
		return this._fields.once
	}

	public set once(value: sync.Once) {
		this._fields.once = value
	}

	public get byName(): globalThis.Map<protoreflect.Name, __goscript_desc.Extension | $.VarRef<__goscript_desc.Extension> | null> | null {
		return this._fields.byName
	}

	public set byName(value: globalThis.Map<protoreflect.Name, __goscript_desc.Extension | $.VarRef<__goscript_desc.Extension> | null> | null) {
		this._fields.byName = value
	}

	public _fields: {
		List: $.Slice<__goscript_desc.Extension>
		once: sync.Once
		byName: globalThis.Map<protoreflect.Name, __goscript_desc.Extension | $.VarRef<__goscript_desc.Extension> | null> | null
	}

	constructor(init?: Partial<{List?: $.Slice<__goscript_desc.Extension>, once?: sync.Once, byName?: globalThis.Map<protoreflect.Name, __goscript_desc.Extension | $.VarRef<__goscript_desc.Extension> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			List: init?.List ?? (null! as $.Slice<__goscript_desc.Extension>),
			once: init?.once ? $.markAsStructValue($.cloneStructValue(init.once)) : $.markAsStructValue(new sync.Once()),
			byName: init?.byName ?? (null! as globalThis.Map<protoreflect.Name, __goscript_desc.Extension | $.VarRef<__goscript_desc.Extension> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Extensions {
		return new Extensions(this, true)
	}

	public __goscriptAssign(source: Extensions): void {
		const target = this._fields
		const values = source._fields
		target.List = values.List
		$.assignStruct(target.once, values.once)
		target.byName = values.byName
	}

	public async ByName(s: protoreflect.Name): globalThis.Promise<protoreflect.ExtensionDescriptor | null> {
		const p: Extensions | $.VarRef<Extensions> | null = this;
		{
			let d: __goscript_desc.Extension | $.VarRef<__goscript_desc.Extension> | null = $.mapGet<protoreflect.Name, __goscript_desc.Extension | $.VarRef<__goscript_desc.Extension> | null, __goscript_desc.Extension | $.VarRef<__goscript_desc.Extension> | null>($.pointerValue<Extensions>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Extensions).lazyInit() : Extensions.prototype.lazyInit.call(p))).byName, s, null)[0]
			if (d != null) {
				return $.interfaceValue<protoreflect.ExtensionDescriptor | null>(d, "*filedesc.Extension", /* @__PURE__ */ $.pointerType("filedesc.Extension"))
			}
		}
		return null
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const p: Extensions | $.VarRef<Extensions> | null = this;
		await descfmt.FormatList(s, r, $.interfaceValue<descfmt.list | null>(p, "*filedesc.Extensions", /* @__PURE__ */ $.pointerType("filedesc.Extensions")))
	}

	public Get(i: number): protoreflect.ExtensionDescriptor | null {
		const p: Extensions | $.VarRef<Extensions> | null = this;
		return $.interfaceValue<protoreflect.ExtensionDescriptor | null>($.indexRef($.pointerValue<Extensions>(p).List!, i), "*filedesc.Extension", /* @__PURE__ */ $.pointerType("filedesc.Extension"))
	}

	public Len(): number {
		const p: Extensions | $.VarRef<Extensions> | null = this;
		return $.sliceLen($.pointerValue<Extensions>(p).List)
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const p: Extensions | $.VarRef<Extensions> | null = this;
	}

	public async lazyInit(): globalThis.Promise<Extensions | $.VarRef<Extensions> | null> {
		const p: Extensions | $.VarRef<Extensions> | null = this;
		const p$: Extensions = p == null ? $.pointerTarget<Extensions>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Extensions>(p)
		await (p$ as Extensions).once.Do($.functionValue((): void => {
			if ($.sliceLen((p$ as Extensions).List) > 0) {
				;(p$ as Extensions).byName = $.makeMap<protoreflect.Name, __goscript_desc.Extension | $.VarRef<__goscript_desc.Extension> | null>()
				for (let __goscriptRangeTarget5 = (p$ as Extensions).List, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
					let d: __goscript_desc.Extension | $.VarRef<__goscript_desc.Extension> | null = $.indexRef((p$ as Extensions).List!, i)
					{
						let [, ok] = $.mapGet<protoreflect.Name, __goscript_desc.Extension | $.VarRef<__goscript_desc.Extension> | null, __goscript_desc.Extension | $.VarRef<__goscript_desc.Extension> | null>((p$ as Extensions).byName, $.pointerValue<__goscript_desc.Extension>(d).Base.Name(), null)
						if (!ok) {
							$.mapSet((p$ as Extensions).byName, $.pointerValue<__goscript_desc.Extension>(d).Base.Name(), d)
						}
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return p
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Extensions",
		() => new Extensions(),
		() => [$.methodSignature("ByName", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], ["protoreflect.FieldDescriptor"], true), $.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.FieldDescriptor"], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.Extensions")], true)],
		Extensions,
		() => [/* @__PURE__ */ $.structField("List", /* @__PURE__ */ $.sliceType("filedesc.Extension"), [0], 0, true), /* @__PURE__ */ $.structField("once", "sync.Once", [1], 24, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("byName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "protoreflect.Name"), /* @__PURE__ */ $.pointerType("filedesc.Extension")), [2], 40, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}

export class Services {
	public get List(): $.Slice<__goscript_desc.Service> {
		return this._fields.List
	}

	public set List(value: $.Slice<__goscript_desc.Service>) {
		this._fields.List = value
	}

	public get once(): sync.Once {
		return this._fields.once
	}

	public set once(value: sync.Once) {
		this._fields.once = value
	}

	public get byName(): globalThis.Map<protoreflect.Name, __goscript_desc.Service | $.VarRef<__goscript_desc.Service> | null> | null {
		return this._fields.byName
	}

	public set byName(value: globalThis.Map<protoreflect.Name, __goscript_desc.Service | $.VarRef<__goscript_desc.Service> | null> | null) {
		this._fields.byName = value
	}

	public _fields: {
		List: $.Slice<__goscript_desc.Service>
		once: sync.Once
		byName: globalThis.Map<protoreflect.Name, __goscript_desc.Service | $.VarRef<__goscript_desc.Service> | null> | null
	}

	constructor(init?: Partial<{List?: $.Slice<__goscript_desc.Service>, once?: sync.Once, byName?: globalThis.Map<protoreflect.Name, __goscript_desc.Service | $.VarRef<__goscript_desc.Service> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			List: init?.List ?? (null! as $.Slice<__goscript_desc.Service>),
			once: init?.once ? $.markAsStructValue($.cloneStructValue(init.once)) : $.markAsStructValue(new sync.Once()),
			byName: init?.byName ?? (null! as globalThis.Map<protoreflect.Name, __goscript_desc.Service | $.VarRef<__goscript_desc.Service> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Services {
		return new Services(this, true)
	}

	public __goscriptAssign(source: Services): void {
		const target = this._fields
		const values = source._fields
		target.List = values.List
		$.assignStruct(target.once, values.once)
		target.byName = values.byName
	}

	public async ByName(s: protoreflect.Name): globalThis.Promise<protoreflect.ServiceDescriptor | null> {
		const p: Services | $.VarRef<Services> | null = this;
		{
			let d: __goscript_desc.Service | $.VarRef<__goscript_desc.Service> | null = $.mapGet<protoreflect.Name, __goscript_desc.Service | $.VarRef<__goscript_desc.Service> | null, __goscript_desc.Service | $.VarRef<__goscript_desc.Service> | null>($.pointerValue<Services>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Services).lazyInit() : Services.prototype.lazyInit.call(p))).byName, s, null)[0]
			if (d != null) {
				return $.interfaceValue<protoreflect.ServiceDescriptor | null>(d, "*filedesc.Service", /* @__PURE__ */ $.pointerType("filedesc.Service"))
			}
		}
		return null
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const p: Services | $.VarRef<Services> | null = this;
		await descfmt.FormatList(s, r, $.interfaceValue<descfmt.list | null>(p, "*filedesc.Services", /* @__PURE__ */ $.pointerType("filedesc.Services")))
	}

	public Get(i: number): protoreflect.ServiceDescriptor | null {
		const p: Services | $.VarRef<Services> | null = this;
		return $.interfaceValue<protoreflect.ServiceDescriptor | null>($.indexRef($.pointerValue<Services>(p).List!, i), "*filedesc.Service", /* @__PURE__ */ $.pointerType("filedesc.Service"))
	}

	public Len(): number {
		const p: Services | $.VarRef<Services> | null = this;
		return $.sliceLen($.pointerValue<Services>(p).List)
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const p: Services | $.VarRef<Services> | null = this;
	}

	public async lazyInit(): globalThis.Promise<Services | $.VarRef<Services> | null> {
		const p: Services | $.VarRef<Services> | null = this;
		const p$: Services = p == null ? $.pointerTarget<Services>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Services>(p)
		await (p$ as Services).once.Do($.functionValue((): void => {
			if ($.sliceLen((p$ as Services).List) > 0) {
				;(p$ as Services).byName = $.makeMap<protoreflect.Name, __goscript_desc.Service | $.VarRef<__goscript_desc.Service> | null>()
				for (let __goscriptRangeTarget6 = (p$ as Services).List, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), i = 0; i < __goscriptRangeWindow6.length; i++) {
					let d: __goscript_desc.Service | $.VarRef<__goscript_desc.Service> | null = $.indexRef((p$ as Services).List!, i)
					{
						let [, ok] = $.mapGet<protoreflect.Name, __goscript_desc.Service | $.VarRef<__goscript_desc.Service> | null, __goscript_desc.Service | $.VarRef<__goscript_desc.Service> | null>((p$ as Services).byName, $.pointerValue<__goscript_desc.Service>(d).Base.Name(), null)
						if (!ok) {
							$.mapSet((p$ as Services).byName, $.pointerValue<__goscript_desc.Service>(d).Base.Name(), d)
						}
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return p
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Services",
		() => new Services(),
		() => [$.methodSignature("ByName", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], ["protoreflect.ServiceDescriptor"], true), $.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.ServiceDescriptor"], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.Services")], true)],
		Services,
		() => [/* @__PURE__ */ $.structField("List", /* @__PURE__ */ $.sliceType("filedesc.Service"), [0], 0, true), /* @__PURE__ */ $.structField("once", "sync.Once", [1], 24, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("byName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "protoreflect.Name"), /* @__PURE__ */ $.pointerType("filedesc.Service")), [2], 40, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}

export class Methods {
	public get List(): $.Slice<__goscript_desc.Method> {
		return this._fields.List
	}

	public set List(value: $.Slice<__goscript_desc.Method>) {
		this._fields.List = value
	}

	public get once(): sync.Once {
		return this._fields.once
	}

	public set once(value: sync.Once) {
		this._fields.once = value
	}

	public get byName(): globalThis.Map<protoreflect.Name, __goscript_desc.Method | $.VarRef<__goscript_desc.Method> | null> | null {
		return this._fields.byName
	}

	public set byName(value: globalThis.Map<protoreflect.Name, __goscript_desc.Method | $.VarRef<__goscript_desc.Method> | null> | null) {
		this._fields.byName = value
	}

	public _fields: {
		List: $.Slice<__goscript_desc.Method>
		once: sync.Once
		byName: globalThis.Map<protoreflect.Name, __goscript_desc.Method | $.VarRef<__goscript_desc.Method> | null> | null
	}

	constructor(init?: Partial<{List?: $.Slice<__goscript_desc.Method>, once?: sync.Once, byName?: globalThis.Map<protoreflect.Name, __goscript_desc.Method | $.VarRef<__goscript_desc.Method> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			List: init?.List ?? (null! as $.Slice<__goscript_desc.Method>),
			once: init?.once ? $.markAsStructValue($.cloneStructValue(init.once)) : $.markAsStructValue(new sync.Once()),
			byName: init?.byName ?? (null! as globalThis.Map<protoreflect.Name, __goscript_desc.Method | $.VarRef<__goscript_desc.Method> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Methods {
		return new Methods(this, true)
	}

	public __goscriptAssign(source: Methods): void {
		const target = this._fields
		const values = source._fields
		target.List = values.List
		$.assignStruct(target.once, values.once)
		target.byName = values.byName
	}

	public async ByName(s: protoreflect.Name): globalThis.Promise<protoreflect.MethodDescriptor | null> {
		const p: Methods | $.VarRef<Methods> | null = this;
		{
			let d: __goscript_desc.Method | $.VarRef<__goscript_desc.Method> | null = $.mapGet<protoreflect.Name, __goscript_desc.Method | $.VarRef<__goscript_desc.Method> | null, __goscript_desc.Method | $.VarRef<__goscript_desc.Method> | null>($.pointerValue<Methods>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Methods).lazyInit() : Methods.prototype.lazyInit.call(p))).byName, s, null)[0]
			if (d != null) {
				return $.interfaceValue<protoreflect.MethodDescriptor | null>(d, "*filedesc.Method", /* @__PURE__ */ $.pointerType("filedesc.Method"))
			}
		}
		return null
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const p: Methods | $.VarRef<Methods> | null = this;
		await descfmt.FormatList(s, r, $.interfaceValue<descfmt.list | null>(p, "*filedesc.Methods", /* @__PURE__ */ $.pointerType("filedesc.Methods")))
	}

	public Get(i: number): protoreflect.MethodDescriptor | null {
		const p: Methods | $.VarRef<Methods> | null = this;
		return $.interfaceValue<protoreflect.MethodDescriptor | null>($.indexRef($.pointerValue<Methods>(p).List!, i), "*filedesc.Method", /* @__PURE__ */ $.pointerType("filedesc.Method"))
	}

	public Len(): number {
		const p: Methods | $.VarRef<Methods> | null = this;
		return $.sliceLen($.pointerValue<Methods>(p).List)
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const p: Methods | $.VarRef<Methods> | null = this;
	}

	public async lazyInit(): globalThis.Promise<Methods | $.VarRef<Methods> | null> {
		const p: Methods | $.VarRef<Methods> | null = this;
		const p$: Methods = p == null ? $.pointerTarget<Methods>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Methods>(p)
		await (p$ as Methods).once.Do($.functionValue((): void => {
			if ($.sliceLen((p$ as Methods).List) > 0) {
				;(p$ as Methods).byName = $.makeMap<protoreflect.Name, __goscript_desc.Method | $.VarRef<__goscript_desc.Method> | null>()
				for (let __goscriptRangeTarget7 = (p$ as Methods).List, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), i = 0; i < __goscriptRangeWindow7.length; i++) {
					let d: __goscript_desc.Method | $.VarRef<__goscript_desc.Method> | null = $.indexRef((p$ as Methods).List!, i)
					{
						let [, ok] = $.mapGet<protoreflect.Name, __goscript_desc.Method | $.VarRef<__goscript_desc.Method> | null, __goscript_desc.Method | $.VarRef<__goscript_desc.Method> | null>((p$ as Methods).byName, $.pointerValue<__goscript_desc.Method>(d).Base.Name(), null)
						if (!ok) {
							$.mapSet((p$ as Methods).byName, $.pointerValue<__goscript_desc.Method>(d).Base.Name(), d)
						}
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return p
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Methods",
		() => new Methods(),
		() => [$.methodSignature("ByName", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], ["protoreflect.MethodDescriptor"], true), $.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.MethodDescriptor"], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.Methods")], true)],
		Methods,
		() => [/* @__PURE__ */ $.structField("List", /* @__PURE__ */ $.sliceType("filedesc.Method"), [0], 0, true), /* @__PURE__ */ $.structField("once", "sync.Once", [1], 24, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("byName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "protoreflect.Name"), /* @__PURE__ */ $.pointerType("filedesc.Method")), [2], 40, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}
