// Generated file based on parse.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_op_string from "./op_string.gs.ts"

import * as __goscript_perl_groups from "./perl_groups.gs.ts"

import * as __goscript_regexp from "./regexp.gs.ts"

import * as __goscript_simplify from "./simplify.gs.ts"
import "@goscript/sort/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/unicode/index.js"
import "@goscript/unicode/utf8/index.js"
import "./op_string.gs.ts"
import "./perl_groups.gs.ts"
import "./regexp.gs.ts"
import "./simplify.gs.ts"

$.registerTypePackagePath("regexp/syntax", ["syntax.Error", "syntax.ErrorCode", "syntax.Flags", "syntax.parser", "syntax.charGroup", "syntax.ranges"])

export type ErrorCode = string

$.registerNamedValueType(
	"syntax.ErrorCode",
	{String: (receiver: any, ...args: any[]) => (ErrorCode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*syntax.ErrorCode",
	{String: (receiver: any, ...args: any[]) => (ErrorCode_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Flags = number

export class Error {
	public get Code(): ErrorCode {
		return this._fields.Code
	}

	public set Code(value: ErrorCode) {
		this._fields.Code = value
	}

	public get Expr(): string {
		return this._fields.Expr
	}

	public set Expr(value: string) {
		this._fields.Expr = value
	}

	public _fields: {
		Code: ErrorCode
		Expr: string
	}

	constructor(init?: Partial<{Code?: ErrorCode, Expr?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Code: init?.Code ?? ("" as ErrorCode),
			Expr: init?.Expr ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Error {
		return new Error(this, true)
	}

	public __goscriptAssign(source: Error): void {
		const target = this._fields
		const values = source._fields
		target.Code = values.Code
		target.Expr = values.Expr
	}

	public Error(): string {
		const e: Error | $.VarRef<Error> | null = this;
		const e$: Error = e == null ? $.pointerTarget<Error>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Error>(e)
		return $.concatString(($.concatString(($.concatString(($.concatString("error parsing regexp: ", ErrorCode_String((e$ as Error).Code))), ": `")), (e$ as Error).Expr)), "`")
	}

	static __typeInfo = $.registerStructType(
		"syntax.Error",
		() => new Error(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Error,
		() => [/* @__PURE__ */ $.structField("Code", /* @__PURE__ */ $.basicType("string", "syntax.ErrorCode"), [0], 0, true), /* @__PURE__ */ $.structField("Expr", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

export class parser {
	public get flags(): Flags {
		return this._fields.flags
	}

	public set flags(value: Flags) {
		this._fields.flags = value
	}

	public get stack(): $.Slice<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null> {
		return this._fields.stack
	}

	public set stack(value: $.Slice<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null>) {
		this._fields.stack = value
	}

	public get free(): __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null {
		return this._fields.free
	}

	public set free(value: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null) {
		this._fields.free = value
	}

	public get numCap(): number {
		return this._fields.numCap
	}

	public set numCap(value: number) {
		this._fields.numCap = value
	}

	public get wholeRegexp(): string {
		return this._fields.wholeRegexp
	}

	public set wholeRegexp(value: string) {
		this._fields.wholeRegexp = value
	}

	public get tmpClass(): $.Slice<number> {
		return this._fields.tmpClass
	}

	public set tmpClass(value: $.Slice<number>) {
		this._fields.tmpClass = value
	}

	public get numRegexp(): number {
		return this._fields.numRegexp
	}

	public set numRegexp(value: number) {
		this._fields.numRegexp = value
	}

	public get numRunes(): number {
		return this._fields.numRunes
	}

	public set numRunes(value: number) {
		this._fields.numRunes = value
	}

	public get repeats(): bigint {
		return this._fields.repeats
	}

	public set repeats(value: bigint) {
		this._fields.repeats = value
	}

	public get height(): globalThis.Map<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, number> | null {
		return this._fields.height
	}

	public set height(value: globalThis.Map<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, number> | null) {
		this._fields.height = value
	}

	public get size(): globalThis.Map<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, bigint> | null {
		return this._fields.size
	}

	public set size(value: globalThis.Map<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, bigint> | null) {
		this._fields.size = value
	}

	public _fields: {
		flags: Flags
		stack: $.Slice<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null>
		free: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null
		numCap: number
		wholeRegexp: string
		tmpClass: $.Slice<number>
		numRegexp: number
		numRunes: number
		repeats: bigint
		height: globalThis.Map<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, number> | null
		size: globalThis.Map<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, bigint> | null
	}

	constructor(init?: Partial<{flags?: Flags, stack?: $.Slice<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null>, free?: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, numCap?: number, wholeRegexp?: string, tmpClass?: $.Slice<number>, numRegexp?: number, numRunes?: number, repeats?: bigint, height?: globalThis.Map<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, number> | null, size?: globalThis.Map<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, bigint> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			flags: init?.flags ?? (0 as Flags),
			stack: init?.stack ?? (null! as $.Slice<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null>),
			free: init?.free ?? (null! as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null),
			numCap: init?.numCap ?? (0 as number),
			wholeRegexp: init?.wholeRegexp ?? ("" as string),
			tmpClass: init?.tmpClass ?? (null! as $.Slice<number>),
			numRegexp: init?.numRegexp ?? (0 as number),
			numRunes: init?.numRunes ?? (0 as number),
			repeats: init?.repeats ?? (0n as bigint),
			height: init?.height ?? (null! as globalThis.Map<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, number> | null),
			size: init?.size ?? (null! as globalThis.Map<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, bigint> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): parser {
		return new parser(this, true)
	}

	public __goscriptAssign(source: parser): void {
		const target = this._fields
		const values = source._fields
		target.flags = values.flags
		target.stack = values.stack
		target.free = values.free
		target.numCap = values.numCap
		target.wholeRegexp = values.wholeRegexp
		target.tmpClass = values.tmpClass
		target.numRegexp = values.numRegexp
		target.numRunes = values.numRunes
		target.repeats = values.repeats
		target.height = values.height
		target.size = values.size
	}

	public async alternate(): globalThis.Promise<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null> {
		let p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		// Scan down to find pseudo-operator (.
		// There are no | above (.
		let i = $.sliceLen((p$ as parser).stack)
		while ((i > 0) && ($.pointerValue<__goscript_regexp.Regexp>($.arrayIndex((p$ as parser).stack!, i - 1)).Op < 128)) {
			i--
		}
		let subs: $.Slice<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null> = $.goSlice((p$ as parser).stack, i, undefined);
		;(p$ as parser).stack = $.goSlice((p$ as parser).stack, undefined, i)

		// Make sure top class is clean.
		// All the others already are (see swapVerticalBar).
		if ($.sliceLen(subs) > 0) {
			await cleanAlt($.arrayIndex(subs!, $.sliceLen(subs) - 1))
		}

		// Empty alternate is special case
		// (shouldn't happen but easy to handle).
		if ($.sliceLen(subs) == 0) {
			return parser.prototype.push.call(p, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).newRegexp(1) : parser.prototype.newRegexp.call(p, 1)))
		}

		return parser.prototype.push.call(p, await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).collapse(subs, 19) : parser.prototype.collapse.call(p, subs, 19)))
	}

	public async appendGroup(r: $.Slice<number>, g: charGroup): globalThis.Promise<$.Slice<number>> {
		let p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		if ($.uint(((p$ as parser).flags & 1), 16) == 0) {
			if (g.sign < 0) {
				r = appendNegatedClass(r, g._class)
			} else {
				r = appendClass(r, g._class)
			}
		} else {
			let tmp: $.Slice<number> = $.goSlice((p$ as parser).tmpClass, undefined, 0)
			tmp = appendFoldedClass(tmp, g._class);
			;(p$ as parser).tmpClass = tmp
			tmp = await cleanClass($.fieldRef((p$ as parser)._fields, "tmpClass"))
			if (g.sign < 0) {
				r = appendNegatedClass(r, tmp)
			} else {
				r = appendClass(r, tmp)
			}
		}
		return r
	}

	public calcHeight(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, force: boolean): number {
		let p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		if (!force) {
			{
				let [h, ok] = $.mapGet<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, number, number>((p$ as parser).height, re, 0)
				if (ok) {
					return h
				}
			}
		}
		let h = 1
		for (let __goscriptRangeTarget0 = $.pointerValue<__goscript_regexp.Regexp>(re).Sub, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let sub = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)
			let hsub = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).calcHeight(sub, false) : parser.prototype.calcHeight.call(p, sub, false))
			if (h < (1 + hsub)) {
				h = 1 + hsub
			}
		}
		$.mapSet((p$ as parser).height, re, h)
		return h
	}

	public calcSize(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, force: boolean): bigint {
		let p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		const re$: __goscript_regexp.Regexp = re == null ? $.pointerTarget<__goscript_regexp.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<__goscript_regexp.Regexp>(re)
		if (!force) {
			{
				let __goscriptTuple0: any = $.mapGet<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, bigint, bigint>((p$ as parser).size, re, 0n)
				let size = __goscriptTuple0[0]
				let ok = __goscriptTuple0[1]
				if (ok) {
					return size
				}
			}
		}

		let size: bigint = 0n
		switch ((re$ as __goscript_regexp.Regexp).Op) {
			case 3:
			{
				size = $.int64($.sliceLen((re$ as __goscript_regexp.Regexp).Rune))
				break
			}
			case 13:
			case 14:
			{
				size = $.int64Add(2n, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).calcSize($.arrayIndex((re$ as __goscript_regexp.Regexp).Sub!, 0), false) : parser.prototype.calcSize.call(p, $.arrayIndex((re$ as __goscript_regexp.Regexp).Sub!, 0), false)))
				break
			}
			case 15:
			case 16:
			{
				size = $.int64Add(1n, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).calcSize($.arrayIndex((re$ as __goscript_regexp.Regexp).Sub!, 0), false) : parser.prototype.calcSize.call(p, $.arrayIndex((re$ as __goscript_regexp.Regexp).Sub!, 0), false)))
				break
			}
			case 18:
			{
				for (let __goscriptRangeTarget1 = (re$ as __goscript_regexp.Regexp).Sub, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
					let sub = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)
					size = $.int64Add(size, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).calcSize(sub, false) : parser.prototype.calcSize.call(p, sub, false)))
				}
				break
			}
			case 19:
			{
				for (let __goscriptRangeTarget2 = (re$ as __goscript_regexp.Regexp).Sub, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
					let sub = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)
					size = $.int64Add(size, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).calcSize(sub, false) : parser.prototype.calcSize.call(p, sub, false)))
				}
				if ($.sliceLen((re$ as __goscript_regexp.Regexp).Sub) > 1) {
					size = $.int64Add(size, $.int64Sub($.int64($.sliceLen((re$ as __goscript_regexp.Regexp).Sub)), 1n))
				}
				break
			}
			case 17:
			{
				let sub = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).calcSize($.arrayIndex((re$ as __goscript_regexp.Regexp).Sub!, 0), false) : parser.prototype.calcSize.call(p, $.arrayIndex((re$ as __goscript_regexp.Regexp).Sub!, 0), false))
				if ((re$ as __goscript_regexp.Regexp).Max == -1) {
					if ((re$ as __goscript_regexp.Regexp).Min == 0) {
						size = $.int64Add(2n, sub)
					} else {
						size = $.int64Add(1n, ($.int64Mul($.int64((re$ as __goscript_regexp.Regexp).Min), sub)))
					}
					break
				}
				// x{2,5} = xx(x(x(x)?)?)?
				size = $.int64Add(($.int64Mul($.int64((re$ as __goscript_regexp.Regexp).Max), sub)), $.int64((re$ as __goscript_regexp.Regexp).Max - (re$ as __goscript_regexp.Regexp).Min))
				break
			}
		}

		size = $.max(1n, size)
		$.mapSet((p$ as parser).size, re, size)
		return size
	}

	public checkHeight(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null): void {
		let p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		if ((p$ as parser).numRegexp < 1000) {
			return
		}
		if ((p$ as parser).height == null) {
			;(p$ as parser).height = $.makeMap<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, number>(undefined, /* @__PURE__ */ $.pointerType("syntax.Regexp"))
			for (let __goscriptRangeTarget3 = (p$ as parser).stack, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
				let re = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)
				void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).checkHeight(re) : parser.prototype.checkHeight.call(p, re))
			}
		}
		if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).calcHeight(re, true) : parser.prototype.calcHeight.call(p, re, true)) > 1000) {
			$.panic($.namedValueInterfaceValue<any>("expression nests too deeply", "syntax.ErrorCode", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
		}
	}

	public checkLimits(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null): void {
		const p: parser | $.VarRef<parser> | null = this;
		if ($.pointerValue<parser>(p).numRunes > 33554432) {
			$.panic($.namedValueInterfaceValue<any>("expression too large", "syntax.ErrorCode", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
		}
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).checkSize(re) : parser.prototype.checkSize.call(p, re))
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).checkHeight(re) : parser.prototype.checkHeight.call(p, re))
	}

	public checkSize(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null): void {
		let p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		const re$: __goscript_regexp.Regexp = re == null ? $.pointerTarget<__goscript_regexp.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<__goscript_regexp.Regexp>(re)
		if ((p$ as parser).size == null) {
			// We haven't started tracking size yet.
			// Do a relatively cheap check to see if we need to start.
			// Maintain the product of all the repeats we've seen
			// and don't track if the total number of regexp nodes
			// we've seen times the repeat product is in budget.
			if ((p$ as parser).repeats == 0n) {
				;(p$ as parser).repeats = 1n
			}
			if ((re$ as __goscript_regexp.Regexp).Op == 17) {
				let n = (re$ as __goscript_regexp.Regexp).Max
				if (n == -1) {
					n = (re$ as __goscript_regexp.Regexp).Min
				}
				if (n <= 0) {
					n = 1
				}
				if ($.int64(n) > ($.int64Div(3355443n, (p$ as parser).repeats))) {
					;(p$ as parser).repeats = 3355443n
				} else {
					;(p$ as parser).repeats = $.int64Mul((p$ as parser).repeats, $.int64(n))
				}
			}
			if ($.int64((p$ as parser).numRegexp) < ($.int64Div(3355443n, (p$ as parser).repeats))) {
				return
			}

			// We need to start tracking size.
			// Make the map and belatedly populate it
			// with info about everything we've constructed so far.
			;(p$ as parser).size = $.makeMap<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, bigint>(undefined, /* @__PURE__ */ $.pointerType("syntax.Regexp"))
			for (let __goscriptRangeTarget4 = (p$ as parser).stack, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
				let re = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)
				void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).checkSize(re) : parser.prototype.checkSize.call(p, re))
			}
		}

		if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).calcSize(re, true) : parser.prototype.calcSize.call(p, re, true)) > 3355443n) {
			$.panic($.namedValueInterfaceValue<any>("expression too large", "syntax.ErrorCode", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
		}
	}

	public async collapse(subs: $.Slice<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null>, op: __goscript_regexp.Op): globalThis.Promise<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null> {
		const p: parser | $.VarRef<parser> | null = this;
		if ($.sliceLen(subs) == 1) {
			return $.arrayIndex(subs!, 0)
		}
		let re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).newRegexp(op) : parser.prototype.newRegexp.call(p, op))
		$.pointerValue<__goscript_regexp.Regexp>(re).Sub = $.goSlice($.pointerValue<__goscript_regexp.Regexp>(re).Sub0, undefined, 0)
		for (let __goscriptRangeTarget5 = subs, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let sub = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)
			if ($.pointerValue<__goscript_regexp.Regexp>(sub).Op == op) {
				$.pointerValue<__goscript_regexp.Regexp>(re).Sub = $.appendSlice($.pointerValue<__goscript_regexp.Regexp>(re).Sub, $.pointerValue<__goscript_regexp.Regexp>(sub).Sub, $.appendZeros.nil)
				void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).reuse(sub) : parser.prototype.reuse.call(p, sub))
			} else {
				$.pointerValue<__goscript_regexp.Regexp>(re).Sub = $.appendOne($.pointerValue<__goscript_regexp.Regexp>(re).Sub, sub, $.appendZeros.nil)
			}
		}
		if (op == 19) {
			$.pointerValue<__goscript_regexp.Regexp>(re).Sub = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).factor($.pointerValue<__goscript_regexp.Regexp>(re).Sub) : parser.prototype.factor.call(p, $.pointerValue<__goscript_regexp.Regexp>(re).Sub))
			if ($.sliceLen($.pointerValue<__goscript_regexp.Regexp>(re).Sub) == 1) {
				let old: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = re
				re = $.arrayIndex($.pointerValue<__goscript_regexp.Regexp>(re).Sub!, 0)
				void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).reuse(old) : parser.prototype.reuse.call(p, old))
			}
		}
		return re
	}

	public async concat(): globalThis.Promise<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null> {
		let p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).maybeConcat(-1, 0) : parser.prototype.maybeConcat.call(p, -1, 0))

		// Scan down to find pseudo-operator | or (.
		let i = $.sliceLen((p$ as parser).stack)
		while ((i > 0) && ($.pointerValue<__goscript_regexp.Regexp>($.arrayIndex((p$ as parser).stack!, i - 1)).Op < 128)) {
			i--
		}
		let subs: $.Slice<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null> = $.goSlice((p$ as parser).stack, i, undefined);
		;(p$ as parser).stack = $.goSlice((p$ as parser).stack, undefined, i)

		// Empty concatenation is special case.
		if ($.sliceLen(subs) == 0) {
			return parser.prototype.push.call(p, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).newRegexp(2) : parser.prototype.newRegexp.call(p, 2)))
		}

		return parser.prototype.push.call(p, await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).collapse(subs, 18) : parser.prototype.collapse.call(p, subs, 18)))
	}

	public async factor(sub: $.Slice<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null>): globalThis.Promise<$.Slice<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null>> {
		const p: parser | $.VarRef<parser> | null = this;
		if ($.sliceLen(sub) < 2) {
			return sub
		}

		// Round 1: Factor out common literal prefixes.
		let str: $.Slice<number> = null! as $.Slice<number>
		let strflags: Flags = 0
		let start = 0
		let out: $.Slice<__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null> = $.goSlice(sub, undefined, 0)
		for (let __goscriptSliceWindow0 = $.sliceRange(sub), i = 0; i <= __goscriptSliceWindow0.length; i++) {
			// Invariant: the Regexps that were in sub[0:start] have been
			// used or marked for reuse, and the slice space has been reused
			// for out (len(out) <= start).
			//
			// Invariant: sub[start:i] consists of regexps that all begin
			// with str as modified by strflags.
			let istr: $.Slice<number> = null! as $.Slice<number>
			let iflags: Flags = 0
			if (i < __goscriptSliceWindow0.length) {
				let __goscriptTuple1: any = parser.prototype.leadingString.call(p, ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null))
				istr = __goscriptTuple1[0]
				iflags = __goscriptTuple1[1]
				if (iflags == strflags) {
					let same = 0
					for (let __goscriptSliceWindow1 = $.sliceRange(str), __goscriptSliceWindow2 = $.sliceRange(istr); ((same < __goscriptSliceWindow1.length) && (same < __goscriptSliceWindow2.length)) && (((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, same)] as number) == ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, same)] as number)); ) {
						same++
					}
					if (same > 0) {
						// Matches at least one rune in current range.
						// Keep going around.
						str = $.goSlice(str, undefined, same)
						continue
					}
				}
			}

			// Found end of a run with common leading literal string:
			// sub[start:i] all begin with str[:len(str)], but sub[i]
			// does not even begin with str[0].
			//
			// Factor out common string and append factored expression to out.
			if (i == start) {
			} else {
				if (i == (start + 1)) {
					// Just one: don't bother factoring.
					out = $.appendOne(out, ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, start)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null), $.appendZeros.nil)
				} else {
					// Construct factored form: prefix(suffix1|suffix2|...)
					let prefix: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).newRegexp(3) : parser.prototype.newRegexp.call(p, 3))
					let prefix$: __goscript_regexp.Regexp = prefix == null ? $.pointerTarget<__goscript_regexp.Regexp>(prefix) : (prefix as any).__isVarRef === true ? (prefix as any).value : (prefix as any).__goValue === undefined ? (prefix as any) : $.pointerTarget<__goscript_regexp.Regexp>(prefix);
					;(prefix$ as __goscript_regexp.Regexp).Flags = strflags;
					;(prefix$ as __goscript_regexp.Regexp).Rune = $.appendSlice($.goSlice((prefix$ as __goscript_regexp.Regexp).Rune, undefined, 0), str)

					for (let j = start; j < i; j++) {
						;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] = parser.prototype.removeLeadingString.call(p, ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null), $.sliceLen(str))
						parser.prototype.checkLimits.call(p, ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null))
					}
					let suffix: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).collapse($.goSlice(sub, start, i), 19) : parser.prototype.collapse.call(p, $.goSlice(sub, start, i), 19))

					let re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).newRegexp(18) : parser.prototype.newRegexp.call(p, 18))
					let re$: __goscript_regexp.Regexp = re == null ? $.pointerTarget<__goscript_regexp.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<__goscript_regexp.Regexp>(re);
					;(re$ as __goscript_regexp.Regexp).Sub = $.append($.goSlice((re$ as __goscript_regexp.Regexp).Sub, undefined, 0), prefix, suffix, $.appendZeros.nil)
					out = $.appendOne(out, re, $.appendZeros.nil)
				}
			}

			// Prepare for next iteration.
			start = i
			str = istr
			strflags = iflags
		}
		sub = out

		// Round 2: Factor out common simple prefixes,
		// just the first piece of each concatenation.
		// This will be good enough a lot of the time.
		//
		// Complex subexpressions (e.g. involving quantifiers)
		// are not safe to factor because that collapses their
		// distinct paths through the automaton, which affects
		// correctness in some cases.
		start = 0
		out = $.goSlice(sub, undefined, 0)
		let first: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = null! as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null
		for (let __goscriptSliceWindow3 = $.sliceRange(sub), i = 0; i <= __goscriptSliceWindow3.length; i++) {
			// Invariant: the Regexps that were in sub[0:start] have been
			// used or marked for reuse, and the slice space has been reused
			// for out (len(out) <= start).
			//
			// Invariant: sub[start:i] consists of regexps that all begin with ifirst.
			let ifirst: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = null! as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null
			if (i < __goscriptSliceWindow3.length) {
				ifirst = parser.prototype.leadingRegexp.call(p, ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null))
				if (((first != null) && (first !== null && (first as any).__isVarRef !== true && (first as any).__goValue === undefined ? ((first as any) as __goscript_regexp.Regexp).Equal(ifirst) : __goscript_regexp.Regexp.prototype.Equal.call(first, ifirst))) && (isCharClass(first) || ((($.pointerValue<__goscript_regexp.Regexp>(first).Op == 17) && ($.pointerValue<__goscript_regexp.Regexp>(first).Min == $.pointerValue<__goscript_regexp.Regexp>(first).Max)) && isCharClass($.arrayIndex($.pointerValue<__goscript_regexp.Regexp>(first).Sub!, 0))))) {
					continue
				}
			}

			// Found end of a run with common leading regexp:
			// sub[start:i] all begin with first but sub[i] does not.
			//
			// Factor out common regexp and append factored expression to out.
			if (i == start) {
			} else {
				if (i == (start + 1)) {
					// Just one: don't bother factoring.
					out = $.appendOne(out, ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, start)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null), $.appendZeros.nil)
				} else {
					// Construct factored form: prefix(suffix1|suffix2|...)
					let prefix: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = first
					for (let j = start; j < i; j++) {
						let reuse = j != start;
						;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, j)] = parser.prototype.removeLeadingRegexp.call(p, ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, j)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null), reuse)
						parser.prototype.checkLimits.call(p, ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, j)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null))
					}
					let suffix: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).collapse($.goSlice(sub, start, i), 19) : parser.prototype.collapse.call(p, $.goSlice(sub, start, i), 19))

					let re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).newRegexp(18) : parser.prototype.newRegexp.call(p, 18))
					let re$: __goscript_regexp.Regexp = re == null ? $.pointerTarget<__goscript_regexp.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<__goscript_regexp.Regexp>(re);
					;(re$ as __goscript_regexp.Regexp).Sub = $.append($.goSlice((re$ as __goscript_regexp.Regexp).Sub, undefined, 0), prefix, suffix, $.appendZeros.nil)
					out = $.appendOne(out, re, $.appendZeros.nil)
				}
			}

			// Prepare for next iteration.
			start = i
			first = ifirst
		}
		sub = out

		// Round 3: Collapse runs of single literals into character classes.
		start = 0
		out = $.goSlice(sub, undefined, 0)
		for (let __goscriptSliceWindow4 = $.sliceRange(sub), i = 0; i <= __goscriptSliceWindow4.length; i++) {
			// Invariant: the Regexps that were in sub[0:start] have been
			// used or marked for reuse, and the slice space has been reused
			// for out (len(out) <= start).
			//
			// Invariant: sub[start:i] consists of regexps that are either
			// literal runes or character classes.
			if ((i < __goscriptSliceWindow4.length) && isCharClass(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null))) {
				continue
			}

			// sub[i] is not a char or char class;
			// emit char class for sub[start:i]...
			if (i == start) {
			} else {
				if (i == (start + 1)) {
					out = $.appendOne(out, ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, start)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null), $.appendZeros.nil)
				} else {
					// Make new char class.
					// Start with most complex regexp in sub[start].
					let max = start
					for (let j = start + 1; j < i; j++) {
						if (($.pointerValue<__goscript_regexp.Regexp>(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, max)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)).Op < $.pointerValue<__goscript_regexp.Regexp>(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, j)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)).Op) || (($.pointerValue<__goscript_regexp.Regexp>(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, max)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)).Op == $.pointerValue<__goscript_regexp.Regexp>(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, j)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)).Op) && ($.sliceLen($.pointerValue<__goscript_regexp.Regexp>(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, max)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)).Rune) < $.sliceLen($.pointerValue<__goscript_regexp.Regexp>(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, j)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)).Rune)))) {
							max = j
						}
					}
					let __goscriptAssign0_0: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, max)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)
					let __goscriptAssign0_1: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, start)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null);
					;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, start)] = __goscriptAssign0_0;
					;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, max)] = __goscriptAssign0_1

					for (let j = start + 1; j < i; j++) {
						mergeCharClass(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, start)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null), ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, j)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null))
						parser.prototype.reuse.call(p, ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, j)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null))
					}
					await cleanAlt(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, start)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null))
					out = $.appendOne(out, ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, start)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null), $.appendZeros.nil)
				}
			}

			// ... and then emit sub[i].
			if (i < __goscriptSliceWindow4.length) {
				out = $.appendOne(out, ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null), $.appendZeros.nil)
			}
			start = i + 1
		}
		sub = out

		// Round 4: Collapse runs of empty matches into a single empty match.
		start = 0
		out = $.goSlice(sub, undefined, 0)
		for (let __goscriptRangeTarget6 = sub, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), i = 0; i < __goscriptRangeWindow6.length; i++) {
			if ((((i + 1) < __goscriptRangeWindow6.length) && ($.pointerValue<__goscript_regexp.Regexp>(((__goscriptRangeWindow6.backing as any[])[__goscriptRangeWindow6.offset + i] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)).Op == 2)) && ($.pointerValue<__goscript_regexp.Regexp>(((__goscriptRangeWindow6.backing as any[])[$.windowSlot(__goscriptRangeWindow6, i + 1)] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)).Op == 2)) {
				continue
			}
			out = $.appendOne(out, ((__goscriptRangeWindow6.backing as any[])[__goscriptRangeWindow6.offset + i] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null), $.appendZeros.nil)
		}
		sub = out

		return sub
	}

	public leadingRegexp(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null): __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null {
		const p: parser | $.VarRef<parser> | null = this;
		const re$: __goscript_regexp.Regexp = re == null ? $.pointerTarget<__goscript_regexp.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<__goscript_regexp.Regexp>(re)
		if ((re$ as __goscript_regexp.Regexp).Op == 2) {
			return null
		}
		if (((re$ as __goscript_regexp.Regexp).Op == 18) && ($.sliceLen((re$ as __goscript_regexp.Regexp).Sub) > 0)) {
			let sub: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = $.arrayIndex((re$ as __goscript_regexp.Regexp).Sub!, 0)
			if ($.pointerValue<__goscript_regexp.Regexp>(sub).Op == 2) {
				return null
			}
			return sub
		}
		return re
	}

	public leadingString(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null): [$.Slice<number>, Flags] {
		const p: parser | $.VarRef<parser> | null = this;
		if (($.pointerValue<__goscript_regexp.Regexp>(re).Op == 18) && ($.sliceLen($.pointerValue<__goscript_regexp.Regexp>(re).Sub) > 0)) {
			re = $.arrayIndex($.pointerValue<__goscript_regexp.Regexp>(re).Sub!, 0)
		}
		if ($.pointerValue<__goscript_regexp.Regexp>(re).Op != 3) {
			return [null, 0]
		}
		return [$.pointerValue<__goscript_regexp.Regexp>(re).Rune, $.uint($.pointerValue<__goscript_regexp.Regexp>(re).Flags & 1, 16)]
	}

	public literal(r: number): void {
		const p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		let re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).newRegexp(3) : parser.prototype.newRegexp.call(p, 3))
		let re$: __goscript_regexp.Regexp = re == null ? $.pointerTarget<__goscript_regexp.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<__goscript_regexp.Regexp>(re);
		;(re$ as __goscript_regexp.Regexp).Flags = (p$ as parser).flags
		if ($.uint(((p$ as parser).flags & 1), 16) != 0) {
			r = minFoldRune(r)
		}
		;(re$ as __goscript_regexp.Regexp).Rune0[0] = r;
		;(re$ as __goscript_regexp.Regexp).Rune = $.goSlice((re$ as __goscript_regexp.Regexp).Rune0, undefined, 1)
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).push(re) : parser.prototype.push.call(p, re))
	}

	public maybeConcat(r: number, flags: Flags): boolean {
		let p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		let n = $.sliceLen((p$ as parser).stack)
		if (n < 2) {
			return false
		}

		let re1: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = $.arrayIndex((p$ as parser).stack!, n - 1)
		let re1$: __goscript_regexp.Regexp = re1 == null ? $.pointerTarget<__goscript_regexp.Regexp>(re1) : (re1 as any).__isVarRef === true ? (re1 as any).value : (re1 as any).__goValue === undefined ? (re1 as any) : $.pointerTarget<__goscript_regexp.Regexp>(re1)
		let re2: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = $.arrayIndex((p$ as parser).stack!, n - 2)
		let re2$: __goscript_regexp.Regexp = re2 == null ? $.pointerTarget<__goscript_regexp.Regexp>(re2) : (re2 as any).__isVarRef === true ? (re2 as any).value : (re2 as any).__goValue === undefined ? (re2 as any) : $.pointerTarget<__goscript_regexp.Regexp>(re2)
		if ((((re1$ as __goscript_regexp.Regexp).Op != 3) || ((re2$ as __goscript_regexp.Regexp).Op != 3)) || ($.uint(((re1$ as __goscript_regexp.Regexp).Flags & 1), 16) != $.uint(((re2$ as __goscript_regexp.Regexp).Flags & 1), 16))) {
			return false
		}

		// Push re1 into re2.
		;(re2$ as __goscript_regexp.Regexp).Rune = $.appendSlice((re2$ as __goscript_regexp.Regexp).Rune, (re1$ as __goscript_regexp.Regexp).Rune)

		// Reuse re1 if possible.
		if (r >= 0) {
			;(re1$ as __goscript_regexp.Regexp).Rune = $.goSlice((re1$ as __goscript_regexp.Regexp).Rune0, undefined, 1)
			$.sliceElems((re1$ as __goscript_regexp.Regexp).Rune!)[$.sliceSlot((re1$ as __goscript_regexp.Regexp).Rune!, 0)] = r;
			;(re1$ as __goscript_regexp.Regexp).Flags = flags
			return true
		}

		;(p$ as parser).stack = $.goSlice((p$ as parser).stack, undefined, n - 1)
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).reuse(re1) : parser.prototype.reuse.call(p, re1))
		return false
	}

	public newRegexp(op: __goscript_regexp.Op): __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null {
		let p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		let re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = (p$ as parser).free
		if (re != null) {
			;(p$ as parser).free = $.arrayIndex($.pointerValue<__goscript_regexp.Regexp>(re).Sub0, 0)
			$.assignStruct($.pointerValue<__goscript_regexp.Regexp>(re), new __goscript_regexp.Regexp(undefined, true))
		} else {
			re = new __goscript_regexp.Regexp();
			;(p$ as parser).numRegexp++
		}
		$.pointerValue<__goscript_regexp.Regexp>(re).Op = op
		return re
	}

	public op(op: __goscript_regexp.Op): __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null {
		const p: parser | $.VarRef<parser> | null = this;
		let re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).newRegexp(op) : parser.prototype.newRegexp.call(p, op))
		$.pointerValue<__goscript_regexp.Regexp>(re).Flags = $.pointerValue<parser>(p).flags
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).push(re) : parser.prototype.push.call(p, re))
	}

	public async parseClass(s: string): globalThis.Promise<[string, $.GoError]> {
		const p: parser | $.VarRef<parser> | null = this;
		let rest: string = ""
		let err: $.GoError = null! as $.GoError
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		let t = $.sliceStringOrBytes(s, 1, undefined)
		let re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).newRegexp(4) : parser.prototype.newRegexp.call(p, 4))
		let re$: __goscript_regexp.Regexp = re == null ? $.pointerTarget<__goscript_regexp.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<__goscript_regexp.Regexp>(re);
		;(re$ as __goscript_regexp.Regexp).Flags = (p$ as parser).flags;
		;(re$ as __goscript_regexp.Regexp).Rune = $.goSlice((re$ as __goscript_regexp.Regexp).Rune0, undefined, 0)

		let sign = 1
		if ((!$.stringEqual(t, "")) && ($.indexString(t, 0) == 94)) {
			sign = -1
			t = $.sliceStringOrBytes(t, 1, undefined)

			// If character class does not match \n, add it here,
			// so that negation later will do the right thing.
			if ($.uint(((p$ as parser).flags & 4), 16) == 0) {
				;(re$ as __goscript_regexp.Regexp).Rune = $.append((re$ as __goscript_regexp.Regexp).Rune, $.int(10, 32), $.int(10, 32))
			}
		}

		let _class: $.Slice<number> = (re$ as __goscript_regexp.Regexp).Rune
		let first = true
		while ((($.stringEqual(t, "")) || ($.indexString(t, 0) != 93)) || first) {
			// POSIX: - is only okay unescaped as first or last in class.
			// Perl: - is okay anywhere.
			if (((((!$.stringEqual(t, "")) && ($.indexString(t, 0) == 45)) && ($.uint(((p$ as parser).flags & 64), 16) == 0)) && !first) && (($.stringLen(t) == 1) || ($.indexString(t, 1) != 93))) {
				let [, size] = utf8.DecodeRuneInString($.sliceStringOrBytes(t, 1, undefined))
				return ["", $.interfaceValue<$.GoError>(new Error({Code: "invalid character class range", Expr: $.sliceStringOrBytes(t, undefined, 1 + size)}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
			}
			first = false

			// Look for POSIX [:alnum:] etc.
			if ((($.stringLen(t) > 2) && ($.indexString(t, 0) == 91)) && ($.indexString(t, 1) == 58)) {
				let __goscriptTuple2: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).parseNamedClass(t, _class) : parser.prototype.parseNamedClass.call(p, t, _class))
				let nclass: $.Slice<number> = __goscriptTuple2[0]
				let nt = __goscriptTuple2[1]
				let __goscriptShadow0 = __goscriptTuple2[2]
				if (__goscriptShadow0 != null) {
					return ["", __goscriptShadow0]
				}
				if (nclass != null) {
					let __goscriptAssign1_0: $.Slice<number> = nclass
					let __goscriptAssign1_1: string = nt
					_class = __goscriptAssign1_0
					t = __goscriptAssign1_1
					continue
				}
			}

			// Look for Unicode character group like \p{Han}.
			let __goscriptTuple3: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).parseUnicodeClass(t, _class) : parser.prototype.parseUnicodeClass.call(p, t, _class))
			let nclass: $.Slice<number> = __goscriptTuple3[0]
			let nt = __goscriptTuple3[1]
			let __goscriptShadow1 = __goscriptTuple3[2]
			if (__goscriptShadow1 != null) {
				return ["", __goscriptShadow1]
			}
			if (nclass != null) {
				let __goscriptAssign2_0: $.Slice<number> = nclass
				let __goscriptAssign2_1: string = nt
				_class = __goscriptAssign2_0
				t = __goscriptAssign2_1
				continue
			}

			// Look for Perl character class symbols (extension).
			{
				let __goscriptTuple4: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).parsePerlClassEscape(t, _class) : parser.prototype.parsePerlClassEscape.call(p, t, _class))
				let __goscriptShadow2: $.Slice<number> = __goscriptTuple4[0]
				let __goscriptShadow3 = __goscriptTuple4[1]
				if (__goscriptShadow2 != null) {
					let __goscriptAssign3_0: $.Slice<number> = __goscriptShadow2
					let __goscriptAssign3_1: string = __goscriptShadow3
					_class = __goscriptAssign3_0
					t = __goscriptAssign3_1
					continue
				}
			}

			// Single character or simple range.
			let rng = t
			let lo: number = 0
			let hi: number = 0
			{
				let __goscriptTuple5: any = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).parseClassChar(t, s) : parser.prototype.parseClassChar.call(p, t, s))
				lo = __goscriptTuple5[0]
				t = __goscriptTuple5[1]
				__goscriptShadow1 = __goscriptTuple5[2]
				if (__goscriptShadow1 != null) {
					return ["", __goscriptShadow1]
				}
			}
			hi = lo
			// [a-] means (a|-) so check for final ].
			if ((($.stringLen(t) >= 2) && ($.indexString(t, 0) == 45)) && ($.indexString(t, 1) != 93)) {
				t = $.sliceStringOrBytes(t, 1, undefined)
				{
					let __goscriptTuple6: any = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).parseClassChar(t, s) : parser.prototype.parseClassChar.call(p, t, s))
					hi = __goscriptTuple6[0]
					t = __goscriptTuple6[1]
					__goscriptShadow1 = __goscriptTuple6[2]
					if (__goscriptShadow1 != null) {
						return ["", __goscriptShadow1]
					}
				}
				if (hi < lo) {
					rng = $.sliceStringOrBytes(rng, undefined, $.stringLen(rng) - $.stringLen(t))
					return ["", $.interfaceValue<$.GoError>(new Error({Code: "invalid character class range", Expr: rng}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
				}
			}
			if ($.uint(((p$ as parser).flags & 1), 16) == 0) {
				_class = appendRange(_class, lo, hi)
			} else {
				_class = appendFoldedRange(_class, lo, hi)
			}
		}
		t = $.sliceStringOrBytes(t, 1, undefined);

		// Use &re.Rune instead of &class to avoid allocation.
		;(re$ as __goscript_regexp.Regexp).Rune = _class
		_class = await cleanClass($.fieldRef((re$ as __goscript_regexp.Regexp)._fields, "Rune"))
		if (sign < 0) {
			_class = negateClass(_class)
		}
		;(re$ as __goscript_regexp.Regexp).Rune = _class
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).push(re) : parser.prototype.push.call(p, re))
		return [t, null]
	}

	public parseClassChar(s: string, wholeClass: string): [number, string, $.GoError] {
		const p: parser | $.VarRef<parser> | null = this;
		let r: number = 0
		let rest: string = ""
		let err: $.GoError = null! as $.GoError
		if ($.stringEqual(s, "")) {
			return [0, "", $.interfaceValue<$.GoError>(new Error({Code: "missing closing ]", Expr: wholeClass}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
		}

		// Allow regular escape sequences even though
		// many need not be escaped in this context.
		if ($.indexString(s, 0) == 92) {
			return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).parseEscape(s) : parser.prototype.parseEscape.call(p, s))
		}

		return nextRune(s)
	}

	public parseEscape(s: string): [number, string, $.GoError] {
		const p: parser | $.VarRef<parser> | null = this;
		let r: number = 0
		let rest: string = ""
		let err: $.GoError = null! as $.GoError
		let t = $.sliceStringOrBytes(s, 1, undefined)
		if ($.stringEqual(t, "")) {
			return [0, "", $.interfaceValue<$.GoError>(new Error({Code: "trailing backslash at end of expression", Expr: ""}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
		}
		let __goscriptTuple7: any = nextRune(t)
		let c = __goscriptTuple7[0]
		t = __goscriptTuple7[1]
		err = __goscriptTuple7[2]
		if (err != null) {
			return [0, "", err]
		}

		Switch: {
			switch (c) {
				default:
				{
					if ((c < 128) && !isalnum(c)) {
						// Escaped non-word characters are always themselves.
						// PCRE is not quite so rigorous: it accepts things like
						// \q, but we don't. We once rejected \_, but too many
						// programs and people insist on using it, so allow \_.
						return [c, t, null]
					}
					break
				}
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				{
					if ((($.stringEqual(t, "")) || ($.indexString(t, 0) < 48)) || ($.indexString(t, 0) > 55)) {
						break
					}
				}
				case 48:
				{
					r = $.int(((c - 48) | 0), 32)
					for (let i = 1; i < 3; i++) {
						if ((($.stringEqual(t, "")) || ($.indexString(t, 0) < 48)) || ($.indexString(t, 0) > 55)) {
							break
						}
						r = $.int(((((((globalThis.Math.imul(r, 8)) + $.int($.indexString(t, 0), 32)) | 0)) - 48) | 0), 32)
						t = $.sliceStringOrBytes(t, 1, undefined)
					}
					return [r, t, null]
					break
				}
				case 120:
				{
					if ($.stringEqual(t, "")) {
						break
					}
					{
						let __goscriptTuple8: any = nextRune(t)
						c = __goscriptTuple8[0]
						t = __goscriptTuple8[1]
						err = __goscriptTuple8[2]
						if (err != null) {
							return [0, "", err]
						}
					}
					if (c == 123) {
						// Any number of digits in braces.
						// Perl accepts any text at all; it ignores all text
						// after the first non-hex digit. We require only hex digits,
						// and at least one.
						let nhex = 0
						r = 0
						while (true) {
							if ($.stringEqual(t, "")) {
								break Switch
							}
							{
								let __goscriptTuple9: any = nextRune(t)
								c = __goscriptTuple9[0]
								t = __goscriptTuple9[1]
								err = __goscriptTuple9[2]
								if (err != null) {
									return [0, "", err]
								}
							}
							if (c == 125) {
								break
							}
							let v = unhex(c)
							if (v < 0) {
								break Switch
							}
							r = $.int((((globalThis.Math.imul(r, 16)) + v) | 0), 32)
							if (r > 1114111) {
								break Switch
							}
							nhex++
						}
						if (nhex == 0) {
							break Switch
						}
						return [r, t, null]
					}

					// Easy case: two hex digits.
					let x = unhex(c)
					{
						let __goscriptTuple10: any = nextRune(t)
						c = __goscriptTuple10[0]
						t = __goscriptTuple10[1]
						err = __goscriptTuple10[2]
						if (err != null) {
							return [0, "", err]
						}
					}
					let y = unhex(c)
					if ((x < 0) || (y < 0)) {
						break
					}
					return [$.int((((globalThis.Math.imul(x, 16)) + y) | 0), 32), t, null]
					break
				}
				case 97:
				{
					return [7, t, err]
					break
				}
				case 102:
				{
					return [12, t, err]
					break
				}
				case 110:
				{
					return [10, t, err]
					break
				}
				case 114:
				{
					return [13, t, err]
					break
				}
				case 116:
				{
					return [9, t, err]
					break
				}
				case 118:
				{
					return [11, t, err]
					break
				}
			}
		}
		return [0, "", $.interfaceValue<$.GoError>(new Error({Code: "invalid escape sequence", Expr: $.sliceStringOrBytes(s, undefined, $.stringLen(s) - $.stringLen(t))}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
	}

	public parseInt(s: string): [number, string, boolean] {
		const p: parser | $.VarRef<parser> | null = this;
		let n: number = 0
		let rest: string = ""
		let ok: boolean = false
		if ((($.stringEqual(s, "")) || ($.indexString(s, 0) < 48)) || (57 < $.indexString(s, 0))) {
			return [n, rest, ok]
		}
		// Disallow leading zeros.
		if (((($.stringLen(s) >= 2) && ($.indexString(s, 0) == 48)) && (48 <= $.indexString(s, 1))) && ($.indexString(s, 1) <= 57)) {
			return [n, rest, ok]
		}
		let t = s
		while (((!$.stringEqual(s, "")) && (48 <= $.indexString(s, 0))) && ($.indexString(s, 0) <= 57)) {
			s = $.sliceStringOrBytes(s, 1, undefined)
		}
		rest = s
		ok = true
		// Have digits, compute value.
		t = $.sliceStringOrBytes(t, undefined, $.stringLen(t) - $.stringLen(s))
		for (let i = 0; i < $.stringLen(t); i++) {
			// Avoid overflow.
			if (n >= 100000000) {
				n = -1
				break
			}
			n = ((n * 10) + $.int($.indexString(t, i))) - 48
		}
		return [n, rest, ok]
	}

	public async parseNamedClass(s: string, r: $.Slice<number>): globalThis.Promise<[$.Slice<number>, string, $.GoError]> {
		const p: parser | $.VarRef<parser> | null = this;
		let out: $.Slice<number> = null! as $.Slice<number>
		let rest: string = ""
		let err: $.GoError = null! as $.GoError
		if ((($.stringLen(s) < 2) || ($.indexString(s, 0) != 91)) || ($.indexString(s, 1) != 58)) {
			return [out, rest, err]
		}

		let i = strings.Index($.sliceStringOrBytes(s, 2, undefined), ":]")
		if (i < 0) {
			return [out, rest, err]
		}
		i = i + (2)
		let name = $.sliceStringOrBytes(s, 0, i + 2)
		s = $.sliceStringOrBytes(s, i + 2, undefined)
		let g = ($.mapGet<string, charGroup, charGroup>(__goscript_perl_groups.__goscript_get_posixGroup(), name, new charGroup(undefined, true))[0]).clone()
		if (g.sign == 0) {
			return [null, "", $.interfaceValue<$.GoError>(new Error({Code: "invalid character class range", Expr: name}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
		}
		return [await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).appendGroup(r, g) : parser.prototype.appendGroup.call(p, r, g)), s, null]
	}

	public async parsePerlClassEscape(s: string, r: $.Slice<number>): globalThis.Promise<[$.Slice<number>, string]> {
		const p: parser | $.VarRef<parser> | null = this;
		let out: $.Slice<number> = null! as $.Slice<number>
		let rest: string = ""
		if ((($.uint(($.pointerValue<parser>(p).flags & 64), 16) == 0) || ($.stringLen(s) < 2)) || ($.indexString(s, 0) != 92)) {
			return [out, rest]
		}
		let g = ($.mapGet<string, charGroup, charGroup>(__goscript_perl_groups.__goscript_get_perlGroup(), $.sliceStringOrBytes(s, 0, 2), new charGroup(undefined, true))[0]).clone()
		if (g.sign == 0) {
			return [out, rest]
		}
		return [await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).appendGroup(r, g) : parser.prototype.appendGroup.call(p, r, g)), $.sliceStringOrBytes(s, 2, undefined)]
	}

	public parsePerlFlags(s: string): [string, $.GoError] {
		let p: parser | $.VarRef<parser> | null = this;
		let rest: string = ""
		let err: $.GoError = null! as $.GoError
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		let t = s

		// Check for named captures, first introduced in Python's regexp library.
		// As usual, there are three slightly different syntaxes:
		//
		//   (?P<name>expr)   the original, introduced by Python
		//   (?<name>expr)    the .NET alteration, adopted by Perl 5.10
		//   (?'name'expr)    another .NET alteration, adopted by Perl 5.10
		//
		// Perl 5.10 gave in and implemented the Python version too,
		// but they claim that the last two are the preferred forms.
		// PCRE and languages based on it (specifically, PHP and Ruby)
		// support all three as well. EcmaScript 4 uses only the Python form.
		//
		// In both the open source world (via Code Search) and the
		// Google source tree, (?P<expr>name) and (?<expr>name) are the
		// dominant forms of named captures and both are supported.
		let startsWithP = (($.stringLen(t) > 4) && ($.indexString(t, 2) == 80)) && ($.indexString(t, 3) == 60)
		let startsWithName = ($.stringLen(t) > 3) && ($.indexString(t, 2) == 60)

		if (startsWithP || startsWithName) {
			// position of expr start
			let exprStartPos = 4
			if (startsWithName) {
				exprStartPos = 3
			}

			// Pull out name.
			let end = strings.IndexRune(t, 62)
			if (end < 0) {
				{
					err = checkUTF8(t)
					if (err != null) {
						return ["", err]
					}
				}
				return ["", $.interfaceValue<$.GoError>(new Error({Code: "invalid named capture", Expr: s}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
			}

			let capture = $.sliceStringOrBytes(t, undefined, end + 1)
			let name = $.sliceStringOrBytes(t, exprStartPos, end)
			{
				err = checkUTF8(name)
				if (err != null) {
					return ["", err]
				}
			}
			if (!isValidCaptureName(name)) {
				return ["", $.interfaceValue<$.GoError>(new Error({Code: "invalid named capture", Expr: capture}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
			}

			// Like ordinary capture, but named.
			;(p$ as parser).numCap++
			let re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).op(128) : parser.prototype.op.call(p, 128))
			let re$: __goscript_regexp.Regexp = re == null ? $.pointerTarget<__goscript_regexp.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<__goscript_regexp.Regexp>(re);
			;(re$ as __goscript_regexp.Regexp).Cap = (p$ as parser).numCap;
			;(re$ as __goscript_regexp.Regexp).Name = name
			return [$.sliceStringOrBytes(t, end + 1, undefined), null]
		}

		// Non-capturing group. Might also twiddle Perl flags.
		let c: number = 0
		t = $.sliceStringOrBytes(t, 2, undefined)
		let flags = (p$ as parser).flags
		let sign = 1
		let sawFlag = false
		Loop: while (!$.stringEqual(t, "")) {
			{
				let __goscriptTuple11: any = nextRune(t)
				c = __goscriptTuple11[0]
				t = __goscriptTuple11[1]
				err = __goscriptTuple11[2]
				if (err != null) {
					return ["", err]
				}
			}
			switch (c) {
				default:
				{
					break Loop
					break
				}
				case 105:
				{
					flags = flags | (1)
					sawFlag = true
					break
				}
				case 109:
				{
					flags = flags & ~((16))
					sawFlag = true
					break
				}
				case 115:
				{
					flags = flags | (8)
					sawFlag = true
					break
				}
				case 85:
				{
					flags = flags | (32)
					sawFlag = true
					break
				}
				case 45:
				{
					if (sign < 0) {
						break Loop
					}
					sign = -1
					// Invert flags so that | above turn into &^ and vice versa.
					// We'll invert flags again before using it below.
					flags = $.uint($.uint(~flags, 16), 16)
					sawFlag = false
					break
				}
				case 58:
				case 41:
				{
					if (sign < 0) {
						if (!sawFlag) {
							break Loop
						}
						flags = $.uint($.uint(~flags, 16), 16)
					}
					if (c == 58) {
						// Open new group
						void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).op(128) : parser.prototype.op.call(p, 128))
					}
					;(p$ as parser).flags = flags
					return [t, null]
					break
				}
			}
		}

		return ["", $.interfaceValue<$.GoError>(new Error({Code: "invalid or unsupported Perl syntax", Expr: $.sliceStringOrBytes(s, undefined, $.stringLen(s) - $.stringLen(t))}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
	}

	public parseRepeat(s: string): [number, number, string, boolean] {
		const p: parser | $.VarRef<parser> | null = this;
		let min: number = 0
		let max: number = 0
		let rest: string = ""
		let ok: boolean = false
		if (($.stringEqual(s, "")) || ($.indexString(s, 0) != 123)) {
			return [min, max, rest, ok]
		}
		s = $.sliceStringOrBytes(s, 1, undefined)
		let ok1: boolean = false
		{
			let __goscriptTuple12: any = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).parseInt(s) : parser.prototype.parseInt.call(p, s))
			min = __goscriptTuple12[0]
			s = __goscriptTuple12[1]
			ok1 = __goscriptTuple12[2]
			if (!ok1) {
				return [min, max, rest, ok]
			}
		}
		if ($.stringEqual(s, "")) {
			return [min, max, rest, ok]
		}
		if ($.indexString(s, 0) != 44) {
			max = min
		} else {
			s = $.sliceStringOrBytes(s, 1, undefined)
			if ($.stringEqual(s, "")) {
				return [min, max, rest, ok]
			}
			if ($.indexString(s, 0) == 125) {
				max = -1
			} else {
				{
					let __goscriptTuple13: any = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).parseInt(s) : parser.prototype.parseInt.call(p, s))
					max = __goscriptTuple13[0]
					s = __goscriptTuple13[1]
					ok1 = __goscriptTuple13[2]
					if (!ok1) {
						return [min, max, rest, ok]
					} else {
						if (max < 0) {
							// parseInt found too big a number
							min = -1
						}
					}
				}
			}
		}
		if (($.stringEqual(s, "")) || ($.indexString(s, 0) != 125)) {
			return [min, max, rest, ok]
		}
		rest = $.sliceStringOrBytes(s, 1, undefined)
		ok = true
		return [min, max, rest, ok]
	}

	public async parseRightParen(): globalThis.Promise<$.GoError> {
		let p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).concat() : parser.prototype.concat.call(p))
		if (await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).swapVerticalBar() : parser.prototype.swapVerticalBar.call(p))) {
			// pop vertical bar
			;(p$ as parser).stack = $.goSlice((p$ as parser).stack, undefined, $.sliceLen((p$ as parser).stack) - 1)
		}
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).alternate() : parser.prototype.alternate.call(p))

		let n = $.sliceLen((p$ as parser).stack)
		if (n < 2) {
			return $.interfaceValue<$.GoError>(new Error({Code: "unexpected )", Expr: (p$ as parser).wholeRegexp}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))
		}
		let re1: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = $.arrayIndex((p$ as parser).stack!, n - 1)
		let re2: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = $.arrayIndex((p$ as parser).stack!, n - 2)
		let re2$: __goscript_regexp.Regexp = re2 == null ? $.pointerTarget<__goscript_regexp.Regexp>(re2) : (re2 as any).__isVarRef === true ? (re2 as any).value : (re2 as any).__goValue === undefined ? (re2 as any) : $.pointerTarget<__goscript_regexp.Regexp>(re2);
		;(p$ as parser).stack = $.goSlice((p$ as parser).stack, undefined, n - 2)
		if ((re2$ as __goscript_regexp.Regexp).Op != 128) {
			return $.interfaceValue<$.GoError>(new Error({Code: "unexpected )", Expr: (p$ as parser).wholeRegexp}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))
		}
		// Restore flags at time of paren.
		;(p$ as parser).flags = (re2$ as __goscript_regexp.Regexp).Flags
		if ((re2$ as __goscript_regexp.Regexp).Cap == 0) {
			// Just for grouping.
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).push(re1) : parser.prototype.push.call(p, re1))
		} else {
			;(re2$ as __goscript_regexp.Regexp).Op = 13;
			;(re2$ as __goscript_regexp.Regexp).Sub = $.goSlice((re2$ as __goscript_regexp.Regexp).Sub0, undefined, 1)
			$.sliceElems((re2$ as __goscript_regexp.Regexp).Sub!)[$.sliceSlot((re2$ as __goscript_regexp.Regexp).Sub!, 0)] = re1
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).push(re2) : parser.prototype.push.call(p, re2))
		}
		return null
	}

	public async parseUnicodeClass(s: string, r: $.Slice<number>): globalThis.Promise<[$.Slice<number>, string, $.GoError]> {
		let p: parser | $.VarRef<parser> | null = this;
		let out: $.Slice<number> = null! as $.Slice<number>
		let rest: string = ""
		let err: $.GoError = null! as $.GoError
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		if (((($.uint(((p$ as parser).flags & 128), 16) == 0) || ($.stringLen(s) < 2)) || ($.indexString(s, 0) != 92)) || (($.indexString(s, 1) != 112) && ($.indexString(s, 1) != 80))) {
			return [out, rest, err]
		}

		// Committed to parse or return error.
		let sign = 1
		if ($.indexString(s, 1) == 80) {
			sign = -1
		}
		let t = $.sliceStringOrBytes(s, 2, undefined)
		let __goscriptTuple14: any = nextRune(t)
		let c = __goscriptTuple14[0]
		t = __goscriptTuple14[1]
		err = __goscriptTuple14[2]
		if (err != null) {
			return [out, rest, err]
		}
		let seq: string = ""
		let name: string = ""
		if (c != 123) {
			// Single-letter name.
			seq = $.sliceStringOrBytes(s, undefined, $.stringLen(s) - $.stringLen(t))
			name = $.sliceStringOrBytes(seq, 2, undefined)
		} else {
			// Name is in braces.
			let end = strings.IndexRune(s, 125)
			if (end < 0) {
				{
					err = checkUTF8(s)
					if (err != null) {
						return [out, rest, err]
					}
				}
				return [null, "", $.interfaceValue<$.GoError>(new Error({Code: "invalid character class range", Expr: s}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
			}
			let __goscriptAssign4_0: string = $.sliceStringOrBytes(s, undefined, end + 1)
			let __goscriptAssign4_1: string = $.sliceStringOrBytes(s, end + 1, undefined)
			seq = __goscriptAssign4_0
			t = __goscriptAssign4_1
			name = $.sliceStringOrBytes(s, 3, end)
			{
				err = checkUTF8(name)
				if (err != null) {
					return [out, rest, err]
				}
			}
		}

		// Group can have leading negation too.  \p{^Han} == \P{Han}, \P{^Han} == \p{Han}.
		if ((!$.stringEqual(name, "")) && ($.indexString(name, 0) == 94)) {
			sign = -sign
			name = $.sliceStringOrBytes(name, 1, undefined)
		}

		let __goscriptTuple15: any = await unicodeTable(name)
		let tab: unicode.RangeTable | $.VarRef<unicode.RangeTable> | null = __goscriptTuple15[0]
		let fold: unicode.RangeTable | $.VarRef<unicode.RangeTable> | null = __goscriptTuple15[1]
		let tsign = __goscriptTuple15[2]
		if (tab == null) {
			return [null, "", $.interfaceValue<$.GoError>(new Error({Code: "invalid character class range", Expr: seq}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
		}
		if (tsign < 0) {
			sign = -sign
		}

		if (($.uint(((p$ as parser).flags & 1), 16) == 0) || (fold == null)) {
			if (sign > 0) {
				r = appendTable(r, tab)
			} else {
				r = appendNegatedTable(r, tab)
			}
		} else {
			// Merge and clean tab and fold in a temporary buffer.
			// This is necessary for the negative case and just tidy
			// for the positive case.
			let tmp: $.Slice<number> = $.goSlice((p$ as parser).tmpClass, undefined, 0)
			tmp = appendTable(tmp, tab)
			tmp = appendTable(tmp, fold);
			;(p$ as parser).tmpClass = tmp
			tmp = await cleanClass($.fieldRef((p$ as parser)._fields, "tmpClass"))
			if (sign > 0) {
				r = appendClass(r, tmp)
			} else {
				r = appendNegatedClass(r, tmp)
			}
		}
		return [r, t, null]
	}

	public async parseVerticalBar(): globalThis.Promise<void> {
		const p: parser | $.VarRef<parser> | null = this;
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).concat() : parser.prototype.concat.call(p))

		// The concatenation we just parsed is on top of the stack.
		// If it sits above an opVerticalBar, swap it below
		// (things below an opVerticalBar become an alternation).
		// Otherwise, push a new vertical bar.
		if (!await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).swapVerticalBar() : parser.prototype.swapVerticalBar.call(p))) {
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).op(129) : parser.prototype.op.call(p, 129))
		}
	}

	public push(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null): __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null {
		let p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		const re$: __goscript_regexp.Regexp = re == null ? $.pointerTarget<__goscript_regexp.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<__goscript_regexp.Regexp>(re);
		;(p$ as parser).numRunes = (p$ as parser).numRunes + ($.sliceLen((re$ as __goscript_regexp.Regexp).Rune))
		if ((((re$ as __goscript_regexp.Regexp).Op == 4) && ($.sliceLen((re$ as __goscript_regexp.Regexp).Rune) == 2)) && ($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 0) == $.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 1))) {
			// Single rune.
			if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).maybeConcat($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 0), $.uint((p$ as parser).flags & ~(1), 16)) : parser.prototype.maybeConcat.call(p, $.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 0), $.uint((p$ as parser).flags & ~(1), 16)))) {
				return null
			}
			;(re$ as __goscript_regexp.Regexp).Op = 3;
			;(re$ as __goscript_regexp.Regexp).Rune = $.goSlice((re$ as __goscript_regexp.Regexp).Rune, undefined, 1);
			;(re$ as __goscript_regexp.Regexp).Flags = $.uint((p$ as parser).flags & ~(1), 16)
		} else {
			if ((((((((re$ as __goscript_regexp.Regexp).Op == 4) && ($.sliceLen((re$ as __goscript_regexp.Regexp).Rune) == 4)) && ($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 0) == $.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 1))) && ($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 2) == $.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 3))) && (unicode.SimpleFold($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 0)) == $.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 2))) && (unicode.SimpleFold($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 2)) == $.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 0))) || ((((((re$ as __goscript_regexp.Regexp).Op == 4) && ($.sliceLen((re$ as __goscript_regexp.Regexp).Rune) == 2)) && ($.int(((($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 0) + 1) | 0)), 32) == $.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 1))) && (unicode.SimpleFold($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 0)) == $.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 1))) && (unicode.SimpleFold($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 1)) == $.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 0)))) {
				// Case-insensitive rune like [Aa] or [Δδ].
				if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).maybeConcat($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 0), $.uint((p$ as parser).flags | 1, 16)) : parser.prototype.maybeConcat.call(p, $.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 0), $.uint((p$ as parser).flags | 1, 16)))) {
					return null
				}

				// Rewrite as (case-insensitive) literal.
				;(re$ as __goscript_regexp.Regexp).Op = 3;
				;(re$ as __goscript_regexp.Regexp).Rune = $.goSlice((re$ as __goscript_regexp.Regexp).Rune, undefined, 1);
				;(re$ as __goscript_regexp.Regexp).Flags = $.uint((p$ as parser).flags | 1, 16)
			} else {
				// Incremental concatenation.
				void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).maybeConcat(-1, 0) : parser.prototype.maybeConcat.call(p, -1, 0))
			}
		}

		;(p$ as parser).stack = $.appendOne((p$ as parser).stack, re, $.appendZeros.nil)
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).checkLimits(re) : parser.prototype.checkLimits.call(p, re))
		return re
	}

	public removeLeadingRegexp(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, reuse: boolean): __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null {
		const p: parser | $.VarRef<parser> | null = this;
		if (($.pointerValue<__goscript_regexp.Regexp>(re).Op == 18) && ($.sliceLen($.pointerValue<__goscript_regexp.Regexp>(re).Sub) > 0)) {
			if (reuse) {
				void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).reuse($.arrayIndex($.pointerValue<__goscript_regexp.Regexp>(re).Sub!, 0)) : parser.prototype.reuse.call(p, $.arrayIndex($.pointerValue<__goscript_regexp.Regexp>(re).Sub!, 0)))
			}
			$.pointerValue<__goscript_regexp.Regexp>(re).Sub = $.goSlice($.pointerValue<__goscript_regexp.Regexp>(re).Sub, undefined, $.copy($.pointerValue<__goscript_regexp.Regexp>(re).Sub, $.goSlice($.pointerValue<__goscript_regexp.Regexp>(re).Sub, 1, undefined)))
			switch ($.sliceLen($.pointerValue<__goscript_regexp.Regexp>(re).Sub)) {
				case 0:
				{
					$.pointerValue<__goscript_regexp.Regexp>(re).Op = 2
					$.pointerValue<__goscript_regexp.Regexp>(re).Sub = null
					break
				}
				case 1:
				{
					let old: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = re
					re = $.arrayIndex($.pointerValue<__goscript_regexp.Regexp>(re).Sub!, 0)
					void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).reuse(old) : parser.prototype.reuse.call(p, old))
					break
				}
			}
			return re
		}
		if (reuse) {
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).reuse(re) : parser.prototype.reuse.call(p, re))
		}
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).newRegexp(2) : parser.prototype.newRegexp.call(p, 2))
	}

	public removeLeadingString(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, n: number): __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null {
		const p: parser | $.VarRef<parser> | null = this;
		if (($.pointerValue<__goscript_regexp.Regexp>(re).Op == 18) && ($.sliceLen($.pointerValue<__goscript_regexp.Regexp>(re).Sub) > 0)) {
			// Removing a leading string in a concatenation
			// might simplify the concatenation.
			let sub: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = $.arrayIndex($.pointerValue<__goscript_regexp.Regexp>(re).Sub!, 0)
			sub = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).removeLeadingString(sub, n) : parser.prototype.removeLeadingString.call(p, sub, n))
			$.sliceElems($.pointerValue<__goscript_regexp.Regexp>(re).Sub!)[$.sliceSlot($.pointerValue<__goscript_regexp.Regexp>(re).Sub!, 0)] = sub
			if ($.pointerValue<__goscript_regexp.Regexp>(sub).Op == 2) {
				void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).reuse(sub) : parser.prototype.reuse.call(p, sub))
				switch ($.sliceLen($.pointerValue<__goscript_regexp.Regexp>(re).Sub)) {
					case 0:
					case 1:
					{
						$.pointerValue<__goscript_regexp.Regexp>(re).Op = 2
						$.pointerValue<__goscript_regexp.Regexp>(re).Sub = null
						break
					}
					case 2:
					{
						let old: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = re
						re = $.arrayIndex($.pointerValue<__goscript_regexp.Regexp>(re).Sub!, 1)
						void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).reuse(old) : parser.prototype.reuse.call(p, old))
						break
					}
					default:
					{
						$.copy($.pointerValue<__goscript_regexp.Regexp>(re).Sub, $.goSlice($.pointerValue<__goscript_regexp.Regexp>(re).Sub, 1, undefined))
						$.pointerValue<__goscript_regexp.Regexp>(re).Sub = $.goSlice($.pointerValue<__goscript_regexp.Regexp>(re).Sub, undefined, $.sliceLen($.pointerValue<__goscript_regexp.Regexp>(re).Sub) - 1)
						break
					}
				}
			}
			return re
		}

		if ($.pointerValue<__goscript_regexp.Regexp>(re).Op == 3) {
			$.pointerValue<__goscript_regexp.Regexp>(re).Rune = $.goSlice($.pointerValue<__goscript_regexp.Regexp>(re).Rune, undefined, $.copy($.pointerValue<__goscript_regexp.Regexp>(re).Rune, $.goSlice($.pointerValue<__goscript_regexp.Regexp>(re).Rune, n, undefined)))
			if ($.sliceLen($.pointerValue<__goscript_regexp.Regexp>(re).Rune) == 0) {
				$.pointerValue<__goscript_regexp.Regexp>(re).Op = 2
			}
		}
		return re
	}

	public repeat(op: __goscript_regexp.Op, min: number, max: number, before: string, after: string, lastRepeat: string): [string, $.GoError] {
		let p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		let flags = (p$ as parser).flags
		if ($.uint(((p$ as parser).flags & 64), 16) != 0) {
			if (($.stringLen(after) > 0) && ($.indexString(after, 0) == 63)) {
				after = $.sliceStringOrBytes(after, 1, undefined)
				flags = flags ^ (32)
			}
			if (!$.stringEqual(lastRepeat, "")) {
				// In Perl it is not allowed to stack repetition operators:
				// a** is a syntax error, not a doubled star, and a++ means
				// something else entirely, which we don't support!
				return ["", $.interfaceValue<$.GoError>(new Error({Code: "invalid nested repetition operator", Expr: $.sliceStringOrBytes(lastRepeat, undefined, $.stringLen(lastRepeat) - $.stringLen(after))}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
			}
		}
		let n = $.sliceLen((p$ as parser).stack)
		if (n == 0) {
			return ["", $.interfaceValue<$.GoError>(new Error({Code: "missing argument to repetition operator", Expr: $.sliceStringOrBytes(before, undefined, $.stringLen(before) - $.stringLen(after))}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
		}
		let sub: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = $.arrayIndex((p$ as parser).stack!, n - 1)
		if ($.pointerValue<__goscript_regexp.Regexp>(sub).Op >= 128) {
			return ["", $.interfaceValue<$.GoError>(new Error({Code: "missing argument to repetition operator", Expr: $.sliceStringOrBytes(before, undefined, $.stringLen(before) - $.stringLen(after))}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
		}

		let re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).newRegexp(op) : parser.prototype.newRegexp.call(p, op))
		let re$: __goscript_regexp.Regexp = re == null ? $.pointerTarget<__goscript_regexp.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<__goscript_regexp.Regexp>(re);
		;(re$ as __goscript_regexp.Regexp).Min = min;
		;(re$ as __goscript_regexp.Regexp).Max = max;
		;(re$ as __goscript_regexp.Regexp).Flags = flags;
		;(re$ as __goscript_regexp.Regexp).Sub = $.goSlice((re$ as __goscript_regexp.Regexp).Sub0, undefined, 1)
		$.sliceElems((re$ as __goscript_regexp.Regexp).Sub!)[$.sliceSlot((re$ as __goscript_regexp.Regexp).Sub!, 0)] = sub
		$.sliceElems((p$ as parser).stack!)[$.sliceSlot((p$ as parser).stack!, n - 1)] = re
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).checkLimits(re) : parser.prototype.checkLimits.call(p, re))

		if (((op == 17) && ((min >= 2) || (max >= 2))) && !repeatIsValid(re, 1000)) {
			return ["", $.interfaceValue<$.GoError>(new Error({Code: "invalid repeat count", Expr: $.sliceStringOrBytes(before, undefined, $.stringLen(before) - $.stringLen(after))}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
		}

		return [after, null]
	}

	public reuse(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null): void {
		let p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		if ((p$ as parser).height != null) {
			$.deleteMapEntry((p$ as parser).height, re)
		}
		$.pointerValue<__goscript_regexp.Regexp>(re).Sub0[0] = (p$ as parser).free;
		;(p$ as parser).free = re
	}

	public async swapVerticalBar(): globalThis.Promise<boolean> {
		let p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		// If above and below vertical bar are literal or char class,
		// can merge into a single char class.
		let n = $.sliceLen((p$ as parser).stack)
		if ((((n >= 3) && ($.pointerValue<__goscript_regexp.Regexp>($.arrayIndex((p$ as parser).stack!, n - 2)).Op == 129)) && isCharClass($.arrayIndex((p$ as parser).stack!, n - 1))) && isCharClass($.arrayIndex((p$ as parser).stack!, n - 3))) {
			let re1: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = $.arrayIndex((p$ as parser).stack!, n - 1)
			let re3: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = $.arrayIndex((p$ as parser).stack!, n - 3)
			// Make re3 the more complex of the two.
			if ($.pointerValue<__goscript_regexp.Regexp>(re1).Op > $.pointerValue<__goscript_regexp.Regexp>(re3).Op) {
				let __goscriptAssign5_0: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = re3
				let __goscriptAssign5_1: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = re1
				re1 = __goscriptAssign5_0
				re3 = __goscriptAssign5_1
				$.sliceElems((p$ as parser).stack!)[$.sliceSlot((p$ as parser).stack!, n - 3)] = re3
			}
			mergeCharClass(re3, re1)
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).reuse(re1) : parser.prototype.reuse.call(p, re1));
			;(p$ as parser).stack = $.goSlice((p$ as parser).stack, undefined, n - 1)
			return true
		}

		if (n >= 2) {
			let re1: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = $.arrayIndex((p$ as parser).stack!, n - 1)
			let re2: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = $.arrayIndex((p$ as parser).stack!, n - 2)
			if ($.pointerValue<__goscript_regexp.Regexp>(re2).Op == 129) {
				if (n >= 3) {
					// Now out of reach.
					// Clean opportunistically.
					await cleanAlt($.arrayIndex((p$ as parser).stack!, n - 3))
				}
				$.sliceElems((p$ as parser).stack!)[$.sliceSlot((p$ as parser).stack!, n - 2)] = re1
				$.sliceElems((p$ as parser).stack!)[$.sliceSlot((p$ as parser).stack!, n - 1)] = re2
				return true
			}
		}
		return false
	}

	static __typeInfo = $.registerStructType(
		"syntax.parser",
		() => new parser(),
		() => [$.methodSignature("alternate", [], [/* @__PURE__ */ $.pointerType("syntax.Regexp")], true), $.methodSignature("appendGroup", [["r", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))], ["g", "syntax.charGroup"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))], true), $.methodSignature("calcHeight", [["re", /* @__PURE__ */ $.pointerType("syntax.Regexp")], ["force", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("calcSize", [["re", /* @__PURE__ */ $.pointerType("syntax.Regexp")], ["force", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("checkHeight", [["re", /* @__PURE__ */ $.pointerType("syntax.Regexp")]], [], true), $.methodSignature("checkLimits", [["re", /* @__PURE__ */ $.pointerType("syntax.Regexp")]], [], true), $.methodSignature("checkSize", [["re", /* @__PURE__ */ $.pointerType("syntax.Regexp")]], [], true), $.methodSignature("collapse", [["subs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("syntax.Regexp"))], ["op", /* @__PURE__ */ $.basicType("uint8", "syntax.Op")]], [/* @__PURE__ */ $.pointerType("syntax.Regexp")], true), $.methodSignature("concat", [], [/* @__PURE__ */ $.pointerType("syntax.Regexp")], true), $.methodSignature("factor", [["sub", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("syntax.Regexp"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("syntax.Regexp"))], true), $.methodSignature("leadingRegexp", [["re", /* @__PURE__ */ $.pointerType("syntax.Regexp")]], [/* @__PURE__ */ $.pointerType("syntax.Regexp")], true), $.methodSignature("leadingString", [["re", /* @__PURE__ */ $.pointerType("syntax.Regexp")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), /* @__PURE__ */ $.basicType("uint16", "syntax.Flags")], true), $.methodSignature("literal", [["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("maybeConcat", [["r", /* @__PURE__ */ $.basicType("int32")], ["flags", /* @__PURE__ */ $.basicType("uint16", "syntax.Flags")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("newRegexp", [["op", /* @__PURE__ */ $.basicType("uint8", "syntax.Op")]], [/* @__PURE__ */ $.pointerType("syntax.Regexp")], true), $.methodSignature("op", [["op", /* @__PURE__ */ $.basicType("uint8", "syntax.Op")]], [/* @__PURE__ */ $.pointerType("syntax.Regexp")], true), $.methodSignature("parseClass", [["s", /* @__PURE__ */ $.basicType("string")]], [["rest", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("parseClassChar", [["s", /* @__PURE__ */ $.basicType("string")], ["wholeClass", /* @__PURE__ */ $.basicType("string")]], [["r", /* @__PURE__ */ $.basicType("int32")], ["rest", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("parseEscape", [["s", /* @__PURE__ */ $.basicType("string")]], [["r", /* @__PURE__ */ $.basicType("int32")], ["rest", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("parseInt", [["s", /* @__PURE__ */ $.basicType("string")]], [["n", /* @__PURE__ */ $.basicType("int")], ["rest", /* @__PURE__ */ $.basicType("string")], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("parseNamedClass", [["s", /* @__PURE__ */ $.basicType("string")], ["r", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))]], [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))], ["rest", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("parsePerlClassEscape", [["s", /* @__PURE__ */ $.basicType("string")], ["r", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))]], [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))], ["rest", /* @__PURE__ */ $.basicType("string")]], true), $.methodSignature("parsePerlFlags", [["s", /* @__PURE__ */ $.basicType("string")]], [["rest", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("parseRepeat", [["s", /* @__PURE__ */ $.basicType("string")]], [["min", /* @__PURE__ */ $.basicType("int")], ["max", /* @__PURE__ */ $.basicType("int")], ["rest", /* @__PURE__ */ $.basicType("string")], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("parseRightParen", [], ["error"], true), $.methodSignature("parseUnicodeClass", [["s", /* @__PURE__ */ $.basicType("string")], ["r", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))]], [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))], ["rest", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("parseVerticalBar", [], [], true), $.methodSignature("push", [["re", /* @__PURE__ */ $.pointerType("syntax.Regexp")]], [/* @__PURE__ */ $.pointerType("syntax.Regexp")], true), $.methodSignature("removeLeadingRegexp", [["re", /* @__PURE__ */ $.pointerType("syntax.Regexp")], ["reuse", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("syntax.Regexp")], true), $.methodSignature("removeLeadingString", [["re", /* @__PURE__ */ $.pointerType("syntax.Regexp")], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("syntax.Regexp")], true), $.methodSignature("repeat", [["op", /* @__PURE__ */ $.basicType("uint8", "syntax.Op")], ["min", /* @__PURE__ */ $.basicType("int")], ["max", /* @__PURE__ */ $.basicType("int")], ["before", /* @__PURE__ */ $.basicType("string")], ["after", /* @__PURE__ */ $.basicType("string")], ["lastRepeat", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("reuse", [["re", /* @__PURE__ */ $.pointerType("syntax.Regexp")]], [], true), $.methodSignature("swapVerticalBar", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		parser,
		() => [/* @__PURE__ */ $.structField("flags", /* @__PURE__ */ $.basicType("uint16", "syntax.Flags"), [0], 0, false, { pkgPath: "regexp/syntax" }), /* @__PURE__ */ $.structField("stack", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("syntax.Regexp")), [1], 8, false, { pkgPath: "regexp/syntax" }), /* @__PURE__ */ $.structField("free", /* @__PURE__ */ $.pointerType("syntax.Regexp"), [2], 32, false, { pkgPath: "regexp/syntax" }), /* @__PURE__ */ $.structField("numCap", /* @__PURE__ */ $.basicType("int"), [3], 40, false, { pkgPath: "regexp/syntax" }), /* @__PURE__ */ $.structField("wholeRegexp", /* @__PURE__ */ $.basicType("string"), [4], 48, false, { pkgPath: "regexp/syntax" }), /* @__PURE__ */ $.structField("tmpClass", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), [5], 64, false, { pkgPath: "regexp/syntax" }), /* @__PURE__ */ $.structField("numRegexp", /* @__PURE__ */ $.basicType("int"), [6], 88, false, { pkgPath: "regexp/syntax" }), /* @__PURE__ */ $.structField("numRunes", /* @__PURE__ */ $.basicType("int"), [7], 96, false, { pkgPath: "regexp/syntax" }), /* @__PURE__ */ $.structField("repeats", /* @__PURE__ */ $.basicType("int64"), [8], 104, false, { pkgPath: "regexp/syntax" }), /* @__PURE__ */ $.structField("height", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("syntax.Regexp"), /* @__PURE__ */ $.basicType("int")), [9], 112, false, { pkgPath: "regexp/syntax" }), /* @__PURE__ */ $.structField("size", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("syntax.Regexp"), /* @__PURE__ */ $.basicType("int64")), [10], 120, false, { pkgPath: "regexp/syntax" })]
	)
}

export class charGroup {
	public get sign(): number {
		return this._fields.sign
	}

	public set sign(value: number) {
		this._fields.sign = value
	}

	public get _class(): $.Slice<number> {
		return this._fields._class
	}

	public set _class(value: $.Slice<number>) {
		this._fields._class = value
	}

	public _fields: {
		sign: number
		_class: $.Slice<number>
	}

	constructor(init?: Partial<{sign?: number, _class?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			sign: init?.sign ?? (0 as number),
			_class: init?._class ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): charGroup {
		return new charGroup(this, true)
	}

	public __goscriptAssign(source: charGroup): void {
		const target = this._fields
		const values = source._fields
		target.sign = values.sign
		target._class = values._class
	}

	static __typeInfo = $.registerStructType(
		"syntax.charGroup",
		() => new charGroup(),
		() => [],
		charGroup,
		() => [/* @__PURE__ */ $.structField("sign", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "regexp/syntax" }), /* @__PURE__ */ $.structField("class", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), [1], 8, false, { key: "_class", pkgPath: "regexp/syntax" })]
	)
}

export class ranges {
	public get p(): $.VarRef<$.Slice<number>> | null {
		return this._fields.p
	}

	public set p(value: $.VarRef<$.Slice<number>> | null) {
		this._fields.p = value
	}

	public _fields: {
		p: $.VarRef<$.Slice<number>> | null
	}

	constructor(init?: Partial<{p?: $.VarRef<$.Slice<number>> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			p: init?.p ?? (null! as $.VarRef<$.Slice<number>> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ranges {
		return new ranges(this, true)
	}

	public __goscriptAssign(source: ranges): void {
		const target = this._fields
		const values = source._fields
		target.p = values.p
	}

	public Len(): number {
		const ra = this;
		return globalThis.Math.trunc($.sliceLen($.pointerValue<$.Slice<number>>(ra.p)) / 2)
	}

	public Less(i: number, j: number): boolean {
		const ra = this;
		let p: $.Slice<number> = $.pointerValue<$.Slice<number>>(ra.p)
		i = i * (2)
		j = j * (2)
		return ($.arrayIndex(p!, i) < $.arrayIndex(p!, j)) || (($.arrayIndex(p!, i) == $.arrayIndex(p!, j)) && ($.arrayIndex(p!, i + 1) > $.arrayIndex(p!, j + 1)))
	}

	public Swap(i: number, j: number): void {
		const ra = this;
		let p: $.Slice<number> = $.pointerValue<$.Slice<number>>(ra.p)
		i = i * (2)
		j = j * (2)
		let __goscriptAssign6_0: number = $.arrayIndex(p!, j)
		let __goscriptAssign6_1: number = $.arrayIndex(p!, j + 1)
		let __goscriptAssign6_2: number = $.arrayIndex(p!, i)
		let __goscriptAssign6_3: number = $.arrayIndex(p!, i + 1)
		$.sliceElems(p!)[$.sliceSlot(p!, i)] = __goscriptAssign6_0
		$.sliceElems(p!)[$.sliceSlot(p!, i + 1)] = __goscriptAssign6_1
		$.sliceElems(p!)[$.sliceSlot(p!, j)] = __goscriptAssign6_2
		$.sliceElems(p!)[$.sliceSlot(p!, j + 1)] = __goscriptAssign6_3
	}

	static __typeInfo = $.registerStructType(
		"syntax.ranges",
		() => new ranges(),
		() => [$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])],
		ranges,
		() => [/* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))), [0], 0, false, { pkgPath: "regexp/syntax" })]
	)
}

export const ErrInternalError: ErrorCode = "regexp/syntax: internal error"

export const ErrInvalidCharClass: ErrorCode = "invalid character class"

export const ErrInvalidCharRange: ErrorCode = "invalid character class range"

export const ErrInvalidEscape: ErrorCode = "invalid escape sequence"

export const ErrInvalidNamedCapture: ErrorCode = "invalid named capture"

export const ErrInvalidPerlOp: ErrorCode = "invalid or unsupported Perl syntax"

export const ErrInvalidRepeatOp: ErrorCode = "invalid nested repetition operator"

export const ErrInvalidRepeatSize: ErrorCode = "invalid repeat count"

export const ErrInvalidUTF8: ErrorCode = "invalid UTF-8"

export const ErrMissingBracket: ErrorCode = "missing closing ]"

export const ErrMissingParen: ErrorCode = "missing closing )"

export const ErrMissingRepeatArgument: ErrorCode = "missing argument to repetition operator"

export const ErrTrailingBackslash: ErrorCode = "trailing backslash at end of expression"

export const ErrUnexpectedParen: ErrorCode = "unexpected )"

export const ErrNestingDepth: ErrorCode = "expression nests too deeply"

export const ErrLarge: ErrorCode = "expression too large"

export const FoldCase: Flags = 1

export const Literal: Flags = 2

export const ClassNL: Flags = 4

export const DotNL: Flags = 8

export const OneLine: Flags = 16

export const NonGreedy: Flags = 32

export const PerlX: Flags = 64

export const UnicodeGroups: Flags = 128

export const WasDollar: Flags = 256

export const Simple: Flags = 512

export const MatchNL: Flags = 12

export const Perl: Flags = 212

export const POSIX: Flags = 0

export const opLeftParen: __goscript_regexp.Op = 128

export const opVerticalBar: __goscript_regexp.Op = 129

export const maxHeight: number = 1000

export const maxSize: number = 3355443

export const instSize: number = 40

export const maxRunes: number = 33554432

export const runeSize: number = 4

export const minFold: number = 65

export const maxFold: number = 125251

export function ErrorCode_String(e: ErrorCode): string {
	return e
}

export function minFoldRune(r: number): number {
	if ((r < 65) || (r > 125251)) {
		return r
	}
	let m = r
	let r0 = r
	for (r = unicode.SimpleFold(r); r != r0; r = unicode.SimpleFold(r)) {
		m = $.min(m, r)
	}
	return m
}

export function repeatIsValid(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, n: number): boolean {
	const re$: __goscript_regexp.Regexp = re == null ? $.pointerTarget<__goscript_regexp.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<__goscript_regexp.Regexp>(re)
	if ((re$ as __goscript_regexp.Regexp).Op == 17) {
		let m = (re$ as __goscript_regexp.Regexp).Max
		if (m == 0) {
			return true
		}
		if (m < 0) {
			m = (re$ as __goscript_regexp.Regexp).Min
		}
		if (m > n) {
			return false
		}
		if (m > 0) {
			n = globalThis.Math.trunc(n / m)
		}
	}
	for (let __goscriptRangeTarget7 = (re$ as __goscript_regexp.Regexp).Sub, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
		let sub = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)
		if (!repeatIsValid(sub, n)) {
			return false
		}
	}
	return true
}

export async function cleanAlt(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null): globalThis.Promise<void> {
	const re$: __goscript_regexp.Regexp = re == null ? $.pointerTarget<__goscript_regexp.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<__goscript_regexp.Regexp>(re)
	switch ((re$ as __goscript_regexp.Regexp).Op) {
		case 4:
		{
			;(re$ as __goscript_regexp.Regexp).Rune = await cleanClass($.fieldRef((re$ as __goscript_regexp.Regexp)._fields, "Rune"))
			if ((($.sliceLen((re$ as __goscript_regexp.Regexp).Rune) == 2) && ($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 0) == 0)) && ($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 1) == 1114111)) {
				;(re$ as __goscript_regexp.Regexp).Rune = null;
				;(re$ as __goscript_regexp.Regexp).Op = 6
				return
			}
			if ((((($.sliceLen((re$ as __goscript_regexp.Regexp).Rune) == 4) && ($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 0) == 0)) && ($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 1) == 9)) && ($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 2) == 11)) && ($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 3) == 1114111)) {
				;(re$ as __goscript_regexp.Regexp).Rune = null;
				;(re$ as __goscript_regexp.Regexp).Op = 5
				return
			}
			if (($.cap((re$ as __goscript_regexp.Regexp).Rune) - $.sliceLen((re$ as __goscript_regexp.Regexp).Rune)) > 100) {
				// re.Rune will not grow any more.
				// Make a copy or inline to reclaim storage.
				;(re$ as __goscript_regexp.Regexp).Rune = $.appendSlice($.goSlice((re$ as __goscript_regexp.Regexp).Rune0, undefined, 0), (re$ as __goscript_regexp.Regexp).Rune)
			}
			break
		}
	}
}

export function literalRegexp(s: string, flags: Flags): __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null {
	let re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = new __goscript_regexp.Regexp({Op: 3})
	let re$: __goscript_regexp.Regexp = re == null ? $.pointerTarget<__goscript_regexp.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<__goscript_regexp.Regexp>(re);
	;(re$ as __goscript_regexp.Regexp).Flags = flags;
	;(re$ as __goscript_regexp.Regexp).Rune = $.goSlice((re$ as __goscript_regexp.Regexp).Rune0, undefined, 0)
	for (let __goscriptRunes0 = $.stringRunes(s); __goscriptRunes0.next(); ) {
		const c = __goscriptRunes0.rune
		if ($.sliceLen((re$ as __goscript_regexp.Regexp).Rune) >= $.cap((re$ as __goscript_regexp.Regexp).Rune)) {
			// string is too long to fit in Rune0.  let Go handle it
			;(re$ as __goscript_regexp.Regexp).Rune = $.stringToRunes(s)
			break
		}
		;(re$ as __goscript_regexp.Regexp).Rune = $.appendOne((re$ as __goscript_regexp.Regexp).Rune, $.int(c, 32))
	}
	return re
}

export async function Parse(s: string, flags: Flags): globalThis.Promise<[__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, $.GoError]> {
	return parse(s, flags)
}

export async function parse(s: string, flags: Flags): globalThis.Promise<[__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, $.GoError]> {
	let err: $.GoError = null! as $.GoError
	const __defer = new $.DisposableStack()
	try {
		__defer.defer(() => { ((): void => {
			{
				let r = $.recover()
				let __goscriptSwitch0 = r
				switch ((true as boolean)) {
					default:
					{
						$.panic(r)
						break
					}
					case $.comparableEqual(__goscriptSwitch0, null):
					{
						break
					}
					case $.comparableEqual(__goscriptSwitch0, $.namedValueInterfaceValue<any>("expression too large", "syntax.ErrorCode", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())):
					{
						err = $.interfaceValue<$.GoError>(new Error({Code: "expression too large", Expr: s}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))
						break
					}
					case $.comparableEqual(__goscriptSwitch0, $.namedValueInterfaceValue<any>("expression nests too deeply", "syntax.ErrorCode", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())):
					{
						err = $.interfaceValue<$.GoError>(new Error({Code: "expression nests too deeply", Expr: s}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))
						break
					}
				}
			}
		})() })

		if ($.uint((flags & 2), 16) != 0) {
			// Trivial parser for literal string.
			{
				let __goscriptShadow4 = checkUTF8(s)
				if (__goscriptShadow4 != null) {
					const __goscriptReturn3: [__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, $.GoError] = [null, __goscriptShadow4]
					err = __goscriptReturn3[1]
					__defer.dispose()
					return [__goscriptReturn3[0], err]
				}
			}
			const __goscriptReturn4: [__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, $.GoError] = [literalRegexp(s, flags), null]
			err = __goscriptReturn4[1]
			__defer.dispose()
			return [__goscriptReturn4[0], err]
		}

		// Otherwise, must do real work.
		let p: $.VarRef<parser> = $.varRef(new parser(undefined, true))
		let c: number = 0
		let op: __goscript_regexp.Op = 0
		let lastRepeat: string = ""
		p.value.flags = flags
		p.value.wholeRegexp = s
		let t = s
		while (!$.stringEqual(t, "")) {
			let repeat = ""
			BigSwitch: {
				switch ($.indexString(t, 0)) {
					default:
					{
						{
							let __goscriptTuple16: any = nextRune(t)
							c = __goscriptTuple16[0]
							t = __goscriptTuple16[1]
							err = __goscriptTuple16[2]
							if (err != null) {
								const __goscriptReturn5: [__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, $.GoError] = [null, err]
								err = __goscriptReturn5[1]
								__defer.dispose()
								return [__goscriptReturn5[0], err]
							}
						}
						p.value.literal(c)
						break
					}
					case 40:
					{
						if ((($.uint((p.value.flags & 64), 16) != 0) && ($.stringLen(t) >= 2)) && ($.indexString(t, 1) == 63)) {
							// Flag changes and non-capturing groups.
							{
								let __goscriptTuple17: any = p.value.parsePerlFlags(t)
								t = __goscriptTuple17[0]
								err = __goscriptTuple17[1]
								if (err != null) {
									const __goscriptReturn6: [__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, $.GoError] = [null, err]
									err = __goscriptReturn6[1]
									__defer.dispose()
									return [__goscriptReturn6[0], err]
								}
							}
							break
						}
						p.value.numCap++
						$.pointerValue<__goscript_regexp.Regexp>(p.value.op(128)).Cap = p.value.numCap
						t = $.sliceStringOrBytes(t, 1, undefined)
						break
					}
					case 124:
					{
						await p.value.parseVerticalBar()
						t = $.sliceStringOrBytes(t, 1, undefined)
						break
					}
					case 41:
					{
						{
							err = await p.value.parseRightParen()
							if (err != null) {
								const __goscriptReturn7: [__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, $.GoError] = [null, err]
								err = __goscriptReturn7[1]
								__defer.dispose()
								return [__goscriptReturn7[0], err]
							}
						}
						t = $.sliceStringOrBytes(t, 1, undefined)
						break
					}
					case 94:
					{
						if ($.uint((p.value.flags & 16), 16) != 0) {
							p.value.op(9)
						} else {
							p.value.op(7)
						}
						t = $.sliceStringOrBytes(t, 1, undefined)
						break
					}
					case 36:
					{
						if ($.uint((p.value.flags & 16), 16) != 0) {
							const __goscriptOperand0 = p.value.op(10)
							$.pointerValue<__goscript_regexp.Regexp>(__goscriptOperand0).Flags = $.pointerValue<__goscript_regexp.Regexp>(__goscriptOperand0).Flags | (256)
						} else {
							p.value.op(8)
						}
						t = $.sliceStringOrBytes(t, 1, undefined)
						break
					}
					case 46:
					{
						if ($.uint((p.value.flags & 8), 16) != 0) {
							p.value.op(6)
						} else {
							p.value.op(5)
						}
						t = $.sliceStringOrBytes(t, 1, undefined)
						break
					}
					case 91:
					{
						{
							let __goscriptTuple18: any = await p.value.parseClass(t)
							t = __goscriptTuple18[0]
							err = __goscriptTuple18[1]
							if (err != null) {
								const __goscriptReturn8: [__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, $.GoError] = [null, err]
								err = __goscriptReturn8[1]
								__defer.dispose()
								return [__goscriptReturn8[0], err]
							}
						}
						break
					}
					case 42:
					case 43:
					case 63:
					{
						let before = t
						switch ($.indexString(t, 0)) {
							case 42:
							{
								op = 14
								break
							}
							case 43:
							{
								op = 15
								break
							}
							case 63:
							{
								op = 16
								break
							}
						}
						let after: string = $.sliceStringOrBytes(t, 1, undefined)
						{
							let __goscriptTuple19: any = p.value.repeat(op, 0, 0, before, after, lastRepeat)
							after = __goscriptTuple19[0]
							err = __goscriptTuple19[1]
							if (err != null) {
								const __goscriptReturn9: [__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, $.GoError] = [null, err]
								err = __goscriptReturn9[1]
								__defer.dispose()
								return [__goscriptReturn9[0], err]
							}
						}
						repeat = before
						t = after
						break
					}
					case 123:
					{
						op = 17
						let before = t
						let [min, max, after, ok] = p.value.parseRepeat(t)
						if (!ok) {
							// If the repeat cannot be parsed, { is a literal.
							p.value.literal(123)
							t = $.sliceStringOrBytes(t, 1, undefined)
							break
						}
						if ((((min < 0) || (min > 1000)) || (max > 1000)) || ((max >= 0) && (min > max))) {
							// Numbers were too big, or max is present and min > max.
							const __goscriptReturn10: [__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, $.GoError] = [null, $.interfaceValue<$.GoError>(new Error({Code: "invalid repeat count", Expr: $.sliceStringOrBytes(before, undefined, $.stringLen(before) - $.stringLen(after))}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
							err = __goscriptReturn10[1]
							__defer.dispose()
							return [__goscriptReturn10[0], err]
						}
						{
							let __goscriptTuple20: any = p.value.repeat(op, min, max, before, after, lastRepeat)
							after = __goscriptTuple20[0]
							err = __goscriptTuple20[1]
							if (err != null) {
								const __goscriptReturn11: [__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, $.GoError] = [null, err]
								err = __goscriptReturn11[1]
								__defer.dispose()
								return [__goscriptReturn11[0], err]
							}
						}
						repeat = before
						t = after
						break
					}
					case 92:
					{
						if (($.uint((p.value.flags & 64), 16) != 0) && ($.stringLen(t) >= 2)) {
							switch ($.indexString(t, 1)) {
								case 65:
								{
									p.value.op(9)
									t = $.sliceStringOrBytes(t, 2, undefined)
									break BigSwitch
									break
								}
								case 98:
								{
									p.value.op(11)
									t = $.sliceStringOrBytes(t, 2, undefined)
									break BigSwitch
									break
								}
								case 66:
								{
									p.value.op(12)
									t = $.sliceStringOrBytes(t, 2, undefined)
									break BigSwitch
									break
								}
								case 67:
								{
									const __goscriptReturn12: [__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, $.GoError] = [null, $.interfaceValue<$.GoError>(new Error({Code: "invalid escape sequence", Expr: $.sliceStringOrBytes(t, undefined, 2)}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
									err = __goscriptReturn12[1]
									__defer.dispose()
									return [__goscriptReturn12[0], err]
									break
								}
								case 81:
								{
									let lit: string = ""
									let __goscriptTuple21: any = strings.Cut($.sliceStringOrBytes(t, 2, undefined), "\\E")
									lit = __goscriptTuple21[0]
									t = __goscriptTuple21[1]
									while (!$.stringEqual(lit, "")) {
										let [__goscriptShadow5, rest, __goscriptShadow6] = nextRune(lit)
										if (__goscriptShadow6 != null) {
											const __goscriptReturn13: [__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, $.GoError] = [null, __goscriptShadow6]
											err = __goscriptReturn13[1]
											__defer.dispose()
											return [__goscriptReturn13[0], err]
										}
										p.value.literal(__goscriptShadow5)
										lit = rest
									}
									break BigSwitch
									break
								}
								case 122:
								{
									p.value.op(10)
									t = $.sliceStringOrBytes(t, 2, undefined)
									break BigSwitch
									break
								}
							}
						}

						let re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null = p.value.newRegexp(4)
						let re$: __goscript_regexp.Regexp = re == null ? $.pointerTarget<__goscript_regexp.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<__goscript_regexp.Regexp>(re);
						;(re$ as __goscript_regexp.Regexp).Flags = p.value.flags

						// Look for Unicode character group like \p{Han}
						if (($.stringLen(t) >= 2) && (($.indexString(t, 1) == 112) || ($.indexString(t, 1) == 80))) {
							let __goscriptTuple22: any = await p.value.parseUnicodeClass(t, $.goSlice((re$ as __goscript_regexp.Regexp).Rune0, undefined, 0))
							let r: $.Slice<number> = __goscriptTuple22[0]
							let rest = __goscriptTuple22[1]
							let __goscriptShadow7 = __goscriptTuple22[2]
							if (__goscriptShadow7 != null) {
								const __goscriptReturn14: [__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, $.GoError] = [null, __goscriptShadow7]
								err = __goscriptReturn14[1]
								__defer.dispose()
								return [__goscriptReturn14[0], err]
							}
							if (r != null) {
								;(re$ as __goscript_regexp.Regexp).Rune = r
								t = rest
								p.value.push(re)
								break BigSwitch
							}
						}

						// Perl character class escape.
						{
							let __goscriptTuple23: any = await p.value.parsePerlClassEscape(t, $.goSlice((re$ as __goscript_regexp.Regexp).Rune0, undefined, 0))
							let r: $.Slice<number> = __goscriptTuple23[0]
							let rest = __goscriptTuple23[1]
							if (r != null) {
								;(re$ as __goscript_regexp.Regexp).Rune = r
								t = rest
								p.value.push(re)
								break BigSwitch
							}
						}
						p.value.reuse(re)

						// Ordinary single-character escape.
						{
							let __goscriptTuple24: any = p.value.parseEscape(t)
							c = __goscriptTuple24[0]
							t = __goscriptTuple24[1]
							err = __goscriptTuple24[2]
							if (err != null) {
								const __goscriptReturn15: [__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, $.GoError] = [null, err]
								err = __goscriptReturn15[1]
								__defer.dispose()
								return [__goscriptReturn15[0], err]
							}
						}
						p.value.literal(c)
						break
					}
				}
			}
			lastRepeat = repeat
		}

		await p.value.concat()
		if (await p.value.swapVerticalBar()) {
			// pop vertical bar
			p.value.stack = $.goSlice(p.value.stack, undefined, $.sliceLen(p.value.stack) - 1)
		}
		await p.value.alternate()

		let n = $.sliceLen(p.value.stack)
		if (n != 1) {
			const __goscriptReturn16: [__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, $.GoError] = [null, $.interfaceValue<$.GoError>(new Error({Code: "missing closing )", Expr: s}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
			err = __goscriptReturn16[1]
			__defer.dispose()
			return [__goscriptReturn16[0], err]
		}
		const __goscriptReturn17: [__goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, $.GoError] = [$.arrayIndex(p.value.stack!, 0), null]
		err = __goscriptReturn17[1]
		__defer.dispose()
		return [__goscriptReturn17[0], err]
		__defer.dispose()
	} catch (e) {
		__defer.disposePanic(e)
		if (!$.recovered(e)) {
			throw e
		}
	}
	return [null! as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, err]
}

export function isValidCaptureName(name: string): boolean {
	if ($.stringEqual(name, "")) {
		return false
	}
	for (let __goscriptRunes1 = $.stringRunes(name); __goscriptRunes1.next(); ) {
		const c = __goscriptRunes1.rune
		if ((c != 95) && !isalnum(c)) {
			return false
		}
	}
	return true
}

export function isCharClass(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null): boolean {
	const re$: __goscript_regexp.Regexp = re == null ? $.pointerTarget<__goscript_regexp.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<__goscript_regexp.Regexp>(re)
	return (((((re$ as __goscript_regexp.Regexp).Op == 3) && ($.sliceLen((re$ as __goscript_regexp.Regexp).Rune) == 1)) || ((re$ as __goscript_regexp.Regexp).Op == 4)) || ((re$ as __goscript_regexp.Regexp).Op == 5)) || ((re$ as __goscript_regexp.Regexp).Op == 6)
}

export function matchRune(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, r: number): boolean {
	const re$: __goscript_regexp.Regexp = re == null ? $.pointerTarget<__goscript_regexp.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<__goscript_regexp.Regexp>(re)
	switch ((re$ as __goscript_regexp.Regexp).Op) {
		case 3:
		{
			return ($.sliceLen((re$ as __goscript_regexp.Regexp).Rune) == 1) && ($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, 0) == r)
			break
		}
		case 4:
		{
			for (let i = 0; i < $.sliceLen((re$ as __goscript_regexp.Regexp).Rune); i = i + (2)) {
				if (($.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, i) <= r) && (r <= $.arrayIndex((re$ as __goscript_regexp.Regexp).Rune!, i + 1))) {
					return true
				}
			}
			return false
			break
		}
		case 5:
		{
			return r != 10
			break
		}
		case 6:
		{
			return true
			break
		}
	}
	return false
}

export function mergeCharClass(dst: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, src: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null): void {
	switch ($.pointerValue<__goscript_regexp.Regexp>(dst).Op) {
		case 6:
		{
			break
		}
		case 5:
		{
			if (matchRune(src, 10)) {
				$.pointerValue<__goscript_regexp.Regexp>(dst).Op = 6
			}
			break
		}
		case 4:
		{
			if ($.pointerValue<__goscript_regexp.Regexp>(src).Op == 3) {
				$.pointerValue<__goscript_regexp.Regexp>(dst).Rune = appendLiteral($.pointerValue<__goscript_regexp.Regexp>(dst).Rune, $.arrayIndex($.pointerValue<__goscript_regexp.Regexp>(src).Rune!, 0), $.pointerValue<__goscript_regexp.Regexp>(src).Flags)
			} else {
				$.pointerValue<__goscript_regexp.Regexp>(dst).Rune = appendClass($.pointerValue<__goscript_regexp.Regexp>(dst).Rune, $.pointerValue<__goscript_regexp.Regexp>(src).Rune)
			}
			break
		}
		case 3:
		{
			if (($.arrayIndex($.pointerValue<__goscript_regexp.Regexp>(src).Rune!, 0) == $.arrayIndex($.pointerValue<__goscript_regexp.Regexp>(dst).Rune!, 0)) && ($.pointerValue<__goscript_regexp.Regexp>(src).Flags == $.pointerValue<__goscript_regexp.Regexp>(dst).Flags)) {
				break
			}
			$.pointerValue<__goscript_regexp.Regexp>(dst).Op = 4
			$.pointerValue<__goscript_regexp.Regexp>(dst).Rune = appendLiteral($.goSlice($.pointerValue<__goscript_regexp.Regexp>(dst).Rune, undefined, 0), $.arrayIndex($.pointerValue<__goscript_regexp.Regexp>(dst).Rune!, 0), $.pointerValue<__goscript_regexp.Regexp>(dst).Flags)
			$.pointerValue<__goscript_regexp.Regexp>(dst).Rune = appendLiteral($.pointerValue<__goscript_regexp.Regexp>(dst).Rune, $.arrayIndex($.pointerValue<__goscript_regexp.Regexp>(src).Rune!, 0), $.pointerValue<__goscript_regexp.Regexp>(src).Flags)
			break
		}
	}
}

export let anyTable: unicode.RangeTable | $.VarRef<unicode.RangeTable> | null = new unicode.RangeTable({R16: $.arrayToSlice<unicode.Range16>([$.markAsStructValue(new unicode.Range16({Lo: 0, Hi: 65535, Stride: 1}))]), R32: $.arrayToSlice<unicode.Range32>([$.markAsStructValue(new unicode.Range32({Lo: 65536, Hi: 1114111, Stride: 1}))])})

export function __goscript_set_anyTable(__goscriptValue: unicode.RangeTable | $.VarRef<unicode.RangeTable> | null): void {
	anyTable = __goscriptValue
}

export let asciiTable: unicode.RangeTable | $.VarRef<unicode.RangeTable> | null = new unicode.RangeTable({R16: $.arrayToSlice<unicode.Range16>([$.markAsStructValue(new unicode.Range16({Lo: 0, Hi: 0x7F, Stride: 1}))])})

export function __goscript_set_asciiTable(__goscriptValue: unicode.RangeTable | $.VarRef<unicode.RangeTable> | null): void {
	asciiTable = __goscriptValue
}

export let asciiFoldTable: unicode.RangeTable | $.VarRef<unicode.RangeTable> | null = new unicode.RangeTable({R16: $.arrayToSlice<unicode.Range16>([$.markAsStructValue(new unicode.Range16({Lo: 0, Hi: 0x7F, Stride: 1})), $.markAsStructValue(new unicode.Range16({Lo: 0x017F, Hi: 0x017F, Stride: 1})), $.markAsStructValue(new unicode.Range16({Lo: 0x212A, Hi: 0x212A, Stride: 1}))])})

export function __goscript_set_asciiFoldTable(__goscriptValue: unicode.RangeTable | $.VarRef<unicode.RangeTable> | null): void {
	asciiFoldTable = __goscriptValue
}

export let aliases: {"once": sync.Once, "categories": globalThis.Map<string, string> | null, "scripts": globalThis.Map<string, string> | null} = $.anonymousStructValue({"once": $.markAsStructValue(new sync.Once()), "categories": null, "scripts": null}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("once", "sync.Once", [0], 0, false, { pkgPath: "regexp/syntax" }), /* @__PURE__ */ $.structField("categories", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [1], 16, false, { pkgPath: "regexp/syntax" }), /* @__PURE__ */ $.structField("scripts", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [2], 24, false, { pkgPath: "regexp/syntax" })] })

export function __goscript_set_aliases(__goscriptValue: {"once": sync.Once, "categories": globalThis.Map<string, string> | null, "scripts": globalThis.Map<string, string> | null}): void {
	$.assignStruct(aliases, __goscriptValue)
}

export function initAliases(): void {
	aliases.categories = $.makeMap<string, string>()
	aliases.scripts = $.makeMap<string, string>()
	for (let [name, actual] of unicode.CategoryAliases?.entries() ?? []) {
		$.mapSet(aliases.categories, canonicalName(name), actual)
	}
	for (let [name, __rangeValue] of unicode.Scripts?.entries() ?? []) {
		$.mapSet(aliases.scripts, canonicalName(name), name)
	}
}

export function canonicalName(name: string): string {
	let b: $.Slice<number> = null! as $.Slice<number>
	let first = true
	for (let __goscriptRangeCount0 = $.stringLen(name), i = 0; i < __goscriptRangeCount0; i++) {
		let c = $.indexString(name, i)
		switch ((true as boolean)) {
			case ((c == 95) || (c == 45)) || (c == 32):
			{
				c = 32
				break
			}
			case first:
			{
				if ((97 <= c) && (c <= 122)) {
					c = $.uint(c - (32), 8)
				}
				first = false
				break
			}
			default:
			{
				if ((65 <= c) && (c <= 90)) {
					c = $.uint(c + (32), 8)
				}
				break
			}
		}
		if (b == null) {
			if ((c == $.indexString(name, i)) && (c != 32)) {
				// No changes so far, avoid allocating b.
				continue
			}
			b = $.makeSlice<number>(i, $.stringLen(name), "byte")
			$.copy(b, $.sliceStringOrBytes(name, undefined, i))
		}
		if (c == 32) {
			continue
		}
		b = $.append(b, $.uint(c, 8), $.byteSliceHint)
	}
	if (b == null) {
		return name
	}
	return $.bytesToString(b)
}

export async function unicodeTable(name: string): globalThis.Promise<[unicode.RangeTable | $.VarRef<unicode.RangeTable> | null, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null, number]> {
	let tab: unicode.RangeTable | $.VarRef<unicode.RangeTable> | null = null! as unicode.RangeTable | $.VarRef<unicode.RangeTable> | null
	let fold: unicode.RangeTable | $.VarRef<unicode.RangeTable> | null = null! as unicode.RangeTable | $.VarRef<unicode.RangeTable> | null
	let sign: number = 0
	name = canonicalName(name)

	// Special cases: Any, Assigned, and ASCII.
	// Also LC is the only non-canonical Categories key, so handle it here.
	switch (name) {
		case "Any":
		{
			return [anyTable, anyTable, 1]
			break
		}
		case "Assigned":
		{
			return [unicode.Cn, unicode.Cn, -1]
			break
		}
		case "Ascii":
		{
			return [asciiTable, asciiFoldTable, 1]
			break
		}
		case "Lc":
		{
			return [$.mapGet<string, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null>(unicode.Categories, "LC", null)[0], $.mapGet<string, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null>(unicode.FoldCategory, "LC", null)[0], 1]
			break
		}
	}
	{
		let t: unicode.RangeTable | $.VarRef<unicode.RangeTable> | null = $.mapGet<string, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null>(unicode.Categories, name, null)[0]
		if (t != null) {
			return [t, $.mapGet<string, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null>(unicode.FoldCategory, name, null)[0], 1]
		}
	}
	{
		let t: unicode.RangeTable | $.VarRef<unicode.RangeTable> | null = $.mapGet<string, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null>(unicode.Scripts, name, null)[0]
		if (t != null) {
			return [t, $.mapGet<string, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null>(unicode.FoldScript, name, null)[0], 1]
		}
	}

	// unicode.CategoryAliases makes liberal use of underscores in its names
	// (they are defined that way by Unicode), but we want to match ignoring
	// the underscores, so make our own map with canonical names.
	await aliases.once.Do(initAliases)
	{
		let actual = $.mapGet<string, string, string>(aliases.categories, name, "")[0]
		if (!$.stringEqual(actual, "")) {
			let t: unicode.RangeTable | $.VarRef<unicode.RangeTable> | null = $.mapGet<string, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null>(unicode.Categories, actual, null)[0]
			return [t, $.mapGet<string, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null>(unicode.FoldCategory, actual, null)[0], 1]
		}
	}
	{
		let actual = $.mapGet<string, string, string>(aliases.scripts, name, "")[0]
		if (!$.stringEqual(actual, "")) {
			let t: unicode.RangeTable | $.VarRef<unicode.RangeTable> | null = $.mapGet<string, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null>(unicode.Scripts, actual, null)[0]
			return [t, $.mapGet<string, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null, unicode.RangeTable | $.VarRef<unicode.RangeTable> | null>(unicode.FoldScript, actual, null)[0], 1]
		}
	}
	return [null, null, 0]
}

export async function cleanClass(rp: $.VarRef<$.Slice<number>> | null): globalThis.Promise<$.Slice<number>> {

	// Sort by lo increasing, hi decreasing to break ties.
	await sort.Sort($.interfaceValue<sort.Interface | null>(new ranges({p: rp}, true), "syntax.ranges", "syntax.ranges")!)

	let r: $.Slice<number> = $.pointerValue<$.Slice<number>>(rp)
	if ($.sliceLen(r) < 2) {
		return r
	}

	// Merge abutting, overlapping.
	let w = 2
	for (let __goscriptSliceWindow5 = $.sliceRange(r), i = 2; i < __goscriptSliceWindow5.length; i = i + (2)) {
		let lo = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] as number)
		let hi = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i + 1)] as number)
		if (lo <= $.int((((((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, w - 1)] as number) + 1) | 0)), 32)) {
			// merge with previous range
			if (hi > ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, w - 1)] as number)) {
				;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, w - 1)] = hi
			}
			continue
		}
		// new disjoint range
		;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, w)] = lo;
		;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, w + 1)] = hi
		w = w + (2)
	}

	return $.goSlice(r, undefined, w)
}

export function inCharClass(r: number, _class: $.Slice<number>): boolean {
	let [, ok] = sort.Find(globalThis.Math.trunc($.sliceLen(_class) / 2), $.functionValue((i: number): number => {
		let lo = $.arrayIndex(_class!, 2 * i)
		let hi = $.arrayIndex(_class!, (2 * i) + 1)
		if (r > hi) {
			return 1
		}
		if (r < lo) {
			return -1
		}
		return 0
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)))
	return ok
}

export function appendLiteral(r: $.Slice<number>, x: number, flags: Flags): $.Slice<number> {
	if ($.uint((flags & 1), 16) != 0) {
		return appendFoldedRange(r, x, x)
	}
	return appendRange(r, x, x)
}

export function appendRange(r: $.Slice<number>, lo: number, hi: number): $.Slice<number> {
	// Expand last range or next to last range if it overlaps or abuts.
	// Checking two ranges helps when appending case-folded
	// alphabets, so that one range can be expanding A-Z and the
	// other expanding a-z.
	let n = $.sliceLen(r)
	for (let __goscriptSliceWindow6 = $.sliceRange(r), i = 2; i <= 4; i = i + (2)) {
		if (n >= i) {
			let rlo = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, n - i)] as number)
			let rhi = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, (n - i) + 1)] as number)
			if ((lo <= $.int((((rhi + 1) | 0)), 32)) && (rlo <= $.int((((hi + 1) | 0)), 32))) {
				if (lo < rlo) {
					;(__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, n - i)] = lo
				}
				if (hi > rhi) {
					;(__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, (n - i) + 1)] = hi
				}
				return r
			}
		}
	}

	return $.append(r, $.int(lo, 32), $.int(hi, 32))
}

