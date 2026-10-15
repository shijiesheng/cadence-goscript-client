// Generated file based on sha3.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as sha3 from "@goscript/crypto/internal/fips140/sha3/index.js"

import * as hash from "@goscript/hash/index.js"

import "@goscript/unsafe/index.js"
import "@goscript/crypto/index.js"
import "@goscript/crypto/internal/fips140/sha3/index.js"
import "@goscript/hash/index.js"

$.registerTypePackagePath("crypto/sha3", ["sha3.SHA3", "sha3.SHAKE"])

export class SHA3 {
	public get s(): sha3.Digest {
		return this._fields.s
	}

	public set s(value: sha3.Digest) {
		this._fields.s = value
	}

	public _fields: {
		s: sha3.Digest
	}

	constructor(init?: Partial<{s?: sha3.Digest}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s ? init.s.clone() : new sha3.Digest(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SHA3 {
		return new SHA3(this, true)
	}

	public __goscriptAssign(source: SHA3): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.s, values.s)
	}

	public AppendBinary(p: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const s: SHA3 | $.VarRef<SHA3> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SHA3).init() : SHA3.prototype.init.call(s))
		return $.pointerValue<SHA3>(s).s.AppendBinary(p)
	}

	public BlockSize(): number {
		const s: SHA3 | $.VarRef<SHA3> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SHA3).init() : SHA3.prototype.init.call(s))
		return $.pointerValue<SHA3>(s).s.BlockSize()
	}

	public Clone(): [hash.Cloner | null, $.GoError] {
		const d: SHA3 | $.VarRef<SHA3> | null = this;
		let r = $.varRef(($.pointerValue<SHA3>(d)).clone())
		return [$.interfaceValue<hash.Cloner | null>(r, "*sha3.SHA3", /* @__PURE__ */ $.pointerType("sha3.SHA3")), null]
	}

	public MarshalBinary(): [$.Slice<number>, $.GoError] {
		const s: SHA3 | $.VarRef<SHA3> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SHA3).init() : SHA3.prototype.init.call(s))
		return $.pointerValue<SHA3>(s).s.MarshalBinary()
	}

	public Reset(): void {
		const s: SHA3 | $.VarRef<SHA3> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SHA3).init() : SHA3.prototype.init.call(s))
		$.pointerValue<SHA3>(s).s.Reset()
	}

	public Size(): number {
		const s: SHA3 | $.VarRef<SHA3> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SHA3).init() : SHA3.prototype.init.call(s))
		return $.pointerValue<SHA3>(s).s.Size()
	}

	public Sum(b: $.Slice<number>): $.Slice<number> {
		const s: SHA3 | $.VarRef<SHA3> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SHA3).init() : SHA3.prototype.init.call(s))
		return $.pointerValue<SHA3>(s).s.Sum(b)
	}

	public UnmarshalBinary(data: $.Slice<number>): $.GoError {
		const s: SHA3 | $.VarRef<SHA3> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SHA3).init() : SHA3.prototype.init.call(s))
		return $.pointerValue<SHA3>(s).s.UnmarshalBinary(data)
	}

	public Write(p: $.Slice<number>): [number, $.GoError] {
		const s: SHA3 | $.VarRef<SHA3> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SHA3).init() : SHA3.prototype.init.call(s))
		return $.pointerValue<SHA3>(s).s.Write(p)
	}

	public init(): void {
		let s: SHA3 | $.VarRef<SHA3> | null = this;
		if ($.pointerValue<SHA3>(s).s.Size() == 0) {
			$.assignStruct($.pointerValue<SHA3>(s), $.pointerValue<SHA3>(New256()))
		}
	}

	static __typeInfo = $.registerStructType(
		"sha3.SHA3",
		() => new SHA3(),
		() => [$.methodSignature("AppendBinary", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Clone", [], ["hash.Cloner", "error"], true), $.methodSignature("MarshalBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("UnmarshalBinary", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("init", [], [], true)],
		SHA3,
		() => [/* @__PURE__ */ $.structField("s", "sha3.Digest", [0], 0, false, { pkgPath: "crypto/sha3" })]
	)
}

export class SHAKE {
	public get s(): sha3.SHAKE {
		return this._fields.s
	}

	public set s(value: sha3.SHAKE) {
		this._fields.s = value
	}

	public _fields: {
		s: sha3.SHAKE
	}

	constructor(init?: Partial<{s?: sha3.SHAKE}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s ? init.s.clone() : new sha3.SHAKE(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SHAKE {
		return new SHAKE(this, true)
	}

	public __goscriptAssign(source: SHAKE): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.s, values.s)
	}

	public AppendBinary(p: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const s: SHAKE | $.VarRef<SHAKE> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SHAKE).init() : SHAKE.prototype.init.call(s))
		return $.pointerValue<SHAKE>(s).s.AppendBinary(p)
	}

	public BlockSize(): number {
		const s: SHAKE | $.VarRef<SHAKE> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SHAKE).init() : SHAKE.prototype.init.call(s))
		return $.pointerValue<SHAKE>(s).s.BlockSize()
	}

	public MarshalBinary(): [$.Slice<number>, $.GoError] {
		const s: SHAKE | $.VarRef<SHAKE> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SHAKE).init() : SHAKE.prototype.init.call(s))
		return $.pointerValue<SHAKE>(s).s.MarshalBinary()
	}

	public Read(p: $.Slice<number>): [number, $.GoError] {
		const s: SHAKE | $.VarRef<SHAKE> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SHAKE).init() : SHAKE.prototype.init.call(s))
		return $.pointerValue<SHAKE>(s).s.Read(p)
	}

	public Reset(): void {
		const s: SHAKE | $.VarRef<SHAKE> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SHAKE).init() : SHAKE.prototype.init.call(s))
		$.pointerValue<SHAKE>(s).s.Reset()
	}

	public UnmarshalBinary(data: $.Slice<number>): $.GoError {
		const s: SHAKE | $.VarRef<SHAKE> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SHAKE).init() : SHAKE.prototype.init.call(s))
		return $.pointerValue<SHAKE>(s).s.UnmarshalBinary(data)
	}

	public Write(p: $.Slice<number>): [number, $.GoError] {
		const s: SHAKE | $.VarRef<SHAKE> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SHAKE).init() : SHAKE.prototype.init.call(s))
		return $.pointerValue<SHAKE>(s).s.Write(p)
	}

	public init(): void {
		let s: SHAKE | $.VarRef<SHAKE> | null = this;
		if ($.pointerValue<SHAKE>(s).s.Size() == 0) {
			$.assignStruct($.pointerValue<SHAKE>(s), $.pointerValue<SHAKE>(NewSHAKE256()))
		}
	}

	static __typeInfo = $.registerStructType(
		"sha3.SHAKE",
		() => new SHAKE(),
		() => [$.methodSignature("AppendBinary", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("MarshalBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("Reset", [], [], true), $.methodSignature("UnmarshalBinary", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("init", [], [], true)],
		SHAKE,
		() => [/* @__PURE__ */ $.structField("s", "sha3.SHAKE", [0], 0, false, { pkgPath: "crypto/sha3" })]
	)
}

function __goscriptInit0(): void {
	crypto.RegisterHash(10, $.functionValue((): hash.Hash | null => {
		return $.interfaceValue<hash.Hash | null>(New224(), "*sha3.SHA3", /* @__PURE__ */ $.pointerType("sha3.SHA3"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo)))
	crypto.RegisterHash(11, $.functionValue((): hash.Hash | null => {
		return $.interfaceValue<hash.Hash | null>(New256(), "*sha3.SHA3", /* @__PURE__ */ $.pointerType("sha3.SHA3"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo)))
	crypto.RegisterHash(12, $.functionValue((): hash.Hash | null => {
		return $.interfaceValue<hash.Hash | null>(New384(), "*sha3.SHA3", /* @__PURE__ */ $.pointerType("sha3.SHA3"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo)))
	crypto.RegisterHash(13, $.functionValue((): hash.Hash | null => {
		return $.interfaceValue<hash.Hash | null>(New512(), "*sha3.SHA3", /* @__PURE__ */ $.pointerType("sha3.SHA3"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo)))
}

export function Sum224(data: $.Slice<number>): Uint8Array {
	let out: Uint8Array = $.arrayValue(new Uint8Array(28))
	let h: sha3.Digest | $.VarRef<sha3.Digest> | null = sha3.New224()
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.Digest).Write(data) : sha3.Digest.prototype.Write.call(h, data))
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.Digest).Sum($.goSlice(out, undefined, 0)) : sha3.Digest.prototype.Sum.call(h, $.goSlice(out, undefined, 0)))
	return $.cloneArrayValue(out, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 28))
}

export function Sum256(data: $.Slice<number>): Uint8Array {
	let out: Uint8Array = $.arrayValue(new Uint8Array(32))
	let h: sha3.Digest | $.VarRef<sha3.Digest> | null = sha3.New256()
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.Digest).Write(data) : sha3.Digest.prototype.Write.call(h, data))
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.Digest).Sum($.goSlice(out, undefined, 0)) : sha3.Digest.prototype.Sum.call(h, $.goSlice(out, undefined, 0)))
	return $.cloneArrayValue(out, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
}

export function Sum384(data: $.Slice<number>): Uint8Array {
	let out: Uint8Array = $.arrayValue(new Uint8Array(48))
	let h: sha3.Digest | $.VarRef<sha3.Digest> | null = sha3.New384()
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.Digest).Write(data) : sha3.Digest.prototype.Write.call(h, data))
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.Digest).Sum($.goSlice(out, undefined, 0)) : sha3.Digest.prototype.Sum.call(h, $.goSlice(out, undefined, 0)))
	return $.cloneArrayValue(out, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 48))
}

