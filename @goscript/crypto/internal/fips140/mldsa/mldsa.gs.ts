// Generated file based on mldsa.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as drbg from "@goscript/crypto/internal/fips140/drbg/index.js"

import * as sha3 from "@goscript/crypto/internal/fips140/sha3/index.js"

import * as subtle from "@goscript/crypto/internal/fips140/subtle/index.js"

import * as byteorder from "@goscript/crypto/internal/fips140deps/byteorder/index.js"

import * as errors from "@goscript/errors/index.js"

import * as __goscript_cast from "./cast.gs.ts"

import * as __goscript_field from "./field.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/drbg/index.js"
import "@goscript/crypto/internal/fips140/sha3/index.js"
import "@goscript/crypto/internal/fips140/subtle/index.js"
import "@goscript/crypto/internal/fips140deps/byteorder/index.js"
import "@goscript/errors/index.js"
import "./cast.gs.ts"
import "./field.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/mldsa", ["mldsa.parameters", "mldsa.PrivateKey", "mldsa.PublicKey"])

export class parameters {
	public get k(): number {
		return this._fields.k
	}

	public set k(value: number) {
		this._fields.k = value
	}

	public get l(): number {
		return this._fields.l
	}

	public set l(value: number) {
		this._fields.l = value
	}

	public get _u3b7(): number {
		return this._fields._u3b7
	}

	public set _u3b7(value: number) {
		this._fields._u3b7 = value
	}

	public get _u3b31(): number {
		return this._fields._u3b31
	}

	public set _u3b31(value: number) {
		this._fields._u3b31 = value
	}

	public get _u3b32(): number {
		return this._fields._u3b32
	}

	public set _u3b32(value: number) {
		this._fields._u3b32 = value
	}

	public get _u3bb(): number {
		return this._fields._u3bb
	}

	public set _u3bb(value: number) {
		this._fields._u3bb = value
	}

	public get _u3c4(): number {
		return this._fields._u3c4
	}

	public set _u3c4(value: number) {
		this._fields._u3c4 = value
	}

	public get _u3c9(): number {
		return this._fields._u3c9
	}

	public set _u3c9(value: number) {
		this._fields._u3c9 = value
	}

	public _fields: {
		k: number
		l: number
		_u3b7: number
		_u3b31: number
		_u3b32: number
		_u3bb: number
		_u3c4: number
		_u3c9: number
	}

	constructor(init?: Partial<{k?: number, l?: number, _u3b7?: number, _u3b31?: number, _u3b32?: number, _u3bb?: number, _u3c4?: number, _u3c9?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			k: init?.k ?? (0 as number),
			l: init?.l ?? (0 as number),
			_u3b7: init?._u3b7 ?? (0 as number),
			_u3b31: init?._u3b31 ?? (0 as number),
			_u3b32: init?._u3b32 ?? (0 as number),
			_u3bb: init?._u3bb ?? (0 as number),
			_u3c4: init?._u3c4 ?? (0 as number),
			_u3c9: init?._u3c9 ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): parameters {
		return new parameters(this, true)
	}

	public __goscriptAssign(source: parameters): void {
		const target = this._fields
		const values = source._fields
		target.k = values.k
		target.l = values.l
		target._u3b7 = values._u3b7
		target._u3b31 = values._u3b31
		target._u3b32 = values._u3b32
		target._u3bb = values._u3bb
		target._u3c4 = values._u3c4
		target._u3c9 = values._u3c9
	}

	static __typeInfo = $.registerStructType(
		"mldsa.parameters",
		() => new parameters(),
		() => [],
		parameters,
		() => [/* @__PURE__ */ $.structField("k", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "crypto/internal/fips140/mldsa" }), /* @__PURE__ */ $.structField("l", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "crypto/internal/fips140/mldsa" }), /* @__PURE__ */ $.structField("η", /* @__PURE__ */ $.basicType("int"), [2], 16, false, { key: "_u3b7", pkgPath: "crypto/internal/fips140/mldsa" }), /* @__PURE__ */ $.structField("γ1", /* @__PURE__ */ $.basicType("int"), [3], 24, false, { key: "_u3b31", pkgPath: "crypto/internal/fips140/mldsa" }), /* @__PURE__ */ $.structField("γ2", /* @__PURE__ */ $.basicType("int"), [4], 32, false, { key: "_u3b32", pkgPath: "crypto/internal/fips140/mldsa" }), /* @__PURE__ */ $.structField("λ", /* @__PURE__ */ $.basicType("int"), [5], 40, false, { key: "_u3bb", pkgPath: "crypto/internal/fips140/mldsa" }), /* @__PURE__ */ $.structField("τ", /* @__PURE__ */ $.basicType("int"), [6], 48, false, { key: "_u3c4", pkgPath: "crypto/internal/fips140/mldsa" }), /* @__PURE__ */ $.structField("ω", /* @__PURE__ */ $.basicType("int"), [7], 56, false, { key: "_u3c9", pkgPath: "crypto/internal/fips140/mldsa" })]
	)
}

export class PublicKey {
	public get raw(): Uint8Array {
		return this._fields.raw
	}

	public set raw(value: Uint8Array) {
		this._fields.raw = value
	}

	public get p(): parameters {
		return this._fields.p
	}

	public set p(value: parameters) {
		this._fields.p = value
	}

	public get tr(): Uint8Array {
		return this._fields.tr
	}

	public set tr(value: Uint8Array) {
		this._fields.tr = value
	}

	public _fields: {
		raw: Uint8Array
		p: parameters
		tr: Uint8Array
	}

	constructor(init?: Partial<{raw?: Uint8Array, p?: parameters, tr?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			raw: init?.raw !== undefined ? $.cloneArrayValue(init.raw, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 2592)) : $.arrayValue(new Uint8Array(2592)),
			p: init?.p ? init.p.clone() : new parameters(undefined, true),
			tr: init?.tr !== undefined ? $.cloneArrayValue(init.tr, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64)) : $.arrayValue(new Uint8Array(64))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PublicKey {
		return new PublicKey(this, true)
	}

	public __goscriptAssign(source: PublicKey): void {
		const target = this._fields
		const values = source._fields
		target.raw = $.assignFieldValue(target.raw, values.raw, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 2592))
		$.assignStruct(target.p, values.p)
		target.tr = $.assignFieldValue(target.tr, values.tr, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64))
	}

	public Bytes(): $.Slice<number> {
		const pub: PublicKey | $.VarRef<PublicKey> | null = this;
		const pub$: PublicKey = pub == null ? $.pointerTarget<PublicKey>(pub) : (pub as any).__isVarRef === true ? (pub as any).value : (pub as any).__goValue === undefined ? (pub as any) : $.pointerTarget<PublicKey>(pub)
		let size = pubKeySize((pub$ as PublicKey).p)
		return bytes.Clone($.goSlice((pub$ as PublicKey).raw, undefined, size))
	}

	public Equal(x: PublicKey | $.VarRef<PublicKey> | null): boolean {
		const pub: PublicKey | $.VarRef<PublicKey> | null = this;
		const pub$: PublicKey = pub == null ? $.pointerTarget<PublicKey>(pub) : (pub as any).__isVarRef === true ? (pub as any).value : (pub as any).__goValue === undefined ? (pub as any) : $.pointerTarget<PublicKey>(pub)
		const x$: PublicKey = x == null ? $.pointerTarget<PublicKey>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<PublicKey>(x)
		let size = pubKeySize((pub$ as PublicKey).p)
		return ($.structEqual((pub$ as PublicKey).p, (x$ as PublicKey).p)) && (subtle.ConstantTimeCompare($.goSlice((pub$ as PublicKey).raw, undefined, size), $.goSlice((x$ as PublicKey).raw, undefined, size)) == 1)
	}

	public Parameters(): string {
		const pub: PublicKey | $.VarRef<PublicKey> | null = this;
		switch ($.pointerValue<PublicKey>(pub).p) {
			case params44:
			{
				return "ML-DSA-44"
				break
			}
			case params65:
			{
				return "ML-DSA-65"
				break
			}
			case params87:
			{
				return "ML-DSA-87"
				break
			}
			default:
			{
				$.panic("mldsa: internal error: unknown parameters")
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"mldsa.PublicKey",
		() => new PublicKey(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Equal", [["x", /* @__PURE__ */ $.pointerType("mldsa.PublicKey")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Parameters", [], [/* @__PURE__ */ $.basicType("string")], true)],
		PublicKey,
		() => [/* @__PURE__ */ $.structField("raw", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 2592), [0], 0, false, { pkgPath: "crypto/internal/fips140/mldsa" }), /* @__PURE__ */ $.structField("p", "mldsa.parameters", [1], 2592, false, { pkgPath: "crypto/internal/fips140/mldsa" }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64), [2], 2656, false, { pkgPath: "crypto/internal/fips140/mldsa" })]
	)
}

export class PrivateKey {
	public get seed(): Uint8Array {
		return this._fields.seed
	}

	public set seed(value: Uint8Array) {
		this._fields.seed = value
	}

	public get pub(): PublicKey {
		return this._fields.pub
	}

	public set pub(value: PublicKey) {
		this._fields.pub = value
	}

	public get a(): __goscript_field.nttElement[] {
		return this._fields.a
	}

	public set a(value: __goscript_field.nttElement[]) {
		this._fields.a = value
	}

	public get t1(): __goscript_field.nttElement[] {
		return this._fields.t1
	}

	public set t1(value: __goscript_field.nttElement[]) {
		this._fields.t1 = value
	}

	public get s1(): __goscript_field.nttElement[] {
		return this._fields.s1
	}

