import * as __goscript_file0 from "./tos_string.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init__tosValueToName()
	__goscript_file0.__goscriptInit0()
}
