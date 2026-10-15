import * as __goscript_file0 from "./floatconv.gs.ts"

import * as __goscript_file1 from "./nat.gs.ts"

import * as __goscript_file2 from "./natconv.gs.ts"

import * as __goscript_file3 from "./ratconv.gs.ts"

import * as __goscript_file4 from "./int.gs.ts"

import * as __goscript_file5 from "./natdiv.gs.ts"

import * as __goscript_file6 from "./natmul.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_floatZero()
	__goscript_file1.__goscript_init_stackPool()
	__goscript_file2.__goscript_init_cacheBase10()
	__goscript_file3.__goscript_init_ratZero()
	__goscript_file1.__goscript_init_natOne()
	__goscript_file4.__goscript_init_intOne()
	__goscript_file2.__goscript_init_leafSize()
	__goscript_file5.__goscript_init_divRecursiveThreshold()
	__goscript_file6.__goscript_init_karatsubaThreshold()
	__goscript_file6.__goscript_init_basicSqrThreshold()
	__goscript_file6.__goscript_init_karatsubaSqrThreshold()
}
