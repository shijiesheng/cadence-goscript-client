// Generated file based on ipvs.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as hex from "@goscript/encoding/hex/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as net from "@goscript/net/index.js"

import * as os from "@goscript/os/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

import * as fs2 from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import type * as __goscript_arp from "./arp.gs.ts"

import type * as __goscript_buddyinfo from "./buddyinfo.gs.ts"

import type * as __goscript_crypto from "./crypto.gs.ts"

import type * as __goscript_fs from "./fs.gs.ts"

import type * as __goscript_fscache from "./fscache.gs.ts"

import type * as __goscript_kernel_random from "./kernel_random.gs.ts"

import type * as __goscript_loadavg from "./loadavg.gs.ts"

import type * as __goscript_mdstat from "./mdstat.gs.ts"

import type * as __goscript_meminfo from "./meminfo.gs.ts"

import type * as __goscript_mountinfo from "./mountinfo.gs.ts"

import * as __goscript_mountstats from "./mountstats.gs.ts"

import type * as __goscript_net_conntrackstat from "./net_conntrackstat.gs.ts"

import type * as __goscript_net_dev from "./net_dev.gs.ts"

import type * as __goscript_net_ip_socket from "./net_ip_socket.gs.ts"

import * as __goscript_net_protocols from "./net_protocols.gs.ts"

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
import "@goscript/encoding/hex/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/net/index.js"
import "@goscript/os/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/prometheus/procfs/internal/util/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "./mountstats.gs.ts"
import "./net_protocols.gs.ts"
import "./net_sockstat.gs.ts"
import "./net_unix.gs.ts"
import "./proc_fdinfo.gs.ts"
import "./proc_psi.gs.ts"
import "./schedstat.gs.ts"
import "./slab.gs.ts"
import "./stat.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.IPVSStats", "procfs.IPVSBackendStatus"])

export class IPVSStats {
	// Total count of connections.
	public get Connections(): bigint {
		return this._fields.Connections
	}

	public set Connections(value: bigint) {
		this._fields.Connections = value
	}

	// Total incoming packages processed.
	public get IncomingPackets(): bigint {
		return this._fields.IncomingPackets
	}

	public set IncomingPackets(value: bigint) {
		this._fields.IncomingPackets = value
	}

	// Total outgoing packages processed.
	public get OutgoingPackets(): bigint {
		return this._fields.OutgoingPackets
	}

	public set OutgoingPackets(value: bigint) {
		this._fields.OutgoingPackets = value
	}

	// Total incoming traffic.
	public get IncomingBytes(): bigint {
		return this._fields.IncomingBytes
	}

	public set IncomingBytes(value: bigint) {
		this._fields.IncomingBytes = value
	}

	// Total outgoing traffic.
	public get OutgoingBytes(): bigint {
		return this._fields.OutgoingBytes
	}

	public set OutgoingBytes(value: bigint) {
		this._fields.OutgoingBytes = value
	}

	public _fields: {
		Connections: bigint
		IncomingPackets: bigint
		OutgoingPackets: bigint
		IncomingBytes: bigint
		OutgoingBytes: bigint
	}

