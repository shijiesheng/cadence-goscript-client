// Generated file based on bidi.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as __goscript_bracket from "./bracket.gs.ts"

import * as __goscript_core from "./core.gs.ts"

import * as __goscript_prop from "./prop.gs.ts"

import * as __goscript_trieval from "./trieval.gs.ts"
import "@goscript/bytes/index.js"
import "./bracket.gs.ts"
import "./core.gs.ts"
import "./prop.gs.ts"
import "./trieval.gs.ts"

$.registerTypePackagePath("golang.org/x/text/unicode/bidi", ["bidi.Direction", "bidi.options", "bidi.Option", "bidi.Paragraph", "bidi.Ordering", "bidi.Run"])

export type Direction = number

export type Option = ((_p0: options | $.VarRef<options> | null) => void) | null

export class options {
	public get defaultDirection(): Direction {
		return this._fields.defaultDirection
	}

	public set defaultDirection(value: Direction) {
		this._fields.defaultDirection = value
	}

	public _fields: {
		defaultDirection: Direction
	}

	constructor(init?: Partial<{defaultDirection?: Direction}>, __goscriptValue?: boolean) {
		this._fields = {
			defaultDirection: init?.defaultDirection ?? (0 as Direction)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): options {
		return new options(this, true)
	}

	public __goscriptAssign(source: options): void {
		const target = this._fields
		const values = source._fields
		target.defaultDirection = values.defaultDirection
	}

	static __typeInfo = $.registerStructType(
		"bidi.options",
		() => new options(),
		() => [],
		options,
		() => [/* @__PURE__ */ $.structField("defaultDirection", /* @__PURE__ */ $.basicType("int", "bidi.Direction"), [0], 0, false, { pkgPath: "golang.org/x/text/unicode/bidi" })]
	)
}

export class Ordering {
	public get runes(): $.Slice<$.Slice<number>> {
		return this._fields.runes
	}

	public set runes(value: $.Slice<$.Slice<number>>) {
		this._fields.runes = value
	}

	public get directions(): $.Slice<Direction> {
		return this._fields.directions
	}

	public set directions(value: $.Slice<Direction>) {
		this._fields.directions = value
	}

	public get startpos(): $.Slice<number> {
		return this._fields.startpos
	}

	public set startpos(value: $.Slice<number>) {
		this._fields.startpos = value
	}

	public _fields: {
		runes: $.Slice<$.Slice<number>>
		directions: $.Slice<Direction>
		startpos: $.Slice<number>
	}

