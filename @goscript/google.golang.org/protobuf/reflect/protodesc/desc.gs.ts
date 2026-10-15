// Generated file based on desc.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as editionssupport from "@goscript/google.golang.org/protobuf/internal/editionssupport/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as descriptorpb from "@goscript/google.golang.org/protobuf/types/descriptorpb/index.js"

import * as __goscript_desc_init from "./desc_init.gs.ts"

import * as __goscript_desc_resolve from "./desc_resolve.gs.ts"

import * as __goscript_desc_validate from "./desc_validate.gs.ts"

import * as __goscript_editions from "./editions.gs.ts"
import "@goscript/google.golang.org/protobuf/internal/editionssupport/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/google.golang.org/protobuf/types/descriptorpb/index.js"
import "./desc_init.gs.ts"
import "./desc_resolve.gs.ts"
import "./desc_validate.gs.ts"
import "./editions.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/reflect/protodesc", ["protodesc.Resolver", "protodesc.FileOptions", "protodesc.importSet"])

export type Resolver = {
	FindDescriptorByName(_p0: protoreflect.FullName): [protoreflect.Descriptor | null, $.GoError] | globalThis.Promise<[protoreflect.Descriptor | null, $.GoError]>
	FindFileByPath(_p0: string): [protoreflect.FileDescriptor | null, $.GoError] | globalThis.Promise<[protoreflect.FileDescriptor | null, $.GoError]>
}

