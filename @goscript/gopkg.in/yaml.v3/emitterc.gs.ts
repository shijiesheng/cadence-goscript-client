// Generated file based on emitterc.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_apic from "./apic.gs.ts"

import * as __goscript_parserc from "./parserc.gs.ts"

import * as __goscript_writerc from "./writerc.gs.ts"

import * as __goscript_yamlh from "./yamlh.gs.ts"

import * as __goscript_yamlprivateh from "./yamlprivateh.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "./apic.gs.ts"
import "./parserc.gs.ts"
import "./writerc.gs.ts"
import "./yamlh.gs.ts"
import "./yamlprivateh.gs.ts"

export async function flush(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos + 5) >= $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer)) {
		return __goscript_writerc.yaml_emitter_flush(emitter)
	}
	return true
}

export async function put(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, value: number): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if ((((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos + 5) >= $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer)) && !await __goscript_writerc.yaml_emitter_flush(emitter)) {
		return false
	}
	$.sliceElems((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!)[$.sliceSlot((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!, (emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos)] = value;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos++;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).column++
	return true
}

export async function put_break(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if ((((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos + 5) >= $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer)) && !await __goscript_writerc.yaml_emitter_flush(emitter)) {
		return false
	}
	switch ((emitter$ as __goscript_yamlh.yaml_emitter_t).line_break) {
		case 1:
		{
			$.sliceElems((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!)[$.sliceSlot((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!, (emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos)] = 13;
			;(emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos = (emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos + (1)
			break
		}
		case 2:
		{
			$.sliceElems((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!)[$.sliceSlot((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!, (emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos)] = 10;
			;(emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos = (emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos + (1)
			break
		}
		case 3:
		{
			$.sliceElems((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!)[$.sliceSlot((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!, (emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos + 0)] = 13
			$.sliceElems((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!)[$.sliceSlot((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!, (emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos + 1)] = 10;
			;(emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos = (emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos + (2)
			break
		}
		default:
		{
			$.panic("unknown line break setting")
			break
		}
	}
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).column == 0) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).space_above = true
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).column = 0;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).line++;
	// [Go] Do this here and below and drop from everywhere else (see commented lines).
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).indention = true
	return true
}

export async function write(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, s: $.Slice<number>, i: $.VarRef<number> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if ((((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos + 5) >= $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer)) && !await __goscript_writerc.yaml_emitter_flush(emitter)) {
		return false
	}
	let p = (emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos
	let w = __goscript_yamlprivateh.width($.arrayIndex(s!, $.pointerValue<number>(i)))
	switch (w) {
		case 4:
		{
			$.sliceElems((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!)[$.sliceSlot((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!, p + 3)] = $.arrayIndex(s!, $.pointerValue<number>(i) + 3)
		}
		case 3:
		{
			$.sliceElems((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!)[$.sliceSlot((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!, p + 2)] = $.arrayIndex(s!, $.pointerValue<number>(i) + 2)
		}
		case 2:
		{
			$.sliceElems((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!)[$.sliceSlot((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!, p + 1)] = $.arrayIndex(s!, $.pointerValue<number>(i) + 1)
		}
		case 1:
		{
			$.sliceElems((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!)[$.sliceSlot((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!, p + 0)] = $.arrayIndex(s!, $.pointerValue<number>(i) + 0)
			break
		}
		default:
		{
			$.panic("unknown character width")
			break
		}
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).column++;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos = (emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos + (w)
	i!.value = i!.value + (w)
	return true
}

export async function write_all(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, s: $.Slice<number>): globalThis.Promise<boolean> {
	for (let i = $.varRef(0); i.value < $.sliceLen(s); ) {
		if (!await write(emitter, s, i)) {
			return false
		}
	}
	return true
}

export async function write_break(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, s: $.Slice<number>, i: $.VarRef<number> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if ($.arrayIndex(s!, $.pointerValue<number>(i)) == 10) {
		if (!await put_break(emitter)) {
			return false
		}
		i!.value++
	} else {
		if (!await write(emitter, s, i)) {
			return false
		}
		if ((emitter$ as __goscript_yamlh.yaml_emitter_t).column == 0) {
			;(emitter$ as __goscript_yamlh.yaml_emitter_t).space_above = true
		}
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).column = 0;
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).line++;
		// [Go] Do this here and above and drop from everywhere else (see commented lines).
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).indention = true
	}
	return true
}

export function yaml_emitter_set_emitter_error(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, problem: string): boolean {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter);
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).error = 7;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).problem = problem
	return false
}

export async function yaml_emitter_emit(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter);
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).events = $.appendOne((emitter$ as __goscript_yamlh.yaml_emitter_t).events, ($.pointerValue<__goscript_yamlh.yaml_event_t>(event)).clone())
	while (!yaml_emitter_need_more_events(emitter)) {
		let __goscriptShadow0: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null = $.indexRef((emitter$ as __goscript_yamlh.yaml_emitter_t).events!, (emitter$ as __goscript_yamlh.yaml_emitter_t).events_head)
		if (!yaml_emitter_analyze_event(emitter, __goscriptShadow0)) {
			return false
		}
		if (!await yaml_emitter_state_machine(emitter, __goscriptShadow0)) {
			return false
		}
		__goscript_apic.yaml_event_delete(__goscriptShadow0);
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).events_head++
	}
	return true
}

export function yaml_emitter_need_more_events(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): boolean {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).events_head == $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).events)) {
		return true
	}
	let accumulate: number = 0
	switch ($.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).events!, (emitter$ as __goscript_yamlh.yaml_emitter_t).events_head).typ) {
		case 3:
		{
			accumulate = 1
			break
			break
		}
		case 7:
		{
			accumulate = 2
			break
			break
		}
		case 9:
		{
			accumulate = 3
			break
			break
		}
		default:
		{
			return false
			break
		}
	}
	if (($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).events) - (emitter$ as __goscript_yamlh.yaml_emitter_t).events_head) > accumulate) {
		return false
	}
	let level: number = 0
	for (let i = (emitter$ as __goscript_yamlh.yaml_emitter_t).events_head; i < $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).events); i++) {
		switch ($.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).events!, i).typ) {
			case 1:
			case 3:
			case 7:
			case 9:
			{
				level++
				break
			}
			case 2:
			case 4:
			case 8:
			case 10:
			{
				level--
				break
			}
		}
		if (level == 0) {
			return false
		}
	}
	return true
}

export function yaml_emitter_append_tag_directive(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, value: __goscript_yamlh.yaml_tag_directive_t | $.VarRef<__goscript_yamlh.yaml_tag_directive_t> | null, allow_duplicates: boolean): boolean {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	const value$: __goscript_yamlh.yaml_tag_directive_t = value == null ? $.pointerTarget<__goscript_yamlh.yaml_tag_directive_t>(value) : (value as any).__isVarRef === true ? (value as any).value : (value as any).__goValue === undefined ? (value as any) : $.pointerTarget<__goscript_yamlh.yaml_tag_directive_t>(value)
	for (let i = 0; i < $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_directives); i++) {
		if (bytes.Equal((value$ as __goscript_yamlh.yaml_tag_directive_t).handle, $.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_directives!, i).handle)) {
			if (allow_duplicates) {
				return true
			}
			return yaml_emitter_set_emitter_error(emitter, "duplicate %TAG directive")
		}
	}

	// [Go] Do we actually need to copy this given garbage collection
	// and the lack of deallocating destructors?
	let tag_copy = new __goscript_yamlh.yaml_tag_directive_t({handle: $.makeSlice<number>($.sliceLen((value$ as __goscript_yamlh.yaml_tag_directive_t).handle), undefined, "byte"), prefix: $.makeSlice<number>($.sliceLen((value$ as __goscript_yamlh.yaml_tag_directive_t).prefix), undefined, "byte")}, true)
	$.copy(tag_copy.handle, (value$ as __goscript_yamlh.yaml_tag_directive_t).handle)
	$.copy(tag_copy.prefix, (value$ as __goscript_yamlh.yaml_tag_directive_t).prefix);
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).tag_directives = $.appendOne((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_directives, (tag_copy).clone())
	return true
}

export function yaml_emitter_increase_indent(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, flow: boolean, indentless: boolean): boolean {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter);
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).indents = $.appendOne((emitter$ as __goscript_yamlh.yaml_emitter_t).indents, (emitter$ as __goscript_yamlh.yaml_emitter_t).indent)
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).indent < 0) {
		if (flow) {
			;(emitter$ as __goscript_yamlh.yaml_emitter_t).indent = (emitter$ as __goscript_yamlh.yaml_emitter_t).best_indent
		} else {
			;(emitter$ as __goscript_yamlh.yaml_emitter_t).indent = 0
		}
	} else {
		if (!indentless) {
			// [Go] This was changed so that indentations are more regular.
			if ($.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).states!, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).states) - 1) == 14) {
				// The first indent inside a sequence will just skip the "- " indicator.
				;(emitter$ as __goscript_yamlh.yaml_emitter_t).indent = (emitter$ as __goscript_yamlh.yaml_emitter_t).indent + (2)
			} else {
				// Everything else aligns to the chosen indentation.
				;(emitter$ as __goscript_yamlh.yaml_emitter_t).indent = (emitter$ as __goscript_yamlh.yaml_emitter_t).best_indent * (globalThis.Math.trunc(((emitter$ as __goscript_yamlh.yaml_emitter_t).indent + (emitter$ as __goscript_yamlh.yaml_emitter_t).best_indent) / (emitter$ as __goscript_yamlh.yaml_emitter_t).best_indent))
			}
		}
	}
	return true
}

