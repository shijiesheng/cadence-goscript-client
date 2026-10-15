// Generated file based on meminfo.go
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

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.Meminfo"])

export class Meminfo {
	// Total usable ram (i.e. physical ram minus a few reserved
	// bits and the kernel binary code)
	public get MemTotal(): $.VarRef<bigint> | null {
		return this._fields.MemTotal
	}

	public set MemTotal(value: $.VarRef<bigint> | null) {
		this._fields.MemTotal = value
	}

	// The sum of LowFree+HighFree
	public get MemFree(): $.VarRef<bigint> | null {
		return this._fields.MemFree
	}

	public set MemFree(value: $.VarRef<bigint> | null) {
		this._fields.MemFree = value
	}

	// An estimate of how much memory is available for starting
	// new applications, without swapping. Calculated from
	// MemFree, SReclaimable, the size of the file LRU lists, and
	// the low watermarks in each zone.  The estimate takes into
	// account that the system needs some page cache to function
	// well, and that not all reclaimable slab will be
	// reclaimable, due to items being in use. The impact of those
	// factors will vary from system to system.
	public get MemAvailable(): $.VarRef<bigint> | null {
		return this._fields.MemAvailable
	}

	public set MemAvailable(value: $.VarRef<bigint> | null) {
		this._fields.MemAvailable = value
	}

	// Relatively temporary storage for raw disk blocks shouldn't
	// get tremendously large (20MB or so)
	public get Buffers(): $.VarRef<bigint> | null {
		return this._fields.Buffers
	}

	public set Buffers(value: $.VarRef<bigint> | null) {
		this._fields.Buffers = value
	}

	public get Cached(): $.VarRef<bigint> | null {
		return this._fields.Cached
	}

	public set Cached(value: $.VarRef<bigint> | null) {
		this._fields.Cached = value
	}

	// Memory that once was swapped out, is swapped back in but
	// still also is in the swapfile (if memory is needed it
	// doesn't need to be swapped out AGAIN because it is already
	// in the swapfile. This saves I/O)
	public get SwapCached(): $.VarRef<bigint> | null {
		return this._fields.SwapCached
	}

	public set SwapCached(value: $.VarRef<bigint> | null) {
		this._fields.SwapCached = value
	}

	// Memory that has been used more recently and usually not
	// reclaimed unless absolutely necessary.
	public get Active(): $.VarRef<bigint> | null {
		return this._fields.Active
	}

	public set Active(value: $.VarRef<bigint> | null) {
		this._fields.Active = value
	}

	// Memory which has been less recently used.  It is more
	// eligible to be reclaimed for other purposes
	public get Inactive(): $.VarRef<bigint> | null {
		return this._fields.Inactive
	}

	public set Inactive(value: $.VarRef<bigint> | null) {
		this._fields.Inactive = value
	}

	public get ActiveAnon(): $.VarRef<bigint> | null {
		return this._fields.ActiveAnon
	}

	public set ActiveAnon(value: $.VarRef<bigint> | null) {
		this._fields.ActiveAnon = value
	}

	public get InactiveAnon(): $.VarRef<bigint> | null {
		return this._fields.InactiveAnon
	}

	public set InactiveAnon(value: $.VarRef<bigint> | null) {
		this._fields.InactiveAnon = value
	}

	public get ActiveFile(): $.VarRef<bigint> | null {
		return this._fields.ActiveFile
	}

	public set ActiveFile(value: $.VarRef<bigint> | null) {
		this._fields.ActiveFile = value
	}

	public get InactiveFile(): $.VarRef<bigint> | null {
		return this._fields.InactiveFile
	}

	public set InactiveFile(value: $.VarRef<bigint> | null) {
		this._fields.InactiveFile = value
	}

	public get Unevictable(): $.VarRef<bigint> | null {
		return this._fields.Unevictable
	}

	public set Unevictable(value: $.VarRef<bigint> | null) {
		this._fields.Unevictable = value
	}

	public get Mlocked(): $.VarRef<bigint> | null {
		return this._fields.Mlocked
	}

	public set Mlocked(value: $.VarRef<bigint> | null) {
		this._fields.Mlocked = value
	}

	// total amount of swap space available
	public get SwapTotal(): $.VarRef<bigint> | null {
		return this._fields.SwapTotal
	}

	public set SwapTotal(value: $.VarRef<bigint> | null) {
		this._fields.SwapTotal = value
	}

