// Generated file based on descriptor.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoimpl from "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/types/descriptorpb", ["descriptorpb.Edition", "descriptorpb.ExtensionRangeOptions_VerificationState", "descriptorpb.FieldDescriptorProto_Type", "descriptorpb.FieldDescriptorProto_Label", "descriptorpb.FileOptions_OptimizeMode", "descriptorpb.FieldOptions_CType", "descriptorpb.FieldOptions_JSType", "descriptorpb.FieldOptions_OptionRetention", "descriptorpb.FieldOptions_OptionTargetType", "descriptorpb.MethodOptions_IdempotencyLevel", "descriptorpb.FeatureSet_FieldPresence", "descriptorpb.FeatureSet_EnumType", "descriptorpb.FeatureSet_RepeatedFieldEncoding", "descriptorpb.FeatureSet_Utf8Validation", "descriptorpb.FeatureSet_MessageEncoding", "descriptorpb.FeatureSet_JsonFormat", "descriptorpb.GeneratedCodeInfo_Annotation_Semantic", "descriptorpb.FileDescriptorSet", "descriptorpb.FileDescriptorProto", "descriptorpb.DescriptorProto", "descriptorpb.ExtensionRangeOptions", "descriptorpb.FieldDescriptorProto", "descriptorpb.OneofDescriptorProto", "descriptorpb.EnumDescriptorProto", "descriptorpb.EnumValueDescriptorProto", "descriptorpb.ServiceDescriptorProto", "descriptorpb.MethodDescriptorProto", "descriptorpb.FileOptions", "descriptorpb.MessageOptions", "descriptorpb.FieldOptions", "descriptorpb.OneofOptions", "descriptorpb.EnumOptions", "descriptorpb.EnumValueOptions", "descriptorpb.ServiceOptions", "descriptorpb.MethodOptions", "descriptorpb.UninterpretedOption", "descriptorpb.FeatureSet", "descriptorpb.FeatureSetDefaults", "descriptorpb.SourceCodeInfo", "descriptorpb.GeneratedCodeInfo", "descriptorpb.DescriptorProto_ExtensionRange", "descriptorpb.DescriptorProto_ReservedRange", "descriptorpb.ExtensionRangeOptions_Declaration", "descriptorpb.EnumDescriptorProto_EnumReservedRange", "descriptorpb.FieldOptions_EditionDefault", "descriptorpb.FieldOptions_FeatureSupport", "descriptorpb.UninterpretedOption_NamePart", "descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault", "descriptorpb.SourceCodeInfo_Location", "descriptorpb.GeneratedCodeInfo_Annotation", "descriptorpb.x"])

export type Edition = number

$.registerNamedValueType(
	"descriptorpb.Edition",
	{Descriptor: (receiver: any, ...args: any[]) => (Edition_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (Edition_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (Edition_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (Edition_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Edition_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (Edition_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*descriptorpb.Edition",
	{Descriptor: (receiver: any, ...args: any[]) => (Edition_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (Edition_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (Edition_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (Edition_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Edition_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (Edition_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (Edition_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type ExtensionRangeOptions_VerificationState = number

$.registerNamedValueType(
	"descriptorpb.ExtensionRangeOptions_VerificationState",
	{Descriptor: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.ExtensionRangeOptions_VerificationState"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*descriptorpb.ExtensionRangeOptions_VerificationState",
	{Descriptor: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.ExtensionRangeOptions_VerificationState"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type FieldDescriptorProto_Type = number

$.registerNamedValueType(
	"descriptorpb.FieldDescriptorProto_Type",
	{Descriptor: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldDescriptorProto_Type"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*descriptorpb.FieldDescriptorProto_Type",
	{Descriptor: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldDescriptorProto_Type"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type FieldDescriptorProto_Label = number

$.registerNamedValueType(
	"descriptorpb.FieldDescriptorProto_Label",
	{Descriptor: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldDescriptorProto_Label"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*descriptorpb.FieldDescriptorProto_Label",
	{Descriptor: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldDescriptorProto_Label"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type FileOptions_OptimizeMode = number

$.registerNamedValueType(
	"descriptorpb.FileOptions_OptimizeMode",
	{Descriptor: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FileOptions_OptimizeMode"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*descriptorpb.FileOptions_OptimizeMode",
	{Descriptor: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FileOptions_OptimizeMode"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type FieldOptions_CType = number

$.registerNamedValueType(
	"descriptorpb.FieldOptions_CType",
	{Descriptor: (receiver: any, ...args: any[]) => (FieldOptions_CType_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldOptions_CType_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldOptions_CType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldOptions_CType_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldOptions_CType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldOptions_CType_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_CType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*descriptorpb.FieldOptions_CType",
	{Descriptor: (receiver: any, ...args: any[]) => (FieldOptions_CType_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldOptions_CType_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldOptions_CType_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldOptions_CType_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldOptions_CType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldOptions_CType_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (FieldOptions_CType_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_CType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type FieldOptions_JSType = number

$.registerNamedValueType(
	"descriptorpb.FieldOptions_JSType",
	{Descriptor: (receiver: any, ...args: any[]) => (FieldOptions_JSType_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldOptions_JSType_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldOptions_JSType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldOptions_JSType_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldOptions_JSType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldOptions_JSType_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_JSType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*descriptorpb.FieldOptions_JSType",
	{Descriptor: (receiver: any, ...args: any[]) => (FieldOptions_JSType_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldOptions_JSType_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldOptions_JSType_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldOptions_JSType_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldOptions_JSType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldOptions_JSType_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (FieldOptions_JSType_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_JSType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type FieldOptions_OptionRetention = number

$.registerNamedValueType(
	"descriptorpb.FieldOptions_OptionRetention",
	{Descriptor: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_OptionRetention"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*descriptorpb.FieldOptions_OptionRetention",
	{Descriptor: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_OptionRetention"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type FieldOptions_OptionTargetType = number

$.registerNamedValueType(
	"descriptorpb.FieldOptions_OptionTargetType",
	{Descriptor: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_OptionTargetType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*descriptorpb.FieldOptions_OptionTargetType",
	{Descriptor: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_OptionTargetType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type MethodOptions_IdempotencyLevel = number

$.registerNamedValueType(
	"descriptorpb.MethodOptions_IdempotencyLevel",
	{Descriptor: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.MethodOptions_IdempotencyLevel"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*descriptorpb.MethodOptions_IdempotencyLevel",
	{Descriptor: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.MethodOptions_IdempotencyLevel"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type FeatureSet_FieldPresence = number

$.registerNamedValueType(
	"descriptorpb.FeatureSet_FieldPresence",
	{Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_FieldPresence"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*descriptorpb.FeatureSet_FieldPresence",
	{Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_FieldPresence"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type FeatureSet_EnumType = number

$.registerNamedValueType(
	"descriptorpb.FeatureSet_EnumType",
	{Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_EnumType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*descriptorpb.FeatureSet_EnumType",
	{Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_EnumType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type FeatureSet_RepeatedFieldEncoding = number

$.registerNamedValueType(
	"descriptorpb.FeatureSet_RepeatedFieldEncoding",
	{Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_RepeatedFieldEncoding"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*descriptorpb.FeatureSet_RepeatedFieldEncoding",
	{Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_RepeatedFieldEncoding"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type FeatureSet_Utf8Validation = number

$.registerNamedValueType(
	"descriptorpb.FeatureSet_Utf8Validation",
	{Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_Utf8Validation"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*descriptorpb.FeatureSet_Utf8Validation",
	{Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_Utf8Validation"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type FeatureSet_MessageEncoding = number

$.registerNamedValueType(
	"descriptorpb.FeatureSet_MessageEncoding",
	{Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_MessageEncoding"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*descriptorpb.FeatureSet_MessageEncoding",
	{Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_MessageEncoding"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type FeatureSet_JsonFormat = number

$.registerNamedValueType(
	"descriptorpb.FeatureSet_JsonFormat",
	{Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_JsonFormat"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*descriptorpb.FeatureSet_JsonFormat",
	{Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_JsonFormat"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type GeneratedCodeInfo_Annotation_Semantic = number

$.registerNamedValueType(
	"descriptorpb.GeneratedCodeInfo_Annotation_Semantic",
	{Descriptor: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.GeneratedCodeInfo_Annotation_Semantic"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*descriptorpb.GeneratedCodeInfo_Annotation_Semantic",
	{Descriptor: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.GeneratedCodeInfo_Annotation_Semantic"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export class FileDescriptorSet {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get File(): $.Slice<FileDescriptorProto | $.VarRef<FileDescriptorProto> | null> {
		return this._fields.File
	}

	public set File(value: $.Slice<FileDescriptorProto | $.VarRef<FileDescriptorProto> | null>) {
		this._fields.File = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		File: $.Slice<FileDescriptorProto | $.VarRef<FileDescriptorProto> | null>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, File?: $.Slice<FileDescriptorProto | $.VarRef<FileDescriptorProto> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			File: init?.File ?? (null! as $.Slice<FileDescriptorProto | $.VarRef<FileDescriptorProto> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FileDescriptorSet {
		return new FileDescriptorSet(this, true)
	}

	public __goscriptAssign(source: FileDescriptorSet): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.File = values.File
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([0])]
	}

	public GetFile(): $.Slice<FileDescriptorProto | $.VarRef<FileDescriptorProto> | null> {
		const x: FileDescriptorSet | $.VarRef<FileDescriptorSet> | null = this;
		if (x != null) {
			return $.pointerValue<FileDescriptorSet>(x).File
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: FileDescriptorSet | $.VarRef<FileDescriptorSet> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 0)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FileDescriptorSet", /* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorSet")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.FileDescriptorSet", /* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorSet")))
	}

	public Reset(): void {
		let x: FileDescriptorSet | $.VarRef<FileDescriptorSet> | null = this;
		$.assignStruct($.pointerValue<FileDescriptorSet>(x), $.markAsStructValue(new FileDescriptorSet()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 0)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FileDescriptorSet", /* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorSet")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: FileDescriptorSet | $.VarRef<FileDescriptorSet> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.FileDescriptorSet", /* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorSet")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.FileDescriptorSet",
		() => new FileDescriptorSet(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetFile", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorProto")) }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		FileDescriptorSet,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "File", key: "File", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorProto")), tag: "protobuf:\"bytes,1,rep,name=file\" json:\"file,omitempty\"" }]
	)
}

export class FileDescriptorProto {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Name(): $.VarRef<string> | null {
		return this._fields.Name
	}

	public set Name(value: $.VarRef<string> | null) {
		this._fields.Name = value
	}

	public get Package(): $.VarRef<string> | null {
		return this._fields.Package
	}

	public set Package(value: $.VarRef<string> | null) {
		this._fields.Package = value
	}

	// Names of files imported by this file.
	public get Dependency(): $.Slice<string> {
		return this._fields.Dependency
	}

	public set Dependency(value: $.Slice<string>) {
		this._fields.Dependency = value
	}

	// Indexes of the public imported files in the dependency list above.
	public get PublicDependency(): $.Slice<number> {
		return this._fields.PublicDependency
	}

	public set PublicDependency(value: $.Slice<number>) {
		this._fields.PublicDependency = value
	}

	// Indexes of the weak imported files in the dependency list.
	// For Google-internal migration only. Do not use.
	public get WeakDependency(): $.Slice<number> {
		return this._fields.WeakDependency
	}

	public set WeakDependency(value: $.Slice<number>) {
		this._fields.WeakDependency = value
	}

	// All top-level definitions in this file.
	public get MessageType(): $.Slice<DescriptorProto | $.VarRef<DescriptorProto> | null> {
		return this._fields.MessageType
	}

	public set MessageType(value: $.Slice<DescriptorProto | $.VarRef<DescriptorProto> | null>) {
		this._fields.MessageType = value
	}

	public get EnumType(): $.Slice<EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null> {
		return this._fields.EnumType
	}

	public set EnumType(value: $.Slice<EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null>) {
		this._fields.EnumType = value
	}

	public get Service(): $.Slice<ServiceDescriptorProto | $.VarRef<ServiceDescriptorProto> | null> {
		return this._fields.Service
	}

	public set Service(value: $.Slice<ServiceDescriptorProto | $.VarRef<ServiceDescriptorProto> | null>) {
		this._fields.Service = value
	}

	public get Extension(): $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null> {
		return this._fields.Extension
	}

	public set Extension(value: $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null>) {
		this._fields.Extension = value
	}

	public get Options(): FileOptions | $.VarRef<FileOptions> | null {
		return this._fields.Options
	}

	public set Options(value: FileOptions | $.VarRef<FileOptions> | null) {
		this._fields.Options = value
	}

	// This field contains optional information about the original source code.
	// You may safely remove this entire field without harming runtime
	// functionality of the descriptors -- the information is needed only by
	// development tools.
	public get SourceCodeInfo(): SourceCodeInfo | $.VarRef<SourceCodeInfo> | null {
		return this._fields.SourceCodeInfo
	}

	public set SourceCodeInfo(value: SourceCodeInfo | $.VarRef<SourceCodeInfo> | null) {
		this._fields.SourceCodeInfo = value
	}

	// The syntax of the proto file.
	// The supported values are "proto2", "proto3", and "editions".
	//
	// If `edition` is present, this value must be "editions".
	public get Syntax(): $.VarRef<string> | null {
		return this._fields.Syntax
	}

	public set Syntax(value: $.VarRef<string> | null) {
		this._fields.Syntax = value
	}

	// The edition of the proto file.
	public get Edition(): $.VarRef<Edition> | null {
		return this._fields.Edition
	}

	public set Edition(value: $.VarRef<Edition> | null) {
		this._fields.Edition = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Name: $.VarRef<string> | null
		Package: $.VarRef<string> | null
		Dependency: $.Slice<string>
		PublicDependency: $.Slice<number>
		WeakDependency: $.Slice<number>
		MessageType: $.Slice<DescriptorProto | $.VarRef<DescriptorProto> | null>
		EnumType: $.Slice<EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null>
		Service: $.Slice<ServiceDescriptorProto | $.VarRef<ServiceDescriptorProto> | null>
		Extension: $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null>
		Options: FileOptions | $.VarRef<FileOptions> | null
		SourceCodeInfo: SourceCodeInfo | $.VarRef<SourceCodeInfo> | null
		Syntax: $.VarRef<string> | null
		Edition: $.VarRef<Edition> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Name?: $.VarRef<string> | null, Package?: $.VarRef<string> | null, Dependency?: $.Slice<string>, PublicDependency?: $.Slice<number>, WeakDependency?: $.Slice<number>, MessageType?: $.Slice<DescriptorProto | $.VarRef<DescriptorProto> | null>, EnumType?: $.Slice<EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null>, Service?: $.Slice<ServiceDescriptorProto | $.VarRef<ServiceDescriptorProto> | null>, Extension?: $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null>, Options?: FileOptions | $.VarRef<FileOptions> | null, SourceCodeInfo?: SourceCodeInfo | $.VarRef<SourceCodeInfo> | null, Syntax?: $.VarRef<string> | null, Edition?: $.VarRef<Edition> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Name: init?.Name ?? (null! as $.VarRef<string> | null),
			Package: init?.Package ?? (null! as $.VarRef<string> | null),
			Dependency: init?.Dependency ?? (null! as $.Slice<string>),
			PublicDependency: init?.PublicDependency ?? (null! as $.Slice<number>),
			WeakDependency: init?.WeakDependency ?? (null! as $.Slice<number>),
			MessageType: init?.MessageType ?? (null! as $.Slice<DescriptorProto | $.VarRef<DescriptorProto> | null>),
			EnumType: init?.EnumType ?? (null! as $.Slice<EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null>),
			Service: init?.Service ?? (null! as $.Slice<ServiceDescriptorProto | $.VarRef<ServiceDescriptorProto> | null>),
			Extension: init?.Extension ?? (null! as $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null>),
			Options: init?.Options ?? (null! as FileOptions | $.VarRef<FileOptions> | null),
			SourceCodeInfo: init?.SourceCodeInfo ?? (null! as SourceCodeInfo | $.VarRef<SourceCodeInfo> | null),
			Syntax: init?.Syntax ?? (null! as $.VarRef<string> | null),
			Edition: init?.Edition ?? (null! as $.VarRef<Edition> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FileDescriptorProto {
		return new FileDescriptorProto(this, true)
	}

	public __goscriptAssign(source: FileDescriptorProto): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Name = values.Name
		target.Package = values.Package
		target.Dependency = values.Dependency
		target.PublicDependency = values.PublicDependency
		target.WeakDependency = values.WeakDependency
		target.MessageType = values.MessageType
		target.EnumType = values.EnumType
		target.Service = values.Service
		target.Extension = values.Extension
		target.Options = values.Options
		target.SourceCodeInfo = values.SourceCodeInfo
		target.Syntax = values.Syntax
		target.Edition = values.Edition
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([1])]
	}

	public GetDependency(): $.Slice<string> {
		const x: FileDescriptorProto | $.VarRef<FileDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<FileDescriptorProto>(x).Dependency
		}
		return null
	}

	public GetEdition(): Edition {
		const x: FileDescriptorProto | $.VarRef<FileDescriptorProto> | null = this;
		const x$: FileDescriptorProto = x == null ? $.pointerTarget<FileDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileDescriptorProto>(x)
		if ((x != null) && ((x$ as FileDescriptorProto).Edition != null)) {
			return $.pointerValue<Edition>((x$ as FileDescriptorProto).Edition)
		}
		return 0
	}

	public GetEnumType(): $.Slice<EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null> {
		const x: FileDescriptorProto | $.VarRef<FileDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<FileDescriptorProto>(x).EnumType
		}
		return null
	}

	public GetExtension(): $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null> {
		const x: FileDescriptorProto | $.VarRef<FileDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<FileDescriptorProto>(x).Extension
		}
		return null
	}

	public GetMessageType(): $.Slice<DescriptorProto | $.VarRef<DescriptorProto> | null> {
		const x: FileDescriptorProto | $.VarRef<FileDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<FileDescriptorProto>(x).MessageType
		}
		return null
	}

	public GetName(): string {
		const x: FileDescriptorProto | $.VarRef<FileDescriptorProto> | null = this;
		const x$: FileDescriptorProto = x == null ? $.pointerTarget<FileDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileDescriptorProto>(x)
		if ((x != null) && ((x$ as FileDescriptorProto).Name != null)) {
			return $.pointerValue<string>((x$ as FileDescriptorProto).Name)
		}
		return ""
	}

	public GetOptions(): FileOptions | $.VarRef<FileOptions> | null {
		const x: FileDescriptorProto | $.VarRef<FileDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<FileDescriptorProto>(x).Options
		}
		return null
	}

	public GetPackage(): string {
		const x: FileDescriptorProto | $.VarRef<FileDescriptorProto> | null = this;
		const x$: FileDescriptorProto = x == null ? $.pointerTarget<FileDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileDescriptorProto>(x)
		if ((x != null) && ((x$ as FileDescriptorProto).Package != null)) {
			return $.pointerValue<string>((x$ as FileDescriptorProto).Package)
		}
		return ""
	}

	public GetPublicDependency(): $.Slice<number> {
		const x: FileDescriptorProto | $.VarRef<FileDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<FileDescriptorProto>(x).PublicDependency
		}
		return null
	}

	public GetService(): $.Slice<ServiceDescriptorProto | $.VarRef<ServiceDescriptorProto> | null> {
		const x: FileDescriptorProto | $.VarRef<FileDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<FileDescriptorProto>(x).Service
		}
		return null
	}

	public GetSourceCodeInfo(): SourceCodeInfo | $.VarRef<SourceCodeInfo> | null {
		const x: FileDescriptorProto | $.VarRef<FileDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<FileDescriptorProto>(x).SourceCodeInfo
		}
		return null
	}

	public GetSyntax(): string {
		const x: FileDescriptorProto | $.VarRef<FileDescriptorProto> | null = this;
		const x$: FileDescriptorProto = x == null ? $.pointerTarget<FileDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileDescriptorProto>(x)
		if ((x != null) && ((x$ as FileDescriptorProto).Syntax != null)) {
			return $.pointerValue<string>((x$ as FileDescriptorProto).Syntax)
		}
		return ""
	}

	public GetWeakDependency(): $.Slice<number> {
		const x: FileDescriptorProto | $.VarRef<FileDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<FileDescriptorProto>(x).WeakDependency
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: FileDescriptorProto | $.VarRef<FileDescriptorProto> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 1)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FileDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorProto")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.FileDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorProto")))
	}

	public Reset(): void {
		let x: FileDescriptorProto | $.VarRef<FileDescriptorProto> | null = this;
		$.assignStruct($.pointerValue<FileDescriptorProto>(x), $.markAsStructValue(new FileDescriptorProto()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 1)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FileDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorProto")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: FileDescriptorProto | $.VarRef<FileDescriptorProto> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.FileDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorProto")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.FileDescriptorProto",
		() => new FileDescriptorProto(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDependency", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "GetEdition", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition") }], pointerReceiver: true }, { name: "GetEnumType", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto")) }], pointerReceiver: true }, { name: "GetExtension", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.FieldDescriptorProto")) }], pointerReceiver: true }, { name: "GetMessageType", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto")) }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetOptions", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.FileOptions") }], pointerReceiver: true }, { name: "GetPackage", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetPublicDependency", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")) }], pointerReceiver: true }, { name: "GetService", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.ServiceDescriptorProto")) }], pointerReceiver: true }, { name: "GetSourceCodeInfo", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.SourceCodeInfo") }], pointerReceiver: true }, { name: "GetSyntax", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetWeakDependency", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")) }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		FileDescriptorProto,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Name", key: "Name", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,1,opt,name=name\" json:\"name,omitempty\"" }, { name: "Package", key: "Package", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,2,opt,name=package\" json:\"package,omitempty\"" }, { name: "Dependency", key: "Dependency", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,3,rep,name=dependency\" json:\"dependency,omitempty\"" }, { name: "PublicDependency", key: "PublicDependency", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,10,rep,name=public_dependency,json=publicDependency\" json:\"public_dependency,omitempty\"" }, { name: "WeakDependency", key: "WeakDependency", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,11,rep,name=weak_dependency,json=weakDependency\" json:\"weak_dependency,omitempty\"" }, { name: "MessageType", key: "MessageType", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto")), tag: "protobuf:\"bytes,4,rep,name=message_type,json=messageType\" json:\"message_type,omitempty\"" }, { name: "EnumType", key: "EnumType", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto")), tag: "protobuf:\"bytes,5,rep,name=enum_type,json=enumType\" json:\"enum_type,omitempty\"" }, { name: "Service", key: "Service", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.ServiceDescriptorProto")), tag: "protobuf:\"bytes,6,rep,name=service\" json:\"service,omitempty\"" }, { name: "Extension", key: "Extension", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.FieldDescriptorProto")), tag: "protobuf:\"bytes,7,rep,name=extension\" json:\"extension,omitempty\"" }, { name: "Options", key: "Options", type: /* @__PURE__ */ $.pointerType("descriptorpb.FileOptions"), tag: "protobuf:\"bytes,8,opt,name=options\" json:\"options,omitempty\"" }, { name: "SourceCodeInfo", key: "SourceCodeInfo", type: /* @__PURE__ */ $.pointerType("descriptorpb.SourceCodeInfo"), tag: "protobuf:\"bytes,9,opt,name=source_code_info,json=sourceCodeInfo\" json:\"source_code_info,omitempty\"" }, { name: "Syntax", key: "Syntax", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,12,opt,name=syntax\" json:\"syntax,omitempty\"" }, { name: "Edition", key: "Edition", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition")), tag: "protobuf:\"varint,14,opt,name=edition,enum=google.protobuf.Edition\" json:\"edition,omitempty\"" }]
	)
}

export class DescriptorProto {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Name(): $.VarRef<string> | null {
		return this._fields.Name
	}

	public set Name(value: $.VarRef<string> | null) {
		this._fields.Name = value
	}

	public get Field(): $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null> {
		return this._fields.Field
	}

	public set Field(value: $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null>) {
		this._fields.Field = value
	}

	public get Extension(): $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null> {
		return this._fields.Extension
	}

	public set Extension(value: $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null>) {
		this._fields.Extension = value
	}

	public get NestedType(): $.Slice<DescriptorProto | $.VarRef<DescriptorProto> | null> {
		return this._fields.NestedType
	}

	public set NestedType(value: $.Slice<DescriptorProto | $.VarRef<DescriptorProto> | null>) {
		this._fields.NestedType = value
	}

	public get EnumType(): $.Slice<EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null> {
		return this._fields.EnumType
	}

	public set EnumType(value: $.Slice<EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null>) {
		this._fields.EnumType = value
	}

	public get ExtensionRange(): $.Slice<DescriptorProto_ExtensionRange | $.VarRef<DescriptorProto_ExtensionRange> | null> {
		return this._fields.ExtensionRange
	}

	public set ExtensionRange(value: $.Slice<DescriptorProto_ExtensionRange | $.VarRef<DescriptorProto_ExtensionRange> | null>) {
		this._fields.ExtensionRange = value
	}

	public get OneofDecl(): $.Slice<OneofDescriptorProto | $.VarRef<OneofDescriptorProto> | null> {
		return this._fields.OneofDecl
	}

	public set OneofDecl(value: $.Slice<OneofDescriptorProto | $.VarRef<OneofDescriptorProto> | null>) {
		this._fields.OneofDecl = value
	}

	public get Options(): MessageOptions | $.VarRef<MessageOptions> | null {
		return this._fields.Options
	}

	public set Options(value: MessageOptions | $.VarRef<MessageOptions> | null) {
		this._fields.Options = value
	}

	public get ReservedRange(): $.Slice<DescriptorProto_ReservedRange | $.VarRef<DescriptorProto_ReservedRange> | null> {
		return this._fields.ReservedRange
	}

	public set ReservedRange(value: $.Slice<DescriptorProto_ReservedRange | $.VarRef<DescriptorProto_ReservedRange> | null>) {
		this._fields.ReservedRange = value
	}

	// Reserved field names, which may not be used by fields in the same message.
	// A given name may only be reserved once.
	public get ReservedName(): $.Slice<string> {
		return this._fields.ReservedName
	}

	public set ReservedName(value: $.Slice<string>) {
		this._fields.ReservedName = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Name: $.VarRef<string> | null
		Field: $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null>
		Extension: $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null>
		NestedType: $.Slice<DescriptorProto | $.VarRef<DescriptorProto> | null>
		EnumType: $.Slice<EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null>
		ExtensionRange: $.Slice<DescriptorProto_ExtensionRange | $.VarRef<DescriptorProto_ExtensionRange> | null>
		OneofDecl: $.Slice<OneofDescriptorProto | $.VarRef<OneofDescriptorProto> | null>
		Options: MessageOptions | $.VarRef<MessageOptions> | null
		ReservedRange: $.Slice<DescriptorProto_ReservedRange | $.VarRef<DescriptorProto_ReservedRange> | null>
		ReservedName: $.Slice<string>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Name?: $.VarRef<string> | null, Field?: $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null>, Extension?: $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null>, NestedType?: $.Slice<DescriptorProto | $.VarRef<DescriptorProto> | null>, EnumType?: $.Slice<EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null>, ExtensionRange?: $.Slice<DescriptorProto_ExtensionRange | $.VarRef<DescriptorProto_ExtensionRange> | null>, OneofDecl?: $.Slice<OneofDescriptorProto | $.VarRef<OneofDescriptorProto> | null>, Options?: MessageOptions | $.VarRef<MessageOptions> | null, ReservedRange?: $.Slice<DescriptorProto_ReservedRange | $.VarRef<DescriptorProto_ReservedRange> | null>, ReservedName?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Name: init?.Name ?? (null! as $.VarRef<string> | null),
			Field: init?.Field ?? (null! as $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null>),
			Extension: init?.Extension ?? (null! as $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null>),
			NestedType: init?.NestedType ?? (null! as $.Slice<DescriptorProto | $.VarRef<DescriptorProto> | null>),
			EnumType: init?.EnumType ?? (null! as $.Slice<EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null>),
			ExtensionRange: init?.ExtensionRange ?? (null! as $.Slice<DescriptorProto_ExtensionRange | $.VarRef<DescriptorProto_ExtensionRange> | null>),
			OneofDecl: init?.OneofDecl ?? (null! as $.Slice<OneofDescriptorProto | $.VarRef<OneofDescriptorProto> | null>),
			Options: init?.Options ?? (null! as MessageOptions | $.VarRef<MessageOptions> | null),
			ReservedRange: init?.ReservedRange ?? (null! as $.Slice<DescriptorProto_ReservedRange | $.VarRef<DescriptorProto_ReservedRange> | null>),
			ReservedName: init?.ReservedName ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DescriptorProto {
		return new DescriptorProto(this, true)
	}

	public __goscriptAssign(source: DescriptorProto): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Name = values.Name
		target.Field = values.Field
		target.Extension = values.Extension
		target.NestedType = values.NestedType
		target.EnumType = values.EnumType
		target.ExtensionRange = values.ExtensionRange
		target.OneofDecl = values.OneofDecl
		target.Options = values.Options
		target.ReservedRange = values.ReservedRange
		target.ReservedName = values.ReservedName
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([2])]
	}

	public GetEnumType(): $.Slice<EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null> {
		const x: DescriptorProto | $.VarRef<DescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<DescriptorProto>(x).EnumType
		}
		return null
	}

	public GetExtension(): $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null> {
		const x: DescriptorProto | $.VarRef<DescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<DescriptorProto>(x).Extension
		}
		return null
	}

	public GetExtensionRange(): $.Slice<DescriptorProto_ExtensionRange | $.VarRef<DescriptorProto_ExtensionRange> | null> {
		const x: DescriptorProto | $.VarRef<DescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<DescriptorProto>(x).ExtensionRange
		}
		return null
	}

	public GetField(): $.Slice<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null> {
		const x: DescriptorProto | $.VarRef<DescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<DescriptorProto>(x).Field
		}
		return null
	}

	public GetName(): string {
		const x: DescriptorProto | $.VarRef<DescriptorProto> | null = this;
		const x$: DescriptorProto = x == null ? $.pointerTarget<DescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<DescriptorProto>(x)
		if ((x != null) && ((x$ as DescriptorProto).Name != null)) {
			return $.pointerValue<string>((x$ as DescriptorProto).Name)
		}
		return ""
	}

	public GetNestedType(): $.Slice<DescriptorProto | $.VarRef<DescriptorProto> | null> {
		const x: DescriptorProto | $.VarRef<DescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<DescriptorProto>(x).NestedType
		}
		return null
	}

	public GetOneofDecl(): $.Slice<OneofDescriptorProto | $.VarRef<OneofDescriptorProto> | null> {
		const x: DescriptorProto | $.VarRef<DescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<DescriptorProto>(x).OneofDecl
		}
		return null
	}

	public GetOptions(): MessageOptions | $.VarRef<MessageOptions> | null {
		const x: DescriptorProto | $.VarRef<DescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<DescriptorProto>(x).Options
		}
		return null
	}

	public GetReservedName(): $.Slice<string> {
		const x: DescriptorProto | $.VarRef<DescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<DescriptorProto>(x).ReservedName
		}
		return null
	}

	public GetReservedRange(): $.Slice<DescriptorProto_ReservedRange | $.VarRef<DescriptorProto_ReservedRange> | null> {
		const x: DescriptorProto | $.VarRef<DescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<DescriptorProto>(x).ReservedRange
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: DescriptorProto | $.VarRef<DescriptorProto> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 2)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.DescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.DescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto")))
	}

	public Reset(): void {
		let x: DescriptorProto | $.VarRef<DescriptorProto> | null = this;
		$.assignStruct($.pointerValue<DescriptorProto>(x), $.markAsStructValue(new DescriptorProto()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 2)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.DescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: DescriptorProto | $.VarRef<DescriptorProto> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.DescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.DescriptorProto",
		() => new DescriptorProto(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetEnumType", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto")) }], pointerReceiver: true }, { name: "GetExtension", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.FieldDescriptorProto")) }], pointerReceiver: true }, { name: "GetExtensionRange", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto_ExtensionRange")) }], pointerReceiver: true }, { name: "GetField", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.FieldDescriptorProto")) }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetNestedType", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto")) }], pointerReceiver: true }, { name: "GetOneofDecl", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.OneofDescriptorProto")) }], pointerReceiver: true }, { name: "GetOptions", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.MessageOptions") }], pointerReceiver: true }, { name: "GetReservedName", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "GetReservedRange", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto_ReservedRange")) }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		DescriptorProto,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Name", key: "Name", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,1,opt,name=name\" json:\"name,omitempty\"" }, { name: "Field", key: "Field", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.FieldDescriptorProto")), tag: "protobuf:\"bytes,2,rep,name=field\" json:\"field,omitempty\"" }, { name: "Extension", key: "Extension", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.FieldDescriptorProto")), tag: "protobuf:\"bytes,6,rep,name=extension\" json:\"extension,omitempty\"" }, { name: "NestedType", key: "NestedType", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto")), tag: "protobuf:\"bytes,3,rep,name=nested_type,json=nestedType\" json:\"nested_type,omitempty\"" }, { name: "EnumType", key: "EnumType", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto")), tag: "protobuf:\"bytes,4,rep,name=enum_type,json=enumType\" json:\"enum_type,omitempty\"" }, { name: "ExtensionRange", key: "ExtensionRange", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto_ExtensionRange")), tag: "protobuf:\"bytes,5,rep,name=extension_range,json=extensionRange\" json:\"extension_range,omitempty\"" }, { name: "OneofDecl", key: "OneofDecl", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.OneofDescriptorProto")), tag: "protobuf:\"bytes,8,rep,name=oneof_decl,json=oneofDecl\" json:\"oneof_decl,omitempty\"" }, { name: "Options", key: "Options", type: /* @__PURE__ */ $.pointerType("descriptorpb.MessageOptions"), tag: "protobuf:\"bytes,7,opt,name=options\" json:\"options,omitempty\"" }, { name: "ReservedRange", key: "ReservedRange", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto_ReservedRange")), tag: "protobuf:\"bytes,9,rep,name=reserved_range,json=reservedRange\" json:\"reserved_range,omitempty\"" }, { name: "ReservedName", key: "ReservedName", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,10,rep,name=reserved_name,json=reservedName\" json:\"reserved_name,omitempty\"" }]
	)
}

export class ExtensionRangeOptions {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get extensionFields(): protoimpl.ExtensionFields {
		return this._fields.extensionFields
	}

	public set extensionFields(value: protoimpl.ExtensionFields) {
		this._fields.extensionFields = value
	}

	// The parser stores options it doesn't recognize here. See above.
	public get UninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		return this._fields.UninterpretedOption
	}

	public set UninterpretedOption(value: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>) {
		this._fields.UninterpretedOption = value
	}

	// For external users: DO NOT USE. We are in the process of open sourcing
	// extension declaration and executing internal cleanups before it can be
	// used externally.
	public get Declaration(): $.Slice<ExtensionRangeOptions_Declaration | $.VarRef<ExtensionRangeOptions_Declaration> | null> {
		return this._fields.Declaration
	}

	public set Declaration(value: $.Slice<ExtensionRangeOptions_Declaration | $.VarRef<ExtensionRangeOptions_Declaration> | null>) {
		this._fields.Declaration = value
	}

	// Any features defined in the specific edition.
	public get Features(): FeatureSet | $.VarRef<FeatureSet> | null {
		return this._fields.Features
	}

	public set Features(value: FeatureSet | $.VarRef<FeatureSet> | null) {
		this._fields.Features = value
	}

	// The verification state of the range.
	// TODO: flip the default to DECLARATION once all empty ranges
	// are marked as UNVERIFIED.
	public get Verification(): $.VarRef<ExtensionRangeOptions_VerificationState> | null {
		return this._fields.Verification
	}

	public set Verification(value: $.VarRef<ExtensionRangeOptions_VerificationState> | null) {
		this._fields.Verification = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		extensionFields: protoimpl.ExtensionFields
		UninterpretedOption: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>
		Declaration: $.Slice<ExtensionRangeOptions_Declaration | $.VarRef<ExtensionRangeOptions_Declaration> | null>
		Features: FeatureSet | $.VarRef<FeatureSet> | null
		Verification: $.VarRef<ExtensionRangeOptions_VerificationState> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, extensionFields?: protoimpl.ExtensionFields, UninterpretedOption?: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>, Declaration?: $.Slice<ExtensionRangeOptions_Declaration | $.VarRef<ExtensionRangeOptions_Declaration> | null>, Features?: FeatureSet | $.VarRef<FeatureSet> | null, Verification?: $.VarRef<ExtensionRangeOptions_VerificationState> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			extensionFields: init?.extensionFields ?? (null! as protoimpl.ExtensionFields),
			UninterpretedOption: init?.UninterpretedOption ?? (null! as $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>),
			Declaration: init?.Declaration ?? (null! as $.Slice<ExtensionRangeOptions_Declaration | $.VarRef<ExtensionRangeOptions_Declaration> | null>),
			Features: init?.Features ?? (null! as FeatureSet | $.VarRef<FeatureSet> | null),
			Verification: init?.Verification ?? (null! as $.VarRef<ExtensionRangeOptions_VerificationState> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExtensionRangeOptions {
		return new ExtensionRangeOptions(this, true)
	}

	public __goscriptAssign(source: ExtensionRangeOptions): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.extensionFields = values.extensionFields
		target.UninterpretedOption = values.UninterpretedOption
		target.Declaration = values.Declaration
		target.Features = values.Features
		target.Verification = values.Verification
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([3])]
	}

	public GetDeclaration(): $.Slice<ExtensionRangeOptions_Declaration | $.VarRef<ExtensionRangeOptions_Declaration> | null> {
		const x: ExtensionRangeOptions | $.VarRef<ExtensionRangeOptions> | null = this;
		if (x != null) {
			return $.pointerValue<ExtensionRangeOptions>(x).Declaration
		}
		return null
	}

	public GetFeatures(): FeatureSet | $.VarRef<FeatureSet> | null {
		const x: ExtensionRangeOptions | $.VarRef<ExtensionRangeOptions> | null = this;
		if (x != null) {
			return $.pointerValue<ExtensionRangeOptions>(x).Features
		}
		return null
	}

	public GetUninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		const x: ExtensionRangeOptions | $.VarRef<ExtensionRangeOptions> | null = this;
		if (x != null) {
			return $.pointerValue<ExtensionRangeOptions>(x).UninterpretedOption
		}
		return null
	}

	public GetVerification(): ExtensionRangeOptions_VerificationState {
		const x: ExtensionRangeOptions | $.VarRef<ExtensionRangeOptions> | null = this;
		const x$: ExtensionRangeOptions = x == null ? $.pointerTarget<ExtensionRangeOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<ExtensionRangeOptions>(x)
		if ((x != null) && ((x$ as ExtensionRangeOptions).Verification != null)) {
			return $.pointerValue<ExtensionRangeOptions_VerificationState>((x$ as ExtensionRangeOptions).Verification)
		}
		return 1
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: ExtensionRangeOptions | $.VarRef<ExtensionRangeOptions> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 3)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.ExtensionRangeOptions", /* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.ExtensionRangeOptions", /* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions")))
	}

	public Reset(): void {
		let x: ExtensionRangeOptions | $.VarRef<ExtensionRangeOptions> | null = this;
		$.assignStruct($.pointerValue<ExtensionRangeOptions>(x), $.markAsStructValue(new ExtensionRangeOptions()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 3)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.ExtensionRangeOptions", /* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: ExtensionRangeOptions | $.VarRef<ExtensionRangeOptions> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.ExtensionRangeOptions", /* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.ExtensionRangeOptions",
		() => new ExtensionRangeOptions(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDeclaration", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions_Declaration")) }], pointerReceiver: true }, { name: "GetFeatures", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet") }], pointerReceiver: true }, { name: "GetUninterpretedOption", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")) }], pointerReceiver: true }, { name: "GetVerification", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.ExtensionRangeOptions_VerificationState") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		ExtensionRangeOptions,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "extensionFields", key: "extensionFields", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField") }, { name: "UninterpretedOption", key: "UninterpretedOption", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")), tag: "protobuf:\"bytes,999,rep,name=uninterpreted_option,json=uninterpretedOption\" json:\"uninterpreted_option,omitempty\"" }, { name: "Declaration", key: "Declaration", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions_Declaration")), tag: "protobuf:\"bytes,2,rep,name=declaration\" json:\"declaration,omitempty\"" }, { name: "Features", key: "Features", type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet"), tag: "protobuf:\"bytes,50,opt,name=features\" json:\"features,omitempty\"" }, { name: "Verification", key: "Verification", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.ExtensionRangeOptions_VerificationState")), tag: "protobuf:\"varint,3,opt,name=verification,enum=google.protobuf.ExtensionRangeOptions_VerificationState,def=1\" json:\"verification,omitempty\"" }]
	)
}

export class FieldDescriptorProto {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Name(): $.VarRef<string> | null {
		return this._fields.Name
	}

	public set Name(value: $.VarRef<string> | null) {
		this._fields.Name = value
	}

	public get Number(): $.VarRef<number> | null {
		return this._fields.Number
	}

	public set Number(value: $.VarRef<number> | null) {
		this._fields.Number = value
	}

	public get Label(): $.VarRef<FieldDescriptorProto_Label> | null {
		return this._fields.Label
	}

	public set Label(value: $.VarRef<FieldDescriptorProto_Label> | null) {
		this._fields.Label = value
	}

	// If type_name is set, this need not be set.  If both this and type_name
	// are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
	public get Type(): $.VarRef<FieldDescriptorProto_Type> | null {
		return this._fields.Type
	}

	public set Type(value: $.VarRef<FieldDescriptorProto_Type> | null) {
		this._fields.Type = value
	}

	// For message and enum types, this is the name of the type.  If the name
	// starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
	// rules are used to find the type (i.e. first the nested types within this
	// message are searched, then within the parent, on up to the root
	// namespace).
	public get TypeName(): $.VarRef<string> | null {
		return this._fields.TypeName
	}

	public set TypeName(value: $.VarRef<string> | null) {
		this._fields.TypeName = value
	}

	// For extensions, this is the name of the type being extended.  It is
	// resolved in the same manner as type_name.
	public get Extendee(): $.VarRef<string> | null {
		return this._fields.Extendee
	}

	public set Extendee(value: $.VarRef<string> | null) {
		this._fields.Extendee = value
	}

	// For numeric types, contains the original text representation of the value.
	// For booleans, "true" or "false".
	// For strings, contains the default text contents (not escaped in any way).
	// For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
	public get DefaultValue(): $.VarRef<string> | null {
		return this._fields.DefaultValue
	}

	public set DefaultValue(value: $.VarRef<string> | null) {
		this._fields.DefaultValue = value
	}

	// If set, gives the index of a oneof in the containing type's oneof_decl
	// list.  This field is a member of that oneof.
	public get OneofIndex(): $.VarRef<number> | null {
		return this._fields.OneofIndex
	}

	public set OneofIndex(value: $.VarRef<number> | null) {
		this._fields.OneofIndex = value
	}

	// JSON name of this field. The value is set by protocol compiler. If the
	// user has set a "json_name" option on this field, that option's value
	// will be used. Otherwise, it's deduced from the field's name by converting
	// it to camelCase.
	public get JsonName(): $.VarRef<string> | null {
		return this._fields.JsonName
	}

	public set JsonName(value: $.VarRef<string> | null) {
		this._fields.JsonName = value
	}

	public get Options(): FieldOptions | $.VarRef<FieldOptions> | null {
		return this._fields.Options
	}

	public set Options(value: FieldOptions | $.VarRef<FieldOptions> | null) {
		this._fields.Options = value
	}

	// If true, this is a proto3 "optional". When a proto3 field is optional, it
	// tracks presence regardless of field type.
	//
	// When proto3_optional is true, this field must belong to a oneof to signal
	// to old proto3 clients that presence is tracked for this field. This oneof
	// is known as a "synthetic" oneof, and this field must be its sole member
	// (each proto3 optional field gets its own synthetic oneof). Synthetic oneofs
	// exist in the descriptor only, and do not generate any API. Synthetic oneofs
	// must be ordered after all "real" oneofs.
	//
	// For message fields, proto3_optional doesn't create any semantic change,
	// since non-repeated message fields always track presence. However it still
	// indicates the semantic detail of whether the user wrote "optional" or not.
	// This can be useful for round-tripping the .proto file. For consistency we
	// give message fields a synthetic oneof also, even though it is not required
	// to track presence. This is especially important because the parser can't
	// tell if a field is a message or an enum, so it must always create a
	// synthetic oneof.
	//
	// Proto2 optional fields do not set this flag, because they already indicate
	// optional with `LABEL_OPTIONAL`.
	public get Proto3Optional(): $.VarRef<boolean> | null {
		return this._fields.Proto3Optional
	}

	public set Proto3Optional(value: $.VarRef<boolean> | null) {
		this._fields.Proto3Optional = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Name: $.VarRef<string> | null
		Number: $.VarRef<number> | null
		Label: $.VarRef<FieldDescriptorProto_Label> | null
		Type: $.VarRef<FieldDescriptorProto_Type> | null
		TypeName: $.VarRef<string> | null
		Extendee: $.VarRef<string> | null
		DefaultValue: $.VarRef<string> | null
		OneofIndex: $.VarRef<number> | null
		JsonName: $.VarRef<string> | null
		Options: FieldOptions | $.VarRef<FieldOptions> | null
		Proto3Optional: $.VarRef<boolean> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Name?: $.VarRef<string> | null, Number?: $.VarRef<number> | null, Label?: $.VarRef<FieldDescriptorProto_Label> | null, Type?: $.VarRef<FieldDescriptorProto_Type> | null, TypeName?: $.VarRef<string> | null, Extendee?: $.VarRef<string> | null, DefaultValue?: $.VarRef<string> | null, OneofIndex?: $.VarRef<number> | null, JsonName?: $.VarRef<string> | null, Options?: FieldOptions | $.VarRef<FieldOptions> | null, Proto3Optional?: $.VarRef<boolean> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Name: init?.Name ?? (null! as $.VarRef<string> | null),
			Number: init?.Number ?? (null! as $.VarRef<number> | null),
			Label: init?.Label ?? (null! as $.VarRef<FieldDescriptorProto_Label> | null),
			Type: init?.Type ?? (null! as $.VarRef<FieldDescriptorProto_Type> | null),
			TypeName: init?.TypeName ?? (null! as $.VarRef<string> | null),
			Extendee: init?.Extendee ?? (null! as $.VarRef<string> | null),
			DefaultValue: init?.DefaultValue ?? (null! as $.VarRef<string> | null),
			OneofIndex: init?.OneofIndex ?? (null! as $.VarRef<number> | null),
			JsonName: init?.JsonName ?? (null! as $.VarRef<string> | null),
			Options: init?.Options ?? (null! as FieldOptions | $.VarRef<FieldOptions> | null),
			Proto3Optional: init?.Proto3Optional ?? (null! as $.VarRef<boolean> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FieldDescriptorProto {
		return new FieldDescriptorProto(this, true)
	}

	public __goscriptAssign(source: FieldDescriptorProto): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Name = values.Name
		target.Number = values.Number
		target.Label = values.Label
		target.Type = values.Type
		target.TypeName = values.TypeName
		target.Extendee = values.Extendee
		target.DefaultValue = values.DefaultValue
		target.OneofIndex = values.OneofIndex
		target.JsonName = values.JsonName
		target.Options = values.Options
		target.Proto3Optional = values.Proto3Optional
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([4])]
	}

	public GetDefaultValue(): string {
		const x: FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null = this;
		const x$: FieldDescriptorProto = x == null ? $.pointerTarget<FieldDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldDescriptorProto>(x)
		if ((x != null) && ((x$ as FieldDescriptorProto).DefaultValue != null)) {
			return $.pointerValue<string>((x$ as FieldDescriptorProto).DefaultValue)
		}
		return ""
	}

	public GetExtendee(): string {
		const x: FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null = this;
		const x$: FieldDescriptorProto = x == null ? $.pointerTarget<FieldDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldDescriptorProto>(x)
		if ((x != null) && ((x$ as FieldDescriptorProto).Extendee != null)) {
			return $.pointerValue<string>((x$ as FieldDescriptorProto).Extendee)
		}
		return ""
	}

	public GetJsonName(): string {
		const x: FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null = this;
		const x$: FieldDescriptorProto = x == null ? $.pointerTarget<FieldDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldDescriptorProto>(x)
		if ((x != null) && ((x$ as FieldDescriptorProto).JsonName != null)) {
			return $.pointerValue<string>((x$ as FieldDescriptorProto).JsonName)
		}
		return ""
	}

	public GetLabel(): FieldDescriptorProto_Label {
		const x: FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null = this;
		const x$: FieldDescriptorProto = x == null ? $.pointerTarget<FieldDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldDescriptorProto>(x)
		if ((x != null) && ((x$ as FieldDescriptorProto).Label != null)) {
			return $.pointerValue<FieldDescriptorProto_Label>((x$ as FieldDescriptorProto).Label)
		}
		return 1
	}

	public GetName(): string {
		const x: FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null = this;
		const x$: FieldDescriptorProto = x == null ? $.pointerTarget<FieldDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldDescriptorProto>(x)
		if ((x != null) && ((x$ as FieldDescriptorProto).Name != null)) {
			return $.pointerValue<string>((x$ as FieldDescriptorProto).Name)
		}
		return ""
	}

	public GetNumber(): number {
		const x: FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null = this;
		const x$: FieldDescriptorProto = x == null ? $.pointerTarget<FieldDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldDescriptorProto>(x)
		if ((x != null) && ((x$ as FieldDescriptorProto).Number != null)) {
			return $.pointerValue<number>((x$ as FieldDescriptorProto).Number)
		}
		return 0
	}

	public GetOneofIndex(): number {
		const x: FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null = this;
		const x$: FieldDescriptorProto = x == null ? $.pointerTarget<FieldDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldDescriptorProto>(x)
		if ((x != null) && ((x$ as FieldDescriptorProto).OneofIndex != null)) {
			return $.pointerValue<number>((x$ as FieldDescriptorProto).OneofIndex)
		}
		return 0
	}

	public GetOptions(): FieldOptions | $.VarRef<FieldOptions> | null {
		const x: FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<FieldDescriptorProto>(x).Options
		}
		return null
	}

	public GetProto3Optional(): boolean {
		const x: FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null = this;
		const x$: FieldDescriptorProto = x == null ? $.pointerTarget<FieldDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldDescriptorProto>(x)
		if ((x != null) && ((x$ as FieldDescriptorProto).Proto3Optional != null)) {
			return $.pointerValue<boolean>((x$ as FieldDescriptorProto).Proto3Optional)
		}
		return false
	}

	public GetType(): FieldDescriptorProto_Type {
		const x: FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null = this;
		const x$: FieldDescriptorProto = x == null ? $.pointerTarget<FieldDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldDescriptorProto>(x)
		if ((x != null) && ((x$ as FieldDescriptorProto).Type != null)) {
			return $.pointerValue<FieldDescriptorProto_Type>((x$ as FieldDescriptorProto).Type)
		}
		return 1
	}

	public GetTypeName(): string {
		const x: FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null = this;
		const x$: FieldDescriptorProto = x == null ? $.pointerTarget<FieldDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldDescriptorProto>(x)
		if ((x != null) && ((x$ as FieldDescriptorProto).TypeName != null)) {
			return $.pointerValue<string>((x$ as FieldDescriptorProto).TypeName)
		}
		return ""
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 4)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FieldDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.FieldDescriptorProto")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.FieldDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.FieldDescriptorProto")))
	}

	public Reset(): void {
		let x: FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null = this;
		$.assignStruct($.pointerValue<FieldDescriptorProto>(x), $.markAsStructValue(new FieldDescriptorProto()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 4)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FieldDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.FieldDescriptorProto")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.FieldDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.FieldDescriptorProto")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.FieldDescriptorProto",
		() => new FieldDescriptorProto(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDefaultValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetExtendee", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetJsonName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetLabel", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldDescriptorProto_Label") }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetNumber", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GetOneofIndex", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GetOptions", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions") }], pointerReceiver: true }, { name: "GetProto3Optional", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldDescriptorProto_Type") }], pointerReceiver: true }, { name: "GetTypeName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		FieldDescriptorProto,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Name", key: "Name", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,1,opt,name=name\" json:\"name,omitempty\"" }, { name: "Number", key: "Number", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,3,opt,name=number\" json:\"number,omitempty\"" }, { name: "Label", key: "Label", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldDescriptorProto_Label")), tag: "protobuf:\"varint,4,opt,name=label,enum=google.protobuf.FieldDescriptorProto_Label\" json:\"label,omitempty\"" }, { name: "Type", key: "Type", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldDescriptorProto_Type")), tag: "protobuf:\"varint,5,opt,name=type,enum=google.protobuf.FieldDescriptorProto_Type\" json:\"type,omitempty\"" }, { name: "TypeName", key: "TypeName", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,6,opt,name=type_name,json=typeName\" json:\"type_name,omitempty\"" }, { name: "Extendee", key: "Extendee", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,2,opt,name=extendee\" json:\"extendee,omitempty\"" }, { name: "DefaultValue", key: "DefaultValue", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,7,opt,name=default_value,json=defaultValue\" json:\"default_value,omitempty\"" }, { name: "OneofIndex", key: "OneofIndex", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,9,opt,name=oneof_index,json=oneofIndex\" json:\"oneof_index,omitempty\"" }, { name: "JsonName", key: "JsonName", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,10,opt,name=json_name,json=jsonName\" json:\"json_name,omitempty\"" }, { name: "Options", key: "Options", type: /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions"), tag: "protobuf:\"bytes,8,opt,name=options\" json:\"options,omitempty\"" }, { name: "Proto3Optional", key: "Proto3Optional", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,17,opt,name=proto3_optional,json=proto3Optional\" json:\"proto3_optional,omitempty\"" }]
	)
}

export class OneofDescriptorProto {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Name(): $.VarRef<string> | null {
		return this._fields.Name
	}

	public set Name(value: $.VarRef<string> | null) {
		this._fields.Name = value
	}

	public get Options(): OneofOptions | $.VarRef<OneofOptions> | null {
		return this._fields.Options
	}

	public set Options(value: OneofOptions | $.VarRef<OneofOptions> | null) {
		this._fields.Options = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Name: $.VarRef<string> | null
		Options: OneofOptions | $.VarRef<OneofOptions> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Name?: $.VarRef<string> | null, Options?: OneofOptions | $.VarRef<OneofOptions> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Name: init?.Name ?? (null! as $.VarRef<string> | null),
			Options: init?.Options ?? (null! as OneofOptions | $.VarRef<OneofOptions> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OneofDescriptorProto {
		return new OneofDescriptorProto(this, true)
	}

	public __goscriptAssign(source: OneofDescriptorProto): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Name = values.Name
		target.Options = values.Options
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([5])]
	}

	public GetName(): string {
		const x: OneofDescriptorProto | $.VarRef<OneofDescriptorProto> | null = this;
		const x$: OneofDescriptorProto = x == null ? $.pointerTarget<OneofDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<OneofDescriptorProto>(x)
		if ((x != null) && ((x$ as OneofDescriptorProto).Name != null)) {
			return $.pointerValue<string>((x$ as OneofDescriptorProto).Name)
		}
		return ""
	}

	public GetOptions(): OneofOptions | $.VarRef<OneofOptions> | null {
		const x: OneofDescriptorProto | $.VarRef<OneofDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<OneofDescriptorProto>(x).Options
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: OneofDescriptorProto | $.VarRef<OneofDescriptorProto> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 5)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.OneofDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.OneofDescriptorProto")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.OneofDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.OneofDescriptorProto")))
	}

	public Reset(): void {
		let x: OneofDescriptorProto | $.VarRef<OneofDescriptorProto> | null = this;
		$.assignStruct($.pointerValue<OneofDescriptorProto>(x), $.markAsStructValue(new OneofDescriptorProto()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 5)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.OneofDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.OneofDescriptorProto")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: OneofDescriptorProto | $.VarRef<OneofDescriptorProto> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.OneofDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.OneofDescriptorProto")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.OneofDescriptorProto",
		() => new OneofDescriptorProto(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetOptions", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.OneofOptions") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		OneofDescriptorProto,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Name", key: "Name", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,1,opt,name=name\" json:\"name,omitempty\"" }, { name: "Options", key: "Options", type: /* @__PURE__ */ $.pointerType("descriptorpb.OneofOptions"), tag: "protobuf:\"bytes,2,opt,name=options\" json:\"options,omitempty\"" }]
	)
}

export class EnumDescriptorProto {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Name(): $.VarRef<string> | null {
		return this._fields.Name
	}

	public set Name(value: $.VarRef<string> | null) {
		this._fields.Name = value
	}

	public get Value(): $.Slice<EnumValueDescriptorProto | $.VarRef<EnumValueDescriptorProto> | null> {
		return this._fields.Value
	}

	public set Value(value: $.Slice<EnumValueDescriptorProto | $.VarRef<EnumValueDescriptorProto> | null>) {
		this._fields.Value = value
	}

	public get Options(): EnumOptions | $.VarRef<EnumOptions> | null {
		return this._fields.Options
	}

	public set Options(value: EnumOptions | $.VarRef<EnumOptions> | null) {
		this._fields.Options = value
	}

	// Range of reserved numeric values. Reserved numeric values may not be used
	// by enum values in the same enum declaration. Reserved ranges may not
	// overlap.
	public get ReservedRange(): $.Slice<EnumDescriptorProto_EnumReservedRange | $.VarRef<EnumDescriptorProto_EnumReservedRange> | null> {
		return this._fields.ReservedRange
	}

	public set ReservedRange(value: $.Slice<EnumDescriptorProto_EnumReservedRange | $.VarRef<EnumDescriptorProto_EnumReservedRange> | null>) {
		this._fields.ReservedRange = value
	}

	// Reserved enum value names, which may not be reused. A given name may only
	// be reserved once.
	public get ReservedName(): $.Slice<string> {
		return this._fields.ReservedName
	}

	public set ReservedName(value: $.Slice<string>) {
		this._fields.ReservedName = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Name: $.VarRef<string> | null
		Value: $.Slice<EnumValueDescriptorProto | $.VarRef<EnumValueDescriptorProto> | null>
		Options: EnumOptions | $.VarRef<EnumOptions> | null
		ReservedRange: $.Slice<EnumDescriptorProto_EnumReservedRange | $.VarRef<EnumDescriptorProto_EnumReservedRange> | null>
		ReservedName: $.Slice<string>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Name?: $.VarRef<string> | null, Value?: $.Slice<EnumValueDescriptorProto | $.VarRef<EnumValueDescriptorProto> | null>, Options?: EnumOptions | $.VarRef<EnumOptions> | null, ReservedRange?: $.Slice<EnumDescriptorProto_EnumReservedRange | $.VarRef<EnumDescriptorProto_EnumReservedRange> | null>, ReservedName?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Name: init?.Name ?? (null! as $.VarRef<string> | null),
			Value: init?.Value ?? (null! as $.Slice<EnumValueDescriptorProto | $.VarRef<EnumValueDescriptorProto> | null>),
			Options: init?.Options ?? (null! as EnumOptions | $.VarRef<EnumOptions> | null),
			ReservedRange: init?.ReservedRange ?? (null! as $.Slice<EnumDescriptorProto_EnumReservedRange | $.VarRef<EnumDescriptorProto_EnumReservedRange> | null>),
			ReservedName: init?.ReservedName ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EnumDescriptorProto {
		return new EnumDescriptorProto(this, true)
	}

	public __goscriptAssign(source: EnumDescriptorProto): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Name = values.Name
		target.Value = values.Value
		target.Options = values.Options
		target.ReservedRange = values.ReservedRange
		target.ReservedName = values.ReservedName
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([6])]
	}

	public GetName(): string {
		const x: EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null = this;
		const x$: EnumDescriptorProto = x == null ? $.pointerTarget<EnumDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<EnumDescriptorProto>(x)
		if ((x != null) && ((x$ as EnumDescriptorProto).Name != null)) {
			return $.pointerValue<string>((x$ as EnumDescriptorProto).Name)
		}
		return ""
	}

	public GetOptions(): EnumOptions | $.VarRef<EnumOptions> | null {
		const x: EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<EnumDescriptorProto>(x).Options
		}
		return null
	}

	public GetReservedName(): $.Slice<string> {
		const x: EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<EnumDescriptorProto>(x).ReservedName
		}
		return null
	}

	public GetReservedRange(): $.Slice<EnumDescriptorProto_EnumReservedRange | $.VarRef<EnumDescriptorProto_EnumReservedRange> | null> {
		const x: EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<EnumDescriptorProto>(x).ReservedRange
		}
		return null
	}

	public GetValue(): $.Slice<EnumValueDescriptorProto | $.VarRef<EnumValueDescriptorProto> | null> {
		const x: EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<EnumDescriptorProto>(x).Value
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 6)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.EnumDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.EnumDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto")))
	}

	public Reset(): void {
		let x: EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null = this;
		$.assignStruct($.pointerValue<EnumDescriptorProto>(x), $.markAsStructValue(new EnumDescriptorProto()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 6)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.EnumDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.EnumDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.EnumDescriptorProto",
		() => new EnumDescriptorProto(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetOptions", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.EnumOptions") }], pointerReceiver: true }, { name: "GetReservedName", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "GetReservedRange", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto_EnumReservedRange")) }], pointerReceiver: true }, { name: "GetValue", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.EnumValueDescriptorProto")) }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		EnumDescriptorProto,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Name", key: "Name", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,1,opt,name=name\" json:\"name,omitempty\"" }, { name: "Value", key: "Value", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.EnumValueDescriptorProto")), tag: "protobuf:\"bytes,2,rep,name=value\" json:\"value,omitempty\"" }, { name: "Options", key: "Options", type: /* @__PURE__ */ $.pointerType("descriptorpb.EnumOptions"), tag: "protobuf:\"bytes,3,opt,name=options\" json:\"options,omitempty\"" }, { name: "ReservedRange", key: "ReservedRange", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto_EnumReservedRange")), tag: "protobuf:\"bytes,4,rep,name=reserved_range,json=reservedRange\" json:\"reserved_range,omitempty\"" }, { name: "ReservedName", key: "ReservedName", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,5,rep,name=reserved_name,json=reservedName\" json:\"reserved_name,omitempty\"" }]
	)
}

export class EnumValueDescriptorProto {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Name(): $.VarRef<string> | null {
		return this._fields.Name
	}

	public set Name(value: $.VarRef<string> | null) {
		this._fields.Name = value
	}

	public get Number(): $.VarRef<number> | null {
		return this._fields.Number
	}

	public set Number(value: $.VarRef<number> | null) {
		this._fields.Number = value
	}

	public get Options(): EnumValueOptions | $.VarRef<EnumValueOptions> | null {
		return this._fields.Options
	}

	public set Options(value: EnumValueOptions | $.VarRef<EnumValueOptions> | null) {
		this._fields.Options = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Name: $.VarRef<string> | null
		Number: $.VarRef<number> | null
		Options: EnumValueOptions | $.VarRef<EnumValueOptions> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Name?: $.VarRef<string> | null, Number?: $.VarRef<number> | null, Options?: EnumValueOptions | $.VarRef<EnumValueOptions> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Name: init?.Name ?? (null! as $.VarRef<string> | null),
			Number: init?.Number ?? (null! as $.VarRef<number> | null),
			Options: init?.Options ?? (null! as EnumValueOptions | $.VarRef<EnumValueOptions> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EnumValueDescriptorProto {
		return new EnumValueDescriptorProto(this, true)
	}

	public __goscriptAssign(source: EnumValueDescriptorProto): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Name = values.Name
		target.Number = values.Number
		target.Options = values.Options
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([7])]
	}

	public GetName(): string {
		const x: EnumValueDescriptorProto | $.VarRef<EnumValueDescriptorProto> | null = this;
		const x$: EnumValueDescriptorProto = x == null ? $.pointerTarget<EnumValueDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<EnumValueDescriptorProto>(x)
		if ((x != null) && ((x$ as EnumValueDescriptorProto).Name != null)) {
			return $.pointerValue<string>((x$ as EnumValueDescriptorProto).Name)
		}
		return ""
	}

	public GetNumber(): number {
		const x: EnumValueDescriptorProto | $.VarRef<EnumValueDescriptorProto> | null = this;
		const x$: EnumValueDescriptorProto = x == null ? $.pointerTarget<EnumValueDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<EnumValueDescriptorProto>(x)
		if ((x != null) && ((x$ as EnumValueDescriptorProto).Number != null)) {
			return $.pointerValue<number>((x$ as EnumValueDescriptorProto).Number)
		}
		return 0
	}

	public GetOptions(): EnumValueOptions | $.VarRef<EnumValueOptions> | null {
		const x: EnumValueDescriptorProto | $.VarRef<EnumValueDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<EnumValueDescriptorProto>(x).Options
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: EnumValueDescriptorProto | $.VarRef<EnumValueDescriptorProto> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 7)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.EnumValueDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.EnumValueDescriptorProto")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.EnumValueDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.EnumValueDescriptorProto")))
	}

	public Reset(): void {
		let x: EnumValueDescriptorProto | $.VarRef<EnumValueDescriptorProto> | null = this;
		$.assignStruct($.pointerValue<EnumValueDescriptorProto>(x), $.markAsStructValue(new EnumValueDescriptorProto()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 7)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.EnumValueDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.EnumValueDescriptorProto")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: EnumValueDescriptorProto | $.VarRef<EnumValueDescriptorProto> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.EnumValueDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.EnumValueDescriptorProto")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.EnumValueDescriptorProto",
		() => new EnumValueDescriptorProto(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetNumber", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GetOptions", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.EnumValueOptions") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		EnumValueDescriptorProto,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Name", key: "Name", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,1,opt,name=name\" json:\"name,omitempty\"" }, { name: "Number", key: "Number", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,2,opt,name=number\" json:\"number,omitempty\"" }, { name: "Options", key: "Options", type: /* @__PURE__ */ $.pointerType("descriptorpb.EnumValueOptions"), tag: "protobuf:\"bytes,3,opt,name=options\" json:\"options,omitempty\"" }]
	)
}

export class ServiceDescriptorProto {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Name(): $.VarRef<string> | null {
		return this._fields.Name
	}

	public set Name(value: $.VarRef<string> | null) {
		this._fields.Name = value
	}

	public get Method(): $.Slice<MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null> {
		return this._fields.Method
	}

	public set Method(value: $.Slice<MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null>) {
		this._fields.Method = value
	}

	public get Options(): ServiceOptions | $.VarRef<ServiceOptions> | null {
		return this._fields.Options
	}

	public set Options(value: ServiceOptions | $.VarRef<ServiceOptions> | null) {
		this._fields.Options = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Name: $.VarRef<string> | null
		Method: $.Slice<MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null>
		Options: ServiceOptions | $.VarRef<ServiceOptions> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Name?: $.VarRef<string> | null, Method?: $.Slice<MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null>, Options?: ServiceOptions | $.VarRef<ServiceOptions> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Name: init?.Name ?? (null! as $.VarRef<string> | null),
			Method: init?.Method ?? (null! as $.Slice<MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null>),
			Options: init?.Options ?? (null! as ServiceOptions | $.VarRef<ServiceOptions> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServiceDescriptorProto {
		return new ServiceDescriptorProto(this, true)
	}

	public __goscriptAssign(source: ServiceDescriptorProto): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Name = values.Name
		target.Method = values.Method
		target.Options = values.Options
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([8])]
	}

	public GetMethod(): $.Slice<MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null> {
		const x: ServiceDescriptorProto | $.VarRef<ServiceDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<ServiceDescriptorProto>(x).Method
		}
		return null
	}

	public GetName(): string {
		const x: ServiceDescriptorProto | $.VarRef<ServiceDescriptorProto> | null = this;
		const x$: ServiceDescriptorProto = x == null ? $.pointerTarget<ServiceDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<ServiceDescriptorProto>(x)
		if ((x != null) && ((x$ as ServiceDescriptorProto).Name != null)) {
			return $.pointerValue<string>((x$ as ServiceDescriptorProto).Name)
		}
		return ""
	}

	public GetOptions(): ServiceOptions | $.VarRef<ServiceOptions> | null {
		const x: ServiceDescriptorProto | $.VarRef<ServiceDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<ServiceDescriptorProto>(x).Options
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: ServiceDescriptorProto | $.VarRef<ServiceDescriptorProto> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 8)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.ServiceDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.ServiceDescriptorProto")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.ServiceDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.ServiceDescriptorProto")))
	}

	public Reset(): void {
		let x: ServiceDescriptorProto | $.VarRef<ServiceDescriptorProto> | null = this;
		$.assignStruct($.pointerValue<ServiceDescriptorProto>(x), $.markAsStructValue(new ServiceDescriptorProto()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 8)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.ServiceDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.ServiceDescriptorProto")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: ServiceDescriptorProto | $.VarRef<ServiceDescriptorProto> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.ServiceDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.ServiceDescriptorProto")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.ServiceDescriptorProto",
		() => new ServiceDescriptorProto(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetMethod", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.MethodDescriptorProto")) }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetOptions", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.ServiceOptions") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		ServiceDescriptorProto,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Name", key: "Name", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,1,opt,name=name\" json:\"name,omitempty\"" }, { name: "Method", key: "Method", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.MethodDescriptorProto")), tag: "protobuf:\"bytes,2,rep,name=method\" json:\"method,omitempty\"" }, { name: "Options", key: "Options", type: /* @__PURE__ */ $.pointerType("descriptorpb.ServiceOptions"), tag: "protobuf:\"bytes,3,opt,name=options\" json:\"options,omitempty\"" }]
	)
}

export class MethodDescriptorProto {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Name(): $.VarRef<string> | null {
		return this._fields.Name
	}

	public set Name(value: $.VarRef<string> | null) {
		this._fields.Name = value
	}

	// Input and output type names.  These are resolved in the same way as
	// FieldDescriptorProto.type_name, but must refer to a message type.
	public get InputType(): $.VarRef<string> | null {
		return this._fields.InputType
	}

	public set InputType(value: $.VarRef<string> | null) {
		this._fields.InputType = value
	}

	public get OutputType(): $.VarRef<string> | null {
		return this._fields.OutputType
	}

	public set OutputType(value: $.VarRef<string> | null) {
		this._fields.OutputType = value
	}

	public get Options(): MethodOptions | $.VarRef<MethodOptions> | null {
		return this._fields.Options
	}

	public set Options(value: MethodOptions | $.VarRef<MethodOptions> | null) {
		this._fields.Options = value
	}

	// Identifies if client streams multiple client messages
	public get ClientStreaming(): $.VarRef<boolean> | null {
		return this._fields.ClientStreaming
	}

	public set ClientStreaming(value: $.VarRef<boolean> | null) {
		this._fields.ClientStreaming = value
	}

	// Identifies if server streams multiple server messages
	public get ServerStreaming(): $.VarRef<boolean> | null {
		return this._fields.ServerStreaming
	}

	public set ServerStreaming(value: $.VarRef<boolean> | null) {
		this._fields.ServerStreaming = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Name: $.VarRef<string> | null
		InputType: $.VarRef<string> | null
		OutputType: $.VarRef<string> | null
		Options: MethodOptions | $.VarRef<MethodOptions> | null
		ClientStreaming: $.VarRef<boolean> | null
		ServerStreaming: $.VarRef<boolean> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Name?: $.VarRef<string> | null, InputType?: $.VarRef<string> | null, OutputType?: $.VarRef<string> | null, Options?: MethodOptions | $.VarRef<MethodOptions> | null, ClientStreaming?: $.VarRef<boolean> | null, ServerStreaming?: $.VarRef<boolean> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Name: init?.Name ?? (null! as $.VarRef<string> | null),
			InputType: init?.InputType ?? (null! as $.VarRef<string> | null),
			OutputType: init?.OutputType ?? (null! as $.VarRef<string> | null),
			Options: init?.Options ?? (null! as MethodOptions | $.VarRef<MethodOptions> | null),
			ClientStreaming: init?.ClientStreaming ?? (null! as $.VarRef<boolean> | null),
			ServerStreaming: init?.ServerStreaming ?? (null! as $.VarRef<boolean> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MethodDescriptorProto {
		return new MethodDescriptorProto(this, true)
	}

	public __goscriptAssign(source: MethodDescriptorProto): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Name = values.Name
		target.InputType = values.InputType
		target.OutputType = values.OutputType
		target.Options = values.Options
		target.ClientStreaming = values.ClientStreaming
		target.ServerStreaming = values.ServerStreaming
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([9])]
	}

	public GetClientStreaming(): boolean {
		const x: MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null = this;
		const x$: MethodDescriptorProto = x == null ? $.pointerTarget<MethodDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<MethodDescriptorProto>(x)
		if ((x != null) && ((x$ as MethodDescriptorProto).ClientStreaming != null)) {
			return $.pointerValue<boolean>((x$ as MethodDescriptorProto).ClientStreaming)
		}
		return false
	}

	public GetInputType(): string {
		const x: MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null = this;
		const x$: MethodDescriptorProto = x == null ? $.pointerTarget<MethodDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<MethodDescriptorProto>(x)
		if ((x != null) && ((x$ as MethodDescriptorProto).InputType != null)) {
			return $.pointerValue<string>((x$ as MethodDescriptorProto).InputType)
		}
		return ""
	}

	public GetName(): string {
		const x: MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null = this;
		const x$: MethodDescriptorProto = x == null ? $.pointerTarget<MethodDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<MethodDescriptorProto>(x)
		if ((x != null) && ((x$ as MethodDescriptorProto).Name != null)) {
			return $.pointerValue<string>((x$ as MethodDescriptorProto).Name)
		}
		return ""
	}

	public GetOptions(): MethodOptions | $.VarRef<MethodOptions> | null {
		const x: MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null = this;
		if (x != null) {
			return $.pointerValue<MethodDescriptorProto>(x).Options
		}
		return null
	}

	public GetOutputType(): string {
		const x: MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null = this;
		const x$: MethodDescriptorProto = x == null ? $.pointerTarget<MethodDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<MethodDescriptorProto>(x)
		if ((x != null) && ((x$ as MethodDescriptorProto).OutputType != null)) {
			return $.pointerValue<string>((x$ as MethodDescriptorProto).OutputType)
		}
		return ""
	}

	public GetServerStreaming(): boolean {
		const x: MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null = this;
		const x$: MethodDescriptorProto = x == null ? $.pointerTarget<MethodDescriptorProto>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<MethodDescriptorProto>(x)
		if ((x != null) && ((x$ as MethodDescriptorProto).ServerStreaming != null)) {
			return $.pointerValue<boolean>((x$ as MethodDescriptorProto).ServerStreaming)
		}
		return false
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 9)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.MethodDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.MethodDescriptorProto")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.MethodDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.MethodDescriptorProto")))
	}

	public Reset(): void {
		let x: MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null = this;
		$.assignStruct($.pointerValue<MethodDescriptorProto>(x), $.markAsStructValue(new MethodDescriptorProto()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 9)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.MethodDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.MethodDescriptorProto")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.MethodDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.MethodDescriptorProto")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.MethodDescriptorProto",
		() => new MethodDescriptorProto(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetClientStreaming", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetInputType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetOptions", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.MethodOptions") }], pointerReceiver: true }, { name: "GetOutputType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetServerStreaming", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		MethodDescriptorProto,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Name", key: "Name", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,1,opt,name=name\" json:\"name,omitempty\"" }, { name: "InputType", key: "InputType", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,2,opt,name=input_type,json=inputType\" json:\"input_type,omitempty\"" }, { name: "OutputType", key: "OutputType", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,3,opt,name=output_type,json=outputType\" json:\"output_type,omitempty\"" }, { name: "Options", key: "Options", type: /* @__PURE__ */ $.pointerType("descriptorpb.MethodOptions"), tag: "protobuf:\"bytes,4,opt,name=options\" json:\"options,omitempty\"" }, { name: "ClientStreaming", key: "ClientStreaming", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,5,opt,name=client_streaming,json=clientStreaming,def=0\" json:\"client_streaming,omitempty\"" }, { name: "ServerStreaming", key: "ServerStreaming", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,6,opt,name=server_streaming,json=serverStreaming,def=0\" json:\"server_streaming,omitempty\"" }]
	)
}

export class FileOptions {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get extensionFields(): protoimpl.ExtensionFields {
		return this._fields.extensionFields
	}

	public set extensionFields(value: protoimpl.ExtensionFields) {
		this._fields.extensionFields = value
	}

	// Sets the Java package where classes generated from this .proto will be
	// placed.  By default, the proto package is used, but this is often
	// inappropriate because proto packages do not normally start with backwards
	// domain names.
	public get JavaPackage(): $.VarRef<string> | null {
		return this._fields.JavaPackage
	}

	public set JavaPackage(value: $.VarRef<string> | null) {
		this._fields.JavaPackage = value
	}

	// Controls the name of the wrapper Java class generated for the .proto file.
	// That class will always contain the .proto file's getDescriptor() method as
	// well as any top-level extensions defined in the .proto file.
	// If java_multiple_files is disabled, then all the other classes from the
	// .proto file will be nested inside the single wrapper outer class.
	public get JavaOuterClassname(): $.VarRef<string> | null {
		return this._fields.JavaOuterClassname
	}

	public set JavaOuterClassname(value: $.VarRef<string> | null) {
		this._fields.JavaOuterClassname = value
	}

	// If enabled, then the Java code generator will generate a separate .java
	// file for each top-level message, enum, and service defined in the .proto
	// file.  Thus, these types will *not* be nested inside the wrapper class
	// named by java_outer_classname.  However, the wrapper class will still be
	// generated to contain the file's getDescriptor() method as well as any
	// top-level extensions defined in the file.
	public get JavaMultipleFiles(): $.VarRef<boolean> | null {
		return this._fields.JavaMultipleFiles
	}

	public set JavaMultipleFiles(value: $.VarRef<boolean> | null) {
		this._fields.JavaMultipleFiles = value
	}

	// This option does nothing.
	//
	// Deprecated: Marked as deprecated in google/protobuf/descriptor.proto.
	public get JavaGenerateEqualsAndHash(): $.VarRef<boolean> | null {
		return this._fields.JavaGenerateEqualsAndHash
	}

	public set JavaGenerateEqualsAndHash(value: $.VarRef<boolean> | null) {
		this._fields.JavaGenerateEqualsAndHash = value
	}

	// A proto2 file can set this to true to opt in to UTF-8 checking for Java,
	// which will throw an exception if invalid UTF-8 is parsed from the wire or
	// assigned to a string field.
	//
	// TODO: clarify exactly what kinds of field types this option
	// applies to, and update these docs accordingly.
	//
	// Proto3 files already perform these checks. Setting the option explicitly to
	// false has no effect: it cannot be used to opt proto3 files out of UTF-8
	// checks.
	public get JavaStringCheckUtf8(): $.VarRef<boolean> | null {
		return this._fields.JavaStringCheckUtf8
	}

	public set JavaStringCheckUtf8(value: $.VarRef<boolean> | null) {
		this._fields.JavaStringCheckUtf8 = value
	}

	public get OptimizeFor(): $.VarRef<FileOptions_OptimizeMode> | null {
		return this._fields.OptimizeFor
	}

	public set OptimizeFor(value: $.VarRef<FileOptions_OptimizeMode> | null) {
		this._fields.OptimizeFor = value
	}

	// Sets the Go package where structs generated from this .proto will be
	// placed. If omitted, the Go package will be derived from the following:
	//   - The basename of the package import path, if provided.
	//   - Otherwise, the package statement in the .proto file, if present.
	//   - Otherwise, the basename of the .proto file, without extension.
	public get GoPackage(): $.VarRef<string> | null {
		return this._fields.GoPackage
	}

	public set GoPackage(value: $.VarRef<string> | null) {
		this._fields.GoPackage = value
	}

	// Should generic services be generated in each language?  "Generic" services
	// are not specific to any particular RPC system.  They are generated by the
	// main code generators in each language (without additional plugins).
	// Generic services were the only kind of service generation supported by
	// early versions of google.protobuf.
	//
	// Generic services are now considered deprecated in favor of using plugins
	// that generate code specific to your particular RPC system.  Therefore,
	// these default to false.  Old code which depends on generic services should
	// explicitly set them to true.
	public get CcGenericServices(): $.VarRef<boolean> | null {
		return this._fields.CcGenericServices
	}

	public set CcGenericServices(value: $.VarRef<boolean> | null) {
		this._fields.CcGenericServices = value
	}

	public get JavaGenericServices(): $.VarRef<boolean> | null {
		return this._fields.JavaGenericServices
	}

	public set JavaGenericServices(value: $.VarRef<boolean> | null) {
		this._fields.JavaGenericServices = value
	}

	public get PyGenericServices(): $.VarRef<boolean> | null {
		return this._fields.PyGenericServices
	}

	public set PyGenericServices(value: $.VarRef<boolean> | null) {
		this._fields.PyGenericServices = value
	}

	// Is this file deprecated?
	// Depending on the target platform, this can emit Deprecated annotations
	// for everything in the file, or it will be completely ignored; in the very
	// least, this is a formalization for deprecating files.
	public get Deprecated(): $.VarRef<boolean> | null {
		return this._fields.Deprecated
	}

	public set Deprecated(value: $.VarRef<boolean> | null) {
		this._fields.Deprecated = value
	}

	// Enables the use of arenas for the proto messages in this file. This applies
	// only to generated classes for C++.
	public get CcEnableArenas(): $.VarRef<boolean> | null {
		return this._fields.CcEnableArenas
	}

	public set CcEnableArenas(value: $.VarRef<boolean> | null) {
		this._fields.CcEnableArenas = value
	}

	// Sets the objective c class prefix which is prepended to all objective c
	// generated classes from this .proto. There is no default.
	public get ObjcClassPrefix(): $.VarRef<string> | null {
		return this._fields.ObjcClassPrefix
	}

	public set ObjcClassPrefix(value: $.VarRef<string> | null) {
		this._fields.ObjcClassPrefix = value
	}

	// Namespace for generated classes; defaults to the package.
	public get CsharpNamespace(): $.VarRef<string> | null {
		return this._fields.CsharpNamespace
	}

	public set CsharpNamespace(value: $.VarRef<string> | null) {
		this._fields.CsharpNamespace = value
	}

	// By default Swift generators will take the proto package and CamelCase it
	// replacing '.' with underscore and use that to prefix the types/symbols
	// defined. When this options is provided, they will use this value instead
	// to prefix the types/symbols defined.
	public get SwiftPrefix(): $.VarRef<string> | null {
		return this._fields.SwiftPrefix
	}

	public set SwiftPrefix(value: $.VarRef<string> | null) {
		this._fields.SwiftPrefix = value
	}

	// Sets the php class prefix which is prepended to all php generated classes
	// from this .proto. Default is empty.
	public get PhpClassPrefix(): $.VarRef<string> | null {
		return this._fields.PhpClassPrefix
	}

	public set PhpClassPrefix(value: $.VarRef<string> | null) {
		this._fields.PhpClassPrefix = value
	}

	// Use this option to change the namespace of php generated classes. Default
	// is empty. When this option is empty, the package name will be used for
	// determining the namespace.
	public get PhpNamespace(): $.VarRef<string> | null {
		return this._fields.PhpNamespace
	}

	public set PhpNamespace(value: $.VarRef<string> | null) {
		this._fields.PhpNamespace = value
	}

	// Use this option to change the namespace of php generated metadata classes.
	// Default is empty. When this option is empty, the proto file name will be
	// used for determining the namespace.
	public get PhpMetadataNamespace(): $.VarRef<string> | null {
		return this._fields.PhpMetadataNamespace
	}

	public set PhpMetadataNamespace(value: $.VarRef<string> | null) {
		this._fields.PhpMetadataNamespace = value
	}

	// Use this option to change the package of ruby generated classes. Default
	// is empty. When this option is not set, the package name will be used for
	// determining the ruby package.
	public get RubyPackage(): $.VarRef<string> | null {
		return this._fields.RubyPackage
	}

	public set RubyPackage(value: $.VarRef<string> | null) {
		this._fields.RubyPackage = value
	}

	// Any features defined in the specific edition.
	public get Features(): FeatureSet | $.VarRef<FeatureSet> | null {
		return this._fields.Features
	}

	public set Features(value: FeatureSet | $.VarRef<FeatureSet> | null) {
		this._fields.Features = value
	}

	// The parser stores options it doesn't recognize here.
	// See the documentation for the "Options" section above.
	public get UninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		return this._fields.UninterpretedOption
	}

	public set UninterpretedOption(value: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>) {
		this._fields.UninterpretedOption = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		extensionFields: protoimpl.ExtensionFields
		JavaPackage: $.VarRef<string> | null
		JavaOuterClassname: $.VarRef<string> | null
		JavaMultipleFiles: $.VarRef<boolean> | null
		JavaGenerateEqualsAndHash: $.VarRef<boolean> | null
		JavaStringCheckUtf8: $.VarRef<boolean> | null
		OptimizeFor: $.VarRef<FileOptions_OptimizeMode> | null
		GoPackage: $.VarRef<string> | null
		CcGenericServices: $.VarRef<boolean> | null
		JavaGenericServices: $.VarRef<boolean> | null
		PyGenericServices: $.VarRef<boolean> | null
		Deprecated: $.VarRef<boolean> | null
		CcEnableArenas: $.VarRef<boolean> | null
		ObjcClassPrefix: $.VarRef<string> | null
		CsharpNamespace: $.VarRef<string> | null
		SwiftPrefix: $.VarRef<string> | null
		PhpClassPrefix: $.VarRef<string> | null
		PhpNamespace: $.VarRef<string> | null
		PhpMetadataNamespace: $.VarRef<string> | null
		RubyPackage: $.VarRef<string> | null
		Features: FeatureSet | $.VarRef<FeatureSet> | null
		UninterpretedOption: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, extensionFields?: protoimpl.ExtensionFields, JavaPackage?: $.VarRef<string> | null, JavaOuterClassname?: $.VarRef<string> | null, JavaMultipleFiles?: $.VarRef<boolean> | null, JavaGenerateEqualsAndHash?: $.VarRef<boolean> | null, JavaStringCheckUtf8?: $.VarRef<boolean> | null, OptimizeFor?: $.VarRef<FileOptions_OptimizeMode> | null, GoPackage?: $.VarRef<string> | null, CcGenericServices?: $.VarRef<boolean> | null, JavaGenericServices?: $.VarRef<boolean> | null, PyGenericServices?: $.VarRef<boolean> | null, Deprecated?: $.VarRef<boolean> | null, CcEnableArenas?: $.VarRef<boolean> | null, ObjcClassPrefix?: $.VarRef<string> | null, CsharpNamespace?: $.VarRef<string> | null, SwiftPrefix?: $.VarRef<string> | null, PhpClassPrefix?: $.VarRef<string> | null, PhpNamespace?: $.VarRef<string> | null, PhpMetadataNamespace?: $.VarRef<string> | null, RubyPackage?: $.VarRef<string> | null, Features?: FeatureSet | $.VarRef<FeatureSet> | null, UninterpretedOption?: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			extensionFields: init?.extensionFields ?? (null! as protoimpl.ExtensionFields),
			JavaPackage: init?.JavaPackage ?? (null! as $.VarRef<string> | null),
			JavaOuterClassname: init?.JavaOuterClassname ?? (null! as $.VarRef<string> | null),
			JavaMultipleFiles: init?.JavaMultipleFiles ?? (null! as $.VarRef<boolean> | null),
			JavaGenerateEqualsAndHash: init?.JavaGenerateEqualsAndHash ?? (null! as $.VarRef<boolean> | null),
			JavaStringCheckUtf8: init?.JavaStringCheckUtf8 ?? (null! as $.VarRef<boolean> | null),
			OptimizeFor: init?.OptimizeFor ?? (null! as $.VarRef<FileOptions_OptimizeMode> | null),
			GoPackage: init?.GoPackage ?? (null! as $.VarRef<string> | null),
			CcGenericServices: init?.CcGenericServices ?? (null! as $.VarRef<boolean> | null),
			JavaGenericServices: init?.JavaGenericServices ?? (null! as $.VarRef<boolean> | null),
			PyGenericServices: init?.PyGenericServices ?? (null! as $.VarRef<boolean> | null),
			Deprecated: init?.Deprecated ?? (null! as $.VarRef<boolean> | null),
			CcEnableArenas: init?.CcEnableArenas ?? (null! as $.VarRef<boolean> | null),
			ObjcClassPrefix: init?.ObjcClassPrefix ?? (null! as $.VarRef<string> | null),
			CsharpNamespace: init?.CsharpNamespace ?? (null! as $.VarRef<string> | null),
			SwiftPrefix: init?.SwiftPrefix ?? (null! as $.VarRef<string> | null),
			PhpClassPrefix: init?.PhpClassPrefix ?? (null! as $.VarRef<string> | null),
			PhpNamespace: init?.PhpNamespace ?? (null! as $.VarRef<string> | null),
			PhpMetadataNamespace: init?.PhpMetadataNamespace ?? (null! as $.VarRef<string> | null),
			RubyPackage: init?.RubyPackage ?? (null! as $.VarRef<string> | null),
			Features: init?.Features ?? (null! as FeatureSet | $.VarRef<FeatureSet> | null),
			UninterpretedOption: init?.UninterpretedOption ?? (null! as $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FileOptions {
		return new FileOptions(this, true)
	}

	public __goscriptAssign(source: FileOptions): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.extensionFields = values.extensionFields
		target.JavaPackage = values.JavaPackage
		target.JavaOuterClassname = values.JavaOuterClassname
		target.JavaMultipleFiles = values.JavaMultipleFiles
		target.JavaGenerateEqualsAndHash = values.JavaGenerateEqualsAndHash
		target.JavaStringCheckUtf8 = values.JavaStringCheckUtf8
		target.OptimizeFor = values.OptimizeFor
		target.GoPackage = values.GoPackage
		target.CcGenericServices = values.CcGenericServices
		target.JavaGenericServices = values.JavaGenericServices
		target.PyGenericServices = values.PyGenericServices
		target.Deprecated = values.Deprecated
		target.CcEnableArenas = values.CcEnableArenas
		target.ObjcClassPrefix = values.ObjcClassPrefix
		target.CsharpNamespace = values.CsharpNamespace
		target.SwiftPrefix = values.SwiftPrefix
		target.PhpClassPrefix = values.PhpClassPrefix
		target.PhpNamespace = values.PhpNamespace
		target.PhpMetadataNamespace = values.PhpMetadataNamespace
		target.RubyPackage = values.RubyPackage
		target.Features = values.Features
		target.UninterpretedOption = values.UninterpretedOption
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([10])]
	}

	public GetCcEnableArenas(): boolean {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).CcEnableArenas != null)) {
			return $.pointerValue<boolean>((x$ as FileOptions).CcEnableArenas)
		}
		return true
	}

	public GetCcGenericServices(): boolean {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).CcGenericServices != null)) {
			return $.pointerValue<boolean>((x$ as FileOptions).CcGenericServices)
		}
		return false
	}

	public GetCsharpNamespace(): string {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).CsharpNamespace != null)) {
			return $.pointerValue<string>((x$ as FileOptions).CsharpNamespace)
		}
		return ""
	}

	public GetDeprecated(): boolean {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).Deprecated != null)) {
			return $.pointerValue<boolean>((x$ as FileOptions).Deprecated)
		}
		return false
	}

	public GetFeatures(): FeatureSet | $.VarRef<FeatureSet> | null {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		if (x != null) {
			return $.pointerValue<FileOptions>(x).Features
		}
		return null
	}

	public GetGoPackage(): string {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).GoPackage != null)) {
			return $.pointerValue<string>((x$ as FileOptions).GoPackage)
		}
		return ""
	}

	public GetJavaGenerateEqualsAndHash(): boolean {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).JavaGenerateEqualsAndHash != null)) {
			return $.pointerValue<boolean>((x$ as FileOptions).JavaGenerateEqualsAndHash)
		}
		return false
	}

	public GetJavaGenericServices(): boolean {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).JavaGenericServices != null)) {
			return $.pointerValue<boolean>((x$ as FileOptions).JavaGenericServices)
		}
		return false
	}

	public GetJavaMultipleFiles(): boolean {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).JavaMultipleFiles != null)) {
			return $.pointerValue<boolean>((x$ as FileOptions).JavaMultipleFiles)
		}
		return false
	}

	public GetJavaOuterClassname(): string {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).JavaOuterClassname != null)) {
			return $.pointerValue<string>((x$ as FileOptions).JavaOuterClassname)
		}
		return ""
	}

	public GetJavaPackage(): string {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).JavaPackage != null)) {
			return $.pointerValue<string>((x$ as FileOptions).JavaPackage)
		}
		return ""
	}

	public GetJavaStringCheckUtf8(): boolean {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).JavaStringCheckUtf8 != null)) {
			return $.pointerValue<boolean>((x$ as FileOptions).JavaStringCheckUtf8)
		}
		return false
	}

	public GetObjcClassPrefix(): string {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).ObjcClassPrefix != null)) {
			return $.pointerValue<string>((x$ as FileOptions).ObjcClassPrefix)
		}
		return ""
	}

	public GetOptimizeFor(): FileOptions_OptimizeMode {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).OptimizeFor != null)) {
			return $.pointerValue<FileOptions_OptimizeMode>((x$ as FileOptions).OptimizeFor)
		}
		return 1
	}

	public GetPhpClassPrefix(): string {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).PhpClassPrefix != null)) {
			return $.pointerValue<string>((x$ as FileOptions).PhpClassPrefix)
		}
		return ""
	}

	public GetPhpMetadataNamespace(): string {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).PhpMetadataNamespace != null)) {
			return $.pointerValue<string>((x$ as FileOptions).PhpMetadataNamespace)
		}
		return ""
	}

	public GetPhpNamespace(): string {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).PhpNamespace != null)) {
			return $.pointerValue<string>((x$ as FileOptions).PhpNamespace)
		}
		return ""
	}

	public GetPyGenericServices(): boolean {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).PyGenericServices != null)) {
			return $.pointerValue<boolean>((x$ as FileOptions).PyGenericServices)
		}
		return false
	}

	public GetRubyPackage(): string {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).RubyPackage != null)) {
			return $.pointerValue<string>((x$ as FileOptions).RubyPackage)
		}
		return ""
	}

	public GetSwiftPrefix(): string {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		const x$: FileOptions = x == null ? $.pointerTarget<FileOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FileOptions>(x)
		if ((x != null) && ((x$ as FileOptions).SwiftPrefix != null)) {
			return $.pointerValue<string>((x$ as FileOptions).SwiftPrefix)
		}
		return ""
	}

	public GetUninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		if (x != null) {
			return $.pointerValue<FileOptions>(x).UninterpretedOption
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 10)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FileOptions", /* @__PURE__ */ $.pointerType("descriptorpb.FileOptions")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.FileOptions", /* @__PURE__ */ $.pointerType("descriptorpb.FileOptions")))
	}

	public Reset(): void {
		let x: FileOptions | $.VarRef<FileOptions> | null = this;
		$.assignStruct($.pointerValue<FileOptions>(x), $.markAsStructValue(new FileOptions()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 10)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FileOptions", /* @__PURE__ */ $.pointerType("descriptorpb.FileOptions")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: FileOptions | $.VarRef<FileOptions> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.FileOptions", /* @__PURE__ */ $.pointerType("descriptorpb.FileOptions")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.FileOptions",
		() => new FileOptions(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetCcEnableArenas", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetCcGenericServices", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetCsharpNamespace", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetDeprecated", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetFeatures", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet") }], pointerReceiver: true }, { name: "GetGoPackage", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetJavaGenerateEqualsAndHash", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetJavaGenericServices", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetJavaMultipleFiles", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetJavaOuterClassname", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetJavaPackage", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetJavaStringCheckUtf8", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetObjcClassPrefix", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetOptimizeFor", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.FileOptions_OptimizeMode") }], pointerReceiver: true }, { name: "GetPhpClassPrefix", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetPhpMetadataNamespace", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetPhpNamespace", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetPyGenericServices", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetRubyPackage", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetSwiftPrefix", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetUninterpretedOption", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")) }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		FileOptions,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "extensionFields", key: "extensionFields", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField") }, { name: "JavaPackage", key: "JavaPackage", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,1,opt,name=java_package,json=javaPackage\" json:\"java_package,omitempty\"" }, { name: "JavaOuterClassname", key: "JavaOuterClassname", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,8,opt,name=java_outer_classname,json=javaOuterClassname\" json:\"java_outer_classname,omitempty\"" }, { name: "JavaMultipleFiles", key: "JavaMultipleFiles", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,10,opt,name=java_multiple_files,json=javaMultipleFiles,def=0\" json:\"java_multiple_files,omitempty\"" }, { name: "JavaGenerateEqualsAndHash", key: "JavaGenerateEqualsAndHash", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,20,opt,name=java_generate_equals_and_hash,json=javaGenerateEqualsAndHash\" json:\"java_generate_equals_and_hash,omitempty\"" }, { name: "JavaStringCheckUtf8", key: "JavaStringCheckUtf8", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,27,opt,name=java_string_check_utf8,json=javaStringCheckUtf8,def=0\" json:\"java_string_check_utf8,omitempty\"" }, { name: "OptimizeFor", key: "OptimizeFor", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FileOptions_OptimizeMode")), tag: "protobuf:\"varint,9,opt,name=optimize_for,json=optimizeFor,enum=google.protobuf.FileOptions_OptimizeMode,def=1\" json:\"optimize_for,omitempty\"" }, { name: "GoPackage", key: "GoPackage", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,11,opt,name=go_package,json=goPackage\" json:\"go_package,omitempty\"" }, { name: "CcGenericServices", key: "CcGenericServices", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,16,opt,name=cc_generic_services,json=ccGenericServices,def=0\" json:\"cc_generic_services,omitempty\"" }, { name: "JavaGenericServices", key: "JavaGenericServices", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,17,opt,name=java_generic_services,json=javaGenericServices,def=0\" json:\"java_generic_services,omitempty\"" }, { name: "PyGenericServices", key: "PyGenericServices", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,18,opt,name=py_generic_services,json=pyGenericServices,def=0\" json:\"py_generic_services,omitempty\"" }, { name: "Deprecated", key: "Deprecated", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,23,opt,name=deprecated,def=0\" json:\"deprecated,omitempty\"" }, { name: "CcEnableArenas", key: "CcEnableArenas", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,31,opt,name=cc_enable_arenas,json=ccEnableArenas,def=1\" json:\"cc_enable_arenas,omitempty\"" }, { name: "ObjcClassPrefix", key: "ObjcClassPrefix", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,36,opt,name=objc_class_prefix,json=objcClassPrefix\" json:\"objc_class_prefix,omitempty\"" }, { name: "CsharpNamespace", key: "CsharpNamespace", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,37,opt,name=csharp_namespace,json=csharpNamespace\" json:\"csharp_namespace,omitempty\"" }, { name: "SwiftPrefix", key: "SwiftPrefix", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,39,opt,name=swift_prefix,json=swiftPrefix\" json:\"swift_prefix,omitempty\"" }, { name: "PhpClassPrefix", key: "PhpClassPrefix", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,40,opt,name=php_class_prefix,json=phpClassPrefix\" json:\"php_class_prefix,omitempty\"" }, { name: "PhpNamespace", key: "PhpNamespace", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,41,opt,name=php_namespace,json=phpNamespace\" json:\"php_namespace,omitempty\"" }, { name: "PhpMetadataNamespace", key: "PhpMetadataNamespace", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,44,opt,name=php_metadata_namespace,json=phpMetadataNamespace\" json:\"php_metadata_namespace,omitempty\"" }, { name: "RubyPackage", key: "RubyPackage", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,45,opt,name=ruby_package,json=rubyPackage\" json:\"ruby_package,omitempty\"" }, { name: "Features", key: "Features", type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet"), tag: "protobuf:\"bytes,50,opt,name=features\" json:\"features,omitempty\"" }, { name: "UninterpretedOption", key: "UninterpretedOption", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")), tag: "protobuf:\"bytes,999,rep,name=uninterpreted_option,json=uninterpretedOption\" json:\"uninterpreted_option,omitempty\"" }]
	)
}

export class MessageOptions {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get extensionFields(): protoimpl.ExtensionFields {
		return this._fields.extensionFields
	}

	public set extensionFields(value: protoimpl.ExtensionFields) {
		this._fields.extensionFields = value
	}

	// Set true to use the old proto1 MessageSet wire format for extensions.
	// This is provided for backwards-compatibility with the MessageSet wire
	// format.  You should not use this for any other reason:  It's less
	// efficient, has fewer features, and is more complicated.
	//
	// The message must be defined exactly as follows:
	//
	// 	message Foo {
	// 	  option message_set_wire_format = true;
	// 	  extensions 4 to max;
	// 	}
	//
	// Note that the message cannot have any defined fields; MessageSets only
	// have extensions.
	//
	// All extensions of your type must be singular messages; e.g. they cannot
	// be int32s, enums, or repeated messages.
	//
	// Because this is an option, the above two restrictions are not enforced by
	// the protocol compiler.
	public get MessageSetWireFormat(): $.VarRef<boolean> | null {
		return this._fields.MessageSetWireFormat
	}

	public set MessageSetWireFormat(value: $.VarRef<boolean> | null) {
		this._fields.MessageSetWireFormat = value
	}

	// Disables the generation of the standard "descriptor()" accessor, which can
	// conflict with a field of the same name.  This is meant to make migration
	// from proto1 easier; new code should avoid fields named "descriptor".
	public get NoStandardDescriptorAccessor(): $.VarRef<boolean> | null {
		return this._fields.NoStandardDescriptorAccessor
	}

	public set NoStandardDescriptorAccessor(value: $.VarRef<boolean> | null) {
		this._fields.NoStandardDescriptorAccessor = value
	}

	// Is this message deprecated?
	// Depending on the target platform, this can emit Deprecated annotations
	// for the message, or it will be completely ignored; in the very least,
	// this is a formalization for deprecating messages.
	public get Deprecated(): $.VarRef<boolean> | null {
		return this._fields.Deprecated
	}

	public set Deprecated(value: $.VarRef<boolean> | null) {
		this._fields.Deprecated = value
	}

	// Whether the message is an automatically generated map entry type for the
	// maps field.
	//
	// For maps fields:
	//
	// 	map<KeyType, ValueType> map_field = 1;
	//
	// The parsed descriptor looks like:
	//
	// 	message MapFieldEntry {
	// 	    option map_entry = true;
	// 	    optional KeyType key = 1;
	// 	    optional ValueType value = 2;
	// 	}
	// 	repeated MapFieldEntry map_field = 1;
	//
	// Implementations may choose not to generate the map_entry=true message, but
	// use a native map in the target language to hold the keys and values.
	// The reflection APIs in such implementations still need to work as
	// if the field is a repeated message field.
	//
	// NOTE: Do not set the option in .proto files. Always use the maps syntax
	// instead. The option should only be implicitly set by the proto compiler
	// parser.
	public get MapEntry(): $.VarRef<boolean> | null {
		return this._fields.MapEntry
	}

	public set MapEntry(value: $.VarRef<boolean> | null) {
		this._fields.MapEntry = value
	}

	// Enable the legacy handling of JSON field name conflicts.  This lowercases
	// and strips underscored from the fields before comparison in proto3 only.
	// The new behavior takes `json_name` into account and applies to proto2 as
	// well.
	//
	// This should only be used as a temporary measure against broken builds due
	// to the change in behavior for JSON field name conflicts.
	//
	// TODO This is legacy behavior we plan to remove once downstream
	// teams have had time to migrate.
	//
	// Deprecated: Marked as deprecated in google/protobuf/descriptor.proto.
	public get DeprecatedLegacyJsonFieldConflicts(): $.VarRef<boolean> | null {
		return this._fields.DeprecatedLegacyJsonFieldConflicts
	}

	public set DeprecatedLegacyJsonFieldConflicts(value: $.VarRef<boolean> | null) {
		this._fields.DeprecatedLegacyJsonFieldConflicts = value
	}

	// Any features defined in the specific edition.
	public get Features(): FeatureSet | $.VarRef<FeatureSet> | null {
		return this._fields.Features
	}

	public set Features(value: FeatureSet | $.VarRef<FeatureSet> | null) {
		this._fields.Features = value
	}

	// The parser stores options it doesn't recognize here. See above.
	public get UninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		return this._fields.UninterpretedOption
	}

	public set UninterpretedOption(value: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>) {
		this._fields.UninterpretedOption = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		extensionFields: protoimpl.ExtensionFields
		MessageSetWireFormat: $.VarRef<boolean> | null
		NoStandardDescriptorAccessor: $.VarRef<boolean> | null
		Deprecated: $.VarRef<boolean> | null
		MapEntry: $.VarRef<boolean> | null
		DeprecatedLegacyJsonFieldConflicts: $.VarRef<boolean> | null
		Features: FeatureSet | $.VarRef<FeatureSet> | null
		UninterpretedOption: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, extensionFields?: protoimpl.ExtensionFields, MessageSetWireFormat?: $.VarRef<boolean> | null, NoStandardDescriptorAccessor?: $.VarRef<boolean> | null, Deprecated?: $.VarRef<boolean> | null, MapEntry?: $.VarRef<boolean> | null, DeprecatedLegacyJsonFieldConflicts?: $.VarRef<boolean> | null, Features?: FeatureSet | $.VarRef<FeatureSet> | null, UninterpretedOption?: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			extensionFields: init?.extensionFields ?? (null! as protoimpl.ExtensionFields),
			MessageSetWireFormat: init?.MessageSetWireFormat ?? (null! as $.VarRef<boolean> | null),
			NoStandardDescriptorAccessor: init?.NoStandardDescriptorAccessor ?? (null! as $.VarRef<boolean> | null),
			Deprecated: init?.Deprecated ?? (null! as $.VarRef<boolean> | null),
			MapEntry: init?.MapEntry ?? (null! as $.VarRef<boolean> | null),
			DeprecatedLegacyJsonFieldConflicts: init?.DeprecatedLegacyJsonFieldConflicts ?? (null! as $.VarRef<boolean> | null),
			Features: init?.Features ?? (null! as FeatureSet | $.VarRef<FeatureSet> | null),
			UninterpretedOption: init?.UninterpretedOption ?? (null! as $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MessageOptions {
		return new MessageOptions(this, true)
	}

	public __goscriptAssign(source: MessageOptions): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.extensionFields = values.extensionFields
		target.MessageSetWireFormat = values.MessageSetWireFormat
		target.NoStandardDescriptorAccessor = values.NoStandardDescriptorAccessor
		target.Deprecated = values.Deprecated
		target.MapEntry = values.MapEntry
		target.DeprecatedLegacyJsonFieldConflicts = values.DeprecatedLegacyJsonFieldConflicts
		target.Features = values.Features
		target.UninterpretedOption = values.UninterpretedOption
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([11])]
	}

	public GetDeprecated(): boolean {
		const x: MessageOptions | $.VarRef<MessageOptions> | null = this;
		const x$: MessageOptions = x == null ? $.pointerTarget<MessageOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<MessageOptions>(x)
		if ((x != null) && ((x$ as MessageOptions).Deprecated != null)) {
			return $.pointerValue<boolean>((x$ as MessageOptions).Deprecated)
		}
		return false
	}

	public GetDeprecatedLegacyJsonFieldConflicts(): boolean {
		const x: MessageOptions | $.VarRef<MessageOptions> | null = this;
		const x$: MessageOptions = x == null ? $.pointerTarget<MessageOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<MessageOptions>(x)
		if ((x != null) && ((x$ as MessageOptions).DeprecatedLegacyJsonFieldConflicts != null)) {
			return $.pointerValue<boolean>((x$ as MessageOptions).DeprecatedLegacyJsonFieldConflicts)
		}
		return false
	}

	public GetFeatures(): FeatureSet | $.VarRef<FeatureSet> | null {
		const x: MessageOptions | $.VarRef<MessageOptions> | null = this;
		if (x != null) {
			return $.pointerValue<MessageOptions>(x).Features
		}
		return null
	}

	public GetMapEntry(): boolean {
		const x: MessageOptions | $.VarRef<MessageOptions> | null = this;
		const x$: MessageOptions = x == null ? $.pointerTarget<MessageOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<MessageOptions>(x)
		if ((x != null) && ((x$ as MessageOptions).MapEntry != null)) {
			return $.pointerValue<boolean>((x$ as MessageOptions).MapEntry)
		}
		return false
	}

	public GetMessageSetWireFormat(): boolean {
		const x: MessageOptions | $.VarRef<MessageOptions> | null = this;
		const x$: MessageOptions = x == null ? $.pointerTarget<MessageOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<MessageOptions>(x)
		if ((x != null) && ((x$ as MessageOptions).MessageSetWireFormat != null)) {
			return $.pointerValue<boolean>((x$ as MessageOptions).MessageSetWireFormat)
		}
		return false
	}

	public GetNoStandardDescriptorAccessor(): boolean {
		const x: MessageOptions | $.VarRef<MessageOptions> | null = this;
		const x$: MessageOptions = x == null ? $.pointerTarget<MessageOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<MessageOptions>(x)
		if ((x != null) && ((x$ as MessageOptions).NoStandardDescriptorAccessor != null)) {
			return $.pointerValue<boolean>((x$ as MessageOptions).NoStandardDescriptorAccessor)
		}
		return false
	}

	public GetUninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		const x: MessageOptions | $.VarRef<MessageOptions> | null = this;
		if (x != null) {
			return $.pointerValue<MessageOptions>(x).UninterpretedOption
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: MessageOptions | $.VarRef<MessageOptions> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 11)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.MessageOptions", /* @__PURE__ */ $.pointerType("descriptorpb.MessageOptions")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.MessageOptions", /* @__PURE__ */ $.pointerType("descriptorpb.MessageOptions")))
	}

	public Reset(): void {
		let x: MessageOptions | $.VarRef<MessageOptions> | null = this;
		$.assignStruct($.pointerValue<MessageOptions>(x), $.markAsStructValue(new MessageOptions()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 11)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.MessageOptions", /* @__PURE__ */ $.pointerType("descriptorpb.MessageOptions")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: MessageOptions | $.VarRef<MessageOptions> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.MessageOptions", /* @__PURE__ */ $.pointerType("descriptorpb.MessageOptions")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.MessageOptions",
		() => new MessageOptions(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDeprecated", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetDeprecatedLegacyJsonFieldConflicts", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetFeatures", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet") }], pointerReceiver: true }, { name: "GetMapEntry", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetMessageSetWireFormat", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetNoStandardDescriptorAccessor", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetUninterpretedOption", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")) }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		MessageOptions,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "extensionFields", key: "extensionFields", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField") }, { name: "MessageSetWireFormat", key: "MessageSetWireFormat", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,1,opt,name=message_set_wire_format,json=messageSetWireFormat,def=0\" json:\"message_set_wire_format,omitempty\"" }, { name: "NoStandardDescriptorAccessor", key: "NoStandardDescriptorAccessor", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,2,opt,name=no_standard_descriptor_accessor,json=noStandardDescriptorAccessor,def=0\" json:\"no_standard_descriptor_accessor,omitempty\"" }, { name: "Deprecated", key: "Deprecated", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,3,opt,name=deprecated,def=0\" json:\"deprecated,omitempty\"" }, { name: "MapEntry", key: "MapEntry", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,7,opt,name=map_entry,json=mapEntry\" json:\"map_entry,omitempty\"" }, { name: "DeprecatedLegacyJsonFieldConflicts", key: "DeprecatedLegacyJsonFieldConflicts", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,11,opt,name=deprecated_legacy_json_field_conflicts,json=deprecatedLegacyJsonFieldConflicts\" json:\"deprecated_legacy_json_field_conflicts,omitempty\"" }, { name: "Features", key: "Features", type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet"), tag: "protobuf:\"bytes,12,opt,name=features\" json:\"features,omitempty\"" }, { name: "UninterpretedOption", key: "UninterpretedOption", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")), tag: "protobuf:\"bytes,999,rep,name=uninterpreted_option,json=uninterpretedOption\" json:\"uninterpreted_option,omitempty\"" }]
	)
}

export class FieldOptions {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get extensionFields(): protoimpl.ExtensionFields {
		return this._fields.extensionFields
	}

	public set extensionFields(value: protoimpl.ExtensionFields) {
		this._fields.extensionFields = value
	}

	// The ctype option instructs the C++ code generator to use a different
	// representation of the field than it normally would.  See the specific
	// options below.  This option is only implemented to support use of
	// [ctype=CORD] and [ctype=STRING] (the default) on non-repeated fields of
	// type "bytes" in the open source release -- sorry, we'll try to include
	// other types in a future version!
	public get Ctype(): $.VarRef<FieldOptions_CType> | null {
		return this._fields.Ctype
	}

	public set Ctype(value: $.VarRef<FieldOptions_CType> | null) {
		this._fields.Ctype = value
	}

	// The packed option can be enabled for repeated primitive fields to enable
	// a more efficient representation on the wire. Rather than repeatedly
	// writing the tag and type for each element, the entire array is encoded as
	// a single length-delimited blob. In proto3, only explicit setting it to
	// false will avoid using packed encoding.  This option is prohibited in
	// Editions, but the `repeated_field_encoding` feature can be used to control
	// the behavior.
	public get Packed(): $.VarRef<boolean> | null {
		return this._fields.Packed
	}

	public set Packed(value: $.VarRef<boolean> | null) {
		this._fields.Packed = value
	}

	// The jstype option determines the JavaScript type used for values of the
	// field.  The option is permitted only for 64 bit integral and fixed types
	// (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
	// is represented as JavaScript string, which avoids loss of precision that
	// can happen when a large value is converted to a floating point JavaScript.
	// Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
	// use the JavaScript "number" type.  The behavior of the default option
	// JS_NORMAL is implementation dependent.
	//
	// This option is an enum to permit additional types to be added, e.g.
	// goog.math.Integer.
	public get Jstype(): $.VarRef<FieldOptions_JSType> | null {
		return this._fields.Jstype
	}

	public set Jstype(value: $.VarRef<FieldOptions_JSType> | null) {
		this._fields.Jstype = value
	}

	// Should this field be parsed lazily?  Lazy applies only to message-type
	// fields.  It means that when the outer message is initially parsed, the
	// inner message's contents will not be parsed but instead stored in encoded
	// form.  The inner message will actually be parsed when it is first accessed.
	//
	// This is only a hint.  Implementations are free to choose whether to use
	// eager or lazy parsing regardless of the value of this option.  However,
	// setting this option true suggests that the protocol author believes that
	// using lazy parsing on this field is worth the additional bookkeeping
	// overhead typically needed to implement it.
	//
	// This option does not affect the public interface of any generated code;
	// all method signatures remain the same.  Furthermore, thread-safety of the
	// interface is not affected by this option; const methods remain safe to
	// call from multiple threads concurrently, while non-const methods continue
	// to require exclusive access.
	//
	// Note that lazy message fields are still eagerly verified to check
	// ill-formed wireformat or missing required fields. Calling IsInitialized()
	// on the outer message would fail if the inner message has missing required
	// fields. Failed verification would result in parsing failure (except when
	// uninitialized messages are acceptable).
	public get Lazy(): $.VarRef<boolean> | null {
		return this._fields.Lazy
	}

	public set Lazy(value: $.VarRef<boolean> | null) {
		this._fields.Lazy = value
	}

	// unverified_lazy does no correctness checks on the byte stream. This should
	// only be used where lazy with verification is prohibitive for performance
	// reasons.
	public get UnverifiedLazy(): $.VarRef<boolean> | null {
		return this._fields.UnverifiedLazy
	}

	public set UnverifiedLazy(value: $.VarRef<boolean> | null) {
		this._fields.UnverifiedLazy = value
	}

	// Is this field deprecated?
	// Depending on the target platform, this can emit Deprecated annotations
	// for accessors, or it will be completely ignored; in the very least, this
	// is a formalization for deprecating fields.
	public get Deprecated(): $.VarRef<boolean> | null {
		return this._fields.Deprecated
	}

	public set Deprecated(value: $.VarRef<boolean> | null) {
		this._fields.Deprecated = value
	}

	// For Google-internal migration only. Do not use.
	public get Weak(): $.VarRef<boolean> | null {
		return this._fields.Weak
	}

	public set Weak(value: $.VarRef<boolean> | null) {
		this._fields.Weak = value
	}

	// Indicate that the field value should not be printed out when using debug
	// formats, e.g. when the field contains sensitive credentials.
	public get DebugRedact(): $.VarRef<boolean> | null {
		return this._fields.DebugRedact
	}

	public set DebugRedact(value: $.VarRef<boolean> | null) {
		this._fields.DebugRedact = value
	}

	public get Retention(): $.VarRef<FieldOptions_OptionRetention> | null {
		return this._fields.Retention
	}

	public set Retention(value: $.VarRef<FieldOptions_OptionRetention> | null) {
		this._fields.Retention = value
	}

	public get Targets(): $.Slice<FieldOptions_OptionTargetType> {
		return this._fields.Targets
	}

	public set Targets(value: $.Slice<FieldOptions_OptionTargetType>) {
		this._fields.Targets = value
	}

	public get EditionDefaults(): $.Slice<FieldOptions_EditionDefault | $.VarRef<FieldOptions_EditionDefault> | null> {
		return this._fields.EditionDefaults
	}

	public set EditionDefaults(value: $.Slice<FieldOptions_EditionDefault | $.VarRef<FieldOptions_EditionDefault> | null>) {
		this._fields.EditionDefaults = value
	}

	// Any features defined in the specific edition.
	public get Features(): FeatureSet | $.VarRef<FeatureSet> | null {
		return this._fields.Features
	}

	public set Features(value: FeatureSet | $.VarRef<FeatureSet> | null) {
		this._fields.Features = value
	}

	public get FeatureSupport(): FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null {
		return this._fields.FeatureSupport
	}

	public set FeatureSupport(value: FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null) {
		this._fields.FeatureSupport = value
	}

	// The parser stores options it doesn't recognize here. See above.
	public get UninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		return this._fields.UninterpretedOption
	}

	public set UninterpretedOption(value: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>) {
		this._fields.UninterpretedOption = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		extensionFields: protoimpl.ExtensionFields
		Ctype: $.VarRef<FieldOptions_CType> | null
		Packed: $.VarRef<boolean> | null
		Jstype: $.VarRef<FieldOptions_JSType> | null
		Lazy: $.VarRef<boolean> | null
		UnverifiedLazy: $.VarRef<boolean> | null
		Deprecated: $.VarRef<boolean> | null
		Weak: $.VarRef<boolean> | null
		DebugRedact: $.VarRef<boolean> | null
		Retention: $.VarRef<FieldOptions_OptionRetention> | null
		Targets: $.Slice<FieldOptions_OptionTargetType>
		EditionDefaults: $.Slice<FieldOptions_EditionDefault | $.VarRef<FieldOptions_EditionDefault> | null>
		Features: FeatureSet | $.VarRef<FeatureSet> | null
		FeatureSupport: FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null
		UninterpretedOption: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, extensionFields?: protoimpl.ExtensionFields, Ctype?: $.VarRef<FieldOptions_CType> | null, Packed?: $.VarRef<boolean> | null, Jstype?: $.VarRef<FieldOptions_JSType> | null, Lazy?: $.VarRef<boolean> | null, UnverifiedLazy?: $.VarRef<boolean> | null, Deprecated?: $.VarRef<boolean> | null, Weak?: $.VarRef<boolean> | null, DebugRedact?: $.VarRef<boolean> | null, Retention?: $.VarRef<FieldOptions_OptionRetention> | null, Targets?: $.Slice<FieldOptions_OptionTargetType>, EditionDefaults?: $.Slice<FieldOptions_EditionDefault | $.VarRef<FieldOptions_EditionDefault> | null>, Features?: FeatureSet | $.VarRef<FeatureSet> | null, FeatureSupport?: FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null, UninterpretedOption?: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			extensionFields: init?.extensionFields ?? (null! as protoimpl.ExtensionFields),
			Ctype: init?.Ctype ?? (null! as $.VarRef<FieldOptions_CType> | null),
			Packed: init?.Packed ?? (null! as $.VarRef<boolean> | null),
			Jstype: init?.Jstype ?? (null! as $.VarRef<FieldOptions_JSType> | null),
			Lazy: init?.Lazy ?? (null! as $.VarRef<boolean> | null),
			UnverifiedLazy: init?.UnverifiedLazy ?? (null! as $.VarRef<boolean> | null),
			Deprecated: init?.Deprecated ?? (null! as $.VarRef<boolean> | null),
			Weak: init?.Weak ?? (null! as $.VarRef<boolean> | null),
			DebugRedact: init?.DebugRedact ?? (null! as $.VarRef<boolean> | null),
			Retention: init?.Retention ?? (null! as $.VarRef<FieldOptions_OptionRetention> | null),
			Targets: init?.Targets ?? (null! as $.Slice<FieldOptions_OptionTargetType>),
			EditionDefaults: init?.EditionDefaults ?? (null! as $.Slice<FieldOptions_EditionDefault | $.VarRef<FieldOptions_EditionDefault> | null>),
			Features: init?.Features ?? (null! as FeatureSet | $.VarRef<FeatureSet> | null),
			FeatureSupport: init?.FeatureSupport ?? (null! as FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null),
			UninterpretedOption: init?.UninterpretedOption ?? (null! as $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FieldOptions {
		return new FieldOptions(this, true)
	}

	public __goscriptAssign(source: FieldOptions): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.extensionFields = values.extensionFields
		target.Ctype = values.Ctype
		target.Packed = values.Packed
		target.Jstype = values.Jstype
		target.Lazy = values.Lazy
		target.UnverifiedLazy = values.UnverifiedLazy
		target.Deprecated = values.Deprecated
		target.Weak = values.Weak
		target.DebugRedact = values.DebugRedact
		target.Retention = values.Retention
		target.Targets = values.Targets
		target.EditionDefaults = values.EditionDefaults
		target.Features = values.Features
		target.FeatureSupport = values.FeatureSupport
		target.UninterpretedOption = values.UninterpretedOption
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([12])]
	}

	public GetCtype(): FieldOptions_CType {
		const x: FieldOptions | $.VarRef<FieldOptions> | null = this;
		const x$: FieldOptions = x == null ? $.pointerTarget<FieldOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldOptions>(x)
		if ((x != null) && ((x$ as FieldOptions).Ctype != null)) {
			return $.pointerValue<FieldOptions_CType>((x$ as FieldOptions).Ctype)
		}
		return 0
	}

	public GetDebugRedact(): boolean {
		const x: FieldOptions | $.VarRef<FieldOptions> | null = this;
		const x$: FieldOptions = x == null ? $.pointerTarget<FieldOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldOptions>(x)
		if ((x != null) && ((x$ as FieldOptions).DebugRedact != null)) {
			return $.pointerValue<boolean>((x$ as FieldOptions).DebugRedact)
		}
		return false
	}

	public GetDeprecated(): boolean {
		const x: FieldOptions | $.VarRef<FieldOptions> | null = this;
		const x$: FieldOptions = x == null ? $.pointerTarget<FieldOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldOptions>(x)
		if ((x != null) && ((x$ as FieldOptions).Deprecated != null)) {
			return $.pointerValue<boolean>((x$ as FieldOptions).Deprecated)
		}
		return false
	}

	public GetEditionDefaults(): $.Slice<FieldOptions_EditionDefault | $.VarRef<FieldOptions_EditionDefault> | null> {
		const x: FieldOptions | $.VarRef<FieldOptions> | null = this;
		if (x != null) {
			return $.pointerValue<FieldOptions>(x).EditionDefaults
		}
		return null
	}

	public GetFeatureSupport(): FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null {
		const x: FieldOptions | $.VarRef<FieldOptions> | null = this;
		if (x != null) {
			return $.pointerValue<FieldOptions>(x).FeatureSupport
		}
		return null
	}

	public GetFeatures(): FeatureSet | $.VarRef<FeatureSet> | null {
		const x: FieldOptions | $.VarRef<FieldOptions> | null = this;
		if (x != null) {
			return $.pointerValue<FieldOptions>(x).Features
		}
		return null
	}

	public GetJstype(): FieldOptions_JSType {
		const x: FieldOptions | $.VarRef<FieldOptions> | null = this;
		const x$: FieldOptions = x == null ? $.pointerTarget<FieldOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldOptions>(x)
		if ((x != null) && ((x$ as FieldOptions).Jstype != null)) {
			return $.pointerValue<FieldOptions_JSType>((x$ as FieldOptions).Jstype)
		}
		return 0
	}

	public GetLazy(): boolean {
		const x: FieldOptions | $.VarRef<FieldOptions> | null = this;
		const x$: FieldOptions = x == null ? $.pointerTarget<FieldOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldOptions>(x)
		if ((x != null) && ((x$ as FieldOptions).Lazy != null)) {
			return $.pointerValue<boolean>((x$ as FieldOptions).Lazy)
		}
		return false
	}

	public GetPacked(): boolean {
		const x: FieldOptions | $.VarRef<FieldOptions> | null = this;
		const x$: FieldOptions = x == null ? $.pointerTarget<FieldOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldOptions>(x)
		if ((x != null) && ((x$ as FieldOptions).Packed != null)) {
			return $.pointerValue<boolean>((x$ as FieldOptions).Packed)
		}
		return false
	}

	public GetRetention(): FieldOptions_OptionRetention {
		const x: FieldOptions | $.VarRef<FieldOptions> | null = this;
		const x$: FieldOptions = x == null ? $.pointerTarget<FieldOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldOptions>(x)
		if ((x != null) && ((x$ as FieldOptions).Retention != null)) {
			return $.pointerValue<FieldOptions_OptionRetention>((x$ as FieldOptions).Retention)
		}
		return 0
	}

	public GetTargets(): $.Slice<FieldOptions_OptionTargetType> {
		const x: FieldOptions | $.VarRef<FieldOptions> | null = this;
		if (x != null) {
			return $.pointerValue<FieldOptions>(x).Targets
		}
		return null
	}

	public GetUninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		const x: FieldOptions | $.VarRef<FieldOptions> | null = this;
		if (x != null) {
			return $.pointerValue<FieldOptions>(x).UninterpretedOption
		}
		return null
	}

	public GetUnverifiedLazy(): boolean {
		const x: FieldOptions | $.VarRef<FieldOptions> | null = this;
		const x$: FieldOptions = x == null ? $.pointerTarget<FieldOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldOptions>(x)
		if ((x != null) && ((x$ as FieldOptions).UnverifiedLazy != null)) {
			return $.pointerValue<boolean>((x$ as FieldOptions).UnverifiedLazy)
		}
		return false
	}

	public GetWeak(): boolean {
		const x: FieldOptions | $.VarRef<FieldOptions> | null = this;
		const x$: FieldOptions = x == null ? $.pointerTarget<FieldOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldOptions>(x)
		if ((x != null) && ((x$ as FieldOptions).Weak != null)) {
			return $.pointerValue<boolean>((x$ as FieldOptions).Weak)
		}
		return false
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: FieldOptions | $.VarRef<FieldOptions> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 12)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FieldOptions", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.FieldOptions", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions")))
	}

	public Reset(): void {
		let x: FieldOptions | $.VarRef<FieldOptions> | null = this;
		$.assignStruct($.pointerValue<FieldOptions>(x), $.markAsStructValue(new FieldOptions()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 12)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FieldOptions", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: FieldOptions | $.VarRef<FieldOptions> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.FieldOptions", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.FieldOptions",
		() => new FieldOptions(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetCtype", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_CType") }], pointerReceiver: true }, { name: "GetDebugRedact", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetDeprecated", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetEditionDefaults", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_EditionDefault")) }], pointerReceiver: true }, { name: "GetFeatureSupport", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_FeatureSupport") }], pointerReceiver: true }, { name: "GetFeatures", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet") }], pointerReceiver: true }, { name: "GetJstype", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_JSType") }], pointerReceiver: true }, { name: "GetLazy", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetPacked", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetRetention", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_OptionRetention") }], pointerReceiver: true }, { name: "GetTargets", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_OptionTargetType")) }], pointerReceiver: true }, { name: "GetUninterpretedOption", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")) }], pointerReceiver: true }, { name: "GetUnverifiedLazy", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetWeak", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		FieldOptions,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "extensionFields", key: "extensionFields", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField") }, { name: "Ctype", key: "Ctype", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_CType")), tag: "protobuf:\"varint,1,opt,name=ctype,enum=google.protobuf.FieldOptions_CType,def=0\" json:\"ctype,omitempty\"" }, { name: "Packed", key: "Packed", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,2,opt,name=packed\" json:\"packed,omitempty\"" }, { name: "Jstype", key: "Jstype", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_JSType")), tag: "protobuf:\"varint,6,opt,name=jstype,enum=google.protobuf.FieldOptions_JSType,def=0\" json:\"jstype,omitempty\"" }, { name: "Lazy", key: "Lazy", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,5,opt,name=lazy,def=0\" json:\"lazy,omitempty\"" }, { name: "UnverifiedLazy", key: "UnverifiedLazy", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,15,opt,name=unverified_lazy,json=unverifiedLazy,def=0\" json:\"unverified_lazy,omitempty\"" }, { name: "Deprecated", key: "Deprecated", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,3,opt,name=deprecated,def=0\" json:\"deprecated,omitempty\"" }, { name: "Weak", key: "Weak", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,10,opt,name=weak,def=0\" json:\"weak,omitempty\"" }, { name: "DebugRedact", key: "DebugRedact", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,16,opt,name=debug_redact,json=debugRedact,def=0\" json:\"debug_redact,omitempty\"" }, { name: "Retention", key: "Retention", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_OptionRetention")), tag: "protobuf:\"varint,17,opt,name=retention,enum=google.protobuf.FieldOptions_OptionRetention\" json:\"retention,omitempty\"" }, { name: "Targets", key: "Targets", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_OptionTargetType")), tag: "protobuf:\"varint,19,rep,name=targets,enum=google.protobuf.FieldOptions_OptionTargetType\" json:\"targets,omitempty\"" }, { name: "EditionDefaults", key: "EditionDefaults", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_EditionDefault")), tag: "protobuf:\"bytes,20,rep,name=edition_defaults,json=editionDefaults\" json:\"edition_defaults,omitempty\"" }, { name: "Features", key: "Features", type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet"), tag: "protobuf:\"bytes,21,opt,name=features\" json:\"features,omitempty\"" }, { name: "FeatureSupport", key: "FeatureSupport", type: /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_FeatureSupport"), tag: "protobuf:\"bytes,22,opt,name=feature_support,json=featureSupport\" json:\"feature_support,omitempty\"" }, { name: "UninterpretedOption", key: "UninterpretedOption", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")), tag: "protobuf:\"bytes,999,rep,name=uninterpreted_option,json=uninterpretedOption\" json:\"uninterpreted_option,omitempty\"" }]
	)
}

export class OneofOptions {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get extensionFields(): protoimpl.ExtensionFields {
		return this._fields.extensionFields
	}

	public set extensionFields(value: protoimpl.ExtensionFields) {
		this._fields.extensionFields = value
	}

	// Any features defined in the specific edition.
	public get Features(): FeatureSet | $.VarRef<FeatureSet> | null {
		return this._fields.Features
	}

	public set Features(value: FeatureSet | $.VarRef<FeatureSet> | null) {
		this._fields.Features = value
	}

	// The parser stores options it doesn't recognize here. See above.
	public get UninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		return this._fields.UninterpretedOption
	}

	public set UninterpretedOption(value: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>) {
		this._fields.UninterpretedOption = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		extensionFields: protoimpl.ExtensionFields
		Features: FeatureSet | $.VarRef<FeatureSet> | null
		UninterpretedOption: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, extensionFields?: protoimpl.ExtensionFields, Features?: FeatureSet | $.VarRef<FeatureSet> | null, UninterpretedOption?: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			extensionFields: init?.extensionFields ?? (null! as protoimpl.ExtensionFields),
			Features: init?.Features ?? (null! as FeatureSet | $.VarRef<FeatureSet> | null),
			UninterpretedOption: init?.UninterpretedOption ?? (null! as $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OneofOptions {
		return new OneofOptions(this, true)
	}

	public __goscriptAssign(source: OneofOptions): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.extensionFields = values.extensionFields
		target.Features = values.Features
		target.UninterpretedOption = values.UninterpretedOption
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([13])]
	}

	public GetFeatures(): FeatureSet | $.VarRef<FeatureSet> | null {
		const x: OneofOptions | $.VarRef<OneofOptions> | null = this;
		if (x != null) {
			return $.pointerValue<OneofOptions>(x).Features
		}
		return null
	}

	public GetUninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		const x: OneofOptions | $.VarRef<OneofOptions> | null = this;
		if (x != null) {
			return $.pointerValue<OneofOptions>(x).UninterpretedOption
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: OneofOptions | $.VarRef<OneofOptions> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 13)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.OneofOptions", /* @__PURE__ */ $.pointerType("descriptorpb.OneofOptions")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.OneofOptions", /* @__PURE__ */ $.pointerType("descriptorpb.OneofOptions")))
	}

	public Reset(): void {
		let x: OneofOptions | $.VarRef<OneofOptions> | null = this;
		$.assignStruct($.pointerValue<OneofOptions>(x), $.markAsStructValue(new OneofOptions()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 13)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.OneofOptions", /* @__PURE__ */ $.pointerType("descriptorpb.OneofOptions")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: OneofOptions | $.VarRef<OneofOptions> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.OneofOptions", /* @__PURE__ */ $.pointerType("descriptorpb.OneofOptions")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.OneofOptions",
		() => new OneofOptions(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetFeatures", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet") }], pointerReceiver: true }, { name: "GetUninterpretedOption", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")) }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		OneofOptions,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "extensionFields", key: "extensionFields", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField") }, { name: "Features", key: "Features", type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet"), tag: "protobuf:\"bytes,1,opt,name=features\" json:\"features,omitempty\"" }, { name: "UninterpretedOption", key: "UninterpretedOption", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")), tag: "protobuf:\"bytes,999,rep,name=uninterpreted_option,json=uninterpretedOption\" json:\"uninterpreted_option,omitempty\"" }]
	)
}

export class EnumOptions {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get extensionFields(): protoimpl.ExtensionFields {
		return this._fields.extensionFields
	}

	public set extensionFields(value: protoimpl.ExtensionFields) {
		this._fields.extensionFields = value
	}

	// Set this option to true to allow mapping different tag names to the same
	// value.
	public get AllowAlias(): $.VarRef<boolean> | null {
		return this._fields.AllowAlias
	}

	public set AllowAlias(value: $.VarRef<boolean> | null) {
		this._fields.AllowAlias = value
	}

	// Is this enum deprecated?
	// Depending on the target platform, this can emit Deprecated annotations
	// for the enum, or it will be completely ignored; in the very least, this
	// is a formalization for deprecating enums.
	public get Deprecated(): $.VarRef<boolean> | null {
		return this._fields.Deprecated
	}

	public set Deprecated(value: $.VarRef<boolean> | null) {
		this._fields.Deprecated = value
	}

	// Enable the legacy handling of JSON field name conflicts.  This lowercases
	// and strips underscored from the fields before comparison in proto3 only.
	// The new behavior takes `json_name` into account and applies to proto2 as
	// well.
	// TODO Remove this legacy behavior once downstream teams have
	// had time to migrate.
	//
	// Deprecated: Marked as deprecated in google/protobuf/descriptor.proto.
	public get DeprecatedLegacyJsonFieldConflicts(): $.VarRef<boolean> | null {
		return this._fields.DeprecatedLegacyJsonFieldConflicts
	}

	public set DeprecatedLegacyJsonFieldConflicts(value: $.VarRef<boolean> | null) {
		this._fields.DeprecatedLegacyJsonFieldConflicts = value
	}

	// Any features defined in the specific edition.
	public get Features(): FeatureSet | $.VarRef<FeatureSet> | null {
		return this._fields.Features
	}

	public set Features(value: FeatureSet | $.VarRef<FeatureSet> | null) {
		this._fields.Features = value
	}

	// The parser stores options it doesn't recognize here. See above.
	public get UninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		return this._fields.UninterpretedOption
	}

	public set UninterpretedOption(value: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>) {
		this._fields.UninterpretedOption = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		extensionFields: protoimpl.ExtensionFields
		AllowAlias: $.VarRef<boolean> | null
		Deprecated: $.VarRef<boolean> | null
		DeprecatedLegacyJsonFieldConflicts: $.VarRef<boolean> | null
		Features: FeatureSet | $.VarRef<FeatureSet> | null
		UninterpretedOption: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, extensionFields?: protoimpl.ExtensionFields, AllowAlias?: $.VarRef<boolean> | null, Deprecated?: $.VarRef<boolean> | null, DeprecatedLegacyJsonFieldConflicts?: $.VarRef<boolean> | null, Features?: FeatureSet | $.VarRef<FeatureSet> | null, UninterpretedOption?: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			extensionFields: init?.extensionFields ?? (null! as protoimpl.ExtensionFields),
			AllowAlias: init?.AllowAlias ?? (null! as $.VarRef<boolean> | null),
			Deprecated: init?.Deprecated ?? (null! as $.VarRef<boolean> | null),
			DeprecatedLegacyJsonFieldConflicts: init?.DeprecatedLegacyJsonFieldConflicts ?? (null! as $.VarRef<boolean> | null),
			Features: init?.Features ?? (null! as FeatureSet | $.VarRef<FeatureSet> | null),
			UninterpretedOption: init?.UninterpretedOption ?? (null! as $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EnumOptions {
		return new EnumOptions(this, true)
	}

	public __goscriptAssign(source: EnumOptions): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.extensionFields = values.extensionFields
		target.AllowAlias = values.AllowAlias
		target.Deprecated = values.Deprecated
		target.DeprecatedLegacyJsonFieldConflicts = values.DeprecatedLegacyJsonFieldConflicts
		target.Features = values.Features
		target.UninterpretedOption = values.UninterpretedOption
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([14])]
	}

	public GetAllowAlias(): boolean {
		const x: EnumOptions | $.VarRef<EnumOptions> | null = this;
		const x$: EnumOptions = x == null ? $.pointerTarget<EnumOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<EnumOptions>(x)
		if ((x != null) && ((x$ as EnumOptions).AllowAlias != null)) {
			return $.pointerValue<boolean>((x$ as EnumOptions).AllowAlias)
		}
		return false
	}

	public GetDeprecated(): boolean {
		const x: EnumOptions | $.VarRef<EnumOptions> | null = this;
		const x$: EnumOptions = x == null ? $.pointerTarget<EnumOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<EnumOptions>(x)
		if ((x != null) && ((x$ as EnumOptions).Deprecated != null)) {
			return $.pointerValue<boolean>((x$ as EnumOptions).Deprecated)
		}
		return false
	}

	public GetDeprecatedLegacyJsonFieldConflicts(): boolean {
		const x: EnumOptions | $.VarRef<EnumOptions> | null = this;
		const x$: EnumOptions = x == null ? $.pointerTarget<EnumOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<EnumOptions>(x)
		if ((x != null) && ((x$ as EnumOptions).DeprecatedLegacyJsonFieldConflicts != null)) {
			return $.pointerValue<boolean>((x$ as EnumOptions).DeprecatedLegacyJsonFieldConflicts)
		}
		return false
	}

	public GetFeatures(): FeatureSet | $.VarRef<FeatureSet> | null {
		const x: EnumOptions | $.VarRef<EnumOptions> | null = this;
		if (x != null) {
			return $.pointerValue<EnumOptions>(x).Features
		}
		return null
	}

	public GetUninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		const x: EnumOptions | $.VarRef<EnumOptions> | null = this;
		if (x != null) {
			return $.pointerValue<EnumOptions>(x).UninterpretedOption
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: EnumOptions | $.VarRef<EnumOptions> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 14)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.EnumOptions", /* @__PURE__ */ $.pointerType("descriptorpb.EnumOptions")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.EnumOptions", /* @__PURE__ */ $.pointerType("descriptorpb.EnumOptions")))
	}

	public Reset(): void {
		let x: EnumOptions | $.VarRef<EnumOptions> | null = this;
		$.assignStruct($.pointerValue<EnumOptions>(x), $.markAsStructValue(new EnumOptions()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 14)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.EnumOptions", /* @__PURE__ */ $.pointerType("descriptorpb.EnumOptions")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: EnumOptions | $.VarRef<EnumOptions> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.EnumOptions", /* @__PURE__ */ $.pointerType("descriptorpb.EnumOptions")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.EnumOptions",
		() => new EnumOptions(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetAllowAlias", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetDeprecated", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetDeprecatedLegacyJsonFieldConflicts", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetFeatures", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet") }], pointerReceiver: true }, { name: "GetUninterpretedOption", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")) }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		EnumOptions,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "extensionFields", key: "extensionFields", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField") }, { name: "AllowAlias", key: "AllowAlias", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,2,opt,name=allow_alias,json=allowAlias\" json:\"allow_alias,omitempty\"" }, { name: "Deprecated", key: "Deprecated", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,3,opt,name=deprecated,def=0\" json:\"deprecated,omitempty\"" }, { name: "DeprecatedLegacyJsonFieldConflicts", key: "DeprecatedLegacyJsonFieldConflicts", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,6,opt,name=deprecated_legacy_json_field_conflicts,json=deprecatedLegacyJsonFieldConflicts\" json:\"deprecated_legacy_json_field_conflicts,omitempty\"" }, { name: "Features", key: "Features", type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet"), tag: "protobuf:\"bytes,7,opt,name=features\" json:\"features,omitempty\"" }, { name: "UninterpretedOption", key: "UninterpretedOption", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")), tag: "protobuf:\"bytes,999,rep,name=uninterpreted_option,json=uninterpretedOption\" json:\"uninterpreted_option,omitempty\"" }]
	)
}

export class EnumValueOptions {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get extensionFields(): protoimpl.ExtensionFields {
		return this._fields.extensionFields
	}

	public set extensionFields(value: protoimpl.ExtensionFields) {
		this._fields.extensionFields = value
	}

	// Is this enum value deprecated?
	// Depending on the target platform, this can emit Deprecated annotations
	// for the enum value, or it will be completely ignored; in the very least,
	// this is a formalization for deprecating enum values.
	public get Deprecated(): $.VarRef<boolean> | null {
		return this._fields.Deprecated
	}

	public set Deprecated(value: $.VarRef<boolean> | null) {
		this._fields.Deprecated = value
	}

	// Any features defined in the specific edition.
	public get Features(): FeatureSet | $.VarRef<FeatureSet> | null {
		return this._fields.Features
	}

	public set Features(value: FeatureSet | $.VarRef<FeatureSet> | null) {
		this._fields.Features = value
	}

	// Indicate that fields annotated with this enum value should not be printed
	// out when using debug formats, e.g. when the field contains sensitive
	// credentials.
	public get DebugRedact(): $.VarRef<boolean> | null {
		return this._fields.DebugRedact
	}

	public set DebugRedact(value: $.VarRef<boolean> | null) {
		this._fields.DebugRedact = value
	}

	// Information about the support window of a feature value.
	public get FeatureSupport(): FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null {
		return this._fields.FeatureSupport
	}

	public set FeatureSupport(value: FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null) {
		this._fields.FeatureSupport = value
	}

	// The parser stores options it doesn't recognize here. See above.
	public get UninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		return this._fields.UninterpretedOption
	}

	public set UninterpretedOption(value: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>) {
		this._fields.UninterpretedOption = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		extensionFields: protoimpl.ExtensionFields
		Deprecated: $.VarRef<boolean> | null
		Features: FeatureSet | $.VarRef<FeatureSet> | null
		DebugRedact: $.VarRef<boolean> | null
		FeatureSupport: FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null
		UninterpretedOption: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, extensionFields?: protoimpl.ExtensionFields, Deprecated?: $.VarRef<boolean> | null, Features?: FeatureSet | $.VarRef<FeatureSet> | null, DebugRedact?: $.VarRef<boolean> | null, FeatureSupport?: FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null, UninterpretedOption?: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			extensionFields: init?.extensionFields ?? (null! as protoimpl.ExtensionFields),
			Deprecated: init?.Deprecated ?? (null! as $.VarRef<boolean> | null),
			Features: init?.Features ?? (null! as FeatureSet | $.VarRef<FeatureSet> | null),
			DebugRedact: init?.DebugRedact ?? (null! as $.VarRef<boolean> | null),
			FeatureSupport: init?.FeatureSupport ?? (null! as FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null),
			UninterpretedOption: init?.UninterpretedOption ?? (null! as $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EnumValueOptions {
		return new EnumValueOptions(this, true)
	}

	public __goscriptAssign(source: EnumValueOptions): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.extensionFields = values.extensionFields
		target.Deprecated = values.Deprecated
		target.Features = values.Features
		target.DebugRedact = values.DebugRedact
		target.FeatureSupport = values.FeatureSupport
		target.UninterpretedOption = values.UninterpretedOption
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([15])]
	}

	public GetDebugRedact(): boolean {
		const x: EnumValueOptions | $.VarRef<EnumValueOptions> | null = this;
		const x$: EnumValueOptions = x == null ? $.pointerTarget<EnumValueOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<EnumValueOptions>(x)
		if ((x != null) && ((x$ as EnumValueOptions).DebugRedact != null)) {
			return $.pointerValue<boolean>((x$ as EnumValueOptions).DebugRedact)
		}
		return false
	}

	public GetDeprecated(): boolean {
		const x: EnumValueOptions | $.VarRef<EnumValueOptions> | null = this;
		const x$: EnumValueOptions = x == null ? $.pointerTarget<EnumValueOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<EnumValueOptions>(x)
		if ((x != null) && ((x$ as EnumValueOptions).Deprecated != null)) {
			return $.pointerValue<boolean>((x$ as EnumValueOptions).Deprecated)
		}
		return false
	}

	public GetFeatureSupport(): FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null {
		const x: EnumValueOptions | $.VarRef<EnumValueOptions> | null = this;
		if (x != null) {
			return $.pointerValue<EnumValueOptions>(x).FeatureSupport
		}
		return null
	}

	public GetFeatures(): FeatureSet | $.VarRef<FeatureSet> | null {
		const x: EnumValueOptions | $.VarRef<EnumValueOptions> | null = this;
		if (x != null) {
			return $.pointerValue<EnumValueOptions>(x).Features
		}
		return null
	}

	public GetUninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		const x: EnumValueOptions | $.VarRef<EnumValueOptions> | null = this;
		if (x != null) {
			return $.pointerValue<EnumValueOptions>(x).UninterpretedOption
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: EnumValueOptions | $.VarRef<EnumValueOptions> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 15)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.EnumValueOptions", /* @__PURE__ */ $.pointerType("descriptorpb.EnumValueOptions")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.EnumValueOptions", /* @__PURE__ */ $.pointerType("descriptorpb.EnumValueOptions")))
	}

	public Reset(): void {
		let x: EnumValueOptions | $.VarRef<EnumValueOptions> | null = this;
		$.assignStruct($.pointerValue<EnumValueOptions>(x), $.markAsStructValue(new EnumValueOptions()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 15)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.EnumValueOptions", /* @__PURE__ */ $.pointerType("descriptorpb.EnumValueOptions")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: EnumValueOptions | $.VarRef<EnumValueOptions> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.EnumValueOptions", /* @__PURE__ */ $.pointerType("descriptorpb.EnumValueOptions")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.EnumValueOptions",
		() => new EnumValueOptions(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDebugRedact", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetDeprecated", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetFeatureSupport", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_FeatureSupport") }], pointerReceiver: true }, { name: "GetFeatures", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet") }], pointerReceiver: true }, { name: "GetUninterpretedOption", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")) }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		EnumValueOptions,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "extensionFields", key: "extensionFields", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField") }, { name: "Deprecated", key: "Deprecated", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,1,opt,name=deprecated,def=0\" json:\"deprecated,omitempty\"" }, { name: "Features", key: "Features", type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet"), tag: "protobuf:\"bytes,2,opt,name=features\" json:\"features,omitempty\"" }, { name: "DebugRedact", key: "DebugRedact", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,3,opt,name=debug_redact,json=debugRedact,def=0\" json:\"debug_redact,omitempty\"" }, { name: "FeatureSupport", key: "FeatureSupport", type: /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_FeatureSupport"), tag: "protobuf:\"bytes,4,opt,name=feature_support,json=featureSupport\" json:\"feature_support,omitempty\"" }, { name: "UninterpretedOption", key: "UninterpretedOption", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")), tag: "protobuf:\"bytes,999,rep,name=uninterpreted_option,json=uninterpretedOption\" json:\"uninterpreted_option,omitempty\"" }]
	)
}

export class ServiceOptions {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get extensionFields(): protoimpl.ExtensionFields {
		return this._fields.extensionFields
	}

	public set extensionFields(value: protoimpl.ExtensionFields) {
		this._fields.extensionFields = value
	}

	// Any features defined in the specific edition.
	public get Features(): FeatureSet | $.VarRef<FeatureSet> | null {
		return this._fields.Features
	}

	public set Features(value: FeatureSet | $.VarRef<FeatureSet> | null) {
		this._fields.Features = value
	}

	// Is this service deprecated?
	// Depending on the target platform, this can emit Deprecated annotations
	// for the service, or it will be completely ignored; in the very least,
	// this is a formalization for deprecating services.
	public get Deprecated(): $.VarRef<boolean> | null {
		return this._fields.Deprecated
	}

	public set Deprecated(value: $.VarRef<boolean> | null) {
		this._fields.Deprecated = value
	}

	// The parser stores options it doesn't recognize here. See above.
	public get UninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		return this._fields.UninterpretedOption
	}

	public set UninterpretedOption(value: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>) {
		this._fields.UninterpretedOption = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		extensionFields: protoimpl.ExtensionFields
		Features: FeatureSet | $.VarRef<FeatureSet> | null
		Deprecated: $.VarRef<boolean> | null
		UninterpretedOption: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, extensionFields?: protoimpl.ExtensionFields, Features?: FeatureSet | $.VarRef<FeatureSet> | null, Deprecated?: $.VarRef<boolean> | null, UninterpretedOption?: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			extensionFields: init?.extensionFields ?? (null! as protoimpl.ExtensionFields),
			Features: init?.Features ?? (null! as FeatureSet | $.VarRef<FeatureSet> | null),
			Deprecated: init?.Deprecated ?? (null! as $.VarRef<boolean> | null),
			UninterpretedOption: init?.UninterpretedOption ?? (null! as $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServiceOptions {
		return new ServiceOptions(this, true)
	}

	public __goscriptAssign(source: ServiceOptions): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.extensionFields = values.extensionFields
		target.Features = values.Features
		target.Deprecated = values.Deprecated
		target.UninterpretedOption = values.UninterpretedOption
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([16])]
	}

	public GetDeprecated(): boolean {
		const x: ServiceOptions | $.VarRef<ServiceOptions> | null = this;
		const x$: ServiceOptions = x == null ? $.pointerTarget<ServiceOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<ServiceOptions>(x)
		if ((x != null) && ((x$ as ServiceOptions).Deprecated != null)) {
			return $.pointerValue<boolean>((x$ as ServiceOptions).Deprecated)
		}
		return false
	}

	public GetFeatures(): FeatureSet | $.VarRef<FeatureSet> | null {
		const x: ServiceOptions | $.VarRef<ServiceOptions> | null = this;
		if (x != null) {
			return $.pointerValue<ServiceOptions>(x).Features
		}
		return null
	}

	public GetUninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		const x: ServiceOptions | $.VarRef<ServiceOptions> | null = this;
		if (x != null) {
			return $.pointerValue<ServiceOptions>(x).UninterpretedOption
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: ServiceOptions | $.VarRef<ServiceOptions> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 16)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.ServiceOptions", /* @__PURE__ */ $.pointerType("descriptorpb.ServiceOptions")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.ServiceOptions", /* @__PURE__ */ $.pointerType("descriptorpb.ServiceOptions")))
	}

	public Reset(): void {
		let x: ServiceOptions | $.VarRef<ServiceOptions> | null = this;
		$.assignStruct($.pointerValue<ServiceOptions>(x), $.markAsStructValue(new ServiceOptions()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 16)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.ServiceOptions", /* @__PURE__ */ $.pointerType("descriptorpb.ServiceOptions")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: ServiceOptions | $.VarRef<ServiceOptions> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.ServiceOptions", /* @__PURE__ */ $.pointerType("descriptorpb.ServiceOptions")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.ServiceOptions",
		() => new ServiceOptions(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDeprecated", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetFeatures", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet") }], pointerReceiver: true }, { name: "GetUninterpretedOption", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")) }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		ServiceOptions,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "extensionFields", key: "extensionFields", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField") }, { name: "Features", key: "Features", type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet"), tag: "protobuf:\"bytes,34,opt,name=features\" json:\"features,omitempty\"" }, { name: "Deprecated", key: "Deprecated", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,33,opt,name=deprecated,def=0\" json:\"deprecated,omitempty\"" }, { name: "UninterpretedOption", key: "UninterpretedOption", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")), tag: "protobuf:\"bytes,999,rep,name=uninterpreted_option,json=uninterpretedOption\" json:\"uninterpreted_option,omitempty\"" }]
	)
}

export class MethodOptions {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get extensionFields(): protoimpl.ExtensionFields {
		return this._fields.extensionFields
	}

	public set extensionFields(value: protoimpl.ExtensionFields) {
		this._fields.extensionFields = value
	}

	// Is this method deprecated?
	// Depending on the target platform, this can emit Deprecated annotations
	// for the method, or it will be completely ignored; in the very least,
	// this is a formalization for deprecating methods.
	public get Deprecated(): $.VarRef<boolean> | null {
		return this._fields.Deprecated
	}

	public set Deprecated(value: $.VarRef<boolean> | null) {
		this._fields.Deprecated = value
	}

	public get IdempotencyLevel(): $.VarRef<MethodOptions_IdempotencyLevel> | null {
		return this._fields.IdempotencyLevel
	}

	public set IdempotencyLevel(value: $.VarRef<MethodOptions_IdempotencyLevel> | null) {
		this._fields.IdempotencyLevel = value
	}

	// Any features defined in the specific edition.
	public get Features(): FeatureSet | $.VarRef<FeatureSet> | null {
		return this._fields.Features
	}

	public set Features(value: FeatureSet | $.VarRef<FeatureSet> | null) {
		this._fields.Features = value
	}

	// The parser stores options it doesn't recognize here. See above.
	public get UninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		return this._fields.UninterpretedOption
	}

	public set UninterpretedOption(value: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>) {
		this._fields.UninterpretedOption = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		extensionFields: protoimpl.ExtensionFields
		Deprecated: $.VarRef<boolean> | null
		IdempotencyLevel: $.VarRef<MethodOptions_IdempotencyLevel> | null
		Features: FeatureSet | $.VarRef<FeatureSet> | null
		UninterpretedOption: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, extensionFields?: protoimpl.ExtensionFields, Deprecated?: $.VarRef<boolean> | null, IdempotencyLevel?: $.VarRef<MethodOptions_IdempotencyLevel> | null, Features?: FeatureSet | $.VarRef<FeatureSet> | null, UninterpretedOption?: $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			extensionFields: init?.extensionFields ?? (null! as protoimpl.ExtensionFields),
			Deprecated: init?.Deprecated ?? (null! as $.VarRef<boolean> | null),
			IdempotencyLevel: init?.IdempotencyLevel ?? (null! as $.VarRef<MethodOptions_IdempotencyLevel> | null),
			Features: init?.Features ?? (null! as FeatureSet | $.VarRef<FeatureSet> | null),
			UninterpretedOption: init?.UninterpretedOption ?? (null! as $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MethodOptions {
		return new MethodOptions(this, true)
	}

	public __goscriptAssign(source: MethodOptions): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.extensionFields = values.extensionFields
		target.Deprecated = values.Deprecated
		target.IdempotencyLevel = values.IdempotencyLevel
		target.Features = values.Features
		target.UninterpretedOption = values.UninterpretedOption
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([17])]
	}

	public GetDeprecated(): boolean {
		const x: MethodOptions | $.VarRef<MethodOptions> | null = this;
		const x$: MethodOptions = x == null ? $.pointerTarget<MethodOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<MethodOptions>(x)
		if ((x != null) && ((x$ as MethodOptions).Deprecated != null)) {
			return $.pointerValue<boolean>((x$ as MethodOptions).Deprecated)
		}
		return false
	}

	public GetFeatures(): FeatureSet | $.VarRef<FeatureSet> | null {
		const x: MethodOptions | $.VarRef<MethodOptions> | null = this;
		if (x != null) {
			return $.pointerValue<MethodOptions>(x).Features
		}
		return null
	}

	public GetIdempotencyLevel(): MethodOptions_IdempotencyLevel {
		const x: MethodOptions | $.VarRef<MethodOptions> | null = this;
		const x$: MethodOptions = x == null ? $.pointerTarget<MethodOptions>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<MethodOptions>(x)
		if ((x != null) && ((x$ as MethodOptions).IdempotencyLevel != null)) {
			return $.pointerValue<MethodOptions_IdempotencyLevel>((x$ as MethodOptions).IdempotencyLevel)
		}
		return 0
	}

	public GetUninterpretedOption(): $.Slice<UninterpretedOption | $.VarRef<UninterpretedOption> | null> {
		const x: MethodOptions | $.VarRef<MethodOptions> | null = this;
		if (x != null) {
			return $.pointerValue<MethodOptions>(x).UninterpretedOption
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: MethodOptions | $.VarRef<MethodOptions> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 17)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.MethodOptions", /* @__PURE__ */ $.pointerType("descriptorpb.MethodOptions")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.MethodOptions", /* @__PURE__ */ $.pointerType("descriptorpb.MethodOptions")))
	}

	public Reset(): void {
		let x: MethodOptions | $.VarRef<MethodOptions> | null = this;
		$.assignStruct($.pointerValue<MethodOptions>(x), $.markAsStructValue(new MethodOptions()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 17)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.MethodOptions", /* @__PURE__ */ $.pointerType("descriptorpb.MethodOptions")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: MethodOptions | $.VarRef<MethodOptions> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.MethodOptions", /* @__PURE__ */ $.pointerType("descriptorpb.MethodOptions")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.MethodOptions",
		() => new MethodOptions(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDeprecated", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetFeatures", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet") }], pointerReceiver: true }, { name: "GetIdempotencyLevel", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.MethodOptions_IdempotencyLevel") }], pointerReceiver: true }, { name: "GetUninterpretedOption", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")) }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		MethodOptions,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "extensionFields", key: "extensionFields", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField") }, { name: "Deprecated", key: "Deprecated", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,33,opt,name=deprecated,def=0\" json:\"deprecated,omitempty\"" }, { name: "IdempotencyLevel", key: "IdempotencyLevel", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.MethodOptions_IdempotencyLevel")), tag: "protobuf:\"varint,34,opt,name=idempotency_level,json=idempotencyLevel,enum=google.protobuf.MethodOptions_IdempotencyLevel,def=0\" json:\"idempotency_level,omitempty\"" }, { name: "Features", key: "Features", type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet"), tag: "protobuf:\"bytes,35,opt,name=features\" json:\"features,omitempty\"" }, { name: "UninterpretedOption", key: "UninterpretedOption", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")), tag: "protobuf:\"bytes,999,rep,name=uninterpreted_option,json=uninterpretedOption\" json:\"uninterpreted_option,omitempty\"" }]
	)
}

export class UninterpretedOption {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Name(): $.Slice<UninterpretedOption_NamePart | $.VarRef<UninterpretedOption_NamePart> | null> {
		return this._fields.Name
	}

	public set Name(value: $.Slice<UninterpretedOption_NamePart | $.VarRef<UninterpretedOption_NamePart> | null>) {
		this._fields.Name = value
	}

	// The value of the uninterpreted option, in whatever type the tokenizer
	// identified it as during parsing. Exactly one of these should be set.
	public get IdentifierValue(): $.VarRef<string> | null {
		return this._fields.IdentifierValue
	}

	public set IdentifierValue(value: $.VarRef<string> | null) {
		this._fields.IdentifierValue = value
	}

	public get PositiveIntValue(): $.VarRef<bigint> | null {
		return this._fields.PositiveIntValue
	}

	public set PositiveIntValue(value: $.VarRef<bigint> | null) {
		this._fields.PositiveIntValue = value
	}

	public get NegativeIntValue(): $.VarRef<bigint> | null {
		return this._fields.NegativeIntValue
	}

	public set NegativeIntValue(value: $.VarRef<bigint> | null) {
		this._fields.NegativeIntValue = value
	}

	public get DoubleValue(): $.VarRef<number> | null {
		return this._fields.DoubleValue
	}

	public set DoubleValue(value: $.VarRef<number> | null) {
		this._fields.DoubleValue = value
	}

	public get StringValue(): $.Slice<number> {
		return this._fields.StringValue
	}

	public set StringValue(value: $.Slice<number>) {
		this._fields.StringValue = value
	}

	public get AggregateValue(): $.VarRef<string> | null {
		return this._fields.AggregateValue
	}

	public set AggregateValue(value: $.VarRef<string> | null) {
		this._fields.AggregateValue = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Name: $.Slice<UninterpretedOption_NamePart | $.VarRef<UninterpretedOption_NamePart> | null>
		IdentifierValue: $.VarRef<string> | null
		PositiveIntValue: $.VarRef<bigint> | null
		NegativeIntValue: $.VarRef<bigint> | null
		DoubleValue: $.VarRef<number> | null
		StringValue: $.Slice<number>
		AggregateValue: $.VarRef<string> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Name?: $.Slice<UninterpretedOption_NamePart | $.VarRef<UninterpretedOption_NamePart> | null>, IdentifierValue?: $.VarRef<string> | null, PositiveIntValue?: $.VarRef<bigint> | null, NegativeIntValue?: $.VarRef<bigint> | null, DoubleValue?: $.VarRef<number> | null, StringValue?: $.Slice<number>, AggregateValue?: $.VarRef<string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Name: init?.Name ?? (null! as $.Slice<UninterpretedOption_NamePart | $.VarRef<UninterpretedOption_NamePart> | null>),
			IdentifierValue: init?.IdentifierValue ?? (null! as $.VarRef<string> | null),
			PositiveIntValue: init?.PositiveIntValue ?? (null! as $.VarRef<bigint> | null),
			NegativeIntValue: init?.NegativeIntValue ?? (null! as $.VarRef<bigint> | null),
			DoubleValue: init?.DoubleValue ?? (null! as $.VarRef<number> | null),
			StringValue: init?.StringValue ?? (null! as $.Slice<number>),
			AggregateValue: init?.AggregateValue ?? (null! as $.VarRef<string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UninterpretedOption {
		return new UninterpretedOption(this, true)
	}

	public __goscriptAssign(source: UninterpretedOption): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Name = values.Name
		target.IdentifierValue = values.IdentifierValue
		target.PositiveIntValue = values.PositiveIntValue
		target.NegativeIntValue = values.NegativeIntValue
		target.DoubleValue = values.DoubleValue
		target.StringValue = values.StringValue
		target.AggregateValue = values.AggregateValue
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([18])]
	}

	public GetAggregateValue(): string {
		const x: UninterpretedOption | $.VarRef<UninterpretedOption> | null = this;
		const x$: UninterpretedOption = x == null ? $.pointerTarget<UninterpretedOption>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<UninterpretedOption>(x)
		if ((x != null) && ((x$ as UninterpretedOption).AggregateValue != null)) {
			return $.pointerValue<string>((x$ as UninterpretedOption).AggregateValue)
		}
		return ""
	}

	public GetDoubleValue(): number {
		const x: UninterpretedOption | $.VarRef<UninterpretedOption> | null = this;
		const x$: UninterpretedOption = x == null ? $.pointerTarget<UninterpretedOption>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<UninterpretedOption>(x)
		if ((x != null) && ((x$ as UninterpretedOption).DoubleValue != null)) {
			return $.pointerValue<number>((x$ as UninterpretedOption).DoubleValue)
		}
		return 0
	}

	public GetIdentifierValue(): string {
		const x: UninterpretedOption | $.VarRef<UninterpretedOption> | null = this;
		const x$: UninterpretedOption = x == null ? $.pointerTarget<UninterpretedOption>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<UninterpretedOption>(x)
		if ((x != null) && ((x$ as UninterpretedOption).IdentifierValue != null)) {
			return $.pointerValue<string>((x$ as UninterpretedOption).IdentifierValue)
		}
		return ""
	}

	public GetName(): $.Slice<UninterpretedOption_NamePart | $.VarRef<UninterpretedOption_NamePart> | null> {
		const x: UninterpretedOption | $.VarRef<UninterpretedOption> | null = this;
		if (x != null) {
			return $.pointerValue<UninterpretedOption>(x).Name
		}
		return null
	}

	public GetNegativeIntValue(): bigint {
		const x: UninterpretedOption | $.VarRef<UninterpretedOption> | null = this;
		const x$: UninterpretedOption = x == null ? $.pointerTarget<UninterpretedOption>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<UninterpretedOption>(x)
		if ((x != null) && ((x$ as UninterpretedOption).NegativeIntValue != null)) {
			return $.pointerValue<bigint>((x$ as UninterpretedOption).NegativeIntValue)
		}
		return 0n
	}

	public GetPositiveIntValue(): bigint {
		const x: UninterpretedOption | $.VarRef<UninterpretedOption> | null = this;
		const x$: UninterpretedOption = x == null ? $.pointerTarget<UninterpretedOption>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<UninterpretedOption>(x)
		if ((x != null) && ((x$ as UninterpretedOption).PositiveIntValue != null)) {
			return $.pointerValue<bigint>((x$ as UninterpretedOption).PositiveIntValue)
		}
		return 0n
	}

	public GetStringValue(): $.Slice<number> {
		const x: UninterpretedOption | $.VarRef<UninterpretedOption> | null = this;
		if (x != null) {
			return $.pointerValue<UninterpretedOption>(x).StringValue
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: UninterpretedOption | $.VarRef<UninterpretedOption> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 18)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.UninterpretedOption", /* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.UninterpretedOption", /* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")))
	}

	public Reset(): void {
		let x: UninterpretedOption | $.VarRef<UninterpretedOption> | null = this;
		$.assignStruct($.pointerValue<UninterpretedOption>(x), $.markAsStructValue(new UninterpretedOption()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 18)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.UninterpretedOption", /* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: UninterpretedOption | $.VarRef<UninterpretedOption> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.UninterpretedOption", /* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.UninterpretedOption",
		() => new UninterpretedOption(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetAggregateValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetDoubleValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }], pointerReceiver: true }, { name: "GetIdentifierValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption_NamePart")) }], pointerReceiver: true }, { name: "GetNegativeIntValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }], pointerReceiver: true }, { name: "GetPositiveIntValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("uint64") }], pointerReceiver: true }, { name: "GetStringValue", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		UninterpretedOption,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Name", key: "Name", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption_NamePart")), tag: "protobuf:\"bytes,2,rep,name=name\" json:\"name,omitempty\"" }, { name: "IdentifierValue", key: "IdentifierValue", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,3,opt,name=identifier_value,json=identifierValue\" json:\"identifier_value,omitempty\"" }, { name: "PositiveIntValue", key: "PositiveIntValue", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), tag: "protobuf:\"varint,4,opt,name=positive_int_value,json=positiveIntValue\" json:\"positive_int_value,omitempty\"" }, { name: "NegativeIntValue", key: "NegativeIntValue", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), tag: "protobuf:\"varint,5,opt,name=negative_int_value,json=negativeIntValue\" json:\"negative_int_value,omitempty\"" }, { name: "DoubleValue", key: "DoubleValue", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")), tag: "protobuf:\"fixed64,6,opt,name=double_value,json=doubleValue\" json:\"double_value,omitempty\"" }, { name: "StringValue", key: "StringValue", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,7,opt,name=string_value,json=stringValue\" json:\"string_value,omitempty\"" }, { name: "AggregateValue", key: "AggregateValue", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,8,opt,name=aggregate_value,json=aggregateValue\" json:\"aggregate_value,omitempty\"" }]
	)
}

export class FeatureSet {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get extensionFields(): protoimpl.ExtensionFields {
		return this._fields.extensionFields
	}

	public set extensionFields(value: protoimpl.ExtensionFields) {
		this._fields.extensionFields = value
	}

	public get FieldPresence(): $.VarRef<FeatureSet_FieldPresence> | null {
		return this._fields.FieldPresence
	}

	public set FieldPresence(value: $.VarRef<FeatureSet_FieldPresence> | null) {
		this._fields.FieldPresence = value
	}

	public get EnumType(): $.VarRef<FeatureSet_EnumType> | null {
		return this._fields.EnumType
	}

	public set EnumType(value: $.VarRef<FeatureSet_EnumType> | null) {
		this._fields.EnumType = value
	}

	public get RepeatedFieldEncoding(): $.VarRef<FeatureSet_RepeatedFieldEncoding> | null {
		return this._fields.RepeatedFieldEncoding
	}

	public set RepeatedFieldEncoding(value: $.VarRef<FeatureSet_RepeatedFieldEncoding> | null) {
		this._fields.RepeatedFieldEncoding = value
	}

	public get Utf8Validation(): $.VarRef<FeatureSet_Utf8Validation> | null {
		return this._fields.Utf8Validation
	}

	public set Utf8Validation(value: $.VarRef<FeatureSet_Utf8Validation> | null) {
		this._fields.Utf8Validation = value
	}

	public get MessageEncoding(): $.VarRef<FeatureSet_MessageEncoding> | null {
		return this._fields.MessageEncoding
	}

	public set MessageEncoding(value: $.VarRef<FeatureSet_MessageEncoding> | null) {
		this._fields.MessageEncoding = value
	}

	public get JsonFormat(): $.VarRef<FeatureSet_JsonFormat> | null {
		return this._fields.JsonFormat
	}

	public set JsonFormat(value: $.VarRef<FeatureSet_JsonFormat> | null) {
		this._fields.JsonFormat = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		extensionFields: protoimpl.ExtensionFields
		FieldPresence: $.VarRef<FeatureSet_FieldPresence> | null
		EnumType: $.VarRef<FeatureSet_EnumType> | null
		RepeatedFieldEncoding: $.VarRef<FeatureSet_RepeatedFieldEncoding> | null
		Utf8Validation: $.VarRef<FeatureSet_Utf8Validation> | null
		MessageEncoding: $.VarRef<FeatureSet_MessageEncoding> | null
		JsonFormat: $.VarRef<FeatureSet_JsonFormat> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, extensionFields?: protoimpl.ExtensionFields, FieldPresence?: $.VarRef<FeatureSet_FieldPresence> | null, EnumType?: $.VarRef<FeatureSet_EnumType> | null, RepeatedFieldEncoding?: $.VarRef<FeatureSet_RepeatedFieldEncoding> | null, Utf8Validation?: $.VarRef<FeatureSet_Utf8Validation> | null, MessageEncoding?: $.VarRef<FeatureSet_MessageEncoding> | null, JsonFormat?: $.VarRef<FeatureSet_JsonFormat> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			extensionFields: init?.extensionFields ?? (null! as protoimpl.ExtensionFields),
			FieldPresence: init?.FieldPresence ?? (null! as $.VarRef<FeatureSet_FieldPresence> | null),
			EnumType: init?.EnumType ?? (null! as $.VarRef<FeatureSet_EnumType> | null),
			RepeatedFieldEncoding: init?.RepeatedFieldEncoding ?? (null! as $.VarRef<FeatureSet_RepeatedFieldEncoding> | null),
			Utf8Validation: init?.Utf8Validation ?? (null! as $.VarRef<FeatureSet_Utf8Validation> | null),
			MessageEncoding: init?.MessageEncoding ?? (null! as $.VarRef<FeatureSet_MessageEncoding> | null),
			JsonFormat: init?.JsonFormat ?? (null! as $.VarRef<FeatureSet_JsonFormat> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FeatureSet {
		return new FeatureSet(this, true)
	}

	public __goscriptAssign(source: FeatureSet): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.extensionFields = values.extensionFields
		target.FieldPresence = values.FieldPresence
		target.EnumType = values.EnumType
		target.RepeatedFieldEncoding = values.RepeatedFieldEncoding
		target.Utf8Validation = values.Utf8Validation
		target.MessageEncoding = values.MessageEncoding
		target.JsonFormat = values.JsonFormat
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([19])]
	}

	public GetEnumType(): FeatureSet_EnumType {
		const x: FeatureSet | $.VarRef<FeatureSet> | null = this;
		const x$: FeatureSet = x == null ? $.pointerTarget<FeatureSet>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FeatureSet>(x)
		if ((x != null) && ((x$ as FeatureSet).EnumType != null)) {
			return $.pointerValue<FeatureSet_EnumType>((x$ as FeatureSet).EnumType)
		}
		return 0
	}

	public GetFieldPresence(): FeatureSet_FieldPresence {
		const x: FeatureSet | $.VarRef<FeatureSet> | null = this;
		const x$: FeatureSet = x == null ? $.pointerTarget<FeatureSet>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FeatureSet>(x)
		if ((x != null) && ((x$ as FeatureSet).FieldPresence != null)) {
			return $.pointerValue<FeatureSet_FieldPresence>((x$ as FeatureSet).FieldPresence)
		}
		return 0
	}

	public GetJsonFormat(): FeatureSet_JsonFormat {
		const x: FeatureSet | $.VarRef<FeatureSet> | null = this;
		const x$: FeatureSet = x == null ? $.pointerTarget<FeatureSet>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FeatureSet>(x)
		if ((x != null) && ((x$ as FeatureSet).JsonFormat != null)) {
			return $.pointerValue<FeatureSet_JsonFormat>((x$ as FeatureSet).JsonFormat)
		}
		return 0
	}

	public GetMessageEncoding(): FeatureSet_MessageEncoding {
		const x: FeatureSet | $.VarRef<FeatureSet> | null = this;
		const x$: FeatureSet = x == null ? $.pointerTarget<FeatureSet>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FeatureSet>(x)
		if ((x != null) && ((x$ as FeatureSet).MessageEncoding != null)) {
			return $.pointerValue<FeatureSet_MessageEncoding>((x$ as FeatureSet).MessageEncoding)
		}
		return 0
	}

	public GetRepeatedFieldEncoding(): FeatureSet_RepeatedFieldEncoding {
		const x: FeatureSet | $.VarRef<FeatureSet> | null = this;
		const x$: FeatureSet = x == null ? $.pointerTarget<FeatureSet>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FeatureSet>(x)
		if ((x != null) && ((x$ as FeatureSet).RepeatedFieldEncoding != null)) {
			return $.pointerValue<FeatureSet_RepeatedFieldEncoding>((x$ as FeatureSet).RepeatedFieldEncoding)
		}
		return 0
	}

	public GetUtf8Validation(): FeatureSet_Utf8Validation {
		const x: FeatureSet | $.VarRef<FeatureSet> | null = this;
		const x$: FeatureSet = x == null ? $.pointerTarget<FeatureSet>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FeatureSet>(x)
		if ((x != null) && ((x$ as FeatureSet).Utf8Validation != null)) {
			return $.pointerValue<FeatureSet_Utf8Validation>((x$ as FeatureSet).Utf8Validation)
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: FeatureSet | $.VarRef<FeatureSet> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 19)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FeatureSet", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.FeatureSet", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet")))
	}

	public Reset(): void {
		let x: FeatureSet | $.VarRef<FeatureSet> | null = this;
		$.assignStruct($.pointerValue<FeatureSet>(x), $.markAsStructValue(new FeatureSet()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 19)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FeatureSet", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: FeatureSet | $.VarRef<FeatureSet> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.FeatureSet", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.FeatureSet",
		() => new FeatureSet(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetEnumType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_EnumType") }], pointerReceiver: true }, { name: "GetFieldPresence", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_FieldPresence") }], pointerReceiver: true }, { name: "GetJsonFormat", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_JsonFormat") }], pointerReceiver: true }, { name: "GetMessageEncoding", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_MessageEncoding") }], pointerReceiver: true }, { name: "GetRepeatedFieldEncoding", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_RepeatedFieldEncoding") }], pointerReceiver: true }, { name: "GetUtf8Validation", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_Utf8Validation") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		FeatureSet,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "extensionFields", key: "extensionFields", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField") }, { name: "FieldPresence", key: "FieldPresence", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_FieldPresence")), tag: "protobuf:\"varint,1,opt,name=field_presence,json=fieldPresence,enum=google.protobuf.FeatureSet_FieldPresence\" json:\"field_presence,omitempty\"" }, { name: "EnumType", key: "EnumType", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_EnumType")), tag: "protobuf:\"varint,2,opt,name=enum_type,json=enumType,enum=google.protobuf.FeatureSet_EnumType\" json:\"enum_type,omitempty\"" }, { name: "RepeatedFieldEncoding", key: "RepeatedFieldEncoding", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_RepeatedFieldEncoding")), tag: "protobuf:\"varint,3,opt,name=repeated_field_encoding,json=repeatedFieldEncoding,enum=google.protobuf.FeatureSet_RepeatedFieldEncoding\" json:\"repeated_field_encoding,omitempty\"" }, { name: "Utf8Validation", key: "Utf8Validation", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_Utf8Validation")), tag: "protobuf:\"varint,4,opt,name=utf8_validation,json=utf8Validation,enum=google.protobuf.FeatureSet_Utf8Validation\" json:\"utf8_validation,omitempty\"" }, { name: "MessageEncoding", key: "MessageEncoding", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_MessageEncoding")), tag: "protobuf:\"varint,5,opt,name=message_encoding,json=messageEncoding,enum=google.protobuf.FeatureSet_MessageEncoding\" json:\"message_encoding,omitempty\"" }, { name: "JsonFormat", key: "JsonFormat", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_JsonFormat")), tag: "protobuf:\"varint,6,opt,name=json_format,json=jsonFormat,enum=google.protobuf.FeatureSet_JsonFormat\" json:\"json_format,omitempty\"" }]
	)
}

export class FeatureSetDefaults {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Defaults(): $.Slice<FeatureSetDefaults_FeatureSetEditionDefault | $.VarRef<FeatureSetDefaults_FeatureSetEditionDefault> | null> {
		return this._fields.Defaults
	}

	public set Defaults(value: $.Slice<FeatureSetDefaults_FeatureSetEditionDefault | $.VarRef<FeatureSetDefaults_FeatureSetEditionDefault> | null>) {
		this._fields.Defaults = value
	}

	// The minimum supported edition (inclusive) when this was constructed.
	// Editions before this will not have defaults.
	public get MinimumEdition(): $.VarRef<Edition> | null {
		return this._fields.MinimumEdition
	}

	public set MinimumEdition(value: $.VarRef<Edition> | null) {
		this._fields.MinimumEdition = value
	}

	// The maximum known edition (inclusive) when this was constructed. Editions
	// after this will not have reliable defaults.
	public get MaximumEdition(): $.VarRef<Edition> | null {
		return this._fields.MaximumEdition
	}

	public set MaximumEdition(value: $.VarRef<Edition> | null) {
		this._fields.MaximumEdition = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Defaults: $.Slice<FeatureSetDefaults_FeatureSetEditionDefault | $.VarRef<FeatureSetDefaults_FeatureSetEditionDefault> | null>
		MinimumEdition: $.VarRef<Edition> | null
		MaximumEdition: $.VarRef<Edition> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Defaults?: $.Slice<FeatureSetDefaults_FeatureSetEditionDefault | $.VarRef<FeatureSetDefaults_FeatureSetEditionDefault> | null>, MinimumEdition?: $.VarRef<Edition> | null, MaximumEdition?: $.VarRef<Edition> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Defaults: init?.Defaults ?? (null! as $.Slice<FeatureSetDefaults_FeatureSetEditionDefault | $.VarRef<FeatureSetDefaults_FeatureSetEditionDefault> | null>),
			MinimumEdition: init?.MinimumEdition ?? (null! as $.VarRef<Edition> | null),
			MaximumEdition: init?.MaximumEdition ?? (null! as $.VarRef<Edition> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FeatureSetDefaults {
		return new FeatureSetDefaults(this, true)
	}

	public __goscriptAssign(source: FeatureSetDefaults): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Defaults = values.Defaults
		target.MinimumEdition = values.MinimumEdition
		target.MaximumEdition = values.MaximumEdition
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([20])]
	}

	public GetDefaults(): $.Slice<FeatureSetDefaults_FeatureSetEditionDefault | $.VarRef<FeatureSetDefaults_FeatureSetEditionDefault> | null> {
		const x: FeatureSetDefaults | $.VarRef<FeatureSetDefaults> | null = this;
		if (x != null) {
			return $.pointerValue<FeatureSetDefaults>(x).Defaults
		}
		return null
	}

	public GetMaximumEdition(): Edition {
		const x: FeatureSetDefaults | $.VarRef<FeatureSetDefaults> | null = this;
		const x$: FeatureSetDefaults = x == null ? $.pointerTarget<FeatureSetDefaults>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FeatureSetDefaults>(x)
		if ((x != null) && ((x$ as FeatureSetDefaults).MaximumEdition != null)) {
			return $.pointerValue<Edition>((x$ as FeatureSetDefaults).MaximumEdition)
		}
		return 0
	}

	public GetMinimumEdition(): Edition {
		const x: FeatureSetDefaults | $.VarRef<FeatureSetDefaults> | null = this;
		const x$: FeatureSetDefaults = x == null ? $.pointerTarget<FeatureSetDefaults>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FeatureSetDefaults>(x)
		if ((x != null) && ((x$ as FeatureSetDefaults).MinimumEdition != null)) {
			return $.pointerValue<Edition>((x$ as FeatureSetDefaults).MinimumEdition)
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: FeatureSetDefaults | $.VarRef<FeatureSetDefaults> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 20)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FeatureSetDefaults", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSetDefaults")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.FeatureSetDefaults", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSetDefaults")))
	}

	public Reset(): void {
		let x: FeatureSetDefaults | $.VarRef<FeatureSetDefaults> | null = this;
		$.assignStruct($.pointerValue<FeatureSetDefaults>(x), $.markAsStructValue(new FeatureSetDefaults()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 20)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FeatureSetDefaults", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSetDefaults")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: FeatureSetDefaults | $.VarRef<FeatureSetDefaults> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.FeatureSetDefaults", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSetDefaults")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.FeatureSetDefaults",
		() => new FeatureSetDefaults(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDefaults", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault")) }], pointerReceiver: true }, { name: "GetMaximumEdition", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition") }], pointerReceiver: true }, { name: "GetMinimumEdition", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		FeatureSetDefaults,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Defaults", key: "Defaults", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault")), tag: "protobuf:\"bytes,1,rep,name=defaults\" json:\"defaults,omitempty\"" }, { name: "MinimumEdition", key: "MinimumEdition", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition")), tag: "protobuf:\"varint,4,opt,name=minimum_edition,json=minimumEdition,enum=google.protobuf.Edition\" json:\"minimum_edition,omitempty\"" }, { name: "MaximumEdition", key: "MaximumEdition", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition")), tag: "protobuf:\"varint,5,opt,name=maximum_edition,json=maximumEdition,enum=google.protobuf.Edition\" json:\"maximum_edition,omitempty\"" }]
	)
}

export class SourceCodeInfo {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	// A Location identifies a piece of source code in a .proto file which
	// corresponds to a particular definition.  This information is intended
	// to be useful to IDEs, code indexers, documentation generators, and similar
	// tools.
	//
	// For example, say we have a file like:
	//
	// 	message Foo {
	// 	  optional string foo = 1;
	// 	}
	//
	// Let's look at just the field definition:
	//
	// 	optional string foo = 1;
	// 	^       ^^     ^^  ^  ^^^
	// 	a       bc     de  f  ghi
	//
	// We have the following locations:
	//
	// 	span   path               represents
	// 	[a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
	// 	[a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
	// 	[c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
	// 	[e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
	// 	[g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
	//
	// Notes:
	//   - A location may refer to a repeated field itself (i.e. not to any
	//     particular index within it).  This is used whenever a set of elements are
	//     logically enclosed in a single code segment.  For example, an entire
	//     extend block (possibly containing multiple extension definitions) will
	//     have an outer location whose path refers to the "extensions" repeated
	//     field without an index.
	//   - Multiple locations may have the same path.  This happens when a single
	//     logical declaration is spread out across multiple places.  The most
	//     obvious example is the "extend" block again -- there may be multiple
	//     extend blocks in the same scope, each of which will have the same path.
	//   - A location's span is not always a subset of its parent's span.  For
	//     example, the "extendee" of an extension declaration appears at the
	//     beginning of the "extend" block and is shared by all extensions within
	//     the block.
	//   - Just because a location's span is a subset of some other location's span
	//     does not mean that it is a descendant.  For example, a "group" defines
	//     both a type and a field in a single declaration.  Thus, the locations
	//     corresponding to the type and field and their components will overlap.
	//   - Code which tries to interpret locations should probably be designed to
	//     ignore those that it doesn't understand, as more types of locations could
	//     be recorded in the future.
	public get Location(): $.Slice<SourceCodeInfo_Location | $.VarRef<SourceCodeInfo_Location> | null> {
		return this._fields.Location
	}

	public set Location(value: $.Slice<SourceCodeInfo_Location | $.VarRef<SourceCodeInfo_Location> | null>) {
		this._fields.Location = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Location: $.Slice<SourceCodeInfo_Location | $.VarRef<SourceCodeInfo_Location> | null>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Location?: $.Slice<SourceCodeInfo_Location | $.VarRef<SourceCodeInfo_Location> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Location: init?.Location ?? (null! as $.Slice<SourceCodeInfo_Location | $.VarRef<SourceCodeInfo_Location> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SourceCodeInfo {
		return new SourceCodeInfo(this, true)
	}

	public __goscriptAssign(source: SourceCodeInfo): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Location = values.Location
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([21])]
	}

	public GetLocation(): $.Slice<SourceCodeInfo_Location | $.VarRef<SourceCodeInfo_Location> | null> {
		const x: SourceCodeInfo | $.VarRef<SourceCodeInfo> | null = this;
		if (x != null) {
			return $.pointerValue<SourceCodeInfo>(x).Location
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: SourceCodeInfo | $.VarRef<SourceCodeInfo> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 21)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.SourceCodeInfo", /* @__PURE__ */ $.pointerType("descriptorpb.SourceCodeInfo")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.SourceCodeInfo", /* @__PURE__ */ $.pointerType("descriptorpb.SourceCodeInfo")))
	}

	public Reset(): void {
		let x: SourceCodeInfo | $.VarRef<SourceCodeInfo> | null = this;
		$.assignStruct($.pointerValue<SourceCodeInfo>(x), $.markAsStructValue(new SourceCodeInfo()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 21)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.SourceCodeInfo", /* @__PURE__ */ $.pointerType("descriptorpb.SourceCodeInfo")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: SourceCodeInfo | $.VarRef<SourceCodeInfo> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.SourceCodeInfo", /* @__PURE__ */ $.pointerType("descriptorpb.SourceCodeInfo")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.SourceCodeInfo",
		() => new SourceCodeInfo(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetLocation", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.SourceCodeInfo_Location")) }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		SourceCodeInfo,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Location", key: "Location", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.SourceCodeInfo_Location")), tag: "protobuf:\"bytes,1,rep,name=location\" json:\"location,omitempty\"" }]
	)
}

export class GeneratedCodeInfo {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	// An Annotation connects some span of text in generated code to an element
	// of its generating .proto file.
	public get Annotation(): $.Slice<GeneratedCodeInfo_Annotation | $.VarRef<GeneratedCodeInfo_Annotation> | null> {
		return this._fields.Annotation
	}

	public set Annotation(value: $.Slice<GeneratedCodeInfo_Annotation | $.VarRef<GeneratedCodeInfo_Annotation> | null>) {
		this._fields.Annotation = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Annotation: $.Slice<GeneratedCodeInfo_Annotation | $.VarRef<GeneratedCodeInfo_Annotation> | null>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Annotation?: $.Slice<GeneratedCodeInfo_Annotation | $.VarRef<GeneratedCodeInfo_Annotation> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Annotation: init?.Annotation ?? (null! as $.Slice<GeneratedCodeInfo_Annotation | $.VarRef<GeneratedCodeInfo_Annotation> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GeneratedCodeInfo {
		return new GeneratedCodeInfo(this, true)
	}

	public __goscriptAssign(source: GeneratedCodeInfo): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Annotation = values.Annotation
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([22])]
	}

	public GetAnnotation(): $.Slice<GeneratedCodeInfo_Annotation | $.VarRef<GeneratedCodeInfo_Annotation> | null> {
		const x: GeneratedCodeInfo | $.VarRef<GeneratedCodeInfo> | null = this;
		if (x != null) {
			return $.pointerValue<GeneratedCodeInfo>(x).Annotation
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: GeneratedCodeInfo | $.VarRef<GeneratedCodeInfo> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 22)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.GeneratedCodeInfo", /* @__PURE__ */ $.pointerType("descriptorpb.GeneratedCodeInfo")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.GeneratedCodeInfo", /* @__PURE__ */ $.pointerType("descriptorpb.GeneratedCodeInfo")))
	}

	public Reset(): void {
		let x: GeneratedCodeInfo | $.VarRef<GeneratedCodeInfo> | null = this;
		$.assignStruct($.pointerValue<GeneratedCodeInfo>(x), $.markAsStructValue(new GeneratedCodeInfo()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 22)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.GeneratedCodeInfo", /* @__PURE__ */ $.pointerType("descriptorpb.GeneratedCodeInfo")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: GeneratedCodeInfo | $.VarRef<GeneratedCodeInfo> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.GeneratedCodeInfo", /* @__PURE__ */ $.pointerType("descriptorpb.GeneratedCodeInfo")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.GeneratedCodeInfo",
		() => new GeneratedCodeInfo(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetAnnotation", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.GeneratedCodeInfo_Annotation")) }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		GeneratedCodeInfo,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Annotation", key: "Annotation", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.GeneratedCodeInfo_Annotation")), tag: "protobuf:\"bytes,1,rep,name=annotation\" json:\"annotation,omitempty\"" }]
	)
}

export class DescriptorProto_ExtensionRange {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Start(): $.VarRef<number> | null {
		return this._fields.Start
	}

	public set Start(value: $.VarRef<number> | null) {
		this._fields.Start = value
	}

	public get End(): $.VarRef<number> | null {
		return this._fields.End
	}

	public set End(value: $.VarRef<number> | null) {
		this._fields.End = value
	}

	public get Options(): ExtensionRangeOptions | $.VarRef<ExtensionRangeOptions> | null {
		return this._fields.Options
	}

	public set Options(value: ExtensionRangeOptions | $.VarRef<ExtensionRangeOptions> | null) {
		this._fields.Options = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Start: $.VarRef<number> | null
		End: $.VarRef<number> | null
		Options: ExtensionRangeOptions | $.VarRef<ExtensionRangeOptions> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Start?: $.VarRef<number> | null, End?: $.VarRef<number> | null, Options?: ExtensionRangeOptions | $.VarRef<ExtensionRangeOptions> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Start: init?.Start ?? (null! as $.VarRef<number> | null),
			End: init?.End ?? (null! as $.VarRef<number> | null),
			Options: init?.Options ?? (null! as ExtensionRangeOptions | $.VarRef<ExtensionRangeOptions> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DescriptorProto_ExtensionRange {
		return new DescriptorProto_ExtensionRange(this, true)
	}

	public __goscriptAssign(source: DescriptorProto_ExtensionRange): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Start = values.Start
		target.End = values.End
		target.Options = values.Options
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([2, 0])]
	}

	public GetEnd(): number {
		const x: DescriptorProto_ExtensionRange | $.VarRef<DescriptorProto_ExtensionRange> | null = this;
		const x$: DescriptorProto_ExtensionRange = x == null ? $.pointerTarget<DescriptorProto_ExtensionRange>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<DescriptorProto_ExtensionRange>(x)
		if ((x != null) && ((x$ as DescriptorProto_ExtensionRange).End != null)) {
			return $.pointerValue<number>((x$ as DescriptorProto_ExtensionRange).End)
		}
		return 0
	}

	public GetOptions(): ExtensionRangeOptions | $.VarRef<ExtensionRangeOptions> | null {
		const x: DescriptorProto_ExtensionRange | $.VarRef<DescriptorProto_ExtensionRange> | null = this;
		if (x != null) {
			return $.pointerValue<DescriptorProto_ExtensionRange>(x).Options
		}
		return null
	}

	public GetStart(): number {
		const x: DescriptorProto_ExtensionRange | $.VarRef<DescriptorProto_ExtensionRange> | null = this;
		const x$: DescriptorProto_ExtensionRange = x == null ? $.pointerTarget<DescriptorProto_ExtensionRange>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<DescriptorProto_ExtensionRange>(x)
		if ((x != null) && ((x$ as DescriptorProto_ExtensionRange).Start != null)) {
			return $.pointerValue<number>((x$ as DescriptorProto_ExtensionRange).Start)
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: DescriptorProto_ExtensionRange | $.VarRef<DescriptorProto_ExtensionRange> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 23)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.DescriptorProto_ExtensionRange", /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto_ExtensionRange")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.DescriptorProto_ExtensionRange", /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto_ExtensionRange")))
	}

	public Reset(): void {
		let x: DescriptorProto_ExtensionRange | $.VarRef<DescriptorProto_ExtensionRange> | null = this;
		$.assignStruct($.pointerValue<DescriptorProto_ExtensionRange>(x), $.markAsStructValue(new DescriptorProto_ExtensionRange()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 23)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.DescriptorProto_ExtensionRange", /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto_ExtensionRange")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: DescriptorProto_ExtensionRange | $.VarRef<DescriptorProto_ExtensionRange> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.DescriptorProto_ExtensionRange", /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto_ExtensionRange")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.DescriptorProto_ExtensionRange",
		() => new DescriptorProto_ExtensionRange(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetEnd", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GetOptions", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions") }], pointerReceiver: true }, { name: "GetStart", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		DescriptorProto_ExtensionRange,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Start", key: "Start", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,1,opt,name=start\" json:\"start,omitempty\"" }, { name: "End", key: "End", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,2,opt,name=end\" json:\"end,omitempty\"" }, { name: "Options", key: "Options", type: /* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions"), tag: "protobuf:\"bytes,3,opt,name=options\" json:\"options,omitempty\"" }]
	)
}

export class DescriptorProto_ReservedRange {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Start(): $.VarRef<number> | null {
		return this._fields.Start
	}

	public set Start(value: $.VarRef<number> | null) {
		this._fields.Start = value
	}

	public get End(): $.VarRef<number> | null {
		return this._fields.End
	}

	public set End(value: $.VarRef<number> | null) {
		this._fields.End = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Start: $.VarRef<number> | null
		End: $.VarRef<number> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Start?: $.VarRef<number> | null, End?: $.VarRef<number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Start: init?.Start ?? (null! as $.VarRef<number> | null),
			End: init?.End ?? (null! as $.VarRef<number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DescriptorProto_ReservedRange {
		return new DescriptorProto_ReservedRange(this, true)
	}

	public __goscriptAssign(source: DescriptorProto_ReservedRange): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Start = values.Start
		target.End = values.End
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([2, 1])]
	}

	public GetEnd(): number {
		const x: DescriptorProto_ReservedRange | $.VarRef<DescriptorProto_ReservedRange> | null = this;
		const x$: DescriptorProto_ReservedRange = x == null ? $.pointerTarget<DescriptorProto_ReservedRange>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<DescriptorProto_ReservedRange>(x)
		if ((x != null) && ((x$ as DescriptorProto_ReservedRange).End != null)) {
			return $.pointerValue<number>((x$ as DescriptorProto_ReservedRange).End)
		}
		return 0
	}

	public GetStart(): number {
		const x: DescriptorProto_ReservedRange | $.VarRef<DescriptorProto_ReservedRange> | null = this;
		const x$: DescriptorProto_ReservedRange = x == null ? $.pointerTarget<DescriptorProto_ReservedRange>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<DescriptorProto_ReservedRange>(x)
		if ((x != null) && ((x$ as DescriptorProto_ReservedRange).Start != null)) {
			return $.pointerValue<number>((x$ as DescriptorProto_ReservedRange).Start)
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: DescriptorProto_ReservedRange | $.VarRef<DescriptorProto_ReservedRange> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 24)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.DescriptorProto_ReservedRange", /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto_ReservedRange")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.DescriptorProto_ReservedRange", /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto_ReservedRange")))
	}

	public Reset(): void {
		let x: DescriptorProto_ReservedRange | $.VarRef<DescriptorProto_ReservedRange> | null = this;
		$.assignStruct($.pointerValue<DescriptorProto_ReservedRange>(x), $.markAsStructValue(new DescriptorProto_ReservedRange()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 24)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.DescriptorProto_ReservedRange", /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto_ReservedRange")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: DescriptorProto_ReservedRange | $.VarRef<DescriptorProto_ReservedRange> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.DescriptorProto_ReservedRange", /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto_ReservedRange")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.DescriptorProto_ReservedRange",
		() => new DescriptorProto_ReservedRange(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetEnd", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GetStart", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		DescriptorProto_ReservedRange,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Start", key: "Start", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,1,opt,name=start\" json:\"start,omitempty\"" }, { name: "End", key: "End", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,2,opt,name=end\" json:\"end,omitempty\"" }]
	)
}

export class ExtensionRangeOptions_Declaration {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	// The extension number declared within the extension range.
	public get Number(): $.VarRef<number> | null {
		return this._fields.Number
	}

	public set Number(value: $.VarRef<number> | null) {
		this._fields.Number = value
	}

	// The fully-qualified name of the extension field. There must be a leading
	// dot in front of the full name.
	public get FullName(): $.VarRef<string> | null {
		return this._fields.FullName
	}

	public set FullName(value: $.VarRef<string> | null) {
		this._fields.FullName = value
	}

	// The fully-qualified type name of the extension field. Unlike
	// Metadata.type, Declaration.type must have a leading dot for messages
	// and enums.
	public get Type(): $.VarRef<string> | null {
		return this._fields.Type
	}

	public set Type(value: $.VarRef<string> | null) {
		this._fields.Type = value
	}

	// If true, indicates that the number is reserved in the extension range,
	// and any extension field with the number will fail to compile. Set this
	// when a declared extension field is deleted.
	public get Reserved(): $.VarRef<boolean> | null {
		return this._fields.Reserved
	}

	public set Reserved(value: $.VarRef<boolean> | null) {
		this._fields.Reserved = value
	}

	// If true, indicates that the extension must be defined as repeated.
	// Otherwise the extension must be defined as optional.
	public get Repeated(): $.VarRef<boolean> | null {
		return this._fields.Repeated
	}

	public set Repeated(value: $.VarRef<boolean> | null) {
		this._fields.Repeated = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Number: $.VarRef<number> | null
		FullName: $.VarRef<string> | null
		Type: $.VarRef<string> | null
		Reserved: $.VarRef<boolean> | null
		Repeated: $.VarRef<boolean> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Number?: $.VarRef<number> | null, FullName?: $.VarRef<string> | null, Type?: $.VarRef<string> | null, Reserved?: $.VarRef<boolean> | null, Repeated?: $.VarRef<boolean> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Number: init?.Number ?? (null! as $.VarRef<number> | null),
			FullName: init?.FullName ?? (null! as $.VarRef<string> | null),
			Type: init?.Type ?? (null! as $.VarRef<string> | null),
			Reserved: init?.Reserved ?? (null! as $.VarRef<boolean> | null),
			Repeated: init?.Repeated ?? (null! as $.VarRef<boolean> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExtensionRangeOptions_Declaration {
		return new ExtensionRangeOptions_Declaration(this, true)
	}

	public __goscriptAssign(source: ExtensionRangeOptions_Declaration): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Number = values.Number
		target.FullName = values.FullName
		target.Type = values.Type
		target.Reserved = values.Reserved
		target.Repeated = values.Repeated
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([3, 0])]
	}

	public GetFullName(): string {
		const x: ExtensionRangeOptions_Declaration | $.VarRef<ExtensionRangeOptions_Declaration> | null = this;
		const x$: ExtensionRangeOptions_Declaration = x == null ? $.pointerTarget<ExtensionRangeOptions_Declaration>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<ExtensionRangeOptions_Declaration>(x)
		if ((x != null) && ((x$ as ExtensionRangeOptions_Declaration).FullName != null)) {
			return $.pointerValue<string>((x$ as ExtensionRangeOptions_Declaration).FullName)
		}
		return ""
	}

	public GetNumber(): number {
		const x: ExtensionRangeOptions_Declaration | $.VarRef<ExtensionRangeOptions_Declaration> | null = this;
		const x$: ExtensionRangeOptions_Declaration = x == null ? $.pointerTarget<ExtensionRangeOptions_Declaration>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<ExtensionRangeOptions_Declaration>(x)
		if ((x != null) && ((x$ as ExtensionRangeOptions_Declaration).Number != null)) {
			return $.pointerValue<number>((x$ as ExtensionRangeOptions_Declaration).Number)
		}
		return 0
	}

	public GetRepeated(): boolean {
		const x: ExtensionRangeOptions_Declaration | $.VarRef<ExtensionRangeOptions_Declaration> | null = this;
		const x$: ExtensionRangeOptions_Declaration = x == null ? $.pointerTarget<ExtensionRangeOptions_Declaration>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<ExtensionRangeOptions_Declaration>(x)
		if ((x != null) && ((x$ as ExtensionRangeOptions_Declaration).Repeated != null)) {
			return $.pointerValue<boolean>((x$ as ExtensionRangeOptions_Declaration).Repeated)
		}
		return false
	}

	public GetReserved(): boolean {
		const x: ExtensionRangeOptions_Declaration | $.VarRef<ExtensionRangeOptions_Declaration> | null = this;
		const x$: ExtensionRangeOptions_Declaration = x == null ? $.pointerTarget<ExtensionRangeOptions_Declaration>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<ExtensionRangeOptions_Declaration>(x)
		if ((x != null) && ((x$ as ExtensionRangeOptions_Declaration).Reserved != null)) {
			return $.pointerValue<boolean>((x$ as ExtensionRangeOptions_Declaration).Reserved)
		}
		return false
	}

	public GetType(): string {
		const x: ExtensionRangeOptions_Declaration | $.VarRef<ExtensionRangeOptions_Declaration> | null = this;
		const x$: ExtensionRangeOptions_Declaration = x == null ? $.pointerTarget<ExtensionRangeOptions_Declaration>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<ExtensionRangeOptions_Declaration>(x)
		if ((x != null) && ((x$ as ExtensionRangeOptions_Declaration).Type != null)) {
			return $.pointerValue<string>((x$ as ExtensionRangeOptions_Declaration).Type)
		}
		return ""
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: ExtensionRangeOptions_Declaration | $.VarRef<ExtensionRangeOptions_Declaration> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 25)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.ExtensionRangeOptions_Declaration", /* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions_Declaration")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.ExtensionRangeOptions_Declaration", /* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions_Declaration")))
	}

	public Reset(): void {
		let x: ExtensionRangeOptions_Declaration | $.VarRef<ExtensionRangeOptions_Declaration> | null = this;
		$.assignStruct($.pointerValue<ExtensionRangeOptions_Declaration>(x), $.markAsStructValue(new ExtensionRangeOptions_Declaration()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 25)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.ExtensionRangeOptions_Declaration", /* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions_Declaration")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: ExtensionRangeOptions_Declaration | $.VarRef<ExtensionRangeOptions_Declaration> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.ExtensionRangeOptions_Declaration", /* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions_Declaration")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.ExtensionRangeOptions_Declaration",
		() => new ExtensionRangeOptions_Declaration(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetFullName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetNumber", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GetRepeated", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetReserved", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		ExtensionRangeOptions_Declaration,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Number", key: "Number", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,1,opt,name=number\" json:\"number,omitempty\"" }, { name: "FullName", key: "FullName", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,2,opt,name=full_name,json=fullName\" json:\"full_name,omitempty\"" }, { name: "Type", key: "Type", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,3,opt,name=type\" json:\"type,omitempty\"" }, { name: "Reserved", key: "Reserved", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,5,opt,name=reserved\" json:\"reserved,omitempty\"" }, { name: "Repeated", key: "Repeated", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,6,opt,name=repeated\" json:\"repeated,omitempty\"" }]
	)
}

export class EnumDescriptorProto_EnumReservedRange {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Start(): $.VarRef<number> | null {
		return this._fields.Start
	}

	public set Start(value: $.VarRef<number> | null) {
		this._fields.Start = value
	}

	public get End(): $.VarRef<number> | null {
		return this._fields.End
	}

	public set End(value: $.VarRef<number> | null) {
		this._fields.End = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Start: $.VarRef<number> | null
		End: $.VarRef<number> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Start?: $.VarRef<number> | null, End?: $.VarRef<number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Start: init?.Start ?? (null! as $.VarRef<number> | null),
			End: init?.End ?? (null! as $.VarRef<number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EnumDescriptorProto_EnumReservedRange {
		return new EnumDescriptorProto_EnumReservedRange(this, true)
	}

	public __goscriptAssign(source: EnumDescriptorProto_EnumReservedRange): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Start = values.Start
		target.End = values.End
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([6, 0])]
	}

	public GetEnd(): number {
		const x: EnumDescriptorProto_EnumReservedRange | $.VarRef<EnumDescriptorProto_EnumReservedRange> | null = this;
		const x$: EnumDescriptorProto_EnumReservedRange = x == null ? $.pointerTarget<EnumDescriptorProto_EnumReservedRange>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<EnumDescriptorProto_EnumReservedRange>(x)
		if ((x != null) && ((x$ as EnumDescriptorProto_EnumReservedRange).End != null)) {
			return $.pointerValue<number>((x$ as EnumDescriptorProto_EnumReservedRange).End)
		}
		return 0
	}

	public GetStart(): number {
		const x: EnumDescriptorProto_EnumReservedRange | $.VarRef<EnumDescriptorProto_EnumReservedRange> | null = this;
		const x$: EnumDescriptorProto_EnumReservedRange = x == null ? $.pointerTarget<EnumDescriptorProto_EnumReservedRange>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<EnumDescriptorProto_EnumReservedRange>(x)
		if ((x != null) && ((x$ as EnumDescriptorProto_EnumReservedRange).Start != null)) {
			return $.pointerValue<number>((x$ as EnumDescriptorProto_EnumReservedRange).Start)
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: EnumDescriptorProto_EnumReservedRange | $.VarRef<EnumDescriptorProto_EnumReservedRange> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 26)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.EnumDescriptorProto_EnumReservedRange", /* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto_EnumReservedRange")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.EnumDescriptorProto_EnumReservedRange", /* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto_EnumReservedRange")))
	}

	public Reset(): void {
		let x: EnumDescriptorProto_EnumReservedRange | $.VarRef<EnumDescriptorProto_EnumReservedRange> | null = this;
		$.assignStruct($.pointerValue<EnumDescriptorProto_EnumReservedRange>(x), $.markAsStructValue(new EnumDescriptorProto_EnumReservedRange()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 26)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.EnumDescriptorProto_EnumReservedRange", /* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto_EnumReservedRange")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: EnumDescriptorProto_EnumReservedRange | $.VarRef<EnumDescriptorProto_EnumReservedRange> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.EnumDescriptorProto_EnumReservedRange", /* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto_EnumReservedRange")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.EnumDescriptorProto_EnumReservedRange",
		() => new EnumDescriptorProto_EnumReservedRange(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetEnd", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GetStart", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		EnumDescriptorProto_EnumReservedRange,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Start", key: "Start", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,1,opt,name=start\" json:\"start,omitempty\"" }, { name: "End", key: "End", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,2,opt,name=end\" json:\"end,omitempty\"" }]
	)
}

export class FieldOptions_EditionDefault {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Edition(): $.VarRef<Edition> | null {
		return this._fields.Edition
	}

	public set Edition(value: $.VarRef<Edition> | null) {
		this._fields.Edition = value
	}

	public get Value(): $.VarRef<string> | null {
		return this._fields.Value
	}

	public set Value(value: $.VarRef<string> | null) {
		this._fields.Value = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Edition: $.VarRef<Edition> | null
		Value: $.VarRef<string> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Edition?: $.VarRef<Edition> | null, Value?: $.VarRef<string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Edition: init?.Edition ?? (null! as $.VarRef<Edition> | null),
			Value: init?.Value ?? (null! as $.VarRef<string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FieldOptions_EditionDefault {
		return new FieldOptions_EditionDefault(this, true)
	}

	public __goscriptAssign(source: FieldOptions_EditionDefault): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Edition = values.Edition
		target.Value = values.Value
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([12, 0])]
	}

	public GetEdition(): Edition {
		const x: FieldOptions_EditionDefault | $.VarRef<FieldOptions_EditionDefault> | null = this;
		const x$: FieldOptions_EditionDefault = x == null ? $.pointerTarget<FieldOptions_EditionDefault>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldOptions_EditionDefault>(x)
		if ((x != null) && ((x$ as FieldOptions_EditionDefault).Edition != null)) {
			return $.pointerValue<Edition>((x$ as FieldOptions_EditionDefault).Edition)
		}
		return 0
	}

	public GetValue(): string {
		const x: FieldOptions_EditionDefault | $.VarRef<FieldOptions_EditionDefault> | null = this;
		const x$: FieldOptions_EditionDefault = x == null ? $.pointerTarget<FieldOptions_EditionDefault>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldOptions_EditionDefault>(x)
		if ((x != null) && ((x$ as FieldOptions_EditionDefault).Value != null)) {
			return $.pointerValue<string>((x$ as FieldOptions_EditionDefault).Value)
		}
		return ""
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: FieldOptions_EditionDefault | $.VarRef<FieldOptions_EditionDefault> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 27)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FieldOptions_EditionDefault", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_EditionDefault")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.FieldOptions_EditionDefault", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_EditionDefault")))
	}

	public Reset(): void {
		let x: FieldOptions_EditionDefault | $.VarRef<FieldOptions_EditionDefault> | null = this;
		$.assignStruct($.pointerValue<FieldOptions_EditionDefault>(x), $.markAsStructValue(new FieldOptions_EditionDefault()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 27)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FieldOptions_EditionDefault", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_EditionDefault")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: FieldOptions_EditionDefault | $.VarRef<FieldOptions_EditionDefault> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.FieldOptions_EditionDefault", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_EditionDefault")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.FieldOptions_EditionDefault",
		() => new FieldOptions_EditionDefault(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetEdition", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition") }], pointerReceiver: true }, { name: "GetValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		FieldOptions_EditionDefault,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Edition", key: "Edition", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition")), tag: "protobuf:\"varint,3,opt,name=edition,enum=google.protobuf.Edition\" json:\"edition,omitempty\"" }, { name: "Value", key: "Value", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,2,opt,name=value\" json:\"value,omitempty\"" }]
	)
}

export class FieldOptions_FeatureSupport {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	// The edition that this feature was first available in.  In editions
	// earlier than this one, the default assigned to EDITION_LEGACY will be
	// used, and proto files will not be able to override it.
	public get EditionIntroduced(): $.VarRef<Edition> | null {
		return this._fields.EditionIntroduced
	}

	public set EditionIntroduced(value: $.VarRef<Edition> | null) {
		this._fields.EditionIntroduced = value
	}

	// The edition this feature becomes deprecated in.  Using this after this
	// edition may trigger warnings.
	public get EditionDeprecated(): $.VarRef<Edition> | null {
		return this._fields.EditionDeprecated
	}

	public set EditionDeprecated(value: $.VarRef<Edition> | null) {
		this._fields.EditionDeprecated = value
	}

	// The deprecation warning text if this feature is used after the edition it
	// was marked deprecated in.
	public get DeprecationWarning(): $.VarRef<string> | null {
		return this._fields.DeprecationWarning
	}

	public set DeprecationWarning(value: $.VarRef<string> | null) {
		this._fields.DeprecationWarning = value
	}

	// The edition this feature is no longer available in.  In editions after
	// this one, the last default assigned will be used, and proto files will
	// not be able to override it.
	public get EditionRemoved(): $.VarRef<Edition> | null {
		return this._fields.EditionRemoved
	}

	public set EditionRemoved(value: $.VarRef<Edition> | null) {
		this._fields.EditionRemoved = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		EditionIntroduced: $.VarRef<Edition> | null
		EditionDeprecated: $.VarRef<Edition> | null
		DeprecationWarning: $.VarRef<string> | null
		EditionRemoved: $.VarRef<Edition> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, EditionIntroduced?: $.VarRef<Edition> | null, EditionDeprecated?: $.VarRef<Edition> | null, DeprecationWarning?: $.VarRef<string> | null, EditionRemoved?: $.VarRef<Edition> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			EditionIntroduced: init?.EditionIntroduced ?? (null! as $.VarRef<Edition> | null),
			EditionDeprecated: init?.EditionDeprecated ?? (null! as $.VarRef<Edition> | null),
			DeprecationWarning: init?.DeprecationWarning ?? (null! as $.VarRef<string> | null),
			EditionRemoved: init?.EditionRemoved ?? (null! as $.VarRef<Edition> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FieldOptions_FeatureSupport {
		return new FieldOptions_FeatureSupport(this, true)
	}

	public __goscriptAssign(source: FieldOptions_FeatureSupport): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.EditionIntroduced = values.EditionIntroduced
		target.EditionDeprecated = values.EditionDeprecated
		target.DeprecationWarning = values.DeprecationWarning
		target.EditionRemoved = values.EditionRemoved
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([12, 1])]
	}

	public GetDeprecationWarning(): string {
		const x: FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null = this;
		const x$: FieldOptions_FeatureSupport = x == null ? $.pointerTarget<FieldOptions_FeatureSupport>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldOptions_FeatureSupport>(x)
		if ((x != null) && ((x$ as FieldOptions_FeatureSupport).DeprecationWarning != null)) {
			return $.pointerValue<string>((x$ as FieldOptions_FeatureSupport).DeprecationWarning)
		}
		return ""
	}

	public GetEditionDeprecated(): Edition {
		const x: FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null = this;
		const x$: FieldOptions_FeatureSupport = x == null ? $.pointerTarget<FieldOptions_FeatureSupport>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldOptions_FeatureSupport>(x)
		if ((x != null) && ((x$ as FieldOptions_FeatureSupport).EditionDeprecated != null)) {
			return $.pointerValue<Edition>((x$ as FieldOptions_FeatureSupport).EditionDeprecated)
		}
		return 0
	}

	public GetEditionIntroduced(): Edition {
		const x: FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null = this;
		const x$: FieldOptions_FeatureSupport = x == null ? $.pointerTarget<FieldOptions_FeatureSupport>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldOptions_FeatureSupport>(x)
		if ((x != null) && ((x$ as FieldOptions_FeatureSupport).EditionIntroduced != null)) {
			return $.pointerValue<Edition>((x$ as FieldOptions_FeatureSupport).EditionIntroduced)
		}
		return 0
	}

	public GetEditionRemoved(): Edition {
		const x: FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null = this;
		const x$: FieldOptions_FeatureSupport = x == null ? $.pointerTarget<FieldOptions_FeatureSupport>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FieldOptions_FeatureSupport>(x)
		if ((x != null) && ((x$ as FieldOptions_FeatureSupport).EditionRemoved != null)) {
			return $.pointerValue<Edition>((x$ as FieldOptions_FeatureSupport).EditionRemoved)
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 28)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FieldOptions_FeatureSupport", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_FeatureSupport")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.FieldOptions_FeatureSupport", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_FeatureSupport")))
	}

	public Reset(): void {
		let x: FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null = this;
		$.assignStruct($.pointerValue<FieldOptions_FeatureSupport>(x), $.markAsStructValue(new FieldOptions_FeatureSupport()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 28)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FieldOptions_FeatureSupport", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_FeatureSupport")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.FieldOptions_FeatureSupport", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_FeatureSupport")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.FieldOptions_FeatureSupport",
		() => new FieldOptions_FeatureSupport(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDeprecationWarning", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetEditionDeprecated", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition") }], pointerReceiver: true }, { name: "GetEditionIntroduced", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition") }], pointerReceiver: true }, { name: "GetEditionRemoved", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		FieldOptions_FeatureSupport,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "EditionIntroduced", key: "EditionIntroduced", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition")), tag: "protobuf:\"varint,1,opt,name=edition_introduced,json=editionIntroduced,enum=google.protobuf.Edition\" json:\"edition_introduced,omitempty\"" }, { name: "EditionDeprecated", key: "EditionDeprecated", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition")), tag: "protobuf:\"varint,2,opt,name=edition_deprecated,json=editionDeprecated,enum=google.protobuf.Edition\" json:\"edition_deprecated,omitempty\"" }, { name: "DeprecationWarning", key: "DeprecationWarning", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,3,opt,name=deprecation_warning,json=deprecationWarning\" json:\"deprecation_warning,omitempty\"" }, { name: "EditionRemoved", key: "EditionRemoved", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition")), tag: "protobuf:\"varint,4,opt,name=edition_removed,json=editionRemoved,enum=google.protobuf.Edition\" json:\"edition_removed,omitempty\"" }]
	)
}

export class UninterpretedOption_NamePart {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get NamePart(): $.VarRef<string> | null {
		return this._fields.NamePart
	}

	public set NamePart(value: $.VarRef<string> | null) {
		this._fields.NamePart = value
	}

	public get IsExtension(): $.VarRef<boolean> | null {
		return this._fields.IsExtension
	}

	public set IsExtension(value: $.VarRef<boolean> | null) {
		this._fields.IsExtension = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		NamePart: $.VarRef<string> | null
		IsExtension: $.VarRef<boolean> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, NamePart?: $.VarRef<string> | null, IsExtension?: $.VarRef<boolean> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			NamePart: init?.NamePart ?? (null! as $.VarRef<string> | null),
			IsExtension: init?.IsExtension ?? (null! as $.VarRef<boolean> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UninterpretedOption_NamePart {
		return new UninterpretedOption_NamePart(this, true)
	}

	public __goscriptAssign(source: UninterpretedOption_NamePart): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.NamePart = values.NamePart
		target.IsExtension = values.IsExtension
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([18, 0])]
	}

	public GetIsExtension(): boolean {
		const x: UninterpretedOption_NamePart | $.VarRef<UninterpretedOption_NamePart> | null = this;
		const x$: UninterpretedOption_NamePart = x == null ? $.pointerTarget<UninterpretedOption_NamePart>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<UninterpretedOption_NamePart>(x)
		if ((x != null) && ((x$ as UninterpretedOption_NamePart).IsExtension != null)) {
			return $.pointerValue<boolean>((x$ as UninterpretedOption_NamePart).IsExtension)
		}
		return false
	}

	public GetNamePart(): string {
		const x: UninterpretedOption_NamePart | $.VarRef<UninterpretedOption_NamePart> | null = this;
		const x$: UninterpretedOption_NamePart = x == null ? $.pointerTarget<UninterpretedOption_NamePart>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<UninterpretedOption_NamePart>(x)
		if ((x != null) && ((x$ as UninterpretedOption_NamePart).NamePart != null)) {
			return $.pointerValue<string>((x$ as UninterpretedOption_NamePart).NamePart)
		}
		return ""
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: UninterpretedOption_NamePart | $.VarRef<UninterpretedOption_NamePart> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 29)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.UninterpretedOption_NamePart", /* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption_NamePart")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.UninterpretedOption_NamePart", /* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption_NamePart")))
	}

	public Reset(): void {
		let x: UninterpretedOption_NamePart | $.VarRef<UninterpretedOption_NamePart> | null = this;
		$.assignStruct($.pointerValue<UninterpretedOption_NamePart>(x), $.markAsStructValue(new UninterpretedOption_NamePart()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 29)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.UninterpretedOption_NamePart", /* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption_NamePart")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: UninterpretedOption_NamePart | $.VarRef<UninterpretedOption_NamePart> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.UninterpretedOption_NamePart", /* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption_NamePart")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.UninterpretedOption_NamePart",
		() => new UninterpretedOption_NamePart(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetIsExtension", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetNamePart", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		UninterpretedOption_NamePart,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "NamePart", key: "NamePart", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,1,req,name=name_part,json=namePart\" json:\"name_part,omitempty\"" }, { name: "IsExtension", key: "IsExtension", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), tag: "protobuf:\"varint,2,req,name=is_extension,json=isExtension\" json:\"is_extension,omitempty\"" }]
	)
}

export class FeatureSetDefaults_FeatureSetEditionDefault {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Edition(): $.VarRef<Edition> | null {
		return this._fields.Edition
	}

	public set Edition(value: $.VarRef<Edition> | null) {
		this._fields.Edition = value
	}

	// Defaults of features that can be overridden in this edition.
	public get OverridableFeatures(): FeatureSet | $.VarRef<FeatureSet> | null {
		return this._fields.OverridableFeatures
	}

	public set OverridableFeatures(value: FeatureSet | $.VarRef<FeatureSet> | null) {
		this._fields.OverridableFeatures = value
	}

	// Defaults of features that can't be overridden in this edition.
	public get FixedFeatures(): FeatureSet | $.VarRef<FeatureSet> | null {
		return this._fields.FixedFeatures
	}

	public set FixedFeatures(value: FeatureSet | $.VarRef<FeatureSet> | null) {
		this._fields.FixedFeatures = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Edition: $.VarRef<Edition> | null
		OverridableFeatures: FeatureSet | $.VarRef<FeatureSet> | null
		FixedFeatures: FeatureSet | $.VarRef<FeatureSet> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Edition?: $.VarRef<Edition> | null, OverridableFeatures?: FeatureSet | $.VarRef<FeatureSet> | null, FixedFeatures?: FeatureSet | $.VarRef<FeatureSet> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Edition: init?.Edition ?? (null! as $.VarRef<Edition> | null),
			OverridableFeatures: init?.OverridableFeatures ?? (null! as FeatureSet | $.VarRef<FeatureSet> | null),
			FixedFeatures: init?.FixedFeatures ?? (null! as FeatureSet | $.VarRef<FeatureSet> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FeatureSetDefaults_FeatureSetEditionDefault {
		return new FeatureSetDefaults_FeatureSetEditionDefault(this, true)
	}

	public __goscriptAssign(source: FeatureSetDefaults_FeatureSetEditionDefault): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Edition = values.Edition
		target.OverridableFeatures = values.OverridableFeatures
		target.FixedFeatures = values.FixedFeatures
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([20, 0])]
	}

	public GetEdition(): Edition {
		const x: FeatureSetDefaults_FeatureSetEditionDefault | $.VarRef<FeatureSetDefaults_FeatureSetEditionDefault> | null = this;
		const x$: FeatureSetDefaults_FeatureSetEditionDefault = x == null ? $.pointerTarget<FeatureSetDefaults_FeatureSetEditionDefault>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<FeatureSetDefaults_FeatureSetEditionDefault>(x)
		if ((x != null) && ((x$ as FeatureSetDefaults_FeatureSetEditionDefault).Edition != null)) {
			return $.pointerValue<Edition>((x$ as FeatureSetDefaults_FeatureSetEditionDefault).Edition)
		}
		return 0
	}

	public GetFixedFeatures(): FeatureSet | $.VarRef<FeatureSet> | null {
		const x: FeatureSetDefaults_FeatureSetEditionDefault | $.VarRef<FeatureSetDefaults_FeatureSetEditionDefault> | null = this;
		if (x != null) {
			return $.pointerValue<FeatureSetDefaults_FeatureSetEditionDefault>(x).FixedFeatures
		}
		return null
	}

	public GetOverridableFeatures(): FeatureSet | $.VarRef<FeatureSet> | null {
		const x: FeatureSetDefaults_FeatureSetEditionDefault | $.VarRef<FeatureSetDefaults_FeatureSetEditionDefault> | null = this;
		if (x != null) {
			return $.pointerValue<FeatureSetDefaults_FeatureSetEditionDefault>(x).OverridableFeatures
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: FeatureSetDefaults_FeatureSetEditionDefault | $.VarRef<FeatureSetDefaults_FeatureSetEditionDefault> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 30)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault")))
	}

	public Reset(): void {
		let x: FeatureSetDefaults_FeatureSetEditionDefault | $.VarRef<FeatureSetDefaults_FeatureSetEditionDefault> | null = this;
		$.assignStruct($.pointerValue<FeatureSetDefaults_FeatureSetEditionDefault>(x), $.markAsStructValue(new FeatureSetDefaults_FeatureSetEditionDefault()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 30)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: FeatureSetDefaults_FeatureSetEditionDefault | $.VarRef<FeatureSetDefaults_FeatureSetEditionDefault> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault",
		() => new FeatureSetDefaults_FeatureSetEditionDefault(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetEdition", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition") }], pointerReceiver: true }, { name: "GetFixedFeatures", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet") }], pointerReceiver: true }, { name: "GetOverridableFeatures", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		FeatureSetDefaults_FeatureSetEditionDefault,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Edition", key: "Edition", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.Edition")), tag: "protobuf:\"varint,3,opt,name=edition,enum=google.protobuf.Edition\" json:\"edition,omitempty\"" }, { name: "OverridableFeatures", key: "OverridableFeatures", type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet"), tag: "protobuf:\"bytes,4,opt,name=overridable_features,json=overridableFeatures\" json:\"overridable_features,omitempty\"" }, { name: "FixedFeatures", key: "FixedFeatures", type: /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet"), tag: "protobuf:\"bytes,5,opt,name=fixed_features,json=fixedFeatures\" json:\"fixed_features,omitempty\"" }]
	)
}

export class SourceCodeInfo_Location {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	// Identifies which part of the FileDescriptorProto was defined at this
	// location.
	//
	// Each element is a field number or an index.  They form a path from
	// the root FileDescriptorProto to the place where the definition appears.
	// For example, this path:
	//
	// 	[ 4, 3, 2, 7, 1 ]
	//
	// refers to:
	//
	// 	file.message_type(3)  // 4, 3
	// 	    .field(7)         // 2, 7
	// 	    .name()           // 1
	//
	// This is because FileDescriptorProto.message_type has field number 4:
	//
	// 	repeated DescriptorProto message_type = 4;
	//
	// and DescriptorProto.field has field number 2:
	//
	// 	repeated FieldDescriptorProto field = 2;
	//
	// and FieldDescriptorProto.name has field number 1:
	//
	// 	optional string name = 1;
	//
	// Thus, the above path gives the location of a field name.  If we removed
	// the last element:
	//
	// 	[ 4, 3, 2, 7 ]
	//
	// this path refers to the whole field declaration (from the beginning
	// of the label to the terminating semicolon).
	public get Path(): $.Slice<number> {
		return this._fields.Path
	}

	public set Path(value: $.Slice<number>) {
		this._fields.Path = value
	}

	// Always has exactly three or four elements: start line, start column,
	// end line (optional, otherwise assumed same as start line), end column.
	// These are packed into a single field for efficiency.  Note that line
	// and column numbers are zero-based -- typically you will want to add
	// 1 to each before displaying to a user.
	public get Span(): $.Slice<number> {
		return this._fields.Span
	}

	public set Span(value: $.Slice<number>) {
		this._fields.Span = value
	}

	// If this SourceCodeInfo represents a complete declaration, these are any
	// comments appearing before and after the declaration which appear to be
	// attached to the declaration.
	//
	// A series of line comments appearing on consecutive lines, with no other
	// tokens appearing on those lines, will be treated as a single comment.
	//
	// leading_detached_comments will keep paragraphs of comments that appear
	// before (but not connected to) the current element. Each paragraph,
	// separated by empty lines, will be one comment element in the repeated
	// field.
	//
	// Only the comment content is provided; comment markers (e.g. //) are
	// stripped out.  For block comments, leading whitespace and an asterisk
	// will be stripped from the beginning of each line other than the first.
	// Newlines are included in the output.
	//
	// Examples:
	//
	// 	optional int32 foo = 1;  // Comment attached to foo.
	// 	// Comment attached to bar.
	// 	optional int32 bar = 2;
	//
	// 	optional string baz = 3;
	// 	// Comment attached to baz.
	// 	// Another line attached to baz.
	//
	// 	// Comment attached to moo.
	// 	//
	// 	// Another line attached to moo.
	// 	optional double moo = 4;
	//
	// 	// Detached comment for corge. This is not leading or trailing comments
	// 	// to moo or corge because there are blank lines separating it from
	// 	// both.
	//
	// 	// Detached comment for corge paragraph 2.
	//
	// 	optional string corge = 5;
	// 	/* Block comment attached
	// 	 * to corge.  Leading asterisks
	// 	 * will be removed. */
	// 	/* Block comment attached to
	// 	 * grault. */
	// 	optional int32 grault = 6;
	//
	// 	// ignored detached comments.
	public get LeadingComments(): $.VarRef<string> | null {
		return this._fields.LeadingComments
	}

	public set LeadingComments(value: $.VarRef<string> | null) {
		this._fields.LeadingComments = value
	}

	public get TrailingComments(): $.VarRef<string> | null {
		return this._fields.TrailingComments
	}

	public set TrailingComments(value: $.VarRef<string> | null) {
		this._fields.TrailingComments = value
	}

	public get LeadingDetachedComments(): $.Slice<string> {
		return this._fields.LeadingDetachedComments
	}

	public set LeadingDetachedComments(value: $.Slice<string>) {
		this._fields.LeadingDetachedComments = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Path: $.Slice<number>
		Span: $.Slice<number>
		LeadingComments: $.VarRef<string> | null
		TrailingComments: $.VarRef<string> | null
		LeadingDetachedComments: $.Slice<string>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Path?: $.Slice<number>, Span?: $.Slice<number>, LeadingComments?: $.VarRef<string> | null, TrailingComments?: $.VarRef<string> | null, LeadingDetachedComments?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Path: init?.Path ?? (null! as $.Slice<number>),
			Span: init?.Span ?? (null! as $.Slice<number>),
			LeadingComments: init?.LeadingComments ?? (null! as $.VarRef<string> | null),
			TrailingComments: init?.TrailingComments ?? (null! as $.VarRef<string> | null),
			LeadingDetachedComments: init?.LeadingDetachedComments ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SourceCodeInfo_Location {
		return new SourceCodeInfo_Location(this, true)
	}

	public __goscriptAssign(source: SourceCodeInfo_Location): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Path = values.Path
		target.Span = values.Span
		target.LeadingComments = values.LeadingComments
		target.TrailingComments = values.TrailingComments
		target.LeadingDetachedComments = values.LeadingDetachedComments
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([21, 0])]
	}

	public GetLeadingComments(): string {
		const x: SourceCodeInfo_Location | $.VarRef<SourceCodeInfo_Location> | null = this;
		const x$: SourceCodeInfo_Location = x == null ? $.pointerTarget<SourceCodeInfo_Location>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<SourceCodeInfo_Location>(x)
		if ((x != null) && ((x$ as SourceCodeInfo_Location).LeadingComments != null)) {
			return $.pointerValue<string>((x$ as SourceCodeInfo_Location).LeadingComments)
		}
		return ""
	}

	public GetLeadingDetachedComments(): $.Slice<string> {
		const x: SourceCodeInfo_Location | $.VarRef<SourceCodeInfo_Location> | null = this;
		if (x != null) {
			return $.pointerValue<SourceCodeInfo_Location>(x).LeadingDetachedComments
		}
		return null
	}

	public GetPath(): $.Slice<number> {
		const x: SourceCodeInfo_Location | $.VarRef<SourceCodeInfo_Location> | null = this;
		if (x != null) {
			return $.pointerValue<SourceCodeInfo_Location>(x).Path
		}
		return null
	}

	public GetSpan(): $.Slice<number> {
		const x: SourceCodeInfo_Location | $.VarRef<SourceCodeInfo_Location> | null = this;
		if (x != null) {
			return $.pointerValue<SourceCodeInfo_Location>(x).Span
		}
		return null
	}

	public GetTrailingComments(): string {
		const x: SourceCodeInfo_Location | $.VarRef<SourceCodeInfo_Location> | null = this;
		const x$: SourceCodeInfo_Location = x == null ? $.pointerTarget<SourceCodeInfo_Location>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<SourceCodeInfo_Location>(x)
		if ((x != null) && ((x$ as SourceCodeInfo_Location).TrailingComments != null)) {
			return $.pointerValue<string>((x$ as SourceCodeInfo_Location).TrailingComments)
		}
		return ""
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: SourceCodeInfo_Location | $.VarRef<SourceCodeInfo_Location> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 31)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.SourceCodeInfo_Location", /* @__PURE__ */ $.pointerType("descriptorpb.SourceCodeInfo_Location")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.SourceCodeInfo_Location", /* @__PURE__ */ $.pointerType("descriptorpb.SourceCodeInfo_Location")))
	}

	public Reset(): void {
		let x: SourceCodeInfo_Location | $.VarRef<SourceCodeInfo_Location> | null = this;
		$.assignStruct($.pointerValue<SourceCodeInfo_Location>(x), $.markAsStructValue(new SourceCodeInfo_Location()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 31)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.SourceCodeInfo_Location", /* @__PURE__ */ $.pointerType("descriptorpb.SourceCodeInfo_Location")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: SourceCodeInfo_Location | $.VarRef<SourceCodeInfo_Location> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.SourceCodeInfo_Location", /* @__PURE__ */ $.pointerType("descriptorpb.SourceCodeInfo_Location")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.SourceCodeInfo_Location",
		() => new SourceCodeInfo_Location(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetLeadingComments", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetLeadingDetachedComments", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "GetPath", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")) }], pointerReceiver: true }, { name: "GetSpan", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")) }], pointerReceiver: true }, { name: "GetTrailingComments", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		SourceCodeInfo_Location,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Path", key: "Path", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,1,rep,packed,name=path\" json:\"path,omitempty\"" }, { name: "Span", key: "Span", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,2,rep,packed,name=span\" json:\"span,omitempty\"" }, { name: "LeadingComments", key: "LeadingComments", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,3,opt,name=leading_comments,json=leadingComments\" json:\"leading_comments,omitempty\"" }, { name: "TrailingComments", key: "TrailingComments", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,4,opt,name=trailing_comments,json=trailingComments\" json:\"trailing_comments,omitempty\"" }, { name: "LeadingDetachedComments", key: "LeadingDetachedComments", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,6,rep,name=leading_detached_comments,json=leadingDetachedComments\" json:\"leading_detached_comments,omitempty\"" }]
	)
}

export class GeneratedCodeInfo_Annotation {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	// Identifies the element in the original source .proto file. This field
	// is formatted the same as SourceCodeInfo.Location.path.
	public get Path(): $.Slice<number> {
		return this._fields.Path
	}

	public set Path(value: $.Slice<number>) {
		this._fields.Path = value
	}

	// Identifies the filesystem path to the original source .proto.
	public get SourceFile(): $.VarRef<string> | null {
		return this._fields.SourceFile
	}

	public set SourceFile(value: $.VarRef<string> | null) {
		this._fields.SourceFile = value
	}

	// Identifies the starting offset in bytes in the generated code
	// that relates to the identified object.
	public get Begin(): $.VarRef<number> | null {
		return this._fields.Begin
	}

	public set Begin(value: $.VarRef<number> | null) {
		this._fields.Begin = value
	}

	// Identifies the ending offset in bytes in the generated code that
	// relates to the identified object. The end offset should be one past
	// the last relevant byte (so the length of the text = end - begin).
	public get End(): $.VarRef<number> | null {
		return this._fields.End
	}

	public set End(value: $.VarRef<number> | null) {
		this._fields.End = value
	}

	public get Semantic(): $.VarRef<GeneratedCodeInfo_Annotation_Semantic> | null {
		return this._fields.Semantic
	}

	public set Semantic(value: $.VarRef<GeneratedCodeInfo_Annotation_Semantic> | null) {
		this._fields.Semantic = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Path: $.Slice<number>
		SourceFile: $.VarRef<string> | null
		Begin: $.VarRef<number> | null
		End: $.VarRef<number> | null
		Semantic: $.VarRef<GeneratedCodeInfo_Annotation_Semantic> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Path?: $.Slice<number>, SourceFile?: $.VarRef<string> | null, Begin?: $.VarRef<number> | null, End?: $.VarRef<number> | null, Semantic?: $.VarRef<GeneratedCodeInfo_Annotation_Semantic> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Path: init?.Path ?? (null! as $.Slice<number>),
			SourceFile: init?.SourceFile ?? (null! as $.VarRef<string> | null),
			Begin: init?.Begin ?? (null! as $.VarRef<number> | null),
			End: init?.End ?? (null! as $.VarRef<number> | null),
			Semantic: init?.Semantic ?? (null! as $.VarRef<GeneratedCodeInfo_Annotation_Semantic> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GeneratedCodeInfo_Annotation {
		return new GeneratedCodeInfo_Annotation(this, true)
	}

	public __goscriptAssign(source: GeneratedCodeInfo_Annotation): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Path = values.Path
		target.SourceFile = values.SourceFile
		target.Begin = values.Begin
		target.End = values.End
		target.Semantic = values.Semantic
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([22, 0])]
	}

	public GetBegin(): number {
		const x: GeneratedCodeInfo_Annotation | $.VarRef<GeneratedCodeInfo_Annotation> | null = this;
		const x$: GeneratedCodeInfo_Annotation = x == null ? $.pointerTarget<GeneratedCodeInfo_Annotation>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<GeneratedCodeInfo_Annotation>(x)
		if ((x != null) && ((x$ as GeneratedCodeInfo_Annotation).Begin != null)) {
			return $.pointerValue<number>((x$ as GeneratedCodeInfo_Annotation).Begin)
		}
		return 0
	}

	public GetEnd(): number {
		const x: GeneratedCodeInfo_Annotation | $.VarRef<GeneratedCodeInfo_Annotation> | null = this;
		const x$: GeneratedCodeInfo_Annotation = x == null ? $.pointerTarget<GeneratedCodeInfo_Annotation>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<GeneratedCodeInfo_Annotation>(x)
		if ((x != null) && ((x$ as GeneratedCodeInfo_Annotation).End != null)) {
			return $.pointerValue<number>((x$ as GeneratedCodeInfo_Annotation).End)
		}
		return 0
	}

	public GetPath(): $.Slice<number> {
		const x: GeneratedCodeInfo_Annotation | $.VarRef<GeneratedCodeInfo_Annotation> | null = this;
		if (x != null) {
			return $.pointerValue<GeneratedCodeInfo_Annotation>(x).Path
		}
		return null
	}

	public GetSemantic(): GeneratedCodeInfo_Annotation_Semantic {
		const x: GeneratedCodeInfo_Annotation | $.VarRef<GeneratedCodeInfo_Annotation> | null = this;
		const x$: GeneratedCodeInfo_Annotation = x == null ? $.pointerTarget<GeneratedCodeInfo_Annotation>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<GeneratedCodeInfo_Annotation>(x)
		if ((x != null) && ((x$ as GeneratedCodeInfo_Annotation).Semantic != null)) {
			return $.pointerValue<GeneratedCodeInfo_Annotation_Semantic>((x$ as GeneratedCodeInfo_Annotation).Semantic)
		}
		return 0
	}

	public GetSourceFile(): string {
		const x: GeneratedCodeInfo_Annotation | $.VarRef<GeneratedCodeInfo_Annotation> | null = this;
		const x$: GeneratedCodeInfo_Annotation = x == null ? $.pointerTarget<GeneratedCodeInfo_Annotation>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<GeneratedCodeInfo_Annotation>(x)
		if ((x != null) && ((x$ as GeneratedCodeInfo_Annotation).SourceFile != null)) {
			return $.pointerValue<string>((x$ as GeneratedCodeInfo_Annotation).SourceFile)
		}
		return ""
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: GeneratedCodeInfo_Annotation | $.VarRef<GeneratedCodeInfo_Annotation> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 32)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.GeneratedCodeInfo_Annotation", /* @__PURE__ */ $.pointerType("descriptorpb.GeneratedCodeInfo_Annotation")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*descriptorpb.GeneratedCodeInfo_Annotation", /* @__PURE__ */ $.pointerType("descriptorpb.GeneratedCodeInfo_Annotation")))
	}

	public Reset(): void {
		let x: GeneratedCodeInfo_Annotation | $.VarRef<GeneratedCodeInfo_Annotation> | null = this;
		$.assignStruct($.pointerValue<GeneratedCodeInfo_Annotation>(x), $.markAsStructValue(new GeneratedCodeInfo_Annotation()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_descriptor_proto_msgTypes!, 32)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*descriptorpb.GeneratedCodeInfo_Annotation", /* @__PURE__ */ $.pointerType("descriptorpb.GeneratedCodeInfo_Annotation")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: GeneratedCodeInfo_Annotation | $.VarRef<GeneratedCodeInfo_Annotation> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*descriptorpb.GeneratedCodeInfo_Annotation", /* @__PURE__ */ $.pointerType("descriptorpb.GeneratedCodeInfo_Annotation")))
	}

	static __typeInfo = $.registerStructType(
		"descriptorpb.GeneratedCodeInfo_Annotation",
		() => new GeneratedCodeInfo_Annotation(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetBegin", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GetEnd", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GetPath", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")) }], pointerReceiver: true }, { name: "GetSemantic", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "descriptorpb.GeneratedCodeInfo_Annotation_Semantic") }], pointerReceiver: true }, { name: "GetSourceFile", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		GeneratedCodeInfo_Annotation,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Path", key: "Path", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,1,rep,packed,name=path\" json:\"path,omitempty\"" }, { name: "SourceFile", key: "SourceFile", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,2,opt,name=source_file,json=sourceFile\" json:\"source_file,omitempty\"" }, { name: "Begin", key: "Begin", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,3,opt,name=begin\" json:\"begin,omitempty\"" }, { name: "End", key: "End", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,4,opt,name=end\" json:\"end,omitempty\"" }, { name: "Semantic", key: "Semantic", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.GeneratedCodeInfo_Annotation_Semantic")), tag: "protobuf:\"varint,5,opt,name=semantic,enum=google.protobuf.GeneratedCodeInfo_Annotation_Semantic\" json:\"semantic,omitempty\"" }]
	)
}

export const Edition_EDITION_UNKNOWN: Edition = 0

export const Edition_EDITION_LEGACY: Edition = 900

export const Edition_EDITION_PROTO2: Edition = 998

export const Edition_EDITION_PROTO3: Edition = 999

export const Edition_EDITION_2023: Edition = 1000

export const Edition_EDITION_2024: Edition = 1001

export const Edition_EDITION_1_TEST_ONLY: Edition = 1

export const Edition_EDITION_2_TEST_ONLY: Edition = 2

export const Edition_EDITION_99997_TEST_ONLY: Edition = 99997

export const Edition_EDITION_99998_TEST_ONLY: Edition = 99998

export const Edition_EDITION_99999_TEST_ONLY: Edition = 99999

export const Edition_EDITION_MAX: Edition = 2147483647

export const ExtensionRangeOptions_DECLARATION: ExtensionRangeOptions_VerificationState = 0

export const ExtensionRangeOptions_UNVERIFIED: ExtensionRangeOptions_VerificationState = 1

export const FieldDescriptorProto_TYPE_DOUBLE: FieldDescriptorProto_Type = 1

export const FieldDescriptorProto_TYPE_FLOAT: FieldDescriptorProto_Type = 2

export const FieldDescriptorProto_TYPE_INT64: FieldDescriptorProto_Type = 3

export const FieldDescriptorProto_TYPE_UINT64: FieldDescriptorProto_Type = 4

export const FieldDescriptorProto_TYPE_INT32: FieldDescriptorProto_Type = 5

export const FieldDescriptorProto_TYPE_FIXED64: FieldDescriptorProto_Type = 6

export const FieldDescriptorProto_TYPE_FIXED32: FieldDescriptorProto_Type = 7

export const FieldDescriptorProto_TYPE_BOOL: FieldDescriptorProto_Type = 8

export const FieldDescriptorProto_TYPE_STRING: FieldDescriptorProto_Type = 9

export const FieldDescriptorProto_TYPE_GROUP: FieldDescriptorProto_Type = 10

export const FieldDescriptorProto_TYPE_MESSAGE: FieldDescriptorProto_Type = 11

export const FieldDescriptorProto_TYPE_BYTES: FieldDescriptorProto_Type = 12

export const FieldDescriptorProto_TYPE_UINT32: FieldDescriptorProto_Type = 13

export const FieldDescriptorProto_TYPE_ENUM: FieldDescriptorProto_Type = 14

export const FieldDescriptorProto_TYPE_SFIXED32: FieldDescriptorProto_Type = 15

export const FieldDescriptorProto_TYPE_SFIXED64: FieldDescriptorProto_Type = 16

export const FieldDescriptorProto_TYPE_SINT32: FieldDescriptorProto_Type = 17

export const FieldDescriptorProto_TYPE_SINT64: FieldDescriptorProto_Type = 18

export const FieldDescriptorProto_LABEL_OPTIONAL: FieldDescriptorProto_Label = 1

export const FieldDescriptorProto_LABEL_REPEATED: FieldDescriptorProto_Label = 3

export const FieldDescriptorProto_LABEL_REQUIRED: FieldDescriptorProto_Label = 2

export const FileOptions_SPEED: FileOptions_OptimizeMode = 1

export const FileOptions_CODE_SIZE: FileOptions_OptimizeMode = 2

export const FileOptions_LITE_RUNTIME: FileOptions_OptimizeMode = 3

export const FieldOptions_STRING: FieldOptions_CType = 0

export const FieldOptions_CORD: FieldOptions_CType = 1

export const FieldOptions_STRING_PIECE: FieldOptions_CType = 2

export const FieldOptions_JS_NORMAL: FieldOptions_JSType = 0

export const FieldOptions_JS_STRING: FieldOptions_JSType = 1

export const FieldOptions_JS_NUMBER: FieldOptions_JSType = 2

export const FieldOptions_RETENTION_UNKNOWN: FieldOptions_OptionRetention = 0

export const FieldOptions_RETENTION_RUNTIME: FieldOptions_OptionRetention = 1

export const FieldOptions_RETENTION_SOURCE: FieldOptions_OptionRetention = 2

export const FieldOptions_TARGET_TYPE_UNKNOWN: FieldOptions_OptionTargetType = 0

export const FieldOptions_TARGET_TYPE_FILE: FieldOptions_OptionTargetType = 1

export const FieldOptions_TARGET_TYPE_EXTENSION_RANGE: FieldOptions_OptionTargetType = 2

export const FieldOptions_TARGET_TYPE_MESSAGE: FieldOptions_OptionTargetType = 3

export const FieldOptions_TARGET_TYPE_FIELD: FieldOptions_OptionTargetType = 4

export const FieldOptions_TARGET_TYPE_ONEOF: FieldOptions_OptionTargetType = 5

export const FieldOptions_TARGET_TYPE_ENUM: FieldOptions_OptionTargetType = 6

export const FieldOptions_TARGET_TYPE_ENUM_ENTRY: FieldOptions_OptionTargetType = 7

export const FieldOptions_TARGET_TYPE_SERVICE: FieldOptions_OptionTargetType = 8

export const FieldOptions_TARGET_TYPE_METHOD: FieldOptions_OptionTargetType = 9

export const MethodOptions_IDEMPOTENCY_UNKNOWN: MethodOptions_IdempotencyLevel = 0

export const MethodOptions_NO_SIDE_EFFECTS: MethodOptions_IdempotencyLevel = 1

export const MethodOptions_IDEMPOTENT: MethodOptions_IdempotencyLevel = 2

export const FeatureSet_FIELD_PRESENCE_UNKNOWN: FeatureSet_FieldPresence = 0

export const FeatureSet_EXPLICIT: FeatureSet_FieldPresence = 1

export const FeatureSet_IMPLICIT: FeatureSet_FieldPresence = 2

export const FeatureSet_LEGACY_REQUIRED: FeatureSet_FieldPresence = 3

export const FeatureSet_ENUM_TYPE_UNKNOWN: FeatureSet_EnumType = 0

export const FeatureSet_OPEN: FeatureSet_EnumType = 1

export const FeatureSet_CLOSED: FeatureSet_EnumType = 2

export const FeatureSet_REPEATED_FIELD_ENCODING_UNKNOWN: FeatureSet_RepeatedFieldEncoding = 0

export const FeatureSet_PACKED: FeatureSet_RepeatedFieldEncoding = 1

export const FeatureSet_EXPANDED: FeatureSet_RepeatedFieldEncoding = 2

export const FeatureSet_UTF8_VALIDATION_UNKNOWN: FeatureSet_Utf8Validation = 0

export const FeatureSet_VERIFY: FeatureSet_Utf8Validation = 2

export const FeatureSet_NONE: FeatureSet_Utf8Validation = 3

export const FeatureSet_MESSAGE_ENCODING_UNKNOWN: FeatureSet_MessageEncoding = 0

export const FeatureSet_LENGTH_PREFIXED: FeatureSet_MessageEncoding = 1

export const FeatureSet_DELIMITED: FeatureSet_MessageEncoding = 2

export const FeatureSet_JSON_FORMAT_UNKNOWN: FeatureSet_JsonFormat = 0

export const FeatureSet_ALLOW: FeatureSet_JsonFormat = 1

export const FeatureSet_LEGACY_BEST_EFFORT: FeatureSet_JsonFormat = 2

export const GeneratedCodeInfo_Annotation_NONE: GeneratedCodeInfo_Annotation_Semantic = 0

export const GeneratedCodeInfo_Annotation_SET: GeneratedCodeInfo_Annotation_Semantic = 1

export const GeneratedCodeInfo_Annotation_ALIAS: GeneratedCodeInfo_Annotation_Semantic = 2

export const Default_ExtensionRangeOptions_Verification: ExtensionRangeOptions_VerificationState = 1

export const Default_MethodDescriptorProto_ClientStreaming: boolean = false

export const Default_MethodDescriptorProto_ServerStreaming: boolean = false

export const Default_FileOptions_JavaMultipleFiles: boolean = false

export const Default_FileOptions_JavaStringCheckUtf8: boolean = false

export const Default_FileOptions_OptimizeFor: FileOptions_OptimizeMode = 1

export const Default_FileOptions_CcGenericServices: boolean = false

export const Default_FileOptions_JavaGenericServices: boolean = false

export const Default_FileOptions_PyGenericServices: boolean = false

export const Default_FileOptions_Deprecated: boolean = false

export const Default_FileOptions_CcEnableArenas: boolean = true

export const Default_MessageOptions_MessageSetWireFormat: boolean = false

export const Default_MessageOptions_NoStandardDescriptorAccessor: boolean = false

export const Default_MessageOptions_Deprecated: boolean = false

export const Default_FieldOptions_Ctype: FieldOptions_CType = 0

export const Default_FieldOptions_Jstype: FieldOptions_JSType = 0

export const Default_FieldOptions_Lazy: boolean = false

export const Default_FieldOptions_UnverifiedLazy: boolean = false

export const Default_FieldOptions_Deprecated: boolean = false

export const Default_FieldOptions_Weak: boolean = false

export const Default_FieldOptions_DebugRedact: boolean = false

export const Default_EnumOptions_Deprecated: boolean = false

export const Default_EnumValueOptions_Deprecated: boolean = false

export const Default_EnumValueOptions_DebugRedact: boolean = false

export const Default_ServiceOptions_Deprecated: boolean = false

export const Default_MethodOptions_Deprecated: boolean = false

export const Default_MethodOptions_IdempotencyLevel: MethodOptions_IdempotencyLevel = 0

export let Edition_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "EDITION_UNKNOWN"], [900, "EDITION_LEGACY"], [998, "EDITION_PROTO2"], [999, "EDITION_PROTO3"], [1000, "EDITION_2023"], [1001, "EDITION_2024"], [1, "EDITION_1_TEST_ONLY"], [2, "EDITION_2_TEST_ONLY"], [99997, "EDITION_99997_TEST_ONLY"], [99998, "EDITION_99998_TEST_ONLY"], [99999, "EDITION_99999_TEST_ONLY"], [2147483647, "EDITION_MAX"]])

export function __goscript_set_Edition_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	Edition_name = __goscriptValue
}

export let Edition_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["EDITION_UNKNOWN", 0], ["EDITION_LEGACY", 900], ["EDITION_PROTO2", 998], ["EDITION_PROTO3", 999], ["EDITION_2023", 1000], ["EDITION_2024", 1001], ["EDITION_1_TEST_ONLY", 1], ["EDITION_2_TEST_ONLY", 2], ["EDITION_99997_TEST_ONLY", 99997], ["EDITION_99998_TEST_ONLY", 99998], ["EDITION_99999_TEST_ONLY", 99999], ["EDITION_MAX", 2147483647]])

export function __goscript_set_Edition_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	Edition_value = __goscriptValue
}

export function Edition_Enum(x: Edition): $.VarRef<Edition> | null {
	let p: $.VarRef<Edition> | null = $.varRef<Edition>(0)
	p!.value = x
	return p
}

export function Edition_String(x: Edition): string {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).EnumStringOf(Edition_Descriptor(x), $.int(x, 32))
}

export function Edition_Descriptor(recv: Edition): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_google_protobuf_descriptor_proto_enumTypes!, 0).Descriptor()
}

export function Edition_Type(recv: Edition): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_google_protobuf_descriptor_proto_enumTypes!, 0), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function Edition_Number(x: Edition): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function Edition_UnmarshalJSON(x: $.VarRef<Edition> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).UnmarshalJSONEnum(Edition_Descriptor($.pointerValue<Edition>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function Edition_EnumDescriptor(recv: Edition): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([0])]
}

export let ExtensionRangeOptions_VerificationState_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "DECLARATION"], [1, "UNVERIFIED"]])

export function __goscript_set_ExtensionRangeOptions_VerificationState_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	ExtensionRangeOptions_VerificationState_name = __goscriptValue
}

export let ExtensionRangeOptions_VerificationState_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["DECLARATION", 0], ["UNVERIFIED", 1]])

export function __goscript_set_ExtensionRangeOptions_VerificationState_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	ExtensionRangeOptions_VerificationState_value = __goscriptValue
}

export function ExtensionRangeOptions_VerificationState_Enum(x: ExtensionRangeOptions_VerificationState): $.VarRef<ExtensionRangeOptions_VerificationState> | null {
	let p: $.VarRef<ExtensionRangeOptions_VerificationState> | null = $.varRef<ExtensionRangeOptions_VerificationState>(0)
	p!.value = x
	return p
}

export function ExtensionRangeOptions_VerificationState_String(x: ExtensionRangeOptions_VerificationState): string {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).EnumStringOf(ExtensionRangeOptions_VerificationState_Descriptor(x), $.int(x, 32))
}

export function ExtensionRangeOptions_VerificationState_Descriptor(recv: ExtensionRangeOptions_VerificationState): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_google_protobuf_descriptor_proto_enumTypes!, 1).Descriptor()
}

export function ExtensionRangeOptions_VerificationState_Type(recv: ExtensionRangeOptions_VerificationState): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_google_protobuf_descriptor_proto_enumTypes!, 1), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function ExtensionRangeOptions_VerificationState_Number(x: ExtensionRangeOptions_VerificationState): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function ExtensionRangeOptions_VerificationState_UnmarshalJSON(x: $.VarRef<ExtensionRangeOptions_VerificationState> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).UnmarshalJSONEnum(ExtensionRangeOptions_VerificationState_Descriptor($.pointerValue<ExtensionRangeOptions_VerificationState>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function ExtensionRangeOptions_VerificationState_EnumDescriptor(recv: ExtensionRangeOptions_VerificationState): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([3, 0])]
}

export let FieldDescriptorProto_Type_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[1, "TYPE_DOUBLE"], [2, "TYPE_FLOAT"], [3, "TYPE_INT64"], [4, "TYPE_UINT64"], [5, "TYPE_INT32"], [6, "TYPE_FIXED64"], [7, "TYPE_FIXED32"], [8, "TYPE_BOOL"], [9, "TYPE_STRING"], [10, "TYPE_GROUP"], [11, "TYPE_MESSAGE"], [12, "TYPE_BYTES"], [13, "TYPE_UINT32"], [14, "TYPE_ENUM"], [15, "TYPE_SFIXED32"], [16, "TYPE_SFIXED64"], [17, "TYPE_SINT32"], [18, "TYPE_SINT64"]])

export function __goscript_set_FieldDescriptorProto_Type_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	FieldDescriptorProto_Type_name = __goscriptValue
}

export let FieldDescriptorProto_Type_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["TYPE_DOUBLE", 1], ["TYPE_FLOAT", 2], ["TYPE_INT64", 3], ["TYPE_UINT64", 4], ["TYPE_INT32", 5], ["TYPE_FIXED64", 6], ["TYPE_FIXED32", 7], ["TYPE_BOOL", 8], ["TYPE_STRING", 9], ["TYPE_GROUP", 10], ["TYPE_MESSAGE", 11], ["TYPE_BYTES", 12], ["TYPE_UINT32", 13], ["TYPE_ENUM", 14], ["TYPE_SFIXED32", 15], ["TYPE_SFIXED64", 16], ["TYPE_SINT32", 17], ["TYPE_SINT64", 18]])

export function __goscript_set_FieldDescriptorProto_Type_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	FieldDescriptorProto_Type_value = __goscriptValue
}

export function FieldDescriptorProto_Type_Enum(x: FieldDescriptorProto_Type): $.VarRef<FieldDescriptorProto_Type> | null {
	let p: $.VarRef<FieldDescriptorProto_Type> | null = $.varRef<FieldDescriptorProto_Type>(0)
	p!.value = x
	return p
}

export function FieldDescriptorProto_Type_String(x: FieldDescriptorProto_Type): string {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).EnumStringOf(FieldDescriptorProto_Type_Descriptor(x), $.int(x, 32))
}

export function FieldDescriptorProto_Type_Descriptor(recv: FieldDescriptorProto_Type): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_google_protobuf_descriptor_proto_enumTypes!, 2).Descriptor()
}

export function FieldDescriptorProto_Type_Type(recv: FieldDescriptorProto_Type): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_google_protobuf_descriptor_proto_enumTypes!, 2), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function FieldDescriptorProto_Type_Number(x: FieldDescriptorProto_Type): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function FieldDescriptorProto_Type_UnmarshalJSON(x: $.VarRef<FieldDescriptorProto_Type> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).UnmarshalJSONEnum(FieldDescriptorProto_Type_Descriptor($.pointerValue<FieldDescriptorProto_Type>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function FieldDescriptorProto_Type_EnumDescriptor(recv: FieldDescriptorProto_Type): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([4, 0])]
}

export let FieldDescriptorProto_Label_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[1, "LABEL_OPTIONAL"], [3, "LABEL_REPEATED"], [2, "LABEL_REQUIRED"]])

export function __goscript_set_FieldDescriptorProto_Label_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	FieldDescriptorProto_Label_name = __goscriptValue
}

export let FieldDescriptorProto_Label_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["LABEL_OPTIONAL", 1], ["LABEL_REPEATED", 3], ["LABEL_REQUIRED", 2]])

export function __goscript_set_FieldDescriptorProto_Label_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	FieldDescriptorProto_Label_value = __goscriptValue
}

export function FieldDescriptorProto_Label_Enum(x: FieldDescriptorProto_Label): $.VarRef<FieldDescriptorProto_Label> | null {
	let p: $.VarRef<FieldDescriptorProto_Label> | null = $.varRef<FieldDescriptorProto_Label>(0)
	p!.value = x
	return p
}

export function FieldDescriptorProto_Label_String(x: FieldDescriptorProto_Label): string {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).EnumStringOf(FieldDescriptorProto_Label_Descriptor(x), $.int(x, 32))
}

export function FieldDescriptorProto_Label_Descriptor(recv: FieldDescriptorProto_Label): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_google_protobuf_descriptor_proto_enumTypes!, 3).Descriptor()
}

export function FieldDescriptorProto_Label_Type(recv: FieldDescriptorProto_Label): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_google_protobuf_descriptor_proto_enumTypes!, 3), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function FieldDescriptorProto_Label_Number(x: FieldDescriptorProto_Label): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function FieldDescriptorProto_Label_UnmarshalJSON(x: $.VarRef<FieldDescriptorProto_Label> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).UnmarshalJSONEnum(FieldDescriptorProto_Label_Descriptor($.pointerValue<FieldDescriptorProto_Label>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function FieldDescriptorProto_Label_EnumDescriptor(recv: FieldDescriptorProto_Label): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([4, 1])]
}

export let FileOptions_OptimizeMode_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[1, "SPEED"], [2, "CODE_SIZE"], [3, "LITE_RUNTIME"]])

export function __goscript_set_FileOptions_OptimizeMode_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	FileOptions_OptimizeMode_name = __goscriptValue
}

export let FileOptions_OptimizeMode_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["SPEED", 1], ["CODE_SIZE", 2], ["LITE_RUNTIME", 3]])

export function __goscript_set_FileOptions_OptimizeMode_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	FileOptions_OptimizeMode_value = __goscriptValue
}

export function FileOptions_OptimizeMode_Enum(x: FileOptions_OptimizeMode): $.VarRef<FileOptions_OptimizeMode> | null {
	let p: $.VarRef<FileOptions_OptimizeMode> | null = $.varRef<FileOptions_OptimizeMode>(0)
	p!.value = x
	return p
}

export function FileOptions_OptimizeMode_String(x: FileOptions_OptimizeMode): string {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).EnumStringOf(FileOptions_OptimizeMode_Descriptor(x), $.int(x, 32))
}

export function FileOptions_OptimizeMode_Descriptor(recv: FileOptions_OptimizeMode): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_google_protobuf_descriptor_proto_enumTypes!, 4).Descriptor()
}

export function FileOptions_OptimizeMode_Type(recv: FileOptions_OptimizeMode): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_google_protobuf_descriptor_proto_enumTypes!, 4), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function FileOptions_OptimizeMode_Number(x: FileOptions_OptimizeMode): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function FileOptions_OptimizeMode_UnmarshalJSON(x: $.VarRef<FileOptions_OptimizeMode> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).UnmarshalJSONEnum(FileOptions_OptimizeMode_Descriptor($.pointerValue<FileOptions_OptimizeMode>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function FileOptions_OptimizeMode_EnumDescriptor(recv: FileOptions_OptimizeMode): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([10, 0])]
}

export let FieldOptions_CType_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "STRING"], [1, "CORD"], [2, "STRING_PIECE"]])

export function __goscript_set_FieldOptions_CType_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	FieldOptions_CType_name = __goscriptValue
}

export let FieldOptions_CType_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["STRING", 0], ["CORD", 1], ["STRING_PIECE", 2]])

export function __goscript_set_FieldOptions_CType_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	FieldOptions_CType_value = __goscriptValue
}

export function FieldOptions_CType_Enum(x: FieldOptions_CType): $.VarRef<FieldOptions_CType> | null {
	let p: $.VarRef<FieldOptions_CType> | null = $.varRef<FieldOptions_CType>(0)
	p!.value = x
	return p
}

export function FieldOptions_CType_String(x: FieldOptions_CType): string {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).EnumStringOf(FieldOptions_CType_Descriptor(x), $.int(x, 32))
}

export function FieldOptions_CType_Descriptor(recv: FieldOptions_CType): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_google_protobuf_descriptor_proto_enumTypes!, 5).Descriptor()
}

export function FieldOptions_CType_Type(recv: FieldOptions_CType): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_google_protobuf_descriptor_proto_enumTypes!, 5), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function FieldOptions_CType_Number(x: FieldOptions_CType): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function FieldOptions_CType_UnmarshalJSON(x: $.VarRef<FieldOptions_CType> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).UnmarshalJSONEnum(FieldOptions_CType_Descriptor($.pointerValue<FieldOptions_CType>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function FieldOptions_CType_EnumDescriptor(recv: FieldOptions_CType): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([12, 0])]
}

export let FieldOptions_JSType_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "JS_NORMAL"], [1, "JS_STRING"], [2, "JS_NUMBER"]])

export function __goscript_set_FieldOptions_JSType_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	FieldOptions_JSType_name = __goscriptValue
}

export let FieldOptions_JSType_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["JS_NORMAL", 0], ["JS_STRING", 1], ["JS_NUMBER", 2]])

export function __goscript_set_FieldOptions_JSType_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	FieldOptions_JSType_value = __goscriptValue
}

export function FieldOptions_JSType_Enum(x: FieldOptions_JSType): $.VarRef<FieldOptions_JSType> | null {
	let p: $.VarRef<FieldOptions_JSType> | null = $.varRef<FieldOptions_JSType>(0)
	p!.value = x
	return p
}

export function FieldOptions_JSType_String(x: FieldOptions_JSType): string {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).EnumStringOf(FieldOptions_JSType_Descriptor(x), $.int(x, 32))
}

export function FieldOptions_JSType_Descriptor(recv: FieldOptions_JSType): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_google_protobuf_descriptor_proto_enumTypes!, 6).Descriptor()
}

export function FieldOptions_JSType_Type(recv: FieldOptions_JSType): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_google_protobuf_descriptor_proto_enumTypes!, 6), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function FieldOptions_JSType_Number(x: FieldOptions_JSType): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function FieldOptions_JSType_UnmarshalJSON(x: $.VarRef<FieldOptions_JSType> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).UnmarshalJSONEnum(FieldOptions_JSType_Descriptor($.pointerValue<FieldOptions_JSType>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function FieldOptions_JSType_EnumDescriptor(recv: FieldOptions_JSType): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([12, 1])]
}

export let FieldOptions_OptionRetention_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "RETENTION_UNKNOWN"], [1, "RETENTION_RUNTIME"], [2, "RETENTION_SOURCE"]])

export function __goscript_set_FieldOptions_OptionRetention_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	FieldOptions_OptionRetention_name = __goscriptValue
}

export let FieldOptions_OptionRetention_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["RETENTION_UNKNOWN", 0], ["RETENTION_RUNTIME", 1], ["RETENTION_SOURCE", 2]])

export function __goscript_set_FieldOptions_OptionRetention_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	FieldOptions_OptionRetention_value = __goscriptValue
}

export function FieldOptions_OptionRetention_Enum(x: FieldOptions_OptionRetention): $.VarRef<FieldOptions_OptionRetention> | null {
	let p: $.VarRef<FieldOptions_OptionRetention> | null = $.varRef<FieldOptions_OptionRetention>(0)
	p!.value = x
	return p
}

export function FieldOptions_OptionRetention_String(x: FieldOptions_OptionRetention): string {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).EnumStringOf(FieldOptions_OptionRetention_Descriptor(x), $.int(x, 32))
}

export function FieldOptions_OptionRetention_Descriptor(recv: FieldOptions_OptionRetention): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_google_protobuf_descriptor_proto_enumTypes!, 7).Descriptor()
}

export function FieldOptions_OptionRetention_Type(recv: FieldOptions_OptionRetention): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_google_protobuf_descriptor_proto_enumTypes!, 7), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function FieldOptions_OptionRetention_Number(x: FieldOptions_OptionRetention): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function FieldOptions_OptionRetention_UnmarshalJSON(x: $.VarRef<FieldOptions_OptionRetention> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).UnmarshalJSONEnum(FieldOptions_OptionRetention_Descriptor($.pointerValue<FieldOptions_OptionRetention>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function FieldOptions_OptionRetention_EnumDescriptor(recv: FieldOptions_OptionRetention): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([12, 2])]
}

export let FieldOptions_OptionTargetType_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "TARGET_TYPE_UNKNOWN"], [1, "TARGET_TYPE_FILE"], [2, "TARGET_TYPE_EXTENSION_RANGE"], [3, "TARGET_TYPE_MESSAGE"], [4, "TARGET_TYPE_FIELD"], [5, "TARGET_TYPE_ONEOF"], [6, "TARGET_TYPE_ENUM"], [7, "TARGET_TYPE_ENUM_ENTRY"], [8, "TARGET_TYPE_SERVICE"], [9, "TARGET_TYPE_METHOD"]])

export function __goscript_set_FieldOptions_OptionTargetType_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	FieldOptions_OptionTargetType_name = __goscriptValue
}

export let FieldOptions_OptionTargetType_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["TARGET_TYPE_UNKNOWN", 0], ["TARGET_TYPE_FILE", 1], ["TARGET_TYPE_EXTENSION_RANGE", 2], ["TARGET_TYPE_MESSAGE", 3], ["TARGET_TYPE_FIELD", 4], ["TARGET_TYPE_ONEOF", 5], ["TARGET_TYPE_ENUM", 6], ["TARGET_TYPE_ENUM_ENTRY", 7], ["TARGET_TYPE_SERVICE", 8], ["TARGET_TYPE_METHOD", 9]])

export function __goscript_set_FieldOptions_OptionTargetType_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	FieldOptions_OptionTargetType_value = __goscriptValue
}

export function FieldOptions_OptionTargetType_Enum(x: FieldOptions_OptionTargetType): $.VarRef<FieldOptions_OptionTargetType> | null {
	let p: $.VarRef<FieldOptions_OptionTargetType> | null = $.varRef<FieldOptions_OptionTargetType>(0)
	p!.value = x
	return p
}

export function FieldOptions_OptionTargetType_String(x: FieldOptions_OptionTargetType): string {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).EnumStringOf(FieldOptions_OptionTargetType_Descriptor(x), $.int(x, 32))
}

export function FieldOptions_OptionTargetType_Descriptor(recv: FieldOptions_OptionTargetType): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_google_protobuf_descriptor_proto_enumTypes!, 8).Descriptor()
}

export function FieldOptions_OptionTargetType_Type(recv: FieldOptions_OptionTargetType): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_google_protobuf_descriptor_proto_enumTypes!, 8), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function FieldOptions_OptionTargetType_Number(x: FieldOptions_OptionTargetType): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function FieldOptions_OptionTargetType_UnmarshalJSON(x: $.VarRef<FieldOptions_OptionTargetType> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).UnmarshalJSONEnum(FieldOptions_OptionTargetType_Descriptor($.pointerValue<FieldOptions_OptionTargetType>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function FieldOptions_OptionTargetType_EnumDescriptor(recv: FieldOptions_OptionTargetType): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([12, 3])]
}

export let MethodOptions_IdempotencyLevel_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "IDEMPOTENCY_UNKNOWN"], [1, "NO_SIDE_EFFECTS"], [2, "IDEMPOTENT"]])

export function __goscript_set_MethodOptions_IdempotencyLevel_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	MethodOptions_IdempotencyLevel_name = __goscriptValue
}

export let MethodOptions_IdempotencyLevel_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["IDEMPOTENCY_UNKNOWN", 0], ["NO_SIDE_EFFECTS", 1], ["IDEMPOTENT", 2]])

export function __goscript_set_MethodOptions_IdempotencyLevel_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	MethodOptions_IdempotencyLevel_value = __goscriptValue
}

export function MethodOptions_IdempotencyLevel_Enum(x: MethodOptions_IdempotencyLevel): $.VarRef<MethodOptions_IdempotencyLevel> | null {
	let p: $.VarRef<MethodOptions_IdempotencyLevel> | null = $.varRef<MethodOptions_IdempotencyLevel>(0)
	p!.value = x
	return p
}

export function MethodOptions_IdempotencyLevel_String(x: MethodOptions_IdempotencyLevel): string {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).EnumStringOf(MethodOptions_IdempotencyLevel_Descriptor(x), $.int(x, 32))
}

export function MethodOptions_IdempotencyLevel_Descriptor(recv: MethodOptions_IdempotencyLevel): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_google_protobuf_descriptor_proto_enumTypes!, 9).Descriptor()
}

export function MethodOptions_IdempotencyLevel_Type(recv: MethodOptions_IdempotencyLevel): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_google_protobuf_descriptor_proto_enumTypes!, 9), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function MethodOptions_IdempotencyLevel_Number(x: MethodOptions_IdempotencyLevel): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function MethodOptions_IdempotencyLevel_UnmarshalJSON(x: $.VarRef<MethodOptions_IdempotencyLevel> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).UnmarshalJSONEnum(MethodOptions_IdempotencyLevel_Descriptor($.pointerValue<MethodOptions_IdempotencyLevel>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function MethodOptions_IdempotencyLevel_EnumDescriptor(recv: MethodOptions_IdempotencyLevel): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([17, 0])]
}

export let FeatureSet_FieldPresence_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "FIELD_PRESENCE_UNKNOWN"], [1, "EXPLICIT"], [2, "IMPLICIT"], [3, "LEGACY_REQUIRED"]])

export function __goscript_set_FeatureSet_FieldPresence_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	FeatureSet_FieldPresence_name = __goscriptValue
}

export let FeatureSet_FieldPresence_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["FIELD_PRESENCE_UNKNOWN", 0], ["EXPLICIT", 1], ["IMPLICIT", 2], ["LEGACY_REQUIRED", 3]])

export function __goscript_set_FeatureSet_FieldPresence_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	FeatureSet_FieldPresence_value = __goscriptValue
}

export function FeatureSet_FieldPresence_Enum(x: FeatureSet_FieldPresence): $.VarRef<FeatureSet_FieldPresence> | null {
	let p: $.VarRef<FeatureSet_FieldPresence> | null = $.varRef<FeatureSet_FieldPresence>(0)
	p!.value = x
	return p
}

export function FeatureSet_FieldPresence_String(x: FeatureSet_FieldPresence): string {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).EnumStringOf(FeatureSet_FieldPresence_Descriptor(x), $.int(x, 32))
}

export function FeatureSet_FieldPresence_Descriptor(recv: FeatureSet_FieldPresence): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_google_protobuf_descriptor_proto_enumTypes!, 10).Descriptor()
}

export function FeatureSet_FieldPresence_Type(recv: FeatureSet_FieldPresence): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_google_protobuf_descriptor_proto_enumTypes!, 10), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function FeatureSet_FieldPresence_Number(x: FeatureSet_FieldPresence): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function FeatureSet_FieldPresence_UnmarshalJSON(x: $.VarRef<FeatureSet_FieldPresence> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).UnmarshalJSONEnum(FeatureSet_FieldPresence_Descriptor($.pointerValue<FeatureSet_FieldPresence>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function FeatureSet_FieldPresence_EnumDescriptor(recv: FeatureSet_FieldPresence): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([19, 0])]
}

export let FeatureSet_EnumType_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "ENUM_TYPE_UNKNOWN"], [1, "OPEN"], [2, "CLOSED"]])

export function __goscript_set_FeatureSet_EnumType_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	FeatureSet_EnumType_name = __goscriptValue
}

export let FeatureSet_EnumType_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["ENUM_TYPE_UNKNOWN", 0], ["OPEN", 1], ["CLOSED", 2]])

export function __goscript_set_FeatureSet_EnumType_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	FeatureSet_EnumType_value = __goscriptValue
}

export function FeatureSet_EnumType_Enum(x: FeatureSet_EnumType): $.VarRef<FeatureSet_EnumType> | null {
	let p: $.VarRef<FeatureSet_EnumType> | null = $.varRef<FeatureSet_EnumType>(0)
	p!.value = x
	return p
}

export function FeatureSet_EnumType_String(x: FeatureSet_EnumType): string {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).EnumStringOf(FeatureSet_EnumType_Descriptor(x), $.int(x, 32))
}

export function FeatureSet_EnumType_Descriptor(recv: FeatureSet_EnumType): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_google_protobuf_descriptor_proto_enumTypes!, 11).Descriptor()
}

export function FeatureSet_EnumType_Type(recv: FeatureSet_EnumType): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_google_protobuf_descriptor_proto_enumTypes!, 11), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function FeatureSet_EnumType_Number(x: FeatureSet_EnumType): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function FeatureSet_EnumType_UnmarshalJSON(x: $.VarRef<FeatureSet_EnumType> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).UnmarshalJSONEnum(FeatureSet_EnumType_Descriptor($.pointerValue<FeatureSet_EnumType>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function FeatureSet_EnumType_EnumDescriptor(recv: FeatureSet_EnumType): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([19, 1])]
}

export let FeatureSet_RepeatedFieldEncoding_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "REPEATED_FIELD_ENCODING_UNKNOWN"], [1, "PACKED"], [2, "EXPANDED"]])

export function __goscript_set_FeatureSet_RepeatedFieldEncoding_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	FeatureSet_RepeatedFieldEncoding_name = __goscriptValue
}

export let FeatureSet_RepeatedFieldEncoding_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["REPEATED_FIELD_ENCODING_UNKNOWN", 0], ["PACKED", 1], ["EXPANDED", 2]])

export function __goscript_set_FeatureSet_RepeatedFieldEncoding_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	FeatureSet_RepeatedFieldEncoding_value = __goscriptValue
}

export function FeatureSet_RepeatedFieldEncoding_Enum(x: FeatureSet_RepeatedFieldEncoding): $.VarRef<FeatureSet_RepeatedFieldEncoding> | null {
	let p: $.VarRef<FeatureSet_RepeatedFieldEncoding> | null = $.varRef<FeatureSet_RepeatedFieldEncoding>(0)
	p!.value = x
	return p
}

export function FeatureSet_RepeatedFieldEncoding_String(x: FeatureSet_RepeatedFieldEncoding): string {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).EnumStringOf(FeatureSet_RepeatedFieldEncoding_Descriptor(x), $.int(x, 32))
}

export function FeatureSet_RepeatedFieldEncoding_Descriptor(recv: FeatureSet_RepeatedFieldEncoding): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_google_protobuf_descriptor_proto_enumTypes!, 12).Descriptor()
}

export function FeatureSet_RepeatedFieldEncoding_Type(recv: FeatureSet_RepeatedFieldEncoding): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_google_protobuf_descriptor_proto_enumTypes!, 12), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function FeatureSet_RepeatedFieldEncoding_Number(x: FeatureSet_RepeatedFieldEncoding): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function FeatureSet_RepeatedFieldEncoding_UnmarshalJSON(x: $.VarRef<FeatureSet_RepeatedFieldEncoding> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).UnmarshalJSONEnum(FeatureSet_RepeatedFieldEncoding_Descriptor($.pointerValue<FeatureSet_RepeatedFieldEncoding>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function FeatureSet_RepeatedFieldEncoding_EnumDescriptor(recv: FeatureSet_RepeatedFieldEncoding): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([19, 2])]
}

export let FeatureSet_Utf8Validation_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "UTF8_VALIDATION_UNKNOWN"], [2, "VERIFY"], [3, "NONE"]])

export function __goscript_set_FeatureSet_Utf8Validation_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	FeatureSet_Utf8Validation_name = __goscriptValue
}

export let FeatureSet_Utf8Validation_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["UTF8_VALIDATION_UNKNOWN", 0], ["VERIFY", 2], ["NONE", 3]])

export function __goscript_set_FeatureSet_Utf8Validation_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	FeatureSet_Utf8Validation_value = __goscriptValue
}

export function FeatureSet_Utf8Validation_Enum(x: FeatureSet_Utf8Validation): $.VarRef<FeatureSet_Utf8Validation> | null {
	let p: $.VarRef<FeatureSet_Utf8Validation> | null = $.varRef<FeatureSet_Utf8Validation>(0)
	p!.value = x
	return p
}

export function FeatureSet_Utf8Validation_String(x: FeatureSet_Utf8Validation): string {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).EnumStringOf(FeatureSet_Utf8Validation_Descriptor(x), $.int(x, 32))
}

export function FeatureSet_Utf8Validation_Descriptor(recv: FeatureSet_Utf8Validation): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_google_protobuf_descriptor_proto_enumTypes!, 13).Descriptor()
}

export function FeatureSet_Utf8Validation_Type(recv: FeatureSet_Utf8Validation): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_google_protobuf_descriptor_proto_enumTypes!, 13), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function FeatureSet_Utf8Validation_Number(x: FeatureSet_Utf8Validation): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function FeatureSet_Utf8Validation_UnmarshalJSON(x: $.VarRef<FeatureSet_Utf8Validation> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).UnmarshalJSONEnum(FeatureSet_Utf8Validation_Descriptor($.pointerValue<FeatureSet_Utf8Validation>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function FeatureSet_Utf8Validation_EnumDescriptor(recv: FeatureSet_Utf8Validation): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([19, 3])]
}

export let FeatureSet_MessageEncoding_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "MESSAGE_ENCODING_UNKNOWN"], [1, "LENGTH_PREFIXED"], [2, "DELIMITED"]])

export function __goscript_set_FeatureSet_MessageEncoding_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	FeatureSet_MessageEncoding_name = __goscriptValue
}

export let FeatureSet_MessageEncoding_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["MESSAGE_ENCODING_UNKNOWN", 0], ["LENGTH_PREFIXED", 1], ["DELIMITED", 2]])

export function __goscript_set_FeatureSet_MessageEncoding_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	FeatureSet_MessageEncoding_value = __goscriptValue
}

export function FeatureSet_MessageEncoding_Enum(x: FeatureSet_MessageEncoding): $.VarRef<FeatureSet_MessageEncoding> | null {
	let p: $.VarRef<FeatureSet_MessageEncoding> | null = $.varRef<FeatureSet_MessageEncoding>(0)
	p!.value = x
	return p
}

export function FeatureSet_MessageEncoding_String(x: FeatureSet_MessageEncoding): string {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).EnumStringOf(FeatureSet_MessageEncoding_Descriptor(x), $.int(x, 32))
}

export function FeatureSet_MessageEncoding_Descriptor(recv: FeatureSet_MessageEncoding): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_google_protobuf_descriptor_proto_enumTypes!, 14).Descriptor()
}

export function FeatureSet_MessageEncoding_Type(recv: FeatureSet_MessageEncoding): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_google_protobuf_descriptor_proto_enumTypes!, 14), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function FeatureSet_MessageEncoding_Number(x: FeatureSet_MessageEncoding): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function FeatureSet_MessageEncoding_UnmarshalJSON(x: $.VarRef<FeatureSet_MessageEncoding> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).UnmarshalJSONEnum(FeatureSet_MessageEncoding_Descriptor($.pointerValue<FeatureSet_MessageEncoding>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function FeatureSet_MessageEncoding_EnumDescriptor(recv: FeatureSet_MessageEncoding): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([19, 4])]
}

export let FeatureSet_JsonFormat_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "JSON_FORMAT_UNKNOWN"], [1, "ALLOW"], [2, "LEGACY_BEST_EFFORT"]])

export function __goscript_set_FeatureSet_JsonFormat_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	FeatureSet_JsonFormat_name = __goscriptValue
}

export let FeatureSet_JsonFormat_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["JSON_FORMAT_UNKNOWN", 0], ["ALLOW", 1], ["LEGACY_BEST_EFFORT", 2]])

export function __goscript_set_FeatureSet_JsonFormat_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	FeatureSet_JsonFormat_value = __goscriptValue
}

export function FeatureSet_JsonFormat_Enum(x: FeatureSet_JsonFormat): $.VarRef<FeatureSet_JsonFormat> | null {
	let p: $.VarRef<FeatureSet_JsonFormat> | null = $.varRef<FeatureSet_JsonFormat>(0)
	p!.value = x
	return p
}

export function FeatureSet_JsonFormat_String(x: FeatureSet_JsonFormat): string {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).EnumStringOf(FeatureSet_JsonFormat_Descriptor(x), $.int(x, 32))
}

export function FeatureSet_JsonFormat_Descriptor(recv: FeatureSet_JsonFormat): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_google_protobuf_descriptor_proto_enumTypes!, 15).Descriptor()
}

export function FeatureSet_JsonFormat_Type(recv: FeatureSet_JsonFormat): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_google_protobuf_descriptor_proto_enumTypes!, 15), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function FeatureSet_JsonFormat_Number(x: FeatureSet_JsonFormat): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function FeatureSet_JsonFormat_UnmarshalJSON(x: $.VarRef<FeatureSet_JsonFormat> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).UnmarshalJSONEnum(FeatureSet_JsonFormat_Descriptor($.pointerValue<FeatureSet_JsonFormat>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function FeatureSet_JsonFormat_EnumDescriptor(recv: FeatureSet_JsonFormat): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([19, 5])]
}

export let GeneratedCodeInfo_Annotation_Semantic_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "NONE"], [1, "SET"], [2, "ALIAS"]])

export function __goscript_set_GeneratedCodeInfo_Annotation_Semantic_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	GeneratedCodeInfo_Annotation_Semantic_name = __goscriptValue
}

export let GeneratedCodeInfo_Annotation_Semantic_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["NONE", 0], ["SET", 1], ["ALIAS", 2]])

export function __goscript_set_GeneratedCodeInfo_Annotation_Semantic_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	GeneratedCodeInfo_Annotation_Semantic_value = __goscriptValue
}

export function GeneratedCodeInfo_Annotation_Semantic_Enum(x: GeneratedCodeInfo_Annotation_Semantic): $.VarRef<GeneratedCodeInfo_Annotation_Semantic> | null {
	let p: $.VarRef<GeneratedCodeInfo_Annotation_Semantic> | null = $.varRef<GeneratedCodeInfo_Annotation_Semantic>(0)
	p!.value = x
	return p
}

export function GeneratedCodeInfo_Annotation_Semantic_String(x: GeneratedCodeInfo_Annotation_Semantic): string {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).EnumStringOf(GeneratedCodeInfo_Annotation_Semantic_Descriptor(x), $.int(x, 32))
}

export function GeneratedCodeInfo_Annotation_Semantic_Descriptor(recv: GeneratedCodeInfo_Annotation_Semantic): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_google_protobuf_descriptor_proto_enumTypes!, 16).Descriptor()
}

export function GeneratedCodeInfo_Annotation_Semantic_Type(recv: GeneratedCodeInfo_Annotation_Semantic): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_google_protobuf_descriptor_proto_enumTypes!, 16), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function GeneratedCodeInfo_Annotation_Semantic_Number(x: GeneratedCodeInfo_Annotation_Semantic): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function GeneratedCodeInfo_Annotation_Semantic_UnmarshalJSON(x: $.VarRef<GeneratedCodeInfo_Annotation_Semantic> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).UnmarshalJSONEnum(GeneratedCodeInfo_Annotation_Semantic_Descriptor($.pointerValue<GeneratedCodeInfo_Annotation_Semantic>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function GeneratedCodeInfo_Annotation_Semantic_EnumDescriptor(recv: GeneratedCodeInfo_Annotation_Semantic): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_google_protobuf_descriptor_proto_rawDescGZIP(), $.arrayToSlice<number>([22, 0, 0])]
}

export let File_google_protobuf_descriptor_proto: protoreflect.FileDescriptor | null = null! as protoreflect.FileDescriptor | null

export function __goscript_set_File_google_protobuf_descriptor_proto(__goscriptValue: protoreflect.FileDescriptor | null): void {
	File_google_protobuf_descriptor_proto = __goscriptValue
}

export let file_google_protobuf_descriptor_proto_rawDesc: $.Slice<number> = new Uint8Array([10, 32, 103, 111, 111, 103, 108, 101, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 46, 112, 114, 111, 116, 111, 18, 15, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 34, 77, 10, 17, 70, 105, 108, 101, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 83, 101, 116, 18, 56, 10, 4, 102, 105, 108, 101, 24, 1, 32, 3, 40, 11, 50, 36, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 105, 108, 101, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 82, 4, 102, 105, 108, 101, 34, 152, 5, 10, 19, 70, 105, 108, 101, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 18, 18, 10, 4, 110, 97, 109, 101, 24, 1, 32, 1, 40, 9, 82, 4, 110, 97, 109, 101, 18, 24, 10, 7, 112, 97, 99, 107, 97, 103, 101, 24, 2, 32, 1, 40, 9, 82, 7, 112, 97, 99, 107, 97, 103, 101, 18, 30, 10, 10, 100, 101, 112, 101, 110, 100, 101, 110, 99, 121, 24, 3, 32, 3, 40, 9, 82, 10, 100, 101, 112, 101, 110, 100, 101, 110, 99, 121, 18, 43, 10, 17, 112, 117, 98, 108, 105, 99, 95, 100, 101, 112, 101, 110, 100, 101, 110, 99, 121, 24, 10, 32, 3, 40, 5, 82, 16, 112, 117, 98, 108, 105, 99, 68, 101, 112, 101, 110, 100, 101, 110, 99, 121, 18, 39, 10, 15, 119, 101, 97, 107, 95, 100, 101, 112, 101, 110, 100, 101, 110, 99, 121, 24, 11, 32, 3, 40, 5, 82, 14, 119, 101, 97, 107, 68, 101, 112, 101, 110, 100, 101, 110, 99, 121, 18, 67, 10, 12, 109, 101, 115, 115, 97, 103, 101, 95, 116, 121, 112, 101, 24, 4, 32, 3, 40, 11, 50, 32, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 82, 11, 109, 101, 115, 115, 97, 103, 101, 84, 121, 112, 101, 18, 65, 10, 9, 101, 110, 117, 109, 95, 116, 121, 112, 101, 24, 5, 32, 3, 40, 11, 50, 36, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 69, 110, 117, 109, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 82, 8, 101, 110, 117, 109, 84, 121, 112, 101, 18, 65, 10, 7, 115, 101, 114, 118, 105, 99, 101, 24, 6, 32, 3, 40, 11, 50, 39, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 83, 101, 114, 118, 105, 99, 101, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 82, 7, 115, 101, 114, 118, 105, 99, 101, 18, 67, 10, 9, 101, 120, 116, 101, 110, 115, 105, 111, 110, 24, 7, 32, 3, 40, 11, 50, 37, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 105, 101, 108, 100, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 82, 9, 101, 120, 116, 101, 110, 115, 105, 111, 110, 18, 54, 10, 7, 111, 112, 116, 105, 111, 110, 115, 24, 8, 32, 1, 40, 11, 50, 28, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 105, 108, 101, 79, 112, 116, 105, 111, 110, 115, 82, 7, 111, 112, 116, 105, 111, 110, 115, 18, 73, 10, 16, 115, 111, 117, 114, 99, 101, 95, 99, 111, 100, 101, 95, 105, 110, 102, 111, 24, 9, 32, 1, 40, 11, 50, 31, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 83, 111, 117, 114, 99, 101, 67, 111, 100, 101, 73, 110, 102, 111, 82, 14, 115, 111, 117, 114, 99, 101, 67, 111, 100, 101, 73, 110, 102, 111, 18, 22, 10, 6, 115, 121, 110, 116, 97, 120, 24, 12, 32, 1, 40, 9, 82, 6, 115, 121, 110, 116, 97, 120, 18, 50, 10, 7, 101, 100, 105, 116, 105, 111, 110, 24, 14, 32, 1, 40, 14, 50, 24, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 69, 100, 105, 116, 105, 111, 110, 82, 7, 101, 100, 105, 116, 105, 111, 110, 34, 185, 6, 10, 15, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 18, 18, 10, 4, 110, 97, 109, 101, 24, 1, 32, 1, 40, 9, 82, 4, 110, 97, 109, 101, 18, 59, 10, 5, 102, 105, 101, 108, 100, 24, 2, 32, 3, 40, 11, 50, 37, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 105, 101, 108, 100, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 82, 5, 102, 105, 101, 108, 100, 18, 67, 10, 9, 101, 120, 116, 101, 110, 115, 105, 111, 110, 24, 6, 32, 3, 40, 11, 50, 37, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 105, 101, 108, 100, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 82, 9, 101, 120, 116, 101, 110, 115, 105, 111, 110, 18, 65, 10, 11, 110, 101, 115, 116, 101, 100, 95, 116, 121, 112, 101, 24, 3, 32, 3, 40, 11, 50, 32, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 82, 10, 110, 101, 115, 116, 101, 100, 84, 121, 112, 101, 18, 65, 10, 9, 101, 110, 117, 109, 95, 116, 121, 112, 101, 24, 4, 32, 3, 40, 11, 50, 36, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 69, 110, 117, 109, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 82, 8, 101, 110, 117, 109, 84, 121, 112, 101, 18, 88, 10, 15, 101, 120, 116, 101, 110, 115, 105, 111, 110, 95, 114, 97, 110, 103, 101, 24, 5, 32, 3, 40, 11, 50, 47, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 46, 69, 120, 116, 101, 110, 115, 105, 111, 110, 82, 97, 110, 103, 101, 82, 14, 101, 120, 116, 101, 110, 115, 105, 111, 110, 82, 97, 110, 103, 101, 18, 68, 10, 10, 111, 110, 101, 111, 102, 95, 100, 101, 99, 108, 24, 8, 32, 3, 40, 11, 50, 37, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 79, 110, 101, 111, 102, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 82, 9, 111, 110, 101, 111, 102, 68, 101, 99, 108, 18, 57, 10, 7, 111, 112, 116, 105, 111, 110, 115, 24, 7, 32, 1, 40, 11, 50, 31, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 77, 101, 115, 115, 97, 103, 101, 79, 112, 116, 105, 111, 110, 115, 82, 7, 111, 112, 116, 105, 111, 110, 115, 18, 85, 10, 14, 114, 101, 115, 101, 114, 118, 101, 100, 95, 114, 97, 110, 103, 101, 24, 9, 32, 3, 40, 11, 50, 46, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 46, 82, 101, 115, 101, 114, 118, 101, 100, 82, 97, 110, 103, 101, 82, 13, 114, 101, 115, 101, 114, 118, 101, 100, 82, 97, 110, 103, 101, 18, 35, 10, 13, 114, 101, 115, 101, 114, 118, 101, 100, 95, 110, 97, 109, 101, 24, 10, 32, 3, 40, 9, 82, 12, 114, 101, 115, 101, 114, 118, 101, 100, 78, 97, 109, 101, 26, 122, 10, 14, 69, 120, 116, 101, 110, 115, 105, 111, 110, 82, 97, 110, 103, 101, 18, 20, 10, 5, 115, 116, 97, 114, 116, 24, 1, 32, 1, 40, 5, 82, 5, 115, 116, 97, 114, 116, 18, 16, 10, 3, 101, 110, 100, 24, 2, 32, 1, 40, 5, 82, 3, 101, 110, 100, 18, 64, 10, 7, 111, 112, 116, 105, 111, 110, 115, 24, 3, 32, 1, 40, 11, 50, 38, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 69, 120, 116, 101, 110, 115, 105, 111, 110, 82, 97, 110, 103, 101, 79, 112, 116, 105, 111, 110, 115, 82, 7, 111, 112, 116, 105, 111, 110, 115, 26, 55, 10, 13, 82, 101, 115, 101, 114, 118, 101, 100, 82, 97, 110, 103, 101, 18, 20, 10, 5, 115, 116, 97, 114, 116, 24, 1, 32, 1, 40, 5, 82, 5, 115, 116, 97, 114, 116, 18, 16, 10, 3, 101, 110, 100, 24, 2, 32, 1, 40, 5, 82, 3, 101, 110, 100, 34, 204, 4, 10, 21, 69, 120, 116, 101, 110, 115, 105, 111, 110, 82, 97, 110, 103, 101, 79, 112, 116, 105, 111, 110, 115, 18, 88, 10, 20, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 95, 111, 112, 116, 105, 111, 110, 24, 231, 7, 32, 3, 40, 11, 50, 36, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 85, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 82, 19, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 18, 89, 10, 11, 100, 101, 99, 108, 97, 114, 97, 116, 105, 111, 110, 24, 2, 32, 3, 40, 11, 50, 50, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 69, 120, 116, 101, 110, 115, 105, 111, 110, 82, 97, 110, 103, 101, 79, 112, 116, 105, 111, 110, 115, 46, 68, 101, 99, 108, 97, 114, 97, 116, 105, 111, 110, 66, 3, 136, 1, 2, 82, 11, 100, 101, 99, 108, 97, 114, 97, 116, 105, 111, 110, 18, 55, 10, 8, 102, 101, 97, 116, 117, 114, 101, 115, 24, 50, 32, 1, 40, 11, 50, 27, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 82, 8, 102, 101, 97, 116, 117, 114, 101, 115, 18, 109, 10, 12, 118, 101, 114, 105, 102, 105, 99, 97, 116, 105, 111, 110, 24, 3, 32, 1, 40, 14, 50, 56, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 69, 120, 116, 101, 110, 115, 105, 111, 110, 82, 97, 110, 103, 101, 79, 112, 116, 105, 111, 110, 115, 46, 86, 101, 114, 105, 102, 105, 99, 97, 116, 105, 111, 110, 83, 116, 97, 116, 101, 58, 10, 85, 78, 86, 69, 82, 73, 70, 73, 69, 68, 66, 3, 136, 1, 2, 82, 12, 118, 101, 114, 105, 102, 105, 99, 97, 116, 105, 111, 110, 26, 148, 1, 10, 11, 68, 101, 99, 108, 97, 114, 97, 116, 105, 111, 110, 18, 22, 10, 6, 110, 117, 109, 98, 101, 114, 24, 1, 32, 1, 40, 5, 82, 6, 110, 117, 109, 98, 101, 114, 18, 27, 10, 9, 102, 117, 108, 108, 95, 110, 97, 109, 101, 24, 2, 32, 1, 40, 9, 82, 8, 102, 117, 108, 108, 78, 97, 109, 101, 18, 18, 10, 4, 116, 121, 112, 101, 24, 3, 32, 1, 40, 9, 82, 4, 116, 121, 112, 101, 18, 26, 10, 8, 114, 101, 115, 101, 114, 118, 101, 100, 24, 5, 32, 1, 40, 8, 82, 8, 114, 101, 115, 101, 114, 118, 101, 100, 18, 26, 10, 8, 114, 101, 112, 101, 97, 116, 101, 100, 24, 6, 32, 1, 40, 8, 82, 8, 114, 101, 112, 101, 97, 116, 101, 100, 74, 4, 8, 4, 16, 5, 34, 52, 10, 17, 86, 101, 114, 105, 102, 105, 99, 97, 116, 105, 111, 110, 83, 116, 97, 116, 101, 18, 15, 10, 11, 68, 69, 67, 76, 65, 82, 65, 84, 73, 79, 78, 16, 0, 18, 14, 10, 10, 85, 78, 86, 69, 82, 73, 70, 73, 69, 68, 16, 1, 42, 9, 8, 232, 7, 16, 128, 128, 128, 128, 2, 34, 193, 6, 10, 20, 70, 105, 101, 108, 100, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 18, 18, 10, 4, 110, 97, 109, 101, 24, 1, 32, 1, 40, 9, 82, 4, 110, 97, 109, 101, 18, 22, 10, 6, 110, 117, 109, 98, 101, 114, 24, 3, 32, 1, 40, 5, 82, 6, 110, 117, 109, 98, 101, 114, 18, 65, 10, 5, 108, 97, 98, 101, 108, 24, 4, 32, 1, 40, 14, 50, 43, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 105, 101, 108, 100, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 46, 76, 97, 98, 101, 108, 82, 5, 108, 97, 98, 101, 108, 18, 62, 10, 4, 116, 121, 112, 101, 24, 5, 32, 1, 40, 14, 50, 42, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 105, 101, 108, 100, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 46, 84, 121, 112, 101, 82, 4, 116, 121, 112, 101, 18, 27, 10, 9, 116, 121, 112, 101, 95, 110, 97, 109, 101, 24, 6, 32, 1, 40, 9, 82, 8, 116, 121, 112, 101, 78, 97, 109, 101, 18, 26, 10, 8, 101, 120, 116, 101, 110, 100, 101, 101, 24, 2, 32, 1, 40, 9, 82, 8, 101, 120, 116, 101, 110, 100, 101, 101, 18, 35, 10, 13, 100, 101, 102, 97, 117, 108, 116, 95, 118, 97, 108, 117, 101, 24, 7, 32, 1, 40, 9, 82, 12, 100, 101, 102, 97, 117, 108, 116, 86, 97, 108, 117, 101, 18, 31, 10, 11, 111, 110, 101, 111, 102, 95, 105, 110, 100, 101, 120, 24, 9, 32, 1, 40, 5, 82, 10, 111, 110, 101, 111, 102, 73, 110, 100, 101, 120, 18, 27, 10, 9, 106, 115, 111, 110, 95, 110, 97, 109, 101, 24, 10, 32, 1, 40, 9, 82, 8, 106, 115, 111, 110, 78, 97, 109, 101, 18, 55, 10, 7, 111, 112, 116, 105, 111, 110, 115, 24, 8, 32, 1, 40, 11, 50, 29, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 105, 101, 108, 100, 79, 112, 116, 105, 111, 110, 115, 82, 7, 111, 112, 116, 105, 111, 110, 115, 18, 39, 10, 15, 112, 114, 111, 116, 111, 51, 95, 111, 112, 116, 105, 111, 110, 97, 108, 24, 17, 32, 1, 40, 8, 82, 14, 112, 114, 111, 116, 111, 51, 79, 112, 116, 105, 111, 110, 97, 108, 34, 182, 2, 10, 4, 84, 121, 112, 101, 18, 15, 10, 11, 84, 89, 80, 69, 95, 68, 79, 85, 66, 76, 69, 16, 1, 18, 14, 10, 10, 84, 89, 80, 69, 95, 70, 76, 79, 65, 84, 16, 2, 18, 14, 10, 10, 84, 89, 80, 69, 95, 73, 78, 84, 54, 52, 16, 3, 18, 15, 10, 11, 84, 89, 80, 69, 95, 85, 73, 78, 84, 54, 52, 16, 4, 18, 14, 10, 10, 84, 89, 80, 69, 95, 73, 78, 84, 51, 50, 16, 5, 18, 16, 10, 12, 84, 89, 80, 69, 95, 70, 73, 88, 69, 68, 54, 52, 16, 6, 18, 16, 10, 12, 84, 89, 80, 69, 95, 70, 73, 88, 69, 68, 51, 50, 16, 7, 18, 13, 10, 9, 84, 89, 80, 69, 95, 66, 79, 79, 76, 16, 8, 18, 15, 10, 11, 84, 89, 80, 69, 95, 83, 84, 82, 73, 78, 71, 16, 9, 18, 14, 10, 10, 84, 89, 80, 69, 95, 71, 82, 79, 85, 80, 16, 10, 18, 16, 10, 12, 84, 89, 80, 69, 95, 77, 69, 83, 83, 65, 71, 69, 16, 11, 18, 14, 10, 10, 84, 89, 80, 69, 95, 66, 89, 84, 69, 83, 16, 12, 18, 15, 10, 11, 84, 89, 80, 69, 95, 85, 73, 78, 84, 51, 50, 16, 13, 18, 13, 10, 9, 84, 89, 80, 69, 95, 69, 78, 85, 77, 16, 14, 18, 17, 10, 13, 84, 89, 80, 69, 95, 83, 70, 73, 88, 69, 68, 51, 50, 16, 15, 18, 17, 10, 13, 84, 89, 80, 69, 95, 83, 70, 73, 88, 69, 68, 54, 52, 16, 16, 18, 15, 10, 11, 84, 89, 80, 69, 95, 83, 73, 78, 84, 51, 50, 16, 17, 18, 15, 10, 11, 84, 89, 80, 69, 95, 83, 73, 78, 84, 54, 52, 16, 18, 34, 67, 10, 5, 76, 97, 98, 101, 108, 18, 18, 10, 14, 76, 65, 66, 69, 76, 95, 79, 80, 84, 73, 79, 78, 65, 76, 16, 1, 18, 18, 10, 14, 76, 65, 66, 69, 76, 95, 82, 69, 80, 69, 65, 84, 69, 68, 16, 3, 18, 18, 10, 14, 76, 65, 66, 69, 76, 95, 82, 69, 81, 85, 73, 82, 69, 68, 16, 2, 34, 99, 10, 20, 79, 110, 101, 111, 102, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 18, 18, 10, 4, 110, 97, 109, 101, 24, 1, 32, 1, 40, 9, 82, 4, 110, 97, 109, 101, 18, 55, 10, 7, 111, 112, 116, 105, 111, 110, 115, 24, 2, 32, 1, 40, 11, 50, 29, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 79, 110, 101, 111, 102, 79, 112, 116, 105, 111, 110, 115, 82, 7, 111, 112, 116, 105, 111, 110, 115, 34, 227, 2, 10, 19, 69, 110, 117, 109, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 18, 18, 10, 4, 110, 97, 109, 101, 24, 1, 32, 1, 40, 9, 82, 4, 110, 97, 109, 101, 18, 63, 10, 5, 118, 97, 108, 117, 101, 24, 2, 32, 3, 40, 11, 50, 41, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 69, 110, 117, 109, 86, 97, 108, 117, 101, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 82, 5, 118, 97, 108, 117, 101, 18, 54, 10, 7, 111, 112, 116, 105, 111, 110, 115, 24, 3, 32, 1, 40, 11, 50, 28, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 69, 110, 117, 109, 79, 112, 116, 105, 111, 110, 115, 82, 7, 111, 112, 116, 105, 111, 110, 115, 18, 93, 10, 14, 114, 101, 115, 101, 114, 118, 101, 100, 95, 114, 97, 110, 103, 101, 24, 4, 32, 3, 40, 11, 50, 54, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 69, 110, 117, 109, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 46, 69, 110, 117, 109, 82, 101, 115, 101, 114, 118, 101, 100, 82, 97, 110, 103, 101, 82, 13, 114, 101, 115, 101, 114, 118, 101, 100, 82, 97, 110, 103, 101, 18, 35, 10, 13, 114, 101, 115, 101, 114, 118, 101, 100, 95, 110, 97, 109, 101, 24, 5, 32, 3, 40, 9, 82, 12, 114, 101, 115, 101, 114, 118, 101, 100, 78, 97, 109, 101, 26, 59, 10, 17, 69, 110, 117, 109, 82, 101, 115, 101, 114, 118, 101, 100, 82, 97, 110, 103, 101, 18, 20, 10, 5, 115, 116, 97, 114, 116, 24, 1, 32, 1, 40, 5, 82, 5, 115, 116, 97, 114, 116, 18, 16, 10, 3, 101, 110, 100, 24, 2, 32, 1, 40, 5, 82, 3, 101, 110, 100, 34, 131, 1, 10, 24, 69, 110, 117, 109, 86, 97, 108, 117, 101, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 18, 18, 10, 4, 110, 97, 109, 101, 24, 1, 32, 1, 40, 9, 82, 4, 110, 97, 109, 101, 18, 22, 10, 6, 110, 117, 109, 98, 101, 114, 24, 2, 32, 1, 40, 5, 82, 6, 110, 117, 109, 98, 101, 114, 18, 59, 10, 7, 111, 112, 116, 105, 111, 110, 115, 24, 3, 32, 1, 40, 11, 50, 33, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 69, 110, 117, 109, 86, 97, 108, 117, 101, 79, 112, 116, 105, 111, 110, 115, 82, 7, 111, 112, 116, 105, 111, 110, 115, 34, 167, 1, 10, 22, 83, 101, 114, 118, 105, 99, 101, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 18, 18, 10, 4, 110, 97, 109, 101, 24, 1, 32, 1, 40, 9, 82, 4, 110, 97, 109, 101, 18, 62, 10, 6, 109, 101, 116, 104, 111, 100, 24, 2, 32, 3, 40, 11, 50, 38, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 77, 101, 116, 104, 111, 100, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 82, 6, 109, 101, 116, 104, 111, 100, 18, 57, 10, 7, 111, 112, 116, 105, 111, 110, 115, 24, 3, 32, 1, 40, 11, 50, 31, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 83, 101, 114, 118, 105, 99, 101, 79, 112, 116, 105, 111, 110, 115, 82, 7, 111, 112, 116, 105, 111, 110, 115, 34, 137, 2, 10, 21, 77, 101, 116, 104, 111, 100, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 18, 18, 10, 4, 110, 97, 109, 101, 24, 1, 32, 1, 40, 9, 82, 4, 110, 97, 109, 101, 18, 29, 10, 10, 105, 110, 112, 117, 116, 95, 116, 121, 112, 101, 24, 2, 32, 1, 40, 9, 82, 9, 105, 110, 112, 117, 116, 84, 121, 112, 101, 18, 31, 10, 11, 111, 117, 116, 112, 117, 116, 95, 116, 121, 112, 101, 24, 3, 32, 1, 40, 9, 82, 10, 111, 117, 116, 112, 117, 116, 84, 121, 112, 101, 18, 56, 10, 7, 111, 112, 116, 105, 111, 110, 115, 24, 4, 32, 1, 40, 11, 50, 30, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 77, 101, 116, 104, 111, 100, 79, 112, 116, 105, 111, 110, 115, 82, 7, 111, 112, 116, 105, 111, 110, 115, 18, 48, 10, 16, 99, 108, 105, 101, 110, 116, 95, 115, 116, 114, 101, 97, 109, 105, 110, 103, 24, 5, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 15, 99, 108, 105, 101, 110, 116, 83, 116, 114, 101, 97, 109, 105, 110, 103, 18, 48, 10, 16, 115, 101, 114, 118, 101, 114, 95, 115, 116, 114, 101, 97, 109, 105, 110, 103, 24, 6, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 15, 115, 101, 114, 118, 101, 114, 83, 116, 114, 101, 97, 109, 105, 110, 103, 34, 173, 9, 10, 11, 70, 105, 108, 101, 79, 112, 116, 105, 111, 110, 115, 18, 33, 10, 12, 106, 97, 118, 97, 95, 112, 97, 99, 107, 97, 103, 101, 24, 1, 32, 1, 40, 9, 82, 11, 106, 97, 118, 97, 80, 97, 99, 107, 97, 103, 101, 18, 48, 10, 20, 106, 97, 118, 97, 95, 111, 117, 116, 101, 114, 95, 99, 108, 97, 115, 115, 110, 97, 109, 101, 24, 8, 32, 1, 40, 9, 82, 18, 106, 97, 118, 97, 79, 117, 116, 101, 114, 67, 108, 97, 115, 115, 110, 97, 109, 101, 18, 53, 10, 19, 106, 97, 118, 97, 95, 109, 117, 108, 116, 105, 112, 108, 101, 95, 102, 105, 108, 101, 115, 24, 10, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 17, 106, 97, 118, 97, 77, 117, 108, 116, 105, 112, 108, 101, 70, 105, 108, 101, 115, 18, 68, 10, 29, 106, 97, 118, 97, 95, 103, 101, 110, 101, 114, 97, 116, 101, 95, 101, 113, 117, 97, 108, 115, 95, 97, 110, 100, 95, 104, 97, 115, 104, 24, 20, 32, 1, 40, 8, 66, 2, 24, 1, 82, 25, 106, 97, 118, 97, 71, 101, 110, 101, 114, 97, 116, 101, 69, 113, 117, 97, 108, 115, 65, 110, 100, 72, 97, 115, 104, 18, 58, 10, 22, 106, 97, 118, 97, 95, 115, 116, 114, 105, 110, 103, 95, 99, 104, 101, 99, 107, 95, 117, 116, 102, 56, 24, 27, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 19, 106, 97, 118, 97, 83, 116, 114, 105, 110, 103, 67, 104, 101, 99, 107, 85, 116, 102, 56, 18, 83, 10, 12, 111, 112, 116, 105, 109, 105, 122, 101, 95, 102, 111, 114, 24, 9, 32, 1, 40, 14, 50, 41, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 105, 108, 101, 79, 112, 116, 105, 111, 110, 115, 46, 79, 112, 116, 105, 109, 105, 122, 101, 77, 111, 100, 101, 58, 5, 83, 80, 69, 69, 68, 82, 11, 111, 112, 116, 105, 109, 105, 122, 101, 70, 111, 114, 18, 29, 10, 10, 103, 111, 95, 112, 97, 99, 107, 97, 103, 101, 24, 11, 32, 1, 40, 9, 82, 9, 103, 111, 80, 97, 99, 107, 97, 103, 101, 18, 53, 10, 19, 99, 99, 95, 103, 101, 110, 101, 114, 105, 99, 95, 115, 101, 114, 118, 105, 99, 101, 115, 24, 16, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 17, 99, 99, 71, 101, 110, 101, 114, 105, 99, 83, 101, 114, 118, 105, 99, 101, 115, 18, 57, 10, 21, 106, 97, 118, 97, 95, 103, 101, 110, 101, 114, 105, 99, 95, 115, 101, 114, 118, 105, 99, 101, 115, 24, 17, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 19, 106, 97, 118, 97, 71, 101, 110, 101, 114, 105, 99, 83, 101, 114, 118, 105, 99, 101, 115, 18, 53, 10, 19, 112, 121, 95, 103, 101, 110, 101, 114, 105, 99, 95, 115, 101, 114, 118, 105, 99, 101, 115, 24, 18, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 17, 112, 121, 71, 101, 110, 101, 114, 105, 99, 83, 101, 114, 118, 105, 99, 101, 115, 18, 37, 10, 10, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 24, 23, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 10, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 18, 46, 10, 16, 99, 99, 95, 101, 110, 97, 98, 108, 101, 95, 97, 114, 101, 110, 97, 115, 24, 31, 32, 1, 40, 8, 58, 4, 116, 114, 117, 101, 82, 14, 99, 99, 69, 110, 97, 98, 108, 101, 65, 114, 101, 110, 97, 115, 18, 42, 10, 17, 111, 98, 106, 99, 95, 99, 108, 97, 115, 115, 95, 112, 114, 101, 102, 105, 120, 24, 36, 32, 1, 40, 9, 82, 15, 111, 98, 106, 99, 67, 108, 97, 115, 115, 80, 114, 101, 102, 105, 120, 18, 41, 10, 16, 99, 115, 104, 97, 114, 112, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 24, 37, 32, 1, 40, 9, 82, 15, 99, 115, 104, 97, 114, 112, 78, 97, 109, 101, 115, 112, 97, 99, 101, 18, 33, 10, 12, 115, 119, 105, 102, 116, 95, 112, 114, 101, 102, 105, 120, 24, 39, 32, 1, 40, 9, 82, 11, 115, 119, 105, 102, 116, 80, 114, 101, 102, 105, 120, 18, 40, 10, 16, 112, 104, 112, 95, 99, 108, 97, 115, 115, 95, 112, 114, 101, 102, 105, 120, 24, 40, 32, 1, 40, 9, 82, 14, 112, 104, 112, 67, 108, 97, 115, 115, 80, 114, 101, 102, 105, 120, 18, 35, 10, 13, 112, 104, 112, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 24, 41, 32, 1, 40, 9, 82, 12, 112, 104, 112, 78, 97, 109, 101, 115, 112, 97, 99, 101, 18, 52, 10, 22, 112, 104, 112, 95, 109, 101, 116, 97, 100, 97, 116, 97, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 24, 44, 32, 1, 40, 9, 82, 20, 112, 104, 112, 77, 101, 116, 97, 100, 97, 116, 97, 78, 97, 109, 101, 115, 112, 97, 99, 101, 18, 33, 10, 12, 114, 117, 98, 121, 95, 112, 97, 99, 107, 97, 103, 101, 24, 45, 32, 1, 40, 9, 82, 11, 114, 117, 98, 121, 80, 97, 99, 107, 97, 103, 101, 18, 55, 10, 8, 102, 101, 97, 116, 117, 114, 101, 115, 24, 50, 32, 1, 40, 11, 50, 27, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 82, 8, 102, 101, 97, 116, 117, 114, 101, 115, 18, 88, 10, 20, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 95, 111, 112, 116, 105, 111, 110, 24, 231, 7, 32, 3, 40, 11, 50, 36, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 85, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 82, 19, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 34, 58, 10, 12, 79, 112, 116, 105, 109, 105, 122, 101, 77, 111, 100, 101, 18, 9, 10, 5, 83, 80, 69, 69, 68, 16, 1, 18, 13, 10, 9, 67, 79, 68, 69, 95, 83, 73, 90, 69, 16, 2, 18, 16, 10, 12, 76, 73, 84, 69, 95, 82, 85, 78, 84, 73, 77, 69, 16, 3, 42, 9, 8, 232, 7, 16, 128, 128, 128, 128, 2, 74, 4, 8, 42, 16, 43, 74, 4, 8, 38, 16, 39, 82, 20, 112, 104, 112, 95, 103, 101, 110, 101, 114, 105, 99, 95, 115, 101, 114, 118, 105, 99, 101, 115, 34, 244, 3, 10, 14, 77, 101, 115, 115, 97, 103, 101, 79, 112, 116, 105, 111, 110, 115, 18, 60, 10, 23, 109, 101, 115, 115, 97, 103, 101, 95, 115, 101, 116, 95, 119, 105, 114, 101, 95, 102, 111, 114, 109, 97, 116, 24, 1, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 20, 109, 101, 115, 115, 97, 103, 101, 83, 101, 116, 87, 105, 114, 101, 70, 111, 114, 109, 97, 116, 18, 76, 10, 31, 110, 111, 95, 115, 116, 97, 110, 100, 97, 114, 100, 95, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 95, 97, 99, 99, 101, 115, 115, 111, 114, 24, 2, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 28, 110, 111, 83, 116, 97, 110, 100, 97, 114, 100, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 65, 99, 99, 101, 115, 115, 111, 114, 18, 37, 10, 10, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 24, 3, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 10, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 18, 27, 10, 9, 109, 97, 112, 95, 101, 110, 116, 114, 121, 24, 7, 32, 1, 40, 8, 82, 8, 109, 97, 112, 69, 110, 116, 114, 121, 18, 86, 10, 38, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 95, 108, 101, 103, 97, 99, 121, 95, 106, 115, 111, 110, 95, 102, 105, 101, 108, 100, 95, 99, 111, 110, 102, 108, 105, 99, 116, 115, 24, 11, 32, 1, 40, 8, 66, 2, 24, 1, 82, 34, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 76, 101, 103, 97, 99, 121, 74, 115, 111, 110, 70, 105, 101, 108, 100, 67, 111, 110, 102, 108, 105, 99, 116, 115, 18, 55, 10, 8, 102, 101, 97, 116, 117, 114, 101, 115, 24, 12, 32, 1, 40, 11, 50, 27, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 82, 8, 102, 101, 97, 116, 117, 114, 101, 115, 18, 88, 10, 20, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 95, 111, 112, 116, 105, 111, 110, 24, 231, 7, 32, 3, 40, 11, 50, 36, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 85, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 82, 19, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 42, 9, 8, 232, 7, 16, 128, 128, 128, 128, 2, 74, 4, 8, 4, 16, 5, 74, 4, 8, 5, 16, 6, 74, 4, 8, 6, 16, 7, 74, 4, 8, 8, 16, 9, 74, 4, 8, 9, 16, 10, 34, 157, 13, 10, 12, 70, 105, 101, 108, 100, 79, 112, 116, 105, 111, 110, 115, 18, 65, 10, 5, 99, 116, 121, 112, 101, 24, 1, 32, 1, 40, 14, 50, 35, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 105, 101, 108, 100, 79, 112, 116, 105, 111, 110, 115, 46, 67, 84, 121, 112, 101, 58, 6, 83, 84, 82, 73, 78, 71, 82, 5, 99, 116, 121, 112, 101, 18, 22, 10, 6, 112, 97, 99, 107, 101, 100, 24, 2, 32, 1, 40, 8, 82, 6, 112, 97, 99, 107, 101, 100, 18, 71, 10, 6, 106, 115, 116, 121, 112, 101, 24, 6, 32, 1, 40, 14, 50, 36, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 105, 101, 108, 100, 79, 112, 116, 105, 111, 110, 115, 46, 74, 83, 84, 121, 112, 101, 58, 9, 74, 83, 95, 78, 79, 82, 77, 65, 76, 82, 6, 106, 115, 116, 121, 112, 101, 18, 25, 10, 4, 108, 97, 122, 121, 24, 5, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 4, 108, 97, 122, 121, 18, 46, 10, 15, 117, 110, 118, 101, 114, 105, 102, 105, 101, 100, 95, 108, 97, 122, 121, 24, 15, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 14, 117, 110, 118, 101, 114, 105, 102, 105, 101, 100, 76, 97, 122, 121, 18, 37, 10, 10, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 24, 3, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 10, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 18, 25, 10, 4, 119, 101, 97, 107, 24, 10, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 4, 119, 101, 97, 107, 18, 40, 10, 12, 100, 101, 98, 117, 103, 95, 114, 101, 100, 97, 99, 116, 24, 16, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 11, 100, 101, 98, 117, 103, 82, 101, 100, 97, 99, 116, 18, 75, 10, 9, 114, 101, 116, 101, 110, 116, 105, 111, 110, 24, 17, 32, 1, 40, 14, 50, 45, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 105, 101, 108, 100, 79, 112, 116, 105, 111, 110, 115, 46, 79, 112, 116, 105, 111, 110, 82, 101, 116, 101, 110, 116, 105, 111, 110, 82, 9, 114, 101, 116, 101, 110, 116, 105, 111, 110, 18, 72, 10, 7, 116, 97, 114, 103, 101, 116, 115, 24, 19, 32, 3, 40, 14, 50, 46, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 105, 101, 108, 100, 79, 112, 116, 105, 111, 110, 115, 46, 79, 112, 116, 105, 111, 110, 84, 97, 114, 103, 101, 116, 84, 121, 112, 101, 82, 7, 116, 97, 114, 103, 101, 116, 115, 18, 87, 10, 16, 101, 100, 105, 116, 105, 111, 110, 95, 100, 101, 102, 97, 117, 108, 116, 115, 24, 20, 32, 3, 40, 11, 50, 44, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 105, 101, 108, 100, 79, 112, 116, 105, 111, 110, 115, 46, 69, 100, 105, 116, 105, 111, 110, 68, 101, 102, 97, 117, 108, 116, 82, 15, 101, 100, 105, 116, 105, 111, 110, 68, 101, 102, 97, 117, 108, 116, 115, 18, 55, 10, 8, 102, 101, 97, 116, 117, 114, 101, 115, 24, 21, 32, 1, 40, 11, 50, 27, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 82, 8, 102, 101, 97, 116, 117, 114, 101, 115, 18, 85, 10, 15, 102, 101, 97, 116, 117, 114, 101, 95, 115, 117, 112, 112, 111, 114, 116, 24, 22, 32, 1, 40, 11, 50, 44, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 105, 101, 108, 100, 79, 112, 116, 105, 111, 110, 115, 46, 70, 101, 97, 116, 117, 114, 101, 83, 117, 112, 112, 111, 114, 116, 82, 14, 102, 101, 97, 116, 117, 114, 101, 83, 117, 112, 112, 111, 114, 116, 18, 88, 10, 20, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 95, 111, 112, 116, 105, 111, 110, 24, 231, 7, 32, 3, 40, 11, 50, 36, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 85, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 82, 19, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 26, 90, 10, 14, 69, 100, 105, 116, 105, 111, 110, 68, 101, 102, 97, 117, 108, 116, 18, 50, 10, 7, 101, 100, 105, 116, 105, 111, 110, 24, 3, 32, 1, 40, 14, 50, 24, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 69, 100, 105, 116, 105, 111, 110, 82, 7, 101, 100, 105, 116, 105, 111, 110, 18, 20, 10, 5, 118, 97, 108, 117, 101, 24, 2, 32, 1, 40, 9, 82, 5, 118, 97, 108, 117, 101, 26, 150, 2, 10, 14, 70, 101, 97, 116, 117, 114, 101, 83, 117, 112, 112, 111, 114, 116, 18, 71, 10, 18, 101, 100, 105, 116, 105, 111, 110, 95, 105, 110, 116, 114, 111, 100, 117, 99, 101, 100, 24, 1, 32, 1, 40, 14, 50, 24, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 69, 100, 105, 116, 105, 111, 110, 82, 17, 101, 100, 105, 116, 105, 111, 110, 73, 110, 116, 114, 111, 100, 117, 99, 101, 100, 18, 71, 10, 18, 101, 100, 105, 116, 105, 111, 110, 95, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 24, 2, 32, 1, 40, 14, 50, 24, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 69, 100, 105, 116, 105, 111, 110, 82, 17, 101, 100, 105, 116, 105, 111, 110, 68, 101, 112, 114, 101, 99, 97, 116, 101, 100, 18, 47, 10, 19, 100, 101, 112, 114, 101, 99, 97, 116, 105, 111, 110, 95, 119, 97, 114, 110, 105, 110, 103, 24, 3, 32, 1, 40, 9, 82, 18, 100, 101, 112, 114, 101, 99, 97, 116, 105, 111, 110, 87, 97, 114, 110, 105, 110, 103, 18, 65, 10, 15, 101, 100, 105, 116, 105, 111, 110, 95, 114, 101, 109, 111, 118, 101, 100, 24, 4, 32, 1, 40, 14, 50, 24, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 69, 100, 105, 116, 105, 111, 110, 82, 14, 101, 100, 105, 116, 105, 111, 110, 82, 101, 109, 111, 118, 101, 100, 34, 47, 10, 5, 67, 84, 121, 112, 101, 18, 10, 10, 6, 83, 84, 82, 73, 78, 71, 16, 0, 18, 8, 10, 4, 67, 79, 82, 68, 16, 1, 18, 16, 10, 12, 83, 84, 82, 73, 78, 71, 95, 80, 73, 69, 67, 69, 16, 2, 34, 53, 10, 6, 74, 83, 84, 121, 112, 101, 18, 13, 10, 9, 74, 83, 95, 78, 79, 82, 77, 65, 76, 16, 0, 18, 13, 10, 9, 74, 83, 95, 83, 84, 82, 73, 78, 71, 16, 1, 18, 13, 10, 9, 74, 83, 95, 78, 85, 77, 66, 69, 82, 16, 2, 34, 85, 10, 15, 79, 112, 116, 105, 111, 110, 82, 101, 116, 101, 110, 116, 105, 111, 110, 18, 21, 10, 17, 82, 69, 84, 69, 78, 84, 73, 79, 78, 95, 85, 78, 75, 78, 79, 87, 78, 16, 0, 18, 21, 10, 17, 82, 69, 84, 69, 78, 84, 73, 79, 78, 95, 82, 85, 78, 84, 73, 77, 69, 16, 1, 18, 20, 10, 16, 82, 69, 84, 69, 78, 84, 73, 79, 78, 95, 83, 79, 85, 82, 67, 69, 16, 2, 34, 140, 2, 10, 16, 79, 112, 116, 105, 111, 110, 84, 97, 114, 103, 101, 116, 84, 121, 112, 101, 18, 23, 10, 19, 84, 65, 82, 71, 69, 84, 95, 84, 89, 80, 69, 95, 85, 78, 75, 78, 79, 87, 78, 16, 0, 18, 20, 10, 16, 84, 65, 82, 71, 69, 84, 95, 84, 89, 80, 69, 95, 70, 73, 76, 69, 16, 1, 18, 31, 10, 27, 84, 65, 82, 71, 69, 84, 95, 84, 89, 80, 69, 95, 69, 88, 84, 69, 78, 83, 73, 79, 78, 95, 82, 65, 78, 71, 69, 16, 2, 18, 23, 10, 19, 84, 65, 82, 71, 69, 84, 95, 84, 89, 80, 69, 95, 77, 69, 83, 83, 65, 71, 69, 16, 3, 18, 21, 10, 17, 84, 65, 82, 71, 69, 84, 95, 84, 89, 80, 69, 95, 70, 73, 69, 76, 68, 16, 4, 18, 21, 10, 17, 84, 65, 82, 71, 69, 84, 95, 84, 89, 80, 69, 95, 79, 78, 69, 79, 70, 16, 5, 18, 20, 10, 16, 84, 65, 82, 71, 69, 84, 95, 84, 89, 80, 69, 95, 69, 78, 85, 77, 16, 6, 18, 26, 10, 22, 84, 65, 82, 71, 69, 84, 95, 84, 89, 80, 69, 95, 69, 78, 85, 77, 95, 69, 78, 84, 82, 89, 16, 7, 18, 23, 10, 19, 84, 65, 82, 71, 69, 84, 95, 84, 89, 80, 69, 95, 83, 69, 82, 86, 73, 67, 69, 16, 8, 18, 22, 10, 18, 84, 65, 82, 71, 69, 84, 95, 84, 89, 80, 69, 95, 77, 69, 84, 72, 79, 68, 16, 9, 42, 9, 8, 232, 7, 16, 128, 128, 128, 128, 2, 74, 4, 8, 4, 16, 5, 74, 4, 8, 18, 16, 19, 34, 172, 1, 10, 12, 79, 110, 101, 111, 102, 79, 112, 116, 105, 111, 110, 115, 18, 55, 10, 8, 102, 101, 97, 116, 117, 114, 101, 115, 24, 1, 32, 1, 40, 11, 50, 27, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 82, 8, 102, 101, 97, 116, 117, 114, 101, 115, 18, 88, 10, 20, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 95, 111, 112, 116, 105, 111, 110, 24, 231, 7, 32, 3, 40, 11, 50, 36, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 85, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 82, 19, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 42, 9, 8, 232, 7, 16, 128, 128, 128, 128, 2, 34, 209, 2, 10, 11, 69, 110, 117, 109, 79, 112, 116, 105, 111, 110, 115, 18, 31, 10, 11, 97, 108, 108, 111, 119, 95, 97, 108, 105, 97, 115, 24, 2, 32, 1, 40, 8, 82, 10, 97, 108, 108, 111, 119, 65, 108, 105, 97, 115, 18, 37, 10, 10, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 24, 3, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 10, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 18, 86, 10, 38, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 95, 108, 101, 103, 97, 99, 121, 95, 106, 115, 111, 110, 95, 102, 105, 101, 108, 100, 95, 99, 111, 110, 102, 108, 105, 99, 116, 115, 24, 6, 32, 1, 40, 8, 66, 2, 24, 1, 82, 34, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 76, 101, 103, 97, 99, 121, 74, 115, 111, 110, 70, 105, 101, 108, 100, 67, 111, 110, 102, 108, 105, 99, 116, 115, 18, 55, 10, 8, 102, 101, 97, 116, 117, 114, 101, 115, 24, 7, 32, 1, 40, 11, 50, 27, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 82, 8, 102, 101, 97, 116, 117, 114, 101, 115, 18, 88, 10, 20, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 95, 111, 112, 116, 105, 111, 110, 24, 231, 7, 32, 3, 40, 11, 50, 36, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 85, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 82, 19, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 42, 9, 8, 232, 7, 16, 128, 128, 128, 128, 2, 74, 4, 8, 5, 16, 6, 34, 216, 2, 10, 16, 69, 110, 117, 109, 86, 97, 108, 117, 101, 79, 112, 116, 105, 111, 110, 115, 18, 37, 10, 10, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 24, 1, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 10, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 18, 55, 10, 8, 102, 101, 97, 116, 117, 114, 101, 115, 24, 2, 32, 1, 40, 11, 50, 27, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 82, 8, 102, 101, 97, 116, 117, 114, 101, 115, 18, 40, 10, 12, 100, 101, 98, 117, 103, 95, 114, 101, 100, 97, 99, 116, 24, 3, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 11, 100, 101, 98, 117, 103, 82, 101, 100, 97, 99, 116, 18, 85, 10, 15, 102, 101, 97, 116, 117, 114, 101, 95, 115, 117, 112, 112, 111, 114, 116, 24, 4, 32, 1, 40, 11, 50, 44, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 105, 101, 108, 100, 79, 112, 116, 105, 111, 110, 115, 46, 70, 101, 97, 116, 117, 114, 101, 83, 117, 112, 112, 111, 114, 116, 82, 14, 102, 101, 97, 116, 117, 114, 101, 83, 117, 112, 112, 111, 114, 116, 18, 88, 10, 20, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 95, 111, 112, 116, 105, 111, 110, 24, 231, 7, 32, 3, 40, 11, 50, 36, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 85, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 82, 19, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 42, 9, 8, 232, 7, 16, 128, 128, 128, 128, 2, 34, 213, 1, 10, 14, 83, 101, 114, 118, 105, 99, 101, 79, 112, 116, 105, 111, 110, 115, 18, 55, 10, 8, 102, 101, 97, 116, 117, 114, 101, 115, 24, 34, 32, 1, 40, 11, 50, 27, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 82, 8, 102, 101, 97, 116, 117, 114, 101, 115, 18, 37, 10, 10, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 24, 33, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 10, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 18, 88, 10, 20, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 95, 111, 112, 116, 105, 111, 110, 24, 231, 7, 32, 3, 40, 11, 50, 36, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 85, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 82, 19, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 42, 9, 8, 232, 7, 16, 128, 128, 128, 128, 2, 34, 153, 3, 10, 13, 77, 101, 116, 104, 111, 100, 79, 112, 116, 105, 111, 110, 115, 18, 37, 10, 10, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 24, 33, 32, 1, 40, 8, 58, 5, 102, 97, 108, 115, 101, 82, 10, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 18, 113, 10, 17, 105, 100, 101, 109, 112, 111, 116, 101, 110, 99, 121, 95, 108, 101, 118, 101, 108, 24, 34, 32, 1, 40, 14, 50, 47, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 77, 101, 116, 104, 111, 100, 79, 112, 116, 105, 111, 110, 115, 46, 73, 100, 101, 109, 112, 111, 116, 101, 110, 99, 121, 76, 101, 118, 101, 108, 58, 19, 73, 68, 69, 77, 80, 79, 84, 69, 78, 67, 89, 95, 85, 78, 75, 78, 79, 87, 78, 82, 16, 105, 100, 101, 109, 112, 111, 116, 101, 110, 99, 121, 76, 101, 118, 101, 108, 18, 55, 10, 8, 102, 101, 97, 116, 117, 114, 101, 115, 24, 35, 32, 1, 40, 11, 50, 27, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 82, 8, 102, 101, 97, 116, 117, 114, 101, 115, 18, 88, 10, 20, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 95, 111, 112, 116, 105, 111, 110, 24, 231, 7, 32, 3, 40, 11, 50, 36, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 85, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 82, 19, 117, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 34, 80, 10, 16, 73, 100, 101, 109, 112, 111, 116, 101, 110, 99, 121, 76, 101, 118, 101, 108, 18, 23, 10, 19, 73, 68, 69, 77, 80, 79, 84, 69, 78, 67, 89, 95, 85, 78, 75, 78, 79, 87, 78, 16, 0, 18, 19, 10, 15, 78, 79, 95, 83, 73, 68, 69, 95, 69, 70, 70, 69, 67, 84, 83, 16, 1, 18, 14, 10, 10, 73, 68, 69, 77, 80, 79, 84, 69, 78, 84, 16, 2, 42, 9, 8, 232, 7, 16, 128, 128, 128, 128, 2, 34, 154, 3, 10, 19, 85, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 18, 65, 10, 4, 110, 97, 109, 101, 24, 2, 32, 3, 40, 11, 50, 45, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 85, 110, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 79, 112, 116, 105, 111, 110, 46, 78, 97, 109, 101, 80, 97, 114, 116, 82, 4, 110, 97, 109, 101, 18, 41, 10, 16, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 95, 118, 97, 108, 117, 101, 24, 3, 32, 1, 40, 9, 82, 15, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 86, 97, 108, 117, 101, 18, 44, 10, 18, 112, 111, 115, 105, 116, 105, 118, 101, 95, 105, 110, 116, 95, 118, 97, 108, 117, 101, 24, 4, 32, 1, 40, 4, 82, 16, 112, 111, 115, 105, 116, 105, 118, 101, 73, 110, 116, 86, 97, 108, 117, 101, 18, 44, 10, 18, 110, 101, 103, 97, 116, 105, 118, 101, 95, 105, 110, 116, 95, 118, 97, 108, 117, 101, 24, 5, 32, 1, 40, 3, 82, 16, 110, 101, 103, 97, 116, 105, 118, 101, 73, 110, 116, 86, 97, 108, 117, 101, 18, 33, 10, 12, 100, 111, 117, 98, 108, 101, 95, 118, 97, 108, 117, 101, 24, 6, 32, 1, 40, 1, 82, 11, 100, 111, 117, 98, 108, 101, 86, 97, 108, 117, 101, 18, 33, 10, 12, 115, 116, 114, 105, 110, 103, 95, 118, 97, 108, 117, 101, 24, 7, 32, 1, 40, 12, 82, 11, 115, 116, 114, 105, 110, 103, 86, 97, 108, 117, 101, 18, 39, 10, 15, 97, 103, 103, 114, 101, 103, 97, 116, 101, 95, 118, 97, 108, 117, 101, 24, 8, 32, 1, 40, 9, 82, 14, 97, 103, 103, 114, 101, 103, 97, 116, 101, 86, 97, 108, 117, 101, 26, 74, 10, 8, 78, 97, 109, 101, 80, 97, 114, 116, 18, 27, 10, 9, 110, 97, 109, 101, 95, 112, 97, 114, 116, 24, 1, 32, 2, 40, 9, 82, 8, 110, 97, 109, 101, 80, 97, 114, 116, 18, 33, 10, 12, 105, 115, 95, 101, 120, 116, 101, 110, 115, 105, 111, 110, 24, 2, 32, 2, 40, 8, 82, 11, 105, 115, 69, 120, 116, 101, 110, 115, 105, 111, 110, 34, 167, 10, 10, 10, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 18, 145, 1, 10, 14, 102, 105, 101, 108, 100, 95, 112, 114, 101, 115, 101, 110, 99, 101, 24, 1, 32, 1, 40, 14, 50, 41, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 46, 70, 105, 101, 108, 100, 80, 114, 101, 115, 101, 110, 99, 101, 66, 63, 136, 1, 1, 152, 1, 4, 152, 1, 1, 162, 1, 13, 18, 8, 69, 88, 80, 76, 73, 67, 73, 84, 24, 230, 7, 162, 1, 13, 18, 8, 73, 77, 80, 76, 73, 67, 73, 84, 24, 231, 7, 162, 1, 13, 18, 8, 69, 88, 80, 76, 73, 67, 73, 84, 24, 232, 7, 178, 1, 3, 8, 232, 7, 82, 13, 102, 105, 101, 108, 100, 80, 114, 101, 115, 101, 110, 99, 101, 18, 108, 10, 9, 101, 110, 117, 109, 95, 116, 121, 112, 101, 24, 2, 32, 1, 40, 14, 50, 36, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 46, 69, 110, 117, 109, 84, 121, 112, 101, 66, 41, 136, 1, 1, 152, 1, 6, 152, 1, 1, 162, 1, 11, 18, 6, 67, 76, 79, 83, 69, 68, 24, 230, 7, 162, 1, 9, 18, 4, 79, 80, 69, 78, 24, 231, 7, 178, 1, 3, 8, 232, 7, 82, 8, 101, 110, 117, 109, 84, 121, 112, 101, 18, 152, 1, 10, 23, 114, 101, 112, 101, 97, 116, 101, 100, 95, 102, 105, 101, 108, 100, 95, 101, 110, 99, 111, 100, 105, 110, 103, 24, 3, 32, 1, 40, 14, 50, 49, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 46, 82, 101, 112, 101, 97, 116, 101, 100, 70, 105, 101, 108, 100, 69, 110, 99, 111, 100, 105, 110, 103, 66, 45, 136, 1, 1, 152, 1, 4, 152, 1, 1, 162, 1, 13, 18, 8, 69, 88, 80, 65, 78, 68, 69, 68, 24, 230, 7, 162, 1, 11, 18, 6, 80, 65, 67, 75, 69, 68, 24, 231, 7, 178, 1, 3, 8, 232, 7, 82, 21, 114, 101, 112, 101, 97, 116, 101, 100, 70, 105, 101, 108, 100, 69, 110, 99, 111, 100, 105, 110, 103, 18, 126, 10, 15, 117, 116, 102, 56, 95, 118, 97, 108, 105, 100, 97, 116, 105, 111, 110, 24, 4, 32, 1, 40, 14, 50, 42, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 46, 85, 116, 102, 56, 86, 97, 108, 105, 100, 97, 116, 105, 111, 110, 66, 41, 136, 1, 1, 152, 1, 4, 152, 1, 1, 162, 1, 9, 18, 4, 78, 79, 78, 69, 24, 230, 7, 162, 1, 11, 18, 6, 86, 69, 82, 73, 70, 89, 24, 231, 7, 178, 1, 3, 8, 232, 7, 82, 14, 117, 116, 102, 56, 86, 97, 108, 105, 100, 97, 116, 105, 111, 110, 18, 126, 10, 16, 109, 101, 115, 115, 97, 103, 101, 95, 101, 110, 99, 111, 100, 105, 110, 103, 24, 5, 32, 1, 40, 14, 50, 43, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 46, 77, 101, 115, 115, 97, 103, 101, 69, 110, 99, 111, 100, 105, 110, 103, 66, 38, 136, 1, 1, 152, 1, 4, 152, 1, 1, 162, 1, 20, 18, 15, 76, 69, 78, 71, 84, 72, 95, 80, 82, 69, 70, 73, 88, 69, 68, 24, 230, 7, 178, 1, 3, 8, 232, 7, 82, 15, 109, 101, 115, 115, 97, 103, 101, 69, 110, 99, 111, 100, 105, 110, 103, 18, 130, 1, 10, 11, 106, 115, 111, 110, 95, 102, 111, 114, 109, 97, 116, 24, 6, 32, 1, 40, 14, 50, 38, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 46, 74, 115, 111, 110, 70, 111, 114, 109, 97, 116, 66, 57, 136, 1, 1, 152, 1, 3, 152, 1, 6, 152, 1, 1, 162, 1, 23, 18, 18, 76, 69, 71, 65, 67, 89, 95, 66, 69, 83, 84, 95, 69, 70, 70, 79, 82, 84, 24, 230, 7, 162, 1, 10, 18, 5, 65, 76, 76, 79, 87, 24, 231, 7, 178, 1, 3, 8, 232, 7, 82, 10, 106, 115, 111, 110, 70, 111, 114, 109, 97, 116, 34, 92, 10, 13, 70, 105, 101, 108, 100, 80, 114, 101, 115, 101, 110, 99, 101, 18, 26, 10, 22, 70, 73, 69, 76, 68, 95, 80, 82, 69, 83, 69, 78, 67, 69, 95, 85, 78, 75, 78, 79, 87, 78, 16, 0, 18, 12, 10, 8, 69, 88, 80, 76, 73, 67, 73, 84, 16, 1, 18, 12, 10, 8, 73, 77, 80, 76, 73, 67, 73, 84, 16, 2, 18, 19, 10, 15, 76, 69, 71, 65, 67, 89, 95, 82, 69, 81, 85, 73, 82, 69, 68, 16, 3, 34, 55, 10, 8, 69, 110, 117, 109, 84, 121, 112, 101, 18, 21, 10, 17, 69, 78, 85, 77, 95, 84, 89, 80, 69, 95, 85, 78, 75, 78, 79, 87, 78, 16, 0, 18, 8, 10, 4, 79, 80, 69, 78, 16, 1, 18, 10, 10, 6, 67, 76, 79, 83, 69, 68, 16, 2, 34, 86, 10, 21, 82, 101, 112, 101, 97, 116, 101, 100, 70, 105, 101, 108, 100, 69, 110, 99, 111, 100, 105, 110, 103, 18, 35, 10, 31, 82, 69, 80, 69, 65, 84, 69, 68, 95, 70, 73, 69, 76, 68, 95, 69, 78, 67, 79, 68, 73, 78, 71, 95, 85, 78, 75, 78, 79, 87, 78, 16, 0, 18, 10, 10, 6, 80, 65, 67, 75, 69, 68, 16, 1, 18, 12, 10, 8, 69, 88, 80, 65, 78, 68, 69, 68, 16, 2, 34, 73, 10, 14, 85, 116, 102, 56, 86, 97, 108, 105, 100, 97, 116, 105, 111, 110, 18, 27, 10, 23, 85, 84, 70, 56, 95, 86, 65, 76, 73, 68, 65, 84, 73, 79, 78, 95, 85, 78, 75, 78, 79, 87, 78, 16, 0, 18, 10, 10, 6, 86, 69, 82, 73, 70, 89, 16, 2, 18, 8, 10, 4, 78, 79, 78, 69, 16, 3, 34, 4, 8, 1, 16, 1, 34, 83, 10, 15, 77, 101, 115, 115, 97, 103, 101, 69, 110, 99, 111, 100, 105, 110, 103, 18, 28, 10, 24, 77, 69, 83, 83, 65, 71, 69, 95, 69, 78, 67, 79, 68, 73, 78, 71, 95, 85, 78, 75, 78, 79, 87, 78, 16, 0, 18, 19, 10, 15, 76, 69, 78, 71, 84, 72, 95, 80, 82, 69, 70, 73, 88, 69, 68, 16, 1, 18, 13, 10, 9, 68, 69, 76, 73, 77, 73, 84, 69, 68, 16, 2, 34, 72, 10, 10, 74, 115, 111, 110, 70, 111, 114, 109, 97, 116, 18, 23, 10, 19, 74, 83, 79, 78, 95, 70, 79, 82, 77, 65, 84, 95, 85, 78, 75, 78, 79, 87, 78, 16, 0, 18, 9, 10, 5, 65, 76, 76, 79, 87, 16, 1, 18, 22, 10, 18, 76, 69, 71, 65, 67, 89, 95, 66, 69, 83, 84, 95, 69, 70, 70, 79, 82, 84, 16, 2, 42, 6, 8, 232, 7, 16, 139, 78, 42, 6, 8, 139, 78, 16, 144, 78, 42, 6, 8, 144, 78, 16, 145, 78, 74, 6, 8, 231, 7, 16, 232, 7, 34, 239, 3, 10, 18, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 68, 101, 102, 97, 117, 108, 116, 115, 18, 88, 10, 8, 100, 101, 102, 97, 117, 108, 116, 115, 24, 1, 32, 3, 40, 11, 50, 60, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 68, 101, 102, 97, 117, 108, 116, 115, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 69, 100, 105, 116, 105, 111, 110, 68, 101, 102, 97, 117, 108, 116, 82, 8, 100, 101, 102, 97, 117, 108, 116, 115, 18, 65, 10, 15, 109, 105, 110, 105, 109, 117, 109, 95, 101, 100, 105, 116, 105, 111, 110, 24, 4, 32, 1, 40, 14, 50, 24, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 69, 100, 105, 116, 105, 111, 110, 82, 14, 109, 105, 110, 105, 109, 117, 109, 69, 100, 105, 116, 105, 111, 110, 18, 65, 10, 15, 109, 97, 120, 105, 109, 117, 109, 95, 101, 100, 105, 116, 105, 111, 110, 24, 5, 32, 1, 40, 14, 50, 24, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 69, 100, 105, 116, 105, 111, 110, 82, 14, 109, 97, 120, 105, 109, 117, 109, 69, 100, 105, 116, 105, 111, 110, 26, 248, 1, 10, 24, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 69, 100, 105, 116, 105, 111, 110, 68, 101, 102, 97, 117, 108, 116, 18, 50, 10, 7, 101, 100, 105, 116, 105, 111, 110, 24, 3, 32, 1, 40, 14, 50, 24, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 69, 100, 105, 116, 105, 111, 110, 82, 7, 101, 100, 105, 116, 105, 111, 110, 18, 78, 10, 20, 111, 118, 101, 114, 114, 105, 100, 97, 98, 108, 101, 95, 102, 101, 97, 116, 117, 114, 101, 115, 24, 4, 32, 1, 40, 11, 50, 27, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 82, 19, 111, 118, 101, 114, 114, 105, 100, 97, 98, 108, 101, 70, 101, 97, 116, 117, 114, 101, 115, 18, 66, 10, 14, 102, 105, 120, 101, 100, 95, 102, 101, 97, 116, 117, 114, 101, 115, 24, 5, 32, 1, 40, 11, 50, 27, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 70, 101, 97, 116, 117, 114, 101, 83, 101, 116, 82, 13, 102, 105, 120, 101, 100, 70, 101, 97, 116, 117, 114, 101, 115, 74, 4, 8, 1, 16, 2, 74, 4, 8, 2, 16, 3, 82, 8, 102, 101, 97, 116, 117, 114, 101, 115, 34, 167, 2, 10, 14, 83, 111, 117, 114, 99, 101, 67, 111, 100, 101, 73, 110, 102, 111, 18, 68, 10, 8, 108, 111, 99, 97, 116, 105, 111, 110, 24, 1, 32, 3, 40, 11, 50, 40, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 83, 111, 117, 114, 99, 101, 67, 111, 100, 101, 73, 110, 102, 111, 46, 76, 111, 99, 97, 116, 105, 111, 110, 82, 8, 108, 111, 99, 97, 116, 105, 111, 110, 26, 206, 1, 10, 8, 76, 111, 99, 97, 116, 105, 111, 110, 18, 22, 10, 4, 112, 97, 116, 104, 24, 1, 32, 3, 40, 5, 66, 2, 16, 1, 82, 4, 112, 97, 116, 104, 18, 22, 10, 4, 115, 112, 97, 110, 24, 2, 32, 3, 40, 5, 66, 2, 16, 1, 82, 4, 115, 112, 97, 110, 18, 41, 10, 16, 108, 101, 97, 100, 105, 110, 103, 95, 99, 111, 109, 109, 101, 110, 116, 115, 24, 3, 32, 1, 40, 9, 82, 15, 108, 101, 97, 100, 105, 110, 103, 67, 111, 109, 109, 101, 110, 116, 115, 18, 43, 10, 17, 116, 114, 97, 105, 108, 105, 110, 103, 95, 99, 111, 109, 109, 101, 110, 116, 115, 24, 4, 32, 1, 40, 9, 82, 16, 116, 114, 97, 105, 108, 105, 110, 103, 67, 111, 109, 109, 101, 110, 116, 115, 18, 58, 10, 25, 108, 101, 97, 100, 105, 110, 103, 95, 100, 101, 116, 97, 99, 104, 101, 100, 95, 99, 111, 109, 109, 101, 110, 116, 115, 24, 6, 32, 3, 40, 9, 82, 23, 108, 101, 97, 100, 105, 110, 103, 68, 101, 116, 97, 99, 104, 101, 100, 67, 111, 109, 109, 101, 110, 116, 115, 34, 208, 2, 10, 17, 71, 101, 110, 101, 114, 97, 116, 101, 100, 67, 111, 100, 101, 73, 110, 102, 111, 18, 77, 10, 10, 97, 110, 110, 111, 116, 97, 116, 105, 111, 110, 24, 1, 32, 3, 40, 11, 50, 45, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 71, 101, 110, 101, 114, 97, 116, 101, 100, 67, 111, 100, 101, 73, 110, 102, 111, 46, 65, 110, 110, 111, 116, 97, 116, 105, 111, 110, 82, 10, 97, 110, 110, 111, 116, 97, 116, 105, 111, 110, 26, 235, 1, 10, 10, 65, 110, 110, 111, 116, 97, 116, 105, 111, 110, 18, 22, 10, 4, 112, 97, 116, 104, 24, 1, 32, 3, 40, 5, 66, 2, 16, 1, 82, 4, 112, 97, 116, 104, 18, 31, 10, 11, 115, 111, 117, 114, 99, 101, 95, 102, 105, 108, 101, 24, 2, 32, 1, 40, 9, 82, 10, 115, 111, 117, 114, 99, 101, 70, 105, 108, 101, 18, 20, 10, 5, 98, 101, 103, 105, 110, 24, 3, 32, 1, 40, 5, 82, 5, 98, 101, 103, 105, 110, 18, 16, 10, 3, 101, 110, 100, 24, 4, 32, 1, 40, 5, 82, 3, 101, 110, 100, 18, 82, 10, 8, 115, 101, 109, 97, 110, 116, 105, 99, 24, 5, 32, 1, 40, 14, 50, 54, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 71, 101, 110, 101, 114, 97, 116, 101, 100, 67, 111, 100, 101, 73, 110, 102, 111, 46, 65, 110, 110, 111, 116, 97, 116, 105, 111, 110, 46, 83, 101, 109, 97, 110, 116, 105, 99, 82, 8, 115, 101, 109, 97, 110, 116, 105, 99, 34, 40, 10, 8, 83, 101, 109, 97, 110, 116, 105, 99, 18, 8, 10, 4, 78, 79, 78, 69, 16, 0, 18, 7, 10, 3, 83, 69, 84, 16, 1, 18, 9, 10, 5, 65, 76, 73, 65, 83, 16, 2, 42, 167, 2, 10, 7, 69, 100, 105, 116, 105, 111, 110, 18, 19, 10, 15, 69, 68, 73, 84, 73, 79, 78, 95, 85, 78, 75, 78, 79, 87, 78, 16, 0, 18, 19, 10, 14, 69, 68, 73, 84, 73, 79, 78, 95, 76, 69, 71, 65, 67, 89, 16, 132, 7, 18, 19, 10, 14, 69, 68, 73, 84, 73, 79, 78, 95, 80, 82, 79, 84, 79, 50, 16, 230, 7, 18, 19, 10, 14, 69, 68, 73, 84, 73, 79, 78, 95, 80, 82, 79, 84, 79, 51, 16, 231, 7, 18, 17, 10, 12, 69, 68, 73, 84, 73, 79, 78, 95, 50, 48, 50, 51, 16, 232, 7, 18, 17, 10, 12, 69, 68, 73, 84, 73, 79, 78, 95, 50, 48, 50, 52, 16, 233, 7, 18, 23, 10, 19, 69, 68, 73, 84, 73, 79, 78, 95, 49, 95, 84, 69, 83, 84, 95, 79, 78, 76, 89, 16, 1, 18, 23, 10, 19, 69, 68, 73, 84, 73, 79, 78, 95, 50, 95, 84, 69, 83, 84, 95, 79, 78, 76, 89, 16, 2, 18, 29, 10, 23, 69, 68, 73, 84, 73, 79, 78, 95, 57, 57, 57, 57, 55, 95, 84, 69, 83, 84, 95, 79, 78, 76, 89, 16, 157, 141, 6, 18, 29, 10, 23, 69, 68, 73, 84, 73, 79, 78, 95, 57, 57, 57, 57, 56, 95, 84, 69, 83, 84, 95, 79, 78, 76, 89, 16, 158, 141, 6, 18, 29, 10, 23, 69, 68, 73, 84, 73, 79, 78, 95, 57, 57, 57, 57, 57, 95, 84, 69, 83, 84, 95, 79, 78, 76, 89, 16, 159, 141, 6, 18, 19, 10, 11, 69, 68, 73, 84, 73, 79, 78, 95, 77, 65, 88, 16, 255, 255, 255, 255, 7, 66, 126, 10, 19, 99, 111, 109, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 66, 16, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 80, 114, 111, 116, 111, 115, 72, 1, 90, 45, 103, 111, 111, 103, 108, 101, 46, 103, 111, 108, 97, 110, 103, 46, 111, 114, 103, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 116, 121, 112, 101, 115, 47, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 112, 98, 248, 1, 1, 162, 2, 3, 71, 80, 66, 170, 2, 26, 71, 111, 111, 103, 108, 101, 46, 80, 114, 111, 116, 111, 98, 117, 102, 46, 82, 101, 102, 108, 101, 99, 116, 105, 111, 110]) as $.Slice<number>

export function __goscript_set_file_google_protobuf_descriptor_proto_rawDesc(__goscriptValue: $.Slice<number>): void {
	file_google_protobuf_descriptor_proto_rawDesc = __goscriptValue
}

export let file_google_protobuf_descriptor_proto_rawDescOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_file_google_protobuf_descriptor_proto_rawDescOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(file_google_protobuf_descriptor_proto_rawDescOnce.value, __goscriptValue)
}

export let file_google_protobuf_descriptor_proto_rawDescData: $.Slice<number> = file_google_protobuf_descriptor_proto_rawDesc

export function __goscript_set_file_google_protobuf_descriptor_proto_rawDescData(__goscriptValue: $.Slice<number>): void {
	file_google_protobuf_descriptor_proto_rawDescData = __goscriptValue
}

export async function file_google_protobuf_descriptor_proto_rawDescGZIP(): globalThis.Promise<$.Slice<number>> {
	await file_google_protobuf_descriptor_proto_rawDescOnce.value.Do($.functionValue((): void => {
		file_google_protobuf_descriptor_proto_rawDescData = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).CompressGZIP(file_google_protobuf_descriptor_proto_rawDescData)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return file_google_protobuf_descriptor_proto_rawDescData
}

export let file_google_protobuf_descriptor_proto_enumTypes: $.Slice<protoimpl.EnumInfo> = $.makeSlice<protoimpl.EnumInfo>(17, undefined, undefined, () => new protoimpl.EnumInfo(undefined, true))

export function __goscript_set_file_google_protobuf_descriptor_proto_enumTypes(__goscriptValue: $.Slice<protoimpl.EnumInfo>): void {
	file_google_protobuf_descriptor_proto_enumTypes = __goscriptValue
}

export let file_google_protobuf_descriptor_proto_msgTypes: $.Slice<protoimpl.MessageInfo> = $.makeSlice<protoimpl.MessageInfo>(33, undefined, undefined, () => new protoimpl.MessageInfo(undefined, true))

export function __goscript_set_file_google_protobuf_descriptor_proto_msgTypes(__goscriptValue: $.Slice<protoimpl.MessageInfo>): void {
	file_google_protobuf_descriptor_proto_msgTypes = __goscriptValue
}

export let file_google_protobuf_descriptor_proto_goTypes: $.Slice<any> = $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(0, "descriptorpb.Edition", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(0, "descriptorpb.ExtensionRangeOptions_VerificationState", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), $.namedValueInterfaceValue<any>(0, "descriptorpb.FieldDescriptorProto_Type", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()), $.namedValueInterfaceValue<any>(0, "descriptorpb.FieldDescriptorProto_Label", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic11()), $.namedValueInterfaceValue<any>(0, "descriptorpb.FileOptions_OptimizeMode", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic14()), $.namedValueInterfaceValue<any>(0, "descriptorpb.FieldOptions_CType", __goscriptStatic15(), __goscriptStatic16(), __goscriptStatic17()), $.namedValueInterfaceValue<any>(0, "descriptorpb.FieldOptions_JSType", __goscriptStatic18(), __goscriptStatic19(), __goscriptStatic20()), $.namedValueInterfaceValue<any>(0, "descriptorpb.FieldOptions_OptionRetention", __goscriptStatic21(), __goscriptStatic22(), __goscriptStatic23()), $.namedValueInterfaceValue<any>(0, "descriptorpb.FieldOptions_OptionTargetType", __goscriptStatic24(), __goscriptStatic25(), __goscriptStatic26()), $.namedValueInterfaceValue<any>(0, "descriptorpb.MethodOptions_IdempotencyLevel", __goscriptStatic27(), __goscriptStatic28(), __goscriptStatic29()), $.namedValueInterfaceValue<any>(0, "descriptorpb.FeatureSet_FieldPresence", __goscriptStatic30(), __goscriptStatic31(), __goscriptStatic32()), $.namedValueInterfaceValue<any>(0, "descriptorpb.FeatureSet_EnumType", __goscriptStatic33(), __goscriptStatic34(), __goscriptStatic35()), $.namedValueInterfaceValue<any>(0, "descriptorpb.FeatureSet_RepeatedFieldEncoding", __goscriptStatic36(), __goscriptStatic37(), __goscriptStatic38()), $.namedValueInterfaceValue<any>(0, "descriptorpb.FeatureSet_Utf8Validation", __goscriptStatic39(), __goscriptStatic40(), __goscriptStatic41()), $.namedValueInterfaceValue<any>(0, "descriptorpb.FeatureSet_MessageEncoding", __goscriptStatic42(), __goscriptStatic43(), __goscriptStatic44()), $.namedValueInterfaceValue<any>(0, "descriptorpb.FeatureSet_JsonFormat", __goscriptStatic45(), __goscriptStatic46(), __goscriptStatic47()), $.namedValueInterfaceValue<any>(0, "descriptorpb.GeneratedCodeInfo_Annotation_Semantic", __goscriptStatic48(), __goscriptStatic49(), __goscriptStatic50()), $.interfaceValue(null, "*descriptorpb.FileDescriptorSet", /* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorSet")), $.interfaceValue(null, "*descriptorpb.FileDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorProto")), $.interfaceValue(null, "*descriptorpb.DescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto")), $.interfaceValue(null, "*descriptorpb.ExtensionRangeOptions", /* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions")), $.interfaceValue(null, "*descriptorpb.FieldDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.FieldDescriptorProto")), $.interfaceValue(null, "*descriptorpb.OneofDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.OneofDescriptorProto")), $.interfaceValue(null, "*descriptorpb.EnumDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto")), $.interfaceValue(null, "*descriptorpb.EnumValueDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.EnumValueDescriptorProto")), $.interfaceValue(null, "*descriptorpb.ServiceDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.ServiceDescriptorProto")), $.interfaceValue(null, "*descriptorpb.MethodDescriptorProto", /* @__PURE__ */ $.pointerType("descriptorpb.MethodDescriptorProto")), $.interfaceValue(null, "*descriptorpb.FileOptions", /* @__PURE__ */ $.pointerType("descriptorpb.FileOptions")), $.interfaceValue(null, "*descriptorpb.MessageOptions", /* @__PURE__ */ $.pointerType("descriptorpb.MessageOptions")), $.interfaceValue(null, "*descriptorpb.FieldOptions", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions")), $.interfaceValue(null, "*descriptorpb.OneofOptions", /* @__PURE__ */ $.pointerType("descriptorpb.OneofOptions")), $.interfaceValue(null, "*descriptorpb.EnumOptions", /* @__PURE__ */ $.pointerType("descriptorpb.EnumOptions")), $.interfaceValue(null, "*descriptorpb.EnumValueOptions", /* @__PURE__ */ $.pointerType("descriptorpb.EnumValueOptions")), $.interfaceValue(null, "*descriptorpb.ServiceOptions", /* @__PURE__ */ $.pointerType("descriptorpb.ServiceOptions")), $.interfaceValue(null, "*descriptorpb.MethodOptions", /* @__PURE__ */ $.pointerType("descriptorpb.MethodOptions")), $.interfaceValue(null, "*descriptorpb.UninterpretedOption", /* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")), $.interfaceValue(null, "*descriptorpb.FeatureSet", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet")), $.interfaceValue(null, "*descriptorpb.FeatureSetDefaults", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSetDefaults")), $.interfaceValue(null, "*descriptorpb.SourceCodeInfo", /* @__PURE__ */ $.pointerType("descriptorpb.SourceCodeInfo")), $.interfaceValue(null, "*descriptorpb.GeneratedCodeInfo", /* @__PURE__ */ $.pointerType("descriptorpb.GeneratedCodeInfo")), $.interfaceValue(null, "*descriptorpb.DescriptorProto_ExtensionRange", /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto_ExtensionRange")), $.interfaceValue(null, "*descriptorpb.DescriptorProto_ReservedRange", /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto_ReservedRange")), $.interfaceValue(null, "*descriptorpb.ExtensionRangeOptions_Declaration", /* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions_Declaration")), $.interfaceValue(null, "*descriptorpb.EnumDescriptorProto_EnumReservedRange", /* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto_EnumReservedRange")), $.interfaceValue(null, "*descriptorpb.FieldOptions_EditionDefault", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_EditionDefault")), $.interfaceValue(null, "*descriptorpb.FieldOptions_FeatureSupport", /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_FeatureSupport")), $.interfaceValue(null, "*descriptorpb.UninterpretedOption_NamePart", /* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption_NamePart")), $.interfaceValue(null, "*descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault", /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault")), $.interfaceValue(null, "*descriptorpb.SourceCodeInfo_Location", /* @__PURE__ */ $.pointerType("descriptorpb.SourceCodeInfo_Location")), $.interfaceValue(null, "*descriptorpb.GeneratedCodeInfo_Annotation", /* @__PURE__ */ $.pointerType("descriptorpb.GeneratedCodeInfo_Annotation"))])

export function __goscript_set_file_google_protobuf_descriptor_proto_goTypes(__goscriptValue: $.Slice<any>): void {
	file_google_protobuf_descriptor_proto_goTypes = __goscriptValue
}

export let file_google_protobuf_descriptor_proto_depIdxs: $.Slice<number> = $.arrayToSlice<number>([18, 19, 23, 25, 21, 27, 38, 0, 21, 21, 19, 23, 40, 22, 28, 41, 35, 42, 36, 1, 3, 2, 29, 30, 24, 31, 43, 32, 26, 33, 34, 4, 36, 35, 36, 35, 5, 6, 7, 8, 44, 36, 45, 35, 36, 35, 36, 35, 36, 45, 35, 36, 35, 9, 36, 35, 46, 10, 11, 12, 13, 14, 15, 47, 0, 0, 48, 49, 20, 0, 0, 0, 0, 0, 36, 36, 16, 77, 77, 77, 77, 0])

export function __goscript_set_file_google_protobuf_descriptor_proto_depIdxs(__goscriptValue: $.Slice<number>): void {
	file_google_protobuf_descriptor_proto_depIdxs = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await file_google_protobuf_descriptor_proto_init()
}

export async function file_google_protobuf_descriptor_proto_init(): globalThis.Promise<void> {
	if (File_google_protobuf_descriptor_proto != null) {
		return
	}
	if (!protoimpl.UnsafeEnabled) {
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 0).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: FileDescriptorSet | $.VarRef<FileDescriptorSet> | null = ((v as any)?.__goType === "*descriptorpb.FileDescriptorSet" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as FileDescriptorSet | $.VarRef<FileDescriptorSet> | null) : $.mustTypeAssert<FileDescriptorSet | $.VarRef<FileDescriptorSet> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorSet")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FileDescriptorSet>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FileDescriptorSet>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FileDescriptorSet>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 1).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: FileDescriptorProto | $.VarRef<FileDescriptorProto> | null = ((v as any)?.__goType === "*descriptorpb.FileDescriptorProto" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as FileDescriptorProto | $.VarRef<FileDescriptorProto> | null) : $.mustTypeAssert<FileDescriptorProto | $.VarRef<FileDescriptorProto> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.FileDescriptorProto")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FileDescriptorProto>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FileDescriptorProto>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FileDescriptorProto>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 2).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: DescriptorProto | $.VarRef<DescriptorProto> | null = ((v as any)?.__goType === "*descriptorpb.DescriptorProto" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as DescriptorProto | $.VarRef<DescriptorProto> | null) : $.mustTypeAssert<DescriptorProto | $.VarRef<DescriptorProto> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<DescriptorProto>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<DescriptorProto>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<DescriptorProto>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 3).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: ExtensionRangeOptions | $.VarRef<ExtensionRangeOptions> | null = ((v as any)?.__goType === "*descriptorpb.ExtensionRangeOptions" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as ExtensionRangeOptions | $.VarRef<ExtensionRangeOptions> | null) : $.mustTypeAssert<ExtensionRangeOptions | $.VarRef<ExtensionRangeOptions> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ExtensionRangeOptions>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ExtensionRangeOptions>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ExtensionRangeOptions>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					case 3:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ExtensionRangeOptions>(v)._fields, "extensionFields"), "*map[int32]impl.ExtensionField", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField")))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 4).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null = ((v as any)?.__goType === "*descriptorpb.FieldDescriptorProto" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null) : $.mustTypeAssert<FieldDescriptorProto | $.VarRef<FieldDescriptorProto> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.FieldDescriptorProto")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FieldDescriptorProto>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FieldDescriptorProto>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FieldDescriptorProto>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 5).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: OneofDescriptorProto | $.VarRef<OneofDescriptorProto> | null = ((v as any)?.__goType === "*descriptorpb.OneofDescriptorProto" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as OneofDescriptorProto | $.VarRef<OneofDescriptorProto> | null) : $.mustTypeAssert<OneofDescriptorProto | $.VarRef<OneofDescriptorProto> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.OneofDescriptorProto")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<OneofDescriptorProto>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<OneofDescriptorProto>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<OneofDescriptorProto>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 6).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null = ((v as any)?.__goType === "*descriptorpb.EnumDescriptorProto" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null) : $.mustTypeAssert<EnumDescriptorProto | $.VarRef<EnumDescriptorProto> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<EnumDescriptorProto>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<EnumDescriptorProto>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<EnumDescriptorProto>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 7).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: EnumValueDescriptorProto | $.VarRef<EnumValueDescriptorProto> | null = ((v as any)?.__goType === "*descriptorpb.EnumValueDescriptorProto" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as EnumValueDescriptorProto | $.VarRef<EnumValueDescriptorProto> | null) : $.mustTypeAssert<EnumValueDescriptorProto | $.VarRef<EnumValueDescriptorProto> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.EnumValueDescriptorProto")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<EnumValueDescriptorProto>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<EnumValueDescriptorProto>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<EnumValueDescriptorProto>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 8).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: ServiceDescriptorProto | $.VarRef<ServiceDescriptorProto> | null = ((v as any)?.__goType === "*descriptorpb.ServiceDescriptorProto" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as ServiceDescriptorProto | $.VarRef<ServiceDescriptorProto> | null) : $.mustTypeAssert<ServiceDescriptorProto | $.VarRef<ServiceDescriptorProto> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.ServiceDescriptorProto")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ServiceDescriptorProto>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ServiceDescriptorProto>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ServiceDescriptorProto>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 9).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null = ((v as any)?.__goType === "*descriptorpb.MethodDescriptorProto" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null) : $.mustTypeAssert<MethodDescriptorProto | $.VarRef<MethodDescriptorProto> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.MethodDescriptorProto")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<MethodDescriptorProto>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<MethodDescriptorProto>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<MethodDescriptorProto>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 10).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: FileOptions | $.VarRef<FileOptions> | null = ((v as any)?.__goType === "*descriptorpb.FileOptions" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as FileOptions | $.VarRef<FileOptions> | null) : $.mustTypeAssert<FileOptions | $.VarRef<FileOptions> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.FileOptions")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FileOptions>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FileOptions>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FileOptions>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					case 3:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FileOptions>(v)._fields, "extensionFields"), "*map[int32]impl.ExtensionField", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField")))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 11).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: MessageOptions | $.VarRef<MessageOptions> | null = ((v as any)?.__goType === "*descriptorpb.MessageOptions" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as MessageOptions | $.VarRef<MessageOptions> | null) : $.mustTypeAssert<MessageOptions | $.VarRef<MessageOptions> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.MessageOptions")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<MessageOptions>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<MessageOptions>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<MessageOptions>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					case 3:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<MessageOptions>(v)._fields, "extensionFields"), "*map[int32]impl.ExtensionField", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField")))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 12).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: FieldOptions | $.VarRef<FieldOptions> | null = ((v as any)?.__goType === "*descriptorpb.FieldOptions" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as FieldOptions | $.VarRef<FieldOptions> | null) : $.mustTypeAssert<FieldOptions | $.VarRef<FieldOptions> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FieldOptions>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FieldOptions>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FieldOptions>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					case 3:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FieldOptions>(v)._fields, "extensionFields"), "*map[int32]impl.ExtensionField", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField")))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 13).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: OneofOptions | $.VarRef<OneofOptions> | null = ((v as any)?.__goType === "*descriptorpb.OneofOptions" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as OneofOptions | $.VarRef<OneofOptions> | null) : $.mustTypeAssert<OneofOptions | $.VarRef<OneofOptions> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.OneofOptions")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<OneofOptions>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<OneofOptions>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<OneofOptions>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					case 3:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<OneofOptions>(v)._fields, "extensionFields"), "*map[int32]impl.ExtensionField", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField")))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 14).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: EnumOptions | $.VarRef<EnumOptions> | null = ((v as any)?.__goType === "*descriptorpb.EnumOptions" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as EnumOptions | $.VarRef<EnumOptions> | null) : $.mustTypeAssert<EnumOptions | $.VarRef<EnumOptions> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.EnumOptions")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<EnumOptions>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<EnumOptions>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<EnumOptions>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					case 3:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<EnumOptions>(v)._fields, "extensionFields"), "*map[int32]impl.ExtensionField", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField")))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 15).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: EnumValueOptions | $.VarRef<EnumValueOptions> | null = ((v as any)?.__goType === "*descriptorpb.EnumValueOptions" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as EnumValueOptions | $.VarRef<EnumValueOptions> | null) : $.mustTypeAssert<EnumValueOptions | $.VarRef<EnumValueOptions> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.EnumValueOptions")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<EnumValueOptions>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<EnumValueOptions>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<EnumValueOptions>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					case 3:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<EnumValueOptions>(v)._fields, "extensionFields"), "*map[int32]impl.ExtensionField", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField")))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 16).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: ServiceOptions | $.VarRef<ServiceOptions> | null = ((v as any)?.__goType === "*descriptorpb.ServiceOptions" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as ServiceOptions | $.VarRef<ServiceOptions> | null) : $.mustTypeAssert<ServiceOptions | $.VarRef<ServiceOptions> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.ServiceOptions")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ServiceOptions>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ServiceOptions>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ServiceOptions>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					case 3:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ServiceOptions>(v)._fields, "extensionFields"), "*map[int32]impl.ExtensionField", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField")))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 17).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: MethodOptions | $.VarRef<MethodOptions> | null = ((v as any)?.__goType === "*descriptorpb.MethodOptions" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as MethodOptions | $.VarRef<MethodOptions> | null) : $.mustTypeAssert<MethodOptions | $.VarRef<MethodOptions> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.MethodOptions")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<MethodOptions>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<MethodOptions>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<MethodOptions>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					case 3:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<MethodOptions>(v)._fields, "extensionFields"), "*map[int32]impl.ExtensionField", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField")))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 18).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: UninterpretedOption | $.VarRef<UninterpretedOption> | null = ((v as any)?.__goType === "*descriptorpb.UninterpretedOption" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as UninterpretedOption | $.VarRef<UninterpretedOption> | null) : $.mustTypeAssert<UninterpretedOption | $.VarRef<UninterpretedOption> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<UninterpretedOption>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<UninterpretedOption>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<UninterpretedOption>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 19).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: FeatureSet | $.VarRef<FeatureSet> | null = ((v as any)?.__goType === "*descriptorpb.FeatureSet" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as FeatureSet | $.VarRef<FeatureSet> | null) : $.mustTypeAssert<FeatureSet | $.VarRef<FeatureSet> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSet")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FeatureSet>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FeatureSet>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FeatureSet>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					case 3:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FeatureSet>(v)._fields, "extensionFields"), "*map[int32]impl.ExtensionField", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField")))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 20).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: FeatureSetDefaults | $.VarRef<FeatureSetDefaults> | null = ((v as any)?.__goType === "*descriptorpb.FeatureSetDefaults" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as FeatureSetDefaults | $.VarRef<FeatureSetDefaults> | null) : $.mustTypeAssert<FeatureSetDefaults | $.VarRef<FeatureSetDefaults> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSetDefaults")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FeatureSetDefaults>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FeatureSetDefaults>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FeatureSetDefaults>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 21).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: SourceCodeInfo | $.VarRef<SourceCodeInfo> | null = ((v as any)?.__goType === "*descriptorpb.SourceCodeInfo" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as SourceCodeInfo | $.VarRef<SourceCodeInfo> | null) : $.mustTypeAssert<SourceCodeInfo | $.VarRef<SourceCodeInfo> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.SourceCodeInfo")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<SourceCodeInfo>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<SourceCodeInfo>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<SourceCodeInfo>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 22).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: GeneratedCodeInfo | $.VarRef<GeneratedCodeInfo> | null = ((v as any)?.__goType === "*descriptorpb.GeneratedCodeInfo" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as GeneratedCodeInfo | $.VarRef<GeneratedCodeInfo> | null) : $.mustTypeAssert<GeneratedCodeInfo | $.VarRef<GeneratedCodeInfo> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.GeneratedCodeInfo")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<GeneratedCodeInfo>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<GeneratedCodeInfo>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<GeneratedCodeInfo>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 23).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: DescriptorProto_ExtensionRange | $.VarRef<DescriptorProto_ExtensionRange> | null = ((v as any)?.__goType === "*descriptorpb.DescriptorProto_ExtensionRange" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as DescriptorProto_ExtensionRange | $.VarRef<DescriptorProto_ExtensionRange> | null) : $.mustTypeAssert<DescriptorProto_ExtensionRange | $.VarRef<DescriptorProto_ExtensionRange> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto_ExtensionRange")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<DescriptorProto_ExtensionRange>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<DescriptorProto_ExtensionRange>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<DescriptorProto_ExtensionRange>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 24).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: DescriptorProto_ReservedRange | $.VarRef<DescriptorProto_ReservedRange> | null = ((v as any)?.__goType === "*descriptorpb.DescriptorProto_ReservedRange" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as DescriptorProto_ReservedRange | $.VarRef<DescriptorProto_ReservedRange> | null) : $.mustTypeAssert<DescriptorProto_ReservedRange | $.VarRef<DescriptorProto_ReservedRange> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto_ReservedRange")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<DescriptorProto_ReservedRange>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<DescriptorProto_ReservedRange>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<DescriptorProto_ReservedRange>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 25).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: ExtensionRangeOptions_Declaration | $.VarRef<ExtensionRangeOptions_Declaration> | null = ((v as any)?.__goType === "*descriptorpb.ExtensionRangeOptions_Declaration" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as ExtensionRangeOptions_Declaration | $.VarRef<ExtensionRangeOptions_Declaration> | null) : $.mustTypeAssert<ExtensionRangeOptions_Declaration | $.VarRef<ExtensionRangeOptions_Declaration> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.ExtensionRangeOptions_Declaration")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ExtensionRangeOptions_Declaration>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ExtensionRangeOptions_Declaration>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<ExtensionRangeOptions_Declaration>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 26).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: EnumDescriptorProto_EnumReservedRange | $.VarRef<EnumDescriptorProto_EnumReservedRange> | null = ((v as any)?.__goType === "*descriptorpb.EnumDescriptorProto_EnumReservedRange" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as EnumDescriptorProto_EnumReservedRange | $.VarRef<EnumDescriptorProto_EnumReservedRange> | null) : $.mustTypeAssert<EnumDescriptorProto_EnumReservedRange | $.VarRef<EnumDescriptorProto_EnumReservedRange> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.EnumDescriptorProto_EnumReservedRange")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<EnumDescriptorProto_EnumReservedRange>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<EnumDescriptorProto_EnumReservedRange>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<EnumDescriptorProto_EnumReservedRange>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 27).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: FieldOptions_EditionDefault | $.VarRef<FieldOptions_EditionDefault> | null = ((v as any)?.__goType === "*descriptorpb.FieldOptions_EditionDefault" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as FieldOptions_EditionDefault | $.VarRef<FieldOptions_EditionDefault> | null) : $.mustTypeAssert<FieldOptions_EditionDefault | $.VarRef<FieldOptions_EditionDefault> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_EditionDefault")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FieldOptions_EditionDefault>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FieldOptions_EditionDefault>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FieldOptions_EditionDefault>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 28).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null = ((v as any)?.__goType === "*descriptorpb.FieldOptions_FeatureSupport" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null) : $.mustTypeAssert<FieldOptions_FeatureSupport | $.VarRef<FieldOptions_FeatureSupport> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.FieldOptions_FeatureSupport")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FieldOptions_FeatureSupport>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FieldOptions_FeatureSupport>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FieldOptions_FeatureSupport>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 29).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: UninterpretedOption_NamePart | $.VarRef<UninterpretedOption_NamePart> | null = ((v as any)?.__goType === "*descriptorpb.UninterpretedOption_NamePart" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as UninterpretedOption_NamePart | $.VarRef<UninterpretedOption_NamePart> | null) : $.mustTypeAssert<UninterpretedOption_NamePart | $.VarRef<UninterpretedOption_NamePart> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.UninterpretedOption_NamePart")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<UninterpretedOption_NamePart>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<UninterpretedOption_NamePart>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<UninterpretedOption_NamePart>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 30).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: FeatureSetDefaults_FeatureSetEditionDefault | $.VarRef<FeatureSetDefaults_FeatureSetEditionDefault> | null = ((v as any)?.__goType === "*descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as FeatureSetDefaults_FeatureSetEditionDefault | $.VarRef<FeatureSetDefaults_FeatureSetEditionDefault> | null) : $.mustTypeAssert<FeatureSetDefaults_FeatureSetEditionDefault | $.VarRef<FeatureSetDefaults_FeatureSetEditionDefault> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.FeatureSetDefaults_FeatureSetEditionDefault")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FeatureSetDefaults_FeatureSetEditionDefault>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FeatureSetDefaults_FeatureSetEditionDefault>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<FeatureSetDefaults_FeatureSetEditionDefault>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 31).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: SourceCodeInfo_Location | $.VarRef<SourceCodeInfo_Location> | null = ((v as any)?.__goType === "*descriptorpb.SourceCodeInfo_Location" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as SourceCodeInfo_Location | $.VarRef<SourceCodeInfo_Location> | null) : $.mustTypeAssert<SourceCodeInfo_Location | $.VarRef<SourceCodeInfo_Location> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.SourceCodeInfo_Location")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<SourceCodeInfo_Location>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<SourceCodeInfo_Location>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<SourceCodeInfo_Location>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_google_protobuf_descriptor_proto_msgTypes!, 32).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: GeneratedCodeInfo_Annotation | $.VarRef<GeneratedCodeInfo_Annotation> | null = ((v as any)?.__goType === "*descriptorpb.GeneratedCodeInfo_Annotation" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as GeneratedCodeInfo_Annotation | $.VarRef<GeneratedCodeInfo_Annotation> | null) : $.mustTypeAssert<GeneratedCodeInfo_Annotation | $.VarRef<GeneratedCodeInfo_Annotation> | null>(v, /* @__PURE__ */ $.pointerType("descriptorpb.GeneratedCodeInfo_Annotation")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<GeneratedCodeInfo_Annotation>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<GeneratedCodeInfo_Annotation>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<GeneratedCodeInfo_Annotation>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
	}
	class x {
		public _fields: {
		}

		constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
			this._fields = {
			}
			;(this as any)[$.structValueMarker] = __goscriptValue === true
		}

		public clone(): x {
			return new x(this, true)
		}

		public __goscriptAssign(source: x): void {
		}

		static __typeInfo = $.registerStructType(
			"descriptorpb.x",
			() => new x(),
			() => [],
			x,
			() => []
		)
	}
	let out = await $.markAsStructValue($.cloneStructValue(new protoimpl.TypeBuilder({File: (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue($.markAsStructValue(new x()), "descriptorpb.x", "descriptorpb.x"))).PkgPath(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new protoimpl.DescBuilder({GoPackagePath: __goscriptLiteralField0, RawDescriptor: file_google_protobuf_descriptor_proto_rawDesc, NumEnums: 17, NumMessages: 33, NumExtensions: 0, NumServices: 0}, true) })()), GoTypes: file_google_protobuf_descriptor_proto_goTypes, DependencyIndexes: file_google_protobuf_descriptor_proto_depIdxs, EnumInfos: file_google_protobuf_descriptor_proto_enumTypes, MessageInfos: file_google_protobuf_descriptor_proto_msgTypes}, true))).Build()
	File_google_protobuf_descriptor_proto = out.File
	file_google_protobuf_descriptor_proto_rawDesc = null
	file_google_protobuf_descriptor_proto_goTypes = null
	file_google_protobuf_descriptor_proto_depIdxs = null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (Edition_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (Edition_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (Edition_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (Edition_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Edition_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (Edition_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
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
	return __goscriptStatic3$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (ExtensionRangeOptions_VerificationState_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.ExtensionRangeOptions_VerificationState"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.ExtensionRangeOptions_VerificationState"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Type_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldDescriptorProto_Type"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldDescriptorProto_Type"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldDescriptorProto_Label_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldDescriptorProto_Label"))
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldDescriptorProto_Label"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FileOptions_OptimizeMode_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic13$value: any
function __goscriptStatic13(): any {
	return __goscriptStatic13$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.FileOptions_OptimizeMode"))
}

var __goscriptStatic14$value: any
function __goscriptStatic14(): any {
	return __goscriptStatic14$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FileOptions_OptimizeMode"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic15$value: any
function __goscriptStatic15(): any {
	return __goscriptStatic15$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (FieldOptions_CType_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldOptions_CType_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldOptions_CType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldOptions_CType_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldOptions_CType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldOptions_CType_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic16$value: any
function __goscriptStatic16(): any {
	return __goscriptStatic16$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_CType"))
}

var __goscriptStatic17$value: any
function __goscriptStatic17(): any {
	return __goscriptStatic17$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_CType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic18$value: any
function __goscriptStatic18(): any {
	return __goscriptStatic18$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (FieldOptions_JSType_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldOptions_JSType_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldOptions_JSType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldOptions_JSType_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldOptions_JSType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldOptions_JSType_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic19$value: any
function __goscriptStatic19(): any {
	return __goscriptStatic19$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_JSType"))
}

var __goscriptStatic20$value: any
function __goscriptStatic20(): any {
	return __goscriptStatic20$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_JSType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic21$value: any
function __goscriptStatic21(): any {
	return __goscriptStatic21$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldOptions_OptionRetention_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic22$value: any
function __goscriptStatic22(): any {
	return __goscriptStatic22$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_OptionRetention"))
}

var __goscriptStatic23$value: any
function __goscriptStatic23(): any {
	return __goscriptStatic23$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_OptionRetention"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic24$value: any
function __goscriptStatic24(): any {
	return __goscriptStatic24$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FieldOptions_OptionTargetType_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic25$value: any
function __goscriptStatic25(): any {
	return __goscriptStatic25$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_OptionTargetType"))
}

var __goscriptStatic26$value: any
function __goscriptStatic26(): any {
	return __goscriptStatic26$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FieldOptions_OptionTargetType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic27$value: any
function __goscriptStatic27(): any {
	return __goscriptStatic27$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (MethodOptions_IdempotencyLevel_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic28$value: any
function __goscriptStatic28(): any {
	return __goscriptStatic28$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.MethodOptions_IdempotencyLevel"))
}

var __goscriptStatic29$value: any
function __goscriptStatic29(): any {
	return __goscriptStatic29$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.MethodOptions_IdempotencyLevel"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic30$value: any
function __goscriptStatic30(): any {
	return __goscriptStatic30$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_FieldPresence_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic31$value: any
function __goscriptStatic31(): any {
	return __goscriptStatic31$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_FieldPresence"))
}

var __goscriptStatic32$value: any
function __goscriptStatic32(): any {
	return __goscriptStatic32$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_FieldPresence"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic33$value: any
function __goscriptStatic33(): any {
	return __goscriptStatic33$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_EnumType_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic34$value: any
function __goscriptStatic34(): any {
	return __goscriptStatic34$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_EnumType"))
}

var __goscriptStatic35$value: any
function __goscriptStatic35(): any {
	return __goscriptStatic35$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_EnumType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic36$value: any
function __goscriptStatic36(): any {
	return __goscriptStatic36$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_RepeatedFieldEncoding_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic37$value: any
function __goscriptStatic37(): any {
	return __goscriptStatic37$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_RepeatedFieldEncoding"))
}

var __goscriptStatic38$value: any
function __goscriptStatic38(): any {
	return __goscriptStatic38$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_RepeatedFieldEncoding"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic39$value: any
function __goscriptStatic39(): any {
	return __goscriptStatic39$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_Utf8Validation_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic40$value: any
function __goscriptStatic40(): any {
	return __goscriptStatic40$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_Utf8Validation"))
}

var __goscriptStatic41$value: any
function __goscriptStatic41(): any {
	return __goscriptStatic41$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_Utf8Validation"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic42$value: any
function __goscriptStatic42(): any {
	return __goscriptStatic42$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_MessageEncoding_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic43$value: any
function __goscriptStatic43(): any {
	return __goscriptStatic43$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_MessageEncoding"))
}

var __goscriptStatic44$value: any
function __goscriptStatic44(): any {
	return __goscriptStatic44$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_MessageEncoding"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic45$value: any
function __goscriptStatic45(): any {
	return __goscriptStatic45$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (FeatureSet_JsonFormat_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic46$value: any
function __goscriptStatic46(): any {
	return __goscriptStatic46$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_JsonFormat"))
}

var __goscriptStatic47$value: any
function __goscriptStatic47(): any {
	return __goscriptStatic47$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.FeatureSet_JsonFormat"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic48$value: any
function __goscriptStatic48(): any {
	return __goscriptStatic48$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (GeneratedCodeInfo_Annotation_Semantic_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic49$value: any
function __goscriptStatic49(): any {
	return __goscriptStatic49$value ??= (/* @__PURE__ */ $.basicType("int32", "descriptorpb.GeneratedCodeInfo_Annotation_Semantic"))
}

var __goscriptStatic50$value: any
function __goscriptStatic50(): any {
	return __goscriptStatic50$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "descriptorpb.GeneratedCodeInfo_Annotation_Semantic"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptAwait: any

await __goscriptInit0()
