import * as __goscript_file0 from "./signing_method.gs.ts"

import * as __goscript_file1 from "./ecdsa.gs.ts"

import * as __goscript_file2 from "./ed25519.gs.ts"

import * as __goscript_file3 from "./hmac.gs.ts"

import * as __goscript_file4 from "./none.gs.ts"

import * as __goscript_file5 from "./rsa.gs.ts"

import * as __goscript_file6 from "./rsa_pss.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_signingMethods()
	__goscript_file0.__goscript_init_signingMethodLock()
	await __goscript_file1.__goscriptInit0()
	await __goscript_file2.__goscriptInit0()
	await __goscript_file3.__goscriptInit0()
	await __goscript_file4.__goscriptInit0()
	await __goscript_file5.__goscriptInit0()
	await __goscript_file6.__goscriptInit0()
}
