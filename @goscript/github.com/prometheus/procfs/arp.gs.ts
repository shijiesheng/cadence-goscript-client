// Generated file based on arp.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as net from "@goscript/net/index.js"

import * as strings from "@goscript/strings/index.js"

import * as fs2 from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

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

import type * as __goscript_zoneinfo from "./zoneinfo.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/net/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "./mountstats.gs.ts"
import "./net_protocols.gs.ts"
import "./net_sockstat.gs.ts"
import "./net_unix.gs.ts"
import "./proc_fdinfo.gs.ts"
import "./proc_psi.gs.ts"
import "./schedstat.gs.ts"
import "./slab.gs.ts"
import "./stat.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.ARPEntry"])

export class ARPEntry {
	// IP address
	public get IPAddr(): net.IP {
		return this._fields.IPAddr
	}

	public set IPAddr(value: net.IP) {
		this._fields.IPAddr = value
	}

	// MAC address
	public get HWAddr(): net.HardwareAddr {
		return this._fields.HWAddr
	}

	public set HWAddr(value: net.HardwareAddr) {
		this._fields.HWAddr = value
	}

	// Name of the device
	public get Device(): string {
		return this._fields.Device
	}

	public set Device(value: string) {
		this._fields.Device = value
	}

	public _fields: {
		IPAddr: net.IP
		HWAddr: net.HardwareAddr
		Device: string
	}

	constructor(init?: Partial<{IPAddr?: net.IP, HWAddr?: net.HardwareAddr, Device?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			IPAddr: init?.IPAddr ?? (null! as net.IP),
			HWAddr: init?.HWAddr ?? (null! as net.HardwareAddr),
			Device: init?.Device ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ARPEntry {
		return new ARPEntry(this, true)
	}

	public __goscriptAssign(source: ARPEntry): void {
		const target = this._fields
		const values = source._fields
		target.IPAddr = values.IPAddr
		target.HWAddr = values.HWAddr
		target.Device = values.Device
	}

	static __typeInfo = $.registerStructType(
		"procfs.ARPEntry",
		() => new ARPEntry(),
		() => [],
		ARPEntry,
		() => [/* @__PURE__ */ $.structField("IPAddr", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), [0], 0, true), /* @__PURE__ */ $.structField("HWAddr", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.HardwareAddr"), [1], 24, true), /* @__PURE__ */ $.structField("Device", /* @__PURE__ */ $.basicType("string"), [2], 48, true)]
	)
}

export function parseARPEntries(data: $.Slice<number>): [$.Slice<ARPEntry>, $.GoError] {
	let lines: $.Slice<string> = strings.Split($.bytesToString(data), "\n")
	let entries: $.Slice<ARPEntry> = $.makeSlice<ARPEntry>(0, undefined, undefined, () => new ARPEntry(undefined, true))
	let err: $.GoError = null! as $.GoError
	const expectedDataWidth: number = 6
	const expectedHeaderWidth: number = 9
	for (let __goscriptRangeTarget0 = lines, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let line = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		let columns: $.Slice<string> = strings.Fields(line)
		let width = $.sliceLen(columns)

		if ((width == 9) || (width == 0)) {
			continue
		} else {
			if (width == 6) {
				let [entry, __goscriptShadow0] = parseARPEntry(columns)
				if (__goscriptShadow0 != null) {
					return [$.arrayToSlice<ARPEntry>([]), fmt.Errorf("failed to parse ARP entry: %w", (__goscriptShadow0 as any))]
				}
				entries = $.appendOne(entries, (entry).clone())
			} else {
				return [$.arrayToSlice<ARPEntry>([]), fmt.Errorf("%d columns were detected, but %d were expected", $.basicInterfaceValue(width, "int"), $.basicInterfaceValue(6, "int"))]
			}
		}
	}

	return [entries, err]
}

export function parseARPEntry(columns: $.Slice<string>): [ARPEntry, $.GoError] {
	let ip: net.IP = (net.ParseIP($.arrayIndex(columns!, 0)) as net.IP)
	let mac: net.HardwareAddr = ($.stringToBytes($.arrayIndex(columns!, 3)) as net.HardwareAddr)

	let entry = new ARPEntry({IPAddr: (ip as net.IP), HWAddr: (mac as net.HardwareAddr), Device: $.arrayIndex(columns!, 5)}, true)

	return [(entry).clone(), null]
}
