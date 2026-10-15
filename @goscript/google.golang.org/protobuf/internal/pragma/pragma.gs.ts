// Generated file based on pragma.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/internal/pragma", ["pragma.NoUnkeyedLiterals", "pragma.DoNotImplement", "pragma.DoNotCompare", "pragma.DoNotCopy"])

export type DoNotImplement = {
	ProtoInternal(_p0: DoNotImplement | null): void
}

$.registerInterfaceType(
	"pragma.DoNotImplement",
	null,
	[$.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export type DoNotCompare = ((() => void) | null)[]

$.registerNamedType("pragma.DoNotCompare", /* @__PURE__ */ $.arrayType(({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), 0));

export type DoNotCopy = sync.Mutex[]

$.registerNamedType("pragma.DoNotCopy", /* @__PURE__ */ $.arrayType("sync.Mutex", 0));

export class NoUnkeyedLiterals {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NoUnkeyedLiterals {
		return new NoUnkeyedLiterals(this, true)
	}

	public __goscriptAssign(source: NoUnkeyedLiterals): void {
	}

	static __typeInfo = $.registerStructType(
		"pragma.NoUnkeyedLiterals",
		() => new NoUnkeyedLiterals(),
		() => [],
		NoUnkeyedLiterals,
		() => []
	)
}
