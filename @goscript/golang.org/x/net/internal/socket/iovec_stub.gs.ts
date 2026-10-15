// Generated file based on iovec_stub.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("golang.org/x/net/internal/socket", ["socket.iovec"])

export class iovec {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): iovec {
		return new iovec(this, true)
	}

	public __goscriptAssign(source: iovec): void {
	}

	public ["set"](b: $.Slice<number>): void {
		const v: iovec | $.VarRef<iovec> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"socket.iovec",
		() => new iovec(),
		() => [$.methodSignature("set", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true)],
		iovec,
		() => []
	)
}
