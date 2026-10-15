// Generated file based on alert.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"
import "@goscript/strconv/index.js"

$.registerTypePackagePath("crypto/tls", ["tls.AlertError", "tls.alert"])

export type AlertError = number

$.registerNamedValueType(
	"tls.AlertError",
	{Error: (receiver: any, ...args: any[]) => (AlertError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tls.AlertError",
	{Error: (receiver: any, ...args: any[]) => (AlertError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type alert = number

$.registerNamedValueType(
	"tls.alert",
	{Error: (receiver: any, ...args: any[]) => (alert_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (alert_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tls.alert",
	{Error: (receiver: any, ...args: any[]) => (alert_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (alert_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export const alertLevelWarning: number = 1

export const alertLevelError: number = 2

export const alertCloseNotify: alert = 0

export const alertUnexpectedMessage: alert = 10

export const alertBadRecordMAC: alert = 20

export const alertDecryptionFailed: alert = 21

export const alertRecordOverflow: alert = 22

export const alertDecompressionFailure: alert = 30

export const alertHandshakeFailure: alert = 40

export const alertBadCertificate: alert = 42

export const alertUnsupportedCertificate: alert = 43

export const alertCertificateRevoked: alert = 44

export const alertCertificateExpired: alert = 45

export const alertCertificateUnknown: alert = 46

export const alertIllegalParameter: alert = 47

export const alertUnknownCA: alert = 48

export const alertAccessDenied: alert = 49

export const alertDecodeError: alert = 50

export const alertDecryptError: alert = 51

export const alertExportRestriction: alert = 60

export const alertProtocolVersion: alert = 70

export const alertInsufficientSecurity: alert = 71

export const alertInternalError: alert = 80

export const alertInappropriateFallback: alert = 86

export const alertUserCanceled: alert = 90

export const alertNoRenegotiation: alert = 100

export const alertMissingExtension: alert = 109

export const alertUnsupportedExtension: alert = 110

export const alertCertificateUnobtainable: alert = 111

export const alertUnrecognizedName: alert = 112

export const alertBadCertificateStatusResponse: alert = 113

export const alertBadCertificateHashValue: alert = 114

export const alertUnknownPSKIdentity: alert = 115

export const alertCertificateRequired: alert = 116

export const alertNoApplicationProtocol: alert = 120

export const alertECHRequired: alert = 121

export function AlertError_Error(e: AlertError): string {
	return alert_String($.uint(e, 8))
}

export let alertText: globalThis.Map<alert, string> | null = $.makeMap<alert, string>([[0, "close notify"], [10, "unexpected message"], [20, "bad record MAC"], [21, "decryption failed"], [22, "record overflow"], [30, "decompression failure"], [40, "handshake failure"], [42, "bad certificate"], [43, "unsupported certificate"], [44, "revoked certificate"], [45, "expired certificate"], [46, "unknown certificate"], [47, "illegal parameter"], [48, "unknown certificate authority"], [49, "access denied"], [50, "error decoding message"], [51, "error decrypting message"], [60, "export restriction"], [70, "protocol version not supported"], [71, "insufficient security level"], [80, "internal error"], [86, "inappropriate fallback"], [90, "user canceled"], [100, "no renegotiation"], [109, "missing extension"], [110, "unsupported extension"], [111, "certificate unobtainable"], [112, "unrecognized name"], [113, "bad certificate status response"], [114, "bad certificate hash value"], [115, "unknown PSK identity"], [116, "certificate required"], [120, "no application protocol"], [121, "encrypted client hello required"]])

export function __goscript_set_alertText(__goscriptValue: globalThis.Map<alert, string> | null): void {
	alertText = __goscriptValue
}

export function alert_String(e: alert): string {
	let [s, ok] = $.mapGet<alert, string, string>(alertText, e, "")
	if (ok) {
		return $.concatString("tls: ", s)
	}
	return $.concatString(($.concatString("tls: alert(", strconv.Itoa($.int(e)))), ")")
}

export function alert_Error(e: alert): string {
	return alert_String(e)
}
