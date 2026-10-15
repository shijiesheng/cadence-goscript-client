import * as __goscript_file0 from "./signal.gs.ts"

import * as __goscript_file1 from "./signal_unix.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_watchSignalLoop()
	__goscript_file1.__goscriptInit0()
}
