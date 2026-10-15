// Generated file based on resolve.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as base64 from "@goscript/encoding/base64/index.js"

import * as math from "@goscript/math/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_yaml from "./yaml.gs.ts"
import "@goscript/encoding/base64/index.js"
import "@goscript/math/index.js"
import "@goscript/regexp/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "./yaml.gs.ts"

$.registerTypePackagePath("gopkg.in/yaml.v3", ["yaml.resolveMapItem"])

export class resolveMapItem {
	public get value(): any {
		return this._fields.value
	}

	public set value(value: any) {
		this._fields.value = value
	}

	public get tag(): string {
		return this._fields.tag
	}

	public set tag(value: string) {
		this._fields.tag = value
	}

	public _fields: {
		value: any
		tag: string
	}

	constructor(init?: Partial<{value?: any, tag?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			value: init?.value ?? (null! as any),
			tag: init?.tag ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): resolveMapItem {
		return new resolveMapItem(this, true)
	}

	public __goscriptAssign(source: resolveMapItem): void {
		const target = this._fields
		const values = source._fields
		target.value = $.assignFieldValue(target.value, values.value, { kind: $.TypeKind.Interface, methods: [] })
		target.tag = values.tag
	}

	static __typeInfo = $.registerStructType(
		"yaml.resolveMapItem",
		() => new resolveMapItem(),
		() => [],
		resolveMapItem,
		() => [/* @__PURE__ */ $.structField("value", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export const nullTag: string = "!!null"

export const boolTag: string = "!!bool"

export const strTag: string = "!!str"

export const intTag: string = "!!int"

export const floatTag: string = "!!float"

export const timestampTag: string = "!!timestamp"

export const seqTag: string = "!!seq"

export const mapTag: string = "!!map"

export const binaryTag: string = "!!binary"

export const mergeTag: string = "!!merge"

export const longTagPrefix: string = "tag:yaml.org,2002:"

export let resolveTable: $.Slice<number> = $.makeSlice<number>(256, undefined, "byte")

export function __goscript_set_resolveTable(__goscriptValue: $.Slice<number>): void {
	resolveTable = __goscriptValue
}

export let resolveMap: globalThis.Map<string, resolveMapItem> | null = $.makeMap<string, resolveMapItem>()

export function __goscript_set_resolveMap(__goscriptValue: globalThis.Map<string, resolveMapItem> | null): void {
	resolveMap = __goscriptValue
}

function __goscriptInit0(): void {
	let t: $.Slice<number> = resolveTable
	$.sliceElems(t!)[$.sliceSlot(t!, $.int(43))] = 83
	$.sliceElems(t!)[$.sliceSlot(t!, $.int(45))] = 83
	for (let __goscriptRunes0 = $.stringRunes("0123456789"); __goscriptRunes0.next(); ) {
		let c = __goscriptRunes0.rune
		$.sliceElems(t!)[$.sliceSlot(t!, $.int(c))] = 68
	}
	for (let __goscriptRunes1 = $.stringRunes("yYnNtTfFoO~"); __goscriptRunes1.next(); ) {
		let c = __goscriptRunes1.rune
		$.sliceElems(t!)[$.sliceSlot(t!, $.int(c))] = 77
	}
	$.sliceElems(t!)[$.sliceSlot(t!, $.int(46))] = 46

	let resolveMapList: $.Slice<{"v": any, "tag": string, "l": $.Slice<string>}> = $.arrayToSlice<{"v": any, "tag": string, "l": $.Slice<string>}>([$.anonymousStructValue({v: true, tag: "!!bool", l: $.arrayToSlice<string>(["true", "True", "TRUE"])}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("v", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("l", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 32, false, { pkgPath: "gopkg.in/yaml.v3" })] }), $.anonymousStructValue({v: false, tag: "!!bool", l: $.arrayToSlice<string>(["false", "False", "FALSE"])}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("v", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("l", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 32, false, { pkgPath: "gopkg.in/yaml.v3" })] }), $.anonymousStructValue({v: null, tag: "!!null", l: $.arrayToSlice<string>(["", "~", "null", "Null", "NULL"])}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("v", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("l", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 32, false, { pkgPath: "gopkg.in/yaml.v3" })] }), $.anonymousStructValue({v: $.basicInterfaceValue(math.NaN(), "float64"), tag: "!!float", l: $.arrayToSlice<string>([".nan", ".NaN", ".NAN"])}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("v", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("l", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 32, false, { pkgPath: "gopkg.in/yaml.v3" })] }), $.anonymousStructValue({v: $.basicInterfaceValue(math.Inf(1), "float64"), tag: "!!float", l: $.arrayToSlice<string>([".inf", ".Inf", ".INF"])}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("v", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("l", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 32, false, { pkgPath: "gopkg.in/yaml.v3" })] }), $.anonymousStructValue({v: $.basicInterfaceValue(math.Inf(1), "float64"), tag: "!!float", l: $.arrayToSlice<string>(["+.inf", "+.Inf", "+.INF"])}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("v", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("l", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 32, false, { pkgPath: "gopkg.in/yaml.v3" })] }), $.anonymousStructValue({v: $.basicInterfaceValue(math.Inf(-1), "float64"), tag: "!!float", l: $.arrayToSlice<string>(["-.inf", "-.Inf", "-.INF"])}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("v", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("l", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 32, false, { pkgPath: "gopkg.in/yaml.v3" })] }), $.anonymousStructValue({v: "<<", tag: "!!merge", l: $.arrayToSlice<string>(["<<"])}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("v", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("l", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 32, false, { pkgPath: "gopkg.in/yaml.v3" })] })])

	let m: globalThis.Map<string, resolveMapItem> | null = resolveMap
	for (let __goscriptRangeTarget1 = resolveMapList, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let item = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as {"v": any, "tag": string, "l": $.Slice<string>})))
		for (let __goscriptRangeTarget0 = item.l, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let s = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
			$.mapSet(m, s, new resolveMapItem({value: item.v, tag: item.tag}, true))
		}
	}
}

