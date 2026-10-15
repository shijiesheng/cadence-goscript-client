// Generated file based on zoneinfo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as regexp from "@goscript/regexp/index.js"

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
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/regexp/index.js"
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

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.Zoneinfo"])

export class Zoneinfo {
	public get Node(): string {
		return this._fields.Node
	}

	public set Node(value: string) {
		this._fields.Node = value
	}

	public get Zone(): string {
		return this._fields.Zone
	}

	public set Zone(value: string) {
		this._fields.Zone = value
	}

	public get NrFreePages(): $.VarRef<bigint> | null {
		return this._fields.NrFreePages
	}

	public set NrFreePages(value: $.VarRef<bigint> | null) {
		this._fields.NrFreePages = value
	}

	public get Min(): $.VarRef<bigint> | null {
		return this._fields.Min
	}

	public set Min(value: $.VarRef<bigint> | null) {
		this._fields.Min = value
	}

	public get Low(): $.VarRef<bigint> | null {
		return this._fields.Low
	}

	public set Low(value: $.VarRef<bigint> | null) {
		this._fields.Low = value
	}

	public get High(): $.VarRef<bigint> | null {
		return this._fields.High
	}

	public set High(value: $.VarRef<bigint> | null) {
		this._fields.High = value
	}

	public get Scanned(): $.VarRef<bigint> | null {
		return this._fields.Scanned
	}

	public set Scanned(value: $.VarRef<bigint> | null) {
		this._fields.Scanned = value
	}

	public get Spanned(): $.VarRef<bigint> | null {
		return this._fields.Spanned
	}

	public set Spanned(value: $.VarRef<bigint> | null) {
		this._fields.Spanned = value
	}

	public get Present(): $.VarRef<bigint> | null {
		return this._fields.Present
	}

	public set Present(value: $.VarRef<bigint> | null) {
		this._fields.Present = value
	}

	public get Managed(): $.VarRef<bigint> | null {
		return this._fields.Managed
	}

	public set Managed(value: $.VarRef<bigint> | null) {
		this._fields.Managed = value
	}

	public get NrActiveAnon(): $.VarRef<bigint> | null {
		return this._fields.NrActiveAnon
	}

	public set NrActiveAnon(value: $.VarRef<bigint> | null) {
		this._fields.NrActiveAnon = value
	}

	public get NrInactiveAnon(): $.VarRef<bigint> | null {
		return this._fields.NrInactiveAnon
	}

	public set NrInactiveAnon(value: $.VarRef<bigint> | null) {
		this._fields.NrInactiveAnon = value
	}

	public get NrIsolatedAnon(): $.VarRef<bigint> | null {
		return this._fields.NrIsolatedAnon
	}

	public set NrIsolatedAnon(value: $.VarRef<bigint> | null) {
		this._fields.NrIsolatedAnon = value
	}

	public get NrAnonPages(): $.VarRef<bigint> | null {
		return this._fields.NrAnonPages
	}

	public set NrAnonPages(value: $.VarRef<bigint> | null) {
		this._fields.NrAnonPages = value
	}

	public get NrAnonTransparentHugepages(): $.VarRef<bigint> | null {
		return this._fields.NrAnonTransparentHugepages
	}

	public set NrAnonTransparentHugepages(value: $.VarRef<bigint> | null) {
		this._fields.NrAnonTransparentHugepages = value
	}

	public get NrActiveFile(): $.VarRef<bigint> | null {
		return this._fields.NrActiveFile
	}

	public set NrActiveFile(value: $.VarRef<bigint> | null) {
		this._fields.NrActiveFile = value
	}

	public get NrInactiveFile(): $.VarRef<bigint> | null {
		return this._fields.NrInactiveFile
	}

	public set NrInactiveFile(value: $.VarRef<bigint> | null) {
		this._fields.NrInactiveFile = value
	}

	public get NrIsolatedFile(): $.VarRef<bigint> | null {
		return this._fields.NrIsolatedFile
	}

	public set NrIsolatedFile(value: $.VarRef<bigint> | null) {
		this._fields.NrIsolatedFile = value
	}

	public get NrFilePages(): $.VarRef<bigint> | null {
		return this._fields.NrFilePages
	}

	public set NrFilePages(value: $.VarRef<bigint> | null) {
		this._fields.NrFilePages = value
	}

	public get NrSlabReclaimable(): $.VarRef<bigint> | null {
		return this._fields.NrSlabReclaimable
	}

