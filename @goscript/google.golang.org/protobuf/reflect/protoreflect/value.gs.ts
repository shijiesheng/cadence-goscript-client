// Generated file based on value.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as __goscript__type from "./type.gs.ts"

import type * as __goscript_methods from "./methods.gs.ts"

import type * as __goscript_proto from "./proto.gs.ts"

import * as __goscript_source from "./source.gs.ts"

import * as __goscript_source_gen from "./source_gen.gs.ts"

import type * as __goscript_value_equal from "./value_equal.gs.ts"

import * as __goscript_value_pure from "./value_pure.gs.ts"

import type * as __goscript_value_union from "./value_union.gs.ts"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "./type.gs.ts"
import "./source.gs.ts"
import "./source_gen.gs.ts"
import "./value_pure.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/reflect/protoreflect", ["protoreflect.Enum", "protoreflect.Message", "protoreflect.RawFields", "protoreflect.List", "protoreflect.Map"])

export type Enum = {
	Descriptor(): __goscript__type.EnumDescriptor | null | globalThis.Promise<__goscript__type.EnumDescriptor | null>
	Number(): __goscript_proto.EnumNumber
	Type(): __goscript__type.EnumType | null
}

$.registerInterfaceType(
	"protoreflect.Enum",
	null,
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

export type Message = {
	Clear(_p0: __goscript__type.FieldDescriptor | null): void
	Descriptor(): __goscript__type.MessageDescriptor | null | globalThis.Promise<__goscript__type.MessageDescriptor | null>
	Get(_p0: __goscript__type.FieldDescriptor | null): __goscript_value_union.Value | globalThis.Promise<__goscript_value_union.Value>
	GetUnknown(): RawFields | globalThis.Promise<RawFields>
	Has(_p0: __goscript__type.FieldDescriptor | null): boolean | globalThis.Promise<boolean>
	Interface(): __goscript_proto.ProtoMessage | null | globalThis.Promise<__goscript_proto.ProtoMessage | null>
	IsValid(): boolean
	Mutable(_p0: __goscript__type.FieldDescriptor | null): __goscript_value_union.Value | globalThis.Promise<__goscript_value_union.Value>
	New(): Message | null | globalThis.Promise<Message | null>
	NewField(_p0: __goscript__type.FieldDescriptor | null): __goscript_value_union.Value | globalThis.Promise<__goscript_value_union.Value>
	ProtoMethods(): $.VarRef<__goscript_methods.methods> | null | globalThis.Promise<$.VarRef<__goscript_methods.methods> | null>
	Range(f: ((_p0: __goscript__type.FieldDescriptor | null, _p1: __goscript_value_union.Value) => boolean | globalThis.Promise<boolean>) | null): void
	Set(_p0: __goscript__type.FieldDescriptor | null, _p1: __goscript_value_union.Value): void
	SetUnknown(_p0: RawFields): void
	Type(): __goscript__type.MessageType | null | globalThis.Promise<__goscript__type.MessageType | null>
	WhichOneof(_p0: __goscript__type.OneofDescriptor | null): __goscript__type.FieldDescriptor | null | globalThis.Promise<__goscript__type.FieldDescriptor | null>
}

$.registerInterfaceType(
	"protoreflect.Message",
	null,
	[$.methodSignature("Clear", ["protoreflect.FieldDescriptor"]), $.methodSignature("Descriptor", [], ["protoreflect.MessageDescriptor"]), $.methodSignature("Get", ["protoreflect.FieldDescriptor"], ["protoreflect.Value"]), $.methodSignature("GetUnknown", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields")]), $.methodSignature("Has", ["protoreflect.FieldDescriptor"], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Interface", [], ["protoreflect.ProtoMessage"]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Mutable", ["protoreflect.FieldDescriptor"], ["protoreflect.Value"]), $.methodSignature("New", [], ["protoreflect.Message"]), $.methodSignature("NewField", ["protoreflect.FieldDescriptor"], ["protoreflect.Value"]), $.methodSignature("ProtoMethods", [], [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint64"), [1], 0, true), /* @__PURE__ */ $.structField("Size", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("int"), [1], 0, true)] }] } as $.FunctionTypeInfo), [2], 8, true), /* @__PURE__ */ $.structField("Marshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [3], 16, true), /* @__PURE__ */ $.structField("Unmarshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [4], 24, true), /* @__PURE__ */ $.structField("Merge", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Source", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Destination", "protoreflect.Message", [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }] } as $.FunctionTypeInfo), [5], 32, true), /* @__PURE__ */ $.structField("CheckInitialized", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true })] }, "error"] } as $.FunctionTypeInfo), [6], 40, true)] })]), $.methodSignature("Range", [["f", ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]]), $.methodSignature("Set", ["protoreflect.FieldDescriptor", "protoreflect.Value"]), $.methodSignature("SetUnknown", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields")]), $.methodSignature("Type", [], ["protoreflect.MessageType"]), $.methodSignature("WhichOneof", ["protoreflect.OneofDescriptor"], ["protoreflect.FieldDescriptor"])]
);

