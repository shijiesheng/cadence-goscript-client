// Generated file based on dnsconfig.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as bytealg from "@goscript/internal/bytealg/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as strconv from "@goscript/internal/strconv/index.js"

import * as stringslite from "@goscript/internal/stringslite/index.js"

import * as io from "@goscript/io/index.js"

import * as os from "@goscript/os/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as dnsmessage from "@goscript/vendor/golang.org/x/net/dns/dnsmessage/index.js"

import "@goscript/unsafe/index.js"

import type * as singleflight from "@goscript/internal/singleflight/index.js"

import type * as fs from "@goscript/io/fs/index.js"

import * as __goscript_dnsclient_unix from "./dnsclient_unix.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/internal/bytealg/index.js"
import "@goscript/internal/godebug/index.js"
import "@goscript/internal/strconv/index.js"
import "@goscript/internal/stringslite/index.js"
import "@goscript/io/index.js"
import "@goscript/os/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/vendor/golang.org/x/net/dns/dnsmessage/index.js"
import "./dnsclient_unix.gs.ts"

export class dnsConfig {
	public get servers(): $.Slice<string> {
		return this._fields.servers
	}

	public set servers(value: $.Slice<string>) {
		this._fields.servers = value
	}

	public get search(): $.Slice<string> {
		return this._fields.search
	}

	public set search(value: $.Slice<string>) {
		this._fields.search = value
	}

	public get ndots(): number {
		return this._fields.ndots
	}

	public set ndots(value: number) {
		this._fields.ndots = value
	}

	public get timeout(): time.Duration {
		return this._fields.timeout
	}

	public set timeout(value: time.Duration) {
		this._fields.timeout = value
	}

	public get attempts(): number {
		return this._fields.attempts
	}

	public set attempts(value: number) {
		this._fields.attempts = value
	}

	public get rotate(): boolean {
		return this._fields.rotate
	}

	public set rotate(value: boolean) {
		this._fields.rotate = value
	}

	public get unknownOpt(): boolean {
		return this._fields.unknownOpt
	}

	public set unknownOpt(value: boolean) {
		this._fields.unknownOpt = value
	}

	public get lookup(): $.Slice<string> {
		return this._fields.lookup
	}

