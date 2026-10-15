// Generated file based on desc_lazy.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as descopts from "@goscript/google.golang.org/protobuf/internal/descopts/index.js"

import * as genid from "@goscript/google.golang.org/protobuf/internal/genid/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import type * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as __goscript_build from "./build.gs.ts"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_desc_init from "./desc_init.gs.ts"

import * as __goscript_desc_list from "./desc_list.gs.ts"

import * as __goscript_desc_list_gen from "./desc_list_gen.gs.ts"

import * as __goscript_editions from "./editions.gs.ts"

import * as __goscript_placeholder from "./placeholder.gs.ts"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/descopts/index.js"
import "@goscript/google.golang.org/protobuf/internal/genid/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "./build.gs.ts"
import "./desc.gs.ts"
import "./desc_init.gs.ts"
import "./desc_list.gs.ts"
import "./desc_list_gen.gs.ts"
import "./editions.gs.ts"
import "./placeholder.gs.ts"

export function unmarshalEnumReservedRange(b: $.Slice<number>): protoreflect.EnumNumber[] {
	let r: protoreflect.EnumNumber[] = $.arrayValue(globalThis.Array.from({ length: 2 }, () => 0))
	while ($.sliceLen(b) > 0) {
		let [num, typ, n] = protowire.ConsumeTag(b)
		b = $.goSlice(b, n, undefined)
		switch (typ) {
			case protowire.VarintType:
			{
				let [v, m] = protowire.ConsumeVarint(b)
				b = $.goSlice(b, m, undefined)
				switch (num) {
					case genid.EnumDescriptorProto_EnumReservedRange_Start_field_number:
					{
						r[0] = $.int(v, 32)
						break
					}
					case genid.EnumDescriptorProto_EnumReservedRange_End_field_number:
					{
						r[1] = $.int(v, 32)
						break
					}
				}
				break
			}
			default:
			{
				let m: number = protowire.ConsumeFieldValue(num, typ, b)
				b = $.goSlice(b, m, undefined)
				break
			}
		}
	}
	return $.cloneArrayValue(r, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"), 2))
}

export function unmarshalMessageReservedRange(b: $.Slice<number>): protoreflect.FieldNumber[] {
	let r: protoreflect.FieldNumber[] = $.arrayValue(globalThis.Array.from({ length: 2 }, () => 0))
	while ($.sliceLen(b) > 0) {
		let [num, typ, n] = protowire.ConsumeTag(b)
		b = $.goSlice(b, n, undefined)
		switch (typ) {
			case protowire.VarintType:
			{
				let [v, m] = protowire.ConsumeVarint(b)
				b = $.goSlice(b, m, undefined)
				switch (num) {
					case genid.DescriptorProto_ReservedRange_Start_field_number:
					{
						r[0] = $.int(v, 32)
						break
					}
					case genid.DescriptorProto_ReservedRange_End_field_number:
					{
						r[1] = $.int(v, 32)
						break
					}
				}
				break
			}
			default:
			{
				let m: number = protowire.ConsumeFieldValue(num, typ, b)
				b = $.goSlice(b, m, undefined)
				break
			}
		}
	}
	return $.cloneArrayValue(r, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), 2))
}

export function unmarshalMessageExtensionRange(b: $.Slice<number>): [protoreflect.FieldNumber[], $.Slice<number>] {
	let r: protoreflect.FieldNumber[] = $.arrayValue(globalThis.Array.from({ length: 2 }, () => 0))
	let rawOptions: $.Slice<number> = null! as $.Slice<number>
	while ($.sliceLen(b) > 0) {
		let [num, typ, n] = protowire.ConsumeTag(b)
		b = $.goSlice(b, n, undefined)
		switch (typ) {
			case protowire.VarintType:
			{
				let [v, m] = protowire.ConsumeVarint(b)
				b = $.goSlice(b, m, undefined)
				switch (num) {
					case genid.DescriptorProto_ExtensionRange_Start_field_number:
					{
						r[0] = $.int(v, 32)
						break
					}
					case genid.DescriptorProto_ExtensionRange_End_field_number:
					{
						r[1] = $.int(v, 32)
						break
					}
				}
				break
			}
			case protowire.BytesType:
			{
				let __goscriptTuple0: any = protowire.ConsumeBytes(b)
				let v: $.Slice<number> = __goscriptTuple0[0]
				let m = __goscriptTuple0[1]
				b = $.goSlice(b, m, undefined)
				switch (num) {
					case genid.DescriptorProto_ExtensionRange_Options_field_number:
					{
						rawOptions = appendOptions(rawOptions, v)
						break
					}
				}
				break
			}
			default:
			{
				let m: number = protowire.ConsumeFieldValue(num, typ, b)
				b = $.goSlice(b, m, undefined)
				break
			}
		}
	}
	return [$.cloneArrayValue(r, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), 2)), rawOptions]
}

export function appendOptions(dst: $.Slice<number>, src: $.Slice<number>): $.Slice<number> {
	if (dst == null) {
		dst = new Uint8Array([]) as $.Slice<number>
	}
	return $.appendSlice(dst, src, $.byteSliceHint)
}
