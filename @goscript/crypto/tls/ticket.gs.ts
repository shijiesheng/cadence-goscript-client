// Generated file based on ticket.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as aes from "@goscript/crypto/aes/index.js"

import * as cipher from "@goscript/crypto/cipher/index.js"

import * as hmac from "@goscript/crypto/hmac/index.js"

import * as sha256 from "@goscript/crypto/sha256/index.js"

import * as subtle from "@goscript/crypto/subtle/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as cryptobyte from "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as hpke from "@goscript/crypto/hpke/index.js"

import type * as tls13 from "@goscript/crypto/internal/fips140/tls13/index.js"

import * as hash from "@goscript/hash/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript_alert from "./alert.gs.ts"

import * as __goscript_cache from "./cache.gs.ts"

import type * as __goscript_cipher_suites from "./cipher_suites.gs.ts"

import * as __goscript_common from "./common.gs.ts"

import * as __goscript_common_string from "./common_string.gs.ts"

import * as __goscript_conn from "./conn.gs.ts"

import * as __goscript_ech from "./ech.gs.ts"

import type * as __goscript_handshake_client from "./handshake_client.gs.ts"

import type * as __goscript_handshake_client_tls13 from "./handshake_client_tls13.gs.ts"

import * as __goscript_handshake_messages from "./handshake_messages.gs.ts"

import type * as __goscript_handshake_server from "./handshake_server.gs.ts"

import type * as __goscript_handshake_server_tls13 from "./handshake_server_tls13.gs.ts"

import type * as __goscript_key_schedule from "./key_schedule.gs.ts"

import * as __goscript_quic from "./quic.gs.ts"
import "@goscript/crypto/aes/index.js"
import "@goscript/crypto/cipher/index.js"
import "@goscript/crypto/hmac/index.js"
import "@goscript/crypto/sha256/index.js"
import "@goscript/crypto/subtle/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/index.js"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/crypto/hpke/index.js"
import "@goscript/hash/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "./cache.gs.ts"
import "./common.gs.ts"
import "./common_string.gs.ts"
import "./conn.gs.ts"
import "./ech.gs.ts"
import "./handshake_messages.gs.ts"
import "./quic.gs.ts"

$.registerTypePackagePath("crypto/tls", ["tls.SessionState", "tls.ClientSessionState"])

export class SessionState {
	// Extra is ignored by crypto/tls, but is encoded by [SessionState.Bytes]
	// and parsed by [ParseSessionState].
	//
	// This allows [Config.UnwrapSession]/[Config.WrapSession] and
	// [ClientSessionCache] implementations to store and retrieve additional
	// data alongside this session.
	//
	// To allow different layers in a protocol stack to share this field,
	// applications must only append to it, not replace it, and must use entries
	// that can be recognized even if out of order (for example, by starting
	// with an id and version prefix).
	public get Extra(): $.Slice<$.Slice<number>> {
		return this._fields.Extra
	}

	public set Extra(value: $.Slice<$.Slice<number>>) {
		this._fields.Extra = value
	}

	// EarlyData indicates whether the ticket can be used for 0-RTT in a QUIC
	// connection. The application may set this to false if it is true to
	// decline to offer 0-RTT even if supported.
	public get EarlyData(): boolean {
		return this._fields.EarlyData
	}

	public set EarlyData(value: boolean) {
		this._fields.EarlyData = value
	}

	public get version(): number {
		return this._fields.version
	}

	public set version(value: number) {
		this._fields.version = value
	}

	public get isClient(): boolean {
		return this._fields.isClient
	}

	public set isClient(value: boolean) {
		this._fields.isClient = value
	}

	public get cipherSuite(): number {
		return this._fields.cipherSuite
	}

	public set cipherSuite(value: number) {
		this._fields.cipherSuite = value
	}

	// createdAt is the generation time of the secret on the server (which for
	// TLS 1.0–1.2 might be earlier than the current session) and the time at
	// which the ticket was received on the client.
	public get createdAt(): bigint {
		return this._fields.createdAt
	}

