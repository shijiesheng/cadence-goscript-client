// Generated file based on regexp.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strings from "@goscript/strings/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as __goscript_op_string from "./op_string.gs.ts"

import * as __goscript_parse from "./parse.gs.ts"

import * as __goscript_simplify from "./simplify.gs.ts"
import "@goscript/strconv/index.js"
import "@goscript/slices/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/index.js"
import "./op_string.gs.ts"
import "./parse.gs.ts"
import "./simplify.gs.ts"

$.registerTypePackagePath("regexp/syntax", ["syntax.Regexp", "syntax.Op", "syntax.printFlags"])

export type Op = number

$.registerNamedValueType(
	"syntax.Op",
	{String: (receiver: any, ...args: any[]) => (__goscript_op_string.Op_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*syntax.Op",
	{String: (receiver: any, ...args: any[]) => (__goscript_op_string.Op_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type printFlags = number

export class Regexp {
	public get Op(): Op {
		return this._fields.Op
	}

	public set Op(value: Op) {
		this._fields.Op = value
	}

	public get Flags(): __goscript_parse.Flags {
		return this._fields.Flags
	}

	public set Flags(value: __goscript_parse.Flags) {
		this._fields.Flags = value
	}

	public get Sub(): $.Slice<Regexp | $.VarRef<Regexp> | null> {
		return this._fields.Sub
	}

	public set Sub(value: $.Slice<Regexp | $.VarRef<Regexp> | null>) {
		this._fields.Sub = value
	}

	public get Sub0(): (Regexp | $.VarRef<Regexp> | null)[] {
		return this._fields.Sub0
	}

	public set Sub0(value: (Regexp | $.VarRef<Regexp> | null)[]) {
		this._fields.Sub0 = value
	}

	public get Rune(): $.Slice<number> {
		return this._fields.Rune
	}

	public set Rune(value: $.Slice<number>) {
		this._fields.Rune = value
	}

	public get Rune0(): number[] {
		return this._fields.Rune0
	}

	public set Rune0(value: number[]) {
		this._fields.Rune0 = value
	}

	public get Min(): number {
		return this._fields.Min
	}

	public set Min(value: number) {
		this._fields.Min = value
	}

	public get Max(): number {
		return this._fields.Max
	}

	public set Max(value: number) {
		this._fields.Max = value
	}

	public get Cap(): number {
		return this._fields.Cap
	}

	public set Cap(value: number) {
		this._fields.Cap = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public _fields: {
		Op: Op
		Flags: __goscript_parse.Flags
		Sub: $.Slice<Regexp | $.VarRef<Regexp> | null>
		Sub0: (Regexp | $.VarRef<Regexp> | null)[]
		Rune: $.Slice<number>
		Rune0: number[]
		Min: number
		Max: number
		Cap: number
		Name: string
	}

	constructor(init?: Partial<{Op?: Op, Flags?: __goscript_parse.Flags, Sub?: $.Slice<Regexp | $.VarRef<Regexp> | null>, Sub0?: (Regexp | $.VarRef<Regexp> | null)[], Rune?: $.Slice<number>, Rune0?: number[], Min?: number, Max?: number, Cap?: number, Name?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Op: init?.Op ?? (0 as Op),
			Flags: init?.Flags ?? (0 as __goscript_parse.Flags),
			Sub: init?.Sub ?? (null! as $.Slice<Regexp | $.VarRef<Regexp> | null>),
			Sub0: init?.Sub0 !== undefined ? $.cloneArrayValue(init.Sub0, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("syntax.Regexp"), 1)) : $.arrayValue(globalThis.Array.from({ length: 1 }, () => null)),
			Rune: init?.Rune ?? (null! as $.Slice<number>),
			Rune0: init?.Rune0 !== undefined ? $.cloneArrayValue(init.Rune0, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32"), 2)) : $.arrayValue(globalThis.Array.from({ length: 2 }, () => 0)),
			Min: init?.Min ?? (0 as number),
			Max: init?.Max ?? (0 as number),
			Cap: init?.Cap ?? (0 as number),
			Name: init?.Name ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Regexp {
		return new Regexp(this, true)
	}

	public __goscriptAssign(source: Regexp): void {
		const target = this._fields
		const values = source._fields
		target.Op = values.Op
		target.Flags = values.Flags
		target.Sub = values.Sub
		target.Sub0 = $.assignFieldValue(target.Sub0, values.Sub0, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("syntax.Regexp"), 1))
		target.Rune = values.Rune
		target.Rune0 = $.assignFieldValue(target.Rune0, values.Rune0, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32"), 2))
		target.Min = values.Min
		target.Max = values.Max
		target.Cap = values.Cap
		target.Name = values.Name
	}

	public CapNames(): $.Slice<string> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		let names: $.Slice<string> = $.makeSlice<string>((re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).MaxCap() : Regexp.prototype.MaxCap.call(re)) + 1, undefined, "string")
		void (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).capNames(names) : Regexp.prototype.capNames.call(re, names))
		return names
	}

	public Equal(y: Regexp | $.VarRef<Regexp> | null): boolean {
		const x: Regexp | $.VarRef<Regexp> | null = this;
		const x$: Regexp = x == null ? $.pointerTarget<Regexp>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Regexp>(x)
		const y$: Regexp = y == null ? $.pointerTarget<Regexp>(y) : (y as any).__isVarRef === true ? (y as any).value : (y as any).__goValue === undefined ? (y as any) : $.pointerTarget<Regexp>(y)
		if ((x == null) || (y == null)) {
			return $.pointerEqual(x, y)
		}
		if ((x$ as Regexp).Op != (y$ as Regexp).Op) {
			return false
		}
		switch ((x$ as Regexp).Op) {
			case 10:
			{
				if ($.uint(((x$ as Regexp).Flags & 256), 16) != $.uint(((y$ as Regexp).Flags & 256), 16)) {
					return false
				}
				break
			}
			case 3:
			case 4:
			{
				return ($.uint(((x$ as Regexp).Flags & 1), 16) == $.uint(((y$ as Regexp).Flags & 1), 16)) && slices.Equal((x$ as Regexp).Rune, (y$ as Regexp).Rune)
				break
			}
			case 19:
			case 18:
			{
				return slices.EqualFunc((x$ as Regexp).Sub, (y$ as Regexp).Sub, $.functionValue((x: Regexp | $.VarRef<Regexp> | null, y: Regexp | $.VarRef<Regexp> | null): boolean => $.pointerValue<Regexp>(x).Equal(y), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("syntax.Regexp"), /* @__PURE__ */ $.pointerType("syntax.Regexp")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
				break
			}
			case 14:
			case 15:
			case 16:
			{
				if (($.uint(((x$ as Regexp).Flags & 32), 16) != $.uint(((y$ as Regexp).Flags & 32), 16)) || !Regexp.prototype.Equal.call($.arrayIndex((x$ as Regexp).Sub!, 0), $.arrayIndex((y$ as Regexp).Sub!, 0))) {
					return false
				}
				break
			}
			case 17:
			{
				if (((($.uint(((x$ as Regexp).Flags & 32), 16) != $.uint(((y$ as Regexp).Flags & 32), 16)) || ((x$ as Regexp).Min != (y$ as Regexp).Min)) || ((x$ as Regexp).Max != (y$ as Regexp).Max)) || !Regexp.prototype.Equal.call($.arrayIndex((x$ as Regexp).Sub!, 0), $.arrayIndex((y$ as Regexp).Sub!, 0))) {
					return false
				}
				break
			}
			case 13:
			{
				if ((((x$ as Regexp).Cap != (y$ as Regexp).Cap) || (!$.stringEqual((x$ as Regexp).Name, (y$ as Regexp).Name))) || !Regexp.prototype.Equal.call($.arrayIndex((x$ as Regexp).Sub!, 0), $.arrayIndex((y$ as Regexp).Sub!, 0))) {
					return false
				}
				break
			}
		}
		return true
	}

	public MaxCap(): number {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		const re$: Regexp = re == null ? $.pointerTarget<Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<Regexp>(re)
		let m = 0
		if ((re$ as Regexp).Op == 13) {
			m = (re$ as Regexp).Cap
		}
		for (let __goscriptRangeTarget0 = (re$ as Regexp).Sub, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let sub = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Regexp | $.VarRef<Regexp> | null)
			{
				let n = (sub !== null && (sub as any).__isVarRef !== true && (sub as any).__goValue === undefined ? ((sub as any) as Regexp).MaxCap() : Regexp.prototype.MaxCap.call(sub))
				if (m < n) {
					m = n
				}
			}
		}
		return m
	}

	public Simplify(): Regexp | $.VarRef<Regexp> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		const re$: Regexp = re == null ? $.pointerTarget<Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<Regexp>(re)
		if (re == null) {
			return null
		}
		switch ((re$ as Regexp).Op) {
			case 13:
			case 18:
			case 19:
			{
				let nre: Regexp | $.VarRef<Regexp> | null = re
				for (let __goscriptRangeTarget1 = (re$ as Regexp).Sub, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
					let sub = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as Regexp | $.VarRef<Regexp> | null)
					let nsub: Regexp | $.VarRef<Regexp> | null = (sub !== null && (sub as any).__isVarRef !== true && (sub as any).__goValue === undefined ? ((sub as any) as Regexp).Simplify() : Regexp.prototype.Simplify.call(sub))
					if (($.pointerEqual(nre, re)) && (!$.pointerEqual(nsub, sub))) {
						// min, max for OpRepeat
						nre = new Regexp()
						$.assignStruct($.pointerValue<Regexp>(nre), (re$ as Regexp))
						$.pointerValue<Regexp>(nre).Rune = null
						$.pointerValue<Regexp>(nre).Sub = $.appendSlice($.goSlice($.pointerValue<Regexp>(nre).Sub0, undefined, 0), $.goSlice((re$ as Regexp).Sub, undefined, i), $.appendZeros.nil)
					}
					if (!$.pointerEqual(nre, re)) {
						$.pointerValue<Regexp>(nre).Sub = $.appendOne($.pointerValue<Regexp>(nre).Sub, nsub, $.appendZeros.nil)
					}
				}
				return nre
				break
			}
			case 14:
			case 15:
			case 16:
			{
				let sub: Regexp | $.VarRef<Regexp> | null = Regexp.prototype.Simplify.call($.arrayIndex((re$ as Regexp).Sub!, 0))
				return __goscript_simplify.simplify1((re$ as Regexp).Op, (re$ as Regexp).Flags, sub, re)
				break
			}
			case 17:
			{
				if (((re$ as Regexp).Min == 0) && ((re$ as Regexp).Max == 0)) {
					return new Regexp({Op: 2})
				}
				// matches empty string at end of line
				// matches empty string at beginning of text
				let sub: Regexp | $.VarRef<Regexp> | null = Regexp.prototype.Simplify.call($.arrayIndex((re$ as Regexp).Sub!, 0))
				// matches word boundary `\b`
				// matches word non-boundary `\B`
				if ((re$ as Regexp).Max == -1) {
					// matches Sub[0] zero or more times
					if ((re$ as Regexp).Min == 0) {
						return __goscript_simplify.simplify1(14, (re$ as Regexp).Flags, sub, null)
					}
					// matches concatenation of Subs
					// matches alternation of Subs
					if ((re$ as Regexp).Min == 1) {
						return __goscript_simplify.simplify1(15, (re$ as Regexp).Flags, sub, null)
					}

					// Equal reports whether x and y have identical structure.
					let nre: Regexp | $.VarRef<Regexp> | null = new Regexp({Op: 18})
					let nre$: Regexp = nre == null ? $.pointerTarget<Regexp>(nre) : (nre as any).__isVarRef === true ? (nre as any).value : (nre as any).__goValue === undefined ? (nre as any) : $.pointerTarget<Regexp>(nre);
					;(nre$ as Regexp).Sub = $.goSlice((nre$ as Regexp).Sub0, undefined, 0)
					for (let i = 0; i < ((re$ as Regexp).Min - 1); i++) {
						;(nre$ as Regexp).Sub = $.appendOne((nre$ as Regexp).Sub, sub, $.appendZeros.nil)
					}
					;(nre$ as Regexp).Sub = $.appendOne((nre$ as Regexp).Sub, __goscript_simplify.simplify1(15, (re$ as Regexp).Flags, sub, null), $.appendZeros.nil)
					return nre
				}

				// The parse flags remember whether this is \z or \Z.

				if (((re$ as Regexp).Min == 1) && ((re$ as Regexp).Max == 1)) {
					return sub
				}

				let prefix: Regexp | $.VarRef<Regexp> | null = null! as Regexp | $.VarRef<Regexp> | null
				if ((re$ as Regexp).Min > 0) {
					prefix = new Regexp({Op: 18})
					$.pointerValue<Regexp>(prefix).Sub = $.goSlice($.pointerValue<Regexp>(prefix).Sub0, undefined, 0)
					for (let i = 0; i < (re$ as Regexp).Min; i++) {
						$.pointerValue<Regexp>(prefix).Sub = $.appendOne($.pointerValue<Regexp>(prefix).Sub, sub, $.appendZeros.nil)
					}
				}

				if ((re$ as Regexp).Max > (re$ as Regexp).Min) {
					let suffix: Regexp | $.VarRef<Regexp> | null = __goscript_simplify.simplify1(16, (re$ as Regexp).Flags, sub, null)
					for (let i = (re$ as Regexp).Min + 1; i < (re$ as Regexp).Max; i++) {
						let nre2: Regexp | $.VarRef<Regexp> | null = new Regexp({Op: 18})
						let nre2$: Regexp = nre2 == null ? $.pointerTarget<Regexp>(nre2) : (nre2 as any).__isVarRef === true ? (nre2 as any).value : (nre2 as any).__goValue === undefined ? (nre2 as any) : $.pointerTarget<Regexp>(nre2);
						;(nre2$ as Regexp).Sub = $.append($.goSlice((nre2$ as Regexp).Sub0, undefined, 0), sub, suffix, $.appendZeros.nil)
						suffix = __goscript_simplify.simplify1(16, (re$ as Regexp).Flags, nre2, null)
					}
					if (prefix == null) {
						return suffix
					}
					$.pointerValue<Regexp>(prefix).Sub = $.appendOne($.pointerValue<Regexp>(prefix).Sub, suffix, $.appendZeros.nil)
				}
				if (prefix != null) {
					return prefix
				}
				// (?: )
				// flagI<<negShift is (?-i:

				return new Regexp({Op: 1})
				break
			}
		}

		return re
	}

	public String(): string {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		let b: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		let flags: $.VarRef<globalThis.Map<Regexp | $.VarRef<Regexp> | null, printFlags> | null> = $.varRef(null! as globalThis.Map<Regexp | $.VarRef<Regexp> | null, printFlags> | null)
		let [must, cant] = calcFlags(re, flags)
		must = must | ($.uint((((cant & ~(1)) << 5) & 0xff), 8))
		if (must != 0) {
			must = must | (8)
		}
		writeRegexp(b, re, must, flags.value)
		return b.value.String()
	}

	public capNames(names: $.Slice<string>): void {
		let re: Regexp | $.VarRef<Regexp> | null = this;
		const re$: Regexp = re == null ? $.pointerTarget<Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<Regexp>(re)
		if ((re$ as Regexp).Op == 13) {
			$.sliceElems(names!)[$.sliceSlot(names!, (re$ as Regexp).Cap)] = (re$ as Regexp).Name
		}
		for (let __goscriptRangeTarget2 = (re$ as Regexp).Sub, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let sub = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as Regexp | $.VarRef<Regexp> | null)
			void (sub !== null && (sub as any).__isVarRef !== true && (sub as any).__goValue === undefined ? ((sub as any) as Regexp).capNames(names) : Regexp.prototype.capNames.call(sub, names))
		}
	}

	static __typeInfo = $.registerStructType(
		"syntax.Regexp",
		() => new Regexp(),
		() => [$.methodSignature("CapNames", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("Equal", [["y", /* @__PURE__ */ $.pointerType("syntax.Regexp")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MaxCap", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Simplify", [], [/* @__PURE__ */ $.pointerType("syntax.Regexp")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("capNames", [["names", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true)],
		Regexp,
		() => [/* @__PURE__ */ $.structField("Op", /* @__PURE__ */ $.basicType("uint8", "syntax.Op"), [0], 0, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint16", "syntax.Flags"), [1], 2, true), /* @__PURE__ */ $.structField("Sub", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("syntax.Regexp")), [2], 8, true), /* @__PURE__ */ $.structField("Sub0", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("syntax.Regexp"), 1), [3], 32, true), /* @__PURE__ */ $.structField("Rune", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), [4], 40, true), /* @__PURE__ */ $.structField("Rune0", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32"), 2), [5], 64, true), /* @__PURE__ */ $.structField("Min", /* @__PURE__ */ $.basicType("int"), [6], 72, true), /* @__PURE__ */ $.structField("Max", /* @__PURE__ */ $.basicType("int"), [7], 80, true), /* @__PURE__ */ $.structField("Cap", /* @__PURE__ */ $.basicType("int"), [8], 88, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [9], 96, true)]
	)
}

export const OpNoMatch: Op = 1

export const OpEmptyMatch: Op = 2

export const OpLiteral: Op = 3

export const OpCharClass: Op = 4

export const OpAnyCharNotNL: Op = 5

export const OpAnyChar: Op = 6

export const OpBeginLine: Op = 7

export const OpEndLine: Op = 8

export const OpBeginText: Op = 9

export const OpEndText: Op = 10

export const OpWordBoundary: Op = 11

export const OpNoWordBoundary: Op = 12

export const OpCapture: Op = 13

export const OpStar: Op = 14

export const OpPlus: Op = 15

export const OpQuest: Op = 16

export const OpRepeat: Op = 17

export const OpConcat: Op = 18

export const OpAlternate: Op = 19

export const opPseudo: Op = 128

export const flagI: printFlags = 1

export const flagM: printFlags = 2

export const flagS: printFlags = 4

export const flagOff: printFlags = 8

export const flagPrec: printFlags = 16

export const negShift: number = 5

export const meta: string = "\\.+*?()|[]{}^$"

export function addSpan(start: Regexp | $.VarRef<Regexp> | null, last: Regexp | $.VarRef<Regexp> | null, f: printFlags, flags: $.VarRef<globalThis.Map<Regexp | $.VarRef<Regexp> | null, printFlags> | null> | null): void {
	if ($.pointerValue<globalThis.Map<Regexp | $.VarRef<Regexp> | null, printFlags> | null>(flags) == null) {
		flags!.value = $.makeMap<Regexp | $.VarRef<Regexp> | null, printFlags>(undefined, /* @__PURE__ */ $.pointerType("syntax.Regexp"))
	}
	$.mapSet(($.pointerValue<globalThis.Map<Regexp | $.VarRef<Regexp> | null, printFlags> | null>(flags)), start, f)
	const __goscriptMap0 = ($.pointerValue<globalThis.Map<Regexp | $.VarRef<Regexp> | null, printFlags> | null>(flags))
	const __goscriptMapKey0 = last
	$.mapSet(__goscriptMap0, __goscriptMapKey0, $.mapGet<Regexp | $.VarRef<Regexp> | null, printFlags, printFlags>(__goscriptMap0, __goscriptMapKey0, 0)[0] | (8))
}

export function calcFlags(re: Regexp | $.VarRef<Regexp> | null, flags: $.VarRef<globalThis.Map<Regexp | $.VarRef<Regexp> | null, printFlags> | null> | null): [printFlags, printFlags] {
	let must: printFlags = 0
	let cant: printFlags = 0
	const re$: Regexp = re == null ? $.pointerTarget<Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<Regexp>(re)
	switch ((re$ as Regexp).Op) {
		default:
		{
			return [0, 0]
			break
		}
		case 3:
		{
			for (let __goscriptRangeTarget3 = (re$ as Regexp).Rune, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
				let r = $.int((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as number), 32)
				if (((65 <= r) && (r <= 125251)) && (unicode.SimpleFold(r) != r)) {
					if ($.uint(((re$ as Regexp).Flags & 1), 16) != 0) {
						return [1, 0]
					} else {
						return [0, 1]
					}
				}
			}
			return [0, 0]
			break
		}
		case 4:
		{
			for (let i = 0; i < $.sliceLen((re$ as Regexp).Rune); i = i + (2)) {
				let lo = $.max(65, $.arrayIndex((re$ as Regexp).Rune!, i))
				let hi = $.min(125251, $.arrayIndex((re$ as Regexp).Rune!, i + 1))
				for (let r = lo; r <= hi; r = ((r + 1) | 0)) {
					for (let f = unicode.SimpleFold(r); f != r; f = unicode.SimpleFold(f)) {
						if (!((lo <= f) && (f <= hi)) && !__goscript_parse.inCharClass(f, (re$ as Regexp).Rune)) {
							return [0, 1]
						}
					}
				}
			}
			return [0, 0]
			break
		}
		case 5:
		{
			return [0, 4]
			break
		}
		case 6:
		{
			return [4, 0]
			break
		}
		case 7:
		case 8:
		{
			return [2, 0]
			break
		}
		case 10:
		{
			if ($.uint(((re$ as Regexp).Flags & 256), 16) != 0) {
				return [0, 2]
			}
			return [0, 0]
			break
		}
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		{
			return calcFlags($.arrayIndex((re$ as Regexp).Sub!, 0), flags)
			break
		}
		case 18:
		case 19:
		{
			let __goscriptShadow0: printFlags = 0
			let __goscriptShadow1: printFlags = 0
			let allCant: printFlags = 0
			let start = 0
			let last = 0
			let did = false
			for (let __goscriptRangeTarget4 = (re$ as Regexp).Sub, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
				let sub = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as Regexp | $.VarRef<Regexp> | null)
				let [subMust, subCant] = calcFlags(sub, flags)
				if (($.uint((__goscriptShadow0 & subCant), 8) != 0) || ($.uint((subMust & __goscriptShadow1), 8) != 0)) {
					if (__goscriptShadow0 != 0) {
						addSpan($.arrayIndex((re$ as Regexp).Sub!, start), $.arrayIndex((re$ as Regexp).Sub!, last), __goscriptShadow0, flags)
					}
					__goscriptShadow0 = 0
					__goscriptShadow1 = 0
					start = i
					did = true
				}
				__goscriptShadow0 = __goscriptShadow0 | (subMust)
				__goscriptShadow1 = __goscriptShadow1 | (subCant)
				allCant = allCant | (subCant)
				if (subMust != 0) {
					last = i
				}
				if ((__goscriptShadow0 == 0) && (start == i)) {
					start++
				}
			}
			if (!did) {
				// No conflicts: pass the accumulated must and cant upward.
				return [__goscriptShadow0, __goscriptShadow1]
			}
			if (__goscriptShadow0 != 0) {
				// Conflicts found; need to finish final span.
				addSpan($.arrayIndex((re$ as Regexp).Sub!, start), $.arrayIndex((re$ as Regexp).Sub!, last), __goscriptShadow0, flags)
			}
			return [0, allCant]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function writeRegexp(b: strings.Builder | $.VarRef<strings.Builder> | null, re: Regexp | $.VarRef<Regexp> | null, f: printFlags, flags: globalThis.Map<Regexp | $.VarRef<Regexp> | null, printFlags> | null): void {
	using __defer = new $.DisposableStack()
	const re$: Regexp = re == null ? $.pointerTarget<Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<Regexp>(re)
	f = f | ($.mapGet<Regexp | $.VarRef<Regexp> | null, printFlags, printFlags>(flags, re, 0)[0])
	if ((($.uint((f & 16), 8) != 0) && ($.uint((f & ~((8 | 16))), 8) != 0)) && ($.uint((f & 8), 8) != 0)) {
		// flagPrec is redundant with other flags being added and terminated
		f = f & ~((16))
	}
	if ($.uint((f & ~((8 | 16))), 8) != 0) {
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "(?")
		if ($.uint((f & 1), 8) != 0) {
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "i")
		}
		if ($.uint((f & 2), 8) != 0) {
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "m")
		}
		if ($.uint((f & 4), 8) != 0) {
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "s")
		}
		if ($.uint((f & (192)), 8) != 0) {
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "-")
			if ($.uint((f & (64)), 8) != 0) {
				strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "m")
			}
			if ($.uint((f & (128)), 8) != 0) {
				strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "s")
			}
		}
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), ":")
	}
	if ($.uint((f & 8), 8) != 0) {
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (s: string) => __receiver.WriteString(s))($.pointerValue<strings.Builder>(b)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("int"), "error"] } as $.FunctionTypeInfo), "strings.(*Builder).WriteString-fm")
		__defer.defer(() => { __goscriptDeferCallee0(")") })
	}
	if ($.uint((f & 16), 8) != 0) {
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "(?:")
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (s: string) => __receiver.WriteString(s))($.pointerValue<strings.Builder>(b)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("int"), "error"] } as $.FunctionTypeInfo), "strings.(*Builder).WriteString-fm")
		__defer.defer(() => { __goscriptDeferCallee1(")") })
	}

	switch ((re$ as Regexp).Op) {
		default:
		{
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), $.concatString(($.concatString("<invalid op", strconv.Itoa($.int((re$ as Regexp).Op)))), ">"))
			break
		}
		case 1:
		{
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "[^\\x00-\\x{10FFFF}]")
			break
		}
		case 2:
		{
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "(?:)")
			break
		}
		case 3:
		{
			for (let __goscriptRangeTarget5 = (re$ as Regexp).Rune, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
				let r = $.int((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as number), 32)
				escape(b, r, false)
			}
			break
		}
		case 4:
		{
			if (($.sliceLen((re$ as Regexp).Rune) % 2) != 0) {
				strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "[invalid char class]")
				break
			}
			strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 91)
			if ($.sliceLen((re$ as Regexp).Rune) == 0) {
				strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "^\\x00-\\x{10FFFF}")
			} else {
				if ((($.arrayIndex((re$ as Regexp).Rune!, 0) == 0) && ($.arrayIndex((re$ as Regexp).Rune!, $.sliceLen((re$ as Regexp).Rune) - 1) == 1114111)) && ($.sliceLen((re$ as Regexp).Rune) > 2)) {
					// Contains 0 and MaxRune. Probably a negated class.
					// Print the gaps.
					strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 94)
					for (let i = 1; i < ($.sliceLen((re$ as Regexp).Rune) - 1); i = i + (2)) {
						let lo = $.int((($.arrayIndex((re$ as Regexp).Rune!, i) + 1) | 0), 32)
						let hi = $.int((($.arrayIndex((re$ as Regexp).Rune!, i + 1) - 1) | 0), 32)
						escape(b, lo, lo == 45)
						if (lo != hi) {
							if (hi != $.int((((lo + 1) | 0)), 32)) {
								strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 45)
							}
							escape(b, hi, hi == 45)
						}
					}
				} else {
					for (let i = 0; i < $.sliceLen((re$ as Regexp).Rune); i = i + (2)) {
						let lo = $.arrayIndex((re$ as Regexp).Rune!, i)
						let hi = $.arrayIndex((re$ as Regexp).Rune!, i + 1)
						escape(b, lo, lo == 45)
						if (lo != hi) {
							if (hi != $.int((((lo + 1) | 0)), 32)) {
								strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 45)
							}
							escape(b, hi, hi == 45)
						}
					}
				}
			}
			strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 93)
			break
		}
		case 5:
		case 6:
		{
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), ".")
			break
		}
		case 7:
		{
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "^")
			break
		}
		case 8:
		{
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "$")
			break
		}
		case 9:
		{
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "\\A")
			break
		}
		case 10:
		{
			if ($.uint(((re$ as Regexp).Flags & 256), 16) != 0) {
				strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "$")
			} else {
				strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "\\z")
			}
			break
		}
		case 11:
		{
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "\\b")
			break
		}
		case 12:
		{
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "\\B")
			break
		}
		case 13:
		{
			if (!$.stringEqual((re$ as Regexp).Name, "")) {
				strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "(?P<")
				strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), (re$ as Regexp).Name)
				strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 62)
			} else {
				strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 40)
			}
			if ($.pointerValue<Regexp>($.arrayIndex((re$ as Regexp).Sub!, 0)).Op != 2) {
				writeRegexp(b, $.arrayIndex((re$ as Regexp).Sub!, 0), $.mapGet<Regexp | $.VarRef<Regexp> | null, printFlags, printFlags>(flags, $.arrayIndex((re$ as Regexp).Sub!, 0), 0)[0], flags)
			}
			strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 41)
			break
		}
		case 14:
		case 15:
		case 16:
		case 17:
		{
			let p = 0
			let sub: Regexp | $.VarRef<Regexp> | null = $.arrayIndex((re$ as Regexp).Sub!, 0)
			let sub$: Regexp = sub == null ? $.pointerTarget<Regexp>(sub) : (sub as any).__isVarRef === true ? (sub as any).value : (sub as any).__goValue === undefined ? (sub as any) : $.pointerTarget<Regexp>(sub)
			if (((sub$ as Regexp).Op > 13) || (((sub$ as Regexp).Op == 3) && ($.sliceLen((sub$ as Regexp).Rune) > 1))) {
				p = 16
			}
			writeRegexp(b, sub, p, flags)

			switch ((re$ as Regexp).Op) {
				case 14:
				{
					strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 42)
					break
				}
				case 15:
				{
					strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 43)
					break
				}
				case 16:
				{
					strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 63)
					break
				}
				case 17:
				{
					strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 123)
					strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), strconv.Itoa((re$ as Regexp).Min))
					if ((re$ as Regexp).Max != (re$ as Regexp).Min) {
						strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 44)
						if ((re$ as Regexp).Max >= 0) {
							strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), strconv.Itoa((re$ as Regexp).Max))
						}
					}
					strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 125)
					break
				}
			}
			if ($.uint(((re$ as Regexp).Flags & 32), 16) != 0) {
				strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 63)
			}
			break
		}
		case 18:
		{
			for (let __goscriptRangeTarget6 = (re$ as Regexp).Sub, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
				let sub = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as Regexp | $.VarRef<Regexp> | null)
				let p = 0
				if ($.pointerValue<Regexp>(sub).Op == 19) {
					p = 16
				}
				writeRegexp(b, sub, p, flags)
			}
			break
		}
		case 19:
		{
			for (let __goscriptRangeTarget7 = (re$ as Regexp).Sub, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), i = 0; i < __goscriptRangeWindow7.length; i++) {
				let sub = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + i] as Regexp | $.VarRef<Regexp> | null)
				if (i > 0) {
					strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 124)
				}
				writeRegexp(b, sub, 0, flags)
			}
			break
		}
	}
}

export function escape(b: strings.Builder | $.VarRef<strings.Builder> | null, r: number, force: boolean): void {
	if (unicode.IsPrint(r)) {
		if (strings.ContainsRune("\\.+*?()|[]{}^$", r) || force) {
			strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 92)
		}
		strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), r)
		return
	}

	switch (r) {
		case 7:
		{
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "\\a")
			break
		}
		case 12:
		{
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "\\f")
			break
		}
		case 10:
		{
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "\\n")
			break
		}
		case 13:
		{
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "\\r")
			break
		}
		case 9:
		{
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "\\t")
			break
		}
		case 11:
		{
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "\\v")
			break
		}
		default:
		{
			if (r < 0x100) {
				strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "\\x")
				let s = strconv.FormatInt($.int64(r), 16)
				if ($.stringLen(s) == 1) {
					strings.Builder.prototype.WriteRune.call($.pointerValue<strings.Builder>(b), 48)
				}
				strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), s)
				break
			}
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "\\x{")
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), strconv.FormatInt($.int64(r), 16))
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "}")
			break
		}
	}
}
