// Generated file based on aes.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as alias from "@goscript/crypto/internal/fips140/alias/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_aes_generic from "./aes_generic.gs.ts"

import * as __goscript_aes_noasm from "./aes_noasm.gs.ts"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/alias/index.js"
import "@goscript/strconv/index.js"
import "./aes_generic.gs.ts"
import "./aes_noasm.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/aes", ["aes.Block", "aes.blockExpanded", "aes.KeySizeError"])

export type KeySizeError = number

$.registerNamedValueType(
	"aes.KeySizeError",
	{Error: (receiver: any, ...args: any[]) => (KeySizeError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*aes.KeySizeError",
	{Error: (receiver: any, ...args: any[]) => (KeySizeError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class Block {
	public get block(): __goscript_aes_noasm.block {
		return this._fields.block
	}

	public set block(value: __goscript_aes_noasm.block) {
		this._fields.block = value
	}

	public _fields: {
		block: __goscript_aes_noasm.block
	}

	constructor(init?: Partial<{block?: __goscript_aes_noasm.block}>, __goscriptValue?: boolean) {
		this._fields = {
			block: init?.block ? init.block.clone() : new __goscript_aes_noasm.block(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Block {
		return new Block(this, true)
	}

	public __goscriptAssign(source: Block): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.block, values.block)
	}

	public BlockSize(): number {
		const c: Block | $.VarRef<Block> | null = this;
		return 16
	}

	public Decrypt(dst: $.Slice<number>, src: $.Slice<number>): void {
		const c: Block | $.VarRef<Block> | null = this;
		// AES-ECB is not approved in FIPS 140-3 mode.
		fips140.RecordNonApproved()
		if ($.sliceLen(src) < 16) {
			$.panic("crypto/aes: input not full block")
		}
		if ($.sliceLen(dst) < 16) {
			$.panic("crypto/aes: output not full block")
		}
		if (alias.InexactOverlap($.goSlice(dst, undefined, 16), $.goSlice(src, undefined, 16))) {
			$.panic("crypto/aes: invalid buffer overlap")
		}
		__goscript_aes_noasm.decryptBlock(c, dst, src)
	}

	public Encrypt(dst: $.Slice<number>, src: $.Slice<number>): void {
		const c: Block | $.VarRef<Block> | null = this;
		// AES-ECB is not approved in FIPS 140-3 mode.
		fips140.RecordNonApproved()
		if ($.sliceLen(src) < 16) {
			$.panic("crypto/aes: input not full block")
		}
		if ($.sliceLen(dst) < 16) {
			$.panic("crypto/aes: output not full block")
		}
		if (alias.InexactOverlap($.goSlice(dst, undefined, 16), $.goSlice(src, undefined, 16))) {
			$.panic("crypto/aes: invalid buffer overlap")
		}
		__goscript_aes_noasm.encryptBlock(c, dst, src)
	}

	public roundKeysSize(): any {
		return $.pointerValue<__goscript_aes_noasm.block>(this.block).blockExpanded.roundKeysSize()
	}

	static __typeInfo = $.registerStructType(
		"aes.Block",
		() => new Block(),
		() => [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Decrypt", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("Encrypt", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("roundKeysSize", [], [/* @__PURE__ */ $.basicType("int")], true)],
		Block,
		() => [/* @__PURE__ */ $.structField("block", "aes.block", [0], 0, false, { pkgPath: "crypto/internal/fips140/aes", anonymous: true })]
	)
}

export class blockExpanded {
	public get rounds(): number {
		return this._fields.rounds
	}

	public set rounds(value: number) {
		this._fields.rounds = value
	}

	// Round keys, where only the first (rounds + 1) × (128 ÷ 32) words are used.
	public get enc(): number[] {
		return this._fields.enc
	}

	public set enc(value: number[]) {
		this._fields.enc = value
	}

	public get dec(): number[] {
		return this._fields.dec
	}

	public set dec(value: number[]) {
		this._fields.dec = value
	}

	public _fields: {
		rounds: number
		enc: number[]
		dec: number[]
	}

	constructor(init?: Partial<{rounds?: number, enc?: number[], dec?: number[]}>, __goscriptValue?: boolean) {
		this._fields = {
			rounds: init?.rounds ?? (0 as number),
			enc: init?.enc !== undefined ? $.cloneArrayValue(init.enc, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 60)) : $.arrayValue(globalThis.Array.from({ length: 60 }, () => 0)),
			dec: init?.dec !== undefined ? $.cloneArrayValue(init.dec, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 60)) : $.arrayValue(globalThis.Array.from({ length: 60 }, () => 0))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): blockExpanded {
		return new blockExpanded(this, true)
	}

	public __goscriptAssign(source: blockExpanded): void {
		const target = this._fields
		const values = source._fields
		target.rounds = values.rounds
		target.enc = $.assignFieldValue(target.enc, values.enc, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 60))
		target.dec = $.assignFieldValue(target.dec, values.dec, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 60))
	}

	public roundKeysSize(): number {
		const b: blockExpanded | $.VarRef<blockExpanded> | null = this;
		return ($.pointerValue<blockExpanded>(b).rounds + 1) * (globalThis.Math.trunc(128 / 32))
	}

	static __typeInfo = $.registerStructType(
		"aes.blockExpanded",
		() => new blockExpanded(),
		() => [$.methodSignature("roundKeysSize", [], [/* @__PURE__ */ $.basicType("int")], true)],
		blockExpanded,
		() => [/* @__PURE__ */ $.structField("rounds", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "crypto/internal/fips140/aes" }), /* @__PURE__ */ $.structField("enc", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 60), [1], 8, false, { pkgPath: "crypto/internal/fips140/aes" }), /* @__PURE__ */ $.structField("dec", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 60), [2], 248, false, { pkgPath: "crypto/internal/fips140/aes" })]
	)
}

export const BlockSize: number = 16

export const aes128KeySize: number = 16

export const aes192KeySize: number = 24

export const aes256KeySize: number = 32

export const aes128Rounds: number = 10

export const aes192Rounds: number = 12

export const aes256Rounds: number = 14

export function KeySizeError_Error(k: KeySizeError): string {
	return $.concatString("crypto/aes: invalid key size ", strconv.Itoa($.int(k)))
}

export function New(key: $.Slice<number>): [Block | $.VarRef<Block> | null, $.GoError] {
	// This call is outline to let the allocation happen on the parent stack.
	return newOutlined(new Block(), key)
}

export function newOutlined(b: Block | $.VarRef<Block> | null, key: $.Slice<number>): [Block | $.VarRef<Block> | null, $.GoError] {
	switch ($.sliceLen(key)) {
		case 16:
		case 24:
		case 32:
		{
			break
		}
		default:
		{
			return [null, $.namedValueInterfaceValue<$.GoError>($.int($.sliceLen(key)), "aes.KeySizeError", {"Error": KeySizeError_Error}, /* @__PURE__ */ $.basicType("int", "aes.KeySizeError"))]
			break
		}
	}
	return [__goscript_aes_noasm.newBlock(b, key), null]
}

export function newBlockExpanded(c: blockExpanded | $.VarRef<blockExpanded> | null, key: $.Slice<number>): void {
	const c$: blockExpanded = c == null ? $.pointerTarget<blockExpanded>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<blockExpanded>(c)
	switch ($.sliceLen(key)) {
		case 16:
		{
			;(c$ as blockExpanded).rounds = 10
			break
		}
		case 24:
		{
			;(c$ as blockExpanded).rounds = 12
			break
		}
		case 32:
		{
			;(c$ as blockExpanded).rounds = 14
			break
		}
	}
	__goscript_aes_generic.expandKeyGeneric(c, key)
}

export function EncryptBlockInternal(c: Block | $.VarRef<Block> | null, dst: $.Slice<number>, src: $.Slice<number>): void {
	__goscript_aes_noasm.encryptBlock(c, dst, src)
}
