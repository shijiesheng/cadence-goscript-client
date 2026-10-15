// Generated file based on schedstat.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as errors from "@goscript/errors/index.js"

import * as os from "@goscript/os/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as strconv from "@goscript/strconv/index.js"

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

import * as __goscript_slab from "./slab.gs.ts"

import * as __goscript_stat from "./stat.gs.ts"

import type * as __goscript_swaps from "./swaps.gs.ts"

import type * as __goscript_vm from "./vm.gs.ts"

import type * as __goscript_xfrm from "./xfrm.gs.ts"

import type * as __goscript_zoneinfo from "./zoneinfo.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/errors/index.js"
import "@goscript/os/index.js"
import "@goscript/regexp/index.js"
import "@goscript/strconv/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "@goscript/net/index.js"
import "./mountstats.gs.ts"
import "./net_protocols.gs.ts"
import "./net_sockstat.gs.ts"
import "./net_unix.gs.ts"
import "./proc_fdinfo.gs.ts"
import "./proc_psi.gs.ts"
import "./slab.gs.ts"
import "./stat.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.Schedstat", "procfs.SchedstatCPU", "procfs.ProcSchedstat"])

export class Schedstat {
	public get CPUs(): $.Slice<SchedstatCPU | $.VarRef<SchedstatCPU> | null> {
		return this._fields.CPUs
	}

	public set CPUs(value: $.Slice<SchedstatCPU | $.VarRef<SchedstatCPU> | null>) {
		this._fields.CPUs = value
	}

	public _fields: {
		CPUs: $.Slice<SchedstatCPU | $.VarRef<SchedstatCPU> | null>
	}

