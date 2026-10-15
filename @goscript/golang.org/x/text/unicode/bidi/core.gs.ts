// Generated file based on core.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as log from "@goscript/log/index.js"

import * as __goscript_bracket from "./bracket.gs.ts"

import * as __goscript_trieval from "./trieval.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/log/index.js"
import "./bracket.gs.ts"
import "./trieval.gs.ts"

$.registerTypePackagePath("golang.org/x/text/unicode/bidi", ["bidi.level", "bidi.paragraph", "bidi.directionalStatusStack", "bidi.isolatingRunSequence"])

export type level = number

export class paragraph {
	public get initialTypes(): $.Slice<__goscript_trieval.Class> {
		return this._fields.initialTypes
	}

	public set initialTypes(value: $.Slice<__goscript_trieval.Class>) {
		this._fields.initialTypes = value
	}

	// Arrays of properties needed for paired bracket evaluation in N0
	public get pairTypes(): $.Slice<__goscript_bracket.bracketType> {
		return this._fields.pairTypes
	}

	public set pairTypes(value: $.Slice<__goscript_bracket.bracketType>) {
		this._fields.pairTypes = value
	}

	public get pairValues(): $.Slice<number> {
		return this._fields.pairValues
	}

	public set pairValues(value: $.Slice<number>) {
		this._fields.pairValues = value
	}

	public get embeddingLevel(): level {
		return this._fields.embeddingLevel
	}

	public set embeddingLevel(value: level) {
		this._fields.embeddingLevel = value
	}

	// at the paragraph levels
	public get resultTypes(): $.Slice<__goscript_trieval.Class> {
		return this._fields.resultTypes
	}

	public set resultTypes(value: $.Slice<__goscript_trieval.Class>) {
		this._fields.resultTypes = value
	}

	public get resultLevels(): $.Slice<level> {
		return this._fields.resultLevels
	}

	public set resultLevels(value: $.Slice<level>) {
		this._fields.resultLevels = value
	}

	// Index of matching PDI for isolate initiator characters. For other
	// characters, the value of matchingPDI will be set to -1. For isolate
	// initiators with no matching PDI, matchingPDI will be set to the length of
	// the input string.
	public get matchingPDI(): $.Slice<number> {
		return this._fields.matchingPDI
	}

	public set matchingPDI(value: $.Slice<number>) {
		this._fields.matchingPDI = value
	}

	// Index of matching isolate initiator for PDI characters. For other
	// characters, and for PDIs with no matching isolate initiator, the value of
	// matchingIsolateInitiator will be set to -1.
	public get matchingIsolateInitiator(): $.Slice<number> {
		return this._fields.matchingIsolateInitiator
	}

	public set matchingIsolateInitiator(value: $.Slice<number>) {
		this._fields.matchingIsolateInitiator = value
	}

	public _fields: {
		initialTypes: $.Slice<__goscript_trieval.Class>
		pairTypes: $.Slice<__goscript_bracket.bracketType>
		pairValues: $.Slice<number>
		embeddingLevel: level
		resultTypes: $.Slice<__goscript_trieval.Class>
		resultLevels: $.Slice<level>
		matchingPDI: $.Slice<number>
		matchingIsolateInitiator: $.Slice<number>
	}

	constructor(init?: Partial<{initialTypes?: $.Slice<__goscript_trieval.Class>, pairTypes?: $.Slice<__goscript_bracket.bracketType>, pairValues?: $.Slice<number>, embeddingLevel?: level, resultTypes?: $.Slice<__goscript_trieval.Class>, resultLevels?: $.Slice<level>, matchingPDI?: $.Slice<number>, matchingIsolateInitiator?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			initialTypes: init?.initialTypes ?? (null! as $.Slice<__goscript_trieval.Class>),
			pairTypes: init?.pairTypes ?? (null! as $.Slice<__goscript_bracket.bracketType>),
			pairValues: init?.pairValues ?? (null! as $.Slice<number>),
			embeddingLevel: init?.embeddingLevel ?? (0 as level),
			resultTypes: init?.resultTypes ?? (null! as $.Slice<__goscript_trieval.Class>),
			resultLevels: init?.resultLevels ?? (null! as $.Slice<level>),
			matchingPDI: init?.matchingPDI ?? (null! as $.Slice<number>),
			matchingIsolateInitiator: init?.matchingIsolateInitiator ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): paragraph {
		return new paragraph(this, true)
	}

	public __goscriptAssign(source: paragraph): void {
		const target = this._fields
		const values = source._fields
		target.initialTypes = values.initialTypes
		target.pairTypes = values.pairTypes
		target.pairValues = values.pairValues
		target.embeddingLevel = values.embeddingLevel
		target.resultTypes = values.resultTypes
		target.resultLevels = values.resultLevels
		target.matchingPDI = values.matchingPDI
		target.matchingIsolateInitiator = values.matchingIsolateInitiator
	}

	public Len(): number {
		const p: paragraph | $.VarRef<paragraph> | null = this;
		return $.sliceLen($.pointerValue<paragraph>(p).initialTypes)
	}

	public assignLevelsToCharactersRemovedByX9(): void {
		let p: paragraph | $.VarRef<paragraph> | null = this;
		const p$: paragraph = p == null ? $.pointerTarget<paragraph>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<paragraph>(p)
		for (let __goscriptRangeTarget1 = (p$ as paragraph).initialTypes, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let t = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as __goscript_trieval.Class)
			if (Class__in(t, $.arrayToSlice<__goscript_trieval.Class>([18, 19, 16, 17, 20, 11]))) {
				$.sliceElems((p$ as paragraph).resultTypes!)[$.sliceSlot((p$ as paragraph).resultTypes!, i)] = t
				$.sliceElems((p$ as paragraph).resultLevels!)[$.sliceSlot((p$ as paragraph).resultLevels!, i)] = -1
			}
		}
		// now propagate forward the levels information (could have
		// propagated backward, the main thing is not to introduce a level
		// break where one doesn't already exist).

		if ($.arrayIndex((p$ as paragraph).resultLevels!, 0) == -1) {
			$.sliceElems((p$ as paragraph).resultLevels!)[$.sliceSlot((p$ as paragraph).resultLevels!, 0)] = (p$ as paragraph).embeddingLevel
		}
		for (let i = 1; i < $.sliceLen((p$ as paragraph).initialTypes); i++) {
			if ($.arrayIndex((p$ as paragraph).resultLevels!, i) == -1) {
				$.sliceElems((p$ as paragraph).resultLevels!)[$.sliceSlot((p$ as paragraph).resultLevels!, i)] = $.arrayIndex((p$ as paragraph).resultLevels!, i - 1)
			}
		}
	}

