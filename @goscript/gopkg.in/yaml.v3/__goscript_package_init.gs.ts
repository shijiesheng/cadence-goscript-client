import * as __goscript_file0 from "./decode.gs.ts"

import * as __goscript_file1 from "./parserc.gs.ts"

import * as __goscript_file2 from "./resolve.gs.ts"

import * as __goscript_file3 from "./yaml.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_nodeType()
	__goscript_file1.__goscript_init_default_tag_directives()
	__goscript_file2.__goscriptInit0()
	__goscript_file2.__goscriptInit1()
	__goscript_file3.__goscriptInit0()
}
