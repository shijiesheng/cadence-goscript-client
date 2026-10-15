// Generated file based on handshake_messages.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strings from "@goscript/strings/index.js"

import * as cryptobyte from "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as __goscript_common from "./common.gs.ts"

import * as __goscript_common_string from "./common_string.gs.ts"

import * as __goscript_ech from "./ech.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/slices/index.js"
import "@goscript/strings/index.js"
import "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"
import "@goscript/crypto/index.js"
import "@goscript/crypto/x509/index.js"
import "./common.gs.ts"
import "./common_string.gs.ts"
import "./ech.gs.ts"

$.registerTypePackagePath("crypto/tls", ["tls.marshalingFunction", "tls.clientHelloMsg", "tls.serverHelloMsg", "tls.encryptedExtensionsMsg", "tls.endOfEarlyDataMsg", "tls.keyUpdateMsg", "tls.newSessionTicketMsgTLS13", "tls.certificateRequestMsgTLS13", "tls.certificateMsg", "tls.certificateMsgTLS13", "tls.serverKeyExchangeMsg", "tls.certificateStatusMsg", "tls.serverHelloDoneMsg", "tls.clientKeyExchangeMsg", "tls.finishedMsg", "tls.certificateRequestMsg", "tls.certificateVerifyMsg", "tls.newSessionTicketMsg", "tls.helloRequestMsg", "tls.transcriptHash"])

export type marshalingFunction = ((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null) => $.GoError | globalThis.Promise<$.GoError>) | null

