// Generated file based on source_gen.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_source from "./source.gs.ts"
import "./source.gs.ts"

export async function SourcePath_appendFileDescriptorProto(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "name", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "package", (null as __goscript_source.appendFunc | null))
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "dependency", (null as __goscript_source.appendFunc | null))
			break
		}
		case 10:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "public_dependency", (null as __goscript_source.appendFunc | null))
			break
		}
		case 11:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "weak_dependency", (null as __goscript_source.appendFunc | null))
			break
		}
		case 4:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "message_type", SourcePath_appendDescriptorProto)
			break
		}
		case 5:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "enum_type", SourcePath_appendEnumDescriptorProto)
			break
		}
		case 6:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "service", SourcePath_appendServiceDescriptorProto)
			break
		}
		case 7:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "extension", SourcePath_appendFieldDescriptorProto)
			break
		}
		case 8:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "options", SourcePath_appendFileOptions)
			break
		}
		case 9:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "source_code_info", SourcePath_appendSourceCodeInfo)
			break
		}
		case 12:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "syntax", (null as __goscript_source.appendFunc | null))
			break
		}
		case 14:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "edition", (null as __goscript_source.appendFunc | null))
			break
		}
	}
	return b
}

export async function SourcePath_appendDescriptorProto(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "name", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "field", SourcePath_appendFieldDescriptorProto)
			break
		}
		case 6:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "extension", SourcePath_appendFieldDescriptorProto)
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "nested_type", SourcePath_appendDescriptorProto)
			break
		}
		case 4:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "enum_type", SourcePath_appendEnumDescriptorProto)
			break
		}
		case 5:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "extension_range", SourcePath_appendDescriptorProto_ExtensionRange)
			break
		}
		case 8:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "oneof_decl", SourcePath_appendOneofDescriptorProto)
			break
		}
		case 7:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "options", SourcePath_appendMessageOptions)
			break
		}
		case 9:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "reserved_range", SourcePath_appendDescriptorProto_ReservedRange)
			break
		}
		case 10:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "reserved_name", (null as __goscript_source.appendFunc | null))
			break
		}
	}
	return b
}

export async function SourcePath_appendEnumDescriptorProto(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "name", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "value", SourcePath_appendEnumValueDescriptorProto)
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "options", SourcePath_appendEnumOptions)
			break
		}
		case 4:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "reserved_range", SourcePath_appendEnumDescriptorProto_EnumReservedRange)
			break
		}
		case 5:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "reserved_name", (null as __goscript_source.appendFunc | null))
			break
		}
	}
	return b
}

export async function SourcePath_appendServiceDescriptorProto(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "name", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "method", SourcePath_appendMethodDescriptorProto)
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "options", SourcePath_appendServiceOptions)
			break
		}
	}
	return b
}

export async function SourcePath_appendFieldDescriptorProto(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "name", (null as __goscript_source.appendFunc | null))
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "number", (null as __goscript_source.appendFunc | null))
			break
		}
		case 4:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "label", (null as __goscript_source.appendFunc | null))
			break
		}
		case 5:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "type", (null as __goscript_source.appendFunc | null))
			break
		}
		case 6:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "type_name", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "extendee", (null as __goscript_source.appendFunc | null))
			break
		}
		case 7:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "default_value", (null as __goscript_source.appendFunc | null))
			break
		}
		case 9:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "oneof_index", (null as __goscript_source.appendFunc | null))
			break
		}
		case 10:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "json_name", (null as __goscript_source.appendFunc | null))
			break
		}
		case 8:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "options", SourcePath_appendFieldOptions)
			break
		}
		case 17:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "proto3_optional", (null as __goscript_source.appendFunc | null))
			break
		}
	}
	return b
}

export async function SourcePath_appendFileOptions(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "java_package", (null as __goscript_source.appendFunc | null))
			break
		}
		case 8:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "java_outer_classname", (null as __goscript_source.appendFunc | null))
			break
		}
		case 10:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "java_multiple_files", (null as __goscript_source.appendFunc | null))
			break
		}
		case 20:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "java_generate_equals_and_hash", (null as __goscript_source.appendFunc | null))
			break
		}
		case 27:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "java_string_check_utf8", (null as __goscript_source.appendFunc | null))
			break
		}
		case 9:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "optimize_for", (null as __goscript_source.appendFunc | null))
			break
		}
		case 11:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "go_package", (null as __goscript_source.appendFunc | null))
			break
		}
		case 16:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "cc_generic_services", (null as __goscript_source.appendFunc | null))
			break
		}
		case 17:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "java_generic_services", (null as __goscript_source.appendFunc | null))
			break
		}
		case 18:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "py_generic_services", (null as __goscript_source.appendFunc | null))
			break
		}
		case 23:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "deprecated", (null as __goscript_source.appendFunc | null))
			break
		}
		case 31:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "cc_enable_arenas", (null as __goscript_source.appendFunc | null))
			break
		}
		case 36:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "objc_class_prefix", (null as __goscript_source.appendFunc | null))
			break
		}
		case 37:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "csharp_namespace", (null as __goscript_source.appendFunc | null))
			break
		}
		case 39:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "swift_prefix", (null as __goscript_source.appendFunc | null))
			break
		}
		case 40:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "php_class_prefix", (null as __goscript_source.appendFunc | null))
			break
		}
		case 41:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "php_namespace", (null as __goscript_source.appendFunc | null))
			break
		}
		case 44:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "php_metadata_namespace", (null as __goscript_source.appendFunc | null))
			break
		}
		case 45:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "ruby_package", (null as __goscript_source.appendFunc | null))
			break
		}
		case 50:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "features", SourcePath_appendFeatureSet)
			break
		}
		case 999:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "uninterpreted_option", SourcePath_appendUninterpretedOption)
			break
		}
	}
	return b
}

