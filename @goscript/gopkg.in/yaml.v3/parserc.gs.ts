// Generated file based on parserc.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_scannerc from "./scannerc.gs.ts"

import * as __goscript_yamlh from "./yamlh.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/io/index.js"
import "./scannerc.gs.ts"
import "./yamlh.gs.ts"

export async function peek_token(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): globalThis.Promise<__goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	if ((parser$ as __goscript_yamlh.yaml_parser_t).token_available || await __goscript_scannerc.yaml_parser_fetch_more_tokens(parser)) {
		let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = $.indexRef((parser$ as __goscript_yamlh.yaml_parser_t).tokens!, (parser$ as __goscript_yamlh.yaml_parser_t).tokens_head)
		yaml_parser_unfold_comments(parser, token)
		return token
	}
	return null
}

export function yaml_parser_unfold_comments(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null): void {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	const token$: __goscript_yamlh.yaml_token_t = token == null ? $.pointerTarget<__goscript_yamlh.yaml_token_t>(token) : (token as any).__isVarRef === true ? (token as any).value : (token as any).__goValue === undefined ? (token as any) : $.pointerTarget<__goscript_yamlh.yaml_token_t>(token)
	while (((parser$ as __goscript_yamlh.yaml_parser_t).comments_head < $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).comments)) && ((token$ as __goscript_yamlh.yaml_token_t).start_mark.index >= $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).comments!, (parser$ as __goscript_yamlh.yaml_parser_t).comments_head).token_mark.index)) {
		let comment: __goscript_yamlh.yaml_comment_t | $.VarRef<__goscript_yamlh.yaml_comment_t> | null = $.indexRef((parser$ as __goscript_yamlh.yaml_parser_t).comments!, (parser$ as __goscript_yamlh.yaml_parser_t).comments_head)
		let comment$: __goscript_yamlh.yaml_comment_t = comment == null ? $.pointerTarget<__goscript_yamlh.yaml_comment_t>(comment) : (comment as any).__isVarRef === true ? (comment as any).value : (comment as any).__goValue === undefined ? (comment as any) : $.pointerTarget<__goscript_yamlh.yaml_comment_t>(comment)
		if ($.sliceLen((comment$ as __goscript_yamlh.yaml_comment_t).head) > 0) {
			if ((token$ as __goscript_yamlh.yaml_token_t).typ == 9) {
				// No heads on ends, so keep comment.head for a follow up token.
				break
			}
			if ($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).head_comment) > 0) {
				;(parser$ as __goscript_yamlh.yaml_parser_t).head_comment = $.append((parser$ as __goscript_yamlh.yaml_parser_t).head_comment, $.uint(10, 8), $.byteSliceHint)
			}
			;(parser$ as __goscript_yamlh.yaml_parser_t).head_comment = $.appendSlice((parser$ as __goscript_yamlh.yaml_parser_t).head_comment, (comment$ as __goscript_yamlh.yaml_comment_t).head, $.byteSliceHint)
		}
		if ($.sliceLen((comment$ as __goscript_yamlh.yaml_comment_t).foot) > 0) {
			if ($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).foot_comment) > 0) {
				;(parser$ as __goscript_yamlh.yaml_parser_t).foot_comment = $.append((parser$ as __goscript_yamlh.yaml_parser_t).foot_comment, $.uint(10, 8), $.byteSliceHint)
			}
			;(parser$ as __goscript_yamlh.yaml_parser_t).foot_comment = $.appendSlice((parser$ as __goscript_yamlh.yaml_parser_t).foot_comment, (comment$ as __goscript_yamlh.yaml_comment_t).foot, $.byteSliceHint)
		}
		if ($.sliceLen((comment$ as __goscript_yamlh.yaml_comment_t).line) > 0) {
			if ($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).line_comment) > 0) {
				;(parser$ as __goscript_yamlh.yaml_parser_t).line_comment = $.append((parser$ as __goscript_yamlh.yaml_parser_t).line_comment, $.uint(10, 8), $.byteSliceHint)
			}
			;(parser$ as __goscript_yamlh.yaml_parser_t).line_comment = $.appendSlice((parser$ as __goscript_yamlh.yaml_parser_t).line_comment, (comment$ as __goscript_yamlh.yaml_comment_t).line, $.byteSliceHint)
		}
		$.assignStruct((comment$ as __goscript_yamlh.yaml_comment_t), new __goscript_yamlh.yaml_comment_t(undefined, true));
		;(parser$ as __goscript_yamlh.yaml_parser_t).comments_head++
	}
}

export function skip_token(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): void {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser);
	;(parser$ as __goscript_yamlh.yaml_parser_t).token_available = false;
	;(parser$ as __goscript_yamlh.yaml_parser_t).tokens_parsed++;
	;(parser$ as __goscript_yamlh.yaml_parser_t).stream_end_produced = $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).tokens!, (parser$ as __goscript_yamlh.yaml_parser_t).tokens_head).typ == 2;
	;(parser$ as __goscript_yamlh.yaml_parser_t).tokens_head++
}

export async function yaml_parser_parse(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	// Erase the event object.
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t(undefined, true))

	// No events after the end of the stream or error.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).stream_end_produced || ((parser$ as __goscript_yamlh.yaml_parser_t).error != 0)) || ((parser$ as __goscript_yamlh.yaml_parser_t).state == 23)) {
		return true
	}

	// Generate the next event.
	return yaml_parser_state_machine(parser, event)
}

export function yaml_parser_set_parser_error(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, problem: string, problem_mark: __goscript_yamlh.yaml_mark_t): boolean {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser);
	;(parser$ as __goscript_yamlh.yaml_parser_t).error = 4;
	;(parser$ as __goscript_yamlh.yaml_parser_t).problem = problem
	$.assignStruct((parser$ as __goscript_yamlh.yaml_parser_t).problem_mark, problem_mark)
	return false
}

