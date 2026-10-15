// Generated file based on kem.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as rand from "@goscript/crypto/internal/rand/index.js"

import * as errors from "@goscript/errors/index.js"

import * as byteorder from "@goscript/internal/byteorder/index.js"

import * as slices from "@goscript/slices/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_kdf from "./kdf.gs.ts"

import * as __goscript_pq from "./pq.gs.ts"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/crypto/internal/rand/index.js"
import "@goscript/errors/index.js"
import "@goscript/internal/byteorder/index.js"
import "@goscript/slices/index.js"
import "@goscript/io/index.js"
import "./kdf.gs.ts"
import "./pq.gs.ts"

$.registerTypePackagePath("crypto/hpke", ["hpke.KEM", "hpke.PublicKey", "hpke.PrivateKey", "hpke.dhKEM", "hpke.unsupportedCurveKEM", "hpke.dhKEMPublicKey", "hpke.dhKEMPrivateKey"])

export type KEM = {
	DeriveKeyPair(ikm: $.Slice<number>): [PrivateKey | null, $.GoError] | globalThis.Promise<[PrivateKey | null, $.GoError]>
	GenerateKey(): [PrivateKey | null, $.GoError] | globalThis.Promise<[PrivateKey | null, $.GoError]>
	ID(): number
	NewPrivateKey(_p0: $.Slice<number>): [PrivateKey | null, $.GoError] | globalThis.Promise<[PrivateKey | null, $.GoError]>
	NewPublicKey(_p0: $.Slice<number>): [PublicKey | null, $.GoError] | globalThis.Promise<[PublicKey | null, $.GoError]>
	encSize(): number
}

