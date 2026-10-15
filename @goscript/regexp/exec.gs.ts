// Generated file based on exec.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as syntax from "@goscript/regexp/syntax/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as iter from "@goscript/iter/index.js"

import * as __goscript_backtrack from "./backtrack.gs.ts"

import * as __goscript_onepass from "./onepass.gs.ts"

import * as __goscript_regexp from "./regexp.gs.ts"
import "@goscript/io/index.js"
import "@goscript/regexp/syntax/index.js"
import "@goscript/sync/index.js"
import "./backtrack.gs.ts"
import "./onepass.gs.ts"
import "./regexp.gs.ts"

export type lazyFlag = bigint

$.registerNamedValueType(
	"regexp.lazyFlag",
	{match: (receiver: any, ...args: any[]) => (lazyFlag_match as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("match", [["op", /* @__PURE__ */ $.basicType("uint8", "syntax.EmptyOp")]], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*regexp.lazyFlag",
	{match: (receiver: any, ...args: any[]) => (lazyFlag_match as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("match", [["op", /* @__PURE__ */ $.basicType("uint8", "syntax.EmptyOp")]], [/* @__PURE__ */ $.basicType("bool")])]
);

export class queue {
	public get sparse(): $.Slice<number> {
		return this._fields.sparse
	}

	public set sparse(value: $.Slice<number>) {
		this._fields.sparse = value
	}

	public get dense(): $.Slice<entry> {
		return this._fields.dense
	}

	public set dense(value: $.Slice<entry>) {
		this._fields.dense = value
	}

	public _fields: {
		sparse: $.Slice<number>
		dense: $.Slice<entry>
	}

	constructor(init?: Partial<{sparse?: $.Slice<number>, dense?: $.Slice<entry>}>, __goscriptValue?: boolean) {
		this._fields = {
			sparse: init?.sparse ?? (null! as $.Slice<number>),
			dense: init?.dense ?? (null! as $.Slice<entry>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): queue {
		return new queue(this, true)
	}

	public __goscriptAssign(source: queue): void {
		const target = this._fields
		const values = source._fields
		target.sparse = values.sparse
		target.dense = values.dense
	}

	static __typeInfo = $.registerStructType(
		"regexp.queue",
		() => new queue(),
		() => [],
		queue,
		() => [/* @__PURE__ */ $.structField("sparse", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")), [0], 0, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("dense", /* @__PURE__ */ $.sliceType("regexp.entry"), [1], 24, false, { pkgPath: "regexp" })]
	)
}

export class entry {
	public get pc(): number {
		return this._fields.pc
	}

	public set pc(value: number) {
		this._fields.pc = value
	}

	public get t(): thread | $.VarRef<thread> | null {
		return this._fields.t
	}

	public set t(value: thread | $.VarRef<thread> | null) {
		this._fields.t = value
	}

	public _fields: {
		pc: number
		t: thread | $.VarRef<thread> | null
	}

	constructor(init?: Partial<{pc?: number, t?: thread | $.VarRef<thread> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			pc: init?.pc ?? (0 as number),
			t: init?.t ?? (null! as thread | $.VarRef<thread> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): entry {
		return new entry(this, true)
	}

	public __goscriptAssign(source: entry): void {
		const target = this._fields
		const values = source._fields
		target.pc = values.pc
		target.t = values.t
	}

	static __typeInfo = $.registerStructType(
		"regexp.entry",
		() => new entry(),
		() => [],
		entry,
		() => [/* @__PURE__ */ $.structField("pc", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("t", /* @__PURE__ */ $.pointerType("regexp.thread"), [1], 8, false, { pkgPath: "regexp" })]
	)
}

export class thread {
	public get inst(): syntax.Inst | $.VarRef<syntax.Inst> | null {
		return this._fields.inst
	}

	public set inst(value: syntax.Inst | $.VarRef<syntax.Inst> | null) {
		this._fields.inst = value
	}

	public get cap(): $.Slice<number> {
		return this._fields.cap
	}

	public set cap(value: $.Slice<number>) {
		this._fields.cap = value
	}

	public _fields: {
		inst: syntax.Inst | $.VarRef<syntax.Inst> | null
		cap: $.Slice<number>
	}

	constructor(init?: Partial<{inst?: syntax.Inst | $.VarRef<syntax.Inst> | null, cap?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			inst: init?.inst ?? (null! as syntax.Inst | $.VarRef<syntax.Inst> | null),
			cap: init?.cap ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): thread {
		return new thread(this, true)
	}

	public __goscriptAssign(source: thread): void {
		const target = this._fields
		const values = source._fields
		target.inst = values.inst
		target.cap = values.cap
	}

	static __typeInfo = $.registerStructType(
		"regexp.thread",
		() => new thread(),
		() => [],
		thread,
		() => [/* @__PURE__ */ $.structField("inst", /* @__PURE__ */ $.pointerType("syntax.Inst"), [0], 0, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("cap", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [1], 8, false, { pkgPath: "regexp" })]
	)
}

export class inputs {
	// cached inputs, to avoid allocation
	public get bytes(): __goscript_regexp.inputBytes {
		return this._fields.bytes
	}

	public set bytes(value: __goscript_regexp.inputBytes) {
		this._fields.bytes = value
	}

	public get _string(): __goscript_regexp.inputString {
		return this._fields._string
	}

	public set _string(value: __goscript_regexp.inputString) {
		this._fields._string = value
	}

	public get reader(): __goscript_regexp.inputReader {
		return this._fields.reader
	}

	public set reader(value: __goscript_regexp.inputReader) {
		this._fields.reader = value
	}

	public _fields: {
		bytes: __goscript_regexp.inputBytes
		_string: __goscript_regexp.inputString
		reader: __goscript_regexp.inputReader
	}

	constructor(init?: Partial<{bytes?: __goscript_regexp.inputBytes, _string?: __goscript_regexp.inputString, reader?: __goscript_regexp.inputReader}>, __goscriptValue?: boolean) {
		this._fields = {
			bytes: init?.bytes ? init.bytes.clone() : new __goscript_regexp.inputBytes(undefined, true),
			_string: init?._string ? init._string.clone() : new __goscript_regexp.inputString(undefined, true),
			reader: init?.reader ? init.reader.clone() : new __goscript_regexp.inputReader(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): inputs {
		return new inputs(this, true)
	}

	public __goscriptAssign(source: inputs): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.bytes, values.bytes)
		$.assignStruct(target._string, values._string)
		$.assignStruct(target.reader, values.reader)
	}

	public clear(): void {
		let i: inputs | $.VarRef<inputs> | null = this;
		const i$: inputs = i == null ? $.pointerTarget<inputs>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<inputs>(i)
		// We need to clear 1 of these.
		// Avoid the expense of clearing the others (pointer write barrier).
		if ((i$ as inputs).bytes.str != null) {
			;(i$ as inputs).bytes.str = null
		} else {
			if ((i$ as inputs).reader.r != null) {
				;(i$ as inputs).reader.r = null
			} else {
				;(i$ as inputs)._string.str = ""
			}
		}
	}

	public init(r: io.RuneReader | null, b: $.Slice<number>, s: string): [__goscript_regexp.input | null, number] {
		const i: inputs | $.VarRef<inputs> | null = this;
		if (r != null) {
			return [(i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as inputs).newReader(r) : inputs.prototype.newReader.call(i, r)), 0]
		}
		if (b != null) {
			return [(i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as inputs).newBytes(b) : inputs.prototype.newBytes.call(i, b)), $.sliceLen(b)]
		}
		return [(i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as inputs).newString(s) : inputs.prototype.newString.call(i, s)), $.stringLen(s)]
	}

	public newBytes(b: $.Slice<number>): __goscript_regexp.input | null {
		let i: inputs | $.VarRef<inputs> | null = this;
		const i$: inputs = i == null ? $.pointerTarget<inputs>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<inputs>(i);
		;(i$ as inputs).bytes.str = b
		return $.interfaceValue<__goscript_regexp.input | null>($.fieldRef((i$ as inputs)._fields, "bytes"), "*regexp.inputBytes", /* @__PURE__ */ $.pointerType("regexp.inputBytes"))
	}

	public newReader(r: io.RuneReader | null): __goscript_regexp.input | null {
		let i: inputs | $.VarRef<inputs> | null = this;
		const i$: inputs = i == null ? $.pointerTarget<inputs>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<inputs>(i);
		;(i$ as inputs).reader.r = r;
		;(i$ as inputs).reader.atEOT = false;
		;(i$ as inputs).reader.pos = 0
		return $.interfaceValue<__goscript_regexp.input | null>($.fieldRef((i$ as inputs)._fields, "reader"), "*regexp.inputReader", /* @__PURE__ */ $.pointerType("regexp.inputReader"))
	}

	public newString(s: string): __goscript_regexp.input | null {
		let i: inputs | $.VarRef<inputs> | null = this;
		const i$: inputs = i == null ? $.pointerTarget<inputs>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<inputs>(i);
		;(i$ as inputs)._string.str = s
		return $.interfaceValue<__goscript_regexp.input | null>($.fieldRef((i$ as inputs)._fields, "_string"), "*regexp.inputString", /* @__PURE__ */ $.pointerType("regexp.inputString"))
	}

	static __typeInfo = $.registerStructType(
		"regexp.inputs",
		() => new inputs(),
		() => [$.methodSignature("clear", [], [], true), $.methodSignature("init", [["r", "io.RuneReader"], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["s", /* @__PURE__ */ $.basicType("string")]], ["regexp.input", /* @__PURE__ */ $.basicType("int")], true), $.methodSignature("newBytes", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["regexp.input"], true), $.methodSignature("newReader", [["r", "io.RuneReader"]], ["regexp.input"], true), $.methodSignature("newString", [["s", /* @__PURE__ */ $.basicType("string")]], ["regexp.input"], true)],
		inputs,
		() => [/* @__PURE__ */ $.structField("bytes", "regexp.inputBytes", [0], 0, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("string", "regexp.inputString", [1], 24, false, { key: "_string", pkgPath: "regexp" }), /* @__PURE__ */ $.structField("reader", "regexp.inputReader", [2], 40, false, { pkgPath: "regexp" })]
	)
}

export class machine {
	public get re(): __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null {
		return this._fields.re
	}

	public set re(value: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null) {
		this._fields.re = value
	}

	public get p(): syntax.Prog | $.VarRef<syntax.Prog> | null {
		return this._fields.p
	}

	public set p(value: syntax.Prog | $.VarRef<syntax.Prog> | null) {
		this._fields.p = value
	}

	public get q0(): queue {
		return this._fields.q0
	}

	public set q0(value: queue) {
		this._fields.q0 = value
	}

	public get q1(): queue {
		return this._fields.q1
	}

	public set q1(value: queue) {
		this._fields.q1 = value
	}

	public get pool(): $.Slice<thread | $.VarRef<thread> | null> {
		return this._fields.pool
	}

	public set pool(value: $.Slice<thread | $.VarRef<thread> | null>) {
		this._fields.pool = value
	}

	public get matched(): boolean {
		return this._fields.matched
	}

	public set matched(value: boolean) {
		this._fields.matched = value
	}

	public get matchcap(): $.Slice<number> {
		return this._fields.matchcap
	}

	public set matchcap(value: $.Slice<number>) {
		this._fields.matchcap = value
	}

	public get inputs(): inputs {
		return this._fields.inputs
	}

	public set inputs(value: inputs) {
		this._fields.inputs = value
	}

	public _fields: {
		re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null
		p: syntax.Prog | $.VarRef<syntax.Prog> | null
		q0: queue
		q1: queue
		pool: $.Slice<thread | $.VarRef<thread> | null>
		matched: boolean
		matchcap: $.Slice<number>
		inputs: inputs
	}

	constructor(init?: Partial<{re?: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null, p?: syntax.Prog | $.VarRef<syntax.Prog> | null, q0?: queue, q1?: queue, pool?: $.Slice<thread | $.VarRef<thread> | null>, matched?: boolean, matchcap?: $.Slice<number>, inputs?: inputs}>, __goscriptValue?: boolean) {
		this._fields = {
			re: init?.re ?? (null! as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null),
			p: init?.p ?? (null! as syntax.Prog | $.VarRef<syntax.Prog> | null),
			q0: init?.q0 ? init.q0.clone() : new queue(undefined, true),
			q1: init?.q1 ? init.q1.clone() : new queue(undefined, true),
			pool: init?.pool ?? (null! as $.Slice<thread | $.VarRef<thread> | null>),
			matched: init?.matched ?? (false as boolean),
			matchcap: init?.matchcap ?? (null! as $.Slice<number>),
			inputs: init?.inputs ? init.inputs.clone() : new inputs(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): machine {
		return new machine(this, true)
	}

	public __goscriptAssign(source: machine): void {
		const target = this._fields
		const values = source._fields
		target.re = values.re
		target.p = values.p
		$.assignStruct(target.q0, values.q0)
		$.assignStruct(target.q1, values.q1)
		target.pool = values.pool
		target.matched = values.matched
		target.matchcap = values.matchcap
		$.assignStruct(target.inputs, values.inputs)
	}

	public add(q: queue | $.VarRef<queue> | null, pc: number, pos: number, cap: $.Slice<number>, cond: $.VarRef<lazyFlag> | null, t: thread | $.VarRef<thread> | null): thread | $.VarRef<thread> | null {
		const m: machine | $.VarRef<machine> | null = this;
		const q$: queue = q == null ? $.pointerTarget<queue>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<queue>(q)
		Again: while (true) {
			if (pc == 0) {
				return t
			}

			{
				var j = $.arrayIndex((q$ as queue).sparse!, pc)
				if ((j < $.uint($.sliceLen((q$ as queue).dense), 32)) && ($.arrayIndex((q$ as queue).dense!, j).pc == pc)) {
					return t
				}
			}

			var j = $.sliceLen((q$ as queue).dense);
			;(q$ as queue).dense = $.goSlice((q$ as queue).dense, undefined, j + 1)
			var d: entry | $.VarRef<entry> | null = $.indexRef((q$ as queue).dense!, j)
			$.pointerValue<entry>(d).t = null
			$.pointerValue<entry>(d).pc = pc
			$.sliceElems((q$ as queue).sparse!)[$.sliceSlot((q$ as queue).sparse!, pc)] = $.uint(j, 32)

			var i: syntax.Inst | $.VarRef<syntax.Inst> | null = $.indexRef($.pointerValue<syntax.Prog>($.pointerValue<machine>(m).p).Inst!, pc)
			switch ($.pointerValue<syntax.Inst>(i).Op) {
				default:
				{
					$.panic("unhandled")
					break
				}
				case syntax.InstFail:
				{
					break
				}
				case syntax.InstAlt:
				case syntax.InstAltMatch:
				{
					t = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as machine).add(q, $.pointerValue<syntax.Inst>(i).Out, pos, cap, cond, t) : machine.prototype.add.call(m, q, $.pointerValue<syntax.Inst>(i).Out, pos, cap, cond, t))
					pc = $.pointerValue<syntax.Inst>(i).Arg
					continue Again
					break
				}
				case syntax.InstEmptyWidth:
				{
					if (lazyFlag_match($.pointerValue<lazyFlag>(cond), $.uint($.pointerValue<syntax.Inst>(i).Arg, 8))) {
						pc = $.pointerValue<syntax.Inst>(i).Out
						continue Again
					}
					break
				}
				case syntax.InstNop:
				{
					pc = $.pointerValue<syntax.Inst>(i).Out
					continue Again
					break
				}
				case syntax.InstCapture:
				{
					if ($.int($.pointerValue<syntax.Inst>(i).Arg) < $.sliceLen(cap)) {
						let opos = $.arrayIndex(cap!, $.pointerValue<syntax.Inst>(i).Arg)
						$.sliceElems(cap!)[$.sliceSlot(cap!, $.pointerValue<syntax.Inst>(i).Arg)] = pos
						void (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as machine).add(q, $.pointerValue<syntax.Inst>(i).Out, pos, cap, cond, null) : machine.prototype.add.call(m, q, $.pointerValue<syntax.Inst>(i).Out, pos, cap, cond, null))
						$.sliceElems(cap!)[$.sliceSlot(cap!, $.pointerValue<syntax.Inst>(i).Arg)] = opos
					} else {
						pc = $.pointerValue<syntax.Inst>(i).Out
						continue Again
					}
					break
				}
				case syntax.InstMatch:
				case syntax.InstRune:
				case syntax.InstRune1:
				case syntax.InstRuneAny:
				case syntax.InstRuneAnyNotNL:
				{
					if (t == null) {
						t = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as machine).alloc(i) : machine.prototype.alloc.call(m, i))
					} else {
						$.pointerValue<thread>(t).inst = i
					}
					if (($.sliceLen(cap) > 0) && ($.indexAddress($.pointerValue<thread>(t).cap!, 0) != $.indexAddress(cap!, 0))) {
						$.copy($.pointerValue<thread>(t).cap, cap)
					}
					$.pointerValue<entry>(d).t = t
					t = null
					break
				}
			}
			return t
			break
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public alloc(i: syntax.Inst | $.VarRef<syntax.Inst> | null): thread | $.VarRef<thread> | null {
		let m: machine | $.VarRef<machine> | null = this;
		const m$: machine = m == null ? $.pointerTarget<machine>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<machine>(m)
		let t: thread | $.VarRef<thread> | null = null! as thread | $.VarRef<thread> | null
		{
			let n = $.sliceLen((m$ as machine).pool)
			if (n > 0) {
				t = $.arrayIndex((m$ as machine).pool!, n - 1);
				;(m$ as machine).pool = $.goSlice((m$ as machine).pool, undefined, n - 1)
			} else {
				t = new thread()
				$.pointerValue<thread>(t).cap = $.makeSlice<number>($.sliceLen((m$ as machine).matchcap), $.cap((m$ as machine).matchcap), "number")
			}
		}
		$.pointerValue<thread>(t).inst = i
		return t
	}

	public clear(q: queue | $.VarRef<queue> | null): void {
		let m: machine | $.VarRef<machine> | null = this;
		const m$: machine = m == null ? $.pointerTarget<machine>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<machine>(m)
		const q$: queue = q == null ? $.pointerTarget<queue>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<queue>(q)
		for (let __goscriptRangeTarget0 = (q$ as queue).dense, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let d = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as entry)).clone()
			if (d.t != null) {
				;(m$ as machine).pool = $.appendOne((m$ as machine).pool, d.t, $.appendZeros.nil)
			}
		}
		;(q$ as queue).dense = $.goSlice((q$ as queue).dense, undefined, 0)
	}

	public init(ncap: number): void {
		let m: machine | $.VarRef<machine> | null = this;
		const m$: machine = m == null ? $.pointerTarget<machine>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<machine>(m)
		for (let __goscriptRangeTarget1 = (m$ as machine).pool, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let t = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as thread | $.VarRef<thread> | null)
			$.pointerValue<thread>(t).cap = $.goSlice($.pointerValue<thread>(t).cap, undefined, ncap)
		}
		;(m$ as machine).matchcap = $.goSlice((m$ as machine).matchcap, undefined, ncap)
	}

	public async match(i: __goscript_regexp.input | null, pos: number): globalThis.Promise<boolean> {
		let m: machine | $.VarRef<machine> | null = this;
		const m$: machine = m == null ? $.pointerTarget<machine>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<machine>(m)
		let startCond = $.pointerValue<__goscript_regexp.Regexp>((m$ as machine).re).cond
		if (startCond == 255) {
			return false
		}
		;(m$ as machine).matched = false
		for (let __goscriptRangeTarget2 = (m$ as machine).matchcap, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
			$.sliceElems((m$ as machine).matchcap!)[$.sliceSlot((m$ as machine).matchcap!, i)] = -1
		}
		let runq: queue | $.VarRef<queue> | null = $.fieldRef((m$ as machine)._fields, "q0")
		let nextq: queue | $.VarRef<queue> | null = $.fieldRef((m$ as machine)._fields, "q1")
		let r = -1
		let r1 = -1
		let width = 0
		let width1 = 0
		let __goscriptTuple0: any = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_regexp.input, null>) : $.pointerValue<Exclude<__goscript_regexp.input, null>>(i)).step(pos)
		r = __goscriptTuple0[0]
		width = __goscriptTuple0[1]
		if (r != -1) {
			let __goscriptTuple1: any = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_regexp.input, null>) : $.pointerValue<Exclude<__goscript_regexp.input, null>>(i)).step(pos + width)
			r1 = __goscriptTuple1[0]
			width1 = __goscriptTuple1[1]
		}
		let flag: $.VarRef<lazyFlag> = $.varRef(0n)
		if (pos == 0) {
			flag.value = newLazyFlag(-1, r)
		} else {
			flag.value = (__goscriptAwait = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_regexp.input, null>) : $.pointerValue<Exclude<__goscript_regexp.input, null>>(i)).context(pos), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		while (true) {
			if ($.sliceLen($.pointerValue<queue>(runq).dense) == 0) {
				if (($.uint((startCond & syntax.EmptyBeginText), 8) != 0) && (pos != 0)) {
					// Anchored match, past beginning of text.
					break
				}
				if ((m$ as machine).matched) {
					// Have match; finished exploring alternatives.
					break
				}
				if ((($.stringLen($.pointerValue<__goscript_regexp.Regexp>((m$ as machine).re).prefix) > 0) && (r1 != $.pointerValue<__goscript_regexp.Regexp>((m$ as machine).re).prefixRune)) && (__goscriptAwait = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_regexp.input, null>) : $.pointerValue<Exclude<__goscript_regexp.input, null>>(i)).canCheckPrefix(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					// Match requires literal prefix; fast search for it.
					let advance = (__goscriptAwait = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_regexp.input, null>) : $.pointerValue<Exclude<__goscript_regexp.input, null>>(i)).index((m$ as machine).re, pos), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (advance < 0) {
						break
					}
					pos = pos + (advance)
					let __goscriptTuple2: any = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_regexp.input, null>) : $.pointerValue<Exclude<__goscript_regexp.input, null>>(i)).step(pos)
					r = __goscriptTuple2[0]
					width = __goscriptTuple2[1]
					let __goscriptTuple3: any = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_regexp.input, null>) : $.pointerValue<Exclude<__goscript_regexp.input, null>>(i)).step(pos + width)
					r1 = __goscriptTuple3[0]
					width1 = __goscriptTuple3[1]
				}
			}
			if (!(m$ as machine).matched) {
				if ($.sliceLen((m$ as machine).matchcap) > 0) {
					$.sliceElems((m$ as machine).matchcap!)[$.sliceSlot((m$ as machine).matchcap!, 0)] = pos
				}
				void (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as machine).add(runq, $.uint($.pointerValue<syntax.Prog>((m$ as machine).p).Start, 32), pos, (m$ as machine).matchcap, flag, null) : machine.prototype.add.call(m, runq, $.uint($.pointerValue<syntax.Prog>((m$ as machine).p).Start, 32), pos, (m$ as machine).matchcap, flag, null))
			}
			flag.value = newLazyFlag(r, r1)
			void (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as machine).step(runq, nextq, pos, pos + width, r, flag) : machine.prototype.step.call(m, runq, nextq, pos, pos + width, r, flag))
			if (width == 0) {
				break
			}
			if (($.sliceLen((m$ as machine).matchcap) == 0) && (m$ as machine).matched) {
				// Found a match and not paying attention
				// to where it is, so any match will do.
				break
			}
			pos = pos + (width)
			let __goscriptAssign0_0: number = r1
			let __goscriptAssign0_1: number = width1
			r = __goscriptAssign0_0
			width = __goscriptAssign0_1
			if (r != -1) {
				let __goscriptTuple4: any = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_regexp.input, null>) : $.pointerValue<Exclude<__goscript_regexp.input, null>>(i)).step(pos + width)
				r1 = __goscriptTuple4[0]
				width1 = __goscriptTuple4[1]
			}
			let __goscriptAssign1_0: queue | $.VarRef<queue> | null = nextq
			let __goscriptAssign1_1: queue | $.VarRef<queue> | null = runq
			runq = __goscriptAssign1_0
			nextq = __goscriptAssign1_1
		}
		void (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as machine).clear(nextq) : machine.prototype.clear.call(m, nextq))
		return (m$ as machine).matched
	}

	public step(runq: queue | $.VarRef<queue> | null, nextq: queue | $.VarRef<queue> | null, pos: number, nextPos: number, c: number, nextCond: $.VarRef<lazyFlag> | null): void {
		let m: machine | $.VarRef<machine> | null = this;
		const m$: machine = m == null ? $.pointerTarget<machine>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<machine>(m)
		let longest = $.pointerValue<__goscript_regexp.Regexp>((m$ as machine).re).longest
		for (let j = 0; j < $.sliceLen($.pointerValue<queue>(runq).dense); j++) {
			let d: entry | $.VarRef<entry> | null = $.indexRef($.pointerValue<queue>(runq).dense!, j)
			let t: thread | $.VarRef<thread> | null = $.pointerValue<entry>(d).t
			if (t == null) {
				continue
			}
			if (((longest && (m$ as machine).matched) && ($.sliceLen($.pointerValue<thread>(t).cap) > 0)) && ($.arrayIndex((m$ as machine).matchcap!, 0) < $.arrayIndex($.pointerValue<thread>(t).cap!, 0))) {
				;(m$ as machine).pool = $.appendOne((m$ as machine).pool, t, $.appendZeros.nil)
				continue
			}
			let i: syntax.Inst | $.VarRef<syntax.Inst> | null = $.pointerValue<thread>(t).inst
			let i$: syntax.Inst = i == null ? $.pointerTarget<syntax.Inst>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<syntax.Inst>(i)
			let add = false
			switch ((i$ as syntax.Inst).Op) {
				default:
				{
					$.panic("bad inst")
					break
				}
				case syntax.InstMatch:
				{
					if (($.sliceLen($.pointerValue<thread>(t).cap) > 0) && ((!longest || !(m$ as machine).matched) || ($.arrayIndex((m$ as machine).matchcap!, 1) < pos))) {
						$.sliceElems($.pointerValue<thread>(t).cap!)[$.sliceSlot($.pointerValue<thread>(t).cap!, 1)] = pos
						$.copy((m$ as machine).matchcap, $.pointerValue<thread>(t).cap)
					}
					if (!longest) {
						// First-match mode: cut off all lower-priority threads.
						for (let __goscriptRangeTarget3 = $.goSlice($.pointerValue<queue>(runq).dense, j + 1, undefined), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
							let d = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as entry)).clone()
							if (d.t != null) {
								;(m$ as machine).pool = $.appendOne((m$ as machine).pool, d.t, $.appendZeros.nil)
							}
						}
						$.pointerValue<queue>(runq).dense = $.goSlice($.pointerValue<queue>(runq).dense, undefined, 0)
					}
					;(m$ as machine).matched = true
					break
				}
				case syntax.InstRune:
				{
					add = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as syntax.Inst).MatchRune(c) : syntax.Inst.prototype.MatchRune.call(i, c))
					break
				}
				case syntax.InstRune1:
				{
					add = c == $.arrayIndex((i$ as syntax.Inst).Rune!, 0)
					break
				}
				case syntax.InstRuneAny:
				{
					add = true
					break
				}
				case syntax.InstRuneAnyNotNL:
				{
					add = c != 10
					break
				}
			}
			if (add) {
				t = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as machine).add(nextq, (i$ as syntax.Inst).Out, nextPos, $.pointerValue<thread>(t).cap, nextCond, t) : machine.prototype.add.call(m, nextq, (i$ as syntax.Inst).Out, nextPos, $.pointerValue<thread>(t).cap, nextCond, t))
			}
			if (t != null) {
				;(m$ as machine).pool = $.appendOne((m$ as machine).pool, t, $.appendZeros.nil)
			}
		}
		$.pointerValue<queue>(runq).dense = $.goSlice($.pointerValue<queue>(runq).dense, undefined, 0)
	}

	static __typeInfo = $.registerStructType(
		"regexp.machine",
		() => new machine(),
		() => [$.methodSignature("add", [["q", /* @__PURE__ */ $.pointerType("regexp.queue")], ["pc", /* @__PURE__ */ $.basicType("uint32")], ["pos", /* @__PURE__ */ $.basicType("int")], ["cap", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], ["cond", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64", "regexp.lazyFlag"))], ["t", /* @__PURE__ */ $.pointerType("regexp.thread")]], [/* @__PURE__ */ $.pointerType("regexp.thread")], true), $.methodSignature("alloc", [["i", /* @__PURE__ */ $.pointerType("syntax.Inst")]], [/* @__PURE__ */ $.pointerType("regexp.thread")], true), $.methodSignature("clear", [["q", /* @__PURE__ */ $.pointerType("regexp.queue")]], [], true), $.methodSignature("init", [["ncap", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("match", [["i", "regexp.input"], ["pos", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("step", [["runq", /* @__PURE__ */ $.pointerType("regexp.queue")], ["nextq", /* @__PURE__ */ $.pointerType("regexp.queue")], ["pos", /* @__PURE__ */ $.basicType("int")], ["nextPos", /* @__PURE__ */ $.basicType("int")], ["c", /* @__PURE__ */ $.basicType("int32")], ["nextCond", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64", "regexp.lazyFlag"))]], [], true)],
		machine,
		() => [/* @__PURE__ */ $.structField("re", /* @__PURE__ */ $.pointerType("regexp.Regexp"), [0], 0, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.pointerType("syntax.Prog"), [1], 8, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("q0", "regexp.queue", [2], 16, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("q1", "regexp.queue", [3], 64, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("pool", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("regexp.thread")), [4], 112, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("matched", /* @__PURE__ */ $.basicType("bool"), [5], 136, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("matchcap", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [6], 144, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("inputs", "regexp.inputs", [7], 168, false, { pkgPath: "regexp" })]
	)
}

export class onePassMachine {
	public get inputs(): inputs {
		return this._fields.inputs
	}

	public set inputs(value: inputs) {
		this._fields.inputs = value
	}

	public get matchcap(): $.Slice<number> {
		return this._fields.matchcap
	}

	public set matchcap(value: $.Slice<number>) {
		this._fields.matchcap = value
	}

	public _fields: {
		inputs: inputs
		matchcap: $.Slice<number>
	}

	constructor(init?: Partial<{inputs?: inputs, matchcap?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			inputs: init?.inputs ? init.inputs.clone() : new inputs(undefined, true),
			matchcap: init?.matchcap ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): onePassMachine {
		return new onePassMachine(this, true)
	}

	public __goscriptAssign(source: onePassMachine): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.inputs, values.inputs)
		target.matchcap = values.matchcap
	}

	static __typeInfo = $.registerStructType(
		"regexp.onePassMachine",
		() => new onePassMachine(),
		() => [],
		onePassMachine,
		() => [/* @__PURE__ */ $.structField("inputs", "regexp.inputs", [0], 0, false, { pkgPath: "regexp" }), /* @__PURE__ */ $.structField("matchcap", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [1], 72, false, { pkgPath: "regexp" })]
	)
}

export function newLazyFlag(r1: number, r2: number): lazyFlag {
	return $.uint64($.uint64Add(($.uint64Mul(r1, (2 ** 32))), $.uint64($.uint(r2, 32))))
}

export function lazyFlag_match(f: lazyFlag, op: syntax.EmptyOp): boolean {
	if (op == 0) {
		return true
	}
	let r1 = $.int($.uint64Shr(f, 32n), 32)
	if ($.uint((op & syntax.EmptyBeginLine), 8) != 0) {
		if ((r1 != 10) && (r1 >= 0)) {
			return false
		}
		op = op & ~((1))
	}
	if ($.uint((op & syntax.EmptyBeginText), 8) != 0) {
		if (r1 >= 0) {
			return false
		}
		op = op & ~((4))
	}
	if (op == 0) {
		return true
	}
	let r2 = $.int(f, 32)
	if ($.uint((op & syntax.EmptyEndLine), 8) != 0) {
		if ((r2 != 10) && (r2 >= 0)) {
			return false
		}
		op = op & ~((2))
	}
	if ($.uint((op & syntax.EmptyEndText), 8) != 0) {
		if (r2 >= 0) {
			return false
		}
		op = op & ~((8))
	}
	if (op == 0) {
		return true
	}
	if (syntax.IsWordChar(r1) != syntax.IsWordChar(r2)) {
		op = op & ~((16))
	} else {
		op = op & ~((32))
	}
	return op == 0
}

export let onePassPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool()))

export function __goscript_set_onePassPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(onePassPool.value, __goscriptValue)
}

export async function newOnePassMachine(): globalThis.Promise<onePassMachine | $.VarRef<onePassMachine> | null> {
	let __goscriptTuple5: any = $.typeAssertTuple<onePassMachine | $.VarRef<onePassMachine> | null>(await onePassPool.value.Get(), /* @__PURE__ */ $.pointerType("regexp.onePassMachine"))
	let m: onePassMachine | $.VarRef<onePassMachine> | null = __goscriptTuple5[0]
	let ok = __goscriptTuple5[1]
	if (!ok) {
		m = new onePassMachine()
	}
	return m
}

export function freeOnePassMachine(m: onePassMachine | $.VarRef<onePassMachine> | null): void {
	$.pointerValue<onePassMachine>(m).inputs.clear()
	onePassPool.value.Put($.interfaceValue(m, "*regexp.onePassMachine", /* @__PURE__ */ $.pointerType("regexp.onePassMachine")))
}

export let arrayNoInts: number[] = $.arrayValue(globalThis.Array.from({ length: 0 }, () => 0))

export function __goscript_set_arrayNoInts(__goscriptValue: number[]): void {
	arrayNoInts = __goscriptValue
}

var __goscriptAwait: any
