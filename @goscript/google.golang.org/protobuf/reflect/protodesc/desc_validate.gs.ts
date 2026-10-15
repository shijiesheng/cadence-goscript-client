// Generated file based on desc_validate.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strings from "@goscript/strings/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as flags from "@goscript/google.golang.org/protobuf/internal/flags/index.js"

import * as genid from "@goscript/google.golang.org/protobuf/internal/genid/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as descriptorpb from "@goscript/google.golang.org/protobuf/types/descriptorpb/index.js"

import * as __goscript_editions from "./editions.gs.ts"
import "@goscript/strings/index.js"
import "@goscript/unicode/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/internal/flags/index.js"
import "@goscript/google.golang.org/protobuf/internal/genid/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/types/descriptorpb/index.js"
import "./editions.gs.ts"

export async function validateEnumDeclarations(es: $.Slice<filedesc.Enum>, eds: $.Slice<descriptorpb.EnumDescriptorProto | $.VarRef<descriptorpb.EnumDescriptorProto> | null>): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget1 = eds, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow0 = $.sliceRange(es), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let ed = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as descriptorpb.EnumDescriptorProto | $.VarRef<descriptorpb.EnumDescriptorProto> | null)
		let e: filedesc.Enum | $.VarRef<filedesc.Enum> | null = $.indexRef(es!, i)
		let e$: filedesc.Enum = e == null ? $.pointerTarget<filedesc.Enum>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<filedesc.Enum>(e)
		{
			let err = await $.pointerValue<filedesc.EnumL2>((e$ as filedesc.Enum).L2).ReservedNames.CheckValid()
			if (err != null) {
				return errors.New("enum %q reserved names has %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((e$ as filedesc.Enum).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (err as any)]))
			}
		}
		{
			let err = await $.pointerValue<filedesc.EnumL2>((e$ as filedesc.Enum).L2).ReservedRanges.CheckValid()
			if (err != null) {
				return errors.New("enum %q reserved ranges has %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((e$ as filedesc.Enum).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (err as any)]))
			}
		}
		if ($.sliceLen((ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? ((ed as any) as descriptorpb.EnumDescriptorProto).GetValue() : descriptorpb.EnumDescriptorProto.prototype.GetValue.call(ed))) == 0) {
			return errors.New("enum %q must contain at least one value declaration", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((e$ as filedesc.Enum).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
		}
		let allowAlias = descriptorpb.EnumOptions.prototype.GetAllowAlias.call((ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? ((ed as any) as descriptorpb.EnumDescriptorProto).GetOptions() : descriptorpb.EnumDescriptorProto.prototype.GetOptions.call(ed)))
		let foundAlias = false
		for (let __goscriptShadow0 = 0; __goscriptShadow0 < (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as filedesc.Enum).Values() : filedesc.Enum.prototype.Values.call(e)))).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); __goscriptShadow0++) {
			let v1 = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as filedesc.Enum).Values() : filedesc.Enum.prototype.Values.call(e)))).Get(__goscriptShadow0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let v2 = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as filedesc.Enum).Values() : filedesc.Enum.prototype.Values.call(e)))).ByNumber((__goscriptAwait = (v1 !== null && (v1 as any).__isVarRef !== true && (v1 as any).__goValue === undefined ? (v1 as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(v1)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (!$.comparableEqual(v1, v2)) {
					foundAlias = true
					if (!allowAlias) {
						return errors.New("enum %q has conflicting non-aliased values on number %d: %q with %q", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((e$ as filedesc.Enum).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((__goscriptAwait = (v1 !== null && (v1 as any).__isVarRef !== true && (v1 as any).__goValue === undefined ? (v1 as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(v1)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.EnumNumber", {}, /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")), $.namedValueInterfaceValue<any>((__goscriptAwait = (v1 !== null && (v1 as any).__isVarRef !== true && (v1 as any).__goValue === undefined ? (v1 as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(v1)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Name", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), $.namedValueInterfaceValue<any>((__goscriptAwait = (v2 !== null && (v2 as any).__isVarRef !== true && (v2 as any).__goValue === undefined ? (v2 as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(v2)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Name", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))
					}
				}
			}
		}
		if (allowAlias && !foundAlias) {
			return errors.New("enum %q allows aliases, but none were found", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((e$ as filedesc.Enum).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
		}
		if (!(e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as filedesc.Enum).IsClosed() : filedesc.Enum.prototype.IsClosed.call(e))) {
			{
				let v = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as filedesc.Enum).Values() : filedesc.Enum.prototype.Values.call(e)))).Get(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if ((__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(v)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
					return errors.New("enum %q using open semantics must have zero number for the first value", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(v)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
				}
			}
			// Verify that value names in open enums do not conflict if the
			// case-insensitive prefix is removed.
			// See protoc v3.8.0: src/google/protobuf/descriptor.cc:4991-5055
			let names: globalThis.Map<string, protoreflect.EnumValueDescriptor | null> | null = $.makeMap<string, protoreflect.EnumValueDescriptor | null>([])
			let prefix = strings.Replace(strings.ToLower((e$ as filedesc.Enum).Base.Name()), "_", "", -1)
			for (let __goscriptShadow1 = 0; __goscriptShadow1 < (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as filedesc.Enum).Values() : filedesc.Enum.prototype.Values.call(e)))).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); __goscriptShadow1++) {
				let v1 = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as filedesc.Enum).Values() : filedesc.Enum.prototype.Values.call(e)))).Get(__goscriptShadow1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				let s = strs.EnumValueName(strs.TrimEnumPrefix((__goscriptAwait = (v1 !== null && (v1 as any).__isVarRef !== true && (v1 as any).__goValue === undefined ? (v1 as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(v1)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), prefix))
				{
					let [v2, ok] = $.mapGet<string, protoreflect.EnumValueDescriptor | null, protoreflect.EnumValueDescriptor | null>(names, s, null)
					if (ok && ((__goscriptAwait = (v1 !== null && (v1 as any).__isVarRef !== true && (v1 as any).__goValue === undefined ? (v1 as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(v1)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != (__goscriptAwait = (v2 !== null && (v2 as any).__isVarRef !== true && (v2 as any).__goValue === undefined ? (v2 as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(v2)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
						return errors.New("enum %q using open semantics has conflict: %q with %q", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((e$ as filedesc.Enum).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((__goscriptAwait = (v1 !== null && (v1 as any).__isVarRef !== true && (v1 as any).__goValue === undefined ? (v1 as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(v1)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Name", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), $.namedValueInterfaceValue<any>((__goscriptAwait = (v2 !== null && (v2 as any).__isVarRef !== true && (v2 as any).__goValue === undefined ? (v2 as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(v2)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Name", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))
					}
				}
				$.mapSet(names, s, v1)
			}
		}

		for (let __goscriptRangeTarget0 = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? ((ed as any) as descriptorpb.EnumDescriptorProto).GetValue() : descriptorpb.EnumDescriptorProto.prototype.GetValue.call(ed)), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget0), j = 0; j < __goscriptRangeWindow1.length; j++) {
			let vd = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + j] as descriptorpb.EnumValueDescriptorProto | $.VarRef<descriptorpb.EnumValueDescriptorProto> | null)
			let v: filedesc.EnumValue | $.VarRef<filedesc.EnumValue> | null = $.indexRef($.pointerValue<filedesc.EnumL2>((e$ as filedesc.Enum).L2).Values.List!, j)
			if ($.pointerValue<descriptorpb.EnumValueDescriptorProto>(vd).Number == null) {
				return errors.New("enum value %q must have a specified number", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.EnumValue>(v).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
			}
			if (await $.pointerValue<filedesc.EnumL2>((e$ as filedesc.Enum).L2).ReservedNames.Has($.pointerValue<filedesc.EnumValue>(v).Base.Name())) {
				return errors.New("enum value %q must not use reserved name", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.EnumValue>(v).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
			}
			if (await $.pointerValue<filedesc.EnumL2>((e$ as filedesc.Enum).L2).ReservedRanges.Has((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as filedesc.EnumValue).Number() : filedesc.EnumValue.prototype.Number.call(v)))) {
				return errors.New("enum value %q must not use reserved number %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.EnumValue>(v).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as filedesc.EnumValue).Number() : filedesc.EnumValue.prototype.Number.call(v)), "protoreflect.EnumNumber", {}, /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"))]))
			}
		}
	}
	return null
}

export async function validateMessageDeclarations(file: filedesc.File | $.VarRef<filedesc.File> | null, ms: $.Slice<filedesc.Message>, mds: $.Slice<descriptorpb.DescriptorProto | $.VarRef<descriptorpb.DescriptorProto> | null>): globalThis.Promise<$.GoError> {
	// There are a few limited exceptions only for proto3
	let isProto3 = $.pointerValue<filedesc.File>(file).L1.Edition == __goscript_editions.fromEditionProto(999)
	for (let __goscriptRangeTarget4 = mds, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget4), __goscriptSliceWindow1 = $.sliceRange(ms), i = 0; i < __goscriptRangeWindow2.length; i++) {
		let md = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as descriptorpb.DescriptorProto | $.VarRef<descriptorpb.DescriptorProto> | null)
		let m: filedesc.Message | $.VarRef<filedesc.Message> | null = $.indexRef(ms!, i)
		let m$: filedesc.Message = m == null ? $.pointerTarget<filedesc.Message>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<filedesc.Message>(m)

		// Handle the message descriptor itself.
		let isMessageSet = descriptorpb.MessageOptions.prototype.GetMessageSetWireFormat.call((md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetOptions() : descriptorpb.DescriptorProto.prototype.GetOptions.call(md)))
		{
			let err = await $.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).ReservedNames.CheckValid()
			if (err != null) {
				return errors.New("message %q reserved names has %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((m$ as filedesc.Message).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (err as any)]))
			}
		}
		{
			let err = await $.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).ReservedRanges.CheckValid(isMessageSet)
			if (err != null) {
				return errors.New("message %q reserved ranges has %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((m$ as filedesc.Message).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (err as any)]))
			}
		}
		{
			let err = await $.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).ExtensionRanges.CheckValid(isMessageSet)
			if (err != null) {
				return errors.New("message %q extension ranges has %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((m$ as filedesc.Message).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (err as any)]))
			}
		}
		{
			let err = await $.functionValue(async (p: filedesc.FieldRanges | $.VarRef<filedesc.FieldRanges> | null, q: filedesc.FieldRanges | $.VarRef<filedesc.FieldRanges> | null): globalThis.Promise<$.GoError> => await $.pointerValue<filedesc.FieldRanges>(p).CheckOverlap(q), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("filedesc.FieldRanges"), /* @__PURE__ */ $.pointerType("filedesc.FieldRanges")], results: ["error"] } as $.FunctionTypeInfo))($.fieldRef($.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2)._fields, "ReservedRanges"), $.fieldRef($.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2)._fields, "ExtensionRanges"))
			if (err != null) {
				return errors.New("message %q reserved and extension ranges has %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((m$ as filedesc.Message).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (err as any)]))
			}
		}
		for (let __goscriptShadow2 = 0; __goscriptShadow2 < (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as filedesc.Message).Fields() : filedesc.Message.prototype.Fields.call(m)))).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); __goscriptShadow2++) {
			let f1 = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as filedesc.Message).Fields() : filedesc.Message.prototype.Fields.call(m)))).Get(__goscriptShadow2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let f2 = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as filedesc.Message).Fields() : filedesc.Message.prototype.Fields.call(m)))).ByNumber((__goscriptAwait = (f1 !== null && (f1 as any).__isVarRef !== true && (f1 as any).__goValue === undefined ? (f1 as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(f1)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (!$.comparableEqual(f1, f2)) {
					return errors.New("message %q has conflicting fields: %q with %q", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((m$ as filedesc.Message).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((__goscriptAwait = (f1 !== null && (f1 as any).__isVarRef !== true && (f1 as any).__goValue === undefined ? (f1 as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(f1)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Name", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), $.namedValueInterfaceValue<any>((__goscriptAwait = (f2 !== null && (f2 as any).__isVarRef !== true && (f2 as any).__goValue === undefined ? (f2 as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(f2)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Name", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))
				}
			}
		}
		if (isMessageSet && !flags.ProtoLegacy) {
			return errors.New("message %q is a MessageSet, which is a legacy proto1 feature that is no longer supported", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((m$ as filedesc.Message).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
		}
		if (isMessageSet && ((isProto3 || ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as filedesc.Message).Fields() : filedesc.Message.prototype.Fields.call(m)))).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0)) || ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldRanges, null>>((await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as filedesc.Message).ExtensionRanges() : filedesc.Message.prototype.ExtensionRanges.call(m)))).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0))) {
			return errors.New("message %q is an invalid proto1 MessageSet", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((m$ as filedesc.Message).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
		}
		if (isProto3) {
			if ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldRanges, null>>((await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as filedesc.Message).ExtensionRanges() : filedesc.Message.prototype.ExtensionRanges.call(m)))).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0) {
				return errors.New("message %q using proto3 semantics cannot have extension ranges", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((m$ as filedesc.Message).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
			}
		}

		for (let __goscriptRangeTarget2 = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetField() : descriptorpb.DescriptorProto.prototype.GetField.call(md)), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget2), j = 0; j < __goscriptRangeWindow3.length; j++) {
			let fd = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + j] as descriptorpb.FieldDescriptorProto | $.VarRef<descriptorpb.FieldDescriptorProto> | null)
			let f: filedesc.Field | $.VarRef<filedesc.Field> | null = $.indexRef($.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).Fields.List!, j)
			if (await $.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).ReservedNames.Has($.pointerValue<filedesc.Field>(f).Base.Name())) {
				return errors.New("message field %q must not use reserved name", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Field>(f).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
			}
			if (!protowire.Number_IsValid((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Number() : filedesc.Field.prototype.Number.call(f)))) {
				return errors.New("message field %q has an invalid number: %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Field>(f).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Number() : filedesc.Field.prototype.Number.call(f)), "protowire.Number", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic5())]))
			}
			if (!protoreflect.Cardinality_IsValid((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Cardinality() : filedesc.Field.prototype.Cardinality.call(f)))) {
				return errors.New("message field %q has an invalid cardinality: %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Field>(f).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Cardinality() : filedesc.Field.prototype.Cardinality.call(f)), "protoreflect.Cardinality", __goscriptStatic8(), __goscriptStatic9(), __goscriptStatic10())]))
			}
			if (await $.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).ReservedRanges.Has((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Number() : filedesc.Field.prototype.Number.call(f)))) {
				return errors.New("message field %q must not use reserved number %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Field>(f).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Number() : filedesc.Field.prototype.Number.call(f)), "protowire.Number", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic5())]))
			}
			if (await $.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).ExtensionRanges.Has((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Number() : filedesc.Field.prototype.Number.call(f)))) {
				return errors.New("message field %q with number %d in extension range", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Field>(f).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Number() : filedesc.Field.prototype.Number.call(f)), "protowire.Number", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic5())]))
			}
			if ($.pointerValue<descriptorpb.FieldDescriptorProto>(fd).Extendee != null) {
				return errors.New("message field %q may not have extendee: %q", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Field>(f).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FieldDescriptorProto).GetExtendee() : descriptorpb.FieldDescriptorProto.prototype.GetExtendee.call(fd))]))
			}
			if ($.pointerValue<filedesc.Field>(f).L1.IsProto3Optional) {
				if (!isProto3) {
					return errors.New("message field %q under proto3 optional semantics must be specified in the proto3 syntax", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Field>(f).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
				}
				if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Cardinality() : filedesc.Field.prototype.Cardinality.call(f)) != 1) {
					return errors.New("message field %q under proto3 optional semantics must have optional cardinality", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Field>(f).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
				}
				if (((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).ContainingOneof() : filedesc.Field.prototype.ContainingOneof.call(f)) != null) && ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).ContainingOneof() : filedesc.Field.prototype.ContainingOneof.call(f))).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 1)) {
					return errors.New("message field %q under proto3 optional semantics must be within a single element oneof", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Field>(f).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
				}
			}
			if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).IsWeak() : filedesc.Field.prototype.IsWeak.call(f)) && !flags.ProtoLegacy) {
				return errors.New("message field %q is a weak field, which is a legacy proto1 feature that is no longer supported", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Field>(f).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
			}
			if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).IsWeak() : filedesc.Field.prototype.IsWeak.call(f)) && ((!(f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).HasPresence() : filedesc.Field.prototype.HasPresence.call(f)) || !await isOptionalMessage($.interfaceValue<protoreflect.FieldDescriptor | null>(f, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field")))) || ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).ContainingOneof() : filedesc.Field.prototype.ContainingOneof.call(f)) != null))) {
				return errors.New("message field %q may only be weak for an optional message", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Field>(f).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
			}
			if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).IsPacked() : filedesc.Field.prototype.IsPacked.call(f)) && !await isPackable($.interfaceValue<protoreflect.FieldDescriptor | null>(f, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field")))) {
				return errors.New("message field %q is not packable", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Field>(f).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
			}
			{
				let err = await checkValidGroup(file, $.interfaceValue<protoreflect.FieldDescriptor | null>(f, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field")))
				if (err != null) {
					return errors.New("message field %q is an invalid group: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Field>(f).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (err as any)]))
				}
			}
			{
				let err = await checkValidMap($.interfaceValue<protoreflect.FieldDescriptor | null>(f, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field")))
				if (err != null) {
					return errors.New("message field %q is an invalid map: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Field>(f).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (err as any)]))
				}
			}
			if (isProto3) {
				if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Cardinality() : filedesc.Field.prototype.Cardinality.call(f)) == 2) {
					return errors.New("message field %q using proto3 semantics cannot be required", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Field>(f).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
				}
				if ((((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Enum() : filedesc.Field.prototype.Enum.call(f)) != null) && !(__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Enum() : filedesc.Field.prototype.Enum.call(f))).IsPlaceholder(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) && (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Enum() : filedesc.Field.prototype.Enum.call(f))).IsClosed(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					return errors.New("message field %q using proto3 semantics may only depend on open enums", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Field>(f).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
				}
			}
			if ((((((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Cardinality() : filedesc.Field.prototype.Cardinality.call(f)) == 1) && !(f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).HasPresence() : filedesc.Field.prototype.HasPresence.call(f))) && ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Enum() : filedesc.Field.prototype.Enum.call(f)) != null)) && !(__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Enum() : filedesc.Field.prototype.Enum.call(f))).IsPlaceholder(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) && (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Enum() : filedesc.Field.prototype.Enum.call(f))).IsClosed(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return errors.New("message field %q with implicit presence may only use open enums", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Field>(f).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
			}
		}
		let seenSynthetic = false
		for (let __goscriptRangeTarget3 = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetOneofDecl() : descriptorpb.DescriptorProto.prototype.GetOneofDecl.call(md)), __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget3), j = 0; j < __goscriptRangeWindow4.length; j++) {
			let o: filedesc.Oneof | $.VarRef<filedesc.Oneof> | null = $.indexRef($.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).Oneofs.List!, j)
			if ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as filedesc.Oneof).Fields() : filedesc.Oneof.prototype.Fields.call(o))).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
				return errors.New("message oneof %q must contain at least one field declaration", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Oneof>(o).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
			}
			{
				let n = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as filedesc.Oneof).Fields() : filedesc.Oneof.prototype.Fields.call(o))).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if ((n - 1) != ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as filedesc.Oneof).Fields() : filedesc.Oneof.prototype.Fields.call(o))).Get(n - 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Index(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as filedesc.Oneof).Fields() : filedesc.Oneof.prototype.Fields.call(o))).Get(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Index(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
					return errors.New("message oneof %q must have consecutively declared fields", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Oneof>(o).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
				}
			}

			if (await (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as filedesc.Oneof).IsSynthetic() : filedesc.Oneof.prototype.IsSynthetic.call(o))) {
				seenSynthetic = true
				continue
			}
			if (!await (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as filedesc.Oneof).IsSynthetic() : filedesc.Oneof.prototype.IsSynthetic.call(o)) && seenSynthetic) {
				return errors.New("message oneof %q must be declared before synthetic oneofs", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Oneof>(o).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
			}

			for (let __goscriptShadow3 = 0; __goscriptShadow3 < (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as filedesc.Oneof).Fields() : filedesc.Oneof.prototype.Fields.call(o))).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); __goscriptShadow3++) {
				let f = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as filedesc.Oneof).Fields() : filedesc.Oneof.prototype.Fields.call(o))).Get(__goscriptShadow3), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if ((__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(f)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 1) {
					return errors.New("message field %q belongs in a oneof and must be optional", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(f)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
				}
				if ((__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(f)).IsWeak(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					return errors.New("message field %q belongs in a oneof and must not be a weak reference", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(f)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
				}
			}
		}

		{
			let err = await validateEnumDeclarations((m$ as filedesc.Message).L1.Enums.List, (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetEnumType() : descriptorpb.DescriptorProto.prototype.GetEnumType.call(md)))
			if (err != null) {
				return err
			}
		}
		{
			let err = await validateMessageDeclarations(file, (m$ as filedesc.Message).L1.Messages.List, (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetNestedType() : descriptorpb.DescriptorProto.prototype.GetNestedType.call(md)))
			if (err != null) {
				return err
			}
		}
		{
			let err = await validateExtensionDeclarations(file, (m$ as filedesc.Message).L1.Extensions.List, (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetExtension() : descriptorpb.DescriptorProto.prototype.GetExtension.call(md)))
			if (err != null) {
				return err
			}
		}
	}
	return null
}

