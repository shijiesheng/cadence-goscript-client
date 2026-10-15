// Generated file based on desc_init.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as descriptorpb from "@goscript/google.golang.org/protobuf/types/descriptorpb/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as __goscript_editions from "./editions.gs.ts"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/types/descriptorpb/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "./editions.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/reflect/protodesc", ["protodesc.descsByName"])

export type descsByName = globalThis.Map<protoreflect.FullName, protoreflect.Descriptor | null> | null

$.registerNamedType("protodesc.descsByName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "protoreflect.FullName"), "protoreflect.Descriptor"));

$.registerNamedValueType(
	"protodesc.descsByName",
	{initEnumDeclarations: (receiver: any, ...args: any[]) => (descsByName_initEnumDeclarations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), initEnumValuesFromDescriptorProto: (receiver: any, ...args: any[]) => (descsByName_initEnumValuesFromDescriptorProto as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), initExtensionDeclarations: (receiver: any, ...args: any[]) => (descsByName_initExtensionDeclarations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), initFieldsFromDescriptorProto: (receiver: any, ...args: any[]) => (descsByName_initFieldsFromDescriptorProto as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), initMessagesDeclarations: (receiver: any, ...args: any[]) => (descsByName_initMessagesDeclarations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), initMethodsFromDescriptorProto: (receiver: any, ...args: any[]) => (descsByName_initMethodsFromDescriptorProto as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), initOneofsFromDescriptorProto: (receiver: any, ...args: any[]) => (descsByName_initOneofsFromDescriptorProto as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), initServiceDeclarations: (receiver: any, ...args: any[]) => (descsByName_initServiceDeclarations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), makeBase: (receiver: any, ...args: any[]) => (descsByName_makeBase as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("initEnumDeclarations", [["eds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto"))], ["parent", "protoreflect.Descriptor"], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [["es", /* @__PURE__ */ $.sliceType("filedesc.Enum")], ["err", "error"]]), $.methodSignature("initEnumValuesFromDescriptorProto", [["vds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.EnumValueDescriptorProto"))], ["parent", "protoreflect.Descriptor"], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [["vs", /* @__PURE__ */ $.sliceType("filedesc.EnumValue")], ["err", "error"]]), $.methodSignature("initExtensionDeclarations", [["xds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.FieldDescriptorProto"))], ["parent", "protoreflect.Descriptor"], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [["xs", /* @__PURE__ */ $.sliceType("filedesc.Extension")], ["err", "error"]]), $.methodSignature("initFieldsFromDescriptorProto", [["fds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.FieldDescriptorProto"))], ["parent", "protoreflect.Descriptor"], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [["fs", /* @__PURE__ */ $.sliceType("filedesc.Field")], ["err", "error"]]), $.methodSignature("initMessagesDeclarations", [["mds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto"))], ["parent", "protoreflect.Descriptor"], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [["ms", /* @__PURE__ */ $.sliceType("filedesc.Message")], ["err", "error"]]), $.methodSignature("initMethodsFromDescriptorProto", [["mds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.MethodDescriptorProto"))], ["parent", "protoreflect.Descriptor"], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [["ms", /* @__PURE__ */ $.sliceType("filedesc.Method")], ["err", "error"]]), $.methodSignature("initOneofsFromDescriptorProto", [["ods", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.OneofDescriptorProto"))], ["parent", "protoreflect.Descriptor"], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [["os", /* @__PURE__ */ $.sliceType("filedesc.Oneof")], ["err", "error"]]), $.methodSignature("initServiceDeclarations", [["sds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.ServiceDescriptorProto"))], ["parent", "protoreflect.Descriptor"], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [["ss", /* @__PURE__ */ $.sliceType("filedesc.Service")], ["err", "error"]]), $.methodSignature("makeBase", [["child", "protoreflect.Descriptor"], ["parent", "protoreflect.Descriptor"], ["name", /* @__PURE__ */ $.basicType("string")], ["idx", /* @__PURE__ */ $.basicType("int")], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], ["filedesc.BaseL0", "error"])]
);

$.registerNamedValueType(
	"*protodesc.descsByName",
	{initEnumDeclarations: (receiver: any, ...args: any[]) => (descsByName_initEnumDeclarations as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), initEnumValuesFromDescriptorProto: (receiver: any, ...args: any[]) => (descsByName_initEnumValuesFromDescriptorProto as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), initExtensionDeclarations: (receiver: any, ...args: any[]) => (descsByName_initExtensionDeclarations as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), initFieldsFromDescriptorProto: (receiver: any, ...args: any[]) => (descsByName_initFieldsFromDescriptorProto as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), initMessagesDeclarations: (receiver: any, ...args: any[]) => (descsByName_initMessagesDeclarations as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), initMethodsFromDescriptorProto: (receiver: any, ...args: any[]) => (descsByName_initMethodsFromDescriptorProto as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), initOneofsFromDescriptorProto: (receiver: any, ...args: any[]) => (descsByName_initOneofsFromDescriptorProto as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), initServiceDeclarations: (receiver: any, ...args: any[]) => (descsByName_initServiceDeclarations as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), makeBase: (receiver: any, ...args: any[]) => (descsByName_makeBase as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("initEnumDeclarations", [["eds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto"))], ["parent", "protoreflect.Descriptor"], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [["es", /* @__PURE__ */ $.sliceType("filedesc.Enum")], ["err", "error"]]), $.methodSignature("initEnumValuesFromDescriptorProto", [["vds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.EnumValueDescriptorProto"))], ["parent", "protoreflect.Descriptor"], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [["vs", /* @__PURE__ */ $.sliceType("filedesc.EnumValue")], ["err", "error"]]), $.methodSignature("initExtensionDeclarations", [["xds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.FieldDescriptorProto"))], ["parent", "protoreflect.Descriptor"], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [["xs", /* @__PURE__ */ $.sliceType("filedesc.Extension")], ["err", "error"]]), $.methodSignature("initFieldsFromDescriptorProto", [["fds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.FieldDescriptorProto"))], ["parent", "protoreflect.Descriptor"], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [["fs", /* @__PURE__ */ $.sliceType("filedesc.Field")], ["err", "error"]]), $.methodSignature("initMessagesDeclarations", [["mds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto"))], ["parent", "protoreflect.Descriptor"], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [["ms", /* @__PURE__ */ $.sliceType("filedesc.Message")], ["err", "error"]]), $.methodSignature("initMethodsFromDescriptorProto", [["mds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.MethodDescriptorProto"))], ["parent", "protoreflect.Descriptor"], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [["ms", /* @__PURE__ */ $.sliceType("filedesc.Method")], ["err", "error"]]), $.methodSignature("initOneofsFromDescriptorProto", [["ods", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.OneofDescriptorProto"))], ["parent", "protoreflect.Descriptor"], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [["os", /* @__PURE__ */ $.sliceType("filedesc.Oneof")], ["err", "error"]]), $.methodSignature("initServiceDeclarations", [["sds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.ServiceDescriptorProto"))], ["parent", "protoreflect.Descriptor"], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], [["ss", /* @__PURE__ */ $.sliceType("filedesc.Service")], ["err", "error"]]), $.methodSignature("makeBase", [["child", "protoreflect.Descriptor"], ["parent", "protoreflect.Descriptor"], ["name", /* @__PURE__ */ $.basicType("string")], ["idx", /* @__PURE__ */ $.basicType("int")], ["sb", /* @__PURE__ */ $.pointerType("strs.Builder")]], ["filedesc.BaseL0", "error"])]
);

export async function descsByName_initEnumDeclarations(r: descsByName, eds: $.Slice<descriptorpb.EnumDescriptorProto | $.VarRef<descriptorpb.EnumDescriptorProto> | null>, parent: protoreflect.Descriptor | null, sb: strs.Builder | $.VarRef<strs.Builder> | null): globalThis.Promise<[$.Slice<filedesc.Enum>, $.GoError]> {
	let es: $.Slice<filedesc.Enum> = null! as $.Slice<filedesc.Enum>
	let err: $.GoError = null! as $.GoError
	es = $.makeSlice<filedesc.Enum>($.sliceLen(eds), undefined, undefined, () => new filedesc.Enum(undefined, true))
	for (let __goscriptRangeTarget2 = eds, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow0 = $.sliceRange(es), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let ed = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as descriptorpb.EnumDescriptorProto | $.VarRef<descriptorpb.EnumDescriptorProto> | null)
		let e: filedesc.Enum | $.VarRef<filedesc.Enum> | null = $.indexRef(es!, i)
		let e$: filedesc.Enum = e == null ? $.pointerTarget<filedesc.Enum>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<filedesc.Enum>(e);
		;(e$ as filedesc.Enum).L2 = new filedesc.EnumL2()
		{
			let __goscriptTuple0: any = await descsByName_makeBase(r, $.interfaceValue<protoreflect.Descriptor | null>(e, "*filedesc.Enum", /* @__PURE__ */ $.pointerType("filedesc.Enum")), parent, (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? ((ed as any) as descriptorpb.EnumDescriptorProto).GetName() : descriptorpb.EnumDescriptorProto.prototype.GetName.call(ed)), i, sb)
			$.assignStruct((e$ as filedesc.Enum).Base.L0, __goscriptTuple0[0])
			err = __goscriptTuple0[1]
			if (err != null) {
				return [null, err]
			}
		}
		{
			let opts: descriptorpb.EnumOptions | $.VarRef<descriptorpb.EnumOptions> | null = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? ((ed as any) as descriptorpb.EnumDescriptorProto).GetOptions() : descriptorpb.EnumDescriptorProto.prototype.GetOptions.call(ed))
			if (opts != null) {
				opts = $.mustTypeAssert<descriptorpb.EnumOptions | $.VarRef<descriptorpb.EnumOptions> | null>(await proto.Clone($.interfaceValue<proto.Message | null>(opts, "*descriptorpb.EnumOptions", /* @__PURE__ */ $.pointerType("descriptorpb.EnumOptions"))), /* @__PURE__ */ $.pointerType("descriptorpb.EnumOptions"))
				$.pointerValue<filedesc.EnumL2>((e$ as filedesc.Enum).L2).Options = $.functionValue((): protoreflect.ProtoMessage | null => {
					return $.interfaceValue<protoreflect.ProtoMessage | null>(opts, "*descriptorpb.EnumOptions", /* @__PURE__ */ $.pointerType("descriptorpb.EnumOptions"))
				}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo))
			}
		}
		$.assignStruct((e$ as filedesc.Enum).L1.EditionFeatures, await __goscript_editions.mergeEditionFeatures(parent, descriptorpb.EnumOptions.prototype.GetFeatures.call((ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? ((ed as any) as descriptorpb.EnumDescriptorProto).GetOptions() : descriptorpb.EnumDescriptorProto.prototype.GetOptions.call(ed)))))
		for (let __goscriptRangeTarget0 = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? ((ed as any) as descriptorpb.EnumDescriptorProto).GetReservedName() : descriptorpb.EnumDescriptorProto.prototype.GetReservedName.call(ed)), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let s = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
			$.pointerValue<filedesc.EnumL2>((e$ as filedesc.Enum).L2).ReservedNames.List = $.appendOne($.pointerValue<filedesc.EnumL2>((e$ as filedesc.Enum).L2).ReservedNames.List, s)
		}
		for (let __goscriptRangeTarget1 = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? ((ed as any) as descriptorpb.EnumDescriptorProto).GetReservedRange() : descriptorpb.EnumDescriptorProto.prototype.GetReservedRange.call(ed)), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let rr = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as descriptorpb.EnumDescriptorProto_EnumReservedRange | $.VarRef<descriptorpb.EnumDescriptorProto_EnumReservedRange> | null)
			$.pointerValue<filedesc.EnumL2>((e$ as filedesc.Enum).L2).ReservedRanges.List = $.appendOne($.pointerValue<filedesc.EnumL2>((e$ as filedesc.Enum).L2).ReservedRanges.List, $.arrayValue([$.int((rr !== null && (rr as any).__isVarRef !== true && (rr as any).__goValue === undefined ? ((rr as any) as descriptorpb.EnumDescriptorProto_EnumReservedRange).GetStart() : descriptorpb.EnumDescriptorProto_EnumReservedRange.prototype.GetStart.call(rr)), 32), $.int((rr !== null && (rr as any).__isVarRef !== true && (rr as any).__goValue === undefined ? ((rr as any) as descriptorpb.EnumDescriptorProto_EnumReservedRange).GetEnd() : descriptorpb.EnumDescriptorProto_EnumReservedRange.prototype.GetEnd.call(rr)), 32)]))
		}
		{
			let __goscriptTuple1: any = await descsByName_initEnumValuesFromDescriptorProto(r, (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? ((ed as any) as descriptorpb.EnumDescriptorProto).GetValue() : descriptorpb.EnumDescriptorProto.prototype.GetValue.call(ed)), $.interfaceValue<protoreflect.Descriptor | null>(e, "*filedesc.Enum", /* @__PURE__ */ $.pointerType("filedesc.Enum")), sb)
			$.pointerValue<filedesc.EnumL2>((e$ as filedesc.Enum).L2).Values.List = __goscriptTuple1[0]
			err = __goscriptTuple1[1]
			if (err != null) {
				return [null, err]
			}
		}
	}
	return [es, null]
}

