// Generated file based on loadavg.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

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
import "@goscript/fmt/index.js"
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

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.LoadAvg"])

export class LoadAvg {
	public get Load1(): number {
		return this._fields.Load1
	}

	public set Load1(value: number) {
		this._fields.Load1 = value
	}

	public get Load5(): number {
		return this._fields.Load5
	}

	public set Load5(value: number) {
		this._fields.Load5 = value
	}

	public get Load15(): number {
		return this._fields.Load15
	}

	public set Load15(value: number) {
		this._fields.Load15 = value
	}

	public _fields: {
		Load1: number
		Load5: number
		Load15: number
	}

	constructor(init?: Partial<{Load1?: number, Load5?: number, Load15?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Load1: init?.Load1 ?? (0 as number),
			Load5: init?.Load5 ?? (0 as number),
			Load15: init?.Load15 ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LoadAvg {
		return new LoadAvg(this, true)
	}

	public __goscriptAssign(source: LoadAvg): void {
		const target = this._fields
		const values = source._fields
		target.Load1 = values.Load1
		target.Load5 = values.Load5
		target.Load15 = values.Load15
	}

	static __typeInfo = $.registerStructType(
		"procfs.LoadAvg",
		() => new LoadAvg(),
		() => [],
		LoadAvg,
		() => [/* @__PURE__ */ $.structField("Load1", /* @__PURE__ */ $.basicType("float64"), [0], 0, true), /* @__PURE__ */ $.structField("Load5", /* @__PURE__ */ $.basicType("float64"), [1], 8, true), /* @__PURE__ */ $.structField("Load15", /* @__PURE__ */ $.basicType("float64"), [2], 16, true)]
	)
}

export function parseLoad(loadavgBytes: $.Slice<number>): [LoadAvg | $.VarRef<LoadAvg> | null, $.GoError] {
	let loads: $.Slice<number> = $.makeSlice<number>(3, undefined, "number")
	let parts: $.Slice<string> = strings.Fields($.bytesToString(loadavgBytes))
	if ($.sliceLen(parts) < 3) {
		return [null, fmt.Errorf("malformed loadavg line: too few fields in loadavg string: %q", $.bytesToString(loadavgBytes))]
	}

	let err: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget0 = $.goSlice(parts, 0, 3), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(loads), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let load = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as string)
		let __goscriptTuple0: any = strconv.ParseFloat(load, 64);
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, fmt.Errorf("could not parse load %q: %w", load, (err as any))]
		}
	}
	return [new LoadAvg({Load1: $.arrayIndex(loads!, 0), Load5: $.arrayIndex(loads!, 1), Load15: $.arrayIndex(loads!, 2)}), null]
}
