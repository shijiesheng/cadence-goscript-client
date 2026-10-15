// Generated file based on net_sockstat.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

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
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/prometheus/procfs/internal/util/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "@goscript/net/index.js"
import "./mountstats.gs.ts"
import "./net_protocols.gs.ts"
import "./net_unix.gs.ts"
import "./proc_fdinfo.gs.ts"
import "./proc_psi.gs.ts"
import "./schedstat.gs.ts"
import "./slab.gs.ts"
import "./stat.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.NetSockstat", "procfs.NetSockstatProtocol"])

export class NetSockstat {
	// Used is non-nil for IPv4 sockstat results, but nil for IPv6.
	public get Used(): $.VarRef<number> | null {
		return this._fields.Used
	}

	public set Used(value: $.VarRef<number> | null) {
		this._fields.Used = value
	}

	public get Protocols(): $.Slice<NetSockstatProtocol> {
		return this._fields.Protocols
	}

	public set Protocols(value: $.Slice<NetSockstatProtocol>) {
		this._fields.Protocols = value
	}

	public _fields: {
		Used: $.VarRef<number> | null
		Protocols: $.Slice<NetSockstatProtocol>
	}

	constructor(init?: Partial<{Used?: $.VarRef<number> | null, Protocols?: $.Slice<NetSockstatProtocol>}>, __goscriptValue?: boolean) {
		this._fields = {
			Used: init?.Used ?? (null! as $.VarRef<number> | null),
			Protocols: init?.Protocols ?? (null! as $.Slice<NetSockstatProtocol>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NetSockstat {
		return new NetSockstat(this, true)
	}

	public __goscriptAssign(source: NetSockstat): void {
		const target = this._fields
		const values = source._fields
		target.Used = values.Used
		target.Protocols = values.Protocols
	}

	static __typeInfo = $.registerStructType(
		"procfs.NetSockstat",
		() => new NetSockstat(),
		() => [],
		NetSockstat,
		() => [/* @__PURE__ */ $.structField("Used", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int")), [0], 0, true), /* @__PURE__ */ $.structField("Protocols", /* @__PURE__ */ $.sliceType("procfs.NetSockstatProtocol"), [1], 8, true)]
	)
}

export class NetSockstatProtocol {
	public get Protocol(): string {
		return this._fields.Protocol
	}

	public set Protocol(value: string) {
		this._fields.Protocol = value
	}

	public get InUse(): number {
		return this._fields.InUse
	}

	public set InUse(value: number) {
		this._fields.InUse = value
	}

	public get Orphan(): $.VarRef<number> | null {
		return this._fields.Orphan
	}

	public set Orphan(value: $.VarRef<number> | null) {
		this._fields.Orphan = value
	}

	public get TW(): $.VarRef<number> | null {
		return this._fields.TW
	}

	public set TW(value: $.VarRef<number> | null) {
		this._fields.TW = value
	}

	public get Alloc(): $.VarRef<number> | null {
		return this._fields.Alloc
	}

	public set Alloc(value: $.VarRef<number> | null) {
		this._fields.Alloc = value
	}

	public get Mem(): $.VarRef<number> | null {
		return this._fields.Mem
	}

	public set Mem(value: $.VarRef<number> | null) {
		this._fields.Mem = value
	}

	public get Memory(): $.VarRef<number> | null {
		return this._fields.Memory
	}

	public set Memory(value: $.VarRef<number> | null) {
		this._fields.Memory = value
	}

	public _fields: {
		Protocol: string
		InUse: number
		Orphan: $.VarRef<number> | null
		TW: $.VarRef<number> | null
		Alloc: $.VarRef<number> | null
		Mem: $.VarRef<number> | null
		Memory: $.VarRef<number> | null
	}

	constructor(init?: Partial<{Protocol?: string, InUse?: number, Orphan?: $.VarRef<number> | null, TW?: $.VarRef<number> | null, Alloc?: $.VarRef<number> | null, Mem?: $.VarRef<number> | null, Memory?: $.VarRef<number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Protocol: init?.Protocol ?? ("" as string),
			InUse: init?.InUse ?? (0 as number),
			Orphan: init?.Orphan ?? (null! as $.VarRef<number> | null),
			TW: init?.TW ?? (null! as $.VarRef<number> | null),
			Alloc: init?.Alloc ?? (null! as $.VarRef<number> | null),
			Mem: init?.Mem ?? (null! as $.VarRef<number> | null),
			Memory: init?.Memory ?? (null! as $.VarRef<number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NetSockstatProtocol {
		return new NetSockstatProtocol(this, true)
	}

	public __goscriptAssign(source: NetSockstatProtocol): void {
		const target = this._fields
		const values = source._fields
		target.Protocol = values.Protocol
		target.InUse = values.InUse
		target.Orphan = values.Orphan
		target.TW = values.TW
		target.Alloc = values.Alloc
		target.Mem = values.Mem
		target.Memory = values.Memory
	}

	static __typeInfo = $.registerStructType(
		"procfs.NetSockstatProtocol",
		() => new NetSockstatProtocol(),
		() => [],
		NetSockstatProtocol,
		() => [/* @__PURE__ */ $.structField("Protocol", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("InUse", /* @__PURE__ */ $.basicType("int"), [1], 16, true), /* @__PURE__ */ $.structField("Orphan", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int")), [2], 24, true), /* @__PURE__ */ $.structField("TW", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int")), [3], 32, true), /* @__PURE__ */ $.structField("Alloc", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int")), [4], 40, true), /* @__PURE__ */ $.structField("Mem", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int")), [5], 48, true), /* @__PURE__ */ $.structField("Memory", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int")), [6], 56, true)]
	)
}

export async function readSockstat(name: string): globalThis.Promise<[NetSockstat | $.VarRef<NetSockstat> | null, $.GoError]> {
	// This file is small and can be read with one syscall.
	let __goscriptTuple0: any = await util.ReadFileNoStat(name)
	let b: $.Slice<number> = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		// Do not wrap this error so the caller can detect os.IsNotExist and
		// similar conditions.
		return [null, err]
	}

	let __goscriptTuple1: any = await parseSockstat($.interfaceValue<io.Reader | null>(bytes.NewReader(b), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))
	let stat: NetSockstat | $.VarRef<NetSockstat> | null = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return [null, fmt.Errorf("failed to read sockstats from %q: %w", name, (err as any))]
	}

	return [stat, null]
}

export async function parseSockstat(r: io.Reader | null): globalThis.Promise<[NetSockstat | $.VarRef<NetSockstat> | null, $.GoError]> {
	let stat: $.VarRef<NetSockstat> = $.varRef(new NetSockstat(undefined, true))
	let s: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner(r)
	while (await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))) {
		// Expect a minimum of a protocol and one key/value pair.
		let fields: $.Slice<string> = strings.Split((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s)), " ")
		if ($.sliceLen(fields) < 3) {
			return [null, fmt.Errorf("malformed sockstat line: %q", (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s)))]
		}

		// The remaining fields are key/value pairs.
		let __goscriptTuple2: any = parseSockstatKVs($.goSlice(fields, 1, undefined))
		let kvs: globalThis.Map<string, number> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return [null, fmt.Errorf("error parsing sockstat key/value pairs from %q: %w", (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s)), (err as any))]
		}

