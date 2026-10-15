// Generated file based on equal.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as log from "@goscript/log/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import type * as sync from "@goscript/sync/index.js"

import * as __goscript_extensions from "./extensions.gs.ts"

import type * as __goscript_extensions_gogo from "./extensions_gogo.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_properties from "./properties.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/log/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "./extensions.gs.ts"
import "./lib.gs.ts"
import "./properties.gs.ts"

export async function Equal(a: __goscript_lib.Message | null, b: __goscript_lib.Message | null): globalThis.Promise<boolean> {
	if ((a == null) || (b == null)) {
		return $.comparableEqual(a, b)
	}
	let v1 = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((a as any))))
	let v2 = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((b as any))))
	if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(v1)).Type(), $.markAsStructValue($.cloneStructValue(v2)).Type())) {
		return false
	}
	if ($.markAsStructValue($.cloneStructValue(v1)).Kind() == 22) {
		if ($.markAsStructValue($.cloneStructValue(v1)).IsNil()) {
			return $.markAsStructValue($.cloneStructValue(v2)).IsNil()
		}
		if ($.markAsStructValue($.cloneStructValue(v2)).IsNil()) {
			return false
		}
		let __goscriptAssign0_0: reflect.Value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v1)).Elem()))
		let __goscriptAssign0_1: reflect.Value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v2)).Elem()))
		v1 = $.assignStruct(v1, __goscriptAssign0_0)
		v2 = $.assignStruct(v2, __goscriptAssign0_1)
	}
	if ($.markAsStructValue($.cloneStructValue(v1)).Kind() != 25) {
		return false
	}
	return equalStruct(v1, v2)
}

export async function equalStruct(v1: reflect.Value, v2: reflect.Value): globalThis.Promise<boolean> {
	let sprop: __goscript_properties.StructProperties | $.VarRef<__goscript_properties.StructProperties> | null = await __goscript_properties.GetProperties($.markAsStructValue($.cloneStructValue(v1)).Type())
	for (let i = 0; i < $.markAsStructValue($.cloneStructValue(v1)).NumField(); i++) {
		let f = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v1)).Type()).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
		if (strings.HasPrefix(f.Name, "XXX_")) {
			continue
		}
		let f1 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v1)).Field(i)))
		let f2 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v2)).Field(i)))
		if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(f.Type).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
			{
				let n1 = $.markAsStructValue($.cloneStructValue(f1)).IsNil()
				let n2 = $.markAsStructValue($.cloneStructValue(f2)).IsNil()
				if (n1 && n2) {
					// both unset
					continue
				} else {
					if (n1 != n2) {
						// set/unset mismatch
						return false
					}
				}
			}
			let __goscriptAssign1_0: reflect.Value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f1)).Elem()))
			let __goscriptAssign1_1: reflect.Value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f2)).Elem()))
			f1 = $.assignStruct(f1, __goscriptAssign1_0)
			f2 = $.assignStruct(f2, __goscriptAssign1_1)
		}
		if (!await equalAny(f1, f2, $.arrayIndex($.pointerValue<__goscript_properties.StructProperties>(sprop).Prop!, i))) {
			return false
		}
	}

	{
		let em1 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v1)).FieldByName("XXX_InternalExtensions")))
		if ($.markAsStructValue($.cloneStructValue(em1)).IsValid()) {
			let em2 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v2)).FieldByName("XXX_InternalExtensions")))
			if (!await equalExtensions($.markAsStructValue($.cloneStructValue(v1)).Type(), ($.mustTypeAssert<__goscript_extensions.XXX_InternalExtensions>($.markAsStructValue($.cloneStructValue(em1)).Interface(), "proto.XXX_InternalExtensions")).clone(), ($.mustTypeAssert<__goscript_extensions.XXX_InternalExtensions>($.markAsStructValue($.cloneStructValue(em2)).Interface(), "proto.XXX_InternalExtensions")).clone())) {
				return false
			}
		}
	}

	{
		let em1 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v1)).FieldByName("XXX_extensions")))
		if ($.markAsStructValue($.cloneStructValue(em1)).IsValid()) {
			let em2 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v2)).FieldByName("XXX_extensions")))
			if (!await equalExtMap($.markAsStructValue($.cloneStructValue(v1)).Type(), $.mustTypeAssert<globalThis.Map<number, __goscript_extensions.Extension> | null>($.markAsStructValue($.cloneStructValue(em1)).Interface(), /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension")), $.mustTypeAssert<globalThis.Map<number, __goscript_extensions.Extension> | null>($.markAsStructValue($.cloneStructValue(em2)).Interface(), /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension")))) {
				return false
			}
		}
	}

	let uf = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v1)).FieldByName("XXX_unrecognized")))
	if (!$.markAsStructValue($.cloneStructValue(uf)).IsValid()) {
		return true
	}

	let u1: $.Slice<number> = $.markAsStructValue($.cloneStructValue(uf)).Bytes()
	let u2: $.Slice<number> = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v2)).FieldByName("XXX_unrecognized"))).Bytes()
	return bytes.Equal(u1, u2)
}

