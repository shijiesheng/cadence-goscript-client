// Generated file based on xfrm.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as os from "@goscript/os/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as fs2 from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import type * as io from "@goscript/io/index.js"

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

import type * as __goscript_zoneinfo from "./zoneinfo.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/fmt/index.js"
import "@goscript/os/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "@goscript/net/index.js"
import "./fs.gs.ts"
import "./mountstats.gs.ts"
import "./net_protocols.gs.ts"
import "./net_sockstat.gs.ts"
import "./net_unix.gs.ts"
import "./proc_fdinfo.gs.ts"
import "./proc_psi.gs.ts"
import "./schedstat.gs.ts"
import "./slab.gs.ts"
import "./stat.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.XfrmStat"])

export class XfrmStat {
	// All errors which are not matched by other
	public get XfrmInError(): number {
		return this._fields.XfrmInError
	}

	public set XfrmInError(value: number) {
		this._fields.XfrmInError = value
	}

	// No buffer is left
	public get XfrmInBufferError(): number {
		return this._fields.XfrmInBufferError
	}

	public set XfrmInBufferError(value: number) {
		this._fields.XfrmInBufferError = value
	}

	// Header Error
	public get XfrmInHdrError(): number {
		return this._fields.XfrmInHdrError
	}

	public set XfrmInHdrError(value: number) {
		this._fields.XfrmInHdrError = value
	}

	// No state found
	// i.e. either inbound SPI, address, or IPSEC protocol at SA is wrong
	public get XfrmInNoStates(): number {
		return this._fields.XfrmInNoStates
	}

	public set XfrmInNoStates(value: number) {
		this._fields.XfrmInNoStates = value
	}

	// Transformation protocol specific error
	// e.g. SA Key is wrong
	public get XfrmInStateProtoError(): number {
		return this._fields.XfrmInStateProtoError
	}

	public set XfrmInStateProtoError(value: number) {
		this._fields.XfrmInStateProtoError = value
	}

	// Transformation mode specific error
	public get XfrmInStateModeError(): number {
		return this._fields.XfrmInStateModeError
	}

	public set XfrmInStateModeError(value: number) {
		this._fields.XfrmInStateModeError = value
	}

	// Sequence error
	// e.g. sequence number is out of window
	public get XfrmInStateSeqError(): number {
		return this._fields.XfrmInStateSeqError
	}

	public set XfrmInStateSeqError(value: number) {
		this._fields.XfrmInStateSeqError = value
	}

	// State is expired
	public get XfrmInStateExpired(): number {
		return this._fields.XfrmInStateExpired
	}

	public set XfrmInStateExpired(value: number) {
		this._fields.XfrmInStateExpired = value
	}

	// State has mismatch option
	// e.g. UDP encapsulation type is mismatched
	public get XfrmInStateMismatch(): number {
		return this._fields.XfrmInStateMismatch
	}

	public set XfrmInStateMismatch(value: number) {
		this._fields.XfrmInStateMismatch = value
	}

	// State is invalid
	public get XfrmInStateInvalid(): number {
		return this._fields.XfrmInStateInvalid
	}

	public set XfrmInStateInvalid(value: number) {
		this._fields.XfrmInStateInvalid = value
	}

	// No matching template for states
	// e.g. Inbound SAs are correct but SP rule is wrong
	public get XfrmInTmplMismatch(): number {
		return this._fields.XfrmInTmplMismatch
	}

	public set XfrmInTmplMismatch(value: number) {
		this._fields.XfrmInTmplMismatch = value
	}

	// No policy is found for states
	// e.g. Inbound SAs are correct but no SP is found
	public get XfrmInNoPols(): number {
		return this._fields.XfrmInNoPols
	}

	public set XfrmInNoPols(value: number) {
		this._fields.XfrmInNoPols = value
	}

	// Policy discards
	public get XfrmInPolBlock(): number {
		return this._fields.XfrmInPolBlock
	}

	public set XfrmInPolBlock(value: number) {
		this._fields.XfrmInPolBlock = value
	}

	// Policy error
	public get XfrmInPolError(): number {
		return this._fields.XfrmInPolError
	}

	public set XfrmInPolError(value: number) {
		this._fields.XfrmInPolError = value
	}

	// All errors which are not matched by others
	public get XfrmOutError(): number {
		return this._fields.XfrmOutError
	}

	public set XfrmOutError(value: number) {
		this._fields.XfrmOutError = value
	}

	// Bundle generation error
	public get XfrmOutBundleGenError(): number {
		return this._fields.XfrmOutBundleGenError
	}