	public set s1(value: __goscript_field.nttElement[]) {
		this._fields.s1 = value
	}

	public get s2(): __goscript_field.nttElement[] {
		return this._fields.s2
	}

	public set s2(value: __goscript_field.nttElement[]) {
		this._fields.s2 = value
	}

	public get t0(): __goscript_field.nttElement[] {
		return this._fields.t0
	}

	public set t0(value: __goscript_field.nttElement[]) {
		this._fields.t0 = value
	}

	public get k(): Uint8Array {
		return this._fields.k
	}

	public set k(value: Uint8Array) {
		this._fields.k = value
	}

	public _fields: {
		seed: Uint8Array
		pub: PublicKey
		a: __goscript_field.nttElement[]
		t1: __goscript_field.nttElement[]
		s1: __goscript_field.nttElement[]
		s2: __goscript_field.nttElement[]
		t0: __goscript_field.nttElement[]
		k: Uint8Array
	}

	constructor(init?: Partial<{seed?: Uint8Array, pub?: PublicKey, a?: __goscript_field.nttElement[], t1?: __goscript_field.nttElement[], s1?: __goscript_field.nttElement[], s2?: __goscript_field.nttElement[], t0?: __goscript_field.nttElement[], k?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			seed: init?.seed !== undefined ? $.cloneArrayValue(init.seed, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)) : $.arrayValue(new Uint8Array(32)),
			pub: init?.pub ? init.pub.clone() : new PublicKey(undefined, true),
			a: init?.a !== undefined ? $.cloneArrayValue(init.a, /* @__PURE__ */ $.arrayType("mldsa.nttElement", 56)) : $.arrayValue(globalThis.Array.from({ length: 56 }, () => $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))), /* @__PURE__ */ $.arrayType("mldsa.nttElement", 56)),
			t1: init?.t1 !== undefined ? $.cloneArrayValue(init.t1, /* @__PURE__ */ $.arrayType("mldsa.nttElement", 8)) : $.arrayValue(globalThis.Array.from({ length: 8 }, () => $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))), /* @__PURE__ */ $.arrayType("mldsa.nttElement", 8)),
			s1: init?.s1 !== undefined ? $.cloneArrayValue(init.s1, /* @__PURE__ */ $.arrayType("mldsa.nttElement", 7)) : $.arrayValue(globalThis.Array.from({ length: 7 }, () => $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))), /* @__PURE__ */ $.arrayType("mldsa.nttElement", 7)),
			s2: init?.s2 !== undefined ? $.cloneArrayValue(init.s2, /* @__PURE__ */ $.arrayType("mldsa.nttElement", 8)) : $.arrayValue(globalThis.Array.from({ length: 8 }, () => $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))), /* @__PURE__ */ $.arrayType("mldsa.nttElement", 8)),
			t0: init?.t0 !== undefined ? $.cloneArrayValue(init.t0, /* @__PURE__ */ $.arrayType("mldsa.nttElement", 8)) : $.arrayValue(globalThis.Array.from({ length: 8 }, () => $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))), /* @__PURE__ */ $.arrayType("mldsa.nttElement", 8)),
			k: init?.k !== undefined ? $.cloneArrayValue(init.k, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)) : $.arrayValue(new Uint8Array(32))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PrivateKey {
		return new PrivateKey(this, true)
	}

	public __goscriptAssign(source: PrivateKey): void {
		const target = this._fields
		const values = source._fields
		target.seed = $.assignFieldValue(target.seed, values.seed, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
		$.assignStruct(target.pub, values.pub)
		target.a = $.assignFieldValue(target.a, values.a, /* @__PURE__ */ $.arrayType("mldsa.nttElement", 56))
		target.t1 = $.assignFieldValue(target.t1, values.t1, /* @__PURE__ */ $.arrayType("mldsa.nttElement", 8))
		target.s1 = $.assignFieldValue(target.s1, values.s1, /* @__PURE__ */ $.arrayType("mldsa.nttElement", 7))
		target.s2 = $.assignFieldValue(target.s2, values.s2, /* @__PURE__ */ $.arrayType("mldsa.nttElement", 8))
		target.t0 = $.assignFieldValue(target.t0, values.t0, /* @__PURE__ */ $.arrayType("mldsa.nttElement", 8))
		target.k = $.assignFieldValue(target.k, values.k, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
	}

	public Bytes(): $.Slice<number> {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		let seed = $.cloneArrayValue($.pointerValue<PrivateKey>(priv).seed, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
		return $.goSlice(seed, undefined, undefined)
	}

	public Equal(x: PrivateKey | $.VarRef<PrivateKey> | null): boolean {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv)
		const x$: PrivateKey = x == null ? $.pointerTarget<PrivateKey>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<PrivateKey>(x)
		return ($.structEqual((priv$ as PrivateKey).pub.p, (x$ as PrivateKey).pub.p)) && (subtle.ConstantTimeCompare($.goSlice((priv$ as PrivateKey).seed, undefined, undefined), $.goSlice((x$ as PrivateKey).seed, undefined, undefined)) == 1)
	}

	public PublicKey(): PublicKey | $.VarRef<PublicKey> | null {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		// Note that this is likely to keep the entire PrivateKey reachable for
		// the lifetime of the PublicKey, which may be undesirable.
		return $.fieldRef($.pointerValue<PrivateKey>(priv)._fields, "pub")
	}

	static __typeInfo = $.registerStructType(
		"mldsa.PrivateKey",
		() => new PrivateKey(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Equal", [["x", /* @__PURE__ */ $.pointerType("mldsa.PrivateKey")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("PublicKey", [], [/* @__PURE__ */ $.pointerType("mldsa.PublicKey")], true)],
		PrivateKey,
		() => [/* @__PURE__ */ $.structField("seed", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32), [0], 0, false, { pkgPath: "crypto/internal/fips140/mldsa" }), /* @__PURE__ */ $.structField("pub", "mldsa.PublicKey", [1], 32, false, { pkgPath: "crypto/internal/fips140/mldsa" }), /* @__PURE__ */ $.structField("a", /* @__PURE__ */ $.arrayType("mldsa.nttElement", 56), [2], 2752, false, { pkgPath: "crypto/internal/fips140/mldsa" }), /* @__PURE__ */ $.structField("t1", /* @__PURE__ */ $.arrayType("mldsa.nttElement", 8), [3], 60096, false, { pkgPath: "crypto/internal/fips140/mldsa" }), /* @__PURE__ */ $.structField("s1", /* @__PURE__ */ $.arrayType("mldsa.nttElement", 7), [4], 68288, false, { pkgPath: "crypto/internal/fips140/mldsa" }), /* @__PURE__ */ $.structField("s2", /* @__PURE__ */ $.arrayType("mldsa.nttElement", 8), [5], 75456, false, { pkgPath: "crypto/internal/fips140/mldsa" }), /* @__PURE__ */ $.structField("t0", /* @__PURE__ */ $.arrayType("mldsa.nttElement", 8), [6], 83648, false, { pkgPath: "crypto/internal/fips140/mldsa" }), /* @__PURE__ */ $.structField("k", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32), [7], 91840, false, { pkgPath: "crypto/internal/fips140/mldsa" })]
	)
}

export const PrivateKeySize: number = 32

export const PublicKeySize44: number = 1312

export const PublicKeySize65: number = 1952

export const PublicKeySize87: number = 2592

export const SignatureSize44: number = 2420

export const SignatureSize65: number = 3309

export const SignatureSize87: number = 4627

export const maxK: number = 8

export const maxL: number = 7

export const max_u3bb: number = 256

export const max_u3b31: number = 19

export const maxPubKeySize: number = 2592

export let params44: parameters = new parameters({k: 4, l: 4, _u3b7: 2, _u3b31: 17, _u3b32: 88, _u3bb: 128, _u3c4: 39, _u3c9: 80}, true)

export function __goscript_set_params44(__goscriptValue: parameters): void {
	$.assignStruct(params44, __goscriptValue)
}

export let params65: parameters = new parameters({k: 6, l: 5, _u3b7: 4, _u3b31: 19, _u3b32: 32, _u3bb: 192, _u3c4: 49, _u3c9: 55}, true)

export function __goscript_set_params65(__goscriptValue: parameters): void {
	$.assignStruct(params65, __goscriptValue)
}

export let params87: parameters = new parameters({k: 8, l: 7, _u3b7: 2, _u3b31: 19, _u3b32: 32, _u3bb: 256, _u3c4: 60, _u3c9: 75}, true)

export function __goscript_set_params87(__goscriptValue: parameters): void {
	$.assignStruct(params87, __goscriptValue)
}

export function pubKeySize(p: parameters): number {
	// ρ + k × n × 10-bit coefficients of t₁
	return 32 + (globalThis.Math.trunc(((p.k * 256) * 10) / 8))
}

export function sigSize(p: parameters): number {
	// challenge + l × n × (γ₁+1)-bit coefficients of z + hint
	return (((globalThis.Math.trunc(p._u3bb / 4)) + (globalThis.Math.trunc(((p.l * 256) * (p._u3b31 + 1)) / 8))) + p._u3c9) + p.k
}

export async function GenerateKey44(): globalThis.Promise<PrivateKey | $.VarRef<PrivateKey> | null> {
	void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	let seed: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(32)))
	await drbg.Read($.goSlice(seed.value, undefined, undefined))
	let priv: PrivateKey | $.VarRef<PrivateKey> | null = newPrivateKey(seed, (params44).clone())
	await __goscript_cast.fipsPCT(priv)
	return priv
}

