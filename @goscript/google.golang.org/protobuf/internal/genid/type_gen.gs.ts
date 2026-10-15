// Generated file based on type_gen.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import type * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

export const File_google_protobuf_type_proto: string = "google/protobuf/type.proto"

export const Syntax_enum_fullname: string = "google.protobuf.Syntax"

export const Syntax_enum_name: string = "Syntax"

export const Syntax_SYNTAX_PROTO2_enum_value: number = 0

export const Syntax_SYNTAX_PROTO3_enum_value: number = 1

export const Syntax_SYNTAX_EDITIONS_enum_value: number = 2

export const Type_message_name: protoreflect.Name = "Type"

export const Type_message_fullname: protoreflect.FullName = "google.protobuf.Type"

export const Type_Name_field_name: protoreflect.Name = "name"

export const Type_Fields_field_name: protoreflect.Name = "fields"

export const Type_Oneofs_field_name: protoreflect.Name = "oneofs"

export const Type_Options_field_name: protoreflect.Name = "options"

export const Type_SourceContext_field_name: protoreflect.Name = "source_context"

export const Type_Syntax_field_name: protoreflect.Name = "syntax"

export const Type_Edition_field_name: protoreflect.Name = "edition"

export const Type_Name_field_fullname: protoreflect.FullName = "google.protobuf.Type.name"

export const Type_Fields_field_fullname: protoreflect.FullName = "google.protobuf.Type.fields"

export const Type_Oneofs_field_fullname: protoreflect.FullName = "google.protobuf.Type.oneofs"

export const Type_Options_field_fullname: protoreflect.FullName = "google.protobuf.Type.options"

export const Type_SourceContext_field_fullname: protoreflect.FullName = "google.protobuf.Type.source_context"

export const Type_Syntax_field_fullname: protoreflect.FullName = "google.protobuf.Type.syntax"

export const Type_Edition_field_fullname: protoreflect.FullName = "google.protobuf.Type.edition"

export const Type_Name_field_number: protoreflect.FieldNumber = 1

export const Type_Fields_field_number: protoreflect.FieldNumber = 2

export const Type_Oneofs_field_number: protoreflect.FieldNumber = 3

export const Type_Options_field_number: protoreflect.FieldNumber = 4

export const Type_SourceContext_field_number: protoreflect.FieldNumber = 5

export const Type_Syntax_field_number: protoreflect.FieldNumber = 6

export const Type_Edition_field_number: protoreflect.FieldNumber = 7

export const Field_message_name: protoreflect.Name = "Field"

export const Field_message_fullname: protoreflect.FullName = "google.protobuf.Field"

export const Field_Kind_field_name: protoreflect.Name = "kind"

export const Field_Cardinality_field_name: protoreflect.Name = "cardinality"

export const Field_Number_field_name: protoreflect.Name = "number"

export const Field_Name_field_name: protoreflect.Name = "name"

export const Field_TypeUrl_field_name: protoreflect.Name = "type_url"

export const Field_OneofIndex_field_name: protoreflect.Name = "oneof_index"

export const Field_Packed_field_name: protoreflect.Name = "packed"

export const Field_Options_field_name: protoreflect.Name = "options"

export const Field_JsonName_field_name: protoreflect.Name = "json_name"

export const Field_DefaultValue_field_name: protoreflect.Name = "default_value"

export const Field_Kind_field_fullname: protoreflect.FullName = "google.protobuf.Field.kind"

export const Field_Cardinality_field_fullname: protoreflect.FullName = "google.protobuf.Field.cardinality"

export const Field_Number_field_fullname: protoreflect.FullName = "google.protobuf.Field.number"

export const Field_Name_field_fullname: protoreflect.FullName = "google.protobuf.Field.name"

export const Field_TypeUrl_field_fullname: protoreflect.FullName = "google.protobuf.Field.type_url"

export const Field_OneofIndex_field_fullname: protoreflect.FullName = "google.protobuf.Field.oneof_index"

export const Field_Packed_field_fullname: protoreflect.FullName = "google.protobuf.Field.packed"

export const Field_Options_field_fullname: protoreflect.FullName = "google.protobuf.Field.options"

export const Field_JsonName_field_fullname: protoreflect.FullName = "google.protobuf.Field.json_name"

export const Field_DefaultValue_field_fullname: protoreflect.FullName = "google.protobuf.Field.default_value"

export const Field_Kind_field_number: protoreflect.FieldNumber = 1

export const Field_Cardinality_field_number: protoreflect.FieldNumber = 2

export const Field_Number_field_number: protoreflect.FieldNumber = 3

export const Field_Name_field_number: protoreflect.FieldNumber = 4

export const Field_TypeUrl_field_number: protoreflect.FieldNumber = 6

export const Field_OneofIndex_field_number: protoreflect.FieldNumber = 7

export const Field_Packed_field_number: protoreflect.FieldNumber = 8

export const Field_Options_field_number: protoreflect.FieldNumber = 9

export const Field_JsonName_field_number: protoreflect.FieldNumber = 10

export const Field_DefaultValue_field_number: protoreflect.FieldNumber = 11

