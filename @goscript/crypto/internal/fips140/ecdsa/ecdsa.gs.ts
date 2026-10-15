// Generated file based on ecdsa.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as bigmod from "@goscript/crypto/internal/fips140/bigmod/index.js"

import * as drbg2 from "@goscript/crypto/internal/fips140/drbg/index.js"

import * as nistec from "@goscript/crypto/internal/fips140/nistec/index.js"

import * as errors from "@goscript/errors/index.js"

import * as hash2 from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as sync from "@goscript/sync/index.js"

import * as hmac from "@goscript/crypto/internal/fips140/hmac/index.js"

import * as __goscript_cast from "./cast.gs.ts"

import * as __goscript_ecdsa_noasm from "./ecdsa_noasm.gs.ts"

import * as __goscript_hmacdrbg from "./hmacdrbg.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/bigmod/index.js"
import "@goscript/crypto/internal/fips140/drbg/index.js"
import "@goscript/crypto/internal/fips140/nistec/index.js"
import "@goscript/errors/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/sync/index.js"
import "@goscript/crypto/internal/fips140/hmac/index.js"
import "./cast.gs.ts"
import "./ecdsa_noasm.gs.ts"
import "./hmacdrbg.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/ecdsa", ["ecdsa.PrivateKey", "ecdsa.PublicKey", "ecdsa.curveID", "ecdsa.Curve", "ecdsa.Point", "ecdsa.Signature"])

export type curveID = string

export type Point = {
	Add(__typeArgs: $.GenericTypeArgs | undefined, p1: any, p2: any): any
	Bytes(__typeArgs: $.GenericTypeArgs | undefined): $.Slice<number>
	BytesX(__typeArgs: $.GenericTypeArgs | undefined): [$.Slice<number>, $.GoError]
	ScalarBaseMult(__typeArgs: $.GenericTypeArgs | undefined, _p0: $.Slice<number>): [any, $.GoError]
	ScalarMult(__typeArgs: $.GenericTypeArgs | undefined, _p0: any, _p1: $.Slice<number>): [any, $.GoError]
	SetBytes(__typeArgs: $.GenericTypeArgs | undefined, _p0: $.Slice<number>): [any, $.GoError]
}

$.registerInterfaceType(
	"ecdsa.Point",
	null,
	[$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])]
);

export class PublicKey {
	public get curve(): curveID {
		return this._fields.curve
	}

	public set curve(value: curveID) {
		this._fields.curve = value
	}

	public get q(): $.Slice<number> {
		return this._fields.q
	}

	public set q(value: $.Slice<number>) {
		this._fields.q = value
	}

	public _fields: {
		curve: curveID
		q: $.Slice<number>
	}

