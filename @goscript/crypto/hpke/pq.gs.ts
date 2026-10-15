// Generated file based on pq.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as fips140 from "@goscript/crypto/fips140/index.js"

import * as drbg from "@goscript/crypto/internal/fips140/drbg/index.js"

import * as rand from "@goscript/crypto/internal/rand/index.js"

import * as mlkem from "@goscript/crypto/mlkem/index.js"

import * as sha3 from "@goscript/crypto/sha3/index.js"

import * as errors from "@goscript/errors/index.js"

import * as byteorder from "@goscript/internal/byteorder/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_kdf from "./kdf.gs.ts"

import * as __goscript_kem from "./kem.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/index.js"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/crypto/fips140/index.js"
import "@goscript/crypto/internal/fips140/drbg/index.js"
import "@goscript/crypto/internal/rand/index.js"
import "@goscript/crypto/mlkem/index.js"
import "@goscript/crypto/sha3/index.js"
import "@goscript/errors/index.js"
import "@goscript/internal/byteorder/index.js"
import "@goscript/io/index.js"
import "./kdf.gs.ts"
import "./kem.gs.ts"

$.registerTypePackagePath("crypto/hpke", ["hpke.hybridKEM", "hpke.hybridPublicKey", "hpke.hybridPrivateKey", "hpke.mlkemKEM", "hpke.mlkemPublicKey", "hpke.mlkemPrivateKey"])

export class hybridKEM {
	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get label(): string {
		return this._fields.label
	}

	public set label(value: string) {
		this._fields.label = value
	}

	public get curve(): ecdh.Curve | null {
		return this._fields.curve
	}

	public set curve(value: ecdh.Curve | null) {
		this._fields.curve = value
	}

	public get curveSeedSize(): number {
		return this._fields.curveSeedSize
	}

	public set curveSeedSize(value: number) {
		this._fields.curveSeedSize = value
	}

	public get curvePointSize(): number {
		return this._fields.curvePointSize
	}

	public set curvePointSize(value: number) {
		this._fields.curvePointSize = value
	}

	public get pqEncapsKeySize(): number {
		return this._fields.pqEncapsKeySize
	}

	public set pqEncapsKeySize(value: number) {
		this._fields.pqEncapsKeySize = value
	}

	public get pqCiphertextSize(): number {
		return this._fields.pqCiphertextSize
	}

	public set pqCiphertextSize(value: number) {
		this._fields.pqCiphertextSize = value
	}

	public get pqNewPublicKey(): ((data: $.Slice<number>) => [crypto.Encapsulator | null, $.GoError] | globalThis.Promise<[crypto.Encapsulator | null, $.GoError]>) | null {
		return this._fields.pqNewPublicKey
	}

	public set pqNewPublicKey(value: ((data: $.Slice<number>) => [crypto.Encapsulator | null, $.GoError] | globalThis.Promise<[crypto.Encapsulator | null, $.GoError]>) | null) {
		this._fields.pqNewPublicKey = value
	}

