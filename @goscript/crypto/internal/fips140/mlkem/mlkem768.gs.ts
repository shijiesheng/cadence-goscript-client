// Generated file based on mlkem768.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes2 from "@goscript/bytes/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as drbg from "@goscript/crypto/internal/fips140/drbg/index.js"

import * as sha3 from "@goscript/crypto/internal/fips140/sha3/index.js"

import * as subtle from "@goscript/crypto/internal/fips140/subtle/index.js"

import * as errors from "@goscript/errors/index.js"

import * as __goscript_cast from "./cast.gs.ts"

import * as __goscript_field from "./field.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/drbg/index.js"
import "@goscript/crypto/internal/fips140/sha3/index.js"
import "@goscript/crypto/internal/fips140/subtle/index.js"
import "@goscript/errors/index.js"
import "./cast.gs.ts"
import "./field.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/mlkem", ["mlkem.DecapsulationKey768", "mlkem.EncapsulationKey768", "mlkem.encryptionKey", "mlkem.decryptionKey"])

export class encryptionKey {
	public get t(): __goscript_field.nttElement[] {
		return this._fields.t
	}

	public set t(value: __goscript_field.nttElement[]) {
		this._fields.t = value
	}

	public get a(): __goscript_field.nttElement[] {
		return this._fields.a
	}

	public set a(value: __goscript_field.nttElement[]) {
		this._fields.a = value
	}

	public _fields: {
		t: __goscript_field.nttElement[]
		a: __goscript_field.nttElement[]
	}

	constructor(init?: Partial<{t?: __goscript_field.nttElement[], a?: __goscript_field.nttElement[]}>, __goscriptValue?: boolean) {
		this._fields = {
			t: init?.t !== undefined ? $.cloneArrayValue(init.t, /* @__PURE__ */ $.arrayType("mlkem.nttElement", 3)) : $.arrayValue(globalThis.Array.from({ length: 3 }, () => $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))), /* @__PURE__ */ $.arrayType("mlkem.nttElement", 3)),
			a: init?.a !== undefined ? $.cloneArrayValue(init.a, /* @__PURE__ */ $.arrayType("mlkem.nttElement", 9)) : $.arrayValue(globalThis.Array.from({ length: 9 }, () => $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))), /* @__PURE__ */ $.arrayType("mlkem.nttElement", 9))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): encryptionKey {
		return new encryptionKey(this, true)
	}

	public __goscriptAssign(source: encryptionKey): void {
		const target = this._fields
		const values = source._fields
		target.t = $.assignFieldValue(target.t, values.t, /* @__PURE__ */ $.arrayType("mlkem.nttElement", 3))
		target.a = $.assignFieldValue(target.a, values.a, /* @__PURE__ */ $.arrayType("mlkem.nttElement", 9))
	}

	static __typeInfo = $.registerStructType(
		"mlkem.encryptionKey",
		() => new encryptionKey(),
		() => [],
		encryptionKey,
		() => [/* @__PURE__ */ $.structField("t", /* @__PURE__ */ $.arrayType("mlkem.nttElement", 3), [0], 0, false, { pkgPath: "crypto/internal/fips140/mlkem" }), /* @__PURE__ */ $.structField("a", /* @__PURE__ */ $.arrayType("mlkem.nttElement", 9), [1], 1536, false, { pkgPath: "crypto/internal/fips140/mlkem" })]
	)
}

export class decryptionKey {
	public get s(): __goscript_field.nttElement[] {
		return this._fields.s
	}

	public set s(value: __goscript_field.nttElement[]) {
		this._fields.s = value
	}

	public _fields: {
		s: __goscript_field.nttElement[]
	}

