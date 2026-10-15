import * as __goscript_file0 from "./atof.gs.ts"

import * as __goscript_file1 from "./pow10tab.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_float32info()
	__goscript_file0.__goscript_init_float64info()
	__goscript_file1.__goscript_init_pow10Tab()
}