$.registerNamedValueType(
	"tls.marshalingFunction",
	{Marshal: (receiver: any, ...args: any[]) => (marshalingFunction_Marshal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Marshal", [["b", /* @__PURE__ */ $.pointerType("cryptobyte.Builder")]], ["error"])]
);

$.registerNamedValueType(
	"*tls.marshalingFunction",
	{Marshal: (receiver: any, ...args: any[]) => (marshalingFunction_Marshal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Marshal", [["b", /* @__PURE__ */ $.pointerType("cryptobyte.Builder")]], ["error"])]
);

export type transcriptHash = {
	Write(_p0: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"tls.transcriptHash",
	null,
	[$.methodSignature("Write", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [/* @__PURE__ */ $.basicType("int"), "error"])]
);

export class clientHelloMsg {
	public get original(): $.Slice<number> {
		return this._fields.original
	}

	public set original(value: $.Slice<number>) {
		this._fields.original = value
	}

	public get vers(): number {
		return this._fields.vers
	}

	public set vers(value: number) {
		this._fields.vers = value
	}

	public get random(): $.Slice<number> {
		return this._fields.random
	}

	public set random(value: $.Slice<number>) {
		this._fields.random = value
	}

	public get sessionId(): $.Slice<number> {
		return this._fields.sessionId
	}

	public set sessionId(value: $.Slice<number>) {
		this._fields.sessionId = value
	}

	public get cipherSuites(): $.Slice<number> {
		return this._fields.cipherSuites
	}

	public set cipherSuites(value: $.Slice<number>) {
		this._fields.cipherSuites = value
	}

	public get compressionMethods(): $.Slice<number> {
		return this._fields.compressionMethods
	}

	public set compressionMethods(value: $.Slice<number>) {
		this._fields.compressionMethods = value
	}

	public get serverName(): string {
		return this._fields.serverName
	}

	public set serverName(value: string) {
		this._fields.serverName = value
	}

	public get ocspStapling(): boolean {
		return this._fields.ocspStapling
	}

	public set ocspStapling(value: boolean) {
		this._fields.ocspStapling = value
	}

	public get supportedCurves(): $.Slice<__goscript_common.CurveID> {
		return this._fields.supportedCurves
	}

	public set supportedCurves(value: $.Slice<__goscript_common.CurveID>) {
		this._fields.supportedCurves = value
	}

	public get supportedPoints(): $.Slice<number> {
		return this._fields.supportedPoints
	}

	public set supportedPoints(value: $.Slice<number>) {
		this._fields.supportedPoints = value
	}

	public get ticketSupported(): boolean {
		return this._fields.ticketSupported
	}

	public set ticketSupported(value: boolean) {
		this._fields.ticketSupported = value
	}

	public get sessionTicket(): $.Slice<number> {
		return this._fields.sessionTicket
	}

	public set sessionTicket(value: $.Slice<number>) {
		this._fields.sessionTicket = value
	}

	public get supportedSignatureAlgorithms(): $.Slice<__goscript_common.SignatureScheme> {
		return this._fields.supportedSignatureAlgorithms
	}

	public set supportedSignatureAlgorithms(value: $.Slice<__goscript_common.SignatureScheme>) {
		this._fields.supportedSignatureAlgorithms = value
	}

	public get supportedSignatureAlgorithmsCert(): $.Slice<__goscript_common.SignatureScheme> {
		return this._fields.supportedSignatureAlgorithmsCert
	}

	public set supportedSignatureAlgorithmsCert(value: $.Slice<__goscript_common.SignatureScheme>) {
		this._fields.supportedSignatureAlgorithmsCert = value
	}

	public get secureRenegotiationSupported(): boolean {
		return this._fields.secureRenegotiationSupported
	}

	public set secureRenegotiationSupported(value: boolean) {
		this._fields.secureRenegotiationSupported = value
	}

	public get secureRenegotiation(): $.Slice<number> {
		return this._fields.secureRenegotiation
	}

	public set secureRenegotiation(value: $.Slice<number>) {
		this._fields.secureRenegotiation = value
	}

	public get extendedMasterSecret(): boolean {
		return this._fields.extendedMasterSecret
	}

	public set extendedMasterSecret(value: boolean) {
		this._fields.extendedMasterSecret = value
	}

	public get alpnProtocols(): $.Slice<string> {
		return this._fields.alpnProtocols
	}

	public set alpnProtocols(value: $.Slice<string>) {
		this._fields.alpnProtocols = value
	}

	public get scts(): boolean {
		return this._fields.scts
	}

	public set scts(value: boolean) {
		this._fields.scts = value
	}

	public get supportedVersions(): $.Slice<number> {
		return this._fields.supportedVersions
	}

	public set supportedVersions(value: $.Slice<number>) {
		this._fields.supportedVersions = value
	}

	public get cookie(): $.Slice<number> {
		return this._fields.cookie
	}

	public set cookie(value: $.Slice<number>) {
		this._fields.cookie = value
	}

	public get keyShares(): $.Slice<__goscript_common.keyShare> {
		return this._fields.keyShares
	}

	public set keyShares(value: $.Slice<__goscript_common.keyShare>) {
		this._fields.keyShares = value
	}

	public get earlyData(): boolean {
		return this._fields.earlyData
	}

	public set earlyData(value: boolean) {
		this._fields.earlyData = value
	}

	public get pskModes(): $.Slice<number> {
		return this._fields.pskModes
	}

	public set pskModes(value: $.Slice<number>) {
		this._fields.pskModes = value
	}

	public get pskIdentities(): $.Slice<__goscript_common.pskIdentity> {
		return this._fields.pskIdentities
	}

	public set pskIdentities(value: $.Slice<__goscript_common.pskIdentity>) {
		this._fields.pskIdentities = value
	}

	public get pskBinders(): $.Slice<$.Slice<number>> {
		return this._fields.pskBinders
	}

	public set pskBinders(value: $.Slice<$.Slice<number>>) {
		this._fields.pskBinders = value
	}

	public get quicTransportParameters(): $.Slice<number> {
		return this._fields.quicTransportParameters
	}

	public set quicTransportParameters(value: $.Slice<number>) {
		this._fields.quicTransportParameters = value
	}

	public get encryptedClientHello(): $.Slice<number> {
		return this._fields.encryptedClientHello
	}

	public set encryptedClientHello(value: $.Slice<number>) {
		this._fields.encryptedClientHello = value
	}

	// extensions are only populated on the server-side of a handshake
	public get extensions(): $.Slice<number> {
		return this._fields.extensions
	}

	public set extensions(value: $.Slice<number>) {
		this._fields.extensions = value
	}

	public _fields: {
		original: $.Slice<number>
		vers: number
		random: $.Slice<number>
		sessionId: $.Slice<number>
		cipherSuites: $.Slice<number>
		compressionMethods: $.Slice<number>
		serverName: string
		ocspStapling: boolean
		supportedCurves: $.Slice<__goscript_common.CurveID>
		supportedPoints: $.Slice<number>
		ticketSupported: boolean
		sessionTicket: $.Slice<number>
		supportedSignatureAlgorithms: $.Slice<__goscript_common.SignatureScheme>
		supportedSignatureAlgorithmsCert: $.Slice<__goscript_common.SignatureScheme>
		secureRenegotiationSupported: boolean
		secureRenegotiation: $.Slice<number>
		extendedMasterSecret: boolean
		alpnProtocols: $.Slice<string>
		scts: boolean
		supportedVersions: $.Slice<number>
		cookie: $.Slice<number>
		keyShares: $.Slice<__goscript_common.keyShare>
		earlyData: boolean
		pskModes: $.Slice<number>
		pskIdentities: $.Slice<__goscript_common.pskIdentity>
		pskBinders: $.Slice<$.Slice<number>>
		quicTransportParameters: $.Slice<number>
		encryptedClientHello: $.Slice<number>
		extensions: $.Slice<number>
	}

	constructor(init?: Partial<{original?: $.Slice<number>, vers?: number, random?: $.Slice<number>, sessionId?: $.Slice<number>, cipherSuites?: $.Slice<number>, compressionMethods?: $.Slice<number>, serverName?: string, ocspStapling?: boolean, supportedCurves?: $.Slice<__goscript_common.CurveID>, supportedPoints?: $.Slice<number>, ticketSupported?: boolean, sessionTicket?: $.Slice<number>, supportedSignatureAlgorithms?: $.Slice<__goscript_common.SignatureScheme>, supportedSignatureAlgorithmsCert?: $.Slice<__goscript_common.SignatureScheme>, secureRenegotiationSupported?: boolean, secureRenegotiation?: $.Slice<number>, extendedMasterSecret?: boolean, alpnProtocols?: $.Slice<string>, scts?: boolean, supportedVersions?: $.Slice<number>, cookie?: $.Slice<number>, keyShares?: $.Slice<__goscript_common.keyShare>, earlyData?: boolean, pskModes?: $.Slice<number>, pskIdentities?: $.Slice<__goscript_common.pskIdentity>, pskBinders?: $.Slice<$.Slice<number>>, quicTransportParameters?: $.Slice<number>, encryptedClientHello?: $.Slice<number>, extensions?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			original: init?.original ?? (null! as $.Slice<number>),
			vers: init?.vers ?? (0 as number),
			random: init?.random ?? (null! as $.Slice<number>),
			sessionId: init?.sessionId ?? (null! as $.Slice<number>),
			cipherSuites: init?.cipherSuites ?? (null! as $.Slice<number>),
			compressionMethods: init?.compressionMethods ?? (null! as $.Slice<number>),
			serverName: init?.serverName ?? ("" as string),
			ocspStapling: init?.ocspStapling ?? (false as boolean),
			supportedCurves: init?.supportedCurves ?? (null! as $.Slice<__goscript_common.CurveID>),
			supportedPoints: init?.supportedPoints ?? (null! as $.Slice<number>),
			ticketSupported: init?.ticketSupported ?? (false as boolean),
			sessionTicket: init?.sessionTicket ?? (null! as $.Slice<number>),
			supportedSignatureAlgorithms: init?.supportedSignatureAlgorithms ?? (null! as $.Slice<__goscript_common.SignatureScheme>),
			supportedSignatureAlgorithmsCert: init?.supportedSignatureAlgorithmsCert ?? (null! as $.Slice<__goscript_common.SignatureScheme>),
			secureRenegotiationSupported: init?.secureRenegotiationSupported ?? (false as boolean),
			secureRenegotiation: init?.secureRenegotiation ?? (null! as $.Slice<number>),
			extendedMasterSecret: init?.extendedMasterSecret ?? (false as boolean),
			alpnProtocols: init?.alpnProtocols ?? (null! as $.Slice<string>),
			scts: init?.scts ?? (false as boolean),
			supportedVersions: init?.supportedVersions ?? (null! as $.Slice<number>),
			cookie: init?.cookie ?? (null! as $.Slice<number>),
			keyShares: init?.keyShares ?? (null! as $.Slice<__goscript_common.keyShare>),
			earlyData: init?.earlyData ?? (false as boolean),
			pskModes: init?.pskModes ?? (null! as $.Slice<number>),
			pskIdentities: init?.pskIdentities ?? (null! as $.Slice<__goscript_common.pskIdentity>),
			pskBinders: init?.pskBinders ?? (null! as $.Slice<$.Slice<number>>),
			quicTransportParameters: init?.quicTransportParameters ?? (null! as $.Slice<number>),
			encryptedClientHello: init?.encryptedClientHello ?? (null! as $.Slice<number>),
			extensions: init?.extensions ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public __goscriptClone(): clientHelloMsg {
		return new clientHelloMsg(this, true)
	}

	public __goscriptAssign(source: clientHelloMsg): void {
		const target = this._fields
		const values = source._fields
		target.original = values.original
		target.vers = values.vers
		target.random = values.random
		target.sessionId = values.sessionId
		target.cipherSuites = values.cipherSuites
		target.compressionMethods = values.compressionMethods
		target.serverName = values.serverName
		target.ocspStapling = values.ocspStapling
		target.supportedCurves = values.supportedCurves
		target.supportedPoints = values.supportedPoints
		target.ticketSupported = values.ticketSupported
		target.sessionTicket = values.sessionTicket
		target.supportedSignatureAlgorithms = values.supportedSignatureAlgorithms
		target.supportedSignatureAlgorithmsCert = values.supportedSignatureAlgorithmsCert
		target.secureRenegotiationSupported = values.secureRenegotiationSupported
		target.secureRenegotiation = values.secureRenegotiation
		target.extendedMasterSecret = values.extendedMasterSecret
		target.alpnProtocols = values.alpnProtocols
		target.scts = values.scts
		target.supportedVersions = values.supportedVersions
		target.cookie = values.cookie
		target.keyShares = values.keyShares
		target.earlyData = values.earlyData
		target.pskModes = values.pskModes
		target.pskIdentities = values.pskIdentities
		target.pskBinders = values.pskBinders
		target.quicTransportParameters = values.quicTransportParameters
		target.encryptedClientHello = values.encryptedClientHello
		target.extensions = values.extensions
	}

	public clone(): clientHelloMsg | $.VarRef<clientHelloMsg> | null {
		const m: clientHelloMsg | $.VarRef<clientHelloMsg> | null = this;
		const m$: clientHelloMsg = m == null ? $.pointerTarget<clientHelloMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<clientHelloMsg>(m)
		return (() => { const __goscriptLiteralField0 = slices.Clone((m$ as clientHelloMsg).original); const __goscriptLiteralField1 = slices.Clone((m$ as clientHelloMsg).random); const __goscriptLiteralField2 = slices.Clone((m$ as clientHelloMsg).sessionId); const __goscriptLiteralField3 = slices.Clone((m$ as clientHelloMsg).cipherSuites); const __goscriptLiteralField4 = slices.Clone((m$ as clientHelloMsg).compressionMethods); const __goscriptLiteralField5 = slices.Clone((m$ as clientHelloMsg).supportedCurves); const __goscriptLiteralField6 = slices.Clone((m$ as clientHelloMsg).supportedPoints); const __goscriptLiteralField7 = slices.Clone((m$ as clientHelloMsg).sessionTicket); const __goscriptLiteralField8 = slices.Clone((m$ as clientHelloMsg).supportedSignatureAlgorithms); const __goscriptLiteralField9 = slices.Clone((m$ as clientHelloMsg).supportedSignatureAlgorithmsCert); const __goscriptLiteralField10 = slices.Clone((m$ as clientHelloMsg).secureRenegotiation); const __goscriptLiteralField11 = slices.Clone((m$ as clientHelloMsg).alpnProtocols); const __goscriptLiteralField12 = slices.Clone((m$ as clientHelloMsg).supportedVersions); const __goscriptLiteralField13 = slices.Clone((m$ as clientHelloMsg).cookie); const __goscriptLiteralField14 = slices.Clone((m$ as clientHelloMsg).keyShares); const __goscriptLiteralField15 = slices.Clone((m$ as clientHelloMsg).pskModes); const __goscriptLiteralField16 = slices.Clone((m$ as clientHelloMsg).pskIdentities); const __goscriptLiteralField17 = slices.Clone((m$ as clientHelloMsg).pskBinders); const __goscriptLiteralField18 = slices.Clone((m$ as clientHelloMsg).quicTransportParameters); const __goscriptLiteralField19 = slices.Clone((m$ as clientHelloMsg).encryptedClientHello); return new clientHelloMsg({original: __goscriptLiteralField0, vers: (m$ as clientHelloMsg).vers, random: __goscriptLiteralField1, sessionId: __goscriptLiteralField2, cipherSuites: __goscriptLiteralField3, compressionMethods: __goscriptLiteralField4, serverName: (m$ as clientHelloMsg).serverName, ocspStapling: (m$ as clientHelloMsg).ocspStapling, supportedCurves: __goscriptLiteralField5, supportedPoints: __goscriptLiteralField6, ticketSupported: (m$ as clientHelloMsg).ticketSupported, sessionTicket: __goscriptLiteralField7, supportedSignatureAlgorithms: __goscriptLiteralField8, supportedSignatureAlgorithmsCert: __goscriptLiteralField9, secureRenegotiationSupported: (m$ as clientHelloMsg).secureRenegotiationSupported, secureRenegotiation: __goscriptLiteralField10, extendedMasterSecret: (m$ as clientHelloMsg).extendedMasterSecret, alpnProtocols: __goscriptLiteralField11, scts: (m$ as clientHelloMsg).scts, supportedVersions: __goscriptLiteralField12, cookie: __goscriptLiteralField13, keyShares: __goscriptLiteralField14, earlyData: (m$ as clientHelloMsg).earlyData, pskModes: __goscriptLiteralField15, pskIdentities: __goscriptLiteralField16, pskBinders: __goscriptLiteralField17, quicTransportParameters: __goscriptLiteralField18, encryptedClientHello: __goscriptLiteralField19}) })()
	}

	public async marshal(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: clientHelloMsg | $.VarRef<clientHelloMsg> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as clientHelloMsg).marshalMsg(false) : clientHelloMsg.prototype.marshalMsg.call(m, false))
	}

	public async marshalMsg(echInner: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: clientHelloMsg | $.VarRef<clientHelloMsg> | null = this;
		const m$: clientHelloMsg = m == null ? $.pointerTarget<clientHelloMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<clientHelloMsg>(m)
		let exts: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))
		if ($.stringLen((m$ as clientHelloMsg).serverName) > 0) {
			// RFC 6066, Section 3
			exts.value.AddUint16(0)
			await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
				await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(exts, $.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddUint8(0) : cryptobyte.Builder.prototype.AddUint8.call(exts, 0))
					await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
						void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes($.stringToBytes((m$ as clientHelloMsg).serverName)) : cryptobyte.Builder.prototype.AddBytes.call(exts, $.stringToBytes((m$ as clientHelloMsg).serverName)))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		if (($.sliceLen((m$ as clientHelloMsg).supportedPoints) > 0) && !echInner) {
			// RFC 4492, Section 5.1.2
			exts.value.AddUint16(11)
			await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
				await cryptobyte.Builder.prototype.AddUint8LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
					void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes((m$ as clientHelloMsg).supportedPoints) : cryptobyte.Builder.prototype.AddBytes.call(exts, (m$ as clientHelloMsg).supportedPoints))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		if ((m$ as clientHelloMsg).ticketSupported && !echInner) {
			// RFC 5077, Section 3.2
			exts.value.AddUint16(35)
			await exts.value.AddUint16LengthPrefixed($.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
				void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes((m$ as clientHelloMsg).sessionTicket) : cryptobyte.Builder.prototype.AddBytes.call(exts, (m$ as clientHelloMsg).sessionTicket))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		if ((m$ as clientHelloMsg).secureRenegotiationSupported && !echInner) {
			// RFC 5746, Section 3.2
			exts.value.AddUint16(65281)
			await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
				await cryptobyte.Builder.prototype.AddUint8LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
					void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes((m$ as clientHelloMsg).secureRenegotiation) : cryptobyte.Builder.prototype.AddBytes.call(exts, (m$ as clientHelloMsg).secureRenegotiation))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		if ((m$ as clientHelloMsg).extendedMasterSecret && !echInner) {
			// RFC 7627
			exts.value.AddUint16(23)
			exts.value.AddUint16(0)
		}
		if ((m$ as clientHelloMsg).scts) {
			// RFC 6962, Section 3.3.1
			exts.value.AddUint16(18)
			exts.value.AddUint16(0)
		}
		if ((m$ as clientHelloMsg).earlyData) {
			// RFC 8446, Section 4.2.10
			exts.value.AddUint16(42)
			exts.value.AddUint16(0)
		}
		if ((m$ as clientHelloMsg).quicTransportParameters != null) {
			// RFC 9001, Section 8.2
			exts.value.AddUint16(57)
			await exts.value.AddUint16LengthPrefixed($.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
				void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes((m$ as clientHelloMsg).quicTransportParameters) : cryptobyte.Builder.prototype.AddBytes.call(exts, (m$ as clientHelloMsg).quicTransportParameters))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		if ($.sliceLen((m$ as clientHelloMsg).encryptedClientHello) > 0) {
			exts.value.AddUint16(65037)
			await exts.value.AddUint16LengthPrefixed($.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
				void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes((m$ as clientHelloMsg).encryptedClientHello) : cryptobyte.Builder.prototype.AddBytes.call(exts, (m$ as clientHelloMsg).encryptedClientHello))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		// Note that any extension that can be compressed during ECH must be
		// contiguous. If any additional extensions are to be compressed they must
		// be added to the following block, so that they can be properly
		// decompressed on the other side.
		let echOuterExts: $.Slice<number> = null! as $.Slice<number>
		if ((m$ as clientHelloMsg).ocspStapling) {
			// RFC 4366, Section 3.6
			if (echInner) {
				echOuterExts = $.appendOne(echOuterExts, $.uint(5, 16))
			} else {
				exts.value.AddUint16(5)
				await exts.value.AddUint16LengthPrefixed($.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
					void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddUint8(1) : cryptobyte.Builder.prototype.AddUint8.call(exts, 1))
					void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddUint16(0) : cryptobyte.Builder.prototype.AddUint16.call(exts, 0))
					void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddUint16(0) : cryptobyte.Builder.prototype.AddUint16.call(exts, 0))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}
		}
		if ($.sliceLen((m$ as clientHelloMsg).supportedCurves) > 0) {
			// RFC 4492, sections 5.1.1 and RFC 8446, Section 4.2.7
			if (echInner) {
				echOuterExts = $.appendOne(echOuterExts, $.uint(10, 16))
			} else {
				exts.value.AddUint16(10)
				await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
						for (let __goscriptRangeTarget0 = (m$ as clientHelloMsg).supportedCurves, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
							let curve = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_common.CurveID), 16)
							void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddUint16($.uint(curve, 16)) : cryptobyte.Builder.prototype.AddUint16.call(exts, $.uint(curve, 16)))
						}
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}
		}
		if ($.sliceLen((m$ as clientHelloMsg).supportedSignatureAlgorithms) > 0) {
			// RFC 5246, Section 7.4.1.4.1
			if (echInner) {
				echOuterExts = $.appendOne(echOuterExts, $.uint(13, 16))
			} else {
				exts.value.AddUint16(13)
				await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
						for (let __goscriptRangeTarget1 = (m$ as clientHelloMsg).supportedSignatureAlgorithms, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
							let sigAlgo = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_common.SignatureScheme), 16)
							void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddUint16($.uint(sigAlgo, 16)) : cryptobyte.Builder.prototype.AddUint16.call(exts, $.uint(sigAlgo, 16)))
						}
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}
		}
		if ($.sliceLen((m$ as clientHelloMsg).supportedSignatureAlgorithmsCert) > 0) {
			// RFC 8446, Section 4.2.3
			if (echInner) {
				echOuterExts = $.appendOne(echOuterExts, $.uint(50, 16))
			} else {
				exts.value.AddUint16(50)
				await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
						for (let __goscriptRangeTarget2 = (m$ as clientHelloMsg).supportedSignatureAlgorithmsCert, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
							let sigAlgo = $.uint((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_common.SignatureScheme), 16)
							void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddUint16($.uint(sigAlgo, 16)) : cryptobyte.Builder.prototype.AddUint16.call(exts, $.uint(sigAlgo, 16)))
						}
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}
		}
		if ($.sliceLen((m$ as clientHelloMsg).alpnProtocols) > 0) {
			// RFC 7301, Section 3.1
			if (echInner) {
				echOuterExts = $.appendOne(echOuterExts, $.uint(16, 16))
			} else {
				exts.value.AddUint16(16)
				await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(exts, $.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
						for (let __goscriptRangeTarget3 = (m$ as clientHelloMsg).alpnProtocols, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
							let proto = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
							await cryptobyte.Builder.prototype.AddUint8LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
								void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes($.stringToBytes(proto)) : cryptobyte.Builder.prototype.AddBytes.call(exts, $.stringToBytes(proto)))
							}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
						}
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}
		}
		if ($.sliceLen((m$ as clientHelloMsg).supportedVersions) > 0) {
			// RFC 8446, Section 4.2.1
			if (echInner) {
				echOuterExts = $.appendOne(echOuterExts, $.uint(43, 16))
			} else {
				exts.value.AddUint16(43)
				await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					await cryptobyte.Builder.prototype.AddUint8LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
						for (let __goscriptRangeTarget4 = (m$ as clientHelloMsg).supportedVersions, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
							let vers = $.uint((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as number), 16)
							void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddUint16(vers) : cryptobyte.Builder.prototype.AddUint16.call(exts, vers))
						}
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}
		}
		if ($.sliceLen((m$ as clientHelloMsg).cookie) > 0) {
			// RFC 8446, Section 4.2.2
			if (echInner) {
				echOuterExts = $.appendOne(echOuterExts, $.uint(44, 16))
			} else {
				exts.value.AddUint16(44)
				await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
						void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes((m$ as clientHelloMsg).cookie) : cryptobyte.Builder.prototype.AddBytes.call(exts, (m$ as clientHelloMsg).cookie))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}
		}
		if ($.sliceLen((m$ as clientHelloMsg).keyShares) > 0) {
			// RFC 8446, Section 4.2.8
			if (echInner) {
				echOuterExts = $.appendOne(echOuterExts, $.uint(51, 16))
			} else {
				exts.value.AddUint16(51)
				await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(exts, $.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
						for (let __goscriptRangeTarget5 = (m$ as clientHelloMsg).keyShares, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
							let ks = ((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as __goscript_common.keyShare)).clone()
							void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddUint16($.uint(ks.group, 16)) : cryptobyte.Builder.prototype.AddUint16.call(exts, $.uint(ks.group, 16)))
							await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
								void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes(ks.data) : cryptobyte.Builder.prototype.AddBytes.call(exts, ks.data))
							}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
						}
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}
		}
		if ($.sliceLen((m$ as clientHelloMsg).pskModes) > 0) {
			// RFC 8446, Section 4.2.9
			if (echInner) {
				echOuterExts = $.appendOne(echOuterExts, $.uint(45, 16))
			} else {
				exts.value.AddUint16(45)
				await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					await cryptobyte.Builder.prototype.AddUint8LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
						void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes((m$ as clientHelloMsg).pskModes) : cryptobyte.Builder.prototype.AddBytes.call(exts, (m$ as clientHelloMsg).pskModes))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}
		}
		if (($.sliceLen(echOuterExts) > 0) && echInner) {
			exts.value.AddUint16(64768)
			await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
				await cryptobyte.Builder.prototype.AddUint8LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
					for (let __goscriptRangeTarget6 = echOuterExts, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
						let e = $.uint((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as number), 16)
						void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddUint16(e) : cryptobyte.Builder.prototype.AddUint16.call(exts, e))
					}
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		// pre_shared_key must be the last extension
		if (($.sliceLen((m$ as clientHelloMsg).pskIdentities) > 0) && ((echInner || ($.sliceLen((m$ as clientHelloMsg).encryptedClientHello) == 0)) || bytes.Equal((m$ as clientHelloMsg).encryptedClientHello, new Uint8Array([1]) as $.Slice<number>))) {
			// RFC 8446, Section 4.2.11
			exts.value.AddUint16(41)
			await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
				await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(exts, $.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					for (let __goscriptRangeTarget7 = (m$ as clientHelloMsg).pskIdentities, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
						let psk = ((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as __goscript_common.pskIdentity)).clone()
						await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
							void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes(psk.label) : cryptobyte.Builder.prototype.AddBytes.call(exts, psk.label))
						}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
						void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddUint32(psk.obfuscatedTicketAge) : cryptobyte.Builder.prototype.AddUint32.call(exts, psk.obfuscatedTicketAge))
					}
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(exts, $.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					for (let __goscriptRangeTarget8 = (m$ as clientHelloMsg).pskBinders, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
						let binder = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as $.Slice<number>)
						await cryptobyte.Builder.prototype.AddUint8LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
							void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes(binder) : cryptobyte.Builder.prototype.AddBytes.call(exts, binder))
						}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
					}
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		let __goscriptTuple0: any = exts.value.Bytes()
		let extBytes: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}

		let b: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))
		b.value.AddUint8(1)
		await b.value.AddUint24LengthPrefixed($.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16((m$ as clientHelloMsg).vers) : cryptobyte.Builder.prototype.AddUint16.call(b, (m$ as clientHelloMsg).vers))
			await addBytesWithLength(b, (m$ as clientHelloMsg).random, 32)
			await cryptobyte.Builder.prototype.AddUint8LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
				if (!echInner) {
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes((m$ as clientHelloMsg).sessionId) : cryptobyte.Builder.prototype.AddBytes.call(b, (m$ as clientHelloMsg).sessionId))
				}
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
				for (let __goscriptRangeTarget9 = (m$ as clientHelloMsg).cipherSuites, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
					let suite = $.uint((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as number), 16)
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(suite) : cryptobyte.Builder.prototype.AddUint16.call(b, suite))
				}
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			await cryptobyte.Builder.prototype.AddUint8LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
				void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes((m$ as clientHelloMsg).compressionMethods) : cryptobyte.Builder.prototype.AddBytes.call(b, (m$ as clientHelloMsg).compressionMethods))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))

			if ($.sliceLen(extBytes) > 0) {
				await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes(extBytes) : cryptobyte.Builder.prototype.AddBytes.call(b, extBytes))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))

		return b.value.Bytes()
	}

	public async marshalWithoutBinders(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: clientHelloMsg | $.VarRef<clientHelloMsg> | null = this;
		const m$: clientHelloMsg = m == null ? $.pointerTarget<clientHelloMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<clientHelloMsg>(m)
		let bindersLen = 2
		for (let __goscriptRangeTarget10 = (m$ as clientHelloMsg).pskBinders, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
			let binder = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as $.Slice<number>)
			bindersLen = bindersLen + (1)
			bindersLen = bindersLen + ($.sliceLen(binder))
		}

		let fullMessage: $.Slice<number> = null! as $.Slice<number>
		if ((m$ as clientHelloMsg).original != null) {
			fullMessage = (m$ as clientHelloMsg).original
		} else {
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple1: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as clientHelloMsg).marshal() : clientHelloMsg.prototype.marshal.call(m))
			fullMessage = __goscriptTuple1[0]
			err = __goscriptTuple1[1]
			if (err != null) {
				return [null, err]
			}
		}
		return [$.goSlice(fullMessage, undefined, $.sliceLen(fullMessage) - bindersLen), null]
	}

	public originalBytes(): $.Slice<number> {
		const m: clientHelloMsg | $.VarRef<clientHelloMsg> | null = this;
		return $.pointerValue<clientHelloMsg>(m).original
	}

	public unmarshal(data: $.Slice<number>): boolean {
		let m: clientHelloMsg | $.VarRef<clientHelloMsg> | null = this;
		const m$: clientHelloMsg = m == null ? $.pointerTarget<clientHelloMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<clientHelloMsg>(m)
		$.assignStruct((m$ as clientHelloMsg), $.markAsStructValue(new clientHelloMsg({original: data})))
		let s: $.VarRef<cryptobyte.String> = $.varRef(((data as cryptobyte.String) as cryptobyte.String))

		if (((!cryptobyte.String_Skip(s, 4) || !cryptobyte.String_ReadUint16(s, $.fieldRef((m$ as clientHelloMsg)._fields, "vers"))) || !cryptobyte.String_ReadBytes(s, $.fieldRef((m$ as clientHelloMsg)._fields, "random"), 32)) || !readUint8LengthPrefixed(s, $.fieldRef((m$ as clientHelloMsg)._fields, "sessionId"))) {
			return false
		}

		let cipherSuites: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
		if (!cryptobyte.String_ReadUint16LengthPrefixed(s, cipherSuites)) {
			return false
		}
		;(m$ as clientHelloMsg).cipherSuites = $.arrayToSlice<number>([]);
		;(m$ as clientHelloMsg).secureRenegotiationSupported = false
		while (!cryptobyte.String_Empty(cipherSuites.value)) {
			let suite: $.VarRef<number> = $.varRef(0)
			if (!cryptobyte.String_ReadUint16(cipherSuites, suite)) {
				return false
			}
			if (suite.value == 255) {
				;(m$ as clientHelloMsg).secureRenegotiationSupported = true
			}
			;(m$ as clientHelloMsg).cipherSuites = $.appendOne((m$ as clientHelloMsg).cipherSuites, $.uint(suite.value, 16))
		}

		if (!readUint8LengthPrefixed(s, $.fieldRef((m$ as clientHelloMsg)._fields, "compressionMethods"))) {
			return false
		}

		if (cryptobyte.String_Empty(s.value)) {
			// ClientHello is optionally followed by extension data
			return true
		}

		let extensions: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
		if (!cryptobyte.String_ReadUint16LengthPrefixed(s, extensions) || !cryptobyte.String_Empty(s.value)) {
			return false
		}

		let seenExts: globalThis.Map<number, boolean> | null = $.makeMap<number, boolean>()
		while (!cryptobyte.String_Empty(extensions.value)) {
			let extension: $.VarRef<number> = $.varRef(0)
			let extData: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
			if (!cryptobyte.String_ReadUint16(extensions, extension) || !cryptobyte.String_ReadUint16LengthPrefixed(extensions, extData)) {
				return false
			}

			if ($.mapGet<number, boolean, boolean>(seenExts, extension.value, false)[0]) {
				return false
			}
			$.mapSet(seenExts, extension.value, true);
			;(m$ as clientHelloMsg).extensions = $.appendOne((m$ as clientHelloMsg).extensions, $.uint(extension.value, 16))

			switch (extension.value) {
				case 0:
				{
					let nameList: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadUint16LengthPrefixed(extData, nameList) || cryptobyte.String_Empty(nameList.value)) {
						return false
					}
					while (!cryptobyte.String_Empty(nameList.value)) {
						let nameType: $.VarRef<number> = $.varRef(0)
						let serverName: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
						if ((!cryptobyte.String_ReadUint8(nameList, nameType) || !cryptobyte.String_ReadUint16LengthPrefixed(nameList, serverName)) || cryptobyte.String_Empty(serverName.value)) {
							return false
						}
						if (nameType.value != 0) {
							continue
						}
						if ($.stringLen((m$ as clientHelloMsg).serverName) != 0) {
							// Multiple names of the same name_type are prohibited.
							return false
						}
						;(m$ as clientHelloMsg).serverName = $.bytesToString(serverName.value)
						// An SNI value may not include a trailing dot.
						if (strings.HasSuffix((m$ as clientHelloMsg).serverName, ".")) {
							return false
						}
					}
					break
				}
				case 5:
				{
					let statusType: $.VarRef<number> = $.varRef(0)
					let ignored: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if ((!cryptobyte.String_ReadUint8(extData, statusType) || !cryptobyte.String_ReadUint16LengthPrefixed(extData, ignored)) || !cryptobyte.String_ReadUint16LengthPrefixed(extData, ignored)) {
						return false
					}
					;(m$ as clientHelloMsg).ocspStapling = statusType.value == 1
					break
				}
				case 10:
				{
					let curves: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadUint16LengthPrefixed(extData, curves) || cryptobyte.String_Empty(curves.value)) {
						return false
					}
					while (!cryptobyte.String_Empty(curves.value)) {
						let curve: $.VarRef<number> = $.varRef(0)
						if (!cryptobyte.String_ReadUint16(curves, curve)) {
							return false
						}
						;(m$ as clientHelloMsg).supportedCurves = $.appendOne((m$ as clientHelloMsg).supportedCurves, $.uint($.uint(curve.value, 16), 16))
					}
					break
				}
				case 11:
				{
					if (!readUint8LengthPrefixed(extData, $.fieldRef((m$ as clientHelloMsg)._fields, "supportedPoints")) || ($.sliceLen((m$ as clientHelloMsg).supportedPoints) == 0)) {
						return false
					}
					break
				}
				case 35:
				{
					;(m$ as clientHelloMsg).ticketSupported = true
					cryptobyte.String_ReadBytes(extData, $.fieldRef((m$ as clientHelloMsg)._fields, "sessionTicket"), $.sliceLen((extData.value as cryptobyte.String)))
					break
				}
				case 13:
				{
					let sigAndAlgs: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadUint16LengthPrefixed(extData, sigAndAlgs) || cryptobyte.String_Empty(sigAndAlgs.value)) {
						return false
					}
					while (!cryptobyte.String_Empty(sigAndAlgs.value)) {
						let sigAndAlg: $.VarRef<number> = $.varRef(0)
						if (!cryptobyte.String_ReadUint16(sigAndAlgs, sigAndAlg)) {
							return false
						}
						;(m$ as clientHelloMsg).supportedSignatureAlgorithms = $.appendOne((m$ as clientHelloMsg).supportedSignatureAlgorithms, $.uint($.uint(sigAndAlg.value, 16), 16))
					}
					break
				}
				case 50:
				{
					let sigAndAlgs: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadUint16LengthPrefixed(extData, sigAndAlgs) || cryptobyte.String_Empty(sigAndAlgs.value)) {
						return false
					}
					while (!cryptobyte.String_Empty(sigAndAlgs.value)) {
						let sigAndAlg: $.VarRef<number> = $.varRef(0)
						if (!cryptobyte.String_ReadUint16(sigAndAlgs, sigAndAlg)) {
							return false
						}
						;(m$ as clientHelloMsg).supportedSignatureAlgorithmsCert = $.appendOne((m$ as clientHelloMsg).supportedSignatureAlgorithmsCert, $.uint($.uint(sigAndAlg.value, 16), 16))
					}
					break
				}
				case 65281:
				{
					if (!readUint8LengthPrefixed(extData, $.fieldRef((m$ as clientHelloMsg)._fields, "secureRenegotiation"))) {
						return false
					}
					;(m$ as clientHelloMsg).secureRenegotiationSupported = true
					break
				}
				case 23:
				{
					;(m$ as clientHelloMsg).extendedMasterSecret = true
					break
				}
				case 16:
				{
					let protoList: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadUint16LengthPrefixed(extData, protoList) || cryptobyte.String_Empty(protoList.value)) {
						return false
					}
					while (!cryptobyte.String_Empty(protoList.value)) {
						let proto: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
						if (!cryptobyte.String_ReadUint8LengthPrefixed(protoList, proto) || cryptobyte.String_Empty(proto.value)) {
							return false
						}
						;(m$ as clientHelloMsg).alpnProtocols = $.appendOne((m$ as clientHelloMsg).alpnProtocols, $.bytesToString(proto.value))
					}
					break
				}
				case 18:
				{
					;(m$ as clientHelloMsg).scts = true
					break
				}
				case 43:
				{
					let versList: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadUint8LengthPrefixed(extData, versList) || cryptobyte.String_Empty(versList.value)) {
						return false
					}
					while (!cryptobyte.String_Empty(versList.value)) {
						let vers: $.VarRef<number> = $.varRef(0)
						if (!cryptobyte.String_ReadUint16(versList, vers)) {
							return false
						}
						;(m$ as clientHelloMsg).supportedVersions = $.appendOne((m$ as clientHelloMsg).supportedVersions, $.uint(vers.value, 16))
					}
					break
				}
				case 44:
				{
					if (!readUint16LengthPrefixed(extData, $.fieldRef((m$ as clientHelloMsg)._fields, "cookie")) || ($.sliceLen((m$ as clientHelloMsg).cookie) == 0)) {
						return false
					}
					break
				}
				case 51:
				{
					let clientShares: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadUint16LengthPrefixed(extData, clientShares)) {
						return false
					}
					while (!cryptobyte.String_Empty(clientShares.value)) {
						let ks: __goscript_common.keyShare = new __goscript_common.keyShare(undefined, true)
						if ((!cryptobyte.String_ReadUint16(clientShares, $.fieldRef(ks._fields, "group")) || !readUint16LengthPrefixed(clientShares, $.fieldRef(ks._fields, "data"))) || ($.sliceLen(ks.data) == 0)) {
							return false
						}
						;(m$ as clientHelloMsg).keyShares = $.appendOne((m$ as clientHelloMsg).keyShares, (ks).clone())
					}
					break
				}
				case 42:
				{
					;(m$ as clientHelloMsg).earlyData = true
					break
				}
				case 45:
				{
					if (!readUint8LengthPrefixed(extData, $.fieldRef((m$ as clientHelloMsg)._fields, "pskModes"))) {
						return false
					}
					break
				}
				case 57:
				{
					;(m$ as clientHelloMsg).quicTransportParameters = $.makeSlice<number>($.sliceLen((extData.value as cryptobyte.String)), undefined, "byte")
					if (!cryptobyte.String_CopyBytes(extData, (m$ as clientHelloMsg).quicTransportParameters)) {
						return false
					}
					break
				}
				case 41:
				{
					if (!cryptobyte.String_Empty(extensions.value)) {
						return false
					}
					let identities: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadUint16LengthPrefixed(extData, identities) || cryptobyte.String_Empty(identities.value)) {
						return false
					}
					while (!cryptobyte.String_Empty(identities.value)) {
						let psk: __goscript_common.pskIdentity = new __goscript_common.pskIdentity(undefined, true)
						if ((!readUint16LengthPrefixed(identities, $.fieldRef(psk._fields, "label")) || !cryptobyte.String_ReadUint32(identities, $.fieldRef(psk._fields, "obfuscatedTicketAge"))) || ($.sliceLen(psk.label) == 0)) {
							return false
						}
						;(m$ as clientHelloMsg).pskIdentities = $.appendOne((m$ as clientHelloMsg).pskIdentities, (psk).clone())
					}
					let binders: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadUint16LengthPrefixed(extData, binders) || cryptobyte.String_Empty(binders.value)) {
						return false
					}
					while (!cryptobyte.String_Empty(binders.value)) {
						let binder: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
						if (!readUint8LengthPrefixed(binders, binder) || ($.sliceLen(binder.value) == 0)) {
							return false
						}
						;(m$ as clientHelloMsg).pskBinders = $.appendOne((m$ as clientHelloMsg).pskBinders, binder.value, $.appendZeros.nil)
					}
					break
				}
				case 65037:
				{
					if (!cryptobyte.String_ReadBytes(extData, $.fieldRef((m$ as clientHelloMsg)._fields, "encryptedClientHello"), $.sliceLen((extData.value as cryptobyte.String)))) {
						return false
					}
					break
				}
				default:
				{
					continue
					break
				}
			}

			if (!cryptobyte.String_Empty(extData.value)) {
				return false
			}
		}

		return true
	}

	public updateBinders(pskBinders: $.Slice<$.Slice<number>>): $.GoError {
		let m: clientHelloMsg | $.VarRef<clientHelloMsg> | null = this;
		const m$: clientHelloMsg = m == null ? $.pointerTarget<clientHelloMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<clientHelloMsg>(m)
		if ($.sliceLen(pskBinders) != $.sliceLen((m$ as clientHelloMsg).pskBinders)) {
			return errors.New("tls: internal error: pskBinders length mismatch")
		}
		for (let __goscriptRangeTarget11 = (m$ as clientHelloMsg).pskBinders, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __goscriptSliceWindow0 = $.sliceRange(pskBinders), i = 0; i < __goscriptRangeWindow11.length; i++) {
			if ($.sliceLen(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as $.Slice<number>)) != $.sliceLen($.arrayIndex((m$ as clientHelloMsg).pskBinders!, i))) {
				return errors.New("tls: internal error: pskBinders length mismatch")
			}
		}
		;(m$ as clientHelloMsg).pskBinders = pskBinders

		return null
	}

	static __typeInfo = $.registerStructType(
		"tls.clientHelloMsg",
		() => new clientHelloMsg(),
		() => [$.methodSignature("clone", [], [/* @__PURE__ */ $.pointerType("tls.clientHelloMsg")], true), $.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("marshalMsg", [["echInner", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("marshalWithoutBinders", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("originalBytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("updateBinders", [["pskBinders", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]], ["error"], true)],
		clientHelloMsg,
		() => [/* @__PURE__ */ $.structField("original", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("vers", /* @__PURE__ */ $.basicType("uint16"), [1], 24, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("random", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 32, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("sessionId", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 56, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("cipherSuites", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")), [4], 80, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("compressionMethods", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 104, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("serverName", /* @__PURE__ */ $.basicType("string"), [6], 128, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ocspStapling", /* @__PURE__ */ $.basicType("bool"), [7], 144, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("supportedCurves", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16", "tls.CurveID")), [8], 152, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("supportedPoints", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [9], 176, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ticketSupported", /* @__PURE__ */ $.basicType("bool"), [10], 200, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("sessionTicket", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [11], 208, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("supportedSignatureAlgorithms", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16", "tls.SignatureScheme")), [12], 232, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("supportedSignatureAlgorithmsCert", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16", "tls.SignatureScheme")), [13], 256, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("secureRenegotiationSupported", /* @__PURE__ */ $.basicType("bool"), [14], 280, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("secureRenegotiation", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [15], 288, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("extendedMasterSecret", /* @__PURE__ */ $.basicType("bool"), [16], 312, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("alpnProtocols", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [17], 320, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("scts", /* @__PURE__ */ $.basicType("bool"), [18], 344, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("supportedVersions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")), [19], 352, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("cookie", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [20], 376, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("keyShares", /* @__PURE__ */ $.sliceType("tls.keyShare"), [21], 400, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("earlyData", /* @__PURE__ */ $.basicType("bool"), [22], 424, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("pskModes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [23], 432, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("pskIdentities", /* @__PURE__ */ $.sliceType("tls.pskIdentity"), [24], 456, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("pskBinders", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [25], 480, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("quicTransportParameters", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [26], 504, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("encryptedClientHello", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [27], 528, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("extensions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")), [28], 552, false, { pkgPath: "crypto/tls" })]
	)
}

export class serverHelloMsg {
	public get original(): $.Slice<number> {
		return this._fields.original
	}

	public set original(value: $.Slice<number>) {
		this._fields.original = value
	}

	public get vers(): number {
		return this._fields.vers
	}

	public set vers(value: number) {
		this._fields.vers = value
	}

	public get random(): $.Slice<number> {
		return this._fields.random
	}

	public set random(value: $.Slice<number>) {
		this._fields.random = value
	}

	public get sessionId(): $.Slice<number> {
		return this._fields.sessionId
	}

	public set sessionId(value: $.Slice<number>) {
		this._fields.sessionId = value
	}

	public get cipherSuite(): number {
		return this._fields.cipherSuite
	}

	public set cipherSuite(value: number) {
		this._fields.cipherSuite = value
	}

	public get compressionMethod(): number {
		return this._fields.compressionMethod
	}

	public set compressionMethod(value: number) {
		this._fields.compressionMethod = value
	}

	public get ocspStapling(): boolean {
		return this._fields.ocspStapling
	}

	public set ocspStapling(value: boolean) {
		this._fields.ocspStapling = value
	}

	public get ticketSupported(): boolean {
		return this._fields.ticketSupported
	}

	public set ticketSupported(value: boolean) {
		this._fields.ticketSupported = value
	}

	public get secureRenegotiationSupported(): boolean {
		return this._fields.secureRenegotiationSupported
	}

	public set secureRenegotiationSupported(value: boolean) {
		this._fields.secureRenegotiationSupported = value
	}

	public get secureRenegotiation(): $.Slice<number> {
		return this._fields.secureRenegotiation
	}

	public set secureRenegotiation(value: $.Slice<number>) {
		this._fields.secureRenegotiation = value
	}

	public get extendedMasterSecret(): boolean {
		return this._fields.extendedMasterSecret
	}

	public set extendedMasterSecret(value: boolean) {
		this._fields.extendedMasterSecret = value
	}

	public get alpnProtocol(): string {
		return this._fields.alpnProtocol
	}

	public set alpnProtocol(value: string) {
		this._fields.alpnProtocol = value
	}

	public get scts(): $.Slice<$.Slice<number>> {
		return this._fields.scts
	}

	public set scts(value: $.Slice<$.Slice<number>>) {
		this._fields.scts = value
	}

	public get supportedVersion(): number {
		return this._fields.supportedVersion
	}

	public set supportedVersion(value: number) {
		this._fields.supportedVersion = value
	}

	public get serverShare(): __goscript_common.keyShare {
		return this._fields.serverShare
	}

	public set serverShare(value: __goscript_common.keyShare) {
		this._fields.serverShare = value
	}

	public get selectedIdentityPresent(): boolean {
		return this._fields.selectedIdentityPresent
	}

	public set selectedIdentityPresent(value: boolean) {
		this._fields.selectedIdentityPresent = value
	}

	public get selectedIdentity(): number {
		return this._fields.selectedIdentity
	}

	public set selectedIdentity(value: number) {
		this._fields.selectedIdentity = value
	}

	public get supportedPoints(): $.Slice<number> {
		return this._fields.supportedPoints
	}

	public set supportedPoints(value: $.Slice<number>) {
		this._fields.supportedPoints = value
	}

	public get encryptedClientHello(): $.Slice<number> {
		return this._fields.encryptedClientHello
	}

	public set encryptedClientHello(value: $.Slice<number>) {
		this._fields.encryptedClientHello = value
	}

	public get serverNameAck(): boolean {
		return this._fields.serverNameAck
	}

	public set serverNameAck(value: boolean) {
		this._fields.serverNameAck = value
	}

	// HelloRetryRequest extensions
	public get cookie(): $.Slice<number> {
		return this._fields.cookie
	}

	public set cookie(value: $.Slice<number>) {
		this._fields.cookie = value
	}

	public get selectedGroup(): __goscript_common.CurveID {
		return this._fields.selectedGroup
	}

	public set selectedGroup(value: __goscript_common.CurveID) {
		this._fields.selectedGroup = value
	}

	public _fields: {
		original: $.Slice<number>
		vers: number
		random: $.Slice<number>
		sessionId: $.Slice<number>
		cipherSuite: number
		compressionMethod: number
		ocspStapling: boolean
		ticketSupported: boolean
		secureRenegotiationSupported: boolean
		secureRenegotiation: $.Slice<number>
		extendedMasterSecret: boolean
		alpnProtocol: string
		scts: $.Slice<$.Slice<number>>
		supportedVersion: number
		serverShare: __goscript_common.keyShare
		selectedIdentityPresent: boolean
		selectedIdentity: number
		supportedPoints: $.Slice<number>
		encryptedClientHello: $.Slice<number>
		serverNameAck: boolean
		cookie: $.Slice<number>
		selectedGroup: __goscript_common.CurveID
	}

	constructor(init?: Partial<{original?: $.Slice<number>, vers?: number, random?: $.Slice<number>, sessionId?: $.Slice<number>, cipherSuite?: number, compressionMethod?: number, ocspStapling?: boolean, ticketSupported?: boolean, secureRenegotiationSupported?: boolean, secureRenegotiation?: $.Slice<number>, extendedMasterSecret?: boolean, alpnProtocol?: string, scts?: $.Slice<$.Slice<number>>, supportedVersion?: number, serverShare?: __goscript_common.keyShare, selectedIdentityPresent?: boolean, selectedIdentity?: number, supportedPoints?: $.Slice<number>, encryptedClientHello?: $.Slice<number>, serverNameAck?: boolean, cookie?: $.Slice<number>, selectedGroup?: __goscript_common.CurveID}>, __goscriptValue?: boolean) {
		this._fields = {
			original: init?.original ?? (null! as $.Slice<number>),
			vers: init?.vers ?? (0 as number),
			random: init?.random ?? (null! as $.Slice<number>),
			sessionId: init?.sessionId ?? (null! as $.Slice<number>),
			cipherSuite: init?.cipherSuite ?? (0 as number),
			compressionMethod: init?.compressionMethod ?? (0 as number),
			ocspStapling: init?.ocspStapling ?? (false as boolean),
			ticketSupported: init?.ticketSupported ?? (false as boolean),
			secureRenegotiationSupported: init?.secureRenegotiationSupported ?? (false as boolean),
			secureRenegotiation: init?.secureRenegotiation ?? (null! as $.Slice<number>),
			extendedMasterSecret: init?.extendedMasterSecret ?? (false as boolean),
			alpnProtocol: init?.alpnProtocol ?? ("" as string),
			scts: init?.scts ?? (null! as $.Slice<$.Slice<number>>),
			supportedVersion: init?.supportedVersion ?? (0 as number),
			serverShare: init?.serverShare ? init.serverShare.clone() : new __goscript_common.keyShare(undefined, true),
			selectedIdentityPresent: init?.selectedIdentityPresent ?? (false as boolean),
			selectedIdentity: init?.selectedIdentity ?? (0 as number),
			supportedPoints: init?.supportedPoints ?? (null! as $.Slice<number>),
			encryptedClientHello: init?.encryptedClientHello ?? (null! as $.Slice<number>),
			serverNameAck: init?.serverNameAck ?? (false as boolean),
			cookie: init?.cookie ?? (null! as $.Slice<number>),
			selectedGroup: init?.selectedGroup ?? (0 as __goscript_common.CurveID)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): serverHelloMsg {
		return new serverHelloMsg(this, true)
	}

	public __goscriptAssign(source: serverHelloMsg): void {
		const target = this._fields
		const values = source._fields
		target.original = values.original
		target.vers = values.vers
		target.random = values.random
		target.sessionId = values.sessionId
		target.cipherSuite = values.cipherSuite
		target.compressionMethod = values.compressionMethod
		target.ocspStapling = values.ocspStapling
		target.ticketSupported = values.ticketSupported
		target.secureRenegotiationSupported = values.secureRenegotiationSupported
		target.secureRenegotiation = values.secureRenegotiation
		target.extendedMasterSecret = values.extendedMasterSecret
		target.alpnProtocol = values.alpnProtocol
		target.scts = values.scts
		target.supportedVersion = values.supportedVersion
		$.assignStruct(target.serverShare, values.serverShare)
		target.selectedIdentityPresent = values.selectedIdentityPresent
		target.selectedIdentity = values.selectedIdentity
		target.supportedPoints = values.supportedPoints
		target.encryptedClientHello = values.encryptedClientHello
		target.serverNameAck = values.serverNameAck
		target.cookie = values.cookie
		target.selectedGroup = values.selectedGroup
	}

	public async marshal(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: serverHelloMsg | $.VarRef<serverHelloMsg> | null = this;
		const m$: serverHelloMsg = m == null ? $.pointerTarget<serverHelloMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<serverHelloMsg>(m)
		let exts: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))
		if ((m$ as serverHelloMsg).ocspStapling) {
			exts.value.AddUint16(5)
			exts.value.AddUint16(0)
		}
		if ((m$ as serverHelloMsg).ticketSupported) {
			exts.value.AddUint16(35)
			exts.value.AddUint16(0)
		}
		if ((m$ as serverHelloMsg).secureRenegotiationSupported) {
			exts.value.AddUint16(65281)
			await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
				await cryptobyte.Builder.prototype.AddUint8LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
					void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes((m$ as serverHelloMsg).secureRenegotiation) : cryptobyte.Builder.prototype.AddBytes.call(exts, (m$ as serverHelloMsg).secureRenegotiation))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		if ((m$ as serverHelloMsg).extendedMasterSecret) {
			exts.value.AddUint16(23)
			exts.value.AddUint16(0)
		}
		if ($.stringLen((m$ as serverHelloMsg).alpnProtocol) > 0) {
			exts.value.AddUint16(16)
			await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
				await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(exts, $.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					await cryptobyte.Builder.prototype.AddUint8LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
						void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes($.stringToBytes((m$ as serverHelloMsg).alpnProtocol)) : cryptobyte.Builder.prototype.AddBytes.call(exts, $.stringToBytes((m$ as serverHelloMsg).alpnProtocol)))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		if ($.sliceLen((m$ as serverHelloMsg).scts) > 0) {
			exts.value.AddUint16(18)
			await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
				await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(exts, $.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					for (let __goscriptRangeTarget12 = (m$ as serverHelloMsg).scts, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
						let sct = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as $.Slice<number>)
						await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
							void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes(sct) : cryptobyte.Builder.prototype.AddBytes.call(exts, sct))
						}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
					}
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		if ((m$ as serverHelloMsg).supportedVersion != 0) {
			exts.value.AddUint16(43)
			await exts.value.AddUint16LengthPrefixed($.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
				void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddUint16((m$ as serverHelloMsg).supportedVersion) : cryptobyte.Builder.prototype.AddUint16.call(exts, (m$ as serverHelloMsg).supportedVersion))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		if ((m$ as serverHelloMsg).serverShare.group != 0) {
			exts.value.AddUint16(51)
			await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
				void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddUint16($.uint((m$ as serverHelloMsg).serverShare.group, 16)) : cryptobyte.Builder.prototype.AddUint16.call(exts, $.uint((m$ as serverHelloMsg).serverShare.group, 16)))
				await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
					void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes((m$ as serverHelloMsg).serverShare.data) : cryptobyte.Builder.prototype.AddBytes.call(exts, (m$ as serverHelloMsg).serverShare.data))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		if ((m$ as serverHelloMsg).selectedIdentityPresent) {
			exts.value.AddUint16(41)
			await exts.value.AddUint16LengthPrefixed($.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
				void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddUint16((m$ as serverHelloMsg).selectedIdentity) : cryptobyte.Builder.prototype.AddUint16.call(exts, (m$ as serverHelloMsg).selectedIdentity))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}

		if ($.sliceLen((m$ as serverHelloMsg).cookie) > 0) {
			exts.value.AddUint16(44)
			await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
				await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
					void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes((m$ as serverHelloMsg).cookie) : cryptobyte.Builder.prototype.AddBytes.call(exts, (m$ as serverHelloMsg).cookie))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		if ((m$ as serverHelloMsg).selectedGroup != 0) {
			exts.value.AddUint16(51)
			await exts.value.AddUint16LengthPrefixed($.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
				void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddUint16($.uint((m$ as serverHelloMsg).selectedGroup, 16)) : cryptobyte.Builder.prototype.AddUint16.call(exts, $.uint((m$ as serverHelloMsg).selectedGroup, 16)))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		if ($.sliceLen((m$ as serverHelloMsg).supportedPoints) > 0) {
			exts.value.AddUint16(11)
			await exts.value.AddUint16LengthPrefixed($.functionValue(async (exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
				await cryptobyte.Builder.prototype.AddUint8LengthPrefixed.call(exts, $.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
					void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes((m$ as serverHelloMsg).supportedPoints) : cryptobyte.Builder.prototype.AddBytes.call(exts, (m$ as serverHelloMsg).supportedPoints))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		if ($.sliceLen((m$ as serverHelloMsg).encryptedClientHello) > 0) {
			exts.value.AddUint16(65037)
			await exts.value.AddUint16LengthPrefixed($.functionValue((exts: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
				void (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as cryptobyte.Builder).AddBytes((m$ as serverHelloMsg).encryptedClientHello) : cryptobyte.Builder.prototype.AddBytes.call(exts, (m$ as serverHelloMsg).encryptedClientHello))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
		if ((m$ as serverHelloMsg).serverNameAck) {
			exts.value.AddUint16(0)
			exts.value.AddUint16(0)
		}

		let __goscriptTuple2: any = exts.value.Bytes()
		let extBytes: $.Slice<number> = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}

		let b: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))
		b.value.AddUint8(2)
		await b.value.AddUint24LengthPrefixed($.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16((m$ as serverHelloMsg).vers) : cryptobyte.Builder.prototype.AddUint16.call(b, (m$ as serverHelloMsg).vers))
			await addBytesWithLength(b, (m$ as serverHelloMsg).random, 32)
			await cryptobyte.Builder.prototype.AddUint8LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
				void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes((m$ as serverHelloMsg).sessionId) : cryptobyte.Builder.prototype.AddBytes.call(b, (m$ as serverHelloMsg).sessionId))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16((m$ as serverHelloMsg).cipherSuite) : cryptobyte.Builder.prototype.AddUint16.call(b, (m$ as serverHelloMsg).cipherSuite))
			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint8((m$ as serverHelloMsg).compressionMethod) : cryptobyte.Builder.prototype.AddUint8.call(b, (m$ as serverHelloMsg).compressionMethod))

			if ($.sliceLen(extBytes) > 0) {
				await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes(extBytes) : cryptobyte.Builder.prototype.AddBytes.call(b, extBytes))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))

		return b.value.Bytes()
	}

	public originalBytes(): $.Slice<number> {
		const m: serverHelloMsg | $.VarRef<serverHelloMsg> | null = this;
		return $.pointerValue<serverHelloMsg>(m).original
	}

	public unmarshal(data: $.Slice<number>): boolean {
		let m: serverHelloMsg | $.VarRef<serverHelloMsg> | null = this;
		const m$: serverHelloMsg = m == null ? $.pointerTarget<serverHelloMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<serverHelloMsg>(m)
		$.assignStruct((m$ as serverHelloMsg), new serverHelloMsg({original: data}, true))
		let s: $.VarRef<cryptobyte.String> = $.varRef(((data as cryptobyte.String) as cryptobyte.String))

		if (((((!cryptobyte.String_Skip(s, 4) || !cryptobyte.String_ReadUint16(s, $.fieldRef((m$ as serverHelloMsg)._fields, "vers"))) || !cryptobyte.String_ReadBytes(s, $.fieldRef((m$ as serverHelloMsg)._fields, "random"), 32)) || !readUint8LengthPrefixed(s, $.fieldRef((m$ as serverHelloMsg)._fields, "sessionId"))) || !cryptobyte.String_ReadUint16(s, $.fieldRef((m$ as serverHelloMsg)._fields, "cipherSuite"))) || !cryptobyte.String_ReadUint8(s, $.fieldRef((m$ as serverHelloMsg)._fields, "compressionMethod"))) {
			return false
		}

		if (cryptobyte.String_Empty(s.value)) {
			// ServerHello is optionally followed by extension data
			return true
		}

		let extensions: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
		if (!cryptobyte.String_ReadUint16LengthPrefixed(s, extensions) || !cryptobyte.String_Empty(s.value)) {
			return false
		}

		let seenExts: globalThis.Map<number, boolean> | null = $.makeMap<number, boolean>()
		while (!cryptobyte.String_Empty(extensions.value)) {
			let extension: $.VarRef<number> = $.varRef(0)
			let extData: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
			if (!cryptobyte.String_ReadUint16(extensions, extension) || !cryptobyte.String_ReadUint16LengthPrefixed(extensions, extData)) {
				return false
			}

			if ($.mapGet<number, boolean, boolean>(seenExts, extension.value, false)[0]) {
				return false
			}
			$.mapSet(seenExts, extension.value, true)

			switch (extension.value) {
				case 5:
				{
					;(m$ as serverHelloMsg).ocspStapling = true
					break
				}
				case 35:
				{
					;(m$ as serverHelloMsg).ticketSupported = true
					break
				}
				case 65281:
				{
					if (!readUint8LengthPrefixed(extData, $.fieldRef((m$ as serverHelloMsg)._fields, "secureRenegotiation"))) {
						return false
					}
					;(m$ as serverHelloMsg).secureRenegotiationSupported = true
					break
				}
				case 23:
				{
					;(m$ as serverHelloMsg).extendedMasterSecret = true
					break
				}
				case 16:
				{
					let protoList: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadUint16LengthPrefixed(extData, protoList) || cryptobyte.String_Empty(protoList.value)) {
						return false
					}
					let proto: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if ((!cryptobyte.String_ReadUint8LengthPrefixed(protoList, proto) || cryptobyte.String_Empty(proto.value)) || !cryptobyte.String_Empty(protoList.value)) {
						return false
					}
					;(m$ as serverHelloMsg).alpnProtocol = $.bytesToString(proto.value)
					break
				}
				case 18:
				{
					let sctList: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadUint16LengthPrefixed(extData, sctList) || cryptobyte.String_Empty(sctList.value)) {
						return false
					}
					while (!cryptobyte.String_Empty(sctList.value)) {
						let sct: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
						if (!readUint16LengthPrefixed(sctList, sct) || ($.sliceLen(sct.value) == 0)) {
							return false
						}
						;(m$ as serverHelloMsg).scts = $.appendOne((m$ as serverHelloMsg).scts, sct.value, $.appendZeros.nil)
					}
					break
				}
				case 43:
				{
					if (!cryptobyte.String_ReadUint16(extData, $.fieldRef((m$ as serverHelloMsg)._fields, "supportedVersion"))) {
						return false
					}
					break
				}
				case 44:
				{
					if (!readUint16LengthPrefixed(extData, $.fieldRef((m$ as serverHelloMsg)._fields, "cookie")) || ($.sliceLen((m$ as serverHelloMsg).cookie) == 0)) {
						return false
					}
					break
				}
				case 51:
				{
					if ($.sliceLen((extData.value as cryptobyte.String)) == 2) {
						if (!cryptobyte.String_ReadUint16(extData, $.fieldRef((m$ as serverHelloMsg)._fields, "selectedGroup"))) {
							return false
						}
					} else {
						if (!cryptobyte.String_ReadUint16(extData, $.fieldRef((m$ as serverHelloMsg).serverShare._fields, "group")) || !readUint16LengthPrefixed(extData, $.fieldRef((m$ as serverHelloMsg).serverShare._fields, "data"))) {
							return false
						}
					}
					break
				}
				case 41:
				{
					;(m$ as serverHelloMsg).selectedIdentityPresent = true
					if (!cryptobyte.String_ReadUint16(extData, $.fieldRef((m$ as serverHelloMsg)._fields, "selectedIdentity"))) {
						return false
					}
					break
				}
				case 11:
				{
					if (!readUint8LengthPrefixed(extData, $.fieldRef((m$ as serverHelloMsg)._fields, "supportedPoints")) || ($.sliceLen((m$ as serverHelloMsg).supportedPoints) == 0)) {
						return false
					}
					break
				}
				case 65037:
				{
					;(m$ as serverHelloMsg).encryptedClientHello = $.makeSlice<number>($.sliceLen((extData.value as cryptobyte.String)), undefined, "byte")
					if (!cryptobyte.String_CopyBytes(extData, (m$ as serverHelloMsg).encryptedClientHello)) {
						return false
					}
					break
				}
				case 0:
				{
					if ($.sliceLen((extData.value as cryptobyte.String)) != 0) {
						return false
					}
					;(m$ as serverHelloMsg).serverNameAck = true
					break
				}
				default:
				{
					continue
					break
				}
			}

			if (!cryptobyte.String_Empty(extData.value)) {
				return false
			}
		}

		return true
	}

	static __typeInfo = $.registerStructType(
		"tls.serverHelloMsg",
		() => new serverHelloMsg(),
		() => [$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("originalBytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true)],
		serverHelloMsg,
		() => [/* @__PURE__ */ $.structField("original", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("vers", /* @__PURE__ */ $.basicType("uint16"), [1], 24, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("random", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 32, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("sessionId", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 56, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("cipherSuite", /* @__PURE__ */ $.basicType("uint16"), [4], 80, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("compressionMethod", /* @__PURE__ */ $.basicType("uint8"), [5], 82, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ocspStapling", /* @__PURE__ */ $.basicType("bool"), [6], 83, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ticketSupported", /* @__PURE__ */ $.basicType("bool"), [7], 84, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("secureRenegotiationSupported", /* @__PURE__ */ $.basicType("bool"), [8], 85, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("secureRenegotiation", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [9], 88, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("extendedMasterSecret", /* @__PURE__ */ $.basicType("bool"), [10], 112, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("alpnProtocol", /* @__PURE__ */ $.basicType("string"), [11], 120, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("scts", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [12], 136, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("supportedVersion", /* @__PURE__ */ $.basicType("uint16"), [13], 160, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("serverShare", "tls.keyShare", [14], 168, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("selectedIdentityPresent", /* @__PURE__ */ $.basicType("bool"), [15], 200, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("selectedIdentity", /* @__PURE__ */ $.basicType("uint16"), [16], 202, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("supportedPoints", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [17], 208, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("encryptedClientHello", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [18], 232, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("serverNameAck", /* @__PURE__ */ $.basicType("bool"), [19], 256, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("cookie", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [20], 264, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("selectedGroup", /* @__PURE__ */ $.basicType("uint16", "tls.CurveID"), [21], 288, false, { pkgPath: "crypto/tls" })]
	)
}

export class encryptedExtensionsMsg {
	public get alpnProtocol(): string {
		return this._fields.alpnProtocol
	}

	public set alpnProtocol(value: string) {
		this._fields.alpnProtocol = value
	}

	public get quicTransportParameters(): $.Slice<number> {
		return this._fields.quicTransportParameters
	}

	public set quicTransportParameters(value: $.Slice<number>) {
		this._fields.quicTransportParameters = value
	}

	public get earlyData(): boolean {
		return this._fields.earlyData
	}

	public set earlyData(value: boolean) {
		this._fields.earlyData = value
	}

	public get echRetryConfigs(): $.Slice<number> {
		return this._fields.echRetryConfigs
	}

	public set echRetryConfigs(value: $.Slice<number>) {
		this._fields.echRetryConfigs = value
	}

	public get serverNameAck(): boolean {
		return this._fields.serverNameAck
	}

	public set serverNameAck(value: boolean) {
		this._fields.serverNameAck = value
	}

	public _fields: {
		alpnProtocol: string
		quicTransportParameters: $.Slice<number>
		earlyData: boolean
		echRetryConfigs: $.Slice<number>
		serverNameAck: boolean
	}

	constructor(init?: Partial<{alpnProtocol?: string, quicTransportParameters?: $.Slice<number>, earlyData?: boolean, echRetryConfigs?: $.Slice<number>, serverNameAck?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			alpnProtocol: init?.alpnProtocol ?? ("" as string),
			quicTransportParameters: init?.quicTransportParameters ?? (null! as $.Slice<number>),
			earlyData: init?.earlyData ?? (false as boolean),
			echRetryConfigs: init?.echRetryConfigs ?? (null! as $.Slice<number>),
			serverNameAck: init?.serverNameAck ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): encryptedExtensionsMsg {
		return new encryptedExtensionsMsg(this, true)
	}

	public __goscriptAssign(source: encryptedExtensionsMsg): void {
		const target = this._fields
		const values = source._fields
		target.alpnProtocol = values.alpnProtocol
		target.quicTransportParameters = values.quicTransportParameters
		target.earlyData = values.earlyData
		target.echRetryConfigs = values.echRetryConfigs
		target.serverNameAck = values.serverNameAck
	}

	public async marshal(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: encryptedExtensionsMsg | $.VarRef<encryptedExtensionsMsg> | null = this;
		const m$: encryptedExtensionsMsg = m == null ? $.pointerTarget<encryptedExtensionsMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<encryptedExtensionsMsg>(m)
		let b: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))
		b.value.AddUint8(8)
		await b.value.AddUint24LengthPrefixed($.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
			await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
				if ($.stringLen((m$ as encryptedExtensionsMsg).alpnProtocol) > 0) {
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(16) : cryptobyte.Builder.prototype.AddUint16.call(b, 16))
					await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
						await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
							await cryptobyte.Builder.prototype.AddUint8LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
								void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes($.stringToBytes((m$ as encryptedExtensionsMsg).alpnProtocol)) : cryptobyte.Builder.prototype.AddBytes.call(b, $.stringToBytes((m$ as encryptedExtensionsMsg).alpnProtocol)))
							}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
						}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}
				if ((m$ as encryptedExtensionsMsg).quicTransportParameters != null) {
					// draft-ietf-quic-tls-32, Section 8.2
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(57) : cryptobyte.Builder.prototype.AddUint16.call(b, 57))
					await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
						void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes((m$ as encryptedExtensionsMsg).quicTransportParameters) : cryptobyte.Builder.prototype.AddBytes.call(b, (m$ as encryptedExtensionsMsg).quicTransportParameters))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}
				if ((m$ as encryptedExtensionsMsg).earlyData) {
					// RFC 8446, Section 4.2.10
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(42) : cryptobyte.Builder.prototype.AddUint16.call(b, 42))
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(0) : cryptobyte.Builder.prototype.AddUint16.call(b, 0))
				}
				if ($.sliceLen((m$ as encryptedExtensionsMsg).echRetryConfigs) > 0) {
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(65037) : cryptobyte.Builder.prototype.AddUint16.call(b, 65037))
					await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
						void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes((m$ as encryptedExtensionsMsg).echRetryConfigs) : cryptobyte.Builder.prototype.AddBytes.call(b, (m$ as encryptedExtensionsMsg).echRetryConfigs))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}
				if ((m$ as encryptedExtensionsMsg).serverNameAck) {
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(0) : cryptobyte.Builder.prototype.AddUint16.call(b, 0))
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(0) : cryptobyte.Builder.prototype.AddUint16.call(b, 0))
				}
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))

		return b.value.Bytes()
	}

	public unmarshal(data: $.Slice<number>): boolean {
		let m: encryptedExtensionsMsg | $.VarRef<encryptedExtensionsMsg> | null = this;
		const m$: encryptedExtensionsMsg = m == null ? $.pointerTarget<encryptedExtensionsMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<encryptedExtensionsMsg>(m)
		$.assignStruct((m$ as encryptedExtensionsMsg), new encryptedExtensionsMsg(undefined, true))
		let s: $.VarRef<cryptobyte.String> = $.varRef(((data as cryptobyte.String) as cryptobyte.String))

		let extensions: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
		if ((!cryptobyte.String_Skip(s, 4) || !cryptobyte.String_ReadUint16LengthPrefixed(s, extensions)) || !cryptobyte.String_Empty(s.value)) {
			return false
		}

		let seenExts: globalThis.Map<number, boolean> | null = $.makeMap<number, boolean>()
		while (!cryptobyte.String_Empty(extensions.value)) {
			let extension: $.VarRef<number> = $.varRef(0)
			let extData: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
			if (!cryptobyte.String_ReadUint16(extensions, extension) || !cryptobyte.String_ReadUint16LengthPrefixed(extensions, extData)) {
				return false
			}

			if ($.mapGet<number, boolean, boolean>(seenExts, extension.value, false)[0]) {
				return false
			}
			$.mapSet(seenExts, extension.value, true)

			switch (extension.value) {
				case 16:
				{
					let protoList: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadUint16LengthPrefixed(extData, protoList) || cryptobyte.String_Empty(protoList.value)) {
						return false
					}
					let proto: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if ((!cryptobyte.String_ReadUint8LengthPrefixed(protoList, proto) || cryptobyte.String_Empty(proto.value)) || !cryptobyte.String_Empty(protoList.value)) {
						return false
					}
					;(m$ as encryptedExtensionsMsg).alpnProtocol = $.bytesToString(proto.value)
					break
				}
				case 57:
				{
					;(m$ as encryptedExtensionsMsg).quicTransportParameters = $.makeSlice<number>($.sliceLen((extData.value as cryptobyte.String)), undefined, "byte")
					if (!cryptobyte.String_CopyBytes(extData, (m$ as encryptedExtensionsMsg).quicTransportParameters)) {
						return false
					}
					break
				}
				case 42:
				{
					;(m$ as encryptedExtensionsMsg).earlyData = true
					break
				}
				case 65037:
				{
					;(m$ as encryptedExtensionsMsg).echRetryConfigs = $.makeSlice<number>($.sliceLen((extData.value as cryptobyte.String)), undefined, "byte")
					if (!cryptobyte.String_CopyBytes(extData, (m$ as encryptedExtensionsMsg).echRetryConfigs)) {
						return false
					}
					break
				}
				case 0:
				{
					if ($.sliceLen((extData.value as cryptobyte.String)) != 0) {
						return false
					}
					;(m$ as encryptedExtensionsMsg).serverNameAck = true
					break
				}
				default:
				{
					continue
					break
				}
			}

			if (!cryptobyte.String_Empty(extData.value)) {
				return false
			}
		}

		return true
	}

	static __typeInfo = $.registerStructType(
		"tls.encryptedExtensionsMsg",
		() => new encryptedExtensionsMsg(),
		() => [$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true)],
		encryptedExtensionsMsg,
		() => [/* @__PURE__ */ $.structField("alpnProtocol", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("quicTransportParameters", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 16, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("earlyData", /* @__PURE__ */ $.basicType("bool"), [2], 40, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("echRetryConfigs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 48, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("serverNameAck", /* @__PURE__ */ $.basicType("bool"), [4], 72, false, { pkgPath: "crypto/tls" })]
	)
}

export class endOfEarlyDataMsg {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): endOfEarlyDataMsg {
		return new endOfEarlyDataMsg(this, true)
	}

	public __goscriptAssign(source: endOfEarlyDataMsg): void {
	}

	public marshal(): [$.Slice<number>, $.GoError] {
		const m: endOfEarlyDataMsg | $.VarRef<endOfEarlyDataMsg> | null = this;
		let x: $.Slice<number> = $.makeSlice<number>(4, undefined, "byte")
		$.sliceElems(x!)[$.sliceSlot(x!, 0)] = 5
		return [x, null]
	}

	public unmarshal(data: $.Slice<number>): boolean {
		const m: endOfEarlyDataMsg | $.VarRef<endOfEarlyDataMsg> | null = this;
		return $.sliceLen(data) == 4
	}

	static __typeInfo = $.registerStructType(
		"tls.endOfEarlyDataMsg",
		() => new endOfEarlyDataMsg(),
		() => [$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true)],
		endOfEarlyDataMsg,
		() => []
	)
}

export class keyUpdateMsg {
	public get updateRequested(): boolean {
		return this._fields.updateRequested
	}

	public set updateRequested(value: boolean) {
		this._fields.updateRequested = value
	}

	public _fields: {
		updateRequested: boolean
	}

	constructor(init?: Partial<{updateRequested?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			updateRequested: init?.updateRequested ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): keyUpdateMsg {
		return new keyUpdateMsg(this, true)
	}

	public __goscriptAssign(source: keyUpdateMsg): void {
		const target = this._fields
		const values = source._fields
		target.updateRequested = values.updateRequested
	}

	public async marshal(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: keyUpdateMsg | $.VarRef<keyUpdateMsg> | null = this;
		let b: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))
		b.value.AddUint8(24)
		await b.value.AddUint24LengthPrefixed($.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
			if ($.pointerValue<keyUpdateMsg>(m).updateRequested) {
				void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint8(1) : cryptobyte.Builder.prototype.AddUint8.call(b, 1))
			} else {
				void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint8(0) : cryptobyte.Builder.prototype.AddUint8.call(b, 0))
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))

		return b.value.Bytes()
	}

	public unmarshal(data: $.Slice<number>): boolean {
		let m: keyUpdateMsg | $.VarRef<keyUpdateMsg> | null = this;
		const m$: keyUpdateMsg = m == null ? $.pointerTarget<keyUpdateMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<keyUpdateMsg>(m)
		let s: $.VarRef<cryptobyte.String> = $.varRef(((data as cryptobyte.String) as cryptobyte.String))

		let updateRequested: $.VarRef<number> = $.varRef(0)
		if ((!cryptobyte.String_Skip(s, 4) || !cryptobyte.String_ReadUint8(s, updateRequested)) || !cryptobyte.String_Empty(s.value)) {
			return false
		}
		switch (updateRequested.value) {
			case 0:
			{
				;(m$ as keyUpdateMsg).updateRequested = false
				break
			}
			case 1:
			{
				;(m$ as keyUpdateMsg).updateRequested = true
				break
			}
			default:
			{
				return false
				break
			}
		}
		return true
	}

	static __typeInfo = $.registerStructType(
		"tls.keyUpdateMsg",
		() => new keyUpdateMsg(),
		() => [$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true)],
		keyUpdateMsg,
		() => [/* @__PURE__ */ $.structField("updateRequested", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "crypto/tls" })]
	)
}

export class newSessionTicketMsgTLS13 {
	public get lifetime(): number {
		return this._fields.lifetime
	}

	public set lifetime(value: number) {
		this._fields.lifetime = value
	}

	public get ageAdd(): number {
		return this._fields.ageAdd
	}

	public set ageAdd(value: number) {
		this._fields.ageAdd = value
	}

	public get nonce(): $.Slice<number> {
		return this._fields.nonce
	}

	public set nonce(value: $.Slice<number>) {
		this._fields.nonce = value
	}

	public get label(): $.Slice<number> {
		return this._fields.label
	}

	public set label(value: $.Slice<number>) {
		this._fields.label = value
	}

	public get maxEarlyData(): number {
		return this._fields.maxEarlyData
	}

	public set maxEarlyData(value: number) {
		this._fields.maxEarlyData = value
	}

	public _fields: {
		lifetime: number
		ageAdd: number
		nonce: $.Slice<number>
		label: $.Slice<number>
		maxEarlyData: number
	}

	constructor(init?: Partial<{lifetime?: number, ageAdd?: number, nonce?: $.Slice<number>, label?: $.Slice<number>, maxEarlyData?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			lifetime: init?.lifetime ?? (0 as number),
			ageAdd: init?.ageAdd ?? (0 as number),
			nonce: init?.nonce ?? (null! as $.Slice<number>),
			label: init?.label ?? (null! as $.Slice<number>),
			maxEarlyData: init?.maxEarlyData ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): newSessionTicketMsgTLS13 {
		return new newSessionTicketMsgTLS13(this, true)
	}

	public __goscriptAssign(source: newSessionTicketMsgTLS13): void {
		const target = this._fields
		const values = source._fields
		target.lifetime = values.lifetime
		target.ageAdd = values.ageAdd
		target.nonce = values.nonce
		target.label = values.label
		target.maxEarlyData = values.maxEarlyData
	}

	public async marshal(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: newSessionTicketMsgTLS13 | $.VarRef<newSessionTicketMsgTLS13> | null = this;
		const m$: newSessionTicketMsgTLS13 = m == null ? $.pointerTarget<newSessionTicketMsgTLS13>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<newSessionTicketMsgTLS13>(m)
		let b: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))
		b.value.AddUint8(4)
		await b.value.AddUint24LengthPrefixed($.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint32((m$ as newSessionTicketMsgTLS13).lifetime) : cryptobyte.Builder.prototype.AddUint32.call(b, (m$ as newSessionTicketMsgTLS13).lifetime))
			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint32((m$ as newSessionTicketMsgTLS13).ageAdd) : cryptobyte.Builder.prototype.AddUint32.call(b, (m$ as newSessionTicketMsgTLS13).ageAdd))
			await cryptobyte.Builder.prototype.AddUint8LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
				void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes((m$ as newSessionTicketMsgTLS13).nonce) : cryptobyte.Builder.prototype.AddBytes.call(b, (m$ as newSessionTicketMsgTLS13).nonce))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
				void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes((m$ as newSessionTicketMsgTLS13).label) : cryptobyte.Builder.prototype.AddBytes.call(b, (m$ as newSessionTicketMsgTLS13).label))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))

			await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
				if ((m$ as newSessionTicketMsgTLS13).maxEarlyData > 0) {
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(42) : cryptobyte.Builder.prototype.AddUint16.call(b, 42))
					await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
						void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint32((m$ as newSessionTicketMsgTLS13).maxEarlyData) : cryptobyte.Builder.prototype.AddUint32.call(b, (m$ as newSessionTicketMsgTLS13).maxEarlyData))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))

		return b.value.Bytes()
	}

	public unmarshal(data: $.Slice<number>): boolean {
		let m: newSessionTicketMsgTLS13 | $.VarRef<newSessionTicketMsgTLS13> | null = this;
		const m$: newSessionTicketMsgTLS13 = m == null ? $.pointerTarget<newSessionTicketMsgTLS13>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<newSessionTicketMsgTLS13>(m)
		$.assignStruct((m$ as newSessionTicketMsgTLS13), new newSessionTicketMsgTLS13(undefined, true))
		let s: $.VarRef<cryptobyte.String> = $.varRef(((data as cryptobyte.String) as cryptobyte.String))

		let extensions: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
		if ((((((!cryptobyte.String_Skip(s, 4) || !cryptobyte.String_ReadUint32(s, $.fieldRef((m$ as newSessionTicketMsgTLS13)._fields, "lifetime"))) || !cryptobyte.String_ReadUint32(s, $.fieldRef((m$ as newSessionTicketMsgTLS13)._fields, "ageAdd"))) || !readUint8LengthPrefixed(s, $.fieldRef((m$ as newSessionTicketMsgTLS13)._fields, "nonce"))) || !readUint16LengthPrefixed(s, $.fieldRef((m$ as newSessionTicketMsgTLS13)._fields, "label"))) || !cryptobyte.String_ReadUint16LengthPrefixed(s, extensions)) || !cryptobyte.String_Empty(s.value)) {
			return false
		}

		while (!cryptobyte.String_Empty(extensions.value)) {
			let extension: $.VarRef<number> = $.varRef(0)
			let extData: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
			if (!cryptobyte.String_ReadUint16(extensions, extension) || !cryptobyte.String_ReadUint16LengthPrefixed(extensions, extData)) {
				return false
			}

			switch (extension.value) {
				case 42:
				{
					if (!cryptobyte.String_ReadUint32(extData, $.fieldRef((m$ as newSessionTicketMsgTLS13)._fields, "maxEarlyData"))) {
						return false
					}
					break
				}
				default:
				{
					continue
					break
				}
			}

			if (!cryptobyte.String_Empty(extData.value)) {
				return false
			}
		}

		return true
	}

	static __typeInfo = $.registerStructType(
		"tls.newSessionTicketMsgTLS13",
		() => new newSessionTicketMsgTLS13(),
		() => [$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true)],
		newSessionTicketMsgTLS13,
		() => [/* @__PURE__ */ $.structField("lifetime", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ageAdd", /* @__PURE__ */ $.basicType("uint32"), [1], 4, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 8, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("label", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 32, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("maxEarlyData", /* @__PURE__ */ $.basicType("uint32"), [4], 56, false, { pkgPath: "crypto/tls" })]
	)
}

export class certificateRequestMsgTLS13 {
	public get ocspStapling(): boolean {
		return this._fields.ocspStapling
	}

	public set ocspStapling(value: boolean) {
		this._fields.ocspStapling = value
	}

	public get scts(): boolean {
		return this._fields.scts
	}

	public set scts(value: boolean) {
		this._fields.scts = value
	}

	public get supportedSignatureAlgorithms(): $.Slice<__goscript_common.SignatureScheme> {
		return this._fields.supportedSignatureAlgorithms
	}

	public set supportedSignatureAlgorithms(value: $.Slice<__goscript_common.SignatureScheme>) {
		this._fields.supportedSignatureAlgorithms = value
	}

	public get supportedSignatureAlgorithmsCert(): $.Slice<__goscript_common.SignatureScheme> {
		return this._fields.supportedSignatureAlgorithmsCert
	}

	public set supportedSignatureAlgorithmsCert(value: $.Slice<__goscript_common.SignatureScheme>) {
		this._fields.supportedSignatureAlgorithmsCert = value
	}

	public get certificateAuthorities(): $.Slice<$.Slice<number>> {
		return this._fields.certificateAuthorities
	}

	public set certificateAuthorities(value: $.Slice<$.Slice<number>>) {
		this._fields.certificateAuthorities = value
	}

	public _fields: {
		ocspStapling: boolean
		scts: boolean
		supportedSignatureAlgorithms: $.Slice<__goscript_common.SignatureScheme>
		supportedSignatureAlgorithmsCert: $.Slice<__goscript_common.SignatureScheme>
		certificateAuthorities: $.Slice<$.Slice<number>>
	}

	constructor(init?: Partial<{ocspStapling?: boolean, scts?: boolean, supportedSignatureAlgorithms?: $.Slice<__goscript_common.SignatureScheme>, supportedSignatureAlgorithmsCert?: $.Slice<__goscript_common.SignatureScheme>, certificateAuthorities?: $.Slice<$.Slice<number>>}>, __goscriptValue?: boolean) {
		this._fields = {
			ocspStapling: init?.ocspStapling ?? (false as boolean),
			scts: init?.scts ?? (false as boolean),
			supportedSignatureAlgorithms: init?.supportedSignatureAlgorithms ?? (null! as $.Slice<__goscript_common.SignatureScheme>),
			supportedSignatureAlgorithmsCert: init?.supportedSignatureAlgorithmsCert ?? (null! as $.Slice<__goscript_common.SignatureScheme>),
			certificateAuthorities: init?.certificateAuthorities ?? (null! as $.Slice<$.Slice<number>>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): certificateRequestMsgTLS13 {
		return new certificateRequestMsgTLS13(this, true)
	}

	public __goscriptAssign(source: certificateRequestMsgTLS13): void {
		const target = this._fields
		const values = source._fields
		target.ocspStapling = values.ocspStapling
		target.scts = values.scts
		target.supportedSignatureAlgorithms = values.supportedSignatureAlgorithms
		target.supportedSignatureAlgorithmsCert = values.supportedSignatureAlgorithmsCert
		target.certificateAuthorities = values.certificateAuthorities
	}

	public async marshal(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: certificateRequestMsgTLS13 | $.VarRef<certificateRequestMsgTLS13> | null = this;
		const m$: certificateRequestMsgTLS13 = m == null ? $.pointerTarget<certificateRequestMsgTLS13>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<certificateRequestMsgTLS13>(m)
		let b: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))
		b.value.AddUint8(13)
		await b.value.AddUint24LengthPrefixed($.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
			// certificate_request_context (SHALL be zero length unless used for
			// post-handshake authentication)
			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint8(0) : cryptobyte.Builder.prototype.AddUint8.call(b, 0))

			await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
				if ((m$ as certificateRequestMsgTLS13).ocspStapling) {
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(5) : cryptobyte.Builder.prototype.AddUint16.call(b, 5))
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(0) : cryptobyte.Builder.prototype.AddUint16.call(b, 0))
				}
				if ((m$ as certificateRequestMsgTLS13).scts) {
					// RFC 8446, Section 4.4.2.1 makes no mention of
					// signed_certificate_timestamp in CertificateRequest, but
					// "Extensions in the Certificate message from the client MUST
					// correspond to extensions in the CertificateRequest message
					// from the server." and it appears in the table in Section 4.2.
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(18) : cryptobyte.Builder.prototype.AddUint16.call(b, 18))
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(0) : cryptobyte.Builder.prototype.AddUint16.call(b, 0))
				}
				if ($.sliceLen((m$ as certificateRequestMsgTLS13).supportedSignatureAlgorithms) > 0) {
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(13) : cryptobyte.Builder.prototype.AddUint16.call(b, 13))
					await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
						await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
							for (let __goscriptRangeTarget13 = (m$ as certificateRequestMsgTLS13).supportedSignatureAlgorithms, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
								let sigAlgo = $.uint((__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as __goscript_common.SignatureScheme), 16)
								void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16($.uint(sigAlgo, 16)) : cryptobyte.Builder.prototype.AddUint16.call(b, $.uint(sigAlgo, 16)))
							}
						}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}
				if ($.sliceLen((m$ as certificateRequestMsgTLS13).supportedSignatureAlgorithmsCert) > 0) {
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(50) : cryptobyte.Builder.prototype.AddUint16.call(b, 50))
					await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
						await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
							for (let __goscriptRangeTarget14 = (m$ as certificateRequestMsgTLS13).supportedSignatureAlgorithmsCert, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
								let sigAlgo = $.uint((__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as __goscript_common.SignatureScheme), 16)
								void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16($.uint(sigAlgo, 16)) : cryptobyte.Builder.prototype.AddUint16.call(b, $.uint(sigAlgo, 16)))
							}
						}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}
				if ($.sliceLen((m$ as certificateRequestMsgTLS13).certificateAuthorities) > 0) {
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(47) : cryptobyte.Builder.prototype.AddUint16.call(b, 47))
					await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
						await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
							for (let __goscriptRangeTarget15 = (m$ as certificateRequestMsgTLS13).certificateAuthorities, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow15.length; __rangeIndex++) {
								let ca = (__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + __rangeIndex] as $.Slice<number>)
								await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
									void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes(ca) : cryptobyte.Builder.prototype.AddBytes.call(b, ca))
								}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
							}
						}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))

		return b.value.Bytes()
	}

	public unmarshal(data: $.Slice<number>): boolean {
		let m: certificateRequestMsgTLS13 | $.VarRef<certificateRequestMsgTLS13> | null = this;
		const m$: certificateRequestMsgTLS13 = m == null ? $.pointerTarget<certificateRequestMsgTLS13>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<certificateRequestMsgTLS13>(m)
		$.assignStruct((m$ as certificateRequestMsgTLS13), new certificateRequestMsgTLS13(undefined, true))
		let s: $.VarRef<cryptobyte.String> = $.varRef(((data as cryptobyte.String) as cryptobyte.String))

		let context: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
		let extensions: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
		if ((((!cryptobyte.String_Skip(s, 4) || !cryptobyte.String_ReadUint8LengthPrefixed(s, context)) || !cryptobyte.String_Empty(context.value)) || !cryptobyte.String_ReadUint16LengthPrefixed(s, extensions)) || !cryptobyte.String_Empty(s.value)) {
			return false
		}

		while (!cryptobyte.String_Empty(extensions.value)) {
			let extension: $.VarRef<number> = $.varRef(0)
			let extData: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
			if (!cryptobyte.String_ReadUint16(extensions, extension) || !cryptobyte.String_ReadUint16LengthPrefixed(extensions, extData)) {
				return false
			}

			switch (extension.value) {
				case 5:
				{
					;(m$ as certificateRequestMsgTLS13).ocspStapling = true
					break
				}
				case 18:
				{
					;(m$ as certificateRequestMsgTLS13).scts = true
					break
				}
				case 13:
				{
					let sigAndAlgs: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadUint16LengthPrefixed(extData, sigAndAlgs) || cryptobyte.String_Empty(sigAndAlgs.value)) {
						return false
					}
					while (!cryptobyte.String_Empty(sigAndAlgs.value)) {
						let sigAndAlg: $.VarRef<number> = $.varRef(0)
						if (!cryptobyte.String_ReadUint16(sigAndAlgs, sigAndAlg)) {
							return false
						}
						;(m$ as certificateRequestMsgTLS13).supportedSignatureAlgorithms = $.appendOne((m$ as certificateRequestMsgTLS13).supportedSignatureAlgorithms, $.uint($.uint(sigAndAlg.value, 16), 16))
					}
					break
				}
				case 50:
				{
					let sigAndAlgs: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadUint16LengthPrefixed(extData, sigAndAlgs) || cryptobyte.String_Empty(sigAndAlgs.value)) {
						return false
					}
					while (!cryptobyte.String_Empty(sigAndAlgs.value)) {
						let sigAndAlg: $.VarRef<number> = $.varRef(0)
						if (!cryptobyte.String_ReadUint16(sigAndAlgs, sigAndAlg)) {
							return false
						}
						;(m$ as certificateRequestMsgTLS13).supportedSignatureAlgorithmsCert = $.appendOne((m$ as certificateRequestMsgTLS13).supportedSignatureAlgorithmsCert, $.uint($.uint(sigAndAlg.value, 16), 16))
					}
					break
				}
				case 47:
				{
					let auths: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadUint16LengthPrefixed(extData, auths) || cryptobyte.String_Empty(auths.value)) {
						return false
					}
					while (!cryptobyte.String_Empty(auths.value)) {
						let ca: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
						if (!readUint16LengthPrefixed(auths, ca) || ($.sliceLen(ca.value) == 0)) {
							return false
						}
						;(m$ as certificateRequestMsgTLS13).certificateAuthorities = $.appendOne((m$ as certificateRequestMsgTLS13).certificateAuthorities, ca.value, $.appendZeros.nil)
					}
					break
				}
				default:
				{
					continue
					break
				}
			}

			if (!cryptobyte.String_Empty(extData.value)) {
				return false
			}
		}

		return true
	}

	static __typeInfo = $.registerStructType(
		"tls.certificateRequestMsgTLS13",
		() => new certificateRequestMsgTLS13(),
		() => [$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true)],
		certificateRequestMsgTLS13,
		() => [/* @__PURE__ */ $.structField("ocspStapling", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("scts", /* @__PURE__ */ $.basicType("bool"), [1], 1, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("supportedSignatureAlgorithms", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16", "tls.SignatureScheme")), [2], 8, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("supportedSignatureAlgorithmsCert", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16", "tls.SignatureScheme")), [3], 32, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("certificateAuthorities", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [4], 56, false, { pkgPath: "crypto/tls" })]
	)
}