	constructor(init?: Partial<{s?: __goscript_field.nttElement[]}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s !== undefined ? $.cloneArrayValue(init.s, /* @__PURE__ */ $.arrayType("mlkem.nttElement", 3)) : $.arrayValue(globalThis.Array.from({ length: 3 }, () => $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))), /* @__PURE__ */ $.arrayType("mlkem.nttElement", 3))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decryptionKey {
		return new decryptionKey(this, true)
	}

	public __goscriptAssign(source: decryptionKey): void {
		const target = this._fields
		const values = source._fields
		target.s = $.assignFieldValue(target.s, values.s, /* @__PURE__ */ $.arrayType("mlkem.nttElement", 3))
	}

	static __typeInfo = $.registerStructType(
		"mlkem.decryptionKey",
		() => new decryptionKey(),
		() => [],
		decryptionKey,
		() => [/* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.arrayType("mlkem.nttElement", 3), [0], 0, false, { pkgPath: "crypto/internal/fips140/mlkem" })]
	)
}

export class DecapsulationKey768 {
	public get d(): Uint8Array {
		return this._fields.d
	}

	public set d(value: Uint8Array) {
		this._fields.d = value
	}

	public get z(): Uint8Array {
		return this._fields.z
	}

	public set z(value: Uint8Array) {
		this._fields.z = value
	}

	public get _u3c1(): Uint8Array {
		return this._fields._u3c1
	}

	public set _u3c1(value: Uint8Array) {
		this._fields._u3c1 = value
	}

	public get h(): Uint8Array {
		return this._fields.h
	}

	public set h(value: Uint8Array) {
		this._fields.h = value
	}

	public get encryptionKey(): encryptionKey {
		return this._fields.encryptionKey
	}

	public set encryptionKey(value: encryptionKey) {
		this._fields.encryptionKey = value
	}

	public get decryptionKey(): decryptionKey {
		return this._fields.decryptionKey
	}

	public set decryptionKey(value: decryptionKey) {
		this._fields.decryptionKey = value
	}

	public _fields: {
		d: Uint8Array
		z: Uint8Array
		_u3c1: Uint8Array
		h: Uint8Array
		encryptionKey: encryptionKey
		decryptionKey: decryptionKey
	}

	constructor(init?: Partial<{d?: Uint8Array, z?: Uint8Array, _u3c1?: Uint8Array, h?: Uint8Array, encryptionKey?: encryptionKey, decryptionKey?: decryptionKey}>, __goscriptValue?: boolean) {
		this._fields = {
			d: init?.d !== undefined ? $.cloneArrayValue(init.d, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)) : $.arrayValue(new Uint8Array(32)),
			z: init?.z !== undefined ? $.cloneArrayValue(init.z, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)) : $.arrayValue(new Uint8Array(32)),
			_u3c1: init?._u3c1 !== undefined ? $.cloneArrayValue(init._u3c1, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)) : $.arrayValue(new Uint8Array(32)),
			h: init?.h !== undefined ? $.cloneArrayValue(init.h, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)) : $.arrayValue(new Uint8Array(32)),
			encryptionKey: init?.encryptionKey ? init.encryptionKey.clone() : new encryptionKey(undefined, true),
			decryptionKey: init?.decryptionKey ? init.decryptionKey.clone() : new decryptionKey(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DecapsulationKey768 {
		return new DecapsulationKey768(this, true)
	}

	public __goscriptAssign(source: DecapsulationKey768): void {
		const target = this._fields
		const values = source._fields
		target.d = $.assignFieldValue(target.d, values.d, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
		target.z = $.assignFieldValue(target.z, values.z, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
		target._u3c1 = $.assignFieldValue(target._u3c1, values._u3c1, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
		target.h = $.assignFieldValue(target.h, values.h, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
		$.assignStruct(target.encryptionKey, values.encryptionKey)
		$.assignStruct(target.decryptionKey, values.decryptionKey)
	}

	public Bytes(): $.Slice<number> {
		const dk: DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null = this;
		const dk$: DecapsulationKey768 = dk == null ? $.pointerTarget<DecapsulationKey768>(dk) : (dk as any).__isVarRef === true ? (dk as any).value : (dk as any).__goValue === undefined ? (dk as any) : $.pointerTarget<DecapsulationKey768>(dk)
		let b: Uint8Array = $.arrayValue(new Uint8Array(64))
		$.copy($.goSlice(b, undefined, undefined), $.goSlice((dk$ as DecapsulationKey768).d, undefined, undefined))
		$.copy($.goSlice(b, 32, undefined), $.goSlice((dk$ as DecapsulationKey768).z, undefined, undefined))
		return $.goSlice(b, undefined, undefined)
	}

	public async Decapsulate(ciphertext: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const dk: DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null = this;
		let sharedKey: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ($.sliceLen(ciphertext) != 1088) {
			return [null, errors.New("mlkem: invalid ciphertext length")]
		}
		let c: $.VarRef<Uint8Array> | null = ($.sliceToArrayPointer<number>(ciphertext, 1088, "byte") as $.VarRef<Uint8Array> | null)
		// Note that the hash check (step 3 of the decapsulation input check from
		// FIPS 203, Section 7.3) is foregone as a DecapsulationKey is always
		// validly generated by ML-KEM.KeyGen_internal.
		return [await kemDecaps(dk, c), null]
	}

	public EncapsulationKey(): EncapsulationKey768 | $.VarRef<EncapsulationKey768> | null {
		const dk: DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null = this;
		const dk$: DecapsulationKey768 = dk == null ? $.pointerTarget<DecapsulationKey768>(dk) : (dk as any).__isVarRef === true ? (dk as any).value : (dk as any).__goValue === undefined ? (dk as any) : $.pointerTarget<DecapsulationKey768>(dk)
		return new EncapsulationKey768({_u3c1: $.cloneArrayValue((dk$ as DecapsulationKey768)._u3c1, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)), h: $.cloneArrayValue((dk$ as DecapsulationKey768).h, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)), encryptionKey: (dk$ as DecapsulationKey768).encryptionKey})
	}

	static __typeInfo = $.registerStructType(
		"mlkem.DecapsulationKey768",
		() => new DecapsulationKey768(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Decapsulate", [["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["sharedKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("EncapsulationKey", [], [/* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey768")], true)],
		DecapsulationKey768,
		() => [/* @__PURE__ */ $.structField("d", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32), [0], 0, false, { pkgPath: "crypto/internal/fips140/mlkem" }), /* @__PURE__ */ $.structField("z", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32), [1], 32, false, { pkgPath: "crypto/internal/fips140/mlkem" }), /* @__PURE__ */ $.structField("ρ", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32), [2], 64, false, { key: "_u3c1", pkgPath: "crypto/internal/fips140/mlkem" }), /* @__PURE__ */ $.structField("h", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32), [3], 96, false, { pkgPath: "crypto/internal/fips140/mlkem" }), /* @__PURE__ */ $.structField("encryptionKey", "mlkem.encryptionKey", [4], 128, false, { pkgPath: "crypto/internal/fips140/mlkem", anonymous: true }), /* @__PURE__ */ $.structField("decryptionKey", "mlkem.decryptionKey", [5], 6272, false, { pkgPath: "crypto/internal/fips140/mlkem", anonymous: true })]
	)
}

export class EncapsulationKey768 {
	public get _u3c1(): Uint8Array {
		return this._fields._u3c1
	}

	public set _u3c1(value: Uint8Array) {
		this._fields._u3c1 = value
	}

	public get h(): Uint8Array {
		return this._fields.h
	}

	public set h(value: Uint8Array) {
		this._fields.h = value
	}

	public get encryptionKey(): encryptionKey {
		return this._fields.encryptionKey
	}

	public set encryptionKey(value: encryptionKey) {
		this._fields.encryptionKey = value
	}

	public _fields: {
		_u3c1: Uint8Array
		h: Uint8Array
		encryptionKey: encryptionKey
	}

