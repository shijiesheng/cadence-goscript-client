// Generated file based on proc_status.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

import * as fs from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import type * as __goscript_mountinfo from "./mountinfo.gs.ts"

import * as __goscript_mountstats from "./mountstats.gs.ts"

import type * as __goscript_net_dev from "./net_dev.gs.ts"

import * as __goscript_proc from "./proc.gs.ts"

import type * as __goscript_proc_cgroup from "./proc_cgroup.gs.ts"

import type * as __goscript_proc_environ from "./proc_environ.gs.ts"

import * as __goscript_proc_fdinfo from "./proc_fdinfo.gs.ts"

import type * as __goscript_proc_io from "./proc_io.gs.ts"

import type * as __goscript_proc_limits from "./proc_limits.gs.ts"

import type * as __goscript_proc_ns from "./proc_ns.gs.ts"

import type * as __goscript_proc_smaps from "./proc_smaps.gs.ts"

import type * as __goscript_proc_stat from "./proc_stat.gs.ts"

import type * as __goscript_schedstat from "./schedstat.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/prometheus/procfs/internal/util/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "./mountstats.gs.ts"
import "./proc.gs.ts"
import "./proc_fdinfo.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.ProcStatus"])

export class ProcStatus {
	// The process ID.
	public get PID(): number {
		return this._fields.PID
	}

	public set PID(value: number) {
		this._fields.PID = value
	}

	// The process name.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// Thread group ID.
	public get TGID(): number {
		return this._fields.TGID
	}

	public set TGID(value: number) {
		this._fields.TGID = value
	}

	// Peak virtual memory size.
	public get VmPeak(): bigint {
		return this._fields.VmPeak
	}

	public set VmPeak(value: bigint) {
		this._fields.VmPeak = value
	}

	// Virtual memory size.
	public get VmSize(): bigint {
		return this._fields.VmSize
	}

	public set VmSize(value: bigint) {
		this._fields.VmSize = value
	}

	// Locked memory size.
	public get VmLck(): bigint {
		return this._fields.VmLck
	}

	public set VmLck(value: bigint) {
		this._fields.VmLck = value
	}

	// Pinned memory size.
	public get VmPin(): bigint {
		return this._fields.VmPin
	}

	public set VmPin(value: bigint) {
		this._fields.VmPin = value
	}

	// Peak resident set size.
	public get VmHWM(): bigint {
		return this._fields.VmHWM
	}

	public set VmHWM(value: bigint) {
		this._fields.VmHWM = value
	}

	// Resident set size (sum of RssAnnon RssFile and RssShmem).
	public get VmRSS(): bigint {
		return this._fields.VmRSS
	}

	public set VmRSS(value: bigint) {
		this._fields.VmRSS = value
	}

	// Size of resident anonymous memory.
	public get RssAnon(): bigint {
		return this._fields.RssAnon
	}

	public set RssAnon(value: bigint) {
		this._fields.RssAnon = value
	}

	// Size of resident file mappings.
	public get RssFile(): bigint {
		return this._fields.RssFile
	}

	public set RssFile(value: bigint) {
		this._fields.RssFile = value
	}

	// Size of resident shared memory.
	public get RssShmem(): bigint {
		return this._fields.RssShmem
	}

	public set RssShmem(value: bigint) {
		this._fields.RssShmem = value
	}

	// Size of data segments.
	public get VmData(): bigint {
		return this._fields.VmData
	}

	public set VmData(value: bigint) {
		this._fields.VmData = value
	}

	// Size of stack segments.
	public get VmStk(): bigint {
		return this._fields.VmStk
	}

	public set VmStk(value: bigint) {
		this._fields.VmStk = value
	}

	// Size of text segments.
	public get VmExe(): bigint {
		return this._fields.VmExe
	}

	public set VmExe(value: bigint) {
		this._fields.VmExe = value
	}

	// Shared library code size.
	public get VmLib(): bigint {
		return this._fields.VmLib
	}

	public set VmLib(value: bigint) {
		this._fields.VmLib = value
	}

	// Page table entries size.
	public get VmPTE(): bigint {
		return this._fields.VmPTE
	}

	public set VmPTE(value: bigint) {
		this._fields.VmPTE = value
	}

	// Size of second-level page tables.
	public get VmPMD(): bigint {
		return this._fields.VmPMD
	}

