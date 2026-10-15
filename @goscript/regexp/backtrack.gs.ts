// Generated file based on backtrack.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as syntax from "@goscript/regexp/syntax/index.js"

import * as sync from "@goscript/sync/index.js"

import * as io from "@goscript/io/index.js"

import type * as iter from "@goscript/iter/index.js"

import * as __goscript_exec from "./exec.gs.ts"

import * as __goscript_onepass from "./onepass.gs.ts"

import * as __goscript_regexp from "./regexp.gs.ts"
import "@goscript/regexp/syntax/index.js"
import "@goscript/sync/index.js"
import "@goscript/io/index.js"
import "./exec.gs.ts"
import "./onepass.gs.ts"
import "./regexp.gs.ts"

export class job {
	public get pc(): number {
		return this._fields.pc
	}

	public set pc(value: number) {
		this._fields.pc = value
	}

	public get arg(): boolean {
		return this._fields.arg
	}

	public set arg(value: boolean) {
		this._fields.arg = value
	}

	public get pos(): number {
		return this._fields.pos
	}

	public set pos(value: number) {
		this._fields.pos = value
	}

	public _fields: {
		pc: number
		arg: boolean
		pos: number
	}

	constructor(init?: Partial<{pc?: number, arg?: boolean, pos?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			pc: init?.pc ?? (0 as number),
			arg: init?.arg ?? (false as boolean),
			pos: init?.pos ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): job {
		return new job(this, true)
	}

	public __goscriptAssign(source: job): void {
		const target = this._fields
		const values = source._fields
		target.pc = values.pc
		target.arg = values.arg
		target.pos = values.pos
	}

	static __typeInfo = $.registerStructType(
		"regexp.job",
		() => new job(),
		() => [],
		job,
		() => [/* @__PURE__ */ $.structField("pc", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("arg", /* @__PURE__ */ $.basicType("bool"), [1], 4, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("pos", /* @__PURE__ */ $.basicType("int"), [2], 8, false, { pkgPath: "regexp" })]
	)
}

export class bitState {
	public get end(): number {
		return this._fields.end
	}

	public set end(value: number) {
		this._fields.end = value
	}

	public get cap(): $.Slice<number> {
		return this._fields.cap
	}

	public set cap(value: $.Slice<number>) {
		this._fields.cap = value
	}

	public get matchcap(): $.Slice<number> {
		return this._fields.matchcap
	}

	public set matchcap(value: $.Slice<number>) {
		this._fields.matchcap = value
	}

	public get jobs(): $.Slice<job> {
		return this._fields.jobs
	}

	public set jobs(value: $.Slice<job>) {
		this._fields.jobs = value
	}

	public get visited(): $.Slice<number> {
		return this._fields.visited
	}

	public set visited(value: $.Slice<number>) {
		this._fields.visited = value
	}

	public get inputs(): __goscript_exec.inputs {
		return this._fields.inputs
	}

	public set inputs(value: __goscript_exec.inputs) {
		this._fields.inputs = value
	}

	public _fields: {
		end: number
		cap: $.Slice<number>
		matchcap: $.Slice<number>
		jobs: $.Slice<job>
		visited: $.Slice<number>
		inputs: __goscript_exec.inputs
	}

	constructor(init?: Partial<{end?: number, cap?: $.Slice<number>, matchcap?: $.Slice<number>, jobs?: $.Slice<job>, visited?: $.Slice<number>, inputs?: __goscript_exec.inputs}>, __goscriptValue?: boolean) {
		this._fields = {
			end: init?.end ?? (0 as number),
			cap: init?.cap ?? (null! as $.Slice<number>),
			matchcap: init?.matchcap ?? (null! as $.Slice<number>),
			jobs: init?.jobs ?? (null! as $.Slice<job>),
			visited: init?.visited ?? (null! as $.Slice<number>),
			inputs: init?.inputs ? init.inputs.clone() : new __goscript_exec.inputs(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bitState {
		return new bitState(this, true)
	}

	public __goscriptAssign(source: bitState): void {
		const target = this._fields
		const values = source._fields
		target.end = values.end
		target.cap = values.cap
		target.matchcap = values.matchcap
		target.jobs = values.jobs
		target.visited = values.visited
		$.assignStruct(target.inputs, values.inputs)
	}

	public push(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, pc: number, pos: number, arg: boolean): void {
		let b: bitState | $.VarRef<bitState> | null = this;
		const b$: bitState = b == null ? $.pointerTarget<bitState>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<bitState>(b)
		// Only check shouldVisit when arg is false.
		// When arg is true, we are continuing a previous visit.
		if (($.arrayIndex($.pointerValue<syntax.Prog>($.pointerValue<__goscript_regexp.Regexp>(re).prog).Inst!, pc).Op != 5) && (arg || (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as bitState).shouldVisit(pc, pos) : bitState.prototype.shouldVisit.call(b, pc, pos)))) {
			;(b$ as bitState).jobs = $.appendOne((b$ as bitState).jobs, new job({pc: pc, arg: arg, pos: pos}, true))
		}
	}

	public reset(prog: syntax.Prog | $.VarRef<syntax.Prog> | null, end: number, ncap: number): void {
		let b: bitState | $.VarRef<bitState> | null = this;
		const b$: bitState = b == null ? $.pointerTarget<bitState>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<bitState>(b);
		;(b$ as bitState).end = end

		if ($.cap((b$ as bitState).jobs) == 0) {
			;(b$ as bitState).jobs = $.makeSlice<job>(0, 256, undefined, () => new job(undefined, true))
		} else {
			;(b$ as bitState).jobs = $.goSlice((b$ as bitState).jobs, undefined, 0)
		}

		let visitedSize = globalThis.Math.trunc(((($.sliceLen($.pointerValue<syntax.Prog>(prog).Inst) * (end + 1)) + 32) - 1) / 32)
		if ($.cap((b$ as bitState).visited) < visitedSize) {
			;(b$ as bitState).visited = $.makeSlice<number>(visitedSize, globalThis.Math.trunc(262144 / 32), "number")
		} else {
			;(b$ as bitState).visited = $.goSlice((b$ as bitState).visited, undefined, visitedSize)
			$.clear((b$ as bitState).visited)
		}

		if ($.cap((b$ as bitState).cap) < ncap) {
			;(b$ as bitState).cap = $.makeSlice<number>(ncap, undefined, "number")
		} else {
			;(b$ as bitState).cap = $.goSlice((b$ as bitState).cap, undefined, ncap)
		}
		for (let __goscriptRangeTarget0 = (b$ as bitState).cap, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			$.sliceElems((b$ as bitState).cap!)[$.sliceSlot((b$ as bitState).cap!, i)] = -1
		}

		if ($.cap((b$ as bitState).matchcap) < ncap) {
			;(b$ as bitState).matchcap = $.makeSlice<number>(ncap, undefined, "number")
		} else {
			;(b$ as bitState).matchcap = $.goSlice((b$ as bitState).matchcap, undefined, ncap)
		}
		for (let __goscriptRangeTarget1 = (b$ as bitState).matchcap, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			$.sliceElems((b$ as bitState).matchcap!)[$.sliceSlot((b$ as bitState).matchcap!, i)] = -1
		}
	}

	public shouldVisit(pc: number, pos: number): boolean {
		let b: bitState | $.VarRef<bitState> | null = this;
		const b$: bitState = b == null ? $.pointerTarget<bitState>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<bitState>(b)
		let n = $.uint(($.int(pc) * ((b$ as bitState).end + 1)) + pos, 64)
		if ($.uint(($.arrayIndex((b$ as bitState).visited!, $.uint($.uint64Div(n, 32n), 64)) & (((1 << ($.uint($.uint64And(n, 31n), 64))) >>> 0))), 32) != 0) {
			return false
		}
		$.sliceElems((b$ as bitState).visited!)[$.sliceSlot((b$ as bitState).visited!, $.uint($.uint64Div(n, 32n), 64))] = $.sliceElems((b$ as bitState).visited!)[$.sliceSlot((b$ as bitState).visited!, $.uint($.uint64Div(n, 32n), 64))] | ($.uint(((1 << ($.uint($.uint64And(n, 31n), 64))) >>> 0), 32))
		return true
	}

	static __typeInfo = $.registerStructType(
		"regexp.bitState",
		() => new bitState(),
		() => [$.methodSignature("push", [["re", /* @__PURE__ */ $.pointerType("regexp.Regexp")], ["pc", /* @__PURE__ */ $.basicType("uint32")], ["pos", /* @__PURE__ */ $.basicType("int")], ["arg", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("reset", [["prog", /* @__PURE__ */ $.pointerType("syntax.Prog")], ["end", /* @__PURE__ */ $.basicType("int")], ["ncap", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("shouldVisit", [["pc", /* @__PURE__ */ $.basicType("uint32")], ["pos", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true)],
		bitState,
		() => [/* @__PURE__ */ $.structField("end", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("cap", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [1], 8, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("matchcap", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [2], 32, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("jobs", /* @__PURE__ */ $.sliceType("regexp.job"), [3], 56, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("visited", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")), [4], 80, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("inputs", "regexp.inputs", [5], 104, false, { pkgPath: "regexp" })]
	)
}

export const visitedBits: number = 32

export const maxBacktrackProg: number = 500

export const maxBacktrackVector: number = 262144

export let bitStatePool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool()))

export function __goscript_set_bitStatePool(__goscriptValue: sync.Pool): void {
	$.assignStruct(bitStatePool.value, __goscriptValue)
}

export async function newBitState(): globalThis.Promise<bitState | $.VarRef<bitState> | null> {
	let __goscriptTuple0: any = $.typeAssertTuple<bitState | $.VarRef<bitState> | null>(await bitStatePool.value.Get(), /* @__PURE__ */ $.pointerType("regexp.bitState"))
	let b: bitState | $.VarRef<bitState> | null = __goscriptTuple0[0]
	let ok = __goscriptTuple0[1]
	if (!ok) {
		b = new bitState()
	}
	return b
}

export function freeBitState(b: bitState | $.VarRef<bitState> | null): void {
	$.pointerValue<bitState>(b).inputs.clear()
	bitStatePool.value.Put($.interfaceValue(b, "*regexp.bitState", /* @__PURE__ */ $.pointerType("regexp.bitState")))
}

export function maxBitStateLen(prog: syntax.Prog | $.VarRef<syntax.Prog> | null): number {
	if (!shouldBacktrack(prog)) {
		return 0
	}
	return globalThis.Math.trunc(262144 / $.sliceLen($.pointerValue<syntax.Prog>(prog).Inst))
}

export function shouldBacktrack(prog: syntax.Prog | $.VarRef<syntax.Prog> | null): boolean {
	return $.sliceLen($.pointerValue<syntax.Prog>(prog).Inst) <= 500
}
