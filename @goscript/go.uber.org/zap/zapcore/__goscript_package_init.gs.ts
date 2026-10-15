import * as __goscript_file0 from "./console_encoder.gs.ts"

import * as __goscript_file1 from "./entry.gs.ts"

import * as __goscript_file2 from "./level_strings.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	await __goscript_file0.__goscript_init__sliceEncoderPool()
	await __goscript_file1.__goscript_init__cePool()
	__goscript_file2.__goscript_init__levelToColor()
	__goscript_file2.__goscript_init__levelToLowercaseColorString()
	__goscript_file2.__goscript_init__levelToCapitalColorString()
	await __goscript_file2.__goscriptInit0()
}
