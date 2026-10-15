// Generated file based on verify.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as pkix from "@goscript/crypto/x509/pkix/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as iter from "@goscript/iter/index.js"

import * as maps from "@goscript/maps/index.js"

import * as net from "@goscript/net/index.js"

import * as netip from "@goscript/net/netip/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as asn1 from "@goscript/encoding/asn1/index.js"

import type * as io from "@goscript/io/index.js"

import * as big from "@goscript/math/big/index.js"

import * as url from "@goscript/net/url/index.js"

import * as __goscript_cert_pool from "./cert_pool.gs.ts"

import * as __goscript_constraints from "./constraints.gs.ts"

import * as __goscript_oid from "./oid.gs.ts"

import * as __goscript_parser from "./parser.gs.ts"

import * as __goscript_root from "./root.gs.ts"

import * as __goscript_root_unix from "./root_unix.gs.ts"

import * as __goscript_x509 from "./x509.gs.ts"

import * as __goscript_x509_string from "./x509_string.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/index.js"
import "@goscript/crypto/x509/pkix/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/iter/index.js"
import "@goscript/maps/index.js"
import "@goscript/net/index.js"
import "@goscript/net/netip/index.js"
import "@goscript/runtime/index.js"
import "@goscript/slices/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/encoding/asn1/index.js"
import "@goscript/math/big/index.js"
import "@goscript/net/url/index.js"
import "./cert_pool.gs.ts"
import "./constraints.gs.ts"
import "./oid.gs.ts"
import "./parser.gs.ts"
import "./root.gs.ts"
import "./root_unix.gs.ts"
import "./x509.gs.ts"
import "./x509_string.gs.ts"

$.registerTypePackagePath("crypto/x509", ["x509.InvalidReason", "x509.CertificateInvalidError", "x509.HostnameError", "x509.UnknownAuthorityError", "x509.SystemRootsError", "x509.VerifyOptions", "x509.rfc2821Mailbox", "x509.pubKeyEqual", "x509.policyGraphNode", "x509.policyGraph"])

export type InvalidReason = number

export class CertificateInvalidError {
	public get Cert(): __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null {
		return this._fields.Cert
	}

	public set Cert(value: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null) {
		this._fields.Cert = value
	}

	public get Reason(): InvalidReason {
		return this._fields.Reason
	}

	public set Reason(value: InvalidReason) {
		this._fields.Reason = value
	}

	public get Detail(): string {
		return this._fields.Detail
	}

	public set Detail(value: string) {
		this._fields.Detail = value
	}

	public _fields: {
		Cert: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null
		Reason: InvalidReason
		Detail: string
	}

	constructor(init?: Partial<{Cert?: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, Reason?: InvalidReason, Detail?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Cert: init?.Cert ?? (null! as __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null),
			Reason: init?.Reason ?? (0 as InvalidReason),
			Detail: init?.Detail ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CertificateInvalidError {
		return new CertificateInvalidError(this, true)
	}

	public __goscriptAssign(source: CertificateInvalidError): void {
		const target = this._fields
		const values = source._fields
		target.Cert = values.Cert
		target.Reason = values.Reason
		target.Detail = values.Detail
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		switch (e.Reason) {
			case 0:
			{
				return "x509: certificate is not authorized to sign other certificates"
				break
			}
			case 1:
			{
				return $.concatString("x509: certificate has expired or is not yet valid: ", e.Detail)
				break
			}
			case 2:
			{
				return $.concatString("x509: a root or intermediate certificate is not authorized to sign for this name: ", e.Detail)
				break
			}
			case 9:
			{
				return $.concatString("x509: a root or intermediate certificate is not authorized for an extended key usage: ", e.Detail)
				break
			}
			case 3:
			{
				return "x509: too many intermediates for path length constraint"
				break
			}
			case 4:
			{
				return "x509: certificate specifies an incompatible key usage"
				break
			}
			case 5:
			{
				return "x509: issuer name does not match subject from issuing certificate"
				break
			}
			case 6:
			{
				return "x509: issuer has name constraints but leaf doesn't have a SAN extension"
				break
			}
			case 7:
			{
				return $.concatString("x509: issuer has name constraints but leaf contains unknown or unconstrained name: ", e.Detail)
				break
			}
			case 10:
			{
				let s = "x509: no valid chains built"
				if (!$.stringEqual(e.Detail, "")) {
					s = await fmt.Sprintf("%s: %s", s, e.Detail)
				}
				return s
				break
			}
		}
		return "x509: unknown error"
	}

	static __typeInfo = $.registerStructType(
		"x509.CertificateInvalidError",
		() => new CertificateInvalidError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		CertificateInvalidError,
		() => [/* @__PURE__ */ $.structField("Cert", /* @__PURE__ */ $.pointerType("x509.Certificate"), [0], 0, true), /* @__PURE__ */ $.structField("Reason", /* @__PURE__ */ $.basicType("int", "x509.InvalidReason"), [1], 8, true), /* @__PURE__ */ $.structField("Detail", /* @__PURE__ */ $.basicType("string"), [2], 16, true)]
	)
}

export class HostnameError {
	public get Certificate(): __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null {
		return this._fields.Certificate
	}

	public set Certificate(value: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null) {
		this._fields.Certificate = value
	}

	public get Host(): string {
		return this._fields.Host
	}

	public set Host(value: string) {
		this._fields.Host = value
	}

	public _fields: {
		Certificate: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null
		Host: string
	}

	constructor(init?: Partial<{Certificate?: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, Host?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Certificate: init?.Certificate ?? (null! as __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null),
			Host: init?.Host ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HostnameError {
		return new HostnameError(this, true)
	}

	public __goscriptAssign(source: HostnameError): void {
		const target = this._fields
		const values = source._fields
		target.Certificate = values.Certificate
		target.Host = values.Host
	}

	public async Error(): globalThis.Promise<string> {
		const h = this;
		let c: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null = h.Certificate
		let c$: __goscript_x509.Certificate = c == null ? $.pointerTarget<__goscript_x509.Certificate>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_x509.Certificate>(c)
		let maxNamesIncluded = 100

		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_x509.Certificate).hasSANExtension() : __goscript_x509.Certificate.prototype.hasSANExtension.call(c)) && matchHostnames((c$ as __goscript_x509.Certificate).Subject.CommonName, splitHostname(h.Host))) {
			return "x509: certificate relies on legacy Common Name field, use SANs instead"
		}

		let valid: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		{
			let ip: net.IP = (net.ParseIP(h.Host) as net.IP)
			if (ip != null) {
				// Trying to validate an IP
				if ($.sliceLen((c$ as __goscript_x509.Certificate).IPAddresses) == 0) {
					return $.concatString(($.concatString("x509: cannot validate certificate for ", h.Host)), " because it doesn't contain any IP SANs")
				}
				if ($.sliceLen((c$ as __goscript_x509.Certificate).IPAddresses) >= maxNamesIncluded) {
					return fmt.Sprintf("x509: certificate is valid for %d IP SANs, but none matched %s", $.basicInterfaceValue($.sliceLen((c$ as __goscript_x509.Certificate).IPAddresses), "int"), h.Host)
				}
				for (let __goscriptRangeTarget0 = (c$ as __goscript_x509.Certificate).IPAddresses, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
					let san = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as net.IP) as net.IP)
					if (valid.value.Len() > 0) {
						valid.value.WriteString(", ")
					}
					valid.value.WriteString(net.IP_String(san))
				}
			} else {
				if ($.sliceLen((c$ as __goscript_x509.Certificate).DNSNames) >= maxNamesIncluded) {
					return fmt.Sprintf("x509: certificate is valid for %d names, but none matched %s", $.basicInterfaceValue($.sliceLen((c$ as __goscript_x509.Certificate).DNSNames), "int"), h.Host)
				}
				valid.value.WriteString(strings.Join((c$ as __goscript_x509.Certificate).DNSNames, ", "))
			}
		}

		if (valid.value.Len() == 0) {
			return $.concatString("x509: certificate is not valid for any names, but wanted to match ", h.Host)
		}
		return $.concatString(($.concatString(($.concatString("x509: certificate is valid for ", valid.value.String())), ", not ")), h.Host)
	}

	static __typeInfo = $.registerStructType(
		"x509.HostnameError",
		() => new HostnameError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		HostnameError,
		() => [/* @__PURE__ */ $.structField("Certificate", /* @__PURE__ */ $.pointerType("x509.Certificate"), [0], 0, true), /* @__PURE__ */ $.structField("Host", /* @__PURE__ */ $.basicType("string"), [1], 8, true)]
	)
}

export class UnknownAuthorityError {
	public get Cert(): __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null {
		return this._fields.Cert
	}

	public set Cert(value: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null) {
		this._fields.Cert = value
	}

	// hintErr contains an error that may be helpful in determining why an
	// authority wasn't found.
	public get hintErr(): $.GoError {
		return this._fields.hintErr
	}

	public set hintErr(value: $.GoError) {
		this._fields.hintErr = value
	}

	// hintCert contains a possible authority certificate that was rejected
	// because of the error in hintErr.
	public get hintCert(): __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null {
		return this._fields.hintCert
	}

	public set hintCert(value: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null) {
		this._fields.hintCert = value
	}

	public _fields: {
		Cert: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null
		hintErr: $.GoError
		hintCert: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null
	}