	public set createdAt(value: bigint) {
		this._fields.createdAt = value
	}

	public get secret(): $.Slice<number> {
		return this._fields.secret
	}

	public set secret(value: $.Slice<number>) {
		this._fields.secret = value
	}

	public get extMasterSecret(): boolean {
		return this._fields.extMasterSecret
	}

	public set extMasterSecret(value: boolean) {
		this._fields.extMasterSecret = value
	}

	public get peerCertificates(): $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null> {
		return this._fields.peerCertificates
	}

	public set peerCertificates(value: $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>) {
		this._fields.peerCertificates = value
	}

	public get ocspResponse(): $.Slice<number> {
		return this._fields.ocspResponse
	}

	public set ocspResponse(value: $.Slice<number>) {
		this._fields.ocspResponse = value
	}

	public get scts(): $.Slice<$.Slice<number>> {
		return this._fields.scts
	}

	public set scts(value: $.Slice<$.Slice<number>>) {
		this._fields.scts = value
	}

	public get verifiedChains(): $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>> {
		return this._fields.verifiedChains
	}

	public set verifiedChains(value: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>) {
		this._fields.verifiedChains = value
	}

	public get alpnProtocol(): string {
		return this._fields.alpnProtocol
	}

	public set alpnProtocol(value: string) {
		this._fields.alpnProtocol = value
	}

	// Client-side TLS 1.3-only fields.
	public get useBy(): bigint {
		return this._fields.useBy
	}

	public set useBy(value: bigint) {
		this._fields.useBy = value
	}

	public get ageAdd(): number {
		return this._fields.ageAdd
	}

	public set ageAdd(value: number) {
		this._fields.ageAdd = value
	}

	public get ticket(): $.Slice<number> {
		return this._fields.ticket
	}

	public set ticket(value: $.Slice<number>) {
		this._fields.ticket = value
	}

	// TLS 1.0–1.2 only fields.
	public get curveID(): __goscript_common.CurveID {
		return this._fields.curveID
	}

	public set curveID(value: __goscript_common.CurveID) {
		this._fields.curveID = value
	}

	public _fields: {
		Extra: $.Slice<$.Slice<number>>
		EarlyData: boolean
		version: number
		isClient: boolean
		cipherSuite: number
		createdAt: bigint
		secret: $.Slice<number>
		extMasterSecret: boolean
		peerCertificates: $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>
		ocspResponse: $.Slice<number>
		scts: $.Slice<$.Slice<number>>
		verifiedChains: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>
		alpnProtocol: string
		useBy: bigint
		ageAdd: number
		ticket: $.Slice<number>
		curveID: __goscript_common.CurveID
	}

