import * as __goscript_file0 from "./desc.gs.ts"

import * as __goscript_file1 from "./editions.gs.ts"

import * as __goscript_file2 from "./placeholder.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_SurrogateProto2()
	__goscript_file0.__goscript_init_SurrogateProto3()
	__goscript_file0.__goscript_init_SurrogateEdition2023()
	__goscript_file1.__goscript_init_defaultsCache()
	__goscript_file1.__goscript_init_defaultsKeys()
	__goscript_file2.__goscript_init_emptyNames()
	__goscript_file2.__goscript_init_emptyEnumRanges()
	__goscript_file2.__goscript_init_emptyFieldRanges()
	__goscript_file2.__goscript_init_emptyFieldNumbers()
	__goscript_file2.__goscript_init_emptySourceLocations()
	__goscript_file2.__goscript_init_emptyFiles()
	__goscript_file2.__goscript_init_emptyMessages()
	__goscript_file2.__goscript_init_emptyFields()
	__goscript_file2.__goscript_init_emptyOneofs()
	__goscript_file2.__goscript_init_emptyEnums()
	__goscript_file2.__goscript_init_emptyEnumValues()
	__goscript_file2.__goscript_init_emptyExtensions()
	__goscript_file2.__goscript_init_emptyServices()
	await __goscript_file1.__goscriptInit0()
}
