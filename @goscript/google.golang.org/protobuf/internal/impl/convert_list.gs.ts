// Generated file based on convert_list.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as __goscript_convert from "./convert.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "./convert.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.listConverter", "impl.listPtrConverter", "impl.listReflect"])

export class listConverter {
	public get goType(): reflect.Type | null {
		return this._fields.goType
	}

	public set goType(value: reflect.Type | null) {
		this._fields.goType = value
	}

	public get c(): __goscript_convert.Converter | null {
		return this._fields.c
	}

	public set c(value: __goscript_convert.Converter | null) {
		this._fields.c = value
	}

	public _fields: {
		goType: reflect.Type | null
		c: __goscript_convert.Converter | null
	}

	constructor(init?: Partial<{goType?: reflect.Type | null, c?: __goscript_convert.Converter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			goType: init?.goType ?? (null! as reflect.Type | null),
			c: init?.c ?? (null! as __goscript_convert.Converter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): listConverter {
		return new listConverter(this, true)
	}

	public __goscriptAssign(source: listConverter): void {
		const target = this._fields
		const values = source._fields
		target.goType = $.assignFieldValue(target.goType, values.goType, "reflect.Type")
		target.c = $.assignFieldValue(target.c, values.c, "impl.Converter")
	}

	public async GoValueOf(v: protoreflect.Value): globalThis.Promise<reflect.Value> {
		const c: listConverter | $.VarRef<listConverter> | null = this;
		let rv = $.markAsStructValue($.cloneStructValue($.pointerValue<listReflect>($.mustTypeAssert<listReflect | $.VarRef<listReflect> | null>(await v.List(), /* @__PURE__ */ $.pointerType("impl.listReflect"))).v))
		if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
			return $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.pointerValue<listConverter>(c).goType)!)))
		}
		return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).Elem()))
	}

	public IsValidGo(v: reflect.Value): boolean {
		const c: listConverter | $.VarRef<listConverter> | null = this;
		return $.markAsStructValue($.cloneStructValue(v)).IsValid() && ($.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), $.pointerValue<listConverter>(c).goType))
	}

	public async IsValidPB(v: protoreflect.Value): globalThis.Promise<boolean> {
		const c: listConverter | $.VarRef<listConverter> | null = this;
		let __goscriptTuple0: any = $.typeAssertTuple<listReflect | $.VarRef<listReflect> | null>(await v.Interface(), /* @__PURE__ */ $.pointerType("impl.listReflect"))
		let list: listReflect | $.VarRef<listReflect> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			return false
		}
		return $.comparableEqual((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue($.pointerValue<listReflect>(list).v)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.pointerValue<listConverter>(c).goType)
	}

	public New(): protoreflect.Value {
		const c: listConverter | $.VarRef<listConverter> | null = this;
		const c$: listConverter = c == null ? $.pointerTarget<listConverter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<listConverter>(c)
		return protoreflect.ValueOfList($.interfaceValue<protoreflect.List | null>((() => { const __goscriptLiteralField2 = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((c$ as listConverter).goType)!))); return new listReflect({v: __goscriptLiteralField2, conv: (c$ as listConverter).c}) })(), "*impl.listReflect", /* @__PURE__ */ $.pointerType("impl.listReflect")))
	}

	public async PBValueOf(v: reflect.Value): globalThis.Promise<protoreflect.Value> {
		const c: listConverter | $.VarRef<listConverter> | null = this;
		const c$: listConverter = c == null ? $.pointerTarget<listConverter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<listConverter>(c)
		if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), (c$ as listConverter).goType)) {
			$.panic(await fmt.Sprintf("invalid type: got %v, want %v", ($.markAsStructValue($.cloneStructValue(v)).Type() as any), ((c$ as listConverter).goType as any)))
		}
		let pv = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((c$ as listConverter).goType)!)))
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(pv)).Elem())).Set($.markAsStructValue($.cloneStructValue(v)))
		return protoreflect.ValueOfList($.interfaceValue<protoreflect.List | null>(new listReflect({v: $.markAsStructValue($.cloneStructValue(pv)), conv: (c$ as listConverter).c}), "*impl.listReflect", /* @__PURE__ */ $.pointerType("impl.listReflect")))
	}

	public Zero(): protoreflect.Value {
		const c: listConverter | $.VarRef<listConverter> | null = this;
		const c$: listConverter = c == null ? $.pointerTarget<listConverter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<listConverter>(c)
		return protoreflect.ValueOfList($.interfaceValue<protoreflect.List | null>((() => { const __goscriptLiteralField3 = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(reflect.PtrTo($.pointerValueOrNil((c$ as listConverter).goType)!))!))); return new listReflect({v: __goscriptLiteralField3, conv: (c$ as listConverter).c}) })(), "*impl.listReflect", /* @__PURE__ */ $.pointerType("impl.listReflect")))
	}

	static __typeInfo = $.registerStructType(
		"impl.listConverter",
		() => new listConverter(),
		() => [$.methodSignature("GoValueOf", [["v", "protoreflect.Value"]], ["reflect.Value"], true), $.methodSignature("IsValidGo", [["v", "reflect.Value"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsValidPB", [["v", "protoreflect.Value"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("New", [], ["protoreflect.Value"], true), $.methodSignature("PBValueOf", [["v", "reflect.Value"]], ["protoreflect.Value"], true), $.methodSignature("Zero", [], ["protoreflect.Value"], true)],
		listConverter,
		() => [/* @__PURE__ */ $.structField("goType", "reflect.Type", [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("c", "impl.Converter", [1], 16, false, { pkgPath: "google.golang.org/protobuf/internal/impl" })]
	)
}

export class listPtrConverter {
	public get goType(): reflect.Type | null {
		return this._fields.goType
	}

	public set goType(value: reflect.Type | null) {
		this._fields.goType = value
	}

	public get c(): __goscript_convert.Converter | null {
		return this._fields.c
	}

	public set c(value: __goscript_convert.Converter | null) {
		this._fields.c = value
	}

	public _fields: {
		goType: reflect.Type | null
		c: __goscript_convert.Converter | null
	}

	constructor(init?: Partial<{goType?: reflect.Type | null, c?: __goscript_convert.Converter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			goType: init?.goType ?? (null! as reflect.Type | null),
			c: init?.c ?? (null! as __goscript_convert.Converter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): listPtrConverter {
		return new listPtrConverter(this, true)
	}

	public __goscriptAssign(source: listPtrConverter): void {
		const target = this._fields
		const values = source._fields
		target.goType = $.assignFieldValue(target.goType, values.goType, "reflect.Type")
		target.c = $.assignFieldValue(target.c, values.c, "impl.Converter")
	}

	public async GoValueOf(v: protoreflect.Value): globalThis.Promise<reflect.Value> {
		const c: listPtrConverter | $.VarRef<listPtrConverter> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<listReflect>($.mustTypeAssert<listReflect | $.VarRef<listReflect> | null>(await v.List(), /* @__PURE__ */ $.pointerType("impl.listReflect"))).v))
	}

	public IsValidGo(v: reflect.Value): boolean {
		const c: listPtrConverter | $.VarRef<listPtrConverter> | null = this;
		return $.markAsStructValue($.cloneStructValue(v)).IsValid() && ($.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), $.pointerValue<listPtrConverter>(c).goType))
	}

	public async IsValidPB(v: protoreflect.Value): globalThis.Promise<boolean> {
		const c: listPtrConverter | $.VarRef<listPtrConverter> | null = this;
		let __goscriptTuple1: any = $.typeAssertTuple<listReflect | $.VarRef<listReflect> | null>(await v.Interface(), /* @__PURE__ */ $.pointerType("impl.listReflect"))
		let list: listReflect | $.VarRef<listReflect> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (!ok) {
			return false
		}
		return $.comparableEqual($.markAsStructValue($.cloneStructValue($.pointerValue<listReflect>(list).v)).Type(), $.pointerValue<listPtrConverter>(c).goType)
	}

	public async New(): globalThis.Promise<protoreflect.Value> {
		const c: listPtrConverter | $.VarRef<listPtrConverter> | null = this;
		return listPtrConverter.prototype.PBValueOf.call(c, $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<listPtrConverter>(c).goType).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
	}

	public async PBValueOf(v: reflect.Value): globalThis.Promise<protoreflect.Value> {
		const c: listPtrConverter | $.VarRef<listPtrConverter> | null = this;
		const c$: listPtrConverter = c == null ? $.pointerTarget<listPtrConverter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<listPtrConverter>(c)
		if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), (c$ as listPtrConverter).goType)) {
			$.panic(await fmt.Sprintf("invalid type: got %v, want %v", ($.markAsStructValue($.cloneStructValue(v)).Type() as any), ((c$ as listPtrConverter).goType as any)))
		}
		return protoreflect.ValueOfList($.interfaceValue<protoreflect.List | null>(new listReflect({v: $.markAsStructValue($.cloneStructValue(v)), conv: (c$ as listPtrConverter).c}), "*impl.listReflect", /* @__PURE__ */ $.pointerType("impl.listReflect")))
	}

	public async Zero(): globalThis.Promise<protoreflect.Value> {
		const c: listPtrConverter | $.VarRef<listPtrConverter> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as listPtrConverter).PBValueOf($.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.pointerValue<listPtrConverter>(c).goType)!)))) : listPtrConverter.prototype.PBValueOf.call(c, $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.pointerValue<listPtrConverter>(c).goType)!)))))
	}

	static __typeInfo = $.registerStructType(
		"impl.listPtrConverter",
		() => new listPtrConverter(),
		() => [$.methodSignature("GoValueOf", [["v", "protoreflect.Value"]], ["reflect.Value"], true), $.methodSignature("IsValidGo", [["v", "reflect.Value"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsValidPB", [["v", "protoreflect.Value"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("New", [], ["protoreflect.Value"], true), $.methodSignature("PBValueOf", [["v", "reflect.Value"]], ["protoreflect.Value"], true), $.methodSignature("Zero", [], ["protoreflect.Value"], true)],
		listPtrConverter,
		() => [/* @__PURE__ */ $.structField("goType", "reflect.Type", [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("c", "impl.Converter", [1], 16, false, { pkgPath: "google.golang.org/protobuf/internal/impl" })]
	)
}

export class listReflect {
	public get v(): reflect.Value {
		return this._fields.v
	}

	public set v(value: reflect.Value) {
		this._fields.v = value
	}

	public get conv(): __goscript_convert.Converter | null {
		return this._fields.conv
	}

	public set conv(value: __goscript_convert.Converter | null) {
		this._fields.conv = value
	}

	public _fields: {
		v: reflect.Value
		conv: __goscript_convert.Converter | null
	}

	constructor(init?: Partial<{v?: reflect.Value, conv?: __goscript_convert.Converter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			v: init?.v ? $.markAsStructValue($.cloneStructValue(init.v)) : $.markAsStructValue(new reflect.Value()),
			conv: init?.conv ?? (null! as __goscript_convert.Converter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): listReflect {
		return new listReflect(this, true)
	}

	public __goscriptAssign(source: listReflect): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.v, values.v)
		target.conv = $.assignFieldValue(target.conv, values.conv, "impl.Converter")
	}

	public async Append(v: protoreflect.Value): globalThis.Promise<void> {
		const ls: listReflect | $.VarRef<listReflect> | null = this;
		const ls$: listReflect = ls == null ? $.pointerTarget<listReflect>(ls) : (ls as any).__isVarRef === true ? (ls as any).value : (ls as any).__goValue === undefined ? (ls as any) : $.pointerTarget<listReflect>(ls)
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((ls$ as listReflect).v)).Elem())).Set($.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((ls$ as listReflect).v)).Elem())), $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>((ls$ as listReflect).conv).GoValueOf((v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value)))))))
	}

	public async AppendMutable(): globalThis.Promise<protoreflect.Value> {
		const ls: listReflect | $.VarRef<listReflect> | null = this;
		{
			let [, ok] = $.typeAssertTuple<__goscript_convert.messageConverter | $.VarRef<__goscript_convert.messageConverter> | null>($.pointerValue<listReflect>(ls).conv, /* @__PURE__ */ $.pointerType("impl.messageConverter"))
			if (!ok) {
				$.panic("invalid AppendMutable on list with non-message type")
			}
		}
		let v = await (ls !== null && (ls as any).__isVarRef !== true && (ls as any).__goValue === undefined ? ((ls as any) as listReflect).NewElement() : listReflect.prototype.NewElement.call(ls))
		await (ls !== null && (ls as any).__isVarRef !== true && (ls as any).__goValue === undefined ? ((ls as any) as listReflect).Append(v) : listReflect.prototype.Append.call(ls, v))
		return (v).clone()
	}

	public async Get(i: number): globalThis.Promise<protoreflect.Value> {
		const ls: listReflect | $.VarRef<listReflect> | null = this;
		const ls$: listReflect = ls == null ? $.pointerTarget<listReflect>(ls) : (ls as any).__isVarRef === true ? (ls as any).value : (ls as any).__goValue === undefined ? (ls as any) : $.pointerTarget<listReflect>(ls)
		return (((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>((ls$ as listReflect).conv).PBValueOf($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((ls$ as listReflect).v)).Elem())).Index(i)))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}

	public IsValid(): boolean {
		const ls: listReflect | $.VarRef<listReflect> | null = this;
		return !$.markAsStructValue($.cloneStructValue($.pointerValue<listReflect>(ls).v)).IsNil()
	}

	public Len(): number {
		const ls: listReflect | $.VarRef<listReflect> | null = this;
		const ls$: listReflect = ls == null ? $.pointerTarget<listReflect>(ls) : (ls as any).__isVarRef === true ? (ls as any).value : (ls as any).__goValue === undefined ? (ls as any) : $.pointerTarget<listReflect>(ls)
		if ($.markAsStructValue($.cloneStructValue((ls$ as listReflect).v)).IsNil()) {
			return 0
		}
		return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((ls$ as listReflect).v)).Elem())).Len()
	}

	public async NewElement(): globalThis.Promise<protoreflect.Value> {
		const ls: listReflect | $.VarRef<listReflect> | null = this;
		return (((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>($.pointerValue<listReflect>(ls).conv).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	}

	public async Set(i: number, v: protoreflect.Value): globalThis.Promise<void> {
		const ls: listReflect | $.VarRef<listReflect> | null = this;
		const ls$: listReflect = ls == null ? $.pointerTarget<listReflect>(ls) : (ls as any).__isVarRef === true ? (ls as any).value : (ls as any).__goValue === undefined ? (ls as any) : $.pointerTarget<listReflect>(ls)
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((ls$ as listReflect).v)).Elem())).Index(i))).Set($.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<__goscript_convert.Converter, null>>((ls$ as listReflect).conv).GoValueOf((v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value))))
	}

	public Truncate(i: number): void {
		const ls: listReflect | $.VarRef<listReflect> | null = this;
		const ls$: listReflect = ls == null ? $.pointerTarget<listReflect>(ls) : (ls as any).__isVarRef === true ? (ls as any).value : (ls as any).__goValue === undefined ? (ls as any) : $.pointerTarget<listReflect>(ls)
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((ls$ as listReflect).v)).Elem())).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((ls$ as listReflect).v)).Elem())).Slice(0, i))))
	}

	public protoUnwrap(): any {
		const ls: listReflect | $.VarRef<listReflect> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<listReflect>(ls).v)).Interface()
	}

	static __typeInfo = $.registerStructType(
		"impl.listReflect",
		() => new listReflect(),
		() => [$.methodSignature("Append", [["v", "protoreflect.Value"]], [], true), $.methodSignature("AppendMutable", [], ["protoreflect.Value"], true), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.Value"], true), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("NewElement", [], ["protoreflect.Value"], true), $.methodSignature("Set", [["i", /* @__PURE__ */ $.basicType("int")], ["v", "protoreflect.Value"]], [], true), $.methodSignature("Truncate", [["i", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("protoUnwrap", [], [{ kind: $.TypeKind.Interface, methods: [] }], true)],
		listReflect,
		() => [/* @__PURE__ */ $.structField("v", "reflect.Value", [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("conv", "impl.Converter", [1], 24, false, { pkgPath: "google.golang.org/protobuf/internal/impl" })]
	)
}

export async function newListConverter(t: reflect.Type | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<__goscript_convert.Converter | null> {
	switch ((true as boolean)) {
		case ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23):
		{
			return $.interfaceValue<__goscript_convert.Converter | null>((await (async () => { const __goscriptLiteralField0 = await __goscript_convert.newSingularConverter((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), fd); return new listPtrConverter({goType: t, c: __goscriptLiteralField0}) })()), "*impl.listPtrConverter", /* @__PURE__ */ $.pointerType("impl.listPtrConverter"))
			break
		}
		case (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23:
		{
			return $.interfaceValue<__goscript_convert.Converter | null>((await (async () => { const __goscriptLiteralField1 = await __goscript_convert.newSingularConverter((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), fd); return new listConverter({goType: t, c: __goscriptLiteralField1}) })()), "*impl.listConverter", /* @__PURE__ */ $.pointerType("impl.listConverter"))
			break
		}
	}
	$.panic(await fmt.Sprintf("invalid Go type %v for field %v", (t as any), $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
	throw new globalThis.Error("goscript: unreachable return")
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
