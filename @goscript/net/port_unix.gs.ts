// Generated file based on port_unix.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytealg from "@goscript/internal/bytealg/index.js"

import * as sync from "@goscript/sync/index.js"

import * as os from "@goscript/os/index.js"

import type * as time from "@goscript/time/index.js"

import * as __goscript_lookup from "./lookup.gs.ts"

import * as __goscript_parse from "./parse.gs.ts"
import "@goscript/internal/bytealg/index.js"
import "@goscript/sync/index.js"
import "@goscript/os/index.js"
import "./lookup.gs.ts"
import "./parse.gs.ts"

export let onceReadServices: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_onceReadServices(__goscriptValue: sync.Once): void {
	$.assignStruct(onceReadServices.value, __goscriptValue)
}

export async function readServices(): globalThis.Promise<void> {
	await using __defer = new $.AsyncDisposableStack()
	let __goscriptTuple0: any = await __goscript_parse.open("/etc/services")
	let __goscriptShadow0: __goscript_parse.file | $.VarRef<__goscript_parse.file> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return
	}
	__defer.defer(async () => { await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as __goscript_parse.file).close() : __goscript_parse.file.prototype.close.call(__goscriptShadow0)) })

	for (let [line, ok] = await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as __goscript_parse.file).readLine() : __goscript_parse.file.prototype.readLine.call(__goscriptShadow0)); ok; [line, ok] = await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as __goscript_parse.file).readLine() : __goscript_parse.file.prototype.readLine.call(__goscriptShadow0))) {
		// "http 80/tcp www www-http # World Wide Web HTTP"
		{
			let i: number = bytealg.IndexByteString(line, 35)
			if (i >= 0) {
				line = $.sliceStringOrBytes(line, undefined, i)
			}
		}
		let f: $.Slice<string> = __goscript_parse.getFields(line)
		if ($.sliceLen(f) < 2) {
			continue
		}
		let portnet = $.arrayIndex(f!, 1)
		let [port, j, __goscriptShadow1] = __goscript_parse.dtoi(portnet)
		if (((!__goscriptShadow1 || (port <= 0)) || (j >= $.stringLen(portnet))) || ($.indexString(portnet, j) != 47)) {
			continue
		}
		let netw = $.sliceStringOrBytes(portnet, j + 1, undefined)
		let __goscriptTuple1: any = $.mapGet<string, globalThis.Map<string, number> | null, globalThis.Map<string, number> | null>(__goscript_lookup.services, netw, null)
		let m: globalThis.Map<string, number> | null = __goscriptTuple1[0]
		let ok1 = __goscriptTuple1[1]
		if (!ok1) {
			m = $.makeMap<string, number>()
			$.mapSet(__goscript_lookup.services, netw, m)
		}
		for (let __goscriptSliceWindow0 = $.sliceRange(f), i = 0; i < __goscriptSliceWindow0.length; i++) {
			if (i != 1) {
				$.mapSet(m, ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string), port)
			}
		}
	}
}

export async function goLookupPort(network: string, service: string): globalThis.Promise<[number, $.GoError]> {
	let port: number = 0
	let err: $.GoError = null! as $.GoError
	await onceReadServices.value.Do(readServices)
	return __goscript_lookup.lookupPortMap(network, service)
}