export async function GenerateKey65(): globalThis.Promise<PrivateKey | $.VarRef<PrivateKey> | null> {
	void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	let seed: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(32)))
	await drbg.Read($.goSlice(seed.value, undefined, undefined))
	let priv: PrivateKey | $.VarRef<PrivateKey> | null = newPrivateKey(seed, (params65).clone())
	await __goscript_cast.fipsPCT(priv)
	return priv
}

export async function GenerateKey87(): globalThis.Promise<PrivateKey | $.VarRef<PrivateKey> | null> {
	void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	let seed: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(32)))
	await drbg.Read($.goSlice(seed.value, undefined, undefined))
	let priv: PrivateKey | $.VarRef<PrivateKey> | null = newPrivateKey(seed, (params87).clone())
	await __goscript_cast.fipsPCT(priv)
	return priv
}

export let errInvalidSeedLength: $.GoError = errors.New("mldsa: invalid seed length")

export function __goscript_set_errInvalidSeedLength(__goscriptValue: $.GoError): void {
	errInvalidSeedLength = __goscriptValue
}

export async function NewPrivateKey44(seed: $.Slice<number>): globalThis.Promise<[PrivateKey | $.VarRef<PrivateKey> | null, $.GoError]> {
	void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	if ($.sliceLen(seed) != 32) {
		return [null, errInvalidSeedLength]
	}
	return [newPrivateKey(($.sliceToArrayPointer<number>(seed, 32, "byte") as $.VarRef<Uint8Array> | null), (params44).clone()), null]
}

export async function NewPrivateKey65(seed: $.Slice<number>): globalThis.Promise<[PrivateKey | $.VarRef<PrivateKey> | null, $.GoError]> {
	void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	if ($.sliceLen(seed) != 32) {
		return [null, errInvalidSeedLength]
	}
	return [newPrivateKey(($.sliceToArrayPointer<number>(seed, 32, "byte") as $.VarRef<Uint8Array> | null), (params65).clone()), null]
}

export async function NewPrivateKey87(seed: $.Slice<number>): globalThis.Promise<[PrivateKey | $.VarRef<PrivateKey> | null, $.GoError]> {
	void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	if ($.sliceLen(seed) != 32) {
		return [null, errInvalidSeedLength]
	}
	return [newPrivateKey(($.sliceToArrayPointer<number>(seed, 32, "byte") as $.VarRef<Uint8Array> | null), (params87).clone()), null]
}

export function newPrivateKey(seed: $.VarRef<Uint8Array> | null, p: parameters): PrivateKey | $.VarRef<PrivateKey> | null {
	let k = p.k
	let l = p.l

	let priv: PrivateKey | $.VarRef<PrivateKey> | null = new PrivateKey({pub: new PublicKey({p: p}, true)})
	let priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv);
	;(priv$ as PrivateKey).seed = $.cloneArrayValue($.pointerValue<Uint8Array>(seed), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))

	let _u3be: sha3.SHAKE | $.VarRef<sha3.SHAKE> | null = sha3.NewShake256()
	void (_u3be !== null && (_u3be as any).__isVarRef !== true && (_u3be as any).__goValue === undefined ? ((_u3be as any) as sha3.SHAKE).Write($.goSlice($.pointerValue<Uint8Array>(seed), undefined, undefined)) : sha3.SHAKE.prototype.Write.call(_u3be, $.goSlice($.pointerValue<Uint8Array>(seed), undefined, undefined)))
	void (_u3be !== null && (_u3be as any).__isVarRef !== true && (_u3be as any).__goValue === undefined ? ((_u3be as any) as sha3.SHAKE).Write(new Uint8Array([$.uint(k, 8), $.uint(l, 8)]) as $.Slice<number>) : sha3.SHAKE.prototype.Write.call(_u3be, new Uint8Array([$.uint(k, 8), $.uint(l, 8)]) as $.Slice<number>))
	let _u3c1: $.Slice<number> = $.makeSlice<number>(32, undefined, "byte")
	let _u3c1s: $.Slice<number> = $.makeSlice<number>(64, undefined, "byte")
	void (_u3be !== null && (_u3be as any).__isVarRef !== true && (_u3be as any).__goValue === undefined ? ((_u3be as any) as sha3.SHAKE).Read(_u3c1) : sha3.SHAKE.prototype.Read.call(_u3be, _u3c1))
	void (_u3be !== null && (_u3be as any).__isVarRef !== true && (_u3be as any).__goValue === undefined ? ((_u3be as any) as sha3.SHAKE).Read(_u3c1s) : sha3.SHAKE.prototype.Read.call(_u3be, _u3c1s))
	void (_u3be !== null && (_u3be as any).__isVarRef !== true && (_u3be as any).__goValue === undefined ? ((_u3be as any) as sha3.SHAKE).Read($.goSlice((priv$ as PrivateKey).k, undefined, undefined)) : sha3.SHAKE.prototype.Read.call(_u3be, $.goSlice((priv$ as PrivateKey).k, undefined, undefined)))

	let A: $.Slice<__goscript_field.nttElement> = $.goSlice((priv$ as PrivateKey).a, undefined, k * l)
	computeMatrixA(A, _u3c1, p)

	let s1: $.Slice<__goscript_field.nttElement> = $.goSlice((priv$ as PrivateKey).s1, undefined, l)
	for (let __goscriptSliceWindow0 = $.sliceRange(s1), __goscriptRangeCount0 = l, r = 0; r < __goscriptRangeCount0; r++) {
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, r)] = __goscript_field.ntt(__goscript_field.sampleBoundedPoly(_u3c1s, $.uint(r, 8), p))
	}
	let s2: $.Slice<__goscript_field.nttElement> = $.goSlice((priv$ as PrivateKey).s2, undefined, k)
	for (let __goscriptSliceWindow1 = $.sliceRange(s2), __goscriptRangeCount1 = k, r = 0; r < __goscriptRangeCount1; r++) {
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, r)] = __goscript_field.ntt(__goscript_field.sampleBoundedPoly(_u3c1s, $.uint(l + r, 8), p))
	}

	// ˆt = Â ∘ ŝ₁ + ŝ₂
	let tHat: $.Slice<__goscript_field.nttElement> = $.makeSlice<__goscript_field.nttElement>(k, 8)
	for (let __goscriptRangeTarget1 = tHat, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow2 = $.sliceRange(s2), __goscriptSliceWindow3 = $.sliceRange(A), __goscriptSliceWindow4 = $.sliceRange(s1), i = 0; i < __goscriptRangeWindow0.length; i++) {
		;(__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] = $.cloneArrayValue(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as __goscript_field.nttElement), "mldsa.nttElement")
		for (let __goscriptRangeTarget0 = s1, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget0), j = 0; j < __goscriptRangeWindow1.length; j++) {
			;(__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] = ($.cloneArrayValue(__goscript_field.polyAdd(__goscriptStatic0(), $.cloneArrayValue(((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as __goscript_field.nttElement), "mldsa.nttElement"), __goscript_field.nttMul($.cloneArrayValue(((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, (i * l) + j)] as __goscript_field.nttElement), "mldsa.nttElement"), $.cloneArrayValue(((__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + j] as __goscript_field.nttElement), "mldsa.nttElement"))), "mldsa.nttElement") as __goscript_field.nttElement)
		}
	}
	// t = NTT⁻¹(ˆt)
	let t: $.Slice<__goscript_field.ringElement> = $.makeSlice<__goscript_field.ringElement>(k, 8)
	for (let __goscriptRangeTarget2 = tHat, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow5 = $.sliceRange(t), i = 0; i < __goscriptRangeWindow2.length; i++) {
		;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] = __goscript_field.inverseNTT($.cloneArrayValue(((__goscriptRangeWindow2.backing as any[])[__goscriptRangeWindow2.offset + i] as __goscript_field.nttElement), "mldsa.nttElement"))
	}
	// (t₁, _) = Power2Round(t)
	// (_, ˆt₀) = NTT(Power2Round(t))
	let t1: $.Slice<number[]> = $.makeSlice<number[]>(k, 8)
	let t0: $.Slice<__goscript_field.nttElement> = $.goSlice((priv$ as PrivateKey).t0, undefined, k)
	for (let __goscriptRangeTarget4 = t, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget4), __goscriptSliceWindow6 = $.sliceRange(t1), __goscriptSliceWindow7 = $.sliceRange(t0), i = 0; i < __goscriptRangeWindow3.length; i++) {
		let w: __goscript_field.ringElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
		for (let __goscriptRangeTarget3 = ((__goscriptRangeWindow3.backing as any[])[__goscriptRangeWindow3.offset + i] as __goscript_field.ringElement), __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget3), j = 0; j < __goscriptRangeWindow4.length; j++) {
			let __goscriptTuple0: any = __goscript_field.power2Round($.arrayIndex(((__goscriptRangeWindow3.backing as any[])[__goscriptRangeWindow3.offset + i] as __goscript_field.ringElement), j));
			;((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i)] as number[])[j] = __goscriptTuple0[0]
			w[j] = __goscriptTuple0[1]
		}
		;(__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] = __goscript_field.ntt($.cloneArrayValue(w, "mldsa.ringElement"))
	}

	let pk: $.Slice<number> = pkEncode($.goSlice((priv$ as PrivateKey).pub.raw, undefined, 0), _u3c1, t1, p);
	;(priv$ as PrivateKey).pub.tr = computePublicKeyHash(pk)
	computeT1Hat($.goSlice((priv$ as PrivateKey).t1, undefined, k), t1)

	return priv
}

