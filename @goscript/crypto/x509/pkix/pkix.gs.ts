// Generated file based on pkix.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as asn1 from "@goscript/encoding/asn1/index.js"

import * as hex from "@goscript/encoding/hex/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as big from "@goscript/math/big/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/encoding/asn1/index.js"
import "@goscript/encoding/hex/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/big/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("crypto/x509/pkix", ["pkix.AlgorithmIdentifier", "pkix.RDNSequence", "pkix.RelativeDistinguishedNameSET", "pkix.AttributeTypeAndValue", "pkix.AttributeTypeAndValueSET", "pkix.Extension", "pkix.Name", "pkix.CertificateList", "pkix.TBSCertificateList", "pkix.RevokedCertificate"])

export type RDNSequence = $.Slice<RelativeDistinguishedNameSET>

$.registerNamedType("pkix.RDNSequence", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType("pkix.AttributeTypeAndValue", "pkix.RelativeDistinguishedNameSET")));

$.registerNamedValueType(
	"pkix.RDNSequence",
	{String: (receiver: any, ...args: any[]) => (RDNSequence_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*pkix.RDNSequence",
	{String: (receiver: any, ...args: any[]) => (RDNSequence_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type RelativeDistinguishedNameSET = $.Slice<AttributeTypeAndValue>

$.registerNamedType("pkix.RelativeDistinguishedNameSET", /* @__PURE__ */ $.sliceType("pkix.AttributeTypeAndValue"));

export class AlgorithmIdentifier {
	public get Algorithm(): asn1.ObjectIdentifier {
		return this._fields.Algorithm
	}

	public set Algorithm(value: asn1.ObjectIdentifier) {
		this._fields.Algorithm = value
	}

	public get Parameters(): asn1.RawValue {
		return this._fields.Parameters
	}

	public set Parameters(value: asn1.RawValue) {
		this._fields.Parameters = value
	}

	public _fields: {
		Algorithm: asn1.ObjectIdentifier
		Parameters: asn1.RawValue
	}

	constructor(init?: Partial<{Algorithm?: asn1.ObjectIdentifier, Parameters?: asn1.RawValue}>, __goscriptValue?: boolean) {
		this._fields = {
			Algorithm: init?.Algorithm ?? (null! as asn1.ObjectIdentifier),
			Parameters: init?.Parameters ? init.Parameters.clone() : new asn1.RawValue(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): AlgorithmIdentifier {
		return new AlgorithmIdentifier(this, true)
	}

	public __goscriptAssign(source: AlgorithmIdentifier): void {
		const target = this._fields
		const values = source._fields
		target.Algorithm = values.Algorithm
		$.assignStruct(target.Parameters, values.Parameters)
	}

	static __typeInfo = $.registerStructType(
		"pkix.AlgorithmIdentifier",
		() => new AlgorithmIdentifier(),
		() => [],
		AlgorithmIdentifier,
		() => [/* @__PURE__ */ $.structField("Algorithm", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [0], 0, true), /* @__PURE__ */ $.structField("Parameters", "asn1.RawValue", [1], 24, true, { tag: "asn1:\"optional\"" })]
	)
}

export class AttributeTypeAndValue {
	public get Type(): asn1.ObjectIdentifier {
		return this._fields.Type
	}

	public set Type(value: asn1.ObjectIdentifier) {
		this._fields.Type = value
	}

	public get Value(): any {
		return this._fields.Value
	}

	public set Value(value: any) {
		this._fields.Value = value
	}

	public _fields: {
		Type: asn1.ObjectIdentifier
		Value: any
	}

	constructor(init?: Partial<{Type?: asn1.ObjectIdentifier, Value?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? (null! as asn1.ObjectIdentifier),
			Value: init?.Value ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): AttributeTypeAndValue {
		return new AttributeTypeAndValue(this, true)
	}

	public __goscriptAssign(source: AttributeTypeAndValue): void {
		const target = this._fields
		const values = source._fields
		target.Type = values.Type
		target.Value = $.assignFieldValue(target.Value, values.Value, { kind: $.TypeKind.Interface, methods: [] })
	}

	static __typeInfo = $.registerStructType(
		"pkix.AttributeTypeAndValue",
		() => new AttributeTypeAndValue(),
		() => [],
		AttributeTypeAndValue,
		() => [/* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [0], 0, true), /* @__PURE__ */ $.structField("Value", { kind: $.TypeKind.Interface, methods: [] }, [1], 24, true)]
	)
}

export class AttributeTypeAndValueSET {
	public get Type(): asn1.ObjectIdentifier {
		return this._fields.Type
	}

	public set Type(value: asn1.ObjectIdentifier) {
		this._fields.Type = value
	}

	public get Value(): $.Slice<$.Slice<AttributeTypeAndValue>> {
		return this._fields.Value
	}

	public set Value(value: $.Slice<$.Slice<AttributeTypeAndValue>>) {
		this._fields.Value = value
	}

	public _fields: {
		Type: asn1.ObjectIdentifier
		Value: $.Slice<$.Slice<AttributeTypeAndValue>>
	}

	constructor(init?: Partial<{Type?: asn1.ObjectIdentifier, Value?: $.Slice<$.Slice<AttributeTypeAndValue>>}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? (null! as asn1.ObjectIdentifier),
			Value: init?.Value ?? (null! as $.Slice<$.Slice<AttributeTypeAndValue>>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): AttributeTypeAndValueSET {
		return new AttributeTypeAndValueSET(this, true)
	}

	public __goscriptAssign(source: AttributeTypeAndValueSET): void {
		const target = this._fields
		const values = source._fields
		target.Type = values.Type
		target.Value = values.Value
	}

	static __typeInfo = $.registerStructType(
		"pkix.AttributeTypeAndValueSET",
		() => new AttributeTypeAndValueSET(),
		() => [],
		AttributeTypeAndValueSET,
		() => [/* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [0], 0, true), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType("pkix.AttributeTypeAndValue")), [1], 24, true, { tag: "asn1:\"set\"" })]
	)
}

export class Extension {
	public get Id(): asn1.ObjectIdentifier {
		return this._fields.Id
	}

	public set Id(value: asn1.ObjectIdentifier) {
		this._fields.Id = value
	}

	public get Critical(): boolean {
		return this._fields.Critical
	}

	public set Critical(value: boolean) {
		this._fields.Critical = value
	}

	public get Value(): $.Slice<number> {
		return this._fields.Value
	}

	public set Value(value: $.Slice<number>) {
		this._fields.Value = value
	}

	public _fields: {
		Id: asn1.ObjectIdentifier
		Critical: boolean
		Value: $.Slice<number>
	}

	constructor(init?: Partial<{Id?: asn1.ObjectIdentifier, Critical?: boolean, Value?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Id: init?.Id ?? (null! as asn1.ObjectIdentifier),
			Critical: init?.Critical ?? (false as boolean),
			Value: init?.Value ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Extension {
		return new Extension(this, true)
	}

	public __goscriptAssign(source: Extension): void {
		const target = this._fields
		const values = source._fields
		target.Id = values.Id
		target.Critical = values.Critical
		target.Value = values.Value
	}

	static __typeInfo = $.registerStructType(
		"pkix.Extension",
		() => new Extension(),
		() => [],
		Extension,
		() => [/* @__PURE__ */ $.structField("Id", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [0], 0, true), /* @__PURE__ */ $.structField("Critical", /* @__PURE__ */ $.basicType("bool"), [1], 24, true, { tag: "asn1:\"optional\"" }), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 32, true)]
	)
}

export class Name {
	public get Country(): $.Slice<string> {
		return this._fields.Country
	}

	public set Country(value: $.Slice<string>) {
		this._fields.Country = value
	}

	public get Organization(): $.Slice<string> {
		return this._fields.Organization
	}

	public set Organization(value: $.Slice<string>) {
		this._fields.Organization = value
	}

	public get OrganizationalUnit(): $.Slice<string> {
		return this._fields.OrganizationalUnit
	}

	public set OrganizationalUnit(value: $.Slice<string>) {
		this._fields.OrganizationalUnit = value
	}

	public get Locality(): $.Slice<string> {
		return this._fields.Locality
	}

	public set Locality(value: $.Slice<string>) {
		this._fields.Locality = value
	}

	public get Province(): $.Slice<string> {
		return this._fields.Province
	}

	public set Province(value: $.Slice<string>) {
		this._fields.Province = value
	}

	public get StreetAddress(): $.Slice<string> {
		return this._fields.StreetAddress
	}

	public set StreetAddress(value: $.Slice<string>) {
		this._fields.StreetAddress = value
	}

	public get PostalCode(): $.Slice<string> {
		return this._fields.PostalCode
	}

	public set PostalCode(value: $.Slice<string>) {
		this._fields.PostalCode = value
	}

	public get SerialNumber(): string {
		return this._fields.SerialNumber
	}

	public set SerialNumber(value: string) {
		this._fields.SerialNumber = value
	}

	public get CommonName(): string {
		return this._fields.CommonName
	}

	public set CommonName(value: string) {
		this._fields.CommonName = value
	}

	// Names contains all parsed attributes. When parsing distinguished names,
	// this can be used to extract non-standard attributes that are not parsed
	// by this package. When marshaling to RDNSequences, the Names field is
	// ignored, see ExtraNames.
	public get Names(): $.Slice<AttributeTypeAndValue> {
		return this._fields.Names
	}

	public set Names(value: $.Slice<AttributeTypeAndValue>) {
		this._fields.Names = value
	}

	// ExtraNames contains attributes to be copied, raw, into any marshaled
	// distinguished names. Values override any attributes with the same OID.
	// The ExtraNames field is not populated when parsing, see Names.
	public get ExtraNames(): $.Slice<AttributeTypeAndValue> {
		return this._fields.ExtraNames
	}

	public set ExtraNames(value: $.Slice<AttributeTypeAndValue>) {
		this._fields.ExtraNames = value
	}

	public _fields: {
		Country: $.Slice<string>
		Organization: $.Slice<string>
		OrganizationalUnit: $.Slice<string>
		Locality: $.Slice<string>
		Province: $.Slice<string>
		StreetAddress: $.Slice<string>
		PostalCode: $.Slice<string>
		SerialNumber: string
		CommonName: string
		Names: $.Slice<AttributeTypeAndValue>
		ExtraNames: $.Slice<AttributeTypeAndValue>
	}

	constructor(init?: Partial<{Country?: $.Slice<string>, Organization?: $.Slice<string>, OrganizationalUnit?: $.Slice<string>, Locality?: $.Slice<string>, Province?: $.Slice<string>, StreetAddress?: $.Slice<string>, PostalCode?: $.Slice<string>, SerialNumber?: string, CommonName?: string, Names?: $.Slice<AttributeTypeAndValue>, ExtraNames?: $.Slice<AttributeTypeAndValue>}>, __goscriptValue?: boolean) {
		this._fields = {
			Country: init?.Country ?? (null! as $.Slice<string>),
			Organization: init?.Organization ?? (null! as $.Slice<string>),
			OrganizationalUnit: init?.OrganizationalUnit ?? (null! as $.Slice<string>),
			Locality: init?.Locality ?? (null! as $.Slice<string>),
			Province: init?.Province ?? (null! as $.Slice<string>),
			StreetAddress: init?.StreetAddress ?? (null! as $.Slice<string>),
			PostalCode: init?.PostalCode ?? (null! as $.Slice<string>),
			SerialNumber: init?.SerialNumber ?? ("" as string),
			CommonName: init?.CommonName ?? ("" as string),
			Names: init?.Names ?? (null! as $.Slice<AttributeTypeAndValue>),
			ExtraNames: init?.ExtraNames ?? (null! as $.Slice<AttributeTypeAndValue>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Name {
		return new Name(this, true)
	}

	public __goscriptAssign(source: Name): void {
		const target = this._fields
		const values = source._fields
		target.Country = values.Country
		target.Organization = values.Organization
		target.OrganizationalUnit = values.OrganizationalUnit
		target.Locality = values.Locality
		target.Province = values.Province
		target.StreetAddress = values.StreetAddress
		target.PostalCode = values.PostalCode
		target.SerialNumber = values.SerialNumber
		target.CommonName = values.CommonName
		target.Names = values.Names
		target.ExtraNames = values.ExtraNames
	}

	public FillFromRDNSequence(rdns: $.VarRef<RDNSequence> | null): void {
		let n: Name | $.VarRef<Name> | null = this;
		const n$: Name = n == null ? $.pointerTarget<Name>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<Name>(n)
		for (let __goscriptRangeTarget2 = $.pointerValue<RDNSequence>(rdns), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let rdn = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as RelativeDistinguishedNameSET) as RelativeDistinguishedNameSET)
			if ($.sliceLen((rdn as RelativeDistinguishedNameSET)) == 0) {
				continue
			}

			for (let __goscriptRangeTarget1 = rdn, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let atv = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as AttributeTypeAndValue)).clone();
				;(n$ as Name).Names = $.appendOne((n$ as Name).Names, (atv).clone())
				let [value, ok] = $.typeAssertTuple<string>(atv.Value, /* @__PURE__ */ $.basicType("string"))
				if (!ok) {
					continue
				}

				let t: asn1.ObjectIdentifier = (atv.Type as asn1.ObjectIdentifier)
				if (((($.sliceLen((t as asn1.ObjectIdentifier)) == 4) && ($.arrayIndex(t!, 0) == 2)) && ($.arrayIndex(t!, 1) == 5)) && ($.arrayIndex(t!, 2) == 4)) {
					switch ($.arrayIndex(t!, 3)) {
						case 3:
						{
							;(n$ as Name).CommonName = value
							break
						}
						case 5:
						{
							;(n$ as Name).SerialNumber = value
							break
						}
						case 6:
						{
							;(n$ as Name).Country = $.appendOne((n$ as Name).Country, value)
							break
						}
						case 7:
						{
							;(n$ as Name).Locality = $.appendOne((n$ as Name).Locality, value)
							break
						}
						case 8:
						{
							;(n$ as Name).Province = $.appendOne((n$ as Name).Province, value)
							break
						}
						case 9:
						{
							;(n$ as Name).StreetAddress = $.appendOne((n$ as Name).StreetAddress, value)
							break
						}
						case 10:
						{
							;(n$ as Name).Organization = $.appendOne((n$ as Name).Organization, value)
							break
						}
						case 11:
						{
							;(n$ as Name).OrganizationalUnit = $.appendOne((n$ as Name).OrganizationalUnit, value)
							break
						}
						case 17:
						{
							;(n$ as Name).PostalCode = $.appendOne((n$ as Name).PostalCode, value)
							break
						}
					}
				}
			}
		}
	}

	public async String(): globalThis.Promise<string> {
		const n = this;
		let rdns: RDNSequence = null! as RDNSequence
		// If there are no ExtraNames, surface the parsed value (all entries in
		// Names) instead.
		if (n.ExtraNames == null) {
			for (let __goscriptRangeTarget3 = n.Names, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
				let atv = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as AttributeTypeAndValue)).clone()
				let t: asn1.ObjectIdentifier = (atv.Type as asn1.ObjectIdentifier)
				if (((($.sliceLen((t as asn1.ObjectIdentifier)) == 4) && ($.arrayIndex(t!, 0) == 2)) && ($.arrayIndex(t!, 1) == 5)) && ($.arrayIndex(t!, 2) == 4)) {
					switch ($.arrayIndex(t!, 3)) {
						case 3:
						case 5:
						case 6:
						case 7:
						case 8:
						case 9:
						case 10:
						case 11:
						case 17:
						{
							continue
							break
						}
					}
				}
				// Place non-standard parsed values at the beginning of the sequence
				// so they will be at the end of the string. See Issue 39924.
				rdns = ($.appendOne((rdns as RDNSequence), ($.arrayToSlice<AttributeTypeAndValue>([(atv).clone()]) as RelativeDistinguishedNameSET), $.appendZeros.nil) as RDNSequence)
			}
		}
		rdns = ($.appendSlice((rdns as RDNSequence), n.ToRDNSequence(), $.appendZeros.nil) as RDNSequence)
		return RDNSequence_String(rdns)
	}

	public ToRDNSequence(): RDNSequence {
		const n = this;
		let ret: RDNSequence = null! as RDNSequence
		ret = (n.appendRDNs((ret as RDNSequence), n.Country, (oidCountry as asn1.ObjectIdentifier)) as RDNSequence)
		ret = (n.appendRDNs((ret as RDNSequence), n.Province, (oidProvince as asn1.ObjectIdentifier)) as RDNSequence)
		ret = (n.appendRDNs((ret as RDNSequence), n.Locality, (oidLocality as asn1.ObjectIdentifier)) as RDNSequence)
		ret = (n.appendRDNs((ret as RDNSequence), n.StreetAddress, (oidStreetAddress as asn1.ObjectIdentifier)) as RDNSequence)
		ret = (n.appendRDNs((ret as RDNSequence), n.PostalCode, (oidPostalCode as asn1.ObjectIdentifier)) as RDNSequence)
		ret = (n.appendRDNs((ret as RDNSequence), n.Organization, (oidOrganization as asn1.ObjectIdentifier)) as RDNSequence)
		ret = (n.appendRDNs((ret as RDNSequence), n.OrganizationalUnit, (oidOrganizationalUnit as asn1.ObjectIdentifier)) as RDNSequence)
		if ($.stringLen(n.CommonName) > 0) {
			ret = (n.appendRDNs((ret as RDNSequence), $.arrayToSlice<string>([n.CommonName]), (oidCommonName as asn1.ObjectIdentifier)) as RDNSequence)
		}
		if ($.stringLen(n.SerialNumber) > 0) {
			ret = (n.appendRDNs((ret as RDNSequence), $.arrayToSlice<string>([n.SerialNumber]), (oidSerialNumber as asn1.ObjectIdentifier)) as RDNSequence)
		}
		for (let __goscriptRangeTarget4 = n.ExtraNames, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let atv = ((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as AttributeTypeAndValue)).clone()
			ret = ($.appendOne((ret as RDNSequence), ($.arrayToSlice<AttributeTypeAndValue>([(atv).clone()]) as RelativeDistinguishedNameSET), $.appendZeros.nil) as RDNSequence)
		}

		return (ret as RDNSequence)
	}

	public appendRDNs(_in: RDNSequence, values: $.Slice<string>, oid: asn1.ObjectIdentifier): RDNSequence {
		const n = this;
		if (($.sliceLen(values) == 0) || oidInAttributeTypeAndValue((oid as asn1.ObjectIdentifier), n.ExtraNames)) {
			return (_in as RDNSequence)
		}

		let s: $.Slice<AttributeTypeAndValue> = $.makeSlice<AttributeTypeAndValue>($.sliceLen(values), undefined, undefined, () => new AttributeTypeAndValue(undefined, true))
		for (let __goscriptRangeTarget5 = values, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __goscriptSliceWindow1 = $.sliceRange(s), i = 0; i < __goscriptRangeWindow5.length; i++) {
			let value = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as string);
			;((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as AttributeTypeAndValue).Type = (oid as asn1.ObjectIdentifier);
			;((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as AttributeTypeAndValue).Value = value
		}

		return ($.appendOne((_in as RDNSequence), (s as RelativeDistinguishedNameSET), $.appendZeros.nil) as RDNSequence)
	}

	static __typeInfo = $.registerStructType(
		"pkix.Name",
		() => new Name(),
		() => [$.methodSignature("FillFromRDNSequence", [["rdns", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType("pkix.AttributeTypeAndValue", "pkix.RelativeDistinguishedNameSET"), "pkix.RDNSequence"))]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToRDNSequence", [], [["ret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType("pkix.AttributeTypeAndValue", "pkix.RelativeDistinguishedNameSET"), "pkix.RDNSequence")]]), $.methodSignature("appendRDNs", [["in", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType("pkix.AttributeTypeAndValue", "pkix.RelativeDistinguishedNameSET"), "pkix.RDNSequence")], ["values", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType("pkix.AttributeTypeAndValue", "pkix.RelativeDistinguishedNameSET"), "pkix.RDNSequence")])],
		Name,
		() => [/* @__PURE__ */ $.structField("Country", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, true), /* @__PURE__ */ $.structField("Organization", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [1], 24, true), /* @__PURE__ */ $.structField("OrganizationalUnit", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 48, true), /* @__PURE__ */ $.structField("Locality", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 72, true), /* @__PURE__ */ $.structField("Province", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [4], 96, true), /* @__PURE__ */ $.structField("StreetAddress", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [5], 120, true), /* @__PURE__ */ $.structField("PostalCode", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [6], 144, true), /* @__PURE__ */ $.structField("SerialNumber", /* @__PURE__ */ $.basicType("string"), [7], 168, true), /* @__PURE__ */ $.structField("CommonName", /* @__PURE__ */ $.basicType("string"), [8], 184, true), /* @__PURE__ */ $.structField("Names", /* @__PURE__ */ $.sliceType("pkix.AttributeTypeAndValue"), [9], 200, true), /* @__PURE__ */ $.structField("ExtraNames", /* @__PURE__ */ $.sliceType("pkix.AttributeTypeAndValue"), [10], 224, true)]
	)
}

export class TBSCertificateList {
	public get Raw(): asn1.RawContent {
		return this._fields.Raw
	}

	public set Raw(value: asn1.RawContent) {
		this._fields.Raw = value
	}

	public get Version(): number {
		return this._fields.Version
	}

	public set Version(value: number) {
		this._fields.Version = value
	}

	public get Signature(): AlgorithmIdentifier {
		return this._fields.Signature
	}

	public set Signature(value: AlgorithmIdentifier) {
		this._fields.Signature = value
	}

	public get Issuer(): RDNSequence {
		return this._fields.Issuer
	}

	public set Issuer(value: RDNSequence) {
		this._fields.Issuer = value
	}

	public get ThisUpdate(): time.Time {
		return this._fields.ThisUpdate
	}

	public set ThisUpdate(value: time.Time) {
		this._fields.ThisUpdate = value
	}

	public get NextUpdate(): time.Time {
		return this._fields.NextUpdate
	}

	public set NextUpdate(value: time.Time) {
		this._fields.NextUpdate = value
	}

	public get RevokedCertificates(): $.Slice<RevokedCertificate> {
		return this._fields.RevokedCertificates
	}

	public set RevokedCertificates(value: $.Slice<RevokedCertificate>) {
		this._fields.RevokedCertificates = value
	}

	public get Extensions(): $.Slice<Extension> {
		return this._fields.Extensions
	}

	public set Extensions(value: $.Slice<Extension>) {
		this._fields.Extensions = value
	}

	public _fields: {
		Raw: asn1.RawContent
		Version: number
		Signature: AlgorithmIdentifier
		Issuer: RDNSequence
		ThisUpdate: time.Time
		NextUpdate: time.Time
		RevokedCertificates: $.Slice<RevokedCertificate>
		Extensions: $.Slice<Extension>
	}

	constructor(init?: Partial<{Raw?: asn1.RawContent, Version?: number, Signature?: AlgorithmIdentifier, Issuer?: RDNSequence, ThisUpdate?: time.Time, NextUpdate?: time.Time, RevokedCertificates?: $.Slice<RevokedCertificate>, Extensions?: $.Slice<Extension>}>, __goscriptValue?: boolean) {
		this._fields = {
			Raw: init?.Raw ?? (null! as asn1.RawContent),
			Version: init?.Version ?? (0 as number),
			Signature: init?.Signature ? init.Signature.clone() : new AlgorithmIdentifier(undefined, true),
			Issuer: init?.Issuer ?? (null! as RDNSequence),
			ThisUpdate: init?.ThisUpdate ? $.markAsStructValue($.cloneStructValue(init.ThisUpdate)) : $.markAsStructValue(new time.Time()),
			NextUpdate: init?.NextUpdate ? $.markAsStructValue($.cloneStructValue(init.NextUpdate)) : $.markAsStructValue(new time.Time()),
			RevokedCertificates: init?.RevokedCertificates ?? (null! as $.Slice<RevokedCertificate>),
			Extensions: init?.Extensions ?? (null! as $.Slice<Extension>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TBSCertificateList {
		return new TBSCertificateList(this, true)
	}

	public __goscriptAssign(source: TBSCertificateList): void {
		const target = this._fields
		const values = source._fields
		target.Raw = values.Raw
		target.Version = values.Version
		$.assignStruct(target.Signature, values.Signature)
		target.Issuer = values.Issuer
		$.assignStruct(target.ThisUpdate, values.ThisUpdate)
		$.assignStruct(target.NextUpdate, values.NextUpdate)
		target.RevokedCertificates = values.RevokedCertificates
		target.Extensions = values.Extensions
	}

	static __typeInfo = $.registerStructType(
		"pkix.TBSCertificateList",
		() => new TBSCertificateList(),
		() => [],
		TBSCertificateList,
		() => [/* @__PURE__ */ $.structField("Raw", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "asn1.RawContent"), [0], 0, true), /* @__PURE__ */ $.structField("Version", /* @__PURE__ */ $.basicType("int"), [1], 24, true, { tag: "asn1:\"optional,default:0\"" }), /* @__PURE__ */ $.structField("Signature", "pkix.AlgorithmIdentifier", [2], 32, true), /* @__PURE__ */ $.structField("Issuer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType("pkix.AttributeTypeAndValue", "pkix.RelativeDistinguishedNameSET"), "pkix.RDNSequence"), [3], 128, true), /* @__PURE__ */ $.structField("ThisUpdate", "time.Time", [4], 152, true), /* @__PURE__ */ $.structField("NextUpdate", "time.Time", [5], 176, true, { tag: "asn1:\"optional\"" }), /* @__PURE__ */ $.structField("RevokedCertificates", /* @__PURE__ */ $.sliceType("pkix.RevokedCertificate"), [6], 200, true, { tag: "asn1:\"optional\"" }), /* @__PURE__ */ $.structField("Extensions", /* @__PURE__ */ $.sliceType("pkix.Extension"), [7], 224, true, { tag: "asn1:\"tag:0,optional,explicit\"" })]
	)
}

export class CertificateList {
	public get TBSCertList(): TBSCertificateList {
		return this._fields.TBSCertList
	}

	public set TBSCertList(value: TBSCertificateList) {
		this._fields.TBSCertList = value
	}

	public get SignatureAlgorithm(): AlgorithmIdentifier {
		return this._fields.SignatureAlgorithm
	}

	public set SignatureAlgorithm(value: AlgorithmIdentifier) {
		this._fields.SignatureAlgorithm = value
	}

	public get SignatureValue(): asn1.BitString {
		return this._fields.SignatureValue
	}

	public set SignatureValue(value: asn1.BitString) {
		this._fields.SignatureValue = value
	}

	public _fields: {
		TBSCertList: TBSCertificateList
		SignatureAlgorithm: AlgorithmIdentifier
		SignatureValue: asn1.BitString
	}

	constructor(init?: Partial<{TBSCertList?: TBSCertificateList, SignatureAlgorithm?: AlgorithmIdentifier, SignatureValue?: asn1.BitString}>, __goscriptValue?: boolean) {
		this._fields = {
			TBSCertList: init?.TBSCertList ? init.TBSCertList.clone() : new TBSCertificateList(undefined, true),
			SignatureAlgorithm: init?.SignatureAlgorithm ? init.SignatureAlgorithm.clone() : new AlgorithmIdentifier(undefined, true),
			SignatureValue: init?.SignatureValue ? init.SignatureValue.clone() : new asn1.BitString(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CertificateList {
		return new CertificateList(this, true)
	}

	public __goscriptAssign(source: CertificateList): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.TBSCertList, values.TBSCertList)
		$.assignStruct(target.SignatureAlgorithm, values.SignatureAlgorithm)
		$.assignStruct(target.SignatureValue, values.SignatureValue)
	}

	public HasExpired(now: time.Time): boolean {
		const certList: CertificateList | $.VarRef<CertificateList> | null = this;
		return !$.markAsStructValue($.cloneStructValue(now)).Before($.markAsStructValue($.cloneStructValue($.pointerValue<CertificateList>(certList).TBSCertList.NextUpdate)))
	}

	static __typeInfo = $.registerStructType(
		"pkix.CertificateList",
		() => new CertificateList(),
		() => [$.methodSignature("HasExpired", [["now", "time.Time"]], [/* @__PURE__ */ $.basicType("bool")], true)],
		CertificateList,
		() => [/* @__PURE__ */ $.structField("TBSCertList", "pkix.TBSCertificateList", [0], 0, true), /* @__PURE__ */ $.structField("SignatureAlgorithm", "pkix.AlgorithmIdentifier", [1], 248, true), /* @__PURE__ */ $.structField("SignatureValue", "asn1.BitString", [2], 344, true)]
	)
}

export class RevokedCertificate {
	public get SerialNumber(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.SerialNumber
	}

	public set SerialNumber(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.SerialNumber = value
	}

	public get RevocationTime(): time.Time {
		return this._fields.RevocationTime
	}

	public set RevocationTime(value: time.Time) {
		this._fields.RevocationTime = value
	}

	public get Extensions(): $.Slice<Extension> {
		return this._fields.Extensions
	}

	public set Extensions(value: $.Slice<Extension>) {
		this._fields.Extensions = value
	}

	public _fields: {
		SerialNumber: big.Int | $.VarRef<big.Int> | null
		RevocationTime: time.Time
		Extensions: $.Slice<Extension>
	}

	constructor(init?: Partial<{SerialNumber?: big.Int | $.VarRef<big.Int> | null, RevocationTime?: time.Time, Extensions?: $.Slice<Extension>}>, __goscriptValue?: boolean) {
		this._fields = {
			SerialNumber: init?.SerialNumber ?? (null! as big.Int | $.VarRef<big.Int> | null),
			RevocationTime: init?.RevocationTime ? $.markAsStructValue($.cloneStructValue(init.RevocationTime)) : $.markAsStructValue(new time.Time()),
			Extensions: init?.Extensions ?? (null! as $.Slice<Extension>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RevokedCertificate {
		return new RevokedCertificate(this, true)
	}

	public __goscriptAssign(source: RevokedCertificate): void {
		const target = this._fields
		const values = source._fields
		target.SerialNumber = values.SerialNumber
		$.assignStruct(target.RevocationTime, values.RevocationTime)
		target.Extensions = values.Extensions
	}

	static __typeInfo = $.registerStructType(
		"pkix.RevokedCertificate",
		() => new RevokedCertificate(),
		() => [],
		RevokedCertificate,
		() => [/* @__PURE__ */ $.structField("SerialNumber", /* @__PURE__ */ $.pointerType("big.Int"), [0], 0, true), /* @__PURE__ */ $.structField("RevocationTime", "time.Time", [1], 8, true), /* @__PURE__ */ $.structField("Extensions", /* @__PURE__ */ $.sliceType("pkix.Extension"), [2], 32, true, { tag: "asn1:\"optional\"" })]
	)
}

export let attributeTypeNames: globalThis.Map<string, string> | null = $.makeMap<string, string>([["2.5.4.6", "C"], ["2.5.4.10", "O"], ["2.5.4.11", "OU"], ["2.5.4.3", "CN"], ["2.5.4.5", "SERIALNUMBER"], ["2.5.4.7", "L"], ["2.5.4.8", "ST"], ["2.5.4.9", "STREET"], ["2.5.4.17", "POSTALCODE"]])

export function __goscript_set_attributeTypeNames(__goscriptValue: globalThis.Map<string, string> | null): void {
	attributeTypeNames = __goscriptValue
}

export async function RDNSequence_String(r: RDNSequence): globalThis.Promise<string> {
	let buf: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
	for (let __goscriptSliceWindow0 = $.sliceRange(r), i = 0; i < __goscriptSliceWindow0.length; i++) {
		let rdn: RelativeDistinguishedNameSET = (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, (__goscriptSliceWindow0.length - 1) - i)] as RelativeDistinguishedNameSET) as RelativeDistinguishedNameSET)
		if (i > 0) {
			buf.value.WriteByte(44)
		}
		for (let __goscriptRangeTarget0 = rdn, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), j = 0; j < __goscriptRangeWindow0.length; j++) {
			let tv = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + j] as AttributeTypeAndValue)).clone()
			if (j > 0) {
				buf.value.WriteByte(43)
			}

			let oidString = asn1.ObjectIdentifier_String(tv.Type)
			let [typeName, ok] = $.mapGet<string, string, string>(attributeTypeNames, oidString, "")
			if (!ok) {
				// RFC 2253 §2.4: if the value's ASN.1 type has a string
				// representation, render it as a string; otherwise hex-encode
				// the DER.
				{
					let [, __goscriptShadow0] = $.typeAssertTuple<string>(tv.Value, /* @__PURE__ */ $.basicType("string"))
					if (!__goscriptShadow0) {
						let __goscriptTuple0: any = await asn1.Marshal(tv.Value)
						let derBytes: $.Slice<number> = __goscriptTuple0[0]
						let err = __goscriptTuple0[1]
						if (err == null) {
							buf.value.WriteString(oidString)
							buf.value.WriteString("=#")
							buf.value.WriteString(hex.EncodeToString(derBytes))
							continue
						}
					}
				}

				typeName = oidString
			}

			let valueString = await fmt.Sprint(tv.Value)
			let escaped: $.Slice<number> = $.makeSlice<number>(0, $.stringLen(valueString), "number")

			for (let __goscriptRunes0 = $.stringRunes(valueString); __goscriptRunes0.next(); ) {
				const k = __goscriptRunes0.index
				const c = __goscriptRunes0.rune
				let escape = false

				switch (c) {
					case 44:
					case 43:
					case 34:
					case 92:
					case 60:
					case 62:
					case 59:
					{
						escape = true
						break
					}
					case 32:
					{
						escape = (k == 0) || (k == ($.stringLen(valueString) - 1))
						break
					}
					case 35:
					{
						escape = k == 0
						break
					}
				}

				if (escape) {
					escaped = $.append(escaped, $.int(92, 32), $.int(c, 32))
				} else {
					escaped = $.appendOne(escaped, $.int(c, 32))
				}
			}

			buf.value.WriteString(typeName)
			buf.value.WriteByte(61)
			buf.value.WriteString($.runesToString(escaped))
		}
	}

	return buf.value.String()
}

