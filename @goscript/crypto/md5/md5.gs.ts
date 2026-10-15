// Generated file based on md5.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as fips140only from "@goscript/crypto/internal/fips140only/index.js"

import * as errors from "@goscript/errors/index.js"

import * as hash2 from "@goscript/hash/index.js"

import * as byteorder from "@goscript/internal/byteorder/index.js"

import * as __goscript_md5block from "./md5block.gs.ts"

import * as __goscript_md5block_generic from "./md5block_generic.gs.ts"
import "@goscript/crypto/index.js"
import "@goscript/crypto/internal/fips140only/index.js"
import "@goscript/errors/index.js"
import "@goscript/hash/index.js"
import "@goscript/internal/byteorder/index.js"
import "./md5block.gs.ts"
import "./md5block_generic.gs.ts"

$.registerTypePackagePath("crypto/md5", ["md5.digest"])

export class digest {
	public get s(): number[] {
		return this._fields.s
	}

	public set s(value: number[]) {
		this._fields.s = value
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

	public _fields: {
		s: number[]
		x: Uint8Array
		nx: number
		len: bigint
	}

	constructor(init?: Partial<{s?: number[], x?: Uint8Array, nx?: number, len?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s !== undefined ? $.cloneArrayValue(init.s, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 4)) : $.arrayValue(globalThis.Array.from({ length: 4 }, () => 0)),
			x: init?.x !== undefined ? $.cloneArrayValue(init.x, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64)) : $.arrayValue(new Uint8Array(64)),
			nx: init?.nx ?? (0 as number),
			len: init?.len ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): digest {
		return new digest(this, true)
	}

