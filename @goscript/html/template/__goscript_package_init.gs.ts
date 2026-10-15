import * as __goscript_file0 from "./attr.gs.ts"

import * as __goscript_file1 from "./escape.gs.ts"

import * as __goscript_file2 from "./transition.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_attrTypeMap()
	__goscript_file1.__goscript_init_delimEnds()
	__goscript_file2.__goscript_init_elementContentType()
	__goscript_file2.__goscript_init_attrStartStates()
	__goscript_file2.__goscript_init_specialTagEndMarkers()
	__goscript_file2.__goscript_init_elementNameMap()
	__goscript_file2.__goscript_init_transitionFunc()
	__goscript_file1.__goscript_init_funcMap()
}
