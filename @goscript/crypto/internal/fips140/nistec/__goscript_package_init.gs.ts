import * as __goscript_file0 from "./p256_table.gs.ts"

import * as __goscript_file1 from "./p256.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_p256PrecomputedEmbed()
	__goscript_file1.__goscriptInit0()
}