	constructor(init?: Partial<{Extra?: $.Slice<$.Slice<number>>, EarlyData?: boolean, version?: number, isClient?: boolean, cipherSuite?: number, createdAt?: bigint, secret?: $.Slice<number>, extMasterSecret?: boolean, peerCertificates?: $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>, ocspResponse?: $.Slice<number>, scts?: $.Slice<$.Slice<number>>, verifiedChains?: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>, alpnProtocol?: string, useBy?: bigint, ageAdd?: number, ticket?: $.Slice<number>, curveID?: __goscript_common.CurveID}>, __goscriptValue?: boolean) {
		this._fields = {
			Extra: init?.Extra ?? (null! as $.Slice<$.Slice<number>>),
			EarlyData: init?.EarlyData ?? (false as boolean),
			version: init?.version ?? (0 as number),
			isClient: init?.isClient ?? (false as boolean),
			cipherSuite: init?.cipherSuite ?? (0 as number),
			createdAt: init?.createdAt ?? (0n as bigint),
			secret: init?.secret ?? (null! as $.Slice<number>),
			extMasterSecret: init?.extMasterSecret ?? (false as boolean),
			peerCertificates: init?.peerCertificates ?? (null! as $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>),
			ocspResponse: init?.ocspResponse ?? (null! as $.Slice<number>),
			scts: init?.scts ?? (null! as $.Slice<$.Slice<number>>),
			verifiedChains: init?.verifiedChains ?? (null! as $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>),
			alpnProtocol: init?.alpnProtocol ?? ("" as string),
			useBy: init?.useBy ?? (0n as bigint),
			ageAdd: init?.ageAdd ?? (0 as number),
			ticket: init?.ticket ?? (null! as $.Slice<number>),
			curveID: init?.curveID ?? (0 as __goscript_common.CurveID)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SessionState {
		return new SessionState(this, true)
	}

	public __goscriptAssign(source: SessionState): void {
		const target = this._fields
		const values = source._fields
		target.Extra = values.Extra
		target.EarlyData = values.EarlyData
		target.version = values.version
		target.isClient = values.isClient
		target.cipherSuite = values.cipherSuite
		target.createdAt = values.createdAt
		target.secret = values.secret
		target.extMasterSecret = values.extMasterSecret
		target.peerCertificates = values.peerCertificates
		target.ocspResponse = values.ocspResponse
		target.scts = values.scts
		target.verifiedChains = values.verifiedChains
		target.alpnProtocol = values.alpnProtocol
		target.useBy = values.useBy
		target.ageAdd = values.ageAdd
		target.ticket = values.ticket
		target.curveID = values.curveID
	}

	public async Bytes(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const s: SessionState | $.VarRef<SessionState> | null = this;
		const s$: SessionState = s == null ? $.pointerTarget<SessionState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<SessionState>(s)
		let b: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))
		b.value.AddUint16((s$ as SessionState).version)
		if ((s$ as SessionState).isClient) {
			b.value.AddUint8(2)
		} else {
			b.value.AddUint8(1)
		}
		b.value.AddUint16((s$ as SessionState).cipherSuite)
		__goscript_handshake_messages.addUint64(b, (s$ as SessionState).createdAt)
		await b.value.AddUint8LengthPrefixed($.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes((s$ as SessionState).secret) : cryptobyte.Builder.prototype.AddBytes.call(b, (s$ as SessionState).secret))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		await b.value.AddUint24LengthPrefixed($.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
			for (let __goscriptRangeTarget0 = (s$ as SessionState).Extra, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let extra = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as $.Slice<number>)
				await cryptobyte.Builder.prototype.AddUint24LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes(extra) : cryptobyte.Builder.prototype.AddBytes.call(b, extra))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		if ((s$ as SessionState).extMasterSecret) {
			b.value.AddUint8(1)
		} else {
			b.value.AddUint8(0)
		}
		if ((s$ as SessionState).EarlyData) {
			b.value.AddUint8(1)
		} else {
			b.value.AddUint8(0)
		}
		await __goscript_handshake_messages.marshalCertificate(b, (() => { const __goscriptLiteralField0 = certificatesToBytesSlice((s$ as SessionState).peerCertificates); return new __goscript_common.Certificate({Certificate: __goscriptLiteralField0, OCSPStaple: (s$ as SessionState).ocspResponse, SignedCertificateTimestamps: (s$ as SessionState).scts}, true) })())
		await b.value.AddUint24LengthPrefixed($.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
			for (let __goscriptRangeTarget2 = (s$ as SessionState).verifiedChains, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let chain = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>)
				await cryptobyte.Builder.prototype.AddUint24LengthPrefixed.call(b, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					// We elide the first certificate because it's always the leaf.
					if ($.sliceLen(chain) == 0) {
						void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).SetError(errors.New("tls: internal error: empty verified chain")) : cryptobyte.Builder.prototype.SetError.call(b, errors.New("tls: internal error: empty verified chain")))
						return
					}
					for (let __goscriptRangeTarget1 = $.goSlice(chain, 1, undefined), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
						let cert = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as x509.Certificate | $.VarRef<x509.Certificate> | null)
						await cryptobyte.Builder.prototype.AddUint24LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
							void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes($.pointerValue<x509.Certificate>(cert).Raw) : cryptobyte.Builder.prototype.AddBytes.call(b, $.pointerValue<x509.Certificate>(cert).Raw))
						}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
					}
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		if ((s$ as SessionState).EarlyData) {
			await b.value.AddUint8LengthPrefixed($.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
				void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes($.stringToBytes((s$ as SessionState).alpnProtocol)) : cryptobyte.Builder.prototype.AddBytes.call(b, $.stringToBytes((s$ as SessionState).alpnProtocol)))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		if ((s$ as SessionState).version >= 772) {
			if ((s$ as SessionState).isClient) {
				__goscript_handshake_messages.addUint64(b, (s$ as SessionState).useBy)
				b.value.AddUint32((s$ as SessionState).ageAdd)
			}
		} else {
			b.value.AddUint16($.uint((s$ as SessionState).curveID, 16))
		}
		return b.value.Bytes()
	}

	static __typeInfo = $.registerStructType(
		"tls.SessionState",
		() => new SessionState(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true)],
		SessionState,
		() => [/* @__PURE__ */ $.structField("Extra", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [0], 0, true), /* @__PURE__ */ $.structField("EarlyData", /* @__PURE__ */ $.basicType("bool"), [1], 24, true), /* @__PURE__ */ $.structField("version", /* @__PURE__ */ $.basicType("uint16"), [2], 26, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("isClient", /* @__PURE__ */ $.basicType("bool"), [3], 28, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("cipherSuite", /* @__PURE__ */ $.basicType("uint16"), [4], 30, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("createdAt", /* @__PURE__ */ $.basicType("uint64"), [5], 32, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("secret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 40, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("extMasterSecret", /* @__PURE__ */ $.basicType("bool"), [7], 64, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("peerCertificates", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate")), [8], 72, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ocspResponse", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [9], 96, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("scts", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [10], 120, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("verifiedChains", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate"))), [11], 144, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("alpnProtocol", /* @__PURE__ */ $.basicType("string"), [12], 168, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("useBy", /* @__PURE__ */ $.basicType("uint64"), [13], 184, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ageAdd", /* @__PURE__ */ $.basicType("uint32"), [14], 192, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ticket", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [15], 200, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("curveID", /* @__PURE__ */ $.basicType("uint16", "tls.CurveID"), [16], 224, false, { pkgPath: "crypto/tls" })]
	)
}

