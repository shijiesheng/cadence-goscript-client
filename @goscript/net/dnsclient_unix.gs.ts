// Generated file based on dnsclient_unix.go
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

import * as singleflight from "@goscript/internal/singleflight/index.js"

import * as fs from "@goscript/io/fs/index.js"

import type * as netip from "@goscript/net/netip/index.js"

import type * as syscall from "@goscript/syscall/index.js"

import * as __goscript_addrselect from "./addrselect.gs.ts"

import type * as __goscript_dial from "./dial.gs.ts"

import * as __goscript_dnsclient from "./dnsclient.gs.ts"

import * as __goscript_dnsconfig from "./dnsconfig.gs.ts"

import * as __goscript_dnsconfig_unix from "./dnsconfig_unix.gs.ts"

import * as __goscript_hosts from "./hosts.gs.ts"

import * as __goscript_ip from "./ip.gs.ts"

import * as __goscript_iprawsock from "./iprawsock.gs.ts"

import * as __goscript_iprawsock_posix from "./iprawsock_posix.gs.ts"

import * as __goscript_ipsock from "./ipsock.gs.ts"

import * as __goscript_lookup from "./lookup.gs.ts"

import type * as __goscript_lookup_unix from "./lookup_unix.gs.ts"

import * as __goscript_net from "./net.gs.ts"

import * as __goscript_parse from "./parse.gs.ts"

import type * as __goscript_sockaddr_posix from "./sockaddr_posix.gs.ts"
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
import "@goscript/internal/singleflight/index.js"
import "@goscript/io/fs/index.js"
import "./addrselect.gs.ts"
import "./dnsclient.gs.ts"
import "./dnsconfig.gs.ts"
import "./dnsconfig_unix.gs.ts"
import "./hosts.gs.ts"
import "./ip.gs.ts"
import "./iprawsock.gs.ts"
import "./iprawsock_posix.gs.ts"
import "./ipsock.gs.ts"
import "./lookup.gs.ts"
import "./net.gs.ts"
import "./parse.gs.ts"

export type hostLookupOrder = number

