// Generated file based on proc_limits.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as os from "@goscript/os/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as fs from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript_mountinfo from "./mountinfo.gs.ts"

import * as __goscript_mountstats from "./mountstats.gs.ts"

import type * as __goscript_net_dev from "./net_dev.gs.ts"

import * as __goscript_proc from "./proc.gs.ts"

import type * as __goscript_proc_cgroup from "./proc_cgroup.gs.ts"

import type * as __goscript_proc_environ from "./proc_environ.gs.ts"

import * as __goscript_proc_fdinfo from "./proc_fdinfo.gs.ts"

import type * as __goscript_proc_io from "./proc_io.gs.ts"

import type * as __goscript_proc_ns from "./proc_ns.gs.ts"

import type * as __goscript_proc_smaps from "./proc_smaps.gs.ts"

import type * as __goscript_proc_stat from "./proc_stat.gs.ts"

import type * as __goscript_proc_status from "./proc_status.gs.ts"

import type * as __goscript_schedstat from "./schedstat.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/fmt/index.js"
import "@goscript/os/index.js"
import "@goscript/regexp/index.js"
import "@goscript/strconv/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "./mountstats.gs.ts"
import "./proc.gs.ts"
import "./proc_fdinfo.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.ProcLimits"])

export class ProcLimits {
	// CPU time limit in seconds.
	public get CPUTime(): bigint {
		return this._fields.CPUTime
	}

	public set CPUTime(value: bigint) {
		this._fields.CPUTime = value
	}

	// Maximum size of files that the process may create.
	public get FileSize(): bigint {
		return this._fields.FileSize
	}

	public set FileSize(value: bigint) {
		this._fields.FileSize = value
	}

	// Maximum size of the process's data segment (initialized data,
	// uninitialized data, and heap).
	public get DataSize(): bigint {
		return this._fields.DataSize
	}

	public set DataSize(value: bigint) {
		this._fields.DataSize = value
	}

	// Maximum size of the process stack in bytes.
	public get StackSize(): bigint {
		return this._fields.StackSize
	}

	public set StackSize(value: bigint) {
		this._fields.StackSize = value
	}

	// Maximum size of a core file.
	public get CoreFileSize(): bigint {
		return this._fields.CoreFileSize
	}

	public set CoreFileSize(value: bigint) {
		this._fields.CoreFileSize = value
	}

	// Limit of the process's resident set in pages.
	public get ResidentSet(): bigint {
		return this._fields.ResidentSet
	}

	public set ResidentSet(value: bigint) {
		this._fields.ResidentSet = value
	}

	// Maximum number of processes that can be created for the real user ID of
	// the calling process.
	public get Processes(): bigint {
		return this._fields.Processes
	}

	public set Processes(value: bigint) {
		this._fields.Processes = value
	}

	// Value one greater than the maximum file descriptor number that can be
	// opened by this process.
	public get OpenFiles(): bigint {
		return this._fields.OpenFiles
	}

	public set OpenFiles(value: bigint) {
		this._fields.OpenFiles = value
	}

	// Maximum number of bytes of memory that may be locked into RAM.
	public get LockedMemory(): bigint {
		return this._fields.LockedMemory
	}

	public set LockedMemory(value: bigint) {
		this._fields.LockedMemory = value
	}

	// Maximum size of the process's virtual memory address space in bytes.
	public get AddressSpace(): bigint {
		return this._fields.AddressSpace
	}

	public set AddressSpace(value: bigint) {
		this._fields.AddressSpace = value
	}

	// Limit on the combined number of flock(2) locks and fcntl(2) leases that
	// this process may establish.
	public get FileLocks(): bigint {
		return this._fields.FileLocks
	}

	public set FileLocks(value: bigint) {
		this._fields.FileLocks = value
	}

	// Limit of signals that may be queued for the real user ID of the calling
	// process.
	public get PendingSignals(): bigint {
		return this._fields.PendingSignals
	}

	public set PendingSignals(value: bigint) {
		this._fields.PendingSignals = value
	}

	// Limit on the number of bytes that can be allocated for POSIX message
	// queues for the real user ID of the calling process.
	public get MsqqueueSize(): bigint {
		return this._fields.MsqqueueSize
	}

	public set MsqqueueSize(value: bigint) {
		this._fields.MsqqueueSize = value
	}

	// Limit of the nice priority set using setpriority(2) or nice(2).
	public get NicePriority(): bigint {
		return this._fields.NicePriority
	}

	public set NicePriority(value: bigint) {
		this._fields.NicePriority = value
	}

	// Limit of the real-time priority set using sched_setscheduler(2) or
	// sched_setparam(2).
	public get RealtimePriority(): bigint {
		return this._fields.RealtimePriority
	}

	public set RealtimePriority(value: bigint) {
		this._fields.RealtimePriority = value
	}

	// Limit (in microseconds) on the amount of CPU time that a process
	// scheduled under a real-time scheduling policy may consume without making
	// a blocking system call.
	public get RealtimeTimeout(): bigint {
		return this._fields.RealtimeTimeout
	}

	public set RealtimeTimeout(value: bigint) {
		this._fields.RealtimeTimeout = value
	}

	public _fields: {
		CPUTime: bigint
		FileSize: bigint
		DataSize: bigint
		StackSize: bigint
		CoreFileSize: bigint
		ResidentSet: bigint
		Processes: bigint
		OpenFiles: bigint
		LockedMemory: bigint
		AddressSpace: bigint
		FileLocks: bigint
		PendingSignals: bigint
		MsqqueueSize: bigint
		NicePriority: bigint
		RealtimePriority: bigint
		RealtimeTimeout: bigint
	}