export function yaml_parser_set_parser_error_context(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, context: string, context_mark: __goscript_yamlh.yaml_mark_t, problem: string, problem_mark: __goscript_yamlh.yaml_mark_t): boolean {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser);
	;(parser$ as __goscript_yamlh.yaml_parser_t).error = 4;
	;(parser$ as __goscript_yamlh.yaml_parser_t).context = context
	$.assignStruct((parser$ as __goscript_yamlh.yaml_parser_t).context_mark, context_mark);
	;(parser$ as __goscript_yamlh.yaml_parser_t).problem = problem
	$.assignStruct((parser$ as __goscript_yamlh.yaml_parser_t).problem_mark, problem_mark)
	return false
}

export async function yaml_parser_state_machine(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	//trace("yaml_parser_state_machine", "state:", parser.state.String())

	switch ($.pointerValue<__goscript_yamlh.yaml_parser_t>(parser).state) {
		case 0:
		{
			return yaml_parser_parse_stream_start(parser, event)
			break
		}
		case 1:
		{
			return yaml_parser_parse_document_start(parser, event, true)
			break
		}
		case 2:
		{
			return yaml_parser_parse_document_start(parser, event, false)
			break
		}
		case 3:
		{
			return yaml_parser_parse_document_content(parser, event)
			break
		}
		case 4:
		{
			return yaml_parser_parse_document_end(parser, event)
			break
		}
		case 5:
		{
			return yaml_parser_parse_node(parser, event, true, false)
			break
		}
		case 6:
		{
			return yaml_parser_parse_node(parser, event, true, true)
			break
		}
		case 7:
		{
			return yaml_parser_parse_node(parser, event, false, false)
			break
		}
		case 8:
		{
			return yaml_parser_parse_block_sequence_entry(parser, event, true)
			break
		}
		case 9:
		{
			return yaml_parser_parse_block_sequence_entry(parser, event, false)
			break
		}
		case 10:
		{
			return yaml_parser_parse_indentless_sequence_entry(parser, event)
			break
		}
		case 11:
		{
			return yaml_parser_parse_block_mapping_key(parser, event, true)
			break
		}
		case 12:
		{
			return yaml_parser_parse_block_mapping_key(parser, event, false)
			break
		}
		case 13:
		{
			return yaml_parser_parse_block_mapping_value(parser, event)
			break
		}
		case 14:
		{
			return yaml_parser_parse_flow_sequence_entry(parser, event, true)
			break
		}
		case 15:
		{
			return yaml_parser_parse_flow_sequence_entry(parser, event, false)
			break
		}
		case 16:
		{
			return yaml_parser_parse_flow_sequence_entry_mapping_key(parser, event)
			break
		}
		case 17:
		{
			return yaml_parser_parse_flow_sequence_entry_mapping_value(parser, event)
			break
		}
		case 18:
		{
			return yaml_parser_parse_flow_sequence_entry_mapping_end(parser, event)
			break
		}
		case 19:
		{
			return yaml_parser_parse_flow_mapping_key(parser, event, true)
			break
		}
		case 20:
		{
			return yaml_parser_parse_flow_mapping_key(parser, event, false)
			break
		}
		case 21:
		{
			return yaml_parser_parse_flow_mapping_value(parser, event, false)
			break
		}
		case 22:
		{
			return yaml_parser_parse_flow_mapping_value(parser, event, true)
			break
		}
		default:
		{
			$.panic("invalid parser state")
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function yaml_parser_parse_stream_start(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
	let token$: __goscript_yamlh.yaml_token_t = token == null ? $.pointerTarget<__goscript_yamlh.yaml_token_t>(token) : (token as any).__isVarRef === true ? (token as any).value : (token as any).__goValue === undefined ? (token as any) : $.pointerTarget<__goscript_yamlh.yaml_token_t>(token)
	if (token == null) {
		return false
	}
	if ((token$ as __goscript_yamlh.yaml_token_t).typ != 1) {
		return yaml_parser_set_parser_error(parser, "did not find expected <stream-start>", ((token$ as __goscript_yamlh.yaml_token_t).start_mark).clone())
	}
	$.pointerValue<__goscript_yamlh.yaml_parser_t>(parser).state = 1
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 1, start_mark: (token$ as __goscript_yamlh.yaml_token_t).start_mark, end_mark: (token$ as __goscript_yamlh.yaml_token_t).end_mark, encoding: (token$ as __goscript_yamlh.yaml_token_t).encoding}, true))
	skip_token(parser)
	return true
}