export function Sum512(data: $.Slice<number>): Uint8Array {
	let out: Uint8Array = $.arrayValue(new Uint8Array(64))
	let h: sha3.Digest | $.VarRef<sha3.Digest> | null = sha3.New512()
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.Digest).Write(data) : sha3.Digest.prototype.Write.call(h, data))
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.Digest).Sum($.goSlice(out, undefined, 0)) : sha3.Digest.prototype.Sum.call(h, $.goSlice(out, undefined, 0)))
	return $.cloneArrayValue(out, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64))
}

export function SumSHAKE128(data: $.Slice<number>, length: number): $.Slice<number> {
	// Outline the allocation for up to 256 bits of output to the caller's stack.
	let out: $.Slice<number> = $.makeSlice<number>(32, undefined, "byte")
	return sumSHAKE128(out, data, length)
}

export function sumSHAKE128(out: $.Slice<number>, data: $.Slice<number>, length: number): $.Slice<number> {
	if ($.sliceLen(out) < length) {
		out = $.makeSlice<number>(length, undefined, "byte")
	} else {
		out = $.goSlice(out, undefined, length)
	}
	let h: sha3.SHAKE | $.VarRef<sha3.SHAKE> | null = sha3.NewShake128()
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.SHAKE).Write(data) : sha3.SHAKE.prototype.Write.call(h, data))
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.SHAKE).Read(out) : sha3.SHAKE.prototype.Read.call(h, out))
	return out
}

