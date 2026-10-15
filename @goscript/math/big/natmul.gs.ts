// Generated file based on natmul.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import type * as io from "@goscript/io/index.js"

import type * as rand from "@goscript/math/rand/index.js"

import type * as __goscript_accuracy_string from "./accuracy_string.gs.ts"

import * as __goscript_arith from "./arith.gs.ts"

import * as __goscript_arith_decl_pure from "./arith_decl_pure.gs.ts"

import type * as __goscript_float from "./float.gs.ts"

import * as __goscript_int from "./int.gs.ts"

import * as __goscript_intconv from "./intconv.gs.ts"

import * as __goscript_intmarsh from "./intmarsh.gs.ts"

import * as __goscript_nat from "./nat.gs.ts"

import * as __goscript_natconv from "./natconv.gs.ts"

import * as __goscript_natdiv from "./natdiv.gs.ts"

import * as __goscript_prime from "./prime.gs.ts"

import * as __goscript_rat from "./rat.gs.ts"

import type * as __goscript_roundingmode_string from "./roundingmode_string.gs.ts"
import "./arith.gs.ts"
import "./arith_decl_pure.gs.ts"
import "./int.gs.ts"
import "./intconv.gs.ts"
import "./intmarsh.gs.ts"
import "./nat.gs.ts"
import "./natconv.gs.ts"
import "./natdiv.gs.ts"
import "./prime.gs.ts"
import "./rat.gs.ts"

export var karatsubaThreshold: number

export function __goscript_init_karatsubaThreshold(): void {
	if (((karatsubaThreshold) as any) === undefined) {
		karatsubaThreshold = 40
	}
}

export function __goscript_get_karatsubaThreshold(): number {
	if (((karatsubaThreshold) as any) === undefined) {
		__goscript_init_karatsubaThreshold()
	}
	return karatsubaThreshold
}

export function __goscript_set_karatsubaThreshold(__goscriptValue: number): void {
	karatsubaThreshold = __goscriptValue
}

export async function nat_mul(z: __goscript_nat.nat, stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null, x: __goscript_nat.nat, y: __goscript_nat.nat): globalThis.Promise<__goscript_nat.nat> {
	using __defer = new $.DisposableStack()
	let m = $.sliceLen((x as __goscript_nat.nat))
	let n = $.sliceLen((y as __goscript_nat.nat))

	switch ((true as boolean)) {
		case m < n:
		{
			return (await nat_mul(z, stk, (y as __goscript_nat.nat), (x as __goscript_nat.nat)) as __goscript_nat.nat)
			break
		}
		case (m == 0) || (n == 0):
		{
			return ($.goSlice(z, undefined, 0) as __goscript_nat.nat)
			break
		}
		case n == 1:
		{
			return (nat_mulAddWW(z, (x as __goscript_nat.nat), $.arrayIndex(y!, 0), 0) as __goscript_nat.nat)
			break
		}
	}
	// m >= n > 1

	// determine if z can be reused
	if (__goscript_nat.alias((z as __goscript_nat.nat), (x as __goscript_nat.nat)) || __goscript_nat.alias((z as __goscript_nat.nat), (y as __goscript_nat.nat))) {
		z = (null as __goscript_nat.nat)
	}
	z = (__goscript_nat.nat_make(z, m + n) as __goscript_nat.nat)

	// use basic multiplication if the numbers are small
	if (n < __goscript_get_karatsubaThreshold()) {
		basicMul((z as __goscript_nat.nat), (x as __goscript_nat.nat), (y as __goscript_nat.nat))
		return (__goscript_nat.nat_norm(z) as __goscript_nat.nat)
	}

	if (stk == null) {
		stk = __goscript_nat.getStack()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.free())($.pointerValue<__goscript_nat.stack>(stk)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "math/big.(*stack).free-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
	}

	// Let x = x1:x0 where x0 is the same length as y.
	// Compute z = x0*y and then add in x1*y in sections
	// if needed.
	await karatsuba(stk, ($.goSlice(z, undefined, 2 * n) as __goscript_nat.nat), ($.goSlice(x, undefined, n) as __goscript_nat.nat), (y as __goscript_nat.nat))

	if (n < m) {
		$.clear(($.goSlice(z, 2 * n, undefined) as __goscript_nat.nat))
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (n: number) => __receiver.restore(n))($.pointerValue<__goscript_nat.stack>(stk)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo), "math/big.(*stack).restore-fm")
		const __goscriptDeferArg0 = (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as __goscript_nat.stack).save() : __goscript_nat.stack.prototype.save.call(stk))
		__defer.defer(() => { __goscriptDeferCallee1(__goscriptDeferArg0) })
		let t: __goscript_nat.nat = (await (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as __goscript_nat.stack).nat(2 * n) : __goscript_nat.stack.prototype.nat.call(stk, 2 * n)) as __goscript_nat.nat)
		for (let i = n; i < m; i = i + (n)) {
			t = (await nat_mul(t, stk, ($.goSlice(x, i, $.min(i + n, $.sliceLen((x as __goscript_nat.nat)))) as __goscript_nat.nat), (y as __goscript_nat.nat)) as __goscript_nat.nat)
			__goscript_nat.addTo(($.goSlice(z, i, undefined) as __goscript_nat.nat), (t as __goscript_nat.nat))
		}
	}

	return (__goscript_nat.nat_norm(z) as __goscript_nat.nat)
}

