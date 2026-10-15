// Generated file based on pkcs1v22.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as constanttime from "@goscript/crypto/internal/constanttime/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as drbg from "@goscript/crypto/internal/fips140/drbg/index.js"

import * as sha256 from "@goscript/crypto/internal/fips140/sha256/index.js"

import * as sha3 from "@goscript/crypto/internal/fips140/sha3/index.js"

import * as sha512 from "@goscript/crypto/internal/fips140/sha512/index.js"

import * as subtle from "@goscript/crypto/internal/fips140/subtle/index.js"

import * as errors from "@goscript/errors/index.js"

import * as hash2 from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"

import * as bigmod from "@goscript/crypto/internal/fips140/bigmod/index.js"

import * as __goscript_cast from "./cast.gs.ts"

import * as __goscript_rsa from "./rsa.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/internal/constanttime/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/drbg/index.js"
import "@goscript/crypto/internal/fips140/sha256/index.js"
import "@goscript/crypto/internal/fips140/sha3/index.js"
import "@goscript/crypto/internal/fips140/sha512/index.js"
import "@goscript/crypto/internal/fips140/subtle/index.js"
import "@goscript/errors/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"
import "@goscript/crypto/internal/fips140/bigmod/index.js"
import "./cast.gs.ts"
import "./rsa.gs.ts"

export const pssSaltLengthAutodetect: number = -1

export function incCounter(c: $.VarRef<Uint8Array> | null): void {
	{
		$.pointerValue<Uint8Array>(c)[3]++
		if ($.arrayIndex($.pointerValue<Uint8Array>(c), 3) != 0) {
			return
		}
	}
	{
		$.pointerValue<Uint8Array>(c)[2]++
		if ($.arrayIndex($.pointerValue<Uint8Array>(c), 2) != 0) {
			return
		}
	}
	{
		$.pointerValue<Uint8Array>(c)[1]++
		if ($.arrayIndex($.pointerValue<Uint8Array>(c), 1) != 0) {
			return
		}
	}
	$.pointerValue<Uint8Array>(c)[0]++
}

export async function mgf1XOR(out: $.Slice<number>, hash: hash2.Hash | null, seed: $.Slice<number>): globalThis.Promise<void> {
	let counter: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(4)))
	let digest: $.Slice<number> = null! as $.Slice<number>

	let done = 0
	for (let __goscriptSliceWindow0 = $.sliceRange(out); done < __goscriptSliceWindow0.length; ) {
		void (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Write(seed)
		await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Write($.goSlice(counter.value, 0, 4))
		digest = await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Sum($.goSlice(digest, undefined, 0))

		for (let __goscriptSliceWindow1 = $.sliceRange(digest), i = 0; (i < __goscriptSliceWindow1.length) && (done < __goscriptSliceWindow0.length); i++) {
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, done)] = (__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, done)] ^ (((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as number))
			done++
		}
		incCounter(counter)
	}
}

