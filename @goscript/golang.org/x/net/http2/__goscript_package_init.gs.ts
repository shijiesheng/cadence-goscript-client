import * as __goscript_file0 from "./server.gs.ts"

import * as __goscript_file1 from "./http2.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_writeDataPool()
	__goscript_file1.__goscriptInit0()
}