	constructor(init?: Partial<{curve?: curveID, q?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			curve: init?.curve ?? ("" as curveID),
			q: init?.q ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PublicKey {
		return new PublicKey(this, true)
	}

	public __goscriptAssign(source: PublicKey): void {
		const target = this._fields
		const values = source._fields
		target.curve = values.curve
		target.q = values.q
	}

	public Bytes(): $.Slice<number> {
		const pub: PublicKey | $.VarRef<PublicKey> | null = this;
		return $.pointerValue<PublicKey>(pub).q
	}

	static __typeInfo = $.registerStructType(
		"ecdsa.PublicKey",
		() => new PublicKey(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		PublicKey,
		() => [/* @__PURE__ */ $.structField("curve", /* @__PURE__ */ $.basicType("string", "ecdsa.curveID"), [0], 0, false, { pkgPath: "crypto/internal/fips140/ecdsa" }), /* @__PURE__ */ $.structField("q", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 16, false, { pkgPath: "crypto/internal/fips140/ecdsa" })]
	)
}

export class PrivateKey {
	public get pub(): PublicKey {
		return this._fields.pub
	}

	public set pub(value: PublicKey) {
		this._fields.pub = value
	}

	public get d(): $.Slice<number> {
		return this._fields.d
	}

	public set d(value: $.Slice<number>) {
		this._fields.d = value
	}

	public _fields: {
		pub: PublicKey
		d: $.Slice<number>
	}

	constructor(init?: Partial<{pub?: PublicKey, d?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			pub: init?.pub ? init.pub.clone() : new PublicKey(undefined, true),
			d: init?.d ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PrivateKey {
		return new PrivateKey(this, true)
	}

	public __goscriptAssign(source: PrivateKey): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.pub, values.pub)
		target.d = values.d
	}

	public Bytes(): $.Slice<number> {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		return $.pointerValue<PrivateKey>(priv).d
	}

	public PublicKey(): PublicKey | $.VarRef<PublicKey> | null {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		return $.fieldRef($.pointerValue<PrivateKey>(priv)._fields, "pub")
	}

	static __typeInfo = $.registerStructType(
		"ecdsa.PrivateKey",
		() => new PrivateKey(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("PublicKey", [], [/* @__PURE__ */ $.pointerType("ecdsa.PublicKey")], true)],
		PrivateKey,
		() => [/* @__PURE__ */ $.structField("pub", "ecdsa.PublicKey", [0], 0, false, { pkgPath: "crypto/internal/fips140/ecdsa" }), /* @__PURE__ */ $.structField("d", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 40, false, { pkgPath: "crypto/internal/fips140/ecdsa" })]
	)
}

export class Curve {
	public get curve(): curveID {
		return this._fields.curve
	}

	public set curve(value: curveID) {
		this._fields.curve = value
	}

	public get newPoint(): (() => any | globalThis.Promise<any>) | null {
		return this._fields.newPoint
	}

	public set newPoint(value: (() => any | globalThis.Promise<any>) | null) {
		this._fields.newPoint = value
	}

	public get ordInverse(): ((_p0: $.VarRef<bigint[]> | null) => void) | null {
		return this._fields.ordInverse
	}

	public set ordInverse(value: ((_p0: $.VarRef<bigint[]> | null) => void) | null) {
		this._fields.ordInverse = value
	}

	public get N(): bigmod.Modulus | $.VarRef<bigmod.Modulus> | null {
		return this._fields.N
	}

	public set N(value: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null) {
		this._fields.N = value
	}

	public get nMinus2(): $.Slice<number> {
		return this._fields.nMinus2
	}

	public set nMinus2(value: $.Slice<number>) {
		this._fields.nMinus2 = value
	}

	public _fields: {
		curve: curveID
		newPoint: (() => any | globalThis.Promise<any>) | null
		ordInverse: ((_p0: $.VarRef<bigint[]> | null) => void) | null
		N: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null
		nMinus2: $.Slice<number>
	}

	constructor(init?: Partial<{curve?: curveID, newPoint?: (() => any | globalThis.Promise<any>) | null, ordInverse?: ((_p0: $.VarRef<bigint[]> | null) => void) | null, N?: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null, nMinus2?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			curve: init?.curve ?? ("" as curveID),
			newPoint: init?.newPoint ?? (null! as (() => any | globalThis.Promise<any>) | null),
			ordInverse: init?.ordInverse ?? (null! as ((_p0: $.VarRef<bigint[]> | null) => void) | null),
			N: init?.N ?? (null! as bigmod.Modulus | $.VarRef<bigmod.Modulus> | null),
			nMinus2: init?.nMinus2 ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Curve {
		return new Curve(this, true)
	}

	public __goscriptAssign(source: Curve): void {
		const target = this._fields
		const values = source._fields
		target.curve = values.curve
		target.newPoint = values.newPoint
		target.ordInverse = values.ordInverse
		target.N = values.N
		target.nMinus2 = values.nMinus2
	}

	static __typeInfo = $.registerStructType(
		"ecdsa.Curve",
		() => new Curve(),
		() => [],
		Curve,
		() => [/* @__PURE__ */ $.structField("curve", /* @__PURE__ */ $.basicType("string", "ecdsa.curveID"), [0], 0, false, { pkgPath: "crypto/internal/fips140/ecdsa" }), /* @__PURE__ */ $.structField("newPoint", ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }] } as $.FunctionTypeInfo), [1], 16, false, { pkgPath: "crypto/internal/fips140/ecdsa" }), /* @__PURE__ */ $.structField("ordInverse", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 4))], results: [] } as $.FunctionTypeInfo), [2], 24, false, { pkgPath: "crypto/internal/fips140/ecdsa" }), /* @__PURE__ */ $.structField("N", /* @__PURE__ */ $.pointerType("bigmod.Modulus"), [3], 32, true), /* @__PURE__ */ $.structField("nMinus2", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 40, false, { pkgPath: "crypto/internal/fips140/ecdsa" })]
	)
}

export class Signature {
	public get R(): $.Slice<number> {
		return this._fields.R
	}

	public set R(value: $.Slice<number>) {
		this._fields.R = value
	}

	public get S(): $.Slice<number> {
		return this._fields.S
	}

	public set S(value: $.Slice<number>) {
		this._fields.S = value
	}

	public _fields: {
		R: $.Slice<number>
		S: $.Slice<number>
	}

	constructor(init?: Partial<{R?: $.Slice<number>, S?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			R: init?.R ?? (null! as $.Slice<number>),
			S: init?.S ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Signature {
		return new Signature(this, true)
	}

	public __goscriptAssign(source: Signature): void {
		const target = this._fields
		const values = source._fields
		target.R = values.R
		target.S = values.S
	}

	static __typeInfo = $.registerStructType(
		"ecdsa.Signature",
		() => new Signature(),
		() => [],
		Signature,
		() => [/* @__PURE__ */ $.structField("R", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, true), /* @__PURE__ */ $.structField("S", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, true)]
	)
}

export const p224: curveID = "P-224"

export const p256: curveID = "P-256"

export const p384: curveID = "P-384"

export const p521: curveID = "P-521"

export function precomputeParams(__typeArgs: $.GenericTypeArgs | undefined, c: Curve | $.VarRef<Curve> | null, order: $.Slice<number>): void {
	const c$: Curve = c == null ? $.pointerTarget<Curve>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Curve>(c)
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple0: any = bigmod.NewModulus(order);
	;(c$ as Curve).N = __goscriptTuple0[0]
	err = __goscriptTuple0[1]
	if (err != null) {
		$.panic((err as any))
	}
	let __goscriptTuple1: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), new Uint8Array([2]) as $.Slice<number>, (c$ as Curve).N)
	let two: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple1[0];
	;(c$ as Curve).nMinus2 = bigmod.Nat.prototype.Bytes.call(bigmod.Nat.prototype.Sub.call(bigmod.Nat.prototype.ExpandFor.call(bigmod.NewNat(), (c$ as Curve).N), two, (c$ as Curve).N), (c$ as Curve).N)
}