	public set VmPMD(value: bigint) {
		this._fields.VmPMD = value
	}

	// Swapped-out virtual memory size by anonymous private.
	public get VmSwap(): bigint {
		return this._fields.VmSwap
	}

	public set VmSwap(value: bigint) {
		this._fields.VmSwap = value
	}

	// Size of hugetlb memory portions
	public get HugetlbPages(): bigint {
		return this._fields.HugetlbPages
	}

	public set HugetlbPages(value: bigint) {
		this._fields.HugetlbPages = value
	}

	// Number of voluntary context switches.
	public get VoluntaryCtxtSwitches(): bigint {
		return this._fields.VoluntaryCtxtSwitches
	}

	public set VoluntaryCtxtSwitches(value: bigint) {
		this._fields.VoluntaryCtxtSwitches = value
	}

	// Number of involuntary context switches.
	public get NonVoluntaryCtxtSwitches(): bigint {
		return this._fields.NonVoluntaryCtxtSwitches
	}

	public set NonVoluntaryCtxtSwitches(value: bigint) {
		this._fields.NonVoluntaryCtxtSwitches = value
	}

	// UIDs of the process (Real, effective, saved set, and filesystem UIDs)
	public get UIDs(): string[] {
		return this._fields.UIDs
	}

	public set UIDs(value: string[]) {
		this._fields.UIDs = value
	}

	// GIDs of the process (Real, effective, saved set, and filesystem GIDs)
	public get GIDs(): string[] {
		return this._fields.GIDs
	}

	public set GIDs(value: string[]) {
		this._fields.GIDs = value
	}

	public _fields: {
		PID: number
		Name: string
		TGID: number
		VmPeak: bigint
		VmSize: bigint
		VmLck: bigint
		VmPin: bigint
		VmHWM: bigint
		VmRSS: bigint
		RssAnon: bigint
		RssFile: bigint
		RssShmem: bigint
		VmData: bigint
		VmStk: bigint
		VmExe: bigint
		VmLib: bigint
		VmPTE: bigint
		VmPMD: bigint
		VmSwap: bigint
		HugetlbPages: bigint
		VoluntaryCtxtSwitches: bigint
		NonVoluntaryCtxtSwitches: bigint
		UIDs: string[]
		GIDs: string[]
	}

	constructor(init?: Partial<{PID?: number, Name?: string, TGID?: number, VmPeak?: bigint, VmSize?: bigint, VmLck?: bigint, VmPin?: bigint, VmHWM?: bigint, VmRSS?: bigint, RssAnon?: bigint, RssFile?: bigint, RssShmem?: bigint, VmData?: bigint, VmStk?: bigint, VmExe?: bigint, VmLib?: bigint, VmPTE?: bigint, VmPMD?: bigint, VmSwap?: bigint, HugetlbPages?: bigint, VoluntaryCtxtSwitches?: bigint, NonVoluntaryCtxtSwitches?: bigint, UIDs?: string[], GIDs?: string[]}>, __goscriptValue?: boolean) {
		this._fields = {
			PID: init?.PID ?? (0 as number),
			Name: init?.Name ?? ("" as string),
			TGID: init?.TGID ?? (0 as number),
			VmPeak: init?.VmPeak ?? (0n as bigint),
			VmSize: init?.VmSize ?? (0n as bigint),
			VmLck: init?.VmLck ?? (0n as bigint),
			VmPin: init?.VmPin ?? (0n as bigint),
			VmHWM: init?.VmHWM ?? (0n as bigint),
			VmRSS: init?.VmRSS ?? (0n as bigint),
			RssAnon: init?.RssAnon ?? (0n as bigint),
			RssFile: init?.RssFile ?? (0n as bigint),
			RssShmem: init?.RssShmem ?? (0n as bigint),
			VmData: init?.VmData ?? (0n as bigint),
			VmStk: init?.VmStk ?? (0n as bigint),
			VmExe: init?.VmExe ?? (0n as bigint),
			VmLib: init?.VmLib ?? (0n as bigint),
			VmPTE: init?.VmPTE ?? (0n as bigint),
			VmPMD: init?.VmPMD ?? (0n as bigint),
			VmSwap: init?.VmSwap ?? (0n as bigint),
			HugetlbPages: init?.HugetlbPages ?? (0n as bigint),
			VoluntaryCtxtSwitches: init?.VoluntaryCtxtSwitches ?? (0n as bigint),
			NonVoluntaryCtxtSwitches: init?.NonVoluntaryCtxtSwitches ?? (0n as bigint),
			UIDs: init?.UIDs !== undefined ? $.cloneArrayValue(init.UIDs, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("string"), 4)) : $.arrayValue(globalThis.Array.from({ length: 4 }, () => "")),
			GIDs: init?.GIDs !== undefined ? $.cloneArrayValue(init.GIDs, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("string"), 4)) : $.arrayValue(globalThis.Array.from({ length: 4 }, () => ""))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ProcStatus {
		return new ProcStatus(this, true)
	}

