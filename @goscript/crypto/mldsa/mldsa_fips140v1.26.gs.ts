// Generated file based on mldsa_fips140v1.26.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as mldsa from "@goscript/crypto/internal/fips140/mldsa/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_mldsa from "./mldsa.gs.ts"
import "@goscript/crypto/index.js"
import "@goscript/crypto/internal/fips140/mldsa/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "./mldsa.gs.ts"

$.registerTypePackagePath("crypto/mldsa", ["mldsa.PrivateKey", "mldsa.PublicKey"])

export class PrivateKey {
	public get k(): mldsa.PrivateKey {
		return this._fields.k
	}

	public set k(value: mldsa.PrivateKey) {
		this._fields.k = value
	}

	public _fields: {
		k: mldsa.PrivateKey
	}

	constructor(init?: Partial<{k?: mldsa.PrivateKey}>, __goscriptValue?: boolean) {
		this._fields = {
			k: init?.k ? init.k.clone() : new mldsa.PrivateKey(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PrivateKey {
		return new PrivateKey(this, true)
	}

	public __goscriptAssign(source: PrivateKey): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.k, values.k)
	}

	public Bytes(): $.Slice<number> {
		const sk: PrivateKey | $.VarRef<PrivateKey> | null = this;
		return $.pointerValue<PrivateKey>(sk).k.Bytes()
	}

	public Equal(x: crypto.PrivateKey | null): boolean {
		const sk: PrivateKey | $.VarRef<PrivateKey> | null = this;
		let __goscriptTuple0: any = $.typeAssertTuple<PrivateKey | $.VarRef<PrivateKey> | null>(x, /* @__PURE__ */ $.pointerType("mldsa.PrivateKey"))
		let other: PrivateKey | $.VarRef<PrivateKey> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok || (other == null)) {
			return false
		}
		return $.pointerValue<PrivateKey>(sk).k.Equal($.fieldRef($.pointerValue<PrivateKey>(other)._fields, "k"))
	}

	public Public(): crypto.PublicKey | null {
		const sk: PrivateKey | $.VarRef<PrivateKey> | null = this;
		return $.interfaceValue<crypto.PublicKey | null>((sk !== null && (sk as any).__isVarRef !== true && (sk as any).__goValue === undefined ? ((sk as any) as PrivateKey).PublicKey() : PrivateKey.prototype.PublicKey.call(sk)), "*mldsa.PublicKey", /* @__PURE__ */ $.pointerType("mldsa.PublicKey"))
	}

	public PublicKey(): PublicKey | $.VarRef<PublicKey> | null {
		const sk: PrivateKey | $.VarRef<PrivateKey> | null = this;
		// Making a copy severs the pointer relationship between the private and
		// public keys, so that keeping the public key around doesn't keep the
		// private key alive. This costs a copy and an allocation.
		return (() => { const __goscriptLiteralField0 = $.pointerValue<mldsa.PublicKey>($.pointerValue<PrivateKey>(sk).k.PublicKey()); return new PublicKey({p: __goscriptLiteralField0}) })()
	}