export async function descsByName_initEnumValuesFromDescriptorProto(r: descsByName, vds: $.Slice<descriptorpb.EnumValueDescriptorProto | $.VarRef<descriptorpb.EnumValueDescriptorProto> | null>, parent: protoreflect.Descriptor | null, sb: strs.Builder | $.VarRef<strs.Builder> | null): globalThis.Promise<[$.Slice<filedesc.EnumValue>, $.GoError]> {
	let vs: $.Slice<filedesc.EnumValue> = null! as $.Slice<filedesc.EnumValue>
	let err: $.GoError = null! as $.GoError
	vs = $.makeSlice<filedesc.EnumValue>($.sliceLen(vds), undefined, undefined, () => new filedesc.EnumValue(undefined, true))
	for (let __goscriptRangeTarget3 = vds, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __goscriptSliceWindow1 = $.sliceRange(vs), i = 0; i < __goscriptRangeWindow3.length; i++) {
		let vd = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as descriptorpb.EnumValueDescriptorProto | $.VarRef<descriptorpb.EnumValueDescriptorProto> | null)
		let v: filedesc.EnumValue | $.VarRef<filedesc.EnumValue> | null = $.indexRef(vs!, i)
		let v$: filedesc.EnumValue = v == null ? $.pointerTarget<filedesc.EnumValue>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<filedesc.EnumValue>(v)
		{
			let __goscriptTuple2: any = await descsByName_makeBase(r, $.interfaceValue<protoreflect.Descriptor | null>(v, "*filedesc.EnumValue", /* @__PURE__ */ $.pointerType("filedesc.EnumValue")), parent, (vd !== null && (vd as any).__isVarRef !== true && (vd as any).__goValue === undefined ? ((vd as any) as descriptorpb.EnumValueDescriptorProto).GetName() : descriptorpb.EnumValueDescriptorProto.prototype.GetName.call(vd)), i, sb)
			$.assignStruct((v$ as filedesc.EnumValue).Base.L0, __goscriptTuple2[0])
			err = __goscriptTuple2[1]
			if (err != null) {
				return [null, err]
			}
		}
		{
			let opts: descriptorpb.EnumValueOptions | $.VarRef<descriptorpb.EnumValueOptions> | null = (vd !== null && (vd as any).__isVarRef !== true && (vd as any).__goValue === undefined ? ((vd as any) as descriptorpb.EnumValueDescriptorProto).GetOptions() : descriptorpb.EnumValueDescriptorProto.prototype.GetOptions.call(vd))
			if (opts != null) {
				opts = $.mustTypeAssert<descriptorpb.EnumValueOptions | $.VarRef<descriptorpb.EnumValueOptions> | null>(await proto.Clone($.interfaceValue<proto.Message | null>(opts, "*descriptorpb.EnumValueOptions", /* @__PURE__ */ $.pointerType("descriptorpb.EnumValueOptions"))), /* @__PURE__ */ $.pointerType("descriptorpb.EnumValueOptions"));
				;(v$ as filedesc.EnumValue).L1.Options = $.functionValue((): protoreflect.ProtoMessage | null => {
					return $.interfaceValue<protoreflect.ProtoMessage | null>(opts, "*descriptorpb.EnumValueOptions", /* @__PURE__ */ $.pointerType("descriptorpb.EnumValueOptions"))
				}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo))
			}
		}
		;(v$ as filedesc.EnumValue).L1.Number = $.int((vd !== null && (vd as any).__isVarRef !== true && (vd as any).__goValue === undefined ? ((vd as any) as descriptorpb.EnumValueDescriptorProto).GetNumber() : descriptorpb.EnumValueDescriptorProto.prototype.GetNumber.call(vd)), 32)
	}
	return [vs, null]
}

