// Generated file based on convert.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as __goscript_convert_list from "./convert_list.gs.ts"

import * as __goscript_convert_map from "./convert_map.gs.ts"

import * as __goscript_legacy_message from "./legacy_message.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "./convert_list.gs.ts"
import "./convert_map.gs.ts"
import "./legacy_message.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.unwrapper", "impl.Converter", "impl.boolConverter", "impl.int32Converter", "impl.int64Converter", "impl.uint32Converter", "impl.uint64Converter", "impl.float32Converter", "impl.float64Converter", "impl.stringConverter", "impl.bytesConverter", "impl.enumConverter", "impl.messageConverter"])

export type unwrapper = {
	protoUnwrap(): any | globalThis.Promise<any>
}

$.registerInterfaceType(
	"impl.unwrapper",
	null,
	[{ name: "protoUnwrap", args: [], returns: [{ type: { kind: $.TypeKind.Interface, methods: [] } }] }]
);

export type Converter = {
	GoValueOf(_p0: protoreflect.Value): reflect.Value | globalThis.Promise<reflect.Value>
	IsValidGo(_p0: reflect.Value): boolean
	IsValidPB(_p0: protoreflect.Value): boolean | globalThis.Promise<boolean>
	New(): protoreflect.Value | globalThis.Promise<protoreflect.Value>
	PBValueOf(_p0: reflect.Value): protoreflect.Value | globalThis.Promise<protoreflect.Value>
	Zero(): protoreflect.Value | globalThis.Promise<protoreflect.Value>
}

