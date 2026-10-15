// Generated file based on constraints.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as net from "@goscript/net/index.js"

import * as netip from "@goscript/net/netip/index.js"

import * as url from "@goscript/net/url/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strings from "@goscript/strings/index.js"

import type * as crypto from "@goscript/crypto/index.js"

import * as pkix from "@goscript/crypto/x509/pkix/index.js"

import * as asn1 from "@goscript/encoding/asn1/index.js"

import type * as io from "@goscript/io/index.js"

import * as big from "@goscript/math/big/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_cert_pool from "./cert_pool.gs.ts"

import * as __goscript_oid from "./oid.gs.ts"

import * as __goscript_parser from "./parser.gs.ts"

import * as __goscript_root_unix from "./root_unix.gs.ts"

import * as __goscript_verify from "./verify.gs.ts"

import * as __goscript_x509 from "./x509.gs.ts"

import * as __goscript_x509_string from "./x509_string.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/index.js"
import "@goscript/net/netip/index.js"
import "@goscript/net/url/index.js"
import "@goscript/slices/index.js"
import "@goscript/strings/index.js"
import "@goscript/crypto/x509/pkix/index.js"
import "@goscript/encoding/asn1/index.js"
import "@goscript/math/big/index.js"
import "@goscript/time/index.js"
import "./cert_pool.gs.ts"
import "./oid.gs.ts"
import "./parser.gs.ts"
import "./root_unix.gs.ts"
import "./verify.gs.ts"
import "./x509.gs.ts"
import "./x509_string.gs.ts"

$.registerTypePackagePath("crypto/x509", ["x509.nameConstraintsSet", "x509.ipConstraints", "x509.dnsConstraints", "x509.emailConstraints", "x509.constraints", "x509.chainConstraints", "x509.parsedURI"])

export class nameConstraintsSet {
	public get _set(): $.Slice<any> {
		return this._fields._set
	}

	public set _set(value: $.Slice<any>) {
		this._fields._set = value
	}

	public _fields: {
		_set: $.Slice<any>
	}

