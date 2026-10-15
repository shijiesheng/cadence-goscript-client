// Generated file based on scannerc.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_apic from "./apic.gs.ts"

import * as __goscript_readerc from "./readerc.gs.ts"

import * as __goscript_yamlh from "./yamlh.gs.ts"

import * as __goscript_yamlprivateh from "./yamlprivateh.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "./apic.gs.ts"
import "./readerc.gs.ts"
import "./yamlh.gs.ts"
import "./yamlprivateh.gs.ts"

export const max_flow_level: number = 10000

export const max_indents: number = 10000

export const max_number_length: number = 2

export async function cache(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, length: number): globalThis.Promise<boolean> {
	// [Go] This was inlined: !cache(A, B) -> unread < B && !update(A, B)
	return ($.pointerValue<__goscript_yamlh.yaml_parser_t>(parser).unread >= length) || await __goscript_readerc.yaml_parser_update_buffer(parser, length)
}

export function skip(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): void {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	if (!__goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).newlines = 0
	}
	;(parser$ as __goscript_yamlh.yaml_parser_t).mark.index++;
	;(parser$ as __goscript_yamlh.yaml_parser_t).mark.column++;
	;(parser$ as __goscript_yamlh.yaml_parser_t).unread--;
	;(parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos = (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + (__goscript_yamlprivateh.width($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)))
}

export function skip_line(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): void {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	if (__goscript_yamlprivateh.is_crlf((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).mark.index = (parser$ as __goscript_yamlh.yaml_parser_t).mark.index + (2);
		;(parser$ as __goscript_yamlh.yaml_parser_t).mark.column = 0;
		;(parser$ as __goscript_yamlh.yaml_parser_t).mark.line++;
		;(parser$ as __goscript_yamlh.yaml_parser_t).unread = (parser$ as __goscript_yamlh.yaml_parser_t).unread - (2);
		;(parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos = (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + (2);
		;(parser$ as __goscript_yamlh.yaml_parser_t).newlines++
	} else {
		if (__goscript_yamlprivateh.is_break((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
			;(parser$ as __goscript_yamlh.yaml_parser_t).mark.index++;
			;(parser$ as __goscript_yamlh.yaml_parser_t).mark.column = 0;
			;(parser$ as __goscript_yamlh.yaml_parser_t).mark.line++;
			;(parser$ as __goscript_yamlh.yaml_parser_t).unread--;
			;(parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos = (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + (__goscript_yamlprivateh.width($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)));
			;(parser$ as __goscript_yamlh.yaml_parser_t).newlines++
		}
	}
}

export function read(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, s: $.Slice<number>): $.Slice<number> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	if (!__goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).newlines = 0
	}
	let w = __goscript_yamlprivateh.width($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos))
	if (w == 0) {
		$.panic("invalid character sequence")
	}
	if ($.sliceLen(s) == 0) {
		s = $.makeSlice<number>(0, 32, "byte")
	}
	if ((w == 1) && (($.sliceLen(s) + w) <= $.cap(s))) {
		s = $.goSlice(s, undefined, $.sliceLen(s) + 1)
		$.sliceElems(s!)[$.sliceSlot(s!, $.sliceLen(s) - 1)] = $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos);
		;(parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos++
	} else {
		s = $.appendSlice(s, $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + w), $.byteSliceHint);
		;(parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos = (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + (w)
	}
	;(parser$ as __goscript_yamlh.yaml_parser_t).mark.index++;
	;(parser$ as __goscript_yamlh.yaml_parser_t).mark.column++;
	;(parser$ as __goscript_yamlh.yaml_parser_t).unread--
	return s
}

export function read_line(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, s: $.Slice<number>): $.Slice<number> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	let buf: $.Slice<number> = (parser$ as __goscript_yamlh.yaml_parser_t).buffer
	let pos = (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos
	switch ((true as boolean)) {
		case ($.arrayIndex(buf!, pos) == 13) && ($.arrayIndex(buf!, pos + 1) == 10):
		{
			s = $.append(s, $.uint(10, 8), $.byteSliceHint);
			;(parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos = (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + (2);
			;(parser$ as __goscript_yamlh.yaml_parser_t).mark.index++;
			;(parser$ as __goscript_yamlh.yaml_parser_t).unread--
			break
		}
		case ($.arrayIndex(buf!, pos) == 13) || ($.arrayIndex(buf!, pos) == 10):
		{
			s = $.append(s, $.uint(10, 8), $.byteSliceHint);
			;(parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos = (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + (1)
			break
		}
		case ($.arrayIndex(buf!, pos) == 194) && ($.arrayIndex(buf!, pos + 1) == 133):
		{
			s = $.append(s, $.uint(10, 8), $.byteSliceHint);
			;(parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos = (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + (2)
			break
		}
		case (($.arrayIndex(buf!, pos) == 226) && ($.arrayIndex(buf!, pos + 1) == 128)) && (($.arrayIndex(buf!, pos + 2) == 168) || ($.arrayIndex(buf!, pos + 2) == 169)):
		{
			s = $.appendSlice(s, $.goSlice(buf, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos, pos + 3), $.byteSliceHint);
			;(parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos = (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + (3)
			break
		}
		default:
		{
			return s
			break
		}
	}
	;(parser$ as __goscript_yamlh.yaml_parser_t).mark.index++;
	;(parser$ as __goscript_yamlh.yaml_parser_t).mark.column = 0;
	;(parser$ as __goscript_yamlh.yaml_parser_t).mark.line++;
	;(parser$ as __goscript_yamlh.yaml_parser_t).unread--;
	;(parser$ as __goscript_yamlh.yaml_parser_t).newlines++
	return s
}

export async function yaml_parser_scan(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// Erase the token object.
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_token_t>(token), new __goscript_yamlh.yaml_token_t(undefined, true))

	// No tokens after STREAM-END or error.
	if ((parser$ as __goscript_yamlh.yaml_parser_t).stream_end_produced || ((parser$ as __goscript_yamlh.yaml_parser_t).error != 0)) {
		return true
	}

	// Ensure that the tokens queue contains enough tokens.
	if (!(parser$ as __goscript_yamlh.yaml_parser_t).token_available) {
		if (!await yaml_parser_fetch_more_tokens(parser)) {
			return false
		}
	}

	// Fetch the next token from the queue.
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_token_t>(token), $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).tokens!, (parser$ as __goscript_yamlh.yaml_parser_t).tokens_head));
	;(parser$ as __goscript_yamlh.yaml_parser_t).tokens_head++;
	;(parser$ as __goscript_yamlh.yaml_parser_t).tokens_parsed++;
	;(parser$ as __goscript_yamlh.yaml_parser_t).token_available = false

	if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 2) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).stream_end_produced = true
	}
	return true
}

export function yaml_parser_set_scanner_error(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, context: string, context_mark: __goscript_yamlh.yaml_mark_t, problem: string): boolean {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser);
	;(parser$ as __goscript_yamlh.yaml_parser_t).error = 3;
	;(parser$ as __goscript_yamlh.yaml_parser_t).context = context
	$.assignStruct((parser$ as __goscript_yamlh.yaml_parser_t).context_mark, context_mark);
	;(parser$ as __goscript_yamlh.yaml_parser_t).problem = problem
	$.assignStruct((parser$ as __goscript_yamlh.yaml_parser_t).problem_mark, (parser$ as __goscript_yamlh.yaml_parser_t).mark)
	return false
}

export function yaml_parser_set_scanner_tag_error(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, directive: boolean, context_mark: __goscript_yamlh.yaml_mark_t, problem: string): boolean {
	let context = "while parsing a tag"
	if (directive) {
		context = "while parsing a %TAG directive"
	}
	return yaml_parser_set_scanner_error(parser, context, context_mark, problem)
}

export async function trace(args: $.Slice<any>): globalThis.Promise<(() => void) | null> {
	let pargs: $.Slice<any> = $.appendSlice($.arrayToSlice<any>(["+++"]), args, $.appendZeros.nil)
	await fmt.Println(...(pargs ?? []))
	pargs = $.appendSlice($.arrayToSlice<any>(["---"]), args, $.appendZeros.nil)
	return $.functionValue(async (): globalThis.Promise<void> => {
		await fmt.Println(...(pargs ?? []))
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
}

export async function yaml_parser_fetch_more_tokens(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// While we need more tokens to fetch, do it.
	while (true) {
		// [Go] The comment parsing logic requires a lookahead of two tokens
		// so that foot comments may be parsed in time of associating them
		// with the tokens that are parsed before them, and also for line
		// comments to be transformed into head comments in some edge cases.
		if ((parser$ as __goscript_yamlh.yaml_parser_t).tokens_head < ($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).tokens) - 2)) {
			// If a potential simple key is at the head position, we need to fetch
			// the next token to disambiguate it.
			let [head_tok_idx, ok] = $.mapGet<number, number, number>((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys_by_tok, (parser$ as __goscript_yamlh.yaml_parser_t).tokens_parsed, 0)
			if (!ok) {
				break
			} else {
				{
					let [valid, __goscriptShadow0] = yaml_simple_key_is_valid(parser, $.indexRef((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys!, head_tok_idx))
					if (!__goscriptShadow0) {
						return false
					} else {
						if (!valid) {
							break
						}
					}
				}
			}
		}
		// Fetch the next token.
		if (!await yaml_parser_fetch_next_token(parser)) {
			return false
		}
	}

	;(parser$ as __goscript_yamlh.yaml_parser_t).token_available = true
	return true
}

export async function yaml_parser_fetch_next_token(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): globalThis.Promise<boolean> {
	let ok: boolean = false
	await using __defer = new $.AsyncDisposableStack()
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// Ensure that the buffer is initialized.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
		return false
	}

	// Check if we just started scanning.  Fetch STREAM-START then.
	if (!(parser$ as __goscript_yamlh.yaml_parser_t).stream_start_produced) {
		return yaml_parser_fetch_stream_start(parser)
	}

	let scan_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()

	// Eat whitespaces and comments until we reach the next token.
	if (!await yaml_parser_scan_to_next_token(parser)) {
		return false
	}

	// [Go] While unrolling indents, transform the head comments of prior
	// indentation levels observed after scan_start into foot comments at
	// the respective indexes.

	// Check the indentation level against the current column.
	if (!yaml_parser_unroll_indent(parser, (parser$ as __goscript_yamlh.yaml_parser_t).mark.column, scan_mark)) {
		return false
	}

	// Ensure that the buffer contains at least 4 characters.  4 is the length
	// of the longest indicators ('--- ' and '... ').
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 4) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 4)) {
		return false
	}

	// Is it the end of the stream?
	if (__goscript_yamlprivateh.is_z((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		return yaml_parser_fetch_stream_end(parser)
	}

	// Is it a directive?
	if (((parser$ as __goscript_yamlh.yaml_parser_t).mark.column == 0) && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 37)) {
		return yaml_parser_fetch_directive(parser)
	}

	let buf: $.Slice<number> = (parser$ as __goscript_yamlh.yaml_parser_t).buffer
	let pos = (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos

	// Is it the document start indicator?
	if ((((((parser$ as __goscript_yamlh.yaml_parser_t).mark.column == 0) && ($.arrayIndex(buf!, pos) == 45)) && ($.arrayIndex(buf!, pos + 1) == 45)) && ($.arrayIndex(buf!, pos + 2) == 45)) && __goscript_yamlprivateh.is_blankz(buf, pos + 3)) {
		return yaml_parser_fetch_document_indicator(parser, 5)
	}

	// Is it the document end indicator?
	if ((((((parser$ as __goscript_yamlh.yaml_parser_t).mark.column == 0) && ($.arrayIndex(buf!, pos) == 46)) && ($.arrayIndex(buf!, pos + 1) == 46)) && ($.arrayIndex(buf!, pos + 2) == 46)) && __goscript_yamlprivateh.is_blankz(buf, pos + 3)) {
		return yaml_parser_fetch_document_indicator(parser, 6)
	}

	let comment_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()
	if (($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).tokens) > 0) && ((((parser$ as __goscript_yamlh.yaml_parser_t).flow_level == 0) && ($.arrayIndex(buf!, pos) == 58)) || (((parser$ as __goscript_yamlh.yaml_parser_t).flow_level > 0) && ($.arrayIndex(buf!, pos) == 44)))) {
		// Associate any following comments with the prior token.
		comment_mark = $.assignStruct(comment_mark, $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).tokens!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).tokens) - 1).start_mark)
	}
	__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
		if (!ok) {
			return
		}
		if (($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).tokens) > 0) && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).tokens!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).tokens) - 1).typ == 14)) {
			// Sequence indicators alone have no line comments. It becomes
			// a head comment for whatever follows.
			return
		}
		if (!await yaml_parser_scan_line_comment(parser, (comment_mark).clone())) {
			ok = false
			return
		}
	})() })

	// Is it the flow sequence start indicator?
	if ($.arrayIndex(buf!, pos) == 91) {
		const __goscriptReturn0: boolean = await yaml_parser_fetch_flow_collection_start(parser, 10)
		ok = __goscriptReturn0
		await __defer.dispose()
		return ok
	}

	// Is it the flow mapping start indicator?
	if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 123) {
		const __goscriptReturn1: boolean = await yaml_parser_fetch_flow_collection_start(parser, 12)
		ok = __goscriptReturn1
		await __defer.dispose()
		return ok
	}

	// Is it the flow sequence end indicator?
	if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 93) {
		const __goscriptReturn2: boolean = yaml_parser_fetch_flow_collection_end(parser, 11)
		ok = __goscriptReturn2
		await __defer.dispose()
		return ok
	}

	// Is it the flow mapping end indicator?
	if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 125) {
		const __goscriptReturn3: boolean = yaml_parser_fetch_flow_collection_end(parser, 13)
		ok = __goscriptReturn3
		await __defer.dispose()
		return ok
	}

	// Is it the flow entry indicator?
	if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 44) {
		const __goscriptReturn4: boolean = yaml_parser_fetch_flow_entry(parser)
		ok = __goscriptReturn4
		await __defer.dispose()
		return ok
	}

	// Is it the block entry indicator?
	if (($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 45) && __goscript_yamlprivateh.is_blankz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 1)) {
		const __goscriptReturn5: boolean = await yaml_parser_fetch_block_entry(parser)
		ok = __goscriptReturn5
		await __defer.dispose()
		return ok
	}

	// Is it the key indicator?
	if (($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 63) && (((parser$ as __goscript_yamlh.yaml_parser_t).flow_level > 0) || __goscript_yamlprivateh.is_blankz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 1))) {
		const __goscriptReturn6: boolean = await yaml_parser_fetch_key(parser)
		ok = __goscriptReturn6
		await __defer.dispose()
		return ok
	}

	// Is it the value indicator?
	if (($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 58) && (((parser$ as __goscript_yamlh.yaml_parser_t).flow_level > 0) || __goscript_yamlprivateh.is_blankz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 1))) {
		const __goscriptReturn7: boolean = await yaml_parser_fetch_value(parser)
		ok = __goscriptReturn7
		await __defer.dispose()
		return ok
	}

	// Is it an alias?
	if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 42) {
		const __goscriptReturn8: boolean = await yaml_parser_fetch_anchor(parser, 18)
		ok = __goscriptReturn8
		await __defer.dispose()
		return ok
	}

	// Is it an anchor?
	if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 38) {
		const __goscriptReturn9: boolean = await yaml_parser_fetch_anchor(parser, 19)
		ok = __goscriptReturn9
		await __defer.dispose()
		return ok
	}

	// Is it a tag?
	if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 33) {
		const __goscriptReturn10: boolean = await yaml_parser_fetch_tag(parser)
		ok = __goscriptReturn10
		await __defer.dispose()
		return ok
	}

	// Is it a literal scalar?
	if (($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 124) && ((parser$ as __goscript_yamlh.yaml_parser_t).flow_level == 0)) {
		const __goscriptReturn11: boolean = await yaml_parser_fetch_block_scalar(parser, true)
		ok = __goscriptReturn11
		await __defer.dispose()
		return ok
	}

	// Is it a folded scalar?
	if (($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 62) && ((parser$ as __goscript_yamlh.yaml_parser_t).flow_level == 0)) {
		const __goscriptReturn12: boolean = await yaml_parser_fetch_block_scalar(parser, false)
		ok = __goscriptReturn12
		await __defer.dispose()
		return ok
	}

	// Is it a single-quoted scalar?
	if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 39) {
		const __goscriptReturn13: boolean = await yaml_parser_fetch_flow_scalar(parser, true)
		ok = __goscriptReturn13
		await __defer.dispose()
		return ok
	}

	// Is it a double-quoted scalar?
	if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 34) {
		const __goscriptReturn14: boolean = await yaml_parser_fetch_flow_scalar(parser, false)
		ok = __goscriptReturn14
		await __defer.dispose()
		return ok
	}

	// Is it a plain scalar?
	//
	// A plain scalar may start with any non-blank characters except
	//
	//      '-', '?', ':', ',', '[', ']', '{', '}',
	//      '#', '&', '*', '!', '|', '>', '\'', '\"',
	//      '%', '@', '`'.
	//
	// In the block context (and, for the '-' indicator, in the flow context
	// too), it may also start with the characters
	//
	//      '-', '?', ':'
	//
	// if it is followed by a non-space character.
	//
	// The last rule is more restrictive than the specification requires.
	// [Go] TODO Make this logic more reasonable.
	//switch parser.buffer[parser.buffer_pos] {
	//case '-', '?', ':', ',', '?', '-', ',', ':', ']', '[', '}', '{', '&', '#', '!', '*', '>', '|', '"', '\'', '@', '%', '-', '`':
	//}
	if ((!(((((((((((((((((((__goscript_yamlprivateh.is_blankz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 45)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 63)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 58)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 44)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 91)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 93)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 123)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 125)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 35)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 38)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 42)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 33)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 124)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 62)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 39)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 34)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 37)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 64)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 96)) || (($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 45) && !__goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 1))) || ((((parser$ as __goscript_yamlh.yaml_parser_t).flow_level == 0) && (($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 63) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 58))) && !__goscript_yamlprivateh.is_blankz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 1))) {
		const __goscriptReturn15: boolean = await yaml_parser_fetch_plain_scalar(parser)
		ok = __goscriptReturn15
		await __defer.dispose()
		return ok
	}

	// If we don't determine the token type so far, it is an error.
	const __goscriptReturn16: boolean = yaml_parser_set_scanner_error(parser, "while scanning for the next token", ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone(), "found character that cannot start any token")
	ok = __goscriptReturn16
	await __defer.dispose()
	return ok
	throw new globalThis.Error("goscript: unreachable return")
}