$.registerInterfaceType(
	"impl.Converter",
	null,
	[{ name: "GoValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "reflect.Value" }] }, { name: "IsValidGo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "IsValidPB", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "New", args: [], returns: [{ type: "protoreflect.Value" }] }, { name: "PBValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }] }, { name: "Zero", args: [], returns: [{ type: "protoreflect.Value" }] }]
);

export class boolConverter {
	public get goType(): reflect.Type | null {
		return this._fields.goType
	}

	public set goType(value: reflect.Type | null) {
		this._fields.goType = value
	}

	public get def(): protoreflect.Value {
		return this._fields.def
	}

	public set def(value: protoreflect.Value) {
		this._fields.def = value
	}

	public _fields: {
		goType: reflect.Type | null
		def: protoreflect.Value
	}

	constructor(init?: Partial<{goType?: reflect.Type | null, def?: protoreflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			goType: init?.goType ?? (null! as reflect.Type | null),
			def: init?.def ? init.def.clone() : new protoreflect.Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): boolConverter {
		return new boolConverter(this, true)
	}

	public __goscriptAssign(source: boolConverter): void {
		const target = this._fields
		const values = source._fields
		target.goType = $.assignFieldValue(target.goType, values.goType, "reflect.Type")
		$.assignStruct(target.def, values.def)
	}

	public GoValueOf(v: protoreflect.Value): reflect.Value {
		const c: boolConverter | $.VarRef<boolConverter> | null = this;
		return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.markAsStructValue($.cloneStructValue(v)).Bool()))).Convert($.pointerValueOrNil($.pointerValue<boolConverter>(c).goType)!)))
	}

	public IsValidGo(v: reflect.Value): boolean {
		const c: boolConverter | $.VarRef<boolConverter> | null = this;
		return $.markAsStructValue($.cloneStructValue(v)).IsValid() && ($.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), $.pointerValue<boolConverter>(c).goType))
	}

	public IsValidPB(v: protoreflect.Value): boolean {
		const c: boolConverter | $.VarRef<boolConverter> | null = this;
		let [, ok] = $.typeAssertTuple<boolean>($.markAsStructValue($.cloneStructValue(v)).Interface(), /* @__PURE__ */ $.basicType("bool"))
		return ok
	}

	public New(): protoreflect.Value {
		const c: boolConverter | $.VarRef<boolConverter> | null = this;
		return ($.pointerValue<boolConverter>(c).def).clone()
	}

	public async PBValueOf(v: reflect.Value): globalThis.Promise<protoreflect.Value> {
		const c: boolConverter | $.VarRef<boolConverter> | null = this;
		const c$: boolConverter = c == null ? $.pointerTarget<boolConverter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<boolConverter>(c)
		if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), (c$ as boolConverter).goType)) {
			$.panic(await fmt.Sprintf("invalid type: got %v, want %v", ($.markAsStructValue($.cloneStructValue(v)).Type() as any), ((c$ as boolConverter).goType as any)))
		}
		return protoreflect.ValueOfBool($.markAsStructValue($.cloneStructValue(v)).Bool())
	}

	public Zero(): protoreflect.Value {
		const c: boolConverter | $.VarRef<boolConverter> | null = this;
		return ($.pointerValue<boolConverter>(c).def).clone()
	}

	static __typeInfo = $.registerStructType(
		"impl.boolConverter",
		() => new boolConverter(),
		() => [{ name: "GoValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "reflect.Value" }], pointerReceiver: true }, { name: "IsValidGo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "IsValidPB", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "New", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "PBValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "Zero", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }],
		boolConverter,
		() => [{ name: "goType", key: "goType", type: "reflect.Type" }, { name: "def", key: "def", type: "protoreflect.Value" }]
	)
}

export class int32Converter {
	public get goType(): reflect.Type | null {
		return this._fields.goType
	}

	public set goType(value: reflect.Type | null) {
		this._fields.goType = value
	}

	public get def(): protoreflect.Value {
		return this._fields.def
	}

	public set def(value: protoreflect.Value) {
		this._fields.def = value
	}

	public _fields: {
		goType: reflect.Type | null
		def: protoreflect.Value
	}

	constructor(init?: Partial<{goType?: reflect.Type | null, def?: protoreflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			goType: init?.goType ?? (null! as reflect.Type | null),
			def: init?.def ? init.def.clone() : new protoreflect.Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): int32Converter {
		return new int32Converter(this, true)
	}

	public __goscriptAssign(source: int32Converter): void {
		const target = this._fields
		const values = source._fields
		target.goType = $.assignFieldValue(target.goType, values.goType, "reflect.Type")
		$.assignStruct(target.def, values.def)
	}

	public GoValueOf(v: protoreflect.Value): reflect.Value {
		const c: int32Converter | $.VarRef<int32Converter> | null = this;
		return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32), "int32")))).Convert($.pointerValueOrNil($.pointerValue<int32Converter>(c).goType)!)))
	}

	public IsValidGo(v: reflect.Value): boolean {
		const c: int32Converter | $.VarRef<int32Converter> | null = this;
		return $.markAsStructValue($.cloneStructValue(v)).IsValid() && ($.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), $.pointerValue<int32Converter>(c).goType))
	}

	public IsValidPB(v: protoreflect.Value): boolean {
		const c: int32Converter | $.VarRef<int32Converter> | null = this;
		let [, ok] = $.typeAssertTuple<number>($.markAsStructValue($.cloneStructValue(v)).Interface(), /* @__PURE__ */ $.basicType("int32"))
		return ok
	}

	public New(): protoreflect.Value {
		const c: int32Converter | $.VarRef<int32Converter> | null = this;
		return ($.pointerValue<int32Converter>(c).def).clone()
	}

	public async PBValueOf(v: reflect.Value): globalThis.Promise<protoreflect.Value> {
		const c: int32Converter | $.VarRef<int32Converter> | null = this;
		const c$: int32Converter = c == null ? $.pointerTarget<int32Converter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<int32Converter>(c)
		if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), (c$ as int32Converter).goType)) {
			$.panic(await fmt.Sprintf("invalid type: got %v, want %v", ($.markAsStructValue($.cloneStructValue(v)).Type() as any), ((c$ as int32Converter).goType as any)))
		}
		return protoreflect.ValueOfInt32($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32))
	}

	public Zero(): protoreflect.Value {
		const c: int32Converter | $.VarRef<int32Converter> | null = this;
		return ($.pointerValue<int32Converter>(c).def).clone()
	}

	static __typeInfo = $.registerStructType(
		"impl.int32Converter",
		() => new int32Converter(),
		() => [{ name: "GoValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "reflect.Value" }], pointerReceiver: true }, { name: "IsValidGo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "IsValidPB", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "New", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "PBValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "Zero", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }],
		int32Converter,
		() => [{ name: "goType", key: "goType", type: "reflect.Type" }, { name: "def", key: "def", type: "protoreflect.Value" }]
	)
}

export class int64Converter {
	public get goType(): reflect.Type | null {
		return this._fields.goType
	}

	public set goType(value: reflect.Type | null) {
		this._fields.goType = value
	}

	public get def(): protoreflect.Value {
		return this._fields.def
	}

	public set def(value: protoreflect.Value) {
		this._fields.def = value
	}

	public _fields: {
		goType: reflect.Type | null
		def: protoreflect.Value
	}

	constructor(init?: Partial<{goType?: reflect.Type | null, def?: protoreflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			goType: init?.goType ?? (null! as reflect.Type | null),
			def: init?.def ? init.def.clone() : new protoreflect.Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): int64Converter {
		return new int64Converter(this, true)
	}

	public __goscriptAssign(source: int64Converter): void {
		const target = this._fields
		const values = source._fields
		target.goType = $.assignFieldValue(target.goType, values.goType, "reflect.Type")
		$.assignStruct(target.def, values.def)
	}

	public GoValueOf(v: protoreflect.Value): reflect.Value {
		const c: int64Converter | $.VarRef<int64Converter> | null = this;
		return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue($.int64($.markAsStructValue($.cloneStructValue(v)).Int()), "int64")))).Convert($.pointerValueOrNil($.pointerValue<int64Converter>(c).goType)!)))
	}

	public IsValidGo(v: reflect.Value): boolean {
		const c: int64Converter | $.VarRef<int64Converter> | null = this;
		return $.markAsStructValue($.cloneStructValue(v)).IsValid() && ($.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), $.pointerValue<int64Converter>(c).goType))
	}

	public IsValidPB(v: protoreflect.Value): boolean {
		const c: int64Converter | $.VarRef<int64Converter> | null = this;
		let [, ok] = $.typeAssertTuple<bigint>($.markAsStructValue($.cloneStructValue(v)).Interface(), /* @__PURE__ */ $.basicType("int64"))
		return ok
	}

	public New(): protoreflect.Value {
		const c: int64Converter | $.VarRef<int64Converter> | null = this;
		return ($.pointerValue<int64Converter>(c).def).clone()
	}

	public async PBValueOf(v: reflect.Value): globalThis.Promise<protoreflect.Value> {
		const c: int64Converter | $.VarRef<int64Converter> | null = this;
		const c$: int64Converter = c == null ? $.pointerTarget<int64Converter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<int64Converter>(c)
		if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), (c$ as int64Converter).goType)) {
			$.panic(await fmt.Sprintf("invalid type: got %v, want %v", ($.markAsStructValue($.cloneStructValue(v)).Type() as any), ((c$ as int64Converter).goType as any)))
		}
		return protoreflect.ValueOfInt64($.int64($.markAsStructValue($.cloneStructValue(v)).Int()))
	}

	public Zero(): protoreflect.Value {
		const c: int64Converter | $.VarRef<int64Converter> | null = this;
		return ($.pointerValue<int64Converter>(c).def).clone()
	}

	static __typeInfo = $.registerStructType(
		"impl.int64Converter",
		() => new int64Converter(),
		() => [{ name: "GoValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "reflect.Value" }], pointerReceiver: true }, { name: "IsValidGo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "IsValidPB", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "New", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "PBValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "Zero", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }],
		int64Converter,
		() => [{ name: "goType", key: "goType", type: "reflect.Type" }, { name: "def", key: "def", type: "protoreflect.Value" }]
	)
}

export class uint32Converter {
	public get goType(): reflect.Type | null {
		return this._fields.goType
	}

	public set goType(value: reflect.Type | null) {
		this._fields.goType = value
	}

	public get def(): protoreflect.Value {
		return this._fields.def
	}

	public set def(value: protoreflect.Value) {
		this._fields.def = value
	}

	public _fields: {
		goType: reflect.Type | null
		def: protoreflect.Value
	}

	constructor(init?: Partial<{goType?: reflect.Type | null, def?: protoreflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			goType: init?.goType ?? (null! as reflect.Type | null),
			def: init?.def ? init.def.clone() : new protoreflect.Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): uint32Converter {
		return new uint32Converter(this, true)
	}

	public __goscriptAssign(source: uint32Converter): void {
		const target = this._fields
		const values = source._fields
		target.goType = $.assignFieldValue(target.goType, values.goType, "reflect.Type")
		$.assignStruct(target.def, values.def)
	}

	public GoValueOf(v: protoreflect.Value): reflect.Value {
		const c: uint32Converter | $.VarRef<uint32Converter> | null = this;
		return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue($.uint($.markAsStructValue($.cloneStructValue(v)).Uint(), 32), "uint32")))).Convert($.pointerValueOrNil($.pointerValue<uint32Converter>(c).goType)!)))
	}

	public IsValidGo(v: reflect.Value): boolean {
		const c: uint32Converter | $.VarRef<uint32Converter> | null = this;
		return $.markAsStructValue($.cloneStructValue(v)).IsValid() && ($.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), $.pointerValue<uint32Converter>(c).goType))
	}

	public IsValidPB(v: protoreflect.Value): boolean {
		const c: uint32Converter | $.VarRef<uint32Converter> | null = this;
		let [, ok] = $.typeAssertTuple<number>($.markAsStructValue($.cloneStructValue(v)).Interface(), /* @__PURE__ */ $.basicType("uint32"))
		return ok
	}

	public New(): protoreflect.Value {
		const c: uint32Converter | $.VarRef<uint32Converter> | null = this;
		return ($.pointerValue<uint32Converter>(c).def).clone()
	}

	public async PBValueOf(v: reflect.Value): globalThis.Promise<protoreflect.Value> {
		const c: uint32Converter | $.VarRef<uint32Converter> | null = this;
		const c$: uint32Converter = c == null ? $.pointerTarget<uint32Converter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<uint32Converter>(c)
		if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), (c$ as uint32Converter).goType)) {
			$.panic(await fmt.Sprintf("invalid type: got %v, want %v", ($.markAsStructValue($.cloneStructValue(v)).Type() as any), ((c$ as uint32Converter).goType as any)))
		}
		return protoreflect.ValueOfUint32($.uint($.markAsStructValue($.cloneStructValue(v)).Uint(), 32))
	}

	public Zero(): protoreflect.Value {
		const c: uint32Converter | $.VarRef<uint32Converter> | null = this;
		return ($.pointerValue<uint32Converter>(c).def).clone()
	}

	static __typeInfo = $.registerStructType(
		"impl.uint32Converter",
		() => new uint32Converter(),
		() => [{ name: "GoValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "reflect.Value" }], pointerReceiver: true }, { name: "IsValidGo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "IsValidPB", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "New", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "PBValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "Zero", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }],
		uint32Converter,
		() => [{ name: "goType", key: "goType", type: "reflect.Type" }, { name: "def", key: "def", type: "protoreflect.Value" }]
	)
}

export class uint64Converter {
	public get goType(): reflect.Type | null {
		return this._fields.goType
	}

	public set goType(value: reflect.Type | null) {
		this._fields.goType = value
	}

	public get def(): protoreflect.Value {
		return this._fields.def
	}

	public set def(value: protoreflect.Value) {
		this._fields.def = value
	}

	public _fields: {
		goType: reflect.Type | null
		def: protoreflect.Value
	}

	constructor(init?: Partial<{goType?: reflect.Type | null, def?: protoreflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			goType: init?.goType ?? (null! as reflect.Type | null),
			def: init?.def ? init.def.clone() : new protoreflect.Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): uint64Converter {
		return new uint64Converter(this, true)
	}

	public __goscriptAssign(source: uint64Converter): void {
		const target = this._fields
		const values = source._fields
		target.goType = $.assignFieldValue(target.goType, values.goType, "reflect.Type")
		$.assignStruct(target.def, values.def)
	}

	public GoValueOf(v: protoreflect.Value): reflect.Value {
		const c: uint64Converter | $.VarRef<uint64Converter> | null = this;
		return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue($.uint64($.markAsStructValue($.cloneStructValue(v)).Uint()), "uint64")))).Convert($.pointerValueOrNil($.pointerValue<uint64Converter>(c).goType)!)))
	}

	public IsValidGo(v: reflect.Value): boolean {
		const c: uint64Converter | $.VarRef<uint64Converter> | null = this;
		return $.markAsStructValue($.cloneStructValue(v)).IsValid() && ($.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), $.pointerValue<uint64Converter>(c).goType))
	}

	public IsValidPB(v: protoreflect.Value): boolean {
		const c: uint64Converter | $.VarRef<uint64Converter> | null = this;
		let [, ok] = $.typeAssertTuple<bigint>($.markAsStructValue($.cloneStructValue(v)).Interface(), /* @__PURE__ */ $.basicType("uint64"))
		return ok
	}

	public New(): protoreflect.Value {
		const c: uint64Converter | $.VarRef<uint64Converter> | null = this;
		return ($.pointerValue<uint64Converter>(c).def).clone()
	}

	public async PBValueOf(v: reflect.Value): globalThis.Promise<protoreflect.Value> {
		const c: uint64Converter | $.VarRef<uint64Converter> | null = this;
		const c$: uint64Converter = c == null ? $.pointerTarget<uint64Converter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<uint64Converter>(c)
		if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), (c$ as uint64Converter).goType)) {
			$.panic(await fmt.Sprintf("invalid type: got %v, want %v", ($.markAsStructValue($.cloneStructValue(v)).Type() as any), ((c$ as uint64Converter).goType as any)))
		}
		return protoreflect.ValueOfUint64($.uint64($.markAsStructValue($.cloneStructValue(v)).Uint()))
	}

	public Zero(): protoreflect.Value {
		const c: uint64Converter | $.VarRef<uint64Converter> | null = this;
		return ($.pointerValue<uint64Converter>(c).def).clone()
	}

	static __typeInfo = $.registerStructType(
		"impl.uint64Converter",
		() => new uint64Converter(),
		() => [{ name: "GoValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "reflect.Value" }], pointerReceiver: true }, { name: "IsValidGo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "IsValidPB", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "New", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "PBValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "Zero", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }],
		uint64Converter,
		() => [{ name: "goType", key: "goType", type: "reflect.Type" }, { name: "def", key: "def", type: "protoreflect.Value" }]
	)
}

export class float32Converter {
	public get goType(): reflect.Type | null {
		return this._fields.goType
	}

	public set goType(value: reflect.Type | null) {
		this._fields.goType = value
	}

	public get def(): protoreflect.Value {
		return this._fields.def
	}

	public set def(value: protoreflect.Value) {
		this._fields.def = value
	}

	public _fields: {
		goType: reflect.Type | null
		def: protoreflect.Value
	}

	constructor(init?: Partial<{goType?: reflect.Type | null, def?: protoreflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			goType: init?.goType ?? (null! as reflect.Type | null),
			def: init?.def ? init.def.clone() : new protoreflect.Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): float32Converter {
		return new float32Converter(this, true)
	}

	public __goscriptAssign(source: float32Converter): void {
		const target = this._fields
		const values = source._fields
		target.goType = $.assignFieldValue(target.goType, values.goType, "reflect.Type")
		$.assignStruct(target.def, values.def)
	}

	public GoValueOf(v: protoreflect.Value): reflect.Value {
		const c: float32Converter | $.VarRef<float32Converter> | null = this;
		return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue(globalThis.Math.fround($.markAsStructValue($.cloneStructValue(v)).Float()), "float32")))).Convert($.pointerValueOrNil($.pointerValue<float32Converter>(c).goType)!)))
	}

	public IsValidGo(v: reflect.Value): boolean {
		const c: float32Converter | $.VarRef<float32Converter> | null = this;
		return $.markAsStructValue($.cloneStructValue(v)).IsValid() && ($.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), $.pointerValue<float32Converter>(c).goType))
	}

	public IsValidPB(v: protoreflect.Value): boolean {
		const c: float32Converter | $.VarRef<float32Converter> | null = this;
		let [, ok] = $.typeAssertTuple<number>($.markAsStructValue($.cloneStructValue(v)).Interface(), /* @__PURE__ */ $.basicType("float32"))
		return ok
	}

	public New(): protoreflect.Value {
		const c: float32Converter | $.VarRef<float32Converter> | null = this;
		return ($.pointerValue<float32Converter>(c).def).clone()
	}

	public async PBValueOf(v: reflect.Value): globalThis.Promise<protoreflect.Value> {
		const c: float32Converter | $.VarRef<float32Converter> | null = this;
		const c$: float32Converter = c == null ? $.pointerTarget<float32Converter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<float32Converter>(c)
		if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), (c$ as float32Converter).goType)) {
			$.panic(await fmt.Sprintf("invalid type: got %v, want %v", ($.markAsStructValue($.cloneStructValue(v)).Type() as any), ((c$ as float32Converter).goType as any)))
		}
		return protoreflect.ValueOfFloat32(globalThis.Math.fround($.markAsStructValue($.cloneStructValue(v)).Float()))
	}

	public Zero(): protoreflect.Value {
		const c: float32Converter | $.VarRef<float32Converter> | null = this;
		return ($.pointerValue<float32Converter>(c).def).clone()
	}

	static __typeInfo = $.registerStructType(
		"impl.float32Converter",
		() => new float32Converter(),
		() => [{ name: "GoValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "reflect.Value" }], pointerReceiver: true }, { name: "IsValidGo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "IsValidPB", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "New", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "PBValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "Zero", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }],
		float32Converter,
		() => [{ name: "goType", key: "goType", type: "reflect.Type" }, { name: "def", key: "def", type: "protoreflect.Value" }]
	)
}

export class float64Converter {
	public get goType(): reflect.Type | null {
		return this._fields.goType
	}

	public set goType(value: reflect.Type | null) {
		this._fields.goType = value
	}

	public get def(): protoreflect.Value {
		return this._fields.def
	}

	public set def(value: protoreflect.Value) {
		this._fields.def = value
	}

	public _fields: {
		goType: reflect.Type | null
		def: protoreflect.Value
	}

	constructor(init?: Partial<{goType?: reflect.Type | null, def?: protoreflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			goType: init?.goType ?? (null! as reflect.Type | null),
			def: init?.def ? init.def.clone() : new protoreflect.Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): float64Converter {
		return new float64Converter(this, true)
	}

	public __goscriptAssign(source: float64Converter): void {
		const target = this._fields
		const values = source._fields
		target.goType = $.assignFieldValue(target.goType, values.goType, "reflect.Type")
		$.assignStruct(target.def, values.def)
	}

	public GoValueOf(v: protoreflect.Value): reflect.Value {
		const c: float64Converter | $.VarRef<float64Converter> | null = this;
		return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue($.markAsStructValue($.cloneStructValue(v)).Float(), "float64")))).Convert($.pointerValueOrNil($.pointerValue<float64Converter>(c).goType)!)))
	}

	public IsValidGo(v: reflect.Value): boolean {
		const c: float64Converter | $.VarRef<float64Converter> | null = this;
		return $.markAsStructValue($.cloneStructValue(v)).IsValid() && ($.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), $.pointerValue<float64Converter>(c).goType))
	}

	public IsValidPB(v: protoreflect.Value): boolean {
		const c: float64Converter | $.VarRef<float64Converter> | null = this;
		let [, ok] = $.typeAssertTuple<number>($.markAsStructValue($.cloneStructValue(v)).Interface(), /* @__PURE__ */ $.basicType("float64"))
		return ok
	}

	public New(): protoreflect.Value {
		const c: float64Converter | $.VarRef<float64Converter> | null = this;
		return ($.pointerValue<float64Converter>(c).def).clone()
	}

	public async PBValueOf(v: reflect.Value): globalThis.Promise<protoreflect.Value> {
		const c: float64Converter | $.VarRef<float64Converter> | null = this;
		const c$: float64Converter = c == null ? $.pointerTarget<float64Converter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<float64Converter>(c)
		if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), (c$ as float64Converter).goType)) {
			$.panic(await fmt.Sprintf("invalid type: got %v, want %v", ($.markAsStructValue($.cloneStructValue(v)).Type() as any), ((c$ as float64Converter).goType as any)))
		}
		return protoreflect.ValueOfFloat64($.markAsStructValue($.cloneStructValue(v)).Float())
	}

	public Zero(): protoreflect.Value {
		const c: float64Converter | $.VarRef<float64Converter> | null = this;
		return ($.pointerValue<float64Converter>(c).def).clone()
	}

	static __typeInfo = $.registerStructType(
		"impl.float64Converter",
		() => new float64Converter(),
		() => [{ name: "GoValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "reflect.Value" }], pointerReceiver: true }, { name: "IsValidGo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "IsValidPB", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "New", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "PBValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "Zero", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }],
		float64Converter,
		() => [{ name: "goType", key: "goType", type: "reflect.Type" }, { name: "def", key: "def", type: "protoreflect.Value" }]
	)
}

export class stringConverter {
	public get goType(): reflect.Type | null {
		return this._fields.goType
	}

	public set goType(value: reflect.Type | null) {
		this._fields.goType = value
	}

	public get def(): protoreflect.Value {
		return this._fields.def
	}

	public set def(value: protoreflect.Value) {
		this._fields.def = value
	}

	public _fields: {
		goType: reflect.Type | null
		def: protoreflect.Value
	}

	constructor(init?: Partial<{goType?: reflect.Type | null, def?: protoreflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			goType: init?.goType ?? (null! as reflect.Type | null),
			def: init?.def ? init.def.clone() : new protoreflect.Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): stringConverter {
		return new stringConverter(this, true)
	}

	public __goscriptAssign(source: stringConverter): void {
		const target = this._fields
		const values = source._fields
		target.goType = $.assignFieldValue(target.goType, values.goType, "reflect.Type")
		$.assignStruct(target.def, values.def)
	}

	public async GoValueOf(v: protoreflect.Value): globalThis.Promise<reflect.Value> {
		const c: stringConverter | $.VarRef<stringConverter> | null = this;
		const c$: stringConverter = c == null ? $.pointerTarget<stringConverter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<stringConverter>(c)
		// pref.Value.String never panics, so we go through an interface
		// conversion here to check the type.
		let s = $.mustTypeAssert<string>($.markAsStructValue($.cloneStructValue(v)).Interface(), /* @__PURE__ */ $.basicType("string"))
		if (((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((c$ as stringConverter).goType).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ($.stringEqual(s, ""))) {
			return $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil((c$ as stringConverter).goType)!)))
		}
		return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf(s))).Convert($.pointerValueOrNil((c$ as stringConverter).goType)!)))
	}

	public IsValidGo(v: reflect.Value): boolean {
		const c: stringConverter | $.VarRef<stringConverter> | null = this;
		return $.markAsStructValue($.cloneStructValue(v)).IsValid() && ($.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), $.pointerValue<stringConverter>(c).goType))
	}

	public IsValidPB(v: protoreflect.Value): boolean {
		const c: stringConverter | $.VarRef<stringConverter> | null = this;
		let [, ok] = $.typeAssertTuple<string>($.markAsStructValue($.cloneStructValue(v)).Interface(), /* @__PURE__ */ $.basicType("string"))
		return ok
	}

	public New(): protoreflect.Value {
		const c: stringConverter | $.VarRef<stringConverter> | null = this;
		return ($.pointerValue<stringConverter>(c).def).clone()
	}

	public async PBValueOf(v: reflect.Value): globalThis.Promise<protoreflect.Value> {
		const c: stringConverter | $.VarRef<stringConverter> | null = this;
		const c$: stringConverter = c == null ? $.pointerTarget<stringConverter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<stringConverter>(c)
		if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), (c$ as stringConverter).goType)) {
			$.panic(await fmt.Sprintf("invalid type: got %v, want %v", ($.markAsStructValue($.cloneStructValue(v)).Type() as any), ((c$ as stringConverter).goType as any)))
		}
		return protoreflect.ValueOfString($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Convert($.pointerValueOrNil(stringType)!))).String())
	}

	public Zero(): protoreflect.Value {
		const c: stringConverter | $.VarRef<stringConverter> | null = this;
		return ($.pointerValue<stringConverter>(c).def).clone()
	}

	static __typeInfo = $.registerStructType(
		"impl.stringConverter",
		() => new stringConverter(),
		() => [{ name: "GoValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "reflect.Value" }], pointerReceiver: true }, { name: "IsValidGo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "IsValidPB", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "New", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "PBValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "Zero", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }],
		stringConverter,
		() => [{ name: "goType", key: "goType", type: "reflect.Type" }, { name: "def", key: "def", type: "protoreflect.Value" }]
	)
}

export class bytesConverter {
	public get goType(): reflect.Type | null {
		return this._fields.goType
	}

	public set goType(value: reflect.Type | null) {
		this._fields.goType = value
	}

	public get def(): protoreflect.Value {
		return this._fields.def
	}

	public set def(value: protoreflect.Value) {
		this._fields.def = value
	}

	public _fields: {
		goType: reflect.Type | null
		def: protoreflect.Value
	}

	constructor(init?: Partial<{goType?: reflect.Type | null, def?: protoreflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			goType: init?.goType ?? (null! as reflect.Type | null),
			def: init?.def ? init.def.clone() : new protoreflect.Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bytesConverter {
		return new bytesConverter(this, true)
	}

	public __goscriptAssign(source: bytesConverter): void {
		const target = this._fields
		const values = source._fields
		target.goType = $.assignFieldValue(target.goType, values.goType, "reflect.Type")
		$.assignStruct(target.def, values.def)
	}

	public GoValueOf(v: protoreflect.Value): reflect.Value {
		const c: bytesConverter | $.VarRef<bytesConverter> | null = this;
		return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.markAsStructValue($.cloneStructValue(v)).Bytes(), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))).Convert($.pointerValueOrNil($.pointerValue<bytesConverter>(c).goType)!)))
	}

	public IsValidGo(v: reflect.Value): boolean {
		const c: bytesConverter | $.VarRef<bytesConverter> | null = this;
		return $.markAsStructValue($.cloneStructValue(v)).IsValid() && ($.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), $.pointerValue<bytesConverter>(c).goType))
	}

	public IsValidPB(v: protoreflect.Value): boolean {
		const c: bytesConverter | $.VarRef<bytesConverter> | null = this;
		let [, ok] = $.typeAssertTuple<$.Slice<number>>($.markAsStructValue($.cloneStructValue(v)).Interface(), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
		return ok
	}

	public New(): protoreflect.Value {
		const c: bytesConverter | $.VarRef<bytesConverter> | null = this;
		return ($.pointerValue<bytesConverter>(c).def).clone()
	}

	public async PBValueOf(v: reflect.Value): globalThis.Promise<protoreflect.Value> {
		const c: bytesConverter | $.VarRef<bytesConverter> | null = this;
		const c$: bytesConverter = c == null ? $.pointerTarget<bytesConverter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<bytesConverter>(c)
		if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), (c$ as bytesConverter).goType)) {
			$.panic(await fmt.Sprintf("invalid type: got %v, want %v", ($.markAsStructValue($.cloneStructValue(v)).Type() as any), ((c$ as bytesConverter).goType as any)))
		}
		if (((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((c$ as bytesConverter).goType).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) && ($.markAsStructValue($.cloneStructValue(v)).Len() == 0)) {
			return protoreflect.ValueOfBytes(null)
		}
		return protoreflect.ValueOfBytes($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Convert($.pointerValueOrNil(bytesType)!))).Bytes())
	}

	public Zero(): protoreflect.Value {
		const c: bytesConverter | $.VarRef<bytesConverter> | null = this;
		return ($.pointerValue<bytesConverter>(c).def).clone()
	}

	static __typeInfo = $.registerStructType(
		"impl.bytesConverter",
		() => new bytesConverter(),
		() => [{ name: "GoValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "reflect.Value" }], pointerReceiver: true }, { name: "IsValidGo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "IsValidPB", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "New", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "PBValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "Zero", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }],
		bytesConverter,
		() => [{ name: "goType", key: "goType", type: "reflect.Type" }, { name: "def", key: "def", type: "protoreflect.Value" }]
	)
}

export class enumConverter {
	public get goType(): reflect.Type | null {
		return this._fields.goType
	}

	public set goType(value: reflect.Type | null) {
		this._fields.goType = value
	}

	public get def(): protoreflect.Value {
		return this._fields.def
	}

	public set def(value: protoreflect.Value) {
		this._fields.def = value
	}

	public _fields: {
		goType: reflect.Type | null
		def: protoreflect.Value
	}

	constructor(init?: Partial<{goType?: reflect.Type | null, def?: protoreflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			goType: init?.goType ?? (null! as reflect.Type | null),
			def: init?.def ? init.def.clone() : new protoreflect.Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): enumConverter {
		return new enumConverter(this, true)
	}

	public __goscriptAssign(source: enumConverter): void {
		const target = this._fields
		const values = source._fields
		target.goType = $.assignFieldValue(target.goType, values.goType, "reflect.Type")
		$.assignStruct(target.def, values.def)
	}

	public GoValueOf(v: protoreflect.Value): reflect.Value {
		const c: enumConverter | $.VarRef<enumConverter> | null = this;
		return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.namedValueInterfaceValue<any>($.markAsStructValue($.cloneStructValue(v)).Enum(), "protoreflect.EnumNumber", {}, /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"))))).Convert($.pointerValueOrNil($.pointerValue<enumConverter>(c).goType)!)))
	}

	public IsValidGo(v: reflect.Value): boolean {
		const c: enumConverter | $.VarRef<enumConverter> | null = this;
		return $.markAsStructValue($.cloneStructValue(v)).IsValid() && ($.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), $.pointerValue<enumConverter>(c).goType))
	}

	public IsValidPB(v: protoreflect.Value): boolean {
		const c: enumConverter | $.VarRef<enumConverter> | null = this;
		let [, ok] = $.typeAssertTuple<protoreflect.EnumNumber>($.markAsStructValue($.cloneStructValue(v)).Interface(), /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"))
		return ok
	}

	public New(): protoreflect.Value {
		const c: enumConverter | $.VarRef<enumConverter> | null = this;
		return ($.pointerValue<enumConverter>(c).def).clone()
	}

	public async PBValueOf(v: reflect.Value): globalThis.Promise<protoreflect.Value> {
		const c: enumConverter | $.VarRef<enumConverter> | null = this;
		const c$: enumConverter = c == null ? $.pointerTarget<enumConverter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<enumConverter>(c)
		if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), (c$ as enumConverter).goType)) {
			$.panic(await fmt.Sprintf("invalid type: got %v, want %v", ($.markAsStructValue($.cloneStructValue(v)).Type() as any), ((c$ as enumConverter).goType as any)))
		}
		return protoreflect.ValueOfEnum($.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32))
	}

	public Zero(): protoreflect.Value {
		const c: enumConverter | $.VarRef<enumConverter> | null = this;
		return ($.pointerValue<enumConverter>(c).def).clone()
	}

	static __typeInfo = $.registerStructType(
		"impl.enumConverter",
		() => new enumConverter(),
		() => [{ name: "GoValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "reflect.Value" }], pointerReceiver: true }, { name: "IsValidGo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "IsValidPB", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "New", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "PBValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "Zero", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }],
		enumConverter,
		() => [{ name: "goType", key: "goType", type: "reflect.Type" }, { name: "def", key: "def", type: "protoreflect.Value" }]
	)
}

export class messageConverter {
	public get goType(): reflect.Type | null {
		return this._fields.goType
	}

	public set goType(value: reflect.Type | null) {
		this._fields.goType = value
	}

	public _fields: {
		goType: reflect.Type | null
	}

	constructor(init?: Partial<{goType?: reflect.Type | null}>, __goscriptValue?: boolean) {
		this._fields = {
			goType: init?.goType ?? (null! as reflect.Type | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): messageConverter {
		return new messageConverter(this, true)
	}

	public __goscriptAssign(source: messageConverter): void {
		const target = this._fields
		const values = source._fields
		target.goType = $.assignFieldValue(target.goType, values.goType, "reflect.Type")
	}

	public async GoValueOf(v: protoreflect.Value): globalThis.Promise<reflect.Value> {
		const c: messageConverter | $.VarRef<messageConverter> | null = this;
		const c$: messageConverter = c == null ? $.pointerTarget<messageConverter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<messageConverter>(c)
		let m = $.markAsStructValue($.cloneStructValue(v)).Message()
		let rv: reflect.Value = $.markAsStructValue(new reflect.Value())
		{
			let [u, ok] = $.typeAssertTuple<unwrapper | null>(m, "impl.unwrapper")
			if (ok) {
				rv = $.assignStruct(rv, reflect.ValueOf((__goscriptAwait = (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? (u as Exclude<unwrapper, null>) : $.pointerValue<Exclude<unwrapper, null>>(u)).protoUnwrap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
			} else {
				rv = $.assignStruct(rv, reflect.ValueOf(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)))
			}
		}
		if (await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as messageConverter).isNonPointer() : messageConverter.prototype.isNonPointer.call(c))) {
			if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(rv)).Type(), reflect.PtrTo($.pointerValueOrNil((c$ as messageConverter).goType)!))) {
				$.panic(await fmt.Sprintf("invalid type: got %v, want %v", ($.markAsStructValue($.cloneStructValue(rv)).Type() as any), (reflect.PtrTo($.pointerValueOrNil((c$ as messageConverter).goType)!) as any)))
			}
			if (!$.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
				rv = $.assignStruct(rv, $.markAsStructValue($.cloneStructValue(rv)).Elem())
			} else {
				rv = $.assignStruct(rv, reflect.Zero($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(rv)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))
			}
		}
		if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(rv)).Type(), (c$ as messageConverter).goType)) {
			$.panic(await fmt.Sprintf("invalid type: got %v, want %v", ($.markAsStructValue($.cloneStructValue(rv)).Type() as any), ((c$ as messageConverter).goType as any)))
		}
		return $.markAsStructValue($.cloneStructValue(rv))
	}

	public IsValidGo(v: reflect.Value): boolean {
		const c: messageConverter | $.VarRef<messageConverter> | null = this;
		return $.markAsStructValue($.cloneStructValue(v)).IsValid() && ($.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), $.pointerValue<messageConverter>(c).goType))
	}

	public async IsValidPB(v: protoreflect.Value): globalThis.Promise<boolean> {
		const c: messageConverter | $.VarRef<messageConverter> | null = this;
		const c$: messageConverter = c == null ? $.pointerTarget<messageConverter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<messageConverter>(c)
		let m = $.markAsStructValue($.cloneStructValue(v)).Message()
		let rv: reflect.Value = $.markAsStructValue(new reflect.Value())
		{
			let [u, ok] = $.typeAssertTuple<unwrapper | null>(m, "impl.unwrapper")
			if (ok) {
				rv = $.assignStruct(rv, reflect.ValueOf((__goscriptAwait = (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? (u as Exclude<unwrapper, null>) : $.pointerValue<Exclude<unwrapper, null>>(u)).protoUnwrap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
			} else {
				rv = $.assignStruct(rv, reflect.ValueOf(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)))
			}
		}
		if (await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as messageConverter).isNonPointer() : messageConverter.prototype.isNonPointer.call(c))) {
			return $.comparableEqual($.markAsStructValue($.cloneStructValue(rv)).Type(), reflect.PtrTo($.pointerValueOrNil((c$ as messageConverter).goType)!))
		}
		return $.comparableEqual($.markAsStructValue($.cloneStructValue(rv)).Type(), (c$ as messageConverter).goType)
	}

	public async New(): globalThis.Promise<protoreflect.Value> {
		const c: messageConverter | $.VarRef<messageConverter> | null = this;
		const c$: messageConverter = c == null ? $.pointerTarget<messageConverter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<messageConverter>(c)
		if (await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as messageConverter).isNonPointer() : messageConverter.prototype.isNonPointer.call(c))) {
			return messageConverter.prototype.PBValueOf.call(c, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((c$ as messageConverter).goType)!))).Elem())))
		}
		return messageConverter.prototype.PBValueOf.call(c, $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((c$ as messageConverter).goType).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
	}

	public async PBValueOf(v: reflect.Value): globalThis.Promise<protoreflect.Value> {
		const c: messageConverter | $.VarRef<messageConverter> | null = this;
		const c$: messageConverter = c == null ? $.pointerTarget<messageConverter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<messageConverter>(c)
		if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), (c$ as messageConverter).goType)) {
			$.panic(await fmt.Sprintf("invalid type: got %v, want %v", ($.markAsStructValue($.cloneStructValue(v)).Type() as any), ((c$ as messageConverter).goType as any)))
		}
		if (await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as messageConverter).isNonPointer() : messageConverter.prototype.isNonPointer.call(c))) {
			if ($.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
				v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Addr())
			} else {
				v = $.assignStruct(v, reflect.Zero($.pointerValueOrNil(reflect.PtrTo($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(v)).Type())!))!))
			}
		}
		{
			let [m, ok] = $.typeAssertTuple<protoreflect.ProtoMessage | null>($.markAsStructValue($.cloneStructValue(v)).Interface(), "protoreflect.ProtoMessage")
			if (ok) {
				return protoreflect.ValueOfMessage((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			}
		}
		return protoreflect.ValueOfMessage(await __goscript_legacy_message.legacyWrapMessage(v))
	}

	public async Zero(): globalThis.Promise<protoreflect.Value> {
		const c: messageConverter | $.VarRef<messageConverter> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as messageConverter).PBValueOf($.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.pointerValue<messageConverter>(c).goType)!)))) : messageConverter.prototype.PBValueOf.call(c, $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.pointerValue<messageConverter>(c).goType)!)))))
	}

	public async isNonPointer(): globalThis.Promise<boolean> {
		const c: messageConverter | $.VarRef<messageConverter> | null = this;
		return (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<messageConverter>(c).goType).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22
	}

	static __typeInfo = $.registerStructType(
		"impl.messageConverter",
		() => new messageConverter(),
		() => [{ name: "GoValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "reflect.Value" }], pointerReceiver: true }, { name: "IsValidGo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "IsValidPB", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "New", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "PBValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "Zero", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "isNonPointer", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }],
		messageConverter,
		() => [{ name: "goType", key: "goType", type: "reflect.Type" }]
	)
}

export async function NewConverter(t: reflect.Type | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<Converter | null> {
	switch ((true as boolean)) {
		case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			return __goscript_convert_list.newListConverter(t, fd)
			break
		}
		case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			return $.interfaceValue<Converter | null>(await __goscript_convert_map.newMapConverter(t, fd), "*impl.mapConverter", /* @__PURE__ */ $.pointerType("impl.mapConverter"))
			break
		}
		default:
		{
			return newSingularConverter(t, fd)
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export let boolType: reflect.Type | null = reflect.TypeOf(false)

export function __goscript_set_boolType(__goscriptValue: reflect.Type | null): void {
	boolType = __goscriptValue
}

export let int32Type: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue($.int(0, 32), "int32"))

export function __goscript_set_int32Type(__goscriptValue: reflect.Type | null): void {
	int32Type = __goscriptValue
}

export let int64Type: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue(0n, "int64"))

export function __goscript_set_int64Type(__goscriptValue: reflect.Type | null): void {
	int64Type = __goscriptValue
}

export let uint32Type: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue($.uint(0, 32), "uint32"))