export async function validateExtensionDeclarations(f: filedesc.File | $.VarRef<filedesc.File> | null, xs: $.Slice<filedesc.Extension>, xds: $.Slice<descriptorpb.FieldDescriptorProto | $.VarRef<descriptorpb.FieldDescriptorProto> | null>): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget5 = xds, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __goscriptSliceWindow2 = $.sliceRange(xs), i = 0; i < __goscriptRangeWindow5.length; i++) {
		let xd = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as descriptorpb.FieldDescriptorProto | $.VarRef<descriptorpb.FieldDescriptorProto> | null)
		let x: filedesc.Extension | $.VarRef<filedesc.Extension> | null = $.indexRef(xs!, i)
		// NOTE: Avoid using the IsValid method since extensions to MessageSet
		// may have a field number higher than normal. This check only verifies
		// that the number is not negative or reserved. We check again later
		// if we know that the extendee is definitely not a MessageSet.
		{
			let n = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as filedesc.Extension).Number() : filedesc.Extension.prototype.Number.call(x))
			if ((n < 0) || ((19000 <= n) && (n <= 19999))) {
				return errors.New("extension field %q has an invalid number: %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Extension>(x).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as filedesc.Extension).Number() : filedesc.Extension.prototype.Number.call(x)), "protowire.Number", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic5())]))
			}
		}
		if (!protoreflect.Cardinality_IsValid((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as filedesc.Extension).Cardinality() : filedesc.Extension.prototype.Cardinality.call(x))) || ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as filedesc.Extension).Cardinality() : filedesc.Extension.prototype.Cardinality.call(x)) == 2)) {
			return errors.New("extension field %q has an invalid cardinality: %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Extension>(x).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as filedesc.Extension).Cardinality() : filedesc.Extension.prototype.Cardinality.call(x)), "protoreflect.Cardinality", __goscriptStatic8(), __goscriptStatic9(), __goscriptStatic10())]))
		}
		if ($.pointerValue<descriptorpb.FieldDescriptorProto>(xd).JsonName != null) {
			// A bug in older versions of protoc would always populate the
			// "json_name" option for extensions when it is meaningless.
			// When it did so, it would always use the camel-cased field name.
			if (!$.stringEqual((xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as descriptorpb.FieldDescriptorProto).GetJsonName() : descriptorpb.FieldDescriptorProto.prototype.GetJsonName.call(xd)), strs.JSONCamelCase($.pointerValue<filedesc.Extension>(x).Base.Name()))) {
				return errors.New("extension field %q may not have an explicitly set JSON name: %q", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Extension>(x).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as descriptorpb.FieldDescriptorProto).GetJsonName() : descriptorpb.FieldDescriptorProto.prototype.GetJsonName.call(xd))]))
			}
		}
		if ($.pointerValue<descriptorpb.FieldDescriptorProto>(xd).OneofIndex != null) {
			return errors.New("extension field %q may not be part of a oneof", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Extension>(x).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
		}
		{
			let md = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as filedesc.Extension).ContainingMessage() : filedesc.Extension.prototype.ContainingMessage.call(x))
			if (!(__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).IsPlaceholder(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				if (!(__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldRanges, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).ExtensionRanges(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Has((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as filedesc.Extension).Number() : filedesc.Extension.prototype.Number.call(x))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					return errors.New("extension field %q extends %q with non-extension field number: %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Extension>(x).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as filedesc.Extension).Number() : filedesc.Extension.prototype.Number.call(x)), "protowire.Number", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic5())]))
				}
				let isMessageSet = descriptorpb.MessageOptions.prototype.GetMessageSetWireFormat.call($.mustTypeAssert<descriptorpb.MessageOptions | $.VarRef<descriptorpb.MessageOptions> | null>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Options(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("descriptorpb.MessageOptions")))
				if (isMessageSet && !await isOptionalMessage($.interfaceValue<protoreflect.FieldDescriptor | null>(x, "*filedesc.Extension", /* @__PURE__ */ $.pointerType("filedesc.Extension")))) {
					return errors.New("extension field %q extends MessageSet and must be an optional message", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Extension>(x).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
				}
				if (!isMessageSet && !protowire.Number_IsValid((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as filedesc.Extension).Number() : filedesc.Extension.prototype.Number.call(x)))) {
					return errors.New("extension field %q has an invalid number: %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Extension>(x).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as filedesc.Extension).Number() : filedesc.Extension.prototype.Number.call(x)), "protowire.Number", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic5())]))
				}
			}
		}
		if (descriptorpb.FieldOptions.prototype.GetWeak.call((xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as descriptorpb.FieldDescriptorProto).GetOptions() : descriptorpb.FieldDescriptorProto.prototype.GetOptions.call(xd)))) {
			return errors.New("extension field %q cannot be a weak reference", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Extension>(x).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
		}
		if ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as filedesc.Extension).IsPacked() : filedesc.Extension.prototype.IsPacked.call(x)) && !await isPackable($.interfaceValue<protoreflect.FieldDescriptor | null>(x, "*filedesc.Extension", /* @__PURE__ */ $.pointerType("filedesc.Extension")))) {
			return errors.New("extension field %q is not packable", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Extension>(x).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
		}
		{
			let err = await checkValidGroup(f, $.interfaceValue<protoreflect.FieldDescriptor | null>(x, "*filedesc.Extension", /* @__PURE__ */ $.pointerType("filedesc.Extension")))
			if (err != null) {
				return errors.New("extension field %q is an invalid group: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Extension>(x).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (err as any)]))
			}
		}
		{
			let md = await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as filedesc.Extension).Message() : filedesc.Extension.prototype.Message.call(x))
			if ((md != null) && (__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).IsMapEntry(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return errors.New("extension field %q cannot be a map entry", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Extension>(x).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
			}
		}
		if ($.pointerValue<filedesc.File>(f).L1.Edition == __goscript_editions.fromEditionProto(999)) {
			switch ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as filedesc.Extension).ContainingMessage() : filedesc.Extension.prototype.ContainingMessage.call(x))).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await (null !== null && (null as any).__isVarRef !== true && (null as any).__goValue === undefined ? ((null as any) as descriptorpb.FileOptions).ProtoReflect() : descriptorpb.FileOptions.prototype.ProtoReflect.call(null)))).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					break
				}
				case (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await (null !== null && (null as any).__isVarRef !== true && (null as any).__goValue === undefined ? ((null as any) as descriptorpb.EnumOptions).ProtoReflect() : descriptorpb.EnumOptions.prototype.ProtoReflect.call(null)))).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					break
				}
				case (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await (null !== null && (null as any).__isVarRef !== true && (null as any).__goValue === undefined ? ((null as any) as descriptorpb.EnumValueOptions).ProtoReflect() : descriptorpb.EnumValueOptions.prototype.ProtoReflect.call(null)))).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					break
				}
				case (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await (null !== null && (null as any).__isVarRef !== true && (null as any).__goValue === undefined ? ((null as any) as descriptorpb.MessageOptions).ProtoReflect() : descriptorpb.MessageOptions.prototype.ProtoReflect.call(null)))).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					break
				}
				case (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await (null !== null && (null as any).__isVarRef !== true && (null as any).__goValue === undefined ? ((null as any) as descriptorpb.FieldOptions).ProtoReflect() : descriptorpb.FieldOptions.prototype.ProtoReflect.call(null)))).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					break
				}
				case (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await (null !== null && (null as any).__isVarRef !== true && (null as any).__goValue === undefined ? ((null as any) as descriptorpb.OneofOptions).ProtoReflect() : descriptorpb.OneofOptions.prototype.ProtoReflect.call(null)))).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					break
				}
				case (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await (null !== null && (null as any).__isVarRef !== true && (null as any).__goValue === undefined ? ((null as any) as descriptorpb.ExtensionRangeOptions).ProtoReflect() : descriptorpb.ExtensionRangeOptions.prototype.ProtoReflect.call(null)))).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					break
				}
				case (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await (null !== null && (null as any).__isVarRef !== true && (null as any).__goValue === undefined ? ((null as any) as descriptorpb.ServiceOptions).ProtoReflect() : descriptorpb.ServiceOptions.prototype.ProtoReflect.call(null)))).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					break
				}
				case (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await (null !== null && (null as any).__isVarRef !== true && (null as any).__goValue === undefined ? ((null as any) as descriptorpb.MethodOptions).ProtoReflect() : descriptorpb.MethodOptions.prototype.ProtoReflect.call(null)))).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					break
				}
				default:
				{
					return errors.New("extension field %q cannot be declared in proto3 unless extended descriptor options", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>($.pointerValue<filedesc.Extension>(x).Base.FullName(), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
					break
				}
			}
		}
	}
	return null
}