$.registerInterfaceType(
	"protodesc.Resolver",
	null,
	[$.methodSignature("FindDescriptorByName", [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["protoreflect.Descriptor", "error"]), $.methodSignature("FindFileByPath", [/* @__PURE__ */ $.basicType("string")], ["protoreflect.FileDescriptor", "error"])]
);

export type importSet = globalThis.Map<string, boolean> | null

$.registerNamedType("protodesc.importSet", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool")));

$.registerNamedValueType(
	"protodesc.importSet",
	{importPublic: (receiver: any, ...args: any[]) => (importSet_importPublic as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("importPublic", [["imps", "protoreflect.FileImports"]])]
);

$.registerNamedValueType(
	"*protodesc.importSet",
	{importPublic: (receiver: any, ...args: any[]) => (importSet_importPublic as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("importPublic", [["imps", "protoreflect.FileImports"]])]
);

export class FileOptions {
	public get NoUnkeyedLiterals(): pragma.NoUnkeyedLiterals {
		return this._fields.NoUnkeyedLiterals
	}

	public set NoUnkeyedLiterals(value: pragma.NoUnkeyedLiterals) {
		this._fields.NoUnkeyedLiterals = value
	}

	// AllowUnresolvable configures New to permissively allow unresolvable
	// file, enum, or message dependencies. Unresolved dependencies are replaced
	// by placeholder equivalents.
	//
	// The following dependencies may be left unresolved:
	// 	• Resolving an imported file.
	// 	• Resolving the type for a message field or extension field.
	// 	If the kind of the field is unknown, then a placeholder is used for both
	// 	the Enum and Message accessors on the protoreflect.FieldDescriptor.
	// 	• Resolving an enum value set as the default for an optional enum field.
	// 	If unresolvable, the protoreflect.FieldDescriptor.Default is set to the
	// 	first value in the associated enum (or zero if the also enum dependency
	// 	is also unresolvable). The protoreflect.FieldDescriptor.DefaultEnumValue
	// 	is populated with a placeholder.
	// 	• Resolving the extended message type for an extension field.
	// 	• Resolving the input or output message type for a service method.
	//
	// If the unresolved dependency uses a relative name,
	// then the placeholder will contain an invalid FullName with a "*." prefix,
	// indicating that the starting prefix of the full name is unknown.
	public get AllowUnresolvable(): boolean {
		return this._fields.AllowUnresolvable
	}

	public set AllowUnresolvable(value: boolean) {
		this._fields.AllowUnresolvable = value
	}

	public _fields: {
		NoUnkeyedLiterals: pragma.NoUnkeyedLiterals
		AllowUnresolvable: boolean
	}

	constructor(init?: Partial<{NoUnkeyedLiterals?: pragma.NoUnkeyedLiterals, AllowUnresolvable?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			NoUnkeyedLiterals: init?.NoUnkeyedLiterals ? init.NoUnkeyedLiterals.clone() : new pragma.NoUnkeyedLiterals(undefined, true),
			AllowUnresolvable: init?.AllowUnresolvable ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FileOptions {
		return new FileOptions(this, true)
	}

	public __goscriptAssign(source: FileOptions): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.NoUnkeyedLiterals, values.NoUnkeyedLiterals)
		target.AllowUnresolvable = values.AllowUnresolvable
	}

	public async New(fd: descriptorpb.FileDescriptorProto | $.VarRef<descriptorpb.FileDescriptorProto> | null, r: Resolver | null): globalThis.Promise<[protoreflect.FileDescriptor | null, $.GoError]> {
		const o = this;
		if (r == null) {
			r = $.interfaceValue<Resolver | null>(null, "*protoregistry.Files", /* @__PURE__ */ $.pointerType("protoregistry.Files"))
		}

		// Handle the file descriptor content.
		let f: filedesc.File | $.VarRef<filedesc.File> | null = new filedesc.File({L2: new filedesc.FileL2()})
		let f$: filedesc.File = f == null ? $.pointerTarget<filedesc.File>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<filedesc.File>(f)
		switch ((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetSyntax() : descriptorpb.FileDescriptorProto.prototype.GetSyntax.call(fd))) {
			case "proto2":
			case "":
			{
				;(f$ as filedesc.File).L1.Syntax = 2;
				;(f$ as filedesc.File).L1.Edition = 998
				break
			}
			case "proto3":
			{
				;(f$ as filedesc.File).L1.Syntax = 3;
				;(f$ as filedesc.File).L1.Edition = 999
				break
			}
			case "editions":
			{
				;(f$ as filedesc.File).L1.Syntax = 4;
				;(f$ as filedesc.File).L1.Edition = __goscript_editions.fromEditionProto((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetEdition() : descriptorpb.FileDescriptorProto.prototype.GetEdition.call(fd)))
				break
			}
			default:
			{
				return [null, await errors.New("invalid syntax: %q", $.arrayToSlice<any>([(fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetSyntax() : descriptorpb.FileDescriptorProto.prototype.GetSyntax.call(fd))]))]
				break
			}
		}
		if (((f$ as filedesc.File).L1.Syntax == 4) && (((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetEdition() : descriptorpb.FileDescriptorProto.prototype.GetEdition.call(fd)) < 998) || ((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetEdition() : descriptorpb.FileDescriptorProto.prototype.GetEdition.call(fd)) > 1000))) {
			return [null, await errors.New("use of edition %v not yet supported by the Go Protobuf runtime", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetEdition() : descriptorpb.FileDescriptorProto.prototype.GetEdition.call(fd)), "descriptorpb.Edition", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))]
		}
		;(f$ as filedesc.File).L1.Path = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetName() : descriptorpb.FileDescriptorProto.prototype.GetName.call(fd))
		if ($.stringEqual((f$ as filedesc.File).L1.Path, "")) {
			return [null, await errors.New("file path must be populated", null)]
		}
		;(f$ as filedesc.File).L1.Package = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetPackage() : descriptorpb.FileDescriptorProto.prototype.GetPackage.call(fd))
		if (!protoreflect.FullName_IsValid((f$ as filedesc.File).L1.Package) && (!$.stringEqual((f$ as filedesc.File).L1.Package, ""))) {
			return [null, await errors.New("invalid package: %q", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((f$ as filedesc.File).L1.Package, "protoreflect.FullName", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))]
		}
		{
			let opts: descriptorpb.FileOptions | $.VarRef<descriptorpb.FileOptions> | null = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetOptions() : descriptorpb.FileDescriptorProto.prototype.GetOptions.call(fd))
			if (opts != null) {
				opts = $.mustTypeAssert<descriptorpb.FileOptions | $.VarRef<descriptorpb.FileOptions> | null>(await proto.Clone($.interfaceValue<proto.Message | null>(opts, "*descriptorpb.FileOptions", /* @__PURE__ */ $.pointerType("descriptorpb.FileOptions"))), /* @__PURE__ */ $.pointerType("descriptorpb.FileOptions"))
				$.pointerValue<filedesc.FileL2>((f$ as filedesc.File).L2).Options = $.functionValue((): protoreflect.ProtoMessage | null => {
					return $.interfaceValue<protoreflect.ProtoMessage | null>(opts, "*descriptorpb.FileOptions", /* @__PURE__ */ $.pointerType("descriptorpb.FileOptions"))
				}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.ProtoMessage"] } as $.FunctionTypeInfo))
			}
		}
		await __goscript_editions.initFileDescFromFeatureSet(f, descriptorpb.FileOptions.prototype.GetFeatures.call((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetOptions() : descriptorpb.FileDescriptorProto.prototype.GetOptions.call(fd))))

		$.pointerValue<filedesc.FileL2>((f$ as filedesc.File).L2).Imports = ($.makeSlice<protoreflect.FileImport>($.sliceLen((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetDependency() : descriptorpb.FileDescriptorProto.prototype.GetDependency.call(fd))), undefined, undefined, () => new protoreflect.FileImport(undefined, true)) as filedesc.FileImports)
		for (let __goscriptRangeTarget0 = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetPublicDependency() : descriptorpb.FileDescriptorProto.prototype.GetPublicDependency.call(fd)), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let i = $.int((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 32)
			if (!((0 <= i) && ($.int(i) < $.sliceLen(($.pointerValue<filedesc.FileL2>((f$ as filedesc.File).L2).Imports as filedesc.FileImports)))) || $.arrayIndex($.pointerValue<filedesc.FileL2>((f$ as filedesc.File).L2).Imports!, i).IsPublic) {
				return [null, await errors.New("invalid or duplicate public import index: %d", $.arrayToSlice<any>([$.basicInterfaceValue(i, "int32")]))]
			}
			$.arrayIndex($.pointerValue<filedesc.FileL2>((f$ as filedesc.File).L2).Imports!, i).IsPublic = true
		}
		for (let __goscriptRangeTarget1 = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetWeakDependency() : descriptorpb.FileDescriptorProto.prototype.GetWeakDependency.call(fd)), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let i = $.int((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number), 32)
			if (!((0 <= i) && ($.int(i) < $.sliceLen(($.pointerValue<filedesc.FileL2>((f$ as filedesc.File).L2).Imports as filedesc.FileImports)))) || $.arrayIndex($.pointerValue<filedesc.FileL2>((f$ as filedesc.File).L2).Imports!, i).IsWeak) {
				return [null, await errors.New("invalid or duplicate weak import index: %d", $.arrayToSlice<any>([$.basicInterfaceValue(i, "int32")]))]
			}
			$.arrayIndex($.pointerValue<filedesc.FileL2>((f$ as filedesc.File).L2).Imports!, i).IsWeak = true
		}
		let imps: importSet = $.makeMap<string, boolean>([[(f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.File).Path() : filedesc.File.prototype.Path.call(f)), true]])
		for (let __goscriptRangeTarget2 = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetDependency() : descriptorpb.FileDescriptorProto.prototype.GetDependency.call(fd)), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
			let path = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as string)
			let imp: protoreflect.FileImport | $.VarRef<protoreflect.FileImport> | null = $.indexRef($.pointerValue<filedesc.FileL2>((f$ as filedesc.File).L2).Imports!, i)
			let imp$: protoreflect.FileImport = imp == null ? $.pointerTarget<protoreflect.FileImport>(imp) : (imp as any).__isVarRef === true ? (imp as any).value : (imp as any).__goValue === undefined ? (imp as any) : $.pointerTarget<protoreflect.FileImport>(imp)
			let [__goscriptShadow0, err] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<Resolver, null>) : $.pointerValue<Exclude<Resolver, null>>(r)).FindFileByPath(path)
			if (($.comparableEqual(err, protoregistry.NotFound)) && (o.AllowUnresolvable || (imp$ as protoreflect.FileImport).IsWeak)) {
				__goscriptShadow0 = $.namedValueInterfaceValue<protoreflect.FileDescriptor | null>(path, "filedesc.PlaceholderFile", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8())
			} else {
				if (err != null) {
					return [null, await errors.New("could not resolve import %q: %v", $.arrayToSlice<any>([path, (err as any)]))]
				}
			}
			;(imp$ as protoreflect.FileImport).FileDescriptor = __goscriptShadow0

			if ($.mapGet<string, boolean, boolean>(imps, $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>((imp$ as protoreflect.FileImport).FileDescriptor).Path(), false)[0]) {
				return [null, await errors.New("already imported %q", $.arrayToSlice<any>([path]))]
			}
			$.mapSet(imps, $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>((imp$ as protoreflect.FileImport).FileDescriptor).Path(), true)
		}
		for (let __goscriptRangeTarget3 = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetDependency() : descriptorpb.FileDescriptorProto.prototype.GetDependency.call(fd)), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
			let imp: protoreflect.FileImport | $.VarRef<protoreflect.FileImport> | null = $.indexRef($.pointerValue<filedesc.FileL2>((f$ as filedesc.File).L2).Imports!, i)
			await importSet_importPublic(imps, await $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>($.pointerValue<protoreflect.FileImport>(imp).FileDescriptor).Imports())
		}

		// Handle source locations.
		$.pointerValue<filedesc.FileL2>((f$ as filedesc.File).L2).Locations.File = $.interfaceValue<protoreflect.FileDescriptor | null>(f, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File"))
		for (let __goscriptRangeTarget4 = descriptorpb.SourceCodeInfo.prototype.GetLocation.call((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetSourceCodeInfo() : descriptorpb.FileDescriptorProto.prototype.GetSourceCodeInfo.call(fd))), __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let loc = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as descriptorpb.SourceCodeInfo_Location | $.VarRef<descriptorpb.SourceCodeInfo_Location> | null)
			let l: protoreflect.SourceLocation = new protoreflect.SourceLocation(undefined, true)
			// TODO: Validate that the path points to an actual declaration?
			l.Path = (((loc !== null && (loc as any).__isVarRef !== true && (loc as any).__goValue === undefined ? ((loc as any) as descriptorpb.SourceCodeInfo_Location).GetPath() : descriptorpb.SourceCodeInfo_Location.prototype.GetPath.call(loc)) as protoreflect.SourcePath) as protoreflect.SourcePath)
			let s: $.Slice<number> = (loc !== null && (loc as any).__isVarRef !== true && (loc as any).__goValue === undefined ? ((loc as any) as descriptorpb.SourceCodeInfo_Location).GetSpan() : descriptorpb.SourceCodeInfo_Location.prototype.GetSpan.call(loc))
			switch ($.sliceLen(s)) {
				case 3:
				{
					let __goscriptAssign0_0: number = $.int($.arrayIndex(s!, 0))
					let __goscriptAssign0_1: number = $.int($.arrayIndex(s!, 1))
					let __goscriptAssign0_2: number = $.int($.arrayIndex(s!, 0))
					let __goscriptAssign0_3: number = $.int($.arrayIndex(s!, 2))
					l.StartLine = __goscriptAssign0_0
					l.StartColumn = __goscriptAssign0_1
					l.EndLine = __goscriptAssign0_2
					l.EndColumn = __goscriptAssign0_3
					break
				}
				case 4:
				{
					let __goscriptAssign1_0: number = $.int($.arrayIndex(s!, 0))
					let __goscriptAssign1_1: number = $.int($.arrayIndex(s!, 1))
					let __goscriptAssign1_2: number = $.int($.arrayIndex(s!, 2))
					let __goscriptAssign1_3: number = $.int($.arrayIndex(s!, 3))
					l.StartLine = __goscriptAssign1_0
					l.StartColumn = __goscriptAssign1_1
					l.EndLine = __goscriptAssign1_2
					l.EndColumn = __goscriptAssign1_3
					break
				}
				default:
				{
					return [null, await errors.New("invalid span: %v", $.arrayToSlice<any>([$.interfaceValue(s, "[]int32", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")))]))]
					break
				}
			}
			// TODO: Validate that the span information is sensible?
			// See https://github.com/protocolbuffers/protobuf/issues/6378.
			if (false && (((((l.EndLine < l.StartLine) || (l.StartLine < 0)) || (l.StartColumn < 0)) || (l.EndColumn < 0)) || ((l.StartLine == l.EndLine) && (l.EndColumn <= l.StartColumn)))) {
				return [null, await errors.New("invalid span: %v", $.arrayToSlice<any>([$.interfaceValue(s, "[]int32", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")))]))]
			}
			l.LeadingDetachedComments = (loc !== null && (loc as any).__isVarRef !== true && (loc as any).__goValue === undefined ? ((loc as any) as descriptorpb.SourceCodeInfo_Location).GetLeadingDetachedComments() : descriptorpb.SourceCodeInfo_Location.prototype.GetLeadingDetachedComments.call(loc))
			l.LeadingComments = (loc !== null && (loc as any).__isVarRef !== true && (loc as any).__goValue === undefined ? ((loc as any) as descriptorpb.SourceCodeInfo_Location).GetLeadingComments() : descriptorpb.SourceCodeInfo_Location.prototype.GetLeadingComments.call(loc))
			l.TrailingComments = (loc !== null && (loc as any).__isVarRef !== true && (loc as any).__goValue === undefined ? ((loc as any) as descriptorpb.SourceCodeInfo_Location).GetTrailingComments() : descriptorpb.SourceCodeInfo_Location.prototype.GetTrailingComments.call(loc))
			$.pointerValue<filedesc.FileL2>((f$ as filedesc.File).L2).Locations.List = $.appendOne($.pointerValue<filedesc.FileL2>((f$ as filedesc.File).L2).Locations.List, (l).clone())
		}

		// Step 1: Allocate and derive the names for all declarations.
		// This copies all fields from the descriptor proto except:
		//	google.protobuf.FieldDescriptorProto.type_name
		//	google.protobuf.FieldDescriptorProto.default_value
		//	google.protobuf.FieldDescriptorProto.oneof_index
		//	google.protobuf.FieldDescriptorProto.extendee
		//	google.protobuf.MethodDescriptorProto.input
		//	google.protobuf.MethodDescriptorProto.output
		let err: $.GoError = null! as $.GoError
		let sb: strs.Builder | $.VarRef<strs.Builder> | null = new strs.Builder()
		let r1: __goscript_desc_init.descsByName = $.makeMap<protoreflect.FullName, protoreflect.Descriptor | null>()
		{
			let __goscriptTuple0: any = await __goscript_desc_init.descsByName_initEnumDeclarations(r1, (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetEnumType() : descriptorpb.FileDescriptorProto.prototype.GetEnumType.call(fd)), $.interfaceValue<protoreflect.Descriptor | null>(f, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File")), sb);
			;(f$ as filedesc.File).L1.Enums.List = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			if (err != null) {
				return [null, err]
			}
		}
		{
			let __goscriptTuple1: any = await __goscript_desc_init.descsByName_initMessagesDeclarations(r1, (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetMessageType() : descriptorpb.FileDescriptorProto.prototype.GetMessageType.call(fd)), $.interfaceValue<protoreflect.Descriptor | null>(f, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File")), sb);
			;(f$ as filedesc.File).L1.Messages.List = __goscriptTuple1[0]
			err = __goscriptTuple1[1]
			if (err != null) {
				return [null, err]
			}
		}
		{
			let __goscriptTuple2: any = await __goscript_desc_init.descsByName_initExtensionDeclarations(r1, (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetExtension() : descriptorpb.FileDescriptorProto.prototype.GetExtension.call(fd)), $.interfaceValue<protoreflect.Descriptor | null>(f, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File")), sb);
			;(f$ as filedesc.File).L1.Extensions.List = __goscriptTuple2[0]
			err = __goscriptTuple2[1]
			if (err != null) {
				return [null, err]
			}
		}
		{
			let __goscriptTuple3: any = await __goscript_desc_init.descsByName_initServiceDeclarations(r1, (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetService() : descriptorpb.FileDescriptorProto.prototype.GetService.call(fd)), $.interfaceValue<protoreflect.Descriptor | null>(f, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File")), sb);
			;(f$ as filedesc.File).L1.Services.List = __goscriptTuple3[0]
			err = __goscriptTuple3[1]
			if (err != null) {
				return [null, err]
			}
		}

		// Step 2: Resolve every dependency reference not handled by step 1.
		let r2: __goscript_desc_resolve.resolver | $.VarRef<__goscript_desc_resolve.resolver> | null = new __goscript_desc_resolve.resolver({local: r1, remote: r, imports: imps, allowUnresolvable: o.AllowUnresolvable})
		{
			let __goscriptShadow1 = await __goscript_desc_resolve.resolver.prototype.resolveMessageDependencies.call(r2, (f$ as filedesc.File).L1.Messages.List, (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetMessageType() : descriptorpb.FileDescriptorProto.prototype.GetMessageType.call(fd)))
			if (__goscriptShadow1 != null) {
				return [null, __goscriptShadow1]
			}
		}
		{
			let __goscriptShadow2 = await __goscript_desc_resolve.resolver.prototype.resolveExtensionDependencies.call(r2, (f$ as filedesc.File).L1.Extensions.List, (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetExtension() : descriptorpb.FileDescriptorProto.prototype.GetExtension.call(fd)))
			if (__goscriptShadow2 != null) {
				return [null, __goscriptShadow2]
			}
		}
		{
			let __goscriptShadow3 = await __goscript_desc_resolve.resolver.prototype.resolveServiceDependencies.call(r2, (f$ as filedesc.File).L1.Services.List, (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetService() : descriptorpb.FileDescriptorProto.prototype.GetService.call(fd)))
			if (__goscriptShadow3 != null) {
				return [null, __goscriptShadow3]
			}
		}

		// Step 3: Validate every enum, message, and extension declaration.
		{
			let __goscriptShadow4 = await __goscript_desc_validate.validateEnumDeclarations((f$ as filedesc.File).L1.Enums.List, (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetEnumType() : descriptorpb.FileDescriptorProto.prototype.GetEnumType.call(fd)))
			if (__goscriptShadow4 != null) {
				return [null, __goscriptShadow4]
			}
		}
		{
			let __goscriptShadow5 = await __goscript_desc_validate.validateMessageDeclarations(f, (f$ as filedesc.File).L1.Messages.List, (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetMessageType() : descriptorpb.FileDescriptorProto.prototype.GetMessageType.call(fd)))
			if (__goscriptShadow5 != null) {
				return [null, __goscriptShadow5]
			}
		}
		{
			let __goscriptShadow6 = await __goscript_desc_validate.validateExtensionDeclarations(f, (f$ as filedesc.File).L1.Extensions.List, (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetExtension() : descriptorpb.FileDescriptorProto.prototype.GetExtension.call(fd)))
			if (__goscriptShadow6 != null) {
				return [null, __goscriptShadow6]
			}
		}

		return [$.interfaceValue<protoreflect.FileDescriptor | null>(f, "*filedesc.File", /* @__PURE__ */ $.pointerType("filedesc.File")), null]
	}

	public async NewFiles(fds: descriptorpb.FileDescriptorSet | $.VarRef<descriptorpb.FileDescriptorSet> | null): globalThis.Promise<[protoregistry.Files | $.VarRef<protoregistry.Files> | null, $.GoError]> {
		const o = this;
		let files: globalThis.Map<string, descriptorpb.FileDescriptorProto | $.VarRef<descriptorpb.FileDescriptorProto> | null> | null = $.makeMap<string, descriptorpb.FileDescriptorProto | $.VarRef<descriptorpb.FileDescriptorProto> | null>()
		for (let __goscriptRangeTarget5 = $.pointerValue<descriptorpb.FileDescriptorSet>(fds).File, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let fd = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as descriptorpb.FileDescriptorProto | $.VarRef<descriptorpb.FileDescriptorProto> | null)
			{
				let [, ok] = $.mapGet<string, descriptorpb.FileDescriptorProto | $.VarRef<descriptorpb.FileDescriptorProto> | null, descriptorpb.FileDescriptorProto | $.VarRef<descriptorpb.FileDescriptorProto> | null>(files, (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetName() : descriptorpb.FileDescriptorProto.prototype.GetName.call(fd)), null)
				if (ok) {
					return [null, await errors.New("file appears multiple times: %q", $.arrayToSlice<any>([(fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetName() : descriptorpb.FileDescriptorProto.prototype.GetName.call(fd))]))]
				}
			}
			$.mapSet(files, (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetName() : descriptorpb.FileDescriptorProto.prototype.GetName.call(fd)), fd)
		}
		let r: protoregistry.Files | $.VarRef<protoregistry.Files> | null = new protoregistry.Files()
		for (const [__rangeKey, fd] of files?.entries() ?? []) {
			{
				let err = await o.addFileDeps(r, fd, files)
				if (err != null) {
					return [null, err]
				}
			}
		}
		return [r, null]
	}

	public async addFileDeps(r: protoregistry.Files | $.VarRef<protoregistry.Files> | null, fd: descriptorpb.FileDescriptorProto | $.VarRef<descriptorpb.FileDescriptorProto> | null, files: globalThis.Map<string, descriptorpb.FileDescriptorProto | $.VarRef<descriptorpb.FileDescriptorProto> | null> | null): globalThis.Promise<$.GoError> {
		const o = this;
		// Set the entry to nil while descending into a file's dependencies to detect cycles.
		$.mapSet(files, (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetName() : descriptorpb.FileDescriptorProto.prototype.GetName.call(fd)), null)
		for (let __goscriptRangeTarget6 = $.pointerValue<descriptorpb.FileDescriptorProto>(fd).Dependency, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let dep = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as string)
			let __goscriptTuple4: any = $.mapGet<string, descriptorpb.FileDescriptorProto | $.VarRef<descriptorpb.FileDescriptorProto> | null, descriptorpb.FileDescriptorProto | $.VarRef<descriptorpb.FileDescriptorProto> | null>(files, dep, null)
			let depfd: descriptorpb.FileDescriptorProto | $.VarRef<descriptorpb.FileDescriptorProto> | null = __goscriptTuple4[0]
			let ok = __goscriptTuple4[1]
			if (depfd == null) {
				if (ok) {
					return errors.New("import cycle in file: %q", $.arrayToSlice<any>([dep]))
				}
				continue
			}
			{
				let err = await o.addFileDeps(r, depfd, files)
				if (err != null) {
					return err
				}
			}
		}
		// Delete the entry once dependencies are processed.
		$.deleteMapEntry(files, (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FileDescriptorProto).GetName() : descriptorpb.FileDescriptorProto.prototype.GetName.call(fd)))
		let [f, err] = await o.New(fd, $.interfaceValue<Resolver | null>(r, "*protoregistry.Files", /* @__PURE__ */ $.pointerType("protoregistry.Files")))
		if (err != null) {
			return err
		}
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as protoregistry.Files).RegisterFile(f) : protoregistry.Files.prototype.RegisterFile.call(r, f))
	}

	static __typeInfo = $.registerStructType(
		"protodesc.FileOptions",
		() => new FileOptions(),
		() => [$.methodSignature("New", [["fd", /* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorProto")], ["r", "protodesc.Resolver"]], ["protoreflect.FileDescriptor", "error"]), $.methodSignature("NewFiles", [["fds", /* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorSet")]], [/* @__PURE__ */ $.pointerType("protoregistry.Files"), "error"]), $.methodSignature("addFileDeps", [["r", /* @__PURE__ */ $.pointerType("protoregistry.Files")], ["fd", /* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorProto")], ["files", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorProto"))]], ["error"])],
		FileOptions,
		() => [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("AllowUnresolvable", /* @__PURE__ */ $.basicType("bool"), [1], 0, true)]
	)
}

export async function NewFile(fd: descriptorpb.FileDescriptorProto | $.VarRef<descriptorpb.FileDescriptorProto> | null, r: Resolver | null): globalThis.Promise<[protoreflect.FileDescriptor | null, $.GoError]> {
	return $.markAsStructValue($.cloneStructValue(new FileOptions(undefined, true))).New(fd, r)
}

export async function NewFiles(fd: descriptorpb.FileDescriptorSet | $.VarRef<descriptorpb.FileDescriptorSet> | null): globalThis.Promise<[protoregistry.Files | $.VarRef<protoregistry.Files> | null, $.GoError]> {
	return $.markAsStructValue($.cloneStructValue(new FileOptions(undefined, true))).NewFiles(fd)
}

export async function importSet_importPublic(_is: importSet, imps: protoreflect.FileImports | null): globalThis.Promise<void> {
	for (let i = 0; i < (__goscriptAwait = (imps !== null && (imps as any).__isVarRef !== true && (imps as any).__goValue === undefined ? (imps as Exclude<protoreflect.FileImports, null>) : $.pointerValue<Exclude<protoreflect.FileImports, null>>(imps)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
		{
			let imp = (((__goscriptAwait = (imps !== null && (imps as any).__isVarRef !== true && (imps as any).__goValue === undefined ? (imps as Exclude<protoreflect.FileImports, null>) : $.pointerValue<Exclude<protoreflect.FileImports, null>>(imps)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.FileImport)).clone()
			if (imp.IsPublic) {
				$.mapSet(_is, $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>(imp.FileDescriptor).Path(), true)
				await importSet_importPublic(_is, await $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>(imp.FileDescriptor).Imports())
			}
		}
	}
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (descriptorpb.Edition_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (descriptorpb.Edition_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (descriptorpb.Edition_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (descriptorpb.Edition_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (descriptorpb.Edition_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (descriptorpb.Edition_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Append: (receiver: any, ...args: any[]) => (protoreflect.FullName_Append as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.FullName_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (protoreflect.FullName_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (protoreflect.FullName_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("string", "protoreflect.FullName"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Append", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Parent", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({Enums: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_Enums as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Extensions: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_Extensions as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), FullName: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_FullName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Imports: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_Imports as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_Index as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_IsPlaceholder as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Messages: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_Messages as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_Options as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Package: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_Package as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_ParentFile as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Path: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_Path as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_ProtoInternal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_ProtoType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Services: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_Services as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), SourceLocations: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_SourceLocations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (filedesc.PlaceholderFile_Syntax as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.basicType("string", "filedesc.PlaceholderFile"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("Enums", [], ["protoreflect.EnumDescriptors"]), $.methodSignature("Extensions", [], ["protoreflect.ExtensionDescriptors"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Imports", [], ["protoreflect.FileImports"]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Messages", [], ["protoreflect.MessageDescriptors"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Package", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("Path", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.FileDescriptor"]), $.methodSignature("Services", [], ["protoreflect.ServiceDescriptors"]), $.methodSignature("SourceLocations", [], ["protoreflect.SourceLocations"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])])
}

var __goscriptAwait: any
