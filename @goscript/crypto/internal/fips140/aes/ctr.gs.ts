// Generated file based on ctr.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as alias from "@goscript/crypto/internal/fips140/alias/index.js"

import * as subtle from "@goscript/crypto/internal/fips140/subtle/index.js"

import * as byteorder from "@goscript/crypto/internal/fips140deps/byteorder/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as __goscript_aes from "./aes.gs.ts"

import * as __goscript_aes_noasm from "./aes_noasm.gs.ts"

import * as __goscript_ctr_noasm from "./ctr_noasm.gs.ts"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/alias/index.js"
import "@goscript/crypto/internal/fips140/subtle/index.js"
import "@goscript/crypto/internal/fips140deps/byteorder/index.js"
import "@goscript/math/bits/index.js"
import "./aes.gs.ts"
import "./aes_noasm.gs.ts"
import "./ctr_noasm.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/aes", ["aes.CTR"])

export class CTR {
	public get b(): __goscript_aes.Block {
		return this._fields.b
	}

	public set b(value: __goscript_aes.Block) {
		this._fields.b = value
	}

	public get ivlo(): bigint {
		return this._fields.ivlo
	}

	public set ivlo(value: bigint) {
		this._fields.ivlo = value
	}

	public get ivhi(): bigint {
		return this._fields.ivhi
	}

	public set ivhi(value: bigint) {
		this._fields.ivhi = value
	}

	public get offset(): bigint {
		return this._fields.offset
	}

	public set offset(value: bigint) {
		this._fields.offset = value
	}

	public _fields: {
		b: __goscript_aes.Block
		ivlo: bigint
		ivhi: bigint
		offset: bigint
	}

	constructor(init?: Partial<{b?: __goscript_aes.Block, ivlo?: bigint, ivhi?: bigint, offset?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			b: init?.b ? init.b.clone() : new __goscript_aes.Block(undefined, true),
			ivlo: init?.ivlo ?? (0n as bigint),
			ivhi: init?.ivhi ?? (0n as bigint),
			offset: init?.offset ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CTR {
		return new CTR(this, true)
	}

	public __goscriptAssign(source: CTR): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.b, values.b)
		target.ivlo = values.ivlo
		target.ivhi = values.ivhi
		target.offset = values.offset
	}

