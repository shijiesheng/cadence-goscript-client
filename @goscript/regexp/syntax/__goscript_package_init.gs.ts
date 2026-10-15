import * as __goscript_file0 from "./perl_groups.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_perlGroup()
	__goscript_file0.__goscript_init_posixGroup()
}