export async function yaml_parser_parse_document_start(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, implicit: boolean): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)

	let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
	if (token == null) {
		return false
	}

	// Parse extra document end indicators.
	if (!implicit) {
		while ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 6) {
			skip_token(parser)
			token = await peek_token(parser)
			if (token == null) {
				return false
			}
		}
	}

	if ((((implicit && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 3)) && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 4)) && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 5)) && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 2)) {
		// Parse an implicit document.
		if (!await yaml_parser_process_directives(parser, null, null)) {
			return false
		}
		;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).states, 4);
		;(parser$ as __goscript_yamlh.yaml_parser_t).state = 5

		let head_comment: $.Slice<number> = null! as $.Slice<number>
		if ($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).head_comment) > 0) {
			// [Go] Scan the header comment backwards, and if an empty line is found, break
			//      the header so the part before the last empty line goes into the
			//      document header, while the bottom of it goes into a follow up event.
			for (let i = $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).head_comment) - 1; i > 0; i--) {
				if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).head_comment!, i) == 10) {
					if (i == ($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).head_comment) - 1)) {
						head_comment = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).head_comment, undefined, i);
						;(parser$ as __goscript_yamlh.yaml_parser_t).head_comment = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).head_comment, i + 1, undefined)
						break
					} else {
						if ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).head_comment!, i - 1) == 10) {
							head_comment = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).head_comment, undefined, i - 1);
							;(parser$ as __goscript_yamlh.yaml_parser_t).head_comment = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).head_comment, i + 1, undefined)
							break
						}
					}
				}
			}
		}

		$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 3, start_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark, end_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark, head_comment: head_comment}, true))
	} else {
		if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 2) {
			// Parse an explicit document.
			let version_directive: $.VarRef<__goscript_yamlh.yaml_version_directive_t | $.VarRef<__goscript_yamlh.yaml_version_directive_t> | null> = $.varRef(null! as __goscript_yamlh.yaml_version_directive_t | $.VarRef<__goscript_yamlh.yaml_version_directive_t> | null)
			let tag_directives: $.VarRef<$.Slice<__goscript_yamlh.yaml_tag_directive_t>> = $.varRef(null! as $.Slice<__goscript_yamlh.yaml_tag_directive_t>)
			let start_mark = ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone()
			if (!await yaml_parser_process_directives(parser, version_directive, tag_directives)) {
				return false
			}
			token = await peek_token(parser)
			if (token == null) {
				return false
			}
			if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 5) {
				yaml_parser_set_parser_error(parser, "did not find expected <document start>", ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())
				return false
			}
			;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).states, 4);
			;(parser$ as __goscript_yamlh.yaml_parser_t).state = 3
			let end_mark = ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark).clone()

			$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 3, start_mark: start_mark, end_mark: end_mark, version_directive: version_directive.value, tag_directives: tag_directives.value, implicit: false}, true))
			skip_token(parser)
		} else {
			// Parse the stream end.
			;(parser$ as __goscript_yamlh.yaml_parser_t).state = 23
			$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 2, start_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark, end_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark}, true))
			skip_token(parser)
		}
	}

	return true
}

export async function yaml_parser_parse_document_content(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
	let token$: __goscript_yamlh.yaml_token_t = token == null ? $.pointerTarget<__goscript_yamlh.yaml_token_t>(token) : (token as any).__isVarRef === true ? (token as any).value : (token as any).__goValue === undefined ? (token as any) : $.pointerTarget<__goscript_yamlh.yaml_token_t>(token)
	if (token == null) {
		return false
	}

	if ((((((token$ as __goscript_yamlh.yaml_token_t).typ == 3) || ((token$ as __goscript_yamlh.yaml_token_t).typ == 4)) || ((token$ as __goscript_yamlh.yaml_token_t).typ == 5)) || ((token$ as __goscript_yamlh.yaml_token_t).typ == 6)) || ((token$ as __goscript_yamlh.yaml_token_t).typ == 2)) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).state = $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).states!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1);
		;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).states, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1)
		return yaml_parser_process_empty_scalar(parser, event, ((token$ as __goscript_yamlh.yaml_token_t).start_mark).clone())
	}
	return yaml_parser_parse_node(parser, event, true, false)
}

export async function yaml_parser_parse_document_end(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	const event$: __goscript_yamlh.yaml_event_t = event == null ? $.pointerTarget<__goscript_yamlh.yaml_event_t>(event) : (event as any).__isVarRef === true ? (event as any).value : (event as any).__goValue === undefined ? (event as any) : $.pointerTarget<__goscript_yamlh.yaml_event_t>(event)
	let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
	let token$: __goscript_yamlh.yaml_token_t = token == null ? $.pointerTarget<__goscript_yamlh.yaml_token_t>(token) : (token as any).__isVarRef === true ? (token as any).value : (token as any).__goValue === undefined ? (token as any) : $.pointerTarget<__goscript_yamlh.yaml_token_t>(token)
	if (token == null) {
		return false
	}

	let start_mark = ((token$ as __goscript_yamlh.yaml_token_t).start_mark).clone()
	let end_mark = ((token$ as __goscript_yamlh.yaml_token_t).start_mark).clone()

	let implicit = true
	if ((token$ as __goscript_yamlh.yaml_token_t).typ == 6) {
		end_mark = $.assignStruct(end_mark, (token$ as __goscript_yamlh.yaml_token_t).end_mark)
		skip_token(parser)
		implicit = false
	}

	;(parser$ as __goscript_yamlh.yaml_parser_t).tag_directives = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).tag_directives, undefined, 0);

	;(parser$ as __goscript_yamlh.yaml_parser_t).state = 2
	$.assignStruct((event$ as __goscript_yamlh.yaml_event_t), new __goscript_yamlh.yaml_event_t({typ: 4, start_mark: start_mark, end_mark: end_mark, implicit: implicit}, true))
	yaml_parser_set_event_comments(parser, event)
	if (($.sliceLen((event$ as __goscript_yamlh.yaml_event_t).head_comment) > 0) && ($.sliceLen((event$ as __goscript_yamlh.yaml_event_t).foot_comment) == 0)) {
		;(event$ as __goscript_yamlh.yaml_event_t).foot_comment = (event$ as __goscript_yamlh.yaml_event_t).head_comment;
		;(event$ as __goscript_yamlh.yaml_event_t).head_comment = null
	}
	return true
}