	constructor(init?: Partial<{Cert?: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, hintErr?: $.GoError, hintCert?: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Cert: init?.Cert ?? (null! as __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null),
			hintErr: init?.hintErr ?? (null! as $.GoError),
			hintCert: init?.hintCert ?? (null! as __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UnknownAuthorityError {
		return new UnknownAuthorityError(this, true)
	}

	public __goscriptAssign(source: UnknownAuthorityError): void {
		const target = this._fields
		const values = source._fields
		target.Cert = values.Cert
		target.hintErr = $.assignFieldValue(target.hintErr, values.hintErr, "error")
		target.hintCert = values.hintCert
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		let s = "x509: certificate signed by unknown authority"
		if (e.hintErr != null) {
			let certName = $.pointerValue<__goscript_x509.Certificate>(e.hintCert).Subject.CommonName
			if ($.stringLen(certName) == 0) {
				if ($.sliceLen($.pointerValue<__goscript_x509.Certificate>(e.hintCert).Subject.Organization) > 0) {
					certName = $.arrayIndex($.pointerValue<__goscript_x509.Certificate>(e.hintCert).Subject.Organization!, 0)
				} else {
					certName = $.concatString("serial:", await big.Int.prototype.String.call($.pointerValue<__goscript_x509.Certificate>(e.hintCert).SerialNumber))
				}
			}
			s = $.concatString(s, await fmt.Sprintf(" (possibly because of %q while trying to verify candidate authority certificate %q)", (e.hintErr as any), certName))
		}
		return s
	}

	static __typeInfo = $.registerStructType(
		"x509.UnknownAuthorityError",
		() => new UnknownAuthorityError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		UnknownAuthorityError,
		() => [/* @__PURE__ */ $.structField("Cert", /* @__PURE__ */ $.pointerType("x509.Certificate"), [0], 0, true), /* @__PURE__ */ $.structField("hintErr", "error", [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hintCert", /* @__PURE__ */ $.pointerType("x509.Certificate"), [2], 24, false, { pkgPath: "crypto/x509" })]
	)
}

export class SystemRootsError {
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		Err: $.GoError
	}

	constructor(init?: Partial<{Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SystemRootsError {
		return new SystemRootsError(this, true)
	}

	public __goscriptAssign(source: SystemRootsError): void {
		const target = this._fields
		const values = source._fields
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const se = this;
		let msg = "x509: failed to load system roots and no roots provided"
		if (se.Err != null) {
			return $.concatString(($.concatString(msg, "; ")), (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>(se.Err).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		return msg
	}

	public Unwrap(): $.GoError {
		const se = this;
		return se.Err
	}

	static __typeInfo = $.registerStructType(
		"x509.SystemRootsError",
		() => new SystemRootsError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Unwrap", [], ["error"])],
		SystemRootsError,
		() => [/* @__PURE__ */ $.structField("Err", "error", [0], 0, true)]
	)
}

export class VerifyOptions {
	// DNSName, if set, is checked against the leaf certificate with
	// Certificate.VerifyHostname or the platform verifier.
	public get DNSName(): string {
		return this._fields.DNSName
	}

	public set DNSName(value: string) {
		this._fields.DNSName = value
	}

	// Intermediates is an optional pool of certificates that are not trust
	// anchors, but can be used to form a chain from the leaf certificate to a
	// root certificate.
	public get Intermediates(): __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null {
		return this._fields.Intermediates
	}

	public set Intermediates(value: __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null) {
		this._fields.Intermediates = value
	}

	// Roots is the set of trusted root certificates the leaf certificate needs
	// to chain up to. If nil, the system roots or the platform verifier are used.
	public get Roots(): __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null {
		return this._fields.Roots
	}

	public set Roots(value: __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null) {
		this._fields.Roots = value
	}

	// CurrentTime is used to check the validity of all certificates in the
	// chain. If zero, the current time is used.
	public get CurrentTime(): time.Time {
		return this._fields.CurrentTime
	}

	public set CurrentTime(value: time.Time) {
		this._fields.CurrentTime = value
	}

	// KeyUsages specifies which Extended Key Usage values are acceptable. A
	// chain is accepted if it allows any of the listed values. An empty list
	// means ExtKeyUsageServerAuth. To accept any key usage, include ExtKeyUsageAny.
	public get KeyUsages(): $.Slice<__goscript_x509.ExtKeyUsage> {
		return this._fields.KeyUsages
	}

	public set KeyUsages(value: $.Slice<__goscript_x509.ExtKeyUsage>) {
		this._fields.KeyUsages = value
	}

	// MaxConstraintComparisions is the maximum number of comparisons to
	// perform when checking a given certificate's name constraints. If
	// zero, a sensible default is used. This limit prevents pathological
	// certificates from consuming excessive amounts of CPU time when
	// validating. It does not apply to the platform verifier.
	public get MaxConstraintComparisions(): number {
		return this._fields.MaxConstraintComparisions
	}

	public set MaxConstraintComparisions(value: number) {
		this._fields.MaxConstraintComparisions = value
	}

	// CertificatePolicies specifies which certificate policy OIDs are
	// acceptable during policy validation. An empty CertificatePolices
	// field implies any valid policy is acceptable.
	public get CertificatePolicies(): $.Slice<__goscript_oid.OID> {
		return this._fields.CertificatePolicies
	}

	public set CertificatePolicies(value: $.Slice<__goscript_oid.OID>) {
		this._fields.CertificatePolicies = value
	}

	// inhibitPolicyMapping indicates if policy mapping should be allowed
	// during path validation.
	public get inhibitPolicyMapping(): boolean {
		return this._fields.inhibitPolicyMapping
	}

	public set inhibitPolicyMapping(value: boolean) {
		this._fields.inhibitPolicyMapping = value
	}

	// requireExplicitPolicy indidicates if explicit policies must be present
	// for each certificate being validated.
	public get requireExplicitPolicy(): boolean {
		return this._fields.requireExplicitPolicy
	}

	public set requireExplicitPolicy(value: boolean) {
		this._fields.requireExplicitPolicy = value
	}

	// inhibitAnyPolicy indicates if the anyPolicy policy should be
	// processed if present in a certificate being validated.
	public get inhibitAnyPolicy(): boolean {
		return this._fields.inhibitAnyPolicy
	}

	public set inhibitAnyPolicy(value: boolean) {
		this._fields.inhibitAnyPolicy = value
	}

	public _fields: {
		DNSName: string
		Intermediates: __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null
		Roots: __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null
		CurrentTime: time.Time
		KeyUsages: $.Slice<__goscript_x509.ExtKeyUsage>
		MaxConstraintComparisions: number
		CertificatePolicies: $.Slice<__goscript_oid.OID>
		inhibitPolicyMapping: boolean
		requireExplicitPolicy: boolean
		inhibitAnyPolicy: boolean
	}

	constructor(init?: Partial<{DNSName?: string, Intermediates?: __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null, Roots?: __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null, CurrentTime?: time.Time, KeyUsages?: $.Slice<__goscript_x509.ExtKeyUsage>, MaxConstraintComparisions?: number, CertificatePolicies?: $.Slice<__goscript_oid.OID>, inhibitPolicyMapping?: boolean, requireExplicitPolicy?: boolean, inhibitAnyPolicy?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			DNSName: init?.DNSName ?? ("" as string),
			Intermediates: init?.Intermediates ?? (null! as __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null),
			Roots: init?.Roots ?? (null! as __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null),
			CurrentTime: init?.CurrentTime ? $.markAsStructValue($.cloneStructValue(init.CurrentTime)) : $.markAsStructValue(new time.Time()),
			KeyUsages: init?.KeyUsages ?? (null! as $.Slice<__goscript_x509.ExtKeyUsage>),
			MaxConstraintComparisions: init?.MaxConstraintComparisions ?? (0 as number),
			CertificatePolicies: init?.CertificatePolicies ?? (null! as $.Slice<__goscript_oid.OID>),
			inhibitPolicyMapping: init?.inhibitPolicyMapping ?? (false as boolean),
			requireExplicitPolicy: init?.requireExplicitPolicy ?? (false as boolean),
			inhibitAnyPolicy: init?.inhibitAnyPolicy ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): VerifyOptions {
		return new VerifyOptions(this, true)
	}

	public __goscriptAssign(source: VerifyOptions): void {
		const target = this._fields
		const values = source._fields
		target.DNSName = values.DNSName
		target.Intermediates = values.Intermediates
		target.Roots = values.Roots
		$.assignStruct(target.CurrentTime, values.CurrentTime)
		target.KeyUsages = values.KeyUsages
		target.MaxConstraintComparisions = values.MaxConstraintComparisions
		target.CertificatePolicies = values.CertificatePolicies
		target.inhibitPolicyMapping = values.inhibitPolicyMapping
		target.requireExplicitPolicy = values.requireExplicitPolicy
		target.inhibitAnyPolicy = values.inhibitAnyPolicy
	}

	static __typeInfo = $.registerStructType(
		"x509.VerifyOptions",
		() => new VerifyOptions(),
		() => [],
		VerifyOptions,
		() => [/* @__PURE__ */ $.structField("DNSName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Intermediates", /* @__PURE__ */ $.pointerType("x509.CertPool"), [1], 16, true), /* @__PURE__ */ $.structField("Roots", /* @__PURE__ */ $.pointerType("x509.CertPool"), [2], 24, true), /* @__PURE__ */ $.structField("CurrentTime", "time.Time", [3], 32, true), /* @__PURE__ */ $.structField("KeyUsages", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int", "x509.ExtKeyUsage")), [4], 56, true), /* @__PURE__ */ $.structField("MaxConstraintComparisions", /* @__PURE__ */ $.basicType("int"), [5], 80, true), /* @__PURE__ */ $.structField("CertificatePolicies", /* @__PURE__ */ $.sliceType("x509.OID"), [6], 88, true), /* @__PURE__ */ $.structField("inhibitPolicyMapping", /* @__PURE__ */ $.basicType("bool"), [7], 112, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("requireExplicitPolicy", /* @__PURE__ */ $.basicType("bool"), [8], 113, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("inhibitAnyPolicy", /* @__PURE__ */ $.basicType("bool"), [9], 114, false, { pkgPath: "crypto/x509" })]
	)
}

export class rfc2821Mailbox {
	public get local(): string {
		return this._fields.local
	}

	public set local(value: string) {
		this._fields.local = value
	}

	public get domain(): string {
		return this._fields.domain
	}

	public set domain(value: string) {
		this._fields.domain = value
	}

	public _fields: {
		local: string
		domain: string
	}

	constructor(init?: Partial<{local?: string, domain?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			local: init?.local ?? ("" as string),
			domain: init?.domain ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): rfc2821Mailbox {
		return new rfc2821Mailbox(this, true)
	}

	public __goscriptAssign(source: rfc2821Mailbox): void {
		const target = this._fields
		const values = source._fields
		target.local = values.local
		target.domain = values.domain
	}

	public async String(): globalThis.Promise<string> {
		const s = this;
		return fmt.Sprintf("%s@%s", s.local, s.domain)
	}

	static __typeInfo = $.registerStructType(
		"x509.rfc2821Mailbox",
		() => new rfc2821Mailbox(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		rfc2821Mailbox,
		() => [/* @__PURE__ */ $.structField("local", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("domain", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "crypto/x509" })]
	)
}

export class policyGraphNode {
	public get validPolicy(): __goscript_oid.OID {
		return this._fields.validPolicy
	}

	public set validPolicy(value: __goscript_oid.OID) {
		this._fields.validPolicy = value
	}

	public get expectedPolicySet(): $.Slice<__goscript_oid.OID> {
		return this._fields.expectedPolicySet
	}

	public set expectedPolicySet(value: $.Slice<__goscript_oid.OID>) {
		this._fields.expectedPolicySet = value
	}

	public get parents(): globalThis.Map<policyGraphNode | $.VarRef<policyGraphNode> | null, boolean> | null {
		return this._fields.parents
	}

	public set parents(value: globalThis.Map<policyGraphNode | $.VarRef<policyGraphNode> | null, boolean> | null) {
		this._fields.parents = value
	}

	public get children(): globalThis.Map<policyGraphNode | $.VarRef<policyGraphNode> | null, boolean> | null {
		return this._fields.children
	}

	public set children(value: globalThis.Map<policyGraphNode | $.VarRef<policyGraphNode> | null, boolean> | null) {
		this._fields.children = value
	}

	public _fields: {
		validPolicy: __goscript_oid.OID
		expectedPolicySet: $.Slice<__goscript_oid.OID>
		parents: globalThis.Map<policyGraphNode | $.VarRef<policyGraphNode> | null, boolean> | null
		children: globalThis.Map<policyGraphNode | $.VarRef<policyGraphNode> | null, boolean> | null
	}

	constructor(init?: Partial<{validPolicy?: __goscript_oid.OID, expectedPolicySet?: $.Slice<__goscript_oid.OID>, parents?: globalThis.Map<policyGraphNode | $.VarRef<policyGraphNode> | null, boolean> | null, children?: globalThis.Map<policyGraphNode | $.VarRef<policyGraphNode> | null, boolean> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			validPolicy: init?.validPolicy ? init.validPolicy.clone() : new __goscript_oid.OID(undefined, true),
			expectedPolicySet: init?.expectedPolicySet ?? (null! as $.Slice<__goscript_oid.OID>),
			parents: init?.parents ?? (null! as globalThis.Map<policyGraphNode | $.VarRef<policyGraphNode> | null, boolean> | null),
			children: init?.children ?? (null! as globalThis.Map<policyGraphNode | $.VarRef<policyGraphNode> | null, boolean> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): policyGraphNode {
		return new policyGraphNode(this, true)
	}

	public __goscriptAssign(source: policyGraphNode): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.validPolicy, values.validPolicy)
		target.expectedPolicySet = values.expectedPolicySet
		target.parents = values.parents
		target.children = values.children
	}

	static __typeInfo = $.registerStructType(
		"x509.policyGraphNode",
		() => new policyGraphNode(),
		() => [],
		policyGraphNode,
		() => [/* @__PURE__ */ $.structField("validPolicy", "x509.OID", [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("expectedPolicySet", /* @__PURE__ */ $.sliceType("x509.OID"), [1], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("parents", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("x509.policyGraphNode"), /* @__PURE__ */ $.basicType("bool")), [2], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("children", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("x509.policyGraphNode"), /* @__PURE__ */ $.basicType("bool")), [3], 56, false, { pkgPath: "crypto/x509" })]
	)
}

export class policyGraph {
	public get strata(): $.Slice<globalThis.Map<string, policyGraphNode | $.VarRef<policyGraphNode> | null> | null> {
		return this._fields.strata
	}

	public set strata(value: $.Slice<globalThis.Map<string, policyGraphNode | $.VarRef<policyGraphNode> | null> | null>) {
		this._fields.strata = value
	}

	// map of OID -> nodes at strata[depth-1] with OID in their expectedPolicySet
	public get parentIndex(): globalThis.Map<string, $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>> | null {
		return this._fields.parentIndex
	}

	public set parentIndex(value: globalThis.Map<string, $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>> | null) {
		this._fields.parentIndex = value
	}

	public get depth(): number {
		return this._fields.depth
	}

	public set depth(value: number) {
		this._fields.depth = value
	}

	public _fields: {
		strata: $.Slice<globalThis.Map<string, policyGraphNode | $.VarRef<policyGraphNode> | null> | null>
		parentIndex: globalThis.Map<string, $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>> | null
		depth: number
	}

	constructor(init?: Partial<{strata?: $.Slice<globalThis.Map<string, policyGraphNode | $.VarRef<policyGraphNode> | null> | null>, parentIndex?: globalThis.Map<string, $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>> | null, depth?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			strata: init?.strata ?? (null! as $.Slice<globalThis.Map<string, policyGraphNode | $.VarRef<policyGraphNode> | null> | null>),
			parentIndex: init?.parentIndex ?? (null! as globalThis.Map<string, $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>> | null),
			depth: init?.depth ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): policyGraph {
		return new policyGraph(this, true)
	}

	public __goscriptAssign(source: policyGraph): void {
		const target = this._fields
		const values = source._fields
		target.strata = values.strata
		target.parentIndex = values.parentIndex
		target.depth = values.depth
	}

	public deleteLeaf(policy: __goscript_oid.OID): void {
		const pg: policyGraph | $.VarRef<policyGraph> | null = this;
		const pg$: policyGraph = pg == null ? $.pointerTarget<policyGraph>(pg) : (pg as any).__isVarRef === true ? (pg as any).value : (pg as any).__goValue === undefined ? (pg as any) : $.pointerTarget<policyGraph>(pg)
		let n: policyGraphNode | $.VarRef<policyGraphNode> | null = $.mapGet<string, policyGraphNode | $.VarRef<policyGraphNode> | null, policyGraphNode | $.VarRef<policyGraphNode> | null>($.arrayIndex((pg$ as policyGraph).strata!, (pg$ as policyGraph).depth), $.bytesToString(policy.der), null)[0]
		let n$: policyGraphNode = n == null ? $.pointerTarget<policyGraphNode>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<policyGraphNode>(n)
		if (n == null) {
			return
		}
		for (const [p, __rangeValue] of (n$ as policyGraphNode).parents?.entries() ?? []) {
			$.deleteMapEntry($.pointerValue<policyGraphNode>(p).children, n)
		}
		for (const [c, __rangeValue] of (n$ as policyGraphNode).children?.entries() ?? []) {
			$.deleteMapEntry($.pointerValue<policyGraphNode>(c).parents, n)
		}
		$.deleteMapEntry($.arrayIndex((pg$ as policyGraph).strata!, (pg$ as policyGraph).depth), $.bytesToString(policy.der))
	}

	public incrDepth(): void {
		let pg: policyGraph | $.VarRef<policyGraph> | null = this;
		const pg$: policyGraph = pg == null ? $.pointerTarget<policyGraph>(pg) : (pg as any).__isVarRef === true ? (pg as any).value : (pg as any).__goValue === undefined ? (pg as any) : $.pointerTarget<policyGraph>(pg);
		;(pg$ as policyGraph).parentIndex = $.makeMap<string, $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>>([])
		for (const [__rangeKey, n] of $.arrayIndex((pg$ as policyGraph).strata!, (pg$ as policyGraph).depth)?.entries() ?? []) {
			for (let __goscriptRangeTarget12 = $.pointerValue<policyGraphNode>(n).expectedPolicySet, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
				let e = ((__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as __goscript_oid.OID)).clone()
				$.mapSet((pg$ as policyGraph).parentIndex, $.bytesToString(e.der), $.appendOne($.mapGet<string, $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>, $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>>((pg$ as policyGraph).parentIndex, $.bytesToString(e.der), null)[0], n, $.appendZeros.nil))
			}
		}

		;(pg$ as policyGraph).depth++;
		;(pg$ as policyGraph).strata = $.appendOne((pg$ as policyGraph).strata, $.makeMap<string, policyGraphNode | $.VarRef<policyGraphNode> | null>([]), $.appendZeros.nil)
	}

	public insert(n: policyGraphNode | $.VarRef<policyGraphNode> | null): void {
		let pg: policyGraph | $.VarRef<policyGraph> | null = this;
		const pg$: policyGraph = pg == null ? $.pointerTarget<policyGraph>(pg) : (pg as any).__isVarRef === true ? (pg as any).value : (pg as any).__goValue === undefined ? (pg as any) : $.pointerTarget<policyGraph>(pg)
		$.mapSet($.arrayIndex((pg$ as policyGraph).strata!, (pg$ as policyGraph).depth), $.bytesToString($.pointerValue<policyGraphNode>(n).validPolicy.der), n)
	}

	public leafWithPolicy(policy: __goscript_oid.OID): policyGraphNode | $.VarRef<policyGraphNode> | null {
		const pg: policyGraph | $.VarRef<policyGraph> | null = this;
		const pg$: policyGraph = pg == null ? $.pointerTarget<policyGraph>(pg) : (pg as any).__isVarRef === true ? (pg as any).value : (pg as any).__goValue === undefined ? (pg as any) : $.pointerTarget<policyGraph>(pg)
		return $.mapGet<string, policyGraphNode | $.VarRef<policyGraphNode> | null, policyGraphNode | $.VarRef<policyGraphNode> | null>($.arrayIndex((pg$ as policyGraph).strata!, (pg$ as policyGraph).depth), $.bytesToString(policy.der), null)[0]
	}

	public leaves(): globalThis.Map<string, policyGraphNode | $.VarRef<policyGraphNode> | null> | null {
		const pg: policyGraph | $.VarRef<policyGraph> | null = this;
		const pg$: policyGraph = pg == null ? $.pointerTarget<policyGraph>(pg) : (pg as any).__isVarRef === true ? (pg as any).value : (pg as any).__goValue === undefined ? (pg as any) : $.pointerTarget<policyGraph>(pg)
		return $.arrayIndex((pg$ as policyGraph).strata!, (pg$ as policyGraph).depth)
	}

	public async parentWithAnyPolicy(): globalThis.Promise<policyGraphNode | $.VarRef<policyGraphNode> | null> {
		const pg: policyGraph | $.VarRef<policyGraph> | null = this;
		const pg$: policyGraph = pg == null ? $.pointerTarget<policyGraph>(pg) : (pg as any).__isVarRef === true ? (pg as any).value : (pg as any).__goValue === undefined ? (pg as any) : $.pointerTarget<policyGraph>(pg)
		if ((pg$ as policyGraph).depth == 0) {
			return null
		}
		return $.mapGet<string, policyGraphNode | $.VarRef<policyGraphNode> | null, policyGraphNode | $.VarRef<policyGraphNode> | null>($.arrayIndex((pg$ as policyGraph).strata!, (pg$ as policyGraph).depth - 1), $.bytesToString((await __goscript_init_anyPolicyOID(), __goscript_get_anyPolicyOID()).der), null)[0]
	}

	public parents(): iter.Seq<policyGraphNode | $.VarRef<policyGraphNode> | null> | null {
		const pg: policyGraph | $.VarRef<policyGraph> | null = this;
		const pg$: policyGraph = pg == null ? $.pointerTarget<policyGraph>(pg) : (pg as any).__isVarRef === true ? (pg as any).value : (pg as any).__goValue === undefined ? (pg as any) : $.pointerTarget<policyGraph>(pg)
		if ((pg$ as policyGraph).depth == 0) {
			return (null as iter.Seq<policyGraphNode | $.VarRef<policyGraphNode> | null> | null)
		}
		return (maps.Values($.arrayIndex((pg$ as policyGraph).strata!, (pg$ as policyGraph).depth - 1)) as iter.Seq<policyGraphNode | $.VarRef<policyGraphNode> | null> | null)
	}

	public parentsWithExpected(expected: __goscript_oid.OID): $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null> {
		const pg: policyGraph | $.VarRef<policyGraph> | null = this;
		const pg$: policyGraph = pg == null ? $.pointerTarget<policyGraph>(pg) : (pg as any).__isVarRef === true ? (pg as any).value : (pg as any).__goValue === undefined ? (pg as any) : $.pointerTarget<policyGraph>(pg)
		if ((pg$ as policyGraph).depth == 0) {
			return null
		}
		return $.mapGet<string, $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>, $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>>((pg$ as policyGraph).parentIndex, $.bytesToString(expected.der), null)[0]
	}

	public prune(): void {
		const pg: policyGraph | $.VarRef<policyGraph> | null = this;
		const pg$: policyGraph = pg == null ? $.pointerTarget<policyGraph>(pg) : (pg as any).__isVarRef === true ? (pg as any).value : (pg as any).__goValue === undefined ? (pg as any) : $.pointerTarget<policyGraph>(pg)
		for (let i = (pg$ as policyGraph).depth - 1; i > 0; i--) {
			for (const [__rangeKey, n] of $.arrayIndex((pg$ as policyGraph).strata!, i)?.entries() ?? []) {
				if ($.len($.pointerValue<policyGraphNode>(n).children) == 0) {
					for (const [p, __rangeValue] of $.pointerValue<policyGraphNode>(n).parents?.entries() ?? []) {
						$.deleteMapEntry($.pointerValue<policyGraphNode>(p).children, n)
					}
					$.deleteMapEntry($.arrayIndex((pg$ as policyGraph).strata!, i), $.bytesToString($.pointerValue<policyGraphNode>(n).validPolicy.der))
				}
			}
		}
	}

	public async validPolicyNodes(): globalThis.Promise<$.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>> {
		const pg: policyGraph | $.VarRef<policyGraph> | null = this;
		const pg$: policyGraph = pg == null ? $.pointerTarget<policyGraph>(pg) : (pg as any).__isVarRef === true ? (pg as any).value : (pg as any).__goValue === undefined ? (pg as any) : $.pointerTarget<policyGraph>(pg)
		let validNodes: $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null> = null! as $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>
		for (let i = (pg$ as policyGraph).depth; i >= 0; i--) {
			for (const [__rangeKey, n] of $.arrayIndex((pg$ as policyGraph).strata!, i)?.entries() ?? []) {
				if ($.markAsStructValue($.cloneStructValue($.pointerValue<policyGraphNode>(n).validPolicy)).Equal(((await __goscript_init_anyPolicyOID(), __goscript_get_anyPolicyOID())).clone())) {
					continue
				}

				if ($.len($.pointerValue<policyGraphNode>(n).parents) == 1) {
					for (const [p, __rangeValue] of $.pointerValue<policyGraphNode>(n).parents?.entries() ?? []) {
						if ($.markAsStructValue($.cloneStructValue($.pointerValue<policyGraphNode>(p).validPolicy)).Equal(((await __goscript_init_anyPolicyOID(), __goscript_get_anyPolicyOID())).clone())) {
							validNodes = $.appendOne(validNodes, n, $.appendZeros.nil)
						}
					}
				}
			}
		}
		return validNodes
	}

	static __typeInfo = $.registerStructType(
		"x509.policyGraph",
		() => new policyGraph(),
		() => [$.methodSignature("deleteLeaf", [["policy", "x509.OID"]], [], true), $.methodSignature("incrDepth", [], [], true), $.methodSignature("insert", [["n", /* @__PURE__ */ $.pointerType("x509.policyGraphNode")]], [], true), $.methodSignature("leafWithPolicy", [["policy", "x509.OID"]], [/* @__PURE__ */ $.pointerType("x509.policyGraphNode")], true), $.methodSignature("leaves", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("x509.policyGraphNode"))], true), $.methodSignature("parentWithAnyPolicy", [], [/* @__PURE__ */ $.pointerType("x509.policyGraphNode")], true), $.methodSignature("parents", [], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("x509.policyGraphNode")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("parentsWithExpected", [["expected", "x509.OID"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.policyGraphNode"))], true), $.methodSignature("prune", [], [], true), $.methodSignature("validPolicyNodes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.policyGraphNode"))], true)],
		policyGraph,
		() => [/* @__PURE__ */ $.structField("strata", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("x509.policyGraphNode"))), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("parentIndex", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.policyGraphNode"))), [1], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("depth", /* @__PURE__ */ $.basicType("int"), [2], 32, false, { pkgPath: "crypto/x509" })]
	)
}

export const NotAuthorizedToSign: InvalidReason = 0

export const Expired: InvalidReason = 1

export const CANotAuthorizedForThisName: InvalidReason = 2

export const TooManyIntermediates: InvalidReason = 3

export const IncompatibleUsage: InvalidReason = 4

export const NameMismatch: InvalidReason = 5

export const NameConstraintsWithoutSANs: InvalidReason = 6

export const UnconstrainedName: InvalidReason = 7

export const TooManyConstraints: InvalidReason = 8

export const CANotAuthorizedForExtKeyUsage: InvalidReason = 9

export const NoValidChains: InvalidReason = 10

export const leafCertificate: number = 0

export const intermediateCertificate: number = 1

export const rootCertificate: number = 2

export const maxChainSignatureChecks: number = 100

export let errNotParsed: $.GoError = errors.New("x509: missing ASN.1 contents; use ParseCertificate")

export function __goscript_set_errNotParsed(__goscriptValue: $.GoError): void {
	errNotParsed = __goscriptValue
}

export function parseRFC2821Mailbox(_in: string): [rfc2821Mailbox, boolean] {
	let mailbox: rfc2821Mailbox = new rfc2821Mailbox(undefined, true)
	let ok: boolean = false
	if ($.stringLen(_in) == 0) {
		return [(mailbox).clone(), false]
	}

	let localPartBytes: $.Slice<number> = $.makeSlice<number>(0, globalThis.Math.trunc($.stringLen(_in) / 2), "byte")

	if ($.indexString(_in, 0) == 34) {
		// Quoted-string = DQUOTE *qcontent DQUOTE
		// non-whitespace-control = %d1-8 / %d11 / %d12 / %d14-31 / %d127
		// qcontent = qtext / quoted-pair
		// qtext = non-whitespace-control /
		//         %d33 / %d35-91 / %d93-126
		// quoted-pair = ("\" text) / obs-qp
		// text = %d1-9 / %d11 / %d12 / %d14-127 / obs-text
		//
		// (Names beginning with “obs-” are the obsolete syntax from RFC 2822,
		// Section 4. Since it has been 16 years, we no longer accept that.)
		_in = $.sliceStringOrBytes(_in, 1, undefined)
		QuotedString: while (true) {
			if ($.stringLen(_in) == 0) {
				return [(mailbox).clone(), false]
			}
			let c = $.indexString(_in, 0)
			_in = $.sliceStringOrBytes(_in, 1, undefined)

			switch ((true as boolean)) {
				case c == 34:
				{
					break QuotedString
					break
				}
				case c == 92:
				{
					if ($.stringLen(_in) == 0) {
						return [(mailbox).clone(), false]
					}
					if (((($.indexString(_in, 0) == 11) || ($.indexString(_in, 0) == 12)) || ((1 <= $.indexString(_in, 0)) && ($.indexString(_in, 0) <= 9))) || ((14 <= $.indexString(_in, 0)) && ($.indexString(_in, 0) <= 127))) {
						localPartBytes = $.append(localPartBytes, $.uint($.indexString(_in, 0), 8), $.byteSliceHint)
						_in = $.sliceStringOrBytes(_in, 1, undefined)
					} else {
						return [(mailbox).clone(), false]
					}
					break
				}
				case ((((((((c == 11) || (c == 12)) || (c == 32)) || (c == 33)) || (c == 127)) || ((1 <= c) && (c <= 8))) || ((14 <= c) && (c <= 31))) || ((35 <= c) && (c <= 91))) || ((93 <= c) && (c <= 126)):
				{
					localPartBytes = $.append(localPartBytes, $.uint(c, 8), $.byteSliceHint)
					break
				}
				default:
				{
					return [(mailbox).clone(), false]
					break
				}
			}
		}
	} else {
		// Atom ("." Atom)*
		NextChar: while ($.stringLen(_in) > 0) {
			// atext from RFC 2822, Section 3.2.4
			let c = $.indexString(_in, 0)

			switch ((true as boolean)) {
				case c == 92:
				{
					_in = $.sliceStringOrBytes(_in, 1, undefined)
					if ($.stringLen(_in) == 0) {
						return [(mailbox).clone(), false]
					}
				}
				case (((((((((((((((((((((((48 <= c) && (c <= 57)) || ((97 <= c) && (c <= 122))) || ((65 <= c) && (c <= 90))) || (c == 33)) || (c == 35)) || (c == 36)) || (c == 37)) || (c == 38)) || (c == 39)) || (c == 42)) || (c == 43)) || (c == 45)) || (c == 47)) || (c == 61)) || (c == 63)) || (c == 94)) || (c == 95)) || (c == 96)) || (c == 123)) || (c == 124)) || (c == 125)) || (c == 126)) || (c == 46):
				{
					localPartBytes = $.append(localPartBytes, $.uint($.indexString(_in, 0), 8), $.byteSliceHint)
					_in = $.sliceStringOrBytes(_in, 1, undefined)
					break
				}
				default:
				{
					break NextChar
					break
				}
			}
		}

		if ($.sliceLen(localPartBytes) == 0) {
			return [(mailbox).clone(), false]
		}

		// From RFC 3696, Section 3:
		// “period (".") may also appear, but may not be used to start
		// or end the local part, nor may two or more consecutive
		// periods appear.”
		let twoDots: $.Slice<number> = new Uint8Array([46, 46]) as $.Slice<number>
		if ((($.arrayIndex(localPartBytes!, 0) == 46) || ($.arrayIndex(localPartBytes!, $.sliceLen(localPartBytes) - 1) == 46)) || bytes.Contains(localPartBytes, twoDots)) {
			return [(mailbox).clone(), false]
		}
	}

	if (($.stringLen(_in) == 0) || ($.indexString(_in, 0) != 64)) {
		return [(mailbox).clone(), false]
	}
	_in = $.sliceStringOrBytes(_in, 1, undefined)

	// The RFC species a format for domains, but that's known to be
	// violated in practice so we accept that anything after an '@' is the
	// domain part.
	if (!__goscript_parser.domainNameValid(_in, false)) {
		return [(mailbox).clone(), false]
	}

	// Reject domain names containing @.
	if (strings.ContainsRune(_in, 64)) {
		return [(mailbox).clone(), false]
	}

	mailbox.local = $.bytesToString(localPartBytes)
	mailbox.domain = _in
	return [(mailbox).clone(), true]
}

export function domainToReverseLabels(domain: string): [$.Slice<string>, boolean] {
	let reverseLabels: $.Slice<string> = null! as $.Slice<string>
	let ok: boolean = false
	reverseLabels = $.makeSlice<string>(0, strings.Count(domain, ".") + 1, "string")
	while ($.stringLen(domain) > 0) {
		{
			let i: number = strings.LastIndexByte(domain, 46)
			if (i == -1) {
				reverseLabels = $.appendOne(reverseLabels, domain)
				domain = ""
			} else {
				reverseLabels = $.appendOne(reverseLabels, $.sliceStringOrBytes(domain, i + 1, undefined))
				domain = $.sliceStringOrBytes(domain, undefined, i)
				if (i == 0) {
					// domain is prefixed with an empty label, append an empty
					// string to reverseLabels to indicate this.
					reverseLabels = $.appendOne(reverseLabels, "")
				}
			}
		}
	}

	if (($.sliceLen(reverseLabels) > 0) && ($.stringLen($.arrayIndex(reverseLabels!, 0)) == 0)) {
		// An empty label at the end indicates an absolute value.
		return [null, false]
	}

	for (let __goscriptRangeTarget1 = reverseLabels, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let label = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
		if ($.stringLen(label) == 0) {
			// Empty labels are otherwise invalid.
			return [null, false]
		}

		for (let __goscriptRunes0 = $.stringRunes(label); __goscriptRunes0.next(); ) {
			const c = __goscriptRunes0.rune
			if ((c < 33) || (c > 126)) {
				// Invalid character.
				return [null, false]
			}
		}
	}

	return [reverseLabels, true]
}

export function appendToFreshChain(chain: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>, cert: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null): $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null> {
	let n: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null> = $.makeSlice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>($.sliceLen(chain) + 1)
	$.copy(n, chain)
	$.sliceElems(n!)[$.sliceSlot(n!, $.sliceLen(chain))] = cert
	return n
}

export function alreadyInChain(candidate: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, chain: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>): boolean {
	const candidate$: __goscript_x509.Certificate = candidate == null ? $.pointerTarget<__goscript_x509.Certificate>(candidate) : (candidate as any).__isVarRef === true ? (candidate as any).value : (candidate as any).__goValue === undefined ? (candidate as any) : $.pointerTarget<__goscript_x509.Certificate>(candidate)
	type pubKeyEqual = {
		Equal(_p0: crypto.PublicKey | null): boolean
	}

	$.registerInterfaceType(
		"x509.pubKeyEqual",
		null,
		[$.methodSignature("Equal", ["crypto.PublicKey"], [/* @__PURE__ */ $.basicType("bool")])]
	);

	let candidateSAN: pkix.Extension | $.VarRef<pkix.Extension> | null = null! as pkix.Extension | $.VarRef<pkix.Extension> | null
	for (let __goscriptRangeTarget2 = (candidate$ as __goscript_x509.Certificate).Extensions, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let ext = $.varRef(((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as pkix.Extension)).clone())
		if (asn1.ObjectIdentifier_Equal(ext.value.Id, (__goscript_x509.oidExtensionSubjectAltName as asn1.ObjectIdentifier))) {
			candidateSAN = ext
			break
		}
	}

	for (let __goscriptRangeTarget4 = chain, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let cert = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null)
		if (!bytes.Equal((candidate$ as __goscript_x509.Certificate).RawSubject, $.pointerValue<__goscript_x509.Certificate>(cert).RawSubject)) {
			continue
		}
		// We enforce the canonical encoding of SPKI (by only allowing the
		// correct AI parameter encodings in parseCertificate), so it's safe to
		// directly compare the raw bytes.
		if (!bytes.Equal((candidate$ as __goscript_x509.Certificate).RawSubjectPublicKeyInfo, $.pointerValue<__goscript_x509.Certificate>(cert).RawSubjectPublicKeyInfo)) {
			continue
		}
		let certSAN: pkix.Extension | $.VarRef<pkix.Extension> | null = null! as pkix.Extension | $.VarRef<pkix.Extension> | null
		for (let __goscriptRangeTarget3 = $.pointerValue<__goscript_x509.Certificate>(cert).Extensions, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let ext = $.varRef(((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as pkix.Extension)).clone())
			if (asn1.ObjectIdentifier_Equal(ext.value.Id, (__goscript_x509.oidExtensionSubjectAltName as asn1.ObjectIdentifier))) {
				certSAN = ext
				break
			}
		}
		if ((candidateSAN == null) && (certSAN == null)) {
			return true
		} else {
			if ((candidateSAN == null) || (certSAN == null)) {
				return false
			}
		}
		if (bytes.Equal($.pointerValue<pkix.Extension>(candidateSAN).Value, $.pointerValue<pkix.Extension>(certSAN).Value)) {
			return true
		}
	}
	return false
}

export let errSignatureLimit: $.GoError = errors.New("x509: signature check attempts limit reached while verifying certificate chain")

export function __goscript_set_errSignatureLimit(__goscriptValue: $.GoError): void {
	errSignatureLimit = __goscriptValue
}

export function validHostnamePattern(host: string): boolean {
	return validHostname(host, true)
}

export function validHostnameInput(host: string): boolean {
	return validHostname(host, false)
}

export function validHostname(host: string, isPattern: boolean): boolean {
	if (!isPattern) {
		host = strings.TrimSuffix(host, ".")
	}
	if ($.stringLen(host) == 0) {
		return false
	}
	if ($.stringEqual(host, "*")) {
		// Bare wildcards are not allowed, they are not valid DNS names,
		// nor are they allowed per RFC 6125.
		return false
	}

	for (let __goscriptRangeTarget5 = strings.Split(host, "."), __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
		let part = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as string)
		if ($.stringEqual(part, "")) {
			// Empty label.
			return false
		}
		if ((isPattern && (i == 0)) && ($.stringEqual(part, "*"))) {
			// Only allow full left-most wildcards, as those are the only ones
			// we match, and matching literal '*' characters is probably never
			// the expected behavior.
			continue
		}
		for (let __goscriptRunes1 = $.stringRunes(part); __goscriptRunes1.next(); ) {
			const j = __goscriptRunes1.index
			const c = __goscriptRunes1.rune
			if ((97 <= c) && (c <= 122)) {
				continue
			}
			if ((48 <= c) && (c <= 57)) {
				continue
			}
			if ((65 <= c) && (c <= 90)) {
				continue
			}
			if ((c == 45) && (j != 0)) {
				continue
			}
			if (c == 95) {
				// Not a valid character in hostnames, but commonly
				// found in deployments outside the WebPKI.
				continue
			}
			return false
		}
	}

	return true
}

export function matchExactly(hostA: string, hostB: string): boolean {
	if (((($.stringEqual(hostA, "")) || ($.stringEqual(hostA, "."))) || ($.stringEqual(hostB, ""))) || ($.stringEqual(hostB, "."))) {
		return false
	}
	return $.stringEqual(toLowerCaseASCII(hostA), toLowerCaseASCII(hostB))
}

export function matchHostnames(pattern: string, hostParts: $.Slice<string>): boolean {
	pattern = toLowerCaseASCII(pattern)

	if (($.stringLen(pattern) == 0) || ($.sliceLen(hostParts) == 0)) {
		return false
	}

	let patternParts: $.Slice<string> = strings.Split(pattern, ".")

	if ($.sliceLen(patternParts) != $.sliceLen(hostParts)) {
		return false
	}

	for (let __goscriptRangeTarget6 = patternParts, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __goscriptSliceWindow0 = $.sliceRange(hostParts), i = 0; i < __goscriptRangeWindow6.length; i++) {
		let patternPart = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + i] as string)
		if ((i == 0) && ($.stringEqual(patternPart, "*"))) {
			continue
		}
		if (!$.stringEqual(patternPart, ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string))) {
			return false
		}
	}

	return true
}

export function toLowerCaseASCII(_in: string): string {
	// If the string is already lower-case then there's nothing to do.
	let isAlreadyLowerCase = true
	for (let __goscriptRunes2 = $.stringRunes(_in); __goscriptRunes2.next(); ) {
		const c = __goscriptRunes2.rune
		if (c == 65533) {
			// If we get a UTF-8 error then there might be
			// upper-case ASCII bytes in the invalid sequence.
			isAlreadyLowerCase = false
			break
		}
		if ((65 <= c) && (c <= 90)) {
			isAlreadyLowerCase = false
			break
		}
	}

	if (isAlreadyLowerCase) {
		return _in
	}

	let out: $.Slice<number> = $.stringToBytes(_in)
	for (let __goscriptRangeTarget7 = out, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), i = 0; i < __goscriptRangeWindow7.length; i++) {
		let c = $.uint((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + i] as number), 8)
		if ((65 <= c) && (c <= 90)) {
			;(__goscriptRangeWindow7.backing as any[])[__goscriptRangeWindow7.offset + i] = $.uint((__goscriptRangeWindow7.backing as any[])[__goscriptRangeWindow7.offset + i] + (32), 8)
		}
	}
	return $.bytesToString(out)
}

export function splitHostname(host: string): $.Slice<string> {
	return strings.Split(toLowerCaseASCII(strings.TrimSuffix(host, ".")), ".")
}

export function checkChainForKeyUsage(chain: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>, keyUsages: $.Slice<__goscript_x509.ExtKeyUsage>): boolean {
	let usages: $.Slice<__goscript_x509.ExtKeyUsage> = $.makeSlice<__goscript_x509.ExtKeyUsage>($.sliceLen(keyUsages), undefined, "number")
	$.copy(usages, keyUsages)

	if ($.sliceLen(chain) == 0) {
		return false
	}

	let usagesRemaining = $.sliceLen(usages)

	// We walk down the list and cross out any usages that aren't supported
	// by each certificate. If we cross out all the usages, then the chain
	// is unacceptable.

	NextCert: for (let __goscriptSliceWindow1 = $.sliceRange(chain), __goscriptSliceWindow2 = $.sliceRange(usages), i = $.sliceLen(chain) - 1; i >= 0; i--) {
		let cert: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null)
		let cert$: __goscript_x509.Certificate = cert == null ? $.pointerTarget<__goscript_x509.Certificate>(cert) : (cert as any).__isVarRef === true ? (cert as any).value : (cert as any).__goValue === undefined ? (cert as any) : $.pointerTarget<__goscript_x509.Certificate>(cert)
		if (($.sliceLen((cert$ as __goscript_x509.Certificate).ExtKeyUsage) == 0) && ($.sliceLen((cert$ as __goscript_x509.Certificate).UnknownExtKeyUsage) == 0)) {
			// The certificate doesn't have any extended key usage specified.
			continue
		}

		for (let __goscriptRangeTarget8 = (cert$ as __goscript_x509.Certificate).ExtKeyUsage, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let usage = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as __goscript_x509.ExtKeyUsage)
			if (usage == 0) {
				// The certificate is explicitly good for any usage.
				continue NextCert
			}
		}

		const invalidUsage: number = -1

		NextRequestedUsage: for (let __goscriptRangeTarget10 = usages, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget10), i = 0; i < __goscriptRangeWindow9.length; i++) {
			let requestedUsage = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + i] as __goscript_x509.ExtKeyUsage)
			if (requestedUsage == -1) {
				continue
			}

			for (let __goscriptRangeTarget9 = (cert$ as __goscript_x509.Certificate).ExtKeyUsage, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
				let usage = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as __goscript_x509.ExtKeyUsage)
				if (requestedUsage == usage) {
					continue NextRequestedUsage
				}
			}

			;(__goscriptRangeWindow9.backing as any[])[__goscriptRangeWindow9.offset + i] = -1
			usagesRemaining--
			if (usagesRemaining == 0) {
				return false
			}
		}
	}

	return true
}

export async function mustNewOIDFromInts(ints: $.Slice<bigint>): globalThis.Promise<__goscript_oid.OID> {
	let [oid, err] = __goscript_oid.OIDFromInts(ints)
	if (err != null) {
		$.panic(await fmt.Sprintf("OIDFromInts(%v) unexpected error: %v", $.interfaceValue(ints, "[]uint64", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64"))), (err as any)))
	}
	return (oid).clone()
}

export function newPolicyGraphNode(valid: __goscript_oid.OID, parents: $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>): policyGraphNode | $.VarRef<policyGraphNode> | null {
	let n: policyGraphNode | $.VarRef<policyGraphNode> | null = new policyGraphNode({validPolicy: valid, expectedPolicySet: $.arrayToSlice<__goscript_oid.OID>([(valid).clone()]), children: $.makeMap<policyGraphNode | $.VarRef<policyGraphNode> | null, boolean>([], /* @__PURE__ */ $.pointerType("x509.policyGraphNode")), parents: $.makeMap<policyGraphNode | $.VarRef<policyGraphNode> | null, boolean>([], /* @__PURE__ */ $.pointerType("x509.policyGraphNode"))})
	for (let __goscriptRangeTarget11 = parents, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
		let p = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as policyGraphNode | $.VarRef<policyGraphNode> | null)
		$.mapSet($.pointerValue<policyGraphNode>(p).children, n, true)
		$.mapSet($.pointerValue<policyGraphNode>(n).parents, p, true)
	}
	return n
}

export var anyPolicyOID: __goscript_oid.OID

export async function __goscript_init_anyPolicyOID(): globalThis.Promise<void> {
	if (((anyPolicyOID) as any) === undefined) {
		anyPolicyOID = await mustNewOIDFromInts($.arrayToSlice<bigint>([2n, 5n, 29n, 32n, 0n]))
	}
}

export function __goscript_get_anyPolicyOID(): __goscript_oid.OID {
	if (((anyPolicyOID) as any) === undefined) {
		throw new globalThis.Error("goscript package variable anyPolicyOID read before initialization")
	}
	return anyPolicyOID
}

export function __goscript_set_anyPolicyOID(__goscriptValue: __goscript_oid.OID): void {
	$.assignStruct(anyPolicyOID, __goscriptValue)
}

export async function newPolicyGraph(): globalThis.Promise<policyGraph | $.VarRef<policyGraph> | null> {
	let root = $.varRef(new policyGraphNode({validPolicy: (await __goscript_init_anyPolicyOID(), __goscript_get_anyPolicyOID()), expectedPolicySet: $.arrayToSlice<__goscript_oid.OID>([((await __goscript_init_anyPolicyOID(), __goscript_get_anyPolicyOID())).clone()]), children: $.makeMap<policyGraphNode | $.VarRef<policyGraphNode> | null, boolean>([], /* @__PURE__ */ $.pointerType("x509.policyGraphNode")), parents: $.makeMap<policyGraphNode | $.VarRef<policyGraphNode> | null, boolean>([], /* @__PURE__ */ $.pointerType("x509.policyGraphNode"))}, true))
	return new policyGraph({depth: 0, strata: $.arrayToSlice<globalThis.Map<string, policyGraphNode | $.VarRef<policyGraphNode> | null> | null>([$.makeMap<string, policyGraphNode | $.VarRef<policyGraphNode> | null>([[$.bytesToString((await __goscript_init_anyPolicyOID(), __goscript_get_anyPolicyOID()).der), root]])])})
}

export async function policiesValid(chain: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>, opts: VerifyOptions): globalThis.Promise<boolean> {
	// The following code implements the policy verification algorithm as
	// specified in RFC 5280 and updated by RFC 9618. In particular the
	// following sections are replaced by RFC 9618:
	//	* 6.1.2 (a)
	//	* 6.1.3 (d)
	//	* 6.1.3 (e)
	//	* 6.1.3 (f)
	//	* 6.1.4 (b)
	//	* 6.1.5 (g)

	if ($.sliceLen(chain) == 1) {
		return true
	}

	// n is the length of the chain minus the trust anchor
	let n = $.sliceLen(chain) - 1

	let pg: policyGraph | $.VarRef<policyGraph> | null = await newPolicyGraph()
	let inhibitAnyPolicy: number = 0
	let explicitPolicy: number = 0
	let policyMapping: number = 0
	if (!opts.inhibitAnyPolicy) {
		inhibitAnyPolicy = n + 1
	}
	if (!opts.requireExplicitPolicy) {
		explicitPolicy = n + 1
	}
	if (!opts.inhibitPolicyMapping) {
		policyMapping = n + 1
	}

	let initialUserPolicySet: globalThis.Map<string, boolean> | null = $.makeMap<string, boolean>([])
	for (let __goscriptRangeTarget13 = opts.CertificatePolicies, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
		let p = ((__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as __goscript_oid.OID)).clone()
		$.mapSet(initialUserPolicySet, $.bytesToString(p.der), true)
	}
	// If the user does not pass any policies, we consider
	// that equivalent to passing anyPolicyOID.
	if ($.len(initialUserPolicySet) == 0) {
		$.mapSet(initialUserPolicySet, $.bytesToString((await __goscript_init_anyPolicyOID(), __goscript_get_anyPolicyOID()).der), true)
	}

	for (let __goscriptSliceWindow3 = $.sliceRange(chain), i = n - 1; i >= 0; i--) {
		let cert: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null)
		let cert$: __goscript_x509.Certificate = cert == null ? $.pointerTarget<__goscript_x509.Certificate>(cert) : (cert as any).__isVarRef === true ? (cert as any).value : (cert as any).__goValue === undefined ? (cert as any) : $.pointerTarget<__goscript_x509.Certificate>(cert)

		let isSelfSigned = bytes.Equal((cert$ as __goscript_x509.Certificate).RawIssuer, (cert$ as __goscript_x509.Certificate).RawSubject)

		// 6.1.3 (e) -- as updated by RFC 9618
		if ($.sliceLen((cert$ as __goscript_x509.Certificate).Policies) == 0) {
			pg = null
		}

		// 6.1.3 (f) -- as updated by RFC 9618
		if ((explicitPolicy == 0) && (pg == null)) {
			return false
		}

		if (pg != null) {
			void (pg !== null && (pg as any).__isVarRef !== true && (pg as any).__goValue === undefined ? ((pg as any) as policyGraph).incrDepth() : policyGraph.prototype.incrDepth.call(pg))

			let policies: globalThis.Map<string, boolean> | null = $.makeMap<string, boolean>([])

			// 6.1.3 (d) (1) -- as updated by RFC 9618
			for (let __goscriptRangeTarget14 = (cert$ as __goscript_x509.Certificate).Policies, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
				let policy = ((__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as __goscript_oid.OID)).clone()
				$.mapSet(policies, $.bytesToString(policy.der), true)

				if ($.markAsStructValue($.cloneStructValue(policy)).Equal(((await __goscript_init_anyPolicyOID(), __goscript_get_anyPolicyOID())).clone())) {
					continue
				}

				// 6.1.3 (d) (1) (i) -- as updated by RFC 9618
				let parents: $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null> = (pg !== null && (pg as any).__isVarRef !== true && (pg as any).__goValue === undefined ? ((pg as any) as policyGraph).parentsWithExpected(policy) : policyGraph.prototype.parentsWithExpected.call(pg, policy))
				if ($.sliceLen(parents) == 0) {
					// 6.1.3 (d) (1) (ii) -- as updated by RFC 9618
					{
						let anyParent: policyGraphNode | $.VarRef<policyGraphNode> | null = await (pg !== null && (pg as any).__isVarRef !== true && (pg as any).__goValue === undefined ? ((pg as any) as policyGraph).parentWithAnyPolicy() : policyGraph.prototype.parentWithAnyPolicy.call(pg))
						if (anyParent != null) {
							parents = $.arrayToSlice<policyGraphNode | $.VarRef<policyGraphNode> | null>([anyParent])
						}
					}
				}
				if ($.sliceLen(parents) > 0) {
					void (pg !== null && (pg as any).__isVarRef !== true && (pg as any).__goValue === undefined ? ((pg as any) as policyGraph).insert(newPolicyGraphNode((policy).clone(), parents)) : policyGraph.prototype.insert.call(pg, newPolicyGraphNode((policy).clone(), parents)))
				}
			}

			// 6.1.3 (d) (2) -- as updated by RFC 9618
			// NOTE: in the check "n-i < n" our i is different from the i in the specification.
			// In the specification chains go from the trust anchor to the leaf, whereas our
			// chains go from the leaf to the trust anchor, so our i's our inverted. Our
			// check here matches the check "i < n" in the specification.
			if ($.mapGet<string, boolean, boolean>(policies, $.bytesToString((await __goscript_init_anyPolicyOID(), __goscript_get_anyPolicyOID()).der), false)[0] && ((inhibitAnyPolicy > 0) || (((n - i) < n) && isSelfSigned))) {
				let missing: globalThis.Map<string, $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>> | null = $.makeMap<string, $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>>([])
				let leaves: globalThis.Map<string, policyGraphNode | $.VarRef<policyGraphNode> | null> | null = (pg !== null && (pg as any).__isVarRef !== true && (pg as any).__goValue === undefined ? ((pg as any) as policyGraph).leaves() : policyGraph.prototype.leaves.call(pg))
				let __goscriptRangeReturn0 = false
				let __goscriptRangeReturnValue0: boolean | undefined
				;await (async () => {
					await (pg !== null && (pg as any).__isVarRef !== true && (pg as any).__goValue === undefined ? ((pg as any) as policyGraph).parents() : policyGraph.prototype.parents.call(pg))!(async (p) => {
						for (let __goscriptRangeTarget15 = $.pointerValue<policyGraphNode>(p).expectedPolicySet, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow15.length; __rangeIndex++) {
							let expected = ((__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + __rangeIndex] as __goscript_oid.OID)).clone()
							if ($.mapGet<string, policyGraphNode | $.VarRef<policyGraphNode> | null, policyGraphNode | $.VarRef<policyGraphNode> | null>(leaves, $.bytesToString(expected.der), null)[0] == null) {
								$.mapSet(missing, $.bytesToString(expected.der), $.appendOne($.mapGet<string, $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>, $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>>(missing, $.bytesToString(expected.der), null)[0], p, $.appendZeros.nil))
							}
						}
						return true
					})
				})()
				if (__goscriptRangeReturn0) {
					return __goscriptRangeReturnValue0!
				}

				for (const [oidStr, parents] of missing?.entries() ?? []) {
					void (pg !== null && (pg as any).__isVarRef !== true && (pg as any).__goValue === undefined ? ((pg as any) as policyGraph).insert(newPolicyGraphNode(new __goscript_oid.OID({der: $.stringToBytes(oidStr)}, true), parents)) : policyGraph.prototype.insert.call(pg, newPolicyGraphNode(new __goscript_oid.OID({der: $.stringToBytes(oidStr)}, true), parents)))
				}
			}

			// 6.1.3 (d) (3) -- as updated by RFC 9618
			void (pg !== null && (pg as any).__isVarRef !== true && (pg as any).__goValue === undefined ? ((pg as any) as policyGraph).prune() : policyGraph.prototype.prune.call(pg))

			if (i != 0) {
				// 6.1.4 (b) -- as updated by RFC 9618
				if ($.sliceLen((cert$ as __goscript_x509.Certificate).PolicyMappings) > 0) {
					// collect map of issuer -> []subject
					let mappings: globalThis.Map<string, $.Slice<__goscript_oid.OID>> | null = $.makeMap<string, $.Slice<__goscript_oid.OID>>([])

					for (let __goscriptRangeTarget16 = (cert$ as __goscript_x509.Certificate).PolicyMappings, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow16.length; __rangeIndex++) {
						let mapping = ((__goscriptRangeWindow16.backing[__goscriptRangeWindow16.offset + __rangeIndex] as __goscript_x509.PolicyMapping)).clone()
						if (policyMapping > 0) {
							if ($.markAsStructValue($.cloneStructValue(mapping.IssuerDomainPolicy)).Equal(((await __goscript_init_anyPolicyOID(), __goscript_get_anyPolicyOID())).clone()) || $.markAsStructValue($.cloneStructValue(mapping.SubjectDomainPolicy)).Equal(((await __goscript_init_anyPolicyOID(), __goscript_get_anyPolicyOID())).clone())) {
								// Invalid mapping
								return false
							}
							$.mapSet(mappings, $.bytesToString(mapping.IssuerDomainPolicy.der), $.appendOne($.mapGet<string, $.Slice<__goscript_oid.OID>, $.Slice<__goscript_oid.OID>>(mappings, $.bytesToString(mapping.IssuerDomainPolicy.der), null)[0], (mapping.SubjectDomainPolicy).clone()))
						} else {
							// 6.1.4 (b) (3) (i) -- as updated by RFC 9618
							void (pg !== null && (pg as any).__isVarRef !== true && (pg as any).__goValue === undefined ? ((pg as any) as policyGraph).deleteLeaf(mapping.IssuerDomainPolicy) : policyGraph.prototype.deleteLeaf.call(pg, mapping.IssuerDomainPolicy))
						}
					}

					// 6.1.4 (b) (3) (ii) -- as updated by RFC 9618
					void (pg !== null && (pg as any).__isVarRef !== true && (pg as any).__goValue === undefined ? ((pg as any) as policyGraph).prune() : policyGraph.prototype.prune.call(pg))

					for (const [issuerStr, subjectPolicies] of mappings?.entries() ?? []) {
						// 6.1.4 (b) (1) -- as updated by RFC 9618
						{
							let matching: policyGraphNode | $.VarRef<policyGraphNode> | null = (pg !== null && (pg as any).__isVarRef !== true && (pg as any).__goValue === undefined ? ((pg as any) as policyGraph).leafWithPolicy(new __goscript_oid.OID({der: $.stringToBytes(issuerStr)}, true)) : policyGraph.prototype.leafWithPolicy.call(pg, new __goscript_oid.OID({der: $.stringToBytes(issuerStr)}, true)))
							if (matching != null) {
								$.pointerValue<policyGraphNode>(matching).expectedPolicySet = subjectPolicies
							} else {
								{
									let __goscriptShadow0: policyGraphNode | $.VarRef<policyGraphNode> | null = (pg !== null && (pg as any).__isVarRef !== true && (pg as any).__goValue === undefined ? ((pg as any) as policyGraph).leafWithPolicy((await __goscript_init_anyPolicyOID(), __goscript_get_anyPolicyOID())) : policyGraph.prototype.leafWithPolicy.call(pg, (await __goscript_init_anyPolicyOID(), __goscript_get_anyPolicyOID())))
									if (__goscriptShadow0 != null) {
										// 6.1.4 (b) (2) -- as updated by RFC 9618
										let __goscriptShadow1: policyGraphNode | $.VarRef<policyGraphNode> | null = newPolicyGraphNode(new __goscript_oid.OID({der: $.stringToBytes(issuerStr)}, true), $.arrayToSlice<policyGraphNode | $.VarRef<policyGraphNode> | null>([__goscriptShadow0]))
										$.pointerValue<policyGraphNode>(__goscriptShadow1).expectedPolicySet = subjectPolicies
										void (pg !== null && (pg as any).__isVarRef !== true && (pg as any).__goValue === undefined ? ((pg as any) as policyGraph).insert(__goscriptShadow1) : policyGraph.prototype.insert.call(pg, __goscriptShadow1))
									}
								}
							}
						}
					}
				}
			}
		}

		if (i != 0) {
			// 6.1.4 (h)
			if (!isSelfSigned) {
				if (explicitPolicy > 0) {
					explicitPolicy--
				}
				if (policyMapping > 0) {
					policyMapping--
				}
				if (inhibitAnyPolicy > 0) {
					inhibitAnyPolicy--
				}
			}

			// 6.1.4 (i)
			if ((((cert$ as __goscript_x509.Certificate).RequireExplicitPolicy > 0) || (cert$ as __goscript_x509.Certificate).RequireExplicitPolicyZero) && ((cert$ as __goscript_x509.Certificate).RequireExplicitPolicy < explicitPolicy)) {
				explicitPolicy = (cert$ as __goscript_x509.Certificate).RequireExplicitPolicy
			}
			if ((((cert$ as __goscript_x509.Certificate).InhibitPolicyMapping > 0) || (cert$ as __goscript_x509.Certificate).InhibitPolicyMappingZero) && ((cert$ as __goscript_x509.Certificate).InhibitPolicyMapping < policyMapping)) {
				policyMapping = (cert$ as __goscript_x509.Certificate).InhibitPolicyMapping
			}
			// 6.1.4 (j)
			if ((((cert$ as __goscript_x509.Certificate).InhibitAnyPolicy > 0) || (cert$ as __goscript_x509.Certificate).InhibitAnyPolicyZero) && ((cert$ as __goscript_x509.Certificate).InhibitAnyPolicy < inhibitAnyPolicy)) {
				inhibitAnyPolicy = (cert$ as __goscript_x509.Certificate).InhibitAnyPolicy
			}
		}
	}

	// 6.1.5 (a)
	if (explicitPolicy > 0) {
		explicitPolicy--
	}

	// 6.1.5 (b)
	if ($.pointerValue<__goscript_x509.Certificate>($.arrayIndex(chain!, 0)).RequireExplicitPolicyZero) {
		explicitPolicy = 0
	}

	// 6.1.5 (g) (1) -- as updated by RFC 9618
	let validPolicyNodeSet: $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null> = null! as $.Slice<policyGraphNode | $.VarRef<policyGraphNode> | null>
	// 6.1.5 (g) (2) -- as updated by RFC 9618
	if (pg != null) {
		validPolicyNodeSet = await (pg !== null && (pg as any).__isVarRef !== true && (pg as any).__goValue === undefined ? ((pg as any) as policyGraph).validPolicyNodes() : policyGraph.prototype.validPolicyNodes.call(pg))
		// 6.1.5 (g) (3) -- as updated by RFC 9618
		{
			let currentAny: policyGraphNode | $.VarRef<policyGraphNode> | null = (pg !== null && (pg as any).__isVarRef !== true && (pg as any).__goValue === undefined ? ((pg as any) as policyGraph).leafWithPolicy((await __goscript_init_anyPolicyOID(), __goscript_get_anyPolicyOID())) : policyGraph.prototype.leafWithPolicy.call(pg, (await __goscript_init_anyPolicyOID(), __goscript_get_anyPolicyOID())))
			if (currentAny != null) {
				validPolicyNodeSet = $.appendOne(validPolicyNodeSet, currentAny, $.appendZeros.nil)
			}
		}
	}

	// 6.1.5 (g) (4) -- as updated by RFC 9618
	let authorityConstrainedPolicySet: globalThis.Map<string, boolean> | null = $.makeMap<string, boolean>([])
	for (let __goscriptRangeTarget17 = validPolicyNodeSet, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow17.length; __rangeIndex++) {
		let n = (__goscriptRangeWindow17.backing[__goscriptRangeWindow17.offset + __rangeIndex] as policyGraphNode | $.VarRef<policyGraphNode> | null)
		$.mapSet(authorityConstrainedPolicySet, $.bytesToString($.pointerValue<policyGraphNode>(n).validPolicy.der), true)
	}
	// 6.1.5 (g) (5) -- as updated by RFC 9618
	let userConstrainedPolicySet: globalThis.Map<string, boolean> | null = (maps.Clone(authorityConstrainedPolicySet) as globalThis.Map<string, boolean> | null)
	// 6.1.5 (g) (6) -- as updated by RFC 9618
	if (($.len(initialUserPolicySet) != 1) || !$.mapGet<string, boolean, boolean>(initialUserPolicySet, $.bytesToString((await __goscript_init_anyPolicyOID(), __goscript_get_anyPolicyOID()).der), false)[0]) {
		// 6.1.5 (g) (6) (i) -- as updated by RFC 9618
		for (const [p, __rangeValue] of userConstrainedPolicySet?.entries() ?? []) {
			if (!$.mapGet<string, boolean, boolean>(initialUserPolicySet, p, false)[0]) {
				$.deleteMapEntry(userConstrainedPolicySet, p)
			}
		}
		// 6.1.5 (g) (6) (ii) -- as updated by RFC 9618
		if ($.mapGet<string, boolean, boolean>(authorityConstrainedPolicySet, $.bytesToString((await __goscript_init_anyPolicyOID(), __goscript_get_anyPolicyOID()).der), false)[0]) {
			for (let [policy, __rangeValue] of initialUserPolicySet?.entries() ?? []) {
				$.mapSet(userConstrainedPolicySet, policy, true)
			}
		}
	}

	if ((explicitPolicy == 0) && ($.len(userConstrainedPolicySet) == 0)) {
		return false
	}

	return true
}

var __goscriptAwait: any