	public async determineExplicitEmbeddingLevels(): globalThis.Promise<void> {
		let p: paragraph | $.VarRef<paragraph> | null = this;
		const p$: paragraph = p == null ? $.pointerTarget<paragraph>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<paragraph>(p)
		let stack: $.VarRef<directionalStatusStack> = $.varRef(new directionalStatusStack(undefined, true))
		let overflowIsolateCount: number = 0
		let overflowEmbeddingCount: number = 0
		let validIsolateCount: number = 0

		// Rule X1.
		stack.value.push((p$ as paragraph).embeddingLevel, 10, false)

		for (let __goscriptRangeTarget2 = (p$ as paragraph).resultTypes, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
			let t = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as __goscript_trieval.Class)
			// Rules X2, X3, X4, X5, X5a, X5b, X5c
			switch (t) {
				case 19:
				case 18:
				case 17:
				case 16:
				case 22:
				case 21:
				case 23:
				{
					let isIsolate = Class__in(t, $.arrayToSlice<__goscript_trieval.Class>([22, 21, 23]))
					let isRTL = Class__in(t, $.arrayToSlice<__goscript_trieval.Class>([19, 17, 22]))

					// override if this is an FSI that resolves to RLI
					if (t == 23) {
						isRTL = (await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).determineParagraphEmbeddingLevel(i + 1, $.arrayIndex((p$ as paragraph).matchingPDI!, i)) : paragraph.prototype.determineParagraphEmbeddingLevel.call(p, i + 1, $.arrayIndex((p$ as paragraph).matchingPDI!, i))) == 1)
					}
					if (isIsolate) {
						$.sliceElems((p$ as paragraph).resultLevels!)[$.sliceSlot((p$ as paragraph).resultLevels!, i)] = stack.value.lastEmbeddingLevel()
						if (stack.value.lastDirectionalOverrideStatus() != 10) {
							$.sliceElems((p$ as paragraph).resultTypes!)[$.sliceSlot((p$ as paragraph).resultTypes!, i)] = stack.value.lastDirectionalOverrideStatus()
						}
					}

					let newLevel: level = 0
					if (isRTL) {
						// least greater odd
						newLevel = $.int((((stack.value.lastEmbeddingLevel() + 1) << 24 >> 24)) | 1, 8)
					} else {
						// least greater even
						newLevel = $.int((((stack.value.lastEmbeddingLevel() + 2) << 24 >> 24)) & ~(1), 8)
					}

					if (((newLevel <= 125) && (overflowIsolateCount == 0)) && (overflowEmbeddingCount == 0)) {
						if (isIsolate) {
							validIsolateCount++
						}
						// Push new embedding level, override status, and isolated
						// status.
						// No check for valid stack counter, since the level check
						// suffices.
						switch (t) {
							case 16:
							{
								stack.value.push(newLevel, 0, isIsolate)
								break
							}
							case 17:
							{
								stack.value.push(newLevel, 1, isIsolate)
								break
							}
							default:
							{
								stack.value.push(newLevel, 10, isIsolate)
								break
							}
						}
						// Not really part of the spec
						if (!isIsolate) {
							$.sliceElems((p$ as paragraph).resultLevels!)[$.sliceSlot((p$ as paragraph).resultLevels!, i)] = newLevel
						}
					} else {
						// This is an invalid explicit formatting character,
						// so apply the "Otherwise" part of rules X2-X5b.
						if (isIsolate) {
							overflowIsolateCount++
						} else {
							if (overflowIsolateCount == 0) {
								overflowEmbeddingCount++
							}
						}
					}
					break
				}
				case 24:
				{
					if (overflowIsolateCount > 0) {
						overflowIsolateCount--
					} else {
						if (validIsolateCount == 0) {
						} else {
							overflowEmbeddingCount = 0
							while (!stack.value.lastDirectionalIsolateStatus()) {
								stack.value.pop()
							}
							stack.value.pop()
							validIsolateCount--
						}
					}
					$.sliceElems((p$ as paragraph).resultLevels!)[$.sliceSlot((p$ as paragraph).resultLevels!, i)] = stack.value.lastEmbeddingLevel()
					break
				}
				case 20:
				{
					$.sliceElems((p$ as paragraph).resultLevels!)[$.sliceSlot((p$ as paragraph).resultLevels!, i)] = stack.value.lastEmbeddingLevel()

					if (overflowIsolateCount > 0) {
					} else {
						if (overflowEmbeddingCount > 0) {
							overflowEmbeddingCount--
						} else {
							if (!stack.value.lastDirectionalIsolateStatus() && (stack.value.depth() >= 2)) {
								stack.value.pop()
							}
						}
					}
					break
				}
				case 7:
				{
					stack.value.empty()
					overflowIsolateCount = 0
					overflowEmbeddingCount = 0
					validIsolateCount = 0
					$.sliceElems((p$ as paragraph).resultLevels!)[$.sliceSlot((p$ as paragraph).resultLevels!, i)] = (p$ as paragraph).embeddingLevel
					break
				}
				default:
				{
					$.sliceElems((p$ as paragraph).resultLevels!)[$.sliceSlot((p$ as paragraph).resultLevels!, i)] = stack.value.lastEmbeddingLevel()
					if (stack.value.lastDirectionalOverrideStatus() != 10) {
						$.sliceElems((p$ as paragraph).resultTypes!)[$.sliceSlot((p$ as paragraph).resultTypes!, i)] = stack.value.lastDirectionalOverrideStatus()
					}
					break
				}
			}
		}
	}

	public determineIsolatingRunSequences(): $.Slice<isolatingRunSequence | $.VarRef<isolatingRunSequence> | null> {
		const p: paragraph | $.VarRef<paragraph> | null = this;
		const p$: paragraph = p == null ? $.pointerTarget<paragraph>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<paragraph>(p)
		let levelRuns: $.Slice<$.Slice<number>> = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).determineLevelRuns() : paragraph.prototype.determineLevelRuns.call(p))

		// Compute the run that each character belongs to
		let runForCharacter: $.Slice<number> = $.makeSlice<number>((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).Len() : paragraph.prototype.Len.call(p)), undefined, "number")
		for (let __goscriptRangeTarget4 = levelRuns, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget4), __goscriptSliceWindow0 = $.sliceRange(runForCharacter), i = 0; i < __goscriptRangeWindow3.length; i++) {
			let run = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as $.Slice<number>)
			for (let __goscriptRangeTarget3 = run, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
				let index = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as number);
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, index)] = i
			}
		}

		let sequences: $.Slice<isolatingRunSequence | $.VarRef<isolatingRunSequence> | null> = $.arrayToSlice<isolatingRunSequence | $.VarRef<isolatingRunSequence> | null>([])

		let currentRunSequence: $.Slice<number> = null! as $.Slice<number>

		for (let __goscriptRangeTarget5 = levelRuns, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __goscriptSliceWindow1 = $.sliceRange(runForCharacter), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let run = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as $.Slice<number>)
			let first = $.arrayIndex(run!, 0)
			if (($.arrayIndex((p$ as paragraph).initialTypes!, first) != 24) || ($.arrayIndex((p$ as paragraph).matchingIsolateInitiator!, first) == -1)) {
				currentRunSequence = null
				// int run = i;
				while (true) {
					// Copy this level run into currentRunSequence
					currentRunSequence = $.appendSlice(currentRunSequence, run)

					let last = $.arrayIndex(currentRunSequence!, $.sliceLen(currentRunSequence) - 1)
					let lastT = $.arrayIndex((p$ as paragraph).initialTypes!, last)
					if (Class__in(lastT, $.arrayToSlice<__goscript_trieval.Class>([21, 22, 23])) && ($.arrayIndex((p$ as paragraph).matchingPDI!, last) != (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).Len() : paragraph.prototype.Len.call(p)))) {
						run = ((__goscriptRangeWindow5.backing as any[])[$.windowSlot(__goscriptRangeWindow5, ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, $.arrayIndex((p$ as paragraph).matchingPDI!, last))] as number))] as $.Slice<number>)
					} else {
						break
					}
				}
				sequences = $.appendOne(sequences, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).isolatingRunSequence(currentRunSequence) : paragraph.prototype.isolatingRunSequence.call(p, currentRunSequence)), $.appendZeros.nil)
			}
		}
		return sequences
	}

	public determineLevelRuns(): $.Slice<$.Slice<number>> {
		const p: paragraph | $.VarRef<paragraph> | null = this;
		const p$: paragraph = p == null ? $.pointerTarget<paragraph>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<paragraph>(p)
		let run: $.Slice<number> = $.arrayToSlice<number>([])
		let allRuns: $.Slice<$.Slice<number>> = $.arrayToSlice<$.Slice<number>>([])
		let currentLevel = -1

		for (let __goscriptRangeTarget6 = (p$ as paragraph).initialTypes, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), i = 0; i < __goscriptRangeWindow6.length; i++) {
			if (!isRemovedByX9($.arrayIndex((p$ as paragraph).initialTypes!, i))) {
				if ($.arrayIndex((p$ as paragraph).resultLevels!, i) != currentLevel) {
					// we just encountered a new run; wrap up last run
					if (currentLevel >= 0) {
						allRuns = $.appendOne(allRuns, run, $.appendZeros.nil)
						run = null
					}
					// Start new run
					currentLevel = $.arrayIndex((p$ as paragraph).resultLevels!, i)
				}
				run = $.appendOne(run, i)
			}
		}
		// Wrap up the final run, if any
		if ($.sliceLen(run) > 0) {
			allRuns = $.appendOne(allRuns, run, $.appendZeros.nil)
		}
		return allRuns
	}

	public determineMatchingIsolates(): void {
		let p: paragraph | $.VarRef<paragraph> | null = this;
		const p$: paragraph = p == null ? $.pointerTarget<paragraph>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<paragraph>(p);
		;(p$ as paragraph).matchingPDI = $.makeSlice<number>((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).Len() : paragraph.prototype.Len.call(p)), undefined, "number");
		;(p$ as paragraph).matchingIsolateInitiator = $.makeSlice<number>((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).Len() : paragraph.prototype.Len.call(p)), undefined, "number")

		for (let __goscriptRangeTarget7 = (p$ as paragraph).matchingIsolateInitiator, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), i = 0; i < __goscriptRangeWindow7.length; i++) {
			$.sliceElems((p$ as paragraph).matchingIsolateInitiator!)[$.sliceSlot((p$ as paragraph).matchingIsolateInitiator!, i)] = -1
		}

		for (let __goscriptRangeTarget8 = (p$ as paragraph).matchingPDI, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), i = 0; i < __goscriptRangeWindow8.length; i++) {
			$.sliceElems((p$ as paragraph).matchingPDI!)[$.sliceSlot((p$ as paragraph).matchingPDI!, i)] = -1

			{
				let t = $.arrayIndex((p$ as paragraph).resultTypes!, i)
				if (Class__in(t, $.arrayToSlice<__goscript_trieval.Class>([21, 22, 23]))) {
					let depthCounter = 1
					for (let j = i + 1; j < (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).Len() : paragraph.prototype.Len.call(p)); j++) {
						{
							let u = $.arrayIndex((p$ as paragraph).resultTypes!, j)
							if (Class__in(u, $.arrayToSlice<__goscript_trieval.Class>([21, 22, 23]))) {
								depthCounter++
							} else {
								if (u == 24) {
									{
										depthCounter--
										if (depthCounter == 0) {
											$.sliceElems((p$ as paragraph).matchingPDI!)[$.sliceSlot((p$ as paragraph).matchingPDI!, i)] = j
											$.sliceElems((p$ as paragraph).matchingIsolateInitiator!)[$.sliceSlot((p$ as paragraph).matchingIsolateInitiator!, j)] = i
											break
										}
									}
								}
							}
						}
					}
					if ($.arrayIndex((p$ as paragraph).matchingPDI!, i) == -1) {
						$.sliceElems((p$ as paragraph).matchingPDI!)[$.sliceSlot((p$ as paragraph).matchingPDI!, i)] = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).Len() : paragraph.prototype.Len.call(p))
					}
				}
			}
		}
	}

	public async determineParagraphEmbeddingLevel(start: number, end: number): globalThis.Promise<level> {
		const p: paragraph | $.VarRef<paragraph> | null = this;
		const p$: paragraph = p == null ? $.pointerTarget<paragraph>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<paragraph>(p)
		let strongType: __goscript_trieval.Class = $.uint("18446744073709551615", 64)

		// Rule P2.
		for (let i = start; i < end; i++) {
			{
				let t = $.arrayIndex((p$ as paragraph).resultTypes!, i)
				if (Class__in(t, $.arrayToSlice<__goscript_trieval.Class>([0, 13, 1]))) {
					strongType = t
					break
				} else {
					if (Class__in(t, $.arrayToSlice<__goscript_trieval.Class>([23, 21, 22]))) {
						i = $.arrayIndex((p$ as paragraph).matchingPDI!, i)
						if (i > end) {
							await log.Panic($.arrayToSlice<any>(["assert (i <= end)"]))
						}
					}
				}
			}
		}
		// Rule P3.
		switch (strongType) {
			case 18446744073709551615:
			{
				return 0
				break
			}
			case 0:
			{
				return 0
				break
			}
			default:
			{
				return 1
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public getLevels(linebreaks: $.Slice<number>): $.Slice<level> {
		const p: paragraph | $.VarRef<paragraph> | null = this;
		const p$: paragraph = p == null ? $.pointerTarget<paragraph>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<paragraph>(p)
		// Note that since the previous processing has removed all
		// P, S, and WS values from resultTypes, the values referred to
		// in these rules are the initial types, before any processing
		// has been applied (including processing of overrides).
		//
		// This example implementation has reinserted explicit format codes
		// and BN, in order that the levels array correspond to the
		// initial text. Their final placement is not normative.
		// These codes are treated like WS in this implementation,
		// so they don't interrupt sequences of WS.

		validateLineBreaks(linebreaks, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).Len() : paragraph.prototype.Len.call(p)))

		let result: $.Slice<level> = $.appendSlice<level>(null, (p$ as paragraph).resultLevels)

		// don't worry about linebreaks since if there is a break within
		// a series of WS values preceding S, the linebreak itself
		// causes the reset.
		for (let __goscriptRangeTarget9 = (p$ as paragraph).initialTypes, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __goscriptSliceWindow2 = $.sliceRange(result), i = 0; i < __goscriptRangeWindow9.length; i++) {
			let t = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + i] as __goscript_trieval.Class)
			if (Class__in(t, $.arrayToSlice<__goscript_trieval.Class>([7, 8]))) {
				// Rule L1, clauses one and two.
				;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = (p$ as paragraph).embeddingLevel

				// Rule L1, clause three.
				for (let j = i - 1; j >= 0; j--) {
					if (isWhitespace($.arrayIndex((p$ as paragraph).initialTypes!, j))) {
						;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, j)] = (p$ as paragraph).embeddingLevel
					} else {
						break
					}
				}
			}
		}

		// Rule L1, clause four.
		let start = 0
		for (let __goscriptRangeTarget10 = linebreaks, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __goscriptSliceWindow3 = $.sliceRange(result), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
			let limit = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as number)
			for (let j = limit - 1; j >= start; j--) {
				if (isWhitespace($.arrayIndex((p$ as paragraph).initialTypes!, j))) {
					;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, j)] = (p$ as paragraph).embeddingLevel
				} else {
					break
				}
			}
			start = limit
		}

		return result
	}

	public getReordering(linebreaks: $.Slice<number>): $.Slice<number> {
		const p: paragraph | $.VarRef<paragraph> | null = this;
		validateLineBreaks(linebreaks, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).Len() : paragraph.prototype.Len.call(p)))

		return computeMultilineReordering((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).getLevels(linebreaks) : paragraph.prototype.getLevels.call(p, linebreaks)), linebreaks)
	}

	public isolatingRunSequence(indexes: $.Slice<number>): isolatingRunSequence | $.VarRef<isolatingRunSequence> | null {
		const p: paragraph | $.VarRef<paragraph> | null = this;
		const p$: paragraph = p == null ? $.pointerTarget<paragraph>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<paragraph>(p)
		let length = $.sliceLen(indexes)
		let types: $.Slice<__goscript_trieval.Class> = $.makeSlice<__goscript_trieval.Class>(length, undefined, "number")
		for (let __goscriptRangeTarget11 = indexes, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __goscriptSliceWindow4 = $.sliceRange(types), i = 0; i < __goscriptRangeWindow11.length; i++) {
			let x = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + i] as number);
			;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] = $.arrayIndex((p$ as paragraph).resultTypes!, x)
		}

		// assign level, sos and eos
		let prevChar = $.arrayIndex(indexes!, 0) - 1
		while ((prevChar >= 0) && isRemovedByX9($.arrayIndex((p$ as paragraph).initialTypes!, prevChar))) {
			prevChar--
		}
		let prevLevel = (p$ as paragraph).embeddingLevel
		if (prevChar >= 0) {
			prevLevel = $.arrayIndex((p$ as paragraph).resultLevels!, prevChar)
		}

		let succLevel: level = 0
		let lastType = $.arrayIndex(types!, length - 1)
		if (Class__in(lastType, $.arrayToSlice<__goscript_trieval.Class>([21, 22, 23]))) {
			succLevel = (p$ as paragraph).embeddingLevel
		} else {
			// the first character after the end of run sequence
			let limit = $.arrayIndex(indexes!, length - 1) + 1
			for (; (limit < (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).Len() : paragraph.prototype.Len.call(p))) && isRemovedByX9($.arrayIndex((p$ as paragraph).initialTypes!, limit)); limit++) {
			}
			succLevel = (p$ as paragraph).embeddingLevel
			if (limit < (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).Len() : paragraph.prototype.Len.call(p))) {
				succLevel = $.arrayIndex((p$ as paragraph).resultLevels!, limit)
			}
		}
		let __goscriptShadow0 = $.arrayIndex((p$ as paragraph).resultLevels!, $.arrayIndex(indexes!, 0))
		return (() => { const __goscriptLiteralField0 = typeForLevel(maxLevel(prevLevel, __goscriptShadow0)); const __goscriptLiteralField1 = typeForLevel(maxLevel(succLevel, __goscriptShadow0)); return new isolatingRunSequence({p: p, indexes: indexes, types: types, level: __goscriptShadow0, sos: __goscriptLiteralField0, eos: __goscriptLiteralField1}) })()
	}

	public async run(): globalThis.Promise<void> {
		let p: paragraph | $.VarRef<paragraph> | null = this;
		const p$: paragraph = p == null ? $.pointerTarget<paragraph>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<paragraph>(p)
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).determineMatchingIsolates() : paragraph.prototype.determineMatchingIsolates.call(p))

		// 1) determining the paragraph level
		// Rule P1 is the requirement for entering this algorithm.
		// Rules P2, P3.
		// If no externally supplied paragraph embedding level, use default.
		if ((p$ as paragraph).embeddingLevel == -1) {
			;(p$ as paragraph).embeddingLevel = await paragraph.prototype.determineParagraphEmbeddingLevel.call(p, 0, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).Len() : paragraph.prototype.Len.call(p)))
		}

		// Initialize result levels to paragraph embedding level.
		;(p$ as paragraph).resultLevels = $.makeSlice<level>((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).Len() : paragraph.prototype.Len.call(p)), undefined, "number")
		setLevels((p$ as paragraph).resultLevels, (p$ as paragraph).embeddingLevel)

		// 2) Explicit levels and directions
		// Rules X1-X8.
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).determineExplicitEmbeddingLevels() : paragraph.prototype.determineExplicitEmbeddingLevels.call(p))

		// Rule X9.
		// We do not remove the embeddings, the overrides, the PDFs, and the BNs
		// from the string explicitly. But they are not copied into isolating run
		// sequences when they are created, so they are removed for all
		// practical purposes.

		// Rule X10.
		// Run remainder of algorithm one isolating run sequence at a time
		for (let __goscriptRangeTarget12 = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).determineIsolatingRunSequences() : paragraph.prototype.determineIsolatingRunSequences.call(p)), __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
			let seq = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as isolatingRunSequence | $.VarRef<isolatingRunSequence> | null)
			// 3) resolving weak types
			// Rules W1-W7.
			await (seq !== null && (seq as any).__isVarRef !== true && (seq as any).__goValue === undefined ? ((seq as any) as isolatingRunSequence).resolveWeakTypes() : isolatingRunSequence.prototype.resolveWeakTypes.call(seq))

			// 4a) resolving paired brackets
			// Rule N0
			await __goscript_bracket.resolvePairedBrackets(seq)

			// 4b) resolving neutral types
			// Rules N1-N3.
			await (seq !== null && (seq as any).__isVarRef !== true && (seq as any).__goValue === undefined ? ((seq as any) as isolatingRunSequence).resolveNeutralTypes() : isolatingRunSequence.prototype.resolveNeutralTypes.call(seq))

			// 5) resolving implicit embedding levels
			// Rules I1, I2.
			await (seq !== null && (seq as any).__isVarRef !== true && (seq as any).__goValue === undefined ? ((seq as any) as isolatingRunSequence).resolveImplicitLevels() : isolatingRunSequence.prototype.resolveImplicitLevels.call(seq))

			// Apply the computed levels and types
			void (seq !== null && (seq as any).__isVarRef !== true && (seq as any).__goValue === undefined ? ((seq as any) as isolatingRunSequence).applyLevelsAndTypes() : isolatingRunSequence.prototype.applyLevelsAndTypes.call(seq))
		}

		// Assign appropriate levels to 'hide' LREs, RLEs, LROs, RLOs, PDFs, and
		// BNs. This is for convenience, so the resulting level array will have
		// a value for every character.
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).assignLevelsToCharactersRemovedByX9() : paragraph.prototype.assignLevelsToCharactersRemovedByX9.call(p))
	}

	static __typeInfo = $.registerStructType(
		"bidi.paragraph",
		() => new paragraph(),
		() => [$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("assignLevelsToCharactersRemovedByX9", [], [], true), $.methodSignature("determineExplicitEmbeddingLevels", [], [], true), $.methodSignature("determineIsolatingRunSequences", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("bidi.isolatingRunSequence"))], true), $.methodSignature("determineLevelRuns", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")))], true), $.methodSignature("determineMatchingIsolates", [], [], true), $.methodSignature("determineParagraphEmbeddingLevel", [["start", /* @__PURE__ */ $.basicType("int")], ["end", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int8", "bidi.level")], true), $.methodSignature("getLevels", [["linebreaks", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8", "bidi.level"))], true), $.methodSignature("getReordering", [["linebreaks", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("isolatingRunSequence", [["indexes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], [/* @__PURE__ */ $.pointerType("bidi.isolatingRunSequence")], true), $.methodSignature("run", [], [], true)],
		paragraph,
		() => [/* @__PURE__ */ $.structField("initialTypes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "bidi.Class")), [0], 0, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("pairTypes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8", "bidi.bracketType")), [1], 24, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("pairValues", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), [2], 48, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("embeddingLevel", /* @__PURE__ */ $.basicType("int8", "bidi.level"), [3], 72, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("resultTypes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "bidi.Class")), [4], 80, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("resultLevels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8", "bidi.level")), [5], 104, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("matchingPDI", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [6], 128, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("matchingIsolateInitiator", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [7], 152, false, { pkgPath: "golang.org/x/text/unicode/bidi" })]
	)
}