	public set NrSlabReclaimable(value: $.VarRef<bigint> | null) {
		this._fields.NrSlabReclaimable = value
	}

	public get NrSlabUnreclaimable(): $.VarRef<bigint> | null {
		return this._fields.NrSlabUnreclaimable
	}

	public set NrSlabUnreclaimable(value: $.VarRef<bigint> | null) {
		this._fields.NrSlabUnreclaimable = value
	}

	public get NrMlockStack(): $.VarRef<bigint> | null {
		return this._fields.NrMlockStack
	}

	public set NrMlockStack(value: $.VarRef<bigint> | null) {
		this._fields.NrMlockStack = value
	}

	public get NrKernelStack(): $.VarRef<bigint> | null {
		return this._fields.NrKernelStack
	}

	public set NrKernelStack(value: $.VarRef<bigint> | null) {
		this._fields.NrKernelStack = value
	}

	public get NrMapped(): $.VarRef<bigint> | null {
		return this._fields.NrMapped
	}

	public set NrMapped(value: $.VarRef<bigint> | null) {
		this._fields.NrMapped = value
	}

	public get NrDirty(): $.VarRef<bigint> | null {
		return this._fields.NrDirty
	}

	public set NrDirty(value: $.VarRef<bigint> | null) {
		this._fields.NrDirty = value
	}

	public get NrWriteback(): $.VarRef<bigint> | null {
		return this._fields.NrWriteback
	}

	public set NrWriteback(value: $.VarRef<bigint> | null) {
		this._fields.NrWriteback = value
	}

	public get NrUnevictable(): $.VarRef<bigint> | null {
		return this._fields.NrUnevictable
	}

	public set NrUnevictable(value: $.VarRef<bigint> | null) {
		this._fields.NrUnevictable = value
	}

	public get NrShmem(): $.VarRef<bigint> | null {
		return this._fields.NrShmem
	}

	public set NrShmem(value: $.VarRef<bigint> | null) {
		this._fields.NrShmem = value
	}

	public get NrDirtied(): $.VarRef<bigint> | null {
		return this._fields.NrDirtied
	}

	public set NrDirtied(value: $.VarRef<bigint> | null) {
		this._fields.NrDirtied = value
	}

	public get NrWritten(): $.VarRef<bigint> | null {
		return this._fields.NrWritten
	}

	public set NrWritten(value: $.VarRef<bigint> | null) {
		this._fields.NrWritten = value
	}

	public get NumaHit(): $.VarRef<bigint> | null {
		return this._fields.NumaHit
	}

	public set NumaHit(value: $.VarRef<bigint> | null) {
		this._fields.NumaHit = value
	}

	public get NumaMiss(): $.VarRef<bigint> | null {
		return this._fields.NumaMiss
	}

	public set NumaMiss(value: $.VarRef<bigint> | null) {
		this._fields.NumaMiss = value
	}

	public get NumaForeign(): $.VarRef<bigint> | null {
		return this._fields.NumaForeign
	}

	public set NumaForeign(value: $.VarRef<bigint> | null) {
		this._fields.NumaForeign = value
	}

	public get NumaInterleave(): $.VarRef<bigint> | null {
		return this._fields.NumaInterleave
	}

	public set NumaInterleave(value: $.VarRef<bigint> | null) {
		this._fields.NumaInterleave = value
	}

	public get NumaLocal(): $.VarRef<bigint> | null {
		return this._fields.NumaLocal
	}

	public set NumaLocal(value: $.VarRef<bigint> | null) {
		this._fields.NumaLocal = value
	}

	public get NumaOther(): $.VarRef<bigint> | null {
		return this._fields.NumaOther
	}

	public set NumaOther(value: $.VarRef<bigint> | null) {
		this._fields.NumaOther = value
	}

	public get Protection(): $.Slice<$.VarRef<bigint> | null> {
		return this._fields.Protection
	}

	public set Protection(value: $.Slice<$.VarRef<bigint> | null>) {
		this._fields.Protection = value
	}