export function yaml_parser_set_event_comments(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): void {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	const event$: __goscript_yamlh.yaml_event_t = event == null ? $.pointerTarget<__goscript_yamlh.yaml_event_t>(event) : (event as any).__isVarRef === true ? (event as any).value : (event as any).__goValue === undefined ? (event as any) : $.pointerTarget<__goscript_yamlh.yaml_event_t>(event);
	;(event$ as __goscript_yamlh.yaml_event_t).head_comment = (parser$ as __goscript_yamlh.yaml_parser_t).head_comment;
	;(event$ as __goscript_yamlh.yaml_event_t).line_comment = (parser$ as __goscript_yamlh.yaml_parser_t).line_comment;
	;(event$ as __goscript_yamlh.yaml_event_t).foot_comment = (parser$ as __goscript_yamlh.yaml_parser_t).foot_comment;
	;(parser$ as __goscript_yamlh.yaml_parser_t).head_comment = null;
	;(parser$ as __goscript_yamlh.yaml_parser_t).line_comment = null;
	;(parser$ as __goscript_yamlh.yaml_parser_t).foot_comment = null;
	;(parser$ as __goscript_yamlh.yaml_parser_t).tail_comment = null;
	;(parser$ as __goscript_yamlh.yaml_parser_t).stem_comment = null
}

export async function yaml_parser_parse_node(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, block: boolean, indentless_sequence: boolean): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	const event$: __goscript_yamlh.yaml_event_t = event == null ? $.pointerTarget<__goscript_yamlh.yaml_event_t>(event) : (event as any).__isVarRef === true ? (event as any).value : (event as any).__goValue === undefined ? (event as any) : $.pointerTarget<__goscript_yamlh.yaml_event_t>(event)
	//defer trace("yaml_parser_parse_node", "block:", block, "indentless_sequence:", indentless_sequence)()

	let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
	if (token == null) {
		return false
	}

	if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 18) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).state = $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).states!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1);
		;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).states, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1)
		$.assignStruct((event$ as __goscript_yamlh.yaml_event_t), new __goscript_yamlh.yaml_event_t({typ: 5, start_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark, end_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark, anchor: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).value}, true))
		yaml_parser_set_event_comments(parser, event)
		skip_token(parser)
		return true
	}

	let start_mark = ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone()
	let end_mark = ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone()

	let tag_token: boolean = false
	let tag_handle: $.Slice<number> = null! as $.Slice<number>
	let tag_suffix: $.Slice<number> = null! as $.Slice<number>
	let anchor: $.Slice<number> = null! as $.Slice<number>
	let tag_mark: __goscript_yamlh.yaml_mark_t = new __goscript_yamlh.yaml_mark_t(undefined, true)
	if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 19) {
		anchor = $.pointerValue<__goscript_yamlh.yaml_token_t>(token).value
		start_mark = $.assignStruct(start_mark, $.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark)
		end_mark = $.assignStruct(end_mark, $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark)
		skip_token(parser)
		token = await peek_token(parser)
		if (token == null) {
			return false
		}
		if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 20) {
			tag_token = true
			tag_handle = $.pointerValue<__goscript_yamlh.yaml_token_t>(token).value
			tag_suffix = $.pointerValue<__goscript_yamlh.yaml_token_t>(token).suffix
			tag_mark = $.assignStruct(tag_mark, $.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark)
			end_mark = $.assignStruct(end_mark, $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark)
			skip_token(parser)
			token = await peek_token(parser)
			if (token == null) {
				return false
			}
		}
	} else {
		if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 20) {
			tag_token = true
			tag_handle = $.pointerValue<__goscript_yamlh.yaml_token_t>(token).value
			tag_suffix = $.pointerValue<__goscript_yamlh.yaml_token_t>(token).suffix
			start_mark = $.assignStruct(start_mark, $.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark)
			tag_mark = $.assignStruct(tag_mark, $.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark)
			end_mark = $.assignStruct(end_mark, $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark)
			skip_token(parser)
			token = await peek_token(parser)
			if (token == null) {
				return false
			}
			if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 19) {
				anchor = $.pointerValue<__goscript_yamlh.yaml_token_t>(token).value
				end_mark = $.assignStruct(end_mark, $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark)
				skip_token(parser)
				token = await peek_token(parser)
				if (token == null) {
					return false
				}
			}
		}
	}

	let tag: $.Slice<number> = null! as $.Slice<number>
	if (tag_token) {
		if ($.sliceLen(tag_handle) == 0) {
			tag = tag_suffix
			tag_suffix = null
		} else {
			for (let __goscriptRangeTarget0 = (parser$ as __goscript_yamlh.yaml_parser_t).tag_directives, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
				if (bytes.Equal($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).tag_directives!, i).handle, tag_handle)) {
					tag = $.appendSlice<number>(null, $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).tag_directives!, i).prefix, $.byteSliceHint)
					tag = $.appendSlice(tag, tag_suffix, $.byteSliceHint)
					break
				}
			}
			if ($.sliceLen(tag) == 0) {
				yaml_parser_set_parser_error_context(parser, "while parsing a node", start_mark, "found undefined tag handle", tag_mark)
				return false
			}
		}
	}

	let implicit = $.sliceLen(tag) == 0
	if (indentless_sequence && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 14)) {
		end_mark = $.assignStruct(end_mark, $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark);
		;(parser$ as __goscript_yamlh.yaml_parser_t).state = 10
		$.assignStruct((event$ as __goscript_yamlh.yaml_event_t), new __goscript_yamlh.yaml_event_t({typ: 7, start_mark: start_mark, end_mark: end_mark, anchor: anchor, tag: tag, implicit: implicit, style: 1}, true))
		return true
	}
	if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 21) {
		let plain_implicit: boolean = false
		let quoted_implicit: boolean = false
		end_mark = $.assignStruct(end_mark, $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark)
		if ((($.sliceLen(tag) == 0) && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).style == 2)) || (($.sliceLen(tag) == 1) && ($.arrayIndex(tag!, 0) == 33))) {
			plain_implicit = true
		} else {
			if ($.sliceLen(tag) == 0) {
				quoted_implicit = true
			}
		}
		;(parser$ as __goscript_yamlh.yaml_parser_t).state = $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).states!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1);
		;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).states, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1)

		$.assignStruct((event$ as __goscript_yamlh.yaml_event_t), new __goscript_yamlh.yaml_event_t({typ: 6, start_mark: start_mark, end_mark: end_mark, anchor: anchor, tag: tag, value: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).value, implicit: plain_implicit, quoted_implicit: quoted_implicit, style: $.int($.pointerValue<__goscript_yamlh.yaml_token_t>(token).style, 8)}, true))
		yaml_parser_set_event_comments(parser, event)
		skip_token(parser)
		return true
	}
	if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 10) {
		// [Go] Some of the events below can be merged as they differ only on style.
		end_mark = $.assignStruct(end_mark, $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark);
		;(parser$ as __goscript_yamlh.yaml_parser_t).state = 14
		$.assignStruct((event$ as __goscript_yamlh.yaml_event_t), new __goscript_yamlh.yaml_event_t({typ: 7, start_mark: start_mark, end_mark: end_mark, anchor: anchor, tag: tag, implicit: implicit, style: 2}, true))
		yaml_parser_set_event_comments(parser, event)
		return true
	}
	if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 12) {
		end_mark = $.assignStruct(end_mark, $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark);
		;(parser$ as __goscript_yamlh.yaml_parser_t).state = 19
		$.assignStruct((event$ as __goscript_yamlh.yaml_event_t), new __goscript_yamlh.yaml_event_t({typ: 9, start_mark: start_mark, end_mark: end_mark, anchor: anchor, tag: tag, implicit: implicit, style: 2}, true))
		yaml_parser_set_event_comments(parser, event)
		return true
	}
	if (block && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 7)) {
		end_mark = $.assignStruct(end_mark, $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark);
		;(parser$ as __goscript_yamlh.yaml_parser_t).state = 8
		$.assignStruct((event$ as __goscript_yamlh.yaml_event_t), new __goscript_yamlh.yaml_event_t({typ: 7, start_mark: start_mark, end_mark: end_mark, anchor: anchor, tag: tag, implicit: implicit, style: 1}, true))
		if ((parser$ as __goscript_yamlh.yaml_parser_t).stem_comment != null) {
			;(event$ as __goscript_yamlh.yaml_event_t).head_comment = (parser$ as __goscript_yamlh.yaml_parser_t).stem_comment;
			;(parser$ as __goscript_yamlh.yaml_parser_t).stem_comment = null
		}
		return true
	}
	if (block && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 8)) {
		end_mark = $.assignStruct(end_mark, $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark);
		;(parser$ as __goscript_yamlh.yaml_parser_t).state = 11
		$.assignStruct((event$ as __goscript_yamlh.yaml_event_t), new __goscript_yamlh.yaml_event_t({typ: 9, start_mark: start_mark, end_mark: end_mark, anchor: anchor, tag: tag, implicit: implicit, style: 1}, true))
		if ((parser$ as __goscript_yamlh.yaml_parser_t).stem_comment != null) {
			;(event$ as __goscript_yamlh.yaml_event_t).head_comment = (parser$ as __goscript_yamlh.yaml_parser_t).stem_comment;
			;(parser$ as __goscript_yamlh.yaml_parser_t).stem_comment = null
		}
		return true
	}
	if (($.sliceLen(anchor) > 0) || ($.sliceLen(tag) > 0)) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).state = $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).states!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1);
		;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).states, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1)

		$.assignStruct((event$ as __goscript_yamlh.yaml_event_t), new __goscript_yamlh.yaml_event_t({typ: 6, start_mark: start_mark, end_mark: end_mark, anchor: anchor, tag: tag, implicit: implicit, quoted_implicit: false, style: 2}, true))
		return true
	}

	let context = "while parsing a flow node"
	if (block) {
		context = "while parsing a block node"
	}
	yaml_parser_set_parser_error_context(parser, context, start_mark, "did not find expected node content", ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())
	return false
}