export function SumSHAKE256(data: $.Slice<number>, length: number): $.Slice<number> {
	// Outline the allocation for up to 512 bits of output to the caller's stack.
	let out: $.Slice<number> = $.makeSlice<number>(64, undefined, "byte")
	return sumSHAKE256(out, data, length)
}

export function sumSHAKE256(out: $.Slice<number>, data: $.Slice<number>, length: number): $.Slice<number> {
	if ($.sliceLen(out) < length) {
		out = $.makeSlice<number>(length, undefined, "byte")
	} else {
		out = $.goSlice(out, undefined, length)
	}
	let h: sha3.SHAKE | $.VarRef<sha3.SHAKE> | null = sha3.NewShake256()
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.SHAKE).Write(data) : sha3.SHAKE.prototype.Write.call(h, data))
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as sha3.SHAKE).Read(out) : sha3.SHAKE.prototype.Read.call(h, out))
	return out
}

export function fips140hash_sha3Unwrap(s: SHA3 | $.VarRef<SHA3> | null): sha3.Digest | $.VarRef<sha3.Digest> | null {
	void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SHA3).init() : SHA3.prototype.init.call(s))
	return $.fieldRef($.pointerValue<SHA3>(s)._fields, "s")
}

export function New224(): SHA3 | $.VarRef<SHA3> | null {
	return (() => { const __goscriptLiteralField0 = $.pointerValue<sha3.Digest>(sha3.New224()); return new SHA3({s: __goscriptLiteralField0}) })()
}

export function New256(): SHA3 | $.VarRef<SHA3> | null {
	return (() => { const __goscriptLiteralField1 = $.pointerValue<sha3.Digest>(sha3.New256()); return new SHA3({s: __goscriptLiteralField1}) })()
}

export function New384(): SHA3 | $.VarRef<SHA3> | null {
	return (() => { const __goscriptLiteralField2 = $.pointerValue<sha3.Digest>(sha3.New384()); return new SHA3({s: __goscriptLiteralField2}) })()
}

export function New512(): SHA3 | $.VarRef<SHA3> | null {
	return (() => { const __goscriptLiteralField3 = $.pointerValue<sha3.Digest>(sha3.New512()); return new SHA3({s: __goscriptLiteralField3}) })()
}

export function NewSHAKE128(): SHAKE | $.VarRef<SHAKE> | null {
	return (() => { const __goscriptLiteralField4 = $.pointerValue<sha3.SHAKE>(sha3.NewShake128()); return new SHAKE({s: __goscriptLiteralField4}) })()
}

export function NewSHAKE256(): SHAKE | $.VarRef<SHAKE> | null {
	return (() => { const __goscriptLiteralField5 = $.pointerValue<sha3.SHAKE>(sha3.NewShake256()); return new SHAKE({s: __goscriptLiteralField5}) })()
}

export function NewCSHAKE128(N: $.Slice<number>, S: $.Slice<number>): SHAKE | $.VarRef<SHAKE> | null {
	return (() => { const __goscriptLiteralField6 = $.pointerValue<sha3.SHAKE>(sha3.NewCShake128(N, S)); return new SHAKE({s: __goscriptLiteralField6}) })()
}

export function NewCSHAKE256(N: $.Slice<number>, S: $.Slice<number>): SHAKE | $.VarRef<SHAKE> | null {
	return (() => { const __goscriptLiteralField7 = $.pointerValue<sha3.SHAKE>(sha3.NewCShake256(N, S)); return new SHAKE({s: __goscriptLiteralField7}) })()
}

__goscriptInit0()
