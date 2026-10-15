import * as __goscript_file0 from "./sha512block.gs.ts"

import * as __goscript_file1 from "./cast.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init__K()
	await __goscript_file1.__goscriptInit0()
}