	constructor(init?: Partial<{_u3c1?: Uint8Array, h?: Uint8Array, encryptionKey?: encryptionKey}>, __goscriptValue?: boolean) {
		this._fields = {
			_u3c1: init?._u3c1 !== undefined ? $.cloneArrayValue(init._u3c1, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)) : $.arrayValue(new Uint8Array(32)),
			h: init?.h !== undefined ? $.cloneArrayValue(init.h, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)) : $.arrayValue(new Uint8Array(32)),
			encryptionKey: init?.encryptionKey ? init.encryptionKey.clone() : new encryptionKey(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EncapsulationKey768 {
		return new EncapsulationKey768(this, true)
	}

	public __goscriptAssign(source: EncapsulationKey768): void {
		const target = this._fields
		const values = source._fields
		target._u3c1 = $.assignFieldValue(target._u3c1, values._u3c1, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
		target.h = $.assignFieldValue(target.h, values.h, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
		$.assignStruct(target.encryptionKey, values.encryptionKey)
	}

	public Bytes(): $.Slice<number> {
		const ek: EncapsulationKey768 | $.VarRef<EncapsulationKey768> | null = this;
		// The actual logic is in a separate function to outline this allocation.
		let b: $.Slice<number> = $.makeSlice<number>(0, 1184, "byte")
		return (ek !== null && (ek as any).__isVarRef !== true && (ek as any).__goValue === undefined ? ((ek as any) as EncapsulationKey768).bytes(b) : EncapsulationKey768.prototype.bytes.call(ek, b))
	}

	public async Encapsulate(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		const ek: EncapsulationKey768 | $.VarRef<EncapsulationKey768> | null = this;
		let sharedKey: $.Slice<number> = null! as $.Slice<number>
		let ciphertext: $.Slice<number> = null! as $.Slice<number>
		// The actual logic is in a separate function to outline this allocation.
		let cc: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(1088)))
		return (ek !== null && (ek as any).__isVarRef !== true && (ek as any).__goValue === undefined ? ((ek as any) as EncapsulationKey768).encapsulate(cc) : EncapsulationKey768.prototype.encapsulate.call(ek, cc))
	}

	public async EncapsulateInternal(m: $.VarRef<Uint8Array> | null): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		const ek: EncapsulationKey768 | $.VarRef<EncapsulationKey768> | null = this;
		let sharedKey: $.Slice<number> = null! as $.Slice<number>
		let ciphertext: $.Slice<number> = null! as $.Slice<number>
		void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let cc: $.VarRef<Uint8Array> | null = $.varRef($.arrayValue(new Uint8Array(1088)))
		return kemEncaps(cc, ek, m)
	}

	public bytes(b: $.Slice<number>): $.Slice<number> {
		const ek: EncapsulationKey768 | $.VarRef<EncapsulationKey768> | null = this;
		const ek$: EncapsulationKey768 = ek == null ? $.pointerTarget<EncapsulationKey768>(ek) : (ek as any).__isVarRef === true ? (ek as any).value : (ek as any).__goValue === undefined ? (ek as any) : $.pointerTarget<EncapsulationKey768>(ek)
		for (let __goscriptRangeTarget2 = (ek$ as EncapsulationKey768).encryptionKey.t, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
			b = __goscript_field.polyByteEncode(__goscriptStatic0(), b, $.cloneArrayValue($.arrayIndex((ek$ as EncapsulationKey768).encryptionKey.t, i), "mlkem.nttElement"))
		}
		b = $.appendSlice(b, $.goSlice((ek$ as EncapsulationKey768)._u3c1, undefined, undefined), $.byteSliceHint)
		return b
	}

	public async encapsulate(cc: $.VarRef<Uint8Array> | null): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		const ek: EncapsulationKey768 | $.VarRef<EncapsulationKey768> | null = this;
		let sharedKey: $.Slice<number> = null! as $.Slice<number>
		let ciphertext: $.Slice<number> = null! as $.Slice<number>
		void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let m: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(32)))
		await drbg.Read($.goSlice(m.value, undefined, undefined))
		// Note that the modulus check (step 2 of the encapsulation key check from
		// FIPS 203, Section 7.2) is performed by polyByteDecode in parseEK.
		fips140.RecordApproved()
		return kemEncaps(cc, ek, m)
	}

	static __typeInfo = $.registerStructType(
		"mlkem.EncapsulationKey768",
		() => new EncapsulationKey768(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Encapsulate", [], [["sharedKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], true), $.methodSignature("EncapsulateInternal", [["m", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [["sharedKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], true), $.methodSignature("bytes", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("encapsulate", [["cc", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1088))]], [["sharedKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], true)],
		EncapsulationKey768,
		() => [/* @__PURE__ */ $.structField("ρ", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32), [0], 0, false, { key: "_u3c1", pkgPath: "crypto/internal/fips140/mlkem" }), /* @__PURE__ */ $.structField("h", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32), [1], 32, false, { pkgPath: "crypto/internal/fips140/mlkem" }), /* @__PURE__ */ $.structField("encryptionKey", "mlkem.encryptionKey", [2], 64, false, { pkgPath: "crypto/internal/fips140/mlkem", anonymous: true })]
	)
}

export const n: number = 256

export const q: number = 3329

export const encodingSize12: number = 384

export const encodingSize11: number = 352

export const encodingSize10: number = 320

export const encodingSize5: number = 160

export const encodingSize4: number = 128

export const encodingSize1: number = 32

export const messageSize: number = 32

export const SharedKeySize: number = 32

export const SeedSize: number = 64

export const k: number = 3

export const CiphertextSize768: number = 1088

export const EncapsulationKeySize768: number = 1184

export const decapsulationKeySize768: number = 2400

export const k1024: number = 4

export const CiphertextSize1024: number = 1568

export const EncapsulationKeySize1024: number = 1568

export const decapsulationKeySize1024: number = 3168