export function appendFoldedRange(r: $.Slice<number>, lo: number, hi: number): $.Slice<number> {
	// Optimizations.
	if ((lo <= 65) && (hi >= 125251)) {
		// Range is full: folding can't add more.
		return appendRange(r, lo, hi)
	}
	if ((hi < 65) || (lo > 125251)) {
		// Range is outside folding possibilities.
		return appendRange(r, lo, hi)
	}
	if (lo < 65) {
		// [lo, minFold-1] needs no folding.
		r = appendRange(r, lo, 64)
		lo = 65
	}
	if (hi > 125251) {
		// [maxFold+1, hi] needs no folding.
		r = appendRange(r, 125252, hi)
		hi = 125251
	}

	// Brute force. Depend on appendRange to coalesce ranges on the fly.
	for (let c = lo; c <= hi; c = ((c + 1) | 0)) {
		r = appendRange(r, c, c)
		let f = unicode.SimpleFold(c)
		while (f != c) {
			r = appendRange(r, f, f)
			f = unicode.SimpleFold(f)
		}
	}
	return r
}

export function appendClass(r: $.Slice<number>, x: $.Slice<number>): $.Slice<number> {
	for (let __goscriptSliceWindow7 = $.sliceRange(x), i = 0; i < __goscriptSliceWindow7.length; i = i + (2)) {
		r = appendRange(r, ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] as number), ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i + 1)] as number))
	}
	return r
}

