import * as __goscript_file0 from "./idna.gs.ts"

import * as __goscript_file1 from "./tables17.0.0.gs.ts"

import * as __goscript_file2 from "./trie.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_Punycode()
	__goscript_file0.__goscript_init_joinStates()
	__goscript_file1.__goscript_init_idnaSparseOffset()
	__goscript_file1.__goscript_init_idnaSparseValues()
	__goscript_file2.__goscript_init_idnaSparse()
	__goscript_file2.__goscript_init_trie()
	__goscript_file0.__goscript_init_lookup()
	__goscript_file0.__goscript_init_Lookup()
	__goscript_file0.__goscript_init_display()
	__goscript_file0.__goscript_init_Display()
	__goscript_file0.__goscript_init_registration()
	__goscript_file0.__goscript_init_Registration()
}
