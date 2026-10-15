// Generated file based on net_unix.go
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
import "./proc_fdinfo.gs.ts"
import "./proc_psi.gs.ts"
import "./schedstat.gs.ts"
import "./slab.gs.ts"
import "./stat.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.NetUNIXType", "procfs.NetUNIXFlags", "procfs.NetUNIXState", "procfs.NetUNIXLine", "procfs.NetUNIX"])

export type NetUNIXType = bigint

$.registerNamedValueType(
	"procfs.NetUNIXType",
	{String: (receiver: any, ...args: any[]) => (NetUNIXType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*procfs.NetUNIXType",
	{String: (receiver: any, ...args: any[]) => (NetUNIXType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type NetUNIXFlags = bigint

$.registerNamedValueType(
	"procfs.NetUNIXFlags",
	{String: (receiver: any, ...args: any[]) => (NetUNIXFlags_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*procfs.NetUNIXFlags",
	{String: (receiver: any, ...args: any[]) => (NetUNIXFlags_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type NetUNIXState = bigint

$.registerNamedValueType(
	"procfs.NetUNIXState",
	{String: (receiver: any, ...args: any[]) => (NetUNIXState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*procfs.NetUNIXState",
	{String: (receiver: any, ...args: any[]) => (NetUNIXState_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class NetUNIXLine {
	public get KernelPtr(): string {
		return this._fields.KernelPtr
	}

	public set KernelPtr(value: string) {
		this._fields.KernelPtr = value
	}

	public get RefCount(): bigint {
		return this._fields.RefCount
	}

	public set RefCount(value: bigint) {
		this._fields.RefCount = value
	}

	public get Protocol(): bigint {
		return this._fields.Protocol
	}

	public set Protocol(value: bigint) {
		this._fields.Protocol = value
	}

	public get Flags(): NetUNIXFlags {
		return this._fields.Flags
	}

	public set Flags(value: NetUNIXFlags) {
		this._fields.Flags = value
	}

	public get Type(): NetUNIXType {
		return this._fields.Type
	}

	public set Type(value: NetUNIXType) {
		this._fields.Type = value
	}

	public get State(): NetUNIXState {
		return this._fields.State
	}

	public set State(value: NetUNIXState) {
		this._fields.State = value
	}

	public get Inode(): bigint {
		return this._fields.Inode
	}

	public set Inode(value: bigint) {
		this._fields.Inode = value
	}

	public get Path(): string {
		return this._fields.Path
	}

	public set Path(value: string) {
		this._fields.Path = value
	}

	public _fields: {
		KernelPtr: string
		RefCount: bigint
		Protocol: bigint
		Flags: NetUNIXFlags
		Type: NetUNIXType
		State: NetUNIXState
		Inode: bigint
		Path: string
	}

	constructor(init?: Partial<{KernelPtr?: string, RefCount?: bigint, Protocol?: bigint, Flags?: NetUNIXFlags, Type?: NetUNIXType, State?: NetUNIXState, Inode?: bigint, Path?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			KernelPtr: init?.KernelPtr ?? ("" as string),
			RefCount: init?.RefCount ?? (0n as bigint),
			Protocol: init?.Protocol ?? (0n as bigint),
			Flags: init?.Flags ?? (0n as NetUNIXFlags),
			Type: init?.Type ?? (0n as NetUNIXType),
			State: init?.State ?? (0n as NetUNIXState),
			Inode: init?.Inode ?? (0n as bigint),
			Path: init?.Path ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NetUNIXLine {
		return new NetUNIXLine(this, true)
	}

	public __goscriptAssign(source: NetUNIXLine): void {
		const target = this._fields
		const values = source._fields
		target.KernelPtr = values.KernelPtr
		target.RefCount = values.RefCount
		target.Protocol = values.Protocol
		target.Flags = values.Flags
		target.Type = values.Type
		target.State = values.State
		target.Inode = values.Inode
		target.Path = values.Path
	}

	static __typeInfo = $.registerStructType(
		"procfs.NetUNIXLine",
		() => new NetUNIXLine(),
		() => [],
		NetUNIXLine,
		() => [/* @__PURE__ */ $.structField("KernelPtr", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("RefCount", /* @__PURE__ */ $.basicType("uint64"), [1], 16, true), /* @__PURE__ */ $.structField("Protocol", /* @__PURE__ */ $.basicType("uint64"), [2], 24, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint64", "procfs.NetUNIXFlags"), [3], 32, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("uint64", "procfs.NetUNIXType"), [4], 40, true), /* @__PURE__ */ $.structField("State", /* @__PURE__ */ $.basicType("uint64", "procfs.NetUNIXState"), [5], 48, true), /* @__PURE__ */ $.structField("Inode", /* @__PURE__ */ $.basicType("uint64"), [6], 56, true), /* @__PURE__ */ $.structField("Path", /* @__PURE__ */ $.basicType("string"), [7], 64, true)]
	)
}

export class NetUNIX {
	public get Rows(): $.Slice<NetUNIXLine | $.VarRef<NetUNIXLine> | null> {
		return this._fields.Rows
	}

	public set Rows(value: $.Slice<NetUNIXLine | $.VarRef<NetUNIXLine> | null>) {
		this._fields.Rows = value
	}

	public _fields: {
		Rows: $.Slice<NetUNIXLine | $.VarRef<NetUNIXLine> | null>
	}

	constructor(init?: Partial<{Rows?: $.Slice<NetUNIXLine | $.VarRef<NetUNIXLine> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Rows: init?.Rows ?? (null! as $.Slice<NetUNIXLine | $.VarRef<NetUNIXLine> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NetUNIX {
		return new NetUNIX(this, true)
	}

	public __goscriptAssign(source: NetUNIX): void {
		const target = this._fields
		const values = source._fields
		target.Rows = values.Rows
	}

	public parseFlags(s: string): [NetUNIXFlags, $.GoError] {
		const u = this;
		let [flags, err] = strconv.ParseUint(s, 16, 32)
		if (err != null) {
			return [0n, err]
		}

		return [$.uint64(flags), null]
	}

	public parseInode(s: string): [bigint, $.GoError] {
		const u = this;
		return strconv.ParseUint(s, 10, 64)
	}

	public parseLine(line: string, hasInode: boolean, min: number): [NetUNIXLine | $.VarRef<NetUNIXLine> | null, $.GoError] {
		const u: NetUNIX | $.VarRef<NetUNIX> | null = this;
		let fields: $.Slice<string> = strings.Fields(line)

		let l = $.sliceLen(fields)
		if (l < min) {
			return [null, fmt.Errorf("expected at least %d fields but got %d", $.basicInterfaceValue(min, "int"), $.basicInterfaceValue(l, "int"))]
		}

		// Field offsets are as follows:
		// Num       RefCount Protocol Flags    Type St Inode Path

		let kernelPtr = strings.TrimSuffix($.arrayIndex(fields!, 0), ":")

		let [users, err] = $.pointerValue<NetUNIX>(u).parseUsers($.arrayIndex(fields!, 1))
		if (err != null) {
			return [null, fmt.Errorf("failed to parse ref count %q: %w", $.arrayIndex(fields!, 1), (err as any))]
		}

		let __goscriptTuple0: any = $.pointerValue<NetUNIX>(u).parseFlags($.arrayIndex(fields!, 3))
		let flags = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, fmt.Errorf("failed to parse flags %q: %w", $.arrayIndex(fields!, 3), (err as any))]
		}

		let __goscriptTuple1: any = $.pointerValue<NetUNIX>(u).parseType($.arrayIndex(fields!, 4))
		let typ = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, fmt.Errorf("failed to parse type %q: %w", $.arrayIndex(fields!, 4), (err as any))]
		}

		let __goscriptTuple2: any = $.pointerValue<NetUNIX>(u).parseState($.arrayIndex(fields!, 5))
		let state = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, fmt.Errorf("failed to parse state %q: %w", $.arrayIndex(fields!, 5), (err as any))]
		}

		let inode: bigint = 0n
		if (hasInode) {
			let __goscriptTuple3: any = $.pointerValue<NetUNIX>(u).parseInode($.arrayIndex(fields!, 6))
			inode = __goscriptTuple3[0]
			err = __goscriptTuple3[1]
			if (err != null) {
				return [null, fmt.Errorf("failed to parse inode %q: %w", $.arrayIndex(fields!, 6), (err as any))]
			}
		}

		let n: NetUNIXLine | $.VarRef<NetUNIXLine> | null = new NetUNIXLine({KernelPtr: kernelPtr, RefCount: users, Type: typ, Flags: flags, State: state, Inode: inode})

		// Path field is optional.
		if (l > min) {
			// Path occurs at either index 6 or 7 depending on whether inode is
			// already present.
			let pathIdx = 7
			if (!hasInode) {
				pathIdx--
			}

			$.pointerValue<NetUNIXLine>(n).Path = $.arrayIndex(fields!, pathIdx)
		}

		return [n, null]
	}

	public parseState(s: string): [NetUNIXState, $.GoError] {
		const u = this;
		let [st, err] = strconv.ParseInt(s, 16, 8)
		if (err != null) {
			return [0n, err]
		}

		return [$.uint64(st), null]
	}

	public parseType(s: string): [NetUNIXType, $.GoError] {
		const u = this;
		let [typ, err] = strconv.ParseUint(s, 16, 16)
		if (err != null) {
			return [0n, err]
		}

		return [$.uint64(typ), null]
	}

	public parseUsers(s: string): [bigint, $.GoError] {
		const u = this;
		return strconv.ParseUint(s, 16, 32)
	}

	static __typeInfo = $.registerStructType(
		"procfs.NetUNIX",
		() => new NetUNIX(),
		() => [$.methodSignature("parseFlags", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("uint64", "procfs.NetUNIXFlags"), "error"]), $.methodSignature("parseInode", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("uint64"), "error"]), $.methodSignature("parseLine", [["line", /* @__PURE__ */ $.basicType("string")], ["hasInode", /* @__PURE__ */ $.basicType("bool")], ["min", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("procfs.NetUNIXLine"), "error"], true), $.methodSignature("parseState", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("uint64", "procfs.NetUNIXState"), "error"]), $.methodSignature("parseType", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("uint64", "procfs.NetUNIXType"), "error"]), $.methodSignature("parseUsers", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("uint64"), "error"])],
		NetUNIX,
		() => [/* @__PURE__ */ $.structField("Rows", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("procfs.NetUNIXLine")), [0], 0, true)]
	)
}

export const netUnixTypeStream: number = 1

export const netUnixTypeDgram: number = 2

export const netUnixTypeSeqpacket: number = 5

export const netUnixFlagDefault: number = 0

export const netUnixFlagListen: number = 65536

export const netUnixStateUnconnected: number = 1

export const netUnixStateConnecting: number = 2

export const netUnixStateConnected: number = 3

export const netUnixStateDisconnected: number = 4

export async function readNetUNIX(file: string): globalThis.Promise<[NetUNIX | $.VarRef<NetUNIX> | null, $.GoError]> {
	await using __defer = new $.AsyncDisposableStack()
	// This file could be quite large and a streaming read is desirable versus
	// reading the entire contents at once.
	let __goscriptTuple4: any = await os.Open(file)
	let f: os.File | $.VarRef<os.File> | null = __goscriptTuple4[0]
	let err = __goscriptTuple4[1]
	if (err != null) {
		return [null, err]
	}
	__defer.defer(async () => { await os.File.prototype.Close.call($.pointerValue<os.File>(f)) })

	return await parseNetUNIX($.interfaceValue<io.Reader | null>(f, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))
}

export async function parseNetUNIX(r: io.Reader | null): globalThis.Promise<[NetUNIX | $.VarRef<NetUNIX> | null, $.GoError]> {
	// Begin scanning by checking for the existence of Inode.
	let s: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner(r)
	await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))

	// From the man page of proc(5), it does not contain an Inode field,
	// but in actually it exists. This code works for both cases.
	let hasInode = strings.Contains((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s)), "Inode")

	// Expect a minimum number of fields, but Inode and Path are optional:
	// Num       RefCount Protocol Flags    Type St Inode Path
	let minFields = 6
	if (hasInode) {
		minFields++
	}

	let nu: $.VarRef<NetUNIX> = $.varRef(new NetUNIX(undefined, true))
	while (await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))) {
		let line = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s))
		let __goscriptTuple5: any = nu.value.parseLine(line, hasInode, minFields)
		let item: NetUNIXLine | $.VarRef<NetUNIXLine> | null = __goscriptTuple5[0]
		let err = __goscriptTuple5[1]
		if (err != null) {
			return [null, fmt.Errorf("failed to parse /proc/net/unix data %q: %w", line, (err as any))]
		}

		nu.value.Rows = $.appendOne(nu.value.Rows, item, $.appendZeros.nil)
	}

	{
		let err = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Err() : bufio.Scanner.prototype.Err.call(s))
		if (err != null) {
			return [null, fmt.Errorf("failed to scan /proc/net/unix data: %w", (err as any))]
		}
	}

	return [nu, null]
}

export function NetUNIXType_String(t: NetUNIXType): string {
	switch (t) {
		case 1n:
		{
			return "stream"
			break
		}
		case 2n:
		{
			return "dgram"
			break
		}
		case 5n:
		{
			return "seqpacket"
			break
		}
	}
	return "unknown"
}

export function NetUNIXFlags_String(f: NetUNIXFlags): string {
	switch (f) {
		case 65536n:
		{
			return "listen"
			break
		}
		default:
		{
			return "default"
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function NetUNIXState_String(s: NetUNIXState): string {
	switch (s) {
		case 1n:
		{
			return "unconnected"
			break
		}
		case 2n:
		{
			return "connecting"
			break
		}
		case 3n:
		{
			return "connected"
			break
		}
		case 4n:
		{
			return "disconnected"
			break
		}
	}
	return "unknown"
}