export function appendFoldedClass(r: $.Slice<number>, x: $.Slice<number>): $.Slice<number> {
	for (let __goscriptSliceWindow8 = $.sliceRange(x), i = 0; i < __goscriptSliceWindow8.length; i = i + (2)) {
		r = appendFoldedRange(r, ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, i)] as number), ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, i + 1)] as number))
	}
	return r
}

export function appendNegatedClass(r: $.Slice<number>, x: $.Slice<number>): $.Slice<number> {
	let nextLo = 0
	for (let __goscriptSliceWindow9 = $.sliceRange(x), i = 0; i < __goscriptSliceWindow9.length; i = i + (2)) {
		let lo = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, i)] as number)
		let hi = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, i + 1)] as number)
		if (nextLo <= $.int((((lo - 1) | 0)), 32)) {
			r = appendRange(r, nextLo, $.int(((lo - 1) | 0), 32))
		}
		nextLo = $.int(((hi + 1) | 0), 32)
	}
	if (nextLo <= 1114111) {
		r = appendRange(r, nextLo, 1114111)
	}
	return r
}

export function appendTable(r: $.Slice<number>, x: unicode.RangeTable | $.VarRef<unicode.RangeTable> | null): $.Slice<number> {
	const x$: unicode.RangeTable = x == null ? $.pointerTarget<unicode.RangeTable>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<unicode.RangeTable>(x)
	for (let __goscriptRangeTarget8 = (x$ as unicode.RangeTable).R16, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
		let xr = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as unicode.Range16)))
		let lo = $.int(xr.Lo, 32)
		let hi = $.int(xr.Hi, 32)
		let stride = $.int(xr.Stride, 32)
		if (stride == 1) {
			r = appendRange(r, lo, hi)
			continue
		}
		for (let c = lo; c <= hi; c = $.int(c + (stride), 32)) {
			r = appendRange(r, c, c)
		}
	}
	for (let __goscriptRangeTarget9 = (x$ as unicode.RangeTable).R32, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
		let xr = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as unicode.Range32)))
		let lo = $.int(xr.Lo, 32)
		let hi = $.int(xr.Hi, 32)
		let stride = $.int(xr.Stride, 32)
		if (stride == 1) {
			r = appendRange(r, lo, hi)
			continue
		}
		for (let c = lo; c <= hi; c = $.int(c + (stride), 32)) {
			r = appendRange(r, c, c)
		}
	}
	return r
}