$.registerInterfaceType(
	"hpke.KEM",
	null,
	[$.methodSignature("DeriveKeyPair", [["ikm", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["hpke.PrivateKey", "error"]), $.methodSignature("GenerateKey", [], ["hpke.PrivateKey", "error"]), $.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint16")]), $.methodSignature("NewPrivateKey", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["hpke.PrivateKey", "error"]), $.methodSignature("NewPublicKey", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["hpke.PublicKey", "error"]), $.methodSignature("encSize", [], [/* @__PURE__ */ $.basicType("int")])]
);

export type PublicKey = {
	Bytes(): $.Slice<number> | globalThis.Promise<$.Slice<number>>
	KEM(): KEM | null
	encap(): [$.Slice<number>, $.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.Slice<number>, $.GoError]>
}

$.registerInterfaceType(
	"hpke.PublicKey",
	null,
	[$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("KEM", [], ["hpke.KEM"]), $.methodSignature("encap", [], [["sharedSecret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["enc", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]])]
);

export type PrivateKey = {
	Bytes(): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	KEM(): KEM | null
	PublicKey(): PublicKey | null | globalThis.Promise<PublicKey | null>
	decap(enc: $.Slice<number>): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
}

$.registerInterfaceType(
	"hpke.PrivateKey",
	null,
	[$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("KEM", [], ["hpke.KEM"]), $.methodSignature("PublicKey", [], ["hpke.PublicKey"]), $.methodSignature("decap", [["enc", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["sharedSecret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]])]
);

export class dhKEM {
	public get kdf(): __goscript_kdf.KDF | null {
		return this._fields.kdf
	}

	public set kdf(value: __goscript_kdf.KDF | null) {
		this._fields.kdf = value
	}

	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get curve(): ecdh.Curve | null {
		return this._fields.curve
	}

	public set curve(value: ecdh.Curve | null) {
		this._fields.curve = value
	}

	public get Nsecret(): number {
		return this._fields.Nsecret
	}

	public set Nsecret(value: number) {
		this._fields.Nsecret = value
	}

	public get Nsk(): number {
		return this._fields.Nsk
	}

	public set Nsk(value: number) {
		this._fields.Nsk = value
	}

	public get Nenc(): number {
		return this._fields.Nenc
	}

	public set Nenc(value: number) {
		this._fields.Nenc = value
	}

	public _fields: {
		kdf: __goscript_kdf.KDF | null
		id: number
		curve: ecdh.Curve | null
		Nsecret: number
		Nsk: number
		Nenc: number
	}

	constructor(init?: Partial<{kdf?: __goscript_kdf.KDF | null, id?: number, curve?: ecdh.Curve | null, Nsecret?: number, Nsk?: number, Nenc?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			kdf: init?.kdf ?? (null! as __goscript_kdf.KDF | null),
			id: init?.id ?? (0 as number),
			curve: init?.curve ?? (null! as ecdh.Curve | null),
			Nsecret: init?.Nsecret ?? (0 as number),
			Nsk: init?.Nsk ?? (0 as number),
			Nenc: init?.Nenc ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dhKEM {
		return new dhKEM(this, true)
	}

	public __goscriptAssign(source: dhKEM): void {
		const target = this._fields
		const values = source._fields
		target.kdf = $.assignFieldValue(target.kdf, values.kdf, "hpke.KDF")
		target.id = values.id
		target.curve = $.assignFieldValue(target.curve, values.curve, "ecdh.Curve")
		target.Nsecret = values.Nsecret
		target.Nsk = values.Nsk
		target.Nenc = values.Nenc
	}

	public async DeriveKeyPair(ikm: $.Slice<number>): globalThis.Promise<[PrivateKey | null, $.GoError]> {
		const kem: dhKEM | $.VarRef<dhKEM> | null = this;
		const kem$: dhKEM = kem == null ? $.pointerTarget<dhKEM>(kem) : (kem as any).__isVarRef === true ? (kem as any).value : (kem as any).__goValue === undefined ? (kem as any) : $.pointerTarget<dhKEM>(kem)
		// DeriveKeyPair from RFC 9180 Section 7.1.3.
		let suiteID: $.Slice<number> = byteorder.BEAppendUint16(new Uint8Array([75, 69, 77]), (kem$ as dhKEM).id)
		let __goscriptTuple0: any = await $.pointerValue<Exclude<__goscript_kdf.KDF, null>>((kem$ as dhKEM).kdf).labeledExtract(suiteID, null, "dkp_prk", ikm)
		let prk: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		if ($.pointerEqual(kem, __goscript_get_dhKEMX25519())) {
			let __goscriptTuple1: any = await $.pointerValue<Exclude<__goscript_kdf.KDF, null>>((kem$ as dhKEM).kdf).labeledExpand(suiteID, prk, "sk", null, (kem$ as dhKEM).Nsk)
			let s: $.Slice<number> = __goscriptTuple1[0]
			let __goscriptShadow0 = __goscriptTuple1[1]
			if (__goscriptShadow0 != null) {
				return [null, __goscriptShadow0]
			}
			return (kem !== null && (kem as any).__isVarRef !== true && (kem as any).__goValue === undefined ? ((kem as any) as dhKEM).NewPrivateKey(s) : dhKEM.prototype.NewPrivateKey.call(kem, s))
		}
		let counter: number = 0
		while (counter < 4) {
			let __goscriptTuple2: any = await $.pointerValue<Exclude<__goscript_kdf.KDF, null>>((kem$ as dhKEM).kdf).labeledExpand(suiteID, prk, "candidate", new Uint8Array([counter]) as $.Slice<number>, (kem$ as dhKEM).Nsk)
			let s: $.Slice<number> = __goscriptTuple2[0]
			let __goscriptShadow1 = __goscriptTuple2[1]
			if (__goscriptShadow1 != null) {
				return [null, __goscriptShadow1]
			}
			if ($.pointerEqual(kem, __goscript_get_dhKEMP521())) {
				$.sliceElems(s!)[$.sliceSlot(s!, 0)] = $.sliceElems(s!)[$.sliceSlot(s!, 0)] & (0x01)
			}
			let __goscriptTuple3: any = await (kem !== null && (kem as any).__isVarRef !== true && (kem as any).__goValue === undefined ? ((kem as any) as dhKEM).NewPrivateKey(s) : dhKEM.prototype.NewPrivateKey.call(kem, s))
			let r = __goscriptTuple3[0]
			__goscriptShadow1 = __goscriptTuple3[1]
			if (__goscriptShadow1 != null) {
				counter = ((counter + 1) & 0xff)
				continue
			}
			return [r, null]
		}
		$.panic("chance of four rejections is < 2^-128")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async GenerateKey(): globalThis.Promise<[PrivateKey | null, $.GoError]> {
		const kem: dhKEM | $.VarRef<dhKEM> | null = this;
		let __goscriptTuple4: any = await $.pointerValue<Exclude<ecdh.Curve, null>>($.pointerValue<dhKEM>(kem).curve).GenerateKey($.pointerValueOrNil(rand.Reader)!)
		let priv: ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return NewDHKEMPrivateKey($.interfaceValue<ecdh.KeyExchanger | null>(priv, "*ecdh.PrivateKey", /* @__PURE__ */ $.pointerType("ecdh.PrivateKey")))
	}

	public ID(): number {
		const kem: dhKEM | $.VarRef<dhKEM> | null = this;
		return $.pointerValue<dhKEM>(kem).id
	}

	public async NewPrivateKey(ikm: $.Slice<number>): globalThis.Promise<[PrivateKey | null, $.GoError]> {
		const kem: dhKEM | $.VarRef<dhKEM> | null = this;
		let __goscriptTuple5: any = await $.pointerValue<Exclude<ecdh.Curve, null>>($.pointerValue<dhKEM>(kem).curve).NewPrivateKey(ikm)
		let priv: ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null = __goscriptTuple5[0]
		let err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		return NewDHKEMPrivateKey($.interfaceValue<ecdh.KeyExchanger | null>(priv, "*ecdh.PrivateKey", /* @__PURE__ */ $.pointerType("ecdh.PrivateKey")))
	}

	public NewPublicKey(data: $.Slice<number>): [PublicKey | null, $.GoError] {
		const kem: dhKEM | $.VarRef<dhKEM> | null = this;
		let __goscriptTuple6: any = $.pointerValue<Exclude<ecdh.Curve, null>>($.pointerValue<dhKEM>(kem).curve).NewPublicKey(data)
		let pub: ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null = __goscriptTuple6[0]
		let err = __goscriptTuple6[1]
		if (err != null) {
			return [null, err]
		}
		return NewDHKEMPublicKey(pub)
	}

	public encSize(): number {
		const kem: dhKEM | $.VarRef<dhKEM> | null = this;
		return $.pointerValue<dhKEM>(kem).Nenc
	}

	public async extractAndExpand(dhKey: $.Slice<number>, kemContext: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const kem: dhKEM | $.VarRef<dhKEM> | null = this;
		const kem$: dhKEM = kem == null ? $.pointerTarget<dhKEM>(kem) : (kem as any).__isVarRef === true ? (kem as any).value : (kem as any).__goValue === undefined ? (kem as any) : $.pointerTarget<dhKEM>(kem)
		let suiteID: $.Slice<number> = byteorder.BEAppendUint16(new Uint8Array([75, 69, 77]), (kem$ as dhKEM).id)
		let __goscriptTuple7: any = await $.pointerValue<Exclude<__goscript_kdf.KDF, null>>((kem$ as dhKEM).kdf).labeledExtract(suiteID, null, "eae_prk", dhKey)
		let eaePRK: $.Slice<number> = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}
		return $.pointerValue<Exclude<__goscript_kdf.KDF, null>>((kem$ as dhKEM).kdf).labeledExpand(suiteID, eaePRK, "shared_secret", kemContext, (kem$ as dhKEM).Nsecret)
	}

	static __typeInfo = $.registerStructType(
		"hpke.dhKEM",
		() => new dhKEM(),
		() => [$.methodSignature("DeriveKeyPair", [["ikm", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["hpke.PrivateKey", "error"], true), $.methodSignature("GenerateKey", [], ["hpke.PrivateKey", "error"], true), $.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint16")], true), $.methodSignature("NewPrivateKey", [["ikm", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["hpke.PrivateKey", "error"], true), $.methodSignature("NewPublicKey", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["hpke.PublicKey", "error"], true), $.methodSignature("encSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("extractAndExpand", [["dhKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["kemContext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true)],
		dhKEM,
		() => [/* @__PURE__ */ $.structField("kdf", "hpke.KDF", [0], 0, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint16"), [1], 16, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("curve", "ecdh.Curve", [2], 24, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("Nsecret", /* @__PURE__ */ $.basicType("uint16"), [3], 40, true), /* @__PURE__ */ $.structField("Nsk", /* @__PURE__ */ $.basicType("uint16"), [4], 42, true), /* @__PURE__ */ $.structField("Nenc", /* @__PURE__ */ $.basicType("int"), [5], 48, true)]
	)
}

export class unsupportedCurveKEM {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): unsupportedCurveKEM {
		return new unsupportedCurveKEM(this, true)
	}

	public __goscriptAssign(source: unsupportedCurveKEM): void {
	}

	public DeriveKeyPair(_p0: $.Slice<number>): [PrivateKey | null, $.GoError] {
		return [null, errors.New("unsupported curve")]
	}

	public GenerateKey(): [PrivateKey | null, $.GoError] {
		return [null, errors.New("unsupported curve")]
	}

	public ID(): number {
		return 0
	}

	public NewPrivateKey(_p0: $.Slice<number>): [PrivateKey | null, $.GoError] {
		return [null, errors.New("unsupported curve")]
	}

	public NewPublicKey(_p0: $.Slice<number>): [PublicKey | null, $.GoError] {
		return [null, errors.New("unsupported curve")]
	}

	public encSize(): number {
		return 0
	}

	static __typeInfo = $.registerStructType(
		"hpke.unsupportedCurveKEM",
		() => new unsupportedCurveKEM(),
		() => [$.methodSignature("DeriveKeyPair", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["hpke.PrivateKey", "error"]), $.methodSignature("GenerateKey", [], ["hpke.PrivateKey", "error"]), $.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint16")]), $.methodSignature("NewPrivateKey", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["hpke.PrivateKey", "error"]), $.methodSignature("NewPublicKey", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["hpke.PublicKey", "error"]), $.methodSignature("encSize", [], [/* @__PURE__ */ $.basicType("int")])],
		unsupportedCurveKEM,
		() => []
	)
}

export class dhKEMPublicKey {
	public get kem(): dhKEM | $.VarRef<dhKEM> | null {
		return this._fields.kem
	}

	public set kem(value: dhKEM | $.VarRef<dhKEM> | null) {
		this._fields.kem = value
	}

	public get pub(): ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null {
		return this._fields.pub
	}

	public set pub(value: ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null) {
		this._fields.pub = value
	}

	public _fields: {
		kem: dhKEM | $.VarRef<dhKEM> | null
		pub: ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null
	}

	constructor(init?: Partial<{kem?: dhKEM | $.VarRef<dhKEM> | null, pub?: ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			kem: init?.kem ?? (null! as dhKEM | $.VarRef<dhKEM> | null),
			pub: init?.pub ?? (null! as ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dhKEMPublicKey {
		return new dhKEMPublicKey(this, true)
	}

	public __goscriptAssign(source: dhKEMPublicKey): void {
		const target = this._fields
		const values = source._fields
		target.kem = values.kem
		target.pub = values.pub
	}

	public Bytes(): $.Slice<number> {
		const pk: dhKEMPublicKey | $.VarRef<dhKEMPublicKey> | null = this;
		return ecdh.PublicKey.prototype.Bytes.call($.pointerValue<ecdh.PublicKey>($.pointerValue<dhKEMPublicKey>(pk).pub))
	}

	public KEM(): KEM | null {
		const pk: dhKEMPublicKey | $.VarRef<dhKEMPublicKey> | null = this;
		return $.interfaceValue<KEM | null>($.pointerValue<dhKEMPublicKey>(pk).kem, "*hpke.dhKEM", /* @__PURE__ */ $.pointerType("hpke.dhKEM"))
	}

	public async encap(): globalThis.Promise<[$.Slice<number>, $.Slice<number>, $.GoError]> {
		const pk: dhKEMPublicKey | $.VarRef<dhKEMPublicKey> | null = this;
		let sharedSecret: $.Slice<number> = null! as $.Slice<number>
		let encapPub: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		const pk$: dhKEMPublicKey = pk == null ? $.pointerTarget<dhKEMPublicKey>(pk) : (pk as any).__isVarRef === true ? (pk as any).value : (pk as any).__goValue === undefined ? (pk as any) : $.pointerTarget<dhKEMPublicKey>(pk)
		let __goscriptTuple8: any = await $.pointerValue<Exclude<ecdh.Curve, null>>(ecdh.PublicKey.prototype.Curve.call($.pointerValue<ecdh.PublicKey>((pk$ as dhKEMPublicKey).pub))).GenerateKey($.pointerValueOrNil(rand.Reader)!)
		let privEph: ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [null, null, err]
		}
		if (testingOnlyGenerateKey != null) {
			privEph = ((__goscriptAwait = testingOnlyGenerateKey!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null)
		}
		let __goscriptTuple9: any = ecdh.PrivateKey.prototype.ECDH.call($.pointerValue<ecdh.PrivateKey>(privEph), (pk$ as dhKEMPublicKey).pub)
		let dhVal: $.Slice<number> = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [null, null, err]
		}
		let encPubEph: $.Slice<number> = ecdh.PublicKey.prototype.Bytes.call($.pointerValue<ecdh.PublicKey>(ecdh.PrivateKey.prototype.PublicKey.call($.pointerValue<ecdh.PrivateKey>(privEph))))

		let encPubRecip: $.Slice<number> = ecdh.PublicKey.prototype.Bytes.call($.pointerValue<ecdh.PublicKey>((pk$ as dhKEMPublicKey).pub))
		let kemContext: $.Slice<number> = $.appendSlice(encPubEph, encPubRecip, $.byteSliceHint)
		let __goscriptTuple10: any = await dhKEM.prototype.extractAndExpand.call((pk$ as dhKEMPublicKey).kem, dhVal, kemContext)
		sharedSecret = __goscriptTuple10[0]
		err = __goscriptTuple10[1]
		if (err != null) {
			return [null, null, err]
		}
		return [sharedSecret, encPubEph, null]
	}

	static __typeInfo = $.registerStructType(
		"hpke.dhKEMPublicKey",
		() => new dhKEMPublicKey(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("KEM", [], ["hpke.KEM"], true), $.methodSignature("encap", [], [["sharedSecret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["encapPub", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true)],
		dhKEMPublicKey,
		() => [/* @__PURE__ */ $.structField("kem", /* @__PURE__ */ $.pointerType("hpke.dhKEM"), [0], 0, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("pub", /* @__PURE__ */ $.pointerType("ecdh.PublicKey"), [1], 8, false, { pkgPath: "crypto/hpke" })]
	)
}

export class dhKEMPrivateKey {
	public get kem(): dhKEM | $.VarRef<dhKEM> | null {
		return this._fields.kem
	}

	public set kem(value: dhKEM | $.VarRef<dhKEM> | null) {
		this._fields.kem = value
	}

	public get priv(): ecdh.KeyExchanger | null {
		return this._fields.priv
	}

	public set priv(value: ecdh.KeyExchanger | null) {
		this._fields.priv = value
	}

	public _fields: {
		kem: dhKEM | $.VarRef<dhKEM> | null
		priv: ecdh.KeyExchanger | null
	}

	constructor(init?: Partial<{kem?: dhKEM | $.VarRef<dhKEM> | null, priv?: ecdh.KeyExchanger | null}>, __goscriptValue?: boolean) {
		this._fields = {
			kem: init?.kem ?? (null! as dhKEM | $.VarRef<dhKEM> | null),
			priv: init?.priv ?? (null! as ecdh.KeyExchanger | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dhKEMPrivateKey {
		return new dhKEMPrivateKey(this, true)
	}

	public __goscriptAssign(source: dhKEMPrivateKey): void {
		const target = this._fields
		const values = source._fields
		target.kem = values.kem
		target.priv = $.assignFieldValue(target.priv, values.priv, "ecdh.KeyExchanger")
	}

	public Bytes(): [$.Slice<number>, $.GoError] {
		const k: dhKEMPrivateKey | $.VarRef<dhKEMPrivateKey> | null = this;
		const k$: dhKEMPrivateKey = k == null ? $.pointerTarget<dhKEMPrivateKey>(k) : (k as any).__isVarRef === true ? (k as any).value : (k as any).__goValue === undefined ? (k as any) : $.pointerTarget<dhKEMPrivateKey>(k)
		// Bizarrely, RFC 9180, Section 7.1.2 says SerializePrivateKey MUST clamp
		// the output, which I thought we all agreed to instead do as part of the DH
		// function, letting private keys be random bytes.
		//
		// At the same time, it says DeserializePrivateKey MUST also clamp, implying
		// that the input doesn't have to be clamped, so Bytes by spec doesn't
		// necessarily match the NewPrivateKey input.
		//
		// I'm sure this will not lead to any unexpected behavior or interop issue.
		let __goscriptTuple12: any = $.typeAssertTuple<ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null>((k$ as dhKEMPrivateKey).priv, /* @__PURE__ */ $.pointerType("ecdh.PrivateKey"))
		let priv: ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null = __goscriptTuple12[0]
		let ok = __goscriptTuple12[1]
		if (!ok) {
			return [null, errors.New("ecdh: private key does not support Bytes")]
		}
		if ($.pointerEqual((k$ as dhKEMPrivateKey).kem, __goscript_get_dhKEMX25519())) {
			let b: $.Slice<number> = ecdh.PrivateKey.prototype.Bytes.call($.pointerValue<ecdh.PrivateKey>(priv))
			$.sliceElems(b!)[$.sliceSlot(b!, 0)] = $.sliceElems(b!)[$.sliceSlot(b!, 0)] & (248)
			$.sliceElems(b!)[$.sliceSlot(b!, 31)] = $.sliceElems(b!)[$.sliceSlot(b!, 31)] & (127)
			$.sliceElems(b!)[$.sliceSlot(b!, 31)] = $.sliceElems(b!)[$.sliceSlot(b!, 31)] | (64)
			return [b, null]
		}
		return [ecdh.PrivateKey.prototype.Bytes.call($.pointerValue<ecdh.PrivateKey>(priv)), null]
	}

	public KEM(): KEM | null {
		const k: dhKEMPrivateKey | $.VarRef<dhKEMPrivateKey> | null = this;
		return $.interfaceValue<KEM | null>($.pointerValue<dhKEMPrivateKey>(k).kem, "*hpke.dhKEM", /* @__PURE__ */ $.pointerType("hpke.dhKEM"))
	}

	public async PublicKey(): globalThis.Promise<PublicKey | null> {
		const k: dhKEMPrivateKey | $.VarRef<dhKEMPrivateKey> | null = this;
		const k$: dhKEMPrivateKey = k == null ? $.pointerTarget<dhKEMPrivateKey>(k) : (k as any).__isVarRef === true ? (k as any).value : (k as any).__goValue === undefined ? (k as any) : $.pointerTarget<dhKEMPrivateKey>(k)
		return $.interfaceValue<PublicKey | null>((await (async () => { const __goscriptLiteralField8 = ((__goscriptAwait = $.pointerValue<Exclude<ecdh.KeyExchanger, null>>((k$ as dhKEMPrivateKey).priv).PublicKey(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null); return new dhKEMPublicKey({kem: (k$ as dhKEMPrivateKey).kem, pub: __goscriptLiteralField8}) })()), "*hpke.dhKEMPublicKey", /* @__PURE__ */ $.pointerType("hpke.dhKEMPublicKey"))
	}

	public async decap(encPubEph: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const k: dhKEMPrivateKey | $.VarRef<dhKEMPrivateKey> | null = this;
		const k$: dhKEMPrivateKey = k == null ? $.pointerTarget<dhKEMPrivateKey>(k) : (k as any).__isVarRef === true ? (k as any).value : (k as any).__goValue === undefined ? (k as any) : $.pointerTarget<dhKEMPrivateKey>(k)
		let __goscriptTuple13: any = await $.pointerValue<Exclude<ecdh.Curve, null>>((__goscriptAwait = $.pointerValue<Exclude<ecdh.KeyExchanger, null>>((k$ as dhKEMPrivateKey).priv).Curve(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).NewPublicKey(encPubEph)
		let pubEph: ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null = __goscriptTuple13[0]
		let err = __goscriptTuple13[1]
		if (err != null) {
			return [null, err]
		}
		let __goscriptTuple14: any = await $.pointerValue<Exclude<ecdh.KeyExchanger, null>>((k$ as dhKEMPrivateKey).priv).ECDH(pubEph)
		let dhVal: $.Slice<number> = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		if (err != null) {
			return [null, err]
		}
		let kemContext: $.Slice<number> = $.appendSlice(slices.Clip(encPubEph), ecdh.PublicKey.prototype.Bytes.call($.pointerValue<ecdh.PublicKey>(((__goscriptAwait = $.pointerValue<Exclude<ecdh.KeyExchanger, null>>((k$ as dhKEMPrivateKey).priv).PublicKey(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null))), $.byteSliceHint)
		return dhKEM.prototype.extractAndExpand.call((k$ as dhKEMPrivateKey).kem, dhVal, kemContext)
	}

	static __typeInfo = $.registerStructType(
		"hpke.dhKEMPrivateKey",
		() => new dhKEMPrivateKey(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("KEM", [], ["hpke.KEM"], true), $.methodSignature("PublicKey", [], ["hpke.PublicKey"], true), $.methodSignature("decap", [["encPubEph", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true)],
		dhKEMPrivateKey,
		() => [/* @__PURE__ */ $.structField("kem", /* @__PURE__ */ $.pointerType("hpke.dhKEM"), [0], 0, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("priv", "ecdh.KeyExchanger", [1], 8, false, { pkgPath: "crypto/hpke" })]
	)
}

export function NewKEM(id: number): [KEM | null, $.GoError] {
	switch (id) {
		case 0x0010:
		{
			return [DHKEM(ecdh.P256()), null]
			break
		}
		case 0x0011:
		{
			return [DHKEM(ecdh.P384()), null]
			break
		}
		case 0x0012:
		{
			return [DHKEM(ecdh.P521()), null]
			break
		}
		case 0x0020:
		{
			return [DHKEM(ecdh.X25519()), null]
			break
		}
		case 0x0041:
		{
			return [__goscript_pq.MLKEM768(), null]
			break
		}
		case 0x0042:
		{
			return [__goscript_pq.MLKEM1024(), null]
			break
		}
		case 0x647a:
		{
			return [__goscript_pq.MLKEM768X25519(), null]
			break
		}
		case 0x0050:
		{
			return [__goscript_pq.MLKEM768P256(), null]
			break
		}
		case 0x0051:
		{
			return [__goscript_pq.MLKEM1024P384(), null]
			break
		}
		default:
		{
			return [null, errors.New("unsupported KEM")]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export var dhKEMP256: dhKEM | $.VarRef<dhKEM> | null

export function __goscript_init_dhKEMP256(): void {
	if (((dhKEMP256) as any) === undefined) {
		dhKEMP256 = (() => { const __goscriptLiteralField0 = __goscript_kdf.HKDFSHA256(); const __goscriptLiteralField1 = ecdh.P256(); return new dhKEM({kdf: __goscriptLiteralField0, id: 0x0010, curve: __goscriptLiteralField1, Nsecret: 32, Nsk: 32, Nenc: 65}) })()
	}
}

export function __goscript_get_dhKEMP256(): dhKEM | $.VarRef<dhKEM> | null {
	if (((dhKEMP256) as any) === undefined) {
		__goscript_init_dhKEMP256()
	}
	return dhKEMP256
}

export function __goscript_set_dhKEMP256(__goscriptValue: dhKEM | $.VarRef<dhKEM> | null): void {
	dhKEMP256 = __goscriptValue
}

export var dhKEMP384: dhKEM | $.VarRef<dhKEM> | null

export function __goscript_init_dhKEMP384(): void {
	if (((dhKEMP384) as any) === undefined) {
		dhKEMP384 = (() => { const __goscriptLiteralField2 = __goscript_kdf.HKDFSHA384(); const __goscriptLiteralField3 = ecdh.P384(); return new dhKEM({kdf: __goscriptLiteralField2, id: 0x0011, curve: __goscriptLiteralField3, Nsecret: 48, Nsk: 48, Nenc: 97}) })()
	}
}

export function __goscript_get_dhKEMP384(): dhKEM | $.VarRef<dhKEM> | null {
	if (((dhKEMP384) as any) === undefined) {
		__goscript_init_dhKEMP384()
	}
	return dhKEMP384
}

export function __goscript_set_dhKEMP384(__goscriptValue: dhKEM | $.VarRef<dhKEM> | null): void {
	dhKEMP384 = __goscriptValue
}

export var dhKEMP521: dhKEM | $.VarRef<dhKEM> | null

export function __goscript_init_dhKEMP521(): void {
	if (((dhKEMP521) as any) === undefined) {
		dhKEMP521 = (() => { const __goscriptLiteralField4 = __goscript_kdf.HKDFSHA512(); const __goscriptLiteralField5 = ecdh.P521(); return new dhKEM({kdf: __goscriptLiteralField4, id: 0x0012, curve: __goscriptLiteralField5, Nsecret: 64, Nsk: 66, Nenc: 133}) })()
	}
}

export function __goscript_get_dhKEMP521(): dhKEM | $.VarRef<dhKEM> | null {
	if (((dhKEMP521) as any) === undefined) {
		__goscript_init_dhKEMP521()
	}
	return dhKEMP521
}

export function __goscript_set_dhKEMP521(__goscriptValue: dhKEM | $.VarRef<dhKEM> | null): void {
	dhKEMP521 = __goscriptValue
}

export var dhKEMX25519: dhKEM | $.VarRef<dhKEM> | null

export function __goscript_init_dhKEMX25519(): void {
	if (((dhKEMX25519) as any) === undefined) {
		dhKEMX25519 = (() => { const __goscriptLiteralField6 = __goscript_kdf.HKDFSHA256(); const __goscriptLiteralField7 = ecdh.X25519(); return new dhKEM({kdf: __goscriptLiteralField6, id: 0x0020, curve: __goscriptLiteralField7, Nsecret: 32, Nsk: 32, Nenc: 32}) })()
	}
}

export function __goscript_get_dhKEMX25519(): dhKEM | $.VarRef<dhKEM> | null {
	if (((dhKEMX25519) as any) === undefined) {
		__goscript_init_dhKEMX25519()
	}
	return dhKEMX25519
}

export function __goscript_set_dhKEMX25519(__goscriptValue: dhKEM | $.VarRef<dhKEM> | null): void {
	dhKEMX25519 = __goscriptValue
}

export function DHKEM(curve: ecdh.Curve | null): KEM | null {
	{
		let __goscriptSwitch0 = curve
		switch ((true as boolean)) {
			case $.comparableEqual(__goscriptSwitch0, ecdh.P256()):
			{
				return $.interfaceValue<KEM | null>(__goscript_get_dhKEMP256(), "*hpke.dhKEM", /* @__PURE__ */ $.pointerType("hpke.dhKEM"))
				break
			}
			case $.comparableEqual(__goscriptSwitch0, ecdh.P384()):
			{
				return $.interfaceValue<KEM | null>(__goscript_get_dhKEMP384(), "*hpke.dhKEM", /* @__PURE__ */ $.pointerType("hpke.dhKEM"))
				break
			}
			case $.comparableEqual(__goscriptSwitch0, ecdh.P521()):
			{
				return $.interfaceValue<KEM | null>(__goscript_get_dhKEMP521(), "*hpke.dhKEM", /* @__PURE__ */ $.pointerType("hpke.dhKEM"))
				break
			}
			case $.comparableEqual(__goscriptSwitch0, ecdh.X25519()):
			{
				return $.interfaceValue<KEM | null>(__goscript_get_dhKEMX25519(), "*hpke.dhKEM", /* @__PURE__ */ $.pointerType("hpke.dhKEM"))
				break
			}
			default:
			{
				return $.interfaceValue<KEM | null>(new unsupportedCurveKEM(undefined, true), "hpke.unsupportedCurveKEM", "hpke.unsupportedCurveKEM")
				break
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function NewDHKEMPublicKey(pub: ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null): [PublicKey | null, $.GoError] {
	let __goscriptTuple11: any = $.typeAssertTuple<dhKEM | $.VarRef<dhKEM> | null>(DHKEM(ecdh.PublicKey.prototype.Curve.call($.pointerValue<ecdh.PublicKey>(pub))), /* @__PURE__ */ $.pointerType("hpke.dhKEM"))
	let kem: dhKEM | $.VarRef<dhKEM> | null = __goscriptTuple11[0]
	let ok = __goscriptTuple11[1]
	if (!ok) {
		return [null, errors.New("unsupported curve")]
	}
	return [$.interfaceValue<PublicKey | null>(new dhKEMPublicKey({kem: kem, pub: pub}), "*hpke.dhKEMPublicKey", /* @__PURE__ */ $.pointerType("hpke.dhKEMPublicKey")), null]
}

export let testingOnlyGenerateKey: (() => ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null | globalThis.Promise<ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null>) | null = null! as (() => ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null | globalThis.Promise<ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null>) | null

export function __goscript_set_testingOnlyGenerateKey(__goscriptValue: (() => ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null | globalThis.Promise<ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null>) | null): void {
	testingOnlyGenerateKey = __goscriptValue
}

export async function NewDHKEMPrivateKey(priv: ecdh.KeyExchanger | null): globalThis.Promise<[PrivateKey | null, $.GoError]> {
	let __goscriptTuple15: any = $.typeAssertTuple<dhKEM | $.VarRef<dhKEM> | null>(DHKEM((__goscriptAwait = (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? (priv as Exclude<ecdh.KeyExchanger, null>) : $.pointerValue<Exclude<ecdh.KeyExchanger, null>>(priv)).Curve(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), /* @__PURE__ */ $.pointerType("hpke.dhKEM"))
	let kem: dhKEM | $.VarRef<dhKEM> | null = __goscriptTuple15[0]
	let ok = __goscriptTuple15[1]
	if (!ok) {
		return [null, errors.New("unsupported curve")]
	}
	return [$.interfaceValue<PrivateKey | null>(new dhKEMPrivateKey({kem: kem, priv: priv}), "*hpke.dhKEMPrivateKey", /* @__PURE__ */ $.pointerType("hpke.dhKEMPrivateKey")), null]
}

var __goscriptAwait: any
