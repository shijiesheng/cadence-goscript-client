// Generated file based on encode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as reflect from "@goscript/reflect/index.js"

import type * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_table_marshal from "./table_marshal.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/reflect/index.js"
import "./lib.gs.ts"
import "./table_marshal.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.Marshaler"])

export type Marshaler = {
	Marshal(): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
}

$.registerInterfaceType(
	"proto.Marshaler",
	null,
	[$.methodSignature("Marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"])]
);

export const maxVarintBytes: number = 10

export let errRepeatedHasNil: $.GoError = errors.New("proto: repeated field has nil element")

export function __goscript_set_errRepeatedHasNil(__goscriptValue: $.GoError): void {
	errRepeatedHasNil = __goscriptValue
}

export let errOneofHasNil: $.GoError = errors.New("proto: oneof field has nil value")

export function __goscript_set_errOneofHasNil(__goscriptValue: $.GoError): void {
	errOneofHasNil = __goscriptValue
}

export let ErrNil: $.GoError = errors.New("proto: Marshal called with nil")

export function __goscript_set_ErrNil(__goscriptValue: $.GoError): void {
	ErrNil = __goscriptValue
}

export let ErrTooLarge: $.GoError = errors.New("proto: message encodes to over 2 GB")

export function __goscript_set_ErrTooLarge(__goscriptValue: $.GoError): void {
	ErrTooLarge = __goscriptValue
}

export function EncodeVarint(x: bigint): $.Slice<number> {
	let buf: Uint8Array = $.arrayValue(new Uint8Array(10))
	let n: number = 0
	for (n = 0; x > 127n; n++) {
		buf[n] = $.uint(0x80 | $.uint($.uint64And(x, 127n), 8), 8)
		x = $.uint64Shr(x, 7n)
	}
	buf[n] = $.uint(x, 8)
	n++
	return $.goSlice(buf, 0, n)
}

export function SizeVarint(x: bigint): number {
	switch ((true as boolean)) {
		case x < 128n:
		{
			return 1
			break
		}
		case x < 16384n:
		{
			return 2
			break
		}
		case x < 2097152n:
		{
			return 3
			break
		}
		case x < 268435456n:
		{
			return 4
			break
		}
		case x < 34359738368n:
		{
			return 5
			break
		}
		case x < 4398046511104n:
		{
			return 6
			break
		}
		case x < 562949953421312n:
		{
			return 7
			break
		}
		case x < 72057594037927936n:
		{
			return 8
			break
		}
		case x < 9223372036854775808n:
		{
			return 9
			break
		}
	}
	return 10
}

export function isNil(v: reflect.Value): boolean {
	switch ($.markAsStructValue($.cloneStructValue(v)).Kind()) {
		case reflect.Interface:
		case reflect.Map:
		case reflect.Ptr:
		case reflect.Slice:
		{
			return $.markAsStructValue($.cloneStructValue(v)).IsNil()
			break
		}
	}
	return false
}
