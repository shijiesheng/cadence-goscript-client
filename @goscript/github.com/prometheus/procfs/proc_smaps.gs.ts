// Generated file based on proc_smaps.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as os from "@goscript/os/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

import * as fs from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript_mountinfo from "./mountinfo.gs.ts"

import * as __goscript_mountstats from "./mountstats.gs.ts"

import type * as __goscript_net_dev from "./net_dev.gs.ts"

import * as __goscript_proc from "./proc.gs.ts"

import type * as __goscript_proc_cgroup from "./proc_cgroup.gs.ts"

import type * as __goscript_proc_environ from "./proc_environ.gs.ts"

import * as __goscript_proc_fdinfo from "./proc_fdinfo.gs.ts"

import type * as __goscript_proc_io from "./proc_io.gs.ts"

import type * as __goscript_proc_limits from "./proc_limits.gs.ts"

import type * as __goscript_proc_ns from "./proc_ns.gs.ts"

import type * as __goscript_proc_stat from "./proc_stat.gs.ts"

import type * as __goscript_proc_status from "./proc_status.gs.ts"

import type * as __goscript_schedstat from "./schedstat.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/os/index.js"
import "@goscript/regexp/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/prometheus/procfs/internal/util/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "./mountstats.gs.ts"
import "./proc.gs.ts"
import "./proc_fdinfo.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.ProcSMapsRollup"])

export class ProcSMapsRollup {
	// Amount of the mapping that is currently resident in RAM
	public get Rss(): bigint {
		return this._fields.Rss
	}

	public set Rss(value: bigint) {
		this._fields.Rss = value
	}

	// Process's proportional share of this mapping
	public get Pss(): bigint {
		return this._fields.Pss
	}

	public set Pss(value: bigint) {
		this._fields.Pss = value
	}

	// Size in bytes of clean shared pages
	public get SharedClean(): bigint {
		return this._fields.SharedClean
	}

	public set SharedClean(value: bigint) {
		this._fields.SharedClean = value
	}

	// Size in bytes of dirty shared pages
	public get SharedDirty(): bigint {
		return this._fields.SharedDirty
	}

	public set SharedDirty(value: bigint) {
		this._fields.SharedDirty = value
	}

	// Size in bytes of clean private pages
	public get PrivateClean(): bigint {
		return this._fields.PrivateClean
	}

	public set PrivateClean(value: bigint) {
		this._fields.PrivateClean = value
	}

	// Size in bytes of dirty private pages
	public get PrivateDirty(): bigint {
		return this._fields.PrivateDirty
	}

	public set PrivateDirty(value: bigint) {
		this._fields.PrivateDirty = value
	}

	// Amount of memory currently marked as referenced or accessed
	public get Referenced(): bigint {
		return this._fields.Referenced
	}

	public set Referenced(value: bigint) {
		this._fields.Referenced = value
	}

	// Amount of memory that does not belong to any file
	public get Anonymous(): bigint {
		return this._fields.Anonymous
	}

	public set Anonymous(value: bigint) {
		this._fields.Anonymous = value
	}

	// Amount would-be-anonymous memory currently on swap
	public get Swap(): bigint {
		return this._fields.Swap
	}

	public set Swap(value: bigint) {
		this._fields.Swap = value
	}

	// Process's proportional memory on swap
	public get SwapPss(): bigint {
		return this._fields.SwapPss
	}

	public set SwapPss(value: bigint) {
		this._fields.SwapPss = value
	}

	public _fields: {
		Rss: bigint
		Pss: bigint
		SharedClean: bigint
		SharedDirty: bigint
		PrivateClean: bigint
		PrivateDirty: bigint
		Referenced: bigint
		Anonymous: bigint
		Swap: bigint
		SwapPss: bigint
	}