export function __goscript_set_uint32Type(__goscriptValue: reflect.Type | null): void {
	uint32Type = __goscriptValue
}

export let uint64Type: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue(0n, "uint64"))

export function __goscript_set_uint64Type(__goscriptValue: reflect.Type | null): void {
	uint64Type = __goscriptValue
}

export let float32Type: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue(0, "float32"))

export function __goscript_set_float32Type(__goscriptValue: reflect.Type | null): void {
	float32Type = __goscriptValue
}

export let float64Type: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue(0, "float64"))

export function __goscript_set_float64Type(__goscriptValue: reflect.Type | null): void {
	float64Type = __goscriptValue
}

export let stringType: reflect.Type | null = reflect.TypeOf("")

export function __goscript_set_stringType(__goscriptValue: reflect.Type | null): void {
	stringType = __goscriptValue
}

export let bytesType: reflect.Type | null = reflect.TypeOf($.interfaceValue(null, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))

export function __goscript_set_bytesType(__goscriptValue: reflect.Type | null): void {
	bytesType = __goscriptValue
}

export var byteType: reflect.Type | null

export function __goscript_init_byteType(): void {
	if (((byteType) as any) === undefined) {
		byteType = reflect.TypeOf($.basicInterfaceValue($.uint(0, 8), "byte", "uint8"))
	}
}

