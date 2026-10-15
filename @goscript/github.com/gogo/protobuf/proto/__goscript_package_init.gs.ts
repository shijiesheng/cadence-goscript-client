import * as __goscript_file0 from "./extensions.gs.ts"

import * as __goscript_file1 from "./properties.gs.ts"

import * as __goscript_file2 from "./properties_gogo.gs.ts"

import * as __goscript_file3 from "./duration_gogo.gs.ts"

import * as __goscript_file4 from "./timestamp_gogo.gs.ts"

import * as __goscript_file5 from "./wrappers_gogo.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_extProp()
	__goscript_file1.__goscript_init_protoMessageType()
	__goscript_file1.__goscript_init_marshalerType()
	__goscript_file1.__goscript_init_protoTypedNils()
	__goscript_file1.__goscript_init_revProtoTypes()
	__goscript_file2.__goscript_init_sizerType()
	__goscript_file2.__goscript_init_protosizerType()
	await __goscript_file3.__goscriptInit0()
	await __goscript_file4.__goscriptInit0()
	await __goscript_file5.__goscriptInit0()
}
