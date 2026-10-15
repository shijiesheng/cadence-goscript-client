import * as __goscript_file0 from "./util.gs.ts"

import * as __goscript_file1 from "./hash.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_xvalues()
	__goscript_file1.__goscript_init_NameSpace_DNS()
	__goscript_file1.__goscript_init_NameSpace_URL()
	__goscript_file1.__goscript_init_NameSpace_OID()
	__goscript_file1.__goscript_init_NameSpace_X500()
	__goscript_file1.__goscript_init_NIL()
}