export function yaml_simple_key_is_valid(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, simple_key: __goscript_yamlh.yaml_simple_key_t | $.VarRef<__goscript_yamlh.yaml_simple_key_t> | null): [boolean, boolean] {
	let valid: boolean = false
	let ok: boolean = false
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	const simple_key$: __goscript_yamlh.yaml_simple_key_t = simple_key == null ? $.pointerTarget<__goscript_yamlh.yaml_simple_key_t>(simple_key) : (simple_key as any).__isVarRef === true ? (simple_key as any).value : (simple_key as any).__goValue === undefined ? (simple_key as any) : $.pointerTarget<__goscript_yamlh.yaml_simple_key_t>(simple_key)
	if (!(simple_key$ as __goscript_yamlh.yaml_simple_key_t).possible) {
		return [false, true]
	}

	// The 1.2 specification says:
	//
	//     "If the ? indicator is omitted, parsing needs to see past the
	//     implicit key to recognize it as such. To limit the amount of
	//     lookahead required, the “:” indicator must appear at most 1024
	//     Unicode characters beyond the start of the key. In addition, the key
	//     is restricted to a single line."
	//
	if (((simple_key$ as __goscript_yamlh.yaml_simple_key_t).mark.line < (parser$ as __goscript_yamlh.yaml_parser_t).mark.line) || (((simple_key$ as __goscript_yamlh.yaml_simple_key_t).mark.index + 1024) < (parser$ as __goscript_yamlh.yaml_parser_t).mark.index)) {
		// Check if the potential simple key to be removed is required.
		if ((simple_key$ as __goscript_yamlh.yaml_simple_key_t).required) {
			return [false, yaml_parser_set_scanner_error(parser, "while scanning a simple key", ((simple_key$ as __goscript_yamlh.yaml_simple_key_t).mark).clone(), "could not find expected ':'")]
		}
		;(simple_key$ as __goscript_yamlh.yaml_simple_key_t).possible = false
		return [false, true]
	}
	return [true, true]
}

export function yaml_parser_save_simple_key(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): boolean {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// A simple key is required at the current position if the scanner is in
	// the block context and the current column coincides with the indentation
	// level.

	let required = ((parser$ as __goscript_yamlh.yaml_parser_t).flow_level == 0) && ((parser$ as __goscript_yamlh.yaml_parser_t).indent == (parser$ as __goscript_yamlh.yaml_parser_t).mark.column)

	//
	// If the current position may start a simple key, save it.
	//
	if ((parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed) {
		let simple_key = new __goscript_yamlh.yaml_simple_key_t({possible: true, required: required, token_number: (parser$ as __goscript_yamlh.yaml_parser_t).tokens_parsed + ($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).tokens) - (parser$ as __goscript_yamlh.yaml_parser_t).tokens_head), mark: (parser$ as __goscript_yamlh.yaml_parser_t).mark}, true)

		if (!yaml_parser_remove_simple_key(parser)) {
			return false
		}
		$.assignStruct($.sliceElems((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys!)[$.sliceSlot((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys) - 1)], simple_key)
		$.mapSet((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys_by_tok, simple_key.token_number, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys) - 1)
	}
	return true
}

export function yaml_parser_remove_simple_key(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): boolean {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	let i = $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys) - 1
	if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys!, i).possible) {
		// If the key is required, it is an error.
		if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys!, i).required) {
			return yaml_parser_set_scanner_error(parser, "while scanning a simple key", ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys!, i).mark).clone(), "could not find expected ':'")
		}
		// Remove the key from the stack.
		$.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys!, i).possible = false
		$.deleteMapEntry((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys_by_tok, $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys!, i).token_number)
	}
	return true
}

export async function yaml_parser_increase_flow_level(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser);
	// Reset the simple key on the next level.
	;(parser$ as __goscript_yamlh.yaml_parser_t).simple_keys = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys, new __goscript_yamlh.yaml_simple_key_t({possible: false, required: false, token_number: (parser$ as __goscript_yamlh.yaml_parser_t).tokens_parsed + ($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).tokens) - (parser$ as __goscript_yamlh.yaml_parser_t).tokens_head), mark: (parser$ as __goscript_yamlh.yaml_parser_t).mark}, true));

	// Increase the flow level.
	;(parser$ as __goscript_yamlh.yaml_parser_t).flow_level++
	if ((parser$ as __goscript_yamlh.yaml_parser_t).flow_level > 10000) {
		return yaml_parser_set_scanner_error(parser, "while increasing flow level", ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys) - 1).mark).clone(), await fmt.Sprintf("exceeded max depth of %d", $.basicInterfaceValue(10000, "int")))
	}
	return true
}

