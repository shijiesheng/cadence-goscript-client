// Generated file based on dnsclient.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as cmp from "@goscript/cmp/index.js"

import * as bytealg from "@goscript/internal/bytealg/index.js"

import * as strconv from "@goscript/internal/strconv/index.js"

import * as slices from "@goscript/slices/index.js"

import "@goscript/unsafe/index.js"

import * as dnsmessage from "@goscript/vendor/golang.org/x/net/dns/dnsmessage/index.js"

import * as __goscript_ip from "./ip.gs.ts"

import * as __goscript_mac from "./mac.gs.ts"

import * as __goscript_net from "./net.gs.ts"
import "@goscript/cmp/index.js"
import "@goscript/internal/bytealg/index.js"
import "@goscript/internal/strconv/index.js"
import "@goscript/slices/index.js"
import "@goscript/vendor/golang.org/x/net/dns/dnsmessage/index.js"
import "./ip.gs.ts"
import "./mac.gs.ts"
import "./net.gs.ts"

export type byPriorityWeight = $.Slice<SRV | $.VarRef<SRV> | null>

$.registerNamedType("net.byPriorityWeight", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.SRV")));

$.registerNamedValueType(
	"net.byPriorityWeight",
	{shuffleByWeight: (receiver: any, ...args: any[]) => (byPriorityWeight_shuffleByWeight as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), sort: (receiver: any, ...args: any[]) => (byPriorityWeight_sort as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("shuffleByWeight"), $.methodSignature("sort")]
);

$.registerNamedValueType(
	"*net.byPriorityWeight",
	{shuffleByWeight: (receiver: any, ...args: any[]) => (byPriorityWeight_shuffleByWeight as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), sort: (receiver: any, ...args: any[]) => (byPriorityWeight_sort as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("shuffleByWeight"), $.methodSignature("sort")]
);

export type byPref = $.Slice<MX | $.VarRef<MX> | null>

$.registerNamedType("net.byPref", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.MX")));

$.registerNamedValueType(
	"net.byPref",
	{sort: (receiver: any, ...args: any[]) => (byPref_sort as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("sort")]
);

$.registerNamedValueType(
	"*net.byPref",
	{sort: (receiver: any, ...args: any[]) => (byPref_sort as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("sort")]
);

export class SRV {
	public get Target(): string {
		return this._fields.Target
	}

	public set Target(value: string) {
		this._fields.Target = value
	}

	public get Port(): number {
		return this._fields.Port
	}

	public set Port(value: number) {
		this._fields.Port = value
	}

	public get Priority(): number {
		return this._fields.Priority
	}

	public set Priority(value: number) {
		this._fields.Priority = value
	}

	public get Weight(): number {
		return this._fields.Weight
	}

	public set Weight(value: number) {
		this._fields.Weight = value
	}

	public _fields: {
		Target: string
		Port: number
		Priority: number
		Weight: number
	}

	constructor(init?: Partial<{Target?: string, Port?: number, Priority?: number, Weight?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Target: init?.Target ?? ("" as string),
			Port: init?.Port ?? (0 as number),
			Priority: init?.Priority ?? (0 as number),
			Weight: init?.Weight ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SRV {
		return new SRV(this, true)
	}

	public __goscriptAssign(source: SRV): void {
		const target = this._fields
		const values = source._fields
		target.Target = values.Target
		target.Port = values.Port
		target.Priority = values.Priority
		target.Weight = values.Weight
	}

	static __typeInfo = $.registerStructType(
		"net.SRV",
		() => new SRV(),
		() => [],
		SRV,
		() => [/* @__PURE__ */ $.structField("Target", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Port", /* @__PURE__ */ $.basicType("uint16"), [1], 16, true), /* @__PURE__ */ $.structField("Priority", /* @__PURE__ */ $.basicType("uint16"), [2], 18, true), /* @__PURE__ */ $.structField("Weight", /* @__PURE__ */ $.basicType("uint16"), [3], 20, true)]
	)
}

export class MX {
	public get Host(): string {
		return this._fields.Host
	}

	public set Host(value: string) {
		this._fields.Host = value
	}

	public get Pref(): number {
		return this._fields.Pref
	}

	public set Pref(value: number) {
		this._fields.Pref = value
	}

	public _fields: {
		Host: string
		Pref: number
	}

	constructor(init?: Partial<{Host?: string, Pref?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Host: init?.Host ?? ("" as string),
			Pref: init?.Pref ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MX {
		return new MX(this, true)
	}

	public __goscriptAssign(source: MX): void {
		const target = this._fields
		const values = source._fields
		target.Host = values.Host
		target.Pref = values.Pref
	}

	static __typeInfo = $.registerStructType(
		"net.MX",
		() => new MX(),
		() => [],
		MX,
		() => [/* @__PURE__ */ $.structField("Host", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Pref", /* @__PURE__ */ $.basicType("uint16"), [1], 16, true)]
	)
}

export class NS {
	public get Host(): string {
		return this._fields.Host
	}

	public set Host(value: string) {
		this._fields.Host = value
	}

	public _fields: {
		Host: string
	}

	constructor(init?: Partial<{Host?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Host: init?.Host ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NS {
		return new NS(this, true)
	}

	public __goscriptAssign(source: NS): void {
		const target = this._fields
		const values = source._fields
		target.Host = values.Host
	}

	static __typeInfo = $.registerStructType(
		"net.NS",
		() => new NS(),
		() => [],
		NS,
		() => [/* @__PURE__ */ $.structField("Host", /* @__PURE__ */ $.basicType("string"), [0], 0, true)]
	)
}

export function runtime_rand(): bigint {
	return globalThis.crypto.getRandomValues(new globalThis.BigUint64Array(1))[0]
}

export function randInt(): number {
	return $.int($.uint($.uint64Shr($.uint(runtime_rand(), 64), 1n), 64))
}

export function randIntn(n: number): number {
	return randInt() % n
}

export function reverseaddr(addr: string): [string, $.GoError] {
	let arpa: string = ""
	let err: $.GoError = null! as $.GoError
	let ip: __goscript_ip.IP = (__goscript_ip.ParseIP(addr) as __goscript_ip.IP)
	if (ip == null) {
		return ["", $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: "unrecognized address", Name: addr}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
	}
	if (__goscript_ip.IP_To4(ip) != null) {
		return [$.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(strconv.Itoa($.int($.arrayIndex(ip!, 15))), ".")), strconv.Itoa($.int($.arrayIndex(ip!, 14))))), ".")), strconv.Itoa($.int($.arrayIndex(ip!, 13))))), ".")), strconv.Itoa($.int($.arrayIndex(ip!, 12))))), ".in-addr.arpa."), null]
	}
	// Must be IPv6
	let buf: $.Slice<number> = $.makeSlice<number>(0, ($.sliceLen((ip as __goscript_ip.IP)) * 4) + 9, "byte")
	// Add it, in reverse, to the buffer
	for (let __goscriptSliceWindow0 = $.sliceRange(ip), i = $.sliceLen((ip as __goscript_ip.IP)) - 1; i >= 0; i--) {
		let v = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number)
		buf = $.append(buf, $.uint($.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", v & 0xF), 8), $.uint(46, 8), $.uint($.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", $.uintShr(v, 4, 8)), 8), $.uint(46, 8), $.byteSliceHint)
	}
	// Append "ip6.arpa." and return (buf already has the final .)
	buf = $.appendSlice(buf, $.stringToBytes("ip6.arpa."), $.byteSliceHint)
	return [$.bytesToString(buf), null]
}

export function equalASCIIName(x: dnsmessage.Name, y: dnsmessage.Name): boolean {
	if (x.Length != y.Length) {
		return false
	}
	for (let i = 0; i < $.int(x.Length); i++) {
		let a = $.arrayIndex(x.Data, i)
		let b = $.arrayIndex(y.Data, i)
		if ((65 <= a) && (a <= 90)) {
			a = $.uint(a + (0x20), 8)
		}
		if ((65 <= b) && (b <= 90)) {
			b = $.uint(b + (0x20), 8)
		}
		if (a != b) {
			return false
		}
	}
	return true
}

export function isDomainName(s: string): boolean {
	// The root domain name is valid. See golang.org/issue/45715.
	if ($.stringEqual(s, ".")) {
		return true
	}

	// See RFC 1035, RFC 3696.
	// Presentation format has dots before every label except the first, and the
	// terminal empty label is optional here because we assume fully-qualified
	// (absolute) input. We must therefore reserve space for the first and last
	// labels' length octets in wire format, where they are necessary and the
	// maximum total length is 255.
	// So our _effective_ maximum is 253, but 254 is not rejected if the last
	// character is a dot.
	let l = $.stringLen(s)
	if (((l == 0) || (l > 254)) || ((l == 254) && ($.indexString(s, l - 1) != 46))) {
		return false
	}

	let last = 46
	let nonNumeric = false
	let partlen = 0
	for (let i = 0; i < $.stringLen(s); i++) {
		let c = $.indexString(s, i)
		switch ((true as boolean)) {
			default:
			{
				return false
				break
			}
			case (((97 <= c) && (c <= 122)) || ((65 <= c) && (c <= 90))) || (c == 95):
			{
				nonNumeric = true
				partlen++
				break
			}
			case (48 <= c) && (c <= 57):
			{
				partlen++
				break
			}
			case c == 45:
			{
				if (last == 46) {
					return false
				}
				partlen++
				nonNumeric = true
				break
			}
			case c == 46:
			{
				if ((last == 46) || (last == 45)) {
					return false
				}
				if ((partlen > 63) || (partlen == 0)) {
					return false
				}
				partlen = 0
				break
			}
		}
		last = c
	}
	if ((last == 45) || (partlen > 63)) {
		return false
	}

	return nonNumeric
}

export function absDomainName(s: string): string {
	if ((bytealg.IndexByteString(s, 46) != -1) && ($.indexString(s, $.stringLen(s) - 1) != 46)) {
		s = $.concatString(s, ".")
	}
	return s
}

export function byPriorityWeight_shuffleByWeight(addrs: byPriorityWeight): void {
	let sum = 0
	for (let __goscriptRangeTarget0 = addrs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let addr = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as SRV | $.VarRef<SRV> | null)
		sum = sum + ($.int($.pointerValue<SRV>(addr).Weight))
	}
	while ((sum > 0) && ($.sliceLen((addrs as byPriorityWeight)) > 1)) {
		let s = 0
		let n = randIntn(sum)
		for (let __goscriptRangeTarget1 = addrs, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			s = s + ($.int($.pointerValue<SRV>(((__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] as SRV | $.VarRef<SRV> | null)).Weight))
			if (s > n) {
				if (i > 0) {
					let __goscriptAssign0_0: SRV | $.VarRef<SRV> | null = ((__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] as SRV | $.VarRef<SRV> | null)
					let __goscriptAssign0_1: SRV | $.VarRef<SRV> | null = ((__goscriptRangeWindow1.backing as any[])[$.windowSlot(__goscriptRangeWindow1, 0)] as SRV | $.VarRef<SRV> | null);
					;(__goscriptRangeWindow1.backing as any[])[$.windowSlot(__goscriptRangeWindow1, 0)] = __goscriptAssign0_0;
					;(__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] = __goscriptAssign0_1
				}
				break
			}
		}
		sum = sum - ($.int($.pointerValue<SRV>($.arrayIndex(addrs!, 0)).Weight))
		addrs = ($.goSlice(addrs, 1, undefined) as byPriorityWeight)
	}
}

export function byPriorityWeight_sort(addrs: byPriorityWeight): void {
	slices.SortFunc((addrs as byPriorityWeight), $.functionValue((a: SRV | $.VarRef<SRV> | null, b: SRV | $.VarRef<SRV> | null): number => {
		{
			let r = cmp.Compare($.pointerValue<SRV>(a).Priority, $.pointerValue<SRV>(b).Priority)
			if (r != 0) {
				return r
			}
		}
		return cmp.Compare($.pointerValue<SRV>(a).Weight, $.pointerValue<SRV>(b).Weight)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("net.SRV"), /* @__PURE__ */ $.pointerType("net.SRV")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)))
	let i = 0
	for (let __goscriptSliceWindow1 = $.sliceRange(addrs), j = 1; j < __goscriptSliceWindow1.length; j++) {
		if ($.pointerValue<SRV>(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as SRV | $.VarRef<SRV> | null)).Priority != $.pointerValue<SRV>(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j)] as SRV | $.VarRef<SRV> | null)).Priority) {
			byPriorityWeight_shuffleByWeight($.goSlice(addrs, i, j))
			i = j
		}
	}
	byPriorityWeight_shuffleByWeight($.goSlice(addrs, i, undefined))
}

export function byPref_sort(s: byPref): void {
	for (let __goscriptRangeTarget2 = s, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
		let j = randIntn(i + 1)
		let __goscriptAssign1_0: MX | $.VarRef<MX> | null = ((__goscriptRangeWindow2.backing as any[])[$.windowSlot(__goscriptRangeWindow2, j)] as MX | $.VarRef<MX> | null)
		let __goscriptAssign1_1: MX | $.VarRef<MX> | null = ((__goscriptRangeWindow2.backing as any[])[__goscriptRangeWindow2.offset + i] as MX | $.VarRef<MX> | null);
		;(__goscriptRangeWindow2.backing as any[])[__goscriptRangeWindow2.offset + i] = __goscriptAssign1_0;
		;(__goscriptRangeWindow2.backing as any[])[$.windowSlot(__goscriptRangeWindow2, j)] = __goscriptAssign1_1
	}
	slices.SortFunc((s as byPref), $.functionValue((a: MX | $.VarRef<MX> | null, b: MX | $.VarRef<MX> | null): number => {
		return cmp.Compare($.pointerValue<MX>(a).Pref, $.pointerValue<MX>(b).Pref)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("net.MX"), /* @__PURE__ */ $.pointerType("net.MX")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)))
}