export class directionalStatusStack {
	public get stackCounter(): number {
		return this._fields.stackCounter
	}

	public set stackCounter(value: number) {
		this._fields.stackCounter = value
	}

	public get embeddingLevelStack(): level[] {
		return this._fields.embeddingLevelStack
	}

	public set embeddingLevelStack(value: level[]) {
		this._fields.embeddingLevelStack = value
	}

	public get overrideStatusStack(): __goscript_trieval.Class[] {
		return this._fields.overrideStatusStack
	}

	public set overrideStatusStack(value: __goscript_trieval.Class[]) {
		this._fields.overrideStatusStack = value
	}

	public get isolateStatusStack(): boolean[] {
		return this._fields.isolateStatusStack
	}

	public set isolateStatusStack(value: boolean[]) {
		this._fields.isolateStatusStack = value
	}

	public _fields: {
		stackCounter: number
		embeddingLevelStack: level[]
		overrideStatusStack: __goscript_trieval.Class[]
		isolateStatusStack: boolean[]
	}

	constructor(init?: Partial<{stackCounter?: number, embeddingLevelStack?: level[], overrideStatusStack?: __goscript_trieval.Class[], isolateStatusStack?: boolean[]}>, __goscriptValue?: boolean) {
		this._fields = {
			stackCounter: init?.stackCounter ?? (0 as number),
			embeddingLevelStack: init?.embeddingLevelStack !== undefined ? $.cloneArrayValue(init.embeddingLevelStack, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int8", "bidi.level"), 126)) : $.arrayValue(globalThis.Array.from({ length: 126 }, () => 0)),
			overrideStatusStack: init?.overrideStatusStack !== undefined ? $.cloneArrayValue(init.overrideStatusStack, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint", "bidi.Class"), 126)) : $.arrayValue(globalThis.Array.from({ length: 126 }, () => 0)),
			isolateStatusStack: init?.isolateStatusStack !== undefined ? $.cloneArrayValue(init.isolateStatusStack, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("bool"), 126)) : $.arrayValue(globalThis.Array.from({ length: 126 }, () => false))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): directionalStatusStack {
		return new directionalStatusStack(this, true)
	}

	public __goscriptAssign(source: directionalStatusStack): void {
		const target = this._fields
		const values = source._fields
		target.stackCounter = values.stackCounter
		target.embeddingLevelStack = $.assignFieldValue(target.embeddingLevelStack, values.embeddingLevelStack, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int8", "bidi.level"), 126))
		target.overrideStatusStack = $.assignFieldValue(target.overrideStatusStack, values.overrideStatusStack, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint", "bidi.Class"), 126))
		target.isolateStatusStack = $.assignFieldValue(target.isolateStatusStack, values.isolateStatusStack, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("bool"), 126))
	}

	public depth(): number {
		const s: directionalStatusStack | $.VarRef<directionalStatusStack> | null = this;
		return $.pointerValue<directionalStatusStack>(s).stackCounter
	}

	public empty(): void {
		let s: directionalStatusStack | $.VarRef<directionalStatusStack> | null = this;
		$.pointerValue<directionalStatusStack>(s).stackCounter = 0
	}

	public lastDirectionalIsolateStatus(): boolean {
		const s: directionalStatusStack | $.VarRef<directionalStatusStack> | null = this;
		const s$: directionalStatusStack = s == null ? $.pointerTarget<directionalStatusStack>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<directionalStatusStack>(s)
		return $.arrayIndex((s$ as directionalStatusStack).isolateStatusStack, (s$ as directionalStatusStack).stackCounter - 1)
	}

	public lastDirectionalOverrideStatus(): __goscript_trieval.Class {
		const s: directionalStatusStack | $.VarRef<directionalStatusStack> | null = this;
		const s$: directionalStatusStack = s == null ? $.pointerTarget<directionalStatusStack>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<directionalStatusStack>(s)
		return $.arrayIndex((s$ as directionalStatusStack).overrideStatusStack, (s$ as directionalStatusStack).stackCounter - 1)
	}

	public lastEmbeddingLevel(): level {
		const s: directionalStatusStack | $.VarRef<directionalStatusStack> | null = this;
		const s$: directionalStatusStack = s == null ? $.pointerTarget<directionalStatusStack>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<directionalStatusStack>(s)
		return $.arrayIndex((s$ as directionalStatusStack).embeddingLevelStack, (s$ as directionalStatusStack).stackCounter - 1)
	}

	public pop(): void {
		let s: directionalStatusStack | $.VarRef<directionalStatusStack> | null = this;
		const s$: directionalStatusStack = s == null ? $.pointerTarget<directionalStatusStack>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<directionalStatusStack>(s);
		;(s$ as directionalStatusStack).stackCounter--
	}

	public push(level: level, overrideStatus: __goscript_trieval.Class, isolateStatus: boolean): void {
		let s: directionalStatusStack | $.VarRef<directionalStatusStack> | null = this;
		const s$: directionalStatusStack = s == null ? $.pointerTarget<directionalStatusStack>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<directionalStatusStack>(s);
		;(s$ as directionalStatusStack).embeddingLevelStack[(s$ as directionalStatusStack).stackCounter] = level;
		;(s$ as directionalStatusStack).overrideStatusStack[(s$ as directionalStatusStack).stackCounter] = overrideStatus;
		;(s$ as directionalStatusStack).isolateStatusStack[(s$ as directionalStatusStack).stackCounter] = isolateStatus;
		;(s$ as directionalStatusStack).stackCounter++
	}

	static __typeInfo = $.registerStructType(
		"bidi.directionalStatusStack",
		() => new directionalStatusStack(),
		() => [$.methodSignature("depth", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("empty", [], [], true), $.methodSignature("lastDirectionalIsolateStatus", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("lastDirectionalOverrideStatus", [], [/* @__PURE__ */ $.basicType("uint", "bidi.Class")], true), $.methodSignature("lastEmbeddingLevel", [], [/* @__PURE__ */ $.basicType("int8", "bidi.level")], true), $.methodSignature("pop", [], [], true), $.methodSignature("push", [["level", /* @__PURE__ */ $.basicType("int8", "bidi.level")], ["overrideStatus", /* @__PURE__ */ $.basicType("uint", "bidi.Class")], ["isolateStatus", /* @__PURE__ */ $.basicType("bool")]], [], true)],
		directionalStatusStack,
		() => [/* @__PURE__ */ $.structField("stackCounter", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("embeddingLevelStack", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int8", "bidi.level"), 126), [1], 8, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("overrideStatusStack", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint", "bidi.Class"), 126), [2], 136, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("isolateStatusStack", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("bool"), 126), [3], 1144, false, { pkgPath: "golang.org/x/text/unicode/bidi" })]
	)
}

export class isolatingRunSequence {
	public get p(): paragraph | $.VarRef<paragraph> | null {
		return this._fields.p
	}

	public set p(value: paragraph | $.VarRef<paragraph> | null) {
		this._fields.p = value
	}

	public get indexes(): $.Slice<number> {
		return this._fields.indexes
	}

	public set indexes(value: $.Slice<number>) {
		this._fields.indexes = value
	}

	public get types(): $.Slice<__goscript_trieval.Class> {
		return this._fields.types
	}

	public set types(value: $.Slice<__goscript_trieval.Class>) {
		this._fields.types = value
	}

	public get resolvedLevels(): $.Slice<level> {
		return this._fields.resolvedLevels
	}

	public set resolvedLevels(value: $.Slice<level>) {
		this._fields.resolvedLevels = value
	}

	public get level(): level {
		return this._fields.level
	}

	public set level(value: level) {
		this._fields.level = value
	}

	public get sos(): __goscript_trieval.Class {
		return this._fields.sos
	}

	public set sos(value: __goscript_trieval.Class) {
		this._fields.sos = value
	}

	public get eos(): __goscript_trieval.Class {
		return this._fields.eos
	}

	public set eos(value: __goscript_trieval.Class) {
		this._fields.eos = value
	}

	public _fields: {
		p: paragraph | $.VarRef<paragraph> | null
		indexes: $.Slice<number>
		types: $.Slice<__goscript_trieval.Class>
		resolvedLevels: $.Slice<level>
		level: level
		sos: __goscript_trieval.Class
		eos: __goscript_trieval.Class
	}

	constructor(init?: Partial<{p?: paragraph | $.VarRef<paragraph> | null, indexes?: $.Slice<number>, types?: $.Slice<__goscript_trieval.Class>, resolvedLevels?: $.Slice<level>, level?: level, sos?: __goscript_trieval.Class, eos?: __goscript_trieval.Class}>, __goscriptValue?: boolean) {
		this._fields = {
			p: init?.p ?? (null! as paragraph | $.VarRef<paragraph> | null),
			indexes: init?.indexes ?? (null! as $.Slice<number>),
			types: init?.types ?? (null! as $.Slice<__goscript_trieval.Class>),
			resolvedLevels: init?.resolvedLevels ?? (null! as $.Slice<level>),
			level: init?.level ?? (0 as level),
			sos: init?.sos ?? (0 as __goscript_trieval.Class),
			eos: init?.eos ?? (0 as __goscript_trieval.Class)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): isolatingRunSequence {
		return new isolatingRunSequence(this, true)
	}

	public __goscriptAssign(source: isolatingRunSequence): void {
		const target = this._fields
		const values = source._fields
		target.p = values.p
		target.indexes = values.indexes
		target.types = values.types
		target.resolvedLevels = values.resolvedLevels
		target.level = values.level
		target.sos = values.sos
		target.eos = values.eos
	}

	public Len(): number {
		const i: isolatingRunSequence | $.VarRef<isolatingRunSequence> | null = this;
		return $.sliceLen($.pointerValue<isolatingRunSequence>(i).indexes)
	}

	public applyLevelsAndTypes(): void {
		let s: isolatingRunSequence | $.VarRef<isolatingRunSequence> | null = this;
		const s$: isolatingRunSequence = s == null ? $.pointerTarget<isolatingRunSequence>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<isolatingRunSequence>(s)
		for (let __goscriptRangeTarget13 = (s$ as isolatingRunSequence).indexes, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), i = 0; i < __goscriptRangeWindow13.length; i++) {
			let x = (__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + i] as number)
			$.sliceElems($.pointerValue<paragraph>((s$ as isolatingRunSequence).p).resultTypes!)[$.sliceSlot($.pointerValue<paragraph>((s$ as isolatingRunSequence).p).resultTypes!, x)] = $.arrayIndex((s$ as isolatingRunSequence).types!, i)
			$.sliceElems($.pointerValue<paragraph>((s$ as isolatingRunSequence).p).resultLevels!)[$.sliceSlot($.pointerValue<paragraph>((s$ as isolatingRunSequence).p).resultLevels!, x)] = $.arrayIndex((s$ as isolatingRunSequence).resolvedLevels!, i)
		}
	}

	public async assertOnly(codes: $.Slice<__goscript_trieval.Class>): globalThis.Promise<void> {
		const s: isolatingRunSequence | $.VarRef<isolatingRunSequence> | null = this;
		const s$: isolatingRunSequence = s == null ? $.pointerTarget<isolatingRunSequence>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<isolatingRunSequence>(s)
		loop: for (let __goscriptRangeTarget15 = (s$ as isolatingRunSequence).types, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget15), i = 0; i < __goscriptRangeWindow14.length; i++) {
			let t = (__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + i] as __goscript_trieval.Class)
			for (let __goscriptRangeTarget14 = codes, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow15.length; __rangeIndex++) {
				let c = (__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + __rangeIndex] as __goscript_trieval.Class)
				if (t == c) {
					continue loop
				}
			}
			await log.Panicf("invalid bidi code %v present in assertOnly at position %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(t, "bidi.Class", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue($.arrayIndex((s$ as isolatingRunSequence).indexes!, i), "int")]))
		}
	}

	public findRunLimit(index: number, validSet: $.Slice<__goscript_trieval.Class>): number {
		const s: isolatingRunSequence | $.VarRef<isolatingRunSequence> | null = this;
		const s$: isolatingRunSequence = s == null ? $.pointerTarget<isolatingRunSequence>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<isolatingRunSequence>(s)
		loop: for (; index < $.sliceLen((s$ as isolatingRunSequence).types); index++) {
			let t = $.arrayIndex((s$ as isolatingRunSequence).types!, index)
			for (let __goscriptRangeTarget16 = validSet, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow16.length; __rangeIndex++) {
				let valid = (__goscriptRangeWindow16.backing[__goscriptRangeWindow16.offset + __rangeIndex] as __goscript_trieval.Class)
				if (t == valid) {
					continue loop
				}
			}
			return index
		}
		return $.sliceLen((s$ as isolatingRunSequence).types)
	}

	public async resolveImplicitLevels(): globalThis.Promise<void> {
		let s: isolatingRunSequence | $.VarRef<isolatingRunSequence> | null = this;
		const s$: isolatingRunSequence = s == null ? $.pointerTarget<isolatingRunSequence>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<isolatingRunSequence>(s)

		// on entry, only these types can be in resultTypes
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as isolatingRunSequence).assertOnly($.arrayToSlice<__goscript_trieval.Class>([0, 1, 2, 5])) : isolatingRunSequence.prototype.assertOnly.call(s, $.arrayToSlice<__goscript_trieval.Class>([0, 1, 2, 5])));

