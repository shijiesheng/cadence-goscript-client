// Generated file based on escape.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strings from "@goscript/strings/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_entity from "./entity.gs.ts"
import "@goscript/strings/index.js"
import "@goscript/unicode/utf8/index.js"
import "./entity.gs.ts"

export let replacementTable: number[] = $.arrayValue([8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, 157, 382, 376])

export function __goscript_set_replacementTable(__goscriptValue: number[]): void {
	replacementTable = __goscriptValue
}

export function unescapeEntity(b: $.Slice<number>, dst: number, src: number, entity: globalThis.Map<string, number> | null, entity2: globalThis.Map<string, number[]> | null): [number, number] {
	let dst1: number = 0
	let src1: number = 0
	const attribute: boolean = false

	// http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html#consume-a-character-reference

	// i starts at 1 because we already know that s[0] == '&'.
	let i = 1
	let s: $.Slice<number> = $.goSlice(b, src, undefined)

	if ($.sliceLen(s) <= 1) {
		$.sliceElems(b!)[$.sliceSlot(b!, dst)] = $.arrayIndex(b!, src)
		return [dst + 1, src + 1]
	}

	if ($.arrayIndex(s!, i) == 35) {
		if ($.sliceLen(s) <= 3) {
			$.sliceElems(b!)[$.sliceSlot(b!, dst)] = $.arrayIndex(b!, src)
			return [dst + 1, src + 1]
		}
		i++
		let c = $.arrayIndex(s!, i)
		let hex = false
		if ((c == 120) || (c == 88)) {
			hex = true
			i++
		}

		let x = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(s); i < __goscriptSliceWindow0.length; ) {
			c = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number)
			i++
			if (hex) {
				if ((48 <= c) && (c <= 57)) {
					x = $.int(((((((globalThis.Math.imul(16, x)) + $.int(c, 32)) | 0)) - 48) | 0), 32)
					continue
				} else {
					if ((97 <= c) && (c <= 102)) {
						x = $.int((((((((((globalThis.Math.imul(16, x)) + $.int(c, 32)) | 0)) - 97) | 0)) + 10) | 0), 32)
						continue
					} else {
						if ((65 <= c) && (c <= 70)) {
							x = $.int((((((((((globalThis.Math.imul(16, x)) + $.int(c, 32)) | 0)) - 65) | 0)) + 10) | 0), 32)
							continue
						}
					}
				}
			} else {
				if ((48 <= c) && (c <= 57)) {
					x = $.int(((((((globalThis.Math.imul(10, x)) + $.int(c, 32)) | 0)) - 48) | 0), 32)
					continue
				}
			}
			if (c != 59) {
				i--
			}
			break
		}

		if (i <= 3) {
			$.sliceElems(b!)[$.sliceSlot(b!, dst)] = $.arrayIndex(b!, src)
			return [dst + 1, src + 1]
		}

		if ((0x80 <= x) && (x <= 0x9F)) {
			// Replace characters from Windows-1252 with UTF-8 equivalents.
			x = $.arrayIndex(replacementTable, ((x - 0x80) | 0))
		} else {
			if (((x == 0) || ((0xD800 <= x) && (x <= 0xDFFF))) || (x > 0x10FFFF)) {
				// Replace invalid characters with the replacement character.
				x = 65533
			}
		}

		return [dst + utf8.EncodeRune($.goSlice(b, dst, undefined), x), src + i]
	}

	// Consume the maximum number of characters possible, with the
	// consumed characters matching one of the named references.

	for (let __goscriptSliceWindow1 = $.sliceRange(s); i < __goscriptSliceWindow1.length; ) {
		let c = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as number)
		i++
		// Lower-cased characters are more common in entities, so we check for them first.
		if ((((97 <= c) && (c <= 122)) || ((65 <= c) && (c <= 90))) || ((48 <= c) && (c <= 57))) {
			continue
		}
		if (c != 59) {
			i--
		}
		break
	}

	let entityName: $.Slice<number> = $.goSlice(s, 1, i)
	if ($.sliceLen(entityName) == 0) {
	} else {
		if (((false && ($.arrayIndex(entityName!, $.sliceLen(entityName) - 1) != 59)) && ($.sliceLen(s) > i)) && ($.arrayIndex(s!, i) == 61)) {
		} else {
			{
				let x = $.mapGet<string, number, number>(entity, $.bytesToString(entityName), 0)[0]
				if (x != 0) {
					return [dst + utf8.EncodeRune($.goSlice(b, dst, undefined), x), src + i]
				} else {
					{
						let __goscriptShadow0 = $.cloneArrayValue($.mapGet<string, number[], number[]>(entity2, $.bytesToString(entityName), $.arrayValue(globalThis.Array.from({ length: 2 }, () => 0)))[0], /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32"), 2))
						if ($.arrayIndex(__goscriptShadow0, 0) != 0) {
							let __goscriptShadow1 = dst + utf8.EncodeRune($.goSlice(b, dst, undefined), $.arrayIndex(__goscriptShadow0, 0))
							return [__goscriptShadow1 + utf8.EncodeRune($.goSlice(b, __goscriptShadow1, undefined), $.arrayIndex(__goscriptShadow0, 1)), src + i]
						} else {
							if (!false) {
								let maxLen = $.sliceLen(entityName) - 1
								if (maxLen > 6) {
									maxLen = 6
								}
								for (let j = maxLen; j > 1; j--) {
									{
										let __goscriptShadow2 = $.mapGet<string, number, number>(entity, $.bytesToString($.goSlice(entityName, undefined, j)), 0)[0]
										if (__goscriptShadow2 != 0) {
											return [dst + utf8.EncodeRune($.goSlice(b, dst, undefined), __goscriptShadow2), (src + j) + 1]
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}

	let __goscriptAssign0_0: number = dst + i
	let __goscriptAssign0_1: number = src + i
	dst1 = __goscriptAssign0_0
	src1 = __goscriptAssign0_1
	$.copyByteRanges(b, dst, dst1, b, src, src1)
	return [dst1, src1]
}

export let htmlEscaper: strings.Replacer | $.VarRef<strings.Replacer> | null = strings.NewReplacer("&", "&amp;", "'", "&#39;", "<", "&lt;", ">", "&gt;", "\"", "&#34;")

export function __goscript_set_htmlEscaper(__goscriptValue: strings.Replacer | $.VarRef<strings.Replacer> | null): void {
	htmlEscaper = __goscriptValue
}

export function EscapeString(s: string): string {
	return strings.Replacer.prototype.Replace.call($.pointerValue<strings.Replacer>(htmlEscaper), s)
}

export async function UnescapeString(s: string): globalThis.Promise<string> {
	let i = strings.IndexByte(s, 38)

	if (i < 0) {
		return s
	}

	let b: $.Slice<number> = $.stringToBytes(s)
	let __goscriptTuple0: any = await __goscript_entity.entityMaps!()
	let entity: globalThis.Map<string, number> | null = __goscriptTuple0[0]
	let entity2: globalThis.Map<string, number[]> | null = __goscriptTuple0[1]
	let [dst, src] = unescapeEntity(b, i, i, entity, entity2)
	while ($.stringLen($.sliceStringOrBytes(s, src, undefined)) > 0) {
		if ($.indexString(s, src) == 38) {
			i = 0
		} else {
			i = strings.IndexByte($.sliceStringOrBytes(s, src, undefined), 38)
		}
		if (i < 0) {
			dst = dst + ($.copy($.goSlice(b, dst, undefined), $.sliceStringOrBytes(s, src, undefined)))
			break
		}

		if (i > 0) {
			$.copy($.goSlice(b, dst, undefined), $.sliceStringOrBytes(s, src, src + i))
		}
		let __goscriptTuple1: any = unescapeEntity(b, dst + i, src + i, entity, entity2)
		dst = __goscriptTuple1[0]
		src = __goscriptTuple1[1]
	}
	return $.bytesToString($.goSlice(b, undefined, dst))
}
