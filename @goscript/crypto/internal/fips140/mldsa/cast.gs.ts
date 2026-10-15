// Generated file based on cast.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import "@goscript/crypto/internal/fips140/check/index.js"

import * as sha256 from "@goscript/crypto/internal/fips140/sha256/index.js"

import * as errors from "@goscript/errors/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_field from "./field.gs.ts"

import * as __goscript_mldsa from "./mldsa.gs.ts"

import * as __goscript_semiexpanded from "./semiexpanded.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/sha256/index.js"
import "@goscript/errors/index.js"
import "@goscript/sync/index.js"
import "./field.gs.ts"
import "./mldsa.gs.ts"
import "./semiexpanded.gs.ts"

export async function fipsPCT(priv: __goscript_mldsa.PrivateKey | $.VarRef<__goscript_mldsa.PrivateKey> | null): globalThis.Promise<void> {
	await fips140.PCT("ML-DSA sign and verify PCT", $.functionValue(async (): globalThis.Promise<$.GoError> => {
		let _u3bc: $.Slice<number> = $.makeSlice<number>(64, undefined, "byte")
		let __goscriptTuple0: any = await __goscript_mldsa.SignExternalMuDeterministic(priv, _u3bc)
		let sig: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return err
		}
		return await __goscript_mldsa.VerifyExternalMu((priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? ((priv as any) as __goscript_mldsa.PrivateKey).PublicKey() : __goscript_mldsa.PrivateKey.prototype.PublicKey.call(priv)), _u3bc, sig)
	}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
}

export let fipsSelfTest: (() => void) | null = sync.OnceFunc($.functionValue(async (): globalThis.Promise<void> => {
	await fips140.CAST("ML-DSA-44", fips140CAST)
}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))

export function __goscript_set_fipsSelfTest(__goscriptValue: (() => void) | null): void {
	fipsSelfTest = __goscriptValue
}

export async function fips140CAST(): globalThis.Promise<$.GoError> {
	// From https://pages.nist.gov/ACVP/draft-celi-acvp-ml-dsa.html#table-1.
	let seed: $.VarRef<Uint8Array> | null = $.varRef($.arrayValue(new Uint8Array([92, 98, 79, 204, 24, 98, 69, 36, 82, 208, 198, 101, 132, 13, 130, 55, 244, 49, 8, 229, 73, 158, 220, 220, 16, 143, 188, 73, 213, 150, 228, 183])))
	let _u3bc: $.VarRef<Uint8Array> | null = $.varRef($.arrayValue(new Uint8Array([42, 209, 199, 43, 176, 252, 190, 40, 9, 156, 232, 189, 46, 216, 54, 223, 235, 229, 32, 170, 211, 143, 186, 198, 110, 247, 133, 163, 207, 177, 15, 180, 25, 50, 127, 165, 120, 24, 238, 78, 55, 24, 218, 75, 228, 141, 36, 181, 154, 32, 143, 136, 7, 39, 31, 219, 126, 218, 110, 96, 20, 27, 210, 99])))
	let skHash: $.Slice<number> = new Uint8Array([41, 55, 73, 81, 203, 43, 195, 205, 167, 49, 92, 231, 240, 171, 153, 199, 210, 214, 82, 146, 230, 197, 21, 110, 138, 166, 42, 193, 75, 20, 18, 175]) as $.Slice<number>
	let sigHash: $.Slice<number> = new Uint8Array([220, 199, 26, 66, 27, 198, 255, 175, 183, 223, 12, 127, 109, 1, 138, 25, 173, 161, 84, 209, 226, 238, 54, 14, 213, 51, 206, 205, 93, 201, 128, 173]) as $.Slice<number>
	let priv: __goscript_mldsa.PrivateKey | $.VarRef<__goscript_mldsa.PrivateKey> | null = __goscript_mldsa.newPrivateKey(seed, (__goscript_mldsa.params44).clone())
	let H: sha256.Digest | $.VarRef<sha256.Digest> | null = sha256.New()
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha256.Digest).Write(__goscript_semiexpanded.TestingOnlyPrivateKeySemiExpandedBytes(priv)) : sha256.Digest.prototype.Write.call(H, __goscript_semiexpanded.TestingOnlyPrivateKeySemiExpandedBytes(priv)))
	if (!bytes.Equal((H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha256.Digest).Sum(null) : sha256.Digest.prototype.Sum.call(H, null)), skHash)) {
		return errors.New("unexpected private key hash")
	}
	let random: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(32)))
	let sig: $.Slice<number> = await __goscript_mldsa.signInternal(priv, _u3bc, random)
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha256.Digest).Reset() : sha256.Digest.prototype.Reset.call(H))
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha256.Digest).Write(sig) : sha256.Digest.prototype.Write.call(H, sig))
	if (!bytes.Equal((H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha256.Digest).Sum(null) : sha256.Digest.prototype.Sum.call(H, null)), sigHash)) {
		return errors.New("unexpected signature hash")
	}
	return __goscript_mldsa.verifyInternal((priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? ((priv as any) as __goscript_mldsa.PrivateKey).PublicKey() : __goscript_mldsa.PrivateKey.prototype.PublicKey.call(priv)), _u3bc, sig)
}
