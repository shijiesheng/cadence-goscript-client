// Generated file based on chacha_generic.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as cipher from "@goscript/crypto/cipher/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as errors from "@goscript/errors/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as alias from "@goscript/vendor/golang.org/x/crypto/internal/alias/index.js"

import * as __goscript_chacha_noasm from "./chacha_noasm.gs.ts"

import * as __goscript_xor from "./xor.gs.ts"
import "@goscript/crypto/cipher/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/errors/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/vendor/golang.org/x/crypto/internal/alias/index.js"
import "./chacha_noasm.gs.ts"
import "./xor.gs.ts"

$.registerTypePackagePath("vendor/golang.org/x/crypto/chacha20", ["chacha20.Cipher"])

export class Cipher {
	// The ChaCha20 state is 16 words: 4 constant, 8 of key, 1 of counter
	// (incremented after each block), and 3 of nonce.
	public get key(): number[] {
		return this._fields.key
	}

	public set key(value: number[]) {
		this._fields.key = value
	}

	public get counter(): number {
		return this._fields.counter
	}

	public set counter(value: number) {
		this._fields.counter = value
	}

	public get nonce(): number[] {
		return this._fields.nonce
	}

	public set nonce(value: number[]) {
		this._fields.nonce = value
	}

	// The last len bytes of buf are leftover key stream bytes from the previous
	// XORKeyStream invocation. The size of buf depends on how many blocks are
	// computed at a time by xorKeyStreamBlocks.
	public get buf(): Uint8Array {
		return this._fields.buf
	}

	public set buf(value: Uint8Array) {
		this._fields.buf = value
	}

	public get len(): number {
		return this._fields.len
	}

	public set len(value: number) {
		this._fields.len = value
	}

	// overflow is set when the counter overflowed, no more blocks can be
	// generated, and the next XORKeyStream call should panic.
	public get overflow(): boolean {
		return this._fields.overflow
	}

	public set overflow(value: boolean) {
		this._fields.overflow = value
	}

	// The counter-independent results of the first round are cached after they
	// are computed the first time.
	public get precompDone(): boolean {
		return this._fields.precompDone
	}

	public set precompDone(value: boolean) {
		this._fields.precompDone = value
	}

	public get p1(): number {
		return this._fields.p1
	}

	public set p1(value: number) {
		this._fields.p1 = value
	}

	public get p5(): number {
		return this._fields.p5
	}

	public set p5(value: number) {
		this._fields.p5 = value
	}

	public get p9(): number {
		return this._fields.p9
	}

	public set p9(value: number) {
		this._fields.p9 = value
	}

	public get p13(): number {
		return this._fields.p13
	}

	public set p13(value: number) {
		this._fields.p13 = value
	}

	public get p2(): number {
		return this._fields.p2
	}

	public set p2(value: number) {
		this._fields.p2 = value
	}

	public get p6(): number {
		return this._fields.p6
	}

	public set p6(value: number) {
		this._fields.p6 = value
	}

	public get p10(): number {
		return this._fields.p10
	}

	public set p10(value: number) {
		this._fields.p10 = value
	}

	public get p14(): number {
		return this._fields.p14
	}

	public set p14(value: number) {
		this._fields.p14 = value
	}

	public get p3(): number {
		return this._fields.p3
	}

	public set p3(value: number) {
		this._fields.p3 = value
	}

	public get p7(): number {
		return this._fields.p7
	}

	public set p7(value: number) {
		this._fields.p7 = value
	}

	public get p11(): number {
		return this._fields.p11
	}

	public set p11(value: number) {
		this._fields.p11 = value
	}

	public get p15(): number {
		return this._fields.p15
	}

	public set p15(value: number) {
		this._fields.p15 = value
	}

	public _fields: {
		key: number[]
		counter: number
		nonce: number[]
		buf: Uint8Array
		len: number
		overflow: boolean
		precompDone: boolean
		p1: number
		p5: number
		p9: number
		p13: number
		p2: number
		p6: number
		p10: number
		p14: number
		p3: number
		p7: number
		p11: number
		p15: number
	}

