// Generated file based on proc_stat.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as os from "@goscript/os/index.js"

import * as fs2 from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

import type * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as __goscript_arp from "./arp.gs.ts"

import * as __goscript_buddyinfo from "./buddyinfo.gs.ts"

import * as __goscript_crypto from "./crypto.gs.ts"

import * as __goscript_fs from "./fs.gs.ts"

import * as __goscript_fscache from "./fscache.gs.ts"

import * as __goscript_ipvs from "./ipvs.gs.ts"

import * as __goscript_kernel_random from "./kernel_random.gs.ts"

import * as __goscript_loadavg from "./loadavg.gs.ts"

import * as __goscript_mdstat from "./mdstat.gs.ts"

import * as __goscript_meminfo from "./meminfo.gs.ts"

import type * as __goscript_mountinfo from "./mountinfo.gs.ts"

import * as __goscript_mountstats from "./mountstats.gs.ts"

import * as __goscript_net_conntrackstat from "./net_conntrackstat.gs.ts"

import * as __goscript_net_dev from "./net_dev.gs.ts"

import type * as __goscript_net_ip_socket from "./net_ip_socket.gs.ts"

import * as __goscript_net_protocols from "./net_protocols.gs.ts"

import * as __goscript_net_sockstat from "./net_sockstat.gs.ts"

import * as __goscript_net_softnet from "./net_softnet.gs.ts"

import * as __goscript_net_tcp from "./net_tcp.gs.ts"

import * as __goscript_net_udp from "./net_udp.gs.ts"

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

import type * as __goscript_proc_status from "./proc_status.gs.ts"

import * as __goscript_schedstat from "./schedstat.gs.ts"

import * as __goscript_slab from "./slab.gs.ts"

import * as __goscript_stat from "./stat.gs.ts"

import * as __goscript_swaps from "./swaps.gs.ts"

import * as __goscript_vm from "./vm.gs.ts"

import * as __goscript_xfrm from "./xfrm.gs.ts"

import * as __goscript_zoneinfo from "./zoneinfo.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/os/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "@goscript/github.com/prometheus/procfs/internal/util/index.js"
import "@goscript/net/index.js"
import "./arp.gs.ts"
import "./buddyinfo.gs.ts"
import "./crypto.gs.ts"
import "./fs.gs.ts"
import "./fscache.gs.ts"
import "./ipvs.gs.ts"
import "./kernel_random.gs.ts"
import "./loadavg.gs.ts"
import "./mdstat.gs.ts"
import "./meminfo.gs.ts"
import "./mountstats.gs.ts"
import "./net_conntrackstat.gs.ts"
import "./net_dev.gs.ts"
import "./net_protocols.gs.ts"
import "./net_sockstat.gs.ts"
import "./net_softnet.gs.ts"
import "./net_tcp.gs.ts"
import "./net_udp.gs.ts"
import "./net_unix.gs.ts"
import "./proc.gs.ts"
import "./proc_fdinfo.gs.ts"
import "./proc_psi.gs.ts"
import "./schedstat.gs.ts"
import "./slab.gs.ts"
import "./stat.gs.ts"
import "./swaps.gs.ts"
import "./vm.gs.ts"
import "./xfrm.gs.ts"
import "./zoneinfo.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.ProcStat"])

export class ProcStat {
	// The process ID.
	public get PID(): number {
		return this._fields.PID
	}

	public set PID(value: number) {
		this._fields.PID = value
	}

	// The filename of the executable.
	public get Comm(): string {
		return this._fields.Comm
	}

	public set Comm(value: string) {
		this._fields.Comm = value
	}

	// The process state.
	public get State(): string {
		return this._fields.State
	}

	public set State(value: string) {
		this._fields.State = value
	}

	// The PID of the parent of this process.
	public get PPID(): number {
		return this._fields.PPID
	}

	public set PPID(value: number) {
		this._fields.PPID = value
	}

	// The process group ID of the process.
	public get PGRP(): number {
		return this._fields.PGRP
	}

	public set PGRP(value: number) {
		this._fields.PGRP = value
	}

	// The session ID of the process.
	public get Session(): number {
		return this._fields.Session
	}

	public set Session(value: number) {
		this._fields.Session = value
	}

	// The controlling terminal of the process.
	public get TTY(): number {
		return this._fields.TTY
	}

	public set TTY(value: number) {
		this._fields.TTY = value
	}

	// The ID of the foreground process group of the controlling terminal of
	// the process.
	public get TPGID(): number {
		return this._fields.TPGID
	}

	public set TPGID(value: number) {
		this._fields.TPGID = value
	}

	// The kernel flags word of the process.
	public get Flags(): number {
		return this._fields.Flags
	}

	public set Flags(value: number) {
		this._fields.Flags = value
	}

	// The number of minor faults the process has made which have not required
	// loading a memory page from disk.
	public get MinFlt(): number {
		return this._fields.MinFlt
	}

	public set MinFlt(value: number) {
		this._fields.MinFlt = value
	}

	// The number of minor faults that the process's waited-for children have
	// made.
	public get CMinFlt(): number {
		return this._fields.CMinFlt
	}