export function TestingOnlyExpandedBytes768(dk: DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null): $.Slice<number> {
	const dk$: DecapsulationKey768 = dk == null ? $.pointerTarget<DecapsulationKey768>(dk) : (dk as any).__isVarRef === true ? (dk as any).value : (dk as any).__goValue === undefined ? (dk as any) : $.pointerTarget<DecapsulationKey768>(dk)
	let b: $.Slice<number> = $.makeSlice<number>(0, 2400, "byte")

	// ByteEncode₁₂(s)
	for (let __goscriptRangeTarget0 = (dk$ as DecapsulationKey768).decryptionKey.s, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		b = __goscript_field.polyByteEncode(__goscriptStatic0(), b, $.cloneArrayValue($.arrayIndex((dk$ as DecapsulationKey768).decryptionKey.s, i), "mlkem.nttElement"))
	}

	// ByteEncode₁₂(t) || ρ
	for (let __goscriptRangeTarget1 = (dk$ as DecapsulationKey768).encryptionKey.t, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		b = __goscript_field.polyByteEncode(__goscriptStatic0(), b, $.cloneArrayValue($.arrayIndex((dk$ as DecapsulationKey768).encryptionKey.t, i), "mlkem.nttElement"))
	}
	b = $.appendSlice(b, $.goSlice((dk$ as DecapsulationKey768)._u3c1, undefined, undefined), $.byteSliceHint)

	// H(ek) || z
	b = $.appendSlice(b, $.goSlice((dk$ as DecapsulationKey768).h, undefined, undefined), $.byteSliceHint)
	b = $.appendSlice(b, $.goSlice((dk$ as DecapsulationKey768).z, undefined, undefined), $.byteSliceHint)

	return b
}

export async function GenerateKey768(): globalThis.Promise<[DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null, $.GoError]> {
	// The actual logic is in a separate function to outline this allocation.
	let dk: DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null = new DecapsulationKey768()
	return generateKey(dk)
}

export async function generateKey(dk: DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null): globalThis.Promise<[DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null, $.GoError]> {
	void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let d: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(32)))
	await drbg.Read($.goSlice(d.value, undefined, undefined))
	let z: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(32)))
	await drbg.Read($.goSlice(z.value, undefined, undefined))
	kemKeyGen(dk, d, z)
	await fips140.PCT("ML-KEM PCT", $.functionValue(async (): globalThis.Promise<$.GoError> => {
		return await kemPCT(dk)
	}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	fips140.RecordApproved()
	return [dk, null]
}

export async function GenerateKeyInternal768(d: $.VarRef<Uint8Array> | null, z: $.VarRef<Uint8Array> | null): globalThis.Promise<DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null> {
	void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let dk: DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null = new DecapsulationKey768()
	kemKeyGen(dk, d, z)
	return dk
}

export function NewDecapsulationKey768(seed: $.Slice<number>): [DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null, $.GoError] {
	// The actual logic is in a separate function to outline this allocation.
	let dk: DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null = new DecapsulationKey768()
	return newKeyFromSeed(dk, seed)
}

export function newKeyFromSeed(dk: DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null, seed: $.Slice<number>): [DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null, $.GoError] {
	if ($.sliceLen(seed) != 64) {
		return [null, errors.New("mlkem: invalid seed length")]
	}
	let d: $.VarRef<Uint8Array> | null = ($.sliceToArrayPointer<number>($.goSlice(seed, undefined, 32), 32, "byte") as $.VarRef<Uint8Array> | null)
	let z: $.VarRef<Uint8Array> | null = ($.sliceToArrayPointer<number>($.goSlice(seed, 32, undefined), 32, "byte") as $.VarRef<Uint8Array> | null)
	kemKeyGen(dk, d, z)
	fips140.RecordApproved()
	return [dk, null]
}

export async function TestingOnlyNewDecapsulationKey768(b: $.Slice<number>): globalThis.Promise<[DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null, $.GoError]> {
	if ($.sliceLen(b) != 2400) {
		return [null, errors.New("mlkem: invalid NIST decapsulation key length")]
	}

	let dk: DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null = new DecapsulationKey768()
	let dk$: DecapsulationKey768 = dk == null ? $.pointerTarget<DecapsulationKey768>(dk) : (dk as any).__isVarRef === true ? (dk as any).value : (dk as any).__goValue === undefined ? (dk as any) : $.pointerTarget<DecapsulationKey768>(dk)
	for (let __goscriptRangeTarget3 = (dk$ as DecapsulationKey768).decryptionKey.s, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple0: any = __goscript_field.polyByteDecode(__goscriptStatic0(), $.goSlice(b, undefined, 384));
		;(dk$ as DecapsulationKey768).decryptionKey.s[i] = (__goscriptTuple0[0] as __goscript_field.nttElement)
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, errors.New("mlkem: invalid secret key encoding")]
		}
		b = $.goSlice(b, 384, undefined)
	}

	let __goscriptTuple1: any = NewEncapsulationKey768($.goSlice(b, undefined, 1184))
	let ek: EncapsulationKey768 | $.VarRef<EncapsulationKey768> | null = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	let ek$: EncapsulationKey768 = ek == null ? $.pointerTarget<EncapsulationKey768>(ek) : (ek as any).__isVarRef === true ? (ek as any).value : (ek as any).__goValue === undefined ? (ek as any) : $.pointerTarget<EncapsulationKey768>(ek)
	if (err != null) {
		return [null, err]
	}
	;(dk$ as DecapsulationKey768)._u3c1 = $.cloneArrayValue((ek$ as EncapsulationKey768)._u3c1, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32));
	;(dk$ as DecapsulationKey768).h = $.cloneArrayValue((ek$ as EncapsulationKey768).h, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
	$.assignStruct((dk$ as DecapsulationKey768).encryptionKey, (ek$ as EncapsulationKey768).encryptionKey)
	b = $.goSlice(b, 1184, undefined)

	if (!bytes2.Equal($.goSlice((dk$ as DecapsulationKey768).h, undefined, undefined), $.goSlice(b, undefined, 32))) {
		return [null, errors.New("mlkem: inconsistent H(ek) in encoded bytes")]
	}
	b = $.goSlice(b, 32, undefined)

	$.copy($.goSlice((dk$ as DecapsulationKey768).z, undefined, undefined), b)

	// Generate a random d value for use in Bytes(). This is a safety mechanism
	// that avoids returning a broken key vs a random key if this function is
	// called in contravention of the TestingOnlyNewDecapsulationKey768 function
	// comment advising against it.
	await drbg.Read($.goSlice((dk$ as DecapsulationKey768).d, undefined, undefined))

	return [dk, null]
}