export async function yaml_parser_parse_block_sequence_entry(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, first: boolean): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	if (first) {
		let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
		if (token == null) {
			return false
		}
		;(parser$ as __goscript_yamlh.yaml_parser_t).marks = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).marks, ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())
		skip_token(parser)
	}

	let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
	if (token == null) {
		return false
	}

	if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 14) {
		let mark = ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark).clone()
		let prior_head_len = $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).head_comment)
		skip_token(parser)
		await yaml_parser_split_stem_comment(parser, prior_head_len)
		token = await peek_token(parser)
		if (token == null) {
			return false
		}
		if (($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 14) && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 9)) {
			;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).states, 9)
			return yaml_parser_parse_node(parser, event, true, false)
		} else {
			;(parser$ as __goscript_yamlh.yaml_parser_t).state = 9
			return yaml_parser_process_empty_scalar(parser, event, mark)
		}
	}
	if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 9) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).state = $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).states!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1);
		;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).states, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1);
		;(parser$ as __goscript_yamlh.yaml_parser_t).marks = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).marks, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).marks) - 1)

		$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 8, start_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark, end_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark}, true))

		skip_token(parser)
		return true
	}

	let context_mark = ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).marks!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).marks) - 1)).clone();
	;(parser$ as __goscript_yamlh.yaml_parser_t).marks = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).marks, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).marks) - 1)
	return yaml_parser_set_parser_error_context(parser, "while parsing a block collection", context_mark, "did not find expected '-' indicator", ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())
}

