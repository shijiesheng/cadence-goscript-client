// Generated file based on any.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as proto from "@goscript/github.com/golang/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as anypb from "@goscript/github.com/golang/protobuf/ptypes/any/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as anypb2 from "@goscript/google.golang.org/protobuf/types/known/anypb/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/golang/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/github.com/golang/protobuf/ptypes/any/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/google.golang.org/protobuf/types/known/anypb/index.js"

$.registerTypePackagePath("github.com/golang/protobuf/ptypes", ["ptypes.DynamicAny", "ptypes.dynamicAny", "ptypes.dynamicAnyType"])

export class DynamicAny {
	public get Message(): proto.Message | null {
		return this._fields.Message
	}

	public set Message(value: proto.Message | null) {
		this._fields.Message = value
	}

	public _fields: {
		Message: proto.Message | null
	}

	constructor(init?: Partial<{Message?: proto.Message | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Message: init?.Message ?? (null! as proto.Message | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DynamicAny {
		return new DynamicAny(this, true)
	}

	public __goscriptAssign(source: DynamicAny): void {
		const target = this._fields
		const values = source._fields
		target.Message = $.assignFieldValue(target.Message, values.Message, "protoiface.MessageV1")
	}

	public ProtoMessage(): void {
		const m = this;
		return
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const m = this;
		if (m.Message == null) {
			return null
		}
		return $.interfaceValue<protoreflect.Message | null>((await (async () => { const __goscriptLiteralField1 = await proto.MessageReflect(m.Message); return new dynamicAny({Message: __goscriptLiteralField1}, true) })()), "ptypes.dynamicAny", "ptypes.dynamicAny")
	}

	public async Reset(): globalThis.Promise<void> {
		const m = this;
		if (m.Message == null) {
			return
		}
		void (__goscriptAwait = $.pointerValue<Exclude<protoiface.MessageV1, null>>(m.Message).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async String(): globalThis.Promise<string> {
		const m = this;
		if (m.Message == null) {
			return "<nil>"
		}
		return $.pointerValue<Exclude<protoiface.MessageV1, null>>(m.Message).String()
	}

	static __typeInfo = $.registerStructType(
		"ptypes.DynamicAny",
		() => new DynamicAny(),
		() => [$.methodSignature("ProtoMessage"), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"]), $.methodSignature("Reset"), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		DynamicAny,
		() => [/* @__PURE__ */ $.structField("Message", "protoiface.MessageV1", [0], 0, true, { anonymous: true })]
	)
}

export class dynamicAny {
	public get Message(): protoreflect.Message | null {
		return this._fields.Message
	}

	public set Message(value: protoreflect.Message | null) {
		this._fields.Message = value
	}

	public _fields: {
		Message: protoreflect.Message | null
	}

	constructor(init?: Partial<{Message?: protoreflect.Message | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Message: init?.Message ?? (null! as protoreflect.Message | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dynamicAny {
		return new dynamicAny(this, true)
	}

	public __goscriptAssign(source: dynamicAny): void {
		const target = this._fields
		const values = source._fields
		target.Message = $.assignFieldValue(target.Message, values.Message, "protoreflect.Message")
	}

	public async Interface(): globalThis.Promise<protoreflect.ProtoMessage | null> {
		const m = this;
		return $.interfaceValue<protoreflect.ProtoMessage | null>((await (async () => { const __goscriptLiteralField2 = await proto.MessageV1(((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>(m.Message).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as proto.GeneratedMessage | null)); return new DynamicAny({Message: __goscriptLiteralField2}, true) })()), "ptypes.DynamicAny", "ptypes.DynamicAny")
	}

	public async New(): globalThis.Promise<protoreflect.Message | null> {
		const m = this;
		return $.markAsStructValue($.cloneStructValue((await (async () => { const __goscriptLiteralField3 = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>(m.Message).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new dynamicAnyType({MessageType: __goscriptLiteralField3}, true) })()))).New()
	}

	public async Type(): globalThis.Promise<protoreflect.MessageType | null> {
		const m = this;
		return $.interfaceValue<protoreflect.MessageType | null>((await (async () => { const __goscriptLiteralField4 = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>(m.Message).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new dynamicAnyType({MessageType: __goscriptLiteralField4}, true) })()), "ptypes.dynamicAnyType", "ptypes.dynamicAnyType")
	}

	public async Clear(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).Clear(_p0)
	}

	public async Descriptor(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).Descriptor()
	}

	public async Get(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).Get(_p0)
	}

	public async GetUnknown(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).GetUnknown()
	}

	public async Has(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).Has(_p0)
	}

	public IsValid(): any {
		return $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).IsValid()
	}

	public async Mutable(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).Mutable(_p0)
	}

	public async NewField(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).NewField(_p0)
	}

	public async ProtoMethods(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).ProtoMethods()
	}

	public async Range(f: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).Range(f)
	}

