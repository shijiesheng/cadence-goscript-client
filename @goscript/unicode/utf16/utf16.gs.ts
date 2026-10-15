// Generated file based on utf16.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

export const replacementChar: number = 65533

export const maxRune: number = 1114111

export const surr1: number = 55296

export const surr2: number = 56320

export const surr3: number = 57344

export const surrSelf: number = 65536

export function IsSurrogate(r: number): boolean {
	return (55296 <= r) && (r < 57344)
}

export function DecodeRune(r1: number, r2: number): number {
	if ((((55296 <= r1) && (r1 < 56320)) && (56320 <= r2)) && (r2 < 57344)) {
		return $.int((((((((r1 - 55296) | 0)) << 10) | (((r2 - 56320) | 0))) + 65536) | 0), 32)
	}
	return 65533
}

export function EncodeRune(r: number): [number, number] {
	let r1: number = 0
	let r2: number = 0
	if ((r < 65536) || (r > 1114111)) {
		return [65533, 65533]
	}
	r = $.int(r - (65536), 32)
	return [$.int(((55296 + ((r >> 10) & 0x3ff)) | 0), 32), $.int(((56320 + (r & 0x3ff)) | 0), 32)]
}

export function RuneLen(r: number): number {
	switch ((true as boolean)) {
		case (0 <= r) && (r < 55296):
		case (57344 <= r) && (r < 65536):
		{
			return 1
			break
		}
		case (65536 <= r) && (r <= 1114111):
		{
			return 2
			break
		}
		default:
		{
			return -1
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function Encode(s: $.Slice<number>): $.Slice<number> {
	let n = $.sliceLen(s)
	for (let __goscriptRangeTarget0 = s, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 32)
		if (v >= 65536) {
			n++
		}
	}

	let a: $.Slice<number> = $.makeSlice<number>(n, undefined, "number")
	n = 0
	for (let __goscriptRangeTarget1 = s, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow0 = $.sliceRange(a), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number), 32)
		switch (RuneLen(v)) {
			case 1:
			{
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, n)] = $.uint(v, 16)
				n++
				break
			}
			case 2:
			{
				let [r1, r2] = EncodeRune(v);
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, n)] = $.uint(r1, 16);
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, n + 1)] = $.uint(r2, 16)
				n = n + (2)
				break
			}
			default:
			{
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, n)] = 65533
				n++
				break
			}
		}
	}
	return $.goSlice(a, undefined, n)
}

export function AppendRune(a: $.Slice<number>, r: number): $.Slice<number> {
	// This function is inlineable for fast handling of ASCII.
	switch ((true as boolean)) {
		case (0 <= r) && (r < 55296):
		case (57344 <= r) && (r < 65536):
		{
			return $.appendOne(a, $.uint($.uint(r, 16), 16))
			break
		}
		case (65536 <= r) && (r <= 1114111):
		{
			let [r1, r2] = EncodeRune(r)
			return $.append(a, $.uint($.uint(r1, 16), 16), $.uint($.uint(r2, 16), 16))
			break
		}
	}
	return $.appendOne(a, $.uint(65533, 16))
}

export function Decode(s: $.Slice<number>): $.Slice<number> {
	// Preallocate capacity to hold up to 64 runes.
	// Decode inlines, so the allocation can live on the stack.
	let buf: $.Slice<number> = $.makeSlice<number>(0, 64, "number")
	return decode(s, buf)
}

export function decode(s: $.Slice<number>, buf: $.Slice<number>): $.Slice<number> {
	for (let __goscriptSliceWindow1 = $.sliceRange(s), i = 0; i < __goscriptSliceWindow1.length; i++) {
		let ar: number = 0
		{
			let r = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as number)
			switch ((true as boolean)) {
				case r < 55296:
				case 57344 <= r:
				{
					ar = $.int(r, 32)
					break
				}
				case ((((55296 <= r) && (r < 56320)) && ((i + 1) < __goscriptSliceWindow1.length)) && (56320 <= ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i + 1)] as number))) && (((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i + 1)] as number) < 57344):
				{
					ar = DecodeRune($.int(r, 32), $.int(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i + 1)] as number), 32))
					i++
					break
				}
				default:
				{
					ar = 65533
					break
				}
			}
		}
		buf = $.appendOne(buf, $.int(ar, 32))
	}
	return buf
}
