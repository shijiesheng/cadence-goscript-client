import * as __goscript_file0 from "./context.gs.ts"

import * as __goscript_file1 from "./internal_utils.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_ErrCanceled()
	__goscript_file0.__goscript_init_ErrDeadlineExceeded()
	await __goscript_file1.__goscript_init__yarpcCallOptions()
}