	constructor(init?: Partial<{Connections?: bigint, IncomingPackets?: bigint, OutgoingPackets?: bigint, IncomingBytes?: bigint, OutgoingBytes?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Connections: init?.Connections ?? (0n as bigint),
			IncomingPackets: init?.IncomingPackets ?? (0n as bigint),
			OutgoingPackets: init?.OutgoingPackets ?? (0n as bigint),
			IncomingBytes: init?.IncomingBytes ?? (0n as bigint),
			OutgoingBytes: init?.OutgoingBytes ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): IPVSStats {
		return new IPVSStats(this, true)
	}

	public __goscriptAssign(source: IPVSStats): void {
		const target = this._fields
		const values = source._fields
		target.Connections = values.Connections
		target.IncomingPackets = values.IncomingPackets
		target.OutgoingPackets = values.OutgoingPackets
		target.IncomingBytes = values.IncomingBytes
		target.OutgoingBytes = values.OutgoingBytes
	}

	static __typeInfo = $.registerStructType(
		"procfs.IPVSStats",
		() => new IPVSStats(),
		() => [],
		IPVSStats,
		() => [/* @__PURE__ */ $.structField("Connections", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("IncomingPackets", /* @__PURE__ */ $.basicType("uint64"), [1], 8, true), /* @__PURE__ */ $.structField("OutgoingPackets", /* @__PURE__ */ $.basicType("uint64"), [2], 16, true), /* @__PURE__ */ $.structField("IncomingBytes", /* @__PURE__ */ $.basicType("uint64"), [3], 24, true), /* @__PURE__ */ $.structField("OutgoingBytes", /* @__PURE__ */ $.basicType("uint64"), [4], 32, true)]
	)
}

export class IPVSBackendStatus {
	// The local (virtual) IP address.
	public get LocalAddress(): net.IP {
		return this._fields.LocalAddress
	}

	public set LocalAddress(value: net.IP) {
		this._fields.LocalAddress = value
	}

	// The remote (real) IP address.
	public get RemoteAddress(): net.IP {
		return this._fields.RemoteAddress
	}

	public set RemoteAddress(value: net.IP) {
		this._fields.RemoteAddress = value
	}

	// The local (virtual) port.
	public get LocalPort(): number {
		return this._fields.LocalPort
	}

	public set LocalPort(value: number) {
		this._fields.LocalPort = value
	}

	// The remote (real) port.
	public get RemotePort(): number {
		return this._fields.RemotePort
	}

	public set RemotePort(value: number) {
		this._fields.RemotePort = value
	}

	// The local firewall mark
	public get LocalMark(): string {
		return this._fields.LocalMark
	}

	public set LocalMark(value: string) {
		this._fields.LocalMark = value
	}

	// The transport protocol (TCP, UDP).
	public get Proto(): string {
		return this._fields.Proto
	}

	public set Proto(value: string) {
		this._fields.Proto = value
	}

	// The current number of active connections for this virtual/real address pair.
	public get ActiveConn(): bigint {
		return this._fields.ActiveConn
	}

	public set ActiveConn(value: bigint) {
		this._fields.ActiveConn = value
	}

	// The current number of inactive connections for this virtual/real address pair.
	public get InactConn(): bigint {
		return this._fields.InactConn
	}

	public set InactConn(value: bigint) {
		this._fields.InactConn = value
	}

	// The current weight of this virtual/real address pair.
	public get Weight(): bigint {
		return this._fields.Weight
	}

	public set Weight(value: bigint) {
		this._fields.Weight = value
	}

	public _fields: {
		LocalAddress: net.IP
		RemoteAddress: net.IP
		LocalPort: number
		RemotePort: number
		LocalMark: string
		Proto: string
		ActiveConn: bigint
		InactConn: bigint
		Weight: bigint
	}

	constructor(init?: Partial<{LocalAddress?: net.IP, RemoteAddress?: net.IP, LocalPort?: number, RemotePort?: number, LocalMark?: string, Proto?: string, ActiveConn?: bigint, InactConn?: bigint, Weight?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			LocalAddress: init?.LocalAddress ?? (null! as net.IP),
			RemoteAddress: init?.RemoteAddress ?? (null! as net.IP),
			LocalPort: init?.LocalPort ?? (0 as number),
			RemotePort: init?.RemotePort ?? (0 as number),
			LocalMark: init?.LocalMark ?? ("" as string),
			Proto: init?.Proto ?? ("" as string),
			ActiveConn: init?.ActiveConn ?? (0n as bigint),
			InactConn: init?.InactConn ?? (0n as bigint),
			Weight: init?.Weight ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): IPVSBackendStatus {
		return new IPVSBackendStatus(this, true)
	}

	public __goscriptAssign(source: IPVSBackendStatus): void {
		const target = this._fields
		const values = source._fields
		target.LocalAddress = values.LocalAddress
		target.RemoteAddress = values.RemoteAddress
		target.LocalPort = values.LocalPort
		target.RemotePort = values.RemotePort
		target.LocalMark = values.LocalMark
		target.Proto = values.Proto
		target.ActiveConn = values.ActiveConn
		target.InactConn = values.InactConn
		target.Weight = values.Weight
	}

	static __typeInfo = $.registerStructType(
		"procfs.IPVSBackendStatus",
		() => new IPVSBackendStatus(),
		() => [],
		IPVSBackendStatus,
		() => [/* @__PURE__ */ $.structField("LocalAddress", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), [0], 0, true), /* @__PURE__ */ $.structField("RemoteAddress", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), [1], 24, true), /* @__PURE__ */ $.structField("LocalPort", /* @__PURE__ */ $.basicType("uint16"), [2], 48, true), /* @__PURE__ */ $.structField("RemotePort", /* @__PURE__ */ $.basicType("uint16"), [3], 50, true), /* @__PURE__ */ $.structField("LocalMark", /* @__PURE__ */ $.basicType("string"), [4], 56, true), /* @__PURE__ */ $.structField("Proto", /* @__PURE__ */ $.basicType("string"), [5], 72, true), /* @__PURE__ */ $.structField("ActiveConn", /* @__PURE__ */ $.basicType("uint64"), [6], 88, true), /* @__PURE__ */ $.structField("InactConn", /* @__PURE__ */ $.basicType("uint64"), [7], 96, true), /* @__PURE__ */ $.structField("Weight", /* @__PURE__ */ $.basicType("uint64"), [8], 104, true)]
	)
}

export async function parseIPVSStats(r: io.Reader | null): globalThis.Promise<[IPVSStats, $.GoError]> {
	let statContent: $.Slice<number> = null! as $.Slice<number>
	let statLines: $.Slice<string> = null! as $.Slice<string>
	let statFields: $.Slice<string> = null! as $.Slice<string>
	let stats: IPVSStats = new IPVSStats(undefined, true)

	let __goscriptTuple0: any = await ioutil.ReadAll(r)
	statContent = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [new IPVSStats(undefined, true), err]
	}