export var basicSqrThreshold: number

export function __goscript_init_basicSqrThreshold(): void {
	if (((basicSqrThreshold) as any) === undefined) {
		basicSqrThreshold = 12
	}
}

export function __goscript_get_basicSqrThreshold(): number {
	if (((basicSqrThreshold) as any) === undefined) {
		__goscript_init_basicSqrThreshold()
	}
	return basicSqrThreshold
}

export function __goscript_set_basicSqrThreshold(__goscriptValue: number): void {
	basicSqrThreshold = __goscriptValue
}

export var karatsubaSqrThreshold: number

export function __goscript_init_karatsubaSqrThreshold(): void {
	if (((karatsubaSqrThreshold) as any) === undefined) {
		karatsubaSqrThreshold = 80
	}
}

export function __goscript_get_karatsubaSqrThreshold(): number {
	if (((karatsubaSqrThreshold) as any) === undefined) {
		__goscript_init_karatsubaSqrThreshold()
	}
	return karatsubaSqrThreshold
}

export function __goscript_set_karatsubaSqrThreshold(__goscriptValue: number): void {
	karatsubaSqrThreshold = __goscriptValue
}

export async function nat_sqr(z: __goscript_nat.nat, stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null, x: __goscript_nat.nat): globalThis.Promise<__goscript_nat.nat> {
	using __defer = new $.DisposableStack()
	let n = $.sliceLen((x as __goscript_nat.nat))
	switch ((true as boolean)) {
		case n == 0:
		{
			return ($.goSlice(z, undefined, 0) as __goscript_nat.nat)
			break
		}
		case n == 1:
		{
			let d = $.arrayIndex(x!, 0)
			z = (__goscript_nat.nat_make(z, 2) as __goscript_nat.nat)
			let __goscriptTuple0: any = __goscript_arith.mulWW(d, d)
			$.sliceElems(z!)[$.sliceSlot(z!, 1)] = __goscriptTuple0[0]
			$.sliceElems(z!)[$.sliceSlot(z!, 0)] = __goscriptTuple0[1]
			return (__goscript_nat.nat_norm(z) as __goscript_nat.nat)
			break
		}
	}

	if (__goscript_nat.alias((z as __goscript_nat.nat), (x as __goscript_nat.nat))) {
		z = (null as __goscript_nat.nat)
	}
	z = (__goscript_nat.nat_make(z, 2 * n) as __goscript_nat.nat)

	if ((n < __goscript_get_basicSqrThreshold()) && (n < __goscript_get_karatsubaSqrThreshold())) {
		basicMul((z as __goscript_nat.nat), (x as __goscript_nat.nat), (x as __goscript_nat.nat))
		return (__goscript_nat.nat_norm(z) as __goscript_nat.nat)
	}

	if (stk == null) {
		stk = __goscript_nat.getStack()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.free())($.pointerValue<__goscript_nat.stack>(stk)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "math/big.(*stack).free-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
	}

	if (n < __goscript_get_karatsubaSqrThreshold()) {
		await basicSqr(stk, (z as __goscript_nat.nat), (x as __goscript_nat.nat))
		return (__goscript_nat.nat_norm(z) as __goscript_nat.nat)
	}

	await karatsubaSqr(stk, (z as __goscript_nat.nat), (x as __goscript_nat.nat))
	return (__goscript_nat.nat_norm(z) as __goscript_nat.nat)
}

