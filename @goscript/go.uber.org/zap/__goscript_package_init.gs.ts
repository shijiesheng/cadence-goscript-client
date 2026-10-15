import * as __goscript_file0 from "./global.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init__globalL()
	__goscript_file0.__goscript_init__globalS()
}
