// Generated file based on sha3.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as subtle from "@goscript/crypto/internal/fips140/subtle/index.js"

import * as errors from "@goscript/errors/index.js"

import * as __goscript_hashes from "./hashes.gs.ts"

import * as __goscript_sha3_noasm from "./sha3_noasm.gs.ts"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/subtle/index.js"
import "@goscript/errors/index.js"
import "./hashes.gs.ts"
import "./sha3_noasm.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/sha3", ["sha3.spongeDirection", "sha3.Digest"])

export type spongeDirection = number

export class Digest {
	public get a(): Uint8Array {
		return this._fields.a
	}

	public set a(value: Uint8Array) {
		this._fields.a = value
	}

	// a[n:rate] is the buffer. If absorbing, it's the remaining space to XOR
	// into before running the permutation. If squeezing, it's the remaining
	// output to produce before running the permutation.
	public get n(): number {
		return this._fields.n
	}

	public set n(value: number) {
		this._fields.n = value
	}

	// a[n:rate] is the buffer. If absorbing, it's the remaining space to XOR
	// into before running the permutation. If squeezing, it's the remaining
	// output to produce before running the permutation.
	public get rate(): number {
		return this._fields.rate
	}

	public set rate(value: number) {
		this._fields.rate = value
	}

	// dsbyte contains the "domain separation" bits and the first bit of
	// the padding. Sections 6.1 and 6.2 of [1] separate the outputs of the
	// SHA-3 and SHAKE functions by appending bitstrings to the message.
	// Using a little-endian bit-ordering convention, these are "01" for SHA-3
	// and "1111" for SHAKE, or 00000010b and 00001111b, respectively. Then the
	// padding rule from section 5.1 is applied to pad the message to a multiple
	// of the rate, which involves adding a "1" bit, zero or more "0" bits, and
	// a final "1" bit. We merge the first "1" bit from the padding into dsbyte,
	// giving 00000110b (0x06) and 00011111b (0x1f).
	// [1] http://csrc.nist.gov/publications/drafts/fips-202/fips_202_draft.pdf
	//     "Draft FIPS 202: SHA-3 Standard: Permutation-Based Hash and
	//      Extendable-Output Functions (May 2014)"
	public get dsbyte(): number {
		return this._fields.dsbyte
	}

	public set dsbyte(value: number) {
		this._fields.dsbyte = value
	}

	public get outputLen(): number {
		return this._fields.outputLen
	}

	public set outputLen(value: number) {
		this._fields.outputLen = value
	}

	public get state(): spongeDirection {
		return this._fields.state
	}

	public set state(value: spongeDirection) {
		this._fields.state = value
	}

	public _fields: {
		a: Uint8Array
		n: number
		rate: number
		dsbyte: number
		outputLen: number
		state: spongeDirection
	}

	constructor(init?: Partial<{a?: Uint8Array, n?: number, rate?: number, dsbyte?: number, outputLen?: number, state?: spongeDirection}>, __goscriptValue?: boolean) {
		this._fields = {
			a: init?.a !== undefined ? $.cloneArrayValue(init.a, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 200)) : $.arrayValue(new Uint8Array(200)),
			n: init?.n ?? (0 as number),
			rate: init?.rate ?? (0 as number),
			dsbyte: init?.dsbyte ?? (0 as number),
			outputLen: init?.outputLen ?? (0 as number),
			state: init?.state ?? (0 as spongeDirection)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Digest {
		return new Digest(this, true)
	}

	public __goscriptAssign(source: Digest): void {
		const target = this._fields
		const values = source._fields
		target.a = $.assignFieldValue(target.a, values.a, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 200))
		target.n = values.n
		target.rate = values.rate
		target.dsbyte = values.dsbyte
		target.outputLen = values.outputLen
		target.state = values.state
	}

	public AppendBinary(b: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const d: Digest | $.VarRef<Digest> | null = this;
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		switch ((d$ as Digest).dsbyte) {
			case 6:
			{
				b = $.appendSlice(b, $.stringToBytes("sha\x08"), $.byteSliceHint)
				break
			}
			case 31:
			{
				b = $.appendSlice(b, $.stringToBytes("sha\t"), $.byteSliceHint)
				break
			}
			case 4:
			{
				b = $.appendSlice(b, $.stringToBytes("sha\n"), $.byteSliceHint)
				break
			}
			case 1:
			{
				b = $.appendSlice(b, $.stringToBytes("sha\x0b"), $.byteSliceHint)
				break
			}
			default:
			{
				$.panic("unknown dsbyte")
				break
			}
		}
		// rate is at most 168, and n is at most rate.
		b = $.append(b, $.uint($.uint((d$ as Digest).rate, 8), 8), $.byteSliceHint)
		b = $.appendSlice(b, $.goSlice((d$ as Digest).a, undefined, undefined), $.byteSliceHint)
		b = $.append(b, $.uint($.uint((d$ as Digest).n, 8), 8), $.uint($.uint((d$ as Digest).state, 8), 8), $.byteSliceHint)
		return [b, null]
	}

