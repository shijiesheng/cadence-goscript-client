// Generated file based on conn.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context2 from "@goscript/context/index.js"

import * as cipher2 from "@goscript/crypto/cipher/index.js"

import * as subtle from "@goscript/crypto/subtle/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as hash from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as hpke from "@goscript/crypto/hpke/index.js"

import * as strings from "@goscript/strings/index.js"

import * as cryptobyte from "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as ecdsa from "@goscript/crypto/ecdsa/index.js"

import * as ed25519 from "@goscript/crypto/ed25519/index.js"

import * as tls13 from "@goscript/crypto/internal/fips140/tls13/index.js"

import * as mldsa from "@goscript/crypto/mldsa/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"

import * as fips140tls from "@goscript/crypto/tls/internal/fips140tls/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as hkdf from "@goscript/crypto/hkdf/index.js"

import * as hmac from "@goscript/crypto/hmac/index.js"

import * as byteorder from "@goscript/internal/byteorder/index.js"

import * as sort from "@goscript/sort/index.js"

import * as aes from "@goscript/crypto/aes/index.js"

import * as sha256 from "@goscript/crypto/sha256/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as big from "@goscript/math/big/index.js"

import * as __goscript_alert from "./alert.gs.ts"

import * as __goscript_cache from "./cache.gs.ts"

import * as __goscript_cipher_suites from "./cipher_suites.gs.ts"

import * as __goscript_common from "./common.gs.ts"

import * as __goscript_common_string from "./common_string.gs.ts"

import * as __goscript_defaults from "./defaults.gs.ts"

import * as __goscript_defaults_fips140 from "./defaults_fips140.gs.ts"

import * as __goscript_ech from "./ech.gs.ts"

import * as __goscript_handshake_client from "./handshake_client.gs.ts"

import * as __goscript_handshake_client_tls13 from "./handshake_client_tls13.gs.ts"

import * as __goscript_handshake_messages from "./handshake_messages.gs.ts"

import * as __goscript_handshake_server from "./handshake_server.gs.ts"

import * as __goscript_handshake_server_tls13 from "./handshake_server_tls13.gs.ts"

import type * as __goscript_key_agreement from "./key_agreement.gs.ts"

import * as __goscript_key_schedule from "./key_schedule.gs.ts"

import * as __goscript_prf from "./prf.gs.ts"

import * as __goscript_quic from "./quic.gs.ts"

import * as __goscript_ticket from "./ticket.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/cipher/index.js"
import "@goscript/crypto/subtle/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/crypto/hpke/index.js"
import "@goscript/strings/index.js"
import "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"
import "@goscript/crypto/index.js"
import "@goscript/crypto/ecdsa/index.js"
import "@goscript/crypto/ed25519/index.js"
import "@goscript/crypto/internal/fips140/tls13/index.js"
import "@goscript/crypto/mldsa/index.js"
import "@goscript/crypto/rsa/index.js"
import "@goscript/crypto/tls/internal/fips140tls/index.js"
import "@goscript/internal/godebug/index.js"
import "@goscript/slices/index.js"
import "@goscript/strconv/index.js"
import "@goscript/crypto/hkdf/index.js"
import "@goscript/crypto/hmac/index.js"
import "@goscript/internal/byteorder/index.js"
import "@goscript/sort/index.js"
import "@goscript/crypto/aes/index.js"
import "@goscript/crypto/sha256/index.js"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/math/big/index.js"
import "./alert.gs.ts"
import "./cache.gs.ts"
import "./cipher_suites.gs.ts"
import "./common.gs.ts"
import "./common_string.gs.ts"
import "./defaults.gs.ts"
import "./defaults_fips140.gs.ts"
import "./ech.gs.ts"
import "./handshake_client.gs.ts"
import "./handshake_client_tls13.gs.ts"
import "./handshake_messages.gs.ts"
import "./handshake_server.gs.ts"
import "./handshake_server_tls13.gs.ts"
import "./key_schedule.gs.ts"
import "./prf.gs.ts"
import "./quic.gs.ts"
import "./ticket.gs.ts"

$.registerTypePackagePath("crypto/tls", ["tls.Conn", "tls.halfConn", "tls.permanentError", "tls.cbcMode", "tls.RecordHeaderError"])

export type cbcMode = {
	BlockSize(): number
	CryptBlocks(dst: $.Slice<number>, src: $.Slice<number>): void
	SetIV(_p0: $.Slice<number>): void
}

$.registerInterfaceType(
	"tls.cbcMode",
	null,
	[$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("CryptBlocks", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("SetIV", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))])]
);

export class halfConn {
	public get Mutex(): sync.Mutex {
		return this._fields.Mutex
	}

	public set Mutex(value: sync.Mutex) {
		this._fields.Mutex = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get version(): number {
		return this._fields.version
	}

	public set version(value: number) {
		this._fields.version = value
	}

	public get cipher(): any {
		return this._fields.cipher
	}

	public set cipher(value: any) {
		this._fields.cipher = value
	}

	public get mac(): hash.Hash | null {
		return this._fields.mac
	}

	public set mac(value: hash.Hash | null) {
		this._fields.mac = value
	}

	public get seq(): Uint8Array {
		return this._fields.seq
	}

	public set seq(value: Uint8Array) {
		this._fields.seq = value
	}

	public get scratchBuf(): Uint8Array {
		return this._fields.scratchBuf
	}

	public set scratchBuf(value: Uint8Array) {
		this._fields.scratchBuf = value
	}

	public get nextCipher(): any {
		return this._fields.nextCipher
	}

	public set nextCipher(value: any) {
		this._fields.nextCipher = value
	}

	public get nextMac(): hash.Hash | null {
		return this._fields.nextMac
	}

	public set nextMac(value: hash.Hash | null) {
		this._fields.nextMac = value
	}

	public get level(): __goscript_quic.QUICEncryptionLevel {
		return this._fields.level
	}

	public set level(value: __goscript_quic.QUICEncryptionLevel) {
		this._fields.level = value
	}

	public get trafficSecret(): $.Slice<number> {
		return this._fields.trafficSecret
	}

	public set trafficSecret(value: $.Slice<number>) {
		this._fields.trafficSecret = value
	}

	public _fields: {
		Mutex: sync.Mutex
		err: $.GoError
		version: number
		cipher: any
		mac: hash.Hash | null
		seq: Uint8Array
		scratchBuf: Uint8Array
		nextCipher: any
		nextMac: hash.Hash | null
		level: __goscript_quic.QUICEncryptionLevel
		trafficSecret: $.Slice<number>
	}

	constructor(init?: Partial<{Mutex?: sync.Mutex, err?: $.GoError, version?: number, cipher?: any, mac?: hash.Hash | null, seq?: Uint8Array, scratchBuf?: Uint8Array, nextCipher?: any, nextMac?: hash.Hash | null, level?: __goscript_quic.QUICEncryptionLevel, trafficSecret?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Mutex: init?.Mutex ? $.markAsStructValue($.cloneStructValue(init.Mutex)) : $.markAsStructValue(new sync.Mutex()),
			err: init?.err ?? (null! as $.GoError),
			version: init?.version ?? (0 as number),
			cipher: init?.cipher ?? (null! as any),
			mac: init?.mac ?? (null! as hash.Hash | null),
			seq: init?.seq !== undefined ? $.cloneArrayValue(init.seq, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)) : $.arrayValue(new Uint8Array(8)),
			scratchBuf: init?.scratchBuf !== undefined ? $.cloneArrayValue(init.scratchBuf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 13)) : $.arrayValue(new Uint8Array(13)),
			nextCipher: init?.nextCipher ?? (null! as any),
			nextMac: init?.nextMac ?? (null! as hash.Hash | null),
			level: init?.level ?? (0 as __goscript_quic.QUICEncryptionLevel),
			trafficSecret: init?.trafficSecret ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): halfConn {
		return new halfConn(this, true)
	}

