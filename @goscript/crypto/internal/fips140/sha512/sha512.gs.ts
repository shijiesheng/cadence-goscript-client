// Generated file based on sha512.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as byteorder from "@goscript/crypto/internal/fips140deps/byteorder/index.js"

import * as errors from "@goscript/errors/index.js"

import * as hash2 from "@goscript/hash/index.js"

import * as __goscript_sha512block_noasm from "./sha512block_noasm.gs.ts"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140deps/byteorder/index.js"
import "@goscript/errors/index.js"
import "@goscript/hash/index.js"
import "./sha512block_noasm.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/sha512", ["sha512.Digest"])

export class Digest {
	public get h(): bigint[] {
		return this._fields.h
	}

	public set h(value: bigint[]) {
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

	public get size(): number {
		return this._fields.size
	}

	public set size(value: number) {
		this._fields.size = value
	}

	public _fields: {
		h: bigint[]
		x: Uint8Array
		nx: number
		len: bigint
		size: number
	}

	constructor(init?: Partial<{h?: bigint[], x?: Uint8Array, nx?: number, len?: bigint, size?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			h: init?.h !== undefined ? $.cloneArrayValue(init.h, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 8)) : $.arrayValue(globalThis.Array.from({ length: 8 }, () => 0n)),
			x: init?.x !== undefined ? $.cloneArrayValue(init.x, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 128)) : $.arrayValue(new Uint8Array(128)),
			nx: init?.nx ?? (0 as number),
			len: init?.len ?? (0n as bigint),
			size: init?.size ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Digest {
		return new Digest(this, true)
	}

	public __goscriptAssign(source: Digest): void {
		const target = this._fields
		const values = source._fields
		target.h = $.assignFieldValue(target.h, values.h, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 8))
		target.x = $.assignFieldValue(target.x, values.x, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 128))
		target.nx = values.nx
		target.len = values.len
		target.size = values.size
	}

	public AppendBinary(b: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const d: Digest | $.VarRef<Digest> | null = this;
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		switch ((d$ as Digest).size) {
			case 48:
			{
				b = $.appendSlice(b, $.stringToBytes("sha\x04"), $.byteSliceHint)
				break
			}
			case 28:
			{
				b = $.appendSlice(b, $.stringToBytes("sha\x05"), $.byteSliceHint)
				break
			}
			case 32:
			{
				b = $.appendSlice(b, $.stringToBytes("sha\x06"), $.byteSliceHint)
				break
			}
			case 64:
			{
				b = $.appendSlice(b, $.stringToBytes("sha\x07"), $.byteSliceHint)
				break
			}
			default:
			{
				$.panic("unknown size")
				break
			}
		}
		b = byteorder.BEAppendUint64(b, $.arrayIndex((d$ as Digest).h, 0))
		b = byteorder.BEAppendUint64(b, $.arrayIndex((d$ as Digest).h, 1))
		b = byteorder.BEAppendUint64(b, $.arrayIndex((d$ as Digest).h, 2))
		b = byteorder.BEAppendUint64(b, $.arrayIndex((d$ as Digest).h, 3))
		b = byteorder.BEAppendUint64(b, $.arrayIndex((d$ as Digest).h, 4))
		b = byteorder.BEAppendUint64(b, $.arrayIndex((d$ as Digest).h, 5))
		b = byteorder.BEAppendUint64(b, $.arrayIndex((d$ as Digest).h, 6))
		b = byteorder.BEAppendUint64(b, $.arrayIndex((d$ as Digest).h, 7))
		b = $.appendSlice(b, $.goSlice((d$ as Digest).x, undefined, (d$ as Digest).nx), $.byteSliceHint)
		b = $.appendSlice(b, $.makeSlice<number>($.len((d$ as Digest).x) - (d$ as Digest).nx, undefined, "byte"), $.byteSliceHint)
		b = byteorder.BEAppendUint64(b, (d$ as Digest).len)
		return [b, null]
	}

	public BlockSize(): number {
		const d: Digest | $.VarRef<Digest> | null = this;
		return 128
	}

	public Clone(): [hash2.Cloner | null, $.GoError] {
		const d: Digest | $.VarRef<Digest> | null = this;
		let r = $.varRef(($.pointerValue<Digest>(d)).clone())
		return [$.interfaceValue<hash2.Cloner | null>(r, "*sha512.Digest", /* @__PURE__ */ $.pointerType("sha512.Digest")), null]
	}

	public MarshalBinary(): [$.Slice<number>, $.GoError] {
		const d: Digest | $.VarRef<Digest> | null = this;
		return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).AppendBinary($.makeSlice<number>(0, 204, "byte")) : Digest.prototype.AppendBinary.call(d, $.makeSlice<number>(0, 204, "byte")))
	}

	public Reset(): void {
		let d: Digest | $.VarRef<Digest> | null = this;
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		switch ((d$ as Digest).size) {
			case 48:
			{
				;(d$ as Digest).h[0] = 14680500436340154072n;
				;(d$ as Digest).h[1] = 7105036623409894663n;
				;(d$ as Digest).h[2] = 10473403895298186519n;
				;(d$ as Digest).h[3] = 1526699215303891257n;
				;(d$ as Digest).h[4] = 7436329637833083697n;
				;(d$ as Digest).h[5] = 10282925794625328401n;
				;(d$ as Digest).h[6] = 15784041429090275239n;
				;(d$ as Digest).h[7] = 5167115440072839076n
				break
			}
			case 28:
			{
				;(d$ as Digest).h[0] = 10105294471447203234n;
				;(d$ as Digest).h[1] = 8350123849800275158n;
				;(d$ as Digest).h[2] = 2160240930085379202n;
				;(d$ as Digest).h[3] = 7466358040605728719n;
				;(d$ as Digest).h[4] = 1111592415079452072n;
				;(d$ as Digest).h[5] = 8638871050018654530n;
				;(d$ as Digest).h[6] = 4583966954114332360n;
				;(d$ as Digest).h[7] = 1230299281376055969n
				break
			}
			case 32:
			{
				;(d$ as Digest).h[0] = 2463787394917988140n;
				;(d$ as Digest).h[1] = 11481187982095705282n;
				;(d$ as Digest).h[2] = 2563595384472711505n;
				;(d$ as Digest).h[3] = 10824532655140301501n;
				;(d$ as Digest).h[4] = 10819967247969091555n;
				;(d$ as Digest).h[5] = 13717434660681038226n;
				;(d$ as Digest).h[6] = 3098927326965381290n;
				;(d$ as Digest).h[7] = 1060366662362279074n
				break
			}
			case 64:
			{
				;(d$ as Digest).h[0] = 7640891576956012808n;
				;(d$ as Digest).h[1] = 13503953896175478587n;
				;(d$ as Digest).h[2] = 4354685564936845355n;
				;(d$ as Digest).h[3] = 11912009170470909681n;
				;(d$ as Digest).h[4] = 5840696475078001361n;
				;(d$ as Digest).h[5] = 11170449401992604703n;
				;(d$ as Digest).h[6] = 2270897969802886507n;
				;(d$ as Digest).h[7] = 6620516959819538809n
				break
			}
			default:
			{
				$.panic("unknown size")
				break
			}
		}
		;(d$ as Digest).nx = 0;
		;(d$ as Digest).len = 0n
	}

	public Size(): number {
		const d: Digest | $.VarRef<Digest> | null = this;
		return $.pointerValue<Digest>(d).size
	}

	public Sum(_in: $.Slice<number>): $.Slice<number> {
		const d: Digest | $.VarRef<Digest> | null = this;
		fips140.RecordApproved()
		// Make a copy of d so that caller can keep writing and summing.
		let d0: Digest | $.VarRef<Digest> | null = new Digest()
		$.assignStruct($.pointerValue<Digest>(d0), $.pointerValue<Digest>(d))
		let __goscriptShadow0 = (d0 !== null && (d0 as any).__isVarRef !== true && (d0 as any).__goValue === undefined ? ((d0 as any) as Digest).checkSum() : Digest.prototype.checkSum.call(d0))
		return $.appendSlice(_in, $.goSlice(__goscriptShadow0, undefined, $.pointerValue<Digest>(d).size), $.byteSliceHint)
	}

	public UnmarshalBinary(b: $.Slice<number>): $.GoError {
		let d: Digest | $.VarRef<Digest> | null = this;
		const d$: Digest = d == null ? $.pointerTarget<Digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digest>(d)
		if ($.sliceLen(b) < 4) {
			return errors.New("crypto/sha512: invalid hash state identifier")
		}
		switch ((true as boolean)) {
			case ((d$ as Digest).size == 48) && ($.stringEqual($.bytesToString($.goSlice(b, undefined, 4)), "sha\x04")):
			{
				break
			}
			case ((d$ as Digest).size == 28) && ($.stringEqual($.bytesToString($.goSlice(b, undefined, 4)), "sha\x05")):
			{
				break
			}
			case ((d$ as Digest).size == 32) && ($.stringEqual($.bytesToString($.goSlice(b, undefined, 4)), "sha\x06")):
			{
				break
			}
			case ((d$ as Digest).size == 64) && ($.stringEqual($.bytesToString($.goSlice(b, undefined, 4)), "sha\x07")):
			{
				break
			}
			default:
			{
				return errors.New("crypto/sha512: invalid hash state identifier")
				break
			}
		}
		if ($.sliceLen(b) != 204) {
			return errors.New("crypto/sha512: invalid hash state size")
		}
		b = $.goSlice(b, 4, undefined)
		let __goscriptTuple0: any = consumeUint64(b)
		b = __goscriptTuple0[0];
		;(d$ as Digest).h[0] = __goscriptTuple0[1]
		let __goscriptTuple1: any = consumeUint64(b)
		b = __goscriptTuple1[0];
		;(d$ as Digest).h[1] = __goscriptTuple1[1]
		let __goscriptTuple2: any = consumeUint64(b)
		b = __goscriptTuple2[0];
		;(d$ as Digest).h[2] = __goscriptTuple2[1]
		let __goscriptTuple3: any = consumeUint64(b)
		b = __goscriptTuple3[0];
		;(d$ as Digest).h[3] = __goscriptTuple3[1]
		let __goscriptTuple4: any = consumeUint64(b)
		b = __goscriptTuple4[0];
		;(d$ as Digest).h[4] = __goscriptTuple4[1]
		let __goscriptTuple5: any = consumeUint64(b)
		b = __goscriptTuple5[0];
		;(d$ as Digest).h[5] = __goscriptTuple5[1]
		let __goscriptTuple6: any = consumeUint64(b)
		b = __goscriptTuple6[0];
		;(d$ as Digest).h[6] = __goscriptTuple6[1]
		let __goscriptTuple7: any = consumeUint64(b)
		b = __goscriptTuple7[0];
		;(d$ as Digest).h[7] = __goscriptTuple7[1]
		b = $.goSlice(b, $.copy($.goSlice((d$ as Digest).x, undefined, undefined), b), undefined)
		let __goscriptTuple8: any = consumeUint64(b)
		b = __goscriptTuple8[0];
		;(d$ as Digest).len = __goscriptTuple8[1];
		;(d$ as Digest).nx = $.int($.uint64Mod((d$ as Digest).len, 128n))
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
			if ((d$ as Digest).nx == 128) {
				__goscript_sha512block_noasm.block(d, $.goSlice((d$ as Digest).x, undefined, undefined));
				;(d$ as Digest).nx = 0
			}
			p = $.goSlice(p, n, undefined)
		}
		if ($.sliceLen(p) >= 128) {
			let n: number = $.sliceLen(p) & ~((128 - 1))
			__goscript_sha512block_noasm.block(d, $.goSlice(p, undefined, n))
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
		// Padding. Add a 1 bit and 0 bits until 112 bytes mod 128.
		let len = (d$ as Digest).len
		let tmp: Uint8Array = $.arrayValue(new Uint8Array(144))
		tmp[0] = 0x80
		let t: bigint = 0n
		if (($.uint64Mod(len, 128n)) < 112n) {
			t = $.uint64Sub(112n, ($.uint64Mod(len, 128n)))
		} else {
			t = $.uint64Sub(240n, ($.uint64Mod(len, 128n)))
		}

		// Length in bits.
		len = $.uint64Shl(len, 3n)
		let padlen: $.Slice<number> = $.goSlice(tmp, undefined, globalThis.Number($.uint64Add(t, 16n)))
		// Upper 64 bits are always zero, because len variable has type uint64,
		// and tmp is already zeroed at that index, so we can skip updating it.
		// byteorder.BEPutUint64(padlen[t+0:], 0)
		byteorder.BEPutUint64($.goSlice(padlen, globalThis.Number($.uint64Add(t, 8n)), undefined), len)
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).Write(padlen) : Digest.prototype.Write.call(d, padlen))

		if ((d$ as Digest).nx != 0) {
			$.panic("d.nx != 0")
		}

		let digest: Uint8Array = $.arrayValue(new Uint8Array(64))
		byteorder.BEPutUint64($.goSlice(digest, 0, undefined), $.arrayIndex((d$ as Digest).h, 0))
		byteorder.BEPutUint64($.goSlice(digest, 8, undefined), $.arrayIndex((d$ as Digest).h, 1))
		byteorder.BEPutUint64($.goSlice(digest, 16, undefined), $.arrayIndex((d$ as Digest).h, 2))
		byteorder.BEPutUint64($.goSlice(digest, 24, undefined), $.arrayIndex((d$ as Digest).h, 3))
		byteorder.BEPutUint64($.goSlice(digest, 32, undefined), $.arrayIndex((d$ as Digest).h, 4))
		byteorder.BEPutUint64($.goSlice(digest, 40, undefined), $.arrayIndex((d$ as Digest).h, 5))
		if ((d$ as Digest).size != 48) {
			byteorder.BEPutUint64($.goSlice(digest, 48, undefined), $.arrayIndex((d$ as Digest).h, 6))
			byteorder.BEPutUint64($.goSlice(digest, 56, undefined), $.arrayIndex((d$ as Digest).h, 7))
		}

		return $.cloneArrayValue(digest, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64))
	}

	static __typeInfo = $.registerStructType(
		"sha512.Digest",
		() => new Digest(),
		() => [$.methodSignature("AppendBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Clone", [], ["hash.Cloner", "error"], true), $.methodSignature("MarshalBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Sum", [["in", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("UnmarshalBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["nn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("checkSum", [], [/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64)], true)],
		Digest,
		() => [/* @__PURE__ */ $.structField("h", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint64"), 8), [0], 0, false, { pkgPath: "crypto/internal/fips140/sha512" }), /* @__PURE__ */ $.structField("x", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 128), [1], 64, false, { pkgPath: "crypto/internal/fips140/sha512" }), /* @__PURE__ */ $.structField("nx", /* @__PURE__ */ $.basicType("int"), [2], 192, false, { pkgPath: "crypto/internal/fips140/sha512" }), /* @__PURE__ */ $.structField("len", /* @__PURE__ */ $.basicType("uint64"), [3], 200, false, { pkgPath: "crypto/internal/fips140/sha512" }), /* @__PURE__ */ $.structField("size", /* @__PURE__ */ $.basicType("int"), [4], 208, false, { pkgPath: "crypto/internal/fips140/sha512" })]
	)
}

export const size512: number = 64

export const size224: number = 28

export const size256: number = 32

export const size384: number = 48

export const blockSize: number = 128

export const chunk: number = 128

export const init0: number = 7640891576956012808

export const init1: number = 13503953896175478587

export const init2: number = 4354685564936845355

export const init3: number = 11912009170470909681

export const init4: number = 5840696475078001361

export const init5: number = 11170449401992604703

export const init6: number = 2270897969802886507

export const init7: number = 6620516959819538809

export const init0_224: number = 10105294471447203234

export const init1_224: number = 8350123849800275158

export const init2_224: number = 2160240930085379202

export const init3_224: number = 7466358040605728719

export const init4_224: number = 1111592415079452072

export const init5_224: number = 8638871050018654530

export const init6_224: number = 4583966954114332360

export const init7_224: number = 1230299281376055969

export const init0_256: number = 2463787394917988140

export const init1_256: number = 11481187982095705282

export const init2_256: number = 2563595384472711505

export const init3_256: number = 10824532655140301501

export const init4_256: number = 10819967247969091555

export const init5_256: number = 13717434660681038226

export const init6_256: number = 3098927326965381290

export const init7_256: number = 1060366662362279074

export const init0_384: number = 14680500436340154072

export const init1_384: number = 7105036623409894663

export const init2_384: number = 10473403895298186519

export const init3_384: number = 1526699215303891257

export const init4_384: number = 7436329637833083697

export const init5_384: number = 10282925794625328401

export const init6_384: number = 15784041429090275239

export const init7_384: number = 5167115440072839076

export const magic384: string = "sha\x04"

export const magic512_224: string = "sha\x05"

export const magic512_256: string = "sha\x06"

export const magic512: string = "sha\x07"

export const marshaledSize: number = 204

export function consumeUint64(b: $.Slice<number>): [$.Slice<number>, bigint] {
	return [$.goSlice(b, 8, undefined), byteorder.BEUint64(b)]
}

export function New(): Digest | $.VarRef<Digest> | null {
	let d: Digest | $.VarRef<Digest> | null = new Digest({size: 64})
	void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).Reset() : Digest.prototype.Reset.call(d))
	return d
}

export function New512_224(): Digest | $.VarRef<Digest> | null {
	let d: Digest | $.VarRef<Digest> | null = new Digest({size: 28})
	void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).Reset() : Digest.prototype.Reset.call(d))
	return d
}

export function New512_256(): Digest | $.VarRef<Digest> | null {
	let d: Digest | $.VarRef<Digest> | null = new Digest({size: 32})
	void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).Reset() : Digest.prototype.Reset.call(d))
	return d
}

export function New384(): Digest | $.VarRef<Digest> | null {
	let d: Digest | $.VarRef<Digest> | null = new Digest({size: 48})
	void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Digest).Reset() : Digest.prototype.Reset.call(d))
	return d
}
