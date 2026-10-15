// Generated file based on convert_map.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as __goscript_codec_map_go112 from "./codec_map_go112.gs.ts"

import * as __goscript_convert from "./convert.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "./codec_map_go112.gs.ts"
import "./convert.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.mapConverter", "impl.mapReflect"])

export class mapConverter {
	public get goType(): reflect.Type | null {
		return this._fields.goType
	}

	public set goType(value: reflect.Type | null) {
		this._fields.goType = value
	}

	public get keyConv(): __goscript_convert.Converter | null {
		return this._fields.keyConv
	}

	public set keyConv(value: __goscript_convert.Converter | null) {
		this._fields.keyConv = value
	}

	public get valConv(): __goscript_convert.Converter | null {
		return this._fields.valConv
	}

	public set valConv(value: __goscript_convert.Converter | null) {
		this._fields.valConv = value
	}

	public _fields: {
		goType: reflect.Type | null
		keyConv: __goscript_convert.Converter | null
		valConv: __goscript_convert.Converter | null
	}

	constructor(init?: Partial<{goType?: reflect.Type | null, keyConv?: __goscript_convert.Converter | null, valConv?: __goscript_convert.Converter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			goType: init?.goType ?? (null! as reflect.Type | null),
			keyConv: init?.keyConv ?? (null! as __goscript_convert.Converter | null),
			valConv: init?.valConv ?? (null! as __goscript_convert.Converter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mapConverter {
		return new mapConverter(this, true)
	}

	public __goscriptAssign(source: mapConverter): void {
		const target = this._fields
		const values = source._fields
		target.goType = $.assignFieldValue(target.goType, values.goType, "reflect.Type")
		target.keyConv = $.assignFieldValue(target.keyConv, values.keyConv, "impl.Converter")
		target.valConv = $.assignFieldValue(target.valConv, values.valConv, "impl.Converter")
	}

	public GoValueOf(v: protoreflect.Value): reflect.Value {
		const c: mapConverter | $.VarRef<mapConverter> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<mapReflect>($.mustTypeAssert<mapReflect | $.VarRef<mapReflect> | null>($.markAsStructValue($.cloneStructValue(v)).Map(), /* @__PURE__ */ $.pointerType("impl.mapReflect"))).v))
	}

	public IsValidGo(v: reflect.Value): boolean {
		const c: mapConverter | $.VarRef<mapConverter> | null = this;
		return $.markAsStructValue($.cloneStructValue(v)).IsValid() && ($.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), $.pointerValue<mapConverter>(c).goType))
	}

	public IsValidPB(v: protoreflect.Value): boolean {
		const c: mapConverter | $.VarRef<mapConverter> | null = this;
		let __goscriptTuple0: any = $.typeAssertTuple<mapReflect | $.VarRef<mapReflect> | null>($.markAsStructValue($.cloneStructValue(v)).Interface(), /* @__PURE__ */ $.pointerType("impl.mapReflect"))
		let mapv: mapReflect | $.VarRef<mapReflect> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			return false
		}
		return $.comparableEqual($.markAsStructValue($.cloneStructValue($.pointerValue<mapReflect>(mapv).v)).Type(), $.pointerValue<mapConverter>(c).goType)
	}

	public async New(): globalThis.Promise<protoreflect.Value> {
		const c: mapConverter | $.VarRef<mapConverter> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as mapConverter).PBValueOf($.markAsStructValue($.cloneStructValue(reflect.MakeMap($.pointerValueOrNil($.pointerValue<mapConverter>(c).goType)!)))) : mapConverter.prototype.PBValueOf.call(c, $.markAsStructValue($.cloneStructValue(reflect.MakeMap($.pointerValueOrNil($.pointerValue<mapConverter>(c).goType)!)))))
	}

	public async PBValueOf(v: reflect.Value): globalThis.Promise<protoreflect.Value> {
		const c: mapConverter | $.VarRef<mapConverter> | null = this;
		const c$: mapConverter = c == null ? $.pointerTarget<mapConverter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<mapConverter>(c)
		if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), (c$ as mapConverter).goType)) {
			$.panic(await fmt.Sprintf("invalid type: got %v, want %v", ($.markAsStructValue($.cloneStructValue(v)).Type() as any), ((c$ as mapConverter).goType as any)))
		}
		return protoreflect.ValueOfMap($.interfaceValue<protoreflect.Map | null>(new mapReflect({v: $.markAsStructValue($.cloneStructValue(v)), keyConv: (c$ as mapConverter).keyConv, valConv: (c$ as mapConverter).valConv}), "*impl.mapReflect", /* @__PURE__ */ $.pointerType("impl.mapReflect")))
	}

	public async Zero(): globalThis.Promise<protoreflect.Value> {
		const c: mapConverter | $.VarRef<mapConverter> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as mapConverter).PBValueOf($.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.pointerValue<mapConverter>(c).goType)!)))) : mapConverter.prototype.PBValueOf.call(c, $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.pointerValue<mapConverter>(c).goType)!)))))
	}

	static __typeInfo = $.registerStructType(
		"impl.mapConverter",
		() => new mapConverter(),
		() => [{ name: "GoValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "reflect.Value" }], pointerReceiver: true }, { name: "IsValidGo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "IsValidPB", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "New", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "PBValueOf", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "Zero", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }],
		mapConverter,
		() => [{ name: "goType", key: "goType", type: "reflect.Type" }, { name: "keyConv", key: "keyConv", type: "impl.Converter" }, { name: "valConv", key: "valConv", type: "impl.Converter" }]
	)
}