export function kemKeyGen(dk: DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null, d: $.VarRef<Uint8Array> | null, z: $.VarRef<Uint8Array> | null): void {
	const dk$: DecapsulationKey768 = dk == null ? $.pointerTarget<DecapsulationKey768>(dk) : (dk as any).__isVarRef === true ? (dk as any).value : (dk as any).__goValue === undefined ? (dk as any) : $.pointerTarget<DecapsulationKey768>(dk);
	;(dk$ as DecapsulationKey768).d = $.cloneArrayValue($.pointerValue<Uint8Array>(d), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32));
	;(dk$ as DecapsulationKey768).z = $.cloneArrayValue($.pointerValue<Uint8Array>(z), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))

	let g: sha3.Digest | $.VarRef<sha3.Digest> | null = sha3.New512()
	void (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as sha3.Digest).Write($.goSlice($.pointerValue<Uint8Array>(d), undefined, undefined)) : sha3.Digest.prototype.Write.call(g, $.goSlice($.pointerValue<Uint8Array>(d), undefined, undefined)))
	void (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as sha3.Digest).Write(new Uint8Array([3]) as $.Slice<number>) : sha3.Digest.prototype.Write.call(g, new Uint8Array([3]) as $.Slice<number>))
	let G: $.Slice<number> = (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as sha3.Digest).Sum($.makeSlice<number>(0, 64, "byte")) : sha3.Digest.prototype.Sum.call(g, $.makeSlice<number>(0, 64, "byte")))
	let _u3c1: $.Slice<number> = $.goSlice(G, undefined, 32)
	let _u3c3: $.Slice<number> = $.goSlice(G, 32, undefined);
	;(dk$ as DecapsulationKey768)._u3c1 = $.cloneArrayValue(($.sliceToArray<number>(_u3c1, 32, "byte") as Uint8Array), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))

	let A: $.VarRef<__goscript_field.nttElement[]> | null = $.fieldRef((dk$ as DecapsulationKey768).encryptionKey._fields, "a")
	for (let i = 0; i < 3; i = ((i + 1) & 0xff)) {
		for (let j = 0; j < 3; j = ((j + 1) & 0xff)) {
			$.pointerValue<__goscript_field.nttElement[]>(A)[(((i * 3) + j) & 0xff)] = __goscript_field.sampleNTT(_u3c1, j, i)
		}
	}

	let N: number = 0
	let s: $.VarRef<__goscript_field.nttElement[]> | null = $.fieldRef((dk$ as DecapsulationKey768).decryptionKey._fields, "s")
	for (let __goscriptRangeTarget4 = $.pointerValue<__goscript_field.nttElement[]>(s), __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
		$.pointerValue<__goscript_field.nttElement[]>(s)[i] = __goscript_field.ntt(__goscript_field.samplePolyCBD(_u3c3, N))
		N = ((N + 1) & 0xff)
	}
	let e: $.Slice<__goscript_field.nttElement> = $.makeSlice<__goscript_field.nttElement>(3)
	for (let __goscriptRangeTarget5 = e, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
		;(__goscriptRangeWindow5.backing as any[])[__goscriptRangeWindow5.offset + i] = __goscript_field.ntt(__goscript_field.samplePolyCBD(_u3c3, N))
		N = ((N + 1) & 0xff)
	}

	let t: $.VarRef<__goscript_field.nttElement[]> | null = $.fieldRef((dk$ as DecapsulationKey768).encryptionKey._fields, "t")
	for (let __goscriptRangeTarget7 = $.pointerValue<__goscript_field.nttElement[]>(t), __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget7), __goscriptSliceWindow0 = $.sliceRange(e), i = 0; i < __goscriptRangeWindow6.length; i++) {
		$.pointerValue<__goscript_field.nttElement[]>(t)[i] = $.cloneArrayValue(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as __goscript_field.nttElement), "mlkem.nttElement")
		for (let __goscriptRangeTarget6 = $.pointerValue<__goscript_field.nttElement[]>(s), __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget6), j = 0; j < __goscriptRangeWindow7.length; j++) {
			$.pointerValue<__goscript_field.nttElement[]>(t)[i] = ($.cloneArrayValue(__goscript_field.polyAdd(__goscriptStatic0(), $.cloneArrayValue($.arrayIndex($.pointerValue<__goscript_field.nttElement[]>(t), i), "mlkem.nttElement"), __goscript_field.nttMul($.cloneArrayValue($.arrayIndex($.pointerValue<__goscript_field.nttElement[]>(A), (i * 3) + j), "mlkem.nttElement"), $.cloneArrayValue($.arrayIndex($.pointerValue<__goscript_field.nttElement[]>(s), j), "mlkem.nttElement"))), "mlkem.nttElement") as __goscript_field.nttElement)
		}
	}

	let H: sha3.Digest | $.VarRef<sha3.Digest> | null = sha3.New256()
	let ek: $.Slice<number> = EncapsulationKey768.prototype.Bytes.call((dk !== null && (dk as any).__isVarRef !== true && (dk as any).__goValue === undefined ? ((dk as any) as DecapsulationKey768).EncapsulationKey() : DecapsulationKey768.prototype.EncapsulationKey.call(dk)))
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.Digest).Write(ek) : sha3.Digest.prototype.Write.call(H, ek))
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.Digest).Sum($.goSlice((dk$ as DecapsulationKey768).h, undefined, 0)) : sha3.Digest.prototype.Sum.call(H, $.goSlice((dk$ as DecapsulationKey768).h, undefined, 0)))
}

