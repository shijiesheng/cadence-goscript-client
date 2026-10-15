// Generated file based on source.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import type * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as __goscript__type from "./type.gs.ts"

import type * as __goscript_methods from "./methods.gs.ts"

import type * as __goscript_proto from "./proto.gs.ts"

import * as __goscript_source_gen from "./source_gen.gs.ts"

import type * as __goscript_value from "./value.gs.ts"

import type * as __goscript_value_equal from "./value_equal.gs.ts"

import * as __goscript_value_pure from "./value_pure.gs.ts"

import type * as __goscript_value_union from "./value_union.gs.ts"
import "@goscript/strconv/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "./type.gs.ts"
import "./source_gen.gs.ts"
import "./value_pure.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/reflect/protoreflect", ["protoreflect.SourceLocations", "protoreflect.SourceLocation", "protoreflect.SourcePath", "protoreflect.appendFunc"])

export type SourceLocations = {
	ByDescriptor(desc: __goscript__type.Descriptor | null): SourceLocation | globalThis.Promise<SourceLocation>
	ByPath(path: SourcePath): SourceLocation | globalThis.Promise<SourceLocation>
	Get(_p0: number): SourceLocation | globalThis.Promise<SourceLocation>
	Len(): number
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
}

$.registerInterfaceType(
	"protoreflect.SourceLocations",
	null,
	[$.methodSignature("ByDescriptor", [["desc", "protoreflect.Descriptor"]], ["protoreflect.SourceLocation"]), $.methodSignature("ByPath", [["path", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"), "protoreflect.SourcePath")]], ["protoreflect.SourceLocation"]), $.methodSignature("Get", [/* @__PURE__ */ $.basicType("int")], ["protoreflect.SourceLocation"]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export type SourcePath = $.Slice<number>

$.registerNamedType("protoreflect.SourcePath", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")));

$.registerNamedValueType(
	"protoreflect.SourcePath",
	{Equal: (receiver: any, ...args: any[]) => (SourcePath_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (SourcePath_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Equal", [["p2", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"), "protoreflect.SourcePath")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*protoreflect.SourcePath",
	{Equal: (receiver: any, ...args: any[]) => (SourcePath_Equal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (SourcePath_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), appendDescriptorProto: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendDescriptorProto as any)(receiver, ...$.stripGenericTypeArgs(args)), appendDescriptorProto_ExtensionRange: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendDescriptorProto_ExtensionRange as any)(receiver, ...$.stripGenericTypeArgs(args)), appendDescriptorProto_ReservedRange: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendDescriptorProto_ReservedRange as any)(receiver, ...$.stripGenericTypeArgs(args)), appendEnumDescriptorProto: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendEnumDescriptorProto as any)(receiver, ...$.stripGenericTypeArgs(args)), appendEnumDescriptorProto_EnumReservedRange: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendEnumDescriptorProto_EnumReservedRange as any)(receiver, ...$.stripGenericTypeArgs(args)), appendEnumOptions: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendEnumOptions as any)(receiver, ...$.stripGenericTypeArgs(args)), appendEnumValueDescriptorProto: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendEnumValueDescriptorProto as any)(receiver, ...$.stripGenericTypeArgs(args)), appendEnumValueOptions: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendEnumValueOptions as any)(receiver, ...$.stripGenericTypeArgs(args)), appendExtensionRangeOptions: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendExtensionRangeOptions as any)(receiver, ...$.stripGenericTypeArgs(args)), appendExtensionRangeOptions_Declaration: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendExtensionRangeOptions_Declaration as any)(receiver, ...$.stripGenericTypeArgs(args)), appendFeatureSet: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendFeatureSet as any)(receiver, ...$.stripGenericTypeArgs(args)), appendFieldDescriptorProto: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendFieldDescriptorProto as any)(receiver, ...$.stripGenericTypeArgs(args)), appendFieldOptions: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendFieldOptions as any)(receiver, ...$.stripGenericTypeArgs(args)), appendFieldOptions_EditionDefault: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendFieldOptions_EditionDefault as any)(receiver, ...$.stripGenericTypeArgs(args)), appendFieldOptions_FeatureSupport: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendFieldOptions_FeatureSupport as any)(receiver, ...$.stripGenericTypeArgs(args)), appendFileDescriptorProto: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendFileDescriptorProto as any)(receiver, ...$.stripGenericTypeArgs(args)), appendFileOptions: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendFileOptions as any)(receiver, ...$.stripGenericTypeArgs(args)), appendMessageOptions: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendMessageOptions as any)(receiver, ...$.stripGenericTypeArgs(args)), appendMethodDescriptorProto: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendMethodDescriptorProto as any)(receiver, ...$.stripGenericTypeArgs(args)), appendMethodOptions: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendMethodOptions as any)(receiver, ...$.stripGenericTypeArgs(args)), appendOneofDescriptorProto: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendOneofDescriptorProto as any)(receiver, ...$.stripGenericTypeArgs(args)), appendOneofOptions: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendOneofOptions as any)(receiver, ...$.stripGenericTypeArgs(args)), appendRepeatedField: (receiver: any, ...args: any[]) => (SourcePath_appendRepeatedField as any)(receiver, ...$.stripGenericTypeArgs(args)), appendServiceDescriptorProto: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendServiceDescriptorProto as any)(receiver, ...$.stripGenericTypeArgs(args)), appendServiceOptions: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendServiceOptions as any)(receiver, ...$.stripGenericTypeArgs(args)), appendSingularField: (receiver: any, ...args: any[]) => (SourcePath_appendSingularField as any)(receiver, ...$.stripGenericTypeArgs(args)), appendSourceCodeInfo: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendSourceCodeInfo as any)(receiver, ...$.stripGenericTypeArgs(args)), appendSourceCodeInfo_Location: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendSourceCodeInfo_Location as any)(receiver, ...$.stripGenericTypeArgs(args)), appendUninterpretedOption: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendUninterpretedOption as any)(receiver, ...$.stripGenericTypeArgs(args)), appendUninterpretedOption_NamePart: (receiver: any, ...args: any[]) => (__goscript_source_gen.SourcePath_appendUninterpretedOption_NamePart as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Equal", [["p2", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"), "protoreflect.SourcePath")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("appendDescriptorProto", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendDescriptorProto_ExtensionRange", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendDescriptorProto_ReservedRange", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendEnumDescriptorProto", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendEnumDescriptorProto_EnumReservedRange", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendEnumOptions", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendEnumValueDescriptorProto", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendEnumValueOptions", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendExtensionRangeOptions", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendExtensionRangeOptions_Declaration", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendFeatureSet", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendFieldDescriptorProto", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendFieldOptions", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendFieldOptions_EditionDefault", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendFieldOptions_FeatureSupport", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendFileDescriptorProto", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendFileOptions", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendMessageOptions", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendMethodDescriptorProto", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendMethodOptions", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendOneofDescriptorProto", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendOneofOptions", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendRepeatedField", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["name", /* @__PURE__ */ $.basicType("string")], ["f", ({ kind: $.TypeKind.Function, name: "protoreflect.appendFunc", params: [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"), "protoreflect.SourcePath")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendServiceDescriptorProto", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendServiceOptions", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendSingularField", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["name", /* @__PURE__ */ $.basicType("string")], ["f", ({ kind: $.TypeKind.Function, name: "protoreflect.appendFunc", params: [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"), "protoreflect.SourcePath")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendSourceCodeInfo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendSourceCodeInfo_Location", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendUninterpretedOption", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("appendUninterpretedOption_NamePart", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))])]
);

export type appendFunc = ((_p0: $.VarRef<SourcePath> | null, _p1: $.Slice<number>) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null

export class SourceLocation {
	// Path is the path to the declaration from the root file descriptor.
	// The contents of this slice must not be mutated.
	public get Path(): SourcePath {
		return this._fields.Path
	}

	public set Path(value: SourcePath) {
		this._fields.Path = value
	}

	// StartLine and StartColumn are the zero-indexed starting location
	// in the source file for the declaration.
	public get StartLine(): number {
		return this._fields.StartLine
	}

	public set StartLine(value: number) {
		this._fields.StartLine = value
	}

	// StartLine and StartColumn are the zero-indexed starting location
	// in the source file for the declaration.
	public get StartColumn(): number {
		return this._fields.StartColumn
	}

	public set StartColumn(value: number) {
		this._fields.StartColumn = value
	}

	// EndLine and EndColumn are the zero-indexed ending location
	// in the source file for the declaration.
	// In the descriptor.proto, the end line may be omitted if it is identical
	// to the start line. Here, it is always populated.
	public get EndLine(): number {
		return this._fields.EndLine
	}

	public set EndLine(value: number) {
		this._fields.EndLine = value
	}

	// EndLine and EndColumn are the zero-indexed ending location
	// in the source file for the declaration.
	// In the descriptor.proto, the end line may be omitted if it is identical
	// to the start line. Here, it is always populated.
	public get EndColumn(): number {
		return this._fields.EndColumn
	}

	public set EndColumn(value: number) {
		this._fields.EndColumn = value
	}

	// LeadingDetachedComments are the leading detached comments
	// for the declaration. The contents of this slice must not be mutated.
	public get LeadingDetachedComments(): $.Slice<string> {
		return this._fields.LeadingDetachedComments
	}

	public set LeadingDetachedComments(value: $.Slice<string>) {
		this._fields.LeadingDetachedComments = value
	}

	// LeadingComments is the leading attached comment for the declaration.
	public get LeadingComments(): string {
		return this._fields.LeadingComments
	}

	public set LeadingComments(value: string) {
		this._fields.LeadingComments = value
	}

	// TrailingComments is the trailing attached comment for the declaration.
	public get TrailingComments(): string {
		return this._fields.TrailingComments
	}

	public set TrailingComments(value: string) {
		this._fields.TrailingComments = value
	}

	// Next is an index into SourceLocations for the next source location that
	// has the same Path. It is zero if there is no next location.
	public get Next(): number {
		return this._fields.Next
	}

	public set Next(value: number) {
		this._fields.Next = value
	}

	public _fields: {
		Path: SourcePath
		StartLine: number
		StartColumn: number
		EndLine: number
		EndColumn: number
		LeadingDetachedComments: $.Slice<string>
		LeadingComments: string
		TrailingComments: string
		Next: number
	}

	constructor(init?: Partial<{Path?: SourcePath, StartLine?: number, StartColumn?: number, EndLine?: number, EndColumn?: number, LeadingDetachedComments?: $.Slice<string>, LeadingComments?: string, TrailingComments?: string, Next?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Path: init?.Path ?? (null! as SourcePath),
			StartLine: init?.StartLine ?? (0 as number),
			StartColumn: init?.StartColumn ?? (0 as number),
			EndLine: init?.EndLine ?? (0 as number),
			EndColumn: init?.EndColumn ?? (0 as number),
			LeadingDetachedComments: init?.LeadingDetachedComments ?? (null! as $.Slice<string>),
			LeadingComments: init?.LeadingComments ?? ("" as string),
			TrailingComments: init?.TrailingComments ?? ("" as string),
			Next: init?.Next ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SourceLocation {
		return new SourceLocation(this, true)
	}

	public __goscriptAssign(source: SourceLocation): void {
		const target = this._fields
		const values = source._fields
		target.Path = values.Path
		target.StartLine = values.StartLine
		target.StartColumn = values.StartColumn
		target.EndLine = values.EndLine
		target.EndColumn = values.EndColumn
		target.LeadingDetachedComments = values.LeadingDetachedComments
		target.LeadingComments = values.LeadingComments
		target.TrailingComments = values.TrailingComments
		target.Next = values.Next
	}

	static __typeInfo = $.registerStructType(
		"protoreflect.SourceLocation",
		() => new SourceLocation(),
		() => [],
		SourceLocation,
		() => [/* @__PURE__ */ $.structField("Path", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"), "protoreflect.SourcePath"), [0], 0, true), /* @__PURE__ */ $.structField("StartLine", /* @__PURE__ */ $.basicType("int"), [1], 24, true), /* @__PURE__ */ $.structField("StartColumn", /* @__PURE__ */ $.basicType("int"), [2], 32, true), /* @__PURE__ */ $.structField("EndLine", /* @__PURE__ */ $.basicType("int"), [3], 40, true), /* @__PURE__ */ $.structField("EndColumn", /* @__PURE__ */ $.basicType("int"), [4], 48, true), /* @__PURE__ */ $.structField("LeadingDetachedComments", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [5], 56, true), /* @__PURE__ */ $.structField("LeadingComments", /* @__PURE__ */ $.basicType("string"), [6], 80, true), /* @__PURE__ */ $.structField("TrailingComments", /* @__PURE__ */ $.basicType("string"), [7], 96, true), /* @__PURE__ */ $.structField("Next", /* @__PURE__ */ $.basicType("int"), [8], 112, true)]
	)
}

export function SourcePath_Equal(p1: SourcePath, p2: SourcePath): boolean {
	if ($.sliceLen((p1 as SourcePath)) != $.sliceLen((p2 as SourcePath))) {
		return false
	}
	for (let __goscriptRangeTarget0 = p1, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(p2), i = 0; i < __goscriptRangeWindow0.length; i++) {
		if (((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as number) != ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number)) {
			return false
		}
	}
	return true
}

export async function SourcePath_String(__goscriptReceiver0: SourcePath): globalThis.Promise<string> {
	let p: $.VarRef<SourcePath> = $.varRef(__goscriptReceiver0)
	let b: $.Slice<number> = await __goscript_source_gen.SourcePath_appendFileDescriptorProto(p, null)
	for (let __goscriptRangeTarget1 = p.value, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let i = $.int((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number), 32)
		b = $.append(b, $.uint(46, 8), $.byteSliceHint)
		b = strconv.AppendInt(b, $.int64(i), 10)
	}
	return $.bytesToString(b)
}

export async function SourcePath_appendSingularField(p: $.VarRef<SourcePath> | null, b: $.Slice<number>, name: string, f: ((_p0: $.VarRef<SourcePath> | null, _p1: $.Slice<number>) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<SourcePath>(p) as SourcePath)) == 0) {
		return b
	}
	b = $.append(b, $.uint(46, 8), $.byteSliceHint)
	b = $.appendSlice(b, $.stringToBytes(name), $.byteSliceHint)
	p!.value = ($.goSlice(($.pointerValue<SourcePath>(p)), 1, undefined) as SourcePath)
	if (f != null) {
		b = ((__goscriptAwait = f!(p, b), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
	}
	return b
}

export async function SourcePath_appendRepeatedField(p: $.VarRef<SourcePath> | null, b: $.Slice<number>, name: string, f: ((_p0: $.VarRef<SourcePath> | null, _p1: $.Slice<number>) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null): globalThis.Promise<$.Slice<number>> {
	b = await SourcePath_appendSingularField(p, b, name, (null as appendFunc | null))
	if (($.sliceLen(($.pointerValue<SourcePath>(p) as SourcePath)) == 0) || ($.arrayIndex(($.pointerValue<SourcePath>(p))!, 0) < 0)) {
		return b
	}
	b = $.append(b, $.uint(91, 8), $.byteSliceHint)
	b = strconv.AppendUint(b, $.uint64($.arrayIndex(($.pointerValue<SourcePath>(p))!, 0)), 10)
	b = $.append(b, $.uint(93, 8), $.byteSliceHint)
	p!.value = ($.goSlice(($.pointerValue<SourcePath>(p)), 1, undefined) as SourcePath)
	if (f != null) {
		b = ((__goscriptAwait = f!(p, b), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
	}
	return b
}

var __goscriptAwait: any
