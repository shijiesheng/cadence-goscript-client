// Generated file based on ip.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytealg from "@goscript/internal/bytealg/index.js"

import * as strconv from "@goscript/internal/strconv/index.js"

import * as stringslite from "@goscript/internal/stringslite/index.js"

import * as netip from "@goscript/net/netip/index.js"

import * as __goscript_mac from "./mac.gs.ts"

import * as __goscript_net from "./net.gs.ts"

import * as __goscript_parse from "./parse.gs.ts"
import "@goscript/internal/bytealg/index.js"
import "@goscript/internal/strconv/index.js"
import "@goscript/internal/stringslite/index.js"
import "@goscript/net/netip/index.js"
import "./mac.gs.ts"
import "./net.gs.ts"
import "./parse.gs.ts"

export type IP = $.Slice<number>

$.registerNamedType("net.IP", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"net.IP",
	{AppendText: (receiver: any, ...args: any[]) => (IP_AppendText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), DefaultMask: (receiver: any, ...args: any[]) => (IP_DefaultMask as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => (IP_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsGlobalUnicast: (receiver: any, ...args: any[]) => (IP_IsGlobalUnicast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsInterfaceLocalMulticast: (receiver: any, ...args: any[]) => (IP_IsInterfaceLocalMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLinkLocalMulticast: (receiver: any, ...args: any[]) => (IP_IsLinkLocalMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLinkLocalUnicast: (receiver: any, ...args: any[]) => (IP_IsLinkLocalUnicast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLoopback: (receiver: any, ...args: any[]) => (IP_IsLoopback as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsMulticast: (receiver: any, ...args: any[]) => (IP_IsMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPrivate: (receiver: any, ...args: any[]) => (IP_IsPrivate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsUnspecified: (receiver: any, ...args: any[]) => (IP_IsUnspecified as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (IP_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Mask: (receiver: any, ...args: any[]) => (IP_Mask as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (IP_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), To16: (receiver: any, ...args: any[]) => (IP_To16 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), To4: (receiver: any, ...args: any[]) => (IP_To4 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), appendTo: (receiver: any, ...args: any[]) => (IP_appendTo as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), matchAddrFamily: (receiver: any, ...args: any[]) => (IP_matchAddrFamily as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("DefaultMask", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IPMask")]), $.methodSignature("Equal", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsGlobalUnicast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsInterfaceLocalMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLinkLocalMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLinkLocalUnicast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLoopback", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPrivate", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsUnspecified", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Mask", [["mask", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IPMask")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("To16", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("To4", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("appendTo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("matchAddrFamily", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*net.IP",
	{AppendText: (receiver: any, ...args: any[]) => (IP_AppendText as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), DefaultMask: (receiver: any, ...args: any[]) => (IP_DefaultMask as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => (IP_Equal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsGlobalUnicast: (receiver: any, ...args: any[]) => (IP_IsGlobalUnicast as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsInterfaceLocalMulticast: (receiver: any, ...args: any[]) => (IP_IsInterfaceLocalMulticast as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsLinkLocalMulticast: (receiver: any, ...args: any[]) => (IP_IsLinkLocalMulticast as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsLinkLocalUnicast: (receiver: any, ...args: any[]) => (IP_IsLinkLocalUnicast as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsLoopback: (receiver: any, ...args: any[]) => (IP_IsLoopback as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsMulticast: (receiver: any, ...args: any[]) => (IP_IsMulticast as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsPrivate: (receiver: any, ...args: any[]) => (IP_IsPrivate as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsUnspecified: (receiver: any, ...args: any[]) => (IP_IsUnspecified as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (IP_MarshalText as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Mask: (receiver: any, ...args: any[]) => (IP_Mask as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (IP_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), To16: (receiver: any, ...args: any[]) => (IP_To16 as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), To4: (receiver: any, ...args: any[]) => (IP_To4 as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalText: (receiver: any, ...args: any[]) => (IP_UnmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args)), appendTo: (receiver: any, ...args: any[]) => (IP_appendTo as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), matchAddrFamily: (receiver: any, ...args: any[]) => (IP_matchAddrFamily as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("DefaultMask", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IPMask")]), $.methodSignature("Equal", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsGlobalUnicast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsInterfaceLocalMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLinkLocalMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLinkLocalUnicast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLoopback", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPrivate", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsUnspecified", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Mask", [["mask", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IPMask")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("To16", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("To4", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("appendTo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("matchAddrFamily", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], [/* @__PURE__ */ $.basicType("bool")])]
);

export type IPMask = $.Slice<number>

$.registerNamedType("net.IPMask", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"net.IPMask",
	{Size: (receiver: any, ...args: any[]) => (IPMask_Size as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (IPMask_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Size", [], [["ones", /* @__PURE__ */ $.basicType("int")], ["bits", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*net.IPMask",
	{Size: (receiver: any, ...args: any[]) => (IPMask_Size as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (IPMask_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Size", [], [["ones", /* @__PURE__ */ $.basicType("int")], ["bits", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class IPNet {
	public get IP(): IP {
		return this._fields.IP
	}

	public set IP(value: IP) {
		this._fields.IP = value
	}

	public get Mask(): IPMask {
		return this._fields.Mask
	}

	public set Mask(value: IPMask) {
		this._fields.Mask = value
	}

	public _fields: {
		IP: IP
		Mask: IPMask
	}

	constructor(init?: Partial<{IP?: IP, Mask?: IPMask}>, __goscriptValue?: boolean) {
		this._fields = {
			IP: init?.IP ?? (null! as IP),
			Mask: init?.Mask ?? (null! as IPMask)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): IPNet {
		return new IPNet(this, true)
	}

	public __goscriptAssign(source: IPNet): void {
		const target = this._fields
		const values = source._fields
		target.IP = values.IP
		target.Mask = values.Mask
	}

	public Contains(ip: IP): boolean {
		const n: IPNet | $.VarRef<IPNet> | null = this;
		let __goscriptTuple0: any = networkNumberAndMask(n)
		let nn: IP = (__goscriptTuple0[0] as IP)
		let m: IPMask = (__goscriptTuple0[1] as IPMask)
		{
			let x: IP = (IP_To4(ip) as IP)
			if (x != null) {
				ip = (x as IP)
			}
		}
		let l = $.sliceLen((ip as IP))
		if (l != $.sliceLen((nn as IP))) {
			return false
		}
		for (let __goscriptSliceWindow0 = $.sliceRange(nn), __goscriptSliceWindow1 = $.sliceRange(m), __goscriptSliceWindow2 = $.sliceRange(ip), i = 0; i < l; i++) {
			if ($.uint((((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number) & ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as number)), 8) != $.uint((((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as number) & ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as number)), 8)) {
				return false
			}
		}
		return true
	}

	public Network(): string {
		const n: IPNet | $.VarRef<IPNet> | null = this;
		return "ip+net"
	}

	public String(): string {
		const n: IPNet | $.VarRef<IPNet> | null = this;
		if (n == null) {
			return "<nil>"
		}
		let __goscriptTuple1: any = networkNumberAndMask(n)
		let nn: IP = (__goscriptTuple1[0] as IP)
		let m: IPMask = (__goscriptTuple1[1] as IPMask)
		if ((nn == null) || (m == null)) {
			return "<nil>"
		}
		let l = simpleMaskLength((m as IPMask))
		if (l == -1) {
			return $.concatString(($.concatString(IP_String(nn), "/")), IPMask_String(m))
		}
		return $.concatString(($.concatString(IP_String(nn), "/")), strconv.Itoa(l))
	}

	static __typeInfo = $.registerStructType(
		"net.IPNet",
		() => new IPNet(),
		() => [$.methodSignature("Contains", [["ip", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		IPNet,
		() => [/* @__PURE__ */ $.structField("IP", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), [0], 0, true), /* @__PURE__ */ $.structField("Mask", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IPMask"), [1], 24, true)]
	)
}

export const IPv4len: number = 4

export const IPv6len: number = 16

export function IPv4(a: number, b: number, c: number, d: number): IP {
	let p: IP = ($.makeSlice<number>(16, undefined, "byte") as IP)
	$.copy((p as IP), v4InV6Prefix)
	$.sliceElems(p!)[$.sliceSlot(p!, 12)] = a
	$.sliceElems(p!)[$.sliceSlot(p!, 13)] = b
	$.sliceElems(p!)[$.sliceSlot(p!, 14)] = c
	$.sliceElems(p!)[$.sliceSlot(p!, 15)] = d
	return (p as IP)
}

export let v4InV6Prefix: $.Slice<number> = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255]) as $.Slice<number>

export function __goscript_set_v4InV6Prefix(__goscriptValue: $.Slice<number>): void {
	v4InV6Prefix = __goscriptValue
}

export function IPv4Mask(a: number, b: number, c: number, d: number): IPMask {
	let p: IPMask = ($.makeSlice<number>(4, undefined, "byte") as IPMask)
	$.sliceElems(p!)[$.sliceSlot(p!, 0)] = a
	$.sliceElems(p!)[$.sliceSlot(p!, 1)] = b
	$.sliceElems(p!)[$.sliceSlot(p!, 2)] = c
	$.sliceElems(p!)[$.sliceSlot(p!, 3)] = d
	return (p as IPMask)
}

export function CIDRMask(ones: number, bits: number): IPMask {
	if ((bits != 32) && (bits != 128)) {
		return (null as IPMask)
	}
	if ((ones < 0) || (ones > bits)) {
		return (null as IPMask)
	}
	let l = globalThis.Math.trunc(bits / 8)
	let m: IPMask = ($.makeSlice<number>(l, undefined, "byte") as IPMask)
	let n = $.uint(ones, 64)
	for (let __goscriptSliceWindow3 = $.sliceRange(m), i = 0; i < l; i++) {
		if (n >= 8) {
			;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] = 0xff
			n = $.uint($.uint64Sub(n, 8), 64)
			continue
		}
		;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] = $.uint($.uint(~$.uint($.uintShr(0xff, n, 8), 8), 8), 8)
		n = 0
	}
	return (m as IPMask)
}

export let IPv4bcast: IP = (IPv4(255, 255, 255, 255) as IP)

export function __goscript_set_IPv4bcast(__goscriptValue: IP): void {
	IPv4bcast = __goscriptValue
}

export let IPv4allsys: IP = (IPv4(224, 0, 0, 1) as IP)

export function __goscript_set_IPv4allsys(__goscriptValue: IP): void {
	IPv4allsys = __goscriptValue
}

export let IPv4allrouter: IP = (IPv4(224, 0, 0, 2) as IP)

export function __goscript_set_IPv4allrouter(__goscriptValue: IP): void {
	IPv4allrouter = __goscriptValue
}

export let IPv4zero: IP = (IPv4(0, 0, 0, 0) as IP)

export function __goscript_set_IPv4zero(__goscriptValue: IP): void {
	IPv4zero = __goscriptValue
}

export let IPv6zero: IP = (new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) as $.Slice<number> as IP)

export function __goscript_set_IPv6zero(__goscriptValue: IP): void {
	IPv6zero = __goscriptValue
}

export let IPv6unspecified: IP = (new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) as $.Slice<number> as IP)

export function __goscript_set_IPv6unspecified(__goscriptValue: IP): void {
	IPv6unspecified = __goscriptValue
}

export let IPv6loopback: IP = (new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]) as $.Slice<number> as IP)

export function __goscript_set_IPv6loopback(__goscriptValue: IP): void {
	IPv6loopback = __goscriptValue
}

export let IPv6interfacelocalallnodes: IP = (new Uint8Array([255, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]) as $.Slice<number> as IP)

export function __goscript_set_IPv6interfacelocalallnodes(__goscriptValue: IP): void {
	IPv6interfacelocalallnodes = __goscriptValue
}

export let IPv6linklocalallnodes: IP = (new Uint8Array([255, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]) as $.Slice<number> as IP)

export function __goscript_set_IPv6linklocalallnodes(__goscriptValue: IP): void {
	IPv6linklocalallnodes = __goscriptValue
}

export let IPv6linklocalallrouters: IP = (new Uint8Array([255, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]) as $.Slice<number> as IP)

export function __goscript_set_IPv6linklocalallrouters(__goscriptValue: IP): void {
	IPv6linklocalallrouters = __goscriptValue
}

export function IP_IsUnspecified(ip: IP): boolean {
	return IP_Equal(ip, (IPv4zero as IP)) || IP_Equal(ip, (IPv6unspecified as IP))
}

export function IP_IsLoopback(ip: IP): boolean {
	{
		let ip4: IP = (IP_To4(ip) as IP)
		if (ip4 != null) {
			return $.arrayIndex(ip4!, 0) == 127
		}
	}
	return IP_Equal(ip, (IPv6loopback as IP))
}

export function IP_IsPrivate(ip: IP): boolean {
	{
		let ip4: IP = (IP_To4(ip) as IP)
		if (ip4 != null) {
			// Following RFC 1918, Section 3. Private Address Space which says:
			//   The Internet Assigned Numbers Authority (IANA) has reserved the
			//   following three blocks of the IP address space for private internets:
			//     10.0.0.0        -   10.255.255.255  (10/8 prefix)
			//     172.16.0.0      -   172.31.255.255  (172.16/12 prefix)
			//     192.168.0.0     -   192.168.255.255 (192.168/16 prefix)
			return (($.arrayIndex(ip4!, 0) == 10) || (($.arrayIndex(ip4!, 0) == 172) && ($.uint(($.arrayIndex(ip4!, 1) & 0xf0), 8) == 16))) || (($.arrayIndex(ip4!, 0) == 192) && ($.arrayIndex(ip4!, 1) == 168))
		}
	}
	// Following RFC 4193, Section 8. IANA Considerations which says:
	//   The IANA has assigned the FC00::/7 prefix to "Unique Local Unicast".
	return ($.sliceLen((ip as IP)) == 16) && ($.uint(($.arrayIndex(ip!, 0) & 0xfe), 8) == 0xfc)
}

export function IP_IsMulticast(ip: IP): boolean {
	{
		let ip4: IP = (IP_To4(ip) as IP)
		if (ip4 != null) {
			return $.uint(($.arrayIndex(ip4!, 0) & 0xf0), 8) == 0xe0
		}
	}
	return ($.sliceLen((ip as IP)) == 16) && ($.arrayIndex(ip!, 0) == 0xff)
}

export function IP_IsInterfaceLocalMulticast(ip: IP): boolean {
	return (($.sliceLen((ip as IP)) == 16) && ($.arrayIndex(ip!, 0) == 0xff)) && ($.uint(($.arrayIndex(ip!, 1) & 0x0f), 8) == 0x01)
}

export function IP_IsLinkLocalMulticast(ip: IP): boolean {
	{
		let ip4: IP = (IP_To4(ip) as IP)
		if (ip4 != null) {
			return (($.arrayIndex(ip4!, 0) == 224) && ($.arrayIndex(ip4!, 1) == 0)) && ($.arrayIndex(ip4!, 2) == 0)
		}
	}
	return (($.sliceLen((ip as IP)) == 16) && ($.arrayIndex(ip!, 0) == 0xff)) && ($.uint(($.arrayIndex(ip!, 1) & 0x0f), 8) == 0x02)
}

export function IP_IsLinkLocalUnicast(ip: IP): boolean {
	{
		let ip4: IP = (IP_To4(ip) as IP)
		if (ip4 != null) {
			return ($.arrayIndex(ip4!, 0) == 169) && ($.arrayIndex(ip4!, 1) == 254)
		}
	}
	return (($.sliceLen((ip as IP)) == 16) && ($.arrayIndex(ip!, 0) == 0xfe)) && ($.uint(($.arrayIndex(ip!, 1) & 0xc0), 8) == 0x80)
}

export function IP_IsGlobalUnicast(ip: IP): boolean {
	return (((((($.sliceLen((ip as IP)) == 4) || ($.sliceLen((ip as IP)) == 16)) && !IP_Equal(ip, (IPv4bcast as IP))) && !IP_IsUnspecified(ip)) && !IP_IsLoopback(ip)) && !IP_IsMulticast(ip)) && !IP_IsLinkLocalUnicast(ip)
}

export function isZeros(p: IP): boolean {
	for (let __goscriptSliceWindow4 = $.sliceRange(p), i = 0; i < __goscriptSliceWindow4.length; i++) {
		if (((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] as number) != 0) {
			return false
		}
	}
	return true
}

export function IP_To4(ip: IP): IP {
	if ($.sliceLen((ip as IP)) == 4) {
		return (ip as IP)
	}
	if (((($.sliceLen((ip as IP)) == 16) && isZeros(($.goSlice(ip, 0, 10) as IP))) && ($.arrayIndex(ip!, 10) == 0xff)) && ($.arrayIndex(ip!, 11) == 0xff)) {
		return ($.goSlice(ip, 12, 16) as IP)
	}
	return (null as IP)
}

export function IP_To16(ip: IP): IP {
	if ($.sliceLen((ip as IP)) == 4) {
		return (IPv4($.arrayIndex(ip!, 0), $.arrayIndex(ip!, 1), $.arrayIndex(ip!, 2), $.arrayIndex(ip!, 3)) as IP)
	}
	if ($.sliceLen((ip as IP)) == 16) {
		return (ip as IP)
	}
	return (null as IP)
}

export let classAMask: IPMask = (IPv4Mask(0xff, 0, 0, 0) as IPMask)

export function __goscript_set_classAMask(__goscriptValue: IPMask): void {
	classAMask = __goscriptValue
}

export let classBMask: IPMask = (IPv4Mask(0xff, 0xff, 0, 0) as IPMask)

export function __goscript_set_classBMask(__goscriptValue: IPMask): void {
	classBMask = __goscriptValue
}

export let classCMask: IPMask = (IPv4Mask(0xff, 0xff, 0xff, 0) as IPMask)

export function __goscript_set_classCMask(__goscriptValue: IPMask): void {
	classCMask = __goscriptValue
}

export function IP_DefaultMask(ip: IP): IPMask {
	{
		ip = (IP_To4(ip) as IP)
		if (ip == null) {
			return (null as IPMask)
		}
	}
	switch ((true as boolean)) {
		case $.arrayIndex(ip!, 0) < 0x80:
		{
			return (classAMask as IPMask)
			break
		}
		case $.arrayIndex(ip!, 0) < 0xC0:
		{
			return (classBMask as IPMask)
			break
		}
		default:
		{
			return (classCMask as IPMask)
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function allFF(b: $.Slice<number>): boolean {
	for (let __goscriptRangeTarget0 = b, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let c = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
		if (c != 0xff) {
			return false
		}
	}
	return true
}

export function IP_Mask(ip: IP, mask: IPMask): IP {
	if ((($.sliceLen((mask as IPMask)) == 16) && ($.sliceLen((ip as IP)) == 4)) && allFF($.goSlice(mask, undefined, 12))) {
		mask = ($.goSlice(mask, 12, undefined) as IPMask)
	}
	if ((($.sliceLen((mask as IPMask)) == 4) && ($.sliceLen((ip as IP)) == 16)) && bytealg.Equal($.goSlice(ip, undefined, 12), v4InV6Prefix)) {
		ip = ($.goSlice(ip, 12, undefined) as IP)
	}
	let n = $.sliceLen((ip as IP))
	if (n != $.sliceLen((mask as IPMask))) {
		return (null as IP)
	}
	let out: IP = ($.makeSlice<number>(n, undefined, "byte") as IP)
	for (let __goscriptSliceWindow5 = $.sliceRange(out), __goscriptSliceWindow6 = $.sliceRange(ip), __goscriptSliceWindow7 = $.sliceRange(mask), i = 0; i < n; i++) {
		;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] = $.uint(((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i)] as number) & ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] as number), 8)
	}
	return (out as IP)
}

export function IP_String(ip: IP): string {
	if ($.sliceLen((ip as IP)) == 0) {
		return "<nil>"
	}

	if (($.sliceLen((ip as IP)) != 4) && ($.sliceLen((ip as IP)) != 16)) {
		return $.concatString("?", hexString(ip))
	}

	let buf: $.Slice<number> = null! as $.Slice<number>
	switch ($.sliceLen((ip as IP))) {
		case 4:
		{
			const maxCap: number = 15
			buf = $.makeSlice<number>(0, 15, "byte")
			break
		}
		case 16:
		{
			const maxCap: number = 39
			buf = $.makeSlice<number>(0, 39, "byte")
			break
		}
	}
	buf = IP_appendTo(ip, buf)
	return $.bytesToString(buf)
}

export function hexString(b: $.Slice<number>): string {
	let s: $.Slice<number> = $.makeSlice<number>($.sliceLen(b) * 2, undefined, "byte")
	for (let __goscriptRangeTarget1 = b, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow8 = $.sliceRange(s), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let tn = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as number), 8)
		let __goscriptAssign0_0: number = $.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", $.uintShr(tn, 4, 8))
		let __goscriptAssign0_1: number = $.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", tn & 0xf);
		;(__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, i * 2)] = __goscriptAssign0_0;
		;(__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, (i * 2) + 1)] = __goscriptAssign0_1
	}
	return $.bytesToString(s)
}

export function ipEmptyString(ip: IP): string {
	if ($.sliceLen((ip as IP)) == 0) {
		return ""
	}
	return IP_String(ip)
}

export function IP_appendTo(ip: IP, b: $.Slice<number>): $.Slice<number> {
	// If IPv4, use dotted notation.
	{
		let p4: IP = (IP_To4(ip) as IP)
		if ($.sliceLen((p4 as IP)) == 4) {
			ip = (p4 as IP)
		}
	}
	let [addr, ] = netip.AddrFromSlice(ip)
	return addr.AppendTo(b)
}

export function IP_AppendText(ip: IP, b: $.Slice<number>): [$.Slice<number>, $.GoError] {
	if ($.sliceLen((ip as IP)) == 0) {
		return [b, null]
	}
	if (($.sliceLen((ip as IP)) != 4) && ($.sliceLen((ip as IP)) != 16)) {
		return [b, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField0 = hexString(ip); return new __goscript_net.AddrError({Err: "invalid IP address", Addr: __goscriptLiteralField0}) })(), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))]
	}

	return [IP_appendTo(ip, b), null]
}

export function IP_MarshalText(ip: IP): [$.Slice<number>, $.GoError] {
	// 24 is satisfied with all IPv4 addresses and short IPv6 addresses
	let __goscriptTuple2: any = IP_AppendText(ip, $.makeSlice<number>(0, 24, "byte"))
	let b: $.Slice<number> = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if (err != null) {
		return [null, err]
	}
	return [b, null]
}

export function IP_UnmarshalText(ip: $.VarRef<IP> | null, text: $.Slice<number>): $.GoError {
	if ($.sliceLen(text) == 0) {
		ip!.value = (null as IP)
		return null
	}
	let s = $.bytesToString(text)
	let x: IP = (ParseIP(s) as IP)
	if (x == null) {
		return $.interfaceValue<$.GoError>(new __goscript_net.ParseError({Type: "IP address", Text: s}), "*net.ParseError", /* @__PURE__ */ $.pointerType("net.ParseError"))
	}
	ip!.value = (x as IP)
	return null
}

export function IP_Equal(ip: IP, x: IP): boolean {
	if ($.sliceLen((ip as IP)) == $.sliceLen((x as IP))) {
		return bytealg.Equal(ip, x)
	}
	if (($.sliceLen((ip as IP)) == 4) && ($.sliceLen((x as IP)) == 16)) {
		return bytealg.Equal($.goSlice(x, 0, 12), v4InV6Prefix) && bytealg.Equal(ip, $.goSlice(x, 12, undefined))
	}
	if (($.sliceLen((ip as IP)) == 16) && ($.sliceLen((x as IP)) == 4)) {
		return bytealg.Equal($.goSlice(ip, 0, 12), v4InV6Prefix) && bytealg.Equal($.goSlice(ip, 12, undefined), x)
	}
	return false
}

export function IP_matchAddrFamily(ip: IP, x: IP): boolean {
	return ((IP_To4(ip) != null) && (IP_To4(x) != null)) || ((((IP_To16(ip) != null) && (IP_To4(ip) == null)) && (IP_To16(x) != null)) && (IP_To4(x) == null))
}

export function simpleMaskLength(mask: IPMask): number {
	let n: number = 0
	for (let __goscriptRangeTarget2 = mask, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
		let v = $.uint((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as number), 8)
		if (v == 0xff) {
			n = n + (8)
			continue
		}
		// found non-ff byte
		// count 1 bits
		while ($.uint((v & 0x80), 8) != 0) {
			n++
			v = $.uint(v << (1), 8)
		}
		// rest must be 0 bits
		if (v != 0) {
			return -1
		}
		for (i++; i < __goscriptRangeWindow2.length; i++) {
			if (((__goscriptRangeWindow2.backing as any[])[$.windowSlot(__goscriptRangeWindow2, i)] as number) != 0) {
				return -1
			}
		}
		break
	}
	return n
}

export function IPMask_Size(m: IPMask): [number, number] {
	let ones: number = 0
	let bits: number = 0
	let __goscriptAssign1_0: number = simpleMaskLength((m as IPMask))
	let __goscriptAssign1_1: number = $.sliceLen((m as IPMask)) * 8
	ones = __goscriptAssign1_0
	bits = __goscriptAssign1_1
	if (ones == -1) {
		return [0, 0]
	}
	return [ones, bits]
}

export function IPMask_String(m: IPMask): string {
	if ($.sliceLen((m as IPMask)) == 0) {
		return "<nil>"
	}
	return hexString(m)
}

export function networkNumberAndMask(n: IPNet | $.VarRef<IPNet> | null): [IP, IPMask] {
	let ip: IP = null! as IP
	let m: IPMask = null! as IPMask
	const n$: IPNet = n == null ? $.pointerTarget<IPNet>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<IPNet>(n)
	{
		ip = (IP_To4((n$ as IPNet).IP) as IP)
		if (ip == null) {
			ip = ((n$ as IPNet).IP as IP)
			if ($.sliceLen((ip as IP)) != 16) {
				return [(null as IP), (null as IPMask)]
			}
		}
	}
	m = ((n$ as IPNet).Mask as IPMask)
	switch ($.sliceLen((m as IPMask))) {
		case 4:
		{
			if ($.sliceLen((ip as IP)) != 4) {
				return [(null as IP), (null as IPMask)]
			}
			break
		}
		case 16:
		{
			if ($.sliceLen((ip as IP)) == 4) {
				m = ($.goSlice(m, 12, undefined) as IPMask)
			}
			break
		}
		default:
		{
			return [(null as IP), (null as IPMask)]
			break
		}
	}
	return [ip, m]
}

export function ParseIP(s: string): IP {
	{
		let [addr, valid] = parseIP(s)
		if (valid) {
			return (($.goSlice(addr, undefined, undefined) as IP) as IP)
		}
	}
	return (null as IP)
}

export function parseIP(s: string): [Uint8Array, boolean] {
	let [ip, err] = netip.ParseAddr(s)
	if ((err != null) || (!$.stringEqual(ip.Zone(), ""))) {
		return [$.arrayValue(new Uint8Array(16)), false]
	}
	return [ip.As16(), true]
}

export function ParseCIDR(s: string): [IP, IPNet | $.VarRef<IPNet> | null, $.GoError] {
	let [addr, mask, found] = stringslite.Cut(s, "/")
	if (!found) {
		return [(null as IP), null, $.interfaceValue<$.GoError>(new __goscript_net.ParseError({Type: "CIDR address", Text: s}), "*net.ParseError", /* @__PURE__ */ $.pointerType("net.ParseError"))]
	}

	let [ipAddr, err] = netip.ParseAddr(addr)
	if ((err != null) || (!$.stringEqual(ipAddr.Zone(), ""))) {
		return [(null as IP), null, $.interfaceValue<$.GoError>(new __goscript_net.ParseError({Type: "CIDR address", Text: s}), "*net.ParseError", /* @__PURE__ */ $.pointerType("net.ParseError"))]
	}

	let [n, i, ok] = __goscript_parse.dtoi(mask)
	if (((!ok || (i != $.stringLen(mask))) || (n < 0)) || (n > ipAddr.BitLen())) {
		return [(null as IP), null, $.interfaceValue<$.GoError>(new __goscript_net.ParseError({Type: "CIDR address", Text: s}), "*net.ParseError", /* @__PURE__ */ $.pointerType("net.ParseError"))]
	}
	let m: IPMask = (CIDRMask(n, ipAddr.BitLen()) as IPMask)
	let addr16 = ipAddr.As16()
	return [(($.goSlice(addr16, undefined, undefined) as IP) as IP), (() => { const __goscriptLiteralField1 = (IP_Mask(($.goSlice(addr16, undefined, undefined) as IP), (m as IPMask)) as IP); return new IPNet({IP: __goscriptLiteralField1, Mask: (m as IPMask)}) })(), null]
}

export function copyIP(x: IP): IP {
	let y: IP = ($.makeSlice<number>($.sliceLen((x as IP)), undefined, "byte") as IP)
	$.copy((y as IP), (x as IP))
	return (y as IP)
}