export async function yaml_parser_parse_indentless_sequence_entry(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
	if (token == null) {
		return false
	}

	if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 14) {
		let mark = ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark).clone()
		let prior_head_len = $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).head_comment)
		skip_token(parser)
		await yaml_parser_split_stem_comment(parser, prior_head_len)
		token = await peek_token(parser)
		if (token == null) {
			return false
		}
		if (((($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 14) && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 16)) && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 17)) && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 9)) {
			;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).states, 10)
			return yaml_parser_parse_node(parser, event, true, false)
		}
		;(parser$ as __goscript_yamlh.yaml_parser_t).state = 10
		return yaml_parser_process_empty_scalar(parser, event, mark)
	}
	;(parser$ as __goscript_yamlh.yaml_parser_t).state = $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).states!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1);
	;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).states, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1)

	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 8, start_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark, end_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark}, true))
	return true
}

export async function yaml_parser_split_stem_comment(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, stem_len: number): globalThis.Promise<void> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	if (stem_len == 0) {
		return
	}

	let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
	let token$: __goscript_yamlh.yaml_token_t = token == null ? $.pointerTarget<__goscript_yamlh.yaml_token_t>(token) : (token as any).__isVarRef === true ? (token as any).value : (token as any).__goValue === undefined ? (token as any) : $.pointerTarget<__goscript_yamlh.yaml_token_t>(token)
	if ((token == null) || (((token$ as __goscript_yamlh.yaml_token_t).typ != 7) && ((token$ as __goscript_yamlh.yaml_token_t).typ != 8))) {
		return
	}

	;(parser$ as __goscript_yamlh.yaml_parser_t).stem_comment = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).head_comment, undefined, stem_len)
	if ($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).head_comment) == stem_len) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).head_comment = null
	} else {
		// Copy suffix to prevent very strange bugs if someone ever appends
		// further bytes to the prefix in the stem_comment slice above.
		;(parser$ as __goscript_yamlh.yaml_parser_t).head_comment = $.appendSlice<number>(null, $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).head_comment, stem_len + 1, undefined), $.byteSliceHint)
	}
}

export async function yaml_parser_parse_block_mapping_key(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, first: boolean): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	if (first) {
		let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
		if (token == null) {
			return false
		}
		;(parser$ as __goscript_yamlh.yaml_parser_t).marks = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).marks, ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())
		skip_token(parser)
	}

	let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
	if (token == null) {
		return false
	}

	// [Go] A tail comment was left from the prior mapping value processed. Emit an event
	//      as it needs to be processed with that value and not the following key.
	if ($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).tail_comment) > 0) {
		$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 11, start_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark, end_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark, foot_comment: (parser$ as __goscript_yamlh.yaml_parser_t).tail_comment}, true));
		;(parser$ as __goscript_yamlh.yaml_parser_t).tail_comment = null
		return true
	}

	if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 16) {
		let mark = ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark).clone()
		skip_token(parser)
		token = await peek_token(parser)
		if (token == null) {
			return false
		}
		if ((($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 16) && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 17)) && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 9)) {
			;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).states, 13)
			return yaml_parser_parse_node(parser, event, true, true)
		} else {
			;(parser$ as __goscript_yamlh.yaml_parser_t).state = 13
			return yaml_parser_process_empty_scalar(parser, event, mark)
		}
	} else {
		if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 9) {
			;(parser$ as __goscript_yamlh.yaml_parser_t).state = $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).states!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1);
			;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).states, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1);
			;(parser$ as __goscript_yamlh.yaml_parser_t).marks = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).marks, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).marks) - 1)
			$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 10, start_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark, end_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark}, true))
			yaml_parser_set_event_comments(parser, event)
			skip_token(parser)
			return true
		}
	}

	let context_mark = ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).marks!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).marks) - 1)).clone();
	;(parser$ as __goscript_yamlh.yaml_parser_t).marks = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).marks, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).marks) - 1)
	return yaml_parser_set_parser_error_context(parser, "while parsing a block mapping", context_mark, "did not find expected key", ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())
}

export async function yaml_parser_parse_block_mapping_value(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
	if (token == null) {
		return false
	}
	if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 17) {
		let mark = ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark).clone()
		skip_token(parser)
		token = await peek_token(parser)
		if (token == null) {
			return false
		}
		if ((($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 16) && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 17)) && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 9)) {
			;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).states, 12)
			return yaml_parser_parse_node(parser, event, true, true)
		}
		;(parser$ as __goscript_yamlh.yaml_parser_t).state = 12
		return yaml_parser_process_empty_scalar(parser, event, mark)
	}
	;(parser$ as __goscript_yamlh.yaml_parser_t).state = 12
	return yaml_parser_process_empty_scalar(parser, event, ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())
}

export async function yaml_parser_parse_flow_sequence_entry(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, first: boolean): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	if (first) {
		let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
		if (token == null) {
			return false
		}
		;(parser$ as __goscript_yamlh.yaml_parser_t).marks = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).marks, ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())
		skip_token(parser)
	}
	let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
	if (token == null) {
		return false
	}
	if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 11) {
		if (!first) {
			if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 15) {
				skip_token(parser)
				token = await peek_token(parser)
				if (token == null) {
					return false
				}
			} else {
				let context_mark = ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).marks!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).marks) - 1)).clone();
				;(parser$ as __goscript_yamlh.yaml_parser_t).marks = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).marks, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).marks) - 1)
				return yaml_parser_set_parser_error_context(parser, "while parsing a flow sequence", context_mark, "did not find expected ',' or ']'", ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())
			}
		}

		if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 16) {
			;(parser$ as __goscript_yamlh.yaml_parser_t).state = 16
			$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 9, start_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark, end_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark, implicit: true, style: 2}, true))
			skip_token(parser)
			return true
		} else {
			if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 11) {
				;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).states, 15)
				return yaml_parser_parse_node(parser, event, false, false)
			}
		}
	}

	;(parser$ as __goscript_yamlh.yaml_parser_t).state = $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).states!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1);
	;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).states, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1);
	;(parser$ as __goscript_yamlh.yaml_parser_t).marks = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).marks, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).marks) - 1)

	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 8, start_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark, end_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark}, true))
	yaml_parser_set_event_comments(parser, event)

	skip_token(parser)
	return true
}

