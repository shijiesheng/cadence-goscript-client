// Generated file based on gcm_noasm.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as aes from "@goscript/crypto/internal/fips140/aes/index.js"

import type * as __goscript_gcm from "./gcm.gs.ts"

import * as __goscript_gcm_generic from "./gcm_generic.gs.ts"
import "@goscript/crypto/internal/fips140/aes/index.js"
import "./gcm_generic.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/aes/gcm", ["gcm.gcmPlatformData"])

export class gcmPlatformData {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): gcmPlatformData {
		return new gcmPlatformData(this, true)
	}

	public __goscriptAssign(source: gcmPlatformData): void {
	}

	static __typeInfo = $.registerStructType(
		"gcm.gcmPlatformData",
		() => new gcmPlatformData(),
		() => [],
		gcmPlatformData,
		() => []
	)
}

export function checkGenericIsExpected(): void {
}

export function initGCM(g: __goscript_gcm.GCM | $.VarRef<__goscript_gcm.GCM> | null): void {
}

export function seal(out: $.Slice<number>, g: __goscript_gcm.GCM | $.VarRef<__goscript_gcm.GCM> | null, nonce: $.Slice<number>, plaintext: $.Slice<number>, data: $.Slice<number>): void {
	__goscript_gcm_generic.sealGeneric(out, g, nonce, plaintext, data)
}

export function open(out: $.Slice<number>, g: __goscript_gcm.GCM | $.VarRef<__goscript_gcm.GCM> | null, nonce: $.Slice<number>, ciphertext: $.Slice<number>, data: $.Slice<number>): $.GoError {
	return __goscript_gcm_generic.openGeneric(out, g, nonce, ciphertext, data)
}
