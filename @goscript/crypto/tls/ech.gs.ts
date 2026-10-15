// Generated file based on ech.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as hpke from "@goscript/crypto/hpke/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as cryptobyte from "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"

import * as context2 from "@goscript/context/index.js"

import * as crypto from "@goscript/crypto/index.js"

import type * as cipher from "@goscript/crypto/cipher/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import type * as tls13 from "@goscript/crypto/internal/fips140/tls13/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as hash from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_alert from "./alert.gs.ts"

import type * as __goscript_cipher_suites from "./cipher_suites.gs.ts"

import * as __goscript_common from "./common.gs.ts"

import * as __goscript_common_string from "./common_string.gs.ts"

import * as __goscript_conn from "./conn.gs.ts"

import type * as __goscript_handshake_client from "./handshake_client.gs.ts"

import type * as __goscript_handshake_client_tls13 from "./handshake_client_tls13.gs.ts"

import * as __goscript_handshake_messages from "./handshake_messages.gs.ts"

import type * as __goscript_handshake_server from "./handshake_server.gs.ts"

import * as __goscript_handshake_server_tls13 from "./handshake_server_tls13.gs.ts"

import type * as __goscript_key_schedule from "./key_schedule.gs.ts"

import * as __goscript_quic from "./quic.gs.ts"

import * as __goscript_ticket from "./ticket.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/hpke/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/index.js"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "./alert.gs.ts"
import "./common.gs.ts"
import "./common_string.gs.ts"
import "./conn.gs.ts"
import "./handshake_messages.gs.ts"
import "./handshake_server_tls13.gs.ts"
import "./quic.gs.ts"
import "./ticket.gs.ts"

$.registerTypePackagePath("crypto/tls", ["tls.echCipher", "tls.echExtension", "tls.echConfig", "tls.echConfigErr", "tls.rawExtension", "tls.ECHRejectionError", "tls.echExtType"])

export type echExtType = number

export class echCipher {
	public get KDFID(): number {
		return this._fields.KDFID
	}

	public set KDFID(value: number) {
		this._fields.KDFID = value
	}

	public get AEADID(): number {
		return this._fields.AEADID
	}

	public set AEADID(value: number) {
		this._fields.AEADID = value
	}

	public _fields: {
		KDFID: number
		AEADID: number
	}

	constructor(init?: Partial<{KDFID?: number, AEADID?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			KDFID: init?.KDFID ?? (0 as number),
			AEADID: init?.AEADID ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): echCipher {
		return new echCipher(this, true)
	}

	public __goscriptAssign(source: echCipher): void {
		const target = this._fields
		const values = source._fields
		target.KDFID = values.KDFID
		target.AEADID = values.AEADID
	}

	static __typeInfo = $.registerStructType(
		"tls.echCipher",
		() => new echCipher(),
		() => [],
		echCipher,
		() => [/* @__PURE__ */ $.structField("KDFID", /* @__PURE__ */ $.basicType("uint16"), [0], 0, true), /* @__PURE__ */ $.structField("AEADID", /* @__PURE__ */ $.basicType("uint16"), [1], 2, true)]
	)
}

export class echExtension {
	public get Type(): number {
		return this._fields.Type
	}

	public set Type(value: number) {
		this._fields.Type = value
	}

	public get Data(): $.Slice<number> {
		return this._fields.Data
	}

	public set Data(value: $.Slice<number>) {
		this._fields.Data = value
	}

	public _fields: {
		Type: number
		Data: $.Slice<number>
	}

