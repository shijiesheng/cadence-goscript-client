// Generated file based on proc_io.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

import * as fs from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import type * as __goscript_mountinfo from "./mountinfo.gs.ts"

import * as __goscript_mountstats from "./mountstats.gs.ts"

import type * as __goscript_net_dev from "./net_dev.gs.ts"

import * as __goscript_proc from "./proc.gs.ts"

import type * as __goscript_proc_cgroup from "./proc_cgroup.gs.ts"

import type * as __goscript_proc_environ from "./proc_environ.gs.ts"

import * as __goscript_proc_fdinfo from "./proc_fdinfo.gs.ts"

import type * as __goscript_proc_limits from "./proc_limits.gs.ts"

import type * as __goscript_proc_ns from "./proc_ns.gs.ts"

import type * as __goscript_proc_smaps from "./proc_smaps.gs.ts"

import type * as __goscript_proc_stat from "./proc_stat.gs.ts"

import type * as __goscript_proc_status from "./proc_status.gs.ts"

import type * as __goscript_schedstat from "./schedstat.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/github.com/prometheus/procfs/internal/util/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "./mountstats.gs.ts"
import "./proc.gs.ts"
import "./proc_fdinfo.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.ProcIO"])

export class ProcIO {
	// Chars read.
	public get RChar(): bigint {
		return this._fields.RChar
	}

	public set RChar(value: bigint) {
		this._fields.RChar = value
	}

	// Chars written.
	public get WChar(): bigint {
		return this._fields.WChar
	}

	public set WChar(value: bigint) {
		this._fields.WChar = value
	}

	// Read syscalls.
	public get SyscR(): bigint {
		return this._fields.SyscR
	}

	public set SyscR(value: bigint) {
		this._fields.SyscR = value
	}

	// Write syscalls.
	public get SyscW(): bigint {
		return this._fields.SyscW
	}

	public set SyscW(value: bigint) {
		this._fields.SyscW = value
	}

	// Bytes read.
	public get ReadBytes(): bigint {
		return this._fields.ReadBytes
	}

	public set ReadBytes(value: bigint) {
		this._fields.ReadBytes = value
	}

	// Bytes written.
	public get WriteBytes(): bigint {
		return this._fields.WriteBytes
	}

	public set WriteBytes(value: bigint) {
		this._fields.WriteBytes = value
	}

	// Bytes written, but taking into account truncation. See
	// Documentation/filesystems/proc.txt in the kernel sources for
	// detailed explanation.
	public get CancelledWriteBytes(): bigint {
		return this._fields.CancelledWriteBytes
	}

	public set CancelledWriteBytes(value: bigint) {
		this._fields.CancelledWriteBytes = value
	}

	public _fields: {
		RChar: bigint
		WChar: bigint
		SyscR: bigint
		SyscW: bigint
		ReadBytes: bigint
		WriteBytes: bigint
		CancelledWriteBytes: bigint
	}

	constructor(init?: Partial<{RChar?: bigint, WChar?: bigint, SyscR?: bigint, SyscW?: bigint, ReadBytes?: bigint, WriteBytes?: bigint, CancelledWriteBytes?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			RChar: init?.RChar ?? (0n as bigint),
			WChar: init?.WChar ?? (0n as bigint),
			SyscR: init?.SyscR ?? (0n as bigint),
			SyscW: init?.SyscW ?? (0n as bigint),
			ReadBytes: init?.ReadBytes ?? (0n as bigint),
			WriteBytes: init?.WriteBytes ?? (0n as bigint),
			CancelledWriteBytes: init?.CancelledWriteBytes ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ProcIO {
		return new ProcIO(this, true)
	}

	public __goscriptAssign(source: ProcIO): void {
		const target = this._fields
		const values = source._fields
		target.RChar = values.RChar
		target.WChar = values.WChar
		target.SyscR = values.SyscR
		target.SyscW = values.SyscW
		target.ReadBytes = values.ReadBytes
		target.WriteBytes = values.WriteBytes
		target.CancelledWriteBytes = values.CancelledWriteBytes
	}

	static __typeInfo = $.registerStructType(
		"procfs.ProcIO",
		() => new ProcIO(),
		() => [],
		ProcIO,
		() => [/* @__PURE__ */ $.structField("RChar", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("WChar", /* @__PURE__ */ $.basicType("uint64"), [1], 8, true), /* @__PURE__ */ $.structField("SyscR", /* @__PURE__ */ $.basicType("uint64"), [2], 16, true), /* @__PURE__ */ $.structField("SyscW", /* @__PURE__ */ $.basicType("uint64"), [3], 24, true), /* @__PURE__ */ $.structField("ReadBytes", /* @__PURE__ */ $.basicType("uint64"), [4], 32, true), /* @__PURE__ */ $.structField("WriteBytes", /* @__PURE__ */ $.basicType("uint64"), [5], 40, true), /* @__PURE__ */ $.structField("CancelledWriteBytes", /* @__PURE__ */ $.basicType("int64"), [6], 48, true)]
	)
}