export type RawFields = $.Slice<number>

$.registerNamedType("protoreflect.RawFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"protoreflect.RawFields",
	{IsValid: (receiver: any, ...args: any[]) => (RawFields_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*protoreflect.RawFields",
	{IsValid: (receiver: any, ...args: any[]) => (RawFields_IsValid as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type List = {
	Append(_p0: __goscript_value_union.Value): void
	AppendMutable(): __goscript_value_union.Value | globalThis.Promise<__goscript_value_union.Value>
	Get(_p0: number): __goscript_value_union.Value | globalThis.Promise<__goscript_value_union.Value>
	IsValid(): boolean
	Len(): number
	NewElement(): __goscript_value_union.Value | globalThis.Promise<__goscript_value_union.Value>
	Set(_p0: number, _p1: __goscript_value_union.Value): void
	Truncate(_p0: number): void
}

$.registerInterfaceType(
	"protoreflect.List",
	null,
	[$.methodSignature("Append", ["protoreflect.Value"]), $.methodSignature("AppendMutable", [], ["protoreflect.Value"]), $.methodSignature("Get", [/* @__PURE__ */ $.basicType("int")], ["protoreflect.Value"]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("NewElement", [], ["protoreflect.Value"]), $.methodSignature("Set", [/* @__PURE__ */ $.basicType("int"), "protoreflect.Value"]), $.methodSignature("Truncate", [/* @__PURE__ */ $.basicType("int")])]
);

export type Map = {
	Clear(_p0: __goscript_value_union.MapKey): void
	Get(_p0: __goscript_value_union.MapKey): __goscript_value_union.Value | globalThis.Promise<__goscript_value_union.Value>
	Has(_p0: __goscript_value_union.MapKey): boolean | globalThis.Promise<boolean>
	IsValid(): boolean
	Len(): number
	Mutable(_p0: __goscript_value_union.MapKey): __goscript_value_union.Value | globalThis.Promise<__goscript_value_union.Value>
	NewValue(): __goscript_value_union.Value | globalThis.Promise<__goscript_value_union.Value>
	Range(f: ((_p0: __goscript_value_union.MapKey, _p1: __goscript_value_union.Value) => boolean | globalThis.Promise<boolean>) | null): void
	Set(_p0: __goscript_value_union.MapKey, _p1: __goscript_value_union.Value): void
}

$.registerInterfaceType(
	"protoreflect.Map",
	null,
	[$.methodSignature("Clear", ["protoreflect.MapKey"]), $.methodSignature("Get", ["protoreflect.MapKey"], ["protoreflect.Value"]), $.methodSignature("Has", ["protoreflect.MapKey"], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Mutable", ["protoreflect.MapKey"], ["protoreflect.Value"]), $.methodSignature("NewValue", [], ["protoreflect.Value"]), $.methodSignature("Range", [["f", ({ kind: $.TypeKind.Function, params: ["protoreflect.MapKey", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]]), $.methodSignature("Set", ["protoreflect.MapKey", "protoreflect.Value"])]
);

export function RawFields_IsValid(b: RawFields): boolean {
	while ($.sliceLen((b as RawFields)) > 0) {
		let [, , n] = protowire.ConsumeField(b)
		if (n < 0) {
			return false
		}
		b = ($.goSlice(b, n, undefined) as RawFields)
	}
	return true
}
