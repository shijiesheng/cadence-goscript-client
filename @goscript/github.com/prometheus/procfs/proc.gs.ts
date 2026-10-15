// Generated file based on proc.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as errors from "@goscript/errors/index.js"

import * as os from "@goscript/os/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as fs2 from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

import * as regexp from "@goscript/regexp/index.js"

import type * as io from "@goscript/io/index.js"

import type * as fs3 from "@goscript/io/fs/index.js"

import * as net from "@goscript/net/index.js"

import type * as __goscript_arp from "./arp.gs.ts"

import type * as __goscript_buddyinfo from "./buddyinfo.gs.ts"

import type * as __goscript_crypto from "./crypto.gs.ts"

import * as __goscript_fs from "./fs.gs.ts"

import type * as __goscript_fscache from "./fscache.gs.ts"

import type * as __goscript_ipvs from "./ipvs.gs.ts"

import type * as __goscript_kernel_random from "./kernel_random.gs.ts"

import type * as __goscript_loadavg from "./loadavg.gs.ts"

import type * as __goscript_mdstat from "./mdstat.gs.ts"

import type * as __goscript_meminfo from "./meminfo.gs.ts"

import * as __goscript_mountinfo from "./mountinfo.gs.ts"

import * as __goscript_mountstats from "./mountstats.gs.ts"

import type * as __goscript_net_conntrackstat from "./net_conntrackstat.gs.ts"

import * as __goscript_net_dev from "./net_dev.gs.ts"

import type * as __goscript_net_ip_socket from "./net_ip_socket.gs.ts"

import * as __goscript_net_protocols from "./net_protocols.gs.ts"

import * as __goscript_net_sockstat from "./net_sockstat.gs.ts"

import type * as __goscript_net_softnet from "./net_softnet.gs.ts"

import type * as __goscript_net_tcp from "./net_tcp.gs.ts"

import type * as __goscript_net_udp from "./net_udp.gs.ts"

import * as __goscript_net_unix from "./net_unix.gs.ts"

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

import type * as __goscript_swaps from "./swaps.gs.ts"

import type * as __goscript_vm from "./vm.gs.ts"

import type * as __goscript_xfrm from "./xfrm.gs.ts"

import type * as __goscript_zoneinfo from "./zoneinfo.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/errors/index.js"
import "@goscript/os/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "@goscript/github.com/prometheus/procfs/internal/util/index.js"
import "@goscript/regexp/index.js"
import "@goscript/net/index.js"
import "./fs.gs.ts"
import "./mountinfo.gs.ts"
import "./mountstats.gs.ts"
import "./net_dev.gs.ts"
import "./net_protocols.gs.ts"
import "./net_sockstat.gs.ts"
import "./net_unix.gs.ts"
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

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.Proc", "procfs.Procs"])

export type Procs = $.Slice<Proc>

$.registerNamedType("procfs.Procs", /* @__PURE__ */ $.sliceType("procfs.Proc"));