		;(s$ as isolatingRunSequence).resolvedLevels = $.makeSlice<level>($.sliceLen((s$ as isolatingRunSequence).types), undefined, "number")
		setLevels((s$ as isolatingRunSequence).resolvedLevels, (s$ as isolatingRunSequence).level)

		if ($.int(((s$ as isolatingRunSequence).level & 1), 8) == 0) {
			for (let __goscriptRangeTarget17 = (s$ as isolatingRunSequence).types, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), i = 0; i < __goscriptRangeWindow17.length; i++) {
				let t = (__goscriptRangeWindow17.backing[__goscriptRangeWindow17.offset + i] as __goscript_trieval.Class)
				// Rule I1.
				if (t == 0) {
				} else {
					if (t == 1) {
						$.sliceElems((s$ as isolatingRunSequence).resolvedLevels!)[$.sliceSlot((s$ as isolatingRunSequence).resolvedLevels!, i)] = $.int($.sliceElems((s$ as isolatingRunSequence).resolvedLevels!)[$.sliceSlot((s$ as isolatingRunSequence).resolvedLevels!, i)] + (1), 8)
					} else {
						$.sliceElems((s$ as isolatingRunSequence).resolvedLevels!)[$.sliceSlot((s$ as isolatingRunSequence).resolvedLevels!, i)] = $.int($.sliceElems((s$ as isolatingRunSequence).resolvedLevels!)[$.sliceSlot((s$ as isolatingRunSequence).resolvedLevels!, i)] + (2), 8)
					}
				}
			}
		} else {
			for (let __goscriptRangeTarget18 = (s$ as isolatingRunSequence).types, __goscriptRangeWindow18 = $.sliceRange(__goscriptRangeTarget18), i = 0; i < __goscriptRangeWindow18.length; i++) {
				let t = (__goscriptRangeWindow18.backing[__goscriptRangeWindow18.offset + i] as __goscript_trieval.Class)
				// Rule I2.
				if (t == 1) {
				} else {
					$.sliceElems((s$ as isolatingRunSequence).resolvedLevels!)[$.sliceSlot((s$ as isolatingRunSequence).resolvedLevels!, i)] = $.int($.sliceElems((s$ as isolatingRunSequence).resolvedLevels!)[$.sliceSlot((s$ as isolatingRunSequence).resolvedLevels!, i)] + (1), 8)
				}
			}
		}
	}

	public async resolveNeutralTypes(): globalThis.Promise<void> {
		const s: isolatingRunSequence | $.VarRef<isolatingRunSequence> | null = this;
		const s$: isolatingRunSequence = s == null ? $.pointerTarget<isolatingRunSequence>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<isolatingRunSequence>(s)

		// on entry, only these types can be in resultTypes
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as isolatingRunSequence).assertOnly($.arrayToSlice<__goscript_trieval.Class>([0, 1, 2, 5, 7, 8, 9, 10, 22, 21, 23, 24])) : isolatingRunSequence.prototype.assertOnly.call(s, $.arrayToSlice<__goscript_trieval.Class>([0, 1, 2, 5, 7, 8, 9, 10, 22, 21, 23, 24])))

		for (let __goscriptRangeTarget19 = (s$ as isolatingRunSequence).types, __goscriptRangeWindow19 = $.sliceRange(__goscriptRangeTarget19), i = 0; i < __goscriptRangeWindow19.length; i++) {
			let t = (__goscriptRangeWindow19.backing[__goscriptRangeWindow19.offset + i] as __goscript_trieval.Class)
			switch (t) {
				case 9:
				case 10:
				case 7:
				case 8:
				case 22:
				case 21:
				case 23:
				case 24:
				{
					let runStart = i
					let runEnd = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as isolatingRunSequence).findRunLimit(runStart, $.arrayToSlice<__goscript_trieval.Class>([7, 8, 9, 10, 22, 21, 23, 24])) : isolatingRunSequence.prototype.findRunLimit.call(s, runStart, $.arrayToSlice<__goscript_trieval.Class>([7, 8, 9, 10, 22, 21, 23, 24])))

					// determine effective types at ends of run
					let leadType: __goscript_trieval.Class = 0
					let trailType: __goscript_trieval.Class = 0

					// Note that the character found can only be L, R, AN, or
					// EN.
					if (runStart == 0) {
						leadType = (s$ as isolatingRunSequence).sos
					} else {
						leadType = $.arrayIndex((s$ as isolatingRunSequence).types!, runStart - 1)
						if (Class__in(leadType, $.arrayToSlice<__goscript_trieval.Class>([5, 2]))) {
							leadType = 1
						}
					}
					if (runEnd == $.sliceLen((s$ as isolatingRunSequence).types)) {
						trailType = (s$ as isolatingRunSequence).eos
					} else {
						trailType = $.arrayIndex((s$ as isolatingRunSequence).types!, runEnd)
						if (Class__in(trailType, $.arrayToSlice<__goscript_trieval.Class>([5, 2]))) {
							trailType = 1
						}
					}

					let resolvedType: __goscript_trieval.Class = 0
					if (leadType == trailType) {
						// Rule N1.
						resolvedType = leadType
					} else {
						// Rule N2.
						// Notice the embedding level of the run is used, not
						// the paragraph embedding level.
						resolvedType = typeForLevel((s$ as isolatingRunSequence).level)
					}

					setTypes($.goSlice((s$ as isolatingRunSequence).types, runStart, runEnd), resolvedType)

					// skip over run of (former) neutrals
					i = runEnd
					break
				}
			}
		}
	}

	public async resolveWeakTypes(): globalThis.Promise<void> {
		let s: isolatingRunSequence | $.VarRef<isolatingRunSequence> | null = this;
		const s$: isolatingRunSequence = s == null ? $.pointerTarget<isolatingRunSequence>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<isolatingRunSequence>(s)

		// on entry, only these types remain
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as isolatingRunSequence).assertOnly($.arrayToSlice<__goscript_trieval.Class>([0, 1, 13, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 21, 22, 23, 24])) : isolatingRunSequence.prototype.assertOnly.call(s, $.arrayToSlice<__goscript_trieval.Class>([0, 1, 13, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 21, 22, 23, 24])))

		// Rule W1.
		// Changes all NSMs.
		let precedingCharacterType = (s$ as isolatingRunSequence).sos
		for (let __goscriptRangeTarget20 = (s$ as isolatingRunSequence).types, __goscriptRangeWindow20 = $.sliceRange(__goscriptRangeTarget20), i = 0; i < __goscriptRangeWindow20.length; i++) {
			let t = (__goscriptRangeWindow20.backing[__goscriptRangeWindow20.offset + i] as __goscript_trieval.Class)
			if (t == 12) {
				$.sliceElems((s$ as isolatingRunSequence).types!)[$.sliceSlot((s$ as isolatingRunSequence).types!, i)] = precedingCharacterType
			} else {
				// if t.in(LRI, RLI, FSI, PDI) {
				// 	precedingCharacterType = ON
				// }
				precedingCharacterType = t
			}
		}

		// Rule W2.
		// EN does not change at the start of the run, because sos != AL.
		for (let __goscriptRangeTarget21 = (s$ as isolatingRunSequence).types, __goscriptRangeWindow21 = $.sliceRange(__goscriptRangeTarget21), i = 0; i < __goscriptRangeWindow21.length; i++) {
			let t = (__goscriptRangeWindow21.backing[__goscriptRangeWindow21.offset + i] as __goscript_trieval.Class)
			if (t == 2) {
				for (let j = i - 1; j >= 0; j--) {
					{
						let __goscriptShadow1 = $.arrayIndex((s$ as isolatingRunSequence).types!, j)
						if (Class__in(__goscriptShadow1, $.arrayToSlice<__goscript_trieval.Class>([0, 1, 13]))) {
							if (__goscriptShadow1 == 13) {
								$.sliceElems((s$ as isolatingRunSequence).types!)[$.sliceSlot((s$ as isolatingRunSequence).types!, i)] = 5
							}
							break
						}
					}
				}
			}
		}

		// Rule W3.
		for (let __goscriptRangeTarget22 = (s$ as isolatingRunSequence).types, __goscriptRangeWindow22 = $.sliceRange(__goscriptRangeTarget22), i = 0; i < __goscriptRangeWindow22.length; i++) {
			let t = (__goscriptRangeWindow22.backing[__goscriptRangeWindow22.offset + i] as __goscript_trieval.Class)
			if (t == 13) {
				$.sliceElems((s$ as isolatingRunSequence).types!)[$.sliceSlot((s$ as isolatingRunSequence).types!, i)] = 1
			}
		}

		// Rule W4.
		// Since there must be values on both sides for this rule to have an
		// effect, the scan skips the first and last value.
		//
		// Although the scan proceeds left to right, and changes the type
		// values in a way that would appear to affect the computations
		// later in the scan, there is actually no problem. A change in the
		// current value can only affect the value to its immediate right,
		// and only affect it if it is ES or CS. But the current value can
		// only change if the value to its right is not ES or CS. Thus
		// either the current value will not change, or its change will have
		// no effect on the remainder of the analysis.

		for (let i = 1; i < ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as isolatingRunSequence).Len() : isolatingRunSequence.prototype.Len.call(s)) - 1); i++) {
			let t = $.arrayIndex((s$ as isolatingRunSequence).types!, i)
			if ((t == 3) || (t == 6)) {
				let prevSepType = $.arrayIndex((s$ as isolatingRunSequence).types!, i - 1)
				let succSepType = $.arrayIndex((s$ as isolatingRunSequence).types!, i + 1)
				if ((prevSepType == 2) && (succSepType == 2)) {
					$.sliceElems((s$ as isolatingRunSequence).types!)[$.sliceSlot((s$ as isolatingRunSequence).types!, i)] = 2
				} else {
					if ((($.arrayIndex((s$ as isolatingRunSequence).types!, i) == 6) && (prevSepType == 5)) && (succSepType == 5)) {
						$.sliceElems((s$ as isolatingRunSequence).types!)[$.sliceSlot((s$ as isolatingRunSequence).types!, i)] = 5
					}
				}
			}
		}

		// Rule W5.
		for (let __goscriptRangeTarget23 = (s$ as isolatingRunSequence).types, __goscriptRangeWindow23 = $.sliceRange(__goscriptRangeTarget23), i = 0; i < __goscriptRangeWindow23.length; i++) {
			let t = (__goscriptRangeWindow23.backing[__goscriptRangeWindow23.offset + i] as __goscript_trieval.Class)
			if (t == 4) {
				// locate end of sequence
				let runStart = i
				let runEnd = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as isolatingRunSequence).findRunLimit(runStart, $.arrayToSlice<__goscript_trieval.Class>([4])) : isolatingRunSequence.prototype.findRunLimit.call(s, runStart, $.arrayToSlice<__goscript_trieval.Class>([4])))

				// check values at ends of sequence
				let __goscriptShadow2 = (s$ as isolatingRunSequence).sos
				if (runStart > 0) {
					__goscriptShadow2 = $.arrayIndex((s$ as isolatingRunSequence).types!, runStart - 1)
				}
				if (__goscriptShadow2 != 2) {
					__goscriptShadow2 = (s$ as isolatingRunSequence).eos
					if (runEnd < $.sliceLen((s$ as isolatingRunSequence).types)) {
						__goscriptShadow2 = $.arrayIndex((s$ as isolatingRunSequence).types!, runEnd)
					}
				}
				if (__goscriptShadow2 == 2) {
					setTypes($.goSlice((s$ as isolatingRunSequence).types, runStart, runEnd), 2)
				}
				// continue at end of sequence
				i = runEnd
			}
		}

		// Rule W6.
		for (let __goscriptRangeTarget24 = (s$ as isolatingRunSequence).types, __goscriptRangeWindow24 = $.sliceRange(__goscriptRangeTarget24), i = 0; i < __goscriptRangeWindow24.length; i++) {
			let t = (__goscriptRangeWindow24.backing[__goscriptRangeWindow24.offset + i] as __goscript_trieval.Class)
			if (Class__in(t, $.arrayToSlice<__goscript_trieval.Class>([3, 4, 6]))) {
				$.sliceElems((s$ as isolatingRunSequence).types!)[$.sliceSlot((s$ as isolatingRunSequence).types!, i)] = 10
			}
		}

		// Rule W7.
		for (let __goscriptRangeTarget25 = (s$ as isolatingRunSequence).types, __goscriptRangeWindow25 = $.sliceRange(__goscriptRangeTarget25), i = 0; i < __goscriptRangeWindow25.length; i++) {
			let t = (__goscriptRangeWindow25.backing[__goscriptRangeWindow25.offset + i] as __goscript_trieval.Class)
			if (t == 2) {
				// set default if we reach start of run
				let prevStrongType = (s$ as isolatingRunSequence).sos
				for (let j = i - 1; j >= 0; j--) {
					t = $.arrayIndex((s$ as isolatingRunSequence).types!, j)
					if ((t == 0) || (t == 1)) {
						prevStrongType = t
						break
					}
				}
				if (prevStrongType == 0) {
					$.sliceElems((s$ as isolatingRunSequence).types!)[$.sliceSlot((s$ as isolatingRunSequence).types!, i)] = 0
				}
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"bidi.isolatingRunSequence",
		() => new isolatingRunSequence(),
		() => [$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("applyLevelsAndTypes", [], [], true), $.methodSignature("assertOnly", [["codes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "bidi.Class"))]], [], true), $.methodSignature("findRunLimit", [["index", /* @__PURE__ */ $.basicType("int")], ["validSet", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "bidi.Class"))]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("resolveImplicitLevels", [], [], true), $.methodSignature("resolveNeutralTypes", [], [], true), $.methodSignature("resolveWeakTypes", [], [], true)],
		isolatingRunSequence,
		() => [/* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.pointerType("bidi.paragraph"), [0], 0, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("indexes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [1], 8, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("types", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "bidi.Class")), [2], 32, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("resolvedLevels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8", "bidi.level")), [3], 56, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("level", /* @__PURE__ */ $.basicType("int8", "bidi.level"), [4], 80, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("sos", /* @__PURE__ */ $.basicType("uint", "bidi.Class"), [5], 88, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("eos", /* @__PURE__ */ $.basicType("uint", "bidi.Class"), [6], 96, false, { pkgPath: "golang.org/x/text/unicode/bidi" })]
	)
}

export const implicitLevel: level = -1

export const maxDepth: number = 125

export function Class__in(c: __goscript_trieval.Class, _set: $.Slice<__goscript_trieval.Class>): boolean {
	for (let __goscriptRangeTarget0 = _set, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let s = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_trieval.Class)
		if (c == s) {
			return true
		}
	}
	return false
}

export async function newParagraph(types: $.Slice<__goscript_trieval.Class>, pairTypes: $.Slice<__goscript_bracket.bracketType>, pairValues: $.Slice<number>, levels: level): globalThis.Promise<[paragraph | $.VarRef<paragraph> | null, $.GoError]> {
	let err: $.GoError = null! as $.GoError
	{
		err = validateTypes(types)
		if (err != null) {
			return [null, err]
		}
	}
	{
		err = validatePbTypes(pairTypes)
		if (err != null) {
			return [null, err]
		}
	}
	{
		err = validatePbValues(pairValues, pairTypes)
		if (err != null) {
			return [null, err]
		}
	}
	{
		err = validateParagraphEmbeddingLevel(levels)
		if (err != null) {
			return [null, err]
		}
	}

	let p: paragraph | $.VarRef<paragraph> | null = new paragraph({initialTypes: $.appendSlice<__goscript_trieval.Class>(null, types), embeddingLevel: levels, pairTypes: pairTypes, pairValues: pairValues, resultTypes: $.appendSlice<__goscript_trieval.Class>(null, types)})
	await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as paragraph).run() : paragraph.prototype.run.call(p))
	return [p, null]
}

export function maxLevel(a: level, b: level): level {
	if (a > b) {
		return a
	}
	return b
}

export function setLevels(levels: $.Slice<level>, newLevel: level): void {
	for (let __goscriptRangeTarget26 = levels, __goscriptRangeWindow26 = $.sliceRange(__goscriptRangeTarget26), i = 0; i < __goscriptRangeWindow26.length; i++) {
		;(__goscriptRangeWindow26.backing as any[])[__goscriptRangeWindow26.offset + i] = newLevel
	}
}

export function setTypes(types: $.Slice<__goscript_trieval.Class>, newType: __goscript_trieval.Class): void {
	for (let __goscriptRangeTarget27 = types, __goscriptRangeWindow27 = $.sliceRange(__goscriptRangeTarget27), i = 0; i < __goscriptRangeWindow27.length; i++) {
		;(__goscriptRangeWindow27.backing as any[])[__goscriptRangeWindow27.offset + i] = newType
	}
}

export function computeMultilineReordering(levels: $.Slice<level>, linebreaks: $.Slice<number>): $.Slice<number> {
	let result: $.Slice<number> = $.makeSlice<number>($.sliceLen(levels), undefined, "number")

	let start = 0
	for (let __goscriptRangeTarget29 = linebreaks, __goscriptRangeWindow28 = $.sliceRange(__goscriptRangeTarget29), __goscriptSliceWindow5 = $.sliceRange(result), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow28.length; __rangeIndex++) {
		let limit = (__goscriptRangeWindow28.backing[__goscriptRangeWindow28.offset + __rangeIndex] as number)
		let tempLevels: $.Slice<level> = $.makeSlice<level>(limit - start, undefined, "number")
		$.copy(tempLevels, $.goSlice(levels, start, undefined))

		for (let __goscriptRangeTarget28 = computeReordering(tempLevels), __goscriptRangeWindow29 = $.sliceRange(__goscriptRangeTarget28), j = 0; j < __goscriptRangeWindow29.length; j++) {
			let order = (__goscriptRangeWindow29.backing[__goscriptRangeWindow29.offset + j] as number);
			;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, start + j)] = order + start
		}
		start = limit
	}
	return result
}