export async function yaml_emitter_state_machine(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	switch ($.pointerValue<__goscript_yamlh.yaml_emitter_t>(emitter).state) {
		default:
		{
			break
		}
		case 0:
		{
			return yaml_emitter_emit_stream_start(emitter, event)
			break
		}
		case 1:
		{
			return yaml_emitter_emit_document_start(emitter, event, true)
			break
		}
		case 2:
		{
			return yaml_emitter_emit_document_start(emitter, event, false)
			break
		}
		case 3:
		{
			return yaml_emitter_emit_document_content(emitter, event)
			break
		}
		case 4:
		{
			return yaml_emitter_emit_document_end(emitter, event)
			break
		}
		case 5:
		{
			return yaml_emitter_emit_flow_sequence_item(emitter, event, true, false)
			break
		}
		case 6:
		{
			return yaml_emitter_emit_flow_sequence_item(emitter, event, false, true)
			break
		}
		case 7:
		{
			return yaml_emitter_emit_flow_sequence_item(emitter, event, false, false)
			break
		}
		case 8:
		{
			return yaml_emitter_emit_flow_mapping_key(emitter, event, true, false)
			break
		}
		case 9:
		{
			return yaml_emitter_emit_flow_mapping_key(emitter, event, false, true)
			break
		}
		case 10:
		{
			return yaml_emitter_emit_flow_mapping_key(emitter, event, false, false)
			break
		}
		case 11:
		{
			return yaml_emitter_emit_flow_mapping_value(emitter, event, true)
			break
		}
		case 12:
		{
			return yaml_emitter_emit_flow_mapping_value(emitter, event, false)
			break
		}
		case 13:
		{
			return yaml_emitter_emit_block_sequence_item(emitter, event, true)
			break
		}
		case 14:
		{
			return yaml_emitter_emit_block_sequence_item(emitter, event, false)
			break
		}
		case 15:
		{
			return yaml_emitter_emit_block_mapping_key(emitter, event, true)
			break
		}
		case 16:
		{
			return yaml_emitter_emit_block_mapping_key(emitter, event, false)
			break
		}
		case 17:
		{
			return yaml_emitter_emit_block_mapping_value(emitter, event, true)
			break
		}
		case 18:
		{
			return yaml_emitter_emit_block_mapping_value(emitter, event, false)
			break
		}
		case 19:
		{
			return yaml_emitter_set_emitter_error(emitter, "expected nothing after STREAM-END")
			break
		}
	}
	$.panic("invalid emitter state")
	throw new globalThis.Error("goscript: unreachable return")
}

export async function yaml_emitter_emit_stream_start(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	const event$: __goscript_yamlh.yaml_event_t = event == null ? $.pointerTarget<__goscript_yamlh.yaml_event_t>(event) : (event as any).__isVarRef === true ? (event as any).value : (event as any).__goValue === undefined ? (event as any) : $.pointerTarget<__goscript_yamlh.yaml_event_t>(event)
	if ((event$ as __goscript_yamlh.yaml_event_t).typ != 1) {
		return yaml_emitter_set_emitter_error(emitter, "expected STREAM-START")
	}
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).encoding == 0) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).encoding = (event$ as __goscript_yamlh.yaml_event_t).encoding
		if ((emitter$ as __goscript_yamlh.yaml_emitter_t).encoding == 0) {
			;(emitter$ as __goscript_yamlh.yaml_emitter_t).encoding = 1
		}
	}
	if (((emitter$ as __goscript_yamlh.yaml_emitter_t).best_indent < 2) || ((emitter$ as __goscript_yamlh.yaml_emitter_t).best_indent > 9)) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).best_indent = 2
	}
	if (((emitter$ as __goscript_yamlh.yaml_emitter_t).best_width >= 0) && ((emitter$ as __goscript_yamlh.yaml_emitter_t).best_width <= ((emitter$ as __goscript_yamlh.yaml_emitter_t).best_indent * 2))) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).best_width = 80
	}
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).best_width < 0) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).best_width = 2147483647
	}
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).line_break == 0) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).line_break = 2
	}

	;(emitter$ as __goscript_yamlh.yaml_emitter_t).indent = -1;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).line = 0;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).column = 0;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace = true;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).indention = true;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).space_above = true;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).foot_indent = -1

	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).encoding != 1) {
		if (!await yaml_emitter_write_bom(emitter)) {
			return false
		}
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).state = 1
	return true
}

export async function yaml_emitter_emit_document_start(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, first: boolean): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	const event$: __goscript_yamlh.yaml_event_t = event == null ? $.pointerTarget<__goscript_yamlh.yaml_event_t>(event) : (event as any).__isVarRef === true ? (event as any).value : (event as any).__goValue === undefined ? (event as any) : $.pointerTarget<__goscript_yamlh.yaml_event_t>(event)

	if ((event$ as __goscript_yamlh.yaml_event_t).typ == 3) {

		if ((event$ as __goscript_yamlh.yaml_event_t).version_directive != null) {
			if (!yaml_emitter_analyze_version_directive(emitter, (event$ as __goscript_yamlh.yaml_event_t).version_directive)) {
				return false
			}
		}

		for (let i = 0; i < $.sliceLen((event$ as __goscript_yamlh.yaml_event_t).tag_directives); i++) {
			let tag_directive: __goscript_yamlh.yaml_tag_directive_t | $.VarRef<__goscript_yamlh.yaml_tag_directive_t> | null = $.indexRef((event$ as __goscript_yamlh.yaml_event_t).tag_directives!, i)
			if (!yaml_emitter_analyze_tag_directive(emitter, tag_directive)) {
				return false
			}
			if (!yaml_emitter_append_tag_directive(emitter, tag_directive, false)) {
				return false
			}
		}

		for (let i = 0; i < $.sliceLen(__goscript_parserc.__goscript_get_default_tag_directives()); i++) {
			let tag_directive: __goscript_yamlh.yaml_tag_directive_t | $.VarRef<__goscript_yamlh.yaml_tag_directive_t> | null = $.indexRef(__goscript_parserc.__goscript_get_default_tag_directives()!, i)
			if (!yaml_emitter_append_tag_directive(emitter, tag_directive, true)) {
				return false
			}
		}

		let implicit = (event$ as __goscript_yamlh.yaml_event_t).implicit
		if (!first || (emitter$ as __goscript_yamlh.yaml_emitter_t).canonical) {
			implicit = false
		}

		if ((emitter$ as __goscript_yamlh.yaml_emitter_t).open_ended && (((event$ as __goscript_yamlh.yaml_event_t).version_directive != null) || ($.sliceLen((event$ as __goscript_yamlh.yaml_event_t).tag_directives) > 0))) {
			if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([46, 46, 46]), true, false, false)) {
				return false
			}
			if (!await yaml_emitter_write_indent(emitter)) {
				return false
			}
		}

		if ((event$ as __goscript_yamlh.yaml_event_t).version_directive != null) {
			implicit = false
			if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([37, 89, 65, 77, 76]), true, false, false)) {
				return false
			}
			if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([49, 46, 49]), true, false, false)) {
				return false
			}
			if (!await yaml_emitter_write_indent(emitter)) {
				return false
			}
		}

		if ($.sliceLen((event$ as __goscript_yamlh.yaml_event_t).tag_directives) > 0) {
			implicit = false
			for (let i = 0; i < $.sliceLen((event$ as __goscript_yamlh.yaml_event_t).tag_directives); i++) {
				let tag_directive: __goscript_yamlh.yaml_tag_directive_t | $.VarRef<__goscript_yamlh.yaml_tag_directive_t> | null = $.indexRef((event$ as __goscript_yamlh.yaml_event_t).tag_directives!, i)
				let tag_directive$: __goscript_yamlh.yaml_tag_directive_t = tag_directive == null ? $.pointerTarget<__goscript_yamlh.yaml_tag_directive_t>(tag_directive) : (tag_directive as any).__isVarRef === true ? (tag_directive as any).value : (tag_directive as any).__goValue === undefined ? (tag_directive as any) : $.pointerTarget<__goscript_yamlh.yaml_tag_directive_t>(tag_directive)
				if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([37, 84, 65, 71]), true, false, false)) {
					return false
				}
				if (!await yaml_emitter_write_tag_handle(emitter, (tag_directive$ as __goscript_yamlh.yaml_tag_directive_t).handle)) {
					return false
				}
				if (!await yaml_emitter_write_tag_content(emitter, (tag_directive$ as __goscript_yamlh.yaml_tag_directive_t).prefix, true)) {
					return false
				}
				if (!await yaml_emitter_write_indent(emitter)) {
					return false
				}
			}
		}

		if (yaml_emitter_check_empty_document(emitter)) {
			implicit = false
		}
		if (!implicit) {
			if (!await yaml_emitter_write_indent(emitter)) {
				return false
			}
			if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([45, 45, 45]), true, false, false)) {
				return false
			}
			if ((emitter$ as __goscript_yamlh.yaml_emitter_t).canonical || true) {
				if (!await yaml_emitter_write_indent(emitter)) {
					return false
				}
			}
		}

		if ($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).head_comment) > 0) {
			if (!await yaml_emitter_process_head_comment(emitter)) {
				return false
			}
			if (!await put_break(emitter)) {
				return false
			}
		}

		;(emitter$ as __goscript_yamlh.yaml_emitter_t).state = 3
		return true
	}

	if ((event$ as __goscript_yamlh.yaml_event_t).typ == 2) {
		if ((emitter$ as __goscript_yamlh.yaml_emitter_t).open_ended) {
			if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([46, 46, 46]), true, false, false)) {
				return false
			}
			if (!await yaml_emitter_write_indent(emitter)) {
				return false
			}
		}
		if (!await __goscript_writerc.yaml_emitter_flush(emitter)) {
			return false
		}
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).state = 19
		return true
	}

	return yaml_emitter_set_emitter_error(emitter, "expected DOCUMENT-START or STREAM-END")
}

export async function yaml_emitter_emit_document_content(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter);
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).states = $.appendOne((emitter$ as __goscript_yamlh.yaml_emitter_t).states, 4)

	if (!await yaml_emitter_process_head_comment(emitter)) {
		return false
	}
	if (!await yaml_emitter_emit_node(emitter, event, true, false, false, false)) {
		return false
	}
	if (!await yaml_emitter_process_line_comment(emitter)) {
		return false
	}
	if (!await yaml_emitter_process_foot_comment(emitter)) {
		return false
	}
	return true
}