	public set CMinFlt(value: number) {
		this._fields.CMinFlt = value
	}

	// The number of major faults the process has made which have required
	// loading a memory page from disk.
	public get MajFlt(): number {
		return this._fields.MajFlt
	}

	public set MajFlt(value: number) {
		this._fields.MajFlt = value
	}

	// The number of major faults that the process's waited-for children have
	// made.
	public get CMajFlt(): number {
		return this._fields.CMajFlt
	}

	public set CMajFlt(value: number) {
		this._fields.CMajFlt = value
	}

	// Amount of time that this process has been scheduled in user mode,
	// measured in clock ticks.
	public get UTime(): number {
		return this._fields.UTime
	}

	public set UTime(value: number) {
		this._fields.UTime = value
	}

	// Amount of time that this process has been scheduled in kernel mode,
	// measured in clock ticks.
	public get STime(): number {
		return this._fields.STime
	}

	public set STime(value: number) {
		this._fields.STime = value
	}

	// Amount of time that this process's waited-for children have been
	// scheduled in user mode, measured in clock ticks.
	public get CUTime(): number {
		return this._fields.CUTime
	}

	public set CUTime(value: number) {
		this._fields.CUTime = value
	}

	// Amount of time that this process's waited-for children have been
	// scheduled in kernel mode, measured in clock ticks.
	public get CSTime(): number {
		return this._fields.CSTime
	}

	public set CSTime(value: number) {
		this._fields.CSTime = value
	}

	// For processes running a real-time scheduling policy, this is the negated
	// scheduling priority, minus one.
	public get Priority(): number {
		return this._fields.Priority
	}

	public set Priority(value: number) {
		this._fields.Priority = value
	}

	// The nice value, a value in the range 19 (low priority) to -20 (high
	// priority).
	public get Nice(): number {
		return this._fields.Nice
	}

	public set Nice(value: number) {
		this._fields.Nice = value
	}

	// Number of threads in this process.
	public get NumThreads(): number {
		return this._fields.NumThreads
	}

	public set NumThreads(value: number) {
		this._fields.NumThreads = value
	}

	// The time the process started after system boot, the value is expressed
	// in clock ticks.
	public get Starttime(): bigint {
		return this._fields.Starttime
	}

	public set Starttime(value: bigint) {
		this._fields.Starttime = value
	}

	// Virtual memory size in bytes.
	public get VSize(): number {
		return this._fields.VSize
	}

	public set VSize(value: number) {
		this._fields.VSize = value
	}

	// Resident set size in pages.
	public get RSS(): number {
		return this._fields.RSS
	}

	public set RSS(value: number) {
		this._fields.RSS = value
	}

	public get proc(): fs2.FS {
		return this._fields.proc
	}

	public set proc(value: fs2.FS) {
		this._fields.proc = value
	}

	public _fields: {
		PID: number
		Comm: string
		State: string
		PPID: number
		PGRP: number
		Session: number
		TTY: number
		TPGID: number
		Flags: number
		MinFlt: number
		CMinFlt: number
		MajFlt: number
		CMajFlt: number
		UTime: number
		STime: number
		CUTime: number
		CSTime: number
		Priority: number
		Nice: number
		NumThreads: number
		Starttime: bigint
		VSize: number
		RSS: number
		proc: fs2.FS
	}

