import * as __goscript_file0 from "./all_channels.gs.ts"

import * as __goscript_file1 from "./mex.gs.ts"

import * as __goscript_file2 from "./peer.gs.ts"

import * as __goscript_file3 from "./relay.gs.ts"

import * as __goscript_file4 from "./relay_messages.gs.ts"

import * as __goscript_file5 from "./checksum.gs.ts"

let initialized = false

export async function __goscript_package_init(): globalThis.Promise<void> {
	if (initialized) {
		return
	}
	initialized = true
	__goscript_file0.__goscript_init_channelMap()
	await __goscript_file1.__goscript_init_errMexChannelFull()
	await __goscript_file2.__goscript_init_ErrInvalidConnectionState()
	await __goscript_file3.__goscript_init_errRelayMethodFragmented()
	await __goscript_file3.__goscript_init_errFrameNotSent()
	await __goscript_file3.__goscript_init_errBadRelayHost()
	__goscript_file4.__goscript_init__callerNameKeyBytes()
	__goscript_file4.__goscript_init__routingDelegateKeyBytes()
	__goscript_file4.__goscript_init__routingKeyKeyBytes()
	__goscript_file4.__goscript_init__argSchemeKeyBytes()
	__goscript_file4.__goscript_init__tchanThriftValueBytes()
	__goscript_file5.__goscriptInit0()
}
