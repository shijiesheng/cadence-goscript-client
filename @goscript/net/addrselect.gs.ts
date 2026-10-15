// Generated file based on addrselect.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as netip from "@goscript/net/netip/index.js"

import * as slices from "@goscript/slices/index.js"

import * as poll from "@goscript/internal/poll/index.js"

import type * as os from "@goscript/os/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import type * as syscall from "@goscript/syscall/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_fd_fake from "./fd_fake.gs.ts"

import * as __goscript_fd_js from "./fd_js.gs.ts"

import * as __goscript_ip from "./ip.gs.ts"

import * as __goscript_iprawsock from "./iprawsock.gs.ts"

import * as __goscript_iprawsock_posix from "./iprawsock_posix.gs.ts"

import * as __goscript_net from "./net.gs.ts"

import * as __goscript_net_fake from "./net_fake.gs.ts"

import * as __goscript_sockaddr_posix from "./sockaddr_posix.gs.ts"

import * as __goscript_udpsock from "./udpsock.gs.ts"

import * as __goscript_udpsock_posix from "./udpsock_posix.gs.ts"
import "@goscript/net/netip/index.js"
import "@goscript/slices/index.js"
import "@goscript/internal/poll/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "./fd_fake.gs.ts"
import "./fd_js.gs.ts"
import "./ip.gs.ts"
import "./iprawsock.gs.ts"
import "./iprawsock_posix.gs.ts"
import "./net.gs.ts"
import "./net_fake.gs.ts"
import "./sockaddr_posix.gs.ts"
import "./udpsock.gs.ts"
import "./udpsock_posix.gs.ts"

export type policyTable = $.Slice<policyTableEntry>

$.registerNamedType("net.policyTable", /* @__PURE__ */ $.sliceType("net.policyTableEntry"));

