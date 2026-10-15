// Generated file based on common.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes2 from "@goscript/bytes/index.js"

import * as list from "@goscript/container/list/index.js"

import * as context2 from "@goscript/context/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as ecdsa from "@goscript/crypto/ecdsa/index.js"

import * as ed25519 from "@goscript/crypto/ed25519/index.js"

import * as elliptic from "@goscript/crypto/elliptic/index.js"

import * as fips140 from "@goscript/crypto/fips140/index.js"

import * as mldsa from "@goscript/crypto/mldsa/index.js"

import * as rand2 from "@goscript/crypto/rand/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"

import * as sha512 from "@goscript/crypto/sha512/index.js"

import * as fips140tls from "@goscript/crypto/tls/internal/fips140tls/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time2 from "@goscript/time/index.js"

import "@goscript/unsafe/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as aes from "@goscript/crypto/aes/index.js"

import * as cipher from "@goscript/crypto/cipher/index.js"

import * as hmac from "@goscript/crypto/hmac/index.js"

import * as sha256 from "@goscript/crypto/sha256/index.js"

import * as subtle from "@goscript/crypto/subtle/index.js"

import * as cryptobyte from "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"

import * as pkix from "@goscript/crypto/x509/pkix/index.js"

import * as hash from "@goscript/hash/index.js"

import type * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_auth from "./auth.gs.ts"

import * as __goscript_cipher_suites from "./cipher_suites.gs.ts"

import * as __goscript_common_string from "./common_string.gs.ts"

import * as __goscript_defaults from "./defaults.gs.ts"

import * as __goscript_defaults_fips140 from "./defaults_fips140.gs.ts"

import type * as __goscript_handshake_messages from "./handshake_messages.gs.ts"

import * as __goscript_handshake_server from "./handshake_server.gs.ts"

import type * as __goscript_key_agreement from "./key_agreement.gs.ts"

import * as __goscript_ticket from "./ticket.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/container/list/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/index.js"
import "@goscript/crypto/ecdsa/index.js"
import "@goscript/crypto/ed25519/index.js"
import "@goscript/crypto/elliptic/index.js"
import "@goscript/crypto/fips140/index.js"
import "@goscript/crypto/mldsa/index.js"
import "@goscript/crypto/rand/index.js"
import "@goscript/crypto/rsa/index.js"
import "@goscript/crypto/sha512/index.js"
import "@goscript/crypto/tls/internal/fips140tls/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/internal/godebug/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/runtime/index.js"
import "@goscript/slices/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/strconv/index.js"
import "@goscript/crypto/aes/index.js"
import "@goscript/crypto/cipher/index.js"
import "@goscript/crypto/hmac/index.js"
import "@goscript/crypto/sha256/index.js"
import "@goscript/crypto/subtle/index.js"
import "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"
import "@goscript/crypto/x509/pkix/index.js"
import "@goscript/hash/index.js"
import "./auth.gs.ts"
import "./cipher_suites.gs.ts"
import "./common_string.gs.ts"
import "./defaults.gs.ts"
import "./defaults_fips140.gs.ts"
import "./handshake_server.gs.ts"
import "./ticket.gs.ts"

$.registerTypePackagePath("crypto/tls", ["tls.recordType", "tls.CurveID", "tls.keyShare", "tls.pskIdentity", "tls.ConnectionState", "tls.ClientAuthType", "tls.ClientSessionCache", "tls.SignatureScheme", "tls.ClientHelloInfo", "tls.CertificateRequestInfo", "tls.RenegotiationSupport", "tls.Config", "tls.EncryptedClientHelloKey", "tls.ticketKey", "tls.Certificate", "tls.handshakeMessage", "tls.handshakeMessageWithOriginalBytes", "tls.lruSessionCache", "tls.lruSessionCacheEntry", "tls.CertificateVerificationError"])

export type recordType = number

export type CurveID = number

