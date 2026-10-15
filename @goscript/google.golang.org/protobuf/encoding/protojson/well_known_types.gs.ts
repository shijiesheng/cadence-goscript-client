// Generated file based on well_known_types.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as json from "@goscript/google.golang.org/protobuf/internal/encoding/json/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as genid from "@goscript/google.golang.org/protobuf/internal/genid/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import type * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/json/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/internal/genid/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "./decode.gs.ts"
import "./encode.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/encoding/protojson", ["protojson.marshalFunc", "protojson.unmarshalFunc"])

export type marshalFunc = ((_p0: __goscript_encode.encoder, _p1: protoreflect.Message | null) => $.GoError | globalThis.Promise<$.GoError>) | null

export type unmarshalFunc = ((_p0: __goscript_decode.decoder, _p1: protoreflect.Message | null) => $.GoError | globalThis.Promise<$.GoError>) | null

export const secondsInNanos: number = 999999999

export const maxSecondsInDuration: number = 315576000000

export const maxTimestampSeconds: number = 253402300799

export const minTimestampSeconds: number = -62135596800

export function wellKnownTypeMarshaler(name: protoreflect.FullName): marshalFunc | null {
	if ($.stringEqual(protoreflect.FullName_Parent(name), genid.GoogleProtobuf_package)) {
		switch (protoreflect.FullName_Name(name)) {
			case genid.Any_message_name:
			{
				return $.functionValue(async (e: __goscript_encode.encoder, m: protoreflect.Message | null): globalThis.Promise<$.GoError> => await $.pointerValue<__goscript_encode.encoder>(e).marshalAny(m), ({ kind: $.TypeKind.Function, params: ["protojson.encoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
			case genid.Timestamp_message_name:
			{
				return $.functionValue(async (e: __goscript_encode.encoder, m: protoreflect.Message | null): globalThis.Promise<$.GoError> => await $.pointerValue<__goscript_encode.encoder>(e).marshalTimestamp(m), ({ kind: $.TypeKind.Function, params: ["protojson.encoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
			case genid.Duration_message_name:
			{
				return $.functionValue(async (e: __goscript_encode.encoder, m: protoreflect.Message | null): globalThis.Promise<$.GoError> => await $.pointerValue<__goscript_encode.encoder>(e).marshalDuration(m), ({ kind: $.TypeKind.Function, params: ["protojson.encoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
			case genid.BoolValue_message_name:
			case genid.Int32Value_message_name:
			case genid.Int64Value_message_name:
			case genid.UInt32Value_message_name:
			case genid.UInt64Value_message_name:
			case genid.FloatValue_message_name:
			case genid.DoubleValue_message_name:
			case genid.StringValue_message_name:
			case genid.BytesValue_message_name:
			{
				return $.functionValue(async (e: __goscript_encode.encoder, m: protoreflect.Message | null): globalThis.Promise<$.GoError> => await $.pointerValue<__goscript_encode.encoder>(e).marshalWrapperType(m), ({ kind: $.TypeKind.Function, params: ["protojson.encoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
			case genid.Struct_message_name:
			{
				return $.functionValue(async (e: __goscript_encode.encoder, m: protoreflect.Message | null): globalThis.Promise<$.GoError> => await $.pointerValue<__goscript_encode.encoder>(e).marshalStruct(m), ({ kind: $.TypeKind.Function, params: ["protojson.encoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
			case genid.ListValue_message_name:
			{
				return $.functionValue(async (e: __goscript_encode.encoder, m: protoreflect.Message | null): globalThis.Promise<$.GoError> => await $.pointerValue<__goscript_encode.encoder>(e).marshalListValue(m), ({ kind: $.TypeKind.Function, params: ["protojson.encoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
			case genid.Value_message_name:
			{
				return $.functionValue(async (e: __goscript_encode.encoder, m: protoreflect.Message | null): globalThis.Promise<$.GoError> => await $.pointerValue<__goscript_encode.encoder>(e).marshalKnownValue(m), ({ kind: $.TypeKind.Function, params: ["protojson.encoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
			case genid.FieldMask_message_name:
			{
				return $.functionValue(async (e: __goscript_encode.encoder, m: protoreflect.Message | null): globalThis.Promise<$.GoError> => await $.pointerValue<__goscript_encode.encoder>(e).marshalFieldMask(m), ({ kind: $.TypeKind.Function, params: ["protojson.encoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
			case genid.Empty_message_name:
			{
				return $.functionValue((e: __goscript_encode.encoder, _p1: protoreflect.Message | null): $.GoError => $.pointerValue<__goscript_encode.encoder>(e).marshalEmpty(_p1), ({ kind: $.TypeKind.Function, params: ["protojson.encoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
		}
	}
	return (null as marshalFunc | null)
}

export function wellKnownTypeUnmarshaler(name: protoreflect.FullName): unmarshalFunc | null {
	if ($.stringEqual(protoreflect.FullName_Parent(name), genid.GoogleProtobuf_package)) {
		switch (protoreflect.FullName_Name(name)) {
			case genid.Any_message_name:
			{
				return $.functionValue(async (d: __goscript_decode.decoder, m: protoreflect.Message | null): globalThis.Promise<$.GoError> => await $.pointerValue<__goscript_decode.decoder>(d).unmarshalAny(m), ({ kind: $.TypeKind.Function, params: ["protojson.decoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
			case genid.Timestamp_message_name:
			{
				return $.functionValue(async (d: __goscript_decode.decoder, m: protoreflect.Message | null): globalThis.Promise<$.GoError> => await $.pointerValue<__goscript_decode.decoder>(d).unmarshalTimestamp(m), ({ kind: $.TypeKind.Function, params: ["protojson.decoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
			case genid.Duration_message_name:
			{
				return $.functionValue(async (d: __goscript_decode.decoder, m: protoreflect.Message | null): globalThis.Promise<$.GoError> => await $.pointerValue<__goscript_decode.decoder>(d).unmarshalDuration(m), ({ kind: $.TypeKind.Function, params: ["protojson.decoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
			case genid.BoolValue_message_name:
			case genid.Int32Value_message_name:
			case genid.Int64Value_message_name:
			case genid.UInt32Value_message_name:
			case genid.UInt64Value_message_name:
			case genid.FloatValue_message_name:
			case genid.DoubleValue_message_name:
			case genid.StringValue_message_name:
			case genid.BytesValue_message_name:
			{
				return $.functionValue(async (d: __goscript_decode.decoder, m: protoreflect.Message | null): globalThis.Promise<$.GoError> => await $.pointerValue<__goscript_decode.decoder>(d).unmarshalWrapperType(m), ({ kind: $.TypeKind.Function, params: ["protojson.decoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
			case genid.Struct_message_name:
			{
				return $.functionValue(async (d: __goscript_decode.decoder, m: protoreflect.Message | null): globalThis.Promise<$.GoError> => await $.pointerValue<__goscript_decode.decoder>(d).unmarshalStruct(m), ({ kind: $.TypeKind.Function, params: ["protojson.decoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
			case genid.ListValue_message_name:
			{
				return $.functionValue(async (d: __goscript_decode.decoder, m: protoreflect.Message | null): globalThis.Promise<$.GoError> => await $.pointerValue<__goscript_decode.decoder>(d).unmarshalListValue(m), ({ kind: $.TypeKind.Function, params: ["protojson.decoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
			case genid.Value_message_name:
			{
				return $.functionValue(async (d: __goscript_decode.decoder, m: protoreflect.Message | null): globalThis.Promise<$.GoError> => await $.pointerValue<__goscript_decode.decoder>(d).unmarshalKnownValue(m), ({ kind: $.TypeKind.Function, params: ["protojson.decoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
			case genid.FieldMask_message_name:
			{
				return $.functionValue(async (d: __goscript_decode.decoder, m: protoreflect.Message | null): globalThis.Promise<$.GoError> => await $.pointerValue<__goscript_decode.decoder>(d).unmarshalFieldMask(m), ({ kind: $.TypeKind.Function, params: ["protojson.decoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
			case genid.Empty_message_name:
			{
				return $.functionValue(async (d: __goscript_decode.decoder, _p1: protoreflect.Message | null): globalThis.Promise<$.GoError> => await $.pointerValue<__goscript_decode.decoder>(d).unmarshalEmpty(_p1), ({ kind: $.TypeKind.Function, params: ["protojson.decoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo))
				break
			}
		}
	}
	return (null as unmarshalFunc | null)
}

export let errEmptyObject: $.GoError = fmt.Errorf("empty object")

export function __goscript_set_errEmptyObject(__goscriptValue: $.GoError): void {
	errEmptyObject = __goscriptValue
}

export let errMissingType: $.GoError = fmt.Errorf("missing \"@type\" field")

export function __goscript_set_errMissingType(__goscriptValue: $.GoError): void {
	errMissingType = __goscriptValue
}

export async function findTypeURL(__goscriptParam0: __goscript_decode.decoder): globalThis.Promise<[json.Token, $.GoError]> {
	let d: $.VarRef<__goscript_decode.decoder> = $.varRef(__goscriptParam0)
	let typeURL: string = ""
	let typeTok: json.Token = new json.Token(undefined, true)
	let numFields = 0
	// Skip start object.
	await $.pointerValue<json.Decoder>(d.value.Decoder).Read()

	Loop: while (true) {
		let [tok, err] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
		if (err != null) {
			return [new json.Token(undefined, true), err]
		}

		switch (tok.Kind()) {
			case json.ObjectClose:
			{
				if ($.stringEqual(typeURL, "")) {
					// Did not find @type field.
					if (numFields > 0) {
						return [new json.Token(undefined, true), errMissingType]
					}
					return [new json.Token(undefined, true), errEmptyObject]
				}
				break Loop
				break
			}
			case json.Name:
			{
				numFields++
				if (!$.stringEqual(await tok.Name(), "@type")) {
					// Skip value.
					{
						let __goscriptShadow0 = await $.markAsStructValue($.cloneStructValue(d.value)).skipJSONValue()
						if (__goscriptShadow0 != null) {
							return [new json.Token(undefined, true), __goscriptShadow0]
						}
					}
					continue
				}

				// Return error if this was previously set already.
				if (!$.stringEqual(typeURL, "")) {
					return [new json.Token(undefined, true), await $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "duplicate \"@type\" field", null)]
				}
				// Read field value.
				let [__goscriptShadow1, __goscriptShadow2] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
				if (__goscriptShadow2 != null) {
					return [new json.Token(undefined, true), __goscriptShadow2]
				}
				if (__goscriptShadow1.Kind() != 16) {
					return [new json.Token(undefined, true), await $.markAsStructValue($.cloneStructValue(d.value)).newError(__goscriptShadow1.Pos(), "@type field value is not a string: %v", $.arrayToSlice<any>([__goscriptShadow1.RawString()]))]
				}
				typeURL = await __goscriptShadow1.ParsedString()
				if ($.stringEqual(typeURL, "")) {
					return [new json.Token(undefined, true), await $.markAsStructValue($.cloneStructValue(d.value)).newError(__goscriptShadow1.Pos(), "@type field contains empty value", null)]
				}
				typeTok = $.assignStruct(typeTok, __goscriptShadow1)
				break
			}
		}
	}

	return [(typeTok).clone(), null]
}

export function parseDuration(input: string): [bigint, number, boolean] {
	let b: $.Slice<number> = $.stringToBytes(input)
	let size: number = $.sliceLen(b)
	if (size < 2) {
		return [0n, 0, false]
	}
	if ($.arrayIndex(b!, size - 1) != 115) {
		return [0n, 0, false]
	}
	b = $.goSlice(b, undefined, size - 1)

	// Read optional plus/minus symbol.
	let neg: boolean = false
	switch ($.arrayIndex(b!, 0)) {
		case 45:
		{
			neg = true
			b = $.goSlice(b, 1, undefined)
			break
		}
		case 43:
		{
			b = $.goSlice(b, 1, undefined)
			break
		}
	}
	if ($.sliceLen(b) == 0) {
		return [0n, 0, false]
	}

	// Read the integer part.
	let intp: $.Slice<number> = null! as $.Slice<number>
	switch ((true as boolean)) {
		case $.arrayIndex(b!, 0) == 48:
		{
			b = $.goSlice(b, 1, undefined)
			break
		}
		case (49 <= $.arrayIndex(b!, 0)) && ($.arrayIndex(b!, 0) <= 57):
		{
			intp = $.goSlice(b, 0, undefined)
			b = $.goSlice(b, 1, undefined)
			let n = 1
			while ((($.sliceLen(b) > 0) && (48 <= $.arrayIndex(b!, 0))) && ($.arrayIndex(b!, 0) <= 57)) {
				n++
				b = $.goSlice(b, 1, undefined)
			}
			intp = $.goSlice(intp, undefined, n)
			break
		}
		case $.arrayIndex(b!, 0) == 46:
		{
			break
		}
		default:
		{
			return [0n, 0, false]
			break
		}
	}

	let hasFrac = false
	let frac: Uint8Array = $.arrayValue(new Uint8Array(9))
	if ($.sliceLen(b) > 0) {
		if ($.arrayIndex(b!, 0) != 46) {
			return [0n, 0, false]
		}
		// Read the fractional part.
		b = $.goSlice(b, 1, undefined)
		let n = 0
		while (((($.sliceLen(b) > 0) && (n < 9)) && (48 <= $.arrayIndex(b!, 0))) && ($.arrayIndex(b!, 0) <= 57)) {
			frac[n] = $.arrayIndex(b!, 0)
			n++
			b = $.goSlice(b, 1, undefined)
		}
		// It is not valid if there are more bytes left.
		if ($.sliceLen(b) > 0) {
			return [0n, 0, false]
		}
		// Pad fractional part with 0s.
		for (let i = n; i < 9; i++) {
			frac[i] = 48
		}
		hasFrac = true
	}

	let secs: bigint = 0n
	if ($.sliceLen(intp) > 0) {
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple0: any = strconv.ParseInt($.bytesToString(intp), 10, 64)
		secs = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [0n, 0, false]
		}
	}

	let nanos: bigint = 0n
	if (hasFrac) {
		let nanob: $.Slice<number> = bytes.TrimLeft($.goSlice(frac, undefined, undefined), "0")
		if ($.sliceLen(nanob) > 0) {
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple1: any = strconv.ParseInt($.bytesToString(nanob), 10, 32)
			nanos = __goscriptTuple1[0]
			err = __goscriptTuple1[1]
			if (err != null) {
				return [0n, 0, false]
			}
		}
	}

	if (neg) {
		if (secs > 0n) {
			secs = -secs
		}
		if (nanos > 0n) {
			nanos = -nanos
		}
	}
	return [secs, $.int(nanos, 32), true]
}
