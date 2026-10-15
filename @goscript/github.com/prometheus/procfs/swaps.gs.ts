// Generated file based on swaps.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

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

import * as __goscript_slab from "./slab.gs.ts"

import * as __goscript_stat from "./stat.gs.ts"

import type * as __goscript_vm from "./vm.gs.ts"

import type * as __goscript_xfrm from "./xfrm.gs.ts"

import type * as __goscript_zoneinfo from "./zoneinfo.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
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

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.Swap"])

export class Swap {
	public get Filename(): string {
		return this._fields.Filename
	}

	public set Filename(value: string) {
		this._fields.Filename = value
	}

	public get Type(): string {
		return this._fields.Type
	}

	public set Type(value: string) {
		this._fields.Type = value
	}

	public get Size(): number {
		return this._fields.Size
	}

	public set Size(value: number) {
		this._fields.Size = value
	}

	public get Used(): number {
		return this._fields.Used
	}

	public set Used(value: number) {
		this._fields.Used = value
	}

	public get Priority(): number {
		return this._fields.Priority
	}

	public set Priority(value: number) {
		this._fields.Priority = value
	}

	public _fields: {
		Filename: string
		Type: string
		Size: number
		Used: number
		Priority: number
	}

	constructor(init?: Partial<{Filename?: string, Type?: string, Size?: number, Used?: number, Priority?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Filename: init?.Filename ?? ("" as string),
			Type: init?.Type ?? ("" as string),
			Size: init?.Size ?? (0 as number),
			Used: init?.Used ?? (0 as number),
			Priority: init?.Priority ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Swap {
		return new Swap(this, true)
	}

	public __goscriptAssign(source: Swap): void {
		const target = this._fields
		const values = source._fields
		target.Filename = values.Filename
		target.Type = values.Type
		target.Size = values.Size
		target.Used = values.Used
		target.Priority = values.Priority
	}

	static __typeInfo = $.registerStructType(
		"procfs.Swap",
		() => new Swap(),
		() => [],
		Swap,
		() => [/* @__PURE__ */ $.structField("Filename", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("int"), [2], 32, true), /* @__PURE__ */ $.structField("Used", /* @__PURE__ */ $.basicType("int"), [3], 40, true), /* @__PURE__ */ $.structField("Priority", /* @__PURE__ */ $.basicType("int"), [4], 48, true)]
	)
}

export async function parseSwaps(info: $.Slice<number>): globalThis.Promise<[$.Slice<Swap | $.VarRef<Swap> | null>, $.GoError]> {
	let swaps: $.Slice<Swap | $.VarRef<Swap> | null> = $.arrayToSlice<Swap | $.VarRef<Swap> | null>([])
	let scanner: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner($.interfaceValue<io.Reader | null>(bytes.NewReader(info), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))
	await (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(scanner))
	while (await (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(scanner))) {
		let swapString = (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(scanner))
		let __goscriptTuple0: any = parseSwapString(swapString)
		let parsedSwap: Swap | $.VarRef<Swap> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		swaps = $.appendOne(swaps, parsedSwap, $.appendZeros.nil)
	}

	let err = (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Err() : bufio.Scanner.prototype.Err.call(scanner))
	return [swaps, err]
}

export function parseSwapString(swapString: string): [Swap | $.VarRef<Swap> | null, $.GoError] {
	let err: $.GoError = null! as $.GoError

	let swapFields: $.Slice<string> = strings.Fields(swapString)
	let swapLength = $.sliceLen(swapFields)
	if (swapLength < 5) {
		return [null, fmt.Errorf("too few fields in swap string: %s", swapString)]
	}

	let swap: Swap | $.VarRef<Swap> | null = new Swap({Filename: $.arrayIndex(swapFields!, 0), Type: $.arrayIndex(swapFields!, 1)})
	let swap$: Swap = swap == null ? $.pointerTarget<Swap>(swap) : (swap as any).__isVarRef === true ? (swap as any).value : (swap as any).__goValue === undefined ? (swap as any) : $.pointerTarget<Swap>(swap)

	let __goscriptTuple1: any = strconv.Atoi($.arrayIndex(swapFields!, 2));
	;(swap$ as Swap).Size = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return [null, fmt.Errorf("invalid swap size: %s", $.arrayIndex(swapFields!, 2))]
	}
	let __goscriptTuple2: any = strconv.Atoi($.arrayIndex(swapFields!, 3));
	;(swap$ as Swap).Used = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	if (err != null) {
		return [null, fmt.Errorf("invalid swap used: %s", $.arrayIndex(swapFields!, 3))]
	}
	let __goscriptTuple3: any = strconv.Atoi($.arrayIndex(swapFields!, 4));
	;(swap$ as Swap).Priority = __goscriptTuple3[0]
	err = __goscriptTuple3[1]
	if (err != null) {
		return [null, fmt.Errorf("invalid swap priority: %s", $.arrayIndex(swapFields!, 4))]
	}

	return [swap, null]
}