		// The first field is the protocol. We must trim its colon suffix.
		let proto = strings.TrimSuffix($.arrayIndex(fields!, 0), ":")
		switch (proto) {
			case "sockets":
			{
				let used = $.varRef($.mapGet<string, number, number>(kvs, "used", 0)[0])
				stat.value.Used = used
				break
			}
			default:
			{
				let nsp = parseSockstatProtocol(kvs)
				nsp.Protocol = proto
				stat.value.Protocols = $.appendOne(stat.value.Protocols, (nsp).clone())
				break
			}
		}
	}

	{
		let err = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Err() : bufio.Scanner.prototype.Err.call(s))
		if (err != null) {
			return [null, err]
		}
	}

	return [stat, null]
}

export function parseSockstatKVs(kvs: $.Slice<string>): [globalThis.Map<string, number> | null, $.GoError] {
	if (($.sliceLen(kvs) % 2) != 0) {
		return [null, errors.New("odd number of fields in key/value pairs")]
	}

	// Iterate two values at a time to gather key/value pairs.
	let out: globalThis.Map<string, number> | null = $.makeMap<string, number>()
	for (let __goscriptSliceWindow0 = $.sliceRange(kvs), i = 0; i < __goscriptSliceWindow0.length; i = i + (2)) {
		let vp: util.ValueParser | $.VarRef<util.ValueParser> | null = util.NewValueParser(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i + 1)] as string))
		$.mapSet(out, ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string), (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).Int() : util.ValueParser.prototype.Int.call(vp)))

		{
			let err = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).Err() : util.ValueParser.prototype.Err.call(vp))
			if (err != null) {
				return [null, err]
			}
		}
	}

	return [out, null]
}

export function parseSockstatProtocol(kvs: globalThis.Map<string, number> | null): NetSockstatProtocol {
	let nsp: NetSockstatProtocol = new NetSockstatProtocol(undefined, true)
	for (const [k, v] of kvs?.entries() ?? []) {
		// Capture the range variable to ensure we get unique pointers for
		// each of the optional fields.
		let __goscriptShadow0 = v
		let __goscriptShadow1 = $.varRef(__goscriptShadow0)
		switch (k) {
			case "inuse":
			{
				nsp.InUse = __goscriptShadow1.value
				break
			}
			case "orphan":
			{
				nsp.Orphan = __goscriptShadow1
				break
			}
			case "tw":
			{
				nsp.TW = __goscriptShadow1
				break
			}
			case "alloc":
			{
				nsp.Alloc = __goscriptShadow1
				break
			}
			case "mem":
			{
				nsp.Mem = __goscriptShadow1
				break
			}
			case "memory":
			{
				nsp.Memory = __goscriptShadow1
				break
			}
		}
	}

	return (nsp).clone()
}
