// Generated file based on tag.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as sort from "@goscript/sort/index.js"

import * as sync from "@goscript/sync/index.js"

import * as promproto from "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/bytes/index.js"
import "@goscript/sort/index.js"
import "@goscript/sync/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"

$.registerTypePackagePath("go.uber.org/net/metrics", ["metrics.digester", "metrics.Tags"])

export type Tags = globalThis.Map<string, string> | null

$.registerNamedType("metrics.Tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")));

$.registerNamedValueType(
	"metrics.Tags",
	{addToDigester: (receiver: any, ...args: any[]) => (Tags_addToDigester as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), less: (receiver: any, ...args: any[]) => (Tags_less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("addToDigester", [["d", /* @__PURE__ */ $.pointerType("metrics.digester")]]), $.methodSignature("less", [["other", "metrics.Tags"]], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*metrics.Tags",
	{addToDigester: (receiver: any, ...args: any[]) => (Tags_addToDigester as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), less: (receiver: any, ...args: any[]) => (Tags_less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("addToDigester", [["d", /* @__PURE__ */ $.pointerType("metrics.digester")]]), $.methodSignature("less", [["other", "metrics.Tags"]], [/* @__PURE__ */ $.basicType("bool")])]
);

export class digester {
	public get bs(): $.Slice<number> {
		return this._fields.bs
	}

	public set bs(value: $.Slice<number>) {
		this._fields.bs = value
	}

	public _fields: {
		bs: $.Slice<number>
	}

	constructor(init?: Partial<{bs?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			bs: init?.bs ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): digester {
		return new digester(this, true)
	}

	public __goscriptAssign(source: digester): void {
		const target = this._fields
		const values = source._fields
		target.bs = values.bs
	}

	public add(prefix: string, s: string): void {
		let d: digester | $.VarRef<digester> | null = this;
		const d$: digester = d == null ? $.pointerTarget<digester>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<digester>(d)
		if ($.sliceLen((d$ as digester).bs) > 0) {
			// separate tags with a null byte
			;(d$ as digester).bs = $.append((d$ as digester).bs, $.uint(0, 8), $.byteSliceHint)
		}
		;(d$ as digester).bs = $.appendSlice((d$ as digester).bs, $.stringToBytes(prefix), $.byteSliceHint);
		;(d$ as digester).bs = $.appendSlice((d$ as digester).bs, $.stringToBytes(s), $.byteSliceHint)
	}

	public digest(): $.Slice<number> {
		const d: digester | $.VarRef<digester> | null = this;
		return $.pointerValue<digester>(d).bs
	}

	public free(): void {
		const d: digester | $.VarRef<digester> | null = this;
		_digesterPool.value.Put($.interfaceValue(d, "*metrics.digester", /* @__PURE__ */ $.pointerType("metrics.digester")))
	}

	static __typeInfo = $.registerStructType(
		"metrics.digester",
		() => new digester(),
		() => [$.methodSignature("add", [["prefix", /* @__PURE__ */ $.basicType("string")], ["s", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("digest", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("free", [], [], true)],
		digester,
		() => [/* @__PURE__ */ $.structField("bs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "go.uber.org/net/metrics" })]
	)
}

export const DefaultTagName: string = "default"

export const DefaultTagValue: string = "default"

export let _digesterPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(new digester({bs: $.makeSlice<number>(0, 128, "byte")}), "*metrics.digester", /* @__PURE__ */ $.pointerType("metrics.digester"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set__digesterPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(_digesterPool.value, __goscriptValue)
}

export async function newDigester(): globalThis.Promise<digester | $.VarRef<digester> | null> {
	let d: digester | $.VarRef<digester> | null = $.mustTypeAssert<digester | $.VarRef<digester> | null>(await _digesterPool.value.Get(), /* @__PURE__ */ $.pointerType("metrics.digester"))
	let d$: digester = d == null ? $.pointerTarget<digester>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<digester>(d);
	;(d$ as digester).bs = $.goSlice((d$ as digester).bs, undefined, 0)
	return d
}

export function zip(pairs: $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null>): Tags {
	let ls: Tags = $.makeMap<string, string>()
	for (let __goscriptRangeTarget0 = pairs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let pair = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as promproto.LabelPair | $.VarRef<promproto.LabelPair> | null)
		if (((pair == null) || ($.pointerValue<promproto.LabelPair>(pair).Name == null)) || ($.pointerValue<promproto.LabelPair>(pair).Value == null)) {
			continue
		}
		$.mapSet(ls, $.pointerValue<string>($.pointerValue<promproto.LabelPair>(pair).Name), $.pointerValue<string>($.pointerValue<promproto.LabelPair>(pair).Value))
	}
	return ls
}

export async function Tags_less(t: Tags, other: Tags): globalThis.Promise<boolean> {
	let left: digester | $.VarRef<digester> | null = await newDigester()
	let right: digester | $.VarRef<digester> | null = await newDigester()
	Tags_addToDigester(t, left)
	Tags_addToDigester(other, right)
	let cmp = bytes.Compare((left !== null && (left as any).__isVarRef !== true && (left as any).__goValue === undefined ? ((left as any) as digester).digest() : digester.prototype.digest.call(left)), (right !== null && (right as any).__isVarRef !== true && (right as any).__goValue === undefined ? ((right as any) as digester).digest() : digester.prototype.digest.call(right)))
	void (left !== null && (left as any).__isVarRef !== true && (left as any).__goValue === undefined ? ((left as any) as digester).free() : digester.prototype.free.call(left))
	void (right !== null && (right as any).__isVarRef !== true && (right as any).__goValue === undefined ? ((right as any) as digester).free() : digester.prototype.free.call(right))
	return cmp == -1
}

export function Tags_addToDigester(t: Tags, d: digester | $.VarRef<digester> | null): void {
	let names: $.Slice<string> = $.makeSlice<string>(0, $.len(t), "string")
	for (const [k, __rangeValue] of t?.entries() ?? []) {
		names = $.appendOne(names, k)
	}
	sort.Strings(names)
	for (let __goscriptRangeTarget1 = names, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let n = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digester).add("", n) : digester.prototype.add.call(d, "", n))
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digester).add("", $.mapGet<string, string, string>(t, n, "")[0]) : digester.prototype.add.call(d, "", $.mapGet<string, string, string>(t, n, "")[0]))
	}
}

export function IsValidName(s: string): boolean {
	if ($.stringLen(s) == 0) {
		return false
	}

	{
		let c = $.indexString(s, 0)
		switch ((true as boolean)) {
			case (65 <= c) && (c <= 90):
			{
				break
				break
			}
			case (97 <= c) && (c <= 122):
			{
				break
				break
			}
			case c == 95:
			{
				break
				break
			}
			default:
			{
				return false
				break
			}
		}
	}

	// Don't incur the expense of ranging over runes, since no multibyte UTF-8
	// characters are legal.
	for (let i = 1; i < $.stringLen(s); i++) {
		let c = $.indexString(s, i)
		switch ((true as boolean)) {
			case (48 <= c) && (c <= 57):
			{
				continue
				break
			}
			case (65 <= c) && (c <= 90):
			{
				continue
				break
			}
			case (97 <= c) && (c <= 122):
			{
				continue
				break
			}
			case c == 95:
			{
				continue
				break
			}
			default:
			{
				return false
				break
			}
		}
	}

	return true
}

export async function scrubName(s: string): globalThis.Promise<string> {
	if (IsValidName(s)) {
		return s
	}
	if ($.stringLen(s) == 0) {
		return "default"
	}

	let d: digester | $.VarRef<digester> | null = await newDigester()
	let d$: digester = d == null ? $.pointerTarget<digester>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<digester>(d)
	{
		let c = $.indexString(s, 0)
		switch ((true as boolean)) {
			case (65 <= c) && (c <= 90):
			{
				;(d$ as digester).bs = $.append((d$ as digester).bs, $.uint(c, 8), $.byteSliceHint)
				break
			}
			case (97 <= c) && (c <= 122):
			{
				;(d$ as digester).bs = $.append((d$ as digester).bs, $.uint(c, 8), $.byteSliceHint)
				break
			}
			case c == 95:
			{
				;(d$ as digester).bs = $.append((d$ as digester).bs, $.uint(c, 8), $.byteSliceHint)
				break
			}
			default:
			{
				;(d$ as digester).bs = $.append((d$ as digester).bs, $.uint(95, 8), $.byteSliceHint)
				break
			}
		}
	}

	for (let i = 1; i < $.stringLen(s); i++) {
		let c = $.indexString(s, i)
		switch ((true as boolean)) {
			case (48 <= c) && (c <= 57):
			{
				;(d$ as digester).bs = $.append((d$ as digester).bs, $.uint(c, 8), $.byteSliceHint)
				break
			}
			case (65 <= c) && (c <= 90):
			{
				;(d$ as digester).bs = $.append((d$ as digester).bs, $.uint(c, 8), $.byteSliceHint)
				break
			}
			case (97 <= c) && (c <= 122):
			{
				;(d$ as digester).bs = $.append((d$ as digester).bs, $.uint(c, 8), $.byteSliceHint)
				break
			}
			case c == 95:
			{
				;(d$ as digester).bs = $.append((d$ as digester).bs, $.uint(c, 8), $.byteSliceHint)
				break
			}
			default:
			{
				;(d$ as digester).bs = $.append((d$ as digester).bs, $.uint(95, 8), $.byteSliceHint)
				break
			}
		}
	}

	let scrubbed = $.bytesToString((d$ as digester).bs)
	void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digester).free() : digester.prototype.free.call(d))
	return scrubbed
}

export function IsValidTagValue(s: string): boolean {
	if ($.stringLen(s) == 0) {
		return false
	}

	// Don't incur the expense of ranging over runes, since no multibyte UTF-8
	// characters are legal.
	for (let i = 0; i < $.stringLen(s); i++) {
		let c = $.indexString(s, i)
		switch ((true as boolean)) {
			case (48 <= c) && (c <= 57):
			{
				continue
				break
			}
			case (65 <= c) && (c <= 90):
			{
				continue
				break
			}
			case (97 <= c) && (c <= 122):
			{
				continue
				break
			}
			case ((c == 95) || (c == 45)) || (c == 46):
			{
				continue
				break
			}
			default:
			{
				return false
				break
			}
		}
	}
	return true
}

export async function scrubTagValue(s: string): globalThis.Promise<string> {
	if (IsValidTagValue(s)) {
		return s
	}
	if ($.stringLen(s) == 0) {
		return "default"
	}

	let d: digester | $.VarRef<digester> | null = await newDigester()
	let d$: digester = d == null ? $.pointerTarget<digester>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<digester>(d)
	for (let i = 0; i < $.stringLen(s); i++) {
		let c = $.indexString(s, i)
		switch ((true as boolean)) {
			case (48 <= c) && (c <= 57):
			{
				;(d$ as digester).bs = $.append((d$ as digester).bs, $.uint(c, 8), $.byteSliceHint)
				break
			}
			case (65 <= c) && (c <= 90):
			{
				;(d$ as digester).bs = $.append((d$ as digester).bs, $.uint(c, 8), $.byteSliceHint)
				break
			}
			case (97 <= c) && (c <= 122):
			{
				;(d$ as digester).bs = $.append((d$ as digester).bs, $.uint(c, 8), $.byteSliceHint)
				break
			}
			case ((c == 95) || (c == 45)) || (c == 46):
			{
				;(d$ as digester).bs = $.append((d$ as digester).bs, $.uint(c, 8), $.byteSliceHint)
				break
			}
			default:
			{
				;(d$ as digester).bs = $.append((d$ as digester).bs, $.uint(95, 8), $.byteSliceHint)
				break
			}
		}
	}
	let scrubbed = $.bytesToString((d$ as digester).bs)
	void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digester).free() : digester.prototype.free.call(d))
	return scrubbed
}