export function appendNegatedTable(r: $.Slice<number>, x: unicode.RangeTable | $.VarRef<unicode.RangeTable> | null): $.Slice<number> {
	const x$: unicode.RangeTable = x == null ? $.pointerTarget<unicode.RangeTable>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<unicode.RangeTable>(x)
	let nextLo = 0
	for (let __goscriptRangeTarget10 = (x$ as unicode.RangeTable).R16, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
		let xr = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as unicode.Range16)))
		let lo = $.int(xr.Lo, 32)
		let hi = $.int(xr.Hi, 32)
		let stride = $.int(xr.Stride, 32)
		if (stride == 1) {
			if (nextLo <= $.int((((lo - 1) | 0)), 32)) {
				r = appendRange(r, nextLo, $.int(((lo - 1) | 0), 32))
			}
			nextLo = $.int(((hi + 1) | 0), 32)
			continue
		}
		for (let c = lo; c <= hi; c = $.int(c + (stride), 32)) {
			if (nextLo <= $.int((((c - 1) | 0)), 32)) {
				r = appendRange(r, nextLo, $.int(((c - 1) | 0), 32))
			}
			nextLo = $.int(((c + 1) | 0), 32)
		}
	}
	for (let __goscriptRangeTarget11 = (x$ as unicode.RangeTable).R32, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
		let xr = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as unicode.Range32)))
		let lo = $.int(xr.Lo, 32)
		let hi = $.int(xr.Hi, 32)
		let stride = $.int(xr.Stride, 32)
		if (stride == 1) {
			if (nextLo <= $.int((((lo - 1) | 0)), 32)) {
				r = appendRange(r, nextLo, $.int(((lo - 1) | 0), 32))
			}
			nextLo = $.int(((hi + 1) | 0), 32)
			continue
		}
		for (let c = lo; c <= hi; c = $.int(c + (stride), 32)) {
			if (nextLo <= $.int((((c - 1) | 0)), 32)) {
				r = appendRange(r, nextLo, $.int(((c - 1) | 0), 32))
			}
			nextLo = $.int(((c + 1) | 0), 32)
		}
	}
	if (nextLo <= 1114111) {
		r = appendRange(r, nextLo, 1114111)
	}
	return r
}

