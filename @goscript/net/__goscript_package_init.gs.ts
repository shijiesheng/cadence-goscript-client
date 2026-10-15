import * as __goscript_file0 from "./dnsclient_unix.gs.ts"

import * as __goscript_file1 from "./dnsconfig.gs.ts"

import * as __goscript_file2 from "./hook.gs.ts"

import * as __goscript_file3 from "./lookup.gs.ts"

import * as __goscript_file4 from "./lookup_unix.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_errServerTemporarilyMisbehaving()
	__goscript_file1.__goscript_init_defaultNS()
	__goscript_file1.__goscript_init_getHostname()
	__goscript_file2.__goscript_init_testHookLookupIP()
	__goscript_file2.__goscript_init_testPreHookSetKeepAlive()
	__goscript_file2.__goscript_init_testHookSetKeepAlive()
	__goscript_file3.__goscript_init_protocols()
	await __goscript_file4.__goscript_init_readProtocolsOnce()
}
