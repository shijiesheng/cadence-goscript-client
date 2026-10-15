// Generated file based on vm.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as os from "@goscript/os/index.js"

import * as filepath from "@goscript/path/filepath/index.js"

import * as strings from "@goscript/strings/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

import * as fs2 from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import * as fs3 from "@goscript/io/fs/index.js"

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

import * as __goscript_schedstat from "./schedstat.gs.ts"

import * as __goscript_slab from "./slab.gs.ts"

import * as __goscript_stat from "./stat.gs.ts"

import type * as __goscript_swaps from "./swaps.gs.ts"

import type * as __goscript_xfrm from "./xfrm.gs.ts"

import type * as __goscript_zoneinfo from "./zoneinfo.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/os/index.js"
import "@goscript/path/filepath/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/prometheus/procfs/internal/util/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "@goscript/io/fs/index.js"
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

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.VM"])

export class VM {
	public get AdminReserveKbytes(): $.VarRef<bigint> | null {
		return this._fields.AdminReserveKbytes
	}

	public set AdminReserveKbytes(value: $.VarRef<bigint> | null) {
		this._fields.AdminReserveKbytes = value
	}

	public get BlockDump(): $.VarRef<bigint> | null {
		return this._fields.BlockDump
	}

	public set BlockDump(value: $.VarRef<bigint> | null) {
		this._fields.BlockDump = value
	}

	public get CompactUnevictableAllowed(): $.VarRef<bigint> | null {
		return this._fields.CompactUnevictableAllowed
	}

	public set CompactUnevictableAllowed(value: $.VarRef<bigint> | null) {
		this._fields.CompactUnevictableAllowed = value
	}

	public get DirtyBackgroundBytes(): $.VarRef<bigint> | null {
		return this._fields.DirtyBackgroundBytes
	}

	public set DirtyBackgroundBytes(value: $.VarRef<bigint> | null) {
		this._fields.DirtyBackgroundBytes = value
	}

	public get DirtyBackgroundRatio(): $.VarRef<bigint> | null {
		return this._fields.DirtyBackgroundRatio
	}

	public set DirtyBackgroundRatio(value: $.VarRef<bigint> | null) {
		this._fields.DirtyBackgroundRatio = value
	}

	public get DirtyBytes(): $.VarRef<bigint> | null {
		return this._fields.DirtyBytes
	}

	public set DirtyBytes(value: $.VarRef<bigint> | null) {
		this._fields.DirtyBytes = value
	}

	public get DirtyExpireCentisecs(): $.VarRef<bigint> | null {
		return this._fields.DirtyExpireCentisecs
	}

	public set DirtyExpireCentisecs(value: $.VarRef<bigint> | null) {
		this._fields.DirtyExpireCentisecs = value
	}

	public get DirtyRatio(): $.VarRef<bigint> | null {
		return this._fields.DirtyRatio
	}

	public set DirtyRatio(value: $.VarRef<bigint> | null) {
		this._fields.DirtyRatio = value
	}

	public get DirtytimeExpireSeconds(): $.VarRef<bigint> | null {
		return this._fields.DirtytimeExpireSeconds
	}

	public set DirtytimeExpireSeconds(value: $.VarRef<bigint> | null) {
		this._fields.DirtytimeExpireSeconds = value
	}

	public get DirtyWritebackCentisecs(): $.VarRef<bigint> | null {
		return this._fields.DirtyWritebackCentisecs
	}

	public set DirtyWritebackCentisecs(value: $.VarRef<bigint> | null) {
		this._fields.DirtyWritebackCentisecs = value
	}

	public get DropCaches(): $.VarRef<bigint> | null {
		return this._fields.DropCaches
	}

	public set DropCaches(value: $.VarRef<bigint> | null) {
		this._fields.DropCaches = value
	}

	public get ExtfragThreshold(): $.VarRef<bigint> | null {
		return this._fields.ExtfragThreshold
	}

	public set ExtfragThreshold(value: $.VarRef<bigint> | null) {
		this._fields.ExtfragThreshold = value
	}

	public get HugetlbShmGroup(): $.VarRef<bigint> | null {
		return this._fields.HugetlbShmGroup
	}