$.registerNamedValueType(
	"tls.CurveID",
	{String: (receiver: any, ...args: any[]) => (__goscript_common_string.CurveID_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tls.CurveID",
	{String: (receiver: any, ...args: any[]) => (__goscript_common_string.CurveID_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type ClientAuthType = number

$.registerNamedValueType(
	"tls.ClientAuthType",
	{String: (receiver: any, ...args: any[]) => (__goscript_common_string.ClientAuthType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tls.ClientAuthType",
	{String: (receiver: any, ...args: any[]) => (__goscript_common_string.ClientAuthType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type ClientSessionCache = {
	Get(sessionKey: string): [__goscript_ticket.ClientSessionState | $.VarRef<__goscript_ticket.ClientSessionState> | null, boolean] | globalThis.Promise<[__goscript_ticket.ClientSessionState | $.VarRef<__goscript_ticket.ClientSessionState> | null, boolean]>
	Put(sessionKey: string, cs: __goscript_ticket.ClientSessionState | $.VarRef<__goscript_ticket.ClientSessionState> | null): void
}

$.registerInterfaceType(
	"tls.ClientSessionCache",
	null,
	[$.methodSignature("Get", [["sessionKey", /* @__PURE__ */ $.basicType("string")]], [["session", /* @__PURE__ */ $.pointerType("tls.ClientSessionState")], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Put", [["sessionKey", /* @__PURE__ */ $.basicType("string")], ["cs", /* @__PURE__ */ $.pointerType("tls.ClientSessionState")]])]
);

export type SignatureScheme = number

$.registerNamedValueType(
	"tls.SignatureScheme",
	{String: (receiver: any, ...args: any[]) => (__goscript_common_string.SignatureScheme_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tls.SignatureScheme",
	{String: (receiver: any, ...args: any[]) => (__goscript_common_string.SignatureScheme_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type RenegotiationSupport = number

export type handshakeMessage = {
	marshal(): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	unmarshal(_p0: $.Slice<number>): boolean
}

$.registerInterfaceType(
	"tls.handshakeMessage",
	null,
	[$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("unmarshal", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [/* @__PURE__ */ $.basicType("bool")])]
);

export type handshakeMessageWithOriginalBytes = {
	marshal(): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	originalBytes(): $.Slice<number>
	unmarshal(_p0: $.Slice<number>): boolean
}

$.registerInterfaceType(
	"tls.handshakeMessageWithOriginalBytes",
	null,
	[$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("originalBytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("unmarshal", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [/* @__PURE__ */ $.basicType("bool")])]
);

export class keyShare {
	public get group(): CurveID {
		return this._fields.group
	}

	public set group(value: CurveID) {
		this._fields.group = value
	}

	public get data(): $.Slice<number> {
		return this._fields.data
	}

	public set data(value: $.Slice<number>) {
		this._fields.data = value
	}

	public _fields: {
		group: CurveID
		data: $.Slice<number>
	}

	constructor(init?: Partial<{group?: CurveID, data?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			group: init?.group ?? (0 as CurveID),
			data: init?.data ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): keyShare {
		return new keyShare(this, true)
	}

	public __goscriptAssign(source: keyShare): void {
		const target = this._fields
		const values = source._fields
		target.group = values.group
		target.data = values.data
	}

	static __typeInfo = $.registerStructType(
		"tls.keyShare",
		() => new keyShare(),
		() => [],
		keyShare,
		() => [/* @__PURE__ */ $.structField("group", /* @__PURE__ */ $.basicType("uint16", "tls.CurveID"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, false, { pkgPath: "crypto/tls" })]
	)
}

export class pskIdentity {
	public get label(): $.Slice<number> {
		return this._fields.label
	}

	public set label(value: $.Slice<number>) {
		this._fields.label = value
	}

	public get obfuscatedTicketAge(): number {
		return this._fields.obfuscatedTicketAge
	}

	public set obfuscatedTicketAge(value: number) {
		this._fields.obfuscatedTicketAge = value
	}

	public _fields: {
		label: $.Slice<number>
		obfuscatedTicketAge: number
	}

	constructor(init?: Partial<{label?: $.Slice<number>, obfuscatedTicketAge?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			label: init?.label ?? (null! as $.Slice<number>),
			obfuscatedTicketAge: init?.obfuscatedTicketAge ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pskIdentity {
		return new pskIdentity(this, true)
	}

	public __goscriptAssign(source: pskIdentity): void {
		const target = this._fields
		const values = source._fields
		target.label = values.label
		target.obfuscatedTicketAge = values.obfuscatedTicketAge
	}

	static __typeInfo = $.registerStructType(
		"tls.pskIdentity",
		() => new pskIdentity(),
		() => [],
		pskIdentity,
		() => [/* @__PURE__ */ $.structField("label", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("obfuscatedTicketAge", /* @__PURE__ */ $.basicType("uint32"), [1], 24, false, { pkgPath: "crypto/tls" })]
	)
}

export class ConnectionState {
	// Version is the TLS version used by the connection (e.g. VersionTLS12).
	public get Version(): number {
		return this._fields.Version
	}

	public set Version(value: number) {
		this._fields.Version = value
	}

	// HandshakeComplete is true if the handshake has concluded.
	public get HandshakeComplete(): boolean {
		return this._fields.HandshakeComplete
	}

	public set HandshakeComplete(value: boolean) {
		this._fields.HandshakeComplete = value
	}

	// DidResume is true if this connection was successfully resumed from a
	// previous session with a session ticket or similar mechanism.
	public get DidResume(): boolean {
		return this._fields.DidResume
	}

	public set DidResume(value: boolean) {
		this._fields.DidResume = value
	}

	// CipherSuite is the cipher suite negotiated for the connection (e.g.
	// TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256, TLS_AES_128_GCM_SHA256).
	public get CipherSuite(): number {
		return this._fields.CipherSuite
	}

	public set CipherSuite(value: number) {
		this._fields.CipherSuite = value
	}

	// CurveID is the key exchange mechanism used for the connection. The name
	// refers to elliptic curves for legacy reasons, see [CurveID]. If a legacy
	// RSA key exchange is used, this value is zero.
	public get CurveID(): CurveID {
		return this._fields.CurveID
	}

	public set CurveID(value: CurveID) {
		this._fields.CurveID = value
	}

	// NegotiatedProtocol is the application protocol negotiated with ALPN.
	public get NegotiatedProtocol(): string {
		return this._fields.NegotiatedProtocol
	}

	public set NegotiatedProtocol(value: string) {
		this._fields.NegotiatedProtocol = value
	}

	// NegotiatedProtocolIsMutual used to indicate a mutual NPN negotiation.
	//
	// Deprecated: this value is always true.
	public get NegotiatedProtocolIsMutual(): boolean {
		return this._fields.NegotiatedProtocolIsMutual
	}

	public set NegotiatedProtocolIsMutual(value: boolean) {
		this._fields.NegotiatedProtocolIsMutual = value
	}

	// ServerName is the value of the Server Name Indication extension sent by
	// the client. It's available both on the server and on the client side.
	public get ServerName(): string {
		return this._fields.ServerName
	}

	public set ServerName(value: string) {
		this._fields.ServerName = value
	}

	// PeerCertificates are the parsed certificates sent by the peer, in the
	// order in which they were sent. The first element is the leaf certificate
	// that the connection is verified against.
	//
	// On the client side, it can't be empty. On the server side, it can be
	// empty if Config.ClientAuth is not RequireAnyClientCert or
	// RequireAndVerifyClientCert.
	//
	// PeerCertificates and its contents should not be modified.
	public get PeerCertificates(): $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null> {
		return this._fields.PeerCertificates
	}

	public set PeerCertificates(value: $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>) {
		this._fields.PeerCertificates = value
	}

	// VerifiedChains is a list of one or more chains where the first element is
	// PeerCertificates[0] and the last element is from Config.RootCAs (on the
	// client side) or Config.ClientCAs (on the server side).
	//
	// On the client side, it's set if Config.InsecureSkipVerify is false. On
	// the server side, it's set if Config.ClientAuth is VerifyClientCertIfGiven
	// (and the peer provided a certificate) or RequireAndVerifyClientCert.
	//
	// VerifiedChains and its contents should not be modified.
	public get VerifiedChains(): $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>> {
		return this._fields.VerifiedChains
	}

	public set VerifiedChains(value: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>) {
		this._fields.VerifiedChains = value
	}

	// SignedCertificateTimestamps is a list of SCTs provided by the peer
	// through the TLS handshake for the leaf certificate, if any.
	public get SignedCertificateTimestamps(): $.Slice<$.Slice<number>> {
		return this._fields.SignedCertificateTimestamps
	}

	public set SignedCertificateTimestamps(value: $.Slice<$.Slice<number>>) {
		this._fields.SignedCertificateTimestamps = value
	}

	// OCSPResponse is a stapled Online Certificate Status Protocol (OCSP)
	// response provided by the peer for the leaf certificate, if any.
	public get OCSPResponse(): $.Slice<number> {
		return this._fields.OCSPResponse
	}

	public set OCSPResponse(value: $.Slice<number>) {
		this._fields.OCSPResponse = value
	}

	// TLSUnique contains the "tls-unique" channel binding value (see RFC 5929,
	// Section 3). This value will be nil for TLS 1.3 connections and for
	// resumed connections that don't support Extended Master Secret (RFC 7627).
	public get TLSUnique(): $.Slice<number> {
		return this._fields.TLSUnique
	}

	public set TLSUnique(value: $.Slice<number>) {
		this._fields.TLSUnique = value
	}

	// ECHAccepted indicates if Encrypted Client Hello was offered by the client
	// and accepted by the server. Currently, ECH is supported only on the
	// client side.
	public get ECHAccepted(): boolean {
		return this._fields.ECHAccepted
	}

	public set ECHAccepted(value: boolean) {
		this._fields.ECHAccepted = value
	}

	// HelloRetryRequest indicates whether we sent a HelloRetryRequest if we
	// are a server, or if we received a HelloRetryRequest if we are a client.
	public get HelloRetryRequest(): boolean {
		return this._fields.HelloRetryRequest
	}

	public set HelloRetryRequest(value: boolean) {
		this._fields.HelloRetryRequest = value
	}

	// LocalCertificate is the certificate chain presented to the peer, if any,
	// during the handshake. This field is only populated for connections which
	// are not resumed (DidResume is false).
	public get LocalCertificate(): $.Slice<$.Slice<number>> {
		return this._fields.LocalCertificate
	}

	public set LocalCertificate(value: $.Slice<$.Slice<number>>) {
		this._fields.LocalCertificate = value
	}

	// ekm is a closure exposed via ExportKeyingMaterial.
	public get ekm(): ((label: string, context: $.Slice<number>, length: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null {
		return this._fields.ekm
	}

	public set ekm(value: ((label: string, context: $.Slice<number>, length: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null) {
		this._fields.ekm = value
	}

	// testingOnlyPeerSignatureAlgorithm is the signature algorithm used by the
	// peer to sign the handshake. It is not set for resumed connections.
	public get testingOnlyPeerSignatureAlgorithm(): SignatureScheme {
		return this._fields.testingOnlyPeerSignatureAlgorithm
	}

	public set testingOnlyPeerSignatureAlgorithm(value: SignatureScheme) {
		this._fields.testingOnlyPeerSignatureAlgorithm = value
	}

	public _fields: {
		Version: number
		HandshakeComplete: boolean
		DidResume: boolean
		CipherSuite: number
		CurveID: CurveID
		NegotiatedProtocol: string
		NegotiatedProtocolIsMutual: boolean
		ServerName: string
		PeerCertificates: $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>
		VerifiedChains: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>
		SignedCertificateTimestamps: $.Slice<$.Slice<number>>
		OCSPResponse: $.Slice<number>
		TLSUnique: $.Slice<number>
		ECHAccepted: boolean
		HelloRetryRequest: boolean
		LocalCertificate: $.Slice<$.Slice<number>>
		ekm: ((label: string, context: $.Slice<number>, length: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null
		testingOnlyPeerSignatureAlgorithm: SignatureScheme
	}

	constructor(init?: Partial<{Version?: number, HandshakeComplete?: boolean, DidResume?: boolean, CipherSuite?: number, CurveID?: CurveID, NegotiatedProtocol?: string, NegotiatedProtocolIsMutual?: boolean, ServerName?: string, PeerCertificates?: $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>, VerifiedChains?: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>, SignedCertificateTimestamps?: $.Slice<$.Slice<number>>, OCSPResponse?: $.Slice<number>, TLSUnique?: $.Slice<number>, ECHAccepted?: boolean, HelloRetryRequest?: boolean, LocalCertificate?: $.Slice<$.Slice<number>>, ekm?: ((label: string, context: $.Slice<number>, length: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null, testingOnlyPeerSignatureAlgorithm?: SignatureScheme}>, __goscriptValue?: boolean) {
		this._fields = {
			Version: init?.Version ?? (0 as number),
			HandshakeComplete: init?.HandshakeComplete ?? (false as boolean),
			DidResume: init?.DidResume ?? (false as boolean),
			CipherSuite: init?.CipherSuite ?? (0 as number),
			CurveID: init?.CurveID ?? (0 as CurveID),
			NegotiatedProtocol: init?.NegotiatedProtocol ?? ("" as string),
			NegotiatedProtocolIsMutual: init?.NegotiatedProtocolIsMutual ?? (false as boolean),
			ServerName: init?.ServerName ?? ("" as string),
			PeerCertificates: init?.PeerCertificates ?? (null! as $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>),
			VerifiedChains: init?.VerifiedChains ?? (null! as $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>),
			SignedCertificateTimestamps: init?.SignedCertificateTimestamps ?? (null! as $.Slice<$.Slice<number>>),
			OCSPResponse: init?.OCSPResponse ?? (null! as $.Slice<number>),
			TLSUnique: init?.TLSUnique ?? (null! as $.Slice<number>),
			ECHAccepted: init?.ECHAccepted ?? (false as boolean),
			HelloRetryRequest: init?.HelloRetryRequest ?? (false as boolean),
			LocalCertificate: init?.LocalCertificate ?? (null! as $.Slice<$.Slice<number>>),
			ekm: init?.ekm ?? (null! as ((label: string, context: $.Slice<number>, length: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null),
			testingOnlyPeerSignatureAlgorithm: init?.testingOnlyPeerSignatureAlgorithm ?? (0 as SignatureScheme)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConnectionState {
		return new ConnectionState(this, true)
	}

	public __goscriptAssign(source: ConnectionState): void {
		const target = this._fields
		const values = source._fields
		target.Version = values.Version
		target.HandshakeComplete = values.HandshakeComplete
		target.DidResume = values.DidResume
		target.CipherSuite = values.CipherSuite
		target.CurveID = values.CurveID
		target.NegotiatedProtocol = values.NegotiatedProtocol
		target.NegotiatedProtocolIsMutual = values.NegotiatedProtocolIsMutual
		target.ServerName = values.ServerName
		target.PeerCertificates = values.PeerCertificates
		target.VerifiedChains = values.VerifiedChains
		target.SignedCertificateTimestamps = values.SignedCertificateTimestamps
		target.OCSPResponse = values.OCSPResponse
		target.TLSUnique = values.TLSUnique
		target.ECHAccepted = values.ECHAccepted
		target.HelloRetryRequest = values.HelloRetryRequest
		target.LocalCertificate = values.LocalCertificate
		target.ekm = values.ekm
		target.testingOnlyPeerSignatureAlgorithm = values.testingOnlyPeerSignatureAlgorithm
	}

	public async ExportKeyingMaterial(label: string, context: $.Slice<number>, length: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const cs: ConnectionState | $.VarRef<ConnectionState> | null = this;
		return $.pointerValue<ConnectionState>(cs).ekm!(label, context, length)
	}

	static __typeInfo = $.registerStructType(
		"tls.ConnectionState",
		() => new ConnectionState(),
		() => [$.methodSignature("ExportKeyingMaterial", [["label", /* @__PURE__ */ $.basicType("string")], ["context", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["length", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true)],
		ConnectionState,
		() => [/* @__PURE__ */ $.structField("Version", /* @__PURE__ */ $.basicType("uint16"), [0], 0, true), /* @__PURE__ */ $.structField("HandshakeComplete", /* @__PURE__ */ $.basicType("bool"), [1], 2, true), /* @__PURE__ */ $.structField("DidResume", /* @__PURE__ */ $.basicType("bool"), [2], 3, true), /* @__PURE__ */ $.structField("CipherSuite", /* @__PURE__ */ $.basicType("uint16"), [3], 4, true), /* @__PURE__ */ $.structField("CurveID", /* @__PURE__ */ $.basicType("uint16", "tls.CurveID"), [4], 6, true), /* @__PURE__ */ $.structField("NegotiatedProtocol", /* @__PURE__ */ $.basicType("string"), [5], 8, true), /* @__PURE__ */ $.structField("NegotiatedProtocolIsMutual", /* @__PURE__ */ $.basicType("bool"), [6], 24, true), /* @__PURE__ */ $.structField("ServerName", /* @__PURE__ */ $.basicType("string"), [7], 32, true), /* @__PURE__ */ $.structField("PeerCertificates", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate")), [8], 48, true), /* @__PURE__ */ $.structField("VerifiedChains", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate"))), [9], 72, true), /* @__PURE__ */ $.structField("SignedCertificateTimestamps", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [10], 96, true), /* @__PURE__ */ $.structField("OCSPResponse", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [11], 120, true), /* @__PURE__ */ $.structField("TLSUnique", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [12], 144, true), /* @__PURE__ */ $.structField("ECHAccepted", /* @__PURE__ */ $.basicType("bool"), [13], 168, true), /* @__PURE__ */ $.structField("HelloRetryRequest", /* @__PURE__ */ $.basicType("bool"), [14], 169, true), /* @__PURE__ */ $.structField("LocalCertificate", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [15], 176, true), /* @__PURE__ */ $.structField("ekm", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo), [16], 200, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("testingOnlyPeerSignatureAlgorithm", /* @__PURE__ */ $.basicType("uint16", "tls.SignatureScheme"), [17], 208, false, { pkgPath: "crypto/tls" })]
	)
}

export class ClientHelloInfo {
	// CipherSuites lists the CipherSuites supported by the client (e.g.
	// TLS_AES_128_GCM_SHA256, TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256).
	public get CipherSuites(): $.Slice<number> {
		return this._fields.CipherSuites
	}

	public set CipherSuites(value: $.Slice<number>) {
		this._fields.CipherSuites = value
	}

	// ServerName indicates the name of the server requested by the client
	// in order to support virtual hosting. ServerName is only set if the
	// client is using SNI (see RFC 4366, Section 3.1).
	public get ServerName(): string {
		return this._fields.ServerName
	}

	public set ServerName(value: string) {
		this._fields.ServerName = value
	}

	// SupportedCurves lists the key exchange mechanisms supported by the
	// client. It was renamed to "supported groups" in TLS 1.3, see RFC 8446,
	// Section 4.2.7 and [CurveID].
	//
	// SupportedCurves may be nil in TLS 1.2 and lower if the Supported Elliptic
	// Curves Extension is not being used (see RFC 4492, Section 5.1.1).
	public get SupportedCurves(): $.Slice<CurveID> {
		return this._fields.SupportedCurves
	}

	public set SupportedCurves(value: $.Slice<CurveID>) {
		this._fields.SupportedCurves = value
	}

	// SupportedPoints lists the point formats supported by the client.
	// SupportedPoints is set only if the Supported Point Formats Extension
	// is being used (see RFC 4492, Section 5.1.2).
	public get SupportedPoints(): $.Slice<number> {
		return this._fields.SupportedPoints
	}

	public set SupportedPoints(value: $.Slice<number>) {
		this._fields.SupportedPoints = value
	}

	// SignatureSchemes lists the signature and hash schemes that the client
	// is willing to verify. SignatureSchemes is set only if the Signature
	// Algorithms Extension is being used (see RFC 5246, Section 7.4.1.4.1).
	public get SignatureSchemes(): $.Slice<SignatureScheme> {
		return this._fields.SignatureSchemes
	}

	public set SignatureSchemes(value: $.Slice<SignatureScheme>) {
		this._fields.SignatureSchemes = value
	}

	// SupportedProtos lists the application protocols supported by the client.
	// SupportedProtos is set only if the Application-Layer Protocol
	// Negotiation Extension is being used (see RFC 7301, Section 3.1).
	//
	// Servers can select a protocol by setting Config.NextProtos in a
	// GetConfigForClient return value.
	public get SupportedProtos(): $.Slice<string> {
		return this._fields.SupportedProtos
	}

	public set SupportedProtos(value: $.Slice<string>) {
		this._fields.SupportedProtos = value
	}

	// SupportedVersions lists the TLS versions supported by the client.
	// For TLS versions less than 1.3, this is extrapolated from the max
	// version advertised by the client, so values other than the greatest
	// might be rejected if used.
	public get SupportedVersions(): $.Slice<number> {
		return this._fields.SupportedVersions
	}

	public set SupportedVersions(value: $.Slice<number>) {
		this._fields.SupportedVersions = value
	}

	// Extensions lists the IDs of the extensions presented by the client
	// in the ClientHello.
	public get Extensions(): $.Slice<number> {
		return this._fields.Extensions
	}

	public set Extensions(value: $.Slice<number>) {
		this._fields.Extensions = value
	}

	// Conn is the underlying net.Conn for the connection. Do not read
	// from, or write to, this connection; that will cause the TLS
	// connection to fail.
	public get Conn(): net.Conn | null {
		return this._fields.Conn
	}

	public set Conn(value: net.Conn | null) {
		this._fields.Conn = value
	}

	// HelloRetryRequest indicates whether the ClientHello was sent in response
	// to a HelloRetryRequest message.
	public get HelloRetryRequest(): boolean {
		return this._fields.HelloRetryRequest
	}

	public set HelloRetryRequest(value: boolean) {
		this._fields.HelloRetryRequest = value
	}

	// config is embedded by the GetCertificate or GetConfigForClient caller,
	// for use with SupportsCertificate.
	public get config(): Config | $.VarRef<Config> | null {
		return this._fields.config
	}

	public set config(value: Config | $.VarRef<Config> | null) {
		this._fields.config = value
	}

	// isQUIC indicates whether the connection is a QUIC connection.
	public get isQUIC(): boolean {
		return this._fields.isQUIC
	}

	public set isQUIC(value: boolean) {
		this._fields.isQUIC = value
	}

	// ctx is the context of the handshake that is in progress.
	public get ctx(): context2.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context2.Context | null) {
		this._fields.ctx = value
	}

	public _fields: {
		CipherSuites: $.Slice<number>
		ServerName: string
		SupportedCurves: $.Slice<CurveID>
		SupportedPoints: $.Slice<number>
		SignatureSchemes: $.Slice<SignatureScheme>
		SupportedProtos: $.Slice<string>
		SupportedVersions: $.Slice<number>
		Extensions: $.Slice<number>
		Conn: net.Conn | null
		HelloRetryRequest: boolean
		config: Config | $.VarRef<Config> | null
		isQUIC: boolean
		ctx: context2.Context | null
	}

	constructor(init?: Partial<{CipherSuites?: $.Slice<number>, ServerName?: string, SupportedCurves?: $.Slice<CurveID>, SupportedPoints?: $.Slice<number>, SignatureSchemes?: $.Slice<SignatureScheme>, SupportedProtos?: $.Slice<string>, SupportedVersions?: $.Slice<number>, Extensions?: $.Slice<number>, Conn?: net.Conn | null, HelloRetryRequest?: boolean, config?: Config | $.VarRef<Config> | null, isQUIC?: boolean, ctx?: context2.Context | null}>, __goscriptValue?: boolean) {
		this._fields = {
			CipherSuites: init?.CipherSuites ?? (null! as $.Slice<number>),
			ServerName: init?.ServerName ?? ("" as string),
			SupportedCurves: init?.SupportedCurves ?? (null! as $.Slice<CurveID>),
			SupportedPoints: init?.SupportedPoints ?? (null! as $.Slice<number>),
			SignatureSchemes: init?.SignatureSchemes ?? (null! as $.Slice<SignatureScheme>),
			SupportedProtos: init?.SupportedProtos ?? (null! as $.Slice<string>),
			SupportedVersions: init?.SupportedVersions ?? (null! as $.Slice<number>),
			Extensions: init?.Extensions ?? (null! as $.Slice<number>),
			Conn: init?.Conn ?? (null! as net.Conn | null),
			HelloRetryRequest: init?.HelloRetryRequest ?? (false as boolean),
			config: init?.config ?? (null! as Config | $.VarRef<Config> | null),
			isQUIC: init?.isQUIC ?? (false as boolean),
			ctx: init?.ctx ?? (null! as context2.Context | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientHelloInfo {
		return new ClientHelloInfo(this, true)
	}

	public __goscriptAssign(source: ClientHelloInfo): void {
		const target = this._fields
		const values = source._fields
		target.CipherSuites = values.CipherSuites
		target.ServerName = values.ServerName
		target.SupportedCurves = values.SupportedCurves
		target.SupportedPoints = values.SupportedPoints
		target.SignatureSchemes = values.SignatureSchemes
		target.SupportedProtos = values.SupportedProtos
		target.SupportedVersions = values.SupportedVersions
		target.Extensions = values.Extensions
		target.Conn = $.assignFieldValue(target.Conn, values.Conn, "net.Conn")
		target.HelloRetryRequest = values.HelloRetryRequest
		target.config = values.config
		target.isQUIC = values.isQUIC
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
	}

	public Context(): context2.Context | null {
		const c: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null = this;
		return $.pointerValue<ClientHelloInfo>(c).ctx
	}

	public async SupportsCertificate(c: Certificate | $.VarRef<Certificate> | null): globalThis.Promise<$.GoError> {
		const chi: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null = this;
		const chi$: ClientHelloInfo = chi == null ? $.pointerTarget<ClientHelloInfo>(chi) : (chi as any).__isVarRef === true ? (chi as any).value : (chi as any).__goValue === undefined ? (chi as any) : $.pointerTarget<ClientHelloInfo>(chi)
		const c$: Certificate = c == null ? $.pointerTarget<Certificate>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Certificate>(c)
		// Note we don't currently support certificate_authorities nor
		// signature_algorithms_cert, and don't check the algorithms of the
		// signatures on the chain (which anyway are a SHOULD, see RFC 8446,
		// Section 4.4.2.2).

		let config: Config | $.VarRef<Config> | null = (chi$ as ClientHelloInfo).config
		if (config == null) {
			config = new Config()
		}
		let [vers, ok] = (config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as Config).mutualVersion(false, (chi$ as ClientHelloInfo).isQUIC, (chi$ as ClientHelloInfo).SupportedVersions) : Config.prototype.mutualVersion.call(config, false, (chi$ as ClientHelloInfo).isQUIC, (chi$ as ClientHelloInfo).SupportedVersions))
		if (!ok) {
			return errors.New("no mutually supported protocol versions")
		}

		// If the client specified the name they are trying to connect to, the
		// certificate needs to be valid for it.
		if (!$.stringEqual((chi$ as ClientHelloInfo).ServerName, "")) {
			let __goscriptTuple0: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Certificate).leaf() : Certificate.prototype.leaf.call(c))
			let x509Cert: x509.Certificate | $.VarRef<x509.Certificate> | null = __goscriptTuple0[0]
			let err = __goscriptTuple0[1]
			if (err != null) {
				return fmt.Errorf("failed to parse certificate: %w", (err as any))
			}
			{
				let __goscriptShadow0 = (x509Cert !== null && (x509Cert as any).__isVarRef !== true && (x509Cert as any).__goValue === undefined ? ((x509Cert as any) as x509.Certificate).VerifyHostname((chi$ as ClientHelloInfo).ServerName) : x509.Certificate.prototype.VerifyHostname.call(x509Cert, (chi$ as ClientHelloInfo).ServerName))
				if (__goscriptShadow0 != null) {
					return fmt.Errorf("certificate is not valid for requested server name: %w", (__goscriptShadow0 as any))
				}
			}
		}

		// supportsRSAFallback returns nil if the certificate and connection support
		// the static RSA key exchange, and unsupported otherwise. The logic for
		// supporting static RSA is completely disjoint from the logic for
		// supporting signed key exchanges, so we just check it as a fallback.
		let supportsRSAFallback: ((unsupported: $.GoError) => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (unsupported: $.GoError): globalThis.Promise<$.GoError> => {
			// TLS 1.3 dropped support for the static RSA key exchange.
			if (vers == 772) {
				return unsupported
			}
			// The static RSA key exchange works by decrypting a challenge with the
			// RSA private key, not by signing, so check the PrivateKey implements
			// crypto.Decrypter, like *rsa.PrivateKey does.
			{
				let [priv, __goscriptShadow1] = $.typeAssertTuple<crypto.Decrypter | null>((c$ as Certificate).PrivateKey, "crypto.Decrypter")
				if (__goscriptShadow1) {
					{
						let [, __goscriptShadow2] = $.typeAssertTuple<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>((__goscriptAwait = (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? (priv as Exclude<crypto.Decrypter, null>) : $.pointerValue<Exclude<crypto.Decrypter, null>>(priv)).Public(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("rsa.PublicKey"))
						if (!__goscriptShadow2) {
							return unsupported
						}
					}
				} else {
					return unsupported
				}
			}
			// Finally, there needs to be a mutual cipher suite that uses the static
			// RSA key exchange instead of ECDHE.
			let rsaCipherSuite: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null = await __goscript_cipher_suites.selectCipherSuite((chi$ as ClientHelloInfo).CipherSuites, (config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as Config).supportedCipherSuites() : Config.prototype.supportedCipherSuites.call(config)), $.functionValue((c: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null): boolean => {
				if (($.pointerValue<__goscript_cipher_suites.cipherSuite>(c).flags & 1) != 0) {
					return false
				}
				if ((vers < 771) && (($.pointerValue<__goscript_cipher_suites.cipherSuite>(c).flags & 4) != 0)) {
					return false
				}
				return true
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tls.cipherSuite")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
			if (rsaCipherSuite == null) {
				return unsupported
			}
			return null
		}, ({ kind: $.TypeKind.Function, params: ["error"], results: ["error"] } as $.FunctionTypeInfo))

		// If the client sent the signature_algorithms extension, ensure it supports
		// schemes we can use with this certificate and TLS version.
		if ($.sliceLen((chi$ as ClientHelloInfo).SignatureSchemes) > 0) {
			{
				let [, err] = await __goscript_auth.selectSignatureScheme(vers, c, (chi$ as ClientHelloInfo).SignatureSchemes)
				if (err != null) {
					return supportsRSAFallback!(err)
				}
			}
		}

		// In TLS 1.3 we are done because supported_groups is only relevant to the
		// ECDHE computation, point format negotiation is removed, cipher suites are
		// only relevant to the AEAD choice, and static RSA does not exist.
		if (vers == 772) {
			return null
		}

		// The only signed key exchange we support is ECDHE.
		let [ecdheSupported, err] = __goscript_handshake_server.supportsECDHE(config, vers, (chi$ as ClientHelloInfo).SupportedCurves, (chi$ as ClientHelloInfo).SupportedPoints)
		if (err != null) {
			return err
		}
		if (!ecdheSupported) {
			return supportsRSAFallback!(errors.New("client doesn't support ECDHE, can only use legacy RSA key exchange"))
		}

		let ecdsaCipherSuite: boolean = false
		{
			let [priv, __goscriptShadow3] = $.typeAssertTuple<crypto.Signer | null>((c$ as Certificate).PrivateKey, "crypto.Signer")
			if (__goscriptShadow3) {
				{
					const __goscriptTypeSwitchValue = (__goscriptAwait = (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? (priv as Exclude<crypto.Signer, null>) : $.pointerValue<Exclude<crypto.Signer, null>>(priv)).Public(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					switch (true) {
						case $.typeAssert<ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")).ok:
							{
								let pub: ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null = $.typeAssert<ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")).value
								let curve: CurveID = 0
								{
									let __goscriptSwitch0 = $.pointerValue<ecdsa.PublicKey>(pub).Curve
									switch ((true as boolean)) {
										case $.comparableEqual(__goscriptSwitch0, await elliptic.P256()):
										{
											curve = 23
											break
										}
										case $.comparableEqual(__goscriptSwitch0, await elliptic.P384()):
										{
											curve = 24
											break
										}
										case $.comparableEqual(__goscriptSwitch0, await elliptic.P521()):
										{
											curve = 25
											break
										}
										default:
										{
											return supportsRSAFallback!(await __goscript_auth.unsupportedCertificateError(c))
											break
										}
									}
								}
								let curveOk: boolean = false
								for (let __goscriptRangeTarget0 = (chi$ as ClientHelloInfo).SupportedCurves, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
									let c = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as CurveID), 16)
									if ((c == curve) && (config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as Config).supportsCurve(vers, c) : Config.prototype.supportsCurve.call(config, vers, c))) {
										curveOk = true
										break
									}
								}
								if (!curveOk) {
									return errors.New("client doesn't support certificate curve")
								}
								ecdsaCipherSuite = true
							}
							break
						case $.typeAssert<ed25519.PublicKey>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey")).ok:
							{
								let pub: ed25519.PublicKey = $.typeAssert<ed25519.PublicKey>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey")).value
								if ((vers < 771) || ($.sliceLen((chi$ as ClientHelloInfo).SignatureSchemes) == 0)) {
									return errors.New("connection doesn't support Ed25519")
								}
								ecdsaCipherSuite = true
							}
							break
						case $.typeAssert<mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mldsa.PublicKey")).ok:
							{
								let pub: mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null = $.typeAssert<mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mldsa.PublicKey")).value
								return errors.New("connection doesn't support ML-DSA")
							}
							break
						case $.typeAssert<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PublicKey")).ok:
							{
								let pub: rsa.PublicKey | $.VarRef<rsa.PublicKey> | null = $.typeAssert<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PublicKey")).value
							}
							break
						default:
							{
								let pub: any = __goscriptTypeSwitchValue
								return supportsRSAFallback!(await __goscript_auth.unsupportedCertificateError(c))
							}
							break
					}
				}
			} else {
				return supportsRSAFallback!(await __goscript_auth.unsupportedCertificateError(c))
			}
		}

		// Make sure that there is a mutually supported cipher suite that works with
		// this certificate. Cipher suite selection will then apply the logic in
		// reverse to pick it. See also serverHandshakeState.cipherSuiteOk.
		let __goscriptShadow4: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null = await __goscript_cipher_suites.selectCipherSuite((chi$ as ClientHelloInfo).CipherSuites, (config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as Config).supportedCipherSuites() : Config.prototype.supportedCipherSuites.call(config)), $.functionValue((c: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null): boolean => {
			if (($.pointerValue<__goscript_cipher_suites.cipherSuite>(c).flags & 1) == 0) {
				return false
			}
			if (($.pointerValue<__goscript_cipher_suites.cipherSuite>(c).flags & 2) != 0) {
				if (!ecdsaCipherSuite) {
					return false
				}
			} else {
				if (ecdsaCipherSuite) {
					return false
				}
			}
			if ((vers < 771) && (($.pointerValue<__goscript_cipher_suites.cipherSuite>(c).flags & 4) != 0)) {
				return false
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tls.cipherSuite")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		if (__goscriptShadow4 == null) {
			return supportsRSAFallback!(errors.New("client doesn't support any cipher suites compatible with the certificate"))
		}

		return null
	}

	static __typeInfo = $.registerStructType(
		"tls.ClientHelloInfo",
		() => new ClientHelloInfo(),
		() => [$.methodSignature("Context", [], ["context.Context"], true), $.methodSignature("SupportsCertificate", [["c", /* @__PURE__ */ $.pointerType("tls.Certificate")]], ["error"], true)],
		ClientHelloInfo,
		() => [/* @__PURE__ */ $.structField("CipherSuites", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")), [0], 0, true), /* @__PURE__ */ $.structField("ServerName", /* @__PURE__ */ $.basicType("string"), [1], 24, true), /* @__PURE__ */ $.structField("SupportedCurves", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16", "tls.CurveID")), [2], 40, true), /* @__PURE__ */ $.structField("SupportedPoints", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 64, true), /* @__PURE__ */ $.structField("SignatureSchemes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16", "tls.SignatureScheme")), [4], 88, true), /* @__PURE__ */ $.structField("SupportedProtos", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [5], 112, true), /* @__PURE__ */ $.structField("SupportedVersions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")), [6], 136, true), /* @__PURE__ */ $.structField("Extensions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")), [7], 160, true), /* @__PURE__ */ $.structField("Conn", "net.Conn", [8], 184, true), /* @__PURE__ */ $.structField("HelloRetryRequest", /* @__PURE__ */ $.basicType("bool"), [9], 200, true), /* @__PURE__ */ $.structField("config", /* @__PURE__ */ $.pointerType("tls.Config"), [10], 208, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("isQUIC", /* @__PURE__ */ $.basicType("bool"), [11], 216, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [12], 224, false, { pkgPath: "crypto/tls" })]
	)
}

export class CertificateRequestInfo {
	// AcceptableCAs contains zero or more, DER-encoded, X.501
	// Distinguished Names. These are the names of root or intermediate CAs
	// that the server wishes the returned certificate to be signed by. An
	// empty slice indicates that the server has no preference.
	public get AcceptableCAs(): $.Slice<$.Slice<number>> {
		return this._fields.AcceptableCAs
	}

	public set AcceptableCAs(value: $.Slice<$.Slice<number>>) {
		this._fields.AcceptableCAs = value
	}

	// SignatureSchemes lists the signature schemes that the server is
	// willing to verify.
	public get SignatureSchemes(): $.Slice<SignatureScheme> {
		return this._fields.SignatureSchemes
	}

	public set SignatureSchemes(value: $.Slice<SignatureScheme>) {
		this._fields.SignatureSchemes = value
	}

	// Version is the TLS version that was negotiated for this connection.
	public get Version(): number {
		return this._fields.Version
	}

	public set Version(value: number) {
		this._fields.Version = value
	}

	// ctx is the context of the handshake that is in progress.
	public get ctx(): context2.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context2.Context | null) {
		this._fields.ctx = value
	}

	public _fields: {
		AcceptableCAs: $.Slice<$.Slice<number>>
		SignatureSchemes: $.Slice<SignatureScheme>
		Version: number
		ctx: context2.Context | null
	}

	constructor(init?: Partial<{AcceptableCAs?: $.Slice<$.Slice<number>>, SignatureSchemes?: $.Slice<SignatureScheme>, Version?: number, ctx?: context2.Context | null}>, __goscriptValue?: boolean) {
		this._fields = {
			AcceptableCAs: init?.AcceptableCAs ?? (null! as $.Slice<$.Slice<number>>),
			SignatureSchemes: init?.SignatureSchemes ?? (null! as $.Slice<SignatureScheme>),
			Version: init?.Version ?? (0 as number),
			ctx: init?.ctx ?? (null! as context2.Context | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CertificateRequestInfo {
		return new CertificateRequestInfo(this, true)
	}

	public __goscriptAssign(source: CertificateRequestInfo): void {
		const target = this._fields
		const values = source._fields
		target.AcceptableCAs = values.AcceptableCAs
		target.SignatureSchemes = values.SignatureSchemes
		target.Version = values.Version
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
	}

	public Context(): context2.Context | null {
		const c: CertificateRequestInfo | $.VarRef<CertificateRequestInfo> | null = this;
		return $.pointerValue<CertificateRequestInfo>(c).ctx
	}

	public async SupportsCertificate(c: Certificate | $.VarRef<Certificate> | null): globalThis.Promise<$.GoError> {
		const cri: CertificateRequestInfo | $.VarRef<CertificateRequestInfo> | null = this;
		const cri$: CertificateRequestInfo = cri == null ? $.pointerTarget<CertificateRequestInfo>(cri) : (cri as any).__isVarRef === true ? (cri as any).value : (cri as any).__goValue === undefined ? (cri as any) : $.pointerTarget<CertificateRequestInfo>(cri)
		const c$: Certificate = c == null ? $.pointerTarget<Certificate>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Certificate>(c)
		{
			let [, err] = await __goscript_auth.selectSignatureScheme((cri$ as CertificateRequestInfo).Version, c, (cri$ as CertificateRequestInfo).SignatureSchemes)
			if (err != null) {
				return err
			}
		}

		if ($.sliceLen((cri$ as CertificateRequestInfo).AcceptableCAs) == 0) {
			return null
		}

		for (let __goscriptRangeTarget2 = (c$ as Certificate).Certificate, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget2), j = 0; j < __goscriptRangeWindow1.length; j++) {
			let cert = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + j] as $.Slice<number>)
			let x509Cert: x509.Certificate | $.VarRef<x509.Certificate> | null = (c$ as Certificate).Leaf
			// Parse the certificate if this isn't the leaf node, or if
			// chain.Leaf was nil.
			if ((j != 0) || (x509Cert == null)) {
				let err: $.GoError = null! as $.GoError
				{
					let __goscriptTuple1: any = await x509.ParseCertificate(cert)
					x509Cert = __goscriptTuple1[0]
					err = __goscriptTuple1[1]
					if (err != null) {
						return fmt.Errorf("failed to parse certificate #%d in the chain: %w", $.basicInterfaceValue(j, "int"), (err as any))
					}
				}
			}

			for (let __goscriptRangeTarget1 = (cri$ as CertificateRequestInfo).AcceptableCAs, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let ca = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as $.Slice<number>)
				if (bytes2.Equal($.pointerValue<x509.Certificate>(x509Cert).RawIssuer, ca)) {
					return null
				}
			}
		}
		return errors.New("chain is not signed by an acceptable CA")
	}

	static __typeInfo = $.registerStructType(
		"tls.CertificateRequestInfo",
		() => new CertificateRequestInfo(),
		() => [$.methodSignature("Context", [], ["context.Context"], true), $.methodSignature("SupportsCertificate", [["c", /* @__PURE__ */ $.pointerType("tls.Certificate")]], ["error"], true)],
		CertificateRequestInfo,
		() => [/* @__PURE__ */ $.structField("AcceptableCAs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [0], 0, true), /* @__PURE__ */ $.structField("SignatureSchemes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16", "tls.SignatureScheme")), [1], 24, true), /* @__PURE__ */ $.structField("Version", /* @__PURE__ */ $.basicType("uint16"), [2], 48, true), /* @__PURE__ */ $.structField("ctx", "context.Context", [3], 56, false, { pkgPath: "crypto/tls" })]
	)
}

export class Config {
	// Rand provides the source of entropy for the connection.
	// If Rand is nil, TLS uses the cryptographic random reader in package
	// crypto/rand. The Reader must be safe for use by multiple goroutines.
	//
	// Deprecated: this should be left nil in production. Not all TLS
	// configurations are guaranteed to use Rand. Test code can use
	// [testing/cryptotest.SetGlobalRandom] instead.
	public get Rand(): io.Reader | null {
		return this._fields.Rand
	}

	public set Rand(value: io.Reader | null) {
		this._fields.Rand = value
	}

	// Time returns the current time as the number of seconds since the epoch.
	// If Time is nil, TLS uses time.Now.
	public get Time(): (() => time2.Time | globalThis.Promise<time2.Time>) | null {
		return this._fields.Time
	}

	public set Time(value: (() => time2.Time | globalThis.Promise<time2.Time>) | null) {
		this._fields.Time = value
	}

	// Certificates contains one or more certificate chains to present to the
	// other side of the connection. The first certificate compatible with the
	// peer's requirements is selected automatically.
	//
	// Server configurations must set one of Certificates, GetCertificate or
	// GetConfigForClient. Clients doing client-authentication may set either
	// Certificates or GetClientCertificate.
	//
	// Note: if there are multiple Certificates, and they don't have the
	// optional field Leaf set, certificate selection will incur a significant
	// per-handshake performance cost.
	public get Certificates(): $.Slice<Certificate> {
		return this._fields.Certificates
	}

	public set Certificates(value: $.Slice<Certificate>) {
		this._fields.Certificates = value
	}

	// NameToCertificate maps from a certificate name to an element of
	// Certificates. Note that a certificate name can be of the form
	// '*.example.com' and so doesn't have to be a domain name as such.
	//
	// Deprecated: NameToCertificate only allows associating a single
	// certificate with a given name. Leave this field nil to let the library
	// select the first compatible chain from Certificates.
	public get NameToCertificate(): globalThis.Map<string, Certificate | $.VarRef<Certificate> | null> | null {
		return this._fields.NameToCertificate
	}

	public set NameToCertificate(value: globalThis.Map<string, Certificate | $.VarRef<Certificate> | null> | null) {
		this._fields.NameToCertificate = value
	}

	// GetCertificate returns a Certificate based on the given
	// ClientHelloInfo. It will only be called if the client supplies SNI
	// information or if Certificates is empty.
	//
	// If GetCertificate is nil or returns nil, then the certificate is
	// retrieved from NameToCertificate. If NameToCertificate is nil, the
	// best element of Certificates will be used.
	//
	// Once a Certificate is returned it should not be modified.
	public get GetCertificate(): ((_p0: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null) => [Certificate | $.VarRef<Certificate> | null, $.GoError] | globalThis.Promise<[Certificate | $.VarRef<Certificate> | null, $.GoError]>) | null {
		return this._fields.GetCertificate
	}

	public set GetCertificate(value: ((_p0: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null) => [Certificate | $.VarRef<Certificate> | null, $.GoError] | globalThis.Promise<[Certificate | $.VarRef<Certificate> | null, $.GoError]>) | null) {
		this._fields.GetCertificate = value
	}

	// GetClientCertificate, if not nil, is called when a server requests a
	// certificate from a client. If set, the contents of Certificates will
	// be ignored.
	//
	// If GetClientCertificate returns an error, the handshake will be
	// aborted and that error will be returned. Otherwise
	// GetClientCertificate must return a non-nil Certificate. If
	// Certificate.Certificate is empty then no certificate will be sent to
	// the server. If this is unacceptable to the server then it may abort
	// the handshake.
	//
	// GetClientCertificate may be called multiple times for the same
	// connection if renegotiation occurs or if TLS 1.3 is in use.
	//
	// Once a Certificate is returned it should not be modified.
	public get GetClientCertificate(): ((_p0: CertificateRequestInfo | $.VarRef<CertificateRequestInfo> | null) => [Certificate | $.VarRef<Certificate> | null, $.GoError] | globalThis.Promise<[Certificate | $.VarRef<Certificate> | null, $.GoError]>) | null {
		return this._fields.GetClientCertificate
	}

	public set GetClientCertificate(value: ((_p0: CertificateRequestInfo | $.VarRef<CertificateRequestInfo> | null) => [Certificate | $.VarRef<Certificate> | null, $.GoError] | globalThis.Promise<[Certificate | $.VarRef<Certificate> | null, $.GoError]>) | null) {
		this._fields.GetClientCertificate = value
	}

	// GetConfigForClient, if not nil, is called after a ClientHello is
	// received from a client. It may return a non-nil Config in order to
	// change the Config that will be used to handle this connection. If
	// the returned Config is nil, the original Config will be used. The
	// Config returned by this callback may not be subsequently modified.
	//
	// If GetConfigForClient is nil, the Config passed to Server() will be
	// used for all connections.
	//
	// If SessionTicketKey is explicitly set on the returned Config, or if
	// SetSessionTicketKeys is called on the returned Config, those keys will
	// be used. Otherwise, the original Config keys will be used (and possibly
	// rotated if they are automatically managed). WARNING: this allows session
	// resumption of connections originally established with the parent (or a
	// sibling) Config, which may bypass the [Config.VerifyPeerCertificate]
	// value of the returned Config.
	public get GetConfigForClient(): ((_p0: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null) => [Config | $.VarRef<Config> | null, $.GoError] | globalThis.Promise<[Config | $.VarRef<Config> | null, $.GoError]>) | null {
		return this._fields.GetConfigForClient
	}

	public set GetConfigForClient(value: ((_p0: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null) => [Config | $.VarRef<Config> | null, $.GoError] | globalThis.Promise<[Config | $.VarRef<Config> | null, $.GoError]>) | null) {
		this._fields.GetConfigForClient = value
	}

	// VerifyPeerCertificate, if not nil, is called after normal
	// certificate verification by either a TLS client or server. It
	// receives the raw ASN.1 certificates provided by the peer and also
	// any verified chains that normal processing found. If it returns a
	// non-nil error, the handshake is aborted and that error results.
	//
	// If normal verification fails then the handshake will abort before
	// considering this callback. If normal verification is disabled (on the
	// client when InsecureSkipVerify is set, or on a server when ClientAuth is
	// RequestClientCert or RequireAnyClientCert), then this callback will be
	// considered but the verifiedChains argument will always be nil. When
	// ClientAuth is NoClientCert, this callback is not called on the server.
	// rawCerts may be empty on the server if ClientAuth is RequestClientCert or
	// VerifyClientCertIfGiven.
	//
	// This callback is not invoked on resumed connections. WARNING: this
	// includes connections resumed across Configs returned by [Config.Clone] or
	// [Config.GetConfigForClient] and their parents. If that is not intended,
	// use [Config.VerifyConnection] instead, or set [Config.SessionTicketsDisabled].
	//
	// verifiedChains and its contents should not be modified.
	public get VerifyPeerCertificate(): ((rawCerts: $.Slice<$.Slice<number>>, verifiedChains: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.VerifyPeerCertificate
	}

	public set VerifyPeerCertificate(value: ((rawCerts: $.Slice<$.Slice<number>>, verifiedChains: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.VerifyPeerCertificate = value
	}

	// VerifyConnection, if not nil, is called after normal certificate
	// verification and after VerifyPeerCertificate by either a TLS client
	// or server. If it returns a non-nil error, the handshake is aborted
	// and that error results.
	//
	// If normal verification fails then the handshake will abort before
	// considering this callback. This callback will run for all connections,
	// including resumptions, regardless of InsecureSkipVerify or ClientAuth
	// settings.
	public get VerifyConnection(): ((_p0: ConnectionState) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.VerifyConnection
	}

	public set VerifyConnection(value: ((_p0: ConnectionState) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.VerifyConnection = value
	}

	// RootCAs defines the set of root certificate authorities
	// that clients use when verifying server certificates.
	// If RootCAs is nil, TLS uses the host's root CA set.
	public get RootCAs(): x509.CertPool | $.VarRef<x509.CertPool> | null {
		return this._fields.RootCAs
	}

	public set RootCAs(value: x509.CertPool | $.VarRef<x509.CertPool> | null) {
		this._fields.RootCAs = value
	}

	// NextProtos is a list of supported application level protocols, in
	// order of preference. If both peers support ALPN, the selected
	// protocol will be one from this list, and the connection will fail
	// if there is no mutually supported protocol. If NextProtos is empty
	// or the peer doesn't support ALPN, the connection will succeed and
	// ConnectionState.NegotiatedProtocol will be empty.
	public get NextProtos(): $.Slice<string> {
		return this._fields.NextProtos
	}

	public set NextProtos(value: $.Slice<string>) {
		this._fields.NextProtos = value
	}

	// ServerName is used to verify the hostname on the returned
	// certificates unless InsecureSkipVerify is given. It is also included
	// in the client's handshake to support virtual hosting unless it is
	// an IP address.
	public get ServerName(): string {
		return this._fields.ServerName
	}

	public set ServerName(value: string) {
		this._fields.ServerName = value
	}

	// ClientAuth determines the server's policy for
	// TLS Client Authentication. The default is NoClientCert.
	public get ClientAuth(): ClientAuthType {
		return this._fields.ClientAuth
	}

	public set ClientAuth(value: ClientAuthType) {
		this._fields.ClientAuth = value
	}

	// ClientCAs defines the set of root certificate authorities
	// that servers use if required to verify a client certificate
	// by the policy in ClientAuth.
	public get ClientCAs(): x509.CertPool | $.VarRef<x509.CertPool> | null {
		return this._fields.ClientCAs
	}

	public set ClientCAs(value: x509.CertPool | $.VarRef<x509.CertPool> | null) {
		this._fields.ClientCAs = value
	}

	// InsecureSkipVerify controls whether a client verifies the server's
	// certificate chain and host name. If InsecureSkipVerify is true, crypto/tls
	// accepts any certificate presented by the server and any host name in that
	// certificate. In this mode, TLS is susceptible to machine-in-the-middle
	// attacks unless custom verification is used. This should be used only for
	// testing or in combination with VerifyConnection or VerifyPeerCertificate.
	public get InsecureSkipVerify(): boolean {
		return this._fields.InsecureSkipVerify
	}

	public set InsecureSkipVerify(value: boolean) {
		this._fields.InsecureSkipVerify = value
	}

	// CipherSuites is a list of enabled TLS 1.0–1.2 cipher suites. The order of
	// the list is ignored. Note that TLS 1.3 ciphersuites are not configurable.
	//
	// If CipherSuites is nil, a safe default list is used. The default cipher
	// suites might change over time.
	public get CipherSuites(): $.Slice<number> {
		return this._fields.CipherSuites
	}

	public set CipherSuites(value: $.Slice<number>) {
		this._fields.CipherSuites = value
	}

	// PreferServerCipherSuites is a legacy field and has no effect.
	//
	// It used to control whether the server would follow the client's or the
	// server's preference. Servers now select the best mutually supported
	// cipher suite based on logic that takes into account inferred client
	// hardware, server hardware, and security.
	//
	// Deprecated: PreferServerCipherSuites is ignored.
	public get PreferServerCipherSuites(): boolean {
		return this._fields.PreferServerCipherSuites
	}

	public set PreferServerCipherSuites(value: boolean) {
		this._fields.PreferServerCipherSuites = value
	}

	// SessionTicketsDisabled may be set to true to disable session ticket and
	// PSK (resumption) support. Note that on clients, session ticket support is
	// also disabled if ClientSessionCache is nil.
	public get SessionTicketsDisabled(): boolean {
		return this._fields.SessionTicketsDisabled
	}

	public set SessionTicketsDisabled(value: boolean) {
		this._fields.SessionTicketsDisabled = value
	}

	// SessionTicketKey is used by TLS servers to provide session resumption.
	// See RFC 5077 and the PSK mode of RFC 8446. If zero, it will be filled
	// with random data before the first server handshake.
	//
	// Deprecated: if this field is left at zero, session ticket keys will be
	// automatically rotated every day and dropped after seven days. For
	// customizing the rotation schedule or synchronizing servers that are
	// terminating connections for the same host, use SetSessionTicketKeys.
	public get SessionTicketKey(): Uint8Array {
		return this._fields.SessionTicketKey
	}

	public set SessionTicketKey(value: Uint8Array) {
		this._fields.SessionTicketKey = value
	}

	// ClientSessionCache is a cache of ClientSessionState entries for TLS
	// session resumption. It is only used by clients.
	public get ClientSessionCache(): ClientSessionCache | null {
		return this._fields.ClientSessionCache
	}

	public set ClientSessionCache(value: ClientSessionCache | null) {
		this._fields.ClientSessionCache = value
	}

	// UnwrapSession is called on the server to turn a ticket/identity
	// previously produced by [WrapSession] into a usable session.
	//
	// UnwrapSession will usually either decrypt a session state in the ticket
	// (for example with [Config.EncryptTicket]), or use the ticket as a handle
	// to recover a previously stored state. It must use [ParseSessionState] to
	// deserialize the session state.
	//
	// If UnwrapSession returns an error, the connection is terminated. If it
	// returns (nil, nil), the session is ignored. crypto/tls may still choose
	// not to resume the returned session.
	public get UnwrapSession(): ((identity: $.Slice<number>, cs: ConnectionState) => [__goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null, $.GoError] | globalThis.Promise<[__goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null, $.GoError]>) | null {
		return this._fields.UnwrapSession
	}

	public set UnwrapSession(value: ((identity: $.Slice<number>, cs: ConnectionState) => [__goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null, $.GoError] | globalThis.Promise<[__goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null, $.GoError]>) | null) {
		this._fields.UnwrapSession = value
	}

	// WrapSession is called on the server to produce a session ticket/identity.
	//
	// WrapSession must serialize the session state with [SessionState.Bytes].
	// It may then encrypt the serialized state (for example with
	// [Config.DecryptTicket]) and use it as the ticket, or store the state and
	// return a handle for it.
	//
	// If WrapSession returns an error, the connection is terminated.
	//
	// Warning: the return value will be exposed on the wire and to clients in
	// plaintext. The application is in charge of encrypting and authenticating
	// it (and rotating keys) or returning high-entropy identifiers. Failing to
	// do so correctly can compromise current, previous, and future connections
	// depending on the protocol version.
	public get WrapSession(): ((_p0: ConnectionState, _p1: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null {
		return this._fields.WrapSession
	}

	public set WrapSession(value: ((_p0: ConnectionState, _p1: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null) {
		this._fields.WrapSession = value
	}

	// MinVersion contains the minimum TLS version that is acceptable.
	//
	// By default, TLS 1.2 is currently used as the minimum. TLS 1.0 is the
	// minimum supported by this package.
	public get MinVersion(): number {
		return this._fields.MinVersion
	}

	public set MinVersion(value: number) {
		this._fields.MinVersion = value
	}

	// MaxVersion contains the maximum TLS version that is acceptable.
	//
	// By default, the maximum version supported by this package is used,
	// which is currently TLS 1.3.
	public get MaxVersion(): number {
		return this._fields.MaxVersion
	}

	public set MaxVersion(value: number) {
		this._fields.MaxVersion = value
	}

	// CurvePreferences contains a set of supported key exchange mechanisms.
	// The name refers to elliptic curves for legacy reasons, see [CurveID].
	// The order of the list is ignored, and key exchange mechanisms are chosen
	// from this list using an internal preference order. If empty, the default
	// will be used.
	//
	// From Go 1.24, the default includes the [X25519MLKEM768] hybrid
	// post-quantum key exchange. To disable it, set CurvePreferences explicitly
	// or use the GODEBUG=tlsmlkem=0 environment variable.
	//
	// From Go 1.26, the default includes the [SecP256r1MLKEM768] and
	// [SecP384r1MLKEM1024] hybrid post-quantum key exchanges, too. To disable
	// them, set CurvePreferences explicitly or use either the
	// GODEBUG=tlsmlkem=0 or the GODEBUG=tlssecpmlkem=0 environment variable.
	public get CurvePreferences(): $.Slice<CurveID> {
		return this._fields.CurvePreferences
	}

	public set CurvePreferences(value: $.Slice<CurveID>) {
		this._fields.CurvePreferences = value
	}

	// DynamicRecordSizingDisabled disables adaptive sizing of TLS records.
	// When true, the largest possible TLS record size is always used. When
	// false, the size of TLS records may be adjusted in an attempt to
	// improve latency.
	public get DynamicRecordSizingDisabled(): boolean {
		return this._fields.DynamicRecordSizingDisabled
	}

	public set DynamicRecordSizingDisabled(value: boolean) {
		this._fields.DynamicRecordSizingDisabled = value
	}

	// Renegotiation controls what types of renegotiation are supported.
	// The default, none, is correct for the vast majority of applications.
	public get Renegotiation(): RenegotiationSupport {
		return this._fields.Renegotiation
	}

	public set Renegotiation(value: RenegotiationSupport) {
		this._fields.Renegotiation = value
	}

	// KeyLogWriter optionally specifies a destination for TLS master secrets
	// in NSS key log format that can be used to allow external programs
	// such as Wireshark to decrypt TLS connections.
	// See https://datatracker.ietf.org/doc/draft-ietf-tls-keylogfile/.
	// Use of KeyLogWriter compromises security and should only be
	// used for debugging.
	public get KeyLogWriter(): io.Writer | null {
		return this._fields.KeyLogWriter
	}

	public set KeyLogWriter(value: io.Writer | null) {
		this._fields.KeyLogWriter = value
	}

	// EncryptedClientHelloConfigList is a serialized ECHConfigList. If
	// provided, clients will attempt to connect to servers using Encrypted
	// Client Hello (ECH) using one of the provided ECHConfigs.
	//
	// Servers do not use this field. In order to configure ECH for servers, see
	// the EncryptedClientHelloKeys field.
	//
	// If the list contains no valid ECH configs, the handshake will fail
	// and return an error.
	//
	// If EncryptedClientHelloConfigList is set, MinVersion, if set, must
	// be VersionTLS13.
	//
	// When EncryptedClientHelloConfigList is set, the handshake will only
	// succeed if ECH is successfully negotiated. If the server rejects ECH,
	// an ECHRejectionError error will be returned, which may contain a new
	// ECHConfigList that the server suggests using.
	//
	// How this field is parsed may change in future Go versions, if the
	// encoding described in the final Encrypted Client Hello RFC changes.
	public get EncryptedClientHelloConfigList(): $.Slice<number> {
		return this._fields.EncryptedClientHelloConfigList
	}

	public set EncryptedClientHelloConfigList(value: $.Slice<number>) {
		this._fields.EncryptedClientHelloConfigList = value
	}

	// EncryptedClientHelloRejectionVerify, if not nil, is called when ECH is
	// rejected by the remote server, in order to verify the ECH provider
	// certificate in the outer ClientHello. If it returns a non-nil error, the
	// handshake is aborted and that error results.
	//
	// On the server side this field is not used.
	//
	// Unlike VerifyPeerCertificate and VerifyConnection, normal certificate
	// verification will not be performed before calling
	// EncryptedClientHelloRejectionVerify.
	//
	// If EncryptedClientHelloRejectionVerify is nil and ECH is rejected, the
	// roots in RootCAs will be used to verify the ECH providers public
	// certificate. VerifyPeerCertificate and VerifyConnection are not called
	// when ECH is rejected, even if set, and InsecureSkipVerify is ignored.
	public get EncryptedClientHelloRejectionVerify(): ((_p0: ConnectionState) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.EncryptedClientHelloRejectionVerify
	}

	public set EncryptedClientHelloRejectionVerify(value: ((_p0: ConnectionState) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.EncryptedClientHelloRejectionVerify = value
	}

	// GetEncryptedClientHelloKeys, if not nil, is called when by a server when
	// a client attempts ECH.
	//
	// If GetEncryptedClientHelloKeys is not nil, [EncryptedClientHelloKeys] is
	// ignored.
	//
	// If GetEncryptedClientHelloKeys returns an error, the handshake will be
	// aborted and the error will be returned. Otherwise,
	// GetEncryptedClientHelloKeys must return a non-nil slice of
	// [EncryptedClientHelloKey] that represents the acceptable ECH keys.
	//
	// For further details, see [EncryptedClientHelloKeys].
	public get GetEncryptedClientHelloKeys(): ((_p0: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null) => [$.Slice<EncryptedClientHelloKey>, $.GoError] | globalThis.Promise<[$.Slice<EncryptedClientHelloKey>, $.GoError]>) | null {
		return this._fields.GetEncryptedClientHelloKeys
	}

	public set GetEncryptedClientHelloKeys(value: ((_p0: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null) => [$.Slice<EncryptedClientHelloKey>, $.GoError] | globalThis.Promise<[$.Slice<EncryptedClientHelloKey>, $.GoError]>) | null) {
		this._fields.GetEncryptedClientHelloKeys = value
	}

	// EncryptedClientHelloKeys are the ECH keys to use when a client
	// attempts ECH.
	//
	// If EncryptedClientHelloKeys is set, MinVersion, if set, must be
	// VersionTLS13.
	//
	// If a client attempts ECH, but it is rejected by the server, the server
	// will send a list of configs to retry based on the set of
	// EncryptedClientHelloKeys which have the SendAsRetry field set.
	//
	// If GetEncryptedClientHelloKeys is non-nil, EncryptedClientHelloKeys is
	// ignored.
	//
	// On the client side, this field is ignored. In order to configure ECH for
	// clients, see the EncryptedClientHelloConfigList field.
	public get EncryptedClientHelloKeys(): $.Slice<EncryptedClientHelloKey> {
		return this._fields.EncryptedClientHelloKeys
	}

	public set EncryptedClientHelloKeys(value: $.Slice<EncryptedClientHelloKey>) {
		this._fields.EncryptedClientHelloKeys = value
	}

	// mutex protects sessionTicketKeys and autoSessionTicketKeys.
	public get mutex(): sync.RWMutex {
		return this._fields.mutex
	}

	public set mutex(value: sync.RWMutex) {
		this._fields.mutex = value
	}

	// sessionTicketKeys contains zero or more ticket keys. If set, it means
	// the keys were set with SessionTicketKey or SetSessionTicketKeys. The
	// first key is used for new tickets and any subsequent keys can be used to
	// decrypt old tickets. The slice contents are not protected by the mutex
	// and are immutable.
	public get sessionTicketKeys(): $.Slice<ticketKey> {
		return this._fields.sessionTicketKeys
	}

	public set sessionTicketKeys(value: $.Slice<ticketKey>) {
		this._fields.sessionTicketKeys = value
	}

	// autoSessionTicketKeys is like sessionTicketKeys but is owned by the
	// auto-rotation logic. See Config.ticketKeys.
	public get autoSessionTicketKeys(): $.Slice<ticketKey> {
		return this._fields.autoSessionTicketKeys
	}

	public set autoSessionTicketKeys(value: $.Slice<ticketKey>) {
		this._fields.autoSessionTicketKeys = value
	}

	public _fields: {
		Rand: io.Reader | null
		Time: (() => time2.Time | globalThis.Promise<time2.Time>) | null
		Certificates: $.Slice<Certificate>
		NameToCertificate: globalThis.Map<string, Certificate | $.VarRef<Certificate> | null> | null
		GetCertificate: ((_p0: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null) => [Certificate | $.VarRef<Certificate> | null, $.GoError] | globalThis.Promise<[Certificate | $.VarRef<Certificate> | null, $.GoError]>) | null
		GetClientCertificate: ((_p0: CertificateRequestInfo | $.VarRef<CertificateRequestInfo> | null) => [Certificate | $.VarRef<Certificate> | null, $.GoError] | globalThis.Promise<[Certificate | $.VarRef<Certificate> | null, $.GoError]>) | null
		GetConfigForClient: ((_p0: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null) => [Config | $.VarRef<Config> | null, $.GoError] | globalThis.Promise<[Config | $.VarRef<Config> | null, $.GoError]>) | null
		VerifyPeerCertificate: ((rawCerts: $.Slice<$.Slice<number>>, verifiedChains: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>) => $.GoError | globalThis.Promise<$.GoError>) | null
		VerifyConnection: ((_p0: ConnectionState) => $.GoError | globalThis.Promise<$.GoError>) | null
		RootCAs: x509.CertPool | $.VarRef<x509.CertPool> | null
		NextProtos: $.Slice<string>
		ServerName: string
		ClientAuth: ClientAuthType
		ClientCAs: x509.CertPool | $.VarRef<x509.CertPool> | null
		InsecureSkipVerify: boolean
		CipherSuites: $.Slice<number>
		PreferServerCipherSuites: boolean
		SessionTicketsDisabled: boolean
		SessionTicketKey: Uint8Array
		ClientSessionCache: ClientSessionCache | null
		UnwrapSession: ((identity: $.Slice<number>, cs: ConnectionState) => [__goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null, $.GoError] | globalThis.Promise<[__goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null, $.GoError]>) | null
		WrapSession: ((_p0: ConnectionState, _p1: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null
		MinVersion: number
		MaxVersion: number
		CurvePreferences: $.Slice<CurveID>
		DynamicRecordSizingDisabled: boolean
		Renegotiation: RenegotiationSupport
		KeyLogWriter: io.Writer | null
		EncryptedClientHelloConfigList: $.Slice<number>
		EncryptedClientHelloRejectionVerify: ((_p0: ConnectionState) => $.GoError | globalThis.Promise<$.GoError>) | null
		GetEncryptedClientHelloKeys: ((_p0: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null) => [$.Slice<EncryptedClientHelloKey>, $.GoError] | globalThis.Promise<[$.Slice<EncryptedClientHelloKey>, $.GoError]>) | null
		EncryptedClientHelloKeys: $.Slice<EncryptedClientHelloKey>
		mutex: sync.RWMutex
		sessionTicketKeys: $.Slice<ticketKey>
		autoSessionTicketKeys: $.Slice<ticketKey>
	}

	constructor(init?: Partial<{Rand?: io.Reader | null, Time?: (() => time2.Time | globalThis.Promise<time2.Time>) | null, Certificates?: $.Slice<Certificate>, NameToCertificate?: globalThis.Map<string, Certificate | $.VarRef<Certificate> | null> | null, GetCertificate?: ((_p0: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null) => [Certificate | $.VarRef<Certificate> | null, $.GoError] | globalThis.Promise<[Certificate | $.VarRef<Certificate> | null, $.GoError]>) | null, GetClientCertificate?: ((_p0: CertificateRequestInfo | $.VarRef<CertificateRequestInfo> | null) => [Certificate | $.VarRef<Certificate> | null, $.GoError] | globalThis.Promise<[Certificate | $.VarRef<Certificate> | null, $.GoError]>) | null, GetConfigForClient?: ((_p0: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null) => [Config | $.VarRef<Config> | null, $.GoError] | globalThis.Promise<[Config | $.VarRef<Config> | null, $.GoError]>) | null, VerifyPeerCertificate?: ((rawCerts: $.Slice<$.Slice<number>>, verifiedChains: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>) => $.GoError | globalThis.Promise<$.GoError>) | null, VerifyConnection?: ((_p0: ConnectionState) => $.GoError | globalThis.Promise<$.GoError>) | null, RootCAs?: x509.CertPool | $.VarRef<x509.CertPool> | null, NextProtos?: $.Slice<string>, ServerName?: string, ClientAuth?: ClientAuthType, ClientCAs?: x509.CertPool | $.VarRef<x509.CertPool> | null, InsecureSkipVerify?: boolean, CipherSuites?: $.Slice<number>, PreferServerCipherSuites?: boolean, SessionTicketsDisabled?: boolean, SessionTicketKey?: Uint8Array, ClientSessionCache?: ClientSessionCache | null, UnwrapSession?: ((identity: $.Slice<number>, cs: ConnectionState) => [__goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null, $.GoError] | globalThis.Promise<[__goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null, $.GoError]>) | null, WrapSession?: ((_p0: ConnectionState, _p1: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null, MinVersion?: number, MaxVersion?: number, CurvePreferences?: $.Slice<CurveID>, DynamicRecordSizingDisabled?: boolean, Renegotiation?: RenegotiationSupport, KeyLogWriter?: io.Writer | null, EncryptedClientHelloConfigList?: $.Slice<number>, EncryptedClientHelloRejectionVerify?: ((_p0: ConnectionState) => $.GoError | globalThis.Promise<$.GoError>) | null, GetEncryptedClientHelloKeys?: ((_p0: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null) => [$.Slice<EncryptedClientHelloKey>, $.GoError] | globalThis.Promise<[$.Slice<EncryptedClientHelloKey>, $.GoError]>) | null, EncryptedClientHelloKeys?: $.Slice<EncryptedClientHelloKey>, mutex?: sync.RWMutex, sessionTicketKeys?: $.Slice<ticketKey>, autoSessionTicketKeys?: $.Slice<ticketKey>}>, __goscriptValue?: boolean) {
		this._fields = {
			Rand: init?.Rand ?? (null! as io.Reader | null),
			Time: init?.Time ?? (null! as (() => time2.Time | globalThis.Promise<time2.Time>) | null),
			Certificates: init?.Certificates ?? (null! as $.Slice<Certificate>),
			NameToCertificate: init?.NameToCertificate ?? (null! as globalThis.Map<string, Certificate | $.VarRef<Certificate> | null> | null),
			GetCertificate: init?.GetCertificate ?? (null! as ((_p0: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null) => [Certificate | $.VarRef<Certificate> | null, $.GoError] | globalThis.Promise<[Certificate | $.VarRef<Certificate> | null, $.GoError]>) | null),
			GetClientCertificate: init?.GetClientCertificate ?? (null! as ((_p0: CertificateRequestInfo | $.VarRef<CertificateRequestInfo> | null) => [Certificate | $.VarRef<Certificate> | null, $.GoError] | globalThis.Promise<[Certificate | $.VarRef<Certificate> | null, $.GoError]>) | null),
			GetConfigForClient: init?.GetConfigForClient ?? (null! as ((_p0: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null) => [Config | $.VarRef<Config> | null, $.GoError] | globalThis.Promise<[Config | $.VarRef<Config> | null, $.GoError]>) | null),
			VerifyPeerCertificate: init?.VerifyPeerCertificate ?? (null! as ((rawCerts: $.Slice<$.Slice<number>>, verifiedChains: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>) => $.GoError | globalThis.Promise<$.GoError>) | null),
			VerifyConnection: init?.VerifyConnection ?? (null! as ((_p0: ConnectionState) => $.GoError | globalThis.Promise<$.GoError>) | null),
			RootCAs: init?.RootCAs ?? (null! as x509.CertPool | $.VarRef<x509.CertPool> | null),
			NextProtos: init?.NextProtos ?? (null! as $.Slice<string>),
			ServerName: init?.ServerName ?? ("" as string),
			ClientAuth: init?.ClientAuth ?? (0 as ClientAuthType),
			ClientCAs: init?.ClientCAs ?? (null! as x509.CertPool | $.VarRef<x509.CertPool> | null),
			InsecureSkipVerify: init?.InsecureSkipVerify ?? (false as boolean),
			CipherSuites: init?.CipherSuites ?? (null! as $.Slice<number>),
			PreferServerCipherSuites: init?.PreferServerCipherSuites ?? (false as boolean),
			SessionTicketsDisabled: init?.SessionTicketsDisabled ?? (false as boolean),
			SessionTicketKey: init?.SessionTicketKey !== undefined ? $.cloneArrayValue(init.SessionTicketKey, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)) : $.arrayValue(new Uint8Array(32)),
			ClientSessionCache: init?.ClientSessionCache ?? (null! as ClientSessionCache | null),
			UnwrapSession: init?.UnwrapSession ?? (null! as ((identity: $.Slice<number>, cs: ConnectionState) => [__goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null, $.GoError] | globalThis.Promise<[__goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null, $.GoError]>) | null),
			WrapSession: init?.WrapSession ?? (null! as ((_p0: ConnectionState, _p1: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null),
			MinVersion: init?.MinVersion ?? (0 as number),
			MaxVersion: init?.MaxVersion ?? (0 as number),
			CurvePreferences: init?.CurvePreferences ?? (null! as $.Slice<CurveID>),
			DynamicRecordSizingDisabled: init?.DynamicRecordSizingDisabled ?? (false as boolean),
			Renegotiation: init?.Renegotiation ?? (0 as RenegotiationSupport),
			KeyLogWriter: init?.KeyLogWriter ?? (null! as io.Writer | null),
			EncryptedClientHelloConfigList: init?.EncryptedClientHelloConfigList ?? (null! as $.Slice<number>),
			EncryptedClientHelloRejectionVerify: init?.EncryptedClientHelloRejectionVerify ?? (null! as ((_p0: ConnectionState) => $.GoError | globalThis.Promise<$.GoError>) | null),
			GetEncryptedClientHelloKeys: init?.GetEncryptedClientHelloKeys ?? (null! as ((_p0: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null) => [$.Slice<EncryptedClientHelloKey>, $.GoError] | globalThis.Promise<[$.Slice<EncryptedClientHelloKey>, $.GoError]>) | null),
			EncryptedClientHelloKeys: init?.EncryptedClientHelloKeys ?? (null! as $.Slice<EncryptedClientHelloKey>),
			mutex: init?.mutex ? $.markAsStructValue($.cloneStructValue(init.mutex)) : $.markAsStructValue(new sync.RWMutex()),
			sessionTicketKeys: init?.sessionTicketKeys ?? (null! as $.Slice<ticketKey>),
			autoSessionTicketKeys: init?.autoSessionTicketKeys ?? (null! as $.Slice<ticketKey>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Config {
		return new Config(this, true)
	}

	public __goscriptAssign(source: Config): void {
		const target = this._fields
		const values = source._fields
		target.Rand = $.assignFieldValue(target.Rand, values.Rand, "io.Reader")
		target.Time = values.Time
		target.Certificates = values.Certificates
		target.NameToCertificate = values.NameToCertificate
		target.GetCertificate = values.GetCertificate
		target.GetClientCertificate = values.GetClientCertificate
		target.GetConfigForClient = values.GetConfigForClient
		target.VerifyPeerCertificate = values.VerifyPeerCertificate
		target.VerifyConnection = values.VerifyConnection
		target.RootCAs = values.RootCAs
		target.NextProtos = values.NextProtos
		target.ServerName = values.ServerName
		target.ClientAuth = values.ClientAuth
		target.ClientCAs = values.ClientCAs
		target.InsecureSkipVerify = values.InsecureSkipVerify
		target.CipherSuites = values.CipherSuites
		target.PreferServerCipherSuites = values.PreferServerCipherSuites
		target.SessionTicketsDisabled = values.SessionTicketsDisabled
		target.SessionTicketKey = $.assignFieldValue(target.SessionTicketKey, values.SessionTicketKey, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
		target.ClientSessionCache = $.assignFieldValue(target.ClientSessionCache, values.ClientSessionCache, "tls.ClientSessionCache")
		target.UnwrapSession = values.UnwrapSession
		target.WrapSession = values.WrapSession
		target.MinVersion = values.MinVersion
		target.MaxVersion = values.MaxVersion
		target.CurvePreferences = values.CurvePreferences
		target.DynamicRecordSizingDisabled = values.DynamicRecordSizingDisabled
		target.Renegotiation = values.Renegotiation
		target.KeyLogWriter = $.assignFieldValue(target.KeyLogWriter, values.KeyLogWriter, "io.Writer")
		target.EncryptedClientHelloConfigList = values.EncryptedClientHelloConfigList
		target.EncryptedClientHelloRejectionVerify = values.EncryptedClientHelloRejectionVerify
		target.GetEncryptedClientHelloKeys = values.GetEncryptedClientHelloKeys
		target.EncryptedClientHelloKeys = values.EncryptedClientHelloKeys
		$.assignStruct(target.mutex, values.mutex)
		target.sessionTicketKeys = values.sessionTicketKeys
		target.autoSessionTicketKeys = values.autoSessionTicketKeys
	}

	public async BuildNameToCertificate(): globalThis.Promise<void> {
		let c: Config | $.VarRef<Config> | null = this;
		const c$: Config = c == null ? $.pointerTarget<Config>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Config>(c);
		;(c$ as Config).NameToCertificate = $.makeMap<string, Certificate | $.VarRef<Certificate> | null>()
		for (let __goscriptRangeTarget4 = (c$ as Config).Certificates, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow3.length; i++) {
			let cert: Certificate | $.VarRef<Certificate> | null = $.indexRef((c$ as Config).Certificates!, i)
			let __goscriptTuple2: any = await (cert !== null && (cert as any).__isVarRef !== true && (cert as any).__goValue === undefined ? ((cert as any) as Certificate).leaf() : Certificate.prototype.leaf.call(cert))
			let x509Cert: x509.Certificate | $.VarRef<x509.Certificate> | null = __goscriptTuple2[0]
			let err = __goscriptTuple2[1]
			let x509Cert$: x509.Certificate = x509Cert == null ? $.pointerTarget<x509.Certificate>(x509Cert) : (x509Cert as any).__isVarRef === true ? (x509Cert as any).value : (x509Cert as any).__goValue === undefined ? (x509Cert as any) : $.pointerTarget<x509.Certificate>(x509Cert)
			if (err != null) {
				continue
			}
			// If SANs are *not* present, some clients will consider the certificate
			// valid for the name in the Common Name.
			if ((!$.stringEqual((x509Cert$ as x509.Certificate).Subject.CommonName, "")) && ($.sliceLen((x509Cert$ as x509.Certificate).DNSNames) == 0)) {
				$.mapSet((c$ as Config).NameToCertificate, (x509Cert$ as x509.Certificate).Subject.CommonName, cert)
			}
			for (let __goscriptRangeTarget3 = (x509Cert$ as x509.Certificate).DNSNames, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
				let san = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as string)
				$.mapSet((c$ as Config).NameToCertificate, san, cert)
			}
		}
	}

	public async Clone(): globalThis.Promise<Config | $.VarRef<Config> | null> {
		const c: Config | $.VarRef<Config> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Config = c == null ? $.pointerTarget<Config>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Config>(c)
		if (c == null) {
			return null
		}
		await (c$ as Config).mutex.RLock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((c$ as Config).mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		return new Config({Rand: (c$ as Config).Rand, Time: (c$ as Config).Time, Certificates: (c$ as Config).Certificates, NameToCertificate: (c$ as Config).NameToCertificate, GetCertificate: (c$ as Config).GetCertificate, GetClientCertificate: (c$ as Config).GetClientCertificate, GetConfigForClient: (c$ as Config).GetConfigForClient, GetEncryptedClientHelloKeys: (c$ as Config).GetEncryptedClientHelloKeys, VerifyPeerCertificate: (c$ as Config).VerifyPeerCertificate, VerifyConnection: (c$ as Config).VerifyConnection, RootCAs: (c$ as Config).RootCAs, NextProtos: (c$ as Config).NextProtos, ServerName: (c$ as Config).ServerName, ClientAuth: (c$ as Config).ClientAuth, ClientCAs: (c$ as Config).ClientCAs, InsecureSkipVerify: (c$ as Config).InsecureSkipVerify, CipherSuites: (c$ as Config).CipherSuites, PreferServerCipherSuites: (c$ as Config).PreferServerCipherSuites, SessionTicketsDisabled: (c$ as Config).SessionTicketsDisabled, SessionTicketKey: $.cloneArrayValue((c$ as Config).SessionTicketKey, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)), ClientSessionCache: (c$ as Config).ClientSessionCache, UnwrapSession: (c$ as Config).UnwrapSession, WrapSession: (c$ as Config).WrapSession, MinVersion: (c$ as Config).MinVersion, MaxVersion: (c$ as Config).MaxVersion, CurvePreferences: (c$ as Config).CurvePreferences, DynamicRecordSizingDisabled: (c$ as Config).DynamicRecordSizingDisabled, Renegotiation: (c$ as Config).Renegotiation, KeyLogWriter: (c$ as Config).KeyLogWriter, EncryptedClientHelloConfigList: (c$ as Config).EncryptedClientHelloConfigList, EncryptedClientHelloRejectionVerify: (c$ as Config).EncryptedClientHelloRejectionVerify, EncryptedClientHelloKeys: (c$ as Config).EncryptedClientHelloKeys, sessionTicketKeys: (c$ as Config).sessionTicketKeys, autoSessionTicketKeys: (c$ as Config).autoSessionTicketKeys})
	}

	public async DecryptTicket(identity: $.Slice<number>, cs: ConnectionState): globalThis.Promise<[__goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null, $.GoError]> {
		const c: Config | $.VarRef<Config> | null = this;
		let ticketKeys: $.Slice<ticketKey> = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).ticketKeys(null) : Config.prototype.ticketKeys.call(c, null))
		let stateBytes: $.Slice<number> = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).decryptTicket(identity, ticketKeys) : Config.prototype.decryptTicket.call(c, identity, ticketKeys))
		if (stateBytes == null) {
			return [null, null]
		}
		let __goscriptTuple3: any = await __goscript_ticket.ParseSessionState(stateBytes)
		let s: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			return [null, null]
		}
		return [s, null]
	}

	public async EncryptTicket(cs: ConnectionState, ss: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const c: Config | $.VarRef<Config> | null = this;
		let ticketKeys: $.Slice<ticketKey> = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).ticketKeys(null) : Config.prototype.ticketKeys.call(c, null))
		let __goscriptTuple4: any = await (ss !== null && (ss as any).__isVarRef !== true && (ss as any).__goValue === undefined ? ((ss as any) as __goscript_ticket.SessionState).Bytes() : __goscript_ticket.SessionState.prototype.Bytes.call(ss))
		let stateBytes: $.Slice<number> = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).encryptTicket(stateBytes, ticketKeys) : Config.prototype.encryptTicket.call(c, stateBytes, ticketKeys))
	}

	public async SetSessionTicketKeys(keys: $.Slice<Uint8Array>): globalThis.Promise<void> {
		let c: Config | $.VarRef<Config> | null = this;
		const c$: Config = c == null ? $.pointerTarget<Config>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Config>(c)
		if ($.sliceLen(keys) == 0) {
			$.panic("tls: keys must have at least one key")
		}

		let newKeys: $.Slice<ticketKey> = $.makeSlice<ticketKey>($.sliceLen(keys), undefined, undefined, () => new ticketKey(undefined, true))
		for (let __goscriptRangeTarget5 = keys, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __goscriptSliceWindow0 = $.sliceRange(newKeys), i = 0; i < __goscriptRangeWindow5.length; i++) {
			let bytes = $.cloneArrayValue((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as Uint8Array), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
			$.assignStruct((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)], await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).ticketKeyFromBytes($.cloneArrayValue(bytes, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))) : Config.prototype.ticketKeyFromBytes.call(c, $.cloneArrayValue(bytes, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)))))
		}

		await (c$ as Config).mutex.Lock();
		;(c$ as Config).sessionTicketKeys = newKeys
		void (c$ as Config).mutex.Unlock()
	}

	public cipherSuites(aesGCMPreferred: boolean): $.Slice<number> {
		const c: Config | $.VarRef<Config> | null = this;
		const c$: Config = c == null ? $.pointerTarget<Config>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Config>(c)
		let cipherSuites: $.Slice<number> = null! as $.Slice<number>
		if ((c$ as Config).CipherSuites == null) {
			cipherSuites = __goscript_defaults.defaultCipherSuites(aesGCMPreferred)
		} else {
			cipherSuites = __goscript_defaults.supportedCipherSuites(aesGCMPreferred)
			cipherSuites = (slices.DeleteFunc(cipherSuites, $.functionValue((id: number): boolean => {
				return !slices.Contains((c$ as Config).CipherSuites, id)
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint16")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))) as $.Slice<number>)
		}
		if (fips140tls.Required()) {
			cipherSuites = (slices.DeleteFunc(cipherSuites, $.functionValue((id: number): boolean => {
				return !slices.Contains(__goscript_defaults_fips140.__goscript_get_allowedCipherSuitesFIPS(), id)
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint16")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))) as $.Slice<number>)
		}
		return cipherSuites
	}

	public curvePreferences(version: number): $.Slice<CurveID> {
		const c: Config | $.VarRef<Config> | null = this;
		return (slices.DeleteFunc(__goscript_defaults.curvePreferenceOrder(), $.functionValue((x: CurveID): boolean => {
			return !(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).supportsCurve(version, x) : Config.prototype.supportsCurve.call(c, version, x))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint16", "tls.CurveID")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))) as $.Slice<CurveID>)
	}

	public async decryptTicket(encrypted: $.Slice<number>, ticketKeys: $.Slice<ticketKey>): globalThis.Promise<$.Slice<number>> {
		const c: Config | $.VarRef<Config> | null = this;
		if ($.sliceLen(encrypted) < 48) {
			return null
		}

		let iv: $.Slice<number> = $.goSlice(encrypted, undefined, aes.BlockSize)
		let ciphertext: $.Slice<number> = $.goSlice(encrypted, aes.BlockSize, $.sliceLen(encrypted) - sha256.Size)
		let authenticated: $.Slice<number> = $.goSlice(encrypted, undefined, $.sliceLen(encrypted) - sha256.Size)
		let macBytes: $.Slice<number> = $.goSlice(encrypted, $.sliceLen(encrypted) - sha256.Size, undefined)

		for (let __goscriptRangeTarget6 = ticketKeys, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let key = ((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as ticketKey)).clone()
			let mac = await hmac.New(sha256.New, $.goSlice(key.hmacKey, undefined, undefined))
			await (mac !== null && (mac as any).__isVarRef !== true && (mac as any).__goValue === undefined ? (mac as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(mac)).Write(authenticated)
			let expected: $.Slice<number> = await (mac !== null && (mac as any).__isVarRef !== true && (mac as any).__goValue === undefined ? (mac as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(mac)).Sum(null)

			if (subtle.ConstantTimeCompare(macBytes, expected) != 1) {
				continue
			}

			let [block, err] = aes.NewCipher($.goSlice(key.aesKey, undefined, undefined))
			if (err != null) {
				return null
			}
			let plaintext: $.Slice<number> = $.makeSlice<number>($.sliceLen(ciphertext), undefined, "byte")
			void (__goscriptAwait = $.pointerValue<Exclude<cipher.Stream, null>>(cipher.NewCTR($.pointerValueOrNil(block)!, iv)).XORKeyStream(plaintext, ciphertext), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

			return plaintext
		}

		return null
	}

	public async encryptTicket(state: $.Slice<number>, ticketKeys: $.Slice<ticketKey>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const c: Config | $.VarRef<Config> | null = this;
		if ($.sliceLen(ticketKeys) == 0) {
			return [null, errors.New("tls: internal error: session ticket keys unavailable")]
		}

		let encrypted: $.Slice<number> = $.makeSlice<number>((aes.BlockSize + $.sliceLen(state)) + sha256.Size, undefined, "byte")
		let iv: $.Slice<number> = $.goSlice(encrypted, undefined, aes.BlockSize)
		let ciphertext: $.Slice<number> = $.goSlice(encrypted, aes.BlockSize, $.sliceLen(encrypted) - sha256.Size)
		let authenticated: $.Slice<number> = $.goSlice(encrypted, undefined, $.sliceLen(encrypted) - sha256.Size)
		let macBytes: $.Slice<number> = $.goSlice(encrypted, $.sliceLen(encrypted) - sha256.Size, undefined)

		{
			let [, err] = await io.ReadFull($.pointerValueOrNil((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).rand() : Config.prototype.rand.call(c)))!, iv)
			if (err != null) {
				return [null, err]
			}
		}
		let key = ($.arrayIndex(ticketKeys!, 0)).clone()
		let [block, err] = aes.NewCipher($.goSlice(key.aesKey, undefined, undefined))
		if (err != null) {
			return [null, errors.New($.concatString("tls: failed to create cipher while encrypting ticket: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
		}
		void (__goscriptAwait = $.pointerValue<Exclude<cipher.Stream, null>>(cipher.NewCTR($.pointerValueOrNil(block)!, iv)).XORKeyStream(ciphertext, state), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let mac = await hmac.New(sha256.New, $.goSlice(key.hmacKey, undefined, undefined))
		await (mac !== null && (mac as any).__isVarRef !== true && (mac as any).__goValue === undefined ? (mac as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(mac)).Write(authenticated)
		await (mac !== null && (mac as any).__isVarRef !== true && (mac as any).__goValue === undefined ? (mac as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(mac)).Sum($.goSlice(macBytes, undefined, 0))

		return [encrypted, null]
	}

	public async getCertificate(clientHello: ClientHelloInfo | $.VarRef<ClientHelloInfo> | null): globalThis.Promise<[Certificate | $.VarRef<Certificate> | null, $.GoError]> {
		const c: Config | $.VarRef<Config> | null = this;
		const c$: Config = c == null ? $.pointerTarget<Config>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Config>(c)
		const clientHello$: ClientHelloInfo = clientHello == null ? $.pointerTarget<ClientHelloInfo>(clientHello) : (clientHello as any).__isVarRef === true ? (clientHello as any).value : (clientHello as any).__goValue === undefined ? (clientHello as any) : $.pointerTarget<ClientHelloInfo>(clientHello)
		if (((c$ as Config).GetCertificate != null) && (($.sliceLen((c$ as Config).Certificates) == 0) || ($.stringLen((clientHello$ as ClientHelloInfo).ServerName) > 0))) {
			let __goscriptTuple5: any = await (c$ as Config).GetCertificate!(clientHello)
			let cert: Certificate | $.VarRef<Certificate> | null = __goscriptTuple5[0]
			let err = __goscriptTuple5[1]
			if ((cert != null) || (err != null)) {
				return [cert, err]
			}
		}

		if ($.sliceLen((c$ as Config).Certificates) == 0) {
			return [null, errNoCertificates]
		}

		if ($.sliceLen((c$ as Config).Certificates) == 1) {
			// There's only one choice, so no point doing any work.
			return [$.indexRef((c$ as Config).Certificates!, 0), null]
		}

		if ((c$ as Config).NameToCertificate != null) {
			let name = strings.ToLower((clientHello$ as ClientHelloInfo).ServerName)
			{
				let __goscriptTuple6: any = $.mapGet<string, Certificate | $.VarRef<Certificate> | null, Certificate | $.VarRef<Certificate> | null>((c$ as Config).NameToCertificate, name, null)
				let cert: Certificate | $.VarRef<Certificate> | null = __goscriptTuple6[0]
				let ok = __goscriptTuple6[1]
				if (ok) {
					return [cert, null]
				}
			}
			if ($.stringLen(name) > 0) {
				let labels: $.Slice<string> = strings.Split(name, ".")
				$.sliceElems(labels!)[$.sliceSlot(labels!, 0)] = "*"
				let wildcardName = strings.Join(labels, ".")
				{
					let __goscriptTuple7: any = $.mapGet<string, Certificate | $.VarRef<Certificate> | null, Certificate | $.VarRef<Certificate> | null>((c$ as Config).NameToCertificate, wildcardName, null)
					let cert: Certificate | $.VarRef<Certificate> | null = __goscriptTuple7[0]
					let ok = __goscriptTuple7[1]
					if (ok) {
						return [cert, null]
					}
				}
			}
		}

		for (let __goscriptRangeTarget7 = (c$ as Config).Certificates, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let cert = $.varRef(((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as Certificate)).clone())
			{
				let err = await (clientHello !== null && (clientHello as any).__isVarRef !== true && (clientHello as any).__goValue === undefined ? ((clientHello as any) as ClientHelloInfo).SupportsCertificate(cert) : ClientHelloInfo.prototype.SupportsCertificate.call(clientHello, cert))
				if (err == null) {
					return [cert, null]
				}
			}
		}

		// If nothing matches, return the first certificate.
		return [$.indexRef((c$ as Config).Certificates!, 0), null]
	}

	public async initLegacySessionTicketKeyRLocked(): globalThis.Promise<void> {
		let c: Config | $.VarRef<Config> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const c$: Config = c == null ? $.pointerTarget<Config>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Config>(c)
		// Don't write if SessionTicketKey is already defined as our deprecated string,
		// or if it is defined by the user but sessionTicketKeys is already set.
		if ((!$.arrayEqual((c$ as Config).SessionTicketKey, $.arrayValue(new Uint8Array(32)))) && (bytes2.HasPrefix($.goSlice((c$ as Config).SessionTicketKey, undefined, undefined), deprecatedSessionTicketKey) || ($.sliceLen((c$ as Config).sessionTicketKeys) > 0))) {
			return
		}

		// We need to write some data, so get an exclusive lock and re-check any conditions.
		void (c$ as Config).mutex.RUnlock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.RLock())((c$ as Config).mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RLock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee1() })
		await (c$ as Config).mutex.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Config).mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		if ($.arrayEqual((c$ as Config).SessionTicketKey, $.arrayValue(new Uint8Array(32)))) {
			{
				let [, err] = await io.ReadFull($.pointerValueOrNil((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).rand() : Config.prototype.rand.call(c)))!, $.goSlice((c$ as Config).SessionTicketKey, undefined, undefined))
				if (err != null) {
					$.panic(await fmt.Sprintf("tls: unable to generate random session ticket key: %v", (err as any)))
				}
			}
			// Write the deprecated prefix at the beginning so we know we created
			// it. This key with the DEPRECATED prefix isn't used as an actual
			// session ticket key, and is only randomized in case the application
			// reuses it for some reason.
			$.copy($.goSlice((c$ as Config).SessionTicketKey, undefined, undefined), deprecatedSessionTicketKey)
		} else {
			if (!bytes2.HasPrefix($.goSlice((c$ as Config).SessionTicketKey, undefined, undefined), deprecatedSessionTicketKey) && ($.sliceLen((c$ as Config).sessionTicketKeys) == 0)) {
				;(c$ as Config).sessionTicketKeys = $.arrayToSlice<ticketKey>([await Config.prototype.ticketKeyFromBytes.call(c, $.cloneArrayValue((c$ as Config).SessionTicketKey, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)))])
			}
		}
	}

	public maxSupportedVersion(isClient: boolean, isQUIC: boolean): number {
		const c: Config | $.VarRef<Config> | null = this;
		let supportedVersions: $.Slice<number> = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).supportedVersions(isClient, isQUIC) : Config.prototype.supportedVersions.call(c, isClient, isQUIC))
		if ($.sliceLen(supportedVersions) == 0) {
			return 0
		}
		return $.arrayIndex(supportedVersions!, 0)
	}

	public mutualVersion(isClient: boolean, isQUIC: boolean, peerVersions: $.Slice<number>): [number, boolean] {
		const c: Config | $.VarRef<Config> | null = this;
		let supportedVersions: $.Slice<number> = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).supportedVersions(isClient, isQUIC) : Config.prototype.supportedVersions.call(c, isClient, isQUIC))
		for (let __goscriptRangeTarget8 = supportedVersions, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let v = $.uint((__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as number), 16)
			if (slices.Contains(peerVersions, v)) {
				return [v, true]
			}
		}
		return [0, false]
	}

	public rand(): io.Reader | null {
		const c: Config | $.VarRef<Config> | null = this;
		let r = $.pointerValue<Config>(c).Rand
		if (r == null) {
			return rand2.Reader
		}
		return r
	}

	public supportedCipherSuites(): $.Slice<number> {
		const c: Config | $.VarRef<Config> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).cipherSuites(false) : Config.prototype.cipherSuites.call(c, false))
	}

	public supportedVersions(isClient: boolean, isQUIC: boolean): $.Slice<number> {
		const c: Config | $.VarRef<Config> | null = this;
		const c$: Config = c == null ? $.pointerTarget<Config>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Config>(c)
		let versions: $.Slice<number> = $.makeSlice<number>(0, $.sliceLen(supportedVersions), "number")
		for (let __goscriptRangeTarget9 = supportedVersions, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
			let v = $.uint((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as number), 16)
			if (fips140tls.Required() && !slices.Contains(__goscript_defaults_fips140.__goscript_get_allowedSupportedVersionsFIPS(), v)) {
				continue
			}
			if (((c == null) || ((c$ as Config).MinVersion == 0)) && (v < 771)) {
				continue
			}
			if ((isClient && ((c$ as Config).EncryptedClientHelloConfigList != null)) && (v < 772)) {
				continue
			}
			if (((c != null) && ((c$ as Config).MinVersion != 0)) && (v < (c$ as Config).MinVersion)) {
				continue
			}
			if (((c != null) && ((c$ as Config).MaxVersion != 0)) && (v > (c$ as Config).MaxVersion)) {
				continue
			}
			if (isQUIC && (v < 772)) {
				continue
			}
			versions = $.appendOne(versions, $.uint(v, 16))
		}
		return versions
	}

	public supportsCurve(version: number, x: CurveID): boolean {
		const c: Config | $.VarRef<Config> | null = this;
		const c$: Config = c == null ? $.pointerTarget<Config>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Config>(c)
		if ((c != null) && ($.sliceLen((c$ as Config).CurvePreferences) != 0)) {
			if (!slices.Contains((c$ as Config).CurvePreferences, x)) {
				return false
			}
			// Ignore unimplemented entries in c.CurvePreferences.
			if (!slices.Contains(__goscript_defaults.curvePreferenceOrder(), x)) {
				return false
			}
		} else {
			if (!__goscript_defaults.defaultCurveEnabled(x)) {
				return false
			}
		}
		if (fips140tls.Required() && !slices.Contains(__goscript_defaults_fips140.__goscript_get_allowedCurvePreferencesFIPS(), x)) {
			return false
		}
		if ((version < 772) && isTLS13OnlyKeyExchange(x)) {
			return false
		}
		return true
	}

	public async ticketKeyFromBytes(b: Uint8Array): globalThis.Promise<ticketKey> {
		const c: Config | $.VarRef<Config> | null = this;
		let key: ticketKey = new ticketKey(undefined, true)
		let hashed = $.cloneArrayValue(await sha512.Sum512($.goSlice(b, undefined, undefined)), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64))
		// The first 16 bytes of the hash used to be exposed on the wire as a ticket
		// prefix. They MUST NOT be used as a secret. In the future, it would make
		// sense to use a proper KDF here, like HKDF with a fixed salt.
		const legacyTicketKeyNameLen: number = 16
		$.copy($.goSlice(key.aesKey, undefined, undefined), $.goSlice(hashed, 16, undefined))
		$.copy($.goSlice(key.hmacKey, undefined, undefined), $.goSlice(hashed, 16 + $.len(key.aesKey), undefined))
		$.assignStruct(key.created, await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).time() : Config.prototype.time.call(c)))
		return (key).clone()
	}

	public async ticketKeys(configForClient: Config | $.VarRef<Config> | null): globalThis.Promise<$.Slice<ticketKey>> {
		let c: Config | $.VarRef<Config> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const c$: Config = c == null ? $.pointerTarget<Config>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Config>(c)
		const configForClient$: Config = configForClient == null ? $.pointerTarget<Config>(configForClient) : (configForClient as any).__isVarRef === true ? (configForClient as any).value : (configForClient as any).__goValue === undefined ? (configForClient as any) : $.pointerTarget<Config>(configForClient)
		// If the ConfigForClient callback returned a Config with explicitly set
		// keys, use those, otherwise just use the original Config.
		if (configForClient != null) {
			await (configForClient$ as Config).mutex.RLock()
			if ((configForClient$ as Config).SessionTicketsDisabled) {
				void (configForClient$ as Config).mutex.RUnlock()
				return null
			}
			await (configForClient !== null && (configForClient as any).__isVarRef !== true && (configForClient as any).__goValue === undefined ? ((configForClient as any) as Config).initLegacySessionTicketKeyRLocked() : Config.prototype.initLegacySessionTicketKeyRLocked.call(configForClient))
			if ($.sliceLen((configForClient$ as Config).sessionTicketKeys) != 0) {
				let ret: $.Slice<ticketKey> = (configForClient$ as Config).sessionTicketKeys
				void (configForClient$ as Config).mutex.RUnlock()
				return ret
			}
			void (configForClient$ as Config).mutex.RUnlock()
		}

		await (c$ as Config).mutex.RLock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((c$ as Config).mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		if ((c$ as Config).SessionTicketsDisabled) {
			return null
		}
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).initLegacySessionTicketKeyRLocked() : Config.prototype.initLegacySessionTicketKeyRLocked.call(c))
		if ($.sliceLen((c$ as Config).sessionTicketKeys) != 0) {
			return (c$ as Config).sessionTicketKeys
		}
		// Fast path for the common case where the key is fresh enough.
		if (($.sliceLen((c$ as Config).autoSessionTicketKeys) > 0) && ($.markAsStructValue($.cloneStructValue((await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).time() : Config.prototype.time.call(c))))).Sub($.markAsStructValue($.cloneStructValue($.arrayIndex((c$ as Config).autoSessionTicketKeys!, 0).created))) < 86400000000000n)) {
			return (c$ as Config).autoSessionTicketKeys
		}

		// autoSessionTicketKeys are managed by auto-rotation.
		void (c$ as Config).mutex.RUnlock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.RLock())((c$ as Config).mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RLock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee4() })
		await (c$ as Config).mutex.Lock()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Config).mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })
		// Re-check the condition in case it changed since obtaining the new lock.
		if (($.sliceLen((c$ as Config).autoSessionTicketKeys) == 0) || ($.markAsStructValue($.cloneStructValue((await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).time() : Config.prototype.time.call(c))))).Sub($.markAsStructValue($.cloneStructValue($.arrayIndex((c$ as Config).autoSessionTicketKeys!, 0).created))) >= 86400000000000n)) {
			let newKey: Uint8Array = $.arrayValue(new Uint8Array(32))
			{
				let [, err] = await io.ReadFull($.pointerValueOrNil((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).rand() : Config.prototype.rand.call(c)))!, $.goSlice(newKey, undefined, undefined))
				if (err != null) {
					$.panic(await fmt.Sprintf("unable to generate random session ticket key: %v", (err as any)))
				}
			}
			let valid: $.Slice<ticketKey> = $.makeSlice<ticketKey>(0, $.sliceLen((c$ as Config).autoSessionTicketKeys) + 1, undefined, () => new ticketKey(undefined, true))
			valid = $.appendOne(valid, await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).ticketKeyFromBytes($.cloneArrayValue(newKey, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))) : Config.prototype.ticketKeyFromBytes.call(c, $.cloneArrayValue(newKey, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)))))
			for (let __goscriptRangeTarget10 = (c$ as Config).autoSessionTicketKeys, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
				let k = ((__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as ticketKey)).clone()
				// While rotating the current key, also remove any expired ones.
				if ($.markAsStructValue($.cloneStructValue((await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).time() : Config.prototype.time.call(c))))).Sub($.markAsStructValue($.cloneStructValue(k.created))) < 604800000000000n) {
					valid = $.appendOne(valid, (k).clone())
				}
			}
			;(c$ as Config).autoSessionTicketKeys = valid
		}
		return (c$ as Config).autoSessionTicketKeys
	}

	public async time(): globalThis.Promise<time2.Time> {
		const c: Config | $.VarRef<Config> | null = this;
		let t: (() => time2.Time | globalThis.Promise<time2.Time>) | null = $.pointerValue<Config>(c).Time
		if (t == null) {
			t = time2.Now
		}
		return $.markAsStructValue($.cloneStructValue(((__goscriptAwait = t!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time2.Time)))
	}

	public async writeKeyLog(label: string, clientRandom: $.Slice<number>, secret: $.Slice<number>): globalThis.Promise<$.GoError> {
		const c: Config | $.VarRef<Config> | null = this;
		const c$: Config = c == null ? $.pointerTarget<Config>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Config>(c)
		if ((c$ as Config).KeyLogWriter == null) {
			return null
		}

		let logLine: $.Slice<number> = await fmt.Appendf(null, "%s %x %x\n", label, $.interfaceValue(clientRandom, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), $.interfaceValue(secret, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))

		await writerMutex.value.Lock()
		let [, err] = await $.pointerValue<Exclude<io.Writer, null>>((c$ as Config).KeyLogWriter).Write(logLine)
		writerMutex.value.Unlock()

		if (err != null) {
			return fmt.Errorf("tls: KeyLogWriter: %w", (err as any))
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"tls.Config",
		() => new Config(),
		() => [$.methodSignature("BuildNameToCertificate", [], [], true), $.methodSignature("Clone", [], [/* @__PURE__ */ $.pointerType("tls.Config")], true), $.methodSignature("DecryptTicket", [["identity", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["cs", "tls.ConnectionState"]], [/* @__PURE__ */ $.pointerType("tls.SessionState"), "error"], true), $.methodSignature("EncryptTicket", [["cs", "tls.ConnectionState"], ["ss", /* @__PURE__ */ $.pointerType("tls.SessionState")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("SetSessionTicketKeys", [["keys", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [], true), $.methodSignature("cipherSuites", [["aesGCMPreferred", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16"))], true), $.methodSignature("curvePreferences", [["version", /* @__PURE__ */ $.basicType("uint16")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16", "tls.CurveID"))], true), $.methodSignature("decryptTicket", [["encrypted", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ticketKeys", /* @__PURE__ */ $.sliceType("tls.ticketKey")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("encryptTicket", [["state", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ticketKeys", /* @__PURE__ */ $.sliceType("tls.ticketKey")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("getCertificate", [["clientHello", /* @__PURE__ */ $.pointerType("tls.ClientHelloInfo")]], [/* @__PURE__ */ $.pointerType("tls.Certificate"), "error"], true), $.methodSignature("initLegacySessionTicketKeyRLocked", [], [], true), $.methodSignature("maxSupportedVersion", [["isClient", /* @__PURE__ */ $.basicType("bool")], ["isQUIC", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("uint16")], true), $.methodSignature("mutualVersion", [["isClient", /* @__PURE__ */ $.basicType("bool")], ["isQUIC", /* @__PURE__ */ $.basicType("bool")], ["peerVersions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16"))]], [/* @__PURE__ */ $.basicType("uint16"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("rand", [], ["io.Reader"], true), $.methodSignature("supportedCipherSuites", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16"))], true), $.methodSignature("supportedVersions", [["isClient", /* @__PURE__ */ $.basicType("bool")], ["isQUIC", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16"))], true), $.methodSignature("supportsCurve", [["version", /* @__PURE__ */ $.basicType("uint16")], ["x", /* @__PURE__ */ $.basicType("uint16", "tls.CurveID")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ticketKeyFromBytes", [["b", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)]], [["key", "tls.ticketKey"]], true), $.methodSignature("ticketKeys", [["configForClient", /* @__PURE__ */ $.pointerType("tls.Config")]], [/* @__PURE__ */ $.sliceType("tls.ticketKey")], true), $.methodSignature("time", [], ["time.Time"], true), $.methodSignature("writeKeyLog", [["label", /* @__PURE__ */ $.basicType("string")], ["clientRandom", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["secret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		Config,
		() => [/* @__PURE__ */ $.structField("Rand", "io.Reader", [0], 0, true), /* @__PURE__ */ $.structField("Time", ({ kind: $.TypeKind.Function, params: [], results: ["time.Time"] } as $.FunctionTypeInfo), [1], 16, true), /* @__PURE__ */ $.structField("Certificates", /* @__PURE__ */ $.sliceType("tls.Certificate"), [2], 24, true), /* @__PURE__ */ $.structField("NameToCertificate", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("tls.Certificate")), [3], 48, true), /* @__PURE__ */ $.structField("GetCertificate", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tls.ClientHelloInfo")], results: [/* @__PURE__ */ $.pointerType("tls.Certificate"), "error"] } as $.FunctionTypeInfo), [4], 56, true), /* @__PURE__ */ $.structField("GetClientCertificate", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tls.CertificateRequestInfo")], results: [/* @__PURE__ */ $.pointerType("tls.Certificate"), "error"] } as $.FunctionTypeInfo), [5], 64, true), /* @__PURE__ */ $.structField("GetConfigForClient", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tls.ClientHelloInfo")], results: [/* @__PURE__ */ $.pointerType("tls.Config"), "error"] } as $.FunctionTypeInfo), [6], 72, true), /* @__PURE__ */ $.structField("VerifyPeerCertificate", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate")))], results: ["error"] } as $.FunctionTypeInfo), [7], 80, true), /* @__PURE__ */ $.structField("VerifyConnection", ({ kind: $.TypeKind.Function, params: ["tls.ConnectionState"], results: ["error"] } as $.FunctionTypeInfo), [8], 88, true), /* @__PURE__ */ $.structField("RootCAs", /* @__PURE__ */ $.pointerType("x509.CertPool"), [9], 96, true), /* @__PURE__ */ $.structField("NextProtos", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [10], 104, true), /* @__PURE__ */ $.structField("ServerName", /* @__PURE__ */ $.basicType("string"), [11], 128, true), /* @__PURE__ */ $.structField("ClientAuth", /* @__PURE__ */ $.basicType("int", "tls.ClientAuthType"), [12], 144, true), /* @__PURE__ */ $.structField("ClientCAs", /* @__PURE__ */ $.pointerType("x509.CertPool"), [13], 152, true), /* @__PURE__ */ $.structField("InsecureSkipVerify", /* @__PURE__ */ $.basicType("bool"), [14], 160, true), /* @__PURE__ */ $.structField("CipherSuites", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")), [15], 168, true), /* @__PURE__ */ $.structField("PreferServerCipherSuites", /* @__PURE__ */ $.basicType("bool"), [16], 192, true), /* @__PURE__ */ $.structField("SessionTicketsDisabled", /* @__PURE__ */ $.basicType("bool"), [17], 193, true), /* @__PURE__ */ $.structField("SessionTicketKey", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32), [18], 194, true), /* @__PURE__ */ $.structField("ClientSessionCache", "tls.ClientSessionCache", [19], 232, true), /* @__PURE__ */ $.structField("UnwrapSession", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "tls.ConnectionState"], results: [/* @__PURE__ */ $.pointerType("tls.SessionState"), "error"] } as $.FunctionTypeInfo), [20], 248, true), /* @__PURE__ */ $.structField("WrapSession", ({ kind: $.TypeKind.Function, params: ["tls.ConnectionState", /* @__PURE__ */ $.pointerType("tls.SessionState")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo), [21], 256, true), /* @__PURE__ */ $.structField("MinVersion", /* @__PURE__ */ $.basicType("uint16"), [22], 264, true), /* @__PURE__ */ $.structField("MaxVersion", /* @__PURE__ */ $.basicType("uint16"), [23], 266, true), /* @__PURE__ */ $.structField("CurvePreferences", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16", "tls.CurveID")), [24], 272, true), /* @__PURE__ */ $.structField("DynamicRecordSizingDisabled", /* @__PURE__ */ $.basicType("bool"), [25], 296, true), /* @__PURE__ */ $.structField("Renegotiation", /* @__PURE__ */ $.basicType("int", "tls.RenegotiationSupport"), [26], 304, true), /* @__PURE__ */ $.structField("KeyLogWriter", "io.Writer", [27], 312, true), /* @__PURE__ */ $.structField("EncryptedClientHelloConfigList", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [28], 328, true), /* @__PURE__ */ $.structField("EncryptedClientHelloRejectionVerify", ({ kind: $.TypeKind.Function, params: ["tls.ConnectionState"], results: ["error"] } as $.FunctionTypeInfo), [29], 352, true), /* @__PURE__ */ $.structField("GetEncryptedClientHelloKeys", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tls.ClientHelloInfo")], results: [/* @__PURE__ */ $.sliceType("tls.EncryptedClientHelloKey"), "error"] } as $.FunctionTypeInfo), [30], 360, true), /* @__PURE__ */ $.structField("EncryptedClientHelloKeys", /* @__PURE__ */ $.sliceType("tls.EncryptedClientHelloKey"), [31], 368, true), /* @__PURE__ */ $.structField("mutex", "sync.RWMutex", [32], 392, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("sessionTicketKeys", /* @__PURE__ */ $.sliceType("tls.ticketKey"), [33], 416, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("autoSessionTicketKeys", /* @__PURE__ */ $.sliceType("tls.ticketKey"), [34], 440, false, { pkgPath: "crypto/tls" })]
	)
}

export class EncryptedClientHelloKey {
	// Config should be a marshalled ECHConfig associated with PrivateKey. This
	// must match the config provided to clients byte-for-byte. The config must
	// use as KEM one of
	//
	//   - DHKEM(P-256, HKDF-SHA256) (0x0010)
	//   - DHKEM(P-384, HKDF-SHA384) (0x0011)
	//   - DHKEM(P-521, HKDF-SHA512) (0x0012)
	//   - DHKEM(X25519, HKDF-SHA256) (0x0020)
	//   - ML-KEM-768 (0x0041)
	//   - ML-KEM-1024 (0x0042)
	//   - MLKEM768-P256 (0x0050)
	//   - MLKEM1024-P384 (0x0051)
	//   - MLKEM768-X25519 (0x647a)
	//
	// and as KDF one of
	//
	//   - HKDF-SHA256 (0x0001)
	//   - HKDF-SHA384 (0x0002)
	//   - HKDF-SHA512 (0x0003)
	//
	// and as AEAD one of
	//
	//   - AES-128-GCM (0x0001)
	//   - AES-256-GCM (0x0002)
	//   - ChaCha20Poly1305 (0x0003)
	public get Config(): $.Slice<number> {
		return this._fields.Config
	}

	public set Config(value: $.Slice<number>) {
		this._fields.Config = value
	}

	// PrivateKey should be a marshalled private key, in the format expected by
	// HPKE's DeserializePrivateKey (see RFC 9180), for the KEM used in Config.
	public get PrivateKey(): $.Slice<number> {
		return this._fields.PrivateKey
	}

	public set PrivateKey(value: $.Slice<number>) {
		this._fields.PrivateKey = value
	}

	// SendAsRetry indicates if Config should be sent as part of the list of
	// retry configs when ECH is requested by the client but rejected by the
	// server.
	public get SendAsRetry(): boolean {
		return this._fields.SendAsRetry
	}

	public set SendAsRetry(value: boolean) {
		this._fields.SendAsRetry = value
	}

	public _fields: {
		Config: $.Slice<number>
		PrivateKey: $.Slice<number>
		SendAsRetry: boolean
	}

	constructor(init?: Partial<{Config?: $.Slice<number>, PrivateKey?: $.Slice<number>, SendAsRetry?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Config: init?.Config ?? (null! as $.Slice<number>),
			PrivateKey: init?.PrivateKey ?? (null! as $.Slice<number>),
			SendAsRetry: init?.SendAsRetry ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EncryptedClientHelloKey {
		return new EncryptedClientHelloKey(this, true)
	}

	public __goscriptAssign(source: EncryptedClientHelloKey): void {
		const target = this._fields
		const values = source._fields
		target.Config = values.Config
		target.PrivateKey = values.PrivateKey
		target.SendAsRetry = values.SendAsRetry
	}

	static __typeInfo = $.registerStructType(
		"tls.EncryptedClientHelloKey",
		() => new EncryptedClientHelloKey(),
		() => [],
		EncryptedClientHelloKey,
		() => [/* @__PURE__ */ $.structField("Config", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, true), /* @__PURE__ */ $.structField("PrivateKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, true), /* @__PURE__ */ $.structField("SendAsRetry", /* @__PURE__ */ $.basicType("bool"), [2], 48, true)]
	)
}

export class ticketKey {
	public get aesKey(): Uint8Array {
		return this._fields.aesKey
	}

	public set aesKey(value: Uint8Array) {
		this._fields.aesKey = value
	}

	public get hmacKey(): Uint8Array {
		return this._fields.hmacKey
	}

	public set hmacKey(value: Uint8Array) {
		this._fields.hmacKey = value
	}

	// created is the time at which this ticket key was created. See Config.ticketKeys.
	public get created(): time2.Time {
		return this._fields.created
	}

	public set created(value: time2.Time) {
		this._fields.created = value
	}

	public _fields: {
		aesKey: Uint8Array
		hmacKey: Uint8Array
		created: time2.Time
	}

	constructor(init?: Partial<{aesKey?: Uint8Array, hmacKey?: Uint8Array, created?: time2.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			aesKey: init?.aesKey !== undefined ? $.cloneArrayValue(init.aesKey, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16)) : $.arrayValue(new Uint8Array(16)),
			hmacKey: init?.hmacKey !== undefined ? $.cloneArrayValue(init.hmacKey, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16)) : $.arrayValue(new Uint8Array(16)),
			created: init?.created ? $.markAsStructValue($.cloneStructValue(init.created)) : $.markAsStructValue(new time2.Time())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ticketKey {
		return new ticketKey(this, true)
	}

	public __goscriptAssign(source: ticketKey): void {
		const target = this._fields
		const values = source._fields
		target.aesKey = $.assignFieldValue(target.aesKey, values.aesKey, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
		target.hmacKey = $.assignFieldValue(target.hmacKey, values.hmacKey, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
		$.assignStruct(target.created, values.created)
	}

	static __typeInfo = $.registerStructType(
		"tls.ticketKey",
		() => new ticketKey(),
		() => [],
		ticketKey,
		() => [/* @__PURE__ */ $.structField("aesKey", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("hmacKey", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16), [1], 16, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("created", "time.Time", [2], 32, false, { pkgPath: "crypto/tls" })]
	)
}

export class Certificate {
	public get Certificate(): $.Slice<$.Slice<number>> {
		return this._fields.Certificate
	}

	public set Certificate(value: $.Slice<$.Slice<number>>) {
		this._fields.Certificate = value
	}

	// PrivateKey contains the private key corresponding to the public key in
	// Leaf. This must implement [crypto.Signer] with an RSA, ECDSA, Ed25519
	// (TLS 1.2+), or ML-DSA (TLS 1.3) PublicKey.
	//
	// For a server up to TLS 1.2, it can also implement crypto.Decrypter with
	// an RSA PublicKey.
	//
	// If it implements [crypto.MessageSigner], SignMessage will be used instead
	// of Sign for TLS 1.2 and later.
	public get PrivateKey(): crypto.PrivateKey | null {
		return this._fields.PrivateKey
	}

	public set PrivateKey(value: crypto.PrivateKey | null) {
		this._fields.PrivateKey = value
	}

	// SupportedSignatureAlgorithms is an optional list restricting what
	// signature algorithms the PrivateKey can be used for.
	public get SupportedSignatureAlgorithms(): $.Slice<SignatureScheme> {
		return this._fields.SupportedSignatureAlgorithms
	}

	public set SupportedSignatureAlgorithms(value: $.Slice<SignatureScheme>) {
		this._fields.SupportedSignatureAlgorithms = value
	}

	// OCSPStaple contains an optional OCSP response which will be served
	// to clients that request it.
	public get OCSPStaple(): $.Slice<number> {
		return this._fields.OCSPStaple
	}

	public set OCSPStaple(value: $.Slice<number>) {
		this._fields.OCSPStaple = value
	}

	// SignedCertificateTimestamps contains an optional list of Signed
	// Certificate Timestamps which will be served to clients that request it.
	public get SignedCertificateTimestamps(): $.Slice<$.Slice<number>> {
		return this._fields.SignedCertificateTimestamps
	}

	public set SignedCertificateTimestamps(value: $.Slice<$.Slice<number>>) {
		this._fields.SignedCertificateTimestamps = value
	}

	// Leaf is the parsed form of the leaf certificate, which may be initialized
	// using x509.ParseCertificate to reduce per-handshake processing. If nil,
	// the leaf certificate will be parsed as needed.
	public get Leaf(): x509.Certificate | $.VarRef<x509.Certificate> | null {
		return this._fields.Leaf
	}

	public set Leaf(value: x509.Certificate | $.VarRef<x509.Certificate> | null) {
		this._fields.Leaf = value
	}

	public _fields: {
		Certificate: $.Slice<$.Slice<number>>
		PrivateKey: crypto.PrivateKey | null
		SupportedSignatureAlgorithms: $.Slice<SignatureScheme>
		OCSPStaple: $.Slice<number>
		SignedCertificateTimestamps: $.Slice<$.Slice<number>>
		Leaf: x509.Certificate | $.VarRef<x509.Certificate> | null
	}

	constructor(init?: Partial<{Certificate?: $.Slice<$.Slice<number>>, PrivateKey?: crypto.PrivateKey | null, SupportedSignatureAlgorithms?: $.Slice<SignatureScheme>, OCSPStaple?: $.Slice<number>, SignedCertificateTimestamps?: $.Slice<$.Slice<number>>, Leaf?: x509.Certificate | $.VarRef<x509.Certificate> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Certificate: init?.Certificate ?? (null! as $.Slice<$.Slice<number>>),
			PrivateKey: init?.PrivateKey ?? (null! as crypto.PrivateKey | null),
			SupportedSignatureAlgorithms: init?.SupportedSignatureAlgorithms ?? (null! as $.Slice<SignatureScheme>),
			OCSPStaple: init?.OCSPStaple ?? (null! as $.Slice<number>),
			SignedCertificateTimestamps: init?.SignedCertificateTimestamps ?? (null! as $.Slice<$.Slice<number>>),
			Leaf: init?.Leaf ?? (null! as x509.Certificate | $.VarRef<x509.Certificate> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Certificate {
		return new Certificate(this, true)
	}

	public __goscriptAssign(source: Certificate): void {
		const target = this._fields
		const values = source._fields
		target.Certificate = values.Certificate
		target.PrivateKey = $.assignFieldValue(target.PrivateKey, values.PrivateKey, "crypto.PrivateKey")
		target.SupportedSignatureAlgorithms = values.SupportedSignatureAlgorithms
		target.OCSPStaple = values.OCSPStaple
		target.SignedCertificateTimestamps = values.SignedCertificateTimestamps
		target.Leaf = values.Leaf
	}

	public async leaf(): globalThis.Promise<[x509.Certificate | $.VarRef<x509.Certificate> | null, $.GoError]> {
		const c: Certificate | $.VarRef<Certificate> | null = this;
		const c$: Certificate = c == null ? $.pointerTarget<Certificate>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Certificate>(c)
		if ((c$ as Certificate).Leaf != null) {
			return [(c$ as Certificate).Leaf, null]
		}
		return x509.ParseCertificate($.arrayIndex((c$ as Certificate).Certificate!, 0))
	}

	static __typeInfo = $.registerStructType(
		"tls.Certificate",
		() => new Certificate(),
		() => [$.methodSignature("leaf", [], [/* @__PURE__ */ $.pointerType("x509.Certificate"), "error"], true)],
		Certificate,
		() => [/* @__PURE__ */ $.structField("Certificate", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [0], 0, true), /* @__PURE__ */ $.structField("PrivateKey", "crypto.PrivateKey", [1], 24, true), /* @__PURE__ */ $.structField("SupportedSignatureAlgorithms", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16", "tls.SignatureScheme")), [2], 40, true), /* @__PURE__ */ $.structField("OCSPStaple", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 64, true), /* @__PURE__ */ $.structField("SignedCertificateTimestamps", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [4], 88, true), /* @__PURE__ */ $.structField("Leaf", /* @__PURE__ */ $.pointerType("x509.Certificate"), [5], 112, true)]
	)
}

export class lruSessionCache {
	public get Mutex(): sync.Mutex {
		return this._fields.Mutex
	}

	public set Mutex(value: sync.Mutex) {
		this._fields.Mutex = value
	}

	public get m(): globalThis.Map<string, list.Element | $.VarRef<list.Element> | null> | null {
		return this._fields.m
	}

	public set m(value: globalThis.Map<string, list.Element | $.VarRef<list.Element> | null> | null) {
		this._fields.m = value
	}

	public get q(): list.List | $.VarRef<list.List> | null {
		return this._fields.q
	}

	public set q(value: list.List | $.VarRef<list.List> | null) {
		this._fields.q = value
	}

	public get capacity(): number {
		return this._fields.capacity
	}

	public set capacity(value: number) {
		this._fields.capacity = value
	}

	public _fields: {
		Mutex: sync.Mutex
		m: globalThis.Map<string, list.Element | $.VarRef<list.Element> | null> | null
		q: list.List | $.VarRef<list.List> | null
		capacity: number
	}

	constructor(init?: Partial<{Mutex?: sync.Mutex, m?: globalThis.Map<string, list.Element | $.VarRef<list.Element> | null> | null, q?: list.List | $.VarRef<list.List> | null, capacity?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Mutex: init?.Mutex ? $.markAsStructValue($.cloneStructValue(init.Mutex)) : $.markAsStructValue(new sync.Mutex()),
			m: init?.m ?? (null! as globalThis.Map<string, list.Element | $.VarRef<list.Element> | null> | null),
			q: init?.q ?? (null! as list.List | $.VarRef<list.List> | null),
			capacity: init?.capacity ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lruSessionCache {
		return new lruSessionCache(this, true)
	}

	public __goscriptAssign(source: lruSessionCache): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Mutex, values.Mutex)
		target.m = values.m
		target.q = values.q
		target.capacity = values.capacity
	}

	public async Get(sessionKey: string): globalThis.Promise<[__goscript_ticket.ClientSessionState | $.VarRef<__goscript_ticket.ClientSessionState> | null, boolean]> {
		const c: lruSessionCache | $.VarRef<lruSessionCache> | null = this;
		using __defer = new $.DisposableStack()
		const c$: lruSessionCache = c == null ? $.pointerTarget<lruSessionCache>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<lruSessionCache>(c)
		await (c$ as lruSessionCache).Mutex.Lock()
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as lruSessionCache).Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee6() })

		{
			let __goscriptTuple8: any = $.mapGet<string, list.Element | $.VarRef<list.Element> | null, list.Element | $.VarRef<list.Element> | null>((c$ as lruSessionCache).m, sessionKey, null)
			let elem: list.Element | $.VarRef<list.Element> | null = __goscriptTuple8[0]
			let ok = __goscriptTuple8[1]
			if (ok) {
				list.List.prototype.MoveToFront.call((c$ as lruSessionCache).q, elem)
				return [$.pointerValue<lruSessionCacheEntry>($.mustTypeAssert<lruSessionCacheEntry | $.VarRef<lruSessionCacheEntry> | null>($.pointerValue<list.Element>(elem).Value, /* @__PURE__ */ $.pointerType("tls.lruSessionCacheEntry"))).state, true]
			}
		}
		return [null, false]
	}

	public async Put(sessionKey: string, cs: __goscript_ticket.ClientSessionState | $.VarRef<__goscript_ticket.ClientSessionState> | null): globalThis.Promise<void> {
		let c: lruSessionCache | $.VarRef<lruSessionCache> | null = this;
		using __defer = new $.DisposableStack()
		const c$: lruSessionCache = c == null ? $.pointerTarget<lruSessionCache>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<lruSessionCache>(c)
		await (c$ as lruSessionCache).Mutex.Lock()
		const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as lruSessionCache).Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee7() })

		{
			let __goscriptTuple9: any = $.mapGet<string, list.Element | $.VarRef<list.Element> | null, list.Element | $.VarRef<list.Element> | null>((c$ as lruSessionCache).m, sessionKey, null)
			let elem: list.Element | $.VarRef<list.Element> | null = __goscriptTuple9[0]
			let ok = __goscriptTuple9[1]
			if (ok) {
				if (cs == null) {
					list.List.prototype.Remove.call((c$ as lruSessionCache).q, elem)
					$.deleteMapEntry((c$ as lruSessionCache).m, sessionKey)
				} else {
					let entry: lruSessionCacheEntry | $.VarRef<lruSessionCacheEntry> | null = $.mustTypeAssert<lruSessionCacheEntry | $.VarRef<lruSessionCacheEntry> | null>($.pointerValue<list.Element>(elem).Value, /* @__PURE__ */ $.pointerType("tls.lruSessionCacheEntry"))
					$.pointerValue<lruSessionCacheEntry>(entry).state = cs
					list.List.prototype.MoveToFront.call((c$ as lruSessionCache).q, elem)
				}
				return
			}
		}

		if (list.List.prototype.Len.call((c$ as lruSessionCache).q) < (c$ as lruSessionCache).capacity) {
			let entry: lruSessionCacheEntry | $.VarRef<lruSessionCacheEntry> | null = new lruSessionCacheEntry({sessionKey: sessionKey, state: cs})
			$.mapSet((c$ as lruSessionCache).m, sessionKey, list.List.prototype.PushFront.call((c$ as lruSessionCache).q, $.interfaceValue(entry, "*tls.lruSessionCacheEntry", /* @__PURE__ */ $.pointerType("tls.lruSessionCacheEntry"))))
			return
		}

		let elem: list.Element | $.VarRef<list.Element> | null = list.List.prototype.Back.call((c$ as lruSessionCache).q)
		let entry: lruSessionCacheEntry | $.VarRef<lruSessionCacheEntry> | null = $.mustTypeAssert<lruSessionCacheEntry | $.VarRef<lruSessionCacheEntry> | null>($.pointerValue<list.Element>(elem).Value, /* @__PURE__ */ $.pointerType("tls.lruSessionCacheEntry"))
		let entry$: lruSessionCacheEntry = entry == null ? $.pointerTarget<lruSessionCacheEntry>(entry) : (entry as any).__isVarRef === true ? (entry as any).value : (entry as any).__goValue === undefined ? (entry as any) : $.pointerTarget<lruSessionCacheEntry>(entry)
		$.deleteMapEntry((c$ as lruSessionCache).m, (entry$ as lruSessionCacheEntry).sessionKey);
		;(entry$ as lruSessionCacheEntry).sessionKey = sessionKey;
		;(entry$ as lruSessionCacheEntry).state = cs
		list.List.prototype.MoveToFront.call((c$ as lruSessionCache).q, elem)
		$.mapSet((c$ as lruSessionCache).m, sessionKey, elem)
	}

	public Lock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).Lock()
	}

	public TryLock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).TryLock()
	}

	public Unlock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).Unlock()
	}

	static __typeInfo = $.registerStructType(
		"tls.lruSessionCache",
		() => new lruSessionCache(),
		() => [$.methodSignature("Get", [["sessionKey", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tls.ClientSessionState"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Put", [["sessionKey", /* @__PURE__ */ $.basicType("string")], ["cs", /* @__PURE__ */ $.pointerType("tls.ClientSessionState")]], [], true), $.methodSignature("Lock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		lruSessionCache,
		() => [/* @__PURE__ */ $.structField("Mutex", "sync.Mutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("m", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("list.Element")), [1], 8, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("q", /* @__PURE__ */ $.pointerType("list.List"), [2], 16, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("capacity", /* @__PURE__ */ $.basicType("int"), [3], 24, false, { pkgPath: "crypto/tls" })]
	)
}

export class lruSessionCacheEntry {
	public get sessionKey(): string {
		return this._fields.sessionKey
	}

	public set sessionKey(value: string) {
		this._fields.sessionKey = value
	}

	public get state(): __goscript_ticket.ClientSessionState | $.VarRef<__goscript_ticket.ClientSessionState> | null {
		return this._fields.state
	}

	public set state(value: __goscript_ticket.ClientSessionState | $.VarRef<__goscript_ticket.ClientSessionState> | null) {
		this._fields.state = value
	}

	public _fields: {
		sessionKey: string
		state: __goscript_ticket.ClientSessionState | $.VarRef<__goscript_ticket.ClientSessionState> | null
	}

	constructor(init?: Partial<{sessionKey?: string, state?: __goscript_ticket.ClientSessionState | $.VarRef<__goscript_ticket.ClientSessionState> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			sessionKey: init?.sessionKey ?? ("" as string),
			state: init?.state ?? (null! as __goscript_ticket.ClientSessionState | $.VarRef<__goscript_ticket.ClientSessionState> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lruSessionCacheEntry {
		return new lruSessionCacheEntry(this, true)
	}

	public __goscriptAssign(source: lruSessionCacheEntry): void {
		const target = this._fields
		const values = source._fields
		target.sessionKey = values.sessionKey
		target.state = values.state
	}

	static __typeInfo = $.registerStructType(
		"tls.lruSessionCacheEntry",
		() => new lruSessionCacheEntry(),
		() => [],
		lruSessionCacheEntry,
		() => [/* @__PURE__ */ $.structField("sessionKey", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.pointerType("tls.ClientSessionState"), [1], 16, false, { pkgPath: "crypto/tls" })]
	)
}

export class CertificateVerificationError {
	// UnverifiedCertificates and its contents should not be modified.
	public get UnverifiedCertificates(): $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null> {
		return this._fields.UnverifiedCertificates
	}

	public set UnverifiedCertificates(value: $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>) {
		this._fields.UnverifiedCertificates = value
	}

	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		UnverifiedCertificates: $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>
		Err: $.GoError
	}

	constructor(init?: Partial<{UnverifiedCertificates?: $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>, Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			UnverifiedCertificates: init?.UnverifiedCertificates ?? (null! as $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>),
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CertificateVerificationError {
		return new CertificateVerificationError(this, true)
	}

	public __goscriptAssign(source: CertificateVerificationError): void {
		const target = this._fields
		const values = source._fields
		target.UnverifiedCertificates = values.UnverifiedCertificates
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const e: CertificateVerificationError | $.VarRef<CertificateVerificationError> | null = this;
		return fmt.Sprintf("tls: failed to verify certificate: %s", ($.pointerValue<CertificateVerificationError>(e).Err as any))
	}

	public Unwrap(): $.GoError {
		const e: CertificateVerificationError | $.VarRef<CertificateVerificationError> | null = this;
		return $.pointerValue<CertificateVerificationError>(e).Err
	}

	static __typeInfo = $.registerStructType(
		"tls.CertificateVerificationError",
		() => new CertificateVerificationError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unwrap", [], ["error"], true)],
		CertificateVerificationError,
		() => [/* @__PURE__ */ $.structField("UnverifiedCertificates", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate")), [0], 0, true), /* @__PURE__ */ $.structField("Err", "error", [1], 24, true)]
	)
}

export const VersionTLS10: number = 769

export const VersionTLS11: number = 770

export const VersionTLS12: number = 771

export const VersionTLS13: number = 772

export const VersionSSL30: number = 768

export const maxPlaintext: number = 16384

export const maxCiphertext: number = 18432

export const maxCiphertextTLS13: number = 16640

export const recordHeaderLen: number = 5

export const maxHandshake: number = 65536

export const maxHandshakeCertificateMsg: number = 262144

export const maxUselessRecords: number = 16

export const recordTypeChangeCipherSpec: recordType = 20

export const recordTypeAlert: recordType = 21

export const recordTypeHandshake: recordType = 22

export const recordTypeApplicationData: recordType = 23

export const typeHelloRequest: number = 0

export const typeClientHello: number = 1

export const typeServerHello: number = 2

export const typeNewSessionTicket: number = 4

export const typeEndOfEarlyData: number = 5

export const typeEncryptedExtensions: number = 8

export const typeCertificate: number = 11

export const typeServerKeyExchange: number = 12

export const typeCertificateRequest: number = 13

export const typeServerHelloDone: number = 14

export const typeCertificateVerify: number = 15

export const typeClientKeyExchange: number = 16

export const typeFinished: number = 20

export const typeCertificateStatus: number = 22

export const typeKeyUpdate: number = 24

export const typeMessageHash: number = 254

export const compressionNone: number = 0

export const extensionServerName: number = 0

export const extensionStatusRequest: number = 5

export const extensionSupportedCurves: number = 10

export const extensionSupportedPoints: number = 11

export const extensionSignatureAlgorithms: number = 13

export const extensionALPN: number = 16

export const extensionSCT: number = 18

export const extensionExtendedMasterSecret: number = 23

export const extensionSessionTicket: number = 35

export const extensionPreSharedKey: number = 41

export const extensionEarlyData: number = 42

export const extensionSupportedVersions: number = 43

export const extensionCookie: number = 44

export const extensionPSKModes: number = 45

export const extensionCertificateAuthorities: number = 47

export const extensionSignatureAlgorithmsCert: number = 50

export const extensionKeyShare: number = 51

export const extensionQUICTransportParameters: number = 57

export const extensionRenegotiationInfo: number = 65281

export const extensionECHOuterExtensions: number = 64768

export const extensionEncryptedClientHello: number = 65037

export const scsvRenegotiation: number = 255

export const CurveP256: CurveID = 23

export const CurveP384: CurveID = 24

export const CurveP521: CurveID = 25

export const X25519: CurveID = 29

export const X25519MLKEM768: CurveID = 4588

export const SecP256r1MLKEM768: CurveID = 4587

export const SecP384r1MLKEM1024: CurveID = 4589

export const MLKEM1024: CurveID = 514

export const pskModePlain: number = 0

export const pskModeDHE: number = 1

export const pointFormatUncompressed: number = 0

export const statusTypeOCSP: number = 1

export const certTypeRSASign: number = 1

export const certTypeECDSASign: number = 64

export const signaturePKCS1v15: number = 225

export const signatureRSAPSS: number = 226

export const signatureECDSA: number = 227

export const signatureEd25519: number = 228

export const signatureMLDSA: number = 229

export const downgradeCanaryTLS12: string = "DOWNGRD\x01"

export const downgradeCanaryTLS11: string = "DOWNGRD\x00"

export const NoClientCert: ClientAuthType = 0

export const RequestClientCert: ClientAuthType = 1

export const RequireAnyClientCert: ClientAuthType = 2

export const VerifyClientCertIfGiven: ClientAuthType = 3

export const RequireAndVerifyClientCert: ClientAuthType = 4

export const PKCS1WithSHA256: SignatureScheme = 1025

export const PKCS1WithSHA384: SignatureScheme = 1281

export const PKCS1WithSHA512: SignatureScheme = 1537

export const PSSWithSHA256: SignatureScheme = 2052

export const PSSWithSHA384: SignatureScheme = 2053

export const PSSWithSHA512: SignatureScheme = 2054

export const ECDSAWithP256AndSHA256: SignatureScheme = 1027

export const ECDSAWithP384AndSHA384: SignatureScheme = 1283

export const ECDSAWithP521AndSHA512: SignatureScheme = 1539

export const Ed25519: SignatureScheme = 2055

export const MLDSA44: SignatureScheme = 2308

export const MLDSA65: SignatureScheme = 2309

export const MLDSA87: SignatureScheme = 2310

export const PKCS1WithSHA1: SignatureScheme = 513

export const ECDSAWithSHA1: SignatureScheme = 515

export const RenegotiateNever: RenegotiationSupport = 0

export const RenegotiateOnceAsClient: RenegotiationSupport = 1

export const RenegotiateFreelyAsClient: RenegotiationSupport = 2

export const ticketKeyLifetime: time2.Duration = 604800000000000n

export const ticketKeyRotation: time2.Duration = 86400000000000n

export const maxSessionTicketLifetime: time2.Duration = 604800000000000n

export const roleClient: boolean = true

export const roleServer: boolean = false

export const keyLogLabelTLS12: string = "CLIENT_RANDOM"

export const keyLogLabelClientHandshake: string = "CLIENT_HANDSHAKE_TRAFFIC_SECRET"

export const keyLogLabelServerHandshake: string = "SERVER_HANDSHAKE_TRAFFIC_SECRET"

export const keyLogLabelClientTraffic: string = "CLIENT_TRAFFIC_SECRET_0"

export const keyLogLabelServerTraffic: string = "SERVER_TRAFFIC_SECRET_0"

export async function VersionName(version: number): globalThis.Promise<string> {
	switch (version) {
		case 768:
		{
			return "SSLv3"
			break
		}
		case 769:
		{
			return "TLS 1.0"
			break
		}
		case 770:
		{
			return "TLS 1.1"
			break
		}
		case 771:
		{
			return "TLS 1.2"
			break
		}
		case 772:
		{
			return "TLS 1.3"
			break
		}
		default:
		{
			return fmt.Sprintf("0x%04X", $.basicInterfaceValue(version, "uint16"))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function isTLS13OnlyKeyExchange(curve: CurveID): boolean {
	switch (curve) {
		case 4588:
		case 4587:
		case 4589:
		case 514:
		{
			return true
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

export function isPQKeyExchange(curve: CurveID): boolean {
	switch (curve) {
		case 4588:
		case 4587:
		case 4589:
		case 514:
		{
			return true
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

export let directSigning: crypto.Hash = 0

export function __goscript_set_directSigning(__goscriptValue: crypto.Hash): void {
	directSigning = __goscriptValue
}

export let helloRetryRequestRandom: $.Slice<number> = new Uint8Array([207, 33, 173, 116, 229, 154, 97, 17, 190, 29, 140, 2, 30, 101, 184, 145, 194, 162, 17, 22, 122, 187, 140, 94, 7, 158, 9, 226, 200, 168, 51, 156]) as $.Slice<number>

export function __goscript_set_helloRetryRequestRandom(__goscriptValue: $.Slice<number>): void {
	helloRetryRequestRandom = __goscriptValue
}

export let testingOnlyForceDowngradeCanary: boolean = false

export function __goscript_set_testingOnlyForceDowngradeCanary(__goscriptValue: boolean): void {
	testingOnlyForceDowngradeCanary = __goscriptValue
}

export function requiresClientCert(c: ClientAuthType): boolean {
	switch (c) {
		case 2:
		case 4:
		{
			return true
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

export let deprecatedSessionTicketKey: $.Slice<number> = new Uint8Array([68, 69, 80, 82, 69, 67, 65, 84, 69, 68])

export function __goscript_set_deprecatedSessionTicketKey(__goscriptValue: $.Slice<number>): void {
	deprecatedSessionTicketKey = __goscriptValue
}

export let supportedVersions: $.Slice<number> = $.arrayToSlice<number>([772, 771, 770, 769])

export function __goscript_set_supportedVersions(__goscriptValue: $.Slice<number>): void {
	supportedVersions = __goscriptValue
}

export function supportedVersionsFromMax(maxVersion: number): $.Slice<number> {
	let versions: $.Slice<number> = $.makeSlice<number>(0, $.sliceLen(supportedVersions), "number")
	for (let __goscriptRangeTarget11 = supportedVersions, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as number), 16)
		if (v > maxVersion) {
			continue
		}
		versions = $.appendOne(versions, $.uint(v, 16))
	}
	return versions
}

export let errNoCertificates: $.GoError = errors.New("tls: no certificates configured")

export function __goscript_set_errNoCertificates(__goscriptValue: $.GoError): void {
	errNoCertificates = __goscriptValue
}

export let writerMutex: $.VarRef<sync.Mutex> = $.varRef($.markAsStructValue(new sync.Mutex()))

export function __goscript_set_writerMutex(__goscriptValue: sync.Mutex): void {
	$.assignStruct(writerMutex.value, __goscriptValue)
}

export function NewLRUClientSessionCache(capacity: number): ClientSessionCache | null {
	const defaultSessionCacheCapacity: number = 64

	if (capacity < 1) {
		capacity = 64
	}
	return $.interfaceValue<ClientSessionCache | null>((() => { const __goscriptLiteralField0 = list.New(); return new lruSessionCache({m: $.makeMap<string, list.Element | $.VarRef<list.Element> | null>(), q: __goscriptLiteralField0, capacity: capacity}) })(), "*tls.lruSessionCache", /* @__PURE__ */ $.pointerType("tls.lruSessionCache"))
}

export let emptyConfig: $.VarRef<Config> = $.varRef(new Config(undefined, true))

export function __goscript_set_emptyConfig(__goscriptValue: Config): void {
	$.assignStruct(emptyConfig.value, __goscriptValue)
}

export function defaultConfig(): Config | $.VarRef<Config> | null {
	return emptyConfig
}

export function unexpectedMessageError(wanted: any, got: any): $.GoError {
	return fmt.Errorf("tls: received unexpected handshake message of type %T when waiting for %T", got, wanted)
}

export let testingOnlySupportedSignatureAlgorithms: $.Slice<SignatureScheme> = null! as $.Slice<SignatureScheme>

export function __goscript_set_testingOnlySupportedSignatureAlgorithms(__goscriptValue: $.Slice<SignatureScheme>): void {
	testingOnlySupportedSignatureAlgorithms = __goscriptValue
}

export function supportedSignatureAlgorithms(minVers: number, maxVers: number): $.Slice<SignatureScheme> {
	let sigAlgs: $.Slice<SignatureScheme> = __goscript_defaults.defaultSupportedSignatureAlgorithms()
	if (testingOnlySupportedSignatureAlgorithms != null) {
		sigAlgs = (slices.Clone(testingOnlySupportedSignatureAlgorithms) as $.Slice<SignatureScheme>)
	}
	return (slices.DeleteFunc(sigAlgs, $.functionValue((s: SignatureScheme): boolean => {
		for (let v = minVers; v <= maxVers; v = ((v + 1) & 0xffff)) {
			if (!isDisabledSignatureAlgorithm(v, s, false)) {
				return false
			}
		}
		return true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint16", "tls.SignatureScheme")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))) as $.Slice<SignatureScheme>)
}

export let tlssha1: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("tlssha1")

export function __goscript_set_tlssha1(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	tlssha1 = __goscriptValue
}

export function isDisabledSignatureAlgorithm(version: number, s: SignatureScheme, isCert: boolean): boolean {
	if (fips140tls.Required() && !slices.Contains(__goscript_defaults_fips140.__goscript_get_allowedSignatureAlgorithmsFIPS(), s)) {
		return true
	}

	switch (s) {
		case 2308:
		case 2309:
		case 2310:
		{
			if ($.stringEqual(fips140.Version(), "v1.0.0")) {
				return true
			}
			// ML-DSA codepoints are only defined for TLS 1.3.
			if (version < 772) {
				return true
			}
			break
		}
	}

	// For the _cert extension we include all algorithms, including SHA-1 and
	// PKCS#1 v1.5, because it's more likely that something on our side will be
	// willing to accept a *-with-SHA1 certificate (e.g. with a custom
	// VerifyConnection or by a direct match with the CertPool), than that the
	// peer would have a better certificate but is just choosing not to send it.
	// crypto/x509 will refuse to verify important SHA-1 signatures anyway.
	if (isCert) {
		return false
	}

	// TLS 1.3 removed support for PKCS#1 v1.5 and SHA-1 signatures,
	// and Go 1.25 removed support for SHA-1 signatures in TLS 1.2.
	if (version > 771) {
		let [sigType, sigHash, ] = __goscript_auth.typeAndHashFromSignatureScheme(s)
		if ((sigType == 225) || (sigHash == 3)) {
			return true
		}
	} else {
		if (!$.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(tlssha1)), "1")) {
			let [, sigHash, ] = __goscript_auth.typeAndHashFromSignatureScheme(s)
			if (sigHash == 3) {
				return true
			}
		}
	}

	return false
}

export function supportedSignatureAlgorithmsCert(minVers: number, maxVers: number): $.Slice<SignatureScheme> {
	let sigAlgs: $.Slice<SignatureScheme> = __goscript_defaults.defaultSupportedSignatureAlgorithms()
	return (slices.DeleteFunc(sigAlgs, $.functionValue((s: SignatureScheme): boolean => {
		for (let v = minVers; v <= maxVers; v = ((v + 1) & 0xffff)) {
			if (!isDisabledSignatureAlgorithm(v, s, true)) {
				return false
			}
		}
		return true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint16", "tls.SignatureScheme")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))) as $.Slice<SignatureScheme>)
}

export function isSupportedSignatureAlgorithm(sigAlg: SignatureScheme, supportedSignatureAlgorithms: $.Slice<SignatureScheme>): boolean {
	return slices.Contains(supportedSignatureAlgorithms, sigAlg)
}

export async function fipsAllowedChains(chains: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>): globalThis.Promise<[$.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>, $.GoError]> {
	if (!fips140tls.Required()) {
		return [chains, null]
	}

	let permittedChains: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>> = $.makeSlice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>(0, $.sliceLen(chains))
	for (let __goscriptRangeTarget12 = chains, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
		let chain = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>)
		if (await fipsAllowChain(chain)) {
			permittedChains = $.appendOne(permittedChains, chain, $.appendZeros.nil)
		}
	}

	if ($.sliceLen(permittedChains) == 0) {
		return [null, errors.New("tls: no FIPS compatible certificate chains found")]
	}

	return [permittedChains, null]
}

export async function fipsAllowChain(chain: $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>): globalThis.Promise<boolean> {
	if ($.sliceLen(chain) == 0) {
		return false
	}

	for (let __goscriptRangeTarget13 = chain, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
		let cert = (__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as x509.Certificate | $.VarRef<x509.Certificate> | null)
		if (!await __goscript_defaults_fips140.isCertificateAllowedFIPS(cert)) {
			return false
		}
	}

	return true
}

export async function anyValidVerifiedChain(verifiedChains: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>, opts: x509.VerifyOptions): globalThis.Promise<boolean> {
	for (let __goscriptRangeTarget15 = verifiedChains, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget15), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
		let chain = (__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>)
		if ($.sliceLen(chain) == 0) {
			continue
		}
		if (slices.ContainsFunc(chain, $.functionValue((cert: x509.Certificate | $.VarRef<x509.Certificate> | null): boolean => {
			return $.markAsStructValue($.cloneStructValue(opts.CurrentTime)).Before($.markAsStructValue($.cloneStructValue($.pointerValue<x509.Certificate>(cert).NotBefore))) || $.markAsStructValue($.cloneStructValue(opts.CurrentTime)).After($.markAsStructValue($.cloneStructValue($.pointerValue<x509.Certificate>(cert).NotAfter)))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("x509.Certificate")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))) {
			continue
		}
		// Since we already validated the chain, we only care that it is rooted
		// in a CA in opts.Roots. On platforms where we control chain validation
		// (e.g. not Windows or macOS) this is a simple lookup in the CertPool
		// internal hash map, which we can simulate by running Verify on the
		// root. On other platforms, we have to do full verification again,
		// because EKU handling might differ. We will want to replace this with
		// CertPool.Contains if/once that is available. See go.dev/issue/77376.
		if ((($.stringEqual(runtime.GOOS, "windows")) || ($.stringEqual(runtime.GOOS, "darwin"))) || ($.stringEqual(runtime.GOOS, "ios"))) {
			opts.Intermediates = x509.NewCertPool()
			for (let __goscriptRangeTarget14 = $.goSlice(chain, 1, $.max(1, $.sliceLen(chain) - 1)), __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow15.length; __rangeIndex++) {
				let cert = (__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + __rangeIndex] as x509.Certificate | $.VarRef<x509.Certificate> | null)
				await x509.CertPool.prototype.AddCert.call(opts.Intermediates, cert)
			}
			let leaf: x509.Certificate | $.VarRef<x509.Certificate> | null = $.arrayIndex(chain!, 0)
			{
				let [, err] = await (leaf !== null && (leaf as any).__isVarRef !== true && (leaf as any).__goValue === undefined ? ((leaf as any) as x509.Certificate).Verify((opts).clone()) : x509.Certificate.prototype.Verify.call(leaf, (opts).clone()))
				if (err == null) {
					return true
				}
			}
		} else {
			let root: x509.Certificate | $.VarRef<x509.Certificate> | null = $.arrayIndex(chain!, $.sliceLen(chain) - 1)
			{
				let [, err] = await (root !== null && (root as any).__isVarRef !== true && (root as any).__goValue === undefined ? ((root as any) as x509.Certificate).Verify((opts).clone()) : x509.Certificate.prototype.Verify.call(root, (opts).clone()))
				if (err == null) {
					return true
				}
			}
		}
	}
	return false
}

var __goscriptAwait: any