export function __goscript_get_byteType(): reflect.Type | null {
	if (((byteType) as any) === undefined) {
		__goscript_init_byteType()
	}
	return byteType
}

export function __goscript_set_byteType(__goscriptValue: reflect.Type | null): void {
	byteType = __goscriptValue
}

export let boolZero: protoreflect.Value = await protoreflect.ValueOfBool(false)

export function __goscript_set_boolZero(__goscriptValue: protoreflect.Value): void {
	$.assignStruct(boolZero, __goscriptValue)
}

export let int32Zero: protoreflect.Value = await protoreflect.ValueOfInt32(0)

export function __goscript_set_int32Zero(__goscriptValue: protoreflect.Value): void {
	$.assignStruct(int32Zero, __goscriptValue)
}

export let int64Zero: protoreflect.Value = await protoreflect.ValueOfInt64(0n)

export function __goscript_set_int64Zero(__goscriptValue: protoreflect.Value): void {
	$.assignStruct(int64Zero, __goscriptValue)
}

export let uint32Zero: protoreflect.Value = await protoreflect.ValueOfUint32(0)

export function __goscript_set_uint32Zero(__goscriptValue: protoreflect.Value): void {
	$.assignStruct(uint32Zero, __goscriptValue)
}

export let uint64Zero: protoreflect.Value = await protoreflect.ValueOfUint64(0n)