export async function P224(): globalThis.Promise<Curve | $.VarRef<Curve> | null> {
	return _P224!()
}

export let _P224: (() => Curve | $.VarRef<Curve> | null | globalThis.Promise<Curve | $.VarRef<Curve> | null>) | null = sync.OnceValue($.functionValue((): Curve | $.VarRef<Curve> | null => {
	let c: Curve | $.VarRef<Curve> | null = new Curve({curve: "P-224", newPoint: nistec.NewP224Point})
	precomputeParams(__goscriptStatic0(), c, p224Order)
	return c
}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("ecdsa.Curve")] } as $.FunctionTypeInfo)))

export function __goscript_set__P224(__goscriptValue: (() => Curve | $.VarRef<Curve> | null | globalThis.Promise<Curve | $.VarRef<Curve> | null>) | null): void {
	_P224 = __goscriptValue
}

export let p224Order: $.Slice<number> = new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 22, 162, 224, 184, 240, 62, 19, 221, 41, 69, 92, 92, 42, 61]) as $.Slice<number>

export function __goscript_set_p224Order(__goscriptValue: $.Slice<number>): void {
	p224Order = __goscriptValue
}

export async function P256(): globalThis.Promise<Curve | $.VarRef<Curve> | null> {
	return _P256!()
}

export let _P256: (() => Curve | $.VarRef<Curve> | null | globalThis.Promise<Curve | $.VarRef<Curve> | null>) | null = sync.OnceValue($.functionValue((): Curve | $.VarRef<Curve> | null => {
	let c: Curve | $.VarRef<Curve> | null = new Curve({curve: "P-256", newPoint: nistec.NewP256Point, ordInverse: nistec.P256OrdInverse})
	precomputeParams(__goscriptStatic1(), c, p256Order)
	return c
}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("ecdsa.Curve")] } as $.FunctionTypeInfo)))

export function __goscript_set__P256(__goscriptValue: (() => Curve | $.VarRef<Curve> | null | globalThis.Promise<Curve | $.VarRef<Curve> | null>) | null): void {
	_P256 = __goscriptValue
}

export let p256Order: $.Slice<number> = new Uint8Array([255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 188, 230, 250, 173, 167, 23, 158, 132, 243, 185, 202, 194, 252, 99, 37, 81]) as $.Slice<number>

export function __goscript_set_p256Order(__goscriptValue: $.Slice<number>): void {
	p256Order = __goscriptValue
}

export async function P384(): globalThis.Promise<Curve | $.VarRef<Curve> | null> {
	return _P384!()
}

export let _P384: (() => Curve | $.VarRef<Curve> | null | globalThis.Promise<Curve | $.VarRef<Curve> | null>) | null = sync.OnceValue($.functionValue((): Curve | $.VarRef<Curve> | null => {
	let c: Curve | $.VarRef<Curve> | null = new Curve({curve: "P-384", newPoint: nistec.NewP384Point})
	precomputeParams(__goscriptStatic2(), c, p384Order)
	return c
}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("ecdsa.Curve")] } as $.FunctionTypeInfo)))

export function __goscript_set__P384(__goscriptValue: (() => Curve | $.VarRef<Curve> | null | globalThis.Promise<Curve | $.VarRef<Curve> | null>) | null): void {
	_P384 = __goscriptValue
}

export let p384Order: $.Slice<number> = new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 199, 99, 77, 129, 244, 55, 45, 223, 88, 26, 13, 178, 72, 176, 167, 122, 236, 236, 25, 106, 204, 197, 41, 115]) as $.Slice<number>

export function __goscript_set_p384Order(__goscriptValue: $.Slice<number>): void {
	p384Order = __goscriptValue
}

export async function P521(): globalThis.Promise<Curve | $.VarRef<Curve> | null> {
	return _P521!()
}

export let _P521: (() => Curve | $.VarRef<Curve> | null | globalThis.Promise<Curve | $.VarRef<Curve> | null>) | null = sync.OnceValue($.functionValue((): Curve | $.VarRef<Curve> | null => {
	let c: Curve | $.VarRef<Curve> | null = new Curve({curve: "P-521", newPoint: nistec.NewP521Point})
	precomputeParams(__goscriptStatic3(), c, p521Order)
	return c
}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("ecdsa.Curve")] } as $.FunctionTypeInfo)))

export function __goscript_set__P521(__goscriptValue: (() => Curve | $.VarRef<Curve> | null | globalThis.Promise<Curve | $.VarRef<Curve> | null>) | null): void {
	_P521 = __goscriptValue
}

export let p521Order: $.Slice<number> = new Uint8Array([1, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 250, 81, 134, 135, 131, 191, 47, 150, 107, 127, 204, 1, 72, 247, 9, 165, 208, 59, 181, 201, 184, 137, 156, 71, 174, 187, 111, 183, 30, 145, 56, 100, 9]) as $.Slice<number>

export function __goscript_set_p521Order(__goscriptValue: $.Slice<number>): void {
	p521Order = __goscriptValue
}

