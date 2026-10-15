// Generated file based on slab.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

import * as fs2 from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import type * as io from "@goscript/io/index.js"

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

import * as __goscript_stat from "./stat.gs.ts"

import type * as __goscript_swaps from "./swaps.gs.ts"

import type * as __goscript_vm from "./vm.gs.ts"

import type * as __goscript_xfrm from "./xfrm.gs.ts"

import type * as __goscript_zoneinfo from "./zoneinfo.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/regexp/index.js"
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
import "./stat.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.Slab", "procfs.SlabInfo"])

export class Slab {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get ObjActive(): bigint {
		return this._fields.ObjActive
	}

	public set ObjActive(value: bigint) {
		this._fields.ObjActive = value
	}

	public get ObjNum(): bigint {
		return this._fields.ObjNum
	}

	public set ObjNum(value: bigint) {
		this._fields.ObjNum = value
	}

	public get ObjSize(): bigint {
		return this._fields.ObjSize
	}

	public set ObjSize(value: bigint) {
		this._fields.ObjSize = value
	}

	public get ObjPerSlab(): bigint {
		return this._fields.ObjPerSlab
	}

	public set ObjPerSlab(value: bigint) {
		this._fields.ObjPerSlab = value
	}

	public get PagesPerSlab(): bigint {
		return this._fields.PagesPerSlab
	}

	public set PagesPerSlab(value: bigint) {
		this._fields.PagesPerSlab = value
	}

	// tunables
	public get Limit(): bigint {
		return this._fields.Limit
	}

	public set Limit(value: bigint) {
		this._fields.Limit = value
	}

	public get Batch(): bigint {
		return this._fields.Batch
	}

	public set Batch(value: bigint) {
		this._fields.Batch = value
	}

	public get SharedFactor(): bigint {
		return this._fields.SharedFactor
	}

	public set SharedFactor(value: bigint) {
		this._fields.SharedFactor = value
	}

	public get SlabActive(): bigint {
		return this._fields.SlabActive
	}

	public set SlabActive(value: bigint) {
		this._fields.SlabActive = value
	}

	public get SlabNum(): bigint {
		return this._fields.SlabNum
	}

	public set SlabNum(value: bigint) {
		this._fields.SlabNum = value
	}

	public get SharedAvail(): bigint {
		return this._fields.SharedAvail
	}

	public set SharedAvail(value: bigint) {
		this._fields.SharedAvail = value
	}

	public _fields: {
		Name: string
		ObjActive: bigint
		ObjNum: bigint
		ObjSize: bigint
		ObjPerSlab: bigint
		PagesPerSlab: bigint
		Limit: bigint
		Batch: bigint
		SharedFactor: bigint
		SlabActive: bigint
		SlabNum: bigint
		SharedAvail: bigint
	}

