// Generated file based on stat.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as fs2 from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

import * as net from "@goscript/net/index.js"

import type * as __goscript_arp from "./arp.gs.ts"

import type * as __goscript_buddyinfo from "./buddyinfo.gs.ts"

import type * as __goscript_crypto from "./crypto.gs.ts"

import * as __goscript_fs from "./fs.gs.ts"

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

import * as __goscript_proc_stat from "./proc_stat.gs.ts"

import type * as __goscript_proc_status from "./proc_status.gs.ts"

import * as __goscript_schedstat from "./schedstat.gs.ts"

import * as __goscript_slab from "./slab.gs.ts"

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
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "@goscript/github.com/prometheus/procfs/internal/util/index.js"
import "@goscript/net/index.js"
import "./fs.gs.ts"
import "./mountstats.gs.ts"
import "./net_protocols.gs.ts"
import "./net_sockstat.gs.ts"
import "./net_unix.gs.ts"
import "./proc_fdinfo.gs.ts"
import "./proc_psi.gs.ts"
import "./proc_stat.gs.ts"
import "./schedstat.gs.ts"
import "./slab.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.CPUStat", "procfs.SoftIRQStat", "procfs.Stat"])

export class CPUStat {
	public get User(): number {
		return this._fields.User
	}

	public set User(value: number) {
		this._fields.User = value
	}

	public get Nice(): number {
		return this._fields.Nice
	}

	public set Nice(value: number) {
		this._fields.Nice = value
	}

	public get System(): number {
		return this._fields.System
	}

	public set System(value: number) {
		this._fields.System = value
	}

	public get Idle(): number {
		return this._fields.Idle
	}

	public set Idle(value: number) {
		this._fields.Idle = value
	}

	public get Iowait(): number {
		return this._fields.Iowait
	}

	public set Iowait(value: number) {
		this._fields.Iowait = value
	}

	public get IRQ(): number {
		return this._fields.IRQ
	}

	public set IRQ(value: number) {
		this._fields.IRQ = value
	}

	public get SoftIRQ(): number {
		return this._fields.SoftIRQ
	}

	public set SoftIRQ(value: number) {
		this._fields.SoftIRQ = value
	}

	public get Steal(): number {
		return this._fields.Steal
	}

	public set Steal(value: number) {
		this._fields.Steal = value
	}

	public get Guest(): number {
		return this._fields.Guest
	}

	public set Guest(value: number) {
		this._fields.Guest = value
	}

	public get GuestNice(): number {
		return this._fields.GuestNice
	}

	public set GuestNice(value: number) {
		this._fields.GuestNice = value
	}

	public _fields: {
		User: number
		Nice: number
		System: number
		Idle: number
		Iowait: number
		IRQ: number
		SoftIRQ: number
		Steal: number
		Guest: number
		GuestNice: number
	}

