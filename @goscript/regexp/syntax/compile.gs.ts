// Generated file based on compile.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as __goscript_op_string from "./op_string.gs.ts"

import * as __goscript_parse from "./parse.gs.ts"

import * as __goscript_prog from "./prog.gs.ts"

import * as __goscript_regexp from "./regexp.gs.ts"

import * as __goscript_simplify from "./simplify.gs.ts"
import "@goscript/unicode/index.js"
import "./op_string.gs.ts"
import "./parse.gs.ts"
import "./prog.gs.ts"
import "./regexp.gs.ts"
import "./simplify.gs.ts"

$.registerTypePackagePath("regexp/syntax", ["syntax.patchList", "syntax.frag", "syntax.compiler"])

export class patchList {
	public get head(): number {
		return this._fields.head
	}

	public set head(value: number) {
		this._fields.head = value
	}

	public get tail(): number {
		return this._fields.tail
	}

	public set tail(value: number) {
		this._fields.tail = value
	}

	public _fields: {
		head: number
		tail: number
	}

	constructor(init?: Partial<{head?: number, tail?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			head: init?.head ?? (0 as number),
			tail: init?.tail ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): patchList {
		return new patchList(this, true)
	}

	public __goscriptAssign(source: patchList): void {
		const target = this._fields
		const values = source._fields
		target.head = values.head
		target.tail = values.tail
	}

	public append(p: __goscript_prog.Prog | $.VarRef<__goscript_prog.Prog> | null, l2: patchList): patchList {
		const l1 = this;
		if (l1.head == 0) {
			return (l2).clone()
		}
		if (l2.head == 0) {
			return (l1).clone()
		}

		let i: __goscript_prog.Inst | $.VarRef<__goscript_prog.Inst> | null = $.indexRef($.pointerValue<__goscript_prog.Prog>(p).Inst!, $.uintShr(l1.tail, 1, 32))
		let i$: __goscript_prog.Inst = i == null ? $.pointerTarget<__goscript_prog.Inst>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<__goscript_prog.Inst>(i)
		if ($.uint((l1.tail & 1), 32) == 0) {
			;(i$ as __goscript_prog.Inst).Out = l2.head
		} else {
			;(i$ as __goscript_prog.Inst).Arg = l2.head
		}
		return new patchList({head: l1.head, tail: l2.tail}, true)
	}

	public patch(p: __goscript_prog.Prog | $.VarRef<__goscript_prog.Prog> | null, val: number): void {
		const l = this;
		let head = l.head
		while (head != 0) {
			let i: __goscript_prog.Inst | $.VarRef<__goscript_prog.Inst> | null = $.indexRef($.pointerValue<__goscript_prog.Prog>(p).Inst!, $.uintShr(head, 1, 32))
			let i$: __goscript_prog.Inst = i == null ? $.pointerTarget<__goscript_prog.Inst>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<__goscript_prog.Inst>(i)
			if ($.uint((head & 1), 32) == 0) {
				head = (i$ as __goscript_prog.Inst).Out;
				;(i$ as __goscript_prog.Inst).Out = val
			} else {
				head = (i$ as __goscript_prog.Inst).Arg;
				;(i$ as __goscript_prog.Inst).Arg = val
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"syntax.patchList",
		() => new patchList(),
		() => [$.methodSignature("append", [["p", /* @__PURE__ */ $.pointerType("syntax.Prog")], ["l2", "syntax.patchList"]], ["syntax.patchList"]), $.methodSignature("patch", [["p", /* @__PURE__ */ $.pointerType("syntax.Prog")], ["val", /* @__PURE__ */ $.basicType("uint32")]])],
		patchList,
		() => [/* @__PURE__ */ $.structField("head", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "regexp/syntax" }), /* @__PURE__ */ $.structField("tail", /* @__PURE__ */ $.basicType("uint32"), [1], 4, false, { pkgPath: "regexp/syntax" })]
	)
}

export class frag {
	public get i(): number {
		return this._fields.i
	}

	public set i(value: number) {
		this._fields.i = value
	}

	public get out(): patchList {
		return this._fields.out
	}

	public set out(value: patchList) {
		this._fields.out = value
	}

	public get nullable(): boolean {
		return this._fields.nullable
	}

	public set nullable(value: boolean) {
		this._fields.nullable = value
	}

	public _fields: {
		i: number
		out: patchList
		nullable: boolean
	}

	constructor(init?: Partial<{i?: number, out?: patchList, nullable?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			i: init?.i ?? (0 as number),
			out: init?.out ? init.out.clone() : new patchList(undefined, true),
			nullable: init?.nullable ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): frag {
		return new frag(this, true)
	}

	public __goscriptAssign(source: frag): void {
		const target = this._fields
		const values = source._fields
		target.i = values.i
		$.assignStruct(target.out, values.out)
		target.nullable = values.nullable
	}

	static __typeInfo = $.registerStructType(
		"syntax.frag",
		() => new frag(),
		() => [],
		frag,
		() => [/* @__PURE__ */ $.structField("i", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "regexp/syntax" }), /* @__PURE__ */ $.structField("out", "syntax.patchList", [1], 4, false, { pkgPath: "regexp/syntax" }), /* @__PURE__ */ $.structField("nullable", /* @__PURE__ */ $.basicType("bool"), [2], 12, false, { pkgPath: "regexp/syntax" })]
	)
}

export class compiler {
	public get p(): __goscript_prog.Prog | $.VarRef<__goscript_prog.Prog> | null {
		return this._fields.p
	}

	public set p(value: __goscript_prog.Prog | $.VarRef<__goscript_prog.Prog> | null) {
		this._fields.p = value
	}

	public _fields: {
		p: __goscript_prog.Prog | $.VarRef<__goscript_prog.Prog> | null
	}

	constructor(init?: Partial<{p?: __goscript_prog.Prog | $.VarRef<__goscript_prog.Prog> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			p: init?.p ?? (null! as __goscript_prog.Prog | $.VarRef<__goscript_prog.Prog> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): compiler {
		return new compiler(this, true)
	}

	public __goscriptAssign(source: compiler): void {
		const target = this._fields
		const values = source._fields
		target.p = values.p
	}

	public alt(f1: frag, f2: frag): frag {
		const c: compiler | $.VarRef<compiler> | null = this;
		const c$: compiler = c == null ? $.pointerTarget<compiler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<compiler>(c)
		// alt of failure is other
		if (f1.i == 0) {
			return (f2).clone()
		}
		if (f2.i == 0) {
			return (f1).clone()
		}

		let f = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).inst(0) : compiler.prototype.inst.call(c, 0))
		let i: __goscript_prog.Inst | $.VarRef<__goscript_prog.Inst> | null = $.indexRef($.pointerValue<__goscript_prog.Prog>((c$ as compiler).p).Inst!, f.i)
		let i$: __goscript_prog.Inst = i == null ? $.pointerTarget<__goscript_prog.Inst>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<__goscript_prog.Inst>(i);
		;(i$ as __goscript_prog.Inst).Out = f1.i;
		;(i$ as __goscript_prog.Inst).Arg = f2.i
		$.assignStruct(f.out, f1.out.append((c$ as compiler).p, f2.out))
		f.nullable = f1.nullable || f2.nullable
		return (f).clone()
	}

	public cap(arg: number): frag {
		let c: compiler | $.VarRef<compiler> | null = this;
		const c$: compiler = c == null ? $.pointerTarget<compiler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<compiler>(c)
		let f = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).inst(2) : compiler.prototype.inst.call(c, 2))
		$.assignStruct(f.out, makePatchList($.uint(((f.i << 1) >>> 0), 32)))
		$.arrayIndex($.pointerValue<__goscript_prog.Prog>((c$ as compiler).p).Inst!, f.i).Arg = arg

		if ($.pointerValue<__goscript_prog.Prog>((c$ as compiler).p).NumCap < ($.int(arg) + 1)) {
			$.pointerValue<__goscript_prog.Prog>((c$ as compiler).p).NumCap = $.int(arg) + 1
		}
		return (f).clone()
	}

