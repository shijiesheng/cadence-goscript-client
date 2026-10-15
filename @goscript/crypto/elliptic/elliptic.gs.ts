// Generated file based on elliptic.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as big from "@goscript/math/big/index.js"

import * as sync from "@goscript/sync/index.js"

import * as nistec from "@goscript/crypto/internal/fips140/nistec/index.js"

import * as __goscript_nistec from "./nistec.gs.ts"

import * as __goscript_params from "./params.gs.ts"
import "@goscript/io/index.js"
import "@goscript/math/big/index.js"
import "@goscript/sync/index.js"
import "@goscript/crypto/internal/fips140/nistec/index.js"
import "./nistec.gs.ts"
import "./params.gs.ts"

$.registerTypePackagePath("crypto/elliptic", ["elliptic.Curve", "elliptic.unmarshaler"])

export type Curve = {
	Add(x1: big.Int | $.VarRef<big.Int> | null, y1: big.Int | $.VarRef<big.Int> | null, x2: big.Int | $.VarRef<big.Int> | null, y2: big.Int | $.VarRef<big.Int> | null): [big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null] | globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]>
	Double(x1: big.Int | $.VarRef<big.Int> | null, y1: big.Int | $.VarRef<big.Int> | null): [big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null] | globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]>
	IsOnCurve(x: big.Int | $.VarRef<big.Int> | null, y: big.Int | $.VarRef<big.Int> | null): boolean | globalThis.Promise<boolean>
	Params(): __goscript_params.CurveParams | $.VarRef<__goscript_params.CurveParams> | null
	ScalarBaseMult(k: $.Slice<number>): [big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null] | globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]>
	ScalarMult(x1: big.Int | $.VarRef<big.Int> | null, y1: big.Int | $.VarRef<big.Int> | null, k: $.Slice<number>): [big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null] | globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]>
}

$.registerInterfaceType(
	"elliptic.Curve",
	null,
	[$.methodSignature("Add", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")], ["x2", /* @__PURE__ */ $.pointerType("big.Int")], ["y2", /* @__PURE__ */ $.pointerType("big.Int")]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("Double", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("IsOnCurve", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Params", [], [/* @__PURE__ */ $.pointerType("elliptic.CurveParams")]), $.methodSignature("ScalarBaseMult", [["k", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("ScalarMult", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")], ["k", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]])]
);

export type unmarshaler = {
	Unmarshal(_p0: $.Slice<number>): [big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null] | globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]>
	UnmarshalCompressed(_p0: $.Slice<number>): [big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null] | globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]>
}

$.registerInterfaceType(
	"elliptic.unmarshaler",
	null,
	[$.methodSignature("Unmarshal", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("UnmarshalCompressed", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]])]
);

export let mask: $.Slice<number> = new Uint8Array([255, 1, 3, 7, 15, 31, 63, 127]) as $.Slice<number>

export function __goscript_set_mask(__goscriptValue: $.Slice<number>): void {
	mask = __goscriptValue
}

export async function GenerateKey(curve: Curve | null, rand: io.Reader | null): globalThis.Promise<[$.Slice<number>, big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null, $.GoError]> {
	let priv: $.Slice<number> = null! as $.Slice<number>
	let x: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
	let y: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
	let err: $.GoError = null! as $.GoError
	let N: big.Int | $.VarRef<big.Int> | null = $.pointerValue<__goscript_params.CurveParams>(((__goscriptAwait = (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? (curve as Exclude<Curve, null>) : $.pointerValue<Exclude<Curve, null>>(curve)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_params.CurveParams | $.VarRef<__goscript_params.CurveParams> | null)).N
	let bitSize = (N !== null && (N as any).__isVarRef !== true && (N as any).__goValue === undefined ? ((N as any) as big.Int).BitLen() : big.Int.prototype.BitLen.call(N))
	let byteLen = globalThis.Math.trunc((bitSize + 7) / 8)
	priv = $.makeSlice<number>(byteLen, undefined, "byte")

	for (let __goscriptSliceWindow0 = $.sliceRange(priv); x == null; ) {
		let __goscriptTuple0: any = await io.ReadFull($.pointerValueOrNil(rand)!, priv)
		err = __goscriptTuple0[1]
		if (err != null) {
			return [priv, x, y, err]
		}
		// We have to mask off any excess bits in the case that the size of the
		// underlying field is not a whole number of bytes.
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, 0)] = (__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, 0)] & ($.arrayIndex(mask!, bitSize % 8));
		// This is because, in tests, rand will return all zeros and we don't
		// want to get the point at infinity and loop forever.
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, 1)] = (__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, 1)] ^ (0x42)

		// If the scalar is out of range, sample another random number.
		if (big.Int.prototype.Cmp.call(big.Int.prototype.SetBytes.call(new big.Int(), priv), N) >= 0) {
			continue
		}

		let __goscriptTuple1: any = await (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? (curve as Exclude<Curve, null>) : $.pointerValue<Exclude<Curve, null>>(curve)).ScalarBaseMult(priv)
		x = __goscriptTuple1[0]
		y = __goscriptTuple1[1]
	}
	return [priv, x, y, err]
}