	constructor(init?: Partial<{User?: number, Nice?: number, System?: number, Idle?: number, Iowait?: number, IRQ?: number, SoftIRQ?: number, Steal?: number, Guest?: number, GuestNice?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			User: init?.User ?? (0 as number),
			Nice: init?.Nice ?? (0 as number),
			System: init?.System ?? (0 as number),
			Idle: init?.Idle ?? (0 as number),
			Iowait: init?.Iowait ?? (0 as number),
			IRQ: init?.IRQ ?? (0 as number),
			SoftIRQ: init?.SoftIRQ ?? (0 as number),
			Steal: init?.Steal ?? (0 as number),
			Guest: init?.Guest ?? (0 as number),
			GuestNice: init?.GuestNice ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CPUStat {
		return new CPUStat(this, true)
	}

	public __goscriptAssign(source: CPUStat): void {
		const target = this._fields
		const values = source._fields
		target.User = values.User
		target.Nice = values.Nice
		target.System = values.System
		target.Idle = values.Idle
		target.Iowait = values.Iowait
		target.IRQ = values.IRQ
		target.SoftIRQ = values.SoftIRQ
		target.Steal = values.Steal
		target.Guest = values.Guest
		target.GuestNice = values.GuestNice
	}

	static __typeInfo = $.registerStructType(
		"procfs.CPUStat",
		() => new CPUStat(),
		() => [],
		CPUStat,
		() => [/* @__PURE__ */ $.structField("User", /* @__PURE__ */ $.basicType("float64"), [0], 0, true), /* @__PURE__ */ $.structField("Nice", /* @__PURE__ */ $.basicType("float64"), [1], 8, true), /* @__PURE__ */ $.structField("System", /* @__PURE__ */ $.basicType("float64"), [2], 16, true), /* @__PURE__ */ $.structField("Idle", /* @__PURE__ */ $.basicType("float64"), [3], 24, true), /* @__PURE__ */ $.structField("Iowait", /* @__PURE__ */ $.basicType("float64"), [4], 32, true), /* @__PURE__ */ $.structField("IRQ", /* @__PURE__ */ $.basicType("float64"), [5], 40, true), /* @__PURE__ */ $.structField("SoftIRQ", /* @__PURE__ */ $.basicType("float64"), [6], 48, true), /* @__PURE__ */ $.structField("Steal", /* @__PURE__ */ $.basicType("float64"), [7], 56, true), /* @__PURE__ */ $.structField("Guest", /* @__PURE__ */ $.basicType("float64"), [8], 64, true), /* @__PURE__ */ $.structField("GuestNice", /* @__PURE__ */ $.basicType("float64"), [9], 72, true)]
	)
}

export class SoftIRQStat {
	public get Hi(): bigint {
		return this._fields.Hi
	}

	public set Hi(value: bigint) {
		this._fields.Hi = value
	}

	public get Timer(): bigint {
		return this._fields.Timer
	}

	public set Timer(value: bigint) {
		this._fields.Timer = value
	}

	public get NetTx(): bigint {
		return this._fields.NetTx
	}

	public set NetTx(value: bigint) {
		this._fields.NetTx = value
	}

	public get NetRx(): bigint {
		return this._fields.NetRx
	}

	public set NetRx(value: bigint) {
		this._fields.NetRx = value
	}

	public get Block(): bigint {
		return this._fields.Block
	}

	public set Block(value: bigint) {
		this._fields.Block = value
	}

	public get BlockIoPoll(): bigint {
		return this._fields.BlockIoPoll
	}

	public set BlockIoPoll(value: bigint) {
		this._fields.BlockIoPoll = value
	}

	public get Tasklet(): bigint {
		return this._fields.Tasklet
	}

	public set Tasklet(value: bigint) {
		this._fields.Tasklet = value
	}

	public get Sched(): bigint {
		return this._fields.Sched
	}

	public set Sched(value: bigint) {
		this._fields.Sched = value
	}

	public get Hrtimer(): bigint {
		return this._fields.Hrtimer
	}

	public set Hrtimer(value: bigint) {
		this._fields.Hrtimer = value
	}

	public get Rcu(): bigint {
		return this._fields.Rcu
	}

	public set Rcu(value: bigint) {
		this._fields.Rcu = value
	}

	public _fields: {
		Hi: bigint
		Timer: bigint
		NetTx: bigint
		NetRx: bigint
		Block: bigint
		BlockIoPoll: bigint
		Tasklet: bigint
		Sched: bigint
		Hrtimer: bigint
		Rcu: bigint
	}

	constructor(init?: Partial<{Hi?: bigint, Timer?: bigint, NetTx?: bigint, NetRx?: bigint, Block?: bigint, BlockIoPoll?: bigint, Tasklet?: bigint, Sched?: bigint, Hrtimer?: bigint, Rcu?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Hi: init?.Hi ?? (0n as bigint),
			Timer: init?.Timer ?? (0n as bigint),
			NetTx: init?.NetTx ?? (0n as bigint),
			NetRx: init?.NetRx ?? (0n as bigint),
			Block: init?.Block ?? (0n as bigint),
			BlockIoPoll: init?.BlockIoPoll ?? (0n as bigint),
			Tasklet: init?.Tasklet ?? (0n as bigint),
			Sched: init?.Sched ?? (0n as bigint),
			Hrtimer: init?.Hrtimer ?? (0n as bigint),
			Rcu: init?.Rcu ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SoftIRQStat {
		return new SoftIRQStat(this, true)
	}

	public __goscriptAssign(source: SoftIRQStat): void {
		const target = this._fields
		const values = source._fields
		target.Hi = values.Hi
		target.Timer = values.Timer
		target.NetTx = values.NetTx
		target.NetRx = values.NetRx
		target.Block = values.Block
		target.BlockIoPoll = values.BlockIoPoll
		target.Tasklet = values.Tasklet
		target.Sched = values.Sched
		target.Hrtimer = values.Hrtimer
		target.Rcu = values.Rcu
	}

	static __typeInfo = $.registerStructType(
		"procfs.SoftIRQStat",
		() => new SoftIRQStat(),
		() => [],
		SoftIRQStat,
		() => [/* @__PURE__ */ $.structField("Hi", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("Timer", /* @__PURE__ */ $.basicType("uint64"), [1], 8, true), /* @__PURE__ */ $.structField("NetTx", /* @__PURE__ */ $.basicType("uint64"), [2], 16, true), /* @__PURE__ */ $.structField("NetRx", /* @__PURE__ */ $.basicType("uint64"), [3], 24, true), /* @__PURE__ */ $.structField("Block", /* @__PURE__ */ $.basicType("uint64"), [4], 32, true), /* @__PURE__ */ $.structField("BlockIoPoll", /* @__PURE__ */ $.basicType("uint64"), [5], 40, true), /* @__PURE__ */ $.structField("Tasklet", /* @__PURE__ */ $.basicType("uint64"), [6], 48, true), /* @__PURE__ */ $.structField("Sched", /* @__PURE__ */ $.basicType("uint64"), [7], 56, true), /* @__PURE__ */ $.structField("Hrtimer", /* @__PURE__ */ $.basicType("uint64"), [8], 64, true), /* @__PURE__ */ $.structField("Rcu", /* @__PURE__ */ $.basicType("uint64"), [9], 72, true)]
	)
}

export class Stat {
	// Boot time in seconds since the Epoch.
	public get BootTime(): bigint {
		return this._fields.BootTime
	}

	public set BootTime(value: bigint) {
		this._fields.BootTime = value
	}

	// Summed up cpu statistics.
	public get CPUTotal(): CPUStat {
		return this._fields.CPUTotal
	}

	public set CPUTotal(value: CPUStat) {
		this._fields.CPUTotal = value
	}

	// Per-CPU statistics.
	public get CPU(): $.Slice<CPUStat> {
		return this._fields.CPU
	}

	public set CPU(value: $.Slice<CPUStat>) {
		this._fields.CPU = value
	}

	// Number of times interrupts were handled, which contains numbered and unnumbered IRQs.
	public get IRQTotal(): bigint {
		return this._fields.IRQTotal
	}

	public set IRQTotal(value: bigint) {
		this._fields.IRQTotal = value
	}

	// Number of times a numbered IRQ was triggered.
	public get IRQ(): $.Slice<bigint> {
		return this._fields.IRQ
	}

	public set IRQ(value: $.Slice<bigint>) {
		this._fields.IRQ = value
	}

	// Number of times a context switch happened.
	public get ContextSwitches(): bigint {
		return this._fields.ContextSwitches
	}

	public set ContextSwitches(value: bigint) {
		this._fields.ContextSwitches = value
	}

	// Number of times a process was created.
	public get ProcessCreated(): bigint {
		return this._fields.ProcessCreated
	}

	public set ProcessCreated(value: bigint) {
		this._fields.ProcessCreated = value
	}

	// Number of processes currently running.
	public get ProcessesRunning(): bigint {
		return this._fields.ProcessesRunning
	}

	public set ProcessesRunning(value: bigint) {
		this._fields.ProcessesRunning = value
	}

	// Number of processes currently blocked (waiting for IO).
	public get ProcessesBlocked(): bigint {
		return this._fields.ProcessesBlocked
	}

	public set ProcessesBlocked(value: bigint) {
		this._fields.ProcessesBlocked = value
	}

	// Number of times a softirq was scheduled.
	public get SoftIRQTotal(): bigint {
		return this._fields.SoftIRQTotal
	}

	public set SoftIRQTotal(value: bigint) {
		this._fields.SoftIRQTotal = value
	}

	// Detailed softirq statistics.
	public get SoftIRQ(): SoftIRQStat {
		return this._fields.SoftIRQ
	}

	public set SoftIRQ(value: SoftIRQStat) {
		this._fields.SoftIRQ = value
	}

	public _fields: {
		BootTime: bigint
		CPUTotal: CPUStat
		CPU: $.Slice<CPUStat>
		IRQTotal: bigint
		IRQ: $.Slice<bigint>
		ContextSwitches: bigint
		ProcessCreated: bigint
		ProcessesRunning: bigint
		ProcessesBlocked: bigint
		SoftIRQTotal: bigint
		SoftIRQ: SoftIRQStat
	}

	constructor(init?: Partial<{BootTime?: bigint, CPUTotal?: CPUStat, CPU?: $.Slice<CPUStat>, IRQTotal?: bigint, IRQ?: $.Slice<bigint>, ContextSwitches?: bigint, ProcessCreated?: bigint, ProcessesRunning?: bigint, ProcessesBlocked?: bigint, SoftIRQTotal?: bigint, SoftIRQ?: SoftIRQStat}>, __goscriptValue?: boolean) {
		this._fields = {
			BootTime: init?.BootTime ?? (0n as bigint),
			CPUTotal: init?.CPUTotal ? init.CPUTotal.clone() : new CPUStat(undefined, true),
			CPU: init?.CPU ?? (null! as $.Slice<CPUStat>),
			IRQTotal: init?.IRQTotal ?? (0n as bigint),
			IRQ: init?.IRQ ?? (null! as $.Slice<bigint>),
			ContextSwitches: init?.ContextSwitches ?? (0n as bigint),
			ProcessCreated: init?.ProcessCreated ?? (0n as bigint),
			ProcessesRunning: init?.ProcessesRunning ?? (0n as bigint),
			ProcessesBlocked: init?.ProcessesBlocked ?? (0n as bigint),
			SoftIRQTotal: init?.SoftIRQTotal ?? (0n as bigint),
			SoftIRQ: init?.SoftIRQ ? init.SoftIRQ.clone() : new SoftIRQStat(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Stat {
		return new Stat(this, true)
	}

	public __goscriptAssign(source: Stat): void {
		const target = this._fields
		const values = source._fields
		target.BootTime = values.BootTime
		$.assignStruct(target.CPUTotal, values.CPUTotal)
		target.CPU = values.CPU
		target.IRQTotal = values.IRQTotal
		target.IRQ = values.IRQ
		target.ContextSwitches = values.ContextSwitches
		target.ProcessCreated = values.ProcessCreated
		target.ProcessesRunning = values.ProcessesRunning
		target.ProcessesBlocked = values.ProcessesBlocked
		target.SoftIRQTotal = values.SoftIRQTotal
		$.assignStruct(target.SoftIRQ, values.SoftIRQ)
	}

	static __typeInfo = $.registerStructType(
		"procfs.Stat",
		() => new Stat(),
		() => [],
		Stat,
		() => [/* @__PURE__ */ $.structField("BootTime", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("CPUTotal", "procfs.CPUStat", [1], 8, true), /* @__PURE__ */ $.structField("CPU", /* @__PURE__ */ $.sliceType("procfs.CPUStat"), [2], 88, true), /* @__PURE__ */ $.structField("IRQTotal", /* @__PURE__ */ $.basicType("uint64"), [3], 112, true), /* @__PURE__ */ $.structField("IRQ", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64")), [4], 120, true), /* @__PURE__ */ $.structField("ContextSwitches", /* @__PURE__ */ $.basicType("uint64"), [5], 144, true), /* @__PURE__ */ $.structField("ProcessCreated", /* @__PURE__ */ $.basicType("uint64"), [6], 152, true), /* @__PURE__ */ $.structField("ProcessesRunning", /* @__PURE__ */ $.basicType("uint64"), [7], 160, true), /* @__PURE__ */ $.structField("ProcessesBlocked", /* @__PURE__ */ $.basicType("uint64"), [8], 168, true), /* @__PURE__ */ $.structField("SoftIRQTotal", /* @__PURE__ */ $.basicType("uint64"), [9], 176, true), /* @__PURE__ */ $.structField("SoftIRQ", "procfs.SoftIRQStat", [10], 184, true)]
	)
}

export function parseCPUStat(line: string): [CPUStat, bigint, $.GoError] {
	let cpuStat = new CPUStat(undefined, true)
	let cpu: $.VarRef<string> = $.varRef("")

	let [count, err] = fmt.Sscanf(line, "%s %f %f %f %f %f %f %f %f %f %f", $.interfaceValue(cpu, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))), $.interfaceValue($.fieldRef(cpuStat._fields, "User"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))), $.interfaceValue($.fieldRef(cpuStat._fields, "Nice"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))), $.interfaceValue($.fieldRef(cpuStat._fields, "System"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))), $.interfaceValue($.fieldRef(cpuStat._fields, "Idle"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))), $.interfaceValue($.fieldRef(cpuStat._fields, "Iowait"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))), $.interfaceValue($.fieldRef(cpuStat._fields, "IRQ"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))), $.interfaceValue($.fieldRef(cpuStat._fields, "SoftIRQ"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))), $.interfaceValue($.fieldRef(cpuStat._fields, "Steal"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))), $.interfaceValue($.fieldRef(cpuStat._fields, "Guest"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))), $.interfaceValue($.fieldRef(cpuStat._fields, "GuestNice"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))))

	if ((err != null) && (!$.comparableEqual(err, io.EOF))) {
		return [new CPUStat(undefined, true), -1n, fmt.Errorf("couldn't parse %q (cpu): %w", line, (err as any))]
	}
	if (count == 0) {
		return [new CPUStat(undefined, true), -1n, fmt.Errorf("couldn't parse %q (cpu): 0 elements parsed", line)]
	}

	cpuStat.User = cpuStat.User / (100)
	cpuStat.Nice = cpuStat.Nice / (100)
	cpuStat.System = cpuStat.System / (100)
	cpuStat.Idle = cpuStat.Idle / (100)
	cpuStat.Iowait = cpuStat.Iowait / (100)
	cpuStat.IRQ = cpuStat.IRQ / (100)
	cpuStat.SoftIRQ = cpuStat.SoftIRQ / (100)
	cpuStat.Steal = cpuStat.Steal / (100)
	cpuStat.Guest = cpuStat.Guest / (100)
	cpuStat.GuestNice = cpuStat.GuestNice / (100)

	if ($.stringEqual(cpu.value, "cpu")) {
		return [(cpuStat).clone(), -1n, null]
	}

	let __goscriptTuple0: any = strconv.ParseInt($.sliceStringOrBytes(cpu.value, 3, undefined), 10, 64)
	let cpuID = __goscriptTuple0[0]
	err = __goscriptTuple0[1]
	if (err != null) {
		return [new CPUStat(undefined, true), -1n, fmt.Errorf("couldn't parse %q (cpu/cpuid): %w", line, (err as any))]
	}

	return [(cpuStat).clone(), cpuID, null]
}