export async function descsByName_initMessagesDeclarations(r: descsByName, mds: $.Slice<descriptorpb.DescriptorProto | $.VarRef<descriptorpb.DescriptorProto> | null>, parent: protoreflect.Descriptor | null, sb: strs.Builder | $.VarRef<strs.Builder> | null): globalThis.Promise<[$.Slice<filedesc.Message>, $.GoError]> {
	let ms: $.Slice<filedesc.Message> = null! as $.Slice<filedesc.Message>
	let err: $.GoError = null! as $.GoError
	ms = $.makeSlice<filedesc.Message>($.sliceLen(mds), undefined, undefined, () => new filedesc.Message(undefined, true))
	for (let __goscriptRangeTarget7 = mds, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget7), __goscriptSliceWindow2 = $.sliceRange(ms), i = 0; i < __goscriptRangeWindow4.length; i++) {
		let md = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as descriptorpb.DescriptorProto | $.VarRef<descriptorpb.DescriptorProto> | null)
		let m: filedesc.Message | $.VarRef<filedesc.Message> | null = $.indexRef(ms!, i)
		let m$: filedesc.Message = m == null ? $.pointerTarget<filedesc.Message>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<filedesc.Message>(m);
		;(m$ as filedesc.Message).L2 = new filedesc.MessageL2()
		{
			let __goscriptTuple3: any = await descsByName_makeBase(r, $.interfaceValue<protoreflect.Descriptor | null>(m, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message")), parent, (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetName() : descriptorpb.DescriptorProto.prototype.GetName.call(md)), i, sb)
			$.assignStruct((m$ as filedesc.Message).Base.L0, __goscriptTuple3[0])
			err = __goscriptTuple3[1]
			if (err != null) {
				return [null, err]
			}
		}
		$.assignStruct((m$ as filedesc.Message).L1.EditionFeatures, await __goscript_editions.mergeEditionFeatures(parent, descriptorpb.MessageOptions.prototype.GetFeatures.call((md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetOptions() : descriptorpb.DescriptorProto.prototype.GetOptions.call(md)))))
		{
			let opts: descriptorpb.MessageOptions | $.VarRef<descriptorpb.MessageOptions> | null = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetOptions() : descriptorpb.DescriptorProto.prototype.GetOptions.call(md))
			if (opts != null) {
				opts = $.mustTypeAssert<descriptorpb.MessageOptions | $.VarRef<descriptorpb.MessageOptions> | null>(await proto.Clone($.interfaceValue<proto.Message | null>(opts, "*descriptorpb.MessageOptions", /* @__PURE__ */ $.pointerType("descriptorpb.MessageOptions"))), /* @__PURE__ */ $.pointerType("descriptorpb.MessageOptions"))
				$.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).Options = $.functionValue((): protoreflect.ProtoMessage | null => {
					return $.interfaceValue<protoreflect.ProtoMessage | null>(opts, "*descriptorpb.MessageOptions", /* @__PURE__ */ $.pointerType("descriptorpb.MessageOptions"))
				}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo));
				;(m$ as filedesc.Message).L1.IsMapEntry = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? ((opts as any) as descriptorpb.MessageOptions).GetMapEntry() : descriptorpb.MessageOptions.prototype.GetMapEntry.call(opts));
				;(m$ as filedesc.Message).L1.IsMessageSet = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? ((opts as any) as descriptorpb.MessageOptions).GetMessageSetWireFormat() : descriptorpb.MessageOptions.prototype.GetMessageSetWireFormat.call(opts))
			}
		}
		for (let __goscriptRangeTarget4 = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetReservedName() : descriptorpb.DescriptorProto.prototype.GetReservedName.call(md)), __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let s = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as string)
			$.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).ReservedNames.List = $.appendOne($.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).ReservedNames.List, s)
		}
		for (let __goscriptRangeTarget5 = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetReservedRange() : descriptorpb.DescriptorProto.prototype.GetReservedRange.call(md)), __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let rr = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as descriptorpb.DescriptorProto_ReservedRange | $.VarRef<descriptorpb.DescriptorProto_ReservedRange> | null)
			$.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).ReservedRanges.List = $.appendOne($.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).ReservedRanges.List, $.arrayValue([$.int((rr !== null && (rr as any).__isVarRef !== true && (rr as any).__goValue === undefined ? ((rr as any) as descriptorpb.DescriptorProto_ReservedRange).GetStart() : descriptorpb.DescriptorProto_ReservedRange.prototype.GetStart.call(rr)), 32), $.int((rr !== null && (rr as any).__isVarRef !== true && (rr as any).__goValue === undefined ? ((rr as any) as descriptorpb.DescriptorProto_ReservedRange).GetEnd() : descriptorpb.DescriptorProto_ReservedRange.prototype.GetEnd.call(rr)), 32)]))
		}
		for (let __goscriptRangeTarget6 = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetExtensionRange() : descriptorpb.DescriptorProto.prototype.GetExtensionRange.call(md)), __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let xr = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as descriptorpb.DescriptorProto_ExtensionRange | $.VarRef<descriptorpb.DescriptorProto_ExtensionRange> | null)
			$.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).ExtensionRanges.List = $.appendOne($.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).ExtensionRanges.List, $.arrayValue([$.int((xr !== null && (xr as any).__isVarRef !== true && (xr as any).__goValue === undefined ? ((xr as any) as descriptorpb.DescriptorProto_ExtensionRange).GetStart() : descriptorpb.DescriptorProto_ExtensionRange.prototype.GetStart.call(xr)), 32), $.int((xr !== null && (xr as any).__isVarRef !== true && (xr as any).__goValue === undefined ? ((xr as any) as descriptorpb.DescriptorProto_ExtensionRange).GetEnd() : descriptorpb.DescriptorProto_ExtensionRange.prototype.GetEnd.call(xr)), 32)]))
			let optsFunc: (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null = null! as (() => protoreflect.ProtoMessage | null | globalThis.Promise<protoreflect.ProtoMessage | null>) | null
			{
				let opts: descriptorpb.ExtensionRangeOptions | $.VarRef<descriptorpb.ExtensionRangeOptions> | null = (xr !== null && (xr as any).__isVarRef !== true && (xr as any).__goValue === undefined ? ((xr as any) as descriptorpb.DescriptorProto_ExtensionRange).GetOptions() : descriptorpb.DescriptorProto_ExtensionRange.prototype.GetOptions.call(xr))
				if (opts != null) {
					opts = $.mustTypeAssert<descriptorpb.ExtensionRangeOptions | $.VarRef<descriptorpb.ExtensionRangeOptions> | null>(await proto.Clone($.interfaceValue<proto.Message | null>(opts, "*descriptorpb.ExtensionRangeOptions", /* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions"))), /* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions"))
					optsFunc = $.functionValue((): protoreflect.ProtoMessage | null => {
						return $.interfaceValue<protoreflect.ProtoMessage | null>(opts, "*descriptorpb.ExtensionRangeOptions", /* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions"))
					}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo))
				}
			}
			$.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).ExtensionRangeOptions = $.appendOne($.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).ExtensionRangeOptions, optsFunc, $.appendZeros.nil)
		}
		{
			let __goscriptTuple4: any = await descsByName_initFieldsFromDescriptorProto(r, (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetField() : descriptorpb.DescriptorProto.prototype.GetField.call(md)), $.interfaceValue<protoreflect.Descriptor | null>(m, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message")), sb)
			$.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).Fields.List = __goscriptTuple4[0]
			err = __goscriptTuple4[1]
			if (err != null) {
				return [null, err]
			}
		}
		{
			let __goscriptTuple5: any = await descsByName_initOneofsFromDescriptorProto(r, (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetOneofDecl() : descriptorpb.DescriptorProto.prototype.GetOneofDecl.call(md)), $.interfaceValue<protoreflect.Descriptor | null>(m, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message")), sb)
			$.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).Oneofs.List = __goscriptTuple5[0]
			err = __goscriptTuple5[1]
			if (err != null) {
				return [null, err]
			}
		}
		{
			let __goscriptTuple6: any = await descsByName_initEnumDeclarations(r, (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetEnumType() : descriptorpb.DescriptorProto.prototype.GetEnumType.call(md)), $.interfaceValue<protoreflect.Descriptor | null>(m, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message")), sb);
			;(m$ as filedesc.Message).L1.Enums.List = __goscriptTuple6[0]
			err = __goscriptTuple6[1]
			if (err != null) {
				return [null, err]
			}
		}
		{
			let __goscriptTuple7: any = await descsByName_initMessagesDeclarations(r, (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetNestedType() : descriptorpb.DescriptorProto.prototype.GetNestedType.call(md)), $.interfaceValue<protoreflect.Descriptor | null>(m, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message")), sb);
			;(m$ as filedesc.Message).L1.Messages.List = __goscriptTuple7[0]
			err = __goscriptTuple7[1]
			if (err != null) {
				return [null, err]
			}
		}
		{
			let __goscriptTuple8: any = await descsByName_initExtensionDeclarations(r, (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetExtension() : descriptorpb.DescriptorProto.prototype.GetExtension.call(md)), $.interfaceValue<protoreflect.Descriptor | null>(m, "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message")), sb);
			;(m$ as filedesc.Message).L1.Extensions.List = __goscriptTuple8[0]
			err = __goscriptTuple8[1]
			if (err != null) {
				return [null, err]
			}
		}
	}
	return [ms, null]
}

export function canBePacked(fd: descriptorpb.FieldDescriptorProto | $.VarRef<descriptorpb.FieldDescriptorProto> | null): boolean {
	if ((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FieldDescriptorProto).GetLabel() : descriptorpb.FieldDescriptorProto.prototype.GetLabel.call(fd)) != 3) {
		return false
	}

	switch ($.int((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FieldDescriptorProto).GetType() : descriptorpb.FieldDescriptorProto.prototype.GetType.call(fd)), 8)) {
		case protoreflect.MessageKind:
		case protoreflect.GroupKind:
		{
			return false
			break
		}
		case protoreflect.StringKind:
		case protoreflect.BytesKind:
		{
			return false
			break
		}
		default:
		{
			return true
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function descsByName_initFieldsFromDescriptorProto(r: descsByName, fds: $.Slice<descriptorpb.FieldDescriptorProto | $.VarRef<descriptorpb.FieldDescriptorProto> | null>, parent: protoreflect.Descriptor | null, sb: strs.Builder | $.VarRef<strs.Builder> | null): globalThis.Promise<[$.Slice<filedesc.Field>, $.GoError]> {
	let fs: $.Slice<filedesc.Field> = null! as $.Slice<filedesc.Field>
	let err: $.GoError = null! as $.GoError
	fs = $.makeSlice<filedesc.Field>($.sliceLen(fds), undefined, undefined, () => new filedesc.Field(undefined, true))
	for (let __goscriptRangeTarget8 = fds, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __goscriptSliceWindow3 = $.sliceRange(fs), i = 0; i < __goscriptRangeWindow8.length; i++) {
		let fd = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + i] as descriptorpb.FieldDescriptorProto | $.VarRef<descriptorpb.FieldDescriptorProto> | null)
		let f: filedesc.Field | $.VarRef<filedesc.Field> | null = $.indexRef(fs!, i)
		let f$: filedesc.Field = f == null ? $.pointerTarget<filedesc.Field>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<filedesc.Field>(f)
		{
			let __goscriptTuple9: any = await descsByName_makeBase(r, $.interfaceValue<protoreflect.Descriptor | null>(f, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field")), parent, (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FieldDescriptorProto).GetName() : descriptorpb.FieldDescriptorProto.prototype.GetName.call(fd)), i, sb)
			$.assignStruct((f$ as filedesc.Field).Base.L0, __goscriptTuple9[0])
			err = __goscriptTuple9[1]
			if (err != null) {
				return [null, err]
			}
		}
		$.assignStruct((f$ as filedesc.Field).L1.EditionFeatures, await __goscript_editions.mergeEditionFeatures(parent, descriptorpb.FieldOptions.prototype.GetFeatures.call((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FieldDescriptorProto).GetOptions() : descriptorpb.FieldDescriptorProto.prototype.GetOptions.call(fd)))));
		;(f$ as filedesc.Field).L1.IsProto3Optional = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FieldDescriptorProto).GetProto3Optional() : descriptorpb.FieldDescriptorProto.prototype.GetProto3Optional.call(fd))
		{
			let opts: descriptorpb.FieldOptions | $.VarRef<descriptorpb.FieldOptions> | null = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FieldDescriptorProto).GetOptions() : descriptorpb.FieldDescriptorProto.prototype.GetOptions.call(fd))
			if (opts != null) {
				opts = $.mustTypeAssert<descriptorpb.FieldOptions | $.VarRef<descriptorpb.FieldOptions> | null>(await proto.Clone($.interfaceValue<proto.Message | null>(opts, "*descriptorpb.FieldOptions", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions"))), /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions"));
				;(f$ as filedesc.Field).L1.Options = $.functionValue((): protoreflect.ProtoMessage | null => {
					return $.interfaceValue<protoreflect.ProtoMessage | null>(opts, "*descriptorpb.FieldOptions", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions"))
				}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo));
				;(f$ as filedesc.Field).L1.IsWeak = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? ((opts as any) as descriptorpb.FieldOptions).GetWeak() : descriptorpb.FieldOptions.prototype.GetWeak.call(opts))
				if ($.pointerValue<descriptorpb.FieldOptions>(opts).Packed != null) {
					;(f$ as filedesc.Field).L1.EditionFeatures.IsPacked = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? ((opts as any) as descriptorpb.FieldOptions).GetPacked() : descriptorpb.FieldOptions.prototype.GetPacked.call(opts))
				}
			}
		}
		;(f$ as filedesc.Field).L1.Number = $.int((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FieldDescriptorProto).GetNumber() : descriptorpb.FieldDescriptorProto.prototype.GetNumber.call(fd)), 32);
		;(f$ as filedesc.Field).L1.Cardinality = $.int((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FieldDescriptorProto).GetLabel() : descriptorpb.FieldDescriptorProto.prototype.GetLabel.call(fd)), 8)
		if ($.pointerValue<descriptorpb.FieldDescriptorProto>(fd).Type != null) {
			;(f$ as filedesc.Field).L1.Kind = $.int((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FieldDescriptorProto).GetType() : descriptorpb.FieldDescriptorProto.prototype.GetType.call(fd)), 8)
		}
		if ($.pointerValue<descriptorpb.FieldDescriptorProto>(fd).JsonName != null) {
			void (f$ as filedesc.Field).L1.StringName.InitJSON((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FieldDescriptorProto).GetJsonName() : descriptorpb.FieldDescriptorProto.prototype.GetJsonName.call(fd)))
		}

		if ((f$ as filedesc.Field).L1.EditionFeatures.IsLegacyRequired) {
			;(f$ as filedesc.Field).L1.Cardinality = 2
		}

		if (((f$ as filedesc.Field).L1.Kind == 11) && (f$ as filedesc.Field).L1.EditionFeatures.IsDelimitedEncoded) {
			;(f$ as filedesc.Field).L1.Kind = 10
		}
	}
	return [fs, null]
}

export async function descsByName_initOneofsFromDescriptorProto(r: descsByName, ods: $.Slice<descriptorpb.OneofDescriptorProto | $.VarRef<descriptorpb.OneofDescriptorProto> | null>, parent: protoreflect.Descriptor | null, sb: strs.Builder | $.VarRef<strs.Builder> | null): globalThis.Promise<[$.Slice<filedesc.Oneof>, $.GoError]> {
	let os: $.Slice<filedesc.Oneof> = null! as $.Slice<filedesc.Oneof>
	let err: $.GoError = null! as $.GoError
	os = $.makeSlice<filedesc.Oneof>($.sliceLen(ods), undefined, undefined, () => new filedesc.Oneof(undefined, true))
	for (let __goscriptRangeTarget9 = ods, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __goscriptSliceWindow4 = $.sliceRange(os), i = 0; i < __goscriptRangeWindow9.length; i++) {
		let od = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + i] as descriptorpb.OneofDescriptorProto | $.VarRef<descriptorpb.OneofDescriptorProto> | null)
		let o: filedesc.Oneof | $.VarRef<filedesc.Oneof> | null = $.indexRef(os!, i)
		let o$: filedesc.Oneof = o == null ? $.pointerTarget<filedesc.Oneof>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<filedesc.Oneof>(o)
		{
			let __goscriptTuple10: any = await descsByName_makeBase(r, $.interfaceValue<protoreflect.Descriptor | null>(o, "*filedesc.Oneof", /* @__PURE__ */ $.pointerType("filedesc.Oneof")), parent, (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? ((od as any) as descriptorpb.OneofDescriptorProto).GetName() : descriptorpb.OneofDescriptorProto.prototype.GetName.call(od)), i, sb)
			$.assignStruct((o$ as filedesc.Oneof).Base.L0, __goscriptTuple10[0])
			err = __goscriptTuple10[1]
			if (err != null) {
				return [null, err]
			}
		}
		$.assignStruct((o$ as filedesc.Oneof).L1.EditionFeatures, await __goscript_editions.mergeEditionFeatures(parent, descriptorpb.OneofOptions.prototype.GetFeatures.call((od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? ((od as any) as descriptorpb.OneofDescriptorProto).GetOptions() : descriptorpb.OneofDescriptorProto.prototype.GetOptions.call(od)))))
		{
			let opts: descriptorpb.OneofOptions | $.VarRef<descriptorpb.OneofOptions> | null = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? ((od as any) as descriptorpb.OneofDescriptorProto).GetOptions() : descriptorpb.OneofDescriptorProto.prototype.GetOptions.call(od))
			if (opts != null) {
				opts = $.mustTypeAssert<descriptorpb.OneofOptions | $.VarRef<descriptorpb.OneofOptions> | null>(await proto.Clone($.interfaceValue<proto.Message | null>(opts, "*descriptorpb.OneofOptions", /* @__PURE__ */ $.pointerType("descriptorpb.OneofOptions"))), /* @__PURE__ */ $.pointerType("descriptorpb.OneofOptions"));
				;(o$ as filedesc.Oneof).L1.Options = $.functionValue((): protoreflect.ProtoMessage | null => {
					return $.interfaceValue<protoreflect.ProtoMessage | null>(opts, "*descriptorpb.OneofOptions", /* @__PURE__ */ $.pointerType("descriptorpb.OneofOptions"))
				}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo))
			}
		}
	}
	return [os, null]
}

