// Generated file based on cast.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as aes from "@goscript/crypto/internal/fips140/aes/index.js"

import "@goscript/crypto/internal/fips140/check/index.js"

import * as errors from "@goscript/errors/index.js"

import * as __goscript_cmac from "./cmac.gs.ts"

import * as __goscript_ctrkdf from "./ctrkdf.gs.ts"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/aes/index.js"
import "@goscript/errors/index.js"
import "./cmac.gs.ts"
import "./ctrkdf.gs.ts"

async function __goscriptInit0(): globalThis.Promise<void> {
	// Counter KDF covers CMAC per IG 10.3.B, and CMAC covers GCM per IG 10.3.A
	// Resolution 1.d(i). AES decryption is covered by the CBC CAST in package
	// crypto/internal/fips140/aes.
	await fips140.CAST("CounterKDF", $.functionValue((): $.GoError => {
		let key: $.Slice<number> = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]) as $.Slice<number>
		let context = $.arrayValue(new Uint8Array([33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]))
		let want = $.arrayValue(new Uint8Array([230, 134, 150, 151, 8, 252, 144, 48, 54, 28, 101, 148, 178, 98, 165, 247, 203, 157, 147, 148, 218, 241, 148, 9, 106, 39, 94, 133, 34, 94, 122, 238]))
		let __goscriptTuple0: any = aes.New(key)
		let b: aes.Block | $.VarRef<aes.Block> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return err
		}
		let got = __goscript_ctrkdf.CounterKDF.prototype.DeriveKey.call(__goscript_ctrkdf.NewCounterKDF(b), 0xFF, $.cloneArrayValue(context, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 12)))
		if (!$.arrayEqual(got, want)) {
			return errors.New("unexpected result")
		}
		return null
	}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
}

export { __goscriptInit0 }
