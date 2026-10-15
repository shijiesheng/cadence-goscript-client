import * as __goscript_file0 from "./pkcs1v15.gs.ts"

import * as __goscript_file1 from "./cast.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_hashPrefixes()
	await __goscript_file1.__goscript_init_fipsSelfTest()
}
