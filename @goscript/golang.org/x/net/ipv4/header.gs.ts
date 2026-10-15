// Generated file based on header.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as net from "@goscript/net/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as socket from "@goscript/golang.org/x/net/internal/socket/index.js"

import * as __goscript_helper from "./helper.gs.ts"
import "@goscript/encoding/binary/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/index.js"
import "@goscript/runtime/index.js"
import "@goscript/golang.org/x/net/internal/socket/index.js"
import "./helper.gs.ts"

$.registerTypePackagePath("golang.org/x/net/ipv4", ["ipv4.HeaderFlags", "ipv4.Header"])

export type HeaderFlags = number

export class Header {
	public get Version(): number {
		return this._fields.Version
	}

	public set Version(value: number) {
		this._fields.Version = value
	}

	public get Len(): number {
		return this._fields.Len
	}

	public set Len(value: number) {
		this._fields.Len = value
	}

	public get TOS(): number {
		return this._fields.TOS
	}

	public set TOS(value: number) {
		this._fields.TOS = value
	}

	public get TotalLen(): number {
		return this._fields.TotalLen
	}

	public set TotalLen(value: number) {
		this._fields.TotalLen = value
	}

	public get ID(): number {
		return this._fields.ID
	}

	public set ID(value: number) {
		this._fields.ID = value
	}

	public get Flags(): HeaderFlags {
		return this._fields.Flags
	}

	public set Flags(value: HeaderFlags) {
		this._fields.Flags = value
	}

	public get FragOff(): number {
		return this._fields.FragOff
	}

	public set FragOff(value: number) {
		this._fields.FragOff = value
	}

	public get TTL(): number {
		return this._fields.TTL
	}

	public set TTL(value: number) {
		this._fields.TTL = value
	}

	public get Protocol(): number {
		return this._fields.Protocol
	}

	public set Protocol(value: number) {
		this._fields.Protocol = value
	}

	public get Checksum(): number {
		return this._fields.Checksum
	}

	public set Checksum(value: number) {
		this._fields.Checksum = value
	}

	public get Src(): net.IP {
		return this._fields.Src
	}

	public set Src(value: net.IP) {
		this._fields.Src = value
	}

	public get Dst(): net.IP {
		return this._fields.Dst
	}

	public set Dst(value: net.IP) {
		this._fields.Dst = value
	}

	public get Options(): $.Slice<number> {
		return this._fields.Options
	}

	public set Options(value: $.Slice<number>) {
		this._fields.Options = value
	}

	public _fields: {
		Version: number
		Len: number
		TOS: number
		TotalLen: number
		ID: number
		Flags: HeaderFlags
		FragOff: number
		TTL: number
		Protocol: number
		Checksum: number
		Src: net.IP
		Dst: net.IP
		Options: $.Slice<number>
	}

