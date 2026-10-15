import * as __goscript_file0 from "./dec_helpers.gs.ts"

import * as __goscript_file1 from "./enc_helpers.gs.ts"

import * as __goscript_file2 from "./decode.gs.ts"

import * as __goscript_file3 from "./type.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_decArrayHelper()
	__goscript_file0.__goscript_init_decSliceHelper()
	__goscript_file1.__goscript_init_encArrayHelper()
	__goscript_file1.__goscript_init_encSliceHelper()
	__goscript_file2.__goscript_init_decIgnoreOpMap()
	await __goscript_file3.__goscript_init_tWireType()
	await __goscript_file2.__goscriptInit0()
	await __goscript_file3.__goscriptInit0()
	await __goscript_file3.__goscriptInit1()
}
