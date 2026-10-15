// Generated file based on spiffe.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as url from "@goscript/net/url/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/net/url/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

export let logger: grpclog.DepthLoggerV2 | null = await grpclog.Component("credentials")

export function __goscript_set_logger(__goscriptValue: grpclog.DepthLoggerV2 | null): void {
	logger = __goscriptValue
}

export async function SPIFFEIDFromState(state: tls.ConnectionState): globalThis.Promise<url.URL | $.VarRef<url.URL> | null> {
	if (($.sliceLen(state.PeerCertificates) == 0) || ($.sliceLen($.pointerValue<x509.Certificate>($.arrayIndex(state.PeerCertificates!, 0)).URIs) == 0)) {
		return null
	}
	return SPIFFEIDFromCert($.arrayIndex(state.PeerCertificates!, 0))
}

export async function SPIFFEIDFromCert(cert: x509.Certificate | $.VarRef<x509.Certificate> | null): globalThis.Promise<url.URL | $.VarRef<url.URL> | null> {
	const cert$: x509.Certificate = cert == null ? $.pointerTarget<x509.Certificate>(cert) : (cert as any).__isVarRef === true ? (cert as any).value : (cert as any).__goValue === undefined ? (cert as any) : $.pointerTarget<x509.Certificate>(cert)
	if ((cert == null) || ((cert$ as x509.Certificate).URIs == null)) {
		return null
	}
	let spiffeID: url.URL | $.VarRef<url.URL> | null = null! as url.URL | $.VarRef<url.URL> | null
	for (let __goscriptRangeTarget0 = (cert$ as x509.Certificate).URIs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let uri = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as url.URL | $.VarRef<url.URL> | null)
		if ((((uri == null) || (!$.stringEqual($.pointerValue<url.URL>(uri).Scheme, "spiffe"))) || (!$.stringEqual($.pointerValue<url.URL>(uri).Opaque, ""))) || (($.pointerValue<url.URL>(uri).User != null) && (!$.stringEqual(url.Userinfo.prototype.Username.call($.pointerValue<url.URL>(uri).User), "")))) {
			continue
		}
		// From this point, we assume the uri is intended for a SPIFFE ID.
		if ($.stringLen((uri !== null && (uri as any).__isVarRef !== true && (uri as any).__goValue === undefined ? ((uri as any) as url.URL).String() : url.URL.prototype.String.call(uri))) > 2048) {
			void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Warning($.arrayToSlice<any>(["invalid SPIFFE ID: total ID length larger than 2048 bytes"])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return null
		}
		if (($.stringLen($.pointerValue<url.URL>(uri).Host) == 0) || ($.stringLen($.pointerValue<url.URL>(uri).Path) == 0)) {
			void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Warning($.arrayToSlice<any>(["invalid SPIFFE ID: domain or workload ID is empty"])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return null
		}
		if ($.stringLen($.pointerValue<url.URL>(uri).Host) > 255) {
			void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Warning($.arrayToSlice<any>(["invalid SPIFFE ID: domain length larger than 255 characters"])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return null
		}
		// A valid SPIFFE certificate can only have exactly one URI SAN field.
		if ($.sliceLen((cert$ as x509.Certificate).URIs) > 1) {
			void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Warning($.arrayToSlice<any>(["invalid SPIFFE ID: multiple URI SANs"])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return null
		}
		spiffeID = uri
	}
	return spiffeID
}

var __goscriptAwait: any
