// Generated file based on pem_decrypt.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as aes from "@goscript/crypto/aes/index.js"

import * as cipher2 from "@goscript/crypto/cipher/index.js"

import * as des from "@goscript/crypto/des/index.js"

import * as md5 from "@goscript/crypto/md5/index.js"

import * as hex from "@goscript/encoding/hex/index.js"

import * as pem from "@goscript/encoding/pem/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as strings from "@goscript/strings/index.js"

import * as hash2 from "@goscript/hash/index.js"
import "@goscript/crypto/aes/index.js"
import "@goscript/crypto/cipher/index.js"
import "@goscript/crypto/des/index.js"
import "@goscript/crypto/md5/index.js"
import "@goscript/encoding/hex/index.js"
import "@goscript/encoding/pem/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/strings/index.js"
import "@goscript/hash/index.js"

$.registerTypePackagePath("crypto/x509", ["x509.PEMCipher", "x509.rfc1423Algo"])

export type PEMCipher = number

export class rfc1423Algo {
	public get cipher(): PEMCipher {
		return this._fields.cipher
	}

	public set cipher(value: PEMCipher) {
		this._fields.cipher = value
	}

	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get cipherFunc(): ((key: $.Slice<number>) => [cipher2.Block | null, $.GoError] | globalThis.Promise<[cipher2.Block | null, $.GoError]>) | null {
		return this._fields.cipherFunc
	}

	public set cipherFunc(value: ((key: $.Slice<number>) => [cipher2.Block | null, $.GoError] | globalThis.Promise<[cipher2.Block | null, $.GoError]>) | null) {
		this._fields.cipherFunc = value
	}

	public get keySize(): number {
		return this._fields.keySize
	}

	public set keySize(value: number) {
		this._fields.keySize = value
	}

	public get blockSize(): number {
		return this._fields.blockSize
	}

	public set blockSize(value: number) {
		this._fields.blockSize = value
	}

	public _fields: {
		cipher: PEMCipher
		name: string
		cipherFunc: ((key: $.Slice<number>) => [cipher2.Block | null, $.GoError] | globalThis.Promise<[cipher2.Block | null, $.GoError]>) | null
		keySize: number
		blockSize: number
	}