export let longTags: globalThis.Map<string, string> | null = $.makeMap<string, string>()

export function __goscript_set_longTags(__goscriptValue: globalThis.Map<string, string> | null): void {
	longTags = __goscriptValue
}

export let shortTags: globalThis.Map<string, string> | null = $.makeMap<string, string>()

export function __goscript_set_shortTags(__goscriptValue: globalThis.Map<string, string> | null): void {
	shortTags = __goscriptValue
}

function __goscriptInit1(): void {
	for (let __goscriptRangeTarget2 = $.arrayToSlice<string>(["!!null", "!!bool", "!!str", "!!int", "!!float", "!!timestamp", "!!seq", "!!map", "!!binary", "!!merge"]), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let stag = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
		let ltag = longTag(stag)
		$.mapSet(longTags, stag, ltag)
		$.mapSet(shortTags, ltag, stag)
	}
}

export function shortTag(tag: string): string {
	if (strings.HasPrefix(tag, "tag:yaml.org,2002:")) {
		{
			let [stag, ok] = $.mapGet<string, string, string>(shortTags, tag, "")
			if (ok) {
				return stag
			}
		}
		return $.concatString("!!", $.sliceStringOrBytes(tag, 18, undefined))
	}
	return tag
}

export function longTag(tag: string): string {
	if (strings.HasPrefix(tag, "!!")) {
		{
			let [ltag, ok] = $.mapGet<string, string, string>(longTags, tag, "")
			if (ok) {
				return ltag
			}
		}
		return $.concatString("tag:yaml.org,2002:", $.sliceStringOrBytes(tag, 2, undefined))
	}
	return tag
}

export function resolvableTag(tag: string): boolean {
	switch (tag) {
		case "":
		case "!!str":
		case "!!bool":
		case "!!int":
		case "!!float":
		case "!!null":
		case "!!timestamp":
		{
			return true
			break
		}
	}
	return false
}

export let yamlStyleFloat: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^[-+]?(\\.[0-9]+|[0-9]+(\\.[0-9]*)?)([eE][-+]?[0-9]+)?$")

export function __goscript_set_yamlStyleFloat(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	yamlStyleFloat = __goscriptValue
}

