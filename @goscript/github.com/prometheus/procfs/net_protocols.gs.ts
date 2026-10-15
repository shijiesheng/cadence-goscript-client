// Generated file based on net_protocols.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

import * as fs2 from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import type * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import type * as __goscript_arp from "./arp.gs.ts"

import type * as __goscript_buddyinfo from "./buddyinfo.gs.ts"

import type * as __goscript_crypto from "./crypto.gs.ts"

import type * as __goscript_fs from "./fs.gs.ts"

import type * as __goscript_fscache from "./fscache.gs.ts"

import type * as __goscript_ipvs from "./ipvs.gs.ts"

import type * as __goscript_kernel_random from "./kernel_random.gs.ts"

import type * as __goscript_loadavg from "./loadavg.gs.ts"

import type * as __goscript_mdstat from "./mdstat.gs.ts"

import type * as __goscript_meminfo from "./meminfo.gs.ts"

import type * as __goscript_mountinfo from "./mountinfo.gs.ts"

import * as __goscript_mountstats from "./mountstats.gs.ts"

import type * as __goscript_net_conntrackstat from "./net_conntrackstat.gs.ts"

import type * as __goscript_net_dev from "./net_dev.gs.ts"

import type * as __goscript_net_ip_socket from "./net_ip_socket.gs.ts"

import * as __goscript_net_sockstat from "./net_sockstat.gs.ts"

import type * as __goscript_net_softnet from "./net_softnet.gs.ts"

import type * as __goscript_net_tcp from "./net_tcp.gs.ts"

import type * as __goscript_net_udp from "./net_udp.gs.ts"

import * as __goscript_net_unix from "./net_unix.gs.ts"

import type * as __goscript_proc from "./proc.gs.ts"

import type * as __goscript_proc_cgroup from "./proc_cgroup.gs.ts"

import type * as __goscript_proc_environ from "./proc_environ.gs.ts"

import * as __goscript_proc_fdinfo from "./proc_fdinfo.gs.ts"

import type * as __goscript_proc_io from "./proc_io.gs.ts"

import type * as __goscript_proc_limits from "./proc_limits.gs.ts"

import type * as __goscript_proc_ns from "./proc_ns.gs.ts"

import * as __goscript_proc_psi from "./proc_psi.gs.ts"

import type * as __goscript_proc_smaps from "./proc_smaps.gs.ts"

import type * as __goscript_proc_stat from "./proc_stat.gs.ts"

import type * as __goscript_proc_status from "./proc_status.gs.ts"

import * as __goscript_schedstat from "./schedstat.gs.ts"

import * as __goscript_slab from "./slab.gs.ts"

import * as __goscript_stat from "./stat.gs.ts"

import type * as __goscript_swaps from "./swaps.gs.ts"

import type * as __goscript_vm from "./vm.gs.ts"

import type * as __goscript_xfrm from "./xfrm.gs.ts"

import type * as __goscript_zoneinfo from "./zoneinfo.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/prometheus/procfs/internal/util/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "@goscript/net/index.js"
import "./mountstats.gs.ts"
import "./net_sockstat.gs.ts"
import "./net_unix.gs.ts"
import "./proc_fdinfo.gs.ts"
import "./proc_psi.gs.ts"
import "./schedstat.gs.ts"
import "./slab.gs.ts"
import "./stat.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.NetProtocolStats", "procfs.NetProtocolStatLine", "procfs.NetProtocolCapabilities"])

export type NetProtocolStats = globalThis.Map<string, NetProtocolStatLine> | null

$.registerNamedType("procfs.NetProtocolStats", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "procfs.NetProtocolStatLine"));

