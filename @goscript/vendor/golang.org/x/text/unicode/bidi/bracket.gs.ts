// Generated file based on bracket.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as list from "@goscript/container/list/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sort from "@goscript/sort/index.js"

import * as __goscript_core from "./core.gs.ts"

import * as __goscript_trieval from "./trieval.gs.ts"
import "@goscript/container/list/index.js"
import "@goscript/fmt/index.js"
import "@goscript/sort/index.js"
import "./core.gs.ts"
import "./trieval.gs.ts"

$.registerTypePackagePath("vendor/golang.org/x/text/unicode/bidi", ["bidi.bracketType", "bidi.bracketPair", "bidi.bracketPairs", "bidi.bracketPairer"])

export type bracketType = number

export type bracketPairs = $.Slice<bracketPair>

$.registerNamedType("bidi.bracketPairs", /* @__PURE__ */ $.sliceType("bidi.bracketPair"));

$.registerNamedValueType(
	"bidi.bracketPairs",
	{Len: (receiver: any, ...args: any[]) => (bracketPairs_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (bracketPairs_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (bracketPairs_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*bidi.bracketPairs",
	{Len: (receiver: any, ...args: any[]) => (bracketPairs_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (bracketPairs_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (bracketPairs_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class bracketPair {
	public get opener(): number {
		return this._fields.opener
	}

	public set opener(value: number) {
		this._fields.opener = value
	}

	public get closer(): number {
		return this._fields.closer
	}

	public set closer(value: number) {
		this._fields.closer = value
	}

	public _fields: {
		opener: number
		closer: number
	}

	constructor(init?: Partial<{opener?: number, closer?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			opener: init?.opener ?? (0 as number),
			closer: init?.closer ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bracketPair {
		return new bracketPair(this, true)
	}

	public __goscriptAssign(source: bracketPair): void {
		const target = this._fields
		const values = source._fields
		target.opener = values.opener
		target.closer = values.closer
	}

	public async String(): globalThis.Promise<string> {
		const b: bracketPair | $.VarRef<bracketPair> | null = this;
		const b$: bracketPair = b == null ? $.pointerTarget<bracketPair>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<bracketPair>(b)
		return fmt.Sprintf("(%v, %v)", $.basicInterfaceValue((b$ as bracketPair).opener, "int"), $.basicInterfaceValue((b$ as bracketPair).closer, "int"))
	}

	static __typeInfo = $.registerStructType(
		"bidi.bracketPair",
		() => new bracketPair(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		bracketPair,
		() => [/* @__PURE__ */ $.structField("opener", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "vendor/golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("closer", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "vendor/golang.org/x/text/unicode/bidi" })]
	)
}

export class bracketPairer {
	public get sos(): __goscript_trieval.Class {
		return this._fields.sos
	}

	public set sos(value: __goscript_trieval.Class) {
		this._fields.sos = value
	}

	public get openers(): list.List | $.VarRef<list.List> | null {
		return this._fields.openers
	}

	public set openers(value: list.List | $.VarRef<list.List> | null) {
		this._fields.openers = value
	}

	// bracket pair positions sorted by location of opening bracket
	public get pairPositions(): bracketPairs {
		return this._fields.pairPositions
	}

	public set pairPositions(value: bracketPairs) {
		this._fields.pairPositions = value
	}

	public get codesIsolatedRun(): $.Slice<__goscript_trieval.Class> {
		return this._fields.codesIsolatedRun
	}

	public set codesIsolatedRun(value: $.Slice<__goscript_trieval.Class>) {
		this._fields.codesIsolatedRun = value
	}

	public get indexes(): $.Slice<number> {
		return this._fields.indexes
	}

	public set indexes(value: $.Slice<number>) {
		this._fields.indexes = value
	}

	public _fields: {
		sos: __goscript_trieval.Class
		openers: list.List | $.VarRef<list.List> | null
		pairPositions: bracketPairs
		codesIsolatedRun: $.Slice<__goscript_trieval.Class>
		indexes: $.Slice<number>
	}

	constructor(init?: Partial<{sos?: __goscript_trieval.Class, openers?: list.List | $.VarRef<list.List> | null, pairPositions?: bracketPairs, codesIsolatedRun?: $.Slice<__goscript_trieval.Class>, indexes?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			sos: init?.sos ?? (0 as __goscript_trieval.Class),
			openers: init?.openers ?? (null! as list.List | $.VarRef<list.List> | null),
			pairPositions: init?.pairPositions ?? (null! as bracketPairs),
			codesIsolatedRun: init?.codesIsolatedRun ?? (null! as $.Slice<__goscript_trieval.Class>),
			indexes: init?.indexes ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bracketPairer {
		return new bracketPairer(this, true)
	}

	public __goscriptAssign(source: bracketPairer): void {
		const target = this._fields
		const values = source._fields
		target.sos = values.sos
		target.openers = values.openers
		target.pairPositions = values.pairPositions
		target.codesIsolatedRun = values.codesIsolatedRun
		target.indexes = values.indexes
	}

	public assignBracketType(loc: bracketPair, dirEmbed: __goscript_trieval.Class, initialTypes: $.Slice<__goscript_trieval.Class>): void {
		const p: bracketPairer | $.VarRef<bracketPairer> | null = this;
		// rule "N0, a", inspect contents of pair
		let dirPair = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as bracketPairer).classifyPairContent(loc, dirEmbed) : bracketPairer.prototype.classifyPairContent.call(p, loc, dirEmbed))

		// dirPair is now L, R, or N (no strong type found)

		// the following logical tests are performed out of order compared to
		// the statement of the rules but yield the same results
		if (dirPair == 10) {
			return
		}

		if (dirPair != dirEmbed) {
			// case "c": strong type found, opposite - check before (c.1)
			dirPair = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as bracketPairer).classBeforePair(loc) : bracketPairer.prototype.classBeforePair.call(p, loc))
			if ((dirPair == dirEmbed) || (dirPair == 10)) {
				// no strong opposite type found before - use embedding (c.2)
				dirPair = dirEmbed
			}
		}
		// else: case "b", strong type found matching embedding,
		// no explicit action needed, as dirPair is already set to embedding
		// direction

		// set the bracket types to the type found
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as bracketPairer).setBracketsToType(loc, dirPair, initialTypes) : bracketPairer.prototype.setBracketsToType.call(p, loc, dirPair, initialTypes))
	}

	public classBeforePair(loc: bracketPair): __goscript_trieval.Class {
		const p: bracketPairer | $.VarRef<bracketPairer> | null = this;
		for (let i = loc.opener - 1; i >= 0; i--) {
			{
				let dir = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as bracketPairer).getStrongTypeN0(i) : bracketPairer.prototype.getStrongTypeN0.call(p, i))
				if (dir != 10) {
					return dir
				}
			}
		}
		// no strong types found, return sos
		return $.pointerValue<bracketPairer>(p).sos
	}

	public classifyPairContent(loc: bracketPair, dirEmbed: __goscript_trieval.Class): __goscript_trieval.Class {
		const p: bracketPairer | $.VarRef<bracketPairer> | null = this;
		let dirOpposite = 10
		for (let i = loc.opener + 1; i < loc.closer; i++) {
			let dir = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as bracketPairer).getStrongTypeN0(i) : bracketPairer.prototype.getStrongTypeN0.call(p, i))
			if (dir == 10) {
				continue
			}
			if (dir == dirEmbed) {
				return dir
			}
			dirOpposite = dir
		}
		// return ON if no strong type found, or class opposite to dirEmbed
		return dirOpposite
	}

	public getStrongTypeN0(index: number): __goscript_trieval.Class {
		const p: bracketPairer | $.VarRef<bracketPairer> | null = this;
		switch ($.arrayIndex($.pointerValue<bracketPairer>(p).codesIsolatedRun!, index)) {
			case 2:
			case 5:
			case 13:
			case 1:
			{
				return 1
				break
			}
			case 0:
			{
				return 0
				break
			}
			default:
			{
				return 10
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async locateBrackets(pairTypes: $.Slice<bracketType>, pairValues: $.Slice<number>): globalThis.Promise<void> {
		let p: bracketPairer | $.VarRef<bracketPairer> | null = this;
		const p$: bracketPairer = p == null ? $.pointerTarget<bracketPairer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<bracketPairer>(p)
		// traverse the run
		// do that explicitly (not in a for-each) so we can record position
		for (let __goscriptRangeTarget0 = (p$ as bracketPairer).indexes, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(pairTypes), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let index = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as number)

			// look at the bracket type for each character
			if ((((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, index)] as bracketType) == 0) || ($.arrayIndex((p$ as bracketPairer).codesIsolatedRun!, i) != 10)) {
				// continue scanning
				continue
			}
			switch (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, index)] as bracketType)) {
				case 1:
				{
					if (list.List.prototype.Len.call((p$ as bracketPairer).openers) == 63) {
						list.List.prototype.Init.call((p$ as bracketPairer).openers)
						return
					}
					// remember opener location, most recent first
					list.List.prototype.PushFront.call((p$ as bracketPairer).openers, $.basicInterfaceValue(i, "int"))
					break
				}
				case 2:
				{
					let count = 0
					for (let elem: list.Element | $.VarRef<list.Element> | null = list.List.prototype.Front.call((p$ as bracketPairer).openers); elem != null; elem = (elem !== null && (elem as any).__isVarRef !== true && (elem as any).__goValue === undefined ? ((elem as any) as list.Element).Next() : list.Element.prototype.Next.call(elem))) {
						count++
						let opener = $.mustTypeAssert<number>($.pointerValue<list.Element>(elem).Value, /* @__PURE__ */ $.basicType("int"))
						if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as bracketPairer).matchOpener(pairValues, opener, i) : bracketPairer.prototype.matchOpener.call(p, pairValues, opener, i))) {
							// if the opener matches, add nested pair to the ordered list
							;(p$ as bracketPairer).pairPositions = ($.appendOne(((p$ as bracketPairer).pairPositions as bracketPairs), new bracketPair({opener: opener, closer: i}, true)) as bracketPairs)
							// remove up to and including matched opener
							for (; count > 0; count--) {
								list.List.prototype.Remove.call((p$ as bracketPairer).openers, list.List.prototype.Front.call((p$ as bracketPairer).openers))
							}
							break
						}
					}
					await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((p$ as bracketPairer).pairPositions, "bidi.bracketPairs", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
					break
				}
			}
		}
	}

	public matchOpener(pairValues: $.Slice<number>, opener: number, closer: number): boolean {
		const p: bracketPairer | $.VarRef<bracketPairer> | null = this;
		const p$: bracketPairer = p == null ? $.pointerTarget<bracketPairer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<bracketPairer>(p)
		return $.arrayIndex(pairValues!, $.arrayIndex((p$ as bracketPairer).indexes!, opener)) == $.arrayIndex(pairValues!, $.arrayIndex((p$ as bracketPairer).indexes!, closer))
	}

	public resolveBrackets(dirEmbed: __goscript_trieval.Class, initialTypes: $.Slice<__goscript_trieval.Class>): void {
		const p: bracketPairer | $.VarRef<bracketPairer> | null = this;
		for (let __goscriptRangeTarget1 = $.pointerValue<bracketPairer>(p).pairPositions, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let loc = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as bracketPair)).clone()
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as bracketPairer).assignBracketType((loc).clone(), dirEmbed, initialTypes) : bracketPairer.prototype.assignBracketType.call(p, (loc).clone(), dirEmbed, initialTypes))
		}
	}

	public setBracketsToType(loc: bracketPair, dirPair: __goscript_trieval.Class, initialTypes: $.Slice<__goscript_trieval.Class>): void {
		let p: bracketPairer | $.VarRef<bracketPairer> | null = this;
		const p$: bracketPairer = p == null ? $.pointerTarget<bracketPairer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<bracketPairer>(p)
		$.sliceElems((p$ as bracketPairer).codesIsolatedRun!)[$.sliceSlot((p$ as bracketPairer).codesIsolatedRun!, loc.opener)] = dirPair
		$.sliceElems((p$ as bracketPairer).codesIsolatedRun!)[$.sliceSlot((p$ as bracketPairer).codesIsolatedRun!, loc.closer)] = dirPair

		for (let __goscriptSliceWindow1 = $.sliceRange(initialTypes), i = loc.opener + 1; i < loc.closer; i++) {
			let index = $.arrayIndex((p$ as bracketPairer).indexes!, i)
			if (((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, index)] as __goscript_trieval.Class) != 12) {
				break
			}
			$.sliceElems((p$ as bracketPairer).codesIsolatedRun!)[$.sliceSlot((p$ as bracketPairer).codesIsolatedRun!, i)] = dirPair
		}

		for (let __goscriptSliceWindow2 = $.sliceRange(initialTypes), i = loc.closer + 1; i < $.sliceLen((p$ as bracketPairer).indexes); i++) {
			let index = $.arrayIndex((p$ as bracketPairer).indexes!, i)
			if (((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, index)] as __goscript_trieval.Class) != 12) {
				break
			}
			$.sliceElems((p$ as bracketPairer).codesIsolatedRun!)[$.sliceSlot((p$ as bracketPairer).codesIsolatedRun!, i)] = dirPair
		}
	}

	static __typeInfo = $.registerStructType(
		"bidi.bracketPairer",
		() => new bracketPairer(),
		() => [$.methodSignature("assignBracketType", [["loc", "bidi.bracketPair"], ["dirEmbed", /* @__PURE__ */ $.basicType("uint", "bidi.Class")], ["initialTypes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "bidi.Class"))]], [], true), $.methodSignature("classBeforePair", [["loc", "bidi.bracketPair"]], [/* @__PURE__ */ $.basicType("uint", "bidi.Class")], true), $.methodSignature("classifyPairContent", [["loc", "bidi.bracketPair"], ["dirEmbed", /* @__PURE__ */ $.basicType("uint", "bidi.Class")]], [/* @__PURE__ */ $.basicType("uint", "bidi.Class")], true), $.methodSignature("getStrongTypeN0", [["index", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint", "bidi.Class")], true), $.methodSignature("locateBrackets", [["pairTypes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8", "bidi.bracketType"))], ["pairValues", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))]], [], true), $.methodSignature("matchOpener", [["pairValues", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))], ["opener", /* @__PURE__ */ $.basicType("int")], ["closer", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("resolveBrackets", [["dirEmbed", /* @__PURE__ */ $.basicType("uint", "bidi.Class")], ["initialTypes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "bidi.Class"))]], [], true), $.methodSignature("setBracketsToType", [["loc", "bidi.bracketPair"], ["dirPair", /* @__PURE__ */ $.basicType("uint", "bidi.Class")], ["initialTypes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "bidi.Class"))]], [], true)],
		bracketPairer,
		() => [/* @__PURE__ */ $.structField("sos", /* @__PURE__ */ $.basicType("uint", "bidi.Class"), [0], 0, false, { pkgPath: "vendor/golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("openers", /* @__PURE__ */ $.pointerType("list.List"), [1], 8, false, { pkgPath: "vendor/golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("pairPositions", /* @__PURE__ */ $.sliceType("bidi.bracketPair", "bidi.bracketPairs"), [2], 16, false, { pkgPath: "vendor/golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("codesIsolatedRun", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "bidi.Class")), [3], 40, false, { pkgPath: "vendor/golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("indexes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [4], 64, false, { pkgPath: "vendor/golang.org/x/text/unicode/bidi" })]
	)
}

export const bpNone: bracketType = 0

export const bpOpen: bracketType = 1

export const bpClose: bracketType = 2

export const maxPairingDepth: number = 63

export function bracketPairs_Len(b: bracketPairs): number {
	return $.sliceLen((b as bracketPairs))
}

export function bracketPairs_Swap(b: bracketPairs, i: number, j: number): void {
	let __goscriptAssign0_0: bracketPair = ($.arrayIndex(b!, j)).clone()
	let __goscriptAssign0_1: bracketPair = ($.arrayIndex(b!, i)).clone()
	$.assignStruct($.sliceElems(b!)[$.sliceSlot(b!, i)], __goscriptAssign0_0)
	$.assignStruct($.sliceElems(b!)[$.sliceSlot(b!, j)], __goscriptAssign0_1)
}

export function bracketPairs_Less(b: bracketPairs, i: number, j: number): boolean {
	return $.arrayIndex(b!, i).opener < $.arrayIndex(b!, j).opener
}

export async function resolvePairedBrackets(s: __goscript_core.isolatingRunSequence | $.VarRef<__goscript_core.isolatingRunSequence> | null): globalThis.Promise<void> {
	const s$: __goscript_core.isolatingRunSequence = s == null ? $.pointerTarget<__goscript_core.isolatingRunSequence>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_core.isolatingRunSequence>(s)
	let p = $.varRef((() => { const __goscriptLiteralField0 = list.New(); return new bracketPairer({sos: (s$ as __goscript_core.isolatingRunSequence).sos, openers: __goscriptLiteralField0, codesIsolatedRun: (s$ as __goscript_core.isolatingRunSequence).types, indexes: (s$ as __goscript_core.isolatingRunSequence).indexes}, true) })())
	let dirEmbed = 0
	if ($.int(((s$ as __goscript_core.isolatingRunSequence).level & 1), 8) != 0) {
		dirEmbed = 1
	}
	await p.value.locateBrackets($.pointerValue<__goscript_core.paragraph>((s$ as __goscript_core.isolatingRunSequence).p).pairTypes, $.pointerValue<__goscript_core.paragraph>((s$ as __goscript_core.isolatingRunSequence).p).pairValues)
	p.value.resolveBrackets(dirEmbed, $.pointerValue<__goscript_core.paragraph>((s$ as __goscript_core.isolatingRunSequence).p).initialTypes)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (bracketPairs_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (bracketPairs_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (bracketPairs_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("bidi.bracketPair", "bidi.bracketPairs"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}
