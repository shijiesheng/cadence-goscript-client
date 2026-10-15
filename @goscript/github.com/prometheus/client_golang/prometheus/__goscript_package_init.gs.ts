import * as __goscript_file0 from "./metric.gs.ts"

import * as __goscript_file1 from "./registry.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_separatorByteSlice()
	__goscript_file1.__goscript_init_defaultRegistry()
	await __goscript_file1.__goscriptInit0()
}
