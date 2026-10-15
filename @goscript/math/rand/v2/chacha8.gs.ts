// Generated file based on chacha8.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as byteorder from "@goscript/internal/byteorder/index.js"

import * as chacha8rand from "@goscript/internal/chacha8rand/index.js"
import "@goscript/errors/index.js"
import "@goscript/internal/byteorder/index.js"
import "@goscript/internal/chacha8rand/index.js"

$.registerTypePackagePath("math/rand/v2", ["rand.ChaCha8"])

export class ChaCha8 {
	public get state(): chacha8rand.State {
		return this._fields.state
	}

	public set state(value: chacha8rand.State) {
		this._fields.state = value
	}

	// The last readLen bytes of readBuf are still to be consumed by Read.
	public get readBuf(): Uint8Array {
		return this._fields.readBuf
	}

	public set readBuf(value: Uint8Array) {
		this._fields.readBuf = value
	}

	public get readLen(): number {
		return this._fields.readLen
	}

	public set readLen(value: number) {
		this._fields.readLen = value
	}

	public _fields: {
		state: chacha8rand.State
		readBuf: Uint8Array
		readLen: number
	}

	constructor(init?: Partial<{state?: chacha8rand.State, readBuf?: Uint8Array, readLen?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? $.markAsStructValue($.cloneStructValue(init.state)) : $.markAsStructValue(new chacha8rand.State()),
			readBuf: init?.readBuf !== undefined ? $.cloneArrayValue(init.readBuf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)) : $.arrayValue(new Uint8Array(8)),
			readLen: init?.readLen ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ChaCha8 {
		return new ChaCha8(this, true)
	}

	public __goscriptAssign(source: ChaCha8): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.readBuf = $.assignFieldValue(target.readBuf, values.readBuf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8))
		target.readLen = values.readLen
	}

	public AppendBinary(b: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const c: ChaCha8 | $.VarRef<ChaCha8> | null = this;
		const c$: ChaCha8 = c == null ? $.pointerTarget<ChaCha8>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ChaCha8>(c)
		if ((c$ as ChaCha8).readLen > 0) {
			b = $.appendSlice(b, $.stringToBytes("readbuf:"), $.byteSliceHint)
			b = $.append(b, $.uint($.uint((c$ as ChaCha8).readLen, 8), 8), $.byteSliceHint)
			b = $.appendSlice(b, $.goSlice((c$ as ChaCha8).readBuf, $.len((c$ as ChaCha8).readBuf) - (c$ as ChaCha8).readLen, undefined), $.byteSliceHint)
		}
		return [$.appendSlice(b, chacha8rand.Marshal($.fieldRef((c$ as ChaCha8)._fields, "state")), $.byteSliceHint), null]
	}

	public MarshalBinary(): [$.Slice<number>, $.GoError] {
		const c: ChaCha8 | $.VarRef<ChaCha8> | null = this;
		// the maximum length of (chacha8rand.Marshal + c.readBuf + "readbuf:") is 64
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ChaCha8).AppendBinary($.makeSlice<number>(0, 64, "byte")) : ChaCha8.prototype.AppendBinary.call(c, $.makeSlice<number>(0, 64, "byte")))
	}

	public Read(p: $.Slice<number>): [number, $.GoError] {
		let c: ChaCha8 | $.VarRef<ChaCha8> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const c$: ChaCha8 = c == null ? $.pointerTarget<ChaCha8>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ChaCha8>(c)
		if ((c$ as ChaCha8).readLen > 0) {
			n = $.copy(p, $.goSlice((c$ as ChaCha8).readBuf, $.len((c$ as ChaCha8).readBuf) - (c$ as ChaCha8).readLen, undefined));
			;(c$ as ChaCha8).readLen = (c$ as ChaCha8).readLen - (n)
			p = $.goSlice(p, n, undefined)
		}
		while ($.sliceLen(p) >= 8) {
			byteorder.LEPutUint64(p, (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ChaCha8).Uint64() : ChaCha8.prototype.Uint64.call(c)))
			p = $.goSlice(p, 8, undefined)
			n = n + (8)
		}
		if ($.sliceLen(p) > 0) {
			byteorder.LEPutUint64($.goSlice((c$ as ChaCha8).readBuf, undefined, undefined), (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ChaCha8).Uint64() : ChaCha8.prototype.Uint64.call(c)))
			n = n + ($.copy(p, $.goSlice((c$ as ChaCha8).readBuf, undefined, undefined)));
			;(c$ as ChaCha8).readLen = 8 - $.sliceLen(p)
		}
		return [n, err]
	}

	public Seed(seed: Uint8Array): void {
		let c: ChaCha8 | $.VarRef<ChaCha8> | null = this;
		const c$: ChaCha8 = c == null ? $.pointerTarget<ChaCha8>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ChaCha8>(c)
		void (c$ as ChaCha8).state.Init($.cloneArrayValue(seed, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)));
		;(c$ as ChaCha8).readLen = 0;
		;(c$ as ChaCha8).readBuf = $.arrayValue(new Uint8Array(8))
	}

	public Uint64(): bigint {
		const c: ChaCha8 | $.VarRef<ChaCha8> | null = this;
		const c$: ChaCha8 = c == null ? $.pointerTarget<ChaCha8>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ChaCha8>(c)
		while (true) {
			let [x, ok] = (c$ as ChaCha8).state.Next()
			if (ok) {
				return x
			}
			void (c$ as ChaCha8).state.Refill()
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public UnmarshalBinary(data: $.Slice<number>): $.GoError {
		let c: ChaCha8 | $.VarRef<ChaCha8> | null = this;
		const c$: ChaCha8 = c == null ? $.pointerTarget<ChaCha8>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ChaCha8>(c)
		let __goscriptTuple0: any = cutPrefix(data, new Uint8Array([114, 101, 97, 100, 98, 117, 102, 58]))
		data = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			let buf: $.Slice<number> = null! as $.Slice<number>
			let __goscriptTuple1: any = readUint8LengthPrefixed(data)
			buf = __goscriptTuple1[0]
			data = __goscriptTuple1[1]
			ok = __goscriptTuple1[2]
			if (!ok) {
				return errors.New("invalid ChaCha8 Read buffer encoding")
			}
			;(c$ as ChaCha8).readLen = $.copy($.goSlice((c$ as ChaCha8).readBuf, $.len((c$ as ChaCha8).readBuf) - $.sliceLen(buf), undefined), buf)
		}
		return chacha8rand.Unmarshal($.fieldRef((c$ as ChaCha8)._fields, "state"), data)
	}

	static __typeInfo = $.registerStructType(
		"rand.ChaCha8",
		() => new ChaCha8(),
		() => [$.methodSignature("AppendBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("MarshalBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("Seed", [["seed", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)]], [], true), $.methodSignature("Uint64", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("UnmarshalBinary", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ChaCha8,
		() => [/* @__PURE__ */ $.structField("state", "chacha8rand.State", [0], 0, false, { pkgPath: "math/rand/v2" }), /* @__PURE__ */ $.structField("readBuf", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8), [1], 304, false, { pkgPath: "math/rand/v2" }), /* @__PURE__ */ $.structField("readLen", /* @__PURE__ */ $.basicType("int"), [2], 312, false, { pkgPath: "math/rand/v2" })]
	)
}

export function NewChaCha8(seed: Uint8Array): ChaCha8 | $.VarRef<ChaCha8> | null {
	let c: ChaCha8 | $.VarRef<ChaCha8> | null = new ChaCha8()
	$.pointerValue<ChaCha8>(c).state.Init($.cloneArrayValue(seed, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)))
	return c
}

export function cutPrefix(s: $.Slice<number>, prefix: $.Slice<number>): [$.Slice<number>, boolean] {
	let after: $.Slice<number> = null! as $.Slice<number>
	let found: boolean = false
	if (($.sliceLen(s) < $.sliceLen(prefix)) || (!$.stringEqual($.bytesToString($.goSlice(s, undefined, $.sliceLen(prefix))), $.bytesToString(prefix)))) {
		return [s, false]
	}
	return [$.goSlice(s, $.sliceLen(prefix), undefined), true]
}

export function readUint8LengthPrefixed(b: $.Slice<number>): [$.Slice<number>, $.Slice<number>, boolean] {
	let buf: $.Slice<number> = null! as $.Slice<number>
	let rest: $.Slice<number> = null! as $.Slice<number>
	let ok: boolean = false
	if (($.sliceLen(b) == 0) || ($.sliceLen(b) < $.int($.uint(((1 + $.arrayIndex(b!, 0)) & 0xff), 8)))) {
		return [null, null, false]
	}
	return [$.goSlice(b, 1, ((1 + $.arrayIndex(b!, 0)) & 0xff)), $.goSlice(b, ((1 + $.arrayIndex(b!, 0)) & 0xff), undefined), true]
}
