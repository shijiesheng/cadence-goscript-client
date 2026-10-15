import * as __goscript_file0 from "./dispatcher_introspection.gs.ts"

import * as __goscript_file1 from "./tracing.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_PackageVersions()
	__goscript_file1.__goscript_init_OpentracingTags()
}