export function yaml_parser_decrease_flow_level(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): boolean {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	if ((parser$ as __goscript_yamlh.yaml_parser_t).flow_level > 0) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).flow_level--
		let last = $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys) - 1
		$.deleteMapEntry((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys_by_tok, $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys!, last).token_number);
		;(parser$ as __goscript_yamlh.yaml_parser_t).simple_keys = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys, undefined, last)
	}
	return true
}

export async function yaml_parser_roll_indent(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, column: number, _number: number, typ: __goscript_yamlh.yaml_token_type_t, mark: __goscript_yamlh.yaml_mark_t): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// In the flow context, do nothing.
	if ((parser$ as __goscript_yamlh.yaml_parser_t).flow_level > 0) {
		return true
	}

	if ((parser$ as __goscript_yamlh.yaml_parser_t).indent < column) {
		// Push the current indentation level to the stack and set the new
		// indentation level.
		;(parser$ as __goscript_yamlh.yaml_parser_t).indents = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).indents, (parser$ as __goscript_yamlh.yaml_parser_t).indent);
		;(parser$ as __goscript_yamlh.yaml_parser_t).indent = column
		if ($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).indents) > 10000) {
			return yaml_parser_set_scanner_error(parser, "while increasing indent level", ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys) - 1).mark).clone(), await fmt.Sprintf("exceeded max depth of %d", $.basicInterfaceValue(10000, "int")))
		}

		// Create a token and insert it into the queue.
		let token = $.varRef(new __goscript_yamlh.yaml_token_t({typ: typ, start_mark: mark, end_mark: mark}, true))
		if (_number > -1) {
			_number = _number - ((parser$ as __goscript_yamlh.yaml_parser_t).tokens_parsed)
		}
		__goscript_apic.yaml_insert_token(parser, _number, token)
	}
	return true
}

export function yaml_parser_unroll_indent(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, column: number, scan_mark: __goscript_yamlh.yaml_mark_t): boolean {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// In the flow context, do nothing.
	if ((parser$ as __goscript_yamlh.yaml_parser_t).flow_level > 0) {
		return true
	}

	let block_mark = (scan_mark).clone()
	block_mark.index--

	// Loop through the indentation levels in the stack.
	while ((parser$ as __goscript_yamlh.yaml_parser_t).indent > column) {

		// [Go] Reposition the end token before potential following
		//      foot comments of parent blocks. For that, search
		//      backwards for recent comments that were at the same
		//      indent as the block that is ending now.
		let stop_index = block_mark.index
		for (let i = $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).comments) - 1; i >= 0; i--) {
			let comment: __goscript_yamlh.yaml_comment_t | $.VarRef<__goscript_yamlh.yaml_comment_t> | null = $.indexRef((parser$ as __goscript_yamlh.yaml_parser_t).comments!, i)
			let comment$: __goscript_yamlh.yaml_comment_t = comment == null ? $.pointerTarget<__goscript_yamlh.yaml_comment_t>(comment) : (comment as any).__isVarRef === true ? (comment as any).value : (comment as any).__goValue === undefined ? (comment as any) : $.pointerTarget<__goscript_yamlh.yaml_comment_t>(comment)

			if ((comment$ as __goscript_yamlh.yaml_comment_t).end_mark.index < stop_index) {
				// Don't go back beyond the start of the comment/whitespace scan, unless column < 0.
				// If requested indent column is < 0, then the document is over and everything else
				// is a foot anyway.
				break
			}
			if ((comment$ as __goscript_yamlh.yaml_comment_t).start_mark.column == ((parser$ as __goscript_yamlh.yaml_parser_t).indent + 1)) {
				// This is a good match. But maybe there's a former comment
				// at that same indent level, so keep searching.
				block_mark = $.assignStruct(block_mark, (comment$ as __goscript_yamlh.yaml_comment_t).start_mark)
			}

			// While the end of the former comment matches with
			// the start of the following one, we know there's
			// nothing in between and scanning is still safe.
			stop_index = (comment$ as __goscript_yamlh.yaml_comment_t).scan_mark.index
		}

		// Create a token and append it to the queue.
		let token = $.varRef(new __goscript_yamlh.yaml_token_t({typ: 9, start_mark: block_mark, end_mark: block_mark}, true))
		__goscript_apic.yaml_insert_token(parser, -1, token);

		// Pop the indentation level.
		;(parser$ as __goscript_yamlh.yaml_parser_t).indent = $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).indents!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).indents) - 1);
		;(parser$ as __goscript_yamlh.yaml_parser_t).indents = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).indents, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).indents) - 1)
	}
	return true
}

export function yaml_parser_fetch_stream_start(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): boolean {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser);

	// Set the initial indentation.
	;(parser$ as __goscript_yamlh.yaml_parser_t).indent = -1;

	// Initialize the simple key stack.
	;(parser$ as __goscript_yamlh.yaml_parser_t).simple_keys = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys, new __goscript_yamlh.yaml_simple_key_t(undefined, true));

	;(parser$ as __goscript_yamlh.yaml_parser_t).simple_keys_by_tok = $.makeMap<number, number>();

	// A simple key is allowed at the beginning of the stream.
	;(parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed = true;

	// We have started.
	;(parser$ as __goscript_yamlh.yaml_parser_t).stream_start_produced = true

	// Create the STREAM-START token and append it to the queue.
	let token = $.varRef(new __goscript_yamlh.yaml_token_t({typ: 1, start_mark: (parser$ as __goscript_yamlh.yaml_parser_t).mark, end_mark: (parser$ as __goscript_yamlh.yaml_parser_t).mark, encoding: (parser$ as __goscript_yamlh.yaml_parser_t).encoding}, true))
	__goscript_apic.yaml_insert_token(parser, -1, token)
	return true
}

export function yaml_parser_fetch_stream_end(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): boolean {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)

	// Force new line.
	if ((parser$ as __goscript_yamlh.yaml_parser_t).mark.column != 0) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).mark.column = 0;
		;(parser$ as __goscript_yamlh.yaml_parser_t).mark.line++
	}

	// Reset the indentation level.
	if (!yaml_parser_unroll_indent(parser, -1, ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone())) {
		return false
	}

	// Reset simple keys.
	if (!yaml_parser_remove_simple_key(parser)) {
		return false
	}

	;(parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed = false

	// Create the STREAM-END token and append it to the queue.
	let token = $.varRef(new __goscript_yamlh.yaml_token_t({typ: 2, start_mark: (parser$ as __goscript_yamlh.yaml_parser_t).mark, end_mark: (parser$ as __goscript_yamlh.yaml_parser_t).mark}, true))
	__goscript_apic.yaml_insert_token(parser, -1, token)
	return true
}