export function computeMatrixA(A: $.Slice<__goscript_field.nttElement>, _u3c1: $.Slice<number>, p: parameters): void {
	let k = p.k
	let l = p.l
	for (let __goscriptSliceWindow8 = $.sliceRange(A), __goscriptRangeCount3 = k, r = 0; r < __goscriptRangeCount3; r++) {
		for (let __goscriptRangeCount2 = l, s = 0; s < __goscriptRangeCount2; s++) {
			;(__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, (r * l) + s)] = __goscript_field.sampleNTT(_u3c1, $.uint(s, 8), $.uint(r, 8))
		}
	}
}

export function computePublicKeyHash(pk: $.Slice<number>): Uint8Array {
	let H: sha3.SHAKE | $.VarRef<sha3.SHAKE> | null = sha3.NewShake256()
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(pk) : sha3.SHAKE.prototype.Write.call(H, pk))
	let tr: Uint8Array = $.arrayValue(new Uint8Array(64))
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Read($.goSlice(tr, undefined, undefined)) : sha3.SHAKE.prototype.Read.call(H, $.goSlice(tr, undefined, undefined)))
	return $.cloneArrayValue(tr, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64))
}

export function computeT1Hat(t1Hat: $.Slice<__goscript_field.nttElement>, t1: $.Slice<number[]>): void {
	for (let __goscriptRangeTarget6 = t1, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget6), __goscriptSliceWindow9 = $.sliceRange(t1Hat), i = 0; i < __goscriptRangeWindow5.length; i++) {
		let w: __goscript_field.ringElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
		for (let __goscriptRangeTarget5 = ((__goscriptRangeWindow5.backing as any[])[__goscriptRangeWindow5.offset + i] as number[]), __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget5), j = 0; j < __goscriptRangeWindow6.length; j++) {
			// t₁ <= 2¹⁰ - 1
			// t₁ ⋅ 2ᵈ <= 2ᵈ(2¹⁰ - 1) = 2²³ - 2¹³ < q = 2²³ - 2¹³ + 1
			let [z, ] = __goscript_field.fieldToMontgomery($.uint((($.uint($.arrayIndex(((__goscriptRangeWindow5.backing as any[])[__goscriptRangeWindow5.offset + i] as number[]), j), 32) << 13) >>> 0), 32))
			w[j] = z
		}
		;(__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, i)] = __goscript_field.ntt($.cloneArrayValue(w, "mldsa.ringElement"))
	}
}

export function pkEncode(buf: $.Slice<number>, _u3c1: $.Slice<number>, t1: $.Slice<number[]>, p: parameters): $.Slice<number> {
	let pk: $.Slice<number> = $.appendSlice(buf, _u3c1, $.byteSliceHint)
	for (let __goscriptRangeTarget7 = $.goSlice(t1, undefined, p.k), __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
		let w = $.cloneArrayValue((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as number[]), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint16"), 256))
		// Encode four at a time into 4 * 10 bits = 5 bytes.
		for (let i = 0; i < 256; i = i + (4)) {
			let c0 = $.arrayIndex(w, i)
			let c1 = $.arrayIndex(w, i + 1)
			let c2 = $.arrayIndex(w, i + 2)
			let c3 = $.arrayIndex(w, i + 3)
			let b0 = $.uint($.uintShr(c0, 0, 16), 8)
			let b1 = $.uint(($.uintShr(c0, 8, 16)) | (((c1 << 2) & 0xffff)), 8)
			let b2 = $.uint(($.uintShr(c1, 6, 16)) | (((c2 << 4) & 0xffff)), 8)
			let b3 = $.uint(($.uintShr(c2, 4, 16)) | (((c3 << 6) & 0xffff)), 8)
			let b4 = $.uint($.uintShr(c3, 2, 16), 8)
			pk = $.append(pk, $.uint(b0, 8), $.uint(b1, 8), $.uint(b2, 8), $.uint(b3, 8), $.uint(b4, 8), $.byteSliceHint)
		}
	}
	return pk
}

export function pkDecode(pk: $.Slice<number>, t1: $.Slice<number[]>, p: parameters): [$.Slice<number>, $.GoError] {
	let _u3c1: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	if ($.sliceLen(pk) != pubKeySize(p)) {
		return [null, errInvalidPublicKeyLength]
	}
	let __goscriptAssign0_0: $.Slice<number> = $.goSlice(pk, undefined, 32)
	let __goscriptAssign0_1: $.Slice<number> = $.goSlice(pk, 32, undefined)
	_u3c1 = __goscriptAssign0_0
	pk = __goscriptAssign0_1
	for (let __goscriptRangeTarget8 = t1, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), r = 0; r < __goscriptRangeWindow8.length; r++) {
		// Decode four at a time from 4 * 10 bits = 5 bytes.
		for (let i = 0; i < 256; i = i + (4)) {
			let b0 = $.arrayIndex(pk!, 0)
			let b1 = $.arrayIndex(pk!, 1)
			let b2 = $.arrayIndex(pk!, 2)
			let b3 = $.arrayIndex(pk!, 3)
			let b4 = $.arrayIndex(pk!, 4);
			;((__goscriptRangeWindow8.backing as any[])[__goscriptRangeWindow8.offset + r] as number[])[i + 0] = $.uint($.uint($.uintShr(b0, 0, 8), 16) | ((($.uint(b1 & 0b0000_0011, 16) << 8) & 0xffff)), 16);
			;((__goscriptRangeWindow8.backing as any[])[__goscriptRangeWindow8.offset + r] as number[])[i + 1] = $.uint($.uint($.uintShr(b1, 2, 8), 16) | ((($.uint(b2 & 0b0000_1111, 16) << 6) & 0xffff)), 16);
			;((__goscriptRangeWindow8.backing as any[])[__goscriptRangeWindow8.offset + r] as number[])[i + 2] = $.uint($.uint($.uintShr(b2, 4, 8), 16) | ((($.uint(b3 & 0b0011_1111, 16) << 4) & 0xffff)), 16);
			;((__goscriptRangeWindow8.backing as any[])[__goscriptRangeWindow8.offset + r] as number[])[i + 3] = $.uint($.uint($.uintShr(b3, 6, 8), 16) | ((($.uint(b4 & 0b1111_1111, 16) << 2) & 0xffff)), 16)
			pk = $.goSlice(pk, 5, undefined)
		}
	}
	return [_u3c1, null]
}

export let errInvalidPublicKeyLength: $.GoError = errors.New("mldsa: invalid public key length")

export function __goscript_set_errInvalidPublicKeyLength(__goscriptValue: $.GoError): void {
	errInvalidPublicKeyLength = __goscriptValue
}

export function NewPublicKey44(pk: $.Slice<number>): [PublicKey | $.VarRef<PublicKey> | null, $.GoError] {
	return newPublicKey(new PublicKey(), pk, (params44).clone())
}

export function NewPublicKey65(pk: $.Slice<number>): [PublicKey | $.VarRef<PublicKey> | null, $.GoError] {
	return newPublicKey(new PublicKey(), pk, (params65).clone())
}

export function NewPublicKey87(pk: $.Slice<number>): [PublicKey | $.VarRef<PublicKey> | null, $.GoError] {
	return newPublicKey(new PublicKey(), pk, (params87).clone())
}

export function newPublicKey(pub: PublicKey | $.VarRef<PublicKey> | null, pk: $.Slice<number>, p: parameters): [PublicKey | $.VarRef<PublicKey> | null, $.GoError] {
	const pub$: PublicKey = pub == null ? $.pointerTarget<PublicKey>(pub) : (pub as any).__isVarRef === true ? (pub as any).value : (pub as any).__goValue === undefined ? (pub as any) : $.pointerTarget<PublicKey>(pub)
	if ($.sliceLen(pk) != pubKeySize(p)) {
		return [null, errInvalidPublicKeyLength]
	}

	// We don't precompute A and t1Hat here, because they would make the
	// PublicKey over 68KB. Unlike private keys, public keys are often used to
	// verify a signature only once, so precomputation doesn't help as often,
	// but they can stay around in memory, for example as part of a TLS
	// connection's PeerCertificates, so their size is more of a concern.
	// Instead, we compute A and t1Hat on demand in Verify.

	$.assignStruct((pub$ as PublicKey).p, p)
	$.copy($.goSlice((pub$ as PublicKey).raw, undefined, undefined), pk);
	;(pub$ as PublicKey).tr = computePublicKeyHash(pk)

	return [pub, null]
}

export let errContextTooLong: $.GoError = errors.New("mldsa: context too long")

export function __goscript_set_errContextTooLong(__goscriptValue: $.GoError): void {
	errContextTooLong = __goscriptValue
}

export let errMessageHashLength: $.GoError = errors.New("mldsa: invalid message hash length")

export function __goscript_set_errMessageHashLength(__goscriptValue: $.GoError): void {
	errMessageHashLength = __goscriptValue
}

export let errRandomLength: $.GoError = errors.New("mldsa: invalid random length")

export function __goscript_set_errRandomLength(__goscriptValue: $.GoError): void {
	errRandomLength = __goscriptValue
}

export async function Sign(priv: PrivateKey | $.VarRef<PrivateKey> | null, msg: $.Slice<number>, context: string): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	let random: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(32)))
	await drbg.Read($.goSlice(random.value, undefined, undefined))
	let __goscriptTuple1: any = computeMessageHash($.goSlice($.pointerValue<PrivateKey>(priv).pub.tr, undefined, undefined), msg, context)
	let _u3bc = $.varRef(__goscriptTuple1[0])
	let err = __goscriptTuple1[1]
	if (err != null) {
		return [null, err]
	}
	return [await signInternal(priv, _u3bc, random), null]
}