	public set HugetlbShmGroup(value: $.VarRef<bigint> | null) {
		this._fields.HugetlbShmGroup = value
	}

	public get LaptopMode(): $.VarRef<bigint> | null {
		return this._fields.LaptopMode
	}

	public set LaptopMode(value: $.VarRef<bigint> | null) {
		this._fields.LaptopMode = value
	}

	public get LegacyVaLayout(): $.VarRef<bigint> | null {
		return this._fields.LegacyVaLayout
	}

	public set LegacyVaLayout(value: $.VarRef<bigint> | null) {
		this._fields.LegacyVaLayout = value
	}

	public get LowmemReserveRatio(): $.Slice<$.VarRef<bigint> | null> {
		return this._fields.LowmemReserveRatio
	}

	public set LowmemReserveRatio(value: $.Slice<$.VarRef<bigint> | null>) {
		this._fields.LowmemReserveRatio = value
	}

	public get MaxMapCount(): $.VarRef<bigint> | null {
		return this._fields.MaxMapCount
	}

	public set MaxMapCount(value: $.VarRef<bigint> | null) {
		this._fields.MaxMapCount = value
	}

	public get MemoryFailureEarlyKill(): $.VarRef<bigint> | null {
		return this._fields.MemoryFailureEarlyKill
	}

	public set MemoryFailureEarlyKill(value: $.VarRef<bigint> | null) {
		this._fields.MemoryFailureEarlyKill = value
	}

	public get MemoryFailureRecovery(): $.VarRef<bigint> | null {
		return this._fields.MemoryFailureRecovery
	}

	public set MemoryFailureRecovery(value: $.VarRef<bigint> | null) {
		this._fields.MemoryFailureRecovery = value
	}

	public get MinFreeKbytes(): $.VarRef<bigint> | null {
		return this._fields.MinFreeKbytes
	}

	public set MinFreeKbytes(value: $.VarRef<bigint> | null) {
		this._fields.MinFreeKbytes = value
	}

	public get MinSlabRatio(): $.VarRef<bigint> | null {
		return this._fields.MinSlabRatio
	}

	public set MinSlabRatio(value: $.VarRef<bigint> | null) {
		this._fields.MinSlabRatio = value
	}

	public get MinUnmappedRatio(): $.VarRef<bigint> | null {
		return this._fields.MinUnmappedRatio
	}

	public set MinUnmappedRatio(value: $.VarRef<bigint> | null) {
		this._fields.MinUnmappedRatio = value
	}

	public get MmapMinAddr(): $.VarRef<bigint> | null {
		return this._fields.MmapMinAddr
	}

	public set MmapMinAddr(value: $.VarRef<bigint> | null) {
		this._fields.MmapMinAddr = value
	}

	public get NrHugepages(): $.VarRef<bigint> | null {
		return this._fields.NrHugepages
	}

	public set NrHugepages(value: $.VarRef<bigint> | null) {
		this._fields.NrHugepages = value
	}

	public get NrHugepagesMempolicy(): $.VarRef<bigint> | null {
		return this._fields.NrHugepagesMempolicy
	}

	public set NrHugepagesMempolicy(value: $.VarRef<bigint> | null) {
		this._fields.NrHugepagesMempolicy = value
	}

	public get NrOvercommitHugepages(): $.VarRef<bigint> | null {
		return this._fields.NrOvercommitHugepages
	}

	public set NrOvercommitHugepages(value: $.VarRef<bigint> | null) {
		this._fields.NrOvercommitHugepages = value
	}

	public get NumaStat(): $.VarRef<bigint> | null {
		return this._fields.NumaStat
	}

	public set NumaStat(value: $.VarRef<bigint> | null) {
		this._fields.NumaStat = value
	}

	public get NumaZonelistOrder(): string {
		return this._fields.NumaZonelistOrder
	}

	public set NumaZonelistOrder(value: string) {
		this._fields.NumaZonelistOrder = value
	}

	public get OomDumpTasks(): $.VarRef<bigint> | null {
		return this._fields.OomDumpTasks
	}

	public set OomDumpTasks(value: $.VarRef<bigint> | null) {
		this._fields.OomDumpTasks = value
	}