export async function basicSqr(stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null, z: __goscript_nat.nat, x: __goscript_nat.nat): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	let n = $.sliceLen((x as __goscript_nat.nat))
	if (n < __goscript_get_basicSqrThreshold()) {
		basicMul((z as __goscript_nat.nat), (x as __goscript_nat.nat), (x as __goscript_nat.nat))
		return
	}

	const __goscriptDeferCallee3 = $.functionValue(((__receiver) => (n: number) => __receiver.restore(n))($.pointerValue<__goscript_nat.stack>(stk)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo), "math/big.(*stack).restore-fm")
	const __goscriptDeferArg1 = (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as __goscript_nat.stack).save() : __goscript_nat.stack.prototype.save.call(stk))
	__defer.defer(() => { __goscriptDeferCallee3(__goscriptDeferArg1) })
	let t: __goscript_nat.nat = (await (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as __goscript_nat.stack).nat(2 * n) : __goscript_nat.stack.prototype.nat.call(stk, 2 * n)) as __goscript_nat.nat)
	$.clear((t as __goscript_nat.nat))
	let __goscriptTuple1: any = __goscript_arith.mulWW($.arrayIndex(x!, 0), $.arrayIndex(x!, 0))
	$.sliceElems(z!)[$.sliceSlot(z!, 1)] = __goscriptTuple1[0]
	$.sliceElems(z!)[$.sliceSlot(z!, 0)] = __goscriptTuple1[1]
	for (let __goscriptSliceWindow0 = $.sliceRange(x), __goscriptSliceWindow1 = $.sliceRange(z), __goscriptSliceWindow2 = $.sliceRange(t), i = 1; i < n; i++) {
		let d = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as __goscript_arith.Word)
		// z collects the squares x[i] * x[i]
		let __goscriptTuple2: any = __goscript_arith.mulWW(d, d);
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, (2 * i) + 1)] = __goscriptTuple2[0];
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, 2 * i)] = __goscriptTuple2[1];
		// t collects the products x[i] * x[j] where j < i
		;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, 2 * i)] = __goscript_arith_decl_pure.addMulVVWW($.goSlice(t, i, 2 * i), $.goSlice(t, i, 2 * i), $.goSlice(x, 0, i), d, 0)
	}
	$.sliceElems(t!)[$.sliceSlot(t!, (2 * n) - 1)] = __goscript_arith_decl_pure.lshVU($.goSlice(t, 1, (2 * n) - 1), $.goSlice(t, 1, (2 * n) - 1), 1)
	__goscript_arith_decl_pure.addVV(z, z, t)
}

export function nat_mulAddWW(z: __goscript_nat.nat, x: __goscript_nat.nat, y: __goscript_arith.Word, r: __goscript_arith.Word): __goscript_nat.nat {
	let m = $.sliceLen((x as __goscript_nat.nat))
	if ((m == 0) || (y == 0)) {
		return (__goscript_nat.nat_setWord(z, r) as __goscript_nat.nat)
	}
	// m > 0

	z = (__goscript_nat.nat_make(z, m + 1) as __goscript_nat.nat)
	$.sliceElems(z!)[$.sliceSlot(z!, m)] = __goscript_arith_decl_pure.mulAddVWW($.goSlice(z, 0, m), x, y, r)

	return (__goscript_nat.nat_norm(z) as __goscript_nat.nat)
}

export function basicMul(z: __goscript_nat.nat, x: __goscript_nat.nat, y: __goscript_nat.nat): void {
	$.clear(($.goSlice(z, 0, $.sliceLen((x as __goscript_nat.nat)) + $.sliceLen((y as __goscript_nat.nat))) as __goscript_nat.nat))
	for (let __goscriptRangeTarget0 = y, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow3 = $.sliceRange(z), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let d = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as __goscript_arith.Word)
		if (d != 0) {
			;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, $.sliceLen((x as __goscript_nat.nat)) + i)] = __goscript_arith_decl_pure.addMulVVWW($.goSlice(z, i, i + $.sliceLen((x as __goscript_nat.nat))), $.goSlice(z, i, i + $.sliceLen((x as __goscript_nat.nat))), x, d, 0)
		}
	}
}