export class certificateMsg {
	public get certificates(): $.Slice<$.Slice<number>> {
		return this._fields.certificates
	}

	public set certificates(value: $.Slice<$.Slice<number>>) {
		this._fields.certificates = value
	}

	public _fields: {
		certificates: $.Slice<$.Slice<number>>
	}

	constructor(init?: Partial<{certificates?: $.Slice<$.Slice<number>>}>, __goscriptValue?: boolean) {
		this._fields = {
			certificates: init?.certificates ?? (null! as $.Slice<$.Slice<number>>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): certificateMsg {
		return new certificateMsg(this, true)
	}

	public __goscriptAssign(source: certificateMsg): void {
		const target = this._fields
		const values = source._fields
		target.certificates = values.certificates
	}

	public marshal(): [$.Slice<number>, $.GoError] {
		const m: certificateMsg | $.VarRef<certificateMsg> | null = this;
		const m$: certificateMsg = m == null ? $.pointerTarget<certificateMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<certificateMsg>(m)
		let i: number = 0
		for (let __goscriptRangeTarget16 = (m$ as certificateMsg).certificates, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow16.length; __rangeIndex++) {
			let slice = (__goscriptRangeWindow16.backing[__goscriptRangeWindow16.offset + __rangeIndex] as $.Slice<number>)
			i = i + ($.sliceLen(slice))
		}

		let length = (3 + (3 * $.sliceLen((m$ as certificateMsg).certificates))) + i
		let x: $.Slice<number> = $.makeSlice<number>(4 + length, undefined, "byte")
		$.sliceElems(x!)[$.sliceSlot(x!, 0)] = 11
		$.sliceElems(x!)[$.sliceSlot(x!, 1)] = $.uint(length >> 16, 8)
		$.sliceElems(x!)[$.sliceSlot(x!, 2)] = $.uint(length >> 8, 8)
		$.sliceElems(x!)[$.sliceSlot(x!, 3)] = $.uint(length, 8)

		let certificateOctets = length - 3
		$.sliceElems(x!)[$.sliceSlot(x!, 4)] = $.uint(certificateOctets >> 16, 8)
		$.sliceElems(x!)[$.sliceSlot(x!, 5)] = $.uint(certificateOctets >> 8, 8)
		$.sliceElems(x!)[$.sliceSlot(x!, 6)] = $.uint(certificateOctets, 8)

		let y: $.Slice<number> = $.goSlice(x, 7, undefined)
		for (let __goscriptRangeTarget17 = (m$ as certificateMsg).certificates, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow17.length; __rangeIndex++) {
			let slice = (__goscriptRangeWindow17.backing[__goscriptRangeWindow17.offset + __rangeIndex] as $.Slice<number>)
			$.sliceElems(y!)[$.sliceSlot(y!, 0)] = $.uint($.sliceLen(slice) >> 16, 8)
			$.sliceElems(y!)[$.sliceSlot(y!, 1)] = $.uint($.sliceLen(slice) >> 8, 8)
			$.sliceElems(y!)[$.sliceSlot(y!, 2)] = $.uint($.sliceLen(slice), 8)
			$.copy($.goSlice(y, 3, undefined), slice)
			y = $.goSlice(y, 3 + $.sliceLen(slice), undefined)
		}

		return [x, null]
	}

	public unmarshal(data: $.Slice<number>): boolean {
		let m: certificateMsg | $.VarRef<certificateMsg> | null = this;
		const m$: certificateMsg = m == null ? $.pointerTarget<certificateMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<certificateMsg>(m)
		if ($.sliceLen(data) < 7) {
			return false
		}

		let certsLen = $.uint((((($.uint($.arrayIndex(data!, 4), 32) << 16) >>> 0)) | ((($.uint($.arrayIndex(data!, 5), 32) << 8) >>> 0))) | $.uint($.arrayIndex(data!, 6), 32), 32)
		if ($.uint($.sliceLen(data), 32) != $.uint((((certsLen + 7) >>> 0)), 32)) {
			return false
		}

		let numCerts = 0
		let d: $.Slice<number> = $.goSlice(data, 7, undefined)
		while (certsLen > 0) {
			if ($.sliceLen(d) < 4) {
				return false
			}
			let certLen: number = $.uint((((($.uint($.arrayIndex(d!, 0), 32) << 16) >>> 0)) | ((($.uint($.arrayIndex(d!, 1), 32) << 8) >>> 0))) | $.uint($.arrayIndex(d!, 2), 32), 32)
			if ($.uint($.sliceLen(d), 32) < $.uint((((3 + certLen) >>> 0)), 32)) {
				return false
			}
			d = $.goSlice(d, ((3 + certLen) >>> 0), undefined)
			certsLen = $.uint(certsLen - ($.uint(((3 + certLen) >>> 0), 32)), 32)
			numCerts++
		}

		;(m$ as certificateMsg).certificates = $.makeSlice<$.Slice<number>>(numCerts)
		d = $.goSlice(data, 7, undefined)
		for (let i = 0; i < numCerts; i++) {
			let certLen: number = $.uint((((($.uint($.arrayIndex(d!, 0), 32) << 16) >>> 0)) | ((($.uint($.arrayIndex(d!, 1), 32) << 8) >>> 0))) | $.uint($.arrayIndex(d!, 2), 32), 32)
			$.sliceElems((m$ as certificateMsg).certificates!)[$.sliceSlot((m$ as certificateMsg).certificates!, i)] = $.goSlice(d, 3, ((3 + certLen) >>> 0))
			d = $.goSlice(d, ((3 + certLen) >>> 0), undefined)
		}

		return true
	}

	static __typeInfo = $.registerStructType(
		"tls.certificateMsg",
		() => new certificateMsg(),
		() => [$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true)],
		certificateMsg,
		() => [/* @__PURE__ */ $.structField("certificates", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [0], 0, false, { pkgPath: "crypto/tls" })]
	)
}

export class certificateMsgTLS13 {
	public get certificate(): __goscript_common.Certificate {
		return this._fields.certificate
	}

