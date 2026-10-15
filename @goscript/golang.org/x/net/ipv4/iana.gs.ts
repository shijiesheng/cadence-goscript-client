// Generated file based on iana.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_icmp from "./icmp.gs.ts"
import "./icmp.gs.ts"

export const ICMPTypeEchoReply: __goscript_icmp.ICMPType = 0

export const ICMPTypeDestinationUnreachable: __goscript_icmp.ICMPType = 3

export const ICMPTypeRedirect: __goscript_icmp.ICMPType = 5

export const ICMPTypeEcho: __goscript_icmp.ICMPType = 8

export const ICMPTypeRouterAdvertisement: __goscript_icmp.ICMPType = 9

export const ICMPTypeRouterSolicitation: __goscript_icmp.ICMPType = 10

export const ICMPTypeTimeExceeded: __goscript_icmp.ICMPType = 11

export const ICMPTypeParameterProblem: __goscript_icmp.ICMPType = 12

export const ICMPTypeTimestamp: __goscript_icmp.ICMPType = 13

export const ICMPTypeTimestampReply: __goscript_icmp.ICMPType = 14

export const ICMPTypePhoturis: __goscript_icmp.ICMPType = 40

export const ICMPTypeExtendedEchoRequest: __goscript_icmp.ICMPType = 42

export const ICMPTypeExtendedEchoReply: __goscript_icmp.ICMPType = 43

export var icmpTypes: globalThis.Map<__goscript_icmp.ICMPType, string> | null

export function __goscript_init_icmpTypes(): void {
	if (((icmpTypes) as any) === undefined) {
		icmpTypes = $.makeMap<__goscript_icmp.ICMPType, string>([[0, "echo reply"], [3, "destination unreachable"], [5, "redirect"], [8, "echo"], [9, "router advertisement"], [10, "router solicitation"], [11, "time exceeded"], [12, "parameter problem"], [13, "timestamp"], [14, "timestamp reply"], [40, "photuris"], [42, "extended echo request"], [43, "extended echo reply"]])
	}
}

export function __goscript_get_icmpTypes(): globalThis.Map<__goscript_icmp.ICMPType, string> | null {
	if (((icmpTypes) as any) === undefined) {
		__goscript_init_icmpTypes()
	}
	return icmpTypes
}

export function __goscript_set_icmpTypes(__goscriptValue: globalThis.Map<__goscript_icmp.ICMPType, string> | null): void {
	icmpTypes = __goscriptValue
}
