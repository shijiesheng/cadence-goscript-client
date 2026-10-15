// Generated file based on cert_pool.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as sha256 from "@goscript/crypto/sha256/index.js"

import * as pem from "@goscript/encoding/pem/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as crypto from "@goscript/crypto/index.js"

import * as pkix from "@goscript/crypto/x509/pkix/index.js"

import * as asn1 from "@goscript/encoding/asn1/index.js"

import type * as io from "@goscript/io/index.js"

import * as big from "@goscript/math/big/index.js"

import * as net from "@goscript/net/index.js"

import * as url from "@goscript/net/url/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_oid from "./oid.gs.ts"

import * as __goscript_parser from "./parser.gs.ts"

import * as __goscript_root from "./root.gs.ts"

import * as __goscript_root_unix from "./root_unix.gs.ts"

import * as __goscript_verify from "./verify.gs.ts"

import * as __goscript_x509 from "./x509.gs.ts"

import * as __goscript_x509_string from "./x509_string.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/sha256/index.js"
import "@goscript/encoding/pem/index.js"
import "@goscript/sync/index.js"
import "@goscript/crypto/x509/pkix/index.js"
import "@goscript/encoding/asn1/index.js"
import "@goscript/math/big/index.js"
import "@goscript/net/index.js"
import "@goscript/net/url/index.js"
import "@goscript/time/index.js"
import "./oid.gs.ts"
import "./parser.gs.ts"
import "./root.gs.ts"
import "./root_unix.gs.ts"
import "./verify.gs.ts"
import "./x509.gs.ts"
import "./x509_string.gs.ts"

$.registerTypePackagePath("crypto/x509", ["x509.sum224", "x509.CertPool", "x509.lazyCert", "x509.potentialParent"])

export type sum224 = Uint8Array

$.registerNamedType("x509.sum224", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 28));

export class CertPool {
	public get byName(): globalThis.Map<string, $.Slice<number>> | null {
		return this._fields.byName
	}

	public set byName(value: globalThis.Map<string, $.Slice<number>> | null) {
		this._fields.byName = value
	}

	// lazyCerts contains funcs that return a certificate,
	// lazily parsing/decompressing it as needed.
	public get lazyCerts(): $.Slice<lazyCert> {
		return this._fields.lazyCerts
	}

	public set lazyCerts(value: $.Slice<lazyCert>) {
		this._fields.lazyCerts = value
	}

	// haveSum maps from sum224(cert.Raw) to true. It's used only
	// for AddCert duplicate detection, to avoid CertPool.contains
	// calls in the AddCert path (because the contains method can
	// call getCert and otherwise negate savings from lazy getCert
	// funcs).
	public get haveSum(): globalThis.Map<sum224, boolean> | null {
		return this._fields.haveSum
	}

	public set haveSum(value: globalThis.Map<sum224, boolean> | null) {
		this._fields.haveSum = value
	}

	// systemPool indicates whether this is a special pool derived from the
	// system roots. If it includes additional roots, it requires doing two
	// verifications, one using the roots provided by the caller, and one using
	// the system platform verifier.
	public get systemPool(): boolean {
		return this._fields.systemPool
	}

	public set systemPool(value: boolean) {
		this._fields.systemPool = value
	}

	public _fields: {
		byName: globalThis.Map<string, $.Slice<number>> | null
		lazyCerts: $.Slice<lazyCert>
		haveSum: globalThis.Map<sum224, boolean> | null
		systemPool: boolean
	}