	constructor(init?: Partial<{_set?: $.Slice<any>}>, __goscriptValue?: boolean) {
		this._fields = {
			_set: init?._set ?? (null! as $.Slice<any>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nameConstraintsSet {
		return new nameConstraintsSet(this, true)
	}

	public __goscriptAssign(source: nameConstraintsSet): void {
		const target = this._fields
		const values = source._fields
		target._set = values._set
	}

	public async search(__typeArgs: $.GenericTypeArgs | undefined, s: any, cmp: ((_p0: any, _p1: any) => number | globalThis.Promise<number>) | null, match: ((_p0: any, _p1: any) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<[any, boolean]> {
		const nc: nameConstraintsSet | $.VarRef<nameConstraintsSet> | null = this;
		let lowerBound: any = $.genericZero(__typeArgs, "T", null)
		let exactMatch: boolean = false
		const nc$: nameConstraintsSet = nc == null ? $.pointerTarget<nameConstraintsSet>(nc) : (nc as any).__isVarRef === true ? (nc as any).value : (nc as any).__goValue === undefined ? (nc as any) : $.pointerTarget<nameConstraintsSet>(nc)
		if ($.sliceLen((nc$ as nameConstraintsSet)._set) == 0) {
			return [lowerBound, false]
		}
		// Look for the lower bound of s in the set.
		let [i, found] = await slices.BinarySearchFunc((nc$ as nameConstraintsSet)._set, s, cmp)
		// If we found an exact match, return it
		if (found) {
			return [$.arrayIndex((nc$ as nameConstraintsSet)._set!, i), true]
		}

		if (i < 0) {
			return [lowerBound, false]
		}

		let constraint: any = $.genericZero(__typeArgs, "T", null)
		if (i == 0) {
			constraint = $.arrayIndex((nc$ as nameConstraintsSet)._set!, 0)
		} else {
			constraint = $.arrayIndex((nc$ as nameConstraintsSet)._set!, i - 1)
		}
		if ((__goscriptAwait = match!(constraint, s), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return [constraint, true]
		}
		return [lowerBound, false]
	}

	public async sortAndPrune(__typeArgs: $.GenericTypeArgs | undefined, cmp: ((_p0: any, _p1: any) => number | globalThis.Promise<number>) | null, subset: ((_p0: any, _p1: any) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
		let nc: nameConstraintsSet | $.VarRef<nameConstraintsSet> | null = this;
		const nc$: nameConstraintsSet = nc == null ? $.pointerTarget<nameConstraintsSet>(nc) : (nc as any).__isVarRef === true ? (nc as any).value : (nc as any).__goValue === undefined ? (nc as any) : $.pointerTarget<nameConstraintsSet>(nc)
		if ($.sliceLen((nc$ as nameConstraintsSet)._set) < 2) {
			return
		}

		await slices.SortFunc((nc$ as nameConstraintsSet)._set, cmp)

		if ($.sliceLen((nc$ as nameConstraintsSet)._set) < 2) {
			return
		}
		let writeIndex = 1
		for (let readIndex = 1; readIndex < $.sliceLen((nc$ as nameConstraintsSet)._set); readIndex++) {
			if (!(__goscriptAwait = subset!($.arrayIndex((nc$ as nameConstraintsSet)._set!, writeIndex - 1), $.arrayIndex((nc$ as nameConstraintsSet)._set!, readIndex)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				$.sliceElems((nc$ as nameConstraintsSet)._set!)[$.sliceSlot((nc$ as nameConstraintsSet)._set!, writeIndex)] = $.arrayIndex((nc$ as nameConstraintsSet)._set!, readIndex)
				writeIndex++
			}
		}
		;(nc$ as nameConstraintsSet)._set = $.goSlice((nc$ as nameConstraintsSet)._set, undefined, writeIndex)
	}

	static __typeInfo = $.registerStructType(
		"x509.nameConstraintsSet",
		() => new nameConstraintsSet(),
		() => [$.methodSignature("search", [["s", { kind: $.TypeKind.Interface, methods: [] }], ["cmp", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)], ["match", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [["lowerBound", { kind: $.TypeKind.Interface, methods: [] }], ["exactMatch", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("sortAndPrune", [["cmp", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)], ["subset", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [], true)],
		nameConstraintsSet,
		() => [/* @__PURE__ */ $.structField("set", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [0], 0, false, { key: "_set", pkgPath: "crypto/x509" })]
	)
}

export class ipConstraints {
	public get ipv4(): nameConstraintsSet | $.VarRef<nameConstraintsSet> | null {
		return this._fields.ipv4
	}

	public set ipv4(value: nameConstraintsSet | $.VarRef<nameConstraintsSet> | null) {
		this._fields.ipv4 = value
	}

	public get ipv6(): nameConstraintsSet | $.VarRef<nameConstraintsSet> | null {
		return this._fields.ipv6
	}

	public set ipv6(value: nameConstraintsSet | $.VarRef<nameConstraintsSet> | null) {
		this._fields.ipv6 = value
	}

	public _fields: {
		ipv4: nameConstraintsSet | $.VarRef<nameConstraintsSet> | null
		ipv6: nameConstraintsSet | $.VarRef<nameConstraintsSet> | null
	}

	constructor(init?: Partial<{ipv4?: nameConstraintsSet | $.VarRef<nameConstraintsSet> | null, ipv6?: nameConstraintsSet | $.VarRef<nameConstraintsSet> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ipv4: init?.ipv4 ?? (null! as nameConstraintsSet | $.VarRef<nameConstraintsSet> | null),
			ipv6: init?.ipv6 ?? (null! as nameConstraintsSet | $.VarRef<nameConstraintsSet> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ipConstraints {
		return new ipConstraints(this, true)
	}

	public __goscriptAssign(source: ipConstraints): void {
		const target = this._fields
		const values = source._fields
		target.ipv4 = values.ipv4
		target.ipv6 = values.ipv6
	}

	public async query(ip: net.IP): globalThis.Promise<[net.IPNet | $.VarRef<net.IPNet> | null, boolean]> {
		const ipc: ipConstraints | $.VarRef<ipConstraints> | null = this;
		const ipc$: ipConstraints = ipc == null ? $.pointerTarget<ipConstraints>(ipc) : (ipc as any).__isVarRef === true ? (ipc as any).value : (ipc as any).__goValue === undefined ? (ipc as any) : $.pointerTarget<ipConstraints>(ipc)
		let c: nameConstraintsSet | $.VarRef<nameConstraintsSet> | null = null! as nameConstraintsSet | $.VarRef<nameConstraintsSet> | null
		if ($.sliceLen((ip as net.IP)) == 4) {
			c = (ipc$ as ipConstraints).ipv4
		} else {
			c = (ipc$ as ipConstraints).ipv6
		}
		if (c == null) {
			return [null, false]
		}
		const __goscriptReturn0 = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as nameConstraintsSet).search(__goscriptStatic0(), (ip as net.IP), ipBinarySearch, ipMatch) : nameConstraintsSet.prototype.search.call(c, __goscriptStatic0(), (ip as net.IP), ipBinarySearch, ipMatch))
		return [(__goscriptReturn0[0] as net.IPNet | $.VarRef<net.IPNet> | null), __goscriptReturn0[1]]
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"x509.ipConstraints",
		() => new ipConstraints(),
		() => [$.methodSignature("query", [["ip", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], [/* @__PURE__ */ $.pointerType("net.IPNet"), /* @__PURE__ */ $.basicType("bool")], true)],
		ipConstraints,
		() => [/* @__PURE__ */ $.structField("ipv4", /* @__PURE__ */ $.pointerType("x509.nameConstraintsSet"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("ipv6", /* @__PURE__ */ $.pointerType("x509.nameConstraintsSet"), [1], 8, false, { pkgPath: "crypto/x509" })]
	)
}

export class dnsConstraints {
	// all lets us short circuit the query logic if we see a zero length
	// constraint which permits or excludes everything.
	public get all(): boolean {
		return this._fields.all
	}

	public set all(value: boolean) {
		this._fields.all = value
	}

	// permitted indicates if these constraints are for permitted or excluded
	// names.
	public get permitted(): boolean {
		return this._fields.permitted
	}

	public set permitted(value: boolean) {
		this._fields.permitted = value
	}

	public get constraints(): nameConstraintsSet | $.VarRef<nameConstraintsSet> | null {
		return this._fields.constraints
	}

	public set constraints(value: nameConstraintsSet | $.VarRef<nameConstraintsSet> | null) {
		this._fields.constraints = value
	}

	// parentConstraints contains a subset of constraints which are used for
	// wildcard SAN queries, which are constructed by removing the first label
	// from the constraints in constraints. parentConstraints is only populated
	// if permitted is false.
	public get parentConstraints(): globalThis.Map<string, string> | null {
		return this._fields.parentConstraints
	}

	public set parentConstraints(value: globalThis.Map<string, string> | null) {
		this._fields.parentConstraints = value
	}

	public _fields: {
		all: boolean
		permitted: boolean
		constraints: nameConstraintsSet | $.VarRef<nameConstraintsSet> | null
		parentConstraints: globalThis.Map<string, string> | null
	}

	constructor(init?: Partial<{all?: boolean, permitted?: boolean, constraints?: nameConstraintsSet | $.VarRef<nameConstraintsSet> | null, parentConstraints?: globalThis.Map<string, string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			all: init?.all ?? (false as boolean),
			permitted: init?.permitted ?? (false as boolean),
			constraints: init?.constraints ?? (null! as nameConstraintsSet | $.VarRef<nameConstraintsSet> | null),
			parentConstraints: init?.parentConstraints ?? (null! as globalThis.Map<string, string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dnsConstraints {
		return new dnsConstraints(this, true)
	}

	public __goscriptAssign(source: dnsConstraints): void {
		const target = this._fields
		const values = source._fields
		target.all = values.all
		target.permitted = values.permitted
		target.constraints = values.constraints
		target.parentConstraints = values.parentConstraints
	}

	public async query(s: string): globalThis.Promise<[string, boolean]> {
		const dnc: dnsConstraints | $.VarRef<dnsConstraints> | null = this;
		const dnc$: dnsConstraints = dnc == null ? $.pointerTarget<dnsConstraints>(dnc) : (dnc as any).__isVarRef === true ? (dnc as any).value : (dnc as any).__goValue === undefined ? (dnc as any) : $.pointerTarget<dnsConstraints>(dnc)
		if ((dnc$ as dnsConstraints).all) {
			return ["", true]
		}

		let __goscriptTuple0: any = await nameConstraintsSet.prototype.search.call((dnc$ as dnsConstraints).constraints, __goscriptStatic1(), s, dnsCompare, dnsHasSuffix)
		let constraint = (__goscriptTuple0[0] as string)
		let match = __goscriptTuple0[1]
		if (match) {
			return [constraint, true]
		}

		if ((!(dnc$ as dnsConstraints).permitted && ($.stringLen(s) > 0)) && ($.indexString(s, 0) == 42)) {
			s = strings.ToLower(s)
			let trimmed = trimFirstLabel(s)
			{
				let [__goscriptShadow0, found] = $.mapGet<string, string, string>((dnc$ as dnsConstraints).parentConstraints, trimmed, "")
				if (found) {
					return [__goscriptShadow0, true]
				}
			}
		}
		return ["", false]
	}

	static __typeInfo = $.registerStructType(
		"x509.dnsConstraints",
		() => new dnsConstraints(),
		() => [$.methodSignature("query", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool")], true)],
		dnsConstraints,
		() => [/* @__PURE__ */ $.structField("all", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("permitted", /* @__PURE__ */ $.basicType("bool"), [1], 1, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("constraints", /* @__PURE__ */ $.pointerType("x509.nameConstraintsSet"), [2], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("parentConstraints", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [3], 16, false, { pkgPath: "crypto/x509" })]
	)
}

export class emailConstraints {
	public get dnsConstraints(): any {
		return this._fields.dnsConstraints
	}

	public set dnsConstraints(value: any) {
		this._fields.dnsConstraints = value
	}

	// fullEmails is map of rfc2821Mailboxs that are fully specified in the
	// constraints, which we need to check for separately since they don't
	// follow the same matching rules as the domain-based constraints. The
	// domain portion of the rfc2821Mailbox has been lowercased, since the
	// domain portion is case insensitive. When checking the map for an email,
	// the domain portion of the query should also be lowercased.
	public get fullEmails(): globalThis.Map<__goscript_verify.rfc2821Mailbox, {}> | null {
		return this._fields.fullEmails
	}

	public set fullEmails(value: globalThis.Map<__goscript_verify.rfc2821Mailbox, {}> | null) {
		this._fields.fullEmails = value
	}

	public _fields: {
		dnsConstraints: any
		fullEmails: globalThis.Map<__goscript_verify.rfc2821Mailbox, {}> | null
	}

	constructor(init?: Partial<{dnsConstraints?: any, fullEmails?: globalThis.Map<__goscript_verify.rfc2821Mailbox, {}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			dnsConstraints: init?.dnsConstraints ?? (null! as any),
			fullEmails: init?.fullEmails ?? (null! as globalThis.Map<__goscript_verify.rfc2821Mailbox, {}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): emailConstraints {
		return new emailConstraints(this, true)
	}

	public __goscriptAssign(source: emailConstraints): void {
		const target = this._fields
		const values = source._fields
		target.dnsConstraints = $.assignFieldValue(target.dnsConstraints, values.dnsConstraints, { kind: $.TypeKind.Interface, methods: [$.methodSignature("query", [/* @__PURE__ */ $.basicType("string")], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool")])] })
		target.fullEmails = values.fullEmails
	}

	public async query(s: __goscript_verify.rfc2821Mailbox): globalThis.Promise<[string, boolean]> {
		const ec: emailConstraints | $.VarRef<emailConstraints> | null = this;
		const ec$: emailConstraints = ec == null ? $.pointerTarget<emailConstraints>(ec) : (ec as any).__isVarRef === true ? (ec as any).value : (ec as any).__goValue === undefined ? (ec as any) : $.pointerTarget<emailConstraints>(ec)
		if ($.len((ec$ as emailConstraints).fullEmails) > 0) {
			{
				let [, ok] = $.mapGet<__goscript_verify.rfc2821Mailbox, {}, {}>((ec$ as emailConstraints).fullEmails, s, {})
				if (ok) {
					return [await fmt.Sprintf("%s@%s", s.local, s.domain), true]
				}
			}
		}
		if ((ec$ as emailConstraints).dnsConstraints == null) {
			return ["", false]
		}
		let [constraint, found] = await $.pointerValue<any>((ec$ as emailConstraints).dnsConstraints).query(s.domain)
		return [constraint, found]
	}

	static __typeInfo = $.registerStructType(
		"x509.emailConstraints",
		() => new emailConstraints(),
		() => [$.methodSignature("query", [["s", "x509.rfc2821Mailbox"]], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool")], true)],
		emailConstraints,
		() => [/* @__PURE__ */ $.structField("dnsConstraints", { kind: $.TypeKind.Interface, methods: [$.methodSignature("query", [/* @__PURE__ */ $.basicType("string")], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool")])] }, [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("fullEmails", /* @__PURE__ */ $.mapType("x509.rfc2821Mailbox", { kind: $.TypeKind.Struct, methods: [], fields: [] }), [1], 16, false, { pkgPath: "crypto/x509" })]
	)
}

export class constraints {
	public get constraintType(): string {
		return this._fields.constraintType
	}

	public set constraintType(value: string) {
		this._fields.constraintType = value
	}

	public get permitted(): any {
		return this._fields.permitted
	}

	public set permitted(value: any) {
		this._fields.permitted = value
	}

	public get excluded(): any {
		return this._fields.excluded
	}

	public set excluded(value: any) {
		this._fields.excluded = value
	}

	public _fields: {
		constraintType: string
		permitted: any
		excluded: any
	}

	constructor(init?: Partial<{constraintType?: string, permitted?: any, excluded?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			constraintType: init?.constraintType ?? ("" as string),
			permitted: init?.permitted ?? (null! as any),
			excluded: init?.excluded ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): constraints {
		return new constraints(this, true)
	}

	public __goscriptAssign(source: constraints): void {
		const target = this._fields
		const values = source._fields
		target.constraintType = values.constraintType
		target.permitted = $.assignFieldValue(target.permitted, values.permitted, { kind: $.TypeKind.Interface, methods: [$.methodSignature("query", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("bool")])] })
		target.excluded = $.assignFieldValue(target.excluded, values.excluded, { kind: $.TypeKind.Interface, methods: [$.methodSignature("query", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("bool")])] })
	}

	static __typeInfo = $.registerStructType(
		"x509.constraints",
		() => new constraints(),
		() => [],
		constraints,
		() => [/* @__PURE__ */ $.structField("constraintType", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("permitted", { kind: $.TypeKind.Interface, methods: [$.methodSignature("query", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("bool")])] }, [1], 16, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("excluded", { kind: $.TypeKind.Interface, methods: [$.methodSignature("query", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("bool")])] }, [2], 32, false, { pkgPath: "crypto/x509" })]
	)
}

export class chainConstraints {
	public get ip(): constraints {
		return this._fields.ip
	}

	public set ip(value: constraints) {
		this._fields.ip = value
	}

	public get dns(): constraints {
		return this._fields.dns
	}

	public set dns(value: constraints) {
		this._fields.dns = value
	}

	public get uri(): constraints {
		return this._fields.uri
	}

	public set uri(value: constraints) {
		this._fields.uri = value
	}

	public get email(): constraints {
		return this._fields.email
	}

	public set email(value: constraints) {
		this._fields.email = value
	}

	public get index(): number {
		return this._fields.index
	}

	public set index(value: number) {
		this._fields.index = value
	}

	public get next(): chainConstraints | $.VarRef<chainConstraints> | null {
		return this._fields.next
	}

	public set next(value: chainConstraints | $.VarRef<chainConstraints> | null) {
		this._fields.next = value
	}

	public _fields: {
		ip: constraints
		dns: constraints
		uri: constraints
		email: constraints
		index: number
		next: chainConstraints | $.VarRef<chainConstraints> | null
	}

	constructor(init?: Partial<{ip?: constraints, dns?: constraints, uri?: constraints, email?: constraints, index?: number, next?: chainConstraints | $.VarRef<chainConstraints> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ip: init?.ip ? $.markAsStructValue($.cloneStructValue(init.ip)) : $.markAsStructValue(new constraints()),
			dns: init?.dns ? $.markAsStructValue($.cloneStructValue(init.dns)) : $.markAsStructValue(new constraints()),
			uri: init?.uri ? $.markAsStructValue($.cloneStructValue(init.uri)) : $.markAsStructValue(new constraints()),
			email: init?.email ? $.markAsStructValue($.cloneStructValue(init.email)) : $.markAsStructValue(new constraints()),
			index: init?.index ?? (0 as number),
			next: init?.next ?? (null! as chainConstraints | $.VarRef<chainConstraints> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): chainConstraints {
		return new chainConstraints(this, true)
	}

	public __goscriptAssign(source: chainConstraints): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.ip, values.ip)
		$.assignStruct(target.dns, values.dns)
		$.assignStruct(target.uri, values.uri)
		$.assignStruct(target.email, values.email)
		target.index = values.index
		target.next = values.next
	}

	public async check(dns: $.Slice<string>, uris: $.Slice<parsedURI>, emails: $.Slice<__goscript_verify.rfc2821Mailbox>, ips: $.Slice<net.IP>): globalThis.Promise<$.GoError> {
		const cc: chainConstraints | $.VarRef<chainConstraints> | null = this;
		const cc$: chainConstraints = cc == null ? $.pointerTarget<chainConstraints>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<chainConstraints>(cc)
		for (let __goscriptRangeTarget5 = ips, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let ip = ((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as net.IP) as net.IP)
			{
				let err = await checkConstraints(__goscriptStatic2(), $.markAsStructValue($.cloneStructValue((cc$ as chainConstraints).ip)), (ip as net.IP), (ip as net.IP))
				if (err != null) {
					return err
				}
			}
		}
		for (let __goscriptRangeTarget6 = dns, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let d = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as string)
			if (!__goscript_parser.domainNameValid(d, false)) {
				return fmt.Errorf("x509: cannot parse dnsName %q", d)
			}
			{
				let err = await checkConstraints(__goscriptStatic3(), $.markAsStructValue($.cloneStructValue((cc$ as chainConstraints).dns)), d, d)
				if (err != null) {
					return err
				}
			}
		}
		for (let __goscriptRangeTarget7 = uris, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let u = ((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as parsedURI)).clone()
			if (!__goscript_parser.domainNameValid(u.domain, false)) {
				return fmt.Errorf("x509: internal error: URI SAN %q failed to parse", $.interfaceValue((u).clone(), "x509.parsedURI", "x509.parsedURI"))
			}
			{
				let err = await checkConstraints(__goscriptStatic4(), $.markAsStructValue($.cloneStructValue((cc$ as chainConstraints).uri)), u.domain, (u).clone())
				if (err != null) {
					return err
				}
			}
		}
		for (let __goscriptRangeTarget8 = emails, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let e = ((__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as __goscript_verify.rfc2821Mailbox)).clone()
			if (!__goscript_parser.domainNameValid(e.domain, false)) {
				return fmt.Errorf("x509: cannot parse rfc822Name %q", $.interfaceValue((e).clone(), "x509.rfc2821Mailbox", "x509.rfc2821Mailbox"))
			}
			{
				let err = await checkConstraints(__goscriptStatic5(), $.markAsStructValue($.cloneStructValue((cc$ as chainConstraints).email)), (e).clone(), (e).clone())
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"x509.chainConstraints",
		() => new chainConstraints(),
		() => [$.methodSignature("check", [["dns", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["uris", /* @__PURE__ */ $.sliceType("x509.parsedURI")], ["emails", /* @__PURE__ */ $.sliceType("x509.rfc2821Mailbox")], ["ips", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"))]], ["error"], true)],
		chainConstraints,
		() => [/* @__PURE__ */ $.structField("ip", "x509.constraints", [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("dns", "x509.constraints", [1], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("uri", "x509.constraints", [2], 96, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("email", "x509.constraints", [3], 144, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("index", /* @__PURE__ */ $.basicType("int"), [4], 192, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("next", /* @__PURE__ */ $.pointerType("x509.chainConstraints"), [5], 200, false, { pkgPath: "crypto/x509" })]
	)
}

export class parsedURI {
	public get uri(): url.URL | $.VarRef<url.URL> | null {
		return this._fields.uri
	}

	public set uri(value: url.URL | $.VarRef<url.URL> | null) {
		this._fields.uri = value
	}

	public get domain(): string {
		return this._fields.domain
	}

	public set domain(value: string) {
		this._fields.domain = value
	}

	public _fields: {
		uri: url.URL | $.VarRef<url.URL> | null
		domain: string
	}

	constructor(init?: Partial<{uri?: url.URL | $.VarRef<url.URL> | null, domain?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			uri: init?.uri ?? (null! as url.URL | $.VarRef<url.URL> | null),
			domain: init?.domain ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): parsedURI {
		return new parsedURI(this, true)
	}

	public __goscriptAssign(source: parsedURI): void {
		const target = this._fields
		const values = source._fields
		target.uri = values.uri
		target.domain = values.domain
	}

	public String(): string {
		const u = this;
		return url.URL.prototype.String.call(u.uri)
	}

	static __typeInfo = $.registerStructType(
		"x509.parsedURI",
		() => new parsedURI(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		parsedURI,
		() => [/* @__PURE__ */ $.structField("uri", /* @__PURE__ */ $.pointerType("url.URL"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("domain", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" })]
	)
}

export function ipNetworkSubset(a: net.IPNet | $.VarRef<net.IPNet> | null, b: net.IPNet | $.VarRef<net.IPNet> | null): boolean {
	if (!(a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as net.IPNet).Contains(($.pointerValue<net.IPNet>(b).IP as net.IP)) : net.IPNet.prototype.Contains.call(a, ($.pointerValue<net.IPNet>(b).IP as net.IP)))) {
		return false
	}
	let broadcast: net.IP = ($.makeSlice<number>($.sliceLen(($.pointerValue<net.IPNet>(b).IP as net.IP)), undefined, "byte") as net.IP)
	for (let __goscriptRangeTarget0 = $.pointerValue<net.IPNet>(b).IP, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(broadcast), i = 0; i < __goscriptRangeWindow0.length; i++) {
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = $.uint($.arrayIndex($.pointerValue<net.IPNet>(b).IP!, i) | ($.uint(~$.arrayIndex($.pointerValue<net.IPNet>(b).Mask!, i), 8)), 8)
	}
	return (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as net.IPNet).Contains((broadcast as net.IP)) : net.IPNet.prototype.Contains.call(a, (broadcast as net.IP)))
}

export function ipNetworkCompare(a: net.IPNet | $.VarRef<net.IPNet> | null, b: net.IPNet | $.VarRef<net.IPNet> | null): number {
	let i = bytes.Compare($.pointerValue<net.IPNet>(a).IP, $.pointerValue<net.IPNet>(b).IP)
	if (i != 0) {
		return i
	}
	return bytes.Compare($.pointerValue<net.IPNet>(a).Mask, $.pointerValue<net.IPNet>(b).Mask)
}

export function ipBinarySearch(constraint: net.IPNet | $.VarRef<net.IPNet> | null, target: net.IP): number {
	return bytes.Compare($.pointerValue<net.IPNet>(constraint).IP, target)
}

export function ipMatch(constraint: net.IPNet | $.VarRef<net.IPNet> | null, target: net.IP): boolean {
	return (constraint !== null && (constraint as any).__isVarRef !== true && (constraint as any).__goValue === undefined ? ((constraint as any) as net.IPNet).Contains((target as net.IP)) : net.IPNet.prototype.Contains.call(constraint, (target as net.IP)))
}

export async function newIPNetConstraints(l: $.Slice<net.IPNet | $.VarRef<net.IPNet> | null>): globalThis.Promise<any> {
	if ($.sliceLen(l) == 0) {
		return null
	}
	let ipv4: $.Slice<net.IPNet | $.VarRef<net.IPNet> | null> = null! as $.Slice<net.IPNet | $.VarRef<net.IPNet> | null>
	let ipv6: $.Slice<net.IPNet | $.VarRef<net.IPNet> | null> = null! as $.Slice<net.IPNet | $.VarRef<net.IPNet> | null>
	for (let __goscriptRangeTarget1 = l, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let n = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as net.IPNet | $.VarRef<net.IPNet> | null)
		// Subtrees may carry non-zero host bits. Sort and search need the masked
		// network address, so use a copy and leave the parsed constraint as encoded.
		{
			let masked: net.IP = (net.IP_Mask($.pointerValue<net.IPNet>(n).IP, ($.pointerValue<net.IPNet>(n).Mask as net.IPMask)) as net.IP)
			if ((masked != null) && !net.IP_Equal(masked, ($.pointerValue<net.IPNet>(n).IP as net.IP))) {
				n = new net.IPNet({IP: (masked as net.IP), Mask: ($.pointerValue<net.IPNet>(n).Mask as net.IPMask)})
			}
		}
		if ($.sliceLen(($.pointerValue<net.IPNet>(n).IP as net.IP)) == 4) {
			ipv4 = $.appendOne(ipv4, n, $.appendZeros.nil)
		} else {
			ipv6 = $.appendOne(ipv6, n, $.appendZeros.nil)
		}
	}
	let v4c: nameConstraintsSet | $.VarRef<nameConstraintsSet> | null = null! as nameConstraintsSet | $.VarRef<nameConstraintsSet> | null
	let v6c: nameConstraintsSet | $.VarRef<nameConstraintsSet> | null = null! as nameConstraintsSet | $.VarRef<nameConstraintsSet> | null
	if ($.sliceLen(ipv4) > 0) {
		v4c = new nameConstraintsSet({_set: ipv4})
		await (v4c !== null && (v4c as any).__isVarRef !== true && (v4c as any).__goValue === undefined ? ((v4c as any) as nameConstraintsSet).sortAndPrune(__goscriptStatic0(), ipNetworkCompare, ipNetworkSubset) : nameConstraintsSet.prototype.sortAndPrune.call(v4c, __goscriptStatic0(), ipNetworkCompare, ipNetworkSubset))
	}
	if ($.sliceLen(ipv6) > 0) {
		v6c = new nameConstraintsSet({_set: ipv6})
		await (v6c !== null && (v6c as any).__isVarRef !== true && (v6c as any).__goValue === undefined ? ((v6c as any) as nameConstraintsSet).sortAndPrune(__goscriptStatic0(), ipNetworkCompare, ipNetworkSubset) : nameConstraintsSet.prototype.sortAndPrune.call(v6c, __goscriptStatic0(), ipNetworkCompare, ipNetworkSubset))
	}
	return $.interfaceValue(new ipConstraints({ipv4: v4c, ipv6: v6c}), "*x509.ipConstraints", /* @__PURE__ */ $.pointerType("x509.ipConstraints"))
}

export function dnsHasSuffix(a: string, b: string): boolean {
	let lenA = $.stringLen(a)
	let lenB = $.stringLen(b)
	if (lenA > lenB) {
		return false
	}
	let i = lenA - 1
	let offset = lenA - lenB
	for (; i >= 0; i--) {
		let ar = $.indexString(a, i)
		let br = $.indexString(b, i - (offset))
		if (ar == br) {
			continue
		}
		if (br < ar) {
			let __goscriptAssign0_0: number = br
			let __goscriptAssign0_1: number = ar
			ar = __goscriptAssign0_0
			br = __goscriptAssign0_1
		}
		if (((65 <= ar) && (ar <= 90)) && (br == $.uint(((((((ar + 97) & 0xff)) - 65) & 0xff)), 8))) {
			continue
		}
		return false
	}

	if ((($.indexString(a, 0) != 46) && (lenB > lenA)) && ($.indexString(b, (lenB - lenA) - 1) != 46)) {
		return false
	}

	return true
}

export let dnsCompareTable: Uint8Array = $.arrayValue(new Uint8Array(256))

export function __goscript_set_dnsCompareTable(__goscriptValue: Uint8Array): void {
	dnsCompareTable = __goscriptValue
}

function __goscriptInit0(): void {
	// NOTE: we don't actually need the
	// full alphabet, but calculating offsets would be more expensive than just
	// having redundant characters.
	for (let i = 0; i < 256; i++) {
		let c = $.uint(i, 8)
		if ((65 <= c) && (c <= 90)) {
			// Lowercase uppercase characters A-Z.
			c = $.uint(c + (32), 8)
		}
		dnsCompareTable[i] = c
	}
	// Set the period character to 0 so that we get the right sorting behavior.
	//
	// In particular, we need the period character to sort before the only
	// other valid DNS name character which isn't a-z or 0-9, the hyphen,
	// otherwise a name with a dash would be incorrectly sorted into the middle
	// of another tree.
	//
	// For example, imagine a certificate with the constraints "a.com", "a.a.com", and
	// "a-a.com". These would sort as "a.com", "a-a.com", "a.a.com", which would break
	// the pruning step since we wouldn't see that "a.a.com" is a subset of "a.com".
	// Sorting the period before the hyphen ensures that "a.a.com" sorts before "a-a.com".
	dnsCompareTable[46] = 0
}

export function dnsCompare(a: string, b: string): number {
	let idxA = $.stringLen(a) - 1
	let idxB = $.stringLen(b) - 1

	while ((idxA >= 0) && (idxB >= 0)) {
		let byteA = $.arrayIndex(dnsCompareTable, $.indexString(a, idxA))
		let byteB = $.arrayIndex(dnsCompareTable, $.indexString(b, idxB))
		if (byteA == byteB) {
			idxA--
			idxB--
			continue
		}
		let ret = 1
		if (byteA < byteB) {
			ret = -1
		}
		return ret
	}

	let ret = 0
	if (idxA < idxB) {
		ret = -1
	} else {
		if (idxB < idxA) {
			ret = 1
		}
	}
	return ret
}

export async function newDNSConstraints(l: $.Slice<string>, permitted: boolean): globalThis.Promise<any> {
	if ($.sliceLen(l) == 0) {
		return null
	}
	for (let __goscriptRangeTarget2 = l, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let n = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
		if ($.stringLen(n) == 0) {
			return $.interfaceValue(new dnsConstraints({all: true}), "*x509.dnsConstraints", /* @__PURE__ */ $.pointerType("x509.dnsConstraints"))
		}
	}
	let __goscriptShadow1: $.Slice<string> = (slices.Clone(l) as $.Slice<string>)

	let nc: dnsConstraints | $.VarRef<dnsConstraints> | null = new dnsConstraints({constraints: new nameConstraintsSet({_set: __goscriptShadow1}), permitted: permitted})
	let nc$: dnsConstraints = nc == null ? $.pointerTarget<dnsConstraints>(nc) : (nc as any).__isVarRef === true ? (nc as any).value : (nc as any).__goValue === undefined ? (nc as any) : $.pointerTarget<dnsConstraints>(nc)

	await nameConstraintsSet.prototype.sortAndPrune.call((nc$ as dnsConstraints).constraints, __goscriptStatic1(), dnsCompare, dnsHasSuffix)

	if (!permitted) {
		let parentConstraints: globalThis.Map<string, string> | null = $.makeMap<string, string>([])
		for (let __goscriptRangeTarget3 = $.pointerValue<nameConstraintsSet>((nc$ as dnsConstraints).constraints)._set, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let name = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
			name = strings.ToLower(name)
			let trimmedName = trimFirstLabel(name)
			if ($.stringEqual(trimmedName, "")) {
				continue
			}
			$.mapSet(parentConstraints, trimmedName, name)
		}
		if ($.len(parentConstraints) > 0) {
			;(nc$ as dnsConstraints).parentConstraints = parentConstraints
		}
	}

	return $.interfaceValue(nc, "*x509.dnsConstraints", /* @__PURE__ */ $.pointerType("x509.dnsConstraints"))
}

export async function newEmailConstraints(l: $.Slice<string>, permitted: boolean): globalThis.Promise<any> {
	if ($.sliceLen(l) == 0) {
		return null
	}
	let exactMap: globalThis.Map<__goscript_verify.rfc2821Mailbox, {}> | null = $.makeMap<__goscript_verify.rfc2821Mailbox, {}>([])
	let domains: $.Slice<string> = null! as $.Slice<string>
	for (let __goscriptRangeTarget4 = l, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let c = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as string)
		if (!strings.ContainsRune(c, 64)) {
			domains = $.appendOne(domains, c)
			continue
		}
		let [parsed, ok] = __goscript_verify.parseRFC2821Mailbox(c)
		if (!ok) {
			// We've already parsed these addresses in parseCertificate, and
			// treat failures as a hard failure for parsing. The only way we can
			// get a parse failure here is if the caller has mutated the
			// certificate since parsing.
			continue
		}
		parsed.domain = strings.ToLower(parsed.domain)
		$.mapSet(exactMap, (parsed).clone(), {})
	}
	let ec: emailConstraints | $.VarRef<emailConstraints> | null = new emailConstraints({fullEmails: exactMap})
	if ($.sliceLen(domains) > 0) {
		$.pointerValue<emailConstraints>(ec).dnsConstraints = await newDNSConstraints(domains, permitted)
	}
	return $.interfaceValue(ec, "*x509.emailConstraints", /* @__PURE__ */ $.pointerType("x509.emailConstraints"))
}

export async function checkConstraints(__typeArgs: $.GenericTypeArgs | undefined, c: constraints, s: any, p: any): globalThis.Promise<$.GoError> {
	if (c.permitted != null) {
		{
			let [, found] = await $.pointerValue<any>(c.permitted).query($.copyElement(s))
			if (!found) {
				return fmt.Errorf("%s %q is not permitted by any constraint", c.constraintType, $.typeParamInterfaceValue<any>(p, __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }))
			}
		}
	}
	if (c.excluded != null) {
		{
			let __goscriptTuple1: any = await $.pointerValue<any>(c.excluded).query($.copyElement(s))
			let constraint = (__goscriptTuple1[0] as any)
			let found = __goscriptTuple1[1]
			if (found) {
				return fmt.Errorf("%s %q is excluded by constraint %q", c.constraintType, $.typeParamInterfaceValue<any>(p, __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }), $.typeParamInterfaceValue<any>(constraint, __typeArgs?.["T"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }))
			}
		}
	}
	return null
}

export async function checkChainConstraints(chain: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>): globalThis.Promise<$.GoError> {
	let currentConstraints: chainConstraints | $.VarRef<chainConstraints> | null = null! as chainConstraints | $.VarRef<chainConstraints> | null
	let last: chainConstraints | $.VarRef<chainConstraints> | null = null! as chainConstraints | $.VarRef<chainConstraints> | null
	for (let __goscriptRangeTarget9 = chain, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), i = 0; i < __goscriptRangeWindow9.length; i++) {
		let c = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + i] as __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_x509.Certificate).hasNameConstraints() : __goscript_x509.Certificate.prototype.hasNameConstraints.call(c))) {
			continue
		}
		let cc: chainConstraints | $.VarRef<chainConstraints> | null = new chainConstraints({ip: (await (async () => { const __goscriptLiteralField0 = await newIPNetConstraints($.pointerValue<__goscript_x509.Certificate>(c).PermittedIPRanges); const __goscriptLiteralField1 = await newIPNetConstraints($.pointerValue<__goscript_x509.Certificate>(c).ExcludedIPRanges); return $.markAsStructValue(new constraints({constraintType: "IP address", permitted: __goscriptLiteralField0, excluded: __goscriptLiteralField1})) })()), dns: (await (async () => { const __goscriptLiteralField2 = await newDNSConstraints($.pointerValue<__goscript_x509.Certificate>(c).PermittedDNSDomains, true); const __goscriptLiteralField3 = await newDNSConstraints($.pointerValue<__goscript_x509.Certificate>(c).ExcludedDNSDomains, false); return $.markAsStructValue(new constraints({constraintType: "DNS name", permitted: __goscriptLiteralField2, excluded: __goscriptLiteralField3})) })()), uri: (await (async () => { const __goscriptLiteralField4 = await newDNSConstraints($.pointerValue<__goscript_x509.Certificate>(c).PermittedURIDomains, true); const __goscriptLiteralField5 = await newDNSConstraints($.pointerValue<__goscript_x509.Certificate>(c).ExcludedURIDomains, false); return $.markAsStructValue(new constraints({constraintType: "URI", permitted: __goscriptLiteralField4, excluded: __goscriptLiteralField5})) })()), email: (await (async () => { const __goscriptLiteralField6 = await newEmailConstraints($.pointerValue<__goscript_x509.Certificate>(c).PermittedEmailAddresses, true); const __goscriptLiteralField7 = await newEmailConstraints($.pointerValue<__goscript_x509.Certificate>(c).ExcludedEmailAddresses, false); return $.markAsStructValue(new constraints({constraintType: "email address", permitted: __goscriptLiteralField6, excluded: __goscriptLiteralField7})) })()), index: i})
		if (currentConstraints == null) {
			currentConstraints = cc
			last = cc
		} else {
			if (last != null) {
				$.pointerValue<chainConstraints>(last).next = cc
				last = cc
			}
		}
	}
	if (currentConstraints == null) {
		return null
	}

	for (let __goscriptRangeTarget10 = chain, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), i = 0; i < __goscriptRangeWindow10.length; i++) {
		let c = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + i] as __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_x509.Certificate).hasSANExtension() : __goscript_x509.Certificate.prototype.hasSANExtension.call(c))) {
			continue
		}
		if (i >= $.pointerValue<chainConstraints>(currentConstraints).index) {
			while ($.pointerValue<chainConstraints>(currentConstraints).index <= i) {
				if ($.pointerValue<chainConstraints>(currentConstraints).next == null) {
					return null
				}
				currentConstraints = $.pointerValue<chainConstraints>(currentConstraints).next
			}
		}

		let __goscriptTuple2: any = await parseURIs($.pointerValue<__goscript_x509.Certificate>(c).URIs)
		let uris: $.Slice<parsedURI> = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return err
		}
		let __goscriptTuple3: any = parseMailboxes($.pointerValue<__goscript_x509.Certificate>(c).EmailAddresses)
		let emails: $.Slice<__goscript_verify.rfc2821Mailbox> = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return err
		}

		for (let n: chainConstraints | $.VarRef<chainConstraints> | null = currentConstraints; n != null; n = $.pointerValue<chainConstraints>(n).next) {
			{
				let __goscriptShadow2 = await chainConstraints.prototype.check.call(n, $.pointerValue<__goscript_x509.Certificate>(c).DNSNames, uris, emails, $.pointerValue<__goscript_x509.Certificate>(c).IPAddresses)
				if (__goscriptShadow2 != null) {
					return __goscriptShadow2
				}
			}
		}
	}

	return null
}

export async function parseURIs(uris: $.Slice<url.URL | $.VarRef<url.URL> | null>): globalThis.Promise<[$.Slice<parsedURI>, $.GoError]> {
	let parsed: $.Slice<parsedURI> = $.makeSlice<parsedURI>(0, $.sliceLen(uris), undefined, () => new parsedURI(undefined, true))
	for (let __goscriptRangeTarget11 = uris, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
		let uri = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as url.URL | $.VarRef<url.URL> | null)
		let host = strings.ToLower($.pointerValue<url.URL>(uri).Host)
		if ($.stringLen(host) == 0) {
			return [null, fmt.Errorf("URI with empty host (%q) cannot be matched against constraints", (uri !== null && (uri as any).__isVarRef !== true && (uri as any).__goValue === undefined ? ((uri as any) as url.URL).String() : url.URL.prototype.String.call(uri)))]
		}
		if (strings.Contains(host, ":") && !strings.HasSuffix(host, "]")) {
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple4: any = await net.SplitHostPort($.pointerValue<url.URL>(uri).Host)
			host = __goscriptTuple4[0]
			err = __goscriptTuple4[2]
			if (err != null) {
				return [null, fmt.Errorf("cannot parse URI host %q: %v", $.pointerValue<url.URL>(uri).Host, (err as any))]
			}
		}

		// netip.ParseAddr will reject the URI IPv6 literal form "[...]", so we
		// check if _either_ the string parses as an IP, or if it is enclosed in
		// square brackets.
		{
			let [, err] = netip.ParseAddr(host)
			if ((err == null) || (strings.HasPrefix(host, "[") && strings.HasSuffix(host, "]"))) {
				return [null, fmt.Errorf("URI with IP (%q) cannot be matched against constraints", (uri !== null && (uri as any).__isVarRef !== true && (uri as any).__goValue === undefined ? ((uri as any) as url.URL).String() : url.URL.prototype.String.call(uri)))]
			}
		}

		parsed = $.appendOne(parsed, new parsedURI({uri: uri, domain: host}, true))
	}
	return [parsed, null]
}

export function parseMailboxes(emails: $.Slice<string>): [$.Slice<__goscript_verify.rfc2821Mailbox>, $.GoError] {
	let parsed: $.Slice<__goscript_verify.rfc2821Mailbox> = $.makeSlice<__goscript_verify.rfc2821Mailbox>(0, $.sliceLen(emails), undefined, () => new __goscript_verify.rfc2821Mailbox(undefined, true))
	for (let __goscriptRangeTarget12 = emails, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
		let email = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as string)
		let [mailbox, ok] = __goscript_verify.parseRFC2821Mailbox(email)
		if (!ok) {
			return [null, fmt.Errorf("cannot parse rfc822Name %q", email)]
		}
		mailbox.domain = strings.ToLower(mailbox.domain)
		parsed = $.appendOne(parsed, (mailbox).clone())
	}
	return [parsed, null]
}

export function trimFirstLabel(dnsName: string): string {
	let firstDotInd = strings.IndexByte(dnsName, 46)
	if (firstDotInd < 0) {
		// Constraint is a single label, we cannot trim it.
		return ""
	}
	return $.sliceStringOrBytes(dnsName, firstDotInd, undefined)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType("net.IPNet"), zero: () => null, methods: {Contains: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Contains(...$.stripGenericTypeArgs(args)), Network: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Network(...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => $.pointerValue(receiver).String(...$.stripGenericTypeArgs(args))} }, V: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), zero: () => null, methods: {AppendText: (receiver: any, ...args: any[]) => (net.IP_AppendText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), DefaultMask: (receiver: any, ...args: any[]) => (net.IP_DefaultMask as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => (net.IP_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsGlobalUnicast: (receiver: any, ...args: any[]) => (net.IP_IsGlobalUnicast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsInterfaceLocalMulticast: (receiver: any, ...args: any[]) => (net.IP_IsInterfaceLocalMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLinkLocalMulticast: (receiver: any, ...args: any[]) => (net.IP_IsLinkLocalMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLinkLocalUnicast: (receiver: any, ...args: any[]) => (net.IP_IsLinkLocalUnicast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLoopback: (receiver: any, ...args: any[]) => (net.IP_IsLoopback as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsMulticast: (receiver: any, ...args: any[]) => (net.IP_IsMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPrivate: (receiver: any, ...args: any[]) => (net.IP_IsPrivate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsUnspecified: (receiver: any, ...args: any[]) => (net.IP_IsUnspecified as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (net.IP_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Mask: (receiver: any, ...args: any[]) => (net.IP_Mask as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (net.IP_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), To16: (receiver: any, ...args: any[]) => (net.IP_To16 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), To4: (receiver: any, ...args: any[]) => (net.IP_To4 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), appendTo: (receiver: any, ...args: any[]) => (net.IP_appendTo as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), matchAddrFamily: (receiver: any, ...args: any[]) => (net.IP_matchAddrFamily as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("DefaultMask", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IPMask")]), $.methodSignature("Equal", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsGlobalUnicast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsInterfaceLocalMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLinkLocalMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLinkLocalUnicast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLoopback", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPrivate", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsUnspecified", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Mask", [["mask", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IPMask")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("To16", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("To4", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("appendTo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("matchAddrFamily", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], [/* @__PURE__ */ $.basicType("bool")])] }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }, V: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType("net.IPNet"), zero: () => null, methods: {Contains: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Contains(...$.stripGenericTypeArgs(args)), Network: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Network(...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => $.pointerValue(receiver).String(...$.stripGenericTypeArgs(args))} }, V: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), zero: () => null, methods: {AppendText: (receiver: any, ...args: any[]) => (net.IP_AppendText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), DefaultMask: (receiver: any, ...args: any[]) => (net.IP_DefaultMask as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => (net.IP_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsGlobalUnicast: (receiver: any, ...args: any[]) => (net.IP_IsGlobalUnicast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsInterfaceLocalMulticast: (receiver: any, ...args: any[]) => (net.IP_IsInterfaceLocalMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLinkLocalMulticast: (receiver: any, ...args: any[]) => (net.IP_IsLinkLocalMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLinkLocalUnicast: (receiver: any, ...args: any[]) => (net.IP_IsLinkLocalUnicast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLoopback: (receiver: any, ...args: any[]) => (net.IP_IsLoopback as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsMulticast: (receiver: any, ...args: any[]) => (net.IP_IsMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPrivate: (receiver: any, ...args: any[]) => (net.IP_IsPrivate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsUnspecified: (receiver: any, ...args: any[]) => (net.IP_IsUnspecified as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (net.IP_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Mask: (receiver: any, ...args: any[]) => (net.IP_Mask as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (net.IP_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), To16: (receiver: any, ...args: any[]) => (net.IP_To16 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), To4: (receiver: any, ...args: any[]) => (net.IP_To4 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), appendTo: (receiver: any, ...args: any[]) => (net.IP_appendTo as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), matchAddrFamily: (receiver: any, ...args: any[]) => (net.IP_matchAddrFamily as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("DefaultMask", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IPMask")]), $.methodSignature("Equal", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsGlobalUnicast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsInterfaceLocalMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLinkLocalMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLinkLocalUnicast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLoopback", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPrivate", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsUnspecified", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Mask", [["mask", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IPMask")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("To16", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("To4", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("appendTo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("matchAddrFamily", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], [/* @__PURE__ */ $.basicType("bool")])] }, P: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), zero: () => null, methods: {AppendText: (receiver: any, ...args: any[]) => (net.IP_AppendText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), DefaultMask: (receiver: any, ...args: any[]) => (net.IP_DefaultMask as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => (net.IP_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsGlobalUnicast: (receiver: any, ...args: any[]) => (net.IP_IsGlobalUnicast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsInterfaceLocalMulticast: (receiver: any, ...args: any[]) => (net.IP_IsInterfaceLocalMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLinkLocalMulticast: (receiver: any, ...args: any[]) => (net.IP_IsLinkLocalMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLinkLocalUnicast: (receiver: any, ...args: any[]) => (net.IP_IsLinkLocalUnicast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLoopback: (receiver: any, ...args: any[]) => (net.IP_IsLoopback as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsMulticast: (receiver: any, ...args: any[]) => (net.IP_IsMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPrivate: (receiver: any, ...args: any[]) => (net.IP_IsPrivate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsUnspecified: (receiver: any, ...args: any[]) => (net.IP_IsUnspecified as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (net.IP_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Mask: (receiver: any, ...args: any[]) => (net.IP_Mask as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (net.IP_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), To16: (receiver: any, ...args: any[]) => (net.IP_To16 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), To4: (receiver: any, ...args: any[]) => (net.IP_To4 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), appendTo: (receiver: any, ...args: any[]) => (net.IP_appendTo as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), matchAddrFamily: (receiver: any, ...args: any[]) => (net.IP_matchAddrFamily as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("DefaultMask", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IPMask")]), $.methodSignature("Equal", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsGlobalUnicast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsInterfaceLocalMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLinkLocalMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLinkLocalUnicast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLoopback", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPrivate", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsUnspecified", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Mask", [["mask", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IPMask")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("To16", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("To4", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("appendTo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("matchAddrFamily", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], [/* @__PURE__ */ $.basicType("bool")])] }})
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }, V: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }, P: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }, V: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }, P: { type: "x509.parsedURI", zero: () => new parsedURI(undefined, true), methods: {String: (receiver: any, ...args: any[]) => $.pointerValue(receiver).String(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }, V: { type: "x509.rfc2821Mailbox", zero: () => new __goscript_verify.rfc2821Mailbox(undefined, true), methods: {String: (receiver: any, ...args: any[]) => $.pointerValue(receiver).String(...$.stripGenericTypeArgs(args))} }, P: { type: "x509.rfc2821Mailbox", zero: () => new __goscript_verify.rfc2821Mailbox(undefined, true), methods: {String: (receiver: any, ...args: any[]) => $.pointerValue(receiver).String(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any

export { __goscriptInit0 }
