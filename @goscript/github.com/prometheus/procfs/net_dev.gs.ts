// Generated file based on net_dev.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as errors from "@goscript/errors/index.js"

import * as os from "@goscript/os/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

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

import type * as __goscript_net_ip_socket from "./net_ip_socket.gs.ts"

import * as __goscript_net_protocols from "./net_protocols.gs.ts"

import * as __goscript_net_sockstat from "./net_sockstat.gs.ts"

import type * as __goscript_net_softnet from "./net_softnet.gs.ts"

import type * as __goscript_net_tcp from "./net_tcp.gs.ts"

import type * as __goscript_net_udp from "./net_udp.gs.ts"

import * as __goscript_net_unix from "./net_unix.gs.ts"

import * as __goscript_proc from "./proc.gs.ts"

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
import "@goscript/errors/index.js"
import "@goscript/os/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "@goscript/net/index.js"
import "./mountstats.gs.ts"
import "./net_protocols.gs.ts"
import "./net_sockstat.gs.ts"
import "./net_unix.gs.ts"
import "./proc.gs.ts"
import "./proc_fdinfo.gs.ts"
import "./proc_psi.gs.ts"
import "./schedstat.gs.ts"
import "./slab.gs.ts"
import "./stat.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.NetDevLine", "procfs.NetDev"])

export type NetDev = globalThis.Map<string, NetDevLine> | null

$.registerNamedType("procfs.NetDev", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "procfs.NetDevLine"));