	constructor(init?: Partial<{PID?: number, Comm?: string, State?: string, PPID?: number, PGRP?: number, Session?: number, TTY?: number, TPGID?: number, Flags?: number, MinFlt?: number, CMinFlt?: number, MajFlt?: number, CMajFlt?: number, UTime?: number, STime?: number, CUTime?: number, CSTime?: number, Priority?: number, Nice?: number, NumThreads?: number, Starttime?: bigint, VSize?: number, RSS?: number, proc?: fs2.FS}>, __goscriptValue?: boolean) {
		this._fields = {
			PID: init?.PID ?? (0 as number),
			Comm: init?.Comm ?? ("" as string),
			State: init?.State ?? ("" as string),
			PPID: init?.PPID ?? (0 as number),
			PGRP: init?.PGRP ?? (0 as number),
			Session: init?.Session ?? (0 as number),
			TTY: init?.TTY ?? (0 as number),
			TPGID: init?.TPGID ?? (0 as number),
			Flags: init?.Flags ?? (0 as number),
			MinFlt: init?.MinFlt ?? (0 as number),
			CMinFlt: init?.CMinFlt ?? (0 as number),
			MajFlt: init?.MajFlt ?? (0 as number),
			CMajFlt: init?.CMajFlt ?? (0 as number),
			UTime: init?.UTime ?? (0 as number),
			STime: init?.STime ?? (0 as number),
			CUTime: init?.CUTime ?? (0 as number),
			CSTime: init?.CSTime ?? (0 as number),
			Priority: init?.Priority ?? (0 as number),
			Nice: init?.Nice ?? (0 as number),
			NumThreads: init?.NumThreads ?? (0 as number),
			Starttime: init?.Starttime ?? (0n as bigint),
			VSize: init?.VSize ?? (0 as number),
			RSS: init?.RSS ?? (0 as number),
			proc: init?.proc ?? ("" as fs2.FS)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ProcStat {
		return new ProcStat(this, true)
	}

	public __goscriptAssign(source: ProcStat): void {
		const target = this._fields
		const values = source._fields
		target.PID = values.PID
		target.Comm = values.Comm
		target.State = values.State
		target.PPID = values.PPID
		target.PGRP = values.PGRP
		target.Session = values.Session
		target.TTY = values.TTY
		target.TPGID = values.TPGID
		target.Flags = values.Flags
		target.MinFlt = values.MinFlt
		target.CMinFlt = values.CMinFlt
		target.MajFlt = values.MajFlt
		target.CMajFlt = values.CMajFlt
		target.UTime = values.UTime
		target.STime = values.STime
		target.CUTime = values.CUTime
		target.CSTime = values.CSTime
		target.Priority = values.Priority
		target.Nice = values.Nice
		target.NumThreads = values.NumThreads
		target.Starttime = values.Starttime
		target.VSize = values.VSize
		target.RSS = values.RSS
		target.proc = values.proc
	}

	public CPUTime(): number {
		const s = this;
		return ($.uint($.uint64Add(s.UTime, s.STime), 64)) / 100
	}

	public ResidentMemory(): number {
		const s = this;
		return s.RSS * os.Getpagesize()
	}

	public async StartTime(): globalThis.Promise<[number, $.GoError]> {
		const s = this;
		let __goscriptShadow0 = new __goscript_fs.FS({proc: s.proc}, true)
		let [stat, err] = await __goscriptShadow0.Stat()
		if (err != null) {
			return [0, err]
		}
		return [globalThis.Number(stat.BootTime) + (globalThis.Number(s.Starttime) / 100), null]
	}

	public VirtualMemory(): number {
		const s = this;
		return s.VSize
	}

	static __typeInfo = $.registerStructType(
		"procfs.ProcStat",
		() => new ProcStat(),
		() => [$.methodSignature("CPUTime", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("ResidentMemory", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("StartTime", [], [/* @__PURE__ */ $.basicType("float64"), "error"]), $.methodSignature("VirtualMemory", [], [/* @__PURE__ */ $.basicType("uint")])],
		ProcStat,
		() => [/* @__PURE__ */ $.structField("PID", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("Comm", /* @__PURE__ */ $.basicType("string"), [1], 8, true), /* @__PURE__ */ $.structField("State", /* @__PURE__ */ $.basicType("string"), [2], 24, true), /* @__PURE__ */ $.structField("PPID", /* @__PURE__ */ $.basicType("int"), [3], 40, true), /* @__PURE__ */ $.structField("PGRP", /* @__PURE__ */ $.basicType("int"), [4], 48, true), /* @__PURE__ */ $.structField("Session", /* @__PURE__ */ $.basicType("int"), [5], 56, true), /* @__PURE__ */ $.structField("TTY", /* @__PURE__ */ $.basicType("int"), [6], 64, true), /* @__PURE__ */ $.structField("TPGID", /* @__PURE__ */ $.basicType("int"), [7], 72, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint"), [8], 80, true), /* @__PURE__ */ $.structField("MinFlt", /* @__PURE__ */ $.basicType("uint"), [9], 88, true), /* @__PURE__ */ $.structField("CMinFlt", /* @__PURE__ */ $.basicType("uint"), [10], 96, true), /* @__PURE__ */ $.structField("MajFlt", /* @__PURE__ */ $.basicType("uint"), [11], 104, true), /* @__PURE__ */ $.structField("CMajFlt", /* @__PURE__ */ $.basicType("uint"), [12], 112, true), /* @__PURE__ */ $.structField("UTime", /* @__PURE__ */ $.basicType("uint"), [13], 120, true), /* @__PURE__ */ $.structField("STime", /* @__PURE__ */ $.basicType("uint"), [14], 128, true), /* @__PURE__ */ $.structField("CUTime", /* @__PURE__ */ $.basicType("uint"), [15], 136, true), /* @__PURE__ */ $.structField("CSTime", /* @__PURE__ */ $.basicType("uint"), [16], 144, true), /* @__PURE__ */ $.structField("Priority", /* @__PURE__ */ $.basicType("int"), [17], 152, true), /* @__PURE__ */ $.structField("Nice", /* @__PURE__ */ $.basicType("int"), [18], 160, true), /* @__PURE__ */ $.structField("NumThreads", /* @__PURE__ */ $.basicType("int"), [19], 168, true), /* @__PURE__ */ $.structField("Starttime", /* @__PURE__ */ $.basicType("uint64"), [20], 176, true), /* @__PURE__ */ $.structField("VSize", /* @__PURE__ */ $.basicType("uint"), [21], 184, true), /* @__PURE__ */ $.structField("RSS", /* @__PURE__ */ $.basicType("int"), [22], 192, true), /* @__PURE__ */ $.structField("proc", /* @__PURE__ */ $.basicType("string", "fs.FS"), [23], 200, false, { pkgPath: "github.com/prometheus/procfs" })]
	)
}

export const userHZ: number = 100
