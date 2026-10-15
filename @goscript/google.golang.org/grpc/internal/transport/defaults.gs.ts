// Generated file based on defaults.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/math/index.js"
import "@goscript/time/index.js"

export const defaultWindowSize: number = 65535

export const initialWindowSize: number = 65535

export const infinity: time.Duration = 9223372036854775807n

export const defaultClientKeepaliveTime: time.Duration = 9223372036854775807n

export const defaultClientKeepaliveTimeout: time.Duration = 20000000000n

export const defaultMaxStreamsClient: number = 100

export const defaultMaxConnectionIdle: time.Duration = 9223372036854775807n

export const defaultMaxConnectionAge: time.Duration = 9223372036854775807n

export const defaultMaxConnectionAgeGrace: time.Duration = 9223372036854775807n

export const defaultServerKeepaliveTime: time.Duration = 7200000000000n

export const defaultServerKeepaliveTimeout: time.Duration = 20000000000n

export const defaultKeepalivePolicyMinTime: time.Duration = 300000000000n

export const maxWindowSize: number = 2147483647

export const defaultWriteQuota: number = 65536

export const defaultClientMaxHeaderListSize: number = 16777216

export const defaultServerMaxHeaderListSize: number = 16777216

export let MaxStreamID: number = 1610612735

export function __goscript_set_MaxStreamID(__goscriptValue: number): void {
	MaxStreamID = __goscriptValue
}
