// Generated file based on common_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_common from "./common.gs.ts"
import "@goscript/strconv/index.js"
import "./common.gs.ts"

export const _SignatureScheme_name_0: string = "PKCS1WithSHA1"

export const _SignatureScheme_name_1: string = "ECDSAWithSHA1"

export const _SignatureScheme_name_2: string = "PKCS1WithSHA256"

export const _SignatureScheme_name_3: string = "ECDSAWithP256AndSHA256"

export const _SignatureScheme_name_4: string = "PKCS1WithSHA384"

export const _SignatureScheme_name_5: string = "ECDSAWithP384AndSHA384"

export const _SignatureScheme_name_6: string = "PKCS1WithSHA512"

export const _SignatureScheme_name_7: string = "ECDSAWithP521AndSHA512"

export const _SignatureScheme_name_8: string = "PSSWithSHA256PSSWithSHA384PSSWithSHA512Ed25519"

export const _SignatureScheme_name_9: string = "MLDSA44MLDSA65MLDSA87"

export const _CurveID_name_0: string = "CurveP256CurveP384CurveP521"

export const _CurveID_name_1: string = "X25519"

export const _CurveID_name_2: string = "MLKEM1024"

export const _CurveID_name_3: string = "SecP256r1MLKEM768X25519MLKEM768SecP384r1MLKEM1024"

export const _ClientAuthType_name: string = "NoClientCertRequestClientCertRequireAnyClientCertVerifyClientCertIfGivenRequireAndVerifyClientCert"

