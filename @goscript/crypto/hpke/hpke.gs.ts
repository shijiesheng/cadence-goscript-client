// Generated file based on hpke.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as cipher from "@goscript/crypto/cipher/index.js"

import * as errors from "@goscript/errors/index.js"

import * as byteorder from "@goscript/internal/byteorder/index.js"

import * as __goscript_aead from "./aead.gs.ts"

import * as __goscript_kdf from "./kdf.gs.ts"

import * as __goscript_kem from "./kem.gs.ts"
import "@goscript/crypto/cipher/index.js"
import "@goscript/errors/index.js"
import "@goscript/internal/byteorder/index.js"
import "./aead.gs.ts"
import "./kdf.gs.ts"
import "./kem.gs.ts"

$.registerTypePackagePath("crypto/hpke", ["hpke.context", "hpke.Sender", "hpke.Recipient"])

export class context {
	public get suiteID(): $.Slice<number> {
		return this._fields.suiteID
	}

	public set suiteID(value: $.Slice<number>) {
		this._fields.suiteID = value
	}

	public get _export(): ((_p0: string, _p1: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null {
		return this._fields._export
	}

	public set _export(value: ((_p0: string, _p1: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null) {
		this._fields._export = value
	}

	public get aead(): cipher.AEAD | null {
		return this._fields.aead
	}

	public set aead(value: cipher.AEAD | null) {
		this._fields.aead = value
	}

	public get baseNonce(): $.Slice<number> {
		return this._fields.baseNonce
	}

	public set baseNonce(value: $.Slice<number>) {
		this._fields.baseNonce = value
	}

	// seqNum starts at zero and is incremented for each Seal/Open call.
	// 64 bits are enough not to overflow for 500 years at 1ns per operation.
	public get seqNum(): bigint {
		return this._fields.seqNum
	}

	public set seqNum(value: bigint) {
		this._fields.seqNum = value
	}

	public _fields: {
		suiteID: $.Slice<number>
		_export: ((_p0: string, _p1: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null
		aead: cipher.AEAD | null
		baseNonce: $.Slice<number>
		seqNum: bigint
	}

	constructor(init?: Partial<{suiteID?: $.Slice<number>, _export?: ((_p0: string, _p1: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null, aead?: cipher.AEAD | null, baseNonce?: $.Slice<number>, seqNum?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			suiteID: init?.suiteID ?? (null! as $.Slice<number>),
			_export: init?._export ?? (null! as ((_p0: string, _p1: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null),
			aead: init?.aead ?? (null! as cipher.AEAD | null),
			baseNonce: init?.baseNonce ?? (null! as $.Slice<number>),
			seqNum: init?.seqNum ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): context {
		return new context(this, true)
	}

	public __goscriptAssign(source: context): void {
		const target = this._fields
		const values = source._fields
		target.suiteID = values.suiteID
		target._export = values._export
		target.aead = $.assignFieldValue(target.aead, values.aead, "cipher.AEAD")
		target.baseNonce = values.baseNonce
		target.seqNum = values.seqNum
	}

	public async nextNonce(): globalThis.Promise<$.Slice<number>> {
		const ctx: context | $.VarRef<context> | null = this;
		const ctx$: context = ctx == null ? $.pointerTarget<context>(ctx) : (ctx as any).__isVarRef === true ? (ctx as any).value : (ctx as any).__goValue === undefined ? (ctx as any) : $.pointerTarget<context>(ctx)
		let nonce: $.Slice<number> = $.makeSlice<number>((__goscriptAwait = $.pointerValue<Exclude<cipher.AEAD, null>>((ctx$ as context).aead).NonceSize(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined, "byte")
		byteorder.BEPutUint64($.goSlice(nonce, $.sliceLen(nonce) - 8, undefined), (ctx$ as context).seqNum)
		for (let __goscriptRangeTarget0 = (ctx$ as context).baseNonce, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(nonce), i = 0; i < __goscriptRangeWindow0.length; i++) {
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = (__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] ^ ($.arrayIndex((ctx$ as context).baseNonce!, i))
		}
		return nonce
	}

	static __typeInfo = $.registerStructType(
		"hpke.context",
		() => new context(),
		() => [$.methodSignature("nextNonce", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		context,
		() => [/* @__PURE__ */ $.structField("suiteID", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("export", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo), [1], 24, false, { key: "_export", pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("aead", "cipher.AEAD", [2], 32, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("baseNonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 48, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("seqNum", /* @__PURE__ */ $.basicType("uint64"), [4], 72, false, { pkgPath: "crypto/hpke" })]
	)
}

export class Sender {
	public get context(): context | $.VarRef<context> | null {
		return this._fields.context
	}

	public set context(value: context | $.VarRef<context> | null) {
		this._fields.context = value
	}

	public _fields: {
		context: context | $.VarRef<context> | null
	}

	constructor(init?: Partial<{context?: context | $.VarRef<context> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			context: init?.context ?? (null! as context | $.VarRef<context> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Sender {
		return new Sender(this, true)
	}

	public __goscriptAssign(source: Sender): void {
		const target = this._fields
		const values = source._fields
		target.context = values.context
	}

	public async Export(exporterContext: string, length: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const s: Sender | $.VarRef<Sender> | null = this;
		if ((length < 0) || (length > 0xFFFF)) {
			return [null, errors.New("invalid length")]
		}
		return $.pointerValue<context>($.pointerValue<Sender>(s).context)._export!(exporterContext, $.uint(length, 16))
	}

	public async Seal(aad: $.Slice<number>, plaintext: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		let s: Sender | $.VarRef<Sender> | null = this;
		const s$: Sender = s == null ? $.pointerTarget<Sender>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Sender>(s)
		if ($.pointerValue<context>((s$ as Sender).context).aead == null) {
			return [null, errors.New("export-only instantiation")]
		}
		let ciphertext: $.Slice<number> = await $.pointerValue<Exclude<cipher.AEAD, null>>($.pointerValue<context>((s$ as Sender).context).aead).Seal(null, await $.pointerValue<context>((s$ as Sender).context).nextNonce(), plaintext, aad)
		$.pointerValue<context>((s$ as Sender).context).seqNum++
		return [ciphertext, null]
	}

	public async nextNonce(): globalThis.Promise<any> {
		return await $.pointerValue<context>(this.context).nextNonce()
	}

	static __typeInfo = $.registerStructType(
		"hpke.Sender",
		() => new Sender(),
		() => [$.methodSignature("Export", [["exporterContext", /* @__PURE__ */ $.basicType("string")], ["length", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Seal", [["aad", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["plaintext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("nextNonce", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))])],
		Sender,
		() => [/* @__PURE__ */ $.structField("context", /* @__PURE__ */ $.pointerType("hpke.context"), [0], 0, false, { pkgPath: "crypto/hpke", anonymous: true })]
	)
}

export class Recipient {
	public get context(): context | $.VarRef<context> | null {
		return this._fields.context
	}

	public set context(value: context | $.VarRef<context> | null) {
		this._fields.context = value
	}

	public _fields: {
		context: context | $.VarRef<context> | null
	}

	constructor(init?: Partial<{context?: context | $.VarRef<context> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			context: init?.context ?? (null! as context | $.VarRef<context> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Recipient {
		return new Recipient(this, true)
	}

	public __goscriptAssign(source: Recipient): void {
		const target = this._fields
		const values = source._fields
		target.context = values.context
	}

	public async Export(exporterContext: string, length: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const r: Recipient | $.VarRef<Recipient> | null = this;
		if ((length < 0) || (length > 0xFFFF)) {
			return [null, errors.New("invalid length")]
		}
		return $.pointerValue<context>($.pointerValue<Recipient>(r).context)._export!(exporterContext, $.uint(length, 16))
	}

	public async Open(aad: $.Slice<number>, ciphertext: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		let r: Recipient | $.VarRef<Recipient> | null = this;
		const r$: Recipient = r == null ? $.pointerTarget<Recipient>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Recipient>(r)
		if ($.pointerValue<context>((r$ as Recipient).context).aead == null) {
			return [null, errors.New("export-only instantiation")]
		}
		let __goscriptTuple0: any = await $.pointerValue<Exclude<cipher.AEAD, null>>($.pointerValue<context>((r$ as Recipient).context).aead).Open(null, await $.pointerValue<context>((r$ as Recipient).context).nextNonce(), ciphertext, aad)
		let plaintext: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		$.pointerValue<context>((r$ as Recipient).context).seqNum++
		return [plaintext, null]
	}

	public async nextNonce(): globalThis.Promise<any> {
		return await $.pointerValue<context>(this.context).nextNonce()
	}

	static __typeInfo = $.registerStructType(
		"hpke.Recipient",
		() => new Recipient(),
		() => [$.methodSignature("Export", [["exporterContext", /* @__PURE__ */ $.basicType("string")], ["length", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Open", [["aad", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("nextNonce", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))])],
		Recipient,
		() => [/* @__PURE__ */ $.structField("context", /* @__PURE__ */ $.pointerType("hpke.context"), [0], 0, false, { pkgPath: "crypto/hpke", anonymous: true })]
	)
}

export async function newContext(sharedSecret: $.Slice<number>, kemID: number, kdf: __goscript_kdf.KDF | null, aead: __goscript_aead.AEAD | null, info: $.Slice<number>): globalThis.Promise<[context | $.VarRef<context> | null, $.GoError]> {
	let sid: $.Slice<number> = suiteID(kemID, (__goscriptAwait = (kdf !== null && (kdf as any).__isVarRef !== true && (kdf as any).__goValue === undefined ? (kdf as Exclude<__goscript_kdf.KDF, null>) : $.pointerValue<Exclude<__goscript_kdf.KDF, null>>(kdf)).ID(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (aead !== null && (aead as any).__isVarRef !== true && (aead as any).__goValue === undefined ? (aead as Exclude<__goscript_aead.AEAD, null>) : $.pointerValue<Exclude<__goscript_aead.AEAD, null>>(aead)).ID(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))

	if ((__goscriptAwait = (kdf !== null && (kdf as any).__isVarRef !== true && (kdf as any).__goValue === undefined ? (kdf as Exclude<__goscript_kdf.KDF, null>) : $.pointerValue<Exclude<__goscript_kdf.KDF, null>>(kdf)).oneStage(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		let secrets: $.Slice<number> = $.makeSlice<number>(0, (2 + 2) + $.sliceLen(sharedSecret), "byte")
		secrets = byteorder.BEAppendUint16(secrets, 0)
		secrets = byteorder.BEAppendUint16(secrets, $.uint($.sliceLen(sharedSecret), 16))
		secrets = $.appendSlice(secrets, sharedSecret, $.byteSliceHint)

		let ksContext: $.Slice<number> = $.makeSlice<number>(0, ((1 + 2) + 2) + $.sliceLen(info), "byte")
		ksContext = $.append(ksContext, $.uint(0, 8), $.byteSliceHint)
		ksContext = byteorder.BEAppendUint16(ksContext, 0)
		ksContext = byteorder.BEAppendUint16(ksContext, $.uint($.sliceLen(info), 16))
		ksContext = $.appendSlice(ksContext, info, $.byteSliceHint)

		let __goscriptTuple1: any = await (kdf !== null && (kdf as any).__isVarRef !== true && (kdf as any).__goValue === undefined ? (kdf as Exclude<__goscript_kdf.KDF, null>) : $.pointerValue<Exclude<__goscript_kdf.KDF, null>>(kdf)).labeledDerive(sid, secrets, "secret", ksContext, $.uint(((__goscriptAwait = (aead !== null && (aead as any).__isVarRef !== true && (aead as any).__goValue === undefined ? (aead as Exclude<__goscript_aead.AEAD, null>) : $.pointerValue<Exclude<__goscript_aead.AEAD, null>>(aead)).keySize(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) + (__goscriptAwait = (aead !== null && (aead as any).__isVarRef !== true && (aead as any).__goValue === undefined ? (aead as Exclude<__goscript_aead.AEAD, null>) : $.pointerValue<Exclude<__goscript_aead.AEAD, null>>(aead)).nonceSize(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) + (__goscriptAwait = (kdf !== null && (kdf as any).__isVarRef !== true && (kdf as any).__goValue === undefined ? (kdf as Exclude<__goscript_kdf.KDF, null>) : $.pointerValue<Exclude<__goscript_kdf.KDF, null>>(kdf)).size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 16))
		let secret: $.Slice<number> = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		let key: $.Slice<number> = $.goSlice(secret, undefined, (__goscriptAwait = (aead !== null && (aead as any).__isVarRef !== true && (aead as any).__goValue === undefined ? (aead as Exclude<__goscript_aead.AEAD, null>) : $.pointerValue<Exclude<__goscript_aead.AEAD, null>>(aead)).keySize(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		let baseNonce: $.Slice<number> = $.goSlice(secret, (__goscriptAwait = (aead !== null && (aead as any).__isVarRef !== true && (aead as any).__goValue === undefined ? (aead as Exclude<__goscript_aead.AEAD, null>) : $.pointerValue<Exclude<__goscript_aead.AEAD, null>>(aead)).keySize(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (aead !== null && (aead as any).__isVarRef !== true && (aead as any).__goValue === undefined ? (aead as Exclude<__goscript_aead.AEAD, null>) : $.pointerValue<Exclude<__goscript_aead.AEAD, null>>(aead)).keySize(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) + (__goscriptAwait = (aead !== null && (aead as any).__isVarRef !== true && (aead as any).__goValue === undefined ? (aead as Exclude<__goscript_aead.AEAD, null>) : $.pointerValue<Exclude<__goscript_aead.AEAD, null>>(aead)).nonceSize(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		let expSecret: $.Slice<number> = $.goSlice(secret, (__goscriptAwait = (aead !== null && (aead as any).__isVarRef !== true && (aead as any).__goValue === undefined ? (aead as Exclude<__goscript_aead.AEAD, null>) : $.pointerValue<Exclude<__goscript_aead.AEAD, null>>(aead)).keySize(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) + (__goscriptAwait = (aead !== null && (aead as any).__isVarRef !== true && (aead as any).__goValue === undefined ? (aead as Exclude<__goscript_aead.AEAD, null>) : $.pointerValue<Exclude<__goscript_aead.AEAD, null>>(aead)).nonceSize(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined)

		let __goscriptTuple2: any = await (aead !== null && (aead as any).__isVarRef !== true && (aead as any).__goValue === undefined ? (aead as Exclude<__goscript_aead.AEAD, null>) : $.pointerValue<Exclude<__goscript_aead.AEAD, null>>(aead)).aead(key)
		let a = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		let _export: ((exporterContext: string, length: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null = $.functionValue(async (exporterContext: string, length: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
			return (kdf !== null && (kdf as any).__isVarRef !== true && (kdf as any).__goValue === undefined ? (kdf as Exclude<__goscript_kdf.KDF, null>) : $.pointerValue<Exclude<__goscript_kdf.KDF, null>>(kdf)).labeledDerive(sid, expSecret, "sec", $.stringToBytes(exporterContext), length)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))

		return [new context({aead: a, suiteID: sid, _export: _export, baseNonce: baseNonce}), null]
	}

	let __goscriptTuple3: any = await (kdf !== null && (kdf as any).__isVarRef !== true && (kdf as any).__goValue === undefined ? (kdf as Exclude<__goscript_kdf.KDF, null>) : $.pointerValue<Exclude<__goscript_kdf.KDF, null>>(kdf)).labeledExtract(sid, null, "psk_id_hash", null)
	let pskIDHash: $.Slice<number> = __goscriptTuple3[0]
	let err = __goscriptTuple3[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple4: any = await (kdf !== null && (kdf as any).__isVarRef !== true && (kdf as any).__goValue === undefined ? (kdf as Exclude<__goscript_kdf.KDF, null>) : $.pointerValue<Exclude<__goscript_kdf.KDF, null>>(kdf)).labeledExtract(sid, null, "info_hash", info)
	let infoHash: $.Slice<number> = __goscriptTuple4[0]
	err = __goscriptTuple4[1]
	if (err != null) {
		return [null, err]
	}
	let ksContext: $.Slice<number> = $.appendSlice(new Uint8Array([0]) as $.Slice<number>, pskIDHash, $.byteSliceHint)
	ksContext = $.appendSlice(ksContext, infoHash, $.byteSliceHint)

	let __goscriptTuple5: any = await (kdf !== null && (kdf as any).__isVarRef !== true && (kdf as any).__goValue === undefined ? (kdf as Exclude<__goscript_kdf.KDF, null>) : $.pointerValue<Exclude<__goscript_kdf.KDF, null>>(kdf)).labeledExtract(sid, sharedSecret, "secret", null)
	let secret: $.Slice<number> = __goscriptTuple5[0]
	err = __goscriptTuple5[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple6: any = await (kdf !== null && (kdf as any).__isVarRef !== true && (kdf as any).__goValue === undefined ? (kdf as Exclude<__goscript_kdf.KDF, null>) : $.pointerValue<Exclude<__goscript_kdf.KDF, null>>(kdf)).labeledExpand(sid, secret, "key", ksContext, $.uint((__goscriptAwait = (aead !== null && (aead as any).__isVarRef !== true && (aead as any).__goValue === undefined ? (aead as Exclude<__goscript_aead.AEAD, null>) : $.pointerValue<Exclude<__goscript_aead.AEAD, null>>(aead)).keySize(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 16))
	let key: $.Slice<number> = __goscriptTuple6[0]
	err = __goscriptTuple6[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple7: any = await (aead !== null && (aead as any).__isVarRef !== true && (aead as any).__goValue === undefined ? (aead as Exclude<__goscript_aead.AEAD, null>) : $.pointerValue<Exclude<__goscript_aead.AEAD, null>>(aead)).aead(key)
	let a = __goscriptTuple7[0]
	err = __goscriptTuple7[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple8: any = await (kdf !== null && (kdf as any).__isVarRef !== true && (kdf as any).__goValue === undefined ? (kdf as Exclude<__goscript_kdf.KDF, null>) : $.pointerValue<Exclude<__goscript_kdf.KDF, null>>(kdf)).labeledExpand(sid, secret, "base_nonce", ksContext, $.uint((__goscriptAwait = (aead !== null && (aead as any).__isVarRef !== true && (aead as any).__goValue === undefined ? (aead as Exclude<__goscript_aead.AEAD, null>) : $.pointerValue<Exclude<__goscript_aead.AEAD, null>>(aead)).nonceSize(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 16))
	let baseNonce: $.Slice<number> = __goscriptTuple8[0]
	err = __goscriptTuple8[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple9: any = await (kdf !== null && (kdf as any).__isVarRef !== true && (kdf as any).__goValue === undefined ? (kdf as Exclude<__goscript_kdf.KDF, null>) : $.pointerValue<Exclude<__goscript_kdf.KDF, null>>(kdf)).labeledExpand(sid, secret, "exp", ksContext, $.uint((__goscriptAwait = (kdf !== null && (kdf as any).__isVarRef !== true && (kdf as any).__goValue === undefined ? (kdf as Exclude<__goscript_kdf.KDF, null>) : $.pointerValue<Exclude<__goscript_kdf.KDF, null>>(kdf)).size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 16))
	let expSecret: $.Slice<number> = __goscriptTuple9[0]
	err = __goscriptTuple9[1]
	if (err != null) {
		return [null, err]
	}
	let _export: ((exporterContext: string, length: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null = $.functionValue(async (exporterContext: string, length: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		return (kdf !== null && (kdf as any).__isVarRef !== true && (kdf as any).__goValue === undefined ? (kdf as Exclude<__goscript_kdf.KDF, null>) : $.pointerValue<Exclude<__goscript_kdf.KDF, null>>(kdf)).labeledExpand(sid, expSecret, "sec", $.stringToBytes(exporterContext), length)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))

	return [new context({aead: a, suiteID: sid, _export: _export, baseNonce: baseNonce}), null]
}

export async function NewSender(pk: __goscript_kem.PublicKey | null, kdf: __goscript_kdf.KDF | null, aead: __goscript_aead.AEAD | null, info: $.Slice<number>): globalThis.Promise<[$.Slice<number>, Sender | $.VarRef<Sender> | null, $.GoError]> {
	let enc: $.Slice<number> = null! as $.Slice<number>
	let s: Sender | $.VarRef<Sender> | null = null! as Sender | $.VarRef<Sender> | null
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple10: any = await (pk !== null && (pk as any).__isVarRef !== true && (pk as any).__goValue === undefined ? (pk as Exclude<__goscript_kem.PublicKey, null>) : $.pointerValue<Exclude<__goscript_kem.PublicKey, null>>(pk)).encap()
	let sharedSecret: $.Slice<number> = __goscriptTuple10[0]
	let encapsulatedKey: $.Slice<number> = __goscriptTuple10[1]
	err = __goscriptTuple10[2]
	if (err != null) {
		return [null, null, err]
	}
	let __goscriptTuple11: any = await newContext(sharedSecret, (__goscriptAwait = $.pointerValue<Exclude<__goscript_kem.KEM, null>>((__goscriptAwait = (pk !== null && (pk as any).__isVarRef !== true && (pk as any).__goValue === undefined ? (pk as Exclude<__goscript_kem.PublicKey, null>) : $.pointerValue<Exclude<__goscript_kem.PublicKey, null>>(pk)).KEM(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ID(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), kdf, aead, info)
	let __goscriptShadow0: context | $.VarRef<context> | null = __goscriptTuple11[0]
	err = __goscriptTuple11[1]
	if (err != null) {
		return [null, null, err]
	}
	return [encapsulatedKey, new Sender({context: __goscriptShadow0}), null]
}

export async function NewRecipient(enc: $.Slice<number>, k: __goscript_kem.PrivateKey | null, kdf: __goscript_kdf.KDF | null, aead: __goscript_aead.AEAD | null, info: $.Slice<number>): globalThis.Promise<[Recipient | $.VarRef<Recipient> | null, $.GoError]> {
	let __goscriptTuple12: any = await (k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? (k as Exclude<__goscript_kem.PrivateKey, null>) : $.pointerValue<Exclude<__goscript_kem.PrivateKey, null>>(k)).decap(enc)
	let sharedSecret: $.Slice<number> = __goscriptTuple12[0]
	let err = __goscriptTuple12[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple13: any = await newContext(sharedSecret, (__goscriptAwait = $.pointerValue<Exclude<__goscript_kem.KEM, null>>((__goscriptAwait = (k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? (k as Exclude<__goscript_kem.PrivateKey, null>) : $.pointerValue<Exclude<__goscript_kem.PrivateKey, null>>(k)).KEM(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ID(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), kdf, aead, info)
	let __goscriptShadow1: context | $.VarRef<context> | null = __goscriptTuple13[0]
	err = __goscriptTuple13[1]
	if (err != null) {
		return [null, err]
	}
	return [new Recipient({context: __goscriptShadow1}), null]
}

export async function Seal(pk: __goscript_kem.PublicKey | null, kdf: __goscript_kdf.KDF | null, aead: __goscript_aead.AEAD | null, info: $.Slice<number>, plaintext: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let __goscriptTuple14: any = await NewSender(pk, kdf, aead, info)
	let enc: $.Slice<number> = __goscriptTuple14[0]
	let s: Sender | $.VarRef<Sender> | null = __goscriptTuple14[1]
	let err = __goscriptTuple14[2]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple15: any = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Sender).Seal(null, plaintext) : Sender.prototype.Seal.call(s, null, plaintext))
	let ct: $.Slice<number> = __goscriptTuple15[0]
	err = __goscriptTuple15[1]
	if (err != null) {
		return [null, err]
	}
	return [$.appendSlice(enc, ct, $.byteSliceHint), null]
}

export async function Open(k: __goscript_kem.PrivateKey | null, kdf: __goscript_kdf.KDF | null, aead: __goscript_aead.AEAD | null, info: $.Slice<number>, ciphertext: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let encSize = (__goscriptAwait = $.pointerValue<Exclude<__goscript_kem.KEM, null>>((__goscriptAwait = (k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? (k as Exclude<__goscript_kem.PrivateKey, null>) : $.pointerValue<Exclude<__goscript_kem.PrivateKey, null>>(k)).KEM(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).encSize(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if ($.sliceLen(ciphertext) < encSize) {
		return [null, errors.New("ciphertext too short")]
	}
	let enc: $.Slice<number> = $.goSlice(ciphertext, undefined, encSize)
	ciphertext = $.goSlice(ciphertext, encSize, undefined)
	let __goscriptTuple16: any = await NewRecipient(enc, k, kdf, aead, info)
	let r: Recipient | $.VarRef<Recipient> | null = __goscriptTuple16[0]
	let err = __goscriptTuple16[1]
	if (err != null) {
		return [null, err]
	}
	return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Recipient).Open(null, ciphertext) : Recipient.prototype.Open.call(r, null, ciphertext))
}

export function suiteID(kemID: number, kdfID: number, aeadID: number): $.Slice<number> {
	let __goscriptShadow2: $.Slice<number> = $.makeSlice<number>(0, ((4 + 2) + 2) + 2, "byte")
	__goscriptShadow2 = $.appendSlice(__goscriptShadow2, new Uint8Array([72, 80, 75, 69]), $.byteSliceHint)
	__goscriptShadow2 = byteorder.BEAppendUint16(__goscriptShadow2, kemID)
	__goscriptShadow2 = byteorder.BEAppendUint16(__goscriptShadow2, kdfID)
	__goscriptShadow2 = byteorder.BEAppendUint16(__goscriptShadow2, aeadID)
	return __goscriptShadow2
}

var __goscriptAwait: any