export async function yaml_parser_fetch_directive(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// Reset the indentation level.
	if (!yaml_parser_unroll_indent(parser, -1, ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone())) {
		return false
	}

	// Reset simple keys.
	if (!yaml_parser_remove_simple_key(parser)) {
		return false
	}

	;(parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed = false

	// Create the YAML-DIRECTIVE or TAG-DIRECTIVE token.
	let token = $.varRef(new __goscript_yamlh.yaml_token_t(undefined, true))
	if (!await yaml_parser_scan_directive(parser, token)) {
		return false
	}
	// Append the token to the queue.
	__goscript_apic.yaml_insert_token(parser, -1, token)
	return true
}

export function yaml_parser_fetch_document_indicator(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, typ: __goscript_yamlh.yaml_token_type_t): boolean {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// Reset the indentation level.
	if (!yaml_parser_unroll_indent(parser, -1, ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone())) {
		return false
	}

	// Reset simple keys.
	if (!yaml_parser_remove_simple_key(parser)) {
		return false
	}

	;(parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed = false

	// Consume the token.
	let start_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()

	skip(parser)
	skip(parser)
	skip(parser)

	let end_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()

	// Create the DOCUMENT-START or DOCUMENT-END token.
	let token = $.varRef(new __goscript_yamlh.yaml_token_t({typ: typ, start_mark: start_mark, end_mark: end_mark}, true))
	// Append the token to the queue.
	__goscript_apic.yaml_insert_token(parser, -1, token)
	return true
}

export async function yaml_parser_fetch_flow_collection_start(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, typ: __goscript_yamlh.yaml_token_type_t): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)

	// The indicators '[' and '{' may start a simple key.
	if (!yaml_parser_save_simple_key(parser)) {
		return false
	}

	// Increase the flow level.
	if (!await yaml_parser_increase_flow_level(parser)) {
		return false
	}

	// A simple key may follow the indicators '[' and '{'.
	;(parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed = true

	// Consume the token.
	let start_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()
	skip(parser)
	let end_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()

	// Create the FLOW-SEQUENCE-START of FLOW-MAPPING-START token.
	let token = $.varRef(new __goscript_yamlh.yaml_token_t({typ: typ, start_mark: start_mark, end_mark: end_mark}, true))
	// Append the token to the queue.
	__goscript_apic.yaml_insert_token(parser, -1, token)
	return true
}

export function yaml_parser_fetch_flow_collection_end(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, typ: __goscript_yamlh.yaml_token_type_t): boolean {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// Reset any potential simple key on the current flow level.
	if (!yaml_parser_remove_simple_key(parser)) {
		return false
	}

	// Decrease the flow level.
	if (!yaml_parser_decrease_flow_level(parser)) {
		return false
	}

	// No simple keys after the indicators ']' and '}'.
	;(parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed = false

	// Consume the token.

	let start_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()
	skip(parser)
	let end_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()

	// Create the FLOW-SEQUENCE-END of FLOW-MAPPING-END token.
	let token = $.varRef(new __goscript_yamlh.yaml_token_t({typ: typ, start_mark: start_mark, end_mark: end_mark}, true))
	// Append the token to the queue.
	__goscript_apic.yaml_insert_token(parser, -1, token)
	return true
}

export function yaml_parser_fetch_flow_entry(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): boolean {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// Reset any potential simple keys on the current flow level.
	if (!yaml_parser_remove_simple_key(parser)) {
		return false
	}

	// Simple keys are allowed after ','.
	;(parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed = true

	// Consume the token.
	let start_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()
	skip(parser)
	let end_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()

	// Create the FLOW-ENTRY token and append it to the queue.
	let token = $.varRef(new __goscript_yamlh.yaml_token_t({typ: 15, start_mark: start_mark, end_mark: end_mark}, true))
	__goscript_apic.yaml_insert_token(parser, -1, token)
	return true
}

export async function yaml_parser_fetch_block_entry(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// Check if the scanner is in the block context.
	if ((parser$ as __goscript_yamlh.yaml_parser_t).flow_level == 0) {
		// Check if we are allowed to start a new entry.
		if (!(parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed) {
			return yaml_parser_set_scanner_error(parser, "", ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone(), "block sequence entries are not allowed in this context")
		}
		// Add the BLOCK-SEQUENCE-START token if needed.
		if (!await yaml_parser_roll_indent(parser, (parser$ as __goscript_yamlh.yaml_parser_t).mark.column, -1, 7, ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone())) {
			return false
		}
	}

	// Reset any potential simple keys on the current flow level.
	if (!yaml_parser_remove_simple_key(parser)) {
		return false
	}

	// Simple keys are allowed after '-'.
	;(parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed = true

	// Consume the token.
	let start_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()
	skip(parser)
	let end_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()

	// Create the BLOCK-ENTRY token and append it to the queue.
	let token = $.varRef(new __goscript_yamlh.yaml_token_t({typ: 14, start_mark: start_mark, end_mark: end_mark}, true))
	__goscript_apic.yaml_insert_token(parser, -1, token)
	return true
}

export async function yaml_parser_fetch_key(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)

	// In the block context, additional checks are required.
	if ((parser$ as __goscript_yamlh.yaml_parser_t).flow_level == 0) {
		// Check if we are allowed to start a new key (not nessesary simple).
		if (!(parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed) {
			return yaml_parser_set_scanner_error(parser, "", ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone(), "mapping keys are not allowed in this context")
		}
		// Add the BLOCK-MAPPING-START token if needed.
		if (!await yaml_parser_roll_indent(parser, (parser$ as __goscript_yamlh.yaml_parser_t).mark.column, -1, 8, ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone())) {
			return false
		}
	}

	// Reset any potential simple keys on the current flow level.
	if (!yaml_parser_remove_simple_key(parser)) {
		return false
	}

	// Simple keys are allowed after '?' in the block context.
	;(parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed = (parser$ as __goscript_yamlh.yaml_parser_t).flow_level == 0

	// Consume the token.
	let start_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()
	skip(parser)
	let end_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()

	// Create the KEY token and append it to the queue.
	let token = $.varRef(new __goscript_yamlh.yaml_token_t({typ: 16, start_mark: start_mark, end_mark: end_mark}, true))
	__goscript_apic.yaml_insert_token(parser, -1, token)
	return true
}

export async function yaml_parser_fetch_value(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)

	let simple_key: __goscript_yamlh.yaml_simple_key_t | $.VarRef<__goscript_yamlh.yaml_simple_key_t> | null = $.indexRef((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys) - 1)
	let simple_key$: __goscript_yamlh.yaml_simple_key_t = simple_key == null ? $.pointerTarget<__goscript_yamlh.yaml_simple_key_t>(simple_key) : (simple_key as any).__isVarRef === true ? (simple_key as any).value : (simple_key as any).__goValue === undefined ? (simple_key as any) : $.pointerTarget<__goscript_yamlh.yaml_simple_key_t>(simple_key)

	// Have we found a simple key?
	{
		let [valid, ok] = yaml_simple_key_is_valid(parser, simple_key)
		if (!ok) {
			return false
		} else {
			if (valid) {

				// Create the KEY token and insert it into the queue.
				let token = $.varRef(new __goscript_yamlh.yaml_token_t({typ: 16, start_mark: (simple_key$ as __goscript_yamlh.yaml_simple_key_t).mark, end_mark: (simple_key$ as __goscript_yamlh.yaml_simple_key_t).mark}, true))
				__goscript_apic.yaml_insert_token(parser, (simple_key$ as __goscript_yamlh.yaml_simple_key_t).token_number - (parser$ as __goscript_yamlh.yaml_parser_t).tokens_parsed, token)

				// In the block context, we may need to add the BLOCK-MAPPING-START token.
				if (!await yaml_parser_roll_indent(parser, (simple_key$ as __goscript_yamlh.yaml_simple_key_t).mark.column, (simple_key$ as __goscript_yamlh.yaml_simple_key_t).token_number, 8, ((simple_key$ as __goscript_yamlh.yaml_simple_key_t).mark).clone())) {
					return false
				}

				// Remove the simple key.
				;(simple_key$ as __goscript_yamlh.yaml_simple_key_t).possible = false
				$.deleteMapEntry((parser$ as __goscript_yamlh.yaml_parser_t).simple_keys_by_tok, (simple_key$ as __goscript_yamlh.yaml_simple_key_t).token_number);

				// A simple key cannot follow another simple key.
				;(parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed = false
			} else {
				// The ':' indicator follows a complex key.

				// In the block context, extra checks are required.
				if ((parser$ as __goscript_yamlh.yaml_parser_t).flow_level == 0) {

					// Check if we are allowed to start a complex value.
					if (!(parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed) {
						return yaml_parser_set_scanner_error(parser, "", ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone(), "mapping values are not allowed in this context")
					}

					// Add the BLOCK-MAPPING-START token if needed.
					if (!await yaml_parser_roll_indent(parser, (parser$ as __goscript_yamlh.yaml_parser_t).mark.column, -1, 8, ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone())) {
						return false
					}
				}

				// Simple keys after ':' are allowed in the block context.
				;(parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed = (parser$ as __goscript_yamlh.yaml_parser_t).flow_level == 0
			}
		}
	}

	// Consume the token.
	let start_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()
	skip(parser)
	let end_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()

	// Create the VALUE token and append it to the queue.
	let token = $.varRef(new __goscript_yamlh.yaml_token_t({typ: 17, start_mark: start_mark, end_mark: end_mark}, true))
	__goscript_apic.yaml_insert_token(parser, -1, token)
	return true
}

export async function yaml_parser_fetch_anchor(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, typ: __goscript_yamlh.yaml_token_type_t): globalThis.Promise<boolean> {
	// An anchor or an alias could be a simple key.
	if (!yaml_parser_save_simple_key(parser)) {
		return false
	}

	// A simple key cannot follow an anchor or an alias.
	$.pointerValue<__goscript_yamlh.yaml_parser_t>(parser).simple_key_allowed = false

	// Create the ALIAS or ANCHOR token and append it to the queue.
	let token: $.VarRef<__goscript_yamlh.yaml_token_t> = $.varRef(new __goscript_yamlh.yaml_token_t(undefined, true))
	if (!await yaml_parser_scan_anchor(parser, token, typ)) {
		return false
	}
	__goscript_apic.yaml_insert_token(parser, -1, token)
	return true
}

export async function yaml_parser_fetch_tag(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): globalThis.Promise<boolean> {
	// A tag could be a simple key.
	if (!yaml_parser_save_simple_key(parser)) {
		return false
	}

	// A simple key cannot follow a tag.
	$.pointerValue<__goscript_yamlh.yaml_parser_t>(parser).simple_key_allowed = false

	// Create the TAG token and append it to the queue.
	let token: $.VarRef<__goscript_yamlh.yaml_token_t> = $.varRef(new __goscript_yamlh.yaml_token_t(undefined, true))
	if (!await yaml_parser_scan_tag(parser, token)) {
		return false
	}
	__goscript_apic.yaml_insert_token(parser, -1, token)
	return true
}

export async function yaml_parser_fetch_block_scalar(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, literal: boolean): globalThis.Promise<boolean> {
	// Remove any potential simple keys.
	if (!yaml_parser_remove_simple_key(parser)) {
		return false
	}

	// A simple key may follow a block scalar.
	$.pointerValue<__goscript_yamlh.yaml_parser_t>(parser).simple_key_allowed = true

	// Create the SCALAR token and append it to the queue.
	let token: $.VarRef<__goscript_yamlh.yaml_token_t> = $.varRef(new __goscript_yamlh.yaml_token_t(undefined, true))
	if (!await yaml_parser_scan_block_scalar(parser, token, literal)) {
		return false
	}
	__goscript_apic.yaml_insert_token(parser, -1, token)
	return true
}

export async function yaml_parser_fetch_flow_scalar(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, single: boolean): globalThis.Promise<boolean> {
	// A plain scalar could be a simple key.
	if (!yaml_parser_save_simple_key(parser)) {
		return false
	}

	// A simple key cannot follow a flow scalar.
	$.pointerValue<__goscript_yamlh.yaml_parser_t>(parser).simple_key_allowed = false

	// Create the SCALAR token and append it to the queue.
	let token: $.VarRef<__goscript_yamlh.yaml_token_t> = $.varRef(new __goscript_yamlh.yaml_token_t(undefined, true))
	if (!await yaml_parser_scan_flow_scalar(parser, token, single)) {
		return false
	}
	__goscript_apic.yaml_insert_token(parser, -1, token)
	return true
}

export async function yaml_parser_fetch_plain_scalar(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): globalThis.Promise<boolean> {
	// A plain scalar could be a simple key.
	if (!yaml_parser_save_simple_key(parser)) {
		return false
	}

	// A simple key cannot follow a flow scalar.
	$.pointerValue<__goscript_yamlh.yaml_parser_t>(parser).simple_key_allowed = false

	// Create the SCALAR token and append it to the queue.
	let token: $.VarRef<__goscript_yamlh.yaml_token_t> = $.varRef(new __goscript_yamlh.yaml_token_t(undefined, true))
	if (!await yaml_parser_scan_plain_scalar(parser, token)) {
		return false
	}
	__goscript_apic.yaml_insert_token(parser, -1, token)
	return true
}

export async function yaml_parser_scan_to_next_token(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)

	let scan_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()

	// Until the next token is not found.
	while (true) {
		// Allow the BOM mark to start a line.
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
			return false
		}
		if (((parser$ as __goscript_yamlh.yaml_parser_t).mark.column == 0) && __goscript_yamlprivateh.is_bom((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
			skip(parser)
		}

		// Eat whitespaces.
		// Tabs are allowed:
		//  - in the flow context
		//  - in the block context, but not at the beginning of the line or
		//  after '-', '?', or ':' (complex value).
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
			return false
		}

		while (($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 32) || ((((parser$ as __goscript_yamlh.yaml_parser_t).flow_level > 0) || !(parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed) && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 9))) {
			skip(parser)
			if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
				return false
			}
		}

		// Check if we just had a line comment under a sequence entry that
		// looks more like a header to the following content. Similar to this:
		//
		// - # The comment
		//   - Some data
		//
		// If so, transform the line comment to a head comment and reposition.
		if (($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).comments) > 0) && ($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).tokens) > 1)) {
			let tokenA = ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).tokens!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).tokens) - 2)).clone()
			let tokenB = ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).tokens!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).tokens) - 1)).clone()
			let comment: __goscript_yamlh.yaml_comment_t | $.VarRef<__goscript_yamlh.yaml_comment_t> | null = $.indexRef((parser$ as __goscript_yamlh.yaml_parser_t).comments!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).comments) - 1)
			let comment$: __goscript_yamlh.yaml_comment_t = comment == null ? $.pointerTarget<__goscript_yamlh.yaml_comment_t>(comment) : (comment as any).__isVarRef === true ? (comment as any).value : (comment as any).__goValue === undefined ? (comment as any) : $.pointerTarget<__goscript_yamlh.yaml_comment_t>(comment)
			if ((((tokenA.typ == 7) && (tokenB.typ == 14)) && ($.sliceLen((comment$ as __goscript_yamlh.yaml_comment_t).line) > 0)) && !__goscript_yamlprivateh.is_break((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
				// If it was in the prior line, reposition so it becomes a
				// header of the follow up token. Otherwise, keep it in place
				// so it becomes a header of the former.
				;(comment$ as __goscript_yamlh.yaml_comment_t).head = (comment$ as __goscript_yamlh.yaml_comment_t).line;
				;(comment$ as __goscript_yamlh.yaml_comment_t).line = null
				if ((comment$ as __goscript_yamlh.yaml_comment_t).start_mark.line == ((parser$ as __goscript_yamlh.yaml_parser_t).mark.line - 1)) {
					$.assignStruct((comment$ as __goscript_yamlh.yaml_comment_t).token_mark, (parser$ as __goscript_yamlh.yaml_parser_t).mark)
				}
			}
		}

		// Eat a comment until a line break.
		if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 35) {
			if (!await yaml_parser_scan_comments(parser, (scan_mark).clone())) {
				return false
			}
		}

		// If it is a line break, eat it.
		if (__goscript_yamlprivateh.is_break((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
			if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 2) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 2)) {
				return false
			}
			skip_line(parser)

			// In the block context, a new line may start a simple key.
			if ((parser$ as __goscript_yamlh.yaml_parser_t).flow_level == 0) {
				;(parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed = true
			}
		} else {
			break
		}
	}

	return true
}

