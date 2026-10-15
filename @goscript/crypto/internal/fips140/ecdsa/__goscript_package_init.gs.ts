import * as __goscript_file0 from "./ecdsa.gs.ts"

import * as __goscript_file1 from "./cast.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_testingOnlyRejectionSamplingLooped()
	await __goscript_file1.__goscript_init_fipsSelfTest()
	await __goscript_file1.__goscript_init_fipsSelfTestDeterministic()
}