export async function isOptionalMessage(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<boolean> {
	return (((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) || ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 11)) && ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 1)
}

export async function isPackable(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<boolean> {
	switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		case protoreflect.StringKind:
		case protoreflect.BytesKind:
		case protoreflect.MessageKind:
		case protoreflect.GroupKind:
		{
			return false
			break
		}
	}
	return (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList()
}

export async function checkValidGroup(f: filedesc.File | $.VarRef<filedesc.File> | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<$.GoError> {
	const f$: filedesc.File = f == null ? $.pointerTarget<filedesc.File>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<filedesc.File>(f)
	let md = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	switch ((true as boolean)) {
		case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 10:
		{
			return null
			break
		}
		case (f$ as filedesc.File).L1.Edition == __goscript_editions.fromEditionProto(999):
		{
			return errors.New("invalid under proto3 semantics", null)
			break
		}
		case (md == null) || (__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).IsPlaceholder(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			return errors.New("message must be resolvable", null)
			break
		}
	}
	if ((f$ as filedesc.File).L1.Edition < __goscript_editions.fromEditionProto(1000)) {
		switch ((true as boolean)) {
			case !$.stringEqual(protoreflect.FullName_Parent((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), protoreflect.FullName_Parent((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))):
			{
				return errors.New("message and field must be declared in the same scope", null)
				break
			}
			case !unicode.IsUpper($.int($.indexString((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 0), 32)):
			{
				return errors.New("message name must start with an uppercase", null)
				break
			}
			case !$.stringEqual((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), strings.ToLower((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))):
			{
				return errors.New("field name must be lowercased form of the message name", null)
				break
			}
		}
	}
	return null
}

export async function checkValidMap(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<$.GoError> {
	let md = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	switch ((true as boolean)) {
		case (md == null) || !(__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).IsMapEntry(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			return null
			break
		}
		case !$.stringEqual(protoreflect.FullName_Parent((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), protoreflect.FullName_Parent((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))):
		{
			return errors.New("message and field must be declared in the same scope", null)
			break
		}
		case !$.stringEqual((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), strs.MapEntryName((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))):
		{
			return errors.New("incorrect implicit map entry name", null)
			break
		}
		case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 3:
		{
			return errors.New("field must be repeated", null)
			break
		}
		case (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 2:
		{
			return errors.New("message must have exactly two fields", null)
			break
		}
		case (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldRanges, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).ExtensionRanges(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0:
		{
			return errors.New("message must not have any extension ranges", null)
			break
		}
		case (((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Enums(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) + (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Messages(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) + (__goscriptAwait = $.pointerValue<Exclude<protoreflect.ExtensionDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Extensions(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) > 0:
		{
			return errors.New("message must not have any nested declarations", null)
			break
		}
	}
	let kf = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let vf = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	switch ((true as boolean)) {
		case ((((!$.stringEqual((__goscriptAwait = (kf !== null && (kf as any).__isVarRef !== true && (kf as any).__goValue === undefined ? (kf as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(kf)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), genid.MapEntry_Key_field_name)) || ((__goscriptAwait = (kf !== null && (kf as any).__isVarRef !== true && (kf as any).__goValue === undefined ? (kf as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(kf)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 1)) || ((__goscriptAwait = (kf !== null && (kf as any).__isVarRef !== true && (kf as any).__goValue === undefined ? (kf as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(kf)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 1)) || ((__goscriptAwait = (kf !== null && (kf as any).__isVarRef !== true && (kf as any).__goValue === undefined ? (kf as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(kf)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null)) || (__goscriptAwait = (kf !== null && (kf as any).__isVarRef !== true && (kf as any).__goValue === undefined ? (kf as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(kf)).HasDefault(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			return errors.New("invalid key field", null)
			break
		}
		case ((((!$.stringEqual((__goscriptAwait = (vf !== null && (vf as any).__isVarRef !== true && (vf as any).__goValue === undefined ? (vf as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(vf)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), genid.MapEntry_Value_field_name)) || ((__goscriptAwait = (vf !== null && (vf as any).__isVarRef !== true && (vf as any).__goValue === undefined ? (vf as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(vf)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 2)) || ((__goscriptAwait = (vf !== null && (vf as any).__isVarRef !== true && (vf as any).__goValue === undefined ? (vf as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(vf)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 1)) || ((__goscriptAwait = (vf !== null && (vf as any).__isVarRef !== true && (vf as any).__goValue === undefined ? (vf as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(vf)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null)) || (__goscriptAwait = (vf !== null && (vf as any).__isVarRef !== true && (vf as any).__goValue === undefined ? (vf as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(vf)).HasDefault(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			return errors.New("invalid value field", null)
			break
		}
	}
	switch ((__goscriptAwait = (kf !== null && (kf as any).__isVarRef !== true && (kf as any).__goValue === undefined ? (kf as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(kf)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		case protoreflect.BoolKind:
		{
			break
		}
		case protoreflect.Int32Kind:
		case protoreflect.Sint32Kind:
		case protoreflect.Sfixed32Kind:
		{
			break
		}
		case protoreflect.Int64Kind:
		case protoreflect.Sint64Kind:
		case protoreflect.Sfixed64Kind:
		{
			break
		}
		case protoreflect.Uint32Kind:
		case protoreflect.Fixed32Kind:
		{
			break
		}
		case protoreflect.Uint64Kind:
		case protoreflect.Fixed64Kind:
		{
			break
		}
		case protoreflect.StringKind:
		{
			break
		}
		default:
		{
			return errors.New("invalid key kind: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (kf !== null && (kf as any).__isVarRef !== true && (kf as any).__goValue === undefined ? (kf as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(kf)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Kind", __goscriptStatic11(), __goscriptStatic12(), __goscriptStatic10())]))
			break
		}
	}
	{
		let e = (__goscriptAwait = (vf !== null && (vf as any).__isVarRef !== true && (vf as any).__goValue === undefined ? (vf as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(vf)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (((e != null) && ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(e)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0)) && ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(e)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
			return errors.New("map enum value must have zero number for the first value", null)
		}
	}
	return null
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

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({IsValid: (receiver: any, ...args: any[]) => (protoreflect.Name_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("string", "protoreflect.Name"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({IsValid: (receiver: any, ...args: any[]) => (protowire.Number_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.basicType("int32", "protowire.Number"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ({GoString: (receiver: any, ...args: any[]) => (protoreflect.Cardinality_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.Cardinality_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (protoreflect.Cardinality_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= (/* @__PURE__ */ $.basicType("int8", "protoreflect.Cardinality"))
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= ([$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ({GoString: (receiver: any, ...args: any[]) => (protoreflect.Kind_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.Kind_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (protoreflect.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= (/* @__PURE__ */ $.basicType("int8", "protoreflect.Kind"))
}

var __goscriptAwait: any