export async function yaml_emitter_emit_document_end(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	const event$: __goscript_yamlh.yaml_event_t = event == null ? $.pointerTarget<__goscript_yamlh.yaml_event_t>(event) : (event as any).__isVarRef === true ? (event as any).value : (event as any).__goValue === undefined ? (event as any) : $.pointerTarget<__goscript_yamlh.yaml_event_t>(event)
	if ((event$ as __goscript_yamlh.yaml_event_t).typ != 4) {
		return yaml_emitter_set_emitter_error(emitter, "expected DOCUMENT-END")
	}
	// [Go] Force document foot separation.
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).foot_indent = 0
	if (!await yaml_emitter_process_foot_comment(emitter)) {
		return false
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).foot_indent = -1
	if (!await yaml_emitter_write_indent(emitter)) {
		return false
	}
	if (!(event$ as __goscript_yamlh.yaml_event_t).implicit) {
		// [Go] Allocate the slice elsewhere.
		if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([46, 46, 46]), true, false, false)) {
			return false
		}
		if (!await yaml_emitter_write_indent(emitter)) {
			return false
		}
	}
	if (!await __goscript_writerc.yaml_emitter_flush(emitter)) {
		return false
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).state = 2;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).tag_directives = $.goSlice((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_directives, undefined, 0)
	return true
}

export async function yaml_emitter_emit_flow_sequence_item(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, first: boolean, trail: boolean): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (first) {
		if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([91]) as $.Slice<number>, true, true, false)) {
			return false
		}
		if (!yaml_emitter_increase_indent(emitter, true, false)) {
			return false
		}
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).flow_level++
	}

	if ($.pointerValue<__goscript_yamlh.yaml_event_t>(event).typ == 8) {
		if (((emitter$ as __goscript_yamlh.yaml_emitter_t).canonical && !first) && !trail) {
			if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([44]) as $.Slice<number>, false, false, false)) {
				return false
			}
		}
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).flow_level--;
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).indent = $.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).indents!, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).indents) - 1);
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).indents = $.goSlice((emitter$ as __goscript_yamlh.yaml_emitter_t).indents, undefined, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).indents) - 1)
		if (((emitter$ as __goscript_yamlh.yaml_emitter_t).column == 0) || ((emitter$ as __goscript_yamlh.yaml_emitter_t).canonical && !first)) {
			if (!await yaml_emitter_write_indent(emitter)) {
				return false
			}
		}
		if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([93]) as $.Slice<number>, false, false, false)) {
			return false
		}
		if (!await yaml_emitter_process_line_comment(emitter)) {
			return false
		}
		if (!await yaml_emitter_process_foot_comment(emitter)) {
			return false
		}
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).state = $.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).states!, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).states) - 1);
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).states = $.goSlice((emitter$ as __goscript_yamlh.yaml_emitter_t).states, undefined, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).states) - 1)

		return true
	}

	if (!first && !trail) {
		if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([44]) as $.Slice<number>, false, false, false)) {
			return false
		}
	}

	if (!await yaml_emitter_process_head_comment(emitter)) {
		return false
	}
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).column == 0) {
		if (!await yaml_emitter_write_indent(emitter)) {
			return false
		}
	}

	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).canonical || ((emitter$ as __goscript_yamlh.yaml_emitter_t).column > (emitter$ as __goscript_yamlh.yaml_emitter_t).best_width)) {
		if (!await yaml_emitter_write_indent(emitter)) {
			return false
		}
	}
	if ((($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment) + $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).foot_comment)) + $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tail_comment)) > 0) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).states = $.appendOne((emitter$ as __goscript_yamlh.yaml_emitter_t).states, 6)
	} else {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).states = $.appendOne((emitter$ as __goscript_yamlh.yaml_emitter_t).states, 7)
	}
	if (!await yaml_emitter_emit_node(emitter, event, false, true, false, false)) {
		return false
	}
	if ((($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment) + $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).foot_comment)) + $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tail_comment)) > 0) {
		if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([44]) as $.Slice<number>, false, false, false)) {
			return false
		}
	}
	if (!await yaml_emitter_process_line_comment(emitter)) {
		return false
	}
	if (!await yaml_emitter_process_foot_comment(emitter)) {
		return false
	}
	return true
}

export async function yaml_emitter_emit_flow_mapping_key(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, first: boolean, trail: boolean): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (first) {
		if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([123]) as $.Slice<number>, true, true, false)) {
			return false
		}
		if (!yaml_emitter_increase_indent(emitter, true, false)) {
			return false
		}
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).flow_level++
	}

	if ($.pointerValue<__goscript_yamlh.yaml_event_t>(event).typ == 10) {
		if ((((emitter$ as __goscript_yamlh.yaml_emitter_t).canonical || ((($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).head_comment) + $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).foot_comment)) + $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tail_comment)) > 0)) && !first) && !trail) {
			if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([44]) as $.Slice<number>, false, false, false)) {
				return false
			}
		}
		if (!await yaml_emitter_process_head_comment(emitter)) {
			return false
		}
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).flow_level--;
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).indent = $.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).indents!, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).indents) - 1);
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).indents = $.goSlice((emitter$ as __goscript_yamlh.yaml_emitter_t).indents, undefined, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).indents) - 1)
		if ((emitter$ as __goscript_yamlh.yaml_emitter_t).canonical && !first) {
			if (!await yaml_emitter_write_indent(emitter)) {
				return false
			}
		}
		if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([125]) as $.Slice<number>, false, false, false)) {
			return false
		}
		if (!await yaml_emitter_process_line_comment(emitter)) {
			return false
		}
		if (!await yaml_emitter_process_foot_comment(emitter)) {
			return false
		}
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).state = $.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).states!, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).states) - 1);
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).states = $.goSlice((emitter$ as __goscript_yamlh.yaml_emitter_t).states, undefined, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).states) - 1)
		return true
	}

	if (!first && !trail) {
		if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([44]) as $.Slice<number>, false, false, false)) {
			return false
		}
	}

	if (!await yaml_emitter_process_head_comment(emitter)) {
		return false
	}

	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).column == 0) {
		if (!await yaml_emitter_write_indent(emitter)) {
			return false
		}
	}

	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).canonical || ((emitter$ as __goscript_yamlh.yaml_emitter_t).column > (emitter$ as __goscript_yamlh.yaml_emitter_t).best_width)) {
		if (!await yaml_emitter_write_indent(emitter)) {
			return false
		}
	}

	if (!(emitter$ as __goscript_yamlh.yaml_emitter_t).canonical && yaml_emitter_check_simple_key(emitter)) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).states = $.appendOne((emitter$ as __goscript_yamlh.yaml_emitter_t).states, 11)
		return yaml_emitter_emit_node(emitter, event, false, false, true, true)
	}
	if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([63]) as $.Slice<number>, true, false, false)) {
		return false
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).states = $.appendOne((emitter$ as __goscript_yamlh.yaml_emitter_t).states, 12)
	return yaml_emitter_emit_node(emitter, event, false, false, true, false)
}

export async function yaml_emitter_emit_flow_mapping_value(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, simple: boolean): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (simple) {
		if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([58]) as $.Slice<number>, false, false, false)) {
			return false
		}
	} else {
		if ((emitter$ as __goscript_yamlh.yaml_emitter_t).canonical || ((emitter$ as __goscript_yamlh.yaml_emitter_t).column > (emitter$ as __goscript_yamlh.yaml_emitter_t).best_width)) {
			if (!await yaml_emitter_write_indent(emitter)) {
				return false
			}
		}
		if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([58]) as $.Slice<number>, true, false, false)) {
			return false
		}
	}
	if ((($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment) + $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).foot_comment)) + $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tail_comment)) > 0) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).states = $.appendOne((emitter$ as __goscript_yamlh.yaml_emitter_t).states, 9)
	} else {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).states = $.appendOne((emitter$ as __goscript_yamlh.yaml_emitter_t).states, 10)
	}
	if (!await yaml_emitter_emit_node(emitter, event, false, false, true, false)) {
		return false
	}
	if ((($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment) + $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).foot_comment)) + $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tail_comment)) > 0) {
		if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([44]) as $.Slice<number>, false, false, false)) {
			return false
		}
	}
	if (!await yaml_emitter_process_line_comment(emitter)) {
		return false
	}
	if (!await yaml_emitter_process_foot_comment(emitter)) {
		return false
	}
	return true
}

export async function yaml_emitter_emit_block_sequence_item(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, first: boolean): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (first) {
		if (!yaml_emitter_increase_indent(emitter, false, false)) {
			return false
		}
	}
	if ($.pointerValue<__goscript_yamlh.yaml_event_t>(event).typ == 8) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).indent = $.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).indents!, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).indents) - 1);
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).indents = $.goSlice((emitter$ as __goscript_yamlh.yaml_emitter_t).indents, undefined, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).indents) - 1);
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).state = $.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).states!, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).states) - 1);
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).states = $.goSlice((emitter$ as __goscript_yamlh.yaml_emitter_t).states, undefined, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).states) - 1)
		return true
	}
	if (!await yaml_emitter_process_head_comment(emitter)) {
		return false
	}
	if (!await yaml_emitter_write_indent(emitter)) {
		return false
	}
	if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([45]) as $.Slice<number>, true, false, true)) {
		return false
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).states = $.appendOne((emitter$ as __goscript_yamlh.yaml_emitter_t).states, 14)
	if (!await yaml_emitter_emit_node(emitter, event, false, true, false, false)) {
		return false
	}
	if (!await yaml_emitter_process_line_comment(emitter)) {
		return false
	}
	if (!await yaml_emitter_process_foot_comment(emitter)) {
		return false
	}
	return true
}

export async function yaml_emitter_emit_block_mapping_key(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, first: boolean): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (first) {
		if (!yaml_emitter_increase_indent(emitter, false, false)) {
			return false
		}
	}
	if (!await yaml_emitter_process_head_comment(emitter)) {
		return false
	}
	if ($.pointerValue<__goscript_yamlh.yaml_event_t>(event).typ == 10) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).indent = $.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).indents!, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).indents) - 1);
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).indents = $.goSlice((emitter$ as __goscript_yamlh.yaml_emitter_t).indents, undefined, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).indents) - 1);
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).state = $.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).states!, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).states) - 1);
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).states = $.goSlice((emitter$ as __goscript_yamlh.yaml_emitter_t).states, undefined, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).states) - 1)
		return true
	}
	if (!await yaml_emitter_write_indent(emitter)) {
		return false
	}
	if ($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment) > 0) {
		// [Go] A line comment was provided for the key. That's unusual as the
		//      scanner associates line comments with the value. Either way,
		//      save the line comment and render it appropriately later.
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).key_line_comment = (emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment;
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment = null
	}
	if (yaml_emitter_check_simple_key(emitter)) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).states = $.appendOne((emitter$ as __goscript_yamlh.yaml_emitter_t).states, 17)
		return yaml_emitter_emit_node(emitter, event, false, false, true, true)
	}
	if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([63]) as $.Slice<number>, true, false, true)) {
		return false
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).states = $.appendOne((emitter$ as __goscript_yamlh.yaml_emitter_t).states, 18)
	return yaml_emitter_emit_node(emitter, event, false, false, true, false)
}

