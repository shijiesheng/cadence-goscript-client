// Generated file based on icmp.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as iana from "@goscript/golang.org/x/net/internal/iana/index.js"

import * as __goscript_iana from "./iana.gs.ts"

import * as __goscript_icmp_stub from "./icmp_stub.gs.ts"
import "@goscript/golang.org/x/net/internal/iana/index.js"
import "./iana.gs.ts"
import "./icmp_stub.gs.ts"

$.registerTypePackagePath("golang.org/x/net/ipv6", ["ipv6.ICMPType", "ipv6.ICMPFilter"])

export type ICMPType = number

$.registerNamedValueType(
	"ipv6.ICMPType",
	{Protocol: (receiver: any, ...args: any[]) => (ICMPType_Protocol as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ICMPType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Protocol", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*ipv6.ICMPType",
	{Protocol: (receiver: any, ...args: any[]) => (ICMPType_Protocol as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ICMPType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Protocol", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class ICMPFilter {
	public get icmpv6Filter(): __goscript_icmp_stub.icmpv6Filter {
		return this._fields.icmpv6Filter
	}

	public set icmpv6Filter(value: __goscript_icmp_stub.icmpv6Filter) {
		this._fields.icmpv6Filter = value
	}

	public _fields: {
		icmpv6Filter: __goscript_icmp_stub.icmpv6Filter
	}

	constructor(init?: Partial<{icmpv6Filter?: __goscript_icmp_stub.icmpv6Filter}>, __goscriptValue?: boolean) {
		this._fields = {
			icmpv6Filter: init?.icmpv6Filter ? init.icmpv6Filter.clone() : new __goscript_icmp_stub.icmpv6Filter(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ICMPFilter {
		return new ICMPFilter(this, true)
	}

	public __goscriptAssign(source: ICMPFilter): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.icmpv6Filter, values.icmpv6Filter)
	}

	public Accept(typ: ICMPType): void {
		const f: ICMPFilter | $.VarRef<ICMPFilter> | null = this;
		$.pointerValue<ICMPFilter>(f).icmpv6Filter.accept(typ)
	}

	public Block(typ: ICMPType): void {
		const f: ICMPFilter | $.VarRef<ICMPFilter> | null = this;
		$.pointerValue<ICMPFilter>(f).icmpv6Filter.block(typ)
	}

	public SetAll(block: boolean): void {
		const f: ICMPFilter | $.VarRef<ICMPFilter> | null = this;
		$.pointerValue<ICMPFilter>(f).icmpv6Filter.setAll(block)
	}

	public WillBlock(typ: ICMPType): boolean {
		const f: ICMPFilter | $.VarRef<ICMPFilter> | null = this;
		return $.pointerValue<ICMPFilter>(f).icmpv6Filter.willBlock(typ)
	}

	public accept(typ: any): any {
		return $.pointerValue<__goscript_icmp_stub.icmpv6Filter>(this.icmpv6Filter).accept(typ)
	}

	public block(typ: any): any {
		return $.pointerValue<__goscript_icmp_stub.icmpv6Filter>(this.icmpv6Filter).block(typ)
	}

	public setAll(block: any): any {
		return $.pointerValue<__goscript_icmp_stub.icmpv6Filter>(this.icmpv6Filter).setAll(block)
	}

	public willBlock(typ: any): any {
		return $.pointerValue<__goscript_icmp_stub.icmpv6Filter>(this.icmpv6Filter).willBlock(typ)
	}

	static __typeInfo = $.registerStructType(
		"ipv6.ICMPFilter",
		() => new ICMPFilter(),
		() => [$.methodSignature("Accept", [["typ", /* @__PURE__ */ $.basicType("int", "ipv6.ICMPType")]], [], true), $.methodSignature("Block", [["typ", /* @__PURE__ */ $.basicType("int", "ipv6.ICMPType")]], [], true), $.methodSignature("SetAll", [["block", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("WillBlock", [["typ", /* @__PURE__ */ $.basicType("int", "ipv6.ICMPType")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("accept", [["typ", /* @__PURE__ */ $.basicType("int", "ipv6.ICMPType")]], [], true), $.methodSignature("block", [["typ", /* @__PURE__ */ $.basicType("int", "ipv6.ICMPType")]], [], true), $.methodSignature("setAll", [["block", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("willBlock", [["typ", /* @__PURE__ */ $.basicType("int", "ipv6.ICMPType")]], [/* @__PURE__ */ $.basicType("bool")], true)],
		ICMPFilter,
		() => [/* @__PURE__ */ $.structField("icmpv6Filter", "ipv6.icmpv6Filter", [0], 0, false, { pkgPath: "golang.org/x/net/ipv6", anonymous: true })]
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
	return 58
}
