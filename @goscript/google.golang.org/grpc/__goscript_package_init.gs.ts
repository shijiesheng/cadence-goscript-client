import * as __goscript_file0 from "./call.gs.ts"

import * as __goscript_file1 from "./server.gs.ts"

import * as __goscript_file2 from "./clientconn.gs.ts"

import * as __goscript_file3 from "./dialoptions.gs.ts"

import * as __goscript_file4 from "./service_config.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_unaryStreamDesc()
	await __goscript_file1.__goscript_init_defaultServerOptions()
	await __goscript_file2.__goscriptInit0()
	await __goscript_file3.__goscriptInit0()
	await __goscript_file3.__goscriptInit1()
	await __goscript_file1.__goscriptInit0()
	await __goscript_file4.__goscriptInit0()
	await __goscript_file4.__goscriptInit1()
}