export async function yaml_parser_scan_directive(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// Eat '%'.
	let start_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()
	skip(parser)

	// Scan the directive name.
	let name: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
	if (!await yaml_parser_scan_directive_name(parser, start_mark, name)) {
		return false
	}

	// Is it a YAML directive?
	if (bytes.Equal(name.value, new Uint8Array([89, 65, 77, 76]))) {
		// Scan the VERSION directive value.
		let major: $.VarRef<number> = $.varRef(0)
		let minor: $.VarRef<number> = $.varRef(0)
		if (!await yaml_parser_scan_version_directive_value(parser, start_mark, major, minor)) {
			return false
		}
		let end_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()

		// Create a VERSION-DIRECTIVE token.
		$.assignStruct($.pointerValue<__goscript_yamlh.yaml_token_t>(token), new __goscript_yamlh.yaml_token_t({typ: 3, start_mark: start_mark, end_mark: end_mark, major: major.value, minor: minor.value}, true))
	} else {
		if (bytes.Equal(name.value, new Uint8Array([84, 65, 71]))) {
			// Scan the TAG directive value.
			let handle: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
			let prefix: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
			if (!await yaml_parser_scan_tag_directive_value(parser, start_mark, handle, prefix)) {
				return false
			}
			let end_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()

			// Create a TAG-DIRECTIVE token.
			$.assignStruct($.pointerValue<__goscript_yamlh.yaml_token_t>(token), new __goscript_yamlh.yaml_token_t({typ: 4, start_mark: start_mark, end_mark: end_mark, value: handle.value, prefix: prefix.value}, true))
		} else {
			yaml_parser_set_scanner_error(parser, "while scanning a directive", start_mark, "found unknown directive name")
			return false
		}
	}

	// Eat the rest of the line including any comments.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
		return false
	}

	while (__goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		skip(parser)
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
			return false
		}
	}

	if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 35) {
		// [Go] Discard this inline comment for the time being.
		//if !yaml_parser_scan_line_comment(parser, start_mark) {
		//	return false
		//}
		while (!__goscript_yamlprivateh.is_breakz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
			skip(parser)
			if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
				return false
			}
		}
	}

	// Check if we are at the end of the line.
	if (!__goscript_yamlprivateh.is_breakz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		yaml_parser_set_scanner_error(parser, "while scanning a directive", start_mark, "did not find expected comment or line break")
		return false
	}

	// Eat a line break.
	if (__goscript_yamlprivateh.is_break((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 2) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 2)) {
			return false
		}
		skip_line(parser)
	}

	return true
}

export async function yaml_parser_scan_directive_name(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, start_mark: __goscript_yamlh.yaml_mark_t, name: $.VarRef<$.Slice<number>> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// Consume the directive name.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
		return false
	}

	let s: $.Slice<number> = null! as $.Slice<number>
	while (__goscript_yamlprivateh.is_alpha((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		s = read(parser, s)
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
			return false
		}
	}

	// Check if the name is empty.
	if ($.sliceLen(s) == 0) {
		yaml_parser_set_scanner_error(parser, "while scanning a directive", start_mark, "could not find expected directive name")
		return false
	}

	// Check for an blank character after the name.
	if (!__goscript_yamlprivateh.is_blankz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		yaml_parser_set_scanner_error(parser, "while scanning a directive", start_mark, "found unexpected non-alphabetical character")
		return false
	}
	name!.value = s
	return true
}

export async function yaml_parser_scan_version_directive_value(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, start_mark: __goscript_yamlh.yaml_mark_t, major: $.VarRef<number> | null, minor: $.VarRef<number> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// Eat whitespaces.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
		return false
	}
	while (__goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		skip(parser)
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
			return false
		}
	}

	// Consume the major version number.
	if (!await yaml_parser_scan_version_directive_number(parser, start_mark, major)) {
		return false
	}

	// Eat '.'.
	if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) != 46) {
		return yaml_parser_set_scanner_error(parser, "while scanning a %YAML directive", start_mark, "did not find expected digit or '.' character")
	}

	skip(parser)

	// Consume the minor version number.
	if (!await yaml_parser_scan_version_directive_number(parser, start_mark, minor)) {
		return false
	}
	return true
}

export async function yaml_parser_scan_version_directive_number(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, start_mark: __goscript_yamlh.yaml_mark_t, _number: $.VarRef<number> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)

	// Repeat while the next character is digit.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
		return false
	}
	let value: number = 0
	let length: number = 0
	while (__goscript_yamlprivateh.is_digit((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		// Check if the number is too long.
		length = ((length + 1) << 24 >> 24)
		if (length > 2) {
			return yaml_parser_set_scanner_error(parser, "while scanning a %YAML directive", start_mark, "found extremely long version number")
		}
		value = $.int((((value * 10) + $.int(__goscript_yamlprivateh.as_digit((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos), 8)) << 24 >> 24), 8)
		skip(parser)
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
			return false
		}
	}

	// Check if the number was present.
	if (length == 0) {
		return yaml_parser_set_scanner_error(parser, "while scanning a %YAML directive", start_mark, "did not find expected version number")
	}
	_number!.value = value
	return true
}

export async function yaml_parser_scan_tag_directive_value(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, start_mark: __goscript_yamlh.yaml_mark_t, handle: $.VarRef<$.Slice<number>> | null, prefix: $.VarRef<$.Slice<number>> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	let handle_value: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
	let prefix_value: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)

	// Eat whitespaces.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
		return false
	}

	while (__goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		skip(parser)
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
			return false
		}
	}

	// Scan a handle.
	if (!await yaml_parser_scan_tag_handle(parser, true, start_mark, handle_value)) {
		return false
	}

	// Expect a whitespace.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
		return false
	}
	if (!__goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		yaml_parser_set_scanner_error(parser, "while scanning a %TAG directive", start_mark, "did not find expected whitespace")
		return false
	}

	// Eat whitespaces.
	while (__goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		skip(parser)
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
			return false
		}
	}

	// Scan a prefix.
	if (!await yaml_parser_scan_tag_uri(parser, true, null, start_mark, prefix_value)) {
		return false
	}

	// Expect a whitespace or line break.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
		return false
	}
	if (!__goscript_yamlprivateh.is_blankz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		yaml_parser_set_scanner_error(parser, "while scanning a %TAG directive", start_mark, "did not find expected whitespace or line break")
		return false
	}

	handle!.value = handle_value.value
	prefix!.value = prefix_value.value
	return true
}

export async function yaml_parser_scan_anchor(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null, typ: __goscript_yamlh.yaml_token_type_t): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	let s: $.Slice<number> = null! as $.Slice<number>

	// Eat the indicator character.
	let start_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()
	skip(parser)

	// Consume the value.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
		return false
	}

	while (__goscript_yamlprivateh.is_alpha((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		s = read(parser, s)
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
			return false
		}
	}

	let end_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()

	/*
		 * Check if length of the anchor is greater than 0 and it is followed by
		 * a whitespace character or one of the indicators:
		 *
		 *      '?', ':', ',', ']', '}', '%', '@', '`'.
		 */

	if (($.sliceLen(s) == 0) || !((((((((__goscript_yamlprivateh.is_blankz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 63)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 58)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 44)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 93)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 125)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 37)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 64)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 96))) {
		let context = "while scanning an alias"
		if (typ == 19) {
			context = "while scanning an anchor"
		}
		yaml_parser_set_scanner_error(parser, context, start_mark, "did not find expected alphabetic or numeric character")
		return false
	}

	// Create a token.
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_token_t>(token), new __goscript_yamlh.yaml_token_t({typ: typ, start_mark: start_mark, end_mark: end_mark, value: s}, true))

	return true
}

export async function yaml_parser_scan_tag(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	let handle: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
	let suffix: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)

	let start_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()

	// Check if the tag is in the canonical form.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 2) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 2)) {
		return false
	}

	if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 1) == 60) {
		// Keep the handle as ''

		// Eat '!<'
		skip(parser)
		skip(parser)

		// Consume the tag value.
		if (!await yaml_parser_scan_tag_uri(parser, false, null, start_mark, suffix)) {
			return false
		}

		// Check for '>' and eat it.
		if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) != 62) {
			yaml_parser_set_scanner_error(parser, "while scanning a tag", start_mark, "did not find the expected '>'")
			return false
		}

		skip(parser)
	} else {
		// The tag has either the '!suffix' or the '!handle!suffix' form.

		// First, try to scan a handle.
		if (!await yaml_parser_scan_tag_handle(parser, false, start_mark, handle)) {
			return false
		}

		// Check if it is, indeed, handle.
		if ((($.arrayIndex(handle.value!, 0) == 33) && ($.sliceLen(handle.value) > 1)) && ($.arrayIndex(handle.value!, $.sliceLen(handle.value) - 1) == 33)) {
			// Scan the suffix now.
			if (!await yaml_parser_scan_tag_uri(parser, false, null, start_mark, suffix)) {
				return false
			}
		} else {
			// It wasn't a handle after all.  Scan the rest of the tag.
			if (!await yaml_parser_scan_tag_uri(parser, false, handle.value, start_mark, suffix)) {
				return false
			}

			// Set the handle to '!'.
			handle.value = new Uint8Array([33]) as $.Slice<number>

			// A special case: the '!' tag.  Set the handle to '' and the
			// suffix to '!'.
			if ($.sliceLen(suffix.value) == 0) {
				let __goscriptAssign0_0: $.Slice<number> = suffix.value
				let __goscriptAssign0_1: $.Slice<number> = handle.value
				handle.value = __goscriptAssign0_0
				suffix.value = __goscriptAssign0_1
			}
		}
	}

	// Check the character which ends the tag.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
		return false
	}
	if (!__goscript_yamlprivateh.is_blankz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		yaml_parser_set_scanner_error(parser, "while scanning a tag", start_mark, "did not find expected whitespace or line break")
		return false
	}

	let end_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()

	// Create a token.
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_token_t>(token), new __goscript_yamlh.yaml_token_t({typ: 20, start_mark: start_mark, end_mark: end_mark, value: handle.value, suffix: suffix.value}, true))
	return true
}

export async function yaml_parser_scan_tag_handle(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, directive: boolean, start_mark: __goscript_yamlh.yaml_mark_t, handle: $.VarRef<$.Slice<number>> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// Check the initial '!' character.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
		return false
	}
	if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) != 33) {
		yaml_parser_set_scanner_tag_error(parser, directive, start_mark, "did not find expected '!'")
		return false
	}

	let s: $.Slice<number> = null! as $.Slice<number>

	// Copy the '!' character.
	s = read(parser, s)

	// Copy all subsequent alphabetical and numerical characters.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
		return false
	}
	while (__goscript_yamlprivateh.is_alpha((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		s = read(parser, s)
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
			return false
		}
	}

	// Check if the trailing character is '!' and copy it.
	if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 33) {
		s = read(parser, s)
	} else {
		// It's either the '!' tag or not really a tag handle.  If it's a %TAG
		// directive, it's an error.  If it's a tag token, it must be a part of URI.
		if (directive && (!$.stringEqual($.bytesToString(s), "!"))) {
			yaml_parser_set_scanner_tag_error(parser, directive, start_mark, "did not find expected '!'")
			return false
		}
	}

	handle!.value = s
	return true
}

