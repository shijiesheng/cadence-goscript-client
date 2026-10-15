// Generated file based on readerc.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_yamlh from "./yamlh.gs.ts"
import "@goscript/io/index.js"
import "./yamlh.gs.ts"

export const bom_UTF8: string = "\xef\xbb\xbf"

export const bom_UTF16LE: string = "\xff\xfe"

export const bom_UTF16BE: string = "\xfe\xff"

export function yaml_parser_set_reader_error(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, problem: string, offset: number, value: number): boolean {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser);
	;(parser$ as __goscript_yamlh.yaml_parser_t).error = 2;
	;(parser$ as __goscript_yamlh.yaml_parser_t).problem = problem;
	;(parser$ as __goscript_yamlh.yaml_parser_t).problem_offset = offset;
	;(parser$ as __goscript_yamlh.yaml_parser_t).problem_value = value
	return false
}

export async function yaml_parser_determine_encoding(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// Ensure that we had enough bytes in the raw buffer.
	while (!(parser$ as __goscript_yamlh.yaml_parser_t).eof && (($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer) - (parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos) < 3)) {
		if (!await yaml_parser_update_raw_buffer(parser)) {
			return false
		}
	}

	// Determine the encoding.
	let buf: $.Slice<number> = (parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer
	let pos = (parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos
	let avail = $.sliceLen(buf) - pos
	if (((avail >= 2) && ($.arrayIndex(buf!, pos) == $.indexByteString("\xff\xfe", 0))) && ($.arrayIndex(buf!, pos + 1) == $.indexByteString("\xff\xfe", 1))) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).encoding = 2;
		;(parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos = (parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos + (2);
		;(parser$ as __goscript_yamlh.yaml_parser_t).offset = (parser$ as __goscript_yamlh.yaml_parser_t).offset + (2)
	} else {
		if (((avail >= 2) && ($.arrayIndex(buf!, pos) == $.indexByteString("\xfe\xff", 0))) && ($.arrayIndex(buf!, pos + 1) == $.indexByteString("\xfe\xff", 1))) {
			;(parser$ as __goscript_yamlh.yaml_parser_t).encoding = 3;
			;(parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos = (parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos + (2);
			;(parser$ as __goscript_yamlh.yaml_parser_t).offset = (parser$ as __goscript_yamlh.yaml_parser_t).offset + (2)
		} else {
			if ((((avail >= 3) && ($.arrayIndex(buf!, pos) == $.indexByteString("\xef\xbb\xbf", 0))) && ($.arrayIndex(buf!, pos + 1) == $.indexByteString("\xef\xbb\xbf", 1))) && ($.arrayIndex(buf!, pos + 2) == $.indexByteString("\xef\xbb\xbf", 2))) {
				;(parser$ as __goscript_yamlh.yaml_parser_t).encoding = 1;
				;(parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos = (parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos + (3);
				;(parser$ as __goscript_yamlh.yaml_parser_t).offset = (parser$ as __goscript_yamlh.yaml_parser_t).offset + (3)
			} else {
				;(parser$ as __goscript_yamlh.yaml_parser_t).encoding = 1
			}
		}
	}
	return true
}

export async function yaml_parser_update_raw_buffer(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	let size_read = 0

	// Return if the raw buffer is full.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos == 0) && ($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer) == $.cap((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer))) {
		return true
	}

	// Return on EOF.
	if ((parser$ as __goscript_yamlh.yaml_parser_t).eof) {
		return true
	}

	// Move the remaining bytes in the raw buffer to the beginning.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos > 0) && ((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos < $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer))) {
		$.copy((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer, $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer, (parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos, undefined))
	}
	;(parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer) - (parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos);
	;(parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos = 0

	// Call the read handler to fill the buffer.
	let __goscriptTuple0: any = await (parser$ as __goscript_yamlh.yaml_parser_t).read_handler!(parser, $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer), $.cap((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer)))
	size_read = __goscriptTuple0[0]
	let err = __goscriptTuple0[1];
	;(parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer) + size_read)
	if ($.comparableEqual(err, io.EOF)) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).eof = true
	} else {
		if (err != null) {
			return yaml_parser_set_reader_error(parser, $.concatString("input error: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), (parser$ as __goscript_yamlh.yaml_parser_t).offset, -1)
		}
	}
	return true
}

export async function yaml_parser_update_buffer(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, length: number): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	if ((parser$ as __goscript_yamlh.yaml_parser_t).read_handler == null) {
		$.panic("read handler must be set")
	}

	// [Go] This function was changed to guarantee the requested length size at EOF.
	// The fact we need to do this is pretty awful, but the description above implies
	// for that to be the case, and there are tests

	// If the EOF flag is set and the raw buffer is empty, do nothing.
	if ((parser$ as __goscript_yamlh.yaml_parser_t).eof && ((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos == $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer))) {
	}

	// Return if the buffer contains enough characters.
	if ((parser$ as __goscript_yamlh.yaml_parser_t).unread >= length) {
		return true
	}

	// Determine the input encoding if it is not known yet.
	if ((parser$ as __goscript_yamlh.yaml_parser_t).encoding == 0) {
		if (!await yaml_parser_determine_encoding(parser)) {
			return false
		}
	}

	// Move the unread characters to the beginning of the buffer.
	let buffer_len = $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).buffer)
	if (((parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos > 0) && ((parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos < buffer_len)) {
		$.copy((parser$ as __goscript_yamlh.yaml_parser_t).buffer, $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos, undefined))
		buffer_len = buffer_len - ((parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos);
		;(parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos = 0
	} else {
		if ((parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos == buffer_len) {
			buffer_len = 0;
			;(parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos = 0
		}
	}

	// Open the whole buffer for writing, and cut it before returning.
	;(parser$ as __goscript_yamlh.yaml_parser_t).buffer = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).buffer, undefined, $.cap((parser$ as __goscript_yamlh.yaml_parser_t).buffer))

	// Fill the buffer until it has enough characters.
	let first = true
	while ((parser$ as __goscript_yamlh.yaml_parser_t).unread < length) {

		// Fill the raw buffer if necessary.
		if (!first || ((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos == $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer))) {
			if (!await yaml_parser_update_raw_buffer(parser)) {
				;(parser$ as __goscript_yamlh.yaml_parser_t).buffer = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).buffer, undefined, buffer_len)
				return false
			}
		}
		first = false

		// Decode the raw buffer.
		inner: while ((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos != $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer)) {
			let value: number = 0
			let width: number = 0

			let raw_unread = $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer) - (parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos

			// Decode the next character.
			switch ((parser$ as __goscript_yamlh.yaml_parser_t).encoding) {
				case 1:
				{
					let octet = $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos)
					switch ((true as boolean)) {
						case $.uint((octet & 0x80), 8) == 0x00:
						{
							width = 1
							break
						}
						case $.uint((octet & 0xE0), 8) == 0xC0:
						{
							width = 2
							break
						}
						case $.uint((octet & 0xF0), 8) == 0xE0:
						{
							width = 3
							break
						}
						case $.uint((octet & 0xF8), 8) == 0xF0:
						{
							width = 4
							break
						}
						default:
						{
							return yaml_parser_set_reader_error(parser, "invalid leading UTF-8 octet", (parser$ as __goscript_yamlh.yaml_parser_t).offset, $.int(octet))
							break
						}
					}

					// Check if the raw buffer contains an incomplete character.
					if (width > raw_unread) {
						if ((parser$ as __goscript_yamlh.yaml_parser_t).eof) {
							return yaml_parser_set_reader_error(parser, "incomplete UTF-8 octet sequence", (parser$ as __goscript_yamlh.yaml_parser_t).offset, -1)
						}
						break inner
					}

					// Decode the leading octet.
					switch ((true as boolean)) {
						case $.uint((octet & 0x80), 8) == 0x00:
						{
							value = $.int(octet & 0x7F, 32)
							break
						}
						case $.uint((octet & 0xE0), 8) == 0xC0:
						{
							value = $.int(octet & 0x1F, 32)
							break
						}
						case $.uint((octet & 0xF0), 8) == 0xE0:
						{
							value = $.int(octet & 0x0F, 32)
							break
						}
						case $.uint((octet & 0xF8), 8) == 0xF0:
						{
							value = $.int(octet & 0x07, 32)
							break
						}
						default:
						{
							value = 0
							break
						}
					}

					// Check and decode the trailing octets.
					for (let k = 1; k < width; k++) {
						octet = $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos + k)

						// Check if the octet is valid.
						if ($.uint((octet & 0xC0), 8) != 0x80) {
							return yaml_parser_set_reader_error(parser, "invalid trailing UTF-8 octet", (parser$ as __goscript_yamlh.yaml_parser_t).offset + k, $.int(octet))
						}

						// Decode the octet.
						value = $.int((((value << 6) + $.int(octet & 0x3F, 32)) | 0), 32)
					}

					// Check the length of the sequence against the value.
					switch ((true as boolean)) {
						case width == 1:
						{
							break
						}
						case (width == 2) && (value >= 0x80):
						{
							break
						}
						case (width == 3) && (value >= 0x800):
						{
							break
						}
						case (width == 4) && (value >= 0x10000):
						{
							break
						}
						default:
						{
							return yaml_parser_set_reader_error(parser, "invalid length of a UTF-8 sequence", (parser$ as __goscript_yamlh.yaml_parser_t).offset, -1)
							break
						}
					}

					// Check the range of the value.
					if (((value >= 0xD800) && (value <= 0xDFFF)) || (value > 0x10FFFF)) {
						return yaml_parser_set_reader_error(parser, "invalid Unicode character", (parser$ as __goscript_yamlh.yaml_parser_t).offset, $.int(value))
					}
					break
				}
				case 2:
				case 3:
				{
					let low: number = 0
					let high: number = 0
					if ((parser$ as __goscript_yamlh.yaml_parser_t).encoding == 2) {
						let __goscriptAssign0_0: number = 0
						let __goscriptAssign0_1: number = 1
						low = __goscriptAssign0_0
						high = __goscriptAssign0_1
					} else {
						let __goscriptAssign1_0: number = 1
						let __goscriptAssign1_1: number = 0
						low = __goscriptAssign1_0
						high = __goscriptAssign1_1
					}

					// The UTF-16 encoding is not as simple as one might
					// naively think.  Check RFC 2781
					// (http://www.ietf.org/rfc/rfc2781.txt).
					//
					// Normally, two subsequent bytes describe a Unicode
					// character.  However a special technique (called a
					// surrogate pair) is used for specifying character
					// values larger than 0xFFFF.
					//
					// A surrogate pair consists of two pseudo-characters:
					//      high surrogate area (0xD800-0xDBFF)
					//      low surrogate area (0xDC00-0xDFFF)
					//
					// The following formulas are used for decoding
					// and encoding characters using surrogate pairs:
					//
					//  U  = U' + 0x10000   (0x01 00 00 <= U <= 0x10 FF FF)
					//  U' = yyyyyyyyyyxxxxxxxxxx   (0 <= U' <= 0x0F FF FF)
					//  W1 = 110110yyyyyyyyyy
					//  W2 = 110111xxxxxxxxxx
					//
					// where U is the character value, W1 is the high surrogate
					// area, W2 is the low surrogate area.

					// Check for incomplete UTF-16 character.
					if (raw_unread < 2) {
						if ((parser$ as __goscript_yamlh.yaml_parser_t).eof) {
							return yaml_parser_set_reader_error(parser, "incomplete UTF-16 character", (parser$ as __goscript_yamlh.yaml_parser_t).offset, -1)
						}
						break inner
					}

					// Get the character.
					value = $.int((($.int($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos + low), 32) + ($.int($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos + high), 32) << 8)) | 0), 32)

					// Check for unexpected low surrogate area.
					if ($.int((value & 0xFC00), 32) == 0xDC00) {
						return yaml_parser_set_reader_error(parser, "unexpected low surrogate area", (parser$ as __goscript_yamlh.yaml_parser_t).offset, $.int(value))
					}

					// Check for a high surrogate area.
					if ($.int((value & 0xFC00), 32) == 0xD800) {
						width = 4

						// Check for incomplete surrogate pair.
						if (raw_unread < 4) {
							if ((parser$ as __goscript_yamlh.yaml_parser_t).eof) {
								return yaml_parser_set_reader_error(parser, "incomplete UTF-16 surrogate pair", (parser$ as __goscript_yamlh.yaml_parser_t).offset, -1)
							}
							break inner
						}

						// Get the next character.
						let value2 = $.int((($.int($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer!, ((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos + low) + 2), 32) + ($.int($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer!, ((parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos + high) + 2), 32) << 8)) | 0), 32)

						// Check for a low surrogate area.
						if ($.int((value2 & 0xFC00), 32) != 0xDC00) {
							return yaml_parser_set_reader_error(parser, "expected low surrogate area", (parser$ as __goscript_yamlh.yaml_parser_t).offset + 2, $.int(value2))
						}

						// Generate the value of the surrogate pair.
						value = $.int((((((0x10000 + ((value & 0x3FF) << 10)) | 0)) + (value2 & 0x3FF)) | 0), 32)
					} else {
						width = 2
					}
					break
				}
				default:
				{
					$.panic("impossible")
					break
				}
			}

			// Check if the character is in the allowed range:
			//      #x9 | #xA | #xD | [#x20-#x7E]               (8 bit)
			//      | #x85 | [#xA0-#xD7FF] | [#xE000-#xFFFD]    (16 bit)
			//      | [#x10000-#x10FFFF]                        (32 bit)
			switch ((true as boolean)) {
				case value == 0x09:
				{
					break
				}
				case value == 0x0A:
				{
					break
				}
				case value == 0x0D:
				{
					break
				}
				case (value >= 0x20) && (value <= 0x7E):
				{
					break
				}
				case value == 0x85:
				{
					break
				}
				case (value >= 0xA0) && (value <= 0xD7FF):
				{
					break
				}
				case (value >= 0xE000) && (value <= 0xFFFD):
				{
					break
				}
				case (value >= 0x10000) && (value <= 0x10FFFF):
				{
					break
				}
				default:
				{
					return yaml_parser_set_reader_error(parser, "control characters are not allowed", (parser$ as __goscript_yamlh.yaml_parser_t).offset, $.int(value))
					break
				}
			}

			// Move the raw pointers.
			;(parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos = (parser$ as __goscript_yamlh.yaml_parser_t).raw_buffer_pos + (width);
			;(parser$ as __goscript_yamlh.yaml_parser_t).offset = (parser$ as __goscript_yamlh.yaml_parser_t).offset + (width)

			// Finally put the character into the buffer.
			if (value <= 0x7F) {
				// 0000 0000-0000 007F . 0xxxxxxx
				$.sliceElems((parser$ as __goscript_yamlh.yaml_parser_t).buffer!)[$.sliceSlot((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, buffer_len + 0)] = $.uint(value, 8)
				buffer_len = buffer_len + (1)
			} else {
				if (value <= 0x7FF) {
					// 0000 0080-0000 07FF . 110xxxxx 10xxxxxx
					$.sliceElems((parser$ as __goscript_yamlh.yaml_parser_t).buffer!)[$.sliceSlot((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, buffer_len + 0)] = $.uint($.int(((0xC0 + (value >> 6)) | 0), 32), 8)
					$.sliceElems((parser$ as __goscript_yamlh.yaml_parser_t).buffer!)[$.sliceSlot((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, buffer_len + 1)] = $.uint($.int(((0x80 + (value & 0x3F)) | 0), 32), 8)
					buffer_len = buffer_len + (2)
				} else {
					if (value <= 0xFFFF) {
						// 0000 0800-0000 FFFF . 1110xxxx 10xxxxxx 10xxxxxx
						$.sliceElems((parser$ as __goscript_yamlh.yaml_parser_t).buffer!)[$.sliceSlot((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, buffer_len + 0)] = $.uint($.int(((0xE0 + (value >> 12)) | 0), 32), 8)
						$.sliceElems((parser$ as __goscript_yamlh.yaml_parser_t).buffer!)[$.sliceSlot((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, buffer_len + 1)] = $.uint($.int(((0x80 + ((value >> 6) & 0x3F)) | 0), 32), 8)
						$.sliceElems((parser$ as __goscript_yamlh.yaml_parser_t).buffer!)[$.sliceSlot((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, buffer_len + 2)] = $.uint($.int(((0x80 + (value & 0x3F)) | 0), 32), 8)
						buffer_len = buffer_len + (3)
					} else {
						// 0001 0000-0010 FFFF . 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
						$.sliceElems((parser$ as __goscript_yamlh.yaml_parser_t).buffer!)[$.sliceSlot((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, buffer_len + 0)] = $.uint($.int(((0xF0 + (value >> 18)) | 0), 32), 8)
						$.sliceElems((parser$ as __goscript_yamlh.yaml_parser_t).buffer!)[$.sliceSlot((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, buffer_len + 1)] = $.uint($.int(((0x80 + ((value >> 12) & 0x3F)) | 0), 32), 8)
						$.sliceElems((parser$ as __goscript_yamlh.yaml_parser_t).buffer!)[$.sliceSlot((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, buffer_len + 2)] = $.uint($.int(((0x80 + ((value >> 6) & 0x3F)) | 0), 32), 8)
						$.sliceElems((parser$ as __goscript_yamlh.yaml_parser_t).buffer!)[$.sliceSlot((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, buffer_len + 3)] = $.uint($.int(((0x80 + (value & 0x3F)) | 0), 32), 8)
						buffer_len = buffer_len + (4)
					}
				}
			}

			;(parser$ as __goscript_yamlh.yaml_parser_t).unread++
		}

		// On EOF, put NUL into the buffer and return.
		if ((parser$ as __goscript_yamlh.yaml_parser_t).eof) {
			$.sliceElems((parser$ as __goscript_yamlh.yaml_parser_t).buffer!)[$.sliceSlot((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, buffer_len)] = 0
			buffer_len++;
			;(parser$ as __goscript_yamlh.yaml_parser_t).unread++
			break
		}
	}
	// [Go] Read the documentation of this function above. To return true,
	// we need to have the given length in the buffer. Not doing that means
	// every single check that calls this function to make sure the buffer
	// has a given length is Go) panicking; or C) accessing invalid memory.
	// This happens here due to the EOF above breaking early.
	while (buffer_len < length) {
		$.sliceElems((parser$ as __goscript_yamlh.yaml_parser_t).buffer!)[$.sliceSlot((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, buffer_len)] = 0
		buffer_len++
	}
	;(parser$ as __goscript_yamlh.yaml_parser_t).buffer = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).buffer, undefined, buffer_len)
	return true
}

var __goscriptAwait: any
