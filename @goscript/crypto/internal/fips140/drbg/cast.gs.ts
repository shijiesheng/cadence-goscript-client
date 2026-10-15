// Generated file based on cast.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import "@goscript/crypto/internal/fips140/check/index.js"

import * as errors from "@goscript/errors/index.js"

import * as aes from "@goscript/crypto/internal/fips140/aes/index.js"

import * as __goscript_ctrdrbg from "./ctrdrbg.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/errors/index.js"
import "@goscript/crypto/internal/fips140/aes/index.js"
import "./ctrdrbg.gs.ts"

async function __goscriptInit0(): globalThis.Promise<void> {
	// Per IG 10.3.A, Resolution 7: "A KAT of a DRBG may be performed by:
	// Instantiate with known data, Reseed with other known data, Generate and
	// then compare the result to a pre-computed value."
	await fips140.CAST("CTR_DRBG", $.functionValue((): $.GoError => {
		let entropy: $.VarRef<Uint8Array> | null = $.varRef($.arrayValue(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48])))
		let reseedEntropy: $.VarRef<Uint8Array> | null = $.varRef($.arrayValue(new Uint8Array([49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96])))
		let additionalInput: $.VarRef<Uint8Array> | null = $.varRef($.arrayValue(new Uint8Array([97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144])))
		let want: $.Slice<number> = new Uint8Array([110, 110, 71, 157, 36, 248, 106, 59, 119, 135, 168, 248, 24, 109, 152, 90, 83, 190, 190, 237, 222, 171, 146, 40, 240, 244, 172, 110, 16, 191, 1, 147]) as $.Slice<number>
		let c: __goscript_ctrdrbg.Counter | $.VarRef<__goscript_ctrdrbg.Counter> | null = __goscript_ctrdrbg.NewCounter(entropy)
		void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_ctrdrbg.Counter).Reseed(reseedEntropy, additionalInput) : __goscript_ctrdrbg.Counter.prototype.Reseed.call(c, reseedEntropy, additionalInput))
		let got: $.Slice<number> = $.makeSlice<number>($.sliceLen(want), undefined, "byte")
		void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_ctrdrbg.Counter).Generate(got, additionalInput) : __goscript_ctrdrbg.Counter.prototype.Generate.call(c, got, additionalInput))
		if (!bytes.Equal(got, want)) {
			return errors.New("unexpected result")
		}
		return null
	}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
}

export { __goscriptInit0 }