export function negateClass(r: $.Slice<number>): $.Slice<number> {
	let nextLo = 0
	let w = 0
	for (let __goscriptSliceWindow10 = $.sliceRange(r), i = 0; i < __goscriptSliceWindow10.length; i = i + (2)) {
		let lo = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, i)] as number)
		let hi = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, i + 1)] as number)
		if (nextLo <= $.int((((lo - 1) | 0)), 32)) {
			;(__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, w)] = nextLo;
			;(__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, w + 1)] = $.int(((lo - 1) | 0), 32)
			w = w + (2)
		}
		nextLo = $.int(((hi + 1) | 0), 32)
	}
	r = $.goSlice(r, undefined, w)
	if (nextLo <= 1114111) {
		// It's possible for the negation to have one more
		// range - this one - than the original class, so use append.
		r = $.append(r, $.int(nextLo, 32), $.int(unicode.MaxRune, 32))
	}
	return r
}

export function checkUTF8(s: string): $.GoError {
	while (!$.stringEqual(s, "")) {
		let [rune, size] = utf8.DecodeRuneInString(s)
		if ((rune == 65533) && (size == 1)) {
			return $.interfaceValue<$.GoError>(new Error({Code: "invalid UTF-8", Expr: s}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))
		}
		s = $.sliceStringOrBytes(s, size, undefined)
	}
	return null
}

export function nextRune(s: string): [number, string, $.GoError] {
	let c: number = 0
	let t: string = ""
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple25: any = utf8.DecodeRuneInString(s)
	c = __goscriptTuple25[0]
	let size = __goscriptTuple25[1]
	if ((c == 65533) && (size == 1)) {
		return [0, "", $.interfaceValue<$.GoError>(new Error({Code: "invalid UTF-8", Expr: s}), "*syntax.Error", /* @__PURE__ */ $.pointerType("syntax.Error"))]
	}
	return [c, $.sliceStringOrBytes(s, size, undefined), null]
}

export function isalnum(c: number): boolean {
	return (((48 <= c) && (c <= 57)) || ((65 <= c) && (c <= 90))) || ((97 <= c) && (c <= 122))
}

export function unhex(c: number): number {
	if ((48 <= c) && (c <= 57)) {
		return $.int(((c - 48) | 0), 32)
	}
	if ((97 <= c) && (c <= 102)) {
		return $.int((((((c - 97) | 0)) + 10) | 0), 32)
	}
	if ((65 <= c) && (c <= 70)) {
		return $.int((((((c - 65) | 0)) + 10) | 0), 32)
	}
	return -1
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (ErrorCode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "syntax.ErrorCode"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}
