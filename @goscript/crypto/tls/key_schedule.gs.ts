// Generated file based on key_schedule.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as ecdh2 from "@goscript/crypto/ecdh/index.js"

import * as fips140 from "@goscript/crypto/fips140/index.js"

import * as hmac from "@goscript/crypto/hmac/index.js"

import * as tls13 from "@goscript/crypto/internal/fips140/tls13/index.js"

import * as mlkem2 from "@goscript/crypto/mlkem/index.js"

import * as errors from "@goscript/errors/index.js"

import * as hash from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"

import type * as cipher from "@goscript/crypto/cipher/index.js"

import * as __goscript_cipher_suites from "./cipher_suites.gs.ts"

import * as __goscript_common from "./common.gs.ts"

import * as __goscript_common_string from "./common_string.gs.ts"
import "@goscript/crypto/index.js"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/crypto/fips140/index.js"
import "@goscript/crypto/hmac/index.js"
import "@goscript/crypto/internal/fips140/tls13/index.js"
import "@goscript/crypto/mlkem/index.js"
import "@goscript/errors/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"
import "./cipher_suites.gs.ts"
import "./common.gs.ts"
import "./common_string.gs.ts"

$.registerTypePackagePath("crypto/tls", ["tls.keySharePrivateKeys", "tls.keyExchange", "tls.mlkem1024KeyExchange", "tls.ecdhKeyExchange", "tls.hybridKeyExchange"])

export type keyExchange = {
	clientSharedSecret(priv: keySharePrivateKeys | $.VarRef<keySharePrivateKeys> | null, serverKeyShare: $.Slice<number>): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	keyShares(rand: io.Reader | null): [keySharePrivateKeys | $.VarRef<keySharePrivateKeys> | null, $.Slice<__goscript_common.keyShare>, $.GoError] | globalThis.Promise<[keySharePrivateKeys | $.VarRef<keySharePrivateKeys> | null, $.Slice<__goscript_common.keyShare>, $.GoError]>
	serverSharedSecret(rand: io.Reader | null, clientKeyShare: $.Slice<number>): [$.Slice<number>, __goscript_common.keyShare, $.GoError] | globalThis.Promise<[$.Slice<number>, __goscript_common.keyShare, $.GoError]>
}