export async function yaml_emitter_emit_block_mapping_value(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, simple: boolean): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	const event$: __goscript_yamlh.yaml_event_t = event == null ? $.pointerTarget<__goscript_yamlh.yaml_event_t>(event) : (event as any).__isVarRef === true ? (event as any).value : (event as any).__goValue === undefined ? (event as any) : $.pointerTarget<__goscript_yamlh.yaml_event_t>(event)
	if (simple) {
		if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([58]) as $.Slice<number>, false, false, false)) {
			return false
		}
	} else {
		if (!await yaml_emitter_write_indent(emitter)) {
			return false
		}
		if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([58]) as $.Slice<number>, true, false, true)) {
			return false
		}
	}
	if ($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).key_line_comment) > 0) {
		// [Go] Line comments are generally associated with the value, but when there's
		//      no value on the same line as a mapping key they end up attached to the
		//      key itself.
		if ((event$ as __goscript_yamlh.yaml_event_t).typ == 6) {
			if ($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment) == 0) {
				// A scalar is coming and it has no line comments by itself yet,
				// so just let it handle the line comment as usual. If it has a
				// line comment, we can't have both so the one from the key is lost.
				;(emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment = (emitter$ as __goscript_yamlh.yaml_emitter_t).key_line_comment;
				;(emitter$ as __goscript_yamlh.yaml_emitter_t).key_line_comment = null
			}
		} else {
			if (((event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as __goscript_yamlh.yaml_event_t).sequence_style() : __goscript_yamlh.yaml_event_t.prototype.sequence_style.call(event)) != 2) && (((event$ as __goscript_yamlh.yaml_event_t).typ == 9) || ((event$ as __goscript_yamlh.yaml_event_t).typ == 7))) {
				// An indented block follows, so write the comment right now.
				let __goscriptAssign0_0: $.Slice<number> = (emitter$ as __goscript_yamlh.yaml_emitter_t).key_line_comment
				let __goscriptAssign0_1: $.Slice<number> = (emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment;
				;(emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment = __goscriptAssign0_0;
				;(emitter$ as __goscript_yamlh.yaml_emitter_t).key_line_comment = __goscriptAssign0_1
				if (!await yaml_emitter_process_line_comment(emitter)) {
					return false
				}
				let __goscriptAssign1_0: $.Slice<number> = (emitter$ as __goscript_yamlh.yaml_emitter_t).key_line_comment
				let __goscriptAssign1_1: $.Slice<number> = (emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment;
				;(emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment = __goscriptAssign1_0;
				;(emitter$ as __goscript_yamlh.yaml_emitter_t).key_line_comment = __goscriptAssign1_1
			}
		}
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).states = $.appendOne((emitter$ as __goscript_yamlh.yaml_emitter_t).states, 16)
	if (!await yaml_emitter_emit_node(emitter, event, false, false, true, false)) {
		return false
	}
	if (!await yaml_emitter_process_line_comment(emitter)) {
		return false
	}
	if (!await yaml_emitter_process_foot_comment(emitter)) {
		return false
	}
	return true
}

export function yaml_emitter_silent_nil_event(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): boolean {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	const event$: __goscript_yamlh.yaml_event_t = event == null ? $.pointerTarget<__goscript_yamlh.yaml_event_t>(event) : (event as any).__isVarRef === true ? (event as any).value : (event as any).__goValue === undefined ? (event as any) : $.pointerTarget<__goscript_yamlh.yaml_event_t>(event)
	return ((((event$ as __goscript_yamlh.yaml_event_t).typ == 6) && (event$ as __goscript_yamlh.yaml_event_t).implicit) && !(emitter$ as __goscript_yamlh.yaml_emitter_t).canonical) && ($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.value) == 0)
}

export async function yaml_emitter_emit_node(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null, root: boolean, sequence: boolean, mapping: boolean, simple_key: boolean): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	const event$: __goscript_yamlh.yaml_event_t = event == null ? $.pointerTarget<__goscript_yamlh.yaml_event_t>(event) : (event as any).__isVarRef === true ? (event as any).value : (event as any).__goValue === undefined ? (event as any) : $.pointerTarget<__goscript_yamlh.yaml_event_t>(event);

	;(emitter$ as __goscript_yamlh.yaml_emitter_t).root_context = root;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).sequence_context = sequence;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).mapping_context = mapping;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).simple_key_context = simple_key

	switch ((event$ as __goscript_yamlh.yaml_event_t).typ) {
		case 5:
		{
			return yaml_emitter_emit_alias(emitter, event)
			break
		}
		case 6:
		{
			return yaml_emitter_emit_scalar(emitter, event)
			break
		}
		case 7:
		{
			return yaml_emitter_emit_sequence_start(emitter, event)
			break
		}
		case 9:
		{
			return yaml_emitter_emit_mapping_start(emitter, event)
			break
		}
		default:
		{
			return yaml_emitter_set_emitter_error(emitter, await fmt.Sprintf("expected SCALAR, SEQUENCE-START, MAPPING-START, or ALIAS, but got %v", $.namedValueInterfaceValue<any>((event$ as __goscript_yamlh.yaml_event_t).typ, "yaml.yaml_event_type_t", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function yaml_emitter_emit_alias(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (!await yaml_emitter_process_anchor(emitter)) {
		return false
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).state = $.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).states!, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).states) - 1);
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).states = $.goSlice((emitter$ as __goscript_yamlh.yaml_emitter_t).states, undefined, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).states) - 1)
	return true
}

export async function yaml_emitter_emit_scalar(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (!yaml_emitter_select_scalar_style(emitter, event)) {
		return false
	}
	if (!await yaml_emitter_process_anchor(emitter)) {
		return false
	}
	if (!await yaml_emitter_process_tag(emitter)) {
		return false
	}
	if (!yaml_emitter_increase_indent(emitter, true, false)) {
		return false
	}
	if (!await yaml_emitter_process_scalar(emitter)) {
		return false
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).indent = $.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).indents!, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).indents) - 1);
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).indents = $.goSlice((emitter$ as __goscript_yamlh.yaml_emitter_t).indents, undefined, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).indents) - 1);
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).state = $.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).states!, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).states) - 1);
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).states = $.goSlice((emitter$ as __goscript_yamlh.yaml_emitter_t).states, undefined, $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).states) - 1)
	return true
}

export async function yaml_emitter_emit_sequence_start(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (!await yaml_emitter_process_anchor(emitter)) {
		return false
	}
	if (!await yaml_emitter_process_tag(emitter)) {
		return false
	}
	if (((((emitter$ as __goscript_yamlh.yaml_emitter_t).flow_level > 0) || (emitter$ as __goscript_yamlh.yaml_emitter_t).canonical) || ((event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as __goscript_yamlh.yaml_event_t).sequence_style() : __goscript_yamlh.yaml_event_t.prototype.sequence_style.call(event)) == 2)) || yaml_emitter_check_empty_sequence(emitter)) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).state = 5
	} else {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).state = 13
	}
	return true
}

export async function yaml_emitter_emit_mapping_start(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (!await yaml_emitter_process_anchor(emitter)) {
		return false
	}
	if (!await yaml_emitter_process_tag(emitter)) {
		return false
	}
	if (((((emitter$ as __goscript_yamlh.yaml_emitter_t).flow_level > 0) || (emitter$ as __goscript_yamlh.yaml_emitter_t).canonical) || ((event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as __goscript_yamlh.yaml_event_t).mapping_style() : __goscript_yamlh.yaml_event_t.prototype.mapping_style.call(event)) == 2)) || yaml_emitter_check_empty_mapping(emitter)) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).state = 8
	} else {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).state = 15
	}
	return true
}

export function yaml_emitter_check_empty_document(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): boolean {
	return false
}

export function yaml_emitter_check_empty_sequence(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): boolean {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).events) - (emitter$ as __goscript_yamlh.yaml_emitter_t).events_head) < 2) {
		return false
	}
	return ($.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).events!, (emitter$ as __goscript_yamlh.yaml_emitter_t).events_head).typ == 7) && ($.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).events!, (emitter$ as __goscript_yamlh.yaml_emitter_t).events_head + 1).typ == 8)
}

export function yaml_emitter_check_empty_mapping(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): boolean {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).events) - (emitter$ as __goscript_yamlh.yaml_emitter_t).events_head) < 2) {
		return false
	}
	return ($.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).events!, (emitter$ as __goscript_yamlh.yaml_emitter_t).events_head).typ == 9) && ($.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).events!, (emitter$ as __goscript_yamlh.yaml_emitter_t).events_head + 1).typ == 10)
}

export function yaml_emitter_check_simple_key(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): boolean {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	let length = 0
	switch ($.arrayIndex((emitter$ as __goscript_yamlh.yaml_emitter_t).events!, (emitter$ as __goscript_yamlh.yaml_emitter_t).events_head).typ) {
		case 5:
		{
			length = length + ($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).anchor_data.anchor))
			break
		}
		case 6:
		{
			if ((emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.multiline) {
				return false
			}
			length = length + ((($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).anchor_data.anchor) + $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.handle)) + $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.suffix)) + $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.value))
			break
		}
		case 7:
		{
			if (!yaml_emitter_check_empty_sequence(emitter)) {
				return false
			}
			length = length + (($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).anchor_data.anchor) + $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.handle)) + $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.suffix))
			break
		}
		case 9:
		{
			if (!yaml_emitter_check_empty_mapping(emitter)) {
				return false
			}
			length = length + (($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).anchor_data.anchor) + $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.handle)) + $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.suffix))
			break
		}
		default:
		{
			return false
			break
		}
	}
	return length <= 128
}

