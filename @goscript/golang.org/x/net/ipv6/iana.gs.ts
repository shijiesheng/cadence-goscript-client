// Generated file based on iana.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_icmp from "./icmp.gs.ts"
import "./icmp.gs.ts"

export const ICMPTypeDestinationUnreachable: __goscript_icmp.ICMPType = 1

export const ICMPTypePacketTooBig: __goscript_icmp.ICMPType = 2

export const ICMPTypeTimeExceeded: __goscript_icmp.ICMPType = 3

export const ICMPTypeParameterProblem: __goscript_icmp.ICMPType = 4

export const ICMPTypeEchoRequest: __goscript_icmp.ICMPType = 128

export const ICMPTypeEchoReply: __goscript_icmp.ICMPType = 129

export const ICMPTypeMulticastListenerQuery: __goscript_icmp.ICMPType = 130

export const ICMPTypeMulticastListenerReport: __goscript_icmp.ICMPType = 131

export const ICMPTypeMulticastListenerDone: __goscript_icmp.ICMPType = 132

export const ICMPTypeRouterSolicitation: __goscript_icmp.ICMPType = 133

export const ICMPTypeRouterAdvertisement: __goscript_icmp.ICMPType = 134

export const ICMPTypeNeighborSolicitation: __goscript_icmp.ICMPType = 135

export const ICMPTypeNeighborAdvertisement: __goscript_icmp.ICMPType = 136

export const ICMPTypeRedirect: __goscript_icmp.ICMPType = 137

export const ICMPTypeRouterRenumbering: __goscript_icmp.ICMPType = 138

export const ICMPTypeNodeInformationQuery: __goscript_icmp.ICMPType = 139

export const ICMPTypeNodeInformationResponse: __goscript_icmp.ICMPType = 140

export const ICMPTypeInverseNeighborDiscoverySolicitation: __goscript_icmp.ICMPType = 141

export const ICMPTypeInverseNeighborDiscoveryAdvertisement: __goscript_icmp.ICMPType = 142

export const ICMPTypeVersion2MulticastListenerReport: __goscript_icmp.ICMPType = 143

export const ICMPTypeHomeAgentAddressDiscoveryRequest: __goscript_icmp.ICMPType = 144

export const ICMPTypeHomeAgentAddressDiscoveryReply: __goscript_icmp.ICMPType = 145

export const ICMPTypeMobilePrefixSolicitation: __goscript_icmp.ICMPType = 146

export const ICMPTypeMobilePrefixAdvertisement: __goscript_icmp.ICMPType = 147

export const ICMPTypeCertificationPathSolicitation: __goscript_icmp.ICMPType = 148

export const ICMPTypeCertificationPathAdvertisement: __goscript_icmp.ICMPType = 149

export const ICMPTypeMulticastRouterAdvertisement: __goscript_icmp.ICMPType = 151

export const ICMPTypeMulticastRouterSolicitation: __goscript_icmp.ICMPType = 152

export const ICMPTypeMulticastRouterTermination: __goscript_icmp.ICMPType = 153

export const ICMPTypeFMIPv6: __goscript_icmp.ICMPType = 154

export const ICMPTypeRPLControl: __goscript_icmp.ICMPType = 155

export const ICMPTypeILNPv6LocatorUpdate: __goscript_icmp.ICMPType = 156

export const ICMPTypeDuplicateAddressRequest: __goscript_icmp.ICMPType = 157

export const ICMPTypeDuplicateAddressConfirmation: __goscript_icmp.ICMPType = 158

export const ICMPTypeMPLControl: __goscript_icmp.ICMPType = 159

export const ICMPTypeExtendedEchoRequest: __goscript_icmp.ICMPType = 160

export const ICMPTypeExtendedEchoReply: __goscript_icmp.ICMPType = 161

export var icmpTypes: globalThis.Map<__goscript_icmp.ICMPType, string> | null

export function __goscript_init_icmpTypes(): void {
	if (((icmpTypes) as any) === undefined) {
		icmpTypes = $.makeMap<__goscript_icmp.ICMPType, string>([[1, "destination unreachable"], [2, "packet too big"], [3, "time exceeded"], [4, "parameter problem"], [128, "echo request"], [129, "echo reply"], [130, "multicast listener query"], [131, "multicast listener report"], [132, "multicast listener done"], [133, "router solicitation"], [134, "router advertisement"], [135, "neighbor solicitation"], [136, "neighbor advertisement"], [137, "redirect message"], [138, "router renumbering"], [139, "icmp node information query"], [140, "icmp node information response"], [141, "inverse neighbor discovery solicitation message"], [142, "inverse neighbor discovery advertisement message"], [143, "version 2 multicast listener report"], [144, "home agent address discovery request message"], [145, "home agent address discovery reply message"], [146, "mobile prefix solicitation"], [147, "mobile prefix advertisement"], [148, "certification path solicitation message"], [149, "certification path advertisement message"], [151, "multicast router advertisement"], [152, "multicast router solicitation"], [153, "multicast router termination"], [154, "fmipv6 messages"], [155, "rpl control message"], [156, "ilnpv6 locator update message"], [157, "duplicate address request"], [158, "duplicate address confirmation"], [159, "mpl control message"], [160, "extended echo request"], [161, "extended echo reply"]])
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
