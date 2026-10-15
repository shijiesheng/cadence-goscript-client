import * as __goscript_file0 from "./nistec.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_p224()
	__goscript_file0.__goscript_init_p256()
	__goscript_file0.__goscript_init_p384()
	__goscript_file0.__goscript_init_p521()
}
