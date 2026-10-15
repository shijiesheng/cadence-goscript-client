// Generated file based on aes_noasm.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_aes from "./aes.gs.ts"

import * as __goscript_aes_generic from "./aes_generic.gs.ts"
import "./aes.gs.ts"
import "./aes_generic.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/aes", ["aes.block"])

export class block {
	public get blockExpanded(): __goscript_aes.blockExpanded {
		return this._fields.blockExpanded
	}

	public set blockExpanded(value: __goscript_aes.blockExpanded) {
		this._fields.blockExpanded = value
	}

	public _fields: {
		blockExpanded: __goscript_aes.blockExpanded
	}

	constructor(init?: Partial<{blockExpanded?: __goscript_aes.blockExpanded}>, __goscriptValue?: boolean) {
		this._fields = {
			blockExpanded: init?.blockExpanded ? init.blockExpanded.clone() : new __goscript_aes.blockExpanded(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): block {
		return new block(this, true)
	}

	public __goscriptAssign(source: block): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.blockExpanded, values.blockExpanded)
	}

	public roundKeysSize(): any {
		return $.pointerValue<__goscript_aes.blockExpanded>(this.blockExpanded).roundKeysSize()
	}

	static __typeInfo = $.registerStructType(
		"aes.block",
		() => new block(),
		() => [$.methodSignature("roundKeysSize", [], [/* @__PURE__ */ $.basicType("int")], true)],
		block,
		() => [/* @__PURE__ */ $.structField("blockExpanded", "aes.blockExpanded", [0], 0, false, { pkgPath: "crypto/internal/fips140/aes", anonymous: true })]
	)
}

export function newBlock(c: __goscript_aes.Block | $.VarRef<__goscript_aes.Block> | null, key: $.Slice<number>): __goscript_aes.Block | $.VarRef<__goscript_aes.Block> | null {
	__goscript_aes.newBlockExpanded($.fieldRef($.pointerValue<__goscript_aes.Block>(c).block._fields, "blockExpanded"), key)
	return c
}

export function encryptBlock(c: __goscript_aes.Block | $.VarRef<__goscript_aes.Block> | null, dst: $.Slice<number>, src: $.Slice<number>): void {
	__goscript_aes_generic.encryptBlockGeneric($.fieldRef($.pointerValue<__goscript_aes.Block>(c).block._fields, "blockExpanded"), dst, src)
}

export function decryptBlock(c: __goscript_aes.Block | $.VarRef<__goscript_aes.Block> | null, dst: $.Slice<number>, src: $.Slice<number>): void {
	__goscript_aes_generic.decryptBlockGeneric($.fieldRef($.pointerValue<__goscript_aes.Block>(c).block._fields, "blockExpanded"), dst, src)
}

export function checkGenericIsExpected(): void {
}
