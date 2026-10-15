// Generated file based on gcm_nonces.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as aes from "@goscript/crypto/internal/fips140/aes/index.js"

import * as alias from "@goscript/crypto/internal/fips140/alias/index.js"

import * as drbg from "@goscript/crypto/internal/fips140/drbg/index.js"

import * as byteorder from "@goscript/crypto/internal/fips140deps/byteorder/index.js"

import * as errors from "@goscript/errors/index.js"

import * as math from "@goscript/math/index.js"

import * as __goscript_gcm from "./gcm.gs.ts"

import * as __goscript_gcm_noasm from "./gcm_noasm.gs.ts"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/aes/index.js"
import "@goscript/crypto/internal/fips140/alias/index.js"
import "@goscript/crypto/internal/fips140/drbg/index.js"
import "@goscript/crypto/internal/fips140deps/byteorder/index.js"
import "@goscript/errors/index.js"
import "@goscript/math/index.js"
import "./gcm.gs.ts"
import "./gcm_noasm.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/aes/gcm", ["gcm.GCMWithCounterNonce", "gcm.GCMWithXORCounterNonce"])

export class GCMWithCounterNonce {
	public get g(): __goscript_gcm.GCM {
		return this._fields.g
	}

	public set g(value: __goscript_gcm.GCM) {
		this._fields.g = value
	}

	public get prefixReady(): boolean {
		return this._fields.prefixReady
	}

	public set prefixReady(value: boolean) {
		this._fields.prefixReady = value
	}

	public get prefix(): number {
		return this._fields.prefix
	}

	public set prefix(value: number) {
		this._fields.prefix = value
	}

	public get startReady(): boolean {
		return this._fields.startReady
	}

	public set startReady(value: boolean) {
		this._fields.startReady = value
	}

	public get start(): bigint {
		return this._fields.start
	}

	public set start(value: bigint) {
		this._fields.start = value
	}

	public get next(): bigint {
		return this._fields.next
	}

	public set next(value: bigint) {
		this._fields.next = value
	}

	public _fields: {
		g: __goscript_gcm.GCM
		prefixReady: boolean
		prefix: number
		startReady: boolean
		start: bigint
		next: bigint
	}

	constructor(init?: Partial<{g?: __goscript_gcm.GCM, prefixReady?: boolean, prefix?: number, startReady?: boolean, start?: bigint, next?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			g: init?.g ? init.g.clone() : new __goscript_gcm.GCM(undefined, true),
			prefixReady: init?.prefixReady ?? (false as boolean),
			prefix: init?.prefix ?? (0 as number),
			startReady: init?.startReady ?? (false as boolean),
			start: init?.start ?? (0n as bigint),
			next: init?.next ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GCMWithCounterNonce {
		return new GCMWithCounterNonce(this, true)
	}

	public __goscriptAssign(source: GCMWithCounterNonce): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.g, values.g)
		target.prefixReady = values.prefixReady
		target.prefix = values.prefix
		target.startReady = values.startReady
		target.start = values.start
		target.next = values.next
	}

	public NonceSize(): number {
		const g: GCMWithCounterNonce | $.VarRef<GCMWithCounterNonce> | null = this;
		return 12
	}

	public Open(dst: $.Slice<number>, nonce: $.Slice<number>, ciphertext: $.Slice<number>, data: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const g: GCMWithCounterNonce | $.VarRef<GCMWithCounterNonce> | null = this;
		fips140.RecordApproved()
		return $.pointerValue<GCMWithCounterNonce>(g).g.Open(dst, nonce, ciphertext, data)
	}

	public Overhead(): number {
		const g: GCMWithCounterNonce | $.VarRef<GCMWithCounterNonce> | null = this;
		return 16
	}

