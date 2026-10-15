// Generated file based on cipher.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as byteorder from "@goscript/internal/byteorder/index.js"

import * as sync from "@goscript/sync/index.js"

import * as cipher from "@goscript/crypto/cipher/index.js"

import * as alias from "@goscript/crypto/internal/fips140/alias/index.js"

import * as fips140only from "@goscript/crypto/internal/fips140only/index.js"

import * as errors from "@goscript/errors/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript__const from "./const.gs.ts"

import * as __goscript_block from "./block.gs.ts"
import "@goscript/internal/byteorder/index.js"
import "@goscript/sync/index.js"
import "@goscript/crypto/cipher/index.js"
import "@goscript/crypto/internal/fips140/alias/index.js"
import "@goscript/crypto/internal/fips140only/index.js"
import "@goscript/errors/index.js"
import "@goscript/strconv/index.js"
import "./const.gs.ts"
import "./block.gs.ts"

$.registerTypePackagePath("crypto/des", ["des.KeySizeError", "des.desCipher", "des.tripleDESCipher"])

export type KeySizeError = number

$.registerNamedValueType(
	"des.KeySizeError",
	{Error: (receiver: any, ...args: any[]) => (KeySizeError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*des.KeySizeError",
	{Error: (receiver: any, ...args: any[]) => (KeySizeError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class desCipher {
	public get subkeys(): bigint[] {
		return this._fields.subkeys
	}

	public set subkeys(value: bigint[]) {
		this._fields.subkeys = value
	}

	public _fields: {
		subkeys: bigint[]
	}

	constructor(init?: Partial<{subkeys?: bigint[]}>, __goscriptValue?: boolean) {
		this._fields = {
			subkeys: init?.subkeys !== undefined ? $.cloneArrayValue(init.subkeys, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 16)) : $.arrayValue(globalThis.Array.from({ length: 16 }, () => 0n))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): desCipher {
		return new desCipher(this, true)
	}

	public __goscriptAssign(source: desCipher): void {
		const target = this._fields
		const values = source._fields
		target.subkeys = $.assignFieldValue(target.subkeys, values.subkeys, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 16))
	}

	public BlockSize(): number {
		const c: desCipher | $.VarRef<desCipher> | null = this;
		return 8
	}

	public Decrypt(dst: $.Slice<number>, src: $.Slice<number>): void {
		const c: desCipher | $.VarRef<desCipher> | null = this;
		if ($.sliceLen(src) < 8) {
			$.panic("crypto/des: input not full block")
		}
		if ($.sliceLen(dst) < 8) {
			$.panic("crypto/des: output not full block")
		}
		if (alias.InexactOverlap($.goSlice(dst, undefined, 8), $.goSlice(src, undefined, 8))) {
			$.panic("crypto/des: invalid buffer overlap")
		}
		__goscript_block.cryptBlock($.goSlice($.pointerValue<desCipher>(c).subkeys, undefined, undefined), dst, src, true)
	}

	public Encrypt(dst: $.Slice<number>, src: $.Slice<number>): void {
		const c: desCipher | $.VarRef<desCipher> | null = this;
		if ($.sliceLen(src) < 8) {
			$.panic("crypto/des: input not full block")
		}
		if ($.sliceLen(dst) < 8) {
			$.panic("crypto/des: output not full block")
		}
		if (alias.InexactOverlap($.goSlice(dst, undefined, 8), $.goSlice(src, undefined, 8))) {
			$.panic("crypto/des: invalid buffer overlap")
		}
		__goscript_block.cryptBlock($.goSlice($.pointerValue<desCipher>(c).subkeys, undefined, undefined), dst, src, false)
	}

	public async generateSubkeys(keyBytes: $.Slice<number>): globalThis.Promise<void> {
		let c: desCipher | $.VarRef<desCipher> | null = this;
		await $.pointerValue<sync.Once>(__goscript_block.feistelBoxOnce).Do(__goscript_block.initFeistelBox)

		let key = byteorder.BEUint64(keyBytes)
		let permutedKey = __goscript_block.permuteBlock(key, $.goSlice(__goscript__const.permutedChoice1, undefined, undefined))

		let leftRotations: $.Slice<number> = __goscript_block.ksRotate($.uint($.uint64Shr(permutedKey, 28n), 32))
		let rightRotations: $.Slice<number> = __goscript_block.ksRotate($.uint($.uintShr($.uint($.uint64Shl(permutedKey, 4n), 32), 4, 32), 32))

		for (let i = 0; i < 16; i++) {

			let pc2Input = $.uint64Or(($.uint64Shl($.uint64($.arrayIndex(leftRotations!, i)), 28n)), $.uint64($.arrayIndex(rightRotations!, i)))

			$.pointerValue<desCipher>(c).subkeys[i] = __goscript_block.unpack(__goscript_block.permuteBlock(pc2Input, $.goSlice(__goscript__const.permutedChoice2, undefined, undefined)))
		}
	}

	static __typeInfo = $.registerStructType(
		"des.desCipher",
		() => new desCipher(),
		() => [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Decrypt", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("Encrypt", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("generateSubkeys", [["keyBytes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true)],
		desCipher,
		() => [/* @__PURE__ */ $.structField("subkeys", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 16), [0], 0, false, { pkgPath: "crypto/des" })]
	)
}

export class tripleDESCipher {
	public get cipher1(): desCipher {
		return this._fields.cipher1
	}

	public set cipher1(value: desCipher) {
		this._fields.cipher1 = value
	}

	public get cipher2(): desCipher {
		return this._fields.cipher2
	}

	public set cipher2(value: desCipher) {
		this._fields.cipher2 = value
	}

	public get cipher3(): desCipher {
		return this._fields.cipher3
	}

	public set cipher3(value: desCipher) {
		this._fields.cipher3 = value
	}

	public _fields: {
		cipher1: desCipher
		cipher2: desCipher
		cipher3: desCipher
	}

	constructor(init?: Partial<{cipher1?: desCipher, cipher2?: desCipher, cipher3?: desCipher}>, __goscriptValue?: boolean) {
		this._fields = {
			cipher1: init?.cipher1 ? init.cipher1.clone() : new desCipher(undefined, true),
			cipher2: init?.cipher2 ? init.cipher2.clone() : new desCipher(undefined, true),
			cipher3: init?.cipher3 ? init.cipher3.clone() : new desCipher(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tripleDESCipher {
		return new tripleDESCipher(this, true)
	}

	public __goscriptAssign(source: tripleDESCipher): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.cipher1, values.cipher1)
		$.assignStruct(target.cipher2, values.cipher2)
		$.assignStruct(target.cipher3, values.cipher3)
	}

	public BlockSize(): number {
		const c: tripleDESCipher | $.VarRef<tripleDESCipher> | null = this;
		return 8
	}

	public Decrypt(dst: $.Slice<number>, src: $.Slice<number>): void {
		const c: tripleDESCipher | $.VarRef<tripleDESCipher> | null = this;
		const c$: tripleDESCipher = c == null ? $.pointerTarget<tripleDESCipher>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<tripleDESCipher>(c)
		if ($.sliceLen(src) < 8) {
			$.panic("crypto/des: input not full block")
		}
		if ($.sliceLen(dst) < 8) {
			$.panic("crypto/des: output not full block")
		}
		if (alias.InexactOverlap($.goSlice(dst, undefined, 8), $.goSlice(src, undefined, 8))) {
			$.panic("crypto/des: invalid buffer overlap")
		}

		let b = byteorder.BEUint64(src)
		b = __goscript_block.permuteInitialBlock(b)
		let left = $.uint($.uint64Shr(b, 32n), 32)
		let right = $.uint(b, 32)

		left = $.uint((((left << 1) >>> 0)) | ($.uintShr(left, 31, 32)), 32)
		right = $.uint((((right << 1) >>> 0)) | ($.uintShr(right, 31, 32)), 32)

		for (let i = 0; i < 8; i++) {
			let __goscriptTuple0: any = __goscript_block.feistel(left, right, $.arrayIndex((c$ as tripleDESCipher).cipher3.subkeys, 15 - (2 * i)), $.arrayIndex((c$ as tripleDESCipher).cipher3.subkeys, 15 - ((2 * i) + 1)))
			left = __goscriptTuple0[0]
			right = __goscriptTuple0[1]
		}
		for (let i = 0; i < 8; i++) {
			let __goscriptTuple1: any = __goscript_block.feistel(right, left, $.arrayIndex((c$ as tripleDESCipher).cipher2.subkeys, 2 * i), $.arrayIndex((c$ as tripleDESCipher).cipher2.subkeys, (2 * i) + 1))
			right = __goscriptTuple1[0]
			left = __goscriptTuple1[1]
		}
		for (let i = 0; i < 8; i++) {
			let __goscriptTuple2: any = __goscript_block.feistel(left, right, $.arrayIndex((c$ as tripleDESCipher).cipher1.subkeys, 15 - (2 * i)), $.arrayIndex((c$ as tripleDESCipher).cipher1.subkeys, 15 - ((2 * i) + 1)))
			left = __goscriptTuple2[0]
			right = __goscriptTuple2[1]
		}

		left = $.uint((((left << 31) >>> 0)) | ($.uintShr(left, 1, 32)), 32)
		right = $.uint((((right << 31) >>> 0)) | ($.uintShr(right, 1, 32)), 32)

		let preOutput = $.uint64Add(($.uint64Mul($.uint64(right), (2 ** 32))), $.uint64(left))
		byteorder.BEPutUint64(dst, __goscript_block.permuteFinalBlock(preOutput))
	}

	public Encrypt(dst: $.Slice<number>, src: $.Slice<number>): void {
		const c: tripleDESCipher | $.VarRef<tripleDESCipher> | null = this;
		const c$: tripleDESCipher = c == null ? $.pointerTarget<tripleDESCipher>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<tripleDESCipher>(c)
		if ($.sliceLen(src) < 8) {
			$.panic("crypto/des: input not full block")
		}
		if ($.sliceLen(dst) < 8) {
			$.panic("crypto/des: output not full block")
		}
		if (alias.InexactOverlap($.goSlice(dst, undefined, 8), $.goSlice(src, undefined, 8))) {
			$.panic("crypto/des: invalid buffer overlap")
		}

		let b = byteorder.BEUint64(src)
		b = __goscript_block.permuteInitialBlock(b)
		let left = $.uint($.uint64Shr(b, 32n), 32)
		let right = $.uint(b, 32)

		left = $.uint((((left << 1) >>> 0)) | ($.uintShr(left, 31, 32)), 32)
		right = $.uint((((right << 1) >>> 0)) | ($.uintShr(right, 31, 32)), 32)

		for (let i = 0; i < 8; i++) {
			let __goscriptTuple3: any = __goscript_block.feistel(left, right, $.arrayIndex((c$ as tripleDESCipher).cipher1.subkeys, 2 * i), $.arrayIndex((c$ as tripleDESCipher).cipher1.subkeys, (2 * i) + 1))
			left = __goscriptTuple3[0]
			right = __goscriptTuple3[1]
		}
		for (let i = 0; i < 8; i++) {
			let __goscriptTuple4: any = __goscript_block.feistel(right, left, $.arrayIndex((c$ as tripleDESCipher).cipher2.subkeys, 15 - (2 * i)), $.arrayIndex((c$ as tripleDESCipher).cipher2.subkeys, 15 - ((2 * i) + 1)))
			right = __goscriptTuple4[0]
			left = __goscriptTuple4[1]
		}
		for (let i = 0; i < 8; i++) {
			let __goscriptTuple5: any = __goscript_block.feistel(left, right, $.arrayIndex((c$ as tripleDESCipher).cipher3.subkeys, 2 * i), $.arrayIndex((c$ as tripleDESCipher).cipher3.subkeys, (2 * i) + 1))
			left = __goscriptTuple5[0]
			right = __goscriptTuple5[1]
		}

		left = $.uint((((left << 31) >>> 0)) | ($.uintShr(left, 1, 32)), 32)
		right = $.uint((((right << 31) >>> 0)) | ($.uintShr(right, 1, 32)), 32)

		let preOutput = $.uint64Add(($.uint64Mul($.uint64(right), (2 ** 32))), $.uint64(left))
		byteorder.BEPutUint64(dst, __goscript_block.permuteFinalBlock(preOutput))
	}

	static __typeInfo = $.registerStructType(
		"des.tripleDESCipher",
		() => new tripleDESCipher(),
		() => [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Decrypt", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("Encrypt", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true)],
		tripleDESCipher,
		() => [/* @__PURE__ */ $.structField("cipher1", "des.desCipher", [0], 0, false, { pkgPath: "crypto/des" }), /* @__PURE__ */ $.structField("cipher2", "des.desCipher", [1], 128, false, { pkgPath: "crypto/des" }), /* @__PURE__ */ $.structField("cipher3", "des.desCipher", [2], 256, false, { pkgPath: "crypto/des" })]
	)
}

export const BlockSize: number = 8

export function KeySizeError_Error(k: KeySizeError): string {
	return $.concatString("crypto/des: invalid key size ", strconv.Itoa($.int(k)))
}

export async function NewCipher(key: $.Slice<number>): globalThis.Promise<[cipher.Block | null, $.GoError]> {
	if (fips140only.Enforced()) {
		return [null, errors.New("crypto/des: use of DES is not allowed in FIPS 140-only mode")]
	}

	if ($.sliceLen(key) != 8) {
		return [null, $.namedValueInterfaceValue<$.GoError>($.int($.sliceLen(key)), "des.KeySizeError", {"Error": KeySizeError_Error}, /* @__PURE__ */ $.basicType("int", "des.KeySizeError"))]
	}

	let c: desCipher | $.VarRef<desCipher> | null = new desCipher()
	await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as desCipher).generateSubkeys(key) : desCipher.prototype.generateSubkeys.call(c, key))
	return [$.interfaceValue<cipher.Block | null>(c, "*des.desCipher", /* @__PURE__ */ $.pointerType("des.desCipher")), null]
}

export async function NewTripleDESCipher(key: $.Slice<number>): globalThis.Promise<[cipher.Block | null, $.GoError]> {
	if (fips140only.Enforced()) {
		return [null, errors.New("crypto/des: use of TripleDES is not allowed in FIPS 140-only mode")]
	}

	if ($.sliceLen(key) != 24) {
		return [null, $.namedValueInterfaceValue<$.GoError>($.int($.sliceLen(key)), "des.KeySizeError", {"Error": KeySizeError_Error}, /* @__PURE__ */ $.basicType("int", "des.KeySizeError"))]
	}

	let c: tripleDESCipher | $.VarRef<tripleDESCipher> | null = new tripleDESCipher()
	let c$: tripleDESCipher = c == null ? $.pointerTarget<tripleDESCipher>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<tripleDESCipher>(c)
	await (c$ as tripleDESCipher).cipher1.generateSubkeys($.goSlice(key, undefined, 8))
	await (c$ as tripleDESCipher).cipher2.generateSubkeys($.goSlice(key, 8, 16))
	await (c$ as tripleDESCipher).cipher3.generateSubkeys($.goSlice(key, 16, undefined))
	return [$.interfaceValue<cipher.Block | null>(c, "*des.tripleDESCipher", /* @__PURE__ */ $.pointerType("des.tripleDESCipher")), null]
}