	public set XfrmOutBundleGenError(value: number) {
		this._fields.XfrmOutBundleGenError = value
	}

	// Bundle check error
	public get XfrmOutBundleCheckError(): number {
		return this._fields.XfrmOutBundleCheckError
	}

	public set XfrmOutBundleCheckError(value: number) {
		this._fields.XfrmOutBundleCheckError = value
	}

	// No state was found
	public get XfrmOutNoStates(): number {
		return this._fields.XfrmOutNoStates
	}

	public set XfrmOutNoStates(value: number) {
		this._fields.XfrmOutNoStates = value
	}

	// Transformation protocol specific error
	public get XfrmOutStateProtoError(): number {
		return this._fields.XfrmOutStateProtoError
	}

	public set XfrmOutStateProtoError(value: number) {
		this._fields.XfrmOutStateProtoError = value
	}

	// Transportation mode specific error
	public get XfrmOutStateModeError(): number {
		return this._fields.XfrmOutStateModeError
	}

	public set XfrmOutStateModeError(value: number) {
		this._fields.XfrmOutStateModeError = value
	}

	// Sequence error
	// i.e sequence number overflow
	public get XfrmOutStateSeqError(): number {
		return this._fields.XfrmOutStateSeqError
	}

	public set XfrmOutStateSeqError(value: number) {
		this._fields.XfrmOutStateSeqError = value
	}

	// State is expired
	public get XfrmOutStateExpired(): number {
		return this._fields.XfrmOutStateExpired
	}

	public set XfrmOutStateExpired(value: number) {
		this._fields.XfrmOutStateExpired = value
	}

	// Policy discads
	public get XfrmOutPolBlock(): number {
		return this._fields.XfrmOutPolBlock
	}

	public set XfrmOutPolBlock(value: number) {
		this._fields.XfrmOutPolBlock = value
	}

	// Policy is dead
	public get XfrmOutPolDead(): number {
		return this._fields.XfrmOutPolDead
	}

	public set XfrmOutPolDead(value: number) {
		this._fields.XfrmOutPolDead = value
	}

	// Policy Error
	public get XfrmOutPolError(): number {
		return this._fields.XfrmOutPolError
	}

	public set XfrmOutPolError(value: number) {
		this._fields.XfrmOutPolError = value
	}

	public get XfrmFwdHdrError(): number {
		return this._fields.XfrmFwdHdrError
	}

	public set XfrmFwdHdrError(value: number) {
		this._fields.XfrmFwdHdrError = value
	}

	public get XfrmOutStateInvalid(): number {
		return this._fields.XfrmOutStateInvalid
	}

	public set XfrmOutStateInvalid(value: number) {
		this._fields.XfrmOutStateInvalid = value
	}

	public get XfrmAcquireError(): number {
		return this._fields.XfrmAcquireError
	}

	public set XfrmAcquireError(value: number) {
		this._fields.XfrmAcquireError = value
	}

	public _fields: {
		XfrmInError: number
		XfrmInBufferError: number
		XfrmInHdrError: number
		XfrmInNoStates: number
		XfrmInStateProtoError: number
		XfrmInStateModeError: number
		XfrmInStateSeqError: number
		XfrmInStateExpired: number
		XfrmInStateMismatch: number
		XfrmInStateInvalid: number
		XfrmInTmplMismatch: number
		XfrmInNoPols: number
		XfrmInPolBlock: number
		XfrmInPolError: number
		XfrmOutError: number
		XfrmOutBundleGenError: number
		XfrmOutBundleCheckError: number
		XfrmOutNoStates: number
		XfrmOutStateProtoError: number
		XfrmOutStateModeError: number
		XfrmOutStateSeqError: number
		XfrmOutStateExpired: number
		XfrmOutPolBlock: number
		XfrmOutPolDead: number
		XfrmOutPolError: number
		XfrmFwdHdrError: number
		XfrmOutStateInvalid: number
		XfrmAcquireError: number
	}

