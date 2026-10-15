import * as __goscript_file0 from "./const.gs.ts"

import * as __goscript_file1 from "./cast.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_powx()
	__goscript_file0.__goscript_init_sbox0()
	__goscript_file0.__goscript_init_sbox1()
	__goscript_file0.__goscript_init_te0()
	__goscript_file0.__goscript_init_te1()
	__goscript_file0.__goscript_init_te2()
	__goscript_file0.__goscript_init_te3()
	__goscript_file0.__goscript_init_td0()
	__goscript_file0.__goscript_init_td1()
	__goscript_file0.__goscript_init_td2()
	__goscript_file0.__goscript_init_td3()
	await __goscript_file1.__goscriptInit0()
}
