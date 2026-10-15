// Generated file based on cast.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import "@goscript/crypto/internal/fips140/check/index.js"

import * as errors from "@goscript/errors/index.js"

import * as __goscript_aes from "./aes.gs.ts"

import * as __goscript_aes_noasm from "./aes_noasm.gs.ts"

import * as __goscript_cbc from "./cbc.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/errors/index.js"
import "./aes.gs.ts"
import "./aes_noasm.gs.ts"
import "./cbc.gs.ts"

async function __goscriptInit0(): globalThis.Promise<void> {
	await fips140.CAST("AES-CBC", $.functionValue((): $.GoError => {
		let key: $.Slice<number> = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]) as $.Slice<number>
		let iv = $.arrayValue(new Uint8Array([17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]))
		let plaintext: $.Slice<number> = new Uint8Array([33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48]) as $.Slice<number>
		let ciphertext: $.Slice<number> = new Uint8Array([223, 118, 38, 75, 211, 178, 196, 141, 64, 162, 110, 122, 196, 255, 189, 53]) as $.Slice<number>
		let __goscriptTuple0: any = __goscript_aes.New(key)
		let b: __goscript_aes.Block | $.VarRef<__goscript_aes.Block> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return err
		}
		let buf: $.Slice<number> = $.makeSlice<number>(16, undefined, "byte")
		__goscript_cbc.CBCEncrypter.prototype.CryptBlocks.call(__goscript_cbc.NewCBCEncrypter(b, $.cloneArrayValue(iv, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))), buf, plaintext)
		if (!bytes.Equal(buf, ciphertext)) {
			return errors.New("unexpected result")
		}
		__goscript_cbc.CBCDecrypter.prototype.CryptBlocks.call(__goscript_cbc.NewCBCDecrypter(b, $.cloneArrayValue(iv, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))), buf, ciphertext)
		if (!bytes.Equal(buf, plaintext)) {
			return errors.New("unexpected result")
		}
		return null
	}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
}

export { __goscriptInit0 }
