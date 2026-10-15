// Generated file based on ecdsa_legacy.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as elliptic from "@goscript/crypto/elliptic/index.js"

import * as fips140only from "@goscript/crypto/internal/fips140only/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as big from "@goscript/math/big/index.js"

import * as rand2 from "@goscript/math/rand/v2/index.js"

import * as cryptobyte from "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"

import * as asn1 from "@goscript/vendor/golang.org/x/crypto/cryptobyte/asn1/index.js"

import type * as crypto from "@goscript/crypto/index.js"

import type * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as __goscript_ecdsa from "./ecdsa.gs.ts"
import "@goscript/crypto/elliptic/index.js"
import "@goscript/crypto/internal/fips140only/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/math/big/index.js"
import "@goscript/math/rand/v2/index.js"
import "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"
import "@goscript/vendor/golang.org/x/crypto/cryptobyte/asn1/index.js"
import "./ecdsa.gs.ts"

export async function generateLegacy(c: elliptic.Curve | null, rand: io.Reader | null): globalThis.Promise<[__goscript_ecdsa.PrivateKey | $.VarRef<__goscript_ecdsa.PrivateKey> | null, $.GoError]> {
	if (fips140only.Enforced()) {
		return [null, errors.New("crypto/ecdsa: use of custom curves is not allowed in FIPS 140-only mode")]
	}

	let __goscriptTuple0: any = await randFieldElement(c, rand)
	let k: big.Int | $.VarRef<big.Int> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}

	let priv: __goscript_ecdsa.PrivateKey | $.VarRef<__goscript_ecdsa.PrivateKey> | null = new __goscript_ecdsa.PrivateKey()
	let priv$: __goscript_ecdsa.PrivateKey = priv == null ? $.pointerTarget<__goscript_ecdsa.PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<__goscript_ecdsa.PrivateKey>(priv);
	;(priv$ as __goscript_ecdsa.PrivateKey).PublicKey.Curve = c;
	;(priv$ as __goscript_ecdsa.PrivateKey).D = k
	let __goscriptTuple1: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<elliptic.Curve, null>) : $.pointerValue<Exclude<elliptic.Curve, null>>(c)).ScalarBaseMult((k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as big.Int).Bytes() : big.Int.prototype.Bytes.call(k)));
	;(priv$ as __goscript_ecdsa.PrivateKey).PublicKey.X = __goscriptTuple1[0];
	;(priv$ as __goscript_ecdsa.PrivateKey).PublicKey.Y = __goscriptTuple1[1]
	return [priv, null]
}

export async function hashToInt(hash: $.Slice<number>, c: elliptic.Curve | null): globalThis.Promise<big.Int | $.VarRef<big.Int> | null> {
	let orderBits = big.Int.prototype.BitLen.call($.pointerValue<elliptic.CurveParams>(((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<elliptic.Curve, null>) : $.pointerValue<Exclude<elliptic.Curve, null>>(c)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null)).N)
	let orderBytes = globalThis.Math.trunc((orderBits + 7) / 8)
	if ($.sliceLen(hash) > orderBytes) {
		hash = $.goSlice(hash, undefined, orderBytes)
	}

	let ret: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.SetBytes.call(new big.Int(), hash)
	let excess = ($.sliceLen(hash) * 8) - orderBits
	if (excess > 0) {
		void (ret !== null && (ret as any).__isVarRef !== true && (ret as any).__goValue === undefined ? ((ret as any) as big.Int).Rsh(ret, $.uint(excess, 64)) : big.Int.prototype.Rsh.call(ret, ret, $.uint(excess, 64)))
	}
	return ret
}

export let errZeroParam: $.GoError = errors.New("zero parameter")

export function __goscript_set_errZeroParam(__goscriptValue: $.GoError): void {
	errZeroParam = __goscriptValue
}

