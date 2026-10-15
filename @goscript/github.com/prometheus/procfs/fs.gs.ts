// Generated file based on fs.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as net from "@goscript/net/index.js"

import * as strings from "@goscript/strings/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as io from "@goscript/io/index.js"

import * as os from "@goscript/os/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

import * as fs2 from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import * as hex from "@goscript/encoding/hex/index.js"

import * as errors from "@goscript/errors/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as sort from "@goscript/sort/index.js"

import * as filepath from "@goscript/path/filepath/index.js"

import * as fs3 from "@goscript/io/fs/index.js"

import * as __goscript_arp from "./arp.gs.ts"

import * as __goscript_buddyinfo from "./buddyinfo.gs.ts"

import * as __goscript_crypto from "./crypto.gs.ts"

import * as __goscript_fscache from "./fscache.gs.ts"

import * as __goscript_ipvs from "./ipvs.gs.ts"

import * as __goscript_kernel_random from "./kernel_random.gs.ts"

import * as __goscript_loadavg from "./loadavg.gs.ts"

import * as __goscript_mdstat from "./mdstat.gs.ts"

import * as __goscript_meminfo from "./meminfo.gs.ts"

import type * as __goscript_mountinfo from "./mountinfo.gs.ts"

import * as __goscript_mountstats from "./mountstats.gs.ts"

import * as __goscript_net_conntrackstat from "./net_conntrackstat.gs.ts"

import * as __goscript_net_dev from "./net_dev.gs.ts"

import type * as __goscript_net_ip_socket from "./net_ip_socket.gs.ts"

import * as __goscript_net_protocols from "./net_protocols.gs.ts"

import * as __goscript_net_sockstat from "./net_sockstat.gs.ts"

import * as __goscript_net_softnet from "./net_softnet.gs.ts"

import * as __goscript_net_tcp from "./net_tcp.gs.ts"

import * as __goscript_net_udp from "./net_udp.gs.ts"

import * as __goscript_net_unix from "./net_unix.gs.ts"

import * as __goscript_proc from "./proc.gs.ts"

import * as __goscript_proc_cgroup from "./proc_cgroup.gs.ts"

import * as __goscript_proc_environ from "./proc_environ.gs.ts"

import * as __goscript_proc_fdinfo from "./proc_fdinfo.gs.ts"

import * as __goscript_proc_io from "./proc_io.gs.ts"

import * as __goscript_proc_limits from "./proc_limits.gs.ts"

import * as __goscript_proc_ns from "./proc_ns.gs.ts"

import * as __goscript_proc_psi from "./proc_psi.gs.ts"

import * as __goscript_proc_smaps from "./proc_smaps.gs.ts"

import * as __goscript_proc_stat from "./proc_stat.gs.ts"

import * as __goscript_proc_status from "./proc_status.gs.ts"

import * as __goscript_schedstat from "./schedstat.gs.ts"

import * as __goscript_slab from "./slab.gs.ts"

import * as __goscript_stat from "./stat.gs.ts"

import * as __goscript_swaps from "./swaps.gs.ts"

import * as __goscript_vm from "./vm.gs.ts"

import * as __goscript_xfrm from "./xfrm.gs.ts"

import * as __goscript_zoneinfo from "./zoneinfo.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/net/index.js"
import "@goscript/strings/index.js"
import "@goscript/bufio/index.js"
import "@goscript/io/index.js"
import "@goscript/os/index.js"
import "@goscript/strconv/index.js"
import "@goscript/bytes/index.js"
import "@goscript/github.com/prometheus/procfs/internal/util/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "@goscript/encoding/hex/index.js"
import "@goscript/errors/index.js"
import "@goscript/regexp/index.js"
import "@goscript/sort/index.js"
import "@goscript/path/filepath/index.js"
import "@goscript/io/fs/index.js"
import "./arp.gs.ts"
import "./buddyinfo.gs.ts"
import "./crypto.gs.ts"
import "./fscache.gs.ts"
import "./ipvs.gs.ts"
import "./kernel_random.gs.ts"
import "./loadavg.gs.ts"
import "./mdstat.gs.ts"
import "./meminfo.gs.ts"
import "./mountstats.gs.ts"
import "./net_conntrackstat.gs.ts"
import "./net_dev.gs.ts"
import "./net_protocols.gs.ts"
import "./net_sockstat.gs.ts"
import "./net_softnet.gs.ts"
import "./net_tcp.gs.ts"
import "./net_udp.gs.ts"
import "./net_unix.gs.ts"
import "./proc.gs.ts"
import "./proc_cgroup.gs.ts"
import "./proc_environ.gs.ts"
import "./proc_fdinfo.gs.ts"
import "./proc_io.gs.ts"
import "./proc_limits.gs.ts"
import "./proc_ns.gs.ts"
import "./proc_psi.gs.ts"
import "./proc_smaps.gs.ts"
import "./proc_stat.gs.ts"
import "./proc_status.gs.ts"
import "./schedstat.gs.ts"
import "./slab.gs.ts"
import "./stat.gs.ts"
import "./swaps.gs.ts"
import "./vm.gs.ts"
import "./xfrm.gs.ts"
import "./zoneinfo.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.FS"])

export class FS {
	public get proc(): fs2.FS {
		return this._fields.proc
	}

	public set proc(value: fs2.FS) {
		this._fields.proc = value
	}

	public _fields: {
		proc: fs2.FS
	}

	constructor(init?: Partial<{proc?: fs2.FS}>, __goscriptValue?: boolean) {
		this._fields = {
			proc: init?.proc ?? ("" as fs2.FS)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FS {
		return new FS(this, true)
	}

	public __goscriptAssign(source: FS): void {
		const target = this._fields
		const values = source._fields
		target.proc = values.proc
	}

	public async AllProcs(): globalThis.Promise<[__goscript_proc.Procs, $.GoError]> {
		const fs = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple0: any = await os.Open(fs2.FS_Path(fs.proc, null))
		let d: os.File | $.VarRef<os.File> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [($.arrayToSlice<__goscript_proc.Proc>([]) as __goscript_proc.Procs), err]
		}
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Close())($.pointerValue<os.File>(d)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "os.(*File).Close-fm")
		__defer.defer(async () => { await __goscriptDeferCallee0() })

		let __goscriptTuple1: any = await os.File.prototype.Readdirnames.call($.pointerValue<os.File>(d), -1)
		let names: $.Slice<string> = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [($.arrayToSlice<__goscript_proc.Proc>([]) as __goscript_proc.Procs), fmt.Errorf("could not read %q: %w", os.File.prototype.Name.call($.pointerValue<os.File>(d)), (err as any))]
		}

