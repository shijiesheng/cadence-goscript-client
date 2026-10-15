// Generated file based on mountstats.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/bufio/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.Mount", "procfs.MountStats", "procfs.MountStatsNFS", "procfs.NFSBytesStats", "procfs.NFSEventsStats", "procfs.NFSOperationStats", "procfs.NFSTransportStats"])

export type MountStats = {
	mountStats(): void
}

$.registerInterfaceType(
	"procfs.MountStats",
	null,
	[$.methodSignature("mountStats")]
);

export class Mount {
	// Name of the device.
	public get Device(): string {
		return this._fields.Device
	}

	public set Device(value: string) {
		this._fields.Device = value
	}

	// The mount point of the device.
	public get Mount(): string {
		return this._fields.Mount
	}

	public set Mount(value: string) {
		this._fields.Mount = value
	}

	// The filesystem type used by the device.
	public get Type(): string {
		return this._fields.Type
	}

	public set Type(value: string) {
		this._fields.Type = value
	}

	// If available additional statistics related to this Mount.
	// Use a type assertion to determine if additional statistics are available.
	public get Stats(): MountStats | null {
		return this._fields.Stats
	}

	public set Stats(value: MountStats | null) {
		this._fields.Stats = value
	}

	public _fields: {
		Device: string
		Mount: string
		Type: string
		Stats: MountStats | null
	}