function __goscriptBlankFunc0(): void {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	let x: {}[] = $.arrayValue(globalThis.Array.from({ length: 1 }, () => ({})), /* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, 1))
	$.arrayIndex(x, ((1025 - 1025) & 0xffff))
	$.arrayIndex(x, ((1281 - 1281) & 0xffff))
	$.arrayIndex(x, ((1537 - 1537) & 0xffff))
	$.arrayIndex(x, ((2052 - 2052) & 0xffff))
	$.arrayIndex(x, ((2053 - 2053) & 0xffff))
	$.arrayIndex(x, ((2054 - 2054) & 0xffff))
	$.arrayIndex(x, ((1027 - 1027) & 0xffff))
	$.arrayIndex(x, ((1283 - 1283) & 0xffff))
	$.arrayIndex(x, ((1539 - 1539) & 0xffff))
	$.arrayIndex(x, ((2055 - 2055) & 0xffff))
	$.arrayIndex(x, ((2308 - 2308) & 0xffff))
	$.arrayIndex(x, ((2309 - 2309) & 0xffff))
	$.arrayIndex(x, ((2310 - 2310) & 0xffff))
	$.arrayIndex(x, ((513 - 513) & 0xffff))
	$.arrayIndex(x, ((515 - 515) & 0xffff))
}

export let _SignatureScheme_index_8: Uint8Array = $.arrayValue(new Uint8Array([0, 13, 26, 39, 46]))

export function __goscript_set__SignatureScheme_index_8(__goscriptValue: Uint8Array): void {
	_SignatureScheme_index_8 = __goscriptValue
}

export let _SignatureScheme_index_9: Uint8Array = $.arrayValue(new Uint8Array([0, 7, 14, 21]))

export function __goscript_set__SignatureScheme_index_9(__goscriptValue: Uint8Array): void {
	_SignatureScheme_index_9 = __goscriptValue
}

export function SignatureScheme_String(i: __goscript_common.SignatureScheme): string {
	switch ((true as boolean)) {
		case i == 513:
		{
			return "PKCS1WithSHA1"
			break
		}
		case i == 515:
		{
			return "ECDSAWithSHA1"
			break
		}
		case i == 1025:
		{
			return "PKCS1WithSHA256"
			break
		}
		case i == 1027:
		{
			return "ECDSAWithP256AndSHA256"
			break
		}
		case i == 1281:
		{
			return "PKCS1WithSHA384"
			break
		}
		case i == 1283:
		{
			return "ECDSAWithP384AndSHA384"
			break
		}
		case i == 1537:
		{
			return "PKCS1WithSHA512"
			break
		}
		case i == 1539:
		{
			return "ECDSAWithP521AndSHA512"
			break
		}
		case (2052 <= i) && (i <= 2055):
		{
			i = $.uint(i - (2052), 16)
			return $.sliceStringOrBytes("PSSWithSHA256PSSWithSHA384PSSWithSHA512Ed25519", $.arrayIndex(_SignatureScheme_index_8, i), $.arrayIndex(_SignatureScheme_index_8, ((i + 1) & 0xffff)))
			break
		}
		case (2308 <= i) && (i <= 2310):
		{
			i = $.uint(i - (2308), 16)
			return $.sliceStringOrBytes("MLDSA44MLDSA65MLDSA87", $.arrayIndex(_SignatureScheme_index_9, i), $.arrayIndex(_SignatureScheme_index_9, ((i + 1) & 0xffff)))
			break
		}
		default:
		{
			return $.concatString(($.concatString("SignatureScheme(", strconv.FormatInt($.int64(i), 10))), ")")
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

function __goscriptBlankFunc1(): void {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	let x: {}[] = $.arrayValue(globalThis.Array.from({ length: 1 }, () => ({})), /* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, 1))
	$.arrayIndex(x, ((23 - 23) & 0xffff))
	$.arrayIndex(x, ((24 - 24) & 0xffff))
	$.arrayIndex(x, ((25 - 25) & 0xffff))
	$.arrayIndex(x, ((29 - 29) & 0xffff))
	$.arrayIndex(x, ((4588 - 4588) & 0xffff))
	$.arrayIndex(x, ((4587 - 4587) & 0xffff))
	$.arrayIndex(x, ((4589 - 4589) & 0xffff))
	$.arrayIndex(x, ((514 - 514) & 0xffff))
}

export let _CurveID_index_0: Uint8Array = $.arrayValue(new Uint8Array([0, 9, 18, 27]))

export function __goscript_set__CurveID_index_0(__goscriptValue: Uint8Array): void {
	_CurveID_index_0 = __goscriptValue
}

export let _CurveID_index_3: Uint8Array = $.arrayValue(new Uint8Array([0, 17, 31, 49]))

export function __goscript_set__CurveID_index_3(__goscriptValue: Uint8Array): void {
	_CurveID_index_3 = __goscriptValue
}

export function CurveID_String(i: __goscript_common.CurveID): string {
	switch ((true as boolean)) {
		case (23 <= i) && (i <= 25):
		{
			i = $.uint(i - (23), 16)
			return $.sliceStringOrBytes("CurveP256CurveP384CurveP521", $.arrayIndex(_CurveID_index_0, i), $.arrayIndex(_CurveID_index_0, ((i + 1) & 0xffff)))
			break
		}
		case i == 29:
		{
			return "X25519"
			break
		}
		case i == 514:
		{
			return "MLKEM1024"
			break
		}
		case (4587 <= i) && (i <= 4589):
		{
			i = $.uint(i - (4587), 16)
			return $.sliceStringOrBytes("SecP256r1MLKEM768X25519MLKEM768SecP384r1MLKEM1024", $.arrayIndex(_CurveID_index_3, i), $.arrayIndex(_CurveID_index_3, ((i + 1) & 0xffff)))
			break
		}
		default:
		{
			return $.concatString(($.concatString("CurveID(", strconv.FormatInt($.int64(i), 10))), ")")
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

function __goscriptBlankFunc2(): void {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	let x: {}[] = $.arrayValue(globalThis.Array.from({ length: 1 }, () => ({})), /* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, 1))
	$.arrayIndex(x, 0 - 0)
	$.arrayIndex(x, 1 - 1)
	$.arrayIndex(x, 2 - 2)
	$.arrayIndex(x, 3 - 3)
	$.arrayIndex(x, 4 - 4)
}

export let _ClientAuthType_index: Uint8Array = $.arrayValue(new Uint8Array([0, 12, 29, 49, 72, 98]))

export function __goscript_set__ClientAuthType_index(__goscriptValue: Uint8Array): void {
	_ClientAuthType_index = __goscriptValue
}

export function ClientAuthType_String(i: __goscript_common.ClientAuthType): string {
	let idx = $.int(i) - 0
	if ((i < 0) || (idx >= 5)) {
		return $.concatString(($.concatString("ClientAuthType(", strconv.FormatInt($.int64(i), 10))), ")")
	}
	return $.sliceStringOrBytes("NoClientCertRequestClientCertRequireAnyClientCertVerifyClientCertIfGivenRequireAndVerifyClientCert", $.arrayIndex(_ClientAuthType_index, idx), $.arrayIndex(_ClientAuthType_index, idx + 1))
}