	public set certificate(value: __goscript_common.Certificate) {
		this._fields.certificate = value
	}

	public get ocspStapling(): boolean {
		return this._fields.ocspStapling
	}

	public set ocspStapling(value: boolean) {
		this._fields.ocspStapling = value
	}

	public get scts(): boolean {
		return this._fields.scts
	}

	public set scts(value: boolean) {
		this._fields.scts = value
	}

	public _fields: {
		certificate: __goscript_common.Certificate
		ocspStapling: boolean
		scts: boolean
	}

	constructor(init?: Partial<{certificate?: __goscript_common.Certificate, ocspStapling?: boolean, scts?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			certificate: init?.certificate ? init.certificate.clone() : new __goscript_common.Certificate(undefined, true),
			ocspStapling: init?.ocspStapling ?? (false as boolean),
			scts: init?.scts ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): certificateMsgTLS13 {
		return new certificateMsgTLS13(this, true)
	}

	public __goscriptAssign(source: certificateMsgTLS13): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.certificate, values.certificate)
		target.ocspStapling = values.ocspStapling
		target.scts = values.scts
	}

	public async marshal(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: certificateMsgTLS13 | $.VarRef<certificateMsgTLS13> | null = this;
		const m$: certificateMsgTLS13 = m == null ? $.pointerTarget<certificateMsgTLS13>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<certificateMsgTLS13>(m)
		let b: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))
		b.value.AddUint8(11)
		await b.value.AddUint24LengthPrefixed($.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint8(0) : cryptobyte.Builder.prototype.AddUint8.call(b, 0))

			let certificate = ((m$ as certificateMsgTLS13).certificate).clone()
			if (!(m$ as certificateMsgTLS13).ocspStapling) {
				certificate.OCSPStaple = null
			}
			if (!(m$ as certificateMsgTLS13).scts) {
				certificate.SignedCertificateTimestamps = null
			}
			await marshalCertificate(b, (certificate).clone())
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))

		return b.value.Bytes()
	}

	public unmarshal(data: $.Slice<number>): boolean {
		let m: certificateMsgTLS13 | $.VarRef<certificateMsgTLS13> | null = this;
		const m$: certificateMsgTLS13 = m == null ? $.pointerTarget<certificateMsgTLS13>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<certificateMsgTLS13>(m)
		$.assignStruct((m$ as certificateMsgTLS13), new certificateMsgTLS13(undefined, true))
		let s: $.VarRef<cryptobyte.String> = $.varRef(((data as cryptobyte.String) as cryptobyte.String))

		let context: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
		if ((((!cryptobyte.String_Skip(s, 4) || !cryptobyte.String_ReadUint8LengthPrefixed(s, context)) || !cryptobyte.String_Empty(context.value)) || !unmarshalCertificate(s, $.fieldRef((m$ as certificateMsgTLS13)._fields, "certificate"))) || !cryptobyte.String_Empty(s.value)) {
			return false
		}

		;(m$ as certificateMsgTLS13).scts = (m$ as certificateMsgTLS13).certificate.SignedCertificateTimestamps != null;
		;(m$ as certificateMsgTLS13).ocspStapling = (m$ as certificateMsgTLS13).certificate.OCSPStaple != null

		return true
	}

	static __typeInfo = $.registerStructType(
		"tls.certificateMsgTLS13",
		() => new certificateMsgTLS13(),
		() => [$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true)],
		certificateMsgTLS13,
		() => [/* @__PURE__ */ $.structField("certificate", "tls.Certificate", [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ocspStapling", /* @__PURE__ */ $.basicType("bool"), [1], 120, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("scts", /* @__PURE__ */ $.basicType("bool"), [2], 121, false, { pkgPath: "crypto/tls" })]
	)
}

export class serverKeyExchangeMsg {
	public get key(): $.Slice<number> {
		return this._fields.key
	}

	public set key(value: $.Slice<number>) {
		this._fields.key = value
	}

	public _fields: {
		key: $.Slice<number>
	}

	constructor(init?: Partial<{key?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			key: init?.key ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): serverKeyExchangeMsg {
		return new serverKeyExchangeMsg(this, true)
	}

	public __goscriptAssign(source: serverKeyExchangeMsg): void {
		const target = this._fields
		const values = source._fields
		target.key = values.key
	}

	public marshal(): [$.Slice<number>, $.GoError] {
		const m: serverKeyExchangeMsg | $.VarRef<serverKeyExchangeMsg> | null = this;
		const m$: serverKeyExchangeMsg = m == null ? $.pointerTarget<serverKeyExchangeMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<serverKeyExchangeMsg>(m)
		let length = $.sliceLen((m$ as serverKeyExchangeMsg).key)
		let x: $.Slice<number> = $.makeSlice<number>(length + 4, undefined, "byte")
		$.sliceElems(x!)[$.sliceSlot(x!, 0)] = 12
		$.sliceElems(x!)[$.sliceSlot(x!, 1)] = $.uint(length >> 16, 8)
		$.sliceElems(x!)[$.sliceSlot(x!, 2)] = $.uint(length >> 8, 8)
		$.sliceElems(x!)[$.sliceSlot(x!, 3)] = $.uint(length, 8)
		$.copy($.goSlice(x, 4, undefined), (m$ as serverKeyExchangeMsg).key)

		return [x, null]
	}

	public unmarshal(data: $.Slice<number>): boolean {
		let m: serverKeyExchangeMsg | $.VarRef<serverKeyExchangeMsg> | null = this;
		if ($.sliceLen(data) < 4) {
			return false
		}
		$.pointerValue<serverKeyExchangeMsg>(m).key = $.goSlice(data, 4, undefined)
		return true
	}

	static __typeInfo = $.registerStructType(
		"tls.serverKeyExchangeMsg",
		() => new serverKeyExchangeMsg(),
		() => [$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true)],
		serverKeyExchangeMsg,
		() => [/* @__PURE__ */ $.structField("key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "crypto/tls" })]
	)
}

export class certificateStatusMsg {
	public get response(): $.Slice<number> {
		return this._fields.response
	}

	public set response(value: $.Slice<number>) {
		this._fields.response = value
	}

	public _fields: {
		response: $.Slice<number>
	}

	constructor(init?: Partial<{response?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			response: init?.response ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): certificateStatusMsg {
		return new certificateStatusMsg(this, true)
	}

	public __goscriptAssign(source: certificateStatusMsg): void {
		const target = this._fields
		const values = source._fields
		target.response = values.response
	}

	public async marshal(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: certificateStatusMsg | $.VarRef<certificateStatusMsg> | null = this;
		let b: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))
		b.value.AddUint8(22)
		await b.value.AddUint24LengthPrefixed($.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint8(1) : cryptobyte.Builder.prototype.AddUint8.call(b, 1))
			await cryptobyte.Builder.prototype.AddUint24LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
				void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes($.pointerValue<certificateStatusMsg>(m).response) : cryptobyte.Builder.prototype.AddBytes.call(b, $.pointerValue<certificateStatusMsg>(m).response))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))

		return b.value.Bytes()
	}

	public unmarshal(data: $.Slice<number>): boolean {
		const m: certificateStatusMsg | $.VarRef<certificateStatusMsg> | null = this;
		const m$: certificateStatusMsg = m == null ? $.pointerTarget<certificateStatusMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<certificateStatusMsg>(m)
		let s: $.VarRef<cryptobyte.String> = $.varRef(((data as cryptobyte.String) as cryptobyte.String))

		let statusType: $.VarRef<number> = $.varRef(0)
		if (((((!cryptobyte.String_Skip(s, 4) || !cryptobyte.String_ReadUint8(s, statusType)) || (statusType.value != 1)) || !readUint24LengthPrefixed(s, $.fieldRef((m$ as certificateStatusMsg)._fields, "response"))) || ($.sliceLen((m$ as certificateStatusMsg).response) == 0)) || !cryptobyte.String_Empty(s.value)) {
			return false
		}
		return true
	}

	static __typeInfo = $.registerStructType(
		"tls.certificateStatusMsg",
		() => new certificateStatusMsg(),
		() => [$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true)],
		certificateStatusMsg,
		() => [/* @__PURE__ */ $.structField("response", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "crypto/tls" })]
	)
}