		let p: __goscript_proc.Procs = ($.arrayToSlice<__goscript_proc.Proc>([]) as __goscript_proc.Procs)
		for (let __goscriptRangeTarget0 = names, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let n = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
			let [pid, __goscriptShadow0] = strconv.ParseInt(n, 10, 64)
			if (__goscriptShadow0 != null) {
				continue
			}
			p = ($.appendOne((p as __goscript_proc.Procs), new __goscript_proc.Proc({PID: $.int(pid), fs: fs.proc}, true)) as __goscript_proc.Procs)
		}

		return [(p as __goscript_proc.Procs), null]
	}

	public async BuddyInfo(): globalThis.Promise<[$.Slice<__goscript_buddyinfo.BuddyInfo>, $.GoError]> {
		const fs = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple2: any = await os.Open(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["buddyinfo"])))
		let file: os.File | $.VarRef<os.File> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Close())($.pointerValue<os.File>(file)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "os.(*File).Close-fm")
		__defer.defer(async () => { await __goscriptDeferCallee1() })

		return await __goscript_buddyinfo.parseBuddyInfo($.interfaceValue<io.Reader | null>(file, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))
	}

	public async ConntrackStat(): globalThis.Promise<[$.Slice<__goscript_net_conntrackstat.ConntrackStatEntry>, $.GoError]> {
		const fs = this;
		return __goscript_net_conntrackstat.readConntrackStat(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net", "stat", "nf_conntrack"])))
	}

	public async Crypto(): globalThis.Promise<[$.Slice<__goscript_crypto.Crypto>, $.GoError]> {
		const fs = this;
		let path = fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["crypto"]))
		let __goscriptTuple3: any = await util.ReadFileNoStat(path)
		let b: $.Slice<number> = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			return [null, fmt.Errorf("error reading crypto %q: %w", path, (err as any))]
		}

		let __goscriptTuple4: any = await __goscript_crypto.parseCrypto($.interfaceValue<io.Reader | null>(bytes.NewReader(b), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))
		let crypto: $.Slice<__goscript_crypto.Crypto> = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, fmt.Errorf("error parsing crypto %q: %w", path, (err as any))]
		}

		return [crypto, null]
	}

	public async Fscacheinfo(): globalThis.Promise<[__goscript_fscache.Fscacheinfo, $.GoError]> {
		const fs = this;
		let __goscriptTuple5: any = await util.ReadFileNoStat(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["fs/fscache/stats"])))
		let b: $.Slice<number> = __goscriptTuple5[0]
		let err = __goscriptTuple5[1]
		if (err != null) {
			return [new __goscript_fscache.Fscacheinfo(undefined, true), err]
		}

		let __goscriptTuple6: any = await __goscript_fscache.parseFscacheinfo($.interfaceValue<io.Reader | null>(bytes.NewReader(b), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))
		let m: __goscript_fscache.Fscacheinfo | $.VarRef<__goscript_fscache.Fscacheinfo> | null = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return [new __goscript_fscache.Fscacheinfo(undefined, true), fmt.Errorf("failed to parse Fscacheinfo: %w", (err as any))]
		}

		return [($.pointerValue<__goscript_fscache.Fscacheinfo>(m)).clone(), null]
	}

	public async GatherARPEntries(): globalThis.Promise<[$.Slice<__goscript_arp.ARPEntry>, $.GoError]> {
		const fs = this;
		let __goscriptTuple7: any = await ioutil.ReadFile(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net/arp"])))
		let data: $.Slice<number> = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		if (err != null) {
			return [null, fmt.Errorf("error reading arp %q: %w", fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net/arp"])), (err as any))]
		}

		return __goscript_arp.parseARPEntries(data)
	}

	public async IPVSBackendStatus(): globalThis.Promise<[$.Slice<__goscript_ipvs.IPVSBackendStatus>, $.GoError]> {
		const fs = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple8: any = await os.Open(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net/ip_vs"])))
		let file: os.File | $.VarRef<os.File> | null = __goscriptTuple8[0]
		let err = __goscriptTuple8[1]
		if (err != null) {
			return [null, err]
		}
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Close())($.pointerValue<os.File>(file)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "os.(*File).Close-fm")
		__defer.defer(async () => { await __goscriptDeferCallee2() })

		return await __goscript_ipvs.parseIPVSBackendStatus($.interfaceValue<io.Reader | null>(file, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))
	}

	public async IPVSStats(): globalThis.Promise<[__goscript_ipvs.IPVSStats, $.GoError]> {
		const fs = this;
		let __goscriptTuple9: any = await util.ReadFileNoStat(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net/ip_vs_stats"])))
		let data: $.Slice<number> = __goscriptTuple9[0]
		let err = __goscriptTuple9[1]
		if (err != null) {
			return [new __goscript_ipvs.IPVSStats(undefined, true), err]
		}

		return __goscript_ipvs.parseIPVSStats($.interfaceValue<io.Reader | null>(bytes.NewReader(data), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))
	}

	public async KernelRandom(): globalThis.Promise<[__goscript_kernel_random.KernelRandom, $.GoError]> {
		const fs = this;
		let random = new __goscript_kernel_random.KernelRandom(undefined, true)

		for (let [file, p] of $.makeMap<string, $.VarRef<$.VarRef<bigint> | null> | null>([["entropy_avail", $.fieldRef(random._fields, "EntropyAvaliable")], ["poolsize", $.fieldRef(random._fields, "PoolSize")], ["urandom_min_reseed_secs", $.fieldRef(random._fields, "URandomMinReseedSeconds")], ["write_wakeup_threshold", $.fieldRef(random._fields, "WriteWakeupThreshold")], ["read_wakeup_threshold", $.fieldRef(random._fields, "ReadWakeupThreshold")]])?.entries() ?? []) {
			let __goscriptTuple10: any = await util.ReadUintFromFile(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["sys", "kernel", "random", file])))
			let val = $.varRef(__goscriptTuple10[0])
			let err = __goscriptTuple10[1]
			if (os.IsNotExist($.pointerValueOrNil(err)!)) {
				continue
			}
			if (err != null) {
				return [(random).clone(), err]
			}
			p!.value = val
		}

		return [(random).clone(), null]
	}

	public async LoadAvg(): globalThis.Promise<[__goscript_loadavg.LoadAvg | $.VarRef<__goscript_loadavg.LoadAvg> | null, $.GoError]> {
		const fs = this;
		let path = fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["loadavg"]))

		let __goscriptTuple11: any = await util.ReadFileNoStat(path)
		let data: $.Slice<number> = __goscriptTuple11[0]
		let err = __goscriptTuple11[1]
		if (err != null) {
			return [null, err]
		}
		return __goscript_loadavg.parseLoad(data)
	}

	public async MDStat(): globalThis.Promise<[$.Slice<__goscript_mdstat.MDStat>, $.GoError]> {
		const fs = this;
		let __goscriptTuple12: any = await ioutil.ReadFile(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["mdstat"])))
		let data: $.Slice<number> = __goscriptTuple12[0]
		let err = __goscriptTuple12[1]
		if (err != null) {
			return [null, err]
		}
		let __goscriptTuple13: any = await __goscript_mdstat.parseMDStat(data)
		let mdstat: $.Slice<__goscript_mdstat.MDStat> = __goscriptTuple13[0]
		err = __goscriptTuple13[1]
		if (err != null) {
			return [null, fmt.Errorf("error parsing mdstat %q: %w", fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["mdstat"])), (err as any))]
		}
		return [mdstat, null]
	}

	public async Meminfo(): globalThis.Promise<[__goscript_meminfo.Meminfo, $.GoError]> {
		const fs = this;
		let __goscriptTuple14: any = await util.ReadFileNoStat(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["meminfo"])))
		let b: $.Slice<number> = __goscriptTuple14[0]
		let err = __goscriptTuple14[1]
		if (err != null) {
			return [new __goscript_meminfo.Meminfo(undefined, true), err]
		}

		let __goscriptTuple15: any = await __goscript_meminfo.parseMemInfo($.interfaceValue<io.Reader | null>(bytes.NewReader(b), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))
		let m: __goscript_meminfo.Meminfo | $.VarRef<__goscript_meminfo.Meminfo> | null = __goscriptTuple15[0]
		err = __goscriptTuple15[1]
		if (err != null) {
			return [new __goscript_meminfo.Meminfo(undefined, true), fmt.Errorf("failed to parse meminfo: %w", (err as any))]
		}

		return [($.pointerValue<__goscript_meminfo.Meminfo>(m)).clone(), null]
	}

	public async NetDev(): globalThis.Promise<[__goscript_net_dev.NetDev, $.GoError]> {
		const fs = this;
		return __goscript_net_dev.newNetDev(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net/dev"])))
	}

	public async NetProtocols(): globalThis.Promise<[__goscript_net_protocols.NetProtocolStats, $.GoError]> {
		const fs = this;
		let __goscriptTuple16: any = await util.ReadFileNoStat(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net/protocols"])))
		let data: $.Slice<number> = __goscriptTuple16[0]
		let err = __goscriptTuple16[1]
		if (err != null) {
			return [$.makeMap<string, __goscript_net_protocols.NetProtocolStatLine>([]), err]
		}
		return __goscript_net_protocols.parseNetProtocols(bufio.NewScanner($.interfaceValue<io.Reader | null>(bytes.NewReader(data), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader"))))
	}

	public async NetSockstat(): globalThis.Promise<[__goscript_net_sockstat.NetSockstat | $.VarRef<__goscript_net_sockstat.NetSockstat> | null, $.GoError]> {
		const fs = this;
		return __goscript_net_sockstat.readSockstat(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net", "sockstat"])))
	}

	public async NetSockstat6(): globalThis.Promise<[__goscript_net_sockstat.NetSockstat | $.VarRef<__goscript_net_sockstat.NetSockstat> | null, $.GoError]> {
		const fs = this;
		return __goscript_net_sockstat.readSockstat(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net", "sockstat6"])))
	}

	public async NetSoftnetStat(): globalThis.Promise<[$.Slice<__goscript_net_softnet.SoftnetStat>, $.GoError]> {
		const fs = this;
		let __goscriptTuple17: any = await util.ReadFileNoStat(fs2.FS_Path(fs.proc, $.arrayToSlice<string>([__goscript_net_softnet.softNetProcFile])))
		let b: $.Slice<number> = __goscriptTuple17[0]
		let err = __goscriptTuple17[1]
		if (err != null) {
			return [null, err]
		}

		let __goscriptTuple18: any = await __goscript_net_softnet.parseSoftnet($.interfaceValue<io.Reader | null>(bytes.NewReader(b), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))
		let entries: $.Slice<__goscript_net_softnet.SoftnetStat> = __goscriptTuple18[0]
		err = __goscriptTuple18[1]
		if (err != null) {
			return [null, fmt.Errorf("failed to parse /proc/net/softnet_stat: %w", (err as any))]
		}

		return [entries, null]
	}

	public async NetTCP(): globalThis.Promise<[__goscript_net_tcp.NetTCP, $.GoError]> {
		const fs = this;
		const __goscriptReturn10 = await __goscript_net_tcp.newNetTCP(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net/tcp"])))
		return [(__goscriptReturn10[0] as __goscript_net_tcp.NetTCP), __goscriptReturn10[1]]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async NetTCP6(): globalThis.Promise<[__goscript_net_tcp.NetTCP, $.GoError]> {
		const fs = this;
		const __goscriptReturn11 = await __goscript_net_tcp.newNetTCP(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net/tcp6"])))
		return [(__goscriptReturn11[0] as __goscript_net_tcp.NetTCP), __goscriptReturn11[1]]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async NetTCP6Summary(): globalThis.Promise<[__goscript_net_tcp.NetTCPSummary | $.VarRef<__goscript_net_tcp.NetTCPSummary> | null, $.GoError]> {
		const fs = this;
		return __goscript_net_tcp.newNetTCPSummary(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net/tcp6"])))
	}

	public async NetTCPSummary(): globalThis.Promise<[__goscript_net_tcp.NetTCPSummary | $.VarRef<__goscript_net_tcp.NetTCPSummary> | null, $.GoError]> {
		const fs = this;
		return __goscript_net_tcp.newNetTCPSummary(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net/tcp"])))
	}

	public async NetUDP(): globalThis.Promise<[__goscript_net_udp.NetUDP, $.GoError]> {
		const fs = this;
		const __goscriptReturn14 = await __goscript_net_udp.newNetUDP(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net/udp"])))
		return [(__goscriptReturn14[0] as __goscript_net_udp.NetUDP), __goscriptReturn14[1]]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async NetUDP6(): globalThis.Promise<[__goscript_net_udp.NetUDP, $.GoError]> {
		const fs = this;
		const __goscriptReturn15 = await __goscript_net_udp.newNetUDP(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net/udp6"])))
		return [(__goscriptReturn15[0] as __goscript_net_udp.NetUDP), __goscriptReturn15[1]]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async NetUDP6Summary(): globalThis.Promise<[__goscript_net_udp.NetUDPSummary | $.VarRef<__goscript_net_udp.NetUDPSummary> | null, $.GoError]> {
		const fs = this;
		return __goscript_net_udp.newNetUDPSummary(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net/udp6"])))
	}

	public async NetUDPSummary(): globalThis.Promise<[__goscript_net_udp.NetUDPSummary | $.VarRef<__goscript_net_udp.NetUDPSummary> | null, $.GoError]> {
		const fs = this;
		return __goscript_net_udp.newNetUDPSummary(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net/udp"])))
	}

	public async NetUNIX(): globalThis.Promise<[__goscript_net_unix.NetUNIX | $.VarRef<__goscript_net_unix.NetUNIX> | null, $.GoError]> {
		const fs = this;
		return __goscript_net_unix.readNetUNIX(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net/unix"])))
	}

	public async NewProc(pid: number): globalThis.Promise<[__goscript_proc.Proc, $.GoError]> {
		const fs = this;
		return $.markAsStructValue($.cloneStructValue(fs)).Proc(pid)
	}

	public async NewStat(): globalThis.Promise<[__goscript_stat.Stat, $.GoError]> {
		const fs = this;
		return $.markAsStructValue($.cloneStructValue(fs)).Stat()
	}

	public async NewXfrmStat(): globalThis.Promise<[__goscript_xfrm.XfrmStat, $.GoError]> {
		const fs = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple19: any = await os.Open(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["net/xfrm_stat"])))
		let file: os.File | $.VarRef<os.File> | null = __goscriptTuple19[0]
		let err = __goscriptTuple19[1]
		if (err != null) {
			return [new __goscript_xfrm.XfrmStat(undefined, true), err]
		}
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Close())($.pointerValue<os.File>(file)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "os.(*File).Close-fm")
		__defer.defer(async () => { await __goscriptDeferCallee3() })

		let x: __goscript_xfrm.XfrmStat = new __goscript_xfrm.XfrmStat(undefined, true)
		let s: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner($.interfaceValue<io.Reader | null>(file, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))

		while (await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))) {
			let fields: $.Slice<string> = strings.Fields((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s)))

			if ($.sliceLen(fields) != 2) {
				return [new __goscript_xfrm.XfrmStat(undefined, true), fmt.Errorf("couldn't parse %q line %q", os.File.prototype.Name.call($.pointerValue<os.File>(file)), (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s)))]
			}

			let name = $.arrayIndex(fields!, 0)
			let [value, __goscriptShadow1] = strconv.Atoi($.arrayIndex(fields!, 1))
			if (__goscriptShadow1 != null) {
				return [new __goscript_xfrm.XfrmStat(undefined, true), __goscriptShadow1]
			}

			switch (name) {
				case "XfrmInError":
				{
					x.XfrmInError = value
					break
				}
				case "XfrmInBufferError":
				{
					x.XfrmInBufferError = value
					break
				}
				case "XfrmInHdrError":
				{
					x.XfrmInHdrError = value
					break
				}
				case "XfrmInNoStates":
				{
					x.XfrmInNoStates = value
					break
				}
				case "XfrmInStateProtoError":
				{
					x.XfrmInStateProtoError = value
					break
				}
				case "XfrmInStateModeError":
				{
					x.XfrmInStateModeError = value
					break
				}
				case "XfrmInStateSeqError":
				{
					x.XfrmInStateSeqError = value
					break
				}
				case "XfrmInStateExpired":
				{
					x.XfrmInStateExpired = value
					break
				}
				case "XfrmInStateInvalid":
				{
					x.XfrmInStateInvalid = value
					break
				}
				case "XfrmInTmplMismatch":
				{
					x.XfrmInTmplMismatch = value
					break
				}
				case "XfrmInNoPols":
				{
					x.XfrmInNoPols = value
					break
				}
				case "XfrmInPolBlock":
				{
					x.XfrmInPolBlock = value
					break
				}
				case "XfrmInPolError":
				{
					x.XfrmInPolError = value
					break
				}
				case "XfrmOutError":
				{
					x.XfrmOutError = value
					break
				}
				case "XfrmInStateMismatch":
				{
					x.XfrmInStateMismatch = value
					break
				}
				case "XfrmOutBundleGenError":
				{
					x.XfrmOutBundleGenError = value
					break
				}
				case "XfrmOutBundleCheckError":
				{
					x.XfrmOutBundleCheckError = value
					break
				}
				case "XfrmOutNoStates":
				{
					x.XfrmOutNoStates = value
					break
				}
				case "XfrmOutStateProtoError":
				{
					x.XfrmOutStateProtoError = value
					break
				}
				case "XfrmOutStateModeError":
				{
					x.XfrmOutStateModeError = value
					break
				}
				case "XfrmOutStateSeqError":
				{
					x.XfrmOutStateSeqError = value
					break
				}
				case "XfrmOutStateExpired":
				{
					x.XfrmOutStateExpired = value
					break
				}
				case "XfrmOutPolBlock":
				{
					x.XfrmOutPolBlock = value
					break
				}
				case "XfrmOutPolDead":
				{
					x.XfrmOutPolDead = value
					break
				}
				case "XfrmOutPolError":
				{
					x.XfrmOutPolError = value
					break
				}
				case "XfrmFwdHdrError":
				{
					x.XfrmFwdHdrError = value
					break
				}
				case "XfrmOutStateInvalid":
				{
					x.XfrmOutStateInvalid = value
					break
				}
				case "XfrmAcquireError":
				{
					x.XfrmAcquireError = value
					break
				}
			}
		}

		return [(x).clone(), (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Err() : bufio.Scanner.prototype.Err.call(s))]
	}

	public async PSIStatsForResource(resource: string): globalThis.Promise<[__goscript_proc_psi.PSIStats, $.GoError]> {
		const fs = this;
		let __goscriptTuple20: any = await util.ReadFileNoStat(fs2.FS_Path(fs.proc, $.arrayToSlice<string>([await fmt.Sprintf("%s/%s", "pressure", resource)])))
		let data: $.Slice<number> = __goscriptTuple20[0]
		let err = __goscriptTuple20[1]
		if (err != null) {
			return [new __goscript_proc_psi.PSIStats(undefined, true), fmt.Errorf("psi_stats: unavailable for %q: %w", resource, (err as any))]
		}

		return __goscript_proc_psi.parsePSIStats(resource, $.interfaceValue<io.Reader | null>(bytes.NewReader(data), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))
	}

	public async Proc(pid: number): globalThis.Promise<[__goscript_proc.Proc, $.GoError]> {
		const fs = this;
		{
			let [, err] = await os.Stat(fs2.FS_Path(fs.proc, $.arrayToSlice<string>([strconv.Itoa(pid)])))
			if (err != null) {
				return [new __goscript_proc.Proc(undefined, true), err]
			}
		}
		return [new __goscript_proc.Proc({PID: pid, fs: fs.proc}, true), null]
	}

	public async Schedstat(): globalThis.Promise<[__goscript_schedstat.Schedstat | $.VarRef<__goscript_schedstat.Schedstat> | null, $.GoError]> {
		const fs = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple21: any = await os.Open(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["schedstat"])))
		let file: os.File | $.VarRef<os.File> | null = __goscriptTuple21[0]
		let err = __goscriptTuple21[1]
		if (err != null) {
			return [null, err]
		}
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Close())($.pointerValue<os.File>(file)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "os.(*File).Close-fm")
		__defer.defer(async () => { await __goscriptDeferCallee4() })

		let stats: __goscript_schedstat.Schedstat | $.VarRef<__goscript_schedstat.Schedstat> | null = new __goscript_schedstat.Schedstat()
		let stats$: __goscript_schedstat.Schedstat = stats == null ? $.pointerTarget<__goscript_schedstat.Schedstat>(stats) : (stats as any).__isVarRef === true ? (stats as any).value : (stats as any).__goValue === undefined ? (stats as any) : $.pointerTarget<__goscript_schedstat.Schedstat>(stats)
		let scanner: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner($.interfaceValue<io.Reader | null>(file, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))

		while (await (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(scanner))) {
			let match: $.Slice<string> = await regexp.Regexp.prototype.FindStringSubmatch.call(__goscript_schedstat.cpuLineRE, (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(scanner)))
			if (match != null) {
				let cpu: __goscript_schedstat.SchedstatCPU | $.VarRef<__goscript_schedstat.SchedstatCPU> | null = new __goscript_schedstat.SchedstatCPU()
				let cpu$: __goscript_schedstat.SchedstatCPU = cpu == null ? $.pointerTarget<__goscript_schedstat.SchedstatCPU>(cpu) : (cpu as any).__isVarRef === true ? (cpu as any).value : (cpu as any).__goValue === undefined ? (cpu as any) : $.pointerTarget<__goscript_schedstat.SchedstatCPU>(cpu);
				;(cpu$ as __goscript_schedstat.SchedstatCPU).CPUNum = $.arrayIndex(match!, 1)

				let __goscriptTuple22: any = strconv.ParseUint($.arrayIndex(match!, 8), 10, 64);
				;(cpu$ as __goscript_schedstat.SchedstatCPU).RunningNanoseconds = __goscriptTuple22[0]
				err = __goscriptTuple22[1]
				if (err != null) {
					continue
				}

				let __goscriptTuple23: any = strconv.ParseUint($.arrayIndex(match!, 9), 10, 64);
				;(cpu$ as __goscript_schedstat.SchedstatCPU).WaitingNanoseconds = __goscriptTuple23[0]
				err = __goscriptTuple23[1]
				if (err != null) {
					continue
				}

				let __goscriptTuple24: any = strconv.ParseUint($.arrayIndex(match!, 10), 10, 64);
				;(cpu$ as __goscript_schedstat.SchedstatCPU).RunTimeslices = __goscriptTuple24[0]
				err = __goscriptTuple24[1]
				if (err != null) {
					continue
				}

				;(stats$ as __goscript_schedstat.Schedstat).CPUs = $.appendOne((stats$ as __goscript_schedstat.Schedstat).CPUs, cpu, $.appendZeros.nil)
			}
		}

		return [stats, null]
	}

	public async Self(): globalThis.Promise<[__goscript_proc.Proc, $.GoError]> {
		const fs = this;
		let [p, err] = await os.Readlink(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["self"])))
		if (err != null) {
			return [new __goscript_proc.Proc(undefined, true), err]
		}
		let __goscriptTuple25: any = strconv.Atoi(strings.Replace(p, fs.proc, "", -1))
		let pid = __goscriptTuple25[0]
		err = __goscriptTuple25[1]
		if (err != null) {
			return [new __goscript_proc.Proc(undefined, true), err]
		}
		return $.markAsStructValue($.cloneStructValue(fs)).Proc(pid)
	}

	public async SlabInfo(): globalThis.Promise<[__goscript_slab.SlabInfo, $.GoError]> {
		const fs = this;

		let __goscriptTuple26: any = await util.ReadFileNoStat(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["slabinfo"])))
		let data: $.Slice<number> = __goscriptTuple26[0]
		let err = __goscriptTuple26[1]
		if (err != null) {
			return [new __goscript_slab.SlabInfo(undefined, true), err]
		}

		return __goscript_slab.parseSlabInfo21(bytes.NewReader(data))
	}

	public async Stat(): globalThis.Promise<[__goscript_stat.Stat, $.GoError]> {
		const fs = this;
		let fileName = fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["stat"]))
		let __goscriptTuple27: any = await util.ReadFileNoStat(fileName)
		let data: $.Slice<number> = __goscriptTuple27[0]
		let err = __goscriptTuple27[1]
		if (err != null) {
			return [new __goscript_stat.Stat(undefined, true), err]
		}

		let stat = new __goscript_stat.Stat(undefined, true)

		let scanner: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner($.interfaceValue<io.Reader | null>(bytes.NewReader(data), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))
		while (await (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(scanner))) {
			let line = (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(scanner))
			let parts: $.Slice<string> = strings.Fields((scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(scanner)))

			if ($.sliceLen(parts) < 2) {
				continue
			}
			switch ((true as boolean)) {
				case $.stringEqual($.arrayIndex(parts!, 0), "btime"):
				{
					{
						let __goscriptTuple28: any = strconv.ParseUint($.arrayIndex(parts!, 1), 10, 64)
						stat.BootTime = __goscriptTuple28[0]
						err = __goscriptTuple28[1]
						if (err != null) {
							return [new __goscript_stat.Stat(undefined, true), fmt.Errorf("couldn't parse %q (btime): %w", $.arrayIndex(parts!, 1), (err as any))]
						}
					}
					break
				}
				case $.stringEqual($.arrayIndex(parts!, 0), "intr"):
				{
					{
						let __goscriptTuple29: any = strconv.ParseUint($.arrayIndex(parts!, 1), 10, 64)
						stat.IRQTotal = __goscriptTuple29[0]
						err = __goscriptTuple29[1]
						if (err != null) {
							return [new __goscript_stat.Stat(undefined, true), fmt.Errorf("couldn't parse %q (intr): %w", $.arrayIndex(parts!, 1), (err as any))]
						}
					}
					let numberedIRQs: $.Slice<string> = $.goSlice(parts, 2, undefined)
					stat.IRQ = $.makeSlice<bigint>($.sliceLen(numberedIRQs), undefined, "number")
					for (let __goscriptRangeTarget1 = numberedIRQs, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
						let count = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as string)
						{
							let __goscriptTuple30: any = strconv.ParseUint(count, 10, 64)
							$.sliceElems(stat.IRQ!)[$.sliceSlot(stat.IRQ!, i)] = __goscriptTuple30[0]
							err = __goscriptTuple30[1]
							if (err != null) {
								return [new __goscript_stat.Stat(undefined, true), fmt.Errorf("couldn't parse %q (intr%d): %w", count, $.basicInterfaceValue(i, "int"), (err as any))]
							}
						}
					}
					break
				}
				case $.stringEqual($.arrayIndex(parts!, 0), "ctxt"):
				{
					{
						let __goscriptTuple31: any = strconv.ParseUint($.arrayIndex(parts!, 1), 10, 64)
						stat.ContextSwitches = __goscriptTuple31[0]
						err = __goscriptTuple31[1]
						if (err != null) {
							return [new __goscript_stat.Stat(undefined, true), fmt.Errorf("couldn't parse %q (ctxt): %w", $.arrayIndex(parts!, 1), (err as any))]
						}
					}
					break
				}
				case $.stringEqual($.arrayIndex(parts!, 0), "processes"):
				{
					{
						let __goscriptTuple32: any = strconv.ParseUint($.arrayIndex(parts!, 1), 10, 64)
						stat.ProcessCreated = __goscriptTuple32[0]
						err = __goscriptTuple32[1]
						if (err != null) {
							return [new __goscript_stat.Stat(undefined, true), fmt.Errorf("couldn't parse %q (processes): %w", $.arrayIndex(parts!, 1), (err as any))]
						}
					}
					break
				}
				case $.stringEqual($.arrayIndex(parts!, 0), "procs_running"):
				{
					{
						let __goscriptTuple33: any = strconv.ParseUint($.arrayIndex(parts!, 1), 10, 64)
						stat.ProcessesRunning = __goscriptTuple33[0]
						err = __goscriptTuple33[1]
						if (err != null) {
							return [new __goscript_stat.Stat(undefined, true), fmt.Errorf("couldn't parse %q (procs_running): %w", $.arrayIndex(parts!, 1), (err as any))]
						}
					}
					break
				}
				case $.stringEqual($.arrayIndex(parts!, 0), "procs_blocked"):
				{
					{
						let __goscriptTuple34: any = strconv.ParseUint($.arrayIndex(parts!, 1), 10, 64)
						stat.ProcessesBlocked = __goscriptTuple34[0]
						err = __goscriptTuple34[1]
						if (err != null) {
							return [new __goscript_stat.Stat(undefined, true), fmt.Errorf("couldn't parse %q (procs_blocked): %w", $.arrayIndex(parts!, 1), (err as any))]
						}
					}
					break
				}
				case $.stringEqual($.arrayIndex(parts!, 0), "softirq"):
				{
					let [softIRQStats, total, __goscriptShadow2] = __goscript_stat.parseSoftIRQStat(line)
					if (__goscriptShadow2 != null) {
						return [new __goscript_stat.Stat(undefined, true), __goscriptShadow2]
					}
					stat.SoftIRQTotal = total
					$.assignStruct(stat.SoftIRQ, softIRQStats)
					break
				}
				case strings.HasPrefix($.arrayIndex(parts!, 0), "cpu"):
				{
					let [cpuStat, cpuID, __goscriptShadow3] = __goscript_stat.parseCPUStat(line)
					if (__goscriptShadow3 != null) {
						return [new __goscript_stat.Stat(undefined, true), __goscriptShadow3]
					}
					if (cpuID == -1n) {
						$.assignStruct(stat.CPUTotal, cpuStat)
					} else {
						while ($.int64($.sliceLen(stat.CPU)) <= cpuID) {
							stat.CPU = $.appendOne(stat.CPU, new __goscript_stat.CPUStat(undefined, true))
						}
						$.assignStruct($.sliceElems(stat.CPU!)[$.sliceSlot(stat.CPU!, globalThis.Number(cpuID))], cpuStat)
					}
					break
				}
			}
		}

		{
			let __goscriptShadow4 = (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Err() : bufio.Scanner.prototype.Err.call(scanner))
			if (__goscriptShadow4 != null) {
				return [new __goscript_stat.Stat(undefined, true), fmt.Errorf("couldn't parse %q: %w", fileName, (__goscriptShadow4 as any))]
			}
		}

		return [(stat).clone(), null]
	}

	public async Swaps(): globalThis.Promise<[$.Slice<__goscript_swaps.Swap | $.VarRef<__goscript_swaps.Swap> | null>, $.GoError]> {
		const fs = this;
		let __goscriptTuple35: any = await util.ReadFileNoStat(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["swaps"])))
		let data: $.Slice<number> = __goscriptTuple35[0]
		let err = __goscriptTuple35[1]
		if (err != null) {
			return [null, err]
		}
		return __goscript_swaps.parseSwaps(data)
	}

	public async VM(): globalThis.Promise<[__goscript_vm.VM | $.VarRef<__goscript_vm.VM> | null, $.GoError]> {
		const fs = this;
		let path = fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["sys/vm"]))
		let [file, err] = await os.Stat(path)
		if (err != null) {
			return [null, err]
		}
		if (!fs3.FileMode_IsDir((__goscriptAwait = (file !== null && (file as any).__isVarRef !== true && (file as any).__goValue === undefined ? (file as Exclude<fs3.FileInfo, null>) : $.pointerValue<Exclude<fs3.FileInfo, null>>(file)).Mode(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			return [null, fmt.Errorf("%s is not a directory", path)]
		}

		let __goscriptTuple36: any = await ioutil.ReadDir(path)
		let files: $.Slice<fs3.FileInfo | null> = __goscriptTuple36[0]
		err = __goscriptTuple36[1]
		if (err != null) {
			return [null, err]
		}

		let vm: $.VarRef<__goscript_vm.VM> = $.varRef(new __goscript_vm.VM(undefined, true))
		for (let __goscriptRangeTarget3 = files, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as fs3.FileInfo | null)
			if ((__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<fs3.FileInfo, null>) : $.pointerValue<Exclude<fs3.FileInfo, null>>(f)).IsDir(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				continue
			}

			let name = filepath.Join(path, (__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<fs3.FileInfo, null>) : $.pointerValue<Exclude<fs3.FileInfo, null>>(f)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))

			let [value, __goscriptShadow5] = util.SysReadFile(name)
			if (__goscriptShadow5 != null) {
				continue
			}
			let vp: util.ValueParser | $.VarRef<util.ValueParser> | null = util.NewValueParser(value)

			switch ((__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<fs3.FileInfo, null>) : $.pointerValue<Exclude<fs3.FileInfo, null>>(f)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case "admin_reserve_kbytes":
				{
					vm.value.AdminReserveKbytes = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "block_dump":
				{
					vm.value.BlockDump = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "compact_unevictable_allowed":
				{
					vm.value.CompactUnevictableAllowed = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "dirty_background_bytes":
				{
					vm.value.DirtyBackgroundBytes = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "dirty_background_ratio":
				{
					vm.value.DirtyBackgroundRatio = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "dirty_bytes":
				{
					vm.value.DirtyBytes = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "dirty_expire_centisecs":
				{
					vm.value.DirtyExpireCentisecs = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "dirty_ratio":
				{
					vm.value.DirtyRatio = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "dirtytime_expire_seconds":
				{
					vm.value.DirtytimeExpireSeconds = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "dirty_writeback_centisecs":
				{
					vm.value.DirtyWritebackCentisecs = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "drop_caches":
				{
					vm.value.DropCaches = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "extfrag_threshold":
				{
					vm.value.ExtfragThreshold = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "hugetlb_shm_group":
				{
					vm.value.HugetlbShmGroup = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "laptop_mode":
				{
					vm.value.LaptopMode = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "legacy_va_layout":
				{
					vm.value.LegacyVaLayout = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "lowmem_reserve_ratio":
				{
					let stringSlice: $.Slice<string> = strings.Fields(value)
					let pint64Slice: $.Slice<$.VarRef<bigint> | null> = $.makeSlice<$.VarRef<bigint> | null>(0, $.sliceLen(stringSlice))
					for (let __goscriptRangeTarget2 = stringSlice, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
						let value = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
						let __goscriptShadow6: util.ValueParser | $.VarRef<util.ValueParser> | null = util.NewValueParser(value)
						pint64Slice = $.appendOne(pint64Slice, (__goscriptShadow6 !== null && (__goscriptShadow6 as any).__isVarRef !== true && (__goscriptShadow6 as any).__goValue === undefined ? ((__goscriptShadow6 as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(__goscriptShadow6)), $.appendZeros.nil)
					}
					vm.value.LowmemReserveRatio = pint64Slice
					break
				}
				case "max_map_count":
				{
					vm.value.MaxMapCount = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "memory_failure_early_kill":
				{
					vm.value.MemoryFailureEarlyKill = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "memory_failure_recovery":
				{
					vm.value.MemoryFailureRecovery = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "min_free_kbytes":
				{
					vm.value.MinFreeKbytes = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "min_slab_ratio":
				{
					vm.value.MinSlabRatio = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "min_unmapped_ratio":
				{
					vm.value.MinUnmappedRatio = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "mmap_min_addr":
				{
					vm.value.MmapMinAddr = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_hugepages":
				{
					vm.value.NrHugepages = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_hugepages_mempolicy":
				{
					vm.value.NrHugepagesMempolicy = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "nr_overcommit_hugepages":
				{
					vm.value.NrOvercommitHugepages = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "numa_stat":
				{
					vm.value.NumaStat = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "numa_zonelist_order":
				{
					vm.value.NumaZonelistOrder = value
					break
				}
				case "oom_dump_tasks":
				{
					vm.value.OomDumpTasks = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "oom_kill_allocating_task":
				{
					vm.value.OomKillAllocatingTask = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "overcommit_kbytes":
				{
					vm.value.OvercommitKbytes = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "overcommit_memory":
				{
					vm.value.OvercommitMemory = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "overcommit_ratio":
				{
					vm.value.OvercommitRatio = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "page-cluster":
				{
					vm.value.PageCluster = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "panic_on_oom":
				{
					vm.value.PanicOnOom = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "percpu_pagelist_fraction":
				{
					vm.value.PercpuPagelistFraction = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "stat_interval":
				{
					vm.value.StatInterval = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "swappiness":
				{
					vm.value.Swappiness = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "user_reserve_kbytes":
				{
					vm.value.UserReserveKbytes = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "vfs_cache_pressure":
				{
					vm.value.VfsCachePressure = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "watermark_boost_factor":
				{
					vm.value.WatermarkBoostFactor = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "watermark_scale_factor":
				{
					vm.value.WatermarkScaleFactor = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
				case "zone_reclaim_mode":
				{
					vm.value.ZoneReclaimMode = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
					break
				}
			}
			{
				let __goscriptShadow7 = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).Err() : util.ValueParser.prototype.Err.call(vp))
				if (__goscriptShadow7 != null) {
					return [null, __goscriptShadow7]
				}
			}
		}

		return [vm, null]
	}

	public async Zoneinfo(): globalThis.Promise<[$.Slice<__goscript_zoneinfo.Zoneinfo>, $.GoError]> {
		const fs = this;
		let __goscriptTuple37: any = await ioutil.ReadFile(fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["zoneinfo"])))
		let data: $.Slice<number> = __goscriptTuple37[0]
		let err = __goscriptTuple37[1]
		if (err != null) {
			return [null, fmt.Errorf("error reading zoneinfo %q: %w", fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["zoneinfo"])), (err as any))]
		}
		let __goscriptTuple38: any = await __goscript_zoneinfo.parseZoneinfo(data)
		let zoneinfo: $.Slice<__goscript_zoneinfo.Zoneinfo> = __goscriptTuple38[0]
		err = __goscriptTuple38[1]
		if (err != null) {
			return [null, fmt.Errorf("error parsing zoneinfo %q: %w", fs2.FS_Path(fs.proc, $.arrayToSlice<string>(["zoneinfo"])), (err as any))]
		}
		return [zoneinfo, null]
	}

	static __typeInfo = $.registerStructType(
		"procfs.FS",
		() => new FS(),
		() => [$.methodSignature("AllProcs", [], [/* @__PURE__ */ $.sliceType("procfs.Proc", "procfs.Procs"), "error"]), $.methodSignature("BuddyInfo", [], [/* @__PURE__ */ $.sliceType("procfs.BuddyInfo"), "error"]), $.methodSignature("ConntrackStat", [], [/* @__PURE__ */ $.sliceType("procfs.ConntrackStatEntry"), "error"]), $.methodSignature("Crypto", [], [/* @__PURE__ */ $.sliceType("procfs.Crypto"), "error"]), $.methodSignature("Fscacheinfo", [], ["procfs.Fscacheinfo", "error"]), $.methodSignature("GatherARPEntries", [], [/* @__PURE__ */ $.sliceType("procfs.ARPEntry"), "error"]), $.methodSignature("IPVSBackendStatus", [], [/* @__PURE__ */ $.sliceType("procfs.IPVSBackendStatus"), "error"]), $.methodSignature("IPVSStats", [], ["procfs.IPVSStats", "error"]), $.methodSignature("KernelRandom", [], ["procfs.KernelRandom", "error"]), $.methodSignature("LoadAvg", [], [/* @__PURE__ */ $.pointerType("procfs.LoadAvg"), "error"]), $.methodSignature("MDStat", [], [/* @__PURE__ */ $.sliceType("procfs.MDStat"), "error"]), $.methodSignature("Meminfo", [], ["procfs.Meminfo", "error"]), $.methodSignature("NetDev", [], ["procfs.NetDev", "error"]), $.methodSignature("NetProtocols", [], ["procfs.NetProtocolStats", "error"]), $.methodSignature("NetSockstat", [], [/* @__PURE__ */ $.pointerType("procfs.NetSockstat"), "error"]), $.methodSignature("NetSockstat6", [], [/* @__PURE__ */ $.pointerType("procfs.NetSockstat"), "error"]), $.methodSignature("NetSoftnetStat", [], [/* @__PURE__ */ $.sliceType("procfs.SoftnetStat"), "error"]), $.methodSignature("NetTCP", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("procfs.netIPSocketLine"), "procfs.NetTCP"), "error"]), $.methodSignature("NetTCP6", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("procfs.netIPSocketLine"), "procfs.NetTCP"), "error"]), $.methodSignature("NetTCP6Summary", [], [/* @__PURE__ */ $.pointerType("procfs.NetTCPSummary"), "error"]), $.methodSignature("NetTCPSummary", [], [/* @__PURE__ */ $.pointerType("procfs.NetTCPSummary"), "error"]), $.methodSignature("NetUDP", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("procfs.netIPSocketLine"), "procfs.NetUDP"), "error"]), $.methodSignature("NetUDP6", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("procfs.netIPSocketLine"), "procfs.NetUDP"), "error"]), $.methodSignature("NetUDP6Summary", [], [/* @__PURE__ */ $.pointerType("procfs.NetUDPSummary"), "error"]), $.methodSignature("NetUDPSummary", [], [/* @__PURE__ */ $.pointerType("procfs.NetUDPSummary"), "error"]), $.methodSignature("NetUNIX", [], [/* @__PURE__ */ $.pointerType("procfs.NetUNIX"), "error"]), $.methodSignature("NewProc", [["pid", /* @__PURE__ */ $.basicType("int")]], ["procfs.Proc", "error"]), $.methodSignature("NewStat", [], ["procfs.Stat", "error"]), $.methodSignature("NewXfrmStat", [], ["procfs.XfrmStat", "error"]), $.methodSignature("PSIStatsForResource", [["resource", /* @__PURE__ */ $.basicType("string")]], ["procfs.PSIStats", "error"]), $.methodSignature("Proc", [["pid", /* @__PURE__ */ $.basicType("int")]], ["procfs.Proc", "error"]), $.methodSignature("Schedstat", [], [/* @__PURE__ */ $.pointerType("procfs.Schedstat"), "error"]), $.methodSignature("Self", [], ["procfs.Proc", "error"]), $.methodSignature("SlabInfo", [], ["procfs.SlabInfo", "error"]), $.methodSignature("Stat", [], ["procfs.Stat", "error"]), $.methodSignature("Swaps", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("procfs.Swap")), "error"]), $.methodSignature("VM", [], [/* @__PURE__ */ $.pointerType("procfs.VM"), "error"]), $.methodSignature("Zoneinfo", [], [/* @__PURE__ */ $.sliceType("procfs.Zoneinfo"), "error"])],
		FS,
		() => [/* @__PURE__ */ $.structField("proc", /* @__PURE__ */ $.basicType("string", "fs.FS"), [0], 0, false, { pkgPath: "github.com/prometheus/procfs" })]
	)
}

export const DefaultMountPoint: string = "/proc"

export async function NewDefaultFS(): globalThis.Promise<[FS, $.GoError]> {
	return NewFS("/proc")
}

export async function NewFS(mountPoint: string): globalThis.Promise<[FS, $.GoError]> {
	let __goscriptTuple39: any = await fs2.NewFS(mountPoint)
	let __goscriptShadow8 = __goscriptTuple39[0]
	let err = __goscriptTuple39[1]
	if (err != null) {
		return [new FS(undefined, true), err]
	}
	return [new FS({proc: __goscriptShadow8}, true), null]
}

var __goscriptAwait: any