	public async Set(_p0: any, _p1: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).Set(_p0, _p1)
	}

	public async SetUnknown(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).SetUnknown(_p0)
	}

	public async WhichOneof(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).WhichOneof(_p0)
	}

	static __typeInfo = $.registerStructType(
		"ptypes.dynamicAny",
		() => new dynamicAny(),
		() => [$.methodSignature("Interface", [], ["protoreflect.ProtoMessage"]), $.methodSignature("New", [], ["protoreflect.Message"]), $.methodSignature("Type", [], ["protoreflect.MessageType"]), $.methodSignature("Clear", ["protoreflect.FieldDescriptor"]), $.methodSignature("Descriptor", [], ["protoreflect.MessageDescriptor"]), $.methodSignature("Get", ["protoreflect.FieldDescriptor"], ["protoreflect.Value"]), $.methodSignature("GetUnknown", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields")]), $.methodSignature("Has", ["protoreflect.FieldDescriptor"], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Mutable", ["protoreflect.FieldDescriptor"], ["protoreflect.Value"]), $.methodSignature("NewField", ["protoreflect.FieldDescriptor"], ["protoreflect.Value"]), $.methodSignature("ProtoMethods", [], [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint64"), [1], 0, true), /* @__PURE__ */ $.structField("Size", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("int"), [1], 0, true)] }] } as $.FunctionTypeInfo), [2], 8, true), /* @__PURE__ */ $.structField("Marshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [3], 16, true), /* @__PURE__ */ $.structField("Unmarshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [4], 24, true), /* @__PURE__ */ $.structField("Merge", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Source", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Destination", "protoreflect.Message", [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }] } as $.FunctionTypeInfo), [5], 32, true), /* @__PURE__ */ $.structField("CheckInitialized", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true })] }, "error"] } as $.FunctionTypeInfo), [6], 40, true)] })]), $.methodSignature("Range", [["f", ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]]), $.methodSignature("Set", ["protoreflect.FieldDescriptor", "protoreflect.Value"]), $.methodSignature("SetUnknown", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields")]), $.methodSignature("WhichOneof", ["protoreflect.OneofDescriptor"], ["protoreflect.FieldDescriptor"])],
		dynamicAny,
		() => [/* @__PURE__ */ $.structField("Message", "protoreflect.Message", [0], 0, true, { anonymous: true })]
	)
}

export class dynamicAnyType {
	public get MessageType(): protoreflect.MessageType | null {
		return this._fields.MessageType
	}

	public set MessageType(value: protoreflect.MessageType | null) {
		this._fields.MessageType = value
	}

	public _fields: {
		MessageType: protoreflect.MessageType | null
	}