$.registerNamedValueType(
	"procfs.Procs",
	{Len: (receiver: any, ...args: any[]) => (Procs_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Procs_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Procs_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*procfs.Procs",
	{Len: (receiver: any, ...args: any[]) => (Procs_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Procs_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Procs_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class Proc {
	// The process ID.
	public get PID(): number {
		return this._fields.PID
	}

	public set PID(value: number) {
		this._fields.PID = value
	}

	public get fs(): fs2.FS {
		return this._fields.fs
	}

	public set fs(value: fs2.FS) {
		this._fields.fs = value
	}

	public _fields: {
		PID: number
		fs: fs2.FS
	}

	constructor(init?: Partial<{PID?: number, fs?: fs2.FS}>, __goscriptValue?: boolean) {
		this._fields = {
			PID: init?.PID ?? (0 as number),
			fs: init?.fs ?? ("" as fs2.FS)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Proc {
		return new Proc(this, true)
	}

	public __goscriptAssign(source: Proc): void {
		const target = this._fields
		const values = source._fields
		target.PID = values.PID
		target.fs = values.fs
	}

	public async Cgroups(): globalThis.Promise<[$.Slice<__goscript_proc_cgroup.Cgroup>, $.GoError]> {
		const p = this;
		let __goscriptTuple0: any = await util.ReadFileNoStat(await fmt.Sprintf("/proc/%d/cgroup", $.basicInterfaceValue(p.PID, "int")))
		let data: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return __goscript_proc_cgroup.parseCgroups(data)
	}

	public async CmdLine(): globalThis.Promise<[$.Slice<string>, $.GoError]> {
		const p = this;
		let __goscriptTuple1: any = await util.ReadFileNoStat(p.path($.arrayToSlice<string>(["cmdline"])))
		let data: $.Slice<number> = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}

		if ($.sliceLen(data) < 1) {
			return [$.arrayToSlice<string>([]), null]
		}

		return [strings.Split($.bytesToString(bytes.TrimRight(data, "\x00")), $.runeToString($.uint(0, 8))), null]
	}

	public async Comm(): globalThis.Promise<[string, $.GoError]> {
		const p = this;
		let __goscriptTuple2: any = await util.ReadFileNoStat(p.path($.arrayToSlice<string>(["comm"])))
		let data: $.Slice<number> = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return ["", err]
		}

		return [strings.TrimSpace($.bytesToString(data)), null]
	}

	public async Cwd(): globalThis.Promise<[string, $.GoError]> {
		const p = this;
		let [wd, err] = await os.Readlink(p.path($.arrayToSlice<string>(["cwd"])))
		if (os.IsNotExist($.pointerValueOrNil(err)!)) {
			return ["", null]
		}

		return [wd, err]
	}

	public async Environ(): globalThis.Promise<[$.Slice<string>, $.GoError]> {
		const p = this;
		let environments: $.Slice<string> = $.makeSlice<string>(0, undefined, "string")

		let __goscriptTuple3: any = await util.ReadFileNoStat($.markAsStructValue($.cloneStructValue(p)).path($.arrayToSlice<string>(["environ"])))
		let data: $.Slice<number> = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			return [environments, err]
		}
		// The process ID.
		environments = strings.Split($.bytesToString(data), "\x00")
		if ($.sliceLen(environments) > 0) {
			environments = $.goSlice(environments, undefined, $.sliceLen(environments) - 1)
		}

		return [environments, null]
	}

	public async Executable(): globalThis.Promise<[string, $.GoError]> {
		const p = this;
		let [exe, err] = await os.Readlink(p.path($.arrayToSlice<string>(["exe"])))
		if (os.IsNotExist($.pointerValueOrNil(err)!)) {
			return ["", null]
		}

		return [exe, err]
	}

	public async FDInfo(fd: string): globalThis.Promise<[__goscript_proc_fdinfo.ProcFDInfo | $.VarRef<__goscript_proc_fdinfo.ProcFDInfo> | null, $.GoError]> {
		const p = this;
		let __goscriptTuple4: any = await util.ReadFileNoStat($.markAsStructValue($.cloneStructValue(p)).path($.arrayToSlice<string>(["fdinfo", fd])))
		let data: $.Slice<number> = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}

		let text: string = ""
		let pos: string = ""
		let flags: string = ""
		let mntid: string = ""
		let inotify: $.Slice<__goscript_proc_fdinfo.InotifyInfo> = null! as $.Slice<__goscript_proc_fdinfo.InotifyInfo>

		let scanner: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner($.interfaceValue<io.Reader | null>(bytes.NewReader(data), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))
		while (await (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(scanner))) {
			text = (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(scanner))
			if (await regexp.Regexp.prototype.MatchString.call(__goscript_proc_fdinfo.rPos, text)) {
				pos = $.arrayIndex((await regexp.Regexp.prototype.FindStringSubmatch.call(__goscript_proc_fdinfo.rPos, text))!, 1)
			} else {
				if (await regexp.Regexp.prototype.MatchString.call(__goscript_proc_fdinfo.rFlags, text)) {
					flags = $.arrayIndex((await regexp.Regexp.prototype.FindStringSubmatch.call(__goscript_proc_fdinfo.rFlags, text))!, 1)
				} else {
					if (await regexp.Regexp.prototype.MatchString.call(__goscript_proc_fdinfo.rMntID, text)) {
						mntid = $.arrayIndex((await regexp.Regexp.prototype.FindStringSubmatch.call(__goscript_proc_fdinfo.rMntID, text))!, 1)
					} else {
						if (await regexp.Regexp.prototype.MatchString.call(__goscript_proc_fdinfo.rInotify, text)) {
							let __goscriptTuple5: any = await __goscript_proc_fdinfo.parseInotifyInfo(text)
							let newInotify: __goscript_proc_fdinfo.InotifyInfo | $.VarRef<__goscript_proc_fdinfo.InotifyInfo> | null = __goscriptTuple5[0]
							let __goscriptShadow0 = __goscriptTuple5[1]
							if (__goscriptShadow0 != null) {
								return [null, __goscriptShadow0]
							}
							inotify = $.appendOne(inotify, ($.pointerValue<__goscript_proc_fdinfo.InotifyInfo>(newInotify)).clone())
						}
					}
				}
			}
		}

		let i: __goscript_proc_fdinfo.ProcFDInfo | $.VarRef<__goscript_proc_fdinfo.ProcFDInfo> | null = new __goscript_proc_fdinfo.ProcFDInfo({FD: fd, Pos: pos, Flags: flags, MntID: mntid, InotifyInfos: inotify})

		return [i, null]
	}

	public async FileDescriptorTargets(): globalThis.Promise<[$.Slice<string>, $.GoError]> {
		const p = this;
		let __goscriptTuple6: any = await p.fileDescriptors()
		let names: $.Slice<string> = __goscriptTuple6[0]
		let err = __goscriptTuple6[1]
		if (err != null) {
			return [null, err]
		}

		let targets: $.Slice<string> = $.makeSlice<string>($.sliceLen(names), undefined, "string")

		for (let __goscriptRangeTarget0 = names, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(targets), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let name = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as string)
			let [target, __goscriptShadow1] = await os.Readlink(p.path($.arrayToSlice<string>(["fd", name])))
			if (__goscriptShadow1 == null) {
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = target
			}
		}

		return [targets, null]
	}

	public async FileDescriptors(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const p = this;
		let __goscriptTuple7: any = await p.fileDescriptors()
		let names: $.Slice<string> = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}

		let fds: $.Slice<number> = $.makeSlice<number>($.sliceLen(names), undefined, "number")
		for (let __goscriptRangeTarget1 = names, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow1 = $.sliceRange(fds), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let n = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as string)
			let [fd, __goscriptShadow2] = strconv.ParseInt(n, 10, 32)
			if (__goscriptShadow2 != null) {
				return [null, fmt.Errorf("could not parse fd %q: %w", n, (__goscriptShadow2 as any))]
			}
			;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = $.uint(fd, 64)
		}

		return [fds, null]
	}

	public async FileDescriptorsInfo(): globalThis.Promise<[__goscript_proc_fdinfo.ProcFDInfos, $.GoError]> {
		const p = this;
		let __goscriptTuple8: any = await p.fileDescriptors()
		let names: $.Slice<string> = __goscriptTuple8[0]
		let err = __goscriptTuple8[1]
		if (err != null) {
			return [(null as __goscript_proc_fdinfo.ProcFDInfos), err]
		}

		let fdinfos: __goscript_proc_fdinfo.ProcFDInfos = null! as __goscript_proc_fdinfo.ProcFDInfos

		for (let __goscriptRangeTarget2 = names, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let n = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
			let __goscriptTuple9: any = await p.FDInfo(n)
			let fdinfo: __goscript_proc_fdinfo.ProcFDInfo | $.VarRef<__goscript_proc_fdinfo.ProcFDInfo> | null = __goscriptTuple9[0]
			let __goscriptShadow3 = __goscriptTuple9[1]
			if (__goscriptShadow3 != null) {
				continue
			}
			fdinfos = ($.appendOne((fdinfos as __goscript_proc_fdinfo.ProcFDInfos), ($.pointerValue<__goscript_proc_fdinfo.ProcFDInfo>(fdinfo)).clone()) as __goscript_proc_fdinfo.ProcFDInfos)
		}

		return [(fdinfos as __goscript_proc_fdinfo.ProcFDInfos), null]
	}

	public async FileDescriptorsLen(): globalThis.Promise<[number, $.GoError]> {
		const p = this;
		let __goscriptTuple10: any = await p.fileDescriptors()
		let fds: $.Slice<string> = __goscriptTuple10[0]
		let err = __goscriptTuple10[1]
		if (err != null) {
			return [0, err]
		}

		return [$.sliceLen(fds), null]
	}

	public async IO(): globalThis.Promise<[__goscript_proc_io.ProcIO, $.GoError]> {
		const p = this;
		let pio = new __goscript_proc_io.ProcIO(undefined, true)

		let __goscriptTuple11: any = await util.ReadFileNoStat($.markAsStructValue($.cloneStructValue(p)).path($.arrayToSlice<string>(["io"])))
		let data: $.Slice<number> = __goscriptTuple11[0]
		let err = __goscriptTuple11[1]
		if (err != null) {
			return [(pio).clone(), err]
		}

		let ioFormat = $.concatString(($.concatString("rchar: %d\nwchar: %d\nsyscr: %d\nsyscw: %d\n", "read_bytes: %d\nwrite_bytes: %d\n")), "cancelled_write_bytes: %d\n")

		let __goscriptTuple12: any = fmt.Sscanf($.bytesToString(data), ioFormat, $.interfaceValue($.fieldRef(pio._fields, "RChar"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))), $.interfaceValue($.fieldRef(pio._fields, "WChar"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))), $.interfaceValue($.fieldRef(pio._fields, "SyscR"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))), $.interfaceValue($.fieldRef(pio._fields, "SyscW"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))), $.interfaceValue($.fieldRef(pio._fields, "ReadBytes"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))), $.interfaceValue($.fieldRef(pio._fields, "WriteBytes"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))), $.interfaceValue($.fieldRef(pio._fields, "CancelledWriteBytes"), "*int64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))))
		err = __goscriptTuple12[1]

		return [(pio).clone(), err]
	}

	public async Limits(): globalThis.Promise<[__goscript_proc_limits.ProcLimits, $.GoError]> {
		const p = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple13: any = await os.Open($.markAsStructValue($.cloneStructValue(p)).path($.arrayToSlice<string>(["limits"])))
		let f: os.File | $.VarRef<os.File> | null = __goscriptTuple13[0]
		let err = __goscriptTuple13[1]
		if (err != null) {
			return [new __goscript_proc_limits.ProcLimits(undefined, true), err]
		}
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Close())($.pointerValue<os.File>(f)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "os.(*File).Close-fm")
		__defer.defer(async () => { await __goscriptDeferCallee0() })

		let l: __goscript_proc_limits.ProcLimits = new __goscript_proc_limits.ProcLimits(undefined, true)
		let s: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner($.interfaceValue<io.Reader | null>(f, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))

		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))

		while (await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))) {

			let fields: $.Slice<string> = await regexp.Regexp.prototype.FindStringSubmatch.call(__goscript_proc_limits.limitsMatch, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s)))
			if ($.sliceLen(fields) != 4) {
				return [new __goscript_proc_limits.ProcLimits(undefined, true), fmt.Errorf("couldn't parse %q line %q", os.File.prototype.Name.call($.pointerValue<os.File>(f)), (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s)))]
			}

			switch ($.arrayIndex(fields!, 1)) {
				case "Max cpu time":
				{
					let __goscriptTuple14: any = __goscript_proc_limits.parseUint($.arrayIndex(fields!, 2))
					l.CPUTime = __goscriptTuple14[0]
					err = __goscriptTuple14[1]
					break
				}
				case "Max file size":
				{
					let __goscriptTuple15: any = __goscript_proc_limits.parseUint($.arrayIndex(fields!, 2))
					l.FileSize = __goscriptTuple15[0]
					err = __goscriptTuple15[1]
					break
				}
				case "Max data size":
				{
					let __goscriptTuple16: any = __goscript_proc_limits.parseUint($.arrayIndex(fields!, 2))
					l.DataSize = __goscriptTuple16[0]
					err = __goscriptTuple16[1]
					break
				}
				case "Max stack size":
				{
					let __goscriptTuple17: any = __goscript_proc_limits.parseUint($.arrayIndex(fields!, 2))
					l.StackSize = __goscriptTuple17[0]
					err = __goscriptTuple17[1]
					break
				}
				case "Max core file size":
				{
					let __goscriptTuple18: any = __goscript_proc_limits.parseUint($.arrayIndex(fields!, 2))
					l.CoreFileSize = __goscriptTuple18[0]
					err = __goscriptTuple18[1]
					break
				}
				case "Max resident set":
				{
					let __goscriptTuple19: any = __goscript_proc_limits.parseUint($.arrayIndex(fields!, 2))
					l.ResidentSet = __goscriptTuple19[0]
					err = __goscriptTuple19[1]
					break
				}
				case "Max processes":
				{
					let __goscriptTuple20: any = __goscript_proc_limits.parseUint($.arrayIndex(fields!, 2))
					l.Processes = __goscriptTuple20[0]
					err = __goscriptTuple20[1]
					break
				}
				case "Max open files":
				{
					let __goscriptTuple21: any = __goscript_proc_limits.parseUint($.arrayIndex(fields!, 2))
					l.OpenFiles = __goscriptTuple21[0]
					err = __goscriptTuple21[1]
					break
				}
				case "Max locked memory":
				{
					let __goscriptTuple22: any = __goscript_proc_limits.parseUint($.arrayIndex(fields!, 2))
					l.LockedMemory = __goscriptTuple22[0]
					err = __goscriptTuple22[1]
					break
				}
				case "Max address space":
				{
					let __goscriptTuple23: any = __goscript_proc_limits.parseUint($.arrayIndex(fields!, 2))
					l.AddressSpace = __goscriptTuple23[0]
					err = __goscriptTuple23[1]
					break
				}
				case "Max file locks":
				{
					let __goscriptTuple24: any = __goscript_proc_limits.parseUint($.arrayIndex(fields!, 2))
					l.FileLocks = __goscriptTuple24[0]
					err = __goscriptTuple24[1]
					break
				}
				case "Max pending signals":
				{
					let __goscriptTuple25: any = __goscript_proc_limits.parseUint($.arrayIndex(fields!, 2))
					l.PendingSignals = __goscriptTuple25[0]
					err = __goscriptTuple25[1]
					break
				}
				case "Max msgqueue size":
				{
					let __goscriptTuple26: any = __goscript_proc_limits.parseUint($.arrayIndex(fields!, 2))
					l.MsqqueueSize = __goscriptTuple26[0]
					err = __goscriptTuple26[1]
					break
				}
				case "Max nice priority":
				{
					let __goscriptTuple27: any = __goscript_proc_limits.parseUint($.arrayIndex(fields!, 2))
					l.NicePriority = __goscriptTuple27[0]
					err = __goscriptTuple27[1]
					break
				}
				case "Max realtime priority":
				{
					let __goscriptTuple28: any = __goscript_proc_limits.parseUint($.arrayIndex(fields!, 2))
					l.RealtimePriority = __goscriptTuple28[0]
					err = __goscriptTuple28[1]
					break
				}
				case "Max realtime timeout":
				{
					let __goscriptTuple29: any = __goscript_proc_limits.parseUint($.arrayIndex(fields!, 2))
					l.RealtimeTimeout = __goscriptTuple29[0]
					err = __goscriptTuple29[1]
					break
				}
			}
			if (err != null) {
				return [new __goscript_proc_limits.ProcLimits(undefined, true), err]
			}
		}

		return [(l).clone(), (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Err() : bufio.Scanner.prototype.Err.call(s))]
	}

	public async MountInfo(): globalThis.Promise<[$.Slice<__goscript_mountinfo.MountInfo | $.VarRef<__goscript_mountinfo.MountInfo> | null>, $.GoError]> {
		const p = this;
		let __goscriptTuple30: any = await util.ReadFileNoStat(p.path($.arrayToSlice<string>(["mountinfo"])))
		let data: $.Slice<number> = __goscriptTuple30[0]
		let err = __goscriptTuple30[1]
		if (err != null) {
			return [null, err]
		}
		return __goscript_mountinfo.parseMountInfo(data)
	}

	public async MountStats(): globalThis.Promise<[$.Slice<__goscript_mountstats.Mount | $.VarRef<__goscript_mountstats.Mount> | null>, $.GoError]> {
		const p = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple31: any = await os.Open(p.path($.arrayToSlice<string>(["mountstats"])))
		let f: os.File | $.VarRef<os.File> | null = __goscriptTuple31[0]
		let err = __goscriptTuple31[1]
		if (err != null) {
			return [null, err]
		}
		__defer.defer(async () => { await os.File.prototype.Close.call($.pointerValue<os.File>(f)) })

		return await __goscript_mountstats.parseMountStats($.interfaceValue<io.Reader | null>(f, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))
	}

	public async Namespaces(): globalThis.Promise<[__goscript_proc_ns.Namespaces, $.GoError]> {
		const p = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple32: any = await os.Open($.markAsStructValue($.cloneStructValue(p)).path($.arrayToSlice<string>(["ns"])))
		let d: os.File | $.VarRef<os.File> | null = __goscriptTuple32[0]
		let err = __goscriptTuple32[1]
		if (err != null) {
			return [null, err]
		}
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Close())($.pointerValue<os.File>(d)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "os.(*File).Close-fm")
		__defer.defer(async () => { await __goscriptDeferCallee1() })

		let __goscriptTuple33: any = await os.File.prototype.Readdirnames.call($.pointerValue<os.File>(d), -1)
		let names: $.Slice<string> = __goscriptTuple33[0]
		err = __goscriptTuple33[1]
		if (err != null) {
			return [null, fmt.Errorf("failed to read contents of ns dir: %w", (err as any))]
		}

		let ns: __goscript_proc_ns.Namespaces = $.makeMap<string, __goscript_proc_ns.Namespace>()
		for (let __goscriptRangeTarget3 = names, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let name = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
			let [target, __goscriptShadow4] = await os.Readlink($.markAsStructValue($.cloneStructValue(p)).path($.arrayToSlice<string>(["ns", name])))
			if (__goscriptShadow4 != null) {
				return [null, __goscriptShadow4]
			}
			// NewProc returns a process for the given pid under /proc.
			let fields: $.Slice<string> = strings.SplitN(target, ":", 2)
			if ($.sliceLen(fields) != 2) {
				return [null, fmt.Errorf("failed to parse namespace type and inode from %q", target)]
			}

			let typ = $.arrayIndex(fields!, 0)
			let __goscriptTuple34: any = strconv.ParseUint(strings.Trim($.arrayIndex(fields!, 1), "[]"), 10, 32)
			let inode = __goscriptTuple34[0]
			__goscriptShadow4 = __goscriptTuple34[1]
			if (__goscriptShadow4 != null) {
				return [null, fmt.Errorf("failed to parse inode from %q: %w", $.arrayIndex(fields!, 1), (__goscriptShadow4 as any))]
			}

			$.mapSet(ns, name, new __goscript_proc_ns.Namespace({Type: typ, Inode: $.uint(inode, 32)}, true))
		}

		return [ns, null]
	}

	public async NetDev(): globalThis.Promise<[__goscript_net_dev.NetDev, $.GoError]> {
		const p = this;
		return __goscript_net_dev.newNetDev($.markAsStructValue($.cloneStructValue(p)).path($.arrayToSlice<string>(["net/dev"])))
	}

	public async NewLimits(): globalThis.Promise<[__goscript_proc_limits.ProcLimits, $.GoError]> {
		const p = this;
		return $.markAsStructValue($.cloneStructValue(p)).Limits()
	}

	public async NewStat(): globalThis.Promise<[__goscript_proc_stat.ProcStat, $.GoError]> {
		const p = this;
		return $.markAsStructValue($.cloneStructValue(p)).Stat()
	}

	public async NewStatus(): globalThis.Promise<[__goscript_proc_status.ProcStatus, $.GoError]> {
		const p = this;
		let __goscriptTuple35: any = await util.ReadFileNoStat($.markAsStructValue($.cloneStructValue(p)).path($.arrayToSlice<string>(["status"])))
		let data: $.Slice<number> = __goscriptTuple35[0]
		let err = __goscriptTuple35[1]
		if (err != null) {
			return [new __goscript_proc_status.ProcStatus(undefined, true), err]
		}

		let s = $.varRef(new __goscript_proc_status.ProcStatus({PID: p.PID}, true))

		let lines: $.Slice<string> = strings.Split($.bytesToString(data), "\n")
		for (let __goscriptRangeTarget4 = lines, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let line = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as string)
			if (!bytes.Contains($.stringToBytes(line), new Uint8Array([58]))) {
				continue
			}

			let kv: $.Slice<string> = strings.SplitN(line, ":", 2)

			// AllProcs returns a list of all currently available processes.
			let k = strings.TrimSpace($.arrayIndex(kv!, 0))
			let v = strings.TrimSpace($.arrayIndex(kv!, 1))

			v = $.bytesToString(bytes.Trim($.stringToBytes(v), " kB"))

			let [vKBytes, ] = strconv.ParseUint(v, 10, 64)

			let vBytes = $.uint64Mul(vKBytes, 1024n)

			s.value.fillStatus(k, v, vKBytes, vBytes)
		}

		return [(s.value).clone(), null]
	}

	public async ProcSMapsRollup(): globalThis.Promise<[__goscript_proc_smaps.ProcSMapsRollup, $.GoError]> {
		const p = this;
		let __goscriptTuple36: any = await util.ReadFileNoStat($.markAsStructValue($.cloneStructValue(p)).path($.arrayToSlice<string>(["smaps_rollup"])))
		let data: $.Slice<number> = __goscriptTuple36[0]
		let err = __goscriptTuple36[1]
		if ((err != null) && os.IsNotExist($.pointerValueOrNil(err)!)) {
			return $.markAsStructValue($.cloneStructValue(p)).procSMapsRollupManual()
		}
		if (err != null) {
			return [new __goscript_proc_smaps.ProcSMapsRollup(undefined, true), err]
		}

		let lines: $.Slice<string> = strings.Split($.bytesToString(data), "\n")
		let smaps = $.varRef(new __goscript_proc_smaps.ProcSMapsRollup(undefined, true))

		lines = $.goSlice(lines, 1, undefined)
		for (let __goscriptRangeTarget5 = lines, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let line = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as string)
			if ($.stringEqual(line, "")) {
				continue
			}

			{
				let __goscriptShadow5 = await smaps.value.parseLine(line)
				if (__goscriptShadow5 != null) {
					return [new __goscript_proc_smaps.ProcSMapsRollup(undefined, true), __goscriptShadow5]
				}
			}
		}

		return [(smaps.value).clone(), null]
	}

	public async RootDir(): globalThis.Promise<[string, $.GoError]> {
		const p = this;
		let [rdir, err] = await os.Readlink(p.path($.arrayToSlice<string>(["root"])))
		if (os.IsNotExist($.pointerValueOrNil(err)!)) {
			return ["", null]
		}

		return [rdir, err]
	}

	public async Schedstat(): globalThis.Promise<[__goscript_schedstat.ProcSchedstat, $.GoError]> {
		const p = this;
		let __goscriptTuple37: any = await ioutil.ReadFile(p.path($.arrayToSlice<string>(["schedstat"])))
		let contents: $.Slice<number> = __goscriptTuple37[0]
		let err = __goscriptTuple37[1]
		if (err != null) {
			return [new __goscript_schedstat.ProcSchedstat(undefined, true), err]
		}
		return __goscript_schedstat.parseProcSchedstat($.bytesToString(contents))
	}

	public async Stat(): globalThis.Promise<[__goscript_proc_stat.ProcStat, $.GoError]> {
		const p = this;
		let __goscriptTuple38: any = await util.ReadFileNoStat($.markAsStructValue($.cloneStructValue(p)).path($.arrayToSlice<string>(["stat"])))
		let data: $.Slice<number> = __goscriptTuple38[0]
		let err = __goscriptTuple38[1]
		if (err != null) {
			return [new __goscript_proc_stat.ProcStat(undefined, true), err]
		}

		let ignore: $.VarRef<number> = $.varRef(0)
		let s: __goscript_proc_stat.ProcStat = new __goscript_proc_stat.ProcStat({PID: p.PID, proc: p.fs}, true)
		let l: number = bytes.Index(data, new Uint8Array([40]))
		let r: number = bytes.LastIndex(data, new Uint8Array([41]))

		if ((l < 0) || (r < 0)) {
			return [new __goscript_proc_stat.ProcStat(undefined, true), fmt.Errorf("unexpected format, couldn't extract comm %q", $.interfaceValue(data, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))]
		}

		s.Comm = $.bytesToString($.goSlice(data, l + 1, r))
		let __goscriptTuple39: any = fmt.Fscan($.pointerValueOrNil($.interfaceValue<io.Reader | null>(bytes.NewBuffer($.goSlice(data, r + 2, undefined)), "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, $.interfaceValue($.fieldRef(s._fields, "State"), "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))), $.interfaceValue($.fieldRef(s._fields, "PPID"), "*int", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))), $.interfaceValue($.fieldRef(s._fields, "PGRP"), "*int", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))), $.interfaceValue($.fieldRef(s._fields, "Session"), "*int", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))), $.interfaceValue($.fieldRef(s._fields, "TTY"), "*int", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))), $.interfaceValue($.fieldRef(s._fields, "TPGID"), "*int", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))), $.interfaceValue($.fieldRef(s._fields, "Flags"), "*uint", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))), $.interfaceValue($.fieldRef(s._fields, "MinFlt"), "*uint", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))), $.interfaceValue($.fieldRef(s._fields, "CMinFlt"), "*uint", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))), $.interfaceValue($.fieldRef(s._fields, "MajFlt"), "*uint", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))), $.interfaceValue($.fieldRef(s._fields, "CMajFlt"), "*uint", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))), $.interfaceValue($.fieldRef(s._fields, "UTime"), "*uint", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))), $.interfaceValue($.fieldRef(s._fields, "STime"), "*uint", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))), $.interfaceValue($.fieldRef(s._fields, "CUTime"), "*uint", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))), $.interfaceValue($.fieldRef(s._fields, "CSTime"), "*uint", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))), $.interfaceValue($.fieldRef(s._fields, "Priority"), "*int", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))), $.interfaceValue($.fieldRef(s._fields, "Nice"), "*int", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))), $.interfaceValue($.fieldRef(s._fields, "NumThreads"), "*int", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))), $.interfaceValue(ignore, "*int", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))), $.interfaceValue($.fieldRef(s._fields, "Starttime"), "*uint64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))), $.interfaceValue($.fieldRef(s._fields, "VSize"), "*uint", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))), $.interfaceValue($.fieldRef(s._fields, "RSS"), "*int", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))))
		err = __goscriptTuple39[1]
		if (err != null) {
			return [new __goscript_proc_stat.ProcStat(undefined, true), err]
		}

		return [(s).clone(), null]
	}

	public async Wchan(): globalThis.Promise<[string, $.GoError]> {
		const p = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple40: any = await os.Open(p.path($.arrayToSlice<string>(["wchan"])))
		let f: os.File | $.VarRef<os.File> | null = __goscriptTuple40[0]
		let err = __goscriptTuple40[1]
		if (err != null) {
			return ["", err]
		}
		__defer.defer(async () => { await os.File.prototype.Close.call($.pointerValue<os.File>(f)) })

		let __goscriptTuple41: any = await ioutil.ReadAll($.interfaceValue<io.Reader | null>(f, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))
		let data: $.Slice<number> = __goscriptTuple41[0]
		err = __goscriptTuple41[1]
		if (err != null) {
			return ["", err]
		}

		let wchan = $.bytesToString(data)
		if (($.stringEqual(wchan, "")) || ($.stringEqual(wchan, "0"))) {
			return ["", null]
		}

		return [wchan, null]
	}

	public async fileDescriptors(): globalThis.Promise<[$.Slice<string>, $.GoError]> {
		const p = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple42: any = await os.Open(p.path($.arrayToSlice<string>(["fd"])))
		let d: os.File | $.VarRef<os.File> | null = __goscriptTuple42[0]
		let err = __goscriptTuple42[1]
		if (err != null) {
			return [null, err]
		}
		__defer.defer(async () => { await os.File.prototype.Close.call($.pointerValue<os.File>(d)) })

		let __goscriptTuple43: any = await os.File.prototype.Readdirnames.call($.pointerValue<os.File>(d), -1)
		let names: $.Slice<string> = __goscriptTuple43[0]
		err = __goscriptTuple43[1]
		if (err != null) {
			return [null, fmt.Errorf("could not read %q: %w", os.File.prototype.Name.call($.pointerValue<os.File>(d)), (err as any))]
		}

		return [names, null]
	}

	public path(pa: $.Slice<string>): string {
		const p = this;
		return fs2.FS_Path(p.fs, $.appendSlice($.arrayToSlice<string>([strconv.Itoa(p.PID)]), pa))
	}

	public async procSMapsRollupManual(): globalThis.Promise<[__goscript_proc_smaps.ProcSMapsRollup, $.GoError]> {
		const p = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple44: any = await os.Open($.markAsStructValue($.cloneStructValue(p)).path($.arrayToSlice<string>(["smaps"])))
		let file: os.File | $.VarRef<os.File> | null = __goscriptTuple44[0]
		let err = __goscriptTuple44[1]
		if (err != null) {
			return [new __goscript_proc_smaps.ProcSMapsRollup(undefined, true), err]
		}
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Close())($.pointerValue<os.File>(file)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "os.(*File).Close-fm")
		__defer.defer(async () => { await __goscriptDeferCallee2() })

		let smaps = $.varRef(new __goscript_proc_smaps.ProcSMapsRollup(undefined, true))
		let scan: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner($.interfaceValue<io.Reader | null>(file, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))

		while (await (scan !== null && (scan as any).__isVarRef !== true && (scan as any).__goValue === undefined ? ((scan as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(scan))) {
			let line = (scan !== null && (scan as any).__isVarRef !== true && (scan as any).__goValue === undefined ? ((scan as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(scan))

			if (await regexp.Regexp.prototype.MatchString.call(__goscript_proc_smaps.procSMapsHeaderLine, line)) {
				continue
			}

			{
				let __goscriptShadow6 = await smaps.value.parseLine(line)
				if (__goscriptShadow6 != null) {
					return [new __goscript_proc_smaps.ProcSMapsRollup(undefined, true), __goscriptShadow6]
				}
			}
		}

		return [(smaps.value).clone(), null]
	}

	static __typeInfo = $.registerStructType(
		"procfs.Proc",
		() => new Proc(),
		() => [$.methodSignature("Cgroups", [], [/* @__PURE__ */ $.sliceType("procfs.Cgroup"), "error"]), $.methodSignature("CmdLine", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), "error"]), $.methodSignature("Comm", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Cwd", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Environ", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), "error"]), $.methodSignature("Executable", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("FDInfo", [["fd", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("procfs.ProcFDInfo"), "error"]), $.methodSignature("FileDescriptorTargets", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), "error"]), $.methodSignature("FileDescriptors", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr")), "error"]), $.methodSignature("FileDescriptorsInfo", [], [/* @__PURE__ */ $.sliceType("procfs.ProcFDInfo", "procfs.ProcFDInfos"), "error"]), $.methodSignature("FileDescriptorsLen", [], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("IO", [], ["procfs.ProcIO", "error"]), $.methodSignature("Limits", [], ["procfs.ProcLimits", "error"]), $.methodSignature("MountInfo", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("procfs.MountInfo")), "error"]), $.methodSignature("MountStats", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("procfs.Mount")), "error"]), $.methodSignature("Namespaces", [], ["procfs.Namespaces", "error"]), $.methodSignature("NetDev", [], ["procfs.NetDev", "error"]), $.methodSignature("NewLimits", [], ["procfs.ProcLimits", "error"]), $.methodSignature("NewStat", [], ["procfs.ProcStat", "error"]), $.methodSignature("NewStatus", [], ["procfs.ProcStatus", "error"]), $.methodSignature("ProcSMapsRollup", [], ["procfs.ProcSMapsRollup", "error"]), $.methodSignature("RootDir", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Schedstat", [], ["procfs.ProcSchedstat", "error"]), $.methodSignature("Stat", [], ["procfs.ProcStat", "error"]), $.methodSignature("Wchan", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("fileDescriptors", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), "error"]), $.methodSignature("path", [["pa", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("procSMapsRollupManual", [], ["procfs.ProcSMapsRollup", "error"])],
		Proc,
		() => [/* @__PURE__ */ $.structField("PID", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("fs", /* @__PURE__ */ $.basicType("string", "fs.FS"), [1], 8, false, { pkgPath: "github.com/prometheus/procfs" })]
	)
}

export function Procs_Len(p: Procs): number {
	return $.sliceLen((p as Procs))
}

export function Procs_Swap(p: Procs, i: number, j: number): void {
	let __goscriptAssign0_0: Proc = ($.arrayIndex(p!, j)).clone()
	let __goscriptAssign0_1: Proc = ($.arrayIndex(p!, i)).clone()
	$.assignStruct($.sliceElems(p!)[$.sliceSlot(p!, i)], __goscriptAssign0_0)
	$.assignStruct($.sliceElems(p!)[$.sliceSlot(p!, j)], __goscriptAssign0_1)
}

export function Procs_Less(p: Procs, i: number, j: number): boolean {
	return $.arrayIndex(p!, i).PID < $.arrayIndex(p!, j).PID
}

export async function Self(): globalThis.Promise<[Proc, $.GoError]> {
	let [__goscriptShadow7, err] = await __goscript_fs.NewFS("/proc")
	if (err != null) {
		return [new Proc(undefined, true), err]
	}
	return __goscriptShadow7.Self()
}

export async function NewProc(pid: number): globalThis.Promise<[Proc, $.GoError]> {
	let [__goscriptShadow8, err] = await __goscript_fs.NewFS("/proc")
	if (err != null) {
		return [new Proc(undefined, true), err]
	}
	return __goscriptShadow8.Proc(pid)
}

export async function AllProcs(): globalThis.Promise<[Procs, $.GoError]> {
	let [__goscriptShadow9, err] = await __goscript_fs.NewFS("/proc")
	if (err != null) {
		return [($.arrayToSlice<Proc>([]) as Procs), err]
	}
	const __goscriptReturn10 = await __goscriptShadow9.AllProcs()
	return [(__goscriptReturn10[0] as Procs), __goscriptReturn10[1]]
	throw new globalThis.Error("goscript: unreachable return")
}