export async function karatsuba(stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null, z: __goscript_nat.nat, x: __goscript_nat.nat, y: __goscript_nat.nat): globalThis.Promise<void> {
	await using __defer = new $.AsyncDisposableStack()
	let n = $.sliceLen((y as __goscript_nat.nat))
	if (($.sliceLen((x as __goscript_nat.nat)) != n) || ($.sliceLen((z as __goscript_nat.nat)) != (2 * n))) {
		$.panic("bad karatsuba length")
	}

	// Fall back to basic algorithm if small enough.
	if ((n < __goscript_get_karatsubaThreshold()) || (n < 2)) {
		basicMul((z as __goscript_nat.nat), (x as __goscript_nat.nat), (y as __goscript_nat.nat))
		return
	}

	// Let the notation x1:x0 denote the nat (x1<<N)+x0 for some N,
	// and similarly z2:z1:z0 = (z2<<2N)+(z1<<N)+z0.
	//
	// (Note that z0, z1, z2 might be ≥ 2**N, in which case the high
	// bits of, say, z0 are being added to the low bits of z1 in this notation.)
	//
	// Karatsuba multiplication is based on the observation that
	//
	//	x1:x0 * y1:y0 = x1*y1:(x0*y1+y0*x1):x0*y0
	//	              = x1*y1:((x0-x1)*(y1-y0)+x1*y1+x0*y0):x0*y0
	//
	// The second form uses only three half-width multiplications
	// instead of the four that the straightforward first form does.
	//
	// We call the three pieces z0, z1, z2:
	//
	//	z0 = x0*y0
	//	z2 = x1*y1
	//	z1 = (x0-x1)*(y1-y0) + z0 + z2

	let n2 = globalThis.Math.trunc((n + 1) / 2)
	let x0: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null = (() => { const __goscriptLiteralField0 = (__goscript_nat.nat_norm($.goSlice(x, undefined, n2)) as __goscript_nat.nat); return new __goscript_int.Int({abs: __goscriptLiteralField0}) })()
	let x1: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null = (() => { const __goscriptLiteralField1 = (__goscript_nat.nat_norm($.goSlice(x, n2, undefined)) as __goscript_nat.nat); return new __goscript_int.Int({abs: __goscriptLiteralField1}) })()
	let y0: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null = (() => { const __goscriptLiteralField2 = (__goscript_nat.nat_norm($.goSlice(y, undefined, n2)) as __goscript_nat.nat); return new __goscript_int.Int({abs: __goscriptLiteralField2}) })()
	let y1: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null = (() => { const __goscriptLiteralField3 = (__goscript_nat.nat_norm($.goSlice(y, n2, undefined)) as __goscript_nat.nat); return new __goscript_int.Int({abs: __goscriptLiteralField3}) })()
	let z0: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null = new __goscript_int.Int({abs: ($.goSlice(z, 0, 2 * n2) as __goscript_nat.nat)})
	let z2: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null = new __goscript_int.Int({abs: ($.goSlice(z, 2 * n2, undefined) as __goscript_nat.nat)})

	// Allocate temporary storage for z1; repurpose z0 to hold tx and ty.
	const __goscriptDeferCallee4 = $.functionValue(((__receiver) => (n: number) => __receiver.restore(n))($.pointerValue<__goscript_nat.stack>(stk)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo), "math/big.(*stack).restore-fm")
	const __goscriptDeferArg2 = (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as __goscript_nat.stack).save() : __goscript_nat.stack.prototype.save.call(stk))
	__defer.defer(() => { __goscriptDeferCallee4(__goscriptDeferArg2) })
	let z1: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null = (await (async () => { const __goscriptLiteralField4 = (await (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as __goscript_nat.stack).nat((2 * n2) + 1) : __goscript_nat.stack.prototype.nat.call(stk, (2 * n2) + 1)) as __goscript_nat.nat); return new __goscript_int.Int({abs: __goscriptLiteralField4}) })())
	let tx: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null = new __goscript_int.Int({abs: ($.goSlice(z, 0, n2) as __goscript_nat.nat)})
	let ty: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null = new __goscript_int.Int({abs: ($.goSlice(z, n2, 2 * n2) as __goscript_nat.nat)})

	void (tx !== null && (tx as any).__isVarRef !== true && (tx as any).__goValue === undefined ? ((tx as any) as __goscript_int.Int).Sub(x0, x1) : __goscript_int.Int.prototype.Sub.call(tx, x0, x1))
	void (ty !== null && (ty as any).__isVarRef !== true && (ty as any).__goValue === undefined ? ((ty as any) as __goscript_int.Int).Sub(y1, y0) : __goscript_int.Int.prototype.Sub.call(ty, y1, y0))
	await (z1 !== null && (z1 as any).__isVarRef !== true && (z1 as any).__goValue === undefined ? ((z1 as any) as __goscript_int.Int).mul(stk, tx, ty) : __goscript_int.Int.prototype.mul.call(z1, stk, tx, ty))

	$.clear((z as __goscript_nat.nat))
	await (z0 !== null && (z0 as any).__isVarRef !== true && (z0 as any).__goValue === undefined ? ((z0 as any) as __goscript_int.Int).mul(stk, x0, y0) : __goscript_int.Int.prototype.mul.call(z0, stk, x0, y0))
	await (z2 !== null && (z2 as any).__isVarRef !== true && (z2 as any).__goValue === undefined ? ((z2 as any) as __goscript_int.Int).mul(stk, x1, y1) : __goscript_int.Int.prototype.mul.call(z2, stk, x1, y1))
	void (z1 !== null && (z1 as any).__isVarRef !== true && (z1 as any).__goValue === undefined ? ((z1 as any) as __goscript_int.Int).Add(z1, z0) : __goscript_int.Int.prototype.Add.call(z1, z1, z0))
	void (z1 !== null && (z1 as any).__isVarRef !== true && (z1 as any).__goValue === undefined ? ((z1 as any) as __goscript_int.Int).Add(z1, z2) : __goscript_int.Int.prototype.Add.call(z1, z1, z2))
	__goscript_nat.addTo(($.goSlice(z, n2, undefined) as __goscript_nat.nat), ($.pointerValue<__goscript_int.Int>(z1).abs as __goscript_nat.nat))

	// Debug mode: double-check answer and print trace on failure.
	const debug: boolean = false
	if (false) {
		let zz: __goscript_nat.nat = ($.makeSlice<__goscript_arith.Word>($.sliceLen((z as __goscript_nat.nat)), undefined, "number") as __goscript_nat.nat)
		basicMul((zz as __goscript_nat.nat), (x as __goscript_nat.nat), (y as __goscript_nat.nat))
		if (__goscript_nat.nat_cmp(z, (zz as __goscript_nat.nat)) != 0) {
			// All the temps were aliased to z and gone. Recompute.
			z0 = new __goscript_int.Int()
			await (z0 !== null && (z0 as any).__isVarRef !== true && (z0 as any).__goValue === undefined ? ((z0 as any) as __goscript_int.Int).mul(stk, x0, y0) : __goscript_int.Int.prototype.mul.call(z0, stk, x0, y0))
			tx = __goscript_int.Int.prototype.Sub.call(new __goscript_int.Int(), x1, x0)
			ty = __goscript_int.Int.prototype.Sub.call(new __goscript_int.Int(), y0, y1)
			z2 = new __goscript_int.Int()
			await (z2 !== null && (z2 as any).__isVarRef !== true && (z2 as any).__goValue === undefined ? ((z2 as any) as __goscript_int.Int).mul(stk, x1, y1) : __goscript_int.Int.prototype.mul.call(z2, stk, x1, y1))
			await $.print("karatsuba wrong\n")
			await trace("x ", new __goscript_int.Int({abs: (x as __goscript_nat.nat)}))
			await trace("y ", new __goscript_int.Int({abs: (y as __goscript_nat.nat)}))
			await trace("z ", new __goscript_int.Int({abs: (z as __goscript_nat.nat)}))
			await trace("zz", new __goscript_int.Int({abs: (zz as __goscript_nat.nat)}))
			await trace("x0", x0)
			await trace("x1", x1)
			await trace("y0", y0)
			await trace("y1", y1)
			await trace("tx", tx)
			await trace("ty", ty)
			await trace("z0", z0)
			await trace("z1", z1)
			await trace("z2", z2)
			$.panic("karatsuba")
		}
	}
}