export async function SourcePath_appendSourceCodeInfo(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "location", SourcePath_appendSourceCodeInfo_Location)
			break
		}
	}
	return b
}

export async function SourcePath_appendDescriptorProto_ExtensionRange(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "start", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "end", (null as __goscript_source.appendFunc | null))
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "options", SourcePath_appendExtensionRangeOptions)
			break
		}
	}
	return b
}

export async function SourcePath_appendOneofDescriptorProto(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "name", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "options", SourcePath_appendOneofOptions)
			break
		}
	}
	return b
}

export async function SourcePath_appendMessageOptions(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "message_set_wire_format", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "no_standard_descriptor_accessor", (null as __goscript_source.appendFunc | null))
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "deprecated", (null as __goscript_source.appendFunc | null))
			break
		}
		case 7:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "map_entry", (null as __goscript_source.appendFunc | null))
			break
		}
		case 11:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "deprecated_legacy_json_field_conflicts", (null as __goscript_source.appendFunc | null))
			break
		}
		case 12:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "features", SourcePath_appendFeatureSet)
			break
		}
		case 999:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "uninterpreted_option", SourcePath_appendUninterpretedOption)
			break
		}
	}
	return b
}

export async function SourcePath_appendDescriptorProto_ReservedRange(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "start", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "end", (null as __goscript_source.appendFunc | null))
			break
		}
	}
	return b
}

export async function SourcePath_appendEnumValueDescriptorProto(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "name", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "number", (null as __goscript_source.appendFunc | null))
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "options", SourcePath_appendEnumValueOptions)
			break
		}
	}
	return b
}

export async function SourcePath_appendEnumOptions(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 2:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "allow_alias", (null as __goscript_source.appendFunc | null))
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "deprecated", (null as __goscript_source.appendFunc | null))
			break
		}
		case 6:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "deprecated_legacy_json_field_conflicts", (null as __goscript_source.appendFunc | null))
			break
		}
		case 7:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "features", SourcePath_appendFeatureSet)
			break
		}
		case 999:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "uninterpreted_option", SourcePath_appendUninterpretedOption)
			break
		}
	}
	return b
}

export async function SourcePath_appendEnumDescriptorProto_EnumReservedRange(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "start", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "end", (null as __goscript_source.appendFunc | null))
			break
		}
	}
	return b
}

export async function SourcePath_appendMethodDescriptorProto(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "name", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "input_type", (null as __goscript_source.appendFunc | null))
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "output_type", (null as __goscript_source.appendFunc | null))
			break
		}
		case 4:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "options", SourcePath_appendMethodOptions)
			break
		}
		case 5:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "client_streaming", (null as __goscript_source.appendFunc | null))
			break
		}
		case 6:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "server_streaming", (null as __goscript_source.appendFunc | null))
			break
		}
	}
	return b
}

export async function SourcePath_appendServiceOptions(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 34:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "features", SourcePath_appendFeatureSet)
			break
		}
		case 33:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "deprecated", (null as __goscript_source.appendFunc | null))
			break
		}
		case 999:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "uninterpreted_option", SourcePath_appendUninterpretedOption)
			break
		}
	}
	return b
}

export async function SourcePath_appendFieldOptions(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "ctype", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "packed", (null as __goscript_source.appendFunc | null))
			break
		}
		case 6:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "jstype", (null as __goscript_source.appendFunc | null))
			break
		}
		case 5:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "lazy", (null as __goscript_source.appendFunc | null))
			break
		}
		case 15:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "unverified_lazy", (null as __goscript_source.appendFunc | null))
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "deprecated", (null as __goscript_source.appendFunc | null))
			break
		}
		case 10:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "weak", (null as __goscript_source.appendFunc | null))
			break
		}
		case 16:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "debug_redact", (null as __goscript_source.appendFunc | null))
			break
		}
		case 17:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "retention", (null as __goscript_source.appendFunc | null))
			break
		}
		case 19:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "targets", (null as __goscript_source.appendFunc | null))
			break
		}
		case 20:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "edition_defaults", SourcePath_appendFieldOptions_EditionDefault)
			break
		}
		case 21:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "features", SourcePath_appendFeatureSet)
			break
		}
		case 22:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "feature_support", SourcePath_appendFieldOptions_FeatureSupport)
			break
		}
		case 999:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "uninterpreted_option", SourcePath_appendUninterpretedOption)
			break
		}
	}
	return b
}