export async function descsByName_initExtensionDeclarations(r: descsByName, xds: $.Slice<descriptorpb.FieldDescriptorProto | $.VarRef<descriptorpb.FieldDescriptorProto> | null>, parent: protoreflect.Descriptor | null, sb: strs.Builder | $.VarRef<strs.Builder> | null): globalThis.Promise<[$.Slice<filedesc.Extension>, $.GoError]> {
	let xs: $.Slice<filedesc.Extension> = null! as $.Slice<filedesc.Extension>
	let err: $.GoError = null! as $.GoError
	xs = $.makeSlice<filedesc.Extension>($.sliceLen(xds), undefined, undefined, () => new filedesc.Extension(undefined, true))
	for (let __goscriptRangeTarget10 = xds, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __goscriptSliceWindow5 = $.sliceRange(xs), i = 0; i < __goscriptRangeWindow10.length; i++) {
		let xd = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + i] as descriptorpb.FieldDescriptorProto | $.VarRef<descriptorpb.FieldDescriptorProto> | null)
		let x: filedesc.Extension | $.VarRef<filedesc.Extension> | null = $.indexRef(xs!, i)
		let x$: filedesc.Extension = x == null ? $.pointerTarget<filedesc.Extension>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<filedesc.Extension>(x);
		;(x$ as filedesc.Extension).L2 = new filedesc.ExtensionL2()
		{
			let __goscriptTuple11: any = await descsByName_makeBase(r, $.interfaceValue<protoreflect.Descriptor | null>(x, "*filedesc.Extension", /* @__PURE__ */ $.pointerType("filedesc.Extension")), parent, (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as descriptorpb.FieldDescriptorProto).GetName() : descriptorpb.FieldDescriptorProto.prototype.GetName.call(xd)), i, sb)
			$.assignStruct((x$ as filedesc.Extension).Base.L0, __goscriptTuple11[0])
			err = __goscriptTuple11[1]
			if (err != null) {
				return [null, err]
			}
		}
		$.assignStruct((x$ as filedesc.Extension).L1.EditionFeatures, await __goscript_editions.mergeEditionFeatures(parent, descriptorpb.FieldOptions.prototype.GetFeatures.call((xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as descriptorpb.FieldDescriptorProto).GetOptions() : descriptorpb.FieldDescriptorProto.prototype.GetOptions.call(xd)))))
		{
			let opts: descriptorpb.FieldOptions | $.VarRef<descriptorpb.FieldOptions> | null = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as descriptorpb.FieldDescriptorProto).GetOptions() : descriptorpb.FieldDescriptorProto.prototype.GetOptions.call(xd))
			if (opts != null) {
				opts = $.mustTypeAssert<descriptorpb.FieldOptions | $.VarRef<descriptorpb.FieldOptions> | null>(await proto.Clone($.interfaceValue<proto.Message | null>(opts, "*descriptorpb.FieldOptions", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions"))), /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions"))
				$.pointerValue<filedesc.ExtensionL2>((x$ as filedesc.Extension).L2).Options = $.functionValue((): protoreflect.ProtoMessage | null => {
					return $.interfaceValue<protoreflect.ProtoMessage | null>(opts, "*descriptorpb.FieldOptions", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions"))
				}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo))
				if ($.pointerValue<descriptorpb.FieldOptions>(opts).Packed != null) {
					;(x$ as filedesc.Extension).L1.EditionFeatures.IsPacked = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? ((opts as any) as descriptorpb.FieldOptions).GetPacked() : descriptorpb.FieldOptions.prototype.GetPacked.call(opts))
				}
			}
		}
		;(x$ as filedesc.Extension).L1.Number = $.int((xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as descriptorpb.FieldDescriptorProto).GetNumber() : descriptorpb.FieldDescriptorProto.prototype.GetNumber.call(xd)), 32);
		;(x$ as filedesc.Extension).L1.Cardinality = $.int((xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as descriptorpb.FieldDescriptorProto).GetLabel() : descriptorpb.FieldDescriptorProto.prototype.GetLabel.call(xd)), 8)
		if ($.pointerValue<descriptorpb.FieldDescriptorProto>(xd).Type != null) {
			;(x$ as filedesc.Extension).L1.Kind = $.int((xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as descriptorpb.FieldDescriptorProto).GetType() : descriptorpb.FieldDescriptorProto.prototype.GetType.call(xd)), 8)
		}
		if ($.pointerValue<descriptorpb.FieldDescriptorProto>(xd).JsonName != null) {
			$.pointerValue<filedesc.ExtensionL2>((x$ as filedesc.Extension).L2).StringName.InitJSON((xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as descriptorpb.FieldDescriptorProto).GetJsonName() : descriptorpb.FieldDescriptorProto.prototype.GetJsonName.call(xd)))
		}
	}
	return [xs, null]
}