	public Seal(dst: $.Slice<number>, nonce: $.Slice<number>, plaintext: $.Slice<number>, data: $.Slice<number>): $.Slice<number> {
		let g: GCMWithCounterNonce | $.VarRef<GCMWithCounterNonce> | null = this;
		const g$: GCMWithCounterNonce = g == null ? $.pointerTarget<GCMWithCounterNonce>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<GCMWithCounterNonce>(g)
		if ($.sliceLen(nonce) != 12) {
			$.panic("crypto/cipher: incorrect nonce length given to GCM")
		}

		if (fips140.Enabled) {
			if (!(g$ as GCMWithCounterNonce).prefixReady) {
				// The first invocation sets the fixed prefix.
				;(g$ as GCMWithCounterNonce).prefixReady = true;
				;(g$ as GCMWithCounterNonce).prefix = byteorder.BEUint32($.goSlice(nonce, undefined, 4))
			}
			if ((g$ as GCMWithCounterNonce).prefix != byteorder.BEUint32($.goSlice(nonce, undefined, 4))) {
				$.panic("crypto/cipher: GCM nonce prefix changed")
			}

			let counter = byteorder.BEUint64($.goSlice(nonce, $.sliceLen(nonce) - 8, undefined))
			if (!(g$ as GCMWithCounterNonce).startReady) {
				// The first invocation sets the starting counter, if not fixed.
				;(g$ as GCMWithCounterNonce).startReady = true;
				;(g$ as GCMWithCounterNonce).start = counter
			}
			counter = $.uint64Sub(counter, (g$ as GCMWithCounterNonce).start)

			// Ensure the counter is strictly increasing.
			if (counter == 18446744073709551615n) {
				$.panic("crypto/cipher: counter exhausted")
			}
			if (counter < (g$ as GCMWithCounterNonce).next) {
				$.panic("crypto/cipher: counter decreased or remained the same")
			}
			;(g$ as GCMWithCounterNonce).next = $.uint64Add(counter, 1n)
		}

		fips140.RecordApproved()
		return (g$ as GCMWithCounterNonce).g.sealAfterIndicator(dst, nonce, plaintext, data)
	}