	constructor(init?: Partial<{cipher?: PEMCipher, name?: string, cipherFunc?: ((key: $.Slice<number>) => [cipher2.Block | null, $.GoError] | globalThis.Promise<[cipher2.Block | null, $.GoError]>) | null, keySize?: number, blockSize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			cipher: init?.cipher ?? (0 as PEMCipher),
			name: init?.name ?? ("" as string),
			cipherFunc: init?.cipherFunc ?? (null! as ((key: $.Slice<number>) => [cipher2.Block | null, $.GoError] | globalThis.Promise<[cipher2.Block | null, $.GoError]>) | null),
			keySize: init?.keySize ?? (0 as number),
			blockSize: init?.blockSize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): rfc1423Algo {
		return new rfc1423Algo(this, true)
	}

	public __goscriptAssign(source: rfc1423Algo): void {
		const target = this._fields
		const values = source._fields
		target.cipher = values.cipher
		target.name = values.name
		target.cipherFunc = values.cipherFunc
		target.keySize = values.keySize
		target.blockSize = values.blockSize
	}

	public async deriveKey(password: $.Slice<number>, salt: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const c = this;
		let hash = md5.New()
		let out: $.Slice<number> = $.makeSlice<number>(c.keySize, undefined, "byte")
		let digest: $.Slice<number> = null! as $.Slice<number>

		for (let i = 0; i < $.sliceLen(out); i = i + ($.sliceLen(digest))) {
			void (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Write(digest)
			await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Write(password)
			await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Write(salt)
			digest = await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Sum($.goSlice(digest, undefined, 0))
			$.copy($.goSlice(out, i, undefined), digest)
		}
		return out
	}

	static __typeInfo = $.registerStructType(
		"x509.rfc1423Algo",
		() => new rfc1423Algo(),
		() => [$.methodSignature("deriveKey", [["password", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["salt", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))])],
		rfc1423Algo,
		() => [/* @__PURE__ */ $.structField("cipher", /* @__PURE__ */ $.basicType("int", "x509.PEMCipher"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("cipherFunc", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["cipher.Block", "error"] } as $.FunctionTypeInfo), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("keySize", /* @__PURE__ */ $.basicType("int"), [3], 32, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("blockSize", /* @__PURE__ */ $.basicType("int"), [4], 40, false, { pkgPath: "crypto/x509" })]
	)
}

export const PEMCipherDES: PEMCipher = 1

export const PEMCipher3DES: PEMCipher = 2

export const PEMCipherAES128: PEMCipher = 3

export const PEMCipherAES192: PEMCipher = 4

export const PEMCipherAES256: PEMCipher = 5

export let rfc1423Algos: $.Slice<rfc1423Algo> = $.arrayToSlice<rfc1423Algo>([new rfc1423Algo({cipher: 1, name: "DES-CBC", cipherFunc: des.NewCipher, keySize: 8, blockSize: 8}, true), new rfc1423Algo({cipher: 2, name: "DES-EDE3-CBC", cipherFunc: des.NewTripleDESCipher, keySize: 24, blockSize: 8}, true), new rfc1423Algo({cipher: 3, name: "AES-128-CBC", cipherFunc: aes.NewCipher, keySize: 16, blockSize: 16}, true), new rfc1423Algo({cipher: 4, name: "AES-192-CBC", cipherFunc: aes.NewCipher, keySize: 24, blockSize: 16}, true), new rfc1423Algo({cipher: 5, name: "AES-256-CBC", cipherFunc: aes.NewCipher, keySize: 32, blockSize: 16}, true)])

export function __goscript_set_rfc1423Algos(__goscriptValue: $.Slice<rfc1423Algo>): void {
	rfc1423Algos = __goscriptValue
}

export function IsEncryptedPEMBlock(b: pem.Block | $.VarRef<pem.Block> | null): boolean {
	let [, ok] = $.mapGet<string, string, string>($.pointerValue<pem.Block>(b).Headers, "DEK-Info", "")
	return ok
}

export let IncorrectPasswordError: $.GoError = errors.New("x509: decryption password incorrect")

export function __goscript_set_IncorrectPasswordError(__goscriptValue: $.GoError): void {
	IncorrectPasswordError = __goscriptValue
}

export async function DecryptPEMBlock(b: pem.Block | $.VarRef<pem.Block> | null, password: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	const b$: pem.Block = b == null ? $.pointerTarget<pem.Block>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<pem.Block>(b)
	let [dek, ok] = $.mapGet<string, string, string>((b$ as pem.Block).Headers, "DEK-Info", "")
	if (!ok) {
		return [null, errors.New("x509: no DEK-Info header in block")]
	}

	let __goscriptTuple0: any = strings.Cut(dek, ",")
	let mode = __goscriptTuple0[0]
	let hexIV = __goscriptTuple0[1]
	ok = __goscriptTuple0[2]
	if (!ok) {
		return [null, errors.New("x509: malformed DEK-Info header")]
	}

	let ciph: rfc1423Algo | $.VarRef<rfc1423Algo> | null = cipherByName(mode)
	let ciph$: rfc1423Algo = ciph == null ? $.pointerTarget<rfc1423Algo>(ciph) : (ciph as any).__isVarRef === true ? (ciph as any).value : (ciph as any).__goValue === undefined ? (ciph as any) : $.pointerTarget<rfc1423Algo>(ciph)
	if (ciph == null) {
		return [null, errors.New("x509: unknown encryption mode")]
	}
	let __goscriptTuple1: any = hex.DecodeString(hexIV)
	let iv: $.Slice<number> = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (err != null) {
		return [null, err]
	}
	if ($.sliceLen(iv) != (ciph$ as rfc1423Algo).blockSize) {
		return [null, errors.New("x509: incorrect IV size")]
	}

	// Based on the OpenSSL implementation. The salt is the first 8 bytes
	// of the initialization vector.
	let key: $.Slice<number> = await $.markAsStructValue($.cloneStructValue((ciph$ as rfc1423Algo))).deriveKey(password, $.goSlice(iv, undefined, 8))
	let __goscriptTuple2: any = await (ciph$ as rfc1423Algo).cipherFunc!(key)
	let block = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	if (err != null) {
		return [null, err]
	}

	if (($.sliceLen((b$ as pem.Block).Bytes) % (__goscriptAwait = (block !== null && (block as any).__isVarRef !== true && (block as any).__goValue === undefined ? (block as Exclude<cipher2.Block, null>) : $.pointerValue<Exclude<cipher2.Block, null>>(block)).BlockSize(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) != 0) {
		return [null, errors.New("x509: encrypted PEM data is not a multiple of the block size")]
	}

	let data: $.Slice<number> = $.makeSlice<number>($.sliceLen((b$ as pem.Block).Bytes), undefined, "byte")
	let dec = cipher2.NewCBCDecrypter($.pointerValueOrNil(block)!, iv)
	void (__goscriptAwait = (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? (dec as Exclude<cipher2.BlockMode, null>) : $.pointerValue<Exclude<cipher2.BlockMode, null>>(dec)).CryptBlocks(data, (b$ as pem.Block).Bytes), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	// Blocks are padded using a scheme where the last n bytes of padding are all
	// equal to n. It can pad from 1 to blocksize bytes inclusive. See RFC 1423.
	// For example:
	//	[x y z 2 2]
	//	[x y 7 7 7 7 7 7 7]
	// If we detect a bad padding, we assume it is an invalid password.
	let dlen = $.sliceLen(data)
	if ((dlen == 0) || ((dlen % (ciph$ as rfc1423Algo).blockSize) != 0)) {
		return [null, errors.New("x509: invalid padding")]
	}
	let last = $.int($.arrayIndex(data!, dlen - 1))
	if (dlen < last) {
		return [null, IncorrectPasswordError]
	}
	if ((last == 0) || (last > (ciph$ as rfc1423Algo).blockSize)) {
		return [null, IncorrectPasswordError]
	}
	for (let __goscriptRangeTarget0 = $.goSlice(data, dlen - last, undefined), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let val = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
		if ($.int(val) != last) {
			return [null, IncorrectPasswordError]
		}
	}
	return [$.goSlice(data, undefined, dlen - last), null]
}

export async function EncryptPEMBlock(rand: io.Reader | null, blockType: string, data: $.Slice<number>, password: $.Slice<number>, alg: PEMCipher): globalThis.Promise<[pem.Block | $.VarRef<pem.Block> | null, $.GoError]> {
	let ciph: rfc1423Algo | $.VarRef<rfc1423Algo> | null = cipherByKey(alg)
	let ciph$: rfc1423Algo = ciph == null ? $.pointerTarget<rfc1423Algo>(ciph) : (ciph as any).__isVarRef === true ? (ciph as any).value : (ciph as any).__goValue === undefined ? (ciph as any) : $.pointerTarget<rfc1423Algo>(ciph)
	if (ciph == null) {
		return [null, errors.New("x509: unknown encryption mode")]
	}
	let iv: $.Slice<number> = $.makeSlice<number>((ciph$ as rfc1423Algo).blockSize, undefined, "byte")
	{
		let [, err] = await io.ReadFull($.pointerValueOrNil(rand)!, iv)
		if (err != null) {
			return [null, errors.New($.concatString("x509: cannot generate IV: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
		}
	}
	// The salt is the first 8 bytes of the initialization vector,
	// matching the key derivation in DecryptPEMBlock.
	let key: $.Slice<number> = await $.markAsStructValue($.cloneStructValue((ciph$ as rfc1423Algo))).deriveKey(password, $.goSlice(iv, undefined, 8))
	let [block, err] = await (ciph$ as rfc1423Algo).cipherFunc!(key)
	if (err != null) {
		return [null, err]
	}
	let enc = cipher2.NewCBCEncrypter($.pointerValueOrNil(block)!, iv)
	let pad = (ciph$ as rfc1423Algo).blockSize - ($.sliceLen(data) % (ciph$ as rfc1423Algo).blockSize)
	let encrypted: $.Slice<number> = $.makeSlice<number>($.sliceLen(data), $.sliceLen(data) + pad, "byte")
	// We could save this copy by encrypting all the whole blocks in
	// the data separately, but it doesn't seem worth the additional
	// code.
	$.copy(encrypted, data)
	// See RFC 1423, Section 1.1.
	for (let i = 0; i < pad; i++) {
		encrypted = $.append(encrypted, $.uint($.uint(pad, 8), 8), $.byteSliceHint)
	}
	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<cipher2.BlockMode, null>) : $.pointerValue<Exclude<cipher2.BlockMode, null>>(enc)).CryptBlocks(encrypted, encrypted), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	return [new pem.Block({Type: blockType, Headers: $.makeMap<string, string>([["Proc-Type", "4,ENCRYPTED"], ["DEK-Info", $.concatString(($.concatString((ciph$ as rfc1423Algo).name, ",")), hex.EncodeToString(iv))]]), Bytes: encrypted}), null]
}

export function cipherByName(name: string): rfc1423Algo | $.VarRef<rfc1423Algo> | null {
	for (let __goscriptRangeTarget1 = rfc1423Algos, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let alg: rfc1423Algo | $.VarRef<rfc1423Algo> | null = $.indexRef(rfc1423Algos!, i)
		if ($.stringEqual($.pointerValue<rfc1423Algo>(alg).name, name)) {
			return alg
		}
	}
	return null
}

export function cipherByKey(key: PEMCipher): rfc1423Algo | $.VarRef<rfc1423Algo> | null {
	for (let __goscriptRangeTarget2 = rfc1423Algos, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
		let alg: rfc1423Algo | $.VarRef<rfc1423Algo> | null = $.indexRef(rfc1423Algos!, i)
		if ($.pointerValue<rfc1423Algo>(alg).cipher == key) {
			return alg
		}
	}
	return null
}

var __goscriptAwait: any
