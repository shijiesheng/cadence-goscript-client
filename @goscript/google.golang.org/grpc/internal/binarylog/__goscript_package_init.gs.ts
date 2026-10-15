import * as __goscript_file0 from "./binarylog_testutil.gs.ts"

import * as __goscript_file1 from "./binarylog.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_MdToMetadataProto()
	__goscript_file0.__goscript_init_AddrToProto()
	await __goscript_file0.__goscript_init_AllLogger()
	await __goscript_file1.__goscriptInit0()
}
