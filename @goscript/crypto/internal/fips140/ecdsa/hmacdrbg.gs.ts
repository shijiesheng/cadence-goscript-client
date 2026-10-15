// Generated file based on hmacdrbg.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as hmac from "@goscript/crypto/internal/fips140/hmac/index.js"

import * as hash2 from "@goscript/hash/index.js"

import type * as io from "@goscript/io/index.js"
import "@goscript/bytes/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/hmac/index.js"
import "@goscript/hash/index.js"

$.registerTypePackagePath("crypto/internal/fips140/ecdsa", ["ecdsa.hmacDRBG", "ecdsa.plainPersonalizationString", "ecdsa.blockAlignedPersonalizationString", "ecdsa.personalizationString"])

export type plainPersonalizationString = $.Slice<number>

$.registerNamedType("ecdsa.plainPersonalizationString", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"ecdsa.plainPersonalizationString",
	{isPersonalizationString: (receiver: any, ...args: any[]) => (plainPersonalizationString_isPersonalizationString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("isPersonalizationString")]
);

$.registerNamedValueType(
	"*ecdsa.plainPersonalizationString",
	{isPersonalizationString: (receiver: any, ...args: any[]) => (plainPersonalizationString_isPersonalizationString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("isPersonalizationString")]
);

export type blockAlignedPersonalizationString = $.Slice<$.Slice<number>>

$.registerNamedType("ecdsa.blockAlignedPersonalizationString", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))));