$.registerNamedValueType(
	"procfs.NetDev",
	{Total: (receiver: any, ...args: any[]) => (NetDev_Total as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), parseLine: (receiver: any, ...args: any[]) => (NetDev_parseLine as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Total", [], ["procfs.NetDevLine"]), $.methodSignature("parseLine", [["rawLine", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("procfs.NetDevLine"), "error"])]
);

$.registerNamedValueType(
	"*procfs.NetDev",
	{Total: (receiver: any, ...args: any[]) => (NetDev_Total as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), parseLine: (receiver: any, ...args: any[]) => (NetDev_parseLine as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Total", [], ["procfs.NetDevLine"]), $.methodSignature("parseLine", [["rawLine", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("procfs.NetDevLine"), "error"])]
);

export class NetDevLine {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get RxBytes(): bigint {
		return this._fields.RxBytes
	}

	public set RxBytes(value: bigint) {
		this._fields.RxBytes = value
	}

	public get RxPackets(): bigint {
		return this._fields.RxPackets
	}

	public set RxPackets(value: bigint) {
		this._fields.RxPackets = value
	}

	public get RxErrors(): bigint {
		return this._fields.RxErrors
	}

	public set RxErrors(value: bigint) {
		this._fields.RxErrors = value
	}

	public get RxDropped(): bigint {
		return this._fields.RxDropped
	}

	public set RxDropped(value: bigint) {
		this._fields.RxDropped = value
	}

	public get RxFIFO(): bigint {
		return this._fields.RxFIFO
	}

	public set RxFIFO(value: bigint) {
		this._fields.RxFIFO = value
	}

	public get RxFrame(): bigint {
		return this._fields.RxFrame
	}

	public set RxFrame(value: bigint) {
		this._fields.RxFrame = value
	}

	public get RxCompressed(): bigint {
		return this._fields.RxCompressed
	}

	public set RxCompressed(value: bigint) {
		this._fields.RxCompressed = value
	}

	public get RxMulticast(): bigint {
		return this._fields.RxMulticast
	}

	public set RxMulticast(value: bigint) {
		this._fields.RxMulticast = value
	}

	public get TxBytes(): bigint {
		return this._fields.TxBytes
	}

	public set TxBytes(value: bigint) {
		this._fields.TxBytes = value
	}

	public get TxPackets(): bigint {
		return this._fields.TxPackets
	}

	public set TxPackets(value: bigint) {
		this._fields.TxPackets = value
	}

	public get TxErrors(): bigint {
		return this._fields.TxErrors
	}

	public set TxErrors(value: bigint) {
		this._fields.TxErrors = value
	}

	public get TxDropped(): bigint {
		return this._fields.TxDropped
	}

	public set TxDropped(value: bigint) {
		this._fields.TxDropped = value
	}

	public get TxFIFO(): bigint {
		return this._fields.TxFIFO
	}

	public set TxFIFO(value: bigint) {
		this._fields.TxFIFO = value
	}

	public get TxCollisions(): bigint {
		return this._fields.TxCollisions
	}

	public set TxCollisions(value: bigint) {
		this._fields.TxCollisions = value
	}

	public get TxCarrier(): bigint {
		return this._fields.TxCarrier
	}

	public set TxCarrier(value: bigint) {
		this._fields.TxCarrier = value
	}

	public get TxCompressed(): bigint {
		return this._fields.TxCompressed
	}

	public set TxCompressed(value: bigint) {
		this._fields.TxCompressed = value
	}

	public _fields: {
		Name: string
		RxBytes: bigint
		RxPackets: bigint
		RxErrors: bigint
		RxDropped: bigint
		RxFIFO: bigint
		RxFrame: bigint
		RxCompressed: bigint
		RxMulticast: bigint
		TxBytes: bigint
		TxPackets: bigint
		TxErrors: bigint
		TxDropped: bigint
		TxFIFO: bigint
		TxCollisions: bigint
		TxCarrier: bigint
		TxCompressed: bigint
	}

	constructor(init?: Partial<{Name?: string, RxBytes?: bigint, RxPackets?: bigint, RxErrors?: bigint, RxDropped?: bigint, RxFIFO?: bigint, RxFrame?: bigint, RxCompressed?: bigint, RxMulticast?: bigint, TxBytes?: bigint, TxPackets?: bigint, TxErrors?: bigint, TxDropped?: bigint, TxFIFO?: bigint, TxCollisions?: bigint, TxCarrier?: bigint, TxCompressed?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			RxBytes: init?.RxBytes ?? (0n as bigint),
			RxPackets: init?.RxPackets ?? (0n as bigint),
			RxErrors: init?.RxErrors ?? (0n as bigint),
			RxDropped: init?.RxDropped ?? (0n as bigint),
			RxFIFO: init?.RxFIFO ?? (0n as bigint),
			RxFrame: init?.RxFrame ?? (0n as bigint),
			RxCompressed: init?.RxCompressed ?? (0n as bigint),
			RxMulticast: init?.RxMulticast ?? (0n as bigint),
			TxBytes: init?.TxBytes ?? (0n as bigint),
			TxPackets: init?.TxPackets ?? (0n as bigint),
			TxErrors: init?.TxErrors ?? (0n as bigint),
			TxDropped: init?.TxDropped ?? (0n as bigint),
			TxFIFO: init?.TxFIFO ?? (0n as bigint),
			TxCollisions: init?.TxCollisions ?? (0n as bigint),
			TxCarrier: init?.TxCarrier ?? (0n as bigint),
			TxCompressed: init?.TxCompressed ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NetDevLine {
		return new NetDevLine(this, true)
	}

	public __goscriptAssign(source: NetDevLine): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.RxBytes = values.RxBytes
		target.RxPackets = values.RxPackets
		target.RxErrors = values.RxErrors
		target.RxDropped = values.RxDropped
		target.RxFIFO = values.RxFIFO
		target.RxFrame = values.RxFrame
		target.RxCompressed = values.RxCompressed
		target.RxMulticast = values.RxMulticast
		target.TxBytes = values.TxBytes
		target.TxPackets = values.TxPackets
		target.TxErrors = values.TxErrors
		target.TxDropped = values.TxDropped
		target.TxFIFO = values.TxFIFO
		target.TxCollisions = values.TxCollisions
		target.TxCarrier = values.TxCarrier
		target.TxCompressed = values.TxCompressed
	}

	static __typeInfo = $.registerStructType(
		"procfs.NetDevLine",
		() => new NetDevLine(),
		() => [],
		NetDevLine,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"name\"" }), /* @__PURE__ */ $.structField("RxBytes", /* @__PURE__ */ $.basicType("uint64"), [1], 16, true, { tag: "json:\"rx_bytes\"" }), /* @__PURE__ */ $.structField("RxPackets", /* @__PURE__ */ $.basicType("uint64"), [2], 24, true, { tag: "json:\"rx_packets\"" }), /* @__PURE__ */ $.structField("RxErrors", /* @__PURE__ */ $.basicType("uint64"), [3], 32, true, { tag: "json:\"rx_errors\"" }), /* @__PURE__ */ $.structField("RxDropped", /* @__PURE__ */ $.basicType("uint64"), [4], 40, true, { tag: "json:\"rx_dropped\"" }), /* @__PURE__ */ $.structField("RxFIFO", /* @__PURE__ */ $.basicType("uint64"), [5], 48, true, { tag: "json:\"rx_fifo\"" }), /* @__PURE__ */ $.structField("RxFrame", /* @__PURE__ */ $.basicType("uint64"), [6], 56, true, { tag: "json:\"rx_frame\"" }), /* @__PURE__ */ $.structField("RxCompressed", /* @__PURE__ */ $.basicType("uint64"), [7], 64, true, { tag: "json:\"rx_compressed\"" }), /* @__PURE__ */ $.structField("RxMulticast", /* @__PURE__ */ $.basicType("uint64"), [8], 72, true, { tag: "json:\"rx_multicast\"" }), /* @__PURE__ */ $.structField("TxBytes", /* @__PURE__ */ $.basicType("uint64"), [9], 80, true, { tag: "json:\"tx_bytes\"" }), /* @__PURE__ */ $.structField("TxPackets", /* @__PURE__ */ $.basicType("uint64"), [10], 88, true, { tag: "json:\"tx_packets\"" }), /* @__PURE__ */ $.structField("TxErrors", /* @__PURE__ */ $.basicType("uint64"), [11], 96, true, { tag: "json:\"tx_errors\"" }), /* @__PURE__ */ $.structField("TxDropped", /* @__PURE__ */ $.basicType("uint64"), [12], 104, true, { tag: "json:\"tx_dropped\"" }), /* @__PURE__ */ $.structField("TxFIFO", /* @__PURE__ */ $.basicType("uint64"), [13], 112, true, { tag: "json:\"tx_fifo\"" }), /* @__PURE__ */ $.structField("TxCollisions", /* @__PURE__ */ $.basicType("uint64"), [14], 120, true, { tag: "json:\"tx_collisions\"" }), /* @__PURE__ */ $.structField("TxCarrier", /* @__PURE__ */ $.basicType("uint64"), [15], 128, true, { tag: "json:\"tx_carrier\"" }), /* @__PURE__ */ $.structField("TxCompressed", /* @__PURE__ */ $.basicType("uint64"), [16], 136, true, { tag: "json:\"tx_compressed\"" })]
	)
}

export async function newNetDev(file: string): globalThis.Promise<[NetDev, $.GoError]> {
	await using __defer = new $.AsyncDisposableStack()
	let __goscriptTuple0: any = await os.Open(file)
	let f: os.File | $.VarRef<os.File> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [$.makeMap<string, NetDevLine>([]), err]
	}
	__defer.defer(async () => { await os.File.prototype.Close.call($.pointerValue<os.File>(f)) })

	let netDev: NetDev = $.makeMap<string, NetDevLine>([])
	let s: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner($.interfaceValue<io.Reader | null>(f, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))
	for (let n = 0; await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s)); n++) {
		// Skip the 2 header lines.
		if (n < 2) {
			continue
		}

		let __goscriptTuple1: any = NetDev_parseLine(netDev, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s)))
		let line: NetDevLine | $.VarRef<NetDevLine> | null = __goscriptTuple1[0]
		let __goscriptShadow0 = __goscriptTuple1[1]
		if (__goscriptShadow0 != null) {
			return [netDev, __goscriptShadow0]
		}

		$.mapSet(netDev, $.pointerValue<NetDevLine>(line).Name, ($.pointerValue<NetDevLine>(line)).clone())
	}

	return [netDev, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Err() : bufio.Scanner.prototype.Err.call(s))]
}

