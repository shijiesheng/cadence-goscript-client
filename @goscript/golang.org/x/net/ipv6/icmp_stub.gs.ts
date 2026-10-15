// Generated file based on icmp_stub.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as __goscript_icmp from "./icmp.gs.ts"

$.registerTypePackagePath("golang.org/x/net/ipv6", ["ipv6.icmpv6Filter"])

export class icmpv6Filter {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): icmpv6Filter {
		return new icmpv6Filter(this, true)
	}

	public __goscriptAssign(source: icmpv6Filter): void {
	}

	public accept(typ: __goscript_icmp.ICMPType): void {
		const f: icmpv6Filter | $.VarRef<icmpv6Filter> | null = this;
	}

	public block(typ: __goscript_icmp.ICMPType): void {
		const f: icmpv6Filter | $.VarRef<icmpv6Filter> | null = this;
	}

	public setAll(block: boolean): void {
		const f: icmpv6Filter | $.VarRef<icmpv6Filter> | null = this;
	}

	public willBlock(typ: __goscript_icmp.ICMPType): boolean {
		const f: icmpv6Filter | $.VarRef<icmpv6Filter> | null = this;
		return false
	}

	static __typeInfo = $.registerStructType(
		"ipv6.icmpv6Filter",
		() => new icmpv6Filter(),
		() => [$.methodSignature("accept", [["typ", /* @__PURE__ */ $.basicType("int", "ipv6.ICMPType")]], [], true), $.methodSignature("block", [["typ", /* @__PURE__ */ $.basicType("int", "ipv6.ICMPType")]], [], true), $.methodSignature("setAll", [["block", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("willBlock", [["typ", /* @__PURE__ */ $.basicType("int", "ipv6.ICMPType")]], [/* @__PURE__ */ $.basicType("bool")], true)],
		icmpv6Filter,
		() => []
	)
}