export function yaml_emitter_select_scalar_style(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): boolean {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	const event$: __goscript_yamlh.yaml_event_t = event == null ? $.pointerTarget<__goscript_yamlh.yaml_event_t>(event) : (event as any).__isVarRef === true ? (event as any).value : (event as any).__goValue === undefined ? (event as any) : $.pointerTarget<__goscript_yamlh.yaml_event_t>(event)

	let no_tag = ($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.handle) == 0) && ($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.suffix) == 0)
	if ((no_tag && !(event$ as __goscript_yamlh.yaml_event_t).implicit) && !(event$ as __goscript_yamlh.yaml_event_t).quoted_implicit) {
		return yaml_emitter_set_emitter_error(emitter, "neither tag nor implicit flags are specified")
	}

	let style = (event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as __goscript_yamlh.yaml_event_t).scalar_style() : __goscript_yamlh.yaml_event_t.prototype.scalar_style.call(event))
	if (style == 0) {
		style = 2
	}
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).canonical) {
		style = 8
	}
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).simple_key_context && (emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.multiline) {
		style = 8
	}

	if (style == 2) {
		if ((((emitter$ as __goscript_yamlh.yaml_emitter_t).flow_level > 0) && !(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.flow_plain_allowed) || (((emitter$ as __goscript_yamlh.yaml_emitter_t).flow_level == 0) && !(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.block_plain_allowed)) {
			style = 4
		}
		if (($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.value) == 0) && (((emitter$ as __goscript_yamlh.yaml_emitter_t).flow_level > 0) || (emitter$ as __goscript_yamlh.yaml_emitter_t).simple_key_context)) {
			style = 4
		}
		if (no_tag && !(event$ as __goscript_yamlh.yaml_event_t).implicit) {
			style = 4
		}
	}
	if (style == 4) {
		if (!(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.single_quoted_allowed) {
			style = 8
		}
	}
	if ((style == 16) || (style == 32)) {
		if ((!(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.block_allowed || ((emitter$ as __goscript_yamlh.yaml_emitter_t).flow_level > 0)) || (emitter$ as __goscript_yamlh.yaml_emitter_t).simple_key_context) {
			style = 8
		}
	}

	if ((no_tag && !(event$ as __goscript_yamlh.yaml_event_t).quoted_implicit) && (style != 2)) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.handle = new Uint8Array([33]) as $.Slice<number>
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.style = style
	return true
}

export async function yaml_emitter_process_anchor(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).anchor_data.anchor == null) {
		return true
	}
	let c: $.Slice<number> = new Uint8Array([38]) as $.Slice<number>
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).anchor_data.alias) {
		$.sliceElems(c!)[$.sliceSlot(c!, 0)] = 42
	}
	if (!await yaml_emitter_write_indicator(emitter, c, true, false, false)) {
		return false
	}
	return yaml_emitter_write_anchor(emitter, (emitter$ as __goscript_yamlh.yaml_emitter_t).anchor_data.anchor)
}

export async function yaml_emitter_process_tag(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.handle) == 0) && ($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.suffix) == 0)) {
		return true
	}
	if ($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.handle) > 0) {
		if (!await yaml_emitter_write_tag_handle(emitter, (emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.handle)) {
			return false
		}
		if ($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.suffix) > 0) {
			if (!await yaml_emitter_write_tag_content(emitter, (emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.suffix, false)) {
				return false
			}
		}
	} else {
		// [Go] Allocate these slices elsewhere.
		if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([33, 60]), true, false, false)) {
			return false
		}
		if (!await yaml_emitter_write_tag_content(emitter, (emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.suffix, false)) {
			return false
		}
		if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([62]) as $.Slice<number>, false, false, false)) {
			return false
		}
	}
	return true
}

export async function yaml_emitter_process_scalar(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	switch ((emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.style) {
		case 2:
		{
			return yaml_emitter_write_plain_scalar(emitter, (emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.value, !(emitter$ as __goscript_yamlh.yaml_emitter_t).simple_key_context)
			break
		}
		case 4:
		{
			return yaml_emitter_write_single_quoted_scalar(emitter, (emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.value, !(emitter$ as __goscript_yamlh.yaml_emitter_t).simple_key_context)
			break
		}
		case 8:
		{
			return yaml_emitter_write_double_quoted_scalar(emitter, (emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.value, !(emitter$ as __goscript_yamlh.yaml_emitter_t).simple_key_context)
			break
		}
		case 16:
		{
			return yaml_emitter_write_literal_scalar(emitter, (emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.value)
			break
		}
		case 32:
		{
			return yaml_emitter_write_folded_scalar(emitter, (emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.value)
			break
		}
	}
	$.panic("unknown scalar style")
	throw new globalThis.Error("goscript: unreachable return")
}

export async function yaml_emitter_process_head_comment(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if ($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tail_comment) > 0) {
		if (!await yaml_emitter_write_indent(emitter)) {
			return false
		}
		if (!await yaml_emitter_write_comment(emitter, (emitter$ as __goscript_yamlh.yaml_emitter_t).tail_comment)) {
			return false
		}
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).tail_comment = $.goSlice((emitter$ as __goscript_yamlh.yaml_emitter_t).tail_comment, undefined, 0);
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).foot_indent = (emitter$ as __goscript_yamlh.yaml_emitter_t).indent
		if ((emitter$ as __goscript_yamlh.yaml_emitter_t).foot_indent < 0) {
			;(emitter$ as __goscript_yamlh.yaml_emitter_t).foot_indent = 0
		}
	}

	if ($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).head_comment) == 0) {
		return true
	}
	if (!await yaml_emitter_write_indent(emitter)) {
		return false
	}
	if (!await yaml_emitter_write_comment(emitter, (emitter$ as __goscript_yamlh.yaml_emitter_t).head_comment)) {
		return false
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).head_comment = $.goSlice((emitter$ as __goscript_yamlh.yaml_emitter_t).head_comment, undefined, 0)
	return true
}

export async function yaml_emitter_process_line_comment(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if ($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment) == 0) {
		return true
	}
	if (!(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace) {
		if (!await put(emitter, 32)) {
			return false
		}
	}
	if (!await yaml_emitter_write_comment(emitter, (emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment)) {
		return false
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment = $.goSlice((emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment, undefined, 0)
	return true
}

export async function yaml_emitter_process_foot_comment(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if ($.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).foot_comment) == 0) {
		return true
	}
	if (!await yaml_emitter_write_indent(emitter)) {
		return false
	}
	if (!await yaml_emitter_write_comment(emitter, (emitter$ as __goscript_yamlh.yaml_emitter_t).foot_comment)) {
		return false
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).foot_comment = $.goSlice((emitter$ as __goscript_yamlh.yaml_emitter_t).foot_comment, undefined, 0);
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).foot_indent = (emitter$ as __goscript_yamlh.yaml_emitter_t).indent
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).foot_indent < 0) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).foot_indent = 0
	}
	return true
}

export function yaml_emitter_analyze_version_directive(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, version_directive: __goscript_yamlh.yaml_version_directive_t | $.VarRef<__goscript_yamlh.yaml_version_directive_t> | null): boolean {
	const version_directive$: __goscript_yamlh.yaml_version_directive_t = version_directive == null ? $.pointerTarget<__goscript_yamlh.yaml_version_directive_t>(version_directive) : (version_directive as any).__isVarRef === true ? (version_directive as any).value : (version_directive as any).__goValue === undefined ? (version_directive as any) : $.pointerTarget<__goscript_yamlh.yaml_version_directive_t>(version_directive)
	if (((version_directive$ as __goscript_yamlh.yaml_version_directive_t).major != 1) || ((version_directive$ as __goscript_yamlh.yaml_version_directive_t).minor != 1)) {
		return yaml_emitter_set_emitter_error(emitter, "incompatible %YAML directive")
	}
	return true
}

export function yaml_emitter_analyze_tag_directive(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, tag_directive: __goscript_yamlh.yaml_tag_directive_t | $.VarRef<__goscript_yamlh.yaml_tag_directive_t> | null): boolean {
	const tag_directive$: __goscript_yamlh.yaml_tag_directive_t = tag_directive == null ? $.pointerTarget<__goscript_yamlh.yaml_tag_directive_t>(tag_directive) : (tag_directive as any).__isVarRef === true ? (tag_directive as any).value : (tag_directive as any).__goValue === undefined ? (tag_directive as any) : $.pointerTarget<__goscript_yamlh.yaml_tag_directive_t>(tag_directive)
	let handle: $.Slice<number> = (tag_directive$ as __goscript_yamlh.yaml_tag_directive_t).handle
	let prefix: $.Slice<number> = (tag_directive$ as __goscript_yamlh.yaml_tag_directive_t).prefix
	if ($.sliceLen(handle) == 0) {
		return yaml_emitter_set_emitter_error(emitter, "tag handle must not be empty")
	}
	if ($.arrayIndex(handle!, 0) != 33) {
		return yaml_emitter_set_emitter_error(emitter, "tag handle must start with '!'")
	}
	if ($.arrayIndex(handle!, $.sliceLen(handle) - 1) != 33) {
		return yaml_emitter_set_emitter_error(emitter, "tag handle must end with '!'")
	}
	for (let __goscriptSliceWindow0 = $.sliceRange(handle), i = 1; i < (__goscriptSliceWindow0.length - 1); i = i + (__goscript_yamlprivateh.width(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number)))) {
		if (!__goscript_yamlprivateh.is_alpha(handle, i)) {
			return yaml_emitter_set_emitter_error(emitter, "tag handle must contain alphanumerical characters only")
		}
	}
	if ($.sliceLen(prefix) == 0) {
		return yaml_emitter_set_emitter_error(emitter, "tag prefix must not be empty")
	}
	return true
}

export function yaml_emitter_analyze_anchor(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, anchor: $.Slice<number>, alias: boolean): boolean {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if ($.sliceLen(anchor) == 0) {
		let problem = "anchor value must not be empty"
		if (alias) {
			problem = "alias value must not be empty"
		}
		return yaml_emitter_set_emitter_error(emitter, problem)
	}
	for (let __goscriptSliceWindow1 = $.sliceRange(anchor), i = 0; i < __goscriptSliceWindow1.length; i = i + (__goscript_yamlprivateh.width(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as number)))) {
		if (!__goscript_yamlprivateh.is_alpha(anchor, i)) {
			let problem = "anchor value must contain alphanumerical characters only"
			if (alias) {
				problem = "alias value must contain alphanumerical characters only"
			}
			return yaml_emitter_set_emitter_error(emitter, problem)
		}
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).anchor_data.anchor = anchor;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).anchor_data.alias = alias
	return true
}

