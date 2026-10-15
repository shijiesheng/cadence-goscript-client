import * as __goscript_file0 from "./tables17.0.0.gs.ts"

import * as __goscript_file1 from "./trie.gs.ts"

import * as __goscript_file2 from "./forminfo.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_nfcSparseOffset()
	__goscript_file0.__goscript_init_nfcSparseValues()
	__goscript_file0.__goscript_init_nfkcSparseOffset()
	__goscript_file0.__goscript_init_nfkcSparseValues()
	__goscript_file1.__goscript_init_nfcSparse()
	__goscript_file1.__goscript_init_nfkcSparse()
	__goscript_file1.__goscript_init_nfcData()
	__goscript_file1.__goscript_init_nfkcData()
	__goscript_file2.__goscript_init_formTable()
}