export async function yaml_parser_scan_tag_uri(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, directive: boolean, head: $.Slice<number>, start_mark: __goscript_yamlh.yaml_mark_t, uri: $.VarRef<$.Slice<number>> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	//size_t length = head ? strlen((char *)head) : 0
	let s: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
	let hasTag = $.sliceLen(head) > 0

	// Copy the head if needed.
	//
	// Note that we don't copy the leading '!' character.
	if ($.sliceLen(head) > 1) {
		s.value = $.appendSlice(s.value, $.goSlice(head, 1, undefined), $.byteSliceHint)
	}

	// Scan the tag.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
		return false
	}

	// The set of characters that may appear in URI is as follows:
	//
	//      '0'-'9', 'A'-'Z', 'a'-'z', '_', '-', ';', '/', '?', ':', '@', '&',
	//      '=', '+', '$', ',', '.', '!', '~', '*', '\'', '(', ')', '[', ']',
	//      '%'.
	// [Go] TODO Convert this into more reasonable logic.
	while ((((((((((((((((((((__goscript_yamlprivateh.is_alpha((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 59)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 47)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 63)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 58)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 64)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 38)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 61)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 43)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 36)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 44)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 46)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 33)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 126)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 42)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 39)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 40)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 41)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 91)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 93)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 37)) {
		// Check if it is a URI-escape sequence.
		if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 37) {
			if (!await yaml_parser_scan_uri_escapes(parser, directive, start_mark, s)) {
				return false
			}
		} else {
			s.value = read(parser, s.value)
		}
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
			return false
		}
		hasTag = true
	}

	if (!hasTag) {
		yaml_parser_set_scanner_tag_error(parser, directive, start_mark, "did not find expected tag URI")
		return false
	}
	uri!.value = s.value
	return true
}

export async function yaml_parser_scan_uri_escapes(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, directive: boolean, start_mark: __goscript_yamlh.yaml_mark_t, s: $.VarRef<$.Slice<number>> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)

	// Decode the required number of characters.
	let w = 1024
	while (w > 0) {
		// Check for a URI-escaped octet.
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 3) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 3)) {
			return false
		}

		if (!((($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 37) && __goscript_yamlprivateh.is_hex((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 1)) && __goscript_yamlprivateh.is_hex((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 2))) {
			return yaml_parser_set_scanner_tag_error(parser, directive, start_mark, "did not find URI escaped octet")
		}

		// Get the octet.
		let octet = $.uint((__goscript_yamlprivateh.as_hex((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 1) << 4) + __goscript_yamlprivateh.as_hex((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 2), 8)

		// If it is the leading octet, determine the length of the UTF-8 sequence.
		if (w == 1024) {
			w = __goscript_yamlprivateh.width(octet)
			if (w == 0) {
				return yaml_parser_set_scanner_tag_error(parser, directive, start_mark, "found an incorrect leading UTF-8 octet")
			}
		} else {
			// Check if the trailing octet is correct.
			if ($.uint((octet & 0xC0), 8) != 0x80) {
				return yaml_parser_set_scanner_tag_error(parser, directive, start_mark, "found an incorrect trailing UTF-8 octet")
			}
		}

		// Copy the octet and move the pointers.
		s!.value = $.append($.pointerValue<$.Slice<number>>(s), $.uint(octet, 8), $.byteSliceHint)
		skip(parser)
		skip(parser)
		skip(parser)
		w--
	}
	return true
}

export async function yaml_parser_scan_block_scalar(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null, literal: boolean): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// Eat the indicator '|' or '>'.
	let start_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()
	skip(parser)

	// Scan the additional block scalar indicators.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
		return false
	}

	// Check for a chomping indicator.
	let chomping: number = 0
	let increment: number = 0
	if (($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 43) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 45)) {
		// Set the chomping method and eat the indicator.
		if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 43) {
			chomping = 1
		} else {
			chomping = -1
		}
		skip(parser)

		// Check for an indentation indicator.
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
			return false
		}
		if (__goscript_yamlprivateh.is_digit((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
			// Check that the indentation is greater than 0.
			if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 48) {
				yaml_parser_set_scanner_error(parser, "while scanning a block scalar", start_mark, "found an indentation indicator equal to 0")
				return false
			}

			// Get the indentation level and eat the indicator.
			increment = __goscript_yamlprivateh.as_digit((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)
			skip(parser)
		}
	} else {
		if (__goscript_yamlprivateh.is_digit((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
			// Do the same as above, but in the opposite order.

			if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 48) {
				yaml_parser_set_scanner_error(parser, "while scanning a block scalar", start_mark, "found an indentation indicator equal to 0")
				return false
			}
			increment = __goscript_yamlprivateh.as_digit((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)
			skip(parser)

			if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
				return false
			}
			if (($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 43) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 45)) {
				if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 43) {
					chomping = 1
				} else {
					chomping = -1
				}
				skip(parser)
			}
		}
	}

	// Eat whitespaces and comments to the end of the line.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
		return false
	}
	while (__goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		skip(parser)
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
			return false
		}
	}
	if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 35) {
		if (!await yaml_parser_scan_line_comment(parser, start_mark)) {
			return false
		}
		while (!__goscript_yamlprivateh.is_breakz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
			skip(parser)
			if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
				return false
			}
		}
	}

	// Check if we are at the end of the line.
	if (!__goscript_yamlprivateh.is_breakz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		yaml_parser_set_scanner_error(parser, "while scanning a block scalar", start_mark, "did not find expected comment or line break")
		return false
	}

	// Eat a line break.
	if (__goscript_yamlprivateh.is_break((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 2) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 2)) {
			return false
		}
		skip_line(parser)
	}

	let end_mark = $.varRef(((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone())

	// Set the indentation level if it was specified.
	let indent: $.VarRef<number> = $.varRef(0)
	if (increment > 0) {
		if ((parser$ as __goscript_yamlh.yaml_parser_t).indent >= 0) {
			indent.value = (parser$ as __goscript_yamlh.yaml_parser_t).indent + increment
		} else {
			indent.value = increment
		}
	}

	// Scan the leading line breaks and determine the indentation level if needed.
	let s: $.Slice<number> = null! as $.Slice<number>
	let leading_break: $.Slice<number> = null! as $.Slice<number>
	let trailing_breaks: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
	if (!await yaml_parser_scan_block_scalar_breaks(parser, indent, trailing_breaks, start_mark, end_mark)) {
		return false
	}

	// Scan the block scalar content.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
		return false
	}
	let leading_blank: boolean = false
	let trailing_blank: boolean = false
	while (((parser$ as __goscript_yamlh.yaml_parser_t).mark.column == indent.value) && !__goscript_yamlprivateh.is_z((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
		// We are at the beginning of a non-empty line.

		// Is it a trailing whitespace?
		trailing_blank = __goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)

		// Check if we need to fold the leading line break.
		if ((((!literal && !leading_blank) && !trailing_blank) && ($.sliceLen(leading_break) > 0)) && ($.arrayIndex(leading_break!, 0) == 10)) {
			// Do we need to join the lines by space?
			if ($.sliceLen(trailing_breaks.value) == 0) {
				s = $.append(s, $.uint(32, 8), $.byteSliceHint)
			}
		} else {
			s = $.appendSlice(s, leading_break, $.byteSliceHint)
		}
		leading_break = $.goSlice(leading_break, undefined, 0)

		// Append the remaining line breaks.
		s = $.appendSlice(s, trailing_breaks.value, $.byteSliceHint)
		trailing_breaks.value = $.goSlice(trailing_breaks.value, undefined, 0)

		// Is it a leading whitespace?
		leading_blank = __goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)

		// Consume the current line.
		while (!__goscript_yamlprivateh.is_breakz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
			s = read(parser, s)
			if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
				return false
			}
		}

		// Consume the line break.
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 2) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 2)) {
			return false
		}

		leading_break = read_line(parser, leading_break)

		// Eat the following indentation spaces and line breaks.
		if (!await yaml_parser_scan_block_scalar_breaks(parser, indent, trailing_breaks, start_mark, end_mark)) {
			return false
		}
	}

	// Chomp the tail.
	if (chomping != -1) {
		s = $.appendSlice(s, leading_break, $.byteSliceHint)
	}
	if (chomping == 1) {
		s = $.appendSlice(s, trailing_breaks.value, $.byteSliceHint)
	}

	// Create a token.
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_token_t>(token), new __goscript_yamlh.yaml_token_t({typ: 21, start_mark: start_mark, end_mark: end_mark.value, value: s, style: 16}, true))
	if (!literal) {
		$.pointerValue<__goscript_yamlh.yaml_token_t>(token).style = 32
	}
	return true
}

export async function yaml_parser_scan_block_scalar_breaks(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, indent: $.VarRef<number> | null, breaks: $.VarRef<$.Slice<number>> | null, start_mark: __goscript_yamlh.yaml_mark_t, end_mark: __goscript_yamlh.yaml_mark_t | $.VarRef<__goscript_yamlh.yaml_mark_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_mark_t>(end_mark), (parser$ as __goscript_yamlh.yaml_parser_t).mark)

	// Eat the indentation spaces and line breaks.
	let max_indent = 0
	while (true) {
		// Eat the indentation spaces.
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
			return false
		}
		while ((($.pointerValue<number>(indent) == 0) || ((parser$ as __goscript_yamlh.yaml_parser_t).mark.column < $.pointerValue<number>(indent))) && __goscript_yamlprivateh.is_space((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
			skip(parser)
			if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
				return false
			}
		}
		if ((parser$ as __goscript_yamlh.yaml_parser_t).mark.column > max_indent) {
			max_indent = (parser$ as __goscript_yamlh.yaml_parser_t).mark.column
		}

		// Check for a tab character messing the indentation.
		if ((($.pointerValue<number>(indent) == 0) || ((parser$ as __goscript_yamlh.yaml_parser_t).mark.column < $.pointerValue<number>(indent))) && __goscript_yamlprivateh.is_tab((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
			return yaml_parser_set_scanner_error(parser, "while scanning a block scalar", start_mark, "found a tab character where an indentation space is expected")
		}

		// Have we found a non-empty line?
		if (!__goscript_yamlprivateh.is_break((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
			break
		}

		// Consume the line break.
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 2) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 2)) {
			return false
		}
		// [Go] Should really be returning breaks instead.
		breaks!.value = read_line(parser, $.pointerValue<$.Slice<number>>(breaks))
		$.assignStruct($.pointerValue<__goscript_yamlh.yaml_mark_t>(end_mark), (parser$ as __goscript_yamlh.yaml_parser_t).mark)
	}

	// Determine the indentation level if needed.
	if ($.pointerValue<number>(indent) == 0) {
		indent!.value = max_indent
		if ($.pointerValue<number>(indent) < ((parser$ as __goscript_yamlh.yaml_parser_t).indent + 1)) {
			indent!.value = (parser$ as __goscript_yamlh.yaml_parser_t).indent + 1
		}
		if ($.pointerValue<number>(indent) < 1) {
			indent!.value = 1
		}
	}
	return true
}