export function yaml_emitter_analyze_tag(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, tag: $.Slice<number>): boolean {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if ($.sliceLen(tag) == 0) {
		return yaml_emitter_set_emitter_error(emitter, "tag value must not be empty")
	}
	for (let i = 0; i < $.sliceLen((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_directives); i++) {
		let tag_directive: __goscript_yamlh.yaml_tag_directive_t | $.VarRef<__goscript_yamlh.yaml_tag_directive_t> | null = $.indexRef((emitter$ as __goscript_yamlh.yaml_emitter_t).tag_directives!, i)
		let tag_directive$: __goscript_yamlh.yaml_tag_directive_t = tag_directive == null ? $.pointerTarget<__goscript_yamlh.yaml_tag_directive_t>(tag_directive) : (tag_directive as any).__isVarRef === true ? (tag_directive as any).value : (tag_directive as any).__goValue === undefined ? (tag_directive as any) : $.pointerTarget<__goscript_yamlh.yaml_tag_directive_t>(tag_directive)
		if (bytes.HasPrefix(tag, (tag_directive$ as __goscript_yamlh.yaml_tag_directive_t).prefix)) {
			;(emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.handle = (tag_directive$ as __goscript_yamlh.yaml_tag_directive_t).handle;
			;(emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.suffix = $.goSlice(tag, $.sliceLen((tag_directive$ as __goscript_yamlh.yaml_tag_directive_t).prefix), undefined)
			return true
		}
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.suffix = tag
	return true
}

export function yaml_emitter_analyze_scalar(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, value: $.Slice<number>): boolean {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	let block_indicators: boolean = false
	let flow_indicators: boolean = false
	let line_breaks: boolean = false
	let special_characters: boolean = false
	let tab_characters: boolean = false
	let leading_space: boolean = false
	let leading_break: boolean = false
	let trailing_space: boolean = false
	let trailing_break: boolean = false
	let break_space: boolean = false
	let space_break: boolean = false
	let preceded_by_whitespace: boolean = false
	let followed_by_whitespace: boolean = false
	let previous_space: boolean = false
	let previous_break: boolean = false;

	;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.value = value

	if ($.sliceLen(value) == 0) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.multiline = false;
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.flow_plain_allowed = false;
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.block_plain_allowed = true;
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.single_quoted_allowed = true;
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.block_allowed = false
		return true
	}

	if (($.sliceLen(value) >= 3) && (((($.arrayIndex(value!, 0) == 45) && ($.arrayIndex(value!, 1) == 45)) && ($.arrayIndex(value!, 2) == 45)) || ((($.arrayIndex(value!, 0) == 46) && ($.arrayIndex(value!, 1) == 46)) && ($.arrayIndex(value!, 2) == 46)))) {
		block_indicators = true
		flow_indicators = true
	}

	preceded_by_whitespace = true
	for (let __goscriptSliceWindow2 = $.sliceRange(value), i = 0, w = 0; i < __goscriptSliceWindow2.length; i = i + (w)) {
		w = __goscript_yamlprivateh.width(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as number))
		followed_by_whitespace = ((i + w) >= __goscriptSliceWindow2.length) || __goscript_yamlprivateh.is_blank(value, i + w)

		if (i == 0) {
			switch (((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as number)) {
				case 35:
				case 44:
				case 91:
				case 93:
				case 123:
				case 125:
				case 38:
				case 42:
				case 33:
				case 124:
				case 62:
				case 39:
				case 34:
				case 37:
				case 64:
				case 96:
				{
					flow_indicators = true
					block_indicators = true
					break
				}
				case 63:
				case 58:
				{
					flow_indicators = true
					if (followed_by_whitespace) {
						block_indicators = true
					}
					break
				}
				case 45:
				{
					if (followed_by_whitespace) {
						flow_indicators = true
						block_indicators = true
					}
					break
				}
			}
		} else {
			switch (((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as number)) {
				case 44:
				case 63:
				case 91:
				case 93:
				case 123:
				case 125:
				{
					flow_indicators = true
					break
				}
				case 58:
				{
					flow_indicators = true
					if (followed_by_whitespace) {
						block_indicators = true
					}
					break
				}
				case 35:
				{
					if (preceded_by_whitespace) {
						flow_indicators = true
						block_indicators = true
					}
					break
				}
			}
		}

		if (((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as number) == 9) {
			tab_characters = true
		} else {
			if (!__goscript_yamlprivateh.is_printable(value, i) || (!__goscript_yamlprivateh.is_ascii(value, i) && !(emitter$ as __goscript_yamlh.yaml_emitter_t).unicode)) {
				special_characters = true
			}
		}
		if (__goscript_yamlprivateh.is_space(value, i)) {
			if (i == 0) {
				leading_space = true
			}
			if ((i + __goscript_yamlprivateh.width(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as number))) == __goscriptSliceWindow2.length) {
				trailing_space = true
			}
			if (previous_break) {
				break_space = true
			}
			previous_space = true
			previous_break = false
		} else {
			if (__goscript_yamlprivateh.is_break(value, i)) {
				line_breaks = true
				if (i == 0) {
					leading_break = true
				}
				if ((i + __goscript_yamlprivateh.width(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as number))) == __goscriptSliceWindow2.length) {
					trailing_break = true
				}
				if (previous_space) {
					space_break = true
				}
				previous_space = false
				previous_break = true
			} else {
				previous_space = false
				previous_break = false
			}
		}

		// [Go]: Why 'z'? Couldn't be the end of the string as that's the loop condition.
		preceded_by_whitespace = __goscript_yamlprivateh.is_blankz(value, i)
	}

	;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.multiline = line_breaks;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.flow_plain_allowed = true;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.block_plain_allowed = true;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.single_quoted_allowed = true;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.block_allowed = true

	if (((leading_space || leading_break) || trailing_space) || trailing_break) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.flow_plain_allowed = false;
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.block_plain_allowed = false
	}
	if (trailing_space) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.block_allowed = false
	}
	if (break_space) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.flow_plain_allowed = false;
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.block_plain_allowed = false;
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.single_quoted_allowed = false
	}
	if ((space_break || tab_characters) || special_characters) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.flow_plain_allowed = false;
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.block_plain_allowed = false;
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.single_quoted_allowed = false
	}
	if (space_break || special_characters) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.block_allowed = false
	}
	if (line_breaks) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.flow_plain_allowed = false;
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.block_plain_allowed = false
	}
	if (flow_indicators) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.flow_plain_allowed = false
	}
	if (block_indicators) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.block_plain_allowed = false
	}
	return true
}

export function yaml_emitter_analyze_event(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, event: __goscript_yamlh.yaml_event_t | $.VarRef<__goscript_yamlh.yaml_event_t> | null): boolean {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	const event$: __goscript_yamlh.yaml_event_t = event == null ? $.pointerTarget<__goscript_yamlh.yaml_event_t>(event) : (event as any).__isVarRef === true ? (event as any).value : (event as any).__goValue === undefined ? (event as any) : $.pointerTarget<__goscript_yamlh.yaml_event_t>(event);

	;(emitter$ as __goscript_yamlh.yaml_emitter_t).anchor_data.anchor = null;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.handle = null;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).tag_data.suffix = null;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).scalar_data.value = null

	if ($.sliceLen((event$ as __goscript_yamlh.yaml_event_t).head_comment) > 0) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).head_comment = (event$ as __goscript_yamlh.yaml_event_t).head_comment
	}
	if ($.sliceLen((event$ as __goscript_yamlh.yaml_event_t).line_comment) > 0) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).line_comment = (event$ as __goscript_yamlh.yaml_event_t).line_comment
	}
	if ($.sliceLen((event$ as __goscript_yamlh.yaml_event_t).foot_comment) > 0) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).foot_comment = (event$ as __goscript_yamlh.yaml_event_t).foot_comment
	}
	if ($.sliceLen((event$ as __goscript_yamlh.yaml_event_t).tail_comment) > 0) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).tail_comment = (event$ as __goscript_yamlh.yaml_event_t).tail_comment
	}

	switch ((event$ as __goscript_yamlh.yaml_event_t).typ) {
		case 5:
		{
			if (!yaml_emitter_analyze_anchor(emitter, (event$ as __goscript_yamlh.yaml_event_t).anchor, true)) {
				return false
			}
			break
		}
		case 6:
		{
			if ($.sliceLen((event$ as __goscript_yamlh.yaml_event_t).anchor) > 0) {
				if (!yaml_emitter_analyze_anchor(emitter, (event$ as __goscript_yamlh.yaml_event_t).anchor, false)) {
					return false
				}
			}
			if (($.sliceLen((event$ as __goscript_yamlh.yaml_event_t).tag) > 0) && ((emitter$ as __goscript_yamlh.yaml_emitter_t).canonical || (!(event$ as __goscript_yamlh.yaml_event_t).implicit && !(event$ as __goscript_yamlh.yaml_event_t).quoted_implicit))) {
				if (!yaml_emitter_analyze_tag(emitter, (event$ as __goscript_yamlh.yaml_event_t).tag)) {
					return false
				}
			}
			if (!yaml_emitter_analyze_scalar(emitter, (event$ as __goscript_yamlh.yaml_event_t).value)) {
				return false
			}
			break
		}
		case 7:
		{
			if ($.sliceLen((event$ as __goscript_yamlh.yaml_event_t).anchor) > 0) {
				if (!yaml_emitter_analyze_anchor(emitter, (event$ as __goscript_yamlh.yaml_event_t).anchor, false)) {
					return false
				}
			}
			if (($.sliceLen((event$ as __goscript_yamlh.yaml_event_t).tag) > 0) && ((emitter$ as __goscript_yamlh.yaml_emitter_t).canonical || !(event$ as __goscript_yamlh.yaml_event_t).implicit)) {
				if (!yaml_emitter_analyze_tag(emitter, (event$ as __goscript_yamlh.yaml_event_t).tag)) {
					return false
				}
			}
			break
		}
		case 9:
		{
			if ($.sliceLen((event$ as __goscript_yamlh.yaml_event_t).anchor) > 0) {
				if (!yaml_emitter_analyze_anchor(emitter, (event$ as __goscript_yamlh.yaml_event_t).anchor, false)) {
					return false
				}
			}
			if (($.sliceLen((event$ as __goscript_yamlh.yaml_event_t).tag) > 0) && ((emitter$ as __goscript_yamlh.yaml_emitter_t).canonical || !(event$ as __goscript_yamlh.yaml_event_t).implicit)) {
				if (!yaml_emitter_analyze_tag(emitter, (event$ as __goscript_yamlh.yaml_event_t).tag)) {
					return false
				}
			}
			break
		}
	}
	return true
}

