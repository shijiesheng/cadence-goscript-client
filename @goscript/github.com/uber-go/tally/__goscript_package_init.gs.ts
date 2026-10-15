import * as __goscript_file0 from "./scope.gs.ts"

import * as __goscript_file1 from "./scope_registry.gs.ts"

import * as __goscript_file2 from "./stats.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_defaultScopeBuckets()
	__goscript_file1.__goscript_init_scopeRegistryKey()
	__goscript_file1.__goscript_init_internalTags()
	__goscript_file1.__goscript_init_counterCardinalityName()
	__goscript_file1.__goscript_init_gaugeCardinalityName()
	__goscript_file1.__goscript_init_histogramCardinalityName()
	__goscript_file2.__goscript_init_NullStatsReporter()
	await __goscript_file0.__goscript_init_NoopScope()
}
