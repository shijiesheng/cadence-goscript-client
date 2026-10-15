// Generated file based on writerc.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_yamlh from "./yamlh.gs.ts"
import "@goscript/io/index.js"
import "./yamlh.gs.ts"

export function yaml_emitter_set_writer_error(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null, problem: string): boolean {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter);
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).error = 6;
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).problem = problem
	return false
}

export async function yaml_emitter_flush(emitter: __goscript_yamlh.yaml_emitter_t | $.VarRef<__goscript_yamlh.yaml_emitter_t> | null): globalThis.Promise<boolean> {
	const emitter$: __goscript_yamlh.yaml_emitter_t = emitter == null ? $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter) : (emitter as any).__isVarRef === true ? (emitter as any).value : (emitter as any).__goValue === undefined ? (emitter as any) : $.pointerTarget<__goscript_yamlh.yaml_emitter_t>(emitter)
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).write_handler == null) {
		$.panic("write handler not set")
	}

	// Check if the buffer is empty.
	if ((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos == 0) {
		return true
	}

	{
		let err = (__goscriptAwait = (emitter$ as __goscript_yamlh.yaml_emitter_t).write_handler!(emitter, $.goSlice((emitter$ as __goscript_yamlh.yaml_emitter_t).buffer, undefined, (emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			return yaml_emitter_set_writer_error(emitter, $.concatString("write error: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		}
	}
	;(emitter$ as __goscript_yamlh.yaml_emitter_t).buffer_pos = 0
	return true
}

var __goscriptAwait: any
