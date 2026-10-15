// Generated file based on crypto.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as strings from "@goscript/strings/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

import * as fs2 from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import * as net from "@goscript/net/index.js"

import type * as __goscript_arp from "./arp.gs.ts"

import type * as __goscript_buddyinfo from "./buddyinfo.gs.ts"

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
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
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

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.Crypto"])

export class Crypto {
	public get Alignmask(): $.VarRef<bigint> | null {
		return this._fields.Alignmask
	}

	public set Alignmask(value: $.VarRef<bigint> | null) {
		this._fields.Alignmask = value
	}

	public get Async(): boolean {
		return this._fields.Async
	}

	public set Async(value: boolean) {
		this._fields.Async = value
	}

	public get Blocksize(): $.VarRef<bigint> | null {
		return this._fields.Blocksize
	}

	public set Blocksize(value: $.VarRef<bigint> | null) {
		this._fields.Blocksize = value
	}

	public get Chunksize(): $.VarRef<bigint> | null {
		return this._fields.Chunksize
	}

	public set Chunksize(value: $.VarRef<bigint> | null) {
		this._fields.Chunksize = value
	}

	public get Ctxsize(): $.VarRef<bigint> | null {
		return this._fields.Ctxsize
	}

	public set Ctxsize(value: $.VarRef<bigint> | null) {
		this._fields.Ctxsize = value
	}

	public get Digestsize(): $.VarRef<bigint> | null {
		return this._fields.Digestsize
	}

	public set Digestsize(value: $.VarRef<bigint> | null) {
		this._fields.Digestsize = value
	}

	public get Driver(): string {
		return this._fields.Driver
	}

	public set Driver(value: string) {
		this._fields.Driver = value
	}

	public get Geniv(): string {
		return this._fields.Geniv
	}

	public set Geniv(value: string) {
		this._fields.Geniv = value
	}

	public get Internal(): string {
		return this._fields.Internal
	}

	public set Internal(value: string) {
		this._fields.Internal = value
	}

	public get Ivsize(): $.VarRef<bigint> | null {
		return this._fields.Ivsize
	}

	public set Ivsize(value: $.VarRef<bigint> | null) {
		this._fields.Ivsize = value
	}

	public get Maxauthsize(): $.VarRef<bigint> | null {
		return this._fields.Maxauthsize
	}

	public set Maxauthsize(value: $.VarRef<bigint> | null) {
		this._fields.Maxauthsize = value
	}

	public get MaxKeysize(): $.VarRef<bigint> | null {
		return this._fields.MaxKeysize
	}

	public set MaxKeysize(value: $.VarRef<bigint> | null) {
		this._fields.MaxKeysize = value
	}

	public get MinKeysize(): $.VarRef<bigint> | null {
		return this._fields.MinKeysize
	}

	public set MinKeysize(value: $.VarRef<bigint> | null) {
		this._fields.MinKeysize = value
	}

	public get Module(): string {
		return this._fields.Module
	}

