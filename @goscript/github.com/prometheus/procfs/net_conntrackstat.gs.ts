// Generated file based on net_conntrackstat.go
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

import type * as __goscript_meminfo from "./meminfo.gs.ts"

import type * as __goscript_mountinfo from "./mountinfo.gs.ts"

import * as __goscript_mountstats from "./mountstats.gs.ts"

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

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.ConntrackStatEntry"])

export class ConntrackStatEntry {
	public get Entries(): bigint {
		return this._fields.Entries
	}

	public set Entries(value: bigint) {
		this._fields.Entries = value
	}

	public get Found(): bigint {
		return this._fields.Found
	}

	public set Found(value: bigint) {
		this._fields.Found = value
	}

	public get Invalid(): bigint {
		return this._fields.Invalid
	}

	public set Invalid(value: bigint) {
		this._fields.Invalid = value
	}

	public get Ignore(): bigint {
		return this._fields.Ignore
	}

	public set Ignore(value: bigint) {
		this._fields.Ignore = value
	}

	public get Insert(): bigint {
		return this._fields.Insert
	}

	public set Insert(value: bigint) {
		this._fields.Insert = value
	}

	public get InsertFailed(): bigint {
		return this._fields.InsertFailed
	}

	public set InsertFailed(value: bigint) {
		this._fields.InsertFailed = value
	}

	public get Drop(): bigint {
		return this._fields.Drop
	}

	public set Drop(value: bigint) {
		this._fields.Drop = value
	}

	public get EarlyDrop(): bigint {
		return this._fields.EarlyDrop
	}

	public set EarlyDrop(value: bigint) {
		this._fields.EarlyDrop = value
	}

	public get SearchRestart(): bigint {
		return this._fields.SearchRestart
	}

	public set SearchRestart(value: bigint) {
		this._fields.SearchRestart = value
	}

	public _fields: {
		Entries: bigint
		Found: bigint
		Invalid: bigint
		Ignore: bigint
		Insert: bigint
		InsertFailed: bigint
		Drop: bigint
		EarlyDrop: bigint
		SearchRestart: bigint
	}

