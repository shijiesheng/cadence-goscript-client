// Generated file based on rat.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as byteorder from "@goscript/internal/byteorder/index.js"

import type * as rand from "@goscript/math/rand/index.js"

import type * as __goscript_accuracy_string from "./accuracy_string.gs.ts"

import * as __goscript_arith from "./arith.gs.ts"

import type * as __goscript_float from "./float.gs.ts"

import * as __goscript_int from "./int.gs.ts"

import * as __goscript_intconv from "./intconv.gs.ts"

import * as __goscript_intmarsh from "./intmarsh.gs.ts"

import * as __goscript_nat from "./nat.gs.ts"

import * as __goscript_natconv from "./natconv.gs.ts"

import * as __goscript_natdiv from "./natdiv.gs.ts"

import * as __goscript_natmul from "./natmul.gs.ts"

import * as __goscript_prime from "./prime.gs.ts"

import * as __goscript_ratconv from "./ratconv.gs.ts"

import * as __goscript_ratmarsh from "./ratmarsh.gs.ts"

import type * as __goscript_roundingmode_string from "./roundingmode_string.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/internal/byteorder/index.js"
import "./arith.gs.ts"
import "./int.gs.ts"
import "./intconv.gs.ts"
import "./intmarsh.gs.ts"
import "./nat.gs.ts"
import "./natconv.gs.ts"
import "./natdiv.gs.ts"
import "./natmul.gs.ts"
import "./prime.gs.ts"
import "./ratconv.gs.ts"
import "./ratmarsh.gs.ts"

$.registerTypePackagePath("math/big", ["big.Rat"])

export class Rat {
	// To make zero values for Rat work w/o initialization,
	// a zero value of b (len(b) == 0) acts like b == 1. At
	// the earliest opportunity (when an assignment to the Rat
	// is made), such uninitialized denominators are set to 1.
	// a.neg determines the sign of the Rat, b.neg is ignored.
	public get a(): __goscript_int.Int {
		return this._fields.a
	}

	public set a(value: __goscript_int.Int) {
		this._fields.a = value
	}

	// To make zero values for Rat work w/o initialization,
	// a zero value of b (len(b) == 0) acts like b == 1. At
	// the earliest opportunity (when an assignment to the Rat
	// is made), such uninitialized denominators are set to 1.
	// a.neg determines the sign of the Rat, b.neg is ignored.
	public get b(): __goscript_int.Int {
		return this._fields.b
	}

	public set b(value: __goscript_int.Int) {
		this._fields.b = value
	}

	public _fields: {
		a: __goscript_int.Int
		b: __goscript_int.Int
	}