export async function NewPrivateKey(__typeArgs: $.GenericTypeArgs | undefined, c: Curve | $.VarRef<Curve> | null, D: $.Slice<number>, Q: $.Slice<number>): globalThis.Promise<[PrivateKey | $.VarRef<PrivateKey> | null, $.GoError]> {
	const c$: Curve = c == null ? $.pointerTarget<Curve>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Curve>(c)
	fips140.RecordApproved()
	let __goscriptTuple2: any = await NewPublicKey({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, Q)
	let pub: PublicKey | $.VarRef<PublicKey> | null = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if (err != null) {
		return [null, err]
	}
	if ($.sliceLen(D) != bigmod.Modulus.prototype.Size.call((c$ as Curve).N)) {
		return [null, errors.New("ecdsa: invalid private key length")]
	}
	let __goscriptTuple3: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), D, (c$ as Curve).N)
	let d: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple3[0]
	err = __goscriptTuple3[1]
	if (err != null) {
		return [null, err]
	}
	if ((d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as bigmod.Nat).IsZero() : bigmod.Nat.prototype.IsZero.call(d)) == 1) {
		return [null, errors.New("ecdsa: private key is zero")]
	}
	let priv: PrivateKey | $.VarRef<PrivateKey> | null = (() => { const __goscriptLiteralField0 = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as bigmod.Nat).Bytes((c$ as Curve).N) : bigmod.Nat.prototype.Bytes.call(d, (c$ as Curve).N)); return new PrivateKey({pub: $.pointerValue<PublicKey>(pub), d: __goscriptLiteralField0}) })()
	return [priv, null]
}

export async function NewPublicKey(__typeArgs: $.GenericTypeArgs | undefined, c: Curve | $.VarRef<Curve> | null, Q: $.Slice<number>): globalThis.Promise<[PublicKey | $.VarRef<PublicKey> | null, $.GoError]> {
	const c$: Curve = c == null ? $.pointerTarget<Curve>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Curve>(c)
	// SetBytes checks that Q is a valid point on the curve, and that its
	// coordinates are reduced modulo p, fulfilling the requirements of SP
	// 800-89, Section 5.3.2.
	if (($.sliceLen(Q) < 1) || ($.arrayIndex(Q!, 0) == 0)) {
		return [null, errors.New("ecdsa: invalid public key encoding")]
	}
	let [, err] = await $.callGenericMethod(__typeArgs, "P", "SetBytes", (__goscriptAwait = (c$ as Curve).newPoint!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), Q)
	if (err != null) {
		return [null, err]
	}
	return [new PublicKey({curve: (c$ as Curve).curve, q: Q}), null]
}

