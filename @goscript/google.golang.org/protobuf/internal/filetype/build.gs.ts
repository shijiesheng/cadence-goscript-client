// Generated file based on build.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as descopts from "@goscript/google.golang.org/protobuf/internal/descopts/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as pimpl from "@goscript/google.golang.org/protobuf/internal/impl/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/reflect/index.js"
import "@goscript/google.golang.org/protobuf/internal/descopts/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/internal/impl/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/internal/filetype", ["filetype.Builder", "filetype.Out", "filetype.depIdxs", "filetype.resolverByIndex", "filetype.fileRegistry"])

export type depIdxs = $.Slice<number>

$.registerNamedType("filetype.depIdxs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")));

$.registerNamedValueType(
	"filetype.depIdxs",
	{Get: (receiver: any, ...args: any[]) => (depIdxs_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int32")], ["j", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("int32")])]
);

$.registerNamedValueType(
	"*filetype.depIdxs",
	{Get: (receiver: any, ...args: any[]) => (depIdxs_Get as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int32")], ["j", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("int32")])]
);

export type fileRegistry = {
	FindDescriptorByName(_p0: protoreflect.FullName): [protoreflect.Descriptor | null, $.GoError] | globalThis.Promise<[protoreflect.Descriptor | null, $.GoError]>
	FindFileByPath(_p0: string): [protoreflect.FileDescriptor | null, $.GoError] | globalThis.Promise<[protoreflect.FileDescriptor | null, $.GoError]>
	RegisterFile(_p0: protoreflect.FileDescriptor | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"filetype.fileRegistry",
	null,
	[$.methodSignature("FindDescriptorByName", [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["protoreflect.Descriptor", "error"]), $.methodSignature("FindFileByPath", [/* @__PURE__ */ $.basicType("string")], ["protoreflect.FileDescriptor", "error"]), $.methodSignature("RegisterFile", ["protoreflect.FileDescriptor"], ["error"])]
);

export class Builder {
	// File is the underlying file descriptor builder.
	public get File(): filedesc.Builder {
		return this._fields.File
	}

	public set File(value: filedesc.Builder) {
		this._fields.File = value
	}

	// GoTypes is a unique set of the Go types for all declarations and
	// dependencies. Each type is represented as a zero value of the Go type.
	//
	// Declarations are Go types generated for enums and messages directly
	// declared (not publicly imported) in the proto source file.
	// Messages for map entries are accounted for, but represented by nil.
	// Enum declarations in "flattened ordering" come first, followed by
	// message declarations in "flattened ordering".
	//
	// Dependencies are Go types for enums or messages referenced by
	// message fields (excluding weak fields), for parent extended messages of
	// extension fields, for enums or messages referenced by extension fields,
	// and for input and output messages referenced by service methods.
	// Dependencies must come after declarations, but the ordering of
	// dependencies themselves is unspecified.
	public get GoTypes(): $.Slice<any> {
		return this._fields.GoTypes
	}

	public set GoTypes(value: $.Slice<any>) {
		this._fields.GoTypes = value
	}

	// DependencyIndexes is an ordered list of indexes into GoTypes for the
	// dependencies of messages, extensions, or services.
	//
	// There are 5 sub-lists in "flattened ordering" concatenated back-to-back:
	// 	0. Message field dependencies: list of the enum or message type
	// 	referred to by every message field.
	// 	1. Extension field targets: list of the extended parent message of
	// 	every extension.
	// 	2. Extension field dependencies: list of the enum or message type
	// 	referred to by every extension field.
	// 	3. Service method inputs: list of the input message type
	// 	referred to by every service method.
	// 	4. Service method outputs: list of the output message type
	// 	referred to by every service method.
	//
	// The offset into DependencyIndexes for the start of each sub-list
	// is appended to the end in reverse order.
	public get DependencyIndexes(): $.Slice<number> {
		return this._fields.DependencyIndexes
	}

	public set DependencyIndexes(value: $.Slice<number>) {
		this._fields.DependencyIndexes = value
	}

	// EnumInfos is a list of enum infos in "flattened ordering".
	public get EnumInfos(): $.Slice<pimpl.EnumInfo> {
		return this._fields.EnumInfos
	}

	public set EnumInfos(value: $.Slice<pimpl.EnumInfo>) {
		this._fields.EnumInfos = value
	}

	// MessageInfos is a list of message infos in "flattened ordering".
	// If provided, the GoType and PBType for each element is populated.
	//
	// Requirement: len(MessageInfos) == len(Build.Messages)
	public get MessageInfos(): $.Slice<pimpl.MessageInfo> {
		return this._fields.MessageInfos
	}

	public set MessageInfos(value: $.Slice<pimpl.MessageInfo>) {
		this._fields.MessageInfos = value
	}

	// ExtensionInfos is a list of extension infos in "flattened ordering".
	// Each element is initialized and registered with the protoregistry package.
	//
	// Requirement: len(LegacyExtensions) == len(Build.Extensions)
	public get ExtensionInfos(): $.Slice<pimpl.ExtensionInfo> {
		return this._fields.ExtensionInfos
	}

	public set ExtensionInfos(value: $.Slice<pimpl.ExtensionInfo>) {
		this._fields.ExtensionInfos = value
	}

	// TypeRegistry is the registry to register each type descriptor.
	// If nil, it uses protoregistry.GlobalTypes.
	public get TypeRegistry(): any {
		return this._fields.TypeRegistry
	}

	public set TypeRegistry(value: any) {
		this._fields.TypeRegistry = value
	}

	public _fields: {
		File: filedesc.Builder
		GoTypes: $.Slice<any>
		DependencyIndexes: $.Slice<number>
		EnumInfos: $.Slice<pimpl.EnumInfo>
		MessageInfos: $.Slice<pimpl.MessageInfo>
		ExtensionInfos: $.Slice<pimpl.ExtensionInfo>
		TypeRegistry: any
	}

	constructor(init?: Partial<{File?: filedesc.Builder, GoTypes?: $.Slice<any>, DependencyIndexes?: $.Slice<number>, EnumInfos?: $.Slice<pimpl.EnumInfo>, MessageInfos?: $.Slice<pimpl.MessageInfo>, ExtensionInfos?: $.Slice<pimpl.ExtensionInfo>, TypeRegistry?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			File: init?.File ? init.File.clone() : new filedesc.Builder(undefined, true),
			GoTypes: init?.GoTypes ?? (null! as $.Slice<any>),
			DependencyIndexes: init?.DependencyIndexes ?? (null! as $.Slice<number>),
			EnumInfos: init?.EnumInfos ?? (null! as $.Slice<pimpl.EnumInfo>),
			MessageInfos: init?.MessageInfos ?? (null! as $.Slice<pimpl.MessageInfo>),
			ExtensionInfos: init?.ExtensionInfos ?? (null! as $.Slice<pimpl.ExtensionInfo>),
			TypeRegistry: init?.TypeRegistry ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Builder {
		return new Builder(this, true)
	}

	public __goscriptAssign(source: Builder): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.File, values.File)
		target.GoTypes = values.GoTypes
		target.DependencyIndexes = values.DependencyIndexes
		target.EnumInfos = values.EnumInfos
		target.MessageInfos = values.MessageInfos
		target.ExtensionInfos = values.ExtensionInfos
		target.TypeRegistry = $.assignFieldValue(target.TypeRegistry, values.TypeRegistry, { kind: $.TypeKind.Interface, methods: [$.methodSignature("RegisterEnum", ["protoreflect.EnumType"], ["error"]), $.methodSignature("RegisterExtension", ["protoreflect.ExtensionType"], ["error"]), $.methodSignature("RegisterMessage", ["protoreflect.MessageType"], ["error"])] })
	}

	public async Build(): globalThis.Promise<Out> {
		let tb: Builder = this;
		let out: Out = new Out(undefined, true)
		// Replace the resolver with one that resolves dependencies by index,
		// which is faster and more reliable than relying on the global registry.
		if (tb.File.FileRegistry == null) {
			tb.File.FileRegistry = $.interfaceValue(protoregistry.GlobalFiles, "*protoregistry.Files", /* @__PURE__ */ $.pointerType("protoregistry.Files"))
		}
		tb.File.FileRegistry = $.interfaceValue(new resolverByIndex({goTypes: tb.GoTypes, depIdxs: (tb.DependencyIndexes as depIdxs), fileRegistry: (tb.File.FileRegistry as fileRegistry | null)}), "*filetype.resolverByIndex", /* @__PURE__ */ $.pointerType("filetype.resolverByIndex"))

		// Initialize registry if unpopulated.
		if (tb.TypeRegistry == null) {
			tb.TypeRegistry = $.interfaceValue(protoregistry.GlobalTypes, "*protoregistry.Types", /* @__PURE__ */ $.pointerType("protoregistry.Types"))
		}

		let fbOut = await $.markAsStructValue($.cloneStructValue(tb.File)).Build()
		out.File = fbOut.File

		// Process enums.
		let enumGoTypes: $.Slice<any> = $.goSlice(tb.GoTypes, undefined, $.sliceLen(fbOut.Enums))
		if ($.sliceLen(tb.EnumInfos) != $.sliceLen(fbOut.Enums)) {
			$.panic("mismatching enum lengths")
		}
		if ($.sliceLen(fbOut.Enums) > 0) {
			for (let __goscriptRangeTarget0 = fbOut.Enums, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(enumGoTypes), i = 0; i < __goscriptRangeWindow0.length; i++) {
				$.assignStruct($.sliceElems(tb.EnumInfos!)[$.sliceSlot(tb.EnumInfos!, i)], (() => { const __goscriptLiteralField0 = reflect.TypeOf(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as any)); return new pimpl.EnumInfo({GoReflectType: __goscriptLiteralField0, Desc: $.interfaceValue<protoreflect.EnumDescriptor | null>($.indexRef(fbOut.Enums!, i), "*filedesc.Enum", /* @__PURE__ */ $.pointerType("filedesc.Enum"))}, true) })())
				// Register enum types.
				{
					let err = (__goscriptAwait = $.pointerValue<any>(tb.TypeRegistry).RegisterEnum($.interfaceValue<protoreflect.EnumType | null>($.indexRef(tb.EnumInfos!, i), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (err != null) {
						$.panic((err as any))
					}
				}
			}
		}

		// Process messages.
		let messageGoTypes: $.Slice<any> = $.goSlice($.goSlice(tb.GoTypes, $.sliceLen(fbOut.Enums), undefined), undefined, $.sliceLen(fbOut.Messages))
		if ($.sliceLen(tb.MessageInfos) != $.sliceLen(fbOut.Messages)) {
			$.panic("mismatching message lengths")
		}
		if ($.sliceLen(fbOut.Messages) > 0) {
			for (let __goscriptRangeTarget1 = fbOut.Messages, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow1 = $.sliceRange(messageGoTypes), i = 0; i < __goscriptRangeWindow1.length; i++) {
				if (((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as any) == null) {
					continue
				}

				$.arrayIndex(tb.MessageInfos!, i).GoReflectType = reflect.TypeOf(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as any))
				$.arrayIndex(tb.MessageInfos!, i).Desc = $.interfaceValue<protoreflect.MessageDescriptor | null>($.indexRef(fbOut.Messages!, i), "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message"))

				// Register message types.
				{
					let err = (__goscriptAwait = $.pointerValue<any>(tb.TypeRegistry).RegisterMessage($.interfaceValue<protoreflect.MessageType | null>($.indexRef(tb.MessageInfos!, i), "*impl.MessageInfo", /* @__PURE__ */ $.pointerType("impl.MessageInfo"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (err != null) {
						$.panic((err as any))
					}
				}
			}

			// As a special-case for descriptor.proto,
			// locally register concrete message type for the options.
			if (($.stringEqual((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>(out.File).Path(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "google/protobuf/descriptor.proto")) && ($.stringEqual((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>(out.File).Package(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "google.protobuf"))) {
				for (let __goscriptRangeTarget2 = fbOut.Messages, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow2 = $.sliceRange(messageGoTypes), i = 0; i < __goscriptRangeWindow2.length; i++) {
					switch ($.arrayIndex(fbOut.Messages!, i).Base.Name()) {
						case "FileOptions":
						{
							descopts.__goscript_set_File($.mustTypeAssert<protoreflect.ProtoMessage | null>(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as any), "protoreflect.ProtoMessage"))
							break
						}
						case "EnumOptions":
						{
							descopts.__goscript_set_Enum($.mustTypeAssert<protoreflect.ProtoMessage | null>(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as any), "protoreflect.ProtoMessage"))
							break
						}
						case "EnumValueOptions":
						{
							descopts.__goscript_set_EnumValue($.mustTypeAssert<protoreflect.ProtoMessage | null>(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as any), "protoreflect.ProtoMessage"))
							break
						}
						case "MessageOptions":
						{
							descopts.__goscript_set_Message($.mustTypeAssert<protoreflect.ProtoMessage | null>(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as any), "protoreflect.ProtoMessage"))
							break
						}
						case "FieldOptions":
						{
							descopts.__goscript_set_Field($.mustTypeAssert<protoreflect.ProtoMessage | null>(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as any), "protoreflect.ProtoMessage"))
							break
						}
						case "OneofOptions":
						{
							descopts.__goscript_set_Oneof($.mustTypeAssert<protoreflect.ProtoMessage | null>(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as any), "protoreflect.ProtoMessage"))
							break
						}
						case "ExtensionRangeOptions":
						{
							descopts.__goscript_set_ExtensionRange($.mustTypeAssert<protoreflect.ProtoMessage | null>(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as any), "protoreflect.ProtoMessage"))
							break
						}
						case "ServiceOptions":
						{
							descopts.__goscript_set_Service($.mustTypeAssert<protoreflect.ProtoMessage | null>(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as any), "protoreflect.ProtoMessage"))
							break
						}
						case "MethodOptions":
						{
							descopts.__goscript_set_Method($.mustTypeAssert<protoreflect.ProtoMessage | null>(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as any), "protoreflect.ProtoMessage"))
							break
						}
					}
				}
			}
		}

		// Process extensions.
		if ($.sliceLen(tb.ExtensionInfos) != $.sliceLen(fbOut.Extensions)) {
			$.panic("mismatching extension lengths")
		}
		let depIdx: number = 0
		for (let __goscriptRangeTarget3 = fbOut.Extensions, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
			// For enum and message kinds, determine the referent Go type so
			// that we can construct their constructors.
			const listExtDeps: number = 2
			let goType: reflect.Type | null = null! as reflect.Type | null
			switch ($.arrayIndex(fbOut.Extensions!, i).L1.Kind) {
				case protoreflect.EnumKind:
				{
					let j = depIdxs_Get((tb.DependencyIndexes as depIdxs), 2, depIdx)
					goType = reflect.TypeOf($.arrayIndex(tb.GoTypes!, j))
					depIdx = ((depIdx + 1) | 0)
					break
				}
				case protoreflect.MessageKind:
				case protoreflect.GroupKind:
				{
					let j = depIdxs_Get((tb.DependencyIndexes as depIdxs), 2, depIdx)
					goType = reflect.TypeOf($.arrayIndex(tb.GoTypes!, j))
					depIdx = ((depIdx + 1) | 0)
					break
				}
				default:
				{
					goType = $.mapGet<protoreflect.Kind, reflect.Type | null, reflect.Type | null>(goTypeForPBKind, $.arrayIndex(fbOut.Extensions!, i).L1.Kind, null)[0]
					break
				}
			}
			if ($.arrayIndex(fbOut.Extensions!, i).IsList()) {
				goType = reflect.SliceOf($.pointerValueOrNil(goType)!)
			}

			pimpl.InitExtensionInfo($.indexRef(tb.ExtensionInfos!, i), $.interfaceValue<protoreflect.ExtensionDescriptor | null>($.indexRef(fbOut.Extensions!, i), "*filedesc.Extension", /* @__PURE__ */ $.pointerType("filedesc.Extension")), goType)

			// Register extension types.
			{
				let err = (__goscriptAwait = $.pointerValue<any>(tb.TypeRegistry).RegisterExtension($.interfaceValue<protoreflect.ExtensionType | null>($.indexRef(tb.ExtensionInfos!, i), "*impl.ExtensionInfo", /* @__PURE__ */ $.pointerType("impl.ExtensionInfo"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					$.panic((err as any))
				}
			}
		}

		return (out).clone()
	}

	static __typeInfo = $.registerStructType(
		"filetype.Builder",
		() => new Builder(),
		() => [$.methodSignature("Build", [], [["out", "filetype.Out"]])],
		Builder,
		() => [/* @__PURE__ */ $.structField("File", "filedesc.Builder", [0], 0, true), /* @__PURE__ */ $.structField("GoTypes", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [1], 88, true), /* @__PURE__ */ $.structField("DependencyIndexes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), [2], 112, true), /* @__PURE__ */ $.structField("EnumInfos", /* @__PURE__ */ $.sliceType("impl.EnumInfo"), [3], 136, true), /* @__PURE__ */ $.structField("MessageInfos", /* @__PURE__ */ $.sliceType("impl.MessageInfo"), [4], 160, true), /* @__PURE__ */ $.structField("ExtensionInfos", /* @__PURE__ */ $.sliceType("impl.ExtensionInfo"), [5], 184, true), /* @__PURE__ */ $.structField("TypeRegistry", { kind: $.TypeKind.Interface, methods: [$.methodSignature("RegisterEnum", ["protoreflect.EnumType"], ["error"]), $.methodSignature("RegisterExtension", ["protoreflect.ExtensionType"], ["error"]), $.methodSignature("RegisterMessage", ["protoreflect.MessageType"], ["error"])] }, [6], 208, true)]
	)
}

export class Out {
	public get File(): protoreflect.FileDescriptor | null {
		return this._fields.File
	}

	public set File(value: protoreflect.FileDescriptor | null) {
		this._fields.File = value
	}

	public _fields: {
		File: protoreflect.FileDescriptor | null
	}

	constructor(init?: Partial<{File?: protoreflect.FileDescriptor | null}>, __goscriptValue?: boolean) {
		this._fields = {
			File: init?.File ?? (null! as protoreflect.FileDescriptor | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Out {
		return new Out(this, true)
	}

	public __goscriptAssign(source: Out): void {
		const target = this._fields
		const values = source._fields
		target.File = $.assignFieldValue(target.File, values.File, "protoreflect.FileDescriptor")
	}

	static __typeInfo = $.registerStructType(
		"filetype.Out",
		() => new Out(),
		() => [],
		Out,
		() => [/* @__PURE__ */ $.structField("File", "protoreflect.FileDescriptor", [0], 0, true)]
	)
}

export class resolverByIndex {
	public get goTypes(): $.Slice<any> {
		return this._fields.goTypes
	}

	public set goTypes(value: $.Slice<any>) {
		this._fields.goTypes = value
	}

	public get depIdxs(): depIdxs {
		return this._fields.depIdxs
	}

	public set depIdxs(value: depIdxs) {
		this._fields.depIdxs = value
	}

	public get fileRegistry(): fileRegistry | null {
		return this._fields.fileRegistry
	}

	public set fileRegistry(value: fileRegistry | null) {
		this._fields.fileRegistry = value
	}

	public _fields: {
		goTypes: $.Slice<any>
		depIdxs: depIdxs
		fileRegistry: fileRegistry | null
	}

	constructor(init?: Partial<{goTypes?: $.Slice<any>, depIdxs?: depIdxs, fileRegistry?: fileRegistry | null}>, __goscriptValue?: boolean) {
		this._fields = {
			goTypes: init?.goTypes ?? (null! as $.Slice<any>),
			depIdxs: init?.depIdxs ?? (null! as depIdxs),
			fileRegistry: init?.fileRegistry ?? (null! as fileRegistry | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): resolverByIndex {
		return new resolverByIndex(this, true)
	}

	public __goscriptAssign(source: resolverByIndex): void {
		const target = this._fields
		const values = source._fields
		target.goTypes = values.goTypes
		target.depIdxs = values.depIdxs
		target.fileRegistry = $.assignFieldValue(target.fileRegistry, values.fileRegistry, "filetype.fileRegistry")
	}

	public async FindEnumByIndex(i: number, j: number, es: $.Slice<filedesc.Enum>, ms: $.Slice<filedesc.Message>): globalThis.Promise<protoreflect.EnumDescriptor | null> {
		const r: resolverByIndex | $.VarRef<resolverByIndex> | null = this;
		const r$: resolverByIndex = r == null ? $.pointerTarget<resolverByIndex>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<resolverByIndex>(r)
		{
			let depIdx = $.int(depIdxs_Get((r$ as resolverByIndex).depIdxs, i, j))
			if ($.int(depIdx) < ($.sliceLen(es) + $.sliceLen(ms))) {
				return $.interfaceValue<protoreflect.EnumDescriptor | null>($.indexRef(es!, depIdx), "*filedesc.Enum", /* @__PURE__ */ $.pointerType("filedesc.Enum"))
			} else {
				return $.markAsStructValue($.cloneStructValue(new pimpl.Export(undefined, true))).EnumDescriptorOf($.arrayIndex((r$ as resolverByIndex).goTypes!, depIdx))
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async FindMessageByIndex(i: number, j: number, es: $.Slice<filedesc.Enum>, ms: $.Slice<filedesc.Message>): globalThis.Promise<protoreflect.MessageDescriptor | null> {
		const r: resolverByIndex | $.VarRef<resolverByIndex> | null = this;
		const r$: resolverByIndex = r == null ? $.pointerTarget<resolverByIndex>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<resolverByIndex>(r)
		{
			let depIdx = $.int(depIdxs_Get((r$ as resolverByIndex).depIdxs, i, j))
			if (depIdx < ($.sliceLen(es) + $.sliceLen(ms))) {
				return $.interfaceValue<protoreflect.MessageDescriptor | null>($.indexRef(ms!, depIdx - $.sliceLen(es)), "*filedesc.Message", /* @__PURE__ */ $.pointerType("filedesc.Message"))
			} else {
				return $.markAsStructValue($.cloneStructValue(new pimpl.Export(undefined, true))).MessageDescriptorOf($.arrayIndex((r$ as resolverByIndex).goTypes!, depIdx))
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async FindDescriptorByName(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<fileRegistry | null, null>>(this.fileRegistry).FindDescriptorByName(_p0)
	}

	public async FindFileByPath(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<fileRegistry | null, null>>(this.fileRegistry).FindFileByPath(_p0)
	}

	public async RegisterFile(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<fileRegistry | null, null>>(this.fileRegistry).RegisterFile(_p0)
	}

	static __typeInfo = $.registerStructType(
		"filetype.resolverByIndex",
		() => new resolverByIndex(),
		() => [$.methodSignature("FindEnumByIndex", [["i", /* @__PURE__ */ $.basicType("int32")], ["j", /* @__PURE__ */ $.basicType("int32")], ["es", /* @__PURE__ */ $.sliceType("filedesc.Enum")], ["ms", /* @__PURE__ */ $.sliceType("filedesc.Message")]], ["protoreflect.EnumDescriptor"], true), $.methodSignature("FindMessageByIndex", [["i", /* @__PURE__ */ $.basicType("int32")], ["j", /* @__PURE__ */ $.basicType("int32")], ["es", /* @__PURE__ */ $.sliceType("filedesc.Enum")], ["ms", /* @__PURE__ */ $.sliceType("filedesc.Message")]], ["protoreflect.MessageDescriptor"], true), $.methodSignature("FindDescriptorByName", [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["protoreflect.Descriptor", "error"]), $.methodSignature("FindFileByPath", [/* @__PURE__ */ $.basicType("string")], ["protoreflect.FileDescriptor", "error"]), $.methodSignature("RegisterFile", ["protoreflect.FileDescriptor"], ["error"])],
		resolverByIndex,
		() => [/* @__PURE__ */ $.structField("goTypes", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/filetype" }), /* @__PURE__ */ $.structField("depIdxs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"), "filetype.depIdxs"), [1], 24, false, { pkgPath: "google.golang.org/protobuf/internal/filetype" }), /* @__PURE__ */ $.structField("fileRegistry", "filetype.fileRegistry", [2], 48, false, { pkgPath: "google.golang.org/protobuf/internal/filetype", anonymous: true })]
	)
}

export let goTypeForPBKind: globalThis.Map<protoreflect.Kind, reflect.Type | null> | null = $.makeMap<protoreflect.Kind, reflect.Type | null>([[8, reflect.TypeOf(false)], [5, reflect.TypeOf($.basicInterfaceValue($.int(0, 32), "int32"))], [17, reflect.TypeOf($.basicInterfaceValue($.int(0, 32), "int32"))], [15, reflect.TypeOf($.basicInterfaceValue($.int(0, 32), "int32"))], [3, reflect.TypeOf($.basicInterfaceValue(0n, "int64"))], [18, reflect.TypeOf($.basicInterfaceValue(0n, "int64"))], [16, reflect.TypeOf($.basicInterfaceValue(0n, "int64"))], [13, reflect.TypeOf($.basicInterfaceValue($.uint(0, 32), "uint32"))], [7, reflect.TypeOf($.basicInterfaceValue($.uint(0, 32), "uint32"))], [4, reflect.TypeOf($.basicInterfaceValue(0n, "uint64"))], [6, reflect.TypeOf($.basicInterfaceValue(0n, "uint64"))], [2, reflect.TypeOf($.basicInterfaceValue(0, "float32"))], [1, reflect.TypeOf($.basicInterfaceValue(0, "float64"))], [9, reflect.TypeOf("")], [12, reflect.TypeOf($.interfaceValue(null, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))]])

export function __goscript_set_goTypeForPBKind(__goscriptValue: globalThis.Map<protoreflect.Kind, reflect.Type | null> | null): void {
	goTypeForPBKind = __goscriptValue
}

export function depIdxs_Get(x: depIdxs, i: number, j: number): number {
	return $.arrayIndex(x!, (($.arrayIndex(x!, ((((($.int($.sliceLen((x as depIdxs)), 32) - i) | 0)) - 1) | 0)) + j) | 0))
}

var __goscriptAwait: any