$.registerNamedValueType(
	"net.hostLookupOrder",
	{String: (receiver: any, ...args: any[]) => (hostLookupOrder_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*net.hostLookupOrder",
	{String: (receiver: any, ...args: any[]) => (hostLookupOrder_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class resolverConfig {
	public get initOnce(): sync.Once {
		return this._fields.initOnce
	}

	public set initOnce(value: sync.Once) {
		this._fields.initOnce = value
	}

	// ch is used as a semaphore that only allows one lookup at a
	// time to recheck resolv.conf.
	public get ch(): $.Channel<{}> | null {
		return this._fields.ch
	}

	public set ch(value: $.Channel<{}> | null) {
		this._fields.ch = value
	}

	public get lastChecked(): time.Time {
		return this._fields.lastChecked
	}

	public set lastChecked(value: time.Time) {
		this._fields.lastChecked = value
	}

	public get dnsConfig(): atomic.Pointer<__goscript_dnsconfig.dnsConfig> {
		return this._fields.dnsConfig
	}

	public set dnsConfig(value: atomic.Pointer<__goscript_dnsconfig.dnsConfig>) {
		this._fields.dnsConfig = value
	}

	public _fields: {
		initOnce: sync.Once
		ch: $.Channel<{}> | null
		lastChecked: time.Time
		dnsConfig: atomic.Pointer<__goscript_dnsconfig.dnsConfig>
	}

	constructor(init?: Partial<{initOnce?: sync.Once, ch?: $.Channel<{}> | null, lastChecked?: time.Time, dnsConfig?: atomic.Pointer<__goscript_dnsconfig.dnsConfig>}>, __goscriptValue?: boolean) {
		this._fields = {
			initOnce: init?.initOnce ? $.markAsStructValue($.cloneStructValue(init.initOnce)) : $.markAsStructValue(new sync.Once()),
			ch: init?.ch ?? (null! as $.Channel<{}> | null),
			lastChecked: init?.lastChecked ? $.markAsStructValue($.cloneStructValue(init.lastChecked)) : $.markAsStructValue(new time.Time()),
			dnsConfig: init?.dnsConfig ? $.markAsStructValue($.cloneStructValue(init.dnsConfig)) : $.markAsStructValue(new atomic.Pointer<__goscript_dnsconfig.dnsConfig>())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): resolverConfig {
		return new resolverConfig(this, true)
	}

	public __goscriptAssign(source: resolverConfig): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.initOnce, values.initOnce)
		target.ch = values.ch
		$.assignStruct(target.lastChecked, values.lastChecked)
		$.assignStruct(target.dnsConfig, values.dnsConfig)
	}

	public async init(): globalThis.Promise<void> {
		let conf: resolverConfig | $.VarRef<resolverConfig> | null = this;
		const conf$: resolverConfig = conf == null ? $.pointerTarget<resolverConfig>(conf) : (conf as any).__isVarRef === true ? (conf as any).value : (conf as any).__goValue === undefined ? (conf as any) : $.pointerTarget<resolverConfig>(conf)
		// Set dnsConfig and lastChecked so we don't parse
		// resolv.conf twice the first time.
		void (conf$ as resolverConfig).dnsConfig.Store(await __goscript_dnsconfig_unix.dnsReadConfig("/etc/resolv.conf"))
		$.assignStruct((conf$ as resolverConfig).lastChecked, time.Now());

		// Prepare ch so that only one update of resolverConfig may
		// run at once.
		;(conf$ as resolverConfig).ch = $.makeChannel<{}>(1, {}, "both")
	}

	public async releaseSema(): globalThis.Promise<void> {
		const conf: resolverConfig | $.VarRef<resolverConfig> | null = this;
		await $.chanRecv($.pointerValue<resolverConfig>(conf).ch)
	}

	public async tryAcquireSema(): globalThis.Promise<boolean> {
		const conf: resolverConfig | $.VarRef<resolverConfig> | null = this;
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, boolean>([
			{
				id: 0,
				isSend: true,
				channel: $.pointerValue<resolverConfig>(conf).ch,
				value: {},
				onSelected: async (__goscriptSelect0Result) => {
					return true
				}
			},
			{
				id: -1,
				isSend: false,
				channel: null,
				onSelected: async (__goscriptSelect0Result) => {
					return false
				}
			}
		], true)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async tryUpdate(name: string): globalThis.Promise<void> {
		let conf: resolverConfig | $.VarRef<resolverConfig> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const conf$: resolverConfig = conf == null ? $.pointerTarget<resolverConfig>(conf) : (conf as any).__isVarRef === true ? (conf as any).value : (conf as any).__goValue === undefined ? (conf as any) : $.pointerTarget<resolverConfig>(conf)
		await (conf$ as resolverConfig).initOnce.Do($.functionValue(((__receiver) => () => __receiver.init())((conf$ as resolverConfig)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "net.(*resolverConfig).init-fm"))

		let dc: __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null = ((conf$ as resolverConfig).dnsConfig.Load() as __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null)
		let dc$: __goscript_dnsconfig.dnsConfig = dc == null ? $.pointerTarget<__goscript_dnsconfig.dnsConfig>(dc) : (dc as any).__isVarRef === true ? (dc as any).value : (dc as any).__goValue === undefined ? (dc as any) : $.pointerTarget<__goscript_dnsconfig.dnsConfig>(dc)

		// Currently we should never have a config that does not have any
		// available servers to query, since in such cases the servers field
		// is set to [defaultNS], see dnsReadConfig.
		// This assertion main purpose is for testing, such that we never set
		// the mocked dnsConfig in such way.
		if ($.sliceLen((dc$ as __goscript_dnsconfig.dnsConfig).servers) == 0) {
			$.panic("unreachable")
		}

		if ((dc$ as __goscript_dnsconfig.dnsConfig).noReload) {
			return
		}

		// Ensure only one update at a time checks resolv.conf.
		if (!await (conf !== null && (conf as any).__isVarRef !== true && (conf as any).__goValue === undefined ? ((conf as any) as resolverConfig).tryAcquireSema() : resolverConfig.prototype.tryAcquireSema.call(conf))) {
			return
		}
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.releaseSema())((conf$ as resolverConfig)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "net.(*resolverConfig).releaseSema-fm")
		__defer.defer(async () => { await __goscriptDeferCallee0() })

		let now = $.markAsStructValue($.cloneStructValue(time.Now()))

		// Only recheck the resolv.conf when:
		// - expired (last re-check was more that 5 seconds ago)
		// - the default nameservers are used (the last parse could not load
		//   resolv.conf, or it did not contain any nameservers)
		// - rechecks are not disabled (only possible in case of testing)
		//
		// Note: We only do one check at a time. Other concurrent requests might
		// still use the previous (outdated) version of the configuration file.
		let expired = $.markAsStructValue($.cloneStructValue(now)).After($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((conf$ as resolverConfig).lastChecked)).Add(5000000000n))))
		let rechecksEnabled = !$.structEqual((conf$ as resolverConfig).lastChecked, distantFuture)
		let recheck = (expired || (dc !== null && (dc as any).__isVarRef !== true && (dc as any).__goValue === undefined ? ((dc as any) as __goscript_dnsconfig.dnsConfig).isDefaultNS() : __goscript_dnsconfig.dnsConfig.prototype.isDefaultNS.call(dc))) && rechecksEnabled
		if (!recheck) {
			return
		}
		$.assignStruct((conf$ as resolverConfig).lastChecked, now)

		switch ((runtime.GOOS as string)) {
			case "windows":
			{
				break
			}
			default:
			{
				let mtime: time.Time = $.markAsStructValue(new time.Time())
				{
					let [fi, err] = await os.Stat(name)
					if (err == null) {
						mtime = $.assignStruct(mtime, ((__goscriptAwait = (fi !== null && (fi as any).__isVarRef !== true && (fi as any).__goValue === undefined ? (fi as Exclude<fs.FileInfo, null>) : $.pointerValue<Exclude<fs.FileInfo, null>>(fi)).ModTime(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))
					}
				}
				if ($.markAsStructValue($.cloneStructValue(mtime)).Equal($.markAsStructValue($.cloneStructValue($.pointerValue<__goscript_dnsconfig.dnsConfig>((conf$ as resolverConfig).dnsConfig.Load()).mtime)))) {
					return
				}
				break
			}
		}

		let dnsConf: __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null = await __goscript_dnsconfig_unix.dnsReadConfig(name)
		void (conf$ as resolverConfig).dnsConfig.Store(dnsConf)
	}

	static __typeInfo = $.registerStructType(
		"net.resolverConfig",
		() => new resolverConfig(),
		() => [$.methodSignature("init", [], [], true), $.methodSignature("releaseSema", [], [], true), $.methodSignature("tryAcquireSema", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("tryUpdate", [["name", /* @__PURE__ */ $.basicType("string")]], [], true)],
		resolverConfig,
		() => [/* @__PURE__ */ $.structField("initOnce", "sync.Once", [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("ch", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [1], 16, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("lastChecked", "time.Time", [2], 24, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("dnsConfig", "atomic.Pointer", [3], 48, false, { pkgPath: "net" })]
	)
}

export const useTCPOnly: boolean = true

export const useUDPOrTCP: boolean = false

export const maxDNSPacketSize: number = 1232

export const hostLookupCgo: hostLookupOrder = 0

export const hostLookupFilesDNS: hostLookupOrder = 1

export const hostLookupDNSFiles: hostLookupOrder = 2

export const hostLookupFiles: hostLookupOrder = 3

export const hostLookupDNS: hostLookupOrder = 4

export let errLameReferral: $.GoError = errors.New("lame referral")

export function __goscript_set_errLameReferral(__goscriptValue: $.GoError): void {
	errLameReferral = __goscriptValue
}

export let errCannotUnmarshalDNSMessage: $.GoError = errors.New("cannot unmarshal DNS message")

export function __goscript_set_errCannotUnmarshalDNSMessage(__goscriptValue: $.GoError): void {
	errCannotUnmarshalDNSMessage = __goscriptValue
}

export let errCannotMarshalDNSMessage: $.GoError = errors.New("cannot marshal DNS message")

export function __goscript_set_errCannotMarshalDNSMessage(__goscriptValue: $.GoError): void {
	errCannotMarshalDNSMessage = __goscriptValue
}

export let errServerMisbehaving: $.GoError = errors.New("server misbehaving")

export function __goscript_set_errServerMisbehaving(__goscriptValue: $.GoError): void {
	errServerMisbehaving = __goscriptValue
}

export let errInvalidDNSResponse: $.GoError = errors.New("invalid DNS response")

export function __goscript_set_errInvalidDNSResponse(__goscriptValue: $.GoError): void {
	errInvalidDNSResponse = __goscriptValue
}

export let errNoAnswerFromDNSServer: $.GoError = errors.New("no answer from DNS server")

export function __goscript_set_errNoAnswerFromDNSServer(__goscriptValue: $.GoError): void {
	errNoAnswerFromDNSServer = __goscriptValue
}

export var errServerTemporarilyMisbehaving: __goscript_net.temporaryError | $.VarRef<__goscript_net.temporaryError> | null

export function __goscript_init_errServerTemporarilyMisbehaving(): void {
	if (((errServerTemporarilyMisbehaving) as any) === undefined) {
		errServerTemporarilyMisbehaving = new __goscript_net.temporaryError({s: "server misbehaving"})
	}
}

export function __goscript_get_errServerTemporarilyMisbehaving(): __goscript_net.temporaryError | $.VarRef<__goscript_net.temporaryError> | null {
	if (((errServerTemporarilyMisbehaving) as any) === undefined) {
		__goscript_init_errServerTemporarilyMisbehaving()
	}
	return errServerTemporarilyMisbehaving
}

export function __goscript_set_errServerTemporarilyMisbehaving(__goscriptValue: __goscript_net.temporaryError | $.VarRef<__goscript_net.temporaryError> | null): void {
	errServerTemporarilyMisbehaving = __goscriptValue
}

export let netedns0: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("netedns0")

export function __goscript_set_netedns0(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	netedns0 = __goscriptValue
}

export function newRequest(q: dnsmessage.Question, ad: boolean): [number, $.Slice<number>, $.Slice<number>, $.GoError] {
	let id: number = 0
	let udpReq: $.Slice<number> = null! as $.Slice<number>
	let tcpReq: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	id = $.uint(__goscript_dnsclient.randInt(), 16)
	let b = $.varRef(dnsmessage.NewBuilder($.makeSlice<number>(2, 514, "byte"), new dnsmessage.Header({ID: id, RecursionDesired: true, AuthenticData: ad}, true)))
	{
		let __goscriptShadow0 = b.value.StartQuestions()
		if (__goscriptShadow0 != null) {
			return [0, null, null, __goscriptShadow0]
		}
	}
	{
		let __goscriptShadow1 = b.value.Question((q).clone())
		if (__goscriptShadow1 != null) {
			return [0, null, null, __goscriptShadow1]
		}
	}

	if ($.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(netedns0)), "0")) {
		godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(netedns0))
	} else {
		// Accept packets up to maxDNSPacketSize.  RFC 6891.
		{
			let __goscriptShadow2 = b.value.StartAdditionals()
			if (__goscriptShadow2 != null) {
				return [0, null, null, __goscriptShadow2]
			}
		}
		let rh: $.VarRef<dnsmessage.ResourceHeader> = $.varRef(new dnsmessage.ResourceHeader(undefined, true))
		{
			let __goscriptShadow3 = rh.value.SetEDNS0(1232, 0, false)
			if (__goscriptShadow3 != null) {
				return [0, null, null, __goscriptShadow3]
			}
		}
		{
			let __goscriptShadow4 = b.value.OPTResource((rh.value).clone(), new dnsmessage.OPTResource(undefined, true))
			if (__goscriptShadow4 != null) {
				return [0, null, null, __goscriptShadow4]
			}
		}
	}

	let __goscriptTuple0: any = b.value.Finish()
	tcpReq = __goscriptTuple0[0]
	err = __goscriptTuple0[1]
	if (err != null) {
		return [0, null, null, err]
	}
	udpReq = $.goSlice(tcpReq, 2, undefined)
	let l = $.sliceLen(tcpReq) - 2
	$.sliceElems(tcpReq!)[$.sliceSlot(tcpReq!, 0)] = $.uint(l >> 8, 8)
	$.sliceElems(tcpReq!)[$.sliceSlot(tcpReq!, 1)] = $.uint(l, 8)
	return [id, udpReq, tcpReq, null]
}

export function checkResponse(reqID: number, reqQues: dnsmessage.Question, respHdr: dnsmessage.Header, respQues: dnsmessage.Question): boolean {
	if (!respHdr.Response) {
		return false
	}
	if (reqID != respHdr.ID) {
		return false
	}
	if (((reqQues.Type != respQues.Type) || (reqQues.Class != respQues.Class)) || !__goscript_dnsclient.equalASCIIName(reqQues.Name, respQues.Name)) {
		return false
	}
	return true
}

export async function dnsPacketRoundTrip(c: __goscript_net.Conn | null, id: number, query: dnsmessage.Question, b: $.Slice<number>): globalThis.Promise<[dnsmessage.Parser, dnsmessage.Header, $.GoError]> {
	{
		let [, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_net.Conn, null>) : $.pointerValue<Exclude<__goscript_net.Conn, null>>(c)).Write(b)
		if (err != null) {
			return [new dnsmessage.Parser(undefined, true), new dnsmessage.Header(undefined, true), err]
		}
	}

	b = $.makeSlice<number>(1232, undefined, "byte")
	while (true) {
		let [n, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_net.Conn, null>) : $.pointerValue<Exclude<__goscript_net.Conn, null>>(c)).Read(b)
		if (err != null) {
			return [new dnsmessage.Parser(undefined, true), new dnsmessage.Header(undefined, true), err]
		}
		let p: $.VarRef<dnsmessage.Parser> = $.varRef(new dnsmessage.Parser(undefined, true))
		// Ignore invalid responses as they may be malicious
		// forgery attempts. Instead continue waiting until
		// timeout. See golang.org/issue/13281.
		let __goscriptTuple1: any = p.value.Start($.goSlice(b, undefined, n))
		let h = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			continue
		}
		let __goscriptTuple2: any = p.value.Question()
		let q = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if ((err != null) || !checkResponse(id, query, h, q)) {
			continue
		}
		return [(p.value).clone(), (h).clone(), null]
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function dnsStreamRoundTrip(c: __goscript_net.Conn | null, id: number, query: dnsmessage.Question, b: $.Slice<number>): globalThis.Promise<[dnsmessage.Parser, dnsmessage.Header, $.GoError]> {
	{
		let [, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_net.Conn, null>) : $.pointerValue<Exclude<__goscript_net.Conn, null>>(c)).Write(b)
		if (err != null) {
			return [new dnsmessage.Parser(undefined, true), new dnsmessage.Header(undefined, true), err]
		}
	}

	b = $.makeSlice<number>(1280, undefined, "byte")
	{
		let [, err] = await io.ReadFull($.pointerValueOrNil((c as io.Reader | null))!, $.goSlice(b, undefined, 2))
		if (err != null) {
			return [new dnsmessage.Parser(undefined, true), new dnsmessage.Header(undefined, true), err]
		}
	}
	let l: number = ($.int($.arrayIndex(b!, 0)) << 8) | $.int($.arrayIndex(b!, 1))
	if (l > $.sliceLen(b)) {
		b = $.makeSlice<number>(l, undefined, "byte")
	}
	let [n, err] = await io.ReadFull($.pointerValueOrNil((c as io.Reader | null))!, $.goSlice(b, undefined, l))
	if (err != null) {
		return [new dnsmessage.Parser(undefined, true), new dnsmessage.Header(undefined, true), err]
	}
	let p: $.VarRef<dnsmessage.Parser> = $.varRef(new dnsmessage.Parser(undefined, true))
	let __goscriptTuple3: any = p.value.Start($.goSlice(b, undefined, n))
	let h = __goscriptTuple3[0]
	err = __goscriptTuple3[1]
	if (err != null) {
		return [new dnsmessage.Parser(undefined, true), new dnsmessage.Header(undefined, true), errCannotUnmarshalDNSMessage]
	}
	let __goscriptTuple4: any = p.value.Question()
	let q = __goscriptTuple4[0]
	err = __goscriptTuple4[1]
	if (err != null) {
		return [new dnsmessage.Parser(undefined, true), new dnsmessage.Header(undefined, true), errCannotUnmarshalDNSMessage]
	}
	if (!checkResponse(id, query, h, q)) {
		return [new dnsmessage.Parser(undefined, true), new dnsmessage.Header(undefined, true), errInvalidDNSResponse]
	}
	return [(p.value).clone(), (h).clone(), null]
}

export function checkHeader(p: dnsmessage.Parser | $.VarRef<dnsmessage.Parser> | null, h: dnsmessage.Header): $.GoError {
	let [rcode, hasAdd] = extractExtendedRCode(($.pointerValue<dnsmessage.Parser>(p)).clone(), h)

	if (rcode == 3) {
		return $.interfaceValue<$.GoError>(__goscript_net.errNoSuchHost, "*net.notFoundError", /* @__PURE__ */ $.pointerType("net.notFoundError"))
	}

	let [, err] = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dnsmessage.Parser).AnswerHeader() : dnsmessage.Parser.prototype.AnswerHeader.call(p))
	if ((err != null) && (!$.comparableEqual(err, dnsmessage.ErrSectionDone))) {
		return errCannotUnmarshalDNSMessage
	}

	// libresolv continues to the next server when it receives
	// an invalid referral response. See golang.org/issue/15434.
	if (((((rcode == 0) && !h.Authoritative) && !h.RecursionAvailable) && ($.comparableEqual(err, dnsmessage.ErrSectionDone))) && !hasAdd) {
		return errLameReferral
	}

	if ((rcode != 0) && (rcode != 3)) {
		// None of the error codes make sense
		// for the query we sent. If we didn't get
		// a name error and we didn't get success,
		// the server is behaving incorrectly or
		// having temporary trouble.
		if (rcode == 2) {
			return $.interfaceValue<$.GoError>(__goscript_get_errServerTemporarilyMisbehaving(), "*net.temporaryError", /* @__PURE__ */ $.pointerType("net.temporaryError"))
		}
		return errServerMisbehaving
	}

	return null
}

export function skipToAnswer(p: dnsmessage.Parser | $.VarRef<dnsmessage.Parser> | null, qtype: dnsmessage.Type): $.GoError {
	while (true) {
		let [h, err] = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dnsmessage.Parser).AnswerHeader() : dnsmessage.Parser.prototype.AnswerHeader.call(p))
		if ($.comparableEqual(err, dnsmessage.ErrSectionDone)) {
			return $.interfaceValue<$.GoError>(__goscript_net.errNoSuchHost, "*net.notFoundError", /* @__PURE__ */ $.pointerType("net.notFoundError"))
		}
		if (err != null) {
			return errCannotUnmarshalDNSMessage
		}
		if (h.Type == qtype) {
			return null
		}
		{
			let __goscriptShadow5 = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dnsmessage.Parser).SkipAnswer() : dnsmessage.Parser.prototype.SkipAnswer.call(p))
			if (__goscriptShadow5 != null) {
				return errCannotUnmarshalDNSMessage
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function extractExtendedRCode(__goscriptParam0: dnsmessage.Parser, hdr: dnsmessage.Header): [dnsmessage.RCode, boolean] {
	let p: $.VarRef<dnsmessage.Parser> = $.varRef(__goscriptParam0)
	p.value.SkipAllAnswers()
	p.value.SkipAllAuthorities()
	let hasAdd = false
	while (true) {
		let __goscriptTuple5: any = p.value.AdditionalHeader()
		let ahdr = $.varRef(__goscriptTuple5[0])
		let err = __goscriptTuple5[1]
		if (err != null) {
			return [hdr.RCode, hasAdd]
		}
		hasAdd = true
		if (ahdr.value.Type == 41) {
			return [ahdr.value.ExtendedRCode(hdr.RCode), hasAdd]
		}
		{
			let __goscriptShadow6 = p.value.SkipAdditional()
			if (__goscriptShadow6 != null) {
				return [hdr.RCode, hasAdd]
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export let resolvConf: $.VarRef<resolverConfig> = $.varRef(new resolverConfig(undefined, true))

export function __goscript_set_resolvConf(__goscriptValue: resolverConfig): void {
	$.assignStruct(resolvConf.value, __goscriptValue)
}

export async function getSystemDNSConfig(): globalThis.Promise<__goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null> {
	return getSystemDNSConfigNamed("/etc/resolv.conf")
}

export async function getSystemDNSConfigNamed(path: string): globalThis.Promise<__goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null> {
	await resolvConf.value.tryUpdate(path)
	return (resolvConf.value.dnsConfig.Load() as __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null)
}

export let distantFuture: time.Time = $.markAsStructValue($.cloneStructValue(time.Date(3000, 1, 2, 3, 4, 5, 6, time.UTC)))

export function __goscript_set_distantFuture(__goscriptValue: time.Time): void {
	$.assignStruct(distantFuture, __goscriptValue)
}

export function avoidDNS(name: string): boolean {
	if ($.stringEqual(name, "")) {
		return true
	}
	name = stringslite.TrimSuffix(name, ".")
	return __goscript_parse.stringsHasSuffixFold(name, ".onion")
}

export let lookupOrderName: globalThis.Map<hostLookupOrder, string> | null = $.makeMap<hostLookupOrder, string>([[0, "cgo"], [1, "files,dns"], [2, "dns,files"], [3, "files"], [4, "dns"]])

export function __goscript_set_lookupOrderName(__goscriptValue: globalThis.Map<hostLookupOrder, string> | null): void {
	lookupOrderName = __goscriptValue
}

export function hostLookupOrder_String(o: hostLookupOrder): string {
	{
		let [s, ok] = $.mapGet<hostLookupOrder, string, string>(lookupOrderName, o, "")
		if (ok) {
			return s
		}
	}
	return $.concatString(($.concatString("hostLookupOrder=", strconv.Itoa($.int(o)))), "??")
}

export async function goLookupIPFiles(name: string): globalThis.Promise<[$.Slice<__goscript_iprawsock.IPAddr>, string]> {
	let addrs: $.Slice<__goscript_iprawsock.IPAddr> = null! as $.Slice<__goscript_iprawsock.IPAddr>
	let canonical: string = ""
	let __goscriptTuple6: any = await __goscript_hosts.lookupStaticHost(name)
	let addr: $.Slice<string> = __goscriptTuple6[0]
	canonical = __goscriptTuple6[1]
	for (let __goscriptRangeTarget0 = addr, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let haddr = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		let __goscriptShadow7 = haddr
		let __goscriptTuple7: any = __goscript_ipsock.splitHostZone(__goscriptShadow7)
		let __goscriptShadow8 = __goscriptTuple7[0]
		let zone = __goscriptTuple7[1]
		{
			let ip: __goscript_ip.IP = (__goscript_ip.ParseIP(__goscriptShadow8) as __goscript_ip.IP)
			if (ip != null) {
				let __goscriptShadow9 = new __goscript_iprawsock.IPAddr({IP: (ip as __goscript_ip.IP), Zone: zone}, true)
				addrs = $.appendOne(addrs, (__goscriptShadow9).clone())
			}
		}
	}
	await __goscript_addrselect.sortByRFC6724(addrs)
	return [addrs, canonical]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "net.dnsConfig", zero: () => new __goscript_dnsconfig.dnsConfig(undefined, true) }})
}

var __goscriptAwait: any
