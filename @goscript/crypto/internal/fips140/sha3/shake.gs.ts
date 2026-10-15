// Generated file based on shake.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as byteorder from "@goscript/crypto/internal/fips140deps/byteorder/index.js"

import * as errors from "@goscript/errors/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as __goscript_hashes from "./hashes.gs.ts"

import * as __goscript_sha3 from "./sha3.gs.ts"

import * as __goscript_sha3_noasm from "./sha3_noasm.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140deps/byteorder/index.js"
import "@goscript/errors/index.js"
import "@goscript/math/bits/index.js"
import "./hashes.gs.ts"
import "./sha3.gs.ts"
import "./sha3_noasm.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/sha3", ["sha3.SHAKE"])

export class SHAKE {
	public get d(): __goscript_sha3.Digest {
		return this._fields.d
	}

	public set d(value: __goscript_sha3.Digest) {
		this._fields.d = value
	}

	// initBlock is the cSHAKE specific initialization set of bytes. It is initialized
	// by newCShake function and stores concatenation of N followed by S, encoded
	// by the method specified in 3.3 of [1].
	// It is stored here in order for Reset() to be able to put context into
	// initial state.
	public get initBlock(): $.Slice<number> {
		return this._fields.initBlock
	}

	public set initBlock(value: $.Slice<number>) {
		this._fields.initBlock = value
	}

	public _fields: {
		d: __goscript_sha3.Digest
		initBlock: $.Slice<number>
	}

	constructor(init?: Partial<{d?: __goscript_sha3.Digest, initBlock?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			d: init?.d ? init.d.clone() : new __goscript_sha3.Digest(undefined, true),
			initBlock: init?.initBlock ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SHAKE {
		return new SHAKE(this, true)
	}

	public __goscriptAssign(source: SHAKE): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.d, values.d)
		target.initBlock = values.initBlock
	}

	public AppendBinary(b: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const s: SHAKE | $.VarRef<SHAKE> | null = this;
		const s$: SHAKE = s == null ? $.pointerTarget<SHAKE>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<SHAKE>(s)
		let __goscriptTuple0: any = (s$ as SHAKE).d.AppendBinary(b)
		b = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		b = $.appendSlice(b, (s$ as SHAKE).initBlock, $.byteSliceHint)
		return [b, null]
	}

	public BlockSize(): number {
		const s: SHAKE | $.VarRef<SHAKE> | null = this;
		return $.pointerValue<SHAKE>(s).d.BlockSize()
	}

	public Clone(): SHAKE | $.VarRef<SHAKE> | null {
		const s: SHAKE | $.VarRef<SHAKE> | null = this;
		let ret = $.varRef(($.pointerValue<SHAKE>(s)).clone())
		return ret
	}

	public MarshalBinary(): [$.Slice<number>, $.GoError] {
		const s: SHAKE | $.VarRef<SHAKE> | null = this;
		return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SHAKE).AppendBinary($.makeSlice<number>(0, 207 + $.sliceLen($.pointerValue<SHAKE>(s).initBlock), "byte")) : SHAKE.prototype.AppendBinary.call(s, $.makeSlice<number>(0, 207 + $.sliceLen($.pointerValue<SHAKE>(s).initBlock), "byte")))
	}

	public Read(out: $.Slice<number>): [number, $.GoError] {
		const s: SHAKE | $.VarRef<SHAKE> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		fips140.RecordApproved()
		// Note that read is not exposed on Digest since SHA-3 does not offer
		// variable output length. It is only used internally by Sum.
		return $.pointerValue<SHAKE>(s).d.read(out)
	}

	public Reset(): void {
		const s: SHAKE | $.VarRef<SHAKE> | null = this;
		const s$: SHAKE = s == null ? $.pointerTarget<SHAKE>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<SHAKE>(s)
		void (s$ as SHAKE).d.Reset()
		if ($.sliceLen((s$ as SHAKE).initBlock) != 0) {
			bytepadWrite(s, (s$ as SHAKE).initBlock, (s$ as SHAKE).d.rate)
		}
	}

	public Size(): number {
		const s: SHAKE | $.VarRef<SHAKE> | null = this;
		return $.pointerValue<SHAKE>(s).d.Size()
	}

	public Sum(_in: $.Slice<number>): $.Slice<number> {
		const s: SHAKE | $.VarRef<SHAKE> | null = this;
		return $.pointerValue<SHAKE>(s).d.Sum(_in)
	}

	public UnmarshalBinary(b: $.Slice<number>): $.GoError {
		let s: SHAKE | $.VarRef<SHAKE> | null = this;
		const s$: SHAKE = s == null ? $.pointerTarget<SHAKE>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<SHAKE>(s)
		if ($.sliceLen(b) < 207) {
			return errors.New("sha3: invalid hash state")
		}
		{
			let err = (s$ as SHAKE).d.UnmarshalBinary($.goSlice(b, undefined, 207))
			if (err != null) {
				return err
			}
		}
		;(s$ as SHAKE).initBlock = bytes.Clone($.goSlice(b, 207, undefined))
		return null
	}

	public Write(p: $.Slice<number>): [number, $.GoError] {
		const s: SHAKE | $.VarRef<SHAKE> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<SHAKE>(s).d.Write(p)
	}

	static __typeInfo = $.registerStructType(
		"sha3.SHAKE",
		() => new SHAKE(),
		() => [$.methodSignature("AppendBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Clone", [], [/* @__PURE__ */ $.pointerType("sha3.SHAKE")], true), $.methodSignature("MarshalBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Read", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Sum", [["in", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("UnmarshalBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		SHAKE,
		() => [/* @__PURE__ */ $.structField("d", "sha3.Digest", [0], 0, false, { pkgPath: "crypto/internal/fips140/sha3" }), /* @__PURE__ */ $.structField("initBlock", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 240, false, { pkgPath: "crypto/internal/fips140/sha3" })]
	)
}

export function bytepadWrite(c: SHAKE | $.VarRef<SHAKE> | null, data: $.Slice<number>, rate: number): void {
	let rateEnc: $.Slice<number> = leftEncode($.uint64(rate))
	void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as SHAKE).Write(rateEnc) : SHAKE.prototype.Write.call(c, rateEnc))
	void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as SHAKE).Write(data) : SHAKE.prototype.Write.call(c, data))
	{
		let padlen = rate - (($.sliceLen(rateEnc) + $.sliceLen(data)) % rate)
		if (padlen < rate) {
			const maxRate: number = 168
			void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as SHAKE).Write($.makeSlice<number>(padlen, 168, "byte")) : SHAKE.prototype.Write.call(c, $.makeSlice<number>(padlen, 168, "byte")))
		}
	}
}

