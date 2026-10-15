// Generated file based on helper.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as net from "@goscript/net/index.js"

import * as runtime from "@goscript/runtime/index.js"
import "@goscript/errors/index.js"
import "@goscript/net/index.js"
import "@goscript/runtime/index.js"

export let errInvalidConn: $.GoError = errors.New("invalid connection")

export function __goscript_set_errInvalidConn(__goscriptValue: $.GoError): void {
	errInvalidConn = __goscriptValue
}

export let errMissingAddress: $.GoError = errors.New("missing address")

export function __goscript_set_errMissingAddress(__goscriptValue: $.GoError): void {
	errMissingAddress = __goscriptValue
}

export let errHeaderTooShort: $.GoError = errors.New("header too short")

export function __goscript_set_errHeaderTooShort(__goscriptValue: $.GoError): void {
	errHeaderTooShort = __goscriptValue
}

export let errInvalidConnType: $.GoError = errors.New("invalid conn type")

export function __goscript_set_errInvalidConnType(__goscriptValue: $.GoError): void {
	errInvalidConnType = __goscriptValue
}

export let errNotImplemented: $.GoError = errors.New($.concatString(($.concatString(($.concatString("not implemented on ", runtime.GOOS)), "/")), runtime.GOARCH))

export function __goscript_set_errNotImplemented(__goscriptValue: $.GoError): void {
	errNotImplemented = __goscriptValue
}

export function boolint(b: boolean): number {
	if (b) {
		return 1
	}
	return 0
}

export function netAddrToIP16(a: net.Addr | null): net.IP {
	{
		const __goscriptTypeSwitchValue = a
		switch (true) {
			case $.typeAssert<net.UDPAddr | $.VarRef<net.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).ok:
				{
					let v: net.UDPAddr | $.VarRef<net.UDPAddr> | null = $.typeAssert<net.UDPAddr | $.VarRef<net.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).value
					{
						let ip: net.IP = (net.IP_To16($.pointerValue<net.UDPAddr>(v).IP) as net.IP)
						if ((ip != null) && (net.IP_To4(ip) == null)) {
							return (ip as net.IP)
						}
					}
				}
				break
			case $.typeAssert<net.IPAddr | $.VarRef<net.IPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.IPAddr")).ok:
				{
					let v: net.IPAddr | $.VarRef<net.IPAddr> | null = $.typeAssert<net.IPAddr | $.VarRef<net.IPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.IPAddr")).value
					{
						let ip: net.IP = (net.IP_To16($.pointerValue<net.IPAddr>(v).IP) as net.IP)
						if ((ip != null) && (net.IP_To4(ip) == null)) {
							return (ip as net.IP)
						}
					}
				}
				break
		}
	}
	return (null as net.IP)
}

export function opAddr(a: net.Addr | null): net.Addr | null {
	{
		const __goscriptTypeSwitchValue = a
		switch (true) {
			case $.typeAssert<net.TCPAddr | $.VarRef<net.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).ok:
				{
					if (a == null) {
						return null
					}
				}
				break
			case $.typeAssert<net.UDPAddr | $.VarRef<net.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).ok:
				{
					if (a == null) {
						return null
					}
				}
				break
			case $.typeAssert<net.IPAddr | $.VarRef<net.IPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.IPAddr")).ok:
				{
					if (a == null) {
						return null
					}
				}
				break
		}
	}
	return a
}