export async function GenerateKey(__typeArgs: $.GenericTypeArgs | undefined, c: Curve | $.VarRef<Curve> | null, rand: io.Reader | null): globalThis.Promise<[PrivateKey | $.VarRef<PrivateKey> | null, $.GoError]> {
	const c$: Curve = c == null ? $.pointerTarget<Curve>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Curve>(c)
	fips140.RecordApproved()

	let __goscriptTuple4: any = await randomPoint({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, $.functionValue(async (b: $.Slice<number>): globalThis.Promise<$.GoError> => {
		return await drbg2.ReadWithReader(rand, b)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo)))
	let k: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple4[0]
	let Q = (__goscriptTuple4[1] as any)
	let err = __goscriptTuple4[2]
	if (err != null) {
		return [null, err]
	}

	let priv: PrivateKey | $.VarRef<PrivateKey> | null = (await (async () => { const __goscriptLiteralField2 = (k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as bigmod.Nat).Bytes((c$ as Curve).N) : bigmod.Nat.prototype.Bytes.call(k, (c$ as Curve).N)); return new PrivateKey({pub: (await (async () => { const __goscriptLiteralField1 = ((__goscriptAwait = $.callGenericMethod(__typeArgs, "P", "Bytes", Q), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>); return new PublicKey({curve: (c$ as Curve).curve, q: __goscriptLiteralField1}, true) })()), d: __goscriptLiteralField2}) })())
	await __goscript_cast.fipsPCT({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, priv)
	return [priv, null]
}

export async function randomPoint(__typeArgs: $.GenericTypeArgs | undefined, c: Curve | $.VarRef<Curve> | null, generate: ((_p0: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<[bigmod.Nat | $.VarRef<bigmod.Nat> | null, any, $.GoError]> {
	let k: bigmod.Nat | $.VarRef<bigmod.Nat> | null = null! as bigmod.Nat | $.VarRef<bigmod.Nat> | null
	let p: any = $.genericZero(__typeArgs, "P", null)
	let err: $.GoError = null! as $.GoError
	const c$: Curve = c == null ? $.pointerTarget<Curve>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Curve>(c)
	while (true) {
		let b: $.Slice<number> = $.makeSlice<number>(bigmod.Modulus.prototype.Size.call((c$ as Curve).N), undefined, "byte")
		{
			let __goscriptShadow0 = (__goscriptAwait = generate!(b), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow0 != null) {
				return [null, null, __goscriptShadow0]
			}
		}

		// Take only the leftmost bits of the generated random value. This is
		// both necessary to increase the chance of the random value being in
		// the correct range and to match the specification. It's unfortunate
		// that we need to do a shift instead of a mask, but see the comment on
		// rightShift.
		//
		// These are the most dangerous lines in the package and maybe in the
		// library: a single bit of bias in the selection of nonces would likely
		// lead to key recovery, but no tests would fail. Look but DO NOT TOUCH.
		{
			let excess: number = ($.sliceLen(b) * 8) - bigmod.Modulus.prototype.BitLen.call((c$ as Curve).N)
			if (excess > 0) {
				// Just to be safe, assert that this only happens for the one curve that
				// doesn't have a round number of bits.
				if (!$.stringEqual((c$ as Curve).curve, "P-521")) {
					$.panic("ecdsa: internal error: unexpectedly masking off bits")
				}
				b = rightShift(b, excess)
			}
		}

		// FIPS 186-5, Appendix A.4.2 makes us check x <= N - 2 and then return
		// x + 1. Note that it follows that 0 < x + 1 < N. Instead, SetBytes
		// checks that k < N, and we explicitly check 0 != k. Since k can't be
		// negative, this is strictly equivalent. None of this matters anyway
		// because the chance of selecting zero is cryptographically negligible.
		{
			let __goscriptTuple5: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), b, (c$ as Curve).N)
			let __goscriptShadow1: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple5[0]
			let __goscriptShadow2 = __goscriptTuple5[1]
			if ((__goscriptShadow2 == null) && ((__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as bigmod.Nat).IsZero() : bigmod.Nat.prototype.IsZero.call(__goscriptShadow1)) == 0)) {
				let __goscriptTuple6: any = await $.callGenericMethod(__typeArgs, "P", "ScalarBaseMult", (__goscriptAwait = (c$ as Curve).newPoint!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as bigmod.Nat).Bytes((c$ as Curve).N) : bigmod.Nat.prototype.Bytes.call(__goscriptShadow1, (c$ as Curve).N)))
				let __goscriptShadow3 = (__goscriptTuple6[0] as any)
				let __goscriptShadow4 = __goscriptTuple6[1]
				return [__goscriptShadow1, __goscriptShadow3, __goscriptShadow4]
			}
		}

		if (__goscript_get_testingOnlyRejectionSamplingLooped() != null) {
			void (__goscriptAwait = __goscript_get_testingOnlyRejectionSamplingLooped()!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export var testingOnlyRejectionSamplingLooped: (() => void) | null

export function __goscript_init_testingOnlyRejectionSamplingLooped(): void {
	if (((testingOnlyRejectionSamplingLooped) as any) === undefined) {
		testingOnlyRejectionSamplingLooped = null! as (() => void) | null
	}
}

export function __goscript_get_testingOnlyRejectionSamplingLooped(): (() => void) | null {
	if (((testingOnlyRejectionSamplingLooped) as any) === undefined) {
		__goscript_init_testingOnlyRejectionSamplingLooped()
	}
	return testingOnlyRejectionSamplingLooped
}

export function __goscript_set_testingOnlyRejectionSamplingLooped(__goscriptValue: (() => void) | null): void {
	testingOnlyRejectionSamplingLooped = __goscriptValue
}

export async function Sign(__typeArgs: $.GenericTypeArgs | undefined, c: Curve | $.VarRef<Curve> | null, h: (() => any | globalThis.Promise<any>) | null, priv: PrivateKey | $.VarRef<PrivateKey> | null, rand: io.Reader | null, hash: $.Slice<number>): globalThis.Promise<[Signature | $.VarRef<Signature> | null, $.GoError]> {
	const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv)
	if (!$.stringEqual((priv$ as PrivateKey).pub.curve, $.pointerValue<Curve>(c).curve)) {
		return [null, errors.New("ecdsa: private key does not match curve")]
	}
	if ($.sliceLen(hash) == 0) {
		return [null, errors.New("ecdsa: hash cannot be empty")]
	}
	fips140.RecordApproved()
	void (__goscriptAwait = __goscript_cast.__goscript_get_fipsSelfTest()!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	// Random ECDSA is dangerous, because a failure of the RNG would immediately
	// leak the private key. Instead, we use a "hedged" approach, as specified
	// in draft-irtf-cfrg-det-sigs-with-noise-04, Section 4. This has also the
	// advantage of closely resembling Deterministic ECDSA.

	let Z: $.Slice<number> = $.makeSlice<number>($.sliceLen((priv$ as PrivateKey).d), undefined, "byte")
	{
		let err = await drbg2.ReadWithReader(rand, Z)
		if (err != null) {
			return [null, err]
		}
	}

	// See https://github.com/cfrg/draft-irtf-cfrg-det-sigs-with-noise/issues/6
	// for the FIPS compliance of this method. In short Z is entropy from the
	// main DRBG, of length 3/2 of security_strength, so the nonce is optional
	// per SP 800-90Ar1, Section 8.6.7, and the rest is a personalization
	// string, which per SP 800-90Ar1, Section 8.7.1 may contain secret
	// information.
	let __goscriptShadow5: __goscript_hmacdrbg.hmacDRBG | $.VarRef<__goscript_hmacdrbg.hmacDRBG> | null = await __goscript_hmacdrbg.newDRBG({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, h, Z, null, $.namedValueInterfaceValue<__goscript_hmacdrbg.personalizationString | null>($.arrayToSlice<$.Slice<number>>([(priv$ as PrivateKey).d, bits2octets({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, hash)]), "ecdsa.blockAlignedPersonalizationString", __goscriptStatic4(), __goscriptStatic5(), __goscriptStatic6()))

	return __goscript_ecdsa_noasm.sign({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, priv, __goscriptShadow5, hash)
}

export async function SignDeterministic(__typeArgs: $.GenericTypeArgs | undefined, c: Curve | $.VarRef<Curve> | null, h: (() => any | globalThis.Promise<any>) | null, priv: PrivateKey | $.VarRef<PrivateKey> | null, hash: $.Slice<number>): globalThis.Promise<[Signature | $.VarRef<Signature> | null, $.GoError]> {
	const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv)
	if (!$.stringEqual((priv$ as PrivateKey).pub.curve, $.pointerValue<Curve>(c).curve)) {
		return [null, errors.New("ecdsa: private key does not match curve")]
	}
	if ($.sliceLen(hash) == 0) {
		return [null, errors.New("ecdsa: hash cannot be empty")]
	}
	fips140.RecordApproved()
	void (__goscriptAwait = __goscript_cast.__goscript_get_fipsSelfTestDeterministic()!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let __goscriptShadow6: __goscript_hmacdrbg.hmacDRBG | $.VarRef<__goscript_hmacdrbg.hmacDRBG> | null = await __goscript_hmacdrbg.newDRBG({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, h, (priv$ as PrivateKey).d, bits2octets({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, hash), null)
	return __goscript_ecdsa_noasm.sign({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, priv, __goscriptShadow6, hash)
}

export function bits2octets(__typeArgs: $.GenericTypeArgs | undefined, c: Curve | $.VarRef<Curve> | null, hash: $.Slice<number>): $.Slice<number> {
	let e: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.NewNat()
	hashToNat({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, e, hash)
	return (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as bigmod.Nat).Bytes($.pointerValue<Curve>(c).N) : bigmod.Nat.prototype.Bytes.call(e, $.pointerValue<Curve>(c).N))
}

export async function signGeneric(__typeArgs: $.GenericTypeArgs | undefined, c: Curve | $.VarRef<Curve> | null, priv: PrivateKey | $.VarRef<PrivateKey> | null, drbg: __goscript_hmacdrbg.hmacDRBG | $.VarRef<__goscript_hmacdrbg.hmacDRBG> | null, hash: $.Slice<number>): globalThis.Promise<[Signature | $.VarRef<Signature> | null, $.GoError]> {
	const c$: Curve = c == null ? $.pointerTarget<Curve>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Curve>(c)
	// FIPS 186-5, Section 6.4.1

	let __goscriptTuple7: any = await randomPoint({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, $.functionValue(async (b: $.Slice<number>): globalThis.Promise<$.GoError> => {
		await (drbg !== null && (drbg as any).__isVarRef !== true && (drbg as any).__goValue === undefined ? ((drbg as any) as __goscript_hmacdrbg.hmacDRBG).Generate(b) : __goscript_hmacdrbg.hmacDRBG.prototype.Generate.call(drbg, b))
		return null
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo)))
	let k: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple7[0]
	let R = (__goscriptTuple7[1] as any)
	let err = __goscriptTuple7[2]
	if (err != null) {
		return [null, err]
	}

	// kInv = k⁻¹
	let kInv: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.NewNat()
	await inverse({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, kInv, k)

	let __goscriptTuple8: any = await $.callGenericMethod(__typeArgs, "P", "BytesX", R)
	let Rx: $.Slice<number> = __goscriptTuple8[0]
	err = __goscriptTuple8[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple9: any = bigmod.Nat.prototype.SetOverflowingBytes.call(bigmod.NewNat(), Rx, (c$ as Curve).N)
	let r: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple9[0]
	err = __goscriptTuple9[1]
	if (err != null) {
		return [null, err]
	}

	// The spec wants us to retry here, but the chance of hitting this condition
	// on a large prime-order group like the NIST curves we support is
	// cryptographically negligible. If we hit it, something is awfully wrong.
	if ((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as bigmod.Nat).IsZero() : bigmod.Nat.prototype.IsZero.call(r)) == 1) {
		return [null, errors.New("ecdsa: internal error: r is zero")]
	}

	let e: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.NewNat()
	hashToNat({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, e, hash)

	let __goscriptTuple10: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), $.pointerValue<PrivateKey>(priv).d, (c$ as Curve).N)
	let s: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple10[0]
	err = __goscriptTuple10[1]
	if (err != null) {
		return [null, err]
	}
	void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bigmod.Nat).Mul(r, (c$ as Curve).N) : bigmod.Nat.prototype.Mul.call(s, r, (c$ as Curve).N))
	void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bigmod.Nat).Add(e, (c$ as Curve).N) : bigmod.Nat.prototype.Add.call(s, e, (c$ as Curve).N))
	void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bigmod.Nat).Mul(kInv, (c$ as Curve).N) : bigmod.Nat.prototype.Mul.call(s, kInv, (c$ as Curve).N))

	// Again, the chance of this happening is cryptographically negligible.
	if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bigmod.Nat).IsZero() : bigmod.Nat.prototype.IsZero.call(s)) == 1) {
		return [null, errors.New("ecdsa: internal error: s is zero")]
	}

	return [(() => { const __goscriptLiteralField3 = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as bigmod.Nat).Bytes((c$ as Curve).N) : bigmod.Nat.prototype.Bytes.call(r, (c$ as Curve).N)); const __goscriptLiteralField4 = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bigmod.Nat).Bytes((c$ as Curve).N) : bigmod.Nat.prototype.Bytes.call(s, (c$ as Curve).N)); return new Signature({R: __goscriptLiteralField3, S: __goscriptLiteralField4}) })(), null]
}