	public XORKeyStream(dst: $.Slice<number>, src: $.Slice<number>): void {
		let c: CTR | $.VarRef<CTR> | null = this;
		const c$: CTR = c == null ? $.pointerTarget<CTR>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CTR>(c)
		void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as CTR).XORKeyStreamAt(dst, src, (c$ as CTR).offset) : CTR.prototype.XORKeyStreamAt.call(c, dst, src, (c$ as CTR).offset))

		let carry: bigint = 0n
		let __goscriptTuple0: any = bits.Add64((c$ as CTR).offset, $.uint64($.sliceLen(src)), 0n);
		;(c$ as CTR).offset = __goscriptTuple0[0]
		carry = __goscriptTuple0[1]
		if (carry != 0n) {
			$.panic("crypto/aes: counter overflow")
		}
	}

	public XORKeyStreamAt(dst: $.Slice<number>, src: $.Slice<number>, offset: bigint): void {
		const c: CTR | $.VarRef<CTR> | null = this;
		const c$: CTR = c == null ? $.pointerTarget<CTR>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CTR>(c)
		if ($.sliceLen(dst) < $.sliceLen(src)) {
			$.panic("crypto/aes: len(dst) < len(src)")
		}
		dst = $.goSlice(dst, undefined, $.sliceLen(src))
		if (alias.InexactOverlap(dst, src)) {
			$.panic("crypto/aes: invalid buffer overlap")
		}
		fips140.RecordApproved()

		let __goscriptTuple1: any = add128((c$ as CTR).ivlo, (c$ as CTR).ivhi, $.uint64Div(offset, 16n))
		let ivlo = __goscriptTuple1[0]
		let ivhi = __goscriptTuple1[1]

		{
			let blockOffset = $.uint64Mod(offset, 16n)
			if (blockOffset != 0n) {
				// We have a partial block at the beginning.
				let _in: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(16)))
				let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(16)))
				$.copy($.goSlice(_in.value, globalThis.Number(blockOffset), undefined), src)
				__goscript_ctr_noasm.ctrBlocks1($.fieldRef((c$ as CTR)._fields, "b"), out, _in, ivlo, ivhi)
				let n: number = $.copy(dst, $.goSlice(out.value, globalThis.Number(blockOffset), undefined))
				src = $.goSlice(src, n, undefined)
				dst = $.goSlice(dst, n, undefined)
				let __goscriptTuple2: any = add128(ivlo, ivhi, 1n)
				ivlo = __goscriptTuple2[0]
				ivhi = __goscriptTuple2[1]
			}
		}

		while ($.sliceLen(src) >= 128) {
			__goscript_ctr_noasm.ctrBlocks8($.fieldRef((c$ as CTR)._fields, "b"), ($.sliceToArrayPointer<number>(dst, 128, "byte") as $.VarRef<Uint8Array> | null), ($.sliceToArrayPointer<number>(src, 128, "byte") as $.VarRef<Uint8Array> | null), ivlo, ivhi)
			src = $.goSlice(src, 8 * 16, undefined)
			dst = $.goSlice(dst, 8 * 16, undefined)
			let __goscriptTuple3: any = add128(ivlo, ivhi, 8n)
			ivlo = __goscriptTuple3[0]
			ivhi = __goscriptTuple3[1]
		}

		// The tail can have at most 7 = 4 + 2 + 1 blocks.
		if ($.sliceLen(src) >= 64) {
			__goscript_ctr_noasm.ctrBlocks4($.fieldRef((c$ as CTR)._fields, "b"), ($.sliceToArrayPointer<number>(dst, 64, "byte") as $.VarRef<Uint8Array> | null), ($.sliceToArrayPointer<number>(src, 64, "byte") as $.VarRef<Uint8Array> | null), ivlo, ivhi)
			src = $.goSlice(src, 4 * 16, undefined)
			dst = $.goSlice(dst, 4 * 16, undefined)
			let __goscriptTuple4: any = add128(ivlo, ivhi, 4n)
			ivlo = __goscriptTuple4[0]
			ivhi = __goscriptTuple4[1]
		}
		if ($.sliceLen(src) >= 32) {
			__goscript_ctr_noasm.ctrBlocks2($.fieldRef((c$ as CTR)._fields, "b"), ($.sliceToArrayPointer<number>(dst, 32, "byte") as $.VarRef<Uint8Array> | null), ($.sliceToArrayPointer<number>(src, 32, "byte") as $.VarRef<Uint8Array> | null), ivlo, ivhi)
			src = $.goSlice(src, 2 * 16, undefined)
			dst = $.goSlice(dst, 2 * 16, undefined)
			let __goscriptTuple5: any = add128(ivlo, ivhi, 2n)
			ivlo = __goscriptTuple5[0]
			ivhi = __goscriptTuple5[1]
		}
		if ($.sliceLen(src) >= 16) {
			__goscript_ctr_noasm.ctrBlocks1($.fieldRef((c$ as CTR)._fields, "b"), ($.sliceToArrayPointer<number>(dst, 16, "byte") as $.VarRef<Uint8Array> | null), ($.sliceToArrayPointer<number>(src, 16, "byte") as $.VarRef<Uint8Array> | null), ivlo, ivhi)
			src = $.goSlice(src, 1 * 16, undefined)
			dst = $.goSlice(dst, 1 * 16, undefined)
			let __goscriptTuple6: any = add128(ivlo, ivhi, 1n)
			ivlo = __goscriptTuple6[0]
			ivhi = __goscriptTuple6[1]
		}

		if ($.sliceLen(src) != 0) {
			// We have a partial block at the end.
			let _in: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(16)))
			let out: $.VarRef<Uint8Array> = $.varRef($.arrayValue(new Uint8Array(16)))
			$.copy($.goSlice(_in.value, undefined, undefined), src)
			__goscript_ctr_noasm.ctrBlocks1($.fieldRef((c$ as CTR)._fields, "b"), out, _in, ivlo, ivhi)
			$.copy(dst, $.goSlice(out.value, undefined, undefined))
		}
	}

	static __typeInfo = $.registerStructType(
		"aes.CTR",
		() => new CTR(),
		() => [$.methodSignature("XORKeyStream", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("XORKeyStreamAt", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["offset", /* @__PURE__ */ $.basicType("uint64")]], [], true)],
		CTR,
		() => [/* @__PURE__ */ $.structField("b", "aes.Block", [0], 0, false, { pkgPath: "crypto/internal/fips140/aes" }), /* @__PURE__ */ $.structField("ivlo", /* @__PURE__ */ $.basicType("uint64"), [1], 488, false, { pkgPath: "crypto/internal/fips140/aes" }), /* @__PURE__ */ $.structField("ivhi", /* @__PURE__ */ $.basicType("uint64"), [2], 496, false, { pkgPath: "crypto/internal/fips140/aes" }), /* @__PURE__ */ $.structField("offset", /* @__PURE__ */ $.basicType("uint64"), [3], 504, false, { pkgPath: "crypto/internal/fips140/aes" })]
	)
}

