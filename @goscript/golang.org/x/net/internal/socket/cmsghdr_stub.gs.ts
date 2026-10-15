// Generated file based on cmsghdr_stub.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("golang.org/x/net/internal/socket", ["socket.cmsghdr"])

export class cmsghdr {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): cmsghdr {
		return new cmsghdr(this, true)
	}

	public __goscriptAssign(source: cmsghdr): void {
	}

	public len(): number {
		const h: cmsghdr | $.VarRef<cmsghdr> | null = this;
		return 0
	}

	public lvl(): number {
		const h: cmsghdr | $.VarRef<cmsghdr> | null = this;
		return 0
	}

	public ["set"](l: number, lvl: number, typ: number): void {
		const h: cmsghdr | $.VarRef<cmsghdr> | null = this;
	}

	public typ(): number {
		const h: cmsghdr | $.VarRef<cmsghdr> | null = this;
		return 0
	}

	static __typeInfo = $.registerStructType(
		"socket.cmsghdr",
		() => new cmsghdr(),
		() => [$.methodSignature("len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("lvl", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("set", [["l", /* @__PURE__ */ $.basicType("int")], ["lvl", /* @__PURE__ */ $.basicType("int")], ["typ", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("typ", [], [/* @__PURE__ */ $.basicType("int")], true)],
		cmsghdr,
		() => []
	)
}

export function controlHeaderLen(): number {
	return 0
}

export function controlMessageLen(dataLen: number): number {
	return 0
}

export function controlMessageSpace(dataLen: number): number {
	return 0
}