	public _fields: {
		Node: string
		Zone: string
		NrFreePages: $.VarRef<bigint> | null
		Min: $.VarRef<bigint> | null
		Low: $.VarRef<bigint> | null
		High: $.VarRef<bigint> | null
		Scanned: $.VarRef<bigint> | null
		Spanned: $.VarRef<bigint> | null
		Present: $.VarRef<bigint> | null
		Managed: $.VarRef<bigint> | null
		NrActiveAnon: $.VarRef<bigint> | null
		NrInactiveAnon: $.VarRef<bigint> | null
		NrIsolatedAnon: $.VarRef<bigint> | null
		NrAnonPages: $.VarRef<bigint> | null
		NrAnonTransparentHugepages: $.VarRef<bigint> | null
		NrActiveFile: $.VarRef<bigint> | null
		NrInactiveFile: $.VarRef<bigint> | null
		NrIsolatedFile: $.VarRef<bigint> | null
		NrFilePages: $.VarRef<bigint> | null
		NrSlabReclaimable: $.VarRef<bigint> | null
		NrSlabUnreclaimable: $.VarRef<bigint> | null
		NrMlockStack: $.VarRef<bigint> | null
		NrKernelStack: $.VarRef<bigint> | null
		NrMapped: $.VarRef<bigint> | null
		NrDirty: $.VarRef<bigint> | null
		NrWriteback: $.VarRef<bigint> | null
		NrUnevictable: $.VarRef<bigint> | null
		NrShmem: $.VarRef<bigint> | null
		NrDirtied: $.VarRef<bigint> | null
		NrWritten: $.VarRef<bigint> | null
		NumaHit: $.VarRef<bigint> | null
		NumaMiss: $.VarRef<bigint> | null
		NumaForeign: $.VarRef<bigint> | null
		NumaInterleave: $.VarRef<bigint> | null
		NumaLocal: $.VarRef<bigint> | null
		NumaOther: $.VarRef<bigint> | null
		Protection: $.Slice<$.VarRef<bigint> | null>
	}