export function NewCTR(b: __goscript_aes.Block | $.VarRef<__goscript_aes.Block> | null, iv: $.Slice<number>): CTR | $.VarRef<CTR> | null {
	// Allocate the CTR here, in an easily inlineable function, so
	// the allocation can be done in the caller's stack frame
	// instead of the heap.  See issue 70499.
	let c = $.varRef(newCTR(b, iv))
	return c
}

export function newCTR(b: __goscript_aes.Block | $.VarRef<__goscript_aes.Block> | null, iv: $.Slice<number>): CTR {
	if ($.sliceLen(iv) != 16) {
		$.panic("bad IV length")
	}

	return (() => { const __goscriptLiteralField0 = byteorder.BEUint64($.goSlice(iv, 8, 16)); const __goscriptLiteralField1 = byteorder.BEUint64($.goSlice(iv, 0, 8)); return new CTR({b: $.pointerValue<__goscript_aes.Block>(b), ivlo: __goscriptLiteralField0, ivhi: __goscriptLiteralField1, offset: 0n}, true) })()
}

export function RoundToBlock(c: CTR | $.VarRef<CTR> | null): void {
	const c$: CTR = c == null ? $.pointerTarget<CTR>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CTR>(c)
	{
		let remainder = $.uint64Mod((c$ as CTR).offset, 16n)
		if (remainder != 0n) {
			let carry: bigint = 0n
			let __goscriptTuple7: any = bits.Add64((c$ as CTR).offset, $.uint64Sub(16n, remainder), 0n);
			;(c$ as CTR).offset = __goscriptTuple7[0]
			carry = __goscriptTuple7[1]
			if (carry != 0n) {
				$.panic("crypto/aes: counter overflow")
			}
		}
	}
}

export function ctrBlocks(b: __goscript_aes.Block | $.VarRef<__goscript_aes.Block> | null, dst: $.Slice<number>, src: $.Slice<number>, ivlo: bigint, ivhi: bigint): void {
	let buf: $.Slice<number> = $.makeSlice<number>($.sliceLen(src), 8 * 16, "byte")
	for (let i = 0; i < $.sliceLen(buf); i = i + (16)) {
		byteorder.BEPutUint64($.goSlice(buf, i, undefined), ivhi)
		byteorder.BEPutUint64($.goSlice(buf, i + 8, undefined), ivlo)
		let __goscriptTuple8: any = add128(ivlo, ivhi, 1n)
		ivlo = __goscriptTuple8[0]
		ivhi = __goscriptTuple8[1]
		__goscript_aes_noasm.encryptBlock(b, $.goSlice(buf, i, undefined), $.goSlice(buf, i, undefined))
	}
	// XOR into buf first, in case src and dst overlap (see above).
	subtle.XORBytes(buf, src, buf)
	$.copy(dst, buf)
}

export function add128(lo: bigint, hi: bigint, x: bigint): [bigint, bigint] {
	let __goscriptTuple9: any = bits.Add64(lo, x, 0n)
	lo = __goscriptTuple9[0]
	let c = __goscriptTuple9[1]
	let __goscriptTuple10: any = bits.Add64(hi, 0n, c)
	hi = __goscriptTuple10[0]
	return [lo, hi]
}
