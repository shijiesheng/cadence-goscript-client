// Generated file based on onepass.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as syntax from "@goscript/regexp/syntax/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strings from "@goscript/strings/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"
import "@goscript/regexp/syntax/index.js"
import "@goscript/slices/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/index.js"
import "@goscript/unicode/utf8/index.js"

export class onePassProg {
	public get Inst(): $.Slice<onePassInst> {
		return this._fields.Inst
	}

	public set Inst(value: $.Slice<onePassInst>) {
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
		Inst: $.Slice<onePassInst>
		Start: number
		NumCap: number
	}

	constructor(init?: Partial<{Inst?: $.Slice<onePassInst>, Start?: number, NumCap?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Inst: init?.Inst ?? (null! as $.Slice<onePassInst>),
			Start: init?.Start ?? (0 as number),
			NumCap: init?.NumCap ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): onePassProg {
		return new onePassProg(this, true)
	}

	public __goscriptAssign(source: onePassProg): void {
		const target = this._fields
		const values = source._fields
		target.Inst = values.Inst
		target.Start = values.Start
		target.NumCap = values.NumCap
	}

	static __typeInfo = $.registerStructType(
		"regexp.onePassProg",
		() => new onePassProg(),
		() => [],
		onePassProg,
		() => [/* @__PURE__ */ $.structField("Inst", /* @__PURE__ */ $.sliceType("regexp.onePassInst"), [0], 0, true), /* @__PURE__ */ $.structField("Start", /* @__PURE__ */ $.basicType("int"), [1], 24, true), /* @__PURE__ */ $.structField("NumCap", /* @__PURE__ */ $.basicType("int"), [2], 32, true)]
	)
}

export class onePassInst {
	public get Inst(): syntax.Inst {
		return this._fields.Inst
	}

	public set Inst(value: syntax.Inst) {
		this._fields.Inst = value
	}

	public get Next(): $.Slice<number> {
		return this._fields.Next
	}

	public set Next(value: $.Slice<number>) {
		this._fields.Next = value
	}

	public _fields: {
		Inst: syntax.Inst
		Next: $.Slice<number>
	}

	constructor(init?: Partial<{Inst?: syntax.Inst, Next?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Inst: init?.Inst ? init.Inst.clone() : new syntax.Inst(undefined, true),
			Next: init?.Next ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): onePassInst {
		return new onePassInst(this, true)
	}

	public __goscriptAssign(source: onePassInst): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Inst, values.Inst)
		target.Next = values.Next
	}

	public MatchEmptyWidth(before: any, after: any): any {
		return $.pointerValue<syntax.Inst>(this.Inst).MatchEmptyWidth(before, after)
	}

	public MatchRune(r: any): any {
		return $.pointerValue<syntax.Inst>(this.Inst).MatchRune(r)
	}

	public MatchRunePos(r: any): any {
		return $.pointerValue<syntax.Inst>(this.Inst).MatchRunePos(r)
	}

	public String(): any {
		return $.pointerValue<syntax.Inst>(this.Inst).String()
	}