	constructor(init?: Partial<{a?: __goscript_int.Int, b?: __goscript_int.Int}>, __goscriptValue?: boolean) {
		this._fields = {
			a: init?.a ? init.a.clone() : new __goscript_int.Int(undefined, true),
			b: init?.b ? init.b.clone() : new __goscript_int.Int(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Rat {
		return new Rat(this, true)
	}

	public __goscriptAssign(source: Rat): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.a, values.a)
		$.assignStruct(target.b, values.b)
	}

	public Abs(x: Rat | $.VarRef<Rat> | null): Rat | $.VarRef<Rat> | null {
		let z: Rat | $.VarRef<Rat> | null = this;
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Rat).Set(x) : Rat.prototype.Set.call(z, x))
		$.pointerValue<Rat>(z).a.neg = false
		return z
	}

	public async Add(x: Rat | $.VarRef<Rat> | null, y: Rat | $.VarRef<Rat> | null): globalThis.Promise<Rat | $.VarRef<Rat> | null> {
		let z: Rat | $.VarRef<Rat> | null = this;
		using __defer = new $.DisposableStack()
		const z$: Rat = z == null ? $.pointerTarget<Rat>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Rat>(z)
		let stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null = __goscript_nat.getStack()
		__defer.defer(() => { (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as __goscript_nat.stack).free() : __goscript_nat.stack.prototype.free.call(stk)) })

		let a1: $.VarRef<__goscript_int.Int> = $.varRef(new __goscript_int.Int(undefined, true))
		let a2: $.VarRef<__goscript_int.Int> = $.varRef(new __goscript_int.Int(undefined, true))
		await a1.value.scaleDenom(stk, $.fieldRef($.pointerValue<Rat>(x)._fields, "a"), ($.pointerValue<Rat>(y).b.abs as __goscript_nat.nat))
		await a2.value.scaleDenom(stk, $.fieldRef($.pointerValue<Rat>(y)._fields, "a"), ($.pointerValue<Rat>(x).b.abs as __goscript_nat.nat))
		void (z$ as Rat).a.Add(a1, a2);
		;(z$ as Rat).b.abs = (await mulDenom(stk, ((z$ as Rat).b.abs as __goscript_nat.nat), ($.pointerValue<Rat>(x).b.abs as __goscript_nat.nat), ($.pointerValue<Rat>(y).b.abs as __goscript_nat.nat)) as __goscript_nat.nat)
		return await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Rat).norm() : Rat.prototype.norm.call(z))
	}

	public async AppendText(b: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const x: Rat | $.VarRef<Rat> | null = this;
		if ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Rat).IsInt() : Rat.prototype.IsInt.call(x))) {
			return $.pointerValue<Rat>(x).a.AppendText(b)
		}
		return [await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Rat).marshal(b) : Rat.prototype.marshal.call(x, b)), null]
	}

	public async Cmp(y: Rat | $.VarRef<Rat> | null): globalThis.Promise<number> {
		const x: Rat | $.VarRef<Rat> | null = this;
		using __defer = new $.DisposableStack()
		const x$: Rat = x == null ? $.pointerTarget<Rat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Rat>(x)
		const y$: Rat = y == null ? $.pointerTarget<Rat>(y) : (y as any).__isVarRef === true ? (y as any).value : (y as any).__goValue === undefined ? (y as any) : $.pointerTarget<Rat>(y)
		let a: $.VarRef<__goscript_int.Int> = $.varRef(new __goscript_int.Int(undefined, true))
		let b: $.VarRef<__goscript_int.Int> = $.varRef(new __goscript_int.Int(undefined, true))
		let stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null = __goscript_nat.getStack()
		__defer.defer(() => { (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as __goscript_nat.stack).free() : __goscript_nat.stack.prototype.free.call(stk)) })
		await a.value.scaleDenom(stk, $.fieldRef((x$ as Rat)._fields, "a"), ((y$ as Rat).b.abs as __goscript_nat.nat))
		await b.value.scaleDenom(stk, $.fieldRef((y$ as Rat)._fields, "a"), ((x$ as Rat).b.abs as __goscript_nat.nat))
		return a.value.Cmp(b)
	}

	public Denom(): __goscript_int.Int | $.VarRef<__goscript_int.Int> | null {
		const x: Rat | $.VarRef<Rat> | null = this;
		const x$: Rat = x == null ? $.pointerTarget<Rat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Rat>(x)
		// Note that x.b.neg is guaranteed false.
		if ($.sliceLen(((x$ as Rat).b.abs as __goscript_nat.nat)) == 0) {
			// Note: If this proves problematic, we could
			//       panic instead and require the Rat to
			//       be explicitly initialized.
			return new __goscript_int.Int({abs: ($.arrayToSlice<__goscript_arith.Word>([1]) as __goscript_nat.nat)})
		}
		return $.fieldRef((x$ as Rat)._fields, "b")
	}

	public async Float32(): globalThis.Promise<[number, boolean]> {
		const x: Rat | $.VarRef<Rat> | null = this;
		let f: number = 0
		let exact: boolean = false
		using __defer = new $.DisposableStack()
		const x$: Rat = x == null ? $.pointerTarget<Rat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Rat>(x)
		let b: __goscript_nat.nat = ((x$ as Rat).b.abs as __goscript_nat.nat)
		if ($.sliceLen((b as __goscript_nat.nat)) == 0) {
			b = (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)
		}
		let stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null = __goscript_nat.getStack()
		__defer.defer(() => { (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as __goscript_nat.stack).free() : __goscript_nat.stack.prototype.free.call(stk)) })
		let __goscriptTuple0: any = await quotToFloat32(stk, ((x$ as Rat).a.abs as __goscript_nat.nat), (b as __goscript_nat.nat))
		f = __goscriptTuple0[0]
		exact = __goscriptTuple0[1]
		if ((x$ as Rat).a.neg) {
			f = -f
		}
		__defer.dispose()
		return [f, exact]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Float64(): globalThis.Promise<[number, boolean]> {
		const x: Rat | $.VarRef<Rat> | null = this;
		let f: number = 0
		let exact: boolean = false
		using __defer = new $.DisposableStack()
		const x$: Rat = x == null ? $.pointerTarget<Rat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Rat>(x)
		let b: __goscript_nat.nat = ((x$ as Rat).b.abs as __goscript_nat.nat)
		if ($.sliceLen((b as __goscript_nat.nat)) == 0) {
			b = (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)
		}
		let stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null = __goscript_nat.getStack()
		__defer.defer(() => { (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as __goscript_nat.stack).free() : __goscript_nat.stack.prototype.free.call(stk)) })
		let __goscriptTuple1: any = await quotToFloat64(stk, ((x$ as Rat).a.abs as __goscript_nat.nat), (b as __goscript_nat.nat))
		f = __goscriptTuple1[0]
		exact = __goscriptTuple1[1]
		if ((x$ as Rat).a.neg) {
			f = -f
		}
		__defer.dispose()
		return [f, exact]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async FloatPrec(): globalThis.Promise<[number, boolean]> {
		const x: Rat | $.VarRef<Rat> | null = this;
		let n: number = 0
		let exact: boolean = false
		using __defer = new $.DisposableStack()
		let stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null = __goscript_nat.getStack()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.free())($.pointerValue<__goscript_nat.stack>(stk)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "math/big.(*stack).free-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		let d: __goscript_nat.nat = ($.pointerValue<__goscript_int.Int>((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Rat).Denom() : Rat.prototype.Denom.call(x))).abs as __goscript_nat.nat)

		let q: __goscript_nat.nat = null! as __goscript_nat.nat
		let p2 = __goscript_nat.nat_trailingZeroBits(d)
		q = (__goscript_nat.nat_rsh(q, (d as __goscript_nat.nat), p2) as __goscript_nat.nat)
		// Note: If this proves problematic, we could
		//       panic instead and require the Rat to
		//       be explicitly initialized.

		const fp: number = 13
		let tab: $.Slice<__goscript_nat.nat> = null! as $.Slice<__goscript_nat.nat>
		let f: __goscript_nat.nat = ($.arrayToSlice<__goscript_arith.Word>([1220703125]) as __goscript_nat.nat)
		let t: __goscript_nat.nat = null! as __goscript_nat.nat
		let r: __goscript_nat.nat = null! as __goscript_nat.nat
		while (true) {
			{
				let __goscriptTuple2: any = await __goscript_natdiv.nat_div(t, stk, (r as __goscript_nat.nat), (q as __goscript_nat.nat), (f as __goscript_nat.nat))
				r = (__goscriptTuple2[1] as __goscript_nat.nat)
				if ($.sliceLen((r as __goscript_nat.nat)) != 0) {
					break
				}
			}
			tab = $.appendOne(tab, (f as __goscript_nat.nat), $.appendZeros.nil)
			f = (await __goscript_natmul.nat_sqr((null as __goscript_nat.nat), stk, (f as __goscript_nat.nat)) as __goscript_nat.nat)
		}

		// z is fraction; normalize numerator and denominator

		let p5: number = 0
		for (let i = $.sliceLen(tab) - 1; i >= 0; i--) {
			{
				let __goscriptTuple3: any = await __goscript_natdiv.nat_div(t, stk, (r as __goscript_nat.nat), (q as __goscript_nat.nat), ($.arrayIndex(tab!, i) as __goscript_nat.nat))
				t = (__goscriptTuple3[0] as __goscript_nat.nat)
				r = (__goscriptTuple3[1] as __goscript_nat.nat)
				if ($.sliceLen((r as __goscript_nat.nat)) == 0) {
					p5 = $.uint($.uint64Add(p5, $.uint($.uint64Mul(13n, ($.uint($.uint64Shl(1n, i), 64))), 64)), 64)
					q = (__goscript_nat.nat__set(q, (t as __goscript_nat.nat)) as __goscript_nat.nat)
				}
			}
		}

		while (true) {
			{
				let __goscriptTuple4: any = await __goscript_natdiv.nat_div(t, stk, (r as __goscript_nat.nat), (q as __goscript_nat.nat), (__goscript_nat.natFive as __goscript_nat.nat))
				t = (__goscriptTuple4[0] as __goscript_nat.nat)
				r = (__goscriptTuple4[1] as __goscript_nat.nat)
				if ($.sliceLen((r as __goscript_nat.nat)) != 0) {
					break
				}
			}
			p5++
			q = (__goscript_nat.nat__set(q, (t as __goscript_nat.nat)) as __goscript_nat.nat)
		}

		const __goscriptReturn1: [number, boolean] = [$.int($.max(p2, p5)), __goscript_nat.nat_cmp(q, (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) == 0]
		n = __goscriptReturn1[0]
		exact = __goscriptReturn1[1]
		__defer.dispose()
		return [n, exact]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async FloatString(prec: number): globalThis.Promise<string> {
		const x: Rat | $.VarRef<Rat> | null = this;
		using __defer = new $.DisposableStack()
		const x$: Rat = x == null ? $.pointerTarget<Rat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Rat>(x)
		let buf: $.Slice<number> = null! as $.Slice<number>
		// SetInt sets z to x (by making a copy of x) and returns z.
		if ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Rat).IsInt() : Rat.prototype.IsInt.call(x))) {
			buf = await (x$ as Rat).a.Append(buf, 10)
			if (prec > 0) {
				buf = $.append(buf, $.uint(46, 8), $.byteSliceHint)
				for (let i = prec; i > 0; i--) {
					buf = $.append(buf, $.uint(48, 8), $.byteSliceHint)
				}
			}
			return $.bytesToString(buf)
		}

		let stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null = __goscript_nat.getStack()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.free())($.pointerValue<__goscript_nat.stack>(stk)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "math/big.(*stack).free-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		let __goscriptTuple5: any = await __goscript_natdiv.nat_div((null as __goscript_nat.nat), stk, ((null as __goscript_nat.nat) as __goscript_nat.nat), ((x$ as Rat).a.abs as __goscript_nat.nat), ((x$ as Rat).b.abs as __goscript_nat.nat))
		let q: __goscript_nat.nat = (__goscriptTuple5[0] as __goscript_nat.nat)
		let r: __goscript_nat.nat = (__goscriptTuple5[1] as __goscript_nat.nat)

		let p: __goscript_nat.nat = (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)
		if (prec > 0) {
			p = (await __goscript_nat.nat_expNN((null as __goscript_nat.nat), stk, (__goscript_nat.natTen as __goscript_nat.nat), (__goscript_nat.nat_setUint64((null as __goscript_nat.nat), $.uint64(prec)) as __goscript_nat.nat), (null as __goscript_nat.nat), false) as __goscript_nat.nat)
		}
		// Set sets z to x (by making a copy of x) and returns z.
		r = (await __goscript_natmul.nat_mul(r, stk, (r as __goscript_nat.nat), (p as __goscript_nat.nat)) as __goscript_nat.nat)
		let __goscriptTuple6: any = await __goscript_natdiv.nat_div(r, stk, ((null as __goscript_nat.nat) as __goscript_nat.nat), (r as __goscript_nat.nat), ((x$ as Rat).b.abs as __goscript_nat.nat))
		r = (__goscriptTuple6[0] as __goscript_nat.nat)
		let r2: __goscript_nat.nat = (__goscriptTuple6[1] as __goscript_nat.nat)

		r2 = (__goscript_nat.nat_add(r2, (r2 as __goscript_nat.nat), (r2 as __goscript_nat.nat)) as __goscript_nat.nat)
		if (__goscript_nat.nat_cmp((x$ as Rat).b.abs, (r2 as __goscript_nat.nat)) <= 0) {
			r = (__goscript_nat.nat_add(r, (r as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat)
			if (__goscript_nat.nat_cmp(r, (p as __goscript_nat.nat)) >= 0) {
				q = (__goscript_nat.nat_add((null as __goscript_nat.nat), (q as __goscript_nat.nat), (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) as __goscript_nat.nat)
				r = (__goscript_nat.nat_sub((null as __goscript_nat.nat), (r as __goscript_nat.nat), (p as __goscript_nat.nat)) as __goscript_nat.nat)
			}
		}

		if ((x$ as Rat).a.neg) {
			buf = $.append(buf, $.uint(45, 8), $.byteSliceHint)
		}
		buf = $.appendSlice(buf, await __goscript_natconv.nat_utoa(q, 10), $.byteSliceHint)

		if (prec > 0) {
			buf = $.append(buf, $.uint(46, 8), $.byteSliceHint)
			let rs: $.Slice<number> = await __goscript_natconv.nat_utoa(r, 10)
			for (let i = prec - $.sliceLen(rs); i > 0; i--) {
				buf = $.append(buf, $.uint(48, 8), $.byteSliceHint)
			}
			buf = $.appendSlice(buf, rs, $.byteSliceHint)
		}

		return $.bytesToString(buf)
	}

	public GobDecode(buf: $.Slice<number>): $.GoError {
		let z: Rat | $.VarRef<Rat> | null = this;
		const z$: Rat = z == null ? $.pointerTarget<Rat>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Rat>(z)
		if ($.sliceLen(buf) == 0) {
			// non-finite
			$.assignStruct((z$ as Rat), new Rat(undefined, true))
			return null
		}
		if ($.sliceLen(buf) < 5) {
			return errors.New("Rat.GobDecode: buffer too small")
		}
		let b = $.arrayIndex(buf!, 0)
		if ($.uint(($.uintShr(b, 1, 8)), 8) != 1) {
			return fmt.Errorf("Rat.GobDecode: encoding version %d not supported", $.basicInterfaceValue($.uintShr(b, 1, 8), "byte", "uint8"))
		}
		const j: number = 5
		let ln = byteorder.BEUint32($.goSlice(buf, 5 - 4, 5))
		if ($.uint64(ln) > 9223372036854775802n) {
			return errors.New("Rat.GobDecode: invalid length")
		}
		let i = 5 + $.int(ln)
		if ($.sliceLen(buf) < i) {
			return errors.New("Rat.GobDecode: buffer too small")
		}
		;(z$ as Rat).a.neg = $.uint((b & 1), 8) != 0;
		;(z$ as Rat).a.abs = (__goscript_nat.nat_setBytes((z$ as Rat).a.abs, $.goSlice(buf, 5, i)) as __goscript_nat.nat);
		;(z$ as Rat).b.abs = (__goscript_nat.nat_setBytes((z$ as Rat).b.abs, $.goSlice(buf, i, undefined)) as __goscript_nat.nat)
		return null
	}

	public GobEncode(): [$.Slice<number>, $.GoError] {
		const x: Rat | $.VarRef<Rat> | null = this;
		const x$: Rat = x == null ? $.pointerTarget<Rat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Rat>(x)
		if (x == null) {
			return [null, null]
		}
		let buf: $.Slice<number> = $.makeSlice<number>((1 + 4) + (($.sliceLen(((x$ as Rat).a.abs as __goscript_nat.nat)) + $.sliceLen(((x$ as Rat).b.abs as __goscript_nat.nat))) * 8), undefined, "byte")
		let i = __goscript_nat.nat_bytes((x$ as Rat).b.abs, buf)
		let j = __goscript_nat.nat_bytes((x$ as Rat).a.abs, $.goSlice(buf, undefined, i))
		let n = i - j
		if ($.int($.uint(n, 32)) != n) {

			return [null, errors.New("Rat.GobEncode: numerator too large")]
		}
		byteorder.BEPutUint32($.goSlice(buf, j - 4, j), $.uint(n, 32))
		j = j - (5)
		let b = 2
		if ((x$ as Rat).a.neg) {
			b = b | (1)
		}
		$.sliceElems(buf!)[$.sliceSlot(buf!, j)] = b
		return [$.goSlice(buf, j, undefined), null]
	}

	public Inv(x: Rat | $.VarRef<Rat> | null): Rat | $.VarRef<Rat> | null {
		let z: Rat | $.VarRef<Rat> | null = this;
		const z$: Rat = z == null ? $.pointerTarget<Rat>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Rat>(z)
		if ($.sliceLen(($.pointerValue<Rat>(x).a.abs as __goscript_nat.nat)) == 0) {
			$.panic("division by zero")
		}
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Rat).Set(x) : Rat.prototype.Set.call(z, x))
		let __goscriptAssign0_0: __goscript_nat.nat = ((z$ as Rat).b.abs as __goscript_nat.nat)
		let __goscriptAssign0_1: __goscript_nat.nat = ((z$ as Rat).a.abs as __goscript_nat.nat);
		;(z$ as Rat).a.abs = __goscriptAssign0_0;
		;(z$ as Rat).b.abs = __goscriptAssign0_1
		return z
	}

	public IsInt(): boolean {
		const x: Rat | $.VarRef<Rat> | null = this;
		const x$: Rat = x == null ? $.pointerTarget<Rat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Rat>(x)
		return ($.sliceLen(((x$ as Rat).b.abs as __goscript_nat.nat)) == 0) || (__goscript_nat.nat_cmp((x$ as Rat).b.abs, (__goscript_nat.__goscript_get_natOne() as __goscript_nat.nat)) == 0)
	}

	public async MarshalText(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const x: Rat | $.VarRef<Rat> | null = this;
		let text: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Rat).AppendText(null) : Rat.prototype.AppendText.call(x, null))
	}

	public async Mul(x: Rat | $.VarRef<Rat> | null, y: Rat | $.VarRef<Rat> | null): globalThis.Promise<Rat | $.VarRef<Rat> | null> {
		let z: Rat | $.VarRef<Rat> | null = this;
		using __defer = new $.DisposableStack()
		const z$: Rat = z == null ? $.pointerTarget<Rat>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Rat>(z)
		let stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null = __goscript_nat.getStack()
		__defer.defer(() => { (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as __goscript_nat.stack).free() : __goscript_nat.stack.prototype.free.call(stk)) })

		if ($.pointerEqual(x, y)) {
			// a squared Rat is positive and can't be reduced (no need to call norm())
			;(z$ as Rat).a.neg = false;
			;(z$ as Rat).a.abs = (await __goscript_natmul.nat_sqr((z$ as Rat).a.abs, stk, ($.pointerValue<Rat>(x).a.abs as __goscript_nat.nat)) as __goscript_nat.nat)
			if ($.sliceLen(($.pointerValue<Rat>(x).b.abs as __goscript_nat.nat)) == 0) {
				;(z$ as Rat).b.abs = (__goscript_nat.nat_setWord((z$ as Rat).b.abs, 1) as __goscript_nat.nat)
			} else {
				;(z$ as Rat).b.abs = (await __goscript_natmul.nat_sqr((z$ as Rat).b.abs, stk, ($.pointerValue<Rat>(x).b.abs as __goscript_nat.nat)) as __goscript_nat.nat)
			}
			return z
		}

		await (z$ as Rat).a.mul(stk, $.fieldRef($.pointerValue<Rat>(x)._fields, "a"), $.fieldRef($.pointerValue<Rat>(y)._fields, "a"));
		;(z$ as Rat).b.abs = (await mulDenom(stk, ((z$ as Rat).b.abs as __goscript_nat.nat), ($.pointerValue<Rat>(x).b.abs as __goscript_nat.nat), ($.pointerValue<Rat>(y).b.abs as __goscript_nat.nat)) as __goscript_nat.nat)
		return await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Rat).norm() : Rat.prototype.norm.call(z))
	}

	public Neg(x: Rat | $.VarRef<Rat> | null): Rat | $.VarRef<Rat> | null {
		let z: Rat | $.VarRef<Rat> | null = this;
		const z$: Rat = z == null ? $.pointerTarget<Rat>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Rat>(z)
		void (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Rat).Set(x) : Rat.prototype.Set.call(z, x));
		;(z$ as Rat).a.neg = ($.sliceLen(((z$ as Rat).a.abs as __goscript_nat.nat)) > 0) && !(z$ as Rat).a.neg
		return z
	}

	public Num(): __goscript_int.Int | $.VarRef<__goscript_int.Int> | null {
		const x: Rat | $.VarRef<Rat> | null = this;
		return $.fieldRef($.pointerValue<Rat>(x)._fields, "a")
	}

	public async Quo(x: Rat | $.VarRef<Rat> | null, y: Rat | $.VarRef<Rat> | null): globalThis.Promise<Rat | $.VarRef<Rat> | null> {
		let z: Rat | $.VarRef<Rat> | null = this;
		using __defer = new $.DisposableStack()
		const z$: Rat = z == null ? $.pointerTarget<Rat>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Rat>(z)
		let stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null = __goscript_nat.getStack()
		__defer.defer(() => { (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as __goscript_nat.stack).free() : __goscript_nat.stack.prototype.free.call(stk)) })

		if ($.sliceLen(($.pointerValue<Rat>(y).a.abs as __goscript_nat.nat)) == 0) {
			$.panic("division by zero")
		}
		let a: $.VarRef<__goscript_int.Int> = $.varRef(new __goscript_int.Int(undefined, true))
		let b: $.VarRef<__goscript_int.Int> = $.varRef(new __goscript_int.Int(undefined, true))
		await a.value.scaleDenom(stk, $.fieldRef($.pointerValue<Rat>(x)._fields, "a"), ($.pointerValue<Rat>(y).b.abs as __goscript_nat.nat))
		await b.value.scaleDenom(stk, $.fieldRef($.pointerValue<Rat>(y)._fields, "a"), ($.pointerValue<Rat>(x).b.abs as __goscript_nat.nat));
		;(z$ as Rat).a.abs = (a.value.abs as __goscript_nat.nat);
		;(z$ as Rat).b.abs = (b.value.abs as __goscript_nat.nat);
		;(z$ as Rat).a.neg = a.value.neg != b.value.neg
		return await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Rat).norm() : Rat.prototype.norm.call(z))
	}

	public async RatString(): globalThis.Promise<string> {
		const x: Rat | $.VarRef<Rat> | null = this;
		if ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Rat).IsInt() : Rat.prototype.IsInt.call(x))) {
			return $.pointerValue<Rat>(x).a.String()
		}
		return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Rat).String() : Rat.prototype.String.call(x))
	}

	public async Scan(s: fmt.ScanState | null, ch: number): globalThis.Promise<$.GoError> {
		const z: Rat | $.VarRef<Rat> | null = this;
		let __goscriptTuple7: any = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt.ScanState, null>) : $.pointerValue<Exclude<fmt.ScanState, null>>(s)).Token(true, __goscript_ratconv.ratTok)
		let tok: $.Slice<number> = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		if (err != null) {
			return err
		}
		if (!strings.ContainsRune("efgEFGv", ch)) {
			return errors.New("Rat.Scan: invalid verb")
		}
		{
			let [, ok] = await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Rat).SetString($.bytesToString(tok)) : Rat.prototype.SetString.call(z, $.bytesToString(tok)))
			if (!ok) {
				return errors.New("Rat.Scan: invalid syntax")
			}
		}
		return null
	}

	public Set(x: Rat | $.VarRef<Rat> | null): Rat | $.VarRef<Rat> | null {
		let z: Rat | $.VarRef<Rat> | null = this;
		const z$: Rat = z == null ? $.pointerTarget<Rat>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Rat>(z)
		const x$: Rat = x == null ? $.pointerTarget<Rat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Rat>(x)
		if (!$.pointerEqual(z, x)) {
			void (z$ as Rat).a.Set($.fieldRef((x$ as Rat)._fields, "a"))
			void (z$ as Rat).b.Set($.fieldRef((x$ as Rat)._fields, "b"))
		}
		if ($.sliceLen(((z$ as Rat).b.abs as __goscript_nat.nat)) == 0) {
			;(z$ as Rat).b.abs = (__goscript_nat.nat_setWord((z$ as Rat).b.abs, 1) as __goscript_nat.nat)
		}
		return z
	}

	public async SetFloat64(f: number): globalThis.Promise<Rat | $.VarRef<Rat> | null> {
		let z: Rat | $.VarRef<Rat> | null = this;
		const z$: Rat = z == null ? $.pointerTarget<Rat>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Rat>(z)
		const expMask: number = 2047
		let bits = math.Float64bits(f)
		let mantissa = $.uint64And(bits, 4503599627370495n)
		let exp = $.int($.uint64And(($.uint64Shr(bits, 52n)), 2047n))
		switch (exp) {
			case 2047:
			{
				return null
				break
			}
			case 0:
			{
				exp = exp - (1022)
				break
			}
			default:
			{
				mantissa = $.uint64Or(mantissa, 4503599627370496n)
				exp = exp - (1023)
				break
			}
		}

		let shift = 52 - exp

		// Optimization (?): partially pre-normalise.
		while ((($.uint64And(mantissa, 1n)) == 0n) && (shift > 0)) {
			mantissa = $.uint64Shr(mantissa, 1n)
			shift--
		}

		void (z$ as Rat).a.SetUint64(mantissa);
		;(z$ as Rat).a.neg = f < 0
		void (z$ as Rat).b.Set(__goscript_int.__goscript_get_intOne())
		if (shift > 0) {
			void (z$ as Rat).b.Lsh($.fieldRef((z$ as Rat)._fields, "b"), $.uint(shift, 64))
		} else {
			void (z$ as Rat).a.Lsh($.fieldRef((z$ as Rat)._fields, "a"), $.uint(-shift, 64))
		}
		return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Rat).norm() : Rat.prototype.norm.call(z))
	}

	public async SetFrac(a: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null, b: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null): globalThis.Promise<Rat | $.VarRef<Rat> | null> {
		let z: Rat | $.VarRef<Rat> | null = this;
		const z$: Rat = z == null ? $.pointerTarget<Rat>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Rat>(z);
		;(z$ as Rat).a.neg = $.pointerValue<__goscript_int.Int>(a).neg != $.pointerValue<__goscript_int.Int>(b).neg
		let babs: __goscript_nat.nat = ($.pointerValue<__goscript_int.Int>(b).abs as __goscript_nat.nat)
		if ($.sliceLen((babs as __goscript_nat.nat)) == 0) {
			$.panic("division by zero")
		}
		if (($.pointerEqual($.fieldRef((z$ as Rat)._fields, "a"), b)) || __goscript_nat.alias(((z$ as Rat).a.abs as __goscript_nat.nat), (babs as __goscript_nat.nat))) {
			babs = (__goscript_nat.nat__set((null as __goscript_nat.nat), (babs as __goscript_nat.nat)) as __goscript_nat.nat)
		}
		;(z$ as Rat).a.abs = (__goscript_nat.nat__set((z$ as Rat).a.abs, ($.pointerValue<__goscript_int.Int>(a).abs as __goscript_nat.nat)) as __goscript_nat.nat);
		;(z$ as Rat).b.abs = (__goscript_nat.nat__set((z$ as Rat).b.abs, (babs as __goscript_nat.nat)) as __goscript_nat.nat)
		return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Rat).norm() : Rat.prototype.norm.call(z))
	}

	public async SetFrac64(a: bigint, b: bigint): globalThis.Promise<Rat | $.VarRef<Rat> | null> {
		let z: Rat | $.VarRef<Rat> | null = this;
		const z$: Rat = z == null ? $.pointerTarget<Rat>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Rat>(z)
		if (b == 0n) {
			$.panic("division by zero")
		}
		void (z$ as Rat).a.SetInt64(a)
		if (b < 0n) {
			b = -b;
			;(z$ as Rat).a.neg = !(z$ as Rat).a.neg
		}
		;(z$ as Rat).b.abs = (__goscript_nat.nat_setUint64((z$ as Rat).b.abs, $.uint64(b)) as __goscript_nat.nat)
		return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Rat).norm() : Rat.prototype.norm.call(z))
	}

	public SetInt(x: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null): Rat | $.VarRef<Rat> | null {
		let z: Rat | $.VarRef<Rat> | null = this;
		const z$: Rat = z == null ? $.pointerTarget<Rat>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Rat>(z)
		void (z$ as Rat).a.Set(x);
		;(z$ as Rat).b.abs = (__goscript_nat.nat_setWord((z$ as Rat).b.abs, 1) as __goscript_nat.nat)
		return z
	}

	public SetInt64(x: bigint): Rat | $.VarRef<Rat> | null {
		let z: Rat | $.VarRef<Rat> | null = this;
		const z$: Rat = z == null ? $.pointerTarget<Rat>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Rat>(z)
		void (z$ as Rat).a.SetInt64(x);
		;(z$ as Rat).b.abs = (__goscript_nat.nat_setWord((z$ as Rat).b.abs, 1) as __goscript_nat.nat)
		return z
	}

	public async SetString(s: string): globalThis.Promise<[Rat | $.VarRef<Rat> | null, boolean]> {
		let z: Rat | $.VarRef<Rat> | null = this;
		using __defer = new $.DisposableStack()
		const z$: Rat = z == null ? $.pointerTarget<Rat>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Rat>(z)
		if ($.stringLen(s) == 0) {
			return [null, false]
		}

		{
			let sep = strings.Index(s, "/")
			if (sep >= 0) {
				{
					let [, ok] = await (z$ as Rat).a.SetString($.sliceStringOrBytes(s, undefined, sep), 0)
					if (!ok) {
						return [null, false]
					}
				}
				let r: strings.Reader | $.VarRef<strings.Reader> | null = strings.NewReader($.sliceStringOrBytes(s, sep + 1, undefined))
				let err: $.GoError = null! as $.GoError
				{
					let __goscriptTuple8: any = await __goscript_natconv.nat_scan((z$ as Rat).b.abs, $.interfaceValue<io.ByteScanner | null>(r, "*strings.Reader", /* @__PURE__ */ $.pointerType("strings.Reader")), 0, false);
					;(z$ as Rat).b.abs = (__goscriptTuple8[0] as __goscript_nat.nat)
					err = __goscriptTuple8[3]
					if (err != null) {
						return [null, false]
					}
				}

				{
					let __goscriptTuple9: any = strings.Reader.prototype.ReadByte.call($.pointerValue<strings.Reader>(r))
					err = __goscriptTuple9[1]
					if (!$.comparableEqual(err, io.EOF)) {
						return [null, false]
					}
				}
				if ($.sliceLen(((z$ as Rat).b.abs as __goscript_nat.nat)) == 0) {
					return [null, false]
				}
				return [await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Rat).norm() : Rat.prototype.norm.call(z)), true]
			}
		}

		// incl. implicit 1
		let r: strings.Reader | $.VarRef<strings.Reader> | null = strings.NewReader(s)

		// exponent
		let [neg, err] = await __goscript_intconv.scanSign($.interfaceValue<io.ByteScanner | null>(r, "*strings.Reader", /* @__PURE__ */ $.pointerType("strings.Reader")))
		if (err != null) {
			return [null, false]
		}

		let base: number = 0
		let fcount: number = 0
		let __goscriptTuple10: any = await __goscript_natconv.nat_scan((z$ as Rat).a.abs, $.interfaceValue<io.ByteScanner | null>(r, "*strings.Reader", /* @__PURE__ */ $.pointerType("strings.Reader")), 0, true);
		;(z$ as Rat).a.abs = (__goscriptTuple10[0] as __goscript_nat.nat)
		base = __goscriptTuple10[1]
		fcount = __goscriptTuple10[2]
		err = __goscriptTuple10[3]
		if (err != null) {
			return [null, false]
		}

		let exp: bigint = 0n
		let ebase: number = 0
		let __goscriptTuple11: any = await __goscript_ratconv.scanExponent($.interfaceValue<io.ByteScanner | null>(r, "*strings.Reader", /* @__PURE__ */ $.pointerType("strings.Reader")), true, true)
		exp = __goscriptTuple11[0]
		ebase = __goscriptTuple11[1]
		err = __goscriptTuple11[2]
		if (err != null) {
			return [null, false]
		}

		{
			let __goscriptTuple12: any = strings.Reader.prototype.ReadByte.call($.pointerValue<strings.Reader>(r))
			err = __goscriptTuple12[1]
			if (!$.comparableEqual(err, io.EOF)) {
				return [null, false]
			}
		}

		if ($.sliceLen(((z$ as Rat).a.abs as __goscript_nat.nat)) == 0) {
			return [await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Rat).norm() : Rat.prototype.norm.call(z)), true]
		}

		// 2. Compute quotient and remainder (q, r).  NB: due to the
		// extra shift, the low-order bit of q is logically the
		// high-order bit of r.

		// (recycle a2)

		// mantissa&1 && !haveRem => remainder is exactly half

		// 3. If quotient didn't fit in Msize2 bits, redo division by b2<<1
		// (in effect---we accomplish this incrementally).

		let exp2: bigint = 0n
		let exp5: bigint = 0n
		if (fcount < 0) {

			let d = $.int64(fcount)
			switch (base) {
				case 10:
				{
					exp5 = d
				}
				case 2:
				{
					exp2 = d
					break
				}
				case 8:
				{
					exp2 = $.int64Mul(d, 3n)
					break
				}
				case 16:
				{
					exp2 = $.int64Mul(d, 4n)
					break
				}
				default:
				{
					$.panic("unexpected mantissa base")
					break
				}
			}
		}

		switch (ebase) {
			case 10:
			{
				exp5 = $.int64Add(exp5, exp)
			}
			case 2:
			{
				exp2 = $.int64Add(exp2, exp)
				break
			}
			default:
			{
				$.panic("unexpected exponent base")
				break
			}
		}

		let stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null = __goscript_nat.getStack()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.free())($.pointerValue<__goscript_nat.stack>(stk)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "math/big.(*stack).free-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		if (exp5 != 0n) {
			let n = exp5
			if (n < 0n) {
				n = -n
				if (n < 0n) {

					// float size in bits
					return [null, false]
				}
			}
			if (n > 1000000n) {
				return [null, false]
			}
			let pow5: __goscript_nat.nat = (await __goscript_nat.nat_expNN((z$ as Rat).b.abs, stk, (__goscript_nat.natFive as __goscript_nat.nat), (__goscript_nat.nat_setWord((null as __goscript_nat.nat), $.uint(n, 64)) as __goscript_nat.nat), (null as __goscript_nat.nat), false) as __goscript_nat.nat)
			if (exp5 > 0n) {
				;(z$ as Rat).a.abs = (await __goscript_natmul.nat_mul((z$ as Rat).a.abs, stk, ((z$ as Rat).a.abs as __goscript_nat.nat), (pow5 as __goscript_nat.nat)) as __goscript_nat.nat);
				;(z$ as Rat).b.abs = (__goscript_nat.nat_setWord((z$ as Rat).b.abs, 1) as __goscript_nat.nat)
			} else {
				;(z$ as Rat).b.abs = (pow5 as __goscript_nat.nat)
			}
		} else {
			;(z$ as Rat).b.abs = (__goscript_nat.nat_setWord((z$ as Rat).b.abs, 1) as __goscript_nat.nat)
		}

		if ((exp2 < -10000000n) || (exp2 > 10000000n)) {
			return [null, false]
		}
		if (exp2 > 0n) {
			;(z$ as Rat).a.abs = (__goscript_nat.nat_lsh((z$ as Rat).a.abs, ((z$ as Rat).a.abs as __goscript_nat.nat), $.uint(exp2, 64)) as __goscript_nat.nat)
		} else {
			if (exp2 < 0n) {
				;(z$ as Rat).b.abs = (__goscript_nat.nat_lsh((z$ as Rat).b.abs, ((z$ as Rat).b.abs as __goscript_nat.nat), $.uint(-exp2, 64)) as __goscript_nat.nat)
			}
		}

		;(z$ as Rat).a.neg = neg && ($.sliceLen(((z$ as Rat).a.abs as __goscript_nat.nat)) > 0)

		return [await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Rat).norm() : Rat.prototype.norm.call(z)), true]
	}

	public SetUint64(x: bigint): Rat | $.VarRef<Rat> | null {
		let z: Rat | $.VarRef<Rat> | null = this;
		const z$: Rat = z == null ? $.pointerTarget<Rat>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Rat>(z)
		void (z$ as Rat).a.SetUint64(x);
		;(z$ as Rat).b.abs = (__goscript_nat.nat_setWord((z$ as Rat).b.abs, 1) as __goscript_nat.nat)
		return z
	}

	public Sign(): number {
		const x: Rat | $.VarRef<Rat> | null = this;
		return $.pointerValue<Rat>(x).a.Sign()
	}

	public async String(): globalThis.Promise<string> {
		const x: Rat | $.VarRef<Rat> | null = this;
		return $.bytesToString(await (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Rat).marshal(null) : Rat.prototype.marshal.call(x, null)))
	}

	public async Sub(x: Rat | $.VarRef<Rat> | null, y: Rat | $.VarRef<Rat> | null): globalThis.Promise<Rat | $.VarRef<Rat> | null> {
		let z: Rat | $.VarRef<Rat> | null = this;
		using __defer = new $.DisposableStack()
		const z$: Rat = z == null ? $.pointerTarget<Rat>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Rat>(z)
		let stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null = __goscript_nat.getStack()
		__defer.defer(() => { (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as __goscript_nat.stack).free() : __goscript_nat.stack.prototype.free.call(stk)) })

		let a1: $.VarRef<__goscript_int.Int> = $.varRef(new __goscript_int.Int(undefined, true))
		let a2: $.VarRef<__goscript_int.Int> = $.varRef(new __goscript_int.Int(undefined, true))
		await a1.value.scaleDenom(stk, $.fieldRef($.pointerValue<Rat>(x)._fields, "a"), ($.pointerValue<Rat>(y).b.abs as __goscript_nat.nat))
		await a2.value.scaleDenom(stk, $.fieldRef($.pointerValue<Rat>(y)._fields, "a"), ($.pointerValue<Rat>(x).b.abs as __goscript_nat.nat))
		void (z$ as Rat).a.Sub(a1, a2);
		;(z$ as Rat).b.abs = (await mulDenom(stk, ((z$ as Rat).b.abs as __goscript_nat.nat), ($.pointerValue<Rat>(x).b.abs as __goscript_nat.nat), ($.pointerValue<Rat>(y).b.abs as __goscript_nat.nat)) as __goscript_nat.nat)
		return await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Rat).norm() : Rat.prototype.norm.call(z))
	}

	public async UnmarshalText(text: $.Slice<number>): globalThis.Promise<$.GoError> {
		const z: Rat | $.VarRef<Rat> | null = this;

		{
			let [, ok] = await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? ((z as any) as Rat).SetString($.bytesToString(text)) : Rat.prototype.SetString.call(z, $.bytesToString(text)))
			if (!ok) {
				return fmt.Errorf("math/big: cannot unmarshal %q into a *big.Rat", $.interfaceValue(text, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
			}
		}
		return null
	}

	public async marshal(buf: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const x: Rat | $.VarRef<Rat> | null = this;
		const x$: Rat = x == null ? $.pointerTarget<Rat>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Rat>(x)
		buf = await (x$ as Rat).a.Append(buf, 10)
		buf = $.append(buf, $.uint(47, 8), $.byteSliceHint)
		if ($.sliceLen(((x$ as Rat).b.abs as __goscript_nat.nat)) != 0) {
			buf = await (x$ as Rat).b.Append(buf, 10)
		} else {
			buf = $.append(buf, $.uint(49, 8), $.byteSliceHint)
		}
		return buf
	}

	public async norm(): globalThis.Promise<Rat | $.VarRef<Rat> | null> {
		let z: Rat | $.VarRef<Rat> | null = this;
		using __defer = new $.DisposableStack()
		const z$: Rat = z == null ? $.pointerTarget<Rat>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<Rat>(z)
		switch ((true as boolean)) {
			case $.sliceLen(((z$ as Rat).a.abs as __goscript_nat.nat)) == 0:
			{
				;(z$ as Rat).a.neg = false
			}
			case $.sliceLen(((z$ as Rat).b.abs as __goscript_nat.nat)) == 0:
			{
				;(z$ as Rat).b.abs = (__goscript_nat.nat_setWord((z$ as Rat).b.abs, 1) as __goscript_nat.nat)
				break
			}
			default:
			{
				let stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null = __goscript_nat.getStack()
				__defer.defer(() => { (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as __goscript_nat.stack).free() : __goscript_nat.stack.prototype.free.call(stk)) })
				let neg = (z$ as Rat).a.neg;
				;(z$ as Rat).a.neg = false;
				;(z$ as Rat).b.neg = false
				{
					let f: __goscript_int.Int | $.VarRef<__goscript_int.Int> | null = await __goscript_int.Int.prototype.lehmerGCD.call(__goscript_int.NewInt(0n), null, null, $.fieldRef((z$ as Rat)._fields, "a"), $.fieldRef((z$ as Rat)._fields, "b"))
					if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_int.Int).Cmp(__goscript_int.__goscript_get_intOne()) : __goscript_int.Int.prototype.Cmp.call(f, __goscript_int.__goscript_get_intOne())) != 0) {
						let __goscriptTuple13: any = await __goscript_natdiv.nat_div((z$ as Rat).a.abs, stk, (null as __goscript_nat.nat), ((z$ as Rat).a.abs as __goscript_nat.nat), ($.pointerValue<__goscript_int.Int>(f).abs as __goscript_nat.nat));
						;(z$ as Rat).a.abs = (__goscriptTuple13[0] as __goscript_nat.nat)
						let __goscriptTuple14: any = await __goscript_natdiv.nat_div((z$ as Rat).b.abs, stk, (null as __goscript_nat.nat), ((z$ as Rat).b.abs as __goscript_nat.nat), ($.pointerValue<__goscript_int.Int>(f).abs as __goscript_nat.nat));
						;(z$ as Rat).b.abs = (__goscriptTuple14[0] as __goscript_nat.nat)
					}
				}
				;(z$ as Rat).a.neg = neg
				break
			}
		}
		return z
	}

	static __typeInfo = $.registerStructType(
		"big.Rat",
		() => new Rat(),
		() => [$.methodSignature("Abs", [["x", /* @__PURE__ */ $.pointerType("big.Rat")]], [/* @__PURE__ */ $.pointerType("big.Rat")], true), $.methodSignature("Add", [["x", /* @__PURE__ */ $.pointerType("big.Rat")], ["y", /* @__PURE__ */ $.pointerType("big.Rat")]], [/* @__PURE__ */ $.pointerType("big.Rat")], true), $.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Cmp", [["y", /* @__PURE__ */ $.pointerType("big.Rat")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Denom", [], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Float32", [], [["f", /* @__PURE__ */ $.basicType("float32")], ["exact", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Float64", [], [["f", /* @__PURE__ */ $.basicType("float64")], ["exact", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("FloatPrec", [], [["n", /* @__PURE__ */ $.basicType("int")], ["exact", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("FloatString", [["prec", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GobDecode", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("GobEncode", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Inv", [["x", /* @__PURE__ */ $.pointerType("big.Rat")]], [/* @__PURE__ */ $.pointerType("big.Rat")], true), $.methodSignature("IsInt", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MarshalText", [], [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("Mul", [["x", /* @__PURE__ */ $.pointerType("big.Rat")], ["y", /* @__PURE__ */ $.pointerType("big.Rat")]], [/* @__PURE__ */ $.pointerType("big.Rat")], true), $.methodSignature("Neg", [["x", /* @__PURE__ */ $.pointerType("big.Rat")]], [/* @__PURE__ */ $.pointerType("big.Rat")], true), $.methodSignature("Num", [], [/* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Quo", [["x", /* @__PURE__ */ $.pointerType("big.Rat")], ["y", /* @__PURE__ */ $.pointerType("big.Rat")]], [/* @__PURE__ */ $.pointerType("big.Rat")], true), $.methodSignature("RatString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Scan", [["s", "fmt.ScanState"], ["ch", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("Set", [["x", /* @__PURE__ */ $.pointerType("big.Rat")]], [/* @__PURE__ */ $.pointerType("big.Rat")], true), $.methodSignature("SetFloat64", [["f", /* @__PURE__ */ $.basicType("float64")]], [/* @__PURE__ */ $.pointerType("big.Rat")], true), $.methodSignature("SetFrac", [["a", /* @__PURE__ */ $.pointerType("big.Int")], ["b", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Rat")], true), $.methodSignature("SetFrac64", [["a", /* @__PURE__ */ $.basicType("int64")], ["b", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.pointerType("big.Rat")], true), $.methodSignature("SetInt", [["x", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Rat")], true), $.methodSignature("SetInt64", [["x", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.pointerType("big.Rat")], true), $.methodSignature("SetString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("big.Rat"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("SetUint64", [["x", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.pointerType("big.Rat")], true), $.methodSignature("Sign", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sub", [["x", /* @__PURE__ */ $.pointerType("big.Rat")], ["y", /* @__PURE__ */ $.pointerType("big.Rat")]], [/* @__PURE__ */ $.pointerType("big.Rat")], true), $.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("marshal", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("norm", [], [/* @__PURE__ */ $.pointerType("big.Rat")], true)],
		Rat,
		() => [/* @__PURE__ */ $.structField("a", "big.Int", [0], 0, false, { pkgPath: "math/big" }), /* @__PURE__ */ $.structField("b", "big.Int", [1], 32, false, { pkgPath: "math/big" })]
	)
}

export async function NewRat(a: bigint, b: bigint): globalThis.Promise<Rat | $.VarRef<Rat> | null> {
	return Rat.prototype.SetFrac64.call(new Rat(), a, b)
}

export async function quotToFloat32(stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null, a: __goscript_nat.nat, b: __goscript_nat.nat): globalThis.Promise<[number, boolean]> {
	let f: number = 0
	let exact: boolean = false
	const Fsize: number = 32
	const Msize: number = 23
	const Msize1: number = 24
	const Msize2: number = 25
	const Esize: number = 8
	const Ebias: number = 127
	const Emin: number = -126
	const Emax: number = 127

	// TODO(adonovan): specialize common degenerate cases: 1.0, integers.
	let alen = __goscript_nat.nat_bitLen(a)
	if (alen == 0) {
		return [0, true]
	}
	let blen = __goscript_nat.nat_bitLen(b)
	if (blen == 0) {
		$.panic("division by zero")
	}

	// 1. Left-shift A or B such that quotient A/B is in [1<<Msize1, 1<<(Msize2+1)
	// (Msize2 bits if A < B when they are left-aligned, Msize2+1 bits if A >= B).
	// This is 2 or 3 more than the float32 mantissa field width of Msize:
	// - the optional extra bit is shifted away in step 3 below.
	// - the high-order 1 is omitted in "normal" representation;
	// - the low-order 1 will be used during rounding then discarded.
	let exp = alen - blen
	let a2: __goscript_nat.nat = null! as __goscript_nat.nat
	let b2: __goscript_nat.nat = null! as __goscript_nat.nat
	a2 = (__goscript_nat.nat__set(a2, (a as __goscript_nat.nat)) as __goscript_nat.nat)
	b2 = (__goscript_nat.nat__set(b2, (b as __goscript_nat.nat)) as __goscript_nat.nat)
	{
		let shift = 25 - exp
		if (shift > 0) {
			a2 = (__goscript_nat.nat_lsh(a2, (a2 as __goscript_nat.nat), $.uint(shift, 64)) as __goscript_nat.nat)
		} else {
			if (shift < 0) {
				b2 = (__goscript_nat.nat_lsh(b2, (b2 as __goscript_nat.nat), $.uint(-shift, 64)) as __goscript_nat.nat)
			}
		}
	}

	// 2. Compute quotient and remainder (q, r).  NB: due to the
	// extra shift, the low-order bit of q is logically the
	// high-order bit of r.
	let q: __goscript_nat.nat = null! as __goscript_nat.nat
	let __goscriptTuple15: any = await __goscript_natdiv.nat_div(q, stk, (a2 as __goscript_nat.nat), (a2 as __goscript_nat.nat), (b2 as __goscript_nat.nat))
	q = (__goscriptTuple15[0] as __goscript_nat.nat)
	let r: __goscript_nat.nat = (__goscriptTuple15[1] as __goscript_nat.nat)
	let mantissa = __goscript_int.low32((q as __goscript_nat.nat))
	let haveRem = $.sliceLen((r as __goscript_nat.nat)) > 0

	// 3. If quotient didn't fit in Msize2 bits, redo division by b2<<1
	// (in effect---we accomplish this incrementally).
	if ($.uint(($.uintShr(mantissa, 25, 32)), 32) == 1) {
		if ($.uint((mantissa & 1), 32) == 1) {
			haveRem = true
		}
		mantissa = (mantissa >>> (1)) >>> 0
		exp++
	}
	if ($.uint(($.uintShr(mantissa, 24, 32)), 32) != 1) {
		$.panic(await fmt.Sprintf("expected exactly %d bits of result", $.basicInterfaceValue(25, "int")))
	}

	// 4. Rounding.
	if ((-149 <= exp) && (exp <= -126)) {
		// Denormal case; lose 'shift' bits of precision.
		let shift = $.uint(-126 - (exp - 1), 64)
		let lostbits = $.uint(mantissa & ((((((1 << shift) >>> 0)) - 1) >>> 0)), 32)
		haveRem = haveRem || (lostbits != 0)
		mantissa = (mantissa >>> ($.uint(shift, 32))) >>> 0
		exp = -125
	}
	// Round q using round-half-to-even.
	exact = !haveRem
	if ($.uint((mantissa & 1), 32) != 0) {
		exact = false
		if (haveRem || ($.uint((mantissa & 2), 32) != 0)) {
			{
				mantissa = ((mantissa + 1) >>> 0)
				if (mantissa >= 33554432) {
					// Complete rollover 11...1 => 100...0, so shift is safe
					mantissa = (mantissa >>> (1)) >>> 0
					exp++
				}
			}
		}
	}
	mantissa = (mantissa >>> (1)) >>> 0

	f = globalThis.Math.fround(math.Ldexp(mantissa, exp - 24))
	if (math.IsInf(f, 0)) {
		exact = false
	}
	return [f, exact]
}

export async function quotToFloat64(stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null, a: __goscript_nat.nat, b: __goscript_nat.nat): globalThis.Promise<[number, boolean]> {
	let f: number = 0
	let exact: boolean = false
	const Fsize: number = 64
	const Msize: number = 52
	const Msize1: number = 53
	const Msize2: number = 54
	const Esize: number = 11
	const Ebias: number = 1023
	const Emin: number = -1022
	const Emax: number = 1023

	// TODO(adonovan): specialize common degenerate cases: 1.0, integers.
	let alen = __goscript_nat.nat_bitLen(a)
	if (alen == 0) {
		return [0, true]
	}
	let blen = __goscript_nat.nat_bitLen(b)
	if (blen == 0) {
		$.panic("division by zero")
	}

	// 1. Left-shift A or B such that quotient A/B is in [1<<Msize1, 1<<(Msize2+1)
	// (Msize2 bits if A < B when they are left-aligned, Msize2+1 bits if A >= B).
	// This is 2 or 3 more than the float64 mantissa field width of Msize:
	// - the optional extra bit is shifted away in step 3 below.
	// - the high-order 1 is omitted in "normal" representation;
	// - the low-order 1 will be used during rounding then discarded.
	let exp = alen - blen
	let a2: __goscript_nat.nat = null! as __goscript_nat.nat
	let b2: __goscript_nat.nat = null! as __goscript_nat.nat
	a2 = (__goscript_nat.nat__set(a2, (a as __goscript_nat.nat)) as __goscript_nat.nat)
	b2 = (__goscript_nat.nat__set(b2, (b as __goscript_nat.nat)) as __goscript_nat.nat)
	{
		let shift = 54 - exp
		if (shift > 0) {
			a2 = (__goscript_nat.nat_lsh(a2, (a2 as __goscript_nat.nat), $.uint(shift, 64)) as __goscript_nat.nat)
		} else {
			if (shift < 0) {
				b2 = (__goscript_nat.nat_lsh(b2, (b2 as __goscript_nat.nat), $.uint(-shift, 64)) as __goscript_nat.nat)
			}
		}
	}

	// 2. Compute quotient and remainder (q, r).  NB: due to the
	// extra shift, the low-order bit of q is logically the
	// high-order bit of r.
	let q: __goscript_nat.nat = null! as __goscript_nat.nat
	let __goscriptTuple16: any = await __goscript_natdiv.nat_div(q, stk, (a2 as __goscript_nat.nat), (a2 as __goscript_nat.nat), (b2 as __goscript_nat.nat))
	q = (__goscriptTuple16[0] as __goscript_nat.nat)
	let r: __goscript_nat.nat = (__goscriptTuple16[1] as __goscript_nat.nat)
	let mantissa = __goscript_int.low64((q as __goscript_nat.nat))
	let haveRem = $.sliceLen((r as __goscript_nat.nat)) > 0

	// 3. If quotient didn't fit in Msize2 bits, redo division by b2<<1
	// (in effect---we accomplish this incrementally).
	if (($.uint64Shr(mantissa, 54n)) == 1n) {
		if (($.uint64And(mantissa, 1n)) == 1n) {
			haveRem = true
		}
		mantissa = $.uint64Shr(mantissa, 1n)
		exp++
	}
	if (($.uint64Shr(mantissa, 53n)) != 1n) {
		$.panic(await fmt.Sprintf("expected exactly %d bits of result", $.basicInterfaceValue(54, "int")))
	}

	// 4. Rounding.
	if ((-1074 <= exp) && (exp <= -1022)) {
		// Denormal case; lose 'shift' bits of precision.
		let shift = $.uint(-1022 - (exp - 1), 64)
		let lostbits = $.uint64And(mantissa, ($.uint64Sub(($.uint64Shl(1n, shift)), 1n)))
		haveRem = haveRem || (lostbits != 0n)
		mantissa = $.uint64Shr(mantissa, $.uint64(shift))
		exp = -1021
	}
	// Round q using round-half-to-even.
	exact = !haveRem
	if (($.uint64And(mantissa, 1n)) != 0n) {
		exact = false
		if (haveRem || (($.uint64And(mantissa, 2n)) != 0n)) {
			{
				mantissa++
				if (mantissa >= 18014398509481984n) {
					// Complete rollover 11...1 => 100...0, so shift is safe
					mantissa = $.uint64Shr(mantissa, 1n)
					exp++
				}
			}
		}
	}
	mantissa = $.uint64Shr(mantissa, 1n)

	f = math.Ldexp(globalThis.Number(mantissa), exp - 53)
	if (math.IsInf(f, 0)) {
		exact = false
	}
	return [f, exact]
}

export async function mulDenom(stk: __goscript_nat.stack | $.VarRef<__goscript_nat.stack> | null, z: __goscript_nat.nat, x: __goscript_nat.nat, y: __goscript_nat.nat): globalThis.Promise<__goscript_nat.nat> {
	switch ((true as boolean)) {
		case ($.sliceLen((x as __goscript_nat.nat)) == 0) && ($.sliceLen((y as __goscript_nat.nat)) == 0):
		{
			return (__goscript_nat.nat_setWord(z, 1) as __goscript_nat.nat)
			break
		}
		case $.sliceLen((x as __goscript_nat.nat)) == 0:
		{
			return (__goscript_nat.nat__set(z, (y as __goscript_nat.nat)) as __goscript_nat.nat)
			break
		}
		case $.sliceLen((y as __goscript_nat.nat)) == 0:
		{
			return (__goscript_nat.nat__set(z, (x as __goscript_nat.nat)) as __goscript_nat.nat)
			break
		}
	}
	return (await __goscript_natmul.nat_mul(z, stk, (x as __goscript_nat.nat), (y as __goscript_nat.nat)) as __goscript_nat.nat)
}