export async function inverse(__typeArgs: $.GenericTypeArgs | undefined, c: Curve | $.VarRef<Curve> | null, kInv: bigmod.Nat | $.VarRef<bigmod.Nat> | null, k: bigmod.Nat | $.VarRef<bigmod.Nat> | null): globalThis.Promise<void> {
	const c$: Curve = c == null ? $.pointerTarget<Curve>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Curve>(c)
	if (((c$ as Curve).ordInverse != null) && ((64 as number) == 64)) {
		{
			let kb: $.Slice<number> = (k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as bigmod.Nat).Bits() : bigmod.Nat.prototype.Bits.call(k))
			if ($.sliceLen(kb) == 4) {
				let k64 = $.varRef($.arrayValue([$.uint64($.arrayIndex(kb!, 0)), $.uint64($.arrayIndex(kb!, 1)), $.uint64($.arrayIndex(kb!, 2)), $.uint64($.arrayIndex(kb!, 3))]))
				void (__goscriptAwait = (c$ as Curve).ordInverse!(k64), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				bigmod.Nat.prototype.SetBits.call(kInv, $.arrayToSlice<number>([$.uint($.arrayIndex(k64.value, 0), 64), $.uint($.arrayIndex(k64.value, 1), 64), $.uint($.arrayIndex(k64.value, 2), 64), $.uint($.arrayIndex(k64.value, 3), 64)]))
				return
			}
		}
	}

	// Calculate the inverse of s in GF(N) using Fermat's method
	// (exponentiation modulo P - 2, per Euler's theorem)
	void (kInv !== null && (kInv as any).__isVarRef !== true && (kInv as any).__goValue === undefined ? ((kInv as any) as bigmod.Nat).Exp(k, (c$ as Curve).nMinus2, (c$ as Curve).N) : bigmod.Nat.prototype.Exp.call(kInv, k, (c$ as Curve).nMinus2, (c$ as Curve).N))
}

