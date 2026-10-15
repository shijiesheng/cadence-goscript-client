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

import * as __goscript_mlkem768 from "./mlkem768.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/sha256/index.js"
import "@goscript/errors/index.js"
import "@goscript/sync/index.js"
import "./field.gs.ts"
import "./mlkem768.gs.ts"

export let fipsSelfTest: (() => void) | null = sync.OnceFunc($.functionValue(async (): globalThis.Promise<void> => {
	await fips140.CAST("ML-KEM-768", fips140CAST)
}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))

export function __goscript_set_fipsSelfTest(__goscriptValue: (() => void) | null): void {
	fipsSelfTest = __goscriptValue
}

export async function fips140CAST(): globalThis.Promise<$.GoError> {
	let d: $.VarRef<Uint8Array> | null = $.varRef($.arrayValue(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32])))
	let z: $.VarRef<Uint8Array> | null = $.varRef($.arrayValue(new Uint8Array([33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64])))
	let dkHash: $.Slice<number> = new Uint8Array([161, 50, 74, 113, 245, 126, 38, 133, 55, 126, 79, 125, 226, 209, 240, 88, 83, 142, 8, 126, 227, 155, 72, 43, 61, 191, 150, 249, 247, 105, 199, 133]) as $.Slice<number>
	let m: $.VarRef<Uint8Array> | null = $.varRef($.arrayValue(new Uint8Array([65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96])))
	let K: $.Slice<number> = new Uint8Array([85, 1, 252, 82, 59, 116, 95, 65, 118, 42, 24, 141, 228, 74, 89, 185, 32, 244, 48, 20, 98, 4, 238, 78, 121, 55, 50, 57, 109, 247, 170, 72]) as $.Slice<number>
	let Kr: $.Slice<number> = new Uint8Array([1, 161, 3, 58, 46, 104, 51, 128, 127, 211, 145, 128, 190, 59, 79, 10, 31, 111, 80, 81, 103, 86, 157, 14, 94, 94, 31, 219, 82, 169, 16, 236]) as $.Slice<number>
	let dk: __goscript_mlkem768.DecapsulationKey768 | $.VarRef<__goscript_mlkem768.DecapsulationKey768> | null = new __goscript_mlkem768.DecapsulationKey768()
	__goscript_mlkem768.kemKeyGen(dk, d, z)
	let ek: __goscript_mlkem768.EncapsulationKey768 | $.VarRef<__goscript_mlkem768.EncapsulationKey768> | null = (dk !== null && (dk as any).__isVarRef !== true && (dk as any).__goValue === undefined ? ((dk as any) as __goscript_mlkem768.DecapsulationKey768).EncapsulationKey() : __goscript_mlkem768.DecapsulationKey768.prototype.EncapsulationKey.call(dk))
	let H: sha256.Digest | $.VarRef<sha256.Digest> | null = sha256.New()
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha256.Digest).Write(__goscript_mlkem768.TestingOnlyExpandedBytes768(dk)) : sha256.Digest.prototype.Write.call(H, __goscript_mlkem768.TestingOnlyExpandedBytes768(dk)))
	if (!bytes.Equal((H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha256.Digest).Sum(null) : sha256.Digest.prototype.Sum.call(H, null)), dkHash)) {
		return errors.New("unexpected private key hash")
	}
	let cc: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(1088)))
	let Kd: $.Slice<number> = await __goscript_mlkem768.kemDecaps(dk, cc)
	if (!bytes.Equal(Kd, Kr)) {
		return errors.New("unexpected rejection result")
	}
	let __goscriptTuple0: any = __goscript_mlkem768.kemEncaps(cc, ek, m)
	let Ke: $.Slice<number> = __goscriptTuple0[0]
	Kd = await __goscript_mlkem768.kemDecaps(dk, cc)
	if (!bytes.Equal(Ke, K) || !bytes.Equal(Kd, K)) {
		return errors.New("unexpected result")
	}
	return null
}
