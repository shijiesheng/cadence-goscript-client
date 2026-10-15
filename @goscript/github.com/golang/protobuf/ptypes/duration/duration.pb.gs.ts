// Generated file based on duration.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoimpl from "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"

import * as durationpb from "@goscript/google.golang.org/protobuf/types/known/durationpb/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as filetype from "@goscript/google.golang.org/protobuf/internal/filetype/index.js"

import * as impl from "@goscript/google.golang.org/protobuf/internal/impl/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"
import "@goscript/google.golang.org/protobuf/types/known/durationpb/index.js"
import "@goscript/reflect/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/internal/filetype/index.js"
import "@goscript/google.golang.org/protobuf/internal/impl/index.js"

$.registerTypePackagePath("github.com/golang/protobuf/ptypes/duration", ["duration.x"])

export type Duration = durationpb.Duration

export let File_github_com_golang_protobuf_ptypes_duration_duration_proto: protoreflect.FileDescriptor | null = null! as protoreflect.FileDescriptor | null

export function __goscript_set_File_github_com_golang_protobuf_ptypes_duration_duration_proto(__goscriptValue: protoreflect.FileDescriptor | null): void {
	File_github_com_golang_protobuf_ptypes_duration_duration_proto = __goscriptValue
}

export let file_github_com_golang_protobuf_ptypes_duration_duration_proto_rawDesc: $.Slice<number> = new Uint8Array([10, 57, 103, 105, 116, 104, 117, 98, 46, 99, 111, 109, 47, 103, 111, 108, 97, 110, 103, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 112, 116, 121, 112, 101, 115, 47, 100, 117, 114, 97, 116, 105, 111, 110, 47, 100, 117, 114, 97, 116, 105, 111, 110, 46, 112, 114, 111, 116, 111, 26, 30, 103, 111, 111, 103, 108, 101, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 100, 117, 114, 97, 116, 105, 111, 110, 46, 112, 114, 111, 116, 111, 66, 53, 90, 51, 103, 105, 116, 104, 117, 98, 46, 99, 111, 109, 47, 103, 111, 108, 97, 110, 103, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 112, 116, 121, 112, 101, 115, 47, 100, 117, 114, 97, 116, 105, 111, 110, 59, 100, 117, 114, 97, 116, 105, 111, 110, 80, 0, 98, 6, 112, 114, 111, 116, 111, 51]) as $.Slice<number>

export function __goscript_set_file_github_com_golang_protobuf_ptypes_duration_duration_proto_rawDesc(__goscriptValue: $.Slice<number>): void {
	file_github_com_golang_protobuf_ptypes_duration_duration_proto_rawDesc = __goscriptValue
}

export let file_github_com_golang_protobuf_ptypes_duration_duration_proto_goTypes: $.Slice<any> = $.arrayToSlice<any>([])

export function __goscript_set_file_github_com_golang_protobuf_ptypes_duration_duration_proto_goTypes(__goscriptValue: $.Slice<any>): void {
	file_github_com_golang_protobuf_ptypes_duration_duration_proto_goTypes = __goscriptValue
}

export let file_github_com_golang_protobuf_ptypes_duration_duration_proto_depIdxs: $.Slice<number> = $.arrayToSlice<number>([0, 0, 0, 0, 0])

export function __goscript_set_file_github_com_golang_protobuf_ptypes_duration_duration_proto_depIdxs(__goscriptValue: $.Slice<number>): void {
	file_github_com_golang_protobuf_ptypes_duration_duration_proto_depIdxs = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await file_github_com_golang_protobuf_ptypes_duration_duration_proto_init()
}

export async function file_github_com_golang_protobuf_ptypes_duration_duration_proto_init(): globalThis.Promise<void> {
	if (File_github_com_golang_protobuf_ptypes_duration_duration_proto != null) {
		return
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
			"duration.x",
			() => new x(),
			() => [],
			x,
			() => []
		)
	}
	let out = await $.markAsStructValue($.cloneStructValue(new filetype.Builder({File: (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue($.markAsStructValue(new x()), "duration.x", "duration.x"))).PkgPath(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new filedesc.Builder({GoPackagePath: __goscriptLiteralField0, RawDescriptor: file_github_com_golang_protobuf_ptypes_duration_duration_proto_rawDesc, NumEnums: 0, NumMessages: 0, NumExtensions: 0, NumServices: 0}, true) })()), GoTypes: file_github_com_golang_protobuf_ptypes_duration_duration_proto_goTypes, DependencyIndexes: file_github_com_golang_protobuf_ptypes_duration_duration_proto_depIdxs}, true))).Build()
	File_github_com_golang_protobuf_ptypes_duration_duration_proto = out.File
	file_github_com_golang_protobuf_ptypes_duration_duration_proto_rawDesc = null
	file_github_com_golang_protobuf_ptypes_duration_duration_proto_goTypes = null
	file_github_com_golang_protobuf_ptypes_duration_duration_proto_depIdxs = null
}

var __goscriptAwait: any

await __goscriptInit0()
