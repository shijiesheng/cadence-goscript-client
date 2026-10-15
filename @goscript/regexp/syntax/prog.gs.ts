// Generated file based on prog.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_parse from "./parse.gs.ts"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/index.js"
import "@goscript/unicode/utf8/index.js"
import "./parse.gs.ts"

$.registerTypePackagePath("regexp/syntax", ["syntax.Prog", "syntax.InstOp", "syntax.EmptyOp", "syntax.Inst"])

export type InstOp = number

$.registerNamedValueType(
	"syntax.InstOp",
	{String: (receiver: any, ...args: any[]) => (InstOp_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*syntax.InstOp",
	{String: (receiver: any, ...args: any[]) => (InstOp_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type EmptyOp = number

export class Prog {
	public get Inst(): $.Slice<Inst> {
		return this._fields.Inst
	}

	public set Inst(value: $.Slice<Inst>) {
		this._fields.Inst = value
	}

	public get Start(): number {
		return this._fields.Start
	}

	public set Start(value: number) {
		this._fields.Start = value
	}

	public get NumCap(): number {
		return this._fields.NumCap
	}

	public set NumCap(value: number) {
		this._fields.NumCap = value
	}

	public _fields: {
		Inst: $.Slice<Inst>
		Start: number
		NumCap: number
	}

	constructor(init?: Partial<{Inst?: $.Slice<Inst>, Start?: number, NumCap?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Inst: init?.Inst ?? (null! as $.Slice<Inst>),
			Start: init?.Start ?? (0 as number),
			NumCap: init?.NumCap ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Prog {
		return new Prog(this, true)
	}

	public __goscriptAssign(source: Prog): void {
		const target = this._fields
		const values = source._fields
		target.Inst = values.Inst
		target.Start = values.Start
		target.NumCap = values.NumCap
	}

	public Prefix(): [string, boolean] {
		const p: Prog | $.VarRef<Prog> | null = this;
		let prefix: string = ""
		let complete: boolean = false
		let i: Inst | $.VarRef<Inst> | null = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Prog).skipNop($.uint($.pointerValue<Prog>(p).Start, 32)) : Prog.prototype.skipNop.call(p, $.uint($.pointerValue<Prog>(p).Start, 32)))

		// Avoid allocation of buffer if prefix is empty.
		if (((i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Inst).op() : Inst.prototype.op.call(i)) != 7) || ($.sliceLen($.pointerValue<Inst>(i).Rune) != 1)) {
			return ["", $.pointerValue<Inst>(i).Op == 4]
		}

		// Have prefix; gather characters.
		let buf: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		while (((((i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Inst).op() : Inst.prototype.op.call(i)) == 7) && ($.sliceLen($.pointerValue<Inst>(i).Rune) == 1)) && ($.uint(($.uint($.pointerValue<Inst>(i).Arg, 16) & 1), 16) == 0)) && ($.arrayIndex($.pointerValue<Inst>(i).Rune!, 0) != 65533)) {
			buf.value.WriteRune($.arrayIndex($.pointerValue<Inst>(i).Rune!, 0))
			i = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Prog).skipNop($.pointerValue<Inst>(i).Out) : Prog.prototype.skipNop.call(p, $.pointerValue<Inst>(i).Out))
		}
		return [buf.value.String(), $.pointerValue<Inst>(i).Op == 4]
	}

	public StartCond(): EmptyOp {
		const p: Prog | $.VarRef<Prog> | null = this;
		const p$: Prog = p == null ? $.pointerTarget<Prog>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Prog>(p)
		let flag: EmptyOp = 0
		let pc = $.uint((p$ as Prog).Start, 32)
		let i: Inst | $.VarRef<Inst> | null = $.indexRef((p$ as Prog).Inst!, pc)
		Loop: while (true) {
			switch ($.pointerValue<Inst>(i).Op) {
				case 3:
				{
					flag = flag | ($.uint($.pointerValue<Inst>(i).Arg, 8))
					break
				}
				case 5:
				{
					return 255
					break
				}
				case 2:
				case 6:
				{
					break
				}
				default:
				{
					break Loop
					break
				}
			}
			pc = $.pointerValue<Inst>(i).Out
			i = $.indexRef((p$ as Prog).Inst!, pc)
		}
		return flag
	}

	public String(): string {
		const p: Prog | $.VarRef<Prog> | null = this;
		let b: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		dumpProg(b, p)
		return b.value.String()
	}

	public skipNop(pc: number): Inst | $.VarRef<Inst> | null {
		const p: Prog | $.VarRef<Prog> | null = this;
		const p$: Prog = p == null ? $.pointerTarget<Prog>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Prog>(p)
		let i: Inst | $.VarRef<Inst> | null = $.indexRef((p$ as Prog).Inst!, pc)
		while (($.pointerValue<Inst>(i).Op == 6) || ($.pointerValue<Inst>(i).Op == 2)) {
			i = $.indexRef((p$ as Prog).Inst!, $.pointerValue<Inst>(i).Out)
		}
		return i
	}

	static __typeInfo = $.registerStructType(
		"syntax.Prog",
		() => new Prog(),
		() => [$.methodSignature("Prefix", [], [["prefix", /* @__PURE__ */ $.basicType("string")], ["complete", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("StartCond", [], [/* @__PURE__ */ $.basicType("uint8", "syntax.EmptyOp")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("skipNop", [["pc", /* @__PURE__ */ $.basicType("uint32")]], [/* @__PURE__ */ $.pointerType("syntax.Inst")], true)],
		Prog,
		() => [/* @__PURE__ */ $.structField("Inst", /* @__PURE__ */ $.sliceType("syntax.Inst"), [0], 0, true), /* @__PURE__ */ $.structField("Start", /* @__PURE__ */ $.basicType("int"), [1], 24, true), /* @__PURE__ */ $.structField("NumCap", /* @__PURE__ */ $.basicType("int"), [2], 32, true)]
	)
}

export class Inst {
	public get Op(): InstOp {
		return this._fields.Op
	}

	public set Op(value: InstOp) {
		this._fields.Op = value
	}

	public get Out(): number {
		return this._fields.Out
	}

	public set Out(value: number) {
		this._fields.Out = value
	}

	public get Arg(): number {
		return this._fields.Arg
	}

	public set Arg(value: number) {
		this._fields.Arg = value
	}

	public get Rune(): $.Slice<number> {
		return this._fields.Rune
	}

	public set Rune(value: $.Slice<number>) {
		this._fields.Rune = value
	}

	public _fields: {
		Op: InstOp
		Out: number
		Arg: number
		Rune: $.Slice<number>
	}

	constructor(init?: Partial<{Op?: InstOp, Out?: number, Arg?: number, Rune?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Op: init?.Op ?? (0 as InstOp),
			Out: init?.Out ?? (0 as number),
			Arg: init?.Arg ?? (0 as number),
			Rune: init?.Rune ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Inst {
		return new Inst(this, true)
	}

	public __goscriptAssign(source: Inst): void {
		const target = this._fields
		const values = source._fields
		target.Op = values.Op
		target.Out = values.Out
		target.Arg = values.Arg
		target.Rune = values.Rune
	}

	public MatchEmptyWidth(before: number, after: number): boolean {
		const i: Inst | $.VarRef<Inst> | null = this;
		switch ($.uint($.pointerValue<Inst>(i).Arg, 8)) {
			case 1:
			{
				return (before == 10) || (before == -1)
				break
			}
			case 2:
			{
				return (after == 10) || (after == -1)
				break
			}
			case 4:
			{
				return before == -1
				break
			}
			case 8:
			{
				return after == -1
				break
			}
			case 16:
			{
				return IsWordChar(before) != IsWordChar(after)
				break
			}
			case 32:
			{
				return IsWordChar(before) == IsWordChar(after)
				break
			}
		}
		$.panic("unknown empty width arg")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public MatchRune(r: number): boolean {
		const i: Inst | $.VarRef<Inst> | null = this;
		return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Inst).MatchRunePos(r) : Inst.prototype.MatchRunePos.call(i, r)) != -1
	}

	public MatchRunePos(r: number): number {
		const i: Inst | $.VarRef<Inst> | null = this;
		const i$: Inst = i == null ? $.pointerTarget<Inst>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Inst>(i)
		let rune: $.Slice<number> = (i$ as Inst).Rune

		switch ($.sliceLen(rune)) {
			case 0:
			{
				return -1
				break
			}
			case 1:
			{
				let r0 = $.arrayIndex(rune!, 0)
				if (r == r0) {
					return 0
				}
				if ($.uint(($.uint((i$ as Inst).Arg, 16) & 1), 16) != 0) {
					for (let r1 = unicode.SimpleFold(r0); r1 != r0; r1 = unicode.SimpleFold(r1)) {
						if (r == r1) {
							return 0
						}
					}
				}
				return -1
				break
			}
			case 2:
			{
				if ((r >= $.arrayIndex(rune!, 0)) && (r <= $.arrayIndex(rune!, 1))) {
					return 0
				}
				return -1
				break
			}
			case 4:
			case 6:
			case 8:
			{
				for (let __goscriptSliceWindow0 = $.sliceRange(rune), j = 0; j < __goscriptSliceWindow0.length; j = j + (2)) {
					if (r < ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] as number)) {
						return -1
					}
					if (r <= ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j + 1)] as number)) {
						return globalThis.Math.trunc(j / 2)
					}
				}
				return -1
				break
			}
		}

		// Otherwise binary search.
		let lo = 0
		let hi = globalThis.Math.trunc($.sliceLen(rune) / 2)
		for (let __goscriptSliceWindow1 = $.sliceRange(rune); lo < hi; ) {
			let m: number = $.int($.uint($.uint64Shr($.uint(lo + hi, 64), 1n), 64))
			{
				let c = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, 2 * m)] as number)
				if (c <= r) {
					if (r <= ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, (2 * m) + 1)] as number)) {
						return m
					}
					lo = m + 1
				} else {
					hi = m
				}
			}
		}
		return -1
	}

	public String(): string {
		const i: Inst | $.VarRef<Inst> | null = this;
		let b: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		dumpInst(b, i)
		return b.value.String()
	}

	public op(): InstOp {
		const i: Inst | $.VarRef<Inst> | null = this;
		let op = $.pointerValue<Inst>(i).Op
		switch (op) {
			case 8:
			case 9:
			case 10:
			{
				op = 7
				break
			}
		}
		return op
	}

	static __typeInfo = $.registerStructType(
		"syntax.Inst",
		() => new Inst(),
		() => [$.methodSignature("MatchEmptyWidth", [["before", /* @__PURE__ */ $.basicType("int32")], ["after", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MatchRune", [["r", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MatchRunePos", [["r", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("op", [], [/* @__PURE__ */ $.basicType("uint8", "syntax.InstOp")], true)],
		Inst,
		() => [/* @__PURE__ */ $.structField("Op", /* @__PURE__ */ $.basicType("uint8", "syntax.InstOp"), [0], 0, true), /* @__PURE__ */ $.structField("Out", /* @__PURE__ */ $.basicType("uint32"), [1], 4, true), /* @__PURE__ */ $.structField("Arg", /* @__PURE__ */ $.basicType("uint32"), [2], 8, true), /* @__PURE__ */ $.structField("Rune", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), [3], 16, true)]
	)
}

export const InstAlt: InstOp = 0

export const InstAltMatch: InstOp = 1

export const InstCapture: InstOp = 2

export const InstEmptyWidth: InstOp = 3

export const InstMatch: InstOp = 4

export const InstFail: InstOp = 5

export const InstNop: InstOp = 6

export const InstRune: InstOp = 7

export const InstRune1: InstOp = 8

export const InstRuneAny: InstOp = 9

export const InstRuneAnyNotNL: InstOp = 10

export const EmptyBeginLine: EmptyOp = 1

export const EmptyEndLine: EmptyOp = 2

export const EmptyBeginText: EmptyOp = 4

export const EmptyEndText: EmptyOp = 8

export const EmptyWordBoundary: EmptyOp = 16

export const EmptyNoWordBoundary: EmptyOp = 32

export const noMatch: number = -1

export let instOpNames: $.Slice<string> = $.arrayToSlice<string>(["InstAlt", "InstAltMatch", "InstCapture", "InstEmptyWidth", "InstMatch", "InstFail", "InstNop", "InstRune", "InstRune1", "InstRuneAny", "InstRuneAnyNotNL"])

export function __goscript_set_instOpNames(__goscriptValue: $.Slice<string>): void {
	instOpNames = __goscriptValue
}

export function InstOp_String(i: InstOp): string {
	if ($.uint(i, 64) >= $.uint($.sliceLen(instOpNames), 64)) {
		return ""
	}
	return $.arrayIndex(instOpNames!, i)
}

export function EmptyOpContext(r1: number, r2: number): EmptyOp {
	let op: EmptyOp = 32
	let boundary: number = 0
	switch ((true as boolean)) {
		case IsWordChar(r1):
		{
			boundary = 1
			break
		}
		case r1 == 10:
		{
			op = op | (1)
			break
		}
		case r1 < 0:
		{
			op = op | (5)
			break
		}
	}
	switch ((true as boolean)) {
		case IsWordChar(r2):
		{
			boundary = boundary ^ (1)
			break
		}
		case r2 == 10:
		{
			op = op | (2)
			break
		}
		case r2 < 0:
		{
			op = op | (10)
			break
		}
	}
	if (boundary != 0) {
		op = op ^ (48)
	}
	return op
}

export function IsWordChar(r: number): boolean {
	// Test for lowercase letters first, as these occur more
	// frequently than uppercase letters in common cases.
	return ((((97 <= r) && (r <= 122)) || ((65 <= r) && (r <= 90))) || ((48 <= r) && (r <= 57))) || (r == 95)
}

export function bw(b: strings.Builder | $.VarRef<strings.Builder> | null, args: $.Slice<string>): void {
	for (let __goscriptRangeTarget0 = args, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let s = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), s)
	}
}

export function dumpProg(b: strings.Builder | $.VarRef<strings.Builder> | null, p: Prog | $.VarRef<Prog> | null): void {
	const p$: Prog = p == null ? $.pointerTarget<Prog>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Prog>(p)
	for (let __goscriptRangeTarget1 = (p$ as Prog).Inst, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), j = 0; j < __goscriptRangeWindow1.length; j++) {
		let i: Inst | $.VarRef<Inst> | null = $.indexRef((p$ as Prog).Inst!, j)
		let pc = strconv.Itoa(j)
		if ($.stringLen(pc) < 3) {
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), $.sliceStringOrBytes("   ", $.stringLen(pc), undefined))
		}
		if (j == (p$ as Prog).Start) {
			pc = $.concatString(pc, "*")
		}
		bw(b, $.arrayToSlice<string>([pc, "\t"]))
		dumpInst(b, i)
		bw(b, $.arrayToSlice<string>(["\n"]))
	}
}