export async function equalAny(v1: reflect.Value, v2: reflect.Value, prop: __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null): globalThis.Promise<boolean> {
	if ($.comparableEqual($.markAsStructValue($.cloneStructValue(v1)).Type(), __goscript_properties.__goscript_get_protoMessageType())) {
		let [m1, ] = $.typeAssertTuple<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(v1)).Interface(), "proto.Message")
		let [m2, ] = $.typeAssertTuple<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(v2)).Interface(), "proto.Message")
		return Equal(m1, m2)
	}
	switch ($.markAsStructValue($.cloneStructValue(v1)).Kind()) {
		case reflect.Bool:
		{
			return $.markAsStructValue($.cloneStructValue(v1)).Bool() == $.markAsStructValue($.cloneStructValue(v2)).Bool()
			break
		}
		case reflect.Float32:
		case reflect.Float64:
		{
			return $.markAsStructValue($.cloneStructValue(v1)).Float() == $.markAsStructValue($.cloneStructValue(v2)).Float()
			break
		}
		case reflect.Int32:
		case reflect.Int64:
		{
			return $.markAsStructValue($.cloneStructValue(v1)).Int() == $.markAsStructValue($.cloneStructValue(v2)).Int()
			break
		}
		case reflect.Interface:
		{
			let n1 = $.markAsStructValue($.cloneStructValue(v1)).IsNil()
			let n2 = $.markAsStructValue($.cloneStructValue(v2)).IsNil()
			if (n1 || n2) {
				return n1 == n2
			}
			let e1 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v1)).Elem()))
			let e2 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v2)).Elem()))
			if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(e1)).Type(), $.markAsStructValue($.cloneStructValue(e2)).Type())) {
				return false
			}
			return equalAny(e1, e2, null)
			break
		}
		case reflect.Map:
		{
			if ($.markAsStructValue($.cloneStructValue(v1)).Len() != $.markAsStructValue($.cloneStructValue(v2)).Len()) {
				return false
			}
			for (let __goscriptRangeTarget0 = $.markAsStructValue($.cloneStructValue(v1)).MapKeys(), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let key = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as reflect.Value)))
				let val2 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v2)).MapIndex($.markAsStructValue($.cloneStructValue(key)))))
				if (!$.markAsStructValue($.cloneStructValue(val2)).IsValid()) {
					// This key was not found in the second map.
					return false
				}
				if (!await equalAny($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v1)).MapIndex($.markAsStructValue($.cloneStructValue(key))))), val2, null)) {
					return false
				}
			}
			return true
			break
		}
		case reflect.Ptr:
		{
			if ($.markAsStructValue($.cloneStructValue(v1)).IsNil() && $.markAsStructValue($.cloneStructValue(v2)).IsNil()) {
				return true
			}
			if ($.markAsStructValue($.cloneStructValue(v1)).IsNil() != $.markAsStructValue($.cloneStructValue(v2)).IsNil()) {
				return false
			}
			return equalAny($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v1)).Elem())), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v2)).Elem())), prop)
			break
		}
		case reflect.Slice:
		{
			if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v1)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8) {
				// short circuit: []byte

				// Edge case: if this is in a proto3 message, a zero length
				// bytes field is considered the zero value.
				if ((((prop != null) && $.pointerValue<__goscript_properties.Properties>(prop).proto3) && ($.markAsStructValue($.cloneStructValue(v1)).Len() == 0)) && ($.markAsStructValue($.cloneStructValue(v2)).Len() == 0)) {
					return true
				}
				if ($.markAsStructValue($.cloneStructValue(v1)).IsNil() != $.markAsStructValue($.cloneStructValue(v2)).IsNil()) {
					return false
				}
				return bytes.Equal($.mustTypeAssert<$.Slice<number>>($.markAsStructValue($.cloneStructValue(v1)).Interface(), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), $.mustTypeAssert<$.Slice<number>>($.markAsStructValue($.cloneStructValue(v2)).Interface(), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
			}

			if ($.markAsStructValue($.cloneStructValue(v1)).Len() != $.markAsStructValue($.cloneStructValue(v2)).Len()) {
				return false
			}
			for (let i = 0; i < $.markAsStructValue($.cloneStructValue(v1)).Len(); i++) {
				if (!await equalAny($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v1)).Index(i))), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v2)).Index(i))), prop)) {
					return false
				}
			}
			return true
			break
		}
		case reflect.String:
		{
			return $.stringEqual($.mustTypeAssert<string>($.markAsStructValue($.cloneStructValue(v1)).Interface(), /* @__PURE__ */ $.basicType("string")), $.mustTypeAssert<string>($.markAsStructValue($.cloneStructValue(v2)).Interface(), /* @__PURE__ */ $.basicType("string")))
			break
		}
		case reflect.Struct:
		{
			return equalStruct(v1, v2)
			break
		}
		case reflect.Uint32:
		case reflect.Uint64:
		{
			return $.markAsStructValue($.cloneStructValue(v1)).Uint() == $.markAsStructValue($.cloneStructValue(v2)).Uint()
			break
		}
	}

	// unknown type, so not a protocol buffer
	await log.Printf("proto: don't know how to compare %v", $.arrayToSlice<any>([$.interfaceValue($.markAsStructValue($.cloneStructValue(v1)), "reflect.Value", "reflect.Value")]))
	return false
}