export async function yaml_parser_parse_flow_sequence_entry_mapping_key(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
	let token$: __goscript_yamlh.yaml_token_t = token == null ? $.pointerTarget<__goscript_yamlh.yaml_token_t>(token) : (token as any).__isVarRef === true ? (token as any).value : (token as any).__goValue === undefined ? (token as any) : $.pointerTarget<__goscript_yamlh.yaml_token_t>(token)
	if (token == null) {
		return false
	}
	if ((((token$ as __goscript_yamlh.yaml_token_t).typ != 17) && ((token$ as __goscript_yamlh.yaml_token_t).typ != 15)) && ((token$ as __goscript_yamlh.yaml_token_t).typ != 11)) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).states, 17)
		return yaml_parser_parse_node(parser, event, false, false)
	}
	let mark = ((token$ as __goscript_yamlh.yaml_token_t).end_mark).clone()
	skip_token(parser);
	;(parser$ as __goscript_yamlh.yaml_parser_t).state = 17
	return yaml_parser_process_empty_scalar(parser, event, mark)
}

export async function yaml_parser_parse_flow_sequence_entry_mapping_value(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
	let token$: __goscript_yamlh.yaml_token_t = token == null ? $.pointerTarget<__goscript_yamlh.yaml_token_t>(token) : (token as any).__isVarRef === true ? (token as any).value : (token as any).__goValue === undefined ? (token as any) : $.pointerTarget<__goscript_yamlh.yaml_token_t>(token)
	if (token == null) {
		return false
	}
	if ((token$ as __goscript_yamlh.yaml_token_t).typ == 17) {
		skip_token(parser)
		let __goscriptShadow0: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
		if (__goscriptShadow0 == null) {
			return false
		}
		if (($.pointerValue<__goscript_yamlh.yaml_token_t>(__goscriptShadow0).typ != 15) && ($.pointerValue<__goscript_yamlh.yaml_token_t>(__goscriptShadow0).typ != 11)) {
			;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).states, 18)
			return yaml_parser_parse_node(parser, event, false, false)
		}
	}
	;(parser$ as __goscript_yamlh.yaml_parser_t).state = 18
	return yaml_parser_process_empty_scalar(parser, event, ((token$ as __goscript_yamlh.yaml_token_t).start_mark).clone())
}

export async function yaml_parser_parse_flow_sequence_entry_mapping_end(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
	let token$: __goscript_yamlh.yaml_token_t = token == null ? $.pointerTarget<__goscript_yamlh.yaml_token_t>(token) : (token as any).__isVarRef === true ? (token as any).value : (token as any).__goValue === undefined ? (token as any) : $.pointerTarget<__goscript_yamlh.yaml_token_t>(token)
	if (token == null) {
		return false
	}
	$.pointerValue<__goscript_yamlh.yaml_parser_t>(parser).state = 15
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 10, start_mark: (token$ as __goscript_yamlh.yaml_token_t).start_mark, end_mark: (token$ as __goscript_yamlh.yaml_token_t).start_mark}, true))
	return true
}

export async function yaml_parser_parse_flow_mapping_key(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, first: boolean): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	if (first) {
		let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser);
		;(parser$ as __goscript_yamlh.yaml_parser_t).marks = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).marks, ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())
		skip_token(parser)
	}

	let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
	if (token == null) {
		return false
	}

	if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 13) {
		if (!first) {
			if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 15) {
				skip_token(parser)
				token = await peek_token(parser)
				if (token == null) {
					return false
				}
			} else {
				let context_mark = ($.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).marks!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).marks) - 1)).clone();
				;(parser$ as __goscript_yamlh.yaml_parser_t).marks = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).marks, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).marks) - 1)
				return yaml_parser_set_parser_error_context(parser, "while parsing a flow mapping", context_mark, "did not find expected ',' or '}'", ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())
			}
		}

		if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 16) {
			skip_token(parser)
			token = await peek_token(parser)
			if (token == null) {
				return false
			}
			if ((($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 17) && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 15)) && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 13)) {
				;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).states, 21)
				return yaml_parser_parse_node(parser, event, false, false)
			} else {
				;(parser$ as __goscript_yamlh.yaml_parser_t).state = 21
				return yaml_parser_process_empty_scalar(parser, event, ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())
			}
		} else {
			if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 13) {
				;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).states, 22)
				return yaml_parser_parse_node(parser, event, false, false)
			}
		}
	}

	;(parser$ as __goscript_yamlh.yaml_parser_t).state = $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).states!, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1);
	;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).states, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).states) - 1);
	;(parser$ as __goscript_yamlh.yaml_parser_t).marks = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).marks, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).marks) - 1)
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 10, start_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark, end_mark: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).end_mark}, true))
	yaml_parser_set_event_comments(parser, event)
	skip_token(parser)
	return true
}