export function u32(i: number): string {
	return strconv.FormatUint($.uint64(i), 10)
}

export function dumpInst(b: strings.Builder | $.VarRef<strings.Builder> | null, i: Inst | $.VarRef<Inst> | null): void {
	const i$: Inst = i == null ? $.pointerTarget<Inst>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Inst>(i)
	switch ((i$ as Inst).Op) {
		case 0:
		{
			bw(b, $.arrayToSlice<string>(["alt -> ", u32((i$ as Inst).Out), ", ", u32((i$ as Inst).Arg)]))
			break
		}
		case 1:
		{
			bw(b, $.arrayToSlice<string>(["altmatch -> ", u32((i$ as Inst).Out), ", ", u32((i$ as Inst).Arg)]))
			break
		}
		case 2:
		{
			bw(b, $.arrayToSlice<string>(["cap ", u32((i$ as Inst).Arg), " -> ", u32((i$ as Inst).Out)]))
			break
		}
		case 3:
		{
			bw(b, $.arrayToSlice<string>(["empty ", u32((i$ as Inst).Arg), " -> ", u32((i$ as Inst).Out)]))
			break
		}
		case 4:
		{
			bw(b, $.arrayToSlice<string>(["match"]))
			break
		}
		case 5:
		{
			bw(b, $.arrayToSlice<string>(["fail"]))
			break
		}
		case 6:
		{
			bw(b, $.arrayToSlice<string>(["nop -> ", u32((i$ as Inst).Out)]))
			break
		}
		case 7:
		{
			if ((i$ as Inst).Rune == null) {
				// shouldn't happen
				bw(b, $.arrayToSlice<string>(["rune <nil>"]))
			}
			bw(b, $.arrayToSlice<string>(["rune ", strconv.QuoteToASCII($.runesToString((i$ as Inst).Rune))]))
			if ($.uint(($.uint((i$ as Inst).Arg, 16) & 1), 16) != 0) {
				bw(b, $.arrayToSlice<string>(["/i"]))
			}
			bw(b, $.arrayToSlice<string>([" -> ", u32((i$ as Inst).Out)]))
			break
		}
		case 8:
		{
			bw(b, $.arrayToSlice<string>(["rune1 ", strconv.QuoteToASCII($.runesToString((i$ as Inst).Rune)), " -> ", u32((i$ as Inst).Out)]))
			break
		}
		case 9:
		{
			bw(b, $.arrayToSlice<string>(["any -> ", u32((i$ as Inst).Out)]))
			break
		}
		case 10:
		{
			bw(b, $.arrayToSlice<string>(["anynotnl -> ", u32((i$ as Inst).Out)]))
			break
		}
	}
}