$.registerInterfaceType(
	"tls.keyExchange",
	null,
	[$.methodSignature("clientSharedSecret", [["priv", /* @__PURE__ */ $.pointerType("tls.keySharePrivateKeys")], ["serverKeyShare", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("keyShares", [["rand", "io.Reader"]], [/* @__PURE__ */ $.pointerType("tls.keySharePrivateKeys"), /* @__PURE__ */ $.sliceType("tls.keyShare"), "error"]), $.methodSignature("serverSharedSecret", [["rand", "io.Reader"], ["clientKeyShare", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "tls.keyShare", "error"])]
);

export class keySharePrivateKeys {
	public get ecdhe(): ecdh2.PrivateKey | $.VarRef<ecdh2.PrivateKey> | null {
		return this._fields.ecdhe
	}

	public set ecdhe(value: ecdh2.PrivateKey | $.VarRef<ecdh2.PrivateKey> | null) {
		this._fields.ecdhe = value
	}

	public get mlkem(): crypto.Decapsulator | null {
		return this._fields.mlkem
	}

	public set mlkem(value: crypto.Decapsulator | null) {
		this._fields.mlkem = value
	}

	public _fields: {
		ecdhe: ecdh2.PrivateKey | $.VarRef<ecdh2.PrivateKey> | null
		mlkem: crypto.Decapsulator | null
	}

	constructor(init?: Partial<{ecdhe?: ecdh2.PrivateKey | $.VarRef<ecdh2.PrivateKey> | null, mlkem?: crypto.Decapsulator | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ecdhe: init?.ecdhe ?? (null! as ecdh2.PrivateKey | $.VarRef<ecdh2.PrivateKey> | null),
			mlkem: init?.mlkem ?? (null! as crypto.Decapsulator | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): keySharePrivateKeys {
		return new keySharePrivateKeys(this, true)
	}

	public __goscriptAssign(source: keySharePrivateKeys): void {
		const target = this._fields
		const values = source._fields
		target.ecdhe = values.ecdhe
		target.mlkem = $.assignFieldValue(target.mlkem, values.mlkem, "crypto.Decapsulator")
	}

	static __typeInfo = $.registerStructType(
		"tls.keySharePrivateKeys",
		() => new keySharePrivateKeys(),
		() => [],
		keySharePrivateKeys,
		() => [/* @__PURE__ */ $.structField("ecdhe", /* @__PURE__ */ $.pointerType("ecdh.PrivateKey"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("mlkem", "crypto.Decapsulator", [1], 8, false, { pkgPath: "crypto/tls" })]
	)
}

export class mlkem1024KeyExchange {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mlkem1024KeyExchange {
		return new mlkem1024KeyExchange(this, true)
	}

	public __goscriptAssign(source: mlkem1024KeyExchange): void {
	}

	public async clientSharedSecret(priv: keySharePrivateKeys | $.VarRef<keySharePrivateKeys> | null, serverKeyShare: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const ke: mlkem1024KeyExchange | $.VarRef<mlkem1024KeyExchange> | null = this;
		let __goscriptTuple0: any = await $.pointerValue<Exclude<crypto.Decapsulator, null>>($.pointerValue<keySharePrivateKeys>(priv).mlkem).Decapsulate(serverKeyShare)
		let sharedKey: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return [sharedKey, null]
	}

	public async keyShares(_p0: io.Reader | null): globalThis.Promise<[keySharePrivateKeys | $.VarRef<keySharePrivateKeys> | null, $.Slice<__goscript_common.keyShare>, $.GoError]> {
		const ke: mlkem1024KeyExchange | $.VarRef<mlkem1024KeyExchange> | null = this;
		let __goscriptTuple1: any = await mlkem2.GenerateKey1024()
		let priv: mlkem2.DecapsulationKey1024 | $.VarRef<mlkem2.DecapsulationKey1024> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [null, null, err]
		}
		return [new keySharePrivateKeys({mlkem: $.interfaceValue<crypto.Decapsulator | null>(priv, "*mlkem.DecapsulationKey1024", /* @__PURE__ */ $.pointerType("mlkem.DecapsulationKey1024"))}), $.arrayToSlice<__goscript_common.keyShare>([(() => { const __goscriptLiteralField7 = mlkem2.EncapsulationKey1024.prototype.Bytes.call((priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? ((priv as any) as mlkem2.DecapsulationKey1024).EncapsulationKey() : mlkem2.DecapsulationKey1024.prototype.EncapsulationKey.call(priv))); return new __goscript_common.keyShare({group: 514, data: __goscriptLiteralField7}, true) })()]), null]
	}

	public async serverSharedSecret(_p0: io.Reader | null, clientKeyShare: $.Slice<number>): globalThis.Promise<[$.Slice<number>, __goscript_common.keyShare, $.GoError]> {
		const ke: mlkem1024KeyExchange | $.VarRef<mlkem1024KeyExchange> | null = this;
		let __goscriptTuple2: any = mlkem2.NewEncapsulationKey1024(clientKeyShare)
		let peerKey: mlkem2.EncapsulationKey1024 | $.VarRef<mlkem2.EncapsulationKey1024> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return [null, new __goscript_common.keyShare(undefined, true), err]
		}
		let __goscriptTuple3: any = await (peerKey !== null && (peerKey as any).__isVarRef !== true && (peerKey as any).__goValue === undefined ? ((peerKey as any) as mlkem2.EncapsulationKey1024).Encapsulate() : mlkem2.EncapsulationKey1024.prototype.Encapsulate.call(peerKey))
		let sharedKey: $.Slice<number> = __goscriptTuple3[0]
		let keyShareData: $.Slice<number> = __goscriptTuple3[1]
		return [sharedKey, new __goscript_common.keyShare({group: 514, data: keyShareData}, true), null]
	}

	static __typeInfo = $.registerStructType(
		"tls.mlkem1024KeyExchange",
		() => new mlkem1024KeyExchange(),
		() => [$.methodSignature("clientSharedSecret", [["priv", /* @__PURE__ */ $.pointerType("tls.keySharePrivateKeys")], ["serverKeyShare", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("keyShares", [["_", "io.Reader"]], [/* @__PURE__ */ $.pointerType("tls.keySharePrivateKeys"), /* @__PURE__ */ $.sliceType("tls.keyShare"), "error"], true), $.methodSignature("serverSharedSecret", [["_", "io.Reader"], ["clientKeyShare", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "tls.keyShare", "error"], true)],
		mlkem1024KeyExchange,
		() => []
	)
}

export class ecdhKeyExchange {
	public get id(): __goscript_common.CurveID {
		return this._fields.id
	}

	public set id(value: __goscript_common.CurveID) {
		this._fields.id = value
	}

	public get curve(): ecdh2.Curve | null {
		return this._fields.curve
	}

	public set curve(value: ecdh2.Curve | null) {
		this._fields.curve = value
	}

	public _fields: {
		id: __goscript_common.CurveID
		curve: ecdh2.Curve | null
	}

	constructor(init?: Partial<{id?: __goscript_common.CurveID, curve?: ecdh2.Curve | null}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0 as __goscript_common.CurveID),
			curve: init?.curve ?? (null! as ecdh2.Curve | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ecdhKeyExchange {
		return new ecdhKeyExchange(this, true)
	}

	public __goscriptAssign(source: ecdhKeyExchange): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
		target.curve = $.assignFieldValue(target.curve, values.curve, "ecdh.Curve")
	}

	public clientSharedSecret(priv: keySharePrivateKeys | $.VarRef<keySharePrivateKeys> | null, serverKeyShare: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const ke: ecdhKeyExchange | $.VarRef<ecdhKeyExchange> | null = this;
		let __goscriptTuple4: any = $.pointerValue<Exclude<ecdh2.Curve, null>>($.pointerValue<ecdhKeyExchange>(ke).curve).NewPublicKey(serverKeyShare)
		let peerKey: ecdh2.PublicKey | $.VarRef<ecdh2.PublicKey> | null = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		let __goscriptTuple5: any = ecdh2.PrivateKey.prototype.ECDH.call($.pointerValue<ecdh2.PrivateKey>($.pointerValue<keySharePrivateKeys>(priv).ecdhe), peerKey)
		let sharedKey: $.Slice<number> = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		return [sharedKey, null]
	}

	public async keyShares(rand: io.Reader | null): globalThis.Promise<[keySharePrivateKeys | $.VarRef<keySharePrivateKeys> | null, $.Slice<__goscript_common.keyShare>, $.GoError]> {
		const ke: ecdhKeyExchange | $.VarRef<ecdhKeyExchange> | null = this;
		const ke$: ecdhKeyExchange = ke == null ? $.pointerTarget<ecdhKeyExchange>(ke) : (ke as any).__isVarRef === true ? (ke as any).value : (ke as any).__goValue === undefined ? (ke as any) : $.pointerTarget<ecdhKeyExchange>(ke)
		let __goscriptTuple6: any = await $.pointerValue<Exclude<ecdh2.Curve, null>>((ke$ as ecdhKeyExchange).curve).GenerateKey($.pointerValueOrNil(rand)!)
		let priv: ecdh2.PrivateKey | $.VarRef<ecdh2.PrivateKey> | null = __goscriptTuple6[0]
		let err = __goscriptTuple6[1]
		if (err != null) {
			return [null, null, err]
		}
		return [new keySharePrivateKeys({ecdhe: priv}), $.arrayToSlice<__goscript_common.keyShare>([(() => { const __goscriptLiteralField8 = ecdh2.PublicKey.prototype.Bytes.call($.pointerValue<ecdh2.PublicKey>(ecdh2.PrivateKey.prototype.PublicKey.call($.pointerValue<ecdh2.PrivateKey>(priv)))); return new __goscript_common.keyShare({group: (ke$ as ecdhKeyExchange).id, data: __goscriptLiteralField8}, true) })()]), null]
	}

	public async serverSharedSecret(rand: io.Reader | null, clientKeyShare: $.Slice<number>): globalThis.Promise<[$.Slice<number>, __goscript_common.keyShare, $.GoError]> {
		const ke: ecdhKeyExchange | $.VarRef<ecdhKeyExchange> | null = this;
		const ke$: ecdhKeyExchange = ke == null ? $.pointerTarget<ecdhKeyExchange>(ke) : (ke as any).__isVarRef === true ? (ke as any).value : (ke as any).__goValue === undefined ? (ke as any) : $.pointerTarget<ecdhKeyExchange>(ke)
		let __goscriptTuple7: any = await $.pointerValue<Exclude<ecdh2.Curve, null>>((ke$ as ecdhKeyExchange).curve).GenerateKey($.pointerValueOrNil(rand)!)
		let key: ecdh2.PrivateKey | $.VarRef<ecdh2.PrivateKey> | null = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		if (err != null) {
			return [null, new __goscript_common.keyShare(undefined, true), err]
		}
		let __goscriptTuple8: any = await $.pointerValue<Exclude<ecdh2.Curve, null>>((ke$ as ecdhKeyExchange).curve).NewPublicKey(clientKeyShare)
		let peerKey: ecdh2.PublicKey | $.VarRef<ecdh2.PublicKey> | null = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [null, new __goscript_common.keyShare(undefined, true), err]
		}
		let __goscriptTuple9: any = ecdh2.PrivateKey.prototype.ECDH.call($.pointerValue<ecdh2.PrivateKey>(key), peerKey)
		let sharedKey: $.Slice<number> = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [null, new __goscript_common.keyShare(undefined, true), err]
		}
		return [sharedKey, (() => { const __goscriptLiteralField9 = ecdh2.PublicKey.prototype.Bytes.call($.pointerValue<ecdh2.PublicKey>(ecdh2.PrivateKey.prototype.PublicKey.call($.pointerValue<ecdh2.PrivateKey>(key)))); return new __goscript_common.keyShare({group: (ke$ as ecdhKeyExchange).id, data: __goscriptLiteralField9}, true) })(), null]
	}

	static __typeInfo = $.registerStructType(
		"tls.ecdhKeyExchange",
		() => new ecdhKeyExchange(),
		() => [$.methodSignature("clientSharedSecret", [["priv", /* @__PURE__ */ $.pointerType("tls.keySharePrivateKeys")], ["serverKeyShare", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("keyShares", [["rand", "io.Reader"]], [/* @__PURE__ */ $.pointerType("tls.keySharePrivateKeys"), /* @__PURE__ */ $.sliceType("tls.keyShare"), "error"], true), $.methodSignature("serverSharedSecret", [["rand", "io.Reader"], ["clientKeyShare", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "tls.keyShare", "error"], true)],
		ecdhKeyExchange,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint16", "tls.CurveID"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("curve", "ecdh.Curve", [1], 8, false, { pkgPath: "crypto/tls" })]
	)
}

export class hybridKeyExchange {
	public get id(): __goscript_common.CurveID {
		return this._fields.id
	}

	public set id(value: __goscript_common.CurveID) {
		this._fields.id = value
	}

	public get ecdh(): ecdhKeyExchange {
		return this._fields.ecdh
	}

	public set ecdh(value: ecdhKeyExchange) {
		this._fields.ecdh = value
	}

	public get ecdhElementSize(): number {
		return this._fields.ecdhElementSize
	}

	public set ecdhElementSize(value: number) {
		this._fields.ecdhElementSize = value
	}

	public get mlkemPublicKeySize(): number {
		return this._fields.mlkemPublicKeySize
	}

	public set mlkemPublicKeySize(value: number) {
		this._fields.mlkemPublicKeySize = value
	}

	public get mlkemCiphertextSize(): number {
		return this._fields.mlkemCiphertextSize
	}

	public set mlkemCiphertextSize(value: number) {
		this._fields.mlkemCiphertextSize = value
	}

	public get mlkemGenerateKey(): (() => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null {
		return this._fields.mlkemGenerateKey
	}

	public set mlkemGenerateKey(value: (() => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null) {
		this._fields.mlkemGenerateKey = value
	}

	public get mlkemNewPublicKey(): ((_p0: $.Slice<number>) => [crypto.Encapsulator | null, $.GoError] | globalThis.Promise<[crypto.Encapsulator | null, $.GoError]>) | null {
		return this._fields.mlkemNewPublicKey
	}

	public set mlkemNewPublicKey(value: ((_p0: $.Slice<number>) => [crypto.Encapsulator | null, $.GoError] | globalThis.Promise<[crypto.Encapsulator | null, $.GoError]>) | null) {
		this._fields.mlkemNewPublicKey = value
	}

	public _fields: {
		id: __goscript_common.CurveID
		ecdh: ecdhKeyExchange
		ecdhElementSize: number
		mlkemPublicKeySize: number
		mlkemCiphertextSize: number
		mlkemGenerateKey: (() => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null
		mlkemNewPublicKey: ((_p0: $.Slice<number>) => [crypto.Encapsulator | null, $.GoError] | globalThis.Promise<[crypto.Encapsulator | null, $.GoError]>) | null
	}

	constructor(init?: Partial<{id?: __goscript_common.CurveID, ecdh?: ecdhKeyExchange, ecdhElementSize?: number, mlkemPublicKeySize?: number, mlkemCiphertextSize?: number, mlkemGenerateKey?: (() => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null, mlkemNewPublicKey?: ((_p0: $.Slice<number>) => [crypto.Encapsulator | null, $.GoError] | globalThis.Promise<[crypto.Encapsulator | null, $.GoError]>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0 as __goscript_common.CurveID),
			ecdh: init?.ecdh ? init.ecdh.clone() : new ecdhKeyExchange(undefined, true),
			ecdhElementSize: init?.ecdhElementSize ?? (0 as number),
			mlkemPublicKeySize: init?.mlkemPublicKeySize ?? (0 as number),
			mlkemCiphertextSize: init?.mlkemCiphertextSize ?? (0 as number),
			mlkemGenerateKey: init?.mlkemGenerateKey ?? (null! as (() => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null),
			mlkemNewPublicKey: init?.mlkemNewPublicKey ?? (null! as ((_p0: $.Slice<number>) => [crypto.Encapsulator | null, $.GoError] | globalThis.Promise<[crypto.Encapsulator | null, $.GoError]>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): hybridKeyExchange {
		return new hybridKeyExchange(this, true)
	}

	public __goscriptAssign(source: hybridKeyExchange): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
		$.assignStruct(target.ecdh, values.ecdh)
		target.ecdhElementSize = values.ecdhElementSize
		target.mlkemPublicKeySize = values.mlkemPublicKeySize
		target.mlkemCiphertextSize = values.mlkemCiphertextSize
		target.mlkemGenerateKey = values.mlkemGenerateKey
		target.mlkemNewPublicKey = values.mlkemNewPublicKey
	}

	public async clientSharedSecret(priv: keySharePrivateKeys | $.VarRef<keySharePrivateKeys> | null, serverKeyShare: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const ke: hybridKeyExchange | $.VarRef<hybridKeyExchange> | null = this;
		const ke$: hybridKeyExchange = ke == null ? $.pointerTarget<hybridKeyExchange>(ke) : (ke as any).__isVarRef === true ? (ke as any).value : (ke as any).__goValue === undefined ? (ke as any) : $.pointerTarget<hybridKeyExchange>(ke)
		if ($.sliceLen(serverKeyShare) != ((ke$ as hybridKeyExchange).ecdhElementSize + (ke$ as hybridKeyExchange).mlkemCiphertextSize)) {
			return [null, errors.New("tls: invalid server key share length for hybrid key exchange")]
		}
		let ecdhShareData: $.Slice<number> = null! as $.Slice<number>
		let mlkemShareData: $.Slice<number> = null! as $.Slice<number>
		if ((ke$ as hybridKeyExchange).id == 4588) {
			mlkemShareData = $.goSlice(serverKeyShare, undefined, (ke$ as hybridKeyExchange).mlkemCiphertextSize)
			ecdhShareData = $.goSlice(serverKeyShare, (ke$ as hybridKeyExchange).mlkemCiphertextSize, undefined)
		} else {
			ecdhShareData = $.goSlice(serverKeyShare, undefined, (ke$ as hybridKeyExchange).ecdhElementSize)
			mlkemShareData = $.goSlice(serverKeyShare, (ke$ as hybridKeyExchange).ecdhElementSize, undefined)
		}
		let ecdhSharedSecret: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		await fips140.WithoutEnforcement($.functionValue((): void => {
			let __goscriptTuple10: any = (ke$ as hybridKeyExchange).ecdh.clientSharedSecret(priv, ecdhShareData)
			ecdhSharedSecret = __goscriptTuple10[0]
			err = __goscriptTuple10[1]
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		if (err != null) {
			return [null, err]
		}
		let __goscriptTuple11: any = await $.pointerValue<Exclude<crypto.Decapsulator, null>>($.pointerValue<keySharePrivateKeys>(priv).mlkem).Decapsulate(mlkemShareData)
		let mlkemSharedSecret: $.Slice<number> = __goscriptTuple11[0]
		err = __goscriptTuple11[1]
		if (err != null) {
			return [null, err]
		}
		let sharedKey: $.Slice<number> = null! as $.Slice<number>
		if ((ke$ as hybridKeyExchange).id == 4588) {
			sharedKey = $.appendSlice(mlkemSharedSecret, ecdhSharedSecret, $.byteSliceHint)
		} else {
			sharedKey = $.appendSlice(ecdhSharedSecret, mlkemSharedSecret, $.byteSliceHint)
		}
		return [sharedKey, null]
	}

	public async keyShares(rand: io.Reader | null): globalThis.Promise<[keySharePrivateKeys | $.VarRef<keySharePrivateKeys> | null, $.Slice<__goscript_common.keyShare>, $.GoError]> {
		const ke: hybridKeyExchange | $.VarRef<hybridKeyExchange> | null = this;
		const ke$: hybridKeyExchange = ke == null ? $.pointerTarget<hybridKeyExchange>(ke) : (ke as any).__isVarRef === true ? (ke as any).value : (ke as any).__goValue === undefined ? (ke as any) : $.pointerTarget<hybridKeyExchange>(ke)
		let priv: keySharePrivateKeys | $.VarRef<keySharePrivateKeys> | null = null! as keySharePrivateKeys | $.VarRef<keySharePrivateKeys> | null
		let ecdhShares: $.Slice<__goscript_common.keyShare> = null! as $.Slice<__goscript_common.keyShare>
		let err: $.GoError = null! as $.GoError
		await fips140.WithoutEnforcement($.functionValue(async (): globalThis.Promise<void> => {
			let __goscriptTuple12: any = await (ke$ as hybridKeyExchange).ecdh.keyShares(rand)
			priv = __goscriptTuple12[0]
			ecdhShares = __goscriptTuple12[1]
			err = __goscriptTuple12[2]
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		if (err != null) {
			return [null, null, err]
		}
		let __goscriptTuple13: any = await (ke$ as hybridKeyExchange).mlkemGenerateKey!()
		$.pointerValue<keySharePrivateKeys>(priv).mlkem = __goscriptTuple13[0]
		err = __goscriptTuple13[1]
		if (err != null) {
			return [null, null, err]
		}
		let shareData: $.Slice<number> = null! as $.Slice<number>
		// For X25519MLKEM768, the ML-KEM-768 encapsulation key comes first.
		// For SecP256r1MLKEM768 and SecP384r1MLKEM1024, the ECDH share comes first.
		// See draft-ietf-tls-ecdhe-mlkem-02, Section 4.1.
		if ((ke$ as hybridKeyExchange).id == 4588) {
			shareData = $.appendSlice(((__goscriptAwait = $.pointerValue<Exclude<crypto.Encapsulator, null>>((__goscriptAwait = $.pointerValue<Exclude<crypto.Decapsulator, null>>($.pointerValue<keySharePrivateKeys>(priv).mlkem).Encapsulator(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Bytes(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>), $.arrayIndex(ecdhShares!, 0).data, $.byteSliceHint)
		} else {
			shareData = $.appendSlice($.arrayIndex(ecdhShares!, 0).data, ((__goscriptAwait = $.pointerValue<Exclude<crypto.Encapsulator, null>>((__goscriptAwait = $.pointerValue<Exclude<crypto.Decapsulator, null>>($.pointerValue<keySharePrivateKeys>(priv).mlkem).Encapsulator(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Bytes(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>), $.byteSliceHint)
		}
		return [priv, $.arrayToSlice<__goscript_common.keyShare>([new __goscript_common.keyShare({group: (ke$ as hybridKeyExchange).id, data: shareData}, true), ($.arrayIndex(ecdhShares!, 0)).clone()]), null]
	}

	public async serverSharedSecret(rand: io.Reader | null, clientKeyShare: $.Slice<number>): globalThis.Promise<[$.Slice<number>, __goscript_common.keyShare, $.GoError]> {
		const ke: hybridKeyExchange | $.VarRef<hybridKeyExchange> | null = this;
		const ke$: hybridKeyExchange = ke == null ? $.pointerTarget<hybridKeyExchange>(ke) : (ke as any).__isVarRef === true ? (ke as any).value : (ke as any).__goValue === undefined ? (ke as any) : $.pointerTarget<hybridKeyExchange>(ke)
		if ($.sliceLen(clientKeyShare) != ((ke$ as hybridKeyExchange).ecdhElementSize + (ke$ as hybridKeyExchange).mlkemPublicKeySize)) {
			return [null, new __goscript_common.keyShare(undefined, true), errors.New("tls: invalid client key share length for hybrid key exchange")]
		}
		let ecdhShareData: $.Slice<number> = null! as $.Slice<number>
		let mlkemShareData: $.Slice<number> = null! as $.Slice<number>
		if ((ke$ as hybridKeyExchange).id == 4588) {
			mlkemShareData = $.goSlice(clientKeyShare, undefined, (ke$ as hybridKeyExchange).mlkemPublicKeySize)
			ecdhShareData = $.goSlice(clientKeyShare, (ke$ as hybridKeyExchange).mlkemPublicKeySize, undefined)
		} else {
			ecdhShareData = $.goSlice(clientKeyShare, undefined, (ke$ as hybridKeyExchange).ecdhElementSize)
			mlkemShareData = $.goSlice(clientKeyShare, (ke$ as hybridKeyExchange).ecdhElementSize, undefined)
		}
		let ecdhSharedSecret: $.Slice<number> = null! as $.Slice<number>
		let ks: __goscript_common.keyShare = new __goscript_common.keyShare(undefined, true)
		let err: $.GoError = null! as $.GoError
		await fips140.WithoutEnforcement($.functionValue(async (): globalThis.Promise<void> => {
			let __goscriptTuple14: any = await (ke$ as hybridKeyExchange).ecdh.serverSharedSecret(rand, ecdhShareData)
			ecdhSharedSecret = __goscriptTuple14[0]
			ks = $.assignStruct(ks, __goscriptTuple14[1])
			err = __goscriptTuple14[2]
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		if (err != null) {
			return [null, new __goscript_common.keyShare(undefined, true), err]
		}
		let __goscriptTuple15: any = await (ke$ as hybridKeyExchange).mlkemNewPublicKey!(mlkemShareData)
		let mlkemPeerKey = __goscriptTuple15[0]
		err = __goscriptTuple15[1]
		if (err != null) {
			return [null, new __goscript_common.keyShare(undefined, true), err]
		}
		let __goscriptTuple16: any = await (mlkemPeerKey !== null && (mlkemPeerKey as any).__isVarRef !== true && (mlkemPeerKey as any).__goValue === undefined ? (mlkemPeerKey as Exclude<crypto.Encapsulator, null>) : $.pointerValue<Exclude<crypto.Encapsulator, null>>(mlkemPeerKey)).Encapsulate()
		let mlkemSharedSecret: $.Slice<number> = __goscriptTuple16[0]
		let mlkemKeyShare: $.Slice<number> = __goscriptTuple16[1]
		let sharedKey: $.Slice<number> = null! as $.Slice<number>
		if ((ke$ as hybridKeyExchange).id == 4588) {
			sharedKey = $.appendSlice(mlkemSharedSecret, ecdhSharedSecret, $.byteSliceHint)
			ks.data = $.appendSlice(mlkemKeyShare, ks.data, $.byteSliceHint)
		} else {
			sharedKey = $.appendSlice(ecdhSharedSecret, mlkemSharedSecret, $.byteSliceHint)
			ks.data = $.appendSlice(ks.data, mlkemKeyShare, $.byteSliceHint)
		}
		ks.group = (ke$ as hybridKeyExchange).id
		return [sharedKey, (ks).clone(), null]
	}

	static __typeInfo = $.registerStructType(
		"tls.hybridKeyExchange",
		() => new hybridKeyExchange(),
		() => [$.methodSignature("clientSharedSecret", [["priv", /* @__PURE__ */ $.pointerType("tls.keySharePrivateKeys")], ["serverKeyShare", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("keyShares", [["rand", "io.Reader"]], [/* @__PURE__ */ $.pointerType("tls.keySharePrivateKeys"), /* @__PURE__ */ $.sliceType("tls.keyShare"), "error"], true), $.methodSignature("serverSharedSecret", [["rand", "io.Reader"], ["clientKeyShare", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "tls.keyShare", "error"], true)],
		hybridKeyExchange,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint16", "tls.CurveID"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ecdh", "tls.ecdhKeyExchange", [1], 8, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ecdhElementSize", /* @__PURE__ */ $.basicType("int"), [2], 32, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("mlkemPublicKeySize", /* @__PURE__ */ $.basicType("int"), [3], 40, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("mlkemCiphertextSize", /* @__PURE__ */ $.basicType("int"), [4], 48, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("mlkemGenerateKey", ({ kind: $.TypeKind.Function, params: [], results: ["crypto.Decapsulator", "error"] } as $.FunctionTypeInfo), [5], 56, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("mlkemNewPublicKey", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["crypto.Encapsulator", "error"] } as $.FunctionTypeInfo), [6], 64, false, { pkgPath: "crypto/tls" })]
	)
}

export function keyExchangeForCurveID(id: __goscript_common.CurveID): [keyExchange | null, $.GoError] {
	let mlkemGenerateKey768: (() => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null = $.functionValue(async (): globalThis.Promise<[crypto.Decapsulator | null, $.GoError]> => {
		const __goscriptReturn0 = await mlkem2.GenerateKey768()
		return [$.interfaceValue<crypto.Decapsulator | null>(__goscriptReturn0[0], "*mlkem.DecapsulationKey768", /* @__PURE__ */ $.pointerType("mlkem.DecapsulationKey768")), __goscriptReturn0[1]]
	}, ({ kind: $.TypeKind.Function, params: [], results: ["crypto.Decapsulator", "error"] } as $.FunctionTypeInfo))
	let mlkemGenerateKey1024: (() => [crypto.Decapsulator | null, $.GoError] | globalThis.Promise<[crypto.Decapsulator | null, $.GoError]>) | null = $.functionValue(async (): globalThis.Promise<[crypto.Decapsulator | null, $.GoError]> => {
		const __goscriptReturn1 = await mlkem2.GenerateKey1024()
		return [$.interfaceValue<crypto.Decapsulator | null>(__goscriptReturn1[0], "*mlkem.DecapsulationKey1024", /* @__PURE__ */ $.pointerType("mlkem.DecapsulationKey1024")), __goscriptReturn1[1]]
	}, ({ kind: $.TypeKind.Function, params: [], results: ["crypto.Decapsulator", "error"] } as $.FunctionTypeInfo))
	let mlkemNewPublicKey768: ((b: $.Slice<number>) => [crypto.Encapsulator | null, $.GoError] | globalThis.Promise<[crypto.Encapsulator | null, $.GoError]>) | null = $.functionValue((b: $.Slice<number>): [crypto.Encapsulator | null, $.GoError] => {
		const __goscriptReturn2 = mlkem2.NewEncapsulationKey768(b)
		return [$.interfaceValue<crypto.Encapsulator | null>(__goscriptReturn2[0], "*mlkem.EncapsulationKey768", /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey768")), __goscriptReturn2[1]]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["crypto.Encapsulator", "error"] } as $.FunctionTypeInfo))
	let mlkemNewPublicKey1024: ((b: $.Slice<number>) => [crypto.Encapsulator | null, $.GoError] | globalThis.Promise<[crypto.Encapsulator | null, $.GoError]>) | null = $.functionValue((b: $.Slice<number>): [crypto.Encapsulator | null, $.GoError] => {
		const __goscriptReturn3 = mlkem2.NewEncapsulationKey1024(b)
		return [$.interfaceValue<crypto.Encapsulator | null>(__goscriptReturn3[0], "*mlkem.EncapsulationKey1024", /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey1024")), __goscriptReturn3[1]]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["crypto.Encapsulator", "error"] } as $.FunctionTypeInfo))
	switch (id) {
		case 29:
		{
			return [$.interfaceValue<keyExchange | null>((() => { const __goscriptLiteralField0 = ecdh2.X25519(); return new ecdhKeyExchange({id: id, curve: __goscriptLiteralField0}) })(), "*tls.ecdhKeyExchange", /* @__PURE__ */ $.pointerType("tls.ecdhKeyExchange")), null]
			break
		}
		case 23:
		{
			return [$.interfaceValue<keyExchange | null>((() => { const __goscriptLiteralField1 = ecdh2.P256(); return new ecdhKeyExchange({id: id, curve: __goscriptLiteralField1}) })(), "*tls.ecdhKeyExchange", /* @__PURE__ */ $.pointerType("tls.ecdhKeyExchange")), null]
			break
		}
		case 24:
		{
			return [$.interfaceValue<keyExchange | null>((() => { const __goscriptLiteralField2 = ecdh2.P384(); return new ecdhKeyExchange({id: id, curve: __goscriptLiteralField2}) })(), "*tls.ecdhKeyExchange", /* @__PURE__ */ $.pointerType("tls.ecdhKeyExchange")), null]
			break
		}
		case 25:
		{
			return [$.interfaceValue<keyExchange | null>((() => { const __goscriptLiteralField3 = ecdh2.P521(); return new ecdhKeyExchange({id: id, curve: __goscriptLiteralField3}) })(), "*tls.ecdhKeyExchange", /* @__PURE__ */ $.pointerType("tls.ecdhKeyExchange")), null]
			break
		}
		case 4588:
		{
			return [$.interfaceValue<keyExchange | null>(new hybridKeyExchange({id: id, ecdh: (() => { const __goscriptLiteralField4 = ecdh2.X25519(); return new ecdhKeyExchange({id: 29, curve: __goscriptLiteralField4}, true) })(), ecdhElementSize: 32, mlkemPublicKeySize: 1184, mlkemCiphertextSize: 1088, mlkemGenerateKey: mlkemGenerateKey768, mlkemNewPublicKey: mlkemNewPublicKey768}), "*tls.hybridKeyExchange", /* @__PURE__ */ $.pointerType("tls.hybridKeyExchange")), null]
			break
		}
		case 4587:
		{
			return [$.interfaceValue<keyExchange | null>(new hybridKeyExchange({id: id, ecdh: (() => { const __goscriptLiteralField5 = ecdh2.P256(); return new ecdhKeyExchange({id: 23, curve: __goscriptLiteralField5}, true) })(), ecdhElementSize: 65, mlkemPublicKeySize: 1184, mlkemCiphertextSize: 1088, mlkemGenerateKey: mlkemGenerateKey768, mlkemNewPublicKey: mlkemNewPublicKey768}), "*tls.hybridKeyExchange", /* @__PURE__ */ $.pointerType("tls.hybridKeyExchange")), null]
			break
		}
		case 4589:
		{
			return [$.interfaceValue<keyExchange | null>(new hybridKeyExchange({id: id, ecdh: (() => { const __goscriptLiteralField6 = ecdh2.P384(); return new ecdhKeyExchange({id: 24, curve: __goscriptLiteralField6}, true) })(), ecdhElementSize: 97, mlkemPublicKeySize: 1568, mlkemCiphertextSize: 1568, mlkemGenerateKey: mlkemGenerateKey1024, mlkemNewPublicKey: mlkemNewPublicKey1024}), "*tls.hybridKeyExchange", /* @__PURE__ */ $.pointerType("tls.hybridKeyExchange")), null]
			break
		}
		case 514:
		{
			return [$.interfaceValue<keyExchange | null>(new mlkem1024KeyExchange(), "*tls.mlkem1024KeyExchange", /* @__PURE__ */ $.pointerType("tls.mlkem1024KeyExchange")), null]
			break
		}
		default:
		{
			return [null, errors.New("tls: unsupported key exchange")]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptAwait: any