export let oidCountry: $.Slice<number> = $.arrayToSlice<number>([2, 5, 4, 6])

export function __goscript_set_oidCountry(__goscriptValue: $.Slice<number>): void {
	oidCountry = __goscriptValue
}

export let oidOrganization: $.Slice<number> = $.arrayToSlice<number>([2, 5, 4, 10])

export function __goscript_set_oidOrganization(__goscriptValue: $.Slice<number>): void {
	oidOrganization = __goscriptValue
}

export let oidOrganizationalUnit: $.Slice<number> = $.arrayToSlice<number>([2, 5, 4, 11])

export function __goscript_set_oidOrganizationalUnit(__goscriptValue: $.Slice<number>): void {
	oidOrganizationalUnit = __goscriptValue
}

export let oidCommonName: $.Slice<number> = $.arrayToSlice<number>([2, 5, 4, 3])

export function __goscript_set_oidCommonName(__goscriptValue: $.Slice<number>): void {
	oidCommonName = __goscriptValue
}

export let oidSerialNumber: $.Slice<number> = $.arrayToSlice<number>([2, 5, 4, 5])

export function __goscript_set_oidSerialNumber(__goscriptValue: $.Slice<number>): void {
	oidSerialNumber = __goscriptValue
}

export let oidLocality: $.Slice<number> = $.arrayToSlice<number>([2, 5, 4, 7])