export async function SignDeterministic(priv: PrivateKey | $.VarRef<PrivateKey> | null, msg: $.Slice<number>, context: string): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	let random: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(32)))
	let __goscriptTuple2: any = computeMessageHash($.goSlice($.pointerValue<PrivateKey>(priv).pub.tr, undefined, undefined), msg, context)
	let _u3bc = $.varRef(__goscriptTuple2[0])
	let err = __goscriptTuple2[1]
	if (err != null) {
		return [null, err]
	}
	return [await signInternal(priv, _u3bc, random), null]
}

export async function TestingOnlySignWithRandom(priv: PrivateKey | $.VarRef<PrivateKey> | null, msg: $.Slice<number>, context: string, random: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	let __goscriptTuple3: any = computeMessageHash($.goSlice($.pointerValue<PrivateKey>(priv).pub.tr, undefined, undefined), msg, context)
	let _u3bc = $.varRef(__goscriptTuple3[0])
	let err = __goscriptTuple3[1]
	if (err != null) {
		return [null, err]
	}
	if ($.sliceLen(random) != 32) {
		return [null, errRandomLength]
	}
	return [await signInternal(priv, _u3bc, ($.sliceToArrayPointer<number>(random, 32, "byte") as $.VarRef<Uint8Array> | null)), null]
}

export async function SignExternalMu(priv: PrivateKey | $.VarRef<PrivateKey> | null, _u3bc: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	let random: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(32)))
	await drbg.Read($.goSlice(random.value, undefined, undefined))
	if ($.sliceLen(_u3bc) != 64) {
		return [null, errMessageHashLength]
	}
	return [await signInternal(priv, ($.sliceToArrayPointer<number>(_u3bc, 64, "byte") as $.VarRef<Uint8Array> | null), random), null]
}

export async function SignExternalMuDeterministic(priv: PrivateKey | $.VarRef<PrivateKey> | null, _u3bc: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	let random: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(32)))
	if ($.sliceLen(_u3bc) != 64) {
		return [null, errMessageHashLength]
	}
	return [await signInternal(priv, ($.sliceToArrayPointer<number>(_u3bc, 64, "byte") as $.VarRef<Uint8Array> | null), random), null]
}

export async function TestingOnlySignExternalMuWithRandom(priv: PrivateKey | $.VarRef<PrivateKey> | null, _u3bc: $.Slice<number>, random: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	if ($.sliceLen(_u3bc) != 64) {
		return [null, errMessageHashLength]
	}
	if ($.sliceLen(random) != 32) {
		return [null, errRandomLength]
	}
	return [await signInternal(priv, ($.sliceToArrayPointer<number>(_u3bc, 64, "byte") as $.VarRef<Uint8Array> | null), ($.sliceToArrayPointer<number>(random, 32, "byte") as $.VarRef<Uint8Array> | null)), null]
}

export function computeMessageHash(tr: $.Slice<number>, msg: $.Slice<number>, context: string): [Uint8Array, $.GoError] {
	if ($.stringLen(context) > 255) {
		return [$.arrayValue(new Uint8Array(64)), errContextTooLong]
	}
	let H: sha3.SHAKE | $.VarRef<sha3.SHAKE> | null = sha3.NewShake256()
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(tr) : sha3.SHAKE.prototype.Write.call(H, tr))
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(new Uint8Array([0]) as $.Slice<number>) : sha3.SHAKE.prototype.Write.call(H, new Uint8Array([0]) as $.Slice<number>))
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(new Uint8Array([$.uint($.stringLen(context), 8)]) as $.Slice<number>) : sha3.SHAKE.prototype.Write.call(H, new Uint8Array([$.uint($.stringLen(context), 8)]) as $.Slice<number>))
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write($.stringToBytes(context)) : sha3.SHAKE.prototype.Write.call(H, $.stringToBytes(context)))
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(msg) : sha3.SHAKE.prototype.Write.call(H, msg))
	let _u3bc: Uint8Array = $.arrayValue(new Uint8Array(64))
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Read($.goSlice(_u3bc, undefined, undefined)) : sha3.SHAKE.prototype.Read.call(H, $.goSlice(_u3bc, undefined, undefined)))
	return [$.cloneArrayValue(_u3bc, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64)), null]
}

