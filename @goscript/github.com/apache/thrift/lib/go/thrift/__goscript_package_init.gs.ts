import * as __goscript_file0 from "./header_transport.gs.ts"

import * as __goscript_file1 from "./simple_json_protocol.gs.ts"

import * as __goscript_file2 from "./compact_protocol.gs.ts"

import * as __goscript_file3 from "./numeric.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_globalMemoryBuffer()
	await __goscript_file1.__goscript_init_errEmptyJSONContextStack()
	__goscript_file2.__goscriptInit0()
	__goscript_file3.__goscriptInit0()
	__goscript_file1.__goscriptInit0()
}