export function computeReordering(levels: $.Slice<level>): $.Slice<number> {
	let result: $.Slice<number> = $.makeSlice<number>($.sliceLen(levels), undefined, "number")
	// initialize order
	for (let __goscriptRangeTarget30 = result, __goscriptRangeWindow30 = $.sliceRange(__goscriptRangeTarget30), i = 0; i < __goscriptRangeWindow30.length; i++) {
		;(__goscriptRangeWindow30.backing as any[])[__goscriptRangeWindow30.offset + i] = i
	}

	// locate highest level found on line.
	// Note the rules say text, but no reordering across line bounds is
	// performed, so this is sufficient.
	let highestLevel = 0
	let lowestOddLevel = 127
	for (let __goscriptRangeTarget31 = levels, __goscriptRangeWindow31 = $.sliceRange(__goscriptRangeTarget31), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow31.length; __rangeIndex++) {
		let level = $.int((__goscriptRangeWindow31.backing[__goscriptRangeWindow31.offset + __rangeIndex] as level), 8)
		if (level > highestLevel) {
			highestLevel = level
		}
		if (($.int((level & 1), 8) != 0) && (level < lowestOddLevel)) {
			lowestOddLevel = level
		}
	}

	for (let __goscriptSliceWindow6 = $.sliceRange(levels), __goscriptSliceWindow7 = $.sliceRange(result), __goscriptShadow3 = highestLevel; __goscriptShadow3 >= lowestOddLevel; __goscriptShadow3 = ((__goscriptShadow3 - 1) << 24 >> 24)) {
		for (let i = 0; i < __goscriptSliceWindow6.length; i++) {
			if (((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i)] as level) >= __goscriptShadow3) {
				// find range of text at or above this level
				let start = i
				let limit: number = i + 1
				while ((limit < __goscriptSliceWindow6.length) && (((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, limit)] as level) >= __goscriptShadow3)) {
					limit++
				}

				for (let j = start, k = limit - 1; j < k; [j, k] = [j + 1, k - 1]) {
					let __goscriptAssign0_0: number = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, k)] as number)
					let __goscriptAssign0_1: number = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, j)] as number);
					;(__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, j)] = __goscriptAssign0_0;
					;(__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, k)] = __goscriptAssign0_1
				}
				// skip to end of level run
				i = limit
			}
		}
	}

	return result
}