export async function equalExtensions(base: reflect.Type | null, __goscriptParam0: __goscript_extensions.XXX_InternalExtensions, __goscriptParam1: __goscript_extensions.XXX_InternalExtensions): globalThis.Promise<boolean> {
	let x1: $.VarRef<__goscript_extensions.XXX_InternalExtensions> = $.varRef(__goscriptParam0)
	let x2: $.VarRef<__goscript_extensions.XXX_InternalExtensions> = $.varRef(__goscriptParam1)
	let __goscriptTuple0: any = x1.value.extensionsRead()
	let em1: globalThis.Map<number, __goscript_extensions.Extension> | null = __goscriptTuple0[0]
	let __goscriptTuple1: any = x2.value.extensionsRead()
	let em2: globalThis.Map<number, __goscript_extensions.Extension> | null = __goscriptTuple1[0]
	return equalExtMap(base, em1, em2)
}

export async function equalExtMap(base: reflect.Type | null, em1: globalThis.Map<number, __goscript_extensions.Extension> | null, em2: globalThis.Map<number, __goscript_extensions.Extension> | null): globalThis.Promise<boolean> {
	if ($.len(em1) != $.len(em2)) {
		return false
	}

	for (const [extNum, e1] of em1?.entries() ?? []) {
		let [e2, ok] = $.mapGet<number, __goscript_extensions.Extension, __goscript_extensions.Extension>(em2, extNum, new __goscript_extensions.Extension(undefined, true))
		if (!ok) {
			return false
		}

		let m1 = e1.value
		let m2 = e2.value

		if ((m1 == null) && (m2 == null)) {
			// Both have only encoded form.
			if (bytes.Equal(e1.enc, e2.enc)) {
				continue
			}
		}

		if ((m1 != null) && (m2 != null)) {
			// Both are unencoded.
			if (!await equalAny($.markAsStructValue($.cloneStructValue(reflect.ValueOf(m1))), $.markAsStructValue($.cloneStructValue(reflect.ValueOf(m2))), null)) {
				return false
			}
			continue
		}

		// At least one is encoded. To do a semantically correct comparison
		// we need to unmarshal them first.
		let desc: __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null = null! as __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null
		{
			let m: globalThis.Map<number, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null> | null = $.mapGet<reflect.Type | null, globalThis.Map<number, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null> | null, globalThis.Map<number, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null> | null>(__goscript_extensions.extensionMaps, base, null)[0]
			if (m != null) {
				desc = $.mapGet<number, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null>(m, extNum, null)[0]
			}
		}
		if (desc == null) {
			// If both have only encoded form and the bytes are the same,
			// it is handled above. We get here when the bytes are different.
			// We don't know how to decode it, so just compare them as byte
			// slices.
			await log.Printf("proto: don't know how to compare extension %d of %v", $.arrayToSlice<any>([$.basicInterfaceValue(extNum, "int32"), (base as any)]))
			return false
		}
		let err: $.GoError = null! as $.GoError
		if (m1 == null) {
			let __goscriptTuple2: any = await __goscript_extensions.decodeExtension(e1.enc, desc)
			m1 = __goscriptTuple2[0]
			err = __goscriptTuple2[1]
		}
		if ((m2 == null) && (err == null)) {
			let __goscriptTuple3: any = await __goscript_extensions.decodeExtension(e2.enc, desc)
			m2 = __goscriptTuple3[0]
			err = __goscriptTuple3[1]
		}
		if (err != null) {
			// The encoded form is invalid.
			await log.Printf("proto: badly encoded extension %d of %v: %v", $.arrayToSlice<any>([$.basicInterfaceValue(extNum, "int32"), (base as any), (err as any)]))
			return false
		}
		if (!await equalAny($.markAsStructValue($.cloneStructValue(reflect.ValueOf(m1))), $.markAsStructValue($.cloneStructValue(reflect.ValueOf(m2))), null)) {
			return false
		}
	}

	return true
}

var __goscriptAwait: any