export async function kemPCT(dk: DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null): globalThis.Promise<$.GoError> {
	let ek: EncapsulationKey768 | $.VarRef<EncapsulationKey768> | null = (dk !== null && (dk as any).__isVarRef !== true && (dk as any).__goValue === undefined ? ((dk as any) as DecapsulationKey768).EncapsulationKey() : DecapsulationKey768.prototype.EncapsulationKey.call(dk))
	let __goscriptTuple2: any = await (ek !== null && (ek as any).__isVarRef !== true && (ek as any).__goValue === undefined ? ((ek as any) as EncapsulationKey768).Encapsulate() : EncapsulationKey768.prototype.Encapsulate.call(ek))
	let K: $.Slice<number> = __goscriptTuple2[0]
	let c: $.Slice<number> = __goscriptTuple2[1]
	let __goscriptTuple3: any = await (dk !== null && (dk as any).__isVarRef !== true && (dk as any).__goValue === undefined ? ((dk as any) as DecapsulationKey768).Decapsulate(c) : DecapsulationKey768.prototype.Decapsulate.call(dk, c))
	let K1: $.Slice<number> = __goscriptTuple3[0]
	let err = __goscriptTuple3[1]
	if (err != null) {
		return err
	}
	if (subtle.ConstantTimeCompare(K, K1) != 1) {
		return errors.New("mlkem: PCT failed")
	}
	return null
}

export function kemEncaps(cc: $.VarRef<Uint8Array> | null, ek: EncapsulationKey768 | $.VarRef<EncapsulationKey768> | null, m: $.VarRef<Uint8Array> | null): [$.Slice<number>, $.Slice<number>] {
	let K: $.Slice<number> = null! as $.Slice<number>
	let c: $.Slice<number> = null! as $.Slice<number>
	const ek$: EncapsulationKey768 = ek == null ? $.pointerTarget<EncapsulationKey768>(ek) : (ek as any).__isVarRef === true ? (ek as any).value : (ek as any).__goValue === undefined ? (ek as any) : $.pointerTarget<EncapsulationKey768>(ek)
	let g: sha3.Digest | $.VarRef<sha3.Digest> | null = sha3.New512()
	void (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as sha3.Digest).Write($.goSlice($.pointerValue<Uint8Array>(m), undefined, undefined)) : sha3.Digest.prototype.Write.call(g, $.goSlice($.pointerValue<Uint8Array>(m), undefined, undefined)))
	void (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as sha3.Digest).Write($.goSlice((ek$ as EncapsulationKey768).h, undefined, undefined)) : sha3.Digest.prototype.Write.call(g, $.goSlice((ek$ as EncapsulationKey768).h, undefined, undefined)))
	let G: $.Slice<number> = (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as sha3.Digest).Sum(null) : sha3.Digest.prototype.Sum.call(g, null))
	K = $.goSlice(G, undefined, 32)
	let r: $.Slice<number> = $.goSlice(G, 32, undefined)
	c = pkeEncrypt(cc, $.fieldRef((ek$ as EncapsulationKey768)._fields, "encryptionKey"), m, r)
	return [K, c]
}

export function NewEncapsulationKey768(encapsulationKey: $.Slice<number>): [EncapsulationKey768 | $.VarRef<EncapsulationKey768> | null, $.GoError] {
	// The actual logic is in a separate function to outline this allocation.
	let ek: EncapsulationKey768 | $.VarRef<EncapsulationKey768> | null = new EncapsulationKey768()
	return parseEK(ek, encapsulationKey)
}

export function parseEK(ek: EncapsulationKey768 | $.VarRef<EncapsulationKey768> | null, ekPKE: $.Slice<number>): [EncapsulationKey768 | $.VarRef<EncapsulationKey768> | null, $.GoError] {
	const ek$: EncapsulationKey768 = ek == null ? $.pointerTarget<EncapsulationKey768>(ek) : (ek as any).__isVarRef === true ? (ek as any).value : (ek as any).__goValue === undefined ? (ek as any) : $.pointerTarget<EncapsulationKey768>(ek)
	if ($.sliceLen(ekPKE) != 1184) {
		return [null, errors.New("mlkem: invalid encapsulation key length")]
	}

	let h: sha3.Digest | $.VarRef<sha3.Digest> | null = sha3.New256()
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.Digest).Write(ekPKE) : sha3.Digest.prototype.Write.call(h, ekPKE))
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.Digest).Sum($.goSlice((ek$ as EncapsulationKey768).h, undefined, 0)) : sha3.Digest.prototype.Sum.call(h, $.goSlice((ek$ as EncapsulationKey768).h, undefined, 0)))

	for (let __goscriptRangeTarget8 = (ek$ as EncapsulationKey768).encryptionKey.t, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), i = 0; i < __goscriptRangeWindow8.length; i++) {
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple4: any = __goscript_field.polyByteDecode(__goscriptStatic0(), $.goSlice(ekPKE, undefined, 384));
		;(ek$ as EncapsulationKey768).encryptionKey.t[i] = (__goscriptTuple4[0] as __goscript_field.nttElement)
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		ekPKE = $.goSlice(ekPKE, 384, undefined)
	}
	$.copy($.goSlice((ek$ as EncapsulationKey768)._u3c1, undefined, undefined), ekPKE)

	for (let i = 0; i < 3; i = ((i + 1) & 0xff)) {
		for (let j = 0; j < 3; j = ((j + 1) & 0xff)) {
			;(ek$ as EncapsulationKey768).encryptionKey.a[(((i * 3) + j) & 0xff)] = __goscript_field.sampleNTT($.goSlice((ek$ as EncapsulationKey768)._u3c1, undefined, undefined), j, i)
		}
	}

	return [ek, null]
}