	public async Sign(_p0: io.Reader | null, message: $.Slice<number>, opts: crypto.SignerOpts | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const sk: PrivateKey | $.VarRef<PrivateKey> | null = this;
		let signature: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		const sk$: PrivateKey = sk == null ? $.pointerTarget<PrivateKey>(sk) : (sk as any).__isVarRef === true ? (sk as any).value : (sk as any).__goValue === undefined ? (sk as any) : $.pointerTarget<PrivateKey>(sk)
		if ($.structEqual((sk$ as PrivateKey).k, (new mldsa.PrivateKey(undefined, true)))) {
			return [null, errors.New("mldsa: zero private key")]
		}
		if (opts == null) {
			opts = $.interfaceValue<crypto.SignerOpts | null>(new __goscript_mldsa.Options(), "*mldsa.Options", /* @__PURE__ */ $.pointerType("mldsa.Options"))
		}
		switch ((__goscriptAwait = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? (opts as Exclude<crypto.SignerOpts, null>) : $.pointerValue<Exclude<crypto.SignerOpts, null>>(opts)).HashFunc(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case 0:
			{
				let context: string = ""
				let __goscriptShadow0 = opts
				{
					let __goscriptTuple1: any = $.typeAssertTuple<__goscript_mldsa.Options | $.VarRef<__goscript_mldsa.Options> | null>(__goscriptShadow0, /* @__PURE__ */ $.pointerType("mldsa.Options"))
					let __goscriptShadow1: __goscript_mldsa.Options | $.VarRef<__goscript_mldsa.Options> | null = __goscriptTuple1[0]
					let ok = __goscriptTuple1[1]
					if (ok && (__goscriptShadow1 != null)) {
						context = $.pointerValue<__goscript_mldsa.Options>(__goscriptShadow1).Context
					}
				}
				return mldsa.Sign($.fieldRef((sk$ as PrivateKey)._fields, "k"), message, context)
				break
			}
			case crypto.MLDSAMu:
			{
				return mldsa.SignExternalMu($.fieldRef((sk$ as PrivateKey)._fields, "k"), message)
				break
			}
			default:
			{
				return [null, errInvalidSignerOpts]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async SignDeterministic(message: $.Slice<number>, opts: crypto.SignerOpts | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const sk: PrivateKey | $.VarRef<PrivateKey> | null = this;
		let signature: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		const sk$: PrivateKey = sk == null ? $.pointerTarget<PrivateKey>(sk) : (sk as any).__isVarRef === true ? (sk as any).value : (sk as any).__goValue === undefined ? (sk as any) : $.pointerTarget<PrivateKey>(sk)
		if ($.structEqual((sk$ as PrivateKey).k, (new mldsa.PrivateKey(undefined, true)))) {
			return [null, errors.New("mldsa: zero private key")]
		}
		if (opts == null) {
			opts = $.interfaceValue<crypto.SignerOpts | null>(new __goscript_mldsa.Options(), "*mldsa.Options", /* @__PURE__ */ $.pointerType("mldsa.Options"))
		}
		switch ((__goscriptAwait = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? (opts as Exclude<crypto.SignerOpts, null>) : $.pointerValue<Exclude<crypto.SignerOpts, null>>(opts)).HashFunc(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case 0:
			{
				let context: string = ""
				let __goscriptShadow2 = opts
				{
					let __goscriptTuple2: any = $.typeAssertTuple<__goscript_mldsa.Options | $.VarRef<__goscript_mldsa.Options> | null>(__goscriptShadow2, /* @__PURE__ */ $.pointerType("mldsa.Options"))
					let __goscriptShadow3: __goscript_mldsa.Options | $.VarRef<__goscript_mldsa.Options> | null = __goscriptTuple2[0]
					let ok = __goscriptTuple2[1]
					if (ok && (__goscriptShadow3 != null)) {
						context = $.pointerValue<__goscript_mldsa.Options>(__goscriptShadow3).Context
					}
				}
				return mldsa.SignDeterministic($.fieldRef((sk$ as PrivateKey)._fields, "k"), message, context)
				break
			}
			case crypto.MLDSAMu:
			{
				return mldsa.SignExternalMuDeterministic($.fieldRef((sk$ as PrivateKey)._fields, "k"), message)
				break
			}
			default:
			{
				return [null, errInvalidSignerOpts]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"mldsa.PrivateKey",
		() => new PrivateKey(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Equal", [["x", "crypto.PrivateKey"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Public", [], ["crypto.PublicKey"], true), $.methodSignature("PublicKey", [], [/* @__PURE__ */ $.pointerType("mldsa.PublicKey")], true), $.methodSignature("Sign", [["_", "io.Reader"], ["message", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["opts", "crypto.SignerOpts"]], [["signature", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("SignDeterministic", [["message", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["opts", "crypto.SignerOpts"]], [["signature", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true)],
		PrivateKey,
		() => [/* @__PURE__ */ $.structField("k", "mldsa.PrivateKey", [0], 0, false, { pkgPath: "crypto/mldsa" })]
	)
}

export class PublicKey {
	public get p(): mldsa.PublicKey {
		return this._fields.p
	}

	public set p(value: mldsa.PublicKey) {
		this._fields.p = value
	}

	public _fields: {
		p: mldsa.PublicKey
	}

	constructor(init?: Partial<{p?: mldsa.PublicKey}>, __goscriptValue?: boolean) {
		this._fields = {
			p: init?.p ? init.p.clone() : new mldsa.PublicKey(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PublicKey {
		return new PublicKey(this, true)
	}

	public __goscriptAssign(source: PublicKey): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.p, values.p)
	}

	public Bytes(): $.Slice<number> {
		const pk: PublicKey | $.VarRef<PublicKey> | null = this;
		return $.pointerValue<PublicKey>(pk).p.Bytes()
	}

	public Equal(x: crypto.PublicKey | null): boolean {
		const pk: PublicKey | $.VarRef<PublicKey> | null = this;
		let __goscriptTuple6: any = $.typeAssertTuple<PublicKey | $.VarRef<PublicKey> | null>(x, /* @__PURE__ */ $.pointerType("mldsa.PublicKey"))
		let other: PublicKey | $.VarRef<PublicKey> | null = __goscriptTuple6[0]
		let ok = __goscriptTuple6[1]
		if (!ok || (other == null)) {
			return false
		}
		return $.pointerValue<PublicKey>(pk).p.Equal($.fieldRef($.pointerValue<PublicKey>(other)._fields, "p"))
	}

	public Parameters(): __goscript_mldsa.Parameters {
		const pk: PublicKey | $.VarRef<PublicKey> | null = this;
		switch ($.pointerValue<PublicKey>(pk).p.Parameters()) {
			case "ML-DSA-44":
			{
				return __goscript_mldsa.MLDSA44()
				break
			}
			case "ML-DSA-65":
			{
				return __goscript_mldsa.MLDSA65()
				break
			}
			case "ML-DSA-87":
			{
				return __goscript_mldsa.MLDSA87()
				break
			}
			default:
			{
				$.panic("mldsa: invalid parameters in public key")
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"mldsa.PublicKey",
		() => new PublicKey(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Equal", [["x", "crypto.PublicKey"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Parameters", [], ["mldsa.Parameters"], true)],
		PublicKey,
		() => [/* @__PURE__ */ $.structField("p", "mldsa.PublicKey", [0], 0, false, { pkgPath: "crypto/mldsa" })]
	)
}

export let errInvalidParameters: $.GoError = errors.New("mldsa: invalid parameters")

export function __goscript_set_errInvalidParameters(__goscriptValue: $.GoError): void {
	errInvalidParameters = __goscriptValue
}

export async function GenerateKey(params: __goscript_mldsa.Parameters): globalThis.Promise<[PrivateKey | $.VarRef<PrivateKey> | null, $.GoError]> {
	switch (params) {
		case __goscript_mldsa.MLDSA44():
		{
			return [(await (async () => { const __goscriptLiteralField1 = $.pointerValue<mldsa.PrivateKey>(await mldsa.GenerateKey44()); return new PrivateKey({k: __goscriptLiteralField1}) })()), null]
			break
		}
		case __goscript_mldsa.MLDSA65():
		{
			return [(await (async () => { const __goscriptLiteralField2 = $.pointerValue<mldsa.PrivateKey>(await mldsa.GenerateKey65()); return new PrivateKey({k: __goscriptLiteralField2}) })()), null]
			break
		}
		case __goscript_mldsa.MLDSA87():
		{
			return [(await (async () => { const __goscriptLiteralField3 = $.pointerValue<mldsa.PrivateKey>(await mldsa.GenerateKey87()); return new PrivateKey({k: __goscriptLiteralField3}) })()), null]
			break
		}
		default:
		{
			return [null, errInvalidParameters]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function NewPrivateKey(params: __goscript_mldsa.Parameters, seed: $.Slice<number>): globalThis.Promise<[PrivateKey | $.VarRef<PrivateKey> | null, $.GoError]> {
	let err: $.GoError = null! as $.GoError
	let k: mldsa.PrivateKey | $.VarRef<mldsa.PrivateKey> | null = null! as mldsa.PrivateKey | $.VarRef<mldsa.PrivateKey> | null
	switch (params) {
		case __goscript_mldsa.MLDSA44():
		{
			let __goscriptTuple3: any = await mldsa.NewPrivateKey44(seed)
			k = __goscriptTuple3[0]
			err = __goscriptTuple3[1]
			break
		}
		case __goscript_mldsa.MLDSA65():
		{
			let __goscriptTuple4: any = await mldsa.NewPrivateKey65(seed)
			k = __goscriptTuple4[0]
			err = __goscriptTuple4[1]
			break
		}
		case __goscript_mldsa.MLDSA87():
		{
			let __goscriptTuple5: any = await mldsa.NewPrivateKey87(seed)
			k = __goscriptTuple5[0]
			err = __goscriptTuple5[1]
			break
		}
		default:
		{
			return [null, errInvalidParameters]
			break
		}
	}
	if (err != null) {
		return [null, err]
	}
	return [new PrivateKey({k: $.pointerValue<mldsa.PrivateKey>(k)}), null]
}

export let errInvalidSignerOpts: $.GoError = errors.New("mldsa: invalid SignerOpts")

export function __goscript_set_errInvalidSignerOpts(__goscriptValue: $.GoError): void {
	errInvalidSignerOpts = __goscriptValue
}

export function NewPublicKey(params: __goscript_mldsa.Parameters, encoding: $.Slice<number>): [PublicKey | $.VarRef<PublicKey> | null, $.GoError] {
	return newPublicKey(new PublicKey(), params, encoding)
}

export function newPublicKey(pub: PublicKey | $.VarRef<PublicKey> | null, params: __goscript_mldsa.Parameters, encoding: $.Slice<number>): [PublicKey | $.VarRef<PublicKey> | null, $.GoError] {
	let err: $.GoError = null! as $.GoError
	let pk: mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null = null! as mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null
	switch (params) {
		case __goscript_mldsa.MLDSA44():
		{
			let __goscriptTuple7: any = mldsa.NewPublicKey44(encoding)
			pk = __goscriptTuple7[0]
			err = __goscriptTuple7[1]
			break
		}
		case __goscript_mldsa.MLDSA65():
		{
			let __goscriptTuple8: any = mldsa.NewPublicKey65(encoding)
			pk = __goscriptTuple8[0]
			err = __goscriptTuple8[1]
			break
		}
		case __goscript_mldsa.MLDSA87():
		{
			let __goscriptTuple9: any = mldsa.NewPublicKey87(encoding)
			pk = __goscriptTuple9[0]
			err = __goscriptTuple9[1]
			break
		}
		default:
		{
			return [null, errInvalidParameters]
			break
		}
	}
	if (err != null) {
		return [null, err]
	}
	$.assignStruct($.pointerValue<PublicKey>(pub).p, $.pointerValue<mldsa.PublicKey>(pk))
	return [pub, null]
}

export async function Verify(pk: PublicKey | $.VarRef<PublicKey> | null, message: $.Slice<number>, signature: $.Slice<number>, opts: __goscript_mldsa.Options | $.VarRef<__goscript_mldsa.Options> | null): globalThis.Promise<$.GoError> {
	const pk$: PublicKey = pk == null ? $.pointerTarget<PublicKey>(pk) : (pk as any).__isVarRef === true ? (pk as any).value : (pk as any).__goValue === undefined ? (pk as any) : $.pointerTarget<PublicKey>(pk)
	if (pk == null) {
		return errors.New("mldsa: nil public key")
	}
	if ($.structEqual((pk$ as PublicKey).p, (new mldsa.PublicKey(undefined, true)))) {
		return errors.New("mldsa: zero public key")
	}
	if (opts == null) {
		opts = new __goscript_mldsa.Options()
	}
	return mldsa.Verify($.fieldRef((pk$ as PublicKey)._fields, "p"), message, signature, $.pointerValue<__goscript_mldsa.Options>(opts).Context)
}

var __goscriptAwait: any
