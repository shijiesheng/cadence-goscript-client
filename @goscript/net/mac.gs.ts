// Generated file based on mac.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_net from "./net.gs.ts"

import * as __goscript_parse from "./parse.gs.ts"
import "./net.gs.ts"
import "./parse.gs.ts"

export type HardwareAddr = $.Slice<number>

$.registerNamedType("net.HardwareAddr", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"net.HardwareAddr",
	{String: (receiver: any, ...args: any[]) => (HardwareAddr_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*net.HardwareAddr",
	{String: (receiver: any, ...args: any[]) => (HardwareAddr_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export const hexDigit: string = "0123456789abcdef"

export function HardwareAddr_String(a: HardwareAddr): string {
	if ($.sliceLen((a as HardwareAddr)) == 0) {
		return ""
	}
	let buf: $.Slice<number> = $.makeSlice<number>(0, ($.sliceLen((a as HardwareAddr)) * 3) - 1, "byte")
	for (let __goscriptRangeTarget0 = a, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let b = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as number), 8)
		if (i > 0) {
			buf = $.append(buf, $.uint(58, 8), $.byteSliceHint)
		}
		buf = $.append(buf, $.uint($.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", $.uintShr(b, 4, 8)), 8), $.byteSliceHint)
		buf = $.append(buf, $.uint($.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", b & 0xF), 8), $.byteSliceHint)
	}
	return $.bytesToString(buf)
}

export function ParseMAC(s: string): [HardwareAddr, $.GoError] {
	let hw: HardwareAddr = null! as HardwareAddr
	let err: $.GoError = null! as $.GoError
	error: {
		if ($.stringLen(s) < 12) {
			break error
		}

		if (($.indexString(s, 2) == 58) || ($.indexString(s, 2) == 45)) {
			if ((($.stringLen(s) + 1) % 3) != 0) {
				break error
			}
			let n = globalThis.Math.trunc(($.stringLen(s) + 1) / 3)
			if (((n != 6) && (n != 8)) && (n != 20)) {
				break error
			}
			hw = ($.makeSlice<number>(n, undefined, "byte") as HardwareAddr)
			for (let __goscriptSliceWindow0 = $.sliceRange(hw), x = 0, i = 0; i < n; i++) {
				let ok: boolean = false
				{
					let __goscriptTuple0: any = __goscript_parse.xtoi2($.sliceStringOrBytes(s, x, undefined), $.indexString(s, 2));
					;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = __goscriptTuple0[0]
					ok = __goscriptTuple0[1]
					if (!ok) {
						break error
					}
				}
				x = x + (3)
			}
		} else {
			if ($.indexString(s, 4) == 46) {
				if ((($.stringLen(s) + 1) % 5) != 0) {
					break error
				}
				let n = globalThis.Math.trunc((2 * ($.stringLen(s) + 1)) / 5)
				if (((n != 6) && (n != 8)) && (n != 20)) {
					break error
				}
				hw = ($.makeSlice<number>(n, undefined, "byte") as HardwareAddr)
				for (let __goscriptSliceWindow1 = $.sliceRange(hw), x = 0, i = 0; i < n; i = i + (2)) {
					let ok: boolean = false
					{
						let __goscriptTuple1: any = __goscript_parse.xtoi2($.sliceStringOrBytes(s, x, x + 2), 0);
						;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = __goscriptTuple1[0]
						ok = __goscriptTuple1[1]
						if (!ok) {
							break error
						}
					}
					{
						let __goscriptTuple2: any = __goscript_parse.xtoi2($.sliceStringOrBytes(s, x + 2, undefined), $.indexString(s, 4));
						;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i + 1)] = __goscriptTuple2[0]
						ok = __goscriptTuple2[1]
						if (!ok) {
							break error
						}
					}
					x = x + (5)
				}
			} else {
				if (($.stringLen(s) % 2) != 0) {
					break error
				}

				let n = globalThis.Math.trunc($.stringLen(s) / 2)
				if (((n != 6) && (n != 8)) && (n != 20)) {
					break error
				}

				hw = ($.makeSlice<number>(globalThis.Math.trunc($.stringLen(s) / 2), undefined, "byte") as HardwareAddr)
				for (let __goscriptSliceWindow2 = $.sliceRange(hw), x = 0, i = 0; i < n; i++) {
					let ok: boolean = false
					{
						let __goscriptTuple3: any = __goscript_parse.xtoi2($.sliceStringOrBytes(s, x, x + 2), 0);
						;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = __goscriptTuple3[0]
						ok = __goscriptTuple3[1]
						if (!ok) {
							break error
						}
					}
					x = x + (2)
				}
			}
		}
		return [(hw as HardwareAddr), null]
	}
	return [(null as HardwareAddr), $.interfaceValue<$.GoError>(new __goscript_net.AddrError({Err: "invalid MAC address", Addr: s}), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))]
}