	static __typeInfo = $.registerStructType(
		"regexp.onePassInst",
		() => new onePassInst(),
		() => [$.methodSignature("MatchEmptyWidth", [["before", /* @__PURE__ */ $.basicType("int32")], ["after", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MatchRune", [["r", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MatchRunePos", [["r", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		onePassInst,
		() => [/* @__PURE__ */ $.structField("Inst", "syntax.Inst", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Next", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")), [1], 40, true)]
	)
}

export class queueOnePass {
	public get sparse(): $.Slice<number> {
		return this._fields.sparse
	}

	public set sparse(value: $.Slice<number>) {
		this._fields.sparse = value
	}

	public get dense(): $.Slice<number> {
		return this._fields.dense
	}

	public set dense(value: $.Slice<number>) {
		this._fields.dense = value
	}

	public get size(): number {
		return this._fields.size
	}

	public set size(value: number) {
		this._fields.size = value
	}

	public get nextIndex(): number {
		return this._fields.nextIndex
	}

	public set nextIndex(value: number) {
		this._fields.nextIndex = value
	}

	public _fields: {
		sparse: $.Slice<number>
		dense: $.Slice<number>
		size: number
		nextIndex: number
	}

	constructor(init?: Partial<{sparse?: $.Slice<number>, dense?: $.Slice<number>, size?: number, nextIndex?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			sparse: init?.sparse ?? (null! as $.Slice<number>),
			dense: init?.dense ?? (null! as $.Slice<number>),
			size: init?.size ?? (0 as number),
			nextIndex: init?.nextIndex ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): queueOnePass {
		return new queueOnePass(this, true)
	}

	public __goscriptAssign(source: queueOnePass): void {
		const target = this._fields
		const values = source._fields
		target.sparse = values.sparse
		target.dense = values.dense
		target.size = values.size
		target.nextIndex = values.nextIndex
	}

	public clear(): void {
		let q: queueOnePass | $.VarRef<queueOnePass> | null = this;
		const q$: queueOnePass = q == null ? $.pointerTarget<queueOnePass>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<queueOnePass>(q);
		;(q$ as queueOnePass).size = 0;
		;(q$ as queueOnePass).nextIndex = 0
	}

	public contains(u: number): boolean {
		const q: queueOnePass | $.VarRef<queueOnePass> | null = this;
		const q$: queueOnePass = q == null ? $.pointerTarget<queueOnePass>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<queueOnePass>(q)
		if (u >= $.uint($.sliceLen((q$ as queueOnePass).sparse), 32)) {
			return false
		}
		return ($.arrayIndex((q$ as queueOnePass).sparse!, u) < (q$ as queueOnePass).size) && ($.arrayIndex((q$ as queueOnePass).dense!, $.arrayIndex((q$ as queueOnePass).sparse!, u)) == u)
	}

	public empty(): boolean {
		const q: queueOnePass | $.VarRef<queueOnePass> | null = this;
		const q$: queueOnePass = q == null ? $.pointerTarget<queueOnePass>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<queueOnePass>(q)
		return (q$ as queueOnePass).nextIndex >= (q$ as queueOnePass).size
	}

	public insert(u: number): void {
		const q: queueOnePass | $.VarRef<queueOnePass> | null = this;
		if (!(q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as queueOnePass).contains(u) : queueOnePass.prototype.contains.call(q, u))) {
			void (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as queueOnePass).insertNew(u) : queueOnePass.prototype.insertNew.call(q, u))
		}
	}

	public insertNew(u: number): void {
		let q: queueOnePass | $.VarRef<queueOnePass> | null = this;
		const q$: queueOnePass = q == null ? $.pointerTarget<queueOnePass>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<queueOnePass>(q)
		if (u >= $.uint($.sliceLen((q$ as queueOnePass).sparse), 32)) {
			return
		}
		$.sliceElems((q$ as queueOnePass).sparse!)[$.sliceSlot((q$ as queueOnePass).sparse!, u)] = (q$ as queueOnePass).size
		$.sliceElems((q$ as queueOnePass).dense!)[$.sliceSlot((q$ as queueOnePass).dense!, (q$ as queueOnePass).size)] = u;
		;(q$ as queueOnePass).size = (((q$ as queueOnePass).size + 1) >>> 0)
	}

	public next(): number {
		let q: queueOnePass | $.VarRef<queueOnePass> | null = this;
		let n: number = 0
		const q$: queueOnePass = q == null ? $.pointerTarget<queueOnePass>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<queueOnePass>(q)
		n = $.arrayIndex((q$ as queueOnePass).dense!, (q$ as queueOnePass).nextIndex);
		;(q$ as queueOnePass).nextIndex = (((q$ as queueOnePass).nextIndex + 1) >>> 0)
		return n
	}

	static __typeInfo = $.registerStructType(
		"regexp.queueOnePass",
		() => new queueOnePass(),
		() => [$.methodSignature("clear", [], [], true), $.methodSignature("contains", [["u", /* @__PURE__ */ $.basicType("uint32")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("empty", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("insert", [["u", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("insertNew", [["u", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("next", [], [["n", /* @__PURE__ */ $.basicType("uint32")]], true)],
		queueOnePass,
		() => [/* @__PURE__ */ $.structField("sparse", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")), [0], 0, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("dense", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")), [1], 24, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("size", /* @__PURE__ */ $.basicType("uint32"), [2], 48, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("nextIndex", /* @__PURE__ */ $.basicType("uint32"), [3], 52, false, { pkgPath: "regexp" })]
	)
}

export const mergeFailed: number = 4294967295

export function onePassPrefix(p: syntax.Prog | $.VarRef<syntax.Prog> | null): [string, boolean, number] {
	let prefix: string = ""
	let complete: boolean = false
	let pc: number = 0
	const p$: syntax.Prog = p == null ? $.pointerTarget<syntax.Prog>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<syntax.Prog>(p)
	let i: syntax.Inst | $.VarRef<syntax.Inst> | null = $.indexRef((p$ as syntax.Prog).Inst!, (p$ as syntax.Prog).Start)
	if (($.pointerValue<syntax.Inst>(i).Op != 3) || ($.uint((($.uint($.pointerValue<syntax.Inst>(i).Arg, 8)) & syntax.EmptyBeginText), 8) == 0)) {
		return ["", $.pointerValue<syntax.Inst>(i).Op == 4, $.uint((p$ as syntax.Prog).Start, 32)]
	}
	pc = $.pointerValue<syntax.Inst>(i).Out
	i = $.indexRef((p$ as syntax.Prog).Inst!, pc)
	while ($.pointerValue<syntax.Inst>(i).Op == 6) {
		pc = $.pointerValue<syntax.Inst>(i).Out
		i = $.indexRef((p$ as syntax.Prog).Inst!, pc)
	}
	// Avoid allocation of buffer if prefix is empty.
	if ((iop(i) != 7) || ($.sliceLen($.pointerValue<syntax.Inst>(i).Rune) != 1)) {
		return ["", $.pointerValue<syntax.Inst>(i).Op == 4, $.uint((p$ as syntax.Prog).Start, 32)]
	}

	// Have prefix; gather characters.
	let buf: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
	while ((((iop(i) == 7) && ($.sliceLen($.pointerValue<syntax.Inst>(i).Rune) == 1)) && ($.uint(($.uint($.pointerValue<syntax.Inst>(i).Arg, 16) & syntax.FoldCase), 16) == 0)) && ($.arrayIndex($.pointerValue<syntax.Inst>(i).Rune!, 0) != 65533)) {
		buf.value.WriteRune($.arrayIndex($.pointerValue<syntax.Inst>(i).Rune!, 0))
		let __goscriptAssign0_0: number = $.pointerValue<syntax.Inst>(i).Out
		let __goscriptAssign0_1: syntax.Inst | $.VarRef<syntax.Inst> | null = $.indexRef((p$ as syntax.Prog).Inst!, $.pointerValue<syntax.Inst>(i).Out)
		pc = __goscriptAssign0_0
		i = __goscriptAssign0_1
	}
	if ((($.pointerValue<syntax.Inst>(i).Op == 3) && ($.uint(($.uint($.pointerValue<syntax.Inst>(i).Arg, 8) & syntax.EmptyEndText), 8) != 0)) && ($.arrayIndex((p$ as syntax.Prog).Inst!, $.pointerValue<syntax.Inst>(i).Out).Op == 4)) {
		complete = true
	}
	return [buf.value.String(), complete, pc]
}

export function onePassNext(i: onePassInst | $.VarRef<onePassInst> | null, r: number): number {
	const i$: onePassInst = i == null ? $.pointerTarget<onePassInst>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<onePassInst>(i)
	let next = (i$ as onePassInst).Inst.MatchRunePos(r)
	if (next >= 0) {
		return $.arrayIndex((i$ as onePassInst).Next!, next)
	}
	if ((i$ as onePassInst).Inst.Op == 1) {
		return (i$ as onePassInst).Inst.Out
	}
	return 0
}

export function iop(i: syntax.Inst | $.VarRef<syntax.Inst> | null): syntax.InstOp {
	let op = $.pointerValue<syntax.Inst>(i).Op
	switch (op) {
		case syntax.InstRune1:
		case syntax.InstRuneAny:
		case syntax.InstRuneAnyNotNL:
		{
			op = 7
			break
		}
	}
	return op
}

export function newQueue(size: number): queueOnePass | $.VarRef<queueOnePass> | null {
	let q: queueOnePass | $.VarRef<queueOnePass> | null = null! as queueOnePass | $.VarRef<queueOnePass> | null
	return new queueOnePass({sparse: $.makeSlice<number>(size, undefined, "number"), dense: $.makeSlice<number>(size, undefined, "number")})
}

export let noRune: $.Slice<number> = $.arrayToSlice<number>([])

export function __goscript_set_noRune(__goscriptValue: $.Slice<number>): void {
	noRune = __goscriptValue
}

export let noNext: $.Slice<number> = $.arrayToSlice<number>([4294967295])

export function __goscript_set_noNext(__goscriptValue: $.Slice<number>): void {
	noNext = __goscriptValue
}

export async function mergeRuneSets(leftRunes: $.VarRef<$.Slice<number>> | null, rightRunes: $.VarRef<$.Slice<number>> | null, leftPC: number, rightPC: number): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	using __defer = new $.DisposableStack()
	let leftLen = $.sliceLen($.pointerValue<$.Slice<number>>(leftRunes))
	let rightLen = $.sliceLen($.pointerValue<$.Slice<number>>(rightRunes))
	if (((leftLen & 0x1) != 0) || ((rightLen & 0x1) != 0)) {
		$.panic("mergeRuneSets odd length []rune")
	}
	let lx: $.VarRef<number> = $.varRef(0)
	let rx: $.VarRef<number> = $.varRef(0)
	let merged: $.Slice<number> = $.makeSlice<number>(0, undefined, "number")
	let next: $.Slice<number> = $.makeSlice<number>(0, undefined, "number")
	let ok = true
	__defer.defer(() => { ((): void => {
		if (!ok) {
			merged = null
			next = null
		}
	})() })

	let ix = -1
	let extend: ((newLow: $.VarRef<number> | null, newArray: $.VarRef<$.Slice<number>> | null, pc: number) => boolean | globalThis.Promise<boolean>) | null = $.functionValue((newLow: $.VarRef<number> | null, newArray: $.VarRef<$.Slice<number>> | null, pc: number): boolean => {
		if ((ix > 0) && ($.arrayIndex(($.pointerValue<$.Slice<number>>(newArray))!, $.pointerValue<number>(newLow)) <= $.arrayIndex(merged!, ix))) {
			return false
		}
		merged = $.append(merged, $.int($.arrayIndex(($.pointerValue<$.Slice<number>>(newArray))!, $.pointerValue<number>(newLow)), 32), $.int($.arrayIndex(($.pointerValue<$.Slice<number>>(newArray))!, $.pointerValue<number>(newLow) + 1), 32))
		newLow!.value = newLow!.value + (2)
		ix = ix + (2)
		next = $.appendOne(next, $.uint(pc, 32))
		return true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int")), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))), /* @__PURE__ */ $.basicType("uint32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))

	while ((lx.value < leftLen) || (rx.value < rightLen)) {
		switch ((true as boolean)) {
			case rx.value >= rightLen:
			{
				ok = (__goscriptAwait = extend!(lx, leftRunes, leftPC), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case lx.value >= leftLen:
			{
				ok = (__goscriptAwait = extend!(rx, rightRunes, rightPC), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case $.arrayIndex(($.pointerValue<$.Slice<number>>(rightRunes))!, rx.value) < $.arrayIndex(($.pointerValue<$.Slice<number>>(leftRunes))!, lx.value):
			{
				ok = (__goscriptAwait = extend!(rx, rightRunes, rightPC), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			default:
			{
				ok = (__goscriptAwait = extend!(lx, leftRunes, leftPC), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
		}
		if (!ok) {
			return [noRune, noNext]
		}
	}
	return [merged, next]
}

export function cleanupOnePass(prog: onePassProg | $.VarRef<onePassProg> | null, original: syntax.Prog | $.VarRef<syntax.Prog> | null): void {
	const prog$: onePassProg = prog == null ? $.pointerTarget<onePassProg>(prog) : (prog as any).__isVarRef === true ? (prog as any).value : (prog as any).__goValue === undefined ? (prog as any) : $.pointerTarget<onePassProg>(prog)
	for (let __goscriptRangeTarget0 = $.pointerValue<syntax.Prog>(original).Inst, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), ix = 0; ix < __goscriptRangeWindow0.length; ix++) {
		let instOriginal = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + ix] as syntax.Inst)).clone()
		switch (instOriginal.Op) {
			case syntax.InstAlt:
			case syntax.InstAltMatch:
			case syntax.InstRune:
			{
				break
			}
			case syntax.InstCapture:
			case syntax.InstEmptyWidth:
			case syntax.InstNop:
			case syntax.InstMatch:
			case syntax.InstFail:
			{
				$.arrayIndex((prog$ as onePassProg).Inst!, ix).Next = null
				break
			}
			case syntax.InstRune1:
			case syntax.InstRuneAny:
			case syntax.InstRuneAnyNotNL:
			{
				$.arrayIndex((prog$ as onePassProg).Inst!, ix).Next = null
				$.assignStruct($.sliceElems((prog$ as onePassProg).Inst!)[$.sliceSlot((prog$ as onePassProg).Inst!, ix)], new onePassInst({Inst: instOriginal}, true))
				break
			}
		}
	}
}

export function onePassCopy(prog: syntax.Prog | $.VarRef<syntax.Prog> | null): onePassProg | $.VarRef<onePassProg> | null {
	const prog$: syntax.Prog = prog == null ? $.pointerTarget<syntax.Prog>(prog) : (prog as any).__isVarRef === true ? (prog as any).value : (prog as any).__goValue === undefined ? (prog as any) : $.pointerTarget<syntax.Prog>(prog)
	let p: onePassProg | $.VarRef<onePassProg> | null = new onePassProg({Start: (prog$ as syntax.Prog).Start, NumCap: (prog$ as syntax.Prog).NumCap, Inst: $.makeSlice<onePassInst>($.sliceLen((prog$ as syntax.Prog).Inst), undefined, undefined, () => new onePassInst(undefined, true))})
	let p$: onePassProg = p == null ? $.pointerTarget<onePassProg>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<onePassProg>(p)
	for (let __goscriptRangeTarget1 = (prog$ as syntax.Prog).Inst, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let inst = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as syntax.Inst)).clone()
		$.assignStruct($.sliceElems((p$ as onePassProg).Inst!)[$.sliceSlot((p$ as onePassProg).Inst!, i)], new onePassInst({Inst: inst}, true))
	}

	// rewrites one or more common Prog constructs that enable some otherwise
	// non-onepass Progs to be onepass. A:BD (for example) means an InstAlt at
	// ip A, that points to ips B & C.
	// A:BC + B:DA => A:BC + B:CD
	// A:BC + B:DC => A:DC + B:DC
	for (let __goscriptRangeTarget2 = (p$ as onePassProg).Inst, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), pc = 0; pc < __goscriptRangeWindow2.length; pc++) {
		switch ($.arrayIndex((p$ as onePassProg).Inst!, pc).Inst.Op) {
			default:
			{
				continue
				break
			}
			case syntax.InstAlt:
			case syntax.InstAltMatch:
			{
				let p_A_Other = $.fieldRef($.arrayIndex((p$ as onePassProg).Inst!, pc).Inst._fields, "Out")
				let p_A_Alt = $.fieldRef($.arrayIndex((p$ as onePassProg).Inst!, pc).Inst._fields, "Arg")
				// make sure a target is another Alt
				let instAlt = ($.arrayIndex((p$ as onePassProg).Inst!, $.pointerValue<number>(p_A_Alt))).clone()
				if (!((instAlt.Inst.Op == 0) || (instAlt.Inst.Op == 1))) {
					let __goscriptAssign1_0: $.VarRef<number> | null = p_A_Other
					let __goscriptAssign1_1: $.VarRef<number> | null = p_A_Alt
					p_A_Alt = __goscriptAssign1_0
					p_A_Other = __goscriptAssign1_1
					instAlt = $.assignStruct(instAlt, $.arrayIndex((p$ as onePassProg).Inst!, $.pointerValue<number>(p_A_Alt)))
					if (!((instAlt.Inst.Op == 0) || (instAlt.Inst.Op == 1))) {
						continue
					}
				}
				let instOther = ($.arrayIndex((p$ as onePassProg).Inst!, $.pointerValue<number>(p_A_Other))).clone()
				// Analyzing both legs pointing to Alts is for another day
				if ((instOther.Inst.Op == 0) || (instOther.Inst.Op == 1)) {
					// too complicated
					continue
				}
				// simple empty transition loop
				// A:BC + B:DA => A:BC + B:DC
				let p_B_Alt = $.fieldRef($.arrayIndex((p$ as onePassProg).Inst!, $.pointerValue<number>(p_A_Alt)).Inst._fields, "Out")
				let p_B_Other = $.fieldRef($.arrayIndex((p$ as onePassProg).Inst!, $.pointerValue<number>(p_A_Alt)).Inst._fields, "Arg")
				let patch = false
				if (instAlt.Inst.Out == $.uint(pc, 32)) {
					patch = true
				} else {
					if (instAlt.Inst.Arg == $.uint(pc, 32)) {
						patch = true
						let __goscriptAssign2_0: $.VarRef<number> | null = p_B_Other
						let __goscriptAssign2_1: $.VarRef<number> | null = p_B_Alt
						p_B_Alt = __goscriptAssign2_0
						p_B_Other = __goscriptAssign2_1
					}
				}
				if (patch) {
					p_B_Alt!.value = $.pointerValue<number>(p_A_Other)
				}

				// empty transition to common target
				// A:BC + B:DC => A:DC + B:DC
				if ($.pointerValue<number>(p_A_Other) == $.pointerValue<number>(p_B_Alt)) {
					p_A_Alt!.value = $.pointerValue<number>(p_B_Other)
				}
				break
			}
		}
	}
	return p
}

export let anyRuneNotNL: $.Slice<number> = $.arrayToSlice<number>([0, 9, 11, 1114111])

export function __goscript_set_anyRuneNotNL(__goscriptValue: $.Slice<number>): void {
	anyRuneNotNL = __goscriptValue
}

export let anyRune: $.Slice<number> = $.arrayToSlice<number>([0, 1114111])

export function __goscript_set_anyRune(__goscriptValue: $.Slice<number>): void {
	anyRune = __goscriptValue
}

export async function makeOnePass(p: onePassProg | $.VarRef<onePassProg> | null): globalThis.Promise<onePassProg | $.VarRef<onePassProg> | null> {
	// If the machine is very long, it's not worth the time to check if we can use one pass.
	if ($.sliceLen($.pointerValue<onePassProg>(p).Inst) >= 1000) {
		return null
	}

	let instQueue: queueOnePass | $.VarRef<queueOnePass> | null = newQueue($.sliceLen($.pointerValue<onePassProg>(p).Inst))
	let visitQueue: queueOnePass | $.VarRef<queueOnePass> | null = newQueue($.sliceLen($.pointerValue<onePassProg>(p).Inst))
	let check: ((_p0: number, _p1: $.Slice<boolean>) => boolean | globalThis.Promise<boolean>) | null = null! as ((_p0: number, _p1: $.Slice<boolean>) => boolean | globalThis.Promise<boolean>) | null
	let onePassRunes: $.Slice<$.Slice<number>> = $.makeSlice<$.Slice<number>>($.sliceLen($.pointerValue<onePassProg>(p).Inst))

	// check that paths from Alt instructions are unambiguous, and rebuild the new
	// program as a onepass program
	check = $.functionValue(async (pc: number, m: $.Slice<boolean>): globalThis.Promise<boolean> => {
		let ok: boolean = false
		ok = true
		let inst: onePassInst | $.VarRef<onePassInst> | null = $.indexRef($.pointerValue<onePassProg>(p).Inst!, pc)
		let inst$: onePassInst = inst == null ? $.pointerTarget<onePassInst>(inst) : (inst as any).__isVarRef === true ? (inst as any).value : (inst as any).__goValue === undefined ? (inst as any) : $.pointerTarget<onePassInst>(inst)
		if ((visitQueue !== null && (visitQueue as any).__isVarRef !== true && (visitQueue as any).__goValue === undefined ? ((visitQueue as any) as queueOnePass).contains(pc) : queueOnePass.prototype.contains.call(visitQueue, pc))) {
			return ok
		}
		void (visitQueue !== null && (visitQueue as any).__isVarRef !== true && (visitQueue as any).__goValue === undefined ? ((visitQueue as any) as queueOnePass).insert(pc) : queueOnePass.prototype.insert.call(visitQueue, pc))
		switch ((inst$ as onePassInst).Inst.Op) {
			case syntax.InstAlt:
			case syntax.InstAltMatch:
			{
				ok = (__goscriptAwait = check!((inst$ as onePassInst).Inst.Out, m), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (__goscriptAwait = check!((inst$ as onePassInst).Inst.Arg, m), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				// check no-input paths to InstMatch
				let matchOut = $.arrayIndex(m!, (inst$ as onePassInst).Inst.Out)
				let matchArg = $.arrayIndex(m!, (inst$ as onePassInst).Inst.Arg)
				if (matchOut && matchArg) {
					ok = false
					break
				}
				// Match on empty goes in inst.Out
				if (matchArg) {
					let __goscriptAssign3_0: number = (inst$ as onePassInst).Inst.Arg
					let __goscriptAssign3_1: number = (inst$ as onePassInst).Inst.Out;
					;(inst$ as onePassInst).Inst.Out = __goscriptAssign3_0;
					;(inst$ as onePassInst).Inst.Arg = __goscriptAssign3_1
					let __goscriptAssign4_0: boolean = matchArg
					let __goscriptAssign4_1: boolean = matchOut
					matchOut = __goscriptAssign4_0
					matchArg = __goscriptAssign4_1
				}
				if (matchOut) {
					$.sliceElems(m!)[$.sliceSlot(m!, pc)] = true;
					;(inst$ as onePassInst).Inst.Op = 1
				}

				// build a dispatch operator from the two legs of the alt.
				let __goscriptTuple0: any = await mergeRuneSets($.indexRef(onePassRunes!, (inst$ as onePassInst).Inst.Out), $.indexRef(onePassRunes!, (inst$ as onePassInst).Inst.Arg), (inst$ as onePassInst).Inst.Out, (inst$ as onePassInst).Inst.Arg)
				$.sliceElems(onePassRunes!)[$.sliceSlot(onePassRunes!, pc)] = __goscriptTuple0[0];
				;(inst$ as onePassInst).Next = __goscriptTuple0[1]
				if (($.sliceLen((inst$ as onePassInst).Next) > 0) && ($.arrayIndex((inst$ as onePassInst).Next!, 0) == 4294967295)) {
					ok = false
					break
				}
				break
			}
			case syntax.InstCapture:
			case syntax.InstNop:
			{
				ok = (__goscriptAwait = check!((inst$ as onePassInst).Inst.Out, m), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				$.sliceElems(m!)[$.sliceSlot(m!, pc)] = $.arrayIndex(m!, (inst$ as onePassInst).Inst.Out)
				// pass matching runes back through these no-ops.
				$.sliceElems(onePassRunes!)[$.sliceSlot(onePassRunes!, pc)] = $.appendSlice($.arrayToSlice<number>([]), $.arrayIndex(onePassRunes!, (inst$ as onePassInst).Inst.Out));
				;(inst$ as onePassInst).Next = $.makeSlice<number>((globalThis.Math.trunc($.sliceLen($.arrayIndex(onePassRunes!, pc)) / 2)) + 1, undefined, "number")
				for (let __goscriptRangeTarget3 = (inst$ as onePassInst).Next, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
					$.sliceElems((inst$ as onePassInst).Next!)[$.sliceSlot((inst$ as onePassInst).Next!, i)] = (inst$ as onePassInst).Inst.Out
				}
				break
			}
			case syntax.InstEmptyWidth:
			{
				ok = (__goscriptAwait = check!((inst$ as onePassInst).Inst.Out, m), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				$.sliceElems(m!)[$.sliceSlot(m!, pc)] = $.arrayIndex(m!, (inst$ as onePassInst).Inst.Out)
				$.sliceElems(onePassRunes!)[$.sliceSlot(onePassRunes!, pc)] = $.appendSlice($.arrayToSlice<number>([]), $.arrayIndex(onePassRunes!, (inst$ as onePassInst).Inst.Out));
				;(inst$ as onePassInst).Next = $.makeSlice<number>((globalThis.Math.trunc($.sliceLen($.arrayIndex(onePassRunes!, pc)) / 2)) + 1, undefined, "number")
				for (let __goscriptRangeTarget4 = (inst$ as onePassInst).Next, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
					$.sliceElems((inst$ as onePassInst).Next!)[$.sliceSlot((inst$ as onePassInst).Next!, i)] = (inst$ as onePassInst).Inst.Out
				}
				break
			}
			case syntax.InstMatch:
			case syntax.InstFail:
			{
				$.sliceElems(m!)[$.sliceSlot(m!, pc)] = (inst$ as onePassInst).Inst.Op == 4
				break
			}
			case syntax.InstRune:
			{
				$.sliceElems(m!)[$.sliceSlot(m!, pc)] = false
				if ($.sliceLen((inst$ as onePassInst).Next) > 0) {
					break
				}
				void (instQueue !== null && (instQueue as any).__isVarRef !== true && (instQueue as any).__goValue === undefined ? ((instQueue as any) as queueOnePass).insert((inst$ as onePassInst).Inst.Out) : queueOnePass.prototype.insert.call(instQueue, (inst$ as onePassInst).Inst.Out))
				if ($.sliceLen((inst$ as onePassInst).Inst.Rune) == 0) {
					$.sliceElems(onePassRunes!)[$.sliceSlot(onePassRunes!, pc)] = $.arrayToSlice<number>([]);
					;(inst$ as onePassInst).Next = $.arrayToSlice<number>([(inst$ as onePassInst).Inst.Out])
					break
				}
				let runes: $.Slice<number> = $.makeSlice<number>(0, undefined, "number")
				if (($.sliceLen((inst$ as onePassInst).Inst.Rune) == 1) && ($.uint(($.uint((inst$ as onePassInst).Inst.Arg, 16) & syntax.FoldCase), 16) != 0)) {
					let r0 = $.arrayIndex((inst$ as onePassInst).Inst.Rune!, 0)
					runes = $.append(runes, $.int(r0, 32), $.int(r0, 32))
					for (let r1 = unicode.SimpleFold(r0); r1 != r0; r1 = unicode.SimpleFold(r1)) {
						runes = $.append(runes, $.int(r1, 32), $.int(r1, 32))
					}
					slices.Sort(runes)
				} else {
					runes = $.appendSlice(runes, (inst$ as onePassInst).Inst.Rune)
				}
				$.sliceElems(onePassRunes!)[$.sliceSlot(onePassRunes!, pc)] = runes;
				;(inst$ as onePassInst).Next = $.makeSlice<number>((globalThis.Math.trunc($.sliceLen($.arrayIndex(onePassRunes!, pc)) / 2)) + 1, undefined, "number")
				for (let __goscriptRangeTarget5 = (inst$ as onePassInst).Next, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
					$.sliceElems((inst$ as onePassInst).Next!)[$.sliceSlot((inst$ as onePassInst).Next!, i)] = (inst$ as onePassInst).Inst.Out
				}
				;(inst$ as onePassInst).Inst.Op = 7
				break
			}
			case syntax.InstRune1:
			{
				$.sliceElems(m!)[$.sliceSlot(m!, pc)] = false
				if ($.sliceLen((inst$ as onePassInst).Next) > 0) {
					break
				}
				void (instQueue !== null && (instQueue as any).__isVarRef !== true && (instQueue as any).__goValue === undefined ? ((instQueue as any) as queueOnePass).insert((inst$ as onePassInst).Inst.Out) : queueOnePass.prototype.insert.call(instQueue, (inst$ as onePassInst).Inst.Out))
				let runes: $.Slice<number> = $.arrayToSlice<number>([])
				// expand case-folded runes
				if ($.uint(($.uint((inst$ as onePassInst).Inst.Arg, 16) & syntax.FoldCase), 16) != 0) {
					let r0 = $.arrayIndex((inst$ as onePassInst).Inst.Rune!, 0)
					runes = $.append(runes, $.int(r0, 32), $.int(r0, 32))
					for (let r1 = unicode.SimpleFold(r0); r1 != r0; r1 = unicode.SimpleFold(r1)) {
						runes = $.append(runes, $.int(r1, 32), $.int(r1, 32))
					}
					slices.Sort(runes)
				} else {
					runes = $.append(runes, $.int($.arrayIndex((inst$ as onePassInst).Inst.Rune!, 0), 32), $.int($.arrayIndex((inst$ as onePassInst).Inst.Rune!, 0), 32))
				}
				$.sliceElems(onePassRunes!)[$.sliceSlot(onePassRunes!, pc)] = runes;
				;(inst$ as onePassInst).Next = $.makeSlice<number>((globalThis.Math.trunc($.sliceLen($.arrayIndex(onePassRunes!, pc)) / 2)) + 1, undefined, "number")
				for (let __goscriptRangeTarget6 = (inst$ as onePassInst).Next, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), i = 0; i < __goscriptRangeWindow6.length; i++) {
					$.sliceElems((inst$ as onePassInst).Next!)[$.sliceSlot((inst$ as onePassInst).Next!, i)] = (inst$ as onePassInst).Inst.Out
				}
				;(inst$ as onePassInst).Inst.Op = 7
				break
			}
			case syntax.InstRuneAny:
			{
				$.sliceElems(m!)[$.sliceSlot(m!, pc)] = false
				if ($.sliceLen((inst$ as onePassInst).Next) > 0) {
					break
				}
				void (instQueue !== null && (instQueue as any).__isVarRef !== true && (instQueue as any).__goValue === undefined ? ((instQueue as any) as queueOnePass).insert((inst$ as onePassInst).Inst.Out) : queueOnePass.prototype.insert.call(instQueue, (inst$ as onePassInst).Inst.Out))
				$.sliceElems(onePassRunes!)[$.sliceSlot(onePassRunes!, pc)] = $.appendSlice($.arrayToSlice<number>([]), anyRune);
				;(inst$ as onePassInst).Next = $.arrayToSlice<number>([(inst$ as onePassInst).Inst.Out])
				break
			}
			case syntax.InstRuneAnyNotNL:
			{
				$.sliceElems(m!)[$.sliceSlot(m!, pc)] = false
				if ($.sliceLen((inst$ as onePassInst).Next) > 0) {
					break
				}
				void (instQueue !== null && (instQueue as any).__isVarRef !== true && (instQueue as any).__goValue === undefined ? ((instQueue as any) as queueOnePass).insert((inst$ as onePassInst).Inst.Out) : queueOnePass.prototype.insert.call(instQueue, (inst$ as onePassInst).Inst.Out))
				$.sliceElems(onePassRunes!)[$.sliceSlot(onePassRunes!, pc)] = $.appendSlice($.arrayToSlice<number>([]), anyRuneNotNL);
				;(inst$ as onePassInst).Next = $.makeSlice<number>((globalThis.Math.trunc($.sliceLen($.arrayIndex(onePassRunes!, pc)) / 2)) + 1, undefined, "number")
				for (let __goscriptRangeTarget7 = (inst$ as onePassInst).Next, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), i = 0; i < __goscriptRangeWindow7.length; i++) {
					$.sliceElems((inst$ as onePassInst).Next!)[$.sliceSlot((inst$ as onePassInst).Next!, i)] = (inst$ as onePassInst).Inst.Out
				}
				break
			}
		}
		return ok
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))

	void (instQueue !== null && (instQueue as any).__isVarRef !== true && (instQueue as any).__goValue === undefined ? ((instQueue as any) as queueOnePass).clear() : queueOnePass.prototype.clear.call(instQueue))
	void (instQueue !== null && (instQueue as any).__isVarRef !== true && (instQueue as any).__goValue === undefined ? ((instQueue as any) as queueOnePass).insert($.uint($.pointerValue<onePassProg>(p).Start, 32)) : queueOnePass.prototype.insert.call(instQueue, $.uint($.pointerValue<onePassProg>(p).Start, 32)))
	let m: $.Slice<boolean> = $.makeSlice<boolean>($.sliceLen($.pointerValue<onePassProg>(p).Inst), undefined, "boolean")
	while (!(instQueue !== null && (instQueue as any).__isVarRef !== true && (instQueue as any).__goValue === undefined ? ((instQueue as any) as queueOnePass).empty() : queueOnePass.prototype.empty.call(instQueue))) {
		void (visitQueue !== null && (visitQueue as any).__isVarRef !== true && (visitQueue as any).__goValue === undefined ? ((visitQueue as any) as queueOnePass).clear() : queueOnePass.prototype.clear.call(visitQueue))
		let pc = (instQueue !== null && (instQueue as any).__isVarRef !== true && (instQueue as any).__goValue === undefined ? ((instQueue as any) as queueOnePass).next() : queueOnePass.prototype.next.call(instQueue))
		if (!(__goscriptAwait = check!(pc, m), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			p = null
			break
		}
	}
	if (p != null) {
		for (let __goscriptRangeTarget8 = $.pointerValue<onePassProg>(p).Inst, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __goscriptSliceWindow0 = $.sliceRange(onePassRunes), i = 0; i < __goscriptRangeWindow8.length; i++) {
			$.arrayIndex($.pointerValue<onePassProg>(p).Inst!, i).Inst.Rune = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as $.Slice<number>)
		}
	}
	return p
}

export async function compileOnePass(prog: syntax.Prog | $.VarRef<syntax.Prog> | null): globalThis.Promise<onePassProg | $.VarRef<onePassProg> | null> {
	let p: onePassProg | $.VarRef<onePassProg> | null = null! as onePassProg | $.VarRef<onePassProg> | null
	const prog$: syntax.Prog = prog == null ? $.pointerTarget<syntax.Prog>(prog) : (prog as any).__isVarRef === true ? (prog as any).value : (prog as any).__goValue === undefined ? (prog as any) : $.pointerTarget<syntax.Prog>(prog)
	if ((prog$ as syntax.Prog).Start == 0) {
		return null
	}
	// onepass regexp is anchored
	if (($.arrayIndex((prog$ as syntax.Prog).Inst!, (prog$ as syntax.Prog).Start).Op != 3) || ($.uint(($.uint($.arrayIndex((prog$ as syntax.Prog).Inst!, (prog$ as syntax.Prog).Start).Arg, 8) & syntax.EmptyBeginText), 8) != 4)) {
		return null
	}
	let hasAlt = false
	for (let __goscriptRangeTarget9 = (prog$ as syntax.Prog).Inst, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
		let inst = ((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as syntax.Inst)).clone()
		if ((inst.Op == 0) || (inst.Op == 1)) {
			hasAlt = true
			break
		}
	}
	// If we have alternates, every instruction leading to InstMatch must be EmptyEndText.
	// Also, any match on empty text must be $.
	for (let __goscriptRangeTarget10 = (prog$ as syntax.Prog).Inst, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
		let inst = ((__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as syntax.Inst)).clone()
		let opOut = $.arrayIndex((prog$ as syntax.Prog).Inst!, inst.Out).Op
		switch (inst.Op) {
			default:
			{
				if ((opOut == 4) && hasAlt) {
					return null
				}
				break
			}
			case syntax.InstAlt:
			case syntax.InstAltMatch:
			{
				if ((opOut == 4) || ($.arrayIndex((prog$ as syntax.Prog).Inst!, inst.Arg).Op == 4)) {
					return null
				}
				break
			}
			case syntax.InstEmptyWidth:
			{
				if (opOut == 4) {
					if ($.uint(($.uint(inst.Arg, 8) & syntax.EmptyEndText), 8) == 8) {
						continue
					}
					return null
				}
				break
			}
		}
	}
	// Creates a slightly optimized copy of the original Prog
	// that cleans up some Prog idioms that block valid onepass programs
	p = onePassCopy(prog)

	// checkAmbiguity on InstAlts, build onepass Prog if possible
	p = await makeOnePass(p)

	if (p != null) {
		cleanupOnePass(p, prog)
	}
	return p
}

var __goscriptAwait: any
