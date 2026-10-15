// Generated file based on mdstat.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

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
import "@goscript/io/ioutil/index.js"
import "@goscript/regexp/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
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

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.MDStat"])

export class MDStat {
	// Name of the device.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// activity-state of the device.
	public get ActivityState(): string {
		return this._fields.ActivityState
	}

	public set ActivityState(value: string) {
		this._fields.ActivityState = value
	}

	// Number of active disks.
	public get DisksActive(): bigint {
		return this._fields.DisksActive
	}

	public set DisksActive(value: bigint) {
		this._fields.DisksActive = value
	}

	// Total number of disks the device requires.
	public get DisksTotal(): bigint {
		return this._fields.DisksTotal
	}

	public set DisksTotal(value: bigint) {
		this._fields.DisksTotal = value
	}

	// Number of failed disks.
	public get DisksFailed(): bigint {
		return this._fields.DisksFailed
	}

	public set DisksFailed(value: bigint) {
		this._fields.DisksFailed = value
	}

	// Spare disks in the device.
	public get DisksSpare(): bigint {
		return this._fields.DisksSpare
	}

	public set DisksSpare(value: bigint) {
		this._fields.DisksSpare = value
	}

	// Number of blocks the device holds.
	public get BlocksTotal(): bigint {
		return this._fields.BlocksTotal
	}

	public set BlocksTotal(value: bigint) {
		this._fields.BlocksTotal = value
	}

	// Number of blocks on the device that are in sync.
	public get BlocksSynced(): bigint {
		return this._fields.BlocksSynced
	}

	public set BlocksSynced(value: bigint) {
		this._fields.BlocksSynced = value
	}

	// Name of md component devices
	public get Devices(): $.Slice<string> {
		return this._fields.Devices
	}

	public set Devices(value: $.Slice<string>) {
		this._fields.Devices = value
	}

	public _fields: {
		Name: string
		ActivityState: string
		DisksActive: bigint
		DisksTotal: bigint
		DisksFailed: bigint
		DisksSpare: bigint
		BlocksTotal: bigint
		BlocksSynced: bigint
		Devices: $.Slice<string>
	}