export async function descsByName_initServiceDeclarations(r: descsByName, sds: $.Slice<descriptorpb.ServiceDescriptorProto | $.VarRef<descriptorpb.ServiceDescriptorProto> | null>, parent: protoreflect.Descriptor | null, sb: strs.Builder | $.VarRef<strs.Builder> | null): globalThis.Promise<[$.Slice<filedesc.Service>, $.GoError]> {
	let ss: $.Slice<filedesc.Service> = null! as $.Slice<filedesc.Service>
	let err: $.GoError = null! as $.GoError
	ss = $.makeSlice<filedesc.Service>($.sliceLen(sds), undefined, undefined, () => new filedesc.Service(undefined, true))
	for (let __goscriptRangeTarget11 = sds, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __goscriptSliceWindow6 = $.sliceRange(ss), i = 0; i < __goscriptRangeWindow11.length; i++) {
		let sd = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + i] as descriptorpb.ServiceDescriptorProto | $.VarRef<descriptorpb.ServiceDescriptorProto> | null)
		let s: filedesc.Service | $.VarRef<filedesc.Service> | null = $.indexRef(ss!, i)
		let s$: filedesc.Service = s == null ? $.pointerTarget<filedesc.Service>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<filedesc.Service>(s);
		;(s$ as filedesc.Service).L2 = new filedesc.ServiceL2()
		{
			let __goscriptTuple12: any = await descsByName_makeBase(r, $.interfaceValue<protoreflect.Descriptor | null>(s, "*filedesc.Service", /* @__PURE__ */ $.pointerType("filedesc.Service")), parent, (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as descriptorpb.ServiceDescriptorProto).GetName() : descriptorpb.ServiceDescriptorProto.prototype.GetName.call(sd)), i, sb)
			$.assignStruct((s$ as filedesc.Service).Base.L0, __goscriptTuple12[0])
			err = __goscriptTuple12[1]
			if (err != null) {
				return [null, err]
			}
		}
		{
			let opts: descriptorpb.ServiceOptions | $.VarRef<descriptorpb.ServiceOptions> | null = (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as descriptorpb.ServiceDescriptorProto).GetOptions() : descriptorpb.ServiceDescriptorProto.prototype.GetOptions.call(sd))
			if (opts != null) {
				opts = $.mustTypeAssert<descriptorpb.ServiceOptions | $.VarRef<descriptorpb.ServiceOptions> | null>(await proto.Clone($.interfaceValue<proto.Message | null>(opts, "*descriptorpb.ServiceOptions", /* @__PURE__ */ $.pointerType("descriptorpb.ServiceOptions"))), /* @__PURE__ */ $.pointerType("descriptorpb.ServiceOptions"))
				$.pointerValue<filedesc.ServiceL2>((s$ as filedesc.Service).L2).Options = $.functionValue((): protoreflect.ProtoMessage | null => {
					return $.interfaceValue<protoreflect.ProtoMessage | null>(opts, "*descriptorpb.ServiceOptions", /* @__PURE__ */ $.pointerType("descriptorpb.ServiceOptions"))
				}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo))
			}
		}
		{
			let __goscriptTuple13: any = await descsByName_initMethodsFromDescriptorProto(r, (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as descriptorpb.ServiceDescriptorProto).GetMethod() : descriptorpb.ServiceDescriptorProto.prototype.GetMethod.call(sd)), $.interfaceValue<protoreflect.Descriptor | null>(s, "*filedesc.Service", /* @__PURE__ */ $.pointerType("filedesc.Service")), sb)
			$.pointerValue<filedesc.ServiceL2>((s$ as filedesc.Service).L2).Methods.List = __goscriptTuple13[0]
			err = __goscriptTuple13[1]
			if (err != null) {
				return [null, err]
			}
		}
	}
	return [ss, null]
}