	constructor(init?: Partial<{Rss?: bigint, Pss?: bigint, SharedClean?: bigint, SharedDirty?: bigint, PrivateClean?: bigint, PrivateDirty?: bigint, Referenced?: bigint, Anonymous?: bigint, Swap?: bigint, SwapPss?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Rss: init?.Rss ?? (0n as bigint),
			Pss: init?.Pss ?? (0n as bigint),
			SharedClean: init?.SharedClean ?? (0n as bigint),
			SharedDirty: init?.SharedDirty ?? (0n as bigint),
			PrivateClean: init?.PrivateClean ?? (0n as bigint),
			PrivateDirty: init?.PrivateDirty ?? (0n as bigint),
			Referenced: init?.Referenced ?? (0n as bigint),
			Anonymous: init?.Anonymous ?? (0n as bigint),
			Swap: init?.Swap ?? (0n as bigint),
			SwapPss: init?.SwapPss ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ProcSMapsRollup {
		return new ProcSMapsRollup(this, true)
	}

	public __goscriptAssign(source: ProcSMapsRollup): void {
		const target = this._fields
		const values = source._fields
		target.Rss = values.Rss
		target.Pss = values.Pss
		target.SharedClean = values.SharedClean
		target.SharedDirty = values.SharedDirty
		target.PrivateClean = values.PrivateClean
		target.PrivateDirty = values.PrivateDirty
		target.Referenced = values.Referenced
		target.Anonymous = values.Anonymous
		target.Swap = values.Swap
		target.SwapPss = values.SwapPss
	}

	public addValue(k: string, vString: string, vUint: bigint, vUintBytes: bigint): void {
		let s: ProcSMapsRollup | $.VarRef<ProcSMapsRollup> | null = this;
		const s$: ProcSMapsRollup = s == null ? $.pointerTarget<ProcSMapsRollup>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<ProcSMapsRollup>(s)
		switch (k) {
			case "Rss":
			{
				;(s$ as ProcSMapsRollup).Rss = $.uint64Add((s$ as ProcSMapsRollup).Rss, vUintBytes)
				break
			}
			case "Pss":
			{
				;(s$ as ProcSMapsRollup).Pss = $.uint64Add((s$ as ProcSMapsRollup).Pss, vUintBytes)
				break
			}
			case "Shared_Clean":
			{
				;(s$ as ProcSMapsRollup).SharedClean = $.uint64Add((s$ as ProcSMapsRollup).SharedClean, vUintBytes)
				break
			}
			case "Shared_Dirty":
			{
				;(s$ as ProcSMapsRollup).SharedDirty = $.uint64Add((s$ as ProcSMapsRollup).SharedDirty, vUintBytes)
				break
			}
			case "Private_Clean":
			{
				;(s$ as ProcSMapsRollup).PrivateClean = $.uint64Add((s$ as ProcSMapsRollup).PrivateClean, vUintBytes)
				break
			}
			case "Private_Dirty":
			{
				;(s$ as ProcSMapsRollup).PrivateDirty = $.uint64Add((s$ as ProcSMapsRollup).PrivateDirty, vUintBytes)
				break
			}
			case "Referenced":
			{
				;(s$ as ProcSMapsRollup).Referenced = $.uint64Add((s$ as ProcSMapsRollup).Referenced, vUintBytes)
				break
			}
			case "Anonymous":
			{
				;(s$ as ProcSMapsRollup).Anonymous = $.uint64Add((s$ as ProcSMapsRollup).Anonymous, vUintBytes)
				break
			}
			case "Swap":
			{
				;(s$ as ProcSMapsRollup).Swap = $.uint64Add((s$ as ProcSMapsRollup).Swap, vUintBytes)
				break
			}
			case "SwapPss":
			{
				;(s$ as ProcSMapsRollup).SwapPss = $.uint64Add((s$ as ProcSMapsRollup).SwapPss, vUintBytes)
				break
			}
		}
	}

	public async parseLine(line: string): globalThis.Promise<$.GoError> {
		const s: ProcSMapsRollup | $.VarRef<ProcSMapsRollup> | null = this;
		let kv: $.Slice<string> = strings.SplitN(line, ":", 2)
		if ($.sliceLen(kv) != 2) {
			await fmt.Println(line)
			return errors.New("invalid net/dev line, missing colon")
		}

		let k = $.arrayIndex(kv!, 0)
		if ($.stringEqual(k, "VmFlags")) {
			return null
		}

		let v = strings.TrimSpace($.arrayIndex(kv!, 1))
		v = strings.TrimRight(v, " kB")

		let [vKBytes, err] = strconv.ParseUint(v, 10, 64)
		if (err != null) {
			return err
		}
		let vBytes = $.uint64Mul(vKBytes, 1024n)

		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as ProcSMapsRollup).addValue(k, v, vKBytes, vBytes) : ProcSMapsRollup.prototype.addValue.call(s, k, v, vKBytes, vBytes))

		return null
	}

	static __typeInfo = $.registerStructType(
		"procfs.ProcSMapsRollup",
		() => new ProcSMapsRollup(),
		() => [$.methodSignature("addValue", [["k", /* @__PURE__ */ $.basicType("string")], ["vString", /* @__PURE__ */ $.basicType("string")], ["vUint", /* @__PURE__ */ $.basicType("uint64")], ["vUintBytes", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("parseLine", [["line", /* @__PURE__ */ $.basicType("string")]], ["error"], true)],
		ProcSMapsRollup,
		() => [/* @__PURE__ */ $.structField("Rss", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("Pss", /* @__PURE__ */ $.basicType("uint64"), [1], 8, true), /* @__PURE__ */ $.structField("SharedClean", /* @__PURE__ */ $.basicType("uint64"), [2], 16, true), /* @__PURE__ */ $.structField("SharedDirty", /* @__PURE__ */ $.basicType("uint64"), [3], 24, true), /* @__PURE__ */ $.structField("PrivateClean", /* @__PURE__ */ $.basicType("uint64"), [4], 32, true), /* @__PURE__ */ $.structField("PrivateDirty", /* @__PURE__ */ $.basicType("uint64"), [5], 40, true), /* @__PURE__ */ $.structField("Referenced", /* @__PURE__ */ $.basicType("uint64"), [6], 48, true), /* @__PURE__ */ $.structField("Anonymous", /* @__PURE__ */ $.basicType("uint64"), [7], 56, true), /* @__PURE__ */ $.structField("Swap", /* @__PURE__ */ $.basicType("uint64"), [8], 64, true), /* @__PURE__ */ $.structField("SwapPss", /* @__PURE__ */ $.basicType("uint64"), [9], 72, true)]
	)
}

export let procSMapsHeaderLine: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^[a-f0-9].*$")

export function __goscript_set_procSMapsHeaderLine(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	procSMapsHeaderLine = __goscriptValue
}