export function hashToNat(__typeArgs: $.GenericTypeArgs | undefined, c: Curve | $.VarRef<Curve> | null, e: bigmod.Nat | $.VarRef<bigmod.Nat> | null, hash: $.Slice<number>): void {
	const c$: Curve = c == null ? $.pointerTarget<Curve>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Curve>(c)
	// ECDSA asks us to take the left-most log2(N) bits of hash, and use them as
	// an integer modulo N. This is the absolute worst of all worlds: we still
	// have to reduce, because the result might still overflow N, but to take
	// the left-most bits for P-521 we have to do a right shift.
	{
		let size = bigmod.Modulus.prototype.Size.call((c$ as Curve).N)
		if ($.sliceLen(hash) >= size) {
			hash = $.goSlice(hash, undefined, size)
			{
				let excess: number = ($.sliceLen(hash) * 8) - bigmod.Modulus.prototype.BitLen.call((c$ as Curve).N)
				if (excess > 0) {
					hash = rightShift(hash, excess)
				}
			}
		}
	}
	let [, err] = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as bigmod.Nat).SetOverflowingBytes(hash, (c$ as Curve).N) : bigmod.Nat.prototype.SetOverflowingBytes.call(e, hash, (c$ as Curve).N))
	if (err != null) {
		$.panic("ecdsa: internal error: truncated hash is too long")
	}
}

export function rightShift(b: $.Slice<number>, shift: number): $.Slice<number> {
	if ((shift <= 0) || (shift >= 8)) {
		$.panic("ecdsa: internal error: shift can only be by 1 to 7 bits")
	}
	b = bytes.Clone(b)
	for (let __goscriptSliceWindow0 = $.sliceRange(b), i = $.sliceLen(b) - 1; i >= 0; i--) {
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] >>> ($.uint(shift, 8))) >>> 0
		if (i > 0) {
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = (__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] | ($.uint(((((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i - 1)] as number) << (8 - shift)) & 0xff), 8))
		}
	}
	return b
}