export async function karatsubaSqr(stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null, z: __goscript_nat.nat, x: __goscript_nat.nat): globalThis.Promise<void> {
	await using __defer = new $.AsyncDisposableStack()
	let n = $.sliceLen((x as __goscript_nat.nat))
	if ($.sliceLen((z as __goscript_nat.nat)) != (2 * n)) {
		$.panic("bad karatsubaSqr length")
	}

	if ((n < __goscript_get_karatsubaSqrThreshold()) || (n < 2)) {
		await basicSqr(stk, (z as __goscript_nat.nat), (x as __goscript_nat.nat))
		return
	}

	// Recall that for karatsuba we want to compute:
	//
	//	x1:x0 * y1:y0 = x1y1:(x0y1+y0x1):x0y0
	//                = x1y1:((x0-x1)*(y1-y0)+x1y1+x0y0):x0y0
	//	              = z2:z1:z0
	// where:
	//
	//	z0 = x0y0
	//	z2 = x1y1
	//	z1 = (x0-x1)*(y1-y0) + z0 + z2
	//
	// When x = y, these simplify to:
	//
	//	z0 = x0²
	//	z2 = x1²
	//	z1 = z0 + z2 - (x0-x1)²

	let n2 = globalThis.Math.trunc((n + 1) / 2)
	let x0: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null = (() => { const __goscriptLiteralField5 = (__goscript_nat.nat_norm($.goSlice(x, undefined, n2)) as __goscript_nat.nat); return new __goscript_int.Int({abs: __goscriptLiteralField5}) })()
	let x1: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null = (() => { const __goscriptLiteralField6 = (__goscript_nat.nat_norm($.goSlice(x, n2, undefined)) as __goscript_nat.nat); return new __goscript_int.Int({abs: __goscriptLiteralField6}) })()
	let z0: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null = new __goscript_int.Int({abs: ($.goSlice(z, 0, 2 * n2) as __goscript_nat.nat)})
	let z2: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null = new __goscript_int.Int({abs: ($.goSlice(z, 2 * n2, undefined) as __goscript_nat.nat)})

	// Allocate temporary storage for z1; repurpose z0 to hold tx.
	const __goscriptDeferCallee5 = $.functionValue(((__receiver) => (n: number) => __receiver.restore(n))($.pointerValue<__goscript_nat.stack>(stk)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo), "math/big.(*stack).restore-fm")
	const __goscriptDeferArg3 = (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as __goscript_nat.stack).save() : __goscript_nat.stack.prototype.save.call(stk))
	__defer.defer(() => { __goscriptDeferCallee5(__goscriptDeferArg3) })
	let z1: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null = (await (async () => { const __goscriptLiteralField7 = (await (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as __goscript_nat.stack).nat((2 * n2) + 1) : __goscript_nat.stack.prototype.nat.call(stk, (2 * n2) + 1)) as __goscript_nat.nat); return new __goscript_int.Int({abs: __goscriptLiteralField7}) })())
	let tx: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null = new __goscript_int.Int({abs: ($.goSlice(z, 0, n2) as __goscript_nat.nat)})

	void (tx !== null && (tx as any).__isVarRef !== true && (tx as any).__goValue === undefined ? ((tx as any) as __goscript_int.Int).Sub(x0, x1) : __goscript_int.Int.prototype.Sub.call(tx, x0, x1))
	$.pointerValue<__goscript_int.Int>(z1).abs = (await nat_sqr($.pointerValue<__goscript_int.Int>(z1).abs, stk, ($.pointerValue<__goscript_int.Int>(tx).abs as __goscript_nat.nat)) as __goscript_nat.nat)
	$.pointerValue<__goscript_int.Int>(z1).neg = true

	$.clear((z as __goscript_nat.nat))
	$.pointerValue<__goscript_int.Int>(z0).abs = (await nat_sqr($.pointerValue<__goscript_int.Int>(z0).abs, stk, ($.pointerValue<__goscript_int.Int>(x0).abs as __goscript_nat.nat)) as __goscript_nat.nat)
	$.pointerValue<__goscript_int.Int>(z2).abs = (await nat_sqr($.pointerValue<__goscript_int.Int>(z2).abs, stk, ($.pointerValue<__goscript_int.Int>(x1).abs as __goscript_nat.nat)) as __goscript_nat.nat)
	void (z1 !== null && (z1 as any).__isVarRef !== true && (z1 as any).__goValue === undefined ? ((z1 as any) as __goscript_int.Int).Add(z1, z0) : __goscript_int.Int.prototype.Add.call(z1, z1, z0))
	void (z1 !== null && (z1 as any).__isVarRef !== true && (z1 as any).__goValue === undefined ? ((z1 as any) as __goscript_int.Int).Add(z1, z2) : __goscript_int.Int.prototype.Add.call(z1, z1, z2))
	__goscript_nat.addTo(($.goSlice(z, n2, undefined) as __goscript_nat.nat), ($.pointerValue<__goscript_int.Int>(z1).abs as __goscript_nat.nat))

	// Debug mode: double-check answer and print trace on failure.
	const debug: boolean = false
	if (false) {
		let zz: __goscript_nat.nat = ($.makeSlice<__goscript_arith.Word>($.sliceLen((z as __goscript_nat.nat)), undefined, "number") as __goscript_nat.nat)
		await basicSqr(stk, (zz as __goscript_nat.nat), (x as __goscript_nat.nat))
		if (__goscript_nat.nat_cmp(z, (zz as __goscript_nat.nat)) != 0) {
			// All the temps were aliased to z and gone. Recompute.
			tx = __goscript_int.Int.prototype.Sub.call(new __goscript_int.Int(), x0, x1)
			z0 = await __goscript_int.Int.prototype.Mul.call(new __goscript_int.Int(), x0, x0)
			z2 = await __goscript_int.Int.prototype.Mul.call(new __goscript_int.Int(), x1, x1)
			z1 = await __goscript_int.Int.prototype.Mul.call(new __goscript_int.Int(), tx, tx)
			void (z1 !== null && (z1 as any).__isVarRef !== true && (z1 as any).__goValue === undefined ? ((z1 as any) as __goscript_int.Int).Neg(z1) : __goscript_int.Int.prototype.Neg.call(z1, z1))
			void (z1 !== null && (z1 as any).__isVarRef !== true && (z1 as any).__goValue === undefined ? ((z1 as any) as __goscript_int.Int).Add(z1, z0) : __goscript_int.Int.prototype.Add.call(z1, z1, z0))
			void (z1 !== null && (z1 as any).__isVarRef !== true && (z1 as any).__goValue === undefined ? ((z1 as any) as __goscript_int.Int).Add(z1, z2) : __goscript_int.Int.prototype.Add.call(z1, z1, z2))
			await $.print("karatsubaSqr wrong\n")
			await trace("x ", new __goscript_int.Int({abs: (x as __goscript_nat.nat)}))
			await trace("z ", new __goscript_int.Int({abs: (z as __goscript_nat.nat)}))
			await trace("zz", new __goscript_int.Int({abs: (zz as __goscript_nat.nat)}))
			await trace("x0", x0)
			await trace("x1", x1)
			await trace("z0", z0)
			await trace("z1", z1)
			await trace("z2", z2)
			$.panic("karatsubaSqr")
		}
	}
}

export async function ifmt(x: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null): globalThis.Promise<string> {
	let neg = ""
	let s = await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as __goscript_int.Int).Text(16) : __goscript_int.Int.prototype.Text.call(x, 16))
	let t = ""
	if ($.stringEqual(s, "")) {
		s = "0x0"
	}
	if ($.indexString(s, 0) == 45) {
		let __goscriptAssign0_0: string = "-"
		let __goscriptAssign0_1: string = $.sliceStringOrBytes(s, 1, undefined)
		neg = __goscriptAssign0_0
		s = __goscriptAssign0_1
	}

	// Add _ between words.
	const D: number = 16
	while ($.stringLen(s) > 16) {
		let __goscriptAssign1_0: string = $.sliceStringOrBytes(s, undefined, $.stringLen(s) - 16)
		let __goscriptAssign1_1: string = $.concatString(($.concatString($.sliceStringOrBytes(s, $.stringLen(s) - 16, undefined), "_")), t)
		s = __goscriptAssign1_0
		t = __goscriptAssign1_1
	}
	return $.concatString(($.concatString(neg, s)), t)
}

export async function trace(name: string, x: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null): globalThis.Promise<void> {
	await $.print(name, "=", await ifmt(x), "\n")
}