export async function Marshal(curve: Curve | null, x: big.Int | $.VarRef<big.Int> | null, y: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<$.Slice<number>> {
	await panicIfNotOnCurve(curve, x, y)

	let byteLen = globalThis.Math.trunc(($.pointerValue<__goscript_params.CurveParams>(((__goscriptAwait = (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? (curve as Exclude<Curve, null>) : $.pointerValue<Exclude<Curve, null>>(curve)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_params.CurveParams | $.VarRef<__goscript_params.CurveParams> | null)).BitSize + 7) / 8)

	let ret: $.Slice<number> = $.makeSlice<number>(1 + (2 * byteLen), undefined, "byte")
	$.sliceElems(ret!)[$.sliceSlot(ret!, 0)] = 4

	void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).FillBytes($.goSlice(ret, 1, 1 + byteLen)) : big.Int.prototype.FillBytes.call(x, $.goSlice(ret, 1, 1 + byteLen)))
	void (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).FillBytes($.goSlice(ret, 1 + byteLen, 1 + (2 * byteLen))) : big.Int.prototype.FillBytes.call(y, $.goSlice(ret, 1 + byteLen, 1 + (2 * byteLen))))

	return ret
}

export async function MarshalCompressed(curve: Curve | null, x: big.Int | $.VarRef<big.Int> | null, y: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<$.Slice<number>> {
	await panicIfNotOnCurve(curve, x, y)
	let byteLen = globalThis.Math.trunc(($.pointerValue<__goscript_params.CurveParams>(((__goscriptAwait = (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? (curve as Exclude<Curve, null>) : $.pointerValue<Exclude<Curve, null>>(curve)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_params.CurveParams | $.VarRef<__goscript_params.CurveParams> | null)).BitSize + 7) / 8)
	let compressed: $.Slice<number> = $.makeSlice<number>(1 + byteLen, undefined, "byte")
	$.sliceElems(compressed!)[$.sliceSlot(compressed!, 0)] = $.uint($.uint((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).Bit(0) : big.Int.prototype.Bit.call(y, 0)), 8) | 2, 8)
	void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).FillBytes($.goSlice(compressed, 1, undefined)) : big.Int.prototype.FillBytes.call(x, $.goSlice(compressed, 1, undefined)))
	return compressed
}

