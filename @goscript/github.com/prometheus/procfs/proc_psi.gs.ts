// Generated file based on proc_psi.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

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
import "@goscript/strings/index.js"
import "@goscript/github.com/prometheus/procfs/internal/util/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "@goscript/net/index.js"
import "./mountstats.gs.ts"
import "./net_protocols.gs.ts"
import "./net_sockstat.gs.ts"
import "./net_unix.gs.ts"
import "./proc_fdinfo.gs.ts"
import "./schedstat.gs.ts"
import "./slab.gs.ts"
import "./stat.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.PSILine", "procfs.PSIStats"])

export class PSILine {
	public get Avg10(): number {
		return this._fields.Avg10
	}

	public set Avg10(value: number) {
		this._fields.Avg10 = value
	}

	public get Avg60(): number {
		return this._fields.Avg60
	}

	public set Avg60(value: number) {
		this._fields.Avg60 = value
	}

	public get Avg300(): number {
		return this._fields.Avg300
	}

	public set Avg300(value: number) {
		this._fields.Avg300 = value
	}

	public get Total(): bigint {
		return this._fields.Total
	}

	public set Total(value: bigint) {
		this._fields.Total = value
	}

	public _fields: {
		Avg10: number
		Avg60: number
		Avg300: number
		Total: bigint
	}

	constructor(init?: Partial<{Avg10?: number, Avg60?: number, Avg300?: number, Total?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Avg10: init?.Avg10 ?? (0 as number),
			Avg60: init?.Avg60 ?? (0 as number),
			Avg300: init?.Avg300 ?? (0 as number),
			Total: init?.Total ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PSILine {
		return new PSILine(this, true)
	}

	public __goscriptAssign(source: PSILine): void {
		const target = this._fields
		const values = source._fields
		target.Avg10 = values.Avg10
		target.Avg60 = values.Avg60
		target.Avg300 = values.Avg300
		target.Total = values.Total
	}

	static __typeInfo = $.registerStructType(
		"procfs.PSILine",
		() => new PSILine(),
		() => [],
		PSILine,
		() => [/* @__PURE__ */ $.structField("Avg10", /* @__PURE__ */ $.basicType("float64"), [0], 0, true), /* @__PURE__ */ $.structField("Avg60", /* @__PURE__ */ $.basicType("float64"), [1], 8, true), /* @__PURE__ */ $.structField("Avg300", /* @__PURE__ */ $.basicType("float64"), [2], 16, true), /* @__PURE__ */ $.structField("Total", /* @__PURE__ */ $.basicType("uint64"), [3], 24, true)]
	)
}

export class PSIStats {
	public get Some(): PSILine | $.VarRef<PSILine> | null {
		return this._fields.Some
	}

	public set Some(value: PSILine | $.VarRef<PSILine> | null) {
		this._fields.Some = value
	}

	public get Full(): PSILine | $.VarRef<PSILine> | null {
		return this._fields.Full
	}

	public set Full(value: PSILine | $.VarRef<PSILine> | null) {
		this._fields.Full = value
	}

	public _fields: {
		Some: PSILine | $.VarRef<PSILine> | null
		Full: PSILine | $.VarRef<PSILine> | null
	}

	constructor(init?: Partial<{Some?: PSILine | $.VarRef<PSILine> | null, Full?: PSILine | $.VarRef<PSILine> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Some: init?.Some ?? (null! as PSILine | $.VarRef<PSILine> | null),
			Full: init?.Full ?? (null! as PSILine | $.VarRef<PSILine> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PSIStats {
		return new PSIStats(this, true)
	}

	public __goscriptAssign(source: PSIStats): void {
		const target = this._fields
		const values = source._fields
		target.Some = values.Some
		target.Full = values.Full
	}

	static __typeInfo = $.registerStructType(
		"procfs.PSIStats",
		() => new PSIStats(),
		() => [],
		PSIStats,
		() => [/* @__PURE__ */ $.structField("Some", /* @__PURE__ */ $.pointerType("procfs.PSILine"), [0], 0, true), /* @__PURE__ */ $.structField("Full", /* @__PURE__ */ $.pointerType("procfs.PSILine"), [1], 8, true)]
	)
}

export const lineFormat: string = "avg10=%f avg60=%f avg300=%f total=%d"

export async function parsePSIStats(resource: string, r: io.Reader | null): globalThis.Promise<[PSIStats, $.GoError]> {
	let psiStats = new PSIStats(undefined, true)

	let scanner: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner(r)
	while (await (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(scanner))) {
		let l = (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(scanner))
		let prefix = $.arrayIndex(strings.Split(l, " ")!, 0)
		switch (prefix) {
			case "some":
			{
				let psi = $.varRef(new PSILine(undefined, true))
				let [, err] = fmt.Sscanf(l, await fmt.Sprintf("some %s", "avg10=%f avg60=%f avg300=%f total=%d"), $.interfaceValue($.fieldRef(psi.value._fields, "Avg10"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))), $.interfaceValue($.fieldRef(psi.value._fields, "Avg60"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))), $.interfaceValue($.fieldRef(psi.value._fields, "Avg300"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))), $.interfaceValue($.fieldRef(psi.value._fields, "Total"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))))
				if (err != null) {
					return [new PSIStats(undefined, true), err]
				}
				psiStats.Some = psi
				break
			}
			case "full":
			{
				let psi = $.varRef(new PSILine(undefined, true))
				let [, err] = fmt.Sscanf(l, await fmt.Sprintf("full %s", "avg10=%f avg60=%f avg300=%f total=%d"), $.interfaceValue($.fieldRef(psi.value._fields, "Avg10"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))), $.interfaceValue($.fieldRef(psi.value._fields, "Avg60"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))), $.interfaceValue($.fieldRef(psi.value._fields, "Avg300"), "*float64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))), $.interfaceValue($.fieldRef(psi.value._fields, "Total"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))))
				if (err != null) {
					return [new PSIStats(undefined, true), err]
				}
				psiStats.Full = psi
				break
			}
			default:
			{
				continue
				break
			}
		}
	}

	return [(psiStats).clone(), null]
}
