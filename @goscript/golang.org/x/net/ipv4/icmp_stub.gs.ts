// Generated file based on icmp_stub.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as __goscript_icmp from "./icmp.gs.ts"

$.registerTypePackagePath("golang.org/x/net/ipv4", ["ipv4.icmpFilter"])

export class icmpFilter {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): icmpFilter {
		return new icmpFilter(this, true)
	}

	public __goscriptAssign(source: icmpFilter): void {
	}

	public accept(typ: __goscript_icmp.ICMPType): void {
		const f: icmpFilter | $.VarRef<icmpFilter> | null = this;
	}

	public block(typ: __goscript_icmp.ICMPType): void {
		const f: icmpFilter | $.VarRef<icmpFilter> | null = this;
	}

	public setAll(block: boolean): void {
		const f: icmpFilter | $.VarRef<icmpFilter> | null = this;
	}

	public willBlock(typ: __goscript_icmp.ICMPType): boolean {
		const f: icmpFilter | $.VarRef<icmpFilter> | null = this;
		return false
	}

	static __typeInfo = $.registerStructType(
		"ipv4.icmpFilter",
		() => new icmpFilter(),
		() => [$.methodSignature("accept", [["typ", /* @__PURE__ */ $.basicType("int", "ipv4.ICMPType")]], [], true), $.methodSignature("block", [["typ", /* @__PURE__ */ $.basicType("int", "ipv4.ICMPType")]], [], true), $.methodSignature("setAll", [["block", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("willBlock", [["typ", /* @__PURE__ */ $.basicType("int", "ipv4.ICMPType")]], [/* @__PURE__ */ $.basicType("bool")], true)],
		icmpFilter,
		() => []
	)
}

export const sizeofICMPFilter: number = 0
