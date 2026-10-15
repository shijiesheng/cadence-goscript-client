// Generated file based on decode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_discard from "./discard.gs.ts"

import type * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_extensions from "./extensions.gs.ts"

import type * as __goscript_extensions_gogo from "./extensions_gogo.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import type * as __goscript_pointer_reflect_gogo from "./pointer_reflect_gogo.gs.ts"

import * as __goscript_table_marshal from "./table_marshal.gs.ts"

import * as __goscript_table_merge from "./table_merge.gs.ts"

import * as __goscript_table_unmarshal from "./table_unmarshal.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "./discard.gs.ts"
import "./extensions.gs.ts"
import "./lib.gs.ts"
import "./pointer_reflect.gs.ts"
import "./table_marshal.gs.ts"
import "./table_merge.gs.ts"
import "./table_unmarshal.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.Unmarshaler", "proto.newUnmarshaler"])

export type Unmarshaler = {
	Unmarshal(_p0: $.Slice<number>): $.GoError
}

$.registerInterfaceType(
	"proto.Unmarshaler",
	null,
	[$.methodSignature("Unmarshal", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["error"])]
);

export type newUnmarshaler = {
	XXX_Unmarshal(_p0: $.Slice<number>): $.GoError
}

$.registerInterfaceType(
	"proto.newUnmarshaler",
	null,
	[$.methodSignature("XXX_Unmarshal", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["error"])]
);

export let errOverflow: $.GoError = errors.New("proto: integer overflow")

export function __goscript_set_errOverflow(__goscriptValue: $.GoError): void {
	errOverflow = __goscriptValue
}

export let ErrInternalBadWireType: $.GoError = errors.New("proto: internal error: bad wiretype for oneof")

export function __goscript_set_ErrInternalBadWireType(__goscriptValue: $.GoError): void {
	ErrInternalBadWireType = __goscriptValue
}

export function DecodeVarint(buf: $.Slice<number>): [bigint, number] {
	let x: bigint = 0n
	let n: number = 0
	for (let __goscriptSliceWindow0 = $.sliceRange(buf), shift = 0; shift < 64; shift = $.uint($.uint64Add(shift, 7), 64)) {
		if (n >= __goscriptSliceWindow0.length) {
			return [0n, 0]
		}
		let b = $.uint64(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, n)] as number))
		n++
		x = $.uint64Or(x, $.uint64Shl(($.uint64And(b, 127n)), shift))
		if (($.uint64And(b, 128n)) == 0n) {
			return [x, n]
		}
	}

	// The number is too large to represent in a 64-bit value.
	return [0n, 0]
}

export async function Unmarshal(buf: $.Slice<number>, pb: __goscript_lib.Message | null): globalThis.Promise<$.GoError> {
	void (__goscriptAwait = (pb !== null && (pb as any).__isVarRef !== true && (pb as any).__goValue === undefined ? (pb as Exclude<__goscript_lib.Message, null>) : $.pointerValue<Exclude<__goscript_lib.Message, null>>(pb)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	{
		let [u, ok] = $.typeAssertTuple<newUnmarshaler | null>(pb, "proto.newUnmarshaler")
		if (ok) {
			return (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? (u as Exclude<newUnmarshaler, null>) : $.pointerValue<Exclude<newUnmarshaler, null>>(u)).XXX_Unmarshal(buf)
		}
	}
	{
		let [u, ok] = $.typeAssertTuple<Unmarshaler | null>(pb, "proto.Unmarshaler")
		if (ok) {
			return (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? (u as Exclude<Unmarshaler, null>) : $.pointerValue<Exclude<Unmarshaler, null>>(u)).Unmarshal(buf)
		}
	}
	return __goscript_lib.Buffer.prototype.Unmarshal.call(__goscript_lib.NewBuffer(buf), pb)
}

export async function UnmarshalMerge(buf: $.Slice<number>, pb: __goscript_lib.Message | null): globalThis.Promise<$.GoError> {
	{
		let [u, ok] = $.typeAssertTuple<newUnmarshaler | null>(pb, "proto.newUnmarshaler")
		if (ok) {
			return (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? (u as Exclude<newUnmarshaler, null>) : $.pointerValue<Exclude<newUnmarshaler, null>>(u)).XXX_Unmarshal(buf)
		}
	}
	{
		let [u, ok] = $.typeAssertTuple<Unmarshaler | null>(pb, "proto.Unmarshaler")
		if (ok) {
			// NOTE: The history of proto have unfortunately been inconsistent
			// whether Unmarshaler should or should not implicitly clear itself.
			// Some implementations do, most do not.
			// Thus, calling this here may or may not do what people want.
			//
			// See https://github.com/golang/protobuf/issues/424
			return (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? (u as Exclude<Unmarshaler, null>) : $.pointerValue<Exclude<Unmarshaler, null>>(u)).Unmarshal(buf)
		}
	}
	return __goscript_lib.Buffer.prototype.Unmarshal.call(__goscript_lib.NewBuffer(buf), pb)
}

var __goscriptAwait: any
