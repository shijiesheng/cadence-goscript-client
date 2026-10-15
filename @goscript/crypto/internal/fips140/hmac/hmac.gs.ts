// Generated file based on hmac.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as sha256 from "@goscript/crypto/internal/fips140/sha256/index.js"

import * as sha3 from "@goscript/crypto/internal/fips140/sha3/index.js"

import * as sha512 from "@goscript/crypto/internal/fips140/sha512/index.js"

import * as errors from "@goscript/errors/index.js"

import * as hash from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/sha256/index.js"
import "@goscript/crypto/internal/fips140/sha3/index.js"
import "@goscript/crypto/internal/fips140/sha512/index.js"
import "@goscript/errors/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"

$.registerTypePackagePath("crypto/internal/fips140/hmac", ["hmac.marshalable", "hmac.HMAC", "hmac.errCloneUnsupported"])

export type marshalable = {
	MarshalBinary(): [$.Slice<number>, $.GoError]
	UnmarshalBinary(_p0: $.Slice<number>): $.GoError
}

$.registerInterfaceType(
	"hmac.marshalable",
	null,
	[$.methodSignature("MarshalBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("UnmarshalBinary", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["error"])]
);

export class HMAC {
	// opad and ipad may share underlying storage with HMAC clones.
	public get opad(): $.Slice<number> {
		return this._fields.opad
	}

	public set opad(value: $.Slice<number>) {
		this._fields.opad = value
	}

	// opad and ipad may share underlying storage with HMAC clones.
	public get ipad(): $.Slice<number> {
		return this._fields.ipad
	}

	public set ipad(value: $.Slice<number>) {
		this._fields.ipad = value
	}

	public get outer(): hash.Hash | null {
		return this._fields.outer
	}

	public set outer(value: hash.Hash | null) {
		this._fields.outer = value
	}

	public get inner(): hash.Hash | null {
		return this._fields.inner
	}

	public set inner(value: hash.Hash | null) {
		this._fields.inner = value
	}

	// If marshaled is true, then opad and ipad do not contain a padded
	// copy of the key, but rather the marshaled state of outer/inner after
	// opad/ipad has been fed into it.
	public get marshaled(): boolean {
		return this._fields.marshaled
	}

	public set marshaled(value: boolean) {
		this._fields.marshaled = value
	}

	// forHKDF and keyLen are stored to inform the service indicator decision.
	public get forHKDF(): boolean {
		return this._fields.forHKDF
	}

	public set forHKDF(value: boolean) {
		this._fields.forHKDF = value
	}

	public get keyLen(): number {
		return this._fields.keyLen
	}

	public set keyLen(value: number) {
		this._fields.keyLen = value
	}

	public _fields: {
		opad: $.Slice<number>
		ipad: $.Slice<number>
		outer: hash.Hash | null
		inner: hash.Hash | null
		marshaled: boolean
		forHKDF: boolean
		keyLen: number
	}

	constructor(init?: Partial<{opad?: $.Slice<number>, ipad?: $.Slice<number>, outer?: hash.Hash | null, inner?: hash.Hash | null, marshaled?: boolean, forHKDF?: boolean, keyLen?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			opad: init?.opad ?? (null! as $.Slice<number>),
			ipad: init?.ipad ?? (null! as $.Slice<number>),
			outer: init?.outer ?? (null! as hash.Hash | null),
			inner: init?.inner ?? (null! as hash.Hash | null),
			marshaled: init?.marshaled ?? (false as boolean),
			forHKDF: init?.forHKDF ?? (false as boolean),
			keyLen: init?.keyLen ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HMAC {
		return new HMAC(this, true)
	}

	public __goscriptAssign(source: HMAC): void {
		const target = this._fields
		const values = source._fields
		target.opad = values.opad
		target.ipad = values.ipad
		target.outer = $.assignFieldValue(target.outer, values.outer, "hash.Hash")
		target.inner = $.assignFieldValue(target.inner, values.inner, "hash.Hash")
		target.marshaled = values.marshaled
		target.forHKDF = values.forHKDF
		target.keyLen = values.keyLen
	}

	public async BlockSize(): globalThis.Promise<number> {
		const h: HMAC | $.VarRef<HMAC> | null = this;
		return $.pointerValue<Exclude<hash.Hash, null>>($.pointerValue<HMAC>(h).inner).BlockSize()
	}

	public async Clone(): globalThis.Promise<[hash.Cloner | null, $.GoError]> {
		const h: HMAC | $.VarRef<HMAC> | null = this;
		const h$: HMAC = h == null ? $.pointerTarget<HMAC>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<HMAC>(h)
		let r = $.varRef(((h$ as HMAC)).clone())
		let [ic, ok] = $.typeAssertTuple<hash.Cloner | null>((h$ as HMAC).inner, "hash.Cloner")
		if (!ok) {
			return [null, $.interfaceValue<$.GoError>(new errCloneUnsupported(undefined, true), "hmac.errCloneUnsupported", "hmac.errCloneUnsupported")]
		}
		let __goscriptTuple0: any = $.typeAssertTuple<hash.Cloner | null>((h$ as HMAC).outer, "hash.Cloner")
		let oc = __goscriptTuple0[0]
		ok = __goscriptTuple0[1]
		if (!ok) {
			return [null, $.interfaceValue<$.GoError>(new errCloneUnsupported(undefined, true), "hmac.errCloneUnsupported", "hmac.errCloneUnsupported")]
		}
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple1: any = await (ic !== null && (ic as any).__isVarRef !== true && (ic as any).__goValue === undefined ? (ic as Exclude<hash.Cloner, null>) : $.pointerValue<Exclude<hash.Cloner, null>>(ic)).Clone()
		r.value.inner = (__goscriptTuple1[0] as hash.Hash | null)
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, $.interfaceValue<$.GoError>(new errCloneUnsupported(undefined, true), "hmac.errCloneUnsupported", "hmac.errCloneUnsupported")]
		}
		let __goscriptTuple2: any = await (oc !== null && (oc as any).__isVarRef !== true && (oc as any).__goValue === undefined ? (oc as Exclude<hash.Cloner, null>) : $.pointerValue<Exclude<hash.Cloner, null>>(oc)).Clone()
		r.value.outer = (__goscriptTuple2[0] as hash.Hash | null)
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, $.interfaceValue<$.GoError>(new errCloneUnsupported(undefined, true), "hmac.errCloneUnsupported", "hmac.errCloneUnsupported")]
		}
		return [$.interfaceValue<hash.Cloner | null>(r, "*hmac.HMAC", /* @__PURE__ */ $.pointerType("hmac.HMAC")), null]
	}

	public async Reset(): globalThis.Promise<void> {
		let h: HMAC | $.VarRef<HMAC> | null = this;
		const h$: HMAC = h == null ? $.pointerTarget<HMAC>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<HMAC>(h)
		if ((h$ as HMAC).marshaled) {
			{
				let err = (__goscriptAwait = $.pointerValue<Exclude<marshalable, null>>($.mustTypeAssert<marshalable | null>((h$ as HMAC).inner, "hmac.marshalable")).UnmarshalBinary((h$ as HMAC).ipad), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					$.panic((err as any))
				}
			}
			return
		}

		void (__goscriptAwait = $.pointerValue<Exclude<hash.Hash, null>>((h$ as HMAC).inner).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await $.pointerValue<Exclude<hash.Hash, null>>((h$ as HMAC).inner).Write((h$ as HMAC).ipad)

		// If the underlying hash is marshalable, we can save some time by saving a
		// copy of the hash state now, and restoring it on future calls to Reset and
		// Sum instead of writing ipad/opad every time.
		//
		// We do this on Reset to avoid slowing down the common single-use case.
		//
		// This is allowed by FIPS 198-1, Section 6: "Conceptually, the intermediate
		// results of the compression function on the B-byte blocks (K0 ⊕ ipad) and
		// (K0 ⊕ opad) can be precomputed once, at the time of generation of the key
		// K, or before its first use. These intermediate results can be stored and
		// then used to initialize H each time that a message needs to be
		// authenticated using the same key. [...] These stored intermediate values
		// shall be treated and protected in the same manner as secret keys."
		let [marshalableInner, innerOK] = $.typeAssertTuple<marshalable | null>((h$ as HMAC).inner, "hmac.marshalable")
		if (!innerOK) {
			return
		}
		let [marshalableOuter, outerOK] = $.typeAssertTuple<marshalable | null>((h$ as HMAC).outer, "hmac.marshalable")
		if (!outerOK) {
			return
		}

		let __goscriptTuple3: any = await (marshalableInner !== null && (marshalableInner as any).__isVarRef !== true && (marshalableInner as any).__goValue === undefined ? (marshalableInner as Exclude<marshalable, null>) : $.pointerValue<Exclude<marshalable, null>>(marshalableInner)).MarshalBinary()
		let imarshal: $.Slice<number> = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			return
		}

		void (__goscriptAwait = $.pointerValue<Exclude<hash.Hash, null>>((h$ as HMAC).outer).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await $.pointerValue<Exclude<hash.Hash, null>>((h$ as HMAC).outer).Write((h$ as HMAC).opad)
		let __goscriptTuple4: any = await (marshalableOuter !== null && (marshalableOuter as any).__isVarRef !== true && (marshalableOuter as any).__goValue === undefined ? (marshalableOuter as Exclude<marshalable, null>) : $.pointerValue<Exclude<marshalable, null>>(marshalableOuter)).MarshalBinary()
		let omarshal: $.Slice<number> = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return
		}

		// Marshaling succeeded; save the marshaled state for later
		;(h$ as HMAC).ipad = imarshal;
		;(h$ as HMAC).opad = omarshal;
		;(h$ as HMAC).marshaled = true
	}

	public async Size(): globalThis.Promise<number> {
		const h: HMAC | $.VarRef<HMAC> | null = this;
		return $.pointerValue<Exclude<hash.Hash, null>>($.pointerValue<HMAC>(h).outer).Size()
	}

	public async Sum(_in: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const h: HMAC | $.VarRef<HMAC> | null = this;
		const h$: HMAC = h == null ? $.pointerTarget<HMAC>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<HMAC>(h)
		// Per FIPS 140-3 IG C.M, key lengths below 112 bits are only allowed for
		// legacy use (i.e. verification only) and we don't support that. However,
		// HKDF uses the HMAC key for the salt, which is allowed to be shorter.
		if (((h$ as HMAC).keyLen < 14) && !(h$ as HMAC).forHKDF) {
			fips140.RecordNonApproved()
		}
		{
			const __goscriptTypeSwitchValue = (h$ as HMAC).inner
			switch (true) {
				case $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("sha256.Digest")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("sha512.Digest")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("sha3.Digest")):
					{
					}
					break
				default:
					{
						fips140.RecordNonApproved()
					}
					break
			}
		}

		let origLen = $.sliceLen(_in)
		_in = await $.pointerValue<Exclude<hash.Hash, null>>((h$ as HMAC).inner).Sum(_in)

		if ((h$ as HMAC).marshaled) {
			{
				let err = (__goscriptAwait = $.pointerValue<Exclude<marshalable, null>>($.mustTypeAssert<marshalable | null>((h$ as HMAC).outer, "hmac.marshalable")).UnmarshalBinary((h$ as HMAC).opad), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					$.panic((err as any))
				}
			}
		} else {
			void (__goscriptAwait = $.pointerValue<Exclude<hash.Hash, null>>((h$ as HMAC).outer).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await $.pointerValue<Exclude<hash.Hash, null>>((h$ as HMAC).outer).Write((h$ as HMAC).opad)
		}
		await $.pointerValue<Exclude<hash.Hash, null>>((h$ as HMAC).outer).Write($.goSlice(_in, origLen, undefined))
		return $.pointerValue<Exclude<hash.Hash, null>>((h$ as HMAC).outer).Sum($.goSlice(_in, undefined, origLen))
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const h: HMAC | $.VarRef<HMAC> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<hash.Hash, null>>($.pointerValue<HMAC>(h).inner).Write(p)
	}

	static __typeInfo = $.registerStructType(
		"hmac.HMAC",
		() => new HMAC(),
		() => [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Clone", [], ["hash.Cloner", "error"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Sum", [["in", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		HMAC,
		() => [/* @__PURE__ */ $.structField("opad", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "crypto/internal/fips140/hmac" }), /* @__PURE__ */ $.structField("ipad", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, false, { pkgPath: "crypto/internal/fips140/hmac" }), /* @__PURE__ */ $.structField("outer", "hash.Hash", [2], 48, false, { pkgPath: "crypto/internal/fips140/hmac" }), /* @__PURE__ */ $.structField("inner", "hash.Hash", [3], 64, false, { pkgPath: "crypto/internal/fips140/hmac" }), /* @__PURE__ */ $.structField("marshaled", /* @__PURE__ */ $.basicType("bool"), [4], 80, false, { pkgPath: "crypto/internal/fips140/hmac" }), /* @__PURE__ */ $.structField("forHKDF", /* @__PURE__ */ $.basicType("bool"), [5], 81, false, { pkgPath: "crypto/internal/fips140/hmac" }), /* @__PURE__ */ $.structField("keyLen", /* @__PURE__ */ $.basicType("int"), [6], 88, false, { pkgPath: "crypto/internal/fips140/hmac" })]
	)
}

export class errCloneUnsupported {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errCloneUnsupported {
		return new errCloneUnsupported(this, true)
	}

	public __goscriptAssign(source: errCloneUnsupported): void {
	}

	public Error(): string {
		const e = this;
		return "crypto/hmac: hash does not support hash.Cloner"
	}

	public Unwrap(): $.GoError {
		const e = this;
		return errors.ErrUnsupported
	}

	static __typeInfo = $.registerStructType(
		"hmac.errCloneUnsupported",
		() => new errCloneUnsupported(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Unwrap", [], ["error"])],
		errCloneUnsupported,
		() => []
	)
}

export async function New(__typeArgs: $.GenericTypeArgs | undefined, h: (() => any | globalThis.Promise<any>) | null, key: $.Slice<number>): globalThis.Promise<HMAC | $.VarRef<HMAC> | null> {
	let hm: HMAC | $.VarRef<HMAC> | null = new HMAC({keyLen: $.sliceLen(key)})
	let hm$: HMAC = hm == null ? $.pointerTarget<HMAC>(hm) : (hm as any).__isVarRef === true ? (hm as any).value : (hm as any).__goValue === undefined ? (hm as any) : $.pointerTarget<HMAC>(hm);
	;(hm$ as HMAC).outer = $.typeParamInterfaceValue<hash.Hash | null>((__goscriptAwait = h!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null });
	;(hm$ as HMAC).inner = $.typeParamInterfaceValue<hash.Hash | null>((__goscriptAwait = h!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null })
	let _unique = true
	void ((): void => {
		const __defer = new $.DisposableStack()
		try {
			__defer.defer(() => { ((): void => {
				// The comparison might panic if the underlying types are not comparable.
				$.recover()
			})() })
			if ($.comparableEqual((hm$ as HMAC).outer, (hm$ as HMAC).inner)) {
				_unique = false
			}
			__defer.dispose()
		} catch (e) {
			__defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
	})()
	if (!_unique) {
		$.panic("crypto/hmac: hash generation function does not produce unique values")
	}
	let blocksize = (__goscriptAwait = $.pointerValue<Exclude<hash.Hash, null>>((hm$ as HMAC).inner).BlockSize(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
	;(hm$ as HMAC).ipad = $.makeSlice<number>(blocksize, undefined, "byte");
	;(hm$ as HMAC).opad = $.makeSlice<number>(blocksize, undefined, "byte")
	if ($.sliceLen(key) > blocksize) {
		// If key is too big, hash it.
		await $.pointerValue<Exclude<hash.Hash, null>>((hm$ as HMAC).outer).Write(key)
		key = await $.pointerValue<Exclude<hash.Hash, null>>((hm$ as HMAC).outer).Sum(null)
	}
	$.copy((hm$ as HMAC).ipad, key)
	$.copy((hm$ as HMAC).opad, key)
	for (let __goscriptRangeTarget0 = (hm$ as HMAC).ipad, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		$.sliceElems((hm$ as HMAC).ipad!)[$.sliceSlot((hm$ as HMAC).ipad!, i)] = $.sliceElems((hm$ as HMAC).ipad!)[$.sliceSlot((hm$ as HMAC).ipad!, i)] ^ (0x36)
	}
	for (let __goscriptRangeTarget1 = (hm$ as HMAC).opad, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		$.sliceElems((hm$ as HMAC).opad!)[$.sliceSlot((hm$ as HMAC).opad!, i)] = $.sliceElems((hm$ as HMAC).opad!)[$.sliceSlot((hm$ as HMAC).opad!, i)] ^ (0x5c)
	}
	await $.pointerValue<Exclude<hash.Hash, null>>((hm$ as HMAC).inner).Write((hm$ as HMAC).ipad)

	return hm
}

export function MarkAsUsedInKDF(h: HMAC | $.VarRef<HMAC> | null): void {
	$.pointerValue<HMAC>(h).forHKDF = true
}

var __goscriptAwait: any
