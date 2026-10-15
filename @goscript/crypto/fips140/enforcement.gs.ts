// Generated file based on enforcement.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import "@goscript/unsafe/index.js"

import * as __goscript_fips140 from "./fips140.gs.ts"
import "@goscript/internal/godebug/index.js"
import "./fips140.gs.ts"

export async function WithoutEnforcement(f: (() => void) | null): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	if (!__goscript_fips140.Enabled() || !Enforced()) {
		void (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return
	}
	setBypass()
	__defer.defer(() => { unsetBypass() })
	void (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export let enabled: boolean = $.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(godebug.New("fips140"))), "only")

export function __goscript_set_enabled(__goscriptValue: boolean): void {
	enabled = __goscriptValue
}

export function Enforced(): boolean {
	return enabled && !isBypassed()
}

export function setBypass(): void {
}

export function isBypassed(): boolean {
	return false
}

export function unsetBypass(): void {
}

var __goscriptAwait: any