	// Memory which has been evicted from RAM, and is temporarily
	// on the disk
	public get SwapFree(): $.VarRef<bigint> | null {
		return this._fields.SwapFree
	}

	public set SwapFree(value: $.VarRef<bigint> | null) {
		this._fields.SwapFree = value
	}

	// Memory which is waiting to get written back to the disk
	public get Dirty(): $.VarRef<bigint> | null {
		return this._fields.Dirty
	}

	public set Dirty(value: $.VarRef<bigint> | null) {
		this._fields.Dirty = value
	}

	// Memory which is actively being written back to the disk
	public get Writeback(): $.VarRef<bigint> | null {
		return this._fields.Writeback
	}

	public set Writeback(value: $.VarRef<bigint> | null) {
		this._fields.Writeback = value
	}

	// Non-file backed pages mapped into userspace page tables
	public get AnonPages(): $.VarRef<bigint> | null {
		return this._fields.AnonPages
	}

	public set AnonPages(value: $.VarRef<bigint> | null) {
		this._fields.AnonPages = value
	}

	// files which have been mapped, such as libraries
	public get Mapped(): $.VarRef<bigint> | null {
		return this._fields.Mapped
	}

	public set Mapped(value: $.VarRef<bigint> | null) {
		this._fields.Mapped = value
	}

	public get Shmem(): $.VarRef<bigint> | null {
		return this._fields.Shmem
	}

	public set Shmem(value: $.VarRef<bigint> | null) {
		this._fields.Shmem = value
	}

	// in-kernel data structures cache
	public get Slab(): $.VarRef<bigint> | null {
		return this._fields.Slab
	}

	public set Slab(value: $.VarRef<bigint> | null) {
		this._fields.Slab = value
	}

	// Part of Slab, that might be reclaimed, such as caches
	public get SReclaimable(): $.VarRef<bigint> | null {
		return this._fields.SReclaimable
	}

	public set SReclaimable(value: $.VarRef<bigint> | null) {
		this._fields.SReclaimable = value
	}

	// Part of Slab, that cannot be reclaimed on memory pressure
	public get SUnreclaim(): $.VarRef<bigint> | null {
		return this._fields.SUnreclaim
	}

	public set SUnreclaim(value: $.VarRef<bigint> | null) {
		this._fields.SUnreclaim = value
	}

	public get KernelStack(): $.VarRef<bigint> | null {
		return this._fields.KernelStack
	}

	public set KernelStack(value: $.VarRef<bigint> | null) {
		this._fields.KernelStack = value
	}

	// amount of memory dedicated to the lowest level of page
	// tables.
	public get PageTables(): $.VarRef<bigint> | null {
		return this._fields.PageTables
	}

	public set PageTables(value: $.VarRef<bigint> | null) {
		this._fields.PageTables = value
	}

	// NFS pages sent to the server, but not yet committed to
	// stable storage
	public get NFSUnstable(): $.VarRef<bigint> | null {
		return this._fields.NFSUnstable
	}

	public set NFSUnstable(value: $.VarRef<bigint> | null) {
		this._fields.NFSUnstable = value
	}

	// Memory used for block device "bounce buffers"
	public get Bounce(): $.VarRef<bigint> | null {
		return this._fields.Bounce
	}

	public set Bounce(value: $.VarRef<bigint> | null) {
		this._fields.Bounce = value
	}

	// Memory used by FUSE for temporary writeback buffers
	public get WritebackTmp(): $.VarRef<bigint> | null {
		return this._fields.WritebackTmp
	}

	public set WritebackTmp(value: $.VarRef<bigint> | null) {
		this._fields.WritebackTmp = value
	}

	// Based on the overcommit ratio ('vm.overcommit_ratio'),
	// this is the total amount of  memory currently available to
	// be allocated on the system. This limit is only adhered to
	// if strict overcommit accounting is enabled (mode 2 in
	// 'vm.overcommit_memory').
	// The CommitLimit is calculated with the following formula:
	// CommitLimit = ([total RAM pages] - [total huge TLB pages]) *
	//                overcommit_ratio / 100 + [total swap pages]
	// For example, on a system with 1G of physical RAM and 7G
	// of swap with a `vm.overcommit_ratio` of 30 it would
	// yield a CommitLimit of 7.3G.
	// For more details, see the memory overcommit documentation
	// in vm/overcommit-accounting.
	public get CommitLimit(): $.VarRef<bigint> | null {
		return this._fields.CommitLimit
	}