export async function emsaPSSEncode(mHash: $.Slice<number>, emBits: number, salt: $.Slice<number>, hash: hash2.Hash | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	// See RFC 8017, Section 9.1.1.

	let hLen = (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let sLen = $.sliceLen(salt)
	let emLen = globalThis.Math.trunc((emBits + 7) / 8)

	// 1.  If the length of M is greater than the input limitation for the
	//     hash function (2^61 - 1 octets for SHA-1), output "message too
	//     long" and stop.
	//
	// 2.  Let mHash = Hash(M), an octet string of length hLen.

	if ($.sliceLen(mHash) != hLen) {
		return [null, errors.New("crypto/rsa: input must be hashed with given hash")]
	}

	// 3.  If emLen < hLen + sLen + 2, output "encoding error" and stop.

	if (emLen < ((hLen + sLen) + 2)) {
		return [null, __goscript_rsa.ErrMessageTooLong]
	}

	let em: $.Slice<number> = $.makeSlice<number>(emLen, undefined, "byte")
	let psLen = ((emLen - sLen) - hLen) - 2
	let db: $.Slice<number> = $.goSlice(em, undefined, (psLen + 1) + sLen)
	let h: $.Slice<number> = $.goSlice(em, (psLen + 1) + sLen, emLen - 1)

	// 4.  Generate a random octet string salt of length sLen; if sLen = 0,
	//     then salt is the empty string.
	//
	// 5.  Let
	//       M' = (0x)00 00 00 00 00 00 00 00 || mHash || salt;
	//
	//     M' is an octet string of length 8 + hLen + sLen with eight
	//     initial zero octets.
	//
	// 6.  Let H = Hash(M'), an octet string of length hLen.

	let prefix: Uint8Array = $.arrayValue(new Uint8Array(8))

	void (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Write($.goSlice(prefix, undefined, undefined))
	await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Write(mHash)
	await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Write(salt)

	h = await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Sum($.goSlice(h, undefined, 0))

	// 7.  Generate an octet string PS consisting of emLen - sLen - hLen - 2
	//     zero octets. The length of PS may be 0.
	//
	// 8.  Let DB = PS || 0x01 || salt; DB is an octet string of length
	//     emLen - hLen - 1.

	$.sliceElems(db!)[$.sliceSlot(db!, psLen)] = 0x01
	$.copy($.goSlice(db, psLen + 1, undefined), salt)

	// 9.  Let dbMask = MGF(H, emLen - hLen - 1).
	//
	// 10. Let maskedDB = DB \xor dbMask.

	await mgf1XOR(db, hash, h)

	// 11. Set the leftmost 8 * emLen - emBits bits of the leftmost octet in
	//     maskedDB to zero.

	$.sliceElems(db!)[$.sliceSlot(db!, 0)] = $.sliceElems(db!)[$.sliceSlot(db!, 0)] & ($.uint($.uintShr(0xff, ((8 * emLen) - emBits), 8), 8))

	// 12. Let EM = maskedDB || H || 0xbc.
	$.sliceElems(em!)[$.sliceSlot(em!, emLen - 1)] = 0xbc

	// 13. Output EM.
	return [em, null]
}

export async function emsaPSSVerify(mHash: $.Slice<number>, em: $.Slice<number>, emBits: number, sLen: number, hash: hash2.Hash | null): globalThis.Promise<$.GoError> {
	// See RFC 8017, Section 9.1.2.

	let hLen = (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let emLen = globalThis.Math.trunc((emBits + 7) / 8)
	if (emLen != $.sliceLen(em)) {
		return errors.New("rsa: internal error: inconsistent length")
	}

	// 1.  If the length of M is greater than the input limitation for the
	//     hash function (2^61 - 1 octets for SHA-1), output "inconsistent"
	//     and stop.
	//
	// 2.  Let mHash = Hash(M), an octet string of length hLen.
	if (hLen != $.sliceLen(mHash)) {
		return __goscript_rsa.ErrVerification
	}

	// 3.  If emLen < hLen + sLen + 2, output "inconsistent" and stop.
	if (emLen < ((hLen + sLen) + 2)) {
		return __goscript_rsa.ErrVerification
	}

	// 4.  If the rightmost octet of EM does not have hexadecimal value
	//     0xbc, output "inconsistent" and stop.
	if ($.arrayIndex(em!, emLen - 1) != 0xbc) {
		return __goscript_rsa.ErrVerification
	}

	// 5.  Let maskedDB be the leftmost emLen - hLen - 1 octets of EM, and
	//     let H be the next hLen octets.
	let db: $.Slice<number> = $.goSlice(em, undefined, (emLen - hLen) - 1)
	let h: $.Slice<number> = $.goSlice(em, (emLen - hLen) - 1, emLen - 1)

	// 6.  If the leftmost 8 * emLen - emBits bits of the leftmost octet in
	//     maskedDB are not all equal to zero, output "inconsistent" and
	//     stop.
	let bitMask: number = $.uint($.uintShr(0xff, ((8 * emLen) - emBits), 8), 8)
	if ($.uint(($.arrayIndex(em!, 0) & $.uint(~bitMask, 8)), 8) != 0) {
		return __goscript_rsa.ErrVerification
	}

	// 7.  Let dbMask = MGF(H, emLen - hLen - 1).
	//
	// 8.  Let DB = maskedDB \xor dbMask.
	await mgf1XOR(db, hash, h)

	// 9.  Set the leftmost 8 * emLen - emBits bits of the leftmost octet in DB
	//     to zero.
	$.sliceElems(db!)[$.sliceSlot(db!, 0)] = $.sliceElems(db!)[$.sliceSlot(db!, 0)] & (bitMask)

	// If we don't know the salt length, look for the 0x01 delimiter.
	if (sLen == -1) {
		let psLen = bytes.IndexByte(db, 0x01)
		if (psLen < 0) {
			return __goscript_rsa.ErrVerification
		}
		sLen = ($.sliceLen(db) - psLen) - 1
	}

	// FIPS 186-5, Section 5.4(g): "the length (in bytes) of the salt (sLen)
	// shall satisfy 0 ≤ sLen ≤ hLen".
	if (sLen > hLen) {
		fips140.RecordNonApproved()
	}

	// 10. If the emLen - hLen - sLen - 2 leftmost octets of DB are not zero
	//     or if the octet at position emLen - hLen - sLen - 1 (the leftmost
	//     position is "position 1") does not have hexadecimal value 0x01,
	//     output "inconsistent" and stop.
	let psLen = ((emLen - hLen) - sLen) - 2
	for (let __goscriptRangeTarget0 = $.goSlice(db, undefined, psLen), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let e = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
		if (e != 0x00) {
			return __goscript_rsa.ErrVerification
		}
	}
	if ($.arrayIndex(db!, psLen) != 0x01) {
		return __goscript_rsa.ErrVerification
	}

	// 11.  Let salt be the last sLen octets of DB.
	let salt: $.Slice<number> = $.goSlice(db, $.sliceLen(db) - sLen, undefined)

	// 12.  Let
	//          M' = (0x)00 00 00 00 00 00 00 00 || mHash || salt ;
	//     M' is an octet string of length 8 + hLen + sLen with eight
	//     initial zero octets.
	//
	// 13. Let H' = Hash(M'), an octet string of length hLen.
	void (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let prefix: Uint8Array = $.arrayValue(new Uint8Array(8))
	await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Write($.goSlice(prefix, undefined, undefined))
	await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Write(mHash)
	await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Write(salt)

	let h0: $.Slice<number> = await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Sum(null)

	// 14. If H = H', output "consistent." Otherwise, output "inconsistent."
	if (!bytes.Equal(h0, h)) {
		return __goscript_rsa.ErrVerification
	}
	return null
}

export async function PSSMaxSaltLength(pub: __goscript_rsa.PublicKey | $.VarRef<__goscript_rsa.PublicKey> | null, hash: hash2.Hash | null): globalThis.Promise<[number, $.GoError]> {
	let saltLength = ((globalThis.Math.trunc(((bigmod.Modulus.prototype.BitLen.call($.pointerValue<__goscript_rsa.PublicKey>(pub).N) - 1) + 7) / 8)) - 2) - (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (saltLength < 0) {
		return [0, __goscript_rsa.ErrMessageTooLong]
	}
	// FIPS 186-5, Section 5.4(g): "the length (in bytes) of the salt (sLen)
	// shall satisfy 0 ≤ sLen ≤ hLen".
	if (fips140.Enabled && (saltLength > (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
		return [(__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null]
	}
	return [saltLength, null]
}

export async function SignPSS(rand: io.Reader | null, priv: __goscript_rsa.PrivateKey | $.VarRef<__goscript_rsa.PrivateKey> | null, hash: hash2.Hash | null, hashed: $.Slice<number>, saltLength: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	const priv$: __goscript_rsa.PrivateKey = priv == null ? $.pointerTarget<__goscript_rsa.PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<__goscript_rsa.PrivateKey>(priv)
	void (__goscriptAwait = __goscript_cast.__goscript_get_fipsSelfTest()!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	checkApprovedHash(hash)

	// Note that while we don't commit to deterministic execution with respect
	// to the rand stream, we also never applied MaybeReadByte, so per Hyrum's
	// Law it's probably relied upon by some. It's a tolerable promise because a
	// well-specified number of random bytes is included in the signature, in a
	// well-specified way.

	if (saltLength < 0) {
		return [null, errors.New("crypto/rsa: salt length cannot be negative")]
	}
	// FIPS 186-5, Section 5.4(g): "the length (in bytes) of the salt (sLen)
	// shall satisfy 0 ≤ sLen ≤ hLen".
	if (saltLength > (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		fips140.RecordNonApproved()
	}
	let salt: $.Slice<number> = $.makeSlice<number>(saltLength, undefined, "byte")
	{
		let err = await drbg.ReadWithReader(rand, salt)
		if (err != null) {
			return [null, err]
		}
	}

	let emBits = bigmod.Modulus.prototype.BitLen.call((priv$ as __goscript_rsa.PrivateKey).pub.N) - 1
	let __goscriptTuple0: any = await emsaPSSEncode(hashed, emBits, salt, hash)
	let em: $.Slice<number> = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}

	// RFC 8017: "Note that the octet length of EM will be one less than k if
	// modBits - 1 is divisible by 8 and equal to k otherwise, where k is the
	// length in octets of the RSA modulus n." 🙄
	//
	// This is extremely annoying, as all other encrypt and decrypt inputs are
	// always the exact same size as the modulus. Since it only happens for
	// weird modulus sizes, fix it by padding inefficiently.
	{
		let emLen = $.sliceLen(em)
		let k = (priv$ as __goscript_rsa.PrivateKey).pub.Size()
		if (emLen < k) {
			let emNew: $.Slice<number> = $.makeSlice<number>(k, undefined, "byte")
			$.copy($.goSlice(emNew, k - emLen, undefined), em)
			em = emNew
		}
	}

	return __goscript_rsa.decrypt(priv, em, true)
}

export async function VerifyPSS(pub: __goscript_rsa.PublicKey | $.VarRef<__goscript_rsa.PublicKey> | null, hash: hash2.Hash | null, digest: $.Slice<number>, sig: $.Slice<number>): globalThis.Promise<$.GoError> {
	return verifyPSS(pub, hash, digest, sig, -1)
}

export async function VerifyPSSWithSaltLength(pub: __goscript_rsa.PublicKey | $.VarRef<__goscript_rsa.PublicKey> | null, hash: hash2.Hash | null, digest: $.Slice<number>, sig: $.Slice<number>, saltLength: number): globalThis.Promise<$.GoError> {
	if (saltLength < 0) {
		return errors.New("crypto/rsa: salt length cannot be negative")
	}
	return verifyPSS(pub, hash, digest, sig, saltLength)
}

export async function verifyPSS(pub: __goscript_rsa.PublicKey | $.VarRef<__goscript_rsa.PublicKey> | null, hash: hash2.Hash | null, digest: $.Slice<number>, sig: $.Slice<number>, saltLength: number): globalThis.Promise<$.GoError> {
	void (__goscriptAwait = __goscript_cast.__goscript_get_fipsSelfTest()!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	checkApprovedHash(hash)
	{
		let [fipsApproved, err] = __goscript_rsa.checkPublicKey(pub)
		if (err != null) {
			return err
		} else {
			if (!fipsApproved) {
				fips140.RecordNonApproved()
			}
		}
	}

	if ($.sliceLen(sig) != (pub !== null && (pub as any).__isVarRef !== true && (pub as any).__goValue === undefined ? ((pub as any) as __goscript_rsa.PublicKey).Size() : __goscript_rsa.PublicKey.prototype.Size.call(pub))) {
		return __goscript_rsa.ErrVerification
	}

	let emBits = bigmod.Modulus.prototype.BitLen.call($.pointerValue<__goscript_rsa.PublicKey>(pub).N) - 1
	let emLen = globalThis.Math.trunc((emBits + 7) / 8)
	let __goscriptTuple1: any = __goscript_rsa.encrypt(pub, sig)
	let em: $.Slice<number> = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (err != null) {
		return __goscript_rsa.ErrVerification
	}

	// Like in signPSSWithSalt, deal with mismatches between emLen and the size
	// of the modulus. The spec would have us wire emLen into the encoding
	// function, but we'd rather always encode to the size of the modulus and
	// then strip leading zeroes if necessary. This only happens for weird
	// modulus sizes anyway.
	while (($.sliceLen(em) > emLen) && ($.sliceLen(em) > 0)) {
		if ($.arrayIndex(em!, 0) != 0) {
			return __goscript_rsa.ErrVerification
		}
		em = $.goSlice(em, 1, undefined)
	}

	return emsaPSSVerify(digest, em, emBits, saltLength, hash)
}

export function checkApprovedHash(hash: hash2.Hash | null): void {
	{
		const __goscriptTypeSwitchValue = hash
		switch (true) {
			case $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("sha256.Digest")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("sha512.Digest")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("sha3.Digest")):
				{
				}
				break
			default:
				{
					fips140.RecordNonApproved()
				}
				break
		}
	}
}

export async function EncryptOAEP(hash: hash2.Hash | null, mgfHash: hash2.Hash | null, random: io.Reader | null, pub: __goscript_rsa.PublicKey | $.VarRef<__goscript_rsa.PublicKey> | null, msg: $.Slice<number>, label: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	// Note that while we don't commit to deterministic execution with respect
	// to the random stream, we also never applied MaybeReadByte, so per Hyrum's
	// Law it's probably relied upon by some. It's a tolerable promise because a
	// well-specified number of random bytes is included in the ciphertext, in a
	// well-specified way.

	void (__goscriptAwait = __goscript_cast.__goscript_get_fipsSelfTest()!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	checkApprovedHash(hash)
	{
		let [fipsApproved, err] = __goscript_rsa.checkPublicKey(pub)
		if (err != null) {
			return [null, err]
		} else {
			if (!fipsApproved) {
				fips140.RecordNonApproved()
			}
		}
	}
	let k = (pub !== null && (pub as any).__isVarRef !== true && (pub as any).__goValue === undefined ? ((pub as any) as __goscript_rsa.PublicKey).Size() : __goscript_rsa.PublicKey.prototype.Size.call(pub))
	if ($.sliceLen(msg) > ((k - (2 * (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) - 2)) {
		return [null, __goscript_rsa.ErrMessageTooLong]
	}

	void (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Write(label)
	let lHash: $.Slice<number> = await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Sum(null)

	let em: $.Slice<number> = $.makeSlice<number>(k, undefined, "byte")
	let seed: $.Slice<number> = $.goSlice(em, 1, 1 + (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	let db: $.Slice<number> = $.goSlice(em, 1 + (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined)

	$.copy($.goSlice(db, 0, (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), lHash)
	$.sliceElems(db!)[$.sliceSlot(db!, ($.sliceLen(db) - $.sliceLen(msg)) - 1)] = 1
	$.copy($.goSlice(db, $.sliceLen(db) - $.sliceLen(msg), undefined), msg)

	{
		let err = await drbg.ReadWithReader(random, seed)
		if (err != null) {
			return [null, err]
		}
	}

	await mgf1XOR(db, mgfHash, seed)
	await mgf1XOR(seed, mgfHash, db)

	return __goscript_rsa.encrypt(pub, em)
}

export async function DecryptOAEP(hash: hash2.Hash | null, mgfHash: hash2.Hash | null, priv: __goscript_rsa.PrivateKey | $.VarRef<__goscript_rsa.PrivateKey> | null, ciphertext: $.Slice<number>, label: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	void (__goscriptAwait = __goscript_cast.__goscript_get_fipsSelfTest()!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	checkApprovedHash(hash)

	let k = $.pointerValue<__goscript_rsa.PrivateKey>(priv).pub.Size()
	if (($.sliceLen(ciphertext) > k) || (k < (((__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) * 2) + 2))) {
		return [null, __goscript_rsa.ErrDecryption]
	}

	let __goscriptTuple2: any = __goscript_rsa.decrypt(priv, ciphertext, false)
	let em: $.Slice<number> = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if (err != null) {
		return [null, err]
	}

	void (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Write(label)
	let lHash: $.Slice<number> = await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Sum(null)

	let firstByteIsZero = constanttime.ByteEq($.arrayIndex(em!, 0), 0)

	let seed: $.Slice<number> = $.goSlice(em, 1, (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) + 1)
	let db: $.Slice<number> = $.goSlice(em, (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) + 1, undefined)

	await mgf1XOR(seed, mgfHash, db)
	await mgf1XOR(db, mgfHash, seed)

	let lHash2: $.Slice<number> = $.goSlice(db, 0, (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))

	// We have to validate the plaintext in constant time in order to avoid
	// attacks like: J. Manger. A Chosen Ciphertext Attack on RSA Optimal
	// Asymmetric Encryption Padding (OAEP) as Standardized in PKCS #1
	// v2.0. In J. Kilian, editor, Advances in Cryptology.
	let lHash2Good = subtle.ConstantTimeCompare(lHash, lHash2)

	// The remainder of the plaintext must be zero or more 0x00, followed
	// by 0x01, followed by the message.
	//   lookingForIndex: 1 iff we are still looking for the 0x01
	//   index: the offset of the first 0x01 byte
	//   invalid: 1 iff we saw a non-zero byte before the 0x01.
	let lookingForIndex: number = 0
	let index: number = 0
	let invalid: number = 0
	lookingForIndex = 1
	let rest: $.Slice<number> = $.goSlice(db, (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined)

	for (let __goscriptSliceWindow2 = $.sliceRange(rest), i = 0; i < __goscriptSliceWindow2.length; i++) {
		let equals0 = constanttime.ByteEq(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as number), 0)
		let equals1 = constanttime.ByteEq(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as number), 1)
		index = constanttime.Select(lookingForIndex & equals1, i, index)
		lookingForIndex = constanttime.Select(equals1, 0, lookingForIndex)
		invalid = constanttime.Select(lookingForIndex & ~(equals0), 1, invalid)
	}

	if ((((firstByteIsZero & lHash2Good) & ~(invalid)) & ~(lookingForIndex)) != 1) {
		return [null, __goscript_rsa.ErrDecryption]
	}

	return [$.goSlice(rest, index + 1, undefined), null]
}

var __goscriptAwait: any
