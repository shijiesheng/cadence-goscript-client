// Generated file based on buddyinfo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as os from "@goscript/os/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as fs2 from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import * as net from "@goscript/net/index.js"

import type * as __goscript_arp from "./arp.gs.ts"

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

import type * as __goscript_zoneinfo from "./zoneinfo.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/os/index.js"
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

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.BuddyInfo"])

export class BuddyInfo {
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

	public get Sizes(): $.Slice<number> {
		return this._fields.Sizes
	}

	public set Sizes(value: $.Slice<number>) {
		this._fields.Sizes = value
	}

	public _fields: {
		Node: string
		Zone: string
		Sizes: $.Slice<number>
	}

	constructor(init?: Partial<{Node?: string, Zone?: string, Sizes?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Node: init?.Node ?? ("" as string),
			Zone: init?.Zone ?? ("" as string),
			Sizes: init?.Sizes ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BuddyInfo {
		return new BuddyInfo(this, true)
	}

	public __goscriptAssign(source: BuddyInfo): void {
		const target = this._fields
		const values = source._fields
		target.Node = values.Node
		target.Zone = values.Zone
		target.Sizes = values.Sizes
	}

	static __typeInfo = $.registerStructType(
		"procfs.BuddyInfo",
		() => new BuddyInfo(),
		() => [],
		BuddyInfo,
		() => [/* @__PURE__ */ $.structField("Node", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Zone", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Sizes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")), [2], 32, true)]
	)
}

export async function parseBuddyInfo(r: io.Reader | null): globalThis.Promise<[$.Slice<BuddyInfo>, $.GoError]> {
	let buddyInfo: $.Slice<BuddyInfo> = $.arrayToSlice<BuddyInfo>([])
	let scanner: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner(r)
	let bucketCount: number = -1

	while (await (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(scanner))) {
		let err: $.GoError = null! as $.GoError
		let line = (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(scanner))
		let parts: $.Slice<string> = strings.Fields(line)

		if ($.sliceLen(parts) < 4) {
			return [null, fmt.Errorf("invalid number of fields when parsing buddyinfo")]
		}

		let node = strings.TrimRight($.arrayIndex(parts!, 1), ",")
		let zone = strings.TrimRight($.arrayIndex(parts!, 3), ",")
		let arraySize = $.sliceLen($.goSlice(parts, 4, undefined))

		if (bucketCount == -1) {
			bucketCount = arraySize
		} else {
			if (bucketCount != arraySize) {
				return [null, fmt.Errorf("mismatch in number of buddyinfo buckets, previous count %d, new count %d", $.basicInterfaceValue(bucketCount, "int"), $.basicInterfaceValue(arraySize, "int"))]
			}
		}

		let sizes: $.Slice<number> = $.makeSlice<number>(arraySize, undefined, "number")
		for (let __goscriptSliceWindow0 = $.sliceRange(sizes), __goscriptSliceWindow1 = $.sliceRange(parts), i = 0; i < arraySize; i++) {
			let __goscriptTuple0: any = strconv.ParseFloat(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i + 4)] as string), 64);
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			if (err != null) {
				return [null, fmt.Errorf("invalid value in buddyinfo: %w", (err as any))]
			}
		}

		buddyInfo = $.appendOne(buddyInfo, new BuddyInfo({Node: node, Zone: zone, Sizes: sizes}, true))
	}

	return [buddyInfo, (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Err() : bufio.Scanner.prototype.Err.call(scanner))]
}