	public set CommitLimit(value: $.VarRef<bigint> | null) {
		this._fields.CommitLimit = value
	}

	// The amount of memory presently allocated on the system.
	// The committed memory is a sum of all of the memory which
	// has been allocated by processes, even if it has not been
	// "used" by them as of yet. A process which malloc()'s 1G
	// of memory, but only touches 300M of it will show up as
	// using 1G. This 1G is memory which has been "committed" to
	// by the VM and can be used at any time by the allocating
	// application. With strict overcommit enabled on the system
	// (mode 2 in 'vm.overcommit_memory'),allocations which would
	// exceed the CommitLimit (detailed above) will not be permitted.
	// This is useful if one needs to guarantee that processes will
	// not fail due to lack of memory once that memory has been
	// successfully allocated.
	public get CommittedAS(): $.VarRef<bigint> | null {
		return this._fields.CommittedAS
	}

	public set CommittedAS(value: $.VarRef<bigint> | null) {
		this._fields.CommittedAS = value
	}

	// total size of vmalloc memory area
	public get VmallocTotal(): $.VarRef<bigint> | null {
		return this._fields.VmallocTotal
	}

	public set VmallocTotal(value: $.VarRef<bigint> | null) {
		this._fields.VmallocTotal = value
	}

	// amount of vmalloc area which is used
	public get VmallocUsed(): $.VarRef<bigint> | null {
		return this._fields.VmallocUsed
	}

	public set VmallocUsed(value: $.VarRef<bigint> | null) {
		this._fields.VmallocUsed = value
	}

	// largest contiguous block of vmalloc area which is free
	public get VmallocChunk(): $.VarRef<bigint> | null {
		return this._fields.VmallocChunk
	}

	public set VmallocChunk(value: $.VarRef<bigint> | null) {
		this._fields.VmallocChunk = value
	}

	public get HardwareCorrupted(): $.VarRef<bigint> | null {
		return this._fields.HardwareCorrupted
	}

	public set HardwareCorrupted(value: $.VarRef<bigint> | null) {
		this._fields.HardwareCorrupted = value
	}

	public get AnonHugePages(): $.VarRef<bigint> | null {
		return this._fields.AnonHugePages
	}

	public set AnonHugePages(value: $.VarRef<bigint> | null) {
		this._fields.AnonHugePages = value
	}

	public get ShmemHugePages(): $.VarRef<bigint> | null {
		return this._fields.ShmemHugePages
	}

	public set ShmemHugePages(value: $.VarRef<bigint> | null) {
		this._fields.ShmemHugePages = value
	}

	public get ShmemPmdMapped(): $.VarRef<bigint> | null {
		return this._fields.ShmemPmdMapped
	}

	public set ShmemPmdMapped(value: $.VarRef<bigint> | null) {
		this._fields.ShmemPmdMapped = value
	}

	public get CmaTotal(): $.VarRef<bigint> | null {
		return this._fields.CmaTotal
	}

	public set CmaTotal(value: $.VarRef<bigint> | null) {
		this._fields.CmaTotal = value
	}

	public get CmaFree(): $.VarRef<bigint> | null {
		return this._fields.CmaFree
	}

	public set CmaFree(value: $.VarRef<bigint> | null) {
		this._fields.CmaFree = value
	}

	public get HugePagesTotal(): $.VarRef<bigint> | null {
		return this._fields.HugePagesTotal
	}

	public set HugePagesTotal(value: $.VarRef<bigint> | null) {
		this._fields.HugePagesTotal = value
	}

	public get HugePagesFree(): $.VarRef<bigint> | null {
		return this._fields.HugePagesFree
	}

	public set HugePagesFree(value: $.VarRef<bigint> | null) {
		this._fields.HugePagesFree = value
	}

	public get HugePagesRsvd(): $.VarRef<bigint> | null {
		return this._fields.HugePagesRsvd
	}

	public set HugePagesRsvd(value: $.VarRef<bigint> | null) {
		this._fields.HugePagesRsvd = value
	}

	public get HugePagesSurp(): $.VarRef<bigint> | null {
		return this._fields.HugePagesSurp
	}

	public set HugePagesSurp(value: $.VarRef<bigint> | null) {
		this._fields.HugePagesSurp = value
	}

	public get Hugepagesize(): $.VarRef<bigint> | null {
		return this._fields.Hugepagesize
	}

	public set Hugepagesize(value: $.VarRef<bigint> | null) {
		this._fields.Hugepagesize = value
	}