	statLines = strings.SplitN($.bytesToString(statContent), "\n", 4)
	if ($.sliceLen(statLines) != 4) {
		return [new IPVSStats(undefined, true), errors.New("ip_vs_stats corrupt: too short")]
	}

	statFields = strings.Fields($.arrayIndex(statLines!, 2))
	if ($.sliceLen(statFields) != 5) {
		return [new IPVSStats(undefined, true), errors.New("ip_vs_stats corrupt: unexpected number of fields")]
	}

	let __goscriptTuple1: any = strconv.ParseUint($.arrayIndex(statFields!, 0), 16, 64)
	stats.Connections = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return [new IPVSStats(undefined, true), err]
	}
	let __goscriptTuple2: any = strconv.ParseUint($.arrayIndex(statFields!, 1), 16, 64)
	stats.IncomingPackets = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	if (err != null) {
		return [new IPVSStats(undefined, true), err]
	}
	let __goscriptTuple3: any = strconv.ParseUint($.arrayIndex(statFields!, 2), 16, 64)
	stats.OutgoingPackets = __goscriptTuple3[0]
	err = __goscriptTuple3[1]
	if (err != null) {
		return [new IPVSStats(undefined, true), err]
	}
	let __goscriptTuple4: any = strconv.ParseUint($.arrayIndex(statFields!, 3), 16, 64)
	stats.IncomingBytes = __goscriptTuple4[0]
	err = __goscriptTuple4[1]
	if (err != null) {
		return [new IPVSStats(undefined, true), err]
	}
	let __goscriptTuple5: any = strconv.ParseUint($.arrayIndex(statFields!, 4), 16, 64)
	stats.OutgoingBytes = __goscriptTuple5[0]
	err = __goscriptTuple5[1]
	if (err != null) {
		return [new IPVSStats(undefined, true), err]
	}

	return [(stats).clone(), null]
}