	public get OomKillAllocatingTask(): $.VarRef<bigint> | null {
		return this._fields.OomKillAllocatingTask
	}

	public set OomKillAllocatingTask(value: $.VarRef<bigint> | null) {
		this._fields.OomKillAllocatingTask = value
	}

	public get OvercommitKbytes(): $.VarRef<bigint> | null {
		return this._fields.OvercommitKbytes
	}

	public set OvercommitKbytes(value: $.VarRef<bigint> | null) {
		this._fields.OvercommitKbytes = value
	}

	public get OvercommitMemory(): $.VarRef<bigint> | null {
		return this._fields.OvercommitMemory
	}

	public set OvercommitMemory(value: $.VarRef<bigint> | null) {
		this._fields.OvercommitMemory = value
	}

	public get OvercommitRatio(): $.VarRef<bigint> | null {
		return this._fields.OvercommitRatio
	}

	public set OvercommitRatio(value: $.VarRef<bigint> | null) {
		this._fields.OvercommitRatio = value
	}

	public get PageCluster(): $.VarRef<bigint> | null {
		return this._fields.PageCluster
	}

	public set PageCluster(value: $.VarRef<bigint> | null) {
		this._fields.PageCluster = value
	}

	public get PanicOnOom(): $.VarRef<bigint> | null {
		return this._fields.PanicOnOom
	}

	public set PanicOnOom(value: $.VarRef<bigint> | null) {
		this._fields.PanicOnOom = value
	}

	public get PercpuPagelistFraction(): $.VarRef<bigint> | null {
		return this._fields.PercpuPagelistFraction
	}

	public set PercpuPagelistFraction(value: $.VarRef<bigint> | null) {
		this._fields.PercpuPagelistFraction = value
	}

	public get StatInterval(): $.VarRef<bigint> | null {
		return this._fields.StatInterval
	}

	public set StatInterval(value: $.VarRef<bigint> | null) {
		this._fields.StatInterval = value
	}

	public get Swappiness(): $.VarRef<bigint> | null {
		return this._fields.Swappiness
	}

	public set Swappiness(value: $.VarRef<bigint> | null) {
		this._fields.Swappiness = value
	}

	public get UserReserveKbytes(): $.VarRef<bigint> | null {
		return this._fields.UserReserveKbytes
	}

	public set UserReserveKbytes(value: $.VarRef<bigint> | null) {
		this._fields.UserReserveKbytes = value
	}

	public get VfsCachePressure(): $.VarRef<bigint> | null {
		return this._fields.VfsCachePressure
	}

	public set VfsCachePressure(value: $.VarRef<bigint> | null) {
		this._fields.VfsCachePressure = value
	}

	public get WatermarkBoostFactor(): $.VarRef<bigint> | null {
		return this._fields.WatermarkBoostFactor
	}

	public set WatermarkBoostFactor(value: $.VarRef<bigint> | null) {
		this._fields.WatermarkBoostFactor = value
	}

	public get WatermarkScaleFactor(): $.VarRef<bigint> | null {
		return this._fields.WatermarkScaleFactor
	}

	public set WatermarkScaleFactor(value: $.VarRef<bigint> | null) {
		this._fields.WatermarkScaleFactor = value
	}

	public get ZoneReclaimMode(): $.VarRef<bigint> | null {
		return this._fields.ZoneReclaimMode
	}

	public set ZoneReclaimMode(value: $.VarRef<bigint> | null) {
		this._fields.ZoneReclaimMode = value
	}

