// Generated file based on apic.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_yamlh from "./yamlh.gs.ts"

import * as __goscript_yamlprivateh from "./yamlprivateh.gs.ts"
import "@goscript/io/index.js"
import "./yamlh.gs.ts"
import "./yamlprivateh.gs.ts"

export function yaml_insert_token(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, pos: number, token: __goscript_yamlh.yaml_token_t | $.VarRef<__goscript_yamlh.yaml_token_t> | null): void {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	//fmt.Println("yaml_insert_token", "pos:", pos, "typ:", token.typ, "head:", parser.tokens_head, "len:", len(parser.tokens))

	// Check if we can move the queue at the beginning of the buffer.
	if (((parser$ as __goscript_yamlh.yaml_parser_t).tokens_head > 0) && ($.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).tokens) == $.cap((parser$ as __goscript_yamlh.yaml_parser_t).tokens))) {
		if ((parser$ as __goscript_yamlh.yaml_parser_t).tokens_head != $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).tokens)) {
			$.copy((parser$ as __goscript_yamlh.yaml_parser_t).tokens, $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).tokens, (parser$ as __goscript_yamlh.yaml_parser_t).tokens_head, undefined))
		}
		;(parser$ as __goscript_yamlh.yaml_parser_t).tokens = $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).tokens, undefined, $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).tokens) - (parser$ as __goscript_yamlh.yaml_parser_t).tokens_head);
		;(parser$ as __goscript_yamlh.yaml_parser_t).tokens_head = 0
	}
	;(parser$ as __goscript_yamlh.yaml_parser_t).tokens = $.appendOne((parser$ as __goscript_yamlh.yaml_parser_t).tokens, ($.pointerValue<__goscript_yamlh.yaml_token_t>(token)).clone())
	if (pos < 0) {
		return
	}
	$.copy($.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).tokens, ((parser$ as __goscript_yamlh.yaml_parser_t).tokens_head + pos) + 1, undefined), $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).tokens, (parser$ as __goscript_yamlh.yaml_parser_t).tokens_head + pos, undefined))
	$.assignStruct($.sliceElems((parser$ as __goscript_yamlh.yaml_parser_t).tokens!)[$.sliceSlot((parser$ as __goscript_yamlh.yaml_parser_t).tokens!, (parser$ as __goscript_yamlh.yaml_parser_t).tokens_head + pos)], $.pointerValue<__goscript_yamlh.yaml_token_t>(token))
}

export function yaml_parser_initialize(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): boolean {
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_parser_t>(parser), new __goscript_yamlh.yaml_parser_t({raw_buffer: $.makeSlice<number>(0, 512, "byte"), buffer: $.makeSlice<number>(0, 1536, "byte")}, true))
	return true
}

export function yaml_parser_delete(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null): void {
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_parser_t>(parser), new __goscript_yamlh.yaml_parser_t(undefined, true))
}

export function yaml_string_read_handler(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, buffer: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	if ((parser$ as __goscript_yamlh.yaml_parser_t).input_pos == $.sliceLen((parser$ as __goscript_yamlh.yaml_parser_t).input)) {
		return [0, io.EOF]
	}
	n = $.copy(buffer, $.goSlice((parser$ as __goscript_yamlh.yaml_parser_t).input, (parser$ as __goscript_yamlh.yaml_parser_t).input_pos, undefined));
	;(parser$ as __goscript_yamlh.yaml_parser_t).input_pos = (parser$ as __goscript_yamlh.yaml_parser_t).input_pos + (n)
	return [n, null]
}

export async function yaml_reader_read_handler(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, buffer: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	return $.pointerValue<Exclude<io.Reader, null>>($.pointerValue<__goscript_yamlh.yaml_parser_t>(parser).input_reader).Read(buffer)
}

export function yaml_parser_set_input_string(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, input: $.Slice<number>): void {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	if ((parser$ as __goscript_yamlh.yaml_parser_t).read_handler != null) {
		$.panic("must set the input source only once")
	}
	;(parser$ as __goscript_yamlh.yaml_parser_t).read_handler = yaml_string_read_handler;
	;(parser$ as __goscript_yamlh.yaml_parser_t).input = input;
	;(parser$ as __goscript_yamlh.yaml_parser_t).input_pos = 0
}

export function yaml_parser_set_input_reader(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, r: io.Reader | null): void {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	if ((parser$ as __goscript_yamlh.yaml_parser_t).read_handler != null) {
		$.panic("must set the input source only once")
	}
	;(parser$ as __goscript_yamlh.yaml_parser_t).read_handler = yaml_reader_read_handler;
	;(parser$ as __goscript_yamlh.yaml_parser_t).input_reader = r
}

export function yaml_parser_set_encoding(parser: __goscript_yamlh.yaml_parser_t | $.VarRef<__goscript_yamlh.yaml_parser_t> | null, encoding: __goscript_yamlh.yaml_encoding_t): void {
	const parser$: __goscript_yamlh.yaml_parser_t = parser == null ? $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser) : (parser as any).__isVarRef === true ? (parser as any).value : (parser as any).__goValue === undefined ? (parser as any) : $.pointerTarget<__goscript_yamlh.yaml_parser_t>(parser)
	if ((parser$ as __goscript_yamlh.yaml_parser_t).encoding != 0) {
		$.panic("must set the encoding only once")
	}
	;(parser$ as __goscript_yamlh.yaml_parser_t).encoding = encoding
}

