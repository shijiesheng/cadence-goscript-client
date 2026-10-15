import * as __goscript_file0 from "./signature.gs.ts"

import * as __goscript_file1 from "./value.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_emptyLabelSignature()
	__goscript_file1.__goscript_init_ZeroSamplePair()
	__goscript_file1.__goscript_init_ZeroSample()
}