	constructor(init?: Partial<{Device?: string, Mount?: string, Type?: string, Stats?: MountStats | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Device: init?.Device ?? ("" as string),
			Mount: init?.Mount ?? ("" as string),
			Type: init?.Type ?? ("" as string),
			Stats: init?.Stats ?? (null! as MountStats | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Mount {
		return new Mount(this, true)
	}

	public __goscriptAssign(source: Mount): void {
		const target = this._fields
		const values = source._fields
		target.Device = values.Device
		target.Mount = values.Mount
		target.Type = values.Type
		target.Stats = $.assignFieldValue(target.Stats, values.Stats, "procfs.MountStats")
	}

	static __typeInfo = $.registerStructType(
		"procfs.Mount",
		() => new Mount(),
		() => [],
		Mount,
		() => [/* @__PURE__ */ $.structField("Device", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Mount", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Stats", "procfs.MountStats", [3], 48, true)]
	)
}

export class NFSBytesStats {
	// Number of bytes read using the read() syscall.
	public get Read(): bigint {
		return this._fields.Read
	}

	public set Read(value: bigint) {
		this._fields.Read = value
	}

	// Number of bytes written using the write() syscall.
	public get Write(): bigint {
		return this._fields.Write
	}

	public set Write(value: bigint) {
		this._fields.Write = value
	}

	// Number of bytes read using the read() syscall in O_DIRECT mode.
	public get DirectRead(): bigint {
		return this._fields.DirectRead
	}

	public set DirectRead(value: bigint) {
		this._fields.DirectRead = value
	}

	// Number of bytes written using the write() syscall in O_DIRECT mode.
	public get DirectWrite(): bigint {
		return this._fields.DirectWrite
	}

	public set DirectWrite(value: bigint) {
		this._fields.DirectWrite = value
	}

	// Number of bytes read from the NFS server, in total.
	public get ReadTotal(): bigint {
		return this._fields.ReadTotal
	}

	public set ReadTotal(value: bigint) {
		this._fields.ReadTotal = value
	}

	// Number of bytes written to the NFS server, in total.
	public get WriteTotal(): bigint {
		return this._fields.WriteTotal
	}

	public set WriteTotal(value: bigint) {
		this._fields.WriteTotal = value
	}

	// Number of pages read directly via mmap()'d files.
	public get ReadPages(): bigint {
		return this._fields.ReadPages
	}

	public set ReadPages(value: bigint) {
		this._fields.ReadPages = value
	}

	// Number of pages written directly via mmap()'d files.
	public get WritePages(): bigint {
		return this._fields.WritePages
	}

	public set WritePages(value: bigint) {
		this._fields.WritePages = value
	}

	public _fields: {
		Read: bigint
		Write: bigint
		DirectRead: bigint
		DirectWrite: bigint
		ReadTotal: bigint
		WriteTotal: bigint
		ReadPages: bigint
		WritePages: bigint
	}

	constructor(init?: Partial<{Read?: bigint, Write?: bigint, DirectRead?: bigint, DirectWrite?: bigint, ReadTotal?: bigint, WriteTotal?: bigint, ReadPages?: bigint, WritePages?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Read: init?.Read ?? (0n as bigint),
			Write: init?.Write ?? (0n as bigint),
			DirectRead: init?.DirectRead ?? (0n as bigint),
			DirectWrite: init?.DirectWrite ?? (0n as bigint),
			ReadTotal: init?.ReadTotal ?? (0n as bigint),
			WriteTotal: init?.WriteTotal ?? (0n as bigint),
			ReadPages: init?.ReadPages ?? (0n as bigint),
			WritePages: init?.WritePages ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NFSBytesStats {
		return new NFSBytesStats(this, true)
	}

	public __goscriptAssign(source: NFSBytesStats): void {
		const target = this._fields
		const values = source._fields
		target.Read = values.Read
		target.Write = values.Write
		target.DirectRead = values.DirectRead
		target.DirectWrite = values.DirectWrite
		target.ReadTotal = values.ReadTotal
		target.WriteTotal = values.WriteTotal
		target.ReadPages = values.ReadPages
		target.WritePages = values.WritePages
	}

	static __typeInfo = $.registerStructType(
		"procfs.NFSBytesStats",
		() => new NFSBytesStats(),
		() => [],
		NFSBytesStats,
		() => [/* @__PURE__ */ $.structField("Read", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("Write", /* @__PURE__ */ $.basicType("uint64"), [1], 8, true), /* @__PURE__ */ $.structField("DirectRead", /* @__PURE__ */ $.basicType("uint64"), [2], 16, true), /* @__PURE__ */ $.structField("DirectWrite", /* @__PURE__ */ $.basicType("uint64"), [3], 24, true), /* @__PURE__ */ $.structField("ReadTotal", /* @__PURE__ */ $.basicType("uint64"), [4], 32, true), /* @__PURE__ */ $.structField("WriteTotal", /* @__PURE__ */ $.basicType("uint64"), [5], 40, true), /* @__PURE__ */ $.structField("ReadPages", /* @__PURE__ */ $.basicType("uint64"), [6], 48, true), /* @__PURE__ */ $.structField("WritePages", /* @__PURE__ */ $.basicType("uint64"), [7], 56, true)]
	)
}

export class NFSEventsStats {
	// Number of times cached inode attributes are re-validated from the server.
	public get InodeRevalidate(): bigint {
		return this._fields.InodeRevalidate
	}

	public set InodeRevalidate(value: bigint) {
		this._fields.InodeRevalidate = value
	}

	// Number of times cached dentry nodes are re-validated from the server.
	public get DnodeRevalidate(): bigint {
		return this._fields.DnodeRevalidate
	}

	public set DnodeRevalidate(value: bigint) {
		this._fields.DnodeRevalidate = value
	}

	// Number of times an inode cache is cleared.
	public get DataInvalidate(): bigint {
		return this._fields.DataInvalidate
	}

	public set DataInvalidate(value: bigint) {
		this._fields.DataInvalidate = value
	}

	// Number of times cached inode attributes are invalidated.
	public get AttributeInvalidate(): bigint {
		return this._fields.AttributeInvalidate
	}

	public set AttributeInvalidate(value: bigint) {
		this._fields.AttributeInvalidate = value
	}

	// Number of times files or directories have been open()'d.
	public get VFSOpen(): bigint {
		return this._fields.VFSOpen
	}

	public set VFSOpen(value: bigint) {
		this._fields.VFSOpen = value
	}

	// Number of times a directory lookup has occurred.
	public get VFSLookup(): bigint {
		return this._fields.VFSLookup
	}

	public set VFSLookup(value: bigint) {
		this._fields.VFSLookup = value
	}

	// Number of times permissions have been checked.
	public get VFSAccess(): bigint {
		return this._fields.VFSAccess
	}

	public set VFSAccess(value: bigint) {
		this._fields.VFSAccess = value
	}

	// Number of updates (and potential writes) to pages.
	public get VFSUpdatePage(): bigint {
		return this._fields.VFSUpdatePage
	}

	public set VFSUpdatePage(value: bigint) {
		this._fields.VFSUpdatePage = value
	}

	// Number of pages read directly via mmap()'d files.
	public get VFSReadPage(): bigint {
		return this._fields.VFSReadPage
	}

	public set VFSReadPage(value: bigint) {
		this._fields.VFSReadPage = value
	}

	// Number of times a group of pages have been read.
	public get VFSReadPages(): bigint {
		return this._fields.VFSReadPages
	}

	public set VFSReadPages(value: bigint) {
		this._fields.VFSReadPages = value
	}

	// Number of pages written directly via mmap()'d files.
	public get VFSWritePage(): bigint {
		return this._fields.VFSWritePage
	}

	public set VFSWritePage(value: bigint) {
		this._fields.VFSWritePage = value
	}

	// Number of times a group of pages have been written.
	public get VFSWritePages(): bigint {
		return this._fields.VFSWritePages
	}

	public set VFSWritePages(value: bigint) {
		this._fields.VFSWritePages = value
	}

	// Number of times directory entries have been read with getdents().
	public get VFSGetdents(): bigint {
		return this._fields.VFSGetdents
	}

	public set VFSGetdents(value: bigint) {
		this._fields.VFSGetdents = value
	}

	// Number of times attributes have been set on inodes.
	public get VFSSetattr(): bigint {
		return this._fields.VFSSetattr
	}

	public set VFSSetattr(value: bigint) {
		this._fields.VFSSetattr = value
	}

	// Number of pending writes that have been forcefully flushed to the server.
	public get VFSFlush(): bigint {
		return this._fields.VFSFlush
	}

	public set VFSFlush(value: bigint) {
		this._fields.VFSFlush = value
	}

	// Number of times fsync() has been called on directories and files.
	public get VFSFsync(): bigint {
		return this._fields.VFSFsync
	}

	public set VFSFsync(value: bigint) {
		this._fields.VFSFsync = value
	}

	// Number of times locking has been attempted on a file.
	public get VFSLock(): bigint {
		return this._fields.VFSLock
	}

	public set VFSLock(value: bigint) {
		this._fields.VFSLock = value
	}

	// Number of times files have been closed and released.
	public get VFSFileRelease(): bigint {
		return this._fields.VFSFileRelease
	}

	public set VFSFileRelease(value: bigint) {
		this._fields.VFSFileRelease = value
	}

	// Unknown.  Possibly unused.
	public get CongestionWait(): bigint {
		return this._fields.CongestionWait
	}

	public set CongestionWait(value: bigint) {
		this._fields.CongestionWait = value
	}

	// Number of times files have been truncated.
	public get Truncation(): bigint {
		return this._fields.Truncation
	}

	public set Truncation(value: bigint) {
		this._fields.Truncation = value
	}

	// Number of times a file has been grown due to writes beyond its existing end.
	public get WriteExtension(): bigint {
		return this._fields.WriteExtension
	}

	public set WriteExtension(value: bigint) {
		this._fields.WriteExtension = value
	}

	// Number of times a file was removed while still open by another process.
	public get SillyRename(): bigint {
		return this._fields.SillyRename
	}

	public set SillyRename(value: bigint) {
		this._fields.SillyRename = value
	}

	// Number of times the NFS server gave less data than expected while reading.
	public get ShortRead(): bigint {
		return this._fields.ShortRead
	}

	public set ShortRead(value: bigint) {
		this._fields.ShortRead = value
	}

	// Number of times the NFS server wrote less data than expected while writing.
	public get ShortWrite(): bigint {
		return this._fields.ShortWrite
	}

	public set ShortWrite(value: bigint) {
		this._fields.ShortWrite = value
	}

	// Number of times the NFS server indicated EJUKEBOX; retrieving data from
	// offline storage.
	public get JukeboxDelay(): bigint {
		return this._fields.JukeboxDelay
	}

	public set JukeboxDelay(value: bigint) {
		this._fields.JukeboxDelay = value
	}

	// Number of NFS v4.1+ pNFS reads.
	public get PNFSRead(): bigint {
		return this._fields.PNFSRead
	}

	public set PNFSRead(value: bigint) {
		this._fields.PNFSRead = value
	}

	// Number of NFS v4.1+ pNFS writes.
	public get PNFSWrite(): bigint {
		return this._fields.PNFSWrite
	}

	public set PNFSWrite(value: bigint) {
		this._fields.PNFSWrite = value
	}

	public _fields: {
		InodeRevalidate: bigint
		DnodeRevalidate: bigint
		DataInvalidate: bigint
		AttributeInvalidate: bigint
		VFSOpen: bigint
		VFSLookup: bigint
		VFSAccess: bigint
		VFSUpdatePage: bigint
		VFSReadPage: bigint
		VFSReadPages: bigint
		VFSWritePage: bigint
		VFSWritePages: bigint
		VFSGetdents: bigint
		VFSSetattr: bigint
		VFSFlush: bigint
		VFSFsync: bigint
		VFSLock: bigint
		VFSFileRelease: bigint
		CongestionWait: bigint
		Truncation: bigint
		WriteExtension: bigint
		SillyRename: bigint
		ShortRead: bigint
		ShortWrite: bigint
		JukeboxDelay: bigint
		PNFSRead: bigint
		PNFSWrite: bigint
	}

	constructor(init?: Partial<{InodeRevalidate?: bigint, DnodeRevalidate?: bigint, DataInvalidate?: bigint, AttributeInvalidate?: bigint, VFSOpen?: bigint, VFSLookup?: bigint, VFSAccess?: bigint, VFSUpdatePage?: bigint, VFSReadPage?: bigint, VFSReadPages?: bigint, VFSWritePage?: bigint, VFSWritePages?: bigint, VFSGetdents?: bigint, VFSSetattr?: bigint, VFSFlush?: bigint, VFSFsync?: bigint, VFSLock?: bigint, VFSFileRelease?: bigint, CongestionWait?: bigint, Truncation?: bigint, WriteExtension?: bigint, SillyRename?: bigint, ShortRead?: bigint, ShortWrite?: bigint, JukeboxDelay?: bigint, PNFSRead?: bigint, PNFSWrite?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			InodeRevalidate: init?.InodeRevalidate ?? (0n as bigint),
			DnodeRevalidate: init?.DnodeRevalidate ?? (0n as bigint),
			DataInvalidate: init?.DataInvalidate ?? (0n as bigint),
			AttributeInvalidate: init?.AttributeInvalidate ?? (0n as bigint),
			VFSOpen: init?.VFSOpen ?? (0n as bigint),
			VFSLookup: init?.VFSLookup ?? (0n as bigint),
			VFSAccess: init?.VFSAccess ?? (0n as bigint),
			VFSUpdatePage: init?.VFSUpdatePage ?? (0n as bigint),
			VFSReadPage: init?.VFSReadPage ?? (0n as bigint),
			VFSReadPages: init?.VFSReadPages ?? (0n as bigint),
			VFSWritePage: init?.VFSWritePage ?? (0n as bigint),
			VFSWritePages: init?.VFSWritePages ?? (0n as bigint),
			VFSGetdents: init?.VFSGetdents ?? (0n as bigint),
			VFSSetattr: init?.VFSSetattr ?? (0n as bigint),
			VFSFlush: init?.VFSFlush ?? (0n as bigint),
			VFSFsync: init?.VFSFsync ?? (0n as bigint),
			VFSLock: init?.VFSLock ?? (0n as bigint),
			VFSFileRelease: init?.VFSFileRelease ?? (0n as bigint),
			CongestionWait: init?.CongestionWait ?? (0n as bigint),
			Truncation: init?.Truncation ?? (0n as bigint),
			WriteExtension: init?.WriteExtension ?? (0n as bigint),
			SillyRename: init?.SillyRename ?? (0n as bigint),
			ShortRead: init?.ShortRead ?? (0n as bigint),
			ShortWrite: init?.ShortWrite ?? (0n as bigint),
			JukeboxDelay: init?.JukeboxDelay ?? (0n as bigint),
			PNFSRead: init?.PNFSRead ?? (0n as bigint),
			PNFSWrite: init?.PNFSWrite ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NFSEventsStats {
		return new NFSEventsStats(this, true)
	}

	public __goscriptAssign(source: NFSEventsStats): void {
		const target = this._fields
		const values = source._fields
		target.InodeRevalidate = values.InodeRevalidate
		target.DnodeRevalidate = values.DnodeRevalidate
		target.DataInvalidate = values.DataInvalidate
		target.AttributeInvalidate = values.AttributeInvalidate
		target.VFSOpen = values.VFSOpen
		target.VFSLookup = values.VFSLookup
		target.VFSAccess = values.VFSAccess
		target.VFSUpdatePage = values.VFSUpdatePage
		target.VFSReadPage = values.VFSReadPage
		target.VFSReadPages = values.VFSReadPages
		target.VFSWritePage = values.VFSWritePage
		target.VFSWritePages = values.VFSWritePages
		target.VFSGetdents = values.VFSGetdents
		target.VFSSetattr = values.VFSSetattr
		target.VFSFlush = values.VFSFlush
		target.VFSFsync = values.VFSFsync
		target.VFSLock = values.VFSLock
		target.VFSFileRelease = values.VFSFileRelease
		target.CongestionWait = values.CongestionWait
		target.Truncation = values.Truncation
		target.WriteExtension = values.WriteExtension
		target.SillyRename = values.SillyRename
		target.ShortRead = values.ShortRead
		target.ShortWrite = values.ShortWrite
		target.JukeboxDelay = values.JukeboxDelay
		target.PNFSRead = values.PNFSRead
		target.PNFSWrite = values.PNFSWrite
	}

	static __typeInfo = $.registerStructType(
		"procfs.NFSEventsStats",
		() => new NFSEventsStats(),
		() => [],
		NFSEventsStats,
		() => [/* @__PURE__ */ $.structField("InodeRevalidate", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("DnodeRevalidate", /* @__PURE__ */ $.basicType("uint64"), [1], 8, true), /* @__PURE__ */ $.structField("DataInvalidate", /* @__PURE__ */ $.basicType("uint64"), [2], 16, true), /* @__PURE__ */ $.structField("AttributeInvalidate", /* @__PURE__ */ $.basicType("uint64"), [3], 24, true), /* @__PURE__ */ $.structField("VFSOpen", /* @__PURE__ */ $.basicType("uint64"), [4], 32, true), /* @__PURE__ */ $.structField("VFSLookup", /* @__PURE__ */ $.basicType("uint64"), [5], 40, true), /* @__PURE__ */ $.structField("VFSAccess", /* @__PURE__ */ $.basicType("uint64"), [6], 48, true), /* @__PURE__ */ $.structField("VFSUpdatePage", /* @__PURE__ */ $.basicType("uint64"), [7], 56, true), /* @__PURE__ */ $.structField("VFSReadPage", /* @__PURE__ */ $.basicType("uint64"), [8], 64, true), /* @__PURE__ */ $.structField("VFSReadPages", /* @__PURE__ */ $.basicType("uint64"), [9], 72, true), /* @__PURE__ */ $.structField("VFSWritePage", /* @__PURE__ */ $.basicType("uint64"), [10], 80, true), /* @__PURE__ */ $.structField("VFSWritePages", /* @__PURE__ */ $.basicType("uint64"), [11], 88, true), /* @__PURE__ */ $.structField("VFSGetdents", /* @__PURE__ */ $.basicType("uint64"), [12], 96, true), /* @__PURE__ */ $.structField("VFSSetattr", /* @__PURE__ */ $.basicType("uint64"), [13], 104, true), /* @__PURE__ */ $.structField("VFSFlush", /* @__PURE__ */ $.basicType("uint64"), [14], 112, true), /* @__PURE__ */ $.structField("VFSFsync", /* @__PURE__ */ $.basicType("uint64"), [15], 120, true), /* @__PURE__ */ $.structField("VFSLock", /* @__PURE__ */ $.basicType("uint64"), [16], 128, true), /* @__PURE__ */ $.structField("VFSFileRelease", /* @__PURE__ */ $.basicType("uint64"), [17], 136, true), /* @__PURE__ */ $.structField("CongestionWait", /* @__PURE__ */ $.basicType("uint64"), [18], 144, true), /* @__PURE__ */ $.structField("Truncation", /* @__PURE__ */ $.basicType("uint64"), [19], 152, true), /* @__PURE__ */ $.structField("WriteExtension", /* @__PURE__ */ $.basicType("uint64"), [20], 160, true), /* @__PURE__ */ $.structField("SillyRename", /* @__PURE__ */ $.basicType("uint64"), [21], 168, true), /* @__PURE__ */ $.structField("ShortRead", /* @__PURE__ */ $.basicType("uint64"), [22], 176, true), /* @__PURE__ */ $.structField("ShortWrite", /* @__PURE__ */ $.basicType("uint64"), [23], 184, true), /* @__PURE__ */ $.structField("JukeboxDelay", /* @__PURE__ */ $.basicType("uint64"), [24], 192, true), /* @__PURE__ */ $.structField("PNFSRead", /* @__PURE__ */ $.basicType("uint64"), [25], 200, true), /* @__PURE__ */ $.structField("PNFSWrite", /* @__PURE__ */ $.basicType("uint64"), [26], 208, true)]
	)
}

export class NFSTransportStats {
	// The transport protocol used for the NFS mount.
	public get Protocol(): string {
		return this._fields.Protocol
	}

	public set Protocol(value: string) {
		this._fields.Protocol = value
	}

	// The local port used for the NFS mount.
	public get Port(): bigint {
		return this._fields.Port
	}

	public set Port(value: bigint) {
		this._fields.Port = value
	}

	// Number of times the client has had to establish a connection from scratch
	// to the NFS server.
	public get Bind(): bigint {
		return this._fields.Bind
	}

	public set Bind(value: bigint) {
		this._fields.Bind = value
	}

	// Number of times the client has made a TCP connection to the NFS server.
	public get Connect(): bigint {
		return this._fields.Connect
	}

	public set Connect(value: bigint) {
		this._fields.Connect = value
	}

	// Duration (in jiffies, a kernel internal unit of time) the NFS mount has
	// spent waiting for connections to the server to be established.
	public get ConnectIdleTime(): bigint {
		return this._fields.ConnectIdleTime
	}

	public set ConnectIdleTime(value: bigint) {
		this._fields.ConnectIdleTime = value
	}

	// Duration since the NFS mount last saw any RPC traffic.
	public get IdleTimeSeconds(): bigint {
		return this._fields.IdleTimeSeconds
	}

	public set IdleTimeSeconds(value: bigint) {
		this._fields.IdleTimeSeconds = value
	}

	// Number of RPC requests for this mount sent to the NFS server.
	public get Sends(): bigint {
		return this._fields.Sends
	}

	public set Sends(value: bigint) {
		this._fields.Sends = value
	}

	// Number of RPC responses for this mount received from the NFS server.
	public get Receives(): bigint {
		return this._fields.Receives
	}

	public set Receives(value: bigint) {
		this._fields.Receives = value
	}

	// Number of times the NFS server sent a response with a transaction ID
	// unknown to this client.
	public get BadTransactionIDs(): bigint {
		return this._fields.BadTransactionIDs
	}

	public set BadTransactionIDs(value: bigint) {
		this._fields.BadTransactionIDs = value
	}

	// A running counter, incremented on each request as the current difference
	// ebetween sends and receives.
	public get CumulativeActiveRequests(): bigint {
		return this._fields.CumulativeActiveRequests
	}

	public set CumulativeActiveRequests(value: bigint) {
		this._fields.CumulativeActiveRequests = value
	}

	// A running counter, incremented on each request by the current backlog
	// queue size.
	public get CumulativeBacklog(): bigint {
		return this._fields.CumulativeBacklog
	}

	public set CumulativeBacklog(value: bigint) {
		this._fields.CumulativeBacklog = value
	}

	// Maximum number of simultaneously active RPC requests ever used.
	public get MaximumRPCSlotsUsed(): bigint {
		return this._fields.MaximumRPCSlotsUsed
	}

	public set MaximumRPCSlotsUsed(value: bigint) {
		this._fields.MaximumRPCSlotsUsed = value
	}

	// A running counter, incremented on each request as the current size of the
	// sending queue.
	public get CumulativeSendingQueue(): bigint {
		return this._fields.CumulativeSendingQueue
	}

	public set CumulativeSendingQueue(value: bigint) {
		this._fields.CumulativeSendingQueue = value
	}

	// A running counter, incremented on each request as the current size of the
	// pending queue.
	public get CumulativePendingQueue(): bigint {
		return this._fields.CumulativePendingQueue
	}

	public set CumulativePendingQueue(value: bigint) {
		this._fields.CumulativePendingQueue = value
	}

	public _fields: {
		Protocol: string
		Port: bigint
		Bind: bigint
		Connect: bigint
		ConnectIdleTime: bigint
		IdleTimeSeconds: bigint
		Sends: bigint
		Receives: bigint
		BadTransactionIDs: bigint
		CumulativeActiveRequests: bigint
		CumulativeBacklog: bigint
		MaximumRPCSlotsUsed: bigint
		CumulativeSendingQueue: bigint
		CumulativePendingQueue: bigint
	}

	constructor(init?: Partial<{Protocol?: string, Port?: bigint, Bind?: bigint, Connect?: bigint, ConnectIdleTime?: bigint, IdleTimeSeconds?: bigint, Sends?: bigint, Receives?: bigint, BadTransactionIDs?: bigint, CumulativeActiveRequests?: bigint, CumulativeBacklog?: bigint, MaximumRPCSlotsUsed?: bigint, CumulativeSendingQueue?: bigint, CumulativePendingQueue?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Protocol: init?.Protocol ?? ("" as string),
			Port: init?.Port ?? (0n as bigint),
			Bind: init?.Bind ?? (0n as bigint),
			Connect: init?.Connect ?? (0n as bigint),
			ConnectIdleTime: init?.ConnectIdleTime ?? (0n as bigint),
			IdleTimeSeconds: init?.IdleTimeSeconds ?? (0n as bigint),
			Sends: init?.Sends ?? (0n as bigint),
			Receives: init?.Receives ?? (0n as bigint),
			BadTransactionIDs: init?.BadTransactionIDs ?? (0n as bigint),
			CumulativeActiveRequests: init?.CumulativeActiveRequests ?? (0n as bigint),
			CumulativeBacklog: init?.CumulativeBacklog ?? (0n as bigint),
			MaximumRPCSlotsUsed: init?.MaximumRPCSlotsUsed ?? (0n as bigint),
			CumulativeSendingQueue: init?.CumulativeSendingQueue ?? (0n as bigint),
			CumulativePendingQueue: init?.CumulativePendingQueue ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NFSTransportStats {
		return new NFSTransportStats(this, true)
	}

	public __goscriptAssign(source: NFSTransportStats): void {
		const target = this._fields
		const values = source._fields
		target.Protocol = values.Protocol
		target.Port = values.Port
		target.Bind = values.Bind
		target.Connect = values.Connect
		target.ConnectIdleTime = values.ConnectIdleTime
		target.IdleTimeSeconds = values.IdleTimeSeconds
		target.Sends = values.Sends
		target.Receives = values.Receives
		target.BadTransactionIDs = values.BadTransactionIDs
		target.CumulativeActiveRequests = values.CumulativeActiveRequests
		target.CumulativeBacklog = values.CumulativeBacklog
		target.MaximumRPCSlotsUsed = values.MaximumRPCSlotsUsed
		target.CumulativeSendingQueue = values.CumulativeSendingQueue
		target.CumulativePendingQueue = values.CumulativePendingQueue
	}

	static __typeInfo = $.registerStructType(
		"procfs.NFSTransportStats",
		() => new NFSTransportStats(),
		() => [],
		NFSTransportStats,
		() => [/* @__PURE__ */ $.structField("Protocol", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Port", /* @__PURE__ */ $.basicType("uint64"), [1], 16, true), /* @__PURE__ */ $.structField("Bind", /* @__PURE__ */ $.basicType("uint64"), [2], 24, true), /* @__PURE__ */ $.structField("Connect", /* @__PURE__ */ $.basicType("uint64"), [3], 32, true), /* @__PURE__ */ $.structField("ConnectIdleTime", /* @__PURE__ */ $.basicType("uint64"), [4], 40, true), /* @__PURE__ */ $.structField("IdleTimeSeconds", /* @__PURE__ */ $.basicType("uint64"), [5], 48, true), /* @__PURE__ */ $.structField("Sends", /* @__PURE__ */ $.basicType("uint64"), [6], 56, true), /* @__PURE__ */ $.structField("Receives", /* @__PURE__ */ $.basicType("uint64"), [7], 64, true), /* @__PURE__ */ $.structField("BadTransactionIDs", /* @__PURE__ */ $.basicType("uint64"), [8], 72, true), /* @__PURE__ */ $.structField("CumulativeActiveRequests", /* @__PURE__ */ $.basicType("uint64"), [9], 80, true), /* @__PURE__ */ $.structField("CumulativeBacklog", /* @__PURE__ */ $.basicType("uint64"), [10], 88, true), /* @__PURE__ */ $.structField("MaximumRPCSlotsUsed", /* @__PURE__ */ $.basicType("uint64"), [11], 96, true), /* @__PURE__ */ $.structField("CumulativeSendingQueue", /* @__PURE__ */ $.basicType("uint64"), [12], 104, true), /* @__PURE__ */ $.structField("CumulativePendingQueue", /* @__PURE__ */ $.basicType("uint64"), [13], 112, true)]
	)
}

export class MountStatsNFS {
	// The version of statistics provided.
	public get StatVersion(): string {
		return this._fields.StatVersion
	}

	public set StatVersion(value: string) {
		this._fields.StatVersion = value
	}

	// The mount options of the NFS mount.
	public get Opts(): globalThis.Map<string, string> | null {
		return this._fields.Opts
	}

	public set Opts(value: globalThis.Map<string, string> | null) {
		this._fields.Opts = value
	}

	// The age of the NFS mount.
	public get Age(): time.Duration {
		return this._fields.Age
	}

	public set Age(value: time.Duration) {
		this._fields.Age = value
	}

	// Statistics related to byte counters for various operations.
	public get Bytes(): NFSBytesStats {
		return this._fields.Bytes
	}

	public set Bytes(value: NFSBytesStats) {
		this._fields.Bytes = value
	}

	// Statistics related to various NFS event occurrences.
	public get Events(): NFSEventsStats {
		return this._fields.Events
	}

	public set Events(value: NFSEventsStats) {
		this._fields.Events = value
	}

	// Statistics broken down by filesystem operation.
	public get Operations(): $.Slice<NFSOperationStats> {
		return this._fields.Operations
	}

	public set Operations(value: $.Slice<NFSOperationStats>) {
		this._fields.Operations = value
	}

	// Statistics about the NFS RPC transport.
	public get Transport(): NFSTransportStats {
		return this._fields.Transport
	}

	public set Transport(value: NFSTransportStats) {
		this._fields.Transport = value
	}

	public _fields: {
		StatVersion: string
		Opts: globalThis.Map<string, string> | null
		Age: time.Duration
		Bytes: NFSBytesStats
		Events: NFSEventsStats
		Operations: $.Slice<NFSOperationStats>
		Transport: NFSTransportStats
	}

	constructor(init?: Partial<{StatVersion?: string, Opts?: globalThis.Map<string, string> | null, Age?: time.Duration, Bytes?: NFSBytesStats, Events?: NFSEventsStats, Operations?: $.Slice<NFSOperationStats>, Transport?: NFSTransportStats}>, __goscriptValue?: boolean) {
		this._fields = {
			StatVersion: init?.StatVersion ?? ("" as string),
			Opts: init?.Opts ?? (null! as globalThis.Map<string, string> | null),
			Age: init?.Age ?? (0n as time.Duration),
			Bytes: init?.Bytes ? init.Bytes.clone() : new NFSBytesStats(undefined, true),
			Events: init?.Events ? init.Events.clone() : new NFSEventsStats(undefined, true),
			Operations: init?.Operations ?? (null! as $.Slice<NFSOperationStats>),
			Transport: init?.Transport ? init.Transport.clone() : new NFSTransportStats(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MountStatsNFS {
		return new MountStatsNFS(this, true)
	}

	public __goscriptAssign(source: MountStatsNFS): void {
		const target = this._fields
		const values = source._fields
		target.StatVersion = values.StatVersion
		target.Opts = values.Opts
		target.Age = values.Age
		$.assignStruct(target.Bytes, values.Bytes)
		$.assignStruct(target.Events, values.Events)
		target.Operations = values.Operations
		$.assignStruct(target.Transport, values.Transport)
	}

	public mountStats(): void {
		const m = this;
	}

	static __typeInfo = $.registerStructType(
		"procfs.MountStatsNFS",
		() => new MountStatsNFS(),
		() => [$.methodSignature("mountStats")],
		MountStatsNFS,
		() => [/* @__PURE__ */ $.structField("StatVersion", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Opts", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [1], 16, true), /* @__PURE__ */ $.structField("Age", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 24, true), /* @__PURE__ */ $.structField("Bytes", "procfs.NFSBytesStats", [3], 32, true), /* @__PURE__ */ $.structField("Events", "procfs.NFSEventsStats", [4], 96, true), /* @__PURE__ */ $.structField("Operations", /* @__PURE__ */ $.sliceType("procfs.NFSOperationStats"), [5], 312, true), /* @__PURE__ */ $.structField("Transport", "procfs.NFSTransportStats", [6], 336, true)]
	)
}

export class NFSOperationStats {
	// The name of the operation.
	public get Operation(): string {
		return this._fields.Operation
	}

	public set Operation(value: string) {
		this._fields.Operation = value
	}

	// Number of requests performed for this operation.
	public get Requests(): bigint {
		return this._fields.Requests
	}

	public set Requests(value: bigint) {
		this._fields.Requests = value
	}

	// Number of times an actual RPC request has been transmitted for this operation.
	public get Transmissions(): bigint {
		return this._fields.Transmissions
	}

	public set Transmissions(value: bigint) {
		this._fields.Transmissions = value
	}

	// Number of times a request has had a major timeout.
	public get MajorTimeouts(): bigint {
		return this._fields.MajorTimeouts
	}

	public set MajorTimeouts(value: bigint) {
		this._fields.MajorTimeouts = value
	}

	// Number of bytes sent for this operation, including RPC headers and payload.
	public get BytesSent(): bigint {
		return this._fields.BytesSent
	}

	public set BytesSent(value: bigint) {
		this._fields.BytesSent = value
	}

	// Number of bytes received for this operation, including RPC headers and payload.
	public get BytesReceived(): bigint {
		return this._fields.BytesReceived
	}

	public set BytesReceived(value: bigint) {
		this._fields.BytesReceived = value
	}

	// Duration all requests spent queued for transmission before they were sent.
	public get CumulativeQueueMilliseconds(): bigint {
		return this._fields.CumulativeQueueMilliseconds
	}

	public set CumulativeQueueMilliseconds(value: bigint) {
		this._fields.CumulativeQueueMilliseconds = value
	}

	// Duration it took to get a reply back after the request was transmitted.
	public get CumulativeTotalResponseMilliseconds(): bigint {
		return this._fields.CumulativeTotalResponseMilliseconds
	}

	public set CumulativeTotalResponseMilliseconds(value: bigint) {
		this._fields.CumulativeTotalResponseMilliseconds = value
	}

	// Duration from when a request was enqueued to when it was completely handled.
	public get CumulativeTotalRequestMilliseconds(): bigint {
		return this._fields.CumulativeTotalRequestMilliseconds
	}

	public set CumulativeTotalRequestMilliseconds(value: bigint) {
		this._fields.CumulativeTotalRequestMilliseconds = value
	}

	// The count of operations that complete with tk_status < 0.  These statuses usually indicate error conditions.
	public get Errors(): bigint {
		return this._fields.Errors
	}

	public set Errors(value: bigint) {
		this._fields.Errors = value
	}

	public _fields: {
		Operation: string
		Requests: bigint
		Transmissions: bigint
		MajorTimeouts: bigint
		BytesSent: bigint
		BytesReceived: bigint
		CumulativeQueueMilliseconds: bigint
		CumulativeTotalResponseMilliseconds: bigint
		CumulativeTotalRequestMilliseconds: bigint
		Errors: bigint
	}

	constructor(init?: Partial<{Operation?: string, Requests?: bigint, Transmissions?: bigint, MajorTimeouts?: bigint, BytesSent?: bigint, BytesReceived?: bigint, CumulativeQueueMilliseconds?: bigint, CumulativeTotalResponseMilliseconds?: bigint, CumulativeTotalRequestMilliseconds?: bigint, Errors?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Operation: init?.Operation ?? ("" as string),
			Requests: init?.Requests ?? (0n as bigint),
			Transmissions: init?.Transmissions ?? (0n as bigint),
			MajorTimeouts: init?.MajorTimeouts ?? (0n as bigint),
			BytesSent: init?.BytesSent ?? (0n as bigint),
			BytesReceived: init?.BytesReceived ?? (0n as bigint),
			CumulativeQueueMilliseconds: init?.CumulativeQueueMilliseconds ?? (0n as bigint),
			CumulativeTotalResponseMilliseconds: init?.CumulativeTotalResponseMilliseconds ?? (0n as bigint),
			CumulativeTotalRequestMilliseconds: init?.CumulativeTotalRequestMilliseconds ?? (0n as bigint),
			Errors: init?.Errors ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NFSOperationStats {
		return new NFSOperationStats(this, true)
	}

	public __goscriptAssign(source: NFSOperationStats): void {
		const target = this._fields
		const values = source._fields
		target.Operation = values.Operation
		target.Requests = values.Requests
		target.Transmissions = values.Transmissions
		target.MajorTimeouts = values.MajorTimeouts
		target.BytesSent = values.BytesSent
		target.BytesReceived = values.BytesReceived
		target.CumulativeQueueMilliseconds = values.CumulativeQueueMilliseconds
		target.CumulativeTotalResponseMilliseconds = values.CumulativeTotalResponseMilliseconds
		target.CumulativeTotalRequestMilliseconds = values.CumulativeTotalRequestMilliseconds
		target.Errors = values.Errors
	}

	static __typeInfo = $.registerStructType(
		"procfs.NFSOperationStats",
		() => new NFSOperationStats(),
		() => [],
		NFSOperationStats,
		() => [/* @__PURE__ */ $.structField("Operation", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Requests", /* @__PURE__ */ $.basicType("uint64"), [1], 16, true), /* @__PURE__ */ $.structField("Transmissions", /* @__PURE__ */ $.basicType("uint64"), [2], 24, true), /* @__PURE__ */ $.structField("MajorTimeouts", /* @__PURE__ */ $.basicType("uint64"), [3], 32, true), /* @__PURE__ */ $.structField("BytesSent", /* @__PURE__ */ $.basicType("uint64"), [4], 40, true), /* @__PURE__ */ $.structField("BytesReceived", /* @__PURE__ */ $.basicType("uint64"), [5], 48, true), /* @__PURE__ */ $.structField("CumulativeQueueMilliseconds", /* @__PURE__ */ $.basicType("uint64"), [6], 56, true), /* @__PURE__ */ $.structField("CumulativeTotalResponseMilliseconds", /* @__PURE__ */ $.basicType("uint64"), [7], 64, true), /* @__PURE__ */ $.structField("CumulativeTotalRequestMilliseconds", /* @__PURE__ */ $.basicType("uint64"), [8], 72, true), /* @__PURE__ */ $.structField("Errors", /* @__PURE__ */ $.basicType("uint64"), [9], 80, true)]
	)
}

export const deviceEntryLen: number = 8

export const fieldBytesLen: number = 8

export const fieldEventsLen: number = 27

export const statVersion10: string = "1.0"

export const statVersion11: string = "1.1"

export const fieldTransport10TCPLen: number = 10

export const fieldTransport10UDPLen: number = 7

export const fieldTransport11TCPLen: number = 13

export const fieldTransport11UDPLen: number = 10

export async function parseMountStats(r: io.Reader | null): globalThis.Promise<[$.Slice<Mount | $.VarRef<Mount> | null>, $.GoError]> {
	const device: string = "device"
	const statVersionPrefix: string = "statvers="
	const nfs3Type: string = "nfs"
	const nfs4Type: string = "nfs4"

	let mounts: $.Slice<Mount | $.VarRef<Mount> | null> = null! as $.Slice<Mount | $.VarRef<Mount> | null>

	let s: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner(r)
	while (await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))) {
		// Only look for device entries in this function
		let ss: $.Slice<string> = strings.Fields($.bytesToString((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Bytes() : bufio.Scanner.prototype.Bytes.call(s))))
		if (($.sliceLen(ss) == 0) || (!$.stringEqual($.arrayIndex(ss!, 0), "device"))) {
			continue
		}

		let __goscriptTuple0: any = parseMount(ss)
		let m: Mount | $.VarRef<Mount> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		let m$: Mount = m == null ? $.pointerTarget<Mount>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mount>(m)
		if (err != null) {
			return [null, err]
		}

		// Does this mount also possess statistics information?
		if ($.sliceLen(ss) > 8) {
			// Only NFSv3 and v4 are supported for parsing statistics
			if ((!$.stringEqual((m$ as Mount).Type, "nfs")) && (!$.stringEqual((m$ as Mount).Type, "nfs4"))) {
				return [null, fmt.Errorf("cannot parse MountStats for fstype %q", (m$ as Mount).Type)]
			}

			let statVersion = strings.TrimPrefix($.arrayIndex(ss!, 8), "statvers=")

			let __goscriptTuple1: any = await parseMountStatsNFS(s, statVersion)
			let stats: MountStatsNFS | $.VarRef<MountStatsNFS> | null = __goscriptTuple1[0]
			let __goscriptShadow0 = __goscriptTuple1[1]
			if (__goscriptShadow0 != null) {
				return [null, __goscriptShadow0]
			}

			;(m$ as Mount).Stats = $.interfaceValue<MountStats | null>(stats, "*procfs.MountStatsNFS", /* @__PURE__ */ $.pointerType("procfs.MountStatsNFS"))
		}

		mounts = $.appendOne(mounts, m, $.appendZeros.nil)
	}

	return [mounts, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Err() : bufio.Scanner.prototype.Err.call(s))]
}

export function parseMount(ss: $.Slice<string>): [Mount | $.VarRef<Mount> | null, $.GoError] {
	if ($.sliceLen(ss) < 8) {
		return [null, fmt.Errorf("invalid device entry: %v", $.interfaceValue(ss, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
	}

	// Check for specific words appearing at specific indices to ensure
	// the format is consistent with what we expect
	let format: $.Slice<{"i": number, "s": string}> = $.arrayToSlice<{"i": number, "s": string}>([$.anonymousStructValue({i: 0, s: "device"}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("i", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "github.com/prometheus/procfs" }), /* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "github.com/prometheus/procfs" })] }), $.anonymousStructValue({i: 2, s: "mounted"}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("i", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "github.com/prometheus/procfs" }), /* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "github.com/prometheus/procfs" })] }), $.anonymousStructValue({i: 3, s: "on"}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("i", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "github.com/prometheus/procfs" }), /* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "github.com/prometheus/procfs" })] }), $.anonymousStructValue({i: 5, s: "with"}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("i", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "github.com/prometheus/procfs" }), /* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "github.com/prometheus/procfs" })] }), $.anonymousStructValue({i: 6, s: "fstype"}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("i", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "github.com/prometheus/procfs" }), /* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "github.com/prometheus/procfs" })] })])

	for (let __goscriptRangeTarget0 = format, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(ss), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let f = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as {"i": number, "s": string})))
		if (!$.stringEqual(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, f.i)] as string), f.s)) {
			return [null, fmt.Errorf("invalid device entry: %v", $.interfaceValue(ss, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
		}
	}

	return [new Mount({Device: $.arrayIndex(ss!, 1), Mount: $.arrayIndex(ss!, 4), Type: $.arrayIndex(ss!, 7)}), null]
}

export async function parseMountStatsNFS(s: bufio.Scanner | $.VarRef<bufio.Scanner> | null, statVersion: string): globalThis.Promise<[MountStatsNFS | $.VarRef<MountStatsNFS> | null, $.GoError]> {
	// Field indicators for parsing specific types of data
	const fieldOpts: string = "opts:"
	const fieldAge: string = "age:"
	const fieldBytes: string = "bytes:"
	const fieldEvents: string = "events:"
	const fieldPerOpStats: string = "per-op"
	const fieldTransport: string = "xprt:"

	let stats: MountStatsNFS | $.VarRef<MountStatsNFS> | null = new MountStatsNFS({StatVersion: statVersion})
	let stats$: MountStatsNFS = stats == null ? $.pointerTarget<MountStatsNFS>(stats) : (stats as any).__isVarRef === true ? (stats as any).value : (stats as any).__goValue === undefined ? (stats as any) : $.pointerTarget<MountStatsNFS>(stats)

	while (await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))) {
		let ss: $.Slice<string> = strings.Fields($.bytesToString((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Bytes() : bufio.Scanner.prototype.Bytes.call(s))))
		if ($.sliceLen(ss) == 0) {
			break
		}

		switch ($.arrayIndex(ss!, 0)) {
			case "opts:":
			{
				if ($.sliceLen(ss) < 2) {
					return [null, fmt.Errorf("not enough information for NFS stats: %v", $.interfaceValue(ss, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
				}
				if ((stats$ as MountStatsNFS).Opts == null) {
					;(stats$ as MountStatsNFS).Opts = $.makeMap<string, string>([])
				}
				for (let __goscriptRangeTarget1 = strings.Split($.arrayIndex(ss!, 1), ","), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
					let opt = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
					let split: $.Slice<string> = strings.Split(opt, "=")
					if ($.sliceLen(split) == 2) {
						$.mapSet((stats$ as MountStatsNFS).Opts, $.arrayIndex(split!, 0), $.arrayIndex(split!, 1))
					} else {
						$.mapSet((stats$ as MountStatsNFS).Opts, opt, "")
					}
				}
				break
			}
			case "age:":
			{
				if ($.sliceLen(ss) < 2) {
					return [null, fmt.Errorf("not enough information for NFS stats: %v", $.interfaceValue(ss, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
				}
				// Age integer is in seconds
				let [d, err] = time.ParseDuration($.concatString($.arrayIndex(ss!, 1), "s"))
				if (err != null) {
					return [null, err]
				}

				;(stats$ as MountStatsNFS).Age = d
				break
			}
			case "bytes:":
			{
				if ($.sliceLen(ss) < 2) {
					return [null, fmt.Errorf("not enough information for NFS stats: %v", $.interfaceValue(ss, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
				}
				let __goscriptTuple2: any = parseNFSBytesStats($.goSlice(ss, 1, undefined))
				let bstats: NFSBytesStats | $.VarRef<NFSBytesStats> | null = __goscriptTuple2[0]
				let err = __goscriptTuple2[1]
				if (err != null) {
					return [null, err]
				}

				$.assignStruct((stats$ as MountStatsNFS).Bytes, $.pointerValue<NFSBytesStats>(bstats))
				break
			}
			case "events:":
			{
				if ($.sliceLen(ss) < 2) {
					return [null, fmt.Errorf("not enough information for NFS stats: %v", $.interfaceValue(ss, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
				}
				let __goscriptTuple3: any = parseNFSEventsStats($.goSlice(ss, 1, undefined))
				let estats: NFSEventsStats | $.VarRef<NFSEventsStats> | null = __goscriptTuple3[0]
				let err = __goscriptTuple3[1]
				if (err != null) {
					return [null, err]
				}

				$.assignStruct((stats$ as MountStatsNFS).Events, $.pointerValue<NFSEventsStats>(estats))
				break
			}
			case "xprt:":
			{
				if ($.sliceLen(ss) < 3) {
					return [null, fmt.Errorf("not enough information for NFS transport stats: %v", $.interfaceValue(ss, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
				}

				let __goscriptTuple4: any = parseNFSTransportStats($.goSlice(ss, 1, undefined), statVersion)
				let tstats: NFSTransportStats | $.VarRef<NFSTransportStats> | null = __goscriptTuple4[0]
				let err = __goscriptTuple4[1]
				if (err != null) {
					return [null, err]
				}

				$.assignStruct((stats$ as MountStatsNFS).Transport, $.pointerValue<NFSTransportStats>(tstats))
				break
			}
		}

		// When encountering "per-operation statistics", we must break this
		// loop and parse them separately to ensure we can terminate parsing
		// before reaching another device entry; hence why this 'if' statement
		// is not just another switch case
		if ($.stringEqual($.arrayIndex(ss!, 0), "per-op")) {
			break
		}
	}

	{
		let err = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Err() : bufio.Scanner.prototype.Err.call(s))
		if (err != null) {
			return [null, err]
		}
	}

	// NFS per-operation stats appear last before the next device entry
	let __goscriptTuple5: any = await parseNFSOperationStats(s)
	let perOpStats: $.Slice<NFSOperationStats> = __goscriptTuple5[0]
	let err = __goscriptTuple5[1]
	if (err != null) {
		return [null, err]
	}

	;(stats$ as MountStatsNFS).Operations = perOpStats

	return [stats, null]
}

export function parseNFSBytesStats(ss: $.Slice<string>): [NFSBytesStats | $.VarRef<NFSBytesStats> | null, $.GoError] {
	if ($.sliceLen(ss) != 8) {
		return [null, fmt.Errorf("invalid NFS bytes stats: %v", $.interfaceValue(ss, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
	}

	let ns: $.Slice<bigint> = $.makeSlice<bigint>(0, 8, "number")
	for (let __goscriptRangeTarget2 = ss, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let s = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
		let [n, err] = strconv.ParseUint(s, 10, 64)
		if (err != null) {
			return [null, err]
		}

		ns = $.appendOne(ns, n)
	}

	return [new NFSBytesStats({Read: $.arrayIndex(ns!, 0), Write: $.arrayIndex(ns!, 1), DirectRead: $.arrayIndex(ns!, 2), DirectWrite: $.arrayIndex(ns!, 3), ReadTotal: $.arrayIndex(ns!, 4), WriteTotal: $.arrayIndex(ns!, 5), ReadPages: $.arrayIndex(ns!, 6), WritePages: $.arrayIndex(ns!, 7)}), null]
}

export function parseNFSEventsStats(ss: $.Slice<string>): [NFSEventsStats | $.VarRef<NFSEventsStats> | null, $.GoError] {
	if ($.sliceLen(ss) != 27) {
		return [null, fmt.Errorf("invalid NFS events stats: %v", $.interfaceValue(ss, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
	}

	let ns: $.Slice<bigint> = $.makeSlice<bigint>(0, 27, "number")
	for (let __goscriptRangeTarget3 = ss, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let s = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
		let [n, err] = strconv.ParseUint(s, 10, 64)
		if (err != null) {
			return [null, err]
		}

		ns = $.appendOne(ns, n)
	}

	return [new NFSEventsStats({InodeRevalidate: $.arrayIndex(ns!, 0), DnodeRevalidate: $.arrayIndex(ns!, 1), DataInvalidate: $.arrayIndex(ns!, 2), AttributeInvalidate: $.arrayIndex(ns!, 3), VFSOpen: $.arrayIndex(ns!, 4), VFSLookup: $.arrayIndex(ns!, 5), VFSAccess: $.arrayIndex(ns!, 6), VFSUpdatePage: $.arrayIndex(ns!, 7), VFSReadPage: $.arrayIndex(ns!, 8), VFSReadPages: $.arrayIndex(ns!, 9), VFSWritePage: $.arrayIndex(ns!, 10), VFSWritePages: $.arrayIndex(ns!, 11), VFSGetdents: $.arrayIndex(ns!, 12), VFSSetattr: $.arrayIndex(ns!, 13), VFSFlush: $.arrayIndex(ns!, 14), VFSFsync: $.arrayIndex(ns!, 15), VFSLock: $.arrayIndex(ns!, 16), VFSFileRelease: $.arrayIndex(ns!, 17), CongestionWait: $.arrayIndex(ns!, 18), Truncation: $.arrayIndex(ns!, 19), WriteExtension: $.arrayIndex(ns!, 20), SillyRename: $.arrayIndex(ns!, 21), ShortRead: $.arrayIndex(ns!, 22), ShortWrite: $.arrayIndex(ns!, 23), JukeboxDelay: $.arrayIndex(ns!, 24), PNFSRead: $.arrayIndex(ns!, 25), PNFSWrite: $.arrayIndex(ns!, 26)}), null]
}

export async function parseNFSOperationStats(s: bufio.Scanner | $.VarRef<bufio.Scanner> | null): globalThis.Promise<[$.Slice<NFSOperationStats>, $.GoError]> {
	const minFields: number = 9

	let ops: $.Slice<NFSOperationStats> = null! as $.Slice<NFSOperationStats>

	while (await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))) {
		let ss: $.Slice<string> = strings.Fields($.bytesToString((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Bytes() : bufio.Scanner.prototype.Bytes.call(s))))
		if ($.sliceLen(ss) == 0) {
			// Must break when reading a blank line after per-operation stats to
			// enable top-level function to parse the next device entry
			break
		}

		if ($.sliceLen(ss) < 9) {
			return [null, fmt.Errorf("invalid NFS per-operations stats: %v", $.interfaceValue(ss, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
		}

		// Skip string operation name for integers
		let ns: $.Slice<bigint> = $.makeSlice<bigint>(0, 9 - 1, "number")
		for (let __goscriptRangeTarget4 = $.goSlice(ss, 1, undefined), __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let st = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as string)
			let [n, err] = strconv.ParseUint(st, 10, 64)
			if (err != null) {
				return [null, err]
			}

			ns = $.appendOne(ns, n)
		}

		let opStats = (() => { const __goscriptLiteralField0 = strings.TrimSuffix($.arrayIndex(ss!, 0), ":"); return new NFSOperationStats({Operation: __goscriptLiteralField0, Requests: $.arrayIndex(ns!, 0), Transmissions: $.arrayIndex(ns!, 1), MajorTimeouts: $.arrayIndex(ns!, 2), BytesSent: $.arrayIndex(ns!, 3), BytesReceived: $.arrayIndex(ns!, 4), CumulativeQueueMilliseconds: $.arrayIndex(ns!, 5), CumulativeTotalResponseMilliseconds: $.arrayIndex(ns!, 6), CumulativeTotalRequestMilliseconds: $.arrayIndex(ns!, 7)}, true) })()

		if ($.sliceLen(ns) > 8) {
			opStats.Errors = $.arrayIndex(ns!, 8)
		}

		ops = $.appendOne(ops, (opStats).clone())
	}

	return [ops, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Err() : bufio.Scanner.prototype.Err.call(s))]
}

export function parseNFSTransportStats(ss: $.Slice<string>, statVersion: string): [NFSTransportStats | $.VarRef<NFSTransportStats> | null, $.GoError] {
	// Extract the protocol field. It is the only string value in the line
	let protocol = $.arrayIndex(ss!, 0)
	ss = $.goSlice(ss, 1, undefined)

	switch (statVersion) {
		case "1.0":
		{
			let expectedLength: number = 0
			if ($.stringEqual(protocol, "tcp")) {
				expectedLength = 10
			} else {
				if ($.stringEqual(protocol, "udp")) {
					expectedLength = 7
				} else {
					return [null, fmt.Errorf("invalid NFS protocol \"%s\" in stats 1.0 statement: %v", protocol, $.interfaceValue(ss, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
				}
			}
			if ($.sliceLen(ss) != expectedLength) {
				return [null, fmt.Errorf("invalid NFS transport stats 1.0 statement: %v", $.interfaceValue(ss, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
			}
			break
		}
		case "1.1":
		{
			let expectedLength: number = 0
			if ($.stringEqual(protocol, "tcp")) {
				expectedLength = 13
			} else {
				if ($.stringEqual(protocol, "udp")) {
					expectedLength = 10
				} else {
					return [null, fmt.Errorf("invalid NFS protocol \"%s\" in stats 1.1 statement: %v", protocol, $.interfaceValue(ss, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
				}
			}
			if ($.sliceLen(ss) != expectedLength) {
				return [null, fmt.Errorf("invalid NFS transport stats 1.1 statement: %v", $.interfaceValue(ss, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
			}
			break
		}
		default:
		{
			return [null, fmt.Errorf("unrecognized NFS transport stats version: %q", statVersion)]
			break
		}
	}

	// Allocate enough for v1.1 stats since zero value for v1.1 stats will be okay
	// in a v1.0 response. Since the stat length is bigger for TCP stats, we use
	// the TCP length here.
	//
	// Note: slice length must be set to length of v1.1 stats to avoid a panic when
	// only v1.0 stats are present.
	// See: https://github.com/prometheus/node_exporter/issues/571.
	let ns: $.Slice<bigint> = $.makeSlice<bigint>(13, undefined, "number")
	for (let __goscriptRangeTarget5 = ss, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __goscriptSliceWindow1 = $.sliceRange(ns), i = 0; i < __goscriptRangeWindow5.length; i++) {
		let s = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as string)
		let [n, err] = strconv.ParseUint(s, 10, 64)
		if (err != null) {
			return [null, err]
		}

		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = n
	}

	// The fields differ depending on the transport protocol (TCP or UDP)
	// From https://utcc.utoronto.ca/%7Ecks/space/blog/linux/NFSMountstatsXprt
	//
	// For the udp RPC transport there is no connection count, connect idle time,
	// or idle time (fields #3, #4, and #5); all other fields are the same. So
	// we set them to 0 here.
	if ($.stringEqual(protocol, "udp")) {
		ns = $.appendSlice($.goSlice(ns, undefined, 2), $.appendSlice($.makeSlice<bigint>(3, undefined, "number"), $.goSlice(ns, 2, undefined)))
	}

	return [new NFSTransportStats({Protocol: protocol, Port: $.arrayIndex(ns!, 0), Bind: $.arrayIndex(ns!, 1), Connect: $.arrayIndex(ns!, 2), ConnectIdleTime: $.arrayIndex(ns!, 3), IdleTimeSeconds: $.arrayIndex(ns!, 4), Sends: $.arrayIndex(ns!, 5), Receives: $.arrayIndex(ns!, 6), BadTransactionIDs: $.arrayIndex(ns!, 7), CumulativeActiveRequests: $.arrayIndex(ns!, 8), CumulativeBacklog: $.arrayIndex(ns!, 9), MaximumRPCSlotsUsed: $.arrayIndex(ns!, 10), CumulativeSendingQueue: $.arrayIndex(ns!, 11), CumulativePendingQueue: $.arrayIndex(ns!, 12)}), null]
}