export async function signInternal(priv: PrivateKey | $.VarRef<PrivateKey> | null, _u3bc: $.VarRef<Uint8Array> | null, random: $.VarRef<Uint8Array> | null): globalThis.Promise<$.Slice<number>> {
	const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv)
	let p = ((priv$ as PrivateKey).pub.p).clone()
	let k = (priv$ as PrivateKey).pub.p.k
	let l = (priv$ as PrivateKey).pub.p.l
	let A: $.Slice<__goscript_field.nttElement> = $.goSlice((priv$ as PrivateKey).a, undefined, k * l)
	let s1: $.Slice<__goscript_field.nttElement> = $.goSlice((priv$ as PrivateKey).s1, undefined, l)
	let s2: $.Slice<__goscript_field.nttElement> = $.goSlice((priv$ as PrivateKey).s2, undefined, k)
	let t0: $.Slice<__goscript_field.nttElement> = $.goSlice((priv$ as PrivateKey).t0, undefined, k)

	let _u3b2 = p._u3c4 * p._u3b7
	let _u3b31 = $.uint($.uint(((1 << p._u3b31) >>> 0), 32), 32)
	let _u3b31_u3b2 = $.uint(((_u3b31 - $.uint(_u3b2, 32)) >>> 0), 32)
	let _u3b32 = $.uint(globalThis.Math.trunc((((8380417 - 1) >>> 0)) / $.uint(p._u3b32, 32)), 32)
	let _u3b32_u3b2 = $.uint(((_u3b32 - $.uint(_u3b2, 32)) >>> 0), 32)

	let H: sha3.SHAKE | $.VarRef<sha3.SHAKE> | null = sha3.NewShake256()
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write($.goSlice((priv$ as PrivateKey).k, undefined, undefined)) : sha3.SHAKE.prototype.Write.call(H, $.goSlice((priv$ as PrivateKey).k, undefined, undefined)))
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write($.goSlice($.pointerValue<Uint8Array>(random), undefined, undefined)) : sha3.SHAKE.prototype.Write.call(H, $.goSlice($.pointerValue<Uint8Array>(random), undefined, undefined)))
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write($.goSlice($.pointerValue<Uint8Array>(_u3bc), undefined, undefined)) : sha3.SHAKE.prototype.Write.call(H, $.goSlice($.pointerValue<Uint8Array>(_u3bc), undefined, undefined)))
	let nonce: $.Slice<number> = $.makeSlice<number>(64, undefined, "byte")
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Read(nonce) : sha3.SHAKE.prototype.Read.call(H, nonce))

	let _u3ba = 0
	sign: for (let __goscriptSliceWindow10 = $.sliceRange(A), __goscriptSliceWindow11 = $.sliceRange(s1), __goscriptSliceWindow12 = $.sliceRange(s2), __goscriptSliceWindow13 = $.sliceRange(t0); true; ) {
		// Main rejection sampling loop. Note that leaking rejected signatures
		// leaks information about the private key. However, as explained in
		// https://pq-crystals.org/dilithium/data/dilithium-specification-round3.pdf
		// Section 5.5, we are free to leak rejected ch values, as well as which
		// check causes the rejection and which coefficient failed the check
		// (but not the value or sign of the coefficient).

		let y: $.Slice<__goscript_field.ringElement> = $.makeSlice<__goscript_field.ringElement>(l, 7)
		for (let __goscriptRangeTarget9 = y, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), r = 0; r < __goscriptRangeWindow9.length; r++) {
			let counter: $.Slice<number> = $.makeSlice<number>(2, undefined, "byte")
			byteorder.LEPutUint16(counter, $.uint(_u3ba, 16))
			_u3ba++

			void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Reset() : sha3.SHAKE.prototype.Reset.call(H))
			void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(nonce) : sha3.SHAKE.prototype.Write.call(H, nonce))
			void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(counter) : sha3.SHAKE.prototype.Write.call(H, counter))
			let v: $.Slice<number> = $.makeSlice<number>(globalThis.Math.trunc(((p._u3b31 + 1) * 256) / 8), globalThis.Math.trunc(((19 + 1) * 256) / 8), "byte")
			void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Read(v) : sha3.SHAKE.prototype.Read.call(H, v));

			;(__goscriptRangeWindow9.backing as any[])[__goscriptRangeWindow9.offset + r] = __goscript_field.bitUnpack(v, p)
		}

		// w = NTT⁻¹(Â ∘ NTT(y))
		let yHat: $.Slice<__goscript_field.nttElement> = $.makeSlice<__goscript_field.nttElement>(l, 7)
		for (let __goscriptRangeTarget10 = y, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __goscriptSliceWindow14 = $.sliceRange(yHat), i = 0; i < __goscriptRangeWindow10.length; i++) {
			;(__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, i)] = __goscript_field.ntt($.cloneArrayValue(((__goscriptRangeWindow10.backing as any[])[__goscriptRangeWindow10.offset + i] as __goscript_field.ringElement), "mldsa.ringElement"))
		}
		let w: $.Slice<__goscript_field.ringElement> = $.makeSlice<__goscript_field.ringElement>(k, 8)
		for (let __goscriptRangeTarget11 = w, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __goscriptSliceWindow15 = $.sliceRange(yHat), i = 0; i < __goscriptRangeWindow11.length; i++) {
			let wHat: __goscript_field.nttElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
			for (let __goscriptRangeCount4 = l, j = 0; j < __goscriptRangeCount4; j++) {
				wHat = ($.cloneArrayValue(__goscript_field.polyAdd(__goscriptStatic0(), $.cloneArrayValue(wHat, "mldsa.nttElement"), __goscript_field.nttMul($.cloneArrayValue(((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, (i * l) + j)] as __goscript_field.nttElement), "mldsa.nttElement"), $.cloneArrayValue(((__goscriptSliceWindow15.backing as any[])[$.windowSlot(__goscriptSliceWindow15, j)] as __goscript_field.nttElement), "mldsa.nttElement"))), "mldsa.nttElement") as __goscript_field.nttElement)
			}
			;(__goscriptRangeWindow11.backing as any[])[__goscriptRangeWindow11.offset + i] = __goscript_field.inverseNTT($.cloneArrayValue(wHat, "mldsa.nttElement"))
		}

		void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Reset() : sha3.SHAKE.prototype.Reset.call(H))
		void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write($.goSlice($.pointerValue<Uint8Array>(_u3bc), undefined, undefined)) : sha3.SHAKE.prototype.Write.call(H, $.goSlice($.pointerValue<Uint8Array>(_u3bc), undefined, undefined)))
		for (let __goscriptRangeTarget12 = w, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), i = 0; i < __goscriptRangeWindow12.length; i++) {
			w1Encode(H, __goscript_field.highBits($.cloneArrayValue(((__goscriptRangeWindow12.backing as any[])[__goscriptRangeWindow12.offset + i] as __goscript_field.ringElement), "mldsa.ringElement"), p), p)
		}
		let ch: $.Slice<number> = $.makeSlice<number>(globalThis.Math.trunc(p._u3bb / 4), globalThis.Math.trunc(256 / 4), "byte")
		void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Read(ch) : sha3.SHAKE.prototype.Read.call(H, ch))

		// sampleInBall is not constant time, but see comment above about
		// leaking rejected ch values being acceptable.
		let c = __goscript_field.ntt(__goscript_field.sampleInBall(ch, p))

		let cs1: $.Slice<__goscript_field.ringElement> = $.makeSlice<__goscript_field.ringElement>(l, 7)
		for (let __goscriptRangeTarget13 = cs1, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), i = 0; i < __goscriptRangeWindow13.length; i++) {
			;(__goscriptRangeWindow13.backing as any[])[__goscriptRangeWindow13.offset + i] = __goscript_field.inverseNTT(__goscript_field.nttMul($.cloneArrayValue(c, "mldsa.nttElement"), $.cloneArrayValue(((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, i)] as __goscript_field.nttElement), "mldsa.nttElement")))
		}
		let cs2: $.Slice<__goscript_field.ringElement> = $.makeSlice<__goscript_field.ringElement>(k, 8)
		for (let __goscriptRangeTarget14 = cs2, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), i = 0; i < __goscriptRangeWindow14.length; i++) {
			;(__goscriptRangeWindow14.backing as any[])[__goscriptRangeWindow14.offset + i] = __goscript_field.inverseNTT(__goscript_field.nttMul($.cloneArrayValue(c, "mldsa.nttElement"), $.cloneArrayValue(((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, i)] as __goscript_field.nttElement), "mldsa.nttElement")))
		}

		let z: $.Slice<__goscript_field.ringElement> = $.makeSlice<__goscript_field.ringElement>(l, 7)
		for (let __goscriptRangeTarget15 = y, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), __goscriptSliceWindow16 = $.sliceRange(z), __goscriptSliceWindow17 = $.sliceRange(cs1), i = 0; i < __goscriptRangeWindow15.length; i++) {
			;(__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, i)] = ($.cloneArrayValue(__goscript_field.polyAdd(__goscriptStatic1(), $.cloneArrayValue(((__goscriptRangeWindow15.backing as any[])[__goscriptRangeWindow15.offset + i] as __goscript_field.ringElement), "mldsa.ringElement"), $.cloneArrayValue(((__goscriptSliceWindow17.backing as any[])[$.windowSlot(__goscriptSliceWindow17, i)] as __goscript_field.ringElement), "mldsa.ringElement")), "mldsa.ringElement") as __goscript_field.ringElement)

			// Reject if ||z||∞ ≥ γ1 − β
			if (coefficientsExceedBound($.cloneArrayValue(((__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, i)] as __goscript_field.ringElement), "mldsa.ringElement"), _u3b31_u3b2)) {
				if (testingOnlyRejectionReason != null) {
					void (__goscriptAwait = testingOnlyRejectionReason!("z"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				continue sign
			}
		}

		for (let __goscriptRangeTarget16 = w, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), __goscriptSliceWindow18 = $.sliceRange(cs2), i = 0; i < __goscriptRangeWindow16.length; i++) {
			let r0 = ($.cloneArrayValue(__goscript_field.polySub(__goscriptStatic1(), $.cloneArrayValue(((__goscriptRangeWindow16.backing as any[])[__goscriptRangeWindow16.offset + i] as __goscript_field.ringElement), "mldsa.ringElement"), $.cloneArrayValue(((__goscriptSliceWindow18.backing as any[])[$.windowSlot(__goscriptSliceWindow18, i)] as __goscript_field.ringElement), "mldsa.ringElement")), "mldsa.ringElement") as __goscript_field.ringElement)

			// Reject if ||LowBits(r0)||∞ ≥ γ2 − β
			if (lowBitsExceedBound($.cloneArrayValue(r0, "mldsa.ringElement"), _u3b32_u3b2, p)) {
				if (testingOnlyRejectionReason != null) {
					void (__goscriptAwait = testingOnlyRejectionReason!("r0"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				continue sign
			}
		}

		let ct0: $.Slice<__goscript_field.ringElement> = $.makeSlice<__goscript_field.ringElement>(k, 8)
		for (let __goscriptRangeTarget17 = ct0, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), i = 0; i < __goscriptRangeWindow17.length; i++) {
			;(__goscriptRangeWindow17.backing as any[])[__goscriptRangeWindow17.offset + i] = __goscript_field.inverseNTT(__goscript_field.nttMul($.cloneArrayValue(c, "mldsa.nttElement"), $.cloneArrayValue(((__goscriptSliceWindow13.backing as any[])[$.windowSlot(__goscriptSliceWindow13, i)] as __goscript_field.nttElement), "mldsa.nttElement")))

			// Reject if ||ct0||∞ ≥ γ2
			if (coefficientsExceedBound($.cloneArrayValue(((__goscriptRangeWindow17.backing as any[])[__goscriptRangeWindow17.offset + i] as __goscript_field.ringElement), "mldsa.ringElement"), _u3b32)) {
				if (testingOnlyRejectionReason != null) {
					void (__goscriptAwait = testingOnlyRejectionReason!("ct0"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				continue sign
			}
		}

		let count1s = 0
		let h: $.Slice<Uint8Array> = $.makeSlice<Uint8Array>(k, 8)
		for (let __goscriptRangeTarget18 = w, __goscriptRangeWindow18 = $.sliceRange(__goscriptRangeTarget18), __goscriptSliceWindow19 = $.sliceRange(h), __goscriptSliceWindow20 = $.sliceRange(ct0), __goscriptSliceWindow21 = $.sliceRange(cs2), i = 0; i < __goscriptRangeWindow18.length; i++) {
			let count: number = 0
			let __goscriptTuple4: any = __goscript_field.makeHint($.cloneArrayValue(((__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, i)] as __goscript_field.ringElement), "mldsa.ringElement"), $.cloneArrayValue(((__goscriptRangeWindow18.backing as any[])[__goscriptRangeWindow18.offset + i] as __goscript_field.ringElement), "mldsa.ringElement"), $.cloneArrayValue(((__goscriptSliceWindow21.backing as any[])[$.windowSlot(__goscriptSliceWindow21, i)] as __goscript_field.ringElement), "mldsa.ringElement"), p);
			;(__goscriptSliceWindow19.backing as any[])[$.windowSlot(__goscriptSliceWindow19, i)] = __goscriptTuple4[0]
			count = __goscriptTuple4[1]
			count1s = count1s + (count)
		}
		// Reject if number of hints > ω
		if (count1s > p._u3c9) {
			if (testingOnlyRejectionReason != null) {
				void (__goscriptAwait = testingOnlyRejectionReason!("h"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			continue sign
		}

		return sigEncode(ch, z, h, p)
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export let testingOnlyRejectionReason: ((reason: string) => void) | null = null! as ((reason: string) => void) | null

export function __goscript_set_testingOnlyRejectionReason(__goscriptValue: ((reason: string) => void) | null): void {
	testingOnlyRejectionReason = __goscriptValue
}

export function w1Encode(H: sha3.SHAKE | $.VarRef<sha3.SHAKE> | null, w: Uint8Array, p: parameters): void {
	switch (p._u3b32) {
		case 32:
		{
			let buf: $.Slice<number> = $.makeSlice<number>(globalThis.Math.trunc((4 * 256) / 8), undefined, "byte")
			for (let __goscriptSliceWindow22 = $.sliceRange(buf), i = 0; i < 256; i = i + (2)) {
				let b0 = $.arrayIndex(w, i)
				let b1 = $.arrayIndex(w, i + 1);
				;(__goscriptSliceWindow22.backing as any[])[$.windowSlot(__goscriptSliceWindow22, globalThis.Math.trunc(i / 2))] = $.uint(b0 | (((b1 << 4) & 0xff)), 8)
			}
			void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(buf) : sha3.SHAKE.prototype.Write.call(H, buf))
			break
		}
		case 88:
		{
			let buf: $.Slice<number> = $.makeSlice<number>(globalThis.Math.trunc((6 * 256) / 8), undefined, "byte")
			for (let __goscriptSliceWindow23 = $.sliceRange(buf), i = 0; i < 256; i = i + (4)) {
				let b0 = $.arrayIndex(w, i)
				let b1 = $.arrayIndex(w, i + 1)
				let b2 = $.arrayIndex(w, i + 2)
				let b3 = $.arrayIndex(w, i + 3);
				;(__goscriptSliceWindow23.backing as any[])[$.windowSlot(__goscriptSliceWindow23, (globalThis.Math.trunc((3 * i) / 4)) + 0)] = $.uint(($.uintShr(b0, 0, 8)) | (((b1 << 6) & 0xff)), 8);
				;(__goscriptSliceWindow23.backing as any[])[$.windowSlot(__goscriptSliceWindow23, (globalThis.Math.trunc((3 * i) / 4)) + 1)] = $.uint(($.uintShr(b1, 2, 8)) | (((b2 << 4) & 0xff)), 8);
				;(__goscriptSliceWindow23.backing as any[])[$.windowSlot(__goscriptSliceWindow23, (globalThis.Math.trunc((3 * i) / 4)) + 2)] = $.uint(($.uintShr(b2, 4, 8)) | (((b3 << 2) & 0xff)), 8)
			}
			void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(buf) : sha3.SHAKE.prototype.Write.call(H, buf))
			break
		}
		default:
		{
			$.panic("mldsa: internal error: unsupported \xce\xb32")
			break
		}
	}
}

export function coefficientsExceedBound(w: __goscript_field.ringElement, bound: number): boolean {
	// If this function appears in profiles, it might be possible to deduplicate
	// the work of fieldFromMontgomery inside fieldInfinityNorm with the
	// subsequent encoding of w.
	for (let __goscriptRangeTarget19 = w, __goscriptRangeWindow19 = $.sliceRange(__goscriptRangeTarget19), i = 0; i < __goscriptRangeWindow19.length; i++) {
		if (__goscript_field.fieldInfinityNorm($.arrayIndex(w, i)) >= bound) {
			return true
		}
	}
	return false
}

export function lowBitsExceedBound(w: __goscript_field.ringElement, bound: number, p: parameters): boolean {
	switch (p._u3b32) {
		case 32:
		{
			for (let __goscriptRangeTarget20 = w, __goscriptRangeWindow20 = $.sliceRange(__goscriptRangeTarget20), i = 0; i < __goscriptRangeWindow20.length; i++) {
				let [, r0] = __goscript_field.decompose32($.arrayIndex(w, i))
				if (__goscript_field.constantTimeAbs(r0) >= bound) {
					return true
				}
			}
			break
		}
		case 88:
		{
			for (let __goscriptRangeTarget21 = w, __goscriptRangeWindow21 = $.sliceRange(__goscriptRangeTarget21), i = 0; i < __goscriptRangeWindow21.length; i++) {
				let [, r0] = __goscript_field.decompose88($.arrayIndex(w, i))
				if (__goscript_field.constantTimeAbs(r0) >= bound) {
					return true
				}
			}
			break
		}
		default:
		{
			$.panic("mldsa: internal error: unsupported \xce\xb32")
			break
		}
	}
	return false
}

export let errInvalidSignatureLength: $.GoError = errors.New("mldsa: invalid signature length")

export function __goscript_set_errInvalidSignatureLength(__goscriptValue: $.GoError): void {
	errInvalidSignatureLength = __goscriptValue
}

export let errInvalidSignatureCoeffBounds: $.GoError = errors.New("mldsa: invalid signature")

export function __goscript_set_errInvalidSignatureCoeffBounds(__goscriptValue: $.GoError): void {
	errInvalidSignatureCoeffBounds = __goscriptValue
}

export let errInvalidSignatureChallenge: $.GoError = errors.New("mldsa: invalid signature")

export function __goscript_set_errInvalidSignatureChallenge(__goscriptValue: $.GoError): void {
	errInvalidSignatureChallenge = __goscriptValue
}

export let errInvalidSignatureHintLimits: $.GoError = errors.New("mldsa: invalid signature encoding")

export function __goscript_set_errInvalidSignatureHintLimits(__goscriptValue: $.GoError): void {
	errInvalidSignatureHintLimits = __goscriptValue
}

export let errInvalidSignatureHintIndexOrder: $.GoError = errors.New("mldsa: invalid signature encoding")

export function __goscript_set_errInvalidSignatureHintIndexOrder(__goscriptValue: $.GoError): void {
	errInvalidSignatureHintIndexOrder = __goscriptValue
}

export let errInvalidSignatureHintExtraIndices: $.GoError = errors.New("mldsa: invalid signature encoding")

export function __goscript_set_errInvalidSignatureHintExtraIndices(__goscriptValue: $.GoError): void {
	errInvalidSignatureHintExtraIndices = __goscriptValue
}

export async function Verify(pub: PublicKey | $.VarRef<PublicKey> | null, msg: $.Slice<number>, sig: $.Slice<number>, context: string): globalThis.Promise<$.GoError> {
	void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	let __goscriptTuple5: any = computeMessageHash($.goSlice($.pointerValue<PublicKey>(pub).tr, undefined, undefined), msg, context)
	let _u3bc = $.varRef(__goscriptTuple5[0])
	let err = __goscriptTuple5[1]
	if (err != null) {
		return err
	}
	return verifyInternal(pub, _u3bc, sig)
}

export async function VerifyExternalMu(pub: PublicKey | $.VarRef<PublicKey> | null, _u3bc: $.Slice<number>, sig: $.Slice<number>): globalThis.Promise<$.GoError> {
	void (__goscriptAwait = __goscript_cast.fipsSelfTest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	if ($.sliceLen(_u3bc) != 64) {
		return errMessageHashLength
	}
	return verifyInternal(pub, ($.sliceToArrayPointer<number>(_u3bc, 64, "byte") as $.VarRef<Uint8Array> | null), sig)
}

export function verifyInternal(pub: PublicKey | $.VarRef<PublicKey> | null, _u3bc: $.VarRef<Uint8Array> | null, sig: $.Slice<number>): $.GoError {
	const pub$: PublicKey = pub == null ? $.pointerTarget<PublicKey>(pub) : (pub as any).__isVarRef === true ? (pub as any).value : (pub as any).__goValue === undefined ? (pub as any) : $.pointerTarget<PublicKey>(pub)
	let p = ((pub$ as PublicKey).p).clone()
	let k = (pub$ as PublicKey).p.k
	let l = (pub$ as PublicKey).p.l

	let _u3b2 = p._u3c4 * p._u3b7
	let _u3b31 = $.uint($.uint(((1 << p._u3b31) >>> 0), 32), 32)
	let _u3b31_u3b2 = $.uint(((_u3b31 - $.uint(_u3b2, 32)) >>> 0), 32)

	let t1: $.Slice<number[]> = $.makeSlice<number[]>(k, 8)
	let __goscriptTuple6: any = pkDecode($.goSlice((pub$ as PublicKey).raw, undefined, pubKeySize((pub$ as PublicKey).p)), t1, p)
	let _u3c1: $.Slice<number> = __goscriptTuple6[0]
	let err = __goscriptTuple6[1]
	if (err != null) {
		return err
	}
	let A: $.Slice<__goscript_field.nttElement> = $.makeSlice<__goscript_field.nttElement>(k * l, 8 * 7)
	computeMatrixA(A, _u3c1, p)
	let t1Hat: $.Slice<__goscript_field.nttElement> = $.makeSlice<__goscript_field.nttElement>(k, 8)
	computeT1Hat(t1Hat, t1)

	let z: $.Slice<__goscript_field.ringElement> = $.makeSlice<__goscript_field.ringElement>(l, 7)
	let h: $.Slice<Uint8Array> = $.makeSlice<Uint8Array>(k, 8)
	let __goscriptTuple7: any = sigDecode(sig, z, h, p)
	let ch: $.Slice<number> = __goscriptTuple7[0]
	err = __goscriptTuple7[1]
	if (err != null) {
		return err
	}

	let c = __goscript_field.ntt(__goscript_field.sampleInBall(ch, p))

	// w = Â ∘ NTT(z) − NTT(c) ∘ NTT(t₁ ⋅ 2ᵈ)
	let zHat: $.Slice<__goscript_field.nttElement> = $.makeSlice<__goscript_field.nttElement>(l, 7)
	for (let __goscriptRangeTarget22 = zHat, __goscriptRangeWindow22 = $.sliceRange(__goscriptRangeTarget22), __goscriptSliceWindow24 = $.sliceRange(z), i = 0; i < __goscriptRangeWindow22.length; i++) {
		;(__goscriptRangeWindow22.backing as any[])[__goscriptRangeWindow22.offset + i] = __goscript_field.ntt($.cloneArrayValue(((__goscriptSliceWindow24.backing as any[])[$.windowSlot(__goscriptSliceWindow24, i)] as __goscript_field.ringElement), "mldsa.ringElement"))
	}
	let w: $.Slice<__goscript_field.ringElement> = $.makeSlice<__goscript_field.ringElement>(k, 8)
	for (let __goscriptRangeTarget23 = w, __goscriptRangeWindow23 = $.sliceRange(__goscriptRangeTarget23), __goscriptSliceWindow25 = $.sliceRange(A), __goscriptSliceWindow26 = $.sliceRange(zHat), __goscriptSliceWindow27 = $.sliceRange(t1Hat), i = 0; i < __goscriptRangeWindow23.length; i++) {
		let wHat: __goscript_field.nttElement = $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0))
		for (let __goscriptRangeCount5 = l, j = 0; j < __goscriptRangeCount5; j++) {
			wHat = ($.cloneArrayValue(__goscript_field.polyAdd(__goscriptStatic0(), $.cloneArrayValue(wHat, "mldsa.nttElement"), __goscript_field.nttMul($.cloneArrayValue(((__goscriptSliceWindow25.backing as any[])[$.windowSlot(__goscriptSliceWindow25, (i * l) + j)] as __goscript_field.nttElement), "mldsa.nttElement"), $.cloneArrayValue(((__goscriptSliceWindow26.backing as any[])[$.windowSlot(__goscriptSliceWindow26, j)] as __goscript_field.nttElement), "mldsa.nttElement"))), "mldsa.nttElement") as __goscript_field.nttElement)
		}
		wHat = ($.cloneArrayValue(__goscript_field.polySub(__goscriptStatic0(), $.cloneArrayValue(wHat, "mldsa.nttElement"), __goscript_field.nttMul($.cloneArrayValue(c, "mldsa.nttElement"), $.cloneArrayValue(((__goscriptSliceWindow27.backing as any[])[$.windowSlot(__goscriptSliceWindow27, i)] as __goscript_field.nttElement), "mldsa.nttElement"))), "mldsa.nttElement") as __goscript_field.nttElement);
		;(__goscriptRangeWindow23.backing as any[])[__goscriptRangeWindow23.offset + i] = __goscript_field.inverseNTT($.cloneArrayValue(wHat, "mldsa.nttElement"))
	}

	// Use hints h to compute w₁ from w(approx).
	let w1: $.Slice<Uint8Array> = $.makeSlice<Uint8Array>(k, 8)
	for (let __goscriptRangeTarget24 = w, __goscriptRangeWindow24 = $.sliceRange(__goscriptRangeTarget24), __goscriptSliceWindow28 = $.sliceRange(w1), __goscriptSliceWindow29 = $.sliceRange(h), i = 0; i < __goscriptRangeWindow24.length; i++) {
		;(__goscriptSliceWindow28.backing as any[])[$.windowSlot(__goscriptSliceWindow28, i)] = __goscript_field.useHint($.cloneArrayValue(((__goscriptRangeWindow24.backing as any[])[__goscriptRangeWindow24.offset + i] as __goscript_field.ringElement), "mldsa.ringElement"), $.cloneArrayValue(((__goscriptSliceWindow29.backing as any[])[$.windowSlot(__goscriptSliceWindow29, i)] as Uint8Array), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 256)), p)
	}

	let H: sha3.SHAKE | $.VarRef<sha3.SHAKE> | null = sha3.NewShake256()
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write($.goSlice($.pointerValue<Uint8Array>(_u3bc), undefined, undefined)) : sha3.SHAKE.prototype.Write.call(H, $.goSlice($.pointerValue<Uint8Array>(_u3bc), undefined, undefined)))
	for (let __goscriptRangeTarget25 = w, __goscriptRangeWindow25 = $.sliceRange(__goscriptRangeTarget25), __goscriptSliceWindow30 = $.sliceRange(w1), i = 0; i < __goscriptRangeWindow25.length; i++) {
		w1Encode(H, $.cloneArrayValue(((__goscriptSliceWindow30.backing as any[])[$.windowSlot(__goscriptSliceWindow30, i)] as Uint8Array), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 256)), p)
	}
	let computedCH: $.Slice<number> = $.makeSlice<number>(globalThis.Math.trunc(p._u3bb / 4), globalThis.Math.trunc(256 / 4), "byte")
	void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Read(computedCH) : sha3.SHAKE.prototype.Read.call(H, computedCH))

	for (let __goscriptRangeTarget26 = z, __goscriptRangeWindow26 = $.sliceRange(__goscriptRangeTarget26), i = 0; i < __goscriptRangeWindow26.length; i++) {
		if (coefficientsExceedBound($.cloneArrayValue(((__goscriptRangeWindow26.backing as any[])[__goscriptRangeWindow26.offset + i] as __goscript_field.ringElement), "mldsa.ringElement"), _u3b31_u3b2)) {
			return errInvalidSignatureCoeffBounds
		}
	}

	if (!bytes.Equal(ch, computedCH)) {
		return errInvalidSignatureChallenge
	}

	return null
}

export function sigEncode(ch: $.Slice<number>, z: $.Slice<__goscript_field.ringElement>, h: $.Slice<Uint8Array>, p: parameters): $.Slice<number> {
	let sig: $.Slice<number> = $.makeSlice<number>(0, sigSize(p), "byte")
	sig = $.appendSlice(sig, ch, $.byteSliceHint)
	for (let __goscriptRangeTarget27 = z, __goscriptRangeWindow27 = $.sliceRange(__goscriptRangeTarget27), i = 0; i < __goscriptRangeWindow27.length; i++) {
		sig = __goscript_field.bitPack(sig, $.cloneArrayValue(((__goscriptRangeWindow27.backing as any[])[__goscriptRangeWindow27.offset + i] as __goscript_field.ringElement), "mldsa.ringElement"), p)
	}
	sig = hintEncode(sig, h, p)
	return sig
}

export function sigDecode(sig: $.Slice<number>, z: $.Slice<__goscript_field.ringElement>, h: $.Slice<Uint8Array>, p: parameters): [$.Slice<number>, $.GoError] {
	let ch: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	if ($.sliceLen(sig) != sigSize(p)) {
		return [null, errInvalidSignatureLength]
	}
	let __goscriptAssign1_0: $.Slice<number> = $.goSlice(sig, undefined, globalThis.Math.trunc(p._u3bb / 4))
	let __goscriptAssign1_1: $.Slice<number> = $.goSlice(sig, globalThis.Math.trunc(p._u3bb / 4), undefined)
	ch = __goscriptAssign1_0
	sig = __goscriptAssign1_1
	for (let __goscriptRangeTarget28 = z, __goscriptRangeWindow28 = $.sliceRange(__goscriptRangeTarget28), i = 0; i < __goscriptRangeWindow28.length; i++) {
		let length = globalThis.Math.trunc(((p._u3b31 + 1) * 256) / 8);
		;(__goscriptRangeWindow28.backing as any[])[__goscriptRangeWindow28.offset + i] = __goscript_field.bitUnpack($.goSlice(sig, undefined, length), p)
		sig = $.goSlice(sig, length, undefined)
	}
	{
		let __goscriptShadow0 = hintDecode(sig, h, p)
		if (__goscriptShadow0 != null) {
			return [null, __goscriptShadow0]
		}
	}
	return [ch, null]
}

export function hintEncode(buf: $.Slice<number>, h: $.Slice<Uint8Array>, p: parameters): $.Slice<number> {
	let _u3c9 = p._u3c9
	let k = p.k
	let __goscriptTuple8: any = __goscript_field.sliceForAppend(buf, _u3c9 + k)
	let out: $.Slice<number> = __goscriptTuple8[0]
	let y: $.Slice<number> = __goscriptTuple8[1]
	let idx: number = 0
	for (let __goscriptSliceWindow31 = $.sliceRange(h), __goscriptSliceWindow32 = $.sliceRange(y), __goscriptRangeCount6 = k, i = 0; i < __goscriptRangeCount6; i++) {
		for (let j = 0; j < 256; j++) {
			if ($.arrayIndex(((__goscriptSliceWindow31.backing as any[])[$.windowSlot(__goscriptSliceWindow31, i)] as Uint8Array), j) != 0) {
				;(__goscriptSliceWindow32.backing as any[])[$.windowSlot(__goscriptSliceWindow32, idx)] = $.uint(j, 8)
				idx = ((idx + 1) & 0xff)
			}
		}
		;(__goscriptSliceWindow32.backing as any[])[$.windowSlot(__goscriptSliceWindow32, _u3c9 + i)] = idx
	}
	return out
}

export function hintDecode(y: $.Slice<number>, h: $.Slice<Uint8Array>, p: parameters): $.GoError {
	let _u3c9 = p._u3c9
	let k = p.k
	if ($.sliceLen(y) != (_u3c9 + k)) {
		return errors.New("mldsa: internal error: invalid signature hint length")
	}
	let idx: number = 0
	for (let __goscriptSliceWindow33 = $.sliceRange(y), __goscriptSliceWindow34 = $.sliceRange(h), __goscriptRangeCount7 = k, i = 0; i < __goscriptRangeCount7; i++) {
		let limit = ((__goscriptSliceWindow33.backing as any[])[$.windowSlot(__goscriptSliceWindow33, _u3c9 + i)] as number)
		if ((limit < idx) || (limit > $.uint(_u3c9, 8))) {
			return errInvalidSignatureHintLimits
		}
		let first = idx
		while (idx < limit) {
			if ((idx > first) && (((__goscriptSliceWindow33.backing as any[])[$.windowSlot(__goscriptSliceWindow33, ((idx - 1) & 0xff))] as number) >= ((__goscriptSliceWindow33.backing as any[])[$.windowSlot(__goscriptSliceWindow33, idx)] as number))) {
				return errInvalidSignatureHintIndexOrder
			}
			;((__goscriptSliceWindow34.backing as any[])[$.windowSlot(__goscriptSliceWindow34, i)] as Uint8Array)[((__goscriptSliceWindow33.backing as any[])[$.windowSlot(__goscriptSliceWindow33, idx)] as number)] = 1
			idx = ((idx + 1) & 0xff)
		}
	}
	for (let __goscriptSliceWindow35 = $.sliceRange(y), i = idx; i < $.uint(_u3c9, 8); i = ((i + 1) & 0xff)) {
		if (((__goscriptSliceWindow35.backing as any[])[$.windowSlot(__goscriptSliceWindow35, i)] as number) != 0) {
			return errInvalidSignatureHintExtraIndices
		}
	}
	return null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "mldsa.nttElement", zero: () => $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0)) }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "mldsa.ringElement", zero: () => $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0)) }})
}

var __goscriptAwait: any