export function __goscript_set_oidLocality(__goscriptValue: $.Slice<number>): void {
	oidLocality = __goscriptValue
}

export let oidProvince: $.Slice<number> = $.arrayToSlice<number>([2, 5, 4, 8])

export function __goscript_set_oidProvince(__goscriptValue: $.Slice<number>): void {
	oidProvince = __goscriptValue
}

export let oidStreetAddress: $.Slice<number> = $.arrayToSlice<number>([2, 5, 4, 9])

export function __goscript_set_oidStreetAddress(__goscriptValue: $.Slice<number>): void {
	oidStreetAddress = __goscriptValue
}

export let oidPostalCode: $.Slice<number> = $.arrayToSlice<number>([2, 5, 4, 17])

export function __goscript_set_oidPostalCode(__goscriptValue: $.Slice<number>): void {
	oidPostalCode = __goscriptValue
}

export function oidInAttributeTypeAndValue(oid: asn1.ObjectIdentifier, atv: $.Slice<AttributeTypeAndValue>): boolean {
	for (let __goscriptRangeTarget6 = atv, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
		let a = ((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as AttributeTypeAndValue)).clone()
		if (asn1.ObjectIdentifier_Equal(a.Type, (oid as asn1.ObjectIdentifier))) {
			return true
		}
	}
	return false
}
