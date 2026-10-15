// Generated file based on hosts.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as bytealg from "@goscript/internal/bytealg/index.js"

import * as fs from "@goscript/io/fs/index.js"

import * as netip from "@goscript/net/netip/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as os from "@goscript/os/index.js"

import * as __goscript_dnsclient from "./dnsclient.gs.ts"

import * as __goscript_hook_unix from "./hook_unix.gs.ts"

import * as __goscript_parse from "./parse.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/internal/bytealg/index.js"
import "@goscript/io/fs/index.js"
import "@goscript/net/netip/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/os/index.js"
import "./dnsclient.gs.ts"
import "./hook_unix.gs.ts"
import "./parse.gs.ts"

export class byName {
	public get addrs(): $.Slice<string> {
		return this._fields.addrs
	}

	public set addrs(value: $.Slice<string>) {
		this._fields.addrs = value
	}

	public get canonicalName(): string {
		return this._fields.canonicalName
	}

	public set canonicalName(value: string) {
		this._fields.canonicalName = value
	}

	public _fields: {
		addrs: $.Slice<string>
		canonicalName: string
	}

	constructor(init?: Partial<{addrs?: $.Slice<string>, canonicalName?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			addrs: init?.addrs ?? (null! as $.Slice<string>),
			canonicalName: init?.canonicalName ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): byName {
		return new byName(this, true)
	}

	public __goscriptAssign(source: byName): void {
		const target = this._fields
		const values = source._fields
		target.addrs = values.addrs
		target.canonicalName = values.canonicalName
	}

	static __typeInfo = $.registerStructType(
		"net.byName",
		() => new byName(),
		() => [],
		byName,
		() => [/* @__PURE__ */ $.structField("addrs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("canonicalName", /* @__PURE__ */ $.basicType("string"), [1], 24, false, { pkgPath: "net" })]
	)
}

export const cacheMaxAge: time.Duration = 5000000000n

export function parseLiteralIP(addr: string): string {
	let [ip, err] = netip.ParseAddr(addr)
	if (err != null) {
		return ""
	}
	return ip.String()
}

export let hosts: $.VarRef<{"Mutex": sync.Mutex, "byName": globalThis.Map<string, byName> | null, "byAddr": globalThis.Map<string, $.Slice<string>> | null, "expire": time.Time, "path": string, "mtime": time.Time, "size": bigint}> = $.varRef($.anonymousStructValue({"Mutex": $.markAsStructValue(new sync.Mutex()), "byName": null, "byAddr": null, "expire": $.markAsStructValue(new time.Time()), "path": "", "mtime": $.markAsStructValue(new time.Time()), "size": 0n}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Mutex", "sync.Mutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("byName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "net.byName"), [1], 8, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("byAddr", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))), [2], 16, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("expire", "time.Time", [3], 24, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("path", /* @__PURE__ */ $.basicType("string"), [4], 48, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("mtime", "time.Time", [5], 64, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("size", /* @__PURE__ */ $.basicType("int64"), [6], 88, false, { pkgPath: "net" })] }))

export function __goscript_set_hosts(__goscriptValue: {"Mutex": sync.Mutex, "byName": globalThis.Map<string, byName> | null, "byAddr": globalThis.Map<string, $.Slice<string>> | null, "expire": time.Time, "path": string, "mtime": time.Time, "size": bigint}): void {
	$.assignStruct(hosts.value, __goscriptValue)
}

export async function readHosts(): globalThis.Promise<void> {
	await using __defer = new $.AsyncDisposableStack()
	let now = $.markAsStructValue($.cloneStructValue(time.Now()))
	let hp = __goscript_hook_unix.hostsFilePath

	if (($.markAsStructValue($.cloneStructValue(now)).Before($.markAsStructValue($.cloneStructValue(hosts.value.expire))) && ($.stringEqual(hosts.value.path, hp))) && ($.len(hosts.value.byName) > 0)) {
		return
	}
	let [mtime, size, err] = await __goscript_parse.stat(hp)
	if ((((err == null) && ($.stringEqual(hosts.value.path, hp))) && $.markAsStructValue($.cloneStructValue(hosts.value.mtime)).Equal($.markAsStructValue($.cloneStructValue(mtime)))) && (hosts.value.size == size)) {
		$.assignStruct(hosts.value.expire, $.markAsStructValue($.cloneStructValue(now)).Add(5000000000n))
		return
	}

	let hs: globalThis.Map<string, byName> | null = $.makeMap<string, byName>()
	let _is: globalThis.Map<string, $.Slice<string>> | null = $.makeMap<string, $.Slice<string>>()

	let __goscriptTuple0: any = await __goscript_parse.open(hp)
	let __goscriptShadow0: __goscript_parse.file | $.VarRef<__goscript_parse.file> | null = __goscriptTuple0[0]
	err = __goscriptTuple0[1]
	if (err != null) {
		if (!errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(fs.ErrNotExist)!) && !errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(fs.ErrPermission)!)) {
			return
		}
	}

	if (__goscriptShadow0 != null) {
		__defer.defer(async () => { await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as __goscript_parse.file).close() : __goscript_parse.file.prototype.close.call(__goscriptShadow0)) })
		for (let [line, ok] = await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as __goscript_parse.file).readLine() : __goscript_parse.file.prototype.readLine.call(__goscriptShadow0)); ok; [line, ok] = await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as __goscript_parse.file).readLine() : __goscript_parse.file.prototype.readLine.call(__goscriptShadow0))) {
			{
				let i: number = bytealg.IndexByteString(line, 35)
				if (i >= 0) {
					// Discard comments.
					line = $.sliceStringOrBytes(line, 0, i)
				}
			}
			let f: $.Slice<string> = __goscript_parse.getFields(line)
			if ($.sliceLen(f) < 2) {
				continue
			}
			let addr = parseLiteralIP($.arrayIndex(f!, 0))
			if ($.stringEqual(addr, "")) {
				continue
			}

			let canonical: string = ""
			for (let __goscriptSliceWindow0 = $.sliceRange(f), i = 1; i < __goscriptSliceWindow0.length; i++) {
				let name = __goscript_dnsclient.absDomainName(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string))
				let h: $.Slice<number> = $.stringToBytes(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string))
				__goscript_parse.lowerASCIIBytes(h)
				let key = __goscript_dnsclient.absDomainName($.bytesToString(h))

				if (i == 1) {
					canonical = key
				}

				$.mapSet(_is, addr, $.appendOne($.mapGet<string, $.Slice<string>, $.Slice<string>>(_is, addr, null)[0], name))

				{
					let [v, __goscriptShadow1] = $.mapGet<string, byName, byName>(hs, key, new byName(undefined, true))
					if (__goscriptShadow1) {
						$.mapSet(hs, key, new byName({addrs: $.appendOne(v.addrs, addr), canonicalName: v.canonicalName}, true))
						continue
					}
				}

				$.mapSet(hs, key, new byName({addrs: $.arrayToSlice<string>([addr]), canonicalName: canonical}, true))
			}
		}
	}
	// Update the data cache.
	$.assignStruct(hosts.value.expire, $.markAsStructValue($.cloneStructValue(now)).Add(5000000000n))
	hosts.value.path = hp
	hosts.value.byName = hs
	hosts.value.byAddr = _is
	$.assignStruct(hosts.value.mtime, mtime)
	hosts.value.size = size
}

