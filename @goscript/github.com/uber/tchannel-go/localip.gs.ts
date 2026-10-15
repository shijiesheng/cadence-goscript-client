// Generated file based on localip.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as net from "@goscript/net/index.js"
import "@goscript/errors/index.js"
import "@goscript/net/index.js"

export function scoreAddr(iface: net.Interface, addr: net.Addr | null): [number, net.IP] {
	let ip: net.IP = null! as net.IP
	{
		let __goscriptTuple0: any = $.typeAssertTuple<net.IPNet | $.VarRef<net.IPNet> | null>(addr, /* @__PURE__ */ $.pointerType("net.IPNet"))
		let netAddr: net.IPNet | $.VarRef<net.IPNet> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			ip = ($.pointerValue<net.IPNet>(netAddr).IP as net.IP)
		} else {
			{
				let __goscriptTuple1: any = $.typeAssertTuple<net.IPAddr | $.VarRef<net.IPAddr> | null>(addr, /* @__PURE__ */ $.pointerType("net.IPAddr"))
				let netIP: net.IPAddr | $.VarRef<net.IPAddr> | null = __goscriptTuple1[0]
				let __goscriptShadow0 = __goscriptTuple1[1]
				if (__goscriptShadow0) {
					ip = ($.pointerValue<net.IPAddr>(netIP).IP as net.IP)
				} else {
					return [-1, (null as net.IP)]
				}
			}
		}
	}

	let score: number = 0
	if (net.IP_To4(ip) != null) {
		score = score + (300)
	}
	if ((($.uint($.uint64And(iface.Flags, 4n), 64)) == 0) && !net.IP_IsLoopback(ip)) {
		score = score + (100)
		if (($.uint($.uint64And(iface.Flags, 1n), 64)) != 0) {
			score = score + (100)
		}
	}
	if (isLocalMacAddr((iface.HardwareAddr as net.HardwareAddr))) {
		score = score - (50)
	}
	return [score, (ip as net.IP)]
}

export function listenIP(interfaces: $.Slice<net.Interface>): [net.IP, $.GoError] {
	let bestScore = -1
	let bestIP: net.IP = null! as net.IP
	// Select the highest scoring IP as the best IP.
	for (let __goscriptRangeTarget1 = interfaces, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let iface = $.varRef(((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as net.Interface)).clone())
		let __goscriptTuple2: any = iface.value.Addrs()
		let addrs: $.Slice<net.Addr | null> = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			// Skip this interface if there is an error.
			continue
		}

		for (let __goscriptRangeTarget0 = addrs, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let addr = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as net.Addr | null)
			let __goscriptTuple3: any = scoreAddr((iface.value).clone(), addr)
			let score = __goscriptTuple3[0]
			let ip: net.IP = (__goscriptTuple3[1] as net.IP)
			if (score > bestScore) {
				bestScore = score
				bestIP = (ip as net.IP)
			}
		}
	}

	if (bestScore == -1) {
		return [(null as net.IP), errors.New("no addresses to listen on")]
	}

	return [(bestIP as net.IP), null]
}

export async function ListenIP(): globalThis.Promise<[net.IP, $.GoError]> {
	let __goscriptTuple4: any = await net.Interfaces()
	let interfaces: $.Slice<net.Interface> = __goscriptTuple4[0]
	let err = __goscriptTuple4[1]
	if (err != null) {
		return [(null as net.IP), err]
	}
	const __goscriptReturn0 = listenIP(interfaces)
	return [(__goscriptReturn0[0] as net.IP), __goscriptReturn0[1]]
	throw new globalThis.Error("goscript: unreachable return")
}

export function mustParseMAC(s: string): net.HardwareAddr {
	let __goscriptTuple5: any = net.ParseMAC(s)
	let addr: net.HardwareAddr = (__goscriptTuple5[0] as net.HardwareAddr)
	let err = __goscriptTuple5[1]
	if (err != null) {
		$.panic((err as any))
	}
	return (addr as net.HardwareAddr)
}

export function isLocalMacAddr(addr: net.HardwareAddr): boolean {
	if ($.sliceLen((addr as net.HardwareAddr)) == 0) {
		return false
	}
	return $.uint(($.arrayIndex(addr!, 0) & 2), 8) == 2
}