export async function yaml_parser_scan_flow_scalar(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null, single: boolean): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// Eat the left quote.
	let start_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()
	skip(parser)

	// Consume the content of the quoted scalar.
	let s: $.Slice<number> = null! as $.Slice<number>
	let leading_break: $.Slice<number> = null! as $.Slice<number>
	let trailing_breaks: $.Slice<number> = null! as $.Slice<number>
	let whitespaces: $.Slice<number> = null! as $.Slice<number>
	while (true) {
		// Check that there are no document indicators at the beginning of the line.
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 4) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 4)) {
			return false
		}

		if ((((parser$ as __goscript_yamlh.yaml_parser_t).mark.column == 0) && (((($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 0) == 45) && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 1) == 45)) && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 2) == 45)) || ((($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 0) == 46) && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 1) == 46)) && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 2) == 46)))) && __goscript_yamlprivateh.is_blankz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 3)) {
			yaml_parser_set_scanner_error(parser, "while scanning a quoted scalar", start_mark, "found unexpected document indicator")
			return false
		}

		// Check for EOF.
		if (__goscript_yamlprivateh.is_z((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
			yaml_parser_set_scanner_error(parser, "while scanning a quoted scalar", start_mark, "found unexpected end of stream")
			return false
		}

		// Consume non-blank characters.
		let leading_blanks = false
		while (!__goscript_yamlprivateh.is_blankz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
			if ((single && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 39)) && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 1) == 39)) {
				// Is is an escaped single quote.
				s = $.append(s, $.uint(39, 8), $.byteSliceHint)
				skip(parser)
				skip(parser)
			} else {
				if (single && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 39)) {
					// It is a right single quote.
					break
				} else {
					if (!single && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 34)) {
						// It is a right double quote.
						break
					} else {
						if ((!single && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 92)) && __goscript_yamlprivateh.is_break((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 1)) {
							// It is an escaped line break.
							if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 3) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 3)) {
								return false
							}
							skip(parser)
							skip_line(parser)
							leading_blanks = true
							break
						} else {
							if (!single && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 92)) {
								// It is an escape sequence.
								let code_length = 0

								// Check the escape character.
								switch ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 1)) {
									case 48:
									{
										s = $.append(s, $.uint(0, 8), $.byteSliceHint)
										break
									}
									case 97:
									{
										s = $.append(s, $.uint(7, 8), $.byteSliceHint)
										break
									}
									case 98:
									{
										s = $.append(s, $.uint(8, 8), $.byteSliceHint)
										break
									}
									case 116:
									case 9:
									{
										s = $.append(s, $.uint(9, 8), $.byteSliceHint)
										break
									}
									case 110:
									{
										s = $.append(s, $.uint(10, 8), $.byteSliceHint)
										break
									}
									case 118:
									{
										s = $.append(s, $.uint(11, 8), $.byteSliceHint)
										break
									}
									case 102:
									{
										s = $.append(s, $.uint(12, 8), $.byteSliceHint)
										break
									}
									case 114:
									{
										s = $.append(s, $.uint(13, 8), $.byteSliceHint)
										break
									}
									case 101:
									{
										s = $.append(s, $.uint(27, 8), $.byteSliceHint)
										break
									}
									case 32:
									{
										s = $.append(s, $.uint(32, 8), $.byteSliceHint)
										break
									}
									case 34:
									{
										s = $.append(s, $.uint(34, 8), $.byteSliceHint)
										break
									}
									case 39:
									{
										s = $.append(s, $.uint(39, 8), $.byteSliceHint)
										break
									}
									case 92:
									{
										s = $.append(s, $.uint(92, 8), $.byteSliceHint)
										break
									}
									case 78:
									{
										s = $.append(s, $.uint(65533, 8), $.byteSliceHint)
										s = $.append(s, $.uint(65533, 8), $.byteSliceHint)
										break
									}
									case 95:
									{
										s = $.append(s, $.uint(65533, 8), $.byteSliceHint)
										s = $.append(s, $.uint(65533, 8), $.byteSliceHint)
										break
									}
									case 76:
									{
										s = $.append(s, $.uint(65533, 8), $.byteSliceHint)
										s = $.append(s, $.uint(65533, 8), $.byteSliceHint)
										s = $.append(s, $.uint(65533, 8), $.byteSliceHint)
										break
									}
									case 80:
									{
										s = $.append(s, $.uint(65533, 8), $.byteSliceHint)
										s = $.append(s, $.uint(65533, 8), $.byteSliceHint)
										s = $.append(s, $.uint(65533, 8), $.byteSliceHint)
										break
									}
									case 120:
									{
										code_length = 2
										break
									}
									case 117:
									{
										code_length = 4
										break
									}
									case 85:
									{
										code_length = 8
										break
									}
									default:
									{
										yaml_parser_set_scanner_error(parser, "while parsing a quoted scalar", start_mark, "found unknown escape character")
										return false
										break
									}
								}

								skip(parser)
								skip(parser)

								// Consume an arbitrary escape code.
								if (code_length > 0) {
									let value: number = 0

									// Scan the character value.
									if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < code_length) && !await __goscript_readerc.yaml_parser_update_buffer(parser, code_length)) {
										return false
									}
									for (let k = 0; k < code_length; k++) {
										if (!__goscript_yamlprivateh.is_hex((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + k)) {
											yaml_parser_set_scanner_error(parser, "while parsing a quoted scalar", start_mark, "did not find expected hexdecimal number")
											return false
										}
										value = (value << 4) + __goscript_yamlprivateh.as_hex((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + k)
									}

									// Check the value and write the character.
									if (((value >= 0xD800) && (value <= 0xDFFF)) || (value > 0x10FFFF)) {
										yaml_parser_set_scanner_error(parser, "while parsing a quoted scalar", start_mark, "found invalid Unicode character escape code")
										return false
									}
									if (value <= 0x7F) {
										s = $.append(s, $.uint($.uint(value, 8), 8), $.byteSliceHint)
									} else {
										if (value <= 0x7FF) {
											s = $.append(s, $.uint($.uint(0xC0 + (value >> 6), 8), 8), $.byteSliceHint)
											s = $.append(s, $.uint($.uint(0x80 + (value & 0x3F), 8), 8), $.byteSliceHint)
										} else {
											if (value <= 0xFFFF) {
												s = $.append(s, $.uint($.uint(0xE0 + (value >> 12), 8), 8), $.byteSliceHint)
												s = $.append(s, $.uint($.uint(0x80 + ((value >> 6) & 0x3F), 8), 8), $.byteSliceHint)
												s = $.append(s, $.uint($.uint(0x80 + (value & 0x3F), 8), 8), $.byteSliceHint)
											} else {
												s = $.append(s, $.uint($.uint(0xF0 + (value >> 18), 8), 8), $.byteSliceHint)
												s = $.append(s, $.uint($.uint(0x80 + ((value >> 12) & 0x3F), 8), 8), $.byteSliceHint)
												s = $.append(s, $.uint($.uint(0x80 + ((value >> 6) & 0x3F), 8), 8), $.byteSliceHint)
												s = $.append(s, $.uint($.uint(0x80 + (value & 0x3F), 8), 8), $.byteSliceHint)
											}
										}
									}

									// Advance the pointer.
									for (let k = 0; k < code_length; k++) {
										skip(parser)
									}
								}
							} else {
								// It is a non-escaped non-blank character.
								s = read(parser, s)
							}
						}
					}
				}
			}
			if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 2) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 2)) {
				return false
			}
		}

		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
			return false
		}

		// Check if we are at the end of the scalar.
		if (single) {
			if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 39) {
				break
			}
		} else {
			if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 34) {
				break
			}
		}

		// Consume blank characters.
		while (__goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) || __goscript_yamlprivateh.is_break((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
			if (__goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
				// Consume a space or a tab character.
				if (!leading_blanks) {
					whitespaces = read(parser, whitespaces)
				} else {
					skip(parser)
				}
			} else {
				if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 2) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 2)) {
					return false
				}

				// Check if it is a first line break.
				if (!leading_blanks) {
					whitespaces = $.goSlice(whitespaces, undefined, 0)
					leading_break = read_line(parser, leading_break)
					leading_blanks = true
				} else {
					trailing_breaks = read_line(parser, trailing_breaks)
				}
			}
			if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
				return false
			}
		}

		// Join the whitespaces or fold line breaks.
		if (leading_blanks) {
			// Do we need to fold line breaks?
			if (($.sliceLen(leading_break) > 0) && ($.arrayIndex(leading_break!, 0) == 10)) {
				if ($.sliceLen(trailing_breaks) == 0) {
					s = $.append(s, $.uint(32, 8), $.byteSliceHint)
				} else {
					s = $.appendSlice(s, trailing_breaks, $.byteSliceHint)
				}
			} else {
				s = $.appendSlice(s, leading_break, $.byteSliceHint)
				s = $.appendSlice(s, trailing_breaks, $.byteSliceHint)
			}
			trailing_breaks = $.goSlice(trailing_breaks, undefined, 0)
			leading_break = $.goSlice(leading_break, undefined, 0)
		} else {
			s = $.appendSlice(s, whitespaces, $.byteSliceHint)
			whitespaces = $.goSlice(whitespaces, undefined, 0)
		}
	}

	// Eat the right quote.
	skip(parser)
	let end_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()

	// Create a token.
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_token_t>(token), new __goscript_yamlh.yaml_token_t({typ: 21, start_mark: start_mark, end_mark: end_mark, value: s, style: 4}, true))
	if (!single) {
		$.pointerValue<__goscript_yamlh.yaml_token_t>(token).style = 8
	}
	return true
}