export async function parseIPVSBackendStatus(file: io.Reader | null): globalThis.Promise<[$.Slice<IPVSBackendStatus>, $.GoError]> {
	let status: $.Slice<IPVSBackendStatus> = null! as $.Slice<IPVSBackendStatus>
	let scanner: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner(file)
	let proto: string = ""
	let localMark: string = ""
	let localAddress: net.IP = null! as net.IP
	let localPort: number = 0
	let err: $.GoError = null! as $.GoError

	while (await (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(scanner))) {
		let fields: $.Slice<string> = strings.Fields((scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(scanner)))
		if ($.sliceLen(fields) == 0) {
			continue
		}
		switch ((true as boolean)) {
			case (($.stringEqual($.arrayIndex(fields!, 0), "IP")) || ($.stringEqual($.arrayIndex(fields!, 0), "Prot"))) || ($.stringEqual($.arrayIndex(fields!, 1), "RemoteAddress:Port")):
			{
				continue
				break
			}
			case ($.stringEqual($.arrayIndex(fields!, 0), "TCP")) || ($.stringEqual($.arrayIndex(fields!, 0), "UDP")):
			{
				if ($.sliceLen(fields) < 2) {
					continue
				}
				proto = $.arrayIndex(fields!, 0)
				localMark = ""
				let __goscriptTuple6: any = parseIPPort($.arrayIndex(fields!, 1))
				localAddress = (__goscriptTuple6[0] as net.IP)
				localPort = __goscriptTuple6[1]
				err = __goscriptTuple6[2]
				if (err != null) {
					return [null, err]
				}
				break
			}
			case $.stringEqual($.arrayIndex(fields!, 0), "FWM"):
			{
				if ($.sliceLen(fields) < 2) {
					continue
				}
				proto = $.arrayIndex(fields!, 0)
				localMark = $.arrayIndex(fields!, 1)
				localAddress = (null as net.IP)
				localPort = 0
				break
			}
			case $.stringEqual($.arrayIndex(fields!, 0), "->"):
			{
				if ($.sliceLen(fields) < 6) {
					continue
				}
				let __goscriptTuple7: any = parseIPPort($.arrayIndex(fields!, 1))
				let remoteAddress: net.IP = (__goscriptTuple7[0] as net.IP)
				let remotePort = __goscriptTuple7[1]
				let __goscriptShadow0 = __goscriptTuple7[2]
				if (__goscriptShadow0 != null) {
					return [null, __goscriptShadow0]
				}
				let __goscriptTuple8: any = strconv.ParseUint($.arrayIndex(fields!, 3), 10, 64)
				let weight = __goscriptTuple8[0]
				__goscriptShadow0 = __goscriptTuple8[1]
				if (__goscriptShadow0 != null) {
					return [null, __goscriptShadow0]
				}
				let __goscriptTuple9: any = strconv.ParseUint($.arrayIndex(fields!, 4), 10, 64)
				let activeConn = __goscriptTuple9[0]
				__goscriptShadow0 = __goscriptTuple9[1]
				if (__goscriptShadow0 != null) {
					return [null, __goscriptShadow0]
				}
				let __goscriptTuple10: any = strconv.ParseUint($.arrayIndex(fields!, 5), 10, 64)
				let inactConn = __goscriptTuple10[0]
				__goscriptShadow0 = __goscriptTuple10[1]
				if (__goscriptShadow0 != null) {
					return [null, __goscriptShadow0]
				}
				status = $.appendOne(status, new IPVSBackendStatus({LocalAddress: (localAddress as net.IP), LocalPort: localPort, LocalMark: localMark, RemoteAddress: (remoteAddress as net.IP), RemotePort: remotePort, Proto: proto, Weight: weight, ActiveConn: activeConn, InactConn: inactConn}, true))
				break
			}
		}
	}
	return [status, null]
}

export function parseIPPort(s: string): [net.IP, number, $.GoError] {
	let ip: net.IP = null! as net.IP
	let err: $.GoError = null! as $.GoError

	switch ($.stringLen(s)) {
		case 13:
		{
			let __goscriptTuple11: any = hex.DecodeString($.sliceStringOrBytes(s, 0, 8))
			ip = (__goscriptTuple11[0] as net.IP)
			err = __goscriptTuple11[1]
			if (err != null) {
				return [(null as net.IP), 0, err]
			}
			break
		}
		case 46:
		{
			ip = (net.ParseIP($.sliceStringOrBytes(s, 1, 40)) as net.IP)
			if (ip == null) {
				return [(null as net.IP), 0, fmt.Errorf("invalid IPv6 address: %s", $.sliceStringOrBytes(s, 1, 40))]
			}
			break
		}
		default:
		{
			return [(null as net.IP), 0, fmt.Errorf("unexpected IP:Port: %s", s)]
			break
		}
	}

	let portString = $.sliceStringOrBytes(s, $.stringLen(s) - 4, undefined)
	if ($.stringLen(portString) != 4) {
		return [(null as net.IP), 0, fmt.Errorf("unexpected port string format: %s", portString)]
	}
	let __goscriptTuple12: any = strconv.ParseUint(portString, 16, 16)
	let port = __goscriptTuple12[0]
	err = __goscriptTuple12[1]
	if (err != null) {
		return [(null as net.IP), 0, err]
	}

	return [(ip as net.IP), $.uint(port, 16), null]
}