export async function descsByName_initMethodsFromDescriptorProto(r: descsByName, mds: $.Slice<descriptorpb.MethodDescriptorProto | $.VarRef<descriptorpb.MethodDescriptorProto> | null>, parent: protoreflect.Descriptor | null, sb: strs.Builder | $.VarRef<strs.Builder> | null): globalThis.Promise<[$.Slice<filedesc.Method>, $.GoError]> {
	let ms: $.Slice<filedesc.Method> = null! as $.Slice<filedesc.Method>
	let err: $.GoError = null! as $.GoError
	ms = $.makeSlice<filedesc.Method>($.sliceLen(mds), undefined, undefined, () => new filedesc.Method(undefined, true))
	for (let __goscriptRangeTarget12 = mds, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __goscriptSliceWindow7 = $.sliceRange(ms), i = 0; i < __goscriptRangeWindow12.length; i++) {
		let md = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + i] as descriptorpb.MethodDescriptorProto | $.VarRef<descriptorpb.MethodDescriptorProto> | null)
		let m: filedesc.Method | $.VarRef<filedesc.Method> | null = $.indexRef(ms!, i)
		let m$: filedesc.Method = m == null ? $.pointerTarget<filedesc.Method>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<filedesc.Method>(m)
		{
			let __goscriptTuple14: any = await descsByName_makeBase(r, $.interfaceValue<protoreflect.Descriptor | null>(m, "*filedesc.Method", /* @__PURE__ */ $.pointerType("filedesc.Method")), parent, (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.MethodDescriptorProto).GetName() : descriptorpb.MethodDescriptorProto.prototype.GetName.call(md)), i, sb)
			$.assignStruct((m$ as filedesc.Method).Base.L0, __goscriptTuple14[0])
			err = __goscriptTuple14[1]
			if (err != null) {
				return [null, err]
			}
		}
		{
			let opts: descriptorpb.MethodOptions | $.VarRef<descriptorpb.MethodOptions> | null = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.MethodDescriptorProto).GetOptions() : descriptorpb.MethodDescriptorProto.prototype.GetOptions.call(md))
			if (opts != null) {
				opts = $.mustTypeAssert<descriptorpb.MethodOptions | $.VarRef<descriptorpb.MethodOptions> | null>(await proto.Clone($.interfaceValue<proto.Message | null>(opts, "*descriptorpb.MethodOptions", /* @__PURE__ */ $.pointerType("descriptorpb.MethodOptions"))), /* @__PURE__ */ $.pointerType("descriptorpb.MethodOptions"));
				;(m$ as filedesc.Method).L1.Options = $.functionValue((): protoreflect.ProtoMessage | null => {
					return $.interfaceValue<protoreflect.ProtoMessage | null>(opts, "*descriptorpb.MethodOptions", /* @__PURE__ */ $.pointerType("descriptorpb.MethodOptions"))
				}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo))
			}
		}
		;(m$ as filedesc.Method).L1.IsStreamingClient = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.MethodDescriptorProto).GetClientStreaming() : descriptorpb.MethodDescriptorProto.prototype.GetClientStreaming.call(md));
		;(m$ as filedesc.Method).L1.IsStreamingServer = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.MethodDescriptorProto).GetServerStreaming() : descriptorpb.MethodDescriptorProto.prototype.GetServerStreaming.call(md))
	}
	return [ms, null]
}