$.registerNamedValueType(
	"ecdsa.blockAlignedPersonalizationString",
	{isPersonalizationString: (receiver: any, ...args: any[]) => (blockAlignedPersonalizationString_isPersonalizationString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("isPersonalizationString")]
);

$.registerNamedValueType(
	"*ecdsa.blockAlignedPersonalizationString",
	{isPersonalizationString: (receiver: any, ...args: any[]) => (blockAlignedPersonalizationString_isPersonalizationString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("isPersonalizationString")]
);

export type personalizationString = {
	isPersonalizationString(): void
}

$.registerInterfaceType(
	"ecdsa.personalizationString",
	null,
	[$.methodSignature("isPersonalizationString")]
);

export class hmacDRBG {
	public get newHMAC(): ((key: $.Slice<number>) => hmac.HMAC | $.VarRef<hmac.HMAC> | null | globalThis.Promise<hmac.HMAC | $.VarRef<hmac.HMAC> | null>) | null {
		return this._fields.newHMAC
	}

	public set newHMAC(value: ((key: $.Slice<number>) => hmac.HMAC | $.VarRef<hmac.HMAC> | null | globalThis.Promise<hmac.HMAC | $.VarRef<hmac.HMAC> | null>) | null) {
		this._fields.newHMAC = value
	}

	public get hK(): hmac.HMAC | $.VarRef<hmac.HMAC> | null {
		return this._fields.hK
	}

	public set hK(value: hmac.HMAC | $.VarRef<hmac.HMAC> | null) {
		this._fields.hK = value
	}

	public get V(): $.Slice<number> {
		return this._fields.V
	}

	public set V(value: $.Slice<number>) {
		this._fields.V = value
	}

	public get reseedCounter(): bigint {
		return this._fields.reseedCounter
	}

	public set reseedCounter(value: bigint) {
		this._fields.reseedCounter = value
	}

	public _fields: {
		newHMAC: ((key: $.Slice<number>) => hmac.HMAC | $.VarRef<hmac.HMAC> | null | globalThis.Promise<hmac.HMAC | $.VarRef<hmac.HMAC> | null>) | null
		hK: hmac.HMAC | $.VarRef<hmac.HMAC> | null
		V: $.Slice<number>
		reseedCounter: bigint
	}

	constructor(init?: Partial<{newHMAC?: ((key: $.Slice<number>) => hmac.HMAC | $.VarRef<hmac.HMAC> | null | globalThis.Promise<hmac.HMAC | $.VarRef<hmac.HMAC> | null>) | null, hK?: hmac.HMAC | $.VarRef<hmac.HMAC> | null, V?: $.Slice<number>, reseedCounter?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			newHMAC: init?.newHMAC ?? (null! as ((key: $.Slice<number>) => hmac.HMAC | $.VarRef<hmac.HMAC> | null | globalThis.Promise<hmac.HMAC | $.VarRef<hmac.HMAC> | null>) | null),
			hK: init?.hK ?? (null! as hmac.HMAC | $.VarRef<hmac.HMAC> | null),
			V: init?.V ?? (null! as $.Slice<number>),
			reseedCounter: init?.reseedCounter ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): hmacDRBG {
		return new hmacDRBG(this, true)
	}

	public __goscriptAssign(source: hmacDRBG): void {
		const target = this._fields
		const values = source._fields
		target.newHMAC = values.newHMAC
		target.hK = values.hK
		target.V = values.V
		target.reseedCounter = values.reseedCounter
	}

	public async Generate(out: $.Slice<number>): globalThis.Promise<void> {
		let d: hmacDRBG | $.VarRef<hmacDRBG> | null = this;
		const d$: hmacDRBG = d == null ? $.pointerTarget<hmacDRBG>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<hmacDRBG>(d)
		// HMAC_DRBG_Generate_algorithm, per Section 10.1.2.5.
		fips140.RecordApproved()

		if ($.sliceLen(out) > 65536) {
			$.panic("ecdsa: internal error: request size exceeds maximum")
		}

		if ((d$ as hmacDRBG).reseedCounter > 281474976710656n) {
			$.panic("ecdsa: reseed interval exceeded")
		}

		let tlen = 0
		while (tlen < $.sliceLen(out)) {
			// V = HMAC_K(V)
			// T = T || V
			await hmac.HMAC.prototype.Reset.call((d$ as hmacDRBG).hK)
			await hmac.HMAC.prototype.Write.call((d$ as hmacDRBG).hK, (d$ as hmacDRBG).V);
			;(d$ as hmacDRBG).V = await hmac.HMAC.prototype.Sum.call((d$ as hmacDRBG).hK, $.goSlice((d$ as hmacDRBG).V, undefined, 0))
			tlen = tlen + ($.copy($.goSlice(out, tlen, undefined), (d$ as hmacDRBG).V))
		}

		// Note that if this function shows up on ECDSA-level profiles, this can be
		// optimized in the common case by deferring the rest to the next Generate
		// call, which will never come in nearly all cases.

		// HMAC_DRBG_Update, per Section 10.1.2.2, without provided_data.
		// K = HMAC (K, V || 0x00)
		await hmac.HMAC.prototype.Reset.call((d$ as hmacDRBG).hK)
		await hmac.HMAC.prototype.Write.call((d$ as hmacDRBG).hK, (d$ as hmacDRBG).V)
		await hmac.HMAC.prototype.Write.call((d$ as hmacDRBG).hK, new Uint8Array([0]) as $.Slice<number>)
		let K: $.Slice<number> = await hmac.HMAC.prototype.Sum.call((d$ as hmacDRBG).hK, null);
		// V = HMAC (K, V)
		;(d$ as hmacDRBG).hK = ((__goscriptAwait = (d$ as hmacDRBG).newHMAC!(K), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as hmac.HMAC | $.VarRef<hmac.HMAC> | null)
		await hmac.HMAC.prototype.Write.call((d$ as hmacDRBG).hK, (d$ as hmacDRBG).V);
		;(d$ as hmacDRBG).V = await hmac.HMAC.prototype.Sum.call((d$ as hmacDRBG).hK, $.goSlice((d$ as hmacDRBG).V, undefined, 0));

		;(d$ as hmacDRBG).reseedCounter++
	}

	static __typeInfo = $.registerStructType(
		"ecdsa.hmacDRBG",
		() => new hmacDRBG(),
		() => [$.methodSignature("Generate", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true)],
		hmacDRBG,
		() => [/* @__PURE__ */ $.structField("newHMAC", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.pointerType("hmac.HMAC")] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "crypto/internal/fips140/ecdsa" }), /* @__PURE__ */ $.structField("hK", /* @__PURE__ */ $.pointerType("hmac.HMAC"), [1], 8, false, { pkgPath: "crypto/internal/fips140/ecdsa" }), /* @__PURE__ */ $.structField("V", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("reseedCounter", /* @__PURE__ */ $.basicType("uint64"), [3], 40, false, { pkgPath: "crypto/internal/fips140/ecdsa" })]
	)
}

export const reseedInterval: number = 281474976710656

export const maxRequestSize: number = 65536

export function plainPersonalizationString_isPersonalizationString(recv: plainPersonalizationString): void {
}

export function blockAlignedPersonalizationString_isPersonalizationString(recv: blockAlignedPersonalizationString): void {
}

export async function newDRBG(__typeArgs: $.GenericTypeArgs | undefined, hash: (() => any | globalThis.Promise<any>) | null, entropy: $.Slice<number>, nonce: $.Slice<number>, s: personalizationString | null): globalThis.Promise<hmacDRBG | $.VarRef<hmacDRBG> | null> {
	// HMAC_DRBG_Instantiate_algorithm, per Section 10.1.2.3.
	fips140.RecordApproved()

	let d: hmacDRBG | $.VarRef<hmacDRBG> | null = new hmacDRBG({newHMAC: $.functionValue(async (key: $.Slice<number>): globalThis.Promise<hmac.HMAC | $.VarRef<hmac.HMAC> | null> => {
		return await hmac.New({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, hash, key)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.pointerType("hmac.HMAC")] } as $.FunctionTypeInfo))})
	let d$: hmacDRBG = d == null ? $.pointerTarget<hmacDRBG>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<hmacDRBG>(d)
	let size = (__goscriptAwait = $.callGenericMethod(__typeArgs, "H", "Size", (__goscriptAwait = hash!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	// K = 0x00 0x00 0x00 ... 0x00
	let K: $.Slice<number> = $.makeSlice<number>(size, undefined, "byte");

	// V = 0x01 0x01 0x01 ... 0x01
	;(d$ as hmacDRBG).V = bytes.Repeat(new Uint8Array([1]) as $.Slice<number>, size)

	// HMAC_DRBG_Update, per Section 10.1.2.2.
	// K = HMAC (K, V || 0x00 || provided_data)
	let h: hmac.HMAC | $.VarRef<hmac.HMAC> | null = await hmac.New({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, hash, K)
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write((d$ as hmacDRBG).V) : hmac.HMAC.prototype.Write.call(h, (d$ as hmacDRBG).V))
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write(new Uint8Array([0]) as $.Slice<number>) : hmac.HMAC.prototype.Write.call(h, new Uint8Array([0]) as $.Slice<number>))
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write(entropy) : hmac.HMAC.prototype.Write.call(h, entropy))
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write(nonce) : hmac.HMAC.prototype.Write.call(h, nonce))
	{
		const __goscriptTypeSwitchValue = s
		switch (true) {
			case $.typeAssert<plainPersonalizationString>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ecdsa.plainPersonalizationString")).ok:
				{
					let s: plainPersonalizationString = $.typeAssert<plainPersonalizationString>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ecdsa.plainPersonalizationString")).value
					await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write(s) : hmac.HMAC.prototype.Write.call(h, s))
				}
				break
			case $.typeAssert<blockAlignedPersonalizationString>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "ecdsa.blockAlignedPersonalizationString")).ok:
				{
					let s: blockAlignedPersonalizationString = $.typeAssert<blockAlignedPersonalizationString>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "ecdsa.blockAlignedPersonalizationString")).value
					let l = (($.sliceLen((d$ as hmacDRBG).V) + 1) + $.sliceLen(entropy)) + $.sliceLen(nonce)
					for (let __goscriptRangeTarget0 = s, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
						let b = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as $.Slice<number>)
						await pad000(h, l)
						await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write(b) : hmac.HMAC.prototype.Write.call(h, b))
						l = $.sliceLen(b)
					}
				}
				break
		}
	}
	K = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Sum($.goSlice(K, undefined, 0)) : hmac.HMAC.prototype.Sum.call(h, $.goSlice(K, undefined, 0)))
	// V = HMAC (K, V)
	h = await hmac.New({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, hash, K)
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write((d$ as hmacDRBG).V) : hmac.HMAC.prototype.Write.call(h, (d$ as hmacDRBG).V));
	;(d$ as hmacDRBG).V = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Sum($.goSlice((d$ as hmacDRBG).V, undefined, 0)) : hmac.HMAC.prototype.Sum.call(h, $.goSlice((d$ as hmacDRBG).V, undefined, 0)))
	// K = HMAC (K, V || 0x01 || provided_data).
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Reset() : hmac.HMAC.prototype.Reset.call(h))
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write((d$ as hmacDRBG).V) : hmac.HMAC.prototype.Write.call(h, (d$ as hmacDRBG).V))
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write(new Uint8Array([1]) as $.Slice<number>) : hmac.HMAC.prototype.Write.call(h, new Uint8Array([1]) as $.Slice<number>))
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write(entropy) : hmac.HMAC.prototype.Write.call(h, entropy))
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write(nonce) : hmac.HMAC.prototype.Write.call(h, nonce))
	{
		const __goscriptTypeSwitchValue = s
		switch (true) {
			case $.typeAssert<plainPersonalizationString>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ecdsa.plainPersonalizationString")).ok:
				{
					let s: plainPersonalizationString = $.typeAssert<plainPersonalizationString>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ecdsa.plainPersonalizationString")).value
					await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write(s) : hmac.HMAC.prototype.Write.call(h, s))
				}
				break
			case $.typeAssert<blockAlignedPersonalizationString>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "ecdsa.blockAlignedPersonalizationString")).ok:
				{
					let s: blockAlignedPersonalizationString = $.typeAssert<blockAlignedPersonalizationString>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "ecdsa.blockAlignedPersonalizationString")).value
					let l = (($.sliceLen((d$ as hmacDRBG).V) + 1) + $.sliceLen(entropy)) + $.sliceLen(nonce)
					for (let __goscriptRangeTarget1 = s, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
						let b = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as $.Slice<number>)
						await pad000(h, l)
						await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write(b) : hmac.HMAC.prototype.Write.call(h, b))
						l = $.sliceLen(b)
					}
				}
				break
		}
	}
	K = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Sum($.goSlice(K, undefined, 0)) : hmac.HMAC.prototype.Sum.call(h, $.goSlice(K, undefined, 0)))
	// V = HMAC (K, V)
	h = await hmac.New({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, hash, K)
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write((d$ as hmacDRBG).V) : hmac.HMAC.prototype.Write.call(h, (d$ as hmacDRBG).V));
	;(d$ as hmacDRBG).V = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Sum($.goSlice((d$ as hmacDRBG).V, undefined, 0)) : hmac.HMAC.prototype.Sum.call(h, $.goSlice((d$ as hmacDRBG).V, undefined, 0)));

	;(d$ as hmacDRBG).hK = h;
	;(d$ as hmacDRBG).reseedCounter = 1n
	return d
}