export async function yaml_emitter_write_bom(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (!await flush(emitter)) {
		return false
	}
	let pos = (emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos
	$.sliceElems((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!)[$.sliceSlot((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!, pos + 0)] = 239
	$.sliceElems((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!)[$.sliceSlot((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!, pos + 1)] = 187
	$.sliceElems((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!)[$.sliceSlot((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer!, pos + 2)] = 191;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos = (emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos + (3)
	return true
}

export async function yaml_emitter_write_indent(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	let indent = (emitter$ as __goscript_yamlh.yaml_emitter_t).indent
	if (indent < 0) {
		indent = 0
	}
	if ((!(emitter$ as __goscript_yamlh.yaml_emitter_t).indention || ((emitter$ as __goscript_yamlh.yaml_emitter_t).column > indent)) || (((emitter$ as __goscript_yamlh.yaml_emitter_t).column == indent) && !(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace)) {
		if (!await put_break(emitter)) {
			return false
		}
	}
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).foot_indent == indent) {
		if (!await put_break(emitter)) {
			return false
		}
	}
	while ((emitter$ as __goscript_yamlh.yaml_emitter_t).column < indent) {
		if (!await put(emitter, 32)) {
			return false
		}
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace = true;
	//emitter.indention = true
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).space_above = false;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).foot_indent = -1
	return true
}

export async function yaml_emitter_write_indicator(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, indicator: $.Slice<number>, need_whitespace: boolean, is_whitespace: boolean, is_indention: boolean): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (need_whitespace && !(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace) {
		if (!await put(emitter, 32)) {
			return false
		}
	}
	if (!await write_all(emitter, indicator)) {
		return false
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace = is_whitespace;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).indention = ((emitter$ as __goscript_yamlh.yaml_emitter_t).indention && is_indention);
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).open_ended = false
	return true
}

export async function yaml_emitter_write_anchor(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, value: $.Slice<number>): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (!await write_all(emitter, value)) {
		return false
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace = false;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).indention = false
	return true
}

export async function yaml_emitter_write_tag_handle(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, value: $.Slice<number>): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (!(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace) {
		if (!await put(emitter, 32)) {
			return false
		}
	}
	if (!await write_all(emitter, value)) {
		return false
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace = false;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).indention = false
	return true
}

export async function yaml_emitter_write_tag_content(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, value: $.Slice<number>, need_whitespace: boolean): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (need_whitespace && !(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace) {
		if (!await put(emitter, 32)) {
			return false
		}
	}
	for (let __goscriptSliceWindow3 = $.sliceRange(value), i = $.varRef(0); i.value < __goscriptSliceWindow3.length; ) {
		let must_write: boolean = false
		switch (((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i.value)] as number)) {
			case 59:
			case 47:
			case 63:
			case 58:
			case 64:
			case 38:
			case 61:
			case 43:
			case 36:
			case 44:
			case 95:
			case 46:
			case 126:
			case 42:
			case 39:
			case 40:
			case 41:
			case 91:
			case 93:
			{
				must_write = true
				break
			}
			default:
			{
				must_write = __goscript_yamlprivateh.is_alpha(value, i.value)
				break
			}
		}
		if (must_write) {
			if (!await write(emitter, value, i)) {
				return false
			}
		} else {
			let w = __goscript_yamlprivateh.width(((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i.value)] as number))
			for (let k = 0; k < w; k++) {
				let octet = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i.value)] as number)
				i.value++
				if (!await put(emitter, 37)) {
					return false
				}

				let c = $.uint($.uintShr(octet, 4, 8), 8)
				if (c < 10) {
					c = $.uint(c + (48), 8)
				} else {
					c = $.uint(c + (55), 8)
				}
				if (!await put(emitter, c)) {
					return false
				}

				c = $.uint(octet & 0x0f, 8)
				if (c < 10) {
					c = $.uint(c + (48), 8)
				} else {
					c = $.uint(c + (55), 8)
				}
				if (!await put(emitter, c)) {
					return false
				}
			}
		}
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace = false;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).indention = false
	return true
}

export async function yaml_emitter_write_plain_scalar(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, value: $.Slice<number>, allow_breaks: boolean): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (($.sliceLen(value) > 0) && !(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace) {
		if (!await put(emitter, 32)) {
			return false
		}
	}

	let spaces = false
	let breaks = false
	for (let __goscriptSliceWindow4 = $.sliceRange(value), i = $.varRef(0); i.value < __goscriptSliceWindow4.length; ) {
		if (__goscript_yamlprivateh.is_space(value, i.value)) {
			if (((allow_breaks && !spaces) && ((emitter$ as __goscript_yamlh.yaml_emitter_t).column > (emitter$ as __goscript_yamlh.yaml_emitter_t).best_width)) && !__goscript_yamlprivateh.is_space(value, i.value + 1)) {
				if (!await yaml_emitter_write_indent(emitter)) {
					return false
				}
				i.value = i.value + (__goscript_yamlprivateh.width(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i.value)] as number)))
			} else {
				if (!await write(emitter, value, i)) {
					return false
				}
			}
			spaces = true
		} else {
			if (__goscript_yamlprivateh.is_break(value, i.value)) {
				if (!breaks && (((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i.value)] as number) == 10)) {
					if (!await put_break(emitter)) {
						return false
					}
				}
				if (!await write_break(emitter, value, i)) {
					return false
				}
				//emitter.indention = true
				breaks = true
			} else {
				if (breaks) {
					if (!await yaml_emitter_write_indent(emitter)) {
						return false
					}
				}
				if (!await write(emitter, value, i)) {
					return false
				}
				;(emitter$ as __goscript_yamlh.yaml_emitter_t).indention = false
				spaces = false
				breaks = false
			}
		}
	}

	if ($.sliceLen(value) > 0) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace = false
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).indention = false
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).root_context) {
		;(emitter$ as __goscript_yamlh.yaml_emitter_t).open_ended = true
	}

	return true
}

export async function yaml_emitter_write_single_quoted_scalar(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, value: $.Slice<number>, allow_breaks: boolean): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)

	if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([39]) as $.Slice<number>, true, false, false)) {
		return false
	}

	let spaces = false
	let breaks = false
	for (let __goscriptSliceWindow5 = $.sliceRange(value), i = $.varRef(0); i.value < __goscriptSliceWindow5.length; ) {
		if (__goscript_yamlprivateh.is_space(value, i.value)) {
			if (((((allow_breaks && !spaces) && ((emitter$ as __goscript_yamlh.yaml_emitter_t).column > (emitter$ as __goscript_yamlh.yaml_emitter_t).best_width)) && (i.value > 0)) && (i.value < (__goscriptSliceWindow5.length - 1))) && !__goscript_yamlprivateh.is_space(value, i.value + 1)) {
				if (!await yaml_emitter_write_indent(emitter)) {
					return false
				}
				i.value = i.value + (__goscript_yamlprivateh.width(((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i.value)] as number)))
			} else {
				if (!await write(emitter, value, i)) {
					return false
				}
			}
			spaces = true
		} else {
			if (__goscript_yamlprivateh.is_break(value, i.value)) {
				if (!breaks && (((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i.value)] as number) == 10)) {
					if (!await put_break(emitter)) {
						return false
					}
				}
				if (!await write_break(emitter, value, i)) {
					return false
				}
				//emitter.indention = true
				breaks = true
			} else {
				if (breaks) {
					if (!await yaml_emitter_write_indent(emitter)) {
						return false
					}
				}
				if (((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i.value)] as number) == 39) {
					if (!await put(emitter, 39)) {
						return false
					}
				}
				if (!await write(emitter, value, i)) {
					return false
				}
				;(emitter$ as __goscript_yamlh.yaml_emitter_t).indention = false
				spaces = false
				breaks = false
			}
		}
	}
	if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([39]) as $.Slice<number>, false, false, false)) {
		return false
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace = false;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).indention = false
	return true
}

