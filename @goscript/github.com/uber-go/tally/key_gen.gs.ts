// Generated file based on key_gen.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

export const prefixSplitter: number = 43

export const keyPairSplitter: number = 44

export const keyNameSplitter: number = 61

export const nilString: string = ""

export function KeyForStringMap(stringMap: globalThis.Map<string, string> | null): string {
	return KeyForPrefixedStringMap("", stringMap)
}

export function KeyForPrefixedStringMap(prefix: string, stringMap: globalThis.Map<string, string> | null): string {
	return keyForPrefixedStringMaps(prefix, $.arrayToSlice<globalThis.Map<string, string> | null>([stringMap]))
}

export function keyForPrefixedStringMapsAsKey(buf: $.Slice<number>, prefix: string, maps: $.Slice<globalThis.Map<string, string> | null>): $.Slice<number> {
	// stack allocated
	let keys: $.Slice<string> = $.makeSlice<string>(0, 32, "string")
	for (let __goscriptRangeTarget0 = maps, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let m = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as globalThis.Map<string, string> | null)
		for (const [k, __rangeValue] of m?.entries() ?? []) {
			keys = $.appendOne(keys, k)
		}
	}

	insertionSort(keys)

	if (!$.stringEqual(prefix, "")) {
		buf = $.appendSlice(buf, $.stringToBytes(prefix), $.byteSliceHint)
		buf = $.append(buf, $.uint(43, 8), $.byteSliceHint)
	}

	let lastKey: string = ""
	for (let __goscriptRangeTarget1 = keys, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow0 = $.sliceRange(maps), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let k = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
		if ($.stringLen(lastKey) > 0) {
			if ($.stringEqual(k, lastKey)) {
				// Already wrote this key.
				continue
			}
			buf = $.append(buf, $.uint(44, 8), $.byteSliceHint)
		}
		lastKey = k

		buf = $.appendSlice(buf, $.stringToBytes(k), $.byteSliceHint)
		buf = $.append(buf, $.uint(61, 8), $.byteSliceHint)

		// Find and write the value for this key. Rightmost map takes
		// precedence.
		for (let j = __goscriptSliceWindow0.length - 1; j >= 0; j--) {
			{
				let [v, ok] = $.mapGet<string, string, string>(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] as globalThis.Map<string, string> | null), k, "")
				if (ok) {
					buf = $.appendSlice(buf, $.stringToBytes(v), $.byteSliceHint)
					break
				}
			}
		}
	}

	return buf
}

export function keyForPrefixedStringMaps(prefix: string, maps: $.Slice<globalThis.Map<string, string> | null>): string {
	return $.bytesToString(keyForPrefixedStringMapsAsKey($.makeSlice<number>(0, 256, "byte"), prefix, maps))
}

export function insertionSort(keys: $.Slice<string>): void {
	let n = $.sliceLen(keys)
	for (let __goscriptSliceWindow1 = $.sliceRange(keys), i = 1; i < n; i++) {
		for (let j = i; (j > 0) && ($.stringCompare(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j)] as string), ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j - 1)] as string)) < 0); j--) {
			let __goscriptAssign0_0: string = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j - 1)] as string)
			let __goscriptAssign0_1: string = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j)] as string);
			;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j)] = __goscriptAssign0_0;
			;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j - 1)] = __goscriptAssign0_1
		}
	}
}