export async function Unmarshal(curve: Curve | null, data: $.Slice<number>): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]> {
	let x: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
	let y: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
	{
		let [c, ok] = $.typeAssertTuple<unmarshaler | null>(curve, "elliptic.unmarshaler")
		if (ok) {
			return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<unmarshaler, null>) : $.pointerValue<Exclude<unmarshaler, null>>(c)).Unmarshal(data)
		}
	}

	let byteLen = globalThis.Math.trunc(($.pointerValue<__goscript_params.CurveParams>(((__goscriptAwait = (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? (curve as Exclude<Curve, null>) : $.pointerValue<Exclude<Curve, null>>(curve)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_params.CurveParams | $.VarRef<__goscript_params.CurveParams> | null)).BitSize + 7) / 8)
	if ($.sliceLen(data) != (1 + (2 * byteLen))) {
		return [null, null]
	}
	if ($.arrayIndex(data!, 0) != 4) {
		return [null, null]
	}
	let p: big.Int | $.VarRef<big.Int> | null = $.pointerValue<__goscript_params.CurveParams>(((__goscriptAwait = (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? (curve as Exclude<Curve, null>) : $.pointerValue<Exclude<Curve, null>>(curve)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_params.CurveParams | $.VarRef<__goscript_params.CurveParams> | null)).P
	x = big.Int.prototype.SetBytes.call(new big.Int(), $.goSlice(data, 1, 1 + byteLen))
	y = big.Int.prototype.SetBytes.call(new big.Int(), $.goSlice(data, 1 + byteLen, undefined))
	if (((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).Cmp(p) : big.Int.prototype.Cmp.call(x, p)) >= 0) || ((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).Cmp(p) : big.Int.prototype.Cmp.call(y, p)) >= 0)) {
		return [null, null]
	}
	if (!(__goscriptAwait = (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? (curve as Exclude<Curve, null>) : $.pointerValue<Exclude<Curve, null>>(curve)).IsOnCurve(x, y), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return [null, null]
	}
	return [x, y]
}

export async function UnmarshalCompressed(curve: Curve | null, data: $.Slice<number>): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]> {
	let x: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
	let y: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
	{
		let [c, ok] = $.typeAssertTuple<unmarshaler | null>(curve, "elliptic.unmarshaler")
		if (ok) {
			return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<unmarshaler, null>) : $.pointerValue<Exclude<unmarshaler, null>>(c)).UnmarshalCompressed(data)
		}
	}

	let byteLen = globalThis.Math.trunc(($.pointerValue<__goscript_params.CurveParams>(((__goscriptAwait = (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? (curve as Exclude<Curve, null>) : $.pointerValue<Exclude<Curve, null>>(curve)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_params.CurveParams | $.VarRef<__goscript_params.CurveParams> | null)).BitSize + 7) / 8)
	if ($.sliceLen(data) != (1 + byteLen)) {
		return [null, null]
	}
	if (($.arrayIndex(data!, 0) != 2) && ($.arrayIndex(data!, 0) != 3)) {
		return [null, null]
	}
	let p: big.Int | $.VarRef<big.Int> | null = $.pointerValue<__goscript_params.CurveParams>(((__goscriptAwait = (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? (curve as Exclude<Curve, null>) : $.pointerValue<Exclude<Curve, null>>(curve)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_params.CurveParams | $.VarRef<__goscript_params.CurveParams> | null)).P
	x = big.Int.prototype.SetBytes.call(new big.Int(), $.goSlice(data, 1, undefined))
	if ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).Cmp(p) : big.Int.prototype.Cmp.call(x, p)) >= 0) {
		return [null, null]
	}
	// y² = x³ - 3x + b
	y = await __goscript_params.CurveParams.prototype.polynomial.call(((__goscriptAwait = (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? (curve as Exclude<Curve, null>) : $.pointerValue<Exclude<Curve, null>>(curve)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_params.CurveParams | $.VarRef<__goscript_params.CurveParams> | null), x)
	y = await (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).ModSqrt(y, p) : big.Int.prototype.ModSqrt.call(y, y, p))
	if (y == null) {
		return [null, null]
	}
	if ($.uint((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).Bit(0) : big.Int.prototype.Bit.call(y, 0)), 8) != $.uint(($.arrayIndex(data!, 0) & 1), 8)) {
		await big.Int.prototype.Mod.call((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).Neg(y) : big.Int.prototype.Neg.call(y, y)), y, p)
	}
	if (!(__goscriptAwait = (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? (curve as Exclude<Curve, null>) : $.pointerValue<Exclude<Curve, null>>(curve)).IsOnCurve(x, y), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return [null, null]
	}
	return [x, y]
}

export async function panicIfNotOnCurve(curve: Curve | null, x: big.Int | $.VarRef<big.Int> | null, y: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<void> {
	// (0, 0) is the point at infinity by convention. It's ok to operate on it,
	// although IsOnCurve is documented to return false for it. See Issue 37294.
	if (((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).Sign() : big.Int.prototype.Sign.call(x)) == 0) && ((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).Sign() : big.Int.prototype.Sign.call(y)) == 0)) {
		return
	}

	if (!(__goscriptAwait = (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? (curve as Exclude<Curve, null>) : $.pointerValue<Exclude<Curve, null>>(curve)).IsOnCurve(x, y), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		$.panic("crypto/elliptic: attempted operation on invalid point")
	}
}

export let initonce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_initonce(__goscriptValue: sync.Once): void {
	$.assignStruct(initonce.value, __goscriptValue)
}

