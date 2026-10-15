// Generated file based on proc_ns.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as os from "@goscript/os/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as fs from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import type * as __goscript_mountinfo from "./mountinfo.gs.ts"

import * as __goscript_mountstats from "./mountstats.gs.ts"

import type * as __goscript_net_dev from "./net_dev.gs.ts"

import * as __goscript_proc from "./proc.gs.ts"

import type * as __goscript_proc_cgroup from "./proc_cgroup.gs.ts"

import type * as __goscript_proc_environ from "./proc_environ.gs.ts"

import * as __goscript_proc_fdinfo from "./proc_fdinfo.gs.ts"

import type * as __goscript_proc_io from "./proc_io.gs.ts"

import type * as __goscript_proc_limits from "./proc_limits.gs.ts"

import type * as __goscript_proc_smaps from "./proc_smaps.gs.ts"

import type * as __goscript_proc_stat from "./proc_stat.gs.ts"

import type * as __goscript_proc_status from "./proc_status.gs.ts"

import type * as __goscript_schedstat from "./schedstat.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/os/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "./mountstats.gs.ts"
import "./proc.gs.ts"
import "./proc_fdinfo.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.Namespace", "procfs.Namespaces"])

export type Namespaces = globalThis.Map<string, Namespace> | null

$.registerNamedType("procfs.Namespaces", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "procfs.Namespace"));

export class Namespace {
	public get Type(): string {
		return this._fields.Type
	}

	public set Type(value: string) {
		this._fields.Type = value
	}

	public get Inode(): number {
		return this._fields.Inode
	}

	public set Inode(value: number) {
		this._fields.Inode = value
	}

	public _fields: {
		Type: string
		Inode: number
	}

	constructor(init?: Partial<{Type?: string, Inode?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? ("" as string),
			Inode: init?.Inode ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Namespace {
		return new Namespace(this, true)
	}

	public __goscriptAssign(source: Namespace): void {
		const target = this._fields
		const values = source._fields
		target.Type = values.Type
		target.Inode = values.Inode
	}

	static __typeInfo = $.registerStructType(
		"procfs.Namespace",
		() => new Namespace(),
		() => [],
		Namespace,
		() => [/* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Inode", /* @__PURE__ */ $.basicType("uint32"), [1], 16, true)]
	)
}