	public set Module(value: string) {
		this._fields.Module = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Priority(): $.VarRef<bigint> | null {
		return this._fields.Priority
	}

	public set Priority(value: $.VarRef<bigint> | null) {
		this._fields.Priority = value
	}

	public get Refcnt(): $.VarRef<bigint> | null {
		return this._fields.Refcnt
	}

	public set Refcnt(value: $.VarRef<bigint> | null) {
		this._fields.Refcnt = value
	}

	public get Seedsize(): $.VarRef<bigint> | null {
		return this._fields.Seedsize
	}

	public set Seedsize(value: $.VarRef<bigint> | null) {
		this._fields.Seedsize = value
	}

	public get Selftest(): string {
		return this._fields.Selftest
	}

	public set Selftest(value: string) {
		this._fields.Selftest = value
	}

	public get Type(): string {
		return this._fields.Type
	}

	public set Type(value: string) {
		this._fields.Type = value
	}

	public get Walksize(): $.VarRef<bigint> | null {
		return this._fields.Walksize
	}

	public set Walksize(value: $.VarRef<bigint> | null) {
		this._fields.Walksize = value
	}

	public _fields: {
		Alignmask: $.VarRef<bigint> | null
		Async: boolean
		Blocksize: $.VarRef<bigint> | null
		Chunksize: $.VarRef<bigint> | null
		Ctxsize: $.VarRef<bigint> | null
		Digestsize: $.VarRef<bigint> | null
		Driver: string
		Geniv: string
		Internal: string
		Ivsize: $.VarRef<bigint> | null
		Maxauthsize: $.VarRef<bigint> | null
		MaxKeysize: $.VarRef<bigint> | null
		MinKeysize: $.VarRef<bigint> | null
		Module: string
		Name: string
		Priority: $.VarRef<bigint> | null
		Refcnt: $.VarRef<bigint> | null
		Seedsize: $.VarRef<bigint> | null
		Selftest: string
		Type: string
		Walksize: $.VarRef<bigint> | null
	}

	constructor(init?: Partial<{Alignmask?: $.VarRef<bigint> | null, Async?: boolean, Blocksize?: $.VarRef<bigint> | null, Chunksize?: $.VarRef<bigint> | null, Ctxsize?: $.VarRef<bigint> | null, Digestsize?: $.VarRef<bigint> | null, Driver?: string, Geniv?: string, Internal?: string, Ivsize?: $.VarRef<bigint> | null, Maxauthsize?: $.VarRef<bigint> | null, MaxKeysize?: $.VarRef<bigint> | null, MinKeysize?: $.VarRef<bigint> | null, Module?: string, Name?: string, Priority?: $.VarRef<bigint> | null, Refcnt?: $.VarRef<bigint> | null, Seedsize?: $.VarRef<bigint> | null, Selftest?: string, Type?: string, Walksize?: $.VarRef<bigint> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Alignmask: init?.Alignmask ?? (null! as $.VarRef<bigint> | null),
			Async: init?.Async ?? (false as boolean),
			Blocksize: init?.Blocksize ?? (null! as $.VarRef<bigint> | null),
			Chunksize: init?.Chunksize ?? (null! as $.VarRef<bigint> | null),
			Ctxsize: init?.Ctxsize ?? (null! as $.VarRef<bigint> | null),
			Digestsize: init?.Digestsize ?? (null! as $.VarRef<bigint> | null),
			Driver: init?.Driver ?? ("" as string),
			Geniv: init?.Geniv ?? ("" as string),
			Internal: init?.Internal ?? ("" as string),
			Ivsize: init?.Ivsize ?? (null! as $.VarRef<bigint> | null),
			Maxauthsize: init?.Maxauthsize ?? (null! as $.VarRef<bigint> | null),
			MaxKeysize: init?.MaxKeysize ?? (null! as $.VarRef<bigint> | null),
			MinKeysize: init?.MinKeysize ?? (null! as $.VarRef<bigint> | null),
			Module: init?.Module ?? ("" as string),
			Name: init?.Name ?? ("" as string),
			Priority: init?.Priority ?? (null! as $.VarRef<bigint> | null),
			Refcnt: init?.Refcnt ?? (null! as $.VarRef<bigint> | null),
			Seedsize: init?.Seedsize ?? (null! as $.VarRef<bigint> | null),
			Selftest: init?.Selftest ?? ("" as string),
			Type: init?.Type ?? ("" as string),
			Walksize: init?.Walksize ?? (null! as $.VarRef<bigint> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Crypto {
		return new Crypto(this, true)
	}

	public __goscriptAssign(source: Crypto): void {
		const target = this._fields
		const values = source._fields
		target.Alignmask = values.Alignmask
		target.Async = values.Async
		target.Blocksize = values.Blocksize
		target.Chunksize = values.Chunksize
		target.Ctxsize = values.Ctxsize
		target.Digestsize = values.Digestsize
		target.Driver = values.Driver
		target.Geniv = values.Geniv
		target.Internal = values.Internal
		target.Ivsize = values.Ivsize
		target.Maxauthsize = values.Maxauthsize
		target.MaxKeysize = values.MaxKeysize
		target.MinKeysize = values.MinKeysize
		target.Module = values.Module
		target.Name = values.Name
		target.Priority = values.Priority
		target.Refcnt = values.Refcnt
		target.Seedsize = values.Seedsize
		target.Selftest = values.Selftest
		target.Type = values.Type
		target.Walksize = values.Walksize
	}

	public parseKV(k: string, v: string): $.GoError {
		let c: Crypto | $.VarRef<Crypto> | null = this;
		const c$: Crypto = c == null ? $.pointerTarget<Crypto>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Crypto>(c)
		let vp: util.ValueParser | $.VarRef<util.ValueParser> | null = util.NewValueParser(v)

		switch (k) {
			case "async":
			{
				;(c$ as Crypto).Async = $.stringEqual(v, "yes")
				break
			}
			case "blocksize":
			{
				;(c$ as Crypto).Blocksize = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PUInt64() : util.ValueParser.prototype.PUInt64.call(vp))
				break
			}
			case "chunksize":
			{
				;(c$ as Crypto).Chunksize = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PUInt64() : util.ValueParser.prototype.PUInt64.call(vp))
				break
			}
			case "digestsize":
			{
				;(c$ as Crypto).Digestsize = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PUInt64() : util.ValueParser.prototype.PUInt64.call(vp))
				break
			}
			case "driver":
			{
				;(c$ as Crypto).Driver = v
				break
			}
			case "geniv":
			{
				;(c$ as Crypto).Geniv = v
				break
			}
			case "internal":
			{
				;(c$ as Crypto).Internal = v
				break
			}
			case "ivsize":
			{
				;(c$ as Crypto).Ivsize = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PUInt64() : util.ValueParser.prototype.PUInt64.call(vp))
				break
			}
			case "maxauthsize":
			{
				;(c$ as Crypto).Maxauthsize = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PUInt64() : util.ValueParser.prototype.PUInt64.call(vp))
				break
			}
			case "max keysize":
			{
				;(c$ as Crypto).MaxKeysize = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PUInt64() : util.ValueParser.prototype.PUInt64.call(vp))
				break
			}
			case "min keysize":
			{
				;(c$ as Crypto).MinKeysize = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PUInt64() : util.ValueParser.prototype.PUInt64.call(vp))
				break
			}
			case "module":
			{
				;(c$ as Crypto).Module = v
				break
			}
			case "name":
			{
				;(c$ as Crypto).Name = v
				break
			}
			case "priority":
			{
				;(c$ as Crypto).Priority = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
				break
			}
			case "refcnt":
			{
				;(c$ as Crypto).Refcnt = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PInt64() : util.ValueParser.prototype.PInt64.call(vp))
				break
			}
			case "seedsize":
			{
				;(c$ as Crypto).Seedsize = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PUInt64() : util.ValueParser.prototype.PUInt64.call(vp))
				break
			}
			case "selftest":
			{
				;(c$ as Crypto).Selftest = v
				break
			}
			case "type":
			{
				;(c$ as Crypto).Type = v
				break
			}
			case "walksize":
			{
				;(c$ as Crypto).Walksize = (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).PUInt64() : util.ValueParser.prototype.PUInt64.call(vp))
				break
			}
		}

		return (vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as util.ValueParser).Err() : util.ValueParser.prototype.Err.call(vp))
	}

	static __typeInfo = $.registerStructType(
		"procfs.Crypto",
		() => new Crypto(),
		() => [$.methodSignature("parseKV", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("string")]], ["error"], true)],
		Crypto,
		() => [/* @__PURE__ */ $.structField("Alignmask", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [0], 0, true), /* @__PURE__ */ $.structField("Async", /* @__PURE__ */ $.basicType("bool"), [1], 8, true), /* @__PURE__ */ $.structField("Blocksize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [2], 16, true), /* @__PURE__ */ $.structField("Chunksize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [3], 24, true), /* @__PURE__ */ $.structField("Ctxsize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [4], 32, true), /* @__PURE__ */ $.structField("Digestsize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [5], 40, true), /* @__PURE__ */ $.structField("Driver", /* @__PURE__ */ $.basicType("string"), [6], 48, true), /* @__PURE__ */ $.structField("Geniv", /* @__PURE__ */ $.basicType("string"), [7], 64, true), /* @__PURE__ */ $.structField("Internal", /* @__PURE__ */ $.basicType("string"), [8], 80, true), /* @__PURE__ */ $.structField("Ivsize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [9], 96, true), /* @__PURE__ */ $.structField("Maxauthsize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [10], 104, true), /* @__PURE__ */ $.structField("MaxKeysize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [11], 112, true), /* @__PURE__ */ $.structField("MinKeysize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [12], 120, true), /* @__PURE__ */ $.structField("Module", /* @__PURE__ */ $.basicType("string"), [13], 128, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [14], 144, true), /* @__PURE__ */ $.structField("Priority", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [15], 160, true), /* @__PURE__ */ $.structField("Refcnt", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [16], 168, true), /* @__PURE__ */ $.structField("Seedsize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [17], 176, true), /* @__PURE__ */ $.structField("Selftest", /* @__PURE__ */ $.basicType("string"), [18], 184, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("string"), [19], 200, true), /* @__PURE__ */ $.structField("Walksize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [20], 216, true)]
	)
}

