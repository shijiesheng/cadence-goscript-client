// Generated file based on properties_gogo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as __goscript_lib_gogo from "./lib_gogo.gs.ts"
import "@goscript/reflect/index.js"
import "./lib_gogo.gs.ts"

export var sizerType: reflect.Type | null

export function __goscript_init_sizerType(): void {
	if (((sizerType) as any) === undefined) {
		sizerType = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*proto.Sizer", /* @__PURE__ */ $.pointerType("proto.Sizer")))).Elem()
	}
}

export function __goscript_get_sizerType(): reflect.Type | null {
	if (((sizerType) as any) === undefined) {
		__goscript_init_sizerType()
	}
	return sizerType
}

export function __goscript_set_sizerType(__goscriptValue: reflect.Type | null): void {
	sizerType = __goscriptValue
}

export var protosizerType: reflect.Type | null

export function __goscript_init_protosizerType(): void {
	if (((protosizerType) as any) === undefined) {
		protosizerType = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*proto.ProtoSizer", /* @__PURE__ */ $.pointerType("proto.ProtoSizer")))).Elem()
	}
}

export function __goscript_get_protosizerType(): reflect.Type | null {
	if (((protosizerType) as any) === undefined) {
		__goscript_init_protosizerType()
	}
	return protosizerType
}

export function __goscript_set_protosizerType(__goscriptValue: reflect.Type | null): void {
	protosizerType = __goscriptValue
}
