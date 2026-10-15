import * as __goscript_file0 from "./bdp_estimator.gs.ts"

import * as __goscript_file1 from "./http2_server.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_bdpPing()
	__goscript_file1.__goscript_init_goAwayPing()
}
