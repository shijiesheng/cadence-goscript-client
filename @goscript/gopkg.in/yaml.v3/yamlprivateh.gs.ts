// Generated file based on yamlprivateh.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

export const input_raw_buffer_size: number = 512

export const input_buffer_size: number = 1536

export const output_buffer_size: number = 128

export const output_raw_buffer_size: number = 258

export const initial_stack_size: number = 16

export const initial_queue_size: number = 16

export const initial_string_size: number = 16

export function is_alpha(b: $.Slice<number>, i: number): boolean {
	return ((((($.arrayIndex(b!, i) >= 48) && ($.arrayIndex(b!, i) <= 57)) || (($.arrayIndex(b!, i) >= 65) && ($.arrayIndex(b!, i) <= 90))) || (($.arrayIndex(b!, i) >= 97) && ($.arrayIndex(b!, i) <= 122))) || ($.arrayIndex(b!, i) == 95)) || ($.arrayIndex(b!, i) == 45)
}

export function is_digit(b: $.Slice<number>, i: number): boolean {
	return ($.arrayIndex(b!, i) >= 48) && ($.arrayIndex(b!, i) <= 57)
}

export function as_digit(b: $.Slice<number>, i: number): number {
	return $.int($.arrayIndex(b!, i)) - 48
}

export function is_hex(b: $.Slice<number>, i: number): boolean {
	return ((($.arrayIndex(b!, i) >= 48) && ($.arrayIndex(b!, i) <= 57)) || (($.arrayIndex(b!, i) >= 65) && ($.arrayIndex(b!, i) <= 70))) || (($.arrayIndex(b!, i) >= 97) && ($.arrayIndex(b!, i) <= 102))
}

export function as_hex(b: $.Slice<number>, i: number): number {
	let bi = $.arrayIndex(b!, i)
	if ((bi >= 65) && (bi <= 70)) {
		return ($.int(bi) - 65) + 10
	}
	if ((bi >= 97) && (bi <= 102)) {
		return ($.int(bi) - 97) + 10
	}
	return $.int(bi) - 48
}

export function is_ascii(b: $.Slice<number>, i: number): boolean {
	return $.arrayIndex(b!, i) <= 0x7F
}

export function is_printable(b: $.Slice<number>, i: number): boolean {
	return ((((((($.arrayIndex(b!, i) == 0x0A) || (($.arrayIndex(b!, i) >= 0x20) && ($.arrayIndex(b!, i) <= 0x7E))) || (($.arrayIndex(b!, i) == 0xC2) && ($.arrayIndex(b!, i + 1) >= 0xA0))) || (($.arrayIndex(b!, i) > 0xC2) && ($.arrayIndex(b!, i) < 0xED))) || (($.arrayIndex(b!, i) == 0xED) && ($.arrayIndex(b!, i + 1) < 0xA0))) || ($.arrayIndex(b!, i) == 0xEE)) || ((($.arrayIndex(b!, i) == 0xEF) && !(($.arrayIndex(b!, i + 1) == 0xBB) && ($.arrayIndex(b!, i + 2) == 0xBF))) && !(($.arrayIndex(b!, i + 1) == 0xBF) && (($.arrayIndex(b!, i + 2) == 0xBE) || ($.arrayIndex(b!, i + 2) == 0xBF)))))
}

export function is_z(b: $.Slice<number>, i: number): boolean {
	return $.arrayIndex(b!, i) == 0x00
}

export function is_bom(b: $.Slice<number>, i: number): boolean {
	return (($.arrayIndex(b!, 0) == 0xEF) && ($.arrayIndex(b!, 1) == 0xBB)) && ($.arrayIndex(b!, 2) == 0xBF)
}

export function is_space(b: $.Slice<number>, i: number): boolean {
	return $.arrayIndex(b!, i) == 32
}

export function is_tab(b: $.Slice<number>, i: number): boolean {
	return $.arrayIndex(b!, i) == 9
}

export function is_blank(b: $.Slice<number>, i: number): boolean {
	//return is_space(b, i) || is_tab(b, i)
	return ($.arrayIndex(b!, i) == 32) || ($.arrayIndex(b!, i) == 9)
}

