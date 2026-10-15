// Generated file based on envconfig.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as os from "@goscript/os/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/os/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"

export let TXTErrIgnore: boolean = boolFromEnv("GRPC_GO_IGNORE_TXT_ERRORS", true)

export function __goscript_set_TXTErrIgnore(__goscriptValue: boolean): void {
	TXTErrIgnore = __goscriptValue
}

export let RingHashCap: bigint = uint64FromEnv("GRPC_RING_HASH_CAP", 4096n, 1n, 8388608n)

export function __goscript_set_RingHashCap(__goscriptValue: bigint): void {
	RingHashCap = __goscriptValue
}

export let LeastRequestLB: boolean = boolFromEnv("GRPC_EXPERIMENTAL_ENABLE_LEAST_REQUEST", false)

export function __goscript_set_LeastRequestLB(__goscriptValue: boolean): void {
	LeastRequestLB = __goscriptValue
}

export let ALTSMaxConcurrentHandshakes: bigint = uint64FromEnv("GRPC_ALTS_MAX_CONCURRENT_HANDSHAKES", 100n, 1n, 100n)

export function __goscript_set_ALTSMaxConcurrentHandshakes(__goscriptValue: bigint): void {
	ALTSMaxConcurrentHandshakes = __goscriptValue
}

export let EnforceALPNEnabled: boolean = boolFromEnv("GRPC_ENFORCE_ALPN_ENABLED", true)

export function __goscript_set_EnforceALPNEnabled(__goscriptValue: boolean): void {
	EnforceALPNEnabled = __goscriptValue
}

export let XDSFallbackSupport: boolean = boolFromEnv("GRPC_EXPERIMENTAL_XDS_FALLBACK", false)

export function __goscript_set_XDSFallbackSupport(__goscriptValue: boolean): void {
	XDSFallbackSupport = __goscriptValue
}

export function boolFromEnv(envVar: string, def: boolean): boolean {
	if (def) {
		// The default is true; return true unless the variable is "false".
		return !strings.EqualFold(os.Getenv(envVar), "false")
	}
	// The default is false; return false unless the variable is "true".
	return strings.EqualFold(os.Getenv(envVar), "true")
}

export function uint64FromEnv(envVar: string, def: bigint, min: bigint, max: bigint): bigint {
	let [v, err] = strconv.ParseUint(os.Getenv(envVar), 10, 64)
	if (err != null) {
		return def
	}
	if (v < min) {
		return min
	}
	if (v > max) {
		return max
	}
	return v
}
