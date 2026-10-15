// Generated file based on interface.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as strconv from "@goscript/internal/strconv/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import "@goscript/unsafe/index.js"

import * as __goscript_interface_stub from "./interface_stub.gs.ts"

import * as __goscript_mac from "./mac.gs.ts"

import * as __goscript_net from "./net.gs.ts"

import * as __goscript_parse from "./parse.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/internal/strconv/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./interface_stub.gs.ts"
import "./mac.gs.ts"
import "./net.gs.ts"
import "./parse.gs.ts"

export type Flags = number

$.registerNamedValueType(
	"net.Flags",
	{String: (receiver: any, ...args: any[]) => (Flags_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*net.Flags",
	{String: (receiver: any, ...args: any[]) => (Flags_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class Interface {
	public get Index(): number {
		return this._fields.Index
	}

	public set Index(value: number) {
		this._fields.Index = value
	}

	public get MTU(): number {
		return this._fields.MTU
	}

	public set MTU(value: number) {
		this._fields.MTU = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get HardwareAddr(): __goscript_mac.HardwareAddr {
		return this._fields.HardwareAddr
	}

	public set HardwareAddr(value: __goscript_mac.HardwareAddr) {
		this._fields.HardwareAddr = value
	}

	public get Flags(): Flags {
		return this._fields.Flags
	}

	public set Flags(value: Flags) {
		this._fields.Flags = value
	}

	public _fields: {
		Index: number
		MTU: number
		Name: string
		HardwareAddr: __goscript_mac.HardwareAddr
		Flags: Flags
	}

	constructor(init?: Partial<{Index?: number, MTU?: number, Name?: string, HardwareAddr?: __goscript_mac.HardwareAddr, Flags?: Flags}>, __goscriptValue?: boolean) {
		this._fields = {
			Index: init?.Index ?? (0 as number),
			MTU: init?.MTU ?? (0 as number),
			Name: init?.Name ?? ("" as string),
			HardwareAddr: init?.HardwareAddr ?? (null! as __goscript_mac.HardwareAddr),
			Flags: init?.Flags ?? (0 as Flags)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Interface {
		return new Interface(this, true)
	}

	public __goscriptAssign(source: Interface): void {
		const target = this._fields
		const values = source._fields
		target.Index = values.Index
		target.MTU = values.MTU
		target.Name = values.Name
		target.HardwareAddr = values.HardwareAddr
		target.Flags = values.Flags
	}

	public Addrs(): [$.Slice<__goscript_net.Addr | null>, $.GoError] {
		const ifi: Interface | $.VarRef<Interface> | null = this;
		if (ifi == null) {
			return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "route", Net: "ip+net", Source: null, Addr: null, Err: errInvalidInterface}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
		}
		let __goscriptTuple0: any = __goscript_interface_stub.interfaceAddrTable(ifi)
		let ifat: $.Slice<__goscript_net.Addr | null> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "route", Net: "ip+net", Source: null, Addr: null, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [ifat, err]
	}

	public MulticastAddrs(): [$.Slice<__goscript_net.Addr | null>, $.GoError] {
		const ifi: Interface | $.VarRef<Interface> | null = this;
		if (ifi == null) {
			return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "route", Net: "ip+net", Source: null, Addr: null, Err: errInvalidInterface}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
		}
		let __goscriptTuple1: any = __goscript_interface_stub.interfaceMulticastAddrTable(ifi)
		let ifat: $.Slice<__goscript_net.Addr | null> = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "route", Net: "ip+net", Source: null, Addr: null, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [ifat, err]
	}

	static __typeInfo = $.registerStructType(
		"net.Interface",
		() => new Interface(),
		() => [$.methodSignature("Addrs", [], [/* @__PURE__ */ $.sliceType("net.Addr"), "error"], true), $.methodSignature("MulticastAddrs", [], [/* @__PURE__ */ $.sliceType("net.Addr"), "error"], true)],
		Interface,
		() => [/* @__PURE__ */ $.structField("Index", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("MTU", /* @__PURE__ */ $.basicType("int"), [1], 8, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [2], 16, true), /* @__PURE__ */ $.structField("HardwareAddr", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.HardwareAddr"), [3], 32, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint", "net.Flags"), [4], 56, true)]
	)
}

export class ipv6ZoneCache {
	public get RWMutex(): sync.RWMutex {
		return this._fields.RWMutex
	}

	public set RWMutex(value: sync.RWMutex) {
		this._fields.RWMutex = value
	}

	public get lastFetched(): time.Time {
		return this._fields.lastFetched
	}

	public set lastFetched(value: time.Time) {
		this._fields.lastFetched = value
	}

	public get toIndex(): globalThis.Map<string, number> | null {
		return this._fields.toIndex
	}

	public set toIndex(value: globalThis.Map<string, number> | null) {
		this._fields.toIndex = value
	}

	public get toName(): globalThis.Map<number, string> | null {
		return this._fields.toName
	}

	public set toName(value: globalThis.Map<number, string> | null) {
		this._fields.toName = value
	}

	public _fields: {
		RWMutex: sync.RWMutex
		lastFetched: time.Time
		toIndex: globalThis.Map<string, number> | null
		toName: globalThis.Map<number, string> | null
	}

	constructor(init?: Partial<{RWMutex?: sync.RWMutex, lastFetched?: time.Time, toIndex?: globalThis.Map<string, number> | null, toName?: globalThis.Map<number, string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			RWMutex: init?.RWMutex ? $.markAsStructValue($.cloneStructValue(init.RWMutex)) : $.markAsStructValue(new sync.RWMutex()),
			lastFetched: init?.lastFetched ? $.markAsStructValue($.cloneStructValue(init.lastFetched)) : $.markAsStructValue(new time.Time()),
			toIndex: init?.toIndex ?? (null! as globalThis.Map<string, number> | null),
			toName: init?.toName ?? (null! as globalThis.Map<number, string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ipv6ZoneCache {
		return new ipv6ZoneCache(this, true)
	}

	public __goscriptAssign(source: ipv6ZoneCache): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.RWMutex, values.RWMutex)
		$.assignStruct(target.lastFetched, values.lastFetched)
		target.toIndex = values.toIndex
		target.toName = values.toName
	}

	public async index(name: string): globalThis.Promise<number> {
		const zc: ipv6ZoneCache | $.VarRef<ipv6ZoneCache> | null = this;
		if ($.stringEqual(name, "")) {
			return 0
		}
		let updated = await zoneCache.value.update(null, false)
		await zoneCache.value.RWMutex.RLock()
		let [index, ok] = $.mapGet<string, number, number>(zoneCache.value.toIndex, name, 0)
		zoneCache.value.RWMutex.RUnlock()
		if (!ok && !updated) {
			await zoneCache.value.update(null, true)
			await zoneCache.value.RWMutex.RLock()
			let __goscriptTuple7: any = $.mapGet<string, number, number>(zoneCache.value.toIndex, name, 0)
			index = __goscriptTuple7[0]
			ok = __goscriptTuple7[1]
			zoneCache.value.RWMutex.RUnlock()
		}
		if (!ok) {
			let __goscriptTuple8: any = __goscript_parse.dtoi(name)
			index = __goscriptTuple8[0]
		}
		return index
	}

	public async name(index: number): globalThis.Promise<string> {
		const zc: ipv6ZoneCache | $.VarRef<ipv6ZoneCache> | null = this;
		if (index == 0) {
			return ""
		}
		let updated = await zoneCache.value.update(null, false)
		await zoneCache.value.RWMutex.RLock()
		let [name, ok] = $.mapGet<number, string, string>(zoneCache.value.toName, index, "")
		zoneCache.value.RWMutex.RUnlock()
		if (!ok && !updated) {
			await zoneCache.value.update(null, true)
			await zoneCache.value.RWMutex.RLock()
			let __goscriptTuple9: any = $.mapGet<number, string, string>(zoneCache.value.toName, index, "")
			name = __goscriptTuple9[0]
			ok = __goscriptTuple9[1]
			zoneCache.value.RWMutex.RUnlock()
		}
		if (!ok) {
			name = strconv.Itoa(index)
		}
		return name
	}

	public async update(ift: $.Slice<Interface>, force: boolean): globalThis.Promise<boolean> {
		let zc: ipv6ZoneCache | $.VarRef<ipv6ZoneCache> | null = this;
		let updated: boolean = false
		using __defer = new $.DisposableStack()
		const zc$: ipv6ZoneCache = zc == null ? $.pointerTarget<ipv6ZoneCache>(zc) : (zc as any).__isVarRef === true ? (zc as any).value : (zc as any).__goValue === undefined ? (zc as any) : $.pointerTarget<ipv6ZoneCache>(zc)
		await (zc$ as ipv6ZoneCache).RWMutex.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((zc$ as ipv6ZoneCache).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		let now = $.markAsStructValue($.cloneStructValue(time.Now()))
		if (!force && $.markAsStructValue($.cloneStructValue((zc$ as ipv6ZoneCache).lastFetched)).After($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(now)).Add(-60000000000n))))) {
			const __goscriptReturn0: boolean = false
			updated = __goscriptReturn0
			__defer.dispose()
			return updated
		}
		$.assignStruct((zc$ as ipv6ZoneCache).lastFetched, now)
		if ($.sliceLen(ift) == 0) {
			let err: $.GoError = null! as $.GoError
			{
				let __goscriptTuple10: any = __goscript_interface_stub.interfaceTable(0)
				ift = __goscriptTuple10[0]
				err = __goscriptTuple10[1]
				if (err != null) {
					const __goscriptReturn1: boolean = false
					updated = __goscriptReturn1
					__defer.dispose()
					return updated
				}
			}
		}
		;(zc$ as ipv6ZoneCache).toIndex = $.makeMap<string, number>();
		;(zc$ as ipv6ZoneCache).toName = $.makeMap<number, string>()
		for (let __goscriptRangeTarget3 = ift, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let ifi = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as Interface)).clone()
			if (!$.stringEqual(ifi.Name, "")) {
				$.mapSet((zc$ as ipv6ZoneCache).toIndex, ifi.Name, ifi.Index)
				{
					let [, ok] = $.mapGet<number, string, string>((zc$ as ipv6ZoneCache).toName, ifi.Index, "")
					if (!ok) {
						$.mapSet((zc$ as ipv6ZoneCache).toName, ifi.Index, ifi.Name)
					}
				}
			}
		}
		const __goscriptReturn2: boolean = true
		updated = __goscriptReturn2
		__defer.dispose()
		return updated
		throw new globalThis.Error("goscript: unreachable return")
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
		"net.ipv6ZoneCache",
		() => new ipv6ZoneCache(),
		() => [$.methodSignature("index", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("name", [["index", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("update", [["ift", /* @__PURE__ */ $.sliceType("net.Interface")], ["force", /* @__PURE__ */ $.basicType("bool")]], [["updated", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		ipv6ZoneCache,
		() => [/* @__PURE__ */ $.structField("RWMutex", "sync.RWMutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("lastFetched", "time.Time", [1], 24, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("toIndex", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int")), [2], 48, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("toName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("string")), [3], 56, false, { pkgPath: "net" })]
	)
}

export const FlagUp: Flags = 1

export const FlagBroadcast: Flags = 2

export const FlagLoopback: Flags = 4

export const FlagPointToPoint: Flags = 8

export const FlagMulticast: Flags = 16

export const FlagRunning: Flags = 32

export let errInvalidInterface: $.GoError = errors.New("invalid network interface")

export function __goscript_set_errInvalidInterface(__goscriptValue: $.GoError): void {
	errInvalidInterface = __goscriptValue
}

export let errInvalidInterfaceIndex: $.GoError = errors.New("invalid network interface index")

export function __goscript_set_errInvalidInterfaceIndex(__goscriptValue: $.GoError): void {
	errInvalidInterfaceIndex = __goscriptValue
}

export let errInvalidInterfaceName: $.GoError = errors.New("invalid network interface name")

export function __goscript_set_errInvalidInterfaceName(__goscriptValue: $.GoError): void {
	errInvalidInterfaceName = __goscriptValue
}

export let errNoSuchInterface: $.GoError = errors.New("no such network interface")

export function __goscript_set_errNoSuchInterface(__goscriptValue: $.GoError): void {
	errNoSuchInterface = __goscriptValue
}

export let errNoSuchMulticastInterface: $.GoError = errors.New("no such multicast network interface")

export function __goscript_set_errNoSuchMulticastInterface(__goscriptValue: $.GoError): void {
	errNoSuchMulticastInterface = __goscriptValue
}

export let flagNames: $.Slice<string> = $.arrayToSlice<string>(["up", "broadcast", "loopback", "pointtopoint", "multicast", "running"])

export function __goscript_set_flagNames(__goscriptValue: $.Slice<string>): void {
	flagNames = __goscriptValue
}

export function Flags_String(f: Flags): string {
	let s = ""
	for (let __goscriptRangeTarget0 = flagNames, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let name = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as string)
		if (($.uint($.uint64And(f, ($.uint($.uint64Shl(1n, $.uint(i, 64)), 64))), 64)) != 0) {
			if (!$.stringEqual(s, "")) {
				s = $.concatString(s, "|")
			}
			s = $.concatString(s, name)
		}
	}
	if ($.stringEqual(s, "")) {
		s = "0"
	}
	return s
}

export async function Interfaces(): globalThis.Promise<[$.Slice<Interface>, $.GoError]> {
	let __goscriptTuple2: any = __goscript_interface_stub.interfaceTable(0)
	let ift: $.Slice<Interface> = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if (err != null) {
		return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "route", Net: "ip+net", Source: null, Addr: null, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	if ($.sliceLen(ift) != 0) {
		await zoneCache.value.update(ift, false)
	}
	return [ift, null]
}

export function InterfaceAddrs(): [$.Slice<__goscript_net.Addr | null>, $.GoError] {
	let __goscriptTuple3: any = __goscript_interface_stub.interfaceAddrTable(null)
	let ifat: $.Slice<__goscript_net.Addr | null> = __goscriptTuple3[0]
	let err = __goscriptTuple3[1]
	if (err != null) {
		err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "route", Net: "ip+net", Source: null, Addr: null, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
	}
	return [ifat, err]
}

export function InterfaceByIndex(index: number): [Interface | $.VarRef<Interface> | null, $.GoError] {
	if (index <= 0) {
		return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "route", Net: "ip+net", Source: null, Addr: null, Err: errInvalidInterfaceIndex}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	let __goscriptTuple4: any = __goscript_interface_stub.interfaceTable(index)
	let ift: $.Slice<Interface> = __goscriptTuple4[0]
	let err = __goscriptTuple4[1]
	if (err != null) {
		return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "route", Net: "ip+net", Source: null, Addr: null, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	let __goscriptTuple5: any = interfaceByIndex(ift, index)
	let ifi: Interface | $.VarRef<Interface> | null = __goscriptTuple5[0]
	err = __goscriptTuple5[1]
	if (err != null) {
		err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "route", Net: "ip+net", Source: null, Addr: null, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
	}
	return [ifi, err]
}

export function interfaceByIndex(ift: $.Slice<Interface>, index: number): [Interface | $.VarRef<Interface> | null, $.GoError] {
	for (let __goscriptRangeTarget1 = ift, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let ifi = $.varRef(((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as Interface)).clone())
		if (index == ifi.value.Index) {
			return [ifi, null]
		}
	}
	return [null, errNoSuchInterface]
}

export async function InterfaceByName(name: string): globalThis.Promise<[Interface | $.VarRef<Interface> | null, $.GoError]> {
	if ($.stringEqual(name, "")) {
		return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "route", Net: "ip+net", Source: null, Addr: null, Err: errInvalidInterfaceName}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	let __goscriptTuple6: any = __goscript_interface_stub.interfaceTable(0)
	let ift: $.Slice<Interface> = __goscriptTuple6[0]
	let err = __goscriptTuple6[1]
	if (err != null) {
		return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "route", Net: "ip+net", Source: null, Addr: null, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	if ($.sliceLen(ift) != 0) {
		await zoneCache.value.update(ift, false)
	}
	for (let __goscriptRangeTarget2 = ift, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let ifi = $.varRef(((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as Interface)).clone())
		if ($.stringEqual(name, ifi.value.Name)) {
			return [ifi, null]
		}
	}
	return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "route", Net: "ip+net", Source: null, Addr: null, Err: errNoSuchInterface}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
}

export let zoneCache: $.VarRef<ipv6ZoneCache> = $.varRef(new ipv6ZoneCache({toIndex: $.makeMap<string, number>(), toName: $.makeMap<number, string>()}, true))

export function __goscript_set_zoneCache(__goscriptValue: ipv6ZoneCache): void {
	$.assignStruct(zoneCache.value, __goscriptValue)
}