export async function initAll(): globalThis.Promise<void> {
	await __goscript_nistec.initP224()
	await __goscript_nistec.initP256()
	await __goscript_nistec.initP384()
	await __goscript_nistec.initP521()
}

export async function P224(): globalThis.Promise<Curve | null> {
	await initonce.value.Do(initAll)
	return $.namedValueInterfaceValue<Curve | null>(__goscript_nistec.__goscript_get_p224(), "*elliptic.nistCurve", __goscriptStatic1(), __goscriptStatic2(), __goscriptStatic3())
}

export async function P256(): globalThis.Promise<Curve | null> {
	await initonce.value.Do(initAll)
	return $.namedValueInterfaceValue<Curve | null>(__goscript_nistec.__goscript_get_p256(), "*elliptic.nistCurve", __goscriptStatic5(), __goscriptStatic2(), __goscriptStatic6())
}

export async function P384(): globalThis.Promise<Curve | null> {
	await initonce.value.Do(initAll)
	return $.namedValueInterfaceValue<Curve | null>(__goscript_nistec.__goscript_get_p384(), "*elliptic.nistCurve", __goscriptStatic8(), __goscriptStatic2(), __goscriptStatic9())
}

export async function P521(): globalThis.Promise<Curve | null> {
	await initonce.value.Do(initAll)
	return $.namedValueInterfaceValue<Curve | null>(__goscript_nistec.__goscript_get_p521(), "*elliptic.nistCurve", __goscriptStatic11(), __goscriptStatic2(), __goscriptStatic12())
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: { type: /* @__PURE__ */ $.pointerType("nistec.P224Point"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), BytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesCompressed(...$.stripGenericTypeArgs(args)), BytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesX(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Select(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetGenerator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetGenerator(...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytes(...$.stripGenericTypeArgs(args)), bytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesCompressed(...$.stripGenericTypeArgs(args)), bytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesX(...$.stripGenericTypeArgs(args)), generatorTable: (receiver: any, ...args: any[]) => $.pointerValue(receiver).generatorTable(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), IsOnCurve: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsOnCurve(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), Params: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Params(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), Unmarshal: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Unmarshal(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), UnmarshalCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalCompressed(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), normalizeScalar: (receiver: any, ...args: any[]) => $.pointerValue(receiver).normalizeScalar(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), pointFromAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).pointFromAffine(__goscriptStatic0(), ...$.stripGenericTypeArgs(args)), pointToAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).pointToAffine(__goscriptStatic0(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= (/* @__PURE__ */ $.pointerType("elliptic.nistCurve"))
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ([$.methodSignature("Add", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")], ["x2", /* @__PURE__ */ $.pointerType("big.Int")], ["y2", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("Double", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("IsOnCurve", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Params", [], [/* @__PURE__ */ $.pointerType("elliptic.CurveParams")]), $.methodSignature("ScalarBaseMult", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("ScalarMult", [["Bx", /* @__PURE__ */ $.pointerType("big.Int")], ["By", /* @__PURE__ */ $.pointerType("big.Int")], ["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("UnmarshalCompressed", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("normalizeScalar", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("pointFromAffine", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [["p", /* @__PURE__ */ $.pointerType("nistec.P224Point")], ["err", "error"]]), $.methodSignature("pointToAffine", [["p", /* @__PURE__ */ $.pointerType("nistec.P224Point")]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]])])
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: { type: /* @__PURE__ */ $.pointerType("nistec.P256Point"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), AddAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddAffine(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), BytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesCompressed(...$.stripGenericTypeArgs(args)), BytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesX(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), Negate: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Negate(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Select(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetGenerator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetGenerator(...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytes(...$.stripGenericTypeArgs(args)), bytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesCompressed(...$.stripGenericTypeArgs(args)), bytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesX(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), IsOnCurve: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsOnCurve(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), Params: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Params(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), Unmarshal: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Unmarshal(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), UnmarshalCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalCompressed(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), normalizeScalar: (receiver: any, ...args: any[]) => $.pointerValue(receiver).normalizeScalar(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), pointFromAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).pointFromAffine(__goscriptStatic4(), ...$.stripGenericTypeArgs(args)), pointToAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).pointToAffine(__goscriptStatic4(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ([$.methodSignature("Add", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")], ["x2", /* @__PURE__ */ $.pointerType("big.Int")], ["y2", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("Double", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("IsOnCurve", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Params", [], [/* @__PURE__ */ $.pointerType("elliptic.CurveParams")]), $.methodSignature("ScalarBaseMult", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("ScalarMult", [["Bx", /* @__PURE__ */ $.pointerType("big.Int")], ["By", /* @__PURE__ */ $.pointerType("big.Int")], ["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("UnmarshalCompressed", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("normalizeScalar", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("pointFromAffine", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [["p", /* @__PURE__ */ $.pointerType("nistec.P256Point")], ["err", "error"]]), $.methodSignature("pointToAffine", [["p", /* @__PURE__ */ $.pointerType("nistec.P256Point")]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]])])
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: { type: /* @__PURE__ */ $.pointerType("nistec.P384Point"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), BytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesCompressed(...$.stripGenericTypeArgs(args)), BytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesX(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Select(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetGenerator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetGenerator(...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytes(...$.stripGenericTypeArgs(args)), bytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesCompressed(...$.stripGenericTypeArgs(args)), bytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesX(...$.stripGenericTypeArgs(args)), generatorTable: (receiver: any, ...args: any[]) => $.pointerValue(receiver).generatorTable(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ({Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), IsOnCurve: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsOnCurve(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), Params: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Params(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), Unmarshal: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Unmarshal(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), UnmarshalCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalCompressed(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), normalizeScalar: (receiver: any, ...args: any[]) => $.pointerValue(receiver).normalizeScalar(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), pointFromAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).pointFromAffine(__goscriptStatic7(), ...$.stripGenericTypeArgs(args)), pointToAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).pointToAffine(__goscriptStatic7(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ([$.methodSignature("Add", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")], ["x2", /* @__PURE__ */ $.pointerType("big.Int")], ["y2", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("Double", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("IsOnCurve", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Params", [], [/* @__PURE__ */ $.pointerType("elliptic.CurveParams")]), $.methodSignature("ScalarBaseMult", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("ScalarMult", [["Bx", /* @__PURE__ */ $.pointerType("big.Int")], ["By", /* @__PURE__ */ $.pointerType("big.Int")], ["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("UnmarshalCompressed", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("normalizeScalar", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("pointFromAffine", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [["p", /* @__PURE__ */ $.pointerType("nistec.P384Point")], ["err", "error"]]), $.methodSignature("pointToAffine", [["p", /* @__PURE__ */ $.pointerType("nistec.P384Point")]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]])])
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: { type: /* @__PURE__ */ $.pointerType("nistec.P521Point"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), BytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesCompressed(...$.stripGenericTypeArgs(args)), BytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesX(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Select(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetGenerator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetGenerator(...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytes(...$.stripGenericTypeArgs(args)), bytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesCompressed(...$.stripGenericTypeArgs(args)), bytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesX(...$.stripGenericTypeArgs(args)), generatorTable: (receiver: any, ...args: any[]) => $.pointerValue(receiver).generatorTable(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ({Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), IsOnCurve: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsOnCurve(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), Params: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Params(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), Unmarshal: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Unmarshal(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), UnmarshalCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalCompressed(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), normalizeScalar: (receiver: any, ...args: any[]) => $.pointerValue(receiver).normalizeScalar(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), pointFromAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).pointFromAffine(__goscriptStatic10(), ...$.stripGenericTypeArgs(args)), pointToAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).pointToAffine(__goscriptStatic10(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= ([$.methodSignature("Add", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")], ["x2", /* @__PURE__ */ $.pointerType("big.Int")], ["y2", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("Double", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("IsOnCurve", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Params", [], [/* @__PURE__ */ $.pointerType("elliptic.CurveParams")]), $.methodSignature("ScalarBaseMult", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("ScalarMult", [["Bx", /* @__PURE__ */ $.pointerType("big.Int")], ["By", /* @__PURE__ */ $.pointerType("big.Int")], ["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("UnmarshalCompressed", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("normalizeScalar", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("pointFromAffine", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [["p", /* @__PURE__ */ $.pointerType("nistec.P521Point")], ["err", "error"]]), $.methodSignature("pointToAffine", [["p", /* @__PURE__ */ $.pointerType("nistec.P521Point")]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]])])
}

var __goscriptAwait: any