	public __goscriptAssign(source: halfConn): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Mutex, values.Mutex)
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.version = values.version
		target.cipher = $.assignFieldValue(target.cipher, values.cipher, { kind: $.TypeKind.Interface, methods: [] })
		target.mac = $.assignFieldValue(target.mac, values.mac, "hash.Hash")
		target.seq = $.assignFieldValue(target.seq, values.seq, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8))
		target.scratchBuf = $.assignFieldValue(target.scratchBuf, values.scratchBuf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 13))
		target.nextCipher = $.assignFieldValue(target.nextCipher, values.nextCipher, { kind: $.TypeKind.Interface, methods: [] })
		target.nextMac = $.assignFieldValue(target.nextMac, values.nextMac, "hash.Hash")
		target.level = values.level
		target.trafficSecret = values.trafficSecret
	}

	public changeCipherSpec(): $.GoError {
		let hc: halfConn | $.VarRef<halfConn> | null = this;
		const hc$: halfConn = hc == null ? $.pointerTarget<halfConn>(hc) : (hc as any).__isVarRef === true ? (hc as any).value : (hc as any).__goValue === undefined ? (hc as any) : $.pointerTarget<halfConn>(hc)
		if (((hc$ as halfConn).nextCipher == null) || ((hc$ as halfConn).version == 772)) {
			return $.namedValueInterfaceValue<$.GoError>(80, "tls.alert", {"Error": __goscript_alert.alert_Error}, /* @__PURE__ */ $.basicType("uint8", "tls.alert"))
		}
		;(hc$ as halfConn).cipher = (hc$ as halfConn).nextCipher;
		;(hc$ as halfConn).mac = (hc$ as halfConn).nextMac;
		;(hc$ as halfConn).nextCipher = null;
		;(hc$ as halfConn).nextMac = null
		$.clear($.goSlice((hc$ as halfConn).seq, undefined, undefined))
		return null
	}

	public async decrypt(record: $.Slice<number>): globalThis.Promise<[$.Slice<number>, __goscript_common.recordType, $.GoError]> {
		const hc: halfConn | $.VarRef<halfConn> | null = this;
		const hc$: halfConn = hc == null ? $.pointerTarget<halfConn>(hc) : (hc as any).__isVarRef === true ? (hc as any).value : (hc as any).__goValue === undefined ? (hc as any) : $.pointerTarget<halfConn>(hc)
		let plaintext: $.Slice<number> = null! as $.Slice<number>
		let typ = $.uint($.arrayIndex(record!, 0), 8)
		let payload: $.Slice<number> = $.goSlice(record, 5, undefined)

		// In TLS 1.3, change_cipher_spec messages are to be ignored without being
		// decrypted. See RFC 8446, Appendix D.4.
		if (((hc$ as halfConn).version == 772) && (typ == 20)) {
			return [payload, typ, null]
		}

		let paddingGood = 255
		let paddingLen = 0

		let explicitNonceLen = await (hc !== null && (hc as any).__isVarRef !== true && (hc as any).__goValue === undefined ? ((hc as any) as halfConn).explicitNonceLen() : halfConn.prototype.explicitNonceLen.call(hc))

		if ((hc$ as halfConn).cipher != null) {
			{
				const __goscriptTypeSwitchValue = (hc$ as halfConn).cipher
				switch (true) {
					case $.typeAssert<cipher2.Stream | null>(__goscriptTypeSwitchValue, "cipher.Stream").ok:
						{
							let c: cipher2.Stream | null = $.typeAssert<cipher2.Stream | null>(__goscriptTypeSwitchValue, "cipher.Stream").value
							void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<cipher2.Stream, null>) : $.pointerValue<Exclude<cipher2.Stream, null>>(c)).XORKeyStream(payload, payload), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
						break
					case $.typeAssert<__goscript_cipher_suites.aead | null>(__goscriptTypeSwitchValue, "tls.aead").ok:
						{
							let c: __goscript_cipher_suites.aead | null = $.typeAssert<__goscript_cipher_suites.aead | null>(__goscriptTypeSwitchValue, "tls.aead").value
							if ($.sliceLen(payload) < explicitNonceLen) {
								return [null, 0, $.namedValueInterfaceValue<$.GoError>(20, "tls.alert", {"Error": __goscript_alert.alert_Error}, /* @__PURE__ */ $.basicType("uint8", "tls.alert"))]
							}
							let nonce: $.Slice<number> = $.goSlice(payload, undefined, explicitNonceLen)
							if ($.sliceLen(nonce) == 0) {
								nonce = $.goSlice((hc$ as halfConn).seq, undefined, undefined)
							}
							payload = $.goSlice(payload, explicitNonceLen, undefined)

							let additionalData: $.Slice<number> = null! as $.Slice<number>
							if ((hc$ as halfConn).version == 772) {
								additionalData = $.goSlice(record, undefined, 5)
							} else {
								additionalData = $.appendSlice($.goSlice((hc$ as halfConn).scratchBuf, undefined, 0), $.goSlice((hc$ as halfConn).seq, undefined, undefined), $.byteSliceHint)
								additionalData = $.appendSlice(additionalData, $.goSlice(record, undefined, 3), $.byteSliceHint)
								let n = $.sliceLen(payload) - (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_cipher_suites.aead, null>) : $.pointerValue<Exclude<__goscript_cipher_suites.aead, null>>(c)).Overhead(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								additionalData = $.append(additionalData, $.uint($.uint(n >> 8, 8), 8), $.uint($.uint(n, 8), 8), $.byteSliceHint)
							}

							let err: $.GoError = null! as $.GoError
							let __goscriptTuple45: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_cipher_suites.aead, null>) : $.pointerValue<Exclude<__goscript_cipher_suites.aead, null>>(c)).Open($.goSlice(payload, undefined, 0), nonce, payload, additionalData)
							plaintext = __goscriptTuple45[0]
							err = __goscriptTuple45[1]
							if (err != null) {
								return [null, 0, $.namedValueInterfaceValue<$.GoError>(20, "tls.alert", {"Error": __goscript_alert.alert_Error}, /* @__PURE__ */ $.basicType("uint8", "tls.alert"))]
							}
						}
						break
					case $.typeAssert<cbcMode | null>(__goscriptTypeSwitchValue, "tls.cbcMode").ok:
						{
							let c: cbcMode | null = $.typeAssert<cbcMode | null>(__goscriptTypeSwitchValue, "tls.cbcMode").value
							let blockSize = (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<cbcMode, null>) : $.pointerValue<Exclude<cbcMode, null>>(c)).BlockSize(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							let minPayload = explicitNonceLen + roundUp((__goscriptAwait = $.pointerValue<Exclude<hash.Hash, null>>((hc$ as halfConn).mac).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) + 1, blockSize)
							if ((($.sliceLen(payload) % blockSize) != 0) || ($.sliceLen(payload) < minPayload)) {
								return [null, 0, $.namedValueInterfaceValue<$.GoError>(20, "tls.alert", {"Error": __goscript_alert.alert_Error}, /* @__PURE__ */ $.basicType("uint8", "tls.alert"))]
							}

							if (explicitNonceLen > 0) {
								void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<cbcMode, null>) : $.pointerValue<Exclude<cbcMode, null>>(c)).SetIV($.goSlice(payload, undefined, explicitNonceLen)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								payload = $.goSlice(payload, explicitNonceLen, undefined)
							}
							void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<cbcMode, null>) : $.pointerValue<Exclude<cbcMode, null>>(c)).CryptBlocks(payload, payload), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

							// In a limited attempt to protect against CBC padding oracles like
							// Lucky13, the data past paddingLen (which is secret) is passed to
							// the MAC function as extra data, to be fed into the HMAC after
							// computing the digest. This makes the MAC roughly constant time as
							// long as the digest computation is constant time and does not
							// affect the subsequent write, modulo cache effects.
							let __goscriptTuple46: any = extractPadding(payload)
							paddingLen = __goscriptTuple46[0]
							paddingGood = __goscriptTuple46[1]
						}
						break
					default:
						{
							let c: any = __goscriptTypeSwitchValue
							$.panic("unknown cipher type")
						}
						break
				}
			}

			if ((hc$ as halfConn).version == 772) {
				if (typ != 23) {
					return [null, 0, $.namedValueInterfaceValue<$.GoError>(10, "tls.alert", {"Error": __goscript_alert.alert_Error}, /* @__PURE__ */ $.basicType("uint8", "tls.alert"))]
				}
				if ($.sliceLen(plaintext) > 16385) {
					return [null, 0, $.namedValueInterfaceValue<$.GoError>(22, "tls.alert", {"Error": __goscript_alert.alert_Error}, /* @__PURE__ */ $.basicType("uint8", "tls.alert"))]
				}
				// Remove padding and find the ContentType scanning from the end.
				for (let i: number = $.sliceLen(plaintext) - 1; i >= 0; i--) {
					if ($.arrayIndex(plaintext!, i) != 0) {
						typ = $.uint($.arrayIndex(plaintext!, i), 8)
						plaintext = $.goSlice(plaintext, undefined, i)
						break
					}
					if (i == 0) {
						return [null, 0, $.namedValueInterfaceValue<$.GoError>(10, "tls.alert", {"Error": __goscript_alert.alert_Error}, /* @__PURE__ */ $.basicType("uint8", "tls.alert"))]
					}
				}
			}
		} else {
			plaintext = payload
		}

		if ((hc$ as halfConn).mac != null) {
			let macSize = (__goscriptAwait = $.pointerValue<Exclude<hash.Hash, null>>((hc$ as halfConn).mac).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ($.sliceLen(payload) < macSize) {
				return [null, 0, $.namedValueInterfaceValue<$.GoError>(20, "tls.alert", {"Error": __goscript_alert.alert_Error}, /* @__PURE__ */ $.basicType("uint8", "tls.alert"))]
			}

			let n = ($.sliceLen(payload) - macSize) - paddingLen
			n = subtle.ConstantTimeSelect($.int($.uintShr($.uint(n, 32), 31, 32)), 0, n)
			$.sliceElems(record!)[$.sliceSlot(record!, 3)] = $.uint(n >> 8, 8)
			$.sliceElems(record!)[$.sliceSlot(record!, 4)] = $.uint(n, 8)
			let remoteMAC: $.Slice<number> = $.goSlice(payload, n, n + macSize)
			let localMAC: $.Slice<number> = await __goscript_cipher_suites.tls10MAC((hc$ as halfConn).mac, $.goSlice((hc$ as halfConn).scratchBuf, undefined, 0), $.goSlice((hc$ as halfConn).seq, undefined, undefined), $.goSlice(record, undefined, 5), $.goSlice(payload, undefined, n), $.goSlice(payload, n + macSize, undefined))

			// This is equivalent to checking the MACs and paddingGood
			// separately, but in constant-time to prevent distinguishing
			// padding failures from MAC failures. Depending on what value
			// of paddingLen was returned on bad padding, distinguishing
			// bad MAC from bad padding can lead to an attack.
			//
			// See also the logic at the end of extractPadding.
			let macAndPaddingGood = subtle.ConstantTimeCompare(localMAC, remoteMAC) & $.int(paddingGood)
			if (macAndPaddingGood != 1) {
				return [null, 0, $.namedValueInterfaceValue<$.GoError>(20, "tls.alert", {"Error": __goscript_alert.alert_Error}, /* @__PURE__ */ $.basicType("uint8", "tls.alert"))]
			}

			plaintext = $.goSlice(payload, undefined, n)
		}

		void (hc !== null && (hc as any).__isVarRef !== true && (hc as any).__goValue === undefined ? ((hc as any) as halfConn).incSeq() : halfConn.prototype.incSeq.call(hc))
		return [plaintext, typ, null]
	}

	public async encrypt(record: $.Slice<number>, payload: $.Slice<number>, rand: io.Reader | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const hc: halfConn | $.VarRef<halfConn> | null = this;
		const hc$: halfConn = hc == null ? $.pointerTarget<halfConn>(hc) : (hc as any).__isVarRef === true ? (hc as any).value : (hc as any).__goValue === undefined ? (hc as any) : $.pointerTarget<halfConn>(hc)
		if ((hc$ as halfConn).cipher == null) {
			return [$.appendSlice(record, payload, $.byteSliceHint), null]
		}

		let explicitNonce: $.Slice<number> = null! as $.Slice<number>
		{
			let explicitNonceLen = await (hc !== null && (hc as any).__isVarRef !== true && (hc as any).__goValue === undefined ? ((hc as any) as halfConn).explicitNonceLen() : halfConn.prototype.explicitNonceLen.call(hc))
			if (explicitNonceLen > 0) {
				let __goscriptTuple47: any = sliceForAppend(record, explicitNonceLen)
				record = __goscriptTuple47[0]
				explicitNonce = __goscriptTuple47[1]
				{
					let [, isCBC] = $.typeAssertTuple<cbcMode | null>((hc$ as halfConn).cipher, "tls.cbcMode")
					if (!isCBC && (explicitNonceLen < 16)) {
						// The AES-GCM construction in TLS has an explicit nonce so that the
						// nonce can be random. However, the nonce is only 8 bytes which is
						// too small for a secure, random nonce. Therefore we use the
						// sequence number as the nonce. The 3DES-CBC construction also has
						// an 8 bytes nonce but its nonces must be unpredictable (see RFC
						// 5246, Appendix F.3), forcing us to use randomness. That's not
						// 3DES' biggest problem anyway because the birthday bound on block
						// collision is reached first due to its similarly small block size
						// (see the Sweet32 attack).
						$.copy(explicitNonce, $.goSlice((hc$ as halfConn).seq, undefined, undefined))
					} else {
						{
							let [, err] = await io.ReadFull($.pointerValueOrNil(rand)!, explicitNonce)
							if (err != null) {
								return [null, err]
							}
						}
					}
				}
			}
		}

		let dst: $.Slice<number> = null! as $.Slice<number>
		{
			const __goscriptTypeSwitchValue = (hc$ as halfConn).cipher
			switch (true) {
				case $.typeAssert<cipher2.Stream | null>(__goscriptTypeSwitchValue, "cipher.Stream").ok:
					{
						let c: cipher2.Stream | null = $.typeAssert<cipher2.Stream | null>(__goscriptTypeSwitchValue, "cipher.Stream").value
						let mac: $.Slice<number> = await __goscript_cipher_suites.tls10MAC((hc$ as halfConn).mac, $.goSlice((hc$ as halfConn).scratchBuf, undefined, 0), $.goSlice((hc$ as halfConn).seq, undefined, undefined), $.goSlice(record, undefined, 5), payload, null)
						let __goscriptTuple48: any = sliceForAppend(record, $.sliceLen(payload) + $.sliceLen(mac))
						record = __goscriptTuple48[0]
						dst = __goscriptTuple48[1]
						void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<cipher2.Stream, null>) : $.pointerValue<Exclude<cipher2.Stream, null>>(c)).XORKeyStream($.goSlice(dst, undefined, $.sliceLen(payload)), payload), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<cipher2.Stream, null>) : $.pointerValue<Exclude<cipher2.Stream, null>>(c)).XORKeyStream($.goSlice(dst, $.sliceLen(payload), undefined), mac), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
				case $.typeAssert<__goscript_cipher_suites.aead | null>(__goscriptTypeSwitchValue, "tls.aead").ok:
					{
						let c: __goscript_cipher_suites.aead | null = $.typeAssert<__goscript_cipher_suites.aead | null>(__goscriptTypeSwitchValue, "tls.aead").value
						let nonce: $.Slice<number> = explicitNonce
						if ($.sliceLen(nonce) == 0) {
							nonce = $.goSlice((hc$ as halfConn).seq, undefined, undefined)
						}

						if ((hc$ as halfConn).version == 772) {
							record = $.appendSlice(record, payload, $.byteSliceHint)

							// Encrypt the actual ContentType and replace the plaintext one.
							record = $.append(record, $.uint($.arrayIndex(record!, 0), 8), $.byteSliceHint)
							$.sliceElems(record!)[$.sliceSlot(record!, 0)] = 23

							let n = ($.sliceLen(payload) + 1) + (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_cipher_suites.aead, null>) : $.pointerValue<Exclude<__goscript_cipher_suites.aead, null>>(c)).Overhead(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							$.sliceElems(record!)[$.sliceSlot(record!, 3)] = $.uint(n >> 8, 8)
							$.sliceElems(record!)[$.sliceSlot(record!, 4)] = $.uint(n, 8)

							record = ((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_cipher_suites.aead, null>) : $.pointerValue<Exclude<__goscript_cipher_suites.aead, null>>(c)).Seal($.goSlice(record, undefined, 5), nonce, $.goSlice(record, 5, undefined), $.goSlice(record, undefined, 5)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
						} else {
							let additionalData: $.Slice<number> = $.appendSlice($.goSlice((hc$ as halfConn).scratchBuf, undefined, 0), $.goSlice((hc$ as halfConn).seq, undefined, undefined), $.byteSliceHint)
							additionalData = $.appendSlice(additionalData, $.goSlice(record, undefined, 5), $.byteSliceHint)
							record = ((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_cipher_suites.aead, null>) : $.pointerValue<Exclude<__goscript_cipher_suites.aead, null>>(c)).Seal(record, nonce, payload, additionalData), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
						}
					}
					break
				case $.typeAssert<cbcMode | null>(__goscriptTypeSwitchValue, "tls.cbcMode").ok:
					{
						let c: cbcMode | null = $.typeAssert<cbcMode | null>(__goscriptTypeSwitchValue, "tls.cbcMode").value
						let mac: $.Slice<number> = await __goscript_cipher_suites.tls10MAC((hc$ as halfConn).mac, $.goSlice((hc$ as halfConn).scratchBuf, undefined, 0), $.goSlice((hc$ as halfConn).seq, undefined, undefined), $.goSlice(record, undefined, 5), payload, null)
						let blockSize = (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<cbcMode, null>) : $.pointerValue<Exclude<cbcMode, null>>(c)).BlockSize(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						let plaintextLen = $.sliceLen(payload) + $.sliceLen(mac)
						let paddingLen = blockSize - (plaintextLen % blockSize)
						let __goscriptTuple49: any = sliceForAppend(record, plaintextLen + paddingLen)
						record = __goscriptTuple49[0]
						dst = __goscriptTuple49[1]
						$.copy(dst, payload)
						$.copy($.goSlice(dst, $.sliceLen(payload), undefined), mac)
						for (let __goscriptSliceWindow0 = $.sliceRange(dst), i = plaintextLen; i < __goscriptSliceWindow0.length; i++) {
							;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = $.uint(paddingLen - 1, 8)
						}
						if ($.sliceLen(explicitNonce) > 0) {
							void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<cbcMode, null>) : $.pointerValue<Exclude<cbcMode, null>>(c)).SetIV(explicitNonce), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
						void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<cbcMode, null>) : $.pointerValue<Exclude<cbcMode, null>>(c)).CryptBlocks(dst, dst), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
				default:
					{
						let c: any = __goscriptTypeSwitchValue
						$.panic("unknown cipher type")
					}
					break
			}
		}

		// Update length to include nonce, MAC and any block padding needed.
		let n = $.sliceLen(record) - 5
		$.sliceElems(record!)[$.sliceSlot(record!, 3)] = $.uint(n >> 8, 8)
		$.sliceElems(record!)[$.sliceSlot(record!, 4)] = $.uint(n, 8)
		void (hc !== null && (hc as any).__isVarRef !== true && (hc as any).__goValue === undefined ? ((hc as any) as halfConn).incSeq() : halfConn.prototype.incSeq.call(hc))

		return [record, null]
	}

	public async explicitNonceLen(): globalThis.Promise<number> {
		const hc: halfConn | $.VarRef<halfConn> | null = this;
		const hc$: halfConn = hc == null ? $.pointerTarget<halfConn>(hc) : (hc as any).__isVarRef === true ? (hc as any).value : (hc as any).__goValue === undefined ? (hc as any) : $.pointerTarget<halfConn>(hc)
		if ((hc$ as halfConn).cipher == null) {
			return 0
		}

		{
			const __goscriptTypeSwitchValue = (hc$ as halfConn).cipher
			switch (true) {
				case $.typeAssert<cipher2.Stream | null>(__goscriptTypeSwitchValue, "cipher.Stream").ok:
					{
						let c: cipher2.Stream | null = $.typeAssert<cipher2.Stream | null>(__goscriptTypeSwitchValue, "cipher.Stream").value
						return 0
					}
					break
				case $.typeAssert<__goscript_cipher_suites.aead | null>(__goscriptTypeSwitchValue, "tls.aead").ok:
					{
						let c: __goscript_cipher_suites.aead | null = $.typeAssert<__goscript_cipher_suites.aead | null>(__goscriptTypeSwitchValue, "tls.aead").value
						return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_cipher_suites.aead, null>) : $.pointerValue<Exclude<__goscript_cipher_suites.aead, null>>(c)).explicitNonceLen()
					}
					break
				case $.typeAssert<cbcMode | null>(__goscriptTypeSwitchValue, "tls.cbcMode").ok:
					{
						let c: cbcMode | null = $.typeAssert<cbcMode | null>(__goscriptTypeSwitchValue, "tls.cbcMode").value
						if ((hc$ as halfConn).version >= 770) {
							return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<cbcMode, null>) : $.pointerValue<Exclude<cbcMode, null>>(c)).BlockSize()
						}
						return 0
					}
					break
				default:
					{
						let c: any = __goscriptTypeSwitchValue
						$.panic("unknown cipher type")
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public incSeq(): void {
		let hc: halfConn | $.VarRef<halfConn> | null = this;
		const hc$: halfConn = hc == null ? $.pointerTarget<halfConn>(hc) : (hc as any).__isVarRef === true ? (hc as any).value : (hc as any).__goValue === undefined ? (hc as any) : $.pointerTarget<halfConn>(hc)
		for (let i = 7; i >= 0; i--) {
			;(hc$ as halfConn).seq[i]++
			if ($.arrayIndex((hc$ as halfConn).seq, i) != 0) {
				return
			}
		}

		// Not allowed to let sequence number wrap.
		// Instead, must renegotiate before it does.
		// Not likely enough to bother.
		$.panic("TLS: sequence number wraparound")
	}

	public prepareCipherSpec(version: number, cipher: any, mac: hash.Hash | null): void {
		let hc: halfConn | $.VarRef<halfConn> | null = this;
		const hc$: halfConn = hc == null ? $.pointerTarget<halfConn>(hc) : (hc as any).__isVarRef === true ? (hc as any).value : (hc as any).__goValue === undefined ? (hc as any) : $.pointerTarget<halfConn>(hc);
		;(hc$ as halfConn).version = version;
		;(hc$ as halfConn).nextCipher = cipher;
		;(hc$ as halfConn).nextMac = mac
	}

	public setErrorLocked(err: $.GoError): $.GoError {
		let hc: halfConn | $.VarRef<halfConn> | null = this;
		const hc$: halfConn = hc == null ? $.pointerTarget<halfConn>(hc) : (hc as any).__isVarRef === true ? (hc as any).value : (hc as any).__goValue === undefined ? (hc as any) : $.pointerTarget<halfConn>(hc)
		{
			let [e, ok] = $.typeAssertTuple<net.Error | null>(err, "net.Error")
			if (ok) {
				;(hc$ as halfConn).err = $.interfaceValue<$.GoError>(new permanentError({err: e}), "*tls.permanentError", /* @__PURE__ */ $.pointerType("tls.permanentError"))
			} else {
				;(hc$ as halfConn).err = err
			}
		}
		return (hc$ as halfConn).err
	}

	public async setTrafficSecret(suite: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null, level: __goscript_quic.QUICEncryptionLevel, secret: $.Slice<number>): globalThis.Promise<void> {
		let hc: halfConn | $.VarRef<halfConn> | null = this;
		const hc$: halfConn = hc == null ? $.pointerTarget<halfConn>(hc) : (hc as any).__isVarRef === true ? (hc as any).value : (hc as any).__goValue === undefined ? (hc as any) : $.pointerTarget<halfConn>(hc);
		;(hc$ as halfConn).trafficSecret = secret;
		;(hc$ as halfConn).level = level
		let __goscriptTuple50: any = await (suite !== null && (suite as any).__isVarRef !== true && (suite as any).__goValue === undefined ? ((suite as any) as __goscript_cipher_suites.cipherSuiteTLS13).trafficKey(secret) : __goscript_cipher_suites.cipherSuiteTLS13.prototype.trafficKey.call(suite, secret))
		let key: $.Slice<number> = __goscriptTuple50[0]
		let iv: $.Slice<number> = __goscriptTuple50[1];
		;(hc$ as halfConn).cipher = ((__goscriptAwait = $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>(suite).aead!(key, iv), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)
		$.clear($.goSlice((hc$ as halfConn).seq, undefined, undefined))
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
		"tls.halfConn",
		() => new halfConn(),
		() => [$.methodSignature("changeCipherSpec", [], ["error"], true), $.methodSignature("decrypt", [["record", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("uint8", "tls.recordType"), "error"], true), $.methodSignature("encrypt", [["record", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["payload", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["rand", "io.Reader"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("explicitNonceLen", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("incSeq", [], [], true), $.methodSignature("prepareCipherSpec", [["version", /* @__PURE__ */ $.basicType("uint16")], ["cipher", { kind: $.TypeKind.Interface, methods: [] }], ["mac", "hash.Hash"]], [], true), $.methodSignature("setErrorLocked", [["err", "error"]], ["error"], true), $.methodSignature("setTrafficSecret", [["suite", /* @__PURE__ */ $.pointerType("tls.cipherSuiteTLS13")], ["level", /* @__PURE__ */ $.basicType("int", "tls.QUICEncryptionLevel")], ["secret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("Lock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		halfConn,
		() => [/* @__PURE__ */ $.structField("Mutex", "sync.Mutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("err", "error", [1], 8, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("version", /* @__PURE__ */ $.basicType("uint16"), [2], 24, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("cipher", { kind: $.TypeKind.Interface, methods: [] }, [3], 32, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("mac", "hash.Hash", [4], 48, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("seq", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8), [5], 64, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("scratchBuf", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 13), [6], 72, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("nextCipher", { kind: $.TypeKind.Interface, methods: [] }, [7], 88, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("nextMac", "hash.Hash", [8], 104, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("level", /* @__PURE__ */ $.basicType("int", "tls.QUICEncryptionLevel"), [9], 120, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("trafficSecret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [10], 128, false, { pkgPath: "crypto/tls" })]
	)
}

export class Conn {
	// constant
	public get conn(): net.Conn | null {
		return this._fields.conn
	}

	public set conn(value: net.Conn | null) {
		this._fields.conn = value
	}

	public get isClient(): boolean {
		return this._fields.isClient
	}

	public set isClient(value: boolean) {
		this._fields.isClient = value
	}

	public get handshakeFn(): ((_p0: context2.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.handshakeFn
	}

	public set handshakeFn(value: ((_p0: context2.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.handshakeFn = value
	}

	public get quic(): __goscript_quic.quicState | $.VarRef<__goscript_quic.quicState> | null {
		return this._fields.quic
	}

	public set quic(value: __goscript_quic.quicState | $.VarRef<__goscript_quic.quicState> | null) {
		this._fields.quic = value
	}

	// isHandshakeComplete is true if the connection is currently transferring
	// application data (i.e. is not currently processing a handshake).
	// isHandshakeComplete is true implies handshakeErr == nil.
	public get isHandshakeComplete(): atomic.Bool {
		return this._fields.isHandshakeComplete
	}

	public set isHandshakeComplete(value: atomic.Bool) {
		this._fields.isHandshakeComplete = value
	}

	// constant after handshake; protected by handshakeMutex
	public get handshakeMutex(): sync.Mutex {
		return this._fields.handshakeMutex
	}

	public set handshakeMutex(value: sync.Mutex) {
		this._fields.handshakeMutex = value
	}

	public get handshakeErr(): $.GoError {
		return this._fields.handshakeErr
	}

	public set handshakeErr(value: $.GoError) {
		this._fields.handshakeErr = value
	}

	public get vers(): number {
		return this._fields.vers
	}

	public set vers(value: number) {
		this._fields.vers = value
	}

	public get haveVers(): boolean {
		return this._fields.haveVers
	}

	public set haveVers(value: boolean) {
		this._fields.haveVers = value
	}

	public get config(): __goscript_common.Config | $.VarRef<__goscript_common.Config> | null {
		return this._fields.config
	}

	public set config(value: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null) {
		this._fields.config = value
	}

	// handshakes counts the number of handshakes performed on the
	// connection so far. If renegotiation is disabled then this is either
	// zero or one.
	public get handshakes(): number {
		return this._fields.handshakes
	}

	public set handshakes(value: number) {
		this._fields.handshakes = value
	}

	public get extMasterSecret(): boolean {
		return this._fields.extMasterSecret
	}

	public set extMasterSecret(value: boolean) {
		this._fields.extMasterSecret = value
	}

	public get didResume(): boolean {
		return this._fields.didResume
	}

	public set didResume(value: boolean) {
		this._fields.didResume = value
	}

	public get didHRR(): boolean {
		return this._fields.didHRR
	}

	public set didHRR(value: boolean) {
		this._fields.didHRR = value
	}

	public get cipherSuite(): number {
		return this._fields.cipherSuite
	}

	public set cipherSuite(value: number) {
		this._fields.cipherSuite = value
	}

	public get curveID(): __goscript_common.CurveID {
		return this._fields.curveID
	}

	public set curveID(value: __goscript_common.CurveID) {
		this._fields.curveID = value
	}

	public get peerSigAlg(): __goscript_common.SignatureScheme {
		return this._fields.peerSigAlg
	}

	public set peerSigAlg(value: __goscript_common.SignatureScheme) {
		this._fields.peerSigAlg = value
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

	public get peerCertificates(): $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null> {
		return this._fields.peerCertificates
	}

	public set peerCertificates(value: $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>) {
		this._fields.peerCertificates = value
	}

	public get localCertificate(): $.Slice<$.Slice<number>> {
		return this._fields.localCertificate
	}

	public set localCertificate(value: $.Slice<$.Slice<number>>) {
		this._fields.localCertificate = value
	}

	// verifiedChains contains the certificate chains that we built, as
	// opposed to the ones presented by the server.
	public get verifiedChains(): $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>> {
		return this._fields.verifiedChains
	}

	public set verifiedChains(value: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>) {
		this._fields.verifiedChains = value
	}

	// serverName contains the server name indicated by the client, if any.
	public get serverName(): string {
		return this._fields.serverName
	}

	public set serverName(value: string) {
		this._fields.serverName = value
	}

	// secureRenegotiation is true if the server echoed the secure
	// renegotiation extension. (This is meaningless as a server because
	// renegotiation is not supported in that case.)
	public get secureRenegotiation(): boolean {
		return this._fields.secureRenegotiation
	}

	public set secureRenegotiation(value: boolean) {
		this._fields.secureRenegotiation = value
	}

	// ekm is a closure for exporting keying material.
	public get ekm(): ((label: string, context: $.Slice<number>, length: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null {
		return this._fields.ekm
	}

	public set ekm(value: ((label: string, context: $.Slice<number>, length: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null) {
		this._fields.ekm = value
	}

	// resumptionSecret is the resumption_master_secret for handling
	// or sending NewSessionTicket messages.
	public get resumptionSecret(): $.Slice<number> {
		return this._fields.resumptionSecret
	}

	public set resumptionSecret(value: $.Slice<number>) {
		this._fields.resumptionSecret = value
	}

	public get echAccepted(): boolean {
		return this._fields.echAccepted
	}

	public set echAccepted(value: boolean) {
		this._fields.echAccepted = value
	}

	// ticketKeys is the set of active session ticket keys for this
	// connection. The first one is used to encrypt new tickets and
	// all are tried to decrypt tickets.
	public get ticketKeys(): $.Slice<__goscript_common.ticketKey> {
		return this._fields.ticketKeys
	}

	public set ticketKeys(value: $.Slice<__goscript_common.ticketKey>) {
		this._fields.ticketKeys = value
	}

	// clientFinishedIsFirst is true if the client sent the first Finished
	// message during the most recent handshake. This is recorded because
	// the first transmitted Finished message is the tls-unique
	// channel-binding value.
	public get clientFinishedIsFirst(): boolean {
		return this._fields.clientFinishedIsFirst
	}

	public set clientFinishedIsFirst(value: boolean) {
		this._fields.clientFinishedIsFirst = value
	}

	// closeNotifyErr is any error from sending the alertCloseNotify record.
	public get closeNotifyErr(): $.GoError {
		return this._fields.closeNotifyErr
	}

	public set closeNotifyErr(value: $.GoError) {
		this._fields.closeNotifyErr = value
	}

	// closeNotifySent is true if the Conn attempted to send an
	// alertCloseNotify record.
	public get closeNotifySent(): boolean {
		return this._fields.closeNotifySent
	}

	public set closeNotifySent(value: boolean) {
		this._fields.closeNotifySent = value
	}

	// clientFinished and serverFinished contain the Finished message sent
	// by the client or server in the most recent handshake. This is
	// retained to support the renegotiation extension and tls-unique
	// channel-binding.
	public get clientFinished(): Uint8Array {
		return this._fields.clientFinished
	}

	public set clientFinished(value: Uint8Array) {
		this._fields.clientFinished = value
	}

	public get serverFinished(): Uint8Array {
		return this._fields.serverFinished
	}

	public set serverFinished(value: Uint8Array) {
		this._fields.serverFinished = value
	}

	// clientProtocol is the negotiated ALPN protocol.
	public get clientProtocol(): string {
		return this._fields.clientProtocol
	}

	public set clientProtocol(value: string) {
		this._fields.clientProtocol = value
	}

	// input/output
	public get _in(): halfConn {
		return this._fields._in
	}

	public set _in(value: halfConn) {
		this._fields._in = value
	}

	// input/output
	public get out(): halfConn {
		return this._fields.out
	}

	public set out(value: halfConn) {
		this._fields.out = value
	}

	public get rawInput(): bytes.Buffer {
		return this._fields.rawInput
	}

	public set rawInput(value: bytes.Buffer) {
		this._fields.rawInput = value
	}

	public get input(): bytes.Reader {
		return this._fields.input
	}

	public set input(value: bytes.Reader) {
		this._fields.input = value
	}

	public get hand(): bytes.Buffer {
		return this._fields.hand
	}

	public set hand(value: bytes.Buffer) {
		this._fields.hand = value
	}

	public get buffering(): boolean {
		return this._fields.buffering
	}

	public set buffering(value: boolean) {
		this._fields.buffering = value
	}

	public get sendBuf(): $.Slice<number> {
		return this._fields.sendBuf
	}

	public set sendBuf(value: $.Slice<number>) {
		this._fields.sendBuf = value
	}

	// bytesSent counts the bytes of application data sent.
	// packetsSent counts packets.
	public get bytesSent(): bigint {
		return this._fields.bytesSent
	}

	public set bytesSent(value: bigint) {
		this._fields.bytesSent = value
	}

	public get packetsSent(): bigint {
		return this._fields.packetsSent
	}

	public set packetsSent(value: bigint) {
		this._fields.packetsSent = value
	}

	// retryCount counts the number of consecutive non-advancing records
	// received by Conn.readRecord. That is, records that neither advance the
	// handshake, nor deliver application data. Protected by in.Mutex.
	public get retryCount(): number {
		return this._fields.retryCount
	}

	public set retryCount(value: number) {
		this._fields.retryCount = value
	}

	// activeCall indicates whether Close has been call in the low bit.
	// the rest of the bits are the number of goroutines in Conn.Write.
	public get activeCall(): atomic.Int32 {
		return this._fields.activeCall
	}

	public set activeCall(value: atomic.Int32) {
		this._fields.activeCall = value
	}

	public get tmp(): Uint8Array {
		return this._fields.tmp
	}

	public set tmp(value: Uint8Array) {
		this._fields.tmp = value
	}

	public _fields: {
		conn: net.Conn | null
		isClient: boolean
		handshakeFn: ((_p0: context2.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		quic: __goscript_quic.quicState | $.VarRef<__goscript_quic.quicState> | null
		isHandshakeComplete: atomic.Bool
		handshakeMutex: sync.Mutex
		handshakeErr: $.GoError
		vers: number
		haveVers: boolean
		config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null
		handshakes: number
		extMasterSecret: boolean
		didResume: boolean
		didHRR: boolean
		cipherSuite: number
		curveID: __goscript_common.CurveID
		peerSigAlg: __goscript_common.SignatureScheme
		ocspResponse: $.Slice<number>
		scts: $.Slice<$.Slice<number>>
		peerCertificates: $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>
		localCertificate: $.Slice<$.Slice<number>>
		verifiedChains: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>
		serverName: string
		secureRenegotiation: boolean
		ekm: ((label: string, context: $.Slice<number>, length: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null
		resumptionSecret: $.Slice<number>
		echAccepted: boolean
		ticketKeys: $.Slice<__goscript_common.ticketKey>
		clientFinishedIsFirst: boolean
		closeNotifyErr: $.GoError
		closeNotifySent: boolean
		clientFinished: Uint8Array
		serverFinished: Uint8Array
		clientProtocol: string
		_in: halfConn
		out: halfConn
		rawInput: bytes.Buffer
		input: bytes.Reader
		hand: bytes.Buffer
		buffering: boolean
		sendBuf: $.Slice<number>
		bytesSent: bigint
		packetsSent: bigint
		retryCount: number
		activeCall: atomic.Int32
		tmp: Uint8Array
	}

	constructor(init?: Partial<{conn?: net.Conn | null, isClient?: boolean, handshakeFn?: ((_p0: context2.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null, quic?: __goscript_quic.quicState | $.VarRef<__goscript_quic.quicState> | null, isHandshakeComplete?: atomic.Bool, handshakeMutex?: sync.Mutex, handshakeErr?: $.GoError, vers?: number, haveVers?: boolean, config?: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null, handshakes?: number, extMasterSecret?: boolean, didResume?: boolean, didHRR?: boolean, cipherSuite?: number, curveID?: __goscript_common.CurveID, peerSigAlg?: __goscript_common.SignatureScheme, ocspResponse?: $.Slice<number>, scts?: $.Slice<$.Slice<number>>, peerCertificates?: $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>, localCertificate?: $.Slice<$.Slice<number>>, verifiedChains?: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>, serverName?: string, secureRenegotiation?: boolean, ekm?: ((label: string, context: $.Slice<number>, length: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null, resumptionSecret?: $.Slice<number>, echAccepted?: boolean, ticketKeys?: $.Slice<__goscript_common.ticketKey>, clientFinishedIsFirst?: boolean, closeNotifyErr?: $.GoError, closeNotifySent?: boolean, clientFinished?: Uint8Array, serverFinished?: Uint8Array, clientProtocol?: string, _in?: halfConn, out?: halfConn, rawInput?: bytes.Buffer, input?: bytes.Reader, hand?: bytes.Buffer, buffering?: boolean, sendBuf?: $.Slice<number>, bytesSent?: bigint, packetsSent?: bigint, retryCount?: number, activeCall?: atomic.Int32, tmp?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			conn: init?.conn ?? (null! as net.Conn | null),
			isClient: init?.isClient ?? (false as boolean),
			handshakeFn: init?.handshakeFn ?? (null! as ((_p0: context2.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			quic: init?.quic ?? (null! as __goscript_quic.quicState | $.VarRef<__goscript_quic.quicState> | null),
			isHandshakeComplete: init?.isHandshakeComplete ? $.markAsStructValue($.cloneStructValue(init.isHandshakeComplete)) : $.markAsStructValue(new atomic.Bool()),
			handshakeMutex: init?.handshakeMutex ? $.markAsStructValue($.cloneStructValue(init.handshakeMutex)) : $.markAsStructValue(new sync.Mutex()),
			handshakeErr: init?.handshakeErr ?? (null! as $.GoError),
			vers: init?.vers ?? (0 as number),
			haveVers: init?.haveVers ?? (false as boolean),
			config: init?.config ?? (null! as __goscript_common.Config | $.VarRef<__goscript_common.Config> | null),
			handshakes: init?.handshakes ?? (0 as number),
			extMasterSecret: init?.extMasterSecret ?? (false as boolean),
			didResume: init?.didResume ?? (false as boolean),
			didHRR: init?.didHRR ?? (false as boolean),
			cipherSuite: init?.cipherSuite ?? (0 as number),
			curveID: init?.curveID ?? (0 as __goscript_common.CurveID),
			peerSigAlg: init?.peerSigAlg ?? (0 as __goscript_common.SignatureScheme),
			ocspResponse: init?.ocspResponse ?? (null! as $.Slice<number>),
			scts: init?.scts ?? (null! as $.Slice<$.Slice<number>>),
			peerCertificates: init?.peerCertificates ?? (null! as $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>),
			localCertificate: init?.localCertificate ?? (null! as $.Slice<$.Slice<number>>),
			verifiedChains: init?.verifiedChains ?? (null! as $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>>),
			serverName: init?.serverName ?? ("" as string),
			secureRenegotiation: init?.secureRenegotiation ?? (false as boolean),
			ekm: init?.ekm ?? (null! as ((label: string, context: $.Slice<number>, length: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null),
			resumptionSecret: init?.resumptionSecret ?? (null! as $.Slice<number>),
			echAccepted: init?.echAccepted ?? (false as boolean),
			ticketKeys: init?.ticketKeys ?? (null! as $.Slice<__goscript_common.ticketKey>),
			clientFinishedIsFirst: init?.clientFinishedIsFirst ?? (false as boolean),
			closeNotifyErr: init?.closeNotifyErr ?? (null! as $.GoError),
			closeNotifySent: init?.closeNotifySent ?? (false as boolean),
			clientFinished: init?.clientFinished !== undefined ? $.cloneArrayValue(init.clientFinished, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 12)) : $.arrayValue(new Uint8Array(12)),
			serverFinished: init?.serverFinished !== undefined ? $.cloneArrayValue(init.serverFinished, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 12)) : $.arrayValue(new Uint8Array(12)),
			clientProtocol: init?.clientProtocol ?? ("" as string),
			_in: init?._in ? init._in.clone() : new halfConn(undefined, true),
			out: init?.out ? init.out.clone() : new halfConn(undefined, true),
			rawInput: init?.rawInput ? $.markAsStructValue($.cloneStructValue(init.rawInput)) : $.markAsStructValue(new bytes.Buffer()),
			input: init?.input ? $.markAsStructValue($.cloneStructValue(init.input)) : $.markAsStructValue(new bytes.Reader()),
			hand: init?.hand ? $.markAsStructValue($.cloneStructValue(init.hand)) : $.markAsStructValue(new bytes.Buffer()),
			buffering: init?.buffering ?? (false as boolean),
			sendBuf: init?.sendBuf ?? (null! as $.Slice<number>),
			bytesSent: init?.bytesSent ?? (0n as bigint),
			packetsSent: init?.packetsSent ?? (0n as bigint),
			retryCount: init?.retryCount ?? (0 as number),
			activeCall: init?.activeCall ? $.markAsStructValue($.cloneStructValue(init.activeCall)) : $.markAsStructValue(new atomic.Int32()),
			tmp: init?.tmp !== undefined ? $.cloneArrayValue(init.tmp, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16)) : $.arrayValue(new Uint8Array(16))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Conn {
		return new Conn(this, true)
	}

	public __goscriptAssign(source: Conn): void {
		const target = this._fields
		const values = source._fields
		target.conn = $.assignFieldValue(target.conn, values.conn, "net.Conn")
		target.isClient = values.isClient
		target.handshakeFn = values.handshakeFn
		target.quic = values.quic
		$.assignStruct(target.isHandshakeComplete, values.isHandshakeComplete)
		$.assignStruct(target.handshakeMutex, values.handshakeMutex)
		target.handshakeErr = $.assignFieldValue(target.handshakeErr, values.handshakeErr, "error")
		target.vers = values.vers
		target.haveVers = values.haveVers
		target.config = values.config
		target.handshakes = values.handshakes
		target.extMasterSecret = values.extMasterSecret
		target.didResume = values.didResume
		target.didHRR = values.didHRR
		target.cipherSuite = values.cipherSuite
		target.curveID = values.curveID
		target.peerSigAlg = values.peerSigAlg
		target.ocspResponse = values.ocspResponse
		target.scts = values.scts
		target.peerCertificates = values.peerCertificates
		target.localCertificate = values.localCertificate
		target.verifiedChains = values.verifiedChains
		target.serverName = values.serverName
		target.secureRenegotiation = values.secureRenegotiation
		target.ekm = values.ekm
		target.resumptionSecret = values.resumptionSecret
		target.echAccepted = values.echAccepted
		target.ticketKeys = values.ticketKeys
		target.clientFinishedIsFirst = values.clientFinishedIsFirst
		target.closeNotifyErr = $.assignFieldValue(target.closeNotifyErr, values.closeNotifyErr, "error")
		target.closeNotifySent = values.closeNotifySent
		target.clientFinished = $.assignFieldValue(target.clientFinished, values.clientFinished, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 12))
		target.serverFinished = $.assignFieldValue(target.serverFinished, values.serverFinished, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 12))
		target.clientProtocol = values.clientProtocol
		$.assignStruct(target._in, values._in)
		$.assignStruct(target.out, values.out)
		$.assignStruct(target.rawInput, values.rawInput)
		$.assignStruct(target.input, values.input)
		$.assignStruct(target.hand, values.hand)
		target.buffering = values.buffering
		target.sendBuf = values.sendBuf
		target.bytesSent = values.bytesSent
		target.packetsSent = values.packetsSent
		target.retryCount = values.retryCount
		$.assignStruct(target.activeCall, values.activeCall)
		target.tmp = $.assignFieldValue(target.tmp, values.tmp, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		// Interlock with Conn.Write above.
		let x: number = 0
		while (true) {
			x = (c$ as Conn).activeCall.Load()
			if ($.int((x & 1), 32) != 0) {
				return net.ErrClosed
			}
			if ((c$ as Conn).activeCall.CompareAndSwap(x, $.int(x | 1, 32))) {
				break
			}
		}
		if (x != 0) {
			// io.Writer and io.Closer should not be used concurrently.
			// If Close is called while a Write is currently in-flight,
			// interpret that as a sign that this Close is really just
			// being used to break the Write and/or clean up resources and
			// avoid sending the alertCloseNotify, which may block
			// waiting on handshakeMutex or the c.out mutex.
			return $.pointerValue<Exclude<net.Conn, null>>((c$ as Conn).conn).Close()
		}

		let alertErr: $.GoError = null! as $.GoError
		if ((c$ as Conn).isHandshakeComplete.Load()) {
			{
				let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).closeNotify() : Conn.prototype.closeNotify.call(c))
				if (err != null) {
					alertErr = fmt.Errorf("tls: failed to send closeNotify alert (but connection was closed anyway): %w", (err as any))
				}
			}
		}

		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((c$ as Conn).conn).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
		return alertErr
	}

	public async CloseWrite(): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		if (!$.pointerValue<Conn>(c).isHandshakeComplete.Load()) {
			return errEarlyCloseWrite
		}

		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).closeNotify() : Conn.prototype.closeNotify.call(c))
	}

	public async ConnectionState(): globalThis.Promise<__goscript_common.ConnectionState> {
		const c: Conn | $.VarRef<Conn> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		await (c$ as Conn).handshakeMutex.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Conn).handshakeMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).connectionStateLocked() : Conn.prototype.connectionStateLocked.call(c))
	}

	public async Handshake(): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).HandshakeContext(context2.Background()) : Conn.prototype.HandshakeContext.call(c, context2.Background()))
	}

	public async HandshakeContext(ctx: context2.Context | null): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		// Delegate to unexported method for named return
		// without confusing documented signature.
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).handshakeContext(ctx) : Conn.prototype.handshakeContext.call(c, ctx))
	}

	public async LocalAddr(): globalThis.Promise<net.Addr | null> {
		const c: Conn | $.VarRef<Conn> | null = this;
		return $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<Conn>(c).conn).LocalAddr()
	}

	public NetConn(): net.Conn | null {
		const c: Conn | $.VarRef<Conn> | null = this;
		return $.pointerValue<Conn>(c).conn
	}

	public async OCSPResponse(): globalThis.Promise<$.Slice<number>> {
		const c: Conn | $.VarRef<Conn> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		await (c$ as Conn).handshakeMutex.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Conn).handshakeMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		return (c$ as Conn).ocspResponse
	}

	public async Read(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const c: Conn | $.VarRef<Conn> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		{
			let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).Handshake() : Conn.prototype.Handshake.call(c))
			if (err != null) {
				return [0, err]
			}
		}
		if ($.sliceLen(b) == 0) {
			// Put this after Handshake, in case people were calling
			// Read(nil) for the side effect of the Handshake.
			return [0, null]
		}

		await (c$ as Conn)._in.Mutex.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Conn)._in.Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		while ((c$ as Conn).input.Len() == 0) {
			{
				let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).readRecord() : Conn.prototype.readRecord.call(c))
				if (err != null) {
					return [0, err]
				}
			}
			while ((c$ as Conn).hand.Len() > 0) {
				{
					let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).handlePostHandshakeMessage() : Conn.prototype.handlePostHandshakeMessage.call(c))
					if (err != null) {
						return [0, err]
					}
				}
			}
		}

		let [n, ] = (c$ as Conn).input.Read(b)

		// If a close-notify alert is waiting, read it so that we can return (n,
		// EOF) instead of (n, nil), to signal to the HTTP response reading
		// goroutine that the connection is now closed. This eliminates a race
		// where the HTTP response reading goroutine would otherwise not observe
		// the EOF until its next read, by which time a client goroutine might
		// have already tried to reuse the HTTP connection for a new request.
		// See https://golang.org/cl/76400046 and https://golang.org/issue/3514
		if ((((n != 0) && ((c$ as Conn).input.Len() == 0)) && ((c$ as Conn).rawInput.Len() > 0)) && ($.uint($.arrayIndex((c$ as Conn).rawInput.Bytes()!, 0), 8) == 21)) {
			{
				let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).readRecord() : Conn.prototype.readRecord.call(c))
				if (err != null) {
					return [n, err]
				}
			}
		}

		return [n, null]
	}

	public async RemoteAddr(): globalThis.Promise<net.Addr | null> {
		const c: Conn | $.VarRef<Conn> | null = this;
		return $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<Conn>(c).conn).RemoteAddr()
	}

	public async SetDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		return $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<Conn>(c).conn).SetDeadline($.markAsStructValue($.cloneStructValue(t)))
	}

	public async SetReadDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		return $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<Conn>(c).conn).SetReadDeadline($.markAsStructValue($.cloneStructValue(t)))
	}

	public async SetWriteDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		return $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<Conn>(c).conn).SetWriteDeadline($.markAsStructValue($.cloneStructValue(t)))
	}

	public async VerifyHostname(host: string): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		await (c$ as Conn).handshakeMutex.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Conn).handshakeMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		if (!(c$ as Conn).isClient) {
			return errors.New("tls: VerifyHostname called on TLS server connection")
		}
		if (!(c$ as Conn).isHandshakeComplete.Load()) {
			return errors.New("tls: handshake has not yet been performed")
		}
		if ($.sliceLen((c$ as Conn).verifiedChains) == 0) {
			return errors.New("tls: handshake did not verify certificate chain")
		}
		return x509.Certificate.prototype.VerifyHostname.call($.arrayIndex((c$ as Conn).peerCertificates!, 0), host)
	}

	public async Write(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const c: Conn | $.VarRef<Conn> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		// interlock with Close below
		while (true) {
			let x = (c$ as Conn).activeCall.Load()
			if ($.int((x & 1), 32) != 0) {
				return [0, net.ErrClosed]
			}
			if ((c$ as Conn).activeCall.CompareAndSwap(x, $.int(((x + 2) | 0), 32))) {
				break
			}
		}
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => (delta: number) => __receiver.Add(delta))((c$ as Conn).activeCall), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int32")], results: [/* @__PURE__ */ $.basicType("int32")] } as $.FunctionTypeInfo), "sync/atomic.(*Int32).Add-fm")
		__defer.defer(() => { __goscriptDeferCallee4(-2) })

		{
			let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).Handshake() : Conn.prototype.Handshake.call(c))
			if (err != null) {
				return [0, err]
			}
		}

		await (c$ as Conn).out.Mutex.Lock()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Conn).out.Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })

		{
			let err = (c$ as Conn).out.err
			if (err != null) {
				return [0, err]
			}
		}

		if (!(c$ as Conn).isHandshakeComplete.Load()) {
			return [0, $.namedValueInterfaceValue<$.GoError>(80, "tls.alert", {"Error": __goscript_alert.alert_Error}, /* @__PURE__ */ $.basicType("uint8", "tls.alert"))]
		}

		if ((c$ as Conn).closeNotifySent) {
			return [0, errShutdown]
		}

		// TLS 1.0 is susceptible to a chosen-plaintext
		// attack when using block mode ciphers due to predictable IVs.
		// This can be prevented by splitting each Application Data
		// record into two records, effectively randomizing the IV.
		//
		// https://www.openssl.org/~bodo/tls-cbc.txt
		// https://bugzilla.mozilla.org/show_bug.cgi?id=665814
		// https://www.imperialviolet.org/2012/01/15/beastfollowup.html

		let m: number = 0
		if (($.sliceLen(b) > 1) && ((c$ as Conn).vers == 769)) {
			{
				let [, ok] = $.typeAssertTuple<cipher2.BlockMode | null>((c$ as Conn).out.cipher, "cipher.BlockMode")
				if (ok) {
					let [n, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).writeRecordLocked(23, $.goSlice(b, undefined, 1)) : Conn.prototype.writeRecordLocked.call(c, 23, $.goSlice(b, undefined, 1)))
					if (err != null) {
						return [n, (c$ as Conn).out.setErrorLocked(err)]
					}
					let __goscriptAssign0_0: number = 1
					let __goscriptAssign0_1: $.Slice<number> = $.goSlice(b, 1, undefined)
					m = __goscriptAssign0_0
					b = __goscriptAssign0_1
				}
			}
		}

		let [n, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).writeRecordLocked(23, b) : Conn.prototype.writeRecordLocked.call(c, 23, b))
		return [n + m, (c$ as Conn).out.setErrorLocked(err)]
	}

	public async clientHandshake(ctx: context2.Context | null): globalThis.Promise<$.GoError> {
		let c: Conn | $.VarRef<Conn> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		if ((c$ as Conn).config == null) {
			;(c$ as Conn).config = __goscript_common.defaultConfig()
		}

		;(c$ as Conn).didResume = false;
		;(c$ as Conn).curveID = 0

		let __goscriptTuple0: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).makeClientHello() : Conn.prototype.makeClientHello.call(c))
		let hello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null = __goscriptTuple0[0]
		let keyShareKeys: __goscript_key_schedule.keySharePrivateKeys | $.VarRef<__goscript_key_schedule.keySharePrivateKeys> | null = __goscriptTuple0[1]
		let ech: __goscript_handshake_client.echClientContext | $.VarRef<__goscript_handshake_client.echClientContext> | null = __goscriptTuple0[2]
		err = __goscriptTuple0[3]
		let hello$: __goscript_handshake_messages.clientHelloMsg = hello == null ? $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(hello) : (hello as any).__isVarRef === true ? (hello as any).value : (hello as any).__goValue === undefined ? (hello as any) : $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(hello)
		let ech$: __goscript_handshake_client.echClientContext = ech == null ? $.pointerTarget<__goscript_handshake_client.echClientContext>(ech) : (ech as any).__isVarRef === true ? (ech as any).value : (ech as any).__goValue === undefined ? (ech as any) : $.pointerTarget<__goscript_handshake_client.echClientContext>(ech)
		if (err != null) {
			return err
		}

		let __goscriptTuple1: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).loadSession(hello) : Conn.prototype.loadSession.call(c, hello))
		let session: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null = __goscriptTuple1[0]
		let earlySecret: tls13.EarlySecret | $.VarRef<tls13.EarlySecret> | null = __goscriptTuple1[1]
		let binderKey: $.Slice<number> = __goscriptTuple1[2]
		err = __goscriptTuple1[3]
		if (err != null) {
			return err
		}
		if (session != null) {
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {

				if (err != null) {
					{
						let cacheKey = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).clientSessionCacheKey() : Conn.prototype.clientSessionCacheKey.call(c))
						if (!$.stringEqual(cacheKey, "")) {
							void (__goscriptAwait = $.pointerValue<Exclude<__goscript_common.ClientSessionCache, null>>($.pointerValue<__goscript_common.Config>((c$ as Conn).config).ClientSessionCache).Put(cacheKey, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
					}
				}
			})() })
		}

		if (ech != null) {

			;(ech$ as __goscript_handshake_client.echClientContext).innerHello = (hello !== null && (hello as any).__isVarRef !== true && (hello as any).__goValue === undefined ? ((hello as any) as __goscript_handshake_messages.clientHelloMsg).clone() : __goscript_handshake_messages.clientHelloMsg.prototype.clone.call(hello));

			;(hello$ as __goscript_handshake_messages.clientHelloMsg).serverName = $.bytesToString($.pointerValue<__goscript_ech.echConfig>((ech$ as __goscript_handshake_client.echClientContext).config).PublicName);

			;(hello$ as __goscript_handshake_messages.clientHelloMsg).random = $.makeSlice<number>(32, undefined, "byte")
			let __goscriptTuple2: any = await io.ReadFull($.pointerValueOrNil(__goscript_common.Config.prototype.rand.call((c$ as Conn).config))!, (hello$ as __goscript_handshake_messages.clientHelloMsg).random)
			err = __goscriptTuple2[1]
			if (err != null) {
				const __goscriptReturn0: $.GoError = errors.New($.concatString("tls: short read from Rand: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
				err = __goscriptReturn0
				await __defer.dispose()
				return err
			}

			{
				let __goscriptShadow0 = await __goscript_ech.computeAndUpdateOuterECHExtension(hello, (ech$ as __goscript_handshake_client.echClientContext).innerHello, ech, true)
				if (__goscriptShadow0 != null) {
					const __goscriptReturn1: $.GoError = __goscriptShadow0
					err = __goscriptReturn1
					await __defer.dispose()
					return err
				}
			}
		}

		;(c$ as Conn).serverName = (hello$ as __goscript_handshake_messages.clientHelloMsg).serverName

		{
			let [, __goscriptShadow1] = await Conn.prototype.writeHandshakeRecord.call(c, $.interfaceValue<__goscript_common.handshakeMessage | null>(hello, "*tls.clientHelloMsg", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")), null)
			if (__goscriptShadow1 != null) {
				const __goscriptReturn2: $.GoError = __goscriptShadow1
				err = __goscriptReturn2
				await __defer.dispose()
				return err
			}
		}

		if ((hello$ as __goscript_handshake_messages.clientHelloMsg).earlyData) {
			let suite: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null = __goscript_cipher_suites.cipherSuiteTLS13ByID($.pointerValue<__goscript_ticket.SessionState>(session).cipherSuite)
			let suite$: __goscript_cipher_suites.cipherSuiteTLS13 = suite == null ? $.pointerTarget<__goscript_cipher_suites.cipherSuiteTLS13>(suite) : (suite as any).__isVarRef === true ? (suite as any).value : (suite as any).__goValue === undefined ? (suite as any) : $.pointerTarget<__goscript_cipher_suites.cipherSuiteTLS13>(suite)
			let transcript = await crypto.Hash_New((suite$ as __goscript_cipher_suites.cipherSuiteTLS13).hash)
			let transcriptHello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null = hello
			if (ech != null) {
				transcriptHello = (ech$ as __goscript_handshake_client.echClientContext).innerHello
			}
			{
				let __goscriptShadow2 = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>(transcriptHello, "*tls.clientHelloMsg", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")), (transcript as __goscript_handshake_messages.transcriptHash | null))
				if (__goscriptShadow2 != null) {
					const __goscriptReturn3: $.GoError = __goscriptShadow2
					err = __goscriptReturn3
					await __defer.dispose()
					return err
				}
			}
			let earlyTrafficSecret: $.Slice<number> = await (earlySecret !== null && (earlySecret as any).__isVarRef !== true && (earlySecret as any).__goValue === undefined ? ((earlySecret as any) as tls13.EarlySecret).ClientEarlyTrafficSecret(transcript) : tls13.EarlySecret.prototype.ClientEarlyTrafficSecret.call(earlySecret, transcript))
			void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).quicSetWriteSecret(1, (suite$ as __goscript_cipher_suites.cipherSuiteTLS13).id, earlyTrafficSecret) : Conn.prototype.quicSetWriteSecret.call(c, 1, (suite$ as __goscript_cipher_suites.cipherSuiteTLS13).id, earlyTrafficSecret))
		}
		// if i <= paddingLen then the MSB of t is zero

		let __goscriptTuple3: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).readHandshake(null) : Conn.prototype.readHandshake.call(c, null))
		let msg = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			const __goscriptReturn4: $.GoError = err
			err = __goscriptReturn4
			await __defer.dispose()
			return err
		}

		let __goscriptTuple4: any = $.typeAssertTuple<__goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.serverHelloMsg"))
		let serverHello: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		let serverHello$: __goscript_handshake_messages.serverHelloMsg = serverHello == null ? $.pointerTarget<__goscript_handshake_messages.serverHelloMsg>(serverHello) : (serverHello as any).__isVarRef === true ? (serverHello as any).value : (serverHello as any).__goValue === undefined ? (serverHello as any) : $.pointerTarget<__goscript_handshake_messages.serverHelloMsg>(serverHello)
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10))
			const __goscriptReturn5: $.GoError = __goscript_common.unexpectedMessageError($.interfaceValue(serverHello, "*tls.serverHelloMsg", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")), msg)
			err = __goscriptReturn5
			await __defer.dispose()
			return err
		}

		{
			let __goscriptShadow3 = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).pickTLSVersion(serverHello) : Conn.prototype.pickTLSVersion.call(c, serverHello))
			if (__goscriptShadow3 != null) {
				const __goscriptReturn6: $.GoError = __goscriptShadow3
				err = __goscriptReturn6
				await __defer.dispose()
				return err
			}
		}

		let maxVers = __goscript_common.Config.prototype.maxSupportedVersion.call((c$ as Conn).config, true, (c$ as Conn).quic != null)
		let tls12Downgrade = $.stringEqual($.bytesToString($.goSlice((serverHello$ as __goscript_handshake_messages.serverHelloMsg).random, 24, undefined)), "DOWNGRD\x01")
		let tls11Downgrade = $.stringEqual($.bytesToString($.goSlice((serverHello$ as __goscript_handshake_messages.serverHelloMsg).random, 24, undefined)), "DOWNGRD\x00")
		if ((((maxVers == 772) && ((c$ as Conn).vers <= 771)) && (tls12Downgrade || tls11Downgrade)) || (((maxVers == 771) && ((c$ as Conn).vers <= 770)) && tls11Downgrade)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(47) : Conn.prototype.sendAlert.call(c, 47))
			const __goscriptReturn7: $.GoError = errors.New("tls: downgrade attempt detected, possibly due to a MitM attack or a broken middlebox")
			err = __goscriptReturn7
			await __defer.dispose()
			return err
		}

		if ((c$ as Conn).vers == 772) {
			let hs: __goscript_handshake_client_tls13.clientHandshakeStateTLS13 | $.VarRef<__goscript_handshake_client_tls13.clientHandshakeStateTLS13> | null = new __goscript_handshake_client_tls13.clientHandshakeStateTLS13({c: c, ctx: ctx, serverHello: serverHello, hello: hello, keyShareKeys: keyShareKeys, session: session, earlySecret: earlySecret, binderKey: binderKey, echContext: ech})
			const __goscriptReturn8: $.GoError = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as __goscript_handshake_client_tls13.clientHandshakeStateTLS13).handshake() : __goscript_handshake_client_tls13.clientHandshakeStateTLS13.prototype.handshake.call(hs))
			err = __goscriptReturn8
			await __defer.dispose()
			return err
		}

		let hs: __goscript_handshake_client.clientHandshakeState | $.VarRef<__goscript_handshake_client.clientHandshakeState> | null = new __goscript_handshake_client.clientHandshakeState({c: c, ctx: ctx, serverHello: serverHello, hello: hello, session: session})
		const __goscriptReturn9: $.GoError = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as __goscript_handshake_client.clientHandshakeState).handshake() : __goscript_handshake_client.clientHandshakeState.prototype.handshake.call(hs))
		err = __goscriptReturn9
		await __defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async clientSessionCacheKey(): globalThis.Promise<string> {
		const c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		if ($.stringLen($.pointerValue<__goscript_common.Config>((c$ as Conn).config).ServerName) > 0) {
			return $.pointerValue<__goscript_common.Config>((c$ as Conn).config).ServerName
		}
		if ((c$ as Conn).conn != null) {
			return (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((c$ as Conn).conn).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return ""
	}

	public async closeNotify(): globalThis.Promise<$.GoError> {
		let c: Conn | $.VarRef<Conn> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		await (c$ as Conn).out.Mutex.Lock()
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Conn).out.Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee6() })

		if (!(c$ as Conn).closeNotifySent) {
			// Set a Write Deadline to prevent possibly blocking forever.
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).SetWriteDeadline($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Now())).Add(5000000000n)))) : Conn.prototype.SetWriteDeadline.call(c, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Now())).Add(5000000000n)))));
			;(c$ as Conn).closeNotifyErr = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlertLocked(0) : Conn.prototype.sendAlertLocked.call(c, 0));
			;(c$ as Conn).closeNotifySent = true
			// Any subsequent writes will fail.
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).SetWriteDeadline($.markAsStructValue($.cloneStructValue(time.Now()))) : Conn.prototype.SetWriteDeadline.call(c, $.markAsStructValue($.cloneStructValue(time.Now()))))
		}
		return (c$ as Conn).closeNotifyErr
	}

	public connectionStateLocked(): __goscript_common.ConnectionState {
		const c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		let state: __goscript_common.ConnectionState = new __goscript_common.ConnectionState(undefined, true)
		state.HandshakeComplete = (c$ as Conn).isHandshakeComplete.Load()
		state.Version = (c$ as Conn).vers
		state.NegotiatedProtocol = (c$ as Conn).clientProtocol
		state.DidResume = (c$ as Conn).didResume
		state.HelloRetryRequest = (c$ as Conn).didHRR
		state.testingOnlyPeerSignatureAlgorithm = (c$ as Conn).peerSigAlg
		state.CurveID = (c$ as Conn).curveID
		state.NegotiatedProtocolIsMutual = true
		state.ServerName = (c$ as Conn).serverName
		state.CipherSuite = (c$ as Conn).cipherSuite
		state.PeerCertificates = (c$ as Conn).peerCertificates
		state.LocalCertificate = (c$ as Conn).localCertificate
		state.VerifiedChains = (c$ as Conn).verifiedChains
		state.SignedCertificateTimestamps = (c$ as Conn).scts
		state.OCSPResponse = (c$ as Conn).ocspResponse
		if ((!(c$ as Conn).didResume || (c$ as Conn).extMasterSecret) && ((c$ as Conn).vers != 772)) {
			if ((c$ as Conn).clientFinishedIsFirst) {
				state.TLSUnique = $.goSlice((c$ as Conn).clientFinished, undefined, undefined)
			} else {
				state.TLSUnique = $.goSlice((c$ as Conn).serverFinished, undefined, undefined)
			}
		}
		if ($.pointerValue<__goscript_common.Config>((c$ as Conn).config).Renegotiation != 0) {
			state.ekm = __goscript_prf.noEKMBecauseRenegotiation
		} else {
			if (((c$ as Conn).vers != 772) && !(c$ as Conn).extMasterSecret) {
				state.ekm = __goscript_prf.noEKMBecauseNoEMS
			} else {
				state.ekm = (c$ as Conn).ekm
			}
		}
		state.ECHAccepted = (c$ as Conn).echAccepted
		return (state).clone()
	}

	public async flush(): globalThis.Promise<[number, $.GoError]> {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		if ($.sliceLen((c$ as Conn).sendBuf) == 0) {
			return [0, null]
		}

		let [n, err] = await $.pointerValue<Exclude<net.Conn, null>>((c$ as Conn).conn).Write((c$ as Conn).sendBuf);
		;(c$ as Conn).bytesSent = $.int64Add((c$ as Conn).bytesSent, $.int64(n));
		;(c$ as Conn).sendBuf = null;
		;(c$ as Conn).buffering = false
		return [n, err]
	}

	public async getClientCertificate(cri: __goscript_common.CertificateRequestInfo | $.VarRef<__goscript_common.CertificateRequestInfo> | null): globalThis.Promise<[__goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null, $.GoError]> {
		const c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		if ($.pointerValue<__goscript_common.Config>((c$ as Conn).config).GetClientCertificate != null) {
			return $.pointerValue<__goscript_common.Config>((c$ as Conn).config).GetClientCertificate!(cri)
		}

		for (let __goscriptRangeTarget0 = $.pointerValue<__goscript_common.Config>((c$ as Conn).config).Certificates, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let chain = $.varRef(((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_common.Certificate)).clone())
			{
				let err = await (cri !== null && (cri as any).__isVarRef !== true && (cri as any).__goValue === undefined ? ((cri as any) as __goscript_common.CertificateRequestInfo).SupportsCertificate(chain) : __goscript_common.CertificateRequestInfo.prototype.SupportsCertificate.call(cri, chain))
				if (err != null) {
					continue
				}
			}
			return [chain, null]
		}

		// Ok.
		return [new __goscript_common.Certificate(), null]
	}

	public async handleKeyUpdate(keyUpdate: __goscript_handshake_messages.keyUpdateMsg | $.VarRef<__goscript_handshake_messages.keyUpdateMsg> | null): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		const keyUpdate$: __goscript_handshake_messages.keyUpdateMsg = keyUpdate == null ? $.pointerTarget<__goscript_handshake_messages.keyUpdateMsg>(keyUpdate) : (keyUpdate as any).__isVarRef === true ? (keyUpdate as any).value : (keyUpdate as any).__goValue === undefined ? (keyUpdate as any) : $.pointerTarget<__goscript_handshake_messages.keyUpdateMsg>(keyUpdate)
		if ((c$ as Conn).quic != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10))
			return (c$ as Conn)._in.setErrorLocked(errors.New("tls: received unexpected key update message"))
		}

		let __goscriptShadow4: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null = __goscript_cipher_suites.cipherSuiteTLS13ByID((c$ as Conn).cipherSuite)
		if (__goscriptShadow4 == null) {
			return (c$ as Conn)._in.setErrorLocked(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(80) : Conn.prototype.sendAlert.call(c, 80)))
		}

		if ((keyUpdate$ as __goscript_handshake_messages.keyUpdateMsg).updateRequested) {
			await (c$ as Conn).out.Mutex.Lock()
			const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Conn).out.Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee7() })

			let msg: __goscript_handshake_messages.keyUpdateMsg | $.VarRef<__goscript_handshake_messages.keyUpdateMsg> | null = new __goscript_handshake_messages.keyUpdateMsg()
			let __goscriptTuple5: any = await (msg !== null && (msg as any).__isVarRef !== true && (msg as any).__goValue === undefined ? ((msg as any) as __goscript_handshake_messages.keyUpdateMsg).marshal() : __goscript_handshake_messages.keyUpdateMsg.prototype.marshal.call(msg))
			let msgBytes: $.Slice<number> = __goscriptTuple5[0]
			let err = __goscriptTuple5[1]
			if (err != null) {
				return err
			}
			let __goscriptTuple6: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).writeRecordLocked(22, msgBytes) : Conn.prototype.writeRecordLocked.call(c, 22, msgBytes))
			err = __goscriptTuple6[1]
			if (err != null) {
				// Surface the error at the next write.
				void (c$ as Conn).out.setErrorLocked(err)
				return null
			}

			let newSecret: $.Slice<number> = await (__goscriptShadow4 !== null && (__goscriptShadow4 as any).__isVarRef !== true && (__goscriptShadow4 as any).__goValue === undefined ? ((__goscriptShadow4 as any) as __goscript_cipher_suites.cipherSuiteTLS13).nextTrafficSecret((c$ as Conn).out.trafficSecret) : __goscript_cipher_suites.cipherSuiteTLS13.prototype.nextTrafficSecret.call(__goscriptShadow4, (c$ as Conn).out.trafficSecret))
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).setWriteTrafficSecret(__goscriptShadow4, 0, newSecret) : Conn.prototype.setWriteTrafficSecret.call(c, __goscriptShadow4, 0, newSecret))
		}

		let newSecret: $.Slice<number> = await (__goscriptShadow4 !== null && (__goscriptShadow4 as any).__isVarRef !== true && (__goscriptShadow4 as any).__goValue === undefined ? ((__goscriptShadow4 as any) as __goscript_cipher_suites.cipherSuiteTLS13).nextTrafficSecret((c$ as Conn)._in.trafficSecret) : __goscript_cipher_suites.cipherSuiteTLS13.prototype.nextTrafficSecret.call(__goscriptShadow4, (c$ as Conn)._in.trafficSecret))
		{
			let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).setReadTrafficSecret(__goscriptShadow4, 0, newSecret, (keyUpdate$ as __goscript_handshake_messages.keyUpdateMsg).updateRequested) : Conn.prototype.setReadTrafficSecret.call(c, __goscriptShadow4, 0, newSecret, (keyUpdate$ as __goscript_handshake_messages.keyUpdateMsg).updateRequested))
			if (err != null) {
				return err
			}
		}

		return null
	}

	public async handleNewSessionTicket(msg: __goscript_handshake_messages.newSessionTicketMsgTLS13 | $.VarRef<__goscript_handshake_messages.newSessionTicketMsgTLS13> | null): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		const msg$: __goscript_handshake_messages.newSessionTicketMsgTLS13 = msg == null ? $.pointerTarget<__goscript_handshake_messages.newSessionTicketMsgTLS13>(msg) : (msg as any).__isVarRef === true ? (msg as any).value : (msg as any).__goValue === undefined ? (msg as any) : $.pointerTarget<__goscript_handshake_messages.newSessionTicketMsgTLS13>(msg)
		if (!(c$ as Conn).isClient) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10))
			return errors.New("tls: received new session ticket from a client")
		}

		if ($.pointerValue<__goscript_common.Config>((c$ as Conn).config).SessionTicketsDisabled || ($.pointerValue<__goscript_common.Config>((c$ as Conn).config).ClientSessionCache == null)) {
			return null
		}

		if ((msg$ as __goscript_handshake_messages.newSessionTicketMsgTLS13).lifetime == 0) {
			return null
		}
		let lifetime = $.int64Mul($.int64((msg$ as __goscript_handshake_messages.newSessionTicketMsgTLS13).lifetime), 1000000000n)
		if (lifetime > 604800000000000n) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(47) : Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: received a session ticket with invalid lifetime")
		}
		// closeNotify is a special case in that it isn't an error.
		if ($.sliceLen((msg$ as __goscript_handshake_messages.newSessionTicketMsgTLS13).label) == 0) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(50) : Conn.prototype.sendAlert.call(c, 50))
			return errors.New("tls: received a session ticket with empty opaque ticket label")
		}

		if ((((c$ as Conn).quic != null) && ((msg$ as __goscript_handshake_messages.newSessionTicketMsgTLS13).maxEarlyData != 0)) && ((msg$ as __goscript_handshake_messages.newSessionTicketMsgTLS13).maxEarlyData != 0xffffffff)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(47) : Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: invalid early data for QUIC connection")
		}

		let __goscriptShadow5: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null = __goscript_cipher_suites.cipherSuiteTLS13ByID((c$ as Conn).cipherSuite)
		if ((__goscriptShadow5 == null) || ((c$ as Conn).resumptionSecret == null)) {
			return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(80) : Conn.prototype.sendAlert.call(c, 80))
		}

		let psk: $.Slice<number> = await tls13.ExpandLabel(__goscriptStatic0(), $.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>(__goscriptShadow5).hash), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm"), (c$ as Conn).resumptionSecret, "resumption", (msg$ as __goscript_handshake_messages.newSessionTicketMsgTLS13).nonce, crypto.Hash_Size($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>(__goscriptShadow5).hash))

		let session: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sessionState() : Conn.prototype.sessionState.call(c))
		let session$: __goscript_ticket.SessionState = session == null ? $.pointerTarget<__goscript_ticket.SessionState>(session) : (session as any).__isVarRef === true ? (session as any).value : (session as any).__goValue === undefined ? (session as any) : $.pointerTarget<__goscript_ticket.SessionState>(session);
		;(session$ as __goscript_ticket.SessionState).secret = psk;
		;(session$ as __goscript_ticket.SessionState).useBy = $.uint64($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await __goscript_common.Config.prototype.time.call((c$ as Conn).config)))).Add(lifetime))).Unix());
		;(session$ as __goscript_ticket.SessionState).ageAdd = (msg$ as __goscript_handshake_messages.newSessionTicketMsgTLS13).ageAdd;
		;(session$ as __goscript_ticket.SessionState).EarlyData = ((c$ as Conn).quic != null) && ((msg$ as __goscript_handshake_messages.newSessionTicketMsgTLS13).maxEarlyData == 0xffffffff);
		;(session$ as __goscript_ticket.SessionState).ticket = (msg$ as __goscript_handshake_messages.newSessionTicketMsgTLS13).label
		if (((c$ as Conn).quic != null) && $.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).enableSessionEvents) {
			void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).quicStoreSession(session) : Conn.prototype.quicStoreSession.call(c, session))
			return null
		}
		let cs: __goscript_ticket.ClientSessionState | $.VarRef<__goscript_ticket.ClientSessionState> | null = new __goscript_ticket.ClientSessionState({session: session})
		{
			let cacheKey = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).clientSessionCacheKey() : Conn.prototype.clientSessionCacheKey.call(c))
			if (!$.stringEqual(cacheKey, "")) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_common.ClientSessionCache, null>>($.pointerValue<__goscript_common.Config>((c$ as Conn).config).ClientSessionCache).Put(cacheKey, cs), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		return null
	}

	public async handlePostHandshakeMessage(): globalThis.Promise<$.GoError> {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		if ((c$ as Conn).vers != 772) {
			return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).handleRenegotiation() : Conn.prototype.handleRenegotiation.call(c))
		}

		let [msg, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).readHandshake(null) : Conn.prototype.readHandshake.call(c, null))
		if (err != null) {
			return err
		}
		;(c$ as Conn).retryCount++
		if ((c$ as Conn).retryCount > 16) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10))
			return (c$ as Conn)._in.setErrorLocked(errors.New("tls: too many non-advancing records"))
		}

		{
			const __goscriptTypeSwitchValue = msg
			switch (true) {
				case $.typeAssert<__goscript_handshake_messages.newSessionTicketMsgTLS13 | $.VarRef<__goscript_handshake_messages.newSessionTicketMsgTLS13> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("tls.newSessionTicketMsgTLS13")).ok:
					{
						let msg: __goscript_handshake_messages.newSessionTicketMsgTLS13 | $.VarRef<__goscript_handshake_messages.newSessionTicketMsgTLS13> | null = $.typeAssert<__goscript_handshake_messages.newSessionTicketMsgTLS13 | $.VarRef<__goscript_handshake_messages.newSessionTicketMsgTLS13> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("tls.newSessionTicketMsgTLS13")).value
						return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).handleNewSessionTicket(msg) : Conn.prototype.handleNewSessionTicket.call(c, msg))
					}
					break
				case $.typeAssert<__goscript_handshake_messages.keyUpdateMsg | $.VarRef<__goscript_handshake_messages.keyUpdateMsg> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("tls.keyUpdateMsg")).ok:
					{
						let msg: __goscript_handshake_messages.keyUpdateMsg | $.VarRef<__goscript_handshake_messages.keyUpdateMsg> | null = $.typeAssert<__goscript_handshake_messages.keyUpdateMsg | $.VarRef<__goscript_handshake_messages.keyUpdateMsg> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("tls.keyUpdateMsg")).value
						return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).handleKeyUpdate(msg) : Conn.prototype.handleKeyUpdate.call(c, msg))
					}
					break
			}
		}
		// The QUIC layer is supposed to treat an unexpected post-handshake CertificateRequest
		// as a QUIC-level PROTOCOL_VIOLATION error (RFC 9001, Section 4.4). Returning an
		// unexpected_message alert here doesn't provide it with enough information to distinguish
		// this condition from other unexpected messages. This is probably fine.
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10))
		return fmt.Errorf("tls: received unexpected handshake message of type %T", msg)
	}

	public async handleRenegotiation(): globalThis.Promise<$.GoError> {
		let c: Conn | $.VarRef<Conn> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		if ((c$ as Conn).vers == 772) {
			return errors.New("tls: internal error: unexpected renegotiation")
		}

		let [msg, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).readHandshake(null) : Conn.prototype.readHandshake.call(c, null))
		if (err != null) {
			return err
		}

		let __goscriptTuple7: any = $.typeAssertTuple<__goscript_handshake_messages.helloRequestMsg | $.VarRef<__goscript_handshake_messages.helloRequestMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.helloRequestMsg"))
		let helloReq: __goscript_handshake_messages.helloRequestMsg | $.VarRef<__goscript_handshake_messages.helloRequestMsg> | null = __goscriptTuple7[0]
		let ok = __goscriptTuple7[1]
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10))
			return __goscript_common.unexpectedMessageError($.interfaceValue(helloReq, "*tls.helloRequestMsg", /* @__PURE__ */ $.pointerType("tls.helloRequestMsg")), msg)
		}

		if (!(c$ as Conn).isClient) {
			return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(100) : Conn.prototype.sendAlert.call(c, 100))
		}

		switch ($.pointerValue<__goscript_common.Config>((c$ as Conn).config).Renegotiation) {
			case 0:
			{
				return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(100) : Conn.prototype.sendAlert.call(c, 100))
				break
			}
			case 1:
			{
				if ((c$ as Conn).handshakes > 1) {
					return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(100) : Conn.prototype.sendAlert.call(c, 100))
				}
				break
			}
			case 2:
			{
				break
			}
			default:
			{
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(80) : Conn.prototype.sendAlert.call(c, 80))
				return errors.New("tls: unknown Renegotiation value")
				break
			}
		}

		await (c$ as Conn).handshakeMutex.Lock()
		const __goscriptDeferCallee8 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Conn).handshakeMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee8() })

		void (c$ as Conn).isHandshakeComplete.Store(false)
		{
			;(c$ as Conn).handshakeErr = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).clientHandshake(context2.Background()) : Conn.prototype.clientHandshake.call(c, context2.Background()))
			if ((c$ as Conn).handshakeErr == null) {
				;(c$ as Conn).handshakes++
			}
		}
		return (c$ as Conn).handshakeErr
	}

	public async handshakeContext(ctx: context2.Context | null): globalThis.Promise<$.GoError> {
		let c: Conn | $.VarRef<Conn> | null = this;
		let ret: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		// Fast sync/atomic-based exit if there is no handshake in flight and the
		// last one succeeded without an error. Avoids the expensive context setup
		// and mutex for most Read and Write calls.
		if ((c$ as Conn).isHandshakeComplete.Load()) {
			return null
		}

		let [handshakeCtx, cancel] = context2.WithCancel($.pointerValueOrNil(ctx)!)
		// Note: defer this before calling context.AfterFunc
		// so that we can tell the difference between the input being canceled and
		// this cancellation. In the former case, we need to close the connection.
		const __goscriptDeferCallee9 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee9!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		if ((c$ as Conn).quic != null) {
			$.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).ctx = handshakeCtx
			$.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).cancel = cancel
		} else {
			if (((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context2.Context, null>) : $.pointerValue<Exclude<context2.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null) != null) {
				// Close the connection if ctx is canceled before the function returns.
				let stop: (() => boolean | globalThis.Promise<boolean>) | null = context2.AfterFunc($.pointerValueOrNil(ctx)!, $.functionValue(async (): globalThis.Promise<void> => {
					await $.pointerValue<Exclude<net.Conn, null>>((c$ as Conn).conn).Close()
				}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
				__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
					if (!(__goscriptAwait = stop!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						// Return context error to user.
						ret = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context2.Context, null>) : $.pointerValue<Exclude<context2.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				})() })
			}
		}

		await (c$ as Conn).handshakeMutex.Lock()
		const __goscriptDeferCallee10 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Conn).handshakeMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee10() })

		{
			let err = (c$ as Conn).handshakeErr
			if (err != null) {
				const __goscriptReturn11: $.GoError = err
				ret = __goscriptReturn11
				await __defer.dispose()
				return ret
			}
		}
		if ((c$ as Conn).isHandshakeComplete.Load()) {
			const __goscriptReturn12: $.GoError = null
			ret = __goscriptReturn12
			await __defer.dispose()
			return ret
		}

		await (c$ as Conn)._in.Mutex.Lock()
		const __goscriptDeferCallee11 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Conn)._in.Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee11() });

		;(c$ as Conn).handshakeErr = (__goscriptAwait = (c$ as Conn).handshakeFn!(handshakeCtx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((c$ as Conn).handshakeErr == null) {
			;(c$ as Conn).handshakes++
		} else {
			// If an error occurred during the handshake try to flush the
			// alert that might be left in the buffer.
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).flush() : Conn.prototype.flush.call(c))
		}

		if (((c$ as Conn).handshakeErr == null) && !(c$ as Conn).isHandshakeComplete.Load()) {
			;(c$ as Conn).handshakeErr = errors.New("tls: internal error: handshake should have had a result")
		}
		if (((c$ as Conn).handshakeErr != null) && (c$ as Conn).isHandshakeComplete.Load()) {
			$.panic("tls: internal error: handshake returned an error but is marked successful")
		}

		if ((c$ as Conn).quic != null) {
			if ((c$ as Conn).handshakeErr == null) {
				void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).quicHandshakeComplete() : Conn.prototype.quicHandshakeComplete.call(c))
				// Provide the 1-RTT read secret now that the handshake is complete.
				// The QUIC layer MUST NOT decrypt 1-RTT packets prior to completing
				// the handshake (RFC 9001, Section 5.7).
				{
					let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).quicSetReadSecret(3, (c$ as Conn).cipherSuite, (c$ as Conn)._in.trafficSecret) : Conn.prototype.quicSetReadSecret.call(c, 3, (c$ as Conn).cipherSuite, (c$ as Conn)._in.trafficSecret))
					if (err != null) {
						const __goscriptReturn13: $.GoError = err
						ret = __goscriptReturn13
						await __defer.dispose()
						return ret
					}
				}
			} else {
				await (c$ as Conn).out.Mutex.Lock()
				let __goscriptTuple8: any = errors.AsType(__goscriptStatic1(), $.pointerValueOrNil((c$ as Conn).out.err)!)
				let a = (__goscriptTuple8[0] as __goscript_alert.alert)
				let ok = __goscriptTuple8[1]
				if (!ok) {
					a = 80
				}
				void (c$ as Conn).out.Mutex.Unlock();
				// Return an error which wraps both the handshake error and
				// any alert error we may have sent, or alertInternalError
				// if we didn't send an alert.
				// Truncate the text of the alert to 0 characters.
				;(c$ as Conn).handshakeErr = fmt.Errorf("%w%.0w", ((c$ as Conn).handshakeErr as any), $.namedValueInterfaceValue<any>($.uint(a, 8), "tls.AlertError", __goscriptStatic2(), __goscriptStatic3(), __goscriptStatic4()))
			}
			$.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).blockedc!.close()
			$.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).signalc!.close()
		}

		const __goscriptReturn14: $.GoError = (c$ as Conn).handshakeErr
		ret = __goscriptReturn14
		await __defer.dispose()
		return ret
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async loadSession(hello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null): globalThis.Promise<[__goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null, tls13.EarlySecret | $.VarRef<tls13.EarlySecret> | null, $.Slice<number>, $.GoError]> {
		const c: Conn | $.VarRef<Conn> | null = this;
		let session: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null = null! as __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null
		let earlySecret: tls13.EarlySecret | $.VarRef<tls13.EarlySecret> | null = null! as tls13.EarlySecret | $.VarRef<tls13.EarlySecret> | null
		let binderKey: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		const hello$: __goscript_handshake_messages.clientHelloMsg = hello == null ? $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(hello) : (hello as any).__isVarRef === true ? (hello as any).value : (hello as any).__goValue === undefined ? (hello as any) : $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(hello)
		if ($.pointerValue<__goscript_common.Config>((c$ as Conn).config).SessionTicketsDisabled || ($.pointerValue<__goscript_common.Config>((c$ as Conn).config).ClientSessionCache == null)) {
			return [null, null, null, null]
		}

		let echInner = bytes.Equal((hello$ as __goscript_handshake_messages.clientHelloMsg).encryptedClientHello, new Uint8Array([1]) as $.Slice<number>);

		;(hello$ as __goscript_handshake_messages.clientHelloMsg).ticketSupported = true && !echInner

		if ($.arrayIndex((hello$ as __goscript_handshake_messages.clientHelloMsg).supportedVersions!, 0) == 772) {

			;(hello$ as __goscript_handshake_messages.clientHelloMsg).pskModes = new Uint8Array([1]) as $.Slice<number>
		}

		if ((c$ as Conn).handshakes != 0) {
			return [null, null, null, null]
		}

		let cacheKey = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).clientSessionCacheKey() : Conn.prototype.clientSessionCacheKey.call(c))
		if ($.stringEqual(cacheKey, "")) {
			return [null, null, null, null]
		}
		let __goscriptTuple9: any = await $.pointerValue<Exclude<__goscript_common.ClientSessionCache, null>>($.pointerValue<__goscript_common.Config>((c$ as Conn).config).ClientSessionCache).Get(cacheKey)
		let cs: __goscript_ticket.ClientSessionState | $.VarRef<__goscript_ticket.ClientSessionState> | null = __goscriptTuple9[0]
		let ok = __goscriptTuple9[1]
		if (!ok || (cs == null)) {
			return [null, null, null, null]
		}
		session = $.pointerValue<__goscript_ticket.ClientSessionState>(cs).session

		let versOk = false
		for (let __goscriptRangeTarget1 = (hello$ as __goscript_handshake_messages.clientHelloMsg).supportedVersions, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let v = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number), 16)
			if (v == $.pointerValue<__goscript_ticket.SessionState>(session).version) {
				versOk = true
				break
			}
		}
		if (!versOk) {
			return [null, null, null, null]
		}

		if ($.markAsStructValue($.cloneStructValue((await __goscript_common.Config.prototype.time.call((c$ as Conn).config)))).After($.markAsStructValue($.cloneStructValue($.pointerValue<x509.Certificate>($.arrayIndex($.pointerValue<__goscript_ticket.SessionState>(session).peerCertificates!, 0)).NotAfter)))) {

			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_common.ClientSessionCache, null>>($.pointerValue<__goscript_common.Config>((c$ as Conn).config).ClientSessionCache).Put(cacheKey, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [null, null, null, null]
		}
		if (!$.pointerValue<__goscript_common.Config>((c$ as Conn).config).InsecureSkipVerify) {
			if ($.sliceLen($.pointerValue<__goscript_ticket.SessionState>(session).verifiedChains) == 0) {

				return [null, null, null, null]
			}
			{
				let __goscriptShadow6 = x509.Certificate.prototype.VerifyHostname.call($.arrayIndex($.pointerValue<__goscript_ticket.SessionState>(session).peerCertificates!, 0), $.pointerValue<__goscript_common.Config>((c$ as Conn).config).ServerName)
				if (__goscriptShadow6 != null) {

					return [null, null, null, null]
				}
			}
			let opts = (await (async () => { const __goscriptLiteralField0 = await __goscript_common.Config.prototype.time.call((c$ as Conn).config); return new x509.VerifyOptions({CurrentTime: __goscriptLiteralField0, Roots: $.pointerValue<__goscript_common.Config>((c$ as Conn).config).RootCAs, KeyUsages: $.arrayToSlice<x509.ExtKeyUsage>([1])}, true) })())
			if (!await __goscript_common.anyValidVerifiedChain($.pointerValue<__goscript_ticket.SessionState>(session).verifiedChains, (opts).clone())) {

				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_common.ClientSessionCache, null>>($.pointerValue<__goscript_common.Config>((c$ as Conn).config).ClientSessionCache).Put(cacheKey, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [null, null, null, null]
			}
		}

		if ($.pointerValue<__goscript_ticket.SessionState>(session).version != 772) {

			if (__goscript_cipher_suites.mutualCipherSuite((hello$ as __goscript_handshake_messages.clientHelloMsg).cipherSuites, $.pointerValue<__goscript_ticket.SessionState>(session).cipherSuite) == null) {
				return [null, null, null, null]
			}
			// if n < 0 { n = 0 }

			if (!$.pointerValue<__goscript_ticket.SessionState>(session).extMasterSecret && fips140tls.Required()) {
				if (!$.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(__goscript_handshake_client.fips140ems)), "0")) {
					return [null, null, null, null]
				}
				godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(__goscript_handshake_client.fips140ems))
			}

			;(hello$ as __goscript_handshake_messages.clientHelloMsg).sessionTicket = $.pointerValue<__goscript_ticket.SessionState>(session).ticket
			return [session, earlySecret, binderKey, err]
		}

		if ($.markAsStructValue($.cloneStructValue((await __goscript_common.Config.prototype.time.call((c$ as Conn).config)))).After($.markAsStructValue($.cloneStructValue(time.Unix($.int64($.pointerValue<__goscript_ticket.SessionState>(session).useBy), 0n))))) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_common.ClientSessionCache, null>>($.pointerValue<__goscript_common.Config>((c$ as Conn).config).ClientSessionCache).Put(cacheKey, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [null, null, null, null]
		}

		let __goscriptShadow7: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null = __goscript_cipher_suites.cipherSuiteTLS13ByID($.pointerValue<__goscript_ticket.SessionState>(session).cipherSuite)
		if (__goscriptShadow7 == null) {
			return [null, null, null, null]
		}
		let cipherSuiteOk = false
		for (let __goscriptRangeTarget2 = (hello$ as __goscript_handshake_messages.clientHelloMsg).cipherSuites, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let offeredID = $.uint((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as number), 16)
			let offeredSuite: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null = __goscript_cipher_suites.cipherSuiteTLS13ByID(offeredID)
			if ((offeredSuite != null) && ($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>(offeredSuite).hash == $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>(__goscriptShadow7).hash)) {
				cipherSuiteOk = true
				break
			}
		}
		if (!cipherSuiteOk) {
			return [null, null, null, null]
		}

		if ((c$ as Conn).quic != null) {
			if ($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).enableSessionEvents) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).quicResumeSession(session) : Conn.prototype.quicResumeSession.call(c, session))
			}

			if ($.pointerValue<__goscript_ticket.SessionState>(session).EarlyData && (__goscript_cipher_suites.mutualCipherSuiteTLS13((hello$ as __goscript_handshake_messages.clientHelloMsg).cipherSuites, $.pointerValue<__goscript_ticket.SessionState>(session).cipherSuite) != null)) {
				for (let __goscriptRangeTarget3 = (hello$ as __goscript_handshake_messages.clientHelloMsg).alpnProtocols, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
					let alpn = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
					if ($.stringEqual(alpn, $.pointerValue<__goscript_ticket.SessionState>(session).alpnProtocol)) {
						;(hello$ as __goscript_handshake_messages.clientHelloMsg).earlyData = true
						break
					}
				}
			}
		}

		let ticketAge = $.markAsStructValue($.cloneStructValue((await __goscript_common.Config.prototype.time.call((c$ as Conn).config)))).Sub($.markAsStructValue($.cloneStructValue(time.Unix($.int64($.pointerValue<__goscript_ticket.SessionState>(session).createdAt), 0n))))
		let identity = new __goscript_common.pskIdentity({label: $.pointerValue<__goscript_ticket.SessionState>(session).ticket, obfuscatedTicketAge: $.uint((($.uint($.int64Div(ticketAge, 1000000n), 32) + $.pointerValue<__goscript_ticket.SessionState>(session).ageAdd) >>> 0), 32)}, true);
		;(hello$ as __goscript_handshake_messages.clientHelloMsg).pskIdentities = $.arrayToSlice<__goscript_common.pskIdentity>([(identity).clone()]);
		;(hello$ as __goscript_handshake_messages.clientHelloMsg).pskBinders = $.arrayToSlice<$.Slice<number>>([$.makeSlice<number>(crypto.Hash_Size($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>(__goscriptShadow7).hash), undefined, "byte")])

		earlySecret = await tls13.NewEarlySecret(__goscriptStatic0(), $.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>(__goscriptShadow7).hash), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm"), $.pointerValue<__goscript_ticket.SessionState>(session).secret)
		binderKey = await (earlySecret !== null && (earlySecret as any).__isVarRef !== true && (earlySecret as any).__goValue === undefined ? ((earlySecret as any) as tls13.EarlySecret).ResumptionBinderKey() : tls13.EarlySecret.prototype.ResumptionBinderKey.call(earlySecret))
		let transcript = await crypto.Hash_New($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>(__goscriptShadow7).hash)
		{
			let __goscriptShadow8 = await __goscript_handshake_client.computeAndUpdatePSK(hello, binderKey, transcript, $.functionValue(((__receiver) => (baseKey: $.Slice<number>, transcript: hash.Hash | null) => __receiver.finishedHash(baseKey, transcript))($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>(__goscriptShadow7)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "hash.Hash"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo), "crypto/tls.(*cipherSuiteTLS13).finishedHash-fm"))
			if (__goscriptShadow8 != null) {
				return [null, null, null, __goscriptShadow8]
			}
		}

		return [session, earlySecret, binderKey, err]
	}

	public async makeClientHello(): globalThis.Promise<[__goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, __goscript_key_schedule.keySharePrivateKeys | $.VarRef<__goscript_key_schedule.keySharePrivateKeys> | null, __goscript_handshake_client.echClientContext | $.VarRef<__goscript_handshake_client.echClientContext> | null, $.GoError]> {
		const c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		let config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null = (c$ as Conn).config
		let config$: __goscript_common.Config = config == null ? $.pointerTarget<__goscript_common.Config>(config) : (config as any).__isVarRef === true ? (config as any).value : (config as any).__goValue === undefined ? (config as any) : $.pointerTarget<__goscript_common.Config>(config)
		if (($.stringLen((config$ as __goscript_common.Config).ServerName) == 0) && !(config$ as __goscript_common.Config).InsecureSkipVerify) {
			return [null, null, null, errors.New("tls: either ServerName or InsecureSkipVerify must be specified in the tls.Config")]
		}
		// whether this connection was a session resumption
		let nextProtosLength = 0
		for (let __goscriptRangeTarget4 = (config$ as __goscript_common.Config).NextProtos, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let proto = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as string)
			{
				let l = $.stringLen(proto)
				if ((l == 0) || (l > 255)) {
					return [null, null, null, errors.New("tls: invalid NextProtos value")]
				} else {
					nextProtosLength = nextProtosLength + (1 + l)
				}
			}
		}
		if (nextProtosLength > 0xffff) {
			return [null, null, null, errors.New("tls: NextProtos values too large")]
		}
		// serverName contains the server name indicated by the client, if any.
		let supportedVersions: $.Slice<number> = (config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as __goscript_common.Config).supportedVersions(true, (c$ as Conn).quic != null) : __goscript_common.Config.prototype.supportedVersions.call(config, true, (c$ as Conn).quic != null))
		if ($.sliceLen(supportedVersions) == 0) {
			return [null, null, null, errors.New("tls: no supported versions satisfy MinVersion and MaxVersion")]
		}

		// ekm is a closure for exporting keying material.
		let maxVersion = $.arrayIndex(supportedVersions!, 0)
		let minVersion = $.arrayIndex(supportedVersions!, $.sliceLen(supportedVersions) - 1)

		let hello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null = (() => { const __goscriptLiteralField1 = __goscript_handshake_client.hostnameInSNI((config$ as __goscript_common.Config).ServerName); const __goscriptLiteralField2 = (config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as __goscript_common.Config).curvePreferences(maxVersion) : __goscript_common.Config.prototype.curvePreferences.call(config, maxVersion)); return new __goscript_handshake_messages.clientHelloMsg({vers: maxVersion, compressionMethods: new Uint8Array([0]) as $.Slice<number>, random: $.makeSlice<number>(32, undefined, "byte"), extendedMasterSecret: true, ocspStapling: true, scts: true, serverName: __goscriptLiteralField1, supportedCurves: __goscriptLiteralField2, supportedPoints: new Uint8Array([0]) as $.Slice<number>, secureRenegotiationSupported: true, alpnProtocols: (config$ as __goscript_common.Config).NextProtos, supportedVersions: supportedVersions}) })()
		let hello$: __goscript_handshake_messages.clientHelloMsg = hello == null ? $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(hello) : (hello as any).__isVarRef === true ? (hello as any).value : (hello as any).__goValue === undefined ? (hello as any) : $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(hello)
		// closeNotifyErr is any error from sending the alertCloseNotify record.

		// closeNotifySent is true if the Conn attempted to send an
		// alertCloseNotify record.
		if ((hello$ as __goscript_handshake_messages.clientHelloMsg).vers > 771) {
			;(hello$ as __goscript_handshake_messages.clientHelloMsg).vers = 771
		}

		if ((c$ as Conn).handshakes > 0) {
			;(hello$ as __goscript_handshake_messages.clientHelloMsg).secureRenegotiation = $.goSlice((c$ as Conn).clientFinished, undefined, undefined)
		}

		;(hello$ as __goscript_handshake_messages.clientHelloMsg).cipherSuites = (config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as __goscript_common.Config).cipherSuites(__goscript_cipher_suites.hasAESGCMHardwareSupport) : __goscript_common.Config.prototype.cipherSuites.call(config, __goscript_cipher_suites.hasAESGCMHardwareSupport))
		// clientProtocol is the negotiated ALPN protocol.
		if (maxVersion < 771) {
			;(hello$ as __goscript_handshake_messages.clientHelloMsg).cipherSuites = (slices.DeleteFunc((hello$ as __goscript_handshake_messages.clientHelloMsg).cipherSuites, $.functionValue((id: number): boolean => {
				return ($.pointerValue<__goscript_cipher_suites.cipherSuite>(__goscript_cipher_suites.cipherSuiteByID(id)).flags & 4) != 0
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint16")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))) as $.Slice<number>)
		}
		// application data waiting to be read, from rawInput.Next
		let [, err] = await io.ReadFull($.pointerValueOrNil((config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as __goscript_common.Config).rand() : __goscript_common.Config.prototype.rand.call(config)))!, (hello$ as __goscript_handshake_messages.clientHelloMsg).random)
		if (err != null) {
			return [null, null, null, errors.New($.concatString("tls: short read from Rand: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
		}
		// bytesSent counts the bytes of application data sent.
		// packetsSent counts packets.

		if ((c$ as Conn).quic == null) {
			;(hello$ as __goscript_handshake_messages.clientHelloMsg).sessionId = $.makeSlice<number>(32, undefined, "byte")
			{
				let [, __goscriptShadow9] = await io.ReadFull($.pointerValueOrNil((config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as __goscript_common.Config).rand() : __goscript_common.Config.prototype.rand.call(config)))!, (hello$ as __goscript_handshake_messages.clientHelloMsg).sessionId)
				if (__goscriptShadow9 != null) {
					return [null, null, null, errors.New($.concatString("tls: short read from Rand: ", (__goscriptAwait = (__goscriptShadow9 !== null && (__goscriptShadow9 as any).__isVarRef !== true && (__goscriptShadow9 as any).__goValue === undefined ? (__goscriptShadow9 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow9)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
				}
			}
		}

		if (maxVersion >= 771) {
			;(hello$ as __goscript_handshake_messages.clientHelloMsg).supportedSignatureAlgorithms = __goscript_common.supportedSignatureAlgorithms(minVersion, maxVersion);
			;(hello$ as __goscript_handshake_messages.clientHelloMsg).supportedSignatureAlgorithmsCert = __goscript_common.supportedSignatureAlgorithmsCert(minVersion, maxVersion)
		}

		let keyShareKeys: __goscript_key_schedule.keySharePrivateKeys | $.VarRef<__goscript_key_schedule.keySharePrivateKeys> | null = null! as __goscript_key_schedule.keySharePrivateKeys | $.VarRef<__goscript_key_schedule.keySharePrivateKeys> | null
		if (maxVersion >= 772) {

			if (minVersion >= 772) {
				;(hello$ as __goscript_handshake_messages.clientHelloMsg).cipherSuites = null
			}

			if (fips140tls.Required()) {
				;(hello$ as __goscript_handshake_messages.clientHelloMsg).cipherSuites = $.appendSlice((hello$ as __goscript_handshake_messages.clientHelloMsg).cipherSuites, __goscript_defaults_fips140.__goscript_get_allowedCipherSuitesTLS13FIPS())
			} else {
				if (__goscript_cipher_suites.hasAESGCMHardwareSupport) {
					;(hello$ as __goscript_handshake_messages.clientHelloMsg).cipherSuites = $.appendSlice((hello$ as __goscript_handshake_messages.clientHelloMsg).cipherSuites, __goscript_defaults.__goscript_get_defaultCipherSuitesTLS13())
				} else {
					;(hello$ as __goscript_handshake_messages.clientHelloMsg).cipherSuites = $.appendSlice((hello$ as __goscript_handshake_messages.clientHelloMsg).cipherSuites, __goscript_defaults.__goscript_get_defaultCipherSuitesTLS13NoAES())
				}
			}

			if ($.sliceLen((hello$ as __goscript_handshake_messages.clientHelloMsg).supportedCurves) == 0) {
				return [null, null, null, errors.New("tls: no supported key exchange methods (CurveIDs)")]
			}

			let curveID = $.arrayIndex((hello$ as __goscript_handshake_messages.clientHelloMsg).supportedCurves!, 0)
			let [ke, __goscriptShadow10] = __goscript_key_schedule.keyExchangeForCurveID(curveID)
			if (__goscriptShadow10 != null) {
				return [null, null, null, errors.New("tls: internal error: supportsCurve accepted unimplemented curve")]
			}
			let __goscriptTuple10: any = await (ke !== null && (ke as any).__isVarRef !== true && (ke as any).__goValue === undefined ? (ke as Exclude<__goscript_key_schedule.keyExchange, null>) : $.pointerValue<Exclude<__goscript_key_schedule.keyExchange, null>>(ke)).keyShares((config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as __goscript_common.Config).rand() : __goscript_common.Config.prototype.rand.call(config)))
			keyShareKeys = __goscriptTuple10[0];
			;(hello$ as __goscript_handshake_messages.clientHelloMsg).keyShares = __goscriptTuple10[1]
			__goscriptShadow10 = __goscriptTuple10[2]
			if (__goscriptShadow10 != null) {
				return [null, null, null, __goscriptShadow10]
			}

			if (($.sliceLen((hello$ as __goscript_handshake_messages.clientHelloMsg).keyShares) == 2) && !slices.Contains((hello$ as __goscript_handshake_messages.clientHelloMsg).supportedCurves, $.arrayIndex((hello$ as __goscript_handshake_messages.clientHelloMsg).keyShares!, 1).group)) {
				;(hello$ as __goscript_handshake_messages.clientHelloMsg).keyShares = $.goSlice((hello$ as __goscript_handshake_messages.clientHelloMsg).keyShares, undefined, 1)
			}
		}

		if ((c$ as Conn).quic != null) {
			let __goscriptTuple11: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).quicGetTransportParameters() : Conn.prototype.quicGetTransportParameters.call(c))
			let p: $.Slice<number> = __goscriptTuple11[0]
			let __goscriptShadow11 = __goscriptTuple11[1]
			if (__goscriptShadow11 != null) {
				return [null, null, null, __goscriptShadow11]
			}
			if (p == null) {
				p = new Uint8Array([]) as $.Slice<number>
			}
			;(hello$ as __goscript_handshake_messages.clientHelloMsg).quicTransportParameters = p
		}
		// protocol version
		let ech: __goscript_handshake_client.echClientContext | $.VarRef<__goscript_handshake_client.echClientContext> | null = null! as __goscript_handshake_client.echClientContext | $.VarRef<__goscript_handshake_client.echClientContext> | null
		if ($.pointerValue<__goscript_common.Config>((c$ as Conn).config).EncryptedClientHelloConfigList != null) {
			if (($.pointerValue<__goscript_common.Config>((c$ as Conn).config).MinVersion != 0) && ($.pointerValue<__goscript_common.Config>((c$ as Conn).config).MinVersion < 772)) {
				return [null, null, null, errors.New("tls: MinVersion must be >= VersionTLS13 if EncryptedClientHelloConfigList is populated")]
			}
			if (($.pointerValue<__goscript_common.Config>((c$ as Conn).config).MaxVersion != 0) && ($.pointerValue<__goscript_common.Config>((c$ as Conn).config).MaxVersion <= 771)) {
				return [null, null, null, errors.New("tls: MaxVersion must be >= VersionTLS13 if EncryptedClientHelloConfigList is populated")]
			}
			let __goscriptTuple12: any = __goscript_ech.parseECHConfigList($.pointerValue<__goscript_common.Config>((c$ as Conn).config).EncryptedClientHelloConfigList)
			let echConfigs: $.Slice<__goscript_ech.echConfig> = __goscriptTuple12[0]
			let __goscriptShadow12 = __goscriptTuple12[1]
			if (__goscriptShadow12 != null) {
				return [null, null, null, __goscriptShadow12]
			}
			let __goscriptTuple13: any = await __goscript_ech.pickECHConfig(echConfigs)
			let __goscriptShadow13: __goscript_ech.echConfig | $.VarRef<__goscript_ech.echConfig> | null = __goscriptTuple13[0]
			let echPK = __goscriptTuple13[1]
			let kdf = __goscriptTuple13[2]
			let __goscriptShadow14 = __goscriptTuple13[3]
			if (__goscriptShadow13 == null) {
				return [null, null, null, errors.New("tls: EncryptedClientHelloConfigList contains no valid configs")]
			}
			ech = (await (async () => { const __goscriptLiteralField3 = (__goscriptAwait = (kdf !== null && (kdf as any).__isVarRef !== true && (kdf as any).__goValue === undefined ? (kdf as Exclude<hpke.KDF, null>) : $.pointerValue<Exclude<hpke.KDF, null>>(kdf)).ID(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField4 = (__goscriptAwait = (__goscriptShadow14 !== null && (__goscriptShadow14 as any).__isVarRef !== true && (__goscriptShadow14 as any).__goValue === undefined ? (__goscriptShadow14 as Exclude<hpke.AEAD, null>) : $.pointerValue<Exclude<hpke.AEAD, null>>(__goscriptShadow14)).ID(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_handshake_client.echClientContext({config: __goscriptShadow13, kdfID: __goscriptLiteralField3, aeadID: __goscriptLiteralField4}) })());
			;(hello$ as __goscript_handshake_messages.clientHelloMsg).encryptedClientHello = new Uint8Array([1]) as $.Slice<number>;

			;(hello$ as __goscript_handshake_messages.clientHelloMsg).supportedPoints = null;
			;(hello$ as __goscript_handshake_messages.clientHelloMsg).ticketSupported = false;
			;(hello$ as __goscript_handshake_messages.clientHelloMsg).secureRenegotiationSupported = false;
			;(hello$ as __goscript_handshake_messages.clientHelloMsg).extendedMasterSecret = false

			let info: $.Slice<number> = $.appendSlice(new Uint8Array([116, 108, 115, 32, 101, 99, 104, 0]), $.pointerValue<__goscript_ech.echConfig>($.pointerValue<__goscript_handshake_client.echClientContext>(ech).config).raw, $.byteSliceHint)
			let __goscriptTuple14: any = await hpke.NewSender(echPK, kdf, __goscriptShadow14, info)
			$.pointerValue<__goscript_handshake_client.echClientContext>(ech).encapsulatedKey = __goscriptTuple14[0]
			$.pointerValue<__goscript_handshake_client.echClientContext>(ech).hpkeContext = __goscriptTuple14[1]
			__goscriptShadow12 = __goscriptTuple14[2]
			if (__goscriptShadow12 != null) {
				return [null, null, null, __goscriptShadow12]
			}
		}

		return [hello, keyShareKeys, ech, null]
	}

	public async maxPayloadSizeForWrite(typ: __goscript_common.recordType): globalThis.Promise<number> {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		if ($.pointerValue<__goscript_common.Config>((c$ as Conn).config).DynamicRecordSizingDisabled || (typ != 23)) {
			return 16384
		}

		if ((c$ as Conn).bytesSent >= 131072n) {
			return 16384
		}

		// Subtract TLS overheads to get the maximum payload size.
		let payloadBytes = (1208 - 5) - await (c$ as Conn).out.explicitNonceLen()
		if ((c$ as Conn).out.cipher != null) {
			{
				const __goscriptTypeSwitchValue = (c$ as Conn).out.cipher
				switch (true) {
					case $.typeAssert<cipher2.Stream | null>(__goscriptTypeSwitchValue, "cipher.Stream").ok:
						{
							let ciph: cipher2.Stream | null = $.typeAssert<cipher2.Stream | null>(__goscriptTypeSwitchValue, "cipher.Stream").value
							payloadBytes = payloadBytes - ((__goscriptAwait = $.pointerValue<Exclude<hash.Hash, null>>((c$ as Conn).out.mac).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
						}
						break
					case $.typeAssert<cipher2.AEAD | null>(__goscriptTypeSwitchValue, "cipher.AEAD").ok:
						{
							let ciph: cipher2.AEAD | null = $.typeAssert<cipher2.AEAD | null>(__goscriptTypeSwitchValue, "cipher.AEAD").value
							payloadBytes = payloadBytes - ((__goscriptAwait = (ciph !== null && (ciph as any).__isVarRef !== true && (ciph as any).__goValue === undefined ? (ciph as Exclude<cipher2.AEAD, null>) : $.pointerValue<Exclude<cipher2.AEAD, null>>(ciph)).Overhead(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
						}
						break
					case $.typeAssert<cbcMode | null>(__goscriptTypeSwitchValue, "tls.cbcMode").ok:
						{
							let ciph: cbcMode | null = $.typeAssert<cbcMode | null>(__goscriptTypeSwitchValue, "tls.cbcMode").value
							let blockSize = (__goscriptAwait = (ciph !== null && (ciph as any).__isVarRef !== true && (ciph as any).__goValue === undefined ? (ciph as Exclude<cbcMode, null>) : $.pointerValue<Exclude<cbcMode, null>>(ciph)).BlockSize(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							// The payload must fit in a multiple of blockSize, with
							// room for at least one padding byte.
							payloadBytes = (payloadBytes & globalThis.Number($.int64Xor((blockSize - 1), -1n))) - 1
							// The MAC is appended before padding so affects the
							// payload size directly.
							payloadBytes = payloadBytes - ((__goscriptAwait = $.pointerValue<Exclude<hash.Hash, null>>((c$ as Conn).out.mac).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
						}
						break
					default:
						{
							let ciph: any = __goscriptTypeSwitchValue
							$.panic("unknown cipher type")
						}
						break
				}
			}
		}
		if ((c$ as Conn).vers == 772) {
			payloadBytes--
		}

		// Allow packet growth in arithmetic progression up to max.
		let pkt = (c$ as Conn).packetsSent;
		;(c$ as Conn).packetsSent++
		if (pkt > 1000n) {
			return 16384
		}

		let n = payloadBytes * $.int($.int64Add(pkt, 1n))
		if (n > 16384) {
			n = 16384
		}
		return n
	}

	public newRecordHeaderError(conn: net.Conn | null, msg: string): RecordHeaderError {
		const c: Conn | $.VarRef<Conn> | null = this;
		let err: RecordHeaderError = new RecordHeaderError(undefined, true)
		err.Msg = msg
		err.Conn = conn
		$.copy($.goSlice(err.RecordHeader, undefined, undefined), $.pointerValue<Conn>(c).rawInput.Bytes())
		return (err).clone()
	}

	public async pickTLSVersion(serverHello: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null): globalThis.Promise<$.GoError> {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		const serverHello$: __goscript_handshake_messages.serverHelloMsg = serverHello == null ? $.pointerTarget<__goscript_handshake_messages.serverHelloMsg>(serverHello) : (serverHello as any).__isVarRef === true ? (serverHello as any).value : (serverHello as any).__goValue === undefined ? (serverHello as any) : $.pointerTarget<__goscript_handshake_messages.serverHelloMsg>(serverHello)
		let peerVersion = (serverHello$ as __goscript_handshake_messages.serverHelloMsg).vers
		if ((serverHello$ as __goscript_handshake_messages.serverHelloMsg).supportedVersion != 0) {
			peerVersion = (serverHello$ as __goscript_handshake_messages.serverHelloMsg).supportedVersion
		}

		let [vers, ok] = __goscript_common.Config.prototype.mutualVersion.call((c$ as Conn).config, true, (c$ as Conn).quic != null, $.arrayToSlice<number>([peerVersion]))
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(70) : Conn.prototype.sendAlert.call(c, 70))
			return fmt.Errorf("tls: server selected unsupported protocol version %x", $.basicInterfaceValue(peerVersion, "uint16"))
		}

		;(c$ as Conn).vers = vers;
		;(c$ as Conn).haveVers = true;
		;(c$ as Conn)._in.version = vers;
		;(c$ as Conn).out.version = vers

		return null
	}

	public async processCertsFromClient(certificate: __goscript_common.Certificate): globalThis.Promise<$.GoError> {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		let certificates: $.Slice<$.Slice<number>> = certificate.Certificate
		let certs: $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null> = $.makeSlice<x509.Certificate | $.VarRef<x509.Certificate> | null>($.sliceLen(certificates))
		let err: $.GoError = null! as $.GoError
		for (let __goscriptRangeTarget5 = certificates, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
			let asn1Data = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as $.Slice<number>)
			{
				let __goscriptTuple15: any = await x509.ParseCertificate(asn1Data)
				$.sliceElems(certs!)[$.sliceSlot(certs!, i)] = __goscriptTuple15[0]
				err = __goscriptTuple15[1]
				if (err != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(50) : Conn.prototype.sendAlert.call(c, 50))
					return errors.New($.concatString("tls: failed to parse client certificate: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
				}
			}
			if ($.pointerValue<x509.Certificate>($.arrayIndex(certs!, i)).PublicKeyAlgorithm == 1) {
				let n = big.Int.prototype.BitLen.call($.pointerValue<rsa.PublicKey>($.mustTypeAssert<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>($.pointerValue<x509.Certificate>($.arrayIndex(certs!, i)).PublicKey, /* @__PURE__ */ $.pointerType("rsa.PublicKey"))).N)
				{
					let [max, ok] = __goscript_handshake_client.checkKeySize(n)
					if (!ok) {
						await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(42) : Conn.prototype.sendAlert.call(c, 42))
						return fmt.Errorf("tls: client sent certificate containing RSA key larger than %d bits", $.basicInterfaceValue(max, "int"))
					}
				}
			}
		}

		if (($.sliceLen(certs) == 0) && __goscript_common.requiresClientCert($.pointerValue<__goscript_common.Config>((c$ as Conn).config).ClientAuth)) {
			if ((c$ as Conn).vers == 772) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(116) : Conn.prototype.sendAlert.call(c, 116))
			} else {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(40) : Conn.prototype.sendAlert.call(c, 40))
			}
			return errors.New("tls: client didn't provide a certificate")
		}

		if (($.pointerValue<__goscript_common.Config>((c$ as Conn).config).ClientAuth >= 3) && ($.sliceLen(certs) > 0)) {
			let opts = (await (async () => { const __goscriptLiteralField5 = await __goscript_common.Config.prototype.time.call((c$ as Conn).config); const __goscriptLiteralField6 = x509.NewCertPool(); return new x509.VerifyOptions({Roots: $.pointerValue<__goscript_common.Config>((c$ as Conn).config).ClientCAs, CurrentTime: __goscriptLiteralField5, Intermediates: __goscriptLiteralField6, KeyUsages: $.arrayToSlice<x509.ExtKeyUsage>([2])}, true) })())

			for (let __goscriptRangeTarget6 = $.goSlice(certs, 1, undefined), __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
				let cert = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as x509.Certificate | $.VarRef<x509.Certificate> | null)
				await x509.CertPool.prototype.AddCert.call(opts.Intermediates, cert)
			}

			let __goscriptTuple16: any = await x509.Certificate.prototype.Verify.call($.arrayIndex(certs!, 0), (opts).clone())
			let chains: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>> = __goscriptTuple16[0]
			let __goscriptShadow15 = __goscriptTuple16[1]
			if (__goscriptShadow15 != null) {
				{
					let [, ok] = errors.AsType(__goscriptStatic5(), $.pointerValueOrNil(__goscriptShadow15)!)
					if (ok) {
						await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(48) : Conn.prototype.sendAlert.call(c, 48))
					} else {
						{
							let __goscriptTuple17: any = errors.AsType(__goscriptStatic6(), $.pointerValueOrNil(__goscriptShadow15)!)
							let errCertificateInvalid = (__goscriptTuple17[0] as x509.CertificateInvalidError)
							let __goscriptShadow16 = __goscriptTuple17[1]
							if (__goscriptShadow16 && (errCertificateInvalid.Reason == 1)) {
								await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(45) : Conn.prototype.sendAlert.call(c, 45))
							} else {
								await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(42) : Conn.prototype.sendAlert.call(c, 42))
							}
						}
					}
				}
				return $.interfaceValue<$.GoError>(new __goscript_common.CertificateVerificationError({UnverifiedCertificates: certs, Err: __goscriptShadow15}), "*tls.CertificateVerificationError", /* @__PURE__ */ $.pointerType("tls.CertificateVerificationError"))
			}

			let __goscriptTuple18: any = await __goscript_common.fipsAllowedChains(chains);
			;(c$ as Conn).verifiedChains = __goscriptTuple18[0]
			__goscriptShadow15 = __goscriptTuple18[1]
			if (__goscriptShadow15 != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(42) : Conn.prototype.sendAlert.call(c, 42))
				return $.interfaceValue<$.GoError>(new __goscript_common.CertificateVerificationError({UnverifiedCertificates: certs, Err: __goscriptShadow15}), "*tls.CertificateVerificationError", /* @__PURE__ */ $.pointerType("tls.CertificateVerificationError"))
			}
		}

		;(c$ as Conn).peerCertificates = certs;
		;(c$ as Conn).ocspResponse = certificate.OCSPStaple;
		;(c$ as Conn).scts = certificate.SignedCertificateTimestamps

		if ($.sliceLen(certs) > 0) {
			{
				const __goscriptTypeSwitchValue = $.pointerValue<x509.Certificate>($.arrayIndex(certs!, 0)).PublicKey
				switch (true) {
					case $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PublicKey")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey")):
						{
						}
						break
					case $.typeAssert<mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mldsa.PublicKey")).ok:
						{
							if ((c$ as Conn).vers < 772) {
								await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(47) : Conn.prototype.sendAlert.call(c, 47))
								return errors.New("tls: client certificate uses ML-DSA, which requires TLS 1.3")
							}
						}
						break
					default:
						{
							await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(43) : Conn.prototype.sendAlert.call(c, 43))
							return fmt.Errorf("tls: client certificate contains an unsupported public key of type %T", $.pointerValue<x509.Certificate>($.arrayIndex(certs!, 0)).PublicKey)
						}
						break
				}
			}
		}

		if ($.pointerValue<__goscript_common.Config>((c$ as Conn).config).VerifyPeerCertificate != null) {
			{
				let __goscriptShadow17 = (__goscriptAwait = $.pointerValue<__goscript_common.Config>((c$ as Conn).config).VerifyPeerCertificate!(certificates, (c$ as Conn).verifiedChains), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow17 != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(42) : Conn.prototype.sendAlert.call(c, 42))
					return __goscriptShadow17
				}
			}
		}

		return null
	}

	public async processECHClientHello(outer: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, echKeys: $.Slice<__goscript_common.EncryptedClientHelloKey>): globalThis.Promise<[__goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, __goscript_handshake_server_tls13.echServerContext | $.VarRef<__goscript_handshake_server_tls13.echServerContext> | null, $.GoError]> {
		let c: Conn | $.VarRef<Conn> | null = this;
		const outer$: __goscript_handshake_messages.clientHelloMsg = outer == null ? $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(outer) : (outer as any).__isVarRef === true ? (outer as any).value : (outer as any).__goValue === undefined ? (outer as any) : $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(outer)
		let __goscriptTuple19: any = __goscript_ech.parseECHExt((outer$ as __goscript_handshake_messages.clientHelloMsg).encryptedClientHello)
		let echType = __goscriptTuple19[0]
		let echCiphersuite = __goscriptTuple19[1]
		let configID = __goscriptTuple19[2]
		let encap: $.Slice<number> = __goscriptTuple19[3]
		let payload: $.Slice<number> = __goscriptTuple19[4]
		let err = __goscriptTuple19[5]
		if (err != null) {
			if (errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(__goscript_ech.errInvalidECHExt)!)) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(47) : Conn.prototype.sendAlert.call(c, 47))
			} else {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(50) : Conn.prototype.sendAlert.call(c, 50))
			}

			return [null, null, __goscript_ech.errInvalidECHExt]
		}

		if (echType == 1) {
			return [outer, new __goscript_handshake_server_tls13.echServerContext({inner: true}), null]
		}

		if ($.sliceLen(echKeys) == 0) {
			return [outer, null, null]
		}

		for (let __goscriptRangeTarget7 = echKeys, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let echKey = ((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as __goscript_common.EncryptedClientHelloKey)).clone()
			let [skip, config, __goscriptShadow18] = __goscript_ech.parseECHConfig(echKey.Config)
			if (__goscriptShadow18 != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(80) : Conn.prototype.sendAlert.call(c, 80))
				return [null, null, fmt.Errorf("tls: invalid EncryptedClientHelloKey Config: %s", (__goscriptShadow18 as any))]
			}
			if (skip) {
				continue
			}
			let __goscriptTuple20: any = hpke.NewKEM(config.KemID)
			let kem = __goscriptTuple20[0]
			__goscriptShadow18 = __goscriptTuple20[1]
			if (__goscriptShadow18 != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(80) : Conn.prototype.sendAlert.call(c, 80))
				return [null, null, fmt.Errorf("tls: invalid EncryptedClientHelloKey Config KEM: %s", (__goscriptShadow18 as any))]
			}
			let __goscriptTuple21: any = await (kem !== null && (kem as any).__isVarRef !== true && (kem as any).__goValue === undefined ? (kem as Exclude<hpke.KEM, null>) : $.pointerValue<Exclude<hpke.KEM, null>>(kem)).NewPrivateKey(echKey.PrivateKey)
			let echPriv = __goscriptTuple21[0]
			__goscriptShadow18 = __goscriptTuple21[1]
			if (__goscriptShadow18 != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(80) : Conn.prototype.sendAlert.call(c, 80))
				return [null, null, fmt.Errorf("tls: invalid EncryptedClientHelloKey PrivateKey: %s", (__goscriptShadow18 as any))]
			}
			let __goscriptTuple22: any = hpke.NewKDF(echCiphersuite.KDFID)
			let kdf = __goscriptTuple22[0]
			__goscriptShadow18 = __goscriptTuple22[1]
			if (__goscriptShadow18 != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(80) : Conn.prototype.sendAlert.call(c, 80))
				return [null, null, fmt.Errorf("tls: invalid EncryptedClientHelloKey Config KDF: %s", (__goscriptShadow18 as any))]
			}
			let __goscriptTuple23: any = hpke.NewAEAD(echCiphersuite.AEADID)
			let __goscriptShadow19 = __goscriptTuple23[0]
			__goscriptShadow18 = __goscriptTuple23[1]
			if (__goscriptShadow18 != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(80) : Conn.prototype.sendAlert.call(c, 80))
				return [null, null, fmt.Errorf("tls: invalid EncryptedClientHelloKey Config AEAD: %s", (__goscriptShadow18 as any))]
			}
			let info: $.Slice<number> = $.appendSlice(new Uint8Array([116, 108, 115, 32, 101, 99, 104, 0]), echKey.Config, $.byteSliceHint)
			let __goscriptTuple24: any = await hpke.NewRecipient(encap, echPriv, kdf, __goscriptShadow19, info)
			let hpkeContext: hpke.Recipient | $.VarRef<hpke.Recipient> | null = __goscriptTuple24[0]
			__goscriptShadow18 = __goscriptTuple24[1]
			if (__goscriptShadow18 != null) {

				continue
			}

			let __goscriptTuple25: any = await __goscript_ech.decryptECHPayload(hpkeContext, (outer$ as __goscript_handshake_messages.clientHelloMsg).original, payload)
			let encodedInner: $.Slice<number> = __goscriptTuple25[0]
			__goscriptShadow18 = __goscriptTuple25[1]
			if (__goscriptShadow18 != null) {
				// Read header, payload.
				continue
			}

			let __goscriptTuple26: any = await __goscript_ech.decodeInnerClientHello(outer, encodedInner)
			let echInner: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null = __goscriptTuple26[0]
			__goscriptShadow18 = __goscriptTuple26[1]
			if (__goscriptShadow18 != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(47) : Conn.prototype.sendAlert.call(c, 47))
				return [null, null, __goscript_ech.errInvalidECHExt]
			}

			$.pointerValue<Conn>(c).echAccepted = true

			return [echInner, new __goscript_handshake_server_tls13.echServerContext({hpkeContext: hpkeContext, configID: configID, ciphersuite: echCiphersuite}), null]
		}

		return [outer, null, null]
	}

	public async quicGetTransportParameters(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		if ($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).transportParams == null) {
			$.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events = $.appendOne($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events, new __goscript_quic.QUICEvent({Kind: 5}, true))
		}
		while ($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).transportParams == null) {
			{
				let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).quicWaitForSignal() : Conn.prototype.quicWaitForSignal.call(c))
				if (err != null) {
					return [null, err]
				}
			}
		}
		return [$.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).transportParams, null]
	}

	public quicHandshakeComplete(): void {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		$.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events = $.appendOne($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events, new __goscript_quic.QUICEvent({Kind: 7}, true))
	}

	public async quicReadHandshakeBytes(n: number): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		while ($.pointerValue<Conn>(c).hand.Len() < n) {
			{
				let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).quicWaitForSignal() : Conn.prototype.quicWaitForSignal.call(c))
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	public quicRejectedEarlyData(): void {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		$.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events = $.appendOne($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events, new __goscript_quic.QUICEvent({Kind: 6}, true))
	}

	public async quicResumeSession(session: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null): globalThis.Promise<$.GoError> {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		$.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events = $.appendOne($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events, new __goscript_quic.QUICEvent({Kind: 8, SessionState: session}, true))
		$.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).waitingForDrain = true
		while ($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).waitingForDrain) {
			{
				let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).quicWaitForSignal() : Conn.prototype.quicWaitForSignal.call(c))
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	public async quicSetReadSecret(level: __goscript_quic.QUICEncryptionLevel, suite: number, secret: $.Slice<number>): globalThis.Promise<$.GoError> {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)

		if ((c$ as Conn).hand.Len() != 0) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10))
			return errors.New("tls: handshake buffer not empty before setting read traffic secret")
		}
		$.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events = $.appendOne($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events, new __goscript_quic.QUICEvent({Kind: 1, Level: level, Suite: suite, Data: secret}, true))
		return null
	}

	public quicSetTransportParameters(params: $.Slice<number>): void {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		$.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events = $.appendOne($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events, new __goscript_quic.QUICEvent({Kind: 4, Data: params}, true))
	}

	public quicSetWriteSecret(level: __goscript_quic.QUICEncryptionLevel, suite: number, secret: $.Slice<number>): void {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		$.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events = $.appendOne($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events, new __goscript_quic.QUICEvent({Kind: 2, Level: level, Suite: suite, Data: secret}, true))
	}

	public quicStoreSession(session: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null): void {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		$.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events = $.appendOne($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events, new __goscript_quic.QUICEvent({Kind: 9, SessionState: session}, true))
	}

	public async quicWaitForSignal(): globalThis.Promise<$.GoError> {
		let c: Conn | $.VarRef<Conn> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)

		void (c$ as Conn).handshakeMutex.Unlock()
		const __goscriptDeferCallee12 = $.functionValue(((__receiver) => () => __receiver.Lock())((c$ as Conn).handshakeMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Lock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee12() })

		await $.chanSend($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).blockedc, {})

		await $.chanSend($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).signalc, {})
		if ((__goscriptAwait = $.pointerValue<Exclude<context2.Context, null>>($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {

			return await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlertLocked(0) : Conn.prototype.sendAlertLocked.call(c, 0))
		}
		void (c$ as Conn).hand.Write($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).readbuf)
		$.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).readbuf = null
		return null
	}

	public quicWriteCryptoData(level: __goscript_quic.QUICEncryptionLevel, data: $.Slice<number>): void {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		let last: __goscript_quic.QUICEvent | $.VarRef<__goscript_quic.QUICEvent> | null = null! as __goscript_quic.QUICEvent | $.VarRef<__goscript_quic.QUICEvent> | null
		if ($.sliceLen($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events) > 0) {
			last = $.indexRef($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events!, $.sliceLen($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events) - 1)
		}
		if (((last == null) || ($.pointerValue<__goscript_quic.QUICEvent>(last).Kind != 3)) || ($.pointerValue<__goscript_quic.QUICEvent>(last).Level != level)) {
			$.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events = $.appendOne($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events, new __goscript_quic.QUICEvent({Kind: 3, Level: level}, true))
			last = $.indexRef($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events!, $.sliceLen($.pointerValue<__goscript_quic.quicState>((c$ as Conn).quic).events) - 1)
		}
		$.pointerValue<__goscript_quic.QUICEvent>(last).Data = $.appendSlice($.pointerValue<__goscript_quic.QUICEvent>(last).Data, data, $.byteSliceHint)
	}

	public async readChangeCipherSpec(): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).readRecordOrCCS(true) : Conn.prototype.readRecordOrCCS.call(c, true))
	}

	public async readClientHello(ctx: context2.Context | null): globalThis.Promise<[__goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, __goscript_handshake_server_tls13.echServerContext | $.VarRef<__goscript_handshake_server_tls13.echServerContext> | null, $.GoError]> {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)

		let [msg, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).readHandshake(null) : Conn.prototype.readHandshake.call(c, null))
		if (err != null) {
			return [null, null, err]
		}
		let __goscriptTuple27: any = $.typeAssertTuple<__goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.clientHelloMsg"))
		let clientHello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null = __goscriptTuple27[0]
		let ok = __goscriptTuple27[1]
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10))
			return [null, null, __goscript_common.unexpectedMessageError($.interfaceValue(clientHello, "*tls.clientHelloMsg", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")), msg)]
		}
		// SetReadDeadline sets the read deadline on the underlying connection.
		// A zero value for t means [Conn.Read] will not time out.

		let ech: __goscript_handshake_server_tls13.echServerContext | $.VarRef<__goscript_handshake_server_tls13.echServerContext> | null = null! as __goscript_handshake_server_tls13.echServerContext | $.VarRef<__goscript_handshake_server_tls13.echServerContext> | null
		if ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(clientHello).encryptedClientHello) != 0) {
			let echKeys: $.Slice<__goscript_common.EncryptedClientHelloKey> = $.pointerValue<__goscript_common.Config>((c$ as Conn).config).EncryptedClientHelloKeys
			if ($.pointerValue<__goscript_common.Config>((c$ as Conn).config).GetEncryptedClientHelloKeys != null) {
				let __goscriptTuple28: any = await $.pointerValue<__goscript_common.Config>((c$ as Conn).config).GetEncryptedClientHelloKeys!(__goscript_handshake_server.clientHelloInfo(ctx, c, clientHello))
				echKeys = __goscriptTuple28[0]
				err = __goscriptTuple28[1]
				if (err != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(80) : Conn.prototype.sendAlert.call(c, 80))
					return [null, null, err]
				}
			}
			let __goscriptTuple29: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).processECHClientHello(clientHello, echKeys) : Conn.prototype.processECHClientHello.call(c, clientHello, echKeys))
			clientHello = __goscriptTuple29[0]
			ech = __goscriptTuple29[1]
			err = __goscriptTuple29[2]
			if (err != null) {
				return [null, null, err]
			}
		}

		let configForClient: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null = null! as __goscript_common.Config | $.VarRef<__goscript_common.Config> | null
		let originalConfig: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null = (c$ as Conn).config
		if ($.pointerValue<__goscript_common.Config>((c$ as Conn).config).GetConfigForClient != null) {
			let chi: __goscript_common.ClientHelloInfo | $.VarRef<__goscript_common.ClientHelloInfo> | null = __goscript_handshake_server.clientHelloInfo(ctx, c, clientHello)
			{
				let __goscriptTuple30: any = await $.pointerValue<__goscript_common.Config>((c$ as Conn).config).GetConfigForClient!(chi)
				configForClient = __goscriptTuple30[0]
				err = __goscriptTuple30[1]
				if (err != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(80) : Conn.prototype.sendAlert.call(c, 80))
					return [null, null, err]
				} else {
					if (configForClient != null) {
						;(c$ as Conn).config = configForClient
					}
				}
			}
		}
		;(c$ as Conn).ticketKeys = await (originalConfig !== null && (originalConfig as any).__isVarRef !== true && (originalConfig as any).__goValue === undefined ? ((originalConfig as any) as __goscript_common.Config).ticketKeys(configForClient) : __goscript_common.Config.prototype.ticketKeys.call(originalConfig, configForClient))
		// to avoid allocs; interface method args escape
		let clientVersions: $.Slice<number> = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(clientHello).supportedVersions
		if (($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(clientHello).vers >= 772) && ($.sliceLen(clientVersions) == 0)) {
			// next MAC algorithm

			// current QUIC encryption level
			// current TLS 1.3 traffic secret

			clientVersions = __goscript_common.supportedVersionsFromMax(771)
		} else {
			if ($.sliceLen(clientVersions) == 0) {
				clientVersions = __goscript_common.supportedVersionsFromMax($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(clientHello).vers)
			}
		}
		let __goscriptTuple31: any = __goscript_common.Config.prototype.mutualVersion.call((c$ as Conn).config, false, (c$ as Conn).quic != null, clientVersions);
		;(c$ as Conn).vers = __goscriptTuple31[0]
		ok = __goscriptTuple31[1]
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(70) : Conn.prototype.sendAlert.call(c, 70))
			return [null, null, fmt.Errorf("tls: client offered only unsupported versions: %x", $.interfaceValue(clientVersions, "[]uint16", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16"))))]
		}
		;(c$ as Conn).haveVers = true;
		;(c$ as Conn)._in.version = (c$ as Conn).vers;
		;(c$ as Conn).out.version = (c$ as Conn).vers

		// prepareCipherSpec sets the encryption and MAC states
		// that a subsequent changeCipherSpec will use.
		if (((c$ as Conn).vers != 772) && ((ech != null) && !$.pointerValue<__goscript_handshake_server_tls13.echServerContext>(ech).inner)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(47) : Conn.prototype.sendAlert.call(c, 47))
			return [null, null, errors.New("tls: Encrypted Client Hello cannot be used pre-TLS 1.3")]
		}

		return [clientHello, ech, null]
	}

	public async readFromUntil(r: io.Reader | null, n: number): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		if ((c$ as Conn).rawInput.Len() >= n) {
			return null
		}
		let needs = n - (c$ as Conn).rawInput.Len()
		// There might be extra input waiting on the wire. Make a best effort
		// attempt to fetch it so that it can be used in (*Conn).Read to
		// "predict" closeNotify alerts.
		// TODO(dmo): we use bytes.MinRead here because we used the buffer
		// ReadFrom mechanism to avoid allocations, but we've hoisted this
		// loop for performance. We really should use our own heuristic here
		// for how much to read ahead.
		void (c$ as Conn).rawInput.Grow(needs + bytes.MinRead)
		while (true) {
			let buf: $.Slice<number> = $.goSlice((c$ as Conn).rawInput.AvailableBuffer(), undefined, (c$ as Conn).rawInput.Available())
			let [__goscriptShadow20, err] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<io.Reader, null>) : $.pointerValue<Exclude<io.Reader, null>>(r)).Read(buf)
			// This write is just to update the internal state of the
			// rawInput bytes.Buffer. It cannot fail.
			void (c$ as Conn).rawInput.Write($.goSlice(buf, undefined, __goscriptShadow20))
			needs = needs - (__goscriptShadow20)
			if (needs <= 0) {
				if ($.comparableEqual(err, io.EOF)) {
					err = null
				}
				return err
			}
			if ($.comparableEqual(err, io.EOF)) {
				return io.ErrUnexpectedEOF
			}
			if (err != null) {
				return err
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async readHandshake(transcript: __goscript_handshake_messages.transcriptHash | null): globalThis.Promise<[any, $.GoError]> {
		const c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		{
			let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).readHandshakeBytes(4) : Conn.prototype.readHandshakeBytes.call(c, 4))
			if (err != null) {
				return [null, err]
			}
		}
		let data: $.Slice<number> = (c$ as Conn).hand.Bytes()

		let maxHandshakeSize = 65536
		// hasVers indicates we're past the first message, forcing someone trying to
		// make us just allocate a large buffer to at least do the initial part of
		// the handshake first.
		if ((c$ as Conn).haveVers && ($.arrayIndex(data!, 0) == 11)) {
			// Since certificate messages are likely to be the only messages that
			// can be larger than maxHandshake, we use a special limit for just
			// those messages.
			maxHandshakeSize = 262144
		}

		let n: number = (($.int($.arrayIndex(data!, 1)) << 16) | ($.int($.arrayIndex(data!, 2)) << 8)) | $.int($.arrayIndex(data!, 3))
		if (n > maxHandshakeSize) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlertLocked(80) : Conn.prototype.sendAlertLocked.call(c, 80))
			return [null, (c$ as Conn)._in.setErrorLocked(fmt.Errorf("tls: handshake message of length %d bytes exceeds maximum of %d bytes", $.basicInterfaceValue(n, "int"), $.basicInterfaceValue(maxHandshakeSize, "int")))]
		}
		{
			let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).readHandshakeBytes(4 + n) : Conn.prototype.readHandshakeBytes.call(c, 4 + n))
			if (err != null) {
				return [null, err]
			}
		}
		data = (c$ as Conn).hand.Next(4 + n)
		const __goscriptReturn15 = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).unmarshalHandshakeMessage(data, transcript) : Conn.prototype.unmarshalHandshakeMessage.call(c, data, transcript))
		return [(__goscriptReturn15[0] as any), __goscriptReturn15[1]]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async readHandshakeBytes(n: number): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		if ((c$ as Conn).quic != null) {
			return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).quicReadHandshakeBytes(n) : Conn.prototype.quicReadHandshakeBytes.call(c, n))
		}
		while ((c$ as Conn).hand.Len() < n) {
			{
				let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).readRecord() : Conn.prototype.readRecord.call(c))
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	public async readRecord(): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).readRecordOrCCS(false) : Conn.prototype.readRecordOrCCS.call(c, false))
	}

	public async readRecordOrCCS(expectChangeCipherSpec: boolean): globalThis.Promise<$.GoError> {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		if ((c$ as Conn)._in.err != null) {
			return (c$ as Conn)._in.err
		}
		let handshakeComplete = (c$ as Conn).isHandshakeComplete.Load()

		// This function modifies c.rawInput, which owns the c.input memory.
		if ((c$ as Conn).input.Len() != 0) {
			return (c$ as Conn)._in.setErrorLocked(errors.New("tls: internal error: attempted to read record with pending application data"))
		}
		void (c$ as Conn).input.Reset(null)

		if ((c$ as Conn).quic != null) {
			return (c$ as Conn)._in.setErrorLocked(errors.New("tls: internal error: attempted to read record with QUIC transport"))
		}

		// Read header, payload.
		{
			let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).readFromUntil(((c$ as Conn).conn as io.Reader | null), 5) : Conn.prototype.readFromUntil.call(c, ((c$ as Conn).conn as io.Reader | null), 5))
			if (err != null) {
				// RFC 8446, Section 6.1 suggests that EOF without an alertCloseNotify
				// is an error, but popular web sites seem to do this, so we accept it
				// if and only if at the record boundary.
				if (($.comparableEqual(err, io.ErrUnexpectedEOF)) && ((c$ as Conn).rawInput.Len() == 0)) {
					err = io.EOF
				}
				{
					let [e, ok] = $.typeAssertTuple<net.Error | null>(err, "net.Error")
					if (!ok || !(__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<net.Error, null>) : $.pointerValue<Exclude<net.Error, null>>(e)).Temporary(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						void (c$ as Conn)._in.setErrorLocked(err)
					}
				}
				return err
			}
		}
		let hdr: $.Slice<number> = $.goSlice((c$ as Conn).rawInput.Bytes(), undefined, 5)
		let typ = $.uint($.arrayIndex(hdr!, 0), 8)

		// No valid TLS record has a type of 0x80, however SSLv2 handshakes
		// start with a uint16 length where the MSB is set and the first record
		// is always < 256 bytes long. Therefore typ == 0x80 strongly suggests
		// an SSLv2 client.
		if (!handshakeComplete && (typ == 0x80)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(70) : Conn.prototype.sendAlert.call(c, 70))
			return (c$ as Conn)._in.setErrorLocked($.interfaceValue<$.GoError>((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).newRecordHeaderError(null, "unsupported SSLv2 handshake received") : Conn.prototype.newRecordHeaderError.call(c, null, "unsupported SSLv2 handshake received")), "tls.RecordHeaderError", "tls.RecordHeaderError"))
		}

		let vers = $.uint(((($.uint($.arrayIndex(hdr!, 1), 16) << 8) & 0xffff)) | $.uint($.arrayIndex(hdr!, 2), 16), 16)
		let expectedVers = (c$ as Conn).vers
		if (expectedVers == 772) {
			// All TLS 1.3 records are expected to have 0x0303 (1.2) after
			// the initial hello (RFC 8446 Section 5.1).
			expectedVers = 771
		}
		let n = ($.int($.arrayIndex(hdr!, 3)) << 8) | $.int($.arrayIndex(hdr!, 4))
		if ((c$ as Conn).haveVers && (vers != expectedVers)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(70) : Conn.prototype.sendAlert.call(c, 70))
			let msg = await fmt.Sprintf("received record with version %x when expecting version %x", $.basicInterfaceValue(vers, "uint16"), $.basicInterfaceValue(expectedVers, "uint16"))
			return (c$ as Conn)._in.setErrorLocked($.interfaceValue<$.GoError>((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).newRecordHeaderError(null, msg) : Conn.prototype.newRecordHeaderError.call(c, null, msg)), "tls.RecordHeaderError", "tls.RecordHeaderError"))
		}
		if (!(c$ as Conn).haveVers) {
			// First message, be extra suspicious: this might not be a TLS
			// client. Bail out before reading a full 'body', if possible.
			// The current max version is 3.3 so if the version is >= 16.0,
			// it's probably not real.
			if (((typ != 21) && (typ != 22)) || (vers >= 0x1000)) {
				return (c$ as Conn)._in.setErrorLocked($.interfaceValue<$.GoError>((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).newRecordHeaderError((c$ as Conn).conn, "first record does not look like a TLS handshake") : Conn.prototype.newRecordHeaderError.call(c, (c$ as Conn).conn, "first record does not look like a TLS handshake")), "tls.RecordHeaderError", "tls.RecordHeaderError"))
			}
		}
		if ((((c$ as Conn).vers == 772) && (n > 16640)) || (n > 18432)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(22) : Conn.prototype.sendAlert.call(c, 22))
			let msg = await fmt.Sprintf("oversized record received with length %d", $.basicInterfaceValue(n, "int"))
			return (c$ as Conn)._in.setErrorLocked($.interfaceValue<$.GoError>((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).newRecordHeaderError(null, msg) : Conn.prototype.newRecordHeaderError.call(c, null, msg)), "tls.RecordHeaderError", "tls.RecordHeaderError"))
		}
		{
			let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).readFromUntil(((c$ as Conn).conn as io.Reader | null), 5 + n) : Conn.prototype.readFromUntil.call(c, ((c$ as Conn).conn as io.Reader | null), 5 + n))
			if (err != null) {
				{
					let [e, ok] = $.typeAssertTuple<net.Error | null>(err, "net.Error")
					if (!ok || !(__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<net.Error, null>) : $.pointerValue<Exclude<net.Error, null>>(e)).Temporary(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						void (c$ as Conn)._in.setErrorLocked(err)
					}
				}
				return err
			}
		}

		// Process message.
		let record: $.Slice<number> = (c$ as Conn).rawInput.Next(5 + n)
		let __goscriptTuple32: any = await (c$ as Conn)._in.decrypt(record)
		let data: $.Slice<number> = __goscriptTuple32[0]
		typ = __goscriptTuple32[1]
		let err = __goscriptTuple32[2]
		if (err != null) {
			return (c$ as Conn)._in.setErrorLocked(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert($.uint($.mustTypeAssert<__goscript_alert.alert>(err, /* @__PURE__ */ $.basicType("uint8", "tls.alert")), 8)) : Conn.prototype.sendAlert.call(c, $.uint($.mustTypeAssert<__goscript_alert.alert>(err, /* @__PURE__ */ $.basicType("uint8", "tls.alert")), 8))))
		}
		if ($.sliceLen(data) > 16384) {
			return (c$ as Conn)._in.setErrorLocked(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(22) : Conn.prototype.sendAlert.call(c, 22)))
		}

		// Application Data messages are always protected.
		if (((c$ as Conn)._in.cipher == null) && (typ == 23)) {
			return (c$ as Conn)._in.setErrorLocked(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10)))
		}

		if (((typ == 23) || ((typ == 22) && !handshakeComplete)) && ($.sliceLen(data) > 0)) {
			// This is a state-advancing message: reset the retry count.
			;(c$ as Conn).retryCount = 0
		}

		// Handshake messages MUST NOT be interleaved with other record types in TLS 1.3.
		if ((((c$ as Conn).vers == 772) && (typ != 22)) && ((c$ as Conn).hand.Len() > 0)) {
			return (c$ as Conn)._in.setErrorLocked(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10)))
		}

		switch (typ) {
			default:
			{
				return (c$ as Conn)._in.setErrorLocked(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10)))
				break
			}
			case 21:
			{
				if ((c$ as Conn).quic != null) {
					return (c$ as Conn)._in.setErrorLocked(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10)))
				}
				if ($.sliceLen(data) != 2) {
					return (c$ as Conn)._in.setErrorLocked(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10)))
				}
				if ($.uint($.arrayIndex(data!, 1), 8) == 0) {
					return (c$ as Conn)._in.setErrorLocked(io.EOF)
				}
				if ((c$ as Conn).vers == 772) {
					// TLS 1.3 removed warning-level alerts except for alertUserCanceled
					// (RFC 8446, § 6.1). Since at least one major implementation
					// (https://bugs.openjdk.org/browse/JDK-8323517) misuses this alert,
					// many TLS stacks now ignore it outright when seen in a TLS 1.3
					// handshake (e.g. BoringSSL, NSS, Rustls).
					if ($.uint($.arrayIndex(data!, 1), 8) == 90) {
						// Like TLS 1.2 alertLevelWarning alerts, we drop the record and retry.
						return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).retryReadRecord(expectChangeCipherSpec) : Conn.prototype.retryReadRecord.call(c, expectChangeCipherSpec))
					}
					return (c$ as Conn)._in.setErrorLocked($.interfaceValue<$.GoError>(new net.OpError({Op: "remote error", Err: $.namedValueInterfaceValue<$.GoError>($.uint($.arrayIndex(data!, 1), 8), "tls.alert", {"Error": __goscript_alert.alert_Error}, /* @__PURE__ */ $.basicType("uint8", "tls.alert"))}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError")))
				}
				switch ($.arrayIndex(data!, 0)) {
					case 1:
					{
						return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).retryReadRecord(expectChangeCipherSpec) : Conn.prototype.retryReadRecord.call(c, expectChangeCipherSpec))
						break
					}
					case 2:
					{
						return (c$ as Conn)._in.setErrorLocked($.interfaceValue<$.GoError>(new net.OpError({Op: "remote error", Err: $.namedValueInterfaceValue<$.GoError>($.uint($.arrayIndex(data!, 1), 8), "tls.alert", {"Error": __goscript_alert.alert_Error}, /* @__PURE__ */ $.basicType("uint8", "tls.alert"))}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError")))
						break
					}
					default:
					{
						return (c$ as Conn)._in.setErrorLocked(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10)))
						break
					}
				}
				break
			}
			case 20:
			{
				if (($.sliceLen(data) != 1) || ($.arrayIndex(data!, 0) != 1)) {
					return (c$ as Conn)._in.setErrorLocked(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(50) : Conn.prototype.sendAlert.call(c, 50)))
				}
				// Handshake messages are not allowed to fragment across the CCS.
				if ((c$ as Conn).hand.Len() > 0) {
					return (c$ as Conn)._in.setErrorLocked(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10)))
				}
				// In TLS 1.3, change_cipher_spec records are ignored until the
				// Finished. See RFC 8446, Appendix D.4. Note that according to Section
				// 5, a server can send a ChangeCipherSpec before its ServerHello, when
				// c.vers is still unset. That's not useful though and suspicious if the
				// server then selects a lower protocol version, so don't allow that.
				if ((c$ as Conn).vers == 772) {
					return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).retryReadRecord(expectChangeCipherSpec) : Conn.prototype.retryReadRecord.call(c, expectChangeCipherSpec))
				}
				if (!expectChangeCipherSpec) {
					return (c$ as Conn)._in.setErrorLocked(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10)))
				}
				{
					let __goscriptShadow21 = (c$ as Conn)._in.changeCipherSpec()
					if (__goscriptShadow21 != null) {
						return (c$ as Conn)._in.setErrorLocked(await Conn.prototype.sendAlert.call(c, $.uint($.mustTypeAssert<__goscript_alert.alert>(__goscriptShadow21, /* @__PURE__ */ $.basicType("uint8", "tls.alert")), 8)))
					}
				}
				break
			}
			case 23:
			{
				if (!handshakeComplete || expectChangeCipherSpec) {
					return (c$ as Conn)._in.setErrorLocked(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10)))
				}
				// Some OpenSSL servers send empty records in order to randomize the
				// CBC IV. Ignore a limited number of empty records.
				if ($.sliceLen(data) == 0) {
					return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).retryReadRecord(expectChangeCipherSpec) : Conn.prototype.retryReadRecord.call(c, expectChangeCipherSpec))
				}
				// Note that data is owned by c.rawInput, following the Next call above,
				// to avoid copying the plaintext. This is safe because c.rawInput is
				// not read from or written to until c.input is drained.
				void (c$ as Conn).input.Reset(data)
				break
			}
			case 22:
			{
				if (($.sliceLen(data) == 0) || expectChangeCipherSpec) {
					return (c$ as Conn)._in.setErrorLocked(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10)))
				}
				void (c$ as Conn).hand.Write(data)
				break
			}
		}

		return null
	}

	public async retryReadRecord(expectChangeCipherSpec: boolean): globalThis.Promise<$.GoError> {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c);
		;(c$ as Conn).retryCount++
		if ((c$ as Conn).retryCount > 16) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10))
			return (c$ as Conn)._in.setErrorLocked(errors.New("tls: too many ignored records"))
		}
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).readRecordOrCCS(expectChangeCipherSpec) : Conn.prototype.readRecordOrCCS.call(c, expectChangeCipherSpec))
	}

	public async sendAlert(err: __goscript_alert.alert): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		await (c$ as Conn).out.Mutex.Lock()
		const __goscriptDeferCallee13 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Conn).out.Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee13() })
		return await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlertLocked(err) : Conn.prototype.sendAlertLocked.call(c, err))
	}

	public async sendAlertLocked(err: __goscript_alert.alert): globalThis.Promise<$.GoError> {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		if ((c$ as Conn).quic != null) {
			return (c$ as Conn).out.setErrorLocked($.interfaceValue<$.GoError>(new net.OpError({Op: "local error", Err: $.namedValueInterfaceValue<$.GoError>(err, "tls.alert", {"Error": __goscript_alert.alert_Error}, /* @__PURE__ */ $.basicType("uint8", "tls.alert"))}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError")))
		}

		switch (err) {
			case 100:
			case 0:
			{
				;(c$ as Conn).tmp[0] = 1
				break
			}
			default:
			{
				;(c$ as Conn).tmp[0] = 2
				break
			}
		}
		;(c$ as Conn).tmp[1] = $.uint(err, 8)

		let [, writeErr] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).writeRecordLocked(21, $.goSlice((c$ as Conn).tmp, 0, 2)) : Conn.prototype.writeRecordLocked.call(c, 21, $.goSlice((c$ as Conn).tmp, 0, 2)))
		if (err == 0) {
			// closeNotify is a special case in that it isn't an error.
			return writeErr
		}

		return (c$ as Conn).out.setErrorLocked($.interfaceValue<$.GoError>(new net.OpError({Op: "local error", Err: $.namedValueInterfaceValue<$.GoError>(err, "tls.alert", {"Error": __goscript_alert.alert_Error}, /* @__PURE__ */ $.basicType("uint8", "tls.alert"))}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError")))
	}

	public async sendSessionTicket(earlyData: boolean, extra: $.Slice<$.Slice<number>>): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		let suite: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null = __goscript_cipher_suites.cipherSuiteTLS13ByID((c$ as Conn).cipherSuite)
		let suite$: __goscript_cipher_suites.cipherSuiteTLS13 = suite == null ? $.pointerTarget<__goscript_cipher_suites.cipherSuiteTLS13>(suite) : (suite as any).__isVarRef === true ? (suite as any).value : (suite as any).__goValue === undefined ? (suite as any) : $.pointerTarget<__goscript_cipher_suites.cipherSuiteTLS13>(suite)
		if (suite == null) {
			return errors.New("tls: internal error: unknown cipher suite")
		}

		let psk: $.Slice<number> = await tls13.ExpandLabel(__goscriptStatic0(), $.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))((suite$ as __goscript_cipher_suites.cipherSuiteTLS13).hash), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm"), (c$ as Conn).resumptionSecret, "resumption", null, crypto.Hash_Size((suite$ as __goscript_cipher_suites.cipherSuiteTLS13).hash))

		let m: __goscript_handshake_messages.newSessionTicketMsgTLS13 | $.VarRef<__goscript_handshake_messages.newSessionTicketMsgTLS13> | null = new __goscript_handshake_messages.newSessionTicketMsgTLS13()
		let m$: __goscript_handshake_messages.newSessionTicketMsgTLS13 = m == null ? $.pointerTarget<__goscript_handshake_messages.newSessionTicketMsgTLS13>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<__goscript_handshake_messages.newSessionTicketMsgTLS13>(m)

		let state: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sessionState() : Conn.prototype.sessionState.call(c))
		let state$: __goscript_ticket.SessionState = state == null ? $.pointerTarget<__goscript_ticket.SessionState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_ticket.SessionState>(state);
		;(state$ as __goscript_ticket.SessionState).secret = psk;
		;(state$ as __goscript_ticket.SessionState).EarlyData = earlyData;
		;(state$ as __goscript_ticket.SessionState).Extra = extra
		if ($.pointerValue<__goscript_common.Config>((c$ as Conn).config).WrapSession != null) {
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple33: any = await $.pointerValue<__goscript_common.Config>((c$ as Conn).config).WrapSession!((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).connectionStateLocked() : Conn.prototype.connectionStateLocked.call(c)), state);
			;(m$ as __goscript_handshake_messages.newSessionTicketMsgTLS13).label = __goscriptTuple33[0]
			err = __goscriptTuple33[1]
			if (err != null) {
				return err
			}
		} else {
			let __goscriptTuple34: any = await (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_ticket.SessionState).Bytes() : __goscript_ticket.SessionState.prototype.Bytes.call(state))
			let stateBytes: $.Slice<number> = __goscriptTuple34[0]
			let err = __goscriptTuple34[1]
			if (err != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(80) : Conn.prototype.sendAlert.call(c, 80))
				return err
			}
			let __goscriptTuple35: any = await __goscript_common.Config.prototype.encryptTicket.call((c$ as Conn).config, stateBytes, (c$ as Conn).ticketKeys);
			;(m$ as __goscript_handshake_messages.newSessionTicketMsgTLS13).label = __goscriptTuple35[0]
			err = __goscriptTuple35[1]
			if (err != null) {
				return err
			}
		}
		;(m$ as __goscript_handshake_messages.newSessionTicketMsgTLS13).lifetime = 604800

		let ageAdd: $.Slice<number> = $.makeSlice<number>(4, undefined, "byte")
		{
			let [, err] = await $.pointerValue<Exclude<io.Reader, null>>(__goscript_common.Config.prototype.rand.call((c$ as Conn).config)).Read(ageAdd)
			if (err != null) {
				return err
			}
		}
		;(m$ as __goscript_handshake_messages.newSessionTicketMsgTLS13).ageAdd = byteorder.LEUint32(ageAdd)

		if (earlyData) {

			;(m$ as __goscript_handshake_messages.newSessionTicketMsgTLS13).maxEarlyData = 0xffffffff
		}

		{
			let [, err] = await Conn.prototype.writeHandshakeRecord.call(c, $.interfaceValue<__goscript_common.handshakeMessage | null>(m, "*tls.newSessionTicketMsgTLS13", /* @__PURE__ */ $.pointerType("tls.newSessionTicketMsgTLS13")), null)
			if (err != null) {
				return err
			}
		}

		return null
	}

	public async serverHandshake(ctx: context2.Context | null): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		let __goscriptTuple36: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).readClientHello(ctx) : Conn.prototype.readClientHello.call(c, ctx))
		let clientHello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null = __goscriptTuple36[0]
		let ech: __goscript_handshake_server_tls13.echServerContext | $.VarRef<__goscript_handshake_server_tls13.echServerContext> | null = __goscriptTuple36[1]
		let err = __goscriptTuple36[2]
		if (err != null) {
			return err
		}

		if ($.pointerValue<Conn>(c).vers == 772) {
			let hs = $.varRef(new __goscript_handshake_server_tls13.serverHandshakeStateTLS13({c: c, ctx: ctx, clientHello: clientHello, echContext: ech}, true))
			return hs.value.handshake()
		}

		let hs = $.varRef(new __goscript_handshake_server.serverHandshakeState({c: c, ctx: ctx, clientHello: clientHello}, true))
		return hs.value.handshake()
	}

	public async sessionState(): globalThis.Promise<__goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null> {
		const c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		return (await (async () => { const __goscriptLiteralField7 = $.uint64($.markAsStructValue($.cloneStructValue((await __goscript_common.Config.prototype.time.call((c$ as Conn).config)))).Unix()); return new __goscript_ticket.SessionState({version: (c$ as Conn).vers, cipherSuite: (c$ as Conn).cipherSuite, createdAt: __goscriptLiteralField7, alpnProtocol: (c$ as Conn).clientProtocol, peerCertificates: (c$ as Conn).peerCertificates, ocspResponse: (c$ as Conn).ocspResponse, scts: (c$ as Conn).scts, isClient: (c$ as Conn).isClient, extMasterSecret: (c$ as Conn).extMasterSecret, verifiedChains: (c$ as Conn).verifiedChains, curveID: (c$ as Conn).curveID}) })())
	}

	public async setReadTrafficSecret(suite: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null, level: __goscript_quic.QUICEncryptionLevel, secret: $.Slice<number>, locked: boolean): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		// Ensure that there are no buffered handshake messages before changing the
		// read keys, since that can cause messages to be parsed that were encrypted
		// using old keys which are no longer appropriate.
		if ((c$ as Conn).hand.Len() != 0) {
			if (locked) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlertLocked(10) : Conn.prototype.sendAlertLocked.call(c, 10))
			} else {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10))
			}
			return errors.New("tls: handshake buffer not empty before setting read traffic secret")
		}
		await (c$ as Conn)._in.setTrafficSecret(suite, level, secret)
		return null
	}

	public async setWriteTrafficSecret(suite: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null, level: __goscript_quic.QUICEncryptionLevel, secret: $.Slice<number>): globalThis.Promise<void> {
		const c: Conn | $.VarRef<Conn> | null = this;
		await $.pointerValue<Conn>(c).out.setTrafficSecret(suite, level, secret)
	}

	public async unmarshalHandshakeMessage(data: $.Slice<number>, transcript: __goscript_handshake_messages.transcriptHash | null): globalThis.Promise<[__goscript_common.handshakeMessage | null, $.GoError]> {
		const c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		let m: __goscript_common.handshakeMessage | null = null! as __goscript_common.handshakeMessage | null
		switch ($.arrayIndex(data!, 0)) {
			case 0:
			{
				m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.helloRequestMsg(), "*tls.helloRequestMsg", /* @__PURE__ */ $.pointerType("tls.helloRequestMsg"))
				break
			}
			case 1:
			{
				m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.clientHelloMsg(), "*tls.clientHelloMsg", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg"))
				break
			}
			case 2:
			{
				m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.serverHelloMsg(), "*tls.serverHelloMsg", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg"))
				break
			}
			case 4:
			{
				if ((c$ as Conn).vers == 772) {
					m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.newSessionTicketMsgTLS13(), "*tls.newSessionTicketMsgTLS13", /* @__PURE__ */ $.pointerType("tls.newSessionTicketMsgTLS13"))
				} else {
					m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.newSessionTicketMsg(), "*tls.newSessionTicketMsg", /* @__PURE__ */ $.pointerType("tls.newSessionTicketMsg"))
				}
				break
			}
			case 11:
			{
				if ((c$ as Conn).vers == 772) {
					m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.certificateMsgTLS13(), "*tls.certificateMsgTLS13", /* @__PURE__ */ $.pointerType("tls.certificateMsgTLS13"))
				} else {
					m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.certificateMsg(), "*tls.certificateMsg", /* @__PURE__ */ $.pointerType("tls.certificateMsg"))
				}
				break
			}
			case 13:
			{
				if ((c$ as Conn).vers == 772) {
					m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.certificateRequestMsgTLS13(), "*tls.certificateRequestMsgTLS13", /* @__PURE__ */ $.pointerType("tls.certificateRequestMsgTLS13"))
				} else {
					m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.certificateRequestMsg({hasSignatureAlgorithm: (c$ as Conn).vers >= 771}), "*tls.certificateRequestMsg", /* @__PURE__ */ $.pointerType("tls.certificateRequestMsg"))
				}
				break
			}
			case 22:
			{
				m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.certificateStatusMsg(), "*tls.certificateStatusMsg", /* @__PURE__ */ $.pointerType("tls.certificateStatusMsg"))
				break
			}
			case 12:
			{
				m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.serverKeyExchangeMsg(), "*tls.serverKeyExchangeMsg", /* @__PURE__ */ $.pointerType("tls.serverKeyExchangeMsg"))
				break
			}
			case 14:
			{
				m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.serverHelloDoneMsg(), "*tls.serverHelloDoneMsg", /* @__PURE__ */ $.pointerType("tls.serverHelloDoneMsg"))
				break
			}
			case 16:
			{
				m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.clientKeyExchangeMsg(), "*tls.clientKeyExchangeMsg", /* @__PURE__ */ $.pointerType("tls.clientKeyExchangeMsg"))
				break
			}
			case 15:
			{
				m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.certificateVerifyMsg({hasSignatureAlgorithm: (c$ as Conn).vers >= 771}), "*tls.certificateVerifyMsg", /* @__PURE__ */ $.pointerType("tls.certificateVerifyMsg"))
				break
			}
			case 20:
			{
				m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.finishedMsg(), "*tls.finishedMsg", /* @__PURE__ */ $.pointerType("tls.finishedMsg"))
				break
			}
			case 8:
			{
				m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.encryptedExtensionsMsg(), "*tls.encryptedExtensionsMsg", /* @__PURE__ */ $.pointerType("tls.encryptedExtensionsMsg"))
				break
			}
			case 5:
			{
				m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.endOfEarlyDataMsg(), "*tls.endOfEarlyDataMsg", /* @__PURE__ */ $.pointerType("tls.endOfEarlyDataMsg"))
				break
			}
			case 24:
			{
				m = $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.keyUpdateMsg(), "*tls.keyUpdateMsg", /* @__PURE__ */ $.pointerType("tls.keyUpdateMsg"))
				break
			}
			default:
			{
				return [null, (c$ as Conn)._in.setErrorLocked(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(10) : Conn.prototype.sendAlert.call(c, 10)))]
				break
			}
		}

		// The handshake message unmarshalers
		// expect to be able to keep references to data,
		// so pass in a fresh copy that won't be overwritten.
		data = $.appendSlice<number>(null, data, $.byteSliceHint)

		if (!(__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_common.handshakeMessage, null>) : $.pointerValue<Exclude<__goscript_common.handshakeMessage, null>>(m)).unmarshal(data), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return [null, (c$ as Conn)._in.setErrorLocked(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(50) : Conn.prototype.sendAlert.call(c, 50)))]
		}

		if (transcript != null) {
			await (transcript !== null && (transcript as any).__isVarRef !== true && (transcript as any).__goValue === undefined ? (transcript as Exclude<__goscript_handshake_messages.transcriptHash, null>) : $.pointerValue<Exclude<__goscript_handshake_messages.transcriptHash, null>>(transcript)).Write(data)
		}

		return [m, null]
	}

	public async verifyServerCertificate(certificates: $.Slice<$.Slice<number>>): globalThis.Promise<$.GoError> {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		let certs: $.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null> = $.makeSlice<x509.Certificate | $.VarRef<x509.Certificate> | null>($.sliceLen(certificates))
		for (let __goscriptRangeTarget8 = certificates, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), i = 0; i < __goscriptRangeWindow8.length; i++) {
			let asn1Data = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + i] as $.Slice<number>)
			let __goscriptTuple37: any = await __goscript_cache.weakCertCache.prototype.newCert.call(__goscript_cache.globalCertCache, asn1Data)
			let cert: x509.Certificate | $.VarRef<x509.Certificate> | null = __goscriptTuple37[0]
			let err = __goscriptTuple37[1]
			let cert$: x509.Certificate = cert == null ? $.pointerTarget<x509.Certificate>(cert) : (cert as any).__isVarRef === true ? (cert as any).value : (cert as any).__goValue === undefined ? (cert as any) : $.pointerTarget<x509.Certificate>(cert)
			if (err != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(50) : Conn.prototype.sendAlert.call(c, 50))
				return errors.New($.concatString("tls: failed to parse certificate from server: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
			}
			if ((cert$ as x509.Certificate).PublicKeyAlgorithm == 1) {
				let n = big.Int.prototype.BitLen.call($.pointerValue<rsa.PublicKey>($.mustTypeAssert<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>((cert$ as x509.Certificate).PublicKey, /* @__PURE__ */ $.pointerType("rsa.PublicKey"))).N)
				{
					let [max, ok] = __goscript_handshake_client.checkKeySize(n)
					if (!ok) {
						await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(42) : Conn.prototype.sendAlert.call(c, 42))
						return fmt.Errorf("tls: server sent certificate containing RSA key larger than %d bits", $.basicInterfaceValue(max, "int"))
					}
				}
			}
			$.sliceElems(certs!)[$.sliceSlot(certs!, i)] = cert
		}

		let echRejected = ($.pointerValue<__goscript_common.Config>((c$ as Conn).config).EncryptedClientHelloConfigList != null) && !(c$ as Conn).echAccepted
		if (echRejected) {
			if ($.pointerValue<__goscript_common.Config>((c$ as Conn).config).EncryptedClientHelloRejectionVerify != null) {
				{
					let err = (__goscriptAwait = $.pointerValue<__goscript_common.Config>((c$ as Conn).config).EncryptedClientHelloRejectionVerify!((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).connectionStateLocked() : Conn.prototype.connectionStateLocked.call(c))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (err != null) {
						await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(42) : Conn.prototype.sendAlert.call(c, 42))
						return err
					}
				}
			} else {
				let opts = (await (async () => { const __goscriptLiteralField8 = await __goscript_common.Config.prototype.time.call((c$ as Conn).config); const __goscriptLiteralField9 = x509.NewCertPool(); return new x509.VerifyOptions({Roots: $.pointerValue<__goscript_common.Config>((c$ as Conn).config).RootCAs, CurrentTime: __goscriptLiteralField8, DNSName: (c$ as Conn).serverName, Intermediates: __goscriptLiteralField9}, true) })())

				for (let __goscriptRangeTarget9 = $.goSlice(certs, 1, undefined), __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
					let cert = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as x509.Certificate | $.VarRef<x509.Certificate> | null)
					await x509.CertPool.prototype.AddCert.call(opts.Intermediates, cert)
				}
				let __goscriptTuple38: any = await x509.Certificate.prototype.Verify.call($.arrayIndex(certs!, 0), (opts).clone())
				let chains: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>> = __goscriptTuple38[0]
				let err = __goscriptTuple38[1]
				if (err != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(42) : Conn.prototype.sendAlert.call(c, 42))
					return $.interfaceValue<$.GoError>(new __goscript_common.CertificateVerificationError({UnverifiedCertificates: certs, Err: err}), "*tls.CertificateVerificationError", /* @__PURE__ */ $.pointerType("tls.CertificateVerificationError"))
				}

				let __goscriptTuple39: any = await __goscript_common.fipsAllowedChains(chains);
				;(c$ as Conn).verifiedChains = __goscriptTuple39[0]
				err = __goscriptTuple39[1]
				if (err != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(42) : Conn.prototype.sendAlert.call(c, 42))
					return $.interfaceValue<$.GoError>(new __goscript_common.CertificateVerificationError({UnverifiedCertificates: certs, Err: err}), "*tls.CertificateVerificationError", /* @__PURE__ */ $.pointerType("tls.CertificateVerificationError"))
				}
			}
		} else {
			if (!$.pointerValue<__goscript_common.Config>((c$ as Conn).config).InsecureSkipVerify) {
				let opts = (await (async () => { const __goscriptLiteralField10 = await __goscript_common.Config.prototype.time.call((c$ as Conn).config); const __goscriptLiteralField11 = x509.NewCertPool(); return new x509.VerifyOptions({Roots: $.pointerValue<__goscript_common.Config>((c$ as Conn).config).RootCAs, CurrentTime: __goscriptLiteralField10, DNSName: $.pointerValue<__goscript_common.Config>((c$ as Conn).config).ServerName, Intermediates: __goscriptLiteralField11}, true) })())

				for (let __goscriptRangeTarget10 = $.goSlice(certs, 1, undefined), __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
					let cert = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as x509.Certificate | $.VarRef<x509.Certificate> | null)
					await x509.CertPool.prototype.AddCert.call(opts.Intermediates, cert)
				}
				let __goscriptTuple40: any = await x509.Certificate.prototype.Verify.call($.arrayIndex(certs!, 0), (opts).clone())
				let chains: $.Slice<$.Slice<x509.Certificate | $.VarRef<x509.Certificate> | null>> = __goscriptTuple40[0]
				let err = __goscriptTuple40[1]
				if (err != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(42) : Conn.prototype.sendAlert.call(c, 42))
					return $.interfaceValue<$.GoError>(new __goscript_common.CertificateVerificationError({UnverifiedCertificates: certs, Err: err}), "*tls.CertificateVerificationError", /* @__PURE__ */ $.pointerType("tls.CertificateVerificationError"))
				}

				let __goscriptTuple41: any = await __goscript_common.fipsAllowedChains(chains);
				;(c$ as Conn).verifiedChains = __goscriptTuple41[0]
				err = __goscriptTuple41[1]
				if (err != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(42) : Conn.prototype.sendAlert.call(c, 42))
					return $.interfaceValue<$.GoError>(new __goscript_common.CertificateVerificationError({UnverifiedCertificates: certs, Err: err}), "*tls.CertificateVerificationError", /* @__PURE__ */ $.pointerType("tls.CertificateVerificationError"))
				}
			}
		}

		{
			const __goscriptTypeSwitchValue = $.pointerValue<x509.Certificate>($.arrayIndex(certs!, 0)).PublicKey
			switch (true) {
				case $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PublicKey")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey")):
					{
					}
					break
				case $.typeAssert<mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mldsa.PublicKey")).ok:
					{
						if ((c$ as Conn).vers < 772) {
							await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(47) : Conn.prototype.sendAlert.call(c, 47))
							return errors.New("tls: server's certificate uses ML-DSA, which requires TLS 1.3")
						}
					}
					break
				default:
					{
						await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(43) : Conn.prototype.sendAlert.call(c, 43))
						return fmt.Errorf("tls: server's certificate contains an unsupported type of public key: %T", $.pointerValue<x509.Certificate>($.arrayIndex(certs!, 0)).PublicKey)
					}
					break
			}
		}

		;(c$ as Conn).peerCertificates = certs

		if (($.pointerValue<__goscript_common.Config>((c$ as Conn).config).VerifyPeerCertificate != null) && !echRejected) {
			{
				let err = (__goscriptAwait = $.pointerValue<__goscript_common.Config>((c$ as Conn).config).VerifyPeerCertificate!(certificates, (c$ as Conn).verifiedChains), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(42) : Conn.prototype.sendAlert.call(c, 42))
					return err
				}
			}
		}

		if (($.pointerValue<__goscript_common.Config>((c$ as Conn).config).VerifyConnection != null) && !echRejected) {
			{
				let err = (__goscriptAwait = $.pointerValue<__goscript_common.Config>((c$ as Conn).config).VerifyConnection!((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).connectionStateLocked() : Conn.prototype.connectionStateLocked.call(c))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlert(42) : Conn.prototype.sendAlert.call(c, 42))
					return err
				}
			}
		}

		return null
	}

	public async write(data: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let c: Conn | $.VarRef<Conn> | null = this;
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		if ((c$ as Conn).buffering) {
			;(c$ as Conn).sendBuf = $.appendSlice((c$ as Conn).sendBuf, data, $.byteSliceHint)
			return [$.sliceLen(data), null]
		}

		let [n, err] = await $.pointerValue<Exclude<net.Conn, null>>((c$ as Conn).conn).Write(data);
		;(c$ as Conn).bytesSent = $.int64Add((c$ as Conn).bytesSent, $.int64(n))
		return [n, err]
	}

	public async writeChangeCipherRecord(): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		await (c$ as Conn).out.Mutex.Lock()
		const __goscriptDeferCallee14 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Conn).out.Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee14() })
		let [, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).writeRecordLocked(20, new Uint8Array([1]) as $.Slice<number>) : Conn.prototype.writeRecordLocked.call(c, 20, new Uint8Array([1]) as $.Slice<number>))
		return err
	}

	public async writeHandshakeRecord(msg: __goscript_common.handshakeMessage | null, transcript: __goscript_handshake_messages.transcriptHash | null): globalThis.Promise<[number, $.GoError]> {
		const c: Conn | $.VarRef<Conn> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		await (c$ as Conn).out.Mutex.Lock()
		const __goscriptDeferCallee15 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Conn).out.Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee15() })

		let __goscriptTuple42: any = await (msg !== null && (msg as any).__isVarRef !== true && (msg as any).__goValue === undefined ? (msg as Exclude<__goscript_common.handshakeMessage, null>) : $.pointerValue<Exclude<__goscript_common.handshakeMessage, null>>(msg)).marshal()
		let data: $.Slice<number> = __goscriptTuple42[0]
		let err = __goscriptTuple42[1]
		if (err != null) {
			return [0, err]
		}
		if (transcript != null) {
			await (transcript !== null && (transcript as any).__isVarRef !== true && (transcript as any).__goValue === undefined ? (transcript as Exclude<__goscript_handshake_messages.transcriptHash, null>) : $.pointerValue<Exclude<__goscript_handshake_messages.transcriptHash, null>>(transcript)).Write(data)
		}

		return await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).writeRecordLocked(22, data) : Conn.prototype.writeRecordLocked.call(c, 22, data))
	}

	public async writeRecordLocked(typ: __goscript_common.recordType, data: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const c: Conn | $.VarRef<Conn> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Conn = c == null ? $.pointerTarget<Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Conn>(c)
		if ((c$ as Conn).quic != null) {
			if (typ != 22) {
				return [0, errors.New("tls: internal error: sending non-handshake message to QUIC transport")]
			}
			void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).quicWriteCryptoData((c$ as Conn).out.level, data) : Conn.prototype.quicWriteCryptoData.call(c, (c$ as Conn).out.level, data))
			if (!(c$ as Conn).buffering) {
				{
					let [, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).flush() : Conn.prototype.flush.call(c))
					if (err != null) {
						return [0, err]
					}
				}
			}
			return [$.sliceLen(data), null]
		}

		let outBufPtr = $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>(await outBufPool.value.Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
		let outBuf: $.Slice<number> = $.pointerValue<$.Slice<number>>(outBufPtr)
		__defer.defer(() => { ((): void => {
			// You might be tempted to simplify this by just passing &outBuf to Put,
			// but that would make the local copy of the outBuf slice header escape
			// to the heap, causing an allocation. Instead, we keep around the
			// pointer to the slice header returned by Get, which is already on the
			// heap, and overwrite and return that.
			outBufPtr!.value = outBuf
			outBufPool.value.Put($.interfaceValue(outBufPtr, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
		})() })

		let n: number = 0
		while ($.sliceLen(data) > 0) {
			let m: number = $.sliceLen(data)
			{
				let maxPayload = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).maxPayloadSizeForWrite(typ) : Conn.prototype.maxPayloadSizeForWrite.call(c, typ))
				if (m > maxPayload) {
					m = maxPayload
				}
			}

			let __goscriptTuple43: any = sliceForAppend($.goSlice(outBuf, undefined, 0), 5)
			outBuf = __goscriptTuple43[1]
			$.sliceElems(outBuf!)[$.sliceSlot(outBuf!, 0)] = $.uint(typ, 8)
			let vers = (c$ as Conn).vers
			if (vers == 0) {
				// Some TLS servers fail if the record version is
				// greater than TLS 1.0 for the initial ClientHello.
				vers = 769
			} else {
				if (vers == 772) {
					// TLS 1.3 froze the record layer version to 1.2.
					// See RFC 8446, Section 5.1.
					vers = 771
				}
			}
			$.sliceElems(outBuf!)[$.sliceSlot(outBuf!, 1)] = $.uint($.uintShr(vers, 8, 16), 8)
			$.sliceElems(outBuf!)[$.sliceSlot(outBuf!, 2)] = $.uint(vers, 8)
			$.sliceElems(outBuf!)[$.sliceSlot(outBuf!, 3)] = $.uint(m >> 8, 8)
			$.sliceElems(outBuf!)[$.sliceSlot(outBuf!, 4)] = $.uint(m, 8)

			let err: $.GoError = null! as $.GoError
			let __goscriptTuple44: any = await (c$ as Conn).out.encrypt(outBuf, $.goSlice(data, undefined, m), __goscript_common.Config.prototype.rand.call((c$ as Conn).config))
			outBuf = __goscriptTuple44[0]
			err = __goscriptTuple44[1]
			if (err != null) {
				return [n, err]
			}
			{
				let [, __goscriptShadow22] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).write(outBuf) : Conn.prototype.write.call(c, outBuf))
				if (__goscriptShadow22 != null) {
					return [n, __goscriptShadow22]
				}
			}
			n = n + (m)
			data = $.goSlice(data, m, undefined)
		}

		if ((typ == 20) && ((c$ as Conn).vers != 772)) {
			{
				let err = (c$ as Conn).out.changeCipherSpec()
				if (err != null) {
					return [n, await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendAlertLocked($.uint($.mustTypeAssert<__goscript_alert.alert>(err, /* @__PURE__ */ $.basicType("uint8", "tls.alert")), 8)) : Conn.prototype.sendAlertLocked.call(c, $.uint($.mustTypeAssert<__goscript_alert.alert>(err, /* @__PURE__ */ $.basicType("uint8", "tls.alert")), 8)))]
				}
			}
		}

		return [n, null]
	}

	static __typeInfo = $.registerStructType(
		"tls.Conn",
		() => new Conn(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("CloseWrite", [], ["error"], true), $.methodSignature("ConnectionState", [], ["tls.ConnectionState"], true), $.methodSignature("Handshake", [], ["error"], true), $.methodSignature("HandshakeContext", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("LocalAddr", [], ["net.Addr"], true), $.methodSignature("NetConn", [], ["net.Conn"], true), $.methodSignature("OCSPResponse", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("RemoteAddr", [], ["net.Addr"], true), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("VerifyHostname", [["host", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("clientHandshake", [["ctx", "context.Context"]], [["err", "error"]], true), $.methodSignature("clientSessionCacheKey", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("closeNotify", [], ["error"], true), $.methodSignature("connectionStateLocked", [], ["tls.ConnectionState"], true), $.methodSignature("flush", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("getClientCertificate", [["cri", /* @__PURE__ */ $.pointerType("tls.CertificateRequestInfo")]], [/* @__PURE__ */ $.pointerType("tls.Certificate"), "error"], true), $.methodSignature("handleKeyUpdate", [["keyUpdate", /* @__PURE__ */ $.pointerType("tls.keyUpdateMsg")]], ["error"], true), $.methodSignature("handleNewSessionTicket", [["msg", /* @__PURE__ */ $.pointerType("tls.newSessionTicketMsgTLS13")]], ["error"], true), $.methodSignature("handlePostHandshakeMessage", [], ["error"], true), $.methodSignature("handleRenegotiation", [], ["error"], true), $.methodSignature("handshakeContext", [["ctx", "context.Context"]], [["ret", "error"]], true), $.methodSignature("loadSession", [["hello", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")]], [["session", /* @__PURE__ */ $.pointerType("tls.SessionState")], ["earlySecret", /* @__PURE__ */ $.pointerType("tls13.EarlySecret")], ["binderKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("makeClientHello", [], [/* @__PURE__ */ $.pointerType("tls.clientHelloMsg"), /* @__PURE__ */ $.pointerType("tls.keySharePrivateKeys"), /* @__PURE__ */ $.pointerType("tls.echClientContext"), "error"], true), $.methodSignature("maxPayloadSizeForWrite", [["typ", /* @__PURE__ */ $.basicType("uint8", "tls.recordType")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("newRecordHeaderError", [["conn", "net.Conn"], ["msg", /* @__PURE__ */ $.basicType("string")]], [["err", "tls.RecordHeaderError"]], true), $.methodSignature("pickTLSVersion", [["serverHello", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")]], ["error"], true), $.methodSignature("processCertsFromClient", [["certificate", "tls.Certificate"]], ["error"], true), $.methodSignature("processECHClientHello", [["outer", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")], ["echKeys", /* @__PURE__ */ $.sliceType("tls.EncryptedClientHelloKey")]], [/* @__PURE__ */ $.pointerType("tls.clientHelloMsg"), /* @__PURE__ */ $.pointerType("tls.echServerContext"), "error"], true), $.methodSignature("quicGetTransportParameters", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("quicHandshakeComplete", [], [], true), $.methodSignature("quicReadHandshakeBytes", [["n", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("quicRejectedEarlyData", [], [], true), $.methodSignature("quicResumeSession", [["session", /* @__PURE__ */ $.pointerType("tls.SessionState")]], ["error"], true), $.methodSignature("quicSetReadSecret", [["level", /* @__PURE__ */ $.basicType("int", "tls.QUICEncryptionLevel")], ["suite", /* @__PURE__ */ $.basicType("uint16")], ["secret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("quicSetTransportParameters", [["params", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("quicSetWriteSecret", [["level", /* @__PURE__ */ $.basicType("int", "tls.QUICEncryptionLevel")], ["suite", /* @__PURE__ */ $.basicType("uint16")], ["secret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("quicStoreSession", [["session", /* @__PURE__ */ $.pointerType("tls.SessionState")]], [], true), $.methodSignature("quicWaitForSignal", [], ["error"], true), $.methodSignature("quicWriteCryptoData", [["level", /* @__PURE__ */ $.basicType("int", "tls.QUICEncryptionLevel")], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("readChangeCipherSpec", [], ["error"], true), $.methodSignature("readClientHello", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("tls.clientHelloMsg"), /* @__PURE__ */ $.pointerType("tls.echServerContext"), "error"], true), $.methodSignature("readFromUntil", [["r", "io.Reader"], ["n", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("readHandshake", [["transcript", "tls.transcriptHash"]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("readHandshakeBytes", [["n", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("readRecord", [], ["error"], true), $.methodSignature("readRecordOrCCS", [["expectChangeCipherSpec", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("retryReadRecord", [["expectChangeCipherSpec", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("sendAlert", [["err", /* @__PURE__ */ $.basicType("uint8", "tls.alert")]], ["error"], true), $.methodSignature("sendAlertLocked", [["err", /* @__PURE__ */ $.basicType("uint8", "tls.alert")]], ["error"], true), $.methodSignature("sendSessionTicket", [["earlyData", /* @__PURE__ */ $.basicType("bool")], ["extra", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]], ["error"], true), $.methodSignature("serverHandshake", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("sessionState", [], [/* @__PURE__ */ $.pointerType("tls.SessionState")], true), $.methodSignature("setReadTrafficSecret", [["suite", /* @__PURE__ */ $.pointerType("tls.cipherSuiteTLS13")], ["level", /* @__PURE__ */ $.basicType("int", "tls.QUICEncryptionLevel")], ["secret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["locked", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("setWriteTrafficSecret", [["suite", /* @__PURE__ */ $.pointerType("tls.cipherSuiteTLS13")], ["level", /* @__PURE__ */ $.basicType("int", "tls.QUICEncryptionLevel")], ["secret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("unmarshalHandshakeMessage", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["transcript", "tls.transcriptHash"]], ["tls.handshakeMessage", "error"], true), $.methodSignature("verifyServerCertificate", [["certificates", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]], ["error"], true), $.methodSignature("write", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("writeChangeCipherRecord", [], ["error"], true), $.methodSignature("writeHandshakeRecord", [["msg", "tls.handshakeMessage"], ["transcript", "tls.transcriptHash"]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("writeRecordLocked", [["typ", /* @__PURE__ */ $.basicType("uint8", "tls.recordType")], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		Conn,
		() => [/* @__PURE__ */ $.structField("conn", "net.Conn", [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("isClient", /* @__PURE__ */ $.basicType("bool"), [1], 16, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("handshakeFn", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo), [2], 24, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("quic", /* @__PURE__ */ $.pointerType("tls.quicState"), [3], 32, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("isHandshakeComplete", "atomic.Bool", [4], 40, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("handshakeMutex", "sync.Mutex", [5], 44, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("handshakeErr", "error", [6], 56, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("vers", /* @__PURE__ */ $.basicType("uint16"), [7], 72, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("haveVers", /* @__PURE__ */ $.basicType("bool"), [8], 74, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("config", /* @__PURE__ */ $.pointerType("tls.Config"), [9], 80, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("handshakes", /* @__PURE__ */ $.basicType("int"), [10], 88, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("extMasterSecret", /* @__PURE__ */ $.basicType("bool"), [11], 96, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("didResume", /* @__PURE__ */ $.basicType("bool"), [12], 97, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("didHRR", /* @__PURE__ */ $.basicType("bool"), [13], 98, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("cipherSuite", /* @__PURE__ */ $.basicType("uint16"), [14], 100, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("curveID", /* @__PURE__ */ $.basicType("uint16", "tls.CurveID"), [15], 102, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("peerSigAlg", /* @__PURE__ */ $.basicType("uint16", "tls.SignatureScheme"), [16], 104, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ocspResponse", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [17], 112, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("scts", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [18], 136, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("peerCertificates", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate")), [19], 160, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("localCertificate", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [20], 184, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("verifiedChains", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate"))), [21], 208, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("serverName", /* @__PURE__ */ $.basicType("string"), [22], 232, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("secureRenegotiation", /* @__PURE__ */ $.basicType("bool"), [23], 248, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ekm", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo), [24], 256, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("resumptionSecret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [25], 264, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("echAccepted", /* @__PURE__ */ $.basicType("bool"), [26], 288, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ticketKeys", /* @__PURE__ */ $.sliceType("tls.ticketKey"), [27], 296, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("clientFinishedIsFirst", /* @__PURE__ */ $.basicType("bool"), [28], 320, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("closeNotifyErr", "error", [29], 328, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("closeNotifySent", /* @__PURE__ */ $.basicType("bool"), [30], 344, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("clientFinished", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 12), [31], 345, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("serverFinished", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 12), [32], 357, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("clientProtocol", /* @__PURE__ */ $.basicType("string"), [33], 376, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("in", "tls.halfConn", [34], 392, false, { key: "_in", pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("out", "tls.halfConn", [35], 544, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("rawInput", "bytes.Buffer", [36], 696, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("input", "bytes.Reader", [37], 736, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("hand", "bytes.Buffer", [38], 776, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("buffering", /* @__PURE__ */ $.basicType("bool"), [39], 816, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("sendBuf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [40], 824, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("bytesSent", /* @__PURE__ */ $.basicType("int64"), [41], 848, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("packetsSent", /* @__PURE__ */ $.basicType("int64"), [42], 856, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("retryCount", /* @__PURE__ */ $.basicType("int"), [43], 864, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("activeCall", "atomic.Int32", [44], 872, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("tmp", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16), [45], 876, false, { pkgPath: "crypto/tls" })]
	)
}

export class permanentError {
	public get err(): net.Error | null {
		return this._fields.err
	}

	public set err(value: net.Error | null) {
		this._fields.err = value
	}

	public _fields: {
		err: net.Error | null
	}

	constructor(init?: Partial<{err?: net.Error | null}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as net.Error | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): permanentError {
		return new permanentError(this, true)
	}

	public __goscriptAssign(source: permanentError): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "net.Error")
	}

	public async Error(): globalThis.Promise<string> {
		const e: permanentError | $.VarRef<permanentError> | null = this;
		return $.pointerValue<Exclude<net.Error, null>>($.pointerValue<permanentError>(e).err).Error()
	}

	public Temporary(): boolean {
		const e: permanentError | $.VarRef<permanentError> | null = this;
		return false
	}

	public async Timeout(): globalThis.Promise<boolean> {
		const e: permanentError | $.VarRef<permanentError> | null = this;
		return $.pointerValue<Exclude<net.Error, null>>($.pointerValue<permanentError>(e).err).Timeout()
	}

	public Unwrap(): $.GoError {
		const e: permanentError | $.VarRef<permanentError> | null = this;
		return ($.pointerValue<permanentError>(e).err as $.GoError)
	}

	static __typeInfo = $.registerStructType(
		"tls.permanentError",
		() => new permanentError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unwrap", [], ["error"], true)],
		permanentError,
		() => [/* @__PURE__ */ $.structField("err", "net.Error", [0], 0, false, { pkgPath: "crypto/tls" })]
	)
}

export class RecordHeaderError {
	// Msg contains a human readable string that describes the error.
	public get Msg(): string {
		return this._fields.Msg
	}

	public set Msg(value: string) {
		this._fields.Msg = value
	}

	// RecordHeader contains the five bytes of TLS record header that
	// triggered the error.
	public get RecordHeader(): Uint8Array {
		return this._fields.RecordHeader
	}

	public set RecordHeader(value: Uint8Array) {
		this._fields.RecordHeader = value
	}

	// Conn provides the underlying net.Conn in the case that a client
	// sent an initial handshake that didn't look like TLS.
	// It is nil if there's already been a handshake or a TLS alert has
	// been written to the connection.
	public get Conn(): net.Conn | null {
		return this._fields.Conn
	}

	public set Conn(value: net.Conn | null) {
		this._fields.Conn = value
	}

	public _fields: {
		Msg: string
		RecordHeader: Uint8Array
		Conn: net.Conn | null
	}

	constructor(init?: Partial<{Msg?: string, RecordHeader?: Uint8Array, Conn?: net.Conn | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Msg: init?.Msg ?? ("" as string),
			RecordHeader: init?.RecordHeader !== undefined ? $.cloneArrayValue(init.RecordHeader, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 5)) : $.arrayValue(new Uint8Array(5)),
			Conn: init?.Conn ?? (null! as net.Conn | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RecordHeaderError {
		return new RecordHeaderError(this, true)
	}

	public __goscriptAssign(source: RecordHeaderError): void {
		const target = this._fields
		const values = source._fields
		target.Msg = values.Msg
		target.RecordHeader = $.assignFieldValue(target.RecordHeader, values.RecordHeader, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 5))
		target.Conn = $.assignFieldValue(target.Conn, values.Conn, "net.Conn")
	}

	public Error(): string {
		const e = this;
		return $.concatString("tls: ", e.Msg)
	}

	static __typeInfo = $.registerStructType(
		"tls.RecordHeaderError",
		() => new RecordHeaderError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		RecordHeaderError,
		() => [/* @__PURE__ */ $.structField("Msg", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("RecordHeader", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 5), [1], 16, true), /* @__PURE__ */ $.structField("Conn", "net.Conn", [2], 24, true)]
	)
}

export const tcpMSSEstimate: number = 1208

export const recordSizeBoostThreshold: number = 131072

export function extractPadding(payload: $.Slice<number>): [number, number] {
	let toRemove: number = 0
	let good: number = 0
	if ($.sliceLen(payload) < 1) {
		return [0, 0]
	}

	let paddingLen = $.arrayIndex(payload!, $.sliceLen(payload) - 1)
	let t = $.uint($.uint64Sub($.uint($.sliceLen(payload) - 1, 64), $.uint(paddingLen, 64)), 64)
	// if len(payload) >= (paddingLen - 1) then the MSB of t is zero
	good = $.uint($.int($.uint($.uint64Xor(t, -1n), 64), 32) >> 31, 8)

	// The maximum possible padding length plus the actual length field
	let toCheck = 256
	// The length of the padded data is public, so we can use an if here
	if (toCheck > $.sliceLen(payload)) {
		toCheck = $.sliceLen(payload)
	}

	for (let __goscriptSliceWindow1 = $.sliceRange(payload), i = 0; i < toCheck; i++) {
		let __goscriptShadow23 = $.uint($.uint64Sub($.uint(paddingLen, 64), $.uint(i, 64)), 64)
		// if i <= paddingLen then the MSB of t is zero
		let mask = $.uint($.int($.uint($.uint64Xor(__goscriptShadow23, -1n), 64), 32) >> 31, 8)
		let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, (__goscriptSliceWindow1.length - 1) - i)] as number)
		good = good & ~(($.uint((mask & paddingLen) ^ (mask & b), 8)))
	}

	// We AND together the bits of good and replicate the result across
	// all the bits.
	good = good & ($.uint(((good << 4) & 0xff), 8))
	good = good & ($.uint(((good << 2) & 0xff), 8))
	good = good & ($.uint(((good << 1) & 0xff), 8))
	good = $.uint($.int(good, 8) >> 7, 8)

	// Zero the padding length on error. This ensures any unchecked bytes
	// are included in the MAC. Otherwise, an attacker that could
	// distinguish MAC failures from padding failures could mount an attack
	// similar to POODLE in SSL 3.0: given a good ciphertext that uses a
	// full block's worth of padding, replace the final block with another
	// block. If the MAC check passed but the padding check failed, the
	// last byte of that block decrypted to the block size.
	//
	// See also macAndPaddingGood logic below.
	paddingLen = paddingLen & (good)

	toRemove = $.int(paddingLen) + 1
	return [toRemove, good]
}

export function roundUp(a: number, b: number): number {
	return a + ((b - (a % b)) % b)
}

export function sliceForAppend(_in: $.Slice<number>, n: number): [$.Slice<number>, $.Slice<number>] {
	let head: $.Slice<number> = null! as $.Slice<number>
	let tail: $.Slice<number> = null! as $.Slice<number>
	{
		let total = $.sliceLen(_in) + n
		if ($.cap(_in) >= total) {
			head = $.goSlice(_in, undefined, total)
		} else {
			head = $.makeSlice<number>(total, undefined, "byte")
			$.copy(head, _in)
		}
	}
	tail = $.goSlice(head, $.sliceLen(_in), undefined)
	return [head, tail]
}

export let outBufPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue($.varRef<$.Slice<number>>(null! as $.Slice<number>), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_outBufPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(outBufPool.value, __goscriptValue)
}

export let errShutdown: $.GoError = errors.New("tls: protocol is shutdown")

export function __goscript_set_errShutdown(__goscriptValue: $.GoError): void {
	errShutdown = __goscriptValue
}

export let errEarlyCloseWrite: $.GoError = errors.New("tls: CloseWrite called before handshake complete")

export function __goscript_set_errEarlyCloseWrite(__goscriptValue: $.GoError): void {
	errEarlyCloseWrite = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: { type: "hash.Hash", zero: () => null, methods: {BlockSize: (receiver: any, ...args: any[]) => receiver.BlockSize(...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => receiver.Reset(...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => receiver.Size(...$.stripGenericTypeArgs(args)), Sum: (receiver: any, ...args: any[]) => receiver.Sum(...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => receiver.Write(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("uint8", "tls.alert"), zero: () => 0, methods: {Error: (receiver: any, ...args: any[]) => (__goscript_alert.alert_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_alert.alert_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])] }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({Error: (receiver: any, ...args: any[]) => (__goscript_alert.AlertError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= (/* @__PURE__ */ $.basicType("uint8", "tls.AlertError"))
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ([$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: "x509.UnknownAuthorityError", zero: () => new x509.UnknownAuthorityError(undefined, true), methods: {Error: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Error(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: "x509.CertificateInvalidError", zero: () => new x509.CertificateInvalidError(undefined, true), methods: {Error: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Error(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any
