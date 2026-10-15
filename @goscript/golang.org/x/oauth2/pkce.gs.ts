// Generated file based on pkce.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as rand from "@goscript/crypto/rand/index.js"

import * as sha256 from "@goscript/crypto/sha256/index.js"

import * as base64 from "@goscript/encoding/base64/index.js"

import * as url from "@goscript/net/url/index.js"

import * as __goscript_oauth2 from "./oauth2.gs.ts"
import "@goscript/crypto/rand/index.js"
import "@goscript/crypto/sha256/index.js"
import "@goscript/encoding/base64/index.js"
import "@goscript/net/url/index.js"
import "./oauth2.gs.ts"

$.registerTypePackagePath("golang.org/x/oauth2", ["oauth2.challengeOption"])

export class challengeOption {
	public get challenge_method(): string {
		return this._fields.challenge_method
	}

	public set challenge_method(value: string) {
		this._fields.challenge_method = value
	}

	public get challenge(): string {
		return this._fields.challenge
	}

	public set challenge(value: string) {
		this._fields.challenge = value
	}

	public _fields: {
		challenge_method: string
		challenge: string
	}

	constructor(init?: Partial<{challenge_method?: string, challenge?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			challenge_method: init?.challenge_method ?? ("" as string),
			challenge: init?.challenge ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): challengeOption {
		return new challengeOption(this, true)
	}

	public __goscriptAssign(source: challengeOption): void {
		const target = this._fields
		const values = source._fields
		target.challenge_method = values.challenge_method
		target.challenge = values.challenge
	}

	public setValue(m: url.Values): void {
		const p = this;
		url.Values_Set(m, "code_challenge_method", p.challenge_method)
		url.Values_Set(m, "code_challenge", p.challenge)
	}

	static __typeInfo = $.registerStructType(
		"oauth2.challengeOption",
		() => new challengeOption(),
		() => [$.methodSignature("setValue", [["m", "url.Values"]])],
		challengeOption,
		() => [/* @__PURE__ */ $.structField("challenge_method", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "golang.org/x/oauth2" }), /* @__PURE__ */ $.structField("challenge", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "golang.org/x/oauth2" })]
	)
}

export const codeChallengeKey: string = "code_challenge"

export const codeChallengeMethodKey: string = "code_challenge_method"

export const codeVerifierKey: string = "code_verifier"

export async function GenerateVerifier(): globalThis.Promise<string> {
	// "RECOMMENDED that the output of a suitable random number generator be
	// used to create a 32-octet sequence.  The octet sequence is then
	// base64url-encoded to produce a 43-octet URL-safe string to use as the
	// code verifier."
	// https://datatracker.ietf.org/doc/html/rfc7636#section-4.1
	let data: $.Slice<number> = $.makeSlice<number>(32, undefined, "byte")
	{
		let [, err] = await rand.Read(data)
		if (err != null) {
			$.panic((err as any))
		}
	}
	return base64.Encoding.prototype.EncodeToString.call(base64.RawURLEncoding, data)
}

export function VerifierOption(verifier: string): __goscript_oauth2.AuthCodeOption | null {
	return $.interfaceValue<__goscript_oauth2.AuthCodeOption | null>(new __goscript_oauth2.setParam({k: "code_verifier", v: verifier}, true), "oauth2.setParam", "oauth2.setParam")
}

export async function S256ChallengeFromVerifier(verifier: string): globalThis.Promise<string> {
	let sha = $.cloneArrayValue(await sha256.Sum256($.stringToBytes(verifier)), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
	return base64.Encoding.prototype.EncodeToString.call(base64.RawURLEncoding, $.goSlice(sha, undefined, undefined))
}

export async function S256ChallengeOption(verifier: string): globalThis.Promise<__goscript_oauth2.AuthCodeOption | null> {
	return $.interfaceValue<__goscript_oauth2.AuthCodeOption | null>((await (async () => { const __goscriptLiteralField0 = await S256ChallengeFromVerifier(verifier); return new challengeOption({challenge_method: "S256", challenge: __goscriptLiteralField0}, true) })()), "oauth2.challengeOption", "oauth2.challengeOption")
}