	constructor(init?: Partial<{runes?: $.Slice<$.Slice<number>>, directions?: $.Slice<Direction>, startpos?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			runes: init?.runes ?? (null! as $.Slice<$.Slice<number>>),
			directions: init?.directions ?? (null! as $.Slice<Direction>),
			startpos: init?.startpos ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Ordering {
		return new Ordering(this, true)
	}

	public __goscriptAssign(source: Ordering): void {
		const target = this._fields
		const values = source._fields
		target.runes = values.runes
		target.directions = values.directions
		target.startpos = values.startpos
	}

	public Direction(): Direction {
		const o: Ordering | $.VarRef<Ordering> | null = this;
		return $.arrayIndex($.pointerValue<Ordering>(o).directions!, 0)
	}

	public NumRuns(): number {
		const o: Ordering | $.VarRef<Ordering> | null = this;
		return $.sliceLen($.pointerValue<Ordering>(o).runes)
	}

	public Run(i: number): Run {
		const o: Ordering | $.VarRef<Ordering> | null = this;
		const o$: Ordering = o == null ? $.pointerTarget<Ordering>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Ordering>(o)
		let r = new Run({runes: $.arrayIndex((o$ as Ordering).runes!, i), direction: $.arrayIndex((o$ as Ordering).directions!, i), startpos: $.arrayIndex((o$ as Ordering).startpos!, i)}, true)
		return (r).clone()
	}

	static __typeInfo = $.registerStructType(
		"bidi.Ordering",
		() => new Ordering(),
		() => [$.methodSignature("Direction", [], [/* @__PURE__ */ $.basicType("int", "bidi.Direction")], true), $.methodSignature("NumRuns", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Run", [["i", /* @__PURE__ */ $.basicType("int")]], ["bidi.Run"], true)],
		Ordering,
		() => [/* @__PURE__ */ $.structField("runes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))), [0], 0, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("directions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int", "bidi.Direction")), [1], 24, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("startpos", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [2], 48, false, { pkgPath: "golang.org/x/text/unicode/bidi" })]
	)
}

export class Paragraph {
	public get p(): $.Slice<number> {
		return this._fields.p
	}

	public set p(value: $.Slice<number>) {
		this._fields.p = value
	}

	public get o(): Ordering {
		return this._fields.o
	}

	public set o(value: Ordering) {
		this._fields.o = value
	}

	public get opts(): $.Slice<Option | null> {
		return this._fields.opts
	}

	public set opts(value: $.Slice<Option | null>) {
		this._fields.opts = value
	}

	public get types(): $.Slice<__goscript_trieval.Class> {
		return this._fields.types
	}

	public set types(value: $.Slice<__goscript_trieval.Class>) {
		this._fields.types = value
	}

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

	public get runes(): $.Slice<number> {
		return this._fields.runes
	}

	public set runes(value: $.Slice<number>) {
		this._fields.runes = value
	}

	public get options(): options {
		return this._fields.options
	}

	public set options(value: options) {
		this._fields.options = value
	}

	public _fields: {
		p: $.Slice<number>
		o: Ordering
		opts: $.Slice<Option | null>
		types: $.Slice<__goscript_trieval.Class>
		pairTypes: $.Slice<__goscript_bracket.bracketType>
		pairValues: $.Slice<number>
		runes: $.Slice<number>
		options: options
	}

	constructor(init?: Partial<{p?: $.Slice<number>, o?: Ordering, opts?: $.Slice<Option | null>, types?: $.Slice<__goscript_trieval.Class>, pairTypes?: $.Slice<__goscript_bracket.bracketType>, pairValues?: $.Slice<number>, runes?: $.Slice<number>, options?: options}>, __goscriptValue?: boolean) {
		this._fields = {
			p: init?.p ?? (null! as $.Slice<number>),
			o: init?.o ? init.o.clone() : new Ordering(undefined, true),
			opts: init?.opts ?? (null! as $.Slice<Option | null>),
			types: init?.types ?? (null! as $.Slice<__goscript_trieval.Class>),
			pairTypes: init?.pairTypes ?? (null! as $.Slice<__goscript_bracket.bracketType>),
			pairValues: init?.pairValues ?? (null! as $.Slice<number>),
			runes: init?.runes ?? (null! as $.Slice<number>),
			options: init?.options ? init.options.clone() : new options(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Paragraph {
		return new Paragraph(this, true)
	}

	public __goscriptAssign(source: Paragraph): void {
		const target = this._fields
		const values = source._fields
		target.p = values.p
		$.assignStruct(target.o, values.o)
		target.opts = values.opts
		target.types = values.types
		target.pairTypes = values.pairTypes
		target.pairValues = values.pairValues
		target.runes = values.runes
		$.assignStruct(target.options, values.options)
	}

	public Direction(): Direction {
		const p: Paragraph | $.VarRef<Paragraph> | null = this;
		return $.pointerValue<Paragraph>(p).o.Direction()
	}

	public IsLeftToRight(): boolean {
		const p: Paragraph | $.VarRef<Paragraph> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Paragraph).Direction() : Paragraph.prototype.Direction.call(p)) == 0
	}

	public async Line(start: number, end: number): globalThis.Promise<[Ordering, $.GoError]> {
		const p: Paragraph | $.VarRef<Paragraph> | null = this;
		const p$: Paragraph = p == null ? $.pointerTarget<Paragraph>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Paragraph>(p)
		let lineTypes: $.Slice<__goscript_trieval.Class> = $.goSlice((p$ as Paragraph).types, start, end)
		let __goscriptTuple0: any = await __goscript_core.newParagraph(lineTypes, $.goSlice((p$ as Paragraph).pairTypes, start, end), $.goSlice((p$ as Paragraph).pairValues, start, end), -1)
		let para: __goscript_core.paragraph | $.VarRef<__goscript_core.paragraph> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [new Ordering(undefined, true), err]
		}
		let levels: $.Slice<__goscript_core.level> = (para !== null && (para as any).__isVarRef !== true && (para as any).__goValue === undefined ? ((para as any) as __goscript_core.paragraph).getLevels($.arrayToSlice<number>([$.sliceLen(lineTypes)])) : __goscript_core.paragraph.prototype.getLevels.call(para, $.arrayToSlice<number>([$.sliceLen(lineTypes)])))
		let o = calculateOrdering(levels, $.goSlice((p$ as Paragraph).runes, start, end))
		return [(o).clone(), null]
	}

	public async Order(): globalThis.Promise<[Ordering, $.GoError]> {
		let p: Paragraph | $.VarRef<Paragraph> | null = this;
		const p$: Paragraph = p == null ? $.pointerTarget<Paragraph>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Paragraph>(p)
		if ($.sliceLen((p$ as Paragraph).types) == 0) {
			return [new Ordering(undefined, true), null]
		}

		for (let __goscriptRangeTarget0 = (p$ as Paragraph).opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let fn = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Option | null)
			void (__goscriptAwait = fn!($.fieldRef((p$ as Paragraph)._fields, "options")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		let lvl = -1
		if ((p$ as Paragraph).options.defaultDirection == 1) {
			lvl = 1
		}
		let __goscriptTuple1: any = await __goscript_core.newParagraph((p$ as Paragraph).types, (p$ as Paragraph).pairTypes, (p$ as Paragraph).pairValues, lvl)
		let para: __goscript_core.paragraph | $.VarRef<__goscript_core.paragraph> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [new Ordering(undefined, true), err]
		}

		let levels: $.Slice<__goscript_core.level> = (para !== null && (para as any).__isVarRef !== true && (para as any).__goValue === undefined ? ((para as any) as __goscript_core.paragraph).getLevels($.arrayToSlice<number>([$.sliceLen((p$ as Paragraph).types)])) : __goscript_core.paragraph.prototype.getLevels.call(para, $.arrayToSlice<number>([$.sliceLen((p$ as Paragraph).types)])))

		$.assignStruct((p$ as Paragraph).o, calculateOrdering(levels, (p$ as Paragraph).runes))
		return [((p$ as Paragraph).o).clone(), null]
	}

	public RunAt(pos: number): Run {
		const p: Paragraph | $.VarRef<Paragraph> | null = this;
		const p$: Paragraph = p == null ? $.pointerTarget<Paragraph>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Paragraph>(p)
		let c = 0
		let runNumber = 0
		for (let __goscriptRangeTarget1 = (p$ as Paragraph).o.runes, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let r = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as $.Slice<number>)
			c = c + ($.sliceLen(r))
			if (pos < c) {
				runNumber = i
			}
		}
		return (p$ as Paragraph).o.Run(runNumber)
	}

	public SetBytes(b: $.Slice<number>, opts: $.Slice<Option | null>): [number, $.GoError] {
		let p: Paragraph | $.VarRef<Paragraph> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const p$: Paragraph = p == null ? $.pointerTarget<Paragraph>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Paragraph>(p);
		;(p$ as Paragraph).p = b;
		;(p$ as Paragraph).opts = opts
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Paragraph).prepareInput() : Paragraph.prototype.prepareInput.call(p))
	}

	public SetString(s: string, opts: $.Slice<Option | null>): [number, $.GoError] {
		let p: Paragraph | $.VarRef<Paragraph> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const p$: Paragraph = p == null ? $.pointerTarget<Paragraph>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Paragraph>(p);
		;(p$ as Paragraph).p = $.stringToBytes(s);
		;(p$ as Paragraph).opts = opts
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Paragraph).prepareInput() : Paragraph.prototype.prepareInput.call(p))
	}

	public prepareInput(): [number, $.GoError] {
		let p: Paragraph | $.VarRef<Paragraph> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const p$: Paragraph = p == null ? $.pointerTarget<Paragraph>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Paragraph>(p);
		;(p$ as Paragraph).runes = bytes.Runes((p$ as Paragraph).p)
		let bytecount = 0;
		// clear slices from previous SetString or SetBytes
		;(p$ as Paragraph).pairTypes = null;
		;(p$ as Paragraph).pairValues = null;
		;(p$ as Paragraph).types = null

		for (let __goscriptRangeTarget2 = (p$ as Paragraph).runes, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let r = $.int((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as number), 32)
			let [props, i] = __goscript_prop.LookupRune(r)
			bytecount = bytecount + (i)
			let cls = props.Class()
			if (cls == 7) {
				return [bytecount, null]
			}
			;(p$ as Paragraph).types = $.appendOne((p$ as Paragraph).types, cls)
			if (props.IsOpeningBracket()) {
				;(p$ as Paragraph).pairTypes = $.append((p$ as Paragraph).pairTypes, $.uint(1, 8), $.byteSliceHint);
				;(p$ as Paragraph).pairValues = $.appendOne((p$ as Paragraph).pairValues, $.int(r, 32))
			} else {
				if (props.IsBracket()) {
					// this must be a closing bracket,
					// since IsOpeningBracket is not true
					;(p$ as Paragraph).pairTypes = $.append((p$ as Paragraph).pairTypes, $.uint(2, 8), $.byteSliceHint);
					;(p$ as Paragraph).pairValues = $.appendOne((p$ as Paragraph).pairValues, $.int(r, 32))
				} else {
					;(p$ as Paragraph).pairTypes = $.append((p$ as Paragraph).pairTypes, $.uint(0, 8), $.byteSliceHint);
					;(p$ as Paragraph).pairValues = $.appendOne((p$ as Paragraph).pairValues, $.int(0, 32))
				}
			}
		}
		return [bytecount, null]
	}

	static __typeInfo = $.registerStructType(
		"bidi.Paragraph",
		() => new Paragraph(),
		() => [$.methodSignature("Direction", [], [/* @__PURE__ */ $.basicType("int", "bidi.Direction")], true), $.methodSignature("IsLeftToRight", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Line", [["start", /* @__PURE__ */ $.basicType("int")], ["end", /* @__PURE__ */ $.basicType("int")]], ["bidi.Ordering", "error"], true), $.methodSignature("Order", [], ["bidi.Ordering", "error"], true), $.methodSignature("RunAt", [["pos", /* @__PURE__ */ $.basicType("int")]], ["bidi.Run"], true), $.methodSignature("SetBytes", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["opts", /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, name: "bidi.Option", params: [/* @__PURE__ */ $.pointerType("bidi.options")], results: [] } as $.FunctionTypeInfo))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("SetString", [["s", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, name: "bidi.Option", params: [/* @__PURE__ */ $.pointerType("bidi.options")], results: [] } as $.FunctionTypeInfo))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("prepareInput", [], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		Paragraph,
		() => [/* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("o", "bidi.Ordering", [1], 24, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("opts", /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, name: "bidi.Option", params: [/* @__PURE__ */ $.pointerType("bidi.options")], results: [] } as $.FunctionTypeInfo)), [2], 96, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("types", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "bidi.Class")), [3], 120, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("pairTypes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8", "bidi.bracketType")), [4], 144, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("pairValues", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), [5], 168, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("runes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), [6], 192, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("options", "bidi.options", [7], 216, false, { pkgPath: "golang.org/x/text/unicode/bidi" })]
	)
}

export class Run {
	public get runes(): $.Slice<number> {
		return this._fields.runes
	}

