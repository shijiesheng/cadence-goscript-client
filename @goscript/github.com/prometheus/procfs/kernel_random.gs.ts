// Generated file based on kernel_random.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as os from "@goscript/os/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

import * as fs2 from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import * as net from "@goscript/net/index.js"

import type * as __goscript_arp from "./arp.gs.ts"

import type * as __goscript_buddyinfo from "./buddyinfo.gs.ts"

import type * as __goscript_crypto from "./crypto.gs.ts"

import type * as __goscript_fs from "./fs.gs.ts"

import type * as __goscript_fscache from "./fscache.gs.ts"

import type * as __goscript_ipvs from "./ipvs.gs.ts"

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
import "@goscript/os/index.js"
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

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.KernelRandom"])

export class KernelRandom {
	// EntropyAvaliable gives the available entropy, in bits.
	public get EntropyAvaliable(): $.VarRef<bigint> | null {
		return this._fields.EntropyAvaliable
	}

	public set EntropyAvaliable(value: $.VarRef<bigint> | null) {
		this._fields.EntropyAvaliable = value
	}

	// PoolSize gives the size of the entropy pool, in bits.
	public get PoolSize(): $.VarRef<bigint> | null {
		return this._fields.PoolSize
	}

	public set PoolSize(value: $.VarRef<bigint> | null) {
		this._fields.PoolSize = value
	}

	// URandomMinReseedSeconds is the number of seconds after which the DRNG will be reseeded.
	public get URandomMinReseedSeconds(): $.VarRef<bigint> | null {
		return this._fields.URandomMinReseedSeconds
	}

	public set URandomMinReseedSeconds(value: $.VarRef<bigint> | null) {
		this._fields.URandomMinReseedSeconds = value
	}

	// WriteWakeupThreshold the number of bits of entropy below which we wake up processes
	// that do a select(2) or poll(2) for write access to /dev/random.
	public get WriteWakeupThreshold(): $.VarRef<bigint> | null {
		return this._fields.WriteWakeupThreshold
	}

	public set WriteWakeupThreshold(value: $.VarRef<bigint> | null) {
		this._fields.WriteWakeupThreshold = value
	}

	// ReadWakeupThreshold is the number of bits of entropy required for waking up processes that sleep
	// waiting for entropy from /dev/random.
	public get ReadWakeupThreshold(): $.VarRef<bigint> | null {
		return this._fields.ReadWakeupThreshold
	}

	public set ReadWakeupThreshold(value: $.VarRef<bigint> | null) {
		this._fields.ReadWakeupThreshold = value
	}

	public _fields: {
		EntropyAvaliable: $.VarRef<bigint> | null
		PoolSize: $.VarRef<bigint> | null
		URandomMinReseedSeconds: $.VarRef<bigint> | null
		WriteWakeupThreshold: $.VarRef<bigint> | null
		ReadWakeupThreshold: $.VarRef<bigint> | null
	}

	constructor(init?: Partial<{EntropyAvaliable?: $.VarRef<bigint> | null, PoolSize?: $.VarRef<bigint> | null, URandomMinReseedSeconds?: $.VarRef<bigint> | null, WriteWakeupThreshold?: $.VarRef<bigint> | null, ReadWakeupThreshold?: $.VarRef<bigint> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			EntropyAvaliable: init?.EntropyAvaliable ?? (null! as $.VarRef<bigint> | null),
			PoolSize: init?.PoolSize ?? (null! as $.VarRef<bigint> | null),
			URandomMinReseedSeconds: init?.URandomMinReseedSeconds ?? (null! as $.VarRef<bigint> | null),
			WriteWakeupThreshold: init?.WriteWakeupThreshold ?? (null! as $.VarRef<bigint> | null),
			ReadWakeupThreshold: init?.ReadWakeupThreshold ?? (null! as $.VarRef<bigint> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): KernelRandom {
		return new KernelRandom(this, true)
	}

	public __goscriptAssign(source: KernelRandom): void {
		const target = this._fields
		const values = source._fields
		target.EntropyAvaliable = values.EntropyAvaliable
		target.PoolSize = values.PoolSize
		target.URandomMinReseedSeconds = values.URandomMinReseedSeconds
		target.WriteWakeupThreshold = values.WriteWakeupThreshold
		target.ReadWakeupThreshold = values.ReadWakeupThreshold
	}

	static __typeInfo = $.registerStructType(
		"procfs.KernelRandom",
		() => new KernelRandom(),
		() => [],
		KernelRandom,
		() => [/* @__PURE__ */ $.structField("EntropyAvaliable", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [0], 0, true), /* @__PURE__ */ $.structField("PoolSize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [1], 8, true), /* @__PURE__ */ $.structField("URandomMinReseedSeconds", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [2], 16, true), /* @__PURE__ */ $.structField("WriteWakeupThreshold", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [3], 24, true), /* @__PURE__ */ $.structField("ReadWakeupThreshold", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [4], 32, true)]
	)
}