export function yaml_emitter_initialize(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): void {
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_emitter_t>(emitter), new __goscript_yamlh.yaml_emitter_t({buffer: $.makeSlice<number>(128, undefined, "byte"), raw_buffer: $.makeSlice<number>(0, 258, "byte"), states: $.makeSlice<__goscript_yamlh.yaml_emitter_state_t>(0, 16, "number"), events: $.makeSlice<__goscript_yamlh.yaml_event_t>(0, 16, undefined, () => new __goscript_yamlh.yaml_event_t(undefined, true)), best_width: -1}, true))
}

export function yaml_emitter_delete(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): void {
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_emitter_t>(emitter), new __goscript_yamlh.yaml_emitter_t(undefined, true))
}

export function yaml_string_write_handler(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, buffer: $.Slice<number>): $.GoError {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter);
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).output_buffer!.value = $.appendSlice($.pointerValue<$.Slice<number>>((emitter$ as __goscript_yamlh.yaml_emitter_t).output_buffer), buffer, $.byteSliceHint)
	return null
}

export async function yaml_writer_write_handler(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, buffer: $.Slice<number>): globalThis.Promise<$.GoError> {
	let [, err] = await $.pointerValue<Exclude<io.Writer, null>>($.pointerValue<__goscript_yamlh.yaml_emitter_t>(emitter).output_writer).Write(buffer)
	return err
}

export function yaml_emitter_set_output_string(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, output_buffer: $.VarRef<$.Slice<number>> | null): void {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).write_handler != null) {
		$.panic("must set the output target only once")
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).write_handler = yaml_string_write_handler;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).output_buffer = output_buffer
}

export function yaml_emitter_set_output_writer(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, w: io.Writer | null): void {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).write_handler != null) {
		$.panic("must set the output target only once")
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).write_handler = yaml_writer_write_handler;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).output_writer = w
}

export function yaml_emitter_set_encoding(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, encoding: __goscript_yamlh.yaml_encoding_t): void {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).encoding != 0) {
		$.panic("must set the output encoding only once")
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).encoding = encoding
}

export function yaml_emitter_set_canonical(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, canonical: boolean): void {
	$.pointerValue<__goscript_yamlh.yaml_emitter_t>(emitter).canonical = canonical
}

export function yaml_emitter_set_indent(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, indent: number): void {
	if ((indent < 2) || (indent > 9)) {
		indent = 2
	}
	$.pointerValue<__goscript_yamlh.yaml_emitter_t>(emitter).best_indent = indent
}

export function yaml_emitter_set_width(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, width: number): void {
	if (width < 0) {
		width = -1
	}
	$.pointerValue<__goscript_yamlh.yaml_emitter_t>(emitter).best_width = width
}

export function yaml_emitter_set_unicode(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, unicode: boolean): void {
	$.pointerValue<__goscript_yamlh.yaml_emitter_t>(emitter).unicode = unicode
}

export function yaml_emitter_set_break(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, line_break: __goscript_yamlh.yaml_break_t): void {
	$.pointerValue<__goscript_yamlh.yaml_emitter_t>(emitter).line_break = line_break
}

export function yaml_stream_start_event_initialize(event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, encoding: __goscript_yamlh.yaml_encoding_t): void {
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 1, encoding: encoding}, true))
}

export function yaml_stream_end_event_initialize(event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): void {
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 2}, true))
}

export function yaml_document_start_event_initialize(event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, version_directive: __goscript_yamlh.yaml_version_directive_t | $.VarRef<__goscript_yamlh.yaml_version_directive_t> | null, tag_directives: $.Slice<__goscript_yamlh.yaml_tag_directive_t>, implicit: boolean): void {
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 3, version_directive: version_directive, tag_directives: tag_directives, implicit: implicit}, true))
}

export function yaml_document_end_event_initialize(event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, implicit: boolean): void {
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 4, implicit: implicit}, true))
}

export function yaml_alias_event_initialize(event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, anchor: $.Slice<number>): boolean {
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 5, anchor: anchor}, true))
	return true
}

export function yaml_scalar_event_initialize(event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, anchor: $.Slice<number>, tag: $.Slice<number>, value: $.Slice<number>, plain_implicit: boolean, quoted_implicit: boolean, style: __goscript_yamlh.yaml_scalar_style_t): boolean {
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 6, anchor: anchor, tag: tag, value: value, implicit: plain_implicit, quoted_implicit: quoted_implicit, style: $.int(style, 8)}, true))
	return true
}

export function yaml_sequence_start_event_initialize(event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, anchor: $.Slice<number>, tag: $.Slice<number>, implicit: boolean, style: __goscript_yamlh.yaml_sequence_style_t): boolean {
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 7, anchor: anchor, tag: tag, implicit: implicit, style: $.int(style, 8)}, true))
	return true
}

export function yaml_sequence_end_event_initialize(event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): boolean {
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 8}, true))
	return true
}

export function yaml_mapping_start_event_initialize(event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, anchor: $.Slice<number>, tag: $.Slice<number>, implicit: boolean, style: __goscript_yamlh.yaml_mapping_style_t): void {
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 9, anchor: anchor, tag: tag, implicit: implicit, style: $.int(style, 8)}, true))
}

export function yaml_mapping_end_event_initialize(event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): void {
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t({typ: 10}, true))
}

export function yaml_event_delete(event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): void {
	$.assignStruct($.pointerValue<__goscript_yamlh.yaml_event_t>(event), new __goscript_yamlh.yaml_event_t(undefined, true))
}