	constructor(init?: Partial<{XfrmInError?: number, XfrmInBufferError?: number, XfrmInHdrError?: number, XfrmInNoStates?: number, XfrmInStateProtoError?: number, XfrmInStateModeError?: number, XfrmInStateSeqError?: number, XfrmInStateExpired?: number, XfrmInStateMismatch?: number, XfrmInStateInvalid?: number, XfrmInTmplMismatch?: number, XfrmInNoPols?: number, XfrmInPolBlock?: number, XfrmInPolError?: number, XfrmOutError?: number, XfrmOutBundleGenError?: number, XfrmOutBundleCheckError?: number, XfrmOutNoStates?: number, XfrmOutStateProtoError?: number, XfrmOutStateModeError?: number, XfrmOutStateSeqError?: number, XfrmOutStateExpired?: number, XfrmOutPolBlock?: number, XfrmOutPolDead?: number, XfrmOutPolError?: number, XfrmFwdHdrError?: number, XfrmOutStateInvalid?: number, XfrmAcquireError?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			XfrmInError: init?.XfrmInError ?? (0 as number),
			XfrmInBufferError: init?.XfrmInBufferError ?? (0 as number),
			XfrmInHdrError: init?.XfrmInHdrError ?? (0 as number),
			XfrmInNoStates: init?.XfrmInNoStates ?? (0 as number),
			XfrmInStateProtoError: init?.XfrmInStateProtoError ?? (0 as number),
			XfrmInStateModeError: init?.XfrmInStateModeError ?? (0 as number),
			XfrmInStateSeqError: init?.XfrmInStateSeqError ?? (0 as number),
			XfrmInStateExpired: init?.XfrmInStateExpired ?? (0 as number),
			XfrmInStateMismatch: init?.XfrmInStateMismatch ?? (0 as number),
			XfrmInStateInvalid: init?.XfrmInStateInvalid ?? (0 as number),
			XfrmInTmplMismatch: init?.XfrmInTmplMismatch ?? (0 as number),
			XfrmInNoPols: init?.XfrmInNoPols ?? (0 as number),
			XfrmInPolBlock: init?.XfrmInPolBlock ?? (0 as number),
			XfrmInPolError: init?.XfrmInPolError ?? (0 as number),
			XfrmOutError: init?.XfrmOutError ?? (0 as number),
			XfrmOutBundleGenError: init?.XfrmOutBundleGenError ?? (0 as number),
			XfrmOutBundleCheckError: init?.XfrmOutBundleCheckError ?? (0 as number),
			XfrmOutNoStates: init?.XfrmOutNoStates ?? (0 as number),
			XfrmOutStateProtoError: init?.XfrmOutStateProtoError ?? (0 as number),
			XfrmOutStateModeError: init?.XfrmOutStateModeError ?? (0 as number),
			XfrmOutStateSeqError: init?.XfrmOutStateSeqError ?? (0 as number),
			XfrmOutStateExpired: init?.XfrmOutStateExpired ?? (0 as number),
			XfrmOutPolBlock: init?.XfrmOutPolBlock ?? (0 as number),
			XfrmOutPolDead: init?.XfrmOutPolDead ?? (0 as number),
			XfrmOutPolError: init?.XfrmOutPolError ?? (0 as number),
			XfrmFwdHdrError: init?.XfrmFwdHdrError ?? (0 as number),
			XfrmOutStateInvalid: init?.XfrmOutStateInvalid ?? (0 as number),
			XfrmAcquireError: init?.XfrmAcquireError ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): XfrmStat {
		return new XfrmStat(this, true)
	}

	public __goscriptAssign(source: XfrmStat): void {
		const target = this._fields
		const values = source._fields
		target.XfrmInError = values.XfrmInError
		target.XfrmInBufferError = values.XfrmInBufferError
		target.XfrmInHdrError = values.XfrmInHdrError
		target.XfrmInNoStates = values.XfrmInNoStates
		target.XfrmInStateProtoError = values.XfrmInStateProtoError
		target.XfrmInStateModeError = values.XfrmInStateModeError
		target.XfrmInStateSeqError = values.XfrmInStateSeqError
		target.XfrmInStateExpired = values.XfrmInStateExpired
		target.XfrmInStateMismatch = values.XfrmInStateMismatch
		target.XfrmInStateInvalid = values.XfrmInStateInvalid
		target.XfrmInTmplMismatch = values.XfrmInTmplMismatch
		target.XfrmInNoPols = values.XfrmInNoPols
		target.XfrmInPolBlock = values.XfrmInPolBlock
		target.XfrmInPolError = values.XfrmInPolError
		target.XfrmOutError = values.XfrmOutError
		target.XfrmOutBundleGenError = values.XfrmOutBundleGenError
		target.XfrmOutBundleCheckError = values.XfrmOutBundleCheckError
		target.XfrmOutNoStates = values.XfrmOutNoStates
		target.XfrmOutStateProtoError = values.XfrmOutStateProtoError
		target.XfrmOutStateModeError = values.XfrmOutStateModeError
		target.XfrmOutStateSeqError = values.XfrmOutStateSeqError
		target.XfrmOutStateExpired = values.XfrmOutStateExpired
		target.XfrmOutPolBlock = values.XfrmOutPolBlock
		target.XfrmOutPolDead = values.XfrmOutPolDead
		target.XfrmOutPolError = values.XfrmOutPolError
		target.XfrmFwdHdrError = values.XfrmFwdHdrError
		target.XfrmOutStateInvalid = values.XfrmOutStateInvalid
		target.XfrmAcquireError = values.XfrmAcquireError
	}

	static __typeInfo = $.registerStructType(
		"procfs.XfrmStat",
		() => new XfrmStat(),
		() => [],
		XfrmStat,
		() => [/* @__PURE__ */ $.structField("XfrmInError", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("XfrmInBufferError", /* @__PURE__ */ $.basicType("int"), [1], 8, true), /* @__PURE__ */ $.structField("XfrmInHdrError", /* @__PURE__ */ $.basicType("int"), [2], 16, true), /* @__PURE__ */ $.structField("XfrmInNoStates", /* @__PURE__ */ $.basicType("int"), [3], 24, true), /* @__PURE__ */ $.structField("XfrmInStateProtoError", /* @__PURE__ */ $.basicType("int"), [4], 32, true), /* @__PURE__ */ $.structField("XfrmInStateModeError", /* @__PURE__ */ $.basicType("int"), [5], 40, true), /* @__PURE__ */ $.structField("XfrmInStateSeqError", /* @__PURE__ */ $.basicType("int"), [6], 48, true), /* @__PURE__ */ $.structField("XfrmInStateExpired", /* @__PURE__ */ $.basicType("int"), [7], 56, true), /* @__PURE__ */ $.structField("XfrmInStateMismatch", /* @__PURE__ */ $.basicType("int"), [8], 64, true), /* @__PURE__ */ $.structField("XfrmInStateInvalid", /* @__PURE__ */ $.basicType("int"), [9], 72, true), /* @__PURE__ */ $.structField("XfrmInTmplMismatch", /* @__PURE__ */ $.basicType("int"), [10], 80, true), /* @__PURE__ */ $.structField("XfrmInNoPols", /* @__PURE__ */ $.basicType("int"), [11], 88, true), /* @__PURE__ */ $.structField("XfrmInPolBlock", /* @__PURE__ */ $.basicType("int"), [12], 96, true), /* @__PURE__ */ $.structField("XfrmInPolError", /* @__PURE__ */ $.basicType("int"), [13], 104, true), /* @__PURE__ */ $.structField("XfrmOutError", /* @__PURE__ */ $.basicType("int"), [14], 112, true), /* @__PURE__ */ $.structField("XfrmOutBundleGenError", /* @__PURE__ */ $.basicType("int"), [15], 120, true), /* @__PURE__ */ $.structField("XfrmOutBundleCheckError", /* @__PURE__ */ $.basicType("int"), [16], 128, true), /* @__PURE__ */ $.structField("XfrmOutNoStates", /* @__PURE__ */ $.basicType("int"), [17], 136, true), /* @__PURE__ */ $.structField("XfrmOutStateProtoError", /* @__PURE__ */ $.basicType("int"), [18], 144, true), /* @__PURE__ */ $.structField("XfrmOutStateModeError", /* @__PURE__ */ $.basicType("int"), [19], 152, true), /* @__PURE__ */ $.structField("XfrmOutStateSeqError", /* @__PURE__ */ $.basicType("int"), [20], 160, true), /* @__PURE__ */ $.structField("XfrmOutStateExpired", /* @__PURE__ */ $.basicType("int"), [21], 168, true), /* @__PURE__ */ $.structField("XfrmOutPolBlock", /* @__PURE__ */ $.basicType("int"), [22], 176, true), /* @__PURE__ */ $.structField("XfrmOutPolDead", /* @__PURE__ */ $.basicType("int"), [23], 184, true), /* @__PURE__ */ $.structField("XfrmOutPolError", /* @__PURE__ */ $.basicType("int"), [24], 192, true), /* @__PURE__ */ $.structField("XfrmFwdHdrError", /* @__PURE__ */ $.basicType("int"), [25], 200, true), /* @__PURE__ */ $.structField("XfrmOutStateInvalid", /* @__PURE__ */ $.basicType("int"), [26], 208, true), /* @__PURE__ */ $.structField("XfrmAcquireError", /* @__PURE__ */ $.basicType("int"), [27], 216, true)]
	)
}

export async function NewXfrmStat(): globalThis.Promise<[XfrmStat, $.GoError]> {
	let [fs, err] = await __goscript_fs.NewFS("/proc")
	if (err != null) {
		return [new XfrmStat(undefined, true), err]
	}

	return fs.NewXfrmStat()
}