export async function lookupStaticHost(host: string): globalThis.Promise<[$.Slice<string>, string]> {
	using __defer = new $.DisposableStack()
	await hosts.value.Mutex.Lock()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())(hosts.value.Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })
	await readHosts()
	if ($.len(hosts.value.byName) != 0) {
		if (__goscript_parse.hasUpperCase(host)) {
			let lowerHost: $.Slice<number> = $.stringToBytes(host)
			__goscript_parse.lowerASCIIBytes(lowerHost)
			host = $.bytesToString(lowerHost)
		}
		{
			let __goscriptTuple1: any = $.mapGet<string, byName, byName>(hosts.value.byName, __goscript_dnsclient.absDomainName(host), new byName(undefined, true))
			let __goscriptShadow2 = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				let ipsCp: $.Slice<string> = $.makeSlice<string>($.sliceLen(__goscriptShadow2.addrs), undefined, "string")
				$.copy(ipsCp, __goscriptShadow2.addrs)
				return [ipsCp, __goscriptShadow2.canonicalName]
			}
		}
	}
	return [null, ""]
}

export async function lookupStaticAddr(addr: string): globalThis.Promise<$.Slice<string>> {
	using __defer = new $.DisposableStack()
	await hosts.value.Mutex.Lock()
	const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())(hosts.value.Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee1() })
	await readHosts()
	addr = parseLiteralIP(addr)
	if ($.stringEqual(addr, "")) {
		return null
	}
	if ($.len(hosts.value.byAddr) != 0) {
		let __goscriptShadow3 = hosts.value
		{
			let __goscriptTuple2: any = $.mapGet<string, $.Slice<string>, $.Slice<string>>(__goscriptShadow3.byAddr, addr, null)
			let __goscriptShadow4: $.Slice<string> = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (ok) {
				let hostsCp: $.Slice<string> = $.makeSlice<string>($.sliceLen(__goscriptShadow4), undefined, "string")
				$.copy(hostsCp, __goscriptShadow4)
				return hostsCp
			}
		}
	}
	return null
}
