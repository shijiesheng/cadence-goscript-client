// Generated file based on control.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as iana from "@goscript/golang.org/x/net/internal/iana/index.js"

import * as socket from "@goscript/golang.org/x/net/internal/socket/index.js"

import * as __goscript_sys_stub from "./sys_stub.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/golang.org/x/net/internal/iana/index.js"
import "@goscript/golang.org/x/net/internal/socket/index.js"
import "./sys_stub.gs.ts"

$.registerTypePackagePath("golang.org/x/net/ipv6", ["ipv6.rawOpt", "ipv6.ControlFlags", "ipv6.ControlMessage", "ipv6.ctlOpt"])

export type ControlFlags = number

export class rawOpt {
	public get RWMutex(): sync.RWMutex {
		return this._fields.RWMutex
	}

	public set RWMutex(value: sync.RWMutex) {
		this._fields.RWMutex = value
	}

	public get cflags(): ControlFlags {
		return this._fields.cflags
	}

	public set cflags(value: ControlFlags) {
		this._fields.cflags = value
	}

	public _fields: {
		RWMutex: sync.RWMutex
		cflags: ControlFlags
	}

	constructor(init?: Partial<{RWMutex?: sync.RWMutex, cflags?: ControlFlags}>, __goscriptValue?: boolean) {
		this._fields = {
			RWMutex: init?.RWMutex ? $.markAsStructValue($.cloneStructValue(init.RWMutex)) : $.markAsStructValue(new sync.RWMutex()),
			cflags: init?.cflags ?? (0 as ControlFlags)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): rawOpt {
		return new rawOpt(this, true)
	}

	public __goscriptAssign(source: rawOpt): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.RWMutex, values.RWMutex)
		target.cflags = values.cflags
	}

	public clear(f: ControlFlags): void {
		let c: rawOpt | $.VarRef<rawOpt> | null = this;
		const c$: rawOpt = c == null ? $.pointerTarget<rawOpt>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<rawOpt>(c);
		;(c$ as rawOpt).cflags = $.uint($.uint64AndNot((c$ as rawOpt).cflags, f), 64)
	}

	public isset(f: ControlFlags): boolean {
		const c: rawOpt | $.VarRef<rawOpt> | null = this;
		return ($.uint($.uint64And($.pointerValue<rawOpt>(c).cflags, f), 64)) != 0
	}

	public ["set"](f: ControlFlags): void {
		let c: rawOpt | $.VarRef<rawOpt> | null = this;
		const c$: rawOpt = c == null ? $.pointerTarget<rawOpt>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<rawOpt>(c);
		;(c$ as rawOpt).cflags = $.uint($.uint64Or((c$ as rawOpt).cflags, f), 64)
	}

	public Lock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Lock()
	}

	public RLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLock()
	}

	public RLocker(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLocker()
	}

	public RUnlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RUnlock()
	}

	public TryLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryLock()
	}

	public TryRLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryRLock()
	}

	public Unlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Unlock()
	}

	static __typeInfo = $.registerStructType(
		"ipv6.rawOpt",
		() => new rawOpt(),
		() => [$.methodSignature("clear", [["f", /* @__PURE__ */ $.basicType("uint", "ipv6.ControlFlags")]], [], true), $.methodSignature("isset", [["f", /* @__PURE__ */ $.basicType("uint", "ipv6.ControlFlags")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("set", [["f", /* @__PURE__ */ $.basicType("uint", "ipv6.ControlFlags")]], [], true), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		rawOpt,
		() => [/* @__PURE__ */ $.structField("RWMutex", "sync.RWMutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("cflags", /* @__PURE__ */ $.basicType("uint", "ipv6.ControlFlags"), [1], 24, false, { pkgPath: "golang.org/x/net/ipv6" })]
	)
}

export class ControlMessage {
	// Receiving socket options: SetControlMessage allows to
	// receive the options from the protocol stack using ReadFrom
	// method of PacketConn.
	//
	// Specifying socket options: ControlMessage for WriteTo
	// method of PacketConn allows to send the options to the
	// protocol stack.
	public get TrafficClass(): number {
		return this._fields.TrafficClass
	}

	public set TrafficClass(value: number) {
		this._fields.TrafficClass = value
	}

	public get HopLimit(): number {
		return this._fields.HopLimit
	}

	public set HopLimit(value: number) {
		this._fields.HopLimit = value
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

	public get IfIndex(): number {
		return this._fields.IfIndex
	}

	public set IfIndex(value: number) {
		this._fields.IfIndex = value
	}

	public get NextHop(): net.IP {
		return this._fields.NextHop
	}

	public set NextHop(value: net.IP) {
		this._fields.NextHop = value
	}

	public get MTU(): number {
		return this._fields.MTU
	}

	public set MTU(value: number) {
		this._fields.MTU = value
	}

	public _fields: {
		TrafficClass: number
		HopLimit: number
		Src: net.IP
		Dst: net.IP
		IfIndex: number
		NextHop: net.IP
		MTU: number
	}

	constructor(init?: Partial<{TrafficClass?: number, HopLimit?: number, Src?: net.IP, Dst?: net.IP, IfIndex?: number, NextHop?: net.IP, MTU?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			TrafficClass: init?.TrafficClass ?? (0 as number),
			HopLimit: init?.HopLimit ?? (0 as number),
			Src: init?.Src ?? (null! as net.IP),
			Dst: init?.Dst ?? (null! as net.IP),
			IfIndex: init?.IfIndex ?? (0 as number),
			NextHop: init?.NextHop ?? (null! as net.IP),
			MTU: init?.MTU ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ControlMessage {
		return new ControlMessage(this, true)
	}

	public __goscriptAssign(source: ControlMessage): void {
		const target = this._fields
		const values = source._fields
		target.TrafficClass = values.TrafficClass
		target.HopLimit = values.HopLimit
		target.Src = values.Src
		target.Dst = values.Dst
		target.IfIndex = values.IfIndex
		target.NextHop = values.NextHop
		target.MTU = values.MTU
	}

	public async Marshal(): globalThis.Promise<$.Slice<number>> {
		const cm: ControlMessage | $.VarRef<ControlMessage> | null = this;
		const cm$: ControlMessage = cm == null ? $.pointerTarget<ControlMessage>(cm) : (cm as any).__isVarRef === true ? (cm as any).value : (cm as any).__goValue === undefined ? (cm as any) : $.pointerTarget<ControlMessage>(cm)
		if (cm == null) {
			return null
		}
		let l: number = 0
		let tclass = false
		if (($.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 0).name > 0) && ((cm$ as ControlMessage).TrafficClass > 0)) {
			tclass = true
			l = l + (socket.ControlMessageSpace($.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 0).length))
		}
		let hoplimit = false
		if (($.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 1).name > 0) && ((cm$ as ControlMessage).HopLimit > 0)) {
			hoplimit = true
			l = l + (socket.ControlMessageSpace($.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 1).length))
		}
		let pktinfo = false
		if (($.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 2).name > 0) && (((net.IP_To16((cm$ as ControlMessage).Src) != null) && (net.IP_To4((cm$ as ControlMessage).Src) == null)) || ((cm$ as ControlMessage).IfIndex > 0))) {
			pktinfo = true
			l = l + (socket.ControlMessageSpace($.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 2).length))
		}
		let nexthop = false
		if ((($.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 3).name > 0) && (net.IP_To16((cm$ as ControlMessage).NextHop) != null)) && (net.IP_To4((cm$ as ControlMessage).NextHop) == null)) {
			nexthop = true
			l = l + (socket.ControlMessageSpace($.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 3).length))
		}
		let b: $.Slice<number> = null! as $.Slice<number>
		if (l > 0) {
			b = $.makeSlice<number>(l, undefined, "byte")
			let bb: $.Slice<number> = b
			if (tclass) {
				bb = ((__goscriptAwait = $.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 0).marshal!(bb, cm), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
			}
			if (hoplimit) {
				bb = ((__goscriptAwait = $.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 1).marshal!(bb, cm), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
			}
			if (pktinfo) {
				bb = ((__goscriptAwait = $.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 2).marshal!(bb, cm), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
			}
			if (nexthop) {
				bb = ((__goscriptAwait = $.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 3).marshal!(bb, cm), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
			}
		}
		return b
	}

	public async Parse(b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const cm: ControlMessage | $.VarRef<ControlMessage> | null = this;
		let __goscriptTuple0: any = socket.ControlMessage_Parse((b as socket.ControlMessage))
		let ms: $.Slice<socket.ControlMessage> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return err
		}
		for (let __goscriptRangeTarget0 = ms, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let m = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as socket.ControlMessage) as socket.ControlMessage)
			let [lvl, typ, l, __goscriptShadow0] = socket.ControlMessage_ParseHeader(m)
			if (__goscriptShadow0 != null) {
				return __goscriptShadow0
			}
			if (lvl != 41) {
				continue
			}
			switch ((true as boolean)) {
				case (typ == $.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 0).name) && (l >= $.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 0).length):
				{
					void (__goscriptAwait = $.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 0).parse!(cm, socket.ControlMessage_Data(m, l)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					break
				}
				case (typ == $.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 1).name) && (l >= $.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 1).length):
				{
					void (__goscriptAwait = $.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 1).parse!(cm, socket.ControlMessage_Data(m, l)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					break
				}
				case (typ == $.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 2).name) && (l >= $.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 2).length):
				{
					void (__goscriptAwait = $.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 2).parse!(cm, socket.ControlMessage_Data(m, l)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					break
				}
				case (typ == $.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 4).name) && (l >= $.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 4).length):
				{
					void (__goscriptAwait = $.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 4).parse!(cm, socket.ControlMessage_Data(m, l)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					break
				}
			}
		}
		return null
	}

	public async String(): globalThis.Promise<string> {
		const cm: ControlMessage | $.VarRef<ControlMessage> | null = this;
		const cm$: ControlMessage = cm == null ? $.pointerTarget<ControlMessage>(cm) : (cm as any).__isVarRef === true ? (cm as any).value : (cm as any).__goValue === undefined ? (cm as any) : $.pointerTarget<ControlMessage>(cm)
		if (cm == null) {
			return "<nil>"
		}
		return fmt.Sprintf("tclass=%#x hoplim=%d src=%v dst=%v ifindex=%d nexthop=%v mtu=%d", $.basicInterfaceValue((cm$ as ControlMessage).TrafficClass, "int"), $.basicInterfaceValue((cm$ as ControlMessage).HopLimit, "int"), $.namedValueInterfaceValue<any>((cm$ as ControlMessage).Src, "net.IP", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((cm$ as ControlMessage).Dst, "net.IP", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue((cm$ as ControlMessage).IfIndex, "int"), $.namedValueInterfaceValue<any>((cm$ as ControlMessage).NextHop, "net.IP", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue((cm$ as ControlMessage).MTU, "int"))
	}

	static __typeInfo = $.registerStructType(
		"ipv6.ControlMessage",
		() => new ControlMessage(),
		() => [$.methodSignature("Marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Parse", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		ControlMessage,
		() => [/* @__PURE__ */ $.structField("TrafficClass", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("HopLimit", /* @__PURE__ */ $.basicType("int"), [1], 8, true), /* @__PURE__ */ $.structField("Src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), [2], 16, true), /* @__PURE__ */ $.structField("Dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), [3], 40, true), /* @__PURE__ */ $.structField("IfIndex", /* @__PURE__ */ $.basicType("int"), [4], 64, true), /* @__PURE__ */ $.structField("NextHop", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), [5], 72, true), /* @__PURE__ */ $.structField("MTU", /* @__PURE__ */ $.basicType("int"), [6], 96, true)]
	)
}

export class ctlOpt {
	public get name(): number {
		return this._fields.name
	}

	public set name(value: number) {
		this._fields.name = value
	}

	public get length(): number {
		return this._fields.length
	}

	public set length(value: number) {
		this._fields.length = value
	}

	public get marshal(): ((_p0: $.Slice<number>, _p1: ControlMessage | $.VarRef<ControlMessage> | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null {
		return this._fields.marshal
	}

	public set marshal(value: ((_p0: $.Slice<number>, _p1: ControlMessage | $.VarRef<ControlMessage> | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null) {
		this._fields.marshal = value
	}

	public get parse(): ((_p0: ControlMessage | $.VarRef<ControlMessage> | null, _p1: $.Slice<number>) => void) | null {
		return this._fields.parse
	}

	public set parse(value: ((_p0: ControlMessage | $.VarRef<ControlMessage> | null, _p1: $.Slice<number>) => void) | null) {
		this._fields.parse = value
	}

	public _fields: {
		name: number
		length: number
		marshal: ((_p0: $.Slice<number>, _p1: ControlMessage | $.VarRef<ControlMessage> | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null
		parse: ((_p0: ControlMessage | $.VarRef<ControlMessage> | null, _p1: $.Slice<number>) => void) | null
	}

	constructor(init?: Partial<{name?: number, length?: number, marshal?: ((_p0: $.Slice<number>, _p1: ControlMessage | $.VarRef<ControlMessage> | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null, parse?: ((_p0: ControlMessage | $.VarRef<ControlMessage> | null, _p1: $.Slice<number>) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? (0 as number),
			length: init?.length ?? (0 as number),
			marshal: init?.marshal ?? (null! as ((_p0: $.Slice<number>, _p1: ControlMessage | $.VarRef<ControlMessage> | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null),
			parse: init?.parse ?? (null! as ((_p0: ControlMessage | $.VarRef<ControlMessage> | null, _p1: $.Slice<number>) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ctlOpt {
		return new ctlOpt(this, true)
	}

	public __goscriptAssign(source: ctlOpt): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.length = values.length
		target.marshal = values.marshal
		target.parse = values.parse
	}

	static __typeInfo = $.registerStructType(
		"ipv6.ctlOpt",
		() => new ctlOpt(),
		() => [],
		ctlOpt,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "golang.org/x/net/ipv6" }), /* @__PURE__ */ $.structField("length", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "golang.org/x/net/ipv6" }), /* @__PURE__ */ $.structField("marshal", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.pointerType("ipv6.ControlMessage")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo), [2], 16, false, { pkgPath: "golang.org/x/net/ipv6" }), /* @__PURE__ */ $.structField("parse", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("ipv6.ControlMessage"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [] } as $.FunctionTypeInfo), [3], 24, false, { pkgPath: "golang.org/x/net/ipv6" })]
	)
}

export const FlagTrafficClass: ControlFlags = 1

export const FlagHopLimit: ControlFlags = 2

export const FlagSrc: ControlFlags = 4

export const FlagDst: ControlFlags = 8

export const FlagInterface: ControlFlags = 16

export const FlagPathMTU: ControlFlags = 32

export const flagPacketInfo: ControlFlags = 24

export const ctlTrafficClass: number = 0

export const ctlHopLimit: number = 1

export const ctlPacketInfo: number = 2

export const ctlNextHop: number = 3

export const ctlPathMTU: number = 4

export const ctlMax: number = 5

export function NewControlMessage(cf: ControlFlags): $.Slice<number> {
	let opt = $.varRef(new rawOpt({cflags: cf}, true))
	let l: number = 0
	if (opt.value.isset(1) && ($.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 0).name > 0)) {
		l = l + (socket.ControlMessageSpace($.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 0).length))
	}
	if (opt.value.isset(2) && ($.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 1).name > 0)) {
		l = l + (socket.ControlMessageSpace($.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 1).length))
	}
	if (opt.value.isset(24) && ($.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 2).name > 0)) {
		l = l + (socket.ControlMessageSpace($.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 2).length))
	}
	if (opt.value.isset(32) && ($.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 4).name > 0)) {
		l = l + (socket.ControlMessageSpace($.arrayIndex(__goscript_sys_stub.__goscript_get_ctlOpts(), 4).length))
	}
	let b: $.Slice<number> = null! as $.Slice<number>
	if (l > 0) {
		b = $.makeSlice<number>(l, undefined, "byte")
	}
	return b
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