export async function yaml_parser_parse_flow_mapping_value(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, empty: boolean): globalThis.Promise<boolean> {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
	if (token == null) {
		return false
	}
	if (empty) {
		;(parser$ as __goscript_yamlh.yaml_parser_t).state = 20
		return yaml_parser_process_empty_scalar(parser, event, ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())
	}
	if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 17) {
		skip_token(parser)
		token = await peek_token(parser)
		if (token == null) {
			return false
		}
		if (($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 15) && ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ != 13)) {
			;(parser$ as __goscript_yamlh.yaml_parser_t).states = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).states, 20)
			return yaml_parser_parse_node(parser, event, false, false)
		}
	}
	;(parser$ as __goscript_yamlh.yaml_parser_t).state = 20
	return yaml_parser_process_empty_scalar(parser, event, ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())
}

export function yaml_parser_process_empty_scalar(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, mark: __goscript_yamlh.yaml_mark_t): boolean {
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 6, start_mark: mark, end_mark: mark, value: null, implicit: true, style: 2}, true))
	return true
}

export var default_tag_directives: $.Slice<__goscript_yamlh.yaml_tag_directive_t>

export function __goscript_init_default_tag_directives(): void {
	if (((default_tag_directives) as any) === undefined) {
		default_tag_directives = $.arrayToSlice<__goscript_yamlh.yaml_tag_directive_t>([new __goscript_yamlh.yaml_tag_directive_t({handle: new Uint8Array([33]), prefix: new Uint8Array([33])}, true), new __goscript_yamlh.yaml_tag_directive_t({handle: new Uint8Array([33, 33]), prefix: new Uint8Array([116, 97, 103, 58, 121, 97, 109, 108, 46, 111, 114, 103, 44, 50, 48, 48, 50, 58])}, true)])
	}
}

export function __goscript_get_default_tag_directives(): $.Slice<__goscript_yamlh.yaml_tag_directive_t> {
	if (((default_tag_directives) as any) === undefined) {
		__goscript_init_default_tag_directives()
	}
	return default_tag_directives
}

export function __goscript_set_default_tag_directives(__goscriptValue: $.Slice<__goscript_yamlh.yaml_tag_directive_t>): void {
	default_tag_directives = __goscriptValue
}

export async function yaml_parser_process_directives(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, version_directive_ref: $.VarRef<__goscript_yamlh.yaml_version_directive_t | $.VarRef<__goscript_yamlh.yaml_version_directive_t> | null> | null, tag_directives_ref: $.VarRef<$.Slice<__goscript_yamlh.yaml_tag_directive_t>> | null): globalThis.Promise<boolean> {

	let version_directive: __goscript_yamlh.yaml_version_directive_t | $.VarRef<__goscript_yamlh.yaml_version_directive_t> | null = null! as __goscript_yamlh.yaml_version_directive_t | $.VarRef<__goscript_yamlh.yaml_version_directive_t> | null
	let tag_directives: $.Slice<__goscript_yamlh.yaml_tag_directive_t> = null! as $.Slice<__goscript_yamlh.yaml_tag_directive_t>

	let token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null = await peek_token(parser)
	if (token == null) {
		return false
	}

	while (($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 3) || ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 4)) {
		if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 3) {
			if (version_directive != null) {
				yaml_parser_set_parser_error(parser, "found duplicate %YAML directive", ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())
				return false
			}
			if (($.pointerValue<__goscript_yamlh.yaml_token_t>(token).major != 1) || ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).minor != 1)) {
				yaml_parser_set_parser_error(parser, "found incompatible YAML document", ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())
				return false
			}
			version_directive = new __goscript_yamlh.yaml_version_directive_t({major: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).major, minor: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).minor})
		} else {
			if ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).typ == 4) {
				let value = new __goscript_yamlh.yaml_tag_directive_t({handle: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).value, prefix: $.pointerValue<__goscript_yamlh.yaml_token_t>(token).prefix}, true)
				if (!yaml_parser_append_tag_directive(parser, value, false, ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())) {
					return false
				}
				tag_directives = $.appendOne(tag_directives, (value).clone())
			}
		}

		skip_token(parser)
		token = await peek_token(parser)
		if (token == null) {
			return false
		}
	}

	for (let __goscriptRangeTarget1 = __goscript_get_default_tag_directives(), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		if (!yaml_parser_append_tag_directive(parser, ($.arrayIndex(__goscript_get_default_tag_directives()!, i)).clone(), true, ($.pointerValue<__goscript_yamlh.yaml_token_t>(token).start_mark).clone())) {
			return false
		}
	}

	if (version_directive_ref != null) {
		version_directive_ref!.value = version_directive
	}
	if (tag_directives_ref != null) {
		tag_directives_ref!.value = tag_directives
	}
	return true
}

export function yaml_parser_append_tag_directive(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, value: __goscript_yamlh.yaml_tag_directive_t, allow_duplicates: boolean, mark: __goscript_yamlh.yaml_mark_t): boolean {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	for (let __goscriptRangeTarget2 = (parser$ as __goscript_yamlh.yaml_parser_t).tag_directives, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
		if (bytes.Equal(value.handle, $.arrayIndex((parser$ as __goscript_yamlh.yaml_parser_t).tag_directives!, i).handle)) {
			if (allow_duplicates) {
				return true
			}
			return yaml_parser_set_parser_error(parser, "found duplicate %TAG directive", mark)
		}
	}

	// [Go] I suspect the copy is unnecessary. This was likely done
	// because there was no way to track ownership of the data.
	let value_copy = new __goscript_yamlh.yaml_tag_directive_t({handle: $.makeSlice<number>($.sliceLen(value.handle), undefined, "byte"), prefix: $.makeSlice<number>($.sliceLen(value.prefix), undefined, "byte")}, true)
	$.copy(value_copy.handle, value.handle)
	$.copy(value_copy.prefix, value.prefix);
	;(parser$ as __goscript_yamlh.yaml_parser_t).tag_directives = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).tag_directives, (value_copy).clone())
	return true
}
