// Generated file based on bidirule.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as transform from "@goscript/golang.org/x/text/transform/index.js"

import * as bidi from "@goscript/golang.org/x/text/unicode/bidi/index.js"

import * as __goscript_bidirule10_0_0 from "./bidirule10.0.0.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/golang.org/x/text/transform/index.js"
import "@goscript/golang.org/x/text/unicode/bidi/index.js"
import "./bidirule10.0.0.gs.ts"

$.registerTypePackagePath("golang.org/x/text/secure/bidirule", ["bidirule.ruleState", "bidirule.ruleTransition", "bidirule.Transformer"])

export type ruleState = number

export class ruleTransition {
	public get next(): ruleState {
		return this._fields.next
	}

	public set next(value: ruleState) {
		this._fields.next = value
	}

	public get mask(): number {
		return this._fields.mask
	}

	public set mask(value: number) {
		this._fields.mask = value
	}

	public _fields: {
		next: ruleState
		mask: number
	}

	constructor(init?: Partial<{next?: ruleState, mask?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			next: init?.next ?? (0 as ruleState),
			mask: init?.mask ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ruleTransition {
		return new ruleTransition(this, true)
	}

	public __goscriptAssign(source: ruleTransition): void {
		const target = this._fields
		const values = source._fields
		target.next = values.next
		target.mask = values.mask
	}

	static __typeInfo = $.registerStructType(
		"bidirule.ruleTransition",
		() => new ruleTransition(),
		() => [],
		ruleTransition,
		() => [/* @__PURE__ */ $.structField("next", /* @__PURE__ */ $.basicType("uint8", "bidirule.ruleState"), [0], 0, false, { pkgPath: "golang.org/x/text/secure/bidirule" }), /* @__PURE__ */ $.structField("mask", /* @__PURE__ */ $.basicType("uint16"), [1], 2, false, { pkgPath: "golang.org/x/text/secure/bidirule" })]
	)
}

export class Transformer {
	public get state(): ruleState {
		return this._fields.state
	}

	public set state(value: ruleState) {
		this._fields.state = value
	}

	public get hasRTL(): boolean {
		return this._fields.hasRTL
	}

	public set hasRTL(value: boolean) {
		this._fields.hasRTL = value
	}

	public get seen(): number {
		return this._fields.seen
	}

	public set seen(value: number) {
		this._fields.seen = value
	}

	public _fields: {
		state: ruleState
		hasRTL: boolean
		seen: number
	}

	constructor(init?: Partial<{state?: ruleState, hasRTL?: boolean, seen?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (0 as ruleState),
			hasRTL: init?.hasRTL ?? (false as boolean),
			seen: init?.seen ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Transformer {
		return new Transformer(this, true)
	}

	public __goscriptAssign(source: Transformer): void {
		const target = this._fields
		const values = source._fields
		target.state = values.state
		target.hasRTL = values.hasRTL
		target.seen = values.seen
	}

	public Reset(): void {
		let t: Transformer | $.VarRef<Transformer> | null = this;
		$.assignStruct($.pointerValue<Transformer>(t), new Transformer(undefined, true))
	}

	public Span(src: $.Slice<number>, atEOF: boolean): [number, $.GoError] {
		const t: Transformer | $.VarRef<Transformer> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		if (($.pointerValue<Transformer>(t).state == 5) && (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transformer).isRTL() : Transformer.prototype.isRTL.call(t))) {
			return [0, ErrInvalid]
		}
		let __goscriptTuple0: any = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transformer).advance(src) : Transformer.prototype.advance.call(t, src))
		n = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		switch ((true as boolean)) {
			case !ok:
			{
				err = ErrInvalid
				break
			}
			case n < $.sliceLen(src):
			{
				if (!atEOF) {
					err = transform.ErrShortSrc
					break
				}
				err = ErrInvalid
				break
			}
			case !(t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transformer).isFinal() : Transformer.prototype.isFinal.call(t)):
			{
				err = ErrInvalid
				break
			}
		}
		return [n, err]
	}