export function pkeEncrypt(cc: $.VarRef<Uint8Array> | null, ex: encryptionKey | $.VarRef<encryptionKey> | null, m: $.VarRef<Uint8Array> | null, rnd: $.Slice<number>): $.Slice<number> {
	const ex$: encryptionKey = ex == null ? $.pointerTarget<encryptionKey>(ex) : (ex as any).__isVarRef === true ? (ex as any).value : (ex as any).__goValue === undefined ? (ex as any) : $.pointerTarget<encryptionKey>(ex)
	let N: number = 0
	let r: $.Slice<__goscript_field.nttElement> = $.makeSlice<__goscript_field.nttElement>(3)
	let e1: $.Slice<__goscript_field.ringElement> = $.makeSlice<__goscript_field.ringElement>(3)
	for (let __goscriptRangeTarget9 = r, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), i = 0; i < __goscriptRangeWindow9.length; i++) {
		;(__goscriptRangeWindow9.backing as any[])[__goscriptRangeWindow9.offset + i] = __goscript_field.ntt(__goscript_field.samplePolyCBD(rnd, N))
		N = ((N + 1) & 0xff)
	}
	for (let __goscriptRangeTarget10 = e1, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), i = 0; i < __goscriptRangeWindow10.length; i++) {
		;(__goscriptRangeWindow10.backing as any[])[__goscriptRangeWindow10.offset + i] = __goscript_field.samplePolyCBD(rnd, N)
		N = ((N + 1) & 0xff)
	}
	let e2 = __goscript_field.samplePolyCBD(rnd, N)

	let u: $.Slice<__goscript_field.ringElement> = $.makeSlice<__goscript_field.ringElement>(3)
	for (let __goscriptRangeTarget12 = u, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget12), __goscriptSliceWindow1 = $.sliceRange(r), __goscriptSliceWindow2 = $.sliceRange(e1), i = 0; i < __goscriptRangeWindow11.length; i++) {
		let uHat: __goscript_field.nttElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
		for (let __goscriptRangeTarget11 = r, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget11), j = 0; j < __goscriptRangeWindow12.length; j++) {
			// Note that i and j are inverted, as we need the transposed of A.
			uHat = ($.cloneArrayValue(__goscript_field.polyAdd(__goscriptStatic0(), $.cloneArrayValue(uHat, "mlkem.nttElement"), __goscript_field.nttMul($.cloneArrayValue($.arrayIndex((ex$ as encryptionKey).a, (j * 3) + i), "mlkem.nttElement"), $.cloneArrayValue(((__goscriptRangeWindow12.backing as any[])[__goscriptRangeWindow12.offset + j] as __goscript_field.nttElement), "mlkem.nttElement"))), "mlkem.nttElement") as __goscript_field.nttElement)
		}
		;(__goscriptRangeWindow11.backing as any[])[__goscriptRangeWindow11.offset + i] = ($.cloneArrayValue(__goscript_field.polyAdd(__goscriptStatic1(), $.cloneArrayValue(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as __goscript_field.ringElement), "mlkem.ringElement"), __goscript_field.inverseNTT($.cloneArrayValue(uHat, "mlkem.nttElement"))), "mlkem.ringElement") as __goscript_field.ringElement)
	}

	let _u3bc = __goscript_field.ringDecodeAndDecompress1(m)

	let vNTT: __goscript_field.nttElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
	for (let __goscriptRangeTarget13 = (ex$ as encryptionKey).t, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __goscriptSliceWindow3 = $.sliceRange(r), i = 0; i < __goscriptRangeWindow13.length; i++) {
		vNTT = ($.cloneArrayValue(__goscript_field.polyAdd(__goscriptStatic0(), $.cloneArrayValue(vNTT, "mlkem.nttElement"), __goscript_field.nttMul($.cloneArrayValue($.arrayIndex((ex$ as encryptionKey).t, i), "mlkem.nttElement"), $.cloneArrayValue(((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as __goscript_field.nttElement), "mlkem.nttElement"))), "mlkem.nttElement") as __goscript_field.nttElement)
	}
	let v = ($.cloneArrayValue(__goscript_field.polyAdd(__goscriptStatic1(), $.cloneArrayValue(__goscript_field.polyAdd(__goscriptStatic1(), __goscript_field.inverseNTT($.cloneArrayValue(vNTT, "mlkem.nttElement")), $.cloneArrayValue(e2, "mlkem.ringElement")), "mlkem.ringElement"), $.cloneArrayValue(_u3bc, "mlkem.ringElement")), "mlkem.ringElement") as __goscript_field.ringElement)

	let c: $.Slice<number> = $.goSlice($.pointerValue<Uint8Array>(cc), undefined, 0)
	for (let __goscriptRangeTarget14 = u, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
		let f = $.cloneArrayValue((__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as __goscript_field.ringElement), "mlkem.ringElement")
		c = __goscript_field.ringCompressAndEncode10(c, $.cloneArrayValue(f, "mlkem.ringElement"))
	}
	c = __goscript_field.ringCompressAndEncode4(c, $.cloneArrayValue(v, "mlkem.ringElement"))

	return c
}

export let testingOnlyRejectionOutcome: ((_p0: number) => void) | null = null! as ((_p0: number) => void) | null

export function __goscript_set_testingOnlyRejectionOutcome(__goscriptValue: ((_p0: number) => void) | null): void {
	testingOnlyRejectionOutcome = __goscriptValue
}