	public _fields: {
		AdminReserveKbytes: $.VarRef<bigint> | null
		BlockDump: $.VarRef<bigint> | null
		CompactUnevictableAllowed: $.VarRef<bigint> | null
		DirtyBackgroundBytes: $.VarRef<bigint> | null
		DirtyBackgroundRatio: $.VarRef<bigint> | null
		DirtyBytes: $.VarRef<bigint> | null
		DirtyExpireCentisecs: $.VarRef<bigint> | null
		DirtyRatio: $.VarRef<bigint> | null
		DirtytimeExpireSeconds: $.VarRef<bigint> | null
		DirtyWritebackCentisecs: $.VarRef<bigint> | null
		DropCaches: $.VarRef<bigint> | null
		ExtfragThreshold: $.VarRef<bigint> | null
		HugetlbShmGroup: $.VarRef<bigint> | null
		LaptopMode: $.VarRef<bigint> | null
		LegacyVaLayout: $.VarRef<bigint> | null
		LowmemReserveRatio: $.Slice<$.VarRef<bigint> | null>
		MaxMapCount: $.VarRef<bigint> | null
		MemoryFailureEarlyKill: $.VarRef<bigint> | null
		MemoryFailureRecovery: $.VarRef<bigint> | null
		MinFreeKbytes: $.VarRef<bigint> | null
		MinSlabRatio: $.VarRef<bigint> | null
		MinUnmappedRatio: $.VarRef<bigint> | null
		MmapMinAddr: $.VarRef<bigint> | null
		NrHugepages: $.VarRef<bigint> | null
		NrHugepagesMempolicy: $.VarRef<bigint> | null
		NrOvercommitHugepages: $.VarRef<bigint> | null
		NumaStat: $.VarRef<bigint> | null
		NumaZonelistOrder: string
		OomDumpTasks: $.VarRef<bigint> | null
		OomKillAllocatingTask: $.VarRef<bigint> | null
		OvercommitKbytes: $.VarRef<bigint> | null
		OvercommitMemory: $.VarRef<bigint> | null
		OvercommitRatio: $.VarRef<bigint> | null
		PageCluster: $.VarRef<bigint> | null
		PanicOnOom: $.VarRef<bigint> | null
		PercpuPagelistFraction: $.VarRef<bigint> | null
		StatInterval: $.VarRef<bigint> | null
		Swappiness: $.VarRef<bigint> | null
		UserReserveKbytes: $.VarRef<bigint> | null
		VfsCachePressure: $.VarRef<bigint> | null
		WatermarkBoostFactor: $.VarRef<bigint> | null
		WatermarkScaleFactor: $.VarRef<bigint> | null
		ZoneReclaimMode: $.VarRef<bigint> | null
	}