	public __goscriptAssign(source: digest): void {
		const target = this._fields
		const values = source._fields
		target.s = $.assignFieldValue(target.s, values.s, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 4))
		target.x = $.assignFieldValue(target.x, values.x, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64))
		target.nx = values.nx
		target.len = values.len
	}

	public AppendBinary(b: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const d: digest | $.VarRef<digest> | null = this;
		const d$: digest = d == null ? $.pointerTarget<digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<digest>(d)
		b = $.appendSlice(b, $.stringToBytes("md5\x01"), $.byteSliceHint)
		b = byteorder.BEAppendUint32(b, $.arrayIndex((d$ as digest).s, 0))
		b = byteorder.BEAppendUint32(b, $.arrayIndex((d$ as digest).s, 1))
		b = byteorder.BEAppendUint32(b, $.arrayIndex((d$ as digest).s, 2))
		b = byteorder.BEAppendUint32(b, $.arrayIndex((d$ as digest).s, 3))
		b = $.appendSlice(b, $.goSlice((d$ as digest).x, undefined, (d$ as digest).nx), $.byteSliceHint)
		b = $.appendSlice(b, $.makeSlice<number>($.len((d$ as digest).x) - (d$ as digest).nx, undefined, "byte"), $.byteSliceHint)
		b = byteorder.BEAppendUint64(b, (d$ as digest).len)
		return [b, null]
	}

	public BlockSize(): number {
		const d: digest | $.VarRef<digest> | null = this;
		return 64
	}

	public Clone(): [hash2.Cloner | null, $.GoError] {
		const d: digest | $.VarRef<digest> | null = this;
		let r = $.varRef(($.pointerValue<digest>(d)).clone())
		return [$.interfaceValue<hash2.Cloner | null>(r, "*md5.digest", /* @__PURE__ */ $.pointerType("md5.digest")), null]
	}

	public MarshalBinary(): [$.Slice<number>, $.GoError] {
		const d: digest | $.VarRef<digest> | null = this;
		return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digest).AppendBinary($.makeSlice<number>(0, 92, "byte")) : digest.prototype.AppendBinary.call(d, $.makeSlice<number>(0, 92, "byte")))
	}

	public Reset(): void {
		let d: digest | $.VarRef<digest> | null = this;
		const d$: digest = d == null ? $.pointerTarget<digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<digest>(d);
		;(d$ as digest).s[0] = 1732584193;
		;(d$ as digest).s[1] = 4023233417;
		;(d$ as digest).s[2] = 2562383102;
		;(d$ as digest).s[3] = 271733878;
		;(d$ as digest).nx = 0;
		;(d$ as digest).len = 0n
	}

	public Size(): number {
		const d: digest | $.VarRef<digest> | null = this;
		return 16
	}

	public Sum(_in: $.Slice<number>): $.Slice<number> {
		const d: digest | $.VarRef<digest> | null = this;
		// Make a copy of d so that caller can keep writing and summing.
		let d0 = $.varRef(($.pointerValue<digest>(d)).clone())
		let __goscriptShadow0 = d0.value.checkSum()
		return $.appendSlice(_in, $.goSlice(__goscriptShadow0, undefined, undefined), $.byteSliceHint)
	}

	public UnmarshalBinary(b: $.Slice<number>): $.GoError {
		let d: digest | $.VarRef<digest> | null = this;
		const d$: digest = d == null ? $.pointerTarget<digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<digest>(d)
		if (($.sliceLen(b) < 4) || (!$.stringEqual($.bytesToString($.goSlice(b, undefined, 4)), "md5\x01"))) {
			return errors.New("crypto/md5: invalid hash state identifier")
		}
		if ($.sliceLen(b) != 92) {
			return errors.New("crypto/md5: invalid hash state size")
		}
		b = $.goSlice(b, 4, undefined)
		let __goscriptTuple0: any = consumeUint32(b)
		b = __goscriptTuple0[0];
		;(d$ as digest).s[0] = __goscriptTuple0[1]
		let __goscriptTuple1: any = consumeUint32(b)
		b = __goscriptTuple1[0];
		;(d$ as digest).s[1] = __goscriptTuple1[1]
		let __goscriptTuple2: any = consumeUint32(b)
		b = __goscriptTuple2[0];
		;(d$ as digest).s[2] = __goscriptTuple2[1]
		let __goscriptTuple3: any = consumeUint32(b)
		b = __goscriptTuple3[0];
		;(d$ as digest).s[3] = __goscriptTuple3[1]
		b = $.goSlice(b, $.copy($.goSlice((d$ as digest).x, undefined, undefined), b), undefined)
		let __goscriptTuple4: any = consumeUint64(b)
		b = __goscriptTuple4[0];
		;(d$ as digest).len = __goscriptTuple4[1];
		;(d$ as digest).nx = $.int($.uint64Mod((d$ as digest).len, 64n))
		return null
	}

	public Write(p: $.Slice<number>): [number, $.GoError] {
		let d: digest | $.VarRef<digest> | null = this;
		let nn: number = 0
		let err: $.GoError = null! as $.GoError
		const d$: digest = d == null ? $.pointerTarget<digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<digest>(d)
		if (fips140only.Enforced()) {
			return [0, errors.New("crypto/md5: use of MD5 is not allowed in FIPS 140-only mode")]
		}
		// Note that we currently call block or blockGeneric
		// directly (guarded using haveAsm) because this allows
		// escape analysis to see that p and d don't escape.
		nn = $.sliceLen(p);
		;(d$ as digest).len = $.uint64Add((d$ as digest).len, $.uint64(nn))
		if ((d$ as digest).nx > 0) {
			let n: number = $.copy($.goSlice((d$ as digest).x, (d$ as digest).nx, undefined), p);
			;(d$ as digest).nx = (d$ as digest).nx + (n)
			if ((d$ as digest).nx == 64) {
				if (false) {
					__goscript_md5block_generic.block(d, $.goSlice((d$ as digest).x, undefined, undefined))
				} else {
					__goscript_md5block.blockGeneric(d, $.goSlice((d$ as digest).x, undefined, undefined))
				}
				;(d$ as digest).nx = 0
			}
			p = $.goSlice(p, n, undefined)
		}
		if ($.sliceLen(p) >= 64) {
			let n: number = $.sliceLen(p) & ~((64 - 1))
			if (false) {
				while (n > 65536) {
					__goscript_md5block_generic.block(d, $.goSlice(p, undefined, 65536))
					p = $.goSlice(p, 65536, undefined)
					n = n - (65536)
				}
				__goscript_md5block_generic.block(d, $.goSlice(p, undefined, n))
			} else {
				__goscript_md5block.blockGeneric(d, $.goSlice(p, undefined, n))
			}
			p = $.goSlice(p, n, undefined)
		}
		if ($.sliceLen(p) > 0) {
			;(d$ as digest).nx = $.copy($.goSlice((d$ as digest).x, undefined, undefined), p)
		}
		return [nn, err]
	}

	public checkSum(): Uint8Array {
		const d: digest | $.VarRef<digest> | null = this;
		const d$: digest = d == null ? $.pointerTarget<digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<digest>(d)
		if (fips140only.Enforced()) {
			$.panic("crypto/md5: use of MD5 is not allowed in FIPS 140-only mode")
		}

		// Append 0x80 to the end of the message and then append zeros
		// until the length is a multiple of 56 bytes. Finally append
		// 8 bytes representing the message length in bits.
		//
		// 1 byte end marker :: 0-63 padding bytes :: 8 byte length
		let tmp = $.arrayValue(new Uint8Array([128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
		let pad = $.uint64Mod(($.uint64Sub(55n, (d$ as digest).len)), 64n)
		byteorder.LEPutUint64($.goSlice(tmp, globalThis.Number($.uint64Add(1n, pad)), undefined), $.uint64Shl((d$ as digest).len, 3n))
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digest).Write($.goSlice(tmp, undefined, globalThis.Number($.uint64Add(($.uint64Add(1n, pad)), 8n)))) : digest.prototype.Write.call(d, $.goSlice(tmp, undefined, globalThis.Number($.uint64Add(($.uint64Add(1n, pad)), 8n)))))

		// The previous write ensures that a whole number of
		// blocks (i.e. a multiple of 64 bytes) have been hashed.
		if ((d$ as digest).nx != 0) {
			$.panic("d.nx != 0")
		}

		let __goscriptShadow1: Uint8Array = $.arrayValue(new Uint8Array(16))
		byteorder.LEPutUint32($.goSlice(__goscriptShadow1, 0, undefined), $.arrayIndex((d$ as digest).s, 0))
		byteorder.LEPutUint32($.goSlice(__goscriptShadow1, 4, undefined), $.arrayIndex((d$ as digest).s, 1))
		byteorder.LEPutUint32($.goSlice(__goscriptShadow1, 8, undefined), $.arrayIndex((d$ as digest).s, 2))
		byteorder.LEPutUint32($.goSlice(__goscriptShadow1, 12, undefined), $.arrayIndex((d$ as digest).s, 3))
		return $.cloneArrayValue(__goscriptShadow1, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
	}

	static __typeInfo = $.registerStructType(
		"md5.digest",
		() => new digest(),
		() => [$.methodSignature("AppendBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Clone", [], ["hash.Cloner", "error"], true), $.methodSignature("MarshalBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Sum", [["in", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("UnmarshalBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["nn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("checkSum", [], [/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16)], true)],
		digest,
		() => [/* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 4), [0], 0, false, { pkgPath: "crypto/md5" }), /* @__PURE__ */ $.structField("x", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64), [1], 16, false, { pkgPath: "crypto/md5" }), /* @__PURE__ */ $.structField("nx", /* @__PURE__ */ $.basicType("int"), [2], 80, false, { pkgPath: "crypto/md5" }), /* @__PURE__ */ $.structField("len", /* @__PURE__ */ $.basicType("uint64"), [3], 88, false, { pkgPath: "crypto/md5" })]
	)
}

export const Size: number = 16

export const BlockSize: number = 64

export const maxAsmIters: number = 1024

export const maxAsmSize: number = 65536

export const init0: number = 1732584193

export const init1: number = 4023233417

export const init2: number = 2562383102

export const init3: number = 271733878

export const magic: string = "md5\x01"

export const marshaledSize: number = 92

function __goscriptInit0(): void {
	crypto.RegisterHash(2, New)
}

export function consumeUint64(b: $.Slice<number>): [$.Slice<number>, bigint] {
	return [$.goSlice(b, 8, undefined), byteorder.BEUint64($.goSlice(b, 0, 8))]
}

export function consumeUint32(b: $.Slice<number>): [$.Slice<number>, number] {
	return [$.goSlice(b, 4, undefined), byteorder.BEUint32($.goSlice(b, 0, 4))]
}

export function New(): hash2.Hash | null {
	let d: digest | $.VarRef<digest> | null = new digest()
	void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digest).Reset() : digest.prototype.Reset.call(d))
	return $.interfaceValue<hash2.Hash | null>(d, "*md5.digest", /* @__PURE__ */ $.pointerType("md5.digest"))
}

export function Sum(data: $.Slice<number>): Uint8Array {
	let d: $.VarRef<digest> = $.varRef(new digest(undefined, true))
	d.value.Reset()
	d.value.Write(data)
	return d.value.checkSum()
}

export { __goscriptInit0 }