export async function kemDecaps(dk: DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null, c: $.VarRef<Uint8Array> | null): globalThis.Promise<$.Slice<number>> {
	let K: $.Slice<number> = null! as $.Slice<number>
	const dk$: DecapsulationKey768 = dk == null ? $.pointerTarget<DecapsulationKey768>(dk) : (dk as any).__isVarRef === true ? (dk as any).value : (dk as any).__goValue === undefined ? (dk as any) : $.pointerTarget<DecapsulationKey768>(dk)
	fips140.RecordApproved()
	let m: $.Slice<number> = pkeDecrypt($.fieldRef((dk$ as DecapsulationKey768)._fields, "decryptionKey"), c)
	let g: sha3.Digest | $.VarRef<sha3.Digest> | null = sha3.New512()
	void (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as sha3.Digest).Write($.goSlice(m, undefined, undefined)) : sha3.Digest.prototype.Write.call(g, $.goSlice(m, undefined, undefined)))
	void (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as sha3.Digest).Write($.goSlice((dk$ as DecapsulationKey768).h, undefined, undefined)) : sha3.Digest.prototype.Write.call(g, $.goSlice((dk$ as DecapsulationKey768).h, undefined, undefined)))
	let G: $.Slice<number> = (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as sha3.Digest).Sum($.makeSlice<number>(0, 64, "byte")) : sha3.Digest.prototype.Sum.call(g, $.makeSlice<number>(0, 64, "byte")))
	let Kprime: $.Slice<number> = $.goSlice(G, undefined, 32)
	let r: $.Slice<number> = $.goSlice(G, 32, undefined)
	let J: sha3.SHAKE | $.VarRef<sha3.SHAKE> | null = sha3.NewShake256()
	void (J !== null && (J as any).__isVarRef !== true && (J as any).__goValue === undefined ? ((J as any) as sha3.SHAKE).Write($.goSlice((dk$ as DecapsulationKey768).z, undefined, undefined)) : sha3.SHAKE.prototype.Write.call(J, $.goSlice((dk$ as DecapsulationKey768).z, undefined, undefined)))
	void (J !== null && (J as any).__isVarRef !== true && (J as any).__goValue === undefined ? ((J as any) as sha3.SHAKE).Write($.goSlice($.pointerValue<Uint8Array>(c), undefined, undefined)) : sha3.SHAKE.prototype.Write.call(J, $.goSlice($.pointerValue<Uint8Array>(c), undefined, undefined)))
	let Kout: $.Slice<number> = $.makeSlice<number>(32, undefined, "byte")
	void (J !== null && (J as any).__isVarRef !== true && (J as any).__goValue === undefined ? ((J as any) as sha3.SHAKE).Read(Kout) : sha3.SHAKE.prototype.Read.call(J, Kout))
	let cc: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(1088)))
	let c1: $.Slice<number> = pkeEncrypt(cc, $.fieldRef((dk$ as DecapsulationKey768)._fields, "encryptionKey"), ($.sliceToArrayPointer<number>(m, 32, "byte") as $.VarRef<Uint8Array> | null), r)

	if (testingOnlyRejectionOutcome != null) {
		void (__goscriptAwait = testingOnlyRejectionOutcome!(subtle.ConstantTimeCompare($.goSlice($.pointerValue<Uint8Array>(c), undefined, undefined), c1)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	subtle.ConstantTimeCopy(subtle.ConstantTimeCompare($.goSlice($.pointerValue<Uint8Array>(c), undefined, undefined), c1), Kout, Kprime)
	return Kout
}

export function pkeDecrypt(dx: decryptionKey | $.VarRef<decryptionKey> | null, c: $.VarRef<Uint8Array> | null): $.Slice<number> {
	const dx$: decryptionKey = dx == null ? $.pointerTarget<decryptionKey>(dx) : (dx as any).__isVarRef === true ? (dx as any).value : (dx as any).__goValue === undefined ? (dx as any) : $.pointerTarget<decryptionKey>(dx)
	let u: $.Slice<__goscript_field.ringElement> = $.makeSlice<__goscript_field.ringElement>(3)
	for (let __goscriptRangeTarget15 = u, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), i = 0; i < __goscriptRangeWindow15.length; i++) {
		let b: $.VarRef<Uint8Array> | null = ($.sliceToArrayPointer<number>($.goSlice($.pointerValue<Uint8Array>(c), 320 * i, 320 * (i + 1)), 320, "byte") as $.VarRef<Uint8Array> | null);
		;(__goscriptRangeWindow15.backing as any[])[__goscriptRangeWindow15.offset + i] = __goscript_field.ringDecodeAndDecompress10(b)
	}

	let b: $.VarRef<Uint8Array> | null = ($.sliceToArrayPointer<number>($.goSlice($.pointerValue<Uint8Array>(c), 320 * 3, undefined), 128, "byte") as $.VarRef<Uint8Array> | null)
	let v = __goscript_field.ringDecodeAndDecompress4(b)

	let mask: __goscript_field.nttElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
	for (let __goscriptRangeTarget16 = (dx$ as decryptionKey).s, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), __goscriptSliceWindow4 = $.sliceRange(u), i = 0; i < __goscriptRangeWindow16.length; i++) {
		mask = ($.cloneArrayValue(__goscript_field.polyAdd(__goscriptStatic0(), $.cloneArrayValue(mask, "mlkem.nttElement"), __goscript_field.nttMul($.cloneArrayValue($.arrayIndex((dx$ as decryptionKey).s, i), "mlkem.nttElement"), __goscript_field.ntt($.cloneArrayValue(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] as __goscript_field.ringElement), "mlkem.ringElement")))), "mlkem.nttElement") as __goscript_field.nttElement)
	}
	let w = ($.cloneArrayValue(__goscript_field.polySub(__goscriptStatic1(), $.cloneArrayValue(v, "mlkem.ringElement"), __goscript_field.inverseNTT($.cloneArrayValue(mask, "mlkem.nttElement"))), "mlkem.ringElement") as __goscript_field.ringElement)

	return __goscript_field.ringCompressAndEncode1(null, $.cloneArrayValue(w, "mlkem.ringElement"))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "mlkem.nttElement", zero: () => $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0)) }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "mlkem.ringElement", zero: () => $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0)) }})
}

var __goscriptAwait: any