export async function yaml_parser_scan_plain_scalar(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)

	let s: $.Slice<number> = null! as $.Slice<number>
	let leading_break: $.Slice<number> = null! as $.Slice<number>
	let trailing_breaks: $.Slice<number> = null! as $.Slice<number>
	let whitespaces: $.Slice<number> = null! as $.Slice<number>
	let leading_blanks: boolean = false
	let __goscriptShadow1: number = (parser$ as __goscript_yamlh.yaml_parser_t).indent + 1

	let start_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()
	let end_mark = ((parser$ as __goscript_yamlh.yaml_parser_t).mark).clone()

	// Consume the content of the plain scalar.
	while (true) {
		// Check for a document indicator.
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 4) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 4)) {
			return false
		}
		if ((((parser$ as __goscript_yamlh.yaml_parser_t).mark.column == 0) && (((($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 0) == 45) && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 1) == 45)) && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 2) == 45)) || ((($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 0) == 46) && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 1) == 46)) && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 2) == 46)))) && __goscript_yamlprivateh.is_blankz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 3)) {
			break
		}

		// Check for a comment.
		if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 35) {
			break
		}

		// Consume non-blank characters.
		while (!__goscript_yamlprivateh.is_blankz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {

			// Check for indicators that may end a plain scalar.
			if ((($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 58) && __goscript_yamlprivateh.is_blankz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + 1)) || (((parser$ as __goscript_yamlh.yaml_parser_t).flow_level > 0) && (((((($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 44) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 63)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 91)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 93)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 123)) || ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) == 125)))) {
				break
			}

			// Check if we need to join whitespaces and breaks.
			if (leading_blanks || ($.sliceLen(whitespaces) > 0)) {
				if (leading_blanks) {
					// Do we need to fold line breaks?
					if ($.arrayIndex(leading_break!, 0) == 10) {
						if ($.sliceLen(trailing_breaks) == 0) {
							s = $.append(s, $.uint(32, 8), $.byteSliceHint)
						} else {
							s = $.appendSlice(s, trailing_breaks, $.byteSliceHint)
						}
					} else {
						s = $.appendSlice(s, leading_break, $.byteSliceHint)
						s = $.appendSlice(s, trailing_breaks, $.byteSliceHint)
					}
					trailing_breaks = $.goSlice(trailing_breaks, undefined, 0)
					leading_break = $.goSlice(leading_break, undefined, 0)
					leading_blanks = false
				} else {
					s = $.appendSlice(s, whitespaces, $.byteSliceHint)
					whitespaces = $.goSlice(whitespaces, undefined, 0)
				}
			}

			// Copy the character.
			s = read(parser, s)

			end_mark = $.assignStruct(end_mark, (parser$ as __goscript_yamlh.yaml_parser_t).mark)
			if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 2) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 2)) {
				return false
			}
		}

		// Is it the end?
		if (!(__goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) || __goscript_yamlprivateh.is_break((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos))) {
			break
		}

		// Consume blank characters.
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
			return false
		}

		while (__goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos) || __goscript_yamlprivateh.is_break((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
			if (__goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {

				// Check for tab characters that abuse indentation.
				if ((leading_blanks && ((parser$ as __goscript_yamlh.yaml_parser_t).mark.column < __goscriptShadow1)) && __goscript_yamlprivateh.is_tab((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
					yaml_parser_set_scanner_error(parser, "while scanning a plain scalar", start_mark, "found a tab character that violates indentation")
					return false
				}

				// Consume a space or a tab character.
				if (!leading_blanks) {
					whitespaces = read(parser, whitespaces)
				} else {
					skip(parser)
				}
			} else {
				if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 2) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 2)) {
					return false
				}

				// Check if it is a first line break.
				if (!leading_blanks) {
					whitespaces = $.goSlice(whitespaces, undefined, 0)
					leading_break = read_line(parser, leading_break)
					leading_blanks = true
				} else {
					trailing_breaks = read_line(parser, trailing_breaks)
				}
			}
			if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
				return false
			}
		}

		// Check indentation level.
		if (((parser$ as __goscript_yamlh.yaml_parser_t).flow_level == 0) && ((parser$ as __goscript_yamlh.yaml_parser_t).mark.column < __goscriptShadow1)) {
			break
		}
	}

	// Create a token.
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_token_t>(token), new __goscript_yamlh.yaml_token_t({typ: 21, start_mark: start_mark, end_mark: end_mark, value: s, style: 2}, true))

	// Note that we change the 'simple_key_allowed' flag.
	if (leading_blanks) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).simple_key_allowed = true
	}
	return true
}

export async function yaml_parser_scan_line_comment(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, token_mark: __goscript_yamlh.yaml_mark_t): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	if ((parser$ as __goscript_yamlh.yaml_parser_t).newlines > 0) {
		return true
	}

	let start_mark: __goscript_yamlh.yaml_mark_t = new __goscript_yamlh.yaml_mark_t(undefined, true)
	let text: $.Slice<number> = null! as $.Slice<number>

	for (let peek = 0; peek < 512; peek++) {
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < (peek + 1)) && !await __goscript_readerc.yaml_parser_update_buffer(parser, peek + 1)) {
			break
		}
		if (__goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + peek)) {
			continue
		}
		if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + peek) == 35) {
			let seen = (parser$ as __goscript_yamlh.yaml_parser_t).mark.index + peek
			while (true) {
				if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
					return false
				}
				if (__goscript_yamlprivateh.is_breakz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
					if ((parser$ as __goscript_yamlh.yaml_parser_t).mark.index >= seen) {
						break
					}
					if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 2) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 2)) {
						return false
					}
					skip_line(parser)
				} else {
					if ((parser$ as __goscript_yamlh.yaml_parser_t).mark.index >= seen) {
						if ($.sliceLen(text) == 0) {
							start_mark = $.assignStruct(start_mark, (parser$ as __goscript_yamlh.yaml_parser_t).mark)
						}
						text = read(parser, text)
					} else {
						skip(parser)
					}
				}
			}
		}
		break
	}
	if ($.sliceLen(text) > 0) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).comments = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).comments, new __goscript_yamlh.yaml_comment_t({token_mark: token_mark, start_mark: start_mark, line: text}, true))
	}
	return true
}

export async function yaml_parser_scan_comments(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, scan_mark: __goscript_yamlh.yaml_mark_t): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	let token = ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).tokens!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).tokens) - 1)).clone()

	if ((token.typ == 15) && ($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).tokens) > 1)) {
		token = $.assignStruct(token, $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).tokens!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).tokens) - 2))
	}

	let token_mark: __goscript_yamlh.yaml_mark_t = (token.start_mark).clone()
	let start_mark: __goscript_yamlh.yaml_mark_t = new __goscript_yamlh.yaml_mark_t(undefined, true)
	let next_indent: number = (parser$ as __goscript_yamlh.yaml_parser_t).indent
	if (next_indent < 0) {
		next_indent = 0
	}

	let recent_empty: boolean = false
	let first_empty: boolean = (parser$ as __goscript_yamlh.yaml_parser_t).newlines <= 1

	let __goscriptShadow2: number = (parser$ as __goscript_yamlh.yaml_parser_t).mark.line
	let __goscriptShadow3: number = (parser$ as __goscript_yamlh.yaml_parser_t).mark.column

	let text: $.Slice<number> = null! as $.Slice<number>

	// The foot line is the place where a comment must start to
	// still be considered as a foot of the prior content.
	// If there's some content in the currently parsed line, then
	// the foot is the line below it.
	let foot_line: number = -1
	if (scan_mark.line > 0) {
		foot_line = ((parser$ as __goscript_yamlh.yaml_parser_t).mark.line - (parser$ as __goscript_yamlh.yaml_parser_t).newlines) + 1
		if (((parser$ as __goscript_yamlh.yaml_parser_t).newlines == 0) && ((parser$ as __goscript_yamlh.yaml_parser_t).mark.column > 1)) {
			foot_line++
		}
	}

	let peek: number = 0
	for (; peek < 512; peek++) {
		if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < (peek + 1)) && !await __goscript_readerc.yaml_parser_update_buffer(parser, peek + 1)) {
			break
		}
		__goscriptShadow3++
		if (__goscript_yamlprivateh.is_blank((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + peek)) {
			continue
		}
		let c = $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + peek)
		let close_flow: boolean = ((parser$ as __goscript_yamlh.yaml_parser_t).flow_level > 0) && ((c == 93) || (c == 125))
		if (close_flow || __goscript_yamlprivateh.is_breakz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + peek)) {
			// Got line break or terminator.
			if (close_flow || !recent_empty) {
				if (close_flow || (first_empty && (((start_mark.line == foot_line) && (token.typ != 17)) || ((start_mark.column - 1) < next_indent)))) {
					// This is the first empty line and there were no empty lines before,
					// so this initial part of the comment is a foot of the prior token
					// instead of being a head for the following one. Split it up.
					// Alternatively, this might also be the last comment inside a flow
					// scope, so it must be a footer.
					if ($.sliceLen(text) > 0) {
						if ((start_mark.column - 1) < next_indent) {
							// If dedented it's unrelated to the prior token.
							token_mark = $.assignStruct(token_mark, start_mark)
						}
						;(parser$ as __goscript_yamlh.yaml_parser_t).comments = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).comments, new __goscript_yamlh.yaml_comment_t({scan_mark: scan_mark, token_mark: token_mark, start_mark: start_mark, end_mark: new __goscript_yamlh.yaml_mark_t({index: (parser$ as __goscript_yamlh.yaml_parser_t).mark.index + peek, line: __goscriptShadow2, column: __goscriptShadow3}, true), foot: text}, true))
						scan_mark = $.assignStruct(scan_mark, new __goscript_yamlh.yaml_mark_t({index: (parser$ as __goscript_yamlh.yaml_parser_t).mark.index + peek, line: __goscriptShadow2, column: __goscriptShadow3}, true))
						token_mark = $.assignStruct(token_mark, scan_mark)
						text = null
					}
				} else {
					if (($.sliceLen(text) > 0) && ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + peek) != 0)) {
						text = $.append(text, $.uint(10, 8), $.byteSliceHint)
					}
				}
			}
			if (!__goscript_yamlprivateh.is_break((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + peek)) {
				break
			}
			first_empty = false
			recent_empty = true
			__goscriptShadow3 = 0
			__goscriptShadow2++
			continue
		}

		if (($.sliceLen(text) > 0) && (close_flow || (((__goscriptShadow3 - 1) < next_indent) && (__goscriptShadow3 != start_mark.column)))) {
			// The comment at the different indentation is a foot of the
			// preceding data rather than a head of the upcoming one.
			;(parser$ as __goscript_yamlh.yaml_parser_t).comments = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).comments, new __goscript_yamlh.yaml_comment_t({scan_mark: scan_mark, token_mark: token_mark, start_mark: start_mark, end_mark: new __goscript_yamlh.yaml_mark_t({index: (parser$ as __goscript_yamlh.yaml_parser_t).mark.index + peek, line: __goscriptShadow2, column: __goscriptShadow3}, true), foot: text}, true))
			scan_mark = $.assignStruct(scan_mark, new __goscript_yamlh.yaml_mark_t({index: (parser$ as __goscript_yamlh.yaml_parser_t).mark.index + peek, line: __goscriptShadow2, column: __goscriptShadow3}, true))
			token_mark = $.assignStruct(token_mark, scan_mark)
			text = null
		}

		if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).buffer!, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos + peek) != 35) {
			break
		}

		if ($.sliceLen(text) == 0) {
			start_mark = $.assignStruct(start_mark, new __goscript_yamlh.yaml_mark_t({index: (parser$ as __goscript_yamlh.yaml_parser_t).mark.index + peek, line: __goscriptShadow2, column: __goscriptShadow3}, true))
		} else {
			text = $.append(text, $.uint(10, 8), $.byteSliceHint)
		}

		recent_empty = false

		// Consume until after the consumed comment line.
		let seen = (parser$ as __goscript_yamlh.yaml_parser_t).mark.index + peek
		while (true) {
			if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 1) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 1)) {
				return false
			}
			if (__goscript_yamlprivateh.is_breakz((parser$ as __goscript_yamlh.yaml_parser_t).buffer, (parser$ as __goscript_yamlh.yaml_parser_t).buffer_pos)) {
				if ((parser$ as __goscript_yamlh.yaml_parser_t).mark.index >= seen) {
					break
				}
				if (((parser$ as __goscript_yamlh.yaml_parser_t).unread < 2) && !await __goscript_readerc.yaml_parser_update_buffer(parser, 2)) {
					return false
				}
				skip_line(parser)
			} else {
				if ((parser$ as __goscript_yamlh.yaml_parser_t).mark.index >= seen) {
					text = read(parser, text)
				} else {
					skip(parser)
				}
			}
		}

		peek = 0
		__goscriptShadow3 = 0
		__goscriptShadow2 = (parser$ as __goscript_yamlh.yaml_parser_t).mark.line
		next_indent = (parser$ as __goscript_yamlh.yaml_parser_t).indent
		if (next_indent < 0) {
			next_indent = 0
		}
	}

	if ($.sliceLen(text) > 0) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).comments = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).comments, new __goscript_yamlh.yaml_comment_t({scan_mark: scan_mark, token_mark: start_mark, start_mark: start_mark, end_mark: new __goscript_yamlh.yaml_mark_t({index: ((parser$ as __goscript_yamlh.yaml_parser_t).mark.index + peek) - 1, line: __goscriptShadow2, column: __goscriptShadow3}, true), head: text}, true))
	}
	return true
}