export async function Sign(rand: io.Reader | null, priv: __goscript_ecdsa.PrivateKey | $.VarRef<__goscript_ecdsa.PrivateKey> | null, hash: $.Slice<number>): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null, $.GoError]> {
	let r: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
	let s: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple2: any = await __goscript_ecdsa.SignASN1(rand, priv, hash)
	let sig: $.Slice<number> = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	if (err != null) {
		return [null, null, err]
	}

	let __goscriptAssign0_0: big.Int | $.VarRef<big.Int> | null = new big.Int()
	let __goscriptAssign0_1: big.Int | $.VarRef<big.Int> | null = new big.Int()
	r = __goscriptAssign0_0
	s = __goscriptAssign0_1
	let inner: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	let input: $.VarRef<cryptobyte.String> = $.varRef(((sig as cryptobyte.String) as cryptobyte.String))
	if ((((!cryptobyte.String_ReadASN1(input, inner, 48) || !cryptobyte.String_Empty(input.value)) || !cryptobyte.String_ReadASN1Integer(inner, $.interfaceValue(r, "*big.Int", /* @__PURE__ */ $.pointerType("big.Int")))) || !cryptobyte.String_ReadASN1Integer(inner, $.interfaceValue(s, "*big.Int", /* @__PURE__ */ $.pointerType("big.Int")))) || !cryptobyte.String_Empty(inner.value)) {
		return [null, null, errors.New("invalid ASN.1 from SignASN1")]
	}
	return [r, s, null]
}

export async function signLegacy(priv: __goscript_ecdsa.PrivateKey | $.VarRef<__goscript_ecdsa.PrivateKey> | null, csprng: io.Reader | null, hash: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let sig: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	const priv$: __goscript_ecdsa.PrivateKey = priv == null ? $.pointerTarget<__goscript_ecdsa.PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<__goscript_ecdsa.PrivateKey>(priv)
	if (fips140only.Enforced()) {
		return [null, errors.New("crypto/ecdsa: use of custom curves is not allowed in FIPS 140-only mode")]
	}

	let c = (priv$ as __goscript_ecdsa.PrivateKey).PublicKey.Curve

	// A cheap version of hedged signatures, for the deprecated path.
	let seed: Uint8Array = $.arrayValue(new Uint8Array(32))
	{
		let [, __goscriptShadow0] = await io.ReadFull($.pointerValueOrNil(csprng)!, $.goSlice(seed, undefined, undefined))
		if (__goscriptShadow0 != null) {
			return [null, __goscriptShadow0]
		}
	}
	for (let __goscriptRangeTarget0 = big.Int.prototype.Bytes.call((priv$ as __goscript_ecdsa.PrivateKey).D), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let b = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as number), 8)
		seed[i % 32] = seed[i % 32] ^ (b)
	}
	for (let __goscriptRangeTarget1 = hash, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let b = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as number), 8)
		seed[i % 32] = seed[i % 32] ^ (b)
	}
	csprng = $.interfaceValue<io.Reader | null>(rand2.NewChaCha8($.cloneArrayValue(seed, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))), "*rand.ChaCha8", /* @__PURE__ */ $.pointerType("rand.ChaCha8"))

	// SEC 1, Version 2.0, Section 4.1.3
	let N: big.Int | $.VarRef<big.Int> | null = $.pointerValue<elliptic.CurveParams>(((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<elliptic.Curve, null>) : $.pointerValue<Exclude<elliptic.Curve, null>>(c)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null)).N
	if ((N !== null && (N as any).__isVarRef !== true && (N as any).__goValue === undefined ? ((N as any) as big.Int).Sign() : big.Int.prototype.Sign.call(N)) == 0) {
		return [null, errZeroParam]
	}
	let k: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
	let kInv: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
	let r: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
	let s: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
	while (true) {
		while (true) {
			let __goscriptTuple3: any = await randFieldElement(c, csprng)
			k = __goscriptTuple3[0]
			err = __goscriptTuple3[1]
			if (err != null) {
				return [null, err]
			}

			kInv = await big.Int.prototype.ModInverse.call(new big.Int(), k, N)

			let __goscriptTuple4: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<elliptic.Curve, null>) : $.pointerValue<Exclude<elliptic.Curve, null>>(c)).ScalarBaseMult((k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as big.Int).Bytes() : big.Int.prototype.Bytes.call(k)))
			r = __goscriptTuple4[0]
			await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as big.Int).Mod(r, N) : big.Int.prototype.Mod.call(r, r, N))
			if ((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as big.Int).Sign() : big.Int.prototype.Sign.call(r)) != 0) {
				break
			}
		}

		let e: big.Int | $.VarRef<big.Int> | null = await hashToInt(hash, c)
		s = await big.Int.prototype.Mul.call(new big.Int(), (priv$ as __goscript_ecdsa.PrivateKey).D, r)
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).Add(s, e) : big.Int.prototype.Add.call(s, s, e))
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).Mul(s, kInv) : big.Int.prototype.Mul.call(s, s, kInv))
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).Mod(s, N) : big.Int.prototype.Mod.call(s, s, N))
		if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).Sign() : big.Int.prototype.Sign.call(s)) != 0) {
			break
		}
	}

	return __goscript_ecdsa.encodeSignature((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as big.Int).Bytes() : big.Int.prototype.Bytes.call(r)), (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).Bytes() : big.Int.prototype.Bytes.call(s)))
}

