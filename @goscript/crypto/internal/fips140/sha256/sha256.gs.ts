// Generated file based on sha256.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as byteorder from "@goscript/crypto/internal/fips140deps/byteorder/index.js"

import * as errors from "@goscript/errors/index.js"

import * as hash2 from "@goscript/hash/index.js"

import * as __goscript_sha256block_noasm from "./sha256block_noasm.gs.ts"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140deps/byteorder/index.js"
import "@goscript/errors/index.js"
import "@goscript/hash/index.js"
import "./sha256block_noasm.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/sha256", ["sha256.Digest"])

export class Digest {
	public get h(): number[] {
		return this._fields.h
	}

	public set h(value: number[]) {
		this._fields.h = value
	}

	public get x(): Uint8Array {
		return this._fields.x
	}

	public set x(value: Uint8Array) {
		this._fields.x = value
	}

	public get nx(): number {
		return this._fields.nx
	}

	public set nx(value: number) {
		this._fields.nx = value
	}

	public get len(): bigint {
		return this._fields.len
	}

	public set len(value: bigint) {
		this._fields.len = value
	}

	public get is224(): boolean {
		return this._fields.is224
	}

	public set is224(value: boolean) {
		this._fields.is224 = value
	}

	public _fields: {
		h: number[]
		x: Uint8Array
		nx: number
		len: bigint
		is224: boolean
	}

	constructor(init?: Partial<{h?: number[], x?: Uint8Array, nx?: number, len?: bigint, is224?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			h: init?.h !== undefined ? $.cloneArrayValue(init.h, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 8)) : $.arrayValue(globalThis.Array.from({ length: 8 }, () => 0)),
			x: init?.x !== undefined ? $.cloneArrayValue(init.x, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64)) : $.arrayValue(new Uint8Array(64)),
			nx: init?.nx ?? (0 as number),
			len: init?.len ?? (0n as bigint),
			is224: init?.is224 ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Digest {
		return new Digest(this, true)
	}