export async function SourcePath_appendFeatureSet(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "field_presence", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "enum_type", (null as __goscript_source.appendFunc | null))
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "repeated_field_encoding", (null as __goscript_source.appendFunc | null))
			break
		}
		case 4:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "utf8_validation", (null as __goscript_source.appendFunc | null))
			break
		}
		case 5:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "message_encoding", (null as __goscript_source.appendFunc | null))
			break
		}
		case 6:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "json_format", (null as __goscript_source.appendFunc | null))
			break
		}
	}
	return b
}

export async function SourcePath_appendUninterpretedOption(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 2:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "name", SourcePath_appendUninterpretedOption_NamePart)
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "identifier_value", (null as __goscript_source.appendFunc | null))
			break
		}
		case 4:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "positive_int_value", (null as __goscript_source.appendFunc | null))
			break
		}
		case 5:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "negative_int_value", (null as __goscript_source.appendFunc | null))
			break
		}
		case 6:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "double_value", (null as __goscript_source.appendFunc | null))
			break
		}
		case 7:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "string_value", (null as __goscript_source.appendFunc | null))
			break
		}
		case 8:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "aggregate_value", (null as __goscript_source.appendFunc | null))
			break
		}
	}
	return b
}

export async function SourcePath_appendSourceCodeInfo_Location(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "path", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "span", (null as __goscript_source.appendFunc | null))
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "leading_comments", (null as __goscript_source.appendFunc | null))
			break
		}
		case 4:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "trailing_comments", (null as __goscript_source.appendFunc | null))
			break
		}
		case 6:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "leading_detached_comments", (null as __goscript_source.appendFunc | null))
			break
		}
	}
	return b
}

export async function SourcePath_appendExtensionRangeOptions(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 999:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "uninterpreted_option", SourcePath_appendUninterpretedOption)
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "declaration", SourcePath_appendExtensionRangeOptions_Declaration)
			break
		}
		case 50:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "features", SourcePath_appendFeatureSet)
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "verification", (null as __goscript_source.appendFunc | null))
			break
		}
	}
	return b
}

export async function SourcePath_appendOneofOptions(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "features", SourcePath_appendFeatureSet)
			break
		}
		case 999:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "uninterpreted_option", SourcePath_appendUninterpretedOption)
			break
		}
	}
	return b
}

export async function SourcePath_appendEnumValueOptions(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "deprecated", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "features", SourcePath_appendFeatureSet)
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "debug_redact", (null as __goscript_source.appendFunc | null))
			break
		}
		case 4:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "feature_support", SourcePath_appendFieldOptions_FeatureSupport)
			break
		}
		case 999:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "uninterpreted_option", SourcePath_appendUninterpretedOption)
			break
		}
	}
	return b
}

export async function SourcePath_appendMethodOptions(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 33:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "deprecated", (null as __goscript_source.appendFunc | null))
			break
		}
		case 34:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "idempotency_level", (null as __goscript_source.appendFunc | null))
			break
		}
		case 35:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "features", SourcePath_appendFeatureSet)
			break
		}
		case 999:
		{
			b = await __goscript_source.SourcePath_appendRepeatedField(p, b, "uninterpreted_option", SourcePath_appendUninterpretedOption)
			break
		}
	}
	return b
}

export async function SourcePath_appendFieldOptions_EditionDefault(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 3:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "edition", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "value", (null as __goscript_source.appendFunc | null))
			break
		}
	}
	return b
}

export async function SourcePath_appendFieldOptions_FeatureSupport(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "edition_introduced", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "edition_deprecated", (null as __goscript_source.appendFunc | null))
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "deprecation_warning", (null as __goscript_source.appendFunc | null))
			break
		}
		case 4:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "edition_removed", (null as __goscript_source.appendFunc | null))
			break
		}
	}
	return b
}

export async function SourcePath_appendUninterpretedOption_NamePart(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "name_part", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "is_extension", (null as __goscript_source.appendFunc | null))
			break
		}
	}
	return b
}

export async function SourcePath_appendExtensionRangeOptions_Declaration(p: $.VarRef<__goscript_source.SourcePath> | null, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(($.pointerValue<__goscript_source.SourcePath>(p) as __goscript_source.SourcePath)) == 0) {
		return b
	}
	switch ($.arrayIndex(($.pointerValue<__goscript_source.SourcePath>(p))!, 0)) {
		case 1:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "number", (null as __goscript_source.appendFunc | null))
			break
		}
		case 2:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "full_name", (null as __goscript_source.appendFunc | null))
			break
		}
		case 3:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "type", (null as __goscript_source.appendFunc | null))
			break
		}
		case 5:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "reserved", (null as __goscript_source.appendFunc | null))
			break
		}
		case 6:
		{
			b = await __goscript_source.SourcePath_appendSingularField(p, b, "repeated", (null as __goscript_source.appendFunc | null))
			break
		}
	}
	return b
}