export async function TestingOnlyNewDRBG(__typeArgs: $.GenericTypeArgs | undefined, hash: (() => any | globalThis.Promise<any>) | null, entropy: $.Slice<number>, nonce: $.Slice<number>, s: $.Slice<number>): globalThis.Promise<hmacDRBG | $.VarRef<hmacDRBG> | null> {
	return newDRBG({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, hash, entropy, nonce, $.namedValueInterfaceValue<personalizationString | null>((s as plainPersonalizationString), "ecdsa.plainPersonalizationString", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
}

export async function pad000(h: hmac.HMAC | $.VarRef<hmac.HMAC> | null, writtenSoFar: number): globalThis.Promise<void> {
	let blockSize = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).BlockSize() : hmac.HMAC.prototype.BlockSize.call(h))
	{
		let rem = writtenSoFar % blockSize
		if (rem != 0) {
			await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write($.makeSlice<number>(blockSize - rem, undefined, "byte")) : hmac.HMAC.prototype.Write.call(h, $.makeSlice<number>(blockSize - rem, undefined, "byte")))
		}
	}
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({isPersonalizationString: (receiver: any, ...args: any[]) => (plainPersonalizationString_isPersonalizationString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ecdsa.plainPersonalizationString"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("isPersonalizationString")])
}

var __goscriptAwait: any
