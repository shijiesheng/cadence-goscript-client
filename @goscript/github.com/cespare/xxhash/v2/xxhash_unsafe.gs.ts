// Generated file based on xxhash_unsafe.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as unsafe from "@goscript/unsafe/index.js"

import * as __goscript_xxhash from "./xxhash.gs.ts"

import * as __goscript_xxhash_other from "./xxhash_other.gs.ts"
import "@goscript/unsafe/index.js"
import "./xxhash.gs.ts"
import "./xxhash_other.gs.ts"

$.registerTypePackagePath("github.com/cespare/xxhash/v2", ["xxhash.sliceHeader"])

export class sliceHeader {
	public get s(): string {
		return this._fields.s
	}

	public set s(value: string) {
		this._fields.s = value
	}

	public get cap(): number {
		return this._fields.cap
	}

	public set cap(value: number) {
		this._fields.cap = value
	}

	public _fields: {
		s: string
		cap: number
	}

	constructor(init?: Partial<{s?: string, cap?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s ?? ("" as string),
			cap: init?.cap ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sliceHeader {
		return new sliceHeader(this, true)
	}

	public __goscriptAssign(source: sliceHeader): void {
		const target = this._fields
		const values = source._fields
		target.s = values.s
		target.cap = values.cap
	}

	static __typeInfo = $.registerStructType(
		"xxhash.sliceHeader",
		() => new sliceHeader(),
		() => [],
		sliceHeader,
		() => [/* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "github.com/cespare/xxhash/v2" }), /* @__PURE__ */ $.structField("cap", /* @__PURE__ */ $.basicType("int"), [1], 16, false, { pkgPath: "github.com/cespare/xxhash/v2" })]
	)
}

export function Sum64String(s: string): bigint {
	let b: $.Slice<number> = $.stringToBytes(s)
	return __goscript_xxhash_other.Sum64(b)
}