export function is_break(b: $.Slice<number>, i: number): boolean {
	return ((((($.arrayIndex(b!, i) == 13) || ($.arrayIndex(b!, i) == 10)) || (($.arrayIndex(b!, i) == 0xC2) && ($.arrayIndex(b!, i + 1) == 0x85))) || ((($.arrayIndex(b!, i) == 0xE2) && ($.arrayIndex(b!, i + 1) == 0x80)) && ($.arrayIndex(b!, i + 2) == 0xA8))) || ((($.arrayIndex(b!, i) == 0xE2) && ($.arrayIndex(b!, i + 1) == 0x80)) && ($.arrayIndex(b!, i + 2) == 0xA9)))
}

export function is_crlf(b: $.Slice<number>, i: number): boolean {
	return ($.arrayIndex(b!, i) == 13) && ($.arrayIndex(b!, i + 1) == 10)
}

export function is_breakz(b: $.Slice<number>, i: number): boolean {
	//return is_break(b, i) || is_z(b, i)
	return (((((($.arrayIndex(b!, i) == 13) || ($.arrayIndex(b!, i) == 10)) || (($.arrayIndex(b!, i) == 0xC2) && ($.arrayIndex(b!, i + 1) == 0x85))) || ((($.arrayIndex(b!, i) == 0xE2) && ($.arrayIndex(b!, i + 1) == 0x80)) && ($.arrayIndex(b!, i + 2) == 0xA8))) || ((($.arrayIndex(b!, i) == 0xE2) && ($.arrayIndex(b!, i + 1) == 0x80)) && ($.arrayIndex(b!, i + 2) == 0xA9))) || ($.arrayIndex(b!, i) == 0))
}

export function is_spacez(b: $.Slice<number>, i: number): boolean {
	//return is_space(b, i) || is_breakz(b, i)
	return ((((((($.arrayIndex(b!, i) == 32) || ($.arrayIndex(b!, i) == 13)) || ($.arrayIndex(b!, i) == 10)) || (($.arrayIndex(b!, i) == 0xC2) && ($.arrayIndex(b!, i + 1) == 0x85))) || ((($.arrayIndex(b!, i) == 0xE2) && ($.arrayIndex(b!, i + 1) == 0x80)) && ($.arrayIndex(b!, i + 2) == 0xA8))) || ((($.arrayIndex(b!, i) == 0xE2) && ($.arrayIndex(b!, i + 1) == 0x80)) && ($.arrayIndex(b!, i + 2) == 0xA9))) || ($.arrayIndex(b!, i) == 0))
}

export function is_blankz(b: $.Slice<number>, i: number): boolean {
	//return is_blank(b, i) || is_breakz(b, i)
	return (((((((($.arrayIndex(b!, i) == 32) || ($.arrayIndex(b!, i) == 9)) || ($.arrayIndex(b!, i) == 13)) || ($.arrayIndex(b!, i) == 10)) || (($.arrayIndex(b!, i) == 0xC2) && ($.arrayIndex(b!, i + 1) == 0x85))) || ((($.arrayIndex(b!, i) == 0xE2) && ($.arrayIndex(b!, i + 1) == 0x80)) && ($.arrayIndex(b!, i + 2) == 0xA8))) || ((($.arrayIndex(b!, i) == 0xE2) && ($.arrayIndex(b!, i + 1) == 0x80)) && ($.arrayIndex(b!, i + 2) == 0xA9))) || ($.arrayIndex(b!, i) == 0))
}

export function width(b: number): number {
	// Don't replace these by a switch without first
	// confirming that it is being inlined.
	if ($.uint((b & 0x80), 8) == 0x00) {
		return 1
	}
	if ($.uint((b & 0xE0), 8) == 0xC0) {
		return 2
	}
	if ($.uint((b & 0xF0), 8) == 0xE0) {
		return 3
	}
	if ($.uint((b & 0xF8), 8) == 0xF0) {
		return 4
	}
	return 0
}