	public __goscriptAssign(source: ProcStatus): void {
		const target = this._fields
		const values = source._fields
		target.PID = values.PID
		target.Name = values.Name
		target.TGID = values.TGID
		target.VmPeak = values.VmPeak
		target.VmSize = values.VmSize
		target.VmLck = values.VmLck
		target.VmPin = values.VmPin
		target.VmHWM = values.VmHWM
		target.VmRSS = values.VmRSS
		target.RssAnon = values.RssAnon
		target.RssFile = values.RssFile
		target.RssShmem = values.RssShmem
		target.VmData = values.VmData
		target.VmStk = values.VmStk
		target.VmExe = values.VmExe
		target.VmLib = values.VmLib
		target.VmPTE = values.VmPTE
		target.VmPMD = values.VmPMD
		target.VmSwap = values.VmSwap
		target.HugetlbPages = values.HugetlbPages
		target.VoluntaryCtxtSwitches = values.VoluntaryCtxtSwitches
		target.NonVoluntaryCtxtSwitches = values.NonVoluntaryCtxtSwitches
		target.UIDs = $.assignFieldValue(target.UIDs, values.UIDs, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("string"), 4))
		target.GIDs = $.assignFieldValue(target.GIDs, values.GIDs, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("string"), 4))
	}

	public TotalCtxtSwitches(): bigint {
		const s = this;
		return $.uint64Add(s.VoluntaryCtxtSwitches, s.NonVoluntaryCtxtSwitches)
	}

	public fillStatus(k: string, vString: string, vUint: bigint, vUintBytes: bigint): void {
		let s: ProcStatus | $.VarRef<ProcStatus> | null = this;
		const s$: ProcStatus = s == null ? $.pointerTarget<ProcStatus>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<ProcStatus>(s)
		switch (k) {
			case "Tgid":
			{
				;(s$ as ProcStatus).TGID = $.int(vUint)
				break
			}
			case "Name":
			{
				;(s$ as ProcStatus).Name = vString
				break
			}
			case "Uid":
			{
				$.copy($.goSlice((s$ as ProcStatus).UIDs, undefined, undefined), strings.Split(vString, "\t"))
				break
			}
			case "Gid":
			{
				$.copy($.goSlice((s$ as ProcStatus).GIDs, undefined, undefined), strings.Split(vString, "\t"))
				break
			}
			case "VmPeak":
			{
				;(s$ as ProcStatus).VmPeak = vUintBytes
				break
			}
			case "VmSize":
			{
				;(s$ as ProcStatus).VmSize = vUintBytes
				break
			}
			case "VmLck":
			{
				;(s$ as ProcStatus).VmLck = vUintBytes
				break
			}
			case "VmPin":
			{
				;(s$ as ProcStatus).VmPin = vUintBytes
				break
			}
			case "VmHWM":
			{
				;(s$ as ProcStatus).VmHWM = vUintBytes
				break
			}
			case "VmRSS":
			{
				;(s$ as ProcStatus).VmRSS = vUintBytes
				break
			}
			case "RssAnon":
			{
				;(s$ as ProcStatus).RssAnon = vUintBytes
				break
			}
			case "RssFile":
			{
				;(s$ as ProcStatus).RssFile = vUintBytes
				break
			}
			case "RssShmem":
			{
				;(s$ as ProcStatus).RssShmem = vUintBytes
				break
			}
			case "VmData":
			{
				;(s$ as ProcStatus).VmData = vUintBytes
				break
			}
			case "VmStk":
			{
				;(s$ as ProcStatus).VmStk = vUintBytes
				break
			}
			case "VmExe":
			{
				;(s$ as ProcStatus).VmExe = vUintBytes
				break
			}
			case "VmLib":
			{
				;(s$ as ProcStatus).VmLib = vUintBytes
				break
			}
			case "VmPTE":
			{
				;(s$ as ProcStatus).VmPTE = vUintBytes
				break
			}
			case "VmPMD":
			{
				;(s$ as ProcStatus).VmPMD = vUintBytes
				break
			}
			case "VmSwap":
			{
				;(s$ as ProcStatus).VmSwap = vUintBytes
				break
			}
			case "HugetlbPages":
			{
				;(s$ as ProcStatus).HugetlbPages = vUintBytes
				break
			}
			case "voluntary_ctxt_switches":
			{
				;(s$ as ProcStatus).VoluntaryCtxtSwitches = vUint
				break
			}
			case "nonvoluntary_ctxt_switches":
			{
				;(s$ as ProcStatus).NonVoluntaryCtxtSwitches = vUint
				break
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"procfs.ProcStatus",
		() => new ProcStatus(),
		() => [$.methodSignature("TotalCtxtSwitches", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("fillStatus", [["k", /* @__PURE__ */ $.basicType("string")], ["vString", /* @__PURE__ */ $.basicType("string")], ["vUint", /* @__PURE__ */ $.basicType("uint64")], ["vUintBytes", /* @__PURE__ */ $.basicType("uint64")]], [], true)],
		ProcStatus,
		() => [/* @__PURE__ */ $.structField("PID", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [1], 8, true), /* @__PURE__ */ $.structField("TGID", /* @__PURE__ */ $.basicType("int"), [2], 24, true), /* @__PURE__ */ $.structField("VmPeak", /* @__PURE__ */ $.basicType("uint64"), [3], 32, true), /* @__PURE__ */ $.structField("VmSize", /* @__PURE__ */ $.basicType("uint64"), [4], 40, true), /* @__PURE__ */ $.structField("VmLck", /* @__PURE__ */ $.basicType("uint64"), [5], 48, true), /* @__PURE__ */ $.structField("VmPin", /* @__PURE__ */ $.basicType("uint64"), [6], 56, true), /* @__PURE__ */ $.structField("VmHWM", /* @__PURE__ */ $.basicType("uint64"), [7], 64, true), /* @__PURE__ */ $.structField("VmRSS", /* @__PURE__ */ $.basicType("uint64"), [8], 72, true), /* @__PURE__ */ $.structField("RssAnon", /* @__PURE__ */ $.basicType("uint64"), [9], 80, true), /* @__PURE__ */ $.structField("RssFile", /* @__PURE__ */ $.basicType("uint64"), [10], 88, true), /* @__PURE__ */ $.structField("RssShmem", /* @__PURE__ */ $.basicType("uint64"), [11], 96, true), /* @__PURE__ */ $.structField("VmData", /* @__PURE__ */ $.basicType("uint64"), [12], 104, true), /* @__PURE__ */ $.structField("VmStk", /* @__PURE__ */ $.basicType("uint64"), [13], 112, true), /* @__PURE__ */ $.structField("VmExe", /* @__PURE__ */ $.basicType("uint64"), [14], 120, true), /* @__PURE__ */ $.structField("VmLib", /* @__PURE__ */ $.basicType("uint64"), [15], 128, true), /* @__PURE__ */ $.structField("VmPTE", /* @__PURE__ */ $.basicType("uint64"), [16], 136, true), /* @__PURE__ */ $.structField("VmPMD", /* @__PURE__ */ $.basicType("uint64"), [17], 144, true), /* @__PURE__ */ $.structField("VmSwap", /* @__PURE__ */ $.basicType("uint64"), [18], 152, true), /* @__PURE__ */ $.structField("HugetlbPages", /* @__PURE__ */ $.basicType("uint64"), [19], 160, true), /* @__PURE__ */ $.structField("VoluntaryCtxtSwitches", /* @__PURE__ */ $.basicType("uint64"), [20], 168, true), /* @__PURE__ */ $.structField("NonVoluntaryCtxtSwitches", /* @__PURE__ */ $.basicType("uint64"), [21], 176, true), /* @__PURE__ */ $.structField("UIDs", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("string"), 4), [22], 184, true), /* @__PURE__ */ $.structField("GIDs", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("string"), 4), [23], 248, true)]
	)
}
