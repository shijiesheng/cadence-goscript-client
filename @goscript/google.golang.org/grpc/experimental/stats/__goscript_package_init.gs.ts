import * as __goscript_file0 from "./metricregistry.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_DefaultMetrics()
	__goscript_file0.__goscript_init_registeredMetrics()
	__goscript_file0.__goscript_init_metricsRegistry()
	__goscript_file0.__goscriptInit0()
}
