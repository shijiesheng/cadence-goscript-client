import * as __goscript_file0 from "./iana.gs.ts"

import * as __goscript_file1 from "./sys_stub.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_icmpTypes()
	__goscript_file1.__goscript_init_ctlOpts()
	__goscript_file1.__goscript_init_sockOpts()
}