	constructor(init?: Partial<{Name?: string, ObjActive?: bigint, ObjNum?: bigint, ObjSize?: bigint, ObjPerSlab?: bigint, PagesPerSlab?: bigint, Limit?: bigint, Batch?: bigint, SharedFactor?: bigint, SlabActive?: bigint, SlabNum?: bigint, SharedAvail?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			ObjActive: init?.ObjActive ?? (0n as bigint),
			ObjNum: init?.ObjNum ?? (0n as bigint),
			ObjSize: init?.ObjSize ?? (0n as bigint),
			ObjPerSlab: init?.ObjPerSlab ?? (0n as bigint),
			PagesPerSlab: init?.PagesPerSlab ?? (0n as bigint),
			Limit: init?.Limit ?? (0n as bigint),
			Batch: init?.Batch ?? (0n as bigint),
			SharedFactor: init?.SharedFactor ?? (0n as bigint),
			SlabActive: init?.SlabActive ?? (0n as bigint),
			SlabNum: init?.SlabNum ?? (0n as bigint),
			SharedAvail: init?.SharedAvail ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Slab {
		return new Slab(this, true)
	}

	public __goscriptAssign(source: Slab): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.ObjActive = values.ObjActive
		target.ObjNum = values.ObjNum
		target.ObjSize = values.ObjSize
		target.ObjPerSlab = values.ObjPerSlab
		target.PagesPerSlab = values.PagesPerSlab
		target.Limit = values.Limit
		target.Batch = values.Batch
		target.SharedFactor = values.SharedFactor
		target.SlabActive = values.SlabActive
		target.SlabNum = values.SlabNum
		target.SharedAvail = values.SharedAvail
	}

	static __typeInfo = $.registerStructType(
		"procfs.Slab",
		() => new Slab(),
		() => [],
		Slab,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("ObjActive", /* @__PURE__ */ $.basicType("int64"), [1], 16, true), /* @__PURE__ */ $.structField("ObjNum", /* @__PURE__ */ $.basicType("int64"), [2], 24, true), /* @__PURE__ */ $.structField("ObjSize", /* @__PURE__ */ $.basicType("int64"), [3], 32, true), /* @__PURE__ */ $.structField("ObjPerSlab", /* @__PURE__ */ $.basicType("int64"), [4], 40, true), /* @__PURE__ */ $.structField("PagesPerSlab", /* @__PURE__ */ $.basicType("int64"), [5], 48, true), /* @__PURE__ */ $.structField("Limit", /* @__PURE__ */ $.basicType("int64"), [6], 56, true), /* @__PURE__ */ $.structField("Batch", /* @__PURE__ */ $.basicType("int64"), [7], 64, true), /* @__PURE__ */ $.structField("SharedFactor", /* @__PURE__ */ $.basicType("int64"), [8], 72, true), /* @__PURE__ */ $.structField("SlabActive", /* @__PURE__ */ $.basicType("int64"), [9], 80, true), /* @__PURE__ */ $.structField("SlabNum", /* @__PURE__ */ $.basicType("int64"), [10], 88, true), /* @__PURE__ */ $.structField("SharedAvail", /* @__PURE__ */ $.basicType("int64"), [11], 96, true)]
	)
}

export class SlabInfo {
	public get Slabs(): $.Slice<Slab | $.VarRef<Slab> | null> {
		return this._fields.Slabs
	}

	public set Slabs(value: $.Slice<Slab | $.VarRef<Slab> | null>) {
		this._fields.Slabs = value
	}

	public _fields: {
		Slabs: $.Slice<Slab | $.VarRef<Slab> | null>
	}