export class mapReflect {
	public get v(): reflect.Value {
		return this._fields.v
	}

	public set v(value: reflect.Value) {
		this._fields.v = value
	}

	public get keyConv(): __goscript_convert.Converter | null {
		return this._fields.keyConv
	}

	public set keyConv(value: __goscript_convert.Converter | null) {
		this._fields.keyConv = value
	}

	public get valConv(): __goscript_convert.Converter | null {
		return this._fields.valConv
	}

	public set valConv(value: __goscript_convert.Converter | null) {
		this._fields.valConv = value
	}

	public _fields: {
		v: reflect.Value
		keyConv: __goscript_convert.Converter | null
		valConv: __goscript_convert.Converter | null
	}

	constructor(init?: Partial<{v?: reflect.Value, keyConv?: __goscript_convert.Converter | null, valConv?: __goscript_convert.Converter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			v: init?.v ? $.markAsStructValue($.cloneStructValue(init.v)) : $.markAsStructValue(new reflect.Value()),
			keyConv: init?.keyConv ?? (null! as __goscript_convert.Converter | null),
			valConv: init?.valConv ?? (null! as __goscript_convert.Converter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mapReflect {
		return new mapReflect(this, true)
	}

	public __goscriptAssign(source: mapReflect): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.v, values.v)
		target.keyConv = $.assignFieldValue(target.keyConv, values.keyConv, "impl.Converter")
		target.valConv = $.assignFieldValue(target.valConv, values.valConv, "impl.Converter")
	}

	public async Clear(k: protoreflect.MapKey): globalThis.Promise<void> {
		const ms: mapReflect | $.VarRef<mapReflect> | null = this;
		const ms$: mapReflect = ms == null ? $.pointerTarget<mapReflect>(ms) : (ms as any).__isVarRef === true ? (ms as any).value : (ms as any).__goValue === undefined ? (ms as any) : $.pointerTarget<mapReflect>(ms)
		let rk = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>((ms$ as mapReflect).keyConv).GoValueOf($.markAsStructValue($.cloneStructValue(k)).Value()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value)))
		$.markAsStructValue($.cloneStructValue((ms$ as mapReflect).v)).SetMapIndex($.markAsStructValue($.cloneStructValue(rk)), $.markAsStructValue(new reflect.Value()))
	}

	public async Get(k: protoreflect.MapKey): globalThis.Promise<protoreflect.Value> {
		const ms: mapReflect | $.VarRef<mapReflect> | null = this;
		const ms$: mapReflect = ms == null ? $.pointerTarget<mapReflect>(ms) : (ms as any).__isVarRef === true ? (ms as any).value : (ms as any).__goValue === undefined ? (ms as any) : $.pointerTarget<mapReflect>(ms)
		let rk = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>((ms$ as mapReflect).keyConv).GoValueOf($.markAsStructValue($.cloneStructValue(k)).Value()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value)))
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((ms$ as mapReflect).v)).MapIndex($.markAsStructValue($.cloneStructValue(rk)))))
		if (!$.markAsStructValue($.cloneStructValue(rv)).IsValid()) {
			return new protoreflect.Value(undefined, true)
		}
		return (((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>((ms$ as mapReflect).valConv).PBValueOf($.markAsStructValue($.cloneStructValue(rv))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}

	public async Has(k: protoreflect.MapKey): globalThis.Promise<boolean> {
		const ms: mapReflect | $.VarRef<mapReflect> | null = this;
		const ms$: mapReflect = ms == null ? $.pointerTarget<mapReflect>(ms) : (ms as any).__isVarRef === true ? (ms as any).value : (ms as any).__goValue === undefined ? (ms as any) : $.pointerTarget<mapReflect>(ms)
		let rk = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>((ms$ as mapReflect).keyConv).GoValueOf($.markAsStructValue($.cloneStructValue(k)).Value()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value)))
		let rv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((ms$ as mapReflect).v)).MapIndex($.markAsStructValue($.cloneStructValue(rk)))))
		return $.markAsStructValue($.cloneStructValue(rv)).IsValid()
	}

	public IsValid(): boolean {
		const ms: mapReflect | $.VarRef<mapReflect> | null = this;
		return !$.markAsStructValue($.cloneStructValue($.pointerValue<mapReflect>(ms).v)).IsNil()
	}

	public Len(): number {
		const ms: mapReflect | $.VarRef<mapReflect> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<mapReflect>(ms).v)).Len()
	}

	public async Mutable(k: protoreflect.MapKey): globalThis.Promise<protoreflect.Value> {
		const ms: mapReflect | $.VarRef<mapReflect> | null = this;
		{
			let [, ok] = $.typeAssertTuple<__goscript_convert.messageConverter | $.VarRef<__goscript_convert.messageConverter> | null>($.pointerValue<mapReflect>(ms).valConv, /* @__PURE__ */ $.pointerType("impl.messageConverter"))
			if (!ok) {
				$.panic("invalid Mutable on map with non-message value type")
			}
		}
		let v = await (ms !== null && (ms as any).__isVarRef !== true && (ms as any).__goValue === undefined ? ((ms as any) as mapReflect).Get(k) : mapReflect.prototype.Get.call(ms, k))
		if (!$.markAsStructValue($.cloneStructValue(v)).IsValid()) {
			v = $.assignStruct(v, await (ms !== null && (ms as any).__isVarRef !== true && (ms as any).__goValue === undefined ? ((ms as any) as mapReflect).NewValue() : mapReflect.prototype.NewValue.call(ms)))
			await (ms !== null && (ms as any).__isVarRef !== true && (ms as any).__goValue === undefined ? ((ms as any) as mapReflect).Set(k, v) : mapReflect.prototype.Set.call(ms, k, v))
		}
		return (v).clone()
	}

	public async NewValue(): globalThis.Promise<protoreflect.Value> {
		const ms: mapReflect | $.VarRef<mapReflect> | null = this;
		return (((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>($.pointerValue<mapReflect>(ms).valConv).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}

	public async Range(f: ((_p0: protoreflect.MapKey, _p1: protoreflect.Value) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
		const ms: mapReflect | $.VarRef<mapReflect> | null = this;
		const ms$: mapReflect = ms == null ? $.pointerTarget<mapReflect>(ms) : (ms as any).__isVarRef === true ? (ms as any).value : (ms as any).__goValue === undefined ? (ms as any) : $.pointerTarget<mapReflect>(ms)
		let iter: reflect.MapIter | $.VarRef<reflect.MapIter> | null = __goscript_codec_map_go112.mapRange($.markAsStructValue($.cloneStructValue((ms$ as mapReflect).v)))
		while (reflect.MapIter.prototype.Next.call($.pointerValue<reflect.MapIter>(iter))) {
			let k = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>((ms$ as mapReflect).keyConv).PBValueOf($.markAsStructValue($.cloneStructValue(reflect.MapIter.prototype.Key.call($.pointerValue<reflect.MapIter>(iter))))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).MapKey()
			let v = (((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>((ms$ as mapReflect).valConv).PBValueOf($.markAsStructValue($.cloneStructValue(reflect.MapIter.prototype.Value.call($.pointerValue<reflect.MapIter>(iter))))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			if (!(__goscriptAwait = f!((k).clone(), (v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return
			}
		}
	}

	public async Set(k: protoreflect.MapKey, v: protoreflect.Value): globalThis.Promise<void> {
		const ms: mapReflect | $.VarRef<mapReflect> | null = this;
		const ms$: mapReflect = ms == null ? $.pointerTarget<mapReflect>(ms) : (ms as any).__isVarRef === true ? (ms as any).value : (ms as any).__goValue === undefined ? (ms as any) : $.pointerTarget<mapReflect>(ms)
		let rk = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>((ms$ as mapReflect).keyConv).GoValueOf($.markAsStructValue($.cloneStructValue(k)).Value()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value)))
		let rv = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>((ms$ as mapReflect).valConv).GoValueOf((v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value)))
		$.markAsStructValue($.cloneStructValue((ms$ as mapReflect).v)).SetMapIndex($.markAsStructValue($.cloneStructValue(rk)), $.markAsStructValue($.cloneStructValue(rv)))
	}

	public protoUnwrap(): any {
		const ms: mapReflect | $.VarRef<mapReflect> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<mapReflect>(ms).v)).Interface()
	}

	static __typeInfo = $.registerStructType(
		"impl.mapReflect",
		() => new mapReflect(),
		() => [{ name: "Clear", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "Get", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "Has", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "IsValid", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "Len", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Mutable", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "NewValue", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "Range", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "Set", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "protoUnwrap", args: [], returns: [{ type: { kind: $.TypeKind.Interface, methods: [] } }], pointerReceiver: true }],
		mapReflect,
		() => [{ name: "v", key: "v", type: "reflect.Value" }, { name: "keyConv", key: "keyConv", type: "impl.Converter" }, { name: "valConv", key: "valConv", type: "impl.Converter" }]
	)
}

export async function newMapConverter(t: reflect.Type | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<mapConverter | $.VarRef<mapConverter> | null> {
	if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 21) {
		$.panic(await fmt.Sprintf("invalid Go type %v for field %v", (t as any), $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
	}
	return (await (async () => { const __goscriptLiteralField0 = await __goscript_convert.newSingularConverter((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapKey(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)); const __goscriptLiteralField1 = await __goscript_convert.newSingularConverter((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)); return new mapConverter({goType: t, keyConv: __goscriptLiteralField0, valConv: __goscriptLiteralField1}) })())
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
