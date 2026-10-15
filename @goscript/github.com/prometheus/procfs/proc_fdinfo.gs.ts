// Generated file based on proc_fdinfo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

import * as fs from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript_mountinfo from "./mountinfo.gs.ts"

import * as __goscript_mountstats from "./mountstats.gs.ts"

import type * as __goscript_net_dev from "./net_dev.gs.ts"

import * as __goscript_proc from "./proc.gs.ts"

import type * as __goscript_proc_cgroup from "./proc_cgroup.gs.ts"

import type * as __goscript_proc_environ from "./proc_environ.gs.ts"

import type * as __goscript_proc_io from "./proc_io.gs.ts"

import type * as __goscript_proc_limits from "./proc_limits.gs.ts"

import type * as __goscript_proc_ns from "./proc_ns.gs.ts"

import type * as __goscript_proc_smaps from "./proc_smaps.gs.ts"

import type * as __goscript_proc_stat from "./proc_stat.gs.ts"

import type * as __goscript_proc_status from "./proc_status.gs.ts"

import type * as __goscript_schedstat from "./schedstat.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/regexp/index.js"
import "@goscript/github.com/prometheus/procfs/internal/util/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "./mountstats.gs.ts"
import "./proc.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.ProcFDInfo", "procfs.InotifyInfo", "procfs.ProcFDInfos"])

export type ProcFDInfos = $.Slice<ProcFDInfo>

$.registerNamedType("procfs.ProcFDInfos", /* @__PURE__ */ $.sliceType("procfs.ProcFDInfo"));