export class serverHelloDoneMsg {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): serverHelloDoneMsg {
		return new serverHelloDoneMsg(this, true)
	}

	public __goscriptAssign(source: serverHelloDoneMsg): void {
	}

	public marshal(): [$.Slice<number>, $.GoError] {
		const m: serverHelloDoneMsg | $.VarRef<serverHelloDoneMsg> | null = this;
		let x: $.Slice<number> = $.makeSlice<number>(4, undefined, "byte")
		$.sliceElems(x!)[$.sliceSlot(x!, 0)] = 14
		return [x, null]
	}

	public unmarshal(data: $.Slice<number>): boolean {
		const m: serverHelloDoneMsg | $.VarRef<serverHelloDoneMsg> | null = this;
		return $.sliceLen(data) == 4
	}

	static __typeInfo = $.registerStructType(
		"tls.serverHelloDoneMsg",
		() => new serverHelloDoneMsg(),
		() => [$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true)],
		serverHelloDoneMsg,
		() => []
	)
}

export class clientKeyExchangeMsg {
	public get ciphertext(): $.Slice<number> {
		return this._fields.ciphertext
	}

	public set ciphertext(value: $.Slice<number>) {
		this._fields.ciphertext = value
	}

	public _fields: {
		ciphertext: $.Slice<number>
	}

