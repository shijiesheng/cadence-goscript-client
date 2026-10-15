// Generated file based on difflib.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/strings/index.js"

$.registerTypePackagePath("github.com/pmezard/go-difflib/difflib", ["difflib.Match", "difflib.OpCode", "difflib.SequenceMatcher", "difflib.UnifiedDiff", "difflib.ContextDiff"])

export class Match {
	public get A(): number {
		return this._fields.A
	}

	public set A(value: number) {
		this._fields.A = value
	}

	public get B(): number {
		return this._fields.B
	}

	public set B(value: number) {
		this._fields.B = value
	}

	public get Size(): number {
		return this._fields.Size
	}

	public set Size(value: number) {
		this._fields.Size = value
	}

	public _fields: {
		A: number
		B: number
		Size: number
	}

	constructor(init?: Partial<{A?: number, B?: number, Size?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			A: init?.A ?? (0 as number),
			B: init?.B ?? (0 as number),
			Size: init?.Size ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Match {
		return new Match(this, true)
	}

	public __goscriptAssign(source: Match): void {
		const target = this._fields
		const values = source._fields
		target.A = values.A
		target.B = values.B
		target.Size = values.Size
	}

	static __typeInfo = $.registerStructType(
		"difflib.Match",
		() => new Match(),
		() => [],
		Match,
		() => [/* @__PURE__ */ $.structField("A", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("B", /* @__PURE__ */ $.basicType("int"), [1], 8, true), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("int"), [2], 16, true)]
	)
}

export class OpCode {
	public get Tag(): number {
		return this._fields.Tag
	}

	public set Tag(value: number) {
		this._fields.Tag = value
	}

	public get I1(): number {
		return this._fields.I1
	}

	public set I1(value: number) {
		this._fields.I1 = value
	}

	public get I2(): number {
		return this._fields.I2
	}

	public set I2(value: number) {
		this._fields.I2 = value
	}

	public get J1(): number {
		return this._fields.J1
	}

	public set J1(value: number) {
		this._fields.J1 = value
	}

	public get J2(): number {
		return this._fields.J2
	}

	public set J2(value: number) {
		this._fields.J2 = value
	}

	public _fields: {
		Tag: number
		I1: number
		I2: number
		J1: number
		J2: number
	}

	constructor(init?: Partial<{Tag?: number, I1?: number, I2?: number, J1?: number, J2?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Tag: init?.Tag ?? (0 as number),
			I1: init?.I1 ?? (0 as number),
			I2: init?.I2 ?? (0 as number),
			J1: init?.J1 ?? (0 as number),
			J2: init?.J2 ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OpCode {
		return new OpCode(this, true)
	}

	public __goscriptAssign(source: OpCode): void {
		const target = this._fields
		const values = source._fields
		target.Tag = values.Tag
		target.I1 = values.I1
		target.I2 = values.I2
		target.J1 = values.J1
		target.J2 = values.J2
	}

	static __typeInfo = $.registerStructType(
		"difflib.OpCode",
		() => new OpCode(),
		() => [],
		OpCode,
		() => [/* @__PURE__ */ $.structField("Tag", /* @__PURE__ */ $.basicType("uint8"), [0], 0, true), /* @__PURE__ */ $.structField("I1", /* @__PURE__ */ $.basicType("int"), [1], 8, true), /* @__PURE__ */ $.structField("I2", /* @__PURE__ */ $.basicType("int"), [2], 16, true), /* @__PURE__ */ $.structField("J1", /* @__PURE__ */ $.basicType("int"), [3], 24, true), /* @__PURE__ */ $.structField("J2", /* @__PURE__ */ $.basicType("int"), [4], 32, true)]
	)
}

export class SequenceMatcher {
	public get a(): $.Slice<string> {
		return this._fields.a
	}

	public set a(value: $.Slice<string>) {
		this._fields.a = value
	}

	public get b(): $.Slice<string> {
		return this._fields.b
	}

	public set b(value: $.Slice<string>) {
		this._fields.b = value
	}

	public get b2j(): globalThis.Map<string, $.Slice<number>> | null {
		return this._fields.b2j
	}

	public set b2j(value: globalThis.Map<string, $.Slice<number>> | null) {
		this._fields.b2j = value
	}

	public get IsJunk(): ((_p0: string) => boolean | globalThis.Promise<boolean>) | null {
		return this._fields.IsJunk
	}

	public set IsJunk(value: ((_p0: string) => boolean | globalThis.Promise<boolean>) | null) {
		this._fields.IsJunk = value
	}

	public get autoJunk(): boolean {
		return this._fields.autoJunk
	}

	public set autoJunk(value: boolean) {
		this._fields.autoJunk = value
	}

	public get bJunk(): globalThis.Map<string, {}> | null {
		return this._fields.bJunk
	}

	public set bJunk(value: globalThis.Map<string, {}> | null) {
		this._fields.bJunk = value
	}

	public get matchingBlocks(): $.Slice<Match> {
		return this._fields.matchingBlocks
	}

	public set matchingBlocks(value: $.Slice<Match>) {
		this._fields.matchingBlocks = value
	}

	public get fullBCount(): globalThis.Map<string, number> | null {
		return this._fields.fullBCount
	}

	public set fullBCount(value: globalThis.Map<string, number> | null) {
		this._fields.fullBCount = value
	}

	public get bPopular(): globalThis.Map<string, {}> | null {
		return this._fields.bPopular
	}

	public set bPopular(value: globalThis.Map<string, {}> | null) {
		this._fields.bPopular = value
	}

	public get opCodes(): $.Slice<OpCode> {
		return this._fields.opCodes
	}

	public set opCodes(value: $.Slice<OpCode>) {
		this._fields.opCodes = value
	}

	public _fields: {
		a: $.Slice<string>
		b: $.Slice<string>
		b2j: globalThis.Map<string, $.Slice<number>> | null
		IsJunk: ((_p0: string) => boolean | globalThis.Promise<boolean>) | null
		autoJunk: boolean
		bJunk: globalThis.Map<string, {}> | null
		matchingBlocks: $.Slice<Match>
		fullBCount: globalThis.Map<string, number> | null
		bPopular: globalThis.Map<string, {}> | null
		opCodes: $.Slice<OpCode>
	}

	constructor(init?: Partial<{a?: $.Slice<string>, b?: $.Slice<string>, b2j?: globalThis.Map<string, $.Slice<number>> | null, IsJunk?: ((_p0: string) => boolean | globalThis.Promise<boolean>) | null, autoJunk?: boolean, bJunk?: globalThis.Map<string, {}> | null, matchingBlocks?: $.Slice<Match>, fullBCount?: globalThis.Map<string, number> | null, bPopular?: globalThis.Map<string, {}> | null, opCodes?: $.Slice<OpCode>}>, __goscriptValue?: boolean) {
		this._fields = {
			a: init?.a ?? (null! as $.Slice<string>),
			b: init?.b ?? (null! as $.Slice<string>),
			b2j: init?.b2j ?? (null! as globalThis.Map<string, $.Slice<number>> | null),
			IsJunk: init?.IsJunk ?? (null! as ((_p0: string) => boolean | globalThis.Promise<boolean>) | null),
			autoJunk: init?.autoJunk ?? (false as boolean),
			bJunk: init?.bJunk ?? (null! as globalThis.Map<string, {}> | null),
			matchingBlocks: init?.matchingBlocks ?? (null! as $.Slice<Match>),
			fullBCount: init?.fullBCount ?? (null! as globalThis.Map<string, number> | null),
			bPopular: init?.bPopular ?? (null! as globalThis.Map<string, {}> | null),
			opCodes: init?.opCodes ?? (null! as $.Slice<OpCode>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SequenceMatcher {
		return new SequenceMatcher(this, true)
	}

	public __goscriptAssign(source: SequenceMatcher): void {
		const target = this._fields
		const values = source._fields
		target.a = values.a
		target.b = values.b
		target.b2j = values.b2j
		target.IsJunk = values.IsJunk
		target.autoJunk = values.autoJunk
		target.bJunk = values.bJunk
		target.matchingBlocks = values.matchingBlocks
		target.fullBCount = values.fullBCount
		target.bPopular = values.bPopular
		target.opCodes = values.opCodes
	}

	public async GetGroupedOpCodes(n: number): globalThis.Promise<$.Slice<$.Slice<OpCode>>> {
		const m: SequenceMatcher | $.VarRef<SequenceMatcher> | null = this;
		if (n < 0) {
			n = 3
		}
		let codes: $.Slice<OpCode> = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SequenceMatcher).GetOpCodes() : SequenceMatcher.prototype.GetOpCodes.call(m))
		if ($.sliceLen(codes) == 0) {
			codes = $.arrayToSlice<OpCode>([new OpCode({Tag: 101, I1: 0, I2: 1, J1: 0, J2: 1}, true)])
		}
		// Fixup leading and trailing groups if they show no changes.
		if ($.arrayIndex(codes!, 0).Tag == 101) {
			let c = ($.arrayIndex(codes!, 0)).clone()
			let i1 = c.I1
			let i2 = c.I2
			let j1 = c.J1
			let j2 = c.J2
			$.assignStruct($.sliceElems(codes!)[$.sliceSlot(codes!, 0)], (() => { const __goscriptLiteralField0 = max(i1, i2 - n); const __goscriptLiteralField1 = max(j1, j2 - n); return new OpCode({Tag: c.Tag, I1: __goscriptLiteralField0, I2: i2, J1: __goscriptLiteralField1, J2: j2}, true) })())
		}
		if ($.arrayIndex(codes!, $.sliceLen(codes) - 1).Tag == 101) {
			let c = ($.arrayIndex(codes!, $.sliceLen(codes) - 1)).clone()
			let i1 = c.I1
			let i2 = c.I2
			let j1 = c.J1
			let j2 = c.J2
			$.assignStruct($.sliceElems(codes!)[$.sliceSlot(codes!, $.sliceLen(codes) - 1)], (() => { const __goscriptLiteralField2 = min(i2, i1 + n); const __goscriptLiteralField3 = min(j2, j1 + n); return new OpCode({Tag: c.Tag, I1: i1, I2: __goscriptLiteralField2, J1: j1, J2: __goscriptLiteralField3}, true) })())
		}
		let nn = n + n
		let groups: $.Slice<$.Slice<OpCode>> = $.arrayToSlice<$.Slice<OpCode>>([])
		let group: $.Slice<OpCode> = $.arrayToSlice<OpCode>([])
		for (let __goscriptRangeTarget0 = codes, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let c = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as OpCode)).clone()
			let i1 = c.I1
			let i2 = c.I2
			let j1 = c.J1
			let j2 = c.J2
			// End the current group and start a new one whenever
			// there is a large range with no changes.
			if ((c.Tag == 101) && ((i2 - i1) > nn)) {
				group = $.appendOne(group, (() => { const __goscriptLiteralField4 = min(i2, i1 + n); const __goscriptLiteralField5 = min(j2, j1 + n); return new OpCode({Tag: c.Tag, I1: i1, I2: __goscriptLiteralField4, J1: j1, J2: __goscriptLiteralField5}, true) })())
				groups = $.appendOne(groups, group, $.appendZeros.nil)
				group = $.arrayToSlice<OpCode>([])
				let __goscriptAssign0_0: number = max(i1, i2 - n)
				let __goscriptAssign0_1: number = max(j1, j2 - n)
				i1 = __goscriptAssign0_0
				j1 = __goscriptAssign0_1
			}
			group = $.appendOne(group, new OpCode({Tag: c.Tag, I1: i1, I2: i2, J1: j1, J2: j2}, true))
		}
		if (($.sliceLen(group) > 0) && !(($.sliceLen(group) == 1) && ($.arrayIndex(group!, 0).Tag == 101))) {
			groups = $.appendOne(groups, group, $.appendZeros.nil)
		}
		return groups
	}

	public async GetMatchingBlocks(): globalThis.Promise<$.Slice<Match>> {
		let m: SequenceMatcher | $.VarRef<SequenceMatcher> | null = this;
		const m$: SequenceMatcher = m == null ? $.pointerTarget<SequenceMatcher>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SequenceMatcher>(m)
		if ((m$ as SequenceMatcher).matchingBlocks != null) {
			return (m$ as SequenceMatcher).matchingBlocks
		}

		let matchBlocks: ((alo: number, ahi: number, blo: number, bhi: number, matched: $.Slice<Match>) => $.Slice<Match> | globalThis.Promise<$.Slice<Match>>) | null = null! as ((alo: number, ahi: number, blo: number, bhi: number, matched: $.Slice<Match>) => $.Slice<Match> | globalThis.Promise<$.Slice<Match>>) | null
		matchBlocks = $.functionValue(async (alo: number, ahi: number, blo: number, bhi: number, matched: $.Slice<Match>): globalThis.Promise<$.Slice<Match>> => {
			let match = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SequenceMatcher).findLongestMatch(alo, ahi, blo, bhi) : SequenceMatcher.prototype.findLongestMatch.call(m, alo, ahi, blo, bhi))
			let i = match.A
			let j = match.B
			let k = match.Size
			if (match.Size > 0) {
				if ((alo < i) && (blo < j)) {
					matched = ((__goscriptAwait = matchBlocks!(alo, i, blo, j, matched), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<Match>)
				}
				matched = $.appendOne(matched, (match).clone())
				if (((i + k) < ahi) && ((j + k) < bhi)) {
					matched = ((__goscriptAwait = matchBlocks!(i + k, ahi, j + k, bhi, matched), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<Match>)
				}
			}
			return matched
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.sliceType("difflib.Match")], results: [/* @__PURE__ */ $.sliceType("difflib.Match")] } as $.FunctionTypeInfo))
		let matched: $.Slice<Match> = ((__goscriptAwait = matchBlocks!(0, $.sliceLen((m$ as SequenceMatcher).a), 0, $.sliceLen((m$ as SequenceMatcher).b), null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<Match>)

		// It's possible that we have adjacent equal blocks in the
		// matching_blocks list now.
		let nonAdjacent: $.Slice<Match> = $.arrayToSlice<Match>([])
		let i1 = 0
		let j1 = 0
		let k1 = 0
		for (let __goscriptRangeTarget1 = matched, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let b = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as Match)).clone()
			// Is this block adjacent to i1, j1, k1?
			let i2 = b.A
			let j2 = b.B
			let k2 = b.Size
			if (((i1 + k1) == i2) && ((j1 + k1) == j2)) {
				// Yes, so collapse them -- this just increases the length of
				// the first block by the length of the second, and the first
				// block so lengthened remains the block to compare against.
				k1 = k1 + (k2)
			} else {
				// Not adjacent.  Remember the first block (k1==0 means it's
				// the dummy we started with), and make the second block the
				// new block to compare against.
				if (k1 > 0) {
					nonAdjacent = $.appendOne(nonAdjacent, new Match({A: i1, B: j1, Size: k1}, true))
				}
				let __goscriptAssign1_0: number = i2
				let __goscriptAssign1_1: number = j2
				let __goscriptAssign1_2: number = k2
				i1 = __goscriptAssign1_0
				j1 = __goscriptAssign1_1
				k1 = __goscriptAssign1_2
			}
		}
		if (k1 > 0) {
			nonAdjacent = $.appendOne(nonAdjacent, new Match({A: i1, B: j1, Size: k1}, true))
		}

		nonAdjacent = $.appendOne(nonAdjacent, new Match({A: $.sliceLen((m$ as SequenceMatcher).a), B: $.sliceLen((m$ as SequenceMatcher).b), Size: 0}, true));
		;(m$ as SequenceMatcher).matchingBlocks = nonAdjacent
		return (m$ as SequenceMatcher).matchingBlocks
	}

	public async GetOpCodes(): globalThis.Promise<$.Slice<OpCode>> {
		let m: SequenceMatcher | $.VarRef<SequenceMatcher> | null = this;
		const m$: SequenceMatcher = m == null ? $.pointerTarget<SequenceMatcher>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SequenceMatcher>(m)
		if ((m$ as SequenceMatcher).opCodes != null) {
			return (m$ as SequenceMatcher).opCodes
		}
		let i = 0
		let j = 0
		let matching: $.Slice<Match> = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SequenceMatcher).GetMatchingBlocks() : SequenceMatcher.prototype.GetMatchingBlocks.call(m))
		let opCodes: $.Slice<OpCode> = $.makeSlice<OpCode>(0, $.sliceLen(matching), undefined, () => new OpCode(undefined, true))
		for (let __goscriptRangeTarget2 = matching, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let m = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as Match)).clone()
			//  invariant:  we've pumped out correct diffs to change
			//  a[:i] into b[:j], and the next matching block is
			//  a[ai:ai+size] == b[bj:bj+size]. So we need to pump
			//  out a diff to change a[i:ai] into b[j:bj], pump out
			//  the matching block, and move (i,j) beyond the match
			let ai = m.A
			let bj = m.B
			let size = m.Size
			let tag = 0
			if ((i < ai) && (j < bj)) {
				tag = 114
			} else {
				if (i < ai) {
					tag = 100
				} else {
					if (j < bj) {
						tag = 105
					}
				}
			}
			if (tag > 0) {
				opCodes = $.appendOne(opCodes, new OpCode({Tag: tag, I1: i, I2: ai, J1: j, J2: bj}, true))
			}
			let __goscriptAssign2_0: number = ai + size
			let __goscriptAssign2_1: number = bj + size
			i = __goscriptAssign2_0
			j = __goscriptAssign2_1
			// the list of matching blocks is terminated by a
			// sentinel with size 0
			if (size > 0) {
				opCodes = $.appendOne(opCodes, new OpCode({Tag: 101, I1: ai, I2: i, J1: bj, J2: j}, true))
			}
		}
		;(m$ as SequenceMatcher).opCodes = opCodes
		return (m$ as SequenceMatcher).opCodes
	}

	public QuickRatio(): number {
		let m: SequenceMatcher | $.VarRef<SequenceMatcher> | null = this;
		const m$: SequenceMatcher = m == null ? $.pointerTarget<SequenceMatcher>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SequenceMatcher>(m)
		// viewing a and b as multisets, set matches to the cardinality
		// of their intersection; this counts the number of matches
		// without regard to order, so is clearly an upper bound
		if ((m$ as SequenceMatcher).fullBCount == null) {
			;(m$ as SequenceMatcher).fullBCount = $.makeMap<string, number>([])
			for (let __goscriptRangeTarget3 = (m$ as SequenceMatcher).b, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
				let s = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
				$.mapSet((m$ as SequenceMatcher).fullBCount, s, $.mapGet<string, number, number>((m$ as SequenceMatcher).fullBCount, s, 0)[0] + 1)
			}
		}

		// avail[x] is the number of times x appears in 'b' less the
		// number of times we've seen it in 'a' so far ... kinda
		let avail: globalThis.Map<string, number> | null = $.makeMap<string, number>([])
		let matches = 0
		for (let __goscriptRangeTarget4 = (m$ as SequenceMatcher).a, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let s = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as string)
			let [n, ok] = $.mapGet<string, number, number>(avail, s, 0)
			if (!ok) {
				n = $.mapGet<string, number, number>((m$ as SequenceMatcher).fullBCount, s, 0)[0]
			}
			$.mapSet(avail, s, n - 1)
			if (n > 0) {
				matches = matches + (1)
			}
		}
		return calculateRatio(matches, $.sliceLen((m$ as SequenceMatcher).a) + $.sliceLen((m$ as SequenceMatcher).b))
	}

	public async Ratio(): globalThis.Promise<number> {
		const m: SequenceMatcher | $.VarRef<SequenceMatcher> | null = this;
		const m$: SequenceMatcher = m == null ? $.pointerTarget<SequenceMatcher>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SequenceMatcher>(m)
		let matches = 0
		for (let __goscriptRangeTarget5 = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SequenceMatcher).GetMatchingBlocks() : SequenceMatcher.prototype.GetMatchingBlocks.call(m)), __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let __goscriptRangeShadow0 = ((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as Match)).clone()
			matches = matches + (__goscriptRangeShadow0.Size)
		}
		return calculateRatio(matches, $.sliceLen((m$ as SequenceMatcher).a) + $.sliceLen((m$ as SequenceMatcher).b))
	}

	public RealQuickRatio(): number {
		const m: SequenceMatcher | $.VarRef<SequenceMatcher> | null = this;
		const m$: SequenceMatcher = m == null ? $.pointerTarget<SequenceMatcher>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SequenceMatcher>(m)
		let la = $.sliceLen((m$ as SequenceMatcher).a)
		let lb = $.sliceLen((m$ as SequenceMatcher).b)
		return calculateRatio(min(la, lb), la + lb)
	}

	public SetSeq1(__goscriptParam0: $.Slice<string>): void {
		let m: SequenceMatcher | $.VarRef<SequenceMatcher> | null = this;
		let a: $.VarRef<$.Slice<string>> = $.varRef(__goscriptParam0)
		const m$: SequenceMatcher = m == null ? $.pointerTarget<SequenceMatcher>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SequenceMatcher>(m)
		if ($.pointerEqual(a, $.fieldRef((m$ as SequenceMatcher)._fields, "a"))) {
			return
		}
		;(m$ as SequenceMatcher).a = a.value;
		;(m$ as SequenceMatcher).matchingBlocks = null;
		;(m$ as SequenceMatcher).opCodes = null
	}

	public async SetSeq2(__goscriptParam1: $.Slice<string>): globalThis.Promise<void> {
		let m: SequenceMatcher | $.VarRef<SequenceMatcher> | null = this;
		let b: $.VarRef<$.Slice<string>> = $.varRef(__goscriptParam1)
		const m$: SequenceMatcher = m == null ? $.pointerTarget<SequenceMatcher>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SequenceMatcher>(m)
		if ($.pointerEqual(b, $.fieldRef((m$ as SequenceMatcher)._fields, "b"))) {
			return
		}
		;(m$ as SequenceMatcher).b = b.value;
		;(m$ as SequenceMatcher).matchingBlocks = null;
		;(m$ as SequenceMatcher).opCodes = null;
		;(m$ as SequenceMatcher).fullBCount = null
		await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SequenceMatcher).chainB() : SequenceMatcher.prototype.chainB.call(m))
	}

	public async SetSeqs(a: $.Slice<string>, b: $.Slice<string>): globalThis.Promise<void> {
		const m: SequenceMatcher | $.VarRef<SequenceMatcher> | null = this;
		void (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SequenceMatcher).SetSeq1(a) : SequenceMatcher.prototype.SetSeq1.call(m, a))
		await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SequenceMatcher).SetSeq2(b) : SequenceMatcher.prototype.SetSeq2.call(m, b))
	}

	public async chainB(): globalThis.Promise<void> {
		let m: SequenceMatcher | $.VarRef<SequenceMatcher> | null = this;
		const m$: SequenceMatcher = m == null ? $.pointerTarget<SequenceMatcher>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SequenceMatcher>(m)
		// Populate line -> index mapping
		let b2j: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>([])
		for (let __goscriptRangeTarget6 = (m$ as SequenceMatcher).b, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), i = 0; i < __goscriptRangeWindow6.length; i++) {
			let s = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + i] as string)
			let indices: $.Slice<number> = $.mapGet<string, $.Slice<number>, $.Slice<number>>(b2j, s, null)[0]
			indices = $.appendOne(indices, i)
			$.mapSet(b2j, s, indices)
		}

		// Purge junk elements
		;(m$ as SequenceMatcher).bJunk = $.makeMap<string, {}>([])
		if ((m$ as SequenceMatcher).IsJunk != null) {
			let junk: globalThis.Map<string, {}> | null = (m$ as SequenceMatcher).bJunk
			for (let [s, __rangeValue] of b2j?.entries() ?? []) {
				if ((__goscriptAwait = (m$ as SequenceMatcher).IsJunk!(s), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					$.mapSet(junk, s, {})
				}
			}
			for (const [s, __rangeValue] of junk?.entries() ?? []) {
				$.deleteMapEntry(b2j, s)
			}
		}

		// Purge remaining popular elements
		let popular: globalThis.Map<string, {}> | null = $.makeMap<string, {}>([])
		let n = $.sliceLen((m$ as SequenceMatcher).b)
		if ((m$ as SequenceMatcher).autoJunk && (n >= 200)) {
			let ntest = (globalThis.Math.trunc(n / 100)) + 1
			for (let [s, indices] of b2j?.entries() ?? []) {
				if ($.sliceLen(indices) > ntest) {
					$.mapSet(popular, s, {})
				}
			}
			for (const [s, __rangeValue] of popular?.entries() ?? []) {
				$.deleteMapEntry(b2j, s)
			}
		}
		;(m$ as SequenceMatcher).bPopular = popular;
		;(m$ as SequenceMatcher).b2j = b2j
	}

	public findLongestMatch(alo: number, ahi: number, blo: number, bhi: number): Match {
		const m: SequenceMatcher | $.VarRef<SequenceMatcher> | null = this;
		const m$: SequenceMatcher = m == null ? $.pointerTarget<SequenceMatcher>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SequenceMatcher>(m)
		// CAUTION:  stripping common prefix or suffix would be incorrect.
		// E.g.,
		//    ab
		//    acab
		// Longest matching block is "ab", but if common prefix is
		// stripped, it's "a" (tied with "b").  UNIX(tm) diff does so
		// strip, so ends up claiming that ab is changed to acab by
		// inserting "ca" in the middle.  That's minimal but unintuitive:
		// "it's obvious" that someone inserted "ac" at the front.
		// Windiff ends up at the same place as diff, but by pairing up
		// the unique 'b's and then matching the first two 'a's.
		let besti = alo
		let bestj = blo
		let bestsize = 0

		// find longest junk-free match
		// during an iteration of the loop, j2len[j] = length of longest
		// junk-free match ending with a[i-1] and b[j]
		let j2len: globalThis.Map<number, number> | null = $.makeMap<number, number>([])
		for (let i = alo; i != ahi; i++) {
			// look at all instances of a[i] in b; note that because
			// b2j has no junk keys, the loop is skipped if a[i] is junk
			let newj2len: globalThis.Map<number, number> | null = $.makeMap<number, number>([])
			for (let __goscriptRangeTarget7 = $.mapGet<string, $.Slice<number>, $.Slice<number>>((m$ as SequenceMatcher).b2j, $.arrayIndex((m$ as SequenceMatcher).a!, i), null)[0], __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
				let j = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as number)
				// a[i] matches b[j]
				if (j < blo) {
					continue
				}
				if (j >= bhi) {
					break
				}
				let k = $.mapGet<number, number, number>(j2len, j - 1, 0)[0] + 1
				$.mapSet(newj2len, j, k)
				if (k > bestsize) {
					let __goscriptAssign3_0: number = (i - k) + 1
					let __goscriptAssign3_1: number = (j - k) + 1
					let __goscriptAssign3_2: number = k
					besti = __goscriptAssign3_0
					bestj = __goscriptAssign3_1
					bestsize = __goscriptAssign3_2
				}
			}
			j2len = newj2len
		}

		// Extend the best by non-junk elements on each end.  In particular,
		// "popular" non-junk elements aren't in b2j, which greatly speeds
		// the inner loop above, but also means "the best" match so far
		// doesn't contain any junk *or* popular non-junk elements.
		while ((((besti > alo) && (bestj > blo)) && !(m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SequenceMatcher).isBJunk($.arrayIndex((m$ as SequenceMatcher).b!, bestj - 1)) : SequenceMatcher.prototype.isBJunk.call(m, $.arrayIndex((m$ as SequenceMatcher).b!, bestj - 1)))) && ($.stringEqual($.arrayIndex((m$ as SequenceMatcher).a!, besti - 1), $.arrayIndex((m$ as SequenceMatcher).b!, bestj - 1)))) {
			let __goscriptAssign4_0: number = besti - 1
			let __goscriptAssign4_1: number = bestj - 1
			let __goscriptAssign4_2: number = bestsize + 1
			besti = __goscriptAssign4_0
			bestj = __goscriptAssign4_1
			bestsize = __goscriptAssign4_2
		}
		while (((((besti + bestsize) < ahi) && ((bestj + bestsize) < bhi)) && !(m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SequenceMatcher).isBJunk($.arrayIndex((m$ as SequenceMatcher).b!, bestj + bestsize)) : SequenceMatcher.prototype.isBJunk.call(m, $.arrayIndex((m$ as SequenceMatcher).b!, bestj + bestsize)))) && ($.stringEqual($.arrayIndex((m$ as SequenceMatcher).a!, besti + bestsize), $.arrayIndex((m$ as SequenceMatcher).b!, bestj + bestsize)))) {
			bestsize = bestsize + (1)
		}

		// Now that we have a wholly interesting match (albeit possibly
		// empty!), we may as well suck up the matching junk on each
		// side of it too.  Can't think of a good reason not to, and it
		// saves post-processing the (possibly considerable) expense of
		// figuring out what to do with it.  In the case of an empty
		// interesting match, this is clearly the right thing to do,
		// because no other kind of match is possible in the regions.
		while ((((besti > alo) && (bestj > blo)) && (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SequenceMatcher).isBJunk($.arrayIndex((m$ as SequenceMatcher).b!, bestj - 1)) : SequenceMatcher.prototype.isBJunk.call(m, $.arrayIndex((m$ as SequenceMatcher).b!, bestj - 1)))) && ($.stringEqual($.arrayIndex((m$ as SequenceMatcher).a!, besti - 1), $.arrayIndex((m$ as SequenceMatcher).b!, bestj - 1)))) {
			let __goscriptAssign5_0: number = besti - 1
			let __goscriptAssign5_1: number = bestj - 1
			let __goscriptAssign5_2: number = bestsize + 1
			besti = __goscriptAssign5_0
			bestj = __goscriptAssign5_1
			bestsize = __goscriptAssign5_2
		}
		while (((((besti + bestsize) < ahi) && ((bestj + bestsize) < bhi)) && (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SequenceMatcher).isBJunk($.arrayIndex((m$ as SequenceMatcher).b!, bestj + bestsize)) : SequenceMatcher.prototype.isBJunk.call(m, $.arrayIndex((m$ as SequenceMatcher).b!, bestj + bestsize)))) && ($.stringEqual($.arrayIndex((m$ as SequenceMatcher).a!, besti + bestsize), $.arrayIndex((m$ as SequenceMatcher).b!, bestj + bestsize)))) {
			bestsize = bestsize + (1)
		}

		return new Match({A: besti, B: bestj, Size: bestsize}, true)
	}

	public isBJunk(s: string): boolean {
		const m: SequenceMatcher | $.VarRef<SequenceMatcher> | null = this;
		let [, ok] = $.mapGet<string, {}, {}>($.pointerValue<SequenceMatcher>(m).bJunk, s, {})
		return ok
	}

	static __typeInfo = $.registerStructType(
		"difflib.SequenceMatcher",
		() => new SequenceMatcher(),
		() => [$.methodSignature("GetGroupedOpCodes", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType("difflib.OpCode"))], true), $.methodSignature("GetMatchingBlocks", [], [/* @__PURE__ */ $.sliceType("difflib.Match")], true), $.methodSignature("GetOpCodes", [], [/* @__PURE__ */ $.sliceType("difflib.OpCode")], true), $.methodSignature("QuickRatio", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("Ratio", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("RealQuickRatio", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("SetSeq1", [["a", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true), $.methodSignature("SetSeq2", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true), $.methodSignature("SetSeqs", [["a", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true), $.methodSignature("chainB", [], [], true), $.methodSignature("findLongestMatch", [["alo", /* @__PURE__ */ $.basicType("int")], ["ahi", /* @__PURE__ */ $.basicType("int")], ["blo", /* @__PURE__ */ $.basicType("int")], ["bhi", /* @__PURE__ */ $.basicType("int")]], ["difflib.Match"], true), $.methodSignature("isBJunk", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")], true)],
		SequenceMatcher,
		() => [/* @__PURE__ */ $.structField("a", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, false, { pkgPath: "github.com/pmezard/go-difflib/difflib" }), /* @__PURE__ */ $.structField("b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [1], 24, false, { pkgPath: "github.com/pmezard/go-difflib/difflib" }), /* @__PURE__ */ $.structField("b2j", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))), [2], 48, false, { pkgPath: "github.com/pmezard/go-difflib/difflib" }), /* @__PURE__ */ $.structField("IsJunk", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo), [3], 56, true), /* @__PURE__ */ $.structField("autoJunk", /* @__PURE__ */ $.basicType("bool"), [4], 64, false, { pkgPath: "github.com/pmezard/go-difflib/difflib" }), /* @__PURE__ */ $.structField("bJunk", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [5], 72, false, { pkgPath: "github.com/pmezard/go-difflib/difflib" }), /* @__PURE__ */ $.structField("matchingBlocks", /* @__PURE__ */ $.sliceType("difflib.Match"), [6], 80, false, { pkgPath: "github.com/pmezard/go-difflib/difflib" }), /* @__PURE__ */ $.structField("fullBCount", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int")), [7], 104, false, { pkgPath: "github.com/pmezard/go-difflib/difflib" }), /* @__PURE__ */ $.structField("bPopular", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [8], 112, false, { pkgPath: "github.com/pmezard/go-difflib/difflib" }), /* @__PURE__ */ $.structField("opCodes", /* @__PURE__ */ $.sliceType("difflib.OpCode"), [9], 120, false, { pkgPath: "github.com/pmezard/go-difflib/difflib" })]
	)
}

export class UnifiedDiff {
	public get A(): $.Slice<string> {
		return this._fields.A
	}

	public set A(value: $.Slice<string>) {
		this._fields.A = value
	}

	public get FromFile(): string {
		return this._fields.FromFile
	}

	public set FromFile(value: string) {
		this._fields.FromFile = value
	}

	public get FromDate(): string {
		return this._fields.FromDate
	}

	public set FromDate(value: string) {
		this._fields.FromDate = value
	}

	public get B(): $.Slice<string> {
		return this._fields.B
	}

	public set B(value: $.Slice<string>) {
		this._fields.B = value
	}

	public get ToFile(): string {
		return this._fields.ToFile
	}

	public set ToFile(value: string) {
		this._fields.ToFile = value
	}

	public get ToDate(): string {
		return this._fields.ToDate
	}

	public set ToDate(value: string) {
		this._fields.ToDate = value
	}

	public get Eol(): string {
		return this._fields.Eol
	}

	public set Eol(value: string) {
		this._fields.Eol = value
	}

	public get Context(): number {
		return this._fields.Context
	}

	public set Context(value: number) {
		this._fields.Context = value
	}

	public _fields: {
		A: $.Slice<string>
		FromFile: string
		FromDate: string
		B: $.Slice<string>
		ToFile: string
		ToDate: string
		Eol: string
		Context: number
	}

	constructor(init?: Partial<{A?: $.Slice<string>, FromFile?: string, FromDate?: string, B?: $.Slice<string>, ToFile?: string, ToDate?: string, Eol?: string, Context?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			A: init?.A ?? (null! as $.Slice<string>),
			FromFile: init?.FromFile ?? ("" as string),
			FromDate: init?.FromDate ?? ("" as string),
			B: init?.B ?? (null! as $.Slice<string>),
			ToFile: init?.ToFile ?? ("" as string),
			ToDate: init?.ToDate ?? ("" as string),
			Eol: init?.Eol ?? ("" as string),
			Context: init?.Context ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UnifiedDiff {
		return new UnifiedDiff(this, true)
	}

	public __goscriptAssign(source: UnifiedDiff): void {
		const target = this._fields
		const values = source._fields
		target.A = values.A
		target.FromFile = values.FromFile
		target.FromDate = values.FromDate
		target.B = values.B
		target.ToFile = values.ToFile
		target.ToDate = values.ToDate
		target.Eol = values.Eol
		target.Context = values.Context
	}

	static __typeInfo = $.registerStructType(
		"difflib.UnifiedDiff",
		() => new UnifiedDiff(),
		() => [],
		UnifiedDiff,
		() => [/* @__PURE__ */ $.structField("A", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, true), /* @__PURE__ */ $.structField("FromFile", /* @__PURE__ */ $.basicType("string"), [1], 24, true), /* @__PURE__ */ $.structField("FromDate", /* @__PURE__ */ $.basicType("string"), [2], 40, true), /* @__PURE__ */ $.structField("B", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 56, true), /* @__PURE__ */ $.structField("ToFile", /* @__PURE__ */ $.basicType("string"), [4], 80, true), /* @__PURE__ */ $.structField("ToDate", /* @__PURE__ */ $.basicType("string"), [5], 96, true), /* @__PURE__ */ $.structField("Eol", /* @__PURE__ */ $.basicType("string"), [6], 112, true), /* @__PURE__ */ $.structField("Context", /* @__PURE__ */ $.basicType("int"), [7], 128, true)]
	)
}

export class ContextDiff {
	public get A(): $.Slice<string> {
		return this._fields.A
	}

	public set A(value: $.Slice<string>) {
		this._fields.A = value
	}

	public get FromFile(): string {
		return this._fields.FromFile
	}

	public set FromFile(value: string) {
		this._fields.FromFile = value
	}

	public get FromDate(): string {
		return this._fields.FromDate
	}

	public set FromDate(value: string) {
		this._fields.FromDate = value
	}

	public get B(): $.Slice<string> {
		return this._fields.B
	}

	public set B(value: $.Slice<string>) {
		this._fields.B = value
	}

	public get ToFile(): string {
		return this._fields.ToFile
	}

	public set ToFile(value: string) {
		this._fields.ToFile = value
	}

	public get ToDate(): string {
		return this._fields.ToDate
	}

	public set ToDate(value: string) {
		this._fields.ToDate = value
	}

	public get Eol(): string {
		return this._fields.Eol
	}

	public set Eol(value: string) {
		this._fields.Eol = value
	}

	public get Context(): number {
		return this._fields.Context
	}

	public set Context(value: number) {
		this._fields.Context = value
	}

	public _fields: {
		A: $.Slice<string>
		FromFile: string
		FromDate: string
		B: $.Slice<string>
		ToFile: string
		ToDate: string
		Eol: string
		Context: number
	}

	constructor(init?: Partial<{A?: $.Slice<string>, FromFile?: string, FromDate?: string, B?: $.Slice<string>, ToFile?: string, ToDate?: string, Eol?: string, Context?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			A: init?.A ?? (null! as $.Slice<string>),
			FromFile: init?.FromFile ?? ("" as string),
			FromDate: init?.FromDate ?? ("" as string),
			B: init?.B ?? (null! as $.Slice<string>),
			ToFile: init?.ToFile ?? ("" as string),
			ToDate: init?.ToDate ?? ("" as string),
			Eol: init?.Eol ?? ("" as string),
			Context: init?.Context ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ContextDiff {
		return new ContextDiff(this, true)
	}

	public __goscriptAssign(source: ContextDiff): void {
		const target = this._fields
		const values = source._fields
		target.A = values.A
		target.FromFile = values.FromFile
		target.FromDate = values.FromDate
		target.B = values.B
		target.ToFile = values.ToFile
		target.ToDate = values.ToDate
		target.Eol = values.Eol
		target.Context = values.Context
	}

	static __typeInfo = $.registerStructType(
		"difflib.ContextDiff",
		() => new ContextDiff(),
		() => [],
		ContextDiff,
		() => [/* @__PURE__ */ $.structField("A", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, true), /* @__PURE__ */ $.structField("FromFile", /* @__PURE__ */ $.basicType("string"), [1], 24, true), /* @__PURE__ */ $.structField("FromDate", /* @__PURE__ */ $.basicType("string"), [2], 40, true), /* @__PURE__ */ $.structField("B", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 56, true), /* @__PURE__ */ $.structField("ToFile", /* @__PURE__ */ $.basicType("string"), [4], 80, true), /* @__PURE__ */ $.structField("ToDate", /* @__PURE__ */ $.basicType("string"), [5], 96, true), /* @__PURE__ */ $.structField("Eol", /* @__PURE__ */ $.basicType("string"), [6], 112, true), /* @__PURE__ */ $.structField("Context", /* @__PURE__ */ $.basicType("int"), [7], 128, true)]
	)
}

export function min(a: number, b: number): number {
	if (a < b) {
		return a
	}
	return b
}

export function max(a: number, b: number): number {
	if (a > b) {
		return a
	}
	return b
}

export function calculateRatio(matches: number, length: number): number {
	if (length > 0) {
		return (2.0 * matches) / length
	}
	return 1.0
}

export async function NewMatcher(a: $.Slice<string>, b: $.Slice<string>): globalThis.Promise<SequenceMatcher | $.VarRef<SequenceMatcher> | null> {
	let m = $.varRef(new SequenceMatcher({autoJunk: true}, true))
	await m.value.SetSeqs(a, b)
	return m
}

export async function NewMatcherWithJunk(a: $.Slice<string>, b: $.Slice<string>, autoJunk: boolean, isJunk: ((_p0: string) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<SequenceMatcher | $.VarRef<SequenceMatcher> | null> {

	let m = $.varRef(new SequenceMatcher({IsJunk: isJunk, autoJunk: autoJunk}, true))
	await m.value.SetSeqs(a, b)
	return m
}

export async function formatRangeUnified(start: number, stop: number): globalThis.Promise<string> {
	// Per the diff spec at http://www.unix.org/single_unix_specification/
	let beginning = start + 1
	let length = stop - start
	if (length == 1) {
		return fmt.Sprintf("%d", $.basicInterfaceValue(beginning, "int"))
	}
	if (length == 0) {
		beginning = beginning - (1)
	}
	return fmt.Sprintf("%d,%d", $.basicInterfaceValue(beginning, "int"), $.basicInterfaceValue(length, "int"))
}

export async function WriteUnifiedDiff(writer: io.Writer | null, diff: UnifiedDiff): globalThis.Promise<$.GoError> {
	await using __defer = new $.AsyncDisposableStack()
	let buf: bufio.Writer | $.VarRef<bufio.Writer> | null = bufio.NewWriter(writer)
	__defer.defer(async () => { await (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as bufio.Writer).Flush() : bufio.Writer.prototype.Flush.call(buf)) })
	let wf: ((format: string, args: $.Slice<any>) => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (format: string, args: $.Slice<any>): globalThis.Promise<$.GoError> => {
		let [, err] = await (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as bufio.Writer).WriteString(await fmt.Sprintf(format, ...(args ?? []))) : bufio.Writer.prototype.WriteString.call(buf, await fmt.Sprintf(format, ...(args ?? []))))
		return err
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: ["error"], isVariadic: true } as $.FunctionTypeInfo))
	let ws: ((s: string) => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (s: string): globalThis.Promise<$.GoError> => {
		let [, err] = await (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as bufio.Writer).WriteString(s) : bufio.Writer.prototype.WriteString.call(buf, s))
		return err
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo))

	if ($.stringLen(diff.Eol) == 0) {
		diff.Eol = "\n"
	}

	let started = false
	let m: SequenceMatcher | $.VarRef<SequenceMatcher> | null = await NewMatcher(diff.A, diff.B)
	for (let __goscriptRangeTarget12 = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SequenceMatcher).GetGroupedOpCodes(diff.Context) : SequenceMatcher.prototype.GetGroupedOpCodes.call(m, diff.Context)), __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
		let g = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as $.Slice<OpCode>)
		if (!started) {
			started = true
			let fromDate = ""
			if ($.stringLen(diff.FromDate) > 0) {
				fromDate = $.concatString("\t", diff.FromDate)
			}
			let toDate = ""
			if ($.stringLen(diff.ToDate) > 0) {
				toDate = $.concatString("\t", diff.ToDate)
			}
			if ((!$.stringEqual(diff.FromFile, "")) || (!$.stringEqual(diff.ToFile, ""))) {
				let err = (__goscriptAwait = wf!("--- %s%s%s", $.arrayToSlice<any>([diff.FromFile, fromDate, diff.Eol])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
				err = (__goscriptAwait = wf!("+++ %s%s%s", $.arrayToSlice<any>([diff.ToFile, toDate, diff.Eol])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}
		let first = ($.arrayIndex(g!, 0)).clone()
		let last = ($.arrayIndex(g!, $.sliceLen(g) - 1)).clone()
		let range1 = await formatRangeUnified(first.I1, last.I2)
		let range2 = await formatRangeUnified(first.J1, last.J2)
		{
			let err = (__goscriptAwait = wf!("@@ -%s +%s @@%s", $.arrayToSlice<any>([range1, range2, diff.Eol])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
		for (let __goscriptRangeTarget11 = g, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
			let c = ((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as OpCode)).clone()
			let i1 = c.I1
			let i2 = c.I2
			let j1 = c.J1
			let j2 = c.J2
			if (c.Tag == 101) {
				for (let __goscriptRangeTarget8 = $.goSlice(diff.A, i1, i2), __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
					let line = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as string)
					{
						let err = (__goscriptAwait = ws!($.concatString(" ", line)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (err != null) {
							return err
						}
					}
				}
				continue
			}
			if ((c.Tag == 114) || (c.Tag == 100)) {
				for (let __goscriptRangeTarget9 = $.goSlice(diff.A, i1, i2), __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
					let line = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as string)
					{
						let err = (__goscriptAwait = ws!($.concatString("-", line)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (err != null) {
							return err
						}
					}
				}
			}
			if ((c.Tag == 114) || (c.Tag == 105)) {
				for (let __goscriptRangeTarget10 = $.goSlice(diff.B, j1, j2), __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
					let line = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as string)
					{
						let err = (__goscriptAwait = ws!($.concatString("+", line)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (err != null) {
							return err
						}
					}
				}
			}
		}
	}
	return null
}

export async function GetUnifiedDiffString(diff: UnifiedDiff): globalThis.Promise<[string, $.GoError]> {
	let w: bytes.Buffer | $.VarRef<bytes.Buffer> | null = new bytes.Buffer()
	let err = await WriteUnifiedDiff($.interfaceValue<io.Writer | null>(w, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")), (diff).clone())
	return [$.bytesToString(bytes.Buffer.prototype.Bytes.call($.pointerValue<bytes.Buffer>(w))), err]
}

export async function formatRangeContext(start: number, stop: number): globalThis.Promise<string> {
	// Per the diff spec at http://www.unix.org/single_unix_specification/
	let beginning = start + 1
	let length = stop - start
	if (length == 0) {
		beginning = beginning - (1)
	}
	if (length <= 1) {
		return fmt.Sprintf("%d", $.basicInterfaceValue(beginning, "int"))
	}
	return fmt.Sprintf("%d,%d", $.basicInterfaceValue(beginning, "int"), $.basicInterfaceValue((beginning + length) - 1, "int"))
}

export async function WriteContextDiff(writer: io.Writer | null, diff: ContextDiff): globalThis.Promise<$.GoError> {
	await using __defer = new $.AsyncDisposableStack()
	let buf: bufio.Writer | $.VarRef<bufio.Writer> | null = bufio.NewWriter(writer)
	__defer.defer(async () => { await (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as bufio.Writer).Flush() : bufio.Writer.prototype.Flush.call(buf)) })
	let diffErr: $.GoError = null! as $.GoError
	let wf: ((format: string, args: $.Slice<any>) => void) | null = $.functionValue(async (format: string, args: $.Slice<any>): globalThis.Promise<void> => {
		let [, err] = await (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as bufio.Writer).WriteString(await fmt.Sprintf(format, ...(args ?? []))) : bufio.Writer.prototype.WriteString.call(buf, await fmt.Sprintf(format, ...(args ?? []))))
		if ((diffErr == null) && (err != null)) {
			diffErr = err
		}
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [], isVariadic: true } as $.FunctionTypeInfo))
	let ws: ((s: string) => void) | null = $.functionValue(async (s: string): globalThis.Promise<void> => {
		let [, err] = await (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as bufio.Writer).WriteString(s) : bufio.Writer.prototype.WriteString.call(buf, s))
		if ((diffErr == null) && (err != null)) {
			diffErr = err
		}
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo))

	if ($.stringLen(diff.Eol) == 0) {
		diff.Eol = "\n"
	}

	let prefix: globalThis.Map<number, string> | null = $.makeMap<number, string>([[105, "+ "], [100, "- "], [114, "! "], [101, "  "]])

	let started = false
	let m: SequenceMatcher | $.VarRef<SequenceMatcher> | null = await NewMatcher(diff.A, diff.B)
	for (let __goscriptRangeTarget19 = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SequenceMatcher).GetGroupedOpCodes(diff.Context) : SequenceMatcher.prototype.GetGroupedOpCodes.call(m, diff.Context)), __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget19), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
		let g = (__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as $.Slice<OpCode>)
		if (!started) {
			started = true
			let fromDate = ""
			if ($.stringLen(diff.FromDate) > 0) {
				fromDate = $.concatString("\t", diff.FromDate)
			}
			let toDate = ""
			if ($.stringLen(diff.ToDate) > 0) {
				toDate = $.concatString("\t", diff.ToDate)
			}
			if ((!$.stringEqual(diff.FromFile, "")) || (!$.stringEqual(diff.ToFile, ""))) {
				void (__goscriptAwait = wf!("*** %s%s%s", $.arrayToSlice<any>([diff.FromFile, fromDate, diff.Eol])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = wf!("--- %s%s%s", $.arrayToSlice<any>([diff.ToFile, toDate, diff.Eol])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		let first = ($.arrayIndex(g!, 0)).clone()
		let last = ($.arrayIndex(g!, $.sliceLen(g) - 1)).clone()
		void (__goscriptAwait = ws!($.concatString("***************", diff.Eol)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let range1 = await formatRangeContext(first.I1, last.I2)
		void (__goscriptAwait = wf!("*** %s ****%s", $.arrayToSlice<any>([range1, diff.Eol])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		for (let __goscriptRangeTarget15 = g, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget15), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
			let c = ((__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as OpCode)).clone()
			if ((c.Tag == 114) || (c.Tag == 100)) {
				for (let __goscriptRangeTarget14 = g, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow15.length; __rangeIndex++) {
					let cc = ((__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + __rangeIndex] as OpCode)).clone()
					if (cc.Tag == 105) {
						continue
					}
					for (let __goscriptRangeTarget13 = $.goSlice(diff.A, cc.I1, cc.I2), __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow16.length; __rangeIndex++) {
						let line = (__goscriptRangeWindow16.backing[__goscriptRangeWindow16.offset + __rangeIndex] as string)
						void (__goscriptAwait = ws!($.concatString($.mapGet<number, string, string>(prefix, cc.Tag, "")[0], line)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
				break
			}
		}

		let range2 = await formatRangeContext(first.J1, last.J2)
		void (__goscriptAwait = wf!("--- %s ----%s", $.arrayToSlice<any>([range2, diff.Eol])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		for (let __goscriptRangeTarget18 = g, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget18), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow17.length; __rangeIndex++) {
			let c = ((__goscriptRangeWindow17.backing[__goscriptRangeWindow17.offset + __rangeIndex] as OpCode)).clone()
			if ((c.Tag == 114) || (c.Tag == 105)) {
				for (let __goscriptRangeTarget17 = g, __goscriptRangeWindow18 = $.sliceRange(__goscriptRangeTarget17), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow18.length; __rangeIndex++) {
					let cc = ((__goscriptRangeWindow18.backing[__goscriptRangeWindow18.offset + __rangeIndex] as OpCode)).clone()
					if (cc.Tag == 100) {
						continue
					}
					for (let __goscriptRangeTarget16 = $.goSlice(diff.B, cc.J1, cc.J2), __goscriptRangeWindow19 = $.sliceRange(__goscriptRangeTarget16), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow19.length; __rangeIndex++) {
						let line = (__goscriptRangeWindow19.backing[__goscriptRangeWindow19.offset + __rangeIndex] as string)
						void (__goscriptAwait = ws!($.concatString($.mapGet<number, string, string>(prefix, cc.Tag, "")[0], line)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
				break
			}
		}
	}
	return diffErr
}

export async function GetContextDiffString(diff: ContextDiff): globalThis.Promise<[string, $.GoError]> {
	let w: bytes.Buffer | $.VarRef<bytes.Buffer> | null = new bytes.Buffer()
	let err = await WriteContextDiff($.interfaceValue<io.Writer | null>(w, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")), (diff).clone())
	return [$.bytesToString(bytes.Buffer.prototype.Bytes.call($.pointerValue<bytes.Buffer>(w))), err]
}

export function SplitLines(s: string): $.Slice<string> {
	let lines: $.Slice<string> = strings.SplitAfter(s, "\n")
	const __goscriptOperand0 = $.sliceLen(lines) - 1
	$.sliceElems(lines!)[$.sliceSlot(lines!, __goscriptOperand0)] = $.concatString($.sliceElems(lines!)[$.sliceSlot(lines!, __goscriptOperand0)], "\n")
	return lines
}

var __goscriptAwait: any