$.registerNamedValueType(
	"procfs.ProcFDInfos",
	{InotifyWatchLen: (receiver: any, ...args: any[]) => (ProcFDInfos_InotifyWatchLen as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (ProcFDInfos_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (ProcFDInfos_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (ProcFDInfos_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("InotifyWatchLen", [], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*procfs.ProcFDInfos",
	{InotifyWatchLen: (receiver: any, ...args: any[]) => (ProcFDInfos_InotifyWatchLen as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (ProcFDInfos_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (ProcFDInfos_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (ProcFDInfos_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("InotifyWatchLen", [], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class ProcFDInfo {
	// File descriptor
	public get FD(): string {
		return this._fields.FD
	}

	public set FD(value: string) {
		this._fields.FD = value
	}

	// File offset
	public get Pos(): string {
		return this._fields.Pos
	}

	public set Pos(value: string) {
		this._fields.Pos = value
	}

	// File access mode and status flags
	public get Flags(): string {
		return this._fields.Flags
	}

	public set Flags(value: string) {
		this._fields.Flags = value
	}

	// Mount point ID
	public get MntID(): string {
		return this._fields.MntID
	}

	public set MntID(value: string) {
		this._fields.MntID = value
	}

	// List of inotify lines (structured) in the fdinfo file (kernel 3.8+ only)
	public get InotifyInfos(): $.Slice<InotifyInfo> {
		return this._fields.InotifyInfos
	}

	public set InotifyInfos(value: $.Slice<InotifyInfo>) {
		this._fields.InotifyInfos = value
	}

	public _fields: {
		FD: string
		Pos: string
		Flags: string
		MntID: string
		InotifyInfos: $.Slice<InotifyInfo>
	}

	constructor(init?: Partial<{FD?: string, Pos?: string, Flags?: string, MntID?: string, InotifyInfos?: $.Slice<InotifyInfo>}>, __goscriptValue?: boolean) {
		this._fields = {
			FD: init?.FD ?? ("" as string),
			Pos: init?.Pos ?? ("" as string),
			Flags: init?.Flags ?? ("" as string),
			MntID: init?.MntID ?? ("" as string),
			InotifyInfos: init?.InotifyInfos ?? (null! as $.Slice<InotifyInfo>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ProcFDInfo {
		return new ProcFDInfo(this, true)
	}

	public __goscriptAssign(source: ProcFDInfo): void {
		const target = this._fields
		const values = source._fields
		target.FD = values.FD
		target.Pos = values.Pos
		target.Flags = values.Flags
		target.MntID = values.MntID
		target.InotifyInfos = values.InotifyInfos
	}

	static __typeInfo = $.registerStructType(
		"procfs.ProcFDInfo",
		() => new ProcFDInfo(),
		() => [],
		ProcFDInfo,
		() => [/* @__PURE__ */ $.structField("FD", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("MntID", /* @__PURE__ */ $.basicType("string"), [3], 48, true), /* @__PURE__ */ $.structField("InotifyInfos", /* @__PURE__ */ $.sliceType("procfs.InotifyInfo"), [4], 64, true)]
	)
}

export class InotifyInfo {
	// Watch descriptor number
	public get WD(): string {
		return this._fields.WD
	}

	public set WD(value: string) {
		this._fields.WD = value
	}

	// Inode number
	public get Ino(): string {
		return this._fields.Ino
	}

	public set Ino(value: string) {
		this._fields.Ino = value
	}

	// Device ID
	public get Sdev(): string {
		return this._fields.Sdev
	}

	public set Sdev(value: string) {
		this._fields.Sdev = value
	}

	// Mask of events being monitored
	public get Mask(): string {
		return this._fields.Mask
	}

	public set Mask(value: string) {
		this._fields.Mask = value
	}

	public _fields: {
		WD: string
		Ino: string
		Sdev: string
		Mask: string
	}

	constructor(init?: Partial<{WD?: string, Ino?: string, Sdev?: string, Mask?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			WD: init?.WD ?? ("" as string),
			Ino: init?.Ino ?? ("" as string),
			Sdev: init?.Sdev ?? ("" as string),
			Mask: init?.Mask ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): InotifyInfo {
		return new InotifyInfo(this, true)
	}

	public __goscriptAssign(source: InotifyInfo): void {
		const target = this._fields
		const values = source._fields
		target.WD = values.WD
		target.Ino = values.Ino
		target.Sdev = values.Sdev
		target.Mask = values.Mask
	}

	static __typeInfo = $.registerStructType(
		"procfs.InotifyInfo",
		() => new InotifyInfo(),
		() => [],
		InotifyInfo,
		() => [/* @__PURE__ */ $.structField("WD", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Ino", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Sdev", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Mask", /* @__PURE__ */ $.basicType("string"), [3], 48, true)]
	)
}

export let rPos: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^pos:\\s+(\\d+)$")

export function __goscript_set_rPos(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	rPos = __goscriptValue
}

export let rFlags: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^flags:\\s+(\\d+)$")

export function __goscript_set_rFlags(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	rFlags = __goscriptValue
}

export let rMntID: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^mnt_id:\\s+(\\d+)$")

export function __goscript_set_rMntID(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	rMntID = __goscriptValue
}

export let rInotify: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^inotify")

export function __goscript_set_rInotify(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	rInotify = __goscriptValue
}

export let rInotifyParts: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^inotify\\s+wd:([0-9a-f]+)\\s+ino:([0-9a-f]+)\\s+sdev:([0-9a-f]+)(?:\\s+mask:([0-9a-f]+))?")

export function __goscript_set_rInotifyParts(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	rInotifyParts = __goscriptValue
}

export async function parseInotifyInfo(line: string): globalThis.Promise<[InotifyInfo | $.VarRef<InotifyInfo> | null, $.GoError]> {
	let m: $.Slice<string> = await (rInotifyParts !== null && (rInotifyParts as any).__isVarRef !== true && (rInotifyParts as any).__goValue === undefined ? ((rInotifyParts as any) as regexp.Regexp).FindStringSubmatch(line) : regexp.Regexp.prototype.FindStringSubmatch.call(rInotifyParts, line))
	if ($.sliceLen(m) >= 4) {
		let mask: string = ""
		if ($.sliceLen(m) == 5) {
			mask = $.arrayIndex(m!, 4)
		}
		let i: InotifyInfo | $.VarRef<InotifyInfo> | null = new InotifyInfo({WD: $.arrayIndex(m!, 1), Ino: $.arrayIndex(m!, 2), Sdev: $.arrayIndex(m!, 3), Mask: mask})
		return [i, null]
	}
	return [null, fmt.Errorf("invalid inode entry: %q", line)]
}

export function ProcFDInfos_Len(p: ProcFDInfos): number {
	return $.sliceLen((p as ProcFDInfos))
}

export function ProcFDInfos_Swap(p: ProcFDInfos, i: number, j: number): void {
	let __goscriptAssign0_0: ProcFDInfo = ($.arrayIndex(p!, j)).clone()
	let __goscriptAssign0_1: ProcFDInfo = ($.arrayIndex(p!, i)).clone()
	$.assignStruct($.sliceElems(p!)[$.sliceSlot(p!, i)], __goscriptAssign0_0)
	$.assignStruct($.sliceElems(p!)[$.sliceSlot(p!, j)], __goscriptAssign0_1)
}

export function ProcFDInfos_Less(p: ProcFDInfos, i: number, j: number): boolean {
	return $.stringCompare($.arrayIndex(p!, i).FD, $.arrayIndex(p!, j).FD) < 0
}

export function ProcFDInfos_InotifyWatchLen(p: ProcFDInfos): [number, $.GoError] {
	let length = 0
	for (let __goscriptRangeTarget0 = p, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let f = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as ProcFDInfo)).clone()
		length = length + ($.sliceLen(f.InotifyInfos))
	}

	return [length, null]
}