export async function descsByName_makeBase(r: descsByName, child: protoreflect.Descriptor | null, parent: protoreflect.Descriptor | null, name: string, idx: number, sb: strs.Builder | $.VarRef<strs.Builder> | null): globalThis.Promise<[filedesc.BaseL0, $.GoError]> {
	if (!protoreflect.Name_IsValid(name)) {
		return [new filedesc.BaseL0(undefined, true), await errors.New("descriptor %q has an invalid nested name: %q", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (parent !== null && (parent as any).__isVarRef !== true && (parent as any).__goValue === undefined ? (parent as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(parent)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), name]))]
	}

	// Derive the full name of the child.
	// Note that enum values are a sibling to the enum parent in the namespace.
	let fullName: protoreflect.FullName = ""
	{
		let [, ok] = $.typeAssertTuple<protoreflect.EnumDescriptor | null>(parent, "protoreflect.EnumDescriptor")
		if (ok) {
			fullName = strs.Builder.prototype.AppendFullName.call(sb, protoreflect.FullName_Parent((__goscriptAwait = (parent !== null && (parent as any).__isVarRef !== true && (parent as any).__goValue === undefined ? (parent as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(parent)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), name)
		} else {
			fullName = strs.Builder.prototype.AppendFullName.call(sb, (__goscriptAwait = (parent !== null && (parent as any).__isVarRef !== true && (parent as any).__goValue === undefined ? (parent as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(parent)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), name)
		}
	}
	{
		let [, ok] = $.mapGet<protoreflect.FullName, protoreflect.Descriptor | null, protoreflect.Descriptor | null>(r, fullName, null)
		if (ok) {
			return [new filedesc.BaseL0(undefined, true), await errors.New("descriptor %q already declared", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(fullName, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))]
		}
	}
	$.mapSet(r, fullName, child)

	// TODO: Verify that the full name does not already exist in the resolver?
	// This is not as critical since most usages of NewFile will register
	// the created file back into the registry, which will perform this check.

	return [new filedesc.BaseL0({FullName: fullName, ParentFile: $.mustTypeAssert<filedesc.File | $.VarRef<filedesc.File> | null>((__goscriptAwait = (parent !== null && (parent as any).__isVarRef !== true && (parent as any).__goValue === undefined ? (parent as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(parent)).ParentFile(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("filedesc.File")), Parent: parent, Index: idx}, true), null]
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