	public __goscriptAssign(source: Digest): void {
		const target = this._fields
		const values = source._fields
		target.h = $.assignFieldValue(target.h, values.h, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 8))
		target.x = $.assignFieldValue(target.x, values.x, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64))
		target.nx = values.nx
		target.len = values.len
		target.is224 = values.is224
	}

	public AppendBinary(b: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const d: Digest | $.VarRef<Digest> | null = this;
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		if ((d$ as Digest).is224) {
			b = $.appendSlice(b, $.stringToBytes("sha\x02"), $.byteSliceHint)
		} else {
			b = $.appendSlice(b, $.stringToBytes("sha\x03"), $.byteSliceHint)
		}
		b = byteorder.BEAppendUint32(b, $.arrayIndex((d$ as Digest).h, 0))
		b = byteorder.BEAppendUint32(b, $.arrayIndex((d$ as Digest).h, 1))
		b = byteorder.BEAppendUint32(b, $.arrayIndex((d$ as Digest).h, 2))
		b = byteorder.BEAppendUint32(b, $.arrayIndex((d$ as Digest).h, 3))
		b = byteorder.BEAppendUint32(b, $.arrayIndex((d$ as Digest).h, 4))
		b = byteorder.BEAppendUint32(b, $.arrayIndex((d$ as Digest).h, 5))
		b = byteorder.BEAppendUint32(b, $.arrayIndex((d$ as Digest).h, 6))
		b = byteorder.BEAppendUint32(b, $.arrayIndex((d$ as Digest).h, 7))
		b = $.appendSlice(b, $.goSlice((d$ as Digest).x, undefined, (d$ as Digest).nx), $.byteSliceHint)
		b = $.appendSlice(b, $.makeSlice<number>($.len((d$ as Digest).x) - (d$ as Digest).nx, undefined, "byte"), $.byteSliceHint)
		b = byteorder.BEAppendUint64(b, (d$ as Digest).len)
		return [b, null]
	}

	public BlockSize(): number {
		const d: Digest | $.VarRef<Digest> | null = this;
		return 64
	}

	public Clone(): [hash2.Cloner | null, $.GoError] {
		const d: Digest | $.VarRef<Digest> | null = this;
		let r = $.varRef(($.pointerValue<Digest>(d)).clone())
		return [$.interfaceValue<hash2.Cloner | null>(r, "*sha256.Digest", /* @__PURE__ */ $.pointerType("sha256.Digest")), null]
	}

	public MarshalBinary(): [$.Slice<number>, $.GoError] {
		const d: Digest | $.VarRef<Digest> | null = this;
		return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).AppendBinary($.makeSlice<number>(0, 108, "byte")) : Digest.prototype.AppendBinary.call(d, $.makeSlice<number>(0, 108, "byte")))
	}

	public Reset(): void {
		let d: Digest | $.VarRef<Digest> | null = this;
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		if (!(d$ as Digest).is224) {
			;(d$ as Digest).h[0] = 1779033703;
			;(d$ as Digest).h[1] = 3144134277;
			;(d$ as Digest).h[2] = 1013904242;
			;(d$ as Digest).h[3] = 2773480762;
			;(d$ as Digest).h[4] = 1359893119;
			;(d$ as Digest).h[5] = 2600822924;
			;(d$ as Digest).h[6] = 528734635;
			;(d$ as Digest).h[7] = 1541459225
		} else {
			;(d$ as Digest).h[0] = 3238371032;
			;(d$ as Digest).h[1] = 914150663;
			;(d$ as Digest).h[2] = 812702999;
			;(d$ as Digest).h[3] = 4144912697;
			;(d$ as Digest).h[4] = 4290775857;
			;(d$ as Digest).h[5] = 1750603025;
			;(d$ as Digest).h[6] = 1694076839;
			;(d$ as Digest).h[7] = 3204075428
		}
		;(d$ as Digest).nx = 0;
		;(d$ as Digest).len = 0n
	}

	public Size(): number {
		const d: Digest | $.VarRef<Digest> | null = this;
		if (!$.pointerValue<Digest>(d).is224) {
			return 32
		}
		return 28
	}

	public Sum(_in: $.Slice<number>): $.Slice<number> {
		const d: Digest | $.VarRef<Digest> | null = this;
		fips140.RecordApproved()
		// Make a copy of d so that caller can keep writing and summing.
		let d0 = $.varRef(($.pointerValue<Digest>(d)).clone())
		let __goscriptShadow0 = d0.value.checkSum()
		if (d0.value.is224) {
			return $.appendSlice(_in, $.goSlice(__goscriptShadow0, undefined, 28), $.byteSliceHint)
		}
		return $.appendSlice(_in, $.goSlice(__goscriptShadow0, undefined, undefined), $.byteSliceHint)
	}

	public UnmarshalBinary(b: $.Slice<number>): $.GoError {
		let d: Digest | $.VarRef<Digest> | null = this;
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		if ((($.sliceLen(b) < 4) || ((d$ as Digest).is224 && (!$.stringEqual($.bytesToString($.goSlice(b, undefined, 4)), "sha\x02")))) || (!(d$ as Digest).is224 && (!$.stringEqual($.bytesToString($.goSlice(b, undefined, 4)), "sha\x03")))) {
			return errors.New("crypto/sha256: invalid hash state identifier")
		}
		if ($.sliceLen(b) != 108) {
			return errors.New("crypto/sha256: invalid hash state size")
		}
		b = $.goSlice(b, 4, undefined)
		let __goscriptTuple0: any = consumeUint32(b)
		b = __goscriptTuple0[0];
		;(d$ as Digest).h[0] = __goscriptTuple0[1]
		let __goscriptTuple1: any = consumeUint32(b)
		b = __goscriptTuple1[0];
		;(d$ as Digest).h[1] = __goscriptTuple1[1]
		let __goscriptTuple2: any = consumeUint32(b)
		b = __goscriptTuple2[0];
		;(d$ as Digest).h[2] = __goscriptTuple2[1]
		let __goscriptTuple3: any = consumeUint32(b)
		b = __goscriptTuple3[0];
		;(d$ as Digest).h[3] = __goscriptTuple3[1]
		let __goscriptTuple4: any = consumeUint32(b)
		b = __goscriptTuple4[0];
		;(d$ as Digest).h[4] = __goscriptTuple4[1]
		let __goscriptTuple5: any = consumeUint32(b)
		b = __goscriptTuple5[0];
		;(d$ as Digest).h[5] = __goscriptTuple5[1]
		let __goscriptTuple6: any = consumeUint32(b)
		b = __goscriptTuple6[0];
		;(d$ as Digest).h[6] = __goscriptTuple6[1]
		let __goscriptTuple7: any = consumeUint32(b)
		b = __goscriptTuple7[0];
		;(d$ as Digest).h[7] = __goscriptTuple7[1]
		b = $.goSlice(b, $.copy($.goSlice((d$ as Digest).x, undefined, undefined), b), undefined)
		let __goscriptTuple8: any = consumeUint64(b)
		b = __goscriptTuple8[0];
		;(d$ as Digest).len = __goscriptTuple8[1];
		;(d$ as Digest).nx = $.int($.uint64Mod((d$ as Digest).len, 64n))
		return null
	}

	public Write(p: $.Slice<number>): [number, $.GoError] {
		let d: Digest | $.VarRef<Digest> | null = this;
		let nn: number = 0
		let err: $.GoError = null! as $.GoError
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		nn = $.sliceLen(p);
		;(d$ as Digest).len = $.uint64Add((d$ as Digest).len, $.uint64(nn))
		if ((d$ as Digest).nx > 0) {
			let n: number = $.copy($.goSlice((d$ as Digest).x, (d$ as Digest).nx, undefined), p);
			;(d$ as Digest).nx = (d$ as Digest).nx + (n)
			if ((d$ as Digest).nx == 64) {
				__goscript_sha256block_noasm.block(d, $.goSlice((d$ as Digest).x, undefined, undefined));
				;(d$ as Digest).nx = 0
			}
			p = $.goSlice(p, n, undefined)
		}
		if ($.sliceLen(p) >= 64) {
			let n: number = $.sliceLen(p) & ~((64 - 1))
			while (n > 65536) {
				__goscript_sha256block_noasm.block(d, $.goSlice(p, undefined, 65536))
				p = $.goSlice(p, 65536, undefined)
				n = n - (65536)
			}
			__goscript_sha256block_noasm.block(d, $.goSlice(p, undefined, n))
			p = $.goSlice(p, n, undefined)
		}
		if ($.sliceLen(p) > 0) {
			;(d$ as Digest).nx = $.copy($.goSlice((d$ as Digest).x, undefined, undefined), p)
		}
		return [nn, err]
	}

	public checkSum(): Uint8Array {
		const d: Digest | $.VarRef<Digest> | null = this;
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		let len = (d$ as Digest).len
		// Padding. Add a 1 bit and 0 bits until 56 bytes mod 64.
		let tmp: Uint8Array = $.arrayValue(new Uint8Array(72))
		tmp[0] = 0x80
		let t: bigint = 0n
		if (($.uint64Mod(len, 64n)) < 56n) {
			t = $.uint64Sub(56n, ($.uint64Mod(len, 64n)))
		} else {
			t = $.uint64Sub(120n, ($.uint64Mod(len, 64n)))
		}

		// Length in bits.
		len = $.uint64Shl(len, 3n)
		let padlen: $.Slice<number> = $.goSlice(tmp, undefined, globalThis.Number($.uint64Add(t, 8n)))
		byteorder.BEPutUint64($.goSlice(padlen, globalThis.Number($.uint64Add(t, 0n)), undefined), len)
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).Write(padlen) : Digest.prototype.Write.call(d, padlen))

		if ((d$ as Digest).nx != 0) {
			$.panic("d.nx != 0")
		}

		let digest: Uint8Array = $.arrayValue(new Uint8Array(32))

		byteorder.BEPutUint32($.goSlice(digest, 0, undefined), $.arrayIndex((d$ as Digest).h, 0))
		byteorder.BEPutUint32($.goSlice(digest, 4, undefined), $.arrayIndex((d$ as Digest).h, 1))
		byteorder.BEPutUint32($.goSlice(digest, 8, undefined), $.arrayIndex((d$ as Digest).h, 2))
		byteorder.BEPutUint32($.goSlice(digest, 12, undefined), $.arrayIndex((d$ as Digest).h, 3))
		byteorder.BEPutUint32($.goSlice(digest, 16, undefined), $.arrayIndex((d$ as Digest).h, 4))
		byteorder.BEPutUint32($.goSlice(digest, 20, undefined), $.arrayIndex((d$ as Digest).h, 5))
		byteorder.BEPutUint32($.goSlice(digest, 24, undefined), $.arrayIndex((d$ as Digest).h, 6))
		if (!(d$ as Digest).is224) {
			byteorder.BEPutUint32($.goSlice(digest, 28, undefined), $.arrayIndex((d$ as Digest).h, 7))
		}

		return $.cloneArrayValue(digest, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
	}

	static __typeInfo = $.registerStructType(
		"sha256.Digest",
		() => new Digest(),
		() => [$.methodSignature("AppendBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Clone", [], ["hash.Cloner", "error"], true), $.methodSignature("MarshalBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Sum", [["in", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("UnmarshalBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["nn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("checkSum", [], [/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)], true)],
		Digest,
		() => [/* @__PURE__ */ $.structField("h", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 8), [0], 0, false, { pkgPath: "crypto/internal/fips140/sha256" }), /* @__PURE__ */ $.structField("x", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64), [1], 32, false, { pkgPath: "crypto/internal/fips140/sha256" }), /* @__PURE__ */ $.structField("nx", /* @__PURE__ */ $.basicType("int"), [2], 96, false, { pkgPath: "crypto/internal/fips140/sha256" }), /* @__PURE__ */ $.structField("len", /* @__PURE__ */ $.basicType("uint64"), [3], 104, false, { pkgPath: "crypto/internal/fips140/sha256" }), /* @__PURE__ */ $.structField("is224", /* @__PURE__ */ $.basicType("bool"), [4], 112, false, { pkgPath: "crypto/internal/fips140/sha256" })]
	)
}