export function isWhitespace(c: __goscript_trieval.Class): boolean {
	switch (c) {
		case 18:
		case 19:
		case 16:
		case 17:
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 11:
		case 9:
		{
			return true
			break
		}
	}
	return false
}

export function isRemovedByX9(c: __goscript_trieval.Class): boolean {
	switch (c) {
		case 18:
		case 19:
		case 16:
		case 17:
		case 20:
		case 11:
		{
			return true
			break
		}
	}
	return false
}

export function typeForLevel(level: level): __goscript_trieval.Class {
	if ($.int((level & 0x1), 8) == 0) {
		return 0
	}
	return 1
}

export function validateTypes(types: $.Slice<__goscript_trieval.Class>): $.GoError {
	if ($.sliceLen(types) == 0) {
		return fmt.Errorf("types is null")
	}
	for (let __goscriptRangeTarget32 = $.goSlice(types, undefined, $.sliceLen(types) - 1), __goscriptRangeWindow32 = $.sliceRange(__goscriptRangeTarget32), i = 0; i < __goscriptRangeWindow32.length; i++) {
		let t = (__goscriptRangeWindow32.backing[__goscriptRangeWindow32.offset + i] as __goscript_trieval.Class)
		if (t == 7) {
			return fmt.Errorf("B type before end of paragraph at index: %d", $.basicInterfaceValue(i, "int"))
		}
	}
	return null
}