export function __goscript_set_uint64Zero(__goscriptValue: protoreflect.Value): void {
	$.assignStruct(uint64Zero, __goscriptValue)
}

export let float32Zero: protoreflect.Value = await protoreflect.ValueOfFloat32(0)

export function __goscript_set_float32Zero(__goscriptValue: protoreflect.Value): void {
	$.assignStruct(float32Zero, __goscriptValue)
}

export let float64Zero: protoreflect.Value = await protoreflect.ValueOfFloat64(0)

export function __goscript_set_float64Zero(__goscriptValue: protoreflect.Value): void {
	$.assignStruct(float64Zero, __goscriptValue)
}

export let stringZero: protoreflect.Value = await protoreflect.ValueOfString("")

export function __goscript_set_stringZero(__goscriptValue: protoreflect.Value): void {
	$.assignStruct(stringZero, __goscriptValue)
}

export let bytesZero: protoreflect.Value = await protoreflect.ValueOfBytes(null)

export function __goscript_set_bytesZero(__goscriptValue: protoreflect.Value): void {
	$.assignStruct(bytesZero, __goscriptValue)
}

export async function newSingularConverter(t: reflect.Type | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<Converter | null> {
	let defVal: ((fd: protoreflect.FieldDescriptor | null, zero: protoreflect.Value) => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null = $.functionValue(async (fd: protoreflect.FieldDescriptor | null, zero: protoreflect.Value): globalThis.Promise<protoreflect.Value> => {
		if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 3) {
			// Default isn't defined for repeated fields.
			return (zero).clone()
		}
		return (((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Default(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: ["protoreflect.Value"] } as $.FunctionTypeInfo))
	switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		case protoreflect.BoolKind:
		{
			if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 1) {
				return $.interfaceValue<Converter | null>((await (async () => { const __goscriptLiteralField0 = ((__goscriptAwait = defVal!(fd, (boolZero).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value); return new boolConverter({goType: t, def: __goscriptLiteralField0}) })()), "*impl.boolConverter", /* @__PURE__ */ $.pointerType("impl.boolConverter"))
			}
			break
		}
		case protoreflect.Int32Kind:
		case protoreflect.Sint32Kind:
		case protoreflect.Sfixed32Kind:
		{
			if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
				return $.interfaceValue<Converter | null>((await (async () => { const __goscriptLiteralField1 = ((__goscriptAwait = defVal!(fd, (int32Zero).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value); return new int32Converter({goType: t, def: __goscriptLiteralField1}) })()), "*impl.int32Converter", /* @__PURE__ */ $.pointerType("impl.int32Converter"))
			}
			break
		}
		case protoreflect.Int64Kind:
		case protoreflect.Sint64Kind:
		case protoreflect.Sfixed64Kind:
		{
			if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) {
				return $.interfaceValue<Converter | null>((await (async () => { const __goscriptLiteralField2 = ((__goscriptAwait = defVal!(fd, (int64Zero).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value); return new int64Converter({goType: t, def: __goscriptLiteralField2}) })()), "*impl.int64Converter", /* @__PURE__ */ $.pointerType("impl.int64Converter"))
			}
			break
		}
		case protoreflect.Uint32Kind:
		case protoreflect.Fixed32Kind:
		{
			if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10) {
				return $.interfaceValue<Converter | null>((await (async () => { const __goscriptLiteralField3 = ((__goscriptAwait = defVal!(fd, (uint32Zero).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value); return new uint32Converter({goType: t, def: __goscriptLiteralField3}) })()), "*impl.uint32Converter", /* @__PURE__ */ $.pointerType("impl.uint32Converter"))
			}
			break
		}
		case protoreflect.Uint64Kind:
		case protoreflect.Fixed64Kind:
		{
			if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 11) {
				return $.interfaceValue<Converter | null>((await (async () => { const __goscriptLiteralField4 = ((__goscriptAwait = defVal!(fd, (uint64Zero).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value); return new uint64Converter({goType: t, def: __goscriptLiteralField4}) })()), "*impl.uint64Converter", /* @__PURE__ */ $.pointerType("impl.uint64Converter"))
			}
			break
		}
		case protoreflect.FloatKind:
		{
			if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 13) {
				return $.interfaceValue<Converter | null>((await (async () => { const __goscriptLiteralField5 = ((__goscriptAwait = defVal!(fd, (float32Zero).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value); return new float32Converter({goType: t, def: __goscriptLiteralField5}) })()), "*impl.float32Converter", /* @__PURE__ */ $.pointerType("impl.float32Converter"))
			}
			break
		}
		case protoreflect.DoubleKind:
		{
			if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 14) {
				return $.interfaceValue<Converter | null>((await (async () => { const __goscriptLiteralField6 = ((__goscriptAwait = defVal!(fd, (float64Zero).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value); return new float64Converter({goType: t, def: __goscriptLiteralField6}) })()), "*impl.float64Converter", /* @__PURE__ */ $.pointerType("impl.float64Converter"))
			}
			break
		}
		case protoreflect.StringKind:
		{
			if (((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) || (((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ($.comparableEqual((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), __goscript_get_byteType())))) {
				return $.interfaceValue<Converter | null>((await (async () => { const __goscriptLiteralField7 = ((__goscriptAwait = defVal!(fd, (stringZero).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value); return new stringConverter({goType: t, def: __goscriptLiteralField7}) })()), "*impl.stringConverter", /* @__PURE__ */ $.pointerType("impl.stringConverter"))
			}
			break
		}
		case protoreflect.BytesKind:
		{
			if (((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) || (((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ($.comparableEqual((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), __goscript_get_byteType())))) {
				return $.interfaceValue<Converter | null>((await (async () => { const __goscriptLiteralField8 = ((__goscriptAwait = defVal!(fd, (bytesZero).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value); return new bytesConverter({goType: t, def: __goscriptLiteralField8}) })()), "*impl.bytesConverter", /* @__PURE__ */ $.pointerType("impl.bytesConverter"))
			}
			break
		}
		case protoreflect.EnumKind:
		{
			if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5) {
				return newEnumConverter(t, fd)
			}
			break
		}
		case protoreflect.MessageKind:
		case protoreflect.GroupKind:
		{
			return newMessageConverter(t)
			break
		}
	}
	$.panic(await fmt.Sprintf("invalid Go type %v for field %v", (t as any), $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
	throw new globalThis.Error("goscript: unreachable return")
}

export async function newEnumConverter(goType: reflect.Type | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<Converter | null> {
	let def: protoreflect.Value = new protoreflect.Value(undefined, true)
	if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 3) {
		def = $.assignStruct(def, protoreflect.ValueOfEnum((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	} else {
		def = $.assignStruct(def, ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Default(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
	}
	return $.interfaceValue<Converter | null>(new enumConverter({goType: goType, def: def}), "*impl.enumConverter", /* @__PURE__ */ $.pointerType("impl.enumConverter"))
}

export function newMessageConverter(goType: reflect.Type | null): Converter | null {
	return $.interfaceValue<Converter | null>(new messageConverter({goType: goType}), "*impl.messageConverter", /* @__PURE__ */ $.pointerType("impl.messageConverter"))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Append: (receiver: any, ...args: any[]) => (protoreflect.FullName_Append as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.FullName_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (protoreflect.FullName_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (protoreflect.FullName_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "protoreflect.FullName"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Append", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Parent", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")])])
}

var __goscriptAwait: any
