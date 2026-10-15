// Generated file based on net_softnet.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

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

import type * as __goscript_net_ip_socket from "./net_ip_socket.gs.ts"

import * as __goscript_net_protocols from "./net_protocols.gs.ts"

import * as __goscript_net_sockstat from "./net_sockstat.gs.ts"

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
import "@goscript/io/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/prometheus/procfs/internal/util/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "@goscript/net/index.js"
import "./mountstats.gs.ts"
import "./net_protocols.gs.ts"
import "./net_sockstat.gs.ts"
import "./net_unix.gs.ts"
import "./proc_fdinfo.gs.ts"
import "./proc_psi.gs.ts"
import "./schedstat.gs.ts"
import "./slab.gs.ts"
import "./stat.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.SoftnetStat"])

export class SoftnetStat {
	// Number of processed packets
	public get Processed(): number {
		return this._fields.Processed
	}

	public set Processed(value: number) {
		this._fields.Processed = value
	}

	// Number of dropped packets
	public get Dropped(): number {
		return this._fields.Dropped
	}

	public set Dropped(value: number) {
		this._fields.Dropped = value
	}

	// Number of times processing packets ran out of quota
	public get TimeSqueezed(): number {
		return this._fields.TimeSqueezed
	}

	public set TimeSqueezed(value: number) {
		this._fields.TimeSqueezed = value
	}

	public _fields: {
		Processed: number
		Dropped: number
		TimeSqueezed: number
	}

	constructor(init?: Partial<{Processed?: number, Dropped?: number, TimeSqueezed?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Processed: init?.Processed ?? (0 as number),
			Dropped: init?.Dropped ?? (0 as number),
			TimeSqueezed: init?.TimeSqueezed ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SoftnetStat {
		return new SoftnetStat(this, true)
	}

	public __goscriptAssign(source: SoftnetStat): void {
		const target = this._fields
		const values = source._fields
		target.Processed = values.Processed
		target.Dropped = values.Dropped
		target.TimeSqueezed = values.TimeSqueezed
	}

	static __typeInfo = $.registerStructType(
		"procfs.SoftnetStat",
		() => new SoftnetStat(),
		() => [],
		SoftnetStat,
		() => [/* @__PURE__ */ $.structField("Processed", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true), /* @__PURE__ */ $.structField("Dropped", /* @__PURE__ */ $.basicType("uint32"), [1], 4, true), /* @__PURE__ */ $.structField("TimeSqueezed", /* @__PURE__ */ $.basicType("uint32"), [2], 8, true)]
	)
}

export let softNetProcFile: string = "net/softnet_stat"

export function __goscript_set_softNetProcFile(__goscriptValue: string): void {
	softNetProcFile = __goscriptValue
}

export async function parseSoftnet(r: io.Reader | null): globalThis.Promise<[$.Slice<SoftnetStat>, $.GoError]> {
	const minColumns: number = 9

	let s: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner(r)

	let stats: $.Slice<SoftnetStat> = null! as $.Slice<SoftnetStat>
	while (await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))) {
		let columns: $.Slice<string> = strings.Fields((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s)))
		let width = $.sliceLen(columns)

		if (width < 9) {
			return [null, fmt.Errorf("%d columns were detected, but at least %d were expected", $.basicInterfaceValue(width, "int"), $.basicInterfaceValue(9, "int"))]
		}

		// We only parse the first three columns at the moment.
		let __goscriptTuple0: any = parseHexUint32s($.goSlice(columns, 0, 3))
		let us: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}

		stats = $.appendOne(stats, new SoftnetStat({Processed: $.arrayIndex(us!, 0), Dropped: $.arrayIndex(us!, 1), TimeSqueezed: $.arrayIndex(us!, 2)}, true))
	}

	return [stats, null]
}

export function parseHexUint32s(ss: $.Slice<string>): [$.Slice<number>, $.GoError] {
	let us: $.Slice<number> = $.makeSlice<number>(0, $.sliceLen(ss), "number")
	for (let __goscriptRangeTarget0 = ss, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let s = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		let [u, err] = strconv.ParseUint(s, 16, 32)
		if (err != null) {
			return [null, err]
		}

		us = $.appendOne(us, $.uint($.uint(u, 32), 32))
	}

	return [us, null]
}