export async function resolve(tag: string, _in: string): globalThis.Promise<[string, any]> {
	let rtag: string = ""
	let out: any = null! as any
	using __defer = new $.DisposableStack()
	tag = shortTag(tag)
	if (!resolvableTag(tag)) {
		return [tag, _in]
	}

	__defer.defer(() => { ((): void => {
		switch (tag) {
			case "":
			case rtag:
			case "!!str":
			case "!!binary":
			{
				return
				break
			}
			case "!!float":
			{
				if ($.stringEqual(rtag, "!!int")) {
					{
						const __goscriptTypeSwitchValue = out
						switch (true) {
							case $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")).ok:
								{
									let v: bigint = $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")).value
									rtag = "!!float"
									out = $.basicInterfaceValue(globalThis.Number(v), "float64")
									return
								}
								break
							case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int")).ok:
								{
									let v: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int")).value
									rtag = "!!float"
									out = $.basicInterfaceValue(v, "float64")
									return
								}
								break
						}
					}
				}
				break
			}
		}
		__goscript_yaml.failf("cannot decode %s `%s` as a %s", $.arrayToSlice<any>([shortTag(rtag), _in, shortTag(tag)]))
	})() })

	// Any data is accepted as a !!str or !!binary.
	// Otherwise, the prefix is enough of a hint about what it might be.
	let hint = 78
	if (!$.stringEqual(_in, "")) {
		hint = $.arrayIndex(resolveTable!, $.indexString(_in, 0))
	}
	if (((hint != 0) && (!$.stringEqual(tag, "!!str"))) && (!$.stringEqual(tag, "!!binary"))) {
		// Handle things we can lookup in a map.
		{
			let [item, ok] = $.mapGet<string, resolveMapItem, resolveMapItem>(resolveMap, _in, new resolveMapItem(undefined, true))
			if (ok) {
				const __goscriptReturn0: [string, any] = [item.tag, item.value]
				rtag = __goscriptReturn0[0]
				out = __goscriptReturn0[1]
				__defer.dispose()
				return [rtag, out]
			}
		}

		// Base 60 floats are a bad idea, were dropped in YAML 1.2, and
		// are purposefully unsupported here. They're still quoted on
		// the way out for compatibility with other parser, though.

		switch (hint) {
			case 77:
			{
				break
			}
			case 46:
			{
				let [floatv, err] = strconv.ParseFloat(_in, 64)
				if (err == null) {
					const __goscriptReturn1: [string, any] = ["!!float", $.basicInterfaceValue(floatv, "float64")]
					rtag = __goscriptReturn1[0]
					out = __goscriptReturn1[1]
					__defer.dispose()
					return [rtag, out]
				}
				break
			}
			case 68:
			case 83:
			{
				if (($.stringEqual(tag, "")) || ($.stringEqual(tag, "!!timestamp"))) {
					let [t, ok] = parseTimestamp(_in)
					if (ok) {
						const __goscriptReturn2: [string, any] = ["!!timestamp", $.interfaceValue($.markAsStructValue($.cloneStructValue(t)), "time.Time", "time.Time")]
						rtag = __goscriptReturn2[0]
						out = __goscriptReturn2[1]
						__defer.dispose()
						return [rtag, out]
					}
				}

				let plain = strings.Replace(_in, "_", "", -1)
				let [intv, err] = strconv.ParseInt(plain, 0, 64)
				if (err == null) {
					if (intv == $.int64($.int(intv))) {
						const __goscriptReturn3: [string, any] = ["!!int", $.basicInterfaceValue($.int(intv), "int")]
						rtag = __goscriptReturn3[0]
						out = __goscriptReturn3[1]
						__defer.dispose()
						return [rtag, out]
					} else {
						const __goscriptReturn4: [string, any] = ["!!int", $.basicInterfaceValue(intv, "int64")]
						rtag = __goscriptReturn4[0]
						out = __goscriptReturn4[1]
						__defer.dispose()
						return [rtag, out]
					}
				}
				let __goscriptTuple0: any = strconv.ParseUint(plain, 0, 64)
				let uintv = __goscriptTuple0[0]
				err = __goscriptTuple0[1]
				if (err == null) {
					const __goscriptReturn5: [string, any] = ["!!int", $.basicInterfaceValue(uintv, "uint64")]
					rtag = __goscriptReturn5[0]
					out = __goscriptReturn5[1]
					__defer.dispose()
					return [rtag, out]
				}
				if (await (yamlStyleFloat !== null && (yamlStyleFloat as any).__isVarRef !== true && (yamlStyleFloat as any).__goValue === undefined ? ((yamlStyleFloat as any) as regexp.Regexp).MatchString(plain) : regexp.Regexp.prototype.MatchString.call(yamlStyleFloat, plain))) {
					let [floatv, __goscriptShadow0] = strconv.ParseFloat(plain, 64)
					if (__goscriptShadow0 == null) {
						const __goscriptReturn6: [string, any] = ["!!float", $.basicInterfaceValue(floatv, "float64")]
						rtag = __goscriptReturn6[0]
						out = __goscriptReturn6[1]
						__defer.dispose()
						return [rtag, out]
					}
				}
				if (strings.HasPrefix(plain, "0b")) {
					let [__goscriptShadow1, __goscriptShadow2] = strconv.ParseInt($.sliceStringOrBytes(plain, 2, undefined), 2, 64)
					if (__goscriptShadow2 == null) {
						if (__goscriptShadow1 == $.int64($.int(__goscriptShadow1))) {
							const __goscriptReturn7: [string, any] = ["!!int", $.basicInterfaceValue($.int(__goscriptShadow1), "int")]
							rtag = __goscriptReturn7[0]
							out = __goscriptReturn7[1]
							__defer.dispose()
							return [rtag, out]
						} else {
							const __goscriptReturn8: [string, any] = ["!!int", $.basicInterfaceValue(__goscriptShadow1, "int64")]
							rtag = __goscriptReturn8[0]
							out = __goscriptReturn8[1]
							__defer.dispose()
							return [rtag, out]
						}
					}
					let __goscriptTuple1: any = strconv.ParseUint($.sliceStringOrBytes(plain, 2, undefined), 2, 64)
					let __goscriptShadow3 = __goscriptTuple1[0]
					__goscriptShadow2 = __goscriptTuple1[1]
					if (__goscriptShadow2 == null) {
						const __goscriptReturn9: [string, any] = ["!!int", $.basicInterfaceValue(__goscriptShadow3, "uint64")]
						rtag = __goscriptReturn9[0]
						out = __goscriptReturn9[1]
						__defer.dispose()
						return [rtag, out]
					}
				} else {
					if (strings.HasPrefix(plain, "-0b")) {
						let [__goscriptShadow4, __goscriptShadow5] = strconv.ParseInt($.concatString("-", $.sliceStringOrBytes(plain, 3, undefined)), 2, 64)
						if (__goscriptShadow5 == null) {
							if (true || (__goscriptShadow4 == $.int64($.int(__goscriptShadow4)))) {
								const __goscriptReturn10: [string, any] = ["!!int", $.basicInterfaceValue($.int(__goscriptShadow4), "int")]
								rtag = __goscriptReturn10[0]
								out = __goscriptReturn10[1]
								__defer.dispose()
								return [rtag, out]
							} else {
								const __goscriptReturn11: [string, any] = ["!!int", $.basicInterfaceValue(__goscriptShadow4, "int64")]
								rtag = __goscriptReturn11[0]
								out = __goscriptReturn11[1]
								__defer.dispose()
								return [rtag, out]
							}
						}
					}
				}
				// Octals as introduced in version 1.2 of the spec.
				// Octals from the 1.1 spec, spelled as 0777, are still
				// decoded by default in v3 as well for compatibility.
				// May be dropped in v4 depending on how usage evolves.
				if (strings.HasPrefix(plain, "0o")) {
					let [__goscriptShadow6, __goscriptShadow7] = strconv.ParseInt($.sliceStringOrBytes(plain, 2, undefined), 8, 64)
					if (__goscriptShadow7 == null) {
						if (__goscriptShadow6 == $.int64($.int(__goscriptShadow6))) {
							const __goscriptReturn12: [string, any] = ["!!int", $.basicInterfaceValue($.int(__goscriptShadow6), "int")]
							rtag = __goscriptReturn12[0]
							out = __goscriptReturn12[1]
							__defer.dispose()
							return [rtag, out]
						} else {
							const __goscriptReturn13: [string, any] = ["!!int", $.basicInterfaceValue(__goscriptShadow6, "int64")]
							rtag = __goscriptReturn13[0]
							out = __goscriptReturn13[1]
							__defer.dispose()
							return [rtag, out]
						}
					}
					let __goscriptTuple2: any = strconv.ParseUint($.sliceStringOrBytes(plain, 2, undefined), 8, 64)
					let __goscriptShadow8 = __goscriptTuple2[0]
					__goscriptShadow7 = __goscriptTuple2[1]
					if (__goscriptShadow7 == null) {
						const __goscriptReturn14: [string, any] = ["!!int", $.basicInterfaceValue(__goscriptShadow8, "uint64")]
						rtag = __goscriptReturn14[0]
						out = __goscriptReturn14[1]
						__defer.dispose()
						return [rtag, out]
					}
				} else {
					if (strings.HasPrefix(plain, "-0o")) {
						let [__goscriptShadow9, __goscriptShadow10] = strconv.ParseInt($.concatString("-", $.sliceStringOrBytes(plain, 3, undefined)), 8, 64)
						if (__goscriptShadow10 == null) {
							if (true || (__goscriptShadow9 == $.int64($.int(__goscriptShadow9)))) {
								const __goscriptReturn15: [string, any] = ["!!int", $.basicInterfaceValue($.int(__goscriptShadow9), "int")]
								rtag = __goscriptReturn15[0]
								out = __goscriptReturn15[1]
								__defer.dispose()
								return [rtag, out]
							} else {
								const __goscriptReturn16: [string, any] = ["!!int", $.basicInterfaceValue(__goscriptShadow9, "int64")]
								rtag = __goscriptReturn16[0]
								out = __goscriptReturn16[1]
								__defer.dispose()
								return [rtag, out]
							}
						}
					}
				}
				break
			}
			default:
			{
				$.panic($.concatString(($.concatString(($.concatString(($.concatString("internal error: missing handler for resolver table: ", $.runeToString($.int(hint, 32)))), " (with ")), _in)), ")"))
				break
			}
		}
	}
	const __goscriptReturn17: [string, any] = ["!!str", _in]
	rtag = __goscriptReturn17[0]
	out = __goscriptReturn17[1]
	__defer.dispose()
	return [rtag, out]
	throw new globalThis.Error("goscript: unreachable return")
}

