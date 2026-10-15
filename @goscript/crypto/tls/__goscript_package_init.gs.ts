import * as __goscript_file0 from "./auth.gs.ts"

import * as __goscript_file1 from "./cipher_suites.gs.ts"

import * as __goscript_file2 from "./defaults.gs.ts"

import * as __goscript_file3 from "./defaults_fips140.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	await __goscript_file0.__goscript_init_rsaSignatureSchemes()
	__goscript_file1.__goscript_init_supportedUpToTLS12()
	__goscript_file1.__goscript_init_supportedOnlyTLS12()
	__goscript_file1.__goscript_init_supportedOnlyTLS13()
	__goscript_file2.__goscript_init_defaultCipherSuitesTLS13()
	__goscript_file2.__goscript_init_defaultCipherSuitesTLS13NoAES()
	__goscript_file3.__goscript_init_allowedSupportedVersionsFIPS()
	__goscript_file3.__goscript_init_allowedCurvePreferencesFIPS()
	__goscript_file3.__goscript_init_allowedSignatureAlgorithmsFIPS()
	__goscript_file3.__goscript_init_allowedCipherSuitesFIPS()
	__goscript_file3.__goscript_init_allowedCipherSuitesTLS13FIPS()
}