	constructor(init?: Partial<{CPUs?: $.Slice<SchedstatCPU | $.VarRef<SchedstatCPU> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			CPUs: init?.CPUs ?? (null! as $.Slice<SchedstatCPU | $.VarRef<SchedstatCPU> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Schedstat {
		return new Schedstat(this, true)
	}

	public __goscriptAssign(source: Schedstat): void {
		const target = this._fields
		const values = source._fields
		target.CPUs = values.CPUs
	}

	static __typeInfo = $.registerStructType(
		"procfs.Schedstat",
		() => new Schedstat(),
		() => [],
		Schedstat,
		() => [/* @__PURE__ */ $.structField("CPUs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("procfs.SchedstatCPU")), [0], 0, true)]
	)
}

export class SchedstatCPU {
	public get CPUNum(): string {
		return this._fields.CPUNum
	}

	public set CPUNum(value: string) {
		this._fields.CPUNum = value
	}

	public get RunningNanoseconds(): bigint {
		return this._fields.RunningNanoseconds
	}

	public set RunningNanoseconds(value: bigint) {
		this._fields.RunningNanoseconds = value
	}

	public get WaitingNanoseconds(): bigint {
		return this._fields.WaitingNanoseconds
	}

	public set WaitingNanoseconds(value: bigint) {
		this._fields.WaitingNanoseconds = value
	}

	public get RunTimeslices(): bigint {
		return this._fields.RunTimeslices
	}

	public set RunTimeslices(value: bigint) {
		this._fields.RunTimeslices = value
	}

	public _fields: {
		CPUNum: string
		RunningNanoseconds: bigint
		WaitingNanoseconds: bigint
		RunTimeslices: bigint
	}

	constructor(init?: Partial<{CPUNum?: string, RunningNanoseconds?: bigint, WaitingNanoseconds?: bigint, RunTimeslices?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			CPUNum: init?.CPUNum ?? ("" as string),
			RunningNanoseconds: init?.RunningNanoseconds ?? (0n as bigint),
			WaitingNanoseconds: init?.WaitingNanoseconds ?? (0n as bigint),
			RunTimeslices: init?.RunTimeslices ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SchedstatCPU {
		return new SchedstatCPU(this, true)
	}

	public __goscriptAssign(source: SchedstatCPU): void {
		const target = this._fields
		const values = source._fields
		target.CPUNum = values.CPUNum
		target.RunningNanoseconds = values.RunningNanoseconds
		target.WaitingNanoseconds = values.WaitingNanoseconds
		target.RunTimeslices = values.RunTimeslices
	}

	static __typeInfo = $.registerStructType(
		"procfs.SchedstatCPU",
		() => new SchedstatCPU(),
		() => [],
		SchedstatCPU,
		() => [/* @__PURE__ */ $.structField("CPUNum", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("RunningNanoseconds", /* @__PURE__ */ $.basicType("uint64"), [1], 16, true), /* @__PURE__ */ $.structField("WaitingNanoseconds", /* @__PURE__ */ $.basicType("uint64"), [2], 24, true), /* @__PURE__ */ $.structField("RunTimeslices", /* @__PURE__ */ $.basicType("uint64"), [3], 32, true)]
	)
}

export class ProcSchedstat {
	public get RunningNanoseconds(): bigint {
		return this._fields.RunningNanoseconds
	}

	public set RunningNanoseconds(value: bigint) {
		this._fields.RunningNanoseconds = value
	}

	public get WaitingNanoseconds(): bigint {
		return this._fields.WaitingNanoseconds
	}

	public set WaitingNanoseconds(value: bigint) {
		this._fields.WaitingNanoseconds = value
	}

	public get RunTimeslices(): bigint {
		return this._fields.RunTimeslices
	}

	public set RunTimeslices(value: bigint) {
		this._fields.RunTimeslices = value
	}

	public _fields: {
		RunningNanoseconds: bigint
		WaitingNanoseconds: bigint
		RunTimeslices: bigint
	}

	constructor(init?: Partial<{RunningNanoseconds?: bigint, WaitingNanoseconds?: bigint, RunTimeslices?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			RunningNanoseconds: init?.RunningNanoseconds ?? (0n as bigint),
			WaitingNanoseconds: init?.WaitingNanoseconds ?? (0n as bigint),
			RunTimeslices: init?.RunTimeslices ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ProcSchedstat {
		return new ProcSchedstat(this, true)
	}

	public __goscriptAssign(source: ProcSchedstat): void {
		const target = this._fields
		const values = source._fields
		target.RunningNanoseconds = values.RunningNanoseconds
		target.WaitingNanoseconds = values.WaitingNanoseconds
		target.RunTimeslices = values.RunTimeslices
	}

	static __typeInfo = $.registerStructType(
		"procfs.ProcSchedstat",
		() => new ProcSchedstat(),
		() => [],
		ProcSchedstat,
		() => [/* @__PURE__ */ $.structField("RunningNanoseconds", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("WaitingNanoseconds", /* @__PURE__ */ $.basicType("uint64"), [1], 8, true), /* @__PURE__ */ $.structField("RunTimeslices", /* @__PURE__ */ $.basicType("uint64"), [2], 16, true)]
	)
}

export let cpuLineRE: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("cpu(\\d+) (\\d+) (\\d+) (\\d+) (\\d+) (\\d+) (\\d+) (\\d+) (\\d+) (\\d+)")

export function __goscript_set_cpuLineRE(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	cpuLineRE = __goscriptValue
}

export let procLineRE: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("(\\d+) (\\d+) (\\d+)")

export function __goscript_set_procLineRE(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	procLineRE = __goscriptValue
}

export async function parseProcSchedstat(contents: string): globalThis.Promise<[ProcSchedstat, $.GoError]> {
	let stats: ProcSchedstat = new ProcSchedstat(undefined, true)
	let err: $.GoError = null! as $.GoError
	let match: $.Slice<string> = await (procLineRE !== null && (procLineRE as any).__isVarRef !== true && (procLineRE as any).__goValue === undefined ? ((procLineRE as any) as regexp.Regexp).FindStringSubmatch(contents) : regexp.Regexp.prototype.FindStringSubmatch.call(procLineRE, contents))

	if (match != null) {
		let __goscriptTuple0: any = strconv.ParseUint($.arrayIndex(match!, 1), 10, 64)
		stats.RunningNanoseconds = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [(stats).clone(), err]
		}

		let __goscriptTuple1: any = strconv.ParseUint($.arrayIndex(match!, 2), 10, 64)
		stats.WaitingNanoseconds = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [(stats).clone(), err]
		}

		let __goscriptTuple2: any = strconv.ParseUint($.arrayIndex(match!, 3), 10, 64)
		stats.RunTimeslices = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		return [(stats).clone(), err]
	}

	return [(stats).clone(), errors.New("could not parse schedstat")]
}