export function validateParagraphEmbeddingLevel(embeddingLevel: level): $.GoError {
	if (((embeddingLevel != -1) && (embeddingLevel != 0)) && (embeddingLevel != 1)) {
		return fmt.Errorf("illegal paragraph embedding level: %d", $.namedValueInterfaceValue<any>(embeddingLevel, "bidi.level", {}, /* @__PURE__ */ $.basicType("int8", "bidi.level")))
	}
	return null
}

export function validateLineBreaks(linebreaks: $.Slice<number>, textLength: number): $.GoError {
	let prev = 0
	for (let __goscriptRangeTarget33 = linebreaks, __goscriptRangeWindow33 = $.sliceRange(__goscriptRangeTarget33), i = 0; i < __goscriptRangeWindow33.length; i++) {
		let next = (__goscriptRangeWindow33.backing[__goscriptRangeWindow33.offset + i] as number)
		if (next <= prev) {
			return fmt.Errorf("bad linebreak: %d at index: %d", $.basicInterfaceValue(next, "int"), $.basicInterfaceValue(i, "int"))
		}
		prev = next
	}
	if (prev != textLength) {
		return fmt.Errorf("last linebreak was %d, want %d", $.basicInterfaceValue(prev, "int"), $.basicInterfaceValue(textLength, "int"))
	}
	return null
}