export async function Verify(__typeArgs: $.GenericTypeArgs | undefined, c: Curve | $.VarRef<Curve> | null, pub: PublicKey | $.VarRef<PublicKey> | null, hash: $.Slice<number>, sig: Signature | $.VarRef<Signature> | null): globalThis.Promise<$.GoError> {
	if (!$.stringEqual($.pointerValue<PublicKey>(pub).curve, $.pointerValue<Curve>(c).curve)) {
		return errors.New("ecdsa: public key does not match curve")
	}
	if ($.sliceLen(hash) == 0) {
		return errors.New("ecdsa: hash cannot be empty")
	}
	fips140.RecordApproved()
	void (__goscriptAwait = __goscript_cast.__goscript_get_fipsSelfTest()!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return __goscript_ecdsa_noasm.verify({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, pub, hash, sig)
}

export async function verifyGeneric(__typeArgs: $.GenericTypeArgs | undefined, c: Curve | $.VarRef<Curve> | null, pub: PublicKey | $.VarRef<PublicKey> | null, hash: $.Slice<number>, sig: Signature | $.VarRef<Signature> | null): globalThis.Promise<$.GoError> {
	const c$: Curve = c == null ? $.pointerTarget<Curve>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Curve>(c)
	const sig$: Signature = sig == null ? $.pointerTarget<Signature>(sig) : (sig as any).__isVarRef === true ? (sig as any).value : (sig as any).__goValue === undefined ? (sig as any) : $.pointerTarget<Signature>(sig)
	// FIPS 186-5, Section 6.4.2

	let __goscriptTuple11: any = await $.callGenericMethod(__typeArgs, "P", "SetBytes", (__goscriptAwait = (c$ as Curve).newPoint!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.pointerValue<PublicKey>(pub).q)
	let Q = (__goscriptTuple11[0] as any)
	let err = __goscriptTuple11[1]
	if (err != null) {
		return err
	}

	let __goscriptTuple12: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), (sig$ as Signature).R, (c$ as Curve).N)
	let r: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple12[0]
	err = __goscriptTuple12[1]
	if (err != null) {
		return err
	}
	if ((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as bigmod.Nat).IsZero() : bigmod.Nat.prototype.IsZero.call(r)) == 1) {
		return errors.New("ecdsa: invalid signature: r is zero")
	}
	let __goscriptTuple13: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), (sig$ as Signature).S, (c$ as Curve).N)
	let s: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple13[0]
	err = __goscriptTuple13[1]
	if (err != null) {
		return err
	}
	if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bigmod.Nat).IsZero() : bigmod.Nat.prototype.IsZero.call(s)) == 1) {
		return errors.New("ecdsa: invalid signature: s is zero")
	}

	let e: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.NewNat()
	hashToNat({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, e, hash)

	// w = s⁻¹
	let w: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.NewNat()
	await inverse({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, w, s)

	// p₁ = [e * s⁻¹]G
	let __goscriptTuple14: any = await $.callGenericMethod(__typeArgs, "P", "ScalarBaseMult", (__goscriptAwait = (c$ as Curve).newPoint!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), bigmod.Nat.prototype.Bytes.call((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as bigmod.Nat).Mul(w, (c$ as Curve).N) : bigmod.Nat.prototype.Mul.call(e, w, (c$ as Curve).N)), (c$ as Curve).N))
	let p1 = (__goscriptTuple14[0] as any)
	err = __goscriptTuple14[1]
	if (err != null) {
		return err
	}
	// p₂ = [r * s⁻¹]Q
	let __goscriptTuple15: any = await $.callGenericMethod(__typeArgs, "P", "ScalarMult", Q, Q, bigmod.Nat.prototype.Bytes.call((w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as bigmod.Nat).Mul(r, (c$ as Curve).N) : bigmod.Nat.prototype.Mul.call(w, r, (c$ as Curve).N)), (c$ as Curve).N))
	let p2 = (__goscriptTuple15[0] as any)
	err = __goscriptTuple15[1]
	if (err != null) {
		return err
	}
	// BytesX returns an error for the point at infinity.
	let __goscriptTuple16: any = await $.callGenericMethod(__typeArgs, "P", "BytesX", (__goscriptAwait = $.callGenericMethod(__typeArgs, "P", "Add", p1, p1, p2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	let Rx: $.Slice<number> = __goscriptTuple16[0]
	err = __goscriptTuple16[1]
	if (err != null) {
		return err
	}

	let __goscriptTuple17: any = bigmod.Nat.prototype.SetOverflowingBytes.call(bigmod.NewNat(), Rx, (c$ as Curve).N)
	let v: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple17[0]
	err = __goscriptTuple17[1]
	if (err != null) {
		return err
	}

	if ((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as bigmod.Nat).Equal(r) : bigmod.Nat.prototype.Equal.call(v, r)) != 1) {
		return errors.New("ecdsa: signature did not verify")
	}
	return null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: { type: /* @__PURE__ */ $.pointerType("nistec.P224Point"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), BytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesCompressed(...$.stripGenericTypeArgs(args)), BytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesX(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Select(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetGenerator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetGenerator(...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytes(...$.stripGenericTypeArgs(args)), bytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesCompressed(...$.stripGenericTypeArgs(args)), bytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesX(...$.stripGenericTypeArgs(args)), generatorTable: (receiver: any, ...args: any[]) => $.pointerValue(receiver).generatorTable(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: { type: /* @__PURE__ */ $.pointerType("nistec.P256Point"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), AddAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddAffine(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), BytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesCompressed(...$.stripGenericTypeArgs(args)), BytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesX(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), Negate: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Negate(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Select(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetGenerator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetGenerator(...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytes(...$.stripGenericTypeArgs(args)), bytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesCompressed(...$.stripGenericTypeArgs(args)), bytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesX(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: { type: /* @__PURE__ */ $.pointerType("nistec.P384Point"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), BytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesCompressed(...$.stripGenericTypeArgs(args)), BytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesX(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Select(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetGenerator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetGenerator(...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytes(...$.stripGenericTypeArgs(args)), bytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesCompressed(...$.stripGenericTypeArgs(args)), bytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesX(...$.stripGenericTypeArgs(args)), generatorTable: (receiver: any, ...args: any[]) => $.pointerValue(receiver).generatorTable(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: { type: /* @__PURE__ */ $.pointerType("nistec.P521Point"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), BytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesCompressed(...$.stripGenericTypeArgs(args)), BytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesX(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Select(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetGenerator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetGenerator(...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytes(...$.stripGenericTypeArgs(args)), bytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesCompressed(...$.stripGenericTypeArgs(args)), bytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesX(...$.stripGenericTypeArgs(args)), generatorTable: (receiver: any, ...args: any[]) => $.pointerValue(receiver).generatorTable(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ({isPersonalizationString: (receiver: any, ...args: any[]) => (__goscript_hmacdrbg.blockAlignedPersonalizationString_isPersonalizationString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "ecdsa.blockAlignedPersonalizationString"))
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ([$.methodSignature("isPersonalizationString")])
}

var __goscriptAwait: any