export function encodeBase64(s: string): string {
	const lineLen: number = 70
	let encLen = base64.Encoding.prototype.EncodedLen.call(base64.StdEncoding, $.stringLen(s))
	let lines = (globalThis.Math.trunc(encLen / 70)) + 1
	let buf: $.Slice<number> = $.makeSlice<number>((encLen * 2) + lines, undefined, "byte")
	let _in: $.Slice<number> = $.goSlice(buf, 0, encLen)
	let out: $.Slice<number> = $.goSlice(buf, encLen, undefined)
	base64.Encoding.prototype.Encode.call(base64.StdEncoding, _in, $.stringToBytes(s))
	let k = 0
	for (let __goscriptSliceWindow0 = $.sliceRange(out), i = 0; i < $.sliceLen(_in); i = i + (70)) {
		let j = i + 70
		if (j > $.sliceLen(_in)) {
			j = $.sliceLen(_in)
		}
		k = k + ($.copyByteRanges(out, k, undefined, _in, i, j))
		if (lines > 1) {
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, k)] = 10
			k++
		}
	}
	return $.bytesToString($.goSlice(out, undefined, k))
}

export let allowedTimestampFormats: $.Slice<string> = $.arrayToSlice<string>(["2006-1-2T15:4:5.999999999Z07:00", "2006-1-2t15:4:5.999999999Z07:00", "2006-1-2 15:4:5.999999999", "2006-1-2"])

export function __goscript_set_allowedTimestampFormats(__goscriptValue: $.Slice<string>): void {
	allowedTimestampFormats = __goscriptValue
}

export function parseTimestamp(s: string): [time.Time, boolean] {
	// TODO write code to check all the formats supported by
	// http://yaml.org/type/timestamp.html instead of using time.Parse.

	// Quick check: all date formats start with YYYY-.
	let i = 0
	for (; i < $.stringLen(s); i++) {
		{
			let c = $.indexString(s, i)
			if ((c < 48) || (c > 57)) {
				break
			}
		}
	}
	if (((i != 4) || (i == $.stringLen(s))) || ($.indexString(s, i) != 45)) {
		return [$.markAsStructValue(new time.Time()), false]
	}
	for (let __goscriptRangeTarget3 = allowedTimestampFormats, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let format = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
		{
			let [t, err] = time.Parse(format, s)
			if (err == null) {
				return [$.markAsStructValue($.cloneStructValue(t)), true]
			}
		}
	}
	return [$.markAsStructValue(new time.Time()), false]
}

export { __goscriptInit0 }

export { __goscriptInit1 }