export function leftEncode(x: bigint): $.Slice<number> {
	// Let n be the smallest positive integer for which 2^(8n) > x.
	let n = globalThis.Math.trunc((bits.Len64(x) + 7) / 8)
	if (n == 0) {
		n = 1
	}
	// Return n || x with n as a byte and x an n bytes in big-endian order.
	let b: $.Slice<number> = $.makeSlice<number>(9, undefined, "byte")
	byteorder.BEPutUint64($.goSlice(b, 1, undefined), x)
	b = $.goSlice(b, (9 - n) - 1, undefined)
	$.sliceElems(b!)[$.sliceSlot(b!, 0)] = $.uint(n, 8)
	return b
}

export function newCShake(c: SHAKE | $.VarRef<SHAKE> | null, N: $.Slice<number>, S: $.Slice<number>, rate: number, outputLen: number, dsbyte: number): SHAKE | $.VarRef<SHAKE> | null {
	const c$: SHAKE = c == null ? $.pointerTarget<SHAKE>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<SHAKE>(c)
	$.assignStruct((c$ as SHAKE).d, new __goscript_sha3.Digest({rate: rate, outputLen: outputLen, dsbyte: dsbyte}, true));
	;(c$ as SHAKE).initBlock = $.makeSlice<number>(0, ((9 + $.sliceLen(N)) + 9) + $.sliceLen(S), "byte");
	;(c$ as SHAKE).initBlock = $.appendSlice((c$ as SHAKE).initBlock, leftEncode($.uint64Mul($.uint64($.sliceLen(N)), 8n)), $.byteSliceHint);
	;(c$ as SHAKE).initBlock = $.appendSlice((c$ as SHAKE).initBlock, N, $.byteSliceHint);
	;(c$ as SHAKE).initBlock = $.appendSlice((c$ as SHAKE).initBlock, leftEncode($.uint64Mul($.uint64($.sliceLen(S)), 8n)), $.byteSliceHint);
	;(c$ as SHAKE).initBlock = $.appendSlice((c$ as SHAKE).initBlock, S, $.byteSliceHint)
	bytepadWrite(c, (c$ as SHAKE).initBlock, (c$ as SHAKE).d.rate)
	return c
}

export function NewShake128(): SHAKE | $.VarRef<SHAKE> | null {
	return new SHAKE({d: new __goscript_sha3.Digest({rate: 168, outputLen: 32, dsbyte: 31}, true)})
}

export function NewShake256(): SHAKE | $.VarRef<SHAKE> | null {
	return new SHAKE({d: new __goscript_sha3.Digest({rate: 136, outputLen: 64, dsbyte: 31}, true)})
}

export function NewCShake128(N: $.Slice<number>, S: $.Slice<number>): SHAKE | $.VarRef<SHAKE> | null {
	// The actual logic is in a separate function to outline this allocation.
	let c: SHAKE | $.VarRef<SHAKE> | null = new SHAKE()
	return newCShake128(c, N, S)
}

export function newCShake128(c: SHAKE | $.VarRef<SHAKE> | null, N: $.Slice<number>, S: $.Slice<number>): SHAKE | $.VarRef<SHAKE> | null {
	if (($.sliceLen(N) == 0) && ($.sliceLen(S) == 0)) {
		$.assignStruct($.pointerValue<SHAKE>(c), $.pointerValue<SHAKE>(NewShake128()))
		return c
	}
	return newCShake(c, N, S, 168, 32, 4)
}

export function NewCShake256(N: $.Slice<number>, S: $.Slice<number>): SHAKE | $.VarRef<SHAKE> | null {
	// The actual logic is in a separate function to outline this allocation.
	let c: SHAKE | $.VarRef<SHAKE> | null = new SHAKE()
	return newCShake256(c, N, S)
}

export function newCShake256(c: SHAKE | $.VarRef<SHAKE> | null, N: $.Slice<number>, S: $.Slice<number>): SHAKE | $.VarRef<SHAKE> | null {
	if (($.sliceLen(N) == 0) && ($.sliceLen(S) == 0)) {
		$.assignStruct($.pointerValue<SHAKE>(c), $.pointerValue<SHAKE>(NewShake256()))
		return c
	}
	return newCShake(c, N, S, 136, 64, 4)
}