	constructor(init?: Partial<{AdminReserveKbytes?: $.VarRef<bigint> | null, BlockDump?: $.VarRef<bigint> | null, CompactUnevictableAllowed?: $.VarRef<bigint> | null, DirtyBackgroundBytes?: $.VarRef<bigint> | null, DirtyBackgroundRatio?: $.VarRef<bigint> | null, DirtyBytes?: $.VarRef<bigint> | null, DirtyExpireCentisecs?: $.VarRef<bigint> | null, DirtyRatio?: $.VarRef<bigint> | null, DirtytimeExpireSeconds?: $.VarRef<bigint> | null, DirtyWritebackCentisecs?: $.VarRef<bigint> | null, DropCaches?: $.VarRef<bigint> | null, ExtfragThreshold?: $.VarRef<bigint> | null, HugetlbShmGroup?: $.VarRef<bigint> | null, LaptopMode?: $.VarRef<bigint> | null, LegacyVaLayout?: $.VarRef<bigint> | null, LowmemReserveRatio?: $.Slice<$.VarRef<bigint> | null>, MaxMapCount?: $.VarRef<bigint> | null, MemoryFailureEarlyKill?: $.VarRef<bigint> | null, MemoryFailureRecovery?: $.VarRef<bigint> | null, MinFreeKbytes?: $.VarRef<bigint> | null, MinSlabRatio?: $.VarRef<bigint> | null, MinUnmappedRatio?: $.VarRef<bigint> | null, MmapMinAddr?: $.VarRef<bigint> | null, NrHugepages?: $.VarRef<bigint> | null, NrHugepagesMempolicy?: $.VarRef<bigint> | null, NrOvercommitHugepages?: $.VarRef<bigint> | null, NumaStat?: $.VarRef<bigint> | null, NumaZonelistOrder?: string, OomDumpTasks?: $.VarRef<bigint> | null, OomKillAllocatingTask?: $.VarRef<bigint> | null, OvercommitKbytes?: $.VarRef<bigint> | null, OvercommitMemory?: $.VarRef<bigint> | null, OvercommitRatio?: $.VarRef<bigint> | null, PageCluster?: $.VarRef<bigint> | null, PanicOnOom?: $.VarRef<bigint> | null, PercpuPagelistFraction?: $.VarRef<bigint> | null, StatInterval?: $.VarRef<bigint> | null, Swappiness?: $.VarRef<bigint> | null, UserReserveKbytes?: $.VarRef<bigint> | null, VfsCachePressure?: $.VarRef<bigint> | null, WatermarkBoostFactor?: $.VarRef<bigint> | null, WatermarkScaleFactor?: $.VarRef<bigint> | null, ZoneReclaimMode?: $.VarRef<bigint> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			AdminReserveKbytes: init?.AdminReserveKbytes ?? (null! as $.VarRef<bigint> | null),
			BlockDump: init?.BlockDump ?? (null! as $.VarRef<bigint> | null),
			CompactUnevictableAllowed: init?.CompactUnevictableAllowed ?? (null! as $.VarRef<bigint> | null),
			DirtyBackgroundBytes: init?.DirtyBackgroundBytes ?? (null! as $.VarRef<bigint> | null),
			DirtyBackgroundRatio: init?.DirtyBackgroundRatio ?? (null! as $.VarRef<bigint> | null),
			DirtyBytes: init?.DirtyBytes ?? (null! as $.VarRef<bigint> | null),
			DirtyExpireCentisecs: init?.DirtyExpireCentisecs ?? (null! as $.VarRef<bigint> | null),
			DirtyRatio: init?.DirtyRatio ?? (null! as $.VarRef<bigint> | null),
			DirtytimeExpireSeconds: init?.DirtytimeExpireSeconds ?? (null! as $.VarRef<bigint> | null),
			DirtyWritebackCentisecs: init?.DirtyWritebackCentisecs ?? (null! as $.VarRef<bigint> | null),
			DropCaches: init?.DropCaches ?? (null! as $.VarRef<bigint> | null),
			ExtfragThreshold: init?.ExtfragThreshold ?? (null! as $.VarRef<bigint> | null),
			HugetlbShmGroup: init?.HugetlbShmGroup ?? (null! as $.VarRef<bigint> | null),
			LaptopMode: init?.LaptopMode ?? (null! as $.VarRef<bigint> | null),
			LegacyVaLayout: init?.LegacyVaLayout ?? (null! as $.VarRef<bigint> | null),
			LowmemReserveRatio: init?.LowmemReserveRatio ?? (null! as $.Slice<$.VarRef<bigint> | null>),
			MaxMapCount: init?.MaxMapCount ?? (null! as $.VarRef<bigint> | null),
			MemoryFailureEarlyKill: init?.MemoryFailureEarlyKill ?? (null! as $.VarRef<bigint> | null),
			MemoryFailureRecovery: init?.MemoryFailureRecovery ?? (null! as $.VarRef<bigint> | null),
			MinFreeKbytes: init?.MinFreeKbytes ?? (null! as $.VarRef<bigint> | null),
			MinSlabRatio: init?.MinSlabRatio ?? (null! as $.VarRef<bigint> | null),
			MinUnmappedRatio: init?.MinUnmappedRatio ?? (null! as $.VarRef<bigint> | null),
			MmapMinAddr: init?.MmapMinAddr ?? (null! as $.VarRef<bigint> | null),
			NrHugepages: init?.NrHugepages ?? (null! as $.VarRef<bigint> | null),
			NrHugepagesMempolicy: init?.NrHugepagesMempolicy ?? (null! as $.VarRef<bigint> | null),
			NrOvercommitHugepages: init?.NrOvercommitHugepages ?? (null! as $.VarRef<bigint> | null),
			NumaStat: init?.NumaStat ?? (null! as $.VarRef<bigint> | null),
			NumaZonelistOrder: init?.NumaZonelistOrder ?? ("" as string),
			OomDumpTasks: init?.OomDumpTasks ?? (null! as $.VarRef<bigint> | null),
			OomKillAllocatingTask: init?.OomKillAllocatingTask ?? (null! as $.VarRef<bigint> | null),
			OvercommitKbytes: init?.OvercommitKbytes ?? (null! as $.VarRef<bigint> | null),
			OvercommitMemory: init?.OvercommitMemory ?? (null! as $.VarRef<bigint> | null),
			OvercommitRatio: init?.OvercommitRatio ?? (null! as $.VarRef<bigint> | null),
			PageCluster: init?.PageCluster ?? (null! as $.VarRef<bigint> | null),
			PanicOnOom: init?.PanicOnOom ?? (null! as $.VarRef<bigint> | null),
			PercpuPagelistFraction: init?.PercpuPagelistFraction ?? (null! as $.VarRef<bigint> | null),
			StatInterval: init?.StatInterval ?? (null! as $.VarRef<bigint> | null),
			Swappiness: init?.Swappiness ?? (null! as $.VarRef<bigint> | null),
			UserReserveKbytes: init?.UserReserveKbytes ?? (null! as $.VarRef<bigint> | null),
			VfsCachePressure: init?.VfsCachePressure ?? (null! as $.VarRef<bigint> | null),
			WatermarkBoostFactor: init?.WatermarkBoostFactor ?? (null! as $.VarRef<bigint> | null),
			WatermarkScaleFactor: init?.WatermarkScaleFactor ?? (null! as $.VarRef<bigint> | null),
			ZoneReclaimMode: init?.ZoneReclaimMode ?? (null! as $.VarRef<bigint> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): VM {
		return new VM(this, true)
	}

	public __goscriptAssign(source: VM): void {
		const target = this._fields
		const values = source._fields
		target.AdminReserveKbytes = values.AdminReserveKbytes
		target.BlockDump = values.BlockDump
		target.CompactUnevictableAllowed = values.CompactUnevictableAllowed
		target.DirtyBackgroundBytes = values.DirtyBackgroundBytes
		target.DirtyBackgroundRatio = values.DirtyBackgroundRatio
		target.DirtyBytes = values.DirtyBytes
		target.DirtyExpireCentisecs = values.DirtyExpireCentisecs
		target.DirtyRatio = values.DirtyRatio
		target.DirtytimeExpireSeconds = values.DirtytimeExpireSeconds
		target.DirtyWritebackCentisecs = values.DirtyWritebackCentisecs
		target.DropCaches = values.DropCaches
		target.ExtfragThreshold = values.ExtfragThreshold
		target.HugetlbShmGroup = values.HugetlbShmGroup
		target.LaptopMode = values.LaptopMode
		target.LegacyVaLayout = values.LegacyVaLayout
		target.LowmemReserveRatio = values.LowmemReserveRatio
		target.MaxMapCount = values.MaxMapCount
		target.MemoryFailureEarlyKill = values.MemoryFailureEarlyKill
		target.MemoryFailureRecovery = values.MemoryFailureRecovery
		target.MinFreeKbytes = values.MinFreeKbytes
		target.MinSlabRatio = values.MinSlabRatio
		target.MinUnmappedRatio = values.MinUnmappedRatio
		target.MmapMinAddr = values.MmapMinAddr
		target.NrHugepages = values.NrHugepages
		target.NrHugepagesMempolicy = values.NrHugepagesMempolicy
		target.NrOvercommitHugepages = values.NrOvercommitHugepages
		target.NumaStat = values.NumaStat
		target.NumaZonelistOrder = values.NumaZonelistOrder
		target.OomDumpTasks = values.OomDumpTasks
		target.OomKillAllocatingTask = values.OomKillAllocatingTask
		target.OvercommitKbytes = values.OvercommitKbytes
		target.OvercommitMemory = values.OvercommitMemory
		target.OvercommitRatio = values.OvercommitRatio
		target.PageCluster = values.PageCluster
		target.PanicOnOom = values.PanicOnOom
		target.PercpuPagelistFraction = values.PercpuPagelistFraction
		target.StatInterval = values.StatInterval
		target.Swappiness = values.Swappiness
		target.UserReserveKbytes = values.UserReserveKbytes
		target.VfsCachePressure = values.VfsCachePressure
		target.WatermarkBoostFactor = values.WatermarkBoostFactor
		target.WatermarkScaleFactor = values.WatermarkScaleFactor
		target.ZoneReclaimMode = values.ZoneReclaimMode
	}

	static __typeInfo = $.registerStructType(
		"procfs.VM",
		() => new VM(),
		() => [],
		VM,
		() => [/* @__PURE__ */ $.structField("AdminReserveKbytes", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [0], 0, true), /* @__PURE__ */ $.structField("BlockDump", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [1], 8, true), /* @__PURE__ */ $.structField("CompactUnevictableAllowed", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [2], 16, true), /* @__PURE__ */ $.structField("DirtyBackgroundBytes", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [3], 24, true), /* @__PURE__ */ $.structField("DirtyBackgroundRatio", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [4], 32, true), /* @__PURE__ */ $.structField("DirtyBytes", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [5], 40, true), /* @__PURE__ */ $.structField("DirtyExpireCentisecs", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [6], 48, true), /* @__PURE__ */ $.structField("DirtyRatio", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [7], 56, true), /* @__PURE__ */ $.structField("DirtytimeExpireSeconds", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [8], 64, true), /* @__PURE__ */ $.structField("DirtyWritebackCentisecs", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [9], 72, true), /* @__PURE__ */ $.structField("DropCaches", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [10], 80, true), /* @__PURE__ */ $.structField("ExtfragThreshold", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [11], 88, true), /* @__PURE__ */ $.structField("HugetlbShmGroup", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [12], 96, true), /* @__PURE__ */ $.structField("LaptopMode", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [13], 104, true), /* @__PURE__ */ $.structField("LegacyVaLayout", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [14], 112, true), /* @__PURE__ */ $.structField("LowmemReserveRatio", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))), [15], 120, true), /* @__PURE__ */ $.structField("MaxMapCount", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [16], 144, true), /* @__PURE__ */ $.structField("MemoryFailureEarlyKill", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [17], 152, true), /* @__PURE__ */ $.structField("MemoryFailureRecovery", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [18], 160, true), /* @__PURE__ */ $.structField("MinFreeKbytes", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [19], 168, true), /* @__PURE__ */ $.structField("MinSlabRatio", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [20], 176, true), /* @__PURE__ */ $.structField("MinUnmappedRatio", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [21], 184, true), /* @__PURE__ */ $.structField("MmapMinAddr", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [22], 192, true), /* @__PURE__ */ $.structField("NrHugepages", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [23], 200, true), /* @__PURE__ */ $.structField("NrHugepagesMempolicy", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [24], 208, true), /* @__PURE__ */ $.structField("NrOvercommitHugepages", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [25], 216, true), /* @__PURE__ */ $.structField("NumaStat", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [26], 224, true), /* @__PURE__ */ $.structField("NumaZonelistOrder", /* @__PURE__ */ $.basicType("string"), [27], 232, true), /* @__PURE__ */ $.structField("OomDumpTasks", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [28], 248, true), /* @__PURE__ */ $.structField("OomKillAllocatingTask", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [29], 256, true), /* @__PURE__ */ $.structField("OvercommitKbytes", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [30], 264, true), /* @__PURE__ */ $.structField("OvercommitMemory", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [31], 272, true), /* @__PURE__ */ $.structField("OvercommitRatio", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [32], 280, true), /* @__PURE__ */ $.structField("PageCluster", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [33], 288, true), /* @__PURE__ */ $.structField("PanicOnOom", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [34], 296, true), /* @__PURE__ */ $.structField("PercpuPagelistFraction", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [35], 304, true), /* @__PURE__ */ $.structField("StatInterval", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [36], 312, true), /* @__PURE__ */ $.structField("Swappiness", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [37], 320, true), /* @__PURE__ */ $.structField("UserReserveKbytes", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [38], 328, true), /* @__PURE__ */ $.structField("VfsCachePressure", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [39], 336, true), /* @__PURE__ */ $.structField("WatermarkBoostFactor", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [40], 344, true), /* @__PURE__ */ $.structField("WatermarkScaleFactor", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [41], 352, true), /* @__PURE__ */ $.structField("ZoneReclaimMode", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [42], 360, true)]
	)
}