	constructor(init?: Partial<{ciphertext?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			ciphertext: init?.ciphertext ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): clientKeyExchangeMsg {
		return new clientKeyExchangeMsg(this, true)
	}

	public __goscriptAssign(source: clientKeyExchangeMsg): void {
		const target = this._fields
		const values = source._fields
		target.ciphertext = values.ciphertext
	}

	public marshal(): [$.Slice<number>, $.GoError] {
		const m: clientKeyExchangeMsg | $.VarRef<clientKeyExchangeMsg> | null = this;
		const m$: clientKeyExchangeMsg = m == null ? $.pointerTarget<clientKeyExchangeMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<clientKeyExchangeMsg>(m)
		let length = $.sliceLen((m$ as clientKeyExchangeMsg).ciphertext)
		let x: $.Slice<number> = $.makeSlice<number>(length + 4, undefined, "byte")
		$.sliceElems(x!)[$.sliceSlot(x!, 0)] = 16
		$.sliceElems(x!)[$.sliceSlot(x!, 1)] = $.uint(length >> 16, 8)
		$.sliceElems(x!)[$.sliceSlot(x!, 2)] = $.uint(length >> 8, 8)
		$.sliceElems(x!)[$.sliceSlot(x!, 3)] = $.uint(length, 8)
		$.copy($.goSlice(x, 4, undefined), (m$ as clientKeyExchangeMsg).ciphertext)

		return [x, null]
	}

	public unmarshal(data: $.Slice<number>): boolean {
		let m: clientKeyExchangeMsg | $.VarRef<clientKeyExchangeMsg> | null = this;
		if ($.sliceLen(data) < 4) {
			return false
		}
		let l = (($.int($.arrayIndex(data!, 1)) << 16) | ($.int($.arrayIndex(data!, 2)) << 8)) | $.int($.arrayIndex(data!, 3))
		if (l != ($.sliceLen(data) - 4)) {
			return false
		}
		$.pointerValue<clientKeyExchangeMsg>(m).ciphertext = $.goSlice(data, 4, undefined)
		return true
	}

	static __typeInfo = $.registerStructType(
		"tls.clientKeyExchangeMsg",
		() => new clientKeyExchangeMsg(),
		() => [$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true)],
		clientKeyExchangeMsg,
		() => [/* @__PURE__ */ $.structField("ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "crypto/tls" })]
	)
}

export class finishedMsg {
	public get verifyData(): $.Slice<number> {
		return this._fields.verifyData
	}

	public set verifyData(value: $.Slice<number>) {
		this._fields.verifyData = value
	}

	public _fields: {
		verifyData: $.Slice<number>
	}

	constructor(init?: Partial<{verifyData?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			verifyData: init?.verifyData ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): finishedMsg {
		return new finishedMsg(this, true)
	}

	public __goscriptAssign(source: finishedMsg): void {
		const target = this._fields
		const values = source._fields
		target.verifyData = values.verifyData
	}

	public async marshal(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: finishedMsg | $.VarRef<finishedMsg> | null = this;
		let b: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))
		b.value.AddUint8(20)
		await b.value.AddUint24LengthPrefixed($.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes($.pointerValue<finishedMsg>(m).verifyData) : cryptobyte.Builder.prototype.AddBytes.call(b, $.pointerValue<finishedMsg>(m).verifyData))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))

