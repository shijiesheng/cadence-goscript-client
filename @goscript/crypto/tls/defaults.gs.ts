// Generated file based on defaults.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as slices from "@goscript/slices/index.js"

import "@goscript/unsafe/index.js"

import * as __goscript_cipher_suites from "./cipher_suites.gs.ts"

import * as __goscript_common from "./common.gs.ts"

import * as __goscript_common_string from "./common_string.gs.ts"
import "@goscript/internal/godebug/index.js"
import "@goscript/slices/index.js"
import "./cipher_suites.gs.ts"
import "./common.gs.ts"
import "./common_string.gs.ts"

export let tlsmlkem: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("tlsmlkem")

export function __goscript_set_tlsmlkem(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	tlsmlkem = __goscriptValue
}

export let tlssecpmlkem: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("tlssecpmlkem")

export function __goscript_set_tlssecpmlkem(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	tlssecpmlkem = __goscriptValue
}

export function defaultCurveEnabled(c: __goscript_common.CurveID): boolean {
	switch (c) {
		case 29:
		case 23:
		case 24:
		case 25:
		{
			return true
			break
		}
		case 4588:
		{
			return !$.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(tlsmlkem)), "0")
			break
		}
		case 4587:
		case 4589:
		{
			return (!$.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(tlsmlkem)), "0")) && (!$.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(tlssecpmlkem)), "0"))
			break
		}
		default:
		{
			return false
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function curvePreferenceOrder(): $.Slice<__goscript_common.CurveID> {
	return $.arrayToSlice<__goscript_common.CurveID>([4588, 4587, 4589, 514, 29, 23, 24, 25])
}

export function defaultSupportedSignatureAlgorithms(): $.Slice<__goscript_common.SignatureScheme> {
	return $.arrayToSlice<__goscript_common.SignatureScheme>([2308, 2309, 2310, 2052, 1027, 2055, 2053, 2054, 1025, 1281, 1537, 1283, 1539, 513, 515])
}

export function supportedCipherSuites(aesGCMPreferred: boolean): $.Slice<number> {
	if (aesGCMPreferred) {
		return (slices.Clone(__goscript_cipher_suites.cipherSuitesPreferenceOrder) as $.Slice<number>)
	} else {
		return (slices.Clone(__goscript_cipher_suites.cipherSuitesPreferenceOrderNoAES) as $.Slice<number>)
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function defaultCipherSuites(aesGCMPreferred: boolean): $.Slice<number> {
	let cipherSuites: $.Slice<number> = supportedCipherSuites(aesGCMPreferred)
	return (slices.DeleteFunc(cipherSuites, $.functionValue((c: number): boolean => {
		return $.mapGet<number, boolean, boolean>(__goscript_cipher_suites.disabledCipherSuites, c, false)[0]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint16")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))) as $.Slice<number>)
}

export var defaultCipherSuitesTLS13: $.Slice<number>

export function __goscript_init_defaultCipherSuitesTLS13(): void {
	if (((defaultCipherSuitesTLS13) as any) === undefined) {
		defaultCipherSuitesTLS13 = $.arrayToSlice<number>([4865, 4866, 4867])
	}
}

export function __goscript_get_defaultCipherSuitesTLS13(): $.Slice<number> {
	if (((defaultCipherSuitesTLS13) as any) === undefined) {
		__goscript_init_defaultCipherSuitesTLS13()
	}
	return defaultCipherSuitesTLS13
}

export function __goscript_set_defaultCipherSuitesTLS13(__goscriptValue: $.Slice<number>): void {
	defaultCipherSuitesTLS13 = __goscriptValue
}

export var defaultCipherSuitesTLS13NoAES: $.Slice<number>

export function __goscript_init_defaultCipherSuitesTLS13NoAES(): void {
	if (((defaultCipherSuitesTLS13NoAES) as any) === undefined) {
		defaultCipherSuitesTLS13NoAES = $.arrayToSlice<number>([4867, 4865, 4866])
	}
}

export function __goscript_get_defaultCipherSuitesTLS13NoAES(): $.Slice<number> {
	if (((defaultCipherSuitesTLS13NoAES) as any) === undefined) {
		__goscript_init_defaultCipherSuitesTLS13NoAES()
	}
	return defaultCipherSuitesTLS13NoAES
}

export function __goscript_set_defaultCipherSuitesTLS13NoAES(__goscriptValue: $.Slice<number>): void {
	defaultCipherSuitesTLS13NoAES = __goscriptValue
}