	constructor(init?: Partial<{Name?: string, ActivityState?: string, DisksActive?: bigint, DisksTotal?: bigint, DisksFailed?: bigint, DisksSpare?: bigint, BlocksTotal?: bigint, BlocksSynced?: bigint, Devices?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			ActivityState: init?.ActivityState ?? ("" as string),
			DisksActive: init?.DisksActive ?? (0n as bigint),
			DisksTotal: init?.DisksTotal ?? (0n as bigint),
			DisksFailed: init?.DisksFailed ?? (0n as bigint),
			DisksSpare: init?.DisksSpare ?? (0n as bigint),
			BlocksTotal: init?.BlocksTotal ?? (0n as bigint),
			BlocksSynced: init?.BlocksSynced ?? (0n as bigint),
			Devices: init?.Devices ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MDStat {
		return new MDStat(this, true)
	}

	public __goscriptAssign(source: MDStat): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.ActivityState = values.ActivityState
		target.DisksActive = values.DisksActive
		target.DisksTotal = values.DisksTotal
		target.DisksFailed = values.DisksFailed
		target.DisksSpare = values.DisksSpare
		target.BlocksTotal = values.BlocksTotal
		target.BlocksSynced = values.BlocksSynced
		target.Devices = values.Devices
	}

	static __typeInfo = $.registerStructType(
		"procfs.MDStat",
		() => new MDStat(),
		() => [],
		MDStat,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("ActivityState", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("DisksActive", /* @__PURE__ */ $.basicType("int64"), [2], 32, true), /* @__PURE__ */ $.structField("DisksTotal", /* @__PURE__ */ $.basicType("int64"), [3], 40, true), /* @__PURE__ */ $.structField("DisksFailed", /* @__PURE__ */ $.basicType("int64"), [4], 48, true), /* @__PURE__ */ $.structField("DisksSpare", /* @__PURE__ */ $.basicType("int64"), [5], 56, true), /* @__PURE__ */ $.structField("BlocksTotal", /* @__PURE__ */ $.basicType("int64"), [6], 64, true), /* @__PURE__ */ $.structField("BlocksSynced", /* @__PURE__ */ $.basicType("int64"), [7], 72, true), /* @__PURE__ */ $.structField("Devices", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [8], 80, true)]
	)
}

export let statusLineRE: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("(\\d+) blocks .*\\[(\\d+)/(\\d+)\\] \\[[U_]+\\]")

export function __goscript_set_statusLineRE(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	statusLineRE = __goscriptValue
}

export let recoveryLineRE: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("\\((\\d+)/\\d+\\)")

export function __goscript_set_recoveryLineRE(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	recoveryLineRE = __goscriptValue
}

export let componentDeviceRE: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("(.*)\\[\\d+\\]")

export function __goscript_set_componentDeviceRE(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	componentDeviceRE = __goscriptValue
}

export async function parseMDStat(mdStatData: $.Slice<number>): globalThis.Promise<[$.Slice<MDStat>, $.GoError]> {
	let mdStats: $.Slice<MDStat> = $.arrayToSlice<MDStat>([])
	let lines: $.Slice<string> = strings.Split($.bytesToString(mdStatData), "\n")

	for (let __goscriptRangeTarget0 = lines, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let line = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as string)
		if (((($.stringEqual(strings.TrimSpace(line), "")) || ($.indexString(line, 0) == 32)) || strings.HasPrefix(line, "Personalities")) || strings.HasPrefix(line, "unused")) {
			continue
		}

		let deviceFields: $.Slice<string> = strings.Fields(line)
		if ($.sliceLen(deviceFields) < 3) {
			return [null, fmt.Errorf("not enough fields in mdline (expected at least 3): %s", line)]
		}
		let mdName = $.arrayIndex(deviceFields!, 0)
		let state = $.arrayIndex(deviceFields!, 2)

		if (__goscriptRangeWindow0.length <= (i + 3)) {
			return [null, fmt.Errorf("error parsing %q: too few lines for md device", mdName)]
		}

		// Failed disks have the suffix (F) & Spare disks have the suffix (S).
		let fail = $.int64(strings.Count(line, "(F)"))
		let spare = $.int64(strings.Count(line, "(S)"))
		let [active, total, size, err] = await evalStatusLine(((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as string), ((__goscriptRangeWindow0.backing as any[])[$.windowSlot(__goscriptRangeWindow0, i + 1)] as string))

		if (err != null) {
			return [null, fmt.Errorf("error parsing md device lines: %w", (err as any))]
		}

		let syncLineIdx = i + 2
		if (strings.Contains(((__goscriptRangeWindow0.backing as any[])[$.windowSlot(__goscriptRangeWindow0, i + 2)] as string), "bitmap")) {
			syncLineIdx++
		}

		// If device is syncing at the moment, get the number of currently
		// synced bytes, otherwise that number equals the size of the device.
		let syncedBlocks = size
		let recovering = strings.Contains(((__goscriptRangeWindow0.backing as any[])[$.windowSlot(__goscriptRangeWindow0, syncLineIdx)] as string), "recovery")
		let resyncing = strings.Contains(((__goscriptRangeWindow0.backing as any[])[$.windowSlot(__goscriptRangeWindow0, syncLineIdx)] as string), "resync")
		let checking = strings.Contains(((__goscriptRangeWindow0.backing as any[])[$.windowSlot(__goscriptRangeWindow0, syncLineIdx)] as string), "check")

		// Append recovery and resyncing state info.
		if ((recovering || resyncing) || checking) {
			if (recovering) {
				state = "recovering"
			} else {
				if (checking) {
					state = "checking"
				} else {
					state = "resyncing"
				}
			}

			// Handle case when resync=PENDING or resync=DELAYED.
			if (strings.Contains(((__goscriptRangeWindow0.backing as any[])[$.windowSlot(__goscriptRangeWindow0, syncLineIdx)] as string), "PENDING") || strings.Contains(((__goscriptRangeWindow0.backing as any[])[$.windowSlot(__goscriptRangeWindow0, syncLineIdx)] as string), "DELAYED")) {
				syncedBlocks = 0n
			} else {
				let __goscriptTuple0: any = await evalRecoveryLine(((__goscriptRangeWindow0.backing as any[])[$.windowSlot(__goscriptRangeWindow0, syncLineIdx)] as string))
				syncedBlocks = __goscriptTuple0[0]
				err = __goscriptTuple0[1]
				if (err != null) {
					return [null, fmt.Errorf("error parsing sync line in md device %q: %w", mdName, (err as any))]
				}
			}
		}

		mdStats = $.appendOne(mdStats, (await (async () => { const __goscriptLiteralField0 = await evalComponentDevices(deviceFields); return new MDStat({Name: mdName, ActivityState: state, DisksActive: active, DisksFailed: fail, DisksSpare: spare, DisksTotal: total, BlocksTotal: size, BlocksSynced: syncedBlocks, Devices: __goscriptLiteralField0}, true) })()))
	}

	return [mdStats, null]
}

export async function evalStatusLine(deviceLine: string, statusLine: string): globalThis.Promise<[bigint, bigint, bigint, $.GoError]> {
	let active: bigint = 0n
	let total: bigint = 0n
	let size: bigint = 0n
	let err: $.GoError = null! as $.GoError

	let sizeStr = $.arrayIndex(strings.Fields(statusLine)!, 0)
	let __goscriptTuple1: any = strconv.ParseInt(sizeStr, 10, 64)
	size = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return [0n, 0n, 0n, fmt.Errorf("unexpected statusLine %q: %w", statusLine, (err as any))]
	}