		return b.value.Bytes()
	}

	public unmarshal(data: $.Slice<number>): boolean {
		const m: finishedMsg | $.VarRef<finishedMsg> | null = this;
		let s: $.VarRef<cryptobyte.String> = $.varRef(((data as cryptobyte.String) as cryptobyte.String))
		return (cryptobyte.String_Skip(s, 1) && readUint24LengthPrefixed(s, $.fieldRef($.pointerValue<finishedMsg>(m)._fields, "verifyData"))) && cryptobyte.String_Empty(s.value)
	}

	static __typeInfo = $.registerStructType(
		"tls.finishedMsg",
		() => new finishedMsg(),
		() => [$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true)],
		finishedMsg,
		() => [/* @__PURE__ */ $.structField("verifyData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "crypto/tls" })]
	)
}

export class certificateRequestMsg {
	// hasSignatureAlgorithm indicates whether this message includes a list of
	// supported signature algorithms. This change was introduced with TLS 1.2.
	public get hasSignatureAlgorithm(): boolean {
		return this._fields.hasSignatureAlgorithm
	}

	public set hasSignatureAlgorithm(value: boolean) {
		this._fields.hasSignatureAlgorithm = value
	}

	public get certificateTypes(): $.Slice<number> {
		return this._fields.certificateTypes
	}

	public set certificateTypes(value: $.Slice<number>) {
		this._fields.certificateTypes = value
	}

	public get supportedSignatureAlgorithms(): $.Slice<__goscript_common.SignatureScheme> {
		return this._fields.supportedSignatureAlgorithms
	}

	public set supportedSignatureAlgorithms(value: $.Slice<__goscript_common.SignatureScheme>) {
		this._fields.supportedSignatureAlgorithms = value
	}

	public get certificateAuthorities(): $.Slice<$.Slice<number>> {
		return this._fields.certificateAuthorities
	}

	public set certificateAuthorities(value: $.Slice<$.Slice<number>>) {
		this._fields.certificateAuthorities = value
	}

	public _fields: {
		hasSignatureAlgorithm: boolean
		certificateTypes: $.Slice<number>
		supportedSignatureAlgorithms: $.Slice<__goscript_common.SignatureScheme>
		certificateAuthorities: $.Slice<$.Slice<number>>
	}

	constructor(init?: Partial<{hasSignatureAlgorithm?: boolean, certificateTypes?: $.Slice<number>, supportedSignatureAlgorithms?: $.Slice<__goscript_common.SignatureScheme>, certificateAuthorities?: $.Slice<$.Slice<number>>}>, __goscriptValue?: boolean) {
		this._fields = {
			hasSignatureAlgorithm: init?.hasSignatureAlgorithm ?? (false as boolean),
			certificateTypes: init?.certificateTypes ?? (null! as $.Slice<number>),
			supportedSignatureAlgorithms: init?.supportedSignatureAlgorithms ?? (null! as $.Slice<__goscript_common.SignatureScheme>),
			certificateAuthorities: init?.certificateAuthorities ?? (null! as $.Slice<$.Slice<number>>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): certificateRequestMsg {
		return new certificateRequestMsg(this, true)
	}

	public __goscriptAssign(source: certificateRequestMsg): void {
		const target = this._fields
		const values = source._fields
		target.hasSignatureAlgorithm = values.hasSignatureAlgorithm
		target.certificateTypes = values.certificateTypes
		target.supportedSignatureAlgorithms = values.supportedSignatureAlgorithms
		target.certificateAuthorities = values.certificateAuthorities
	}

	public marshal(): [$.Slice<number>, $.GoError] {
		const m: certificateRequestMsg | $.VarRef<certificateRequestMsg> | null = this;
		const m$: certificateRequestMsg = m == null ? $.pointerTarget<certificateRequestMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<certificateRequestMsg>(m)
		// See RFC 4346, Section 7.4.4.
		let length = (1 + $.sliceLen((m$ as certificateRequestMsg).certificateTypes)) + 2
		let casLength = 0
		for (let __goscriptRangeTarget20 = (m$ as certificateRequestMsg).certificateAuthorities, __goscriptRangeWindow20 = $.sliceRange(__goscriptRangeTarget20), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow20.length; __rangeIndex++) {
			let ca = (__goscriptRangeWindow20.backing[__goscriptRangeWindow20.offset + __rangeIndex] as $.Slice<number>)
			casLength = casLength + (2 + $.sliceLen(ca))
		}
		length = length + (casLength)

		if ((m$ as certificateRequestMsg).hasSignatureAlgorithm) {
			length = length + (2 + (2 * $.sliceLen((m$ as certificateRequestMsg).supportedSignatureAlgorithms)))
		}

		let x: $.Slice<number> = $.makeSlice<number>(4 + length, undefined, "byte")
		$.sliceElems(x!)[$.sliceSlot(x!, 0)] = 13
		$.sliceElems(x!)[$.sliceSlot(x!, 1)] = $.uint(length >> 16, 8)
		$.sliceElems(x!)[$.sliceSlot(x!, 2)] = $.uint(length >> 8, 8)
		$.sliceElems(x!)[$.sliceSlot(x!, 3)] = $.uint(length, 8)

		$.sliceElems(x!)[$.sliceSlot(x!, 4)] = $.uint($.sliceLen((m$ as certificateRequestMsg).certificateTypes), 8)

		$.copy($.goSlice(x, 5, undefined), (m$ as certificateRequestMsg).certificateTypes)
		let y: $.Slice<number> = $.goSlice(x, 5 + $.sliceLen((m$ as certificateRequestMsg).certificateTypes), undefined)

		if ((m$ as certificateRequestMsg).hasSignatureAlgorithm) {
			let n = $.sliceLen((m$ as certificateRequestMsg).supportedSignatureAlgorithms) * 2
			$.sliceElems(y!)[$.sliceSlot(y!, 0)] = $.uint(n >> 8, 8)
			$.sliceElems(y!)[$.sliceSlot(y!, 1)] = $.uint(n, 8)
			y = $.goSlice(y, 2, undefined)
			for (let __goscriptRangeTarget21 = (m$ as certificateRequestMsg).supportedSignatureAlgorithms, __goscriptRangeWindow21 = $.sliceRange(__goscriptRangeTarget21), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow21.length; __rangeIndex++) {
				let sigAlgo = $.uint((__goscriptRangeWindow21.backing[__goscriptRangeWindow21.offset + __rangeIndex] as __goscript_common.SignatureScheme), 16)
				$.sliceElems(y!)[$.sliceSlot(y!, 0)] = $.uint($.uintShr(sigAlgo, 8, 16), 8)
				$.sliceElems(y!)[$.sliceSlot(y!, 1)] = $.uint(sigAlgo, 8)
				y = $.goSlice(y, 2, undefined)
			}
		}

		$.sliceElems(y!)[$.sliceSlot(y!, 0)] = $.uint(casLength >> 8, 8)
		$.sliceElems(y!)[$.sliceSlot(y!, 1)] = $.uint(casLength, 8)
		y = $.goSlice(y, 2, undefined)
		for (let __goscriptRangeTarget22 = (m$ as certificateRequestMsg).certificateAuthorities, __goscriptRangeWindow22 = $.sliceRange(__goscriptRangeTarget22), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow22.length; __rangeIndex++) {
			let ca = (__goscriptRangeWindow22.backing[__goscriptRangeWindow22.offset + __rangeIndex] as $.Slice<number>)
			$.sliceElems(y!)[$.sliceSlot(y!, 0)] = $.uint($.sliceLen(ca) >> 8, 8)
			$.sliceElems(y!)[$.sliceSlot(y!, 1)] = $.uint($.sliceLen(ca), 8)
			y = $.goSlice(y, 2, undefined)
			$.copy(y, ca)
			y = $.goSlice(y, $.sliceLen(ca), undefined)
		}

		return [x, null]
	}

	public unmarshal(data: $.Slice<number>): boolean {
		let m: certificateRequestMsg | $.VarRef<certificateRequestMsg> | null = this;
		const m$: certificateRequestMsg = m == null ? $.pointerTarget<certificateRequestMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<certificateRequestMsg>(m)
		if ($.sliceLen(data) < 5) {
			return false
		}

		let length = $.uint((((($.uint($.arrayIndex(data!, 1), 32) << 16) >>> 0)) | ((($.uint($.arrayIndex(data!, 2), 32) << 8) >>> 0))) | $.uint($.arrayIndex(data!, 3), 32), 32)
		if ($.uint(((($.uint($.sliceLen(data), 32) - 4) >>> 0)), 32) != length) {
			return false
		}

		let numCertTypes: number = $.int($.arrayIndex(data!, 4))
		data = $.goSlice(data, 5, undefined)
		if ((numCertTypes == 0) || ($.sliceLen(data) <= numCertTypes)) {
			return false
		}

		;(m$ as certificateRequestMsg).certificateTypes = $.makeSlice<number>(numCertTypes, undefined, "byte")
		if ($.copy((m$ as certificateRequestMsg).certificateTypes, data) != numCertTypes) {
			return false
		}

		data = $.goSlice(data, numCertTypes, undefined)

		if ((m$ as certificateRequestMsg).hasSignatureAlgorithm) {
			if ($.sliceLen(data) < 2) {
				return false
			}
			let sigAndHashLen = $.uint(((($.uint($.arrayIndex(data!, 0), 16) << 8) & 0xffff)) | $.uint($.arrayIndex(data!, 1), 16), 16)
			data = $.goSlice(data, 2, undefined)
			if (($.uint((sigAndHashLen & 1), 16) != 0) || (sigAndHashLen == 0)) {
				return false
			}
			if ($.sliceLen(data) < $.int(sigAndHashLen)) {
				return false
			}
			let numSigAlgos = $.uint(globalThis.Math.trunc(sigAndHashLen / 2), 16);
			;(m$ as certificateRequestMsg).supportedSignatureAlgorithms = $.makeSlice<__goscript_common.SignatureScheme>(numSigAlgos, undefined, "number")
			for (let __goscriptRangeTarget23 = (m$ as certificateRequestMsg).supportedSignatureAlgorithms, __goscriptRangeWindow23 = $.sliceRange(__goscriptRangeTarget23), i = 0; i < __goscriptRangeWindow23.length; i++) {
				$.sliceElems((m$ as certificateRequestMsg).supportedSignatureAlgorithms!)[$.sliceSlot((m$ as certificateRequestMsg).supportedSignatureAlgorithms!, i)] = $.uint(((($.uint($.arrayIndex(data!, 0), 16) << 8) & 0xffff)) | $.uint($.arrayIndex(data!, 1), 16), 16)
				data = $.goSlice(data, 2, undefined)
			}
		}

		if ($.sliceLen(data) < 2) {
			return false
		}
		let casLength: number = $.uint(((($.uint($.arrayIndex(data!, 0), 16) << 8) & 0xffff)) | $.uint($.arrayIndex(data!, 1), 16), 16)
		data = $.goSlice(data, 2, undefined)
		if ($.sliceLen(data) < $.int(casLength)) {
			return false
		}
		let cas: $.Slice<number> = $.makeSlice<number>(casLength, undefined, "byte")
		$.copy(cas, data)
		data = $.goSlice(data, casLength, undefined);

		;(m$ as certificateRequestMsg).certificateAuthorities = null
		while ($.sliceLen(cas) > 0) {
			if ($.sliceLen(cas) < 2) {
				return false
			}
			let caLen: number = $.uint(((($.uint($.arrayIndex(cas!, 0), 16) << 8) & 0xffff)) | $.uint($.arrayIndex(cas!, 1), 16), 16)
			cas = $.goSlice(cas, 2, undefined)

			if ($.sliceLen(cas) < $.int(caLen)) {
				return false
			}

			;(m$ as certificateRequestMsg).certificateAuthorities = $.appendOne((m$ as certificateRequestMsg).certificateAuthorities, $.goSlice(cas, undefined, caLen), $.appendZeros.nil)
			cas = $.goSlice(cas, caLen, undefined)
		}

		return $.sliceLen(data) == 0
	}

	static __typeInfo = $.registerStructType(
		"tls.certificateRequestMsg",
		() => new certificateRequestMsg(),
		() => [$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true)],
		certificateRequestMsg,
		() => [/* @__PURE__ */ $.structField("hasSignatureAlgorithm", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("certificateTypes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("supportedSignatureAlgorithms", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16", "tls.SignatureScheme")), [2], 32, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("certificateAuthorities", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [3], 56, false, { pkgPath: "crypto/tls" })]
	)
}

export class certificateVerifyMsg {
	public get hasSignatureAlgorithm(): boolean {
		return this._fields.hasSignatureAlgorithm
	}