	public Transform(dst: $.Slice<number>, src: $.Slice<number>, atEOF: boolean): [number, number, $.GoError] {
		const t: Transformer | $.VarRef<Transformer> | null = this;
		let nDst: number = 0
		let nSrc: number = 0
		let err: $.GoError = null! as $.GoError
		if ($.sliceLen(dst) < $.sliceLen(src)) {
			src = $.goSlice(src, undefined, $.sliceLen(dst))
			atEOF = false
			err = transform.ErrShortDst
		}
		let [n, err1] = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transformer).Span(src, atEOF) : Transformer.prototype.Span.call(t, src, atEOF))
		$.copy(dst, $.goSlice(src, undefined, n))
		if ((err == null) || ((err1 != null) && (!$.comparableEqual(err1, transform.ErrShortSrc)))) {
			err = err1
		}
		return [n, n, err]
	}

	public advance(s: $.Slice<number>): [number, boolean] {
		let t: Transformer | $.VarRef<Transformer> | null = this;
		let n: number = 0
		let ok: boolean = false
		const t$: Transformer = t == null ? $.pointerTarget<Transformer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transformer>(t)
		let e: bidi.Properties = new bidi.Properties(undefined, true)
		let sz: number = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(s); n < __goscriptSliceWindow0.length; ) {
			if (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, n)] as number) < 128) {
				let __goscriptAssign0_0: bidi.Properties = ($.arrayIndex(asciiTable, ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, n)] as number))).clone()
				let __goscriptAssign0_1: number = 1
				e = $.assignStruct(e, __goscriptAssign0_0)
				sz = __goscriptAssign0_1
			} else {
				let __goscriptTuple1: any = bidi.Lookup($.goSlice(s, n, undefined))
				e = $.assignStruct(e, __goscriptTuple1[0])
				sz = __goscriptTuple1[1]
				if (sz <= 1) {
					if (sz == 1) {
						// We always consider invalid UTF-8 to be invalid, even if
						// the string has not yet been determined to be RTL.
						// TODO: is this correct?
						return [n, false]
					}
					return [n, true]
				}
			}
			// TODO: using CompactClass would result in noticeable speedup.
			// See unicode/bidi/prop.go:Properties.CompactClass.
			let c = $.uint($.uint(((1 << e.Class()) & 0xffff), 16), 16);
			;(t$ as Transformer).seen = (t$ as Transformer).seen | (c)
			if ($.uint(((t$ as Transformer).seen & 36), 16) == 36) {
				;(t$ as Transformer).state = 5
				return [n, false]
			}
			{
				let tr = $.cloneArrayValue($.arrayIndex(transitions, (t$ as Transformer).state), /* @__PURE__ */ $.arrayType("bidirule.ruleTransition", 2))
				switch ((true as boolean)) {
					case $.uint(($.arrayIndex(tr, 0).mask & c), 16) != 0:
					{
						;(t$ as Transformer).state = $.arrayIndex(tr, 0).next
						break
					}
					case $.uint(($.arrayIndex(tr, 1).mask & c), 16) != 0:
					{
						;(t$ as Transformer).state = $.arrayIndex(tr, 1).next
						break
					}
					default:
					{
						;(t$ as Transformer).state = 5
						if ((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transformer).isRTL() : Transformer.prototype.isRTL.call(t))) {
							return [n, false]
						}
						break
					}
				}
			}
			n = n + (sz)
		}
		return [n, true]
	}

	public advanceString(s: string): [number, boolean] {
		let t: Transformer | $.VarRef<Transformer> | null = this;
		let n: number = 0
		let ok: boolean = false
		const t$: Transformer = t == null ? $.pointerTarget<Transformer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transformer>(t)
		let e: bidi.Properties = new bidi.Properties(undefined, true)
		let sz: number = 0
		while (n < $.stringLen(s)) {
			if ($.indexString(s, n) < 128) {
				let __goscriptAssign1_0: bidi.Properties = ($.arrayIndex(asciiTable, $.indexString(s, n))).clone()
				let __goscriptAssign1_1: number = 1
				e = $.assignStruct(e, __goscriptAssign1_0)
				sz = __goscriptAssign1_1
			} else {
				let __goscriptTuple2: any = bidi.LookupString($.sliceStringOrBytes(s, n, undefined))
				e = $.assignStruct(e, __goscriptTuple2[0])
				sz = __goscriptTuple2[1]
				if (sz <= 1) {
					if (sz == 1) {
						return [n, false]
					}
					return [n, true]
				}
			}
			// TODO: using CompactClass results in noticeable speedup.
			// See unicode/bidi/prop.go:Properties.CompactClass.
			let c = $.uint($.uint(((1 << e.Class()) & 0xffff), 16), 16);
			;(t$ as Transformer).seen = (t$ as Transformer).seen | (c)
			if ($.uint(((t$ as Transformer).seen & 36), 16) == 36) {
				;(t$ as Transformer).state = 5
				return [n, false]
			}
			{
				let tr = $.cloneArrayValue($.arrayIndex(transitions, (t$ as Transformer).state), /* @__PURE__ */ $.arrayType("bidirule.ruleTransition", 2))
				switch ((true as boolean)) {
					case $.uint(($.arrayIndex(tr, 0).mask & c), 16) != 0:
					{
						;(t$ as Transformer).state = $.arrayIndex(tr, 0).next
						break
					}
					case $.uint(($.arrayIndex(tr, 1).mask & c), 16) != 0:
					{
						;(t$ as Transformer).state = $.arrayIndex(tr, 1).next
						break
					}
					default:
					{
						;(t$ as Transformer).state = 5
						if ((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transformer).isRTL() : Transformer.prototype.isRTL.call(t))) {
							return [n, false]
						}
						break
					}
				}
			}
			n = n + (sz)
		}
		return [n, true]
	}

	public isFinal(): boolean {
		const t: Transformer | $.VarRef<Transformer> | null = this;
		const t$: Transformer = t == null ? $.pointerTarget<Transformer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transformer>(t)
		return (((t$ as Transformer).state == 2) || ((t$ as Transformer).state == 4)) || ((t$ as Transformer).state == 0)
	}

	public isRTL(): boolean {
		const t: Transformer | $.VarRef<Transformer> | null = this;
		const isRTL: number = 8226
		return $.uint(($.pointerValue<Transformer>(t).seen & 8226), 16) != 0
	}

	static __typeInfo = $.registerStructType(
		"bidirule.Transformer",
		() => new Transformer(),
		() => [$.methodSignature("Reset", [], [], true), $.methodSignature("Span", [["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("Transform", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["nDst", /* @__PURE__ */ $.basicType("int")], ["nSrc", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("advance", [["s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("advanceString", [["s", /* @__PURE__ */ $.basicType("string")]], [["n", /* @__PURE__ */ $.basicType("int")], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("isFinal", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("isRTL", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		Transformer,
		() => [/* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("uint8", "bidirule.ruleState"), [0], 0, false, { pkgPath: "golang.org/x/text/secure/bidirule" }), /* @__PURE__ */ $.structField("hasRTL", /* @__PURE__ */ $.basicType("bool"), [1], 1, false, { pkgPath: "golang.org/x/text/secure/bidirule" }), /* @__PURE__ */ $.structField("seen", /* @__PURE__ */ $.basicType("uint16"), [2], 2, false, { pkgPath: "golang.org/x/text/secure/bidirule" })]
	)
}

export const ruleInitial: ruleState = 0

export const ruleLTR: ruleState = 1

export const ruleLTRFinal: ruleState = 2

export const ruleRTL: ruleState = 3

export const ruleRTLFinal: ruleState = 4

export const ruleInvalid: ruleState = 5

export const exclusiveRTL: number = 36

export let ErrInvalid: $.GoError = errors.New("bidirule: failed Bidi Rule")

export function __goscript_set_ErrInvalid(__goscriptValue: $.GoError): void {
	ErrInvalid = __goscriptValue
}

export let transitions: ruleTransition[][] = $.arrayValue([$.arrayValue([new ruleTransition({next: 2, mask: 1}, true), new ruleTransition({next: 4, mask: 8194}, true)], /* @__PURE__ */ $.arrayType("bidirule.ruleTransition", 2)), $.arrayValue([new ruleTransition({next: 2, mask: 5}, true), new ruleTransition({next: 1, mask: 7256}, true)], /* @__PURE__ */ $.arrayType("bidirule.ruleTransition", 2)), $.arrayValue([new ruleTransition({next: 2, mask: 4101}, true), new ruleTransition({next: 1, mask: 3160}, true)], /* @__PURE__ */ $.arrayType("bidirule.ruleTransition", 2)), $.arrayValue([new ruleTransition({next: 4, mask: 8230}, true), new ruleTransition({next: 3, mask: 7256}, true)], /* @__PURE__ */ $.arrayType("bidirule.ruleTransition", 2)), $.arrayValue([new ruleTransition({next: 4, mask: 12326}, true), new ruleTransition({next: 3, mask: 3160}, true)], /* @__PURE__ */ $.arrayType("bidirule.ruleTransition", 2)), $.arrayValue([new ruleTransition({next: 5, mask: 0}, true), new ruleTransition({next: 5, mask: 0}, true)], /* @__PURE__ */ $.arrayType("bidirule.ruleTransition", 2))], /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.arrayType("bidirule.ruleTransition", 2), 6))

export function __goscript_set_transitions(__goscriptValue: ruleTransition[][]): void {
	transitions = __goscriptValue
}

export function Direction(b: $.Slice<number>): bidi.Direction {
	for (let i = 0; i < $.sliceLen(b); ) {
		let [e, sz] = bidi.Lookup($.goSlice(b, i, undefined))
		if (sz == 0) {
			i++
		}
		let c = e.Class()
		if (((c == 1) || (c == 13)) || (c == 5)) {
			return 1
		}
		i = i + (sz)
	}
	return 0
}

export function DirectionString(s: string): bidi.Direction {
	for (let i = 0; i < $.stringLen(s); ) {
		let [e, sz] = bidi.LookupString($.sliceStringOrBytes(s, i, undefined))
		if (sz == 0) {
			i++
			continue
		}
		let c = e.Class()
		if (((c == 1) || (c == 13)) || (c == 5)) {
			return 1
		}
		i = i + (sz)
	}
	return 0
}

export function Valid(b: $.Slice<number>): boolean {
	let t: $.VarRef<Transformer> = $.varRef(new Transformer(undefined, true))
	{
		let [n, ok] = t.value.advance(b)
		if (!ok || (n < $.sliceLen(b))) {
			return false
		}
	}
	return t.value.isFinal()
}

export function ValidString(s: string): boolean {
	let t: $.VarRef<Transformer> = $.varRef(new Transformer(undefined, true))
	{
		let [n, ok] = t.value.advanceString(s)
		if (!ok || (n < $.stringLen(s))) {
			return false
		}
	}
	return t.value.isFinal()
}

export function New(): Transformer | $.VarRef<Transformer> | null {
	return new Transformer()
}

export let asciiTable: bidi.Properties[] = $.arrayValue(globalThis.Array.from({ length: 128 }, () => new bidi.Properties(undefined, true)), /* @__PURE__ */ $.arrayType("bidi.Properties", 128))

export function __goscript_set_asciiTable(__goscriptValue: bidi.Properties[]): void {
	asciiTable = __goscriptValue
}

function __goscriptInit0(): void {
	for (let __goscriptRangeTarget0 = asciiTable, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let [p, ] = bidi.LookupRune($.int(i, 32))
		$.assignStruct(asciiTable[i], p)
	}
}

export { __goscriptInit0 }