export class ClientSessionState {
	public get session(): SessionState | $.VarRef<SessionState> | null {
		return this._fields.session
	}

	public set session(value: SessionState | $.VarRef<SessionState> | null) {
		this._fields.session = value
	}

	public _fields: {
		session: SessionState | $.VarRef<SessionState> | null
	}

	constructor(init?: Partial<{session?: SessionState | $.VarRef<SessionState> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			session: init?.session ?? (null! as SessionState | $.VarRef<SessionState> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientSessionState {
		return new ClientSessionState(this, true)
	}

	public __goscriptAssign(source: ClientSessionState): void {
		const target = this._fields
		const values = source._fields
		target.session = values.session
	}

	public ResumptionState(): [$.Slice<number>, SessionState | $.VarRef<SessionState> | null, $.GoError] {
		const cs: ClientSessionState | $.VarRef<ClientSessionState> | null = this;
		let ticket: $.Slice<number> = null! as $.Slice<number>
		let state: SessionState | $.VarRef<SessionState> | null = null! as SessionState | $.VarRef<SessionState> | null
		let err: $.GoError = null! as $.GoError
		const cs$: ClientSessionState = cs == null ? $.pointerTarget<ClientSessionState>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<ClientSessionState>(cs)
		if ((cs == null) || ((cs$ as ClientSessionState).session == null)) {
			return [null, null, null]
		}
		return [$.pointerValue<SessionState>((cs$ as ClientSessionState).session).ticket, (cs$ as ClientSessionState).session, null]
	}

	static __typeInfo = $.registerStructType(
		"tls.ClientSessionState",
		() => new ClientSessionState(),
		() => [$.methodSignature("ResumptionState", [], [["ticket", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["state", /* @__PURE__ */ $.pointerType("tls.SessionState")], ["err", "error"]], true)],
		ClientSessionState,
		() => [/* @__PURE__ */ $.structField("session", /* @__PURE__ */ $.pointerType("tls.SessionState"), [0], 0, false, { pkgPath: "crypto/tls" })]
	)
}

export function certificatesToBytesSlice(certs: $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>): $.Slice<$.Slice<number>> {
	let s: $.Slice<$.Slice<number>> = $.makeSlice<$.Slice<number>>(0, $.sliceLen(certs))
	for (let __goscriptRangeTarget3 = certs, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let c = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as x509.Certificate | $.VarRef<x509.Certificate> | null)
		s = $.appendOne(s, $.pointerValue<x509.Certificate>(c).Raw, $.appendZeros.nil)
	}
	return s
}

export async function ParseSessionState(data: $.Slice<number>): globalThis.Promise<[SessionState | $.VarRef<SessionState> | null, $.GoError]> {
	let ss: SessionState | $.VarRef<SessionState> | null = new SessionState()
	let ss$: SessionState = ss == null ? $.pointerTarget<SessionState>(ss) : (ss as any).__isVarRef === true ? (ss as any).value : (ss as any).__goValue === undefined ? (ss as any) : $.pointerTarget<SessionState>(ss)
	let s: $.VarRef<cryptobyte.String> = $.varRef(((data as cryptobyte.String) as cryptobyte.String))
	let typ: $.VarRef<number> = $.varRef(0)
	let extMasterSecret: $.VarRef<number> = $.varRef(0)
	let earlyData: $.VarRef<number> = $.varRef(0)
	let cert: $.VarRef<__goscript_common.Certificate> = $.varRef(new __goscript_common.Certificate(undefined, true))
	let extra: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (((((((((!cryptobyte.String_ReadUint16(s, $.fieldRef((ss$ as SessionState)._fields, "version")) || !cryptobyte.String_ReadUint8(s, typ)) || !cryptobyte.String_ReadUint16(s, $.fieldRef((ss$ as SessionState)._fields, "cipherSuite"))) || !__goscript_handshake_messages.readUint64(s, $.fieldRef((ss$ as SessionState)._fields, "createdAt"))) || !__goscript_handshake_messages.readUint8LengthPrefixed(s, $.fieldRef((ss$ as SessionState)._fields, "secret"))) || !cryptobyte.String_ReadUint24LengthPrefixed(s, extra)) || !cryptobyte.String_ReadUint8(s, extMasterSecret)) || !cryptobyte.String_ReadUint8(s, earlyData)) || ($.sliceLen((ss$ as SessionState).secret) == 0)) || !__goscript_handshake_messages.unmarshalCertificate(s, cert)) {
		return [null, errors.New("tls: invalid session encoding")]
	}
	while (!cryptobyte.String_Empty(extra.value)) {
		let e: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
		if (!__goscript_handshake_messages.readUint24LengthPrefixed(extra, e)) {
			return [null, errors.New("tls: invalid session encoding")]
		}
		;(ss$ as SessionState).Extra = $.appendOne((ss$ as SessionState).Extra, e.value, $.appendZeros.nil)
	}
	switch (typ.value) {
		case 1:
		{
			;(ss$ as SessionState).isClient = false
			break
		}
		case 2:
		{
			;(ss$ as SessionState).isClient = true
			break
		}
		default:
		{
			return [null, errors.New("tls: unknown session encoding")]
			break
		}
	}
	switch (extMasterSecret.value) {
		case 0:
		{
			;(ss$ as SessionState).extMasterSecret = false
			break
		}
		case 1:
		{
			;(ss$ as SessionState).extMasterSecret = true
			break
		}
		default:
		{
			return [null, errors.New("tls: invalid session encoding")]
			break
		}
	}
	switch (earlyData.value) {
		case 0:
		{
			;(ss$ as SessionState).EarlyData = false
			break
		}
		case 1:
		{
			;(ss$ as SessionState).EarlyData = true
			break
		}
		default:
		{
			return [null, errors.New("tls: invalid session encoding")]
			break
		}
	}
	for (let __goscriptRangeTarget4 = cert.value.Certificate, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let __goscriptRangeShadow0 = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as $.Slice<number>)
		let __goscriptTuple0: any = await __goscript_cache.weakCertCache.prototype.newCert.call(__goscript_cache.globalCertCache, __goscriptRangeShadow0)
		let c: x509.Certificate | $.VarRef<x509.Certificate> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		;(ss$ as SessionState).peerCertificates = $.appendOne((ss$ as SessionState).peerCertificates, c, $.appendZeros.nil)
	}
	if ((ss$ as SessionState).isClient && ($.sliceLen((ss$ as SessionState).peerCertificates) == 0)) {
		return [null, errors.New("tls: no server certificates in client session")]
	}
	;(ss$ as SessionState).ocspResponse = cert.value.OCSPStaple;
	;(ss$ as SessionState).scts = cert.value.SignedCertificateTimestamps
	let chainList: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadUint24LengthPrefixed(s, chainList)) {
		return [null, errors.New("tls: invalid session encoding")]
	}
	while (!cryptobyte.String_Empty(chainList.value)) {
		let certList: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
		if (!cryptobyte.String_ReadUint24LengthPrefixed(chainList, certList)) {
			return [null, errors.New("tls: invalid session encoding")]
		}
		let chain: $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null> = null! as $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>
		if ($.sliceLen((ss$ as SessionState).peerCertificates) == 0) {
			return [null, errors.New("tls: invalid session encoding")]
		}
		chain = $.appendOne(chain, $.arrayIndex((ss$ as SessionState).peerCertificates!, 0), $.appendZeros.nil)
		while (!cryptobyte.String_Empty(certList.value)) {
			let __goscriptShadow0: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
			if (!__goscript_handshake_messages.readUint24LengthPrefixed(certList, __goscriptShadow0)) {
				return [null, errors.New("tls: invalid session encoding")]
			}
			let __goscriptTuple1: any = await __goscript_cache.weakCertCache.prototype.newCert.call(__goscript_cache.globalCertCache, __goscriptShadow0.value)
			let c: x509.Certificate | $.VarRef<x509.Certificate> | null = __goscriptTuple1[0]
			let err = __goscriptTuple1[1]
			if (err != null) {
				return [null, err]
			}
			chain = $.appendOne(chain, c, $.appendZeros.nil)
		}
		;(ss$ as SessionState).verifiedChains = $.appendOne((ss$ as SessionState).verifiedChains, chain, $.appendZeros.nil)
	}
	if ((ss$ as SessionState).EarlyData) {
		let alpn: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
		if (!__goscript_handshake_messages.readUint8LengthPrefixed(s, alpn)) {
			return [null, errors.New("tls: invalid session encoding")]
		}
		;(ss$ as SessionState).alpnProtocol = $.bytesToString(alpn.value)
	}
	if ((ss$ as SessionState).version >= 772) {
		if ((ss$ as SessionState).isClient) {
			if (!cryptobyte.String_ReadUint64(s, $.fieldRef((ss$ as SessionState)._fields, "useBy")) || !cryptobyte.String_ReadUint32(s, $.fieldRef((ss$ as SessionState)._fields, "ageAdd"))) {
				return [null, errors.New("tls: invalid session encoding")]
			}
		}
	} else {
		if (!cryptobyte.String_ReadUint16(s, $.fieldRef((ss$ as SessionState)._fields, "curveID"))) {
			return [null, errors.New("tls: invalid session encoding")]
		}
	}
	return [ss, null]
}

export function NewResumptionState(ticket: $.Slice<number>, state: SessionState | $.VarRef<SessionState> | null): [ClientSessionState | $.VarRef<ClientSessionState> | null, $.GoError] {
	$.pointerValue<SessionState>(state).ticket = ticket
	return [new ClientSessionState({session: state}), null]
}
