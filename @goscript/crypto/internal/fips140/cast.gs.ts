// Generated file based on cast.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as godebug from "@goscript/crypto/internal/fips140deps/godebug/index.js"

import * as errors from "@goscript/errors/index.js"

import * as strings from "@goscript/strings/index.js"

import "@goscript/unsafe/index.js"

import * as __goscript_fips140 from "./fips140.gs.ts"
import "@goscript/crypto/internal/fips140deps/godebug/index.js"
import "@goscript/errors/index.js"
import "@goscript/strings/index.js"
import "./fips140.gs.ts"

export function fatal(_p0: string): void {
}

export let failfipscast: string = godebug.Value("#failfipscast")

export function __goscript_set_failfipscast(__goscriptValue: string): void {
	failfipscast = __goscriptValue
}

export async function CAST(name: string, f: (() => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<void> {
	if (strings.ContainsAny(name, ",#=:")) {
		$.panic($.concatString("fips: invalid self-test name: ", name))
	}
	if (!__goscript_fips140.Enabled) {
		return
	}

	let err = (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if ($.stringEqual(name, failfipscast)) {
		err = errors.New("simulated CAST failure")
	}
	if (err != null) {
		fatal($.concatString(($.concatString(($.concatString("FIPS 140-3 self-test failed: ", name)), ": ")), (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		$.panic("unreachable")
	}
	if (__goscript_fips140.debug) {
		await $.println("FIPS 140-3 self-test passed:", name)
	}
}

export async function PCT(name: string, f: (() => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<void> {
	if (strings.ContainsAny(name, ",#=:")) {
		$.panic($.concatString("fips: invalid self-test name: ", name))
	}
	if (!__goscript_fips140.Enabled) {
		return
	}

	let err = (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if ($.stringEqual(name, failfipscast)) {
		err = errors.New("simulated PCT failure")
	}
	if (err != null) {
		fatal($.concatString(($.concatString(($.concatString("FIPS 140-3 self-test failed: ", name)), ": ")), (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		$.panic("unreachable")
	}
	if (__goscript_fips140.debug) {
		await $.println("FIPS 140-3 PCT passed:", name)
	}
}

var __goscriptAwait: any