	public get pqNewPrivateKey(): ((data: $.Slice<number>) => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null {
		return this._fields.pqNewPrivateKey
	}

	public set pqNewPrivateKey(value: ((data: $.Slice<number>) => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null) {
		this._fields.pqNewPrivateKey = value
	}

	public _fields: {
		id: number
		label: string
		curve: ecdh.Curve | null
		curveSeedSize: number
		curvePointSize: number
		pqEncapsKeySize: number
		pqCiphertextSize: number
		pqNewPublicKey: ((data: $.Slice<number>) => [crypto.Encapsulator | null, $.GoError] | globalThis.Promise<[crypto.Encapsulator | null, $.GoError]>) | null
		pqNewPrivateKey: ((data: $.Slice<number>) => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null
	}

	constructor(init?: Partial<{id?: number, label?: string, curve?: ecdh.Curve | null, curveSeedSize?: number, curvePointSize?: number, pqEncapsKeySize?: number, pqCiphertextSize?: number, pqNewPublicKey?: ((data: $.Slice<number>) => [crypto.Encapsulator | null, $.GoError] | globalThis.Promise<[crypto.Encapsulator | null, $.GoError]>) | null, pqNewPrivateKey?: ((data: $.Slice<number>) => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0 as number),
			label: init?.label ?? ("" as string),
			curve: init?.curve ?? (null! as ecdh.Curve | null),
			curveSeedSize: init?.curveSeedSize ?? (0 as number),
			curvePointSize: init?.curvePointSize ?? (0 as number),
			pqEncapsKeySize: init?.pqEncapsKeySize ?? (0 as number),
			pqCiphertextSize: init?.pqCiphertextSize ?? (0 as number),
			pqNewPublicKey: init?.pqNewPublicKey ?? (null! as ((data: $.Slice<number>) => [crypto.Encapsulator | null, $.GoError] | globalThis.Promise<[crypto.Encapsulator | null, $.GoError]>) | null),
			pqNewPrivateKey: init?.pqNewPrivateKey ?? (null! as ((data: $.Slice<number>) => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): hybridKEM {
		return new hybridKEM(this, true)
	}

	public __goscriptAssign(source: hybridKEM): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
		target.label = values.label
		target.curve = $.assignFieldValue(target.curve, values.curve, "ecdh.Curve")
		target.curveSeedSize = values.curveSeedSize
		target.curvePointSize = values.curvePointSize
		target.pqEncapsKeySize = values.pqEncapsKeySize
		target.pqCiphertextSize = values.pqCiphertextSize
		target.pqNewPublicKey = values.pqNewPublicKey
		target.pqNewPrivateKey = values.pqNewPrivateKey
	}

	public async DeriveKeyPair(ikm: $.Slice<number>): globalThis.Promise<[__goscript_kem.PrivateKey | null, $.GoError]> {
		const kem: hybridKEM | $.VarRef<hybridKEM> | null = this;
		let suiteID: $.Slice<number> = byteorder.BEAppendUint16(new Uint8Array([75, 69, 77]), $.pointerValue<hybridKEM>(kem).id)
		let __goscriptTuple0: any = await $.pointerValue<Exclude<__goscript_kdf.KDF, null>>(__goscript_kdf.SHAKE256()).labeledDerive(suiteID, ikm, "DeriveKeyPair", null, 32)
		let dk: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return (kem !== null && (kem as any).__isVarRef !== true && (kem as any).__goValue === undefined ? ((kem as any) as hybridKEM).NewPrivateKey(dk) : hybridKEM.prototype.NewPrivateKey.call(kem, dk))
	}

	public async GenerateKey(): globalThis.Promise<[__goscript_kem.PrivateKey | null, $.GoError]> {
		const kem: hybridKEM | $.VarRef<hybridKEM> | null = this;
		let seed: $.Slice<number> = $.makeSlice<number>(32, undefined, "byte")
		await drbg.Read(seed)
		return (kem !== null && (kem as any).__isVarRef !== true && (kem as any).__goValue === undefined ? ((kem as any) as hybridKEM).NewPrivateKey(seed) : hybridKEM.prototype.NewPrivateKey.call(kem, seed))
	}

	public ID(): number {
		const kem: hybridKEM | $.VarRef<hybridKEM> | null = this;
		return $.pointerValue<hybridKEM>(kem).id
	}

	public async NewPrivateKey(priv: $.Slice<number>): globalThis.Promise<[__goscript_kem.PrivateKey | null, $.GoError]> {
		const kem: hybridKEM | $.VarRef<hybridKEM> | null = this;
		const kem$: hybridKEM = kem == null ? $.pointerTarget<hybridKEM>(kem) : (kem as any).__isVarRef === true ? (kem as any).value : (kem as any).__goValue === undefined ? (kem as any) : $.pointerTarget<hybridKEM>(kem)
		if ($.sliceLen(priv) != 32) {
			return [null, errors.New("hpke: invalid hybrid KEM secret length")]
		}

		let s: sha3.SHAKE | $.VarRef<sha3.SHAKE> | null = sha3.NewSHAKE256()
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as sha3.SHAKE).Write(priv) : sha3.SHAKE.prototype.Write.call(s, priv))

		let seedPQ: $.Slice<number> = $.makeSlice<number>(mlkem.SeedSize, undefined, "byte")
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as sha3.SHAKE).Read(seedPQ) : sha3.SHAKE.prototype.Read.call(s, seedPQ))
		let [pq, err] = await (kem$ as hybridKEM).pqNewPrivateKey!(seedPQ)
		if (err != null) {
			return [null, err]
		}

		let seedT: $.Slice<number> = $.makeSlice<number>((kem$ as hybridKEM).curveSeedSize, undefined, "byte")
		while (true) {
			void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as sha3.SHAKE).Read(seedT) : sha3.SHAKE.prototype.Read.call(s, seedT))
			let k: ecdh.KeyExchanger | null = null! as ecdh.KeyExchanger | null
			await fips140.WithoutEnforcement($.functionValue(async (): globalThis.Promise<void> => {
				let __goscriptTuple1: any = await $.pointerValue<Exclude<ecdh.Curve, null>>((kem$ as hybridKEM).curve).NewPrivateKey(seedT)
				k = $.interfaceValue<ecdh.KeyExchanger | null>(__goscriptTuple1[0], "*ecdh.PrivateKey", /* @__PURE__ */ $.pointerType("ecdh.PrivateKey"))
				err = __goscriptTuple1[1]
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
			if (err != null) {
				continue
			}
			return newHybridPrivateKey(pq, k, priv)
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async NewPublicKey(data: $.Slice<number>): globalThis.Promise<[__goscript_kem.PublicKey | null, $.GoError]> {
		const kem: hybridKEM | $.VarRef<hybridKEM> | null = this;
		const kem$: hybridKEM = kem == null ? $.pointerTarget<hybridKEM>(kem) : (kem as any).__isVarRef === true ? (kem as any).value : (kem as any).__goValue === undefined ? (kem as any) : $.pointerTarget<hybridKEM>(kem)
		if ($.sliceLen(data) != ((kem$ as hybridKEM).pqEncapsKeySize + (kem$ as hybridKEM).curvePointSize)) {
			return [null, errors.New("invalid public key size")]
		}
		let [pq, err] = await (kem$ as hybridKEM).pqNewPublicKey!($.goSlice(data, undefined, (kem$ as hybridKEM).pqEncapsKeySize))
		if (err != null) {
			return [null, err]
		}
		let k: ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null = null! as ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null
		await fips140.WithoutEnforcement($.functionValue(async (): globalThis.Promise<void> => {
			let __goscriptTuple2: any = await $.pointerValue<Exclude<ecdh.Curve, null>>((kem$ as hybridKEM).curve).NewPublicKey($.goSlice(data, (kem$ as hybridKEM).pqEncapsKeySize, undefined))
			k = __goscriptTuple2[0]
			err = __goscriptTuple2[1]
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		if (err != null) {
			return [null, err]
		}
		return NewHybridPublicKey(pq, k)
	}

	public encSize(): number {
		const kem: hybridKEM | $.VarRef<hybridKEM> | null = this;
		const kem$: hybridKEM = kem == null ? $.pointerTarget<hybridKEM>(kem) : (kem as any).__isVarRef === true ? (kem as any).value : (kem as any).__goValue === undefined ? (kem as any) : $.pointerTarget<hybridKEM>(kem)
		return (kem$ as hybridKEM).pqCiphertextSize + (kem$ as hybridKEM).curvePointSize
	}

	public sharedSecret(ssPQ: $.Slice<number>, ssT: $.Slice<number>, ctT: $.Slice<number>, ekT: $.Slice<number>): $.Slice<number> {
		const kem: hybridKEM | $.VarRef<hybridKEM> | null = this;
		let h: sha3.SHA3 | $.VarRef<sha3.SHA3> | null = sha3.New256()
		void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.SHA3).Write(ssPQ) : sha3.SHA3.prototype.Write.call(h, ssPQ))
		void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.SHA3).Write(ssT) : sha3.SHA3.prototype.Write.call(h, ssT))
		void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.SHA3).Write(ctT) : sha3.SHA3.prototype.Write.call(h, ctT))
		void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.SHA3).Write(ekT) : sha3.SHA3.prototype.Write.call(h, ekT))
		void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.SHA3).Write($.stringToBytes($.pointerValue<hybridKEM>(kem).label)) : sha3.SHA3.prototype.Write.call(h, $.stringToBytes($.pointerValue<hybridKEM>(kem).label)))
		return (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.SHA3).Sum(null) : sha3.SHA3.prototype.Sum.call(h, null))
	}

	static __typeInfo = $.registerStructType(
		"hpke.hybridKEM",
		() => new hybridKEM(),
		() => [$.methodSignature("DeriveKeyPair", [["ikm", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["hpke.PrivateKey", "error"], true), $.methodSignature("GenerateKey", [], ["hpke.PrivateKey", "error"], true), $.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint16")], true), $.methodSignature("NewPrivateKey", [["priv", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["hpke.PrivateKey", "error"], true), $.methodSignature("NewPublicKey", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["hpke.PublicKey", "error"], true), $.methodSignature("encSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("sharedSecret", [["ssPQ", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ssT", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ctT", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ekT", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		hybridKEM,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint16"), [0], 0, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("label", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("curve", "ecdh.Curve", [2], 24, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("curveSeedSize", /* @__PURE__ */ $.basicType("int"), [3], 40, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("curvePointSize", /* @__PURE__ */ $.basicType("int"), [4], 48, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("pqEncapsKeySize", /* @__PURE__ */ $.basicType("int"), [5], 56, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("pqCiphertextSize", /* @__PURE__ */ $.basicType("int"), [6], 64, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("pqNewPublicKey", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["crypto.Encapsulator", "error"] } as $.FunctionTypeInfo), [7], 72, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("pqNewPrivateKey", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["crypto.Decapsulator", "error"] } as $.FunctionTypeInfo), [8], 80, false, { pkgPath: "crypto/hpke" })]
	)
}

export class hybridPublicKey {
	public get kem(): hybridKEM | $.VarRef<hybridKEM> | null {
		return this._fields.kem
	}

	public set kem(value: hybridKEM | $.VarRef<hybridKEM> | null) {
		this._fields.kem = value
	}

	public get t(): ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null {
		return this._fields.t
	}

	public set t(value: ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null) {
		this._fields.t = value
	}

	public get pq(): crypto.Encapsulator | null {
		return this._fields.pq
	}

	public set pq(value: crypto.Encapsulator | null) {
		this._fields.pq = value
	}

	public _fields: {
		kem: hybridKEM | $.VarRef<hybridKEM> | null
		t: ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null
		pq: crypto.Encapsulator | null
	}

	constructor(init?: Partial<{kem?: hybridKEM | $.VarRef<hybridKEM> | null, t?: ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null, pq?: crypto.Encapsulator | null}>, __goscriptValue?: boolean) {
		this._fields = {
			kem: init?.kem ?? (null! as hybridKEM | $.VarRef<hybridKEM> | null),
			t: init?.t ?? (null! as ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null),
			pq: init?.pq ?? (null! as crypto.Encapsulator | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): hybridPublicKey {
		return new hybridPublicKey(this, true)
	}

	public __goscriptAssign(source: hybridPublicKey): void {
		const target = this._fields
		const values = source._fields
		target.kem = values.kem
		target.t = values.t
		target.pq = $.assignFieldValue(target.pq, values.pq, "crypto.Encapsulator")
	}

	public async Bytes(): globalThis.Promise<$.Slice<number>> {
		const pk: hybridPublicKey | $.VarRef<hybridPublicKey> | null = this;
		const pk$: hybridPublicKey = pk == null ? $.pointerTarget<hybridPublicKey>(pk) : (pk as any).__isVarRef === true ? (pk as any).value : (pk as any).__goValue === undefined ? (pk as any) : $.pointerTarget<hybridPublicKey>(pk)
		return $.appendSlice(((__goscriptAwait = $.pointerValue<Exclude<crypto.Encapsulator, null>>((pk$ as hybridPublicKey).pq).Bytes(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>), ecdh.PublicKey.prototype.Bytes.call($.pointerValue<ecdh.PublicKey>((pk$ as hybridPublicKey).t)), $.byteSliceHint)
	}

	public KEM(): __goscript_kem.KEM | null {
		const pk: hybridPublicKey | $.VarRef<hybridPublicKey> | null = this;
		return $.interfaceValue<__goscript_kem.KEM | null>($.pointerValue<hybridPublicKey>(pk).kem, "*hpke.hybridKEM", /* @__PURE__ */ $.pointerType("hpke.hybridKEM"))
	}

	public async encap(): globalThis.Promise<[$.Slice<number>, $.Slice<number>, $.GoError]> {
		const pk: hybridPublicKey | $.VarRef<hybridPublicKey> | null = this;
		let sharedSecret: $.Slice<number> = null! as $.Slice<number>
		let encapPub: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		const pk$: hybridPublicKey = pk == null ? $.pointerTarget<hybridPublicKey>(pk) : (pk as any).__isVarRef === true ? (pk as any).value : (pk as any).__goValue === undefined ? (pk as any) : $.pointerTarget<hybridPublicKey>(pk)
		let skE: ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null = null! as ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null
		await fips140.WithoutEnforcement($.functionValue(async (): globalThis.Promise<void> => {
			let __goscriptTuple3: any = await $.pointerValue<Exclude<ecdh.Curve, null>>(ecdh.PublicKey.prototype.Curve.call($.pointerValue<ecdh.PublicKey>((pk$ as hybridPublicKey).t))).GenerateKey($.pointerValueOrNil(rand.Reader)!)
			skE = __goscriptTuple3[0]
			err = __goscriptTuple3[1]
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		if (err != null) {
			return [null, null, err]
		}
		if (__goscript_kem.testingOnlyGenerateKey != null) {
			skE = ((__goscriptAwait = __goscript_kem.testingOnlyGenerateKey!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null)
		}
		let ssT: $.Slice<number> = null! as $.Slice<number>
		await fips140.WithoutEnforcement($.functionValue((): void => {
			let __goscriptTuple4: any = ecdh.PrivateKey.prototype.ECDH.call($.pointerValue<ecdh.PrivateKey>(skE), (pk$ as hybridPublicKey).t)
			ssT = __goscriptTuple4[0]
			err = __goscriptTuple4[1]
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		if (err != null) {
			return [null, null, err]
		}
		let ctT: $.Slice<number> = ecdh.PublicKey.prototype.Bytes.call($.pointerValue<ecdh.PublicKey>(ecdh.PrivateKey.prototype.PublicKey.call($.pointerValue<ecdh.PrivateKey>(skE))))

		let __goscriptTuple5: any = await $.pointerValue<Exclude<crypto.Encapsulator, null>>((pk$ as hybridPublicKey).pq).Encapsulate()
		let ssPQ: $.Slice<number> = __goscriptTuple5[0]
		let ctPQ: $.Slice<number> = __goscriptTuple5[1]
		if (testingOnlyEncapsulate != null) {
			let __goscriptTuple6: any = await testingOnlyEncapsulate!()
			ssPQ = __goscriptTuple6[0]
			ctPQ = __goscriptTuple6[1]
		}

		let ss: $.Slice<number> = hybridKEM.prototype.sharedSecret.call((pk$ as hybridPublicKey).kem, ssPQ, ssT, ctT, ecdh.PublicKey.prototype.Bytes.call($.pointerValue<ecdh.PublicKey>((pk$ as hybridPublicKey).t)))
		let ct: $.Slice<number> = $.appendSlice(ctPQ, ctT, $.byteSliceHint)
		return [ss, ct, null]
	}

	static __typeInfo = $.registerStructType(
		"hpke.hybridPublicKey",
		() => new hybridPublicKey(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("KEM", [], ["hpke.KEM"], true), $.methodSignature("encap", [], [["sharedSecret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["encapPub", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true)],
		hybridPublicKey,
		() => [/* @__PURE__ */ $.structField("kem", /* @__PURE__ */ $.pointerType("hpke.hybridKEM"), [0], 0, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("t", /* @__PURE__ */ $.pointerType("ecdh.PublicKey"), [1], 8, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("pq", "crypto.Encapsulator", [2], 16, false, { pkgPath: "crypto/hpke" })]
	)
}

export class hybridPrivateKey {
	public get kem(): hybridKEM | $.VarRef<hybridKEM> | null {
		return this._fields.kem
	}

	public set kem(value: hybridKEM | $.VarRef<hybridKEM> | null) {
		this._fields.kem = value
	}

	public get seed(): $.Slice<number> {
		return this._fields.seed
	}

	public set seed(value: $.Slice<number>) {
		this._fields.seed = value
	}

	public get t(): ecdh.KeyExchanger | null {
		return this._fields.t
	}

	public set t(value: ecdh.KeyExchanger | null) {
		this._fields.t = value
	}

	public get pq(): crypto.Decapsulator | null {
		return this._fields.pq
	}

	public set pq(value: crypto.Decapsulator | null) {
		this._fields.pq = value
	}

	public _fields: {
		kem: hybridKEM | $.VarRef<hybridKEM> | null
		seed: $.Slice<number>
		t: ecdh.KeyExchanger | null
		pq: crypto.Decapsulator | null
	}

	constructor(init?: Partial<{kem?: hybridKEM | $.VarRef<hybridKEM> | null, seed?: $.Slice<number>, t?: ecdh.KeyExchanger | null, pq?: crypto.Decapsulator | null}>, __goscriptValue?: boolean) {
		this._fields = {
			kem: init?.kem ?? (null! as hybridKEM | $.VarRef<hybridKEM> | null),
			seed: init?.seed ?? (null! as $.Slice<number>),
			t: init?.t ?? (null! as ecdh.KeyExchanger | null),
			pq: init?.pq ?? (null! as crypto.Decapsulator | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): hybridPrivateKey {
		return new hybridPrivateKey(this, true)
	}

	public __goscriptAssign(source: hybridPrivateKey): void {
		const target = this._fields
		const values = source._fields
		target.kem = values.kem
		target.seed = values.seed
		target.t = $.assignFieldValue(target.t, values.t, "ecdh.KeyExchanger")
		target.pq = $.assignFieldValue(target.pq, values.pq, "crypto.Decapsulator")
	}

	public Bytes(): [$.Slice<number>, $.GoError] {
		const k: hybridPrivateKey | $.VarRef<hybridPrivateKey> | null = this;
		const k$: hybridPrivateKey = k == null ? $.pointerTarget<hybridPrivateKey>(k) : (k as any).__isVarRef === true ? (k as any).value : (k as any).__goValue === undefined ? (k as any) : $.pointerTarget<hybridPrivateKey>(k)
		if ((k$ as hybridPrivateKey).seed == null) {
			return [null, errors.New("private key seed not available")]
		}
		return [(k$ as hybridPrivateKey).seed, null]
	}

	public KEM(): __goscript_kem.KEM | null {
		const k: hybridPrivateKey | $.VarRef<hybridPrivateKey> | null = this;
		return $.interfaceValue<__goscript_kem.KEM | null>($.pointerValue<hybridPrivateKey>(k).kem, "*hpke.hybridKEM", /* @__PURE__ */ $.pointerType("hpke.hybridKEM"))
	}

	public async PublicKey(): globalThis.Promise<__goscript_kem.PublicKey | null> {
		const k: hybridPrivateKey | $.VarRef<hybridPrivateKey> | null = this;
		const k$: hybridPrivateKey = k == null ? $.pointerTarget<hybridPrivateKey>(k) : (k as any).__isVarRef === true ? (k as any).value : (k as any).__goValue === undefined ? (k as any) : $.pointerTarget<hybridPrivateKey>(k)
		return $.interfaceValue<__goscript_kem.PublicKey | null>((await (async () => { const __goscriptLiteralField3 = ((__goscriptAwait = $.pointerValue<Exclude<ecdh.KeyExchanger, null>>((k$ as hybridPrivateKey).t).PublicKey(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null); const __goscriptLiteralField4 = (__goscriptAwait = $.pointerValue<Exclude<crypto.Decapsulator, null>>((k$ as hybridPrivateKey).pq).Encapsulator(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new hybridPublicKey({kem: (k$ as hybridPrivateKey).kem, t: __goscriptLiteralField3, pq: __goscriptLiteralField4}) })()), "*hpke.hybridPublicKey", /* @__PURE__ */ $.pointerType("hpke.hybridPublicKey"))
	}

	public async decap(enc: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const k: hybridPrivateKey | $.VarRef<hybridPrivateKey> | null = this;
		const k$: hybridPrivateKey = k == null ? $.pointerTarget<hybridPrivateKey>(k) : (k as any).__isVarRef === true ? (k as any).value : (k as any).__goValue === undefined ? (k as any) : $.pointerTarget<hybridPrivateKey>(k)
		if ($.sliceLen(enc) != ($.pointerValue<hybridKEM>((k$ as hybridPrivateKey).kem).pqCiphertextSize + $.pointerValue<hybridKEM>((k$ as hybridPrivateKey).kem).curvePointSize)) {
			return [null, errors.New("invalid encapsulated key size")]
		}
		let ctPQ: $.Slice<number> = $.goSlice(enc, undefined, $.pointerValue<hybridKEM>((k$ as hybridPrivateKey).kem).pqCiphertextSize)
		let ctT: $.Slice<number> = $.goSlice(enc, $.pointerValue<hybridKEM>((k$ as hybridPrivateKey).kem).pqCiphertextSize, undefined)
		let __goscriptTuple7: any = await $.pointerValue<Exclude<crypto.Decapsulator, null>>((k$ as hybridPrivateKey).pq).Decapsulate(ctPQ)
		let ssPQ: $.Slice<number> = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}
		let pub: ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null = null! as ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null
		await fips140.WithoutEnforcement($.functionValue(async (): globalThis.Promise<void> => {
			let __goscriptTuple8: any = await $.pointerValue<Exclude<ecdh.Curve, null>>((__goscriptAwait = $.pointerValue<Exclude<ecdh.KeyExchanger, null>>((k$ as hybridPrivateKey).t).Curve(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).NewPublicKey(ctT)
			pub = __goscriptTuple8[0]
			err = __goscriptTuple8[1]
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		if (err != null) {
			return [null, err]
		}
		let ssT: $.Slice<number> = null! as $.Slice<number>
		await fips140.WithoutEnforcement($.functionValue(async (): globalThis.Promise<void> => {
			let __goscriptTuple9: any = await $.pointerValue<Exclude<ecdh.KeyExchanger, null>>((k$ as hybridPrivateKey).t).ECDH(pub)
			ssT = __goscriptTuple9[0]
			err = __goscriptTuple9[1]
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		if (err != null) {
			return [null, err]
		}
		let ss: $.Slice<number> = hybridKEM.prototype.sharedSecret.call((k$ as hybridPrivateKey).kem, ssPQ, ssT, ctT, ecdh.PublicKey.prototype.Bytes.call($.pointerValue<ecdh.PublicKey>(((__goscriptAwait = $.pointerValue<Exclude<ecdh.KeyExchanger, null>>((k$ as hybridPrivateKey).t).PublicKey(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null))))
		return [ss, null]
	}

	static __typeInfo = $.registerStructType(
		"hpke.hybridPrivateKey",
		() => new hybridPrivateKey(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("KEM", [], ["hpke.KEM"], true), $.methodSignature("PublicKey", [], ["hpke.PublicKey"], true), $.methodSignature("decap", [["enc", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true)],
		hybridPrivateKey,
		() => [/* @__PURE__ */ $.structField("kem", /* @__PURE__ */ $.pointerType("hpke.hybridKEM"), [0], 0, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("seed", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("t", "ecdh.KeyExchanger", [2], 32, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("pq", "crypto.Decapsulator", [3], 48, false, { pkgPath: "crypto/hpke" })]
	)
}

export class mlkemKEM {
	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get ciphertextSize(): number {
		return this._fields.ciphertextSize
	}

	public set ciphertextSize(value: number) {
		this._fields.ciphertextSize = value
	}

	public get newPublicKey(): ((data: $.Slice<number>) => [crypto.Encapsulator | null, $.GoError] | globalThis.Promise<[crypto.Encapsulator | null, $.GoError]>) | null {
		return this._fields.newPublicKey
	}

	public set newPublicKey(value: ((data: $.Slice<number>) => [crypto.Encapsulator | null, $.GoError] | globalThis.Promise<[crypto.Encapsulator | null, $.GoError]>) | null) {
		this._fields.newPublicKey = value
	}

	public get newPrivateKey(): ((data: $.Slice<number>) => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null {
		return this._fields.newPrivateKey
	}

	public set newPrivateKey(value: ((data: $.Slice<number>) => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null) {
		this._fields.newPrivateKey = value
	}

	public get generateKey(): (() => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null {
		return this._fields.generateKey
	}

	public set generateKey(value: (() => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null) {
		this._fields.generateKey = value
	}

	public _fields: {
		id: number
		ciphertextSize: number
		newPublicKey: ((data: $.Slice<number>) => [crypto.Encapsulator | null, $.GoError] | globalThis.Promise<[crypto.Encapsulator | null, $.GoError]>) | null
		newPrivateKey: ((data: $.Slice<number>) => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null
		generateKey: (() => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null
	}

	constructor(init?: Partial<{id?: number, ciphertextSize?: number, newPublicKey?: ((data: $.Slice<number>) => [crypto.Encapsulator | null, $.GoError] | globalThis.Promise<[crypto.Encapsulator | null, $.GoError]>) | null, newPrivateKey?: ((data: $.Slice<number>) => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null, generateKey?: (() => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0 as number),
			ciphertextSize: init?.ciphertextSize ?? (0 as number),
			newPublicKey: init?.newPublicKey ?? (null! as ((data: $.Slice<number>) => [crypto.Encapsulator | null, $.GoError] | globalThis.Promise<[crypto.Encapsulator | null, $.GoError]>) | null),
			newPrivateKey: init?.newPrivateKey ?? (null! as ((data: $.Slice<number>) => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null),
			generateKey: init?.generateKey ?? (null! as (() => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mlkemKEM {
		return new mlkemKEM(this, true)
	}

	public __goscriptAssign(source: mlkemKEM): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
		target.ciphertextSize = values.ciphertextSize
		target.newPublicKey = values.newPublicKey
		target.newPrivateKey = values.newPrivateKey
		target.generateKey = values.generateKey
	}

	public async DeriveKeyPair(ikm: $.Slice<number>): globalThis.Promise<[__goscript_kem.PrivateKey | null, $.GoError]> {
		const kem: mlkemKEM | $.VarRef<mlkemKEM> | null = this;
		let suiteID: $.Slice<number> = byteorder.BEAppendUint16(new Uint8Array([75, 69, 77]), $.pointerValue<mlkemKEM>(kem).id)
		let __goscriptTuple10: any = await $.pointerValue<Exclude<__goscript_kdf.KDF, null>>(__goscript_kdf.SHAKE256()).labeledDerive(suiteID, ikm, "DeriveKeyPair", null, 64)
		let dk: $.Slice<number> = __goscriptTuple10[0]
		let err = __goscriptTuple10[1]
		if (err != null) {
			return [null, err]
		}
		return (kem !== null && (kem as any).__isVarRef !== true && (kem as any).__goValue === undefined ? ((kem as any) as mlkemKEM).NewPrivateKey(dk) : mlkemKEM.prototype.NewPrivateKey.call(kem, dk))
	}

	public async GenerateKey(): globalThis.Promise<[__goscript_kem.PrivateKey | null, $.GoError]> {
		const kem: mlkemKEM | $.VarRef<mlkemKEM> | null = this;
		let [pq, err] = await $.pointerValue<mlkemKEM>(kem).generateKey!()
		if (err != null) {
			return [null, err]
		}
		return NewMLKEMPrivateKey(pq)
	}

	public ID(): number {
		const kem: mlkemKEM | $.VarRef<mlkemKEM> | null = this;
		return $.pointerValue<mlkemKEM>(kem).id
	}

	public async NewPrivateKey(priv: $.Slice<number>): globalThis.Promise<[__goscript_kem.PrivateKey | null, $.GoError]> {
		const kem: mlkemKEM | $.VarRef<mlkemKEM> | null = this;
		let [pq, err] = await $.pointerValue<mlkemKEM>(kem).newPrivateKey!(priv)
		if (err != null) {
			return [null, err]
		}
		return NewMLKEMPrivateKey(pq)
	}

	public async NewPublicKey(data: $.Slice<number>): globalThis.Promise<[__goscript_kem.PublicKey | null, $.GoError]> {
		const kem: mlkemKEM | $.VarRef<mlkemKEM> | null = this;
		let [pq, err] = await $.pointerValue<mlkemKEM>(kem).newPublicKey!(data)
		if (err != null) {
			return [null, err]
		}
		return NewMLKEMPublicKey(pq)
	}

	public encSize(): number {
		const kem: mlkemKEM | $.VarRef<mlkemKEM> | null = this;
		return $.pointerValue<mlkemKEM>(kem).ciphertextSize
	}

	static __typeInfo = $.registerStructType(
		"hpke.mlkemKEM",
		() => new mlkemKEM(),
		() => [$.methodSignature("DeriveKeyPair", [["ikm", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["hpke.PrivateKey", "error"], true), $.methodSignature("GenerateKey", [], ["hpke.PrivateKey", "error"], true), $.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint16")], true), $.methodSignature("NewPrivateKey", [["priv", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["hpke.PrivateKey", "error"], true), $.methodSignature("NewPublicKey", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["hpke.PublicKey", "error"], true), $.methodSignature("encSize", [], [/* @__PURE__ */ $.basicType("int")], true)],
		mlkemKEM,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint16"), [0], 0, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("ciphertextSize", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("newPublicKey", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["crypto.Encapsulator", "error"] } as $.FunctionTypeInfo), [2], 16, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("newPrivateKey", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["crypto.Decapsulator", "error"] } as $.FunctionTypeInfo), [3], 24, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("generateKey", ({ kind: $.TypeKind.Function, params: [], results: ["crypto.Decapsulator", "error"] } as $.FunctionTypeInfo), [4], 32, false, { pkgPath: "crypto/hpke" })]
	)
}

export class mlkemPublicKey {
	public get kem(): mlkemKEM | $.VarRef<mlkemKEM> | null {
		return this._fields.kem
	}

	public set kem(value: mlkemKEM | $.VarRef<mlkemKEM> | null) {
		this._fields.kem = value
	}

	public get pq(): crypto.Encapsulator | null {
		return this._fields.pq
	}

	public set pq(value: crypto.Encapsulator | null) {
		this._fields.pq = value
	}

	public _fields: {
		kem: mlkemKEM | $.VarRef<mlkemKEM> | null
		pq: crypto.Encapsulator | null
	}

	constructor(init?: Partial<{kem?: mlkemKEM | $.VarRef<mlkemKEM> | null, pq?: crypto.Encapsulator | null}>, __goscriptValue?: boolean) {
		this._fields = {
			kem: init?.kem ?? (null! as mlkemKEM | $.VarRef<mlkemKEM> | null),
			pq: init?.pq ?? (null! as crypto.Encapsulator | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mlkemPublicKey {
		return new mlkemPublicKey(this, true)
	}

	public __goscriptAssign(source: mlkemPublicKey): void {
		const target = this._fields
		const values = source._fields
		target.kem = values.kem
		target.pq = $.assignFieldValue(target.pq, values.pq, "crypto.Encapsulator")
	}

	public async Bytes(): globalThis.Promise<$.Slice<number>> {
		const pk: mlkemPublicKey | $.VarRef<mlkemPublicKey> | null = this;
		return $.pointerValue<Exclude<crypto.Encapsulator, null>>($.pointerValue<mlkemPublicKey>(pk).pq).Bytes()
	}

	public KEM(): __goscript_kem.KEM | null {
		const pk: mlkemPublicKey | $.VarRef<mlkemPublicKey> | null = this;
		return $.interfaceValue<__goscript_kem.KEM | null>($.pointerValue<mlkemPublicKey>(pk).kem, "*hpke.mlkemKEM", /* @__PURE__ */ $.pointerType("hpke.mlkemKEM"))
	}

	public async encap(): globalThis.Promise<[$.Slice<number>, $.Slice<number>, $.GoError]> {
		const pk: mlkemPublicKey | $.VarRef<mlkemPublicKey> | null = this;
		let sharedSecret: $.Slice<number> = null! as $.Slice<number>
		let encapPub: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple11: any = await $.pointerValue<Exclude<crypto.Encapsulator, null>>($.pointerValue<mlkemPublicKey>(pk).pq).Encapsulate()
		let ss: $.Slice<number> = __goscriptTuple11[0]
		let ct: $.Slice<number> = __goscriptTuple11[1]
		if (testingOnlyEncapsulate != null) {
			let __goscriptTuple12: any = await testingOnlyEncapsulate!()
			ss = __goscriptTuple12[0]
			ct = __goscriptTuple12[1]
		}
		return [ss, ct, null]
	}

	static __typeInfo = $.registerStructType(
		"hpke.mlkemPublicKey",
		() => new mlkemPublicKey(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("KEM", [], ["hpke.KEM"], true), $.methodSignature("encap", [], [["sharedSecret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["encapPub", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true)],
		mlkemPublicKey,
		() => [/* @__PURE__ */ $.structField("kem", /* @__PURE__ */ $.pointerType("hpke.mlkemKEM"), [0], 0, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("pq", "crypto.Encapsulator", [1], 8, false, { pkgPath: "crypto/hpke" })]
	)
}

export class mlkemPrivateKey {
	public get kem(): mlkemKEM | $.VarRef<mlkemKEM> | null {
		return this._fields.kem
	}

	public set kem(value: mlkemKEM | $.VarRef<mlkemKEM> | null) {
		this._fields.kem = value
	}

	public get pq(): crypto.Decapsulator | null {
		return this._fields.pq
	}

	public set pq(value: crypto.Decapsulator | null) {
		this._fields.pq = value
	}

	public _fields: {
		kem: mlkemKEM | $.VarRef<mlkemKEM> | null
		pq: crypto.Decapsulator | null
	}

	constructor(init?: Partial<{kem?: mlkemKEM | $.VarRef<mlkemKEM> | null, pq?: crypto.Decapsulator | null}>, __goscriptValue?: boolean) {
		this._fields = {
			kem: init?.kem ?? (null! as mlkemKEM | $.VarRef<mlkemKEM> | null),
			pq: init?.pq ?? (null! as crypto.Decapsulator | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mlkemPrivateKey {
		return new mlkemPrivateKey(this, true)
	}

	public __goscriptAssign(source: mlkemPrivateKey): void {
		const target = this._fields
		const values = source._fields
		target.kem = values.kem
		target.pq = $.assignFieldValue(target.pq, values.pq, "crypto.Decapsulator")
	}

	public async Bytes(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const k: mlkemPrivateKey | $.VarRef<mlkemPrivateKey> | null = this;
		let __goscriptTuple13: any = $.typeAssertTuple<any>($.pointerValue<mlkemPrivateKey>(k).pq, { kind: $.TypeKind.Interface, methods: [{ name: "Bytes", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }] }] })
		let pq = __goscriptTuple13[0]
		let ok = __goscriptTuple13[1]
		if (!ok) {
			return [null, errors.New("private key seed not available")]
		}
		return [((__goscriptAwait = (pq !== null && (pq as any).__isVarRef !== true && (pq as any).__goValue === undefined ? (pq as any) : $.pointerValue<any>(pq)).Bytes(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>), null]
	}

	public KEM(): __goscript_kem.KEM | null {
		const k: mlkemPrivateKey | $.VarRef<mlkemPrivateKey> | null = this;
		return $.interfaceValue<__goscript_kem.KEM | null>($.pointerValue<mlkemPrivateKey>(k).kem, "*hpke.mlkemKEM", /* @__PURE__ */ $.pointerType("hpke.mlkemKEM"))
	}

	public async PublicKey(): globalThis.Promise<__goscript_kem.PublicKey | null> {
		const k: mlkemPrivateKey | $.VarRef<mlkemPrivateKey> | null = this;
		const k$: mlkemPrivateKey = k == null ? $.pointerTarget<mlkemPrivateKey>(k) : (k as any).__isVarRef === true ? (k as any).value : (k as any).__goValue === undefined ? (k as any) : $.pointerTarget<mlkemPrivateKey>(k)
		return $.interfaceValue<__goscript_kem.PublicKey | null>((await (async () => { const __goscriptLiteralField8 = (__goscriptAwait = $.pointerValue<Exclude<crypto.Decapsulator, null>>((k$ as mlkemPrivateKey).pq).Encapsulator(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new mlkemPublicKey({kem: (k$ as mlkemPrivateKey).kem, pq: __goscriptLiteralField8}) })()), "*hpke.mlkemPublicKey", /* @__PURE__ */ $.pointerType("hpke.mlkemPublicKey"))
	}

	public async decap(enc: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const k: mlkemPrivateKey | $.VarRef<mlkemPrivateKey> | null = this;
		return $.pointerValue<Exclude<crypto.Decapsulator, null>>($.pointerValue<mlkemPrivateKey>(k).pq).Decapsulate(enc)
	}

	static __typeInfo = $.registerStructType(
		"hpke.mlkemPrivateKey",
		() => new mlkemPrivateKey(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("KEM", [], ["hpke.KEM"], true), $.methodSignature("PublicKey", [], ["hpke.PublicKey"], true), $.methodSignature("decap", [["enc", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true)],
		mlkemPrivateKey,
		() => [/* @__PURE__ */ $.structField("kem", /* @__PURE__ */ $.pointerType("hpke.mlkemKEM"), [0], 0, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("pq", "crypto.Decapsulator", [1], 8, false, { pkgPath: "crypto/hpke" })]
	)
}

export let mlkem768X25519: hybridKEM | $.VarRef<hybridKEM> | null = (() => { const __goscriptLiteralField0 = ecdh.X25519(); return new hybridKEM({id: 0x647a, label: $.concatString("\\./", "/^\\"), curve: __goscriptLiteralField0, curveSeedSize: 32, curvePointSize: 32, pqEncapsKeySize: 1184, pqCiphertextSize: 1088, pqNewPublicKey: $.functionValue((data: $.Slice<number>): [crypto.Encapsulator | null, $.GoError] => {
	const __goscriptReturn0 = mlkem.NewEncapsulationKey768(data)
	return [$.interfaceValue<crypto.Encapsulator | null>(__goscriptReturn0[0], "*mlkem.EncapsulationKey768", /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey768")), __goscriptReturn0[1]]
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["crypto.Encapsulator", "error"] } as $.FunctionTypeInfo)), pqNewPrivateKey: $.functionValue((data: $.Slice<number>): [crypto.Decapsulator | null, $.GoError] => {
	const __goscriptReturn1 = mlkem.NewDecapsulationKey768(data)
	return [$.interfaceValue<crypto.Decapsulator | null>(__goscriptReturn1[0], "*mlkem.DecapsulationKey768", /* @__PURE__ */ $.pointerType("mlkem.DecapsulationKey768")), __goscriptReturn1[1]]
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["crypto.Decapsulator", "error"] } as $.FunctionTypeInfo))}) })()

export function __goscript_set_mlkem768X25519(__goscriptValue: hybridKEM | $.VarRef<hybridKEM> | null): void {
	mlkem768X25519 = __goscriptValue
}

export function MLKEM768X25519(): __goscript_kem.KEM | null {
	return $.interfaceValue<__goscript_kem.KEM | null>(mlkem768X25519, "*hpke.hybridKEM", /* @__PURE__ */ $.pointerType("hpke.hybridKEM"))
}

export let mlkem768P256: hybridKEM | $.VarRef<hybridKEM> | null = (() => { const __goscriptLiteralField1 = ecdh.P256(); return new hybridKEM({id: 0x0050, label: "MLKEM768-P256", curve: __goscriptLiteralField1, curveSeedSize: 32, curvePointSize: 65, pqEncapsKeySize: 1184, pqCiphertextSize: 1088, pqNewPublicKey: $.functionValue((data: $.Slice<number>): [crypto.Encapsulator | null, $.GoError] => {
	const __goscriptReturn2 = mlkem.NewEncapsulationKey768(data)
	return [$.interfaceValue<crypto.Encapsulator | null>(__goscriptReturn2[0], "*mlkem.EncapsulationKey768", /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey768")), __goscriptReturn2[1]]
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["crypto.Encapsulator", "error"] } as $.FunctionTypeInfo)), pqNewPrivateKey: $.functionValue((data: $.Slice<number>): [crypto.Decapsulator | null, $.GoError] => {
	const __goscriptReturn3 = mlkem.NewDecapsulationKey768(data)
	return [$.interfaceValue<crypto.Decapsulator | null>(__goscriptReturn3[0], "*mlkem.DecapsulationKey768", /* @__PURE__ */ $.pointerType("mlkem.DecapsulationKey768")), __goscriptReturn3[1]]
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["crypto.Decapsulator", "error"] } as $.FunctionTypeInfo))}) })()

export function __goscript_set_mlkem768P256(__goscriptValue: hybridKEM | $.VarRef<hybridKEM> | null): void {
	mlkem768P256 = __goscriptValue
}

export function MLKEM768P256(): __goscript_kem.KEM | null {
	return $.interfaceValue<__goscript_kem.KEM | null>(mlkem768P256, "*hpke.hybridKEM", /* @__PURE__ */ $.pointerType("hpke.hybridKEM"))
}

export let mlkem1024P384: hybridKEM | $.VarRef<hybridKEM> | null = (() => { const __goscriptLiteralField2 = ecdh.P384(); return new hybridKEM({id: 0x0051, label: "MLKEM1024-P384", curve: __goscriptLiteralField2, curveSeedSize: 48, curvePointSize: 97, pqEncapsKeySize: 1568, pqCiphertextSize: 1568, pqNewPublicKey: $.functionValue((data: $.Slice<number>): [crypto.Encapsulator | null, $.GoError] => {
	const __goscriptReturn4 = mlkem.NewEncapsulationKey1024(data)
	return [$.interfaceValue<crypto.Encapsulator | null>(__goscriptReturn4[0], "*mlkem.EncapsulationKey1024", /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey1024")), __goscriptReturn4[1]]
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["crypto.Encapsulator", "error"] } as $.FunctionTypeInfo)), pqNewPrivateKey: $.functionValue((data: $.Slice<number>): [crypto.Decapsulator | null, $.GoError] => {
	const __goscriptReturn5 = mlkem.NewDecapsulationKey1024(data)
	return [$.interfaceValue<crypto.Decapsulator | null>(__goscriptReturn5[0], "*mlkem.DecapsulationKey1024", /* @__PURE__ */ $.pointerType("mlkem.DecapsulationKey1024")), __goscriptReturn5[1]]
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["crypto.Decapsulator", "error"] } as $.FunctionTypeInfo))}) })()

export function __goscript_set_mlkem1024P384(__goscriptValue: hybridKEM | $.VarRef<hybridKEM> | null): void {
	mlkem1024P384 = __goscriptValue
}

export function MLKEM1024P384(): __goscript_kem.KEM | null {
	return $.interfaceValue<__goscript_kem.KEM | null>(mlkem1024P384, "*hpke.hybridKEM", /* @__PURE__ */ $.pointerType("hpke.hybridKEM"))
}

export function NewHybridPublicKey(pq: crypto.Encapsulator | null, t: ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null): [__goscript_kem.PublicKey | null, $.GoError] {
	{
		let __goscriptSwitch0 = ecdh.PublicKey.prototype.Curve.call($.pointerValue<ecdh.PublicKey>(t))
		switch ((true as boolean)) {
			case $.comparableEqual(__goscriptSwitch0, ecdh.X25519()):
			{
				{
					let [, ok] = $.typeAssertTuple<mlkem.EncapsulationKey768 | $.VarRef<mlkem.EncapsulationKey768> | null>(pq, /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey768"))
					if (!ok) {
						return [null, errors.New("invalid PQ KEM for X25519 hybrid")]
					}
				}
				return [$.interfaceValue<__goscript_kem.PublicKey | null>(new hybridPublicKey({kem: mlkem768X25519, t: t, pq: pq}), "*hpke.hybridPublicKey", /* @__PURE__ */ $.pointerType("hpke.hybridPublicKey")), null]
				break
			}
			case $.comparableEqual(__goscriptSwitch0, ecdh.P256()):
			{
				{
					let [, ok] = $.typeAssertTuple<mlkem.EncapsulationKey768 | $.VarRef<mlkem.EncapsulationKey768> | null>(pq, /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey768"))
					if (!ok) {
						return [null, errors.New("invalid PQ KEM for P-256 hybrid")]
					}
				}
				return [$.interfaceValue<__goscript_kem.PublicKey | null>(new hybridPublicKey({kem: mlkem768P256, t: t, pq: pq}), "*hpke.hybridPublicKey", /* @__PURE__ */ $.pointerType("hpke.hybridPublicKey")), null]
				break
			}
			case $.comparableEqual(__goscriptSwitch0, ecdh.P384()):
			{
				{
					let [, ok] = $.typeAssertTuple<mlkem.EncapsulationKey1024 | $.VarRef<mlkem.EncapsulationKey1024> | null>(pq, /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey1024"))
					if (!ok) {
						return [null, errors.New("invalid PQ KEM for P-384 hybrid")]
					}
				}
				return [$.interfaceValue<__goscript_kem.PublicKey | null>(new hybridPublicKey({kem: mlkem1024P384, t: t, pq: pq}), "*hpke.hybridPublicKey", /* @__PURE__ */ $.pointerType("hpke.hybridPublicKey")), null]
				break
			}
			default:
			{
				return [null, errors.New("unsupported curve")]
				break
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export let testingOnlyEncapsulate: (() => [$.Slice<number>, $.Slice<number>] | globalThis.Promise<[$.Slice<number>, $.Slice<number>]>) | null = null! as (() => [$.Slice<number>, $.Slice<number>] | globalThis.Promise<[$.Slice<number>, $.Slice<number>]>) | null

export function __goscript_set_testingOnlyEncapsulate(__goscriptValue: (() => [$.Slice<number>, $.Slice<number>] | globalThis.Promise<[$.Slice<number>, $.Slice<number>]>) | null): void {
	testingOnlyEncapsulate = __goscriptValue
}

export async function NewHybridPrivateKey(pq: crypto.Decapsulator | null, t: ecdh.KeyExchanger | null): globalThis.Promise<[__goscript_kem.PrivateKey | null, $.GoError]> {
	return newHybridPrivateKey(pq, t, null)
}

export async function newHybridPrivateKey(pq: crypto.Decapsulator | null, t: ecdh.KeyExchanger | null, seed: $.Slice<number>): globalThis.Promise<[__goscript_kem.PrivateKey | null, $.GoError]> {
	{
		let __goscriptSwitch1 = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<ecdh.KeyExchanger, null>) : $.pointerValue<Exclude<ecdh.KeyExchanger, null>>(t)).Curve(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		switch ((true as boolean)) {
			case $.comparableEqual(__goscriptSwitch1, ecdh.X25519()):
			{
				{
					let [, ok] = $.typeAssertTuple<mlkem.EncapsulationKey768 | $.VarRef<mlkem.EncapsulationKey768> | null>((__goscriptAwait = (pq !== null && (pq as any).__isVarRef !== true && (pq as any).__goValue === undefined ? (pq as Exclude<crypto.Decapsulator, null>) : $.pointerValue<Exclude<crypto.Decapsulator, null>>(pq)).Encapsulator(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey768"))
					if (!ok) {
						return [null, errors.New("invalid PQ KEM for X25519 hybrid")]
					}
				}
				return [$.interfaceValue<__goscript_kem.PrivateKey | null>((() => { const __goscriptLiteralField5 = bytes.Clone(seed); return new hybridPrivateKey({kem: mlkem768X25519, seed: __goscriptLiteralField5, t: t, pq: pq}) })(), "*hpke.hybridPrivateKey", /* @__PURE__ */ $.pointerType("hpke.hybridPrivateKey")), null]
				break
			}
			case $.comparableEqual(__goscriptSwitch1, ecdh.P256()):
			{
				{
					let [, ok] = $.typeAssertTuple<mlkem.EncapsulationKey768 | $.VarRef<mlkem.EncapsulationKey768> | null>((__goscriptAwait = (pq !== null && (pq as any).__isVarRef !== true && (pq as any).__goValue === undefined ? (pq as Exclude<crypto.Decapsulator, null>) : $.pointerValue<Exclude<crypto.Decapsulator, null>>(pq)).Encapsulator(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey768"))
					if (!ok) {
						return [null, errors.New("invalid PQ KEM for P-256 hybrid")]
					}
				}
				return [$.interfaceValue<__goscript_kem.PrivateKey | null>((() => { const __goscriptLiteralField6 = bytes.Clone(seed); return new hybridPrivateKey({kem: mlkem768P256, seed: __goscriptLiteralField6, t: t, pq: pq}) })(), "*hpke.hybridPrivateKey", /* @__PURE__ */ $.pointerType("hpke.hybridPrivateKey")), null]
				break
			}
			case $.comparableEqual(__goscriptSwitch1, ecdh.P384()):
			{
				{
					let [, ok] = $.typeAssertTuple<mlkem.EncapsulationKey1024 | $.VarRef<mlkem.EncapsulationKey1024> | null>((__goscriptAwait = (pq !== null && (pq as any).__isVarRef !== true && (pq as any).__goValue === undefined ? (pq as Exclude<crypto.Decapsulator, null>) : $.pointerValue<Exclude<crypto.Decapsulator, null>>(pq)).Encapsulator(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey1024"))
					if (!ok) {
						return [null, errors.New("invalid PQ KEM for P-384 hybrid")]
					}
				}
				return [$.interfaceValue<__goscript_kem.PrivateKey | null>((() => { const __goscriptLiteralField7 = bytes.Clone(seed); return new hybridPrivateKey({kem: mlkem1024P384, seed: __goscriptLiteralField7, t: t, pq: pq}) })(), "*hpke.hybridPrivateKey", /* @__PURE__ */ $.pointerType("hpke.hybridPrivateKey")), null]
				break
			}
			default:
			{
				return [null, errors.New("unsupported curve")]
				break
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export let mlkem768: mlkemKEM | $.VarRef<mlkemKEM> | null = new mlkemKEM({id: 0x0041, ciphertextSize: 1088, newPublicKey: $.functionValue((data: $.Slice<number>): [crypto.Encapsulator | null, $.GoError] => {
	const __goscriptReturn11 = mlkem.NewEncapsulationKey768(data)
	return [$.interfaceValue<crypto.Encapsulator | null>(__goscriptReturn11[0], "*mlkem.EncapsulationKey768", /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey768")), __goscriptReturn11[1]]
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["crypto.Encapsulator", "error"] } as $.FunctionTypeInfo)), newPrivateKey: $.functionValue((data: $.Slice<number>): [crypto.Decapsulator | null, $.GoError] => {
	const __goscriptReturn12 = mlkem.NewDecapsulationKey768(data)
	return [$.interfaceValue<crypto.Decapsulator | null>(__goscriptReturn12[0], "*mlkem.DecapsulationKey768", /* @__PURE__ */ $.pointerType("mlkem.DecapsulationKey768")), __goscriptReturn12[1]]
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["crypto.Decapsulator", "error"] } as $.FunctionTypeInfo)), generateKey: $.functionValue(async (): globalThis.Promise<[crypto.Decapsulator | null, $.GoError]> => {
	const __goscriptReturn13 = await mlkem.GenerateKey768()
	return [$.interfaceValue<crypto.Decapsulator | null>(__goscriptReturn13[0], "*mlkem.DecapsulationKey768", /* @__PURE__ */ $.pointerType("mlkem.DecapsulationKey768")), __goscriptReturn13[1]]
}, ({ kind: $.TypeKind.Function, params: [], results: ["crypto.Decapsulator", "error"] } as $.FunctionTypeInfo))})

export function __goscript_set_mlkem768(__goscriptValue: mlkemKEM | $.VarRef<mlkemKEM> | null): void {
	mlkem768 = __goscriptValue
}

export function MLKEM768(): __goscript_kem.KEM | null {
	return $.interfaceValue<__goscript_kem.KEM | null>(mlkem768, "*hpke.mlkemKEM", /* @__PURE__ */ $.pointerType("hpke.mlkemKEM"))
}

export let mlkem1024: mlkemKEM | $.VarRef<mlkemKEM> | null = new mlkemKEM({id: 0x0042, ciphertextSize: 1568, newPublicKey: $.functionValue((data: $.Slice<number>): [crypto.Encapsulator | null, $.GoError] => {
	const __goscriptReturn14 = mlkem.NewEncapsulationKey1024(data)
	return [$.interfaceValue<crypto.Encapsulator | null>(__goscriptReturn14[0], "*mlkem.EncapsulationKey1024", /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey1024")), __goscriptReturn14[1]]
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["crypto.Encapsulator", "error"] } as $.FunctionTypeInfo)), newPrivateKey: $.functionValue((data: $.Slice<number>): [crypto.Decapsulator | null, $.GoError] => {
	const __goscriptReturn15 = mlkem.NewDecapsulationKey1024(data)
	return [$.interfaceValue<crypto.Decapsulator | null>(__goscriptReturn15[0], "*mlkem.DecapsulationKey1024", /* @__PURE__ */ $.pointerType("mlkem.DecapsulationKey1024")), __goscriptReturn15[1]]
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["crypto.Decapsulator", "error"] } as $.FunctionTypeInfo)), generateKey: $.functionValue(async (): globalThis.Promise<[crypto.Decapsulator | null, $.GoError]> => {
	const __goscriptReturn16 = await mlkem.GenerateKey1024()
	return [$.interfaceValue<crypto.Decapsulator | null>(__goscriptReturn16[0], "*mlkem.DecapsulationKey1024", /* @__PURE__ */ $.pointerType("mlkem.DecapsulationKey1024")), __goscriptReturn16[1]]
}, ({ kind: $.TypeKind.Function, params: [], results: ["crypto.Decapsulator", "error"] } as $.FunctionTypeInfo))})

export function __goscript_set_mlkem1024(__goscriptValue: mlkemKEM | $.VarRef<mlkemKEM> | null): void {
	mlkem1024 = __goscriptValue
}

export function MLKEM1024(): __goscript_kem.KEM | null {
	return $.interfaceValue<__goscript_kem.KEM | null>(mlkem1024, "*hpke.mlkemKEM", /* @__PURE__ */ $.pointerType("hpke.mlkemKEM"))
}

export function NewMLKEMPublicKey(pub: crypto.Encapsulator | null): [__goscript_kem.PublicKey | null, $.GoError] {
	{
		const __goscriptTypeSwitchValue = pub
		switch (true) {
			case $.typeAssert<mlkem.EncapsulationKey768 | $.VarRef<mlkem.EncapsulationKey768> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey768")).ok:
				{
					return [$.interfaceValue<__goscript_kem.PublicKey | null>(new mlkemPublicKey({kem: mlkem768, pq: pub}), "*hpke.mlkemPublicKey", /* @__PURE__ */ $.pointerType("hpke.mlkemPublicKey")), null]
				}
				break
			case $.typeAssert<mlkem.EncapsulationKey1024 | $.VarRef<mlkem.EncapsulationKey1024> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey1024")).ok:
				{
					return [$.interfaceValue<__goscript_kem.PublicKey | null>(new mlkemPublicKey({kem: mlkem1024, pq: pub}), "*hpke.mlkemPublicKey", /* @__PURE__ */ $.pointerType("hpke.mlkemPublicKey")), null]
				}
				break
			default:
				{
					return [null, errors.New("unsupported public key type")]
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function NewMLKEMPrivateKey(priv: crypto.Decapsulator | null): globalThis.Promise<[__goscript_kem.PrivateKey | null, $.GoError]> {
	{
		const __goscriptTypeSwitchValue = (__goscriptAwait = (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? (priv as Exclude<crypto.Decapsulator, null>) : $.pointerValue<Exclude<crypto.Decapsulator, null>>(priv)).Encapsulator(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		switch (true) {
			case $.typeAssert<mlkem.EncapsulationKey768 | $.VarRef<mlkem.EncapsulationKey768> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey768")).ok:
				{
					return [$.interfaceValue<__goscript_kem.PrivateKey | null>(new mlkemPrivateKey({kem: mlkem768, pq: priv}), "*hpke.mlkemPrivateKey", /* @__PURE__ */ $.pointerType("hpke.mlkemPrivateKey")), null]
				}
				break
			case $.typeAssert<mlkem.EncapsulationKey1024 | $.VarRef<mlkem.EncapsulationKey1024> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey1024")).ok:
				{
					return [$.interfaceValue<__goscript_kem.PrivateKey | null>(new mlkemPrivateKey({kem: mlkem1024, pq: priv}), "*hpke.mlkemPrivateKey", /* @__PURE__ */ $.pointerType("hpke.mlkemPrivateKey")), null]
				}
				break
			default:
				{
					return [null, errors.New("unsupported public key type")]
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptAwait: any