export async function yaml_emitter_write_double_quoted_scalar(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, value: $.Slice<number>, allow_breaks: boolean): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	let spaces = false
	if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([34]) as $.Slice<number>, true, false, false)) {
		return false
	}

	for (let __goscriptSliceWindow6 = $.sliceRange(value), i = $.varRef(0); i.value < __goscriptSliceWindow6.length; ) {
		if (((((!__goscript_yamlprivateh.is_printable(value, i.value) || (!(emitter$ as __goscript_yamlh.yaml_emitter_t).unicode && !__goscript_yamlprivateh.is_ascii(value, i.value))) || __goscript_yamlprivateh.is_bom(value, i.value)) || __goscript_yamlprivateh.is_break(value, i.value)) || (((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i.value)] as number) == 34)) || (((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i.value)] as number) == 92)) {

			let octet = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i.value)] as number)

			let w: number = 0
			let v: number = 0
			switch ((true as boolean)) {
				case $.uint((octet & 0x80), 8) == 0x00:
				{
					let __goscriptAssign2_0: number = 1
					let __goscriptAssign2_1: number = $.int(octet & 0x7F, 32)
					w = __goscriptAssign2_0
					v = __goscriptAssign2_1
					break
				}
				case $.uint((octet & 0xE0), 8) == 0xC0:
				{
					let __goscriptAssign3_0: number = 2
					let __goscriptAssign3_1: number = $.int(octet & 0x1F, 32)
					w = __goscriptAssign3_0
					v = __goscriptAssign3_1
					break
				}
				case $.uint((octet & 0xF0), 8) == 0xE0:
				{
					let __goscriptAssign4_0: number = 3
					let __goscriptAssign4_1: number = $.int(octet & 0x0F, 32)
					w = __goscriptAssign4_0
					v = __goscriptAssign4_1
					break
				}
				case $.uint((octet & 0xF8), 8) == 0xF0:
				{
					let __goscriptAssign5_0: number = 4
					let __goscriptAssign5_1: number = $.int(octet & 0x07, 32)
					w = __goscriptAssign5_0
					v = __goscriptAssign5_1
					break
				}
			}
			for (let k = 1; k < w; k++) {
				octet = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i.value + k)] as number)
				v = $.int((((v << 6) + ($.int(octet, 32) & 0x3F)) | 0), 32)
			}
			i.value = i.value + (w)

			if (!await put(emitter, 92)) {
				return false
			}

			let ok: boolean = false
			switch (v) {
				case 0x00:
				{
					ok = await put(emitter, 48)
					break
				}
				case 0x07:
				{
					ok = await put(emitter, 97)
					break
				}
				case 0x08:
				{
					ok = await put(emitter, 98)
					break
				}
				case 0x09:
				{
					ok = await put(emitter, 116)
					break
				}
				case 0x0A:
				{
					ok = await put(emitter, 110)
					break
				}
				case 0x0b:
				{
					ok = await put(emitter, 118)
					break
				}
				case 0x0c:
				{
					ok = await put(emitter, 102)
					break
				}
				case 0x0d:
				{
					ok = await put(emitter, 114)
					break
				}
				case 0x1b:
				{
					ok = await put(emitter, 101)
					break
				}
				case 0x22:
				{
					ok = await put(emitter, 34)
					break
				}
				case 0x5c:
				{
					ok = await put(emitter, 92)
					break
				}
				case 0x85:
				{
					ok = await put(emitter, 78)
					break
				}
				case 0xA0:
				{
					ok = await put(emitter, 95)
					break
				}
				case 0x2028:
				{
					ok = await put(emitter, 76)
					break
				}
				case 0x2029:
				{
					ok = await put(emitter, 80)
					break
				}
				default:
				{
					if (v <= 0xFF) {
						ok = await put(emitter, 120)
						w = 2
					} else {
						if (v <= 0xFFFF) {
							ok = await put(emitter, 117)
							w = 4
						} else {
							ok = await put(emitter, 85)
							w = 8
						}
					}
					for (let k = (w - 1) * 4; ok && (k >= 0); k = k - (4)) {
						let digit = $.uint((v >> $.uint(k, 64)) & 0x0F, 8)
						if (digit < 10) {
							ok = await put(emitter, $.uint(((digit + 48) & 0xff), 8))
						} else {
							ok = await put(emitter, $.uint((((((digit + 65) & 0xff)) - 10) & 0xff), 8))
						}
					}
					break
				}
			}
			if (!ok) {
				return false
			}
			spaces = false
		} else {
			if (__goscript_yamlprivateh.is_space(value, i.value)) {
				if ((((allow_breaks && !spaces) && ((emitter$ as __goscript_yamlh.yaml_emitter_t).column > (emitter$ as __goscript_yamlh.yaml_emitter_t).best_width)) && (i.value > 0)) && (i.value < (__goscriptSliceWindow6.length - 1))) {
					if (!await yaml_emitter_write_indent(emitter)) {
						return false
					}
					if (__goscript_yamlprivateh.is_space(value, i.value + 1)) {
						if (!await put(emitter, 92)) {
							return false
						}
					}
					i.value = i.value + (__goscript_yamlprivateh.width(((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i.value)] as number)))
				} else {
					if (!await write(emitter, value, i)) {
						return false
					}
				}
				spaces = true
			} else {
				if (!await write(emitter, value, i)) {
					return false
				}
				spaces = false
			}
		}
	}
	if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([34]) as $.Slice<number>, false, false, false)) {
		return false
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace = false;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).indention = false
	return true
}

export async function yaml_emitter_write_block_scalar_hints(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, value: $.Slice<number>): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (__goscript_yamlprivateh.is_space(value, 0) || __goscript_yamlprivateh.is_break(value, 0)) {
		let indent_hint: $.Slice<number> = new Uint8Array([((48 + $.uint((emitter$ as __goscript_yamlh.yaml_emitter_t).best_indent, 8)) & 0xff)]) as $.Slice<number>
		if (!await yaml_emitter_write_indicator(emitter, indent_hint, false, false, false)) {
			return false
		}
	}

	;(emitter$ as __goscript_yamlh.yaml_emitter_t).open_ended = false

	let chomp_hint: Uint8Array = $.arrayValue(new Uint8Array(1))
	if ($.sliceLen(value) == 0) {
		chomp_hint[0] = 45
	} else {
		let i = $.sliceLen(value) - 1
		for (let __goscriptSliceWindow7 = $.sliceRange(value); $.uint((((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] as number) & 0xC0), 8) == 0x80; ) {
			i--
		}
		if (!__goscript_yamlprivateh.is_break(value, i)) {
			chomp_hint[0] = 45
		} else {
			if (i == 0) {
				chomp_hint[0] = 43;
				;(emitter$ as __goscript_yamlh.yaml_emitter_t).open_ended = true
			} else {
				i--
				for (let __goscriptSliceWindow8 = $.sliceRange(value); $.uint((((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, i)] as number) & 0xC0), 8) == 0x80; ) {
					i--
				}
				if (__goscript_yamlprivateh.is_break(value, i)) {
					chomp_hint[0] = 43;
					;(emitter$ as __goscript_yamlh.yaml_emitter_t).open_ended = true
				}
			}
		}
	}
	if ($.arrayIndex(chomp_hint, 0) != 0) {
		if (!await yaml_emitter_write_indicator(emitter, $.goSlice(chomp_hint, undefined, undefined), false, false, false)) {
			return false
		}
	}
	return true
}

export async function yaml_emitter_write_literal_scalar(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, value: $.Slice<number>): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([124]) as $.Slice<number>, true, false, false)) {
		return false
	}
	if (!await yaml_emitter_write_block_scalar_hints(emitter, value)) {
		return false
	}
	if (!await yaml_emitter_process_line_comment(emitter)) {
		return false
	}
	//emitter.indention = true
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace = true
	let breaks = true
	for (let i = $.varRef(0); i.value < $.sliceLen(value); ) {
		if (__goscript_yamlprivateh.is_break(value, i.value)) {
			if (!await write_break(emitter, value, i)) {
				return false
			}
			//emitter.indention = true
			breaks = true
		} else {
			if (breaks) {
				if (!await yaml_emitter_write_indent(emitter)) {
					return false
				}
			}
			if (!await write(emitter, value, i)) {
				return false
			}
			;(emitter$ as __goscript_yamlh.yaml_emitter_t).indention = false
			breaks = false
		}
	}

	return true
}

export async function yaml_emitter_write_folded_scalar(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, value: $.Slice<number>): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if (!await yaml_emitter_write_indicator(emitter, new Uint8Array([62]) as $.Slice<number>, true, false, false)) {
		return false
	}
	if (!await yaml_emitter_write_block_scalar_hints(emitter, value)) {
		return false
	}
	if (!await yaml_emitter_process_line_comment(emitter)) {
		return false
	}

	//emitter.indention = true
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace = true

	let breaks = true
	let leading_spaces = true
	for (let __goscriptSliceWindow9 = $.sliceRange(value), i = $.varRef(0); i.value < __goscriptSliceWindow9.length; ) {
		if (__goscript_yamlprivateh.is_break(value, i.value)) {
			if ((!breaks && !leading_spaces) && (((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, i.value)] as number) == 10)) {
				let k = 0
				while (__goscript_yamlprivateh.is_break(value, k)) {
					k = k + (__goscript_yamlprivateh.width(((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, k)] as number)))
				}
				if (!__goscript_yamlprivateh.is_blankz(value, k)) {
					if (!await put_break(emitter)) {
						return false
					}
				}
			}
			if (!await write_break(emitter, value, i)) {
				return false
			}
			//emitter.indention = true
			breaks = true
		} else {
			if (breaks) {
				if (!await yaml_emitter_write_indent(emitter)) {
					return false
				}
				leading_spaces = __goscript_yamlprivateh.is_blank(value, i.value)
			}
			if (((!breaks && __goscript_yamlprivateh.is_space(value, i.value)) && !__goscript_yamlprivateh.is_space(value, i.value + 1)) && ((emitter$ as __goscript_yamlh.yaml_emitter_t).column > (emitter$ as __goscript_yamlh.yaml_emitter_t).best_width)) {
				if (!await yaml_emitter_write_indent(emitter)) {
					return false
				}
				i.value = i.value + (__goscript_yamlprivateh.width(((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, i.value)] as number)))
			} else {
				if (!await write(emitter, value, i)) {
					return false
				}
			}
			;(emitter$ as __goscript_yamlh.yaml_emitter_t).indention = false
			breaks = false
		}
	}
	return true
}

export async function yaml_emitter_write_comment(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, comment: $.Slice<number>): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	let breaks = false
	let pound = false
	for (let __goscriptSliceWindow10 = $.sliceRange(comment), i = $.varRef(0); i.value < __goscriptSliceWindow10.length; ) {
		if (__goscript_yamlprivateh.is_break(comment, i.value)) {
			if (!await write_break(emitter, comment, i)) {
				return false
			}
			//emitter.indention = true
			breaks = true
			pound = false
		} else {
			if (breaks && !await yaml_emitter_write_indent(emitter)) {
				return false
			}
			if (!pound) {
				if ((((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, i.value)] as number) != 35) && (!await put(emitter, 35) || !await put(emitter, 32))) {
					return false
				}
				pound = true
			}
			if (!await write(emitter, comment, i)) {
				return false
			}
			;(emitter$ as __goscript_yamlh.yaml_emitter_t).indention = false
			breaks = false
		}
	}
	if (!breaks && !await put_break(emitter)) {
		return false
	}

	;(emitter$ as __goscript_yamlh.yaml_emitter_t).whitespace = true
	//emitter.indention = true
	return true
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_yamlh.yaml_event_type_t_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int8", "yaml.yaml_event_type_t"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}