export const size: number = 32

export const size224: number = 28

export const blockSize: number = 64

export const maxAsmIters: number = 1024

export const maxAsmSize: number = 65536

export const chunk: number = 64

export const init0: number = 1779033703

export const init1: number = 3144134277

export const init2: number = 1013904242

export const init3: number = 2773480762

export const init4: number = 1359893119

export const init5: number = 2600822924

export const init6: number = 528734635

export const init7: number = 1541459225

export const init0_224: number = 3238371032

export const init1_224: number = 914150663

export const init2_224: number = 812702999

export const init3_224: number = 4144912697

export const init4_224: number = 4290775857

export const init5_224: number = 1750603025

export const init6_224: number = 1694076839

export const init7_224: number = 3204075428

export const magic224: string = "sha\x02"

export const magic256: string = "sha\x03"

export const marshaledSize: number = 108

export function consumeUint64(b: $.Slice<number>): [$.Slice<number>, bigint] {
	return [$.goSlice(b, 8, undefined), byteorder.BEUint64(b)]
}

export function consumeUint32(b: $.Slice<number>): [$.Slice<number>, number] {
	return [$.goSlice(b, 4, undefined), byteorder.BEUint32(b)]
}

export function New(): Digest | $.VarRef<Digest> | null {
	let d: Digest | $.VarRef<Digest> | null = new Digest()
	void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).Reset() : Digest.prototype.Reset.call(d))
	return d
}

export function New224(): Digest | $.VarRef<Digest> | null {
	let d: Digest | $.VarRef<Digest> | null = new Digest()
	$.pointerValue<Digest>(d).is224 = true
	void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).Reset() : Digest.prototype.Reset.call(d))
	return d
}