export async function Verify(pub: __goscript_ecdsa.PublicKey | $.VarRef<__goscript_ecdsa.PublicKey> | null, hash: $.Slice<number>, r: big.Int | $.VarRef<big.Int> | null, s: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<boolean> {
	if (((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as big.Int).Sign() : big.Int.prototype.Sign.call(r)) <= 0) || ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).Sign() : big.Int.prototype.Sign.call(s)) <= 0)) {
		return false
	}
	let __goscriptTuple5: any = await __goscript_ecdsa.encodeSignature((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as big.Int).Bytes() : big.Int.prototype.Bytes.call(r)), (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).Bytes() : big.Int.prototype.Bytes.call(s)))
	let sig: $.Slice<number> = __goscriptTuple5[0]
	let err = __goscriptTuple5[1]
	if (err != null) {
		return false
	}
	return __goscript_ecdsa.VerifyASN1(pub, hash, sig)
}

export async function verifyLegacy(pub: __goscript_ecdsa.PublicKey | $.VarRef<__goscript_ecdsa.PublicKey> | null, hash: $.Slice<number>, sig: $.Slice<number>): globalThis.Promise<boolean> {
	const pub$: __goscript_ecdsa.PublicKey = pub == null ? $.pointerTarget<__goscript_ecdsa.PublicKey>(pub) : (pub as any).__isVarRef === true ? (pub as any).value : (pub as any).__goValue === undefined ? (pub as any) : $.pointerTarget<__goscript_ecdsa.PublicKey>(pub)
	if (fips140only.Enforced()) {
		$.panic("crypto/ecdsa: use of custom curves is not allowed in FIPS 140-only mode")
	}

	let __goscriptTuple6: any = __goscript_ecdsa.parseSignature(sig)
	let rBytes: $.Slice<number> = __goscriptTuple6[0]
	let sBytes: $.Slice<number> = __goscriptTuple6[1]
	let err = __goscriptTuple6[2]
	if (err != null) {
		return false
	}
	let r: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.SetBytes.call(new big.Int(), rBytes)
	let s: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.SetBytes.call(new big.Int(), sBytes)

	let c = (pub$ as __goscript_ecdsa.PublicKey).Curve
	let N: big.Int | $.VarRef<big.Int> | null = $.pointerValue<elliptic.CurveParams>(((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<elliptic.Curve, null>) : $.pointerValue<Exclude<elliptic.Curve, null>>(c)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null)).N

	if (((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as big.Int).Sign() : big.Int.prototype.Sign.call(r)) <= 0) || ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).Sign() : big.Int.prototype.Sign.call(s)) <= 0)) {
		return false
	}
	if (((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as big.Int).Cmp(N) : big.Int.prototype.Cmp.call(r, N)) >= 0) || ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).Cmp(N) : big.Int.prototype.Cmp.call(s, N)) >= 0)) {
		return false
	}

	// SEC 1, Version 2.0, Section 4.1.4
	let e: big.Int | $.VarRef<big.Int> | null = await hashToInt(hash, c)
	let w: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.ModInverse.call(new big.Int(), s, N)

	let u1: big.Int | $.VarRef<big.Int> | null = await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as big.Int).Mul(e, w) : big.Int.prototype.Mul.call(e, e, w))
	await (u1 !== null && (u1 as any).__isVarRef !== true && (u1 as any).__goValue === undefined ? ((u1 as any) as big.Int).Mod(u1, N) : big.Int.prototype.Mod.call(u1, u1, N))
	let u2: big.Int | $.VarRef<big.Int> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as big.Int).Mul(r, w) : big.Int.prototype.Mul.call(w, r, w))
	await (u2 !== null && (u2 as any).__isVarRef !== true && (u2 as any).__goValue === undefined ? ((u2 as any) as big.Int).Mod(u2, N) : big.Int.prototype.Mod.call(u2, u2, N))

	let __goscriptTuple7: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<elliptic.Curve, null>) : $.pointerValue<Exclude<elliptic.Curve, null>>(c)).ScalarBaseMult((u1 !== null && (u1 as any).__isVarRef !== true && (u1 as any).__goValue === undefined ? ((u1 as any) as big.Int).Bytes() : big.Int.prototype.Bytes.call(u1)))
	let x1: big.Int | $.VarRef<big.Int> | null = __goscriptTuple7[0]
	let y1: big.Int | $.VarRef<big.Int> | null = __goscriptTuple7[1]
	let __goscriptTuple8: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<elliptic.Curve, null>) : $.pointerValue<Exclude<elliptic.Curve, null>>(c)).ScalarMult((pub$ as __goscript_ecdsa.PublicKey).X, (pub$ as __goscript_ecdsa.PublicKey).Y, (u2 !== null && (u2 as any).__isVarRef !== true && (u2 as any).__goValue === undefined ? ((u2 as any) as big.Int).Bytes() : big.Int.prototype.Bytes.call(u2)))
	let x2: big.Int | $.VarRef<big.Int> | null = __goscriptTuple8[0]
	let y2: big.Int | $.VarRef<big.Int> | null = __goscriptTuple8[1]
	let __goscriptTuple9: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<elliptic.Curve, null>) : $.pointerValue<Exclude<elliptic.Curve, null>>(c)).Add(x1, y1, x2, y2)
	let x: big.Int | $.VarRef<big.Int> | null = __goscriptTuple9[0]
	let y: big.Int | $.VarRef<big.Int> | null = __goscriptTuple9[1]

	if (((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).Sign() : big.Int.prototype.Sign.call(x)) == 0) && ((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).Sign() : big.Int.prototype.Sign.call(y)) == 0)) {
		return false
	}
	await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).Mod(x, N) : big.Int.prototype.Mod.call(x, x, N))
	return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).Cmp(r) : big.Int.prototype.Cmp.call(x, r)) == 0
}