export function parseSoftIRQStat(line: string): [SoftIRQStat, bigint, $.GoError] {
	let softIRQStat = new SoftIRQStat(undefined, true)
	let total: $.VarRef<bigint> = $.varRef(0n)
	let prefix: $.VarRef<string> = $.varRef("")

	let [, err] = fmt.Sscanf(line, "%s %d %d %d %d %d %d %d %d %d %d %d", $.interfaceValue(prefix, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))), $.interfaceValue(total, "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))), $.interfaceValue($.fieldRef(softIRQStat._fields, "Hi"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))), $.interfaceValue($.fieldRef(softIRQStat._fields, "Timer"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))), $.interfaceValue($.fieldRef(softIRQStat._fields, "NetTx"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))), $.interfaceValue($.fieldRef(softIRQStat._fields, "NetRx"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))), $.interfaceValue($.fieldRef(softIRQStat._fields, "Block"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))), $.interfaceValue($.fieldRef(softIRQStat._fields, "BlockIoPoll"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))), $.interfaceValue($.fieldRef(softIRQStat._fields, "Tasklet"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))), $.interfaceValue($.fieldRef(softIRQStat._fields, "Sched"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))), $.interfaceValue($.fieldRef(softIRQStat._fields, "Hrtimer"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))), $.interfaceValue($.fieldRef(softIRQStat._fields, "Rcu"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))))

	if (err != null) {
		return [new SoftIRQStat(undefined, true), 0n, fmt.Errorf("couldn't parse %q (softirq): %w", line, (err as any))]
	}

	return [(softIRQStat).clone(), total.value, null]
}

export async function NewStat(): globalThis.Promise<[Stat, $.GoError]> {
	let __goscriptTuple1: any = await __goscript_fs.NewFS(fs2.DefaultProcMountPoint)
	let __goscriptShadow0 = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (err != null) {
		return [new Stat(undefined, true), err]
	}
	return __goscriptShadow0.Stat()
}