	constructor(init?: Partial<{Entries?: bigint, Found?: bigint, Invalid?: bigint, Ignore?: bigint, Insert?: bigint, InsertFailed?: bigint, Drop?: bigint, EarlyDrop?: bigint, SearchRestart?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Entries: init?.Entries ?? (0n as bigint),
			Found: init?.Found ?? (0n as bigint),
			Invalid: init?.Invalid ?? (0n as bigint),
			Ignore: init?.Ignore ?? (0n as bigint),
			Insert: init?.Insert ?? (0n as bigint),
			InsertFailed: init?.InsertFailed ?? (0n as bigint),
			Drop: init?.Drop ?? (0n as bigint),
			EarlyDrop: init?.EarlyDrop ?? (0n as bigint),
			SearchRestart: init?.SearchRestart ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConntrackStatEntry {
		return new ConntrackStatEntry(this, true)
	}

	public __goscriptAssign(source: ConntrackStatEntry): void {
		const target = this._fields
		const values = source._fields
		target.Entries = values.Entries
		target.Found = values.Found
		target.Invalid = values.Invalid
		target.Ignore = values.Ignore
		target.Insert = values.Insert
		target.InsertFailed = values.InsertFailed
		target.Drop = values.Drop
		target.EarlyDrop = values.EarlyDrop
		target.SearchRestart = values.SearchRestart
	}

	static __typeInfo = $.registerStructType(
		"procfs.ConntrackStatEntry",
		() => new ConntrackStatEntry(),
		() => [],
		ConntrackStatEntry,
		() => [/* @__PURE__ */ $.structField("Entries", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("Found", /* @__PURE__ */ $.basicType("uint64"), [1], 8, true), /* @__PURE__ */ $.structField("Invalid", /* @__PURE__ */ $.basicType("uint64"), [2], 16, true), /* @__PURE__ */ $.structField("Ignore", /* @__PURE__ */ $.basicType("uint64"), [3], 24, true), /* @__PURE__ */ $.structField("Insert", /* @__PURE__ */ $.basicType("uint64"), [4], 32, true), /* @__PURE__ */ $.structField("InsertFailed", /* @__PURE__ */ $.basicType("uint64"), [5], 40, true), /* @__PURE__ */ $.structField("Drop", /* @__PURE__ */ $.basicType("uint64"), [6], 48, true), /* @__PURE__ */ $.structField("EarlyDrop", /* @__PURE__ */ $.basicType("uint64"), [7], 56, true), /* @__PURE__ */ $.structField("SearchRestart", /* @__PURE__ */ $.basicType("uint64"), [8], 64, true)]
	)
}

export async function readConntrackStat(path: string): globalThis.Promise<[$.Slice<ConntrackStatEntry>, $.GoError]> {
	// This file is small and can be read with one syscall.
	let __goscriptTuple0: any = await util.ReadFileNoStat(path)
	let b: $.Slice<number> = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		// Do not wrap this error so the caller can detect os.IsNotExist and
		// similar conditions.
		return [null, err]
	}

	let __goscriptTuple1: any = await parseConntrackStat($.interfaceValue<io.Reader | null>(bytes.NewReader(b), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))
	let stat: $.Slice<ConntrackStatEntry> = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return [null, fmt.Errorf("failed to read conntrack stats from %q: %w", path, (err as any))]
	}

	return [stat, null]
}

export async function parseConntrackStat(r: io.Reader | null): globalThis.Promise<[$.Slice<ConntrackStatEntry>, $.GoError]> {
	let entries: $.Slice<ConntrackStatEntry> = null! as $.Slice<ConntrackStatEntry>

	let scanner: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner(r)
	await (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(scanner))
	while (await (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(scanner))) {
		let fields: $.Slice<string> = strings.Fields((scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(scanner)))
		let __goscriptTuple2: any = parseConntrackStatEntry(fields)
		let conntrackEntry: ConntrackStatEntry | $.VarRef<ConntrackStatEntry> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		entries = $.appendOne(entries, ($.pointerValue<ConntrackStatEntry>(conntrackEntry)).clone())
	}

	return [entries, null]
}

export function parseConntrackStatEntry(fields: $.Slice<string>): [ConntrackStatEntry | $.VarRef<ConntrackStatEntry> | null, $.GoError] {
	if ($.sliceLen(fields) != 17) {
		return [null, fmt.Errorf("invalid conntrackstat entry, missing fields")]
	}
	let entry: ConntrackStatEntry | $.VarRef<ConntrackStatEntry> | null = new ConntrackStatEntry()
	let entry$: ConntrackStatEntry = entry == null ? $.pointerTarget<ConntrackStatEntry>(entry) : (entry as any).__isVarRef === true ? (entry as any).value : (entry as any).__goValue === undefined ? (entry as any) : $.pointerTarget<ConntrackStatEntry>(entry)

	let [entries, err] = parseConntrackStatField($.arrayIndex(fields!, 0))
	if (err != null) {
		return [null, err]
	}
	;(entry$ as ConntrackStatEntry).Entries = entries

	let __goscriptTuple3: any = parseConntrackStatField($.arrayIndex(fields!, 2))
	let found = __goscriptTuple3[0]
	err = __goscriptTuple3[1]
	if (err != null) {
		return [null, err]
	}
	;(entry$ as ConntrackStatEntry).Found = found

	let __goscriptTuple4: any = parseConntrackStatField($.arrayIndex(fields!, 4))
	let invalid = __goscriptTuple4[0]
	err = __goscriptTuple4[1]
	if (err != null) {
		return [null, err]
	}
	;(entry$ as ConntrackStatEntry).Invalid = invalid

	let __goscriptTuple5: any = parseConntrackStatField($.arrayIndex(fields!, 5))
	let ignore = __goscriptTuple5[0]
	err = __goscriptTuple5[1]
	if (err != null) {
		return [null, err]
	}
	;(entry$ as ConntrackStatEntry).Ignore = ignore

	let __goscriptTuple6: any = parseConntrackStatField($.arrayIndex(fields!, 8))
	let insert = __goscriptTuple6[0]
	err = __goscriptTuple6[1]
	if (err != null) {
		return [null, err]
	}
	;(entry$ as ConntrackStatEntry).Insert = insert

	let __goscriptTuple7: any = parseConntrackStatField($.arrayIndex(fields!, 9))
	let insertFailed = __goscriptTuple7[0]
	err = __goscriptTuple7[1]
	if (err != null) {
		return [null, err]
	}
	;(entry$ as ConntrackStatEntry).InsertFailed = insertFailed

	let __goscriptTuple8: any = parseConntrackStatField($.arrayIndex(fields!, 10))
	let drop = __goscriptTuple8[0]
	err = __goscriptTuple8[1]
	if (err != null) {
		return [null, err]
	}
	;(entry$ as ConntrackStatEntry).Drop = drop

	let __goscriptTuple9: any = parseConntrackStatField($.arrayIndex(fields!, 11))
	let earlyDrop = __goscriptTuple9[0]
	err = __goscriptTuple9[1]
	if (err != null) {
		return [null, err]
	}
	;(entry$ as ConntrackStatEntry).EarlyDrop = earlyDrop

	let __goscriptTuple10: any = parseConntrackStatField($.arrayIndex(fields!, 16))
	let searchRestart = __goscriptTuple10[0]
	err = __goscriptTuple10[1]
	if (err != null) {
		return [null, err]
	}
	;(entry$ as ConntrackStatEntry).SearchRestart = searchRestart

	return [entry, null]
}

export function parseConntrackStatField(field: string): [bigint, $.GoError] {
	let [val, err] = strconv.ParseUint(field, 16, 64)
	if (err != null) {
		return [0n, fmt.Errorf("couldn't parse %q field: %w", field, (err as any))]
	}
	return [val, err]
}
