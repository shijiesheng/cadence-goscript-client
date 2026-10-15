// Generated file based on fips140only_go1.26.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/fips140/index.js"
import "@goscript/crypto/fips140/index.js"

export function fips140Enforced(): boolean {
	return fips140.Enforced()
}
