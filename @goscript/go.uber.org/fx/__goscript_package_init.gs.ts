import * as __goscript_file0 from "./annotated.gs.ts"

import * as __goscript_file1 from "./extract.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init__inAnnotationField()
	__goscript_file0.__goscript_init__outAnnotationField()
	__goscript_file0.__goscript_init__typeOfLifecycle()
	__goscript_file1.__goscript_init__typeOfIn()
}
