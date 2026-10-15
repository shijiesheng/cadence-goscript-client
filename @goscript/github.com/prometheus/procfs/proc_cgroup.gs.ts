// Generated file based on proc_cgroup.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

import * as fs from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript_mountinfo from "./mountinfo.gs.ts"

import * as __goscript_mountstats from "./mountstats.gs.ts"

import type * as __goscript_net_dev from "./net_dev.gs.ts"

import type * as __goscript_proc from "./proc.gs.ts"

import type * as __goscript_proc_environ from "./proc_environ.gs.ts"

import * as __goscript_proc_fdinfo from "./proc_fdinfo.gs.ts"

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
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/prometheus/procfs/internal/util/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "./mountstats.gs.ts"
import "./proc_fdinfo.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.Cgroup"])

export class Cgroup {
	// HierarchyID that can be matched to a named hierarchy using /proc/cgroups. Cgroups V2 only has one
	// hierarchy, so HierarchyID is always 0. For cgroups v1 this is a unique ID number
	public get HierarchyID(): number {
		return this._fields.HierarchyID
	}

	public set HierarchyID(value: number) {
		this._fields.HierarchyID = value
	}

	// Controllers using this hierarchy of processes. Controllers are also known as subsystems. For
	// Cgroups V2 this may be empty, as all active controllers use the same hierarchy
	public get Controllers(): $.Slice<string> {
		return this._fields.Controllers
	}

	public set Controllers(value: $.Slice<string>) {
		this._fields.Controllers = value
	}

	// Path of this control group, relative to the mount point of the cgroupfs representing this specific
	// hierarchy
	public get Path(): string {
		return this._fields.Path
	}

	public set Path(value: string) {
		this._fields.Path = value
	}

	public _fields: {
		HierarchyID: number
		Controllers: $.Slice<string>
		Path: string
	}

	constructor(init?: Partial<{HierarchyID?: number, Controllers?: $.Slice<string>, Path?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			HierarchyID: init?.HierarchyID ?? (0 as number),
			Controllers: init?.Controllers ?? (null! as $.Slice<string>),
			Path: init?.Path ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Cgroup {
		return new Cgroup(this, true)
	}

	public __goscriptAssign(source: Cgroup): void {
		const target = this._fields
		const values = source._fields
		target.HierarchyID = values.HierarchyID
		target.Controllers = values.Controllers
		target.Path = values.Path
	}

	static __typeInfo = $.registerStructType(
		"procfs.Cgroup",
		() => new Cgroup(),
		() => [],
		Cgroup,
		() => [/* @__PURE__ */ $.structField("HierarchyID", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("Controllers", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [1], 8, true), /* @__PURE__ */ $.structField("Path", /* @__PURE__ */ $.basicType("string"), [2], 32, true)]
	)
}

export function parseCgroupString(cgroupStr: string): [Cgroup | $.VarRef<Cgroup> | null, $.GoError] {
	let err: $.GoError = null! as $.GoError

	let fields: $.Slice<string> = strings.SplitN(cgroupStr, ":", 3)
	if ($.sliceLen(fields) < 3) {
		return [null, fmt.Errorf("at least 3 fields required, found %d fields in cgroup string: %s", $.basicInterfaceValue($.sliceLen(fields), "int"), cgroupStr)]
	}

	let cgroup: Cgroup | $.VarRef<Cgroup> | null = new Cgroup({Path: $.arrayIndex(fields!, 2), Controllers: null})
	let cgroup$: Cgroup = cgroup == null ? $.pointerTarget<Cgroup>(cgroup) : (cgroup as any).__isVarRef === true ? (cgroup as any).value : (cgroup as any).__goValue === undefined ? (cgroup as any) : $.pointerTarget<Cgroup>(cgroup)
	let __goscriptTuple0: any = strconv.Atoi($.arrayIndex(fields!, 0));
	;(cgroup$ as Cgroup).HierarchyID = __goscriptTuple0[0]
	err = __goscriptTuple0[1]
	if (err != null) {
		return [null, fmt.Errorf("failed to parse hierarchy ID")]
	}
	if (!$.stringEqual($.arrayIndex(fields!, 1), "")) {
		let ssNames: $.Slice<string> = strings.Split($.arrayIndex(fields!, 1), ",");
		;(cgroup$ as Cgroup).Controllers = $.appendSlice((cgroup$ as Cgroup).Controllers, ssNames)
	}
	return [cgroup, null]
}

export async function parseCgroups(data: $.Slice<number>): globalThis.Promise<[$.Slice<Cgroup>, $.GoError]> {
	let cgroups: $.Slice<Cgroup> = null! as $.Slice<Cgroup>
	let scanner: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner($.interfaceValue<io.Reader | null>(bytes.NewReader(data), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))
	while (await (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(scanner))) {
		let mountString = (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(scanner))
		let __goscriptTuple1: any = parseCgroupString(mountString)
		let parsedMounts: Cgroup | $.VarRef<Cgroup> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		cgroups = $.appendOne(cgroups, ($.pointerValue<Cgroup>(parsedMounts)).clone())
	}

	let err = (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Err() : bufio.Scanner.prototype.Err.call(scanner))
	return [cgroups, err]
}