export async function parseCrypto(r: io.Reader | null): globalThis.Promise<[$.Slice<Crypto>, $.GoError]> {
	let out: $.Slice<Crypto> = null! as $.Slice<Crypto>

	let s: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner(r)
	while (await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))) {
		let text = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s))
		switch ((true as boolean)) {
			case strings.HasPrefix(text, "name"):
			{
				out = $.appendOne(out, new Crypto(undefined, true))
				break
			}
			case $.stringEqual(text, ""):
			{
				continue
				break
			}
		}

		let kv: $.Slice<string> = strings.Split(text, ":")
		if ($.sliceLen(kv) != 2) {
			return [null, fmt.Errorf("malformed crypto line: %q", text)]
		}

		let k = strings.TrimSpace($.arrayIndex(kv!, 0))
		let v = strings.TrimSpace($.arrayIndex(kv!, 1))

		// Parse the key/value pair into the currently focused element.
		let c: Crypto | $.VarRef<Crypto> | null = $.indexRef(out!, $.sliceLen(out) - 1)
		{
			let err = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Crypto).parseKV(k, v) : Crypto.prototype.parseKV.call(c, k, v))
			if (err != null) {
				return [null, err]
			}
		}
	}

	{
		let err = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Err() : bufio.Scanner.prototype.Err.call(s))
		if (err != null) {
			return [null, err]
		}
	}

	return [out, null]
}
