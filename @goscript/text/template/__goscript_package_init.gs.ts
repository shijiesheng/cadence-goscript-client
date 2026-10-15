import * as __goscript_file0 from "./exec.gs.ts"

import * as __goscript_file1 from "./funcs.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_errorType()
	await __goscript_file1.__goscript_init_builtinFuncs()
}