	public cat(f1: frag, f2: frag): frag {
		const c: compiler | $.VarRef<compiler> | null = this;
		// concat of failure is failure
		if ((f1.i == 0) || (f2.i == 0)) {
			return new frag(undefined, true)
		}

		// TODO: elide nop

		f1.out.patch($.pointerValue<compiler>(c).p, f2.i)
		return new frag({i: f1.i, out: f2.out, nullable: f1.nullable && f2.nullable}, true)
	}

	public compile(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null): frag {
		const c: compiler | $.VarRef<compiler> | null = this;
		const re$: __goscript_regexp.Regexp = re == null ? $.pointerTarget<__goscript_regexp.Regexp>(re) : (re as any).__isVarRef === true ? (re as any).value : (re as any).__goValue === undefined ? (re as any) : $.pointerTarget<__goscript_regexp.Regexp>(re)
		switch ((re$ as __goscript_regexp.Regexp).Op) {
			case 1:
			{
				return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).fail() : compiler.prototype.fail.call(c))
				break
			}
			case 2:
			{
				return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).nop() : compiler.prototype.nop.call(c))
				break
			}
			case 3:
			{
				if ($.sliceLen((re$ as __goscript_regexp.Regexp).Rune) == 0) {
					return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).nop() : compiler.prototype.nop.call(c))
				}
				let f: frag = new frag(undefined, true)
				for (let __goscriptRangeTarget0 = (re$ as __goscript_regexp.Regexp).Rune, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), j = 0; j < __goscriptRangeWindow0.length; j++) {
					let f1 = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).rune($.goSlice((re$ as __goscript_regexp.Regexp).Rune, j, j + 1), (re$ as __goscript_regexp.Regexp).Flags) : compiler.prototype.rune.call(c, $.goSlice((re$ as __goscript_regexp.Regexp).Rune, j, j + 1), (re$ as __goscript_regexp.Regexp).Flags))
					if (j == 0) {
						f = $.assignStruct(f, f1)
					} else {
						f = $.assignStruct(f, (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).cat(f, f1) : compiler.prototype.cat.call(c, f, f1)))
					}
				}
				return (f).clone()
				break
			}
			case 4:
			{
				return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).rune((re$ as __goscript_regexp.Regexp).Rune, (re$ as __goscript_regexp.Regexp).Flags) : compiler.prototype.rune.call(c, (re$ as __goscript_regexp.Regexp).Rune, (re$ as __goscript_regexp.Regexp).Flags))
				break
			}
			case 5:
			{
				return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).rune(anyRuneNotNL, 0) : compiler.prototype.rune.call(c, anyRuneNotNL, 0))
				break
			}
			case 6:
			{
				return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).rune(anyRune, 0) : compiler.prototype.rune.call(c, anyRune, 0))
				break
			}
			case 7:
			{
				return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).empty(1) : compiler.prototype.empty.call(c, 1))
				break
			}
			case 8:
			{
				return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).empty(2) : compiler.prototype.empty.call(c, 2))
				break
			}
			case 9:
			{
				return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).empty(4) : compiler.prototype.empty.call(c, 4))
				break
			}
			case 10:
			{
				return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).empty(8) : compiler.prototype.empty.call(c, 8))
				break
			}
			case 11:
			{
				return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).empty(16) : compiler.prototype.empty.call(c, 16))
				break
			}
			case 12:
			{
				return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).empty(32) : compiler.prototype.empty.call(c, 32))
				break
			}
			case 13:
			{
				let bra = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).cap($.uint((re$ as __goscript_regexp.Regexp).Cap << 1, 32)) : compiler.prototype.cap.call(c, $.uint((re$ as __goscript_regexp.Regexp).Cap << 1, 32)))
				let sub = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).compile($.arrayIndex((re$ as __goscript_regexp.Regexp).Sub!, 0)) : compiler.prototype.compile.call(c, $.arrayIndex((re$ as __goscript_regexp.Regexp).Sub!, 0)))
				let ket = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).cap($.uint(((re$ as __goscript_regexp.Regexp).Cap << 1) | 1, 32)) : compiler.prototype.cap.call(c, $.uint(((re$ as __goscript_regexp.Regexp).Cap << 1) | 1, 32)))
				return compiler.prototype.cat.call(c, (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).cat(bra, sub) : compiler.prototype.cat.call(c, bra, sub)), ket)
				break
			}
			case 14:
			{
				return compiler.prototype.star.call(c, (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).compile($.arrayIndex((re$ as __goscript_regexp.Regexp).Sub!, 0)) : compiler.prototype.compile.call(c, $.arrayIndex((re$ as __goscript_regexp.Regexp).Sub!, 0))), $.uint(((re$ as __goscript_regexp.Regexp).Flags & 32), 16) != 0)
				break
			}
			case 15:
			{
				return compiler.prototype.plus.call(c, (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).compile($.arrayIndex((re$ as __goscript_regexp.Regexp).Sub!, 0)) : compiler.prototype.compile.call(c, $.arrayIndex((re$ as __goscript_regexp.Regexp).Sub!, 0))), $.uint(((re$ as __goscript_regexp.Regexp).Flags & 32), 16) != 0)
				break
			}
			case 16:
			{
				return compiler.prototype.quest.call(c, (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).compile($.arrayIndex((re$ as __goscript_regexp.Regexp).Sub!, 0)) : compiler.prototype.compile.call(c, $.arrayIndex((re$ as __goscript_regexp.Regexp).Sub!, 0))), $.uint(((re$ as __goscript_regexp.Regexp).Flags & 32), 16) != 0)
				break
			}
			case 18:
			{
				if ($.sliceLen((re$ as __goscript_regexp.Regexp).Sub) == 0) {
					return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).nop() : compiler.prototype.nop.call(c))
				}
				let f: frag = new frag(undefined, true)
				for (let __goscriptRangeTarget1 = (re$ as __goscript_regexp.Regexp).Sub, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
					let sub = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)
					if (i == 0) {
						f = $.assignStruct(f, (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).compile(sub) : compiler.prototype.compile.call(c, sub)))
					} else {
						f = $.assignStruct(f, compiler.prototype.cat.call(c, f, (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).compile(sub) : compiler.prototype.compile.call(c, sub))))
					}
				}
				return (f).clone()
				break
			}
			case 19:
			{
				let f: frag = new frag(undefined, true)
				for (let __goscriptRangeTarget2 = (re$ as __goscript_regexp.Regexp).Sub, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
					let sub = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null)
					f = $.assignStruct(f, compiler.prototype.alt.call(c, f, (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).compile(sub) : compiler.prototype.compile.call(c, sub))))
				}
				return (f).clone()
				break
			}
		}
		$.panic("regexp: unhandled case in compile")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public empty(op: __goscript_prog.EmptyOp): frag {
		let c: compiler | $.VarRef<compiler> | null = this;
		let f = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).inst(3) : compiler.prototype.inst.call(c, 3))
		$.arrayIndex($.pointerValue<__goscript_prog.Prog>($.pointerValue<compiler>(c).p).Inst!, f.i).Arg = $.uint(op, 32)
		$.assignStruct(f.out, makePatchList($.uint(((f.i << 1) >>> 0), 32)))
		return (f).clone()
	}

	public fail(): frag {
		const c: compiler | $.VarRef<compiler> | null = this;
		return new frag(undefined, true)
	}

	public init(): void {
		let c: compiler | $.VarRef<compiler> | null = this;
		const c$: compiler = c == null ? $.pointerTarget<compiler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<compiler>(c);
		;(c$ as compiler).p = new __goscript_prog.Prog()
		$.pointerValue<__goscript_prog.Prog>((c$ as compiler).p).NumCap = 2
		void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).inst(5) : compiler.prototype.inst.call(c, 5))
	}

	public inst(op: __goscript_prog.InstOp): frag {
		let c: compiler | $.VarRef<compiler> | null = this;
		const c$: compiler = c == null ? $.pointerTarget<compiler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<compiler>(c)
		// TODO: impose length limit
		let f = new frag({i: $.uint($.sliceLen($.pointerValue<__goscript_prog.Prog>((c$ as compiler).p).Inst), 32), nullable: true}, true)
		$.pointerValue<__goscript_prog.Prog>((c$ as compiler).p).Inst = $.appendOne($.pointerValue<__goscript_prog.Prog>((c$ as compiler).p).Inst, new __goscript_prog.Inst({Op: op}, true))
		return (f).clone()
	}

	public loop(f1: frag, nongreedy: boolean): frag {
		const c: compiler | $.VarRef<compiler> | null = this;
		const c$: compiler = c == null ? $.pointerTarget<compiler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<compiler>(c)
		let f = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).inst(0) : compiler.prototype.inst.call(c, 0))
		let i: __goscript_prog.Inst | $.VarRef<__goscript_prog.Inst> | null = $.indexRef($.pointerValue<__goscript_prog.Prog>((c$ as compiler).p).Inst!, f.i)
		let i$: __goscript_prog.Inst = i == null ? $.pointerTarget<__goscript_prog.Inst>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<__goscript_prog.Inst>(i)
		if (nongreedy) {
			;(i$ as __goscript_prog.Inst).Arg = f1.i
			$.assignStruct(f.out, makePatchList($.uint(((f.i << 1) >>> 0), 32)))
		} else {
			;(i$ as __goscript_prog.Inst).Out = f1.i
			$.assignStruct(f.out, makePatchList($.uint((((f.i << 1) >>> 0)) | 1, 32)))
		}
		f1.out.patch((c$ as compiler).p, f.i)
		return (f).clone()
	}

	public nop(): frag {
		const c: compiler | $.VarRef<compiler> | null = this;
		let f = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).inst(6) : compiler.prototype.inst.call(c, 6))
		$.assignStruct(f.out, makePatchList($.uint(((f.i << 1) >>> 0), 32)))
		return (f).clone()
	}

	public plus(f1: frag, nongreedy: boolean): frag {
		const c: compiler | $.VarRef<compiler> | null = this;
		return new frag({i: f1.i, out: (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).loop(f1, nongreedy) : compiler.prototype.loop.call(c, f1, nongreedy)).out, nullable: f1.nullable}, true)
	}

	public quest(f1: frag, nongreedy: boolean): frag {
		const c: compiler | $.VarRef<compiler> | null = this;
		const c$: compiler = c == null ? $.pointerTarget<compiler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<compiler>(c)
		let f = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).inst(0) : compiler.prototype.inst.call(c, 0))
		let i: __goscript_prog.Inst | $.VarRef<__goscript_prog.Inst> | null = $.indexRef($.pointerValue<__goscript_prog.Prog>((c$ as compiler).p).Inst!, f.i)
		let i$: __goscript_prog.Inst = i == null ? $.pointerTarget<__goscript_prog.Inst>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<__goscript_prog.Inst>(i)
		if (nongreedy) {
			;(i$ as __goscript_prog.Inst).Arg = f1.i
			$.assignStruct(f.out, makePatchList($.uint(((f.i << 1) >>> 0), 32)))
		} else {
			;(i$ as __goscript_prog.Inst).Out = f1.i
			$.assignStruct(f.out, makePatchList($.uint((((f.i << 1) >>> 0)) | 1, 32)))
		}
		$.assignStruct(f.out, f.out.append((c$ as compiler).p, f1.out))
		return (f).clone()
	}

	public rune(r: $.Slice<number>, flags: __goscript_parse.Flags): frag {
		const c: compiler | $.VarRef<compiler> | null = this;
		let f = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).inst(7) : compiler.prototype.inst.call(c, 7))
		f.nullable = false
		let i: __goscript_prog.Inst | $.VarRef<__goscript_prog.Inst> | null = $.indexRef($.pointerValue<__goscript_prog.Prog>($.pointerValue<compiler>(c).p).Inst!, f.i)
		let i$: __goscript_prog.Inst = i == null ? $.pointerTarget<__goscript_prog.Inst>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<__goscript_prog.Inst>(i);
		;(i$ as __goscript_prog.Inst).Rune = r
		flags = flags & (1)
		if (($.sliceLen(r) != 1) || (unicode.SimpleFold($.arrayIndex(r!, 0)) == $.arrayIndex(r!, 0))) {
			// and sometimes not even that
			flags = flags & ~((1))
		}
		;(i$ as __goscript_prog.Inst).Arg = $.uint(flags, 32)
		$.assignStruct(f.out, makePatchList($.uint(((f.i << 1) >>> 0), 32)))

		// Special cases for exec machine.
		switch ((true as boolean)) {
			case ($.uint((flags & 1), 16) == 0) && (($.sliceLen(r) == 1) || (($.sliceLen(r) == 2) && ($.arrayIndex(r!, 0) == $.arrayIndex(r!, 1)))):
			{
				;(i$ as __goscript_prog.Inst).Op = 8
				break
			}
			case (($.sliceLen(r) == 2) && ($.arrayIndex(r!, 0) == 0)) && ($.arrayIndex(r!, 1) == 1114111):
			{
				;(i$ as __goscript_prog.Inst).Op = 9
				break
			}
			case (((($.sliceLen(r) == 4) && ($.arrayIndex(r!, 0) == 0)) && ($.arrayIndex(r!, 1) == 9)) && ($.arrayIndex(r!, 2) == 11)) && ($.arrayIndex(r!, 3) == 1114111):
			{
				;(i$ as __goscript_prog.Inst).Op = 10
				break
			}
		}

		return (f).clone()
	}

	public star(f1: frag, nongreedy: boolean): frag {
		const c: compiler | $.VarRef<compiler> | null = this;
		if (f1.nullable) {
			// Use (f1+)? to get priority match order correct.
			// See golang.org/issue/46123.
			return compiler.prototype.quest.call(c, (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).plus(f1, nongreedy) : compiler.prototype.plus.call(c, f1, nongreedy)), nongreedy)
		}
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as compiler).loop(f1, nongreedy) : compiler.prototype.loop.call(c, f1, nongreedy))
	}

	static __typeInfo = $.registerStructType(
		"syntax.compiler",
		() => new compiler(),
		() => [$.methodSignature("alt", [["f1", "syntax.frag"], ["f2", "syntax.frag"]], ["syntax.frag"], true), $.methodSignature("cap", [["arg", /* @__PURE__ */ $.basicType("uint32")]], ["syntax.frag"], true), $.methodSignature("cat", [["f1", "syntax.frag"], ["f2", "syntax.frag"]], ["syntax.frag"], true), $.methodSignature("compile", [["re", /* @__PURE__ */ $.pointerType("syntax.Regexp")]], ["syntax.frag"], true), $.methodSignature("empty", [["op", /* @__PURE__ */ $.basicType("uint8", "syntax.EmptyOp")]], ["syntax.frag"], true), $.methodSignature("fail", [], ["syntax.frag"], true), $.methodSignature("init", [], [], true), $.methodSignature("inst", [["op", /* @__PURE__ */ $.basicType("uint8", "syntax.InstOp")]], ["syntax.frag"], true), $.methodSignature("loop", [["f1", "syntax.frag"], ["nongreedy", /* @__PURE__ */ $.basicType("bool")]], ["syntax.frag"], true), $.methodSignature("nop", [], ["syntax.frag"], true), $.methodSignature("plus", [["f1", "syntax.frag"], ["nongreedy", /* @__PURE__ */ $.basicType("bool")]], ["syntax.frag"], true), $.methodSignature("quest", [["f1", "syntax.frag"], ["nongreedy", /* @__PURE__ */ $.basicType("bool")]], ["syntax.frag"], true), $.methodSignature("rune", [["r", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))], ["flags", /* @__PURE__ */ $.basicType("uint16", "syntax.Flags")]], ["syntax.frag"], true), $.methodSignature("star", [["f1", "syntax.frag"], ["nongreedy", /* @__PURE__ */ $.basicType("bool")]], ["syntax.frag"], true)],
		compiler,
		() => [/* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.pointerType("syntax.Prog"), [0], 0, false, { pkgPath: "regexp/syntax" })]
	)
}

export function makePatchList(n: number): patchList {
	return new patchList({head: n, tail: n}, true)
}

export function Compile(re: __goscript_regexp.Regexp | $.VarRef<__goscript_regexp.Regexp> | null): [__goscript_prog.Prog | $.VarRef<__goscript_prog.Prog> | null, $.GoError] {
	let c: $.VarRef<compiler> = $.varRef(new compiler(undefined, true))
	c.value.init()
	let f = c.value.compile(re)
	f.out.patch(c.value.p, c.value.inst(4).i)
	$.pointerValue<__goscript_prog.Prog>(c.value.p).Start = $.int(f.i)
	return [c.value.p, null]
}

export let anyRuneNotNL: $.Slice<number> = $.arrayToSlice<number>([0, 9, 11, 1114111])

export function __goscript_set_anyRuneNotNL(__goscriptValue: $.Slice<number>): void {
	anyRuneNotNL = __goscriptValue
}

export let anyRune: $.Slice<number> = $.arrayToSlice<number>([0, 1114111])

export function __goscript_set_anyRune(__goscriptValue: $.Slice<number>): void {
	anyRune = __goscriptValue
}