export function NetDev_parseLine(netDev: NetDev, rawLine: string): [NetDevLine | $.VarRef<NetDevLine> | null, $.GoError] {
	let parts: $.Slice<string> = strings.SplitN(rawLine, ":", 2)
	if ($.sliceLen(parts) != 2) {
		return [null, errors.New("invalid net/dev line, missing colon")]
	}
	let fields: $.Slice<string> = strings.Fields(strings.TrimSpace($.arrayIndex(parts!, 1)))

	let err: $.GoError = null! as $.GoError
	let line: NetDevLine | $.VarRef<NetDevLine> | null = new NetDevLine()
	let line$: NetDevLine = line == null ? $.pointerTarget<NetDevLine>(line) : (line as any).__isVarRef === true ? (line as any).value : (line as any).__goValue === undefined ? (line as any) : $.pointerTarget<NetDevLine>(line);

	// Interface Name
	;(line$ as NetDevLine).Name = strings.TrimSpace($.arrayIndex(parts!, 0))
	if ($.stringEqual((line$ as NetDevLine).Name, "")) {
		return [null, errors.New("invalid net/dev line, empty interface name")]
	}

	// RX
	let __goscriptTuple2: any = strconv.ParseUint($.arrayIndex(fields!, 0), 10, 64);
	;(line$ as NetDevLine).RxBytes = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple3: any = strconv.ParseUint($.arrayIndex(fields!, 1), 10, 64);
	;(line$ as NetDevLine).RxPackets = __goscriptTuple3[0]
	err = __goscriptTuple3[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple4: any = strconv.ParseUint($.arrayIndex(fields!, 2), 10, 64);
	;(line$ as NetDevLine).RxErrors = __goscriptTuple4[0]
	err = __goscriptTuple4[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple5: any = strconv.ParseUint($.arrayIndex(fields!, 3), 10, 64);
	;(line$ as NetDevLine).RxDropped = __goscriptTuple5[0]
	err = __goscriptTuple5[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple6: any = strconv.ParseUint($.arrayIndex(fields!, 4), 10, 64);
	;(line$ as NetDevLine).RxFIFO = __goscriptTuple6[0]
	err = __goscriptTuple6[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple7: any = strconv.ParseUint($.arrayIndex(fields!, 5), 10, 64);
	;(line$ as NetDevLine).RxFrame = __goscriptTuple7[0]
	err = __goscriptTuple7[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple8: any = strconv.ParseUint($.arrayIndex(fields!, 6), 10, 64);
	;(line$ as NetDevLine).RxCompressed = __goscriptTuple8[0]
	err = __goscriptTuple8[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple9: any = strconv.ParseUint($.arrayIndex(fields!, 7), 10, 64);
	;(line$ as NetDevLine).RxMulticast = __goscriptTuple9[0]
	err = __goscriptTuple9[1]
	if (err != null) {
		return [null, err]
	}

	// TX
	let __goscriptTuple10: any = strconv.ParseUint($.arrayIndex(fields!, 8), 10, 64);
	;(line$ as NetDevLine).TxBytes = __goscriptTuple10[0]
	err = __goscriptTuple10[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple11: any = strconv.ParseUint($.arrayIndex(fields!, 9), 10, 64);
	;(line$ as NetDevLine).TxPackets = __goscriptTuple11[0]
	err = __goscriptTuple11[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple12: any = strconv.ParseUint($.arrayIndex(fields!, 10), 10, 64);
	;(line$ as NetDevLine).TxErrors = __goscriptTuple12[0]
	err = __goscriptTuple12[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple13: any = strconv.ParseUint($.arrayIndex(fields!, 11), 10, 64);
	;(line$ as NetDevLine).TxDropped = __goscriptTuple13[0]
	err = __goscriptTuple13[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple14: any = strconv.ParseUint($.arrayIndex(fields!, 12), 10, 64);
	;(line$ as NetDevLine).TxFIFO = __goscriptTuple14[0]
	err = __goscriptTuple14[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple15: any = strconv.ParseUint($.arrayIndex(fields!, 13), 10, 64);
	;(line$ as NetDevLine).TxCollisions = __goscriptTuple15[0]
	err = __goscriptTuple15[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple16: any = strconv.ParseUint($.arrayIndex(fields!, 14), 10, 64);
	;(line$ as NetDevLine).TxCarrier = __goscriptTuple16[0]
	err = __goscriptTuple16[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple17: any = strconv.ParseUint($.arrayIndex(fields!, 15), 10, 64);
	;(line$ as NetDevLine).TxCompressed = __goscriptTuple17[0]
	err = __goscriptTuple17[1]
	if (err != null) {
		return [null, err]
	}

	return [line, null]
}

export function NetDev_Total(netDev: NetDev): NetDevLine {
	let total = new NetDevLine(undefined, true)

	let names: $.Slice<string> = $.makeSlice<string>(0, $.len(netDev), "string")
	for (const [__rangeKey, ifc] of netDev?.entries() ?? []) {
		names = $.appendOne(names, ifc.Name)
		total.RxBytes = $.uint64Add(total.RxBytes, ifc.RxBytes)
		total.RxPackets = $.uint64Add(total.RxPackets, ifc.RxPackets)
		total.RxErrors = $.uint64Add(total.RxErrors, ifc.RxErrors)
		total.RxDropped = $.uint64Add(total.RxDropped, ifc.RxDropped)
		total.RxFIFO = $.uint64Add(total.RxFIFO, ifc.RxFIFO)
		total.RxFrame = $.uint64Add(total.RxFrame, ifc.RxFrame)
		total.RxCompressed = $.uint64Add(total.RxCompressed, ifc.RxCompressed)
		total.RxMulticast = $.uint64Add(total.RxMulticast, ifc.RxMulticast)
		total.TxBytes = $.uint64Add(total.TxBytes, ifc.TxBytes)
		total.TxPackets = $.uint64Add(total.TxPackets, ifc.TxPackets)
		total.TxErrors = $.uint64Add(total.TxErrors, ifc.TxErrors)
		total.TxDropped = $.uint64Add(total.TxDropped, ifc.TxDropped)
		total.TxFIFO = $.uint64Add(total.TxFIFO, ifc.TxFIFO)
		total.TxCollisions = $.uint64Add(total.TxCollisions, ifc.TxCollisions)
		total.TxCarrier = $.uint64Add(total.TxCarrier, ifc.TxCarrier)
		total.TxCompressed = $.uint64Add(total.TxCompressed, ifc.TxCompressed)
	}
	sort.Strings(names)
	total.Name = strings.Join(names, ", ")

	return (total).clone()
}
