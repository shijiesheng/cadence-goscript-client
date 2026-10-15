// Generated file based on regexp.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as syntax from "@goscript/regexp/syntax/index.js"

import * as sync from "@goscript/sync/index.js"

import * as io from "@goscript/io/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as iter from "@goscript/iter/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings2 from "@goscript/strings/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_backtrack from "./backtrack.gs.ts"

import * as __goscript_exec from "./exec.gs.ts"

import * as __goscript_onepass from "./onepass.gs.ts"
import "@goscript/regexp/syntax/index.js"
import "@goscript/sync/index.js"
import "@goscript/io/index.js"
import "@goscript/bytes/index.js"
import "@goscript/iter/index.js"
import "@goscript/slices/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/index.js"
import "@goscript/unicode/utf8/index.js"
import "./backtrack.gs.ts"
import "./exec.gs.ts"
import "./onepass.gs.ts"

export type input = {
	canCheckPrefix(): boolean
	context(pos: number): __goscript_exec.lazyFlag
	hasPrefix(re: Regexp | $.VarRef<Regexp> | null): boolean
	index(re: Regexp | $.VarRef<Regexp> | null, pos: number): number
	step(pos: number): [number, number] | globalThis.Promise<[number, number]>
}

$.registerInterfaceType(
	"regexp.input",
	null,
	[$.methodSignature("canCheckPrefix", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("context", [["pos", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint64", "regexp.lazyFlag")]), $.methodSignature("hasPrefix", [["re", /* @__PURE__ */ $.pointerType("regexp.Regexp")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("index", [["re", /* @__PURE__ */ $.pointerType("regexp.Regexp")], ["pos", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("step", [["pos", /* @__PURE__ */ $.basicType("int")]], [["r", /* @__PURE__ */ $.basicType("int32")], ["width", /* @__PURE__ */ $.basicType("int")]])]
);

export class Regexp {
	public get expr(): string {
		return this._fields.expr
	}

	public set expr(value: string) {
		this._fields.expr = value
	}

	public get prog(): syntax.Prog | $.VarRef<syntax.Prog> | null {
		return this._fields.prog
	}

	public set prog(value: syntax.Prog | $.VarRef<syntax.Prog> | null) {
		this._fields.prog = value
	}

	public get onepass(): __goscript_onepass.onePassProg | $.VarRef<__goscript_onepass.onePassProg> | null {
		return this._fields.onepass
	}

	public set onepass(value: __goscript_onepass.onePassProg | $.VarRef<__goscript_onepass.onePassProg> | null) {
		this._fields.onepass = value
	}

	public get numSubexp(): number {
		return this._fields.numSubexp
	}

	public set numSubexp(value: number) {
		this._fields.numSubexp = value
	}

	public get maxBitStateLen(): number {
		return this._fields.maxBitStateLen
	}

	public set maxBitStateLen(value: number) {
		this._fields.maxBitStateLen = value
	}

	public get subexpNames(): $.Slice<string> {
		return this._fields.subexpNames
	}

	public set subexpNames(value: $.Slice<string>) {
		this._fields.subexpNames = value
	}

	public get prefix(): string {
		return this._fields.prefix
	}

	public set prefix(value: string) {
		this._fields.prefix = value
	}

	public get prefixBytes(): $.Slice<number> {
		return this._fields.prefixBytes
	}

	public set prefixBytes(value: $.Slice<number>) {
		this._fields.prefixBytes = value
	}

	public get prefixRune(): number {
		return this._fields.prefixRune
	}

	public set prefixRune(value: number) {
		this._fields.prefixRune = value
	}

	public get prefixEnd(): number {
		return this._fields.prefixEnd
	}

	public set prefixEnd(value: number) {
		this._fields.prefixEnd = value
	}

	public get mpool(): number {
		return this._fields.mpool
	}

	public set mpool(value: number) {
		this._fields.mpool = value
	}

	public get matchcap(): number {
		return this._fields.matchcap
	}

	public set matchcap(value: number) {
		this._fields.matchcap = value
	}

	public get prefixComplete(): boolean {
		return this._fields.prefixComplete
	}

	public set prefixComplete(value: boolean) {
		this._fields.prefixComplete = value
	}

	public get cond(): syntax.EmptyOp {
		return this._fields.cond
	}

	public set cond(value: syntax.EmptyOp) {
		this._fields.cond = value
	}

	public get minInputLen(): number {
		return this._fields.minInputLen
	}

	public set minInputLen(value: number) {
		this._fields.minInputLen = value
	}

	// This field can be modified by the Longest method,
	// but it is otherwise read-only.
	public get longest(): boolean {
		return this._fields.longest
	}

	public set longest(value: boolean) {
		this._fields.longest = value
	}

	public _fields: {
		expr: string
		prog: syntax.Prog | $.VarRef<syntax.Prog> | null
		onepass: __goscript_onepass.onePassProg | $.VarRef<__goscript_onepass.onePassProg> | null
		numSubexp: number
		maxBitStateLen: number
		subexpNames: $.Slice<string>
		prefix: string
		prefixBytes: $.Slice<number>
		prefixRune: number
		prefixEnd: number
		mpool: number
		matchcap: number
		prefixComplete: boolean
		cond: syntax.EmptyOp
		minInputLen: number
		longest: boolean
	}

	constructor(init?: Partial<{expr?: string, prog?: syntax.Prog | $.VarRef<syntax.Prog> | null, onepass?: __goscript_onepass.onePassProg | $.VarRef<__goscript_onepass.onePassProg> | null, numSubexp?: number, maxBitStateLen?: number, subexpNames?: $.Slice<string>, prefix?: string, prefixBytes?: $.Slice<number>, prefixRune?: number, prefixEnd?: number, mpool?: number, matchcap?: number, prefixComplete?: boolean, cond?: syntax.EmptyOp, minInputLen?: number, longest?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			expr: init?.expr ?? ("" as string),
			prog: init?.prog ?? (null! as syntax.Prog | $.VarRef<syntax.Prog> | null),
			onepass: init?.onepass ?? (null! as __goscript_onepass.onePassProg | $.VarRef<__goscript_onepass.onePassProg> | null),
			numSubexp: init?.numSubexp ?? (0 as number),
			maxBitStateLen: init?.maxBitStateLen ?? (0 as number),
			subexpNames: init?.subexpNames ?? (null! as $.Slice<string>),
			prefix: init?.prefix ?? ("" as string),
			prefixBytes: init?.prefixBytes ?? (null! as $.Slice<number>),
			prefixRune: init?.prefixRune ?? (0 as number),
			prefixEnd: init?.prefixEnd ?? (0 as number),
			mpool: init?.mpool ?? (0 as number),
			matchcap: init?.matchcap ?? (0 as number),
			prefixComplete: init?.prefixComplete ?? (false as boolean),
			cond: init?.cond ?? (0 as syntax.EmptyOp),
			minInputLen: init?.minInputLen ?? (0 as number),
			longest: init?.longest ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Regexp {
		return new Regexp(this, true)
	}

	public __goscriptAssign(source: Regexp): void {
		const target = this._fields
		const values = source._fields
		target.expr = values.expr
		target.prog = values.prog
		target.onepass = values.onepass
		target.numSubexp = values.numSubexp
		target.maxBitStateLen = values.maxBitStateLen
		target.subexpNames = values.subexpNames
		target.prefix = values.prefix
		target.prefixBytes = values.prefixBytes
		target.prefixRune = values.prefixRune
		target.prefixEnd = values.prefixEnd
		target.mpool = values.mpool
		target.matchcap = values.matchcap
		target.prefixComplete = values.prefixComplete
		target.cond = values.cond
		target.minInputLen = values.minInputLen
		target.longest = values.longest
	}

	public AppendText(b: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return [$.appendSlice(b, $.stringToBytes((re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).String() : Regexp.prototype.String.call(re))), $.byteSliceHint), null]
	}

	public Copy(): Regexp | $.VarRef<Regexp> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		let re2 = $.varRef(($.pointerValue<Regexp>(re)).clone())
		return re2
	}

	public Expand(dst: $.Slice<number>, template: $.Slice<number>, src: $.Slice<number>, match: $.Slice<number>): $.Slice<number> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).expand(dst, $.bytesToString(template), src, "", match) : Regexp.prototype.expand.call(re, dst, $.bytesToString(template), src, "", match))
	}

	public ExpandString(dst: $.Slice<number>, template: string, src: string, match: $.Slice<number>): $.Slice<number> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).expand(dst, template, null, src, match) : Regexp.prototype.expand.call(re, dst, template, null, src, match))
	}

	public async Find(b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		let dstCap: number[] = $.arrayValue(globalThis.Array.from({ length: 2 }, () => 0))
		let a: $.Slice<number> = await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).find(null, b, "", 0, 2, $.goSlice(dstCap, undefined, 0)) : Regexp.prototype.find.call(re, null, b, "", 0, 2, $.goSlice(dstCap, undefined, 0)))
		if (a == null) {
			return null
		}
		return $.goSlice(b, $.arrayIndex(a!, 0), $.arrayIndex(a!, 1), $.arrayIndex(a!, 1))
	}

	public FindAll(b: $.Slice<number>, n: number): $.Slice<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (slices.Collect((re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).all(b, n) : Regexp.prototype.all.call(re, b, n))) as $.Slice<$.Slice<number>>)
	}

	public FindAllIndex(b: $.Slice<number>, n: number): $.Slice<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (slices.Collect((re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).allIndex(b, n) : Regexp.prototype.allIndex.call(re, b, n))) as $.Slice<$.Slice<number>>)
	}

	public FindAllString(s: string, n: number): $.Slice<string> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (slices.Collect((re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).allString(s, n) : Regexp.prototype.allString.call(re, s, n))) as $.Slice<string>)
	}

	public FindAllStringIndex(s: string, n: number): $.Slice<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (slices.Collect((re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).allStringIndex(s, n) : Regexp.prototype.allStringIndex.call(re, s, n))) as $.Slice<$.Slice<number>>)
	}

	public FindAllStringSubmatch(s: string, n: number): $.Slice<$.Slice<string>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (slices.Collect((re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).allStringSubmatch(s, n) : Regexp.prototype.allStringSubmatch.call(re, s, n))) as $.Slice<$.Slice<string>>)
	}

	public FindAllStringSubmatchIndex(s: string, n: number): $.Slice<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (slices.Collect((re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).allStringSubmatchIndex(s, n) : Regexp.prototype.allStringSubmatchIndex.call(re, s, n))) as $.Slice<$.Slice<number>>)
	}

	public FindAllSubmatch(b: $.Slice<number>, n: number): $.Slice<$.Slice<$.Slice<number>>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (slices.Collect((re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).allSubmatch(b, n) : Regexp.prototype.allSubmatch.call(re, b, n))) as $.Slice<$.Slice<$.Slice<number>>>)
	}

	public FindAllSubmatchIndex(b: $.Slice<number>, n: number): $.Slice<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (slices.Collect((re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).allSubmatchIndex(b, n) : Regexp.prototype.allSubmatchIndex.call(re, b, n))) as $.Slice<$.Slice<number>>)
	}

	public async FindIndex(b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		let m: $.Slice<number> = null! as $.Slice<number>
		m = await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).find(null, b, "", 0, 2, null) : Regexp.prototype.find.call(re, null, b, "", 0, 2, null))
		if (m == null) {
			return null
		}
		return $.goSlice(m, 0, 2)
	}

	public async FindReaderIndex(r: io.RuneReader | null): globalThis.Promise<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		let m: $.Slice<number> = null! as $.Slice<number>
		m = await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).find(r, null, "", 0, 2, null) : Regexp.prototype.find.call(re, r, null, "", 0, 2, null))
		if (m == null) {
			return null
		}
		return $.goSlice(m, 0, 2)
	}

	public async FindReaderSubmatchIndex(r: io.RuneReader | null): globalThis.Promise<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return Regexp.prototype.pad.call(re, await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).find(r, null, "", 0, $.pointerValue<syntax.Prog>($.pointerValue<Regexp>(re).prog).NumCap, null) : Regexp.prototype.find.call(re, r, null, "", 0, $.pointerValue<syntax.Prog>($.pointerValue<Regexp>(re).prog).NumCap, null)))
	}

	public async FindString(s: string): globalThis.Promise<string> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		let dstCap: number[] = $.arrayValue(globalThis.Array.from({ length: 2 }, () => 0))
		let a: $.Slice<number> = await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).find(null, null, s, 0, 2, $.goSlice(dstCap, undefined, 0)) : Regexp.prototype.find.call(re, null, null, s, 0, 2, $.goSlice(dstCap, undefined, 0)))
		if (a == null) {
			return ""
		}
		return $.sliceStringOrBytes(s, $.arrayIndex(a!, 0), $.arrayIndex(a!, 1))
	}

	public async FindStringIndex(s: string): globalThis.Promise<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		let m: $.Slice<number> = null! as $.Slice<number>
		m = await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).find(null, null, s, 0, 2, null) : Regexp.prototype.find.call(re, null, null, s, 0, 2, null))
		if (m == null) {
			return null
		}
		return $.goSlice(m, 0, 2)
	}

	public async FindStringSubmatch(s: string): globalThis.Promise<$.Slice<string>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		const re$: Regexp = re == null ? $.pointerTarget<Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<Regexp>(re)
		let dstCap: number[] = $.arrayValue(globalThis.Array.from({ length: 4 }, () => 0))
		let a: $.Slice<number> = await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).find(null, null, s, 0, $.pointerValue<syntax.Prog>((re$ as Regexp).prog).NumCap, $.goSlice(dstCap, undefined, 0)) : Regexp.prototype.find.call(re, null, null, s, 0, $.pointerValue<syntax.Prog>((re$ as Regexp).prog).NumCap, $.goSlice(dstCap, undefined, 0)))
		if (a == null) {
			return null
		}
		let ret: $.Slice<string> = $.makeSlice<string>(1 + (re$ as Regexp).numSubexp, undefined, "string")
		for (let __goscriptRangeTarget0 = ret, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(a), i = 0; i < __goscriptRangeWindow0.length; i++) {
			if (((2 * i) < __goscriptSliceWindow0.length) && (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, 2 * i)] as number) >= 0)) {
				;(__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] = $.sliceStringOrBytes(s, ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, 2 * i)] as number), ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, (2 * i) + 1)] as number))
			}
		}
		return ret
	}

	public async FindStringSubmatchIndex(s: string): globalThis.Promise<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return Regexp.prototype.pad.call(re, await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).find(null, null, s, 0, $.pointerValue<syntax.Prog>($.pointerValue<Regexp>(re).prog).NumCap, null) : Regexp.prototype.find.call(re, null, null, s, 0, $.pointerValue<syntax.Prog>($.pointerValue<Regexp>(re).prog).NumCap, null)))
	}

	public async FindSubmatch(b: $.Slice<number>): globalThis.Promise<$.Slice<$.Slice<number>>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		const re$: Regexp = re == null ? $.pointerTarget<Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<Regexp>(re)
		let dstCap: number[] = $.arrayValue(globalThis.Array.from({ length: 4 }, () => 0))
		let m: $.Slice<number> = await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).find(null, b, "", 0, $.pointerValue<syntax.Prog>((re$ as Regexp).prog).NumCap, $.goSlice(dstCap, undefined, 0)) : Regexp.prototype.find.call(re, null, b, "", 0, $.pointerValue<syntax.Prog>((re$ as Regexp).prog).NumCap, $.goSlice(dstCap, undefined, 0)))
		if (m == null) {
			return null
		}
		let sub: $.Slice<$.Slice<number>> = $.makeSlice<$.Slice<number>>(1 + (re$ as Regexp).numSubexp)
		for (let __goscriptRangeTarget1 = sub, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow1 = $.sliceRange(m), i = 0; i < __goscriptRangeWindow1.length; i++) {
			if (((2 * i) < __goscriptSliceWindow1.length) && (((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, 2 * i)] as number) >= 0)) {
				;(__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] = $.goSlice(b, ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, 2 * i)] as number), ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, (2 * i) + 1)] as number), ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, (2 * i) + 1)] as number))
			}
		}
		return sub
	}

	public async FindSubmatchIndex(b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return Regexp.prototype.pad.call(re, await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).find(null, b, "", 0, $.pointerValue<syntax.Prog>($.pointerValue<Regexp>(re).prog).NumCap, null) : Regexp.prototype.find.call(re, null, b, "", 0, $.pointerValue<syntax.Prog>($.pointerValue<Regexp>(re).prog).NumCap, null)))
	}

	public LiteralPrefix(): [string, boolean] {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		let prefix: string = ""
		let complete: boolean = false
		const re$: Regexp = re == null ? $.pointerTarget<Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<Regexp>(re)
		return [(re$ as Regexp).prefix, (re$ as Regexp).prefixComplete]
	}

	public Longest(): void {
		let re: Regexp | $.VarRef<Regexp> | null = this;
		$.pointerValue<Regexp>(re).longest = true
	}

	public MarshalText(): [$.Slice<number>, $.GoError] {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).AppendText(null) : Regexp.prototype.AppendText.call(re, null))
	}

	public async Match(b: $.Slice<number>): globalThis.Promise<boolean> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).doMatch(null, b, "") : Regexp.prototype.doMatch.call(re, null, b, ""))
	}

	public async MatchReader(r: io.RuneReader | null): globalThis.Promise<boolean> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).doMatch(r, null, "") : Regexp.prototype.doMatch.call(re, r, null, ""))
	}

	public async MatchString(s: string): globalThis.Promise<boolean> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).doMatch(null, null, s) : Regexp.prototype.doMatch.call(re, null, null, s))
	}

	public NumSubexp(): number {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return $.pointerValue<Regexp>(re).numSubexp
	}

	public async ReplaceAll(src: $.Slice<number>, repl: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		let n = 2
		if (bytes.IndexByte(repl, 36) >= 0) {
			n = 2 * ($.pointerValue<Regexp>(re).numSubexp + 1)
		}
		let srepl = ""
		let b: $.Slice<number> = await Regexp.prototype.replaceAll.call(re, src, "", n, $.functionValue((dst: $.Slice<number>, match: $.Slice<number>): $.Slice<number> => {
			if ($.stringLen(srepl) != $.sliceLen(repl)) {
				srepl = $.bytesToString(repl)
			}
			return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).expand(dst, srepl, src, "", match) : Regexp.prototype.expand.call(re, dst, srepl, src, "", match))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
		return b
	}

	public async ReplaceAllFunc(src: $.Slice<number>, repl: ((_p0: $.Slice<number>) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null): globalThis.Promise<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return Regexp.prototype.replaceAll.call(re, src, "", 2, $.functionValue(async (dst: $.Slice<number>, match: $.Slice<number>): globalThis.Promise<$.Slice<number>> => {
			return $.appendSlice(dst, ((__goscriptAwait = repl!($.goSlice(src, $.arrayIndex(match!, 0), $.arrayIndex(match!, 1))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>), $.byteSliceHint)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
	}

	public async ReplaceAllLiteral(src: $.Slice<number>, repl: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return Regexp.prototype.replaceAll.call(re, src, "", 2, $.functionValue((dst: $.Slice<number>, match: $.Slice<number>): $.Slice<number> => {
			return $.appendSlice(dst, repl, $.byteSliceHint)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
	}

	public async ReplaceAllLiteralString(src: string, repl: string): globalThis.Promise<string> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return $.bytesToString(await Regexp.prototype.replaceAll.call(re, null, src, 2, $.functionValue((dst: $.Slice<number>, match: $.Slice<number>): $.Slice<number> => {
			return $.appendSlice(dst, $.stringToBytes(repl), $.byteSliceHint)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo))))
	}

	public async ReplaceAllString(src: string, repl: string): globalThis.Promise<string> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		let n = 2
		if (strings2.Contains(repl, "$")) {
			n = 2 * ($.pointerValue<Regexp>(re).numSubexp + 1)
		}
		let b: $.Slice<number> = await Regexp.prototype.replaceAll.call(re, null, src, n, $.functionValue((dst: $.Slice<number>, match: $.Slice<number>): $.Slice<number> => {
			return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).expand(dst, repl, null, src, match) : Regexp.prototype.expand.call(re, dst, repl, null, src, match))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
		return $.bytesToString(b)
	}

	public async ReplaceAllStringFunc(src: string, repl: ((_p0: string) => string | globalThis.Promise<string>) | null): globalThis.Promise<string> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		let b: $.Slice<number> = await Regexp.prototype.replaceAll.call(re, null, src, 2, $.functionValue(async (dst: $.Slice<number>, match: $.Slice<number>): globalThis.Promise<$.Slice<number>> => {
			return $.appendSlice(dst, $.stringToBytes((__goscriptAwait = repl!($.sliceStringOrBytes(src, $.arrayIndex(match!, 0), $.arrayIndex(match!, 1))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), $.byteSliceHint)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
		return $.bytesToString(b)
	}

	public Split(s: string, n: number): $.Slice<string> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		if (n == 0) {
			return null
		}
		if (($.stringLen($.pointerValue<Regexp>(re).expr) > 0) && ($.stringLen(s) == 0)) {
			return $.arrayToSlice<string>([""])
		}

		let matches: $.Slice<$.Slice<number>> = (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).FindAllStringIndex(s, n) : Regexp.prototype.FindAllStringIndex.call(re, s, n))
		let __goscriptShadow0: $.Slice<string> = $.makeSlice<string>(0, $.sliceLen(matches), "string")

		let beg = 0
		let end = 0
		for (let __goscriptRangeTarget2 = matches, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let match = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as $.Slice<number>)
			if ((n > 0) && ($.sliceLen(__goscriptShadow0) >= (n - 1))) {
				break
			}

			end = $.arrayIndex(match!, 0)
			if ($.arrayIndex(match!, 1) != 0) {
				__goscriptShadow0 = $.appendOne(__goscriptShadow0, $.sliceStringOrBytes(s, beg, end))
			}
			beg = $.arrayIndex(match!, 1)
		}

		if (end != $.stringLen(s)) {
			__goscriptShadow0 = $.appendOne(__goscriptShadow0, $.sliceStringOrBytes(s, beg, undefined))
		}

		return __goscriptShadow0
	}

	public String(): string {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return $.pointerValue<Regexp>(re).expr
	}

	public SubexpIndex(name: string): number {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		if (!$.stringEqual(name, "")) {
			for (let __goscriptRangeTarget3 = $.pointerValue<Regexp>(re).subexpNames, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
				let s = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as string)
				if ($.stringEqual(name, s)) {
					return i
				}
			}
		}
		return -1
	}

	public SubexpNames(): $.Slice<string> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return $.pointerValue<Regexp>(re).subexpNames
	}

	public async UnmarshalText(text: $.Slice<number>): globalThis.Promise<$.GoError> {
		let re: Regexp | $.VarRef<Regexp> | null = this;
		let __goscriptTuple0: any = await Compile($.bytesToString(text))
		let newRE: Regexp | $.VarRef<Regexp> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return err
		}
		$.assignStruct($.pointerValue<Regexp>(re), $.pointerValue<Regexp>(newRE))
		return null
	}

	public _All(b: $.Slice<number>): iter.Seq<$.Slice<number>> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).all(b, -1) : Regexp.prototype.all.call(re, b, -1))
	}

	public _AllIndex(b: $.Slice<number>): iter.Seq<$.Slice<number>> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).allIndex(b, -1) : Regexp.prototype.allIndex.call(re, b, -1))
	}

	public _AllString(s: string): iter.Seq<string> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).allString(s, -1) : Regexp.prototype.allString.call(re, s, -1))
	}

	public _AllStringIndex(s: string): iter.Seq<$.Slice<number>> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).allStringIndex(s, -1) : Regexp.prototype.allStringIndex.call(re, s, -1))
	}

	public _AllStringSubmatch(s: string): iter.Seq<$.Slice<string>> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).allStringSubmatch(s, -1) : Regexp.prototype.allStringSubmatch.call(re, s, -1))
	}

	public _AllStringSubmatchIndex(s: string): iter.Seq<$.Slice<number>> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).allStringSubmatchIndex(s, -1) : Regexp.prototype.allStringSubmatchIndex.call(re, s, -1))
	}

	public _AllSubmatch(b: $.Slice<number>): iter.Seq<$.Slice<$.Slice<number>>> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).allSubmatch(b, -1) : Regexp.prototype.allSubmatch.call(re, b, -1))
	}

	public _AllSubmatchIndex(b: $.Slice<number>): iter.Seq<$.Slice<number>> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).allSubmatchIndex(b, -1) : Regexp.prototype.allSubmatchIndex.call(re, b, -1))
	}

	public all(b: $.Slice<number>, n: number): iter.Seq<$.Slice<number>> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return $.functionValue(async (_yield: ((_p0: $.Slice<number>) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> => {
			let __goscriptRangeReturn0 = false
			;await (async () => {
				await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).matches("", b, n, 2) : Regexp.prototype.matches.call(re, "", b, n, 2))!(async (m) => {
					if (!(__goscriptAwait = _yield!($.goSlice(b, $.arrayIndex(m!, 0), $.arrayIndex(m!, 1), $.arrayIndex(m!, 1))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						return false
					}
					return true
				})
			})()
			if (__goscriptRangeReturn0) {
				return
			}
		}, ({ kind: $.TypeKind.Function, params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))
	}

	public allIndex(b: $.Slice<number>, n: number): iter.Seq<$.Slice<number>> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return $.functionValue(async (_yield: ((_p0: $.Slice<number>) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> => {
			let __goscriptRangeReturn1 = false
			;await (async () => {
				await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).matches("", b, n, 2) : Regexp.prototype.matches.call(re, "", b, n, 2))!(async (m) => {
					if (!(__goscriptAwait = _yield!($.arrayToSlice<number>([$.arrayIndex(m!, 0), $.arrayIndex(m!, 1)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						return false
					}
					return true
				})
			})()
			if (__goscriptRangeReturn1) {
				return
			}
		}, ({ kind: $.TypeKind.Function, params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))
	}

	public allString(s: string, n: number): iter.Seq<string> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return $.functionValue(async (_yield: ((_p0: string) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> => {
			let __goscriptRangeReturn2 = false
			;await (async () => {
				await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).matches(s, null, n, 2) : Regexp.prototype.matches.call(re, s, null, n, 2))!(async (m) => {
					if (!(__goscriptAwait = _yield!($.sliceStringOrBytes(s, $.arrayIndex(m!, 0), $.arrayIndex(m!, 1))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						return false
					}
					return true
				})
			})()
			if (__goscriptRangeReturn2) {
				return
			}
		}, ({ kind: $.TypeKind.Function, params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))
	}

	public allStringIndex(s: string, n: number): iter.Seq<$.Slice<number>> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return $.functionValue(async (_yield: ((_p0: $.Slice<number>) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> => {
			let __goscriptRangeReturn3 = false
			;await (async () => {
				await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).matches(s, null, n, 2) : Regexp.prototype.matches.call(re, s, null, n, 2))!(async (m) => {
					if (!(__goscriptAwait = _yield!($.arrayToSlice<number>([$.arrayIndex(m!, 0), $.arrayIndex(m!, 1)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						return false
					}
					return true
				})
			})()
			if (__goscriptRangeReturn3) {
				return
			}
		}, ({ kind: $.TypeKind.Function, params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))
	}

	public allStringSubmatch(s: string, n: number): iter.Seq<$.Slice<string>> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return $.functionValue(async (_yield: ((_p0: $.Slice<string>) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> => {
			let __goscriptRangeReturn4 = false
			;await (async () => {
				await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).matches(s, null, n, $.pointerValue<syntax.Prog>($.pointerValue<Regexp>(re).prog).NumCap) : Regexp.prototype.matches.call(re, s, null, n, $.pointerValue<syntax.Prog>($.pointerValue<Regexp>(re).prog).NumCap))!(async (m) => {
					let sub: $.Slice<string> = $.makeSlice<string>(globalThis.Math.trunc($.sliceLen(m) / 2), undefined, "string")
					for (let __goscriptRangeTarget4 = sub, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __goscriptSliceWindow2 = $.sliceRange(m), i = 0; i < __goscriptRangeWindow4.length; i++) {
						if (((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, 2 * i)] as number) >= 0) {
							$.sliceElems(sub!)[$.sliceSlot(sub!, i)] = $.sliceStringOrBytes(s, ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, 2 * i)] as number), ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, (2 * i) + 1)] as number))
						}
					}
					if (!(__goscriptAwait = _yield!(sub), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						return false
					}
					return true
				})
			})()
			if (__goscriptRangeReturn4) {
				return
			}
		}, ({ kind: $.TypeKind.Function, params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))
	}

	public allStringSubmatchIndex(s: string, n: number): iter.Seq<$.Slice<number>> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return $.functionValue(async (_yield: ((_p0: $.Slice<number>) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> => {
			let __goscriptRangeReturn5 = false
			;await (async () => {
				await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).matches(s, null, n, $.pointerValue<syntax.Prog>($.pointerValue<Regexp>(re).prog).NumCap) : Regexp.prototype.matches.call(re, s, null, n, $.pointerValue<syntax.Prog>($.pointerValue<Regexp>(re).prog).NumCap))!(async (m) => {
					if (!(__goscriptAwait = _yield!(slices.Clone(m)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						return false
					}
					return true
				})
			})()
			if (__goscriptRangeReturn5) {
				return
			}
		}, ({ kind: $.TypeKind.Function, params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))
	}

	public allSubmatch(b: $.Slice<number>, n: number): iter.Seq<$.Slice<$.Slice<number>>> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return $.functionValue(async (_yield: ((_p0: $.Slice<$.Slice<number>>) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> => {
			let __goscriptRangeReturn6 = false
			;await (async () => {
				await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).matches("", b, n, $.pointerValue<syntax.Prog>($.pointerValue<Regexp>(re).prog).NumCap) : Regexp.prototype.matches.call(re, "", b, n, $.pointerValue<syntax.Prog>($.pointerValue<Regexp>(re).prog).NumCap))!(async (m) => {
					let sub: $.Slice<$.Slice<number>> = $.makeSlice<$.Slice<number>>(globalThis.Math.trunc($.sliceLen(m) / 2))
					for (let __goscriptRangeTarget5 = sub, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __goscriptSliceWindow3 = $.sliceRange(m), i = 0; i < __goscriptRangeWindow5.length; i++) {
						if (((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, 2 * i)] as number) >= 0) {
							$.sliceElems(sub!)[$.sliceSlot(sub!, i)] = $.goSlice(b, ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, 2 * i)] as number), ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, (2 * i) + 1)] as number), ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, (2 * i) + 1)] as number))
						}
					}
					if (!(__goscriptAwait = _yield!(sub), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						return false
					}
					return true
				})
			})()
			if (__goscriptRangeReturn6) {
				return
			}
		}, ({ kind: $.TypeKind.Function, params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))
	}

	public allSubmatchIndex(b: $.Slice<number>, n: number): iter.Seq<$.Slice<number>> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return $.functionValue(async (_yield: ((_p0: $.Slice<number>) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> => {
			let __goscriptRangeReturn7 = false
			;await (async () => {
				await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).matches("", b, n, $.pointerValue<syntax.Prog>($.pointerValue<Regexp>(re).prog).NumCap) : Regexp.prototype.matches.call(re, "", b, n, $.pointerValue<syntax.Prog>($.pointerValue<Regexp>(re).prog).NumCap))!(async (m) => {
					if (!(__goscriptAwait = _yield!(slices.Clone(m)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						return false
					}
					return true
				})
			})()
			if (__goscriptRangeReturn7) {
				return
			}
		}, ({ kind: $.TypeKind.Function, params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))
	}

	public async backtrack(ib: $.Slice<number>, _is: string, pos: number, ncap: number, dstCap: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		const re$: Regexp = re == null ? $.pointerTarget<Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<Regexp>(re)
		let startCond = (re$ as Regexp).cond
		if (startCond == 255) {
			return null
		}
		if (($.uint((startCond & syntax.EmptyBeginText), 8) != 0) && (pos != 0)) {

			return null
		}

		let b: __goscript_backtrack.bitState | $.VarRef<__goscript_backtrack.bitState> | null = await __goscript_backtrack.newBitState()
		let [i, end] = $.pointerValue<__goscript_backtrack.bitState>(b).inputs.init(null, ib, _is)
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as __goscript_backtrack.bitState).reset((re$ as Regexp).prog, end, ncap) : __goscript_backtrack.bitState.prototype.reset.call(b, (re$ as Regexp).prog, end, ncap))

		Match: {

			if ($.uint((startCond & syntax.EmptyBeginText), 8) != 0) {
				if ($.sliceLen($.pointerValue<__goscript_backtrack.bitState>(b).cap) > 0) {
					$.sliceElems($.pointerValue<__goscript_backtrack.bitState>(b).cap!)[$.sliceSlot($.pointerValue<__goscript_backtrack.bitState>(b).cap!, 0)] = pos
				}
				if (!await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).tryBacktrack(b, i, $.uint($.pointerValue<syntax.Prog>((re$ as Regexp).prog).Start, 32), pos) : Regexp.prototype.tryBacktrack.call(re, b, i, $.uint($.pointerValue<syntax.Prog>((re$ as Regexp).prog).Start, 32), pos))) {
					__goscript_backtrack.freeBitState(b)
					return null
				}
			} else {

				// NumSubexp returns the number of parenthesized subexpressions in this [Regexp].
				let width = -1
				for (; (pos <= end) && (width != 0); pos = pos + (width)) {
					if ($.stringLen((re$ as Regexp).prefix) > 0) {

						let advance = (__goscriptAwait = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<input, null>) : $.pointerValue<Exclude<input, null>>(i)).index(re, pos), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (advance < 0) {
							__goscript_backtrack.freeBitState(b)
							return null
						}
						pos = pos + (advance)
					}

					if ($.sliceLen($.pointerValue<__goscript_backtrack.bitState>(b).cap) > 0) {
						$.sliceElems($.pointerValue<__goscript_backtrack.bitState>(b).cap!)[$.sliceSlot($.pointerValue<__goscript_backtrack.bitState>(b).cap!, 0)] = pos
					}
					if (await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).tryBacktrack(b, i, $.uint($.pointerValue<syntax.Prog>((re$ as Regexp).prog).Start, 32), pos) : Regexp.prototype.tryBacktrack.call(re, b, i, $.uint($.pointerValue<syntax.Prog>((re$ as Regexp).prog).Start, 32), pos))) {

						break Match
					}
					let __goscriptTuple1: any = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<input, null>) : $.pointerValue<Exclude<input, null>>(i)).step(pos)
					width = __goscriptTuple1[1]
				}
				__goscript_backtrack.freeBitState(b)
				return null
			}
		}
		dstCap = $.appendSlice(dstCap, $.pointerValue<__goscript_backtrack.bitState>(b).matchcap)
		__goscript_backtrack.freeBitState(b)
		return dstCap
	}

	public async doMatch(r: io.RuneReader | null, b: $.Slice<number>, s: string): globalThis.Promise<boolean> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).find(r, b, s, 0, 0, null) : Regexp.prototype.find.call(re, r, b, s, 0, 0, null)) != null
	}

	public async doOnePass(ir: io.RuneReader | null, ib: $.Slice<number>, _is: string, pos: number, ncap: number, dstCap: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		const re$: Regexp = re == null ? $.pointerTarget<Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<Regexp>(re)
		let startCond = (re$ as Regexp).cond
		if (startCond == 255) {
			return null
		}

		let m: __goscript_exec.onePassMachine | $.VarRef<__goscript_exec.onePassMachine> | null = await __goscript_exec.newOnePassMachine()
		if ($.cap($.pointerValue<__goscript_exec.onePassMachine>(m).matchcap) < ncap) {
			$.pointerValue<__goscript_exec.onePassMachine>(m).matchcap = $.makeSlice<number>(ncap, undefined, "number")
		} else {
			$.pointerValue<__goscript_exec.onePassMachine>(m).matchcap = $.goSlice($.pointerValue<__goscript_exec.onePassMachine>(m).matchcap, undefined, ncap)
		}
		// 0 <= pos && pos < len(i.str)
		let matched = false
		for (let __goscriptRangeTarget6 = $.pointerValue<__goscript_exec.onePassMachine>(m).matchcap, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), i = 0; i < __goscriptRangeWindow6.length; i++) {
			$.sliceElems($.pointerValue<__goscript_exec.onePassMachine>(m).matchcap!)[$.sliceSlot($.pointerValue<__goscript_exec.onePassMachine>(m).matchcap!, i)] = -1
		}

		let [i, ] = $.pointerValue<__goscript_exec.onePassMachine>(m).inputs.init(ir, ib, _is)
		// inputBytes scans a byte slice.
		let r = -1
		let r1 = -1
		let width = 0
		let width1 = 0
		let __goscriptTuple2: any = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<input, null>) : $.pointerValue<Exclude<input, null>>(i)).step(pos)
		r = __goscriptTuple2[0]
		width = __goscriptTuple2[1]
		if (r != -1) {
			let __goscriptTuple3: any = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<input, null>) : $.pointerValue<Exclude<input, null>>(i)).step(pos + width)
			r1 = __goscriptTuple3[0]
			width1 = __goscriptTuple3[1]
		}
		let flag: __goscript_exec.lazyFlag = 0n
		if (pos == 0) {
			flag = __goscript_exec.newLazyFlag(-1, r)
		} else {
			flag = (__goscriptAwait = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<input, null>) : $.pointerValue<Exclude<input, null>>(i)).context(pos), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		let pc = $.pointerValue<__goscript_onepass.onePassProg>((re$ as Regexp).onepass).Start
		let inst: __goscript_onepass.onePassInst | $.VarRef<__goscript_onepass.onePassInst> | null = $.indexRef($.pointerValue<__goscript_onepass.onePassProg>((re$ as Regexp).onepass).Inst!, pc)

		Return: {

			if ((((pos == 0) && __goscript_exec.lazyFlag_match(flag, $.uint($.pointerValue<__goscript_onepass.onePassInst>(inst).Inst.Arg, 8))) && ($.stringLen((re$ as Regexp).prefix) > 0)) && (__goscriptAwait = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<input, null>) : $.pointerValue<Exclude<input, null>>(i)).canCheckPrefix(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {

				if (!(__goscriptAwait = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<input, null>) : $.pointerValue<Exclude<input, null>>(i)).hasPrefix(re), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					break Return
				}
				pos = pos + ($.stringLen((re$ as Regexp).prefix))
				let __goscriptTuple4: any = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<input, null>) : $.pointerValue<Exclude<input, null>>(i)).step(pos)
				r = __goscriptTuple4[0]
				width = __goscriptTuple4[1]
				let __goscriptTuple5: any = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<input, null>) : $.pointerValue<Exclude<input, null>>(i)).step(pos + width)
				r1 = __goscriptTuple5[0]
				width1 = __goscriptTuple5[1]
				flag = (__goscriptAwait = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<input, null>) : $.pointerValue<Exclude<input, null>>(i)).context(pos), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				pc = $.int((re$ as Regexp).prefixEnd)
			}
			while (true) {
				inst = $.indexRef($.pointerValue<__goscript_onepass.onePassProg>((re$ as Regexp).onepass).Inst!, pc)
				pc = $.int($.pointerValue<__goscript_onepass.onePassInst>(inst).Inst.Out)
				switch ($.pointerValue<__goscript_onepass.onePassInst>(inst).Inst.Op) {
					default:
					{
						$.panic("bad inst")
						break
					}
					case syntax.InstMatch:
					{
						matched = true
						if ($.sliceLen($.pointerValue<__goscript_exec.onePassMachine>(m).matchcap) > 0) {
							$.sliceElems($.pointerValue<__goscript_exec.onePassMachine>(m).matchcap!)[$.sliceSlot($.pointerValue<__goscript_exec.onePassMachine>(m).matchcap!, 0)] = 0
							$.sliceElems($.pointerValue<__goscript_exec.onePassMachine>(m).matchcap!)[$.sliceSlot($.pointerValue<__goscript_exec.onePassMachine>(m).matchcap!, 1)] = pos
						}
						break Return
						break
					}
					case syntax.InstRune:
					{
						if (!$.pointerValue<__goscript_onepass.onePassInst>(inst).Inst.MatchRune(r)) {
							break Return
						}
						break
					}
					case syntax.InstRune1:
					{
						if (r != $.arrayIndex($.pointerValue<__goscript_onepass.onePassInst>(inst).Inst.Rune!, 0)) {
							break Return
						}
						break
					}
					case syntax.InstRuneAny:
					{
						break
					}
					case syntax.InstRuneAnyNotNL:
					{
						if (r == 10) {
							break Return
						}
						break
					}
					case syntax.InstAlt:
					case syntax.InstAltMatch:
					{
						pc = $.int(__goscript_onepass.onePassNext(inst, r))
						continue
						break
					}
					case syntax.InstFail:
					{
						break Return
						break
					}
					case syntax.InstNop:
					{
						continue
						break
					}
					case syntax.InstEmptyWidth:
					{
						if (!__goscript_exec.lazyFlag_match(flag, $.uint($.pointerValue<__goscript_onepass.onePassInst>(inst).Inst.Arg, 8))) {
							break Return
						}
						continue
						break
					}
					case syntax.InstCapture:
					{
						if ($.int($.pointerValue<__goscript_onepass.onePassInst>(inst).Inst.Arg) < $.sliceLen($.pointerValue<__goscript_exec.onePassMachine>(m).matchcap)) {
							$.sliceElems($.pointerValue<__goscript_exec.onePassMachine>(m).matchcap!)[$.sliceSlot($.pointerValue<__goscript_exec.onePassMachine>(m).matchcap!, $.pointerValue<__goscript_onepass.onePassInst>(inst).Inst.Arg)] = pos
						}
						continue
						break
					}
				}
				if (width == 0) {
					break
				}
				flag = __goscript_exec.newLazyFlag(r, r1)
				pos = pos + (width)
				let __goscriptAssign0_0: number = r1
				let __goscriptAssign0_1: number = width1
				r = __goscriptAssign0_0
				width = __goscriptAssign0_1
				if (r != -1) {
					let __goscriptTuple6: any = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<input, null>) : $.pointerValue<Exclude<input, null>>(i)).step(pos + width)
					r1 = __goscriptTuple6[0]
					width1 = __goscriptTuple6[1]
				}
			}
		}
		if (!matched) {
			__goscript_exec.freeOnePassMachine(m)
			return null
		}

		dstCap = $.appendSlice(dstCap, $.pointerValue<__goscript_exec.onePassMachine>(m).matchcap)
		__goscript_exec.freeOnePassMachine(m)
		return dstCap
	}

	public expand(dst: $.Slice<number>, template: string, bsrc: $.Slice<number>, src: string, match: $.Slice<number>): $.Slice<number> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		for (let __goscriptSliceWindow4 = $.sliceRange(match); $.stringLen(template) > 0; ) {
			let [before, after, ok] = strings2.Cut(template, "$")
			if (!ok) {
				break
			}
			dst = $.appendSlice(dst, $.stringToBytes(before), $.byteSliceHint)
			template = after
			if ((!$.stringEqual(template, "")) && ($.indexString(template, 0) == 36)) {
				// Treat $$ as $.
				dst = $.append(dst, $.uint(36, 8), $.byteSliceHint)
				template = $.sliceStringOrBytes(template, 1, undefined)
				continue
			}
			let __goscriptTuple7: any = extract(template)
			let name = __goscriptTuple7[0]
			let num = __goscriptTuple7[1]
			let rest = __goscriptTuple7[2]
			ok = __goscriptTuple7[3]
			if (!ok) {
				// Malformed; treat $ as raw text.
				dst = $.append(dst, $.uint(36, 8), $.byteSliceHint)
				continue
			}
			template = rest
			if (num >= 0) {
				if ((((2 * num) + 1) < __goscriptSliceWindow4.length) && (((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, 2 * num)] as number) >= 0)) {
					if (bsrc != null) {
						dst = $.appendSlice(dst, $.goSlice(bsrc, ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, 2 * num)] as number), ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, (2 * num) + 1)] as number)), $.byteSliceHint)
					} else {
						dst = $.appendSlice(dst, $.stringToBytes($.sliceStringOrBytes(src, ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, 2 * num)] as number), ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, (2 * num) + 1)] as number))), $.byteSliceHint)
					}
				}
			} else {
				for (let __goscriptRangeTarget7 = $.pointerValue<Regexp>(re).subexpNames, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), i = 0; i < __goscriptRangeWindow7.length; i++) {
					let namei = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + i] as string)
					if ((($.stringEqual(name, namei)) && (((2 * i) + 1) < __goscriptSliceWindow4.length)) && (((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, 2 * i)] as number) >= 0)) {
						if (bsrc != null) {
							dst = $.appendSlice(dst, $.goSlice(bsrc, ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, 2 * i)] as number), ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, (2 * i) + 1)] as number)), $.byteSliceHint)
						} else {
							dst = $.appendSlice(dst, $.stringToBytes($.sliceStringOrBytes(src, ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, 2 * i)] as number), ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, (2 * i) + 1)] as number))), $.byteSliceHint)
						}
						break
					}
				}
			}
		}
		dst = $.appendSlice(dst, $.stringToBytes(template), $.byteSliceHint)
		return dst
	}

	public async find(r: io.RuneReader | null, b: $.Slice<number>, s: string, pos: number, ncap: number, dstCap: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		const re$: Regexp = re == null ? $.pointerTarget<Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<Regexp>(re)
		if (dstCap == null) {

			dstCap = $.goSlice(__goscript_exec.arrayNoInts, undefined, 0, 0)
		}

		if ((r == null) && (($.sliceLen(b) + $.stringLen(s)) < (re$ as Regexp).minInputLen)) {
			return null
		}

		if ((re$ as Regexp).onepass != null) {
			return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).doOnePass(r, b, s, pos, ncap, dstCap) : Regexp.prototype.doOnePass.call(re, r, b, s, pos, ncap, dstCap))
		}
		if ((r == null) && (($.sliceLen(b) + $.stringLen(s)) < (re$ as Regexp).maxBitStateLen)) {
			return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).backtrack(b, s, pos, ncap, dstCap) : Regexp.prototype.backtrack.call(re, b, s, pos, ncap, dstCap))
		}

		let m: __goscript_exec.machine | $.VarRef<__goscript_exec.machine> | null = await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp)["get"]() : Regexp.prototype.get.call(re))
		let m$: __goscript_exec.machine = m == null ? $.pointerTarget<__goscript_exec.machine>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<__goscript_exec.machine>(m)
		let [i, ] = (m$ as __goscript_exec.machine).inputs.init(r, b, s)

		void (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as __goscript_exec.machine).init(ncap) : __goscript_exec.machine.prototype.init.call(m, ncap))
		if (!await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as __goscript_exec.machine).match(i, pos) : __goscript_exec.machine.prototype.match.call(m, i, pos))) {
			void (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).put(m) : Regexp.prototype.put.call(re, m))
			return null
		}

		dstCap = $.appendSlice(dstCap, (m$ as __goscript_exec.machine).matchcap)
		void (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).put(m) : Regexp.prototype.put.call(re, m))
		return dstCap
	}

	public async ["get"](): globalThis.Promise<__goscript_exec.machine | $.VarRef<__goscript_exec.machine> | null> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		const re$: Regexp = re == null ? $.pointerTarget<Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<Regexp>(re)
		let __goscriptTuple8: any = $.typeAssertTuple<__goscript_exec.machine | $.VarRef<__goscript_exec.machine> | null>(await $.arrayIndex(matchPool, (re$ as Regexp).mpool).Get(), /* @__PURE__ */ $.pointerType("regexp.machine"))
		let m: __goscript_exec.machine | $.VarRef<__goscript_exec.machine> | null = __goscriptTuple8[0]
		let ok = __goscriptTuple8[1]
		if (!ok) {
			m = new __goscript_exec.machine()
		}
		$.pointerValue<__goscript_exec.machine>(m).re = re
		$.pointerValue<__goscript_exec.machine>(m).p = (re$ as Regexp).prog
		if ($.cap($.pointerValue<__goscript_exec.machine>(m).matchcap) < (re$ as Regexp).matchcap) {
			$.pointerValue<__goscript_exec.machine>(m).matchcap = $.makeSlice<number>((re$ as Regexp).matchcap, undefined, "number")
			for (let __goscriptRangeTarget8 = $.pointerValue<__goscript_exec.machine>(m).pool, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
				let t = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as __goscript_exec.thread | $.VarRef<__goscript_exec.thread> | null)
				$.pointerValue<__goscript_exec.thread>(t).cap = $.makeSlice<number>((re$ as Regexp).matchcap, undefined, "number")
			}
		}

		// Allocate queues if needed.
		// Or reallocate, for "large" match pool.
		let n = $.arrayIndex(matchSize, (re$ as Regexp).mpool)
		if (n == 0) {
			n = $.sliceLen($.pointerValue<syntax.Prog>((re$ as Regexp).prog).Inst)
		}
		if ($.sliceLen($.pointerValue<__goscript_exec.machine>(m).q0.sparse) < n) {
			$.assignStruct($.pointerValue<__goscript_exec.machine>(m).q0, new __goscript_exec.queue({sparse: $.makeSlice<number>(n, undefined, "number"), dense: $.makeSlice<__goscript_exec.entry>(0, n, undefined, () => new __goscript_exec.entry(undefined, true))}, true))
			$.assignStruct($.pointerValue<__goscript_exec.machine>(m).q1, new __goscript_exec.queue({sparse: $.makeSlice<number>(n, undefined, "number"), dense: $.makeSlice<__goscript_exec.entry>(0, n, undefined, () => new __goscript_exec.entry(undefined, true))}, true))
		}
		return m
	}

	public matches(s: string, b: $.Slice<number>, max: number, ncap: number): iter.Seq<$.Slice<number>> | null {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		return $.functionValue(async (_yield: ((_p0: $.Slice<number>) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> => {
			if (max == 0) {
				return
			}
			let end: number = 0
			if (b == null) {
				end = $.stringLen(s)
			} else {
				end = $.sliceLen(b)
			}
			let matches: $.Slice<number> = null! as $.Slice<number>
			for (let pos = 0, prevMatchEnd = -1; pos <= end; ) {
				matches = await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).find(null, b, s, pos, ncap, $.goSlice(matches, undefined, 0)) : Regexp.prototype.find.call(re, null, b, s, pos, ncap, $.goSlice(matches, undefined, 0)))
				if ($.sliceLen(matches) == 0) {
					break
				}

				let accept = true
				if ($.arrayIndex(matches!, 1) == pos) {
					// We've found an empty match.
					if ($.arrayIndex(matches!, 0) == prevMatchEnd) {
						// We don't allow an empty match right
						// after a previous match, so ignore it.
						accept = false
					}
					let width: number = 0
					if (b == null) {
						let _is = $.varRef(new inputString({str: s}, true))
						let __goscriptTuple9: any = _is.value.step(pos)
						width = __goscriptTuple9[1]
					} else {
						let ib = $.varRef(new inputBytes({str: b}, true))
						let __goscriptTuple10: any = ib.value.step(pos)
						width = __goscriptTuple10[1]
					}
					if (width > 0) {
						pos = pos + (width)
					} else {
						pos = end + 1
					}
				} else {
					pos = $.arrayIndex(matches!, 1)
				}
				prevMatchEnd = $.arrayIndex(matches!, 1)

				if (accept) {
					if (!(__goscriptAwait = _yield!((re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).pad(matches) : Regexp.prototype.pad.call(re, matches))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						return
					}
					if (max > 0) {
						{
							max--
							if (max == 0) {
								return
							}
						}
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))
	}

	public pad(a: $.Slice<number>): $.Slice<number> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		if (a == null) {
			// No match.
			return null
		}
		let n = (1 + $.pointerValue<Regexp>(re).numSubexp) * 2
		while ($.sliceLen(a) < n) {
			a = $.appendOne(a, -1)
		}
		return a
	}

	public put(m: __goscript_exec.machine | $.VarRef<__goscript_exec.machine> | null): void {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		const m$: __goscript_exec.machine = m == null ? $.pointerTarget<__goscript_exec.machine>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<__goscript_exec.machine>(m);
		;(m$ as __goscript_exec.machine).re = null;
		;(m$ as __goscript_exec.machine).p = null
		void (m$ as __goscript_exec.machine).inputs.clear()
		$.arrayIndex(matchPool, $.pointerValue<Regexp>(re).mpool).Put($.interfaceValue(m, "*regexp.machine", /* @__PURE__ */ $.pointerType("regexp.machine")))
	}

	public async replaceAll(bsrc: $.Slice<number>, src: string, nmatch: number, repl: ((dst: $.Slice<number>, m: $.Slice<number>) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null): globalThis.Promise<$.Slice<number>> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		const re$: Regexp = re == null ? $.pointerTarget<Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<Regexp>(re)
		let lastMatchEnd = 0
		let searchPos = 0
		let buf: $.Slice<number> = null! as $.Slice<number>
		let endPos: number = 0
		if (bsrc != null) {
			endPos = $.sliceLen(bsrc)
		} else {
			endPos = $.stringLen(src)
		}
		if (nmatch > $.pointerValue<syntax.Prog>((re$ as Regexp).prog).NumCap) {
			nmatch = $.pointerValue<syntax.Prog>((re$ as Regexp).prog).NumCap
		}

		let dstCap: number[] = $.arrayValue(globalThis.Array.from({ length: 2 }, () => 0))
		while (searchPos <= endPos) {
			let a: $.Slice<number> = await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).find(null, bsrc, src, searchPos, nmatch, $.goSlice(dstCap, undefined, 0)) : Regexp.prototype.find.call(re, null, bsrc, src, searchPos, nmatch, $.goSlice(dstCap, undefined, 0)))
			if ($.sliceLen(a) == 0) {
				break
			}

			// Copy the unmatched characters before this match.
			if (bsrc != null) {
				buf = $.appendSlice(buf, $.goSlice(bsrc, lastMatchEnd, $.arrayIndex(a!, 0)), $.byteSliceHint)
			} else {
				buf = $.appendSlice(buf, $.stringToBytes($.sliceStringOrBytes(src, lastMatchEnd, $.arrayIndex(a!, 0))), $.byteSliceHint)
			}

			// Now insert a copy of the replacement string, but not for a
			// match of the empty string immediately after another match.
			// (Otherwise, we get double replacement for patterns that
			// match both empty and nonempty strings.)
			if (($.arrayIndex(a!, 1) > lastMatchEnd) || ($.arrayIndex(a!, 0) == 0)) {
				buf = ((__goscriptAwait = repl!(buf, a), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
			}
			lastMatchEnd = $.arrayIndex(a!, 1)

			// Advance past this match; always advance at least one character.
			let width: number = 0
			if (bsrc != null) {
				let __goscriptTuple11: any = utf8.DecodeRune($.goSlice(bsrc, searchPos, undefined))
				width = __goscriptTuple11[1]
			} else {
				let __goscriptTuple12: any = utf8.DecodeRuneInString($.sliceStringOrBytes(src, searchPos, undefined))
				width = __goscriptTuple12[1]
			}
			if ((searchPos + width) > $.arrayIndex(a!, 1)) {
				searchPos = searchPos + (width)
			} else {
				if ((searchPos + 1) > $.arrayIndex(a!, 1)) {
					// This clause is only needed at the end of the input
					// string. In that case, DecodeRuneInString returns width=0.
					searchPos++
				} else {
					searchPos = $.arrayIndex(a!, 1)
				}
			}
		}

		// Copy the unmatched characters after the last match.
		if (bsrc != null) {
			buf = $.appendSlice(buf, $.goSlice(bsrc, lastMatchEnd, undefined), $.byteSliceHint)
		} else {
			buf = $.appendSlice(buf, $.stringToBytes($.sliceStringOrBytes(src, lastMatchEnd, undefined)), $.byteSliceHint)
		}

		return buf
	}

	public async tryBacktrack(b: __goscript_backtrack.bitState | $.VarRef<__goscript_backtrack.bitState> | null, i: input | null, pc: number, pos: number): globalThis.Promise<boolean> {
		const re: Regexp | $.VarRef<Regexp> | null = this;
		const re$: Regexp = re == null ? $.pointerTarget<Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<Regexp>(re)
		const b$: __goscript_backtrack.bitState = b == null ? $.pointerTarget<__goscript_backtrack.bitState>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<__goscript_backtrack.bitState>(b)
		let longest = (re$ as Regexp).longest

		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as __goscript_backtrack.bitState).push(re, pc, pos, false) : __goscript_backtrack.bitState.prototype.push.call(b, re, pc, pos, false))
		__goscriptLoop0: while ($.sliceLen((b$ as __goscript_backtrack.bitState).jobs) > 0) {
			let l = $.sliceLen((b$ as __goscript_backtrack.bitState).jobs) - 1

			let __goscriptShadow1 = $.arrayIndex((b$ as __goscript_backtrack.bitState).jobs!, l).pc
			let __goscriptShadow2 = $.arrayIndex((b$ as __goscript_backtrack.bitState).jobs!, l).pos
			let arg = $.arrayIndex((b$ as __goscript_backtrack.bitState).jobs!, l).arg;
			;(b$ as __goscript_backtrack.bitState).jobs = $.goSlice((b$ as __goscript_backtrack.bitState).jobs, undefined, l)

			let __goscriptGotoState0 = "__entry"
			__goscriptGotoLoop0: while (true) {
				switch (__goscriptGotoState0) {
					case "__entry":
					{
						__goscriptGotoState0 = "Skip"
						continue __goscriptGotoLoop0
						__goscriptGotoState0 = "CheckAndLoop"
						continue __goscriptGotoLoop0
						break
					}
					case "CheckAndLoop":
					{
						if (!(b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as __goscript_backtrack.bitState).shouldVisit(__goscriptShadow1, __goscriptShadow2) : __goscript_backtrack.bitState.prototype.shouldVisit.call(b, __goscriptShadow1, __goscriptShadow2))) {
							continue __goscriptLoop0
						}
						__goscriptGotoState0 = "Skip"
						continue __goscriptGotoLoop0
						break
					}
					case "Skip":
					{

						var inst: syntax.Inst | $.VarRef<syntax.Inst> | null = $.indexRef($.pointerValue<syntax.Prog>((re$ as Regexp).prog).Inst!, __goscriptShadow1)

						switch ($.pointerValue<syntax.Inst>(inst).Op) {
							default:
							{
								$.panic("bad inst")
								break
							}
							case syntax.InstFail:
							{
								$.panic("unexpected InstFail")
								break
							}
							case syntax.InstAlt:
							{
								if (arg) {

									arg = false
									__goscriptShadow1 = $.pointerValue<syntax.Inst>(inst).Arg
									__goscriptGotoState0 = "CheckAndLoop"
									continue __goscriptGotoLoop0
								} else {
									void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as __goscript_backtrack.bitState).push(re, __goscriptShadow1, __goscriptShadow2, true) : __goscript_backtrack.bitState.prototype.push.call(b, re, __goscriptShadow1, __goscriptShadow2, true))
									__goscriptShadow1 = $.pointerValue<syntax.Inst>(inst).Out
									__goscriptGotoState0 = "CheckAndLoop"
									continue __goscriptGotoLoop0
								}
								break
							}
							case syntax.InstAltMatch:
							{
								switch ($.arrayIndex($.pointerValue<syntax.Prog>((re$ as Regexp).prog).Inst!, $.pointerValue<syntax.Inst>(inst).Out).Op) {
									case syntax.InstRune:
									case syntax.InstRune1:
									case syntax.InstRuneAny:
									case syntax.InstRuneAnyNotNL:
									{
										void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as __goscript_backtrack.bitState).push(re, $.pointerValue<syntax.Inst>(inst).Arg, __goscriptShadow2, false) : __goscript_backtrack.bitState.prototype.push.call(b, re, $.pointerValue<syntax.Inst>(inst).Arg, __goscriptShadow2, false))
										__goscriptShadow1 = $.pointerValue<syntax.Inst>(inst).Arg
										__goscriptShadow2 = (b$ as __goscript_backtrack.bitState).end
										__goscriptGotoState0 = "CheckAndLoop"
										continue __goscriptGotoLoop0
										break
									}
								}

								void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as __goscript_backtrack.bitState).push(re, $.pointerValue<syntax.Inst>(inst).Out, (b$ as __goscript_backtrack.bitState).end, false) : __goscript_backtrack.bitState.prototype.push.call(b, re, $.pointerValue<syntax.Inst>(inst).Out, (b$ as __goscript_backtrack.bitState).end, false))
								__goscriptShadow1 = $.pointerValue<syntax.Inst>(inst).Out
								__goscriptGotoState0 = "CheckAndLoop"
								continue __goscriptGotoLoop0
								break
							}
							case syntax.InstRune:
							{
								let [r, width] = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<input, null>) : $.pointerValue<Exclude<input, null>>(i)).step(__goscriptShadow2)
								if (!(inst !== null && (inst as any).__isVarRef !== true && (inst as any).__goValue === undefined ? ((inst as any) as syntax.Inst).MatchRune(r) : syntax.Inst.prototype.MatchRune.call(inst, r))) {
									continue __goscriptLoop0
								}
								__goscriptShadow2 = __goscriptShadow2 + (width)
								__goscriptShadow1 = $.pointerValue<syntax.Inst>(inst).Out
								__goscriptGotoState0 = "CheckAndLoop"
								continue __goscriptGotoLoop0
								break
							}
							case syntax.InstRune1:
							{
								let [r, width] = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<input, null>) : $.pointerValue<Exclude<input, null>>(i)).step(__goscriptShadow2)
								if (r != $.arrayIndex($.pointerValue<syntax.Inst>(inst).Rune!, 0)) {
									continue __goscriptLoop0
								}
								__goscriptShadow2 = __goscriptShadow2 + (width)
								__goscriptShadow1 = $.pointerValue<syntax.Inst>(inst).Out
								__goscriptGotoState0 = "CheckAndLoop"
								continue __goscriptGotoLoop0
								break
							}
							case syntax.InstRuneAnyNotNL:
							{
								let [r, width] = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<input, null>) : $.pointerValue<Exclude<input, null>>(i)).step(__goscriptShadow2)
								if ((r == 10) || (r == -1)) {
									continue __goscriptLoop0
								}
								__goscriptShadow2 = __goscriptShadow2 + (width)
								__goscriptShadow1 = $.pointerValue<syntax.Inst>(inst).Out
								__goscriptGotoState0 = "CheckAndLoop"
								continue __goscriptGotoLoop0
								break
							}
							case syntax.InstRuneAny:
							{
								let [r, width] = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<input, null>) : $.pointerValue<Exclude<input, null>>(i)).step(__goscriptShadow2)
								if (r == -1) {
									continue __goscriptLoop0
								}
								__goscriptShadow2 = __goscriptShadow2 + (width)
								__goscriptShadow1 = $.pointerValue<syntax.Inst>(inst).Out
								__goscriptGotoState0 = "CheckAndLoop"
								continue __goscriptGotoLoop0
								break
							}
							case syntax.InstCapture:
							{
								if (arg) {

									$.sliceElems((b$ as __goscript_backtrack.bitState).cap!)[$.sliceSlot((b$ as __goscript_backtrack.bitState).cap!, $.pointerValue<syntax.Inst>(inst).Arg)] = __goscriptShadow2
									continue __goscriptLoop0
								} else {
									if ($.pointerValue<syntax.Inst>(inst).Arg < $.uint($.sliceLen((b$ as __goscript_backtrack.bitState).cap), 32)) {

										__goscript_backtrack.bitState.prototype.push.call(b, re, __goscriptShadow1, $.arrayIndex((b$ as __goscript_backtrack.bitState).cap!, $.pointerValue<syntax.Inst>(inst).Arg), true)
										$.sliceElems((b$ as __goscript_backtrack.bitState).cap!)[$.sliceSlot((b$ as __goscript_backtrack.bitState).cap!, $.pointerValue<syntax.Inst>(inst).Arg)] = __goscriptShadow2
									}
									__goscriptShadow1 = $.pointerValue<syntax.Inst>(inst).Out
									__goscriptGotoState0 = "CheckAndLoop"
									continue __goscriptGotoLoop0
								}
								break
							}
							case syntax.InstEmptyWidth:
							{
								let flag = (__goscriptAwait = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<input, null>) : $.pointerValue<Exclude<input, null>>(i)).context(__goscriptShadow2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								if (!__goscript_exec.lazyFlag_match(flag, $.uint($.pointerValue<syntax.Inst>(inst).Arg, 8))) {
									continue __goscriptLoop0
								}
								__goscriptShadow1 = $.pointerValue<syntax.Inst>(inst).Out
								__goscriptGotoState0 = "CheckAndLoop"
								continue __goscriptGotoLoop0
								break
							}
							case syntax.InstNop:
							{
								__goscriptShadow1 = $.pointerValue<syntax.Inst>(inst).Out
								__goscriptGotoState0 = "CheckAndLoop"
								continue __goscriptGotoLoop0
								break
							}
							case syntax.InstMatch:
							{
								if ($.sliceLen((b$ as __goscript_backtrack.bitState).cap) == 0) {
									return true
								}

								if ($.sliceLen((b$ as __goscript_backtrack.bitState).cap) > 1) {
									$.sliceElems((b$ as __goscript_backtrack.bitState).cap!)[$.sliceSlot((b$ as __goscript_backtrack.bitState).cap!, 1)] = __goscriptShadow2
								}
								{
									let old = $.arrayIndex((b$ as __goscript_backtrack.bitState).matchcap!, 1)
									if ((old == -1) || ((longest && (__goscriptShadow2 > 0)) && (__goscriptShadow2 > old))) {
										$.copy((b$ as __goscript_backtrack.bitState).matchcap, (b$ as __goscript_backtrack.bitState).cap)
									}
								}

								if (!longest) {
									return true
								}

								if (__goscriptShadow2 == (b$ as __goscript_backtrack.bitState).end) {
									return true
								}

								continue __goscriptLoop0
								break
							}
						}
						break __goscriptGotoLoop0
						break
					}
				}
				break
			}
		}

		return (longest && ($.sliceLen((b$ as __goscript_backtrack.bitState).matchcap) > 1)) && ($.arrayIndex((b$ as __goscript_backtrack.bitState).matchcap!, 1) >= 0)
	}

	static __typeInfo = $.registerStructType(
		"regexp.Regexp",
		() => new Regexp(),
		() => [$.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Copy", [], [/* @__PURE__ */ $.pointerType("regexp.Regexp")], true), $.methodSignature("Expand", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["template", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["match", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("ExpandString", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["template", /* @__PURE__ */ $.basicType("string")], ["src", /* @__PURE__ */ $.basicType("string")], ["match", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Find", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("FindAll", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))], true), $.methodSignature("FindAllIndex", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")))], true), $.methodSignature("FindAllString", [["s", /* @__PURE__ */ $.basicType("string")], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("FindAllStringIndex", [["s", /* @__PURE__ */ $.basicType("string")], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")))], true), $.methodSignature("FindAllStringSubmatch", [["s", /* @__PURE__ */ $.basicType("string")], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))], true), $.methodSignature("FindAllStringSubmatchIndex", [["s", /* @__PURE__ */ $.basicType("string")], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")))], true), $.methodSignature("FindAllSubmatch", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))], true), $.methodSignature("FindAllSubmatchIndex", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")))], true), $.methodSignature("FindIndex", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["m", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], true), $.methodSignature("FindReaderIndex", [["r", "io.RuneReader"]], [["m", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], true), $.methodSignature("FindReaderSubmatchIndex", [["r", "io.RuneReader"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("FindString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("FindStringIndex", [["s", /* @__PURE__ */ $.basicType("string")]], [["m", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], true), $.methodSignature("FindStringSubmatch", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("FindStringSubmatchIndex", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("FindSubmatch", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))], true), $.methodSignature("FindSubmatchIndex", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("LiteralPrefix", [], [["prefix", /* @__PURE__ */ $.basicType("string")], ["complete", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Longest", [], [], true), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Match", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MatchReader", [["r", "io.RuneReader"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MatchString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NumSubexp", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ReplaceAll", [["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["repl", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("ReplaceAllFunc", [["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["repl", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("ReplaceAllLiteral", [["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["repl", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("ReplaceAllLiteralString", [["src", /* @__PURE__ */ $.basicType("string")], ["repl", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ReplaceAllString", [["src", /* @__PURE__ */ $.basicType("string")], ["repl", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ReplaceAllStringFunc", [["src", /* @__PURE__ */ $.basicType("string")], ["repl", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Split", [["s", /* @__PURE__ */ $.basicType("string")], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("SubexpIndex", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("SubexpNames", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("_All", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("_AllIndex", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("_AllString", [["s", /* @__PURE__ */ $.basicType("string")]], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("_AllStringIndex", [["s", /* @__PURE__ */ $.basicType("string")]], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("_AllStringSubmatch", [["s", /* @__PURE__ */ $.basicType("string")]], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("_AllStringSubmatchIndex", [["s", /* @__PURE__ */ $.basicType("string")]], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("_AllSubmatch", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("_AllSubmatchIndex", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("all", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["n", /* @__PURE__ */ $.basicType("int")]], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("allIndex", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["n", /* @__PURE__ */ $.basicType("int")]], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("allString", [["s", /* @__PURE__ */ $.basicType("string")], ["n", /* @__PURE__ */ $.basicType("int")]], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("allStringIndex", [["s", /* @__PURE__ */ $.basicType("string")], ["n", /* @__PURE__ */ $.basicType("int")]], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("allStringSubmatch", [["s", /* @__PURE__ */ $.basicType("string")], ["n", /* @__PURE__ */ $.basicType("int")]], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("allStringSubmatchIndex", [["s", /* @__PURE__ */ $.basicType("string")], ["n", /* @__PURE__ */ $.basicType("int")]], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("allSubmatch", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["n", /* @__PURE__ */ $.basicType("int")]], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("allSubmatchIndex", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["n", /* @__PURE__ */ $.basicType("int")]], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("backtrack", [["ib", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["is", /* @__PURE__ */ $.basicType("string")], ["pos", /* @__PURE__ */ $.basicType("int")], ["ncap", /* @__PURE__ */ $.basicType("int")], ["dstCap", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("doMatch", [["r", "io.RuneReader"], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("doOnePass", [["ir", "io.RuneReader"], ["ib", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["is", /* @__PURE__ */ $.basicType("string")], ["pos", /* @__PURE__ */ $.basicType("int")], ["ncap", /* @__PURE__ */ $.basicType("int")], ["dstCap", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("expand", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["template", /* @__PURE__ */ $.basicType("string")], ["bsrc", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.basicType("string")], ["match", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("find", [["r", "io.RuneReader"], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["s", /* @__PURE__ */ $.basicType("string")], ["pos", /* @__PURE__ */ $.basicType("int")], ["ncap", /* @__PURE__ */ $.basicType("int")], ["dstCap", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("get", [], [/* @__PURE__ */ $.pointerType("regexp.machine")], true), $.methodSignature("matches", [["s", /* @__PURE__ */ $.basicType("string")], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["max", /* @__PURE__ */ $.basicType("int")], ["ncap", /* @__PURE__ */ $.basicType("int")]], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("pad", [["a", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("put", [["m", /* @__PURE__ */ $.pointerType("regexp.machine")]], [], true), $.methodSignature("replaceAll", [["bsrc", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.basicType("string")], ["nmatch", /* @__PURE__ */ $.basicType("int")], ["repl", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("tryBacktrack", [["b", /* @__PURE__ */ $.pointerType("regexp.bitState")], ["i", "regexp.input"], ["pc", /* @__PURE__ */ $.basicType("uint32")], ["pos", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true)],
		Regexp,
		() => [/* @__PURE__ */ $.structField("expr", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("prog", /* @__PURE__ */ $.pointerType("syntax.Prog"), [1], 16, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("onepass", /* @__PURE__ */ $.pointerType("regexp.onePassProg"), [2], 24, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("numSubexp", /* @__PURE__ */ $.basicType("int"), [3], 32, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("maxBitStateLen", /* @__PURE__ */ $.basicType("int"), [4], 40, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("subexpNames", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [5], 48, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("prefix", /* @__PURE__ */ $.basicType("string"), [6], 72, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("prefixBytes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [7], 88, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("prefixRune", /* @__PURE__ */ $.basicType("int32"), [8], 112, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("prefixEnd", /* @__PURE__ */ $.basicType("uint32"), [9], 116, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("mpool", /* @__PURE__ */ $.basicType("int"), [10], 120, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("matchcap", /* @__PURE__ */ $.basicType("int"), [11], 128, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("prefixComplete", /* @__PURE__ */ $.basicType("bool"), [12], 136, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("cond", /* @__PURE__ */ $.basicType("uint8", "syntax.EmptyOp"), [13], 137, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("minInputLen", /* @__PURE__ */ $.basicType("int"), [14], 144, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("longest", /* @__PURE__ */ $.basicType("bool"), [15], 152, false, { pkgPath: "regexp" })]
	)
}

export class inputString {
	public get str(): string {
		return this._fields.str
	}

	public set str(value: string) {
		this._fields.str = value
	}

	public _fields: {
		str: string
	}

	constructor(init?: Partial<{str?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			str: init?.str ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): inputString {
		return new inputString(this, true)
	}

	public __goscriptAssign(source: inputString): void {
		const target = this._fields
		const values = source._fields
		target.str = values.str
	}

	public canCheckPrefix(): boolean {
		const i: inputString | $.VarRef<inputString> | null = this;
		return true
	}

	public context(pos: number): __goscript_exec.lazyFlag {
		const i: inputString | $.VarRef<inputString> | null = this;
		const i$: inputString = i == null ? $.pointerTarget<inputString>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<inputString>(i)
		let r1 = -1
		let r2 = -1
		// 0 < pos && pos <= len(i.str)
		if ($.uint(pos - 1, 64) < $.uint($.stringLen((i$ as inputString).str), 64)) {
			let __goscriptTuple20: any = utf8.DecodeLastRuneInString($.sliceStringOrBytes((i$ as inputString).str, undefined, pos))
			r1 = __goscriptTuple20[0]
		}
		// 0 <= pos && pos < len(i.str)
		if ($.uint(pos, 64) < $.uint($.stringLen((i$ as inputString).str), 64)) {
			let __goscriptTuple21: any = utf8.DecodeRuneInString($.sliceStringOrBytes((i$ as inputString).str, pos, undefined))
			r2 = __goscriptTuple21[0]
		}
		return __goscript_exec.newLazyFlag(r1, r2)
	}

	public hasPrefix(re: Regexp | $.VarRef<Regexp> | null): boolean {
		const i: inputString | $.VarRef<inputString> | null = this;
		return strings2.HasPrefix($.pointerValue<inputString>(i).str, $.pointerValue<Regexp>(re).prefix)
	}

	public index(re: Regexp | $.VarRef<Regexp> | null, pos: number): number {
		const i: inputString | $.VarRef<inputString> | null = this;
		return strings2.Index($.sliceStringOrBytes($.pointerValue<inputString>(i).str, pos, undefined), $.pointerValue<Regexp>(re).prefix)
	}

	public step(pos: number): [number, number] {
		const i: inputString | $.VarRef<inputString> | null = this;
		const i$: inputString = i == null ? $.pointerTarget<inputString>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<inputString>(i)
		if (pos < $.stringLen((i$ as inputString).str)) {
			return utf8.DecodeRuneInString($.sliceStringOrBytes((i$ as inputString).str, pos, undefined))
		}
		return [-1, 0]
	}

	static __typeInfo = $.registerStructType(
		"regexp.inputString",
		() => new inputString(),
		() => [$.methodSignature("canCheckPrefix", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("context", [["pos", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint64", "regexp.lazyFlag")], true), $.methodSignature("hasPrefix", [["re", /* @__PURE__ */ $.pointerType("regexp.Regexp")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("index", [["re", /* @__PURE__ */ $.pointerType("regexp.Regexp")], ["pos", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("step", [["pos", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.basicType("int")], true)],
		inputString,
		() => [/* @__PURE__ */ $.structField("str", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "regexp" })]
	)
}

export class inputBytes {
	public get str(): $.Slice<number> {
		return this._fields.str
	}

	public set str(value: $.Slice<number>) {
		this._fields.str = value
	}

	public _fields: {
		str: $.Slice<number>
	}

	constructor(init?: Partial<{str?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			str: init?.str ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): inputBytes {
		return new inputBytes(this, true)
	}

	public __goscriptAssign(source: inputBytes): void {
		const target = this._fields
		const values = source._fields
		target.str = values.str
	}

	public canCheckPrefix(): boolean {
		const i: inputBytes | $.VarRef<inputBytes> | null = this;
		return true
	}

	public context(pos: number): __goscript_exec.lazyFlag {
		const i: inputBytes | $.VarRef<inputBytes> | null = this;
		const i$: inputBytes = i == null ? $.pointerTarget<inputBytes>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<inputBytes>(i)
		let r1 = -1
		let r2 = -1
		// 0 < pos && pos <= len(i.str)
		if ($.uint(pos - 1, 64) < $.uint($.sliceLen((i$ as inputBytes).str), 64)) {
			let __goscriptTuple22: any = utf8.DecodeLastRune($.goSlice((i$ as inputBytes).str, undefined, pos))
			r1 = __goscriptTuple22[0]
		}
		// 0 <= pos && pos < len(i.str)
		if ($.uint(pos, 64) < $.uint($.sliceLen((i$ as inputBytes).str), 64)) {
			let __goscriptTuple23: any = utf8.DecodeRune($.goSlice((i$ as inputBytes).str, pos, undefined))
			r2 = __goscriptTuple23[0]
		}
		return __goscript_exec.newLazyFlag(r1, r2)
	}

	public hasPrefix(re: Regexp | $.VarRef<Regexp> | null): boolean {
		const i: inputBytes | $.VarRef<inputBytes> | null = this;
		return bytes.HasPrefix($.pointerValue<inputBytes>(i).str, $.pointerValue<Regexp>(re).prefixBytes)
	}

	public index(re: Regexp | $.VarRef<Regexp> | null, pos: number): number {
		const i: inputBytes | $.VarRef<inputBytes> | null = this;
		return bytes.Index($.goSlice($.pointerValue<inputBytes>(i).str, pos, undefined), $.pointerValue<Regexp>(re).prefixBytes)
	}

	public step(pos: number): [number, number] {
		const i: inputBytes | $.VarRef<inputBytes> | null = this;
		const i$: inputBytes = i == null ? $.pointerTarget<inputBytes>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<inputBytes>(i)
		if (pos < $.sliceLen((i$ as inputBytes).str)) {
			return utf8.DecodeRune($.goSlice((i$ as inputBytes).str, pos, undefined))
		}
		return [-1, 0]
	}

	static __typeInfo = $.registerStructType(
		"regexp.inputBytes",
		() => new inputBytes(),
		() => [$.methodSignature("canCheckPrefix", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("context", [["pos", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint64", "regexp.lazyFlag")], true), $.methodSignature("hasPrefix", [["re", /* @__PURE__ */ $.pointerType("regexp.Regexp")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("index", [["re", /* @__PURE__ */ $.pointerType("regexp.Regexp")], ["pos", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("step", [["pos", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.basicType("int")], true)],
		inputBytes,
		() => [/* @__PURE__ */ $.structField("str", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "regexp" })]
	)
}

export class inputReader {
	public get r(): io.RuneReader | null {
		return this._fields.r
	}

	public set r(value: io.RuneReader | null) {
		this._fields.r = value
	}

	public get atEOT(): boolean {
		return this._fields.atEOT
	}

	public set atEOT(value: boolean) {
		this._fields.atEOT = value
	}

	public get pos(): number {
		return this._fields.pos
	}

	public set pos(value: number) {
		this._fields.pos = value
	}

	public _fields: {
		r: io.RuneReader | null
		atEOT: boolean
		pos: number
	}

	constructor(init?: Partial<{r?: io.RuneReader | null, atEOT?: boolean, pos?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			r: init?.r ?? (null! as io.RuneReader | null),
			atEOT: init?.atEOT ?? (false as boolean),
			pos: init?.pos ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): inputReader {
		return new inputReader(this, true)
	}

	public __goscriptAssign(source: inputReader): void {
		const target = this._fields
		const values = source._fields
		target.r = $.assignFieldValue(target.r, values.r, "io.RuneReader")
		target.atEOT = values.atEOT
		target.pos = values.pos
	}

	public canCheckPrefix(): boolean {
		const i: inputReader | $.VarRef<inputReader> | null = this;
		return false
	}

	public context(pos: number): __goscript_exec.lazyFlag {
		const i: inputReader | $.VarRef<inputReader> | null = this;
		return 0n
	}

	public hasPrefix(re: Regexp | $.VarRef<Regexp> | null): boolean {
		const i: inputReader | $.VarRef<inputReader> | null = this;
		return false
	}

	public index(re: Regexp | $.VarRef<Regexp> | null, pos: number): number {
		const i: inputReader | $.VarRef<inputReader> | null = this;
		return -1
	}

	public async step(pos: number): globalThis.Promise<[number, number]> {
		let i: inputReader | $.VarRef<inputReader> | null = this;
		const i$: inputReader = i == null ? $.pointerTarget<inputReader>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<inputReader>(i)
		if (!(i$ as inputReader).atEOT && (pos != (i$ as inputReader).pos)) {
			return [-1, 0]
		}
		let __goscriptTuple24: any = await $.pointerValue<Exclude<io.RuneReader, null>>((i$ as inputReader).r).ReadRune()
		let r = __goscriptTuple24[0]
		let w = __goscriptTuple24[1]
		let err = __goscriptTuple24[2]
		if (err != null) {
			;(i$ as inputReader).atEOT = true
			return [-1, 0]
		}
		;(i$ as inputReader).pos = (i$ as inputReader).pos + (w)
		return [r, w]
	}

	static __typeInfo = $.registerStructType(
		"regexp.inputReader",
		() => new inputReader(),
		() => [$.methodSignature("canCheckPrefix", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("context", [["pos", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint64", "regexp.lazyFlag")], true), $.methodSignature("hasPrefix", [["re", /* @__PURE__ */ $.pointerType("regexp.Regexp")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("index", [["re", /* @__PURE__ */ $.pointerType("regexp.Regexp")], ["pos", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("step", [["pos", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.basicType("int")], true)],
		inputReader,
		() => [/* @__PURE__ */ $.structField("r", "io.RuneReader", [0], 0, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("atEOT", /* @__PURE__ */ $.basicType("bool"), [1], 16, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("pos", /* @__PURE__ */ $.basicType("int"), [2], 24, false, { pkgPath: "regexp" })]
	)
}

export const endOfText: number = -1

export async function Compile(expr: string): globalThis.Promise<[Regexp | $.VarRef<Regexp> | null, $.GoError]> {
	return compile(expr, 212, false)
}

export async function CompilePOSIX(expr: string): globalThis.Promise<[Regexp | $.VarRef<Regexp> | null, $.GoError]> {
	return compile(expr, 0, true)
}

export async function compile(expr: string, mode: syntax.Flags, longest: boolean): globalThis.Promise<[Regexp | $.VarRef<Regexp> | null, $.GoError]> {
	let __goscriptTuple13: any = await syntax.Parse(expr, mode)
	let re: syntax.Regexp | $.VarRef<syntax.Regexp> | null = __goscriptTuple13[0]
	let err = __goscriptTuple13[1]
	if (err != null) {
		return [null, err]
	}
	let maxCap = (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as syntax.Regexp).MaxCap() : syntax.Regexp.prototype.MaxCap.call(re))
	let capNames: $.Slice<string> = (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as syntax.Regexp).CapNames() : syntax.Regexp.prototype.CapNames.call(re))

	re = (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as syntax.Regexp).Simplify() : syntax.Regexp.prototype.Simplify.call(re))
	let __goscriptTuple14: any = syntax.Compile(re)
	let prog: syntax.Prog | $.VarRef<syntax.Prog> | null = __goscriptTuple14[0]
	err = __goscriptTuple14[1]
	let prog$: syntax.Prog = prog == null ? $.pointerTarget<syntax.Prog>(prog) : (prog as any).__isVarRef === true ? (prog as any).value : (prog as any).__goValue === undefined ? (prog as any) : $.pointerTarget<syntax.Prog>(prog)
	if (err != null) {
		return [null, err]
	}
	let matchcap = (prog$ as syntax.Prog).NumCap
	if (matchcap < 2) {
		matchcap = 2
	}
	let regexp: Regexp | $.VarRef<Regexp> | null = (await (async () => { const __goscriptLiteralField0 = await __goscript_onepass.compileOnePass(prog); const __goscriptLiteralField1 = (prog !== null && (prog as any).__isVarRef !== true && (prog as any).__goValue === undefined ? ((prog as any) as syntax.Prog).StartCond() : syntax.Prog.prototype.StartCond.call(prog)); const __goscriptLiteralField2 = minInputLen(re); return new Regexp({expr: expr, prog: prog, onepass: __goscriptLiteralField0, numSubexp: maxCap, subexpNames: capNames, cond: __goscriptLiteralField1, longest: longest, matchcap: matchcap, minInputLen: __goscriptLiteralField2}) })())
	let regexp$: Regexp = regexp == null ? $.pointerTarget<Regexp>(regexp) : (regexp as any).__isVarRef === true ? (regexp as any).value : (regexp as any).__goValue === undefined ? (regexp as any) : $.pointerTarget<Regexp>(regexp)
	if ((regexp$ as Regexp).onepass == null) {
		let __goscriptTuple15: any = (prog !== null && (prog as any).__isVarRef !== true && (prog as any).__goValue === undefined ? ((prog as any) as syntax.Prog).Prefix() : syntax.Prog.prototype.Prefix.call(prog));
		;(regexp$ as Regexp).prefix = __goscriptTuple15[0];
		;(regexp$ as Regexp).prefixComplete = __goscriptTuple15[1];
		;(regexp$ as Regexp).maxBitStateLen = __goscript_backtrack.maxBitStateLen(prog)
	} else {
		let __goscriptTuple16: any = __goscript_onepass.onePassPrefix(prog);
		;(regexp$ as Regexp).prefix = __goscriptTuple16[0];
		;(regexp$ as Regexp).prefixComplete = __goscriptTuple16[1];
		;(regexp$ as Regexp).prefixEnd = __goscriptTuple16[2]
	}
	if (!$.stringEqual((regexp$ as Regexp).prefix, "")) {
		// TODO(rsc): Remove this allocation by adding
		// IndexString to package bytes.
		;(regexp$ as Regexp).prefixBytes = $.stringToBytes((regexp$ as Regexp).prefix)
		let __goscriptTuple17: any = utf8.DecodeRuneInString((regexp$ as Regexp).prefix);
		;(regexp$ as Regexp).prefixRune = __goscriptTuple17[0]
	}

	let n = $.sliceLen((prog$ as syntax.Prog).Inst)
	let i = 0
	while (($.arrayIndex(matchSize, i) != 0) && ($.arrayIndex(matchSize, i) < n)) {
		i++
	}
	;(regexp$ as Regexp).mpool = i

	return [regexp, null]
}

export let matchSize: number[] = $.arrayValue([128, 512, 2048, 16384, 0])

export function __goscript_set_matchSize(__goscriptValue: number[]): void {
	matchSize = __goscriptValue
}

export let matchPool: sync.Pool[] = $.arrayValue(globalThis.Array.from({ length: 5 }, () => $.markAsStructValue(new sync.Pool())), /* @__PURE__ */ $.arrayType("sync.Pool", 5))

export function __goscript_set_matchPool(__goscriptValue: sync.Pool[]): void {
	matchPool = __goscriptValue
}

export function minInputLen(re: syntax.Regexp | $.VarRef<syntax.Regexp> | null): number {
	const re$: syntax.Regexp = re == null ? $.pointerTarget<syntax.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<syntax.Regexp>(re)
	switch ((re$ as syntax.Regexp).Op) {
		default:
		{
			return 0
			break
		}
		case syntax.OpAnyChar:
		case syntax.OpAnyCharNotNL:
		case syntax.OpCharClass:
		{
			return 1
			break
		}
		case syntax.OpLiteral:
		{
			let l = 0
			for (let __goscriptRangeTarget9 = (re$ as syntax.Regexp).Rune, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
				let r = $.int((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as number), 32)
				if (r == 65533) {
					l++
				} else {
					l = l + (utf8.RuneLen(r))
				}
			}
			return l
			break
		}
		case syntax.OpCapture:
		case syntax.OpPlus:
		{
			return minInputLen($.arrayIndex((re$ as syntax.Regexp).Sub!, 0))
			break
		}
		case syntax.OpRepeat:
		{
			return (re$ as syntax.Regexp).Min * minInputLen($.arrayIndex((re$ as syntax.Regexp).Sub!, 0))
			break
		}
		case syntax.OpConcat:
		{
			let l = 0
			for (let __goscriptRangeTarget10 = (re$ as syntax.Regexp).Sub, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
				let sub = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as syntax.Regexp | $.VarRef<syntax.Regexp> | null)
				l = l + (minInputLen(sub))
			}
			return l
			break
		}
		case syntax.OpAlternate:
		{
			let l = minInputLen($.arrayIndex((re$ as syntax.Regexp).Sub!, 0))
			let lnext: number = 0
			for (let __goscriptRangeTarget11 = $.goSlice((re$ as syntax.Regexp).Sub, 1, undefined), __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
				let sub = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as syntax.Regexp | $.VarRef<syntax.Regexp> | null)
				lnext = minInputLen(sub)
				if (lnext < l) {
					l = lnext
				}
			}
			return l
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function MustCompile(str: string): globalThis.Promise<Regexp | $.VarRef<Regexp> | null> {
	let __goscriptTuple18: any = await Compile(str)
	let regexp: Regexp | $.VarRef<Regexp> | null = __goscriptTuple18[0]
	let err = __goscriptTuple18[1]
	if (err != null) {
		$.panic($.concatString(($.concatString(($.concatString("regexp: Compile(", quote(str))), "): ")), (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}
	return regexp
}

export async function MustCompilePOSIX(str: string): globalThis.Promise<Regexp | $.VarRef<Regexp> | null> {
	let __goscriptTuple19: any = await CompilePOSIX(str)
	let regexp: Regexp | $.VarRef<Regexp> | null = __goscriptTuple19[0]
	let err = __goscriptTuple19[1]
	if (err != null) {
		$.panic($.concatString(($.concatString(($.concatString("regexp: CompilePOSIX(", quote(str))), "): ")), (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}
	return regexp
}

export function quote(s: string): string {
	if (strconv.CanBackquote(s)) {
		return $.concatString(($.concatString("`", s)), "`")
	}
	return strconv.Quote(s)
}

export async function MatchReader(pattern: string, r: io.RuneReader | null): globalThis.Promise<[boolean, $.GoError]> {
	let matched: boolean = false
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple25: any = await Compile(pattern)
	let re: Regexp | $.VarRef<Regexp> | null = __goscriptTuple25[0]
	err = __goscriptTuple25[1]
	if (err != null) {
		return [false, err]
	}
	return [await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).MatchReader(r) : Regexp.prototype.MatchReader.call(re, r)), null]
}

export async function MatchString(pattern: string, s: string): globalThis.Promise<[boolean, $.GoError]> {
	let matched: boolean = false
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple26: any = await Compile(pattern)
	let re: Regexp | $.VarRef<Regexp> | null = __goscriptTuple26[0]
	err = __goscriptTuple26[1]
	if (err != null) {
		return [false, err]
	}
	return [await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).MatchString(s) : Regexp.prototype.MatchString.call(re, s)), null]
}

export async function Match(pattern: string, b: $.Slice<number>): globalThis.Promise<[boolean, $.GoError]> {
	let matched: boolean = false
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple27: any = await Compile(pattern)
	let re: Regexp | $.VarRef<Regexp> | null = __goscriptTuple27[0]
	err = __goscriptTuple27[1]
	if (err != null) {
		return [false, err]
	}
	return [await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as Regexp).Match(b) : Regexp.prototype.Match.call(re, b)), null]
}

export let specialBytes: Uint8Array = $.arrayValue(new Uint8Array(16))

export function __goscript_set_specialBytes(__goscriptValue: Uint8Array): void {
	specialBytes = __goscriptValue
}

export function special(b: number): boolean {
	return (b < 128) && ($.uint(($.arrayIndex(specialBytes, b % 16) & (((1 << (globalThis.Math.trunc(b / 16))) & 0xff))), 8) != 0)
}

function __goscriptInit0(): void {
	for (let __goscriptRangeTarget12 = new Uint8Array([92, 46, 43, 42, 63, 40, 41, 124, 91, 93, 123, 125, 94, 36]), __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
		let b = $.uint((__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as number), 8)
		specialBytes[b % 16] = specialBytes[b % 16] | ($.uint(((1 << (globalThis.Math.trunc(b / 16))) & 0xff), 8))
	}
}

export function QuoteMeta(s: string): string {
	// A byte loop is correct because all metacharacters are ASCII.
	let i: number = 0
	for (i = 0; i < $.stringLen(s); i++) {
		if (special($.indexString(s, i))) {
			break
		}
	}
	// No meta characters found, so return original string.
	if (i >= $.stringLen(s)) {
		return s
	}

	let b: $.Slice<number> = $.makeSlice<number>((2 * $.stringLen(s)) - i, undefined, "byte")
	$.copy(b, $.sliceStringOrBytes(s, undefined, i))
	let j = i
	for (let __goscriptSliceWindow5 = $.sliceRange(b); i < $.stringLen(s); i++) {
		if (special($.indexString(s, i))) {
			;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, j)] = 92
			j++
		}
		;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, j)] = $.indexString(s, i)
		j++
	}
	return $.bytesToString($.goSlice(b, undefined, j))
}

export function extract(str: string): [string, number, string, boolean] {
	let name: string = ""
	let num: number = 0
	let rest: string = ""
	let ok: boolean = false
	if ($.stringEqual(str, "")) {
		return [name, num, rest, ok]
	}
	let brace = false
	if ($.indexString(str, 0) == 123) {
		brace = true
		str = $.sliceStringOrBytes(str, 1, undefined)
	}
	let i = 0
	while (i < $.stringLen(str)) {
		let [rune, size] = utf8.DecodeRuneInString($.sliceStringOrBytes(str, i, undefined))
		if ((!unicode.IsLetter(rune) && !unicode.IsDigit(rune)) && (rune != 95)) {
			break
		}
		i = i + (size)
	}
	if (i == 0) {
		// empty name is not okay
		return [name, num, rest, ok]
	}
	name = $.sliceStringOrBytes(str, undefined, i)
	if (brace) {
		if ((i >= $.stringLen(str)) || ($.indexString(str, i) != 125)) {
			// missing closing brace
			return [name, num, rest, ok]
		}
		i++
	}

	// Parse number.
	num = 0
	for (let __goscriptShadow3 = 0; __goscriptShadow3 < $.stringLen(name); __goscriptShadow3++) {
		if ((($.indexString(name, __goscriptShadow3) < 48) || (57 < $.indexString(name, __goscriptShadow3))) || (num >= 100000000)) {
			num = -1
			break
		}
		num = ((num * 10) + $.int($.indexString(name, __goscriptShadow3))) - 48
	}
	// Disallow leading zeros.
	if (($.indexString(name, 0) == 48) && ($.stringLen(name) > 1)) {
		num = -1
	}

	rest = $.sliceStringOrBytes(str, i, undefined)
	ok = true
	return [name, num, rest, ok]
}

var __goscriptAwait: any

export { __goscriptInit0 }
