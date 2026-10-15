// Generated file based on icmp.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as iana from "@goscript/golang.org/x/net/internal/iana/index.js"

import * as __goscript_iana from "./iana.gs.ts"

import * as __goscript_icmp_stub from "./icmp_stub.gs.ts"
import "@goscript/golang.org/x/net/internal/iana/index.js"
import "./iana.gs.ts"
import "./icmp_stub.gs.ts"

$.registerTypePackagePath("golang.org/x/net/ipv4", ["ipv4.ICMPType", "ipv4.ICMPFilter"])

export type ICMPType = number

$.registerNamedValueType(
	"ipv4.ICMPType",
	{Protocol: (receiver: any, ...args: any[]) => (ICMPType_Protocol as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ICMPType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Protocol", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*ipv4.ICMPType",
	{Protocol: (receiver: any, ...args: any[]) => (ICMPType_Protocol as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ICMPType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Protocol", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class ICMPFilter {
	public get icmpFilter(): __goscript_icmp_stub.icmpFilter {
		return this._fields.icmpFilter
	}

	public set icmpFilter(value: __goscript_icmp_stub.icmpFilter) {
		this._fields.icmpFilter = value
	}

	public _fields: {
		icmpFilter: __goscript_icmp_stub.icmpFilter
	}

	constructor(init?: Partial<{icmpFilter?: __goscript_icmp_stub.icmpFilter}>, __goscriptValue?: boolean) {
		this._fields = {
			icmpFilter: init?.icmpFilter ? init.icmpFilter.clone() : new __goscript_icmp_stub.icmpFilter(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ICMPFilter {
		return new ICMPFilter(this, true)
	}

	public __goscriptAssign(source: ICMPFilter): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.icmpFilter, values.icmpFilter)
	}

	public Accept(typ: ICMPType): void {
		const f: ICMPFilter | $.VarRef<ICMPFilter> | null = this;
		$.pointerValue<ICMPFilter>(f).icmpFilter.accept(typ)
	}

	public Block(typ: ICMPType): void {
		const f: ICMPFilter | $.VarRef<ICMPFilter> | null = this;
		$.pointerValue<ICMPFilter>(f).icmpFilter.block(typ)
	}

	public SetAll(block: boolean): void {
		const f: ICMPFilter | $.VarRef<ICMPFilter> | null = this;
		$.pointerValue<ICMPFilter>(f).icmpFilter.setAll(block)
	}

	public WillBlock(typ: ICMPType): boolean {
		const f: ICMPFilter | $.VarRef<ICMPFilter> | null = this;
		return $.pointerValue<ICMPFilter>(f).icmpFilter.willBlock(typ)
	}

	public accept(typ: any): any {
		return $.pointerValue<__goscript_icmp_stub.icmpFilter>(this.icmpFilter).accept(typ)
	}

	public block(typ: any): any {
		return $.pointerValue<__goscript_icmp_stub.icmpFilter>(this.icmpFilter).block(typ)
	}

	public setAll(block: any): any {
		return $.pointerValue<__goscript_icmp_stub.icmpFilter>(this.icmpFilter).setAll(block)
	}

	public willBlock(typ: any): any {
		return $.pointerValue<__goscript_icmp_stub.icmpFilter>(this.icmpFilter).willBlock(typ)
	}

	static __typeInfo = $.registerStructType(
		"ipv4.ICMPFilter",
		() => new ICMPFilter(),
		() => [$.methodSignature("Accept", [["typ", /* @__PURE__ */ $.basicType("int", "ipv4.ICMPType")]], [], true), $.methodSignature("Block", [["typ", /* @__PURE__ */ $.basicType("int", "ipv4.ICMPType")]], [], true), $.methodSignature("SetAll", [["block", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("WillBlock", [["typ", /* @__PURE__ */ $.basicType("int", "ipv4.ICMPType")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("accept", [["typ", /* @__PURE__ */ $.basicType("int", "ipv4.ICMPType")]], [], true), $.methodSignature("block", [["typ", /* @__PURE__ */ $.basicType("int", "ipv4.ICMPType")]], [], true), $.methodSignature("setAll", [["block", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("willBlock", [["typ", /* @__PURE__ */ $.basicType("int", "ipv4.ICMPType")]], [/* @__PURE__ */ $.basicType("bool")], true)],
		ICMPFilter,
		() => [/* @__PURE__ */ $.structField("icmpFilter", "ipv4.icmpFilter", [0], 0, false, { pkgPath: "golang.org/x/net/ipv4", anonymous: true })]
	)
}

export function ICMPType_String(typ: ICMPType): string {
	let [s, ok] = $.mapGet<ICMPType, string, string>(__goscript_iana.__goscript_get_icmpTypes(), typ, "")
	if (!ok) {
		return "<nil>"
	}
	return s
}

export function ICMPType_Protocol(typ: ICMPType): number {
	return 1
}