	constructor(init?: Partial<{key?: number[], counter?: number, nonce?: number[], buf?: Uint8Array, len?: number, overflow?: boolean, precompDone?: boolean, p1?: number, p5?: number, p9?: number, p13?: number, p2?: number, p6?: number, p10?: number, p14?: number, p3?: number, p7?: number, p11?: number, p15?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			key: init?.key !== undefined ? $.cloneArrayValue(init.key, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 8)) : $.arrayValue(globalThis.Array.from({ length: 8 }, () => 0)),
			counter: init?.counter ?? (0 as number),
			nonce: init?.nonce !== undefined ? $.cloneArrayValue(init.nonce, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 3)) : $.arrayValue(globalThis.Array.from({ length: 3 }, () => 0)),
			buf: init?.buf !== undefined ? $.cloneArrayValue(init.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64)) : $.arrayValue(new Uint8Array(64)),
			len: init?.len ?? (0 as number),
			overflow: init?.overflow ?? (false as boolean),
			precompDone: init?.precompDone ?? (false as boolean),
			p1: init?.p1 ?? (0 as number),
			p5: init?.p5 ?? (0 as number),
			p9: init?.p9 ?? (0 as number),
			p13: init?.p13 ?? (0 as number),
			p2: init?.p2 ?? (0 as number),
			p6: init?.p6 ?? (0 as number),
			p10: init?.p10 ?? (0 as number),
			p14: init?.p14 ?? (0 as number),
			p3: init?.p3 ?? (0 as number),
			p7: init?.p7 ?? (0 as number),
			p11: init?.p11 ?? (0 as number),
			p15: init?.p15 ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Cipher {
		return new Cipher(this, true)
	}

	public __goscriptAssign(source: Cipher): void {
		const target = this._fields
		const values = source._fields
		target.key = $.assignFieldValue(target.key, values.key, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 8))
		target.counter = values.counter
		target.nonce = $.assignFieldValue(target.nonce, values.nonce, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 3))
		target.buf = $.assignFieldValue(target.buf, values.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64))
		target.len = values.len
		target.overflow = values.overflow
		target.precompDone = values.precompDone
		target.p1 = values.p1
		target.p5 = values.p5
		target.p9 = values.p9
		target.p13 = values.p13
		target.p2 = values.p2
		target.p6 = values.p6
		target.p10 = values.p10
		target.p14 = values.p14
		target.p3 = values.p3
		target.p7 = values.p7
		target.p11 = values.p11
		target.p15 = values.p15
	}

	public SetCounter(counter: number): void {
		let s: Cipher | $.VarRef<Cipher> | null = this;
		const s$: Cipher = s == null ? $.pointerTarget<Cipher>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Cipher>(s)
		// Internally, s may buffer multiple blocks, which complicates this
		// implementation slightly. When checking whether the counter has rolled
		// back, we must use both s.counter and s.len to determine how many blocks
		// we have already output.
		let outputCounter = $.uint((((s$ as Cipher).counter - (globalThis.Math.trunc($.uint((s$ as Cipher).len, 32) / 64))) >>> 0), 32)
		if ((s$ as Cipher).overflow || (counter < outputCounter)) {
			$.panic("chacha20: SetCounter attempted to rollback counter")
		}

		// In the general case, we set the new counter value and reset s.len to 0,
		// causing the next call to XORKeyStream to refill the buffer. However, if
		// we're advancing within the existing buffer, we can save work by simply
		// setting s.len.
		if (counter < (s$ as Cipher).counter) {
			;(s$ as Cipher).len = $.int($.uint((((s$ as Cipher).counter - counter) >>> 0), 32)) * 64
		} else {
			;(s$ as Cipher).counter = counter;
			;(s$ as Cipher).len = 0
		}
	}

	public XORKeyStream(dst: $.Slice<number>, src: $.Slice<number>): void {
		let s: Cipher | $.VarRef<Cipher> | null = this;
		const s$: Cipher = s == null ? $.pointerTarget<Cipher>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Cipher>(s)
		if ($.sliceLen(src) == 0) {
			return
		}
		if ($.sliceLen(dst) < $.sliceLen(src)) {
			$.panic("chacha20: output smaller than input")
		}
		dst = $.goSlice(dst, undefined, $.sliceLen(src))
		if (alias.InexactOverlap(dst, src)) {
			$.panic("chacha20: invalid buffer overlap")
		}

		// First, drain any remaining key stream from a previous XORKeyStream.
		if ((s$ as Cipher).len != 0) {
			let keyStream: $.Slice<number> = $.goSlice((s$ as Cipher).buf, 64 - (s$ as Cipher).len, undefined)
			if ($.sliceLen(src) < $.sliceLen(keyStream)) {
				keyStream = $.goSlice(keyStream, undefined, $.sliceLen(src))
			}
			$.arrayIndex(src!, $.sliceLen(keyStream) - 1)
			for (let __goscriptRangeTarget0 = keyStream, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(dst), __goscriptSliceWindow1 = $.sliceRange(src), i = 0; i < __goscriptRangeWindow0.length; i++) {
				let b = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as number), 8);
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = $.uint(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as number) ^ b, 8)
			}
			;(s$ as Cipher).len = (s$ as Cipher).len - ($.sliceLen(keyStream))
			let __goscriptAssign0_0: $.Slice<number> = $.goSlice(dst, $.sliceLen(keyStream), undefined)
			let __goscriptAssign0_1: $.Slice<number> = $.goSlice(src, $.sliceLen(keyStream), undefined)
			dst = __goscriptAssign0_0
			src = __goscriptAssign0_1
		}
		if ($.sliceLen(src) == 0) {
			return
		}

		// If we'd need to let the counter overflow and keep generating output,
		// panic immediately. If instead we'd only reach the last block, remember
		// not to generate any more output after the buffer is drained.
		let numBlocks = $.uint64Div(($.uint64Sub(($.uint64Add($.uint64($.sliceLen(src)), 64n)), 1n)), 64n)
		if ((s$ as Cipher).overflow || (($.uint64Add($.uint64((s$ as Cipher).counter), numBlocks)) > 4294967296n)) {
			$.panic("chacha20: counter overflow")
		} else {
			if (($.uint64Add($.uint64((s$ as Cipher).counter), numBlocks)) == 4294967296n) {
				;(s$ as Cipher).overflow = true
			}
		}

		// xorKeyStreamBlocks implementations expect input lengths that are a
		// multiple of bufSize. Platform-specific ones process multiple blocks at a
		// time, so have bufSizes that are a multiple of blockSize.

		let full: number = $.sliceLen(src) - ($.sliceLen(src) % 64)
		if (full > 0) {
			void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Cipher).xorKeyStreamBlocks($.goSlice(dst, undefined, full), $.goSlice(src, undefined, full)) : Cipher.prototype.xorKeyStreamBlocks.call(s, $.goSlice(dst, undefined, full), $.goSlice(src, undefined, full)))
		}
		let __goscriptAssign1_0: $.Slice<number> = $.goSlice(dst, full, undefined)
		let __goscriptAssign1_1: $.Slice<number> = $.goSlice(src, full, undefined)
		dst = __goscriptAssign1_0
		src = __goscriptAssign1_1

		// If using a multi-block xorKeyStreamBlocks would overflow, use the generic
		// one that does one block at a time.
		const blocksPerBuf: number = 1
		if (($.uint64Add($.uint64((s$ as Cipher).counter), 1n)) > 4294967296n) {
			;(s$ as Cipher).buf = $.arrayValue(new Uint8Array(64))
			let __goscriptShadow0 = globalThis.Math.trunc((($.sliceLen(src) + 64) - 1) / 64)
			let buf: $.Slice<number> = $.goSlice((s$ as Cipher).buf, 64 - (__goscriptShadow0 * 64), undefined)
			$.copy(buf, src)
			void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Cipher).xorKeyStreamBlocksGeneric(buf, buf) : Cipher.prototype.xorKeyStreamBlocksGeneric.call(s, buf, buf));
			;(s$ as Cipher).len = $.sliceLen(buf) - $.copy(dst, buf)
			return
		}

		// If we have a partial (multi-)block, pad it for xorKeyStreamBlocks, and
		// keep the leftover keystream for the next XORKeyStream invocation.
		if ($.sliceLen(src) > 0) {
			;(s$ as Cipher).buf = $.arrayValue(new Uint8Array(64))
			$.copy($.goSlice((s$ as Cipher).buf, undefined, undefined), src)
			void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Cipher).xorKeyStreamBlocks($.goSlice((s$ as Cipher).buf, undefined, undefined), $.goSlice((s$ as Cipher).buf, undefined, undefined)) : Cipher.prototype.xorKeyStreamBlocks.call(s, $.goSlice((s$ as Cipher).buf, undefined, undefined), $.goSlice((s$ as Cipher).buf, undefined, undefined)));
			;(s$ as Cipher).len = 64 - $.copy(dst, $.goSlice((s$ as Cipher).buf, undefined, undefined))
		}
	}

	public xorKeyStreamBlocks(dst: $.Slice<number>, src: $.Slice<number>): void {
		const s: Cipher | $.VarRef<Cipher> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Cipher).xorKeyStreamBlocksGeneric(dst, src) : Cipher.prototype.xorKeyStreamBlocksGeneric.call(s, dst, src))
	}

	public xorKeyStreamBlocksGeneric(dst: $.Slice<number>, src: $.Slice<number>): void {
		let s: Cipher | $.VarRef<Cipher> | null = this;
		const s$: Cipher = s == null ? $.pointerTarget<Cipher>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Cipher>(s)
		if (($.sliceLen(dst) != $.sliceLen(src)) || (($.sliceLen(dst) % 64) != 0)) {
			$.panic("chacha20: internal error: wrong dst and/or src length")
		}

		// To generate each block of key stream, the initial cipher state
		// (represented below) is passed through 20 rounds of shuffling,
		// alternatively applying quarterRounds by columns (like 1, 5, 9, 13)
		// or by diagonals (like 1, 6, 11, 12).
		//
		//      0:cccccccc   1:cccccccc   2:cccccccc   3:cccccccc
		//      4:kkkkkkkk   5:kkkkkkkk   6:kkkkkkkk   7:kkkkkkkk
		//      8:kkkkkkkk   9:kkkkkkkk  10:kkkkkkkk  11:kkkkkkkk
		//     12:bbbbbbbb  13:nnnnnnnn  14:nnnnnnnn  15:nnnnnnnn
		//
		//            c=constant k=key b=blockcount n=nonce
		let c0: number = 1634760805
		let c1: number = 857760878
		let c2: number = 2036477234
		let c3: number = 1797285236
		let c4: number = $.arrayIndex((s$ as Cipher).key, 0)
		let c5: number = $.arrayIndex((s$ as Cipher).key, 1)
		let c6: number = $.arrayIndex((s$ as Cipher).key, 2)
		let c7: number = $.arrayIndex((s$ as Cipher).key, 3)
		let c8: number = $.arrayIndex((s$ as Cipher).key, 4)
		let c9: number = $.arrayIndex((s$ as Cipher).key, 5)
		let c10: number = $.arrayIndex((s$ as Cipher).key, 6)
		let c11: number = $.arrayIndex((s$ as Cipher).key, 7)
		let __goscriptBlank0: number = (s$ as Cipher).counter
		let c13: number = $.arrayIndex((s$ as Cipher).nonce, 0)
		let c14: number = $.arrayIndex((s$ as Cipher).nonce, 1)
		let c15: number = $.arrayIndex((s$ as Cipher).nonce, 2)

		// Three quarters of the first round don't depend on the counter, so we can
		// calculate them here, and reuse them for multiple blocks in the loop, and
		// for future XORKeyStream invocations.
		if (!(s$ as Cipher).precompDone) {
			let __goscriptTuple0: any = quarterRound(c1, c5, c9, c13);
			;(s$ as Cipher).p1 = __goscriptTuple0[0];
			;(s$ as Cipher).p5 = __goscriptTuple0[1];
			;(s$ as Cipher).p9 = __goscriptTuple0[2];
			;(s$ as Cipher).p13 = __goscriptTuple0[3]
			let __goscriptTuple1: any = quarterRound(c2, c6, c10, c14);
			;(s$ as Cipher).p2 = __goscriptTuple1[0];
			;(s$ as Cipher).p6 = __goscriptTuple1[1];
			;(s$ as Cipher).p10 = __goscriptTuple1[2];
			;(s$ as Cipher).p14 = __goscriptTuple1[3]
			let __goscriptTuple2: any = quarterRound(c3, c7, c11, c15);
			;(s$ as Cipher).p3 = __goscriptTuple2[0];
			;(s$ as Cipher).p7 = __goscriptTuple2[1];
			;(s$ as Cipher).p11 = __goscriptTuple2[2];
			;(s$ as Cipher).p15 = __goscriptTuple2[3];
			;(s$ as Cipher).precompDone = true
		}

		// A condition of len(src) > 0 would be sufficient, but this also
		// acts as a bounds check elimination hint.
		while (($.sliceLen(src) >= 64) && ($.sliceLen(dst) >= 64)) {
			// The remainder of the first column round.
			let [fcr0, fcr4, fcr8, fcr12] = quarterRound(c0, c4, c8, (s$ as Cipher).counter)

			// The second diagonal round.
			let [x0, x5, x10, x15] = quarterRound(fcr0, (s$ as Cipher).p5, (s$ as Cipher).p10, (s$ as Cipher).p15)
			let [x1, x6, x11, x12] = quarterRound((s$ as Cipher).p1, (s$ as Cipher).p6, (s$ as Cipher).p11, fcr12)
			let [x2, x7, x8, x13] = quarterRound((s$ as Cipher).p2, (s$ as Cipher).p7, fcr8, (s$ as Cipher).p13)
			let [x3, x4, x9, x14] = quarterRound((s$ as Cipher).p3, fcr4, (s$ as Cipher).p9, (s$ as Cipher).p14)

			// The remaining 18 rounds.
			for (let i = 0; i < 9; i++) {
				// Column round.
				let __goscriptTuple3: any = quarterRound(x0, x4, x8, x12)
				x0 = __goscriptTuple3[0]
				x4 = __goscriptTuple3[1]
				x8 = __goscriptTuple3[2]
				x12 = __goscriptTuple3[3]
				let __goscriptTuple4: any = quarterRound(x1, x5, x9, x13)
				x1 = __goscriptTuple4[0]
				x5 = __goscriptTuple4[1]
				x9 = __goscriptTuple4[2]
				x13 = __goscriptTuple4[3]
				let __goscriptTuple5: any = quarterRound(x2, x6, x10, x14)
				x2 = __goscriptTuple5[0]
				x6 = __goscriptTuple5[1]
				x10 = __goscriptTuple5[2]
				x14 = __goscriptTuple5[3]
				let __goscriptTuple6: any = quarterRound(x3, x7, x11, x15)
				x3 = __goscriptTuple6[0]
				x7 = __goscriptTuple6[1]
				x11 = __goscriptTuple6[2]
				x15 = __goscriptTuple6[3]

				// Diagonal round.
				let __goscriptTuple7: any = quarterRound(x0, x5, x10, x15)
				x0 = __goscriptTuple7[0]
				x5 = __goscriptTuple7[1]
				x10 = __goscriptTuple7[2]
				x15 = __goscriptTuple7[3]
				let __goscriptTuple8: any = quarterRound(x1, x6, x11, x12)
				x1 = __goscriptTuple8[0]
				x6 = __goscriptTuple8[1]
				x11 = __goscriptTuple8[2]
				x12 = __goscriptTuple8[3]
				let __goscriptTuple9: any = quarterRound(x2, x7, x8, x13)
				x2 = __goscriptTuple9[0]
				x7 = __goscriptTuple9[1]
				x8 = __goscriptTuple9[2]
				x13 = __goscriptTuple9[3]
				let __goscriptTuple10: any = quarterRound(x3, x4, x9, x14)
				x3 = __goscriptTuple10[0]
				x4 = __goscriptTuple10[1]
				x9 = __goscriptTuple10[2]
				x14 = __goscriptTuple10[3]
			}

			// Add back the initial state to generate the key stream, then
			// XOR the key stream with the source and write out the result.
			__goscript_xor.addXor($.goSlice(dst, 0, 4), $.goSlice(src, 0, 4), x0, c0)
			__goscript_xor.addXor($.goSlice(dst, 4, 8), $.goSlice(src, 4, 8), x1, c1)
			__goscript_xor.addXor($.goSlice(dst, 8, 12), $.goSlice(src, 8, 12), x2, c2)
			__goscript_xor.addXor($.goSlice(dst, 12, 16), $.goSlice(src, 12, 16), x3, c3)
			__goscript_xor.addXor($.goSlice(dst, 16, 20), $.goSlice(src, 16, 20), x4, c4)
			__goscript_xor.addXor($.goSlice(dst, 20, 24), $.goSlice(src, 20, 24), x5, c5)
			__goscript_xor.addXor($.goSlice(dst, 24, 28), $.goSlice(src, 24, 28), x6, c6)
			__goscript_xor.addXor($.goSlice(dst, 28, 32), $.goSlice(src, 28, 32), x7, c7)
			__goscript_xor.addXor($.goSlice(dst, 32, 36), $.goSlice(src, 32, 36), x8, c8)
			__goscript_xor.addXor($.goSlice(dst, 36, 40), $.goSlice(src, 36, 40), x9, c9)
			__goscript_xor.addXor($.goSlice(dst, 40, 44), $.goSlice(src, 40, 44), x10, c10)
			__goscript_xor.addXor($.goSlice(dst, 44, 48), $.goSlice(src, 44, 48), x11, c11)
			__goscript_xor.addXor($.goSlice(dst, 48, 52), $.goSlice(src, 48, 52), x12, (s$ as Cipher).counter)
			__goscript_xor.addXor($.goSlice(dst, 52, 56), $.goSlice(src, 52, 56), x13, c13)
			__goscript_xor.addXor($.goSlice(dst, 56, 60), $.goSlice(src, 56, 60), x14, c14)
			__goscript_xor.addXor($.goSlice(dst, 60, 64), $.goSlice(src, 60, 64), x15, c15);

			;(s$ as Cipher).counter = $.uint((s$ as Cipher).counter + (1), 32)

			let __goscriptAssign2_0: $.Slice<number> = $.goSlice(src, 64, undefined)
			let __goscriptAssign2_1: $.Slice<number> = $.goSlice(dst, 64, undefined)
			src = __goscriptAssign2_0
			dst = __goscriptAssign2_1
		}
	}

	static __typeInfo = $.registerStructType(
		"chacha20.Cipher",
		() => new Cipher(),
		() => [$.methodSignature("SetCounter", [["counter", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("XORKeyStream", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("xorKeyStreamBlocks", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("xorKeyStreamBlocksGeneric", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true)],
		Cipher,
		() => [/* @__PURE__ */ $.structField("key", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 8), [0], 0, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("counter", /* @__PURE__ */ $.basicType("uint32"), [1], 32, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("nonce", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 3), [2], 36, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64), [3], 48, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("len", /* @__PURE__ */ $.basicType("int"), [4], 112, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("overflow", /* @__PURE__ */ $.basicType("bool"), [5], 120, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("precompDone", /* @__PURE__ */ $.basicType("bool"), [6], 121, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("p1", /* @__PURE__ */ $.basicType("uint32"), [7], 124, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("p5", /* @__PURE__ */ $.basicType("uint32"), [8], 128, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("p9", /* @__PURE__ */ $.basicType("uint32"), [9], 132, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("p13", /* @__PURE__ */ $.basicType("uint32"), [10], 136, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("p2", /* @__PURE__ */ $.basicType("uint32"), [11], 140, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("p6", /* @__PURE__ */ $.basicType("uint32"), [12], 144, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("p10", /* @__PURE__ */ $.basicType("uint32"), [13], 148, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("p14", /* @__PURE__ */ $.basicType("uint32"), [14], 152, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("p3", /* @__PURE__ */ $.basicType("uint32"), [15], 156, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("p7", /* @__PURE__ */ $.basicType("uint32"), [16], 160, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("p11", /* @__PURE__ */ $.basicType("uint32"), [17], 164, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" }), /* @__PURE__ */ $.structField("p15", /* @__PURE__ */ $.basicType("uint32"), [18], 168, false, { pkgPath: "vendor/golang.org/x/crypto/chacha20" })]
	)
}

export const KeySize: number = 32

export const NonceSize: number = 12

export const NonceSizeX: number = 24

export const j0: number = 1634760805

export const j1: number = 857760878

export const j2: number = 2036477234

export const j3: number = 1797285236

export const blockSize: number = 64

export function NewUnauthenticatedCipher(key: $.Slice<number>, nonce: $.Slice<number>): [Cipher | $.VarRef<Cipher> | null, $.GoError] {
	// This function is split into a wrapper so that the Cipher allocation will
	// be inlined, and depending on how the caller uses the return value, won't
	// escape to the heap.
	let c: Cipher | $.VarRef<Cipher> | null = new Cipher()
	return newUnauthenticatedCipher(c, key, nonce)
}

export function newUnauthenticatedCipher(c: Cipher | $.VarRef<Cipher> | null, key: $.Slice<number>, nonce: $.Slice<number>): [Cipher | $.VarRef<Cipher> | null, $.GoError] {
	const c$: Cipher = c == null ? $.pointerTarget<Cipher>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Cipher>(c)
	if ($.sliceLen(key) != 32) {
		return [null, errors.New("chacha20: wrong key size")]
	}
	if ($.sliceLen(nonce) == 24) {
		// XChaCha20 uses the ChaCha20 core to mix 16 bytes of the nonce into a
		// derived key, allowing it to operate on a nonce of 24 bytes. See
		// draft-irtf-cfrg-xchacha-01, Section 2.3.
		let __goscriptTuple11: any = HChaCha20(key, $.goSlice(nonce, 0, 16))
		key = __goscriptTuple11[0]
		let cNonce: $.Slice<number> = $.makeSlice<number>(12, undefined, "byte")
		$.copyByteRanges(cNonce, 4, 12, nonce, 16, 24)
		nonce = cNonce
	} else {
		if ($.sliceLen(nonce) != 12) {
			return [null, errors.New("chacha20: wrong nonce size")]
		}
	}

	let __goscriptAssign3_0: $.Slice<number> = $.goSlice(key, undefined, 32)
	let __goscriptAssign3_1: $.Slice<number> = $.goSlice(nonce, undefined, 12)
	key = __goscriptAssign3_0
	nonce = __goscriptAssign3_1;
	;(c$ as Cipher).key = $.arrayValue([$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(key, 0, 4)), $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(key, 4, 8)), $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(key, 8, 12)), $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(key, 12, 16)), $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(key, 16, 20)), $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(key, 20, 24)), $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(key, 24, 28)), $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(key, 28, 32))]);
	;(c$ as Cipher).nonce = $.arrayValue([$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(nonce, 0, 4)), $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(nonce, 4, 8)), $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(nonce, 8, 12))])
	return [c, null]
}

export function quarterRound(a: number, b: number, c: number, d: number): [number, number, number, number] {
	a = $.uint(a + (b), 32)
	d = d ^ (a)
	d = bits.RotateLeft32(d, 16)
	c = $.uint(c + (d), 32)
	b = b ^ (c)
	b = bits.RotateLeft32(b, 12)
	a = $.uint(a + (b), 32)
	d = d ^ (a)
	d = bits.RotateLeft32(d, 8)
	c = $.uint(c + (d), 32)
	b = b ^ (c)
	b = bits.RotateLeft32(b, 7)
	return [a, b, c, d]
}

export function HChaCha20(key: $.Slice<number>, nonce: $.Slice<number>): [$.Slice<number>, $.GoError] {
	// This function is split into a wrapper so that the slice allocation will
	// be inlined, and depending on how the caller uses the return value, won't
	// escape to the heap.
	let out: $.Slice<number> = $.makeSlice<number>(32, undefined, "byte")
	return hChaCha20(out, key, nonce)
}

export function hChaCha20(out: $.Slice<number>, key: $.Slice<number>, nonce: $.Slice<number>): [$.Slice<number>, $.GoError] {
	if ($.sliceLen(key) != 32) {
		return [null, errors.New("chacha20: wrong HChaCha20 key size")]
	}
	if ($.sliceLen(nonce) != 16) {
		return [null, errors.New("chacha20: wrong HChaCha20 nonce size")]
	}

	let x0 = 1634760805
	let x1 = 857760878
	let x2 = 2036477234
	let x3 = 1797285236
	let x4 = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(key, 0, 4))
	let x5 = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(key, 4, 8))
	let x6 = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(key, 8, 12))
	let x7 = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(key, 12, 16))
	let x8 = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(key, 16, 20))
	let x9 = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(key, 20, 24))
	let x10 = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(key, 24, 28))
	let x11 = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(key, 28, 32))
	let x12 = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(nonce, 0, 4))
	let x13 = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(nonce, 4, 8))
	let x14 = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(nonce, 8, 12))
	let x15 = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint32($.goSlice(nonce, 12, 16))

	for (let i = 0; i < 10; i++) {
		// Diagonal round.
		let __goscriptTuple12: any = quarterRound(x0, x4, x8, x12)
		x0 = __goscriptTuple12[0]
		x4 = __goscriptTuple12[1]
		x8 = __goscriptTuple12[2]
		x12 = __goscriptTuple12[3]
		let __goscriptTuple13: any = quarterRound(x1, x5, x9, x13)
		x1 = __goscriptTuple13[0]
		x5 = __goscriptTuple13[1]
		x9 = __goscriptTuple13[2]
		x13 = __goscriptTuple13[3]
		let __goscriptTuple14: any = quarterRound(x2, x6, x10, x14)
		x2 = __goscriptTuple14[0]
		x6 = __goscriptTuple14[1]
		x10 = __goscriptTuple14[2]
		x14 = __goscriptTuple14[3]
		let __goscriptTuple15: any = quarterRound(x3, x7, x11, x15)
		x3 = __goscriptTuple15[0]
		x7 = __goscriptTuple15[1]
		x11 = __goscriptTuple15[2]
		x15 = __goscriptTuple15[3]

		// Column round.
		let __goscriptTuple16: any = quarterRound(x0, x5, x10, x15)
		x0 = __goscriptTuple16[0]
		x5 = __goscriptTuple16[1]
		x10 = __goscriptTuple16[2]
		x15 = __goscriptTuple16[3]
		let __goscriptTuple17: any = quarterRound(x1, x6, x11, x12)
		x1 = __goscriptTuple17[0]
		x6 = __goscriptTuple17[1]
		x11 = __goscriptTuple17[2]
		x12 = __goscriptTuple17[3]
		let __goscriptTuple18: any = quarterRound(x2, x7, x8, x13)
		x2 = __goscriptTuple18[0]
		x7 = __goscriptTuple18[1]
		x8 = __goscriptTuple18[2]
		x13 = __goscriptTuple18[3]
		let __goscriptTuple19: any = quarterRound(x3, x4, x9, x14)
		x3 = __goscriptTuple19[0]
		x4 = __goscriptTuple19[1]
		x9 = __goscriptTuple19[2]
		x14 = __goscriptTuple19[3]
	}

	$.arrayIndex(out!, 31)
	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint32($.goSlice(out, 0, 4), x0)
	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint32($.goSlice(out, 4, 8), x1)
	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint32($.goSlice(out, 8, 12), x2)
	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint32($.goSlice(out, 12, 16), x3)
	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint32($.goSlice(out, 16, 20), x12)
	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint32($.goSlice(out, 20, 24), x13)
	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint32($.goSlice(out, 24, 28), x14)
	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint32($.goSlice(out, 28, 32), x15)
	return [out, null]
}