	constructor(init?: Partial<{Node?: string, Zone?: string, NrFreePages?: $.VarRef<bigint> | null, Min?: $.VarRef<bigint> | null, Low?: $.VarRef<bigint> | null, High?: $.VarRef<bigint> | null, Scanned?: $.VarRef<bigint> | null, Spanned?: $.VarRef<bigint> | null, Present?: $.VarRef<bigint> | null, Managed?: $.VarRef<bigint> | null, NrActiveAnon?: $.VarRef<bigint> | null, NrInactiveAnon?: $.VarRef<bigint> | null, NrIsolatedAnon?: $.VarRef<bigint> | null, NrAnonPages?: $.VarRef<bigint> | null, NrAnonTransparentHugepages?: $.VarRef<bigint> | null, NrActiveFile?: $.VarRef<bigint> | null, NrInactiveFile?: $.VarRef<bigint> | null, NrIsolatedFile?: $.VarRef<bigint> | null, NrFilePages?: $.VarRef<bigint> | null, NrSlabReclaimable?: $.VarRef<bigint> | null, NrSlabUnreclaimable?: $.VarRef<bigint> | null, NrMlockStack?: $.VarRef<bigint> | null, NrKernelStack?: $.VarRef<bigint> | null, NrMapped?: $.VarRef<bigint> | null, NrDirty?: $.VarRef<bigint> | null, NrWriteback?: $.VarRef<bigint> | null, NrUnevictable?: $.VarRef<bigint> | null, NrShmem?: $.VarRef<bigint> | null, NrDirtied?: $.VarRef<bigint> | null, NrWritten?: $.VarRef<bigint> | null, NumaHit?: $.VarRef<bigint> | null, NumaMiss?: $.VarRef<bigint> | null, NumaForeign?: $.VarRef<bigint> | null, NumaInterleave?: $.VarRef<bigint> | null, NumaLocal?: $.VarRef<bigint> | null, NumaOther?: $.VarRef<bigint> | null, Protection?: $.Slice<$.VarRef<bigint> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Node: init?.Node ?? ("" as string),
			Zone: init?.Zone ?? ("" as string),
			NrFreePages: init?.NrFreePages ?? (null! as $.VarRef<bigint> | null),
			Min: init?.Min ?? (null! as $.VarRef<bigint> | null),
			Low: init?.Low ?? (null! as $.VarRef<bigint> | null),
			High: init?.High ?? (null! as $.VarRef<bigint> | null),
			Scanned: init?.Scanned ?? (null! as $.VarRef<bigint> | null),
			Spanned: init?.Spanned ?? (null! as $.VarRef<bigint> | null),
			Present: init?.Present ?? (null! as $.VarRef<bigint> | null),
			Managed: init?.Managed ?? (null! as $.VarRef<bigint> | null),
			NrActiveAnon: init?.NrActiveAnon ?? (null! as $.VarRef<bigint> | null),
			NrInactiveAnon: init?.NrInactiveAnon ?? (null! as $.VarRef<bigint> | null),
			NrIsolatedAnon: init?.NrIsolatedAnon ?? (null! as $.VarRef<bigint> | null),
			NrAnonPages: init?.NrAnonPages ?? (null! as $.VarRef<bigint> | null),
			NrAnonTransparentHugepages: init?.NrAnonTransparentHugepages ?? (null! as $.VarRef<bigint> | null),
			NrActiveFile: init?.NrActiveFile ?? (null! as $.VarRef<bigint> | null),
			NrInactiveFile: init?.NrInactiveFile ?? (null! as $.VarRef<bigint> | null),
			NrIsolatedFile: init?.NrIsolatedFile ?? (null! as $.VarRef<bigint> | null),
			NrFilePages: init?.NrFilePages ?? (null! as $.VarRef<bigint> | null),
			NrSlabReclaimable: init?.NrSlabReclaimable ?? (null! as $.VarRef<bigint> | null),
			NrSlabUnreclaimable: init?.NrSlabUnreclaimable ?? (null! as $.VarRef<bigint> | null),
			NrMlockStack: init?.NrMlockStack ?? (null! as $.VarRef<bigint> | null),
			NrKernelStack: init?.NrKernelStack ?? (null! as $.VarRef<bigint> | null),
			NrMapped: init?.NrMapped ?? (null! as $.VarRef<bigint> | null),
			NrDirty: init?.NrDirty ?? (null! as $.VarRef<bigint> | null),
			NrWriteback: init?.NrWriteback ?? (null! as $.VarRef<bigint> | null),
			NrUnevictable: init?.NrUnevictable ?? (null! as $.VarRef<bigint> | null),
			NrShmem: init?.NrShmem ?? (null! as $.VarRef<bigint> | null),
			NrDirtied: init?.NrDirtied ?? (null! as $.VarRef<bigint> | null),
			NrWritten: init?.NrWritten ?? (null! as $.VarRef<bigint> | null),
			NumaHit: init?.NumaHit ?? (null! as $.VarRef<bigint> | null),
			NumaMiss: init?.NumaMiss ?? (null! as $.VarRef<bigint> | null),
			NumaForeign: init?.NumaForeign ?? (null! as $.VarRef<bigint> | null),
			NumaInterleave: init?.NumaInterleave ?? (null! as $.VarRef<bigint> | null),
			NumaLocal: init?.NumaLocal ?? (null! as $.VarRef<bigint> | null),
			NumaOther: init?.NumaOther ?? (null! as $.VarRef<bigint> | null),
			Protection: init?.Protection ?? (null! as $.Slice<$.VarRef<bigint> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Zoneinfo {
		return new Zoneinfo(this, true)
	}

	public __goscriptAssign(source: Zoneinfo): void {
		const target = this._fields
		const values = source._fields
		target.Node = values.Node
		target.Zone = values.Zone
		target.NrFreePages = values.NrFreePages
		target.Min = values.Min
		target.Low = values.Low
		target.High = values.High
		target.Scanned = values.Scanned
		target.Spanned = values.Spanned
		target.Present = values.Present
		target.Managed = values.Managed
		target.NrActiveAnon = values.NrActiveAnon
		target.NrInactiveAnon = values.NrInactiveAnon
		target.NrIsolatedAnon = values.NrIsolatedAnon
		target.NrAnonPages = values.NrAnonPages
		target.NrAnonTransparentHugepages = values.NrAnonTransparentHugepages
		target.NrActiveFile = values.NrActiveFile
		target.NrInactiveFile = values.NrInactiveFile
		target.NrIsolatedFile = values.NrIsolatedFile
		target.NrFilePages = values.NrFilePages
		target.NrSlabReclaimable = values.NrSlabReclaimable
		target.NrSlabUnreclaimable = values.NrSlabUnreclaimable
		target.NrMlockStack = values.NrMlockStack
		target.NrKernelStack = values.NrKernelStack
		target.NrMapped = values.NrMapped
		target.NrDirty = values.NrDirty
		target.NrWriteback = values.NrWriteback
		target.NrUnevictable = values.NrUnevictable
		target.NrShmem = values.NrShmem
		target.NrDirtied = values.NrDirtied
		target.NrWritten = values.NrWritten
		target.NumaHit = values.NumaHit
		target.NumaMiss = values.NumaMiss
		target.NumaForeign = values.NumaForeign
		target.NumaInterleave = values.NumaInterleave
		target.NumaLocal = values.NumaLocal
		target.NumaOther = values.NumaOther
		target.Protection = values.Protection
	}

	static __typeInfo = $.registerStructType(
		"procfs.Zoneinfo",
		() => new Zoneinfo(),
		() => [],
		Zoneinfo,
		() => [/* @__PURE__ */ $.structField("Node", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Zone", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("NrFreePages", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [2], 32, true), /* @__PURE__ */ $.structField("Min", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [3], 40, true), /* @__PURE__ */ $.structField("Low", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [4], 48, true), /* @__PURE__ */ $.structField("High", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [5], 56, true), /* @__PURE__ */ $.structField("Scanned", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [6], 64, true), /* @__PURE__ */ $.structField("Spanned", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [7], 72, true), /* @__PURE__ */ $.structField("Present", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [8], 80, true), /* @__PURE__ */ $.structField("Managed", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [9], 88, true), /* @__PURE__ */ $.structField("NrActiveAnon", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [10], 96, true), /* @__PURE__ */ $.structField("NrInactiveAnon", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [11], 104, true), /* @__PURE__ */ $.structField("NrIsolatedAnon", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [12], 112, true), /* @__PURE__ */ $.structField("NrAnonPages", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [13], 120, true), /* @__PURE__ */ $.structField("NrAnonTransparentHugepages", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [14], 128, true), /* @__PURE__ */ $.structField("NrActiveFile", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [15], 136, true), /* @__PURE__ */ $.structField("NrInactiveFile", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [16], 144, true), /* @__PURE__ */ $.structField("NrIsolatedFile", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [17], 152, true), /* @__PURE__ */ $.structField("NrFilePages", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [18], 160, true), /* @__PURE__ */ $.structField("NrSlabReclaimable", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [19], 168, true), /* @__PURE__ */ $.structField("NrSlabUnreclaimable", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [20], 176, true), /* @__PURE__ */ $.structField("NrMlockStack", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [21], 184, true), /* @__PURE__ */ $.structField("NrKernelStack", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [22], 192, true), /* @__PURE__ */ $.structField("NrMapped", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [23], 200, true), /* @__PURE__ */ $.structField("NrDirty", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [24], 208, true), /* @__PURE__ */ $.structField("NrWriteback", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [25], 216, true), /* @__PURE__ */ $.structField("NrUnevictable", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [26], 224, true), /* @__PURE__ */ $.structField("NrShmem", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [27], 232, true), /* @__PURE__ */ $.structField("NrDirtied", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [28], 240, true), /* @__PURE__ */ $.structField("NrWritten", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [29], 248, true), /* @__PURE__ */ $.structField("NumaHit", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [30], 256, true), /* @__PURE__ */ $.structField("NumaMiss", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [31], 264, true), /* @__PURE__ */ $.structField("NumaForeign", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [32], 272, true), /* @__PURE__ */ $.structField("NumaInterleave", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [33], 280, true), /* @__PURE__ */ $.structField("NumaLocal", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [34], 288, true), /* @__PURE__ */ $.structField("NumaOther", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [35], 296, true), /* @__PURE__ */ $.structField("Protection", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))), [36], 304, true)]
	)
}

export let nodeZoneRE: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("(\\d+), zone\\s+(\\w+)")

export function __goscript_set_nodeZoneRE(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	nodeZoneRE = __goscriptValue
}

export async function parseZoneinfo(zoneinfoData: $.Slice<number>): globalThis.Promise<[$.Slice<Zoneinfo>, $.GoError]> {

	let zoneinfo: $.Slice<Zoneinfo> = $.arrayToSlice<Zoneinfo>([])

	let zoneinfoBlocks: $.Slice<$.Slice<number>> = bytes.Split(zoneinfoData, new Uint8Array([10, 78, 111, 100, 101]))
	for (let __goscriptRangeTarget1 = zoneinfoBlocks, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let block = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as $.Slice<number>)
		let zoneinfoElement: Zoneinfo = new Zoneinfo(undefined, true)
		let lines: $.Slice<string> = strings.Split($.bytesToString(block), "\n")
		for (let __goscriptRangeTarget0 = lines, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let line = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)

			{
				let nodeZone: $.Slice<string> = await (nodeZoneRE !== null && (nodeZoneRE as any).__isVarRef !== true && (nodeZoneRE as any).__goValue === undefined ? ((nodeZoneRE as any) as regexp.Regexp).FindStringSubmatch(line) : regexp.Regexp.prototype.FindStringSubmatch.call(nodeZoneRE, line))
				if (nodeZone != null) {
					zoneinfoElement.Node = $.arrayIndex(nodeZone!, 1)
					zoneinfoElement.Zone = $.arrayIndex(nodeZone!, 2)
					continue
				}
			}
			if (strings.HasPrefix(strings.TrimSpace(line), "per-node stats")) {
				zoneinfoElement.Zone = ""
				continue
			}
			let parts: $.Slice<string> = strings.Fields(strings.TrimSpace(line))
			if ($.sliceLen(parts) < 2) {
				continue
			}
			let vp: util.ValueParser | $.VarRef<util.ValueParser> | null = util.NewValueParser($.arrayIndex(parts!, 1))
			switch ($.arrayIndex(parts!, 0)) {
				case "nr_free_pages":
				{
					zoneinfoElement.NrFreePages = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "min":
				{
					zoneinfoElement.Min = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "low":
				{
					zoneinfoElement.Low = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "high":
				{
					zoneinfoElement.High = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "scanned":
				{
					zoneinfoElement.Scanned = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "spanned":
				{
					zoneinfoElement.Spanned = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "present":
				{
					zoneinfoElement.Present = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "managed":
				{
					zoneinfoElement.Managed = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_active_anon":
				{
					zoneinfoElement.NrActiveAnon = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_inactive_anon":
				{
					zoneinfoElement.NrInactiveAnon = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_isolated_anon":
				{
					zoneinfoElement.NrIsolatedAnon = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_anon_pages":
				{
					zoneinfoElement.NrAnonPages = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_anon_transparent_hugepages":
				{
					zoneinfoElement.NrAnonTransparentHugepages = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_active_file":
				{
					zoneinfoElement.NrActiveFile = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_inactive_file":
				{
					zoneinfoElement.NrInactiveFile = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_isolated_file":
				{
					zoneinfoElement.NrIsolatedFile = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_file_pages":
				{
					zoneinfoElement.NrFilePages = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_slab_reclaimable":
				{
					zoneinfoElement.NrSlabReclaimable = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_slab_unreclaimable":
				{
					zoneinfoElement.NrSlabUnreclaimable = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_mlock_stack":
				{
					zoneinfoElement.NrMlockStack = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_kernel_stack":
				{
					zoneinfoElement.NrKernelStack = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_mapped":
				{
					zoneinfoElement.NrMapped = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_dirty":
				{
					zoneinfoElement.NrDirty = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_writeback":
				{
					zoneinfoElement.NrWriteback = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_unevictable":
				{
					zoneinfoElement.NrUnevictable = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_shmem":
				{
					zoneinfoElement.NrShmem = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_dirtied":
				{
					zoneinfoElement.NrDirtied = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_written":
				{
					zoneinfoElement.NrWritten = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "numa_hit":
				{
					zoneinfoElement.NumaHit = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "numa_miss":
				{
					zoneinfoElement.NumaMiss = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "numa_foreign":
				{
					zoneinfoElement.NumaForeign = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "numa_interleave":
				{
					zoneinfoElement.NumaInterleave = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "numa_local":
				{
					zoneinfoElement.NumaLocal = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "numa_other":
				{
					zoneinfoElement.NumaOther = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "protection:":
				{
					let protectionParts: $.Slice<string> = strings.Split(line, ":")
					let protectionValues = strings.Replace($.arrayIndex(protectionParts!, 1), "(", "", 1)
					protectionValues = strings.Replace(protectionValues, ")", "", 1)
					protectionValues = strings.TrimSpace(protectionValues)
					let protectionStringMap: $.Slice<string> = strings.Split(protectionValues, ", ")
					let __goscriptTuple0: any = util.ParsePInt64s(protectionStringMap)
					let val: $.Slice<$.VarRef<bigint> | null> = __goscriptTuple0[0]
					let err = __goscriptTuple0[1]
					if (err == null) {
						zoneinfoElement.Protection = val
					}
					break
				}
			}
		}

		zoneinfo = $.appendOne(zoneinfo, (zoneinfoElement).clone())
	}
	return [zoneinfo, null]
}