	static __typeInfo = $.registerStructType(
		"gcm.GCMWithCounterNonce",
		() => new GCMWithCounterNonce(),
		() => [$.methodSignature("NonceSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Open", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Overhead", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Seal", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["plaintext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		GCMWithCounterNonce,
		() => [/* @__PURE__ */ $.structField("g", "gcm.GCM", [0], 0, false, { pkgPath: "crypto/internal/fips140/aes/gcm" }), /* @__PURE__ */ $.structField("prefixReady", /* @__PURE__ */ $.basicType("bool"), [1], 512, false, { pkgPath: "crypto/internal/fips140/aes/gcm" }), /* @__PURE__ */ $.structField("prefix", /* @__PURE__ */ $.basicType("uint32"), [2], 516, false, { pkgPath: "crypto/internal/fips140/aes/gcm" }), /* @__PURE__ */ $.structField("startReady", /* @__PURE__ */ $.basicType("bool"), [3], 520, false, { pkgPath: "crypto/internal/fips140/aes/gcm" }), /* @__PURE__ */ $.structField("start", /* @__PURE__ */ $.basicType("uint64"), [4], 528, false, { pkgPath: "crypto/internal/fips140/aes/gcm" }), /* @__PURE__ */ $.structField("next", /* @__PURE__ */ $.basicType("uint64"), [5], 536, false, { pkgPath: "crypto/internal/fips140/aes/gcm" })]
	)
}

export class GCMWithXORCounterNonce {
	public get g(): __goscript_gcm.GCM {
		return this._fields.g
	}

	public set g(value: __goscript_gcm.GCM) {
		this._fields.g = value
	}

	public get ready(): boolean {
		return this._fields.ready
	}

	public set ready(value: boolean) {
		this._fields.ready = value
	}

	public get prefix(): number {
		return this._fields.prefix
	}

	public set prefix(value: number) {
		this._fields.prefix = value
	}

	public get mask(): bigint {
		return this._fields.mask
	}

	public set mask(value: bigint) {
		this._fields.mask = value
	}

	public get next(): bigint {
		return this._fields.next
	}

	public set next(value: bigint) {
		this._fields.next = value
	}

	public _fields: {
		g: __goscript_gcm.GCM
		ready: boolean
		prefix: number
		mask: bigint
		next: bigint
	}

	constructor(init?: Partial<{g?: __goscript_gcm.GCM, ready?: boolean, prefix?: number, mask?: bigint, next?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			g: init?.g ? init.g.clone() : new __goscript_gcm.GCM(undefined, true),
			ready: init?.ready ?? (false as boolean),
			prefix: init?.prefix ?? (0 as number),
			mask: init?.mask ?? (0n as bigint),
			next: init?.next ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GCMWithXORCounterNonce {
		return new GCMWithXORCounterNonce(this, true)
	}

	public __goscriptAssign(source: GCMWithXORCounterNonce): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.g, values.g)
		target.ready = values.ready
		target.prefix = values.prefix
		target.mask = values.mask
		target.next = values.next
	}

	public NonceSize(): number {
		const g: GCMWithXORCounterNonce | $.VarRef<GCMWithXORCounterNonce> | null = this;
		return 12
	}

	public Open(dst: $.Slice<number>, nonce: $.Slice<number>, ciphertext: $.Slice<number>, data: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const g: GCMWithXORCounterNonce | $.VarRef<GCMWithXORCounterNonce> | null = this;
		fips140.RecordApproved()
		return $.pointerValue<GCMWithXORCounterNonce>(g).g.Open(dst, nonce, ciphertext, data)
	}

	public Overhead(): number {
		const g: GCMWithXORCounterNonce | $.VarRef<GCMWithXORCounterNonce> | null = this;
		return 16
	}

	public Seal(dst: $.Slice<number>, nonce: $.Slice<number>, plaintext: $.Slice<number>, data: $.Slice<number>): $.Slice<number> {
		let g: GCMWithXORCounterNonce | $.VarRef<GCMWithXORCounterNonce> | null = this;
		const g$: GCMWithXORCounterNonce = g == null ? $.pointerTarget<GCMWithXORCounterNonce>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<GCMWithXORCounterNonce>(g)
		if ($.sliceLen(nonce) != 12) {
			$.panic("crypto/cipher: incorrect nonce length given to GCM")
		}

		if (fips140.Enabled) {
			let counter = byteorder.BEUint64($.goSlice(nonce, $.sliceLen(nonce) - 8, undefined))
			if (!(g$ as GCMWithXORCounterNonce).ready) {
				// In the first call, if [GCMWithXORCounterNonce.SetNoncePrefixAndMask]
				// wasn't used, we assume the counter is zero to learn the XOR mask and
				// fixed prefix.
				;(g$ as GCMWithXORCounterNonce).ready = true;
				;(g$ as GCMWithXORCounterNonce).mask = counter;
				;(g$ as GCMWithXORCounterNonce).prefix = byteorder.BEUint32($.goSlice(nonce, undefined, 4))
			}
			if ((g$ as GCMWithXORCounterNonce).prefix != byteorder.BEUint32($.goSlice(nonce, undefined, 4))) {
				$.panic("crypto/cipher: GCM nonce prefix changed")
			}
			counter = $.uint64Xor(counter, (g$ as GCMWithXORCounterNonce).mask)

			// Ensure the counter is strictly increasing.
			if (counter == 18446744073709551615n) {
				$.panic("crypto/cipher: counter exhausted")
			}
			if (counter < (g$ as GCMWithXORCounterNonce).next) {
				$.panic("crypto/cipher: counter decreased or remained the same")
			}
			;(g$ as GCMWithXORCounterNonce).next = $.uint64Add(counter, 1n)
		}

		fips140.RecordApproved()
		return (g$ as GCMWithXORCounterNonce).g.sealAfterIndicator(dst, nonce, plaintext, data)
	}

	public SetNoncePrefixAndMask(nonce: $.Slice<number>): $.GoError {
		let g: GCMWithXORCounterNonce | $.VarRef<GCMWithXORCounterNonce> | null = this;
		const g$: GCMWithXORCounterNonce = g == null ? $.pointerTarget<GCMWithXORCounterNonce>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<GCMWithXORCounterNonce>(g)
		if ($.sliceLen(nonce) != 12) {
			return errors.New("crypto/cipher: incorrect nonce length given to SetNoncePrefixAndMask")
		}
		if ((g$ as GCMWithXORCounterNonce).ready) {
			return errors.New("crypto/cipher: SetNoncePrefixAndMask called twice or after first Seal")
		}
		;(g$ as GCMWithXORCounterNonce).prefix = byteorder.BEUint32($.goSlice(nonce, undefined, 4));
		;(g$ as GCMWithXORCounterNonce).mask = byteorder.BEUint64($.goSlice(nonce, 4, undefined));
		;(g$ as GCMWithXORCounterNonce).ready = true
		return null
	}

	static __typeInfo = $.registerStructType(
		"gcm.GCMWithXORCounterNonce",
		() => new GCMWithXORCounterNonce(),
		() => [$.methodSignature("NonceSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Open", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Overhead", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Seal", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["plaintext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("SetNoncePrefixAndMask", [["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		GCMWithXORCounterNonce,
		() => [/* @__PURE__ */ $.structField("g", "gcm.GCM", [0], 0, false, { pkgPath: "crypto/internal/fips140/aes/gcm" }), /* @__PURE__ */ $.structField("ready", /* @__PURE__ */ $.basicType("bool"), [1], 512, false, { pkgPath: "crypto/internal/fips140/aes/gcm" }), /* @__PURE__ */ $.structField("prefix", /* @__PURE__ */ $.basicType("uint32"), [2], 516, false, { pkgPath: "crypto/internal/fips140/aes/gcm" }), /* @__PURE__ */ $.structField("mask", /* @__PURE__ */ $.basicType("uint64"), [3], 520, false, { pkgPath: "crypto/internal/fips140/aes/gcm" }), /* @__PURE__ */ $.structField("next", /* @__PURE__ */ $.basicType("uint64"), [4], 528, false, { pkgPath: "crypto/internal/fips140/aes/gcm" })]
	)
}

export async function SealWithRandomNonce(g: __goscript_gcm.GCM | $.VarRef<__goscript_gcm.GCM> | null, nonce: $.Slice<number>, out: $.Slice<number>, plaintext: $.Slice<number>, additionalData: $.Slice<number>): globalThis.Promise<void> {
	if ($.uint64($.sliceLen(plaintext)) > 68719476704n) {
		$.panic("crypto/cipher: message too large for GCM")
	}
	if ($.sliceLen(nonce) != 12) {
		$.panic("crypto/cipher: incorrect nonce length given to GCMWithRandomNonce")
	}
	if ($.sliceLen(out) != ($.sliceLen(plaintext) + 16)) {
		$.panic("crypto/cipher: incorrect output length given to GCMWithRandomNonce")
	}
	if (alias.InexactOverlap(out, plaintext)) {
		$.panic("crypto/cipher: invalid buffer overlap of output and input")
	}
	if (alias.AnyOverlap(out, additionalData)) {
		$.panic("crypto/cipher: invalid buffer overlap of output and additional data")
	}
	fips140.RecordApproved()
	await drbg.Read(nonce)
	__goscript_gcm_noasm.seal(out, g, nonce, plaintext, additionalData)
}

export function NewGCMWithCounterNonce(cipher: aes.Block | $.VarRef<aes.Block> | null): [GCMWithCounterNonce | $.VarRef<GCMWithCounterNonce> | null, $.GoError] {
	let __goscriptTuple0: any = __goscript_gcm.newGCM(new __goscript_gcm.GCM(), cipher, 12, 16)
	let g: __goscript_gcm.GCM | $.VarRef<__goscript_gcm.GCM> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}
	return [new GCMWithCounterNonce({g: $.pointerValue<__goscript_gcm.GCM>(g)}), null]
}

export function NewGCMForTLS12(cipher: aes.Block | $.VarRef<aes.Block> | null): [GCMWithCounterNonce | $.VarRef<GCMWithCounterNonce> | null, $.GoError] {
	let __goscriptTuple1: any = __goscript_gcm.newGCM(new __goscript_gcm.GCM(), cipher, 12, 16)
	let g: __goscript_gcm.GCM | $.VarRef<__goscript_gcm.GCM> | null = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (err != null) {
		return [null, err]
	}
	// TLS 1.2 counters always start at zero.
	return [new GCMWithCounterNonce({g: $.pointerValue<__goscript_gcm.GCM>(g), startReady: true}), null]
}

export function NewGCMForSSH(cipher: aes.Block | $.VarRef<aes.Block> | null): [GCMWithCounterNonce | $.VarRef<GCMWithCounterNonce> | null, $.GoError] {
	let __goscriptTuple2: any = __goscript_gcm.newGCM(new __goscript_gcm.GCM(), cipher, 12, 16)
	let g: __goscript_gcm.GCM | $.VarRef<__goscript_gcm.GCM> | null = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if (err != null) {
		return [null, err]
	}
	return [new GCMWithCounterNonce({g: $.pointerValue<__goscript_gcm.GCM>(g)}), null]
}

export function NewGCMWithXORCounterNonce(cipher: aes.Block | $.VarRef<aes.Block> | null): [GCMWithXORCounterNonce | $.VarRef<GCMWithXORCounterNonce> | null, $.GoError] {
	let __goscriptTuple3: any = __goscript_gcm.newGCM(new __goscript_gcm.GCM(), cipher, 12, 16)
	let g: __goscript_gcm.GCM | $.VarRef<__goscript_gcm.GCM> | null = __goscriptTuple3[0]
	let err = __goscriptTuple3[1]
	if (err != null) {
		return [null, err]
	}
	return [new GCMWithXORCounterNonce({g: $.pointerValue<__goscript_gcm.GCM>(g)}), null]
}

export function NewGCMForTLS13(cipher: aes.Block | $.VarRef<aes.Block> | null): [GCMWithXORCounterNonce | $.VarRef<GCMWithXORCounterNonce> | null, $.GoError] {
	let __goscriptTuple4: any = __goscript_gcm.newGCM(new __goscript_gcm.GCM(), cipher, 12, 16)
	let g: __goscript_gcm.GCM | $.VarRef<__goscript_gcm.GCM> | null = __goscriptTuple4[0]
	let err = __goscriptTuple4[1]
	if (err != null) {
		return [null, err]
	}
	return [new GCMWithXORCounterNonce({g: $.pointerValue<__goscript_gcm.GCM>(g)}), null]
}

export function NewGCMForHPKE(cipher: aes.Block | $.VarRef<aes.Block> | null): [GCMWithXORCounterNonce | $.VarRef<GCMWithXORCounterNonce> | null, $.GoError] {
	let __goscriptTuple5: any = __goscript_gcm.newGCM(new __goscript_gcm.GCM(), cipher, 12, 16)
	let g: __goscript_gcm.GCM | $.VarRef<__goscript_gcm.GCM> | null = __goscriptTuple5[0]
	let err = __goscriptTuple5[1]
	if (err != null) {
		return [null, err]
	}
	return [new GCMWithXORCounterNonce({g: $.pointerValue<__goscript_gcm.GCM>(g)}), null]
}

export function NewGCMForQUIC(cipher: aes.Block | $.VarRef<aes.Block> | null, iv: $.Slice<number>): [GCMWithXORCounterNonce | $.VarRef<GCMWithXORCounterNonce> | null, $.GoError] {
	let __goscriptTuple6: any = __goscript_gcm.newGCM(new __goscript_gcm.GCM(), cipher, 12, 16)
	let g: __goscript_gcm.GCM | $.VarRef<__goscript_gcm.GCM> | null = __goscriptTuple6[0]
	let err = __goscriptTuple6[1]
	if (err != null) {
		return [null, err]
	}
	let gcm: GCMWithXORCounterNonce | $.VarRef<GCMWithXORCounterNonce> | null = new GCMWithXORCounterNonce({g: $.pointerValue<__goscript_gcm.GCM>(g)})
	{
		let __goscriptShadow0 = (gcm !== null && (gcm as any).__isVarRef !== true && (gcm as any).__goValue === undefined ? ((gcm as any) as GCMWithXORCounterNonce).SetNoncePrefixAndMask(iv) : GCMWithXORCounterNonce.prototype.SetNoncePrefixAndMask.call(gcm, iv))
		if (__goscriptShadow0 != null) {
			return [null, __goscriptShadow0]
		}
	}
	return [gcm, null]
}