$.registerNamedValueType(
	"net.policyTable",
	{Classify: (receiver: any, ...args: any[]) => (policyTable_Classify as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Classify", [["ip", "netip.Addr"]], ["net.policyTableEntry"])]
);

$.registerNamedValueType(
	"*net.policyTable",
	{Classify: (receiver: any, ...args: any[]) => (policyTable_Classify as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Classify", [["ip", "netip.Addr"]], ["net.policyTableEntry"])]
);

export type scope = number

export class ipAttr {
	public get Scope(): scope {
		return this._fields.Scope
	}

	public set Scope(value: scope) {
		this._fields.Scope = value
	}

	public get Precedence(): number {
		return this._fields.Precedence
	}

	public set Precedence(value: number) {
		this._fields.Precedence = value
	}

	public get Label(): number {
		return this._fields.Label
	}

	public set Label(value: number) {
		this._fields.Label = value
	}

	public _fields: {
		Scope: scope
		Precedence: number
		Label: number
	}

	constructor(init?: Partial<{Scope?: scope, Precedence?: number, Label?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Scope: init?.Scope ?? (0 as scope),
			Precedence: init?.Precedence ?? (0 as number),
			Label: init?.Label ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ipAttr {
		return new ipAttr(this, true)
	}

	public __goscriptAssign(source: ipAttr): void {
		const target = this._fields
		const values = source._fields
		target.Scope = values.Scope
		target.Precedence = values.Precedence
		target.Label = values.Label
	}

	static __typeInfo = $.registerStructType(
		"net.ipAttr",
		() => new ipAttr(),
		() => [],
		ipAttr,
		() => [/* @__PURE__ */ $.structField("Scope", /* @__PURE__ */ $.basicType("uint8", "net.scope"), [0], 0, true), /* @__PURE__ */ $.structField("Precedence", /* @__PURE__ */ $.basicType("uint8"), [1], 1, true), /* @__PURE__ */ $.structField("Label", /* @__PURE__ */ $.basicType("uint8"), [2], 2, true)]
	)
}

export class byRFC6724Info {
	public get addr(): __goscript_iprawsock.IPAddr {
		return this._fields.addr
	}

	public set addr(value: __goscript_iprawsock.IPAddr) {
		this._fields.addr = value
	}

	public get addrAttr(): ipAttr {
		return this._fields.addrAttr
	}

	public set addrAttr(value: ipAttr) {
		this._fields.addrAttr = value
	}

	public get src(): netip.Addr {
		return this._fields.src
	}

	public set src(value: netip.Addr) {
		this._fields.src = value
	}

	public get srcAttr(): ipAttr {
		return this._fields.srcAttr
	}

	public set srcAttr(value: ipAttr) {
		this._fields.srcAttr = value
	}

	public _fields: {
		addr: __goscript_iprawsock.IPAddr
		addrAttr: ipAttr
		src: netip.Addr
		srcAttr: ipAttr
	}

	constructor(init?: Partial<{addr?: __goscript_iprawsock.IPAddr, addrAttr?: ipAttr, src?: netip.Addr, srcAttr?: ipAttr}>, __goscriptValue?: boolean) {
		this._fields = {
			addr: init?.addr ? init.addr.clone() : new __goscript_iprawsock.IPAddr(undefined, true),
			addrAttr: init?.addrAttr ? init.addrAttr.clone() : new ipAttr(undefined, true),
			src: init?.src ? init.src.clone() : new netip.Addr(undefined, true),
			srcAttr: init?.srcAttr ? init.srcAttr.clone() : new ipAttr(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): byRFC6724Info {
		return new byRFC6724Info(this, true)
	}

	public __goscriptAssign(source: byRFC6724Info): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.addr, values.addr)
		$.assignStruct(target.addrAttr, values.addrAttr)
		$.assignStruct(target.src, values.src)
		$.assignStruct(target.srcAttr, values.srcAttr)
	}

	static __typeInfo = $.registerStructType(
		"net.byRFC6724Info",
		() => new byRFC6724Info(),
		() => [],
		byRFC6724Info,
		() => [/* @__PURE__ */ $.structField("addr", "net.IPAddr", [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("addrAttr", "net.ipAttr", [1], 40, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("src", "netip.Addr", [2], 48, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("srcAttr", "net.ipAttr", [3], 72, false, { pkgPath: "net" })]
	)
}

export class policyTableEntry {
	public get Prefix(): netip.Prefix {
		return this._fields.Prefix
	}

	public set Prefix(value: netip.Prefix) {
		this._fields.Prefix = value
	}

	public get Precedence(): number {
		return this._fields.Precedence
	}

	public set Precedence(value: number) {
		this._fields.Precedence = value
	}

	public get Label(): number {
		return this._fields.Label
	}

	public set Label(value: number) {
		this._fields.Label = value
	}

	public _fields: {
		Prefix: netip.Prefix
		Precedence: number
		Label: number
	}

	constructor(init?: Partial<{Prefix?: netip.Prefix, Precedence?: number, Label?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Prefix: init?.Prefix ? init.Prefix.clone() : new netip.Prefix(undefined, true),
			Precedence: init?.Precedence ?? (0 as number),
			Label: init?.Label ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): policyTableEntry {
		return new policyTableEntry(this, true)
	}

	public __goscriptAssign(source: policyTableEntry): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Prefix, values.Prefix)
		target.Precedence = values.Precedence
		target.Label = values.Label
	}

	static __typeInfo = $.registerStructType(
		"net.policyTableEntry",
		() => new policyTableEntry(),
		() => [],
		policyTableEntry,
		() => [/* @__PURE__ */ $.structField("Prefix", "netip.Prefix", [0], 0, true), /* @__PURE__ */ $.structField("Precedence", /* @__PURE__ */ $.basicType("uint8"), [1], 32, true), /* @__PURE__ */ $.structField("Label", /* @__PURE__ */ $.basicType("uint8"), [2], 33, true)]
	)
}

export const scopeInterfaceLocal: scope = 1

export const scopeLinkLocal: scope = 2

export const scopeAdminLocal: scope = 4

export const scopeSiteLocal: scope = 5

export const scopeOrgLocal: scope = 8

export const scopeGlobal: scope = 14

export async function sortByRFC6724(addrs: $.Slice<__goscript_iprawsock.IPAddr>): globalThis.Promise<void> {
	if ($.sliceLen(addrs) < 2) {
		return
	}
	sortByRFC6724withSrcs(addrs, await srcAddrs(addrs))
}

export function sortByRFC6724withSrcs(addrs: $.Slice<__goscript_iprawsock.IPAddr>, srcs: $.Slice<netip.Addr>): void {
	if ($.sliceLen(addrs) != $.sliceLen(srcs)) {
		$.panic("internal error")
	}
	let addrInfos: $.Slice<byRFC6724Info> = $.makeSlice<byRFC6724Info>($.sliceLen(addrs), undefined, undefined, () => new byRFC6724Info(undefined, true))
	for (let __goscriptRangeTarget0 = addrs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(addrInfos), __goscriptSliceWindow1 = $.sliceRange(srcs), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let v = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as __goscript_iprawsock.IPAddr)).clone()
		let [addrAttrIP, ] = netip.AddrFromSlice(v.IP)
		$.assignStruct((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)], (() => { const __goscriptLiteralField0 = ipAttrOf(addrAttrIP); const __goscriptLiteralField1 = ipAttrOf((((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as netip.Addr)).clone()); return new byRFC6724Info({addr: ((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as __goscript_iprawsock.IPAddr), addrAttr: __goscriptLiteralField0, src: ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as netip.Addr), srcAttr: __goscriptLiteralField1}, true) })())
	}
	slices.SortStableFunc(addrInfos, compareByRFC6724)
	for (let __goscriptRangeTarget1 = addrInfos, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow2 = $.sliceRange(addrs), i = 0; i < __goscriptRangeWindow1.length; i++) {
		$.assignStruct((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)], ((__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] as byRFC6724Info).addr)
	}
}

export async function srcAddrs(addrs: $.Slice<__goscript_iprawsock.IPAddr>): globalThis.Promise<$.Slice<netip.Addr>> {
	let srcs: $.Slice<netip.Addr> = $.makeSlice<netip.Addr>($.sliceLen(addrs), undefined, undefined, () => new netip.Addr(undefined, true))
	let dst = $.varRef(new __goscript_udpsock.UDPAddr({Port: 53}, true))
	for (let __goscriptRangeTarget2 = addrs, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow3 = $.sliceRange(srcs), i = 0; i < __goscriptRangeWindow2.length; i++) {
		dst.value.IP = (((__goscriptRangeWindow2.backing as any[])[__goscriptRangeWindow2.offset + i] as __goscript_iprawsock.IPAddr).IP as __goscript_ip.IP)
		dst.value.Zone = ((__goscriptRangeWindow2.backing as any[])[__goscriptRangeWindow2.offset + i] as __goscript_iprawsock.IPAddr).Zone
		let __goscriptTuple0: any = await __goscript_udpsock.DialUDP("udp", null, dst)
		let c: __goscript_udpsock.UDPConn | $.VarRef<__goscript_udpsock.UDPConn> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err == null) {
			{
				let __goscriptTuple1: any = $.typeAssertTuple<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>($.pointerValue<__goscript_udpsock.UDPConn>(c).conn.LocalAddr(), /* @__PURE__ */ $.pointerType("net.UDPAddr"))
				let src: __goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null = __goscriptTuple1[0]
				let ok = __goscriptTuple1[1]
				if (ok) {
					let __goscriptTuple2: any = netip.AddrFromSlice($.pointerValue<__goscript_udpsock.UDPAddr>(src).IP)
					$.assignStruct((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)], __goscriptTuple2[0])
				}
			}
			await $.pointerValue<__goscript_udpsock.UDPConn>(c).conn.Close()
		}
	}
	return srcs
}

export function ipAttrOf(ip: netip.Addr): ipAttr {
	if (!ip.IsValid()) {
		return new ipAttr(undefined, true)
	}
	let match = policyTable_Classify(rfc6724policyTable, (ip).clone())
	return (() => { const __goscriptLiteralField2 = classifyScope(ip); return new ipAttr({Scope: __goscriptLiteralField2, Precedence: match.Precedence, Label: match.Label}, true) })()
}

export function compareByRFC6724(a: byRFC6724Info, b: byRFC6724Info): number {
	let DA: __goscript_ip.IP = (a.addr.IP as __goscript_ip.IP)
	let DB: __goscript_ip.IP = (b.addr.IP as __goscript_ip.IP)
	let SourceDA = (a.src).clone()
	let SourceDB = (b.src).clone()
	let attrDA: ipAttr | $.VarRef<ipAttr> | null = $.fieldRef(a._fields, "addrAttr")
	let attrDA$: ipAttr = attrDA == null ? $.pointerTarget<ipAttr>(attrDA) : (attrDA as any).__isVarRef === true ? (attrDA as any).value : (attrDA as any).__goValue === undefined ? (attrDA as any) : $.pointerTarget<ipAttr>(attrDA)
	let attrDB: ipAttr | $.VarRef<ipAttr> | null = $.fieldRef(b._fields, "addrAttr")
	let attrDB$: ipAttr = attrDB == null ? $.pointerTarget<ipAttr>(attrDB) : (attrDB as any).__isVarRef === true ? (attrDB as any).value : (attrDB as any).__goValue === undefined ? (attrDB as any) : $.pointerTarget<ipAttr>(attrDB)
	let attrSourceDA: ipAttr | $.VarRef<ipAttr> | null = $.fieldRef(a._fields, "srcAttr")
	let attrSourceDA$: ipAttr = attrSourceDA == null ? $.pointerTarget<ipAttr>(attrSourceDA) : (attrSourceDA as any).__isVarRef === true ? (attrSourceDA as any).value : (attrSourceDA as any).__goValue === undefined ? (attrSourceDA as any) : $.pointerTarget<ipAttr>(attrSourceDA)
	let attrSourceDB: ipAttr | $.VarRef<ipAttr> | null = $.fieldRef(b._fields, "srcAttr")
	let attrSourceDB$: ipAttr = attrSourceDB == null ? $.pointerTarget<ipAttr>(attrSourceDB) : (attrSourceDB as any).__isVarRef === true ? (attrSourceDB as any).value : (attrSourceDB as any).__goValue === undefined ? (attrSourceDB as any) : $.pointerTarget<ipAttr>(attrSourceDB)

	const preferDA: number = -1
	const preferDB: number = 1

	// Rule 1: Avoid unusable destinations.
	// If DB is known to be unreachable or if Source(DB) is undefined, then
	// prefer DA.  Similarly, if DA is known to be unreachable or if
	// Source(DA) is undefined, then prefer DB.
	if (!SourceDA.IsValid() && !SourceDB.IsValid()) {
		return 0
	}
	if (!SourceDB.IsValid()) {
		return -1
	}
	if (!SourceDA.IsValid()) {
		return 1
	}

	// Rule 2: Prefer matching scope.
	// If Scope(DA) = Scope(Source(DA)) and Scope(DB) <> Scope(Source(DB)),
	// then prefer DA.  Similarly, if Scope(DA) <> Scope(Source(DA)) and
	// Scope(DB) = Scope(Source(DB)), then prefer DB.
	if (((attrDA$ as ipAttr).Scope == (attrSourceDA$ as ipAttr).Scope) && ((attrDB$ as ipAttr).Scope != (attrSourceDB$ as ipAttr).Scope)) {
		return -1
	}
	if (((attrDA$ as ipAttr).Scope != (attrSourceDA$ as ipAttr).Scope) && ((attrDB$ as ipAttr).Scope == (attrSourceDB$ as ipAttr).Scope)) {
		return 1
	}

	// Rule 3: Avoid deprecated addresses.
	// If Source(DA) is deprecated and Source(DB) is not, then prefer DB.
	// Similarly, if Source(DA) is not deprecated and Source(DB) is
	// deprecated, then prefer DA.

	// TODO(bradfitz): implement? low priority for now.

	// Rule 4: Prefer home addresses.
	// If Source(DA) is simultaneously a home address and care-of address
	// and Source(DB) is not, then prefer DA.  Similarly, if Source(DB) is
	// simultaneously a home address and care-of address and Source(DA) is
	// not, then prefer DB.

	// TODO(bradfitz): implement? low priority for now.

	// Rule 5: Prefer matching label.
	// If Label(Source(DA)) = Label(DA) and Label(Source(DB)) <> Label(DB),
	// then prefer DA.  Similarly, if Label(Source(DA)) <> Label(DA) and
	// Label(Source(DB)) = Label(DB), then prefer DB.
	if (((attrSourceDA$ as ipAttr).Label == (attrDA$ as ipAttr).Label) && ((attrSourceDB$ as ipAttr).Label != (attrDB$ as ipAttr).Label)) {
		return -1
	}
	if (((attrSourceDA$ as ipAttr).Label != (attrDA$ as ipAttr).Label) && ((attrSourceDB$ as ipAttr).Label == (attrDB$ as ipAttr).Label)) {
		return 1
	}

	// Rule 6: Prefer higher precedence.
	// If Precedence(DA) > Precedence(DB), then prefer DA.  Similarly, if
	// Precedence(DA) < Precedence(DB), then prefer DB.
	if ((attrDA$ as ipAttr).Precedence > (attrDB$ as ipAttr).Precedence) {
		return -1
	}
	if ((attrDA$ as ipAttr).Precedence < (attrDB$ as ipAttr).Precedence) {
		return 1
	}

	// Rule 7: Prefer native transport.
	// If DA is reached via an encapsulating transition mechanism (e.g.,
	// IPv6 in IPv4) and DB is not, then prefer DB.  Similarly, if DB is
	// reached via encapsulation and DA is not, then prefer DA.

	// TODO(bradfitz): implement? low priority for now.

	// Rule 8: Prefer smaller scope.
	// If Scope(DA) < Scope(DB), then prefer DA.  Similarly, if Scope(DA) >
	// Scope(DB), then prefer DB.
	if ((attrDA$ as ipAttr).Scope < (attrDB$ as ipAttr).Scope) {
		return -1
	}
	if ((attrDA$ as ipAttr).Scope > (attrDB$ as ipAttr).Scope) {
		return 1
	}

	// Rule 9: Use the longest matching prefix.
	// When DA and DB belong to the same address family (both are IPv6 or
	// both are IPv4 [but see below]): If CommonPrefixLen(Source(DA), DA) >
	// CommonPrefixLen(Source(DB), DB), then prefer DA.  Similarly, if
	// CommonPrefixLen(Source(DA), DA) < CommonPrefixLen(Source(DB), DB),
	// then prefer DB.
	//
	// However, applying this rule to IPv4 addresses causes
	// problems (see issues 13283 and 18518), so limit to IPv6.
	if ((__goscript_ip.IP_To4(DA) == null) && (__goscript_ip.IP_To4(DB) == null)) {
		let commonA = commonPrefixLen(SourceDA, (DA as __goscript_ip.IP))
		let commonB = commonPrefixLen(SourceDB, (DB as __goscript_ip.IP))

		if (commonA > commonB) {
			return -1
		}
		if (commonA < commonB) {
			return 1
		}
	}

	// Rule 10: Otherwise, leave the order unchanged.
	// If DA preceded DB in the original list, prefer DA.
	// Otherwise, prefer DB.
	return 0
}

export let rfc6724policyTable: policyTable = await ($.arrayToSlice<policyTableEntry>([(() => { const __goscriptLiteralField3 = netip.PrefixFrom(netip.AddrFrom16($.arrayValue(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]))), 128); return new policyTableEntry({Prefix: __goscriptLiteralField3, Precedence: 50, Label: 0}, true) })(), (() => { const __goscriptLiteralField4 = netip.PrefixFrom(netip.AddrFrom16($.arrayValue(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 0, 0, 0, 0]))), 96); return new policyTableEntry({Prefix: __goscriptLiteralField4, Precedence: 35, Label: 4}, true) })(), (() => { const __goscriptLiteralField5 = netip.PrefixFrom(netip.AddrFrom16($.arrayValue(new Uint8Array(16))), 96); return new policyTableEntry({Prefix: __goscriptLiteralField5, Precedence: 1, Label: 3}, true) })(), (() => { const __goscriptLiteralField6 = netip.PrefixFrom(netip.AddrFrom16($.arrayValue(new Uint8Array([32, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))), 32); return new policyTableEntry({Prefix: __goscriptLiteralField6, Precedence: 5, Label: 5}, true) })(), (() => { const __goscriptLiteralField7 = netip.PrefixFrom(netip.AddrFrom16($.arrayValue(new Uint8Array([32, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))), 16); return new policyTableEntry({Prefix: __goscriptLiteralField7, Precedence: 30, Label: 2}, true) })(), (() => { const __goscriptLiteralField8 = netip.PrefixFrom(netip.AddrFrom16($.arrayValue(new Uint8Array([63, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))), 16); return new policyTableEntry({Prefix: __goscriptLiteralField8, Precedence: 1, Label: 12}, true) })(), (() => { const __goscriptLiteralField9 = netip.PrefixFrom(netip.AddrFrom16($.arrayValue(new Uint8Array([254, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))), 10); return new policyTableEntry({Prefix: __goscriptLiteralField9, Precedence: 1, Label: 11}, true) })(), (() => { const __goscriptLiteralField10 = netip.PrefixFrom(netip.AddrFrom16($.arrayValue(new Uint8Array([252, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))), 7); return new policyTableEntry({Prefix: __goscriptLiteralField10, Precedence: 3, Label: 13}, true) })(), (() => { const __goscriptLiteralField11 = netip.PrefixFrom(netip.AddrFrom16($.arrayValue(new Uint8Array(16))), 0); return new policyTableEntry({Prefix: __goscriptLiteralField11, Precedence: 40, Label: 1}, true) })()]) as policyTable)

export function __goscript_set_rfc6724policyTable(__goscriptValue: policyTable): void {
	rfc6724policyTable = __goscriptValue
}

export function policyTable_Classify(t: policyTable, ip: netip.Addr): policyTableEntry {
	// Prefix.Contains() will not match an IPv6 prefix for an IPv4 address.
	if (ip.Is4()) {
		ip = $.assignStruct(ip, netip.AddrFrom16(ip.As16()))
	}
	for (let __goscriptRangeTarget3 = t, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let ent = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as policyTableEntry)).clone()
		if ($.markAsStructValue($.cloneStructValue(ent.Prefix)).Contains(ip)) {
			return (ent).clone()
		}
	}
	return new policyTableEntry(undefined, true)
}

export function classifyScope(ip: netip.Addr): scope {
	if ($.markAsStructValue($.cloneStructValue(ip)).IsLoopback() || $.markAsStructValue($.cloneStructValue(ip)).IsLinkLocalUnicast()) {
		return 2
	}
	let ipv6 = ip.Is6() && !ip.Is4In6()
	let ipv6AsBytes = ip.As16()
	if (ipv6 && $.markAsStructValue($.cloneStructValue(ip)).IsMulticast()) {
		return $.uint($.arrayIndex(ipv6AsBytes, 1) & 0xf, 8)
	}
	// Site-local addresses are defined in RFC 3513 section 2.5.6
	// (and deprecated in RFC 3879).
	if ((ipv6 && ($.arrayIndex(ipv6AsBytes, 0) == 0xfe)) && ($.uint(($.arrayIndex(ipv6AsBytes, 1) & 0xc0), 8) == 0xc0)) {
		return 5
	}
	return 14
}

export function commonPrefixLen(a: netip.Addr, b: __goscript_ip.IP): number {
	let cpl: number = 0
	{
		let b4: __goscript_ip.IP = (__goscript_ip.IP_To4(b) as __goscript_ip.IP)
		if (b4 != null) {
			b = (b4 as __goscript_ip.IP)
		}
	}
	let aAsSlice: $.Slice<number> = a.AsSlice()
	if ($.sliceLen(aAsSlice) != $.sliceLen((b as __goscript_ip.IP))) {
		return 0
	}
	// If IPv6, only up to the prefix (first 64 bits)
	if ($.sliceLen(aAsSlice) > 8) {
		aAsSlice = $.goSlice(aAsSlice, undefined, 8)
		b = ($.goSlice(b, undefined, 8) as __goscript_ip.IP)
	}
	while ($.sliceLen(aAsSlice) > 0) {
		if ($.arrayIndex(aAsSlice!, 0) == $.arrayIndex(b!, 0)) {
			cpl = cpl + (8)
			aAsSlice = $.goSlice(aAsSlice, 1, undefined)
			b = ($.goSlice(b, 1, undefined) as __goscript_ip.IP)
			continue
		}
		let bits = 8
		let ab = $.arrayIndex(aAsSlice!, 0)
		let bb = $.arrayIndex(b!, 0)
		while (true) {
			ab = (ab >>> (1)) >>> 0
			bb = (bb >>> (1)) >>> 0
			bits--
			if (ab == bb) {
				cpl = cpl + (bits)
				return cpl
			}
		}
	}
	return cpl
}