	constructor(init?: Partial<{Version?: number, Len?: number, TOS?: number, TotalLen?: number, ID?: number, Flags?: HeaderFlags, FragOff?: number, TTL?: number, Protocol?: number, Checksum?: number, Src?: net.IP, Dst?: net.IP, Options?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Version: init?.Version ?? (0 as number),
			Len: init?.Len ?? (0 as number),
			TOS: init?.TOS ?? (0 as number),
			TotalLen: init?.TotalLen ?? (0 as number),
			ID: init?.ID ?? (0 as number),
			Flags: init?.Flags ?? (0 as HeaderFlags),
			FragOff: init?.FragOff ?? (0 as number),
			TTL: init?.TTL ?? (0 as number),
			Protocol: init?.Protocol ?? (0 as number),
			Checksum: init?.Checksum ?? (0 as number),
			Src: init?.Src ?? (null! as net.IP),
			Dst: init?.Dst ?? (null! as net.IP),
			Options: init?.Options ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Header {
		return new Header(this, true)
	}

	public __goscriptAssign(source: Header): void {
		const target = this._fields
		const values = source._fields
		target.Version = values.Version
		target.Len = values.Len
		target.TOS = values.TOS
		target.TotalLen = values.TotalLen
		target.ID = values.ID
		target.Flags = values.Flags
		target.FragOff = values.FragOff
		target.TTL = values.TTL
		target.Protocol = values.Protocol
		target.Checksum = values.Checksum
		target.Src = values.Src
		target.Dst = values.Dst
		target.Options = values.Options
	}

	public async Marshal(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const h: Header | $.VarRef<Header> | null = this;
		const h$: Header = h == null ? $.pointerTarget<Header>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<Header>(h)
		if (h == null) {
			return [null, __goscript_helper.errNilHeader]
		}
		if ((h$ as Header).Len < 20) {
			return [null, __goscript_helper.errHeaderTooShort]
		}
		let hdrlen = 20 + $.sliceLen((h$ as Header).Options)
		let b: $.Slice<number> = $.makeSlice<number>(hdrlen, undefined, "byte")
		$.sliceElems(b!)[$.sliceSlot(b!, 0)] = $.uint((64) | ((hdrlen >> 2) & 0x0f), 8)
		$.sliceElems(b!)[$.sliceSlot(b!, 1)] = $.uint((h$ as Header).TOS, 8)
		let flagsAndFragOff = ((h$ as Header).FragOff & 0x1fff) | $.int((h$ as Header).Flags << 13)
		switch ((runtime.GOOS as string)) {
			case "darwin":
			case "ios":
			case "dragonfly":
			case "netbsd":
			{
				void (__goscriptAwait = $.pointerValue<Exclude<binary.ByteOrder, null>>(socket.NativeEndian).PutUint16($.goSlice(b, 2, 4), $.uint((h$ as Header).TotalLen, 16)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = $.pointerValue<Exclude<binary.ByteOrder, null>>(socket.NativeEndian).PutUint16($.goSlice(b, 6, 8), $.uint(flagsAndFragOff, 16)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case "freebsd":
			{
				if (__goscript_helper.freebsdVersion < 1100000) {
					void (__goscriptAwait = $.pointerValue<Exclude<binary.ByteOrder, null>>(socket.NativeEndian).PutUint16($.goSlice(b, 2, 4), $.uint((h$ as Header).TotalLen, 16)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					void (__goscriptAwait = $.pointerValue<Exclude<binary.ByteOrder, null>>(socket.NativeEndian).PutUint16($.goSlice(b, 6, 8), $.uint(flagsAndFragOff, 16)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				} else {
					$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint16($.goSlice(b, 2, 4), $.uint((h$ as Header).TotalLen, 16))
					$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint16($.goSlice(b, 6, 8), $.uint(flagsAndFragOff, 16))
				}
				break
			}
			default:
			{
				$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint16($.goSlice(b, 2, 4), $.uint((h$ as Header).TotalLen, 16))
				$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint16($.goSlice(b, 6, 8), $.uint(flagsAndFragOff, 16))
				break
			}
		}
		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint16($.goSlice(b, 4, 6), $.uint((h$ as Header).ID, 16))
		$.sliceElems(b!)[$.sliceSlot(b!, 8)] = $.uint((h$ as Header).TTL, 8)
		$.sliceElems(b!)[$.sliceSlot(b!, 9)] = $.uint((h$ as Header).Protocol, 8)
		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint16($.goSlice(b, 10, 12), $.uint((h$ as Header).Checksum, 16))
		{
			let ip: net.IP = (net.IP_To4((h$ as Header).Src) as net.IP)
			if (ip != null) {
				$.copyByteRanges(b, 12, 16, ip, undefined, net.IPv4len)
			}
		}
		{
			let ip: net.IP = (net.IP_To4((h$ as Header).Dst) as net.IP)
			if (ip != null) {
				$.copyByteRanges(b, 16, 20, ip, undefined, net.IPv4len)
			} else {
				return [null, __goscript_helper.errMissingAddress]
			}
		}
		if ($.sliceLen((h$ as Header).Options) > 0) {
			$.copy($.goSlice(b, 20, undefined), (h$ as Header).Options)
		}
		return [b, null]
	}

	public async Parse(b: $.Slice<number>): globalThis.Promise<$.GoError> {
		let h: Header | $.VarRef<Header> | null = this;
		const h$: Header = h == null ? $.pointerTarget<Header>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<Header>(h)
		if ((h == null) || (b == null)) {
			return __goscript_helper.errNilHeader
		}
		if ($.sliceLen(b) < 20) {
			return __goscript_helper.errHeaderTooShort
		}
		let hdrlen = $.int($.arrayIndex(b!, 0) & 0x0f) << 2
		if ($.sliceLen(b) < hdrlen) {
			return __goscript_helper.errExtHeaderTooShort
		}
		;(h$ as Header).Version = $.int($.uintShr($.arrayIndex(b!, 0), 4, 8));
		;(h$ as Header).Len = hdrlen;
		;(h$ as Header).TOS = $.int($.arrayIndex(b!, 1));
		;(h$ as Header).ID = $.int($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint16($.goSlice(b, 4, 6)));
		;(h$ as Header).TTL = $.int($.arrayIndex(b!, 8));
		;(h$ as Header).Protocol = $.int($.arrayIndex(b!, 9));
		;(h$ as Header).Checksum = $.int($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint16($.goSlice(b, 10, 12)));
		;(h$ as Header).Src = (net.IPv4($.arrayIndex(b!, 12), $.arrayIndex(b!, 13), $.arrayIndex(b!, 14), $.arrayIndex(b!, 15)) as net.IP);
		;(h$ as Header).Dst = (net.IPv4($.arrayIndex(b!, 16), $.arrayIndex(b!, 17), $.arrayIndex(b!, 18), $.arrayIndex(b!, 19)) as net.IP)
		switch ((runtime.GOOS as string)) {
			case "darwin":
			case "ios":
			case "dragonfly":
			case "netbsd":
			{
				;(h$ as Header).TotalLen = $.int((__goscriptAwait = $.pointerValue<Exclude<binary.ByteOrder, null>>(socket.NativeEndian).Uint16($.goSlice(b, 2, 4)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) + hdrlen;
				;(h$ as Header).FragOff = $.int((__goscriptAwait = $.pointerValue<Exclude<binary.ByteOrder, null>>(socket.NativeEndian).Uint16($.goSlice(b, 6, 8)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				break
			}
			case "freebsd":
			{
				if (__goscript_helper.freebsdVersion < 1100000) {
					;(h$ as Header).TotalLen = $.int((__goscriptAwait = $.pointerValue<Exclude<binary.ByteOrder, null>>(socket.NativeEndian).Uint16($.goSlice(b, 2, 4)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					if (__goscript_helper.freebsdVersion < 1000000) {
						;(h$ as Header).TotalLen = (h$ as Header).TotalLen + (hdrlen)
					}
					;(h$ as Header).FragOff = $.int((__goscriptAwait = $.pointerValue<Exclude<binary.ByteOrder, null>>(socket.NativeEndian).Uint16($.goSlice(b, 6, 8)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				} else {
					;(h$ as Header).TotalLen = $.int($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint16($.goSlice(b, 2, 4)));
					;(h$ as Header).FragOff = $.int($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint16($.goSlice(b, 6, 8)))
				}
				break
			}
			default:
			{
				;(h$ as Header).TotalLen = $.int($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint16($.goSlice(b, 2, 4)));
				;(h$ as Header).FragOff = $.int($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint16($.goSlice(b, 6, 8)))
				break
			}
		}
		;(h$ as Header).Flags = $.int((h$ as Header).FragOff & 0xe000) >> 13;
		;(h$ as Header).FragOff = (h$ as Header).FragOff & 0x1fff
		let optlen = hdrlen - 20
		if ((optlen > 0) && ($.sliceLen(b) >= hdrlen)) {
			if ($.cap((h$ as Header).Options) < optlen) {
				;(h$ as Header).Options = $.makeSlice<number>(optlen, undefined, "byte")
			} else {
				;(h$ as Header).Options = $.goSlice((h$ as Header).Options, undefined, optlen)
			}
			$.copy((h$ as Header).Options, $.goSlice(b, 20, hdrlen))
		}
		return null
	}

	public async String(): globalThis.Promise<string> {
		const h: Header | $.VarRef<Header> | null = this;
		const h$: Header = h == null ? $.pointerTarget<Header>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<Header>(h)
		if (h == null) {
			return "<nil>"
		}
		return fmt.Sprintf("ver=%d hdrlen=%d tos=%#x totallen=%d id=%#x flags=%#x fragoff=%#x ttl=%d proto=%d cksum=%#x src=%v dst=%v", $.basicInterfaceValue((h$ as Header).Version, "int"), $.basicInterfaceValue((h$ as Header).Len, "int"), $.basicInterfaceValue((h$ as Header).TOS, "int"), $.basicInterfaceValue((h$ as Header).TotalLen, "int"), $.basicInterfaceValue((h$ as Header).ID, "int"), $.namedValueInterfaceValue<any>((h$ as Header).Flags, "ipv4.HeaderFlags", {}, /* @__PURE__ */ $.basicType("int", "ipv4.HeaderFlags")), $.basicInterfaceValue((h$ as Header).FragOff, "int"), $.basicInterfaceValue((h$ as Header).TTL, "int"), $.basicInterfaceValue((h$ as Header).Protocol, "int"), $.basicInterfaceValue((h$ as Header).Checksum, "int"), $.namedValueInterfaceValue<any>((h$ as Header).Src, "net.IP", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((h$ as Header).Dst, "net.IP", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}

	static __typeInfo = $.registerStructType(
		"ipv4.Header",
		() => new Header(),
		() => [$.methodSignature("Marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Parse", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Header,
		() => [/* @__PURE__ */ $.structField("Version", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("Len", /* @__PURE__ */ $.basicType("int"), [1], 8, true), /* @__PURE__ */ $.structField("TOS", /* @__PURE__ */ $.basicType("int"), [2], 16, true), /* @__PURE__ */ $.structField("TotalLen", /* @__PURE__ */ $.basicType("int"), [3], 24, true), /* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("int"), [4], 32, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("int", "ipv4.HeaderFlags"), [5], 40, true), /* @__PURE__ */ $.structField("FragOff", /* @__PURE__ */ $.basicType("int"), [6], 48, true), /* @__PURE__ */ $.structField("TTL", /* @__PURE__ */ $.basicType("int"), [7], 56, true), /* @__PURE__ */ $.structField("Protocol", /* @__PURE__ */ $.basicType("int"), [8], 64, true), /* @__PURE__ */ $.structField("Checksum", /* @__PURE__ */ $.basicType("int"), [9], 72, true), /* @__PURE__ */ $.structField("Src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), [10], 80, true), /* @__PURE__ */ $.structField("Dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), [11], 104, true), /* @__PURE__ */ $.structField("Options", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [12], 128, true)]
	)
}

export const Version: number = 4

export const HeaderLen: number = 20

export const MoreFragments: HeaderFlags = 1

export const DontFragment: HeaderFlags = 2

export async function ParseHeader(b: $.Slice<number>): globalThis.Promise<[Header | $.VarRef<Header> | null, $.GoError]> {
	let h: Header | $.VarRef<Header> | null = new Header()
	{
		let err = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as Header).Parse(b) : Header.prototype.Parse.call(h, b))
		if (err != null) {
			return [null, err]
		}
	}
	return [h, null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({AppendText: (receiver: any, ...args: any[]) => (net.IP_AppendText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), DefaultMask: (receiver: any, ...args: any[]) => (net.IP_DefaultMask as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => (net.IP_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsGlobalUnicast: (receiver: any, ...args: any[]) => (net.IP_IsGlobalUnicast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsInterfaceLocalMulticast: (receiver: any, ...args: any[]) => (net.IP_IsInterfaceLocalMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLinkLocalMulticast: (receiver: any, ...args: any[]) => (net.IP_IsLinkLocalMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLinkLocalUnicast: (receiver: any, ...args: any[]) => (net.IP_IsLinkLocalUnicast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsLoopback: (receiver: any, ...args: any[]) => (net.IP_IsLoopback as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsMulticast: (receiver: any, ...args: any[]) => (net.IP_IsMulticast as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPrivate: (receiver: any, ...args: any[]) => (net.IP_IsPrivate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsUnspecified: (receiver: any, ...args: any[]) => (net.IP_IsUnspecified as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (net.IP_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Mask: (receiver: any, ...args: any[]) => (net.IP_Mask as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (net.IP_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), To16: (receiver: any, ...args: any[]) => (net.IP_To16 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), To4: (receiver: any, ...args: any[]) => (net.IP_To4 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), appendTo: (receiver: any, ...args: any[]) => (net.IP_appendTo as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), matchAddrFamily: (receiver: any, ...args: any[]) => (net.IP_matchAddrFamily as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("DefaultMask", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IPMask")]), $.methodSignature("Equal", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsGlobalUnicast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsInterfaceLocalMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLinkLocalMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLinkLocalUnicast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsLoopback", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsMulticast", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPrivate", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsUnspecified", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Mask", [["mask", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IPMask")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("To16", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("To4", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]), $.methodSignature("appendTo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("matchAddrFamily", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptAwait: any
