// Generated file based on header.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as net from "@goscript/net/index.js"

import * as __goscript_helper from "./helper.gs.ts"
import "@goscript/encoding/binary/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/index.js"
import "./helper.gs.ts"

$.registerTypePackagePath("golang.org/x/net/ipv6", ["ipv6.Header"])

export class Header {
	public get Version(): number {
		return this._fields.Version
	}

	public set Version(value: number) {
		this._fields.Version = value
	}

	public get TrafficClass(): number {
		return this._fields.TrafficClass
	}

	public set TrafficClass(value: number) {
		this._fields.TrafficClass = value
	}

	public get FlowLabel(): number {
		return this._fields.FlowLabel
	}

	public set FlowLabel(value: number) {
		this._fields.FlowLabel = value
	}

	public get PayloadLen(): number {
		return this._fields.PayloadLen
	}

	public set PayloadLen(value: number) {
		this._fields.PayloadLen = value
	}

	public get NextHeader(): number {
		return this._fields.NextHeader
	}

	public set NextHeader(value: number) {
		this._fields.NextHeader = value
	}

	public get HopLimit(): number {
		return this._fields.HopLimit
	}

	public set HopLimit(value: number) {
		this._fields.HopLimit = value
	}

	public get Src(): net.IP {
		return this._fields.Src
	}

	public set Src(value: net.IP) {
		this._fields.Src = value
	}

	public get Dst(): net.IP {
		return this._fields.Dst
	}

	public set Dst(value: net.IP) {
		this._fields.Dst = value
	}

	public _fields: {
		Version: number
		TrafficClass: number
		FlowLabel: number
		PayloadLen: number
		NextHeader: number
		HopLimit: number
		Src: net.IP
		Dst: net.IP
	}