	constructor(init?: Partial<{Slabs?: $.Slice<Slab | $.VarRef<Slab> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Slabs: init?.Slabs ?? (null! as $.Slice<Slab | $.VarRef<Slab> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SlabInfo {
		return new SlabInfo(this, true)
	}

	public __goscriptAssign(source: SlabInfo): void {
		const target = this._fields
		const values = source._fields
		target.Slabs = values.Slabs
	}

	static __typeInfo = $.registerStructType(
		"procfs.SlabInfo",
		() => new SlabInfo(),
		() => [],
		SlabInfo,
		() => [/* @__PURE__ */ $.structField("Slabs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("procfs.Slab")), [0], 0, true)]
	)
}

export let slabSpace: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("\\s+")

export function __goscript_set_slabSpace(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	slabSpace = __goscriptValue
}

export let slabVer: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("slabinfo -")

export function __goscript_set_slabVer(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	slabVer = __goscriptValue
}

export let slabHeader: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("# name")

export function __goscript_set_slabHeader(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	slabHeader = __goscriptValue
}

export async function shouldParseSlab(line: string): globalThis.Promise<boolean> {
	if (await (slabVer !== null && (slabVer as any).__isVarRef !== true && (slabVer as any).__goValue === undefined ? ((slabVer as any) as regexp.Regexp).MatchString(line) : regexp.Regexp.prototype.MatchString.call(slabVer, line))) {
		return false
	}
	if (await (slabHeader !== null && (slabHeader as any).__isVarRef !== true && (slabHeader as any).__goValue === undefined ? ((slabHeader as any) as regexp.Regexp).MatchString(line) : regexp.Regexp.prototype.MatchString.call(slabHeader, line))) {
		return false
	}
	return true
}

export async function parseV21SlabEntry(line: string): globalThis.Promise<[Slab | $.VarRef<Slab> | null, $.GoError]> {
	// First cleanup whitespace.
	let l = await (slabSpace !== null && (slabSpace as any).__isVarRef !== true && (slabSpace as any).__goValue === undefined ? ((slabSpace as any) as regexp.Regexp).ReplaceAllString(line, " ") : regexp.Regexp.prototype.ReplaceAllString.call(slabSpace, line, " "))
	let s: $.Slice<string> = strings.Split(l, " ")
	if ($.sliceLen(s) != 16) {
		return [null, fmt.Errorf("unable to parse: %q", line)]
	}
	let err: $.GoError = null! as $.GoError
	let i: Slab | $.VarRef<Slab> | null = new Slab({Name: $.arrayIndex(s!, 0)})
	let i$: Slab = i == null ? $.pointerTarget<Slab>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Slab>(i)
	let __goscriptTuple0: any = strconv.ParseInt($.arrayIndex(s!, 1), 10, 64);
	;(i$ as Slab).ObjActive = __goscriptTuple0[0]
	err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple1: any = strconv.ParseInt($.arrayIndex(s!, 2), 10, 64);
	;(i$ as Slab).ObjNum = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple2: any = strconv.ParseInt($.arrayIndex(s!, 3), 10, 64);
	;(i$ as Slab).ObjSize = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple3: any = strconv.ParseInt($.arrayIndex(s!, 4), 10, 64);
	;(i$ as Slab).ObjPerSlab = __goscriptTuple3[0]
	err = __goscriptTuple3[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple4: any = strconv.ParseInt($.arrayIndex(s!, 5), 10, 64);
	;(i$ as Slab).PagesPerSlab = __goscriptTuple4[0]
	err = __goscriptTuple4[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple5: any = strconv.ParseInt($.arrayIndex(s!, 8), 10, 64);
	;(i$ as Slab).Limit = __goscriptTuple5[0]
	err = __goscriptTuple5[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple6: any = strconv.ParseInt($.arrayIndex(s!, 9), 10, 64);
	;(i$ as Slab).Batch = __goscriptTuple6[0]
	err = __goscriptTuple6[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple7: any = strconv.ParseInt($.arrayIndex(s!, 10), 10, 64);
	;(i$ as Slab).SharedFactor = __goscriptTuple7[0]
	err = __goscriptTuple7[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple8: any = strconv.ParseInt($.arrayIndex(s!, 13), 10, 64);
	;(i$ as Slab).SlabActive = __goscriptTuple8[0]
	err = __goscriptTuple8[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple9: any = strconv.ParseInt($.arrayIndex(s!, 14), 10, 64);
	;(i$ as Slab).SlabNum = __goscriptTuple9[0]
	err = __goscriptTuple9[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple10: any = strconv.ParseInt($.arrayIndex(s!, 15), 10, 64);
	;(i$ as Slab).SharedAvail = __goscriptTuple10[0]
	err = __goscriptTuple10[1]
	if (err != null) {
		return [null, err]
	}
	return [i, null]
}

export async function parseSlabInfo21(r: bytes.Reader | $.VarRef<bytes.Reader> | null): globalThis.Promise<[SlabInfo, $.GoError]> {
	let scanner: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner($.interfaceValue<io.Reader | null>(r, "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))
	let s = new SlabInfo({Slabs: $.arrayToSlice<Slab | $.VarRef<Slab> | null>([])}, true)
	while (await (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(scanner))) {
		let line = (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(scanner))
		if (!await shouldParseSlab(line)) {
			continue
		}
		let __goscriptTuple11: any = await parseV21SlabEntry(line)
		let slab: Slab | $.VarRef<Slab> | null = __goscriptTuple11[0]
		let err = __goscriptTuple11[1]
		if (err != null) {
			return [(s).clone(), err]
		}
		s.Slabs = $.appendOne(s.Slabs, slab, $.appendZeros.nil)
	}
	return [(s).clone(), null]
}
