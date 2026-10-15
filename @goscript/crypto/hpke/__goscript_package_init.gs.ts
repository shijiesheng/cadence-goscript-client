import * as __goscript_file0 from "./aead.gs.ts"

import * as __goscript_file1 from "./kdf.gs.ts"

import * as __goscript_file2 from "./kem.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_aes128GCM()
	__goscript_file0.__goscript_init_aes256GCM()
	__goscript_file1.__goscript_init_hkdfSHA256()
	__goscript_file1.__goscript_init_hkdfSHA384()
	__goscript_file1.__goscript_init_hkdfSHA512()
	__goscript_file2.__goscript_init_dhKEMP256()
	__goscript_file2.__goscript_init_dhKEMP384()
	__goscript_file2.__goscript_init_dhKEMP521()
	__goscript_file2.__goscript_init_dhKEMX25519()
}