	constructor(init?: Partial<{Version?: number, TrafficClass?: number, FlowLabel?: number, PayloadLen?: number, NextHeader?: number, HopLimit?: number, Src?: net.IP, Dst?: net.IP}>, __goscriptValue?: boolean) {
		this._fields = {
			Version: init?.Version ?? (0 as number),
			TrafficClass: init?.TrafficClass ?? (0 as number),
			FlowLabel: init?.FlowLabel ?? (0 as number),
			PayloadLen: init?.PayloadLen ?? (0 as number),
			NextHeader: init?.NextHeader ?? (0 as number),
			HopLimit: init?.HopLimit ?? (0 as number),
			Src: init?.Src ?? (null! as net.IP),
			Dst: init?.Dst ?? (null! as net.IP)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Header {
		return new Header(this, true)
	}

	public __goscriptAssign(source: Header): void {
		const target = this._fields
		const values = source._fields
		target.Version = values.Version
		target.TrafficClass = values.TrafficClass
		target.FlowLabel = values.FlowLabel
		target.PayloadLen = values.PayloadLen
		target.NextHeader = values.NextHeader
		target.HopLimit = values.HopLimit
		target.Src = values.Src
		target.Dst = values.Dst
	}

	public async String(): globalThis.Promise<string> {
		const h: Header | $.VarRef<Header> | null = this;
		const h$: Header = h == null ? $.pointerTarget<Header>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<Header>(h)
		if (h == null) {
			return "<nil>"
		}
		return fmt.Sprintf("ver=%d tclass=%#x flowlbl=%#x payloadlen=%d nxthdr=%d hoplim=%d src=%v dst=%v", $.basicInterfaceValue((h$ as Header).Version, "int"), $.basicInterfaceValue((h$ as Header).TrafficClass, "int"), $.basicInterfaceValue((h$ as Header).FlowLabel, "int"), $.basicInterfaceValue((h$ as Header).PayloadLen, "int"), $.basicInterfaceValue((h$ as Header).NextHeader, "int"), $.basicInterfaceValue((h$ as Header).HopLimit, "int"), $.namedValueInterfaceValue<any>((h$ as Header).Src, "net.IP", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((h$ as Header).Dst, "net.IP", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}

	static __typeInfo = $.registerStructType(
		"ipv6.Header",
		() => new Header(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Header,
		() => [/* @__PURE__ */ $.structField("Version", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("TrafficClass", /* @__PURE__ */ $.basicType("int"), [1], 8, true), /* @__PURE__ */ $.structField("FlowLabel", /* @__PURE__ */ $.basicType("int"), [2], 16, true), /* @__PURE__ */ $.structField("PayloadLen", /* @__PURE__ */ $.basicType("int"), [3], 24, true), /* @__PURE__ */ $.structField("NextHeader", /* @__PURE__ */ $.basicType("int"), [4], 32, true), /* @__PURE__ */ $.structField("HopLimit", /* @__PURE__ */ $.basicType("int"), [5], 40, true), /* @__PURE__ */ $.structField("Src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), [6], 48, true), /* @__PURE__ */ $.structField("Dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), [7], 72, true)]
	)
}

export const Version: number = 6

export const HeaderLen: number = 40

export function ParseHeader(b: $.Slice<number>): [Header | $.VarRef<Header> | null, $.GoError] {
	if ($.sliceLen(b) < 40) {
		return [null, __goscript_helper.errHeaderTooShort]
	}
	let h: Header | $.VarRef<Header> | null = (() => { const __goscriptLiteralField0 = $.int($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint16($.goSlice(b, 4, 6))); return new Header({Version: $.int($.arrayIndex(b!, 0)) >> 4, TrafficClass: ($.int($.arrayIndex(b!, 0) & 0x0f) << 4) | ($.int($.arrayIndex(b!, 1)) >> 4), FlowLabel: (($.int($.arrayIndex(b!, 1) & 0x0f) << 16) | ($.int($.arrayIndex(b!, 2)) << 8)) | $.int($.arrayIndex(b!, 3)), PayloadLen: __goscriptLiteralField0, NextHeader: $.int($.arrayIndex(b!, 6)), HopLimit: $.int($.arrayIndex(b!, 7))}) })()
	let h$: Header = h == null ? $.pointerTarget<Header>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<Header>(h);
	;(h$ as Header).Src = ($.makeSlice<number>(net.IPv6len, undefined, "byte") as net.IP)
	$.copy(((h$ as Header).Src as net.IP), $.goSlice(b, 8, 24));
	;(h$ as Header).Dst = ($.makeSlice<number>(net.IPv6len, undefined, "byte") as net.IP)
	$.copy(((h$ as Header).Dst as net.IP), $.goSlice(b, 24, 40))
	return [h, null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({AppendText: (receiver: any, ...args: any[]) => (net.IP_AppendText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), DefaultMask: (receiver: any, ...args: any[]) => (net.IP_DefaultMask as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => (net.IP_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsGlobalUnicast: (receiver: any, ...args: any[]) => (net.IP_IsGlobalUnicast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsInterfaceLocalMulticast: (receiver: any, ...args: any[]) => (net.IP_IsInterfaceLocalMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLinkLocalMulticast: (receiver: any, ...args: any[]) => (net.IP_IsLinkLocalMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLinkLocalUnicast: (receiver: any, ...args: any[]) => (net.IP_IsLinkLocalUnicast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLoopback: (receiver: any, ...args: any[]) => (net.IP_IsLoopback as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsMulticast: (receiver: any, ...args: any[]) => (net.IP_IsMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPrivate: (receiver: any, ...args: any[]) => (net.IP_IsPrivate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsUnspecified: (receiver: any, ...args: any[]) => (net.IP_IsUnspecified as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (net.IP_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Mask: (receiver: any, ...args: any[]) => (net.IP_Mask as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (net.IP_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), To16: (receiver: any, ...args: any[]) => (net.IP_To16 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), To4: (receiver: any, ...args: any[]) => (net.IP_To4 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), appendTo: (receiver: any, ...args: any[]) => (net.IP_appendTo as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), matchAddrFamily: (receiver: any, ...args: any[]) => (net.IP_matchAddrFamily as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("DefaultMask", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IPMask")]), $.methodSignature("Equal", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsGlobalUnicast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsInterfaceLocalMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLinkLocalMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLinkLocalUnicast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLoopback", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPrivate", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsUnspecified", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Mask", [["mask", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IPMask")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("To16", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("To4", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("appendTo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("matchAddrFamily", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], [/* @__PURE__ */ $.basicType("bool")])])
}