export function validatePbTypes(pairTypes: $.Slice<__goscript_bracket.bracketType>): $.GoError {
	if ($.sliceLen(pairTypes) == 0) {
		return fmt.Errorf("pairTypes is null")
	}
	for (let __goscriptRangeTarget34 = pairTypes, __goscriptRangeWindow34 = $.sliceRange(__goscriptRangeTarget34), i = 0; i < __goscriptRangeWindow34.length; i++) {
		let pt = $.uint((__goscriptRangeWindow34.backing[__goscriptRangeWindow34.offset + i] as __goscript_bracket.bracketType), 8)
		switch (pt) {
			case 0:
			case 1:
			case 2:
			{
				break
			}
			default:
			{
				return fmt.Errorf("illegal pairType value at %d: %v", $.basicInterfaceValue(i, "int"), $.namedValueInterfaceValue<any>(((__goscriptRangeWindow34.backing as any[])[__goscriptRangeWindow34.offset + i] as __goscript_bracket.bracketType), "bidi.bracketType", {}, /* @__PURE__ */ $.basicType("uint8", "bidi.bracketType")))
				break
			}
		}
	}
	return null
}

export function validatePbValues(pairValues: $.Slice<number>, pairTypes: $.Slice<__goscript_bracket.bracketType>): $.GoError {
	if (pairValues == null) {
		return fmt.Errorf("pairValues is null")
	}
	if ($.sliceLen(pairTypes) != $.sliceLen(pairValues)) {
		return fmt.Errorf("pairTypes is different length from pairValues")
	}
	return null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({in: (receiver: any, ...args: any[]) => (Class__in as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint", "bidi.Class"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("in", [["set", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "bidi.Class"))]], [/* @__PURE__ */ $.basicType("bool")])])
}
