import * as __goscript_file0 from "./code.pb.gs.ts"

import * as __goscript_file1 from "./error_details.pb.gs.ts"

import * as __goscript_file2 from "./status.pb.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscriptInit0()
	__goscript_file0.__goscriptInit1()
	__goscript_file1.__goscriptInit0()
	__goscript_file1.__goscriptInit1()
	__goscript_file2.__goscriptInit0()
	__goscript_file2.__goscriptInit1()
}