	if (strings.Contains(deviceLine, "raid0") || strings.Contains(deviceLine, "linear")) {
		// In the device deviceLine, only disks have a number associated with them in [].
		total = $.int64(strings.Count(deviceLine, "["))
		return [total, total, size, null]
	}

	if (strings.Contains(deviceLine, "inactive")) {
		return [0n, 0n, size, null]
	}

	let matches: $.Slice<string> = await (statusLineRE !== null && (statusLineRE as any).__isVarRef !== true && (statusLineRE as any).__goValue === undefined ? ((statusLineRE as any) as regexp.Regexp).FindStringSubmatch(statusLine) : regexp.Regexp.prototype.FindStringSubmatch.call(statusLineRE, statusLine))
	if ($.sliceLen(matches) != 4) {
		return [0n, 0n, 0n, fmt.Errorf("couldn't find all the substring matches: %s", statusLine)]
	}

	let __goscriptTuple2: any = strconv.ParseInt($.arrayIndex(matches!, 2), 10, 64)
	total = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	if (err != null) {
		return [0n, 0n, 0n, fmt.Errorf("unexpected statusLine %q: %w", statusLine, (err as any))]
	}

	let __goscriptTuple3: any = strconv.ParseInt($.arrayIndex(matches!, 3), 10, 64)
	active = __goscriptTuple3[0]
	err = __goscriptTuple3[1]
	if (err != null) {
		return [0n, 0n, 0n, fmt.Errorf("unexpected statusLine %q: %w", statusLine, (err as any))]
	}

	return [active, total, size, null]
}

export async function evalRecoveryLine(recoveryLine: string): globalThis.Promise<[bigint, $.GoError]> {
	let syncedBlocks: bigint = 0n
	let err: $.GoError = null! as $.GoError
	let matches: $.Slice<string> = await (recoveryLineRE !== null && (recoveryLineRE as any).__isVarRef !== true && (recoveryLineRE as any).__goValue === undefined ? ((recoveryLineRE as any) as regexp.Regexp).FindStringSubmatch(recoveryLine) : regexp.Regexp.prototype.FindStringSubmatch.call(recoveryLineRE, recoveryLine))
	if ($.sliceLen(matches) != 2) {
		return [0n, fmt.Errorf("unexpected recoveryLine: %s", recoveryLine)]
	}

	let __goscriptTuple4: any = strconv.ParseInt($.arrayIndex(matches!, 1), 10, 64)
	syncedBlocks = __goscriptTuple4[0]
	err = __goscriptTuple4[1]
	if (err != null) {
		return [0n, fmt.Errorf("error parsing int from recoveryLine %q: %w", recoveryLine, (err as any))]
	}

	return [syncedBlocks, null]
}

export async function evalComponentDevices(deviceFields: $.Slice<string>): globalThis.Promise<$.Slice<string>> {
	let mdComponentDevices: $.Slice<string> = $.makeSlice<string>(0, undefined, "string")
	if ($.sliceLen(deviceFields) > 3) {
		for (let __goscriptRangeTarget1 = $.goSlice(deviceFields, 4, undefined), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let field = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
			let match: $.Slice<string> = await (componentDeviceRE !== null && (componentDeviceRE as any).__isVarRef !== true && (componentDeviceRE as any).__goValue === undefined ? ((componentDeviceRE as any) as regexp.Regexp).FindStringSubmatch(field) : regexp.Regexp.prototype.FindStringSubmatch.call(componentDeviceRE, field))
			if (match == null) {
				continue
			}
			mdComponentDevices = $.appendOne(mdComponentDevices, $.arrayIndex(match!, 1))
		}
	}

	return mdComponentDevices
}