	constructor(init?: Partial<{byName?: globalThis.Map<string, $.Slice<number>> | null, lazyCerts?: $.Slice<lazyCert>, haveSum?: globalThis.Map<sum224, boolean> | null, systemPool?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			byName: init?.byName ?? (null! as globalThis.Map<string, $.Slice<number>> | null),
			lazyCerts: init?.lazyCerts ?? (null! as $.Slice<lazyCert>),
			haveSum: init?.haveSum ?? (null! as globalThis.Map<sum224, boolean> | null),
			systemPool: init?.systemPool ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CertPool {
		return new CertPool(this, true)
	}

	public __goscriptAssign(source: CertPool): void {
		const target = this._fields
		const values = source._fields
		target.byName = values.byName
		target.lazyCerts = values.lazyCerts
		target.haveSum = values.haveSum
		target.systemPool = values.systemPool
	}

	public async AddCert(cert: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null): globalThis.Promise<void> {
		const s: CertPool | $.VarRef<CertPool> | null = this;
		const cert$: __goscript_x509.Certificate = cert == null ? $.pointerTarget<__goscript_x509.Certificate>(cert) : (cert as any).__isVarRef === true ? (cert as any).value : (cert as any).__goValue === undefined ? (cert as any) : $.pointerTarget<__goscript_x509.Certificate>(cert)
		if (cert == null) {
			$.panic("adding nil Certificate to CertPool")
		}
		CertPool.prototype.addCertFunc.call(s, $.cloneArrayValue(await sha256.Sum224((cert$ as __goscript_x509.Certificate).Raw), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 28)), $.bytesToString((cert$ as __goscript_x509.Certificate).RawSubject), $.functionValue((): [__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, $.GoError] => {
			return [cert, null]
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("x509.Certificate"), "error"] } as $.FunctionTypeInfo)), (null as ((_p0: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>) => $.GoError | globalThis.Promise<$.GoError>) | null))
	}

	public async AddCertWithConstraint(cert: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, constraint: ((_p0: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<void> {
		const s: CertPool | $.VarRef<CertPool> | null = this;
		const cert$: __goscript_x509.Certificate = cert == null ? $.pointerTarget<__goscript_x509.Certificate>(cert) : (cert as any).__isVarRef === true ? (cert as any).value : (cert as any).__goValue === undefined ? (cert as any) : $.pointerTarget<__goscript_x509.Certificate>(cert)
		if (cert == null) {
			$.panic("adding nil Certificate to CertPool")
		}
		CertPool.prototype.addCertFunc.call(s, $.cloneArrayValue(await sha256.Sum224((cert$ as __goscript_x509.Certificate).Raw), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 28)), $.bytesToString((cert$ as __goscript_x509.Certificate).RawSubject), $.functionValue((): [__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, $.GoError] => {
			return [cert, null]
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("x509.Certificate"), "error"] } as $.FunctionTypeInfo)), constraint)
	}

	public async AppendCertsFromPEM(pemCerts: $.Slice<number>): globalThis.Promise<boolean> {
		const s: CertPool | $.VarRef<CertPool> | null = this;
		let ok: boolean = false
		while ($.sliceLen(pemCerts) > 0) {
			let block: pem.Block | $.VarRef<pem.Block> | null = null! as pem.Block | $.VarRef<pem.Block> | null
			let __goscriptTuple0: any = pem.Decode(pemCerts)
			block = __goscriptTuple0[0]
			pemCerts = __goscriptTuple0[1]
			if (block == null) {
				break
			}
			if ((!$.stringEqual($.pointerValue<pem.Block>(block).Type, "CERTIFICATE")) || ($.len($.pointerValue<pem.Block>(block).Headers) != 0)) {
				continue
			}

			let certBytes: $.Slice<number> = $.pointerValue<pem.Block>(block).Bytes
			let __goscriptTuple1: any = await __goscript_parser.ParseCertificate(certBytes)
			let cert: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null = __goscriptTuple1[0]
			let err = __goscriptTuple1[1]
			let cert$: __goscript_x509.Certificate = cert == null ? $.pointerTarget<__goscript_x509.Certificate>(cert) : (cert as any).__isVarRef === true ? (cert as any).value : (cert as any).__goValue === undefined ? (cert as any) : $.pointerTarget<__goscript_x509.Certificate>(cert)
			if (err != null) {
				continue
			}
			let __goscriptShadow0: $.VarRef<{"Once": sync.Once, "v": __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null}> = $.varRef($.anonymousStructValue({"Once": $.markAsStructValue(new sync.Once()), "v": null}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Once", "sync.Once", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("v", /* @__PURE__ */ $.pointerType("x509.Certificate"), [1], 16, false, { pkgPath: "crypto/x509" })] }))
			CertPool.prototype.addCertFunc.call(s, $.cloneArrayValue(await sha256.Sum224((cert$ as __goscript_x509.Certificate).Raw), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 28)), $.bytesToString((cert$ as __goscript_x509.Certificate).RawSubject), $.functionValue(async (): globalThis.Promise<[__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, $.GoError]> => {
				await __goscriptShadow0.value.Once.Do($.functionValue(async (): globalThis.Promise<void> => {
					// This can't fail, as the same bytes already parsed above.
					let __goscriptTuple2: any = await __goscript_parser.ParseCertificate(certBytes)
					__goscriptShadow0.value.v = __goscriptTuple2[0]
					certBytes = null
				}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
				return [__goscriptShadow0.value.v, null]
			}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("x509.Certificate"), "error"] } as $.FunctionTypeInfo)), (null as ((_p0: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>) => $.GoError | globalThis.Promise<$.GoError>) | null))
			ok = true
		}

		return ok
	}

	public Clone(): CertPool | $.VarRef<CertPool> | null {
		const s: CertPool | $.VarRef<CertPool> | null = this;
		const s$: CertPool = s == null ? $.pointerTarget<CertPool>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<CertPool>(s)
		let p: CertPool | $.VarRef<CertPool> | null = new CertPool({byName: $.makeMap<string, $.Slice<number>>(), lazyCerts: $.makeSlice<lazyCert>($.sliceLen((s$ as CertPool).lazyCerts), undefined, undefined, () => new lazyCert(undefined, true)), haveSum: $.makeMap<sum224, boolean>(), systemPool: (s$ as CertPool).systemPool})
		let p$: CertPool = p == null ? $.pointerTarget<CertPool>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<CertPool>(p)
		for (let [k, v] of (s$ as CertPool).byName?.entries() ?? []) {
			let indexes: $.Slice<number> = $.makeSlice<number>($.sliceLen(v), undefined, "number")
			$.copy(indexes, v)
			$.mapSet((p$ as CertPool).byName, k, indexes)
		}
		for (let [k, __rangeValue] of (s$ as CertPool).haveSum?.entries() ?? []) {
			$.mapSet((p$ as CertPool).haveSum, $.cloneArrayValue(k, "x509.sum224"), true)
		}
		$.copy((p$ as CertPool).lazyCerts, (s$ as CertPool).lazyCerts)
		return p
	}

	public Equal(other: CertPool | $.VarRef<CertPool> | null): boolean {
		const s: CertPool | $.VarRef<CertPool> | null = this;
		const s$: CertPool = s == null ? $.pointerTarget<CertPool>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<CertPool>(s)
		const other$: CertPool = other == null ? $.pointerTarget<CertPool>(other) : (other as any).__isVarRef === true ? (other as any).value : (other as any).__goValue === undefined ? (other as any) : $.pointerTarget<CertPool>(other)
		if ((s == null) || (other == null)) {
			return $.pointerEqual(s, other)
		}
		if (((s$ as CertPool).systemPool != (other$ as CertPool).systemPool) || ($.len((s$ as CertPool).haveSum) != $.len((other$ as CertPool).haveSum))) {
			return false
		}
		for (const [h, __rangeValue] of (s$ as CertPool).haveSum?.entries() ?? []) {
			if (!$.mapGet<sum224, boolean, boolean>((other$ as CertPool).haveSum, $.cloneArrayValue(h, "x509.sum224"), false)[0]) {
				return false
			}
		}
		return true
	}

	public Subjects(): $.Slice<$.Slice<number>> {
		const s: CertPool | $.VarRef<CertPool> | null = this;
		let res: $.Slice<$.Slice<number>> = $.makeSlice<$.Slice<number>>((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as CertPool).len() : CertPool.prototype.len.call(s)))
		for (let __goscriptRangeTarget0 = $.pointerValue<CertPool>(s).lazyCerts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(res), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let lc = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as lazyCert)).clone();
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = lc.rawSubject
		}
		return res
	}

	public addCertFunc(rawSum224: sum224, rawSubject: string, getCert: (() => [__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, $.GoError] | globalThis.Promise<[__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, $.GoError]>) | null, constraint: ((_p0: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>) => $.GoError | globalThis.Promise<$.GoError>) | null): void {
		let s: CertPool | $.VarRef<CertPool> | null = this;
		const s$: CertPool = s == null ? $.pointerTarget<CertPool>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<CertPool>(s)
		if (getCert == null) {
			$.panic("getCert can't be nil")
		}

		// Check that the certificate isn't being added twice.
		if ($.mapGet<sum224, boolean, boolean>((s$ as CertPool).haveSum, $.cloneArrayValue(rawSum224, "x509.sum224"), false)[0]) {
			return
		}

		$.mapSet((s$ as CertPool).haveSum, $.cloneArrayValue(rawSum224, "x509.sum224"), true);
		;(s$ as CertPool).lazyCerts = $.appendOne((s$ as CertPool).lazyCerts, new lazyCert({rawSubject: $.stringToBytes(rawSubject), getCert: getCert, constraint: constraint}, true))
		$.mapSet((s$ as CertPool).byName, rawSubject, $.appendOne($.mapGet<string, $.Slice<number>, $.Slice<number>>((s$ as CertPool).byName, rawSubject, null)[0], $.sliceLen((s$ as CertPool).lazyCerts) - 1))
	}

	public async cert(n: number): globalThis.Promise<[__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, ((_p0: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>) => $.GoError | globalThis.Promise<$.GoError>) | null, $.GoError]> {
		const s: CertPool | $.VarRef<CertPool> | null = this;
		const s$: CertPool = s == null ? $.pointerTarget<CertPool>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<CertPool>(s)
		let __goscriptTuple3: any = await $.arrayIndex((s$ as CertPool).lazyCerts!, n).getCert!()
		let cert: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		return [cert, $.arrayIndex((s$ as CertPool).lazyCerts!, n).constraint, err]
	}

	public async contains(cert: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null): globalThis.Promise<boolean> {
		const s: CertPool | $.VarRef<CertPool> | null = this;
		if (s == null) {
			return false
		}
		return $.mapGet<sum224, boolean, boolean>($.pointerValue<CertPool>(s).haveSum, $.cloneArrayValue(await sha256.Sum224($.pointerValue<__goscript_x509.Certificate>(cert).Raw), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 28)), false)[0]
	}

	public async findPotentialParents(cert: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null): globalThis.Promise<$.Slice<potentialParent>> {
		const s: CertPool | $.VarRef<CertPool> | null = this;
		const cert$: __goscript_x509.Certificate = cert == null ? $.pointerTarget<__goscript_x509.Certificate>(cert) : (cert as any).__isVarRef === true ? (cert as any).value : (cert as any).__goValue === undefined ? (cert as any) : $.pointerTarget<__goscript_x509.Certificate>(cert)
		if (s == null) {
			return null
		}

		// consider all candidates where cert.Issuer matches cert.Subject.
		// when picking possible candidates the list is built in the order
		// of match plausibility as to save cycles in buildChains:
		//   AKID and SKID match
		//   AKID present, SKID missing / AKID missing, SKID present
		//   AKID and SKID don't match
		let matchingKeyID: $.Slice<potentialParent> = null! as $.Slice<potentialParent>
		let oneKeyID: $.Slice<potentialParent> = null! as $.Slice<potentialParent>
		let mismatchKeyID: $.Slice<potentialParent> = null! as $.Slice<potentialParent>
		for (let __goscriptRangeTarget1 = $.mapGet<string, $.Slice<number>, $.Slice<number>>($.pointerValue<CertPool>(s).byName, $.bytesToString((cert$ as __goscript_x509.Certificate).RawIssuer), null)[0], __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let c = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number)
			let __goscriptTuple4: any = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as CertPool).cert(c) : CertPool.prototype.cert.call(s, c))
			let candidate: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null = __goscriptTuple4[0]
			let constraint: ((_p0: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>) => $.GoError | globalThis.Promise<$.GoError>) | null = __goscriptTuple4[1]
			let err = __goscriptTuple4[2]
			let candidate$: __goscript_x509.Certificate = candidate == null ? $.pointerTarget<__goscript_x509.Certificate>(candidate) : (candidate as any).__isVarRef === true ? (candidate as any).value : (candidate as any).__goValue === undefined ? (candidate as any) : $.pointerTarget<__goscript_x509.Certificate>(candidate)
			if (err != null) {
				continue
			}
			let kidMatch = bytes.Equal((candidate$ as __goscript_x509.Certificate).SubjectKeyId, (cert$ as __goscript_x509.Certificate).AuthorityKeyId)
			switch ((true as boolean)) {
				case kidMatch:
				{
					matchingKeyID = $.appendOne(matchingKeyID, new potentialParent({cert: candidate, constraint: constraint}, true))
					break
				}
				case (($.sliceLen((candidate$ as __goscript_x509.Certificate).SubjectKeyId) == 0) && ($.sliceLen((cert$ as __goscript_x509.Certificate).AuthorityKeyId) > 0)) || (($.sliceLen((candidate$ as __goscript_x509.Certificate).SubjectKeyId) > 0) && ($.sliceLen((cert$ as __goscript_x509.Certificate).AuthorityKeyId) == 0)):
				{
					oneKeyID = $.appendOne(oneKeyID, new potentialParent({cert: candidate, constraint: constraint}, true))
					break
				}
				default:
				{
					mismatchKeyID = $.appendOne(mismatchKeyID, new potentialParent({cert: candidate, constraint: constraint}, true))
					break
				}
			}
		}

		let found = ($.sliceLen(matchingKeyID) + $.sliceLen(oneKeyID)) + $.sliceLen(mismatchKeyID)
		if (found == 0) {
			return null
		}
		let candidates: $.Slice<potentialParent> = $.makeSlice<potentialParent>(0, found, undefined, () => new potentialParent(undefined, true))
		candidates = $.appendSlice(candidates, matchingKeyID)
		candidates = $.appendSlice(candidates, oneKeyID)
		candidates = $.appendSlice(candidates, mismatchKeyID)
		return candidates
	}

	public len(): number {
		const s: CertPool | $.VarRef<CertPool> | null = this;
		if (s == null) {
			return 0
		}
		return $.sliceLen($.pointerValue<CertPool>(s).lazyCerts)
	}

	static __typeInfo = $.registerStructType(
		"x509.CertPool",
		() => new CertPool(),
		() => [$.methodSignature("AddCert", [["cert", /* @__PURE__ */ $.pointerType("x509.Certificate")]], [], true), $.methodSignature("AddCertWithConstraint", [["cert", /* @__PURE__ */ $.pointerType("x509.Certificate")], ["constraint", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate"))], results: ["error"] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("AppendCertsFromPEM", [["pemCerts", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Clone", [], [/* @__PURE__ */ $.pointerType("x509.CertPool")], true), $.methodSignature("Equal", [["other", /* @__PURE__ */ $.pointerType("x509.CertPool")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Subjects", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))], true), $.methodSignature("addCertFunc", [["rawSum224", "x509.sum224"], ["rawSubject", /* @__PURE__ */ $.basicType("string")], ["getCert", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("x509.Certificate"), "error"] } as $.FunctionTypeInfo)], ["constraint", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate"))], results: ["error"] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("cert", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("x509.Certificate"), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate"))], results: ["error"] } as $.FunctionTypeInfo), "error"], true), $.methodSignature("contains", [["cert", /* @__PURE__ */ $.pointerType("x509.Certificate")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("findPotentialParents", [["cert", /* @__PURE__ */ $.pointerType("x509.Certificate")]], [/* @__PURE__ */ $.sliceType("x509.potentialParent")], true), $.methodSignature("len", [], [/* @__PURE__ */ $.basicType("int")], true)],
		CertPool,
		() => [/* @__PURE__ */ $.structField("byName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("lazyCerts", /* @__PURE__ */ $.sliceType("x509.lazyCert"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("haveSum", /* @__PURE__ */ $.mapType("x509.sum224", /* @__PURE__ */ $.basicType("bool")), [2], 32, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("systemPool", /* @__PURE__ */ $.basicType("bool"), [3], 40, false, { pkgPath: "crypto/x509" })]
	)
}

export class lazyCert {
	// rawSubject is the Certificate.RawSubject value.
	// It's the same as the CertPool.byName key, but in []byte
	// form to make CertPool.Subjects (as used by crypto/tls) do
	// fewer allocations.
	public get rawSubject(): $.Slice<number> {
		return this._fields.rawSubject
	}

	public set rawSubject(value: $.Slice<number>) {
		this._fields.rawSubject = value
	}

	// constraint is a function to run against a chain when it is a candidate to
	// be added to the chain. This allows adding arbitrary constraints that are
	// not specified in the certificate itself.
	public get constraint(): ((_p0: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.constraint
	}

	public set constraint(value: ((_p0: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.constraint = value
	}

	// getCert returns the certificate.
	//
	// It is not meant to do network operations or anything else
	// where a failure is likely; the func is meant to lazily
	// parse/decompress data that is already known to be good. The
	// error in the signature primarily is meant for use in the
	// case where a cert file existed on local disk when the program
	// started up is deleted later before it's read.
	public get getCert(): (() => [__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, $.GoError] | globalThis.Promise<[__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, $.GoError]>) | null {
		return this._fields.getCert
	}

	public set getCert(value: (() => [__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, $.GoError] | globalThis.Promise<[__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, $.GoError]>) | null) {
		this._fields.getCert = value
	}

	public _fields: {
		rawSubject: $.Slice<number>
		constraint: ((_p0: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>) => $.GoError | globalThis.Promise<$.GoError>) | null
		getCert: (() => [__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, $.GoError] | globalThis.Promise<[__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, $.GoError]>) | null
	}

	constructor(init?: Partial<{rawSubject?: $.Slice<number>, constraint?: ((_p0: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>) => $.GoError | globalThis.Promise<$.GoError>) | null, getCert?: (() => [__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, $.GoError] | globalThis.Promise<[__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, $.GoError]>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			rawSubject: init?.rawSubject ?? (null! as $.Slice<number>),
			constraint: init?.constraint ?? (null! as ((_p0: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>) => $.GoError | globalThis.Promise<$.GoError>) | null),
			getCert: init?.getCert ?? (null! as (() => [__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, $.GoError] | globalThis.Promise<[__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, $.GoError]>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lazyCert {
		return new lazyCert(this, true)
	}

	public __goscriptAssign(source: lazyCert): void {
		const target = this._fields
		const values = source._fields
		target.rawSubject = values.rawSubject
		target.constraint = values.constraint
		target.getCert = values.getCert
	}

	static __typeInfo = $.registerStructType(
		"x509.lazyCert",
		() => new lazyCert(),
		() => [],
		lazyCert,
		() => [/* @__PURE__ */ $.structField("rawSubject", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("constraint", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate"))], results: ["error"] } as $.FunctionTypeInfo), [1], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("getCert", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("x509.Certificate"), "error"] } as $.FunctionTypeInfo), [2], 32, false, { pkgPath: "crypto/x509" })]
	)
}

export class potentialParent {
	public get cert(): __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null {
		return this._fields.cert
	}

	public set cert(value: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null) {
		this._fields.cert = value
	}

	public get constraint(): ((_p0: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.constraint
	}

	public set constraint(value: ((_p0: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.constraint = value
	}

	public _fields: {
		cert: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null
		constraint: ((_p0: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>) => $.GoError | globalThis.Promise<$.GoError>) | null
	}

	constructor(init?: Partial<{cert?: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, constraint?: ((_p0: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>) => $.GoError | globalThis.Promise<$.GoError>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			cert: init?.cert ?? (null! as __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null),
			constraint: init?.constraint ?? (null! as ((_p0: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>) => $.GoError | globalThis.Promise<$.GoError>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): potentialParent {
		return new potentialParent(this, true)
	}

	public __goscriptAssign(source: potentialParent): void {
		const target = this._fields
		const values = source._fields
		target.cert = values.cert
		target.constraint = values.constraint
	}

	static __typeInfo = $.registerStructType(
		"x509.potentialParent",
		() => new potentialParent(),
		() => [],
		potentialParent,
		() => [/* @__PURE__ */ $.structField("cert", /* @__PURE__ */ $.pointerType("x509.Certificate"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("constraint", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate"))], results: ["error"] } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "crypto/x509" })]
	)
}

export function NewCertPool(): CertPool | $.VarRef<CertPool> | null {
	return new CertPool({byName: $.makeMap<string, $.Slice<number>>(), haveSum: $.makeMap<sum224, boolean>()})
}

export async function SystemCertPool(): globalThis.Promise<[CertPool | $.VarRef<CertPool> | null, $.GoError]> {
	{
		let sysRoots: CertPool | $.VarRef<CertPool> | null = await __goscript_root.systemRootsPool()
		if (sysRoots != null) {
			return [(sysRoots !== null && (sysRoots as any).__isVarRef !== true && (sysRoots as any).__goValue === undefined ? ((sysRoots as any) as CertPool).Clone() : CertPool.prototype.Clone.call(sysRoots)), null]
		}
	}

	return __goscript_root.loadSystemRoots()
}