export let one: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.SetInt64.call(new big.Int(), 1n)

export function __goscript_set_one(__goscriptValue: big.Int | $.VarRef<big.Int> | null): void {
	one = __goscriptValue
}

export async function randFieldElement(c: elliptic.Curve | null, rand: io.Reader | null): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, $.GoError]> {
	let k: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
	let err: $.GoError = null! as $.GoError
	while (true) {
		let N: big.Int | $.VarRef<big.Int> | null = $.pointerValue<elliptic.CurveParams>(((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<elliptic.Curve, null>) : $.pointerValue<Exclude<elliptic.Curve, null>>(c)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null)).N
		let b: $.Slice<number> = $.makeSlice<number>(globalThis.Math.trunc(((N !== null && (N as any).__isVarRef !== true && (N as any).__goValue === undefined ? ((N as any) as big.Int).BitLen() : big.Int.prototype.BitLen.call(N)) + 7) / 8), undefined, "byte")
		{
			let __goscriptTuple10: any = await io.ReadFull($.pointerValueOrNil(rand)!, b)
			err = __goscriptTuple10[1]
			if (err != null) {
				return [k, err]
			}
		}
		{
			let excess = ($.sliceLen(b) * 8) - (N !== null && (N as any).__isVarRef !== true && (N as any).__goValue === undefined ? ((N as any) as big.Int).BitLen() : big.Int.prototype.BitLen.call(N))
			if (excess > 0) {
				$.sliceElems(b!)[$.sliceSlot(b!, 0)] = ($.sliceElems(b!)[$.sliceSlot(b!, 0)] >>> ($.uint(excess, 8))) >>> 0
			}
		}
		k = big.Int.prototype.SetBytes.call(new big.Int(), b)
		if (((k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as big.Int).Sign() : big.Int.prototype.Sign.call(k)) != 0) && ((k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as big.Int).Cmp(N) : big.Int.prototype.Cmp.call(k, N)) < 0)) {
			return [k, err]
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptAwait: any