	constructor(init?: Partial<{Type?: number, Data?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? (0 as number),
			Data: init?.Data ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): echExtension {
		return new echExtension(this, true)
	}

	public __goscriptAssign(source: echExtension): void {
		const target = this._fields
		const values = source._fields
		target.Type = values.Type
		target.Data = values.Data
	}

	static __typeInfo = $.registerStructType(
		"tls.echExtension",
		() => new echExtension(),
		() => [],
		echExtension,
		() => [/* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("uint16"), [0], 0, true), /* @__PURE__ */ $.structField("Data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, true)]
	)
}

export class echConfig {
	public get raw(): $.Slice<number> {
		return this._fields.raw
	}

	public set raw(value: $.Slice<number>) {
		this._fields.raw = value
	}

	public get Version(): number {
		return this._fields.Version
	}

	public set Version(value: number) {
		this._fields.Version = value
	}

	public get Length(): number {
		return this._fields.Length
	}

	public set Length(value: number) {
		this._fields.Length = value
	}

	public get ConfigID(): number {
		return this._fields.ConfigID
	}

	public set ConfigID(value: number) {
		this._fields.ConfigID = value
	}

	public get KemID(): number {
		return this._fields.KemID
	}

	public set KemID(value: number) {
		this._fields.KemID = value
	}

	public get PublicKey(): $.Slice<number> {
		return this._fields.PublicKey
	}

	public set PublicKey(value: $.Slice<number>) {
		this._fields.PublicKey = value
	}

	public get SymmetricCipherSuite(): $.Slice<echCipher> {
		return this._fields.SymmetricCipherSuite
	}

	public set SymmetricCipherSuite(value: $.Slice<echCipher>) {
		this._fields.SymmetricCipherSuite = value
	}

	public get MaxNameLength(): number {
		return this._fields.MaxNameLength
	}

	public set MaxNameLength(value: number) {
		this._fields.MaxNameLength = value
	}

	public get PublicName(): $.Slice<number> {
		return this._fields.PublicName
	}

	public set PublicName(value: $.Slice<number>) {
		this._fields.PublicName = value
	}

	public get Extensions(): $.Slice<echExtension> {
		return this._fields.Extensions
	}

	public set Extensions(value: $.Slice<echExtension>) {
		this._fields.Extensions = value
	}

	public _fields: {
		raw: $.Slice<number>
		Version: number
		Length: number
		ConfigID: number
		KemID: number
		PublicKey: $.Slice<number>
		SymmetricCipherSuite: $.Slice<echCipher>
		MaxNameLength: number
		PublicName: $.Slice<number>
		Extensions: $.Slice<echExtension>
	}

	constructor(init?: Partial<{raw?: $.Slice<number>, Version?: number, Length?: number, ConfigID?: number, KemID?: number, PublicKey?: $.Slice<number>, SymmetricCipherSuite?: $.Slice<echCipher>, MaxNameLength?: number, PublicName?: $.Slice<number>, Extensions?: $.Slice<echExtension>}>, __goscriptValue?: boolean) {
		this._fields = {
			raw: init?.raw ?? (null! as $.Slice<number>),
			Version: init?.Version ?? (0 as number),
			Length: init?.Length ?? (0 as number),
			ConfigID: init?.ConfigID ?? (0 as number),
			KemID: init?.KemID ?? (0 as number),
			PublicKey: init?.PublicKey ?? (null! as $.Slice<number>),
			SymmetricCipherSuite: init?.SymmetricCipherSuite ?? (null! as $.Slice<echCipher>),
			MaxNameLength: init?.MaxNameLength ?? (0 as number),
			PublicName: init?.PublicName ?? (null! as $.Slice<number>),
			Extensions: init?.Extensions ?? (null! as $.Slice<echExtension>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): echConfig {
		return new echConfig(this, true)
	}

	public __goscriptAssign(source: echConfig): void {
		const target = this._fields
		const values = source._fields
		target.raw = values.raw
		target.Version = values.Version
		target.Length = values.Length
		target.ConfigID = values.ConfigID
		target.KemID = values.KemID
		target.PublicKey = values.PublicKey
		target.SymmetricCipherSuite = values.SymmetricCipherSuite
		target.MaxNameLength = values.MaxNameLength
		target.PublicName = values.PublicName
		target.Extensions = values.Extensions
	}

	static __typeInfo = $.registerStructType(
		"tls.echConfig",
		() => new echConfig(),
		() => [],
		echConfig,
		() => [/* @__PURE__ */ $.structField("raw", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("Version", /* @__PURE__ */ $.basicType("uint16"), [1], 24, true), /* @__PURE__ */ $.structField("Length", /* @__PURE__ */ $.basicType("uint16"), [2], 26, true), /* @__PURE__ */ $.structField("ConfigID", /* @__PURE__ */ $.basicType("uint8"), [3], 28, true), /* @__PURE__ */ $.structField("KemID", /* @__PURE__ */ $.basicType("uint16"), [4], 30, true), /* @__PURE__ */ $.structField("PublicKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 32, true), /* @__PURE__ */ $.structField("SymmetricCipherSuite", /* @__PURE__ */ $.sliceType("tls.echCipher"), [6], 56, true), /* @__PURE__ */ $.structField("MaxNameLength", /* @__PURE__ */ $.basicType("uint8"), [7], 80, true), /* @__PURE__ */ $.structField("PublicName", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [8], 88, true), /* @__PURE__ */ $.structField("Extensions", /* @__PURE__ */ $.sliceType("tls.echExtension"), [9], 112, true)]
	)
}

export class echConfigErr {
	public get field(): string {
		return this._fields.field
	}

	public set field(value: string) {
		this._fields.field = value
	}

	public _fields: {
		field: string
	}

	constructor(init?: Partial<{field?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			field: init?.field ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): echConfigErr {
		return new echConfigErr(this, true)
	}

	public __goscriptAssign(source: echConfigErr): void {
		const target = this._fields
		const values = source._fields
		target.field = values.field
	}

	public async Error(): globalThis.Promise<string> {
		const e: echConfigErr | $.VarRef<echConfigErr> | null = this;
		const e$: echConfigErr = e == null ? $.pointerTarget<echConfigErr>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<echConfigErr>(e)
		if ($.stringEqual((e$ as echConfigErr).field, "")) {
			return "tls: malformed ECHConfig"
		}
		return fmt.Sprintf("tls: malformed ECHConfig, invalid %s field", (e$ as echConfigErr).field)
	}

	static __typeInfo = $.registerStructType(
		"tls.echConfigErr",
		() => new echConfigErr(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		echConfigErr,
		() => [/* @__PURE__ */ $.structField("field", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "crypto/tls" })]
	)
}

export class rawExtension {
	public get extType(): number {
		return this._fields.extType
	}

	public set extType(value: number) {
		this._fields.extType = value
	}

	public get data(): $.Slice<number> {
		return this._fields.data
	}

	public set data(value: $.Slice<number>) {
		this._fields.data = value
	}

	public _fields: {
		extType: number
		data: $.Slice<number>
	}

	constructor(init?: Partial<{extType?: number, data?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			extType: init?.extType ?? (0 as number),
			data: init?.data ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): rawExtension {
		return new rawExtension(this, true)
	}

	public __goscriptAssign(source: rawExtension): void {
		const target = this._fields
		const values = source._fields
		target.extType = values.extType
		target.data = values.data
	}

	static __typeInfo = $.registerStructType(
		"tls.rawExtension",
		() => new rawExtension(),
		() => [],
		rawExtension,
		() => [/* @__PURE__ */ $.structField("extType", /* @__PURE__ */ $.basicType("uint16"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, false, { pkgPath: "crypto/tls" })]
	)
}

export class ECHRejectionError {
	public get RetryConfigList(): $.Slice<number> {
		return this._fields.RetryConfigList
	}

	public set RetryConfigList(value: $.Slice<number>) {
		this._fields.RetryConfigList = value
	}

	public _fields: {
		RetryConfigList: $.Slice<number>
	}

	constructor(init?: Partial<{RetryConfigList?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			RetryConfigList: init?.RetryConfigList ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ECHRejectionError {
		return new ECHRejectionError(this, true)
	}

	public __goscriptAssign(source: ECHRejectionError): void {
		const target = this._fields
		const values = source._fields
		target.RetryConfigList = values.RetryConfigList
	}

	public Error(): string {
		const e: ECHRejectionError | $.VarRef<ECHRejectionError> | null = this;
		return "tls: server rejected ECH"
	}

	static __typeInfo = $.registerStructType(
		"tls.ECHRejectionError",
		() => new ECHRejectionError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		ECHRejectionError,
		() => [/* @__PURE__ */ $.structField("RetryConfigList", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, true)]
	)
}

export const innerECHExt: echExtType = 1

export const outerECHExt: echExtType = 0

export let errMalformedECHConfigList: $.GoError = errors.New("tls: malformed ECHConfigList")

export function __goscript_set_errMalformedECHConfigList(__goscriptValue: $.GoError): void {
	errMalformedECHConfigList = __goscriptValue
}

export function parseECHConfig(enc: $.Slice<number>): [boolean, echConfig, $.GoError] {
	let skip: boolean = false
	let ec: echConfig = new echConfig(undefined, true)
	let err: $.GoError = null! as $.GoError
	let s: $.VarRef<cryptobyte.String> = $.varRef(((enc as cryptobyte.String) as cryptobyte.String))
	ec.raw = enc
	if (!cryptobyte.String_ReadUint16(s, $.fieldRef(ec._fields, "Version"))) {
		return [false, new echConfig(undefined, true), $.interfaceValue<$.GoError>(new echConfigErr({field: "version"}), "*tls.echConfigErr", /* @__PURE__ */ $.pointerType("tls.echConfigErr"))]
	}
	if (!cryptobyte.String_ReadUint16(s, $.fieldRef(ec._fields, "Length"))) {
		return [false, new echConfig(undefined, true), $.interfaceValue<$.GoError>(new echConfigErr({field: "length"}), "*tls.echConfigErr", /* @__PURE__ */ $.pointerType("tls.echConfigErr"))]
	}
	if ($.sliceLen(ec.raw) < ($.int(ec.Length) + 4)) {
		return [false, new echConfig(undefined, true), $.interfaceValue<$.GoError>(new echConfigErr({field: "length"}), "*tls.echConfigErr", /* @__PURE__ */ $.pointerType("tls.echConfigErr"))]
	}
	ec.raw = $.goSlice(ec.raw, undefined, ((ec.Length + 4) & 0xffff))
	if (ec.Version != 65037) {
		cryptobyte.String_Skip(s, $.int(ec.Length))
		return [true, new echConfig(undefined, true), null]
	}
	if (!cryptobyte.String_ReadUint8(s, $.fieldRef(ec._fields, "ConfigID"))) {
		return [false, new echConfig(undefined, true), $.interfaceValue<$.GoError>(new echConfigErr({field: "config_id"}), "*tls.echConfigErr", /* @__PURE__ */ $.pointerType("tls.echConfigErr"))]
	}
	if (!cryptobyte.String_ReadUint16(s, $.fieldRef(ec._fields, "KemID"))) {
		return [false, new echConfig(undefined, true), $.interfaceValue<$.GoError>(new echConfigErr({field: "kem_id"}), "*tls.echConfigErr", /* @__PURE__ */ $.pointerType("tls.echConfigErr"))]
	}
	if (!__goscript_handshake_messages.readUint16LengthPrefixed(s, $.fieldRef(ec._fields, "PublicKey"))) {
		return [false, new echConfig(undefined, true), $.interfaceValue<$.GoError>(new echConfigErr({field: "public_key"}), "*tls.echConfigErr", /* @__PURE__ */ $.pointerType("tls.echConfigErr"))]
	}
	let cipherSuites: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadUint16LengthPrefixed(s, cipherSuites)) {
		return [false, new echConfig(undefined, true), $.interfaceValue<$.GoError>(new echConfigErr({field: "cipher_suites"}), "*tls.echConfigErr", /* @__PURE__ */ $.pointerType("tls.echConfigErr"))]
	}
	while (!cryptobyte.String_Empty(cipherSuites.value)) {
		let c: echCipher = new echCipher(undefined, true)
		if (!cryptobyte.String_ReadUint16(cipherSuites, $.fieldRef(c._fields, "KDFID"))) {
			return [false, new echConfig(undefined, true), $.interfaceValue<$.GoError>(new echConfigErr({field: "cipher_suites kdf_id"}), "*tls.echConfigErr", /* @__PURE__ */ $.pointerType("tls.echConfigErr"))]
		}
		if (!cryptobyte.String_ReadUint16(cipherSuites, $.fieldRef(c._fields, "AEADID"))) {
			return [false, new echConfig(undefined, true), $.interfaceValue<$.GoError>(new echConfigErr({field: "cipher_suites aead_id"}), "*tls.echConfigErr", /* @__PURE__ */ $.pointerType("tls.echConfigErr"))]
		}
		ec.SymmetricCipherSuite = $.appendOne(ec.SymmetricCipherSuite, (c).clone())
	}
	if (!cryptobyte.String_ReadUint8(s, $.fieldRef(ec._fields, "MaxNameLength"))) {
		return [false, new echConfig(undefined, true), $.interfaceValue<$.GoError>(new echConfigErr({field: "maximum_name_length"}), "*tls.echConfigErr", /* @__PURE__ */ $.pointerType("tls.echConfigErr"))]
	}
	let publicName: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadUint8LengthPrefixed(s, publicName)) {
		return [false, new echConfig(undefined, true), $.interfaceValue<$.GoError>(new echConfigErr({field: "public_name"}), "*tls.echConfigErr", /* @__PURE__ */ $.pointerType("tls.echConfigErr"))]
	}
	ec.PublicName = publicName.value
	let extensions: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadUint16LengthPrefixed(s, extensions)) {
		return [false, new echConfig(undefined, true), $.interfaceValue<$.GoError>(new echConfigErr({field: "extensions"}), "*tls.echConfigErr", /* @__PURE__ */ $.pointerType("tls.echConfigErr"))]
	}
	while (!cryptobyte.String_Empty(extensions.value)) {
		let e: echExtension = new echExtension(undefined, true)
		if (!cryptobyte.String_ReadUint16(extensions, $.fieldRef(e._fields, "Type"))) {
			return [false, new echConfig(undefined, true), $.interfaceValue<$.GoError>(new echConfigErr({field: "extensions type"}), "*tls.echConfigErr", /* @__PURE__ */ $.pointerType("tls.echConfigErr"))]
		}
		if (!cryptobyte.String_ReadUint16LengthPrefixed(extensions, $.fieldRef(e._fields, "Data"))) {
			return [false, new echConfig(undefined, true), $.interfaceValue<$.GoError>(new echConfigErr({field: "extensions data"}), "*tls.echConfigErr", /* @__PURE__ */ $.pointerType("tls.echConfigErr"))]
		}
		ec.Extensions = $.appendOne(ec.Extensions, (e).clone())
	}

	return [false, (ec).clone(), null]
}

export function parseECHConfigList(data: $.Slice<number>): [$.Slice<echConfig>, $.GoError] {
	let s: $.VarRef<cryptobyte.String> = $.varRef(((data as cryptobyte.String) as cryptobyte.String))
	let length: $.VarRef<number> = $.varRef(0)
	if (!cryptobyte.String_ReadUint16(s, length)) {
		return [null, errMalformedECHConfigList]
	}
	if (length.value != $.uint($.sliceLen(data) - 2, 16)) {
		return [null, errMalformedECHConfigList]
	}
	let configs: $.Slice<echConfig> = null! as $.Slice<echConfig>
	while ($.sliceLen((s.value as cryptobyte.String)) > 0) {
		if ($.sliceLen((s.value as cryptobyte.String)) < 4) {
			return [null, errors.New("tls: malformed ECHConfig")]
		}
		let configLen: number = $.uint(((($.uint($.arrayIndex(s.value!, 2), 16) << 8) & 0xffff)) | $.uint($.arrayIndex(s.value!, 3), 16), 16)
		let [skip, ec, err] = parseECHConfig(s.value)
		if (err != null) {
			return [null, err]
		}
		s.value = ($.goSlice(s.value, ((configLen + 4) & 0xffff), undefined) as cryptobyte.String)
		if (!skip) {
			configs = $.appendOne(configs, (ec).clone())
		}
	}
	return [configs, null]
}

export async function pickECHConfig(list: $.Slice<echConfig>): globalThis.Promise<[echConfig | $.VarRef<echConfig> | null, hpke.PublicKey | null, hpke.KDF | null, hpke.AEAD | null]> {
	for (let __goscriptRangeTarget2 = list, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let ec = $.varRef(((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as echConfig)).clone())
		if (!validDNSName($.bytesToString(ec.value.PublicName))) {
			continue
		}
		let unsupportedExt: boolean = false
		for (let __goscriptRangeTarget0 = ec.value.Extensions, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let ext = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as echExtension)).clone()
			// If high order bit is set to 1 the extension is mandatory.
			// Since we don't support any extensions, if we see a mandatory
			// bit, we skip the config.
			if ($.uint((ext.Type & $.uint(32768, 16)), 16) != 0) {
				unsupportedExt = true
			}
		}
		if (unsupportedExt) {
			continue
		}
		let [kem, err] = hpke.NewKEM(ec.value.KemID)
		if (err != null) {
			continue
		}
		let __goscriptTuple0: any = await (kem !== null && (kem as any).__isVarRef !== true && (kem as any).__goValue === undefined ? (kem as Exclude<hpke.KEM, null>) : $.pointerValue<Exclude<hpke.KEM, null>>(kem)).NewPublicKey(ec.value.PublicKey)
		let pub = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			// This is an error in the config, but killing the connection feels
			// excessive.
			continue
		}
		for (let __goscriptRangeTarget1 = ec.value.SymmetricCipherSuite, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let cs = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as echCipher)).clone()
			// All of the supported AEADs and KDFs are fine, rather than
			// imposing some sort of preference here, we just pick the first
			// valid suite.
			let [kdf, __goscriptShadow0] = hpke.NewKDF(cs.KDFID)
			if (__goscriptShadow0 != null) {
				continue
			}
			// 0xFFFF is an export-only AEAD that cannot seal/open, making
			// it an invalid choice for encrypting ClientHelloInner.
			if (cs.AEADID == 0xFFFF) {
				continue
			}
			let __goscriptTuple1: any = hpke.NewAEAD(cs.AEADID)
			let __goscriptShadow1 = __goscriptTuple1[0]
			__goscriptShadow0 = __goscriptTuple1[1]
			if (__goscriptShadow0 != null) {
				continue
			}
			return [ec, pub, kdf, __goscriptShadow1]
		}
	}
	return [null, null, null, null]
}

export async function encodeInnerClientHello(inner: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, maxNameLength: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	const inner$: __goscript_handshake_messages.clientHelloMsg = inner == null ? $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(inner) : (inner as any).__isVarRef === true ? (inner as any).value : (inner as any).__goValue === undefined ? (inner as any) : $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(inner)
	let __goscriptTuple2: any = await (inner !== null && (inner as any).__isVarRef !== true && (inner as any).__goValue === undefined ? ((inner as any) as __goscript_handshake_messages.clientHelloMsg).marshalMsg(true) : __goscript_handshake_messages.clientHelloMsg.prototype.marshalMsg.call(inner, true))
	let h: $.Slice<number> = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if (err != null) {
		return [null, err]
	}
	h = $.goSlice(h, 4, undefined)

	let paddingLen: number = 0
	if (!$.stringEqual((inner$ as __goscript_handshake_messages.clientHelloMsg).serverName, "")) {
		paddingLen = $.max(0, maxNameLength - $.stringLen((inner$ as __goscript_handshake_messages.clientHelloMsg).serverName))
	} else {
		paddingLen = maxNameLength + 9
	}
	paddingLen = paddingLen + (31 - ((($.sliceLen(h) + paddingLen) - 1) % 32))

	return [$.appendSlice(h, $.makeSlice<number>(paddingLen, undefined, "byte"), $.byteSliceHint), null]
}

export function skipUint8LengthPrefixed(s: $.VarRef<cryptobyte.String> | null): boolean {
	let skip: $.VarRef<number> = $.varRef(0)
	if (!cryptobyte.String_ReadUint8(s, skip)) {
		return false
	}
	return cryptobyte.String_Skip(s, $.int(skip.value))
}

export function skipUint16LengthPrefixed(s: $.VarRef<cryptobyte.String> | null): boolean {
	let skip: $.VarRef<number> = $.varRef(0)
	if (!cryptobyte.String_ReadUint16(s, skip)) {
		return false
	}
	return cryptobyte.String_Skip(s, $.int(skip.value))
}

export function extractRawExtensions(hello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null): [$.Slice<rawExtension>, $.GoError] {
	let s: $.VarRef<cryptobyte.String> = $.varRef((($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(hello).original as cryptobyte.String) as cryptobyte.String))
	if (((!cryptobyte.String_Skip(s, 38) || !skipUint8LengthPrefixed(s)) || !skipUint16LengthPrefixed(s)) || !skipUint8LengthPrefixed(s)) {
		return [null, errors.New("tls: malformed outer client hello")]
	}
	let rawExtensions: $.Slice<rawExtension> = null! as $.Slice<rawExtension>
	let extensions: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadUint16LengthPrefixed(s, extensions)) {
		return [null, errors.New("tls: malformed outer client hello")]
	}

	while (!cryptobyte.String_Empty(extensions.value)) {
		let extension: $.VarRef<number> = $.varRef(0)
		let extData: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
		if (!cryptobyte.String_ReadUint16(extensions, extension) || !cryptobyte.String_ReadUint16LengthPrefixed(extensions, extData)) {
			return [null, errors.New("tls: invalid inner client hello")]
		}
		rawExtensions = $.appendOne(rawExtensions, new rawExtension({extType: extension.value, data: extData.value}, true))
	}
	return [rawExtensions, null]
}

export async function decodeInnerClientHello(outer: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, encoded: $.Slice<number>): globalThis.Promise<[__goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, $.GoError]> {
	// Reconstructing the inner client hello from its encoded form is somewhat
	// complicated. It is missing its header (message type and length), session
	// ID, and the extensions may be compressed. Since we need to put the
	// extensions back in the same order as they were in the raw outer hello,
	// and since we don't store the raw extensions, or the order we parsed them
	// in, we need to reparse the raw extensions from the outer hello in order
	// to properly insert them into the inner hello. This _should_ result in raw
	// bytes which match the hello as it was generated by the client.
	let innerReader: $.VarRef<cryptobyte.String> = $.varRef(((encoded as cryptobyte.String) as cryptobyte.String))
	let versionAndRandom: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
	let sessionID: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
	let cipherSuites: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
	let compressionMethods: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
	let extensions: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (((((!cryptobyte.String_ReadBytes(innerReader, versionAndRandom, 34) || !__goscript_handshake_messages.readUint8LengthPrefixed(innerReader, sessionID)) || ($.sliceLen(sessionID.value) != 0)) || !__goscript_handshake_messages.readUint16LengthPrefixed(innerReader, cipherSuites)) || !__goscript_handshake_messages.readUint8LengthPrefixed(innerReader, compressionMethods)) || !cryptobyte.String_ReadUint16LengthPrefixed(innerReader, extensions)) {
		return [null, errors.New("tls: invalid inner client hello")]
	}

	// The specification says we must verify that the trailing padding is all
	// zeros. This is kind of weird for TLS messages, where we generally just
	// throw away any trailing garbage.
	for (let __goscriptRangeTarget3 = innerReader.value, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let p = $.uint((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as number), 8)
		if (p != 0) {
			return [null, errors.New("tls: invalid inner client hello")]
		}
	}

	let __goscriptTuple3: any = extractRawExtensions(outer)
	let rawOuterExts: $.Slice<rawExtension> = __goscriptTuple3[0]
	let err = __goscriptTuple3[1]
	if (err != null) {
		return [null, err]
	}

	let recon: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null = cryptobyte.NewBuilder(null)
	void (recon !== null && (recon as any).__isVarRef !== true && (recon as any).__goValue === undefined ? ((recon as any) as cryptobyte.Builder).AddUint8(1) : cryptobyte.Builder.prototype.AddUint8.call(recon, 1))
	await cryptobyte.Builder.prototype.AddUint24LengthPrefixed.call(recon, $.functionValue(async (recon: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
		void (recon !== null && (recon as any).__isVarRef !== true && (recon as any).__goValue === undefined ? ((recon as any) as cryptobyte.Builder).AddBytes(versionAndRandom.value) : cryptobyte.Builder.prototype.AddBytes.call(recon, versionAndRandom.value))
		await cryptobyte.Builder.prototype.AddUint8LengthPrefixed.call(recon, $.functionValue((recon: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
			void (recon !== null && (recon as any).__isVarRef !== true && (recon as any).__goValue === undefined ? ((recon as any) as cryptobyte.Builder).AddBytes($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(outer).sessionId) : cryptobyte.Builder.prototype.AddBytes.call(recon, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(outer).sessionId))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(recon, $.functionValue((recon: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
			void (recon !== null && (recon as any).__isVarRef !== true && (recon as any).__goValue === undefined ? ((recon as any) as cryptobyte.Builder).AddBytes(cipherSuites.value) : cryptobyte.Builder.prototype.AddBytes.call(recon, cipherSuites.value))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		await cryptobyte.Builder.prototype.AddUint8LengthPrefixed.call(recon, $.functionValue((recon: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
			void (recon !== null && (recon as any).__isVarRef !== true && (recon as any).__goValue === undefined ? ((recon as any) as cryptobyte.Builder).AddBytes(compressionMethods.value) : cryptobyte.Builder.prototype.AddBytes.call(recon, compressionMethods.value))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
		await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(recon, $.functionValue(async (recon: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
			let outerExtensionsSeen: boolean = false
			while (!cryptobyte.String_Empty(extensions.value)) {
				let extension: $.VarRef<number> = $.varRef(0)
				let extData: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
				if (!cryptobyte.String_ReadUint16(extensions, extension) || !cryptobyte.String_ReadUint16LengthPrefixed(extensions, extData)) {
					void (recon !== null && (recon as any).__isVarRef !== true && (recon as any).__goValue === undefined ? ((recon as any) as cryptobyte.Builder).SetError(errors.New("tls: invalid inner client hello")) : cryptobyte.Builder.prototype.SetError.call(recon, errors.New("tls: invalid inner client hello")))
					return
				}
				if (extension.value == 64768) {
					if (outerExtensionsSeen) {
						void (recon !== null && (recon as any).__isVarRef !== true && (recon as any).__goValue === undefined ? ((recon as any) as cryptobyte.Builder).SetError(errors.New("tls: invalid outer extensions")) : cryptobyte.Builder.prototype.SetError.call(recon, errors.New("tls: invalid outer extensions")))
						return
					}
					outerExtensionsSeen = true
					let outerExtensions: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if ((!cryptobyte.String_ReadUint8LengthPrefixed(extData, outerExtensions) || !cryptobyte.String_Empty(extData.value)) || cryptobyte.String_Empty(outerExtensions.value)) {
						void (recon !== null && (recon as any).__isVarRef !== true && (recon as any).__goValue === undefined ? ((recon as any) as cryptobyte.Builder).SetError(errors.New("tls: invalid inner client hello")) : cryptobyte.Builder.prototype.SetError.call(recon, errors.New("tls: invalid inner client hello")))
						return
					}
					// OuterExtensions reconstruction per RFC 9849, Appendix A.
					// i scans the outer extensions in order and never rewinds,
					// so a referenced type that is out of order or duplicated
					// cannot be found again and is rejected.
					let i: number = 0
					while (!cryptobyte.String_Empty(outerExtensions.value)) {
						let extType: $.VarRef<number> = $.varRef(0)
						if (!cryptobyte.String_ReadUint16(outerExtensions, extType)) {
							void (recon !== null && (recon as any).__isVarRef !== true && (recon as any).__goValue === undefined ? ((recon as any) as cryptobyte.Builder).SetError(errors.New("tls: invalid inner client hello")) : cryptobyte.Builder.prototype.SetError.call(recon, errors.New("tls: invalid inner client hello")))
							return
						}
						if ((extType.value == 65037) || (extType.value == 64768)) {
							void (recon !== null && (recon as any).__isVarRef !== true && (recon as any).__goValue === undefined ? ((recon as any) as cryptobyte.Builder).SetError(errors.New("tls: invalid outer extensions")) : cryptobyte.Builder.prototype.SetError.call(recon, errors.New("tls: invalid outer extensions")))
							return
						}
						for (; i <= $.sliceLen(rawOuterExts); i++) {
							if (i == $.sliceLen(rawOuterExts)) {
								void (recon !== null && (recon as any).__isVarRef !== true && (recon as any).__goValue === undefined ? ((recon as any) as cryptobyte.Builder).SetError(errors.New("tls: invalid outer extensions")) : cryptobyte.Builder.prototype.SetError.call(recon, errors.New("tls: invalid outer extensions")))
								return
							}
							if ($.arrayIndex(rawOuterExts!, i).extType == extType.value) {
								break
							}
						}
						void (recon !== null && (recon as any).__isVarRef !== true && (recon as any).__goValue === undefined ? ((recon as any) as cryptobyte.Builder).AddUint16($.arrayIndex(rawOuterExts!, i).extType) : cryptobyte.Builder.prototype.AddUint16.call(recon, $.arrayIndex(rawOuterExts!, i).extType))
						await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(recon, $.functionValue((recon: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
							void (recon !== null && (recon as any).__isVarRef !== true && (recon as any).__goValue === undefined ? ((recon as any) as cryptobyte.Builder).AddBytes($.arrayIndex(rawOuterExts!, i).data) : cryptobyte.Builder.prototype.AddBytes.call(recon, $.arrayIndex(rawOuterExts!, i).data))
						}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
						i++
					}
				} else {
					void (recon !== null && (recon as any).__isVarRef !== true && (recon as any).__goValue === undefined ? ((recon as any) as cryptobyte.Builder).AddUint16(extension.value) : cryptobyte.Builder.prototype.AddUint16.call(recon, extension.value))
					await cryptobyte.Builder.prototype.AddUint16LengthPrefixed.call(recon, $.functionValue((recon: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
						void (recon !== null && (recon as any).__isVarRef !== true && (recon as any).__goValue === undefined ? ((recon as any) as cryptobyte.Builder).AddBytes(extData.value) : cryptobyte.Builder.prototype.AddBytes.call(recon, extData.value))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))

	let __goscriptTuple4: any = (recon !== null && (recon as any).__isVarRef !== true && (recon as any).__goValue === undefined ? ((recon as any) as cryptobyte.Builder).Bytes() : cryptobyte.Builder.prototype.Bytes.call(recon))
	let reconBytes: $.Slice<number> = __goscriptTuple4[0]
	err = __goscriptTuple4[1]
	if (err != null) {
		return [null, err]
	}
	let inner: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null = new __goscript_handshake_messages.clientHelloMsg()
	let inner$: __goscript_handshake_messages.clientHelloMsg = inner == null ? $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(inner) : (inner as any).__isVarRef === true ? (inner as any).value : (inner as any).__goValue === undefined ? (inner as any) : $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(inner)
	if (!(inner !== null && (inner as any).__isVarRef !== true && (inner as any).__goValue === undefined ? ((inner as any) as __goscript_handshake_messages.clientHelloMsg).unmarshal(reconBytes) : __goscript_handshake_messages.clientHelloMsg.prototype.unmarshal.call(inner, reconBytes))) {
		return [null, errors.New("tls: invalid reconstructed inner client hello")]
	}

	if (!bytes.Equal((inner$ as __goscript_handshake_messages.clientHelloMsg).encryptedClientHello, new Uint8Array([1]) as $.Slice<number>)) {
		return [null, errInvalidECHExt]
	}

	let hasTLS13 = false
	for (let __goscriptRangeTarget4 = (inner$ as __goscript_handshake_messages.clientHelloMsg).supportedVersions, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as number), 16)
		// Skip GREASE values (values of the form 0x?A0A).
		// GREASE (Generate Random Extensions And Sustain Extensibility) is a mechanism used by
		// browsers like Chrome to ensure TLS implementations correctly ignore unknown values.
		// GREASE values follow a specific pattern: 0x?A0A, where ? can be any hex digit.
		// These values should be ignored when processing supported TLS versions.
		if (($.uint((v & 0x0F0F), 16) == 0x0A0A) && ($.uint((v & 0xff), 16) == $.uint(($.uintShr(v, 8, 16)), 16))) {
			continue
		}

		// Ensure at least TLS 1.3 is offered.
		if (v == 772) {
			hasTLS13 = true
		} else {
			if (v < 772) {
				// Reject if any non-GREASE value is below TLS 1.3, as ECH requires TLS 1.3+.
				return [null, errors.New("tls: client sent encrypted_client_hello extension with unsupported versions")]
			}
		}
	}

	if (!hasTLS13) {
		return [null, errors.New("tls: client sent encrypted_client_hello extension but did not offer TLS 1.3")]
	}

	return [inner, null]
}

export async function decryptECHPayload(context: hpke.Recipient | $.VarRef<hpke.Recipient> | null, hello: $.Slice<number>, payload: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let outerAAD: $.Slice<number> = bytes.Replace($.goSlice(hello, 4, undefined), payload, $.makeSlice<number>($.sliceLen(payload), undefined, "byte"), 1)
	return (context !== null && (context as any).__isVarRef !== true && (context as any).__goValue === undefined ? ((context as any) as hpke.Recipient).Open(outerAAD, payload) : hpke.Recipient.prototype.Open.call(context, outerAAD, payload))
}

export async function generateOuterECHExt(id: number, kdfID: number, aeadID: number, encodedKey: $.Slice<number>, payload: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let b: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))
	b.value.AddUint8(0)
	b.value.AddUint16(kdfID)
	b.value.AddUint16(aeadID)
	b.value.AddUint8(id)
	await b.value.AddUint16LengthPrefixed($.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes(encodedKey) : cryptobyte.Builder.prototype.AddBytes.call(b, encodedKey))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
	await b.value.AddUint16LengthPrefixed($.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes(payload) : cryptobyte.Builder.prototype.AddBytes.call(b, payload))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
	return b.value.Bytes()
}

export async function computeAndUpdateOuterECHExtension(outer: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, inner: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, ech: __goscript_handshake_client.echClientContext | $.VarRef<__goscript_handshake_client.echClientContext> | null, useKey: boolean): globalThis.Promise<$.GoError> {
	const ech$: __goscript_handshake_client.echClientContext = ech == null ? $.pointerTarget<__goscript_handshake_client.echClientContext>(ech) : (ech as any).__isVarRef === true ? (ech as any).value : (ech as any).__goValue === undefined ? (ech as any) : $.pointerTarget<__goscript_handshake_client.echClientContext>(ech)
	let encapKey: $.Slice<number> = null! as $.Slice<number>
	if (useKey) {
		encapKey = (ech$ as __goscript_handshake_client.echClientContext).encapsulatedKey
	}
	let __goscriptTuple5: any = await encodeInnerClientHello(inner, $.int($.pointerValue<echConfig>((ech$ as __goscript_handshake_client.echClientContext).config).MaxNameLength))
	let encodedInner: $.Slice<number> = __goscriptTuple5[0]
	let err = __goscriptTuple5[1]
	if (err != null) {
		return err
	}
	// NOTE: the tag lengths for all of the supported AEADs are the same (16
	// bytes), so we have hardcoded it here. If we add support for another AEAD
	// with a different tag length, we will need to change this.
	let encryptedLen = $.sliceLen(encodedInner) + 16
	let __goscriptTuple6: any = await generateOuterECHExt($.pointerValue<echConfig>((ech$ as __goscript_handshake_client.echClientContext).config).ConfigID, (ech$ as __goscript_handshake_client.echClientContext).kdfID, (ech$ as __goscript_handshake_client.echClientContext).aeadID, encapKey, $.makeSlice<number>(encryptedLen, undefined, "byte"))
	$.pointerValue<__goscript_handshake_messages.clientHelloMsg>(outer).encryptedClientHello = __goscriptTuple6[0]
	err = __goscriptTuple6[1]
	if (err != null) {
		return err
	}
	let __goscriptTuple7: any = await (outer !== null && (outer as any).__isVarRef !== true && (outer as any).__goValue === undefined ? ((outer as any) as __goscript_handshake_messages.clientHelloMsg).marshal() : __goscript_handshake_messages.clientHelloMsg.prototype.marshal.call(outer))
	let serializedOuter: $.Slice<number> = __goscriptTuple7[0]
	err = __goscriptTuple7[1]
	if (err != null) {
		return err
	}
	serializedOuter = $.goSlice(serializedOuter, 4, undefined)
	let __goscriptTuple8: any = await hpke.Sender.prototype.Seal.call((ech$ as __goscript_handshake_client.echClientContext).hpkeContext, serializedOuter, encodedInner)
	let encryptedInner: $.Slice<number> = __goscriptTuple8[0]
	err = __goscriptTuple8[1]
	if (err != null) {
		return err
	}
	let __goscriptTuple9: any = await generateOuterECHExt($.pointerValue<echConfig>((ech$ as __goscript_handshake_client.echClientContext).config).ConfigID, (ech$ as __goscript_handshake_client.echClientContext).kdfID, (ech$ as __goscript_handshake_client.echClientContext).aeadID, encapKey, encryptedInner)
	$.pointerValue<__goscript_handshake_messages.clientHelloMsg>(outer).encryptedClientHello = __goscriptTuple9[0]
	err = __goscriptTuple9[1]
	if (err != null) {
		return err
	}
	return null
}

export function validDNSName(name: string): boolean {
	if ($.stringLen(name) > 253) {
		return false
	}
	let labels: $.Slice<string> = strings.Split(name, ".")
	if ($.sliceLen(labels) <= 1) {
		return false
	}
	for (let __goscriptRangeTarget5 = labels, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let l = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as string)
		let labelLen = $.stringLen(l)
		if (labelLen == 0) {
			return false
		}
		for (let __goscriptRunes0 = $.stringRunes(l); __goscriptRunes0.next(); ) {
			const i = __goscriptRunes0.index
			const r = __goscriptRunes0.rune
			if ((r == 45) && ((i == 0) || (i == (labelLen - 1)))) {
				return false
			}
			if (((((r < 48) || (r > 57)) && ((r < 97) || (r > 122))) && ((r < 65) || (r > 90))) && (r != 45)) {
				return false
			}
		}
	}
	return true
}

export let errMalformedECHExt: $.GoError = errors.New("tls: malformed encrypted_client_hello extension")

export function __goscript_set_errMalformedECHExt(__goscriptValue: $.GoError): void {
	errMalformedECHExt = __goscriptValue
}

export let errInvalidECHExt: $.GoError = errors.New("tls: client sent invalid encrypted_client_hello extension")

export function __goscript_set_errInvalidECHExt(__goscriptValue: $.GoError): void {
	errInvalidECHExt = __goscriptValue
}

export function parseECHExt(ext: $.Slice<number>): [echExtType, echCipher, number, $.Slice<number>, $.Slice<number>, $.GoError] {
	let echType: echExtType = 0
	let cs: echCipher = new echCipher(undefined, true)
	let configID: $.VarRef<number> = $.varRef(0)
	let encap: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
	let payload: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
	let err: $.GoError = null! as $.GoError
	let data: $.Slice<number> = $.makeSlice<number>($.sliceLen(ext), undefined, "byte")
	$.copy(data, ext)
	let s: $.VarRef<cryptobyte.String> = $.varRef(((data as cryptobyte.String) as cryptobyte.String))
	let echInt: $.VarRef<number> = $.varRef(0)
	if (!cryptobyte.String_ReadUint8(s, echInt)) {
		err = errMalformedECHExt
		return [echType, cs, configID.value, encap.value, payload.value, err]
	}
	echType = $.uint(echInt.value, 8)
	if (echType == 1) {
		if (!cryptobyte.String_Empty(s.value)) {
			err = errMalformedECHExt
			return [echType, cs, configID.value, encap.value, payload.value, err]
		}
		return [echType, (cs).clone(), 0, null, null, null]
	}
	if (echType != 0) {
		err = errInvalidECHExt
		return [echType, cs, configID.value, encap.value, payload.value, err]
	}
	if (!cryptobyte.String_ReadUint16(s, $.fieldRef(cs._fields, "KDFID"))) {
		err = errMalformedECHExt
		return [echType, cs, configID.value, encap.value, payload.value, err]
	}
	if (!cryptobyte.String_ReadUint16(s, $.fieldRef(cs._fields, "AEADID"))) {
		err = errMalformedECHExt
		return [echType, cs, configID.value, encap.value, payload.value, err]
	}
	if (!cryptobyte.String_ReadUint8(s, configID)) {
		err = errMalformedECHExt
		return [echType, cs, configID.value, encap.value, payload.value, err]
	}
	if (!__goscript_handshake_messages.readUint16LengthPrefixed(s, encap)) {
		err = errMalformedECHExt
		return [echType, cs, configID.value, encap.value, payload.value, err]
	}
	if (!__goscript_handshake_messages.readUint16LengthPrefixed(s, payload)) {
		err = errMalformedECHExt
		return [echType, cs, configID.value, encap.value, payload.value, err]
	}

	// NOTE: clone encap and payload so that mutating them does not mutate the
	// raw extension bytes.
	return [echType, (cs).clone(), configID.value, bytes.Clone(encap.value), bytes.Clone(payload.value), null]
}

export async function buildRetryConfigList(keys: $.Slice<__goscript_common.EncryptedClientHelloKey>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let atLeastOneRetryConfig: boolean = false
	let retryBuilder: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))
	await retryBuilder.value.AddUint16LengthPrefixed($.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
		for (let __goscriptRangeTarget6 = keys, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let c = ((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as __goscript_common.EncryptedClientHelloKey)).clone()
			if (!c.SendAsRetry) {
				continue
			}
			atLeastOneRetryConfig = true
			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes(c.Config) : cryptobyte.Builder.prototype.AddBytes.call(b, c.Config))
		}
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
	if (!atLeastOneRetryConfig) {
		return [null, null]
	}
	return retryBuilder.value.Bytes()
}
