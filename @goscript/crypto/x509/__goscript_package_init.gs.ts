import * as __goscript_file0 from "./verify.gs.ts"

import * as __goscript_file1 from "./x509.gs.ts"

import * as __goscript_file2 from "./constraints.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	await __goscript_file0.__goscript_init_anyPolicyOID()
	__goscript_file1.__goscript_init_signatureAlgorithmDetails()
	__goscript_file2.__goscriptInit0()
}