	public get DirectMap4k(): $.VarRef<bigint> | null {
		return this._fields.DirectMap4k
	}

	public set DirectMap4k(value: $.VarRef<bigint> | null) {
		this._fields.DirectMap4k = value
	}

	public get DirectMap2M(): $.VarRef<bigint> | null {
		return this._fields.DirectMap2M
	}

	public set DirectMap2M(value: $.VarRef<bigint> | null) {
		this._fields.DirectMap2M = value
	}

	public get DirectMap1G(): $.VarRef<bigint> | null {
		return this._fields.DirectMap1G
	}

	public set DirectMap1G(value: $.VarRef<bigint> | null) {
		this._fields.DirectMap1G = value
	}

	public _fields: {
		MemTotal: $.VarRef<bigint> | null
		MemFree: $.VarRef<bigint> | null
		MemAvailable: $.VarRef<bigint> | null
		Buffers: $.VarRef<bigint> | null
		Cached: $.VarRef<bigint> | null
		SwapCached: $.VarRef<bigint> | null
		Active: $.VarRef<bigint> | null
		Inactive: $.VarRef<bigint> | null
		ActiveAnon: $.VarRef<bigint> | null
		InactiveAnon: $.VarRef<bigint> | null
		ActiveFile: $.VarRef<bigint> | null
		InactiveFile: $.VarRef<bigint> | null
		Unevictable: $.VarRef<bigint> | null
		Mlocked: $.VarRef<bigint> | null
		SwapTotal: $.VarRef<bigint> | null
		SwapFree: $.VarRef<bigint> | null
		Dirty: $.VarRef<bigint> | null
		Writeback: $.VarRef<bigint> | null
		AnonPages: $.VarRef<bigint> | null
		Mapped: $.VarRef<bigint> | null
		Shmem: $.VarRef<bigint> | null
		Slab: $.VarRef<bigint> | null
		SReclaimable: $.VarRef<bigint> | null
		SUnreclaim: $.VarRef<bigint> | null
		KernelStack: $.VarRef<bigint> | null
		PageTables: $.VarRef<bigint> | null
		NFSUnstable: $.VarRef<bigint> | null
		Bounce: $.VarRef<bigint> | null
		WritebackTmp: $.VarRef<bigint> | null
		CommitLimit: $.VarRef<bigint> | null
		CommittedAS: $.VarRef<bigint> | null
		VmallocTotal: $.VarRef<bigint> | null
		VmallocUsed: $.VarRef<bigint> | null
		VmallocChunk: $.VarRef<bigint> | null
		HardwareCorrupted: $.VarRef<bigint> | null
		AnonHugePages: $.VarRef<bigint> | null
		ShmemHugePages: $.VarRef<bigint> | null
		ShmemPmdMapped: $.VarRef<bigint> | null
		CmaTotal: $.VarRef<bigint> | null
		CmaFree: $.VarRef<bigint> | null
		HugePagesTotal: $.VarRef<bigint> | null
		HugePagesFree: $.VarRef<bigint> | null
		HugePagesRsvd: $.VarRef<bigint> | null
		HugePagesSurp: $.VarRef<bigint> | null
		Hugepagesize: $.VarRef<bigint> | null
		DirectMap4k: $.VarRef<bigint> | null
		DirectMap2M: $.VarRef<bigint> | null
		DirectMap1G: $.VarRef<bigint> | null
	}