export const Field_Kind_enum_fullname: string = "google.protobuf.Field.Kind"

export const Field_Kind_enum_name: string = "Kind"

export const Field_TYPE_UNKNOWN_enum_value: number = 0

export const Field_TYPE_DOUBLE_enum_value: number = 1

export const Field_TYPE_FLOAT_enum_value: number = 2

export const Field_TYPE_INT64_enum_value: number = 3

export const Field_TYPE_UINT64_enum_value: number = 4

export const Field_TYPE_INT32_enum_value: number = 5

export const Field_TYPE_FIXED64_enum_value: number = 6

export const Field_TYPE_FIXED32_enum_value: number = 7

export const Field_TYPE_BOOL_enum_value: number = 8

export const Field_TYPE_STRING_enum_value: number = 9

export const Field_TYPE_GROUP_enum_value: number = 10

export const Field_TYPE_MESSAGE_enum_value: number = 11

export const Field_TYPE_BYTES_enum_value: number = 12

export const Field_TYPE_UINT32_enum_value: number = 13

export const Field_TYPE_ENUM_enum_value: number = 14

export const Field_TYPE_SFIXED32_enum_value: number = 15

export const Field_TYPE_SFIXED64_enum_value: number = 16

export const Field_TYPE_SINT32_enum_value: number = 17

export const Field_TYPE_SINT64_enum_value: number = 18

export const Field_Cardinality_enum_fullname: string = "google.protobuf.Field.Cardinality"

export const Field_Cardinality_enum_name: string = "Cardinality"

export const Field_CARDINALITY_UNKNOWN_enum_value: number = 0

export const Field_CARDINALITY_OPTIONAL_enum_value: number = 1

export const Field_CARDINALITY_REQUIRED_enum_value: number = 2

export const Field_CARDINALITY_REPEATED_enum_value: number = 3

export const Enum_message_name: protoreflect.Name = "Enum"

export const Enum_message_fullname: protoreflect.FullName = "google.protobuf.Enum"

export const Enum_Name_field_name: protoreflect.Name = "name"

export const Enum_Enumvalue_field_name: protoreflect.Name = "enumvalue"

export const Enum_Options_field_name: protoreflect.Name = "options"

export const Enum_SourceContext_field_name: protoreflect.Name = "source_context"

export const Enum_Syntax_field_name: protoreflect.Name = "syntax"

export const Enum_Edition_field_name: protoreflect.Name = "edition"

export const Enum_Name_field_fullname: protoreflect.FullName = "google.protobuf.Enum.name"

export const Enum_Enumvalue_field_fullname: protoreflect.FullName = "google.protobuf.Enum.enumvalue"

export const Enum_Options_field_fullname: protoreflect.FullName = "google.protobuf.Enum.options"

export const Enum_SourceContext_field_fullname: protoreflect.FullName = "google.protobuf.Enum.source_context"

export const Enum_Syntax_field_fullname: protoreflect.FullName = "google.protobuf.Enum.syntax"

export const Enum_Edition_field_fullname: protoreflect.FullName = "google.protobuf.Enum.edition"

export const Enum_Name_field_number: protoreflect.FieldNumber = 1

export const Enum_Enumvalue_field_number: protoreflect.FieldNumber = 2

export const Enum_Options_field_number: protoreflect.FieldNumber = 3

export const Enum_SourceContext_field_number: protoreflect.FieldNumber = 4

export const Enum_Syntax_field_number: protoreflect.FieldNumber = 5

export const Enum_Edition_field_number: protoreflect.FieldNumber = 6

export const EnumValue_message_name: protoreflect.Name = "EnumValue"

export const EnumValue_message_fullname: protoreflect.FullName = "google.protobuf.EnumValue"

export const EnumValue_Name_field_name: protoreflect.Name = "name"

export const EnumValue_Number_field_name: protoreflect.Name = "number"

export const EnumValue_Options_field_name: protoreflect.Name = "options"

export const EnumValue_Name_field_fullname: protoreflect.FullName = "google.protobuf.EnumValue.name"

export const EnumValue_Number_field_fullname: protoreflect.FullName = "google.protobuf.EnumValue.number"

export const EnumValue_Options_field_fullname: protoreflect.FullName = "google.protobuf.EnumValue.options"

export const EnumValue_Name_field_number: protoreflect.FieldNumber = 1

export const EnumValue_Number_field_number: protoreflect.FieldNumber = 2

export const EnumValue_Options_field_number: protoreflect.FieldNumber = 3

export const Option_message_name: protoreflect.Name = "Option"

export const Option_message_fullname: protoreflect.FullName = "google.protobuf.Option"

export const Option_Name_field_name: protoreflect.Name = "name"

export const Option_Value_field_name: protoreflect.Name = "value"

export const Option_Name_field_fullname: protoreflect.FullName = "google.protobuf.Option.name"

export const Option_Value_field_fullname: protoreflect.FullName = "google.protobuf.Option.value"

export const Option_Name_field_number: protoreflect.FieldNumber = 1

export const Option_Value_field_number: protoreflect.FieldNumber = 2