	public set hasSignatureAlgorithm(value: boolean) {
		this._fields.hasSignatureAlgorithm = value
	}

	public get signatureAlgorithm(): __goscript_common.SignatureScheme {
		return this._fields.signatureAlgorithm
	}

	public set signatureAlgorithm(value: __goscript_common.SignatureScheme) {
		this._fields.signatureAlgorithm = value
	}

	public get signature(): $.Slice<number> {
		return this._fields.signature
	}

	public set signature(value: $.Slice<number>) {
		this._fields.signature = value
	}

	public _fields: {
		hasSignatureAlgorithm: boolean
		signatureAlgorithm: __goscript_common.SignatureScheme
		signature: $.Slice<number>
	}

	constructor(init?: Partial<{hasSignatureAlgorithm?: boolean, signatureAlgorithm?: __goscript_common.SignatureScheme, signature?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			hasSignatureAlgorithm: init?.hasSignatureAlgorithm ?? (false as boolean),
			signatureAlgorithm: init?.signatureAlgorithm ?? (0 as __goscript_common.SignatureScheme),
			signature: init?.signature ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): certificateVerifyMsg {
		return new certificateVerifyMsg(this, true)
	}

	public __goscriptAssign(source: certificateVerifyMsg): void {
		const target = this._fields
		const values = source._fields
		target.hasSignatureAlgorithm = values.hasSignatureAlgorithm
		target.signatureAlgorithm = values.signatureAlgorithm
		target.signature = values.signature
	}

	public async marshal(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: certificateVerifyMsg | $.VarRef<certificateVerifyMsg> | null = this;
		const m$: certificateVerifyMsg = m == null ? $.pointerTarget<certificateVerifyMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<certificateVerifyMsg>(m)
		let b: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))
		b.value.AddUint8(15)
		await b.value.AddUint24LengthPrefixed($.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
			if ((m$ as certificateVerifyMsg).hasSignatureAlgorithm) {
				void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16($.uint((m$ as certificateVerifyMsg).signatureAlgorithm, 16)) : cryptobyte.Builder.prototype.AddUint16.call(b, $.uint((m$ as certificateVerifyMsg).signatureAlgorithm, 16)))
			}
			await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
				void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes((m$ as certificateVerifyMsg).signature) : cryptobyte.Builder.prototype.AddBytes.call(b, (m$ as certificateVerifyMsg).signature))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))

		return b.value.Bytes()
	}

	public unmarshal(data: $.Slice<number>): boolean {
		const m: certificateVerifyMsg | $.VarRef<certificateVerifyMsg> | null = this;
		const m$: certificateVerifyMsg = m == null ? $.pointerTarget<certificateVerifyMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<certificateVerifyMsg>(m)
		let s: $.VarRef<cryptobyte.String> = $.varRef(((data as cryptobyte.String) as cryptobyte.String))

		if (!cryptobyte.String_Skip(s, 4)) {
			return false
		}
		if ((m$ as certificateVerifyMsg).hasSignatureAlgorithm) {
			if (!cryptobyte.String_ReadUint16(s, $.fieldRef((m$ as certificateVerifyMsg)._fields, "signatureAlgorithm"))) {
				return false
			}
		}
		return readUint16LengthPrefixed(s, $.fieldRef((m$ as certificateVerifyMsg)._fields, "signature")) && cryptobyte.String_Empty(s.value)
	}

	static __typeInfo = $.registerStructType(
		"tls.certificateVerifyMsg",
		() => new certificateVerifyMsg(),
		() => [$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true)],
		certificateVerifyMsg,
		() => [/* @__PURE__ */ $.structField("hasSignatureAlgorithm", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("signatureAlgorithm", /* @__PURE__ */ $.basicType("uint16", "tls.SignatureScheme"), [1], 2, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("signature", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 8, false, { pkgPath: "crypto/tls" })]
	)
}

export class newSessionTicketMsg {
	public get ticket(): $.Slice<number> {
		return this._fields.ticket
	}

	public set ticket(value: $.Slice<number>) {
		this._fields.ticket = value
	}

	public _fields: {
		ticket: $.Slice<number>
	}

	constructor(init?: Partial<{ticket?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			ticket: init?.ticket ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): newSessionTicketMsg {
		return new newSessionTicketMsg(this, true)
	}

	public __goscriptAssign(source: newSessionTicketMsg): void {
		const target = this._fields
		const values = source._fields
		target.ticket = values.ticket
	}

	public marshal(): [$.Slice<number>, $.GoError] {
		const m: newSessionTicketMsg | $.VarRef<newSessionTicketMsg> | null = this;
		const m$: newSessionTicketMsg = m == null ? $.pointerTarget<newSessionTicketMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<newSessionTicketMsg>(m)
		// See RFC 5077, Section 3.3.
		let ticketLen = $.sliceLen((m$ as newSessionTicketMsg).ticket)
		let length = (2 + 4) + ticketLen
		let x: $.Slice<number> = $.makeSlice<number>(4 + length, undefined, "byte")
		$.sliceElems(x!)[$.sliceSlot(x!, 0)] = 4
		$.sliceElems(x!)[$.sliceSlot(x!, 1)] = $.uint(length >> 16, 8)
		$.sliceElems(x!)[$.sliceSlot(x!, 2)] = $.uint(length >> 8, 8)
		$.sliceElems(x!)[$.sliceSlot(x!, 3)] = $.uint(length, 8)
		$.sliceElems(x!)[$.sliceSlot(x!, 8)] = $.uint(ticketLen >> 8, 8)
		$.sliceElems(x!)[$.sliceSlot(x!, 9)] = $.uint(ticketLen, 8)
		$.copy($.goSlice(x, 10, undefined), (m$ as newSessionTicketMsg).ticket)

		return [x, null]
	}

	public unmarshal(data: $.Slice<number>): boolean {
		let m: newSessionTicketMsg | $.VarRef<newSessionTicketMsg> | null = this;
		if ($.sliceLen(data) < 10) {
			return false
		}

		let length = $.uint((((($.uint($.arrayIndex(data!, 1), 32) << 16) >>> 0)) | ((($.uint($.arrayIndex(data!, 2), 32) << 8) >>> 0))) | $.uint($.arrayIndex(data!, 3), 32), 32)
		if ($.uint(((($.uint($.sliceLen(data), 32) - 4) >>> 0)), 32) != length) {
			return false
		}

		let ticketLen = ($.int($.arrayIndex(data!, 8)) << 8) + $.int($.arrayIndex(data!, 9))
		if (($.sliceLen(data) - 10) != ticketLen) {
			return false
		}

		$.pointerValue<newSessionTicketMsg>(m).ticket = $.goSlice(data, 10, undefined)

		return true
	}

	static __typeInfo = $.registerStructType(
		"tls.newSessionTicketMsg",
		() => new newSessionTicketMsg(),
		() => [$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true)],
		newSessionTicketMsg,
		() => [/* @__PURE__ */ $.structField("ticket", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "crypto/tls" })]
	)
}

export class helloRequestMsg {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): helloRequestMsg {
		return new helloRequestMsg(this, true)
	}

	public __goscriptAssign(source: helloRequestMsg): void {
	}

	public marshal(): [$.Slice<number>, $.GoError] {
		return [new Uint8Array([0, 0, 0, 0]) as $.Slice<number>, null]
	}

	public unmarshal(data: $.Slice<number>): boolean {
		return $.sliceLen(data) == 4
	}

	static __typeInfo = $.registerStructType(
		"tls.helloRequestMsg",
		() => new helloRequestMsg(),
		() => [$.methodSignature("marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true)],
		helloRequestMsg,
		() => []
	)
}

export async function marshalingFunction_Marshal(f: marshalingFunction | null, b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<$.GoError> {
	return f!(b)
}

export async function addBytesWithLength(b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null, v: $.Slice<number>, n: number): globalThis.Promise<void> {
	await cryptobyte.Builder.prototype.AddValue.call(b, $.namedValueInterfaceValue<cryptobyte.MarshalingValue | null>($.namedFunction($.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): $.GoError => {
		if ($.sliceLen(v) != n) {
			return fmt.Errorf("invalid value length: expected %d, got %d", $.basicInterfaceValue(n, "int"), $.basicInterfaceValue($.sliceLen(v), "int"))
		}
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes(v) : cryptobyte.Builder.prototype.AddBytes.call(b, v))
		return null
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: ["error"] } as $.FunctionTypeInfo)), "tls.marshalingFunction", ({ kind: $.TypeKind.Function, name: "tls.marshalingFunction", params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: ["error"] } as $.FunctionTypeInfo)), "tls.marshalingFunction", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
}

export function addUint64(b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null, v: bigint): void {
	void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint32($.uint($.uint64Shr(v, 32n), 32)) : cryptobyte.Builder.prototype.AddUint32.call(b, $.uint($.uint64Shr(v, 32n), 32)))
	void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint32($.uint(v, 32)) : cryptobyte.Builder.prototype.AddUint32.call(b, $.uint(v, 32)))
}

export function readUint64(s: $.VarRef<cryptobyte.String> | null, out: $.VarRef<bigint> | null): boolean {
	let hi: $.VarRef<number> = $.varRef(0)
	let lo: $.VarRef<number> = $.varRef(0)
	if (!cryptobyte.String_ReadUint32(s, hi) || !cryptobyte.String_ReadUint32(s, lo)) {
		return false
	}
	out!.value = $.uint64Add(($.uint64Mul($.uint64(hi.value), (2 ** 32))), $.uint64(lo.value))
	return true
}

export function readUint8LengthPrefixed(s: $.VarRef<cryptobyte.String> | null, out: $.VarRef<$.Slice<number>> | null): boolean {
	return cryptobyte.String_ReadUint8LengthPrefixed(s, out)
}

export function readUint16LengthPrefixed(s: $.VarRef<cryptobyte.String> | null, out: $.VarRef<$.Slice<number>> | null): boolean {
	return cryptobyte.String_ReadUint16LengthPrefixed(s, out)
}

export function readUint24LengthPrefixed(s: $.VarRef<cryptobyte.String> | null, out: $.VarRef<$.Slice<number>> | null): boolean {
	return cryptobyte.String_ReadUint24LengthPrefixed(s, out)
}

export async function marshalCertificate(b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null, certificate: __goscript_common.Certificate): globalThis.Promise<void> {
	await cryptobyte.Builder.prototype.AddUint24LengthPrefixed.call(b, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
		for (let __goscriptRangeTarget19 = certificate.Certificate, __goscriptRangeWindow18 = $.sliceRange(__goscriptRangeTarget19), i = 0; i < __goscriptRangeWindow18.length; i++) {
			let cert = (__goscriptRangeWindow18.backing[__goscriptRangeWindow18.offset + i] as $.Slice<number>)
			await cryptobyte.Builder.prototype.AddUint24LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
				void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes(cert) : cryptobyte.Builder.prototype.AddBytes.call(b, cert))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
				if (i > 0) {
					// This library only supports OCSP and SCT for leaf certificates.
					return
				}
				if (certificate.OCSPStaple != null) {
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(5) : cryptobyte.Builder.prototype.AddUint16.call(b, 5))
					await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
						void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint8(1) : cryptobyte.Builder.prototype.AddUint8.call(b, 1))
						await cryptobyte.Builder.prototype.AddUint24LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
							void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes(certificate.OCSPStaple) : cryptobyte.Builder.prototype.AddBytes.call(b, certificate.OCSPStaple))
						}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}
				if (certificate.SignedCertificateTimestamps != null) {
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddUint16(18) : cryptobyte.Builder.prototype.AddUint16.call(b, 18))
					await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
						await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
							for (let __goscriptRangeTarget18 = certificate.SignedCertificateTimestamps, __goscriptRangeWindow19 = $.sliceRange(__goscriptRangeTarget18), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow19.length; __rangeIndex++) {
								let sct = (__goscriptRangeWindow19.backing[__goscriptRangeWindow19.offset + __rangeIndex] as $.Slice<number>)
								await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(b, $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
									void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes(sct) : cryptobyte.Builder.prototype.AddBytes.call(b, sct))
								}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
							}
						}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		}
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
}

export function unmarshalCertificate(s: $.VarRef<cryptobyte.String> | null, certificate: __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null): boolean {
	const certificate$: __goscript_common.Certificate = certificate == null ? $.pointerTarget<__goscript_common.Certificate>(certificate) : (certificate as any).__isVarRef === true ? (certificate as any).value : (certificate as any).__goValue === undefined ? (certificate as any) : $.pointerTarget<__goscript_common.Certificate>(certificate)
	let certList: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadUint24LengthPrefixed(s, certList)) {
		return false
	}
	while (!cryptobyte.String_Empty(certList.value)) {
		let cert: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
		let extensions: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
		if (!readUint24LengthPrefixed(certList, cert) || !cryptobyte.String_ReadUint16LengthPrefixed(certList, extensions)) {
			return false
		}
		;(certificate$ as __goscript_common.Certificate).Certificate = $.appendOne((certificate$ as __goscript_common.Certificate).Certificate, cert.value, $.appendZeros.nil)
		while (!cryptobyte.String_Empty(extensions.value)) {
			let extension: $.VarRef<number> = $.varRef(0)
			let extData: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
			if (!cryptobyte.String_ReadUint16(extensions, extension) || !cryptobyte.String_ReadUint16LengthPrefixed(extensions, extData)) {
				return false
			}
			if ($.sliceLen((certificate$ as __goscript_common.Certificate).Certificate) > 1) {
				// This library only supports OCSP and SCT for leaf certificates.
				continue
			}

			switch (extension.value) {
				case 5:
				{
					let statusType: $.VarRef<number> = $.varRef(0)
					if (((!cryptobyte.String_ReadUint8(extData, statusType) || (statusType.value != 1)) || !readUint24LengthPrefixed(extData, $.fieldRef((certificate$ as __goscript_common.Certificate)._fields, "OCSPStaple"))) || ($.sliceLen((certificate$ as __goscript_common.Certificate).OCSPStaple) == 0)) {
						return false
					}
					break
				}
				case 18:
				{
					let sctList: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadUint16LengthPrefixed(extData, sctList) || cryptobyte.String_Empty(sctList.value)) {
						return false
					}
					while (!cryptobyte.String_Empty(sctList.value)) {
						let sct: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
						if (!readUint16LengthPrefixed(sctList, sct) || ($.sliceLen(sct.value) == 0)) {
							return false
						}
						;(certificate$ as __goscript_common.Certificate).SignedCertificateTimestamps = $.appendOne((certificate$ as __goscript_common.Certificate).SignedCertificateTimestamps, sct.value, $.appendZeros.nil)
					}
					break
				}
				default:
				{
					continue
					break
				}
			}

			if (!cryptobyte.String_Empty(extData.value)) {
				return false
			}
		}
	}
	return true
}

export async function transcriptMsg(msg: __goscript_common.handshakeMessage | null, h: transcriptHash | null): globalThis.Promise<$.GoError> {
	{
		let [msgWithOrig, ok] = $.typeAssertTuple<__goscript_common.handshakeMessageWithOriginalBytes | null>(msg, "tls.handshakeMessageWithOriginalBytes")
		if (ok) {
			{
				let orig: $.Slice<number> = ((__goscriptAwait = (msgWithOrig !== null && (msgWithOrig as any).__isVarRef !== true && (msgWithOrig as any).__goValue === undefined ? (msgWithOrig as Exclude<__goscript_common.handshakeMessageWithOriginalBytes, null>) : $.pointerValue<Exclude<__goscript_common.handshakeMessageWithOriginalBytes, null>>(msgWithOrig)).originalBytes(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
				if (orig != null) {
					await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<transcriptHash, null>) : $.pointerValue<Exclude<transcriptHash, null>>(h)).Write(((__goscriptAwait = (msgWithOrig !== null && (msgWithOrig as any).__isVarRef !== true && (msgWithOrig as any).__goValue === undefined ? (msgWithOrig as Exclude<__goscript_common.handshakeMessageWithOriginalBytes, null>) : $.pointerValue<Exclude<__goscript_common.handshakeMessageWithOriginalBytes, null>>(msgWithOrig)).originalBytes(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>))
					return null
				}
			}
		}
	}

	let __goscriptTuple3: any = await (msg !== null && (msg as any).__isVarRef !== true && (msg as any).__goValue === undefined ? (msg as Exclude<__goscript_common.handshakeMessage, null>) : $.pointerValue<Exclude<__goscript_common.handshakeMessage, null>>(msg)).marshal()
	let data: $.Slice<number> = __goscriptTuple3[0]
	let err = __goscriptTuple3[1]
	if (err != null) {
		return err
	}
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<transcriptHash, null>) : $.pointerValue<Exclude<transcriptHash, null>>(h)).Write(data)
	return null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Marshal: (receiver: any, ...args: any[]) => (marshalingFunction_Marshal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (({ kind: $.TypeKind.Function, name: "tls.marshalingFunction", params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: ["error"] } as $.FunctionTypeInfo))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Marshal", [["b", /* @__PURE__ */ $.pointerType("cryptobyte.Builder")]], ["error"])])
}

var __goscriptAwait: any
