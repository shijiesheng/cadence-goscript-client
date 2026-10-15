// Generated file based on fips140only.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/fips140/index.js"

import * as sha256 from "@goscript/crypto/internal/fips140/sha256/index.js"

import * as sha3 from "@goscript/crypto/internal/fips140/sha3/index.js"

import * as sha512 from "@goscript/crypto/internal/fips140/sha512/index.js"

import * as hash from "@goscript/hash/index.js"
import "@goscript/crypto/fips140/index.js"
import "@goscript/crypto/internal/fips140/sha256/index.js"
import "@goscript/crypto/internal/fips140/sha3/index.js"
import "@goscript/crypto/internal/fips140/sha512/index.js"
import "@goscript/hash/index.js"

export function Enforced(): boolean {
	return fips140.Enforced()
}

export function ApprovedHash(h: hash.Hash | null): boolean {
	{
		const __goscriptTypeSwitchValue = h
		switch (true) {
			case $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("sha256.Digest")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("sha512.Digest")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("sha3.Digest")):
				{
					return true
				}
				break
			default:
				{
					return false
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}