	constructor(init?: Partial<{MemTotal?: $.VarRef<bigint> | null, MemFree?: $.VarRef<bigint> | null, MemAvailable?: $.VarRef<bigint> | null, Buffers?: $.VarRef<bigint> | null, Cached?: $.VarRef<bigint> | null, SwapCached?: $.VarRef<bigint> | null, Active?: $.VarRef<bigint> | null, Inactive?: $.VarRef<bigint> | null, ActiveAnon?: $.VarRef<bigint> | null, InactiveAnon?: $.VarRef<bigint> | null, ActiveFile?: $.VarRef<bigint> | null, InactiveFile?: $.VarRef<bigint> | null, Unevictable?: $.VarRef<bigint> | null, Mlocked?: $.VarRef<bigint> | null, SwapTotal?: $.VarRef<bigint> | null, SwapFree?: $.VarRef<bigint> | null, Dirty?: $.VarRef<bigint> | null, Writeback?: $.VarRef<bigint> | null, AnonPages?: $.VarRef<bigint> | null, Mapped?: $.VarRef<bigint> | null, Shmem?: $.VarRef<bigint> | null, Slab?: $.VarRef<bigint> | null, SReclaimable?: $.VarRef<bigint> | null, SUnreclaim?: $.VarRef<bigint> | null, KernelStack?: $.VarRef<bigint> | null, PageTables?: $.VarRef<bigint> | null, NFSUnstable?: $.VarRef<bigint> | null, Bounce?: $.VarRef<bigint> | null, WritebackTmp?: $.VarRef<bigint> | null, CommitLimit?: $.VarRef<bigint> | null, CommittedAS?: $.VarRef<bigint> | null, VmallocTotal?: $.VarRef<bigint> | null, VmallocUsed?: $.VarRef<bigint> | null, VmallocChunk?: $.VarRef<bigint> | null, HardwareCorrupted?: $.VarRef<bigint> | null, AnonHugePages?: $.VarRef<bigint> | null, ShmemHugePages?: $.VarRef<bigint> | null, ShmemPmdMapped?: $.VarRef<bigint> | null, CmaTotal?: $.VarRef<bigint> | null, CmaFree?: $.VarRef<bigint> | null, HugePagesTotal?: $.VarRef<bigint> | null, HugePagesFree?: $.VarRef<bigint> | null, HugePagesRsvd?: $.VarRef<bigint> | null, HugePagesSurp?: $.VarRef<bigint> | null, Hugepagesize?: $.VarRef<bigint> | null, DirectMap4k?: $.VarRef<bigint> | null, DirectMap2M?: $.VarRef<bigint> | null, DirectMap1G?: $.VarRef<bigint> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			MemTotal: init?.MemTotal ?? (null! as $.VarRef<bigint> | null),
			MemFree: init?.MemFree ?? (null! as $.VarRef<bigint> | null),
			MemAvailable: init?.MemAvailable ?? (null! as $.VarRef<bigint> | null),
			Buffers: init?.Buffers ?? (null! as $.VarRef<bigint> | null),
			Cached: init?.Cached ?? (null! as $.VarRef<bigint> | null),
			SwapCached: init?.SwapCached ?? (null! as $.VarRef<bigint> | null),
			Active: init?.Active ?? (null! as $.VarRef<bigint> | null),
			Inactive: init?.Inactive ?? (null! as $.VarRef<bigint> | null),
			ActiveAnon: init?.ActiveAnon ?? (null! as $.VarRef<bigint> | null),
			InactiveAnon: init?.InactiveAnon ?? (null! as $.VarRef<bigint> | null),
			ActiveFile: init?.ActiveFile ?? (null! as $.VarRef<bigint> | null),
			InactiveFile: init?.InactiveFile ?? (null! as $.VarRef<bigint> | null),
			Unevictable: init?.Unevictable ?? (null! as $.VarRef<bigint> | null),
			Mlocked: init?.Mlocked ?? (null! as $.VarRef<bigint> | null),
			SwapTotal: init?.SwapTotal ?? (null! as $.VarRef<bigint> | null),
			SwapFree: init?.SwapFree ?? (null! as $.VarRef<bigint> | null),
			Dirty: init?.Dirty ?? (null! as $.VarRef<bigint> | null),
			Writeback: init?.Writeback ?? (null! as $.VarRef<bigint> | null),
			AnonPages: init?.AnonPages ?? (null! as $.VarRef<bigint> | null),
			Mapped: init?.Mapped ?? (null! as $.VarRef<bigint> | null),
			Shmem: init?.Shmem ?? (null! as $.VarRef<bigint> | null),
			Slab: init?.Slab ?? (null! as $.VarRef<bigint> | null),
			SReclaimable: init?.SReclaimable ?? (null! as $.VarRef<bigint> | null),
			SUnreclaim: init?.SUnreclaim ?? (null! as $.VarRef<bigint> | null),
			KernelStack: init?.KernelStack ?? (null! as $.VarRef<bigint> | null),
			PageTables: init?.PageTables ?? (null! as $.VarRef<bigint> | null),
			NFSUnstable: init?.NFSUnstable ?? (null! as $.VarRef<bigint> | null),
			Bounce: init?.Bounce ?? (null! as $.VarRef<bigint> | null),
			WritebackTmp: init?.WritebackTmp ?? (null! as $.VarRef<bigint> | null),
			CommitLimit: init?.CommitLimit ?? (null! as $.VarRef<bigint> | null),
			CommittedAS: init?.CommittedAS ?? (null! as $.VarRef<bigint> | null),
			VmallocTotal: init?.VmallocTotal ?? (null! as $.VarRef<bigint> | null),
			VmallocUsed: init?.VmallocUsed ?? (null! as $.VarRef<bigint> | null),
			VmallocChunk: init?.VmallocChunk ?? (null! as $.VarRef<bigint> | null),
			HardwareCorrupted: init?.HardwareCorrupted ?? (null! as $.VarRef<bigint> | null),
			AnonHugePages: init?.AnonHugePages ?? (null! as $.VarRef<bigint> | null),
			ShmemHugePages: init?.ShmemHugePages ?? (null! as $.VarRef<bigint> | null),
			ShmemPmdMapped: init?.ShmemPmdMapped ?? (null! as $.VarRef<bigint> | null),
			CmaTotal: init?.CmaTotal ?? (null! as $.VarRef<bigint> | null),
			CmaFree: init?.CmaFree ?? (null! as $.VarRef<bigint> | null),
			HugePagesTotal: init?.HugePagesTotal ?? (null! as $.VarRef<bigint> | null),
			HugePagesFree: init?.HugePagesFree ?? (null! as $.VarRef<bigint> | null),
			HugePagesRsvd: init?.HugePagesRsvd ?? (null! as $.VarRef<bigint> | null),
			HugePagesSurp: init?.HugePagesSurp ?? (null! as $.VarRef<bigint> | null),
			Hugepagesize: init?.Hugepagesize ?? (null! as $.VarRef<bigint> | null),
			DirectMap4k: init?.DirectMap4k ?? (null! as $.VarRef<bigint> | null),
			DirectMap2M: init?.DirectMap2M ?? (null! as $.VarRef<bigint> | null),
			DirectMap1G: init?.DirectMap1G ?? (null! as $.VarRef<bigint> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Meminfo {
		return new Meminfo(this, true)
	}

	public __goscriptAssign(source: Meminfo): void {
		const target = this._fields
		const values = source._fields
		target.MemTotal = values.MemTotal
		target.MemFree = values.MemFree
		target.MemAvailable = values.MemAvailable
		target.Buffers = values.Buffers
		target.Cached = values.Cached
		target.SwapCached = values.SwapCached
		target.Active = values.Active
		target.Inactive = values.Inactive
		target.ActiveAnon = values.ActiveAnon
		target.InactiveAnon = values.InactiveAnon
		target.ActiveFile = values.ActiveFile
		target.InactiveFile = values.InactiveFile
		target.Unevictable = values.Unevictable
		target.Mlocked = values.Mlocked
		target.SwapTotal = values.SwapTotal
		target.SwapFree = values.SwapFree
		target.Dirty = values.Dirty
		target.Writeback = values.Writeback
		target.AnonPages = values.AnonPages
		target.Mapped = values.Mapped
		target.Shmem = values.Shmem
		target.Slab = values.Slab
		target.SReclaimable = values.SReclaimable
		target.SUnreclaim = values.SUnreclaim
		target.KernelStack = values.KernelStack
		target.PageTables = values.PageTables
		target.NFSUnstable = values.NFSUnstable
		target.Bounce = values.Bounce
		target.WritebackTmp = values.WritebackTmp
		target.CommitLimit = values.CommitLimit
		target.CommittedAS = values.CommittedAS
		target.VmallocTotal = values.VmallocTotal
		target.VmallocUsed = values.VmallocUsed
		target.VmallocChunk = values.VmallocChunk
		target.HardwareCorrupted = values.HardwareCorrupted
		target.AnonHugePages = values.AnonHugePages
		target.ShmemHugePages = values.ShmemHugePages
		target.ShmemPmdMapped = values.ShmemPmdMapped
		target.CmaTotal = values.CmaTotal
		target.CmaFree = values.CmaFree
		target.HugePagesTotal = values.HugePagesTotal
		target.HugePagesFree = values.HugePagesFree
		target.HugePagesRsvd = values.HugePagesRsvd
		target.HugePagesSurp = values.HugePagesSurp
		target.Hugepagesize = values.Hugepagesize
		target.DirectMap4k = values.DirectMap4k
		target.DirectMap2M = values.DirectMap2M
		target.DirectMap1G = values.DirectMap1G
	}

	static __typeInfo = $.registerStructType(
		"procfs.Meminfo",
		() => new Meminfo(),
		() => [],
		Meminfo,
		() => [/* @__PURE__ */ $.structField("MemTotal", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [0], 0, true), /* @__PURE__ */ $.structField("MemFree", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [1], 8, true), /* @__PURE__ */ $.structField("MemAvailable", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [2], 16, true), /* @__PURE__ */ $.structField("Buffers", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [3], 24, true), /* @__PURE__ */ $.structField("Cached", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [4], 32, true), /* @__PURE__ */ $.structField("SwapCached", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [5], 40, true), /* @__PURE__ */ $.structField("Active", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [6], 48, true), /* @__PURE__ */ $.structField("Inactive", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [7], 56, true), /* @__PURE__ */ $.structField("ActiveAnon", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [8], 64, true), /* @__PURE__ */ $.structField("InactiveAnon", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [9], 72, true), /* @__PURE__ */ $.structField("ActiveFile", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [10], 80, true), /* @__PURE__ */ $.structField("InactiveFile", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [11], 88, true), /* @__PURE__ */ $.structField("Unevictable", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [12], 96, true), /* @__PURE__ */ $.structField("Mlocked", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [13], 104, true), /* @__PURE__ */ $.structField("SwapTotal", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [14], 112, true), /* @__PURE__ */ $.structField("SwapFree", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [15], 120, true), /* @__PURE__ */ $.structField("Dirty", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [16], 128, true), /* @__PURE__ */ $.structField("Writeback", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [17], 136, true), /* @__PURE__ */ $.structField("AnonPages", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [18], 144, true), /* @__PURE__ */ $.structField("Mapped", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [19], 152, true), /* @__PURE__ */ $.structField("Shmem", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [20], 160, true), /* @__PURE__ */ $.structField("Slab", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [21], 168, true), /* @__PURE__ */ $.structField("SReclaimable", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [22], 176, true), /* @__PURE__ */ $.structField("SUnreclaim", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [23], 184, true), /* @__PURE__ */ $.structField("KernelStack", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [24], 192, true), /* @__PURE__ */ $.structField("PageTables", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [25], 200, true), /* @__PURE__ */ $.structField("NFSUnstable", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [26], 208, true), /* @__PURE__ */ $.structField("Bounce", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [27], 216, true), /* @__PURE__ */ $.structField("WritebackTmp", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [28], 224, true), /* @__PURE__ */ $.structField("CommitLimit", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [29], 232, true), /* @__PURE__ */ $.structField("CommittedAS", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [30], 240, true), /* @__PURE__ */ $.structField("VmallocTotal", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [31], 248, true), /* @__PURE__ */ $.structField("VmallocUsed", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [32], 256, true), /* @__PURE__ */ $.structField("VmallocChunk", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [33], 264, true), /* @__PURE__ */ $.structField("HardwareCorrupted", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [34], 272, true), /* @__PURE__ */ $.structField("AnonHugePages", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [35], 280, true), /* @__PURE__ */ $.structField("ShmemHugePages", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [36], 288, true), /* @__PURE__ */ $.structField("ShmemPmdMapped", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [37], 296, true), /* @__PURE__ */ $.structField("CmaTotal", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [38], 304, true), /* @__PURE__ */ $.structField("CmaFree", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [39], 312, true), /* @__PURE__ */ $.structField("HugePagesTotal", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [40], 320, true), /* @__PURE__ */ $.structField("HugePagesFree", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [41], 328, true), /* @__PURE__ */ $.structField("HugePagesRsvd", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [42], 336, true), /* @__PURE__ */ $.structField("HugePagesSurp", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [43], 344, true), /* @__PURE__ */ $.structField("Hugepagesize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [44], 352, true), /* @__PURE__ */ $.structField("DirectMap4k", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [45], 360, true), /* @__PURE__ */ $.structField("DirectMap2M", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [46], 368, true), /* @__PURE__ */ $.structField("DirectMap1G", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [47], 376, true)]
	)
}

export async function parseMemInfo(r: io.Reader | null): globalThis.Promise<[Meminfo | $.VarRef<Meminfo> | null, $.GoError]> {
	let m: $.VarRef<Meminfo> = $.varRef(new Meminfo(undefined, true))
	let s: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner(r)
	while (await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))) {
		// Each line has at least a name and value; we ignore the unit.
		let fields: $.Slice<string> = strings.Fields((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s)))
		if ($.sliceLen(fields) < 2) {
			return [null, fmt.Errorf("malformed meminfo line: %q", (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s)))]
		}

		let __goscriptTuple0: any = strconv.ParseUint($.arrayIndex(fields!, 1), 0, 64)
		let v = $.varRef(__goscriptTuple0[0])
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}

		switch ($.arrayIndex(fields!, 0)) {
			case "MemTotal:":
			{
				m.value.MemTotal = v
				break
			}
			case "MemFree:":
			{
				m.value.MemFree = v
				break
			}
			case "MemAvailable:":
			{
				m.value.MemAvailable = v
				break
			}
			case "Buffers:":
			{
				m.value.Buffers = v
				break
			}
			case "Cached:":
			{
				m.value.Cached = v
				break
			}
			case "SwapCached:":
			{
				m.value.SwapCached = v
				break
			}
			case "Active:":
			{
				m.value.Active = v
				break
			}
			case "Inactive:":
			{
				m.value.Inactive = v
				break
			}
			case "Active(anon):":
			{
				m.value.ActiveAnon = v
				break
			}
			case "Inactive(anon):":
			{
				m.value.InactiveAnon = v
				break
			}
			case "Active(file):":
			{
				m.value.ActiveFile = v
				break
			}
			case "Inactive(file):":
			{
				m.value.InactiveFile = v
				break
			}
			case "Unevictable:":
			{
				m.value.Unevictable = v
				break
			}
			case "Mlocked:":
			{
				m.value.Mlocked = v
				break
			}
			case "SwapTotal:":
			{
				m.value.SwapTotal = v
				break
			}
			case "SwapFree:":
			{
				m.value.SwapFree = v
				break
			}
			case "Dirty:":
			{
				m.value.Dirty = v
				break
			}
			case "Writeback:":
			{
				m.value.Writeback = v
				break
			}
			case "AnonPages:":
			{
				m.value.AnonPages = v
				break
			}
			case "Mapped:":
			{
				m.value.Mapped = v
				break
			}
			case "Shmem:":
			{
				m.value.Shmem = v
				break
			}
			case "Slab:":
			{
				m.value.Slab = v
				break
			}
			case "SReclaimable:":
			{
				m.value.SReclaimable = v
				break
			}
			case "SUnreclaim:":
			{
				m.value.SUnreclaim = v
				break
			}
			case "KernelStack:":
			{
				m.value.KernelStack = v
				break
			}
			case "PageTables:":
			{
				m.value.PageTables = v
				break
			}
			case "NFS_Unstable:":
			{
				m.value.NFSUnstable = v
				break
			}
			case "Bounce:":
			{
				m.value.Bounce = v
				break
			}
			case "WritebackTmp:":
			{
				m.value.WritebackTmp = v
				break
			}
			case "CommitLimit:":
			{
				m.value.CommitLimit = v
				break
			}
			case "Committed_AS:":
			{
				m.value.CommittedAS = v
				break
			}
			case "VmallocTotal:":
			{
				m.value.VmallocTotal = v
				break
			}
			case "VmallocUsed:":
			{
				m.value.VmallocUsed = v
				break
			}
			case "VmallocChunk:":
			{
				m.value.VmallocChunk = v
				break
			}
			case "HardwareCorrupted:":
			{
				m.value.HardwareCorrupted = v
				break
			}
			case "AnonHugePages:":
			{
				m.value.AnonHugePages = v
				break
			}
			case "ShmemHugePages:":
			{
				m.value.ShmemHugePages = v
				break
			}
			case "ShmemPmdMapped:":
			{
				m.value.ShmemPmdMapped = v
				break
			}
			case "CmaTotal:":
			{
				m.value.CmaTotal = v
				break
			}
			case "CmaFree:":
			{
				m.value.CmaFree = v
				break
			}
			case "HugePages_Total:":
			{
				m.value.HugePagesTotal = v
				break
			}
			case "HugePages_Free:":
			{
				m.value.HugePagesFree = v
				break
			}
			case "HugePages_Rsvd:":
			{
				m.value.HugePagesRsvd = v
				break
			}
			case "HugePages_Surp:":
			{
				m.value.HugePagesSurp = v
				break
			}
			case "Hugepagesize:":
			{
				m.value.Hugepagesize = v
				break
			}
			case "DirectMap4k:":
			{
				m.value.DirectMap4k = v
				break
			}
			case "DirectMap2M:":
			{
				m.value.DirectMap2M = v
				break
			}
			case "DirectMap1G:":
			{
				m.value.DirectMap1G = v
				break
			}
		}
	}

	return [m, null]
}