	constructor(init?: Partial<{CPUTime?: bigint, FileSize?: bigint, DataSize?: bigint, StackSize?: bigint, CoreFileSize?: bigint, ResidentSet?: bigint, Processes?: bigint, OpenFiles?: bigint, LockedMemory?: bigint, AddressSpace?: bigint, FileLocks?: bigint, PendingSignals?: bigint, MsqqueueSize?: bigint, NicePriority?: bigint, RealtimePriority?: bigint, RealtimeTimeout?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			CPUTime: init?.CPUTime ?? (0n as bigint),
			FileSize: init?.FileSize ?? (0n as bigint),
			DataSize: init?.DataSize ?? (0n as bigint),
			StackSize: init?.StackSize ?? (0n as bigint),
			CoreFileSize: init?.CoreFileSize ?? (0n as bigint),
			ResidentSet: init?.ResidentSet ?? (0n as bigint),
			Processes: init?.Processes ?? (0n as bigint),
			OpenFiles: init?.OpenFiles ?? (0n as bigint),
			LockedMemory: init?.LockedMemory ?? (0n as bigint),
			AddressSpace: init?.AddressSpace ?? (0n as bigint),
			FileLocks: init?.FileLocks ?? (0n as bigint),
			PendingSignals: init?.PendingSignals ?? (0n as bigint),
			MsqqueueSize: init?.MsqqueueSize ?? (0n as bigint),
			NicePriority: init?.NicePriority ?? (0n as bigint),
			RealtimePriority: init?.RealtimePriority ?? (0n as bigint),
			RealtimeTimeout: init?.RealtimeTimeout ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ProcLimits {
		return new ProcLimits(this, true)
	}

	public __goscriptAssign(source: ProcLimits): void {
		const target = this._fields
		const values = source._fields
		target.CPUTime = values.CPUTime
		target.FileSize = values.FileSize
		target.DataSize = values.DataSize
		target.StackSize = values.StackSize
		target.CoreFileSize = values.CoreFileSize
		target.ResidentSet = values.ResidentSet
		target.Processes = values.Processes
		target.OpenFiles = values.OpenFiles
		target.LockedMemory = values.LockedMemory
		target.AddressSpace = values.AddressSpace
		target.FileLocks = values.FileLocks
		target.PendingSignals = values.PendingSignals
		target.MsqqueueSize = values.MsqqueueSize
		target.NicePriority = values.NicePriority
		target.RealtimePriority = values.RealtimePriority
		target.RealtimeTimeout = values.RealtimeTimeout
	}

	static __typeInfo = $.registerStructType(
		"procfs.ProcLimits",
		() => new ProcLimits(),
		() => [],
		ProcLimits,
		() => [/* @__PURE__ */ $.structField("CPUTime", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("FileSize", /* @__PURE__ */ $.basicType("uint64"), [1], 8, true), /* @__PURE__ */ $.structField("DataSize", /* @__PURE__ */ $.basicType("uint64"), [2], 16, true), /* @__PURE__ */ $.structField("StackSize", /* @__PURE__ */ $.basicType("uint64"), [3], 24, true), /* @__PURE__ */ $.structField("CoreFileSize", /* @__PURE__ */ $.basicType("uint64"), [4], 32, true), /* @__PURE__ */ $.structField("ResidentSet", /* @__PURE__ */ $.basicType("uint64"), [5], 40, true), /* @__PURE__ */ $.structField("Processes", /* @__PURE__ */ $.basicType("uint64"), [6], 48, true), /* @__PURE__ */ $.structField("OpenFiles", /* @__PURE__ */ $.basicType("uint64"), [7], 56, true), /* @__PURE__ */ $.structField("LockedMemory", /* @__PURE__ */ $.basicType("uint64"), [8], 64, true), /* @__PURE__ */ $.structField("AddressSpace", /* @__PURE__ */ $.basicType("uint64"), [9], 72, true), /* @__PURE__ */ $.structField("FileLocks", /* @__PURE__ */ $.basicType("uint64"), [10], 80, true), /* @__PURE__ */ $.structField("PendingSignals", /* @__PURE__ */ $.basicType("uint64"), [11], 88, true), /* @__PURE__ */ $.structField("MsqqueueSize", /* @__PURE__ */ $.basicType("uint64"), [12], 96, true), /* @__PURE__ */ $.structField("NicePriority", /* @__PURE__ */ $.basicType("uint64"), [13], 104, true), /* @__PURE__ */ $.structField("RealtimePriority", /* @__PURE__ */ $.basicType("uint64"), [14], 112, true), /* @__PURE__ */ $.structField("RealtimeTimeout", /* @__PURE__ */ $.basicType("uint64"), [15], 120, true)]
	)
}

export const limitsFields: number = 4

export const limitsUnlimited: string = "unlimited"

export let limitsMatch: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("(Max \\w+\\s{0,1}?\\w*\\s{0,1}\\w*)\\s{2,}(\\w+)\\s+(\\w+)")

export function __goscript_set_limitsMatch(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	limitsMatch = __goscriptValue
}

export function parseUint(s: string): [bigint, $.GoError] {
	if ($.stringEqual(s, "unlimited")) {
		return [18446744073709551615n, null]
	}
	let [i, err] = strconv.ParseUint(s, 10, 64)
	if (err != null) {
		return [0n, fmt.Errorf("couldn't parse value %q: %w", s, (err as any))]
	}
	return [i, null]
}