$.registerNamedValueType(
	"procfs.NetProtocolStats",
	{parseLine: (receiver: any, ...args: any[]) => (NetProtocolStats_parseLine as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("parseLine", [["rawLine", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("procfs.NetProtocolStatLine"), "error"])]
);

$.registerNamedValueType(
	"*procfs.NetProtocolStats",
	{parseLine: (receiver: any, ...args: any[]) => (NetProtocolStats_parseLine as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("parseLine", [["rawLine", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("procfs.NetProtocolStatLine"), "error"])]
);

export class NetProtocolCapabilities {
	public get Close(): boolean {
		return this._fields.Close
	}

	public set Close(value: boolean) {
		this._fields.Close = value
	}

	public get Connect(): boolean {
		return this._fields.Connect
	}

	public set Connect(value: boolean) {
		this._fields.Connect = value
	}

	public get Disconnect(): boolean {
		return this._fields.Disconnect
	}

	public set Disconnect(value: boolean) {
		this._fields.Disconnect = value
	}

	public get Accept(): boolean {
		return this._fields.Accept
	}

	public set Accept(value: boolean) {
		this._fields.Accept = value
	}

	public get IoCtl(): boolean {
		return this._fields.IoCtl
	}

	public set IoCtl(value: boolean) {
		this._fields.IoCtl = value
	}

	public get Init(): boolean {
		return this._fields.Init
	}

	public set Init(value: boolean) {
		this._fields.Init = value
	}

	public get Destroy(): boolean {
		return this._fields.Destroy
	}

	public set Destroy(value: boolean) {
		this._fields.Destroy = value
	}

	public get Shutdown(): boolean {
		return this._fields.Shutdown
	}

	public set Shutdown(value: boolean) {
		this._fields.Shutdown = value
	}

	public get SetSockOpt(): boolean {
		return this._fields.SetSockOpt
	}

	public set SetSockOpt(value: boolean) {
		this._fields.SetSockOpt = value
	}

	public get GetSockOpt(): boolean {
		return this._fields.GetSockOpt
	}

	public set GetSockOpt(value: boolean) {
		this._fields.GetSockOpt = value
	}

	public get SendMsg(): boolean {
		return this._fields.SendMsg
	}

	public set SendMsg(value: boolean) {
		this._fields.SendMsg = value
	}

	public get RecvMsg(): boolean {
		return this._fields.RecvMsg
	}

	public set RecvMsg(value: boolean) {
		this._fields.RecvMsg = value
	}

	public get SendPage(): boolean {
		return this._fields.SendPage
	}

	public set SendPage(value: boolean) {
		this._fields.SendPage = value
	}

	public get Bind(): boolean {
		return this._fields.Bind
	}

	public set Bind(value: boolean) {
		this._fields.Bind = value
	}

	public get BacklogRcv(): boolean {
		return this._fields.BacklogRcv
	}

	public set BacklogRcv(value: boolean) {
		this._fields.BacklogRcv = value
	}

	public get Hash(): boolean {
		return this._fields.Hash
	}

	public set Hash(value: boolean) {
		this._fields.Hash = value
	}

	public get UnHash(): boolean {
		return this._fields.UnHash
	}

	public set UnHash(value: boolean) {
		this._fields.UnHash = value
	}

	public get GetPort(): boolean {
		return this._fields.GetPort
	}

	public set GetPort(value: boolean) {
		this._fields.GetPort = value
	}

	public get EnterMemoryPressure(): boolean {
		return this._fields.EnterMemoryPressure
	}

	public set EnterMemoryPressure(value: boolean) {
		this._fields.EnterMemoryPressure = value
	}

	public _fields: {
		Close: boolean
		Connect: boolean
		Disconnect: boolean
		Accept: boolean
		IoCtl: boolean
		Init: boolean
		Destroy: boolean
		Shutdown: boolean
		SetSockOpt: boolean
		GetSockOpt: boolean
		SendMsg: boolean
		RecvMsg: boolean
		SendPage: boolean
		Bind: boolean
		BacklogRcv: boolean
		Hash: boolean
		UnHash: boolean
		GetPort: boolean
		EnterMemoryPressure: boolean
	}

	constructor(init?: Partial<{Close?: boolean, Connect?: boolean, Disconnect?: boolean, Accept?: boolean, IoCtl?: boolean, Init?: boolean, Destroy?: boolean, Shutdown?: boolean, SetSockOpt?: boolean, GetSockOpt?: boolean, SendMsg?: boolean, RecvMsg?: boolean, SendPage?: boolean, Bind?: boolean, BacklogRcv?: boolean, Hash?: boolean, UnHash?: boolean, GetPort?: boolean, EnterMemoryPressure?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Close: init?.Close ?? (false as boolean),
			Connect: init?.Connect ?? (false as boolean),
			Disconnect: init?.Disconnect ?? (false as boolean),
			Accept: init?.Accept ?? (false as boolean),
			IoCtl: init?.IoCtl ?? (false as boolean),
			Init: init?.Init ?? (false as boolean),
			Destroy: init?.Destroy ?? (false as boolean),
			Shutdown: init?.Shutdown ?? (false as boolean),
			SetSockOpt: init?.SetSockOpt ?? (false as boolean),
			GetSockOpt: init?.GetSockOpt ?? (false as boolean),
			SendMsg: init?.SendMsg ?? (false as boolean),
			RecvMsg: init?.RecvMsg ?? (false as boolean),
			SendPage: init?.SendPage ?? (false as boolean),
			Bind: init?.Bind ?? (false as boolean),
			BacklogRcv: init?.BacklogRcv ?? (false as boolean),
			Hash: init?.Hash ?? (false as boolean),
			UnHash: init?.UnHash ?? (false as boolean),
			GetPort: init?.GetPort ?? (false as boolean),
			EnterMemoryPressure: init?.EnterMemoryPressure ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NetProtocolCapabilities {
		return new NetProtocolCapabilities(this, true)
	}

	public __goscriptAssign(source: NetProtocolCapabilities): void {
		const target = this._fields
		const values = source._fields
		target.Close = values.Close
		target.Connect = values.Connect
		target.Disconnect = values.Disconnect
		target.Accept = values.Accept
		target.IoCtl = values.IoCtl
		target.Init = values.Init
		target.Destroy = values.Destroy
		target.Shutdown = values.Shutdown
		target.SetSockOpt = values.SetSockOpt
		target.GetSockOpt = values.GetSockOpt
		target.SendMsg = values.SendMsg
		target.RecvMsg = values.RecvMsg
		target.SendPage = values.SendPage
		target.Bind = values.Bind
		target.BacklogRcv = values.BacklogRcv
		target.Hash = values.Hash
		target.UnHash = values.UnHash
		target.GetPort = values.GetPort
		target.EnterMemoryPressure = values.EnterMemoryPressure
	}

	public parseCapabilities(capabilities: $.Slice<string>): $.GoError {
		const pc: NetProtocolCapabilities | $.VarRef<NetProtocolCapabilities> | null = this;
		const pc$: NetProtocolCapabilities = pc == null ? $.pointerTarget<NetProtocolCapabilities>(pc) : (pc as any).__isVarRef === true ? (pc as any).value : (pc as any).__goValue === undefined ? (pc as any) : $.pointerTarget<NetProtocolCapabilities>(pc)
		// The capabilities are all bools so we can loop over to map them
		let capabilityFields = $.arrayValue([$.fieldRef((pc$ as NetProtocolCapabilities)._fields, "Close"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "Connect"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "Disconnect"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "Accept"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "IoCtl"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "Init"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "Destroy"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "Shutdown"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "SetSockOpt"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "GetSockOpt"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "SendMsg"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "RecvMsg"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "SendPage"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "Bind"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "BacklogRcv"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "Hash"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "UnHash"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "GetPort"), $.fieldRef((pc$ as NetProtocolCapabilities)._fields, "EnterMemoryPressure")])

		for (let __goscriptSliceWindow0 = $.sliceRange(capabilities), i = 0; i < __goscriptSliceWindow0.length; i++) {
			if ($.stringEqual(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string), "y")) {
				$.arrayIndex(capabilityFields, i)!.value = true
			} else {
				if ($.stringEqual(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string), "n")) {
					$.arrayIndex(capabilityFields, i)!.value = false
				} else {
					return fmt.Errorf("unable to parse capability block for protocol: position %d", $.basicInterfaceValue(i, "int"))
				}
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"procfs.NetProtocolCapabilities",
		() => new NetProtocolCapabilities(),
		() => [$.methodSignature("parseCapabilities", [["capabilities", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["error"], true)],
		NetProtocolCapabilities,
		() => [/* @__PURE__ */ $.structField("Close", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("Connect", /* @__PURE__ */ $.basicType("bool"), [1], 1, true), /* @__PURE__ */ $.structField("Disconnect", /* @__PURE__ */ $.basicType("bool"), [2], 2, true), /* @__PURE__ */ $.structField("Accept", /* @__PURE__ */ $.basicType("bool"), [3], 3, true), /* @__PURE__ */ $.structField("IoCtl", /* @__PURE__ */ $.basicType("bool"), [4], 4, true), /* @__PURE__ */ $.structField("Init", /* @__PURE__ */ $.basicType("bool"), [5], 5, true), /* @__PURE__ */ $.structField("Destroy", /* @__PURE__ */ $.basicType("bool"), [6], 6, true), /* @__PURE__ */ $.structField("Shutdown", /* @__PURE__ */ $.basicType("bool"), [7], 7, true), /* @__PURE__ */ $.structField("SetSockOpt", /* @__PURE__ */ $.basicType("bool"), [8], 8, true), /* @__PURE__ */ $.structField("GetSockOpt", /* @__PURE__ */ $.basicType("bool"), [9], 9, true), /* @__PURE__ */ $.structField("SendMsg", /* @__PURE__ */ $.basicType("bool"), [10], 10, true), /* @__PURE__ */ $.structField("RecvMsg", /* @__PURE__ */ $.basicType("bool"), [11], 11, true), /* @__PURE__ */ $.structField("SendPage", /* @__PURE__ */ $.basicType("bool"), [12], 12, true), /* @__PURE__ */ $.structField("Bind", /* @__PURE__ */ $.basicType("bool"), [13], 13, true), /* @__PURE__ */ $.structField("BacklogRcv", /* @__PURE__ */ $.basicType("bool"), [14], 14, true), /* @__PURE__ */ $.structField("Hash", /* @__PURE__ */ $.basicType("bool"), [15], 15, true), /* @__PURE__ */ $.structField("UnHash", /* @__PURE__ */ $.basicType("bool"), [16], 16, true), /* @__PURE__ */ $.structField("GetPort", /* @__PURE__ */ $.basicType("bool"), [17], 17, true), /* @__PURE__ */ $.structField("EnterMemoryPressure", /* @__PURE__ */ $.basicType("bool"), [18], 18, true)]
	)
}

export class NetProtocolStatLine {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Size(): bigint {
		return this._fields.Size
	}

	public set Size(value: bigint) {
		this._fields.Size = value
	}

	public get Sockets(): bigint {
		return this._fields.Sockets
	}

	public set Sockets(value: bigint) {
		this._fields.Sockets = value
	}

	public get Memory(): bigint {
		return this._fields.Memory
	}

	public set Memory(value: bigint) {
		this._fields.Memory = value
	}

	public get Pressure(): number {
		return this._fields.Pressure
	}

	public set Pressure(value: number) {
		this._fields.Pressure = value
	}

	public get MaxHeader(): bigint {
		return this._fields.MaxHeader
	}

	public set MaxHeader(value: bigint) {
		this._fields.MaxHeader = value
	}

	public get Slab(): boolean {
		return this._fields.Slab
	}

	public set Slab(value: boolean) {
		this._fields.Slab = value
	}

	public get ModuleName(): string {
		return this._fields.ModuleName
	}

	public set ModuleName(value: string) {
		this._fields.ModuleName = value
	}

	public get Capabilities(): NetProtocolCapabilities {
		return this._fields.Capabilities
	}

	public set Capabilities(value: NetProtocolCapabilities) {
		this._fields.Capabilities = value
	}

	public _fields: {
		Name: string
		Size: bigint
		Sockets: bigint
		Memory: bigint
		Pressure: number
		MaxHeader: bigint
		Slab: boolean
		ModuleName: string
		Capabilities: NetProtocolCapabilities
	}

	constructor(init?: Partial<{Name?: string, Size?: bigint, Sockets?: bigint, Memory?: bigint, Pressure?: number, MaxHeader?: bigint, Slab?: boolean, ModuleName?: string, Capabilities?: NetProtocolCapabilities}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Size: init?.Size ?? (0n as bigint),
			Sockets: init?.Sockets ?? (0n as bigint),
			Memory: init?.Memory ?? (0n as bigint),
			Pressure: init?.Pressure ?? (0 as number),
			MaxHeader: init?.MaxHeader ?? (0n as bigint),
			Slab: init?.Slab ?? (false as boolean),
			ModuleName: init?.ModuleName ?? ("" as string),
			Capabilities: init?.Capabilities ? init.Capabilities.clone() : new NetProtocolCapabilities(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NetProtocolStatLine {
		return new NetProtocolStatLine(this, true)
	}

	public __goscriptAssign(source: NetProtocolStatLine): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Size = values.Size
		target.Sockets = values.Sockets
		target.Memory = values.Memory
		target.Pressure = values.Pressure
		target.MaxHeader = values.MaxHeader
		target.Slab = values.Slab
		target.ModuleName = values.ModuleName
		$.assignStruct(target.Capabilities, values.Capabilities)
	}

	static __typeInfo = $.registerStructType(
		"procfs.NetProtocolStatLine",
		() => new NetProtocolStatLine(),
		() => [],
		NetProtocolStatLine,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("uint64"), [1], 16, true), /* @__PURE__ */ $.structField("Sockets", /* @__PURE__ */ $.basicType("int64"), [2], 24, true), /* @__PURE__ */ $.structField("Memory", /* @__PURE__ */ $.basicType("int64"), [3], 32, true), /* @__PURE__ */ $.structField("Pressure", /* @__PURE__ */ $.basicType("int"), [4], 40, true), /* @__PURE__ */ $.structField("MaxHeader", /* @__PURE__ */ $.basicType("uint64"), [5], 48, true), /* @__PURE__ */ $.structField("Slab", /* @__PURE__ */ $.basicType("bool"), [6], 56, true), /* @__PURE__ */ $.structField("ModuleName", /* @__PURE__ */ $.basicType("string"), [7], 64, true), /* @__PURE__ */ $.structField("Capabilities", "procfs.NetProtocolCapabilities", [8], 80, true)]
	)
}

export async function parseNetProtocols(s: bufio.Scanner | $.VarRef<bufio.Scanner> | null): globalThis.Promise<[NetProtocolStats, $.GoError]> {
	let nps: NetProtocolStats = $.makeMap<string, NetProtocolStatLine>([])

	// Skip the header line
	await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))

	while (await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))) {
		let __goscriptTuple0: any = NetProtocolStats_parseLine(nps, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s)))
		let line: NetProtocolStatLine | $.VarRef<NetProtocolStatLine> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [$.makeMap<string, NetProtocolStatLine>([]), err]
		}

		$.mapSet(nps, $.pointerValue<NetProtocolStatLine>(line).Name, ($.pointerValue<NetProtocolStatLine>(line)).clone())
	}
	return [nps, null]
}

export function NetProtocolStats_parseLine(ps: NetProtocolStats, rawLine: string): [NetProtocolStatLine | $.VarRef<NetProtocolStatLine> | null, $.GoError] {
	let line: NetProtocolStatLine | $.VarRef<NetProtocolStatLine> | null = new NetProtocolStatLine({Capabilities: new NetProtocolCapabilities(undefined, true)})
	let line$: NetProtocolStatLine = line == null ? $.pointerTarget<NetProtocolStatLine>(line) : (line as any).__isVarRef === true ? (line as any).value : (line as any).__goValue === undefined ? (line as any) : $.pointerTarget<NetProtocolStatLine>(line)
	let err: $.GoError = null! as $.GoError
	const enabled: string = "yes"
	const disabled: string = "no"

	let fields: $.Slice<string> = strings.Fields(rawLine);
	;(line$ as NetProtocolStatLine).Name = $.arrayIndex(fields!, 0)
	let __goscriptTuple1: any = strconv.ParseUint($.arrayIndex(fields!, 1), 10, 64);
	;(line$ as NetProtocolStatLine).Size = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple2: any = strconv.ParseInt($.arrayIndex(fields!, 2), 10, 64);
	;(line$ as NetProtocolStatLine).Sockets = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple3: any = strconv.ParseInt($.arrayIndex(fields!, 3), 10, 64);
	;(line$ as NetProtocolStatLine).Memory = __goscriptTuple3[0]
	err = __goscriptTuple3[1]
	if (err != null) {
		return [null, err]
	}
	if ($.stringEqual($.arrayIndex(fields!, 4), "yes")) {
		;(line$ as NetProtocolStatLine).Pressure = 1
	} else {
		if ($.stringEqual($.arrayIndex(fields!, 4), "no")) {
			;(line$ as NetProtocolStatLine).Pressure = 0
		} else {
			;(line$ as NetProtocolStatLine).Pressure = -1
		}
	}
	let __goscriptTuple4: any = strconv.ParseUint($.arrayIndex(fields!, 5), 10, 64);
	;(line$ as NetProtocolStatLine).MaxHeader = __goscriptTuple4[0]
	err = __goscriptTuple4[1]
	if (err != null) {
		return [null, err]
	}
	if ($.stringEqual($.arrayIndex(fields!, 6), "yes")) {
		;(line$ as NetProtocolStatLine).Slab = true
	} else {
		if ($.stringEqual($.arrayIndex(fields!, 6), "no")) {
			;(line$ as NetProtocolStatLine).Slab = false
		} else {
			return [null, fmt.Errorf("unable to parse capability for protocol: %s", (line$ as NetProtocolStatLine).Name)]
		}
	}
	;(line$ as NetProtocolStatLine).ModuleName = $.arrayIndex(fields!, 7)

	err = (line$ as NetProtocolStatLine).Capabilities.parseCapabilities($.goSlice(fields, 8, undefined))
	if (err != null) {
		return [null, err]
	}

	return [line, null]
}
