// Generated file based on net_udp.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fs2 from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

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

import * as __goscript_net_ip_socket from "./net_ip_socket.gs.ts"

import * as __goscript_net_protocols from "./net_protocols.gs.ts"

import * as __goscript_net_sockstat from "./net_sockstat.gs.ts"

import type * as __goscript_net_softnet from "./net_softnet.gs.ts"

import type * as __goscript_net_tcp from "./net_tcp.gs.ts"

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
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "@goscript/net/index.js"
import "./mountstats.gs.ts"
import "./net_ip_socket.gs.ts"
import "./net_protocols.gs.ts"
import "./net_sockstat.gs.ts"
import "./net_unix.gs.ts"
import "./proc_fdinfo.gs.ts"
import "./proc_psi.gs.ts"
import "./schedstat.gs.ts"
import "./slab.gs.ts"
import "./stat.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.NetUDP", "procfs.NetUDPSummary"])

export type NetUDP = $.Slice<__goscript_net_ip_socket.netIPSocketLine | $.VarRef<__goscript_net_ip_socket.netIPSocketLine> | null>

$.registerNamedType("procfs.NetUDP", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("procfs.netIPSocketLine")));

export class NetUDPSummary {
	public get TxQueueLength(): bigint {
		return this._fields.TxQueueLength
	}

	public set TxQueueLength(value: bigint) {
		this._fields.TxQueueLength = value
	}

	public get RxQueueLength(): bigint {
		return this._fields.RxQueueLength
	}

	public set RxQueueLength(value: bigint) {
		this._fields.RxQueueLength = value
	}

	public get UsedSockets(): bigint {
		return this._fields.UsedSockets
	}

	public set UsedSockets(value: bigint) {
		this._fields.UsedSockets = value
	}

	public _fields: {
		TxQueueLength: bigint
		RxQueueLength: bigint
		UsedSockets: bigint
	}

	constructor(init?: Partial<{TxQueueLength?: bigint, RxQueueLength?: bigint, UsedSockets?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			TxQueueLength: init?.TxQueueLength ?? (0n as bigint),
			RxQueueLength: init?.RxQueueLength ?? (0n as bigint),
			UsedSockets: init?.UsedSockets ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NetUDPSummary {
		return new NetUDPSummary(this, true)
	}

	public __goscriptAssign(source: NetUDPSummary): void {
		const target = this._fields
		const values = source._fields
		target.TxQueueLength = values.TxQueueLength
		target.RxQueueLength = values.RxQueueLength
		target.UsedSockets = values.UsedSockets
	}

	static __typeInfo = $.registerStructType(
		"procfs.NetUDPSummary",
		() => new NetUDPSummary(),
		() => [],
		NetUDPSummary,
		() => [/* @__PURE__ */ $.structField("TxQueueLength", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("RxQueueLength", /* @__PURE__ */ $.basicType("uint64"), [1], 8, true), /* @__PURE__ */ $.structField("UsedSockets", /* @__PURE__ */ $.basicType("uint64"), [2], 16, true)]
	)
}

export async function newNetUDP(file: string): globalThis.Promise<[NetUDP, $.GoError]> {
	let __goscriptTuple0: any = await __goscript_net_ip_socket.newNetIPSocket(file)
	let n: __goscript_net_ip_socket.NetIPSocket = (__goscriptTuple0[0] as __goscript_net_ip_socket.NetIPSocket)
	let err = __goscriptTuple0[1]
	let n1: NetUDP = ((n as NetUDP) as NetUDP)
	return [(n1 as NetUDP), err]
}

export async function newNetUDPSummary(file: string): globalThis.Promise<[NetUDPSummary | $.VarRef<NetUDPSummary> | null, $.GoError]> {
	let __goscriptTuple1: any = await __goscript_net_ip_socket.newNetIPSocketSummary(file)
	let n: __goscript_net_ip_socket.NetIPSocketSummary | $.VarRef<__goscript_net_ip_socket.NetIPSocketSummary> | null = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (n == null) {
		return [null, err]
	}
	let n1 = $.varRef(((() => { const __goscriptConvert0 = $.pointerValue<__goscript_net_ip_socket.NetIPSocketSummary>(n); return $.markAsStructValue(new NetUDPSummary({TxQueueLength: __goscriptConvert0.TxQueueLength, RxQueueLength: __goscriptConvert0.RxQueueLength, UsedSockets: __goscriptConvert0.UsedSockets})) })()).clone())
	return [n1, err]
}