	public set lookup(value: $.Slice<string>) {
		this._fields.lookup = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get mtime(): time.Time {
		return this._fields.mtime
	}

	public set mtime(value: time.Time) {
		this._fields.mtime = value
	}

	public get soffset(): number {
		return this._fields.soffset
	}

	public set soffset(value: number) {
		this._fields.soffset = value
	}

	public get singleRequest(): boolean {
		return this._fields.singleRequest
	}

	public set singleRequest(value: boolean) {
		this._fields.singleRequest = value
	}

	public get useTCP(): boolean {
		return this._fields.useTCP
	}

	public set useTCP(value: boolean) {
		this._fields.useTCP = value
	}

	public get trustAD(): boolean {
		return this._fields.trustAD
	}

	public set trustAD(value: boolean) {
		this._fields.trustAD = value
	}

	public get noReload(): boolean {
		return this._fields.noReload
	}

	public set noReload(value: boolean) {
		this._fields.noReload = value
	}

	public _fields: {
		servers: $.Slice<string>
		search: $.Slice<string>
		ndots: number
		timeout: time.Duration
		attempts: number
		rotate: boolean
		unknownOpt: boolean
		lookup: $.Slice<string>
		err: $.GoError
		mtime: time.Time
		soffset: number
		singleRequest: boolean
		useTCP: boolean
		trustAD: boolean
		noReload: boolean
	}

	constructor(init?: Partial<{servers?: $.Slice<string>, search?: $.Slice<string>, ndots?: number, timeout?: time.Duration, attempts?: number, rotate?: boolean, unknownOpt?: boolean, lookup?: $.Slice<string>, err?: $.GoError, mtime?: time.Time, soffset?: number, singleRequest?: boolean, useTCP?: boolean, trustAD?: boolean, noReload?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			servers: init?.servers ?? (null! as $.Slice<string>),
			search: init?.search ?? (null! as $.Slice<string>),
			ndots: init?.ndots ?? (0 as number),
			timeout: init?.timeout ?? (0n as time.Duration),
			attempts: init?.attempts ?? (0 as number),
			rotate: init?.rotate ?? (false as boolean),
			unknownOpt: init?.unknownOpt ?? (false as boolean),
			lookup: init?.lookup ?? (null! as $.Slice<string>),
			err: init?.err ?? (null! as $.GoError),
			mtime: init?.mtime ? $.markAsStructValue($.cloneStructValue(init.mtime)) : $.markAsStructValue(new time.Time()),
			soffset: init?.soffset ?? (0 as number),
			singleRequest: init?.singleRequest ?? (false as boolean),
			useTCP: init?.useTCP ?? (false as boolean),
			trustAD: init?.trustAD ?? (false as boolean),
			noReload: init?.noReload ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dnsConfig {
		return new dnsConfig(this, true)
	}

	public __goscriptAssign(source: dnsConfig): void {
		const target = this._fields
		const values = source._fields
		target.servers = values.servers
		target.search = values.search
		target.ndots = values.ndots
		target.timeout = values.timeout
		target.attempts = values.attempts
		target.rotate = values.rotate
		target.unknownOpt = values.unknownOpt
		target.lookup = values.lookup
		target.err = $.assignFieldValue(target.err, values.err, "error")
		$.assignStruct(target.mtime, values.mtime)
		target.soffset = values.soffset
		target.singleRequest = values.singleRequest
		target.useTCP = values.useTCP
		target.trustAD = values.trustAD
		target.noReload = values.noReload
	}

	public isDefaultNS(): boolean {
		const c: dnsConfig | $.VarRef<dnsConfig> | null = this;
		const c$: dnsConfig = c == null ? $.pointerTarget<dnsConfig>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<dnsConfig>(c)
		return ($.sliceLen((c$ as dnsConfig).servers) == $.sliceLen(__goscript_get_defaultNS())) && ($.indexAddress((c$ as dnsConfig).servers!, 0) == $.indexAddress(__goscript_get_defaultNS()!, 0))
	}

	public nameList(name: string): $.Slice<string> {
		const conf: dnsConfig | $.VarRef<dnsConfig> | null = this;
		const conf$: dnsConfig = conf == null ? $.pointerTarget<dnsConfig>(conf) : (conf as any).__isVarRef === true ? (conf as any).value : (conf as any).__goValue === undefined ? (conf as any) : $.pointerTarget<dnsConfig>(conf)

		let rooted = ($.stringLen(name) > 0) && ($.indexString(name, $.stringLen(name) - 1) == 46)
		if (($.stringLen(name) > 254) || (($.stringLen(name) == 254) && !rooted)) {
			return null
		}

		if (rooted) {
			if (__goscript_dnsclient_unix.avoidDNS(name)) {
				return null
			}
			return $.arrayToSlice<string>([name])
		}

		let hasNdots = bytealg.CountString(name, 46) >= (conf$ as dnsConfig).ndots
		name = $.concatString(name, ".")

		let names: $.Slice<string> = $.makeSlice<string>(0, 1 + $.sliceLen((conf$ as dnsConfig).search), "string")

		if (hasNdots && !__goscript_dnsclient_unix.avoidDNS(name)) {
			names = $.appendOne(names, name)
		}

		for (let __goscriptRangeTarget0 = (conf$ as dnsConfig).search, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let suffix = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
			let fqdn = $.concatString(name, suffix)
			if (!__goscript_dnsclient_unix.avoidDNS(fqdn) && ($.stringLen(fqdn) <= 254)) {
				names = $.appendOne(names, fqdn)
			}
		}

		if (!hasNdots && !__goscript_dnsclient_unix.avoidDNS(name)) {
			names = $.appendOne(names, name)
		}
		return names
	}

	public serverOffset(): number {
		const c: dnsConfig | $.VarRef<dnsConfig> | null = this;
		const c$: dnsConfig = c == null ? $.pointerTarget<dnsConfig>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<dnsConfig>(c)
		if ((c$ as dnsConfig).rotate) {
			return $.uint(((atomic.AddUint32($.fieldRef((c$ as dnsConfig)._fields, "soffset"), 1) - 1) >>> 0), 32)
		}
		return 0
	}

	static __typeInfo = $.registerStructType(
		"net.dnsConfig",
		() => new dnsConfig(),
		() => [$.methodSignature("isDefaultNS", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("nameList", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("serverOffset", [], [/* @__PURE__ */ $.basicType("uint32")], true)],
		dnsConfig,
		() => [/* @__PURE__ */ $.structField("servers", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("search", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [1], 24, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("ndots", /* @__PURE__ */ $.basicType("int"), [2], 48, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 56, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("attempts", /* @__PURE__ */ $.basicType("int"), [4], 64, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("rotate", /* @__PURE__ */ $.basicType("bool"), [5], 72, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("unknownOpt", /* @__PURE__ */ $.basicType("bool"), [6], 73, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("lookup", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [7], 80, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("err", "error", [8], 104, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("mtime", "time.Time", [9], 120, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("soffset", /* @__PURE__ */ $.basicType("uint32"), [10], 144, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("singleRequest", /* @__PURE__ */ $.basicType("bool"), [11], 148, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("useTCP", /* @__PURE__ */ $.basicType("bool"), [12], 149, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("trustAD", /* @__PURE__ */ $.basicType("bool"), [13], 150, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("noReload", /* @__PURE__ */ $.basicType("bool"), [14], 151, false, { pkgPath: "net" })]
	)
}

export var defaultNS: $.Slice<string>

export function __goscript_init_defaultNS(): void {
	if (((defaultNS) as any) === undefined) {
		defaultNS = $.arrayToSlice<string>(["127.0.0.1:53", "[::1]:53"])
	}
}

export function __goscript_get_defaultNS(): $.Slice<string> {
	if (((defaultNS) as any) === undefined) {
		__goscript_init_defaultNS()
	}
	return defaultNS
}

export function __goscript_set_defaultNS(__goscriptValue: $.Slice<string>): void {
	defaultNS = __goscriptValue
}

export var getHostname: (() => [string, $.GoError] | globalThis.Promise<[string, $.GoError]>) | null

export function __goscript_init_getHostname(): void {
	if (((getHostname) as any) === undefined) {
		getHostname = os.Hostname
	}
}

export function __goscript_get_getHostname(): (() => [string, $.GoError] | globalThis.Promise<[string, $.GoError]>) | null {
	if (((getHostname) as any) === undefined) {
		__goscript_init_getHostname()
	}
	return getHostname
}

export function __goscript_set_getHostname(__goscriptValue: (() => [string, $.GoError] | globalThis.Promise<[string, $.GoError]>) | null): void {
	getHostname = __goscriptValue
}
