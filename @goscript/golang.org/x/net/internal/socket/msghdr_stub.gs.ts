// Generated file based on msghdr_stub.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as __goscript_iovec_stub from "./iovec_stub.gs.ts"

$.registerTypePackagePath("golang.org/x/net/internal/socket", ["socket.msghdr"])

export class msghdr {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): msghdr {
		return new msghdr(this, true)
	}

	public __goscriptAssign(source: msghdr): void {
	}

	public controllen(): number {
		const h: msghdr | $.VarRef<msghdr> | null = this;
		return 0
	}

	public flags(): number {
		const h: msghdr | $.VarRef<msghdr> | null = this;
		return 0
	}

	public name(): $.Slice<number> {
		const h: msghdr | $.VarRef<msghdr> | null = this;
		return null
	}

	public pack(vs: $.Slice<__goscript_iovec_stub.iovec>, bs: $.Slice<$.Slice<number>>, oob: $.Slice<number>, sa: $.Slice<number>): void {
		const h: msghdr | $.VarRef<msghdr> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"socket.msghdr",
		() => new msghdr(),
		() => [$.methodSignature("controllen", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("flags", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("name", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("pack", [["vs", /* @__PURE__ */ $.sliceType("socket.iovec")], ["bs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["sa", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true)],
		msghdr,
		() => []
	)
}