	public BlockSize(): number {
		const d: Digest | $.VarRef<Digest> | null = this;
		return $.pointerValue<Digest>(d).rate
	}

	public Clone(): Digest | $.VarRef<Digest> | null {
		const d: Digest | $.VarRef<Digest> | null = this;
		let ret = $.varRef(($.pointerValue<Digest>(d)).clone())
		return ret
	}

	public MarshalBinary(): [$.Slice<number>, $.GoError] {
		const d: Digest | $.VarRef<Digest> | null = this;
		return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).AppendBinary($.makeSlice<number>(0, 207, "byte")) : Digest.prototype.AppendBinary.call(d, $.makeSlice<number>(0, 207, "byte")))
	}

	public Reset(): void {
		let d: Digest | $.VarRef<Digest> | null = this;
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		// Zero the permutation's state.
		$.clear($.goSlice((d$ as Digest).a, undefined, undefined));
		;(d$ as Digest).state = 0;
		;(d$ as Digest).n = 0
	}

	public Size(): number {
		const d: Digest | $.VarRef<Digest> | null = this;
		return $.pointerValue<Digest>(d).outputLen
	}

	public Sum(b: $.Slice<number>): $.Slice<number> {
		const d: Digest | $.VarRef<Digest> | null = this;
		fips140.RecordApproved()
		return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).sum(b) : Digest.prototype.sum.call(d, b))
	}

	public UnmarshalBinary(b: $.Slice<number>): $.GoError {
		let d: Digest | $.VarRef<Digest> | null = this;
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		if ($.sliceLen(b) != 207) {
			return errors.New("sha3: invalid hash state")
		}

		let magic = $.bytesToString($.goSlice(b, undefined, 4))
		b = $.goSlice(b, 4, undefined)
		switch ((true as boolean)) {
			case ($.stringEqual(magic, "sha\x08")) && ((d$ as Digest).dsbyte == 6):
			{
				break
			}
			case ($.stringEqual(magic, "sha\t")) && ((d$ as Digest).dsbyte == 31):
			{
				break
			}
			case ($.stringEqual(magic, "sha\n")) && ((d$ as Digest).dsbyte == 4):
			{
				break
			}
			case ($.stringEqual(magic, "sha\x0b")) && ((d$ as Digest).dsbyte == 1):
			{
				break
			}
			default:
			{
				return errors.New("sha3: invalid hash state identifier")
				break
			}
		}

		let rate = $.int($.arrayIndex(b!, 0))
		b = $.goSlice(b, 1, undefined)
		if (rate != (d$ as Digest).rate) {
			return errors.New("sha3: invalid hash state function")
		}

		$.copy($.goSlice((d$ as Digest).a, undefined, undefined), b)
		b = $.goSlice(b, $.len((d$ as Digest).a), undefined)

		let n = $.int($.arrayIndex(b!, 0))
		let state = $.int($.arrayIndex(b!, 1))
		if (n > (d$ as Digest).rate) {
			return errors.New("sha3: invalid hash state")
		}
		;(d$ as Digest).n = n
		if ((state != 0) && (state != 1)) {
			return errors.New("sha3: invalid hash state")
		}
		;(d$ as Digest).state = state

		return null
	}

	public Write(p: $.Slice<number>): [number, $.GoError] {
		const d: Digest | $.VarRef<Digest> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).write(p) : Digest.prototype.write.call(d, p))
	}

	public padAndPermute(): void {
		let d: Digest | $.VarRef<Digest> | null = this;
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d);
		// Pad with this instance's domain-separator bits. We know that there's
		// at least one byte of space in the sponge because, if it were full,
		// permute would have been called to empty it. dsbyte also contains the
		// first one bit for the padding. See the comment in the state struct.
		;(d$ as Digest).a[(d$ as Digest).n] = (d$ as Digest).a[(d$ as Digest).n] ^ ((d$ as Digest).dsbyte);
		// This adds the final one bit for the padding. Because of the way that
		// bits are numbered from the LSB upwards, the final bit is the MSB of
		// the last byte.
		;(d$ as Digest).a[(d$ as Digest).rate - 1] = (d$ as Digest).a[(d$ as Digest).rate - 1] ^ (0x80)
		// Apply the permutation
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).permute() : Digest.prototype.permute.call(d));
		;(d$ as Digest).state = 1
	}

	public permute(): void {
		let d: Digest | $.VarRef<Digest> | null = this;
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		__goscript_sha3_noasm.keccakF1600($.fieldRef((d$ as Digest)._fields, "a"));
		;(d$ as Digest).n = 0
	}

	public read(out: $.Slice<number>): [number, $.GoError] {
		const d: Digest | $.VarRef<Digest> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).readGeneric(out) : Digest.prototype.readGeneric.call(d, out))
	}

	public readGeneric(out: $.Slice<number>): [number, $.GoError] {
		let d: Digest | $.VarRef<Digest> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		// If we're still absorbing, pad and apply the permutation.
		if ((d$ as Digest).state == 0) {
			void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).padAndPermute() : Digest.prototype.padAndPermute.call(d))
		}

		n = $.sliceLen(out)

		// Now, do the squeezing.
		while ($.sliceLen(out) > 0) {
			// Apply the permutation if we've squeezed the sponge dry.
			if ((d$ as Digest).n == (d$ as Digest).rate) {
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).permute() : Digest.prototype.permute.call(d))
			}

			let x: number = $.copy(out, $.goSlice((d$ as Digest).a, (d$ as Digest).n, (d$ as Digest).rate));
			;(d$ as Digest).n = (d$ as Digest).n + (x)
			out = $.goSlice(out, x, undefined)
		}

		return [n, err]
	}

	public sum(b: $.Slice<number>): $.Slice<number> {
		const d: Digest | $.VarRef<Digest> | null = this;
		return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).sumGeneric(b) : Digest.prototype.sumGeneric.call(d, b))
	}

	public sumGeneric(b: $.Slice<number>): $.Slice<number> {
		const d: Digest | $.VarRef<Digest> | null = this;
		if ($.pointerValue<Digest>(d).state != 0) {
			$.panic("sha3: Sum after Read")
		}

		// Make a copy of the original hash so that caller can keep writing
		// and summing.
		let dup: Digest | $.VarRef<Digest> | null = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).Clone() : Digest.prototype.Clone.call(d))
		let hash: $.Slice<number> = $.makeSlice<number>($.pointerValue<Digest>(dup).outputLen, 64, "byte")
		void (dup !== null && (dup as any).__isVarRef !== true && (dup as any).__goValue === undefined ? ((dup as any) as Digest).read(hash) : Digest.prototype.read.call(dup, hash))
		return $.appendSlice(b, hash, $.byteSliceHint)
	}

	public write(p: $.Slice<number>): [number, $.GoError] {
		const d: Digest | $.VarRef<Digest> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).writeGeneric(p) : Digest.prototype.writeGeneric.call(d, p))
	}

	public writeGeneric(p: $.Slice<number>): [number, $.GoError] {
		let d: Digest | $.VarRef<Digest> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		if ((d$ as Digest).state != 0) {
			$.panic("sha3: Write after Read")
		}

		n = $.sliceLen(p)

		while ($.sliceLen(p) > 0) {
			let x: number = subtle.XORBytes($.goSlice((d$ as Digest).a, (d$ as Digest).n, (d$ as Digest).rate), $.goSlice((d$ as Digest).a, (d$ as Digest).n, (d$ as Digest).rate), p);
			;(d$ as Digest).n = (d$ as Digest).n + (x)
			p = $.goSlice(p, x, undefined)

			// If the sponge is full, apply the permutation.
			if ((d$ as Digest).n == (d$ as Digest).rate) {
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).permute() : Digest.prototype.permute.call(d))
			}
		}

		return [n, err]
	}

	static __typeInfo = $.registerStructType(
		"sha3.Digest",
		() => new Digest(),
		() => [$.methodSignature("AppendBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Clone", [], [/* @__PURE__ */ $.pointerType("sha3.Digest")], true), $.methodSignature("MarshalBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("UnmarshalBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("padAndPermute", [], [], true), $.methodSignature("permute", [], [], true), $.methodSignature("read", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("readGeneric", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("sumGeneric", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("writeGeneric", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		Digest,
		() => [/* @__PURE__ */ $.structField("a", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 200), [0], 0, false, { pkgPath: "crypto/internal/fips140/sha3" }), /* @__PURE__ */ $.structField("n", /* @__PURE__ */ $.basicType("int"), [1], 200, false, { pkgPath: "crypto/internal/fips140/sha3" }), /* @__PURE__ */ $.structField("rate", /* @__PURE__ */ $.basicType("int"), [2], 208, false, { pkgPath: "crypto/internal/fips140/sha3" }), /* @__PURE__ */ $.structField("dsbyte", /* @__PURE__ */ $.basicType("uint8"), [3], 216, false, { pkgPath: "crypto/internal/fips140/sha3" }), /* @__PURE__ */ $.structField("outputLen", /* @__PURE__ */ $.basicType("int"), [4], 224, false, { pkgPath: "crypto/internal/fips140/sha3" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "sha3.spongeDirection"), [5], 232, false, { pkgPath: "crypto/internal/fips140/sha3" })]
	)
}

export const spongeAbsorbing: spongeDirection = 0

export const spongeSqueezing: spongeDirection = 1

export const magicSHA3: string = "sha\x08"

export const magicShake: string = "sha\t"

export const magicCShake: string = "sha\n"

export const magicKeccak: string = "sha\x0b"

export const marshaledSize: number = 207