	public set runes(value: $.Slice<number>) {
		this._fields.runes = value
	}

	public get direction(): Direction {
		return this._fields.direction
	}

	public set direction(value: Direction) {
		this._fields.direction = value
	}

	public get startpos(): number {
		return this._fields.startpos
	}

	public set startpos(value: number) {
		this._fields.startpos = value
	}

	public _fields: {
		runes: $.Slice<number>
		direction: Direction
		startpos: number
	}

	constructor(init?: Partial<{runes?: $.Slice<number>, direction?: Direction, startpos?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			runes: init?.runes ?? (null! as $.Slice<number>),
			direction: init?.direction ?? (0 as Direction),
			startpos: init?.startpos ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Run {
		return new Run(this, true)
	}

	public __goscriptAssign(source: Run): void {
		const target = this._fields
		const values = source._fields
		target.runes = values.runes
		target.direction = values.direction
		target.startpos = values.startpos
	}

	public Bytes(): $.Slice<number> {
		const r: Run | $.VarRef<Run> | null = this;
		return $.stringToBytes((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Run).String() : Run.prototype.String.call(r)))
	}

	public Direction(): Direction {
		const r: Run | $.VarRef<Run> | null = this;
		return $.pointerValue<Run>(r).direction
	}

	public Pos(): [number, number] {
		const r: Run | $.VarRef<Run> | null = this;
		let start: number = 0
		let end: number = 0
		const r$: Run = r == null ? $.pointerTarget<Run>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Run>(r)
		return [(r$ as Run).startpos, ((r$ as Run).startpos + $.sliceLen((r$ as Run).runes)) - 1]
	}

	public String(): string {
		const r: Run | $.VarRef<Run> | null = this;
		return $.runesToString($.pointerValue<Run>(r).runes)
	}

	static __typeInfo = $.registerStructType(
		"bidi.Run",
		() => new Run(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Direction", [], [/* @__PURE__ */ $.basicType("int", "bidi.Direction")], true), $.methodSignature("Pos", [], [["start", /* @__PURE__ */ $.basicType("int")], ["end", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Run,
		() => [/* @__PURE__ */ $.structField("runes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), [0], 0, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("direction", /* @__PURE__ */ $.basicType("int", "bidi.Direction"), [1], 24, false, { pkgPath: "golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("startpos", /* @__PURE__ */ $.basicType("int"), [2], 32, false, { pkgPath: "golang.org/x/text/unicode/bidi" })]
	)
}

export const LeftToRight: Direction = 0

export const RightToLeft: Direction = 1

export const Mixed: Direction = 2

export const Neutral: Direction = 3

export function DefaultDirection(d: Direction): Option | null {
	return $.functionValue((opts: options | $.VarRef<options> | null): void => {
		$.pointerValue<options>(opts).defaultDirection = d
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("bidi.options")], results: [] } as $.FunctionTypeInfo))
}

export function calculateOrdering(levels: $.Slice<__goscript_core.level>, runes: $.Slice<number>): Ordering {
	let curDir: Direction = 0

	let prevDir = 3
	let prevI = 0

	let o = new Ordering(undefined, true)
	// lvl = 0,2,4,...: left to right
	// lvl = 1,3,5,...: right to left
	for (let __goscriptRangeTarget3 = levels, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
		let lvl = $.int((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as __goscript_core.level), 8)
		if ($.int((lvl % 2), 8) == 0) {
			curDir = 0
		} else {
			curDir = 1
		}
		if (curDir != prevDir) {
			if (i > 0) {
				o.runes = $.appendOne(o.runes, $.goSlice(runes, prevI, i), $.appendZeros.nil)
				o.directions = $.appendOne(o.directions, prevDir)
				o.startpos = $.appendOne(o.startpos, prevI)
			}
			prevI = i
			prevDir = curDir
		}
	}
	o.runes = $.appendOne(o.runes, $.goSlice(runes, prevI, undefined), $.appendZeros.nil)
	o.directions = $.appendOne(o.directions, prevDir)
	o.startpos = $.appendOne(o.startpos, prevI)
	return (o).clone()
}

export function AppendReverse(out: $.Slice<number>, _in: $.Slice<number>): $.Slice<number> {
	let ret: $.Slice<number> = $.makeSlice<number>($.sliceLen(_in) + $.sliceLen(out), undefined, "byte")
	$.copy(ret, out)
	let inRunes: $.Slice<number> = bytes.Runes(_in)

	for (let __goscriptRangeTarget4 = inRunes, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
		let r = $.int((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as number), 32)
		let [prop, ] = __goscript_prop.LookupRune(r)
		if (prop.IsBracket()) {
			;(__goscriptRangeWindow4.backing as any[])[__goscriptRangeWindow4.offset + i] = prop.reverseBracket(r)
		}
	}

	for (let __goscriptSliceWindow0 = $.sliceRange(inRunes), i = 0, j = $.sliceLen(inRunes) - 1; i < j; [i, j] = [i + 1, j - 1]) {
		let __goscriptAssign0_0: number = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] as number)
		let __goscriptAssign0_1: number = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number);
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = __goscriptAssign0_0;
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] = __goscriptAssign0_1
	}
	$.copy($.goSlice(ret, $.sliceLen(out), undefined), $.runesToString(inRunes))

	return ret
}

export function ReverseString(s: string): string {
	let input: $.Slice<number> = $.stringToRunes(s)
	let li = $.sliceLen(input)
	let ret: $.Slice<number> = $.makeSlice<number>(li, undefined, "number")
	for (let __goscriptRangeTarget5 = input, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __goscriptSliceWindow1 = $.sliceRange(ret), i = 0; i < __goscriptRangeWindow5.length; i++) {
		let r = $.int((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as number), 32)
		let [prop, ] = __goscript_prop.LookupRune(r)
		if (prop.IsBracket()) {
			;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, (li - i) - 1)] = prop.reverseBracket(r)
		} else {
			;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, (li - i) - 1)] = r
		}
	}
	return $.runesToString(ret)
}

var __goscriptAwait: any
