// Generated file based on metadata.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as attributes from "@goscript/google.golang.org/grpc/attributes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/attributes/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/metadata", ["metadata.mdKeyType", "metadata.mdValue"])

export type mdKeyType = string

export type mdValue = globalThis.Map<string, $.Slice<string>> | null

$.registerNamedType("metadata.mdValue", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))));

$.registerNamedValueType(
	"metadata.mdValue",
	{Equal: (receiver: any, ...args: any[]) => (mdValue_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Equal", [["o", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*metadata.mdValue",
	{Equal: (receiver: any, ...args: any[]) => (mdValue_Equal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Equal", [["o", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")])]
);

export const mdKey: mdKeyType = "grpc.internal.address.metadata"

export function mdValue_Equal(m: mdValue, o: any): boolean {
	let __goscriptTuple0: any = $.typeAssertTuple<mdValue>(o, "metadata.mdValue")
	let om: mdValue = __goscriptTuple0[0]
	let ok = __goscriptTuple0[1]
	if (!ok) {
		return false
	}
	if ($.len(m) != $.len(om)) {
		return false
	}
	for (const [k, v] of m?.entries() ?? []) {
		let ov: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>(om, k, null)[0]
		if ($.sliceLen(ov) != $.sliceLen(v)) {
			return false
		}
		for (let __goscriptRangeTarget0 = v, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(ov), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let ve = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as string)
			if (!$.stringEqual(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string), ve)) {
				return false
			}
		}
	}
	return true
}

export function Get(addr: resolver.Address): metadata.MD {
	let attrs: attributes.Attributes | $.VarRef<attributes.Attributes> | null = addr.Attributes
	if (attrs == null) {
		return null
	}
	let __goscriptTuple1: any = $.typeAssertTuple<mdValue>(attributes.Attributes.prototype.Value.call(attrs, $.namedValueInterfaceValue<any>("grpc.internal.address.metadata", "metadata.mdKeyType", {}, /* @__PURE__ */ $.basicType("string", "metadata.mdKeyType"))), "metadata.mdValue")
	let md: mdValue = __goscriptTuple1[0]
	return md
}

export function Set(addr: resolver.Address, md: metadata.MD): resolver.Address {
	addr.Attributes = attributes.Attributes.prototype.WithValue.call(addr.Attributes, $.namedValueInterfaceValue<any>("grpc.internal.address.metadata", "metadata.mdKeyType", {}, /* @__PURE__ */ $.basicType("string", "metadata.mdKeyType")), $.namedValueInterfaceValue<any>(md, "metadata.mdValue", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	return (addr).clone()
}

export function Validate(md: metadata.MD): $.GoError {
	for (const [k, vals] of md?.entries() ?? []) {
		{
			let err = ValidatePair(k, vals)
			if (err != null) {
				return err
			}
		}
	}
	return null
}

export function hasNotPrintable(msg: string): boolean {
	// for i that saving a conversion if not using for range
	for (let i = 0; i < $.stringLen(msg); i++) {
		if (($.indexString(msg, i) < 0x20) || ($.indexString(msg, i) > 0x7E)) {
			return true
		}
	}
	return false
}

export function ValidatePair(key: string, vals: $.Slice<string>): $.GoError {
	// key should not be empty
	if ($.stringEqual(key, "")) {
		return fmt.Errorf("there is an empty key in the header")
	}
	// pseudo-header will be ignored
	if ($.indexString(key, 0) == 58) {
		return null
	}
	// check key, for i that saving a conversion if not using for range
	for (let i = 0; i < $.stringLen(key); i++) {
		let r = $.indexString(key, i)
		if ((((!((r >= 97) && (r <= 122)) && !((r >= 48) && (r <= 57))) && (r != 46)) && (r != 45)) && (r != 95)) {
			return fmt.Errorf("header key %q contains illegal characters not in [0-9a-z-_.]", key)
		}
	}
	if (strings.HasSuffix(key, "-bin")) {
		return null
	}
	// check value
	for (let __goscriptRangeTarget1 = vals, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let val = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
		if (hasNotPrintable(val)) {
			return fmt.Errorf("header key %q contains value with non-printable ASCII characters", key)
		}
	}
	return null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Equal: (receiver: any, ...args: any[]) => (mdValue_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ("metadata.mdValue")
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Equal", [["o", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")])])
}