	constructor(init?: Partial<{MessageType?: protoreflect.MessageType | null}>, __goscriptValue?: boolean) {
		this._fields = {
			MessageType: init?.MessageType ?? (null! as protoreflect.MessageType | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dynamicAnyType {
		return new dynamicAnyType(this, true)
	}

	public __goscriptAssign(source: dynamicAnyType): void {
		const target = this._fields
		const values = source._fields
		target.MessageType = $.assignFieldValue(target.MessageType, values.MessageType, "protoreflect.MessageType")
	}

	public async New(): globalThis.Promise<protoreflect.Message | null> {
		const t = this;
		return $.interfaceValue<protoreflect.Message | null>((await (async () => { const __goscriptLiteralField5 = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageType, null>>(t.MessageType).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new dynamicAny({Message: __goscriptLiteralField5}, true) })()), "ptypes.dynamicAny", "ptypes.dynamicAny")
	}

	public async Zero(): globalThis.Promise<protoreflect.Message | null> {
		const t = this;
		return $.interfaceValue<protoreflect.Message | null>((await (async () => { const __goscriptLiteralField6 = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageType, null>>(t.MessageType).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new dynamicAny({Message: __goscriptLiteralField6}, true) })()), "ptypes.dynamicAny", "ptypes.dynamicAny")
	}

	public async Descriptor(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.MessageType | null, null>>(this.MessageType).Descriptor()
	}

	static __typeInfo = $.registerStructType(
		"ptypes.dynamicAnyType",
		() => new dynamicAnyType(),
		() => [$.methodSignature("New", [], ["protoreflect.Message"]), $.methodSignature("Zero", [], ["protoreflect.Message"]), $.methodSignature("Descriptor", [], ["protoreflect.MessageDescriptor"])],
		dynamicAnyType,
		() => [/* @__PURE__ */ $.structField("MessageType", "protoreflect.MessageType", [0], 0, true, { anonymous: true })]
	)
}

export const urlPrefix: string = "type.googleapis.com/"

export function AnyMessageName(_any: anypb2.Any | $.VarRef<anypb2.Any> | null): [string, $.GoError] {
	let [name, err] = anyMessageName(_any)
	return [name, err]
}

export function anyMessageName(_any: anypb2.Any | $.VarRef<anypb2.Any> | null): [protoreflect.FullName, $.GoError] {
	const _any$: anypb.Any = _any == null ? $.pointerTarget<anypb.Any>(_any) : (_any as any).__isVarRef === true ? (_any as any).value : (_any as any).__goValue === undefined ? (_any as any) : $.pointerTarget<anypb.Any>(_any)
	if (_any == null) {
		return ["", fmt.Errorf("message is nil")]
	}
	let name = (_any$ as anypb.Any).TypeUrl
	{
		let i = strings.LastIndex((_any$ as anypb.Any).TypeUrl, "/")
		if (i >= 0) {
			name = $.sliceStringOrBytes(name, i + 1, undefined)
		}
	}
	if (!protoreflect.FullName_IsValid(name)) {
		return ["", fmt.Errorf("message type url %q is invalid", (_any$ as anypb.Any).TypeUrl)]
	}
	return [name, null]
}

export async function MarshalAny(m: proto.Message | null): globalThis.Promise<[anypb2.Any | $.VarRef<anypb2.Any> | null, $.GoError]> {
	{
		const __goscriptTypeSwitchValue = m
		switch (true) {
			case $.typeAssert<DynamicAny>(__goscriptTypeSwitchValue, "ptypes.DynamicAny").ok:
				{
					let dm: DynamicAny = $.markAsStructValue($.cloneStructValue($.typeAssert<DynamicAny>(__goscriptTypeSwitchValue, "ptypes.DynamicAny").value))
					m = dm.Message
				}
				break
			case $.typeAssert<DynamicAny | $.VarRef<DynamicAny> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ptypes.DynamicAny")).ok:
				{
					let dm: DynamicAny | $.VarRef<DynamicAny> | null = $.typeAssert<DynamicAny | $.VarRef<DynamicAny> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ptypes.DynamicAny")).value
					if (dm == null) {
						return [null, proto.ErrNil]
					}
					m = $.pointerValue<DynamicAny>(dm).Message
				}
				break
		}
	}
	let __goscriptTuple0: any = await proto.Marshal(m)
	let b: $.Slice<number> = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}
	return [(await (async () => { const __goscriptLiteralField0 = $.concatString("type.googleapis.com/", await proto.MessageName(m)); return new anypb2.Any({TypeUrl: __goscriptLiteralField0, Value: b}) })()), null]
}

export async function Empty(_any: anypb2.Any | $.VarRef<anypb2.Any> | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
	let [name, err] = anyMessageName(_any)
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple1: any = await protoregistry.Types.prototype.FindMessageByName.call(protoregistry.GlobalTypes, name)
	let mt = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return [null, err]
	}
	return [await proto.MessageV1(((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(mt)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as proto.GeneratedMessage | null)), null]
}

export async function UnmarshalAny(_any: anypb2.Any | $.VarRef<anypb2.Any> | null, m: proto.Message | null): globalThis.Promise<$.GoError> {
	{
		let __goscriptTuple2: any = $.typeAssertTuple<DynamicAny | $.VarRef<DynamicAny> | null>(m, /* @__PURE__ */ $.pointerType("ptypes.DynamicAny"))
		let dm: DynamicAny | $.VarRef<DynamicAny> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (ok) {
			if ($.pointerValue<DynamicAny>(dm).Message == null) {
				let err: $.GoError = null! as $.GoError
				let __goscriptTuple3: any = await Empty(_any)
				$.pointerValue<DynamicAny>(dm).Message = __goscriptTuple3[0]
				err = __goscriptTuple3[1]
				if (err != null) {
					return err
				}
			}
			m = $.pointerValue<DynamicAny>(dm).Message
		}
	}

	let [anyName, err] = AnyMessageName(_any)
	if (err != null) {
		return err
	}
	let msgName = await proto.MessageName(m)
	if (!$.stringEqual(anyName, msgName)) {
		return fmt.Errorf("mismatched message type: got %q want %q", anyName, msgName)
	}
	return proto.Unmarshal($.pointerValue<anypb.Any>(_any).Value, m)
}

export async function Is(_any: anypb2.Any | $.VarRef<anypb2.Any> | null, m: proto.Message | null): globalThis.Promise<boolean> {
	const _any$: anypb.Any = _any == null ? $.pointerTarget<anypb.Any>(_any) : (_any as any).__isVarRef === true ? (_any as any).value : (_any as any).__goValue === undefined ? (_any as any) : $.pointerTarget<anypb.Any>(_any)
	if ((_any == null) || (m == null)) {
		return false
	}
	let name = await proto.MessageName(m)
	if (!strings.HasSuffix((_any$ as anypb.Any).TypeUrl, name)) {
		return false
	}
	return ($.stringLen((_any$ as anypb.Any).TypeUrl) == $.stringLen(name)) || ($.indexString((_any$ as anypb.Any).TypeUrl, ($.stringLen((_any$ as anypb.Any).TypeUrl) - $.stringLen(name)) - 1) == 47)
}

var __goscriptAwait: any
